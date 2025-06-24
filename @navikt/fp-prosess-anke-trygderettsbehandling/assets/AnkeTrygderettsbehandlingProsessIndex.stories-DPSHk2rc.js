import{r as f,u as Ne,_ as W,s as Q,c as Ve,a as h,R as v,b as Ee,S as he,d as Te,j as s,P as Re,e as Me,w as Ie}from"./iframe-B6NFLL-4.js";function we(e,r){var a=e.values,n=W(e,["values"]),t=r.values,l=W(r,["values"]);return Q(t,a)&&Q(n,l)}function je(e){var r=Ne(),a=r.formatMessage,n=r.textComponent,t=n===void 0?f.Fragment:n,l=e.id,i=e.description,g=e.defaultMessage,o=e.values,d=e.children,c=e.tagName,k=c===void 0?t:c,O=e.ignoreTag,j={id:l,description:i,defaultMessage:g},p=a(j,o,{ignoreTag:O});return typeof d=="function"?d(Array.isArray(p)?p:[p]):k?f.createElement(k,null,p):f.createElement(f.Fragment,null,p)}je.displayName="FormattedMessage";var m=f.memo(je,we);m.displayName="MemoizedFormattedMessage";var B=(e=>(e.NYE_OPPLYSNINGER="NYE_OPPLYSNINGER",e.ULIK_REGELVERKSTOLKNING="ULIK_REGELVERKSTOLKNING",e.ULIK_VURDERING="ULIK_VURDERING",e.PROSESSUELL_FEIL="PROSESSUELL_FEIL",e))(B||{}),y=(e=>(e.ANKE_AVVIS="ANKE_AVVIS",e.ANKE_STADFESTE_YTELSESVEDTAK="ANKE_STADFESTE_YTELSESVEDTAK",e.ANKE_OMGJOER="ANKE_OMGJOER",e.ANKE_OPPHEVE_OG_HJEMSENDE="ANKE_OPPHEVE_OG_HJEMSENDE",e.ANKE_HJEMSENDE_UTEN_OPPHEV="ANKE_HJEMSENDE_UTEN_OPPHEV",e))(y||{}),S=(e=>(e.ANKE_DELVIS_OMGJOERING_TIL_GUNST="ANKE_DELVIS_OMGJOERING_TIL_GUNST",e.ANKE_TIL_GUNST="ANKE_TIL_GUNST",e.ANKE_TIL_UGUNST="ANKE_TIL_UGUNST",e))(S||{});const x=e=>Ve({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Pe=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};f.forwardRef((e,r)=>{var{className:a,size:n="medium",as:t="p",spacing:l,truncate:i,weight:g="regular",align:o,visuallyHidden:d,textColor:c}=e,k=Pe(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:O}=h();return v.createElement(t,Object.assign({},k,{ref:r,className:O(a,"navds-body-long",`navds-body-long--${n}`,x({spacing:l,truncate:i,weight:g,align:o,visuallyHidden:d,textColor:c}))}))});var De=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};const _=f.forwardRef((e,r)=>{var{className:a,size:n="medium",as:t="p",spacing:l,truncate:i,weight:g="regular",align:o,visuallyHidden:d,textColor:c}=e,k=De(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:O}=h();return v.createElement(t,Object.assign({},k,{ref:r,className:O(a,"navds-body-short",`navds-body-short--${n}`,x({spacing:l,truncate:i,weight:g,align:o,visuallyHidden:d,textColor:c}))}))});var Le=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};f.forwardRef((e,r)=>{var{className:a,size:n="medium",spacing:t,uppercase:l,as:i="p",truncate:g,weight:o="regular",align:d,visuallyHidden:c,textColor:k}=e,O=Le(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:j}=h();return v.createElement(i,Object.assign({},O,{ref:r,className:j(a,"navds-detail",x({spacing:t,truncate:g,weight:o,align:d,visuallyHidden:c,textColor:k,uppercase:l}),{"navds-detail--small":n==="small"})}))});var Be=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};f.forwardRef((e,r)=>{var{children:a,className:n,size:t,spacing:l,as:i="p",showIcon:g=!1}=e,o=Be(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=h();return v.createElement(i,Object.assign({},o,{ref:r,className:d("navds-error-message","navds-label",n,x({spacing:l}),{"navds-label--small":t==="small","navds-error-message--show-icon":g})}),g&&v.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),a)});var He=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};const H=f.forwardRef((e,r)=>{var{level:a="1",size:n,className:t,as:l,spacing:i,align:g,visuallyHidden:o,textColor:d}=e,c=He(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:k}=h(),O=l??`h${a}`;return v.createElement(O,Object.assign({},c,{ref:r,className:k(t,"navds-heading",`navds-heading--${n}`,x({spacing:i,align:g,visuallyHidden:o,textColor:d}))}))});var qe=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};f.forwardRef((e,r)=>{var{className:a,spacing:n,as:t="p"}=e,l=qe(e,["className","spacing","as"]);const{cn:i}=h();return v.createElement(t,Object.assign({},l,{ref:r,className:i(a,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Ge=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};const K=f.forwardRef((e,r)=>{var{className:a,size:n="medium",as:t="label",spacing:l,visuallyHidden:i,textColor:g}=e,o=Ge(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=h();return v.createElement(t,Object.assign({},o,{ref:r,className:d(a,"navds-label",x({spacing:l,visuallyHidden:i,textColor:g}),{"navds-label--small":n==="small"})}))});function Ce(e,r){const a=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(a)}v.useId;function b(e,r,a,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${a}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([t,l])=>[`--__${e}c-${r}-${a}-${t}`,l])):{}}const $e={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},X=(e,r,a,n,t,l)=>r.split(" ").map((i,g,o)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let c=`var(--${l}-${a}-${i})`;if(n.includes(i))c=i==="px"?"1px":i;else if(i.startsWith("space"))c=`var(--${l}-${i})`;else{const k=`--${l}-spacing-${i}`;c=`var(${(d=$e[k])!==null&&d!==void 0?d:k})`}return t?i==="0"?"0":`calc(-1 * ${c})`:c}).join(" ");function E(e,r,a,n,t,l=!1,i=[]){if(!t)return{};if(typeof t=="string")return{[`--__${e}c-${r}-${a}-xs`]:X(a,t,n,i,l,e)};const g={};return Object.entries(t).forEach(([o,d])=>{g[`--__${e}c-${r}-${a}-${o}`]=X(a,d,n,i,l,e)}),g}const Ue=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Fe=({children:e,className:r,padding:a,paddingInline:n,paddingBlock:t,margin:l,marginInline:i,marginBlock:g,width:o,minWidth:d,maxWidth:c,height:k,minHeight:O,maxHeight:j,position:p,inset:N,top:V,right:T,left:G,bottom:C,overflow:$,overflowX:U,overflowY:F,flexBasis:z,flexGrow:Y,flexShrink:J,gridColumn:Z})=>{const xe=Ee(!1),{cn:Ke}=h(),u=xe?"ax":"a",Se=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},E(u,"r","p","spacing",a)),E(u,"r","pi","spacing",n)),E(u,"r","pb","spacing",t)),E(u,"r","m","spacing",l)),E(u,"r","mi","spacing",i)),E(u,"r","mb","spacing",g)),b(u,"r","w",o)),b(u,"r","minw",d)),b(u,"r","maxw",c)),b(u,"r","h",k)),b(u,"r","minh",O)),b(u,"r","maxh",j)),b(u,"r","position",p)),E(u,"r","inset","spacing",N)),E(u,"r","top","spacing",V)),E(u,"r","right","spacing",T)),E(u,"r","bottom","spacing",C)),E(u,"r","left","spacing",G)),b(u,"r","overflow",$)),b(u,"r","overflowx",U)),b(u,"r","overflowy",F)),b(u,"r","flex-basis",z)),b(u,"r","flex-grow",Y)),b(u,"r","flex-shrink",J)),b(u,"r","grid-column",Z));return v.createElement(he,{className:Ke({className:r,"navds-r-p":a,"navds-r-pi":n,"navds-r-pb":t,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":g,"navds-r-w":o,"navds-r-minw":d,"navds-r-maxw":c,"navds-r-h":k,"navds-r-minh":O,"navds-r-maxh":j,"navds-r-position":p,"navds-r-inset":N,"navds-r-top":V,"navds-r-right":T,"navds-r-bottom":C,"navds-r-left":G,"navds-r-overflow":$,"navds-r-overflowx":U,"navds-r-overflowy":F,"navds-r-flex-basis":z,"navds-r-flex-grow":Y,"navds-r-flex-shrink":J,"navds-r-grid-column":Z}),style:Se},e)};var ze=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};const Ae=f.forwardRef((e,r)=>{var{children:a,className:n,as:t="div",align:l,justify:i,wrap:g=!0,gap:o,style:d,direction:c="row",asChild:k}=e,O=ze(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const p=Ee(!1)?"ax":"a",{cn:N}=h(),V=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),E(p,"stack","gap","spacing",o)),b(p,"stack","direction",c)),b(p,"stack","align",l)),b(p,"stack","justify",i)),T=k?he:t;return v.createElement(Fe,Object.assign({},O),v.createElement(T,Object.assign({},Ce(O,Ue),{ref:r,style:V,className:N("navds-stack",n,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":o,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":c,"navds-stack-wrap":g})}),a))});var Ye=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};f.forwardRef((e,r)=>{var{as:a="div"}=e,n=Ye(e,["as"]);return v.createElement(Ae,Object.assign({as:a},n,{ref:r,direction:"row"}))});var Je=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};const A=f.forwardRef((e,r)=>{var{as:a="div"}=e,n=Je(e,["as"]);return v.createElement(Ae,Object.assign({as:a},n,{ref:r,direction:"column",wrap:!1}))}),_e=({ankeVurdering:e})=>{var g,o;const r=e==null?void 0:e.ankeVurderingResultat,a=(e==null?void 0:e.underBehandlingKabal)||!1,n=(e==null?void 0:e.underBehandlingKabalTrygderett)||!1,t=(e==null?void 0:e.behandletAvKabal)||!1,{alleKodeverk:l}=Te(),i=l.AnkeOmgjørÅrsak;return s.jsxs(A,{gap:"4",children:[s.jsx(H,{size:"small",children:s.jsx(m,{id:"Ankebehandling.Merknad.Title"})}),a&&s.jsx(H,{size:"small",children:s.jsx(m,{id:"Ankebehandling.Merknad.SeKabalText"})}),t&&s.jsx(H,{size:"small",children:s.jsx(m,{id:"Ankebehandling.Merknad.BehandletKabal"})}),!a&&!n&&s.jsxs(s.Fragment,{children:[s.jsxs(A,{gap:"1",children:[s.jsx(K,{size:"small",children:s.jsx(m,{id:"Ankebehandling.Merknad.Merknader"})}),s.jsx(_,{size:"small",children:r!=null&&r.erMerknaderMottatt?s.jsx(m,{id:"Ankebehandling.Merknad.Merknader.Ja"}):s.jsx(m,{id:"Ankebehandling.Merknad.Merknader.Nei"})})]}),s.jsxs(A,{gap:"1",children:[s.jsx(K,{size:"small",children:s.jsx(m,{id:"Ankebehandling.Fritekst"})}),s.jsx(_,{size:"small",children:r==null?void 0:r.merknadKommentar})]}),s.jsxs(A,{gap:"1",children:[s.jsx(K,{size:"small",children:s.jsx(m,{id:"Ankebehandling.Resultat"})}),s.jsxs(_,{size:"small",children:[(r==null?void 0:r.trygderettVurdering)===y.ANKE_OMGJOER&&s.jsx(m,{id:"Ankebehandling.Resultat.Omgjør"}),(r==null?void 0:r.trygderettVurdering)===y.ANKE_OPPHEVE_OG_HJEMSENDE&&s.jsx(m,{id:"Ankebehandling.Resultat.Opphev"}),(r==null?void 0:r.trygderettVurdering)===y.ANKE_HJEMSENDE_UTEN_OPPHEV&&s.jsx(m,{id:"Ankebehandling.Resultat.Hjemsend"}),(r==null?void 0:r.trygderettVurdering)===y.ANKE_AVVIS&&s.jsx(m,{id:"Ankebehandling.Resultat.Avvis"}),(r==null?void 0:r.trygderettVurdering)===y.ANKE_STADFESTE_YTELSESVEDTAK&&s.jsx(m,{id:"Ankebehandling.Resultat.Stadfest"})]})]})]}),y.ANKE_OMGJOER===(r==null?void 0:r.trygderettVurdering)&&s.jsxs(s.Fragment,{children:[s.jsxs(A,{gap:"1",children:[s.jsx(K,{size:"small",children:s.jsx(m,{id:"Ankebehandling.OmgjoeringArsak"})}),s.jsx(_,{size:"small",children:(g=i.find(d=>d.kode===(r==null?void 0:r.trygderettOmgjoerArsak)))==null?void 0:g.navn})]}),s.jsx(A,{gap:"1",children:s.jsxs(_,{size:"small",children:[r.trygderettVurderingOmgjoer===S.ANKE_TIL_GUNST&&s.jsx(m,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),r.trygderettVurderingOmgjoer===S.ANKE_TIL_UGUNST&&s.jsx(m,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),r.trygderettVurderingOmgjoer===S.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&s.jsx(m,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})})]}),(y.ANKE_OPPHEVE_OG_HJEMSENDE===(r==null?void 0:r.trygderettVurdering)||y.ANKE_HJEMSENDE_UTEN_OPPHEV===(r==null?void 0:r.trygderettVurdering))&&!t&&s.jsxs(A,{gap:"1",children:[s.jsx(K,{size:"small",children:s.jsx(m,{id:"Ankebehandling.OmgjoeringArsak"})}),s.jsx(_,{size:"small",children:(o=i.find(d=>d.kode===r.trygderettOmgjoerArsak))==null?void 0:o.navn})]})]})};_e.__docgenInfo={description:"",methods:[],displayName:"TrygderettsbehandlingForm",props:{ankeVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeVurdering?: string;
  ankeVurderingOmgjoer?: string;
  ankeOmgjoerArsak?: AnkeOmgjorArsak;
  trygderettVurdering?: string;
  trygderettVurderingOmgjoer?: string;
  trygderettOmgjoerArsak?: string;
  begrunnelse: string;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  erMerknaderMottatt?: boolean;
  sendtTilTrygderettenDato?: string;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"string",required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"string",required:!1}},{key:"ankeOmgjoerArsak",value:{name:"AnkeOmgjorArsak",required:!1}},{key:"trygderettVurdering",value:{name:"string",required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}}]},required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""}}};const Ze={"Ankebehandling.Merknad.Title":"Trygderettsbehandling","Ankebehandling.Merknad.HelpText":"Kommentarer til Trygderettsbehandlingen og videre oppfølging","Ankebehandling.Merknad.AvsluttBehandling":"Avslutt behandlingen","Ankebehandling.Merknad.Merknader":"Har det kommet merknader?","Ankebehandling.Merknad.Merknader.Ja":"Ja","Ankebehandling.Merknad.Merknader.Nei":"Nei","Ankebehandling.Merknad.Merknader.Kommentarer":"Kommentarer til Trygderettsbehandlingen","Ankebehandling.Merknad.Merknader.LagreKommentarer":"Lagre kommentarer","Ankebehandling.Merknad.SendTilKabal":"Send til KABAL","Ankebehandling.Merknad.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.Merknad.SeKabalText":"Anken behandles i KABAL","Ankebehandling.Merknad.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Merknad.Hjemmel":"Hjemmel","Ankebehandling.Fritekst":"Fritekst for Trygderettsbehandling","Ankebehandling.Resultat":"Resultat fra Trygdretten","Ankebehandling.Resultat.Stadfest":"Stadfestet","Ankebehandling.Resultat.Omgjør":"Omgjort","Ankebehandling.Resultat.Opphev":"Opphevet","Ankebehandling.Resultat.Hjemsend":"Hjemsendt","Ankebehandling.Resultat.Avvis":"Avvist","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Resultat.SendtTrygderett":"Dato sendt Trygderetten","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.OmgjoeringArsak":"Årsak","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},We=Me(Ze),q=({ankeVurdering:e})=>s.jsx(Re,{value:We,children:s.jsx(_e,{ankeVurdering:e})});q.__docgenInfo={description:"",methods:[],displayName:"AnkeTrygderettsbehandlingProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeVurdering?: string;
  ankeVurderingOmgjoer?: string;
  ankeOmgjoerArsak?: AnkeOmgjorArsak;
  trygderettVurdering?: string;
  trygderettVurderingOmgjoer?: string;
  trygderettOmgjoerArsak?: string;
  begrunnelse: string;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  erMerknaderMottatt?: boolean;
  sendtTilTrygderettenDato?: string;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"string",required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"string",required:!1}},{key:"ankeOmgjoerArsak",value:{name:"AnkeOmgjorArsak",required:!1}},{key:"trygderettVurdering",value:{name:"string",required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}}]},required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""}}};const Xe={title:"prosess/anke/prosess-anke-trygderettsbehandling",component:q,decorators:[Ie],render:e=>s.jsx(q,{...e})},R={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:y.ANKE_OMGJOER,trygderettOmgjoerArsak:B.NYE_OPPLYSNINGER,trygderettVurderingOmgjoer:S.ANKE_TIL_GUNST}}}},M={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:y.ANKE_OPPHEVE_OG_HJEMSENDE,trygderettOmgjoerArsak:B.NYE_OPPLYSNINGER}}}},I={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:y.ANKE_HJEMSENDE_UTEN_OPPHEV,trygderettOmgjoerArsak:B.NYE_OPPLYSNINGER}}}},w={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:y.ANKE_AVVIS}}}},P={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:y.ANKE_STADFESTE_YTELSESVEDTAK}}}},D={args:{ankeVurdering:{ankeVurderingResultat:{trygderettVurdering:y.ANKE_STADFESTE_YTELSESVEDTAK},behandletAvKabal:!0}}},L={args:{ankeVurdering:{ankeVurderingResultat:{trygderettVurdering:y.ANKE_STADFESTE_YTELSESVEDTAK},underBehandlingKabal:!0}}};var ee,ne,re;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,ae,se;M.parameters={...M.parameters,docs:{...(te=M.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,le,de;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(le=I.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var oe,ge,ue;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_AVVIS
      }
    } as AnkeVurdering
  }
}`,...(ue=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var ce,me,ke;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      }
    } as AnkeVurdering
  }
}`,...(ke=(me=P.parameters)==null?void 0:me.docs)==null?void 0:ke.source}}};var be,ye,Oe;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      },
      behandletAvKabal: true
    } as AnkeVurdering
  }
}`,...(Oe=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:Oe.source}}};var fe,ve,pe;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      },
      underBehandlingKabal: true
    } as AnkeVurdering
  }
}`,...(pe=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:pe.source}}};const en=["ResultatVedOmgjortResultat","ResultatVedOpphevetResultat","ResultatVedHjemsendtResultat","ResultatVedAvvistResultat","ResultatVedStadfestetResultat","ErBehandletIKabel","ErUnderBehandlingIKabel"];export{D as ErBehandletIKabel,L as ErUnderBehandlingIKabel,w as ResultatVedAvvistResultat,I as ResultatVedHjemsendtResultat,R as ResultatVedOmgjortResultat,M as ResultatVedOpphevetResultat,P as ResultatVedStadfestetResultat,en as __namedExportsOrder,Xe as default};
