import{g as _a,r as b,u as jr,_ as er,s as tr,c as Qe,a as W,b as v,d as Gr,S as Mr,e as pa,f as ce,h as Lt,j as F,w as ba,i as Br,k as ha,o as Ra,M as Oa,R as Ta,E as Sa,t as rr,A as et,l as Na,m as Va,B as Aa,P as ka,n as wa,p as Pa}from"./iframe-rtP7a_DM.js";import{r as Ia}from"./index-DlXrip7J.js";import"./preload-helper-D9Z9MdNV.js";var La=Ia();const Fa=_a(La);function xa(e,n){var r=e.values,t=er(e,["values"]),a=n.values,l=er(n,["values"]);return tr(a,r)&&tr(t,l)}function Ur(e){var n=jr(),r=n.formatMessage,t=n.textComponent,a=t===void 0?b.Fragment:t,l=e.id,i=e.description,o=e.defaultMessage,d=e.values,c=e.children,m=e.tagName,g=m===void 0?a:m,y=e.ignoreTag,S={id:l,description:i,defaultMessage:o},N=r(S,d,{ignoreTag:y});return typeof c=="function"?c(Array.isArray(N)?N:[N]):g?b.createElement(g,null,N):b.createElement(b.Fragment,null,N)}Ur.displayName="FormattedMessage";var He=b.memo(Ur,xa);He.displayName="MemoizedFormattedMessage";var Ie=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(Ie||{}),Cr=(e=>(e.INGEN_BEREGNINGSREGLER="1099",e.MANN_ADOPTERER_IKKE_ALENE="1006",e.ÅRSAK_1020="1020",e))(Cr||{}),gt=(e=>(e.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",e.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",e.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",e))(gt||{}),qr=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(qr||{}),Se=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(Se||{});const Le=e=>Qe({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Da=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const $r=b.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="p",spacing:l,truncate:i,weight:o="regular",align:d,visuallyHidden:c,textColor:m}=e,g=Da(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=W();return v.createElement(a,Object.assign({},g,{ref:n,className:y(r,"navds-body-long",`navds-body-long--${t}`,Le({spacing:l,truncate:i,weight:o,align:d,visuallyHidden:c,textColor:m}))}))});var Ka=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const fe=b.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="p",spacing:l,truncate:i,weight:o="regular",align:d,visuallyHidden:c,textColor:m}=e,g=Ka(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=W();return v.createElement(a,Object.assign({},g,{ref:n,className:y(r,"navds-body-short",`navds-body-short--${t}`,Le({spacing:l,truncate:i,weight:o,align:d,visuallyHidden:c,textColor:m}))}))});var ja=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ga=b.forwardRef((e,n)=>{var{className:r,size:t="medium",spacing:a,uppercase:l,as:i="p",truncate:o,weight:d="regular",align:c,visuallyHidden:m,textColor:g}=e,y=ja(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:S}=W();return v.createElement(i,Object.assign({},y,{ref:n,className:S(r,"navds-detail",Le({spacing:a,truncate:o,weight:d,align:c,visuallyHidden:m,textColor:g,uppercase:l}),{"navds-detail--small":t==="small"})}))});var Ma=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const jt=b.forwardRef((e,n)=>{var{children:r,className:t,size:a,spacing:l,as:i="p",showIcon:o=!1}=e,d=Ma(e,["children","className","size","spacing","as","showIcon"]);const{cn:c}=W();return v.createElement(i,Object.assign({},d,{ref:n,className:c("navds-error-message","navds-label",t,Le({spacing:l}),{"navds-label--small":a==="small","navds-error-message--show-icon":o})}),o&&v.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Ba=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ua=b.forwardRef((e,n)=>{var{level:r="1",size:t,className:a,as:l,spacing:i,align:o,visuallyHidden:d,textColor:c}=e,m=Ba(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=W(),y=l??`h${r}`;return v.createElement(y,Object.assign({},m,{ref:n,className:g(a,"navds-heading",`navds-heading--${t}`,Le({spacing:i,align:o,visuallyHidden:d,textColor:c}))}))});var Ca=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};b.forwardRef((e,n)=>{var{className:r,spacing:t,as:a="p"}=e,l=Ca(e,["className","spacing","as"]);const{cn:i}=W();return v.createElement(a,Object.assign({},l,{ref:n,className:i(r,"navds-ingress",{"navds-typo--spacing":!!t})}))});var qa=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ee=b.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="label",spacing:l,visuallyHidden:i,textColor:o}=e,d=qa(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:c}=W();return v.createElement(a,Object.assign({},d,{ref:n,className:c(r,"navds-label",Le({spacing:l,visuallyHidden:i,textColor:o}),{"navds-label--small":t==="small"})}))});function zr(e,n=166,r=!1){let t;function a(...l){const i=()=>{t=void 0,e.apply(this,l)};!t&&r&&i(),clearTimeout(t),t=setTimeout(i,n)}return a.clear=()=>{clearTimeout(t)},a}function _e(e,n){const r=Object.entries(e).filter(([t])=>!n.includes(t));return Object.fromEntries(r)}const ar=globalThis?.document?b.useLayoutEffect:()=>{};let nr=0;function $a(e){const[n,r]=b.useState(e),t=e||n;return b.useEffect(()=>{n==null&&(nr+=1,r(`aksel-id-${nr}`))},[n]),t}const lr=v.useId;function Rt(e){var n;return lr!==void 0?lr().replace(/(:)/g,""):(n=$a(e))!==null&&n!==void 0?n:""}function ir(e,n=[]){const r=b.useRef(e);return b.useEffect(()=>{r.current=e}),b.useCallback((...t)=>{var a;return(a=r.current)===null||a===void 0?void 0:a.call(r,...t)},n)}function za({value:e,defaultValue:n,onChange:r}){const t=ir(r),[a,l]=b.useState(n),i=e!==void 0,o=i?e:a,d=ir(c=>{const g=typeof c=="function"?c(o):c;i||l(g),t(g)},[i,t,o]);return[o,d]}let sr=0;function Ya(e){const[n,r]=b.useState(e),t=e||n;return b.useEffect(()=>{n==null&&(sr+=1,r(`aksel-icon-${sr}`))},[n]),t}const or=v.useId;function Ne(e){var n;return or!==void 0?or().replace(/(:)/g,""):(n=Ya(e))!==null&&n!==void 0?n:""}var Ha=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Wa=b.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Ha(e,["title","titleId"]);let l=Ne();return l=r?t||"title-"+l:void 0,b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),r?b.createElement("title",{id:l},r):null,b.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var Ja=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Xa=b.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Ja(e,["title","titleId"]);let l=Ne();return l=r?t||"title-"+l:void 0,b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),r?b.createElement("title",{id:l},r):null,b.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Za=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Yr=b.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Za(e,["title","titleId"]);let l=Ne();return l=r?t||"title-"+l:void 0,b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),r?b.createElement("title",{id:l},r):null,b.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Qa=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Hr=b.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Qa(e,["title","titleId"]);let l=Ne();return l=r?t||"title-"+l:void 0,b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),r?b.createElement("title",{id:l},r):null,b.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var en=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const tn=b.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=en(e,["title","titleId"]);let l=Ne();return l=r?t||"title-"+l:void 0,b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),r?b.createElement("title",{id:l},r):null,b.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var rn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const an=b.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=rn(e,["title","titleId"]);let l=Ne();return l=r?t||"title-"+l:void 0,b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),r?b.createElement("title",{id:l},r):null,b.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.272 2.25a.75.75 0 0 0-.53.22L2.47 7.742a.75.75 0 0 0-.22.53v7.456c0 .199.079.39.22.53l5.272 5.272c.14.141.331.22.53.22h7.456a.75.75 0 0 0 .53-.22l5.272-5.272a.75.75 0 0 0 .22-.53V8.272a.75.75 0 0 0-.22-.53L16.258 2.47a.75.75 0 0 0-.53-.22zM3.75 8.583 8.583 3.75h6.834l4.833 4.833v6.834l-4.833 4.833H8.583L3.75 15.417zm5.28-.613a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var nn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ln=b.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=nn(e,["title","titleId"]);let l=Ne();return l=r?t||"title-"+l:void 0,b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),r?b.createElement("title",{id:l},r):null,b.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Gt(e,n,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e?.(a),r===!1||!a.defaultPrevented)return n?.(a)}}function kt(e){return(n={})=>{const r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Ue(e){return(n,r)=>{const t=r?.context?String(r.context):"standalone";let a;if(t==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=r?.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=r?.width?String(r.width):e.defaultWidth;a=e.values[o]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(n):n;return a[l]}}function Ce(e){return(n,r={})=>{const t=r.width,a=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],l=n.match(a);if(!l)return null;const i=l[0],o=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(o)?on(o,g=>g.test(i)):sn(o,g=>g.test(i));let c;c=e.valueCallback?e.valueCallback(d):d,c=r.valueCallback?r.valueCallback(c):c;const m=n.slice(i.length);return{value:c,rest:m}}}function sn(e,n){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n(e[r]))return r}function on(e,n){for(let r=0;r<e.length;r++)if(n(e[r]))return r}function un(e){return(n,r={})=>{const t=n.match(e.matchPattern);if(!t)return null;const a=t[0],l=n.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=r.valueCallback?r.valueCallback(i):i;const o=n.slice(a.length);return{value:i,rest:o}}}const dn={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},cn=(e,n,r)=>{let t;const a=dn[e];return typeof a=="string"?t=a:n===1?t=a.one:t=a.other.replace("{{count}}",String(n)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+t:t+" siden":t},mn={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},fn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},vn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},gn={date:kt({formats:mn,defaultWidth:"full"}),time:kt({formats:fn,defaultWidth:"full"}),dateTime:kt({formats:vn,defaultWidth:"full"})},yn={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},En=(e,n,r,t)=>yn[e],_n={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},pn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},bn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},hn={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Rn={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},On=(e,n)=>Number(e)+".",Tn={ordinalNumber:On,era:Ue({values:_n,defaultWidth:"wide"}),quarter:Ue({values:pn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ue({values:bn,defaultWidth:"wide"}),day:Ue({values:hn,defaultWidth:"wide"}),dayPeriod:Ue({values:Rn,defaultWidth:"wide"})},Sn=/^(\d+)\.?/i,Nn=/\d+/i,Vn={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},An={any:[/^f/i,/^e/i]},kn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},wn={any:[/1/i,/2/i,/3/i,/4/i]},Pn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},In={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ln={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Fn={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},xn={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Dn={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Kn={ordinalNumber:un({matchPattern:Sn,parsePattern:Nn,valueCallback:e=>parseInt(e,10)}),era:Ce({matchPatterns:Vn,defaultMatchWidth:"wide",parsePatterns:An,defaultParseWidth:"any"}),quarter:Ce({matchPatterns:kn,defaultMatchWidth:"wide",parsePatterns:wn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ce({matchPatterns:Pn,defaultMatchWidth:"wide",parsePatterns:In,defaultParseWidth:"any"}),day:Ce({matchPatterns:Ln,defaultMatchWidth:"wide",parsePatterns:Fn,defaultParseWidth:"any"}),dayPeriod:Ce({matchPatterns:xn,defaultMatchWidth:"any",parsePatterns:Dn,defaultParseWidth:"any"})},jn={code:"nb",formatDistance:cn,formatLong:gn,formatRelative:En,localize:Tn,match:Kn,options:{weekStartsOn:1,firstWeekContainsDate:4}},Gn={global:{dateLocale:jn,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Mn=b.createContext({locale:Gn}),Bn=()=>b.useContext(Mn),ur=/(\w+)/g;function Un(e,n){const r=Array.isArray(e)?e:Cn(e);for(const t of n){if(!t)continue;let a=t;for(let l=0;l<r.length;l++){const i=a[r[l]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Cn(e){const n=[];let r=ur.exec(e);for(;r;){const[,t,a]=r;n.push(t||a),r=ur.exec(e)}return n}const qn=/{[^}]*}/g;function Mt(e,...n){const r=Bn(),t=r.translations||[],a=[...n,...Array.isArray(t)?t.map(i=>i[e]):[t[e]],r.locale[e]];return(i,o)=>{const d=Un(i,a);return o?d.replace(qn,c=>{const m=c.substring(1,c.length-1);if(o[m]===void 0){const g=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${m}'. The following replacements were passed: '${g}'`)}return o[m]}):d}}var $n=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const zn=b.forwardRef((e,n)=>{var{className:r,size:t="medium",title:a,transparent:l=!1,variant:i="neutral",id:o,"data-color":d}=e,c=$n(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:m}=W(),g=Rt(),y=Mt("Loader");return v.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${g}`,ref:n,className:m("navds-loader",r,`navds-loader--${t}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??Yn(i)},_e(c,["children"]),{"data-variant":i}),v.createElement("title",{id:o??`loader-${g}`},a||y("title")),v.createElement("circle",{className:m("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),v.createElement("circle",{className:m("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Yn(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Hn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Wn=b.forwardRef((e,n)=>{var{as:r="button",variant:t="primary",className:a,children:l,size:i="medium",loading:o=!1,disabled:d,icon:c,iconPosition:m="left",onKeyUp:g,"data-color":y}=e,S=Hn(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:N}=W(),k=d||o?_e(S,["href"]):S,E=T=>{T.key===" "&&!d&&!o&&T.currentTarget.click()};return v.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":y??Jn(t),"data-variant":Xn(t)},k,{ref:n,onKeyUp:Gt(g,E),className:N(a,"navds-button",`navds-button--${t}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!c&&!l,"navds-button--disabled":d??o}),disabled:d??o?!0:void 0}),c&&m==="left"&&v.createElement("span",{className:N("navds-button__icon")},c),o&&v.createElement(zn,{size:i}),l&&v.createElement(Ee,{as:"span",size:i==="medium"?"medium":"small"},l),c&&m==="right"&&v.createElement("span",{className:N("navds-button__icon")},c))});function Jn(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Xn(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}const Wr=()=>{const{cn:e}=W();return v.createElement(Hr,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Jr=()=>{const{cn:e}=W();return v.createElement(Hr,{title:Mt("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var Zn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Qn=b.forwardRef((e,n)=>{var{className:r,header:t,children:a,open:l,defaultOpen:i=!1,onClick:o,size:d="medium",onOpenChange:c}=e,m=Zn(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:g}=W(),[y,S]=za({defaultValue:i,value:l,onChange:c}),N=d==="small"?"small":"medium";return v.createElement("div",{className:g("navds-read-more",`navds-read-more--${d}`,r,{"navds-read-more--open":y}),"data-volume":"low"},v.createElement("button",Object.assign({},m,{ref:n,type:"button",className:g("navds-read-more__button","navds-body-short",{"navds-body-short--small":d==="small"}),onClick:Gt(o,()=>S(k=>!k)),"aria-expanded":y,"data-state":y?"open":"closed"}),v.createElement(Yr,{className:g("navds-read-more__expand-icon"),"aria-hidden":!0}),v.createElement("span",null,t)),v.createElement($r,{as:"div","aria-hidden":!y,className:g("navds-read-more__content",{"navds-read-more__content--closed":!y}),size:N,"data-state":y?"open":"closed"},a))}),yt=b.createContext(null),Ot=(e,n)=>{var r,t,a;const{size:l,error:i,errorId:o}=e,d=b.useContext(yt),c=Rt(),m=(r=e.id)!==null&&r!==void 0?r:`${n}-${c}`,g=o??`${n}-error-${c}`,y=`${n}-description-${c}`,S=d?.disabled||e.disabled,N=(d?.readOnly||e.readOnly)&&!S||void 0,k=!S&&!N&&!!(i||d?.error),E=!S&&!N&&!!i&&typeof i!="boolean",T=Object.assign({},k?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:E,hasError:k,errorId:g,inputDescriptionId:y,size:(t=l??d?.size)!==null&&t!==void 0?t:"medium",readOnly:N,inputProps:Object.assign(Object.assign({id:m},T),{"aria-describedby":Qe(e["aria-describedby"],{[y]:e.description&&!Et(e.description),[g]:E,[(a=d?.errorId)!==null&&a!==void 0?a:""]:k&&d?.error})||void 0,disabled:S})}};function Et(e,n=!0){if(v.isValidElement(e)){if(e.type===Qn)return!0;if(e.props.children&&n)return Et(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>Et(r,n));return!1}var el=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const tl=b.forwardRef((e,n)=>{const{inputProps:r,errorId:t,showErrorMsg:a,hasError:l,size:i,inputDescriptionId:o,readOnly:d}=Ot(e,"select"),{children:c,label:m,className:g,description:y,htmlSize:S,hideLabel:N=!1,style:k}=e,E=el(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:T}=W(),_={onMouseDown:V=>{d&&(V.preventDefault(),V.target.focus())},onKeyDown:V=>{d&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(V.key)&&V.preventDefault()}};return v.createElement("div",{className:T(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":d,"navds-select--error":l,"navds-select--readonly":d})},v.createElement(Ee,{htmlFor:r.id,size:i,className:T("navds-form-field__label",{"navds-sr-only":N})},d&&v.createElement(Jr,null),m),!!y&&v.createElement(fe,{className:T("navds-form-field__description",{"navds-sr-only":N}),id:o,size:i,as:"div"},y),v.createElement("div",{className:T("navds-select__container"),style:k},v.createElement("select",Object.assign({},_e(E,["error","errorId","size","readOnly"]),r,_,{ref:n,className:T("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:S}),c),v.createElement(Yr,{className:T("navds-select__chevron"),"aria-hidden":!0})),v.createElement("div",{className:T("navds-form-field__error"),id:t,"aria-relevant":"additions removals","aria-live":"polite"},a&&v.createElement(jt,{size:i,showIcon:!0},e.error)))});function ee(e,n,r,t){return t?typeof t=="string"?{[`--__${e}c-${n}-${r}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([a,l])=>[`--__${e}c-${n}-${r}-${a}`,l])):{}}const rl={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},dr=(e,n,r,t,a,l)=>n.split(" ").map((i,o,d)=>{var c;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let m=`var(--${l}-${r}-${i})`;if(t.includes(i))m=i==="px"?"1px":i;else if(i.startsWith("space"))m=`var(--${l}-${i})`;else{const g=`--${l}-spacing-${i}`;m=`var(${(c=rl[g])!==null&&c!==void 0?c:g})`}return a?i==="0"?"0":`calc(-1 * ${m})`:m}).join(" ");function oe(e,n,r,t,a,l=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${n}-${r}-xs`]:dr(r,a,t,i,l,e)};const o={};return Object.entries(a).forEach(([d,c])=>{o[`--__${e}c-${n}-${r}-${d}`]=dr(r,c,t,i,l,e)}),o}const al=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],nl=({children:e,className:n,padding:r,paddingInline:t,paddingBlock:a,margin:l,marginInline:i,marginBlock:o,width:d,minWidth:c,maxWidth:m,height:g,minHeight:y,maxHeight:S,position:N,inset:k,top:E,right:T,left:_,bottom:V,overflow:P,overflowX:L,overflowY:z,flexBasis:K,flexGrow:C,flexShrink:D,gridColumn:j})=>{const G=Gr(!1),{cn:w}=W(),R=G?"ax":"a",x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},oe(R,"r","p","spacing",r)),oe(R,"r","pi","spacing",t)),oe(R,"r","pb","spacing",a)),oe(R,"r","m","spacing",l)),oe(R,"r","mi","spacing",i)),oe(R,"r","mb","spacing",o)),ee(R,"r","w",d)),ee(R,"r","minw",c)),ee(R,"r","maxw",m)),ee(R,"r","h",g)),ee(R,"r","minh",y)),ee(R,"r","maxh",S)),ee(R,"r","position",N)),oe(R,"r","inset","spacing",k)),oe(R,"r","top","spacing",E)),oe(R,"r","right","spacing",T)),oe(R,"r","bottom","spacing",V)),oe(R,"r","left","spacing",_)),ee(R,"r","overflow",P)),ee(R,"r","overflowx",L)),ee(R,"r","overflowy",z)),ee(R,"r","flex-basis",K)),ee(R,"r","flex-grow",C)),ee(R,"r","flex-shrink",D)),ee(R,"r","grid-column",j));return v.createElement(Mr,{className:w({className:n,"navds-r-p":r,"navds-r-pi":t,"navds-r-pb":a,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":d,"navds-r-minw":c,"navds-r-maxw":m,"navds-r-h":g,"navds-r-minh":y,"navds-r-maxh":S,"navds-r-position":N,"navds-r-inset":k,"navds-r-top":E,"navds-r-right":T,"navds-r-bottom":V,"navds-r-left":_,"navds-r-overflow":P,"navds-r-overflowx":L,"navds-r-overflowy":z,"navds-r-flex-basis":K,"navds-r-flex-grow":C,"navds-r-flex-shrink":D,"navds-r-grid-column":j}),style:x},e)};var ll=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Xr=b.forwardRef((e,n)=>{var{children:r,className:t,as:a="div",align:l,justify:i,wrap:o=!0,gap:d,style:c,direction:m="row",asChild:g}=e,y=ll(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const N=Gr(!1)?"ax":"a",{cn:k}=W(),E=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},c),oe(N,"stack","gap","spacing",d)),ee(N,"stack","direction",m)),ee(N,"stack","align",l)),ee(N,"stack","justify",i)),T=g?Mr:a;return v.createElement(nl,Object.assign({},y),v.createElement(T,Object.assign({},_e(y,al),{ref:n,style:E,className:k("navds-stack",t,{"navds-vstack":m==="column","navds-hstack":m==="row","navds-stack-gap":d,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":m,"navds-stack-wrap":o})}),r))});var il=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Xe=b.forwardRef((e,n)=>{var{as:r="div"}=e,t=il(e,["as"]);return v.createElement(Xr,Object.assign({as:r},t,{ref:n,direction:"row"}))});var sl=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ze=b.forwardRef((e,n)=>{var{as:r="div"}=e,t=sl(e,["as"]);return v.createElement(Xr,Object.assign({as:r},t,{ref:n,direction:"column",wrap:!1}))});var ol=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ul=b.forwardRef((e,n)=>{var{children:r,className:t,variant:a,size:l="medium",icon:i,"data-color":o}=e,d=ol(e,["children","className","variant","size","icon","data-color"]);const{cn:c}=W(),m=a?.endsWith("-filled")&&"strong",g=a?.endsWith("-moderate")&&"moderate";return v.createElement(fe,Object.assign({"data-color":o??dl(a),"data-variant":m||g||"outline"},d,{ref:n,as:"span",size:l==="medium"?"medium":"small",className:c("navds-tag",t,`navds-tag--${a}`,`navds-tag--${l}`)}),i&&v.createElement("span",{className:c("navds-tag__icon--left")},i),r)});function dl(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const cl=e=>{const n=Ot(e,"fieldset");return Object.assign(Object.assign({},n),{inputProps:{"aria-describedby":Qe(e["aria-describedby"],{[n.inputDescriptionId]:e.description&&!Et(e.description)})||void 0}})};var ml=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const fl=b.forwardRef((e,n)=>{var r,t,a;const{inputProps:l,errorId:i,showErrorMsg:o,hasError:d,size:c,readOnly:m,inputDescriptionId:g}=cl(e),{cn:y}=W(),S=b.useContext(yt),{children:N,className:k,errorPropagation:E=!0,legend:T,description:_,hideLegend:V,nativeReadOnly:P=!0}=e,L=ml(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return v.createElement(yt.Provider,{value:{error:E?(r=e.error)!==null&&r!==void 0?r:S?.error:void 0,errorId:Qe({[i]:o,[(t=S?.errorId)!==null&&t!==void 0?t:""]:!!S?.error}),size:c,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:m}},v.createElement("fieldset",Object.assign({},_e(L,["errorId","error","size","readOnly"]),l,{ref:n,className:y(k,"navds-fieldset",`navds-fieldset--${c}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":m})}),v.createElement(Ee,{size:c,as:"legend",className:y("navds-fieldset__legend",{"navds-sr-only":!!V})},m&&(P?v.createElement(Wr,null):v.createElement(Jr,null)),T),!!_&&v.createElement(fe,{className:y("navds-fieldset__description",{"navds-sr-only":!!V}),id:g,size:c??"medium",as:"div"},e.description),N,v.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:y("navds-fieldset__error")},o&&v.createElement(jt,{size:c,showIcon:!0},e.error))))});var vl=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Zr=v.createContext(null),gl=b.forwardRef((e,n)=>{var r,t,{children:a,className:l,name:i,defaultValue:o,value:d,onChange:c=()=>{},required:m,readOnly:g}=e,y=vl(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:S}=W(),N=b.useContext(yt),k=Rt();return v.createElement(fl,Object.assign({},y,{readOnly:g,ref:n,className:S(l,"navds-radio-group",`navds-radio-group--${(t=(r=y.size)!==null&&r!==void 0?r:N?.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),v.createElement(Zr.Provider,{value:{name:i??`radioGroupName-${k}`,defaultValue:o,value:d,onChange:c,required:m}},v.createElement("div",{className:S("navds-radio-buttons")},a)))});var yl=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const El=e=>{const n=b.useContext(Zr),r=Ot(_e(e,["description"]),"radio"),{inputProps:t,readOnly:a}=r,l=yl(r,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:a,inputProps:Object.assign(Object.assign({},t),{name:n?.name,defaultChecked:n?.defaultValue===void 0?void 0:n?.defaultValue===e.value,checked:n?.value===void 0?void 0:n?.value===e.value,onChange:i=>{var o,d;a||((o=e.onChange)===null||o===void 0||o.call(e,i),(d=n?.onChange)===null||d===void 0||d.call(n,e.value))},onClick:i=>{var o;if(a){i.preventDefault();return}(o=e?.onClick)===null||o===void 0||o.call(e,i)},required:n?.required,type:"radio"})})},cr=b.forwardRef((e,n)=>{const{cn:r}=W(),{inputProps:t,size:a,hasError:l,readOnly:i}=El(e);return v.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":l,"navds-radio--disabled":t.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},v.createElement("input",Object.assign({},_e(e,["children","size","description","readOnly"]),_e(t,["aria-invalid"]),{className:r("navds-radio__input"),ref:n})),v.createElement("label",{htmlFor:t.id,className:r("navds-radio__label")},v.createElement("span",{className:r("navds-radio__content")},v.createElement(fe,{as:"span",size:a},e.children),e.description&&v.createElement(fe,{as:"span",size:a,className:r("navds-form-field__subdescription navds-radio__description")},e.description))))});var _l=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const mr=(e,n,r)=>{const{outerHeightStyle:t,overflow:a}=n;return r.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(r.current+=1,n):e},fr=e=>(e?.ownerDocument||document).defaultView||window;function ot(e){return parseInt(e,10)||0}const pl=b.forwardRef((e,n)=>{var r,t,{className:a,onChange:l,maxRows:i,minRows:o=1,autoScrollbar:d,style:c,value:m}=e,g=_l(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:y}=b.useRef(m!=null),S=b.useRef(null),N=pa(S,n),k=b.useRef(null),E=b.useRef(0),[T,_]=b.useState({outerHeightStyle:0}),V=v.useCallback(()=>{const K=S.current,D=fr(K).getComputedStyle(K);if(D.width==="0px")return{outerHeightStyle:0};const j=k.current;j.style.width=D.width,j.value=K.value||g.placeholder||"x",j.value.slice(-1)===`
`&&(j.value+=" ");const G=D.boxSizing,w=ot(D.paddingBottom)+ot(D.paddingTop),R=ot(D.borderBottomWidth)+ot(D.borderTopWidth),x=j.scrollHeight-w;j.value="x";const B=j.scrollHeight-w;let M=x;o&&(M=Math.max(Number(o)*B,M)),i&&(M=Math.min(Number(i)*B,M)),M=Math.max(M,B);const Q=M+(G==="border-box"?w+R:0),ae=Math.abs(M-x)<=1;return{outerHeightStyle:Q,overflow:ae}},[i,o,g.placeholder]),P=()=>{const K=V();vr(K)||_(C=>mr(C,K,E))};ar(()=>{const K=()=>{const w=V();vr(w)||Fa.flushSync(()=>{_(R=>mr(R,w,E))})},C=zr(()=>{var w,R,x;if(E.current=0,!((w=S.current)===null||w===void 0)&&w.style.height||!((R=S.current)===null||R===void 0)&&R.style.width){((x=S.current)===null||x===void 0?void 0:x.style.overflow)==="hidden"&&_(B=>Object.assign(Object.assign({},B),{overflow:!1}));return}K()},166,!0),D=S.current,j=fr(D);j.addEventListener("resize",C);let G;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(C),G.observe(D)),()=>{C.clear(),j.removeEventListener("resize",C),G&&G.disconnect()}},[V]),ar(()=>{P()}),b.useEffect(()=>{E.current=0},[m]);const L=K=>{E.current=0,y||P(),l&&l(K)},z=Object.assign({"--__ac-textarea-height":T.outerHeightStyle+"px","--__axc-textarea-height":T.outerHeightStyle+"px",overflow:T.overflow&&!d&&!(!((r=S.current)===null||r===void 0)&&r.style.height)&&!(!((t=S.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},c);return v.createElement(v.Fragment,null,v.createElement("textarea",Object.assign({value:m,onChange:L,ref:N,rows:o,style:z},g,{className:a})),v.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:k,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},c)}))});function vr(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const bl=({maxLengthId:e,maxLength:n,currentLength:r,size:t,i18n:a})=>{const{cn:l}=W(),i=Mt("Textarea",{charsLeft:a?.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a?.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=n-r,[d,c]=b.useState(o);return b.useEffect(()=>{const m=zr(()=>{c(o)},2e3);return m(),()=>{m.clear()}},[o]),v.createElement(v.Fragment,null,v.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:n})),o<20&&v.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},gr(d,i)),v.createElement(fe,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:t},gr(o,i)))},gr=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var hl=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Rl=b.forwardRef((e,n)=>{var r,t,a;const{inputProps:l,errorId:i,showErrorMsg:o,hasError:d,size:c,inputDescriptionId:m}=Ot(e,"textarea"),{label:g,className:y,description:S,maxLength:N,hideLabel:k=!1,resize:E,UNSAFE_autoScrollbar:T,i18n:_,readOnly:V}=e,P=hl(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:L}=W(),z=Rt(),K=N!==void 0&&N>0,[C,D]=b.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),j=()=>{let w=P?.minRows?P?.minRows:3;return c==="small"&&(w=P?.minRows?P?.minRows:2),w},G=Qe(l["aria-describedby"],{[z??""]:K});return v.createElement("div",{className:L(y,"navds-form-field",`navds-form-field--${c}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":V,"navds-textarea--readonly":V,"navds-textarea--error":d,"navds-textarea--autoscrollbar":T,[`navds-textarea--resize-${E===!0?"both":E}`]:E})},v.createElement(Ee,{htmlFor:l.id,size:c,className:L("navds-form-field__label",{"navds-sr-only":k})},V&&v.createElement(Wr,null),g),!!S&&v.createElement(fe,{className:L("navds-form-field__description",{"navds-sr-only":k}),id:m,size:c,as:"div"},S),v.createElement(pl,Object.assign({},_e(P,["error","errorId","size"]),l,{onChange:Gt(e.onChange,e.value===void 0?w=>D(w.target.value):void 0),minRows:j(),autoScrollbar:T,ref:n,readOnly:V,className:L("navds-textarea__input","navds-body-short",`navds-body-short--${c??"medium"}`)},G?{"aria-describedby":G}:{})),K&&!V&&!l.disabled&&v.createElement(bl,{maxLengthId:z,maxLength:N,currentLength:(a=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:C.length,size:c,i18n:_}),v.createElement("div",{className:L("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&v.createElement(jt,{size:c,showIcon:!0},e.error)))});var tt=e=>e.type==="checkbox",Te=e=>e instanceof Date,re=e=>e==null;const Qr=e=>typeof e=="object";var H=e=>!re(e)&&!Array.isArray(e)&&Qr(e)&&!Te(e),ea=e=>H(e)&&e.target?tt(e.target)?e.target.checked:e.target.value:e,Ol=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ta=(e,n)=>e.has(Ol(n)),Tl=e=>{const n=e.constructor&&e.constructor.prototype;return H(n)&&n.hasOwnProperty("isPrototypeOf")},Bt=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function X(e){let n;const r=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(!(Bt&&(e instanceof Blob||t))&&(r||H(e)))if(n=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!Tl(e))n=e;else for(const a in e)e.hasOwnProperty(a)&&(n[a]=X(e[a]));else return e;return n}var Tt=e=>/^\w*$/.test(e),Y=e=>e===void 0,Ut=e=>Array.isArray(e)?e.filter(Boolean):[],Ct=e=>Ut(e.replace(/["|']|\]/g,"").split(/\.|\[/)),O=(e,n,r)=>{if(!n||!H(e))return r;const t=(Tt(n)?[n]:Ct(n)).reduce((a,l)=>re(a)?a:a[l],e);return Y(t)||t===e?Y(e[n])?r:e[n]:t},ie=e=>typeof e=="boolean",$=(e,n,r)=>{let t=-1;const a=Tt(n)?[n]:Ct(n),l=a.length,i=l-1;for(;++t<l;){const o=a[t];let d=r;if(t!==i){const c=e[o];d=H(c)||Array.isArray(c)?c:isNaN(+a[t+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=d,e=e[o]}};const _t={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ue={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},qt=v.createContext(null);qt.displayName="HookFormContext";const be=()=>v.useContext(qt),Sl=e=>{const{children:n,...r}=e;return v.createElement(qt.Provider,{value:r},n)};var ra=(e,n,r,t=!0)=>{const a={defaultValues:n._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const i=l;return n._proxyFormState[i]!==ue.all&&(n._proxyFormState[i]=!t||ue.all),r&&(r[i]=!0),e[i]}});return a};const $t=typeof window<"u"?v.useLayoutEffect:v.useEffect;function Nl(e){const n=be(),{control:r=n.control,disabled:t,name:a,exact:l}=e||{},[i,o]=v.useState(r._formState),d=v.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return $t(()=>r._subscribe({name:a,formState:d.current,exact:l,callback:c=>{!t&&o({...r._formState,...c})}}),[a,t,l]),v.useEffect(()=>{d.current.isValid&&r._setValid(!0)},[r]),v.useMemo(()=>ra(i,r,d.current,!1),[i,r])}var me=e=>typeof e=="string",aa=(e,n,r,t,a)=>me(e)?(t&&n.watch.add(e),O(r,e,a)):Array.isArray(e)?e.map(l=>(t&&n.watch.add(l),O(r,l))):(t&&(n.watchAll=!0),r),Ft=e=>re(e)||!Qr(e);function ye(e,n,r=new WeakSet){if(Ft(e)||Ft(n))return e===n;if(Te(e)&&Te(n))return e.getTime()===n.getTime();const t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;if(r.has(e)||r.has(n))return!0;r.add(e),r.add(n);for(const l of t){const i=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const o=n[l];if(Te(i)&&Te(o)||H(i)&&H(o)||Array.isArray(i)&&Array.isArray(o)?!ye(i,o,r):i!==o)return!1}}return!0}function Vl(e){const n=be(),{control:r=n.control,name:t,defaultValue:a,disabled:l,exact:i,compute:o}=e||{},d=v.useRef(a),c=v.useRef(o),m=v.useRef(void 0);c.current=o;const g=v.useMemo(()=>r._getWatch(t,d.current),[r,t]),[y,S]=v.useState(c.current?c.current(g):g);return $t(()=>r._subscribe({name:t,formState:{values:!0},exact:i,callback:N=>{if(!l){const k=aa(t,r._names,N.values||r._formValues,!1,d.current);if(c.current){const E=c.current(k);ye(E,m.current)||(S(E),m.current=E)}else S(k)}}}),[r,l,t,i]),v.useEffect(()=>r._removeUnmounted()),y}function zt(e){const n=be(),{name:r,disabled:t,control:a=n.control,shouldUnregister:l,defaultValue:i}=e,o=ta(a._names.array,r),d=v.useMemo(()=>O(a._formValues,r,O(a._defaultValues,r,i)),[a,r,i]),c=Vl({control:a,name:r,defaultValue:d,exact:!0}),m=Nl({control:a,name:r,exact:!0}),g=v.useRef(e),y=v.useRef(a.register(r,{...e.rules,value:c,...ie(e.disabled)?{disabled:e.disabled}:{}}));g.current=e;const S=v.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!O(m.errors,r)},isDirty:{enumerable:!0,get:()=>!!O(m.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!O(m.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!O(m.validatingFields,r)},error:{enumerable:!0,get:()=>O(m.errors,r)}}),[m,r]),N=v.useCallback(_=>y.current.onChange({target:{value:ea(_),name:r},type:_t.CHANGE}),[r]),k=v.useCallback(()=>y.current.onBlur({target:{value:O(a._formValues,r),name:r},type:_t.BLUR}),[r,a._formValues]),E=v.useCallback(_=>{const V=O(a._fields,r);V&&_&&(V._f.ref={focus:()=>_.focus&&_.focus(),select:()=>_.select&&_.select(),setCustomValidity:P=>_.setCustomValidity(P),reportValidity:()=>_.reportValidity()})},[a._fields,r]),T=v.useMemo(()=>({name:r,value:c,...ie(t)||m.disabled?{disabled:m.disabled||t}:{},onChange:N,onBlur:k,ref:E}),[r,t,m.disabled,N,k,E,c]);return v.useEffect(()=>{const _=a._options.shouldUnregister||l;a.register(r,{...g.current.rules,...ie(g.current.disabled)?{disabled:g.current.disabled}:{}});const V=(P,L)=>{const z=O(a._fields,P);z&&z._f&&(z._f.mount=L)};if(V(r,!0),_){const P=X(O(a._options.defaultValues,r));$(a._defaultValues,r,P),Y(O(a._formValues,r))&&$(a._formValues,r,P)}return!o&&a.register(r),()=>{(o?_&&!a._state.action:_)?a.unregister(r):V(r,!1)}},[r,a,o,l]),v.useEffect(()=>{a._setDisabledField({disabled:t,name:r})},[t,r,a]),v.useMemo(()=>({field:T,formState:m,fieldState:S}),[T,m,S])}var Al=(e,n,r,t,a)=>n?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:a||!0}}:{},We=e=>Array.isArray(e)?e:[e],yr=()=>{let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}},le=e=>H(e)&&!Object.keys(e).length,Yt=e=>e.type==="file",de=e=>typeof e=="function",pt=e=>{if(!Bt)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},na=e=>e.type==="select-multiple",Ht=e=>e.type==="radio",kl=e=>Ht(e)||tt(e),wt=e=>pt(e)&&e.isConnected;function wl(e,n){const r=n.slice(0,-1).length;let t=0;for(;t<r;)e=Y(e)?t++:e[n[t++]];return e}function Pl(e){for(const n in e)if(e.hasOwnProperty(n)&&!Y(e[n]))return!1;return!0}function J(e,n){const r=Array.isArray(n)?n:Tt(n)?[n]:Ct(n),t=r.length===1?e:wl(e,r),a=r.length-1,l=r[a];return t&&delete t[l],a!==0&&(H(t)&&le(t)||Array.isArray(t)&&Pl(t))&&J(e,r.slice(0,-1)),e}var la=e=>{for(const n in e)if(de(e[n]))return!0;return!1};function bt(e,n={}){const r=Array.isArray(e);if(H(e)||r)for(const t in e)Array.isArray(e[t])||H(e[t])&&!la(e[t])?(n[t]=Array.isArray(e[t])?[]:{},bt(e[t],n[t])):re(e[t])||(n[t]=!0);return n}function ia(e,n,r){const t=Array.isArray(e);if(H(e)||t)for(const a in e)Array.isArray(e[a])||H(e[a])&&!la(e[a])?Y(n)||Ft(r[a])?r[a]=Array.isArray(e[a])?bt(e[a],[]):{...bt(e[a])}:ia(e[a],re(n)?{}:n[a],r[a]):r[a]=!ye(e[a],n[a]);return r}var qe=(e,n)=>ia(e,n,bt(n));const Er={value:!1,isValid:!1},_r={value:!0,isValid:!0};var sa=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Y(e[0].attributes.value)?Y(e[0].value)||e[0].value===""?_r:{value:e[0].value,isValid:!0}:_r:Er}return Er},oa=(e,{valueAsNumber:n,valueAsDate:r,setValueAs:t})=>Y(e)?e:n?e===""?NaN:e&&+e:r&&me(e)?new Date(e):t?t(e):e;const pr={isValid:!1,value:null};var ua=e=>Array.isArray(e)?e.reduce((n,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:n,pr):pr;function br(e){const n=e.ref;return Yt(n)?n.files:Ht(n)?ua(e.refs).value:na(n)?[...n.selectedOptions].map(({value:r})=>r):tt(n)?sa(e.refs).value:oa(Y(n.value)?e.ref.value:n.value,e)}var Il=(e,n,r,t)=>{const a={};for(const l of e){const i=O(n,l);i&&$(a,l,i._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:t}},ht=e=>e instanceof RegExp,$e=e=>Y(e)?e:ht(e)?e.source:H(e)?ht(e.value)?e.value.source:e.value:e,hr=e=>({isOnSubmit:!e||e===ue.onSubmit,isOnBlur:e===ue.onBlur,isOnChange:e===ue.onChange,isOnAll:e===ue.all,isOnTouch:e===ue.onTouched});const Rr="AsyncFunction";var Ll=e=>!!e&&!!e.validate&&!!(de(e.validate)&&e.validate.constructor.name===Rr||H(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===Rr)),Fl=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Or=(e,n,r)=>!r&&(n.watchAll||n.watch.has(e)||[...n.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const Je=(e,n,r,t)=>{for(const a of r||Object.keys(e)){const l=O(e,a);if(l){const{_f:i,...o}=l;if(i){if(i.refs&&i.refs[0]&&n(i.refs[0],a)&&!t)return!0;if(i.ref&&n(i.ref,i.name)&&!t)return!0;if(Je(o,n))break}else if(H(o)&&Je(o,n))break}}};function Tr(e,n,r){const t=O(e,r);if(t||Tt(r))return{error:t,name:r};const a=r.split(".");for(;a.length;){const l=a.join("."),i=O(n,l),o=O(e,l);if(i&&!Array.isArray(i)&&r!==l)return{name:r};if(o&&o.type)return{name:l,error:o};if(o&&o.root&&o.root.type)return{name:`${l}.root`,error:o.root};a.pop()}return{name:r}}var xl=(e,n,r,t)=>{r(e);const{name:a,...l}=e;return le(l)||Object.keys(l).length>=Object.keys(n).length||Object.keys(l).find(i=>n[i]===(!t||ue.all))},Dl=(e,n,r)=>!e||!n||e===n||We(e).some(t=>t&&(r?t===n:t.startsWith(n)||n.startsWith(t))),Kl=(e,n,r,t,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(n||e):(r?t.isOnBlur:a.isOnBlur)?!e:(r?t.isOnChange:a.isOnChange)?e:!0,jl=(e,n)=>!Ut(O(e,n)).length&&J(e,n),Gl=(e,n,r)=>{const t=We(O(e,r));return $(t,"root",n[r]),$(e,r,t),e},vt=e=>me(e);function Sr(e,n,r="validate"){if(vt(e)||Array.isArray(e)&&e.every(vt)||ie(e)&&!e)return{type:r,message:vt(e)?e:"",ref:n}}var Pe=e=>H(e)&&!ht(e)?e:{value:e,message:""},Nr=async(e,n,r,t,a,l)=>{const{ref:i,refs:o,required:d,maxLength:c,minLength:m,min:g,max:y,pattern:S,validate:N,name:k,valueAsNumber:E,mount:T}=e._f,_=O(r,k);if(!T||n.has(k))return{};const V=o?o[0]:i,P=w=>{a&&V.reportValidity&&(V.setCustomValidity(ie(w)?"":w||""),V.reportValidity())},L={},z=Ht(i),K=tt(i),C=z||K,D=(E||Yt(i))&&Y(i.value)&&Y(_)||pt(i)&&i.value===""||_===""||Array.isArray(_)&&!_.length,j=Al.bind(null,k,t,L),G=(w,R,x,B=ge.maxLength,M=ge.minLength)=>{const Q=w?R:x;L[k]={type:w?B:M,message:Q,ref:i,...j(w?B:M,Q)}};if(l?!Array.isArray(_)||!_.length:d&&(!C&&(D||re(_))||ie(_)&&!_||K&&!sa(o).isValid||z&&!ua(o).isValid)){const{value:w,message:R}=vt(d)?{value:!!d,message:d}:Pe(d);if(w&&(L[k]={type:ge.required,message:R,ref:V,...j(ge.required,R)},!t))return P(R),L}if(!D&&(!re(g)||!re(y))){let w,R;const x=Pe(y),B=Pe(g);if(!re(_)&&!isNaN(_)){const M=i.valueAsNumber||_&&+_;re(x.value)||(w=M>x.value),re(B.value)||(R=M<B.value)}else{const M=i.valueAsDate||new Date(_),Q=ve=>new Date(new Date().toDateString()+" "+ve),ae=i.type=="time",ne=i.type=="week";me(x.value)&&_&&(w=ae?Q(_)>Q(x.value):ne?_>x.value:M>new Date(x.value)),me(B.value)&&_&&(R=ae?Q(_)<Q(B.value):ne?_<B.value:M<new Date(B.value))}if((w||R)&&(G(!!w,x.message,B.message,ge.max,ge.min),!t))return P(L[k].message),L}if((c||m)&&!D&&(me(_)||l&&Array.isArray(_))){const w=Pe(c),R=Pe(m),x=!re(w.value)&&_.length>+w.value,B=!re(R.value)&&_.length<+R.value;if((x||B)&&(G(x,w.message,R.message),!t))return P(L[k].message),L}if(S&&!D&&me(_)){const{value:w,message:R}=Pe(S);if(ht(w)&&!_.match(w)&&(L[k]={type:ge.pattern,message:R,ref:i,...j(ge.pattern,R)},!t))return P(R),L}if(N){if(de(N)){const w=await N(_,r),R=Sr(w,V);if(R&&(L[k]={...R,...j(ge.validate,R.message)},!t))return P(R.message),L}else if(H(N)){let w={};for(const R in N){if(!le(w)&&!t)break;const x=Sr(await N[R](_,r),V,R);x&&(w={...x,...j(R,x.message)},P(x.message),t&&(L[k]=w))}if(!le(w)&&(L[k]={ref:V,...w},!t))return L}}return P(!0),L};const Ml={mode:ue.onSubmit,reValidateMode:ue.onChange,shouldFocusError:!0};function Bl(e={}){let n={...Ml,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:de(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},t={},a=H(n.defaultValues)||H(n.values)?X(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:X(a),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,c=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...m};const y={array:yr(),state:yr()},S=n.criteriaMode===ue.all,N=s=>u=>{clearTimeout(c),c=setTimeout(s,u)},k=async s=>{if(!n.disabled&&(m.isValid||g.isValid||s)){const u=n.resolver?le((await K()).errors):await D(t,!0);u!==r.isValid&&y.state.next({isValid:u})}},E=(s,u)=>{!n.disabled&&(m.isValidating||m.validatingFields||g.isValidating||g.validatingFields)&&((s||Array.from(o.mount)).forEach(f=>{f&&(u?$(r.validatingFields,f,u):J(r.validatingFields,f))}),y.state.next({validatingFields:r.validatingFields,isValidating:!le(r.validatingFields)}))},T=(s,u=[],f,A,h=!0,p=!0)=>{if(A&&f&&!n.disabled){if(i.action=!0,p&&Array.isArray(O(t,s))){const I=f(O(t,s),A.argA,A.argB);h&&$(t,s,I)}if(p&&Array.isArray(O(r.errors,s))){const I=f(O(r.errors,s),A.argA,A.argB);h&&$(r.errors,s,I),jl(r.errors,s)}if((m.touchedFields||g.touchedFields)&&p&&Array.isArray(O(r.touchedFields,s))){const I=f(O(r.touchedFields,s),A.argA,A.argB);h&&$(r.touchedFields,s,I)}(m.dirtyFields||g.dirtyFields)&&(r.dirtyFields=qe(a,l)),y.state.next({name:s,isDirty:G(s,u),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else $(l,s,u)},_=(s,u)=>{$(r.errors,s,u),y.state.next({errors:r.errors})},V=s=>{r.errors=s,y.state.next({errors:r.errors,isValid:!1})},P=(s,u,f,A)=>{const h=O(t,s);if(h){const p=O(l,s,Y(f)?O(a,s):f);Y(p)||A&&A.defaultChecked||u?$(l,s,u?p:br(h._f)):x(s,p),i.mount&&k()}},L=(s,u,f,A,h)=>{let p=!1,I=!1;const U={name:s};if(!n.disabled){if(!f||A){(m.isDirty||g.isDirty)&&(I=r.isDirty,r.isDirty=U.isDirty=G(),p=I!==U.isDirty);const q=ye(O(a,s),u);I=!!O(r.dirtyFields,s),q?J(r.dirtyFields,s):$(r.dirtyFields,s,!0),U.dirtyFields=r.dirtyFields,p=p||(m.dirtyFields||g.dirtyFields)&&I!==!q}if(f){const q=O(r.touchedFields,s);q||($(r.touchedFields,s,f),U.touchedFields=r.touchedFields,p=p||(m.touchedFields||g.touchedFields)&&q!==f)}p&&h&&y.state.next(U)}return p?U:{}},z=(s,u,f,A)=>{const h=O(r.errors,s),p=(m.isValid||g.isValid)&&ie(u)&&r.isValid!==u;if(n.delayError&&f?(d=N(()=>_(s,f)),d(n.delayError)):(clearTimeout(c),d=null,f?$(r.errors,s,f):J(r.errors,s)),(f?!ye(h,f):h)||!le(A)||p){const I={...A,...p&&ie(u)?{isValid:u}:{},errors:r.errors,name:s};r={...r,...I},y.state.next(I)}},K=async s=>{E(s,!0);const u=await n.resolver(l,n.context,Il(s||o.mount,t,n.criteriaMode,n.shouldUseNativeValidation));return E(s),u},C=async s=>{const{errors:u}=await K(s);if(s)for(const f of s){const A=O(u,f);A?$(r.errors,f,A):J(r.errors,f)}else r.errors=u;return u},D=async(s,u,f={valid:!0})=>{for(const A in s){const h=s[A];if(h){const{_f:p,...I}=h;if(p){const U=o.array.has(p.name),q=h._f&&Ll(h._f);q&&m.validatingFields&&E([A],!0);const se=await Nr(h,o.disabled,l,S,n.shouldUseNativeValidation&&!u,U);if(q&&m.validatingFields&&E([A]),se[p.name]&&(f.valid=!1,u))break;!u&&(O(se,p.name)?U?Gl(r.errors,se,p.name):$(r.errors,p.name,se[p.name]):J(r.errors,p.name))}!le(I)&&await D(I,u,f)}}return f.valid},j=()=>{for(const s of o.unMount){const u=O(t,s);u&&(u._f.refs?u._f.refs.every(f=>!wt(f)):!wt(u._f.ref))&&Ke(s)}o.unMount=new Set},G=(s,u)=>!n.disabled&&(s&&u&&$(l,s,u),!ye(ve(),a)),w=(s,u,f)=>aa(s,o,{...i.mount?l:Y(u)?a:me(s)?{[s]:u}:u},f,u),R=s=>Ut(O(i.mount?l:a,s,n.shouldUnregister?O(a,s,[]):[])),x=(s,u,f={})=>{const A=O(t,s);let h=u;if(A){const p=A._f;p&&(!p.disabled&&$(l,s,oa(u,p)),h=pt(p.ref)&&re(u)?"":u,na(p.ref)?[...p.ref.options].forEach(I=>I.selected=h.includes(I.value)):p.refs?tt(p.ref)?p.refs.forEach(I=>{(!I.defaultChecked||!I.disabled)&&(Array.isArray(h)?I.checked=!!h.find(U=>U===I.value):I.checked=h===I.value||!!h)}):p.refs.forEach(I=>I.checked=I.value===h):Yt(p.ref)?p.ref.value="":(p.ref.value=h,p.ref.type||y.state.next({name:s,values:X(l)})))}(f.shouldDirty||f.shouldTouch)&&L(s,h,f.shouldTouch,f.shouldDirty,!0),f.shouldValidate&&ne(s)},B=(s,u,f)=>{for(const A in u){if(!u.hasOwnProperty(A))return;const h=u[A],p=s+"."+A,I=O(t,p);(o.array.has(s)||H(h)||I&&!I._f)&&!Te(h)?B(p,h,f):x(p,h,f)}},M=(s,u,f={})=>{const A=O(t,s),h=o.array.has(s),p=X(u);$(l,s,p),h?(y.array.next({name:s,values:X(l)}),(m.isDirty||m.dirtyFields||g.isDirty||g.dirtyFields)&&f.shouldDirty&&y.state.next({name:s,dirtyFields:qe(a,l),isDirty:G(s,p)})):A&&!A._f&&!re(p)?B(s,p,f):x(s,p,f),Or(s,o)&&y.state.next({...r,name:s}),y.state.next({name:i.mount?s:void 0,values:X(l)})},Q=async s=>{i.mount=!0;const u=s.target;let f=u.name,A=!0;const h=O(t,f),p=q=>{A=Number.isNaN(q)||Te(q)&&isNaN(q.getTime())||ye(q,O(l,f,q))},I=hr(n.mode),U=hr(n.reValidateMode);if(h){let q,se;const st=u.type?br(h._f):ea(s),pe=s.type===_t.BLUR||s.type===_t.FOCUS_OUT,ga=!Fl(h._f)&&!n.resolver&&!O(r.errors,f)&&!h._f.deps||Kl(pe,O(r.touchedFields,f),r.isSubmitted,U,I),Vt=Or(f,o,pe);$(l,f,st),pe?(!u||!u.readOnly)&&(h._f.onBlur&&h._f.onBlur(s),d&&d(0)):h._f.onChange&&h._f.onChange(s);const At=L(f,st,pe),ya=!le(At)||Vt;if(!pe&&y.state.next({name:f,type:s.type,values:X(l)}),ga)return(m.isValid||g.isValid)&&(n.mode==="onBlur"?pe&&k():pe||k()),ya&&y.state.next({name:f,...Vt?{}:At});if(!pe&&Vt&&y.state.next({...r}),n.resolver){const{errors:Zt}=await K([f]);if(p(st),A){const Ea=Tr(r.errors,t,f),Qt=Tr(Zt,t,Ea.name||f);q=Qt.error,f=Qt.name,se=le(Zt)}}else E([f],!0),q=(await Nr(h,o.disabled,l,S,n.shouldUseNativeValidation))[f],E([f]),p(st),A&&(q?se=!1:(m.isValid||g.isValid)&&(se=await D(t,!0)));A&&(h._f.deps&&ne(h._f.deps),z(f,se,q,At))}},ae=(s,u)=>{if(O(r.errors,u)&&s.focus)return s.focus(),1},ne=async(s,u={})=>{let f,A;const h=We(s);if(n.resolver){const p=await C(Y(s)?s:h);f=le(p),A=s?!h.some(I=>O(p,I)):f}else s?(A=(await Promise.all(h.map(async p=>{const I=O(t,p);return await D(I&&I._f?{[p]:I}:I)}))).every(Boolean),!(!A&&!r.isValid)&&k()):A=f=await D(t);return y.state.next({...!me(s)||(m.isValid||g.isValid)&&f!==r.isValid?{}:{name:s},...n.resolver||!s?{isValid:f}:{},errors:r.errors}),u.shouldFocus&&!A&&Je(t,ae,s?h:o.mount),A},ve=s=>{const u={...i.mount?l:a};return Y(s)?u:me(s)?O(u,s):s.map(f=>O(u,f))},te=(s,u)=>({invalid:!!O((u||r).errors,s),isDirty:!!O((u||r).dirtyFields,s),error:O((u||r).errors,s),isValidating:!!O(r.validatingFields,s),isTouched:!!O((u||r).touchedFields,s)}),De=s=>{s&&We(s).forEach(u=>J(r.errors,u)),y.state.next({errors:s?r.errors:{}})},he=(s,u,f)=>{const A=(O(t,s,{_f:{}})._f||{}).ref,h=O(r.errors,s)||{},{ref:p,message:I,type:U,...q}=h;$(r.errors,s,{...q,...u,ref:A}),y.state.next({name:s,errors:r.errors,isValid:!1}),f&&f.shouldFocus&&A&&A.focus&&A.focus()},St=(s,u)=>de(s)?y.state.subscribe({next:f=>"values"in f&&s(w(void 0,u),f)}):w(s,u,!0),nt=s=>y.state.subscribe({next:u=>{Dl(s.name,u.name,s.exact)&&xl(u,s.formState||m,Be,s.reRenderRoot)&&s.callback({values:{...l},...r,...u,defaultValues:a})}}).unsubscribe,Nt=s=>(i.mount=!0,g={...g,...s.formState},nt({...s,formState:g})),Ke=(s,u={})=>{for(const f of s?We(s):o.mount)o.mount.delete(f),o.array.delete(f),u.keepValue||(J(t,f),J(l,f)),!u.keepError&&J(r.errors,f),!u.keepDirty&&J(r.dirtyFields,f),!u.keepTouched&&J(r.touchedFields,f),!u.keepIsValidating&&J(r.validatingFields,f),!n.shouldUnregister&&!u.keepDefaultValue&&J(a,f);y.state.next({values:X(l)}),y.state.next({...r,...u.keepDirty?{isDirty:G()}:{}}),!u.keepIsValid&&k()},lt=({disabled:s,name:u})=>{(ie(s)&&i.mount||s||o.disabled.has(u))&&(s?o.disabled.add(u):o.disabled.delete(u))},Ve=(s,u={})=>{let f=O(t,s);const A=ie(u.disabled)||ie(n.disabled);return $(t,s,{...f||{},_f:{...f&&f._f?f._f:{ref:{name:s}},name:s,mount:!0,...u}}),o.mount.add(s),f?lt({disabled:ie(u.disabled)?u.disabled:n.disabled,name:s}):P(s,!0,u.value),{...A?{disabled:u.disabled||n.disabled}:{},...n.progressive?{required:!!u.required,min:$e(u.min),max:$e(u.max),minLength:$e(u.minLength),maxLength:$e(u.maxLength),pattern:$e(u.pattern)}:{},name:s,onChange:Q,onBlur:Q,ref:h=>{if(h){Ve(s,u),f=O(t,s);const p=Y(h.value)&&h.querySelectorAll&&h.querySelectorAll("input,select,textarea")[0]||h,I=kl(p),U=f._f.refs||[];if(I?U.find(q=>q===p):p===f._f.ref)return;$(t,s,{_f:{...f._f,...I?{refs:[...U.filter(wt),p,...Array.isArray(O(a,s))?[{}]:[]],ref:{type:p.type,name:s}}:{ref:p}}}),P(s,!1,void 0,p)}else f=O(t,s,{}),f._f&&(f._f.mount=!1),(n.shouldUnregister||u.shouldUnregister)&&!(ta(o.array,s)&&i.action)&&o.unMount.add(s)}}},Ae=()=>n.shouldFocusError&&Je(t,ae,o.mount),je=s=>{ie(s)&&(y.state.next({disabled:s}),Je(t,(u,f)=>{const A=O(t,f);A&&(u.disabled=A._f.disabled||s,Array.isArray(A._f.refs)&&A._f.refs.forEach(h=>{h.disabled=A._f.disabled||s}))},0,!1))},ke=(s,u)=>async f=>{let A;f&&(f.preventDefault&&f.preventDefault(),f.persist&&f.persist());let h=X(l);if(y.state.next({isSubmitting:!0}),n.resolver){const{errors:p,values:I}=await K();r.errors=p,h=X(I)}else await D(t);if(o.disabled.size)for(const p of o.disabled)J(h,p);if(J(r.errors,"root"),le(r.errors)){y.state.next({errors:{}});try{await s(h,f)}catch(p){A=p}}else u&&await u({...r.errors},f),Ae(),setTimeout(Ae);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:le(r.errors)&&!A,submitCount:r.submitCount+1,errors:r.errors}),A)throw A},Ge=(s,u={})=>{O(t,s)&&(Y(u.defaultValue)?M(s,X(O(a,s))):(M(s,u.defaultValue),$(a,s,X(u.defaultValue))),u.keepTouched||J(r.touchedFields,s),u.keepDirty||(J(r.dirtyFields,s),r.isDirty=u.defaultValue?G(s,X(O(a,s))):G()),u.keepError||(J(r.errors,s),m.isValid&&k()),y.state.next({...r}))},Re=(s,u={})=>{const f=s?X(s):a,A=X(f),h=le(s),p=h?a:A;if(u.keepDefaultValues||(a=f),!u.keepValues){if(u.keepDirtyValues){const I=new Set([...o.mount,...Object.keys(qe(a,l))]);for(const U of Array.from(I))O(r.dirtyFields,U)?$(p,U,O(l,U)):M(U,O(p,U))}else{if(Bt&&Y(s))for(const I of o.mount){const U=O(t,I);if(U&&U._f){const q=Array.isArray(U._f.refs)?U._f.refs[0]:U._f.ref;if(pt(q)){const se=q.closest("form");if(se){se.reset();break}}}}if(u.keepFieldsRef)for(const I of o.mount)M(I,O(p,I));else t={}}l=n.shouldUnregister?u.keepDefaultValues?X(a):{}:X(p),y.array.next({values:{...p}}),y.state.next({values:{...p}})}o={mount:u.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!m.isValid||!!u.keepIsValid||!!u.keepDirtyValues,i.watch=!!n.shouldUnregister,y.state.next({submitCount:u.keepSubmitCount?r.submitCount:0,isDirty:h?!1:u.keepDirty?r.isDirty:!!(u.keepDefaultValues&&!ye(s,a)),isSubmitted:u.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:h?{}:u.keepDirtyValues?u.keepDefaultValues&&l?qe(a,l):r.dirtyFields:u.keepDefaultValues&&s?qe(a,s):u.keepDirty?r.dirtyFields:{},touchedFields:u.keepTouched?r.touchedFields:{},errors:u.keepErrors?r.errors:{},isSubmitSuccessful:u.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:a})},Oe=(s,u)=>Re(de(s)?s(l):s,u),Me=(s,u={})=>{const f=O(t,s),A=f&&f._f;if(A){const h=A.refs?A.refs[0]:A.ref;h.focus&&(h.focus(),u.shouldSelect&&de(h.select)&&h.select())}},Be=s=>{r={...r,...s}},we={control:{register:Ve,unregister:Ke,getFieldState:te,handleSubmit:ke,setError:he,_subscribe:nt,_runSchema:K,_focusError:Ae,_getWatch:w,_getDirty:G,_setValid:k,_setFieldArray:T,_setDisabledField:lt,_setErrors:V,_getFieldArray:R,_reset:Re,_resetDefaultValues:()=>de(n.defaultValues)&&n.defaultValues().then(s=>{Oe(s,n.resetOptions),y.state.next({isLoading:!1})}),_removeUnmounted:j,_disableForm:je,_subjects:y,_proxyFormState:m,get _fields(){return t},get _formValues(){return l},get _state(){return i},set _state(s){i=s},get _defaultValues(){return a},get _names(){return o},set _names(s){o=s},get _formState(){return r},get _options(){return n},set _options(s){n={...n,...s}}},subscribe:Nt,trigger:ne,register:Ve,handleSubmit:ke,watch:St,setValue:M,getValues:ve,reset:Oe,resetField:Ge,clearErrors:De,unregister:Ke,setError:he,setFocus:Me,getFieldState:te};return{...we,formControl:we}}function Ul(e={}){const n=v.useRef(void 0),r=v.useRef(void 0),[t,a]=v.useState({isDirty:!1,isValidating:!1,isLoading:de(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:de(e.defaultValues)?void 0:e.defaultValues});if(!n.current)if(e.formControl)n.current={...e.formControl,formState:t},e.defaultValues&&!de(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...o}=Bl(e);n.current={...o,formState:t}}const l=n.current.control;return l._options=e,$t(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>a({...l._formState}),reRenderRoot:!0});return a(o=>({...o,isReady:!0})),l._formState.isReady=!0,i},[l]),v.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),v.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),v.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),v.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),v.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==t.isDirty&&l._subjects.state.next({isDirty:i})}},[l,t.isDirty]),v.useEffect(()=>{e.values&&!ye(e.values,r.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),r.current=e.values,a(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),v.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),n.current.formState=ra(t,l),n.current}function Cl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vr={exports:{}},ze={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar;function ql(){if(Ar)return ze;Ar=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var o in a)o!=="key"&&(l[o]=a[o])}else l=a;return a=l.ref,{$$typeof:e,type:t,key:i,ref:a!==void 0?a:null,props:l}}return ze.Fragment=n,ze.jsx=r,ze.jsxs=r,ze}var kr;function $l(){return kr||(kr=1,Vr.exports=ql()),Vr.exports}var xt=$l();const rt={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};ce(rt);var wr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Pr;function zl(){return Pr||(Pr=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var l="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(l=a(l,t.call(this,o)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var o in l)n.call(l,o)&&l[o]&&(i=a(i,this&&this[o]||o));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(wr)),wr.exports}var Yl=zl();const Wt=Cl(Yl),Hl="_borderbox_1a0x6_1",Wl="_error_1a0x6_5",Jl="_warning_1a0x6_8",Xl={borderbox:Hl,error:Wl,warning:Jl};Wt.bind(Xl);const Zl="_aksjonspunkt_11wjs_1",Ql="_erAksjonspunktApent_11wjs_4",ei="_erIkkeGodkjentAvBeslutter_11wjs_8",ti={aksjonspunkt:Zl,erAksjonspunktApent:Ql,erIkkeGodkjentAvBeslutter:ei},ri=Wt.bind(ti),ai=({erAksjonspunktApent:e,erIkkeGodkjentAvBeslutter:n,className:r,children:t})=>xt.jsx("div",{className:ri(r,"aksjonspunkt",{erAksjonspunktApent:e&&!n,erIkkeGodkjentAvBeslutter:n}),children:t});ce(rt);ce(rt);const ni="_divider_1jpov_1",li="_dividerParagraf_1jpov_8",ii="_leftPanel_1jpov_11",si="_rightPanel_1jpov_14",oi={divider:ni,dividerParagraf:li,leftPanel:ii,rightPanel:si};Wt.bind(oi);const da=()=>xt.jsx("span",{"data-testid":"editedIcon",children:xt.jsx(tn,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});ce(rt);ce(rt);function ui(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ir={exports:{}},Ye={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr;function di(){if(Lr)return Ye;Lr=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var o in a)o!=="key"&&(l[o]=a[o])}else l=a;return a=l.ref,{$$typeof:e,type:t,key:i,ref:a!==void 0?a:null,props:l}}return Ye.Fragment=n,Ye.jsx=r,Ye.jsxs=r,Ye}var Fr;function ci(){return Fr||(Fr=1,Ir.exports=di()),Ir.exports}var Z=ci();const Jt=e=>e.reduce((n,r,t)=>({...n,[t]:a=>r(a)||!0}),{}),Xt=(e,n)=>n.split(".").reduce((r,t)=>r!==void 0?r[t]:r,e)?.message;var Dt={exports:{}},mi=Dt.exports,xr;function fi(){return xr||(xr=1,function(e,n){(function(r,t){e.exports=t()})(mi,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,l=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,d={},c=function(E){return(E=+E)+(E>68?1900:2e3)},m=function(E){return function(T){this[E]=+T}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(T){if(!T||T==="Z")return 0;var _=T.match(/([+-]|\d\d)/g),V=60*_[1]+(+_[2]||0);return V===0?0:_[0]==="+"?-V:V}(E)}],y=function(E){var T=d[E];return T&&(T.indexOf?T:T.s.concat(T.f))},S=function(E,T){var _,V=d.meridiem;if(V){for(var P=1;P<=24;P+=1)if(E.indexOf(V(P,0,T))>-1){_=P>12;break}}else _=E===(T?"pm":"PM");return _},N={A:[o,function(E){this.afternoon=S(E,!1)}],a:[o,function(E){this.afternoon=S(E,!0)}],Q:[a,function(E){this.month=3*(E-1)+1}],S:[a,function(E){this.milliseconds=100*+E}],SS:[l,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[i,m("seconds")],ss:[i,m("seconds")],m:[i,m("minutes")],mm:[i,m("minutes")],H:[i,m("hours")],h:[i,m("hours")],HH:[i,m("hours")],hh:[i,m("hours")],D:[i,m("day")],DD:[l,m("day")],Do:[o,function(E){var T=d.ordinal,_=E.match(/\d+/);if(this.day=_[0],T)for(var V=1;V<=31;V+=1)T(V).replace(/\[|\]/g,"")===E&&(this.day=V)}],w:[i,m("week")],ww:[l,m("week")],M:[i,m("month")],MM:[l,m("month")],MMM:[o,function(E){var T=y("months"),_=(y("monthsShort")||T.map(function(V){return V.slice(0,3)})).indexOf(E)+1;if(_<1)throw new Error;this.month=_%12||_}],MMMM:[o,function(E){var T=y("months").indexOf(E)+1;if(T<1)throw new Error;this.month=T%12||T}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(E){this.year=c(E)}],YYYY:[/\d{4}/,m("year")],Z:g,ZZ:g};function k(E){var T,_;T=E,_=d&&d.formats;for(var V=(E=T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(j,G,w){var R=w&&w.toUpperCase();return G||_[w]||r[w]||_[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,B,M){return B||M.slice(1)})})).match(t),P=V.length,L=0;L<P;L+=1){var z=V[L],K=N[z],C=K&&K[0],D=K&&K[1];V[L]=D?{regex:C,parser:D}:z.replace(/^\[|\]$/g,"")}return function(j){for(var G={},w=0,R=0;w<P;w+=1){var x=V[w];if(typeof x=="string")R+=x.length;else{var B=x.regex,M=x.parser,Q=j.slice(R),ae=B.exec(Q)[0];M.call(G,ae),j=j.replace(ae,"")}}return function(ne){var ve=ne.afternoon;if(ve!==void 0){var te=ne.hours;ve?te<12&&(ne.hours+=12):te===12&&(ne.hours=0),delete ne.afternoon}}(G),G}}return function(E,T,_){_.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(c=E.parseTwoDigitYear);var V=T.prototype,P=V.parse;V.parse=function(L){var z=L.date,K=L.utc,C=L.args;this.$u=K;var D=C[1];if(typeof D=="string"){var j=C[2]===!0,G=C[3]===!0,w=j||G,R=C[2];G&&(R=C[2]),d=this.$locale(),!j&&R&&(d=_.Ls[R]),this.$d=function(Q,ae,ne,ve){try{if(["x","X"].indexOf(ae)>-1)return new Date((ae==="X"?1e3:1)*Q);var te=k(ae)(Q),De=te.year,he=te.month,St=te.day,nt=te.hours,Nt=te.minutes,Ke=te.seconds,lt=te.milliseconds,Ve=te.zone,Ae=te.week,je=new Date,ke=St||(De||he?1:je.getDate()),Ge=De||je.getFullYear(),Re=0;De&&!he||(Re=he>0?he-1:je.getMonth());var Oe,Me=nt||0,Be=Nt||0,it=Ke||0,we=lt||0;return Ve?new Date(Date.UTC(Ge,Re,ke,Me,Be,it,we+60*Ve.offset*1e3)):ne?new Date(Date.UTC(Ge,Re,ke,Me,Be,it,we)):(Oe=new Date(Ge,Re,ke,Me,Be,it,we),Ae&&(Oe=ve(Oe).week(Ae).toDate()),Oe)}catch{return new Date("")}}(z,D,K,_),this.init(),R&&R!==!0&&(this.$L=this.locale(R).$L),w&&z!=this.format(D)&&(this.$d=new Date("")),d={}}else if(D instanceof Array)for(var x=D.length,B=1;B<=x;B+=1){C[1]=D[B-1];var M=_.apply(this,C);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}B===x&&(this.$d=new Date(""))}else P.call(this,L)}}})}(Dt)),Dt.exports}var vi=fi();const gi=ui(vi),yi="_textarea_14c7r_1",Ei="_readOnlyField_14c7r_7",Dr={textarea:yi,readOnlyField:Ei},_i=e=>e!=null&&e!=="",ca=({label:e,value:n,isEdited:r=!1,type:t,hideLabel:a,size:l})=>_i(n)?Z.jsxs(Ze,{gap:"space-4",children:[e&&!a&&Z.jsx(Ee,{size:l,children:e}),Z.jsxs(Xe,{gap:"space-8",align:"center",wrap:!1,children:[Z.jsx($r,{className:t==="textarea"?Dr.textarea:Dr.readOnlyField,size:l,children:n}),r&&Z.jsx(da,{})]})]}):null;Lt.extend(gi);const pi=({label:e,description:n,validate:r=[],onChange:t,children:a,className:l,isReadOnly:i=!1,size:o="small",isEdited:d=!1,hideLegend:c=!1,...m})=>{const{name:g,control:y}=m,{formState:{errors:S}}=be(),{field:N}=zt({name:g,control:y,rules:{validate:Jt(r)}});return Z.jsx(gl,{name:g,value:N.value!==void 0?N.value:null,legend:Z.jsxs(Xe,{justify:"center",gap:"space-8",children:[e,i&&d&&Z.jsx(da,{})]}),hideLegend:c,disabled:i,description:n,size:o,error:Xt(S,g),onChange:k=>{t&&t(k),N.onChange(k)},className:l,children:a})},bi=({label:e,selectValues:n,validate:r=[],readOnly:t=!1,description:a,hideValueOnDisable:l=!1,onChange:i,className:o,hideLabel:d,isEdited:c,size:m,...g})=>{const{name:y,control:S,disabled:N}=g,{formState:{errors:k}}=be(),{field:E}=zt({name:y,control:S,rules:{validate:b.useMemo(()=>Jt(r),[r])}});if(t){const V=n.map(L=>L.props).find(L=>L.value===E.value),P=V?V.children:void 0;return Z.jsx(ca,{value:P,label:e,hideLabel:d,isEdited:c,size:m})}const T=E.value||"",_=!n.map(V=>V.props.value).includes(T)&&T!=="";return _&&console.warn(`No corresponding option found for value '${T}'`),Z.jsxs(tl,{size:"small",className:o,error:Xt(k,y),label:e,description:a,value:l&&N||_?"":E.value,disabled:N,onChange:V=>{i&&i(V),E.onChange(V)},hideLabel:d,children:[Z.jsx("option",{style:{display:"none"}}),",",n]})},hi="_textAreaFieldWithBadges_bdz0b_1",Ri="_etikettWrapper_bdz0b_4",Kr={textAreaFieldWithBadges:hi,etikettWrapper:Ri},Oi=({name:e,control:n,label:r,readOnly:t,maxLength:a,badges:l,validate:i=[],parse:o=S=>S,className:d,description:c,isEdited:m,size:g="small",...y})=>{const{formState:{errors:S}}=be(),{field:N}=zt({name:e,control:n,rules:{validate:b.useMemo(()=>Jt(i),[i])}});return t?Z.jsx(ca,{size:g,label:r,value:N.value,type:"textarea",isEdited:m,hideLabel:y.hideLabel}):Z.jsxs("div",{className:l?Kr.textAreaFieldWithBadges:null,children:[l&&Z.jsx("div",{className:Kr.etikettWrapper,children:l.map(({type:k,titleText:E})=>Z.jsx(ul,{variant:k,size:"small",children:E},E))}),Z.jsx(Rl,{size:g,label:r,description:c,className:d,autoComplete:"off",...N,onChange:k=>N.onChange(k.currentTarget.value!==""?o(k.currentTarget.value):null),value:N.value?N.value:"",error:Xt(S,e),maxLength:a,...y})]})},Ti=({formMethods:e,onSubmit:n,children:r,className:t,setDataOnUnmount:a})=>{const{handleSubmit:l,getValues:i}=e;return b.useEffect(()=>()=>{a&&a(i())},[]),Z.jsx(Sl,{...e,children:Z.jsx("form",{className:t,onSubmit:n?l(o=>n(o)):void 0,children:r})})},Si="_begrunnelseTextField_hw8s7_6",Ni={begrunnelseTextField:Si},at={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},Vi=ce(at),Ai=ha(3),ki=Ra(2e3),wi=e=>e?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",Pi=e=>n=>n!==void 0||e,Fe=({readOnly:e,text:n,useAllWidth:r=!1,notRequired:t=!1})=>{const{formState:{isDirty:a},control:l}=be(),i=t?()=>!1:Pi(a);return F.jsx("div",{className:r?"":Ni.begrunnelseTextField,children:F.jsx(Oi,{name:"begrunnelse",control:l,label:n??Vi.formatMessage({id:wi(e)}),validate:[Br(i),Ai,ki,Oa],maxLength:2e3,readOnly:e,parse:ba})})},Ii=e=>e.length>0&&e[0].begrunnelse?e[0].begrunnelse:"";Fe.buildInitialValues=e=>({begrunnelse:Ta(Ii(e))});Fe.transformValues=e=>({begrunnelse:e.begrunnelse});Fe.__docgenInfo={description:`ProsessStegBegrunnelseTextField

Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
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
    | '5069'
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
    | "UNDEFINED('null')"
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
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
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
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
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
| '5069'
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
| "UNDEFINED('null')"
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Li=ce(at),Fi=(e,n,r,t)=>!r&&!n||e?!0:t===void 0?!r:!r&&t||t,ma=({isReadOnly:e,isSubmittable:n,isSubmitting:r,isDirty:t,text:a,onClick:l,hasEmptyRequiredFields:i})=>e?null:F.jsx("div",{children:F.jsx(Wn,{size:"small",variant:"primary",loading:r,disabled:Fi(r,n,t,i),onClick:l||Sa,type:l?"button":"submit",children:a??Li.formatMessage({id:"SubmitButton.ConfirmInformation"})})});ma.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const xi="_godkjentImage_bo2wj_1",Di="_avslattImage_bo2wj_7",Ki="_selectBredde_bo2wj_13",Pt={godkjentImage:xi,avslattImage:Di,selectBredde:Ki},ji=ce(at),Gi=(e,n)=>()=>e===!1&&!n,Mi=e=>e.toSorted((n,r)=>n.navn.localeCompare(r.navn)),xe=({avslagsarsaker:e,customVilkarIkkeOppfyltText:n,customVilkarOppfyltText:r,readOnly:t,skalKunneInnvilge:a=!0,validatorsForRadioOptions:l})=>{const{getValues:i,watch:o,control:d}=be(),c=o("erVilkarOk"),m=l?l.concat(rr):[rr];return F.jsxs(Ze,{gap:"space-16",paddingInline:"4",children:[t&&c!==void 0&&F.jsxs(Xe,{gap:"space-8",children:[c&&F.jsx(Wa,{className:Pt.godkjentImage}),!c&&F.jsx(an,{className:Pt.avslattImage}),c&&F.jsx(fe,{size:"small",children:r}),!c&&F.jsx(fe,{size:"small",children:n})]}),(!t||c===void 0)&&F.jsxs(pi,{name:"erVilkarOk",control:d,validate:m,isReadOnly:t,children:[F.jsx(cr,{value:!0,size:"small",disabled:!a,children:r}),F.jsx(cr,{value:!1,size:"small",children:n})]}),c!==void 0&&!c&&e&&F.jsx(bi,{name:"avslagskode",control:d,label:ji.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:Mi(e||[]).map(g=>F.jsx("option",{value:g.kode,children:g.navn},g.kode)),readOnly:t,className:Pt.selectBredde,validate:[Br(Gi(c,i("avslagskode")))]})]})};xe.buildInitialValues=(e,n,r)=>{const a=e.some(l=>l.status===et.OPPRETTET)?void 0:Se.OPPFYLT===n;return{erVilkarOk:a,avslagskode:a===!1&&r?.avslagsarsak?r.avslagsarsak:void 0}};xe.transformValues=e=>e.erVilkarOk?{erVilkarOk:e.erVilkarOk}:{erVilkarOk:e.erVilkarOk,avslagskode:e.avslagskode};xe.__docgenInfo={description:`VilkarResultPicker

Presentasjonskomponent. Lar Nav-ansatt velge om vilkåret skal oppfylles eller avvises.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
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
    | '5069'
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
    | "UNDEFINED('null')"
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
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
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
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
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
| '5069'
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
| "UNDEFINED('null')"
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]"}},{name:"status",optional:!1,type:{name:"string"}},{name:"behandlingsresultat",optional:!0,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,alias:"Behandlingsresultat"}}],returns:{type:{name:"signature",type:"object",raw:`{
  erVilkarOk?: boolean;
  avslagskode?: string;
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagskode",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  erVilkarOk?: boolean;
  avslagskode?: string;
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagskode",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"VilkarResultPicker",props:{avslagsarsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"},description:""},customVilkarIkkeOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},customVilkarOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},skalKunneInnvilge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},validatorsForRadioOptions:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number | boolean) => string | null | undefined)[]"},description:""}}};const Bi="_vilkar_1ciy8_1",Ui="_aksjonspunktMargin_1ciy8_5",Ci="_godkjentImage_1ciy8_10",qi="_avslattImage_1ciy8_16",ut={vilkar:Bi,aksjonspunktMargin:Ui,godkjentImage:Ci,avslattImage:qi},It=ce(at),fa=({lovReferanse:e,title:n,originalErVilkarOk:r,isAksjonspunktOpen:t,readOnlySubmitButton:a,readOnly:l,rendreFakta:i,isDirty:o,erIkkeGodkjentAvBeslutter:d,isSubmitting:c,children:m})=>F.jsxs(Ze,{gap:"space-16",children:[F.jsxs(Xe,{gap:"space-8",children:[r!==void 0&&F.jsxs(F.Fragment,{children:[r&&F.jsx(Xa,{className:ut.godkjentImage}),!r&&F.jsx(ln,{className:ut.avslattImage})]}),F.jsx(Ua,{size:"small",level:"3",children:n}),e&&F.jsx(Ga,{className:ut.vilkar,children:e})]}),F.jsxs(Xe,{gap:"space-8",children:[r&&F.jsx(Ee,{size:"small",children:It.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})}),r===!1&&F.jsx(Ee,{size:"small",children:It.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})}),!t&&r===void 0&&F.jsx(fe,{size:"small",children:It.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]}),F.jsx(ai,{className:ut.aksjonspunktMargin,erAksjonspunktApent:t,erIkkeGodkjentAvBeslutter:d,children:F.jsxs(Ze,{gap:"space-16",children:[F.jsx("div",{children:m}),F.jsx(ma,{isReadOnly:l,isSubmittable:!a,isDirty:o,isSubmitting:c})]})}),i?.()]});fa.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};ce(at);const $i=e=>{const n=e.tilretteleggingDatoer.some(t=>t.type!==gt.HEL_TILRETTELEGGING),r=e.tilretteleggingDatoer.some(t=>t.type===gt.HEL_TILRETTELEGGING&&Lt(t.fom).isAfter(Lt(e.tilretteleggingBehovFom)));return n||r},zi=e=>e?.arbeidsforholdListe?e.arbeidsforholdListe.some(n=>$i(n)):!1,Yi=(e,n,r)=>({...xe.buildInitialValues(e,n,r),...Fe.buildInitialValues(e)}),Hi=e=>({...xe.transformValues(e),...Fe.transformValues(e),kode:Ie.SVANGERSKAPSVILKARET}),va=({readOnlySubmitButton:e,svangerskapspengerTilrettelegging:n,status:r})=>{const{aksjonspunkterForPanel:t,alleMerknaderFraBeslutter:a,behandling:l,harÅpneAksjonspunkter:i,submitCallback:o,alleKodeverk:d,isReadOnly:c}=Na(),m=t.some(P=>a[P.definisjon]?.notAccepted),g=zi(n),y=jr(),S=Yi(t,r,l.behandlingsresultat),{mellomlagretFormData:N,setMellomlagretFormData:k}=Va(),E=Ul({defaultValues:N??S}),T=E.watch("erVilkarOk");b.useEffect(()=>{T&&E.clearErrors()},[T]);const _=d.Avslagsårsak[qr.SVANGERSKAPVILKARET],V=i?void 0:Se.OPPFYLT===r;return F.jsx(Ti,{formMethods:E,onSubmit:P=>o(Hi(P)),setDataOnUnmount:k,children:F.jsx(fa,{title:y.formatMessage({id:"SvangerskapVilkarForm.Svangerskap"}),isAksjonspunktOpen:i,readOnlySubmitButton:e,readOnly:c,originalErVilkarOk:V,erIkkeGodkjentAvBeslutter:m,isDirty:E.formState.isDirty,isSubmitting:E.formState.isSubmitting,children:F.jsxs(Ze,{gap:"space-16",children:[F.jsx(Ee,{size:"small",children:F.jsx(He,{id:"SvangerskapVilkarForm.RettTilSvp"})}),!g&&F.jsx(Ee,{size:"small",children:F.jsx(He,{id:"SvangerskapVilkarForm.IkkeInnvilgetUttak"})}),F.jsx(xe,{avslagsarsaker:_,readOnly:c,skalKunneInnvilge:g,customVilkarOppfyltText:F.jsx(He,{id:"SvangerskapVilkarForm.Oppfylt"}),customVilkarIkkeOppfyltText:F.jsx(He,{id:"SvangerskapVilkarForm.IkkeOppfylt",values:{b:Aa}})}),F.jsx(Fe,{readOnly:c,notRequired:T})]})})})};va.__docgenInfo={description:"",methods:[],displayName:"SvangerskapVilkarForm",props:{status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},svangerskapspengerTilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!1}},{key:"arbeidsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: UttakArbeidType;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER' | 'TIDLIGERE_VEDTAK'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: UttakArbeidType;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}},{key:"saksbehandlet",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>`},description:""}}};const Wi={"SvangerskapVilkarForm.Svangerskap":"Svangerskap","SvangerskapVilkarForm.RettTilSvp":"Rett til svangerskapspenger","SvangerskapVilkarForm.Oppfylt":"Mor har rett til svangerskapspenger, vilkåret er oppfylt","SvangerskapVilkarForm.IkkeOppfylt":"Mor har ikke rett til svangerskapspenger, vilkåret er <b>ikke</b> oppfylt","SvangerskapVilkarForm.IkkeInnvilgetUttak":"Det finnes ingen perioder med svangerskapspenger som kan innvilges","ShowVilkarStatus.Check":"Informasjonen er utfylt"},Ji=ce(Wi),Kt=({status:e,readOnlySubmitButton:n,svangerskapspengerTilrettelegging:r})=>F.jsx(ka,{value:Ji,children:F.jsx(va,{status:e,readOnlySubmitButton:n,svangerskapspengerTilrettelegging:r})});Kt.__docgenInfo={description:"",methods:[],displayName:"SvangerskapVilkarProsessIndex",props:{svangerskapspengerTilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!1}},{key:"arbeidsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: UttakArbeidType;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER' | 'TIDLIGERE_VEDTAK'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: UttakArbeidType;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}},{key:"saksbehandlet",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>`},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const es={title:"prosess/prosess-vilkar-svangerskap",component:Kt,decorators:[wa,Pa],args:{svangerskapspengerTilrettelegging:{}},render:e=>F.jsx(Kt,{...e})},dt={args:{aksjonspunkterForPanel:[{definisjon:Ie.SVANGERSKAPSVILKARET,status:et.OPPRETTET,begrunnelse:null}],isReadOnly:!1,readOnlySubmitButton:!1,status:Se.IKKE_VURDERT}},ct={args:{aksjonspunkterForPanel:[{definisjon:Ie.SVANGERSKAPSVILKARET,status:et.OPPRETTET,begrunnelse:null}],readOnlySubmitButton:!1,status:Se.IKKE_VURDERT,svangerskapspengerTilrettelegging:{arbeidsforholdListe:[{tilretteleggingDatoer:[{type:gt.DELVIS_TILRETTELEGGING}]}]}}},mt={args:{aksjonspunkterForPanel:[{definisjon:Ie.SVANGERSKAPSVILKARET,status:et.UTFORT,begrunnelse:"Dette vilkåret er godkjent"}],isReadOnly:!0,readOnlySubmitButton:!0,status:Se.OPPFYLT}},ft={args:{behandling:{uuid:"1",versjon:1,behandlingsresultat:{avslagsarsak:Cr.INGEN_BEREGNINGSREGLER}},aksjonspunkterForPanel:[{definisjon:Ie.SVANGERSKAPSVILKARET,status:et.UTFORT,begrunnelse:"Dette vilkåret er avslått"}],isReadOnly:!0,readOnlySubmitButton:!0,status:Se.IKKE_OPPFYLT}};dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null
    }] as Aksjonspunkt[],
    isReadOnly: false,
    readOnlySubmitButton: false,
    status: VilkarUtfallType.IKKE_VURDERT
  }
}`,...dt.parameters?.docs?.source}}};ct.parameters={...ct.parameters,docs:{...ct.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null
    }] as Aksjonspunkt[],
    readOnlySubmitButton: false,
    status: VilkarUtfallType.IKKE_VURDERT,
    svangerskapspengerTilrettelegging: {
      arbeidsforholdListe: [{
        tilretteleggingDatoer: [{
          type: TilretteleggingType.DELVIS_TILRETTELEGGING
        }]
      } as ArbeidsforholdFodselOgTilrettelegging]
    } as FodselOgTilrettelegging
  }
}`,...ct.parameters?.docs?.source}}};mt.parameters={...mt.parameters,docs:{...mt.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er godkjent'
    }] as Aksjonspunkt[],
    isReadOnly: true,
    readOnlySubmitButton: true,
    status: VilkarUtfallType.OPPFYLT
  }
}`,...mt.parameters?.docs?.source}}};ft.parameters={...ft.parameters,docs:{...ft.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: Avslagsarsak.INGEN_BEREGNINGSREGLER
      }
    } as Behandling,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er avslått'
    }] as Aksjonspunkt[],
    isReadOnly: true,
    readOnlySubmitButton: true,
    status: VilkarUtfallType.IKKE_OPPFYLT
  }
}`,...ft.parameters?.docs?.source}}};const ts=["ÅpentAksjonspunktSkalIkkeKunneInnvilge","ÅpentAksjonspunktSkalKunneInnvilge","OppfyltVilkår","AvslåttVilkår"];export{ft as AvslåttVilkår,mt as OppfyltVilkår,ts as __namedExportsOrder,es as default,dt as ÅpentAksjonspunktSkalIkkeKunneInnvilge,ct as ÅpentAksjonspunktSkalKunneInnvilge};
