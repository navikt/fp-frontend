import{g as dr,r as b,u as He,_ as hn,s as yn,c as Ce,a as $,R as u,b as Za,d as tt,e as cr,f as xa,S as mr,h as be,H as lt,j as h,N as vr,i as it,k as st,o as ot,l as gr,m as ut,x as dt,t as ra,n as Qa,p as ct,P as mt,w as vt,q as gt}from"./iframe-DiAR8R6u.js";import{r as ft}from"./index-BxAddkFN.js";import"./preload-helper-PPVm8Dsz.js";var fr=ft();const Et=dr(fr);function _t(e,r){var n=e.values,a=hn(e,["values"]),t=r.values,l=hn(r,["values"]);return yn(t,n)&&yn(a,l)}function Er(e){var r=He(),n=r.formatMessage,a=r.textComponent,t=a===void 0?b.Fragment:a,l=e.id,i=e.description,s=e.defaultMessage,d=e.values,v=e.children,c=e.tagName,f=c===void 0?t:c,E=e.ignoreTag,A={id:l,description:i,defaultMessage:s},y=n(A,d,{ignoreTag:E});return typeof v=="function"?v(Array.isArray(y)?y:[y]):f?b.createElement(f,null,y):b.createElement(b.Fragment,null,y)}Er.displayName="FormattedMessage";var Y=b.memo(Er,_t);Y.displayName="MemoizedFormattedMessage";var oa=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.AVKLAR_ADOPSJONSDOKUMENTAJON="5004",e.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET="5007",e.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKÅRET="5011",e.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD="5014",e.FORESLÅ_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SØKERS_OPPLYSNINGSPLIKT_MANU="5017",e.VURDER_OMSORGSOVERTAKELSEVILKÅRET="5018",e.UTGÅTT_5019="5019",e.UTGÅTT_5020="5020",e.UTGÅTT_5021="5021",e.UTGÅTT_5023="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.UTGÅTT_5025="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLÅ_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE="5031",e.VURDERE_ANNEN_YTELSE_FØR_VEDTAK="5033",e.VURDERE_DOKUMENT_FØR_VEDTAK="5034",e.VURDERE_INNTEKTSMELDING_FØR_VEDTAK="5003",e.MANUELL_VURDERING_AV_KLAGE_NFP="5035",e.UTGÅTT_5036="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSØKNAD_FORELDREPENGER="5040",e.VURDER_PERMISJON_UTEN_SLUTTDATO="5041",e.MANUELL_VURDERING_AV_SØKNADSFRIST="5043",e.UTGÅTT_5048="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.UTGÅTT_5053="5053",e.AVKLAR_VILKÅR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.UTGÅTT_5056="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.AVKLAR_LØPENDE_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET="5063",e.FAKTA_UTTAK_INGEN_PERIODER="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG="5066",e.UTGÅTT_5067="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.UTGÅTT_5069="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.FASTSETT_UTTAK_STORTINGSREPRESENTANT="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.UTGÅTT_5075="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.UTGÅTT_5078="5078",e.UTGÅTT_5079="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.UTGÅTT_5083="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT="5086",e.SØKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYRING_AV_FØDSELSVILKÅRET="6003",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET="6004",e.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET="6005",e.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="6017",e.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYRING_AV_FØDSELSVILKÅRET_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKÅRET="6011",e.OVERSTYRING_AV_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKÅRET="5089",e.UTGÅTT_6012="6012",e.OVERSTYRING_AV_AVKLART_STARTDATO="6045",e.OVERSTYRING_FAKTA_UTTAK="6065",e.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FØDSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SØKNAD="7003",e.UTGÅTT_7019="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.VURDER_SVP_TILRETTELEGGING="5091",e.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE="5039",e.UTGÅTT_5042="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET="5049",e.UTGÅTT_5050="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.UTGÅTT_5080="5080",e.UTGÅTT_5090="5090",e))(oa||{});const Va=(e,r)=>{if(e==null)throw new Error("Data er ikke oppgitt");return e},qe=e=>Ce({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var ht=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const en=b.forwardRef((e,r)=>{var{className:n,size:a="medium",as:t="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:v,textColor:c}=e,f=ht(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=$();return u.createElement(t,Object.assign({},f,{ref:r,className:E(n,"navds-body-long",`navds-body-long--${a}`,qe({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:v,textColor:c}))}))});var yt=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const X=b.forwardRef((e,r)=>{var{className:n,size:a="medium",as:t="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:v,textColor:c}=e,f=yt(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=$();return u.createElement(t,Object.assign({},f,{ref:r,className:E(n,"navds-body-short",`navds-body-short--${a}`,qe({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:v,textColor:c}))}))});var bt=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const pt=b.forwardRef((e,r)=>{var{className:n,size:a="medium",spacing:t,uppercase:l,as:i="p",truncate:s,weight:d="regular",align:v,visuallyHidden:c,textColor:f}=e,E=bt(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:A}=$();return u.createElement(i,Object.assign({},E,{ref:r,className:A(n,"navds-detail",qe({spacing:t,truncate:s,weight:d,align:v,visuallyHidden:c,textColor:f,uppercase:l}),{"navds-detail--small":a==="small"})}))});var Ot=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Ma=b.forwardRef((e,r)=>{var{children:n,className:a,size:t,spacing:l,as:i="p",showIcon:s=!1}=e,d=Ot(e,["children","className","size","spacing","as","showIcon"]);const{cn:v}=$();return u.createElement(i,Object.assign({},d,{ref:r,className:v("navds-error-message","navds-label",a,qe({spacing:l}),{"navds-label--small":t==="small","navds-error-message--show-icon":s})}),s&&u.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),n)});var Tt=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const an=b.forwardRef((e,r)=>{var{level:n="1",size:a,className:t,as:l,spacing:i,align:s,visuallyHidden:d,textColor:v}=e,c=Tt(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:f}=$(),E=l??`h${n}`;return u.createElement(E,Object.assign({},c,{ref:r,className:f(t,"navds-heading",`navds-heading--${a}`,qe({spacing:i,align:s,visuallyHidden:d,textColor:v}))}))});var St=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};b.forwardRef((e,r)=>{var{className:n,spacing:a,as:t="p"}=e,l=St(e,["className","spacing","as"]);const{cn:i}=$();return u.createElement(t,Object.assign({},l,{ref:r,className:i(n,"navds-ingress",{"navds-typo--spacing":!!a})}))});var kt=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const fe=b.forwardRef((e,r)=>{var{className:n,size:a="medium",as:t="label",spacing:l,visuallyHidden:i,textColor:s}=e,d=kt(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:v}=$();return u.createElement(t,Object.assign({},d,{ref:r,className:v(n,"navds-label",qe({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":a==="small"})}))});function _r(e,r=166,n=!1){let a;function t(...l){const i=()=>{a=void 0,e.apply(this,l)};!a&&n&&i(),clearTimeout(a),a=setTimeout(i,r)}return t.clear=()=>{clearTimeout(a)},t}function Ee(e,r){const n=Object.entries(e).filter(([a])=>!r.includes(a));return Object.fromEntries(n)}const bn=globalThis?.document?b.useLayoutEffect:()=>{};let pn=0;function Kt(e){const[r,n]=b.useState(e),a=e||r;return b.useEffect(()=>{r==null&&(pn+=1,n(`aksel-id-${pn}`))},[r]),a}const On=u.useId;function Le(e){var r;return On!==void 0?On().replace(/(:)/g,""):(r=Kt(e))!==null&&r!==void 0?r:""}function Tn(e,r=[]){const n=b.useRef(e);return b.useEffect(()=>{n.current=e}),b.useCallback(((...a)=>{var t;return(t=n.current)===null||t===void 0?void 0:t.call(n,...a)}),r)}function At({value:e,defaultValue:r,onChange:n}){const a=Tn(n),[t,l]=b.useState(r),i=e!==void 0,s=i?e:t,d=Tn(v=>{const f=typeof v=="function"?v(s):v;i||l(f),a(f)},[i,a,s]);return[s,d]}let Sn=0;function Vt(e){const[r,n]=b.useState(e),a=e||r;return b.useEffect(()=>{r==null&&(Sn+=1,n(`aksel-icon-${Sn}`))},[r]),a}const kn=u.useId;function ke(e){var r;return kn!==void 0?kn().replace(/(:)/g,""):(r=Vt(e))!==null&&r!==void 0?r:""}var Nt=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Rt=b.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=Nt(e,["title","titleId"]);let l=ke();return l=n?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},t),n?u.createElement("title",{id:l},n):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Lt=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Dt=b.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=Lt(e,["title","titleId"]);let l=ke();return l=n?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},t),n?u.createElement("title",{id:l},n):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var It=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const hr=b.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=It(e,["title","titleId"]);let l=ke();return l=n?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},t),n?u.createElement("title",{id:l},n):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var wt=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Pt=b.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=wt(e,["title","titleId"]);let l=ke();return l=n?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},t),n?u.createElement("title",{id:l},n):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var xt=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Mt=b.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=xt(e,["title","titleId"]);let l=ke();return l=n?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},t),n?u.createElement("title",{id:l},n):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Ft=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const yr=b.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=Ft(e,["title","titleId"]);let l=ke();return l=n?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},t),n?u.createElement("title",{id:l},n):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Gt=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const jt=b.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=Gt(e,["title","titleId"]);let l=ke();return l=n?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},t),n?u.createElement("title",{id:l},n):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Ut=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const br=b.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=Ut(e,["title","titleId"]);let l=ke();return l=n?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},t),n?u.createElement("title",{id:l},n):null,u.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Bt=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Ht=b.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=Bt(e,["title","titleId"]);let l=ke();return l=n?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},t),n?u.createElement("title",{id:l},n):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function je(e,r,{checkForDefaultPrevented:n=!0}={}){return function(t){if(e?.(t),n===!1||!t.defaultPrevented)return r?.(t)}}const[Ct,pr]=Za({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Ca(e){return(r={})=>{const n=r.width?String(r.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}function Xe(e){return(r,n)=>{const a=n?.context?String(n.context):"standalone";let t;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=n?.width?String(n.width):i;t=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=n?.width?String(n.width):e.defaultWidth;t=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(r):r;return t[l]}}function Ze(e){return(r,n={})=>{const a=n.width,t=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=r.match(t);if(!l)return null;const i=l[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?Yt(s,f=>f.test(i)):qt(s,f=>f.test(i));let v;v=e.valueCallback?e.valueCallback(d):d,v=n.valueCallback?n.valueCallback(v):v;const c=r.slice(i.length);return{value:v,rest:c}}}function qt(e,r){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&r(e[n]))return n}function Yt(e,r){for(let n=0;n<e.length;n++)if(r(e[n]))return n}function $t(e){return(r,n={})=>{const a=r.match(e.matchPattern);if(!a)return null;const t=a[0],l=r.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=n.valueCallback?n.valueCallback(i):i;const s=r.slice(t.length);return{value:i,rest:s}}}const zt={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Wt=(e,r,n)=>{let a;const t=zt[e];return typeof t=="string"?a=t:r===1?a=t.one:a=t.other.replace("{{count}}",String(r)),n?.addSuffix?n.comparison&&n.comparison>0?"om "+a:a+" siden":a},Jt={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Xt={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Zt={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Qt={date:Ca({formats:Jt,defaultWidth:"full"}),time:Ca({formats:Xt,defaultWidth:"full"}),dateTime:Ca({formats:Zt,defaultWidth:"full"})},el={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},al=(e,r,n,a)=>el[e],nl={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},rl={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},tl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ll={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},il={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},sl=(e,r)=>Number(e)+".",ol={ordinalNumber:sl,era:Xe({values:nl,defaultWidth:"wide"}),quarter:Xe({values:rl,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xe({values:tl,defaultWidth:"wide"}),day:Xe({values:ll,defaultWidth:"wide"}),dayPeriod:Xe({values:il,defaultWidth:"wide"})},ul=/^(\d+)\.?/i,dl=/\d+/i,cl={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ml={any:[/^f/i,/^e/i]},vl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},gl={any:[/1/i,/2/i,/3/i,/4/i]},fl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},El={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},_l={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},hl={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},yl={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},bl={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},pl={ordinalNumber:$t({matchPattern:ul,parsePattern:dl,valueCallback:e=>parseInt(e,10)}),era:Ze({matchPatterns:cl,defaultMatchWidth:"wide",parsePatterns:ml,defaultParseWidth:"any"}),quarter:Ze({matchPatterns:vl,defaultMatchWidth:"wide",parsePatterns:gl,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ze({matchPatterns:fl,defaultMatchWidth:"wide",parsePatterns:El,defaultParseWidth:"any"}),day:Ze({matchPatterns:_l,defaultMatchWidth:"wide",parsePatterns:hl,defaultParseWidth:"any"}),dayPeriod:Ze({matchPatterns:yl,defaultMatchWidth:"any",parsePatterns:bl,defaultParseWidth:"any"})},Ol={code:"nb",formatDistance:Wt,formatLong:Qt,formatRelative:al,localize:ol,match:pl,options:{weekStartsOn:1,firstWeekContainsDate:4}},Tl={global:{dateLocale:Ol,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Sl=b.createContext({locale:Tl}),Or=()=>b.useContext(Sl);function kl(){return typeof window<"u"}function Kl(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function Al(e){return kl()?e instanceof Element||e instanceof Kl(e).Element:!1}const Kn=/(\w+)/g;function Vl(e,r){const n=Array.isArray(e)?e:Nl(e);for(const a of r){if(!a)continue;let t=a;for(let l=0;l<n.length;l++){const i=t[n[l]];i!==void 0&&(t=i)}if(typeof t=="string")return t}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Nl(e){const r=[];let n=Kn.exec(e);for(;n;){const[,a,t]=n;r.push(a||t),n=Kn.exec(e)}return r}const Rl=/{[^}]*}/g;function ua(e,...r){const n=Or(),a=n.translations||[],t=[...r,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],n.locale[e]];return(i,s)=>{const d=Vl(i,t);return s?d.replace(Rl,v=>{const c=v.substring(1,v.length-1);if(s[c]===void 0){const f=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${c}'. The following replacements were passed: '${f}'`)}return s[c]}):d}}var Ll=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Dl=b.forwardRef((e,r)=>{var{className:n,size:a="medium",title:t,transparent:l=!1,variant:i="neutral",id:s,"data-color":d}=e,v=Ll(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:c}=$(),f=Le(),E=ua("Loader");return u.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${f}`,ref:r,className:c("navds-loader",n,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??Il(i)},Ee(v,["children"]),{"data-variant":i}),u.createElement("title",{id:s??`loader-${f}`},t||E("title")),u.createElement("circle",{className:c("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),u.createElement("circle",{className:c("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Il(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var wl=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Ue=b.forwardRef((e,r)=>{var{as:n="button",variant:a="primary",className:t,children:l,size:i="medium",loading:s=!1,disabled:d,icon:v,iconPosition:c="left",onKeyUp:f,"data-color":E}=e,A=wl(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:y}=$(),R=d||s?Ee(A,["href"]):A,_=T=>{T.key===" "&&!d&&!s&&T.currentTarget.click()};return u.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},{"data-color":E??Pl(a),"data-variant":xl(a)},R,{ref:r,onKeyUp:je(f,_),className:y(t,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!v&&!l,"navds-button--disabled":d??s}),disabled:d??s?!0:void 0}),v&&c==="left"&&u.createElement("span",{className:y("navds-button__icon")},v),s&&u.createElement(Dl,{size:i}),l&&u.createElement(fe,{as:"span",size:i==="medium"?"medium":"small"},l),v&&c==="right"&&u.createElement("span",{className:y("navds-button__icon")},v))});function Pl(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function xl(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var Ml=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Fl={error:Ht,warning:Pt,info:Mt,success:Dt},Gl=b.forwardRef((e,r)=>{var{children:n,className:a,variant:t,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:d=!1,closeButton:v=!1,onClose:c}=e,f=Ml(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:E}=$(),A=ua("Alert"),y=Fl[t];return u.createElement("div",Object.assign({},f,{"data-color":jl(t),"data-variant":t,ref:r,className:E(a,"navds-alert",`navds-alert--${t}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":d,"navds-alert--close-button":v})}),u.createElement(y,{title:A(t),className:E("navds-alert__icon")}),u.createElement(en,{as:"div",size:l,className:E("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},n),v&&!d&&u.createElement("div",{className:E("navds-alert__button-wrapper")},u.createElement(Ue,{className:E("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:c,type:"button",icon:u.createElement(br,{title:["error","warning"].includes(t)?A("closeAlert"):A("closeMessage")})})))});function jl(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}var Na=typeof document<"u"?b.useLayoutEffect:b.useEffect;const Ul={...tt};let An=!1,Bl=0;const Vn=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Bl++;function Hl(){const[e,r]=b.useState(()=>An?Vn():void 0);return Na(()=>{e==null&&r(Vn())},[]),b.useEffect(()=>{An=!0},[]),e}const Cl=Ul.useId,ql=Cl||Hl;function Yl(e){return"data-floating-ui-"+e}const $l=b.createContext(null),Nn=Yl("portal");function zl(e){e===void 0&&(e={});const{id:r,root:n}=e,a=ql(),t=Wl(),[l,i]=b.useState(null),s=b.useRef(null);return Na(()=>()=>{l?.remove(),queueMicrotask(()=>{s.current=null})},[l]),Na(()=>{if(!a||s.current)return;const d=r?document.getElementById(r):null;if(!d)return;const v=document.createElement("div");v.id=a,v.setAttribute(Nn,""),d.appendChild(v),s.current=v,i(v)},[r,a]),Na(()=>{if(n===null||!a||s.current)return;let d=n||t?.portalNode;d&&!Al(d)&&(d=d.current),d=d||document.body;let v=null;r&&(v=document.createElement("div"),v.id=r,d.appendChild(v));const c=document.createElement("div");c.id=a,c.setAttribute(Nn,""),d=v||d,d.appendChild(c),s.current=c,i(c)},[r,n,a,t]),l}const Wl=()=>b.useContext($l),nn=()=>{const{cn:e}=$();return u.createElement(yr,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Tr=()=>{const{cn:e}=$();return u.createElement(yr,{title:ua("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var Jl=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Xl=b.forwardRef((e,r)=>{var{className:n,header:a,children:t,open:l,defaultOpen:i=!1,onClick:s,size:d="medium",onOpenChange:v}=e,c=Jl(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:f}=$(),[E,A]=At({defaultValue:i,value:l,onChange:v}),y=d==="small"?"small":"medium";return u.createElement("div",{className:f("navds-read-more",`navds-read-more--${d}`,n,{"navds-read-more--open":E}),"data-volume":"low"},u.createElement("button",Object.assign({},c,{ref:r,type:"button",className:f("navds-read-more__button","navds-body-short",{"navds-body-short--small":d==="small"}),onClick:je(s,()=>A(R=>!R)),"aria-expanded":E,"data-state":E?"open":"closed"}),u.createElement(hr,{className:f("navds-read-more__expand-icon"),"aria-hidden":!0}),u.createElement("span",null,a)),u.createElement(en,{as:"div",tabIndex:0,className:f("navds-read-more__content",{"navds-read-more__content--closed":!E}),size:y,"data-state":E?"open":"closed"},t))}),Ra=b.createContext(null),da=(e,r)=>{var n,a,t;const{size:l,error:i,errorId:s}=e,d=b.useContext(Ra),v=Le(),c=(n=e.id)!==null&&n!==void 0?n:`${r}-${v}`,f=s??`${r}-error-${v}`,E=`${r}-description-${v}`,A=d?.disabled||e.disabled,y=(d?.readOnly||e.readOnly)&&!A||void 0,R=!A&&!y&&!!(i||d?.error),_=!A&&!y&&!!i&&typeof i!="boolean",T=Object.assign({},R?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:_,hasError:R,errorId:f,inputDescriptionId:E,size:(a=l??d?.size)!==null&&a!==void 0?a:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:c},T),{"aria-describedby":Ce(e["aria-describedby"],{[E]:e.description&&!La(e.description),[f]:_,[(t=d?.errorId)!==null&&t!==void 0?t:""]:R&&d?.error})||void 0,disabled:A})}};function La(e,r=!0){if(u.isValidElement(e)){if(e.type===Xl)return!0;if(e.props.children&&r)return La(e.props.children,!1)}else if(Array.isArray(e))return e.some(n=>La(n,r));return!1}const[To,Zl]=Za();var Ql=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const[So,Sr]=Za({errorMessage:"useDateInputContext must be used with DateInputContext"}),kr=b.forwardRef((e,r)=>{const{className:n,hideLabel:a=!1,label:t,description:l,variant:i="datepicker",setAnchorRef:s}=e,d=Ql(e,["className","hideLabel","label","description","variant","setAnchorRef"]),v=b.useRef(null),c=Zl().translate,{cn:f}=$(),E=i==="datepicker",A={prefix:E?"datepicker-input":"monthpicker-input",iconTitle:{open:E?"openDatePicker":"openMonthPicker",close:E?"closeDatePicker":"closeMonthPicker"}},y=Sr(),{inputProps:R,size:_="medium",inputDescriptionId:T,errorId:S,showErrorMsg:O,hasError:D,readOnly:K}=da(e,A.prefix);return u.createElement("div",{className:f(n,"navds-form-field",`navds-form-field--${_}`,"navds-date__field",{"navds-text-field--error":D,"navds-date__field--error":D,"navds-form-field--disabled":!!R.disabled,"navds-text-field--disabled":!!R.disabled,"navds-form-field--readonly":K,"navds-text-field--readonly":K,"navds-date__field--readonly":K})},u.createElement(fe,{htmlFor:R.id,size:_,className:f("navds-form-field__label",{"navds-sr-only":a})},K&&u.createElement(nn,null),t),!!l&&u.createElement(X,{as:"div",className:f("navds-form-field__description",{"navds-sr-only":a}),id:T,size:_},l),u.createElement("div",{className:f("navds-date__field-wrapper")},u.createElement("input",Object.assign({ref:r},Ee(d,["error","errorId","size"]),R,{autoComplete:"off","aria-controls":y?.open?y.ariaId:void 0,readOnly:K,className:f("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${_}`),size:E?11:14})),u.createElement("button",{disabled:R.disabled||K,tabIndex:K||y?.open?-1:0,onClick:()=>{y?.onOpen(),s?.(v.current)},type:"button",className:f("navds-date__field-button"),ref:v},u.createElement(Rt,{title:c(A.iconTitle[y?.open?"close":"open"])}))),u.createElement("div",{className:f("navds-form-field__error"),id:S,"aria-relevant":"additions removals","aria-live":"polite"},O&&u.createElement(Ma,{size:_,showIcon:!0},e.error)))});b.forwardRef((e,r)=>u.createElement(kr,Object.assign({},e,{ref:r})));b.forwardRef((e,r)=>u.createElement(kr,Object.assign({},e,{variant:"monthpicker",ref:r})));var ei=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const ai=b.forwardRef((e,r)=>{var{className:n}=e,a=ei(e,["className"]);const{cn:t}=$();return u.createElement("div",Object.assign({},a,{ref:r,className:t("navds-modal__body",n)}))});var ni=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const ri=b.forwardRef((e,r)=>{var{className:n}=e,a=ni(e,["className"]);const{cn:t}=$();return u.createElement("div",Object.assign({},a,{ref:r,className:t("navds-modal__footer",n)}))});var ti=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Kr=b.forwardRef((e,r)=>{var{children:n,className:a,closeButton:t=!0}=e,l=ti(e,["children","className","closeButton"]);const{cn:i}=$(),s=pr(),d=ua("global");return u.createElement("div",Object.assign({},l,{ref:r,className:i("navds-modal__header",a)}),s.closeHandler&&t&&u.createElement(Ue,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:v=>{["Enter"," "].includes(v.key)&&v.repeat&&v.preventDefault()},onClick:s.closeHandler,icon:u.createElement(br,{title:d("close")})}),n)}),Rn=({clientX:e,clientY:r},{left:n,top:a,right:t,bottom:l})=>!(e<n||r<a||e>t||r>l);function li(e,r,n){if(!(r&&r.closeButton===!1))return n?()=>{var a;return n()!==!1&&((a=e.current)===null||a===void 0?void 0:a.close())}:()=>{var a;return(a=e.current)===null||a===void 0?void 0:a.close()}}const ha="navds-modal__document-body",ya="aksel-modal__document-body";function ii(e,r,n){u.useEffect(()=>{if(n||!e.current||!r)return;e.current.open&&document.body.classList.add(ya,ha);const a=new MutationObserver(()=>{var t;!((t=e.current)===null||t===void 0)&&t.open?document.body.classList.add(ya,ha):document.body.classList.remove(ya,ha)});return a.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{a.disconnect(),document.body.classList.remove(ya,ha)}},[e,r,n])}const Ge=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Ar(e,r){var n="on"+r.type.toLowerCase();return typeof e[n]=="function"&&e[n](r),e.dispatchEvent(r)}function ta(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Vr(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function si(e,r){for(var n=0;n<e.length;++n)if(e[n]===r)return!0;return!1}function qa(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Nr(e){var r=["button","input","keygen","select","textarea"],n=r.map(function(i){return i+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var a=e.querySelector(n.join(", "));if(!a&&"attachShadow"in Element.prototype)for(var t=e.querySelectorAll("*"),l=0;l<t.length&&!(t[l].tagName&&t[l].shadowRoot&&(a=Nr(t[l].shadowRoot),a));l++);return a}function Ln(e){return e.isConnected||document.body.contains(e)}function Rr(e){if(e.submitter)return e.submitter;var r=e.target;if(!(r instanceof HTMLFormElement))return null;var n=H.formSubmitter;if(!n){var a=e.target,t="getRootNode"in a&&a.getRootNode()||document;n=t.activeElement}return!n||n.form!==r?null:n}function oi(e){if(!e.defaultPrevented){var r=e.target,n=H.imagemapUseValue,a=Rr(e);n===null&&a&&(n=a.value);var t=ta(r);if(t){var l=a&&a.getAttribute("formmethod")||r.getAttribute("method");l==="dialog"&&(e.preventDefault(),n!=null?t.close(n):t.close())}}}function Lr(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",oi,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var r=new MutationObserver(this.maybeHideModal.bind(this));r.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,a=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),t,l=function(i){if(i.target===e){var s="DOMNodeRemoved";n|=i.type.substr(0,s.length)===s,window.clearTimeout(t),t=window.setTimeout(a,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,l)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Lr.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Ln(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),H.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var r=document.createElement("div");this.dialog_.insertBefore(r,this.dialog_.firstChild),r.tabIndex=-1,r.focus(),this.dialog_.removeChild(r)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Nr(this.dialog_)),Vr(document.activeElement),e&&e.focus()},updateZIndex:function(e,r){if(e<r)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=r},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Ln(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!H.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,H.needsCentering(this.dialog_)?(H.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var r=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Ar(this.dialog_,r)}};var H={};H.reposition=function(e){var r=document.body.scrollTop||document.documentElement.scrollTop,n=r+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(r,n)+"px"};H.isInlinePositionSetByStylesheet=function(e){for(var r=0;r<document.styleSheets.length;++r){var n=document.styleSheets[r],a=null;try{a=n.cssRules}catch{}if(a)for(var t=0;t<a.length;++t){var l=a[t],i=null;try{i=document.querySelectorAll(l.selectorText)}catch{}if(!(!i||!si(i,e))){var s=l.style.getPropertyValue("top"),d=l.style.getPropertyValue("bottom");if(s&&s!=="auto"||d&&d!=="auto")return!0}}}return!1};H.needsCentering=function(e){var r=window.getComputedStyle(e);return r.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!H.isInlinePositionSetByStylesheet(e)};H.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Lr(e)};H.registerDialog=function(e){e.showModal||H.forceRegisterDialog(e)};H.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(r){this.forwardTab_=void 0,r.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(r){var n=[];r.forEach(function(a){for(var t=0,l;l=a.removedNodes[t];++t)l instanceof Element&&(l.localName==="dialog"&&n.push(l),n=n.concat(l.querySelectorAll("dialog")))}),n.length&&e(n)}))};H.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};H.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};H.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,r=0,n;n=this.pendingDialogStack[r];++r)n.updateZIndex(--e,--e),r===0&&(this.overlay.style.zIndex=--e);var a=this.pendingDialogStack[0];if(a){var t=a.dialog.parentNode||document.body;t.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};H.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=ta(e);){for(var r=0,n;n=this.pendingDialogStack[r];++r)if(n.dialog===e)return r===0;e=e.parentElement}return!1};H.DialogManager.prototype.handleFocus_=function(e){var r=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(r)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Vr(r),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],a=n.dialog,t=a.compareDocumentPosition(r);return t&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():r!==document.documentElement&&document.documentElement.focus()),!1}};H.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var r=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&Ar(n.dialog,r)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};H.DialogManager.prototype.checkDOM_=function(e){var r=this.pendingDialogStack.slice();r.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};H.DialogManager.prototype.pushDialog=function(e){var r=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=r?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};H.DialogManager.prototype.removeDialog=function(e){var r=this.pendingDialogStack.indexOf(e);r!==-1&&(this.pendingDialogStack.splice(r,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Ge&&(H.dm=new H.DialogManager,H.formSubmitter=null,H.imagemapUseValue=null);if(Ge){var Dn=document.createElement("form");if(Dn.setAttribute("method","dialog"),Dn.method!=="dialog"){var xe=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(xe){var ui=xe.get;xe.get=function(){return qa(this)?"dialog":ui.call(this)};var di=xe.set;xe.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):di.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",xe)}}document.addEventListener("click",function(e){if(H.formSubmitter=null,H.imagemapUseValue=null,!e.defaultPrevented){var r=e.target;if("composedPath"in e){var n=e.composedPath();r=n.shift()||r}if(!(!r||!qa(r.form))){var a=r.type==="submit"&&["button","input"].indexOf(r.localName)>-1;if(!a){if(!(r.localName==="input"&&r.type==="image"))return;H.imagemapUseValue=e.offsetX+","+e.offsetY}var t=ta(r);t&&(H.formSubmitter=r)}}},!1),document.addEventListener("submit",function(e){var r=e.target,n=ta(r);if(!n){var a=Rr(e),t=a&&a.getAttribute("formmethod")||r.getAttribute("method");t==="dialog"&&e.preventDefault()}});var ci=HTMLFormElement.prototype.submit,mi=function(){if(!qa(this))return ci.call(this);var e=ta(this);e&&e.close()};HTMLFormElement.prototype.submit=mi}var vi=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const sa=b.forwardRef((e,r)=>{var n,a,{header:t,children:l,open:i,onBeforeClose:s,onCancel:d,closeOnBackdropClick:v,width:c,placement:f,portal:E,className:A,"aria-labelledby":y,style:R,onClick:_,onMouseDown:T}=e,S=vi(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:O}=$(),D=b.useRef(O("navds-modal--polyfilled")),K=b.useRef(null),C=cr(K,r),M=Le(),B=(n=Or())===null||n===void 0?void 0:n.rootElement,P=zl({root:B}),G=Sr(!1),F=pr(!1)!==void 0;F&&!G&&console.error("Modals should not be nested"),b.useEffect(()=>{Ge&&K.current&&P&&(H.registerDialog(K.current),K.current.classList.add(D.current)),K.current&&P&&(K.current.autofocus=!0)},[P]),b.useEffect(()=>{K.current&&P&&i!==void 0&&(i&&!K.current.open?K.current.showModal():!i&&K.current.open&&K.current.close())},[P,i]),ii(K,P,F);const I=typeof c=="string"&&["small","medium"].includes(c),V=O("navds-modal",A,{[D.current]:Ge,"navds-modal--autowidth":!c,[`navds-modal--${c}`]:I,"navds-modal--top":f==="top"&&!Ge}),x=Object.assign(Object.assign({},R),I?{}:{width:c}),j=b.useRef({clientX:0,clientY:0}),U=me=>{j.current=me},Z=v&&!Ge,le=me=>{if(me.target!==K.current)return;const pe=K.current.getBoundingClientRect();Rn(j.current,pe)||Rn(me,pe)||s!==void 0&&s()===!1||K.current.close()},ie=me=>{s&&s()===!1&&me.preventDefault()},_e=!y&&!S["aria-label"]&&t?M:y,ne=u.createElement("dialog",Object.assign({},S,{ref:C,className:V,style:x,onCancel:je(d,ie),onClick:Z?je(_,le):_,onMouseDown:Z?je(T,U):T,"aria-labelledby":_e}),u.createElement(Ct,{closeHandler:li(K,t,s),ref:K},t&&u.createElement(Kr,null,t.label&&u.createElement(pt,{className:O("navds-modal__label")},t.label),u.createElement(an,{size:(a=t.size)!==null&&a!==void 0?a:"medium",level:"1",id:M},t.icon&&u.createElement("span",{className:O("navds-modal__header-icon")},t.icon),t.heading)),l));return E?P?fr.createPortal(ne,P):null:ne});sa.Header=Kr;sa.Body=ai;sa.Footer=ri;var gi=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const fi=b.forwardRef((e,r)=>{const{inputProps:n,errorId:a,showErrorMsg:t,hasError:l,size:i,inputDescriptionId:s,readOnly:d}=da(e,"select"),{children:v,label:c,className:f,description:E,htmlSize:A,hideLabel:y=!1,style:R}=e,_=gi(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:T}=$(),S={onMouseDown:O=>{d&&(O.preventDefault(),O.target.focus())},onKeyDown:O=>{d&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(O.key)&&O.preventDefault()}};return u.createElement("div",{className:T(f,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":d,"navds-select--error":l,"navds-select--readonly":d})},u.createElement(fe,{htmlFor:n.id,size:i,className:T("navds-form-field__label",{"navds-sr-only":y})},d&&u.createElement(Tr,null),c),!!E&&u.createElement(X,{className:T("navds-form-field__description",{"navds-sr-only":y}),id:s,size:i,as:"div"},E),u.createElement("div",{className:T("navds-select__container"),style:R},u.createElement("select",Object.assign({},Ee(_,["error","errorId","size","readOnly"]),n,S,{ref:r,className:T("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:A}),v),u.createElement(hr,{className:T("navds-select__chevron"),"aria-hidden":!0})),u.createElement("div",{className:T("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},t&&u.createElement(Ma,{size:i,showIcon:!0},e.error)))});function te(e,r,n,a){return a?typeof a=="string"?{[`--__${e}c-${r}-${n}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([t,l])=>[`--__${e}c-${r}-${n}-${t}`,l])):{}}const Ei={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},In=(e,r,n,a,t,l)=>r.split(" ").map((i,s,d)=>{var v;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let c=`var(--${l}-${n}-${i})`;if(a.includes(i))c=i==="px"?"1px":i;else if(i.startsWith("space"))c=`var(--${l}-${i})`;else{const f=`--${l}-spacing-${i}`;c=`var(${(v=Ei[f])!==null&&v!==void 0?v:f})`}return t?i==="0"?"0":`calc(-1 * ${c})`:c}).join(" ");function ge(e,r,n,a,t,l=!1,i=[]){if(!t)return{};if(typeof t=="string")return{[`--__${e}c-${r}-${n}-xs`]:In(n,t,a,i,l,e)};const s={};return Object.entries(t).forEach(([d,v])=>{s[`--__${e}c-${r}-${n}-${d}`]=In(n,v,a,i,l,e)}),s}const _i=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],hi=({children:e,className:r,padding:n,paddingInline:a,paddingBlock:t,margin:l,marginInline:i,marginBlock:s,width:d,minWidth:v,maxWidth:c,height:f,minHeight:E,maxHeight:A,position:y,inset:R,top:_,right:T,left:S,bottom:O,overflow:D,overflowX:K,overflowY:C,flexBasis:M,flexGrow:B,flexShrink:P,gridColumn:G})=>{const F=xa(!1),{cn:I}=$(),V=F?.isDarkside?"ax":"a",x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ge(V,"r","p","spacing",n)),ge(V,"r","pi","spacing",a)),ge(V,"r","pb","spacing",t)),ge(V,"r","m","spacing",l)),ge(V,"r","mi","spacing",i)),ge(V,"r","mb","spacing",s)),te(V,"r","w",d)),te(V,"r","minw",v)),te(V,"r","maxw",c)),te(V,"r","h",f)),te(V,"r","minh",E)),te(V,"r","maxh",A)),te(V,"r","position",y)),ge(V,"r","inset","spacing",R)),ge(V,"r","top","spacing",_)),ge(V,"r","right","spacing",T)),ge(V,"r","bottom","spacing",O)),ge(V,"r","left","spacing",S)),te(V,"r","overflow",D)),te(V,"r","overflowx",K)),te(V,"r","overflowy",C)),te(V,"r","flex-basis",M)),te(V,"r","flex-grow",B)),te(V,"r","flex-shrink",P)),te(V,"r","grid-column",G));return u.createElement(mr,{className:I({className:r,"navds-r-p":n,"navds-r-pi":a,"navds-r-pb":t,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":d,"navds-r-minw":v,"navds-r-maxw":c,"navds-r-h":f,"navds-r-minh":E,"navds-r-maxh":A,"navds-r-position":y,"navds-r-inset":R,"navds-r-top":_,"navds-r-right":T,"navds-r-bottom":O,"navds-r-left":S,"navds-r-overflow":D,"navds-r-overflowx":K,"navds-r-overflowy":C,"navds-r-flex-basis":M,"navds-r-flex-grow":B,"navds-r-flex-shrink":P,"navds-r-grid-column":G}),style:x},e)};var yi=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Dr=b.forwardRef((e,r)=>{var{children:n,className:a,as:t="div",align:l,justify:i,wrap:s=!0,gap:d,style:v,direction:c="row",asChild:f}=e,E=yi(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const A=xa(!1),y=A?.isDarkside?"ax":"a",{cn:R}=$(),_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},v),ge(y,"stack","gap","spacing",d)),te(y,"stack","direction",c)),te(y,"stack","align",l)),te(y,"stack","justify",i)),T=f?mr:t;return u.createElement(hi,Object.assign({},E),u.createElement(T,Object.assign({},Ee(E,_i),{ref:r,style:_,className:R("navds-stack",a,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":d,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":c,"navds-stack-wrap":s})}),n))});var bi=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Be=b.forwardRef((e,r)=>{var{as:n="div"}=e,a=bi(e,["as"]);return u.createElement(Dr,Object.assign({as:n},a,{ref:r,direction:"row"}))});var pi=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const de=b.forwardRef((e,r)=>{var{as:n="div"}=e,a=pi(e,["as"]);return u.createElement(Dr,Object.assign({as:n},a,{ref:r,direction:"column",wrap:!1}))});var Oi=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Ti=b.forwardRef((e,r)=>{var{as:n="a",className:a,underline:t=!0,variant:l,inlineText:i=!1,"data-color":s}=e,d=Oi(e,["as","className","underline","variant","inlineText","data-color"]);const v=xa(!1),{cn:c}=$();let f;return v?.isDarkside?f=l:f=l??"action",u.createElement(n,Object.assign({"data-color":s??Si(f),"data-variant":f},d,{ref:r,className:c("navds-link",a,{[`navds-link--${f}`]:f,"navds-link--remove-underline":!t,"navds-link--inline-text":i})}))});function Si(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var ki=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Ki=b.forwardRef((e,r)=>{var{children:n,className:a,variant:t,size:l="medium",icon:i,"data-color":s}=e,d=ki(e,["children","className","variant","size","icon","data-color"]);const{cn:v}=$(),c=t?.endsWith("-filled")&&"strong",f=t?.endsWith("-moderate")&&"moderate";return u.createElement(X,Object.assign({"data-color":s??Ai(t),"data-variant":c||f||"outline"},d,{ref:r,as:"span",size:l==="medium"?"medium":"small",className:v("navds-tag",a,`navds-tag--${t}`,`navds-tag--${l}`)}),i&&u.createElement("span",{className:v("navds-tag__icon--left")},i),n)});function Ai(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const Vi=(e,r)=>{const n=da(e,"fieldset");return Object.assign(Object.assign({},n),{inputProps:{"aria-labelledby":e["aria-labelledby"]||Ce(r,{[n.inputDescriptionId]:e.description&&!La(e.description)})}})};var Ni=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Ri=b.forwardRef((e,r)=>{var n,a,t;const l=Le(),{inputProps:i,errorId:s,showErrorMsg:d,hasError:v,size:c,readOnly:f,inputDescriptionId:E}=Vi(e,l),{cn:A}=$(),y=b.useContext(Ra),{children:R,className:_,errorPropagation:T=!0,legend:S,description:O,hideLegend:D,nativeReadOnly:K=!0}=e,C=Ni(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return u.createElement(Ra.Provider,{value:{error:T?(n=e.error)!==null&&n!==void 0?n:y?.error:void 0,errorId:Ce({[s]:d,[(a=y?.errorId)!==null&&a!==void 0?a:""]:!!y?.error}),size:c,disabled:(t=e.disabled)!==null&&t!==void 0?t:!1,readOnly:f}},u.createElement("fieldset",Object.assign({},Ee(C,["errorId","error","size","readOnly"]),i,{ref:r,className:A(_,"navds-fieldset",`navds-fieldset--${c}`,{"navds-fieldset--error":v,"navds-fieldset--readonly":f})}),u.createElement(fe,{id:l,size:c,as:"legend",className:A("navds-fieldset__legend",{"navds-sr-only":!!D})},f&&(K?u.createElement(nn,null):u.createElement(Tr,null)),S),!!O&&u.createElement(X,{className:A("navds-fieldset__description",{"navds-sr-only":!!D}),id:E,size:c??"medium",as:"div"},e.description),R,u.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:A("navds-fieldset__error")},d&&u.createElement(Ma,{size:c,showIcon:!0},e.error))))});var Li=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Ir=u.createContext(null),Di=b.forwardRef((e,r)=>{var n,a,{children:t,className:l,name:i,defaultValue:s,value:d,onChange:v=()=>{},required:c,readOnly:f}=e,E=Li(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:A}=$(),y=b.useContext(Ra),R=Le();return u.createElement(Ri,Object.assign({},E,{readOnly:f,ref:r,className:A(l,"navds-radio-group",`navds-radio-group--${(a=(n=E.size)!==null&&n!==void 0?n:y?.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),u.createElement(Ir.Provider,{value:{name:i??`radioGroupName-${R}`,defaultValue:s,value:d,onChange:v,required:c}},u.createElement("div",{className:A("navds-radio-buttons")},t)))});var Ii=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const wi=e=>{const r=b.useContext(Ir),n=da(Ee(e,["description"]),"radio"),{inputProps:a,readOnly:t}=n,l=Ii(n,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:t,inputProps:Object.assign(Object.assign({},a),{name:r?.name,defaultChecked:r?.defaultValue===void 0?void 0:r?.defaultValue===e.value,checked:r?.value===void 0?void 0:r?.value===e.value,onChange:i=>{var s,d;t||((s=e.onChange)===null||s===void 0||s.call(e,i),(d=r?.onChange)===null||d===void 0||d.call(r,e.value))},onClick:i=>{var s;if(t){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:r?.required,type:"radio"})})},Qe=b.forwardRef((e,r)=>{const{cn:n}=$(),{inputProps:a,size:t,hasError:l,readOnly:i}=wi(e),s=Le(),d=xa(!1);return d?.isDarkside?u.createElement("div",{className:n(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},u.createElement("input",Object.assign({},Ee(e,["children","size","description","readOnly"]),Ee(a,["aria-invalid","aria-describedby"]),{"aria-describedby":Ce(a["aria-describedby"],{[s]:e.description})||void 0,className:n("navds-radio__input"),ref:r})),u.createElement(X,{as:"label",htmlFor:a.id,className:n("navds-radio__label"),size:t},e.children),e.description&&u.createElement(X,{id:s,size:t,className:n("navds-form-field__subdescription navds-radio__description")},e.description)):u.createElement("div",{className:n(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},u.createElement("input",Object.assign({},Ee(e,["children","size","description","readOnly"]),Ee(a,["aria-invalid"]),{className:n("navds-radio__input"),ref:r})),u.createElement("label",{htmlFor:a.id,className:n("navds-radio__label")},u.createElement("span",{className:n("navds-radio__content")},u.createElement(X,{as:"span",size:t},e.children),e.description&&u.createElement(X,{as:"span",size:t,className:n("navds-form-field__subdescription navds-radio__description")},e.description))))});var Pi=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const wn=(e,r,n)=>{const{outerHeightStyle:a,overflow:t}=r;return n.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==t)?(n.current+=1,r):e},Pn=e=>(e?.ownerDocument||document).defaultView||window;function ba(e){return parseInt(e,10)||0}const xi=b.forwardRef((e,r)=>{var n,a,{className:t,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:d,style:v,value:c}=e,f=Pi(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:E}=b.useRef(c!=null),A=b.useRef(null),y=cr(A,r),R=b.useRef(null),_=b.useRef(0),[T,S]=b.useState({outerHeightStyle:0}),O=u.useCallback(()=>{const M=A.current,P=Pn(M).getComputedStyle(M);if(P.width==="0px")return{outerHeightStyle:0};const G=R.current;G.style.width=P.width,G.value=M.value||f.placeholder||"x",G.value.slice(-1)===`
`&&(G.value+=" ");const F=P.boxSizing,I=ba(P.paddingBottom)+ba(P.paddingTop),V=ba(P.borderBottomWidth)+ba(P.borderTopWidth),x=G.scrollHeight-I;G.value="x";const j=G.scrollHeight-I;let U=x;s&&(U=Math.max(Number(s)*j,U)),i&&(U=Math.min(Number(i)*j,U)),U=Math.max(U,j);const Z=U+(F==="border-box"?I+V:0),le=Math.abs(U-x)<=1;return{outerHeightStyle:Z,overflow:le}},[i,s,f.placeholder]),D=()=>{const M=O();xn(M)||S(B=>wn(B,M,_))};bn(()=>{const M=()=>{const I=O();xn(I)||Et.flushSync(()=>{S(V=>wn(V,I,_))})},B=_r(()=>{var I,V,x;if(_.current=0,!((I=A.current)===null||I===void 0)&&I.style.height||!((V=A.current)===null||V===void 0)&&V.style.width){((x=A.current)===null||x===void 0?void 0:x.style.overflow)==="hidden"&&S(j=>Object.assign(Object.assign({},j),{overflow:!1}));return}M()},166,!0),P=A.current,G=Pn(P);G.addEventListener("resize",B);let F;return typeof ResizeObserver<"u"&&(F=new ResizeObserver(B),F.observe(P)),()=>{B.clear(),G.removeEventListener("resize",B),F&&F.disconnect()}},[O]),bn(()=>{D()}),b.useEffect(()=>{_.current=0},[c]);const K=M=>{_.current=0,E||D(),l&&l(M)},C=Object.assign({"--__ac-textarea-height":T.outerHeightStyle+"px","--__axc-textarea-height":T.outerHeightStyle+"px",overflow:T.overflow&&!d&&!(!((n=A.current)===null||n===void 0)&&n.style.height)&&!(!((a=A.current)===null||a===void 0)&&a.style.width)?"hidden":void 0},v);return u.createElement(u.Fragment,null,u.createElement("textarea",Object.assign({value:c,onChange:K,ref:y,rows:s,style:C},f,{className:t})),u.createElement("textarea",{"aria-hidden":!0,className:t,readOnly:!0,ref:R,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},v)}))});function xn(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Mi=({maxLengthId:e,maxLength:r,currentLength:n,size:a,i18n:t})=>{const{cn:l}=$(),i=ua("Textarea",{charsLeft:t?.counterLeft?`{chars} ${t.counterLeft}`:void 0,charsTooMany:t?.counterTooMuch?`{chars} ${t.counterTooMuch}`:void 0}),s=r-n,[d,v]=b.useState(s);return b.useEffect(()=>{const c=_r(()=>{v(s)},2e3);return c(),()=>{c.clear()}},[s]),u.createElement(u.Fragment,null,u.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:r})),s<20&&u.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},Mn(d,i)),u.createElement(X,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:a},Mn(s,i)))},Mn=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var Fi=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Gi=b.forwardRef((e,r)=>{var n,a,t;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:d,size:v,inputDescriptionId:c}=da(e,"textarea"),{label:f,className:E,description:A,maxLength:y,hideLabel:R=!1,resize:_,UNSAFE_autoScrollbar:T,i18n:S,readOnly:O}=e,D=Fi(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:K}=$(),C=Le(),M=y!==void 0&&y>0,[B,P]=b.useState((n=e?.defaultValue)!==null&&n!==void 0?n:""),G=()=>{let I=D?.minRows?D?.minRows:3;return v==="small"&&(I=D?.minRows?D?.minRows:2),I},F=Ce(l["aria-describedby"],{[C??""]:M});return u.createElement("div",{className:K(E,"navds-form-field",`navds-form-field--${v}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":O,"navds-textarea--readonly":O,"navds-textarea--error":d,"navds-textarea--autoscrollbar":T,[`navds-textarea--resize-${_===!0?"both":_}`]:_})},u.createElement(fe,{htmlFor:l.id,size:v,className:K("navds-form-field__label",{"navds-sr-only":R})},O&&u.createElement(nn,null),f),!!A&&u.createElement(X,{className:K("navds-form-field__description",{"navds-sr-only":R}),id:c,size:v,as:"div"},A),u.createElement(xi,Object.assign({},Ee(D,["error","errorId","size"]),l,{onChange:je(e.onChange,e.value===void 0?I=>P(I.target.value):void 0),minRows:G(),autoScrollbar:T,ref:r,readOnly:O,className:K("navds-textarea__input","navds-body-short",`navds-body-short--${v??"medium"}`)},F?{"aria-describedby":F}:{})),M&&!O&&!l.disabled&&u.createElement(Mi,{maxLengthId:C,maxLength:y,currentLength:(t=(a=e.value)===null||a===void 0?void 0:a.length)!==null&&t!==void 0?t:B.length,size:v,i18n:S}),u.createElement("div",{className:K("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&u.createElement(Ma,{size:v,showIcon:!0},e.error)))});var ca=e=>e.type==="checkbox",Re=e=>e instanceof Date,oe=e=>e==null;const wr=e=>typeof e=="object";var ee=e=>!oe(e)&&!Array.isArray(e)&&wr(e)&&!Re(e),Pr=e=>ee(e)&&e.target?ca(e.target)?e.target.checked:e.target.value:e,ji=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,xr=(e,r)=>e.has(ji(r)),Ui=e=>{const r=e.constructor&&e.constructor.prototype;return ee(r)&&r.hasOwnProperty("isPrototypeOf")},rn=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ae(e){let r;const n=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(rn&&(e instanceof Blob||a))&&(n||ee(e)))if(r=n?[]:Object.create(Object.getPrototypeOf(e)),!n&&!Ui(e))r=e;else for(const t in e)e.hasOwnProperty(t)&&(r[t]=ae(e[t]));else return e;return r}var Fa=e=>/^\w*$/.test(e),J=e=>e===void 0,tn=e=>Array.isArray(e)?e.filter(Boolean):[],ln=e=>tn(e.replace(/["|']|\]/g,"").split(/\.|\[/)),N=(e,r,n)=>{if(!r||!ee(e))return n;const a=(Fa(r)?[r]:ln(r)).reduce((t,l)=>oe(t)?t:t[l],e);return J(a)||a===e?J(e[r])?n:e[r]:a},ue=e=>typeof e=="boolean",W=(e,r,n)=>{let a=-1;const t=Fa(r)?[r]:ln(r),l=t.length,i=l-1;for(;++a<l;){const s=t[a];let d=n;if(a!==i){const v=e[s];d=ee(v)||Array.isArray(v)?v:isNaN(+t[a+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=d,e=e[s]}};const Da={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},he={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Oe={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},sn=u.createContext(null);sn.displayName="HookFormContext";const Ke=()=>u.useContext(sn),Bi=e=>{const{children:r,...n}=e;return u.createElement(sn.Provider,{value:n},r)};var Mr=(e,r,n,a=!0)=>{const t={defaultValues:r._defaultValues};for(const l in e)Object.defineProperty(t,l,{get:()=>{const i=l;return r._proxyFormState[i]!==he.all&&(r._proxyFormState[i]=!a||he.all),n&&(n[i]=!0),e[i]}});return t};const on=typeof window<"u"?u.useLayoutEffect:u.useEffect;function Hi(e){const r=Ke(),{control:n=r.control,disabled:a,name:t,exact:l}=e||{},[i,s]=u.useState(n._formState),d=u.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return on(()=>n._subscribe({name:t,formState:d.current,exact:l,callback:v=>{!a&&s({...n._formState,...v})}}),[t,a,l]),u.useEffect(()=>{d.current.isValid&&n._setValid(!0)},[n]),u.useMemo(()=>Mr(i,n,d.current,!1),[i,n])}var ce=e=>typeof e=="string",Fr=(e,r,n,a,t)=>ce(e)?(a&&r.watch.add(e),N(n,e,t)):Array.isArray(e)?e.map(l=>(a&&r.watch.add(l),N(n,l))):(a&&(r.watchAll=!0),n),za=e=>oe(e)||!wr(e);function Te(e,r,n=new WeakSet){if(za(e)||za(r))return e===r;if(Re(e)&&Re(r))return e.getTime()===r.getTime();const a=Object.keys(e),t=Object.keys(r);if(a.length!==t.length)return!1;if(n.has(e)||n.has(r))return!0;n.add(e),n.add(r);for(const l of a){const i=e[l];if(!t.includes(l))return!1;if(l!=="ref"){const s=r[l];if(Re(i)&&Re(s)||ee(i)&&ee(s)||Array.isArray(i)&&Array.isArray(s)?!Te(i,s,n):i!==s)return!1}}return!0}function Ci(e){const r=Ke(),{control:n=r.control,name:a,defaultValue:t,disabled:l,exact:i,compute:s}=e||{},d=u.useRef(t),v=u.useRef(s),c=u.useRef(void 0);v.current=s;const f=u.useMemo(()=>n._getWatch(a,d.current),[n,a]),[E,A]=u.useState(v.current?v.current(f):f);return on(()=>n._subscribe({name:a,formState:{values:!0},exact:i,callback:y=>{if(!l){const R=Fr(a,n._names,y.values||n._formValues,!1,d.current);if(v.current){const _=v.current(R);Te(_,c.current)||(A(_),c.current=_)}else A(R)}}}),[n,l,a,i]),u.useEffect(()=>n._removeUnmounted()),E}function un(e){const r=Ke(),{name:n,disabled:a,control:t=r.control,shouldUnregister:l,defaultValue:i}=e,s=xr(t._names.array,n),d=u.useMemo(()=>N(t._formValues,n,N(t._defaultValues,n,i)),[t,n,i]),v=Ci({control:t,name:n,defaultValue:d,exact:!0}),c=Hi({control:t,name:n,exact:!0}),f=u.useRef(e),E=u.useRef(void 0),A=u.useRef(t.register(n,{...e.rules,value:v,...ue(e.disabled)?{disabled:e.disabled}:{}}));f.current=e;const y=u.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!N(c.errors,n)},isDirty:{enumerable:!0,get:()=>!!N(c.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!N(c.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!N(c.validatingFields,n)},error:{enumerable:!0,get:()=>N(c.errors,n)}}),[c,n]),R=u.useCallback(O=>A.current.onChange({target:{value:Pr(O),name:n},type:Da.CHANGE}),[n]),_=u.useCallback(()=>A.current.onBlur({target:{value:N(t._formValues,n),name:n},type:Da.BLUR}),[n,t._formValues]),T=u.useCallback(O=>{const D=N(t._fields,n);D&&O&&(D._f.ref={focus:()=>O.focus&&O.focus(),select:()=>O.select&&O.select(),setCustomValidity:K=>O.setCustomValidity(K),reportValidity:()=>O.reportValidity()})},[t._fields,n]),S=u.useMemo(()=>({name:n,value:v,...ue(a)||c.disabled?{disabled:c.disabled||a}:{},onChange:R,onBlur:_,ref:T}),[n,a,c.disabled,R,_,T,v]);return u.useEffect(()=>{const O=t._options.shouldUnregister||l,D=E.current;D&&D!==n&&!s&&t.unregister(D),t.register(n,{...f.current.rules,...ue(f.current.disabled)?{disabled:f.current.disabled}:{}});const K=(C,M)=>{const B=N(t._fields,C);B&&B._f&&(B._f.mount=M)};if(K(n,!0),O){const C=ae(N(t._options.defaultValues,n,f.current.defaultValue));W(t._defaultValues,n,C),J(N(t._formValues,n))&&W(t._formValues,n,C)}return!s&&t.register(n),E.current=n,()=>{(s?O&&!t._state.action:O)?t.unregister(n):K(n,!1)}},[n,t,s,l]),u.useEffect(()=>{t._setDisabledField({disabled:a,name:n})},[a,n,t]),u.useMemo(()=>({field:S,formState:c,fieldState:y}),[S,c,y])}var qi=(e,r,n,a,t)=>r?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[a]:t||!0}}:{},la=e=>Array.isArray(e)?e:[e],Fn=()=>{let e=[];return{get observers(){return e},next:t=>{for(const l of e)l.next&&l.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(l=>l!==t)}}),unsubscribe:()=>{e=[]}}};function Gr(e,r){const n={};for(const a in e)if(e.hasOwnProperty(a)){const t=e[a],l=r[a];if(t&&ee(t)&&l){const i=Gr(t,l);ee(i)&&(n[a]=i)}else e[a]&&(n[a]=l)}return n}var se=e=>ee(e)&&!Object.keys(e).length,dn=e=>e.type==="file",ye=e=>typeof e=="function",Ia=e=>{if(!rn)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},jr=e=>e.type==="select-multiple",cn=e=>e.type==="radio",Yi=e=>cn(e)||ca(e),Ya=e=>Ia(e)&&e.isConnected;function $i(e,r){const n=r.slice(0,-1).length;let a=0;for(;a<n;)e=J(e)?a++:e[r[a++]];return e}function zi(e){for(const r in e)if(e.hasOwnProperty(r)&&!J(e[r]))return!1;return!0}function Q(e,r){const n=Array.isArray(r)?r:Fa(r)?[r]:ln(r),a=n.length===1?e:$i(e,n),t=n.length-1,l=n[t];return a&&delete a[l],t!==0&&(ee(a)&&se(a)||Array.isArray(a)&&zi(a))&&Q(e,n.slice(0,-1)),e}var Wi=e=>{for(const r in e)if(ye(e[r]))return!0;return!1};function Ur(e){return Array.isArray(e)||ee(e)&&!Wi(e)}function Wa(e,r={}){for(const n in e)Ur(e[n])?(r[n]=Array.isArray(e[n])?[]:{},Wa(e[n],r[n])):J(e[n])||(r[n]=!0);return r}function Fe(e,r,n){n||(n=Wa(r));for(const a in e)Ur(e[a])?J(r)||za(n[a])?n[a]=Wa(e[a],Array.isArray(e[a])?[]:{}):Fe(e[a],oe(r)?{}:r[a],n[a]):n[a]=!Te(e[a],r[a]);return n}const Gn={value:!1,isValid:!1},jn={value:!0,isValid:!0};var Br=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!J(e[0].attributes.value)?J(e[0].value)||e[0].value===""?jn:{value:e[0].value,isValid:!0}:jn:Gn}return Gn},Hr=(e,{valueAsNumber:r,valueAsDate:n,setValueAs:a})=>J(e)?e:r?e===""?NaN:e&&+e:n&&ce(e)?new Date(e):a?a(e):e;const Un={isValid:!1,value:null};var Cr=e=>Array.isArray(e)?e.reduce((r,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:r,Un):Un;function Bn(e){const r=e.ref;return dn(r)?r.files:cn(r)?Cr(e.refs).value:jr(r)?[...r.selectedOptions].map(({value:n})=>n):ca(r)?Br(e.refs).value:Hr(J(r.value)?e.ref.value:r.value,e)}var Ji=(e,r,n,a)=>{const t={};for(const l of e){const i=N(r,l);i&&W(t,l,i._f)}return{criteriaMode:n,names:[...e],fields:t,shouldUseNativeValidation:a}},wa=e=>e instanceof RegExp,ea=e=>J(e)?e:wa(e)?e.source:ee(e)?wa(e.value)?e.value.source:e.value:e,Hn=e=>({isOnSubmit:!e||e===he.onSubmit,isOnBlur:e===he.onBlur,isOnChange:e===he.onChange,isOnAll:e===he.all,isOnTouch:e===he.onTouched});const Cn="AsyncFunction";var Xi=e=>!!e&&!!e.validate&&!!(ye(e.validate)&&e.validate.constructor.name===Cn||ee(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===Cn)),Zi=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),qn=(e,r,n)=>!n&&(r.watchAll||r.watch.has(e)||[...r.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ia=(e,r,n,a)=>{for(const t of n||Object.keys(e)){const l=N(e,t);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],t)&&!a)return!0;if(i.ref&&r(i.ref,i.name)&&!a)return!0;if(ia(s,r))break}else if(ee(s)&&ia(s,r))break}}};function Yn(e,r,n){const a=N(e,n);if(a||Fa(n))return{error:a,name:n};const t=n.split(".");for(;t.length;){const l=t.join("."),i=N(r,l),s=N(e,l);if(i&&!Array.isArray(i)&&n!==l)return{name:n};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};t.pop()}return{name:n}}var Qi=(e,r,n,a)=>{n(e);const{name:t,...l}=e;return se(l)||Object.keys(l).length>=Object.keys(r).length||Object.keys(l).find(i=>r[i]===(!a||he.all))},es=(e,r,n)=>!e||!r||e===r||la(e).some(a=>a&&(n?a===r:a.startsWith(r)||r.startsWith(a))),as=(e,r,n,a,t)=>t.isOnAll?!1:!n&&t.isOnTouch?!(r||e):(n?a.isOnBlur:t.isOnBlur)?!e:(n?a.isOnChange:t.isOnChange)?e:!0,ns=(e,r)=>!tn(N(e,r)).length&&Q(e,r),rs=(e,r,n)=>{const a=la(N(e,n));return W(a,"root",r[n]),W(e,n,a),e};function $n(e,r,n="validate"){if(ce(e)||Array.isArray(e)&&e.every(ce)||ue(e)&&!e)return{type:n,message:ce(e)?e:"",ref:r}}var Me=e=>ee(e)&&!wa(e)?e:{value:e,message:""},zn=async(e,r,n,a,t,l)=>{const{ref:i,refs:s,required:d,maxLength:v,minLength:c,min:f,max:E,pattern:A,validate:y,name:R,valueAsNumber:_,mount:T}=e._f,S=N(n,R);if(!T||r.has(R))return{};const O=s?s[0]:i,D=I=>{t&&O.reportValidity&&(O.setCustomValidity(ue(I)?"":I||""),O.reportValidity())},K={},C=cn(i),M=ca(i),B=C||M,P=(_||dn(i))&&J(i.value)&&J(S)||Ia(i)&&i.value===""||S===""||Array.isArray(S)&&!S.length,G=qi.bind(null,R,a,K),F=(I,V,x,j=Oe.maxLength,U=Oe.minLength)=>{const Z=I?V:x;K[R]={type:I?j:U,message:Z,ref:i,...G(I?j:U,Z)}};if(l?!Array.isArray(S)||!S.length:d&&(!B&&(P||oe(S))||ue(S)&&!S||M&&!Br(s).isValid||C&&!Cr(s).isValid)){const{value:I,message:V}=ce(d)?{value:!!d,message:d}:Me(d);if(I&&(K[R]={type:Oe.required,message:V,ref:O,...G(Oe.required,V)},!a))return D(V),K}if(!P&&(!oe(f)||!oe(E))){let I,V;const x=Me(E),j=Me(f);if(!oe(S)&&!isNaN(S)){const U=i.valueAsNumber||S&&+S;oe(x.value)||(I=U>x.value),oe(j.value)||(V=U<j.value)}else{const U=i.valueAsDate||new Date(S),Z=_e=>new Date(new Date().toDateString()+" "+_e),le=i.type=="time",ie=i.type=="week";ce(x.value)&&S&&(I=le?Z(S)>Z(x.value):ie?S>x.value:U>new Date(x.value)),ce(j.value)&&S&&(V=le?Z(S)<Z(j.value):ie?S<j.value:U<new Date(j.value))}if((I||V)&&(F(!!I,x.message,j.message,Oe.max,Oe.min),!a))return D(K[R].message),K}if((v||c)&&!P&&(ce(S)||l&&Array.isArray(S))){const I=Me(v),V=Me(c),x=!oe(I.value)&&S.length>+I.value,j=!oe(V.value)&&S.length<+V.value;if((x||j)&&(F(x,I.message,V.message),!a))return D(K[R].message),K}if(A&&!P&&ce(S)){const{value:I,message:V}=Me(A);if(wa(I)&&!S.match(I)&&(K[R]={type:Oe.pattern,message:V,ref:i,...G(Oe.pattern,V)},!a))return D(V),K}if(y){if(ye(y)){const I=await y(S,n),V=$n(I,O);if(V&&(K[R]={...V,...G(Oe.validate,V.message)},!a))return D(V.message),K}else if(ee(y)){let I={};for(const V in y){if(!se(I)&&!a)break;const x=$n(await y[V](S,n),O,V);x&&(I={...x,...G(V,x.message)},D(x.message),a&&(K[R]=I))}if(!se(I)&&(K[R]={ref:O,...I},!a))return K}}return D(!0),K};const ts={mode:he.onSubmit,reValidateMode:he.onChange,shouldFocusError:!0};function ls(e={}){let r={...ts,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:ye(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},a={},t=ee(r.defaultValues)||ee(r.values)?ae(r.defaultValues||r.values)||{}:{},l=r.shouldUnregister?{}:ae(t),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,v=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let f={...c};const E={array:Fn(),state:Fn()},A=r.criteriaMode===he.all,y=o=>m=>{clearTimeout(v),v=setTimeout(o,m)},R=async o=>{if(!r.disabled&&(c.isValid||f.isValid||o)){const m=r.resolver?se((await M()).errors):await P(a,!0);m!==n.isValid&&E.state.next({isValid:m})}},_=(o,m)=>{!r.disabled&&(c.isValidating||c.validatingFields||f.isValidating||f.validatingFields)&&((o||Array.from(s.mount)).forEach(g=>{g&&(m?W(n.validatingFields,g,m):Q(n.validatingFields,g))}),E.state.next({validatingFields:n.validatingFields,isValidating:!se(n.validatingFields)}))},T=(o,m=[],g,L,k=!0,p=!0)=>{if(L&&g&&!r.disabled){if(i.action=!0,p&&Array.isArray(N(a,o))){const w=g(N(a,o),L.argA,L.argB);k&&W(a,o,w)}if(p&&Array.isArray(N(n.errors,o))){const w=g(N(n.errors,o),L.argA,L.argB);k&&W(n.errors,o,w),ns(n.errors,o)}if((c.touchedFields||f.touchedFields)&&p&&Array.isArray(N(n.touchedFields,o))){const w=g(N(n.touchedFields,o),L.argA,L.argB);k&&W(n.touchedFields,o,w)}(c.dirtyFields||f.dirtyFields)&&(n.dirtyFields=Fe(t,l)),E.state.next({name:o,isDirty:F(o,m),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else W(l,o,m)},S=(o,m)=>{W(n.errors,o,m),E.state.next({errors:n.errors})},O=o=>{n.errors=o,E.state.next({errors:n.errors,isValid:!1})},D=(o,m,g,L)=>{const k=N(a,o);if(k){const p=N(l,o,J(g)?N(t,o):g);J(p)||L&&L.defaultChecked||m?W(l,o,m?p:Bn(k._f)):x(o,p),i.mount&&R()}},K=(o,m,g,L,k)=>{let p=!1,w=!1;const q={name:o};if(!r.disabled){if(!g||L){(c.isDirty||f.isDirty)&&(w=n.isDirty,n.isDirty=q.isDirty=F(),p=w!==q.isDirty);const z=Te(N(t,o),m);w=!!N(n.dirtyFields,o),z?Q(n.dirtyFields,o):W(n.dirtyFields,o,!0),q.dirtyFields=n.dirtyFields,p=p||(c.dirtyFields||f.dirtyFields)&&w!==!z}if(g){const z=N(n.touchedFields,o);z||(W(n.touchedFields,o,g),q.touchedFields=n.touchedFields,p=p||(c.touchedFields||f.touchedFields)&&z!==g)}p&&k&&E.state.next(q)}return p?q:{}},C=(o,m,g,L)=>{const k=N(n.errors,o),p=(c.isValid||f.isValid)&&ue(m)&&n.isValid!==m;if(r.delayError&&g?(d=y(()=>S(o,g)),d(r.delayError)):(clearTimeout(v),d=null,g?W(n.errors,o,g):Q(n.errors,o)),(g?!Te(k,g):k)||!se(L)||p){const w={...L,...p&&ue(m)?{isValid:m}:{},errors:n.errors,name:o};n={...n,...w},E.state.next(w)}},M=async o=>{_(o,!0);const m=await r.resolver(l,r.context,Ji(o||s.mount,a,r.criteriaMode,r.shouldUseNativeValidation));return _(o),m},B=async o=>{const{errors:m}=await M(o);if(o)for(const g of o){const L=N(m,g);L?W(n.errors,g,L):Q(n.errors,g)}else n.errors=m;return m},P=async(o,m,g={valid:!0})=>{for(const L in o){const k=o[L];if(k){const{_f:p,...w}=k;if(p){const q=s.array.has(p.name),z=k._f&&Xi(k._f);z&&c.validatingFields&&_([p.name],!0);const ve=await zn(k,s.disabled,l,A,r.shouldUseNativeValidation&&!m,q);if(z&&c.validatingFields&&_([p.name]),ve[p.name]&&(g.valid=!1,m))break;!m&&(N(ve,p.name)?q?rs(n.errors,ve,p.name):W(n.errors,p.name,ve[p.name]):Q(n.errors,p.name))}!se(w)&&await P(w,m,g)}}return g.valid},G=()=>{for(const o of s.unMount){const m=N(a,o);m&&(m._f.refs?m._f.refs.every(g=>!Ya(g)):!Ya(m._f.ref))&&Ye(o)}s.unMount=new Set},F=(o,m)=>!r.disabled&&(o&&m&&W(l,o,m),!Te(_e(),t)),I=(o,m,g)=>Fr(o,s,{...i.mount?l:J(m)?t:ce(o)?{[o]:m}:m},g,m),V=o=>tn(N(i.mount?l:t,o,r.shouldUnregister?N(t,o,[]):[])),x=(o,m,g={})=>{const L=N(a,o);let k=m;if(L){const p=L._f;p&&(!p.disabled&&W(l,o,Hr(m,p)),k=Ia(p.ref)&&oe(m)?"":m,jr(p.ref)?[...p.ref.options].forEach(w=>w.selected=k.includes(w.value)):p.refs?ca(p.ref)?p.refs.forEach(w=>{(!w.defaultChecked||!w.disabled)&&(Array.isArray(k)?w.checked=!!k.find(q=>q===w.value):w.checked=k===w.value||!!k)}):p.refs.forEach(w=>w.checked=w.value===k):dn(p.ref)?p.ref.value="":(p.ref.value=k,p.ref.type||E.state.next({name:o,values:ae(l)})))}(g.shouldDirty||g.shouldTouch)&&K(o,k,g.shouldTouch,g.shouldDirty,!0),g.shouldValidate&&ie(o)},j=(o,m,g)=>{for(const L in m){if(!m.hasOwnProperty(L))return;const k=m[L],p=o+"."+L,w=N(a,p);(s.array.has(o)||ee(k)||w&&!w._f)&&!Re(k)?j(p,k,g):x(p,k,g)}},U=(o,m,g={})=>{const L=N(a,o),k=s.array.has(o),p=ae(m);W(l,o,p),k?(E.array.next({name:o,values:ae(l)}),(c.isDirty||c.dirtyFields||f.isDirty||f.dirtyFields)&&g.shouldDirty&&E.state.next({name:o,dirtyFields:Fe(t,l),isDirty:F(o,p)})):L&&!L._f&&!oe(p)?j(o,p,g):x(o,p,g),qn(o,s)&&E.state.next({...n,name:o}),E.state.next({name:i.mount?o:void 0,values:ae(l)})},Z=async o=>{i.mount=!0;const m=o.target;let g=m.name,L=!0;const k=N(a,g),p=z=>{L=Number.isNaN(z)||Re(z)&&isNaN(z.getTime())||Te(z,N(l,g,z))},w=Hn(r.mode),q=Hn(r.reValidateMode);if(k){let z,ve;const _a=m.type?Bn(k._f):Pr(o),Ae=o.type===Da.BLUR||o.type===Da.FOCUS_OUT,at=!Zi(k._f)&&!r.resolver&&!N(n.errors,g)&&!k._f.deps||as(Ae,N(n.touchedFields,g),n.isSubmitted,q,w),Ba=qn(g,s,Ae);W(l,g,_a),Ae?(!m||!m.readOnly)&&(k._f.onBlur&&k._f.onBlur(o),d&&d(0)):k._f.onChange&&k._f.onChange(o);const Ha=K(g,_a,Ae),nt=!se(Ha)||Ba;if(!Ae&&E.state.next({name:g,type:o.type,values:ae(l)}),at)return(c.isValid||f.isValid)&&(r.mode==="onBlur"?Ae&&R():Ae||R()),nt&&E.state.next({name:g,...Ba?{}:Ha});if(!Ae&&Ba&&E.state.next({...n}),r.resolver){const{errors:En}=await M([g]);if(p(_a),L){const rt=Yn(n.errors,a,g),_n=Yn(En,a,rt.name||g);z=_n.error,g=_n.name,ve=se(En)}}else _([g],!0),z=(await zn(k,s.disabled,l,A,r.shouldUseNativeValidation))[g],_([g]),p(_a),L&&(z?ve=!1:(c.isValid||f.isValid)&&(ve=await P(a,!0)));L&&(k._f.deps&&(!Array.isArray(k._f.deps)||k._f.deps.length>0)&&ie(k._f.deps),C(g,ve,z,Ha))}},le=(o,m)=>{if(N(n.errors,m)&&o.focus)return o.focus(),1},ie=async(o,m={})=>{let g,L;const k=la(o);if(r.resolver){const p=await B(J(o)?o:k);g=se(p),L=o?!k.some(w=>N(p,w)):g}else o?(L=(await Promise.all(k.map(async p=>{const w=N(a,p);return await P(w&&w._f?{[p]:w}:w)}))).every(Boolean),!(!L&&!n.isValid)&&R()):L=g=await P(a);return E.state.next({...!ce(o)||(c.isValid||f.isValid)&&g!==n.isValid?{}:{name:o},...r.resolver||!o?{isValid:g}:{},errors:n.errors}),m.shouldFocus&&!L&&ia(a,le,o?k:s.mount),L},_e=(o,m)=>{let g={...i.mount?l:t};return m&&(g=Gr(m.dirtyFields?n.dirtyFields:n.touchedFields,g)),J(o)?g:ce(o)?N(g,o):o.map(L=>N(g,L))},ne=(o,m)=>({invalid:!!N((m||n).errors,o),isDirty:!!N((m||n).dirtyFields,o),error:N((m||n).errors,o),isValidating:!!N(n.validatingFields,o),isTouched:!!N((m||n).touchedFields,o)}),me=o=>{o&&la(o).forEach(m=>Q(n.errors,m)),E.state.next({errors:o?n.errors:{}})},pe=(o,m,g)=>{const L=(N(a,o,{_f:{}})._f||{}).ref,k=N(n.errors,o)||{},{ref:p,message:w,type:q,...z}=k;W(n.errors,o,{...z,...m,ref:L}),E.state.next({name:o,errors:n.errors,isValid:!1}),g&&g.shouldFocus&&L&&L.focus&&L.focus()},ja=(o,m)=>ye(o)?E.state.subscribe({next:g=>"values"in g&&o(I(void 0,m),g)}):I(o,m,!0),ga=o=>E.state.subscribe({next:m=>{es(o.name,m.name,o.exact)&&Qi(m,o.formState||c,Je,o.reRenderRoot)&&o.callback({values:{...l},...n,...m,defaultValues:t})}}).unsubscribe,Ua=o=>(i.mount=!0,f={...f,...o.formState},ga({...o,formState:f})),Ye=(o,m={})=>{for(const g of o?la(o):s.mount)s.mount.delete(g),s.array.delete(g),m.keepValue||(Q(a,g),Q(l,g)),!m.keepError&&Q(n.errors,g),!m.keepDirty&&Q(n.dirtyFields,g),!m.keepTouched&&Q(n.touchedFields,g),!m.keepIsValidating&&Q(n.validatingFields,g),!r.shouldUnregister&&!m.keepDefaultValue&&Q(t,g);E.state.next({values:ae(l)}),E.state.next({...n,...m.keepDirty?{isDirty:F()}:{}}),!m.keepIsValid&&R()},fa=({disabled:o,name:m})=>{(ue(o)&&i.mount||o||s.disabled.has(m))&&(o?s.disabled.add(m):s.disabled.delete(m))},De=(o,m={})=>{let g=N(a,o);const L=ue(m.disabled)||ue(r.disabled);return W(a,o,{...g||{},_f:{...g&&g._f?g._f:{ref:{name:o}},name:o,mount:!0,...m}}),s.mount.add(o),g?fa({disabled:ue(m.disabled)?m.disabled:r.disabled,name:o}):D(o,!0,m.value),{...L?{disabled:m.disabled||r.disabled}:{},...r.progressive?{required:!!m.required,min:ea(m.min),max:ea(m.max),minLength:ea(m.minLength),maxLength:ea(m.maxLength),pattern:ea(m.pattern)}:{},name:o,onChange:Z,onBlur:Z,ref:k=>{if(k){De(o,m),g=N(a,o);const p=J(k.value)&&k.querySelectorAll&&k.querySelectorAll("input,select,textarea")[0]||k,w=Yi(p),q=g._f.refs||[];if(w?q.find(z=>z===p):p===g._f.ref)return;W(a,o,{_f:{...g._f,...w?{refs:[...q.filter(Ya),p,...Array.isArray(N(t,o))?[{}]:[]],ref:{type:p.type,name:o}}:{ref:p}}}),D(o,!1,void 0,p)}else g=N(a,o,{}),g._f&&(g._f.mount=!1),(r.shouldUnregister||m.shouldUnregister)&&!(xr(s.array,o)&&i.action)&&s.unMount.add(o)}}},Ie=()=>r.shouldFocusError&&ia(a,le,s.mount),$e=o=>{ue(o)&&(E.state.next({disabled:o}),ia(a,(m,g)=>{const L=N(a,g);L&&(m.disabled=L._f.disabled||o,Array.isArray(L._f.refs)&&L._f.refs.forEach(k=>{k.disabled=L._f.disabled||o}))},0,!1))},we=(o,m)=>async g=>{let L;g&&(g.preventDefault&&g.preventDefault(),g.persist&&g.persist());let k=ae(l);if(E.state.next({isSubmitting:!0}),r.resolver){const{errors:p,values:w}=await M();n.errors=p,k=ae(w)}else await P(a);if(s.disabled.size)for(const p of s.disabled)Q(k,p);if(Q(n.errors,"root"),se(n.errors)){E.state.next({errors:{}});try{await o(k,g)}catch(p){L=p}}else m&&await m({...n.errors},g),Ie(),setTimeout(Ie);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:se(n.errors)&&!L,submitCount:n.submitCount+1,errors:n.errors}),L)throw L},ze=(o,m={})=>{N(a,o)&&(J(m.defaultValue)?U(o,ae(N(t,o))):(U(o,m.defaultValue),W(t,o,ae(m.defaultValue))),m.keepTouched||Q(n.touchedFields,o),m.keepDirty||(Q(n.dirtyFields,o),n.isDirty=m.defaultValue?F(o,ae(N(t,o))):F()),m.keepError||(Q(n.errors,o),c.isValid&&R()),E.state.next({...n}))},Ve=(o,m={})=>{const g=o?ae(o):t,L=ae(g),k=se(o),p=k?t:L;if(m.keepDefaultValues||(t=g),!m.keepValues){if(m.keepDirtyValues){const w=new Set([...s.mount,...Object.keys(Fe(t,l))]);for(const q of Array.from(w))N(n.dirtyFields,q)?W(p,q,N(l,q)):U(q,N(p,q))}else{if(rn&&J(o))for(const w of s.mount){const q=N(a,w);if(q&&q._f){const z=Array.isArray(q._f.refs)?q._f.refs[0]:q._f.ref;if(Ia(z)){const ve=z.closest("form");if(ve){ve.reset();break}}}}if(m.keepFieldsRef)for(const w of s.mount)U(w,N(p,w));else a={}}l=r.shouldUnregister?m.keepDefaultValues?ae(t):{}:ae(p),E.array.next({values:{...p}}),E.state.next({values:{...p}})}s={mount:m.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!c.isValid||!!m.keepIsValid||!!m.keepDirtyValues,i.watch=!!r.shouldUnregister,E.state.next({submitCount:m.keepSubmitCount?n.submitCount:0,isDirty:k?!1:m.keepDirty?n.isDirty:!!(m.keepDefaultValues&&!Te(o,t)),isSubmitted:m.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:k?{}:m.keepDirtyValues?m.keepDefaultValues&&l?Fe(t,l):n.dirtyFields:m.keepDefaultValues&&o?Fe(t,o):m.keepDirty?n.dirtyFields:{},touchedFields:m.keepTouched?n.touchedFields:{},errors:m.keepErrors?n.errors:{},isSubmitSuccessful:m.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:t})},Ne=(o,m)=>Ve(ye(o)?o(l):o,m),We=(o,m={})=>{const g=N(a,o),L=g&&g._f;if(L){const k=L.refs?L.refs[0]:L.ref;k.focus&&(k.focus(),m.shouldSelect&&ye(k.select)&&k.select())}},Je=o=>{n={...n,...o}},Pe={control:{register:De,unregister:Ye,getFieldState:ne,handleSubmit:we,setError:pe,_subscribe:ga,_runSchema:M,_focusError:Ie,_getWatch:I,_getDirty:F,_setValid:R,_setFieldArray:T,_setDisabledField:fa,_setErrors:O,_getFieldArray:V,_reset:Ve,_resetDefaultValues:()=>ye(r.defaultValues)&&r.defaultValues().then(o=>{Ne(o,r.resetOptions),E.state.next({isLoading:!1})}),_removeUnmounted:G,_disableForm:$e,_subjects:E,_proxyFormState:c,get _fields(){return a},get _formValues(){return l},get _state(){return i},set _state(o){i=o},get _defaultValues(){return t},get _names(){return s},set _names(o){s=o},get _formState(){return n},get _options(){return r},set _options(o){r={...r,...o}}},subscribe:Ua,trigger:ie,register:De,handleSubmit:we,watch:ja,setValue:U,getValues:_e,reset:Ne,resetField:ze,clearErrors:me,unregister:Ye,setError:pe,setFocus:We,getFieldState:ne};return{...Pe,formControl:Pe}}function is(e={}){const r=u.useRef(void 0),n=u.useRef(void 0),[a,t]=u.useState({isDirty:!1,isValidating:!1,isLoading:ye(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:ye(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:a},e.defaultValues&&!ye(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=ls(e);r.current={...s,formState:a}}const l=r.current.control;return l._options=e,on(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>t({...l._formState}),reRenderRoot:!0});return t(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),u.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),u.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),u.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),u.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),u.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==a.isDirty&&l._subjects.state.next({isDirty:i})}},[l,a.isDirty]),u.useEffect(()=>{e.values&&!Te(e.values,n.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),n.current=e.values,t(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),u.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),r.current.formState=Mr(a,l),r.current}function ss(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wn={exports:{}},aa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn;function os(){if(Jn)return aa;Jn=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(a,t,l){var i=null;if(l!==void 0&&(i=""+l),t.key!==void 0&&(i=""+t.key),"key"in t){l={};for(var s in t)s!=="key"&&(l[s]=t[s])}else l=t;return t=l.ref,{$$typeof:e,type:a,key:i,ref:t!==void 0?t:null,props:l}}return aa.Fragment=r,aa.jsx=n,aa.jsxs=n,aa}var Xn;function us(){return Xn||(Xn=1,Wn.exports=os()),Wn.exports}var Se=us();const ds=({children:e})=>{const r=b.Children.toArray(e);return r.length===0?null:Se.jsx(Gl,{variant:"warning",size:"small",children:Se.jsx(de,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:r.map(n=>Se.jsx(X,{size:"small",children:n},cs(n)))})})},cs=e=>{if(b.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},ma={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};be(ma);const Pa="var(--ax-bg-neutral-strong)",qr=4,ms=(e,r,n)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${Pa};
    border-radius: ${qr}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${n}px;
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
`,vs=(e,r,n)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${Pa};
    border-radius: ${qr}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${n}px;
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
`,gs=(e,r,n,a)=>r?vs(e,n,a):ms(e,n,a),fs=(e,r,n)=>n?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,Es=({children:e,alignOffset:r=0,alignLeft:n=!1,marginTop:a=0,marginLeft:t=0,hideBorder:l=!1})=>Se.jsxs(Se.Fragment,{children:[Se.jsx("style",{dangerouslySetInnerHTML:{__html:gs(r,n,a,t)}}),Se.jsx("div",{className:fs(r,n,l),children:e})]});var Zn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Qn;function _s(){return Qn||(Qn=1,(function(e){(function(){var r={}.hasOwnProperty;function n(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=t(l,a.call(this,s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=t(i,this&&this[s]||s));return i}function t(l,i){return i?l?l+" "+i:l+i:l}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Zn)),Zn.exports}var hs=_s();const mn=ss(hs),ys="_borderbox_1a0x6_1",bs="_error_1a0x6_5",ps="_warning_1a0x6_8",Os={borderbox:ys,error:bs,warning:ps};mn.bind(Os);const Ts="_aksjonspunkt_11wjs_1",Ss="_erAksjonspunktApent_11wjs_4",ks="_erIkkeGodkjentAvBeslutter_11wjs_8",Ks={aksjonspunkt:Ts,erAksjonspunktApent:Ss,erIkkeGodkjentAvBeslutter:ks};mn.bind(Ks);be(ma);be(ma);const As="_divider_1jpov_1",Vs="_dividerParagraf_1jpov_8",Ns="_leftPanel_1jpov_11",Rs="_rightPanel_1jpov_14",Ls={divider:As,dividerParagraf:Vs,leftPanel:Ns,rightPanel:Rs};mn.bind(Ls);const Yr=()=>Se.jsx("span",{"data-testid":"editedIcon",children:Se.jsx(jt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});be(ma);be(ma);var $a={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var er;function Ds(){return er||(er=1,(function(e){(function(){var r={}.hasOwnProperty;function n(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=t(l,a(s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=t(i,s));return i}function t(l,i){return i?l?l+" "+i:l+i:l}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})($a)),$a.exports}var Is=Ds();const ws=dr(Is);function Ps(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ar={exports:{}},na={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr;function xs(){if(nr)return na;nr=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(a,t,l){var i=null;if(l!==void 0&&(i=""+l),t.key!==void 0&&(i=""+t.key),"key"in t){l={};for(var s in t)s!=="key"&&(l[s]=t[s])}else l=t;return t=l.ref,{$$typeof:e,type:a,key:i,ref:t!==void 0?t:null,props:l}}return na.Fragment=r,na.jsx=n,na.jsxs=n,na}var rr;function Ms(){return rr||(rr=1,ar.exports=xs()),ar.exports}var re=Ms();const vn=e=>e.reduce((r,n,a)=>({...r,[a]:t=>n(t)||!0}),{}),gn=(e,r)=>r.split(".").reduce((n,a)=>n!==void 0?n[a]:n,e)?.message;var Ja={exports:{}},Fs=Ja.exports,tr;function Gs(){return tr||(tr=1,(function(e,r){(function(n,a){e.exports=a()})(Fs,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,d={},v=function(_){return(_=+_)+(_>68?1900:2e3)},c=function(_){return function(T){this[_]=+T}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=(function(T){if(!T||T==="Z")return 0;var S=T.match(/([+-]|\d\d)/g),O=60*S[1]+(+S[2]||0);return O===0?0:S[0]==="+"?-O:O})(_)}],E=function(_){var T=d[_];return T&&(T.indexOf?T:T.s.concat(T.f))},A=function(_,T){var S,O=d.meridiem;if(O){for(var D=1;D<=24;D+=1)if(_.indexOf(O(D,0,T))>-1){S=D>12;break}}else S=_===(T?"pm":"PM");return S},y={A:[s,function(_){this.afternoon=A(_,!1)}],a:[s,function(_){this.afternoon=A(_,!0)}],Q:[t,function(_){this.month=3*(_-1)+1}],S:[t,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[i,c("seconds")],ss:[i,c("seconds")],m:[i,c("minutes")],mm:[i,c("minutes")],H:[i,c("hours")],h:[i,c("hours")],HH:[i,c("hours")],hh:[i,c("hours")],D:[i,c("day")],DD:[l,c("day")],Do:[s,function(_){var T=d.ordinal,S=_.match(/\d+/);if(this.day=S[0],T)for(var O=1;O<=31;O+=1)T(O).replace(/\[|\]/g,"")===_&&(this.day=O)}],w:[i,c("week")],ww:[l,c("week")],M:[i,c("month")],MM:[l,c("month")],MMM:[s,function(_){var T=E("months"),S=(E("monthsShort")||T.map(function(O){return O.slice(0,3)})).indexOf(_)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[s,function(_){var T=E("months").indexOf(_)+1;if(T<1)throw new Error;this.month=T%12||T}],Y:[/[+-]?\d+/,c("year")],YY:[l,function(_){this.year=v(_)}],YYYY:[/\d{4}/,c("year")],Z:f,ZZ:f};function R(_){var T,S;T=_,S=d&&d.formats;for(var O=(_=T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,F,I){var V=I&&I.toUpperCase();return F||S[I]||n[I]||S[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,j,U){return j||U.slice(1)})})).match(a),D=O.length,K=0;K<D;K+=1){var C=O[K],M=y[C],B=M&&M[0],P=M&&M[1];O[K]=P?{regex:B,parser:P}:C.replace(/^\[|\]$/g,"")}return function(G){for(var F={},I=0,V=0;I<D;I+=1){var x=O[I];if(typeof x=="string")V+=x.length;else{var j=x.regex,U=x.parser,Z=G.slice(V),le=j.exec(Z)[0];U.call(F,le),G=G.replace(le,"")}}return(function(ie){var _e=ie.afternoon;if(_e!==void 0){var ne=ie.hours;_e?ne<12&&(ie.hours+=12):ne===12&&(ie.hours=0),delete ie.afternoon}})(F),F}}return function(_,T,S){S.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(v=_.parseTwoDigitYear);var O=T.prototype,D=O.parse;O.parse=function(K){var C=K.date,M=K.utc,B=K.args;this.$u=M;var P=B[1];if(typeof P=="string"){var G=B[2]===!0,F=B[3]===!0,I=G||F,V=B[2];F&&(V=B[2]),d=this.$locale(),!G&&V&&(d=S.Ls[V]),this.$d=(function(Z,le,ie,_e){try{if(["x","X"].indexOf(le)>-1)return new Date((le==="X"?1e3:1)*Z);var ne=R(le)(Z),me=ne.year,pe=ne.month,ja=ne.day,ga=ne.hours,Ua=ne.minutes,Ye=ne.seconds,fa=ne.milliseconds,De=ne.zone,Ie=ne.week,$e=new Date,we=ja||(me||pe?1:$e.getDate()),ze=me||$e.getFullYear(),Ve=0;me&&!pe||(Ve=pe>0?pe-1:$e.getMonth());var Ne,We=ga||0,Je=Ua||0,Ea=Ye||0,Pe=fa||0;return De?new Date(Date.UTC(ze,Ve,we,We,Je,Ea,Pe+60*De.offset*1e3)):ie?new Date(Date.UTC(ze,Ve,we,We,Je,Ea,Pe)):(Ne=new Date(ze,Ve,we,We,Je,Ea,Pe),Ie&&(Ne=_e(Ne).week(Ie).toDate()),Ne)}catch{return new Date("")}})(C,P,M,S),this.init(),V&&V!==!0&&(this.$L=this.locale(V).$L),I&&C!=this.format(P)&&(this.$d=new Date("")),d={}}else if(P instanceof Array)for(var x=P.length,j=1;j<=x;j+=1){B[1]=P[j-1];var U=S.apply(this,B);if(U.isValid()){this.$d=U.$d,this.$L=U.$L,this.init();break}j===x&&(this.$d=new Date(""))}else D.call(this,K)}}})})(Ja)),Ja.exports}var js=Gs();const Us=Ps(js),Bs="_textarea_14c7r_1",Hs="_readOnlyField_14c7r_7",lr={textarea:Bs,readOnlyField:Hs},Cs=e=>e!=null&&e!=="",$r=({label:e,value:r,isEdited:n=!1,type:a,hideLabel:t,size:l})=>Cs(r)?re.jsxs(de,{gap:"space-4",children:[e&&!t&&re.jsx(fe,{size:l,children:e}),re.jsxs(Be,{gap:"space-8",align:"center",wrap:!1,children:[re.jsx(en,{className:a==="textarea"?lr.textarea:lr.readOnlyField,size:l,children:r}),n&&re.jsx(Yr,{})]})]}):null;lt.extend(Us);const qs="_noReadOnlyIcon_11vhl_2",Ys={noReadOnlyIcon:qs},ir=({label:e,description:r,validate:n=[],onChange:a,children:t,className:l,isReadOnly:i=!1,size:s="small",isEdited:d=!1,hideLegend:v=!1,...c})=>{const{name:f,control:E}=c,{formState:{errors:A}}=Ke(),{field:y}=un({name:f,control:E,rules:{validate:vn(n)}});return re.jsx(Di,{name:f,value:y.value!==void 0?y.value:null,legend:re.jsxs(Be,{justify:"center",gap:"space-8",children:[e,i&&d&&re.jsx(Yr,{})]}),hideLegend:v,"aria-readonly":i,readOnly:i,description:r,size:s,error:gn(A,f),onChange:R=>{a&&a(R),y.onChange(R)},className:ws(l,Ys.noReadOnlyIcon),children:t})},sr=({label:e,selectValues:r,validate:n=[],readOnly:a=!1,description:t,hideValueOnDisable:l=!1,onChange:i,className:s,hideLabel:d,isEdited:v,size:c="small",...f})=>{const{name:E,control:A,disabled:y}=f,{formState:{errors:R}}=Ke(),{field:_}=un({name:E,control:A,rules:{validate:b.useMemo(()=>vn(n),[n])}});if(a){const O=r.map(K=>K.props).find(K=>K.value===_.value),D=O?O.children:void 0;return re.jsx($r,{value:D,label:e,hideLabel:d,isEdited:v,size:c})}const T=_.value||"",S=!r.map(O=>O.props.value).includes(T)&&T!=="";return S&&console.warn(`No corresponding option found for value '${T}'`),re.jsxs(fi,{size:c,className:s,error:gn(R,E),label:e,description:t,value:l&&y||S?"":_.value,disabled:y,onChange:O=>{i&&i(O),_.onChange(O)},hideLabel:d,children:[re.jsx("option",{style:{display:"none"}}),",",r]})},$s="_textAreaFieldWithBadges_bdz0b_1",zs="_etikettWrapper_bdz0b_4",or={textAreaFieldWithBadges:$s,etikettWrapper:zs},zr=({name:e,control:r,label:n,readOnly:a,maxLength:t,badges:l,validate:i=[],parse:s=A=>A,className:d,description:v,isEdited:c,size:f="small",...E})=>{const{formState:{errors:A}}=Ke(),{field:y}=un({name:e,control:r,rules:{validate:b.useMemo(()=>vn(i),[i])}});return a?re.jsx($r,{size:f,label:n,value:y.value,type:"textarea",isEdited:c,hideLabel:E.hideLabel}):re.jsxs("div",{className:l?or.textAreaFieldWithBadges:null,children:[l&&re.jsx("div",{className:or.etikettWrapper,children:l.map(({type:R,titleText:_})=>re.jsx(Ki,{variant:R,size:"small",children:_},_))}),re.jsx(Gi,{size:f,label:n,description:v,className:d,autoComplete:"off",...y,onChange:R=>y.onChange(R.currentTarget.value!==""?s(R.currentTarget.value):null),value:y.value?y.value:"",error:gn(A,e),maxLength:t,...E})]})},Ws=({formMethods:e,onSubmit:r,children:n,className:a,setDataOnUnmount:t})=>{const{handleSubmit:l,getValues:i}=e;return b.useEffect(()=>()=>{t&&t(i())},[]),re.jsx(Bi,{...e,children:re.jsx("form",{className:a,onSubmit:r?l(s=>r(s)):void 0,children:n})})},Js="_begrunnelseTextField_hw8s7_6",Xs={begrunnelseTextField:Js},va={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},Zs=be(va),Qs=st(3),eo=ot(2e3),ao=e=>e?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",no=e=>r=>r!==void 0||e,Ga=({readOnly:e,text:r,useAllWidth:n=!1,notRequired:a=!1})=>{const{formState:{isDirty:t},control:l}=Ke(),i=a?()=>!1:no(t);return h.jsx("div",{className:n?"":Xs.begrunnelseTextField,children:h.jsx(zr,{name:"begrunnelse",control:l,label:r??Zs.formatMessage({id:ao(e)}),validate:[it(i),Qs,eo,gr],maxLength:2e3,readOnly:e,parse:vr})})},ro=e=>e.at(0)?.begrunnelse??"";Ga.buildInitialValues=e=>({begrunnelse:ut(ro(e))});Ga.transformValues=e=>({begrunnelse:e.begrunnelse});Ga.__docgenInfo={description:`ProsessStegBegrunnelseTextField

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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const to=be(va),lo=(e,r,n,a)=>!n&&!r||e?!0:a===void 0?!n:!n&&a||a,fn=({isReadOnly:e,isSubmittable:r,isSubmitting:n,isDirty:a,text:t,onClick:l,hasEmptyRequiredFields:i})=>e?null:h.jsx("div",{children:h.jsx(Ue,{size:"small",variant:"primary",loading:n,disabled:lo(n,r,a,i),onClick:l,type:l?"button":"submit",children:t??to.formatMessage({id:"SubmitButton.ConfirmInformation"})})});fn.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};be(va);be(va);be(va);const Wr=({erModalÅpen:e,lukkModal:r,isSubmittable:n,isSubmitting:a,isDirty:t,readOnly:l,valgtHjemmel:i})=>{const s=He();return h.jsx(sa,{width:"500px",open:e,"aria-label":s.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:r,children:h.jsx(sa.Body,{children:h.jsxs(de,{gap:"space-12",children:[h.jsxs(de,{gap:"space-16",children:[h.jsx(fe,{size:"medium",children:h.jsx(Y,{id:"Klage.Modal.Overskrift"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.SendTilKlageinstans"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Valg"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Oppretthold"})}),i&&h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Hjemmel",values:{hjemmel:i}})})]}),h.jsx("div",{children:h.jsxs(Be,{gap:"space-8",children:[h.jsx(fn,{isReadOnly:l,isSubmittable:n,isSubmitting:a,isDirty:t}),h.jsx(Ue,{size:"small",variant:"primary",onClick:r,autoFocus:!0,type:"button",children:h.jsx(Y,{id:"Klage.Modal.Avbryt"})})]})})]})})})};Wr.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const io="_fritekstTilBrevTextArea_n72am_1",so={fritekstTilBrevTextArea:io},Jr=({språkkode:e,readOnly:r=!0})=>{const{control:n}=Ke();return h.jsx("div",{className:so.fritekstTilBrevTextArea,children:h.jsx(zr,{name:"fritekstTilBrev",control:n,label:He().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[ra,gr],readOnly:r,maxLength:1e5,badges:[{type:"info",titleText:dt(e)}],parse:vr})})};Jr.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const oo="_select_1owoa_7",uo="_selectReadOnly_1owoa_10",pa={select:oo,selectReadOnly:uo},Xr=({readOnly:e,medholdReasons:r,alleHjemmlerMedNavn:n,klageVurdering:a})=>{const t=He(),{control:l}=Ke(),i=r.map(d=>h.jsx("option",{value:d.kode,children:d.navn},d.kode)),s=n.map(d=>h.jsx("option",{value:d.kode,children:d.navn},d.kode));return h.jsxs(de,{gap:"space-12",children:[h.jsx(ir,{name:"klageVurdering",control:l,validate:[ra],isReadOnly:e,children:h.jsxs(Be,{gap:"space-16",children:[h.jsx(Qe,{value:"MEDHOLD_I_KLAGE",size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.ChangeVedtak"})}),h.jsx(Qe,{value:"STADFESTE_YTELSESVEDTAK",size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.KeepVedtakNfp"})})]})}),a==="MEDHOLD_I_KLAGE"&&h.jsx(Es,{children:h.jsxs(de,{gap:"space-16",children:[h.jsx(sr,{readOnly:e,control:l,name:"klageMedholdArsak",selectValues:i,className:e?pa.selectReadOnly:pa.select,label:t.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[ra]}),h.jsxs(ir,{name:"klageVurderingOmgjoer",control:l,validate:[ra],isReadOnly:e,children:[h.jsx(Qe,{value:"GUNST_MEDHOLD_I_KLAGE",size:"small",children:h.jsx(Y,{id:"Klage.Behandle.Omgjort"})}),h.jsx(Qe,{value:"UGUNST_MEDHOLD_I_KLAGE",size:"small",children:h.jsx(Y,{id:"Klage.Behandle.Ugunst"})}),h.jsx(Qe,{value:"DELVIS_MEDHOLD_I_KLAGE",size:"small",children:h.jsx(Y,{id:"Klage.Behandle.DelvisOmgjort"})})]})]})}),h.jsx(sr,{readOnly:e,control:l,name:"klageHjemmel",selectValues:s,className:e?pa.selectReadOnly:pa.select,label:t.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[ra]})]})};Xr.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},description:""}}};const co=(e,r)=>{switch(r){case"STADFESTE_YTELSESVEDTAK":return e?"KGESTA":"KGEOVE";case"OPPHEVE_YTELSESVEDTAK":return"KGEHJE";case"HJEMSENDE_UTEN_Å_OPPHEVE":return"KGEHJE";case"MEDHOLD_I_KLAGE":return"KGEOMG";default:return}},mo=(e,r)=>({fritekst:r??"",dokumentMal:co(!1,e),erOpphevetKlage:e==="OPPHEVE_YTELSESVEDTAK"}),Zr=({previewCallback:e,fritekstTilBrev:r,klageVurdering:n})=>{const a=t=>{e(mo(n,r)),t.preventDefault()};return h.jsx(Ti,{href:"#",onClick:a,onKeyDown:t=>t.key==="Enter"?a(t):null,children:h.jsx(Y,{id:"PreviewKlageLink.ForhandvisBrev"})})};Zr.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},description:""}}};const vo=e=>({klageMedholdArsak:e.klageVurdering==="MEDHOLD_I_KLAGE"?e.klageMedholdArsak:void 0,klageVurderingOmgjoer:e.klageVurdering==="MEDHOLD_I_KLAGE"?e.klageVurderingOmgjoer:void 0,klageHjemmel:e.klageHjemmel,klageVurdering:Va(e.klageVurdering),fritekstTilBrev:e.fritekstTilBrev,begrunnelse:e.begrunnelse,kode:oa.MANUELL_VURDERING_AV_KLAGE_NFP}),Oa=e=>{if(e&&e!=="-")return e},go=(e,r)=>e.filter(({kode:n})=>r.includes(n)).sort((n,a)=>n.kode.localeCompare(a.kode)),fo=e=>e.map(r=>r),Eo=e=>({klageMedholdArsak:Oa(e?.klageMedholdArsak??void 0),klageVurderingOmgjoer:Oa(e?.klageVurderingOmgjoer??void 0),klageHjemmel:Oa(e?.klageHjemmel??void 0),klageVurdering:Oa(e?.klageVurdering??void 0),begrunnelse:e?.begrunnelse??void 0,fritekstTilBrev:e?.fritekstTilBrev??void 0}),Qr=({klageVurdering:e,previewCallback:r,saveKlage:n,alleAktuelleHjemler:a})=>{const{behandling:t,alleKodeverk:l,submitCallback:i,isReadOnly:s,isSubmittable:d}=Qa(),v=go(l.KlageHjemmel,fo(a)),c=He(),[f,E]=b.useState(!1),A=Eo(e.klageVurderingResultatNFP??void 0),{mellomlagretFormData:y,setMellomlagretFormData:R}=ct(),_=is({defaultValues:y??A}),T=_.watch(),S=()=>{E(!1)},O=()=>{E(!0)};return h.jsx(Ws,{formMethods:_,onSubmit:D=>i(vo(D)),setDataOnUnmount:R,children:h.jsxs(de,{gap:"space-16",children:[h.jsx(an,{size:"small",level:"2",children:c.formatMessage({id:"Klage.ResolveKlage.Title"})}),d&&h.jsx(ds,{children:h.jsx(Y,{id:"Klage.ResolveKlage.HelpText"})}),h.jsx(Xr,{readOnly:s,klageVurdering:T.klageVurdering,medholdReasons:l.KlageMedholdÅrsak,alleHjemmlerMedNavn:v}),h.jsx(Ga,{readOnly:s,text:c.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),h.jsx(Jr,{språkkode:t.språkkode,readOnly:s}),h.jsxs(Be,{justify:"space-between",children:[h.jsxs(Be,{gap:"space-16",children:[T.klageVurdering==="STADFESTE_YTELSESVEDTAK"&&h.jsxs(h.Fragment,{children:[h.jsx(Ue,{variant:"primary",type:"button",size:"small",onClick:()=>O(),disabled:s,children:h.jsx(Y,{id:"Klage.Behandle.Bekreft"})}),h.jsx(Wr,{erModalÅpen:f,lukkModal:S,valgtHjemmel:v.find(D=>D.kode===T.klageHjemmel)?.navn,readOnly:s,isSubmittable:d,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isValid})]}),T.klageVurdering!=="STADFESTE_YTELSESVEDTAK"&&h.jsx(fn,{isReadOnly:s,isSubmittable:d,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isDirty}),!s&&T.klageVurdering&&T.fritekstTilBrev&&T.fritekstTilBrev.length>2&&h.jsx(Zr,{previewCallback:r,fritekstTilBrev:T.fritekstTilBrev,klageVurdering:T.klageVurdering})]}),!s&&h.jsx(Ue,{size:"small",variant:"primary",onClick:_.handleSubmit(D=>n(_o(D,oa.MANUELL_VURDERING_AV_KLAGE_NFP))),type:"button",children:h.jsx(Y,{id:"Klage.ResolveKlage.TempSaveButton"})})]})]})})},_o=(e,r)=>({kode:r,klageMedholdArsak:e.klageVurdering==="MEDHOLD_I_KLAGE"||e.klageVurdering==="OPPHEVE_YTELSESVEDTAK"?e.klageMedholdArsak:void 0,klageVurderingOmgjoer:e.klageVurdering==="MEDHOLD_I_KLAGE"?e.klageVurderingOmgjoer:void 0,klageHjemmel:e.klageHjemmel,fritekstTilBrev:Va(e.fritekstTilBrev),begrunnelse:Va(e.begrunnelse),klageVurdering:Va(e.klageVurdering)});Qr.__docgenInfo={description:`BehandleklageformNfp

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
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}}]}},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const et=({klageVurdering:e})=>{const r=He(),{alleKodeverk:n}=Qa(),{begrunnelse:a,fritekstTilBrev:t,klageVurdering:l,klageMedholdArsak:i,klageVurderingOmgjoer:s}=e.klageVurderingResultatNK??{},d=n.KlageMedholdÅrsak;return h.jsxs(de,{gap:"space-16",children:[h.jsx(an,{size:"small",level:"2",children:r.formatMessage({id:"Klage.ResolveKlage.Title"})}),h.jsxs(de,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),h.jsxs(X,{size:"small",children:[l==="STADFESTE_YTELSESVEDTAK"&&h.jsx(Y,{id:"Klage.ResolveKlage.KeepVedtakNk"}),l==="MEDHOLD_I_KLAGE"&&h.jsx(Y,{id:"Klage.ResolveKlage.ChangeVedtak"}),l==="HJEMSENDE_UTEN_Å_OPPHEVE"&&h.jsx(Y,{id:"Klage.Behandle.Hjemsendt"}),l==="OPPHEVE_YTELSESVEDTAK"&&h.jsx(Y,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),l==="MEDHOLD_I_KLAGE"&&h.jsxs(de,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.Cause"})}),h.jsx(X,{size:"small",children:d.find(v=>v.kode===i)?.navn}),h.jsxs(X,{size:"small",children:[s==="GUNST_MEDHOLD_I_KLAGE"&&h.jsx(Y,{id:"Klage.Behandle.Omgjort"}),s==="UGUNST_MEDHOLD_I_KLAGE"&&h.jsx(Y,{id:"Klage.Behandle.Ugunst"}),s==="DELVIS_MEDHOLD_I_KLAGE"&&h.jsx(Y,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(l==="OPPHEVE_YTELSESVEDTAK"||l==="HJEMSENDE_UTEN_Å_OPPHEVE")&&h.jsxs(de,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.Cause"})}),h.jsx(X,{size:"small",children:d.find(v=>v.kode===i)?.navn})]}),h.jsxs(de,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"FritekstKlageBrevTextField.Fritekst"})}),h.jsx(X,{size:"small",children:t})]}),h.jsxs(de,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),h.jsx(X,{size:"small",children:a})]})]})};et.__docgenInfo={description:`BehandleklageformNfp

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
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}}]}},description:""}}};const ho={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},yo=be(ho),Xa=({klageVurdering:e,saveKlage:r,previewCallback:n})=>{const{aksjonspunkterForPanel:a}=Qa();return h.jsxs(mt,{value:yo,children:[e.klageVurderingResultatNK&&h.jsx(et,{klageVurdering:e}),a.some(t=>t.definisjon===oa.MANUELL_VURDERING_AV_KLAGE_NFP)&&h.jsx(Qr,{klageVurdering:e,saveKlage:r,previewCallback:n,alleAktuelleHjemler:e.aktuelleHjemler?e.aktuelleHjemler:[]})]})};Xa.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const{action:ur}=__STORYBOOK_MODULE_ACTIONS__,ko={title:"prosess/klage/prosess-klagevurdering",component:Xa,decorators:[vt,gt],args:{saveKlage:ur("button-click"),previewCallback:ur("button-click")},render:e=>h.jsx(Xa,{...e})},Ta={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:"MEDHOLD_I_KLAGE",klageMedholdArsak:"ULIK_VURDERING",klageVurderingOmgjoer:"GUNST_MEDHOLD_I_KLAGE",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Sa={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:"STADFESTE_YTELSESVEDTAK",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},ka={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:"HJEMSENDE_UTEN_Å_OPPHEVE",klageMedholdArsak:"ULIK_VURDERING",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Ka={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:"OPPHEVE_YTELSESVEDTAK",klageMedholdArsak:"ULIK_VURDERING",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Aa={args:{aksjonspunkterForPanel:[{definisjon:oa.MANUELL_VURDERING_AV_KLAGE_NFP}],klageVurdering:{klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}};Ta.parameters={...Ta.parameters,docs:{...Ta.parameters?.docs,source:{originalSource:`{
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
