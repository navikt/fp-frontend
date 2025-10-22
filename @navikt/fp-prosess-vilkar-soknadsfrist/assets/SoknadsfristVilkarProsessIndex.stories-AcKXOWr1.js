import{g as Kt,r as k,u as wt,_ as Ya,s as za,c as Le,a as Y,R as m,b as fa,S as va,d as fn,e as vn,f as Ee,h as Gt,j as V,N as _n,i as gn,k as Sn,o as yn,l as Tn,m as Nn,n as pn,p as Rn,t as On,V as Wa,x as Dn,P as bn,w as hn,q as An}from"./iframe-CfaGgbIf.js";import{r as In}from"./index-BzLnVJLw.js";import"./preload-helper-PPVm8Dsz.js";var kn=In();const Ln=Kt(kn);function Fn(e,n){var t=e.values,a=Ya(e,["values"]),r=n.values,l=Ya(n,["values"]);return za(r,t)&&za(a,l)}function xt(e){var n=wt(),t=n.formatMessage,a=n.textComponent,r=a===void 0?k.Fragment:a,l=e.id,i=e.description,s=e.defaultMessage,d=e.values,f=e.children,c=e.tagName,v=c===void 0?r:c,_=e.ignoreTag,y={id:l,description:i,defaultMessage:s},N=t(y,d,{ignoreTag:_});return typeof f=="function"?f(Array.isArray(N)?N:[N]):v?k.createElement(v,null,N):k.createElement(k.Fragment,null,N)}xt.displayName="FormattedMessage";var _e=k.memo(xt,Fn);_e.displayName="MemoizedFormattedMessage";var ze=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.AVKLAR_ADOPSJONSDOKUMENTAJON="5004",e.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET="5007",e.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKÅRET="5011",e.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD="5014",e.FORESLÅ_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SØKERS_OPPLYSNINGSPLIKT_MANU="5017",e.VURDER_OMSORGSOVERTAKELSEVILKÅRET="5018",e.UTGÅTT_5019="5019",e.UTGÅTT_5020="5020",e.UTGÅTT_5021="5021",e.UTGÅTT_5023="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.UTGÅTT_5025="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLÅ_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE="5031",e.VURDERE_ANNEN_YTELSE_FØR_VEDTAK="5033",e.VURDERE_DOKUMENT_FØR_VEDTAK="5034",e.VURDERE_INNTEKTSMELDING_FØR_VEDTAK="5003",e.MANUELL_VURDERING_AV_KLAGE_NFP="5035",e.UTGÅTT_5036="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSØKNAD_FORELDREPENGER="5040",e.VURDER_PERMISJON_UTEN_SLUTTDATO="5041",e.MANUELL_VURDERING_AV_SØKNADSFRIST="5043",e.UTGÅTT_5048="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.UTGÅTT_5053="5053",e.AVKLAR_VILKÅR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.UTGÅTT_5056="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.AVKLAR_LØPENDE_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET="5063",e.FAKTA_UTTAK_INGEN_PERIODER="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG="5066",e.UTGÅTT_5067="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.UTGÅTT_5069="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.FASTSETT_UTTAK_STORTINGSREPRESENTANT="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.UTGÅTT_5075="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.UTGÅTT_5078="5078",e.UTGÅTT_5079="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.UTGÅTT_5083="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT="5086",e.SØKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYRING_AV_FØDSELSVILKÅRET="6003",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET="6004",e.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET="6005",e.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="6017",e.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYRING_AV_FØDSELSVILKÅRET_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKÅRET="6011",e.OVERSTYRING_AV_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKÅRET="5089",e.UTGÅTT_6012="6012",e.OVERSTYRING_AV_AVKLART_STARTDATO="6045",e.OVERSTYRING_FAKTA_UTTAK="6065",e.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FØDSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SØKNAD="7003",e.UTGÅTT_7019="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.VURDER_SVP_TILRETTELEGGING="5091",e.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE="5039",e.UTGÅTT_5042="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET="5049",e.UTGÅTT_5050="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.UTGÅTT_5080="5080",e.UTGÅTT_5090="5090",e))(ze||{});const Fe=e=>Le({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Vn=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const jt=k.forwardRef((e,n)=>{var{className:t,size:a="medium",as:r="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:f,textColor:c}=e,v=Vn(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Y();return m.createElement(r,Object.assign({},v,{ref:n,className:_(t,"navds-body-long",`navds-body-long--${a}`,Fe({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:f,textColor:c}))}))});var Pn=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Se=k.forwardRef((e,n)=>{var{className:t,size:a="medium",as:r="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:f,textColor:c}=e,v=Pn(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Y();return m.createElement(r,Object.assign({},v,{ref:n,className:_(t,"navds-body-short",`navds-body-short--${a}`,Fe({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:f,textColor:c}))}))});var Kn=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const pa=k.forwardRef((e,n)=>{var{className:t,size:a="medium",spacing:r,uppercase:l,as:i="p",truncate:s,weight:d="regular",align:f,visuallyHidden:c,textColor:v}=e,_=Kn(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=Y();return m.createElement(i,Object.assign({},_,{ref:n,className:y(t,"navds-detail",Fe({spacing:r,truncate:s,weight:d,align:f,visuallyHidden:c,textColor:v,uppercase:l}),{"navds-detail--small":a==="small"})}))});var wn=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Mt=k.forwardRef((e,n)=>{var{children:t,className:a,size:r,spacing:l,as:i="p",showIcon:s=!1}=e,d=wn(e,["children","className","size","spacing","as","showIcon"]);const{cn:f}=Y();return m.createElement(i,Object.assign({},d,{ref:n,className:f("navds-error-message","navds-label",a,Fe({spacing:l}),{"navds-label--small":r==="small","navds-error-message--show-icon":s})}),s&&m.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var Gn=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Qa=k.forwardRef((e,n)=>{var{level:t="1",size:a,className:r,as:l,spacing:i,align:s,visuallyHidden:d,textColor:f}=e,c=Gn(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:v}=Y(),_=l??`h${t}`;return m.createElement(_,Object.assign({},c,{ref:n,className:v(r,"navds-heading",`navds-heading--${a}`,Fe({spacing:i,align:s,visuallyHidden:d,textColor:f}))}))});var xn=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};k.forwardRef((e,n)=>{var{className:t,spacing:a,as:r="p"}=e,l=xn(e,["className","spacing","as"]);const{cn:i}=Y();return m.createElement(r,Object.assign({},l,{ref:n,className:i(t,"navds-ingress",{"navds-typo--spacing":!!a})}))});var jn=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const _a=k.forwardRef((e,n)=>{var{className:t,size:a="medium",as:r="label",spacing:l,visuallyHidden:i,textColor:s}=e,d=jn(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:f}=Y();return m.createElement(r,Object.assign({},d,{ref:n,className:f(t,"navds-label",Fe({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":a==="small"})}))});function Ut(e,n=166,t=!1){let a;function r(...l){const i=()=>{a=void 0,e.apply(this,l)};!a&&t&&i(),clearTimeout(a),a=setTimeout(i,n)}return r.clear=()=>{clearTimeout(a)},r}function de(e,n){const t=Object.entries(e).filter(([a])=>!n.includes(a));return Object.fromEntries(t)}const Xa=globalThis?.document?k.useLayoutEffect:()=>{};let Za=0;function Mn(e){const[n,t]=k.useState(e),a=e||n;return k.useEffect(()=>{n==null&&(Za+=1,t(`aksel-id-${Za}`))},[n]),a}const et=m.useId;function Ve(e){var n;return et!==void 0?et().replace(/(:)/g,""):(n=Mn(e))!==null&&n!==void 0?n:""}function at(e,n=[]){const t=k.useRef(e);return k.useEffect(()=>{t.current=e}),k.useCallback(((...a)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...a)}),n)}function Un({value:e,defaultValue:n,onChange:t}){const a=at(t),[r,l]=k.useState(n),i=e!==void 0,s=i?e:r,d=at(f=>{const v=typeof f=="function"?f(s):f;i||l(v),a(v)},[i,a,s]);return[s,d]}let tt=0;function qn(e){const[n,t]=k.useState(e),a=e||n;return k.useEffect(()=>{n==null&&(tt+=1,t(`aksel-icon-${tt}`))},[n]),a}const nt=m.useId;function Fa(e){var n;return nt!==void 0?nt().replace(/(:)/g,""):(n=qn(e))!==null&&n!==void 0?n:""}var Bn=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Cn=k.forwardRef((e,n)=>{var{title:t,titleId:a}=e,r=Bn(e,["title","titleId"]);let l=Fa();return l=t?a||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},r),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var $n=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const qt=k.forwardRef((e,n)=>{var{title:t,titleId:a}=e,r=$n(e,["title","titleId"]);let l=Fa();return l=t?a||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},r),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Hn=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Jn=k.forwardRef((e,n)=>{var{title:t,titleId:a}=e,r=Hn(e,["title","titleId"]);let l=Fa();return l=t?a||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},r),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});function Va(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e?.(r),t===!1||!r.defaultPrevented)return n?.(r)}}function Ra(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function qe(e){return(n,t)=>{const a=t?.context?String(t.context):"standalone";let r;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=t?.width?String(t.width):i;r=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=t?.width?String(t.width):e.defaultWidth;r=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(n):n;return r[l]}}function Be(e){return(n,t={})=>{const a=t.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=n.match(r);if(!l)return null;const i=l[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?zn(s,v=>v.test(i)):Yn(s,v=>v.test(i));let f;f=e.valueCallback?e.valueCallback(d):d,f=t.valueCallback?t.valueCallback(f):f;const c=n.slice(i.length);return{value:f,rest:c}}}function Yn(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function zn(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Wn(e){return(n,t={})=>{const a=n.match(e.matchPattern);if(!a)return null;const r=a[0],l=n.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=t.valueCallback?t.valueCallback(i):i;const s=n.slice(r.length);return{value:i,rest:s}}}const Qn={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Xn=(e,n,t)=>{let a;const r=Qn[e];return typeof r=="string"?a=r:n===1?a=r.one:a=r.other.replace("{{count}}",String(n)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+a:a+" siden":a},Zn={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},er={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ar={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},tr={date:Ra({formats:Zn,defaultWidth:"full"}),time:Ra({formats:er,defaultWidth:"full"}),dateTime:Ra({formats:ar,defaultWidth:"full"})},nr={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},rr=(e,n,t,a)=>nr[e],lr={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},ir={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},sr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},or={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ur={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},dr=(e,n)=>Number(e)+".",cr={ordinalNumber:dr,era:qe({values:lr,defaultWidth:"wide"}),quarter:qe({values:ir,defaultWidth:"wide",argumentCallback:e=>e-1}),month:qe({values:sr,defaultWidth:"wide"}),day:qe({values:or,defaultWidth:"wide"}),dayPeriod:qe({values:ur,defaultWidth:"wide"})},mr=/^(\d+)\.?/i,Er=/\d+/i,fr={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},vr={any:[/^f/i,/^e/i]},_r={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},gr={any:[/1/i,/2/i,/3/i,/4/i]},Sr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},yr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Tr={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Nr={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},pr={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Rr={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Or={ordinalNumber:Wn({matchPattern:mr,parsePattern:Er,valueCallback:e=>parseInt(e,10)}),era:Be({matchPatterns:fr,defaultMatchWidth:"wide",parsePatterns:vr,defaultParseWidth:"any"}),quarter:Be({matchPatterns:_r,defaultMatchWidth:"wide",parsePatterns:gr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Be({matchPatterns:Sr,defaultMatchWidth:"wide",parsePatterns:yr,defaultParseWidth:"any"}),day:Be({matchPatterns:Tr,defaultMatchWidth:"wide",parsePatterns:Nr,defaultParseWidth:"any"}),dayPeriod:Be({matchPatterns:pr,defaultMatchWidth:"any",parsePatterns:Rr,defaultParseWidth:"any"})},Dr={code:"nb",formatDistance:Xn,formatLong:tr,formatRelative:rr,localize:cr,match:Or,options:{weekStartsOn:1,firstWeekContainsDate:4}},br={global:{dateLocale:Dr,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},hr=k.createContext({locale:br}),Ar=()=>k.useContext(hr),rt=/(\w+)/g;function Ir(e,n){const t=Array.isArray(e)?e:kr(e);for(const a of n){if(!a)continue;let r=a;for(let l=0;l<t.length;l++){const i=r[t[l]];i!==void 0&&(r=i)}if(typeof r=="string")return r}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function kr(e){const n=[];let t=rt.exec(e);for(;t;){const[,a,r]=t;n.push(a||r),t=rt.exec(e)}return n}const Lr=/{[^}]*}/g;function Pa(e,...n){const t=Ar(),a=t.translations||[],r=[...n,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],t.locale[e]];return(i,s)=>{const d=Ir(i,r);return s?d.replace(Lr,f=>{const c=f.substring(1,f.length-1);if(s[c]===void 0){const v=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${c}'. The following replacements were passed: '${v}'`)}return s[c]}):d}}var Fr=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Vr=k.forwardRef((e,n)=>{var{className:t,size:a="medium",title:r,transparent:l=!1,variant:i="neutral",id:s,"data-color":d}=e,f=Fr(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:c}=Y(),v=Ve(),_=Pa("Loader");return m.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${v}`,ref:n,className:c("navds-loader",t,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??Pr(i)},de(f,["children"]),{"data-variant":i}),m.createElement("title",{id:s??`loader-${v}`},r||_("title")),m.createElement("circle",{className:c("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),m.createElement("circle",{className:c("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Pr(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Kr=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const wr=k.forwardRef((e,n)=>{var{as:t="button",variant:a="primary",className:r,children:l,size:i="medium",loading:s=!1,disabled:d,icon:f,iconPosition:c="left",onKeyUp:v,"data-color":_}=e,y=Kr(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:N}=Y(),D=d||s?de(y,["href"]):y,g=A=>{A.key===" "&&!d&&!s&&A.currentTarget.click()};return m.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":_??Gr(a),"data-variant":xr(a)},D,{ref:n,onKeyUp:Va(v,g),className:N(r,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!f&&!l,"navds-button--disabled":d??s}),disabled:d??s?!0:void 0}),f&&c==="left"&&m.createElement("span",{className:N("navds-button__icon")},f),s&&m.createElement(Vr,{size:i}),l&&m.createElement(_a,{as:"span",size:i==="medium"?"medium":"small"},l),f&&c==="right"&&m.createElement("span",{className:N("navds-button__icon")},f))});function Gr(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function xr(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}const Bt=()=>{const{cn:e}=Y();return m.createElement(qt,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},jr=()=>{const{cn:e}=Y();return m.createElement(qt,{title:Pa("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var Mr=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Ur=k.forwardRef((e,n)=>{var{className:t,header:a,children:r,open:l,defaultOpen:i=!1,onClick:s,size:d="medium",onOpenChange:f}=e,c=Mr(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:v}=Y(),[_,y]=Un({defaultValue:i,value:l,onChange:f}),N=d==="small"?"small":"medium";return m.createElement("div",{className:v("navds-read-more",`navds-read-more--${d}`,t,{"navds-read-more--open":_}),"data-volume":"low"},m.createElement("button",Object.assign({},c,{ref:n,type:"button",className:v("navds-read-more__button","navds-body-short",{"navds-body-short--small":d==="small"}),onClick:Va(s,()=>y(D=>!D)),"aria-expanded":_,"data-state":_?"open":"closed"}),m.createElement(Cn,{className:v("navds-read-more__expand-icon"),"aria-hidden":!0}),m.createElement("span",null,a)),m.createElement(jt,{as:"div",tabIndex:0,className:v("navds-read-more__content",{"navds-read-more__content--closed":!_}),size:N,"data-state":_?"open":"closed"},r))}),sa=k.createContext(null),Ka=(e,n)=>{var t,a,r;const{size:l,error:i,errorId:s}=e,d=k.useContext(sa),f=Ve(),c=(t=e.id)!==null&&t!==void 0?t:`${n}-${f}`,v=s??`${n}-error-${f}`,_=`${n}-description-${f}`,y=d?.disabled||e.disabled,N=(d?.readOnly||e.readOnly)&&!y||void 0,D=!y&&!N&&!!(i||d?.error),g=!y&&!N&&!!i&&typeof i!="boolean",A=Object.assign({},D?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:g,hasError:D,errorId:v,inputDescriptionId:_,size:(a=l??d?.size)!==null&&a!==void 0?a:"medium",readOnly:N,inputProps:Object.assign(Object.assign({id:c},A),{"aria-describedby":Le(e["aria-describedby"],{[_]:e.description&&!oa(e.description),[v]:g,[(r=d?.errorId)!==null&&r!==void 0?r:""]:D&&d?.error})||void 0,disabled:y})}};function oa(e,n=!0){if(m.isValidElement(e)){if(e.type===Ur)return!0;if(e.props.children&&n)return oa(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>oa(t,n));return!1}function Z(e,n,t,a){return a?typeof a=="string"?{[`--__${e}c-${n}-${t}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([r,l])=>[`--__${e}c-${n}-${t}-${r}`,l])):{}}const qr={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Br={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},lt=(e,n,t,a,r,l)=>n.split(" ").map((i,s,d)=>{var f,c;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let v=`var(--${l}-${t}-${i})`;if(a.includes(i))v=i==="px"?"1px":i;else if(t==="spacing"&&i.startsWith("space"))v=`var(--${l}-${i})`;else if(t==="spacing"){const _=`--${l}-spacing-${i}`;v=`var(${(f=qr[_])!==null&&f!==void 0?f:_})`}else if(t==="radius"){const _=(c=Br[i])!==null&&c!==void 0?c:i;v=`var(--${l}-radius-${_})`}return r?i==="0"?"0":`calc(-1 * ${v})`:v}).join(" ");function re(e,n,t,a,r,l=!1,i=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${n}-${t}-xs`]:lt(t,r,a,i,l,e)};const s={};return Object.entries(r).forEach(([d,f])=>{s[`--__${e}c-${n}-${t}-${d}`]=lt(t,f,a,i,l,e)}),s}const wa=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Ga=({children:e,className:n,padding:t,paddingInline:a,paddingBlock:r,margin:l,marginInline:i,marginBlock:s,width:d,minWidth:f,maxWidth:c,height:v,minHeight:_,maxHeight:y,position:N,inset:D,top:g,right:A,left:p,bottom:I,overflow:F,overflowX:P,overflowY:C,flexBasis:G,flexGrow:U,flexShrink:w,gridColumn:j})=>{const x=fa(!1),{cn:h}=Y(),R=x?.isDarkside?"ax":"a",K=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},re(R,"r","p","spacing",t)),re(R,"r","pi","spacing",a)),re(R,"r","pb","spacing",r)),re(R,"r","m","spacing",l)),re(R,"r","mi","spacing",i)),re(R,"r","mb","spacing",s)),Z(R,"r","w",d)),Z(R,"r","minw",f)),Z(R,"r","maxw",c)),Z(R,"r","h",v)),Z(R,"r","minh",_)),Z(R,"r","maxh",y)),Z(R,"r","position",N)),re(R,"r","inset","spacing",D)),re(R,"r","top","spacing",g)),re(R,"r","right","spacing",A)),re(R,"r","bottom","spacing",I)),re(R,"r","left","spacing",p)),Z(R,"r","overflow",F)),Z(R,"r","overflowx",P)),Z(R,"r","overflowy",C)),Z(R,"r","flex-basis",G)),Z(R,"r","flex-grow",U)),Z(R,"r","flex-shrink",w)),Z(R,"r","grid-column",j));return m.createElement(va,{className:h({className:n,"navds-r-p":t,"navds-r-pi":a,"navds-r-pb":r,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":d,"navds-r-minw":f,"navds-r-maxw":c,"navds-r-h":v,"navds-r-minh":_,"navds-r-maxh":y,"navds-r-position":N,"navds-r-inset":D,"navds-r-top":g,"navds-r-right":A,"navds-r-bottom":I,"navds-r-left":p,"navds-r-overflow":F,"navds-r-overflowx":P,"navds-r-overflowy":C,"navds-r-flex-basis":G,"navds-r-flex-grow":U,"navds-r-flex-shrink":w,"navds-r-grid-column":j}),style:K},e)};var Cr=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const $r=k.forwardRef((e,n)=>{var{children:t,className:a,as:r="div",background:l,borderColor:i,borderWidth:s,borderRadius:d,shadow:f,style:c,asChild:v}=e,_=Cr(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:y}=Y(),N=Object.assign(Object.assign(Object.assign({},c),{"--__axc-box-background":l?`var(--ax-bg-${l})`:void 0,"--__axc-box-shadow":f?`var(--ax-shadow-${f})`:void 0,"--__axc-box-border-color":i?`var(--ax-border-${i})`:void 0,"--__axc-box-border-width":s?s.split(" ").map(g=>`${g}px`).join(" "):void 0}),re("ax","box","radius","radius",d,!1,["0"])),D=v?va:r;return m.createElement(Ga,Object.assign({},_),m.createElement(D,Object.assign({},de(_,wa),{ref:n,style:N,className:y("navds-box",a,{"navds-box-bg":l,"navds-box-border-color":i,"navds-box-border-width":s,"navds-box-radius":d,"navds-box-shadow":f})}),t))});var Hr=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Jr=k.forwardRef((e,n)=>{var{children:t,className:a,as:r="div",background:l,borderColor:i,borderWidth:s,borderRadius:d,shadow:f,style:c,asChild:v}=e,_=Hr(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const y=fa(!1),{cn:N}=Y(),D=y?.isDarkside?"ax":"a",g=Object.assign(Object.assign(Object.assign({},c),{[`--__${D}c-box-background`]:l?`var(--a-${l})`:void 0,[`--__${D}c-box-shadow`]:f?`var(--a-shadow-${f})`:void 0,[`--__${D}c-box-border-color`]:i?`var(--a-${i})`:void 0,[`--__${D}c-box-border-width`]:s?s.split(" ").map(p=>`${p}px`).join(" "):void 0}),re(D,"box","radius","radius",d,!1,["0"])),A=v?va:r;return m.createElement(Ga,Object.assign({},_),m.createElement(A,Object.assign({},de(_,wa),{ref:n,style:g,className:N("navds-box",a,{"navds-box-bg":l,"navds-box-border-color":i,"navds-box-border-width":s,"navds-box-border-radius":d&&!y?.isDarkside,"navds-box-radius":d&&y?.isDarkside,"navds-box-shadow":f})}),t))}),Ct=Jr;Ct.New=$r;var Yr=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const $t=k.forwardRef((e,n)=>{var{children:t,className:a,as:r="div",align:l,justify:i,wrap:s=!0,gap:d,style:f,direction:c="row",asChild:v}=e,_=Yr(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const y=fa(!1),N=y?.isDarkside?"ax":"a",{cn:D}=Y(),g=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},f),re(N,"stack","gap","spacing",d)),Z(N,"stack","direction",c)),Z(N,"stack","align",l)),Z(N,"stack","justify",i)),A=v?va:r;return m.createElement(Ga,Object.assign({},_),m.createElement(A,Object.assign({},de(_,wa),{ref:n,style:g,className:D("navds-stack",a,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":d,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":c,"navds-stack-wrap":s})}),t))});var zr=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const ua=k.forwardRef((e,n)=>{var{as:t="div"}=e,a=zr(e,["as"]);return m.createElement($t,Object.assign({as:t},a,{ref:n,direction:"row"}))});var Wr=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Re=k.forwardRef((e,n)=>{var{as:t="div"}=e,a=Wr(e,["as"]);return m.createElement($t,Object.assign({as:t},a,{ref:n,direction:"column",wrap:!1}))});var Qr=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Xr=k.forwardRef((e,n)=>{var{children:t,className:a,variant:r,size:l="medium",icon:i,"data-color":s}=e,d=Qr(e,["children","className","variant","size","icon","data-color"]);const{cn:f}=Y(),c=r?.endsWith("-filled")&&"strong",v=r?.endsWith("-moderate")&&"moderate";return m.createElement(Se,Object.assign({"data-color":s??Zr(r),"data-variant":c||v||"outline"},d,{ref:n,as:"span",size:l==="medium"?"medium":"small",className:f("navds-tag",a,`navds-tag--${r}`,`navds-tag--${l}`)}),i&&m.createElement("span",{className:f("navds-tag__icon--left")},i),t)});function Zr(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const el=(e,n)=>{const t=Ka(e,"fieldset");return Object.assign(Object.assign({},t),{inputProps:{"aria-labelledby":e["aria-labelledby"]||Le(n,{[t.inputDescriptionId]:e.description&&!oa(e.description)})}})};var al=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const tl=k.forwardRef((e,n)=>{var t,a,r;const l=Ve(),{inputProps:i,errorId:s,showErrorMsg:d,hasError:f,size:c,readOnly:v,inputDescriptionId:_}=el(e,l),{cn:y}=Y(),N=k.useContext(sa),{children:D,className:g,errorPropagation:A=!0,legend:p,description:I,hideLegend:F,nativeReadOnly:P=!0}=e,C=al(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return m.createElement(sa.Provider,{value:{error:A?(t=e.error)!==null&&t!==void 0?t:N?.error:void 0,errorId:Le({[s]:d,[(a=N?.errorId)!==null&&a!==void 0?a:""]:!!N?.error}),size:c,disabled:(r=e.disabled)!==null&&r!==void 0?r:!1,readOnly:v}},m.createElement("fieldset",Object.assign({},de(C,["errorId","error","size","readOnly"]),i,{ref:n,className:y(g,"navds-fieldset",`navds-fieldset--${c}`,{"navds-fieldset--error":f,"navds-fieldset--readonly":v})}),m.createElement(_a,{id:l,size:c,as:"legend",className:y("navds-fieldset__legend",{"navds-sr-only":!!F})},v&&(P?m.createElement(Bt,null):m.createElement(jr,null)),p),!!I&&m.createElement(Se,{className:y("navds-fieldset__description",{"navds-sr-only":!!F}),id:_,size:c??"medium",as:"div"},e.description),D,m.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:y("navds-fieldset__error")},d&&m.createElement(Mt,{size:c,showIcon:!0},e.error))))});var nl=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Ht=m.createContext(null),rl=k.forwardRef((e,n)=>{var t,a,{children:r,className:l,name:i,defaultValue:s,value:d,onChange:f=()=>{},required:c,readOnly:v}=e,_=nl(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:y}=Y(),N=k.useContext(sa),D=Ve();return m.createElement(tl,Object.assign({},_,{readOnly:v,ref:n,className:y(l,"navds-radio-group",`navds-radio-group--${(a=(t=_.size)!==null&&t!==void 0?t:N?.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),m.createElement(Ht.Provider,{value:{name:i??`radioGroupName-${D}`,defaultValue:s,value:d,onChange:f,required:c}},m.createElement("div",{className:y("navds-radio-buttons")},r)))});var ll=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const il=e=>{const n=k.useContext(Ht),t=Ka(de(e,["description"]),"radio"),{inputProps:a,readOnly:r}=t,l=ll(t,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:r,inputProps:Object.assign(Object.assign({},a),{name:n?.name,defaultChecked:n?.defaultValue===void 0?void 0:n?.defaultValue===e.value,checked:n?.value===void 0?void 0:n?.value===e.value,onChange:i=>{var s,d;r||((s=e.onChange)===null||s===void 0||s.call(e,i),(d=n?.onChange)===null||d===void 0||d.call(n,e.value))},onClick:i=>{var s;if(r){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:n?.required,type:"radio"})})},it=k.forwardRef((e,n)=>{const{cn:t}=Y(),{inputProps:a,size:r,hasError:l,readOnly:i}=il(e),s=Ve(),d=fa(!1);return d?.isDarkside?m.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${r}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},m.createElement("input",Object.assign({},de(e,["children","size","description","readOnly"]),de(a,["aria-invalid","aria-describedby"]),{"aria-describedby":Le(a["aria-describedby"],{[s]:e.description})||void 0,className:t("navds-radio__input"),ref:n})),m.createElement(Se,{as:"label",htmlFor:a.id,className:t("navds-radio__label"),size:r},e.children),e.description&&m.createElement(Se,{id:s,size:r,className:t("navds-form-field__subdescription navds-radio__description")},e.description)):m.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${r}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},m.createElement("input",Object.assign({},de(e,["children","size","description","readOnly"]),de(a,["aria-invalid"]),{className:t("navds-radio__input"),ref:n})),m.createElement("label",{htmlFor:a.id,className:t("navds-radio__label")},m.createElement("span",{className:t("navds-radio__content")},m.createElement(Se,{as:"span",size:r},e.children),e.description&&m.createElement(Se,{as:"span",size:r,className:t("navds-form-field__subdescription navds-radio__description")},e.description))))});var sl=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const st=(e,n,t)=>{const{outerHeightStyle:a,overflow:r}=n;return t.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==r)?(t.current+=1,n):e},ot=e=>(e?.ownerDocument||document).defaultView||window;function na(e){return parseInt(e,10)||0}const ol=k.forwardRef((e,n)=>{var t,a,{className:r,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:d,style:f,value:c}=e,v=sl(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:_}=k.useRef(c!=null),y=k.useRef(null),N=fn(y,n),D=k.useRef(null),g=k.useRef(0),[A,p]=k.useState({outerHeightStyle:0}),I=m.useCallback(()=>{const G=y.current,w=ot(G).getComputedStyle(G);if(w.width==="0px")return{outerHeightStyle:0};const j=D.current;j.style.width=w.width,j.value=G.value||v.placeholder||"x",j.value.slice(-1)===`
`&&(j.value+=" ");const x=w.boxSizing,h=na(w.paddingBottom)+na(w.paddingTop),R=na(w.borderBottomWidth)+na(w.borderTopWidth),K=j.scrollHeight-h;j.value="x";const q=j.scrollHeight-h;let M=K;s&&(M=Math.max(Number(s)*q,M)),i&&(M=Math.min(Number(i)*q,M)),M=Math.max(M,q);const X=M+(x==="border-box"?h+R:0),te=Math.abs(M-K)<=1;return{outerHeightStyle:X,overflow:te}},[i,s,v.placeholder]),F=()=>{const G=I();ut(G)||p(U=>st(U,G,g))};Xa(()=>{const G=()=>{const h=I();ut(h)||Ln.flushSync(()=>{p(R=>st(R,h,g))})},U=Ut(()=>{var h,R,K;if(g.current=0,!((h=y.current)===null||h===void 0)&&h.style.height||!((R=y.current)===null||R===void 0)&&R.style.width){((K=y.current)===null||K===void 0?void 0:K.style.overflow)==="hidden"&&p(q=>Object.assign(Object.assign({},q),{overflow:!1}));return}G()},166,!0),w=y.current,j=ot(w);j.addEventListener("resize",U);let x;return typeof ResizeObserver<"u"&&(x=new ResizeObserver(U),x.observe(w)),()=>{U.clear(),j.removeEventListener("resize",U),x&&x.disconnect()}},[I]),Xa(()=>{F()}),k.useEffect(()=>{g.current=0},[c]);const P=G=>{g.current=0,_||F(),l&&l(G)},C=Object.assign({"--__ac-textarea-height":A.outerHeightStyle+"px","--__axc-textarea-height":A.outerHeightStyle+"px",overflow:A.overflow&&!d&&!(!((t=y.current)===null||t===void 0)&&t.style.height)&&!(!((a=y.current)===null||a===void 0)&&a.style.width)?"hidden":void 0},f);return m.createElement(m.Fragment,null,m.createElement("textarea",Object.assign({value:c,onChange:P,ref:N,rows:s,style:C},v,{className:r})),m.createElement("textarea",{"aria-hidden":!0,className:r,readOnly:!0,ref:D,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},f)}))});function ut(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const ul=({maxLengthId:e,maxLength:n,currentLength:t,size:a,i18n:r})=>{const{cn:l}=Y(),i=Pa("Textarea",{charsLeft:r?.counterLeft?`{chars} ${r.counterLeft}`:void 0,charsTooMany:r?.counterTooMuch?`{chars} ${r.counterTooMuch}`:void 0}),s=n-t,[d,f]=k.useState(s);return k.useEffect(()=>{const c=Ut(()=>{f(s)},2e3);return c(),()=>{c.clear()}},[s]),m.createElement(m.Fragment,null,m.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:n})),s<20&&m.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},dt(d,i)),m.createElement(Se,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:a},dt(s,i)))},dt=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var dl=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const cl=k.forwardRef((e,n)=>{var t,a,r;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:d,size:f,inputDescriptionId:c}=Ka(e,"textarea"),{label:v,className:_,description:y,maxLength:N,hideLabel:D=!1,resize:g,UNSAFE_autoScrollbar:A,i18n:p,readOnly:I}=e,F=dl(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:P}=Y(),C=Ve(),G=N!==void 0&&N>0,[U,w]=k.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),j=()=>{let h=F?.minRows?F?.minRows:3;return f==="small"&&(h=F?.minRows?F?.minRows:2),h},x=Le(l["aria-describedby"],{[C??""]:G});return m.createElement("div",{className:P(_,"navds-form-field",`navds-form-field--${f}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":I,"navds-textarea--readonly":I,"navds-textarea--error":d,"navds-textarea--autoscrollbar":A,[`navds-textarea--resize-${g===!0?"both":g}`]:g})},m.createElement(_a,{htmlFor:l.id,size:f,className:P("navds-form-field__label",{"navds-sr-only":D})},I&&m.createElement(Bt,null),v),!!y&&m.createElement(Se,{className:P("navds-form-field__description",{"navds-sr-only":D}),id:c,size:f,as:"div"},y),m.createElement(ol,Object.assign({},de(F,["error","errorId","size"]),l,{onChange:Va(e.onChange,e.value===void 0?h=>w(h.target.value):void 0),minRows:j(),autoScrollbar:A,ref:n,readOnly:I,className:P("navds-textarea__input","navds-body-short",`navds-body-short--${f??"medium"}`)},x?{"aria-describedby":x}:{})),G&&!I&&!l.disabled&&m.createElement(ul,{maxLengthId:C,maxLength:N,currentLength:(r=(a=e.value)===null||a===void 0?void 0:a.length)!==null&&r!==void 0?r:U.length,size:f,i18n:p}),m.createElement("div",{className:P("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&m.createElement(Mt,{size:f,showIcon:!0},e.error)))});var We=e=>e.type==="checkbox",Oe=e=>e instanceof Date,ie=e=>e==null;const Jt=e=>typeof e=="object";var W=e=>!ie(e)&&!Array.isArray(e)&&Jt(e)&&!Oe(e),Yt=e=>W(e)&&e.target?We(e.target)?e.target.checked:e.target.value:e,ml=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,zt=(e,n)=>e.has(ml(n)),El=e=>{const n=e.constructor&&e.constructor.prototype;return W(n)&&n.hasOwnProperty("isPrototypeOf")},xa=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Q(e){let n;const t=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(!(xa&&(e instanceof Blob||a))&&(t||W(e)))if(n=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!El(e))n=e;else for(const r in e)e.hasOwnProperty(r)&&(n[r]=Q(e[r]));else return e;return n}var ga=e=>/^\w*$/.test(e),J=e=>e===void 0,ja=e=>Array.isArray(e)?e.filter(Boolean):[],Ma=e=>ja(e.replace(/["|']|\]/g,"").split(/\.|\[/)),O=(e,n,t)=>{if(!n||!W(e))return t;const a=(ga(n)?[n]:Ma(n)).reduce((r,l)=>ie(r)?r:r[l],e);return J(a)||a===e?J(e[n])?t:e[n]:a},se=e=>typeof e=="boolean",H=(e,n,t)=>{let a=-1;const r=ga(n)?[n]:Ma(n),l=r.length,i=l-1;for(;++a<l;){const s=r[a];let d=t;if(a!==i){const f=e[s];d=W(f)||Array.isArray(f)?f:isNaN(+r[a+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=d,e=e[s]}};const da={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ce={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ve={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ua=m.createContext(null);Ua.displayName="HookFormContext";const Pe=()=>m.useContext(Ua),fl=e=>{const{children:n,...t}=e;return m.createElement(Ua.Provider,{value:t},n)};var Wt=(e,n,t,a=!0)=>{const r={defaultValues:n._defaultValues};for(const l in e)Object.defineProperty(r,l,{get:()=>{const i=l;return n._proxyFormState[i]!==ce.all&&(n._proxyFormState[i]=!a||ce.all),t&&(t[i]=!0),e[i]}});return r};const qa=typeof window<"u"?m.useLayoutEffect:m.useEffect;function vl(e){const n=Pe(),{control:t=n.control,disabled:a,name:r,exact:l}=e||{},[i,s]=m.useState(t._formState),d=m.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return qa(()=>t._subscribe({name:r,formState:d.current,exact:l,callback:f=>{!a&&s({...t._formState,...f})}}),[r,a,l]),m.useEffect(()=>{d.current.isValid&&t._setValid(!0)},[t]),m.useMemo(()=>Wt(i,t,d.current,!1),[i,t])}var oe=e=>typeof e=="string",Qt=(e,n,t,a,r)=>oe(e)?(a&&n.watch.add(e),O(t,e,r)):Array.isArray(e)?e.map(l=>(a&&n.watch.add(l),O(t,l))):(a&&(n.watchAll=!0),t),Aa=e=>ie(e)||!Jt(e);function ge(e,n,t=new WeakSet){if(Aa(e)||Aa(n))return e===n;if(Oe(e)&&Oe(n))return e.getTime()===n.getTime();const a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;if(t.has(e)||t.has(n))return!0;t.add(e),t.add(n);for(const l of a){const i=e[l];if(!r.includes(l))return!1;if(l!=="ref"){const s=n[l];if(Oe(i)&&Oe(s)||W(i)&&W(s)||Array.isArray(i)&&Array.isArray(s)?!ge(i,s,t):i!==s)return!1}}return!0}function _l(e){const n=Pe(),{control:t=n.control,name:a,defaultValue:r,disabled:l,exact:i,compute:s}=e||{},d=m.useRef(r),f=m.useRef(s),c=m.useRef(void 0);f.current=s;const v=m.useMemo(()=>t._getWatch(a,d.current),[t,a]),[_,y]=m.useState(f.current?f.current(v):v);return qa(()=>t._subscribe({name:a,formState:{values:!0},exact:i,callback:N=>{if(!l){const D=Qt(a,t._names,N.values||t._formValues,!1,d.current);if(f.current){const g=f.current(D);ge(g,c.current)||(y(g),c.current=g)}else y(D)}}}),[t,l,a,i]),m.useEffect(()=>t._removeUnmounted()),_}function Xt(e){const n=Pe(),{name:t,disabled:a,control:r=n.control,shouldUnregister:l,defaultValue:i}=e,s=zt(r._names.array,t),d=m.useMemo(()=>O(r._formValues,t,O(r._defaultValues,t,i)),[r,t,i]),f=_l({control:r,name:t,defaultValue:d,exact:!0}),c=vl({control:r,name:t,exact:!0}),v=m.useRef(e),_=m.useRef(void 0),y=m.useRef(r.register(t,{...e.rules,value:f,...se(e.disabled)?{disabled:e.disabled}:{}}));v.current=e;const N=m.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!O(c.errors,t)},isDirty:{enumerable:!0,get:()=>!!O(c.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!O(c.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!O(c.validatingFields,t)},error:{enumerable:!0,get:()=>O(c.errors,t)}}),[c,t]),D=m.useCallback(I=>y.current.onChange({target:{value:Yt(I),name:t},type:da.CHANGE}),[t]),g=m.useCallback(()=>y.current.onBlur({target:{value:O(r._formValues,t),name:t},type:da.BLUR}),[t,r._formValues]),A=m.useCallback(I=>{const F=O(r._fields,t);F&&I&&(F._f.ref={focus:()=>I.focus&&I.focus(),select:()=>I.select&&I.select(),setCustomValidity:P=>I.setCustomValidity(P),reportValidity:()=>I.reportValidity()})},[r._fields,t]),p=m.useMemo(()=>({name:t,value:f,...se(a)||c.disabled?{disabled:c.disabled||a}:{},onChange:D,onBlur:g,ref:A}),[t,a,c.disabled,D,g,A,f]);return m.useEffect(()=>{const I=r._options.shouldUnregister||l,F=_.current;F&&F!==t&&!s&&r.unregister(F),r.register(t,{...v.current.rules,...se(v.current.disabled)?{disabled:v.current.disabled}:{}});const P=(C,G)=>{const U=O(r._fields,C);U&&U._f&&(U._f.mount=G)};if(P(t,!0),I){const C=Q(O(r._options.defaultValues,t,v.current.defaultValue));H(r._defaultValues,t,C),J(O(r._formValues,t))&&H(r._formValues,t,C)}return!s&&r.register(t),_.current=t,()=>{(s?I&&!r._state.action:I)?r.unregister(t):P(t,!1)}},[t,r,s,l]),m.useEffect(()=>{r._setDisabledField({disabled:a,name:t})},[a,t,r]),m.useMemo(()=>({field:p,formState:c,fieldState:N}),[p,c,N])}var gl=(e,n,t,a,r)=>n?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:r||!0}}:{},Je=e=>Array.isArray(e)?e:[e],ct=()=>{let e=[];return{get observers(){return e},next:r=>{for(const l of e)l.next&&l.next(r)},subscribe:r=>(e.push(r),{unsubscribe:()=>{e=e.filter(l=>l!==r)}}),unsubscribe:()=>{e=[]}}};function Zt(e,n){const t={};for(const a in e)if(e.hasOwnProperty(a)){const r=e[a],l=n[a];if(r&&W(r)&&l){const i=Zt(r,l);W(i)&&(t[a]=i)}else e[a]&&(t[a]=l)}return t}var le=e=>W(e)&&!Object.keys(e).length,Ba=e=>e.type==="file",me=e=>typeof e=="function",ca=e=>{if(!xa)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},en=e=>e.type==="select-multiple",Ca=e=>e.type==="radio",Sl=e=>Ca(e)||We(e),Oa=e=>ca(e)&&e.isConnected;function yl(e,n){const t=n.slice(0,-1).length;let a=0;for(;a<t;)e=J(e)?a++:e[n[a++]];return e}function Tl(e){for(const n in e)if(e.hasOwnProperty(n)&&!J(e[n]))return!1;return!0}function z(e,n){const t=Array.isArray(n)?n:ga(n)?[n]:Ma(n),a=t.length===1?e:yl(e,t),r=t.length-1,l=t[r];return a&&delete a[l],r!==0&&(W(a)&&le(a)||Array.isArray(a)&&Tl(a))&&z(e,t.slice(0,-1)),e}var Nl=e=>{for(const n in e)if(me(e[n]))return!0;return!1};function an(e){return Array.isArray(e)||W(e)&&!Nl(e)}function Ia(e,n={}){for(const t in e)an(e[t])?(n[t]=Array.isArray(e[t])?[]:{},Ia(e[t],n[t])):J(e[t])||(n[t]=!0);return n}function ke(e,n,t){t||(t=Ia(n));for(const a in e)an(e[a])?J(n)||Aa(t[a])?t[a]=Ia(e[a],Array.isArray(e[a])?[]:{}):ke(e[a],ie(n)?{}:n[a],t[a]):t[a]=!ge(e[a],n[a]);return t}const mt={value:!1,isValid:!1},Et={value:!0,isValid:!0};var tn=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!J(e[0].attributes.value)?J(e[0].value)||e[0].value===""?Et:{value:e[0].value,isValid:!0}:Et:mt}return mt},nn=(e,{valueAsNumber:n,valueAsDate:t,setValueAs:a})=>J(e)?e:n?e===""?NaN:e&&+e:t&&oe(e)?new Date(e):a?a(e):e;const ft={isValid:!1,value:null};var rn=e=>Array.isArray(e)?e.reduce((n,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:n,ft):ft;function vt(e){const n=e.ref;return Ba(n)?n.files:Ca(n)?rn(e.refs).value:en(n)?[...n.selectedOptions].map(({value:t})=>t):We(n)?tn(e.refs).value:nn(J(n.value)?e.ref.value:n.value,e)}var pl=(e,n,t,a)=>{const r={};for(const l of e){const i=O(n,l);i&&H(r,l,i._f)}return{criteriaMode:t,names:[...e],fields:r,shouldUseNativeValidation:a}},ma=e=>e instanceof RegExp,Ce=e=>J(e)?e:ma(e)?e.source:W(e)?ma(e.value)?e.value.source:e.value:e,_t=e=>({isOnSubmit:!e||e===ce.onSubmit,isOnBlur:e===ce.onBlur,isOnChange:e===ce.onChange,isOnAll:e===ce.all,isOnTouch:e===ce.onTouched});const gt="AsyncFunction";var Rl=e=>!!e&&!!e.validate&&!!(me(e.validate)&&e.validate.constructor.name===gt||W(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===gt)),Ol=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),St=(e,n,t)=>!t&&(n.watchAll||n.watch.has(e)||[...n.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const Ye=(e,n,t,a)=>{for(const r of t||Object.keys(e)){const l=O(e,r);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&n(i.refs[0],r)&&!a)return!0;if(i.ref&&n(i.ref,i.name)&&!a)return!0;if(Ye(s,n))break}else if(W(s)&&Ye(s,n))break}}};function yt(e,n,t){const a=O(e,t);if(a||ga(t))return{error:a,name:t};const r=t.split(".");for(;r.length;){const l=r.join("."),i=O(n,l),s=O(e,l);if(i&&!Array.isArray(i)&&t!==l)return{name:t};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};r.pop()}return{name:t}}var Dl=(e,n,t,a)=>{t(e);const{name:r,...l}=e;return le(l)||Object.keys(l).length>=Object.keys(n).length||Object.keys(l).find(i=>n[i]===(!a||ce.all))},bl=(e,n,t)=>!e||!n||e===n||Je(e).some(a=>a&&(t?a===n:a.startsWith(n)||n.startsWith(a))),hl=(e,n,t,a,r)=>r.isOnAll?!1:!t&&r.isOnTouch?!(n||e):(t?a.isOnBlur:r.isOnBlur)?!e:(t?a.isOnChange:r.isOnChange)?e:!0,Al=(e,n)=>!ja(O(e,n)).length&&z(e,n),Il=(e,n,t)=>{const a=Je(O(e,t));return H(a,"root",n[t]),H(e,t,a),e};function Tt(e,n,t="validate"){if(oe(e)||Array.isArray(e)&&e.every(oe)||se(e)&&!e)return{type:t,message:oe(e)?e:"",ref:n}}var Ie=e=>W(e)&&!ma(e)?e:{value:e,message:""},Nt=async(e,n,t,a,r,l)=>{const{ref:i,refs:s,required:d,maxLength:f,minLength:c,min:v,max:_,pattern:y,validate:N,name:D,valueAsNumber:g,mount:A}=e._f,p=O(t,D);if(!A||n.has(D))return{};const I=s?s[0]:i,F=h=>{r&&I.reportValidity&&(I.setCustomValidity(se(h)?"":h||""),I.reportValidity())},P={},C=Ca(i),G=We(i),U=C||G,w=(g||Ba(i))&&J(i.value)&&J(p)||ca(i)&&i.value===""||p===""||Array.isArray(p)&&!p.length,j=gl.bind(null,D,a,P),x=(h,R,K,q=ve.maxLength,M=ve.minLength)=>{const X=h?R:K;P[D]={type:h?q:M,message:X,ref:i,...j(h?q:M,X)}};if(l?!Array.isArray(p)||!p.length:d&&(!U&&(w||ie(p))||se(p)&&!p||G&&!tn(s).isValid||C&&!rn(s).isValid)){const{value:h,message:R}=oe(d)?{value:!!d,message:d}:Ie(d);if(h&&(P[D]={type:ve.required,message:R,ref:I,...j(ve.required,R)},!a))return F(R),P}if(!w&&(!ie(v)||!ie(_))){let h,R;const K=Ie(_),q=Ie(v);if(!ie(p)&&!isNaN(p)){const M=i.valueAsNumber||p&&+p;ie(K.value)||(h=M>K.value),ie(q.value)||(R=M<q.value)}else{const M=i.valueAsDate||new Date(p),X=fe=>new Date(new Date().toDateString()+" "+fe),te=i.type=="time",ne=i.type=="week";oe(K.value)&&p&&(h=te?X(p)>X(K.value):ne?p>K.value:M>new Date(K.value)),oe(q.value)&&p&&(R=te?X(p)<X(q.value):ne?p<q.value:M<new Date(q.value))}if((h||R)&&(x(!!h,K.message,q.message,ve.max,ve.min),!a))return F(P[D].message),P}if((f||c)&&!w&&(oe(p)||l&&Array.isArray(p))){const h=Ie(f),R=Ie(c),K=!ie(h.value)&&p.length>+h.value,q=!ie(R.value)&&p.length<+R.value;if((K||q)&&(x(K,h.message,R.message),!a))return F(P[D].message),P}if(y&&!w&&oe(p)){const{value:h,message:R}=Ie(y);if(ma(h)&&!p.match(h)&&(P[D]={type:ve.pattern,message:R,ref:i,...j(ve.pattern,R)},!a))return F(R),P}if(N){if(me(N)){const h=await N(p,t),R=Tt(h,I);if(R&&(P[D]={...R,...j(ve.validate,R.message)},!a))return F(R.message),P}else if(W(N)){let h={};for(const R in N){if(!le(h)&&!a)break;const K=Tt(await N[R](p,t),I,R);K&&(h={...K,...j(R,K.message)},F(K.message),a&&(P[D]=h))}if(!le(h)&&(P[D]={ref:I,...h},!a))return P}}return F(!0),P};const kl={mode:ce.onSubmit,reValidateMode:ce.onChange,shouldFocusError:!0};function Ll(e={}){let n={...kl,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:me(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},a={},r=W(n.defaultValues)||W(n.values)?Q(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:Q(r),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,f=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let v={...c};const _={array:ct(),state:ct()},y=n.criteriaMode===ce.all,N=o=>u=>{clearTimeout(f),f=setTimeout(o,u)},D=async o=>{if(!n.disabled&&(c.isValid||v.isValid||o)){const u=n.resolver?le((await G()).errors):await w(a,!0);u!==t.isValid&&_.state.next({isValid:u})}},g=(o,u)=>{!n.disabled&&(c.isValidating||c.validatingFields||v.isValidating||v.validatingFields)&&((o||Array.from(s.mount)).forEach(E=>{E&&(u?H(t.validatingFields,E,u):z(t.validatingFields,E))}),_.state.next({validatingFields:t.validatingFields,isValidating:!le(t.validatingFields)}))},A=(o,u=[],E,b,T=!0,S=!0)=>{if(b&&E&&!n.disabled){if(i.action=!0,S&&Array.isArray(O(a,o))){const L=E(O(a,o),b.argA,b.argB);T&&H(a,o,L)}if(S&&Array.isArray(O(t.errors,o))){const L=E(O(t.errors,o),b.argA,b.argB);T&&H(t.errors,o,L),Al(t.errors,o)}if((c.touchedFields||v.touchedFields)&&S&&Array.isArray(O(t.touchedFields,o))){const L=E(O(t.touchedFields,o),b.argA,b.argB);T&&H(t.touchedFields,o,L)}(c.dirtyFields||v.dirtyFields)&&(t.dirtyFields=ke(r,l)),_.state.next({name:o,isDirty:x(o,u),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else H(l,o,u)},p=(o,u)=>{H(t.errors,o,u),_.state.next({errors:t.errors})},I=o=>{t.errors=o,_.state.next({errors:t.errors,isValid:!1})},F=(o,u,E,b)=>{const T=O(a,o);if(T){const S=O(l,o,J(E)?O(r,o):E);J(S)||b&&b.defaultChecked||u?H(l,o,u?S:vt(T._f)):K(o,S),i.mount&&D()}},P=(o,u,E,b,T)=>{let S=!1,L=!1;const B={name:o};if(!n.disabled){if(!E||b){(c.isDirty||v.isDirty)&&(L=t.isDirty,t.isDirty=B.isDirty=x(),S=L!==B.isDirty);const $=ge(O(r,o),u);L=!!O(t.dirtyFields,o),$?z(t.dirtyFields,o):H(t.dirtyFields,o,!0),B.dirtyFields=t.dirtyFields,S=S||(c.dirtyFields||v.dirtyFields)&&L!==!$}if(E){const $=O(t.touchedFields,o);$||(H(t.touchedFields,o,E),B.touchedFields=t.touchedFields,S=S||(c.touchedFields||v.touchedFields)&&$!==E)}S&&T&&_.state.next(B)}return S?B:{}},C=(o,u,E,b)=>{const T=O(t.errors,o),S=(c.isValid||v.isValid)&&se(u)&&t.isValid!==u;if(n.delayError&&E?(d=N(()=>p(o,E)),d(n.delayError)):(clearTimeout(f),d=null,E?H(t.errors,o,E):z(t.errors,o)),(E?!ge(T,E):T)||!le(b)||S){const L={...b,...S&&se(u)?{isValid:u}:{},errors:t.errors,name:o};t={...t,...L},_.state.next(L)}},G=async o=>{g(o,!0);const u=await n.resolver(l,n.context,pl(o||s.mount,a,n.criteriaMode,n.shouldUseNativeValidation));return g(o),u},U=async o=>{const{errors:u}=await G(o);if(o)for(const E of o){const b=O(u,E);b?H(t.errors,E,b):z(t.errors,E)}else t.errors=u;return u},w=async(o,u,E={valid:!0})=>{for(const b in o){const T=o[b];if(T){const{_f:S,...L}=T;if(S){const B=s.array.has(S.name),$=T._f&&Rl(T._f);$&&c.validatingFields&&g([S.name],!0);const ue=await Nt(T,s.disabled,l,y,n.shouldUseNativeValidation&&!u,B);if($&&c.validatingFields&&g([S.name]),ue[S.name]&&(E.valid=!1,u))break;!u&&(O(ue,S.name)?B?Il(t.errors,ue,S.name):H(t.errors,S.name,ue[S.name]):z(t.errors,S.name))}!le(L)&&await w(L,u,E)}}return E.valid},j=()=>{for(const o of s.unMount){const u=O(a,o);u&&(u._f.refs?u._f.refs.every(E=>!Oa(E)):!Oa(u._f.ref))&&Ge(o)}s.unMount=new Set},x=(o,u)=>!n.disabled&&(o&&u&&H(l,o,u),!ge(fe(),r)),h=(o,u,E)=>Qt(o,s,{...i.mount?l:J(u)?r:oe(o)?{[o]:u}:u},E,u),R=o=>ja(O(i.mount?l:r,o,n.shouldUnregister?O(r,o,[]):[])),K=(o,u,E={})=>{const b=O(a,o);let T=u;if(b){const S=b._f;S&&(!S.disabled&&H(l,o,nn(u,S)),T=ca(S.ref)&&ie(u)?"":u,en(S.ref)?[...S.ref.options].forEach(L=>L.selected=T.includes(L.value)):S.refs?We(S.ref)?S.refs.forEach(L=>{(!L.defaultChecked||!L.disabled)&&(Array.isArray(T)?L.checked=!!T.find(B=>B===L.value):L.checked=T===L.value||!!T)}):S.refs.forEach(L=>L.checked=L.value===T):Ba(S.ref)?S.ref.value="":(S.ref.value=T,S.ref.type||_.state.next({name:o,values:Q(l)})))}(E.shouldDirty||E.shouldTouch)&&P(o,T,E.shouldTouch,E.shouldDirty,!0),E.shouldValidate&&ne(o)},q=(o,u,E)=>{for(const b in u){if(!u.hasOwnProperty(b))return;const T=u[b],S=o+"."+b,L=O(a,S);(s.array.has(o)||W(T)||L&&!L._f)&&!Oe(T)?q(S,T,E):K(S,T,E)}},M=(o,u,E={})=>{const b=O(a,o),T=s.array.has(o),S=Q(u);H(l,o,S),T?(_.array.next({name:o,values:Q(l)}),(c.isDirty||c.dirtyFields||v.isDirty||v.dirtyFields)&&E.shouldDirty&&_.state.next({name:o,dirtyFields:ke(r,l),isDirty:x(o,S)})):b&&!b._f&&!ie(S)?q(o,S,E):K(o,S,E),St(o,s)&&_.state.next({...t,name:o}),_.state.next({name:i.mount?o:void 0,values:Q(l)})},X=async o=>{i.mount=!0;const u=o.target;let E=u.name,b=!0;const T=O(a,E),S=$=>{b=Number.isNaN($)||Oe($)&&isNaN($.getTime())||ge($,O(l,E,$))},L=_t(n.mode),B=_t(n.reValidateMode);if(T){let $,ue;const ta=u.type?vt(T._f):Yt(o),ye=o.type===da.BLUR||o.type===da.FOCUS_OUT,cn=!Ol(T._f)&&!n.resolver&&!O(t.errors,E)&&!T._f.deps||hl(ye,O(t.touchedFields,E),t.isSubmitted,B,L),Ta=St(E,s,ye);H(l,E,ta),ye?(!u||!u.readOnly)&&(T._f.onBlur&&T._f.onBlur(o),d&&d(0)):T._f.onChange&&T._f.onChange(o);const Na=P(E,ta,ye),mn=!le(Na)||Ta;if(!ye&&_.state.next({name:E,type:o.type,values:Q(l)}),cn)return(c.isValid||v.isValid)&&(n.mode==="onBlur"?ye&&D():ye||D()),mn&&_.state.next({name:E,...Ta?{}:Na});if(!ye&&Ta&&_.state.next({...t}),n.resolver){const{errors:Ha}=await G([E]);if(S(ta),b){const En=yt(t.errors,a,E),Ja=yt(Ha,a,En.name||E);$=Ja.error,E=Ja.name,ue=le(Ha)}}else g([E],!0),$=(await Nt(T,s.disabled,l,y,n.shouldUseNativeValidation))[E],g([E]),S(ta),b&&($?ue=!1:(c.isValid||v.isValid)&&(ue=await w(a,!0)));b&&(T._f.deps&&(!Array.isArray(T._f.deps)||T._f.deps.length>0)&&ne(T._f.deps),C(E,ue,$,Na))}},te=(o,u)=>{if(O(t.errors,u)&&o.focus)return o.focus(),1},ne=async(o,u={})=>{let E,b;const T=Je(o);if(n.resolver){const S=await U(J(o)?o:T);E=le(S),b=o?!T.some(L=>O(S,L)):E}else o?(b=(await Promise.all(T.map(async S=>{const L=O(a,S);return await w(L&&L._f?{[S]:L}:L)}))).every(Boolean),!(!b&&!t.isValid)&&D()):b=E=await w(a);return _.state.next({...!oe(o)||(c.isValid||v.isValid)&&E!==t.isValid?{}:{name:o},...n.resolver||!o?{isValid:E}:{},errors:t.errors}),u.shouldFocus&&!b&&Ye(a,te,o?T:s.mount),b},fe=(o,u)=>{let E={...i.mount?l:r};return u&&(E=Zt(u.dirtyFields?t.dirtyFields:t.touchedFields,E)),J(o)?E:oe(o)?O(E,o):o.map(b=>O(E,b))},ee=(o,u)=>({invalid:!!O((u||t).errors,o),isDirty:!!O((u||t).dirtyFields,o),error:O((u||t).errors,o),isValidating:!!O(t.validatingFields,o),isTouched:!!O((u||t).touchedFields,o)}),we=o=>{o&&Je(o).forEach(u=>z(t.errors,u)),_.state.next({errors:o?t.errors:{}})},Te=(o,u,E)=>{const b=(O(a,o,{_f:{}})._f||{}).ref,T=O(t.errors,o)||{},{ref:S,message:L,type:B,...$}=T;H(t.errors,o,{...$,...u,ref:b}),_.state.next({name:o,errors:t.errors,isValid:!1}),E&&E.shouldFocus&&b&&b.focus&&b.focus()},Sa=(o,u)=>me(o)?_.state.subscribe({next:E=>"values"in E&&o(h(void 0,u),E)}):h(o,u,!0),Ze=o=>_.state.subscribe({next:u=>{bl(o.name,u.name,o.exact)&&Dl(u,o.formState||c,Ue,o.reRenderRoot)&&o.callback({values:{...l},...t,...u,defaultValues:r})}}).unsubscribe,ya=o=>(i.mount=!0,v={...v,...o.formState},Ze({...o,formState:v})),Ge=(o,u={})=>{for(const E of o?Je(o):s.mount)s.mount.delete(E),s.array.delete(E),u.keepValue||(z(a,E),z(l,E)),!u.keepError&&z(t.errors,E),!u.keepDirty&&z(t.dirtyFields,E),!u.keepTouched&&z(t.touchedFields,E),!u.keepIsValidating&&z(t.validatingFields,E),!n.shouldUnregister&&!u.keepDefaultValue&&z(r,E);_.state.next({values:Q(l)}),_.state.next({...t,...u.keepDirty?{isDirty:x()}:{}}),!u.keepIsValid&&D()},ea=({disabled:o,name:u})=>{(se(o)&&i.mount||o||s.disabled.has(u))&&(o?s.disabled.add(u):s.disabled.delete(u))},De=(o,u={})=>{let E=O(a,o);const b=se(u.disabled)||se(n.disabled);return H(a,o,{...E||{},_f:{...E&&E._f?E._f:{ref:{name:o}},name:o,mount:!0,...u}}),s.mount.add(o),E?ea({disabled:se(u.disabled)?u.disabled:n.disabled,name:o}):F(o,!0,u.value),{...b?{disabled:u.disabled||n.disabled}:{},...n.progressive?{required:!!u.required,min:Ce(u.min),max:Ce(u.max),minLength:Ce(u.minLength),maxLength:Ce(u.maxLength),pattern:Ce(u.pattern)}:{},name:o,onChange:X,onBlur:X,ref:T=>{if(T){De(o,u),E=O(a,o);const S=J(T.value)&&T.querySelectorAll&&T.querySelectorAll("input,select,textarea")[0]||T,L=Sl(S),B=E._f.refs||[];if(L?B.find($=>$===S):S===E._f.ref)return;H(a,o,{_f:{...E._f,...L?{refs:[...B.filter(Oa),S,...Array.isArray(O(r,o))?[{}]:[]],ref:{type:S.type,name:o}}:{ref:S}}}),F(o,!1,void 0,S)}else E=O(a,o,{}),E._f&&(E._f.mount=!1),(n.shouldUnregister||u.shouldUnregister)&&!(zt(s.array,o)&&i.action)&&s.unMount.add(o)}}},be=()=>n.shouldFocusError&&Ye(a,te,s.mount),xe=o=>{se(o)&&(_.state.next({disabled:o}),Ye(a,(u,E)=>{const b=O(a,E);b&&(u.disabled=b._f.disabled||o,Array.isArray(b._f.refs)&&b._f.refs.forEach(T=>{T.disabled=b._f.disabled||o}))},0,!1))},he=(o,u)=>async E=>{let b;E&&(E.preventDefault&&E.preventDefault(),E.persist&&E.persist());let T=Q(l);if(_.state.next({isSubmitting:!0}),n.resolver){const{errors:S,values:L}=await G();t.errors=S,T=Q(L)}else await w(a);if(s.disabled.size)for(const S of s.disabled)z(T,S);if(z(t.errors,"root"),le(t.errors)){_.state.next({errors:{}});try{await o(T,E)}catch(S){b=S}}else u&&await u({...t.errors},E),be(),setTimeout(be);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:le(t.errors)&&!b,submitCount:t.submitCount+1,errors:t.errors}),b)throw b},je=(o,u={})=>{O(a,o)&&(J(u.defaultValue)?M(o,Q(O(r,o))):(M(o,u.defaultValue),H(r,o,Q(u.defaultValue))),u.keepTouched||z(t.touchedFields,o),u.keepDirty||(z(t.dirtyFields,o),t.isDirty=u.defaultValue?x(o,Q(O(r,o))):x()),u.keepError||(z(t.errors,o),c.isValid&&D()),_.state.next({...t}))},Ne=(o,u={})=>{const E=o?Q(o):r,b=Q(E),T=le(o),S=T?r:b;if(u.keepDefaultValues||(r=E),!u.keepValues){if(u.keepDirtyValues){const L=new Set([...s.mount,...Object.keys(ke(r,l))]);for(const B of Array.from(L))O(t.dirtyFields,B)?H(S,B,O(l,B)):M(B,O(S,B))}else{if(xa&&J(o))for(const L of s.mount){const B=O(a,L);if(B&&B._f){const $=Array.isArray(B._f.refs)?B._f.refs[0]:B._f.ref;if(ca($)){const ue=$.closest("form");if(ue){ue.reset();break}}}}if(u.keepFieldsRef)for(const L of s.mount)M(L,O(S,L));else a={}}l=n.shouldUnregister?u.keepDefaultValues?Q(r):{}:Q(S),_.array.next({values:{...S}}),_.state.next({values:{...S}})}s={mount:u.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!c.isValid||!!u.keepIsValid||!!u.keepDirtyValues,i.watch=!!n.shouldUnregister,_.state.next({submitCount:u.keepSubmitCount?t.submitCount:0,isDirty:T?!1:u.keepDirty?t.isDirty:!!(u.keepDefaultValues&&!ge(o,r)),isSubmitted:u.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:T?{}:u.keepDirtyValues?u.keepDefaultValues&&l?ke(r,l):t.dirtyFields:u.keepDefaultValues&&o?ke(r,o):u.keepDirty?t.dirtyFields:{},touchedFields:u.keepTouched?t.touchedFields:{},errors:u.keepErrors?t.errors:{},isSubmitSuccessful:u.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:r})},pe=(o,u)=>Ne(me(o)?o(l):o,u),Me=(o,u={})=>{const E=O(a,o),b=E&&E._f;if(b){const T=b.refs?b.refs[0]:b.ref;T.focus&&(T.focus(),u.shouldSelect&&me(T.select)&&T.select())}},Ue=o=>{t={...t,...o}},Ae={control:{register:De,unregister:Ge,getFieldState:ee,handleSubmit:he,setError:Te,_subscribe:Ze,_runSchema:G,_focusError:be,_getWatch:h,_getDirty:x,_setValid:D,_setFieldArray:A,_setDisabledField:ea,_setErrors:I,_getFieldArray:R,_reset:Ne,_resetDefaultValues:()=>me(n.defaultValues)&&n.defaultValues().then(o=>{pe(o,n.resetOptions),_.state.next({isLoading:!1})}),_removeUnmounted:j,_disableForm:xe,_subjects:_,_proxyFormState:c,get _fields(){return a},get _formValues(){return l},get _state(){return i},set _state(o){i=o},get _defaultValues(){return r},get _names(){return s},set _names(o){s=o},get _formState(){return t},get _options(){return n},set _options(o){n={...n,...o}}},subscribe:ya,trigger:ne,register:De,handleSubmit:he,watch:Sa,setValue:M,getValues:fe,reset:pe,resetField:je,clearErrors:we,unregister:Ge,setError:Te,setFocus:Me,getFieldState:ee};return{...Ae,formControl:Ae}}function Fl(e={}){const n=m.useRef(void 0),t=m.useRef(void 0),[a,r]=m.useState({isDirty:!1,isValidating:!1,isLoading:me(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:me(e.defaultValues)?void 0:e.defaultValues});if(!n.current)if(e.formControl)n.current={...e.formControl,formState:a},e.defaultValues&&!me(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=Ll(e);n.current={...s,formState:a}}const l=n.current.control;return l._options=e,qa(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>r({...l._formState}),reRenderRoot:!0});return r(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),m.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),m.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),m.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),m.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),m.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==a.isDirty&&l._subjects.state.next({isDirty:i})}},[l,a.isDirty]),m.useEffect(()=>{e.values&&!ge(e.values,t.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),t.current=e.values,r(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),m.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),n.current.formState=Wt(a,l),n.current}function Vl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pt={exports:{}},$e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rt;function Pl(){if(Rt)return $e;Rt=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(a,r,l){var i=null;if(l!==void 0&&(i=""+l),r.key!==void 0&&(i=""+r.key),"key"in r){l={};for(var s in r)s!=="key"&&(l[s]=r[s])}else l=r;return r=l.ref,{$$typeof:e,type:a,key:i,ref:r!==void 0?r:null,props:l}}return $e.Fragment=n,$e.jsx=t,$e.jsxs=t,$e}var Ot;function Kl(){return Ot||(Ot=1,pt.exports=Pl()),pt.exports}var Ea=Kl();const Qe={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};Ee(Qe);var Dt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var bt;function wl(){return bt||(bt=1,(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=r(l,a.call(this,s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=r(i,this&&this[s]||s));return i}function r(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Dt)),Dt.exports}var Gl=wl();const $a=Vl(Gl),xl="_borderbox_1a0x6_1",jl="_error_1a0x6_5",Ml="_warning_1a0x6_8",Ul={borderbox:xl,error:jl,warning:Ml};$a.bind(Ul);const ql="_aksjonspunkt_11wjs_1",Bl="_erAksjonspunktApent_11wjs_4",Cl="_erIkkeGodkjentAvBeslutter_11wjs_8",$l={aksjonspunkt:ql,erAksjonspunktApent:Bl,erIkkeGodkjentAvBeslutter:Cl};$a.bind($l);const Da=({dateString:e,year:n,month:t,day:a})=>Ea.jsx(Ea.Fragment,{children:vn(e,{year:n,month:t,day:a})});Ee(Qe);Ee(Qe);const Hl="_divider_1jpov_1",Jl="_dividerParagraf_1jpov_8",Yl="_leftPanel_1jpov_11",zl="_rightPanel_1jpov_14",Wl={divider:Hl,dividerParagraf:Jl,leftPanel:Yl,rightPanel:zl};$a.bind(Wl);const ln=()=>Ea.jsx("span",{"data-testid":"editedIcon",children:Ea.jsx(Jn,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});Ee(Qe);Ee(Qe);var ba={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ht;function Ql(){return ht||(ht=1,(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=r(l,a(s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=r(i,s));return i}function r(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(ba)),ba.exports}var Xl=Ql();const Zl=Kt(Xl);function ei(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var At={exports:{}},He={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var It;function ai(){if(It)return He;It=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(a,r,l){var i=null;if(l!==void 0&&(i=""+l),r.key!==void 0&&(i=""+r.key),"key"in r){l={};for(var s in r)s!=="key"&&(l[s]=r[s])}else l=r;return r=l.ref,{$$typeof:e,type:a,key:i,ref:r!==void 0?r:null,props:l}}return He.Fragment=n,He.jsx=t,He.jsxs=t,He}var kt;function ti(){return kt||(kt=1,At.exports=ai()),At.exports}var ae=ti();const sn=e=>e.reduce((n,t,a)=>({...n,[a]:r=>t(r)||!0}),{}),on=(e,n)=>n.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e)?.message;var ka={exports:{}},ni=ka.exports,Lt;function ri(){return Lt||(Lt=1,(function(e,n){(function(t,a){e.exports=a()})(ni,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,d={},f=function(g){return(g=+g)+(g>68?1900:2e3)},c=function(g){return function(A){this[g]=+A}},v=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=(function(A){if(!A||A==="Z")return 0;var p=A.match(/([+-]|\d\d)/g),I=60*p[1]+(+p[2]||0);return I===0?0:p[0]==="+"?-I:I})(g)}],_=function(g){var A=d[g];return A&&(A.indexOf?A:A.s.concat(A.f))},y=function(g,A){var p,I=d.meridiem;if(I){for(var F=1;F<=24;F+=1)if(g.indexOf(I(F,0,A))>-1){p=F>12;break}}else p=g===(A?"pm":"PM");return p},N={A:[s,function(g){this.afternoon=y(g,!1)}],a:[s,function(g){this.afternoon=y(g,!0)}],Q:[r,function(g){this.month=3*(g-1)+1}],S:[r,function(g){this.milliseconds=100*+g}],SS:[l,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[i,c("seconds")],ss:[i,c("seconds")],m:[i,c("minutes")],mm:[i,c("minutes")],H:[i,c("hours")],h:[i,c("hours")],HH:[i,c("hours")],hh:[i,c("hours")],D:[i,c("day")],DD:[l,c("day")],Do:[s,function(g){var A=d.ordinal,p=g.match(/\d+/);if(this.day=p[0],A)for(var I=1;I<=31;I+=1)A(I).replace(/\[|\]/g,"")===g&&(this.day=I)}],w:[i,c("week")],ww:[l,c("week")],M:[i,c("month")],MM:[l,c("month")],MMM:[s,function(g){var A=_("months"),p=(_("monthsShort")||A.map(function(I){return I.slice(0,3)})).indexOf(g)+1;if(p<1)throw new Error;this.month=p%12||p}],MMMM:[s,function(g){var A=_("months").indexOf(g)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,c("year")],YY:[l,function(g){this.year=f(g)}],YYYY:[/\d{4}/,c("year")],Z:v,ZZ:v};function D(g){var A,p;A=g,p=d&&d.formats;for(var I=(g=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(j,x,h){var R=h&&h.toUpperCase();return x||p[h]||t[h]||p[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(K,q,M){return q||M.slice(1)})})).match(a),F=I.length,P=0;P<F;P+=1){var C=I[P],G=N[C],U=G&&G[0],w=G&&G[1];I[P]=w?{regex:U,parser:w}:C.replace(/^\[|\]$/g,"")}return function(j){for(var x={},h=0,R=0;h<F;h+=1){var K=I[h];if(typeof K=="string")R+=K.length;else{var q=K.regex,M=K.parser,X=j.slice(R),te=q.exec(X)[0];M.call(x,te),j=j.replace(te,"")}}return(function(ne){var fe=ne.afternoon;if(fe!==void 0){var ee=ne.hours;fe?ee<12&&(ne.hours+=12):ee===12&&(ne.hours=0),delete ne.afternoon}})(x),x}}return function(g,A,p){p.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(f=g.parseTwoDigitYear);var I=A.prototype,F=I.parse;I.parse=function(P){var C=P.date,G=P.utc,U=P.args;this.$u=G;var w=U[1];if(typeof w=="string"){var j=U[2]===!0,x=U[3]===!0,h=j||x,R=U[2];x&&(R=U[2]),d=this.$locale(),!j&&R&&(d=p.Ls[R]),this.$d=(function(X,te,ne,fe){try{if(["x","X"].indexOf(te)>-1)return new Date((te==="X"?1e3:1)*X);var ee=D(te)(X),we=ee.year,Te=ee.month,Sa=ee.day,Ze=ee.hours,ya=ee.minutes,Ge=ee.seconds,ea=ee.milliseconds,De=ee.zone,be=ee.week,xe=new Date,he=Sa||(we||Te?1:xe.getDate()),je=we||xe.getFullYear(),Ne=0;we&&!Te||(Ne=Te>0?Te-1:xe.getMonth());var pe,Me=Ze||0,Ue=ya||0,aa=Ge||0,Ae=ea||0;return De?new Date(Date.UTC(je,Ne,he,Me,Ue,aa,Ae+60*De.offset*1e3)):ne?new Date(Date.UTC(je,Ne,he,Me,Ue,aa,Ae)):(pe=new Date(je,Ne,he,Me,Ue,aa,Ae),be&&(pe=fe(pe).week(be).toDate()),pe)}catch{return new Date("")}})(C,w,G,p),this.init(),R&&R!==!0&&(this.$L=this.locale(R).$L),h&&C!=this.format(w)&&(this.$d=new Date("")),d={}}else if(w instanceof Array)for(var K=w.length,q=1;q<=K;q+=1){U[1]=w[q-1];var M=p.apply(this,U);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}q===K&&(this.$d=new Date(""))}else F.call(this,P)}}})})(ka)),ka.exports}var li=ri();const ii=ei(li),si="_textarea_14c7r_1",oi="_readOnlyField_14c7r_7",Ft={textarea:si,readOnlyField:oi},ui=e=>e!=null&&e!=="",di=({label:e,value:n,isEdited:t=!1,type:a,hideLabel:r,size:l})=>ui(n)?ae.jsxs(Re,{gap:"space-4",children:[e&&!r&&ae.jsx(_a,{size:l,children:e}),ae.jsxs(ua,{gap:"space-8",align:"center",wrap:!1,children:[ae.jsx(jt,{className:a==="textarea"?Ft.textarea:Ft.readOnlyField,size:l,children:n}),t&&ae.jsx(ln,{})]})]}):null;Gt.extend(ii);const ci="_noReadOnlyIcon_11vhl_2",mi={noReadOnlyIcon:ci},Ei=({label:e,description:n,validate:t=[],onChange:a,children:r,className:l,isReadOnly:i=!1,size:s="small",isEdited:d=!1,hideLegend:f=!1,...c})=>{const{name:v,control:_}=c,{formState:{errors:y}}=Pe(),{field:N}=Xt({name:v,control:_,rules:{validate:sn(t)}});return ae.jsx(rl,{name:v,value:N.value!==void 0?N.value:null,legend:ae.jsxs(ua,{justify:"center",gap:"space-8",children:[e,i&&d&&ae.jsx(ln,{})]}),hideLegend:f,"aria-readonly":i,readOnly:i,description:n,size:s,error:on(y,v),onChange:D=>{a&&a(D),N.onChange(D)},className:Zl(l,mi.noReadOnlyIcon),children:r})},fi="_textAreaFieldWithBadges_bdz0b_1",vi="_etikettWrapper_bdz0b_4",Vt={textAreaFieldWithBadges:fi,etikettWrapper:vi},_i=({name:e,control:n,label:t,readOnly:a,maxLength:r,badges:l,validate:i=[],parse:s=y=>y,className:d,description:f,isEdited:c,size:v="small",..._})=>{const{formState:{errors:y}}=Pe(),{field:N}=Xt({name:e,control:n,rules:{validate:k.useMemo(()=>sn(i),[i])}});return a?ae.jsx(di,{size:v,label:t,value:N.value,type:"textarea",isEdited:c,hideLabel:_.hideLabel}):ae.jsxs("div",{className:l?Vt.textAreaFieldWithBadges:null,children:[l&&ae.jsx("div",{className:Vt.etikettWrapper,children:l.map(({type:D,titleText:g})=>ae.jsx(Xr,{variant:D,size:"small",children:g},g))}),ae.jsx(cl,{size:v,label:t,description:f,className:d,autoComplete:"off",...N,onChange:D=>N.onChange(D.currentTarget.value!==""?s(D.currentTarget.value):null),value:N.value?N.value:"",error:on(y,e),maxLength:r,..._})]})},gi=({formMethods:e,onSubmit:n,children:t,className:a,setDataOnUnmount:r})=>{const{handleSubmit:l,getValues:i}=e;return k.useEffect(()=>()=>{r&&r(i())},[]),ae.jsx(fl,{...e,children:ae.jsx("form",{className:a,onSubmit:n?l(s=>n(s)):void 0,children:t})})},Si="_begrunnelseTextField_hw8s7_6",yi={begrunnelseTextField:Si},Xe={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},Ti=Ee(Xe),Ni=Sn(3),pi=yn(2e3),Ri=e=>e?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",Oi=e=>n=>n!==void 0||e,Ke=({readOnly:e,text:n,useAllWidth:t=!1,notRequired:a=!1})=>{const{formState:{isDirty:r},control:l}=Pe(),i=a?()=>!1:Oi(r);return V.jsx("div",{className:t?"":yi.begrunnelseTextField,children:V.jsx(_i,{name:"begrunnelse",control:l,label:n??Ti.formatMessage({id:Ri(e)}),validate:[gn(i),Ni,pi,Tn],maxLength:2e3,readOnly:e,parse:_n})})},Di=e=>e.at(0)?.begrunnelse??"";Ke.buildInitialValues=e=>({begrunnelse:Nn(Di(e))});Ke.transformValues=e=>({begrunnelse:e.begrunnelse});Ke.__docgenInfo={description:`ProsessStegBegrunnelseTextField

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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const bi=Ee(Xe),hi=(e,n,t,a)=>!t&&!n||e?!0:a===void 0?!t:!t&&a||a,un=({isReadOnly:e,isSubmittable:n,isSubmitting:t,isDirty:a,text:r,onClick:l,hasEmptyRequiredFields:i})=>e?null:V.jsx("div",{children:V.jsx(wr,{size:"small",variant:"primary",loading:t,disabled:hi(t,n,a,i),onClick:l,type:l?"button":"submit",children:r??bi.formatMessage({id:"SubmitButton.ConfirmInformation"})})});un.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};Ee(Xe);Ee(Xe);Ee(Xe);const Ai="_days_kq4ls_1",Ii="_hyphen_kq4ls_5",ki="_panel_kq4ls_15",ha={days:Ai,hyphen:Ii,panel:ki},Pt=e=>e?"ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt":"ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt",Li=(e,n)=>Gt(e).subtract(n,"days").format(Dn),Fi=e=>e.fødselTermin?e.fødselTermin.fødselsdato?"ErSoknadsfristVilkaretOppfyltForm.Fodselsdato":"ErSoknadsfristVilkaretOppfyltForm.Termindato":"ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato",Vi=e=>e.adopsjon?.omsorgsovertakelseDato||e.fødselTermin?.fødselsdato||e.fødselTermin?.termindato||void 0,Pi=(e,n)=>({erVilkarOk:e[0]?.status==="OPPR"?void 0:n==="OPPFYLT",...Ke.buildInitialValues(e)}),Ki=e=>({erVilkarOk:e.erVilkarOk||!1,kode:ze.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,...Ke.transformValues(e)}),dn=({soknad:e,gjeldendeFamiliehendelse:n,status:t})=>{const a=wt(),{isSubmittable:r,aksjonspunkterForPanel:l,behandling:i,isReadOnly:s,submitCallback:d,alleKodeverk:f}=pn(),c=Pi(l,t),{mellomlagretFormData:v,setMellomlagretFormData:_}=Rn(),y=Fl({defaultValues:v??c}),N=Vi(n),D=Fi(n),g=y.watch("erVilkarOk"),A=e.søknadsfrist.dagerOversittetFrist;return V.jsx(gi,{formMethods:y,onSubmit:p=>d(Ki(p)),setDataOnUnmount:_,children:V.jsxs(Re,{gap:"space-16",children:[V.jsxs(Re,{gap:"space-4",children:[V.jsx(Qa,{size:"small",level:"2",children:a.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist"})}),V.jsxs("span",{className:"typo-normal",children:[V.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1"}),V.jsx("span",{className:ha.days,children:V.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2",values:{numberOfDays:A}})}),V.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3"}),e.mottattDato&&A&&V.jsx(Da,{dateString:Li(e.mottattDato,A)})]})]}),V.jsxs(ua,{justify:"space-between",children:[V.jsxs(Ct.New,{className:ha.panel,children:[V.jsx(Qa,{size:"small",level:"3",children:a.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.Consider"})}),V.jsxs("ul",{className:ha.hyphen,children:[V.jsx("li",{children:V.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.Question1"})}),V.jsx("li",{children:V.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.Question2"})}),V.jsx("li",{children:V.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.Question3"})})]})]}),V.jsxs(Re,{gap:"space-24",children:[V.jsxs(Re,{gap:"space-4",children:[V.jsx(pa,{children:a.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.MottattDato"})}),V.jsx("span",{className:"typo-normal",children:e.mottattDato&&V.jsx(Da,{dateString:e.mottattDato})})]}),V.jsxs(Re,{gap:"space-4",children:[V.jsx(pa,{children:a.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication"})}),V.jsx("span",{className:"typo-normal",children:e.begrunnelseForSenInnsending??"-"})]})]}),V.jsxs(Re,{gap:"space-4",children:[D&&V.jsx(pa,{children:a.formatMessage({id:D})}),V.jsx("span",{className:"typo-normal",children:N&&V.jsx(Da,{dateString:N})})]})]}),V.jsx(Ei,{name:"erVilkarOk",control:y.control,validate:[On],isReadOnly:s,children:V.jsxs(ua,{gap:"space-16",children:[V.jsx(it,{value:!0,size:"small",children:V.jsx(_e,{id:Pt(!0),values:{b:Wa}})}),V.jsx(it,{value:!1,size:"small",children:V.jsx(_e,{id:Pt(!1),values:{b:Wa}})})]})}),s&&g===!1&&!!i.behandlingsresultat?.avslagsarsak&&V.jsx(Se,{size:"small",children:f.Avslagsårsak.FP_VK_3.find(p=>p.kode===i.behandlingsresultat?.avslagsarsak)?.navn??""}),V.jsx(Ke,{readOnly:s}),V.jsx(un,{isReadOnly:s,isSubmittable:r,isSubmitting:y.formState.isSubmitting,isDirty:y.formState.isDirty})]})})};dn.__docgenInfo={description:`ErSoknadsfristVilkaretOppfyltForm

Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.`,methods:[],displayName:"ErSoknadsfristVilkaretOppfyltForm",props:{soknad:{required:!0,tsType:{name:"union",raw:"SøknadAdopsjon | SøknadFødsel",elements:[{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},{name:"intersection",raw:`{
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-001';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-001'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  antallBarn: number;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  fodselsdatoer?: {
    [key: string]: string;
  };
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fodselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}}]}]},description:""},gjeldendeFamiliehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  adopsjon?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_AdopsjonFamilieHendelseDto;
  fødselTermin?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_FødselTerminFamilieHendelseDto;
}`,signature:{properties:[{key:"adopsjon",value:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_4'
| 'FP_VK_8'
| 'FP_VK_5'
| 'FP_VK_33'
| 'FP_VK_16'
| 'FP_VK_8F'
| 'FP_VK_16S'
| '-'`,elements:[{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_8F'"},{name:"literal",value:"'FP_VK_16S'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"fødselTermin",value:{name:"signature",type:"object",raw:`{
  fødselsdato?: string;
  termindato?: string;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}}]},required:!1}}]}},description:""},status:{required:!0,tsType:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}]},description:""}}};const wi={"ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist":"Søknadsfrist","ErSoknadsfristVilkaretOppfyltForm.Consider":"Vurder følgende","ErSoknadsfristVilkaretOppfyltForm.Question1":"Har det vært fristavbrytende kontakt?","ErSoknadsfristVilkaretOppfyltForm.Question2":"Har Nav gitt misvisende opplysninger?","ErSoknadsfristVilkaretOppfyltForm.Question3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","ErSoknadsfristVilkaretOppfyltForm.MottattDato":"Dato for mottatt søknad","ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato":"Dato for omsorgsovertakelse","ErSoknadsfristVilkaretOppfyltForm.Fodselsdato":"Fødselsdato","ErSoknadsfristVilkaretOppfyltForm.Termindato":"Termindato","ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication":"Begrunnelse fra søknaden","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1":"Søknaden ble mottatt ","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2":"{numberOfDays} dager ","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3":"etter søknadsfristen ","ErSoknadsfristVilkaretOppfyltForm.SokersOpplysningsplikt":"Søkers opplysningsplikt","ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt":"Vilkåret er oppfylt","ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt":"Vilkåret er <b>ikke</b> oppfylt","ShowVilkarStatus.Check":"Informasjonen er utfylt"},Gi=Ee(wi),La=({soknad:e,familiehendelse:n,status:t})=>V.jsx(bn,{value:Gi,children:V.jsx(dn,{soknad:e,gjeldendeFamiliehendelse:n,status:t})});La.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristVilkarProsessIndex",props:{soknad:{required:!0,tsType:{name:"union",raw:"SøknadAdopsjon | SøknadFødsel",elements:[{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},{name:"intersection",raw:`{
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-001';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-001'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  antallBarn: number;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  fodselsdatoer?: {
    [key: string]: string;
  };
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fodselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}}]}]},description:""},familiehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  adopsjon?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_AdopsjonFamilieHendelseDto;
  fødselTermin?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_FødselTerminFamilieHendelseDto;
}`,signature:{properties:[{key:"adopsjon",value:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_4'
| 'FP_VK_8'
| 'FP_VK_5'
| 'FP_VK_33'
| 'FP_VK_16'
| 'FP_VK_8F'
| 'FP_VK_16S'
| '-'`,elements:[{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_8F'"},{name:"literal",value:"'FP_VK_16S'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"fødselTermin",value:{name:"signature",type:"object",raw:`{
  fødselsdato?: string;
  termindato?: string;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}}]},required:!1}}]}},description:""},status:{required:!0,tsType:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}]},description:""}}};const xi={soknadType:"ST-001",mottattDato:"2019-01-01",begrunnelseForSenInnsending:"Dette er en begrunnelse",søknadsfrist:{mottattDato:"2019-01-01",utledetSøknadsfrist:"2019-07-01",dagerOversittetFrist:2}},ji={fødselTermin:{fødselsdato:"2019-01-02"}},Bi={title:"prosess/prosess-vilkar-soknadsfrist",component:La,decorators:[hn,An],args:{soknad:xi,familiehendelse:ji},render:e=>V.jsx(La,{...e})},ra={args:{aksjonspunkterForPanel:[{definisjon:ze.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,status:"OPPR",vilkarType:"FP_VK_3"}],isReadOnly:!1,status:"IKKE_VURDERT"}},la={args:{aksjonspunkterForPanel:[{definisjon:ze.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,status:"UTFO",begrunnelse:"Dette vilkåret er godkjent",vilkarType:"FP_VK_3"}],isReadOnly:!0,isSubmittable:!1,status:"OPPFYLT"}},ia={args:{behandling:{uuid:"1",versjon:1,behandlingsresultat:{avslagsarsak:"1099"}},aksjonspunkterForPanel:[{definisjon:ze.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,status:"UTFO",begrunnelse:"Dette vilkåret er avslått",vilkarType:"FP_VK_3"}],isReadOnly:!0,isSubmittable:!1,status:"IKKE_OPPFYLT"}};ra.parameters={...ra.parameters,docs:{...ra.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,
      status: 'OPPR',
      vilkarType: 'FP_VK_3'
    }] as Aksjonspunkt[],
    isReadOnly: false,
    status: 'IKKE_VURDERT'
  }
}`,...ra.parameters?.docs?.source}}};la.parameters={...la.parameters,docs:{...la.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,
      status: 'UTFO',
      begrunnelse: 'Dette vilkåret er godkjent',
      vilkarType: 'FP_VK_3'
    }] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'OPPFYLT'
  }
}`,...la.parameters?.docs?.source}}};ia.parameters={...ia.parameters,docs:{...ia.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: '1099'
      }
    } as BehandlingFpSak,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,
      status: 'UTFO',
      begrunnelse: 'Dette vilkåret er avslått',
      vilkarType: 'FP_VK_3'
    }] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT'
  }
}`,...ia.parameters?.docs?.source}}};const Ci=["ÅpentAksjonspunkt","OppfyltVilkår","AvslåttVilkår"];export{ia as AvslåttVilkår,la as OppfyltVilkår,Ci as __namedExportsOrder,Bi as default,ra as ÅpentAksjonspunkt};
