import{r as A,u as na,_ as he,s as Ie,c as ra,a as k,R as N,b as Ae,S as Be,d as G,H as la,j as T,e as Ye,f as ta,P as ia,A as ua,w as sa}from"./iframe-Bz5g213s.js";import"./preload-helper-D9Z9MdNV.js";function oa(e,l){var r=e.values,a=he(e,["values"]),n=l.values,t=he(l,["values"]);return Ie(n,r)&&Ie(a,t)}function qe(e){var l=na(),r=l.formatMessage,a=l.textComponent,n=a===void 0?A.Fragment:a,t=e.id,i=e.description,u=e.defaultMessage,o=e.values,d=e.children,s=e.tagName,m=s===void 0?n:s,c=e.ignoreTag,S={id:t,description:i,defaultMessage:u},K=r(S,o,{ignoreTag:c});return typeof d=="function"?d(Array.isArray(K)?K:[K]):m?A.createElement(m,null,K):A.createElement(A.Fragment,null,K)}qe.displayName="FormattedMessage";var F=A.memo(qe,oa);F.displayName="MemoizedFormattedMessage";var ue=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ue||{}),Ce=(e=>(e.MANUELL="MANU",e.AUTOPUNKT="AUTO",e.OVERSTYRING="OVST",e.SAKSBEHANDLEROVERSTYRING="SAOV",e))(Ce||{}),se=(e=>(e.IKKE_FASTSATT="IKKE_FASTSATT",e.INNVILGET="INNVILGET",e.AVSLATT="AVSLÅTT",e.OPPHOR="OPPHØR",e.HENLAGT_SOKNAD_TRUKKET="HENLAGT_SØKNAD_TRUKKET",e.KLAGE_AVVIST="KLAGE_AVVIST",e.KLAGE_MEDHOLD="KLAGE_MEDHOLD",e.KLAGE_DELVIS_MEDHOLD="KLAGE_DELVIS_MEDHOLD",e.KLAGE_OMGJORT_UGUNST="KLAGE_OMGJORT_UGUNST",e.KLAGE_YTELSESVEDTAK_OPPHEVET="KLAGE_YTELSESVEDTAK_OPPHEVET",e.KLAGE_YTELSESVEDTAK_STADFESTET="KLAGE_YTELSESVEDTAK_STADFESTET",e.KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET="KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",e.HJEMSENDE_UTEN_OPPHEVE="HJEMSENDE_UTEN_OPPHEVE",e.HENLAGT_KLAGE_TRUKKET="HENLAGT_KLAGE_TRUKKET",e.HENLAGT_ANKE_TRUKKET="HENLAGT_ANKE_TRUKKET",e.HENLAGT_FEILOPPRETTET="HENLAGT_FEILOPPRETTET",e.HENLAGT_FEILOPPRETTET_MED_BREV="HENLAGT_FEILOPPRETTET_MED_BREV",e.HENLAGT_FEILOPPRETTET_UTEN_BREV="HENLAGT_FEILOPPRETTET_UTEN_BREV",e.HENLAGT_BRUKER_DOD="HENLAGT_BRUKER_DØD",e.FORELDREPENGER_ENDRET="FORELDREPENGER_ENDRET",e.FORELDREPENGER_SENERE="FORELDREPENGER_SENERE",e.INGEN_ENDRING="INGEN_ENDRING",e.MANGLER_BEREGNINGSREGLER="MANGLER_BEREGNINGSREGLER",e.HENLAGT_SOKNAD_MANGLER="HENLAGT_SØKNAD_MANGLER",e.INNSYN_INNVILGET="INNSYN_INNVILGET",e.INNSYN_DELVIS_INNVILGET="INNSYN_DELVIS_INNVILGET",e.INNSYN_AVVIST="INNSYN_AVVIST",e.HENLAGT_INNSYN_TRUKKET="HENLAGT_INNSYN_TRUKKET",e))(se||{});const Ea=["KLAGE_MEDHOLD","KLAGE_DELVIS_MEDHOLD","KLAGE_OMGJORT_UGUNST"],da=e=>Ea.some(l=>l===e);var x=(e=>(e.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",e.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",e.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",e.AVVIS_KLAGE="AVVIS_KLAGE",e.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",e))(x||{}),$e=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))($e||{}),Ke=(e=>(e.NYE_OPPLYSNINGER="NYE_OPPLYSNINGER",e.ULIK_REGELVERKSTOLKNING="ULIK_REGELVERKSTOLKNING",e.ULIK_VURDERING="ULIK_VURDERING",e.PROSESSUELL_FEIL="PROSESSUELL_FEIL",e))(Ke||{}),Le=(e=>(e.KLAGET_FOR_SENT="KLAGET_FOR_SENT",e.IKKE_KONKRET="IKKE_KONKRET",e))(Le||{});const q=e=>ra({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var ma=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};A.forwardRef((e,l)=>{var{className:r,size:a="medium",as:n="p",spacing:t,truncate:i,weight:u="regular",align:o,visuallyHidden:d,textColor:s}=e,m=ma(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=k();return N.createElement(n,Object.assign({},m,{ref:l,className:c(r,"navds-body-long",`navds-body-long--${a}`,q({spacing:t,truncate:i,weight:u,align:o,visuallyHidden:d,textColor:s}))}))});var ga=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ve=A.forwardRef((e,l)=>{var{className:r,size:a="medium",as:n="p",spacing:t,truncate:i,weight:u="regular",align:o,visuallyHidden:d,textColor:s}=e,m=ga(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=k();return N.createElement(n,Object.assign({},m,{ref:l,className:c(r,"navds-body-short",`navds-body-short--${a}`,q({spacing:t,truncate:i,weight:u,align:o,visuallyHidden:d,textColor:s}))}))});var _a=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};A.forwardRef((e,l)=>{var{className:r,size:a="medium",spacing:n,uppercase:t,as:i="p",truncate:u,weight:o="regular",align:d,visuallyHidden:s,textColor:m}=e,c=_a(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:S}=k();return N.createElement(i,Object.assign({},c,{ref:l,className:S(r,"navds-detail",q({spacing:n,truncate:u,weight:o,align:d,visuallyHidden:s,textColor:m,uppercase:t}),{"navds-detail--small":a==="small"})}))});var va=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};A.forwardRef((e,l)=>{var{children:r,className:a,size:n,spacing:t,as:i="p",showIcon:u=!1}=e,o=va(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=k();return N.createElement(i,Object.assign({},o,{ref:l,className:d("navds-error-message","navds-label",a,q({spacing:t}),{"navds-label--small":n==="small","navds-error-message--show-icon":u})}),u&&N.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},N.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var ca=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ta=A.forwardRef((e,l)=>{var{level:r="1",size:a,className:n,as:t,spacing:i,align:u,visuallyHidden:o,textColor:d}=e,s=ca(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:m}=k(),c=t??`h${r}`;return N.createElement(c,Object.assign({},s,{ref:l,className:m(n,"navds-heading",`navds-heading--${a}`,q({spacing:i,align:u,visuallyHidden:o,textColor:d}))}))});var Na=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};A.forwardRef((e,l)=>{var{className:r,spacing:a,as:n="p"}=e,t=Na(e,["className","spacing","as"]);const{cn:i}=k();return N.createElement(n,Object.assign({},t,{ref:l,className:i(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var Ra=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Z=A.forwardRef((e,l)=>{var{className:r,size:a="medium",as:n="label",spacing:t,visuallyHidden:i,textColor:u}=e,o=Ra(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=k();return N.createElement(n,Object.assign({},o,{ref:l,className:d(r,"navds-label",q({spacing:t,visuallyHidden:i,textColor:u}),{"navds-label--small":a==="small"})}))});function Se(e,l){const r=Object.entries(e).filter(([a])=>!l.includes(a));return Object.fromEntries(r)}let De=0;function Aa(e){const[l,r]=A.useState(e),a=e||l;return A.useEffect(()=>{l==null&&(De+=1,r(`aksel-id-${De}`))},[l]),a}const ke=N.useId;function Ka(e){var l;return ke!==void 0?ke().replace(/(:)/g,""):(l=Aa(e))!==null&&l!==void 0?l:""}function La(e,l,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),r===!1||!n.defaultPrevented)return l?.(n)}}function Te(e){return(l={})=>{const r=l.width?String(l.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function C(e){return(l,r)=>{const a=r?.context?String(r.context):"standalone";let n;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,u=r?.width?String(r.width):i;n=e.formattingValues[u]||e.formattingValues[i]}else{const i=e.defaultWidth,u=r?.width?String(r.width):e.defaultWidth;n=e.values[u]||e.values[i]}const t=e.argumentCallback?e.argumentCallback(l):l;return n[t]}}function $(e){return(l,r={})=>{const a=r.width,n=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],t=l.match(n);if(!t)return null;const i=t[0],u=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(u)?fa(u,m=>m.test(i)):Sa(u,m=>m.test(i));let d;d=e.valueCallback?e.valueCallback(o):o,d=r.valueCallback?r.valueCallback(d):d;const s=l.slice(i.length);return{value:d,rest:s}}}function Sa(e,l){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&l(e[r]))return r}function fa(e,l){for(let r=0;r<e.length;r++)if(l(e[r]))return r}function Oa(e){return(l,r={})=>{const a=l.match(e.matchPattern);if(!a)return null;const n=a[0],t=l.match(e.parsePattern);if(!t)return null;let i=e.valueCallback?e.valueCallback(t[0]):t[0];i=r.valueCallback?r.valueCallback(i):i;const u=l.slice(n.length);return{value:i,rest:u}}}const ba={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},ha=(e,l,r)=>{let a;const n=ba[e];return typeof n=="string"?a=n:l===1?a=n.one:a=n.other.replace("{{count}}",String(l)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},Ia={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Va={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Da={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ka={date:Te({formats:Ia,defaultWidth:"full"}),time:Te({formats:Va,defaultWidth:"full"}),dateTime:Te({formats:Da,defaultWidth:"full"})},Ga={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},pa=(e,l,r,a)=>Ga[e],ya={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Pa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Ma={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},wa={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Fa={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Ua=(e,l)=>Number(e)+".",Ha={ordinalNumber:Ua,era:C({values:ya,defaultWidth:"wide"}),quarter:C({values:Pa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:Ma,defaultWidth:"wide"}),day:C({values:wa,defaultWidth:"wide"}),dayPeriod:C({values:Fa,defaultWidth:"wide"})},xa=/^(\d+)\.?/i,ja=/\d+/i,Ba={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Ya={any:[/^f/i,/^e/i]},qa={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Ca={any:[/1/i,/2/i,/3/i,/4/i]},$a={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Ja={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},za={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Wa={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Za={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Xa={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Qa={ordinalNumber:Oa({matchPattern:xa,parsePattern:ja,valueCallback:e=>parseInt(e,10)}),era:$({matchPatterns:Ba,defaultMatchWidth:"wide",parsePatterns:Ya,defaultParseWidth:"any"}),quarter:$({matchPatterns:qa,defaultMatchWidth:"wide",parsePatterns:Ca,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$({matchPatterns:$a,defaultMatchWidth:"wide",parsePatterns:Ja,defaultParseWidth:"any"}),day:$({matchPatterns:za,defaultMatchWidth:"wide",parsePatterns:Wa,defaultParseWidth:"any"}),dayPeriod:$({matchPatterns:Za,defaultMatchWidth:"any",parsePatterns:Xa,defaultParseWidth:"any"})},en={code:"nb",formatDistance:ha,formatLong:ka,formatRelative:pa,localize:Ha,match:Qa,options:{weekStartsOn:1,firstWeekContainsDate:4}},an={global:{dateLocale:en,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},nn=A.createContext({locale:an}),rn=()=>A.useContext(nn),Ge=/(\w+)/g;function ln(e,l){const r=Array.isArray(e)?e:tn(e);for(const a of l){if(!a)continue;let n=a;for(let t=0;t<r.length;t++){const i=n[r[t]];i!==void 0&&(n=i)}if(typeof n=="string")return n}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function tn(e){const l=[];let r=Ge.exec(e);for(;r;){const[,a,n]=r;l.push(a||n),r=Ge.exec(e)}return l}const un=/{[^}]*}/g;function sn(e,...l){const r=rn(),a=r.translations||[],n=[...l,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],r.locale[e]];return(i,u)=>{const o=ln(i,n);return u?o.replace(un,d=>{const s=d.substring(1,d.length-1);if(u[s]===void 0){const m=JSON.stringify(u);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${s}'. The following replacements were passed: '${m}'`)}return u[s]}):o}}var on=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const En=A.forwardRef((e,l)=>{var{className:r,size:a="medium",title:n,transparent:t=!1,variant:i="neutral",id:u,"data-color":o}=e,d=on(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:s}=k(),m=Ka(),c=sn("Loader");return N.createElement("svg",Object.assign({"aria-labelledby":u??`loader-${m}`,ref:l,className:s("navds-loader",r,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":t}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":o??dn(i)},Se(d,["children"]),{"data-variant":i}),N.createElement("title",{id:u??`loader-${m}`},n||c("title")),N.createElement("circle",{className:s("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),N.createElement("circle",{className:s("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function dn(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var mn=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const gn=A.forwardRef((e,l)=>{var{as:r="button",variant:a="primary",className:n,children:t,size:i="medium",loading:u=!1,disabled:o,icon:d,iconPosition:s="left",onKeyUp:m,"data-color":c}=e,S=mn(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:K}=k(),p=o||u?Se(S,["href"]):S,E=g=>{g.key===" "&&!o&&!u&&g.currentTarget.click()};return N.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":c??_n(a),"data-variant":vn(a)},p,{ref:l,onKeyUp:La(m,E),className:K(n,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":u,"navds-button--icon-only":!!d&&!t,"navds-button--disabled":o??u}),disabled:o??u?!0:void 0}),d&&s==="left"&&N.createElement("span",{className:K("navds-button__icon")},d),u&&N.createElement(En,{size:i}),t&&N.createElement(Z,{as:"span",size:i==="medium"?"medium":"small"},t),d&&s==="right"&&N.createElement("span",{className:K("navds-button__icon")},d))});function _n(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function vn(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function L(e,l,r,a){return a?typeof a=="string"?{[`--__${e}c-${l}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([n,t])=>[`--__${e}c-${l}-${r}-${n}`,t])):{}}const cn={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},pe=(e,l,r,a,n,t)=>l.split(" ").map((i,u,o)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let s=`var(--${t}-${r}-${i})`;if(a.includes(i))s=i==="px"?"1px":i;else if(i.startsWith("space"))s=`var(--${t}-${i})`;else{const m=`--${t}-spacing-${i}`;s=`var(${(d=cn[m])!==null&&d!==void 0?d:m})`}return n?i==="0"?"0":`calc(-1 * ${s})`:s}).join(" ");function D(e,l,r,a,n,t=!1,i=[]){if(!n)return{};if(typeof n=="string")return{[`--__${e}c-${l}-${r}-xs`]:pe(r,n,a,i,t,e)};const u={};return Object.entries(n).forEach(([o,d])=>{u[`--__${e}c-${l}-${r}-${o}`]=pe(r,d,a,i,t,e)}),u}const Tn=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Nn=({children:e,className:l,padding:r,paddingInline:a,paddingBlock:n,margin:t,marginInline:i,marginBlock:u,width:o,minWidth:d,maxWidth:s,height:m,minHeight:c,maxHeight:S,position:K,inset:p,top:E,right:g,left:v,bottom:R,overflow:f,overflowX:O,overflowY:U,flexBasis:y,flexGrow:b,flexShrink:h,gridColumn:P})=>{const M=Ae(!1),{cn:I}=k(),_=M?"ax":"a",w=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},D(_,"r","p","spacing",r)),D(_,"r","pi","spacing",a)),D(_,"r","pb","spacing",n)),D(_,"r","m","spacing",t)),D(_,"r","mi","spacing",i)),D(_,"r","mb","spacing",u)),L(_,"r","w",o)),L(_,"r","minw",d)),L(_,"r","maxw",s)),L(_,"r","h",m)),L(_,"r","minh",c)),L(_,"r","maxh",S)),L(_,"r","position",K)),D(_,"r","inset","spacing",p)),D(_,"r","top","spacing",E)),D(_,"r","right","spacing",g)),D(_,"r","bottom","spacing",R)),D(_,"r","left","spacing",v)),L(_,"r","overflow",f)),L(_,"r","overflowx",O)),L(_,"r","overflowy",U)),L(_,"r","flex-basis",y)),L(_,"r","flex-grow",b)),L(_,"r","flex-shrink",h)),L(_,"r","grid-column",P));return N.createElement(Be,{className:I({className:l,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":n,"navds-r-m":t,"navds-r-mi":i,"navds-r-mb":u,"navds-r-w":o,"navds-r-minw":d,"navds-r-maxw":s,"navds-r-h":m,"navds-r-minh":c,"navds-r-maxh":S,"navds-r-position":K,"navds-r-inset":p,"navds-r-top":E,"navds-r-right":g,"navds-r-bottom":R,"navds-r-left":v,"navds-r-overflow":f,"navds-r-overflowx":O,"navds-r-overflowy":U,"navds-r-flex-basis":y,"navds-r-flex-grow":b,"navds-r-flex-shrink":h,"navds-r-grid-column":P}),style:w},e)};var Rn=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Je=A.forwardRef((e,l)=>{var{children:r,className:a,as:n="div",align:t,justify:i,wrap:u=!0,gap:o,style:d,direction:s="row",asChild:m}=e,c=Rn(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const K=Ae(!1)?"ax":"a",{cn:p}=k(),E=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),D(K,"stack","gap","spacing",o)),L(K,"stack","direction",s)),L(K,"stack","align",t)),L(K,"stack","justify",i)),g=m?Be:n;return N.createElement(Nn,Object.assign({},c),N.createElement(g,Object.assign({},Se(c,Tn),{ref:l,style:E,className:p("navds-stack",a,{"navds-vstack":s==="column","navds-hstack":s==="row","navds-stack-gap":o,"navds-stack-align":t,"navds-stack-justify":i,"navds-stack-direction":s,"navds-stack-wrap":u})}),r))});var An=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Kn=A.forwardRef((e,l)=>{var{as:r="div"}=e,a=An(e,["as"]);return N.createElement(Je,Object.assign({as:r},a,{ref:l,direction:"row"}))});var Ln=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const J=A.forwardRef((e,l)=>{var{as:r="div"}=e,a=Ln(e,["as"]);return N.createElement(Je,Object.assign({as:r},a,{ref:l,direction:"column",wrap:!1}))});var Sn=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)l.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const fn=A.forwardRef((e,l)=>{var{as:r="a",className:a,underline:n=!0,variant:t,inlineText:i=!1,"data-color":u}=e,o=Sn(e,["as","className","underline","variant","inlineText","data-color"]);const d=Ae(!1),{cn:s}=k();let m;return d?m=t:m=t??"action",N.createElement(r,Object.assign({"data-color":u??On(m),"data-variant":m},o,{ref:l,className:s("navds-link",a,{[`navds-link--${m}`]:m,"navds-link--remove-underline":!n,"navds-link--inline-text":i})}))});function On(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}function bn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ye={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe;function hn(){if(Pe)return z;Pe=1;var e=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(a,n,t){var i=null;if(t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),"key"in n){t={};for(var u in n)u!=="key"&&(t[u]=n[u])}else t=n;return n=t.ref,{$$typeof:e,type:a,key:i,ref:n!==void 0?n:null,props:t}}return z.Fragment=l,z.jsx=r,z.jsxs=r,z}var Me;function In(){return Me||(Me=1,ye.exports=hn()),ye.exports}In();const X={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};G(X);var we={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Fe;function Vn(){return Fe||(Fe=1,function(e){(function(){var l={}.hasOwnProperty;function r(){for(var t="",i=0;i<arguments.length;i++){var u=arguments[i];u&&(t=n(t,a.call(this,u)))}return t}function a(t){if(typeof t=="string"||typeof t=="number")return this&&this[t]||t;if(typeof t!="object")return"";if(Array.isArray(t))return r.apply(this,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var i="";for(var u in t)l.call(t,u)&&t[u]&&(i=n(i,this&&this[u]||u));return i}function n(t,i){return i?t?t+" "+i:t+i:t}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(we)),we.exports}var Dn=Vn();const fe=bn(Dn),kn="_borderbox_1a0x6_1",Gn="_error_1a0x6_5",pn="_warning_1a0x6_8",yn={borderbox:kn,error:Gn,warning:pn};fe.bind(yn);const Pn="_aksjonspunkt_11wjs_1",Mn="_erAksjonspunktApent_11wjs_4",wn="_erIkkeGodkjentAvBeslutter_11wjs_8",Fn={aksjonspunkt:Pn,erAksjonspunktApent:Mn,erIkkeGodkjentAvBeslutter:wn};fe.bind(Fn);G(X);G(X);const Un="_divider_1jpov_1",Hn="_dividerParagraf_1jpov_8",xn="_leftPanel_1jpov_11",jn="_rightPanel_1jpov_14",Bn={divider:Un,dividerParagraf:Hn,leftPanel:xn,rightPanel:jn};fe.bind(Bn);G(X);G(X);function Yn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ue={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He;function qn(){if(He)return W;He=1;var e=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(a,n,t){var i=null;if(t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),"key"in n){t={};for(var u in n)u!=="key"&&(t[u]=n[u])}else t=n;return n=t.ref,{$$typeof:e,type:a,key:i,ref:n!==void 0?n:null,props:t}}return W.Fragment=l,W.jsx=r,W.jsxs=r,W}var xe;function Cn(){return xe||(xe=1,Ue.exports=qn()),Ue.exports}Cn();var Ne={exports:{}},$n=Ne.exports,je;function Jn(){return je||(je=1,function(e,l){(function(r,a){e.exports=a()})($n,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,t=/\d\d/,i=/\d\d?/,u=/\d*[^-_:/,()\s\d]+/,o={},d=function(E){return(E=+E)+(E>68?1900:2e3)},s=function(E){return function(g){this[E]=+g}},m=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(g){if(!g||g==="Z")return 0;var v=g.match(/([+-]|\d\d)/g),R=60*v[1]+(+v[2]||0);return R===0?0:v[0]==="+"?-R:R}(E)}],c=function(E){var g=o[E];return g&&(g.indexOf?g:g.s.concat(g.f))},S=function(E,g){var v,R=o.meridiem;if(R){for(var f=1;f<=24;f+=1)if(E.indexOf(R(f,0,g))>-1){v=f>12;break}}else v=E===(g?"pm":"PM");return v},K={A:[u,function(E){this.afternoon=S(E,!1)}],a:[u,function(E){this.afternoon=S(E,!0)}],Q:[n,function(E){this.month=3*(E-1)+1}],S:[n,function(E){this.milliseconds=100*+E}],SS:[t,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[i,s("seconds")],ss:[i,s("seconds")],m:[i,s("minutes")],mm:[i,s("minutes")],H:[i,s("hours")],h:[i,s("hours")],HH:[i,s("hours")],hh:[i,s("hours")],D:[i,s("day")],DD:[t,s("day")],Do:[u,function(E){var g=o.ordinal,v=E.match(/\d+/);if(this.day=v[0],g)for(var R=1;R<=31;R+=1)g(R).replace(/\[|\]/g,"")===E&&(this.day=R)}],w:[i,s("week")],ww:[t,s("week")],M:[i,s("month")],MM:[t,s("month")],MMM:[u,function(E){var g=c("months"),v=(c("monthsShort")||g.map(function(R){return R.slice(0,3)})).indexOf(E)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[u,function(E){var g=c("months").indexOf(E)+1;if(g<1)throw new Error;this.month=g%12||g}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(E){this.year=d(E)}],YYYY:[/\d{4}/,s("year")],Z:m,ZZ:m};function p(E){var g,v;g=E,v=o&&o.formats;for(var R=(E=g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(P,M,I){var _=I&&I.toUpperCase();return M||v[I]||r[I]||v[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(w,H,j){return H||j.slice(1)})})).match(a),f=R.length,O=0;O<f;O+=1){var U=R[O],y=K[U],b=y&&y[0],h=y&&y[1];R[O]=h?{regex:b,parser:h}:U.replace(/^\[|\]$/g,"")}return function(P){for(var M={},I=0,_=0;I<f;I+=1){var w=R[I];if(typeof w=="string")_+=w.length;else{var H=w.regex,j=w.parser,ee=P.slice(_),Y=H.exec(ee)[0];j.call(M,Y),P=P.replace(Y,"")}}return function(B){var ae=B.afternoon;if(ae!==void 0){var V=B.hours;ae?V<12&&(B.hours+=12):V===12&&(B.hours=0),delete B.afternoon}}(M),M}}return function(E,g,v){v.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(d=E.parseTwoDigitYear);var R=g.prototype,f=R.parse;R.parse=function(O){var U=O.date,y=O.utc,b=O.args;this.$u=y;var h=b[1];if(typeof h=="string"){var P=b[2]===!0,M=b[3]===!0,I=P||M,_=b[2];M&&(_=b[2]),o=this.$locale(),!P&&_&&(o=v.Ls[_]),this.$d=function(ee,Y,B,ae){try{if(["x","X"].indexOf(Y)>-1)return new Date((Y==="X"?1e3:1)*ee);var V=p(Y)(ee),oe=V.year,ne=V.month,Ze=V.day,Xe=V.hours,Qe=V.minutes,ea=V.seconds,aa=V.milliseconds,Oe=V.zone,be=V.week,Ee=new Date,de=Ze||(oe||ne?1:Ee.getDate()),me=oe||Ee.getFullYear(),re=0;oe&&!ne||(re=ne>0?ne-1:Ee.getMonth());var le,ge=Xe||0,_e=Qe||0,ve=ea||0,ce=aa||0;return Oe?new Date(Date.UTC(me,re,de,ge,_e,ve,ce+60*Oe.offset*1e3)):B?new Date(Date.UTC(me,re,de,ge,_e,ve,ce)):(le=new Date(me,re,de,ge,_e,ve,ce),be&&(le=ae(le).week(be).toDate()),le)}catch{return new Date("")}}(U,h,y,v),this.init(),_&&_!==!0&&(this.$L=this.locale(_).$L),I&&U!=this.format(h)&&(this.$d=new Date("")),o={}}else if(h instanceof Array)for(var w=h.length,H=1;H<=w;H+=1){b[1]=h[H-1];var j=v.apply(this,b);if(j.isValid()){this.$d=j.$d,this.$L=j.$L,this.init();break}H===w&&(this.$d=new Date(""))}else f.call(this,O)}}})}(Ne)),Ne.exports}var zn=Jn();const Wn=Yn(zn);la.extend(Wn);const Q={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};G(Q);G(Q);G(Q);G(Q);G(Q);const Zn=(e,...l)=>{const r=l.find(a=>a===e);if(!r)throw Error(`Det finnes ikke enum for kode ${e}`);return r},ze=({behandlingPåVent:e,previewVedtakCallback:l,readOnly:r,lagreVedtak:a,isSubmitting:n})=>{const t=i=>{i.preventDefault(),l({gjelderVedtak:!0})};return T.jsxs(Kn,{gap:"space-8",align:"center",children:[!r&&T.jsx(gn,{variant:"primary",size:"small",onClick:a,disabled:e||n,loading:n,type:"button",children:T.jsx(F,{id:"VedtakKlageForm.TilGodkjenning"})}),T.jsx(fn,{href:"#",onClick:t,onKeyDown:i=>i.key==="Enter"?t(i):null,children:T.jsx(F,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};ze.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPåVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Xn={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis"},We=({klageVurdering:e,previewVedtakCallback:l,behandlingsresultat:r})=>{const{behandling:a,isReadOnly:n,alleKodeverk:t,aksjonspunkterForPanel:i,submitCallback:u}=Ye(),o=Qn(e),d=er(e,t),s=ar(e),m=e.klageVurderingResultatNK??e.klageVurderingResultatNFP,c=da(r.type),[S,K]=A.useState(!1),p=()=>{K(!0);const g=i.filter(ta).map(v=>v.definisjon).map(v=>({kode:Zn(v,ue.FORESLA_VEDTAK,ue.FORESLA_VEDTAK_MANUELT)}));u(g).then(()=>K(!1))};return T.jsxs(J,{gap:"space-16",children:[T.jsx(Ta,{size:"small",level:"2",children:T.jsx(F,{id:"VedtakKlageForm.Header"})}),T.jsxs(J,{gap:"space-4",children:[T.jsx(Z,{size:"small",children:T.jsx(F,{id:"VedtakKlageForm.Resultat"})}),s&&T.jsx(Ve,{size:"small",children:T.jsx(F,{id:s})})]}),r.type===se.KLAGE_AVVIST&&T.jsxs(J,{gap:"space-4",children:[T.jsx(Z,{size:"small",children:T.jsx(F,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),o.map(E=>T.jsx(Ve,{size:"small",children:t.KlageAvvistÅrsak.find(({kode:g})=>g===E)?.navn??""},E))]}),c&&T.jsxs(J,{gap:"space-4",children:[T.jsx(Z,{size:"small",children:T.jsx(F,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),d]}),r.type===se.KLAGE_YTELSESVEDTAK_OPPHEVET&&T.jsxs(J,{gap:"space-4",children:[T.jsx(Z,{size:"small",children:T.jsx(F,{id:"VedtakKlageForm.ArsakTilOppheving"})}),d]}),m?.klageVurdertAv==="NFP"&&T.jsx(ze,{previewVedtakCallback:l,readOnly:n,behandlingPåVent:a.behandlingPåVent,lagreVedtak:p,isSubmitting:S})]})},Qn=e=>{if(e){if(e.klageFormkravResultatKA&&e.klageVurderingResultatNK)return e.klageFormkravResultatKA.avvistArsaker;if(e.klageFormkravResultatNFP)return e.klageFormkravResultatNFP.avvistArsaker}return[]},er=(e,l)=>e?.klageVurderingResultatNK?.klageMedholdArsak?l.KlageMedholdÅrsak.find(({kode:r})=>r===e.klageVurderingResultatNK?.klageMedholdArsak)?.navn??"":e?.klageVurderingResultatNFP?.klageMedholdArsak?l.KlageMedholdÅrsak.find(({kode:r})=>r===e.klageVurderingResultatNFP?.klageMedholdArsak)?.navn??"":null,ar=e=>{const l=e.klageVurderingResultatNK??e.klageVurderingResultatNFP;switch(l?.klageVurdering){case x.AVVIS_KLAGE:return"VedtakKlageForm.KlageAvvist";case x.STADFESTE_YTELSESVEDTAK:return"VedtakKlageForm.KlageStadfestet";case x.OPPHEVE_YTELSESVEDTAK:return"VedtakKlageForm.YtelsesvedtakOpphevet";case x.HJEMSENDE_UTEN_Å_OPPHEVE:return"VedtakKlageForm.HjemmsendUtenOpphev";case x.MEDHOLD_I_KLAGE:return Xn[l?.klageVurderingOmgjoer??""];default:return"VedtakKlageForm.IkkeFastsatt"}};We.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNFP: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  klageFormkravResultatKA: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNK: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  aktuelleHjemler: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null;
  underBehandlingKabal: boolean | null;
  behandletAvKabal: boolean | null;
  mottattDato: string | null;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"klageFormkravResultatKA",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNK",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"aktuelleHjemler",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| '14-02'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>"},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"mottattDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingsresultat:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null;
  avslagsarsakFritekst: string | null;
  rettenTil: foreldrepenger_behandlingslager_behandling_RettenTil | null;
  konsekvenserForYtelsen: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null;
  vedtaksbrev: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall: boolean | null;
  skjæringstidspunkt: tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null;
  endretDekningsgrad: boolean | null;
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| TEMP_FP_TILBAKE_BEHANDLINGRESULTATTYPE
| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"union",raw:`| 'IKKE_FASTSATT'
| 'FASTSATT'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_FEILOPPRETTET_MED_BREV'
| 'HENLAGT_FEILOPPRETTET_UTEN_BREV'
| 'HENLAGT_KRAVGRUNNLAG_NULLSTILT'
| 'HENLAGT_TEKNISK_VEDLIKEHOLD'
| 'HENLAGT'
| 'INGEN_TILBAKEBETALING'
| 'DELVIS_TILBAKEBETALING'
| 'FULL_TILBAKEBETALING'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'FASTSATT'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_MED_BREV'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_UTEN_BREV'"},{name:"literal",value:"'HENLAGT_KRAVGRUNNLAG_NULLSTILT'"},{name:"literal",value:"'HENLAGT_TEKNISK_VEDLIKEHOLD'"},{name:"literal",value:"'HENLAGT'"},{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"},{name:"literal",value:"'FULL_TILBAKEBETALING'"}]},{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null",elements:[{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"rettenTil",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_RettenTil | null",elements:[{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"konsekvenserForYtelsen",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>"},{name:"null"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null",elements:[{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"skjæringstidspunkt",value:{name:"union",raw:"tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  dato: string | null;
  utenMinsterett: boolean | null;
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""}}};const nr={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},rr=G(nr),Re=({klageVurdering:e,previewVedtakCallback:l})=>{const{behandling:r}=Ye();if(!r.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${r.uuid}`);return T.jsx(ia,{value:rr,children:T.jsx(We,{klageVurdering:e,previewVedtakCallback:l,behandlingsresultat:r.behandlingsresultat})})};Re.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNFP: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  klageFormkravResultatKA: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNK: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  aktuelleHjemler: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null;
  underBehandlingKabal: boolean | null;
  behandletAvKabal: boolean | null;
  mottattDato: string | null;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"klageFormkravResultatKA",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNK",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"aktuelleHjemler",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| '14-02'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>"},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"mottattDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const{action:lr}=__STORYBOOK_MODULE_ACTIONS__,tr={uuid:"1",versjon:1,behandlingsresultat:{type:se.KLAGE_AVVIST},behandlingPåVent:!1},ir=[{definisjon:ue.FORESLA_VEDTAK,status:ua.OPPRETTET,begrunnelse:null,kanLoses:!0,toTrinnsBehandling:!1,toTrinnsBehandlingGodkjent:null,vurderPaNyttArsaker:null,besluttersBegrunnelse:null,aksjonspunktType:Ce.AUTOPUNKT,vilkarType:$e.OMSORGSVILKARET,erAktivt:!0,fristTid:null,endretTidspunkt:null,endretAv:null}],or={title:"prosess/klage/prosess-vedtak-klage",component:Re,decorators:[sa],args:{previewVedtakCallback:lr("button-click"),behandling:tr,aksjonspunkterForPanel:ir},render:e=>T.jsx(Re,{...e})},te={args:{klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:x.AVVIS_KLAGE,klageMedholdArsak:Ke.PROSESSUELL_FEIL,fritekstTilBrev:"test"},klageFormkravResultatKA:{avvistArsaker:[Le.IKKE_KONKRET]}}}},ie={args:{klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NFP",klageVurdering:x.AVVIS_KLAGE,klageMedholdArsak:Ke.PROSESSUELL_FEIL,fritekstTilBrev:"test"},klageFormkravResultatKA:{avvistArsaker:[Le.IKKE_KONKRET]}}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
        klageMedholdArsak: KlageMedholdÅrsak.PROSESSUELL_FEIL,
        fritekstTilBrev: 'test'
      },
      klageFormkravResultatKA: {
        avvistArsaker: [KlageAvvistÅrsak.IKKE_KONKRET]
      }
    } as KlageVurdering
  }
}`,...te.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NFP',
        klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
        klageMedholdArsak: KlageMedholdÅrsak.PROSESSUELL_FEIL,
        fritekstTilBrev: 'test'
      },
      klageFormkravResultatKA: {
        avvistArsaker: [KlageAvvistÅrsak.IKKE_KONKRET]
      }
    } as KlageVurdering
  }
}`,...ie.parameters?.docs?.source}}};const Er=["VedtakspanelDerKlageErVurdertAvNk","VedtakspanelDerKlageErVurdertAvNfp"];export{ie as VedtakspanelDerKlageErVurdertAvNfp,te as VedtakspanelDerKlageErVurdertAvNk,Er as __namedExportsOrder,or as default};
