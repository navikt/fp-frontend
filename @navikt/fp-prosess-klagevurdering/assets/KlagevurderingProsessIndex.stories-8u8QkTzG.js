import{g as mt,r as b,u as Ye,_ as br,s as pr,c as $e,a as $,R as u,b as ar,d as sn,e as vt,f as Ga,S as ft,h as pe,Z as on,j as h,A as gt,i as un,k as dn,o as cn,N as Et,l as mn,P as vn,t as ia,m as rr,n as fn,p as gn,w as En,q as _n}from"./iframe-2jN1-An5.js";import{r as hn}from"./index-CWgqkzJ_.js";import"./preload-helper-PPVm8Dsz.js";var _t=hn();const yn=mt(_t);function bn(e,t){var r=e.values,a=br(e,["values"]),n=t.values,l=br(t,["values"]);return pr(n,r)&&pr(a,l)}function ht(e){var t=Ye(),r=t.formatMessage,a=t.textComponent,n=a===void 0?b.Fragment:a,l=e.id,i=e.description,s=e.defaultMessage,d=e.values,v=e.children,c=e.tagName,g=c===void 0?n:c,E=e.ignoreTag,A={id:l,description:i,defaultMessage:s},y=r(A,d,{ignoreTag:E});return typeof v=="function"?v(Array.isArray(y)?y:[y]):g?b.createElement(g,null,y):b.createElement(b.Fragment,null,y)}ht.displayName="FormattedMessage";var Y=b.memo(ht,bn);Y.displayName="MemoizedFormattedMessage";var ca=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ca||{}),je=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.FRITEKST_HTML="FRIHTM",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(je||{}),z=(e=>(e.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",e.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",e.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",e.AVVIS_KLAGE="AVVIS_KLAGE",e.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",e))(z||{}),Re=(e=>(e.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",e.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",e.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",e.UDEFINERT="-",e))(Re||{});const La=(e,t)=>{if(e==null)throw new Error("Data er ikke oppgitt");return e},ze=e=>$e({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var pn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const tr=b.forwardRef((e,t)=>{var{className:r,size:a="medium",as:n="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:v,textColor:c}=e,g=pn(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=$();return u.createElement(n,Object.assign({},g,{ref:t,className:E(r,"navds-body-long",`navds-body-long--${a}`,ze({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:v,textColor:c}))}))});var On=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const X=b.forwardRef((e,t)=>{var{className:r,size:a="medium",as:n="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:v,textColor:c}=e,g=On(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=$();return u.createElement(n,Object.assign({},g,{ref:t,className:E(r,"navds-body-short",`navds-body-short--${a}`,ze({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:v,textColor:c}))}))});var Sn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Kn=b.forwardRef((e,t)=>{var{className:r,size:a="medium",spacing:n,uppercase:l,as:i="p",truncate:s,weight:d="regular",align:v,visuallyHidden:c,textColor:g}=e,E=Sn(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:A}=$();return u.createElement(i,Object.assign({},E,{ref:t,className:A(r,"navds-detail",ze({spacing:n,truncate:s,weight:d,align:v,visuallyHidden:c,textColor:g,uppercase:l}),{"navds-detail--small":a==="small"})}))});var kn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const ja=b.forwardRef((e,t)=>{var{children:r,className:a,size:n,spacing:l,as:i="p",showIcon:s=!1}=e,d=kn(e,["children","className","size","spacing","as","showIcon"]);const{cn:v}=$();return u.createElement(i,Object.assign({},d,{ref:t,className:v("navds-error-message","navds-label",a,ze({spacing:l}),{"navds-label--small":n==="small","navds-error-message--show-icon":s})}),s&&u.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Tn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const nr=b.forwardRef((e,t)=>{var{level:r="1",size:a,className:n,as:l,spacing:i,align:s,visuallyHidden:d,textColor:v}=e,c=Tn(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=$(),E=l??`h${r}`;return u.createElement(E,Object.assign({},c,{ref:t,className:g(n,"navds-heading",`navds-heading--${a}`,ze({spacing:i,align:s,visuallyHidden:d,textColor:v}))}))});var An=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};b.forwardRef((e,t)=>{var{className:r,spacing:a,as:n="p"}=e,l=An(e,["className","spacing","as"]);const{cn:i}=$();return u.createElement(n,Object.assign({},l,{ref:t,className:i(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var Nn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ee=b.forwardRef((e,t)=>{var{className:r,size:a="medium",as:n="label",spacing:l,visuallyHidden:i,textColor:s}=e,d=Nn(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:v}=$();return u.createElement(n,Object.assign({},d,{ref:t,className:v(r,"navds-label",ze({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":a==="small"})}))});function yt(e,t=166,r=!1){let a;function n(...l){const i=()=>{a=void 0,e.apply(this,l)};!a&&r&&i(),clearTimeout(a),a=setTimeout(i,t)}return n.clear=()=>{clearTimeout(a)},n}function _e(e,t){const r=Object.entries(e).filter(([a])=>!t.includes(a));return Object.fromEntries(r)}const Or=globalThis?.document?b.useLayoutEffect:()=>{};let Sr=0;function Rn(e){const[t,r]=b.useState(e),a=e||t;return b.useEffect(()=>{t==null&&(Sr+=1,r(`aksel-id-${Sr}`))},[t]),a}const Kr=u.useId;function Ie(e){var t;return Kr!==void 0?Kr().replace(/(:)/g,""):(t=Rn(e))!==null&&t!==void 0?t:""}function kr(e,t=[]){const r=b.useRef(e);return b.useEffect(()=>{r.current=e}),b.useCallback(((...a)=>{var n;return(n=r.current)===null||n===void 0?void 0:n.call(r,...a)}),t)}function Vn({value:e,defaultValue:t,onChange:r}){const a=kr(r),[n,l]=b.useState(t),i=e!==void 0,s=i?e:n,d=kr(v=>{const g=typeof v=="function"?v(s):v;i||l(g),a(g)},[i,a,s]);return[s,d]}let Tr=0;function Ln(e){const[t,r]=b.useState(e),a=e||t;return b.useEffect(()=>{t==null&&(Tr+=1,r(`aksel-icon-${Tr}`))},[t]),a}const Ar=u.useId;function Te(e){var t;return Ar!==void 0?Ar().replace(/(:)/g,""):(t=Ln(e))!==null&&t!==void 0?t:""}var Dn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const In=b.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Dn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var wn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Pn=b.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=wn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var xn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const bt=b.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=xn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Mn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Fn=b.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Mn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Gn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const jn=b.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Gn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Bn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const pt=b.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Bn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Hn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Un=b.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Hn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Cn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ot=b.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Cn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var qn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Yn=b.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=qn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?u.createElement("title",{id:l},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Ue(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),r===!1||!n.defaultPrevented)return t?.(n)}}const[$n,St]=ar({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function $a(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function ea(e){return(t,r)=>{const a=r?.context?String(r.context):"standalone";let n;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=r?.width?String(r.width):i;n=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=r?.width?String(r.width):e.defaultWidth;n=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(t):t;return n[l]}}function aa(e){return(t,r={})=>{const a=r.width,n=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=t.match(n);if(!l)return null;const i=l[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?Wn(s,g=>g.test(i)):zn(s,g=>g.test(i));let v;v=e.valueCallback?e.valueCallback(d):d,v=r.valueCallback?r.valueCallback(v):v;const c=t.slice(i.length);return{value:v,rest:c}}}function zn(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function Wn(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Jn(e){return(t,r={})=>{const a=t.match(e.matchPattern);if(!a)return null;const n=a[0],l=t.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=r.valueCallback?r.valueCallback(i):i;const s=t.slice(n.length);return{value:i,rest:s}}}const Zn={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Xn=(e,t,r)=>{let a;const n=Zn[e];return typeof n=="string"?a=n:t===1?a=n.one:a=n.other.replace("{{count}}",String(t)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},Qn={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},el={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},al={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},rl={date:$a({formats:Qn,defaultWidth:"full"}),time:$a({formats:el,defaultWidth:"full"}),dateTime:$a({formats:al,defaultWidth:"full"})},tl={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},nl=(e,t,r,a)=>tl[e],ll={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},il={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},sl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ol={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ul={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},dl=(e,t)=>Number(e)+".",cl={ordinalNumber:dl,era:ea({values:ll,defaultWidth:"wide"}),quarter:ea({values:il,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ea({values:sl,defaultWidth:"wide"}),day:ea({values:ol,defaultWidth:"wide"}),dayPeriod:ea({values:ul,defaultWidth:"wide"})},ml=/^(\d+)\.?/i,vl=/\d+/i,fl={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},gl={any:[/^f/i,/^e/i]},El={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},_l={any:[/1/i,/2/i,/3/i,/4/i]},hl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},yl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},bl={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},pl={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ol={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Sl={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Kl={ordinalNumber:Jn({matchPattern:ml,parsePattern:vl,valueCallback:e=>parseInt(e,10)}),era:aa({matchPatterns:fl,defaultMatchWidth:"wide",parsePatterns:gl,defaultParseWidth:"any"}),quarter:aa({matchPatterns:El,defaultMatchWidth:"wide",parsePatterns:_l,defaultParseWidth:"any",valueCallback:e=>e+1}),month:aa({matchPatterns:hl,defaultMatchWidth:"wide",parsePatterns:yl,defaultParseWidth:"any"}),day:aa({matchPatterns:bl,defaultMatchWidth:"wide",parsePatterns:pl,defaultParseWidth:"any"}),dayPeriod:aa({matchPatterns:Ol,defaultMatchWidth:"any",parsePatterns:Sl,defaultParseWidth:"any"})},kl={code:"nb",formatDistance:Xn,formatLong:rl,formatRelative:nl,localize:cl,match:Kl,options:{weekStartsOn:1,firstWeekContainsDate:4}},Tl={global:{dateLocale:kl,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Al=b.createContext({locale:Tl}),Kt=()=>b.useContext(Al);function Nl(){return typeof window<"u"}function Rl(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Vl(e){return Nl()?e instanceof Element||e instanceof Rl(e).Element:!1}const Nr=/(\w+)/g;function Ll(e,t){const r=Array.isArray(e)?e:Dl(e);for(const a of t){if(!a)continue;let n=a;for(let l=0;l<r.length;l++){const i=n[r[l]];i!==void 0&&(n=i)}if(typeof n=="string")return n}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Dl(e){const t=[];let r=Nr.exec(e);for(;r;){const[,a,n]=r;t.push(a||n),r=Nr.exec(e)}return t}const Il=/{[^}]*}/g;function ma(e,...t){const r=Kt(),a=r.translations||[],n=[...t,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],r.locale[e]];return(i,s)=>{const d=Ll(i,n);return s?d.replace(Il,v=>{const c=v.substring(1,v.length-1);if(s[c]===void 0){const g=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${c}'. The following replacements were passed: '${g}'`)}return s[c]}):d}}var wl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Pl=b.forwardRef((e,t)=>{var{className:r,size:a="medium",title:n,transparent:l=!1,variant:i="neutral",id:s,"data-color":d}=e,v=wl(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:c}=$(),g=Ie(),E=ma("Loader");return u.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${g}`,ref:t,className:c("navds-loader",r,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??xl(i)},_e(v,["children"]),{"data-variant":i}),u.createElement("title",{id:s??`loader-${g}`},n||E("title")),u.createElement("circle",{className:c("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),u.createElement("circle",{className:c("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function xl(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Ml=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ce=b.forwardRef((e,t)=>{var{as:r="button",variant:a="primary",className:n,children:l,size:i="medium",loading:s=!1,disabled:d,icon:v,iconPosition:c="left",onKeyUp:g,"data-color":E}=e,A=Ml(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:y}=$(),V=d||s?_e(A,["href"]):A,_=S=>{S.key===" "&&!d&&!s&&S.currentTarget.click()};return u.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":E??Fl(a),"data-variant":Gl(a)},V,{ref:t,onKeyUp:Ue(g,_),className:y(n,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!v&&!l,"navds-button--disabled":d??s}),disabled:d??s?!0:void 0}),v&&c==="left"&&u.createElement("span",{className:y("navds-button__icon")},v),s&&u.createElement(Pl,{size:i}),l&&u.createElement(Ee,{as:"span",size:i==="medium"?"medium":"small"},l),v&&c==="right"&&u.createElement("span",{className:y("navds-button__icon")},v))});function Fl(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Gl(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var jl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Bl={error:Yn,warning:Fn,info:jn,success:Pn},Hl=b.forwardRef((e,t)=>{var{children:r,className:a,variant:n,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:d=!1,closeButton:v=!1,onClose:c}=e,g=jl(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:E}=$(),A=ma("Alert"),y=Bl[n];return u.createElement("div",Object.assign({},g,{"data-color":Ul(n),"data-variant":n,ref:t,className:E(a,"navds-alert",`navds-alert--${n}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":d,"navds-alert--close-button":v})}),u.createElement(y,{title:A(n),className:E("navds-alert__icon")}),u.createElement(tr,{as:"div",size:l,className:E("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},r),v&&!d&&u.createElement("div",{className:E("navds-alert__button-wrapper")},u.createElement(Ce,{className:E("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:c,type:"button",icon:u.createElement(Ot,{title:["error","warning"].includes(n)?A("closeAlert"):A("closeMessage")})})))});function Ul(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}var Da=typeof document<"u"?b.useLayoutEffect:b.useEffect;const Cl={...sn};let Rr=!1,ql=0;const Vr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+ql++;function Yl(){const[e,t]=b.useState(()=>Rr?Vr():void 0);return Da(()=>{e==null&&t(Vr())},[]),b.useEffect(()=>{Rr=!0},[]),e}const $l=Cl.useId,zl=$l||Yl;function Wl(e){return"data-floating-ui-"+e}const Jl=b.createContext(null),Lr=Wl("portal");function Zl(e){e===void 0&&(e={});const{id:t,root:r}=e,a=zl(),n=Xl(),[l,i]=b.useState(null),s=b.useRef(null);return Da(()=>()=>{l?.remove(),queueMicrotask(()=>{s.current=null})},[l]),Da(()=>{if(!a||s.current)return;const d=t?document.getElementById(t):null;if(!d)return;const v=document.createElement("div");v.id=a,v.setAttribute(Lr,""),d.appendChild(v),s.current=v,i(v)},[t,a]),Da(()=>{if(r===null||!a||s.current)return;let d=r||n?.portalNode;d&&!Vl(d)&&(d=d.current),d=d||document.body;let v=null;t&&(v=document.createElement("div"),v.id=t,d.appendChild(v));const c=document.createElement("div");c.id=a,c.setAttribute(Lr,""),d=v||d,d.appendChild(c),s.current=c,i(c)},[t,r,a,n]),l}const Xl=()=>b.useContext(Jl),lr=()=>{const{cn:e}=$();return u.createElement(pt,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},kt=()=>{const{cn:e}=$();return u.createElement(pt,{title:ma("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var Ql=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const ei=b.forwardRef((e,t)=>{var{className:r,header:a,children:n,open:l,defaultOpen:i=!1,onClick:s,size:d="medium",onOpenChange:v}=e,c=Ql(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:g}=$(),[E,A]=Vn({defaultValue:i,value:l,onChange:v}),y=d==="small"?"small":"medium";return u.createElement("div",{className:g("navds-read-more",`navds-read-more--${d}`,r,{"navds-read-more--open":E}),"data-volume":"low"},u.createElement("button",Object.assign({},c,{ref:t,type:"button",className:g("navds-read-more__button","navds-body-short",{"navds-body-short--small":d==="small"}),onClick:Ue(s,()=>A(V=>!V)),"aria-expanded":E,"data-state":E?"open":"closed"}),u.createElement(bt,{className:g("navds-read-more__expand-icon"),"aria-hidden":!0}),u.createElement("span",null,a)),u.createElement(tr,{as:"div","aria-hidden":!E,className:g("navds-read-more__content",{"navds-read-more__content--closed":!E}),size:y,"data-state":E?"open":"closed"},n))}),Ia=b.createContext(null),va=(e,t)=>{var r,a,n;const{size:l,error:i,errorId:s}=e,d=b.useContext(Ia),v=Ie(),c=(r=e.id)!==null&&r!==void 0?r:`${t}-${v}`,g=s??`${t}-error-${v}`,E=`${t}-description-${v}`,A=d?.disabled||e.disabled,y=(d?.readOnly||e.readOnly)&&!A||void 0,V=!A&&!y&&!!(i||d?.error),_=!A&&!y&&!!i&&typeof i!="boolean",S=Object.assign({},V?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:_,hasError:V,errorId:g,inputDescriptionId:E,size:(a=l??d?.size)!==null&&a!==void 0?a:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:c},S),{"aria-describedby":$e(e["aria-describedby"],{[E]:e.description&&!wa(e.description),[g]:_,[(n=d?.errorId)!==null&&n!==void 0?n:""]:V&&d?.error})||void 0,disabled:A})}};function wa(e,t=!0){if(u.isValidElement(e)){if(e.type===ei)return!0;if(e.props.children&&t)return wa(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>wa(r,t));return!1}const[To,ai]=ar();var ri=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const[Ao,Tt]=ar({errorMessage:"useDateInputContext must be used with DateInputContext"}),At=b.forwardRef((e,t)=>{const{className:r,hideLabel:a=!1,label:n,description:l,variant:i="datepicker",setAnchorRef:s}=e,d=ri(e,["className","hideLabel","label","description","variant","setAnchorRef"]),v=b.useRef(null),c=ai().translate,{cn:g}=$(),E=i==="datepicker",A={prefix:E?"datepicker-input":"monthpicker-input",iconTitle:{open:E?"openDatePicker":"openMonthPicker",close:E?"closeDatePicker":"closeMonthPicker"}},y=Tt(),{inputProps:V,size:_="medium",inputDescriptionId:S,errorId:K,showErrorMsg:O,hasError:D,readOnly:T}=va(e,A.prefix);return u.createElement("div",{className:g(r,"navds-form-field",`navds-form-field--${_}`,"navds-date__field",{"navds-text-field--error":D,"navds-date__field--error":D,"navds-form-field--disabled":!!V.disabled,"navds-text-field--disabled":!!V.disabled,"navds-form-field--readonly":T,"navds-text-field--readonly":T,"navds-date__field--readonly":T})},u.createElement(Ee,{htmlFor:V.id,size:_,className:g("navds-form-field__label",{"navds-sr-only":a})},T&&u.createElement(lr,null),n),!!l&&u.createElement(X,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":a}),id:S,size:_},l),u.createElement("div",{className:g("navds-date__field-wrapper")},u.createElement("input",Object.assign({ref:t},_e(d,["error","errorId","size"]),V,{autoComplete:"off","aria-controls":y?.open?y.ariaId:void 0,readOnly:T,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${_}`),size:E?11:14})),u.createElement("button",{disabled:V.disabled||T,tabIndex:T||y?.open?-1:0,onClick:()=>{y?.onOpen(),s?.(v.current)},type:"button",className:g("navds-date__field-button"),ref:v},u.createElement(In,{title:c(A.iconTitle[y?.open?"close":"open"])}))),u.createElement("div",{className:g("navds-form-field__error"),id:K,"aria-relevant":"additions removals","aria-live":"polite"},O&&u.createElement(ja,{size:_,showIcon:!0},e.error)))});b.forwardRef((e,t)=>u.createElement(At,Object.assign({},e,{ref:t})));b.forwardRef((e,t)=>u.createElement(At,Object.assign({},e,{variant:"monthpicker",ref:t})));var ti=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const ni=b.forwardRef((e,t)=>{var{className:r}=e,a=ti(e,["className"]);const{cn:n}=$();return u.createElement("div",Object.assign({},a,{ref:t,className:n("navds-modal__body",r)}))});var li=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const ii=b.forwardRef((e,t)=>{var{className:r}=e,a=li(e,["className"]);const{cn:n}=$();return u.createElement("div",Object.assign({},a,{ref:t,className:n("navds-modal__footer",r)}))});var si=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Nt=b.forwardRef((e,t)=>{var{children:r,className:a,closeButton:n=!0}=e,l=si(e,["children","className","closeButton"]);const{cn:i}=$(),s=St(),d=ma("global");return u.createElement("div",Object.assign({},l,{ref:t,className:i("navds-modal__header",a)}),s.closeHandler&&n&&u.createElement(Ce,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:v=>{["Enter"," "].includes(v.key)&&v.repeat&&v.preventDefault()},onClick:s.closeHandler,icon:u.createElement(Ot,{title:d("close")})}),r)}),Dr=({clientX:e,clientY:t},{left:r,top:a,right:n,bottom:l})=>!(e<r||t<a||e>n||t>l);function oi(e,t,r){if(!(t&&t.closeButton===!1))return r?()=>{var a;return r()!==!1&&((a=e.current)===null||a===void 0?void 0:a.close())}:()=>{var a;return(a=e.current)===null||a===void 0?void 0:a.close()}}const pa="navds-modal__document-body",Oa="aksel-modal__document-body";function ui(e,t,r){u.useEffect(()=>{if(r||!e.current||!t)return;e.current.open&&document.body.classList.add(Oa,pa);const a=new MutationObserver(()=>{var n;!((n=e.current)===null||n===void 0)&&n.open?document.body.classList.add(Oa,pa):document.body.classList.remove(Oa,pa)});return a.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{a.disconnect(),document.body.classList.remove(Oa,pa)}},[e,t,r])}const He=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Rt(e,t){var r="on"+t.type.toLowerCase();return typeof e[r]=="function"&&e[r](t),e.dispatchEvent(t)}function sa(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Vt(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function di(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1}function za(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Lt(e){var t=["button","input","keygen","select","textarea"],r=t.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var a=e.querySelector(r.join(", "));if(!a&&"attachShadow"in Element.prototype)for(var n=e.querySelectorAll("*"),l=0;l<n.length&&!(n[l].tagName&&n[l].shadowRoot&&(a=Lt(n[l].shadowRoot),a));l++);return a}function Ir(e){return e.isConnected||document.body.contains(e)}function Dt(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var r=U.formSubmitter;if(!r){var a=e.target,n="getRootNode"in a&&a.getRootNode()||document;r=n.activeElement}return!r||r.form!==t?null:r}function ci(e){if(!e.defaultPrevented){var t=e.target,r=U.imagemapUseValue,a=Dt(e);r===null&&a&&(r=a.value);var n=sa(t);if(n){var l=a&&a.getAttribute("formmethod")||t.getAttribute("method");l==="dialog"&&(e.preventDefault(),r!=null?n.close(r):n.close())}}}function It(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",ci,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,a=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),n,l=function(i){if(i.target===e){var s="DOMNodeRemoved";r|=i.type.substr(0,s.length)===s,window.clearTimeout(n),n=window.setTimeout(a,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,l)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}It.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Ir(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),U.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Lt(this.dialog_)),Vt(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Ir(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!U.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,U.needsCentering(this.dialog_)?(U.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Rt(this.dialog_,t)}};var U={};U.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,r=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,r)+"px"};U.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var r=document.styleSheets[t],a=null;try{a=r.cssRules}catch{}if(a)for(var n=0;n<a.length;++n){var l=a[n],i=null;try{i=document.querySelectorAll(l.selectorText)}catch{}if(!(!i||!di(i,e))){var s=l.style.getPropertyValue("top"),d=l.style.getPropertyValue("bottom");if(s&&s!=="auto"||d&&d!=="auto")return!0}}}return!1};U.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!U.isInlinePositionSetByStylesheet(e)};U.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new It(e)};U.registerDialog=function(e){e.showModal||U.forceRegisterDialog(e)};U.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var r=[];t.forEach(function(a){for(var n=0,l;l=a.removedNodes[n];++n)l instanceof Element&&(l.localName==="dialog"&&r.push(l),r=r.concat(l.querySelectorAll("dialog")))}),r.length&&e(r)}))};U.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};U.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};U.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,r;r=this.pendingDialogStack[t];++t)r.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var a=this.pendingDialogStack[0];if(a){var n=a.dialog.parentNode||document.body;n.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};U.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=sa(e);){for(var t=0,r;r=this.pendingDialogStack[t];++t)if(r.dialog===e)return t===0;e=e.parentElement}return!1};U.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Vt(t),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],a=r.dialog,n=a.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};U.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&Rt(r.dialog,t)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};U.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};U.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};U.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};He&&(U.dm=new U.DialogManager,U.formSubmitter=null,U.imagemapUseValue=null);if(He){var wr=document.createElement("form");if(wr.setAttribute("method","dialog"),wr.method!=="dialog"){var Fe=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Fe){var mi=Fe.get;Fe.get=function(){return za(this)?"dialog":mi.call(this)};var vi=Fe.set;Fe.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):vi.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Fe)}}document.addEventListener("click",function(e){if(U.formSubmitter=null,U.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var r=e.composedPath();t=r.shift()||t}if(!(!t||!za(t.form))){var a=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!a){if(!(t.localName==="input"&&t.type==="image"))return;U.imagemapUseValue=e.offsetX+","+e.offsetY}var n=sa(t);n&&(U.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,r=sa(t);if(!r){var a=Dt(e),n=a&&a.getAttribute("formmethod")||t.getAttribute("method");n==="dialog"&&e.preventDefault()}});var fi=HTMLFormElement.prototype.submit,gi=function(){if(!za(this))return fi.call(this);var e=sa(this);e&&e.close()};HTMLFormElement.prototype.submit=gi}var Ei=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const da=b.forwardRef((e,t)=>{var r,a,{header:n,children:l,open:i,onBeforeClose:s,onCancel:d,closeOnBackdropClick:v,width:c,placement:g,portal:E,className:A,"aria-labelledby":y,style:V,onClick:_,onMouseDown:S}=e,K=Ei(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:O}=$(),D=b.useRef(O("navds-modal--polyfilled")),T=b.useRef(null),C=vt(T,t),M=Ie(),H=(r=Kt())===null||r===void 0?void 0:r.rootElement,P=Zl({root:H}),G=Tt(!1),F=St(!1)!==void 0;F&&!G&&console.error("Modals should not be nested"),b.useEffect(()=>{He&&T.current&&P&&(U.registerDialog(T.current),T.current.classList.add(D.current)),T.current&&P&&(T.current.autofocus=!0)},[P]),b.useEffect(()=>{T.current&&P&&i!==void 0&&(i&&!T.current.open?T.current.showModal():!i&&T.current.open&&T.current.close())},[P,i]),ui(T,P,F);const I=typeof c=="string"&&["small","medium"].includes(c),N=O("navds-modal",A,{[D.current]:He,"navds-modal--autowidth":!c,[`navds-modal--${c}`]:I,"navds-modal--top":g==="top"&&!He}),x=Object.assign(Object.assign({},V),I?{}:{width:c}),j=b.useRef({clientX:0,clientY:0}),B=ve=>{j.current=ve},Q=v&&!He,ie=ve=>{if(ve.target!==T.current)return;const Oe=T.current.getBoundingClientRect();Dr(j.current,Oe)||Dr(ve,Oe)||s!==void 0&&s()===!1||T.current.close()},se=ve=>{s&&s()===!1&&ve.preventDefault()},he=!y&&!K["aria-label"]&&n?M:y,te=u.createElement("dialog",Object.assign({},K,{ref:C,className:N,style:x,onCancel:Ue(d,se),onClick:Q?Ue(_,ie):_,onMouseDown:Q?Ue(S,B):S,"aria-labelledby":he}),u.createElement($n,{closeHandler:oi(T,n,s),ref:T},n&&u.createElement(Nt,null,n.label&&u.createElement(Kn,{className:O("navds-modal__label")},n.label),u.createElement(nr,{size:(a=n.size)!==null&&a!==void 0?a:"medium",level:"1",id:M},n.icon&&u.createElement("span",{className:O("navds-modal__header-icon")},n.icon),n.heading)),l));return E?P?_t.createPortal(te,P):null:te});da.Header=Nt;da.Body=ni;da.Footer=ii;var _i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const hi=b.forwardRef((e,t)=>{const{inputProps:r,errorId:a,showErrorMsg:n,hasError:l,size:i,inputDescriptionId:s,readOnly:d}=va(e,"select"),{children:v,label:c,className:g,description:E,htmlSize:A,hideLabel:y=!1,style:V}=e,_=_i(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:S}=$(),K={onMouseDown:O=>{d&&(O.preventDefault(),O.target.focus())},onKeyDown:O=>{d&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(O.key)&&O.preventDefault()}};return u.createElement("div",{className:S(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":d,"navds-select--error":l,"navds-select--readonly":d})},u.createElement(Ee,{htmlFor:r.id,size:i,className:S("navds-form-field__label",{"navds-sr-only":y})},d&&u.createElement(kt,null),c),!!E&&u.createElement(X,{className:S("navds-form-field__description",{"navds-sr-only":y}),id:s,size:i,as:"div"},E),u.createElement("div",{className:S("navds-select__container"),style:V},u.createElement("select",Object.assign({},_e(_,["error","errorId","size","readOnly"]),r,K,{ref:t,className:S("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:A}),v),u.createElement(bt,{className:S("navds-select__chevron"),"aria-hidden":!0})),u.createElement("div",{className:S("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},n&&u.createElement(ja,{size:i,showIcon:!0},e.error)))});function le(e,t,r,a){return a?typeof a=="string"?{[`--__${e}c-${t}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([n,l])=>[`--__${e}c-${t}-${r}-${n}`,l])):{}}const yi={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Pr=(e,t,r,a,n,l)=>t.split(" ").map((i,s,d)=>{var v;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let c=`var(--${l}-${r}-${i})`;if(a.includes(i))c=i==="px"?"1px":i;else if(i.startsWith("space"))c=`var(--${l}-${i})`;else{const g=`--${l}-spacing-${i}`;c=`var(${(v=yi[g])!==null&&v!==void 0?v:g})`}return n?i==="0"?"0":`calc(-1 * ${c})`:c}).join(" ");function ge(e,t,r,a,n,l=!1,i=[]){if(!n)return{};if(typeof n=="string")return{[`--__${e}c-${t}-${r}-xs`]:Pr(r,n,a,i,l,e)};const s={};return Object.entries(n).forEach(([d,v])=>{s[`--__${e}c-${t}-${r}-${d}`]=Pr(r,v,a,i,l,e)}),s}const bi=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],pi=({children:e,className:t,padding:r,paddingInline:a,paddingBlock:n,margin:l,marginInline:i,marginBlock:s,width:d,minWidth:v,maxWidth:c,height:g,minHeight:E,maxHeight:A,position:y,inset:V,top:_,right:S,left:K,bottom:O,overflow:D,overflowX:T,overflowY:C,flexBasis:M,flexGrow:H,flexShrink:P,gridColumn:G})=>{const F=Ga(!1),{cn:I}=$(),N=F?.isDarkside?"ax":"a",x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ge(N,"r","p","spacing",r)),ge(N,"r","pi","spacing",a)),ge(N,"r","pb","spacing",n)),ge(N,"r","m","spacing",l)),ge(N,"r","mi","spacing",i)),ge(N,"r","mb","spacing",s)),le(N,"r","w",d)),le(N,"r","minw",v)),le(N,"r","maxw",c)),le(N,"r","h",g)),le(N,"r","minh",E)),le(N,"r","maxh",A)),le(N,"r","position",y)),ge(N,"r","inset","spacing",V)),ge(N,"r","top","spacing",_)),ge(N,"r","right","spacing",S)),ge(N,"r","bottom","spacing",O)),ge(N,"r","left","spacing",K)),le(N,"r","overflow",D)),le(N,"r","overflowx",T)),le(N,"r","overflowy",C)),le(N,"r","flex-basis",M)),le(N,"r","flex-grow",H)),le(N,"r","flex-shrink",P)),le(N,"r","grid-column",G));return u.createElement(ft,{className:I({className:t,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":n,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":d,"navds-r-minw":v,"navds-r-maxw":c,"navds-r-h":g,"navds-r-minh":E,"navds-r-maxh":A,"navds-r-position":y,"navds-r-inset":V,"navds-r-top":_,"navds-r-right":S,"navds-r-bottom":O,"navds-r-left":K,"navds-r-overflow":D,"navds-r-overflowx":T,"navds-r-overflowy":C,"navds-r-flex-basis":M,"navds-r-flex-grow":H,"navds-r-flex-shrink":P,"navds-r-grid-column":G}),style:x},e)};var Oi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const wt=b.forwardRef((e,t)=>{var{children:r,className:a,as:n="div",align:l,justify:i,wrap:s=!0,gap:d,style:v,direction:c="row",asChild:g}=e,E=Oi(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const A=Ga(!1),y=A?.isDarkside?"ax":"a",{cn:V}=$(),_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},v),ge(y,"stack","gap","spacing",d)),le(y,"stack","direction",c)),le(y,"stack","align",l)),le(y,"stack","justify",i)),S=g?ft:n;return u.createElement(pi,Object.assign({},E),u.createElement(S,Object.assign({},_e(E,bi),{ref:t,style:_,className:V("navds-stack",a,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":d,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":c,"navds-stack-wrap":s})}),r))});var Si=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const qe=b.forwardRef((e,t)=>{var{as:r="div"}=e,a=Si(e,["as"]);return u.createElement(wt,Object.assign({as:r},a,{ref:t,direction:"row"}))});var Ki=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const ce=b.forwardRef((e,t)=>{var{as:r="div"}=e,a=Ki(e,["as"]);return u.createElement(wt,Object.assign({as:r},a,{ref:t,direction:"column",wrap:!1}))});var ki=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ti=b.forwardRef((e,t)=>{var{as:r="a",className:a,underline:n=!0,variant:l,inlineText:i=!1,"data-color":s}=e,d=ki(e,["as","className","underline","variant","inlineText","data-color"]);const v=Ga(!1),{cn:c}=$();let g;return v?.isDarkside?g=l:g=l??"action",u.createElement(r,Object.assign({"data-color":s??Ai(g),"data-variant":g},d,{ref:t,className:c("navds-link",a,{[`navds-link--${g}`]:g,"navds-link--remove-underline":!n,"navds-link--inline-text":i})}))});function Ai(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var Ni=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ri=b.forwardRef((e,t)=>{var{children:r,className:a,variant:n,size:l="medium",icon:i,"data-color":s}=e,d=Ni(e,["children","className","variant","size","icon","data-color"]);const{cn:v}=$(),c=n?.endsWith("-filled")&&"strong",g=n?.endsWith("-moderate")&&"moderate";return u.createElement(X,Object.assign({"data-color":s??Vi(n),"data-variant":c||g||"outline"},d,{ref:t,as:"span",size:l==="medium"?"medium":"small",className:v("navds-tag",a,`navds-tag--${n}`,`navds-tag--${l}`)}),i&&u.createElement("span",{className:v("navds-tag__icon--left")},i),r)});function Vi(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const Li=(e,t)=>{const r=va(e,"fieldset");return Object.assign(Object.assign({},r),{inputProps:{"aria-labelledby":e["aria-labelledby"]||$e(t,{[r.inputDescriptionId]:e.description&&!wa(e.description)})}})};var Di=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ii=b.forwardRef((e,t)=>{var r,a,n;const l=Ie(),{inputProps:i,errorId:s,showErrorMsg:d,hasError:v,size:c,readOnly:g,inputDescriptionId:E}=Li(e,l),{cn:A}=$(),y=b.useContext(Ia),{children:V,className:_,errorPropagation:S=!0,legend:K,description:O,hideLegend:D,nativeReadOnly:T=!0}=e,C=Di(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return u.createElement(Ia.Provider,{value:{error:S?(r=e.error)!==null&&r!==void 0?r:y?.error:void 0,errorId:$e({[s]:d,[(a=y?.errorId)!==null&&a!==void 0?a:""]:!!y?.error}),size:c,disabled:(n=e.disabled)!==null&&n!==void 0?n:!1,readOnly:g}},u.createElement("fieldset",Object.assign({},_e(C,["errorId","error","size","readOnly"]),i,{ref:t,className:A(_,"navds-fieldset",`navds-fieldset--${c}`,{"navds-fieldset--error":v,"navds-fieldset--readonly":g})}),u.createElement(Ee,{id:l,size:c,as:"legend",className:A("navds-fieldset__legend",{"navds-sr-only":!!D})},g&&(T?u.createElement(lr,null):u.createElement(kt,null)),K),!!O&&u.createElement(X,{className:A("navds-fieldset__description",{"navds-sr-only":!!D}),id:E,size:c??"medium",as:"div"},e.description),V,u.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:A("navds-fieldset__error")},d&&u.createElement(ja,{size:c,showIcon:!0},e.error))))});var wi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Pt=u.createContext(null),Pi=b.forwardRef((e,t)=>{var r,a,{children:n,className:l,name:i,defaultValue:s,value:d,onChange:v=()=>{},required:c,readOnly:g}=e,E=wi(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:A}=$(),y=b.useContext(Ia),V=Ie();return u.createElement(Ii,Object.assign({},E,{readOnly:g,ref:t,className:A(l,"navds-radio-group",`navds-radio-group--${(a=(r=E.size)!==null&&r!==void 0?r:y?.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),u.createElement(Pt.Provider,{value:{name:i??`radioGroupName-${V}`,defaultValue:s,value:d,onChange:v,required:c}},u.createElement("div",{className:A("navds-radio-buttons")},n)))});var xi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Mi=e=>{const t=b.useContext(Pt),r=va(_e(e,["description"]),"radio"),{inputProps:a,readOnly:n}=r,l=xi(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:n,inputProps:Object.assign(Object.assign({},a),{name:t?.name,defaultChecked:t?.defaultValue===void 0?void 0:t?.defaultValue===e.value,checked:t?.value===void 0?void 0:t?.value===e.value,onChange:i=>{var s,d;n||((s=e.onChange)===null||s===void 0||s.call(e,i),(d=t?.onChange)===null||d===void 0||d.call(t,e.value))},onClick:i=>{var s;if(n){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:t?.required,type:"radio"})})},ra=b.forwardRef((e,t)=>{const{cn:r}=$(),{inputProps:a,size:n,hasError:l,readOnly:i}=Mi(e),s=Ie(),d=Ga(!1);return d?.isDarkside?u.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${n}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},u.createElement("input",Object.assign({},_e(e,["children","size","description","readOnly"]),_e(a,["aria-invalid","aria-describedby"]),{"aria-describedby":$e(a["aria-describedby"],{[s]:e.description})||void 0,className:r("navds-radio__input"),ref:t})),u.createElement(X,{as:"label",htmlFor:a.id,className:r("navds-radio__label"),size:n},e.children),e.description&&u.createElement(X,{id:s,size:n,className:r("navds-form-field__subdescription navds-radio__description")},e.description)):u.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${n}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},u.createElement("input",Object.assign({},_e(e,["children","size","description","readOnly"]),_e(a,["aria-invalid"]),{className:r("navds-radio__input"),ref:t})),u.createElement("label",{htmlFor:a.id,className:r("navds-radio__label")},u.createElement("span",{className:r("navds-radio__content")},u.createElement(X,{as:"span",size:n},e.children),e.description&&u.createElement(X,{as:"span",size:n,className:r("navds-form-field__subdescription navds-radio__description")},e.description))))});var Fi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const xr=(e,t,r)=>{const{outerHeightStyle:a,overflow:n}=t;return r.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==n)?(r.current+=1,t):e},Mr=e=>(e?.ownerDocument||document).defaultView||window;function Sa(e){return parseInt(e,10)||0}const Gi=b.forwardRef((e,t)=>{var r,a,{className:n,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:d,style:v,value:c}=e,g=Fi(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:E}=b.useRef(c!=null),A=b.useRef(null),y=vt(A,t),V=b.useRef(null),_=b.useRef(0),[S,K]=b.useState({outerHeightStyle:0}),O=u.useCallback(()=>{const M=A.current,P=Mr(M).getComputedStyle(M);if(P.width==="0px")return{outerHeightStyle:0};const G=V.current;G.style.width=P.width,G.value=M.value||g.placeholder||"x",G.value.slice(-1)===`
`&&(G.value+=" ");const F=P.boxSizing,I=Sa(P.paddingBottom)+Sa(P.paddingTop),N=Sa(P.borderBottomWidth)+Sa(P.borderTopWidth),x=G.scrollHeight-I;G.value="x";const j=G.scrollHeight-I;let B=x;s&&(B=Math.max(Number(s)*j,B)),i&&(B=Math.min(Number(i)*j,B)),B=Math.max(B,j);const Q=B+(F==="border-box"?I+N:0),ie=Math.abs(B-x)<=1;return{outerHeightStyle:Q,overflow:ie}},[i,s,g.placeholder]),D=()=>{const M=O();Fr(M)||K(H=>xr(H,M,_))};Or(()=>{const M=()=>{const I=O();Fr(I)||yn.flushSync(()=>{K(N=>xr(N,I,_))})},H=yt(()=>{var I,N,x;if(_.current=0,!((I=A.current)===null||I===void 0)&&I.style.height||!((N=A.current)===null||N===void 0)&&N.style.width){((x=A.current)===null||x===void 0?void 0:x.style.overflow)==="hidden"&&K(j=>Object.assign(Object.assign({},j),{overflow:!1}));return}M()},166,!0),P=A.current,G=Mr(P);G.addEventListener("resize",H);let F;return typeof ResizeObserver<"u"&&(F=new ResizeObserver(H),F.observe(P)),()=>{H.clear(),G.removeEventListener("resize",H),F&&F.disconnect()}},[O]),Or(()=>{D()}),b.useEffect(()=>{_.current=0},[c]);const T=M=>{_.current=0,E||D(),l&&l(M)},C=Object.assign({"--__ac-textarea-height":S.outerHeightStyle+"px","--__axc-textarea-height":S.outerHeightStyle+"px",overflow:S.overflow&&!d&&!(!((r=A.current)===null||r===void 0)&&r.style.height)&&!(!((a=A.current)===null||a===void 0)&&a.style.width)?"hidden":void 0},v);return u.createElement(u.Fragment,null,u.createElement("textarea",Object.assign({value:c,onChange:T,ref:y,rows:s,style:C},g,{className:n})),u.createElement("textarea",{"aria-hidden":!0,className:n,readOnly:!0,ref:V,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},v)}))});function Fr(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const ji=({maxLengthId:e,maxLength:t,currentLength:r,size:a,i18n:n})=>{const{cn:l}=$(),i=ma("Textarea",{charsLeft:n?.counterLeft?`{chars} ${n.counterLeft}`:void 0,charsTooMany:n?.counterTooMuch?`{chars} ${n.counterTooMuch}`:void 0}),s=t-r,[d,v]=b.useState(s);return b.useEffect(()=>{const c=yt(()=>{v(s)},2e3);return c(),()=>{c.clear()}},[s]),u.createElement(u.Fragment,null,u.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:t})),s<20&&u.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},Gr(d,i)),u.createElement(X,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:a},Gr(s,i)))},Gr=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Bi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Hi=b.forwardRef((e,t)=>{var r,a,n;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:d,size:v,inputDescriptionId:c}=va(e,"textarea"),{label:g,className:E,description:A,maxLength:y,hideLabel:V=!1,resize:_,UNSAFE_autoScrollbar:S,i18n:K,readOnly:O}=e,D=Bi(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:T}=$(),C=Ie(),M=y!==void 0&&y>0,[H,P]=b.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),G=()=>{let I=D?.minRows?D?.minRows:3;return v==="small"&&(I=D?.minRows?D?.minRows:2),I},F=$e(l["aria-describedby"],{[C??""]:M});return u.createElement("div",{className:T(E,"navds-form-field",`navds-form-field--${v}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":O,"navds-textarea--readonly":O,"navds-textarea--error":d,"navds-textarea--autoscrollbar":S,[`navds-textarea--resize-${_===!0?"both":_}`]:_})},u.createElement(Ee,{htmlFor:l.id,size:v,className:T("navds-form-field__label",{"navds-sr-only":V})},O&&u.createElement(lr,null),g),!!A&&u.createElement(X,{className:T("navds-form-field__description",{"navds-sr-only":V}),id:c,size:v,as:"div"},A),u.createElement(Gi,Object.assign({},_e(D,["error","errorId","size"]),l,{onChange:Ue(e.onChange,e.value===void 0?I=>P(I.target.value):void 0),minRows:G(),autoScrollbar:S,ref:t,readOnly:O,className:T("navds-textarea__input","navds-body-short",`navds-body-short--${v??"medium"}`)},F?{"aria-describedby":F}:{})),M&&!O&&!l.disabled&&u.createElement(ji,{maxLengthId:C,maxLength:y,currentLength:(n=(a=e.value)===null||a===void 0?void 0:a.length)!==null&&n!==void 0?n:H.length,size:v,i18n:K}),u.createElement("div",{className:T("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&u.createElement(ja,{size:v,showIcon:!0},e.error)))});var fa=e=>e.type==="checkbox",De=e=>e instanceof Date,oe=e=>e==null;const xt=e=>typeof e=="object";var ae=e=>!oe(e)&&!Array.isArray(e)&&xt(e)&&!De(e),Mt=e=>ae(e)&&e.target?fa(e.target)?e.target.checked:e.target.value:e,Ui=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ft=(e,t)=>e.has(Ui(t)),Ci=e=>{const t=e.constructor&&e.constructor.prototype;return ae(t)&&t.hasOwnProperty("isPrototypeOf")},ir=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function re(e){let t;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(!(ir&&(e instanceof Blob||a))&&(r||ae(e)))if(t=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!Ci(e))t=e;else for(const n in e)e.hasOwnProperty(n)&&(t[n]=re(e[n]));else return e;return t}var Ba=e=>/^\w*$/.test(e),Z=e=>e===void 0,sr=e=>Array.isArray(e)?e.filter(Boolean):[],or=e=>sr(e.replace(/["|']|\]/g,"").split(/\.|\[/)),R=(e,t,r)=>{if(!t||!ae(e))return r;const a=(Ba(t)?[t]:or(t)).reduce((n,l)=>oe(n)?n:n[l],e);return Z(a)||a===e?Z(e[t])?r:e[t]:a},de=e=>typeof e=="boolean",J=(e,t,r)=>{let a=-1;const n=Ba(t)?[t]:or(t),l=n.length,i=l-1;for(;++a<l;){const s=n[a];let d=r;if(a!==i){const v=e[s];d=ae(v)||Array.isArray(v)?v:isNaN(+n[a+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=d,e=e[s]}};const Pa={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ye={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ur=u.createContext(null);ur.displayName="HookFormContext";const Ae=()=>u.useContext(ur),qi=e=>{const{children:t,...r}=e;return u.createElement(ur.Provider,{value:r},t)};var Gt=(e,t,r,a=!0)=>{const n={defaultValues:t._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const i=l;return t._proxyFormState[i]!==ye.all&&(t._proxyFormState[i]=!a||ye.all),r&&(r[i]=!0),e[i]}});return n};const dr=typeof window<"u"?u.useLayoutEffect:u.useEffect;function Yi(e){const t=Ae(),{control:r=t.control,disabled:a,name:n,exact:l}=e||{},[i,s]=u.useState(r._formState),d=u.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return dr(()=>r._subscribe({name:n,formState:d.current,exact:l,callback:v=>{!a&&s({...r._formState,...v})}}),[n,a,l]),u.useEffect(()=>{d.current.isValid&&r._setValid(!0)},[r]),u.useMemo(()=>Gt(i,r,d.current,!1),[i,r])}var me=e=>typeof e=="string",jt=(e,t,r,a,n)=>me(e)?(a&&t.watch.add(e),R(r,e,n)):Array.isArray(e)?e.map(l=>(a&&t.watch.add(l),R(r,l))):(a&&(t.watchAll=!0),r),Za=e=>oe(e)||!xt(e);function Ke(e,t,r=new WeakSet){if(Za(e)||Za(t))return e===t;if(De(e)&&De(t))return e.getTime()===t.getTime();const a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;if(r.has(e)||r.has(t))return!0;r.add(e),r.add(t);for(const l of a){const i=e[l];if(!n.includes(l))return!1;if(l!=="ref"){const s=t[l];if(De(i)&&De(s)||ae(i)&&ae(s)||Array.isArray(i)&&Array.isArray(s)?!Ke(i,s,r):i!==s)return!1}}return!0}function $i(e){const t=Ae(),{control:r=t.control,name:a,defaultValue:n,disabled:l,exact:i,compute:s}=e||{},d=u.useRef(n),v=u.useRef(s),c=u.useRef(void 0);v.current=s;const g=u.useMemo(()=>r._getWatch(a,d.current),[r,a]),[E,A]=u.useState(v.current?v.current(g):g);return dr(()=>r._subscribe({name:a,formState:{values:!0},exact:i,callback:y=>{if(!l){const V=jt(a,r._names,y.values||r._formValues,!1,d.current);if(v.current){const _=v.current(V);Ke(_,c.current)||(A(_),c.current=_)}else A(V)}}}),[r,l,a,i]),u.useEffect(()=>r._removeUnmounted()),E}function cr(e){const t=Ae(),{name:r,disabled:a,control:n=t.control,shouldUnregister:l,defaultValue:i}=e,s=Ft(n._names.array,r),d=u.useMemo(()=>R(n._formValues,r,R(n._defaultValues,r,i)),[n,r,i]),v=$i({control:n,name:r,defaultValue:d,exact:!0}),c=Yi({control:n,name:r,exact:!0}),g=u.useRef(e),E=u.useRef(void 0),A=u.useRef(n.register(r,{...e.rules,value:v,...de(e.disabled)?{disabled:e.disabled}:{}}));g.current=e;const y=u.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!R(c.errors,r)},isDirty:{enumerable:!0,get:()=>!!R(c.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!R(c.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!R(c.validatingFields,r)},error:{enumerable:!0,get:()=>R(c.errors,r)}}),[c,r]),V=u.useCallback(O=>A.current.onChange({target:{value:Mt(O),name:r},type:Pa.CHANGE}),[r]),_=u.useCallback(()=>A.current.onBlur({target:{value:R(n._formValues,r),name:r},type:Pa.BLUR}),[r,n._formValues]),S=u.useCallback(O=>{const D=R(n._fields,r);D&&O&&(D._f.ref={focus:()=>O.focus&&O.focus(),select:()=>O.select&&O.select(),setCustomValidity:T=>O.setCustomValidity(T),reportValidity:()=>O.reportValidity()})},[n._fields,r]),K=u.useMemo(()=>({name:r,value:v,...de(a)||c.disabled?{disabled:c.disabled||a}:{},onChange:V,onBlur:_,ref:S}),[r,a,c.disabled,V,_,S,v]);return u.useEffect(()=>{const O=n._options.shouldUnregister||l,D=E.current;D&&D!==r&&!s&&n.unregister(D),n.register(r,{...g.current.rules,...de(g.current.disabled)?{disabled:g.current.disabled}:{}});const T=(C,M)=>{const H=R(n._fields,C);H&&H._f&&(H._f.mount=M)};if(T(r,!0),O){const C=re(R(n._options.defaultValues,r));J(n._defaultValues,r,C),Z(R(n._formValues,r))&&J(n._formValues,r,C)}return!s&&n.register(r),E.current=r,()=>{(s?O&&!n._state.action:O)?n.unregister(r):T(r,!1)}},[r,n,s,l]),u.useEffect(()=>{n._setDisabledField({disabled:a,name:r})},[a,r,n]),u.useMemo(()=>({field:K,formState:c,fieldState:y}),[K,c,y])}var zi=(e,t,r,a,n)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:n||!0}}:{},oa=e=>Array.isArray(e)?e:[e],jr=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}};function Bt(e,t){const r={};for(const a in e)if(e.hasOwnProperty(a)){const n=e[a],l=t[a];if(n&&ae(n)&&l){const i=Bt(n,l);ae(i)&&(r[a]=i)}else e[a]&&(r[a]=l)}return r}var ue=e=>ae(e)&&!Object.keys(e).length,mr=e=>e.type==="file",be=e=>typeof e=="function",xa=e=>{if(!ir)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ht=e=>e.type==="select-multiple",vr=e=>e.type==="radio",Wi=e=>vr(e)||fa(e),Wa=e=>xa(e)&&e.isConnected;function Ji(e,t){const r=t.slice(0,-1).length;let a=0;for(;a<r;)e=Z(e)?a++:e[t[a++]];return e}function Zi(e){for(const t in e)if(e.hasOwnProperty(t)&&!Z(e[t]))return!1;return!0}function ee(e,t){const r=Array.isArray(t)?t:Ba(t)?[t]:or(t),a=r.length===1?e:Ji(e,r),n=r.length-1,l=r[n];return a&&delete a[l],n!==0&&(ae(a)&&ue(a)||Array.isArray(a)&&Zi(a))&&ee(e,r.slice(0,-1)),e}var Xi=e=>{for(const t in e)if(be(e[t]))return!0;return!1};function Ut(e){return Array.isArray(e)||ae(e)&&!Xi(e)}function Xa(e,t={}){for(const r in e)Ut(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Xa(e[r],t[r])):oe(e[r])||(t[r]=!0);return t}function Be(e,t,r){r||(r=Xa(t));for(const a in e)Ut(e[a])?Z(t)||Za(r[a])?r[a]=Xa(e[a],Array.isArray(e[a])?[]:{}):Be(e[a],oe(t)?{}:t[a],r[a]):r[a]=!Ke(e[a],t[a]);return r}const Br={value:!1,isValid:!1},Hr={value:!0,isValid:!0};var Ct=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Z(e[0].attributes.value)?Z(e[0].value)||e[0].value===""?Hr:{value:e[0].value,isValid:!0}:Hr:Br}return Br},qt=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>Z(e)?e:t?e===""?NaN:e&&+e:r&&me(e)?new Date(e):a?a(e):e;const Ur={isValid:!1,value:null};var Yt=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,Ur):Ur;function Cr(e){const t=e.ref;return mr(t)?t.files:vr(t)?Yt(e.refs).value:Ht(t)?[...t.selectedOptions].map(({value:r})=>r):fa(t)?Ct(e.refs).value:qt(Z(t.value)?e.ref.value:t.value,e)}var Qi=(e,t,r,a)=>{const n={};for(const l of e){const i=R(t,l);i&&J(n,l,i._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:a}},Ma=e=>e instanceof RegExp,ta=e=>Z(e)?e:Ma(e)?e.source:ae(e)?Ma(e.value)?e.value.source:e.value:e,qr=e=>({isOnSubmit:!e||e===ye.onSubmit,isOnBlur:e===ye.onBlur,isOnChange:e===ye.onChange,isOnAll:e===ye.all,isOnTouch:e===ye.onTouched});const Yr="AsyncFunction";var es=e=>!!e&&!!e.validate&&!!(be(e.validate)&&e.validate.constructor.name===Yr||ae(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Yr)),as=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),$r=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ua=(e,t,r,a)=>{for(const n of r||Object.keys(e)){const l=R(e,n);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&t(i.refs[0],n)&&!a)return!0;if(i.ref&&t(i.ref,i.name)&&!a)return!0;if(ua(s,t))break}else if(ae(s)&&ua(s,t))break}}};function zr(e,t,r){const a=R(e,r);if(a||Ba(r))return{error:a,name:r};const n=r.split(".");for(;n.length;){const l=n.join("."),i=R(t,l),s=R(e,l);if(i&&!Array.isArray(i)&&r!==l)return{name:r};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};n.pop()}return{name:r}}var rs=(e,t,r,a)=>{r(e);const{name:n,...l}=e;return ue(l)||Object.keys(l).length>=Object.keys(t).length||Object.keys(l).find(i=>t[i]===(!a||ye.all))},ts=(e,t,r)=>!e||!t||e===t||oa(e).some(a=>a&&(r?a===t:a.startsWith(t)||t.startsWith(a))),ns=(e,t,r,a,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(t||e):(r?a.isOnBlur:n.isOnBlur)?!e:(r?a.isOnChange:n.isOnChange)?e:!0,ls=(e,t)=>!sr(R(e,t)).length&&ee(e,t),is=(e,t,r)=>{const a=oa(R(e,r));return J(a,"root",t[r]),J(e,r,a),e};function Wr(e,t,r="validate"){if(me(e)||Array.isArray(e)&&e.every(me)||de(e)&&!e)return{type:r,message:me(e)?e:"",ref:t}}var Ge=e=>ae(e)&&!Ma(e)?e:{value:e,message:""},Jr=async(e,t,r,a,n,l)=>{const{ref:i,refs:s,required:d,maxLength:v,minLength:c,min:g,max:E,pattern:A,validate:y,name:V,valueAsNumber:_,mount:S}=e._f,K=R(r,V);if(!S||t.has(V))return{};const O=s?s[0]:i,D=I=>{n&&O.reportValidity&&(O.setCustomValidity(de(I)?"":I||""),O.reportValidity())},T={},C=vr(i),M=fa(i),H=C||M,P=(_||mr(i))&&Z(i.value)&&Z(K)||xa(i)&&i.value===""||K===""||Array.isArray(K)&&!K.length,G=zi.bind(null,V,a,T),F=(I,N,x,j=Se.maxLength,B=Se.minLength)=>{const Q=I?N:x;T[V]={type:I?j:B,message:Q,ref:i,...G(I?j:B,Q)}};if(l?!Array.isArray(K)||!K.length:d&&(!H&&(P||oe(K))||de(K)&&!K||M&&!Ct(s).isValid||C&&!Yt(s).isValid)){const{value:I,message:N}=me(d)?{value:!!d,message:d}:Ge(d);if(I&&(T[V]={type:Se.required,message:N,ref:O,...G(Se.required,N)},!a))return D(N),T}if(!P&&(!oe(g)||!oe(E))){let I,N;const x=Ge(E),j=Ge(g);if(!oe(K)&&!isNaN(K)){const B=i.valueAsNumber||K&&+K;oe(x.value)||(I=B>x.value),oe(j.value)||(N=B<j.value)}else{const B=i.valueAsDate||new Date(K),Q=he=>new Date(new Date().toDateString()+" "+he),ie=i.type=="time",se=i.type=="week";me(x.value)&&K&&(I=ie?Q(K)>Q(x.value):se?K>x.value:B>new Date(x.value)),me(j.value)&&K&&(N=ie?Q(K)<Q(j.value):se?K<j.value:B<new Date(j.value))}if((I||N)&&(F(!!I,x.message,j.message,Se.max,Se.min),!a))return D(T[V].message),T}if((v||c)&&!P&&(me(K)||l&&Array.isArray(K))){const I=Ge(v),N=Ge(c),x=!oe(I.value)&&K.length>+I.value,j=!oe(N.value)&&K.length<+N.value;if((x||j)&&(F(x,I.message,N.message),!a))return D(T[V].message),T}if(A&&!P&&me(K)){const{value:I,message:N}=Ge(A);if(Ma(I)&&!K.match(I)&&(T[V]={type:Se.pattern,message:N,ref:i,...G(Se.pattern,N)},!a))return D(N),T}if(y){if(be(y)){const I=await y(K,r),N=Wr(I,O);if(N&&(T[V]={...N,...G(Se.validate,N.message)},!a))return D(N.message),T}else if(ae(y)){let I={};for(const N in y){if(!ue(I)&&!a)break;const x=Wr(await y[N](K,r),O,N);x&&(I={...x,...G(N,x.message)},D(x.message),a&&(T[V]=I))}if(!ue(I)&&(T[V]={ref:O,...I},!a))return T}}return D(!0),T};const ss={mode:ye.onSubmit,reValidateMode:ye.onChange,shouldFocusError:!0};function os(e={}){let t={...ss,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:be(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},a={},n=ae(t.defaultValues)||ae(t.values)?re(t.defaultValues||t.values)||{}:{},l=t.shouldUnregister?{}:re(n),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,v=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...c};const E={array:jr(),state:jr()},A=t.criteriaMode===ye.all,y=o=>m=>{clearTimeout(v),v=setTimeout(o,m)},V=async o=>{if(!t.disabled&&(c.isValid||g.isValid||o)){const m=t.resolver?ue((await M()).errors):await P(a,!0);m!==r.isValid&&E.state.next({isValid:m})}},_=(o,m)=>{!t.disabled&&(c.isValidating||c.validatingFields||g.isValidating||g.validatingFields)&&((o||Array.from(s.mount)).forEach(f=>{f&&(m?J(r.validatingFields,f,m):ee(r.validatingFields,f))}),E.state.next({validatingFields:r.validatingFields,isValidating:!ue(r.validatingFields)}))},S=(o,m=[],f,L,k=!0,p=!0)=>{if(L&&f&&!t.disabled){if(i.action=!0,p&&Array.isArray(R(a,o))){const w=f(R(a,o),L.argA,L.argB);k&&J(a,o,w)}if(p&&Array.isArray(R(r.errors,o))){const w=f(R(r.errors,o),L.argA,L.argB);k&&J(r.errors,o,w),ls(r.errors,o)}if((c.touchedFields||g.touchedFields)&&p&&Array.isArray(R(r.touchedFields,o))){const w=f(R(r.touchedFields,o),L.argA,L.argB);k&&J(r.touchedFields,o,w)}(c.dirtyFields||g.dirtyFields)&&(r.dirtyFields=Be(n,l)),E.state.next({name:o,isDirty:F(o,m),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else J(l,o,m)},K=(o,m)=>{J(r.errors,o,m),E.state.next({errors:r.errors})},O=o=>{r.errors=o,E.state.next({errors:r.errors,isValid:!1})},D=(o,m,f,L)=>{const k=R(a,o);if(k){const p=R(l,o,Z(f)?R(n,o):f);Z(p)||L&&L.defaultChecked||m?J(l,o,m?p:Cr(k._f)):x(o,p),i.mount&&V()}},T=(o,m,f,L,k)=>{let p=!1,w=!1;const q={name:o};if(!t.disabled){if(!f||L){(c.isDirty||g.isDirty)&&(w=r.isDirty,r.isDirty=q.isDirty=F(),p=w!==q.isDirty);const W=Ke(R(n,o),m);w=!!R(r.dirtyFields,o),W?ee(r.dirtyFields,o):J(r.dirtyFields,o,!0),q.dirtyFields=r.dirtyFields,p=p||(c.dirtyFields||g.dirtyFields)&&w!==!W}if(f){const W=R(r.touchedFields,o);W||(J(r.touchedFields,o,f),q.touchedFields=r.touchedFields,p=p||(c.touchedFields||g.touchedFields)&&W!==f)}p&&k&&E.state.next(q)}return p?q:{}},C=(o,m,f,L)=>{const k=R(r.errors,o),p=(c.isValid||g.isValid)&&de(m)&&r.isValid!==m;if(t.delayError&&f?(d=y(()=>K(o,f)),d(t.delayError)):(clearTimeout(v),d=null,f?J(r.errors,o,f):ee(r.errors,o)),(f?!Ke(k,f):k)||!ue(L)||p){const w={...L,...p&&de(m)?{isValid:m}:{},errors:r.errors,name:o};r={...r,...w},E.state.next(w)}},M=async o=>{_(o,!0);const m=await t.resolver(l,t.context,Qi(o||s.mount,a,t.criteriaMode,t.shouldUseNativeValidation));return _(o),m},H=async o=>{const{errors:m}=await M(o);if(o)for(const f of o){const L=R(m,f);L?J(r.errors,f,L):ee(r.errors,f)}else r.errors=m;return m},P=async(o,m,f={valid:!0})=>{for(const L in o){const k=o[L];if(k){const{_f:p,...w}=k;if(p){const q=s.array.has(p.name),W=k._f&&es(k._f);W&&c.validatingFields&&_([p.name],!0);const fe=await Jr(k,s.disabled,l,A,t.shouldUseNativeValidation&&!m,q);if(W&&c.validatingFields&&_([p.name]),fe[p.name]&&(f.valid=!1,m))break;!m&&(R(fe,p.name)?q?is(r.errors,fe,p.name):J(r.errors,p.name,fe[p.name]):ee(r.errors,p.name))}!ue(w)&&await P(w,m,f)}}return f.valid},G=()=>{for(const o of s.unMount){const m=R(a,o);m&&(m._f.refs?m._f.refs.every(f=>!Wa(f)):!Wa(m._f.ref))&&We(o)}s.unMount=new Set},F=(o,m)=>!t.disabled&&(o&&m&&J(l,o,m),!Ke(he(),n)),I=(o,m,f)=>jt(o,s,{...i.mount?l:Z(m)?n:me(o)?{[o]:m}:m},f,m),N=o=>sr(R(i.mount?l:n,o,t.shouldUnregister?R(n,o,[]):[])),x=(o,m,f={})=>{const L=R(a,o);let k=m;if(L){const p=L._f;p&&(!p.disabled&&J(l,o,qt(m,p)),k=xa(p.ref)&&oe(m)?"":m,Ht(p.ref)?[...p.ref.options].forEach(w=>w.selected=k.includes(w.value)):p.refs?fa(p.ref)?p.refs.forEach(w=>{(!w.defaultChecked||!w.disabled)&&(Array.isArray(k)?w.checked=!!k.find(q=>q===w.value):w.checked=k===w.value||!!k)}):p.refs.forEach(w=>w.checked=w.value===k):mr(p.ref)?p.ref.value="":(p.ref.value=k,p.ref.type||E.state.next({name:o,values:re(l)})))}(f.shouldDirty||f.shouldTouch)&&T(o,k,f.shouldTouch,f.shouldDirty,!0),f.shouldValidate&&se(o)},j=(o,m,f)=>{for(const L in m){if(!m.hasOwnProperty(L))return;const k=m[L],p=o+"."+L,w=R(a,p);(s.array.has(o)||ae(k)||w&&!w._f)&&!De(k)?j(p,k,f):x(p,k,f)}},B=(o,m,f={})=>{const L=R(a,o),k=s.array.has(o),p=re(m);J(l,o,p),k?(E.array.next({name:o,values:re(l)}),(c.isDirty||c.dirtyFields||g.isDirty||g.dirtyFields)&&f.shouldDirty&&E.state.next({name:o,dirtyFields:Be(n,l),isDirty:F(o,p)})):L&&!L._f&&!oe(p)?j(o,p,f):x(o,p,f),$r(o,s)&&E.state.next({...r,name:o}),E.state.next({name:i.mount?o:void 0,values:re(l)})},Q=async o=>{i.mount=!0;const m=o.target;let f=m.name,L=!0;const k=R(a,f),p=W=>{L=Number.isNaN(W)||De(W)&&isNaN(W.getTime())||Ke(W,R(l,f,W))},w=qr(t.mode),q=qr(t.reValidateMode);if(k){let W,fe;const ba=m.type?Cr(k._f):Mt(o),Ne=o.type===Pa.BLUR||o.type===Pa.FOCUS_OUT,tn=!as(k._f)&&!t.resolver&&!R(r.errors,f)&&!k._f.deps||ns(Ne,R(r.touchedFields,f),r.isSubmitted,q,w),qa=$r(f,s,Ne);J(l,f,ba),Ne?(!m||!m.readOnly)&&(k._f.onBlur&&k._f.onBlur(o),d&&d(0)):k._f.onChange&&k._f.onChange(o);const Ya=T(f,ba,Ne),nn=!ue(Ya)||qa;if(!Ne&&E.state.next({name:f,type:o.type,values:re(l)}),tn)return(c.isValid||g.isValid)&&(t.mode==="onBlur"?Ne&&V():Ne||V()),nn&&E.state.next({name:f,...qa?{}:Ya});if(!Ne&&qa&&E.state.next({...r}),t.resolver){const{errors:hr}=await M([f]);if(p(ba),L){const ln=zr(r.errors,a,f),yr=zr(hr,a,ln.name||f);W=yr.error,f=yr.name,fe=ue(hr)}}else _([f],!0),W=(await Jr(k,s.disabled,l,A,t.shouldUseNativeValidation))[f],_([f]),p(ba),L&&(W?fe=!1:(c.isValid||g.isValid)&&(fe=await P(a,!0)));L&&(k._f.deps&&(!Array.isArray(k._f.deps)||k._f.deps.length>0)&&se(k._f.deps),C(f,fe,W,Ya))}},ie=(o,m)=>{if(R(r.errors,m)&&o.focus)return o.focus(),1},se=async(o,m={})=>{let f,L;const k=oa(o);if(t.resolver){const p=await H(Z(o)?o:k);f=ue(p),L=o?!k.some(w=>R(p,w)):f}else o?(L=(await Promise.all(k.map(async p=>{const w=R(a,p);return await P(w&&w._f?{[p]:w}:w)}))).every(Boolean),!(!L&&!r.isValid)&&V()):L=f=await P(a);return E.state.next({...!me(o)||(c.isValid||g.isValid)&&f!==r.isValid?{}:{name:o},...t.resolver||!o?{isValid:f}:{},errors:r.errors}),m.shouldFocus&&!L&&ua(a,ie,o?k:s.mount),L},he=(o,m)=>{let f={...i.mount?l:n};return m&&(f=Bt(m.dirtyFields?r.dirtyFields:r.touchedFields,f)),Z(o)?f:me(o)?R(f,o):o.map(L=>R(f,L))},te=(o,m)=>({invalid:!!R((m||r).errors,o),isDirty:!!R((m||r).dirtyFields,o),error:R((m||r).errors,o),isValidating:!!R(r.validatingFields,o),isTouched:!!R((m||r).touchedFields,o)}),ve=o=>{o&&oa(o).forEach(m=>ee(r.errors,m)),E.state.next({errors:o?r.errors:{}})},Oe=(o,m,f)=>{const L=(R(a,o,{_f:{}})._f||{}).ref,k=R(r.errors,o)||{},{ref:p,message:w,type:q,...W}=k;J(r.errors,o,{...W,...m,ref:L}),E.state.next({name:o,errors:r.errors,isValid:!1}),f&&f.shouldFocus&&L&&L.focus&&L.focus()},Ua=(o,m)=>be(o)?E.state.subscribe({next:f=>"values"in f&&o(I(void 0,m),f)}):I(o,m,!0),_a=o=>E.state.subscribe({next:m=>{ts(o.name,m.name,o.exact)&&rs(m,o.formState||c,Qe,o.reRenderRoot)&&o.callback({values:{...l},...r,...m,defaultValues:n})}}).unsubscribe,Ca=o=>(i.mount=!0,g={...g,...o.formState},_a({...o,formState:g})),We=(o,m={})=>{for(const f of o?oa(o):s.mount)s.mount.delete(f),s.array.delete(f),m.keepValue||(ee(a,f),ee(l,f)),!m.keepError&&ee(r.errors,f),!m.keepDirty&&ee(r.dirtyFields,f),!m.keepTouched&&ee(r.touchedFields,f),!m.keepIsValidating&&ee(r.validatingFields,f),!t.shouldUnregister&&!m.keepDefaultValue&&ee(n,f);E.state.next({values:re(l)}),E.state.next({...r,...m.keepDirty?{isDirty:F()}:{}}),!m.keepIsValid&&V()},ha=({disabled:o,name:m})=>{(de(o)&&i.mount||o||s.disabled.has(m))&&(o?s.disabled.add(m):s.disabled.delete(m))},we=(o,m={})=>{let f=R(a,o);const L=de(m.disabled)||de(t.disabled);return J(a,o,{...f||{},_f:{...f&&f._f?f._f:{ref:{name:o}},name:o,mount:!0,...m}}),s.mount.add(o),f?ha({disabled:de(m.disabled)?m.disabled:t.disabled,name:o}):D(o,!0,m.value),{...L?{disabled:m.disabled||t.disabled}:{},...t.progressive?{required:!!m.required,min:ta(m.min),max:ta(m.max),minLength:ta(m.minLength),maxLength:ta(m.maxLength),pattern:ta(m.pattern)}:{},name:o,onChange:Q,onBlur:Q,ref:k=>{if(k){we(o,m),f=R(a,o);const p=Z(k.value)&&k.querySelectorAll&&k.querySelectorAll("input,select,textarea")[0]||k,w=Wi(p),q=f._f.refs||[];if(w?q.find(W=>W===p):p===f._f.ref)return;J(a,o,{_f:{...f._f,...w?{refs:[...q.filter(Wa),p,...Array.isArray(R(n,o))?[{}]:[]],ref:{type:p.type,name:o}}:{ref:p}}}),D(o,!1,void 0,p)}else f=R(a,o,{}),f._f&&(f._f.mount=!1),(t.shouldUnregister||m.shouldUnregister)&&!(Ft(s.array,o)&&i.action)&&s.unMount.add(o)}}},Pe=()=>t.shouldFocusError&&ua(a,ie,s.mount),Je=o=>{de(o)&&(E.state.next({disabled:o}),ua(a,(m,f)=>{const L=R(a,f);L&&(m.disabled=L._f.disabled||o,Array.isArray(L._f.refs)&&L._f.refs.forEach(k=>{k.disabled=L._f.disabled||o}))},0,!1))},xe=(o,m)=>async f=>{let L;f&&(f.preventDefault&&f.preventDefault(),f.persist&&f.persist());let k=re(l);if(E.state.next({isSubmitting:!0}),t.resolver){const{errors:p,values:w}=await M();r.errors=p,k=re(w)}else await P(a);if(s.disabled.size)for(const p of s.disabled)ee(k,p);if(ee(r.errors,"root"),ue(r.errors)){E.state.next({errors:{}});try{await o(k,f)}catch(p){L=p}}else m&&await m({...r.errors},f),Pe(),setTimeout(Pe);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ue(r.errors)&&!L,submitCount:r.submitCount+1,errors:r.errors}),L)throw L},Ze=(o,m={})=>{R(a,o)&&(Z(m.defaultValue)?B(o,re(R(n,o))):(B(o,m.defaultValue),J(n,o,re(m.defaultValue))),m.keepTouched||ee(r.touchedFields,o),m.keepDirty||(ee(r.dirtyFields,o),r.isDirty=m.defaultValue?F(o,re(R(n,o))):F()),m.keepError||(ee(r.errors,o),c.isValid&&V()),E.state.next({...r}))},Ve=(o,m={})=>{const f=o?re(o):n,L=re(f),k=ue(o),p=k?n:L;if(m.keepDefaultValues||(n=f),!m.keepValues){if(m.keepDirtyValues){const w=new Set([...s.mount,...Object.keys(Be(n,l))]);for(const q of Array.from(w))R(r.dirtyFields,q)?J(p,q,R(l,q)):B(q,R(p,q))}else{if(ir&&Z(o))for(const w of s.mount){const q=R(a,w);if(q&&q._f){const W=Array.isArray(q._f.refs)?q._f.refs[0]:q._f.ref;if(xa(W)){const fe=W.closest("form");if(fe){fe.reset();break}}}}if(m.keepFieldsRef)for(const w of s.mount)B(w,R(p,w));else a={}}l=t.shouldUnregister?m.keepDefaultValues?re(n):{}:re(p),E.array.next({values:{...p}}),E.state.next({values:{...p}})}s={mount:m.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!c.isValid||!!m.keepIsValid||!!m.keepDirtyValues,i.watch=!!t.shouldUnregister,E.state.next({submitCount:m.keepSubmitCount?r.submitCount:0,isDirty:k?!1:m.keepDirty?r.isDirty:!!(m.keepDefaultValues&&!Ke(o,n)),isSubmitted:m.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:k?{}:m.keepDirtyValues?m.keepDefaultValues&&l?Be(n,l):r.dirtyFields:m.keepDefaultValues&&o?Be(n,o):m.keepDirty?r.dirtyFields:{},touchedFields:m.keepTouched?r.touchedFields:{},errors:m.keepErrors?r.errors:{},isSubmitSuccessful:m.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:n})},Le=(o,m)=>Ve(be(o)?o(l):o,m),Xe=(o,m={})=>{const f=R(a,o),L=f&&f._f;if(L){const k=L.refs?L.refs[0]:L.ref;k.focus&&(k.focus(),m.shouldSelect&&be(k.select)&&k.select())}},Qe=o=>{r={...r,...o}},Me={control:{register:we,unregister:We,getFieldState:te,handleSubmit:xe,setError:Oe,_subscribe:_a,_runSchema:M,_focusError:Pe,_getWatch:I,_getDirty:F,_setValid:V,_setFieldArray:S,_setDisabledField:ha,_setErrors:O,_getFieldArray:N,_reset:Ve,_resetDefaultValues:()=>be(t.defaultValues)&&t.defaultValues().then(o=>{Le(o,t.resetOptions),E.state.next({isLoading:!1})}),_removeUnmounted:G,_disableForm:Je,_subjects:E,_proxyFormState:c,get _fields(){return a},get _formValues(){return l},get _state(){return i},set _state(o){i=o},get _defaultValues(){return n},get _names(){return s},set _names(o){s=o},get _formState(){return r},get _options(){return t},set _options(o){t={...t,...o}}},subscribe:Ca,trigger:se,register:we,handleSubmit:xe,watch:Ua,setValue:B,getValues:he,reset:Le,resetField:Ze,clearErrors:ve,unregister:We,setError:Oe,setFocus:Xe,getFieldState:te};return{...Me,formControl:Me}}function us(e={}){const t=u.useRef(void 0),r=u.useRef(void 0),[a,n]=u.useState({isDirty:!1,isValidating:!1,isLoading:be(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:be(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:a},e.defaultValues&&!be(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=os(e);t.current={...s,formState:a}}const l=t.current.control;return l._options=e,dr(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>n({...l._formState}),reRenderRoot:!0});return n(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),u.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),u.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),u.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),u.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),u.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==a.isDirty&&l._subjects.state.next({isDirty:i})}},[l,a.isDirty]),u.useEffect(()=>{e.values&&!Ke(e.values,r.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),r.current=e.values,n(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),u.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),t.current.formState=Gt(a,l),t.current}function ds(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zr={exports:{}},na={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr;function cs(){if(Xr)return na;Xr=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,n,l){var i=null;if(l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),"key"in n){l={};for(var s in n)s!=="key"&&(l[s]=n[s])}else l=n;return n=l.ref,{$$typeof:e,type:a,key:i,ref:n!==void 0?n:null,props:l}}return na.Fragment=t,na.jsx=r,na.jsxs=r,na}var Qr;function ms(){return Qr||(Qr=1,Zr.exports=cs()),Zr.exports}var ke=ms();const vs=({children:e})=>{const t=b.Children.toArray(e);return t.length===0?null:ke.jsx(Hl,{variant:"warning",size:"small",children:ke.jsx(ce,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:t.map(r=>ke.jsx(X,{size:"small",children:r},fs(r)))})})},fs=e=>{if(b.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},ga={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};pe(ga);const Fa="var(--ax-bg-neutral-strong)",$t=4,gs=(e,t,r)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${Fa};
    border-radius: ${$t}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${Fa};
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
`,Es=(e,t,r)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${Fa};
    border-radius: ${$t}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${Fa};
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
`,_s=(e,t,r,a)=>t?Es(e,r,a):gs(e,r,a),hs=(e,t,r)=>r?"":t?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,ys=({children:e,alignOffset:t=0,alignLeft:r=!1,marginTop:a=0,marginLeft:n=0,hideBorder:l=!1})=>ke.jsxs(ke.Fragment,{children:[ke.jsx("style",{dangerouslySetInnerHTML:{__html:_s(t,r,a,n)}}),ke.jsx("div",{className:hs(t,r,l),children:e})]});var et={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var at;function bs(){return at||(at=1,(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=n(l,a.call(this,s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)t.call(l,s)&&l[s]&&(i=n(i,this&&this[s]||s));return i}function n(l,i){return i?l?l+" "+i:l+i:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(et)),et.exports}var ps=bs();const fr=ds(ps),Os="_borderbox_1a0x6_1",Ss="_error_1a0x6_5",Ks="_warning_1a0x6_8",ks={borderbox:Os,error:Ss,warning:Ks};fr.bind(ks);const Ts="_aksjonspunkt_11wjs_1",As="_erAksjonspunktApent_11wjs_4",Ns="_erIkkeGodkjentAvBeslutter_11wjs_8",Rs={aksjonspunkt:Ts,erAksjonspunktApent:As,erIkkeGodkjentAvBeslutter:Ns};fr.bind(Rs);pe(ga);pe(ga);const Vs="_divider_1jpov_1",Ls="_dividerParagraf_1jpov_8",Ds="_leftPanel_1jpov_11",Is="_rightPanel_1jpov_14",ws={divider:Vs,dividerParagraf:Ls,leftPanel:Ds,rightPanel:Is};fr.bind(ws);const zt=()=>ke.jsx("span",{"data-testid":"editedIcon",children:ke.jsx(Un,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});pe(ga);pe(ga);var Ja={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var rt;function Ps(){return rt||(rt=1,(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=n(l,a(s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)t.call(l,s)&&l[s]&&(i=n(i,s));return i}function n(l,i){return i?l?l+" "+i:l+i:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Ja)),Ja.exports}var xs=Ps();const Ms=mt(xs);function Fs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tt={exports:{}},la={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt;function Gs(){if(nt)return la;nt=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,n,l){var i=null;if(l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),"key"in n){l={};for(var s in n)s!=="key"&&(l[s]=n[s])}else l=n;return n=l.ref,{$$typeof:e,type:a,key:i,ref:n!==void 0?n:null,props:l}}return la.Fragment=t,la.jsx=r,la.jsxs=r,la}var lt;function js(){return lt||(lt=1,tt.exports=Gs()),tt.exports}var ne=js();const gr=e=>e.reduce((t,r,a)=>({...t,[a]:n=>r(n)||!0}),{}),Er=(e,t)=>t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e)?.message;var Qa={exports:{}},Bs=Qa.exports,it;function Hs(){return it||(it=1,(function(e,t){(function(r,a){e.exports=a()})(Bs,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,d={},v=function(_){return(_=+_)+(_>68?1900:2e3)},c=function(_){return function(S){this[_]=+S}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=(function(S){if(!S||S==="Z")return 0;var K=S.match(/([+-]|\d\d)/g),O=60*K[1]+(+K[2]||0);return O===0?0:K[0]==="+"?-O:O})(_)}],E=function(_){var S=d[_];return S&&(S.indexOf?S:S.s.concat(S.f))},A=function(_,S){var K,O=d.meridiem;if(O){for(var D=1;D<=24;D+=1)if(_.indexOf(O(D,0,S))>-1){K=D>12;break}}else K=_===(S?"pm":"PM");return K},y={A:[s,function(_){this.afternoon=A(_,!1)}],a:[s,function(_){this.afternoon=A(_,!0)}],Q:[n,function(_){this.month=3*(_-1)+1}],S:[n,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[i,c("seconds")],ss:[i,c("seconds")],m:[i,c("minutes")],mm:[i,c("minutes")],H:[i,c("hours")],h:[i,c("hours")],HH:[i,c("hours")],hh:[i,c("hours")],D:[i,c("day")],DD:[l,c("day")],Do:[s,function(_){var S=d.ordinal,K=_.match(/\d+/);if(this.day=K[0],S)for(var O=1;O<=31;O+=1)S(O).replace(/\[|\]/g,"")===_&&(this.day=O)}],w:[i,c("week")],ww:[l,c("week")],M:[i,c("month")],MM:[l,c("month")],MMM:[s,function(_){var S=E("months"),K=(E("monthsShort")||S.map(function(O){return O.slice(0,3)})).indexOf(_)+1;if(K<1)throw new Error;this.month=K%12||K}],MMMM:[s,function(_){var S=E("months").indexOf(_)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,c("year")],YY:[l,function(_){this.year=v(_)}],YYYY:[/\d{4}/,c("year")],Z:g,ZZ:g};function V(_){var S,K;S=_,K=d&&d.formats;for(var O=(_=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,F,I){var N=I&&I.toUpperCase();return F||K[I]||r[I]||K[N].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,j,B){return j||B.slice(1)})})).match(a),D=O.length,T=0;T<D;T+=1){var C=O[T],M=y[C],H=M&&M[0],P=M&&M[1];O[T]=P?{regex:H,parser:P}:C.replace(/^\[|\]$/g,"")}return function(G){for(var F={},I=0,N=0;I<D;I+=1){var x=O[I];if(typeof x=="string")N+=x.length;else{var j=x.regex,B=x.parser,Q=G.slice(N),ie=j.exec(Q)[0];B.call(F,ie),G=G.replace(ie,"")}}return(function(se){var he=se.afternoon;if(he!==void 0){var te=se.hours;he?te<12&&(se.hours+=12):te===12&&(se.hours=0),delete se.afternoon}})(F),F}}return function(_,S,K){K.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(v=_.parseTwoDigitYear);var O=S.prototype,D=O.parse;O.parse=function(T){var C=T.date,M=T.utc,H=T.args;this.$u=M;var P=H[1];if(typeof P=="string"){var G=H[2]===!0,F=H[3]===!0,I=G||F,N=H[2];F&&(N=H[2]),d=this.$locale(),!G&&N&&(d=K.Ls[N]),this.$d=(function(Q,ie,se,he){try{if(["x","X"].indexOf(ie)>-1)return new Date((ie==="X"?1e3:1)*Q);var te=V(ie)(Q),ve=te.year,Oe=te.month,Ua=te.day,_a=te.hours,Ca=te.minutes,We=te.seconds,ha=te.milliseconds,we=te.zone,Pe=te.week,Je=new Date,xe=Ua||(ve||Oe?1:Je.getDate()),Ze=ve||Je.getFullYear(),Ve=0;ve&&!Oe||(Ve=Oe>0?Oe-1:Je.getMonth());var Le,Xe=_a||0,Qe=Ca||0,ya=We||0,Me=ha||0;return we?new Date(Date.UTC(Ze,Ve,xe,Xe,Qe,ya,Me+60*we.offset*1e3)):se?new Date(Date.UTC(Ze,Ve,xe,Xe,Qe,ya,Me)):(Le=new Date(Ze,Ve,xe,Xe,Qe,ya,Me),Pe&&(Le=he(Le).week(Pe).toDate()),Le)}catch{return new Date("")}})(C,P,M,K),this.init(),N&&N!==!0&&(this.$L=this.locale(N).$L),I&&C!=this.format(P)&&(this.$d=new Date("")),d={}}else if(P instanceof Array)for(var x=P.length,j=1;j<=x;j+=1){H[1]=P[j-1];var B=K.apply(this,H);if(B.isValid()){this.$d=B.$d,this.$L=B.$L,this.init();break}j===x&&(this.$d=new Date(""))}else D.call(this,T)}}})})(Qa)),Qa.exports}var Us=Hs();const Cs=Fs(Us),qs="_textarea_14c7r_1",Ys="_readOnlyField_14c7r_7",st={textarea:qs,readOnlyField:Ys},$s=e=>e!=null&&e!=="",Wt=({label:e,value:t,isEdited:r=!1,type:a,hideLabel:n,size:l})=>$s(t)?ne.jsxs(ce,{gap:"space-4",children:[e&&!n&&ne.jsx(Ee,{size:l,children:e}),ne.jsxs(qe,{gap:"space-8",align:"center",wrap:!1,children:[ne.jsx(tr,{className:a==="textarea"?st.textarea:st.readOnlyField,size:l,children:t}),r&&ne.jsx(zt,{})]})]}):null;on.extend(Cs);const zs="_noReadOnlyIcon_11vhl_2",Ws={noReadOnlyIcon:zs},ot=({label:e,description:t,validate:r=[],onChange:a,children:n,className:l,isReadOnly:i=!1,size:s="small",isEdited:d=!1,hideLegend:v=!1,...c})=>{const{name:g,control:E}=c,{formState:{errors:A}}=Ae(),{field:y}=cr({name:g,control:E,rules:{validate:gr(r)}});return ne.jsx(Pi,{name:g,value:y.value!==void 0?y.value:null,legend:ne.jsxs(qe,{justify:"center",gap:"space-8",children:[e,i&&d&&ne.jsx(zt,{})]}),hideLegend:v,"aria-readonly":i,readOnly:i,description:t,size:s,error:Er(A,g),onChange:V=>{a&&a(V),y.onChange(V)},className:Ms(l,Ws.noReadOnlyIcon),children:n})},ut=({label:e,selectValues:t,validate:r=[],readOnly:a=!1,description:n,hideValueOnDisable:l=!1,onChange:i,className:s,hideLabel:d,isEdited:v,size:c="small",...g})=>{const{name:E,control:A,disabled:y}=g,{formState:{errors:V}}=Ae(),{field:_}=cr({name:E,control:A,rules:{validate:b.useMemo(()=>gr(r),[r])}});if(a){const O=t.map(T=>T.props).find(T=>T.value===_.value),D=O?O.children:void 0;return ne.jsx(Wt,{value:D,label:e,hideLabel:d,isEdited:v,size:c})}const S=_.value||"",K=!t.map(O=>O.props.value).includes(S)&&S!=="";return K&&console.warn(`No corresponding option found for value '${S}'`),ne.jsxs(hi,{size:c,className:s,error:Er(V,E),label:e,description:n,value:l&&y||K?"":_.value,disabled:y,onChange:O=>{i&&i(O),_.onChange(O)},hideLabel:d,children:[ne.jsx("option",{style:{display:"none"}}),",",t]})},Js="_textAreaFieldWithBadges_bdz0b_1",Zs="_etikettWrapper_bdz0b_4",dt={textAreaFieldWithBadges:Js,etikettWrapper:Zs},Jt=({name:e,control:t,label:r,readOnly:a,maxLength:n,badges:l,validate:i=[],parse:s=A=>A,className:d,description:v,isEdited:c,size:g="small",...E})=>{const{formState:{errors:A}}=Ae(),{field:y}=cr({name:e,control:t,rules:{validate:b.useMemo(()=>gr(i),[i])}});return a?ne.jsx(Wt,{size:g,label:r,value:y.value,type:"textarea",isEdited:c,hideLabel:E.hideLabel}):ne.jsxs("div",{className:l?dt.textAreaFieldWithBadges:null,children:[l&&ne.jsx("div",{className:dt.etikettWrapper,children:l.map(({type:V,titleText:_})=>ne.jsx(Ri,{variant:V,size:"small",children:_},_))}),ne.jsx(Hi,{size:g,label:r,description:v,className:d,autoComplete:"off",...y,onChange:V=>y.onChange(V.currentTarget.value!==""?s(V.currentTarget.value):null),value:y.value?y.value:"",error:Er(A,e),maxLength:n,...E})]})},Xs=({formMethods:e,onSubmit:t,children:r,className:a,setDataOnUnmount:n})=>{const{handleSubmit:l,getValues:i}=e;return b.useEffect(()=>()=>{n&&n(i())},[]),ne.jsx(qi,{...e,children:ne.jsx("form",{className:a,onSubmit:t?l(s=>t(s)):void 0,children:r})})},Qs="_begrunnelseTextField_hw8s7_6",eo={begrunnelseTextField:Qs},Ea={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},ao=pe(Ea),ro=dn(3),to=cn(2e3),no=e=>e?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",lo=e=>t=>t!==void 0||e,Ha=({readOnly:e,text:t,useAllWidth:r=!1,notRequired:a=!1})=>{const{formState:{isDirty:n},control:l}=Ae(),i=a?()=>!1:lo(n);return h.jsx("div",{className:r?"":eo.begrunnelseTextField,children:h.jsx(Jt,{name:"begrunnelse",control:l,label:t??ao.formatMessage({id:no(e)}),validate:[un(i),ro,to,Et],maxLength:2e3,readOnly:e,parse:gt})})},io=e=>e.at(0)?.begrunnelse??"";Ha.buildInitialValues=e=>({begrunnelse:mn(io(e))});Ha.transformValues=e=>({begrunnelse:e.begrunnelse});Ha.__docgenInfo={description:`ProsessStegBegrunnelseTextField

Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  besluttersBegrunnelse?: string;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid?: string;
  endretTidspunkt?: string;
  endretAv?: string;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"endretAv",value:{name:"string",required:!1}}]}}],raw:"Aksjonspunkt[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const so=pe(Ea),oo=(e,t,r,a)=>!r&&!t||e?!0:a===void 0?!r:!r&&a||a,_r=({isReadOnly:e,isSubmittable:t,isSubmitting:r,isDirty:a,text:n,onClick:l,hasEmptyRequiredFields:i})=>e?null:h.jsx("div",{children:h.jsx(Ce,{size:"small",variant:"primary",loading:r,disabled:oo(r,t,a,i),onClick:l,type:l?"button":"submit",children:n??so.formatMessage({id:"SubmitButton.ConfirmInformation"})})});_r.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};pe(Ea);pe(Ea);pe(Ea);const Zt=({erModalÅpen:e,lukkModal:t,isSubmittable:r,isSubmitting:a,isDirty:n,readOnly:l,valgtHjemmel:i})=>{const s=Ye();return h.jsx(da,{width:"500px",open:e,"aria-label":s.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:t,children:h.jsx(da.Body,{children:h.jsxs(ce,{gap:"space-12",children:[h.jsxs(ce,{gap:"space-16",children:[h.jsx(Ee,{size:"medium",children:h.jsx(Y,{id:"Klage.Modal.Overskrift"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.SendTilKlageinstans"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Valg"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Oppretthold"})}),i&&h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Hjemmel",values:{hjemmel:i}})})]}),h.jsx("div",{children:h.jsxs(qe,{gap:"space-8",children:[h.jsx(_r,{isReadOnly:l,isSubmittable:r,isSubmitting:a,isDirty:n}),h.jsx(Ce,{size:"small",variant:"primary",onClick:t,autoFocus:!0,type:"button",children:h.jsx(Y,{id:"Klage.Modal.Avbryt"})})]})})]})})})};Zt.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const uo="_fritekstTilBrevTextArea_n72am_1",co={fritekstTilBrevTextArea:uo},Xt=({språkkode:e,readOnly:t=!0})=>{const{control:r}=Ae();return h.jsx("div",{className:co.fritekstTilBrevTextArea,children:h.jsx(Jt,{name:"fritekstTilBrev",control:r,label:Ye().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[ia,Et],readOnly:t,maxLength:1e5,badges:[{type:"info",titleText:vn(e)}],parse:gt})})};Xt.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const mo="_select_1owoa_7",vo="_selectReadOnly_1owoa_10",Ka={select:mo,selectReadOnly:vo},Qt=({readOnly:e,medholdReasons:t,alleHjemmlerMedNavn:r,klageVurdering:a})=>{const n=Ye(),{control:l}=Ae(),i=t.map(d=>h.jsx("option",{value:d.kode,children:d.navn},d.kode)),s=r.map(d=>h.jsx("option",{value:d.kode,children:d.navn},d.kode));return h.jsxs(ce,{gap:"space-12",children:[h.jsx(ot,{name:"klageVurdering",control:l,validate:[ia],isReadOnly:e,children:h.jsxs(qe,{gap:"space-16",children:[h.jsx(ra,{value:z.MEDHOLD_I_KLAGE,size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.ChangeVedtak"})}),h.jsx(ra,{value:z.STADFESTE_YTELSESVEDTAK,size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.KeepVedtakNfp"})})]})}),a===z.MEDHOLD_I_KLAGE&&h.jsx(ys,{children:h.jsxs(ce,{gap:"space-16",children:[h.jsx(ut,{readOnly:e,control:l,name:"klageMedholdArsak",selectValues:i,className:e?Ka.selectReadOnly:Ka.select,label:n.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[ia]}),h.jsxs(ot,{name:"klageVurderingOmgjoer",control:l,validate:[ia],isReadOnly:e,children:[h.jsx(ra,{value:Re.GUNST_MEDHOLD_I_KLAGE,size:"small",children:h.jsx(Y,{id:"Klage.Behandle.Omgjort"})}),h.jsx(ra,{value:Re.UGUNST_MEDHOLD_I_KLAGE,size:"small",children:h.jsx(Y,{id:"Klage.Behandle.Ugunst"})}),h.jsx(ra,{value:Re.DELVIS_MEDHOLD_I_KLAGE,size:"small",children:h.jsx(Y,{id:"Klage.Behandle.DelvisOmgjort"})})]})]})}),h.jsx(ut,{readOnly:e,control:l,name:"klageHjemmel",selectValues:s,className:e?Ka.selectReadOnly:Ka.select,label:n.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[ia]})]})};Qt.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'KlageHjemmel'>[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const fo=(e,t)=>{switch(t){case z.STADFESTE_YTELSESVEDTAK:return e?je.KLAGE_STADFESTET:je.KLAGE_OVERSENDT;case z.OPPHEVE_YTELSESVEDTAK:return je.KLAGE_HJEMSENDT;case z.HJEMSENDE_UTEN_Å_OPPHEVE:return je.KLAGE_HJEMSENDT;case z.MEDHOLD_I_KLAGE:return je.KLAGE_OMGJORING;default:return}},go=(e,t)=>({fritekst:t??"",dokumentMal:fo(!1,e),erOpphevetKlage:e===z.OPPHEVE_YTELSESVEDTAK}),en=({previewCallback:e,fritekstTilBrev:t,klageVurdering:r})=>{const a=n=>{e(go(r,t)),n.preventDefault()};return h.jsx(Ti,{href:"#",onClick:a,onKeyDown:n=>n.key==="Enter"?a(n):null,children:h.jsx(Y,{id:"PreviewKlageLink.ForhandvisBrev"})})};en.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: foreldrepenger_dokumentbestiller_DokumentMalType;
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
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Eo=e=>({klageMedholdArsak:e.klageVurdering===z.MEDHOLD_I_KLAGE?e.klageMedholdArsak:void 0,klageVurderingOmgjoer:e.klageVurdering===z.MEDHOLD_I_KLAGE?e.klageVurderingOmgjoer:void 0,klageHjemmel:e.klageHjemmel,klageVurdering:La(e.klageVurdering),fritekstTilBrev:e.fritekstTilBrev,begrunnelse:e.begrunnelse,kode:ca.BEHANDLE_KLAGE_NFP}),ka=e=>{if(e&&e!=="-")return e},_o=(e,t)=>e.filter(({kode:r})=>t.includes(r)).sort((r,a)=>r.kode.localeCompare(a.kode)),ho=e=>e.map(t=>t),yo=e=>({klageMedholdArsak:ka(e?.klageMedholdArsak??void 0),klageVurderingOmgjoer:ka(e?.klageVurderingOmgjoer??void 0),klageHjemmel:ka(e?.klageHjemmel??void 0),klageVurdering:ka(e?.klageVurdering??void 0),begrunnelse:e?.begrunnelse??void 0,fritekstTilBrev:e?.fritekstTilBrev??void 0}),an=({klageVurdering:e,previewCallback:t,saveKlage:r,alleAktuelleHjemler:a})=>{const{behandling:n,alleKodeverk:l,submitCallback:i,isReadOnly:s,isSubmittable:d}=rr(),v=_o(l.KlageHjemmel,ho(a)),c=Ye(),[g,E]=b.useState(!1),A=yo(e.klageVurderingResultatNFP??void 0),{mellomlagretFormData:y,setMellomlagretFormData:V}=fn(),_=us({defaultValues:y??A}),S=_.watch(),K=()=>{E(!1)},O=()=>{E(!0)};return h.jsx(Xs,{formMethods:_,onSubmit:D=>i(Eo(D)),setDataOnUnmount:V,children:h.jsxs(ce,{gap:"space-16",children:[h.jsx(nr,{size:"small",level:"2",children:c.formatMessage({id:"Klage.ResolveKlage.Title"})}),d&&h.jsx(vs,{children:h.jsx(Y,{id:"Klage.ResolveKlage.HelpText"})}),h.jsx(Qt,{readOnly:s,klageVurdering:S.klageVurdering,medholdReasons:l.KlageMedholdÅrsak,alleHjemmlerMedNavn:v}),h.jsx(Ha,{readOnly:s,text:c.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),h.jsx(Xt,{språkkode:n.språkkode,readOnly:s}),h.jsxs(qe,{justify:"space-between",children:[h.jsxs(qe,{gap:"space-16",children:[S.klageVurdering===z.STADFESTE_YTELSESVEDTAK&&h.jsxs(h.Fragment,{children:[h.jsx(Ce,{variant:"primary",type:"button",size:"small",onClick:()=>O(),disabled:s,children:h.jsx(Y,{id:"Klage.Behandle.Bekreft"})}),h.jsx(Zt,{erModalÅpen:g,lukkModal:K,valgtHjemmel:v.find(D=>D.kode===S.klageHjemmel)?.navn,readOnly:s,isSubmittable:d,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isValid})]}),S.klageVurdering!==z.STADFESTE_YTELSESVEDTAK&&h.jsx(_r,{isReadOnly:s,isSubmittable:d,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isDirty}),!s&&S.klageVurdering&&S.fritekstTilBrev&&S.fritekstTilBrev.length>2&&h.jsx(en,{previewCallback:t,fritekstTilBrev:S.fritekstTilBrev,klageVurdering:S.klageVurdering})]}),!s&&h.jsx(Ce,{size:"small",variant:"primary",onClick:_.handleSubmit(D=>r(bo(D,ca.BEHANDLE_KLAGE_NFP))),type:"button",children:h.jsx(Y,{id:"Klage.ResolveKlage.TempSaveButton"})})]})]})})},bo=(e,t)=>({kode:t,klageMedholdArsak:e.klageVurdering===z.MEDHOLD_I_KLAGE||e.klageVurdering===z.OPPHEVE_YTELSESVEDTAK?e.klageMedholdArsak:void 0,klageVurderingOmgjoer:e.klageVurdering===z.MEDHOLD_I_KLAGE?e.klageVurderingOmgjoer:void 0,klageHjemmel:e.klageHjemmel,fritekstTilBrev:La(e.fritekstTilBrev),begrunnelse:La(e.begrunnelse),klageVurdering:La(e.klageVurdering)});an.__docgenInfo={description:`BehandleklageformNfp

Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (NFP).`,methods:[],displayName:"BehandleKlageFormNfp",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: foreldrepenger_dokumentbestiller_DokumentMalType;
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
  klageFormkravResultatNFP?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNFP?: tjenester_behandling_klage_KlageVurderingResultatDto;
  klageFormkravResultatKA?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNK?: tjenester_behandling_klage_KlageVurderingResultatDto;
  aktuelleHjemler?: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>;
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
  mottattDato?: string;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]},required:!1}},{key:"klageVurderingResultatNFP",value:{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  begrunnelse?: string;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  godkjentAvMedunderskriver?: boolean;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]},required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]},required:!1}},{key:"klageVurderingResultatNK",value:{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  begrunnelse?: string;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  godkjentAvMedunderskriver?: boolean;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"union",raw:`| '14-02'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const rn=({klageVurdering:e})=>{const t=Ye(),{alleKodeverk:r}=rr(),{begrunnelse:a,fritekstTilBrev:n,klageVurdering:l,klageMedholdArsak:i,klageVurderingOmgjoer:s}=e.klageVurderingResultatNK??{},d=r.KlageMedholdÅrsak;return h.jsxs(ce,{gap:"space-16",children:[h.jsx(nr,{size:"small",level:"2",children:t.formatMessage({id:"Klage.ResolveKlage.Title"})}),h.jsxs(ce,{gap:"space-4",children:[h.jsx(Ee,{size:"small",children:h.jsx(Y,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),h.jsxs(X,{size:"small",children:[l===z.STADFESTE_YTELSESVEDTAK&&h.jsx(Y,{id:"Klage.ResolveKlage.KeepVedtakNk"}),l===z.MEDHOLD_I_KLAGE&&h.jsx(Y,{id:"Klage.ResolveKlage.ChangeVedtak"}),l===z.HJEMSENDE_UTEN_Å_OPPHEVE&&h.jsx(Y,{id:"Klage.Behandle.Hjemsendt"}),l===z.OPPHEVE_YTELSESVEDTAK&&h.jsx(Y,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),l===z.MEDHOLD_I_KLAGE&&h.jsxs(ce,{gap:"space-4",children:[h.jsx(Ee,{size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.Cause"})}),h.jsx(X,{size:"small",children:d.find(v=>v.kode===i)?.navn}),h.jsxs(X,{size:"small",children:[s===Re.GUNST_MEDHOLD_I_KLAGE&&h.jsx(Y,{id:"Klage.Behandle.Omgjort"}),s===Re.UGUNST_MEDHOLD_I_KLAGE&&h.jsx(Y,{id:"Klage.Behandle.Ugunst"}),s===Re.DELVIS_MEDHOLD_I_KLAGE&&h.jsx(Y,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(l===z.OPPHEVE_YTELSESVEDTAK||l===z.HJEMSENDE_UTEN_Å_OPPHEVE)&&h.jsxs(ce,{gap:"space-4",children:[h.jsx(Ee,{size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.Cause"})}),h.jsx(X,{size:"small",children:d.find(v=>v.kode===i)?.navn})]}),h.jsxs(ce,{gap:"space-4",children:[h.jsx(Ee,{size:"small",children:h.jsx(Y,{id:"FritekstKlageBrevTextField.Fritekst"})}),h.jsx(X,{size:"small",children:n})]}),h.jsxs(ce,{gap:"space-4",children:[h.jsx(Ee,{size:"small",children:h.jsx(Y,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),h.jsx(X,{size:"small",children:a})]})]})};rn.__docgenInfo={description:`BehandleklageformNfp

Setter opp readonly-panel for behandling av klage (KA).`,methods:[],displayName:"BehandleKlageFormKa",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNFP?: tjenester_behandling_klage_KlageVurderingResultatDto;
  klageFormkravResultatKA?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNK?: tjenester_behandling_klage_KlageVurderingResultatDto;
  aktuelleHjemler?: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>;
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
  mottattDato?: string;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]},required:!1}},{key:"klageVurderingResultatNFP",value:{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  begrunnelse?: string;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  godkjentAvMedunderskriver?: boolean;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]},required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]},required:!1}},{key:"klageVurderingResultatNK",value:{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  begrunnelse?: string;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  godkjentAvMedunderskriver?: boolean;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"union",raw:`| '14-02'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}},description:""}}};const po={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},Oo=pe(po),er=({klageVurdering:e,saveKlage:t,previewCallback:r})=>{const{aksjonspunkterForPanel:a}=rr();return h.jsxs(gn,{value:Oo,children:[e.klageVurderingResultatNK&&h.jsx(rn,{klageVurdering:e}),a.some(n=>n.definisjon===ca.BEHANDLE_KLAGE_NFP)&&h.jsx(an,{klageVurdering:e,saveKlage:t,previewCallback:r,alleAktuelleHjemler:e.aktuelleHjemler?e.aktuelleHjemler:[]})]})};er.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNFP?: tjenester_behandling_klage_KlageVurderingResultatDto;
  klageFormkravResultatKA?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNK?: tjenester_behandling_klage_KlageVurderingResultatDto;
  aktuelleHjemler?: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>;
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
  mottattDato?: string;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]},required:!1}},{key:"klageVurderingResultatNFP",value:{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  begrunnelse?: string;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  godkjentAvMedunderskriver?: boolean;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]},required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]},required:!1}},{key:"klageVurderingResultatNK",value:{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  begrunnelse?: string;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  godkjentAvMedunderskriver?: boolean;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"union",raw:`| '14-02'
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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: foreldrepenger_dokumentbestiller_DokumentMalType;
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
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const{action:ct}=__STORYBOOK_MODULE_ACTIONS__,No={title:"prosess/klage/prosess-klagevurdering",component:er,decorators:[En,_n],args:{saveKlage:ct("button-click"),previewCallback:ct("button-click")},render:e=>h.jsx(er,{...e})},Ta={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.MEDHOLD_I_KLAGE,klageMedholdArsak:"ULIK_VURDERING",klageVurderingOmgjoer:Re.GUNST_MEDHOLD_I_KLAGE,fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Aa={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.STADFESTE_YTELSESVEDTAK,fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Na={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.HJEMSENDE_UTEN_Å_OPPHEVE,klageMedholdArsak:"ULIK_VURDERING",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Ra={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.OPPHEVE_YTELSESVEDTAK,klageMedholdArsak:"ULIK_VURDERING",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Va={args:{aksjonspunkterForPanel:[{definisjon:ca.BEHANDLE_KLAGE_NFP}],klageVurdering:{klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}};Ta.parameters={...Ta.parameters,docs:{...Ta.parameters?.docs,source:{originalSource:`{
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
}`,...Ta.parameters?.docs?.source}}};Aa.parameters={...Aa.parameters,docs:{...Aa.parameters?.docs,source:{originalSource:`{
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
}`,...Aa.parameters?.docs?.source}}};Na.parameters={...Na.parameters,docs:{...Na.parameters?.docs,source:{originalSource:`{
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
}`,...Na.parameters?.docs?.source}}};Ra.parameters={...Ra.parameters,docs:{...Ra.parameters?.docs,source:{originalSource:`{
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
}`,...Ra.parameters?.docs?.source}}};Va.parameters={...Va.parameters,docs:{...Va.parameters?.docs,source:{originalSource:`{
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
}`,...Va.parameters?.docs?.source}}};const Ro=["MedholdIKlageNk","StadfestKlageNk","HjemsendtIKlageNk","OpphevIKlageNk","KlagevurderingMedAksjonspunktNfp"];export{Na as HjemsendtIKlageNk,Va as KlagevurderingMedAksjonspunktNfp,Ta as MedholdIKlageNk,Ra as OpphevIKlageNk,Aa as StadfestKlageNk,Ro as __namedExportsOrder,No as default};
