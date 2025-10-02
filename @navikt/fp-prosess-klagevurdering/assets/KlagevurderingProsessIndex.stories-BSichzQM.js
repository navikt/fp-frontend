import{g as mn,r as b,u as qe,_ as yr,s as br,c as $e,a as Y,R as u,b as er,d as it,e as vn,f as Fa,S as fn,h as pe,Z as st,j as h,A as gn,i as ot,k as ut,o as dt,N as En,l as ct,P as mt,t as la,m as ar,n as vt,p as ft,w as gt,q as Et}from"./iframe-7jEkcMML.js";import{r as _t}from"./index-BARDrTE4.js";import"./preload-helper-PPVm8Dsz.js";var _n=_t();const ht=mn(_n);function yt(e,n){var r=e.values,a=yr(e,["values"]),t=n.values,l=yr(n,["values"]);return br(t,r)&&br(a,l)}function hn(e){var n=qe(),r=n.formatMessage,a=n.textComponent,t=a===void 0?b.Fragment:a,l=e.id,i=e.description,s=e.defaultMessage,d=e.values,v=e.children,c=e.tagName,g=c===void 0?t:c,E=e.ignoreTag,A={id:l,description:i,defaultMessage:s},y=r(A,d,{ignoreTag:E});return typeof v=="function"?v(Array.isArray(y)?y:[y]):g?b.createElement(g,null,y):b.createElement(b.Fragment,null,y)}hn.displayName="FormattedMessage";var $=b.memo(hn,yt);$.displayName="MemoizedFormattedMessage";var da=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(da||{}),z=(e=>(e.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",e.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",e.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",e.AVVIS_KLAGE="AVVIS_KLAGE",e.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",e))(z||{}),Ne=(e=>(e.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",e.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",e.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",e.UDEFINERT="-",e))(Ne||{});const Va=(e,n)=>{if(e==null)throw new Error("Data er ikke oppgitt");return e},Ye=e=>$e({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var bt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const rr=b.forwardRef((e,n)=>{var{className:r,size:a="medium",as:t="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:v,textColor:c}=e,g=bt(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=Y();return u.createElement(t,Object.assign({},g,{ref:n,className:E(r,"navds-body-long",`navds-body-long--${a}`,Ye({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:v,textColor:c}))}))});var pt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const X=b.forwardRef((e,n)=>{var{className:r,size:a="medium",as:t="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:v,textColor:c}=e,g=pt(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=Y();return u.createElement(t,Object.assign({},g,{ref:n,className:E(r,"navds-body-short",`navds-body-short--${a}`,Ye({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:v,textColor:c}))}))});var Ot=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const kt=b.forwardRef((e,n)=>{var{className:r,size:a="medium",spacing:t,uppercase:l,as:i="p",truncate:s,weight:d="regular",align:v,visuallyHidden:c,textColor:g}=e,E=Ot(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:A}=Y();return u.createElement(i,Object.assign({},E,{ref:n,className:A(r,"navds-detail",Ye({spacing:t,truncate:s,weight:d,align:v,visuallyHidden:c,textColor:g,uppercase:l}),{"navds-detail--small":a==="small"})}))});var St=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ga=b.forwardRef((e,n)=>{var{children:r,className:a,size:t,spacing:l,as:i="p",showIcon:s=!1}=e,d=St(e,["children","className","size","spacing","as","showIcon"]);const{cn:v}=Y();return u.createElement(i,Object.assign({},d,{ref:n,className:v("navds-error-message","navds-label",a,Ye({spacing:l}),{"navds-label--small":t==="small","navds-error-message--show-icon":s})}),s&&u.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Kt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const nr=b.forwardRef((e,n)=>{var{level:r="1",size:a,className:t,as:l,spacing:i,align:s,visuallyHidden:d,textColor:v}=e,c=Kt(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=Y(),E=l??`h${r}`;return u.createElement(E,Object.assign({},c,{ref:n,className:g(t,"navds-heading",`navds-heading--${a}`,Ye({spacing:i,align:s,visuallyHidden:d,textColor:v}))}))});var Tt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};b.forwardRef((e,n)=>{var{className:r,spacing:a,as:t="p"}=e,l=Tt(e,["className","spacing","as"]);const{cn:i}=Y();return u.createElement(t,Object.assign({},l,{ref:n,className:i(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var At=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ee=b.forwardRef((e,n)=>{var{className:r,size:a="medium",as:t="label",spacing:l,visuallyHidden:i,textColor:s}=e,d=At(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:v}=Y();return u.createElement(t,Object.assign({},d,{ref:n,className:v(r,"navds-label",Ye({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":a==="small"})}))});function yn(e,n=166,r=!1){let a;function t(...l){const i=()=>{a=void 0,e.apply(this,l)};!a&&r&&i(),clearTimeout(a),a=setTimeout(i,n)}return t.clear=()=>{clearTimeout(a)},t}function _e(e,n){const r=Object.entries(e).filter(([a])=>!n.includes(a));return Object.fromEntries(r)}const pr=globalThis?.document?b.useLayoutEffect:()=>{};let Or=0;function Rt(e){const[n,r]=b.useState(e),a=e||n;return b.useEffect(()=>{n==null&&(Or+=1,r(`aksel-id-${Or}`))},[n]),a}const kr=u.useId;function Ie(e){var n;return kr!==void 0?kr().replace(/(:)/g,""):(n=Rt(e))!==null&&n!==void 0?n:""}function Sr(e,n=[]){const r=b.useRef(e);return b.useEffect(()=>{r.current=e}),b.useCallback(((...a)=>{var t;return(t=r.current)===null||t===void 0?void 0:t.call(r,...a)}),n)}function Nt({value:e,defaultValue:n,onChange:r}){const a=Sr(r),[t,l]=b.useState(n),i=e!==void 0,s=i?e:t,d=Sr(v=>{const g=typeof v=="function"?v(s):v;i||l(g),a(g)},[i,a,s]);return[s,d]}let Kr=0;function Vt(e){const[n,r]=b.useState(e),a=e||n;return b.useEffect(()=>{n==null&&(Kr+=1,r(`aksel-icon-${Kr}`))},[n]),a}const Tr=u.useId;function Te(e){var n;return Tr!==void 0?Tr().replace(/(:)/g,""):(n=Vt(e))!==null&&n!==void 0?n:""}var Lt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Dt=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Lt(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var It=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const wt=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=It(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Pt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const bn=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Pt(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var xt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Mt=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=xt(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Ft=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Gt=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Ft(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var jt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const pn=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=jt(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Bt=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ut=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Bt(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Ht=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const On=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Ht(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Ct=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const qt=b.forwardRef((e,n)=>{var{title:r,titleId:a}=e,t=Ct(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Ue(e,n,{checkForDefaultPrevented:r=!0}={}){return function(t){if(e?.(t),r===!1||!t.defaultPrevented)return n?.(t)}}const[$t,kn]=er({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function $a(e){return(n={})=>{const r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Qe(e){return(n,r)=>{const a=r?.context?String(r.context):"standalone";let t;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=r?.width?String(r.width):i;t=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=r?.width?String(r.width):e.defaultWidth;t=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(n):n;return t[l]}}function ea(e){return(n,r={})=>{const a=r.width,t=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=n.match(t);if(!l)return null;const i=l[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?zt(s,g=>g.test(i)):Yt(s,g=>g.test(i));let v;v=e.valueCallback?e.valueCallback(d):d,v=r.valueCallback?r.valueCallback(v):v;const c=n.slice(i.length);return{value:v,rest:c}}}function Yt(e,n){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n(e[r]))return r}function zt(e,n){for(let r=0;r<e.length;r++)if(n(e[r]))return r}function Wt(e){return(n,r={})=>{const a=n.match(e.matchPattern);if(!a)return null;const t=a[0],l=n.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=r.valueCallback?r.valueCallback(i):i;const s=n.slice(t.length);return{value:i,rest:s}}}const Jt={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Zt=(e,n,r)=>{let a;const t=Jt[e];return typeof t=="string"?a=t:n===1?a=t.one:a=t.other.replace("{{count}}",String(n)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},Xt={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Qt={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},el={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},al={date:$a({formats:Xt,defaultWidth:"full"}),time:$a({formats:Qt,defaultWidth:"full"}),dateTime:$a({formats:el,defaultWidth:"full"})},rl={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},nl=(e,n,r,a)=>rl[e],tl={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},ll={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},il={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},sl={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ol={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},ul=(e,n)=>Number(e)+".",dl={ordinalNumber:ul,era:Qe({values:tl,defaultWidth:"wide"}),quarter:Qe({values:ll,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Qe({values:il,defaultWidth:"wide"}),day:Qe({values:sl,defaultWidth:"wide"}),dayPeriod:Qe({values:ol,defaultWidth:"wide"})},cl=/^(\d+)\.?/i,ml=/\d+/i,vl={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},fl={any:[/^f/i,/^e/i]},gl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},El={any:[/1/i,/2/i,/3/i,/4/i]},_l={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},hl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},yl={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},bl={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},pl={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Ol={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},kl={ordinalNumber:Wt({matchPattern:cl,parsePattern:ml,valueCallback:e=>parseInt(e,10)}),era:ea({matchPatterns:vl,defaultMatchWidth:"wide",parsePatterns:fl,defaultParseWidth:"any"}),quarter:ea({matchPatterns:gl,defaultMatchWidth:"wide",parsePatterns:El,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ea({matchPatterns:_l,defaultMatchWidth:"wide",parsePatterns:hl,defaultParseWidth:"any"}),day:ea({matchPatterns:yl,defaultMatchWidth:"wide",parsePatterns:bl,defaultParseWidth:"any"}),dayPeriod:ea({matchPatterns:pl,defaultMatchWidth:"any",parsePatterns:Ol,defaultParseWidth:"any"})},Sl={code:"nb",formatDistance:Zt,formatLong:al,formatRelative:nl,localize:dl,match:kl,options:{weekStartsOn:1,firstWeekContainsDate:4}},Kl={global:{dateLocale:Sl,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Tl=b.createContext({locale:Kl}),Sn=()=>b.useContext(Tl);function Al(){return typeof window<"u"}function Rl(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Nl(e){return Al()?e instanceof Element||e instanceof Rl(e).Element:!1}const Ar=/(\w+)/g;function Vl(e,n){const r=Array.isArray(e)?e:Ll(e);for(const a of n){if(!a)continue;let t=a;for(let l=0;l<r.length;l++){const i=t[r[l]];i!==void 0&&(t=i)}if(typeof t=="string")return t}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Ll(e){const n=[];let r=Ar.exec(e);for(;r;){const[,a,t]=r;n.push(a||t),r=Ar.exec(e)}return n}const Dl=/{[^}]*}/g;function ca(e,...n){const r=Sn(),a=r.translations||[],t=[...n,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],r.locale[e]];return(i,s)=>{const d=Vl(i,t);return s?d.replace(Dl,v=>{const c=v.substring(1,v.length-1);if(s[c]===void 0){const g=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${c}'. The following replacements were passed: '${g}'`)}return s[c]}):d}}var Il=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const wl=b.forwardRef((e,n)=>{var{className:r,size:a="medium",title:t,transparent:l=!1,variant:i="neutral",id:s,"data-color":d}=e,v=Il(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:c}=Y(),g=Ie(),E=ca("Loader");return u.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${g}`,ref:n,className:c("navds-loader",r,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??Pl(i)},_e(v,["children"]),{"data-variant":i}),u.createElement("title",{id:s??`loader-${g}`},t||E("title")),u.createElement("circle",{className:c("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),u.createElement("circle",{className:c("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Pl(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var xl=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const He=b.forwardRef((e,n)=>{var{as:r="button",variant:a="primary",className:t,children:l,size:i="medium",loading:s=!1,disabled:d,icon:v,iconPosition:c="left",onKeyUp:g,"data-color":E}=e,A=xl(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:y}=Y(),V=d||s?_e(A,["href"]):A,_=k=>{k.key===" "&&!d&&!s&&k.currentTarget.click()};return u.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":E??Ml(a),"data-variant":Fl(a)},V,{ref:n,onKeyUp:Ue(g,_),className:y(t,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!v&&!l,"navds-button--disabled":d??s}),disabled:d??s?!0:void 0}),v&&c==="left"&&u.createElement("span",{className:y("navds-button__icon")},v),s&&u.createElement(wl,{size:i}),l&&u.createElement(Ee,{as:"span",size:i==="medium"?"medium":"small"},l),v&&c==="right"&&u.createElement("span",{className:y("navds-button__icon")},v))});function Ml(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Fl(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var Gl=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const jl={error:qt,warning:Mt,info:Gt,success:wt},Bl=b.forwardRef((e,n)=>{var{children:r,className:a,variant:t,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:d=!1,closeButton:v=!1,onClose:c}=e,g=Gl(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:E}=Y(),A=ca("Alert"),y=jl[t];return u.createElement("div",Object.assign({},g,{"data-color":Ul(t),"data-variant":t,ref:n,className:E(a,"navds-alert",`navds-alert--${t}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":d,"navds-alert--close-button":v})}),u.createElement(y,{title:A(t),className:E("navds-alert__icon")}),u.createElement(rr,{as:"div",size:l,className:E("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},r),v&&!d&&u.createElement("div",{className:E("navds-alert__button-wrapper")},u.createElement(He,{className:E("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:c,type:"button",icon:u.createElement(On,{title:["error","warning"].includes(t)?A("closeAlert"):A("closeMessage")})})))});function Ul(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}var La=typeof document<"u"?b.useLayoutEffect:b.useEffect;const Hl={...it};let Rr=!1,Cl=0;const Nr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Cl++;function ql(){const[e,n]=b.useState(()=>Rr?Nr():void 0);return La(()=>{e==null&&n(Nr())},[]),b.useEffect(()=>{Rr=!0},[]),e}const $l=Hl.useId,Yl=$l||ql;function zl(e){return"data-floating-ui-"+e}const Wl=b.createContext(null),Vr=zl("portal");function Jl(e){e===void 0&&(e={});const{id:n,root:r}=e,a=Yl(),t=Zl(),[l,i]=b.useState(null),s=b.useRef(null);return La(()=>()=>{l?.remove(),queueMicrotask(()=>{s.current=null})},[l]),La(()=>{if(!a||s.current)return;const d=n?document.getElementById(n):null;if(!d)return;const v=document.createElement("div");v.id=a,v.setAttribute(Vr,""),d.appendChild(v),s.current=v,i(v)},[n,a]),La(()=>{if(r===null||!a||s.current)return;let d=r||t?.portalNode;d&&!Nl(d)&&(d=d.current),d=d||document.body;let v=null;n&&(v=document.createElement("div"),v.id=n,d.appendChild(v));const c=document.createElement("div");c.id=a,c.setAttribute(Vr,""),d=v||d,d.appendChild(c),s.current=c,i(c)},[n,r,a,t]),l}const Zl=()=>b.useContext(Wl),tr=()=>{const{cn:e}=Y();return u.createElement(pn,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Kn=()=>{const{cn:e}=Y();return u.createElement(pn,{title:ca("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var Xl=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ql=b.forwardRef((e,n)=>{var{className:r,header:a,children:t,open:l,defaultOpen:i=!1,onClick:s,size:d="medium",onOpenChange:v}=e,c=Xl(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:g}=Y(),[E,A]=Nt({defaultValue:i,value:l,onChange:v}),y=d==="small"?"small":"medium";return u.createElement("div",{className:g("navds-read-more",`navds-read-more--${d}`,r,{"navds-read-more--open":E}),"data-volume":"low"},u.createElement("button",Object.assign({},c,{ref:n,type:"button",className:g("navds-read-more__button","navds-body-short",{"navds-body-short--small":d==="small"}),onClick:Ue(s,()=>A(V=>!V)),"aria-expanded":E,"data-state":E?"open":"closed"}),u.createElement(bn,{className:g("navds-read-more__expand-icon"),"aria-hidden":!0}),u.createElement("span",null,a)),u.createElement(rr,{as:"div","aria-hidden":!E,className:g("navds-read-more__content",{"navds-read-more__content--closed":!E}),size:y,"data-state":E?"open":"closed"},t))}),Da=b.createContext(null),ma=(e,n)=>{var r,a,t;const{size:l,error:i,errorId:s}=e,d=b.useContext(Da),v=Ie(),c=(r=e.id)!==null&&r!==void 0?r:`${n}-${v}`,g=s??`${n}-error-${v}`,E=`${n}-description-${v}`,A=d?.disabled||e.disabled,y=(d?.readOnly||e.readOnly)&&!A||void 0,V=!A&&!y&&!!(i||d?.error),_=!A&&!y&&!!i&&typeof i!="boolean",k=Object.assign({},V?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:_,hasError:V,errorId:g,inputDescriptionId:E,size:(a=l??d?.size)!==null&&a!==void 0?a:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:c},k),{"aria-describedby":$e(e["aria-describedby"],{[E]:e.description&&!Ia(e.description),[g]:_,[(t=d?.errorId)!==null&&t!==void 0?t:""]:V&&d?.error})||void 0,disabled:A})}};function Ia(e,n=!0){if(u.isValidElement(e)){if(e.type===Ql)return!0;if(e.props.children&&n)return Ia(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>Ia(r,n));return!1}const[Ko,ei]=er();var ai=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const[To,Tn]=er({errorMessage:"useDateInputContext must be used with DateInputContext"}),An=b.forwardRef((e,n)=>{const{className:r,hideLabel:a=!1,label:t,description:l,variant:i="datepicker",setAnchorRef:s}=e,d=ai(e,["className","hideLabel","label","description","variant","setAnchorRef"]),v=b.useRef(null),c=ei().translate,{cn:g}=Y(),E=i==="datepicker",A={prefix:E?"datepicker-input":"monthpicker-input",iconTitle:{open:E?"openDatePicker":"openMonthPicker",close:E?"closeDatePicker":"closeMonthPicker"}},y=Tn(),{inputProps:V,size:_="medium",inputDescriptionId:k,errorId:S,showErrorMsg:O,hasError:D,readOnly:T}=ma(e,A.prefix);return u.createElement("div",{className:g(r,"navds-form-field",`navds-form-field--${_}`,"navds-date__field",{"navds-text-field--error":D,"navds-date__field--error":D,"navds-form-field--disabled":!!V.disabled,"navds-text-field--disabled":!!V.disabled,"navds-form-field--readonly":T,"navds-text-field--readonly":T,"navds-date__field--readonly":T})},u.createElement(Ee,{htmlFor:V.id,size:_,className:g("navds-form-field__label",{"navds-sr-only":a})},T&&u.createElement(tr,null),t),!!l&&u.createElement(X,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":a}),id:k,size:_},l),u.createElement("div",{className:g("navds-date__field-wrapper")},u.createElement("input",Object.assign({ref:n},_e(d,["error","errorId","size"]),V,{autoComplete:"off","aria-controls":y?.open?y.ariaId:void 0,readOnly:T,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${_}`),size:E?11:14})),u.createElement("button",{disabled:V.disabled||T,tabIndex:T||y?.open?-1:0,onClick:()=>{y?.onOpen(),s?.(v.current)},type:"button",className:g("navds-date__field-button"),ref:v},u.createElement(Dt,{title:c(A.iconTitle[y?.open?"close":"open"])}))),u.createElement("div",{className:g("navds-form-field__error"),id:S,"aria-relevant":"additions removals","aria-live":"polite"},O&&u.createElement(Ga,{size:_,showIcon:!0},e.error)))});b.forwardRef((e,n)=>u.createElement(An,Object.assign({},e,{ref:n})));b.forwardRef((e,n)=>u.createElement(An,Object.assign({},e,{variant:"monthpicker",ref:n})));var ri=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const ni=b.forwardRef((e,n)=>{var{className:r}=e,a=ri(e,["className"]);const{cn:t}=Y();return u.createElement("div",Object.assign({},a,{ref:n,className:t("navds-modal__body",r)}))});var ti=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const li=b.forwardRef((e,n)=>{var{className:r}=e,a=ti(e,["className"]);const{cn:t}=Y();return u.createElement("div",Object.assign({},a,{ref:n,className:t("navds-modal__footer",r)}))});var ii=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Rn=b.forwardRef((e,n)=>{var{children:r,className:a,closeButton:t=!0}=e,l=ii(e,["children","className","closeButton"]);const{cn:i}=Y(),s=kn(),d=ca("global");return u.createElement("div",Object.assign({},l,{ref:n,className:i("navds-modal__header",a)}),s.closeHandler&&t&&u.createElement(He,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:v=>{["Enter"," "].includes(v.key)&&v.repeat&&v.preventDefault()},onClick:s.closeHandler,icon:u.createElement(On,{title:d("close")})}),r)}),Lr=({clientX:e,clientY:n},{left:r,top:a,right:t,bottom:l})=>!(e<r||n<a||e>t||n>l);function si(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var a;return r()!==!1&&((a=e.current)===null||a===void 0?void 0:a.close())}:()=>{var a;return(a=e.current)===null||a===void 0?void 0:a.close()}}const ba="navds-modal__document-body",pa="aksel-modal__document-body";function oi(e,n,r){u.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(pa,ba);const a=new MutationObserver(()=>{var t;!((t=e.current)===null||t===void 0)&&t.open?document.body.classList.add(pa,ba):document.body.classList.remove(pa,ba)});return a.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{a.disconnect(),document.body.classList.remove(pa,ba)}},[e,n,r])}const Be=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Nn(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function ia(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Vn(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function ui(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function Ya(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Ln(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var a=e.querySelector(r.join(", "));if(!a&&"attachShadow"in Element.prototype)for(var t=e.querySelectorAll("*"),l=0;l<t.length&&!(t[l].tagName&&t[l].shadowRoot&&(a=Ln(t[l].shadowRoot),a));l++);return a}function Dr(e){return e.isConnected||document.body.contains(e)}function Dn(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=H.formSubmitter;if(!r){var a=e.target,t="getRootNode"in a&&a.getRootNode()||document;r=t.activeElement}return!r||r.form!==n?null:r}function di(e){if(!e.defaultPrevented){var n=e.target,r=H.imagemapUseValue,a=Dn(e);r===null&&a&&(r=a.value);var t=ia(n);if(t){var l=a&&a.getAttribute("formmethod")||n.getAttribute("method");l==="dialog"&&(e.preventDefault(),r!=null?t.close(r):t.close())}}}function In(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",di,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,a=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),t,l=function(i){if(i.target===e){var s="DOMNodeRemoved";r|=i.type.substr(0,s.length)===s,window.clearTimeout(t),t=window.setTimeout(a,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,l)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}In.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Dr(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),H.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Ln(this.dialog_)),Vn(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Dr(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!H.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,H.needsCentering(this.dialog_)?(H.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Nn(this.dialog_,n)}};var H={};H.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};H.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],a=null;try{a=r.cssRules}catch{}if(a)for(var t=0;t<a.length;++t){var l=a[t],i=null;try{i=document.querySelectorAll(l.selectorText)}catch{}if(!(!i||!ui(i,e))){var s=l.style.getPropertyValue("top"),d=l.style.getPropertyValue("bottom");if(s&&s!=="auto"||d&&d!=="auto")return!0}}}return!1};H.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!H.isInlinePositionSetByStylesheet(e)};H.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new In(e)};H.registerDialog=function(e){e.showModal||H.forceRegisterDialog(e)};H.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(a){for(var t=0,l;l=a.removedNodes[t];++t)l instanceof Element&&(l.localName==="dialog"&&r.push(l),r=r.concat(l.querySelectorAll("dialog")))}),r.length&&e(r)}))};H.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};H.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};H.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var a=this.pendingDialogStack[0];if(a){var t=a.dialog.parentNode||document.body;t.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};H.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=ia(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};H.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Vn(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],a=r.dialog,t=a.compareDocumentPosition(n);return t&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};H.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&Nn(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};H.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};H.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};H.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Be&&(H.dm=new H.DialogManager,H.formSubmitter=null,H.imagemapUseValue=null);if(Be){var Ir=document.createElement("form");if(Ir.setAttribute("method","dialog"),Ir.method!=="dialog"){var Fe=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Fe){var ci=Fe.get;Fe.get=function(){return Ya(this)?"dialog":ci.call(this)};var mi=Fe.set;Fe.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):mi.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Fe)}}document.addEventListener("click",function(e){if(H.formSubmitter=null,H.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!Ya(n.form))){var a=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!a){if(!(n.localName==="input"&&n.type==="image"))return;H.imagemapUseValue=e.offsetX+","+e.offsetY}var t=ia(n);t&&(H.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=ia(n);if(!r){var a=Dn(e),t=a&&a.getAttribute("formmethod")||n.getAttribute("method");t==="dialog"&&e.preventDefault()}});var vi=HTMLFormElement.prototype.submit,fi=function(){if(!Ya(this))return vi.call(this);var e=ia(this);e&&e.close()};HTMLFormElement.prototype.submit=fi}var gi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const ua=b.forwardRef((e,n)=>{var r,a,{header:t,children:l,open:i,onBeforeClose:s,onCancel:d,closeOnBackdropClick:v,width:c,placement:g,portal:E,className:A,"aria-labelledby":y,style:V,onClick:_,onMouseDown:k}=e,S=gi(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:O}=Y(),D=b.useRef(O("navds-modal--polyfilled")),T=b.useRef(null),C=vn(T,n),M=Ie(),U=(r=Sn())===null||r===void 0?void 0:r.rootElement,P=Jl({root:U}),G=Tn(!1),F=kn(!1)!==void 0;F&&!G&&console.error("Modals should not be nested"),b.useEffect(()=>{Be&&T.current&&P&&(H.registerDialog(T.current),T.current.classList.add(D.current)),T.current&&P&&(T.current.autofocus=!0)},[P]),b.useEffect(()=>{T.current&&P&&i!==void 0&&(i&&!T.current.open?T.current.showModal():!i&&T.current.open&&T.current.close())},[P,i]),oi(T,P,F);const I=typeof c=="string"&&["small","medium"].includes(c),R=O("navds-modal",A,{[D.current]:Be,"navds-modal--autowidth":!c,[`navds-modal--${c}`]:I,"navds-modal--top":g==="top"&&!Be}),x=Object.assign(Object.assign({},V),I?{}:{width:c}),j=b.useRef({clientX:0,clientY:0}),B=ve=>{j.current=ve},Q=v&&!Be,ie=ve=>{if(ve.target!==T.current)return;const Oe=T.current.getBoundingClientRect();Lr(j.current,Oe)||Lr(ve,Oe)||s!==void 0&&s()===!1||T.current.close()},se=ve=>{s&&s()===!1&&ve.preventDefault()},he=!y&&!S["aria-label"]&&t?M:y,ne=u.createElement("dialog",Object.assign({},S,{ref:C,className:R,style:x,onCancel:Ue(d,se),onClick:Q?Ue(_,ie):_,onMouseDown:Q?Ue(k,B):k,"aria-labelledby":he}),u.createElement($t,{closeHandler:si(T,t,s),ref:T},t&&u.createElement(Rn,null,t.label&&u.createElement(kt,{className:O("navds-modal__label")},t.label),u.createElement(nr,{size:(a=t.size)!==null&&a!==void 0?a:"medium",level:"1",id:M},t.icon&&u.createElement("span",{className:O("navds-modal__header-icon")},t.icon),t.heading)),l));return E?P?_n.createPortal(ne,P):null:ne});ua.Header=Rn;ua.Body=ni;ua.Footer=li;var Ei=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const _i=b.forwardRef((e,n)=>{const{inputProps:r,errorId:a,showErrorMsg:t,hasError:l,size:i,inputDescriptionId:s,readOnly:d}=ma(e,"select"),{children:v,label:c,className:g,description:E,htmlSize:A,hideLabel:y=!1,style:V}=e,_=Ei(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:k}=Y(),S={onMouseDown:O=>{d&&(O.preventDefault(),O.target.focus())},onKeyDown:O=>{d&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(O.key)&&O.preventDefault()}};return u.createElement("div",{className:k(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":d,"navds-select--error":l,"navds-select--readonly":d})},u.createElement(Ee,{htmlFor:r.id,size:i,className:k("navds-form-field__label",{"navds-sr-only":y})},d&&u.createElement(Kn,null),c),!!E&&u.createElement(X,{className:k("navds-form-field__description",{"navds-sr-only":y}),id:s,size:i,as:"div"},E),u.createElement("div",{className:k("navds-select__container"),style:V},u.createElement("select",Object.assign({},_e(_,["error","errorId","size","readOnly"]),r,S,{ref:n,className:k("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:A}),v),u.createElement(bn,{className:k("navds-select__chevron"),"aria-hidden":!0})),u.createElement("div",{className:k("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},t&&u.createElement(Ga,{size:i,showIcon:!0},e.error)))});function le(e,n,r,a){return a?typeof a=="string"?{[`--__${e}c-${n}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([t,l])=>[`--__${e}c-${n}-${r}-${t}`,l])):{}}const hi={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},wr=(e,n,r,a,t,l)=>n.split(" ").map((i,s,d)=>{var v;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let c=`var(--${l}-${r}-${i})`;if(a.includes(i))c=i==="px"?"1px":i;else if(i.startsWith("space"))c=`var(--${l}-${i})`;else{const g=`--${l}-spacing-${i}`;c=`var(${(v=hi[g])!==null&&v!==void 0?v:g})`}return t?i==="0"?"0":`calc(-1 * ${c})`:c}).join(" ");function ge(e,n,r,a,t,l=!1,i=[]){if(!t)return{};if(typeof t=="string")return{[`--__${e}c-${n}-${r}-xs`]:wr(r,t,a,i,l,e)};const s={};return Object.entries(t).forEach(([d,v])=>{s[`--__${e}c-${n}-${r}-${d}`]=wr(r,v,a,i,l,e)}),s}const yi=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],bi=({children:e,className:n,padding:r,paddingInline:a,paddingBlock:t,margin:l,marginInline:i,marginBlock:s,width:d,minWidth:v,maxWidth:c,height:g,minHeight:E,maxHeight:A,position:y,inset:V,top:_,right:k,left:S,bottom:O,overflow:D,overflowX:T,overflowY:C,flexBasis:M,flexGrow:U,flexShrink:P,gridColumn:G})=>{const F=Fa(!1),{cn:I}=Y(),R=F?.isDarkside?"ax":"a",x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ge(R,"r","p","spacing",r)),ge(R,"r","pi","spacing",a)),ge(R,"r","pb","spacing",t)),ge(R,"r","m","spacing",l)),ge(R,"r","mi","spacing",i)),ge(R,"r","mb","spacing",s)),le(R,"r","w",d)),le(R,"r","minw",v)),le(R,"r","maxw",c)),le(R,"r","h",g)),le(R,"r","minh",E)),le(R,"r","maxh",A)),le(R,"r","position",y)),ge(R,"r","inset","spacing",V)),ge(R,"r","top","spacing",_)),ge(R,"r","right","spacing",k)),ge(R,"r","bottom","spacing",O)),ge(R,"r","left","spacing",S)),le(R,"r","overflow",D)),le(R,"r","overflowx",T)),le(R,"r","overflowy",C)),le(R,"r","flex-basis",M)),le(R,"r","flex-grow",U)),le(R,"r","flex-shrink",P)),le(R,"r","grid-column",G));return u.createElement(fn,{className:I({className:n,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":t,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":d,"navds-r-minw":v,"navds-r-maxw":c,"navds-r-h":g,"navds-r-minh":E,"navds-r-maxh":A,"navds-r-position":y,"navds-r-inset":V,"navds-r-top":_,"navds-r-right":k,"navds-r-bottom":O,"navds-r-left":S,"navds-r-overflow":D,"navds-r-overflowx":T,"navds-r-overflowy":C,"navds-r-flex-basis":M,"navds-r-flex-grow":U,"navds-r-flex-shrink":P,"navds-r-grid-column":G}),style:x},e)};var pi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const wn=b.forwardRef((e,n)=>{var{children:r,className:a,as:t="div",align:l,justify:i,wrap:s=!0,gap:d,style:v,direction:c="row",asChild:g}=e,E=pi(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const A=Fa(!1),y=A?.isDarkside?"ax":"a",{cn:V}=Y(),_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},v),ge(y,"stack","gap","spacing",d)),le(y,"stack","direction",c)),le(y,"stack","align",l)),le(y,"stack","justify",i)),k=g?fn:t;return u.createElement(bi,Object.assign({},E),u.createElement(k,Object.assign({},_e(E,yi),{ref:n,style:_,className:V("navds-stack",a,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":d,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":c,"navds-stack-wrap":s})}),r))});var Oi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ce=b.forwardRef((e,n)=>{var{as:r="div"}=e,a=Oi(e,["as"]);return u.createElement(wn,Object.assign({as:r},a,{ref:n,direction:"row"}))});var ki=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const ce=b.forwardRef((e,n)=>{var{as:r="div"}=e,a=ki(e,["as"]);return u.createElement(wn,Object.assign({as:r},a,{ref:n,direction:"column",wrap:!1}))});var Si=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ki=b.forwardRef((e,n)=>{var{as:r="a",className:a,underline:t=!0,variant:l,inlineText:i=!1,"data-color":s}=e,d=Si(e,["as","className","underline","variant","inlineText","data-color"]);const v=Fa(!1),{cn:c}=Y();let g;return v?.isDarkside?g=l:g=l??"action",u.createElement(r,Object.assign({"data-color":s??Ti(g),"data-variant":g},d,{ref:n,className:c("navds-link",a,{[`navds-link--${g}`]:g,"navds-link--remove-underline":!t,"navds-link--inline-text":i})}))});function Ti(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var Ai=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Ri=b.forwardRef((e,n)=>{var{children:r,className:a,variant:t,size:l="medium",icon:i,"data-color":s}=e,d=Ai(e,["children","className","variant","size","icon","data-color"]);const{cn:v}=Y(),c=t?.endsWith("-filled")&&"strong",g=t?.endsWith("-moderate")&&"moderate";return u.createElement(X,Object.assign({"data-color":s??Ni(t),"data-variant":c||g||"outline"},d,{ref:n,as:"span",size:l==="medium"?"medium":"small",className:v("navds-tag",a,`navds-tag--${t}`,`navds-tag--${l}`)}),i&&u.createElement("span",{className:v("navds-tag__icon--left")},i),r)});function Ni(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const Vi=(e,n)=>{const r=ma(e,"fieldset");return Object.assign(Object.assign({},r),{inputProps:{"aria-labelledby":e["aria-labelledby"]||$e(n,{[r.inputDescriptionId]:e.description&&!Ia(e.description)})}})};var Li=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Di=b.forwardRef((e,n)=>{var r,a,t;const l=Ie(),{inputProps:i,errorId:s,showErrorMsg:d,hasError:v,size:c,readOnly:g,inputDescriptionId:E}=Vi(e,l),{cn:A}=Y(),y=b.useContext(Da),{children:V,className:_,errorPropagation:k=!0,legend:S,description:O,hideLegend:D,nativeReadOnly:T=!0}=e,C=Li(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return u.createElement(Da.Provider,{value:{error:k?(r=e.error)!==null&&r!==void 0?r:y?.error:void 0,errorId:$e({[s]:d,[(a=y?.errorId)!==null&&a!==void 0?a:""]:!!y?.error}),size:c,disabled:(t=e.disabled)!==null&&t!==void 0?t:!1,readOnly:g}},u.createElement("fieldset",Object.assign({},_e(C,["errorId","error","size","readOnly"]),i,{ref:n,className:A(_,"navds-fieldset",`navds-fieldset--${c}`,{"navds-fieldset--error":v,"navds-fieldset--readonly":g})}),u.createElement(Ee,{id:l,size:c,as:"legend",className:A("navds-fieldset__legend",{"navds-sr-only":!!D})},g&&(T?u.createElement(tr,null):u.createElement(Kn,null)),S),!!O&&u.createElement(X,{className:A("navds-fieldset__description",{"navds-sr-only":!!D}),id:E,size:c??"medium",as:"div"},e.description),V,u.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:A("navds-fieldset__error")},d&&u.createElement(Ga,{size:c,showIcon:!0},e.error))))});var Ii=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Pn=u.createContext(null),wi=b.forwardRef((e,n)=>{var r,a,{children:t,className:l,name:i,defaultValue:s,value:d,onChange:v=()=>{},required:c,readOnly:g}=e,E=Ii(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:A}=Y(),y=b.useContext(Da),V=Ie();return u.createElement(Di,Object.assign({},E,{readOnly:g,ref:n,className:A(l,"navds-radio-group",`navds-radio-group--${(a=(r=E.size)!==null&&r!==void 0?r:y?.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),u.createElement(Pn.Provider,{value:{name:i??`radioGroupName-${V}`,defaultValue:s,value:d,onChange:v,required:c}},u.createElement("div",{className:A("navds-radio-buttons")},t)))});var Pi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const xi=e=>{const n=b.useContext(Pn),r=ma(_e(e,["description"]),"radio"),{inputProps:a,readOnly:t}=r,l=Pi(r,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:t,inputProps:Object.assign(Object.assign({},a),{name:n?.name,defaultChecked:n?.defaultValue===void 0?void 0:n?.defaultValue===e.value,checked:n?.value===void 0?void 0:n?.value===e.value,onChange:i=>{var s,d;t||((s=e.onChange)===null||s===void 0||s.call(e,i),(d=n?.onChange)===null||d===void 0||d.call(n,e.value))},onClick:i=>{var s;if(t){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:n?.required,type:"radio"})})},aa=b.forwardRef((e,n)=>{const{cn:r}=Y(),{inputProps:a,size:t,hasError:l,readOnly:i}=xi(e),s=Ie(),d=Fa(!1);return d?.isDarkside?u.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},u.createElement("input",Object.assign({},_e(e,["children","size","description","readOnly"]),_e(a,["aria-invalid","aria-describedby"]),{"aria-describedby":$e(a["aria-describedby"],{[s]:e.description})||void 0,className:r("navds-radio__input"),ref:n})),u.createElement(X,{as:"label",htmlFor:a.id,className:r("navds-radio__label"),size:t},e.children),e.description&&u.createElement(X,{id:s,size:t,className:r("navds-form-field__subdescription navds-radio__description")},e.description)):u.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},u.createElement("input",Object.assign({},_e(e,["children","size","description","readOnly"]),_e(a,["aria-invalid"]),{className:r("navds-radio__input"),ref:n})),u.createElement("label",{htmlFor:a.id,className:r("navds-radio__label")},u.createElement("span",{className:r("navds-radio__content")},u.createElement(X,{as:"span",size:t},e.children),e.description&&u.createElement(X,{as:"span",size:t,className:r("navds-form-field__subdescription navds-radio__description")},e.description))))});var Mi=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Pr=(e,n,r)=>{const{outerHeightStyle:a,overflow:t}=n;return r.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==t)?(r.current+=1,n):e},xr=e=>(e?.ownerDocument||document).defaultView||window;function Oa(e){return parseInt(e,10)||0}const Fi=b.forwardRef((e,n)=>{var r,a,{className:t,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:d,style:v,value:c}=e,g=Mi(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:E}=b.useRef(c!=null),A=b.useRef(null),y=vn(A,n),V=b.useRef(null),_=b.useRef(0),[k,S]=b.useState({outerHeightStyle:0}),O=u.useCallback(()=>{const M=A.current,P=xr(M).getComputedStyle(M);if(P.width==="0px")return{outerHeightStyle:0};const G=V.current;G.style.width=P.width,G.value=M.value||g.placeholder||"x",G.value.slice(-1)===`
`&&(G.value+=" ");const F=P.boxSizing,I=Oa(P.paddingBottom)+Oa(P.paddingTop),R=Oa(P.borderBottomWidth)+Oa(P.borderTopWidth),x=G.scrollHeight-I;G.value="x";const j=G.scrollHeight-I;let B=x;s&&(B=Math.max(Number(s)*j,B)),i&&(B=Math.min(Number(i)*j,B)),B=Math.max(B,j);const Q=B+(F==="border-box"?I+R:0),ie=Math.abs(B-x)<=1;return{outerHeightStyle:Q,overflow:ie}},[i,s,g.placeholder]),D=()=>{const M=O();Mr(M)||S(U=>Pr(U,M,_))};pr(()=>{const M=()=>{const I=O();Mr(I)||ht.flushSync(()=>{S(R=>Pr(R,I,_))})},U=yn(()=>{var I,R,x;if(_.current=0,!((I=A.current)===null||I===void 0)&&I.style.height||!((R=A.current)===null||R===void 0)&&R.style.width){((x=A.current)===null||x===void 0?void 0:x.style.overflow)==="hidden"&&S(j=>Object.assign(Object.assign({},j),{overflow:!1}));return}M()},166,!0),P=A.current,G=xr(P);G.addEventListener("resize",U);let F;return typeof ResizeObserver<"u"&&(F=new ResizeObserver(U),F.observe(P)),()=>{U.clear(),G.removeEventListener("resize",U),F&&F.disconnect()}},[O]),pr(()=>{D()}),b.useEffect(()=>{_.current=0},[c]);const T=M=>{_.current=0,E||D(),l&&l(M)},C=Object.assign({"--__ac-textarea-height":k.outerHeightStyle+"px","--__axc-textarea-height":k.outerHeightStyle+"px",overflow:k.overflow&&!d&&!(!((r=A.current)===null||r===void 0)&&r.style.height)&&!(!((a=A.current)===null||a===void 0)&&a.style.width)?"hidden":void 0},v);return u.createElement(u.Fragment,null,u.createElement("textarea",Object.assign({value:c,onChange:T,ref:y,rows:s,style:C},g,{className:t})),u.createElement("textarea",{"aria-hidden":!0,className:t,readOnly:!0,ref:V,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},v)}))});function Mr(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Gi=({maxLengthId:e,maxLength:n,currentLength:r,size:a,i18n:t})=>{const{cn:l}=Y(),i=ca("Textarea",{charsLeft:t?.counterLeft?`{chars} ${t.counterLeft}`:void 0,charsTooMany:t?.counterTooMuch?`{chars} ${t.counterTooMuch}`:void 0}),s=n-r,[d,v]=b.useState(s);return b.useEffect(()=>{const c=yn(()=>{v(s)},2e3);return c(),()=>{c.clear()}},[s]),u.createElement(u.Fragment,null,u.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:n})),s<20&&u.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},Fr(d,i)),u.createElement(X,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:a},Fr(s,i)))},Fr=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var ji=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r};const Bi=b.forwardRef((e,n)=>{var r,a,t;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:d,size:v,inputDescriptionId:c}=ma(e,"textarea"),{label:g,className:E,description:A,maxLength:y,hideLabel:V=!1,resize:_,UNSAFE_autoScrollbar:k,i18n:S,readOnly:O}=e,D=ji(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:T}=Y(),C=Ie(),M=y!==void 0&&y>0,[U,P]=b.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),G=()=>{let I=D?.minRows?D?.minRows:3;return v==="small"&&(I=D?.minRows?D?.minRows:2),I},F=$e(l["aria-describedby"],{[C??""]:M});return u.createElement("div",{className:T(E,"navds-form-field",`navds-form-field--${v}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":O,"navds-textarea--readonly":O,"navds-textarea--error":d,"navds-textarea--autoscrollbar":k,[`navds-textarea--resize-${_===!0?"both":_}`]:_})},u.createElement(Ee,{htmlFor:l.id,size:v,className:T("navds-form-field__label",{"navds-sr-only":V})},O&&u.createElement(tr,null),g),!!A&&u.createElement(X,{className:T("navds-form-field__description",{"navds-sr-only":V}),id:c,size:v,as:"div"},A),u.createElement(Fi,Object.assign({},_e(D,["error","errorId","size"]),l,{onChange:Ue(e.onChange,e.value===void 0?I=>P(I.target.value):void 0),minRows:G(),autoScrollbar:k,ref:n,readOnly:O,className:T("navds-textarea__input","navds-body-short",`navds-body-short--${v??"medium"}`)},F?{"aria-describedby":F}:{})),M&&!O&&!l.disabled&&u.createElement(Gi,{maxLengthId:C,maxLength:y,currentLength:(t=(a=e.value)===null||a===void 0?void 0:a.length)!==null&&t!==void 0?t:U.length,size:v,i18n:S}),u.createElement("div",{className:T("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&u.createElement(Ga,{size:v,showIcon:!0},e.error)))});var va=e=>e.type==="checkbox",De=e=>e instanceof Date,oe=e=>e==null;const xn=e=>typeof e=="object";var ae=e=>!oe(e)&&!Array.isArray(e)&&xn(e)&&!De(e),Mn=e=>ae(e)&&e.target?va(e.target)?e.target.checked:e.target.value:e,Ui=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Fn=(e,n)=>e.has(Ui(n)),Hi=e=>{const n=e.constructor&&e.constructor.prototype;return ae(n)&&n.hasOwnProperty("isPrototypeOf")},lr=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function re(e){let n;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(!(lr&&(e instanceof Blob||a))&&(r||ae(e)))if(n=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!Hi(e))n=e;else for(const t in e)e.hasOwnProperty(t)&&(n[t]=re(e[t]));else return e;return n}var ja=e=>/^\w*$/.test(e),Z=e=>e===void 0,ir=e=>Array.isArray(e)?e.filter(Boolean):[],sr=e=>ir(e.replace(/["|']|\]/g,"").split(/\.|\[/)),N=(e,n,r)=>{if(!n||!ae(e))return r;const a=(ja(n)?[n]:sr(n)).reduce((t,l)=>oe(t)?t:t[l],e);return Z(a)||a===e?Z(e[n])?r:e[n]:a},de=e=>typeof e=="boolean",J=(e,n,r)=>{let a=-1;const t=ja(n)?[n]:sr(n),l=t.length,i=l-1;for(;++a<l;){const s=t[a];let d=r;if(a!==i){const v=e[s];d=ae(v)||Array.isArray(v)?v:isNaN(+t[a+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=d,e=e[s]}};const wa={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ye={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ke={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},or=u.createContext(null);or.displayName="HookFormContext";const Ae=()=>u.useContext(or),Ci=e=>{const{children:n,...r}=e;return u.createElement(or.Provider,{value:r},n)};var Gn=(e,n,r,a=!0)=>{const t={defaultValues:n._defaultValues};for(const l in e)Object.defineProperty(t,l,{get:()=>{const i=l;return n._proxyFormState[i]!==ye.all&&(n._proxyFormState[i]=!a||ye.all),r&&(r[i]=!0),e[i]}});return t};const ur=typeof window<"u"?u.useLayoutEffect:u.useEffect;function qi(e){const n=Ae(),{control:r=n.control,disabled:a,name:t,exact:l}=e||{},[i,s]=u.useState(r._formState),d=u.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return ur(()=>r._subscribe({name:t,formState:d.current,exact:l,callback:v=>{!a&&s({...r._formState,...v})}}),[t,a,l]),u.useEffect(()=>{d.current.isValid&&r._setValid(!0)},[r]),u.useMemo(()=>Gn(i,r,d.current,!1),[i,r])}var me=e=>typeof e=="string",jn=(e,n,r,a,t)=>me(e)?(a&&n.watch.add(e),N(r,e,t)):Array.isArray(e)?e.map(l=>(a&&n.watch.add(l),N(r,l))):(a&&(n.watchAll=!0),r),Ja=e=>oe(e)||!xn(e);function Se(e,n,r=new WeakSet){if(Ja(e)||Ja(n))return e===n;if(De(e)&&De(n))return e.getTime()===n.getTime();const a=Object.keys(e),t=Object.keys(n);if(a.length!==t.length)return!1;if(r.has(e)||r.has(n))return!0;r.add(e),r.add(n);for(const l of a){const i=e[l];if(!t.includes(l))return!1;if(l!=="ref"){const s=n[l];if(De(i)&&De(s)||ae(i)&&ae(s)||Array.isArray(i)&&Array.isArray(s)?!Se(i,s,r):i!==s)return!1}}return!0}function $i(e){const n=Ae(),{control:r=n.control,name:a,defaultValue:t,disabled:l,exact:i,compute:s}=e||{},d=u.useRef(t),v=u.useRef(s),c=u.useRef(void 0);v.current=s;const g=u.useMemo(()=>r._getWatch(a,d.current),[r,a]),[E,A]=u.useState(v.current?v.current(g):g);return ur(()=>r._subscribe({name:a,formState:{values:!0},exact:i,callback:y=>{if(!l){const V=jn(a,r._names,y.values||r._formValues,!1,d.current);if(v.current){const _=v.current(V);Se(_,c.current)||(A(_),c.current=_)}else A(V)}}}),[r,l,a,i]),u.useEffect(()=>r._removeUnmounted()),E}function dr(e){const n=Ae(),{name:r,disabled:a,control:t=n.control,shouldUnregister:l,defaultValue:i}=e,s=Fn(t._names.array,r),d=u.useMemo(()=>N(t._formValues,r,N(t._defaultValues,r,i)),[t,r,i]),v=$i({control:t,name:r,defaultValue:d,exact:!0}),c=qi({control:t,name:r,exact:!0}),g=u.useRef(e),E=u.useRef(void 0),A=u.useRef(t.register(r,{...e.rules,value:v,...de(e.disabled)?{disabled:e.disabled}:{}}));g.current=e;const y=u.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!N(c.errors,r)},isDirty:{enumerable:!0,get:()=>!!N(c.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!N(c.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!N(c.validatingFields,r)},error:{enumerable:!0,get:()=>N(c.errors,r)}}),[c,r]),V=u.useCallback(O=>A.current.onChange({target:{value:Mn(O),name:r},type:wa.CHANGE}),[r]),_=u.useCallback(()=>A.current.onBlur({target:{value:N(t._formValues,r),name:r},type:wa.BLUR}),[r,t._formValues]),k=u.useCallback(O=>{const D=N(t._fields,r);D&&O&&(D._f.ref={focus:()=>O.focus&&O.focus(),select:()=>O.select&&O.select(),setCustomValidity:T=>O.setCustomValidity(T),reportValidity:()=>O.reportValidity()})},[t._fields,r]),S=u.useMemo(()=>({name:r,value:v,...de(a)||c.disabled?{disabled:c.disabled||a}:{},onChange:V,onBlur:_,ref:k}),[r,a,c.disabled,V,_,k,v]);return u.useEffect(()=>{const O=t._options.shouldUnregister||l,D=E.current;D&&D!==r&&!s&&t.unregister(D),t.register(r,{...g.current.rules,...de(g.current.disabled)?{disabled:g.current.disabled}:{}});const T=(C,M)=>{const U=N(t._fields,C);U&&U._f&&(U._f.mount=M)};if(T(r,!0),O){const C=re(N(t._options.defaultValues,r));J(t._defaultValues,r,C),Z(N(t._formValues,r))&&J(t._formValues,r,C)}return!s&&t.register(r),E.current=r,()=>{(s?O&&!t._state.action:O)?t.unregister(r):T(r,!1)}},[r,t,s,l]),u.useEffect(()=>{t._setDisabledField({disabled:a,name:r})},[a,r,t]),u.useMemo(()=>({field:S,formState:c,fieldState:y}),[S,c,y])}var Yi=(e,n,r,a,t)=>n?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:t||!0}}:{},sa=e=>Array.isArray(e)?e:[e],Gr=()=>{let e=[];return{get observers(){return e},next:t=>{for(const l of e)l.next&&l.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(l=>l!==t)}}),unsubscribe:()=>{e=[]}}};function Bn(e,n){const r={};for(const a in e)if(e.hasOwnProperty(a)){const t=e[a],l=n[a];if(t&&ae(t)&&l){const i=Bn(t,l);ae(i)&&(r[a]=i)}else e[a]&&(r[a]=l)}return r}var ue=e=>ae(e)&&!Object.keys(e).length,cr=e=>e.type==="file",be=e=>typeof e=="function",Pa=e=>{if(!lr)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},Un=e=>e.type==="select-multiple",mr=e=>e.type==="radio",zi=e=>mr(e)||va(e),za=e=>Pa(e)&&e.isConnected;function Wi(e,n){const r=n.slice(0,-1).length;let a=0;for(;a<r;)e=Z(e)?a++:e[n[a++]];return e}function Ji(e){for(const n in e)if(e.hasOwnProperty(n)&&!Z(e[n]))return!1;return!0}function ee(e,n){const r=Array.isArray(n)?n:ja(n)?[n]:sr(n),a=r.length===1?e:Wi(e,r),t=r.length-1,l=r[t];return a&&delete a[l],t!==0&&(ae(a)&&ue(a)||Array.isArray(a)&&Ji(a))&&ee(e,r.slice(0,-1)),e}var Zi=e=>{for(const n in e)if(be(e[n]))return!0;return!1};function Hn(e){return Array.isArray(e)||ae(e)&&!Zi(e)}function Za(e,n={}){for(const r in e)Hn(e[r])?(n[r]=Array.isArray(e[r])?[]:{},Za(e[r],n[r])):oe(e[r])||(n[r]=!0);return n}function je(e,n,r){r||(r=Za(n));for(const a in e)Hn(e[a])?Z(n)||Ja(r[a])?r[a]=Za(e[a],Array.isArray(e[a])?[]:{}):je(e[a],oe(n)?{}:n[a],r[a]):r[a]=!Se(e[a],n[a]);return r}const jr={value:!1,isValid:!1},Br={value:!0,isValid:!0};var Cn=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Z(e[0].attributes.value)?Z(e[0].value)||e[0].value===""?Br:{value:e[0].value,isValid:!0}:Br:jr}return jr},qn=(e,{valueAsNumber:n,valueAsDate:r,setValueAs:a})=>Z(e)?e:n?e===""?NaN:e&&+e:r&&me(e)?new Date(e):a?a(e):e;const Ur={isValid:!1,value:null};var $n=e=>Array.isArray(e)?e.reduce((n,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:n,Ur):Ur;function Hr(e){const n=e.ref;return cr(n)?n.files:mr(n)?$n(e.refs).value:Un(n)?[...n.selectedOptions].map(({value:r})=>r):va(n)?Cn(e.refs).value:qn(Z(n.value)?e.ref.value:n.value,e)}var Xi=(e,n,r,a)=>{const t={};for(const l of e){const i=N(n,l);i&&J(t,l,i._f)}return{criteriaMode:r,names:[...e],fields:t,shouldUseNativeValidation:a}},xa=e=>e instanceof RegExp,ra=e=>Z(e)?e:xa(e)?e.source:ae(e)?xa(e.value)?e.value.source:e.value:e,Cr=e=>({isOnSubmit:!e||e===ye.onSubmit,isOnBlur:e===ye.onBlur,isOnChange:e===ye.onChange,isOnAll:e===ye.all,isOnTouch:e===ye.onTouched});const qr="AsyncFunction";var Qi=e=>!!e&&!!e.validate&&!!(be(e.validate)&&e.validate.constructor.name===qr||ae(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===qr)),es=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),$r=(e,n,r)=>!r&&(n.watchAll||n.watch.has(e)||[...n.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const oa=(e,n,r,a)=>{for(const t of r||Object.keys(e)){const l=N(e,t);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&n(i.refs[0],t)&&!a)return!0;if(i.ref&&n(i.ref,i.name)&&!a)return!0;if(oa(s,n))break}else if(ae(s)&&oa(s,n))break}}};function Yr(e,n,r){const a=N(e,r);if(a||ja(r))return{error:a,name:r};const t=r.split(".");for(;t.length;){const l=t.join("."),i=N(n,l),s=N(e,l);if(i&&!Array.isArray(i)&&r!==l)return{name:r};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};t.pop()}return{name:r}}var as=(e,n,r,a)=>{r(e);const{name:t,...l}=e;return ue(l)||Object.keys(l).length>=Object.keys(n).length||Object.keys(l).find(i=>n[i]===(!a||ye.all))},rs=(e,n,r)=>!e||!n||e===n||sa(e).some(a=>a&&(r?a===n:a.startsWith(n)||n.startsWith(a))),ns=(e,n,r,a,t)=>t.isOnAll?!1:!r&&t.isOnTouch?!(n||e):(r?a.isOnBlur:t.isOnBlur)?!e:(r?a.isOnChange:t.isOnChange)?e:!0,ts=(e,n)=>!ir(N(e,n)).length&&ee(e,n),ls=(e,n,r)=>{const a=sa(N(e,r));return J(a,"root",n[r]),J(e,r,a),e};function zr(e,n,r="validate"){if(me(e)||Array.isArray(e)&&e.every(me)||de(e)&&!e)return{type:r,message:me(e)?e:"",ref:n}}var Ge=e=>ae(e)&&!xa(e)?e:{value:e,message:""},Wr=async(e,n,r,a,t,l)=>{const{ref:i,refs:s,required:d,maxLength:v,minLength:c,min:g,max:E,pattern:A,validate:y,name:V,valueAsNumber:_,mount:k}=e._f,S=N(r,V);if(!k||n.has(V))return{};const O=s?s[0]:i,D=I=>{t&&O.reportValidity&&(O.setCustomValidity(de(I)?"":I||""),O.reportValidity())},T={},C=mr(i),M=va(i),U=C||M,P=(_||cr(i))&&Z(i.value)&&Z(S)||Pa(i)&&i.value===""||S===""||Array.isArray(S)&&!S.length,G=Yi.bind(null,V,a,T),F=(I,R,x,j=ke.maxLength,B=ke.minLength)=>{const Q=I?R:x;T[V]={type:I?j:B,message:Q,ref:i,...G(I?j:B,Q)}};if(l?!Array.isArray(S)||!S.length:d&&(!U&&(P||oe(S))||de(S)&&!S||M&&!Cn(s).isValid||C&&!$n(s).isValid)){const{value:I,message:R}=me(d)?{value:!!d,message:d}:Ge(d);if(I&&(T[V]={type:ke.required,message:R,ref:O,...G(ke.required,R)},!a))return D(R),T}if(!P&&(!oe(g)||!oe(E))){let I,R;const x=Ge(E),j=Ge(g);if(!oe(S)&&!isNaN(S)){const B=i.valueAsNumber||S&&+S;oe(x.value)||(I=B>x.value),oe(j.value)||(R=B<j.value)}else{const B=i.valueAsDate||new Date(S),Q=he=>new Date(new Date().toDateString()+" "+he),ie=i.type=="time",se=i.type=="week";me(x.value)&&S&&(I=ie?Q(S)>Q(x.value):se?S>x.value:B>new Date(x.value)),me(j.value)&&S&&(R=ie?Q(S)<Q(j.value):se?S<j.value:B<new Date(j.value))}if((I||R)&&(F(!!I,x.message,j.message,ke.max,ke.min),!a))return D(T[V].message),T}if((v||c)&&!P&&(me(S)||l&&Array.isArray(S))){const I=Ge(v),R=Ge(c),x=!oe(I.value)&&S.length>+I.value,j=!oe(R.value)&&S.length<+R.value;if((x||j)&&(F(x,I.message,R.message),!a))return D(T[V].message),T}if(A&&!P&&me(S)){const{value:I,message:R}=Ge(A);if(xa(I)&&!S.match(I)&&(T[V]={type:ke.pattern,message:R,ref:i,...G(ke.pattern,R)},!a))return D(R),T}if(y){if(be(y)){const I=await y(S,r),R=zr(I,O);if(R&&(T[V]={...R,...G(ke.validate,R.message)},!a))return D(R.message),T}else if(ae(y)){let I={};for(const R in y){if(!ue(I)&&!a)break;const x=zr(await y[R](S,r),O,R);x&&(I={...x,...G(R,x.message)},D(x.message),a&&(T[V]=I))}if(!ue(I)&&(T[V]={ref:O,...I},!a))return T}}return D(!0),T};const is={mode:ye.onSubmit,reValidateMode:ye.onChange,shouldFocusError:!0};function ss(e={}){let n={...is,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:be(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},a={},t=ae(n.defaultValues)||ae(n.values)?re(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:re(t),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,v=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...c};const E={array:Gr(),state:Gr()},A=n.criteriaMode===ye.all,y=o=>m=>{clearTimeout(v),v=setTimeout(o,m)},V=async o=>{if(!n.disabled&&(c.isValid||g.isValid||o)){const m=n.resolver?ue((await M()).errors):await P(a,!0);m!==r.isValid&&E.state.next({isValid:m})}},_=(o,m)=>{!n.disabled&&(c.isValidating||c.validatingFields||g.isValidating||g.validatingFields)&&((o||Array.from(s.mount)).forEach(f=>{f&&(m?J(r.validatingFields,f,m):ee(r.validatingFields,f))}),E.state.next({validatingFields:r.validatingFields,isValidating:!ue(r.validatingFields)}))},k=(o,m=[],f,L,K=!0,p=!0)=>{if(L&&f&&!n.disabled){if(i.action=!0,p&&Array.isArray(N(a,o))){const w=f(N(a,o),L.argA,L.argB);K&&J(a,o,w)}if(p&&Array.isArray(N(r.errors,o))){const w=f(N(r.errors,o),L.argA,L.argB);K&&J(r.errors,o,w),ts(r.errors,o)}if((c.touchedFields||g.touchedFields)&&p&&Array.isArray(N(r.touchedFields,o))){const w=f(N(r.touchedFields,o),L.argA,L.argB);K&&J(r.touchedFields,o,w)}(c.dirtyFields||g.dirtyFields)&&(r.dirtyFields=je(t,l)),E.state.next({name:o,isDirty:F(o,m),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else J(l,o,m)},S=(o,m)=>{J(r.errors,o,m),E.state.next({errors:r.errors})},O=o=>{r.errors=o,E.state.next({errors:r.errors,isValid:!1})},D=(o,m,f,L)=>{const K=N(a,o);if(K){const p=N(l,o,Z(f)?N(t,o):f);Z(p)||L&&L.defaultChecked||m?J(l,o,m?p:Hr(K._f)):x(o,p),i.mount&&V()}},T=(o,m,f,L,K)=>{let p=!1,w=!1;const q={name:o};if(!n.disabled){if(!f||L){(c.isDirty||g.isDirty)&&(w=r.isDirty,r.isDirty=q.isDirty=F(),p=w!==q.isDirty);const W=Se(N(t,o),m);w=!!N(r.dirtyFields,o),W?ee(r.dirtyFields,o):J(r.dirtyFields,o,!0),q.dirtyFields=r.dirtyFields,p=p||(c.dirtyFields||g.dirtyFields)&&w!==!W}if(f){const W=N(r.touchedFields,o);W||(J(r.touchedFields,o,f),q.touchedFields=r.touchedFields,p=p||(c.touchedFields||g.touchedFields)&&W!==f)}p&&K&&E.state.next(q)}return p?q:{}},C=(o,m,f,L)=>{const K=N(r.errors,o),p=(c.isValid||g.isValid)&&de(m)&&r.isValid!==m;if(n.delayError&&f?(d=y(()=>S(o,f)),d(n.delayError)):(clearTimeout(v),d=null,f?J(r.errors,o,f):ee(r.errors,o)),(f?!Se(K,f):K)||!ue(L)||p){const w={...L,...p&&de(m)?{isValid:m}:{},errors:r.errors,name:o};r={...r,...w},E.state.next(w)}},M=async o=>{_(o,!0);const m=await n.resolver(l,n.context,Xi(o||s.mount,a,n.criteriaMode,n.shouldUseNativeValidation));return _(o),m},U=async o=>{const{errors:m}=await M(o);if(o)for(const f of o){const L=N(m,f);L?J(r.errors,f,L):ee(r.errors,f)}else r.errors=m;return m},P=async(o,m,f={valid:!0})=>{for(const L in o){const K=o[L];if(K){const{_f:p,...w}=K;if(p){const q=s.array.has(p.name),W=K._f&&Qi(K._f);W&&c.validatingFields&&_([p.name],!0);const fe=await Wr(K,s.disabled,l,A,n.shouldUseNativeValidation&&!m,q);if(W&&c.validatingFields&&_([p.name]),fe[p.name]&&(f.valid=!1,m))break;!m&&(N(fe,p.name)?q?ls(r.errors,fe,p.name):J(r.errors,p.name,fe[p.name]):ee(r.errors,p.name))}!ue(w)&&await P(w,m,f)}}return f.valid},G=()=>{for(const o of s.unMount){const m=N(a,o);m&&(m._f.refs?m._f.refs.every(f=>!za(f)):!za(m._f.ref))&&ze(o)}s.unMount=new Set},F=(o,m)=>!n.disabled&&(o&&m&&J(l,o,m),!Se(he(),t)),I=(o,m,f)=>jn(o,s,{...i.mount?l:Z(m)?t:me(o)?{[o]:m}:m},f,m),R=o=>ir(N(i.mount?l:t,o,n.shouldUnregister?N(t,o,[]):[])),x=(o,m,f={})=>{const L=N(a,o);let K=m;if(L){const p=L._f;p&&(!p.disabled&&J(l,o,qn(m,p)),K=Pa(p.ref)&&oe(m)?"":m,Un(p.ref)?[...p.ref.options].forEach(w=>w.selected=K.includes(w.value)):p.refs?va(p.ref)?p.refs.forEach(w=>{(!w.defaultChecked||!w.disabled)&&(Array.isArray(K)?w.checked=!!K.find(q=>q===w.value):w.checked=K===w.value||!!K)}):p.refs.forEach(w=>w.checked=w.value===K):cr(p.ref)?p.ref.value="":(p.ref.value=K,p.ref.type||E.state.next({name:o,values:re(l)})))}(f.shouldDirty||f.shouldTouch)&&T(o,K,f.shouldTouch,f.shouldDirty,!0),f.shouldValidate&&se(o)},j=(o,m,f)=>{for(const L in m){if(!m.hasOwnProperty(L))return;const K=m[L],p=o+"."+L,w=N(a,p);(s.array.has(o)||ae(K)||w&&!w._f)&&!De(K)?j(p,K,f):x(p,K,f)}},B=(o,m,f={})=>{const L=N(a,o),K=s.array.has(o),p=re(m);J(l,o,p),K?(E.array.next({name:o,values:re(l)}),(c.isDirty||c.dirtyFields||g.isDirty||g.dirtyFields)&&f.shouldDirty&&E.state.next({name:o,dirtyFields:je(t,l),isDirty:F(o,p)})):L&&!L._f&&!oe(p)?j(o,p,f):x(o,p,f),$r(o,s)&&E.state.next({...r,name:o}),E.state.next({name:i.mount?o:void 0,values:re(l)})},Q=async o=>{i.mount=!0;const m=o.target;let f=m.name,L=!0;const K=N(a,f),p=W=>{L=Number.isNaN(W)||De(W)&&isNaN(W.getTime())||Se(W,N(l,f,W))},w=Cr(n.mode),q=Cr(n.reValidateMode);if(K){let W,fe;const ya=m.type?Hr(K._f):Mn(o),Re=o.type===wa.BLUR||o.type===wa.FOCUS_OUT,nt=!es(K._f)&&!n.resolver&&!N(r.errors,f)&&!K._f.deps||ns(Re,N(r.touchedFields,f),r.isSubmitted,q,w),Ca=$r(f,s,Re);J(l,f,ya),Re?(!m||!m.readOnly)&&(K._f.onBlur&&K._f.onBlur(o),d&&d(0)):K._f.onChange&&K._f.onChange(o);const qa=T(f,ya,Re),tt=!ue(qa)||Ca;if(!Re&&E.state.next({name:f,type:o.type,values:re(l)}),nt)return(c.isValid||g.isValid)&&(n.mode==="onBlur"?Re&&V():Re||V()),tt&&E.state.next({name:f,...Ca?{}:qa});if(!Re&&Ca&&E.state.next({...r}),n.resolver){const{errors:_r}=await M([f]);if(p(ya),L){const lt=Yr(r.errors,a,f),hr=Yr(_r,a,lt.name||f);W=hr.error,f=hr.name,fe=ue(_r)}}else _([f],!0),W=(await Wr(K,s.disabled,l,A,n.shouldUseNativeValidation))[f],_([f]),p(ya),L&&(W?fe=!1:(c.isValid||g.isValid)&&(fe=await P(a,!0)));L&&(K._f.deps&&(!Array.isArray(K._f.deps)||K._f.deps.length>0)&&se(K._f.deps),C(f,fe,W,qa))}},ie=(o,m)=>{if(N(r.errors,m)&&o.focus)return o.focus(),1},se=async(o,m={})=>{let f,L;const K=sa(o);if(n.resolver){const p=await U(Z(o)?o:K);f=ue(p),L=o?!K.some(w=>N(p,w)):f}else o?(L=(await Promise.all(K.map(async p=>{const w=N(a,p);return await P(w&&w._f?{[p]:w}:w)}))).every(Boolean),!(!L&&!r.isValid)&&V()):L=f=await P(a);return E.state.next({...!me(o)||(c.isValid||g.isValid)&&f!==r.isValid?{}:{name:o},...n.resolver||!o?{isValid:f}:{},errors:r.errors}),m.shouldFocus&&!L&&oa(a,ie,o?K:s.mount),L},he=(o,m)=>{let f={...i.mount?l:t};return m&&(f=Bn(m.dirtyFields?r.dirtyFields:r.touchedFields,f)),Z(o)?f:me(o)?N(f,o):o.map(L=>N(f,L))},ne=(o,m)=>({invalid:!!N((m||r).errors,o),isDirty:!!N((m||r).dirtyFields,o),error:N((m||r).errors,o),isValidating:!!N(r.validatingFields,o),isTouched:!!N((m||r).touchedFields,o)}),ve=o=>{o&&sa(o).forEach(m=>ee(r.errors,m)),E.state.next({errors:o?r.errors:{}})},Oe=(o,m,f)=>{const L=(N(a,o,{_f:{}})._f||{}).ref,K=N(r.errors,o)||{},{ref:p,message:w,type:q,...W}=K;J(r.errors,o,{...W,...m,ref:L}),E.state.next({name:o,errors:r.errors,isValid:!1}),f&&f.shouldFocus&&L&&L.focus&&L.focus()},Ua=(o,m)=>be(o)?E.state.subscribe({next:f=>"values"in f&&o(I(void 0,m),f)}):I(o,m,!0),Ea=o=>E.state.subscribe({next:m=>{rs(o.name,m.name,o.exact)&&as(m,o.formState||c,Xe,o.reRenderRoot)&&o.callback({values:{...l},...r,...m,defaultValues:t})}}).unsubscribe,Ha=o=>(i.mount=!0,g={...g,...o.formState},Ea({...o,formState:g})),ze=(o,m={})=>{for(const f of o?sa(o):s.mount)s.mount.delete(f),s.array.delete(f),m.keepValue||(ee(a,f),ee(l,f)),!m.keepError&&ee(r.errors,f),!m.keepDirty&&ee(r.dirtyFields,f),!m.keepTouched&&ee(r.touchedFields,f),!m.keepIsValidating&&ee(r.validatingFields,f),!n.shouldUnregister&&!m.keepDefaultValue&&ee(t,f);E.state.next({values:re(l)}),E.state.next({...r,...m.keepDirty?{isDirty:F()}:{}}),!m.keepIsValid&&V()},_a=({disabled:o,name:m})=>{(de(o)&&i.mount||o||s.disabled.has(m))&&(o?s.disabled.add(m):s.disabled.delete(m))},we=(o,m={})=>{let f=N(a,o);const L=de(m.disabled)||de(n.disabled);return J(a,o,{...f||{},_f:{...f&&f._f?f._f:{ref:{name:o}},name:o,mount:!0,...m}}),s.mount.add(o),f?_a({disabled:de(m.disabled)?m.disabled:n.disabled,name:o}):D(o,!0,m.value),{...L?{disabled:m.disabled||n.disabled}:{},...n.progressive?{required:!!m.required,min:ra(m.min),max:ra(m.max),minLength:ra(m.minLength),maxLength:ra(m.maxLength),pattern:ra(m.pattern)}:{},name:o,onChange:Q,onBlur:Q,ref:K=>{if(K){we(o,m),f=N(a,o);const p=Z(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,w=zi(p),q=f._f.refs||[];if(w?q.find(W=>W===p):p===f._f.ref)return;J(a,o,{_f:{...f._f,...w?{refs:[...q.filter(za),p,...Array.isArray(N(t,o))?[{}]:[]],ref:{type:p.type,name:o}}:{ref:p}}}),D(o,!1,void 0,p)}else f=N(a,o,{}),f._f&&(f._f.mount=!1),(n.shouldUnregister||m.shouldUnregister)&&!(Fn(s.array,o)&&i.action)&&s.unMount.add(o)}}},Pe=()=>n.shouldFocusError&&oa(a,ie,s.mount),We=o=>{de(o)&&(E.state.next({disabled:o}),oa(a,(m,f)=>{const L=N(a,f);L&&(m.disabled=L._f.disabled||o,Array.isArray(L._f.refs)&&L._f.refs.forEach(K=>{K.disabled=L._f.disabled||o}))},0,!1))},xe=(o,m)=>async f=>{let L;f&&(f.preventDefault&&f.preventDefault(),f.persist&&f.persist());let K=re(l);if(E.state.next({isSubmitting:!0}),n.resolver){const{errors:p,values:w}=await M();r.errors=p,K=re(w)}else await P(a);if(s.disabled.size)for(const p of s.disabled)ee(K,p);if(ee(r.errors,"root"),ue(r.errors)){E.state.next({errors:{}});try{await o(K,f)}catch(p){L=p}}else m&&await m({...r.errors},f),Pe(),setTimeout(Pe);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ue(r.errors)&&!L,submitCount:r.submitCount+1,errors:r.errors}),L)throw L},Je=(o,m={})=>{N(a,o)&&(Z(m.defaultValue)?B(o,re(N(t,o))):(B(o,m.defaultValue),J(t,o,re(m.defaultValue))),m.keepTouched||ee(r.touchedFields,o),m.keepDirty||(ee(r.dirtyFields,o),r.isDirty=m.defaultValue?F(o,re(N(t,o))):F()),m.keepError||(ee(r.errors,o),c.isValid&&V()),E.state.next({...r}))},Ve=(o,m={})=>{const f=o?re(o):t,L=re(f),K=ue(o),p=K?t:L;if(m.keepDefaultValues||(t=f),!m.keepValues){if(m.keepDirtyValues){const w=new Set([...s.mount,...Object.keys(je(t,l))]);for(const q of Array.from(w))N(r.dirtyFields,q)?J(p,q,N(l,q)):B(q,N(p,q))}else{if(lr&&Z(o))for(const w of s.mount){const q=N(a,w);if(q&&q._f){const W=Array.isArray(q._f.refs)?q._f.refs[0]:q._f.ref;if(Pa(W)){const fe=W.closest("form");if(fe){fe.reset();break}}}}if(m.keepFieldsRef)for(const w of s.mount)B(w,N(p,w));else a={}}l=n.shouldUnregister?m.keepDefaultValues?re(t):{}:re(p),E.array.next({values:{...p}}),E.state.next({values:{...p}})}s={mount:m.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!c.isValid||!!m.keepIsValid||!!m.keepDirtyValues,i.watch=!!n.shouldUnregister,E.state.next({submitCount:m.keepSubmitCount?r.submitCount:0,isDirty:K?!1:m.keepDirty?r.isDirty:!!(m.keepDefaultValues&&!Se(o,t)),isSubmitted:m.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:K?{}:m.keepDirtyValues?m.keepDefaultValues&&l?je(t,l):r.dirtyFields:m.keepDefaultValues&&o?je(t,o):m.keepDirty?r.dirtyFields:{},touchedFields:m.keepTouched?r.touchedFields:{},errors:m.keepErrors?r.errors:{},isSubmitSuccessful:m.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:t})},Le=(o,m)=>Ve(be(o)?o(l):o,m),Ze=(o,m={})=>{const f=N(a,o),L=f&&f._f;if(L){const K=L.refs?L.refs[0]:L.ref;K.focus&&(K.focus(),m.shouldSelect&&be(K.select)&&K.select())}},Xe=o=>{r={...r,...o}},Me={control:{register:we,unregister:ze,getFieldState:ne,handleSubmit:xe,setError:Oe,_subscribe:Ea,_runSchema:M,_focusError:Pe,_getWatch:I,_getDirty:F,_setValid:V,_setFieldArray:k,_setDisabledField:_a,_setErrors:O,_getFieldArray:R,_reset:Ve,_resetDefaultValues:()=>be(n.defaultValues)&&n.defaultValues().then(o=>{Le(o,n.resetOptions),E.state.next({isLoading:!1})}),_removeUnmounted:G,_disableForm:We,_subjects:E,_proxyFormState:c,get _fields(){return a},get _formValues(){return l},get _state(){return i},set _state(o){i=o},get _defaultValues(){return t},get _names(){return s},set _names(o){s=o},get _formState(){return r},get _options(){return n},set _options(o){n={...n,...o}}},subscribe:Ha,trigger:se,register:we,handleSubmit:xe,watch:Ua,setValue:B,getValues:he,reset:Le,resetField:Je,clearErrors:ve,unregister:ze,setError:Oe,setFocus:Ze,getFieldState:ne};return{...Me,formControl:Me}}function os(e={}){const n=u.useRef(void 0),r=u.useRef(void 0),[a,t]=u.useState({isDirty:!1,isValidating:!1,isLoading:be(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:be(e.defaultValues)?void 0:e.defaultValues});if(!n.current)if(e.formControl)n.current={...e.formControl,formState:a},e.defaultValues&&!be(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=ss(e);n.current={...s,formState:a}}const l=n.current.control;return l._options=e,ur(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>t({...l._formState}),reRenderRoot:!0});return t(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),u.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),u.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),u.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),u.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),u.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==a.isDirty&&l._subjects.state.next({isDirty:i})}},[l,a.isDirty]),u.useEffect(()=>{e.values&&!Se(e.values,r.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),r.current=e.values,t(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),u.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),n.current.formState=Gn(a,l),n.current}function us(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jr={exports:{}},na={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zr;function ds(){if(Zr)return na;Zr=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(a,t,l){var i=null;if(l!==void 0&&(i=""+l),t.key!==void 0&&(i=""+t.key),"key"in t){l={};for(var s in t)s!=="key"&&(l[s]=t[s])}else l=t;return t=l.ref,{$$typeof:e,type:a,key:i,ref:t!==void 0?t:null,props:l}}return na.Fragment=n,na.jsx=r,na.jsxs=r,na}var Xr;function cs(){return Xr||(Xr=1,Jr.exports=ds()),Jr.exports}var Ke=cs();const ms=({children:e})=>{const n=b.Children.toArray(e);return n.length===0?null:Ke.jsx(Bl,{variant:"warning",size:"small",children:Ke.jsx(ce,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:n.map(r=>Ke.jsx(X,{size:"small",children:r},vs(r)))})})},vs=e=>{if(b.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},fa={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};pe(fa);const Ma="var(--ax-bg-neutral-strong)",Yn=4,fs=(e,n,r)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${Ma};
    border-radius: ${Yn}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${n}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${Ma};
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
`,gs=(e,n,r)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${Ma};
    border-radius: ${Yn}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${n}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${Ma};
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
`,Es=(e,n,r,a)=>n?gs(e,r,a):fs(e,r,a),_s=(e,n,r)=>r?"":n?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,hs=({children:e,alignOffset:n=0,alignLeft:r=!1,marginTop:a=0,marginLeft:t=0,hideBorder:l=!1})=>Ke.jsxs(Ke.Fragment,{children:[Ke.jsx("style",{dangerouslySetInnerHTML:{__html:Es(n,r,a,t)}}),Ke.jsx("div",{className:_s(n,r,l),children:e})]});var Qr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var en;function ys(){return en||(en=1,(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=t(l,a.call(this,s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=t(i,this&&this[s]||s));return i}function t(l,i){return i?l?l+" "+i:l+i:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Qr)),Qr.exports}var bs=ys();const vr=us(bs),ps="_borderbox_1a0x6_1",Os="_error_1a0x6_5",ks="_warning_1a0x6_8",Ss={borderbox:ps,error:Os,warning:ks};vr.bind(Ss);const Ks="_aksjonspunkt_11wjs_1",Ts="_erAksjonspunktApent_11wjs_4",As="_erIkkeGodkjentAvBeslutter_11wjs_8",Rs={aksjonspunkt:Ks,erAksjonspunktApent:Ts,erIkkeGodkjentAvBeslutter:As};vr.bind(Rs);pe(fa);pe(fa);const Ns="_divider_1jpov_1",Vs="_dividerParagraf_1jpov_8",Ls="_leftPanel_1jpov_11",Ds="_rightPanel_1jpov_14",Is={divider:Ns,dividerParagraf:Vs,leftPanel:Ls,rightPanel:Ds};vr.bind(Is);const zn=()=>Ke.jsx("span",{"data-testid":"editedIcon",children:Ke.jsx(Ut,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});pe(fa);pe(fa);var Wa={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var an;function ws(){return an||(an=1,(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=t(l,a(s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=t(i,s));return i}function t(l,i){return i?l?l+" "+i:l+i:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Wa)),Wa.exports}var Ps=ws();const xs=mn(Ps);function Ms(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rn={exports:{}},ta={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nn;function Fs(){if(nn)return ta;nn=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(a,t,l){var i=null;if(l!==void 0&&(i=""+l),t.key!==void 0&&(i=""+t.key),"key"in t){l={};for(var s in t)s!=="key"&&(l[s]=t[s])}else l=t;return t=l.ref,{$$typeof:e,type:a,key:i,ref:t!==void 0?t:null,props:l}}return ta.Fragment=n,ta.jsx=r,ta.jsxs=r,ta}var tn;function Gs(){return tn||(tn=1,rn.exports=Fs()),rn.exports}var te=Gs();const fr=e=>e.reduce((n,r,a)=>({...n,[a]:t=>r(t)||!0}),{}),gr=(e,n)=>n.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e)?.message;var Xa={exports:{}},js=Xa.exports,ln;function Bs(){return ln||(ln=1,(function(e,n){(function(r,a){e.exports=a()})(js,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,d={},v=function(_){return(_=+_)+(_>68?1900:2e3)},c=function(_){return function(k){this[_]=+k}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=(function(k){if(!k||k==="Z")return 0;var S=k.match(/([+-]|\d\d)/g),O=60*S[1]+(+S[2]||0);return O===0?0:S[0]==="+"?-O:O})(_)}],E=function(_){var k=d[_];return k&&(k.indexOf?k:k.s.concat(k.f))},A=function(_,k){var S,O=d.meridiem;if(O){for(var D=1;D<=24;D+=1)if(_.indexOf(O(D,0,k))>-1){S=D>12;break}}else S=_===(k?"pm":"PM");return S},y={A:[s,function(_){this.afternoon=A(_,!1)}],a:[s,function(_){this.afternoon=A(_,!0)}],Q:[t,function(_){this.month=3*(_-1)+1}],S:[t,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[i,c("seconds")],ss:[i,c("seconds")],m:[i,c("minutes")],mm:[i,c("minutes")],H:[i,c("hours")],h:[i,c("hours")],HH:[i,c("hours")],hh:[i,c("hours")],D:[i,c("day")],DD:[l,c("day")],Do:[s,function(_){var k=d.ordinal,S=_.match(/\d+/);if(this.day=S[0],k)for(var O=1;O<=31;O+=1)k(O).replace(/\[|\]/g,"")===_&&(this.day=O)}],w:[i,c("week")],ww:[l,c("week")],M:[i,c("month")],MM:[l,c("month")],MMM:[s,function(_){var k=E("months"),S=(E("monthsShort")||k.map(function(O){return O.slice(0,3)})).indexOf(_)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[s,function(_){var k=E("months").indexOf(_)+1;if(k<1)throw new Error;this.month=k%12||k}],Y:[/[+-]?\d+/,c("year")],YY:[l,function(_){this.year=v(_)}],YYYY:[/\d{4}/,c("year")],Z:g,ZZ:g};function V(_){var k,S;k=_,S=d&&d.formats;for(var O=(_=k.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,F,I){var R=I&&I.toUpperCase();return F||S[I]||r[I]||S[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,j,B){return j||B.slice(1)})})).match(a),D=O.length,T=0;T<D;T+=1){var C=O[T],M=y[C],U=M&&M[0],P=M&&M[1];O[T]=P?{regex:U,parser:P}:C.replace(/^\[|\]$/g,"")}return function(G){for(var F={},I=0,R=0;I<D;I+=1){var x=O[I];if(typeof x=="string")R+=x.length;else{var j=x.regex,B=x.parser,Q=G.slice(R),ie=j.exec(Q)[0];B.call(F,ie),G=G.replace(ie,"")}}return(function(se){var he=se.afternoon;if(he!==void 0){var ne=se.hours;he?ne<12&&(se.hours+=12):ne===12&&(se.hours=0),delete se.afternoon}})(F),F}}return function(_,k,S){S.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(v=_.parseTwoDigitYear);var O=k.prototype,D=O.parse;O.parse=function(T){var C=T.date,M=T.utc,U=T.args;this.$u=M;var P=U[1];if(typeof P=="string"){var G=U[2]===!0,F=U[3]===!0,I=G||F,R=U[2];F&&(R=U[2]),d=this.$locale(),!G&&R&&(d=S.Ls[R]),this.$d=(function(Q,ie,se,he){try{if(["x","X"].indexOf(ie)>-1)return new Date((ie==="X"?1e3:1)*Q);var ne=V(ie)(Q),ve=ne.year,Oe=ne.month,Ua=ne.day,Ea=ne.hours,Ha=ne.minutes,ze=ne.seconds,_a=ne.milliseconds,we=ne.zone,Pe=ne.week,We=new Date,xe=Ua||(ve||Oe?1:We.getDate()),Je=ve||We.getFullYear(),Ve=0;ve&&!Oe||(Ve=Oe>0?Oe-1:We.getMonth());var Le,Ze=Ea||0,Xe=Ha||0,ha=ze||0,Me=_a||0;return we?new Date(Date.UTC(Je,Ve,xe,Ze,Xe,ha,Me+60*we.offset*1e3)):se?new Date(Date.UTC(Je,Ve,xe,Ze,Xe,ha,Me)):(Le=new Date(Je,Ve,xe,Ze,Xe,ha,Me),Pe&&(Le=he(Le).week(Pe).toDate()),Le)}catch{return new Date("")}})(C,P,M,S),this.init(),R&&R!==!0&&(this.$L=this.locale(R).$L),I&&C!=this.format(P)&&(this.$d=new Date("")),d={}}else if(P instanceof Array)for(var x=P.length,j=1;j<=x;j+=1){U[1]=P[j-1];var B=S.apply(this,U);if(B.isValid()){this.$d=B.$d,this.$L=B.$L,this.init();break}j===x&&(this.$d=new Date(""))}else D.call(this,T)}}})})(Xa)),Xa.exports}var Us=Bs();const Hs=Ms(Us),Cs="_textarea_14c7r_1",qs="_readOnlyField_14c7r_7",sn={textarea:Cs,readOnlyField:qs},$s=e=>e!=null&&e!=="",Wn=({label:e,value:n,isEdited:r=!1,type:a,hideLabel:t,size:l})=>$s(n)?te.jsxs(ce,{gap:"space-4",children:[e&&!t&&te.jsx(Ee,{size:l,children:e}),te.jsxs(Ce,{gap:"space-8",align:"center",wrap:!1,children:[te.jsx(rr,{className:a==="textarea"?sn.textarea:sn.readOnlyField,size:l,children:n}),r&&te.jsx(zn,{})]})]}):null;st.extend(Hs);const Ys="_noReadOnlyIcon_11vhl_2",zs={noReadOnlyIcon:Ys},on=({label:e,description:n,validate:r=[],onChange:a,children:t,className:l,isReadOnly:i=!1,size:s="small",isEdited:d=!1,hideLegend:v=!1,...c})=>{const{name:g,control:E}=c,{formState:{errors:A}}=Ae(),{field:y}=dr({name:g,control:E,rules:{validate:fr(r)}});return te.jsx(wi,{name:g,value:y.value!==void 0?y.value:null,legend:te.jsxs(Ce,{justify:"center",gap:"space-8",children:[e,i&&d&&te.jsx(zn,{})]}),hideLegend:v,"aria-readonly":i,readOnly:i,description:n,size:s,error:gr(A,g),onChange:V=>{a&&a(V),y.onChange(V)},className:xs(l,zs.noReadOnlyIcon),children:t})},un=({label:e,selectValues:n,validate:r=[],readOnly:a=!1,description:t,hideValueOnDisable:l=!1,onChange:i,className:s,hideLabel:d,isEdited:v,size:c="small",...g})=>{const{name:E,control:A,disabled:y}=g,{formState:{errors:V}}=Ae(),{field:_}=dr({name:E,control:A,rules:{validate:b.useMemo(()=>fr(r),[r])}});if(a){const O=n.map(T=>T.props).find(T=>T.value===_.value),D=O?O.children:void 0;return te.jsx(Wn,{value:D,label:e,hideLabel:d,isEdited:v,size:c})}const k=_.value||"",S=!n.map(O=>O.props.value).includes(k)&&k!=="";return S&&console.warn(`No corresponding option found for value '${k}'`),te.jsxs(_i,{size:c,className:s,error:gr(V,E),label:e,description:t,value:l&&y||S?"":_.value,disabled:y,onChange:O=>{i&&i(O),_.onChange(O)},hideLabel:d,children:[te.jsx("option",{style:{display:"none"}}),",",n]})},Ws="_textAreaFieldWithBadges_bdz0b_1",Js="_etikettWrapper_bdz0b_4",dn={textAreaFieldWithBadges:Ws,etikettWrapper:Js},Jn=({name:e,control:n,label:r,readOnly:a,maxLength:t,badges:l,validate:i=[],parse:s=A=>A,className:d,description:v,isEdited:c,size:g="small",...E})=>{const{formState:{errors:A}}=Ae(),{field:y}=dr({name:e,control:n,rules:{validate:b.useMemo(()=>fr(i),[i])}});return a?te.jsx(Wn,{size:g,label:r,value:y.value,type:"textarea",isEdited:c,hideLabel:E.hideLabel}):te.jsxs("div",{className:l?dn.textAreaFieldWithBadges:null,children:[l&&te.jsx("div",{className:dn.etikettWrapper,children:l.map(({type:V,titleText:_})=>te.jsx(Ri,{variant:V,size:"small",children:_},_))}),te.jsx(Bi,{size:g,label:r,description:v,className:d,autoComplete:"off",...y,onChange:V=>y.onChange(V.currentTarget.value!==""?s(V.currentTarget.value):null),value:y.value?y.value:"",error:gr(A,e),maxLength:t,...E})]})},Zs=({formMethods:e,onSubmit:n,children:r,className:a,setDataOnUnmount:t})=>{const{handleSubmit:l,getValues:i}=e;return b.useEffect(()=>()=>{t&&t(i())},[]),te.jsx(Ci,{...e,children:te.jsx("form",{className:a,onSubmit:n?l(s=>n(s)):void 0,children:r})})},Xs="_begrunnelseTextField_hw8s7_6",Qs={begrunnelseTextField:Xs},ga={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},eo=pe(ga),ao=ut(3),ro=dt(2e3),no=e=>e?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",to=e=>n=>n!==void 0||e,Ba=({readOnly:e,text:n,useAllWidth:r=!1,notRequired:a=!1})=>{const{formState:{isDirty:t},control:l}=Ae(),i=a?()=>!1:to(t);return h.jsx("div",{className:r?"":Qs.begrunnelseTextField,children:h.jsx(Jn,{name:"begrunnelse",control:l,label:n??eo.formatMessage({id:no(e)}),validate:[ot(i),ao,ro,En],maxLength:2e3,readOnly:e,parse:gn})})},lo=e=>e.at(0)?.begrunnelse??"";Ba.buildInitialValues=e=>({begrunnelse:ct(lo(e))});Ba.transformValues=e=>({begrunnelse:e.begrunnelse});Ba.__docgenInfo={description:`ProsessStegBegrunnelseTextField

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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const io=pe(ga),so=(e,n,r,a)=>!r&&!n||e?!0:a===void 0?!r:!r&&a||a,Er=({isReadOnly:e,isSubmittable:n,isSubmitting:r,isDirty:a,text:t,onClick:l,hasEmptyRequiredFields:i})=>e?null:h.jsx("div",{children:h.jsx(He,{size:"small",variant:"primary",loading:r,disabled:so(r,n,a,i),onClick:l,type:l?"button":"submit",children:t??io.formatMessage({id:"SubmitButton.ConfirmInformation"})})});Er.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};pe(ga);pe(ga);pe(ga);const Zn=({erModalÅpen:e,lukkModal:n,isSubmittable:r,isSubmitting:a,isDirty:t,readOnly:l,valgtHjemmel:i})=>{const s=qe();return h.jsx(ua,{width:"500px",open:e,"aria-label":s.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:n,children:h.jsx(ua.Body,{children:h.jsxs(ce,{gap:"space-12",children:[h.jsxs(ce,{gap:"space-16",children:[h.jsx(Ee,{size:"medium",children:h.jsx($,{id:"Klage.Modal.Overskrift"})}),h.jsx(X,{children:h.jsx($,{id:"Klage.Modal.SendTilKlageinstans"})}),h.jsx(X,{children:h.jsx($,{id:"Klage.Modal.Valg"})}),h.jsx(X,{children:h.jsx($,{id:"Klage.Modal.Oppretthold"})}),i&&h.jsx(X,{children:h.jsx($,{id:"Klage.Modal.Hjemmel",values:{hjemmel:i}})})]}),h.jsx("div",{children:h.jsxs(Ce,{gap:"space-8",children:[h.jsx(Er,{isReadOnly:l,isSubmittable:r,isSubmitting:a,isDirty:t}),h.jsx(He,{size:"small",variant:"primary",onClick:n,autoFocus:!0,type:"button",children:h.jsx($,{id:"Klage.Modal.Avbryt"})})]})})]})})})};Zn.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const oo="_fritekstTilBrevTextArea_n72am_1",uo={fritekstTilBrevTextArea:oo},Xn=({språkkode:e,readOnly:n=!0})=>{const{control:r}=Ae();return h.jsx("div",{className:uo.fritekstTilBrevTextArea,children:h.jsx(Jn,{name:"fritekstTilBrev",control:r,label:qe().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[la,En],readOnly:n,maxLength:1e5,badges:[{type:"info",titleText:mt(e)}],parse:gn})})};Xn.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const co="_select_1owoa_7",mo="_selectReadOnly_1owoa_10",ka={select:co,selectReadOnly:mo},Qn=({readOnly:e,medholdReasons:n,alleHjemmlerMedNavn:r,klageVurdering:a})=>{const t=qe(),{control:l}=Ae(),i=n.map(d=>h.jsx("option",{value:d.kode,children:d.navn},d.kode)),s=r.map(d=>h.jsx("option",{value:d.kode,children:d.navn},d.kode));return h.jsxs(ce,{gap:"space-12",children:[h.jsx(on,{name:"klageVurdering",control:l,validate:[la],isReadOnly:e,children:h.jsxs(Ce,{gap:"space-16",children:[h.jsx(aa,{value:z.MEDHOLD_I_KLAGE,size:"small",children:h.jsx($,{id:"Klage.ResolveKlage.ChangeVedtak"})}),h.jsx(aa,{value:z.STADFESTE_YTELSESVEDTAK,size:"small",children:h.jsx($,{id:"Klage.ResolveKlage.KeepVedtakNfp"})})]})}),a===z.MEDHOLD_I_KLAGE&&h.jsx(hs,{children:h.jsxs(ce,{gap:"space-16",children:[h.jsx(un,{readOnly:e,control:l,name:"klageMedholdArsak",selectValues:i,className:e?ka.selectReadOnly:ka.select,label:t.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[la]}),h.jsxs(on,{name:"klageVurderingOmgjoer",control:l,validate:[la],isReadOnly:e,children:[h.jsx(aa,{value:Ne.GUNST_MEDHOLD_I_KLAGE,size:"small",children:h.jsx($,{id:"Klage.Behandle.Omgjort"})}),h.jsx(aa,{value:Ne.UGUNST_MEDHOLD_I_KLAGE,size:"small",children:h.jsx($,{id:"Klage.Behandle.Ugunst"})}),h.jsx(aa,{value:Ne.DELVIS_MEDHOLD_I_KLAGE,size:"small",children:h.jsx($,{id:"Klage.Behandle.DelvisOmgjort"})})]})]})}),h.jsx(un,{readOnly:e,control:l,name:"klageHjemmel",selectValues:s,className:e?ka.selectReadOnly:ka.select,label:t.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[la]})]})};Qn.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'KlageHjemmel'>[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const vo=(e,n)=>{switch(n){case z.STADFESTE_YTELSESVEDTAK:return e?"KGESTA":"KGEOVE";case z.OPPHEVE_YTELSESVEDTAK:return"KGEHJE";case z.HJEMSENDE_UTEN_Å_OPPHEVE:return"KGEHJE";case z.MEDHOLD_I_KLAGE:return"KGEOMG";default:return}},fo=(e,n)=>({fritekst:n??"",dokumentMal:vo(!1,e),erOpphevetKlage:e===z.OPPHEVE_YTELSESVEDTAK}),et=({previewCallback:e,fritekstTilBrev:n,klageVurdering:r})=>{const a=t=>{e(fo(r,n)),t.preventDefault()};return h.jsx(Ki,{href:"#",onClick:a,onKeyDown:t=>t.key==="Enter"?a(t):null,children:h.jsx($,{id:"PreviewKlageLink.ForhandvisBrev"})})};et.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const go=e=>({klageMedholdArsak:e.klageVurdering===z.MEDHOLD_I_KLAGE?e.klageMedholdArsak:void 0,klageVurderingOmgjoer:e.klageVurdering===z.MEDHOLD_I_KLAGE?e.klageVurderingOmgjoer:void 0,klageHjemmel:e.klageHjemmel,klageVurdering:Va(e.klageVurdering),fritekstTilBrev:e.fritekstTilBrev,begrunnelse:e.begrunnelse,kode:da.BEHANDLE_KLAGE_NFP}),Sa=e=>{if(e&&e!=="-")return e},Eo=(e,n)=>e.filter(({kode:r})=>n.includes(r)).sort((r,a)=>r.kode.localeCompare(a.kode)),_o=e=>e.map(n=>n),ho=e=>({klageMedholdArsak:Sa(e?.klageMedholdArsak??void 0),klageVurderingOmgjoer:Sa(e?.klageVurderingOmgjoer??void 0),klageHjemmel:Sa(e?.klageHjemmel??void 0),klageVurdering:Sa(e?.klageVurdering??void 0),begrunnelse:e?.begrunnelse??void 0,fritekstTilBrev:e?.fritekstTilBrev??void 0}),at=({klageVurdering:e,previewCallback:n,saveKlage:r,alleAktuelleHjemler:a})=>{const{behandling:t,alleKodeverk:l,submitCallback:i,isReadOnly:s,isSubmittable:d}=ar(),v=Eo(l.KlageHjemmel,_o(a)),c=qe(),[g,E]=b.useState(!1),A=ho(e.klageVurderingResultatNFP??void 0),{mellomlagretFormData:y,setMellomlagretFormData:V}=vt(),_=os({defaultValues:y??A}),k=_.watch(),S=()=>{E(!1)},O=()=>{E(!0)};return h.jsx(Zs,{formMethods:_,onSubmit:D=>i(go(D)),setDataOnUnmount:V,children:h.jsxs(ce,{gap:"space-16",children:[h.jsx(nr,{size:"small",level:"2",children:c.formatMessage({id:"Klage.ResolveKlage.Title"})}),d&&h.jsx(ms,{children:h.jsx($,{id:"Klage.ResolveKlage.HelpText"})}),h.jsx(Qn,{readOnly:s,klageVurdering:k.klageVurdering,medholdReasons:l.KlageMedholdÅrsak,alleHjemmlerMedNavn:v}),h.jsx(Ba,{readOnly:s,text:c.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),h.jsx(Xn,{språkkode:t.språkkode,readOnly:s}),h.jsxs(Ce,{justify:"space-between",children:[h.jsxs(Ce,{gap:"space-16",children:[k.klageVurdering===z.STADFESTE_YTELSESVEDTAK&&h.jsxs(h.Fragment,{children:[h.jsx(He,{variant:"primary",type:"button",size:"small",onClick:()=>O(),disabled:s,children:h.jsx($,{id:"Klage.Behandle.Bekreft"})}),h.jsx(Zn,{erModalÅpen:g,lukkModal:S,valgtHjemmel:v.find(D=>D.kode===k.klageHjemmel)?.navn,readOnly:s,isSubmittable:d,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isValid})]}),k.klageVurdering!==z.STADFESTE_YTELSESVEDTAK&&h.jsx(Er,{isReadOnly:s,isSubmittable:d,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isDirty}),!s&&k.klageVurdering&&k.fritekstTilBrev&&k.fritekstTilBrev.length>2&&h.jsx(et,{previewCallback:n,fritekstTilBrev:k.fritekstTilBrev,klageVurdering:k.klageVurdering})]}),!s&&h.jsx(He,{size:"small",variant:"primary",onClick:_.handleSubmit(D=>r(yo(D,da.BEHANDLE_KLAGE_NFP))),type:"button",children:h.jsx($,{id:"Klage.ResolveKlage.TempSaveButton"})})]})]})})},yo=(e,n)=>({kode:n,klageMedholdArsak:e.klageVurdering===z.MEDHOLD_I_KLAGE||e.klageVurdering===z.OPPHEVE_YTELSESVEDTAK?e.klageMedholdArsak:void 0,klageVurderingOmgjoer:e.klageVurdering===z.MEDHOLD_I_KLAGE?e.klageVurderingOmgjoer:void 0,klageHjemmel:e.klageHjemmel,fritekstTilBrev:Va(e.fritekstTilBrev),begrunnelse:Va(e.begrunnelse),klageVurdering:Va(e.klageVurdering)});at.__docgenInfo={description:`BehandleklageformNfp

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
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}}]}},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const rt=({klageVurdering:e})=>{const n=qe(),{alleKodeverk:r}=ar(),{begrunnelse:a,fritekstTilBrev:t,klageVurdering:l,klageMedholdArsak:i,klageVurderingOmgjoer:s}=e.klageVurderingResultatNK??{},d=r.KlageMedholdÅrsak;return h.jsxs(ce,{gap:"space-16",children:[h.jsx(nr,{size:"small",level:"2",children:n.formatMessage({id:"Klage.ResolveKlage.Title"})}),h.jsxs(ce,{gap:"space-4",children:[h.jsx(Ee,{size:"small",children:h.jsx($,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),h.jsxs(X,{size:"small",children:[l===z.STADFESTE_YTELSESVEDTAK&&h.jsx($,{id:"Klage.ResolveKlage.KeepVedtakNk"}),l===z.MEDHOLD_I_KLAGE&&h.jsx($,{id:"Klage.ResolveKlage.ChangeVedtak"}),l===z.HJEMSENDE_UTEN_Å_OPPHEVE&&h.jsx($,{id:"Klage.Behandle.Hjemsendt"}),l===z.OPPHEVE_YTELSESVEDTAK&&h.jsx($,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),l===z.MEDHOLD_I_KLAGE&&h.jsxs(ce,{gap:"space-4",children:[h.jsx(Ee,{size:"small",children:h.jsx($,{id:"Klage.ResolveKlage.Cause"})}),h.jsx(X,{size:"small",children:d.find(v=>v.kode===i)?.navn}),h.jsxs(X,{size:"small",children:[s===Ne.GUNST_MEDHOLD_I_KLAGE&&h.jsx($,{id:"Klage.Behandle.Omgjort"}),s===Ne.UGUNST_MEDHOLD_I_KLAGE&&h.jsx($,{id:"Klage.Behandle.Ugunst"}),s===Ne.DELVIS_MEDHOLD_I_KLAGE&&h.jsx($,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(l===z.OPPHEVE_YTELSESVEDTAK||l===z.HJEMSENDE_UTEN_Å_OPPHEVE)&&h.jsxs(ce,{gap:"space-4",children:[h.jsx(Ee,{size:"small",children:h.jsx($,{id:"Klage.ResolveKlage.Cause"})}),h.jsx(X,{size:"small",children:d.find(v=>v.kode===i)?.navn})]}),h.jsxs(ce,{gap:"space-4",children:[h.jsx(Ee,{size:"small",children:h.jsx($,{id:"FritekstKlageBrevTextField.Fritekst"})}),h.jsx(X,{size:"small",children:t})]}),h.jsxs(ce,{gap:"space-4",children:[h.jsx(Ee,{size:"small",children:h.jsx($,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),h.jsx(X,{size:"small",children:a})]})]})};rt.__docgenInfo={description:`BehandleklageformNfp

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
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}}]}},description:""}}};const bo={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},po=pe(bo),Qa=({klageVurdering:e,saveKlage:n,previewCallback:r})=>{const{aksjonspunkterForPanel:a}=ar();return h.jsxs(ft,{value:po,children:[e.klageVurderingResultatNK&&h.jsx(rt,{klageVurdering:e}),a.some(t=>t.definisjon===da.BEHANDLE_KLAGE_NFP)&&h.jsx(at,{klageVurdering:e,saveKlage:n,previewCallback:r,alleAktuelleHjemler:e.aktuelleHjemler?e.aktuelleHjemler:[]})]})};Qa.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const{action:cn}=__STORYBOOK_MODULE_ACTIONS__,Ao={title:"prosess/klage/prosess-klagevurdering",component:Qa,decorators:[gt,Et],args:{saveKlage:cn("button-click"),previewCallback:cn("button-click")},render:e=>h.jsx(Qa,{...e})},Ka={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.MEDHOLD_I_KLAGE,klageMedholdArsak:"ULIK_VURDERING",klageVurderingOmgjoer:Ne.GUNST_MEDHOLD_I_KLAGE,fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Ta={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.STADFESTE_YTELSESVEDTAK,fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Aa={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.HJEMSENDE_UTEN_Å_OPPHEVE,klageMedholdArsak:"ULIK_VURDERING",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Ra={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.OPPHEVE_YTELSESVEDTAK,klageMedholdArsak:"ULIK_VURDERING",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Na={args:{aksjonspunkterForPanel:[{definisjon:da.BEHANDLE_KLAGE_NFP}],klageVurdering:{klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}};Ka.parameters={...Ka.parameters,docs:{...Ka.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.MEDHOLD_I_KLAGE,
        klageMedholdArsak: 'ULIK_VURDERING',
        klageVurderingOmgjoer: klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE,
        fritekstTilBrev: 'test',
        begrunnelse: 'Dette er en begrunnelse'
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET']
      },
      aktuelleHjemler: ['14-17']
    } as KlageVurdering
  }
}`,...Ka.parameters?.docs?.source}}};Ta.parameters={...Ta.parameters,docs:{...Ta.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.STADFESTE_YTELSESVEDTAK,
        fritekstTilBrev: 'test',
        begrunnelse: 'Dette er en begrunnelse'
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET']
      },
      aktuelleHjemler: ['14-17']
    } as KlageVurdering
  }
}`,...Ta.parameters?.docs?.source}}};Aa.parameters={...Aa.parameters,docs:{...Aa.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.HJEMSENDE_UTEN_Å_OPPHEVE,
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
}`,...Aa.parameters?.docs?.source}}};Ra.parameters={...Ra.parameters,docs:{...Ra.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.OPPHEVE_YTELSESVEDTAK,
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
}`,...Ra.parameters?.docs?.source}}};Na.parameters={...Na.parameters,docs:{...Na.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.BEHANDLE_KLAGE_NFP
    }] as Aksjonspunkt[],
    klageVurdering: {
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET']
      },
      aktuelleHjemler: ['14-17']
    } as KlageVurdering
  }
}`,...Na.parameters?.docs?.source}}};const Ro=["MedholdIKlageNk","StadfestKlageNk","HjemsendtIKlageNk","OpphevIKlageNk","KlagevurderingMedAksjonspunktNfp"];export{Aa as HjemsendtIKlageNk,Na as KlagevurderingMedAksjonspunktNfp,Ka as MedholdIKlageNk,Ra as OpphevIKlageNk,Ta as StadfestKlageNk,Ro as __namedExportsOrder,Ao as default};
