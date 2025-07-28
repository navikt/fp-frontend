import{r as O,u as le,_ as W,s as Q,c as oe,a as h,R as f,b as ee,S as ne,d as ge,j as s,P as ue,e as ce,w as ke}from"./iframe-DDvtVcVO.js";function me(e,a){var t=e.values,n=W(e,["values"]),r=a.values,d=W(a,["values"]);return Q(r,t)&&Q(n,d)}function re(e){var a=le(),t=a.formatMessage,n=a.textComponent,r=n===void 0?O.Fragment:n,d=e.id,i=e.description,l=e.defaultMessage,u=e.values,o=e.children,c=e.tagName,m=c===void 0?r:c,v=e.ignoreTag,j={id:d,description:i,defaultMessage:l},p=t(j,u,{ignoreTag:v});return typeof o=="function"?o(Array.isArray(p)?p:[p]):m?O.createElement(m,null,p):O.createElement(O.Fragment,null,p)}re.displayName="FormattedMessage";var k=O.memo(re,me);k.displayName="MemoizedFormattedMessage";var B=(e=>(e.NYE_OPPLYSNINGER="NYE_OPPLYSNINGER",e.ULIK_REGELVERKSTOLKNING="ULIK_REGELVERKSTOLKNING",e.ULIK_VURDERING="ULIK_VURDERING",e.PROSESSUELL_FEIL="PROSESSUELL_FEIL",e))(B||{}),y=(e=>(e.ANKE_AVVIS="ANKE_AVVIS",e.ANKE_STADFESTE_YTELSESVEDTAK="ANKE_STADFESTE_YTELSESVEDTAK",e.ANKE_OMGJOER="ANKE_OMGJOER",e.ANKE_OPPHEVE_OG_HJEMSENDE="ANKE_OPPHEVE_OG_HJEMSENDE",e.ANKE_HJEMSENDE_UTEN_OPPHEV="ANKE_HJEMSENDE_UTEN_OPPHEV",e))(y||{}),K=(e=>(e.ANKE_DELVIS_OMGJOERING_TIL_GUNST="ANKE_DELVIS_OMGJOERING_TIL_GUNST",e.ANKE_TIL_GUNST="ANKE_TIL_GUNST",e.ANKE_TIL_UGUNST="ANKE_TIL_UGUNST",e))(K||{});const V=e=>oe({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var be=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};O.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:d,truncate:i,weight:l="regular",align:u,visuallyHidden:o,textColor:c}=e,m=be(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=h();return f.createElement(r,Object.assign({},m,{ref:a,className:v(t,"navds-body-long",`navds-body-long--${n}`,V({spacing:d,truncate:i,weight:l,align:u,visuallyHidden:o,textColor:c}))}))});var ye=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const _=O.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:d,truncate:i,weight:l="regular",align:u,visuallyHidden:o,textColor:c}=e,m=ye(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=h();return f.createElement(r,Object.assign({},m,{ref:a,className:v(t,"navds-body-short",`navds-body-short--${n}`,V({spacing:d,truncate:i,weight:l,align:u,visuallyHidden:o,textColor:c}))}))});var ve=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};O.forwardRef((e,a)=>{var{className:t,size:n="medium",spacing:r,uppercase:d,as:i="p",truncate:l,weight:u="regular",align:o,visuallyHidden:c,textColor:m}=e,v=ve(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:j}=h();return f.createElement(i,Object.assign({},v,{ref:a,className:j(t,"navds-detail",V({spacing:r,truncate:l,weight:u,align:o,visuallyHidden:c,textColor:m,uppercase:d}),{"navds-detail--small":n==="small"})}))});var Oe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};O.forwardRef((e,a)=>{var{children:t,className:n,size:r,spacing:d,as:i="p",showIcon:l=!1}=e,u=Oe(e,["children","className","size","spacing","as","showIcon"]);const{cn:o}=h();return f.createElement(i,Object.assign({},u,{ref:a,className:o("navds-error-message","navds-label",n,V({spacing:d}),{"navds-label--small":r==="small","navds-error-message--show-icon":l})}),l&&f.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var fe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const H=O.forwardRef((e,a)=>{var{level:t="1",size:n,className:r,as:d,spacing:i,align:l,visuallyHidden:u,textColor:o}=e,c=fe(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:m}=h(),v=d??`h${t}`;return f.createElement(v,Object.assign({},c,{ref:a,className:m(r,"navds-heading",`navds-heading--${n}`,V({spacing:i,align:l,visuallyHidden:u,textColor:o}))}))});var pe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};O.forwardRef((e,a)=>{var{className:t,spacing:n,as:r="p"}=e,d=pe(e,["className","spacing","as"]);const{cn:i}=h();return f.createElement(r,Object.assign({},d,{ref:a,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Ee=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const x=O.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="label",spacing:d,visuallyHidden:i,textColor:l}=e,u=Ee(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:o}=h();return f.createElement(r,Object.assign({},u,{ref:a,className:o(t,"navds-label",V({spacing:d,visuallyHidden:i,textColor:l}),{"navds-label--small":n==="small"})}))});function he(e,a){const t=Object.entries(e).filter(([n])=>!a.includes(n));return Object.fromEntries(t)}f.useId;function b(e,a,t,n){return n?typeof n=="string"?{[`--__${e}c-${a}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([r,d])=>[`--__${e}c-${a}-${t}-${r}`,d])):{}}const je={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},X=(e,a,t,n,r,d)=>a.split(" ").map((i,l,u)=>{var o;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/u.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/u.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let c=`var(--${d}-${t}-${i})`;if(n.includes(i))c=i==="px"?"1px":i;else if(i.startsWith("space"))c=`var(--${d}-${i})`;else{const m=`--${d}-spacing-${i}`;c=`var(${(o=je[m])!==null&&o!==void 0?o:m})`}return r?i==="0"?"0":`calc(-1 * ${c})`:c}).join(" ");function E(e,a,t,n,r,d=!1,i=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${a}-${t}-xs`]:X(t,r,n,i,d,e)};const l={};return Object.entries(r).forEach(([u,o])=>{l[`--__${e}c-${a}-${t}-${u}`]=X(t,o,n,i,d,e)}),l}const Ae=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],_e=({children:e,className:a,padding:t,paddingInline:n,paddingBlock:r,margin:d,marginInline:i,marginBlock:l,width:u,minWidth:o,maxWidth:c,height:m,minHeight:v,maxHeight:j,position:p,inset:S,top:N,right:T,left:G,bottom:C,overflow:$,overflowX:U,overflowY:F,flexBasis:z,flexGrow:Y,flexShrink:J,gridColumn:Z})=>{const se=ee(!1),{cn:ie}=h(),g=se?"ax":"a",de=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},E(g,"r","p","spacing",t)),E(g,"r","pi","spacing",n)),E(g,"r","pb","spacing",r)),E(g,"r","m","spacing",d)),E(g,"r","mi","spacing",i)),E(g,"r","mb","spacing",l)),b(g,"r","w",u)),b(g,"r","minw",o)),b(g,"r","maxw",c)),b(g,"r","h",m)),b(g,"r","minh",v)),b(g,"r","maxh",j)),b(g,"r","position",p)),E(g,"r","inset","spacing",S)),E(g,"r","top","spacing",N)),E(g,"r","right","spacing",T)),E(g,"r","bottom","spacing",C)),E(g,"r","left","spacing",G)),b(g,"r","overflow",$)),b(g,"r","overflowx",U)),b(g,"r","overflowy",F)),b(g,"r","flex-basis",z)),b(g,"r","flex-grow",Y)),b(g,"r","flex-shrink",J)),b(g,"r","grid-column",Z));return f.createElement(ne,{className:ie({className:a,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":r,"navds-r-m":d,"navds-r-mi":i,"navds-r-mb":l,"navds-r-w":u,"navds-r-minw":o,"navds-r-maxw":c,"navds-r-h":m,"navds-r-minh":v,"navds-r-maxh":j,"navds-r-position":p,"navds-r-inset":S,"navds-r-top":N,"navds-r-right":T,"navds-r-bottom":C,"navds-r-left":G,"navds-r-overflow":$,"navds-r-overflowx":U,"navds-r-overflowy":F,"navds-r-flex-basis":z,"navds-r-flex-grow":Y,"navds-r-flex-shrink":J,"navds-r-grid-column":Z}),style:de},e)};var Ve=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ae=O.forwardRef((e,a)=>{var{children:t,className:n,as:r="div",align:d,justify:i,wrap:l=!0,gap:u,style:o,direction:c="row",asChild:m}=e,v=Ve(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const p=ee(!1)?"ax":"a",{cn:S}=h(),N=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},o),E(p,"stack","gap","spacing",u)),b(p,"stack","direction",c)),b(p,"stack","align",d)),b(p,"stack","justify",i)),T=m?ne:r;return f.createElement(_e,Object.assign({},v),f.createElement(T,Object.assign({},he(v,Ae),{ref:a,style:N,className:S("navds-stack",n,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":u,"navds-stack-align":d,"navds-stack-justify":i,"navds-stack-direction":c,"navds-stack-wrap":l})}),t))});var xe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};O.forwardRef((e,a)=>{var{as:t="div"}=e,n=xe(e,["as"]);return f.createElement(ae,Object.assign({as:t},n,{ref:a,direction:"row"}))});var Ke=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const A=O.forwardRef((e,a)=>{var{as:t="div"}=e,n=Ke(e,["as"]);return f.createElement(ae,Object.assign({as:t},n,{ref:a,direction:"column",wrap:!1}))}),te=({ankeVurdering:e})=>{const a=e?.ankeVurderingResultat,t=e?.underBehandlingKabal||!1,n=e?.underBehandlingKabalTrygderett||!1,r=e?.behandletAvKabal||!1,{alleKodeverk:d}=ge(),i=d.AnkeOmgjørÅrsak;return s.jsxs(A,{gap:"4",children:[s.jsx(H,{size:"small",children:s.jsx(k,{id:"Ankebehandling.Merknad.Title"})}),t&&s.jsx(H,{size:"small",children:s.jsx(k,{id:"Ankebehandling.Merknad.SeKabalText"})}),r&&s.jsx(H,{size:"small",children:s.jsx(k,{id:"Ankebehandling.Merknad.BehandletKabal"})}),!t&&!n&&s.jsxs(s.Fragment,{children:[s.jsxs(A,{gap:"1",children:[s.jsx(x,{size:"small",children:s.jsx(k,{id:"Ankebehandling.Merknad.Merknader"})}),s.jsx(_,{size:"small",children:a?.erMerknaderMottatt?s.jsx(k,{id:"Ankebehandling.Merknad.Merknader.Ja"}):s.jsx(k,{id:"Ankebehandling.Merknad.Merknader.Nei"})})]}),s.jsxs(A,{gap:"1",children:[s.jsx(x,{size:"small",children:s.jsx(k,{id:"Ankebehandling.Fritekst"})}),s.jsx(_,{size:"small",children:a?.merknadKommentar})]}),s.jsxs(A,{gap:"1",children:[s.jsx(x,{size:"small",children:s.jsx(k,{id:"Ankebehandling.Resultat"})}),s.jsxs(_,{size:"small",children:[a?.trygderettVurdering===y.ANKE_OMGJOER&&s.jsx(k,{id:"Ankebehandling.Resultat.Omgjør"}),a?.trygderettVurdering===y.ANKE_OPPHEVE_OG_HJEMSENDE&&s.jsx(k,{id:"Ankebehandling.Resultat.Opphev"}),a?.trygderettVurdering===y.ANKE_HJEMSENDE_UTEN_OPPHEV&&s.jsx(k,{id:"Ankebehandling.Resultat.Hjemsend"}),a?.trygderettVurdering===y.ANKE_AVVIS&&s.jsx(k,{id:"Ankebehandling.Resultat.Avvis"}),a?.trygderettVurdering===y.ANKE_STADFESTE_YTELSESVEDTAK&&s.jsx(k,{id:"Ankebehandling.Resultat.Stadfest"})]})]})]}),y.ANKE_OMGJOER===a?.trygderettVurdering&&s.jsxs(s.Fragment,{children:[s.jsxs(A,{gap:"1",children:[s.jsx(x,{size:"small",children:s.jsx(k,{id:"Ankebehandling.OmgjoeringArsak"})}),s.jsx(_,{size:"small",children:i.find(l=>l.kode===a?.trygderettOmgjoerArsak)?.navn})]}),s.jsx(A,{gap:"1",children:s.jsxs(_,{size:"small",children:[a.trygderettVurderingOmgjoer===K.ANKE_TIL_GUNST&&s.jsx(k,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),a.trygderettVurderingOmgjoer===K.ANKE_TIL_UGUNST&&s.jsx(k,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),a.trygderettVurderingOmgjoer===K.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&s.jsx(k,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})})]}),(y.ANKE_OPPHEVE_OG_HJEMSENDE===a?.trygderettVurdering||y.ANKE_HJEMSENDE_UTEN_OPPHEV===a?.trygderettVurdering)&&!r&&s.jsxs(A,{gap:"1",children:[s.jsx(x,{size:"small",children:s.jsx(k,{id:"Ankebehandling.OmgjoeringArsak"})}),s.jsx(_,{size:"small",children:i.find(l=>l.kode===a.trygderettOmgjoerArsak)?.navn})]})]})};te.__docgenInfo={description:"",methods:[],displayName:"TrygderettsbehandlingForm",props:{ankeVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Se={"Ankebehandling.Merknad.Title":"Trygderettsbehandling","Ankebehandling.Merknad.HelpText":"Kommentarer til Trygderettsbehandlingen og videre oppfølging","Ankebehandling.Merknad.AvsluttBehandling":"Avslutt behandlingen","Ankebehandling.Merknad.Merknader":"Har det kommet merknader?","Ankebehandling.Merknad.Merknader.Ja":"Ja","Ankebehandling.Merknad.Merknader.Nei":"Nei","Ankebehandling.Merknad.Merknader.Kommentarer":"Kommentarer til Trygderettsbehandlingen","Ankebehandling.Merknad.Merknader.LagreKommentarer":"Lagre kommentarer","Ankebehandling.Merknad.SendTilKabal":"Send til KABAL","Ankebehandling.Merknad.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.Merknad.SeKabalText":"Anken behandles i KABAL","Ankebehandling.Merknad.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Merknad.Hjemmel":"Hjemmel","Ankebehandling.Fritekst":"Fritekst for Trygderettsbehandling","Ankebehandling.Resultat":"Resultat fra Trygdretten","Ankebehandling.Resultat.Stadfest":"Stadfestet","Ankebehandling.Resultat.Omgjør":"Omgjort","Ankebehandling.Resultat.Opphev":"Opphevet","Ankebehandling.Resultat.Hjemsend":"Hjemsendt","Ankebehandling.Resultat.Avvis":"Avvist","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Resultat.SendtTrygderett":"Dato sendt Trygderetten","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.OmgjoeringArsak":"Årsak","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},Ne=ce(Se),q=({ankeVurdering:e})=>s.jsx(ue,{value:Ne,children:s.jsx(te,{ankeVurdering:e})});q.__docgenInfo={description:"",methods:[],displayName:"AnkeTrygderettsbehandlingProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Re={title:"prosess/anke/prosess-anke-trygderettsbehandling",component:q,decorators:[ke],render:e=>s.jsx(q,{...e})},R={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:y.ANKE_OMGJOER,trygderettOmgjoerArsak:B.NYE_OPPLYSNINGER,trygderettVurderingOmgjoer:K.ANKE_TIL_GUNST}}}},M={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:y.ANKE_OPPHEVE_OG_HJEMSENDE,trygderettOmgjoerArsak:B.NYE_OPPLYSNINGER}}}},I={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:y.ANKE_HJEMSENDE_UTEN_OPPHEV,trygderettOmgjoerArsak:B.NYE_OPPLYSNINGER}}}},w={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:y.ANKE_AVVIS}}}},P={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:y.ANKE_STADFESTE_YTELSESVEDTAK}}}},D={args:{ankeVurdering:{ankeVurderingResultat:{trygderettVurdering:y.ANKE_STADFESTE_YTELSESVEDTAK},behandletAvKabal:!0}}},L={args:{ankeVurdering:{ankeVurderingResultat:{trygderettVurdering:y.ANKE_STADFESTE_YTELSESVEDTAK},underBehandlingKabal:!0}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_AVVIS
      }
    } as AnkeVurdering
  }
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      }
    } as AnkeVurdering
  }
}`,...P.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      },
      behandletAvKabal: true
    } as AnkeVurdering
  }
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      },
      underBehandlingKabal: true
    } as AnkeVurdering
  }
}`,...L.parameters?.docs?.source}}};const Me=["ResultatVedOmgjortResultat","ResultatVedOpphevetResultat","ResultatVedHjemsendtResultat","ResultatVedAvvistResultat","ResultatVedStadfestetResultat","ErBehandletIKabel","ErUnderBehandlingIKabel"];export{D as ErBehandletIKabel,L as ErUnderBehandlingIKabel,w as ResultatVedAvvistResultat,I as ResultatVedHjemsendtResultat,R as ResultatVedOmgjortResultat,M as ResultatVedOpphevetResultat,P as ResultatVedStadfestetResultat,Me as __namedExportsOrder,Re as default};
