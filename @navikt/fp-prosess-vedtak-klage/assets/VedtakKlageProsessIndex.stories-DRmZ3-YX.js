import{r as R,u as na,_ as ke,s as Ve,c as ta,a as y,R as N,b as Re,S as Be,d as I,J as la,j as T,e as Ye,A as qe,P as ia,w as sa}from"./iframe-CwBqI8Jk.js";import"./preload-helper-D9Z9MdNV.js";function oa(e,t){var n=e.values,a=ke(e,["values"]),r=t.values,l=ke(t,["values"]);return Ve(r,n)&&Ve(a,l)}function Ce(e){var t=na(),n=t.formatMessage,a=t.textComponent,r=a===void 0?R.Fragment:a,l=e.id,i=e.description,s=e.defaultMessage,d=e.values,g=e.children,o=e.tagName,E=o===void 0?r:o,_=e.ignoreTag,O={id:l,description:i,defaultMessage:s},A=n(O,d,{ignoreTag:_});return typeof g=="function"?g(Array.isArray(A)?A:[A]):E?R.createElement(E,null,A):R.createElement(R.Fragment,null,A)}Ce.displayName="FormattedMessage";var w=R.memo(Ce,oa);w.displayName="MemoizedFormattedMessage";var se=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(se||{}),$e=(e=>(e.MANUELL="MANU",e.AUTOPUNKT="AUTO",e.OVERSTYRING="OVST",e.SAKSBEHANDLEROVERSTYRING="SAOV",e))($e||{}),oe=(e=>(e.IKKE_FASTSATT="IKKE_FASTSATT",e.INNVILGET="INNVILGET",e.AVSLATT="AVSLÅTT",e.OPPHOR="OPPHØR",e.HENLAGT_SOKNAD_TRUKKET="HENLAGT_SØKNAD_TRUKKET",e.KLAGE_AVVIST="KLAGE_AVVIST",e.KLAGE_MEDHOLD="KLAGE_MEDHOLD",e.KLAGE_DELVIS_MEDHOLD="KLAGE_DELVIS_MEDHOLD",e.KLAGE_OMGJORT_UGUNST="KLAGE_OMGJORT_UGUNST",e.KLAGE_YTELSESVEDTAK_OPPHEVET="KLAGE_YTELSESVEDTAK_OPPHEVET",e.KLAGE_YTELSESVEDTAK_STADFESTET="KLAGE_YTELSESVEDTAK_STADFESTET",e.KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET="KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",e.HJEMSENDE_UTEN_OPPHEVE="HJEMSENDE_UTEN_OPPHEVE",e.HENLAGT_KLAGE_TRUKKET="HENLAGT_KLAGE_TRUKKET",e.HENLAGT_ANKE_TRUKKET="HENLAGT_ANKE_TRUKKET",e.HENLAGT_FEILOPPRETTET="HENLAGT_FEILOPPRETTET",e.HENLAGT_FEILOPPRETTET_MED_BREV="HENLAGT_FEILOPPRETTET_MED_BREV",e.HENLAGT_FEILOPPRETTET_UTEN_BREV="HENLAGT_FEILOPPRETTET_UTEN_BREV",e.HENLAGT_BRUKER_DOD="HENLAGT_BRUKER_DØD",e.FORELDREPENGER_ENDRET="FORELDREPENGER_ENDRET",e.FORELDREPENGER_SENERE="FORELDREPENGER_SENERE",e.INGEN_ENDRING="INGEN_ENDRING",e.MANGLER_BEREGNINGSREGLER="MANGLER_BEREGNINGSREGLER",e.HENLAGT_SOKNAD_MANGLER="HENLAGT_SØKNAD_MANGLER",e.INNSYN_INNVILGET="INNSYN_INNVILGET",e.INNSYN_DELVIS_INNVILGET="INNSYN_DELVIS_INNVILGET",e.INNSYN_AVVIST="INNSYN_AVVIST",e.HENLAGT_INNSYN_TRUKKET="HENLAGT_INNSYN_TRUKKET",e))(oe||{});const da=["KLAGE_MEDHOLD","KLAGE_DELVIS_MEDHOLD","KLAGE_OMGJORT_UGUNST"],ua=e=>da.some(t=>t===e);var H=(e=>(e.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",e.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",e.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",e.AVVIS_KLAGE="AVVIS_KLAGE",e.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",e))(H||{}),Je=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(Je||{}),Ae=(e=>(e.NYE_OPPLYSNINGER="NYE_OPPLYSNINGER",e.ULIK_REGELVERKSTOLKNING="ULIK_REGELVERKSTOLKNING",e.ULIK_VURDERING="ULIK_VURDERING",e.PROSESSUELL_FEIL="PROSESSUELL_FEIL",e))(Ae||{}),Se=(e=>(e.KLAGET_FOR_SENT="KLAGET_FOR_SENT",e.IKKE_KONKRET="IKKE_KONKRET",e))(Se||{});const q=e=>ta({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var ga=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};R.forwardRef((e,t)=>{var{className:n,size:a="medium",as:r="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:g,textColor:o}=e,E=ga(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=y();return N.createElement(r,Object.assign({},E,{ref:t,className:_(n,"navds-body-long",`navds-body-long--${a}`,q({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:g,textColor:o}))}))});var Ea=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const he=R.forwardRef((e,t)=>{var{className:n,size:a="medium",as:r="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:g,textColor:o}=e,E=Ea(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=y();return N.createElement(r,Object.assign({},E,{ref:t,className:_(n,"navds-body-short",`navds-body-short--${a}`,q({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:g,textColor:o}))}))});var ma=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};R.forwardRef((e,t)=>{var{className:n,size:a="medium",spacing:r,uppercase:l,as:i="p",truncate:s,weight:d="regular",align:g,visuallyHidden:o,textColor:E}=e,_=ma(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:O}=y();return N.createElement(i,Object.assign({},_,{ref:t,className:O(n,"navds-detail",q({spacing:r,truncate:s,weight:d,align:g,visuallyHidden:o,textColor:E,uppercase:l}),{"navds-detail--small":a==="small"})}))});var ca=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};R.forwardRef((e,t)=>{var{children:n,className:a,size:r,spacing:l,as:i="p",showIcon:s=!1}=e,d=ca(e,["children","className","size","spacing","as","showIcon"]);const{cn:g}=y();return N.createElement(i,Object.assign({},d,{ref:t,className:g("navds-error-message","navds-label",a,q({spacing:l}),{"navds-label--small":r==="small","navds-error-message--show-icon":s})}),s&&N.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},N.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),n)});var va=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const _a=R.forwardRef((e,t)=>{var{level:n="1",size:a,className:r,as:l,spacing:i,align:s,visuallyHidden:d,textColor:g}=e,o=va(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:E}=y(),_=l??`h${n}`;return N.createElement(_,Object.assign({},o,{ref:t,className:E(r,"navds-heading",`navds-heading--${a}`,q({spacing:i,align:s,visuallyHidden:d,textColor:g}))}))});var Ta=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};R.forwardRef((e,t)=>{var{className:n,spacing:a,as:r="p"}=e,l=Ta(e,["className","spacing","as"]);const{cn:i}=y();return N.createElement(r,Object.assign({},l,{ref:t,className:i(n,"navds-ingress",{"navds-typo--spacing":!!a})}))});var Na=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const Z=R.forwardRef((e,t)=>{var{className:n,size:a="medium",as:r="label",spacing:l,visuallyHidden:i,textColor:s}=e,d=Na(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:g}=y();return N.createElement(r,Object.assign({},d,{ref:t,className:g(n,"navds-label",q({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":a==="small"})}))});function Oe(e,t){const n=Object.entries(e).filter(([a])=>!t.includes(a));return Object.fromEntries(n)}let pe=0;function fa(e){const[t,n]=R.useState(e),a=e||t;return R.useEffect(()=>{t==null&&(pe+=1,n(`aksel-id-${pe}`))},[t]),a}const ye=N.useId;function Ra(e){var t;return ye!==void 0?ye().replace(/(:)/g,""):(t=fa(e))!==null&&t!==void 0?t:""}function Aa(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),n===!1||!r.defaultPrevented)return t?.(r)}}function Te(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}function C(e){return(t,n)=>{const a=n?.context?String(n.context):"standalone";let r;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=n?.width?String(n.width):i;r=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=n?.width?String(n.width):e.defaultWidth;r=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(t):t;return r[l]}}function $(e){return(t,n={})=>{const a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=t.match(r);if(!l)return null;const i=l[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?Oa(s,E=>E.test(i)):Sa(s,E=>E.test(i));let g;g=e.valueCallback?e.valueCallback(d):d,g=n.valueCallback?n.valueCallback(g):g;const o=t.slice(i.length);return{value:g,rest:o}}}function Sa(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Oa(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Ka(e){return(t,n={})=>{const a=t.match(e.matchPattern);if(!a)return null;const r=a[0],l=t.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=n.valueCallback?n.valueCallback(i):i;const s=t.slice(r.length);return{value:i,rest:s}}}const La={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},ba=(e,t,n)=>{let a;const r=La[e];return typeof r=="string"?a=r:t===1?a=r.one:a=r.other.replace("{{count}}",String(t)),n?.addSuffix?n.comparison&&n.comparison>0?"om "+a:a+" siden":a},ka={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Va={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ha={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},pa={date:Te({formats:ka,defaultWidth:"full"}),time:Te({formats:Va,defaultWidth:"full"}),dateTime:Te({formats:ha,defaultWidth:"full"})},ya={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Ia=(e,t,n,a)=>ya[e],Da={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Pa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Ga={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Ma={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Fa={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},wa=(e,t)=>Number(e)+".",xa={ordinalNumber:wa,era:C({values:Da,defaultWidth:"wide"}),quarter:C({values:Pa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:Ga,defaultWidth:"wide"}),day:C({values:Ma,defaultWidth:"wide"}),dayPeriod:C({values:Fa,defaultWidth:"wide"})},Ua=/^(\d+)\.?/i,Ha=/\d+/i,ja={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Ba={any:[/^f/i,/^e/i]},Ya={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},qa={any:[/1/i,/2/i,/3/i,/4/i]},Ca={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},$a={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ja={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},za={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Wa={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Za={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Xa={ordinalNumber:Ka({matchPattern:Ua,parsePattern:Ha,valueCallback:e=>parseInt(e,10)}),era:$({matchPatterns:ja,defaultMatchWidth:"wide",parsePatterns:Ba,defaultParseWidth:"any"}),quarter:$({matchPatterns:Ya,defaultMatchWidth:"wide",parsePatterns:qa,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$({matchPatterns:Ca,defaultMatchWidth:"wide",parsePatterns:$a,defaultParseWidth:"any"}),day:$({matchPatterns:Ja,defaultMatchWidth:"wide",parsePatterns:za,defaultParseWidth:"any"}),dayPeriod:$({matchPatterns:Wa,defaultMatchWidth:"any",parsePatterns:Za,defaultParseWidth:"any"})},Qa={code:"nb",formatDistance:ba,formatLong:pa,formatRelative:Ia,localize:xa,match:Xa,options:{weekStartsOn:1,firstWeekContainsDate:4}},er={global:{dateLocale:Qa,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},ar=R.createContext({locale:er}),rr=()=>R.useContext(ar),Ie=/(\w+)/g;function nr(e,t){const n=Array.isArray(e)?e:tr(e);for(const a of t){if(!a)continue;let r=a;for(let l=0;l<n.length;l++){const i=r[n[l]];i!==void 0&&(r=i)}if(typeof r=="string")return r}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function tr(e){const t=[];let n=Ie.exec(e);for(;n;){const[,a,r]=n;t.push(a||r),n=Ie.exec(e)}return t}const lr=/{[^}]*}/g;function ir(e,...t){const n=rr(),a=n.translations||[],r=[...t,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],n.locale[e]];return(i,s)=>{const d=nr(i,r);return s?d.replace(lr,g=>{const o=g.substring(1,g.length-1);if(s[o]===void 0){const E=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${o}'. The following replacements were passed: '${E}'`)}return s[o]}):d}}var sr=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const or=R.forwardRef((e,t)=>{var{className:n,size:a="medium",title:r,transparent:l=!1,variant:i="neutral",id:s,"data-color":d}=e,g=sr(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:o}=y(),E=Ra(),_=ir("Loader");return N.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${E}`,ref:t,className:o("navds-loader",n,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??dr(i)},Oe(g,["children"]),{"data-variant":i}),N.createElement("title",{id:s??`loader-${E}`},r||_("title")),N.createElement("circle",{className:o("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),N.createElement("circle",{className:o("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function dr(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var ur=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const gr=R.forwardRef((e,t)=>{var{as:n="button",variant:a="primary",className:r,children:l,size:i="medium",loading:s=!1,disabled:d,icon:g,iconPosition:o="left",onKeyUp:E,"data-color":_}=e,O=ur(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:A}=y(),D=d||s?Oe(O,["href"]):O,u=m=>{m.key===" "&&!d&&!s&&m.currentTarget.click()};return N.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},{"data-color":_??Er(a),"data-variant":mr(a)},D,{ref:t,onKeyUp:Aa(E,u),className:A(r,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!g&&!l,"navds-button--disabled":d??s}),disabled:d??s?!0:void 0}),g&&o==="left"&&N.createElement("span",{className:A("navds-button__icon")},g),s&&N.createElement(or,{size:i}),l&&N.createElement(Z,{as:"span",size:i==="medium"?"medium":"small"},l),g&&o==="right"&&N.createElement("span",{className:A("navds-button__icon")},g))});function Er(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function mr(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function S(e,t,n,a){return a?typeof a=="string"?{[`--__${e}c-${t}-${n}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([r,l])=>[`--__${e}c-${t}-${n}-${r}`,l])):{}}const cr={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},De=(e,t,n,a,r,l)=>t.split(" ").map((i,s,d)=>{var g;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let o=`var(--${l}-${n}-${i})`;if(a.includes(i))o=i==="px"?"1px":i;else if(i.startsWith("space"))o=`var(--${l}-${i})`;else{const E=`--${l}-spacing-${i}`;o=`var(${(g=cr[E])!==null&&g!==void 0?g:E})`}return r?i==="0"?"0":`calc(-1 * ${o})`:o}).join(" ");function p(e,t,n,a,r,l=!1,i=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${t}-${n}-xs`]:De(n,r,a,i,l,e)};const s={};return Object.entries(r).forEach(([d,g])=>{s[`--__${e}c-${t}-${n}-${d}`]=De(n,g,a,i,l,e)}),s}const vr=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],_r=({children:e,className:t,padding:n,paddingInline:a,paddingBlock:r,margin:l,marginInline:i,marginBlock:s,width:d,minWidth:g,maxWidth:o,height:E,minHeight:_,maxHeight:O,position:A,inset:D,top:u,right:m,left:v,bottom:f,overflow:K,overflowX:L,overflowY:x,flexBasis:P,flexGrow:b,flexShrink:k,gridColumn:G})=>{const M=Re(!1),{cn:V}=y(),c=M?"ax":"a",F=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},p(c,"r","p","spacing",n)),p(c,"r","pi","spacing",a)),p(c,"r","pb","spacing",r)),p(c,"r","m","spacing",l)),p(c,"r","mi","spacing",i)),p(c,"r","mb","spacing",s)),S(c,"r","w",d)),S(c,"r","minw",g)),S(c,"r","maxw",o)),S(c,"r","h",E)),S(c,"r","minh",_)),S(c,"r","maxh",O)),S(c,"r","position",A)),p(c,"r","inset","spacing",D)),p(c,"r","top","spacing",u)),p(c,"r","right","spacing",m)),p(c,"r","bottom","spacing",f)),p(c,"r","left","spacing",v)),S(c,"r","overflow",K)),S(c,"r","overflowx",L)),S(c,"r","overflowy",x)),S(c,"r","flex-basis",P)),S(c,"r","flex-grow",b)),S(c,"r","flex-shrink",k)),S(c,"r","grid-column",G));return N.createElement(Be,{className:V({className:t,"navds-r-p":n,"navds-r-pi":a,"navds-r-pb":r,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":d,"navds-r-minw":g,"navds-r-maxw":o,"navds-r-h":E,"navds-r-minh":_,"navds-r-maxh":O,"navds-r-position":A,"navds-r-inset":D,"navds-r-top":u,"navds-r-right":m,"navds-r-bottom":f,"navds-r-left":v,"navds-r-overflow":K,"navds-r-overflowx":L,"navds-r-overflowy":x,"navds-r-flex-basis":P,"navds-r-flex-grow":b,"navds-r-flex-shrink":k,"navds-r-grid-column":G}),style:F},e)};var Tr=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const ze=R.forwardRef((e,t)=>{var{children:n,className:a,as:r="div",align:l,justify:i,wrap:s=!0,gap:d,style:g,direction:o="row",asChild:E}=e,_=Tr(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const A=Re(!1)?"ax":"a",{cn:D}=y(),u=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},g),p(A,"stack","gap","spacing",d)),S(A,"stack","direction",o)),S(A,"stack","align",l)),S(A,"stack","justify",i)),m=E?Be:r;return N.createElement(_r,Object.assign({},_),N.createElement(m,Object.assign({},Oe(_,vr),{ref:t,style:u,className:D("navds-stack",a,{"navds-vstack":o==="column","navds-hstack":o==="row","navds-stack-gap":d,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":o,"navds-stack-wrap":s})}),n))});var Nr=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const fr=R.forwardRef((e,t)=>{var{as:n="div"}=e,a=Nr(e,["as"]);return N.createElement(ze,Object.assign({as:n},a,{ref:t,direction:"row"}))});var Rr=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const J=R.forwardRef((e,t)=>{var{as:n="div"}=e,a=Rr(e,["as"]);return N.createElement(ze,Object.assign({as:n},a,{ref:t,direction:"column",wrap:!1}))});var Ar=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const Sr=R.forwardRef((e,t)=>{var{as:n="a",className:a,underline:r=!0,variant:l,inlineText:i=!1,"data-color":s}=e,d=Ar(e,["as","className","underline","variant","inlineText","data-color"]);const g=Re(!1),{cn:o}=y();let E;return g?E=l:E=l??"action",N.createElement(n,Object.assign({"data-color":s??Or(E),"data-variant":E},d,{ref:t,className:o("navds-link",a,{[`navds-link--${E}`]:E,"navds-link--remove-underline":!r,"navds-link--inline-text":i})}))});function Or(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}function Kr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pe={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge;function Lr(){if(Ge)return z;Ge=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var i=null;if(l!==void 0&&(i=""+l),r.key!==void 0&&(i=""+r.key),"key"in r){l={};for(var s in r)s!=="key"&&(l[s]=r[s])}else l=r;return r=l.ref,{$$typeof:e,type:a,key:i,ref:r!==void 0?r:null,props:l}}return z.Fragment=t,z.jsx=n,z.jsxs=n,z}var Me;function br(){return Me||(Me=1,Pe.exports=Lr()),Pe.exports}br();const X={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};I(X);var Fe={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var we;function kr(){return we||(we=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=r(l,a.call(this,s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)t.call(l,s)&&l[s]&&(i=r(i,this&&this[s]||s));return i}function r(l,i){return i?l?l+" "+i:l+i:l}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Fe)),Fe.exports}var Vr=kr();const Ke=Kr(Vr),hr="_borderbox_1a0x6_1",pr="_error_1a0x6_5",yr="_warning_1a0x6_8",Ir={borderbox:hr,error:pr,warning:yr};Ke.bind(Ir);const Dr="_aksjonspunkt_11wjs_1",Pr="_erAksjonspunktApent_11wjs_4",Gr="_erIkkeGodkjentAvBeslutter_11wjs_8",Mr={aksjonspunkt:Dr,erAksjonspunktApent:Pr,erIkkeGodkjentAvBeslutter:Gr};Ke.bind(Mr);I(X);I(X);const Fr="_divider_1jpov_1",wr="_dividerParagraf_1jpov_8",xr="_leftPanel_1jpov_11",Ur="_rightPanel_1jpov_14",Hr={divider:Fr,dividerParagraf:wr,leftPanel:xr,rightPanel:Ur};Ke.bind(Hr);I(X);I(X);function jr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xe={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue;function Br(){if(Ue)return W;Ue=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var i=null;if(l!==void 0&&(i=""+l),r.key!==void 0&&(i=""+r.key),"key"in r){l={};for(var s in r)s!=="key"&&(l[s]=r[s])}else l=r;return r=l.ref,{$$typeof:e,type:a,key:i,ref:r!==void 0?r:null,props:l}}return W.Fragment=t,W.jsx=n,W.jsxs=n,W}var He;function Yr(){return He||(He=1,xe.exports=Br()),xe.exports}Yr();var Ne={exports:{}},qr=Ne.exports,je;function Cr(){return je||(je=1,function(e,t){(function(n,a){e.exports=a()})(qr,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,d={},g=function(u){return(u=+u)+(u>68?1900:2e3)},o=function(u){return function(m){this[u]=+m}},E=[/[+-]\d\d:?(\d\d)?|Z/,function(u){(this.zone||(this.zone={})).offset=function(m){if(!m||m==="Z")return 0;var v=m.match(/([+-]|\d\d)/g),f=60*v[1]+(+v[2]||0);return f===0?0:v[0]==="+"?-f:f}(u)}],_=function(u){var m=d[u];return m&&(m.indexOf?m:m.s.concat(m.f))},O=function(u,m){var v,f=d.meridiem;if(f){for(var K=1;K<=24;K+=1)if(u.indexOf(f(K,0,m))>-1){v=K>12;break}}else v=u===(m?"pm":"PM");return v},A={A:[s,function(u){this.afternoon=O(u,!1)}],a:[s,function(u){this.afternoon=O(u,!0)}],Q:[r,function(u){this.month=3*(u-1)+1}],S:[r,function(u){this.milliseconds=100*+u}],SS:[l,function(u){this.milliseconds=10*+u}],SSS:[/\d{3}/,function(u){this.milliseconds=+u}],s:[i,o("seconds")],ss:[i,o("seconds")],m:[i,o("minutes")],mm:[i,o("minutes")],H:[i,o("hours")],h:[i,o("hours")],HH:[i,o("hours")],hh:[i,o("hours")],D:[i,o("day")],DD:[l,o("day")],Do:[s,function(u){var m=d.ordinal,v=u.match(/\d+/);if(this.day=v[0],m)for(var f=1;f<=31;f+=1)m(f).replace(/\[|\]/g,"")===u&&(this.day=f)}],w:[i,o("week")],ww:[l,o("week")],M:[i,o("month")],MM:[l,o("month")],MMM:[s,function(u){var m=_("months"),v=(_("monthsShort")||m.map(function(f){return f.slice(0,3)})).indexOf(u)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[s,function(u){var m=_("months").indexOf(u)+1;if(m<1)throw new Error;this.month=m%12||m}],Y:[/[+-]?\d+/,o("year")],YY:[l,function(u){this.year=g(u)}],YYYY:[/\d{4}/,o("year")],Z:E,ZZ:E};function D(u){var m,v;m=u,v=d&&d.formats;for(var f=(u=m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,M,V){var c=V&&V.toUpperCase();return M||v[V]||n[V]||v[c].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(F,U,j){return U||j.slice(1)})})).match(a),K=f.length,L=0;L<K;L+=1){var x=f[L],P=A[x],b=P&&P[0],k=P&&P[1];f[L]=k?{regex:b,parser:k}:x.replace(/^\[|\]$/g,"")}return function(G){for(var M={},V=0,c=0;V<K;V+=1){var F=f[V];if(typeof F=="string")c+=F.length;else{var U=F.regex,j=F.parser,ee=G.slice(c),Y=U.exec(ee)[0];j.call(M,Y),G=G.replace(Y,"")}}return function(B){var ae=B.afternoon;if(ae!==void 0){var h=B.hours;ae?h<12&&(B.hours+=12):h===12&&(B.hours=0),delete B.afternoon}}(M),M}}return function(u,m,v){v.p.customParseFormat=!0,u&&u.parseTwoDigitYear&&(g=u.parseTwoDigitYear);var f=m.prototype,K=f.parse;f.parse=function(L){var x=L.date,P=L.utc,b=L.args;this.$u=P;var k=b[1];if(typeof k=="string"){var G=b[2]===!0,M=b[3]===!0,V=G||M,c=b[2];M&&(c=b[2]),d=this.$locale(),!G&&c&&(d=v.Ls[c]),this.$d=function(ee,Y,B,ae){try{if(["x","X"].indexOf(Y)>-1)return new Date((Y==="X"?1e3:1)*ee);var h=D(Y)(ee),de=h.year,re=h.month,Xe=h.day,Qe=h.hours,ea=h.minutes,aa=h.seconds,ra=h.milliseconds,Le=h.zone,be=h.week,ue=new Date,ge=Xe||(de||re?1:ue.getDate()),Ee=de||ue.getFullYear(),ne=0;de&&!re||(ne=re>0?re-1:ue.getMonth());var te,me=Qe||0,ce=ea||0,ve=aa||0,_e=ra||0;return Le?new Date(Date.UTC(Ee,ne,ge,me,ce,ve,_e+60*Le.offset*1e3)):B?new Date(Date.UTC(Ee,ne,ge,me,ce,ve,_e)):(te=new Date(Ee,ne,ge,me,ce,ve,_e),be&&(te=ae(te).week(be).toDate()),te)}catch{return new Date("")}}(x,k,P,v),this.init(),c&&c!==!0&&(this.$L=this.locale(c).$L),V&&x!=this.format(k)&&(this.$d=new Date("")),d={}}else if(k instanceof Array)for(var F=k.length,U=1;U<=F;U+=1){b[1]=k[U-1];var j=v.apply(this,b);if(j.isValid()){this.$d=j.$d,this.$L=j.$L,this.init();break}U===F&&(this.$d=new Date(""))}else K.call(this,L)}}})}(Ne)),Ne.exports}var $r=Cr();const Jr=jr($r);la.extend(Jr);const Q={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};I(Q);I(Q);I(Q);I(Q);I(Q);const zr=(e,...t)=>{const n=t.find(a=>a===e);if(!n)throw Error(`Det finnes ikke enum for kode ${e}`);return n},We=({behandlingPåVent:e,previewVedtakCallback:t,readOnly:n,lagreVedtak:a,isSubmitting:r})=>{const l=i=>{i.preventDefault(),t({gjelderVedtak:!0})};return T.jsxs(fr,{gap:"space-8",align:"center",children:[!n&&T.jsx(gr,{variant:"primary",size:"small",onClick:a,disabled:e||r,loading:r,type:"button",children:T.jsx(w,{id:"VedtakKlageForm.TilGodkjenning"})}),T.jsx(Sr,{href:"#",onClick:l,onKeyDown:i=>i.key==="Enter"?l(i):null,children:T.jsx(w,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};We.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPåVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Wr={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis"},Ze=({klageVurdering:e,previewVedtakCallback:t,behandlingsresultat:n})=>{const{behandling:a,isReadOnly:r,alleKodeverk:l,aksjonspunkterForPanel:i,submitCallback:s}=Ye(),d=Zr(e),g=Xr(e,l),o=Qr(e),E=e.klageVurderingResultatNK??e.klageVurderingResultatNFP,_=ua(n.type),[O,A]=R.useState(!1),D=()=>{A(!0);const m=i.filter(v=>v.status===qe.OPPRETTET).map(v=>v.definisjon).map(v=>({kode:zr(v,se.FORESLA_VEDTAK,se.FORESLA_VEDTAK_MANUELT)}));s(m).then(()=>A(!1))};return T.jsxs(J,{gap:"space-16",children:[T.jsx(_a,{size:"small",level:"2",children:T.jsx(w,{id:"VedtakKlageForm.Header"})}),T.jsxs(J,{gap:"space-4",children:[T.jsx(Z,{size:"small",children:T.jsx(w,{id:"VedtakKlageForm.Resultat"})}),o&&T.jsx(he,{size:"small",children:T.jsx(w,{id:o})})]}),n.type===oe.KLAGE_AVVIST&&T.jsxs(J,{gap:"space-4",children:[T.jsx(Z,{size:"small",children:T.jsx(w,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),d.map(u=>T.jsx(he,{size:"small",children:l.KlageAvvistÅrsak.find(({kode:m})=>m===u)?.navn??""},u))]}),_&&T.jsxs(J,{gap:"space-4",children:[T.jsx(Z,{size:"small",children:T.jsx(w,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),g]}),n.type===oe.KLAGE_YTELSESVEDTAK_OPPHEVET&&T.jsxs(J,{gap:"space-4",children:[T.jsx(Z,{size:"small",children:T.jsx(w,{id:"VedtakKlageForm.ArsakTilOppheving"})}),g]}),E?.klageVurdertAv==="NFP"&&T.jsx(We,{previewVedtakCallback:t,readOnly:r,behandlingPåVent:a.behandlingPåVent,lagreVedtak:D,isSubmitting:O})]})},Zr=e=>{if(e){if(e.klageFormkravResultatKA&&e.klageVurderingResultatNK)return e.klageFormkravResultatKA.avvistArsaker;if(e.klageFormkravResultatNFP)return e.klageFormkravResultatNFP.avvistArsaker}return[]},Xr=(e,t)=>e?.klageVurderingResultatNK?.klageMedholdArsak?t.KlageMedholdÅrsak.find(({kode:n})=>n===e.klageVurderingResultatNK?.klageMedholdArsak)?.navn??"":e?.klageVurderingResultatNFP?.klageMedholdArsak?t.KlageMedholdÅrsak.find(({kode:n})=>n===e.klageVurderingResultatNFP?.klageMedholdArsak)?.navn??"":null,Qr=e=>{const t=e.klageVurderingResultatNK??e.klageVurderingResultatNFP;switch(t?.klageVurdering){case H.AVVIS_KLAGE:return"VedtakKlageForm.KlageAvvist";case H.STADFESTE_YTELSESVEDTAK:return"VedtakKlageForm.KlageStadfestet";case H.OPPHEVE_YTELSESVEDTAK:return"VedtakKlageForm.YtelsesvedtakOpphevet";case H.HJEMSENDE_UTEN_Å_OPPHEVE:return"VedtakKlageForm.HjemmsendUtenOpphev";case H.MEDHOLD_I_KLAGE:return Wr[t?.klageVurderingOmgjoer??""];default:return"VedtakKlageForm.IkkeFastsatt"}};Ze.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
  mottattDato?: string;
}`,signature:{properties:[{key:"klageVurderingResultatNK",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
  mottattDato?: string;
}>`},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""}}};const en={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},an=I(en),fe=({klageVurdering:e,previewVedtakCallback:t})=>{const{behandling:n}=Ye();if(!n.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${n.uuid}`);return T.jsx(ia,{value:an,children:T.jsx(Ze,{klageVurdering:e,previewVedtakCallback:t,behandlingsresultat:n.behandlingsresultat})})};fe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
  mottattDato?: string;
}`,signature:{properties:[{key:"klageVurderingResultatNK",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
  mottattDato?: string;
}>`},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const{action:rn}=__STORYBOOK_MODULE_ACTIONS__,nn={uuid:"1",versjon:1,behandlingsresultat:{type:oe.KLAGE_AVVIST},behandlingPåVent:!1},tn=[{definisjon:se.FORESLA_VEDTAK,status:qe.OPPRETTET,begrunnelse:null,kanLoses:!0,toTrinnsBehandling:!1,toTrinnsBehandlingGodkjent:null,vurderPaNyttArsaker:null,besluttersBegrunnelse:null,aksjonspunktType:$e.AUTOPUNKT,vilkarType:Je.OMSORGSVILKARET,erAktivt:!0,fristTid:null,endretTidspunkt:null,endretAv:null}],on={title:"prosess/klage/prosess-vedtak-klage",component:fe,decorators:[sa],args:{previewVedtakCallback:rn("button-click"),behandling:nn,aksjonspunkterForPanel:tn},render:e=>T.jsx(fe,{...e})},le={args:{klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:H.AVVIS_KLAGE,klageMedholdArsak:Ae.PROSESSUELL_FEIL,fritekstTilBrev:"test"},klageFormkravResultatKA:{avvistArsaker:[Se.IKKE_KONKRET]}}}},ie={args:{klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NFP",klageVurdering:H.AVVIS_KLAGE,klageMedholdArsak:Ae.PROSESSUELL_FEIL,fritekstTilBrev:"test"},klageFormkravResultatKA:{avvistArsaker:[Se.IKKE_KONKRET]}}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
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
}`,...le.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
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
}`,...ie.parameters?.docs?.source}}};const dn=["VedtakspanelDerKlageErVurdertAvNk","VedtakspanelDerKlageErVurdertAvNfp"];export{ie as VedtakspanelDerKlageErVurdertAvNfp,le as VedtakspanelDerKlageErVurdertAvNk,dn as __namedExportsOrder,on as default};
