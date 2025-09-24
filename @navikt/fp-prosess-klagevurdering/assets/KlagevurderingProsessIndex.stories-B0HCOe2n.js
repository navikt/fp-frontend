import{g as vt,r as p,u as qe,_ as pr,s as Or,c as Ye,a as $,R as d,b as rr,d as on,e as gt,f as Ba,S as ft,h as be,Z as un,j as h,A as Et,i as dn,k as cn,o as mn,N as _t,l as vn,P as gn,t as ia,m as tr,n as fn,p as En,w as _n,q as hn}from"./iframe-Ds36Qp57.js";import{r as yn}from"./index-D-COtysI.js";import"./preload-helper-PPVm8Dsz.js";var ht=yn();const bn=vt(ht);function pn(e,t){var r=e.values,a=pr(e,["values"]),n=t.values,l=pr(t,["values"]);return Or(n,r)&&Or(a,l)}function yt(e){var t=qe(),r=t.formatMessage,a=t.textComponent,n=a===void 0?p.Fragment:a,l=e.id,i=e.description,s=e.defaultMessage,u=e.values,v=e.children,m=e.tagName,f=m===void 0?n:m,E=e.ignoreTag,K={id:l,description:i,defaultMessage:s},y=r(K,u,{ignoreTag:E});return typeof v=="function"?v(Array.isArray(y)?y:[y]):f?p.createElement(f,null,y):p.createElement(p.Fragment,null,y)}yt.displayName="FormattedMessage";var Y=p.memo(yt,pn);Y.displayName="MemoizedFormattedMessage";var ca=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ca||{}),je=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.FRITEKST_HTML="FRIHTM",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(je||{}),z=(e=>(e.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",e.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",e.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",e.AVVIS_KLAGE="AVVIS_KLAGE",e.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",e))(z||{}),Re=(e=>(e.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",e.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",e.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",e.UDEFINERT="-",e))(Re||{});const La=(e,t)=>{if(e==null)throw new Error("Data er ikke oppgitt");return e},$e=e=>Ye({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var On=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const nr=p.forwardRef((e,t)=>{var{className:r,size:a="medium",as:n="p",spacing:l,truncate:i,weight:s="regular",align:u,visuallyHidden:v,textColor:m}=e,f=On(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=$();return d.createElement(n,Object.assign({},f,{ref:t,className:E(r,"navds-body-long",`navds-body-long--${a}`,$e({spacing:l,truncate:i,weight:s,align:u,visuallyHidden:v,textColor:m}))}))});var Sn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const X=p.forwardRef((e,t)=>{var{className:r,size:a="medium",as:n="p",spacing:l,truncate:i,weight:s="regular",align:u,visuallyHidden:v,textColor:m}=e,f=Sn(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=$();return d.createElement(n,Object.assign({},f,{ref:t,className:E(r,"navds-body-short",`navds-body-short--${a}`,$e({spacing:l,truncate:i,weight:s,align:u,visuallyHidden:v,textColor:m}))}))});var Kn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const kn=p.forwardRef((e,t)=>{var{className:r,size:a="medium",spacing:n,uppercase:l,as:i="p",truncate:s,weight:u="regular",align:v,visuallyHidden:m,textColor:f}=e,E=Kn(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:K}=$();return d.createElement(i,Object.assign({},E,{ref:t,className:K(r,"navds-detail",$e({spacing:n,truncate:s,weight:u,align:v,visuallyHidden:m,textColor:f,uppercase:l}),{"navds-detail--small":a==="small"})}))});var Tn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ha=p.forwardRef((e,t)=>{var{children:r,className:a,size:n,spacing:l,as:i="p",showIcon:s=!1}=e,u=Tn(e,["children","className","size","spacing","as","showIcon"]);const{cn:v}=$();return d.createElement(i,Object.assign({},u,{ref:t,className:v("navds-error-message","navds-label",a,$e({spacing:l}),{"navds-label--small":n==="small","navds-error-message--show-icon":s})}),s&&d.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var An=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const lr=p.forwardRef((e,t)=>{var{level:r="1",size:a,className:n,as:l,spacing:i,align:s,visuallyHidden:u,textColor:v}=e,m=An(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:f}=$(),E=l??`h${r}`;return d.createElement(E,Object.assign({},m,{ref:t,className:f(n,"navds-heading",`navds-heading--${a}`,$e({spacing:i,align:s,visuallyHidden:u,textColor:v}))}))});var Nn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};p.forwardRef((e,t)=>{var{className:r,spacing:a,as:n="p"}=e,l=Nn(e,["className","spacing","as"]);const{cn:i}=$();return d.createElement(n,Object.assign({},l,{ref:t,className:i(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var Rn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const fe=p.forwardRef((e,t)=>{var{className:r,size:a="medium",as:n="label",spacing:l,visuallyHidden:i,textColor:s}=e,u=Rn(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:v}=$();return d.createElement(n,Object.assign({},u,{ref:t,className:v(r,"navds-label",$e({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":a==="small"})}))});function bt(e,t=166,r=!1){let a;function n(...l){const i=()=>{a=void 0,e.apply(this,l)};!a&&r&&i(),clearTimeout(a),a=setTimeout(i,t)}return n.clear=()=>{clearTimeout(a)},n}function Ee(e,t){const r=Object.entries(e).filter(([a])=>!t.includes(a));return Object.fromEntries(r)}const Sr=globalThis?.document?p.useLayoutEffect:()=>{};let Kr=0;function Vn(e){const[t,r]=p.useState(e),a=e||t;return p.useEffect(()=>{t==null&&(Kr+=1,r(`aksel-id-${Kr}`))},[t]),a}const kr=d.useId;function Ie(e){var t;return kr!==void 0?kr().replace(/(:)/g,""):(t=Vn(e))!==null&&t!==void 0?t:""}function Tr(e,t=[]){const r=p.useRef(e);return p.useEffect(()=>{r.current=e}),p.useCallback(((...a)=>{var n;return(n=r.current)===null||n===void 0?void 0:n.call(r,...a)}),t)}function Ln({value:e,defaultValue:t,onChange:r}){const a=Tr(r),[n,l]=p.useState(t),i=e!==void 0,s=i?e:n,u=Tr(v=>{const f=typeof v=="function"?v(s):v;i||l(f),a(f)},[i,a,s]);return[s,u]}let Ar=0;function Dn(e){const[t,r]=p.useState(e),a=e||t;return p.useEffect(()=>{t==null&&(Ar+=1,r(`aksel-icon-${Ar}`))},[t]),a}const Nr=d.useId;function Te(e){var t;return Nr!==void 0?Nr().replace(/(:)/g,""):(t=Dn(e))!==null&&t!==void 0?t:""}var In=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const wn=p.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=In(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Pn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const xn=p.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Pn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Mn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const pt=p.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Mn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Fn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Gn=p.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Fn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var jn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Bn=p.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=jn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Hn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ot=p.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Hn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Un=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Cn=p.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Un(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var qn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const St=p.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=qn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Yn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const $n=p.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Yn(e,["title","titleId"]);let l=Te();return l=r?a||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function He(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),r===!1||!n.defaultPrevented)return t?.(n)}}const[zn,Kt]=rr({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Wa(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Qe(e){return(t,r)=>{const a=r?.context?String(r.context):"standalone";let n;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=r?.width?String(r.width):i;n=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=r?.width?String(r.width):e.defaultWidth;n=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(t):t;return n[l]}}function ea(e){return(t,r={})=>{const a=r.width,n=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=t.match(n);if(!l)return null;const i=l[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?Jn(s,f=>f.test(i)):Wn(s,f=>f.test(i));let v;v=e.valueCallback?e.valueCallback(u):u,v=r.valueCallback?r.valueCallback(v):v;const m=t.slice(i.length);return{value:v,rest:m}}}function Wn(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function Jn(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Zn(e){return(t,r={})=>{const a=t.match(e.matchPattern);if(!a)return null;const n=a[0],l=t.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=r.valueCallback?r.valueCallback(i):i;const s=t.slice(n.length);return{value:i,rest:s}}}const Xn={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Qn=(e,t,r)=>{let a;const n=Xn[e];return typeof n=="string"?a=n:t===1?a=n.one:a=n.other.replace("{{count}}",String(t)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},el={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},al={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},rl={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},tl={date:Wa({formats:el,defaultWidth:"full"}),time:Wa({formats:al,defaultWidth:"full"}),dateTime:Wa({formats:rl,defaultWidth:"full"})},nl={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},ll=(e,t,r,a)=>nl[e],il={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},sl={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},ol={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ul={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},dl={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},cl=(e,t)=>Number(e)+".",ml={ordinalNumber:cl,era:Qe({values:il,defaultWidth:"wide"}),quarter:Qe({values:sl,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Qe({values:ol,defaultWidth:"wide"}),day:Qe({values:ul,defaultWidth:"wide"}),dayPeriod:Qe({values:dl,defaultWidth:"wide"})},vl=/^(\d+)\.?/i,gl=/\d+/i,fl={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},El={any:[/^f/i,/^e/i]},_l={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},hl={any:[/1/i,/2/i,/3/i,/4/i]},yl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},bl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},pl={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Ol={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Sl={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Kl={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},kl={ordinalNumber:Zn({matchPattern:vl,parsePattern:gl,valueCallback:e=>parseInt(e,10)}),era:ea({matchPatterns:fl,defaultMatchWidth:"wide",parsePatterns:El,defaultParseWidth:"any"}),quarter:ea({matchPatterns:_l,defaultMatchWidth:"wide",parsePatterns:hl,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ea({matchPatterns:yl,defaultMatchWidth:"wide",parsePatterns:bl,defaultParseWidth:"any"}),day:ea({matchPatterns:pl,defaultMatchWidth:"wide",parsePatterns:Ol,defaultParseWidth:"any"}),dayPeriod:ea({matchPatterns:Sl,defaultMatchWidth:"any",parsePatterns:Kl,defaultParseWidth:"any"})},Tl={code:"nb",formatDistance:Qn,formatLong:tl,formatRelative:ll,localize:ml,match:kl,options:{weekStartsOn:1,firstWeekContainsDate:4}},Al={global:{dateLocale:Tl,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Nl=p.createContext({locale:Al}),kt=()=>p.useContext(Nl);function Rl(){return typeof window<"u"}function Vl(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ll(e){return Rl()?e instanceof Element||e instanceof Vl(e).Element:!1}const Rr=/(\w+)/g;function Dl(e,t){const r=Array.isArray(e)?e:Il(e);for(const a of t){if(!a)continue;let n=a;for(let l=0;l<r.length;l++){const i=n[r[l]];i!==void 0&&(n=i)}if(typeof n=="string")return n}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Il(e){const t=[];let r=Rr.exec(e);for(;r;){const[,a,n]=r;t.push(a||n),r=Rr.exec(e)}return t}const wl=/{[^}]*}/g;function ma(e,...t){const r=kt(),a=r.translations||[],n=[...t,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],r.locale[e]];return(i,s)=>{const u=Dl(i,n);return s?u.replace(wl,v=>{const m=v.substring(1,v.length-1);if(s[m]===void 0){const f=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${m}'. The following replacements were passed: '${f}'`)}return s[m]}):u}}var Pl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const xl=p.forwardRef((e,t)=>{var{className:r,size:a="medium",title:n,transparent:l=!1,variant:i="neutral",id:s,"data-color":u}=e,v=Pl(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:m}=$(),f=Ie(),E=ma("Loader");return d.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${f}`,ref:t,className:m("navds-loader",r,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":u??Ml(i)},Ee(v,["children"]),{"data-variant":i}),d.createElement("title",{id:s??`loader-${f}`},n||E("title")),d.createElement("circle",{className:m("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),d.createElement("circle",{className:m("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Ml(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Fl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ue=p.forwardRef((e,t)=>{var{as:r="button",variant:a="primary",className:n,children:l,size:i="medium",loading:s=!1,disabled:u,icon:v,iconPosition:m="left",onKeyUp:f,"data-color":E}=e,K=Fl(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:y}=$(),V=u||s?Ee(K,["href"]):K,_=S=>{S.key===" "&&!u&&!s&&S.currentTarget.click()};return d.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":E??Gl(a),"data-variant":jl(a)},V,{ref:t,onKeyUp:He(f,_),className:y(n,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!v&&!l,"navds-button--disabled":u??s}),disabled:u??s?!0:void 0}),v&&m==="left"&&d.createElement("span",{className:y("navds-button__icon")},v),s&&d.createElement(xl,{size:i}),l&&d.createElement(fe,{as:"span",size:i==="medium"?"medium":"small"},l),v&&m==="right"&&d.createElement("span",{className:y("navds-button__icon")},v))});function Gl(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function jl(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var Bl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Hl={error:$n,warning:Gn,info:Bn,success:xn},Ul=p.forwardRef((e,t)=>{var{children:r,className:a,variant:n,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:u=!1,closeButton:v=!1,onClose:m}=e,f=Bl(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:E}=$(),K=ma("Alert"),y=Hl[n];return d.createElement("div",Object.assign({},f,{"data-color":Cl(n),"data-variant":n,ref:t,className:E(a,"navds-alert",`navds-alert--${n}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":u,"navds-alert--close-button":v})}),d.createElement(y,{title:K(n),className:E("navds-alert__icon")}),d.createElement(nr,{as:"div",size:l,className:E("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},r),v&&!u&&d.createElement("div",{className:E("navds-alert__button-wrapper")},d.createElement(Ue,{className:E("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:m,type:"button",icon:d.createElement(St,{title:["error","warning"].includes(n)?K("closeAlert"):K("closeMessage")})})))});function Cl(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}var Da=typeof document<"u"?p.useLayoutEffect:p.useEffect;const ql={...on};let Vr=!1,Yl=0;const Lr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Yl++;function $l(){const[e,t]=p.useState(()=>Vr?Lr():void 0);return Da(()=>{e==null&&t(Lr())},[]),p.useEffect(()=>{Vr=!0},[]),e}const zl=ql.useId,Wl=zl||$l;function Jl(e){return"data-floating-ui-"+e}const Zl=p.createContext(null),Dr=Jl("portal");function Xl(e){e===void 0&&(e={});const{id:t,root:r}=e,a=Wl(),n=Ql(),[l,i]=p.useState(null),s=p.useRef(null);return Da(()=>()=>{l?.remove(),queueMicrotask(()=>{s.current=null})},[l]),Da(()=>{if(!a||s.current)return;const u=t?document.getElementById(t):null;if(!u)return;const v=document.createElement("div");v.id=a,v.setAttribute(Dr,""),u.appendChild(v),s.current=v,i(v)},[t,a]),Da(()=>{if(r===null||!a||s.current)return;let u=r||n?.portalNode;u&&!Ll(u)&&(u=u.current),u=u||document.body;let v=null;t&&(v=document.createElement("div"),v.id=t,u.appendChild(v));const m=document.createElement("div");m.id=a,m.setAttribute(Dr,""),u=v||u,u.appendChild(m),s.current=m,i(m)},[t,r,a,n]),l}const Ql=()=>p.useContext(Zl),ir=()=>{const{cn:e}=$();return d.createElement(Ot,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Tt=()=>{const{cn:e}=$();return d.createElement(Ot,{title:ma("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var ei=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const ai=p.forwardRef((e,t)=>{var{className:r,header:a,children:n,open:l,defaultOpen:i=!1,onClick:s,size:u="medium",onOpenChange:v}=e,m=ei(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:f}=$(),[E,K]=Ln({defaultValue:i,value:l,onChange:v}),y=u==="small"?"small":"medium";return d.createElement("div",{className:f("navds-read-more",`navds-read-more--${u}`,r,{"navds-read-more--open":E}),"data-volume":"low"},d.createElement("button",Object.assign({},m,{ref:t,type:"button",className:f("navds-read-more__button","navds-body-short",{"navds-body-short--small":u==="small"}),onClick:He(s,()=>K(V=>!V)),"aria-expanded":E,"data-state":E?"open":"closed"}),d.createElement(pt,{className:f("navds-read-more__expand-icon"),"aria-hidden":!0}),d.createElement("span",null,a)),d.createElement(nr,{as:"div","aria-hidden":!E,className:f("navds-read-more__content",{"navds-read-more__content--closed":!E}),size:y,"data-state":E?"open":"closed"},n))}),wa=p.createContext(null),va=(e,t)=>{var r,a,n;const{size:l,error:i,errorId:s}=e,u=p.useContext(wa),v=Ie(),m=(r=e.id)!==null&&r!==void 0?r:`${t}-${v}`,f=s??`${t}-error-${v}`,E=`${t}-description-${v}`,K=u?.disabled||e.disabled,y=(u?.readOnly||e.readOnly)&&!K||void 0,V=!K&&!y&&!!(i||u?.error),_=!K&&!y&&!!i&&typeof i!="boolean",S=Object.assign({},V?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:_,hasError:V,errorId:f,inputDescriptionId:E,size:(a=l??u?.size)!==null&&a!==void 0?a:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:m},S),{"aria-describedby":Ye(e["aria-describedby"],{[E]:e.description&&!Pa(e.description),[f]:_,[(n=u?.errorId)!==null&&n!==void 0?n:""]:V&&u?.error})||void 0,disabled:K})}};function Pa(e,t=!0){if(d.isValidElement(e)){if(e.type===ai)return!0;if(e.props.children&&t)return Pa(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>Pa(r,t));return!1}const[To,ri]=rr();var ti=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const[Ao,At]=rr({errorMessage:"useDateInputContext must be used with DateInputContext"}),Nt=p.forwardRef((e,t)=>{const{className:r,hideLabel:a=!1,label:n,description:l,variant:i="datepicker",setAnchorRef:s}=e,u=ti(e,["className","hideLabel","label","description","variant","setAnchorRef"]),v=p.useRef(null),m=ri().translate,{cn:f}=$(),E=i==="datepicker",K={prefix:E?"datepicker-input":"monthpicker-input",iconTitle:{open:E?"openDatePicker":"openMonthPicker",close:E?"closeDatePicker":"closeMonthPicker"}},y=At(),{inputProps:V,size:_="medium",inputDescriptionId:S,errorId:b,showErrorMsg:A,hasError:D,readOnly:N}=va(e,K.prefix);return d.createElement("div",{className:f(r,"navds-form-field",`navds-form-field--${_}`,"navds-date__field",{"navds-text-field--error":D,"navds-date__field--error":D,"navds-form-field--disabled":!!V.disabled,"navds-text-field--disabled":!!V.disabled,"navds-form-field--readonly":N,"navds-text-field--readonly":N,"navds-date__field--readonly":N})},d.createElement(fe,{htmlFor:V.id,size:_,className:f("navds-form-field__label",{"navds-sr-only":a})},N&&d.createElement(ir,null),n),!!l&&d.createElement(X,{as:"div",className:f("navds-form-field__description",{"navds-sr-only":a}),id:S,size:_},l),d.createElement("div",{className:f("navds-date__field-wrapper")},d.createElement("input",Object.assign({ref:t},Ee(u,["error","errorId","size"]),V,{autoComplete:"off","aria-controls":y?.open?y.ariaId:void 0,readOnly:N,className:f("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${_}`),size:E?11:14})),d.createElement("button",{disabled:V.disabled||N,tabIndex:N||y?.open?-1:0,onClick:()=>{y?.onOpen(),s?.(v.current)},type:"button",className:f("navds-date__field-button"),ref:v},d.createElement(wn,{title:m(K.iconTitle[y?.open?"close":"open"])}))),d.createElement("div",{className:f("navds-form-field__error"),id:b,"aria-relevant":"additions removals","aria-live":"polite"},A&&d.createElement(Ha,{size:_,showIcon:!0},e.error)))});p.forwardRef((e,t)=>d.createElement(Nt,Object.assign({},e,{ref:t})));p.forwardRef((e,t)=>d.createElement(Nt,Object.assign({},e,{variant:"monthpicker",ref:t})));var ni=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const li=p.forwardRef((e,t)=>{var{className:r}=e,a=ni(e,["className"]);const{cn:n}=$();return d.createElement("div",Object.assign({},a,{ref:t,className:n("navds-modal__body",r)}))});var ii=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const si=p.forwardRef((e,t)=>{var{className:r}=e,a=ii(e,["className"]);const{cn:n}=$();return d.createElement("div",Object.assign({},a,{ref:t,className:n("navds-modal__footer",r)}))});var oi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Rt=p.forwardRef((e,t)=>{var{children:r,className:a,closeButton:n=!0}=e,l=oi(e,["children","className","closeButton"]);const{cn:i}=$(),s=Kt(),u=ma("global");return d.createElement("div",Object.assign({},l,{ref:t,className:i("navds-modal__header",a)}),s.closeHandler&&n&&d.createElement(Ue,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:v=>{["Enter"," "].includes(v.key)&&v.repeat&&v.preventDefault()},onClick:s.closeHandler,icon:d.createElement(St,{title:u("close")})}),r)}),Ir=({clientX:e,clientY:t},{left:r,top:a,right:n,bottom:l})=>!(e<r||t<a||e>n||t>l);function ui(e,t,r){if(!(t&&t.closeButton===!1))return r?()=>{var a;return r()!==!1&&((a=e.current)===null||a===void 0?void 0:a.close())}:()=>{var a;return(a=e.current)===null||a===void 0?void 0:a.close()}}const pa="navds-modal__document-body",Oa="aksel-modal__document-body";function di(e,t,r){d.useEffect(()=>{if(r||!e.current||!t)return;e.current.open&&document.body.classList.add(Oa,pa);const a=new MutationObserver(()=>{var n;!((n=e.current)===null||n===void 0)&&n.open?document.body.classList.add(Oa,pa):document.body.classList.remove(Oa,pa)});return a.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{a.disconnect(),document.body.classList.remove(Oa,pa)}},[e,t,r])}const Be=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Vt(e,t){var r="on"+t.type.toLowerCase();return typeof e[r]=="function"&&e[r](t),e.dispatchEvent(t)}function sa(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Lt(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function ci(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1}function Ja(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Dt(e){var t=["button","input","keygen","select","textarea"],r=t.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var a=e.querySelector(r.join(", "));if(!a&&"attachShadow"in Element.prototype)for(var n=e.querySelectorAll("*"),l=0;l<n.length&&!(n[l].tagName&&n[l].shadowRoot&&(a=Dt(n[l].shadowRoot),a));l++);return a}function wr(e){return e.isConnected||document.body.contains(e)}function It(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var r=H.formSubmitter;if(!r){var a=e.target,n="getRootNode"in a&&a.getRootNode()||document;r=n.activeElement}return!r||r.form!==t?null:r}function mi(e){if(!e.defaultPrevented){var t=e.target,r=H.imagemapUseValue,a=It(e);r===null&&a&&(r=a.value);var n=sa(t);if(n){var l=a&&a.getAttribute("formmethod")||t.getAttribute("method");l==="dialog"&&(e.preventDefault(),r!=null?n.close(r):n.close())}}}function wt(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",mi,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,a=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),n,l=function(i){if(i.target===e){var s="DOMNodeRemoved";r|=i.type.substr(0,s.length)===s,window.clearTimeout(n),n=window.setTimeout(a,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,l)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}wt.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&wr(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),H.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Dt(this.dialog_)),Lt(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!wr(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!H.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,H.needsCentering(this.dialog_)?(H.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Vt(this.dialog_,t)}};var H={};H.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,r=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,r)+"px"};H.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var r=document.styleSheets[t],a=null;try{a=r.cssRules}catch{}if(a)for(var n=0;n<a.length;++n){var l=a[n],i=null;try{i=document.querySelectorAll(l.selectorText)}catch{}if(!(!i||!ci(i,e))){var s=l.style.getPropertyValue("top"),u=l.style.getPropertyValue("bottom");if(s&&s!=="auto"||u&&u!=="auto")return!0}}}return!1};H.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!H.isInlinePositionSetByStylesheet(e)};H.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new wt(e)};H.registerDialog=function(e){e.showModal||H.forceRegisterDialog(e)};H.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var r=[];t.forEach(function(a){for(var n=0,l;l=a.removedNodes[n];++n)l instanceof Element&&(l.localName==="dialog"&&r.push(l),r=r.concat(l.querySelectorAll("dialog")))}),r.length&&e(r)}))};H.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};H.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};H.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,r;r=this.pendingDialogStack[t];++t)r.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var a=this.pendingDialogStack[0];if(a){var n=a.dialog.parentNode||document.body;n.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};H.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=sa(e);){for(var t=0,r;r=this.pendingDialogStack[t];++t)if(r.dialog===e)return t===0;e=e.parentElement}return!1};H.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Lt(t),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],a=r.dialog,n=a.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};H.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&Vt(r.dialog,t)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};H.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};H.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};H.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Be&&(H.dm=new H.DialogManager,H.formSubmitter=null,H.imagemapUseValue=null);if(Be){var Pr=document.createElement("form");if(Pr.setAttribute("method","dialog"),Pr.method!=="dialog"){var Fe=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Fe){var vi=Fe.get;Fe.get=function(){return Ja(this)?"dialog":vi.call(this)};var gi=Fe.set;Fe.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):gi.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Fe)}}document.addEventListener("click",function(e){if(H.formSubmitter=null,H.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var r=e.composedPath();t=r.shift()||t}if(!(!t||!Ja(t.form))){var a=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!a){if(!(t.localName==="input"&&t.type==="image"))return;H.imagemapUseValue=e.offsetX+","+e.offsetY}var n=sa(t);n&&(H.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,r=sa(t);if(!r){var a=It(e),n=a&&a.getAttribute("formmethod")||t.getAttribute("method");n==="dialog"&&e.preventDefault()}});var fi=HTMLFormElement.prototype.submit,Ei=function(){if(!Ja(this))return fi.call(this);var e=sa(this);e&&e.close()};HTMLFormElement.prototype.submit=Ei}var _i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const da=p.forwardRef((e,t)=>{var r,a,{header:n,children:l,open:i,onBeforeClose:s,onCancel:u,closeOnBackdropClick:v,width:m,placement:f,portal:E,className:K,"aria-labelledby":y,style:V,onClick:_,onMouseDown:S}=e,b=_i(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:A}=$(),D=p.useRef(A("navds-modal--polyfilled")),N=p.useRef(null),C=gt(N,t),M=Ie(),q=(r=kt())===null||r===void 0?void 0:r.rootElement,P=Xl({root:q}),G=At(!1),F=Kt(!1)!==void 0;F&&!G&&console.error("Modals should not be nested"),p.useEffect(()=>{Be&&N.current&&P&&(H.registerDialog(N.current),N.current.classList.add(D.current)),N.current&&P&&(N.current.autofocus=!0)},[P]),p.useEffect(()=>{N.current&&P&&i!==void 0&&(i&&!N.current.open?N.current.showModal():!i&&N.current.open&&N.current.close())},[P,i]),di(N,P,F);const I=typeof m=="string"&&["small","medium"].includes(m),k=A("navds-modal",K,{[D.current]:Be,"navds-modal--autowidth":!m,[`navds-modal--${m}`]:I,"navds-modal--top":f==="top"&&!Be}),x=Object.assign(Object.assign({},V),I?{}:{width:m}),j=p.useRef({clientX:0,clientY:0}),B=me=>{j.current=me},ee=v&&!Be,ie=me=>{if(me.target!==N.current)return;const pe=N.current.getBoundingClientRect();Ir(j.current,pe)||Ir(me,pe)||s!==void 0&&s()===!1||N.current.close()},se=me=>{s&&s()===!1&&me.preventDefault()},_e=!y&&!b["aria-label"]&&n?M:y,te=d.createElement("dialog",Object.assign({},b,{ref:C,className:k,style:x,onCancel:He(u,se),onClick:ee?He(_,ie):_,onMouseDown:ee?He(S,B):S,"aria-labelledby":_e}),d.createElement(zn,{closeHandler:ui(N,n,s),ref:N},n&&d.createElement(Rt,null,n.label&&d.createElement(kn,{className:A("navds-modal__label")},n.label),d.createElement(lr,{size:(a=n.size)!==null&&a!==void 0?a:"medium",level:"1",id:M},n.icon&&d.createElement("span",{className:A("navds-modal__header-icon")},n.icon),n.heading)),l));return E?P?ht.createPortal(te,P):null:te});da.Header=Rt;da.Body=li;da.Footer=si;var hi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const yi=p.forwardRef((e,t)=>{const{inputProps:r,errorId:a,showErrorMsg:n,hasError:l,size:i,inputDescriptionId:s,readOnly:u}=va(e,"select"),{children:v,label:m,className:f,description:E,htmlSize:K,hideLabel:y=!1,style:V}=e,_=hi(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:S}=$(),b={onMouseDown:A=>{u&&(A.preventDefault(),A.target.focus())},onKeyDown:A=>{u&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(A.key)&&A.preventDefault()}};return d.createElement("div",{className:S(f,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":u,"navds-select--error":l,"navds-select--readonly":u})},d.createElement(fe,{htmlFor:r.id,size:i,className:S("navds-form-field__label",{"navds-sr-only":y})},u&&d.createElement(Tt,null),m),!!E&&d.createElement(X,{className:S("navds-form-field__description",{"navds-sr-only":y}),id:s,size:i,as:"div"},E),d.createElement("div",{className:S("navds-select__container"),style:V},d.createElement("select",Object.assign({},Ee(_,["error","errorId","size","readOnly"]),r,b,{ref:t,className:S("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:K}),v),d.createElement(pt,{className:S("navds-select__chevron"),"aria-hidden":!0})),d.createElement("div",{className:S("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},n&&d.createElement(Ha,{size:i,showIcon:!0},e.error)))});function le(e,t,r,a){return a?typeof a=="string"?{[`--__${e}c-${t}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([n,l])=>[`--__${e}c-${t}-${r}-${n}`,l])):{}}const bi={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},xr=(e,t,r,a,n,l)=>t.split(" ").map((i,s,u)=>{var v;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/u.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/u.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let m=`var(--${l}-${r}-${i})`;if(a.includes(i))m=i==="px"?"1px":i;else if(i.startsWith("space"))m=`var(--${l}-${i})`;else{const f=`--${l}-spacing-${i}`;m=`var(${(v=bi[f])!==null&&v!==void 0?v:f})`}return n?i==="0"?"0":`calc(-1 * ${m})`:m}).join(" ");function ge(e,t,r,a,n,l=!1,i=[]){if(!n)return{};if(typeof n=="string")return{[`--__${e}c-${t}-${r}-xs`]:xr(r,n,a,i,l,e)};const s={};return Object.entries(n).forEach(([u,v])=>{s[`--__${e}c-${t}-${r}-${u}`]=xr(r,v,a,i,l,e)}),s}const pi=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Oi=({children:e,className:t,padding:r,paddingInline:a,paddingBlock:n,margin:l,marginInline:i,marginBlock:s,width:u,minWidth:v,maxWidth:m,height:f,minHeight:E,maxHeight:K,position:y,inset:V,top:_,right:S,left:b,bottom:A,overflow:D,overflowX:N,overflowY:C,flexBasis:M,flexGrow:q,flexShrink:P,gridColumn:G})=>{const F=Ba(!1),{cn:I}=$(),k=F?.isDarkside?"ax":"a",x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ge(k,"r","p","spacing",r)),ge(k,"r","pi","spacing",a)),ge(k,"r","pb","spacing",n)),ge(k,"r","m","spacing",l)),ge(k,"r","mi","spacing",i)),ge(k,"r","mb","spacing",s)),le(k,"r","w",u)),le(k,"r","minw",v)),le(k,"r","maxw",m)),le(k,"r","h",f)),le(k,"r","minh",E)),le(k,"r","maxh",K)),le(k,"r","position",y)),ge(k,"r","inset","spacing",V)),ge(k,"r","top","spacing",_)),ge(k,"r","right","spacing",S)),ge(k,"r","bottom","spacing",A)),ge(k,"r","left","spacing",b)),le(k,"r","overflow",D)),le(k,"r","overflowx",N)),le(k,"r","overflowy",C)),le(k,"r","flex-basis",M)),le(k,"r","flex-grow",q)),le(k,"r","flex-shrink",P)),le(k,"r","grid-column",G));return d.createElement(ft,{className:I({className:t,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":n,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":u,"navds-r-minw":v,"navds-r-maxw":m,"navds-r-h":f,"navds-r-minh":E,"navds-r-maxh":K,"navds-r-position":y,"navds-r-inset":V,"navds-r-top":_,"navds-r-right":S,"navds-r-bottom":A,"navds-r-left":b,"navds-r-overflow":D,"navds-r-overflowx":N,"navds-r-overflowy":C,"navds-r-flex-basis":M,"navds-r-flex-grow":q,"navds-r-flex-shrink":P,"navds-r-grid-column":G}),style:x},e)};var Si=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Pt=p.forwardRef((e,t)=>{var{children:r,className:a,as:n="div",align:l,justify:i,wrap:s=!0,gap:u,style:v,direction:m="row",asChild:f}=e,E=Si(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const K=Ba(!1),y=K?.isDarkside?"ax":"a",{cn:V}=$(),_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},v),ge(y,"stack","gap","spacing",u)),le(y,"stack","direction",m)),le(y,"stack","align",l)),le(y,"stack","justify",i)),S=f?ft:n;return d.createElement(Oi,Object.assign({},E),d.createElement(S,Object.assign({},Ee(E,pi),{ref:t,style:_,className:V("navds-stack",a,{"navds-vstack":m==="column","navds-hstack":m==="row","navds-stack-gap":u,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":m,"navds-stack-wrap":s})}),r))});var Ki=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ce=p.forwardRef((e,t)=>{var{as:r="div"}=e,a=Ki(e,["as"]);return d.createElement(Pt,Object.assign({as:r},a,{ref:t,direction:"row"}))});var ki=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const ce=p.forwardRef((e,t)=>{var{as:r="div"}=e,a=ki(e,["as"]);return d.createElement(Pt,Object.assign({as:r},a,{ref:t,direction:"column",wrap:!1}))});var Ti=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ai=p.forwardRef((e,t)=>{var{as:r="a",className:a,underline:n=!0,variant:l,inlineText:i=!1,"data-color":s}=e,u=Ti(e,["as","className","underline","variant","inlineText","data-color"]);const v=Ba(!1),{cn:m}=$();let f;return v?.isDarkside?f=l:f=l??"action",d.createElement(r,Object.assign({"data-color":s??Ni(f),"data-variant":f},u,{ref:t,className:m("navds-link",a,{[`navds-link--${f}`]:f,"navds-link--remove-underline":!n,"navds-link--inline-text":i})}))});function Ni(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var Ri=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Vi=p.forwardRef((e,t)=>{var{children:r,className:a,variant:n,size:l="medium",icon:i,"data-color":s}=e,u=Ri(e,["children","className","variant","size","icon","data-color"]);const{cn:v}=$(),m=n?.endsWith("-filled")&&"strong",f=n?.endsWith("-moderate")&&"moderate";return d.createElement(X,Object.assign({"data-color":s??Li(n),"data-variant":m||f||"outline"},u,{ref:t,as:"span",size:l==="medium"?"medium":"small",className:v("navds-tag",a,`navds-tag--${n}`,`navds-tag--${l}`)}),i&&d.createElement("span",{className:v("navds-tag__icon--left")},i),r)});function Li(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const Di=(e,t)=>{const r=va(e,"fieldset");return Object.assign(Object.assign({},r),{inputProps:{"aria-labelledby":e["aria-labelledby"]||Ye(t,{[r.inputDescriptionId]:e.description&&!Pa(e.description)})}})};var Ii=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const wi=p.forwardRef((e,t)=>{var r,a,n;const l=Ie(),{inputProps:i,errorId:s,showErrorMsg:u,hasError:v,size:m,readOnly:f,inputDescriptionId:E}=Di(e,l),{cn:K}=$(),y=p.useContext(wa),{children:V,className:_,errorPropagation:S=!0,legend:b,description:A,hideLegend:D,nativeReadOnly:N=!0}=e,C=Ii(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return d.createElement(wa.Provider,{value:{error:S?(r=e.error)!==null&&r!==void 0?r:y?.error:void 0,errorId:Ye({[s]:u,[(a=y?.errorId)!==null&&a!==void 0?a:""]:!!y?.error}),size:m,disabled:(n=e.disabled)!==null&&n!==void 0?n:!1,readOnly:f}},d.createElement("fieldset",Object.assign({},Ee(C,["errorId","error","size","readOnly"]),i,{ref:t,className:K(_,"navds-fieldset",`navds-fieldset--${m}`,{"navds-fieldset--error":v,"navds-fieldset--readonly":f})}),d.createElement(fe,{id:l,size:m,as:"legend",className:K("navds-fieldset__legend",{"navds-sr-only":!!D})},f&&(N?d.createElement(ir,null):d.createElement(Tt,null)),b),!!A&&d.createElement(X,{className:K("navds-fieldset__description",{"navds-sr-only":!!D}),id:E,size:m??"medium",as:"div"},e.description),V,d.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:K("navds-fieldset__error")},u&&d.createElement(Ha,{size:m,showIcon:!0},e.error))))});var Pi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const xt=d.createContext(null),xi=p.forwardRef((e,t)=>{var r,a,{children:n,className:l,name:i,defaultValue:s,value:u,onChange:v=()=>{},required:m,readOnly:f}=e,E=Pi(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:K}=$(),y=p.useContext(wa),V=Ie();return d.createElement(wi,Object.assign({},E,{readOnly:f,ref:t,className:K(l,"navds-radio-group",`navds-radio-group--${(a=(r=E.size)!==null&&r!==void 0?r:y?.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),d.createElement(xt.Provider,{value:{name:i??`radioGroupName-${V}`,defaultValue:s,value:u,onChange:v,required:m}},d.createElement("div",{className:K("navds-radio-buttons")},n)))});var Mi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Fi=e=>{const t=p.useContext(xt),r=va(Ee(e,["description"]),"radio"),{inputProps:a,readOnly:n}=r,l=Mi(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:n,inputProps:Object.assign(Object.assign({},a),{name:t?.name,defaultChecked:t?.defaultValue===void 0?void 0:t?.defaultValue===e.value,checked:t?.value===void 0?void 0:t?.value===e.value,onChange:i=>{var s,u;n||((s=e.onChange)===null||s===void 0||s.call(e,i),(u=t?.onChange)===null||u===void 0||u.call(t,e.value))},onClick:i=>{var s;if(n){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:t?.required,type:"radio"})})},aa=p.forwardRef((e,t)=>{const{cn:r}=$(),{inputProps:a,size:n,hasError:l,readOnly:i}=Fi(e),s=Ie(),u=Ba(!1);return u?.isDarkside?d.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${n}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},d.createElement("input",Object.assign({},Ee(e,["children","size","description","readOnly"]),Ee(a,["aria-invalid","aria-describedby"]),{"aria-describedby":Ye(a["aria-describedby"],{[s]:e.description}),className:r("navds-radio__input"),ref:t})),d.createElement(X,{as:"label",htmlFor:a.id,className:r("navds-radio__label"),size:n},e.children),e.description&&d.createElement(X,{id:s,size:n,className:r("navds-form-field__subdescription navds-radio__description")},e.description)):d.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${n}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},d.createElement("input",Object.assign({},Ee(e,["children","size","description","readOnly"]),Ee(a,["aria-invalid"]),{className:r("navds-radio__input"),ref:t})),d.createElement("label",{htmlFor:a.id,className:r("navds-radio__label")},d.createElement("span",{className:r("navds-radio__content")},d.createElement(X,{as:"span",size:n},e.children),e.description&&d.createElement(X,{as:"span",size:n,className:r("navds-form-field__subdescription navds-radio__description")},e.description))))});var Gi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Mr=(e,t,r)=>{const{outerHeightStyle:a,overflow:n}=t;return r.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==n)?(r.current+=1,t):e},Fr=e=>(e?.ownerDocument||document).defaultView||window;function Sa(e){return parseInt(e,10)||0}const ji=p.forwardRef((e,t)=>{var r,a,{className:n,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:u,style:v,value:m}=e,f=Gi(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:E}=p.useRef(m!=null),K=p.useRef(null),y=gt(K,t),V=p.useRef(null),_=p.useRef(0),[S,b]=p.useState({outerHeightStyle:0}),A=d.useCallback(()=>{const M=K.current,P=Fr(M).getComputedStyle(M);if(P.width==="0px")return{outerHeightStyle:0};const G=V.current;G.style.width=P.width,G.value=M.value||f.placeholder||"x",G.value.slice(-1)===`
`&&(G.value+=" ");const F=P.boxSizing,I=Sa(P.paddingBottom)+Sa(P.paddingTop),k=Sa(P.borderBottomWidth)+Sa(P.borderTopWidth),x=G.scrollHeight-I;G.value="x";const j=G.scrollHeight-I;let B=x;s&&(B=Math.max(Number(s)*j,B)),i&&(B=Math.min(Number(i)*j,B)),B=Math.max(B,j);const ee=B+(F==="border-box"?I+k:0),ie=Math.abs(B-x)<=1;return{outerHeightStyle:ee,overflow:ie}},[i,s,f.placeholder]),D=()=>{const M=A();Gr(M)||b(q=>Mr(q,M,_))};Sr(()=>{const M=()=>{const I=A();Gr(I)||bn.flushSync(()=>{b(k=>Mr(k,I,_))})},q=bt(()=>{var I,k,x;if(_.current=0,!((I=K.current)===null||I===void 0)&&I.style.height||!((k=K.current)===null||k===void 0)&&k.style.width){((x=K.current)===null||x===void 0?void 0:x.style.overflow)==="hidden"&&b(j=>Object.assign(Object.assign({},j),{overflow:!1}));return}M()},166,!0),P=K.current,G=Fr(P);G.addEventListener("resize",q);let F;return typeof ResizeObserver<"u"&&(F=new ResizeObserver(q),F.observe(P)),()=>{q.clear(),G.removeEventListener("resize",q),F&&F.disconnect()}},[A]),Sr(()=>{D()}),p.useEffect(()=>{_.current=0},[m]);const N=M=>{_.current=0,E||D(),l&&l(M)},C=Object.assign({"--__ac-textarea-height":S.outerHeightStyle+"px","--__axc-textarea-height":S.outerHeightStyle+"px",overflow:S.overflow&&!u&&!(!((r=K.current)===null||r===void 0)&&r.style.height)&&!(!((a=K.current)===null||a===void 0)&&a.style.width)?"hidden":void 0},v);return d.createElement(d.Fragment,null,d.createElement("textarea",Object.assign({value:m,onChange:N,ref:y,rows:s,style:C},f,{className:n})),d.createElement("textarea",{"aria-hidden":!0,className:n,readOnly:!0,ref:V,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},v)}))});function Gr(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Bi=({maxLengthId:e,maxLength:t,currentLength:r,size:a,i18n:n})=>{const{cn:l}=$(),i=ma("Textarea",{charsLeft:n?.counterLeft?`{chars} ${n.counterLeft}`:void 0,charsTooMany:n?.counterTooMuch?`{chars} ${n.counterTooMuch}`:void 0}),s=t-r,[u,v]=p.useState(s);return p.useEffect(()=>{const m=bt(()=>{v(s)},2e3);return m(),()=>{m.clear()}},[s]),d.createElement(d.Fragment,null,d.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:t})),s<20&&d.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},jr(u,i)),d.createElement(X,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:a},jr(s,i)))},jr=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Hi=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ui=p.forwardRef((e,t)=>{var r,a,n;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:u,size:v,inputDescriptionId:m}=va(e,"textarea"),{label:f,className:E,description:K,maxLength:y,hideLabel:V=!1,resize:_,UNSAFE_autoScrollbar:S,i18n:b,readOnly:A}=e,D=Hi(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:N}=$(),C=Ie(),M=y!==void 0&&y>0,[q,P]=p.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),G=()=>{let I=D?.minRows?D?.minRows:3;return v==="small"&&(I=D?.minRows?D?.minRows:2),I},F=Ye(l["aria-describedby"],{[C??""]:M});return d.createElement("div",{className:N(E,"navds-form-field",`navds-form-field--${v}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":A,"navds-textarea--readonly":A,"navds-textarea--error":u,"navds-textarea--autoscrollbar":S,[`navds-textarea--resize-${_===!0?"both":_}`]:_})},d.createElement(fe,{htmlFor:l.id,size:v,className:N("navds-form-field__label",{"navds-sr-only":V})},A&&d.createElement(ir,null),f),!!K&&d.createElement(X,{className:N("navds-form-field__description",{"navds-sr-only":V}),id:m,size:v,as:"div"},K),d.createElement(ji,Object.assign({},Ee(D,["error","errorId","size"]),l,{onChange:He(e.onChange,e.value===void 0?I=>P(I.target.value):void 0),minRows:G(),autoScrollbar:S,ref:t,readOnly:A,className:N("navds-textarea__input","navds-body-short",`navds-body-short--${v??"medium"}`)},F?{"aria-describedby":F}:{})),M&&!A&&!l.disabled&&d.createElement(Bi,{maxLengthId:C,maxLength:y,currentLength:(n=(a=e.value)===null||a===void 0?void 0:a.length)!==null&&n!==void 0?n:q.length,size:v,i18n:b}),d.createElement("div",{className:N("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&d.createElement(Ha,{size:v,showIcon:!0},e.error)))});var ga=e=>e.type==="checkbox",De=e=>e instanceof Date,oe=e=>e==null;const Mt=e=>typeof e=="object";var Q=e=>!oe(e)&&!Array.isArray(e)&&Mt(e)&&!De(e),Ft=e=>Q(e)&&e.target?ga(e.target)?e.target.checked:e.target.value:e,Ci=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Gt=(e,t)=>e.has(Ci(t)),qi=e=>{const t=e.constructor&&e.constructor.prototype;return Q(t)&&t.hasOwnProperty("isPrototypeOf")},sr=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function re(e){let t;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(!(sr&&(e instanceof Blob||a))&&(r||Q(e)))if(t=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!qi(e))t=e;else for(const n in e)e.hasOwnProperty(n)&&(t[n]=re(e[n]));else return e;return t}var Ua=e=>/^\w*$/.test(e),Z=e=>e===void 0,or=e=>Array.isArray(e)?e.filter(Boolean):[],ur=e=>or(e.replace(/["|']|\]/g,"").split(/\.|\[/)),R=(e,t,r)=>{if(!t||!Q(e))return r;const a=(Ua(t)?[t]:ur(t)).reduce((n,l)=>oe(n)?n:n[l],e);return Z(a)||a===e?Z(e[t])?r:e[t]:a},de=e=>typeof e=="boolean",J=(e,t,r)=>{let a=-1;const n=Ua(t)?[t]:ur(t),l=n.length,i=l-1;for(;++a<l;){const s=n[a];let u=r;if(a!==i){const v=e[s];u=Q(v)||Array.isArray(v)?v:isNaN(+n[a+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=u,e=e[s]}};const xa={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},he={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},dr=d.createContext(null);dr.displayName="HookFormContext";const Ae=()=>d.useContext(dr),Yi=e=>{const{children:t,...r}=e;return d.createElement(dr.Provider,{value:r},t)};var jt=(e,t,r,a=!0)=>{const n={defaultValues:t._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const i=l;return t._proxyFormState[i]!==he.all&&(t._proxyFormState[i]=!a||he.all),r&&(r[i]=!0),e[i]}});return n};const cr=typeof window<"u"?d.useLayoutEffect:d.useEffect;function $i(e){const t=Ae(),{control:r=t.control,disabled:a,name:n,exact:l}=e||{},[i,s]=d.useState(r._formState),u=d.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return cr(()=>r._subscribe({name:n,formState:u.current,exact:l,callback:v=>{!a&&s({...r._formState,...v})}}),[n,a,l]),d.useEffect(()=>{u.current.isValid&&r._setValid(!0)},[r]),d.useMemo(()=>jt(i,r,u.current,!1),[i,r])}var Oe=e=>typeof e=="string",Bt=(e,t,r,a,n)=>Oe(e)?(a&&t.watch.add(e),R(r,e,n)):Array.isArray(e)?e.map(l=>(a&&t.watch.add(l),R(r,l))):(a&&(t.watchAll=!0),r),Qa=e=>oe(e)||!Mt(e);function Ke(e,t,r=new WeakSet){if(Qa(e)||Qa(t))return e===t;if(De(e)&&De(t))return e.getTime()===t.getTime();const a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;if(r.has(e)||r.has(t))return!0;r.add(e),r.add(t);for(const l of a){const i=e[l];if(!n.includes(l))return!1;if(l!=="ref"){const s=t[l];if(De(i)&&De(s)||Q(i)&&Q(s)||Array.isArray(i)&&Array.isArray(s)?!Ke(i,s,r):i!==s)return!1}}return!0}function zi(e){const t=Ae(),{control:r=t.control,name:a,defaultValue:n,disabled:l,exact:i,compute:s}=e||{},u=d.useRef(n),v=d.useRef(s),m=d.useRef(void 0);v.current=s;const f=d.useMemo(()=>r._getWatch(a,u.current),[r,a]),[E,K]=d.useState(v.current?v.current(f):f);return cr(()=>r._subscribe({name:a,formState:{values:!0},exact:i,callback:y=>{if(!l){const V=Bt(a,r._names,y.values||r._formValues,!1,u.current);if(v.current){const _=v.current(V);Ke(_,m.current)||(K(_),m.current=_)}else K(V)}}}),[r,l,a,i]),d.useEffect(()=>r._removeUnmounted()),E}function mr(e){const t=Ae(),{name:r,disabled:a,control:n=t.control,shouldUnregister:l,defaultValue:i}=e,s=Gt(n._names.array,r),u=d.useMemo(()=>R(n._formValues,r,R(n._defaultValues,r,i)),[n,r,i]),v=zi({control:n,name:r,defaultValue:u,exact:!0}),m=$i({control:n,name:r,exact:!0}),f=d.useRef(e),E=d.useRef(n.register(r,{...e.rules,value:v,...de(e.disabled)?{disabled:e.disabled}:{}}));f.current=e;const K=d.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!R(m.errors,r)},isDirty:{enumerable:!0,get:()=>!!R(m.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!R(m.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!R(m.validatingFields,r)},error:{enumerable:!0,get:()=>R(m.errors,r)}}),[m,r]),y=d.useCallback(b=>E.current.onChange({target:{value:Ft(b),name:r},type:xa.CHANGE}),[r]),V=d.useCallback(()=>E.current.onBlur({target:{value:R(n._formValues,r),name:r},type:xa.BLUR}),[r,n._formValues]),_=d.useCallback(b=>{const A=R(n._fields,r);A&&b&&(A._f.ref={focus:()=>b.focus&&b.focus(),select:()=>b.select&&b.select(),setCustomValidity:D=>b.setCustomValidity(D),reportValidity:()=>b.reportValidity()})},[n._fields,r]),S=d.useMemo(()=>({name:r,value:v,...de(a)||m.disabled?{disabled:m.disabled||a}:{},onChange:y,onBlur:V,ref:_}),[r,a,m.disabled,y,V,_,v]);return d.useEffect(()=>{const b=n._options.shouldUnregister||l;n.register(r,{...f.current.rules,...de(f.current.disabled)?{disabled:f.current.disabled}:{}});const A=(D,N)=>{const C=R(n._fields,D);C&&C._f&&(C._f.mount=N)};if(A(r,!0),b){const D=re(R(n._options.defaultValues,r));J(n._defaultValues,r,D),Z(R(n._formValues,r))&&J(n._formValues,r,D)}return!s&&n.register(r),()=>{(s?b&&!n._state.action:b)?n.unregister(r):A(r,!1)}},[r,n,s,l]),d.useEffect(()=>{n._setDisabledField({disabled:a,name:r})},[a,r,n]),d.useMemo(()=>({field:S,formState:m,fieldState:K}),[S,m,K])}var Wi=(e,t,r,a,n)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:n||!0}}:{},oa=e=>Array.isArray(e)?e:[e],Br=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}},ue=e=>Q(e)&&!Object.keys(e).length,vr=e=>e.type==="file",ye=e=>typeof e=="function",Ma=e=>{if(!sr)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ht=e=>e.type==="select-multiple",gr=e=>e.type==="radio",Ji=e=>gr(e)||ga(e),Za=e=>Ma(e)&&e.isConnected;function Zi(e,t){const r=t.slice(0,-1).length;let a=0;for(;a<r;)e=Z(e)?a++:e[t[a++]];return e}function Xi(e){for(const t in e)if(e.hasOwnProperty(t)&&!Z(e[t]))return!1;return!0}function ae(e,t){const r=Array.isArray(t)?t:Ua(t)?[t]:ur(t),a=r.length===1?e:Zi(e,r),n=r.length-1,l=r[n];return a&&delete a[l],n!==0&&(Q(a)&&ue(a)||Array.isArray(a)&&Xi(a))&&ae(e,r.slice(0,-1)),e}var Ut=e=>{for(const t in e)if(ye(e[t]))return!0;return!1};function Fa(e,t={}){const r=Array.isArray(e);if(Q(e)||r)for(const a in e)Array.isArray(e[a])||Q(e[a])&&!Ut(e[a])?(t[a]=Array.isArray(e[a])?[]:{},Fa(e[a],t[a])):oe(e[a])||(t[a]=!0);return t}function Ct(e,t,r){const a=Array.isArray(e);if(Q(e)||a)for(const n in e)Array.isArray(e[n])||Q(e[n])&&!Ut(e[n])?Z(t)||Qa(r[n])?r[n]=Array.isArray(e[n])?Fa(e[n],[]):{...Fa(e[n])}:Ct(e[n],oe(t)?{}:t[n],r[n]):r[n]=!Ke(e[n],t[n]);return r}var ra=(e,t)=>Ct(e,t,Fa(t));const Hr={value:!1,isValid:!1},Ur={value:!0,isValid:!0};var qt=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Z(e[0].attributes.value)?Z(e[0].value)||e[0].value===""?Ur:{value:e[0].value,isValid:!0}:Ur:Hr}return Hr},Yt=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>Z(e)?e:t?e===""?NaN:e&&+e:r&&Oe(e)?new Date(e):a?a(e):e;const Cr={isValid:!1,value:null};var $t=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,Cr):Cr;function qr(e){const t=e.ref;return vr(t)?t.files:gr(t)?$t(e.refs).value:Ht(t)?[...t.selectedOptions].map(({value:r})=>r):ga(t)?qt(e.refs).value:Yt(Z(t.value)?e.ref.value:t.value,e)}var Qi=(e,t,r,a)=>{const n={};for(const l of e){const i=R(t,l);i&&J(n,l,i._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:a}},Ga=e=>e instanceof RegExp,ta=e=>Z(e)?e:Ga(e)?e.source:Q(e)?Ga(e.value)?e.value.source:e.value:e,Yr=e=>({isOnSubmit:!e||e===he.onSubmit,isOnBlur:e===he.onBlur,isOnChange:e===he.onChange,isOnAll:e===he.all,isOnTouch:e===he.onTouched});const $r="AsyncFunction";var es=e=>!!e&&!!e.validate&&!!(ye(e.validate)&&e.validate.constructor.name===$r||Q(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===$r)),as=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),zr=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ua=(e,t,r,a)=>{for(const n of r||Object.keys(e)){const l=R(e,n);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&t(i.refs[0],n)&&!a)return!0;if(i.ref&&t(i.ref,i.name)&&!a)return!0;if(ua(s,t))break}else if(Q(s)&&ua(s,t))break}}};function Wr(e,t,r){const a=R(e,r);if(a||Ua(r))return{error:a,name:r};const n=r.split(".");for(;n.length;){const l=n.join("."),i=R(t,l),s=R(e,l);if(i&&!Array.isArray(i)&&r!==l)return{name:r};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};n.pop()}return{name:r}}var rs=(e,t,r,a)=>{r(e);const{name:n,...l}=e;return ue(l)||Object.keys(l).length>=Object.keys(t).length||Object.keys(l).find(i=>t[i]===(!a||he.all))},ts=(e,t,r)=>!e||!t||e===t||oa(e).some(a=>a&&(r?a===t:a.startsWith(t)||t.startsWith(a))),ns=(e,t,r,a,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(t||e):(r?a.isOnBlur:n.isOnBlur)?!e:(r?a.isOnChange:n.isOnChange)?e:!0,ls=(e,t)=>!or(R(e,t)).length&&ae(e,t),is=(e,t,r)=>{const a=oa(R(e,r));return J(a,"root",t[r]),J(e,r,a),e},Ia=e=>Oe(e);function Jr(e,t,r="validate"){if(Ia(e)||Array.isArray(e)&&e.every(Ia)||de(e)&&!e)return{type:r,message:Ia(e)?e:"",ref:t}}var Ge=e=>Q(e)&&!Ga(e)?e:{value:e,message:""},Zr=async(e,t,r,a,n,l)=>{const{ref:i,refs:s,required:u,maxLength:v,minLength:m,min:f,max:E,pattern:K,validate:y,name:V,valueAsNumber:_,mount:S}=e._f,b=R(r,V);if(!S||t.has(V))return{};const A=s?s[0]:i,D=I=>{n&&A.reportValidity&&(A.setCustomValidity(de(I)?"":I||""),A.reportValidity())},N={},C=gr(i),M=ga(i),q=C||M,P=(_||vr(i))&&Z(i.value)&&Z(b)||Ma(i)&&i.value===""||b===""||Array.isArray(b)&&!b.length,G=Wi.bind(null,V,a,N),F=(I,k,x,j=Se.maxLength,B=Se.minLength)=>{const ee=I?k:x;N[V]={type:I?j:B,message:ee,ref:i,...G(I?j:B,ee)}};if(l?!Array.isArray(b)||!b.length:u&&(!q&&(P||oe(b))||de(b)&&!b||M&&!qt(s).isValid||C&&!$t(s).isValid)){const{value:I,message:k}=Ia(u)?{value:!!u,message:u}:Ge(u);if(I&&(N[V]={type:Se.required,message:k,ref:A,...G(Se.required,k)},!a))return D(k),N}if(!P&&(!oe(f)||!oe(E))){let I,k;const x=Ge(E),j=Ge(f);if(!oe(b)&&!isNaN(b)){const B=i.valueAsNumber||b&&+b;oe(x.value)||(I=B>x.value),oe(j.value)||(k=B<j.value)}else{const B=i.valueAsDate||new Date(b),ee=_e=>new Date(new Date().toDateString()+" "+_e),ie=i.type=="time",se=i.type=="week";Oe(x.value)&&b&&(I=ie?ee(b)>ee(x.value):se?b>x.value:B>new Date(x.value)),Oe(j.value)&&b&&(k=ie?ee(b)<ee(j.value):se?b<j.value:B<new Date(j.value))}if((I||k)&&(F(!!I,x.message,j.message,Se.max,Se.min),!a))return D(N[V].message),N}if((v||m)&&!P&&(Oe(b)||l&&Array.isArray(b))){const I=Ge(v),k=Ge(m),x=!oe(I.value)&&b.length>+I.value,j=!oe(k.value)&&b.length<+k.value;if((x||j)&&(F(x,I.message,k.message),!a))return D(N[V].message),N}if(K&&!P&&Oe(b)){const{value:I,message:k}=Ge(K);if(Ga(I)&&!b.match(I)&&(N[V]={type:Se.pattern,message:k,ref:i,...G(Se.pattern,k)},!a))return D(k),N}if(y){if(ye(y)){const I=await y(b,r),k=Jr(I,A);if(k&&(N[V]={...k,...G(Se.validate,k.message)},!a))return D(k.message),N}else if(Q(y)){let I={};for(const k in y){if(!ue(I)&&!a)break;const x=Jr(await y[k](b,r),A,k);x&&(I={...x,...G(k,x.message)},D(x.message),a&&(N[V]=I))}if(!ue(I)&&(N[V]={ref:A,...I},!a))return N}}return D(!0),N};const ss={mode:he.onSubmit,reValidateMode:he.onChange,shouldFocusError:!0};function os(e={}){let t={...ss,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:ye(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},a={},n=Q(t.defaultValues)||Q(t.values)?re(t.defaultValues||t.values)||{}:{},l=t.shouldUnregister?{}:re(n),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},u,v=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let f={...m};const E={array:Br(),state:Br()},K=t.criteriaMode===he.all,y=o=>c=>{clearTimeout(v),v=setTimeout(o,c)},V=async o=>{if(!t.disabled&&(m.isValid||f.isValid||o)){const c=t.resolver?ue((await M()).errors):await P(a,!0);c!==r.isValid&&E.state.next({isValid:c})}},_=(o,c)=>{!t.disabled&&(m.isValidating||m.validatingFields||f.isValidating||f.validatingFields)&&((o||Array.from(s.mount)).forEach(g=>{g&&(c?J(r.validatingFields,g,c):ae(r.validatingFields,g))}),E.state.next({validatingFields:r.validatingFields,isValidating:!ue(r.validatingFields)}))},S=(o,c=[],g,L,T=!0,O=!0)=>{if(L&&g&&!t.disabled){if(i.action=!0,O&&Array.isArray(R(a,o))){const w=g(R(a,o),L.argA,L.argB);T&&J(a,o,w)}if(O&&Array.isArray(R(r.errors,o))){const w=g(R(r.errors,o),L.argA,L.argB);T&&J(r.errors,o,w),ls(r.errors,o)}if((m.touchedFields||f.touchedFields)&&O&&Array.isArray(R(r.touchedFields,o))){const w=g(R(r.touchedFields,o),L.argA,L.argB);T&&J(r.touchedFields,o,w)}(m.dirtyFields||f.dirtyFields)&&(r.dirtyFields=ra(n,l)),E.state.next({name:o,isDirty:F(o,c),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else J(l,o,c)},b=(o,c)=>{J(r.errors,o,c),E.state.next({errors:r.errors})},A=o=>{r.errors=o,E.state.next({errors:r.errors,isValid:!1})},D=(o,c,g,L)=>{const T=R(a,o);if(T){const O=R(l,o,Z(g)?R(n,o):g);Z(O)||L&&L.defaultChecked||c?J(l,o,c?O:qr(T._f)):x(o,O),i.mount&&V()}},N=(o,c,g,L,T)=>{let O=!1,w=!1;const U={name:o};if(!t.disabled){if(!g||L){(m.isDirty||f.isDirty)&&(w=r.isDirty,r.isDirty=U.isDirty=F(),O=w!==U.isDirty);const W=Ke(R(n,o),c);w=!!R(r.dirtyFields,o),W?ae(r.dirtyFields,o):J(r.dirtyFields,o,!0),U.dirtyFields=r.dirtyFields,O=O||(m.dirtyFields||f.dirtyFields)&&w!==!W}if(g){const W=R(r.touchedFields,o);W||(J(r.touchedFields,o,g),U.touchedFields=r.touchedFields,O=O||(m.touchedFields||f.touchedFields)&&W!==g)}O&&T&&E.state.next(U)}return O?U:{}},C=(o,c,g,L)=>{const T=R(r.errors,o),O=(m.isValid||f.isValid)&&de(c)&&r.isValid!==c;if(t.delayError&&g?(u=y(()=>b(o,g)),u(t.delayError)):(clearTimeout(v),u=null,g?J(r.errors,o,g):ae(r.errors,o)),(g?!Ke(T,g):T)||!ue(L)||O){const w={...L,...O&&de(c)?{isValid:c}:{},errors:r.errors,name:o};r={...r,...w},E.state.next(w)}},M=async o=>{_(o,!0);const c=await t.resolver(l,t.context,Qi(o||s.mount,a,t.criteriaMode,t.shouldUseNativeValidation));return _(o),c},q=async o=>{const{errors:c}=await M(o);if(o)for(const g of o){const L=R(c,g);L?J(r.errors,g,L):ae(r.errors,g)}else r.errors=c;return c},P=async(o,c,g={valid:!0})=>{for(const L in o){const T=o[L];if(T){const{_f:O,...w}=T;if(O){const U=s.array.has(O.name),W=T._f&&es(T._f);W&&m.validatingFields&&_([L],!0);const ve=await Zr(T,s.disabled,l,K,t.shouldUseNativeValidation&&!c,U);if(W&&m.validatingFields&&_([L]),ve[O.name]&&(g.valid=!1,c))break;!c&&(R(ve,O.name)?U?is(r.errors,ve,O.name):J(r.errors,O.name,ve[O.name]):ae(r.errors,O.name))}!ue(w)&&await P(w,c,g)}}return g.valid},G=()=>{for(const o of s.unMount){const c=R(a,o);c&&(c._f.refs?c._f.refs.every(g=>!Za(g)):!Za(c._f.ref))&&ze(o)}s.unMount=new Set},F=(o,c)=>!t.disabled&&(o&&c&&J(l,o,c),!Ke(_e(),n)),I=(o,c,g)=>Bt(o,s,{...i.mount?l:Z(c)?n:Oe(o)?{[o]:c}:c},g,c),k=o=>or(R(i.mount?l:n,o,t.shouldUnregister?R(n,o,[]):[])),x=(o,c,g={})=>{const L=R(a,o);let T=c;if(L){const O=L._f;O&&(!O.disabled&&J(l,o,Yt(c,O)),T=Ma(O.ref)&&oe(c)?"":c,Ht(O.ref)?[...O.ref.options].forEach(w=>w.selected=T.includes(w.value)):O.refs?ga(O.ref)?O.refs.forEach(w=>{(!w.defaultChecked||!w.disabled)&&(Array.isArray(T)?w.checked=!!T.find(U=>U===w.value):w.checked=T===w.value||!!T)}):O.refs.forEach(w=>w.checked=w.value===T):vr(O.ref)?O.ref.value="":(O.ref.value=T,O.ref.type||E.state.next({name:o,values:re(l)})))}(g.shouldDirty||g.shouldTouch)&&N(o,T,g.shouldTouch,g.shouldDirty,!0),g.shouldValidate&&se(o)},j=(o,c,g)=>{for(const L in c){if(!c.hasOwnProperty(L))return;const T=c[L],O=o+"."+L,w=R(a,O);(s.array.has(o)||Q(T)||w&&!w._f)&&!De(T)?j(O,T,g):x(O,T,g)}},B=(o,c,g={})=>{const L=R(a,o),T=s.array.has(o),O=re(c);J(l,o,O),T?(E.array.next({name:o,values:re(l)}),(m.isDirty||m.dirtyFields||f.isDirty||f.dirtyFields)&&g.shouldDirty&&E.state.next({name:o,dirtyFields:ra(n,l),isDirty:F(o,O)})):L&&!L._f&&!oe(O)?j(o,O,g):x(o,O,g),zr(o,s)&&E.state.next({...r,name:o}),E.state.next({name:i.mount?o:void 0,values:re(l)})},ee=async o=>{i.mount=!0;const c=o.target;let g=c.name,L=!0;const T=R(a,g),O=W=>{L=Number.isNaN(W)||De(W)&&isNaN(W.getTime())||Ke(W,R(l,g,W))},w=Yr(t.mode),U=Yr(t.reValidateMode);if(T){let W,ve;const ba=c.type?qr(T._f):Ft(o),Ne=o.type===xa.BLUR||o.type===xa.FOCUS_OUT,nn=!as(T._f)&&!t.resolver&&!R(r.errors,g)&&!T._f.deps||ns(Ne,R(r.touchedFields,g),r.isSubmitted,U,w),$a=zr(g,s,Ne);J(l,g,ba),Ne?(!c||!c.readOnly)&&(T._f.onBlur&&T._f.onBlur(o),u&&u(0)):T._f.onChange&&T._f.onChange(o);const za=N(g,ba,Ne),ln=!ue(za)||$a;if(!Ne&&E.state.next({name:g,type:o.type,values:re(l)}),nn)return(m.isValid||f.isValid)&&(t.mode==="onBlur"?Ne&&V():Ne||V()),ln&&E.state.next({name:g,...$a?{}:za});if(!Ne&&$a&&E.state.next({...r}),t.resolver){const{errors:yr}=await M([g]);if(O(ba),L){const sn=Wr(r.errors,a,g),br=Wr(yr,a,sn.name||g);W=br.error,g=br.name,ve=ue(yr)}}else _([g],!0),W=(await Zr(T,s.disabled,l,K,t.shouldUseNativeValidation))[g],_([g]),O(ba),L&&(W?ve=!1:(m.isValid||f.isValid)&&(ve=await P(a,!0)));L&&(T._f.deps&&se(T._f.deps),C(g,ve,W,za))}},ie=(o,c)=>{if(R(r.errors,c)&&o.focus)return o.focus(),1},se=async(o,c={})=>{let g,L;const T=oa(o);if(t.resolver){const O=await q(Z(o)?o:T);g=ue(O),L=o?!T.some(w=>R(O,w)):g}else o?(L=(await Promise.all(T.map(async O=>{const w=R(a,O);return await P(w&&w._f?{[O]:w}:w)}))).every(Boolean),!(!L&&!r.isValid)&&V()):L=g=await P(a);return E.state.next({...!Oe(o)||(m.isValid||f.isValid)&&g!==r.isValid?{}:{name:o},...t.resolver||!o?{isValid:g}:{},errors:r.errors}),c.shouldFocus&&!L&&ua(a,ie,o?T:s.mount),L},_e=o=>{const c={...i.mount?l:n};return Z(o)?c:Oe(o)?R(c,o):o.map(g=>R(c,g))},te=(o,c)=>({invalid:!!R((c||r).errors,o),isDirty:!!R((c||r).dirtyFields,o),error:R((c||r).errors,o),isValidating:!!R(r.validatingFields,o),isTouched:!!R((c||r).touchedFields,o)}),me=o=>{o&&oa(o).forEach(c=>ae(r.errors,c)),E.state.next({errors:o?r.errors:{}})},pe=(o,c,g)=>{const L=(R(a,o,{_f:{}})._f||{}).ref,T=R(r.errors,o)||{},{ref:O,message:w,type:U,...W}=T;J(r.errors,o,{...W,...c,ref:L}),E.state.next({name:o,errors:r.errors,isValid:!1}),g&&g.shouldFocus&&L&&L.focus&&L.focus()},qa=(o,c)=>ye(o)?E.state.subscribe({next:g=>"values"in g&&o(I(void 0,c),g)}):I(o,c,!0),_a=o=>E.state.subscribe({next:c=>{ts(o.name,c.name,o.exact)&&rs(c,o.formState||m,Xe,o.reRenderRoot)&&o.callback({values:{...l},...r,...c,defaultValues:n})}}).unsubscribe,Ya=o=>(i.mount=!0,f={...f,...o.formState},_a({...o,formState:f})),ze=(o,c={})=>{for(const g of o?oa(o):s.mount)s.mount.delete(g),s.array.delete(g),c.keepValue||(ae(a,g),ae(l,g)),!c.keepError&&ae(r.errors,g),!c.keepDirty&&ae(r.dirtyFields,g),!c.keepTouched&&ae(r.touchedFields,g),!c.keepIsValidating&&ae(r.validatingFields,g),!t.shouldUnregister&&!c.keepDefaultValue&&ae(n,g);E.state.next({values:re(l)}),E.state.next({...r,...c.keepDirty?{isDirty:F()}:{}}),!c.keepIsValid&&V()},ha=({disabled:o,name:c})=>{(de(o)&&i.mount||o||s.disabled.has(c))&&(o?s.disabled.add(c):s.disabled.delete(c))},we=(o,c={})=>{let g=R(a,o);const L=de(c.disabled)||de(t.disabled);return J(a,o,{...g||{},_f:{...g&&g._f?g._f:{ref:{name:o}},name:o,mount:!0,...c}}),s.mount.add(o),g?ha({disabled:de(c.disabled)?c.disabled:t.disabled,name:o}):D(o,!0,c.value),{...L?{disabled:c.disabled||t.disabled}:{},...t.progressive?{required:!!c.required,min:ta(c.min),max:ta(c.max),minLength:ta(c.minLength),maxLength:ta(c.maxLength),pattern:ta(c.pattern)}:{},name:o,onChange:ee,onBlur:ee,ref:T=>{if(T){we(o,c),g=R(a,o);const O=Z(T.value)&&T.querySelectorAll&&T.querySelectorAll("input,select,textarea")[0]||T,w=Ji(O),U=g._f.refs||[];if(w?U.find(W=>W===O):O===g._f.ref)return;J(a,o,{_f:{...g._f,...w?{refs:[...U.filter(Za),O,...Array.isArray(R(n,o))?[{}]:[]],ref:{type:O.type,name:o}}:{ref:O}}}),D(o,!1,void 0,O)}else g=R(a,o,{}),g._f&&(g._f.mount=!1),(t.shouldUnregister||c.shouldUnregister)&&!(Gt(s.array,o)&&i.action)&&s.unMount.add(o)}}},Pe=()=>t.shouldFocusError&&ua(a,ie,s.mount),We=o=>{de(o)&&(E.state.next({disabled:o}),ua(a,(c,g)=>{const L=R(a,g);L&&(c.disabled=L._f.disabled||o,Array.isArray(L._f.refs)&&L._f.refs.forEach(T=>{T.disabled=L._f.disabled||o}))},0,!1))},xe=(o,c)=>async g=>{let L;g&&(g.preventDefault&&g.preventDefault(),g.persist&&g.persist());let T=re(l);if(E.state.next({isSubmitting:!0}),t.resolver){const{errors:O,values:w}=await M();r.errors=O,T=re(w)}else await P(a);if(s.disabled.size)for(const O of s.disabled)ae(T,O);if(ae(r.errors,"root"),ue(r.errors)){E.state.next({errors:{}});try{await o(T,g)}catch(O){L=O}}else c&&await c({...r.errors},g),Pe(),setTimeout(Pe);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ue(r.errors)&&!L,submitCount:r.submitCount+1,errors:r.errors}),L)throw L},Je=(o,c={})=>{R(a,o)&&(Z(c.defaultValue)?B(o,re(R(n,o))):(B(o,c.defaultValue),J(n,o,re(c.defaultValue))),c.keepTouched||ae(r.touchedFields,o),c.keepDirty||(ae(r.dirtyFields,o),r.isDirty=c.defaultValue?F(o,re(R(n,o))):F()),c.keepError||(ae(r.errors,o),m.isValid&&V()),E.state.next({...r}))},Ve=(o,c={})=>{const g=o?re(o):n,L=re(g),T=ue(o),O=T?n:L;if(c.keepDefaultValues||(n=g),!c.keepValues){if(c.keepDirtyValues){const w=new Set([...s.mount,...Object.keys(ra(n,l))]);for(const U of Array.from(w))R(r.dirtyFields,U)?J(O,U,R(l,U)):B(U,R(O,U))}else{if(sr&&Z(o))for(const w of s.mount){const U=R(a,w);if(U&&U._f){const W=Array.isArray(U._f.refs)?U._f.refs[0]:U._f.ref;if(Ma(W)){const ve=W.closest("form");if(ve){ve.reset();break}}}}if(c.keepFieldsRef)for(const w of s.mount)B(w,R(O,w));else a={}}l=t.shouldUnregister?c.keepDefaultValues?re(n):{}:re(O),E.array.next({values:{...O}}),E.state.next({values:{...O}})}s={mount:c.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!m.isValid||!!c.keepIsValid||!!c.keepDirtyValues,i.watch=!!t.shouldUnregister,E.state.next({submitCount:c.keepSubmitCount?r.submitCount:0,isDirty:T?!1:c.keepDirty?r.isDirty:!!(c.keepDefaultValues&&!Ke(o,n)),isSubmitted:c.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:T?{}:c.keepDirtyValues?c.keepDefaultValues&&l?ra(n,l):r.dirtyFields:c.keepDefaultValues&&o?ra(n,o):c.keepDirty?r.dirtyFields:{},touchedFields:c.keepTouched?r.touchedFields:{},errors:c.keepErrors?r.errors:{},isSubmitSuccessful:c.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:n})},Le=(o,c)=>Ve(ye(o)?o(l):o,c),Ze=(o,c={})=>{const g=R(a,o),L=g&&g._f;if(L){const T=L.refs?L.refs[0]:L.ref;T.focus&&(T.focus(),c.shouldSelect&&ye(T.select)&&T.select())}},Xe=o=>{r={...r,...o}},Me={control:{register:we,unregister:ze,getFieldState:te,handleSubmit:xe,setError:pe,_subscribe:_a,_runSchema:M,_focusError:Pe,_getWatch:I,_getDirty:F,_setValid:V,_setFieldArray:S,_setDisabledField:ha,_setErrors:A,_getFieldArray:k,_reset:Ve,_resetDefaultValues:()=>ye(t.defaultValues)&&t.defaultValues().then(o=>{Le(o,t.resetOptions),E.state.next({isLoading:!1})}),_removeUnmounted:G,_disableForm:We,_subjects:E,_proxyFormState:m,get _fields(){return a},get _formValues(){return l},get _state(){return i},set _state(o){i=o},get _defaultValues(){return n},get _names(){return s},set _names(o){s=o},get _formState(){return r},get _options(){return t},set _options(o){t={...t,...o}}},subscribe:Ya,trigger:se,register:we,handleSubmit:xe,watch:qa,setValue:B,getValues:_e,reset:Le,resetField:Je,clearErrors:me,unregister:ze,setError:pe,setFocus:Ze,getFieldState:te};return{...Me,formControl:Me}}function us(e={}){const t=d.useRef(void 0),r=d.useRef(void 0),[a,n]=d.useState({isDirty:!1,isValidating:!1,isLoading:ye(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:ye(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:a},e.defaultValues&&!ye(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=os(e);t.current={...s,formState:a}}const l=t.current.control;return l._options=e,cr(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>n({...l._formState}),reRenderRoot:!0});return n(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),d.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),d.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),d.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),d.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),d.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==a.isDirty&&l._subjects.state.next({isDirty:i})}},[l,a.isDirty]),d.useEffect(()=>{e.values&&!Ke(e.values,r.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),r.current=e.values,n(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),d.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),t.current.formState=jt(a,l),t.current}function ds(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xr={exports:{}},na={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr;function cs(){if(Qr)return na;Qr=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,n,l){var i=null;if(l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),"key"in n){l={};for(var s in n)s!=="key"&&(l[s]=n[s])}else l=n;return n=l.ref,{$$typeof:e,type:a,key:i,ref:n!==void 0?n:null,props:l}}return na.Fragment=t,na.jsx=r,na.jsxs=r,na}var et;function ms(){return et||(et=1,Xr.exports=cs()),Xr.exports}var ke=ms();const vs=({children:e})=>{const t=p.Children.toArray(e);return t.length===0?null:ke.jsx(Ul,{variant:"warning",size:"small",children:ke.jsx(ce,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:t.map(r=>ke.jsx(X,{size:"small",children:r},gs(r)))})})},gs=e=>{if(p.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},fa={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};be(fa);const ja="var(--ax-bg-neutral-strong)",zt=4,fs=(e,t,r)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${ja};
    border-radius: ${zt}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${ja};
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
    border: 1px solid ${ja};
    border-radius: ${zt}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${ja};
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
`,_s=(e,t,r,a)=>t?Es(e,r,a):fs(e,r,a),hs=(e,t,r)=>r?"":t?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,ys=({children:e,alignOffset:t=0,alignLeft:r=!1,marginTop:a=0,marginLeft:n=0,hideBorder:l=!1})=>ke.jsxs(ke.Fragment,{children:[ke.jsx("style",{dangerouslySetInnerHTML:{__html:_s(t,r,a,n)}}),ke.jsx("div",{className:hs(t,r,l),children:e})]});var at={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var rt;function bs(){return rt||(rt=1,(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=n(l,a.call(this,s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)t.call(l,s)&&l[s]&&(i=n(i,this&&this[s]||s));return i}function n(l,i){return i?l?l+" "+i:l+i:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(at)),at.exports}var ps=bs();const fr=ds(ps),Os="_borderbox_1a0x6_1",Ss="_error_1a0x6_5",Ks="_warning_1a0x6_8",ks={borderbox:Os,error:Ss,warning:Ks};fr.bind(ks);const Ts="_aksjonspunkt_11wjs_1",As="_erAksjonspunktApent_11wjs_4",Ns="_erIkkeGodkjentAvBeslutter_11wjs_8",Rs={aksjonspunkt:Ts,erAksjonspunktApent:As,erIkkeGodkjentAvBeslutter:Ns};fr.bind(Rs);be(fa);be(fa);const Vs="_divider_1jpov_1",Ls="_dividerParagraf_1jpov_8",Ds="_leftPanel_1jpov_11",Is="_rightPanel_1jpov_14",ws={divider:Vs,dividerParagraf:Ls,leftPanel:Ds,rightPanel:Is};fr.bind(ws);const Wt=()=>ke.jsx("span",{"data-testid":"editedIcon",children:ke.jsx(Cn,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});be(fa);be(fa);var Xa={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var tt;function Ps(){return tt||(tt=1,(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=n(l,a(s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)t.call(l,s)&&l[s]&&(i=n(i,s));return i}function n(l,i){return i?l?l+" "+i:l+i:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Xa)),Xa.exports}var xs=Ps();const Ms=vt(xs);function Fs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nt={exports:{}},la={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt;function Gs(){if(lt)return la;lt=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,n,l){var i=null;if(l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),"key"in n){l={};for(var s in n)s!=="key"&&(l[s]=n[s])}else l=n;return n=l.ref,{$$typeof:e,type:a,key:i,ref:n!==void 0?n:null,props:l}}return la.Fragment=t,la.jsx=r,la.jsxs=r,la}var it;function js(){return it||(it=1,nt.exports=Gs()),nt.exports}var ne=js();const Er=e=>e.reduce((t,r,a)=>({...t,[a]:n=>r(n)||!0}),{}),_r=(e,t)=>t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e)?.message;var er={exports:{}},Bs=er.exports,st;function Hs(){return st||(st=1,(function(e,t){(function(r,a){e.exports=a()})(Bs,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,u={},v=function(_){return(_=+_)+(_>68?1900:2e3)},m=function(_){return function(S){this[_]=+S}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=(function(S){if(!S||S==="Z")return 0;var b=S.match(/([+-]|\d\d)/g),A=60*b[1]+(+b[2]||0);return A===0?0:b[0]==="+"?-A:A})(_)}],E=function(_){var S=u[_];return S&&(S.indexOf?S:S.s.concat(S.f))},K=function(_,S){var b,A=u.meridiem;if(A){for(var D=1;D<=24;D+=1)if(_.indexOf(A(D,0,S))>-1){b=D>12;break}}else b=_===(S?"pm":"PM");return b},y={A:[s,function(_){this.afternoon=K(_,!1)}],a:[s,function(_){this.afternoon=K(_,!0)}],Q:[n,function(_){this.month=3*(_-1)+1}],S:[n,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[i,m("seconds")],ss:[i,m("seconds")],m:[i,m("minutes")],mm:[i,m("minutes")],H:[i,m("hours")],h:[i,m("hours")],HH:[i,m("hours")],hh:[i,m("hours")],D:[i,m("day")],DD:[l,m("day")],Do:[s,function(_){var S=u.ordinal,b=_.match(/\d+/);if(this.day=b[0],S)for(var A=1;A<=31;A+=1)S(A).replace(/\[|\]/g,"")===_&&(this.day=A)}],w:[i,m("week")],ww:[l,m("week")],M:[i,m("month")],MM:[l,m("month")],MMM:[s,function(_){var S=E("months"),b=(E("monthsShort")||S.map(function(A){return A.slice(0,3)})).indexOf(_)+1;if(b<1)throw new Error;this.month=b%12||b}],MMMM:[s,function(_){var S=E("months").indexOf(_)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(_){this.year=v(_)}],YYYY:[/\d{4}/,m("year")],Z:f,ZZ:f};function V(_){var S,b;S=_,b=u&&u.formats;for(var A=(_=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,F,I){var k=I&&I.toUpperCase();return F||b[I]||r[I]||b[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,j,B){return j||B.slice(1)})})).match(a),D=A.length,N=0;N<D;N+=1){var C=A[N],M=y[C],q=M&&M[0],P=M&&M[1];A[N]=P?{regex:q,parser:P}:C.replace(/^\[|\]$/g,"")}return function(G){for(var F={},I=0,k=0;I<D;I+=1){var x=A[I];if(typeof x=="string")k+=x.length;else{var j=x.regex,B=x.parser,ee=G.slice(k),ie=j.exec(ee)[0];B.call(F,ie),G=G.replace(ie,"")}}return(function(se){var _e=se.afternoon;if(_e!==void 0){var te=se.hours;_e?te<12&&(se.hours+=12):te===12&&(se.hours=0),delete se.afternoon}})(F),F}}return function(_,S,b){b.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(v=_.parseTwoDigitYear);var A=S.prototype,D=A.parse;A.parse=function(N){var C=N.date,M=N.utc,q=N.args;this.$u=M;var P=q[1];if(typeof P=="string"){var G=q[2]===!0,F=q[3]===!0,I=G||F,k=q[2];F&&(k=q[2]),u=this.$locale(),!G&&k&&(u=b.Ls[k]),this.$d=(function(ee,ie,se,_e){try{if(["x","X"].indexOf(ie)>-1)return new Date((ie==="X"?1e3:1)*ee);var te=V(ie)(ee),me=te.year,pe=te.month,qa=te.day,_a=te.hours,Ya=te.minutes,ze=te.seconds,ha=te.milliseconds,we=te.zone,Pe=te.week,We=new Date,xe=qa||(me||pe?1:We.getDate()),Je=me||We.getFullYear(),Ve=0;me&&!pe||(Ve=pe>0?pe-1:We.getMonth());var Le,Ze=_a||0,Xe=Ya||0,ya=ze||0,Me=ha||0;return we?new Date(Date.UTC(Je,Ve,xe,Ze,Xe,ya,Me+60*we.offset*1e3)):se?new Date(Date.UTC(Je,Ve,xe,Ze,Xe,ya,Me)):(Le=new Date(Je,Ve,xe,Ze,Xe,ya,Me),Pe&&(Le=_e(Le).week(Pe).toDate()),Le)}catch{return new Date("")}})(C,P,M,b),this.init(),k&&k!==!0&&(this.$L=this.locale(k).$L),I&&C!=this.format(P)&&(this.$d=new Date("")),u={}}else if(P instanceof Array)for(var x=P.length,j=1;j<=x;j+=1){q[1]=P[j-1];var B=b.apply(this,q);if(B.isValid()){this.$d=B.$d,this.$L=B.$L,this.init();break}j===x&&(this.$d=new Date(""))}else D.call(this,N)}}})})(er)),er.exports}var Us=Hs();const Cs=Fs(Us),qs="_textarea_14c7r_1",Ys="_readOnlyField_14c7r_7",ot={textarea:qs,readOnlyField:Ys},$s=e=>e!=null&&e!=="",Jt=({label:e,value:t,isEdited:r=!1,type:a,hideLabel:n,size:l})=>$s(t)?ne.jsxs(ce,{gap:"space-4",children:[e&&!n&&ne.jsx(fe,{size:l,children:e}),ne.jsxs(Ce,{gap:"space-8",align:"center",wrap:!1,children:[ne.jsx(nr,{className:a==="textarea"?ot.textarea:ot.readOnlyField,size:l,children:t}),r&&ne.jsx(Wt,{})]})]}):null;un.extend(Cs);const zs="_noReadOnlyIcon_11vhl_2",Ws={noReadOnlyIcon:zs},ut=({label:e,description:t,validate:r=[],onChange:a,children:n,className:l,isReadOnly:i=!1,size:s="small",isEdited:u=!1,hideLegend:v=!1,...m})=>{const{name:f,control:E}=m,{formState:{errors:K}}=Ae(),{field:y}=mr({name:f,control:E,rules:{validate:Er(r)}});return ne.jsx(xi,{name:f,value:y.value!==void 0?y.value:null,legend:ne.jsxs(Ce,{justify:"center",gap:"space-8",children:[e,i&&u&&ne.jsx(Wt,{})]}),hideLegend:v,"aria-readonly":i,readOnly:i,description:t,size:s,error:_r(K,f),onChange:V=>{a&&a(V),y.onChange(V)},className:Ms(l,Ws.noReadOnlyIcon),children:n})},dt=({label:e,selectValues:t,validate:r=[],readOnly:a=!1,description:n,hideValueOnDisable:l=!1,onChange:i,className:s,hideLabel:u,isEdited:v,size:m="small",...f})=>{const{name:E,control:K,disabled:y}=f,{formState:{errors:V}}=Ae(),{field:_}=mr({name:E,control:K,rules:{validate:p.useMemo(()=>Er(r),[r])}});if(a){const A=t.map(N=>N.props).find(N=>N.value===_.value),D=A?A.children:void 0;return ne.jsx(Jt,{value:D,label:e,hideLabel:u,isEdited:v,size:m})}const S=_.value||"",b=!t.map(A=>A.props.value).includes(S)&&S!=="";return b&&console.warn(`No corresponding option found for value '${S}'`),ne.jsxs(yi,{size:m,className:s,error:_r(V,E),label:e,description:n,value:l&&y||b?"":_.value,disabled:y,onChange:A=>{i&&i(A),_.onChange(A)},hideLabel:u,children:[ne.jsx("option",{style:{display:"none"}}),",",t]})},Js="_textAreaFieldWithBadges_bdz0b_1",Zs="_etikettWrapper_bdz0b_4",ct={textAreaFieldWithBadges:Js,etikettWrapper:Zs},Zt=({name:e,control:t,label:r,readOnly:a,maxLength:n,badges:l,validate:i=[],parse:s=K=>K,className:u,description:v,isEdited:m,size:f="small",...E})=>{const{formState:{errors:K}}=Ae(),{field:y}=mr({name:e,control:t,rules:{validate:p.useMemo(()=>Er(i),[i])}});return a?ne.jsx(Jt,{size:f,label:r,value:y.value,type:"textarea",isEdited:m,hideLabel:E.hideLabel}):ne.jsxs("div",{className:l?ct.textAreaFieldWithBadges:null,children:[l&&ne.jsx("div",{className:ct.etikettWrapper,children:l.map(({type:V,titleText:_})=>ne.jsx(Vi,{variant:V,size:"small",children:_},_))}),ne.jsx(Ui,{size:f,label:r,description:v,className:u,autoComplete:"off",...y,onChange:V=>y.onChange(V.currentTarget.value!==""?s(V.currentTarget.value):null),value:y.value?y.value:"",error:_r(K,e),maxLength:n,...E})]})},Xs=({formMethods:e,onSubmit:t,children:r,className:a,setDataOnUnmount:n})=>{const{handleSubmit:l,getValues:i}=e;return p.useEffect(()=>()=>{n&&n(i())},[]),ne.jsx(Yi,{...e,children:ne.jsx("form",{className:a,onSubmit:t?l(s=>t(s)):void 0,children:r})})},Qs="_begrunnelseTextField_hw8s7_6",eo={begrunnelseTextField:Qs},Ea={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},ao=be(Ea),ro=cn(3),to=mn(2e3),no=e=>e?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",lo=e=>t=>t!==void 0||e,Ca=({readOnly:e,text:t,useAllWidth:r=!1,notRequired:a=!1})=>{const{formState:{isDirty:n},control:l}=Ae(),i=a?()=>!1:lo(n);return h.jsx("div",{className:r?"":eo.begrunnelseTextField,children:h.jsx(Zt,{name:"begrunnelse",control:l,label:t??ao.formatMessage({id:no(e)}),validate:[dn(i),ro,to,_t],maxLength:2e3,readOnly:e,parse:Et})})},io=e=>e.length>0&&e[0].begrunnelse?e[0].begrunnelse:"";Ca.buildInitialValues=e=>({begrunnelse:vn(io(e))});Ca.transformValues=e=>({begrunnelse:e.begrunnelse});Ca.__docgenInfo={description:`ProsessStegBegrunnelseTextField

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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const so=be(Ea),oo=(e,t,r,a)=>!r&&!t||e?!0:a===void 0?!r:!r&&a||a,hr=({isReadOnly:e,isSubmittable:t,isSubmitting:r,isDirty:a,text:n,onClick:l,hasEmptyRequiredFields:i})=>e?null:h.jsx("div",{children:h.jsx(Ue,{size:"small",variant:"primary",loading:r,disabled:oo(r,t,a,i),onClick:l,type:l?"button":"submit",children:n??so.formatMessage({id:"SubmitButton.ConfirmInformation"})})});hr.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};be(Ea);be(Ea);be(Ea);const Xt=({erModalÅpen:e,lukkModal:t,isSubmittable:r,isSubmitting:a,isDirty:n,readOnly:l,valgtHjemmel:i})=>{const s=qe();return h.jsx(da,{width:"500px",open:e,"aria-label":s.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:t,children:h.jsx(da.Body,{children:h.jsxs(ce,{gap:"space-12",children:[h.jsxs(ce,{gap:"space-16",children:[h.jsx(fe,{size:"medium",children:h.jsx(Y,{id:"Klage.Modal.Overskrift"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.SendTilKlageinstans"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Valg"})}),h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Oppretthold"})}),i&&h.jsx(X,{children:h.jsx(Y,{id:"Klage.Modal.Hjemmel",values:{hjemmel:i}})})]}),h.jsx("div",{children:h.jsxs(Ce,{gap:"space-8",children:[h.jsx(hr,{isReadOnly:l,isSubmittable:r,isSubmitting:a,isDirty:n}),h.jsx(Ue,{size:"small",variant:"primary",onClick:t,autoFocus:!0,type:"button",children:h.jsx(Y,{id:"Klage.Modal.Avbryt"})})]})})]})})})};Xt.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const uo="_fritekstTilBrevTextArea_n72am_1",co={fritekstTilBrevTextArea:uo},Qt=({språkkode:e,readOnly:t=!0})=>{const{control:r}=Ae();return h.jsx("div",{className:co.fritekstTilBrevTextArea,children:h.jsx(Zt,{name:"fritekstTilBrev",control:r,label:qe().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[ia,_t],readOnly:t,maxLength:1e5,badges:[{type:"info",titleText:gn(e)}],parse:Et})})};Qt.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const mo="_select_1owoa_7",vo="_selectReadOnly_1owoa_10",Ka={select:mo,selectReadOnly:vo},en=({readOnly:e,medholdReasons:t,alleHjemmlerMedNavn:r,klageVurdering:a})=>{const n=qe(),{control:l}=Ae(),i=t.map(u=>h.jsx("option",{value:u.kode,children:u.navn},u.kode)),s=r.map(u=>h.jsx("option",{value:u.kode,children:u.navn},u.kode));return h.jsxs(ce,{gap:"space-12",children:[h.jsx(ut,{name:"klageVurdering",control:l,validate:[ia],isReadOnly:e,children:h.jsxs(Ce,{gap:"space-16",children:[h.jsx(aa,{value:z.MEDHOLD_I_KLAGE,size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.ChangeVedtak"})}),h.jsx(aa,{value:z.STADFESTE_YTELSESVEDTAK,size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.KeepVedtakNfp"})})]})}),a===z.MEDHOLD_I_KLAGE&&h.jsx(ys,{children:h.jsxs(ce,{gap:"space-16",children:[h.jsx(dt,{readOnly:e,control:l,name:"klageMedholdArsak",selectValues:i,className:e?Ka.selectReadOnly:Ka.select,label:n.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[ia]}),h.jsxs(ut,{name:"klageVurderingOmgjoer",control:l,validate:[ia],isReadOnly:e,children:[h.jsx(aa,{value:Re.GUNST_MEDHOLD_I_KLAGE,size:"small",children:h.jsx(Y,{id:"Klage.Behandle.Omgjort"})}),h.jsx(aa,{value:Re.UGUNST_MEDHOLD_I_KLAGE,size:"small",children:h.jsx(Y,{id:"Klage.Behandle.Ugunst"})}),h.jsx(aa,{value:Re.DELVIS_MEDHOLD_I_KLAGE,size:"small",children:h.jsx(Y,{id:"Klage.Behandle.DelvisOmgjort"})})]})]})}),h.jsx(dt,{readOnly:e,control:l,name:"klageHjemmel",selectValues:s,className:e?Ka.selectReadOnly:Ka.select,label:n.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[ia]})]})};en.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'KlageHjemmel'>[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const go=(e,t)=>{switch(t){case z.STADFESTE_YTELSESVEDTAK:return e?je.KLAGE_STADFESTET:je.KLAGE_OVERSENDT;case z.OPPHEVE_YTELSESVEDTAK:return je.KLAGE_HJEMSENDT;case z.HJEMSENDE_UTEN_Å_OPPHEVE:return je.KLAGE_HJEMSENDT;case z.MEDHOLD_I_KLAGE:return je.KLAGE_OMGJORING;default:return}},fo=(e,t)=>({fritekst:t??"",dokumentMal:go(!1,e),erOpphevetKlage:e===z.OPPHEVE_YTELSESVEDTAK}),an=({previewCallback:e,fritekstTilBrev:t,klageVurdering:r})=>{const a=n=>{e(fo(r,t)),n.preventDefault()};return h.jsx(Ai,{href:"#",onClick:a,onKeyDown:n=>n.key==="Enter"?a(n):null,children:h.jsx(Y,{id:"PreviewKlageLink.ForhandvisBrev"})})};an.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Eo=e=>({klageMedholdArsak:e.klageVurdering===z.MEDHOLD_I_KLAGE?e.klageMedholdArsak:void 0,klageVurderingOmgjoer:e.klageVurdering===z.MEDHOLD_I_KLAGE?e.klageVurderingOmgjoer:void 0,klageHjemmel:e.klageHjemmel,klageVurdering:La(e.klageVurdering),fritekstTilBrev:e.fritekstTilBrev,begrunnelse:e.begrunnelse,kode:ca.BEHANDLE_KLAGE_NFP}),ka=e=>{if(e&&e!=="-")return e},_o=(e,t)=>e.filter(({kode:r})=>t.includes(r)).sort((r,a)=>r.kode.localeCompare(a.kode)),ho=e=>e.map(t=>t),yo=e=>({klageMedholdArsak:ka(e?.klageMedholdArsak??void 0),klageVurderingOmgjoer:ka(e?.klageVurderingOmgjoer??void 0),klageHjemmel:ka(e?.klageHjemmel??void 0),klageVurdering:ka(e?.klageVurdering??void 0),begrunnelse:e?.begrunnelse??void 0,fritekstTilBrev:e?.fritekstTilBrev??void 0}),rn=({klageVurdering:e,previewCallback:t,saveKlage:r,alleAktuelleHjemler:a})=>{const{behandling:n,alleKodeverk:l,submitCallback:i,isReadOnly:s,isSubmittable:u}=tr(),v=_o(l.KlageHjemmel,ho(a)),m=qe(),[f,E]=p.useState(!1),K=yo(e.klageVurderingResultatNFP??void 0),{mellomlagretFormData:y,setMellomlagretFormData:V}=fn(),_=us({defaultValues:y??K}),S=_.watch(),b=()=>{E(!1)},A=()=>{E(!0)};return h.jsx(Xs,{formMethods:_,onSubmit:D=>i(Eo(D)),setDataOnUnmount:V,children:h.jsxs(ce,{gap:"space-16",children:[h.jsx(lr,{size:"small",level:"2",children:m.formatMessage({id:"Klage.ResolveKlage.Title"})}),u&&h.jsx(vs,{children:h.jsx(Y,{id:"Klage.ResolveKlage.HelpText"})}),h.jsx(en,{readOnly:s,klageVurdering:S.klageVurdering,medholdReasons:l.KlageMedholdÅrsak,alleHjemmlerMedNavn:v}),h.jsx(Ca,{readOnly:s,text:m.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),h.jsx(Qt,{språkkode:n.språkkode,readOnly:s}),h.jsxs(Ce,{justify:"space-between",children:[h.jsxs(Ce,{gap:"space-16",children:[S.klageVurdering===z.STADFESTE_YTELSESVEDTAK&&h.jsxs(h.Fragment,{children:[h.jsx(Ue,{variant:"primary",type:"button",size:"small",onClick:()=>A(),disabled:s,children:h.jsx(Y,{id:"Klage.Behandle.Bekreft"})}),h.jsx(Xt,{erModalÅpen:f,lukkModal:b,valgtHjemmel:v.find(D=>D.kode===S.klageHjemmel)?.navn,readOnly:s,isSubmittable:u,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isValid})]}),S.klageVurdering!==z.STADFESTE_YTELSESVEDTAK&&h.jsx(hr,{isReadOnly:s,isSubmittable:u,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isDirty}),!s&&S.klageVurdering&&S.fritekstTilBrev&&S.fritekstTilBrev.length>2&&h.jsx(an,{previewCallback:t,fritekstTilBrev:S.fritekstTilBrev,klageVurdering:S.klageVurdering})]}),!s&&h.jsx(Ue,{size:"small",variant:"primary",onClick:_.handleSubmit(D=>r(bo(D,ca.BEHANDLE_KLAGE_NFP))),type:"button",children:h.jsx(Y,{id:"Klage.ResolveKlage.TempSaveButton"})})]})]})})},bo=(e,t)=>({kode:t,klageMedholdArsak:e.klageVurdering===z.MEDHOLD_I_KLAGE||e.klageVurdering===z.OPPHEVE_YTELSESVEDTAK?e.klageMedholdArsak:void 0,klageVurderingOmgjoer:e.klageVurdering===z.MEDHOLD_I_KLAGE?e.klageVurderingOmgjoer:void 0,klageHjemmel:e.klageHjemmel,fritekstTilBrev:La(e.fritekstTilBrev),begrunnelse:La(e.begrunnelse),klageVurdering:La(e.klageVurdering)});rn.__docgenInfo={description:`BehandleklageformNfp

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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const tn=({klageVurdering:e})=>{const t=qe(),{alleKodeverk:r}=tr(),{begrunnelse:a,fritekstTilBrev:n,klageVurdering:l,klageMedholdArsak:i,klageVurderingOmgjoer:s}=e.klageVurderingResultatNK??{},u=r.KlageMedholdÅrsak;return h.jsxs(ce,{gap:"space-16",children:[h.jsx(lr,{size:"small",level:"2",children:t.formatMessage({id:"Klage.ResolveKlage.Title"})}),h.jsxs(ce,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),h.jsxs(X,{size:"small",children:[l===z.STADFESTE_YTELSESVEDTAK&&h.jsx(Y,{id:"Klage.ResolveKlage.KeepVedtakNk"}),l===z.MEDHOLD_I_KLAGE&&h.jsx(Y,{id:"Klage.ResolveKlage.ChangeVedtak"}),l===z.HJEMSENDE_UTEN_Å_OPPHEVE&&h.jsx(Y,{id:"Klage.Behandle.Hjemsendt"}),l===z.OPPHEVE_YTELSESVEDTAK&&h.jsx(Y,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),l===z.MEDHOLD_I_KLAGE&&h.jsxs(ce,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.Cause"})}),h.jsx(X,{size:"small",children:u.find(v=>v.kode===i)?.navn}),h.jsxs(X,{size:"small",children:[s===Re.GUNST_MEDHOLD_I_KLAGE&&h.jsx(Y,{id:"Klage.Behandle.Omgjort"}),s===Re.UGUNST_MEDHOLD_I_KLAGE&&h.jsx(Y,{id:"Klage.Behandle.Ugunst"}),s===Re.DELVIS_MEDHOLD_I_KLAGE&&h.jsx(Y,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(l===z.OPPHEVE_YTELSESVEDTAK||l===z.HJEMSENDE_UTEN_Å_OPPHEVE)&&h.jsxs(ce,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"Klage.ResolveKlage.Cause"})}),h.jsx(X,{size:"small",children:u.find(v=>v.kode===i)?.navn})]}),h.jsxs(ce,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"FritekstKlageBrevTextField.Fritekst"})}),h.jsx(X,{size:"small",children:n})]}),h.jsxs(ce,{gap:"space-4",children:[h.jsx(fe,{size:"small",children:h.jsx(Y,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),h.jsx(X,{size:"small",children:a})]})]})};tn.__docgenInfo={description:`BehandleklageformNfp

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
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}},description:""}}};const po={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},Oo=be(po),ar=({klageVurdering:e,saveKlage:t,previewCallback:r})=>{const{aksjonspunkterForPanel:a}=tr();return h.jsxs(En,{value:Oo,children:[e.klageVurderingResultatNK&&h.jsx(tn,{klageVurdering:e}),a.some(n=>n.definisjon===ca.BEHANDLE_KLAGE_NFP)&&h.jsx(rn,{klageVurdering:e,saveKlage:t,previewCallback:r,alleAktuelleHjemler:e.aktuelleHjemler?e.aktuelleHjemler:[]})]})};ar.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const{action:mt}=__STORYBOOK_MODULE_ACTIONS__,No={title:"prosess/klage/prosess-klagevurdering",component:ar,decorators:[_n,hn],args:{saveKlage:mt("button-click"),previewCallback:mt("button-click")},render:e=>h.jsx(ar,{...e})},Ta={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.MEDHOLD_I_KLAGE,klageMedholdArsak:"ULIK_VURDERING",klageVurderingOmgjoer:Re.GUNST_MEDHOLD_I_KLAGE,fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Aa={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.STADFESTE_YTELSESVEDTAK,fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Na={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.HJEMSENDE_UTEN_Å_OPPHEVE,klageMedholdArsak:"ULIK_VURDERING",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Ra={args:{aksjonspunkterForPanel:[],klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:z.OPPHEVE_YTELSESVEDTAK,klageMedholdArsak:"ULIK_VURDERING",fritekstTilBrev:"test",begrunnelse:"Dette er en begrunnelse"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}},Va={args:{aksjonspunkterForPanel:[{definisjon:ca.BEHANDLE_KLAGE_NFP}],klageVurdering:{klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]},aktuelleHjemler:["14-17"]}}};Ta.parameters={...Ta.parameters,docs:{...Ta.parameters?.docs,source:{originalSource:`{
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
