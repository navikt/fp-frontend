import{g as dn,r as b,u as He,_ as _r,s as hr,c as Ce,a as $,R as d,b as Za,d as tt,e as cn,f as xa,S as mn,h as be,H as lt,j as h,N as vn,i as it,k as st,o as ot,l as gn,m as ut,x as dt,t as na,n as Qa,p as ct,P as mt,w as vt,q as gt}from"./iframe-B3w__pbc.js";import{r as ft}from"./index-CBOvPFY9.js";import"./preload-helper-PPVm8Dsz.js";var fn=ft();const Et=dn(fn);function _t(e,n){var r=e.values,a=_r(e,["values"]),t=n.values,l=_r(n,["values"]);return hr(t,r)&&hr(a,l)}function En(e){var n=He(),r=n.formatMessage,a=n.textComponent,t=a===void 0?b.Fragment:a,l=e.id,i=e.description,s=e.defaultMessage,u=e.values,v=e.children,c=e.tagName,f=c===void 0?t:c,E=e.ignoreTag,T={id:l,description:i,defaultMessage:s},y=r(T,u,{ignoreTag:E});return typeof v=="function"?v(Array.isArray(y)?y:[y]):f?b.createElement(f,null,y):b.createElement(b.Fragment,null,y)}En.displayName="FormattedMessage";var Y=b.memo(En,_t);Y.displayName="MemoizedFormattedMessage";var oa=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.AVKLAR_ADOPSJONSDOKUMENTAJON="5004",e.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET="5007",e.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKÅRET="5011",e.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD="5014",e.FORESLÅ_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SØKERS_OPPLYSNINGSPLIKT_MANU="5017",e.VURDER_OMSORGSOVERTAKELSEVILKÅRET="5018",e.UTGÅTT_5019="5019",e.UTGÅTT_5020="5020",e.UTGÅTT_5021="5021",e.UTGÅTT_5023="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.UTGÅTT_5025="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLÅ_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE="5031",e.VURDERE_ANNEN_YTELSE_FØR_VEDTAK="5033",e.VURDERE_DOKUMENT_FØR_VEDTAK="5034",e.VURDERE_INNTEKTSMELDING_FØR_VEDTAK="5003",e.MANUELL_VURDERING_AV_KLAGE_NFP="5035",e.UTGÅTT_5036="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSØKNAD_FORELDREPENGER="5040",e.VURDER_PERMISJON_UTEN_SLUTTDATO="5041",e.MANUELL_VURDERING_AV_SØKNADSFRIST="5043",e.UTGÅTT_5048="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.UTGÅTT_5053="5053",e.AVKLAR_VILKÅR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.UTGÅTT_5056="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.AVKLAR_LØPENDE_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET="5063",e.FAKTA_UTTAK_INGEN_PERIODER="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG="5066",e.UTGÅTT_5067="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.UTGÅTT_5069="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.FASTSETT_UTTAK_STORTINGSREPRESENTANT="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.UTGÅTT_5075="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.UTGÅTT_5078="5078",e.UTGÅTT_5079="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.UTGÅTT_5083="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT="5086",e.SØKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYRING_AV_FØDSELSVILKÅRET="6003",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET="6004",e.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET="6005",e.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="6017",e.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYRING_AV_FØDSELSVILKÅRET_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKÅRET="6011",e.OVERSTYRING_AV_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKÅRET="5089",e.UTGÅTT_6012="6012",e.OVERSTYRING_AV_AVKLART_STARTDATO="6045",e.OVERSTYRING_FAKTA_UTTAK="6065",e.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FØDSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SØKNAD="7003",e.UTGÅTT_7019="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.VURDER_SVP_TILRETTELEGGING="5091",e.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE="5039",e.UTGÅTT_5042="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET="5049",e.UTGÅTT_5050="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.UTGÅTT_5080="5080",e.UTGÅTT_5090="5090",e))(oa||{});const Va=(e,n)=>{if(e==null)throw new Error("Data er ikke oppgitt");return e},qe=e=>Ce({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var ht=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const er=b.forwardRef((e,n)=>{var{className:r,size:a="medium",as:t="p",spacing:l,truncate:i,weight:s="regular",align:u,visuallyHidden:v,textColor:c}=e,f=ht(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=$();return d.createElement(t,Object.assign({},f,{ref:n,className:E(r,"navds-body-long",`navds-body-long--${a}`,qe({spacing:l,truncate:i,weight:s,align:u,visuallyHidden:v,textColor:c}))}))});var yt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const X=b.forwardRef((e,n)=>{var{className:r,size:a="medium",as:t="p",spacing:l,truncate:i,weight:s="regular",align:u,visuallyHidden:v,textColor:c}=e,f=yt(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=$();return d.createElement(t,Object.assign({},f,{ref:n,className:E(r,"navds-body-short",`navds-body-short--${a}`,qe({spacing:l,truncate:i,weight:s,align:u,visuallyHidden:v,textColor:c}))}))});var bt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const pt=b.forwardRef((e,n)=>{var{className:r,size:a="medium",spacing:t,uppercase:l,as:i="p",truncate:s,weight:u="regular",align:v,visuallyHidden:c,textColor:f}=e,E=bt(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:T}=$();return d.createElement(i,Object.assign({},E,{ref:n,className:T(r,"navds-detail",qe({spacing:t,truncate:s,weight:u,align:v,visuallyHidden:c,textColor:f,uppercase:l}),{"navds-detail--small":a==="small"})}))});var Ot=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ma=b.forwardRef((e,n)=>{var{children:r,className:a,size:t,spacing:l,as:i="p",showIcon:s=!1}=e,u=Ot(e,["children","className","size","spacing","as","showIcon"]);const{cn:v}=$();return d.createElement(i,Object.assign({},u,{ref:n,className:v("navds-error-message","navds-label",a,qe({spacing:l}),{"navds-label--small":t==="small","navds-error-message--show-icon":s})}),s&&d.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Tt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const ar=b.forwardRef((e,n)=>{var{level:r="1",size:a,className:t,as:l,spacing:i,align:s,visuallyHidden:u,textColor:v}=e,c=Tt(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:f}=$(),E=l??`h${r}`;return d.createElement(E,Object.assign({},c,{ref:n,className:f(t,"navds-heading",`navds-heading--${a}`,qe({spacing:i,align:s,visuallyHidden:u,textColor:v}))}))});var St=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};b.forwardRef((e,n)=>{var{className:r,spacing:a,as:t="p"}=e,l=St(e,["className","spacing","as"]);const{cn:i}=$();return d.createElement(t,Object.assign({},l,{ref:n,className:i(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var kt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const fe=b.forwardRef((e,n)=>{var{className:r,size:a="medium",as:t="label",spacing:l,visuallyHidden:i,textColor:s}=e,u=kt(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:v}=$();return d.createElement(t,Object.assign({},u,{ref:n,className:v(r,"navds-label",qe({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":a==="small"})}))});function _n(e,n=166,r=!1){let a;function t(...l){const i=()=>{a=void 0,e.apply(this,l)};!a&&r&&i(),clearTimeout(a),a=setTimeout(i,n)}return t.clear=()=>{clearTimeout(a)},t}function Ee(e,n){const r=Object.entries(e).filter(([a])=>!n.includes(a));return Object.fromEntries(r)}const yr=globalThis?.document?b.useLayoutEffect:()=>{};let br=0;function Kt(e){const[n,r]=b.useState(e),a=e||n;return b.useEffect(()=>{n==null&&(br+=1,r(`aksel-id-${br}`))},[n]),a}const pr=d.useId;function Le(e){var n;return pr!==void 0?pr().replace(/(:)/g,""):(n=Kt(e))!==null&&n!==void 0?n:""}function Or(e,n=[]){const r=b.useRef(e);return b.useEffect(()=>{r.current=e}),b.useCallback(((...a)=>{var t;return(t=r.current)===null||t===void 0?void 0:t.call(r,...a)}),n)}function At({value:e,defaultValue:n,onChange:r}){const a=Or(r),[t,l]=b.useState(n),i=e!==void 0,s=i?e:t,u=Or(v=>{const f=typeof v=="function"?v(s):v;i||l(f),a(f)},[i,a,s]);return[s,u]}let Tr=0;function Vt(e){const[n,r]=b.useState(e),a=e||n;return b.useEffect(()=>{n==null&&(Tr+=1,r(`aksel-icon-${Tr}`))},[n]),a}const Sr=d.useId;function ke(e){var n;return Sr!==void 0?Sr().replace(/(:)/g,""):(n=Vt(e))!==null&&n!==void 0?n:""}var Nt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Rt=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Nt(e,["title","titleId"]);let l=ke();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Lt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Dt=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Lt(e,["title","titleId"]);let l=ke();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var It=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const hn=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=It(e,["title","titleId"]);let l=ke();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var wt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Pt=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=wt(e,["title","titleId"]);let l=ke();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var xt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Mt=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=xt(e,["title","titleId"]);let l=ke();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Ft=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const yn=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Ft(e,["title","titleId"]);let l=ke();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Gt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const jt=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Gt(e,["title","titleId"]);let l=ke();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Ut=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const bn=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Ut(e,["title","titleId"]);let l=ke();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Bt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ht=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Bt(e,["title","titleId"]);let l=ke();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function je(e,n,{checkForDefaultPrevented:r=!0}={}){return function(t){if(e?.(t),r===!1||!t.defaultPrevented)return n?.(t)}}const[Ct,pn]=Za({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Ca(e){return(n={})=>{const r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Xe(e){return(n,r)=>{const a=r?.context?String(r.context):"standalone";let t;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=r?.width?String(r.width):i;t=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=r?.width?String(r.width):e.defaultWidth;t=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(n):n;return t[l]}}function Ze(e){return(n,r={})=>{const a=r.width,t=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=n.match(t);if(!l)return null;const i=l[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?Yt(s,f=>f.test(i)):qt(s,f=>f.test(i));let v;v=e.valueCallback?e.valueCallback(u):u,v=r.valueCallback?r.valueCallback(v):v;const c=n.slice(i.length);return{value:v,rest:c}}}function qt(e,n){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n(e[r]))return r}function Yt(e,n){for(let r=0;r<e.length;r++)if(n(e[r]))return r}function $t(e){return(n,r={})=>{const a=n.match(e.matchPattern);if(!a)return null;const t=a[0],l=n.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=r.valueCallback?r.valueCallback(i):i;const s=n.slice(t.length);return{value:i,rest:s}}}const zt={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Wt=(e,n,r)=>{let a;const t=zt[e];return typeof t=="string"?a=t:n===1?a=t.one:a=t.other.replace("{{count}}",String(n)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},Jt={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Xt={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Zt={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Qt={date:Ca({formats:Jt,defaultWidth:"full"}),time:Ca({formats:Xt,defaultWidth:"full"}),dateTime:Ca({formats:Zt,defaultWidth:"full"})},el={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},al=(e,n,r,a)=>el[e],rl={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},nl={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},tl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ll={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},il={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},sl=(e,n)=>Number(e)+".",ol={ordinalNumber:sl,era:Xe({values:rl,defaultWidth:"wide"}),quarter:Xe({values:nl,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xe({values:tl,defaultWidth:"wide"}),day:Xe({values:ll,defaultWidth:"wide"}),dayPeriod:Xe({values:il,defaultWidth:"wide"})},ul=/^(\d+)\.?/i,dl=/\d+/i,cl={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ml={any:[/^f/i,/^e/i]},vl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},gl={any:[/1/i,/2/i,/3/i,/4/i]},fl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},El={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},_l={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},hl={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},yl={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},bl={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},pl={ordinalNumber:$t({matchPattern:ul,parsePattern:dl,valueCallback:e=>parseInt(e,10)}),era:Ze({matchPatterns:cl,defaultMatchWidth:"wide",parsePatterns:ml,defaultParseWidth:"any"}),quarter:Ze({matchPatterns:vl,defaultMatchWidth:"wide",parsePatterns:gl,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ze({matchPatterns:fl,defaultMatchWidth:"wide",parsePatterns:El,defaultParseWidth:"any"}),day:Ze({matchPatterns:_l,defaultMatchWidth:"wide",parsePatterns:hl,defaultParseWidth:"any"}),dayPeriod:Ze({matchPatterns:yl,defaultMatchWidth:"any",parsePatterns:bl,defaultParseWidth:"any"})},Ol={code:"nb",formatDistance:Wt,formatLong:Qt,formatRelative:al,localize:ol,match:pl,options:{weekStartsOn:1,firstWeekContainsDate:4}},Tl={global:{dateLocale:Ol,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Sl=b.createContext({locale:Tl}),On=()=>b.useContext(Sl);function kl(){return typeof window<"u"}function Kl(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Al(e){return kl()?e instanceof Element||e instanceof Kl(e).Element:!1}const kr=/(\w+)/g;function Vl(e,n){const r=Array.isArray(e)?e:Nl(e);for(const a of n){if(!a)continue;let t=a;for(let l=0;l<r.length;l++){const i=t[r[l]];i!==void 0&&(t=i)}if(typeof t=="string")return t}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Nl(e){const n=[];let r=kr.exec(e);for(;r;){const[,a,t]=r;n.push(a||t),r=kr.exec(e)}return n}const Rl=/{[^}]*}/g;function ua(e,...n){const r=On(),a=r.translations||[],t=[...n,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],r.locale[e]];return(i,s)=>{const u=Vl(i,t);return s?u.replace(Rl,v=>{const c=v.substring(1,v.length-1);if(s[c]===void 0){const f=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${c}'. The following replacements were passed: '${f}'`)}return s[c]}):u}}var Ll=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Dl=b.forwardRef((e,n)=>{var{className:r,size:a="medium",title:t,transparent:l=!1,variant:i="neutral",id:s,"data-color":u}=e,v=Ll(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:c}=$(),f=Le(),E=ua("Loader");return d.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${f}`,ref:n,className:c("navds-loader",r,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":u??Il(i)},Ee(v,["children"]),{"data-variant":i}),d.createElement("title",{id:s??`loader-${f}`},t||E("title")),d.createElement("circle",{className:c("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),d.createElement("circle",{className:c("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Il(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var wl=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ue=b.forwardRef((e,n)=>{var{as:r="button",variant:a="primary",className:t,children:l,size:i="medium",loading:s=!1,disabled:u,icon:v,iconPosition:c="left",onKeyUp:f,"data-color":E}=e,T=wl(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:y}=$(),R=u||s?Ee(T,["href"]):T,_=p=>{p.key===" "&&!u&&!s&&p.currentTarget.click()};return d.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":E??Pl(a),"data-variant":xl(a)},R,{ref:n,onKeyUp:je(f,_),className:y(t,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!v&&!l,"navds-button--disabled":u??s}),disabled:u??s?!0:void 0}),v&&c==="left"&&d.createElement("span",{className:y("navds-button__icon")},v),s&&d.createElement(Dl,{size:i}),l&&d.createElement(fe,{as:"span",size:i==="medium"?"medium":"small"},l),v&&c==="right"&&d.createElement("span",{className:y("navds-button__icon")},v))});function Pl(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function xl(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var Ml=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Fl={error:Ht,warning:Pt,info:Mt,success:Dt},Gl=b.forwardRef((e,n)=>{var{children:r,className:a,variant:t,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:u=!1,closeButton:v=!1,onClose:c}=e,f=Ml(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:E}=$(),T=ua("Alert"),y=Fl[t];return d.createElement("div",Object.assign({},f,{"data-color":jl(t),"data-variant":t,ref:n,className:E(a,"navds-alert",`navds-alert--${t}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":u,"navds-alert--close-button":v})}),d.createElement(y,{title:T(t),className:E("navds-alert__icon")}),d.createElement(er,{as:"div",size:l,className:E("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},r),v&&!u&&d.createElement("div",{className:E("navds-alert__button-wrapper")},d.createElement(Ue,{className:E("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:c,type:"button",icon:d.createElement(bn,{title:["error","warning"].includes(t)?T("closeAlert"):T("closeMessage")})})))});function jl(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}var Na=typeof document<"u"?b.useLayoutEffect:b.useEffect;const Ul={...tt};let Kr=!1,Bl=0;const Ar=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Bl++;function Hl(){const[e,n]=b.useState(()=>Kr?Ar():void 0);return Na(()=>{e==null&&n(Ar())},[]),b.useEffect(()=>{Kr=!0},[]),e}const Cl=Ul.useId,ql=Cl||Hl;function Yl(e){return"data-floating-ui-"+e}const $l=b.createContext(null),Vr=Yl("portal");function zl(e){e===void 0&&(e={});const{id:n,root:r}=e,a=ql(),t=Wl(),[l,i]=b.useState(null),s=b.useRef(null);return Na(()=>()=>{l?.remove(),queueMicrotask(()=>{s.current=null})},[l]),Na(()=>{if(!a||s.current)return;const u=n?document.getElementById(n):null;if(!u)return;const v=document.createElement("div");v.id=a,v.setAttribute(Vr,""),u.appendChild(v),s.current=v,i(v)},[n,a]),Na(()=>{if(r===null||!a||s.current)return;let u=r||t?.portalNode;u&&!Al(u)&&(u=u.current),u=u||document.body;let v=null;n&&(v=document.createElement("div"),v.id=n,u.appendChild(v));const c=document.createElement("div");c.id=a,c.setAttribute(Vr,""),u=v||u,u.appendChild(c),s.current=c,i(c)},[n,r,a,t]),l}const Wl=()=>b.useContext($l),rr=()=>{const{cn:e}=$();return d.createElement(yn,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Tn=()=>{const{cn:e}=$();return d.createElement(yn,{title:ua("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var Jl=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Xl=b.forwardRef((e,n)=>{var{className:r,header:a,children:t,open:l,defaultOpen:i=!1,onClick:s,size:u="medium",onOpenChange:v}=e,c=Jl(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:f}=$(),[E,T]=At({defaultValue:i,value:l,onChange:v}),y=u==="small"?"small":"medium";return d.createElement("div",{className:f("navds-read-more",`navds-read-more--${u}`,r,{"navds-read-more--open":E}),"data-volume":"low"},d.createElement("button",Object.assign({},c,{ref:n,type:"button",className:f("navds-read-more__button","navds-body-short",{"navds-body-short--small":u==="small"}),onClick:je(s,()=>T(R=>!R)),"aria-expanded":E,"data-state":E?"open":"closed"}),d.createElement(hn,{className:f("navds-read-more__expand-icon"),"aria-hidden":!0}),d.createElement("span",null,a)),d.createElement(er,{as:"div",tabIndex:0,className:f("navds-read-more__content",{"navds-read-more__content--closed":!E}),size:y,"data-state":E?"open":"closed"},t))}),Ra=b.createContext(null),da=(e,n)=>{var r,a,t;const{size:l,error:i,errorId:s}=e,u=b.useContext(Ra),v=Le(),c=(r=e.id)!==null&&r!==void 0?r:`${n}-${v}`,f=s??`${n}-error-${v}`,E=`${n}-description-${v}`,T=u?.disabled||e.disabled,y=(u?.readOnly||e.readOnly)&&!T||void 0,R=!T&&!y&&!!(i||u?.error),_=!T&&!y&&!!i&&typeof i!="boolean",p=Object.assign({},R?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:_,hasError:R,errorId:f,inputDescriptionId:E,size:(a=l??u?.size)!==null&&a!==void 0?a:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:c},p),{"aria-describedby":Ce(e["aria-describedby"],{[E]:e.description&&!La(e.description),[f]:_,[(t=u?.errorId)!==null&&t!==void 0?t:""]:R&&u?.error})||void 0,disabled:T})}};function La(e,n=!0){if(d.isValidElement(e)){if(e.type===Xl)return!0;if(e.props.children&&n)return La(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>La(r,n));return!1}const[To,Zl]=Za();var Ql=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const[So,Sn]=Za({errorMessage:"useDateInputContext must be used with DateInputContext"}),kn=b.forwardRef((e,n)=>{const{className:r,hideLabel:a=!1,label:t,description:l,variant:i="datepicker",setAnchorRef:s}=e,u=Ql(e,["className","hideLabel","label","description","variant","setAnchorRef"]),v=b.useRef(null),c=Zl().translate,{cn:f}=$(),E=i==="datepicker",T={prefix:E?"datepicker-input":"monthpicker-input",iconTitle:{open:E?"openDatePicker":"openMonthPicker",close:E?"closeDatePicker":"closeMonthPicker"}},y=Sn(),{inputProps:R,size:_="medium",inputDescriptionId:p,errorId:S,showErrorMsg:k,hasError:I,readOnly:V}=da(e,T.prefix);return d.createElement("div",{className:f(r,"navds-form-field",`navds-form-field--${_}`,"navds-date__field",{"navds-text-field--error":I,"navds-date__field--error":I,"navds-form-field--disabled":!!R.disabled,"navds-text-field--disabled":!!R.disabled,"navds-form-field--readonly":V,"navds-text-field--readonly":V,"navds-date__field--readonly":V})},d.createElement(fe,{htmlFor:R.id,size:_,className:f("navds-form-field__label",{"navds-sr-only":a})},V&&d.createElement(rr,null),t),!!l&&d.createElement(X,{as:"div",className:f("navds-form-field__description",{"navds-sr-only":a}),id:p,size:_},l),d.createElement("div",{className:f("navds-date__field-wrapper")},d.createElement("input",Object.assign({ref:n},Ee(u,["error","errorId","size"]),R,{autoComplete:"off","aria-controls":y?.open?y.ariaId:void 0,readOnly:V,className:f("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${_}`),size:E?11:14})),d.createElement("button",{disabled:R.disabled||V,tabIndex:V||y?.open?-1:0,onClick:()=>{y?.onOpen(),s?.(v.current)},type:"button",className:f("navds-date__field-button"),ref:v},d.createElement(Rt,{title:c(T.iconTitle[y?.open?"close":"open"])}))),d.createElement("div",{className:f("navds-form-field__error"),id:S,"aria-relevant":"additions removals","aria-live":"polite"},k&&d.createElement(Ma,{size:_,showIcon:!0},e.error)))});b.forwardRef((e,n)=>d.createElement(kn,Object.assign({},e,{ref:n})));b.forwardRef((e,n)=>d.createElement(kn,Object.assign({},e,{variant:"monthpicker",ref:n})));var ei=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const ai=b.forwardRef((e,n)=>{var{className:r}=e,a=ei(e,["className"]);const{cn:t}=$();return d.createElement("div",Object.assign({},a,{ref:n,className:t("navds-modal__body",r)}))});var ri=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const ni=b.forwardRef((e,n)=>{var{className:r}=e,a=ri(e,["className"]);const{cn:t}=$();return d.createElement("div",Object.assign({},a,{ref:n,className:t("navds-modal__footer",r)}))});var ti=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Kn=b.forwardRef((e,n)=>{var{children:r,className:a,closeButton:t=!0}=e,l=ti(e,["children","className","closeButton"]);const{cn:i}=$(),s=pn(),u=ua("global");return d.createElement("div",Object.assign({},l,{ref:n,className:i("navds-modal__header",a)}),s.closeHandler&&t&&d.createElement(Ue,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:v=>{["Enter"," "].includes(v.key)&&v.repeat&&v.preventDefault()},onClick:s.closeHandler,icon:d.createElement(bn,{title:u("close")})}),r)}),Nr=({clientX:e,clientY:n},{left:r,top:a,right:t,bottom:l})=>!(e<r||n<a||e>t||n>l);function li(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var a;return r()!==!1&&((a=e.current)===null||a===void 0?void 0:a.close())}:()=>{var a;return(a=e.current)===null||a===void 0?void 0:a.close()}}const ha="navds-modal__document-body",ya="aksel-modal__document-body";function ii(e,n,r){d.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(ya,ha);const a=new MutationObserver(()=>{var t;!((t=e.current)===null||t===void 0)&&t.open?document.body.classList.add(ya,ha):document.body.classList.remove(ya,ha)});return a.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{a.disconnect(),document.body.classList.remove(ya,ha)}},[e,n,r])}const Ge=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function An(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function ta(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Vn(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function si(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function qa(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Nn(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var a=e.querySelector(r.join(", "));if(!a&&"attachShadow"in Element.prototype)for(var t=e.querySelectorAll("*"),l=0;l<t.length&&!(t[l].tagName&&t[l].shadowRoot&&(a=Nn(t[l].shadowRoot),a));l++);return a}function Rr(e){return e.isConnected||document.body.contains(e)}function Rn(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=H.formSubmitter;if(!r){var a=e.target,t="getRootNode"in a&&a.getRootNode()||document;r=t.activeElement}return!r||r.form!==n?null:r}function oi(e){if(!e.defaultPrevented){var n=e.target,r=H.imagemapUseValue,a=Rn(e);r===null&&a&&(r=a.value);var t=ta(n);if(t){var l=a&&a.getAttribute("formmethod")||n.getAttribute("method");l==="dialog"&&(e.preventDefault(),r!=null?t.close(r):t.close())}}}function Ln(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",oi,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,a=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),t,l=function(i){if(i.target===e){var s="DOMNodeRemoved";r|=i.type.substr(0,s.length)===s,window.clearTimeout(t),t=window.setTimeout(a,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,l)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Ln.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Rr(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),H.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Nn(this.dialog_)),Vn(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Rr(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!H.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,H.needsCentering(this.dialog_)?(H.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});An(this.dialog_,n)}};var H={};H.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};H.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],a=null;try{a=r.cssRules}catch{}if(a)for(var t=0;t<a.length;++t){var l=a[t],i=null;try{i=document.querySelectorAll(l.selectorText)}catch{}if(!(!i||!si(i,e))){var s=l.style.getPropertyValue("top"),u=l.style.getPropertyValue("bottom");if(s&&s!=="auto"||u&&u!=="auto")return!0}}}return!1};H.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!H.isInlinePositionSetByStylesheet(e)};H.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Ln(e)};H.registerDialog=function(e){e.showModal||H.forceRegisterDialog(e)};H.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(a){for(var t=0,l;l=a.removedNodes[t];++t)l instanceof Element&&(l.localName==="dialog"&&r.push(l),r=r.concat(l.querySelectorAll("dialog")))}),r.length&&e(r)}))};H.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};H.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};H.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var a=this.pendingDialogStack[0];if(a){var t=a.dialog.parentNode||document.body;t.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};H.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=ta(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};H.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Vn(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],a=r.dialog,t=a.compareDocumentPosition(n);return t&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};H.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&An(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};H.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};H.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};H.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Ge&&(H.dm=new H.DialogManager,H.formSubmitter=null,H.imagemapUseValue=null);if(Ge){var Lr=document.createElement("form");if(Lr.setAttribute("method","dialog"),Lr.method!=="dialog"){var xe=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(xe){var ui=xe.get;xe.get=function(){return qa(this)?"dialog":ui.call(this)};var di=xe.set;xe.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):di.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",xe)}}document.addEventListener("click",function(e){if(H.formSubmitter=null,H.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!qa(n.form))){var a=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!a){if(!(n.localName==="input"&&n.type==="image"))return;H.imagemapUseValue=e.offsetX+","+e.offsetY}var t=ta(n);t&&(H.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=ta(n);if(!r){var a=Rn(e),t=a&&a.getAttribute("formmethod")||n.getAttribute("method");t==="dialog"&&e.preventDefault()}});var ci=HTMLFormElement.prototype.submit,mi=function(){if(!qa(this))return ci.call(this);var e=ta(this);e&&e.close()};HTMLFormElement.prototype.submit=mi}var vi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const sa=b.forwardRef((e,n)=>{var r,a,{header:t,children:l,open:i,onBeforeClose:s,onCancel:u,closeOnBackdropClick:v,width:c,placement:f,portal:E,className:T,"aria-labelledby":y,style:R,onClick:_,onMouseDown:p}=e,S=vi(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:k}=$(),I=b.useRef(k("navds-modal--polyfilled")),V=b.useRef(null),C=cn(V,n),M=Le(),B=(r=On())===null||r===void 0?void 0:r.rootElement,P=zl({root:B}),G=Sn(!1),F=pn(!1)!==void 0;F&&!G&&console.error("Modals should not be nested"),b.useEffect(()=>{Ge&&V.current&&P&&(H.registerDialog(V.current),V.current.classList.add(I.current)),V.current&&P&&(V.current.autofocus=!0)},[P]),b.useEffect(()=>{V.current&&P&&i!==void 0&&(i&&!V.current.open?V.current.showModal():!i&&V.current.open&&V.current.close())},[P,i]),ii(V,P,F);const D=typeof c=="string"&&["small","medium"].includes(c),A=k("navds-modal",T,{[I.current]:Ge,"navds-modal--autowidth":!c,[`navds-modal--${c}`]:D,"navds-modal--top":f==="top"&&!Ge}),x=Object.assign(Object.assign({},R),D?{}:{width:c}),j=b.useRef({clientX:0,clientY:0}),U=me=>{j.current=me},Z=v&&!Ge,le=me=>{if(me.target!==V.current)return;const pe=V.current.getBoundingClientRect();Nr(j.current,pe)||Nr(me,pe)||s!==void 0&&s()===!1||V.current.close()},ie=me=>{s&&s()===!1&&me.preventDefault()},_e=!y&&!S["aria-label"]&&t?M:y,re=d.createElement("dialog",Object.assign({},S,{ref:C,className:A,style:x,onCancel:je(u,ie),onClick:Z?je(_,le):_,onMouseDown:Z?je(p,U):p,"aria-labelledby":_e}),d.createElement(Ct,{closeHandler:li(V,t,s),ref:V},t&&d.createElement(Kn,null,t.label&&d.createElement(pt,{className:k("navds-modal__label")},t.label),d.createElement(ar,{size:(a=t.size)!==null&&a!==void 0?a:"medium",level:"1",id:M},t.icon&&d.createElement("span",{className:k("navds-modal__header-icon")},t.icon),t.heading)),l));return E?P?fn.createPortal(re,P):null:re});sa.Header=Kn;sa.Body=ai;sa.Footer=ni;var gi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const fi=b.forwardRef((e,n)=>{const{inputProps:r,errorId:a,showErrorMsg:t,hasError:l,size:i,inputDescriptionId:s,readOnly:u}=da(e,"select"),{children:v,label:c,className:f,description:E,htmlSize:T,hideLabel:y=!1,style:R}=e,_=gi(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:p}=$(),S={onMouseDown:k=>{u&&(k.preventDefault(),k.target.focus())},onKeyDown:k=>{u&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(k.key)&&k.preventDefault()}};return d.createElement("div",{className:p(f,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":u,"navds-select--error":l,"navds-select--readonly":u})},d.createElement(fe,{htmlFor:r.id,size:i,className:p("navds-form-field__label",{"navds-sr-only":y})},u&&d.createElement(Tn,null),c),!!E&&d.createElement(X,{className:p("navds-form-field__description",{"navds-sr-only":y}),id:s,size:i,as:"div"},E),d.createElement("div",{className:p("navds-select__container"),style:R},d.createElement("select",Object.assign({},Ee(_,["error","errorId","size","readOnly"]),r,S,{ref:n,className:p("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:T}),v),d.createElement(hn,{className:p("navds-select__chevron"),"aria-hidden":!0})),d.createElement("div",{className:p("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},t&&d.createElement(Ma,{size:i,showIcon:!0},e.error)))});function te(e,n,r,a){return a?typeof a=="string"?{[`--__${e}c-${n}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([t,l])=>[`--__${e}c-${n}-${r}-${t}`,l])):{}}const Ei={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Dr=(e,n,r,a,t,l)=>n.split(" ").map((i,s,u)=>{var v;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/u.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/u.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let c=`var(--${l}-${r}-${i})`;if(a.includes(i))c=i==="px"?"1px":i;else if(i.startsWith("space"))c=`var(--${l}-${i})`;else{const f=`--${l}-spacing-${i}`;c=`var(${(v=Ei[f])!==null&&v!==void 0?v:f})`}return t?i==="0"?"0":`calc(-1 * ${c})`:c}).join(" ");function ge(e,n,r,a,t,l=!1,i=[]){if(!t)return{};if(typeof t=="string")return{[`--__${e}c-${n}-${r}-xs`]:Dr(r,t,a,i,l,e)};const s={};return Object.entries(t).forEach(([u,v])=>{s[`--__${e}c-${n}-${r}-${u}`]=Dr(r,v,a,i,l,e)}),s}const _i=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],hi=({children:e,className:n,padding:r,paddingInline:a,paddingBlock:t,margin:l,marginInline:i,marginBlock:s,width:u,minWidth:v,maxWidth:c,height:f,minHeight:E,maxHeight:T,position:y,inset:R,top:_,right:p,left:S,bottom:k,overflow:I,overflowX:V,overflowY:C,flexBasis:M,flexGrow:B,flexShrink:P,gridColumn:G})=>{const F=xa(!1),{cn:D}=$(),A=F?.isDarkside?"ax":"a",x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ge(A,"r","p","spacing",r)),ge(A,"r","pi","spacing",a)),ge(A,"r","pb","spacing",t)),ge(A,"r","m","spacing",l)),ge(A,"r","mi","spacing",i)),ge(A,"r","mb","spacing",s)),te(A,"r","w",u)),te(A,"r","minw",v)),te(A,"r","maxw",c)),te(A,"r","h",f)),te(A,"r","minh",E)),te(A,"r","maxh",T)),te(A,"r","position",y)),ge(A,"r","inset","spacing",R)),ge(A,"r","top","spacing",_)),ge(A,"r","right","spacing",p)),ge(A,"r","bottom","spacing",k)),ge(A,"r","left","spacing",S)),te(A,"r","overflow",I)),te(A,"r","overflowx",V)),te(A,"r","overflowy",C)),te(A,"r","flex-basis",M)),te(A,"r","flex-grow",B)),te(A,"r","flex-shrink",P)),te(A,"r","grid-column",G));return d.createElement(mn,{className:D({className:n,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":t,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":u,"navds-r-minw":v,"navds-r-maxw":c,"navds-r-h":f,"navds-r-minh":E,"navds-r-maxh":T,"navds-r-position":y,"navds-r-inset":R,"navds-r-top":_,"navds-r-right":p,"navds-r-bottom":k,"navds-r-left":S,"navds-r-overflow":I,"navds-r-overflowx":V,"navds-r-overflowy":C,"navds-r-flex-basis":M,"navds-r-flex-grow":B,"navds-r-flex-shrink":P,"navds-r-grid-column":G}),style:x},e)};var yi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Dn=b.forwardRef((e,n)=>{var{children:r,className:a,as:t="div",align:l,justify:i,wrap:s=!0,gap:u,style:v,direction:c="row",asChild:f}=e,E=yi(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const T=xa(!1),y=T?.isDarkside?"ax":"a",{cn:R}=$(),_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},v),ge(y,"stack","gap","spacing",u)),te(y,"stack","direction",c)),te(y,"stack","align",l)),te(y,"stack","justify",i)),p=f?mn:t;return d.createElement(hi,Object.assign({},E),d.createElement(p,Object.assign({},Ee(E,_i),{ref:n,style:_,className:R("navds-stack",a,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":u,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":c,"navds-stack-wrap":s})}),r))});var bi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Be=b.forwardRef((e,n)=>{var{as:r="div"}=e,a=bi(e,["as"]);return d.createElement(Dn,Object.assign({as:r},a,{ref:n,direction:"row"}))});var pi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const de=b.forwardRef((e,n)=>{var{as:r="div"}=e,a=pi(e,["as"]);return d.createElement(Dn,Object.assign({as:r},a,{ref:n,direction:"column",wrap:!1}))});var Oi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ti=b.forwardRef((e,n)=>{var{as:r="a",className:a,underline:t=!0,variant:l,inlineText:i=!1,"data-color":s}=e,u=Oi(e,["as","className","underline","variant","inlineText","data-color"]);const v=xa(!1),{cn:c}=$();let f;return v?.isDarkside?f=l:f=l??"action",d.createElement(r,Object.assign({"data-color":s??Si(f),"data-variant":f},u,{ref:n,className:c("navds-link",a,{[`navds-link--${f}`]:f,"navds-link--remove-underline":!t,"navds-link--inline-text":i})}))});function Si(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var ki=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ki=b.forwardRef((e,n)=>{var{children:r,className:a,variant:t,size:l="medium",icon:i,"data-color":s}=e,u=ki(e,["children","className","variant","size","icon","data-color"]);const{cn:v}=$(),c=t?.endsWith("-filled")&&"strong",f=t?.endsWith("-moderate")&&"moderate";return d.createElement(X,Object.assign({"data-color":s??Ai(t),"data-variant":c||f||"outline"},u,{ref:n,as:"span",size:l==="medium"?"medium":"small",className:v("navds-tag",a,`navds-tag--${t}`,`navds-tag--${l}`)}),i&&d.createElement("span",{className:v("navds-tag__icon--left")},i),r)});function Ai(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const Vi=(e,n)=>{const r=da(e,"fieldset");return Object.assign(Object.assign({},r),{inputProps:{"aria-labelledby":e["aria-labelledby"]||Ce(n,{[r.inputDescriptionId]:e.description&&!La(e.description)})}})};var Ni=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ri=b.forwardRef((e,n)=>{var r,a,t;const l=Le(),{inputProps:i,errorId:s,showErrorMsg:u,hasError:v,size:c,readOnly:f,inputDescriptionId:E}=Vi(e,l),{cn:T}=$(),y=b.useContext(Ra),{children:R,className:_,errorPropagation:p=!0,legend:S,description:k,hideLegend:I,nativeReadOnly:V=!0}=e,C=Ni(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return d.createElement(Ra.Provider,{value:{error:p?(r=e.error)!==null&&r!==void 0?r:y?.error:void 0,errorId:Ce({[s]:u,[(a=y?.errorId)!==null&&a!==void 0?a:""]:!!y?.error}),size:c,disabled:(t=e.disabled)!==null&&t!==void 0?t:!1,readOnly:f}},d.createElement("fieldset",Object.assign({},Ee(C,["errorId","error","size","readOnly"]),i,{ref:n,className:T(_,"navds-fieldset",`navds-fieldset--${c}`,{"navds-fieldset--error":v,"navds-fieldset--readonly":f})}),d.createElement(fe,{id:l,size:c,as:"legend",className:T("navds-fieldset__legend",{"navds-sr-only":!!I})},f&&(V?d.createElement(rr,null):d.createElement(Tn,null)),S),!!k&&d.createElement(X,{className:T("navds-fieldset__description",{"navds-sr-only":!!I}),id:E,size:c??"medium",as:"div"},e.description),R,d.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:T("navds-fieldset__error")},u&&d.createElement(Ma,{size:c,showIcon:!0},e.error))))});var Li=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const In=d.createContext(null),Di=b.forwardRef((e,n)=>{var r,a,{children:t,className:l,name:i,defaultValue:s,value:u,onChange:v=()=>{},required:c,readOnly:f}=e,E=Li(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:T}=$(),y=b.useContext(Ra),R=Le();return d.createElement(Ri,Object.assign({},E,{readOnly:f,ref:n,className:T(l,"navds-radio-group",`navds-radio-group--${(a=(r=E.size)!==null&&r!==void 0?r:y?.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),d.createElement(In.Provider,{value:{name:i??`radioGroupName-${R}`,defaultValue:s,value:u,onChange:v,required:c}},d.createElement("div",{className:T("navds-radio-buttons")},t)))});var Ii=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const wi=e=>{const n=b.useContext(In),r=da(Ee(e,["description"]),"radio"),{inputProps:a,readOnly:t}=r,l=Ii(r,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:t,inputProps:Object.assign(Object.assign({},a),{name:n?.name,defaultChecked:n?.defaultValue===void 0?void 0:n?.defaultValue===e.value,checked:n?.value===void 0?void 0:n?.value===e.value,onChange:i=>{var s,u;t||((s=e.onChange)===null||s===void 0||s.call(e,i),(u=n?.onChange)===null||u===void 0||u.call(n,e.value))},onClick:i=>{var s;if(t){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:n?.required,type:"radio"})})},Qe=b.forwardRef((e,n)=>{const{cn:r}=$(),{inputProps:a,size:t,hasError:l,readOnly:i}=wi(e),s=Le(),u=xa(!1);return u?.isDarkside?d.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},d.createElement("input",Object.assign({},Ee(e,["children","size","description","readOnly"]),Ee(a,["aria-invalid","aria-describedby"]),{"aria-describedby":Ce(a["aria-describedby"],{[s]:e.description})||void 0,className:r("navds-radio__input"),ref:n})),d.createElement(X,{as:"label",htmlFor:a.id,className:r("navds-radio__label"),size:t},e.children),e.description&&d.createElement(X,{id:s,size:t,className:r("navds-form-field__subdescription navds-radio__description")},e.description)):d.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},d.createElement("input",Object.assign({},Ee(e,["children","size","description","readOnly"]),Ee(a,["aria-invalid"]),{className:r("navds-radio__input"),ref:n})),d.createElement("label",{htmlFor:a.id,className:r("navds-radio__label")},d.createElement("span",{className:r("navds-radio__content")},d.createElement(X,{as:"span",size:t},e.children),e.description&&d.createElement(X,{as:"span",size:t,className:r("navds-form-field__subdescription navds-radio__description")},e.description))))});var Pi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ir=(e,n,r)=>{const{outerHeightStyle:a,overflow:t}=n;return r.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==t)?(r.current+=1,n):e},wr=e=>(e?.ownerDocument||document).defaultView||window;function ba(e){return parseInt(e,10)||0}const xi=b.forwardRef((e,n)=>{var r,a,{className:t,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:u,style:v,value:c}=e,f=Pi(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:E}=b.useRef(c!=null),T=b.useRef(null),y=cn(T,n),R=b.useRef(null),_=b.useRef(0),[p,S]=b.useState({outerHeightStyle:0}),k=d.useCallback(()=>{const M=T.current,P=wr(M).getComputedStyle(M);if(P.width==="0px")return{outerHeightStyle:0};const G=R.current;G.style.width=P.width,G.value=M.value||f.placeholder||"x",G.value.slice(-1)===`
`&&(G.value+=" ");const F=P.boxSizing,D=ba(P.paddingBottom)+ba(P.paddingTop),A=ba(P.borderBottomWidth)+ba(P.borderTopWidth),x=G.scrollHeight-D;G.value="x";const j=G.scrollHeight-D;let U=x;s&&(U=Math.max(Number(s)*j,U)),i&&(U=Math.min(Number(i)*j,U)),U=Math.max(U,j);const Z=U+(F==="border-box"?D+A:0),le=Math.abs(U-x)<=1;return{outerHeightStyle:Z,overflow:le}},[i,s,f.placeholder]),I=()=>{const M=k();Pr(M)||S(B=>Ir(B,M,_))};yr(()=>{const M=()=>{const D=k();Pr(D)||Et.flushSync(()=>{S(A=>Ir(A,D,_))})},B=_n(()=>{var D,A,x;if(_.current=0,!((D=T.current)===null||D===void 0)&&D.style.height||!((A=T.current)===null||A===void 0)&&A.style.width){((x=T.current)===null||x===void 0?void 0:x.style.overflow)==="hidden"&&S(j=>Object.assign(Object.assign({},j),{overflow:!1}));return}M()},166,!0),P=T.current,G=wr(P);G.addEventListener("resize",B);let F;return typeof ResizeObserver<"u"&&(F=new ResizeObserver(B),F.observe(P)),()=>{B.clear(),G.removeEventListener("resize",B),F&&F.disconnect()}},[k]),yr(()=>{I()}),b.useEffect(()=>{_.current=0},[c]);const V=M=>{_.current=0,E||I(),l&&l(M)},C=Object.assign({"--__ac-textarea-height":p.outerHeightStyle+"px","--__axc-textarea-height":p.outerHeightStyle+"px",overflow:p.overflow&&!u&&!(!((r=T.current)===null||r===void 0)&&r.style.height)&&!(!((a=T.current)===null||a===void 0)&&a.style.width)?"hidden":void 0},v);return d.createElement(d.Fragment,null,d.createElement("textarea",Object.assign({value:c,onChange:V,ref:y,rows:s,style:C},f,{className:t})),d.createElement("textarea",{"aria-hidden":!0,className:t,readOnly:!0,ref:R,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},v)}))});function Pr(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Mi=({maxLengthId:e,maxLength:n,currentLength:r,size:a,i18n:t})=>{const{cn:l}=$(),i=ua("Textarea",{charsLeft:t?.counterLeft?`{chars} ${t.counterLeft}`:void 0,charsTooMany:t?.counterTooMuch?`{chars} ${t.counterTooMuch}`:void 0}),s=n-r,[u,v]=b.useState(s);return b.useEffect(()=>{const c=_n(()=>{v(s)},2e3);return c(),()=>{c.clear()}},[s]),d.createElement(d.Fragment,null,d.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:n})),s<20&&d.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},xr(u,i)),d.createElement(X,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:a},xr(s,i)))},xr=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var Fi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Gi=b.forwardRef((e,n)=>{var r,a,t;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:u,size:v,inputDescriptionId:c}=da(e,"textarea"),{label:f,className:E,description:T,maxLength:y,hideLabel:R=!1,resize:_,UNSAFE_autoScrollbar:p,i18n:S,readOnly:k}=e,I=Fi(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:V}=$(),C=Le(),M=y!==void 0&&y>0,[B,P]=b.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),G=()=>{let D=I?.minRows?I?.minRows:3;return v==="small"&&(D=I?.minRows?I?.minRows:2),D},F=Ce(l["aria-describedby"],{[C??""]:M});return d.createElement("div",{className:V(E,"navds-form-field",`navds-form-field--${v}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":k,"navds-textarea--readonly":k,"navds-textarea--error":u,"navds-textarea--autoscrollbar":p,[`navds-textarea--resize-${_===!0?"both":_}`]:_})},d.createElement(fe,{htmlFor:l.id,size:v,className:V("navds-form-field__label",{"navds-sr-only":R})},k&&d.createElement(rr,null),f),!!T&&d.createElement(X,{className:V("navds-form-field__description",{"navds-sr-only":R}),id:c,size:v,as:"div"},T),d.createElement(xi,Object.assign({},Ee(I,["error","errorId","size"]),l,{onChange:je(e.onChange,e.value===void 0?D=>P(D.target.value):void 0),minRows:G(),autoScrollbar:p,ref:n,readOnly:k,className:V("navds-textarea__input","navds-body-short",`navds-body-short--${v??"medium"}`)},F?{"aria-describedby":F}:{})),M&&!k&&!l.disabled&&d.createElement(Mi,{maxLengthId:C,maxLength:y,currentLength:(t=(a=e.value)===null||a===void 0?void 0:a.length)!==null&&t!==void 0?t:B.length,size:v,i18n:S}),d.createElement("div",{className:V("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&d.createElement(Ma,{size:v,showIcon:!0},e.error)))});var ca=e=>e.type==="checkbox",Re=e=>e instanceof Date,oe=e=>e==null;const wn=e=>typeof e=="object";var ee=e=>!oe(e)&&!Array.isArray(e)&&wn(e)&&!Re(e),Pn=e=>ee(e)&&e.target?ca(e.target)?e.target.checked:e.target.value:e,ji=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,xn=(e,n)=>e.has(ji(n)),Ui=e=>{const n=e.constructor&&e.constructor.prototype;return ee(n)&&n.hasOwnProperty("isPrototypeOf")},nr=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ae(e){let n;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(!(nr&&(e instanceof Blob||a))&&(r||ee(e)))if(n=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!Ui(e))n=e;else for(const t in e)e.hasOwnProperty(t)&&(n[t]=ae(e[t]));else return e;return n}var Fa=e=>/^\w*$/.test(e),J=e=>e===void 0,tr=e=>Array.isArray(e)?e.filter(Boolean):[],lr=e=>tr(e.replace(/["|']|\]/g,"").split(/\.|\[/)),N=(e,n,r)=>{if(!n||!ee(e))return r;const a=(Fa(n)?[n]:lr(n)).reduce((t,l)=>oe(t)?t:t[l],e);return J(a)||a===e?J(e[n])?r:e[n]:a},ue=e=>typeof e=="boolean",W=(e,n,r)=>{let a=-1;const t=Fa(n)?[n]:lr(n),l=t.length,i=l-1;for(;++a<l;){const s=t[a];let u=r;if(a!==i){const v=e[s];u=ee(v)||Array.isArray(v)?v:isNaN(+t[a+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=u,e=e[s]}};const Da={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},he={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Oe={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ir=d.createContext(null);ir.displayName="HookFormContext";const Ke=()=>d.useContext(ir),Bi=e=>{const{children:n,...r}=e;return d.createElement(ir.Provider,{value:r},n)};var Mn=(e,n,r,a=!0)=>{const t={defaultValues:n._defaultValues};for(const l in e)Object.defineProperty(t,l,{get:()=>{const i=l;return n._proxyFormState[i]!==he.all&&(n._proxyFormState[i]=!a||he.all),r&&(r[i]=!0),e[i]}});return t};const sr=typeof window<"u"?d.useLayoutEffect:d.useEffect;function Hi(e){const n=Ke(),{control:r=n.control,disabled:a,name:t,exact:l}=e||{},[i,s]=d.useState(r._formState),u=d.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return sr(()=>r._subscribe({name:t,formState:u.current,exact:l,callback:v=>{!a&&s({...r._formState,...v})}}),[t,a,l]),d.useEffect(()=>{u.current.isValid&&r._setValid(!0)},[r]),d.useMemo(()=>Mn(i,r,u.current,!1),[i,r])}var ce=e=>typeof e=="string",Fn=(e,n,r,a,t)=>ce(e)?(a&&n.watch.add(e),N(r,e,t)):Array.isArray(e)?e.map(l=>(a&&n.watch.add(l),N(r,l))):(a&&(n.watchAll=!0),r),za=e=>oe(e)||!wn(e);function Te(e,n,r=new WeakSet){if(za(e)||za(n))return e===n;if(Re(e)&&Re(n))return e.getTime()===n.getTime();const a=Object.keys(e),t=Object.keys(n);if(a.length!==t.length)return!1;if(r.has(e)||r.has(n))return!0;r.add(e),r.add(n);for(const l of a){const i=e[l];if(!t.includes(l))return!1;if(l!=="ref"){const s=n[l];if(Re(i)&&Re(s)||ee(i)&&ee(s)||Array.isArray(i)&&Array.isArray(s)?!Te(i,s,r):i!==s)return!1}}return!0}function Ci(e){const n=Ke(),{control:r=n.control,name:a,defaultValue:t,disabled:l,exact:i,compute:s}=e||{},u=d.useRef(t),v=d.useRef(s),c=d.useRef(void 0);v.current=s;const f=d.useMemo(()=>r._getWatch(a,u.current),[r,a]),[E,T]=d.useState(v.current?v.current(f):f);return sr(()=>r._subscribe({name:a,formState:{values:!0},exact:i,callback:y=>{if(!l){const R=Fn(a,r._names,y.values||r._formValues,!1,u.current);if(v.current){const _=v.current(R);Te(_,c.current)||(T(_),c.current=_)}else T(R)}}}),[r,l,a,i]),d.useEffect(()=>r._removeUnmounted()),E}function or(e){const n=Ke(),{name:r,disabled:a,control:t=n.control,shouldUnregister:l,defaultValue:i}=e,s=xn(t._names.array,r),u=d.useMemo(()=>N(t._formValues,r,N(t._defaultValues,r,i)),[t,r,i]),v=Ci({control:t,name:r,defaultValue:u,exact:!0}),c=Hi({control:t,name:r,exact:!0}),f=d.useRef(e),E=d.useRef(void 0),T=d.useRef(t.register(r,{...e.rules,value:v,...ue(e.disabled)?{disabled:e.disabled}:{}}));f.current=e;const y=d.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!N(c.errors,r)},isDirty:{enumerable:!0,get:()=>!!N(c.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!N(c.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!N(c.validatingFields,r)},error:{enumerable:!0,get:()=>N(c.errors,r)}}),[c,r]),R=d.useCallback(k=>T.current.onChange({target:{value:Pn(k),name:r},type:Da.CHANGE}),[r]),_=d.useCallback(()=>T.current.onBlur({target:{value:N(t._formValues,r),name:r},type:Da.BLUR}),[r,t._formValues]),p=d.useCallback(k=>{const I=N(t._fields,r);I&&k&&(I._f.ref={focus:()=>k.focus&&k.focus(),select:()=>k.select&&k.select(),setCustomValidity:V=>k.setCustomValidity(V),reportValidity:()=>k.reportValidity()})},[t._fields,r]),S=d.useMemo(()=>({name:r,value:v,...ue(a)||c.disabled?{disabled:c.disabled||a}:{},onChange:R,onBlur:_,ref:p}),[r,a,c.disabled,R,_,p,v]);return d.useEffect(()=>{const k=t._options.shouldUnregister||l,I=E.current;I&&I!==r&&!s&&t.unregister(I),t.register(r,{...f.current.rules,...ue(f.current.disabled)?{disabled:f.current.disabled}:{}});const V=(C,M)=>{const B=N(t._fields,C);B&&B._f&&(B._f.mount=M)};if(V(r,!0),k){const C=ae(N(t._options.defaultValues,r,f.current.defaultValue));W(t._defaultValues,r,C),J(N(t._formValues,r))&&W(t._formValues,r,C)}return!s&&t.register(r),E.current=r,()=>{(s?k&&!t._state.action:k)?t.unregister(r):V(r,!1)}},[r,t,s,l]),d.useEffect(()=>{t._setDisabledField({disabled:a,name:r})},[a,r,t]),d.useMemo(()=>({field:S,formState:c,fieldState:y}),[S,c,y])}var qi=(e,n,r,a,t)=>n?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:t||!0}}:{},la=e=>Array.isArray(e)?e:[e],Mr=()=>{let e=[];return{get observers(){return e},next:t=>{for(const l of e)l.next&&l.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(l=>l!==t)}}),unsubscribe:()=>{e=[]}}};function Gn(e,n){const r={};for(const a in e)if(e.hasOwnProperty(a)){const t=e[a],l=n[a];if(t&&ee(t)&&l){const i=Gn(t,l);ee(i)&&(r[a]=i)}else e[a]&&(r[a]=l)}return r}var se=e=>ee(e)&&!Object.keys(e).length,ur=e=>e.type==="file",ye=e=>typeof e=="function",Ia=e=>{if(!nr)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},jn=e=>e.type==="select-multiple",dr=e=>e.type==="radio",Yi=e=>dr(e)||ca(e),Ya=e=>Ia(e)&&e.isConnected;function $i(e,n){const r=n.slice(0,-1).length;let a=0;for(;a<r;)e=J(e)?a++:e[n[a++]];return e}function zi(e){for(const n in e)if(e.hasOwnProperty(n)&&!J(e[n]))return!1;return!0}function Q(e,n){const r=Array.isArray(n)?n:Fa(n)?[n]:lr(n),a=r.length===1?e:$i(e,r),t=r.length-1,l=r[t];return a&&delete a[l],t!==0&&(ee(a)&&se(a)||Array.isArray(a)&&zi(a))&&Q(e,r.slice(0,-1)),e}var Wi=e=>{for(const n in e)if(ye(e[n]))return!0;return!1};function Un(e){return Array.isArray(e)||ee(e)&&!Wi(e)}function Wa(e,n={}){for(const r in e)Un(e[r])?(n[r]=Array.isArray(e[r])?[]:{},Wa(e[r],n[r])):J(e[r])||(n[r]=!0);return n}function Fe(e,n,r){r||(r=Wa(n));for(const a in e)Un(e[a])?J(n)||za(r[a])?r[a]=Wa(e[a],Array.isArray(e[a])?[]:{}):Fe(e[a],oe(n)?{}:n[a],r[a]):r[a]=!Te(e[a],n[a]);return r}const Fr={value:!1,isValid:!1},Gr={value:!0,isValid:!0};var Bn=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!J(e[0].attributes.value)?J(e[0].value)||e[0].value===""?Gr:{value:e[0].value,isValid:!0}:Gr:Fr}return Fr},Hn=(e,{valueAsNumber:n,valueAsDate:r,setValueAs:a})=>J(e)?e:n?e===""?NaN:e&&+e:r&&ce(e)?new Date(e):a?a(e):e;const jr={isValid:!1,value:null};var Cn=e=>Array.isArray(e)?e.reduce((n,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:n,jr):jr;function Ur(e){const n=e.ref;return ur(n)?n.files:dr(n)?Cn(e.refs).value:jn(n)?[...n.selectedOptions].map(({value:r})=>r):ca(n)?Bn(e.refs).value:Hn(J(n.value)?e.ref.value:n.value,e)}var Ji=(e,n,r,a)=>{const t={};for(const l of e){const i=N(n,l);i&&W(t,l,i._f)}return{criteriaMode:r,names:[...e],fields:t,shouldUseNativeValidation:a}},wa=e=>e instanceof RegExp,ea=e=>J(e)?e:wa(e)?e.source:ee(e)?wa(e.value)?e.value.source:e.value:e,Br=e=>({isOnSubmit:!e||e===he.onSubmit,isOnBlur:e===he.onBlur,isOnChange:e===he.onChange,isOnAll:e===he.all,isOnTouch:e===he.onTouched});const Hr="AsyncFunction";var Xi=e=>!!e&&!!e.validate&&!!(ye(e.validate)&&e.validate.constructor.name===Hr||ee(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===Hr)),Zi=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Cr=(e,n,r)=>!r&&(n.watchAll||n.watch.has(e)||[...n.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ia=(e,n,r,a)=>{for(const t of r||Object.keys(e)){const l=N(e,t);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&n(i.refs[0],t)&&!a)return!0;if(i.ref&&n(i.ref,i.name)&&!a)return!0;if(ia(s,n))break}else if(ee(s)&&ia(s,n))break}}};function qr(e,n,r){const a=N(e,r);if(a||Fa(r))return{error:a,name:r};const t=r.split(".");for(;t.length;){const l=t.join("."),i=N(n,l),s=N(e,l);if(i&&!Array.isArray(i)&&r!==l)return{name:r};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};t.pop()}return{name:r}}var Qi=(e,n,r,a)=>{r(e);const{name:t,...l}=e;return se(l)||Object.keys(l).length>=Object.keys(n).length||Object.keys(l).find(i=>n[i]===(!a||he.all))},es=(e,n,r)=>!e||!n||e===n||la(e).some(a=>a&&(r?a===n:a.startsWith(n)||n.startsWith(a))),as=(e,n,r,a,t)=>t.isOnAll?!1:!r&&t.isOnTouch?!(n||e):(r?a.isOnBlur:t.isOnBlur)?!e:(r?a.isOnChange:t.isOnChange)?e:!0,rs=(e,n)=>!tr(N(e,n)).length&&Q(e,n),ns=(e,n,r)=>{const a=la(N(e,r));return W(a,"root",n[r]),W(e,r,a),e};function Yr(e,n,r="validate"){if(ce(e)||Array.isArray(e)&&e.every(ce)||ue(e)&&!e)return{type:r,message:ce(e)?e:"",ref:n}}var Me=e=>ee(e)&&!wa(e)?e:{value:e,message:""},$r=async(e,n,r,a,t,l)=>{const{ref:i,refs:s,required:u,maxLength:v,minLength:c,min:f,max:E,pattern:T,validate:y,name:R,valueAsNumber:_,mount:p}=e._f,S=N(r,R);if(!p||n.has(R))return{};const k=s?s[0]:i,I=D=>{t&&k.reportValidity&&(k.setCustomValidity(ue(D)?"":D||""),k.reportValidity())},V={},C=dr(i),M=ca(i),B=C||M,P=(_||ur(i))&&J(i.value)&&J(S)||Ia(i)&&i.value===""||S===""||Array.isArray(S)&&!S.length,G=qi.bind(null,R,a,V),F=(D,A,x,j=Oe.maxLength,U=Oe.minLength)=>{const Z=D?A:x;V[R]={type:D?j:U,message:Z,ref:i,...G(D?j:U,Z)}};if(l?!Array.isArray(S)||!S.length:u&&(!B&&(P||oe(S))||ue(S)&&!S||M&&!Bn(s).isValid||C&&!Cn(s).isValid)){const{value:D,message:A}=ce(u)?{value:!!u,message:u}:Me(u);if(D&&(V[R]={type:Oe.required,message:A,ref:k,...G(Oe.required,A)},!a))return I(A),V}if(!P&&(!oe(f)||!oe(E))){let D,A;const x=Me(E),j=Me(f);if(!oe(S)&&!isNaN(S)){const U=i.valueAsNumber||S&&+S;oe(x.value)||(D=U>x.value),oe(j.value)||(A=U<j.value)}else{const U=i.valueAsDate||new Date(S),Z=_e=>new Date(new Date().toDateString()+" "+_e),le=i.type=="time",ie=i.type=="week";ce(x.value)&&S&&(D=le?Z(S)>Z(x.value):ie?S>x.value:U>new Date(x.value)),ce(j.value)&&S&&(A=le?Z(S)<Z(j.value):ie?S<j.value:U<new Date(j.value))}if((D||A)&&(F(!!D,x.message,j.message,Oe.max,Oe.min),!a))return I(V[R].message),V}if((v||c)&&!P&&(ce(S)||l&&Array.isArray(S))){const D=Me(v),A=Me(c),x=!oe(D.value)&&S.length>+D.value,j=!oe(A.value)&&S.length<+A.value;if((x||j)&&(F(x,D.message,A.message),!a))return I(V[R].message),V}if(T&&!P&&ce(S)){const{value:D,message:A}=Me(T);if(wa(D)&&!S.match(D)&&(V[R]={type:Oe.pattern,message:A,ref:i,...G(Oe.pattern,A)},!a))return I(A),V}if(y){if(ye(y)){const D=await y(S,r),A=Yr(D,k);if(A&&(V[R]={...A,...G(Oe.validate,A.message)},!a))return I(A.message),V}else if(ee(y)){let D={};for(const A in y){if(!se(D)&&!a)break;const x=Yr(await y[A](S,r),k,A);x&&(D={...x,...G(A,x.message)},I(x.message),a&&(V[R]=D))}if(!se(D)&&(V[R]={ref:k,...D},!a))return V}}return I(!0),V};const ts={mode:he.onSubmit,reValidateMode:he.onChange,shouldFocusError:!0};function ls(e={}){let n={...ts,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:ye(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},a={},t=ee(n.defaultValues)||ee(n.values)?ae(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:ae(t),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},u,v=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let f={...c};const E={array:Mr(),state:Mr()},T=n.criteriaMode===he.all,y=o=>m=>{clearTimeout(v),v=setTimeout(o,m)},R=async o=>{if(!n.disabled&&(c.isValid||f.isValid||o)){const m=n.resolver?se((await M()).errors):await P(a,!0);m!==r.isValid&&E.state.next({isValid:m})}},_=(o,m)=>{!n.disabled&&(c.isValidating||c.validatingFields||f.isValidating||f.validatingFields)&&((o||Array.from(s.mount)).forEach(g=>{g&&(m?W(r.validatingFields,g,m):Q(r.validatingFields,g))}),E.state.next({validatingFields:r.validatingFields,isValidating:!se(r.validatingFields)}))},p=(o,m=[],g,L,K=!0,O=!0)=>{if(L&&g&&!n.disabled){if(i.action=!0,O&&Array.isArray(N(a,o))){const w=g(N(a,o),L.argA,L.argB);K&&W(a,o,w)}if(O&&Array.isArray(N(r.errors,o))){const w=g(N(r.errors,o),L.argA,L.argB);K&&W(r.errors,o,w),rs(r.errors,o)}if((c.touchedFields||f.touchedFields)&&O&&Array.isArray(N(r.touchedFields,o))){const w=g(N(r.touchedFields,o),L.argA,L.argB);K&&W(r.touchedFields,o,w)}(c.dirtyFields||f.dirtyFields)&&(r.dirtyFields=Fe(t,l)),E.state.next({name:o,isDirty:F(o,m),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else W(l,o,m)},S=(o,m)=>{W(r.errors,o,m),E.state.next({errors:r.errors})},k=o=>{r.errors=o,E.state.next({errors:r.errors,isValid:!1})},I=(o,m,g,L)=>{const K=N(a,o);if(K){const O=N(l,o,J(g)?N(t,o):g);J(O)||L&&L.defaultChecked||m?W(l,o,m?O:Ur(K._f)):x(o,O),i.mount&&R()}},V=(o,m,g,L,K)=>{let O=!1,w=!1;const q={name:o};if(!n.disabled){if(!g||L){(c.isDirty||f.isDirty)&&(w=r.isDirty,r.isDirty=q.isDirty=F(),O=w!==q.isDirty);const z=Te(N(t,o),m);w=!!N(r.dirtyFields,o),z?Q(r.dirtyFields,o):W(r.dirtyFields,o,!0),q.dirtyFields=r.dirtyFields,O=O||(c.dirtyFields||f.dirtyFields)&&w!==!z}if(g){const z=N(r.touchedFields,o);z||(W(r.touchedFields,o,g),q.touchedFields=r.touchedFields,O=O||(c.touchedFields||f.touchedFields)&&z!==g)}O&&K&&E.state.next(q)}return O?q:{}},C=(o,m,g,L)=>{const K=N(r.errors,o),O=(c.isValid||f.isValid)&&ue(m)&&r.isValid!==m;if(n.delayError&&g?(u=y(()=>S(o,g)),u(n.delayError)):(clearTimeout(v),u=null,g?W(r.errors,o,g):Q(r.errors,o)),(g?!Te(K,g):K)||!se(L)||O){const w={...L,...O&&ue(m)?{isValid:m}:{},errors:r.errors,name:o};r={...r,...w},E.state.next(w)}},M=async o=>{_(o,!0);const m=await n.resolver(l,n.context,Ji(o||s.mount,a,n.criteriaMode,n.shouldUseNativeValidation));return _(o),m},B=async o=>{const{errors:m}=await M(o);if(o)for(const g of o){const L=N(m,g);L?W(r.errors,g,L):Q(r.errors,g)}else r.errors=m;return m},P=async(o,m,g={valid:!0})=>{for(const L in o){const K=o[L];if(K){const{_f:O,...w}=K;if(O){const q=s.array.has(O.name),z=K._f&&Xi(K._f);z&&c.validatingFields&&_([O.name],!0);const ve=await $r(K,s.disabled,l,T,n.shouldUseNativeValidation&&!m,q);if(z&&c.validatingFields&&_([O.name]),ve[O.name]&&(g.valid=!1,m))break;!m&&(N(ve,O.name)?q?ns(r.errors,ve,O.name):W(r.errors,O.name,ve[O.name]):Q(r.errors,O.name))}!se(w)&&await P(w,m,g)}}return g.valid},G=()=>{for(const o of s.unMount){const m=N(a,o);m&&(m._f.refs?m._f.refs.every(g=>!Ya(g)):!Ya(m._f.ref))&&Ye(o)}s.unMount=new Set},F=(o,m)=>!n.disabled&&(o&&m&&W(l,o,m),!Te(_e(),t)),D=(o,m,g)=>Fn(o,s,{...i.mount?l:J(m)?t:ce(o)?{[o]:m}:m},g,m),A=o=>tr(N(i.mount?l:t,o,n.shouldUnregister?N(t,o,[]):[])),x=(o,m,g={})=>{const L=N(a,o);let K=m;if(L){const O=L._f;O&&(!O.disabled&&W(l,o,Hn(m,O)),K=Ia(O.ref)&&oe(m)?"":m,jn(O.ref)?[...O.ref.options].forEach(w=>w.selected=K.includes(w.value)):O.refs?ca(O.ref)?O.refs.forEach(w=>{(!w.defaultChecked||!w.disabled)&&(Array.isArray(K)?w.checked=!!K.find(q=>q===w.value):w.checked=K===w.value||!!K)}):O.refs.forEach(w=>w.checked=w.value===K):ur(O.ref)?O.ref.value="":(O.ref.value=K,O.ref.type||E.state.next({name:o,values:ae(l)})))}(g.shouldDirty||g.shouldTouch)&&V(o,K,g.shouldTouch,g.shouldDirty,!0),g.shouldValidate&&ie(o)},j=(o,m,g)=>{for(const L in m){if(!m.hasOwnProperty(L))return;const K=m[L],O=o+"."+L,w=N(a,O);(s.array.has(o)||ee(K)||w&&!w._f)&&!Re(K)?j(O,K,g):x(O,K,g)}},U=(o,m,g={})=>{const L=N(a,o),K=s.array.has(o),O=ae(m);W(l,o,O),K?(E.array.next({name:o,values:ae(l)}),(c.isDirty||c.dirtyFields||f.isDirty||f.dirtyFields)&&g.shouldDirty&&E.state.next({name:o,dirtyFields:Fe(t,l),isDirty:F(o,O)})):L&&!L._f&&!oe(O)?j(o,O,g):x(o,O,g),Cr(o,s)&&E.state.next({...r,name:o}),E.state.next({name:i.mount?o:void 0,values:ae(l)})},Z=async o=>{i.mount=!0;const m=o.target;let g=m.name,L=!0;const K=N(a,g),O=z=>{L=Number.isNaN(z)||Re(z)&&isNaN(z.getTime())||Te(z,N(l,g,z))},w=Br(n.mode),q=Br(n.reValidateMode);if(K){let z,ve;const _a=m.type?Ur(K._f):Pn(o),Ae=o.type===Da.BLUR||o.type===Da.FOCUS_OUT,at=!Zi(K._f)&&!n.resolver&&!N(r.errors,g)&&!K._f.deps||as(Ae,N(r.touchedFields,g),r.isSubmitted,q,w),Ba=Cr(g,s,Ae);W(l,g,_a),Ae?(!m||!m.readOnly)&&(K._f.onBlur&&K._f.onBlur(o),u&&u(0)):K._f.onChange&&K._f.onChange(o);const Ha=V(g,_a,Ae),rt=!se(Ha)||Ba;if(!Ae&&E.state.next({name:g,type:o.type,values:ae(l)}),at)return(c.isValid||f.isValid)&&(n.mode==="onBlur"?Ae&&R():Ae||R()),rt&&E.state.next({name:g,...Ba?{}:Ha});if(!Ae&&Ba&&E.state.next({...r}),n.resolver){const{errors:fr}=await M([g]);if(O(_a),L){const nt=qr(r.errors,a,g),Er=qr(fr,a,nt.name||g);z=Er.error,g=Er.name,ve=se(fr)}}else _([g],!0),z=(await $r(K,s.disabled,l,T,n.shouldUseNativeValidation))[g],_([g]),O(_a),L&&(z?ve=!1:(c.isValid||f.isValid)&&(ve=await P(a,!0)));L&&(K._f.deps&&(!Array.isArray(K._f.deps)||K._f.deps.length>0)&&ie(K._f.deps),C(g,ve,z,Ha))}},le=(o,m)=>{if(N(r.errors,m)&&o.focus)return o.focus(),1},ie=async(o,m={})=>{let g,L;const K=la(o);if(n.resolver){const O=await B(J(o)?o:K);g=se(O),L=o?!K.some(w=>N(O,w)):g}else o?(L=(await Promise.all(K.map(async O=>{const w=N(a,O);return await P(w&&w._f?{[O]:w}:w)}))).every(Boolean),!(!L&&!r.isValid)&&R()):L=g=await P(a);return E.state.next({...!ce(o)||(c.isValid||f.isValid)&&g!==r.isValid?{}:{name:o},...n.resolver||!o?{isValid:g}:{},errors:r.errors}),m.shouldFocus&&!L&&ia(a,le,o?K:s.mount),L},_e=(o,m)=>{let g={...i.mount?l:t};return m&&(g=Gn(m.dirtyFields?r.dirtyFields:r.touchedFields,g)),J(o)?g:ce(o)?N(g,o):o.map(L=>N(g,L))},re=(o,m)=>({invalid:!!N((m||r).errors,o),isDirty:!!N((m||r).dirtyFields,o),error:N((m||r).errors,o),isValidating:!!N(r.validatingFields,o),isTouched:!!N((m||r).touchedFields,o)}),me=o=>{o&&la(o).forEach(m=>Q(r.errors,m)),E.state.next({errors:o?r.errors:{}})},pe=(o,m,g)=>{const L=(N(a,o,{_f:{}})._f||{}).ref,K=N(r.errors,o)||{},{ref:O,message:w,type:q,...z}=K;W(r.errors,o,{...z,...m,ref:L}),E.state.next({name:o,errors:r.errors,isValid:!1}),g&&g.shouldFocus&&L&&L.focus&&L.focus()},ja=(o,m)=>ye(o)?E.state.subscribe({next:g=>"values"in g&&o(D(void 0,m),g)}):D(o,m,!0),ga=o=>E.state.subscribe({next:m=>{es(o.name,m.name,o.exact)&&Qi(m,o.formState||c,Je,o.reRenderRoot)&&o.callback({values:{...l},...r,...m,defaultValues:t})}}).unsubscribe,Ua=o=>(i.mount=!0,f={...f,...o.formState},ga({...o,formState:f})),Ye=(o,m={})=>{for(const g of o?la(o):s.mount)s.mount.delete(g),s.array.delete(g),m.keepValue||(Q(a,g),Q(l,g)),!m.keepError&&Q(r.errors,g),!m.keepDirty&&Q(r.dirtyFields,g),!m.keepTouched&&Q(r.touchedFields,g),!m.keepIsValidating&&Q(r.validatingFields,g),!n.shouldUnregister&&!m.keepDefaultValue&&Q(t,g);E.state.next({values:ae(l)}),E.state.next({...r,...m.keepDirty?{isDirty:F()}:{}}),!m.keepIsValid&&R()},fa=({disabled:o,name:m})=>{(ue(o)&&i.mount||o||s.disabled.has(m))&&(o?s.disabled.add(m):s.disabled.delete(m))},De=(o,m={})=>{let g=N(a,o);const L=ue(m.disabled)||ue(n.disabled);return W(a,o,{...g||{},_f:{...g&&g._f?g._f:{ref:{name:o}},name:o,mount:!0,...m}}),s.mount.add(o),g?fa({disabled:ue(m.disabled)?m.disabled:n.disabled,name:o}):I(o,!0,m.value),{...L?{disabled:m.disabled||n.disabled}:{},...n.progressive?{required:!!m.required,min:ea(m.min),max:ea(m.max),minLength:ea(m.minLength),maxLength:ea(m.maxLength),pattern:ea(m.pattern)}:{},name:o,onChange:Z,onBlur:Z,ref:K=>{if(K){De(o,m),g=N(a,o);const O=J(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,w=Yi(O),q=g._f.refs||[];if(w?q.find(z=>z===O):O===g._f.ref)return;W(a,o,{_f:{...g._f,...w?{refs:[...q.filter(Ya),O,...Array.isArray(N(t,o))?[{}]:[]],ref:{type:O.type,name:o}}:{ref:O}}}),I(o,!1,void 0,O)}else g=N(a,o,{}),g._f&&(g._f.mount=!1),(n.shouldUnregister||m.shouldUnregister)&&!(xn(s.array,o)&&i.action)&&s.unMount.add(o)}}},Ie=()=>n.shouldFocusError&&ia(a,le,s.mount),$e=o=>{ue(o)&&(E.state.next({disabled:o}),ia(a,(m,g)=>{const L=N(a,g);L&&(m.disabled=L._f.disabled||o,Array.isArray(L._f.refs)&&L._f.refs.forEach(K=>{K.disabled=L._f.disabled||o}))},0,!1))},we=(o,m)=>async g=>{let L;g&&(g.preventDefault&&g.preventDefault(),g.persist&&g.persist());let K=ae(l);if(E.state.next({isSubmitting:!0}),n.resolver){const{errors:O,values:w}=await M();r.errors=O,K=ae(w)}else await P(a);if(s.disabled.size)for(const O of s.disabled)Q(K,O);if(Q(r.errors,"root"),se(r.errors)){E.state.next({errors:{}});try{await o(K,g)}catch(O){L=O}}else m&&await m({...r.errors},g),Ie(),setTimeout(Ie);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:se(r.errors)&&!L,submitCount:r.submitCount+1,errors:r.errors}),L)throw L},ze=(o,m={})=>{N(a,o)&&(J(m.defaultValue)?U(o,ae(N(t,o))):(U(o,m.defaultValue),W(t,o,ae(m.defaultValue))),m.keepTouched||Q(r.touchedFields,o),m.keepDirty||(Q(r.dirtyFields,o),r.isDirty=m.defaultValue?F(o,ae(N(t,o))):F()),m.keepError||(Q(r.errors,o),c.isValid&&R()),E.state.next({...r}))},Ve=(o,m={})=>{const g=o?ae(o):t,L=ae(g),K=se(o),O=K?t:L;if(m.keepDefaultValues||(t=g),!m.keepValues){if(m.keepDirtyValues){const w=new Set([...s.mount,...Object.keys(Fe(t,l))]);for(const q of Array.from(w))N(r.dirtyFields,q)?W(O,q,N(l,q)):U(q,N(O,q))}else{if(nr&&J(o))for(const w of s.mount){const q=N(a,w);if(q&&q._f){const z=Array.isArray(q._f.refs)?q._f.refs[0]:q._f.ref;if(Ia(z)){const ve=z.closest("form");if(ve){ve.reset();break}}}}if(m.keepFieldsRef)for(const w of s.mount)U(w,N(O,w));else a={}}l=n.shouldUnregister?m.keepDefaultValues?ae(t):{}:ae(O),E.array.next({values:{...O}}),E.state.next({values:{...O}})}s={mount:m.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!c.isValid||!!m.keepIsValid||!!m.keepDirtyValues,i.watch=!!n.shouldUnregister,E.state.next({submitCount:m.keepSubmitCount?r.submitCount:0,isDirty:K?!1:m.keepDirty?r.isDirty:!!(m.keepDefaultValues&&!Te(o,t)),isSubmitted:m.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:K?{}:m.keepDirtyValues?m.keepDefaultValues&&l?Fe(t,l):r.dirtyFields:m.keepDefaultValues&&o?Fe(t,o):m.keepDirty?r.dirtyFields:{},touchedFields:m.keepTouched?r.touchedFields:{},errors:m.keepErrors?r.errors:{},isSubmitSuccessful:m.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:t})},Ne=(o,m)=>Ve(ye(o)?o(l):o,m),We=(o,m={})=>{const g=N(a,o),L=g&&g._f;if(L){const K=L.refs?L.refs[0]:L.ref;K.focus&&(K.focus(),m.shouldSelect&&ye(K.select)&&K.select())}},Je=o=>{r={...r,...o}},Pe={control:{register:De,unregister:Ye,getFieldState:re,handleSubmit:we,setError:pe,_subscribe:ga,_runSchema:M,_focusError:Ie,_getWatch:D,_getDirty:F,_setValid:R,_setFieldArray:p,_setDisabledField:fa,_setErrors:k,_getFieldArray:A,_reset:Ve,_resetDefaultValues:()=>ye(n.defaultValues)&&n.defaultValues().then(o=>{Ne(o,n.resetOptions),E.state.next({isLoading:!1})}),_removeUnmounted:G,_disableForm:$e,_subjects:E,_proxyFormState:c,get _fields(){return a},get _formValues(){return l},get _state(){return i},set _state(o){i=o},get _defaultValues(){return t},get _names(){return s},set _names(o){s=o},get _formState(){return r},get _options(){return n},set _options(o){n={...n,...o}}},subscribe:Ua,trigger:ie,register:De,handleSubmit:we,watch:ja,setValue:U,getValues:_e,reset:Ne,resetField:ze,clearErrors:me,unregister:Ye,setError:pe,setFocus:We,getFieldState:re};return{...Pe,formControl:Pe}}function is(e={}){const n=d.useRef(void 0),r=d.useRef(void 0),[a,t]=d.useState({isDirty:!1,isValidating:!1,isLoading:ye(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:ye(e.defaultValues)?void 0:e.defaultValues});if(!n.current)if(e.formControl)n.current={...e.formControl,formState:a},e.defaultValues&&!ye(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=ls(e);n.current={...s,formState:a}}const l=n.current.control;return l._options=e,sr(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>t({...l._formState}),reRenderRoot:!0});return t(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),d.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),d.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),d.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),d.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),d.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==a.isDirty&&l._subjects.state.next({isDirty:i})}},[l,a.isDirty]),d.useEffect(()=>{e.values&&!Te(e.values,r.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),r.current=e.values,t(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),d.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),n.current.formState=Mn(a,l),n.current}var $a={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var zr;function ss(){return zr||(zr=1,(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=t(l,a(s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=t(i,s));return i}function t(l,i){return i?l?l+" "+i:l+i:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})($a)),$a.exports}var os=ss();const us=dn(os);function ds(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wr={exports:{}},aa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr;function cs(){if(Jr)return aa;Jr=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(a,t,l){var i=null;if(l!==void 0&&(i=""+l),t.key!==void 0&&(i=""+t.key),"key"in t){l={};for(var s in t)s!=="key"&&(l[s]=t[s])}else l=t;return t=l.ref,{$$typeof:e,type:a,key:i,ref:t!==void 0?t:null,props:l}}return aa.Fragment=n,aa.jsx=r,aa.jsxs=r,aa}var Xr;function ms(){return Xr||(Xr=1,Wr.exports=cs()),Wr.exports}var Se=ms();const vs=({children:e})=>{const n=b.Children.toArray(e);return n.length===0?null:Se.jsx(Gl,{variant:"warning",size:"small",children:Se.jsx(de,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:n.map(r=>Se.jsx(X,{size:"small",children:r},gs(r)))})})},gs=e=>{if(b.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},ma={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};be(ma);const Pa="var(--ax-bg-neutral-strong)",qn=4,fs=(e,n,r)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${Pa};
    border-radius: ${qn}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${n}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${Pa};
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
`,Es=(e,n,r)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${Pa};
    border-radius: ${qn}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${n}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${Pa};
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
`,_s=(e,n,r,a)=>n?Es(e,r,a):fs(e,r,a),hs=(e,n,r)=>r?"":n?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,ys=({children:e,alignOffset:n=0,alignLeft:r=!1,marginTop:a=0,marginLeft:t=0,hideBorder:l=!1})=>Se.jsxs(Se.Fragment,{children:[Se.jsx("style",{dangerouslySetInnerHTML:{__html:_s(n,r,a,t)}}),Se.jsx("div",{className:hs(n,r,l),children:e})]});var Zr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Qr;function bs(){return Qr||(Qr=1,(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=t(l,a.call(this,s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=t(i,this&&this[s]||s));return i}function t(l,i){return i?l?l+" "+i:l+i:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Zr)),Zr.exports}var ps=bs();const cr=ds(ps),Os="_borderbox_1a0x6_1",Ts="_error_1a0x6_5",Ss="_warning_1a0x6_8",ks={borderbox:Os,error:Ts,warning:Ss};cr.bind(ks);const Ks="_aksjonspunkt_11wjs_1",As="_erAksjonspunktApent_11wjs_4",Vs="_erIkkeGodkjentAvBeslutter_11wjs_8",Ns={aksjonspunkt:Ks,erAksjonspunktApent:As,erIkkeGodkjentAvBeslutter:Vs};cr.bind(Ns);be(ma);be(ma);const Rs="_divider_1jpov_1",Ls="_dividerParagraf_1jpov_8",Ds="_leftPanel_1jpov_11",Is="_rightPanel_1jpov_14",ws={divider:Rs,dividerParagraf:Ls,leftPanel:Ds,rightPanel:Is};cr.bind(ws);const Yn=()=>Se.jsx("span",{"data-testid":"editedIcon",children:Se.jsx(jt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});be(ma);be(ma);function Ps(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var en={exports:{}},ra={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var an;function xs(){if(an)return ra;an=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(a,t,l){var i=null;if(l!==void 0&&(i=""+l),t.key!==void 0&&(i=""+t.key),"key"in t){l={};for(var s in t)s!=="key"&&(l[s]=t[s])}else l=t;return t=l.ref,{$$typeof:e,type:a,key:i,ref:t!==void 0?t:null,props:l}}return ra.Fragment=n,ra.jsx=r,ra.jsxs=r,ra}var rn;function Ms(){return rn||(rn=1,en.exports=xs()),en.exports}var ne=Ms();const mr=e=>e.reduce((n,r,a)=>({...n,[a]:t=>r(t)||!0}),{}),vr=(e,n)=>n.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e)?.message,Fs="_noReadOnlyIcon_6dero_1",Gs={noReadOnlyIcon:Fs};var Ja={exports:{}},js=Ja.exports,nn;function Us(){return nn||(nn=1,(function(e,n){(function(r,a){e.exports=a()})(js,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,u={},v=function(_){return(_=+_)+(_>68?1900:2e3)},c=function(_){return function(p){this[_]=+p}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=(function(p){if(!p||p==="Z")return 0;var S=p.match(/([+-]|\d\d)/g),k=60*S[1]+(+S[2]||0);return k===0?0:S[0]==="+"?-k:k})(_)}],E=function(_){var p=u[_];return p&&(p.indexOf?p:p.s.concat(p.f))},T=function(_,p){var S,k=u.meridiem;if(k){for(var I=1;I<=24;I+=1)if(_.indexOf(k(I,0,p))>-1){S=I>12;break}}else S=_===(p?"pm":"PM");return S},y={A:[s,function(_){this.afternoon=T(_,!1)}],a:[s,function(_){this.afternoon=T(_,!0)}],Q:[t,function(_){this.month=3*(_-1)+1}],S:[t,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[i,c("seconds")],ss:[i,c("seconds")],m:[i,c("minutes")],mm:[i,c("minutes")],H:[i,c("hours")],h:[i,c("hours")],HH:[i,c("hours")],hh:[i,c("hours")],D:[i,c("day")],DD:[l,c("day")],Do:[s,function(_){var p=u.ordinal,S=_.match(/\d+/);if(this.day=S[0],p)for(var k=1;k<=31;k+=1)p(k).replace(/\[|\]/g,"")===_&&(this.day=k)}],w:[i,c("week")],ww:[l,c("week")],M:[i,c("month")],MM:[l,c("month")],MMM:[s,function(_){var p=E("months"),S=(E("monthsShort")||p.map(function(k){return k.slice(0,3)})).indexOf(_)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[s,function(_){var p=E("months").indexOf(_)+1;if(p<1)throw new Error;this.month=p%12||p}],Y:[/[+-]?\d+/,c("year")],YY:[l,function(_){this.year=v(_)}],YYYY:[/\d{4}/,c("year")],Z:f,ZZ:f};function R(_){var p,S;p=_,S=u&&u.formats;for(var k=(_=p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,F,D){var A=D&&D.toUpperCase();return F||S[D]||r[D]||S[A].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,j,U){return j||U.slice(1)})})).match(a),I=k.length,V=0;V<I;V+=1){var C=k[V],M=y[C],B=M&&M[0],P=M&&M[1];k[V]=P?{regex:B,parser:P}:C.replace(/^\[|\]$/g,"")}return function(G){for(var F={},D=0,A=0;D<I;D+=1){var x=k[D];if(typeof x=="string")A+=x.length;else{var j=x.regex,U=x.parser,Z=G.slice(A),le=j.exec(Z)[0];U.call(F,le),G=G.replace(le,"")}}return(function(ie){var _e=ie.afternoon;if(_e!==void 0){var re=ie.hours;_e?re<12&&(ie.hours+=12):re===12&&(ie.hours=0),delete ie.afternoon}})(F),F}}return function(_,p,S){S.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(v=_.parseTwoDigitYear);var k=p.prototype,I=k.parse;k.parse=function(V){var C=V.date,M=V.utc,B=V.args;this.$u=M;var P=B[1];if(typeof P=="string"){var G=B[2]===!0,F=B[3]===!0,D=G||F,A=B[2];F&&(A=B[2]),u=this.$locale(),!G&&A&&(u=S.Ls[A]),this.$d=(function(Z,le,ie,_e){try{if(["x","X"].indexOf(le)>-1)return new Date((le==="X"?1e3:1)*Z);var re=R(le)(Z),me=re.year,pe=re.month,ja=re.day,ga=re.hours,Ua=re.minutes,Ye=re.seconds,fa=re.milliseconds,De=re.zone,Ie=re.week,$e=new Date,we=ja||(me||pe?1:$e.getDate()),ze=me||$e.getFullYear(),Ve=0;me&&!pe||(Ve=pe>0?pe-1:$e.getMonth());var Ne,We=ga||0,Je=Ua||0,Ea=Ye||0,Pe=fa||0;return De?new Date(Date.UTC(ze,Ve,we,We,Je,Ea,Pe+60*De.offset*1e3)):ie?new Date(Date.UTC(ze,Ve,we,We,Je,Ea,Pe)):(Ne=new Date(ze,Ve,we,We,Je,Ea,Pe),Ie&&(Ne=_e(Ne).week(Ie).toDate()),Ne)}catch{return new Date("")}})(C,P,M,S),this.init(),A&&A!==!0&&(this.$L=this.locale(A).$L),D&&C!=this.format(P)&&(this.$d=new Date("")),u={}}else if(P instanceof Array)for(var x=P.length,j=1;j<=x;j+=1){B[1]=P[j-1];var U=S.apply(this,B);if(U.isValid()){this.$d=U.$d,this.$L=U.$L,this.init();break}j===x&&(this.$d=new Date(""))}else I.call(this,V)}}})})(Ja)),Ja.exports}var Bs=Us();const Hs=Ps(Bs),Cs="_textarea_14c7r_1",qs="_readOnlyField_14c7r_7",tn={textarea:Cs,readOnlyField:qs},Ys=e=>e!=null&&e!=="",$n=({label:e,value:n,isEdited:r=!1,type:a,hideLabel:t,size:l})=>Ys(n)?ne.jsxs(de,{gap:"space-4",children:[e&&!t&&ne.jsx(fe,{size:l,children:e}),ne.jsxs(Be,{gap:"space-8",align:"center",wrap:!1,children:[ne.jsx(er,{className:a==="textarea"?tn.textarea:tn.readOnlyField,size:l,children:n}),r&&ne.jsx(Yn,{})]})]}):null;lt.extend(Hs);const ln=({legend:e,validate:n=[],onChange:r,children:a,className:t,readOnly:l,size:i="small",isEdited:s,name:u,control:v,...c})=>{const{formState:{errors:f}}=Ke(),{field:E}=or({name:u,control:v,rules:{validate:mr(n)}});return ne.jsx(Di,{name:u,value:E.value!==void 0?E.value:null,legend:ne.jsxs(Be,{justify:"center",gap:"space-8",children:[e,l&&s&&ne.jsx(Yn,{})]}),"aria-readonly":l,readOnly:l,size:i,error:vr(f,u),onChange:T=>{r&&r(T),E.onChange(T)},className:us(t,Gs.noReadOnlyIcon),...c,children:a})},sn=({label:e,selectValues:n,validate:r=[],readOnly:a=!1,hideValueOnDisable:t=!1,onChange:l,hideLabel:i,isEdited:s,size:u="small",name:v,control:c,disabled:f,...E})=>{const{formState:{errors:T}}=Ke(),{field:y}=or({name:v,control:c,rules:{validate:b.useMemo(()=>mr(r),[r])}});if(a){const p=n.map(k=>k.props).find(k=>k.value===y.value),S=p?p.children:void 0;return ne.jsx($n,{value:S,label:e,hideLabel:i,isEdited:s,size:u})}const R=y.value||"",_=!n.map(p=>p.props.value).includes(R)&&R!=="";return _&&console.warn(`No corresponding option found for value '${R}'`),ne.jsxs(fi,{size:u,error:vr(T,v),label:e,value:t&&f||_?"":y.value,onChange:p=>{l&&l(p),y.onChange(p)},hideLabel:i,...E,children:[ne.jsx("option",{style:{display:"none"}}),n]})},$s="_textAreaFieldWithBadges_bdz0b_1",zs="_etikettWrapper_bdz0b_4",on={textAreaFieldWithBadges:$s,etikettWrapper:zs},zn=({name:e,control:n,label:r,hideLabel:a,readOnly:t,badges:l,validate:i=[],parse:s=E=>E,isEdited:u,autoComplete:v="off",size:c="small",...f})=>{const{formState:{errors:E}}=Ke(),{field:T}=or({name:e,control:n,rules:{validate:b.useMemo(()=>mr(i),[i])}});return t?ne.jsx($n,{size:c,label:r,value:T.value,type:"textarea",isEdited:u,hideLabel:a}):ne.jsxs("div",{className:l?on.textAreaFieldWithBadges:null,children:[l&&ne.jsx("div",{className:on.etikettWrapper,children:l.map(({type:y,titleText:R})=>ne.jsx(Ki,{variant:y,size:"small",children:R},R))}),ne.jsx(Gi,{size:c,label:r,hideLabel:a,autoComplete:v,...T,onChange:y=>T.onChange(y.currentTarget.value!==""?s(y.currentTarget.value):null),value:T.value?T.value:"",error:vr(E,e),...f})]})},Ws=({formMethods:e,onSubmit:n,children:r,className:a,setDataOnUnmount:t})=>{const{handleSubmit:l,getValues:i}=e;return b.useEffect(()=>()=>{t&&t(i())},[]),ne.jsx(Bi,{...e,children:ne.jsx("form",{className:a,onSubmit:n?l(s=>n(s)):void 0,children:r})})},Js="_begrunnelseTextField_hw8s7_6",Xs={begrunnelseTextField:Js},va={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},Zs=be(va),Qs=st(3),eo=ot(2e3),ao=e=>e?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",ro=e=>n=>n!==void 0||e,Ga=({readOnly:e,text:n,useAllWidth:r=!1,notRequired:a=!1})=>{const{formState:{isDirty:t},control:l}=Ke(),i=a?()=>!1:ro(t);return h.jsx("div",{className:r?"":Xs.begrunnelseTextField,children:h.jsx(zn,{name:"begrunnelse",control:l,label:n??Zs.formatMessage({id:ao(e)}),validate:[it(i),Qs,eo,gn],maxLength:2e3,readOnly:e,parse:vn})})},no=e=>e.at(0)?.begrunnelse??"";Ga.buildInitialValues=e=>({begrunnelse:ut(no(e))});Ga.transformValues=e=>({begrunnelse:e.begrunnelse});Ga.__docgenInfo={description:`ProsessStegBegrunnelseTextField

Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5018'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6019'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| 'UNDEFINED'
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5069'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5018'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_6'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_6'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}}],raw:"Aksjonspunkt[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const to=be(va),lo=(e,n,r,a)=>!r&&!n||e?!0:a===void 0?!r:!r&&a||a,gr=({isReadOnly:e,isSubmittable:n,isSubmitting:r,isDirty:a,text:t,onClick:l,hasEmptyRequiredFields:i})=>e?null:h.jsx("div",{children:h.jsx(Ue,{size:"small",variant:"primary",loading:r,disabled:lo(r,n,a,i),onClick:l,type:l?"button":"submit",children:t??to.formatMessage({id:"SubmitButton.ConfirmInformation"})})});gr.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};be(va);be(va);be(va);const Wn=({erModalÅpen:e,lukkModal:n,isSubmittable:r,isSubmitting:a,isDirty:t,readOnly:l,valgtHjemmel:i})=>{const s=He();return h.jsx(sa,{width:"500px",open:e,"aria-label":s.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:n,children:h.jsx(sa.Body,{children:h.jsxs(de,{gap:"space-12",children:[h.jsxs(de,{gap:"space-16",children:[h.jsx(fe,{size:"medium",children:h.jsx(Y,{id:"Klage.Modal.Overskrift"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.SendTilKlageinstans"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Valg"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Oppretthold"})}),i&&h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Hjemmel",values:{hjemmel:i}})})]}),h.jsx("div",{children:h.jsxs(Be,{gap:"space-8",children:[h.jsx(gr,{isReadOnly:l,isSubmittable:r,isSubmitting:a,isDirty:t}),h.jsx(Ue,{size:"small",variant:"primary",onClick:n,autoFocus:!0,type:"button",children:h.jsx(Y,{id:"Klage.Modal.Avbryt"})})]})})]})})})};Wn.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const io="_fritekstTilBrevTextArea_n72am_1",so={fritekstTilBrevTextArea:io},Jn=({språkkode:e,readOnly:n=!0})=>{const{control:r}=Ke();return h.jsx("div",{className:so.fritekstTilBrevTextArea,children:h.jsx(zn,{name:"fritekstTilBrev",control:r,label:He().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[na,gn],readOnly:n,maxLength:1e5,badges:[{type:"info",titleText:dt(e)}],parse:vn})})};Jn.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const oo="_select_1owoa_7",uo="_selectReadOnly_1owoa_10",pa={select:oo,selectReadOnly:uo},Xn=({readOnly:e,medholdReasons:n,alleHjemmlerMedNavn:r,klageVurdering:a})=>{const t=He(),{control:l}=Ke(),i=n.map(u=>h.jsx("option",{value:u.kode,children:u.navn},u.kode)),s=r.map(u=>h.jsx("option",{value:u.kode,children:u.navn},u.kode));return h.jsxs(de,{gap:"space-12",children:[h.jsx(ln,{name:"klageVurdering",control:l,legend:"",hideLegend:!0,validate:[na],readOnly:e,children:h.jsxs(Be,{gap:"space-16",children:[h.jsx(Qe,{value:"MEDHOLD_I_KLAGE",size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.ChangeVedtak"})}),h.jsx(Qe,{value:"STADFESTE_YTELSESVEDTAK",size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.KeepVedtakNfp"})})]})}),a==="MEDHOLD_I_KLAGE"&&h.jsx(ys,{children:h.jsxs(de,{gap:"space-16",children:[h.jsx(sn,{readOnly:e,control:l,name:"klageMedholdArsak",selectValues:i,className:e?pa.selectReadOnly:pa.select,label:t.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[na]}),h.jsxs(ln,{name:"klageVurderingOmgjoer",control:l,legend:"",hideLegend:!0,validate:[na],readOnly:e,children:[h.jsx(Qe,{value:"GUNST_MEDHOLD_I_KLAGE",size:"small",children:h.jsx(Y,{id:"Klage.Behandle.Omgjort"})}),h.jsx(Qe,{value:"UGUNST_MEDHOLD_I_KLAGE",size:"small",children:h.jsx(Y,{id:"Klage.Behandle.Ugunst"})}),h.jsx(Qe,{value:"DELVIS_MEDHOLD_I_KLAGE",size:"small",children:h.jsx(Y,{id:"Klage.Behandle.DelvisOmgjort"})})]})]})}),h.jsx(sn,{readOnly:e,control:l,name:"klageHjemmel",selectValues:s,className:e?pa.selectReadOnly:pa.select,label:t.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[na]})]})};Xn.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'KlageMedholdÅrsak'>[]"},description:""},alleHjemmlerMedNavn:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'KlageHjemmel'>[]"},description:""},klageVurdering:{required:!1,tsType:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},description:""}}};const co=(e,n)=>{switch(n){case"STADFESTE_YTELSESVEDTAK":return e?"KGESTA":"KGEOVE";case"OPPHEVE_YTELSESVEDTAK":return"KGEHJE";case"HJEMSENDE_UTEN_Å_OPPHEVE":return"KGEHJE";case"MEDHOLD_I_KLAGE":return"KGEOMG";default:return}},mo=(e,n)=>({fritekst:n??"",dokumentMal:co(!1,e),erOpphevetKlage:e==="OPPHEVE_YTELSESVEDTAK"}),Zn=({previewCallback:e,fritekstTilBrev:n,klageVurdering:r})=>{const a=t=>{e(mo(r,n)),t.preventDefault()};return h.jsx(Ti,{href:"#",onClick:a,onKeyDown:t=>t.key==="Enter"?a(t):null,children:h.jsx(Y,{id:"PreviewKlageLink.ForhandvisBrev"})})};Zn.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: DokumentMalType;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"union",raw:`| 'FRITEK'
| 'FRIHTM'
| 'INNVES'
| 'AVSLES'
| 'INVFOR'
| 'AVSFOR'
| 'OPPFOR'
| 'ANUFOR'
| 'INVSVP'
| 'OPPSVP'
| 'AVSSVP'
| 'INFOAF'
| 'INNOPP'
| 'VARREV'
| 'IOHENL'
| 'INNSYN'
| 'IKKESO'
| 'INGEND'
| 'FORSAK'
| 'FORMED'
| 'FORMEF'
| 'FORTID'
| 'KGEAVV'
| 'KGEOMG'
| 'KGEOVE'
| 'ELYSIM'
| 'ENDUTB'
| 'INFOPU'
| 'FORPUS'
| 'KLAGAV'
| 'KAVVIS'
| 'KLAGNY'
| 'KHJEMS'
| 'VEDMED'
| 'KOMGJO'
| 'KLAGOV'
| 'KOVKLA'
| 'KLAGVE'
| 'KSTADF'
| 'VEDOGA'
| 'ANKEBO'
| 'ANKOMG'
| 'ANKOPP'
| 'KGESTA'
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},description:""}}};const vo=e=>({klageMedholdArsak:e.klageVurdering==="MEDHOLD_I_KLAGE"?e.klageMedholdArsak:void 0,klageVurderingOmgjoer:e.klageVurdering==="MEDHOLD_I_KLAGE"?e.klageVurderingOmgjoer:void 0,klageHjemmel:e.klageHjemmel,klageVurdering:Va(e.klageVurdering),fritekstTilBrev:e.fritekstTilBrev,begrunnelse:e.begrunnelse,kode:oa.MANUELL_VURDERING_AV_KLAGE_NFP}),Oa=e=>{if(e&&e!=="-")return e},go=(e,n)=>e.filter(({kode:r})=>n.includes(r)).sort((r,a)=>r.kode.localeCompare(a.kode)),fo=e=>e.map(n=>n),Eo=e=>({klageMedholdArsak:Oa(e?.klageMedholdArsak??void 0),klageVurderingOmgjoer:Oa(e?.klageVurderingOmgjoer??void 0),klageHjemmel:Oa(e?.klageHjemmel??void 0),klageVurdering:Oa(e?.klageVurdering??void 0),begrunnelse:e?.begrunnelse??void 0,fritekstTilBrev:e?.fritekstTilBrev??void 0}),Qn=({klageVurdering:e,previewCallback:n,saveKlage:r,alleAktuelleHjemler:a})=>{const{behandling:t,alleKodeverk:l,submitCallback:i,isReadOnly:s,isSubmittable:u}=Qa(),v=go(l.KlageHjemmel,fo(a)),c=He(),[f,E]=b.useState(!1),T=Eo(e.klageVurderingResultatNFP??void 0),{mellomlagretFormData:y,setMellomlagretFormData:R}=ct(),_=is({defaultValues:y??T}),p=_.watch(),S=()=>{E(!1)},k=()=>{E(!0)};return h.jsx(Ws,{formMethods:_,onSubmit:I=>i(vo(I)),setDataOnUnmount:R,children:h.jsxs(de,{gap:"space-16",children:[h.jsx(ar,{size:"small",level:"2",children:c.formatMessage({id:"Klage.ResolveKlage.Title"})}),u&&h.jsx(vs,{children:h.jsx(Y,{id:"Klage.ResolveKlage.HelpText"})}),h.jsx(Xn,{readOnly:s,klageVurdering:p.klageVurdering,medholdReasons:l.KlageMedholdÅrsak,alleHjemmlerMedNavn:v}),h.jsx(Ga,{readOnly:s,text:c.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),h.jsx(Jn,{språkkode:t.språkkode,readOnly:s}),h.jsxs(Be,{justify:"space-between",children:[h.jsxs(Be,{gap:"space-16",children:[p.klageVurdering==="STADFESTE_YTELSESVEDTAK"&&h.jsxs(h.Fragment,{children:[h.jsx(Ue,{variant:"primary",type:"button",size:"small",onClick:()=>k(),disabled:s,children:h.jsx(Y,{id:"Klage.Behandle.Bekreft"})}),h.jsx(Wn,{erModalÅpen:f,lukkModal:S,valgtHjemmel:v.find(I=>I.kode===p.klageHjemmel)?.navn,readOnly:s,isSubmittable:u,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isValid})]}),p.klageVurdering!=="STADFESTE_YTELSESVEDTAK"&&h.jsx(gr,{isReadOnly:s,isSubmittable:u,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isDirty}),!s&&p.klageVurdering&&p.fritekstTilBrev&&p.fritekstTilBrev.length>2&&h.jsx(Zn,{previewCallback:n,fritekstTilBrev:p.fritekstTilBrev,klageVurdering:p.klageVurdering})]}),!s&&h.jsx(Ue,{size:"small",variant:"primary",onClick:_.handleSubmit(I=>r(_o(I,oa.MANUELL_VURDERING_AV_KLAGE_NFP))),type:"button",children:h.jsx(Y,{id:"Klage.ResolveKlage.TempSaveButton"})})]})]})})},_o=(e,n)=>({kode:n,klageMedholdArsak:e.klageVurdering==="MEDHOLD_I_KLAGE"||e.klageVurdering==="OPPHEVE_YTELSESVEDTAK"?e.klageMedholdArsak:void 0,klageVurderingOmgjoer:e.klageVurdering==="MEDHOLD_I_KLAGE"?e.klageVurderingOmgjoer:void 0,klageHjemmel:e.klageHjemmel,fritekstTilBrev:Va(e.fritekstTilBrev),begrunnelse:Va(e.begrunnelse),klageVurdering:Va(e.klageVurdering)});Qn.__docgenInfo={description:`BehandleklageformNfp

Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (NFP).`,methods:[],displayName:"BehandleKlageFormNfp",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: DokumentMalType;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"union",raw:`| 'FRITEK'
| 'FRIHTM'
| 'INNVES'
| 'AVSLES'
| 'INVFOR'
| 'AVSFOR'
| 'OPPFOR'
| 'ANUFOR'
| 'INVSVP'
| 'OPPSVP'
| 'AVSSVP'
| 'INFOAF'
| 'INNOPP'
| 'VARREV'
| 'IOHENL'
| 'INNSYN'
| 'IKKESO'
| 'INGEND'
| 'FORSAK'
| 'FORMED'
| 'FORMEF'
| 'FORTID'
| 'KGEAVV'
| 'KGEOMG'
| 'KGEOVE'
| 'ELYSIM'
| 'ENDUTB'
| 'INFOPU'
| 'FORPUS'
| 'KLAGAV'
| 'KAVVIS'
| 'KLAGNY'
| 'KHJEMS'
| 'VEDMED'
| 'KOMGJO'
| 'KLAGOV'
| 'KOVKLA'
| 'KLAGVE'
| 'KSTADF'
| 'VEDOGA'
| 'ANKEBO'
| 'ANKOMG'
| 'ANKOPP'
| 'KGESTA'
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TransformedValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: KlageVurderingOmgjørType;
  klageHjemmel?: KlageHjemmel;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: KlageVurderingType;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktuelleHjemler?: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>;
  behandletAvKabal?: boolean;
  klageFormkravResultatKA?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageFormkravResultatNFP?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNFP?: tjenester_behandling_klage_KlageVurderingResultatDto;
  klageVurderingResultatNK?: tjenester_behandling_klage_KlageVurderingResultatDto;
  mottattDato?: string;
  underBehandlingKabal?: boolean;
}`,signature:{properties:[{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
  begrunnelse: string;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erKlagerPart: boolean;
  erSignert: boolean;
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
  begrunnelse: string;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erKlagerPart: boolean;
  erSignert: boolean;
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"klageVurderingResultatNFP",value:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  godkjentAvMedunderskriver?: boolean;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageVurdertAv: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"klageVurderingResultatNK",value:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  godkjentAvMedunderskriver?: boolean;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageVurdertAv: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}}]}},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const et=({klageVurdering:e})=>{const n=He(),{alleKodeverk:r}=Qa(),{begrunnelse:a,fritekstTilBrev:t,klageVurdering:l,klageMedholdArsak:i,klageVurderingOmgjoer:s}=e.klageVurderingResultatNK??{},u=r.KlageMedholdÅrsak;return h.jsxs(de,{gap:"space-16",children:[h.jsx(ar,{size:"small",level:"2",children:n.formatMessage({id:"Klage.ResolveKlage.Title"})}),h.jsxs(de,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),h.jsxs(X,{size:"small",children:[l==="STADFESTE_YTELSESVEDTAK"&&h.jsx(Y,{id:"Klage.ResolveKlage.KeepVedtakNk"}),l==="MEDHOLD_I_KLAGE"&&h.jsx(Y,{id:"Klage.ResolveKlage.ChangeVedtak"}),l==="HJEMSENDE_UTEN_Å_OPPHEVE"&&h.jsx(Y,{id:"Klage.Behandle.Hjemsendt"}),l==="OPPHEVE_YTELSESVEDTAK"&&h.jsx(Y,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),l==="MEDHOLD_I_KLAGE"&&h.jsxs(de,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.Cause"})}),h.jsx(X,{size:"small",children:u.find(v=>v.kode===i)?.navn}),h.jsxs(X,{size:"small",children:[s==="GUNST_MEDHOLD_I_KLAGE"&&h.jsx(Y,{id:"Klage.Behandle.Omgjort"}),s==="UGUNST_MEDHOLD_I_KLAGE"&&h.jsx(Y,{id:"Klage.Behandle.Ugunst"}),s==="DELVIS_MEDHOLD_I_KLAGE"&&h.jsx(Y,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(l==="OPPHEVE_YTELSESVEDTAK"||l==="HJEMSENDE_UTEN_Å_OPPHEVE")&&h.jsxs(de,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.Cause"})}),h.jsx(X,{size:"small",children:u.find(v=>v.kode===i)?.navn})]}),h.jsxs(de,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"FritekstKlageBrevTextField.Fritekst"})}),h.jsx(X,{size:"small",children:t})]}),h.jsxs(de,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),h.jsx(X,{size:"small",children:a})]})]})};et.__docgenInfo={description:`BehandleklageformNfp

Setter opp readonly-panel for behandling av klage (KA).`,methods:[],displayName:"BehandleKlageFormKa",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktuelleHjemler?: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>;
  behandletAvKabal?: boolean;
  klageFormkravResultatKA?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageFormkravResultatNFP?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNFP?: tjenester_behandling_klage_KlageVurderingResultatDto;
  klageVurderingResultatNK?: tjenester_behandling_klage_KlageVurderingResultatDto;
  mottattDato?: string;
  underBehandlingKabal?: boolean;
}`,signature:{properties:[{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
  begrunnelse: string;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erKlagerPart: boolean;
  erSignert: boolean;
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
  begrunnelse: string;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erKlagerPart: boolean;
  erSignert: boolean;
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"klageVurderingResultatNFP",value:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  godkjentAvMedunderskriver?: boolean;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageVurdertAv: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"klageVurderingResultatNK",value:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  godkjentAvMedunderskriver?: boolean;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageVurdertAv: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}}]}},description:""}}};const ho={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},yo=be(ho),Xa=({klageVurdering:e,saveKlage:n,previewCallback:r})=>{const{aksjonspunkterForPanel:a}=Qa();return h.jsxs(mt,{value:yo,children:[e.klageVurderingResultatNK&&h.jsx(et,{klageVurdering:e}),a.some(t=>t.definisjon===oa.MANUELL_VURDERING_AV_KLAGE_NFP)&&h.jsx(Qn,{klageVurdering:e,saveKlage:n,previewCallback:r,alleAktuelleHjemler:e.aktuelleHjemler?e.aktuelleHjemler:[]})]})};Xa.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktuelleHjemler?: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>;
  behandletAvKabal?: boolean;
  klageFormkravResultatKA?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageFormkravResultatNFP?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNFP?: tjenester_behandling_klage_KlageVurderingResultatDto;
  klageVurderingResultatNK?: tjenester_behandling_klage_KlageVurderingResultatDto;
  mottattDato?: string;
  underBehandlingKabal?: boolean;
}`,signature:{properties:[{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
  begrunnelse: string;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erKlagerPart: boolean;
  erSignert: boolean;
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
  begrunnelse: string;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erKlagerPart: boolean;
  erSignert: boolean;
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"klageVurderingResultatNFP",value:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  godkjentAvMedunderskriver?: boolean;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageVurdertAv: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"klageVurderingResultatNK",value:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  godkjentAvMedunderskriver?: boolean;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageVurdertAv: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}}]}},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: DokumentMalType;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"union",raw:`| 'FRITEK'
| 'FRIHTM'
| 'INNVES'
| 'AVSLES'
| 'INVFOR'
| 'AVSFOR'
| 'OPPFOR'
| 'ANUFOR'
| 'INVSVP'
| 'OPPSVP'
| 'AVSSVP'
| 'INFOAF'
| 'INNOPP'
| 'VARREV'
| 'IOHENL'
| 'INNSYN'
| 'IKKESO'
| 'INGEND'
| 'FORSAK'
| 'FORMED'
| 'FORMEF'
| 'FORTID'
| 'KGEAVV'
| 'KGEOMG'
| 'KGEOVE'
| 'ELYSIM'
| 'ENDUTB'
| 'INFOPU'
| 'FORPUS'
| 'KLAGAV'
| 'KAVVIS'
| 'KLAGNY'
| 'KHJEMS'
| 'VEDMED'
| 'KOMGJO'
| 'KLAGOV'
| 'KOVKLA'
| 'KLAGVE'
| 'KSTADF'
| 'VEDOGA'
| 'ANKEBO'
| 'ANKOMG'
| 'ANKOPP'
| 'KGESTA'
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TransformedValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: KlageVurderingOmgjørType;
  klageHjemmel?: KlageHjemmel;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: KlageVurderingType;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const{action:un}=__STORYBOOK_MODULE_ACTIONS__,ko={title:"prosess/klage/prosess-klagevurdering",component:Xa,decorators:[vt,gt],args:{saveKlage:un("button-click"),previewCallback:un("button-click")},render:e=>h.jsx(Xa,{...e})},Ta={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:"MEDHOLD_I_KLAGE",klageMedholdArsak:"ULIK_VURDERING",klageVurderingOmgjoer:"GUNST_MEDHOLD_I_KLAGE",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Sa={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:"STADFESTE_YTELSESVEDTAK",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},ka={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:"HJEMSENDE_UTEN_Å_OPPHEVE",klageMedholdArsak:"ULIK_VURDERING",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Ka={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:"OPPHEVE_YTELSESVEDTAK",klageMedholdArsak:"ULIK_VURDERING",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Aa={args:{aksjonspunkterForPanel:[{definisjon:oa.MANUELL_VURDERING_AV_KLAGE_NFP}],klageVurdering:{klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}};Ta.parameters={...Ta.parameters,docs:{...Ta.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: 'MEDHOLD_I_KLAGE',
        klageMedholdArsak: 'ULIK_VURDERING',
        klageVurderingOmgjoer: 'GUNST_MEDHOLD_I_KLAGE',
        fritekstTilBrev: 'test',
        begrunnelse: 'Dette er en begrunnelse'
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET']
      },
      aktuelleHjemler: ['14-17']
    } as KlageVurdering
  }
}`,...Ta.parameters?.docs?.source}}};Sa.parameters={...Sa.parameters,docs:{...Sa.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: 'STADFESTE_YTELSESVEDTAK',
        fritekstTilBrev: 'test',
        begrunnelse: 'Dette er en begrunnelse'
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET']
      },
      aktuelleHjemler: ['14-17']
    } as KlageVurdering
  }
}`,...Sa.parameters?.docs?.source}}};ka.parameters={...ka.parameters,docs:{...ka.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: 'HJEMSENDE_UTEN_Å_OPPHEVE',
        klageMedholdArsak: 'ULIK_VURDERING',
        fritekstTilBrev: 'test',
        begrunnelse: 'Dette er en begrunnelse'
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET']
      },
      aktuelleHjemler: ['14-17']
    } as KlageVurdering
  }
}`,...ka.parameters?.docs?.source}}};Ka.parameters={...Ka.parameters,docs:{...Ka.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: 'OPPHEVE_YTELSESVEDTAK',
        klageMedholdArsak: 'ULIK_VURDERING',
        fritekstTilBrev: 'test',
        begrunnelse: 'Dette er en begrunnelse'
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET']
      },
      aktuelleHjemler: ['14-17']
    } as KlageVurdering
  }
}`,...Ka.parameters?.docs?.source}}};Aa.parameters={...Aa.parameters,docs:{...Aa.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP
    }] as Aksjonspunkt[],
    klageVurdering: {
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET']
      },
      aktuelleHjemler: ['14-17']
    } as KlageVurdering
  }
}`,...Aa.parameters?.docs?.source}}};const Ko=["MedholdIKlageNk","StadfestKlageNk","HjemsendtIKlageNk","OpphevIKlageNk","KlagevurderingMedAksjonspunktNfp"];export{ka as HjemsendtIKlageNk,Aa as KlagevurderingMedAksjonspunktNfp,Ta as MedholdIKlageNk,Ka as OpphevIKlageNk,Sa as StadfestKlageNk,Ko as __namedExportsOrder,ko as default};
