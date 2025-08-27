import{g as Vn,r as _,u as ha,_ as rr,s as nr,c as Je,a as B,R as m,b as ja,S as Ea,d as kn,e as Pe,J as xn,j as T,t as Ta,o as Tn,f as Sn,M as Fn,E as An,h as Pn,P as In}from"./iframe-BBZzcDBB.js";import{r as Ln}from"./index-EjlN8GAZ.js";import"./preload-helper-D9Z9MdNV.js";var jn=Ln();const Dn=Vn(jn);function Mn(e,t){var r=e.values,a=rr(e,["values"]),n=t.values,l=rr(t,["values"]);return nr(n,r)&&nr(a,l)}function Ur(e){var t=ha(),r=t.formatMessage,a=t.textComponent,n=a===void 0?_.Fragment:a,l=e.id,i=e.description,s=e.defaultMessage,d=e.values,v=e.children,c=e.tagName,y=c===void 0?n:c,g=e.ignoreTag,O={id:l,description:i,defaultMessage:s},V=r(O,d,{ignoreTag:g});return typeof v=="function"?v(Array.isArray(V)?V:[V]):y?_.createElement(y,null,V):_.createElement(_.Fragment,null,V)}Ur.displayName="FormattedMessage";var be=_.memo(Ur,Mn);be.displayName="MemoizedFormattedMessage";var Da=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(Da||{}),Ma=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(Ma||{}),se=(e=>(e.INNVIRKNING="INNVIRKNING",e.INGEN_INNVIRKNING="INGEN_INNVIRKNING",e.UDEFINERT="-",e))(se||{});const Kn={FaresignalVurdering:[{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"}]},Ie=e=>Je({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Cn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ze=_.forwardRef((e,t)=>{var{className:r,size:a="medium",as:n="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:v,textColor:c}=e,y=Cn(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:g}=B();return m.createElement(n,Object.assign({},y,{ref:t,className:g(r,"navds-body-long",`navds-body-long--${a}`,Ie({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:v,textColor:c}))}))});var Gn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Oe=_.forwardRef((e,t)=>{var{className:r,size:a="medium",as:n="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:v,textColor:c}=e,y=Gn(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:g}=B();return m.createElement(n,Object.assign({},y,{ref:t,className:g(r,"navds-body-short",`navds-body-short--${a}`,Ie({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:v,textColor:c}))}))});var Un=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};_.forwardRef((e,t)=>{var{className:r,size:a="medium",spacing:n,uppercase:l,as:i="p",truncate:s,weight:d="regular",align:v,visuallyHidden:c,textColor:y}=e,g=Un(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:O}=B();return m.createElement(i,Object.assign({},g,{ref:t,className:O(r,"navds-detail",Ie({spacing:n,truncate:s,weight:d,align:v,visuallyHidden:c,textColor:y,uppercase:l}),{"navds-detail--small":a==="small"})}))});var Bn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Br=_.forwardRef((e,t)=>{var{children:r,className:a,size:n,spacing:l,as:i="p",showIcon:s=!1}=e,d=Bn(e,["children","className","size","spacing","as","showIcon"]);const{cn:v}=B();return m.createElement(i,Object.assign({},d,{ref:t,className:v("navds-error-message","navds-label",a,Ie({spacing:l}),{"navds-label--small":n==="small","navds-error-message--show-icon":s})}),s&&m.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var $n=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};_.forwardRef((e,t)=>{var{level:r="1",size:a,className:n,as:l,spacing:i,align:s,visuallyHidden:d,textColor:v}=e,c=$n(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:y}=B(),g=l??`h${r}`;return m.createElement(g,Object.assign({},c,{ref:t,className:y(n,"navds-heading",`navds-heading--${a}`,Ie({spacing:i,align:s,visuallyHidden:d,textColor:v}))}))});var qn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};_.forwardRef((e,t)=>{var{className:r,spacing:a,as:n="p"}=e,l=qn(e,["className","spacing","as"]);const{cn:i}=B();return m.createElement(n,Object.assign({},l,{ref:t,className:i(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var zn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Re=_.forwardRef((e,t)=>{var{className:r,size:a="medium",as:n="label",spacing:l,visuallyHidden:i,textColor:s}=e,d=zn(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:v}=B();return m.createElement(n,Object.assign({},d,{ref:t,className:v(r,"navds-label",Ie({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":a==="small"})}))});function $r(e,t=166,r=!1){let a;function n(...l){const i=()=>{a=void 0,e.apply(this,l)};!a&&r&&i(),clearTimeout(a),a=setTimeout(i,t)}return n.clear=()=>{clearTimeout(a)},n}function ve(e,t){const r=Object.entries(e).filter(([a])=>!t.includes(a));return Object.fromEntries(r)}const tr=globalThis?.document?_.useLayoutEffect:()=>{};let lr=0;function Hn(e){const[t,r]=_.useState(e),a=e||t;return _.useEffect(()=>{t==null&&(lr+=1,r(`aksel-id-${lr}`))},[t]),a}const ir=m.useId;function Oa(e){var t;return ir!==void 0?ir().replace(/(:)/g,""):(t=Hn(e))!==null&&t!==void 0?t:""}function sr(e,t=[]){const r=_.useRef(e);return _.useEffect(()=>{r.current=e}),_.useCallback((...a)=>{var n;return(n=r.current)===null||n===void 0?void 0:n.call(r,...a)},t)}function qr({value:e,defaultValue:t,onChange:r}){const a=sr(r),[n,l]=_.useState(t),i=e!==void 0,s=i?e:n,d=sr(v=>{const y=typeof v=="function"?v(s):v;i||l(y),a(y)},[i,a,s]);return[s,d]}let or=0;function Yn(e){const[t,r]=_.useState(e),a=e||t;return _.useEffect(()=>{t==null&&(or+=1,r(`aksel-icon-${or}`))},[t]),a}const ur=m.useId;function pe(e){var t;return ur!==void 0?ur().replace(/(:)/g,""):(t=Yn(e))!==null&&t!==void 0?t:""}var Wn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const zr=_.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Wn(e,["title","titleId"]);let l=pe();return l=r?a||"title-"+l:void 0,_.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?_.createElement("title",{id:l},r):null,_.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Jn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Hr=_.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Jn(e,["title","titleId"]);let l=pe();return l=r?a||"title-"+l:void 0,_.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?_.createElement("title",{id:l},r):null,_.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Zn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Xn=_.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Zn(e,["title","titleId"]);let l=pe();return l=r?a||"title-"+l:void 0,_.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?_.createElement("title",{id:l},r):null,_.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Qn=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const et=_.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=Qn(e,["title","titleId"]);let l=pe();return l=r?a||"title-"+l:void 0,_.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?_.createElement("title",{id:l},r):null,_.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.25 4A.75.75 0 0 1 6 3.25h12a.75.75 0 0 1 0 1.5h-.298c-.109 1.966-.643 3.846-1.546 5.302-.503.81-1.116 1.479-1.81 1.948.694.47 1.307 1.138 1.81 1.948.904 1.456 1.437 3.336 1.546 5.302H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h.315c.109-1.966.642-3.846 1.546-5.302.502-.81 1.116-1.479 1.81-1.948-.694-.47-1.308-1.138-1.81-1.948-.904-1.456-1.437-3.336-1.546-5.302H6A.75.75 0 0 1 5.25 4m9.631 5.261c-.846 1.365-1.901 1.989-2.873 1.989-.971 0-2.026-.624-2.872-1.989-.738-1.189-1.211-2.785-1.318-4.511h8.381c-.107 1.726-.58 3.322-1.318 4.511M9.136 14.74c.846-1.365 1.901-1.989 2.872-1.989.972 0 2.027.624 2.873 1.989.738 1.189 1.211 2.784 1.318 4.511H7.818c.107-1.727.58-3.322 1.318-4.511M8.645 5.5c.176 1.306.576 2.477 1.128 3.366.762 1.228 1.61 1.634 2.236 1.634s1.473-.406 2.235-1.634c.552-.89.952-2.06 1.129-3.366z",clipRule:"evenodd"}))});var at=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const rt=_.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=at(e,["title","titleId"]);let l=pe();return l=r?a||"title-"+l:void 0,_.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?_.createElement("title",{id:l},r):null,_.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var nt=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Yr=_.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=nt(e,["title","titleId"]);let l=pe();return l=r?a||"title-"+l:void 0,_.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?_.createElement("title",{id:l},r):null,_.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var tt=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const lt=_.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=tt(e,["title","titleId"]);let l=pe();return l=r?a||"title-"+l:void 0,_.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?_.createElement("title",{id:l},r):null,_.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var it=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const st=_.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=it(e,["title","titleId"]);let l=pe();return l=r?a||"title-"+l:void 0,_.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?_.createElement("title",{id:l},r):null,_.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var ot=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Wr=_.forwardRef((e,t)=>{var{title:r,titleId:a}=e,n=ot(e,["title","titleId"]);let l=pe();return l=r?a||"title-"+l:void 0,_.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),r?_.createElement("title",{id:l},r):null,_.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Ka(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),r===!1||!n.defaultPrevented)return t?.(n)}}function Sa(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Ge(e){return(t,r)=>{const a=r?.context?String(r.context):"standalone";let n;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=r?.width?String(r.width):i;n=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=r?.width?String(r.width):e.defaultWidth;n=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(t):t;return n[l]}}function Ue(e){return(t,r={})=>{const a=r.width,n=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=t.match(n);if(!l)return null;const i=l[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?dt(s,y=>y.test(i)):ut(s,y=>y.test(i));let v;v=e.valueCallback?e.valueCallback(d):d,v=r.valueCallback?r.valueCallback(v):v;const c=t.slice(i.length);return{value:v,rest:c}}}function ut(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function dt(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function ct(e){return(t,r={})=>{const a=t.match(e.matchPattern);if(!a)return null;const n=a[0],l=t.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=r.valueCallback?r.valueCallback(i):i;const s=t.slice(n.length);return{value:i,rest:s}}}const mt={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},vt=(e,t,r)=>{let a;const n=mt[e];return typeof n=="string"?a=n:t===1?a=n.one:a=n.other.replace("{{count}}",String(t)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},ft={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},gt={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},yt={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},_t={date:Sa({formats:ft,defaultWidth:"full"}),time:Sa({formats:gt,defaultWidth:"full"}),dateTime:Sa({formats:yt,defaultWidth:"full"})},bt={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},pt=(e,t,r,a)=>bt[e],ht={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Et={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Ot={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Rt={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},wt={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Nt=(e,t)=>Number(e)+".",Vt={ordinalNumber:Nt,era:Ge({values:ht,defaultWidth:"wide"}),quarter:Ge({values:Et,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ge({values:Ot,defaultWidth:"wide"}),day:Ge({values:Rt,defaultWidth:"wide"}),dayPeriod:Ge({values:wt,defaultWidth:"wide"})},kt=/^(\d+)\.?/i,xt=/\d+/i,Tt={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},St={any:[/^f/i,/^e/i]},Ft={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},At={any:[/1/i,/2/i,/3/i,/4/i]},Pt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},It={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Lt={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},jt={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Dt={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Mt={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Kt={ordinalNumber:ct({matchPattern:kt,parsePattern:xt,valueCallback:e=>parseInt(e,10)}),era:Ue({matchPatterns:Tt,defaultMatchWidth:"wide",parsePatterns:St,defaultParseWidth:"any"}),quarter:Ue({matchPatterns:Ft,defaultMatchWidth:"wide",parsePatterns:At,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ue({matchPatterns:Pt,defaultMatchWidth:"wide",parsePatterns:It,defaultParseWidth:"any"}),day:Ue({matchPatterns:Lt,defaultMatchWidth:"wide",parsePatterns:jt,defaultParseWidth:"any"}),dayPeriod:Ue({matchPatterns:Dt,defaultMatchWidth:"any",parsePatterns:Mt,defaultParseWidth:"any"})},Ct={code:"nb",formatDistance:vt,formatLong:_t,formatRelative:pt,localize:Vt,match:Kt,options:{weekStartsOn:1,firstWeekContainsDate:4}},Gt={global:{dateLocale:Ct,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Ut=_.createContext({locale:Gt}),Bt=()=>_.useContext(Ut),dr=/(\w+)/g;function $t(e,t){const r=Array.isArray(e)?e:qt(e);for(const a of t){if(!a)continue;let n=a;for(let l=0;l<r.length;l++){const i=n[r[l]];i!==void 0&&(n=i)}if(typeof n=="string")return n}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function qt(e){const t=[];let r=dr.exec(e);for(;r;){const[,a,n]=r;t.push(a||n),r=dr.exec(e)}return t}const zt=/{[^}]*}/g;function Xe(e,...t){const r=Bt(),a=r.translations||[],n=[...t,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],r.locale[e]];return(i,s)=>{const d=$t(i,n);return s?d.replace(zt,v=>{const c=v.substring(1,v.length-1);if(s[c]===void 0){const y=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${c}'. The following replacements were passed: '${y}'`)}return s[c]}):d}}var Ht=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Yt=_.forwardRef((e,t)=>{var{className:r,size:a="medium",title:n,transparent:l=!1,variant:i="neutral",id:s,"data-color":d}=e,v=Ht(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:c}=B(),y=Oa(),g=Xe("Loader");return m.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${y}`,ref:t,className:c("navds-loader",r,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??Wt(i)},ve(v,["children"]),{"data-variant":i}),m.createElement("title",{id:s??`loader-${y}`},n||g("title")),m.createElement("circle",{className:c("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),m.createElement("circle",{className:c("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Wt(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Jt=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Jr=_.forwardRef((e,t)=>{var{as:r="button",variant:a="primary",className:n,children:l,size:i="medium",loading:s=!1,disabled:d,icon:v,iconPosition:c="left",onKeyUp:y,"data-color":g}=e,O=Jt(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:V}=B(),k=d||s?ve(O,["href"]):O,b=S=>{S.key===" "&&!d&&!s&&S.currentTarget.click()};return m.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":g??Zt(a),"data-variant":Xt(a)},k,{ref:t,onKeyUp:Ka(y,b),className:V(n,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!v&&!l,"navds-button--disabled":d??s}),disabled:d??s?!0:void 0}),v&&c==="left"&&m.createElement("span",{className:V("navds-button__icon")},v),s&&m.createElement(Yt,{size:i}),l&&m.createElement(Re,{as:"span",size:i==="medium"?"medium":"small"},l),v&&c==="right"&&m.createElement("span",{className:V("navds-button__icon")},v))});function Zt(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Xt(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var Qt=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const el={error:Wr,warning:Xn,info:rt,success:zr},al=_.forwardRef((e,t)=>{var{children:r,className:a,variant:n,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:d=!1,closeButton:v=!1,onClose:c}=e,y=Qt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:g}=B(),O=Xe("Alert"),V=el[n];return m.createElement("div",Object.assign({},y,{"data-color":rl(n),"data-variant":n,ref:t,className:g(a,"navds-alert",`navds-alert--${n}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":d,"navds-alert--close-button":v})}),m.createElement(V,{title:O(n),className:g("navds-alert__icon")}),m.createElement(Ze,{as:"div",size:l,className:g("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},r),v&&!d&&m.createElement("div",{className:g("navds-alert__button-wrapper")},m.createElement(Jr,{className:g("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:c,type:"button",icon:m.createElement(st,{title:["error","warning"].includes(n)?O("closeAlert"):O("closeMessage")})})))});function rl(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}const Zr=()=>{const{cn:e}=B();return m.createElement(Yr,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},nl=()=>{const{cn:e}=B();return m.createElement(Yr,{title:Xe("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var tl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const ll=_.forwardRef((e,t)=>{var{className:r,header:a,children:n,open:l,defaultOpen:i=!1,onClick:s,size:d="medium",onOpenChange:v}=e,c=tl(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:y}=B(),[g,O]=qr({defaultValue:i,value:l,onChange:v}),V=d==="small"?"small":"medium";return m.createElement("div",{className:y("navds-read-more",`navds-read-more--${d}`,r,{"navds-read-more--open":g}),"data-volume":"low"},m.createElement("button",Object.assign({},c,{ref:t,type:"button",className:y("navds-read-more__button","navds-body-short",{"navds-body-short--small":d==="small"}),onClick:Ka(s,()=>O(k=>!k)),"aria-expanded":g,"data-state":g?"open":"closed"}),m.createElement(Hr,{className:y("navds-read-more__expand-icon"),"aria-hidden":!0}),m.createElement("span",null,a)),m.createElement(Ze,{as:"div","aria-hidden":!g,className:y("navds-read-more__content",{"navds-read-more__content--closed":!g}),size:V,"data-state":g?"open":"closed"},n))}),ma=_.createContext(null),Ca=(e,t)=>{var r,a,n;const{size:l,error:i,errorId:s}=e,d=_.useContext(ma),v=Oa(),c=(r=e.id)!==null&&r!==void 0?r:`${t}-${v}`,y=s??`${t}-error-${v}`,g=`${t}-description-${v}`,O=d?.disabled||e.disabled,V=(d?.readOnly||e.readOnly)&&!O||void 0,k=!O&&!V&&!!(i||d?.error),b=!O&&!V&&!!i&&typeof i!="boolean",S=Object.assign({},k?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:b,hasError:k,errorId:y,inputDescriptionId:g,size:(a=l??d?.size)!==null&&a!==void 0?a:"medium",readOnly:V,inputProps:Object.assign(Object.assign({id:c},S),{"aria-describedby":Je(e["aria-describedby"],{[g]:e.description&&!va(e.description),[y]:b,[(n=d?.errorId)!==null&&n!==void 0?n:""]:k&&d?.error})||void 0,disabled:O})}};function va(e,t=!0){if(m.isValidElement(e)){if(e.type===ll)return!0;if(e.props.children&&t)return va(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>va(r,t));return!1}const Ra=_.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var il=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const sl=_.forwardRef((e,t)=>{var{children:r,className:a}=e,n=il(e,["children","className"]);const{cn:l}=B(),i=_.useContext(Ra);return i===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):m.createElement(Ze,Object.assign({},n,{ref:t,as:"div",className:l("navds-expansioncard__content",a,{"navds-expansioncard__content--closed":!i.open}),"aria-hidden":!i.open,size:i.size,"data-open":i.open}),m.createElement("div",{className:l("navds-expansioncard__content-inner")},r))});var ol=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const ul=_.forwardRef((e,t)=>{var{className:r}=e,a=ol(e,["className"]);const{cn:n}=B(),l=_.useContext(Ra);return l===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):m.createElement(Ze,Object.assign({},a,{as:"p",ref:t,className:n("navds-link-panel__description",r),size:l.size}))});var dl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const cl=_.forwardRef((e,t)=>{var{children:r,className:a}=e,n=dl(e,["children","className"]);const{cn:l}=B(),i=_.useContext(Ra),s=Xe("global");return i===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):m.createElement("div",Object.assign({ref:t},n,{className:l("navds-expansioncard__header",a),"data-open":i.open}),m.createElement("div",{className:l("navds-expansioncard__header-content")},r),m.createElement("button",{className:l("navds-expansioncard__header-button"),onClick:i.toggleOpen,type:"button","aria-expanded":i.open},m.createElement(Hr,{className:l("navds-expansioncard__header-chevron"),title:s("showMore")})))});var ml=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const vl=_.forwardRef((e,t)=>{var{className:r,as:a="h3",size:n="medium"}=e,l=ml(e,["className","as","size"]);const{cn:i}=B();return m.createElement(a,Object.assign({},l,{ref:t,className:i("navds-expansioncard__title",`navds-expansioncard__title--${n}`,"navds-heading",`navds-heading--${n}`,r)}))});var fl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ee=_.forwardRef((e,t)=>{var{className:r,onToggle:a,open:n,defaultOpen:l=!1,size:i="medium","data-color":s="neutral"}=e,d=fl(e,["className","onToggle","open","defaultOpen","size","data-color"]);const{cn:v}=B(),c=_.useRef(!(n||l)),[y,g]=qr({value:n,onChange:O=>{a?.(O),c.current=!0},defaultValue:l});return m.createElement(Ra.Provider,{value:{open:n??y,toggleOpen:()=>g(O=>!O),size:i}},m.createElement("section",Object.assign({"data-color":s},d,{className:v("navds-expansioncard",r,`navds-expansioncard--${i}`,{"navds-expansioncard--open":n??y,"navds-expansioncard--no-animation":!c.current}),ref:t})))});Ee.Header=cl;Ee.Content=sl;Ee.Title=vl;Ee.Description=ul;function Q(e,t,r,a){return a?typeof a=="string"?{[`--__${e}c-${t}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([n,l])=>[`--__${e}c-${t}-${r}-${n}`,l])):{}}const gl={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},yl={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},cr=(e,t,r,a,n,l)=>t.split(" ").map((i,s,d)=>{var v,c;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let y=`var(--${l}-${r}-${i})`;if(a.includes(i))y=i==="px"?"1px":i;else if(r==="spacing"&&i.startsWith("space"))y=`var(--${l}-${i})`;else if(r==="spacing"){const g=`--${l}-spacing-${i}`;y=`var(${(v=gl[g])!==null&&v!==void 0?v:g})`}else if(r==="radius"){const g=(c=yl[i])!==null&&c!==void 0?c:i;y=`var(--${l}-radius-${g})`}return n?i==="0"?"0":`calc(-1 * ${y})`:y}).join(" ");function le(e,t,r,a,n,l=!1,i=[]){if(!n)return{};if(typeof n=="string")return{[`--__${e}c-${t}-${r}-xs`]:cr(r,n,a,i,l,e)};const s={};return Object.entries(n).forEach(([d,v])=>{s[`--__${e}c-${t}-${r}-${d}`]=cr(r,v,a,i,l,e)}),s}const Ga=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Ua=({children:e,className:t,padding:r,paddingInline:a,paddingBlock:n,margin:l,marginInline:i,marginBlock:s,width:d,minWidth:v,maxWidth:c,height:y,minHeight:g,maxHeight:O,position:V,inset:k,top:b,right:S,left:h,bottom:A,overflow:P,overflowX:I,overflowY:H,flexBasis:D,flexGrow:$,flexShrink:j,gridColumn:M})=>{const K=ja(!1),{cn:x}=B(),R=K?"ax":"a",L=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},le(R,"r","p","spacing",r)),le(R,"r","pi","spacing",a)),le(R,"r","pb","spacing",n)),le(R,"r","m","spacing",l)),le(R,"r","mi","spacing",i)),le(R,"r","mb","spacing",s)),Q(R,"r","w",d)),Q(R,"r","minw",v)),Q(R,"r","maxw",c)),Q(R,"r","h",y)),Q(R,"r","minh",g)),Q(R,"r","maxh",O)),Q(R,"r","position",V)),le(R,"r","inset","spacing",k)),le(R,"r","top","spacing",b)),le(R,"r","right","spacing",S)),le(R,"r","bottom","spacing",A)),le(R,"r","left","spacing",h)),Q(R,"r","overflow",P)),Q(R,"r","overflowx",I)),Q(R,"r","overflowy",H)),Q(R,"r","flex-basis",D)),Q(R,"r","flex-grow",$)),Q(R,"r","flex-shrink",j)),Q(R,"r","grid-column",M));return m.createElement(Ea,{className:x({className:t,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":n,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":d,"navds-r-minw":v,"navds-r-maxw":c,"navds-r-h":y,"navds-r-minh":g,"navds-r-maxh":O,"navds-r-position":V,"navds-r-inset":k,"navds-r-top":b,"navds-r-right":S,"navds-r-bottom":A,"navds-r-left":h,"navds-r-overflow":P,"navds-r-overflowx":I,"navds-r-overflowy":H,"navds-r-flex-basis":D,"navds-r-flex-grow":$,"navds-r-flex-shrink":j,"navds-r-grid-column":M}),style:L},e)};var _l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const bl=_.forwardRef((e,t)=>{var{children:r,className:a,as:n="div",background:l,borderColor:i,borderWidth:s,borderRadius:d,shadow:v,style:c,asChild:y}=e,g=_l(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:O}=B(),V=Object.assign(Object.assign(Object.assign({},c),{"--__axc-box-background":l?`var(--ax-bg-${l})`:void 0,"--__axc-box-shadow":v?`var(--ax-shadow-${v})`:void 0,"--__axc-box-border-color":i?`var(--ax-border-${i})`:void 0,"--__axc-box-border-width":s?s.split(" ").map(b=>`${b}px`).join(" "):void 0}),le("ax","box","radius","radius",d,!1,["0"])),k=y?Ea:n;return m.createElement(Ua,Object.assign({},g),m.createElement(k,Object.assign({},ve(g,Ga),{ref:t,style:V,className:O("navds-box",a,{"navds-box-bg":l,"navds-box-border-color":i,"navds-box-border-width":s,"navds-box-radius":d,"navds-box-shadow":v})}),r))});var pl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const hl=_.forwardRef((e,t)=>{var{children:r,className:a,as:n="div",background:l,borderColor:i,borderWidth:s,borderRadius:d,shadow:v,style:c,asChild:y}=e,g=pl(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const O=ja(!1),{cn:V}=B(),k=O?"ax":"a",b=Object.assign(Object.assign(Object.assign({},c),{[`--__${k}c-box-background`]:l?`var(--a-${l})`:void 0,[`--__${k}c-box-shadow`]:v?`var(--a-shadow-${v})`:void 0,[`--__${k}c-box-border-color`]:i?`var(--a-${i})`:void 0,[`--__${k}c-box-border-width`]:s?s.split(" ").map(h=>`${h}px`).join(" "):void 0}),le(k,"box","radius","radius",d,!1,["0"])),S=y?Ea:n;return m.createElement(Ua,Object.assign({},g),m.createElement(S,Object.assign({},ve(g,Ga),{ref:t,style:b,className:V("navds-box",a,{"navds-box-bg":l,"navds-box-border-color":i,"navds-box-border-width":s,"navds-box-border-radius":d,"navds-box-shadow":v})}),r))}),Ba=hl;Ba.New=bl;var El=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Xr=_.forwardRef((e,t)=>{var{children:r,className:a,as:n="div",align:l,justify:i,wrap:s=!0,gap:d,style:v,direction:c="row",asChild:y}=e,g=El(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const V=ja(!1)?"ax":"a",{cn:k}=B(),b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},v),le(V,"stack","gap","spacing",d)),Q(V,"stack","direction",c)),Q(V,"stack","align",l)),Q(V,"stack","justify",i)),S=y?Ea:n;return m.createElement(Ua,Object.assign({},g),m.createElement(S,Object.assign({},ve(g,Ga),{ref:t,style:b,className:k("navds-stack",a,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":d,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":c,"navds-stack-wrap":s})}),r))});var Ol=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Qe=_.forwardRef((e,t)=>{var{as:r="div"}=e,a=Ol(e,["as"]);return m.createElement(Xr,Object.assign({as:r},a,{ref:t,direction:"row"}))});var Rl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const We=_.forwardRef((e,t)=>{var{as:r="div"}=e,a=Rl(e,["as"]);return m.createElement(Xr,Object.assign({as:r},a,{ref:t,direction:"column",wrap:!1}))});var wl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Nl=_.forwardRef((e,t)=>{var{children:r,className:a,variant:n,size:l="medium",icon:i,"data-color":s}=e,d=wl(e,["children","className","variant","size","icon","data-color"]);const{cn:v}=B(),c=n?.endsWith("-filled")&&"strong",y=n?.endsWith("-moderate")&&"moderate";return m.createElement(Oe,Object.assign({"data-color":s??Vl(n),"data-variant":c||y||"outline"},d,{ref:t,as:"span",size:l==="medium"?"medium":"small",className:v("navds-tag",a,`navds-tag--${n}`,`navds-tag--${l}`)}),i&&m.createElement("span",{className:v("navds-tag__icon--left")},i),r)});function Vl(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const kl=e=>{const t=Ca(e,"fieldset");return Object.assign(Object.assign({},t),{inputProps:{"aria-describedby":Je(e["aria-describedby"],{[t.inputDescriptionId]:e.description&&!va(e.description)})||void 0}})};var xl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Tl=_.forwardRef((e,t)=>{var r,a,n;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:d,size:v,readOnly:c,inputDescriptionId:y}=kl(e),{cn:g}=B(),O=_.useContext(ma),{children:V,className:k,errorPropagation:b=!0,legend:S,description:h,hideLegend:A,nativeReadOnly:P=!0}=e,I=xl(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return m.createElement(ma.Provider,{value:{error:b?(r=e.error)!==null&&r!==void 0?r:O?.error:void 0,errorId:Je({[i]:s,[(a=O?.errorId)!==null&&a!==void 0?a:""]:!!O?.error}),size:v,disabled:(n=e.disabled)!==null&&n!==void 0?n:!1,readOnly:c}},m.createElement("fieldset",Object.assign({},ve(I,["errorId","error","size","readOnly"]),l,{ref:t,className:g(k,"navds-fieldset",`navds-fieldset--${v}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":c})}),m.createElement(Re,{size:v,as:"legend",className:g("navds-fieldset__legend",{"navds-sr-only":!!A})},c&&(P?m.createElement(Zr,null):m.createElement(nl,null)),S),!!h&&m.createElement(Oe,{className:g("navds-fieldset__description",{"navds-sr-only":!!A}),id:y,size:v??"medium",as:"div"},e.description),V,m.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:g("navds-fieldset__error")},s&&m.createElement(Br,{size:v,showIcon:!0},e.error))))});var Sl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Qr=m.createContext(null),Fl=_.forwardRef((e,t)=>{var r,a,{children:n,className:l,name:i,defaultValue:s,value:d,onChange:v=()=>{},required:c,readOnly:y}=e,g=Sl(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:O}=B(),V=_.useContext(ma),k=Oa();return m.createElement(Tl,Object.assign({},g,{readOnly:y,ref:t,className:O(l,"navds-radio-group",`navds-radio-group--${(a=(r=g.size)!==null&&r!==void 0?r:V?.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),m.createElement(Qr.Provider,{value:{name:i??`radioGroupName-${k}`,defaultValue:s,value:d,onChange:v,required:c}},m.createElement("div",{className:O("navds-radio-buttons")},n)))});var Al=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Pl=e=>{const t=_.useContext(Qr),r=Ca(ve(e,["description"]),"radio"),{inputProps:a,readOnly:n}=r,l=Al(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:n,inputProps:Object.assign(Object.assign({},a),{name:t?.name,defaultChecked:t?.defaultValue===void 0?void 0:t?.defaultValue===e.value,checked:t?.value===void 0?void 0:t?.value===e.value,onChange:i=>{var s,d;n||((s=e.onChange)===null||s===void 0||s.call(e,i),(d=t?.onChange)===null||d===void 0||d.call(t,e.value))},onClick:i=>{var s;if(n){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:t?.required,type:"radio"})})},Fa=_.forwardRef((e,t)=>{const{cn:r}=B(),{inputProps:a,size:n,hasError:l,readOnly:i}=Pl(e);return m.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${n}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},m.createElement("input",Object.assign({},ve(e,["children","size","description","readOnly"]),ve(a,["aria-invalid"]),{className:r("navds-radio__input"),ref:t})),m.createElement("label",{htmlFor:a.id,className:r("navds-radio__label")},m.createElement("span",{className:r("navds-radio__content")},m.createElement(Oe,{as:"span",size:n},e.children),e.description&&m.createElement(Oe,{as:"span",size:n,className:r("navds-form-field__subdescription navds-radio__description")},e.description))))});var Il=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const mr=(e,t,r)=>{const{outerHeightStyle:a,overflow:n}=t;return r.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==n)?(r.current+=1,t):e},vr=e=>(e?.ownerDocument||document).defaultView||window;function sa(e){return parseInt(e,10)||0}const Ll=_.forwardRef((e,t)=>{var r,a,{className:n,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:d,style:v,value:c}=e,y=Il(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:g}=_.useRef(c!=null),O=_.useRef(null),V=kn(O,t),k=_.useRef(null),b=_.useRef(0),[S,h]=_.useState({outerHeightStyle:0}),A=m.useCallback(()=>{const D=O.current,j=vr(D).getComputedStyle(D);if(j.width==="0px")return{outerHeightStyle:0};const M=k.current;M.style.width=j.width,M.value=D.value||y.placeholder||"x",M.value.slice(-1)===`
`&&(M.value+=" ");const K=j.boxSizing,x=sa(j.paddingBottom)+sa(j.paddingTop),R=sa(j.borderBottomWidth)+sa(j.borderTopWidth),L=M.scrollHeight-x;M.value="x";const G=M.scrollHeight-x;let C=L;s&&(C=Math.max(Number(s)*G,C)),i&&(C=Math.min(Number(i)*G,C)),C=Math.max(C,G);const X=C+(K==="border-box"?x+R:0),ne=Math.abs(C-L)<=1;return{outerHeightStyle:X,overflow:ne}},[i,s,y.placeholder]),P=()=>{const D=A();fr(D)||h($=>mr($,D,b))};tr(()=>{const D=()=>{const x=A();fr(x)||Dn.flushSync(()=>{h(R=>mr(R,x,b))})},$=$r(()=>{var x,R,L;if(b.current=0,!((x=O.current)===null||x===void 0)&&x.style.height||!((R=O.current)===null||R===void 0)&&R.style.width){((L=O.current)===null||L===void 0?void 0:L.style.overflow)==="hidden"&&h(G=>Object.assign(Object.assign({},G),{overflow:!1}));return}D()},166,!0),j=O.current,M=vr(j);M.addEventListener("resize",$);let K;return typeof ResizeObserver<"u"&&(K=new ResizeObserver($),K.observe(j)),()=>{$.clear(),M.removeEventListener("resize",$),K&&K.disconnect()}},[A]),tr(()=>{P()}),_.useEffect(()=>{b.current=0},[c]);const I=D=>{b.current=0,g||P(),l&&l(D)},H=Object.assign({"--__ac-textarea-height":S.outerHeightStyle+"px","--__axc-textarea-height":S.outerHeightStyle+"px",overflow:S.overflow&&!d&&!(!((r=O.current)===null||r===void 0)&&r.style.height)&&!(!((a=O.current)===null||a===void 0)&&a.style.width)?"hidden":void 0},v);return m.createElement(m.Fragment,null,m.createElement("textarea",Object.assign({value:c,onChange:I,ref:V,rows:s,style:H},y,{className:n})),m.createElement("textarea",{"aria-hidden":!0,className:n,readOnly:!0,ref:k,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},v)}))});function fr(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const jl=({maxLengthId:e,maxLength:t,currentLength:r,size:a,i18n:n})=>{const{cn:l}=B(),i=Xe("Textarea",{charsLeft:n?.counterLeft?`{chars} ${n.counterLeft}`:void 0,charsTooMany:n?.counterTooMuch?`{chars} ${n.counterTooMuch}`:void 0}),s=t-r,[d,v]=_.useState(s);return _.useEffect(()=>{const c=$r(()=>{v(s)},2e3);return c(),()=>{c.clear()}},[s]),m.createElement(m.Fragment,null,m.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:t})),s<20&&m.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},gr(d,i)),m.createElement(Oe,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:a},gr(s,i)))},gr=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Dl=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Ml=_.forwardRef((e,t)=>{var r,a,n;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:d,size:v,inputDescriptionId:c}=Ca(e,"textarea"),{label:y,className:g,description:O,maxLength:V,hideLabel:k=!1,resize:b,UNSAFE_autoScrollbar:S,i18n:h,readOnly:A}=e,P=Dl(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:I}=B(),H=Oa(),D=V!==void 0&&V>0,[$,j]=_.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),M=()=>{let x=P?.minRows?P?.minRows:3;return v==="small"&&(x=P?.minRows?P?.minRows:2),x},K=Je(l["aria-describedby"],{[H??""]:D});return m.createElement("div",{className:I(g,"navds-form-field",`navds-form-field--${v}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":A,"navds-textarea--readonly":A,"navds-textarea--error":d,"navds-textarea--autoscrollbar":S,[`navds-textarea--resize-${b===!0?"both":b}`]:b})},m.createElement(Re,{htmlFor:l.id,size:v,className:I("navds-form-field__label",{"navds-sr-only":k})},A&&m.createElement(Zr,null),y),!!O&&m.createElement(Oe,{className:I("navds-form-field__description",{"navds-sr-only":k}),id:c,size:v,as:"div"},O),m.createElement(Ll,Object.assign({},ve(P,["error","errorId","size"]),l,{onChange:Ka(e.onChange,e.value===void 0?x=>j(x.target.value):void 0),minRows:M(),autoScrollbar:S,ref:t,readOnly:A,className:I("navds-textarea__input","navds-body-short",`navds-body-short--${v??"medium"}`)},K?{"aria-describedby":K}:{})),D&&!A&&!l.disabled&&m.createElement(jl,{maxLengthId:H,maxLength:V,currentLength:(n=(a=e.value)===null||a===void 0?void 0:a.length)!==null&&n!==void 0?n:$.length,size:v,i18n:h}),m.createElement("div",{className:I("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&m.createElement(Br,{size:v,showIcon:!0},e.error)))});function Kl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yr={exports:{}},Be={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r;function Cl(){if(_r)return Be;_r=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,n,l){var i=null;if(l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),"key"in n){l={};for(var s in n)s!=="key"&&(l[s]=n[s])}else l=n;return n=l.ref,{$$typeof:e,type:a,key:i,ref:n!==void 0?n:null,props:l}}return Be.Fragment=t,Be.jsx=r,Be.jsxs=r,Be}var br;function Gl(){return br||(br=1,yr.exports=Cl()),yr.exports}var _e=Gl();const Ul=({children:e})=>{const t=_.Children.toArray(e);return t.length===0?null:_e.jsx(al,{variant:"warning",size:"small",children:_e.jsx(We,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:t.map(r=>_e.jsx(Oe,{size:"small",children:r},Bl(r)))})})},Bl=e=>{if(_.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},ea={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};Pe(ea);const fa="var(--ax-bg-neutral-strong)",en=4,$l=(e,t,r)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${fa};
    border-radius: ${en}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${fa};
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
`,ql=(e,t,r)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${fa};
    border-radius: ${en}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${fa};
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
`,zl=(e,t,r,a)=>t?ql(e,r,a):$l(e,r,a),Hl=(e,t,r)=>r?"":t?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,Yl=({children:e,alignOffset:t=0,alignLeft:r=!1,marginTop:a=0,marginLeft:n=0,hideBorder:l=!1})=>_e.jsxs(_e.Fragment,{children:[_e.jsx("style",{dangerouslySetInnerHTML:{__html:zl(t,r,a,n)}}),_e.jsx("div",{className:Hl(t,r,l),children:e})]});var pr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var hr;function Wl(){return hr||(hr=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=n(l,a.call(this,s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)t.call(l,s)&&l[s]&&(i=n(i,this&&this[s]||s));return i}function n(l,i){return i?l?l+" "+i:l+i:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(pr)),pr.exports}var Jl=Wl();const $a=Kl(Jl),Zl="_borderbox_1a0x6_1",Xl="_error_1a0x6_5",Ql="_warning_1a0x6_8",ei={borderbox:Zl,error:Xl,warning:Ql};$a.bind(ei);const ai="_aksjonspunkt_11wjs_1",ri="_erAksjonspunktApent_11wjs_4",ni="_erIkkeGodkjentAvBeslutter_11wjs_8",ti={aksjonspunkt:ai,erAksjonspunktApent:ri,erIkkeGodkjentAvBeslutter:ni};$a.bind(ti);Pe(ea);Pe(ea);const li="_divider_1jpov_1",ii="_dividerParagraf_1jpov_8",si="_leftPanel_1jpov_11",oi="_rightPanel_1jpov_14",ui={divider:li,dividerParagraf:ii,leftPanel:si,rightPanel:oi};$a.bind(ui);const an=()=>_e.jsx("span",{"data-testid":"editedIcon",children:_e.jsx(lt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});Pe(ea);Pe(ea);var aa=e=>e.type==="checkbox",ke=e=>e instanceof Date,ae=e=>e==null;const rn=e=>typeof e=="object";var W=e=>!ae(e)&&!Array.isArray(e)&&rn(e)&&!ke(e),nn=e=>W(e)&&e.target?aa(e.target)?e.target.checked:e.target.value:e,di=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,tn=(e,t)=>e.has(di(t)),ci=e=>{const t=e.constructor&&e.constructor.prototype;return W(t)&&t.hasOwnProperty("isPrototypeOf")},qa=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Z(e){let t;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(!(qa&&(e instanceof Blob||a))&&(r||W(e)))if(t=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!ci(e))t=e;else for(const n in e)e.hasOwnProperty(n)&&(t[n]=Z(e[n]));else return e;return t}var wa=e=>/^\w*$/.test(e),Y=e=>e===void 0,za=e=>Array.isArray(e)?e.filter(Boolean):[],Ha=e=>za(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,t,r)=>{if(!t||!W(e))return r;const a=(wa(t)?[t]:Ha(t)).reduce((n,l)=>ae(n)?n:n[l],e);return Y(a)||a===e?Y(e[t])?r:e[t]:a},oe=e=>typeof e=="boolean",z=(e,t,r)=>{let a=-1;const n=wa(t)?[t]:Ha(t),l=n.length,i=l-1;for(;++a<l;){const s=n[a];let d=r;if(a!==i){const v=e[s];d=W(v)||Array.isArray(v)?v:isNaN(+n[a+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=d,e=e[s]}};const ga={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},de={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ya=m.createContext(null);Ya.displayName="HookFormContext";const ra=()=>m.useContext(Ya),mi=e=>{const{children:t,...r}=e;return m.createElement(Ya.Provider,{value:r},t)};var ln=(e,t,r,a=!0)=>{const n={defaultValues:t._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const i=l;return t._proxyFormState[i]!==de.all&&(t._proxyFormState[i]=!a||de.all),r&&(r[i]=!0),e[i]}});return n};const Wa=typeof window<"u"?m.useLayoutEffect:m.useEffect;function vi(e){const t=ra(),{control:r=t.control,disabled:a,name:n,exact:l}=e||{},[i,s]=m.useState(r._formState),d=m.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Wa(()=>r._subscribe({name:n,formState:d.current,exact:l,callback:v=>{!a&&s({...r._formState,...v})}}),[n,a,l]),m.useEffect(()=>{d.current.isValid&&r._setValid(!0)},[r]),m.useMemo(()=>ln(i,r,d.current,!1),[i,r])}var me=e=>typeof e=="string",sn=(e,t,r,a,n)=>me(e)?(a&&t.watch.add(e),w(r,e,n)):Array.isArray(e)?e.map(l=>(a&&t.watch.add(l),w(r,l))):(a&&(t.watchAll=!0),r),Pa=e=>ae(e)||!rn(e);function ye(e,t,r=new WeakSet){if(Pa(e)||Pa(t))return e===t;if(ke(e)&&ke(t))return e.getTime()===t.getTime();const a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;if(r.has(e)||r.has(t))return!0;r.add(e),r.add(t);for(const l of a){const i=e[l];if(!n.includes(l))return!1;if(l!=="ref"){const s=t[l];if(ke(i)&&ke(s)||W(i)&&W(s)||Array.isArray(i)&&Array.isArray(s)?!ye(i,s,r):i!==s)return!1}}return!0}function fi(e){const t=ra(),{control:r=t.control,name:a,defaultValue:n,disabled:l,exact:i,compute:s}=e||{},d=m.useRef(n),v=m.useRef(s),c=m.useRef(void 0);v.current=s;const y=m.useMemo(()=>r._getWatch(a,d.current),[r,a]),[g,O]=m.useState(v.current?v.current(y):y);return Wa(()=>r._subscribe({name:a,formState:{values:!0},exact:i,callback:V=>{if(!l){const k=sn(a,r._names,V.values||r._formValues,!1,d.current);if(v.current){const b=v.current(k);ye(b,c.current)||(O(b),c.current=b)}else O(k)}}}),[r,l,a,i]),m.useEffect(()=>r._removeUnmounted()),g}function on(e){const t=ra(),{name:r,disabled:a,control:n=t.control,shouldUnregister:l,defaultValue:i}=e,s=tn(n._names.array,r),d=m.useMemo(()=>w(n._formValues,r,w(n._defaultValues,r,i)),[n,r,i]),v=fi({control:n,name:r,defaultValue:d,exact:!0}),c=vi({control:n,name:r,exact:!0}),y=m.useRef(e),g=m.useRef(n.register(r,{...e.rules,value:v,...oe(e.disabled)?{disabled:e.disabled}:{}}));y.current=e;const O=m.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!w(c.errors,r)},isDirty:{enumerable:!0,get:()=>!!w(c.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!w(c.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!w(c.validatingFields,r)},error:{enumerable:!0,get:()=>w(c.errors,r)}}),[c,r]),V=m.useCallback(h=>g.current.onChange({target:{value:nn(h),name:r},type:ga.CHANGE}),[r]),k=m.useCallback(()=>g.current.onBlur({target:{value:w(n._formValues,r),name:r},type:ga.BLUR}),[r,n._formValues]),b=m.useCallback(h=>{const A=w(n._fields,r);A&&h&&(A._f.ref={focus:()=>h.focus&&h.focus(),select:()=>h.select&&h.select(),setCustomValidity:P=>h.setCustomValidity(P),reportValidity:()=>h.reportValidity()})},[n._fields,r]),S=m.useMemo(()=>({name:r,value:v,...oe(a)||c.disabled?{disabled:c.disabled||a}:{},onChange:V,onBlur:k,ref:b}),[r,a,c.disabled,V,k,b,v]);return m.useEffect(()=>{const h=n._options.shouldUnregister||l;n.register(r,{...y.current.rules,...oe(y.current.disabled)?{disabled:y.current.disabled}:{}});const A=(P,I)=>{const H=w(n._fields,P);H&&H._f&&(H._f.mount=I)};if(A(r,!0),h){const P=Z(w(n._options.defaultValues,r));z(n._defaultValues,r,P),Y(w(n._formValues,r))&&z(n._formValues,r,P)}return!s&&n.register(r),()=>{(s?h&&!n._state.action:h)?n.unregister(r):A(r,!1)}},[r,n,s,l]),m.useEffect(()=>{n._setDisabledField({disabled:a,name:r})},[a,r,n]),m.useMemo(()=>({field:S,formState:c,fieldState:O}),[S,c,O])}var gi=(e,t,r,a,n)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:n||!0}}:{},He=e=>Array.isArray(e)?e:[e],Er=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}},ie=e=>W(e)&&!Object.keys(e).length,Ja=e=>e.type==="file",ce=e=>typeof e=="function",ya=e=>{if(!qa)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},un=e=>e.type==="select-multiple",Za=e=>e.type==="radio",yi=e=>Za(e)||aa(e),Aa=e=>ya(e)&&e.isConnected;function _i(e,t){const r=t.slice(0,-1).length;let a=0;for(;a<r;)e=Y(e)?a++:e[t[a++]];return e}function bi(e){for(const t in e)if(e.hasOwnProperty(t)&&!Y(e[t]))return!1;return!0}function J(e,t){const r=Array.isArray(t)?t:wa(t)?[t]:Ha(t),a=r.length===1?e:_i(e,r),n=r.length-1,l=r[n];return a&&delete a[l],n!==0&&(W(a)&&ie(a)||Array.isArray(a)&&bi(a))&&J(e,r.slice(0,-1)),e}var dn=e=>{for(const t in e)if(ce(e[t]))return!0;return!1};function _a(e,t={}){const r=Array.isArray(e);if(W(e)||r)for(const a in e)Array.isArray(e[a])||W(e[a])&&!dn(e[a])?(t[a]=Array.isArray(e[a])?[]:{},_a(e[a],t[a])):ae(e[a])||(t[a]=!0);return t}function cn(e,t,r){const a=Array.isArray(e);if(W(e)||a)for(const n in e)Array.isArray(e[n])||W(e[n])&&!dn(e[n])?Y(t)||Pa(r[n])?r[n]=Array.isArray(e[n])?_a(e[n],[]):{..._a(e[n])}:cn(e[n],ae(t)?{}:t[n],r[n]):r[n]=!ye(e[n],t[n]);return r}var $e=(e,t)=>cn(e,t,_a(t));const Or={value:!1,isValid:!1},Rr={value:!0,isValid:!0};var mn=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Y(e[0].attributes.value)?Y(e[0].value)||e[0].value===""?Rr:{value:e[0].value,isValid:!0}:Rr:Or}return Or},vn=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>Y(e)?e:t?e===""?NaN:e&&+e:r&&me(e)?new Date(e):a?a(e):e;const wr={isValid:!1,value:null};var fn=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,wr):wr;function Nr(e){const t=e.ref;return Ja(t)?t.files:Za(t)?fn(e.refs).value:un(t)?[...t.selectedOptions].map(({value:r})=>r):aa(t)?mn(e.refs).value:vn(Y(t.value)?e.ref.value:t.value,e)}var pi=(e,t,r,a)=>{const n={};for(const l of e){const i=w(t,l);i&&z(n,l,i._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:a}},ba=e=>e instanceof RegExp,qe=e=>Y(e)?e:ba(e)?e.source:W(e)?ba(e.value)?e.value.source:e.value:e,Vr=e=>({isOnSubmit:!e||e===de.onSubmit,isOnBlur:e===de.onBlur,isOnChange:e===de.onChange,isOnAll:e===de.all,isOnTouch:e===de.onTouched});const kr="AsyncFunction";var hi=e=>!!e&&!!e.validate&&!!(ce(e.validate)&&e.validate.constructor.name===kr||W(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===kr)),Ei=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),xr=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const Ye=(e,t,r,a)=>{for(const n of r||Object.keys(e)){const l=w(e,n);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&t(i.refs[0],n)&&!a)return!0;if(i.ref&&t(i.ref,i.name)&&!a)return!0;if(Ye(s,t))break}else if(W(s)&&Ye(s,t))break}}};function Tr(e,t,r){const a=w(e,r);if(a||wa(r))return{error:a,name:r};const n=r.split(".");for(;n.length;){const l=n.join("."),i=w(t,l),s=w(e,l);if(i&&!Array.isArray(i)&&r!==l)return{name:r};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};n.pop()}return{name:r}}var Oi=(e,t,r,a)=>{r(e);const{name:n,...l}=e;return ie(l)||Object.keys(l).length>=Object.keys(t).length||Object.keys(l).find(i=>t[i]===(!a||de.all))},Ri=(e,t,r)=>!e||!t||e===t||He(e).some(a=>a&&(r?a===t:a.startsWith(t)||t.startsWith(a))),wi=(e,t,r,a,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(t||e):(r?a.isOnBlur:n.isOnBlur)?!e:(r?a.isOnChange:n.isOnChange)?e:!0,Ni=(e,t)=>!za(w(e,t)).length&&J(e,t),Vi=(e,t,r)=>{const a=He(w(e,r));return z(a,"root",t[r]),z(e,r,a),e},ca=e=>me(e);function Sr(e,t,r="validate"){if(ca(e)||Array.isArray(e)&&e.every(ca)||oe(e)&&!e)return{type:r,message:ca(e)?e:"",ref:t}}var Ae=e=>W(e)&&!ba(e)?e:{value:e,message:""},Fr=async(e,t,r,a,n,l)=>{const{ref:i,refs:s,required:d,maxLength:v,minLength:c,min:y,max:g,pattern:O,validate:V,name:k,valueAsNumber:b,mount:S}=e._f,h=w(r,k);if(!S||t.has(k))return{};const A=s?s[0]:i,P=x=>{n&&A.reportValidity&&(A.setCustomValidity(oe(x)?"":x||""),A.reportValidity())},I={},H=Za(i),D=aa(i),$=H||D,j=(b||Ja(i))&&Y(i.value)&&Y(h)||ya(i)&&i.value===""||h===""||Array.isArray(h)&&!h.length,M=gi.bind(null,k,a,I),K=(x,R,L,G=ge.maxLength,C=ge.minLength)=>{const X=x?R:L;I[k]={type:x?G:C,message:X,ref:i,...M(x?G:C,X)}};if(l?!Array.isArray(h)||!h.length:d&&(!$&&(j||ae(h))||oe(h)&&!h||D&&!mn(s).isValid||H&&!fn(s).isValid)){const{value:x,message:R}=ca(d)?{value:!!d,message:d}:Ae(d);if(x&&(I[k]={type:ge.required,message:R,ref:A,...M(ge.required,R)},!a))return P(R),I}if(!j&&(!ae(y)||!ae(g))){let x,R;const L=Ae(g),G=Ae(y);if(!ae(h)&&!isNaN(h)){const C=i.valueAsNumber||h&&+h;ae(L.value)||(x=C>L.value),ae(G.value)||(R=C<G.value)}else{const C=i.valueAsDate||new Date(h),X=fe=>new Date(new Date().toDateString()+" "+fe),ne=i.type=="time",te=i.type=="week";me(L.value)&&h&&(x=ne?X(h)>X(L.value):te?h>L.value:C>new Date(L.value)),me(G.value)&&h&&(R=ne?X(h)<X(G.value):te?h<G.value:C<new Date(G.value))}if((x||R)&&(K(!!x,L.message,G.message,ge.max,ge.min),!a))return P(I[k].message),I}if((v||c)&&!j&&(me(h)||l&&Array.isArray(h))){const x=Ae(v),R=Ae(c),L=!ae(x.value)&&h.length>+x.value,G=!ae(R.value)&&h.length<+R.value;if((L||G)&&(K(L,x.message,R.message),!a))return P(I[k].message),I}if(O&&!j&&me(h)){const{value:x,message:R}=Ae(O);if(ba(x)&&!h.match(x)&&(I[k]={type:ge.pattern,message:R,ref:i,...M(ge.pattern,R)},!a))return P(R),I}if(V){if(ce(V)){const x=await V(h,r),R=Sr(x,A);if(R&&(I[k]={...R,...M(ge.validate,R.message)},!a))return P(R.message),I}else if(W(V)){let x={};for(const R in V){if(!ie(x)&&!a)break;const L=Sr(await V[R](h,r),A,R);L&&(x={...L,...M(R,L.message)},P(L.message),a&&(I[k]=x))}if(!ie(x)&&(I[k]={ref:A,...x},!a))return I}}return P(!0),I};const ki={mode:de.onSubmit,reValidateMode:de.onChange,shouldFocusError:!0};function xi(e={}){let t={...ki,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:ce(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},a={},n=W(t.defaultValues)||W(t.values)?Z(t.defaultValues||t.values)||{}:{},l=t.shouldUnregister?{}:Z(n),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,v=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let y={...c};const g={array:Er(),state:Er()},O=t.criteriaMode===de.all,V=o=>u=>{clearTimeout(v),v=setTimeout(o,u)},k=async o=>{if(!t.disabled&&(c.isValid||y.isValid||o)){const u=t.resolver?ie((await D()).errors):await j(a,!0);u!==r.isValid&&g.state.next({isValid:u})}},b=(o,u)=>{!t.disabled&&(c.isValidating||c.validatingFields||y.isValidating||y.validatingFields)&&((o||Array.from(s.mount)).forEach(f=>{f&&(u?z(r.validatingFields,f,u):J(r.validatingFields,f))}),g.state.next({validatingFields:r.validatingFields,isValidating:!ie(r.validatingFields)}))},S=(o,u=[],f,N,E=!0,p=!0)=>{if(N&&f&&!t.disabled){if(i.action=!0,p&&Array.isArray(w(a,o))){const F=f(w(a,o),N.argA,N.argB);E&&z(a,o,F)}if(p&&Array.isArray(w(r.errors,o))){const F=f(w(r.errors,o),N.argA,N.argB);E&&z(r.errors,o,F),Ni(r.errors,o)}if((c.touchedFields||y.touchedFields)&&p&&Array.isArray(w(r.touchedFields,o))){const F=f(w(r.touchedFields,o),N.argA,N.argB);E&&z(r.touchedFields,o,F)}(c.dirtyFields||y.dirtyFields)&&(r.dirtyFields=$e(n,l)),g.state.next({name:o,isDirty:K(o,u),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else z(l,o,u)},h=(o,u)=>{z(r.errors,o,u),g.state.next({errors:r.errors})},A=o=>{r.errors=o,g.state.next({errors:r.errors,isValid:!1})},P=(o,u,f,N)=>{const E=w(a,o);if(E){const p=w(l,o,Y(f)?w(n,o):f);Y(p)||N&&N.defaultChecked||u?z(l,o,u?p:Nr(E._f)):L(o,p),i.mount&&k()}},I=(o,u,f,N,E)=>{let p=!1,F=!1;const U={name:o};if(!t.disabled){if(!f||N){(c.isDirty||y.isDirty)&&(F=r.isDirty,r.isDirty=U.isDirty=K(),p=F!==U.isDirty);const q=ye(w(n,o),u);F=!!w(r.dirtyFields,o),q?J(r.dirtyFields,o):z(r.dirtyFields,o,!0),U.dirtyFields=r.dirtyFields,p=p||(c.dirtyFields||y.dirtyFields)&&F!==!q}if(f){const q=w(r.touchedFields,o);q||(z(r.touchedFields,o,f),U.touchedFields=r.touchedFields,p=p||(c.touchedFields||y.touchedFields)&&q!==f)}p&&E&&g.state.next(U)}return p?U:{}},H=(o,u,f,N)=>{const E=w(r.errors,o),p=(c.isValid||y.isValid)&&oe(u)&&r.isValid!==u;if(t.delayError&&f?(d=V(()=>h(o,f)),d(t.delayError)):(clearTimeout(v),d=null,f?z(r.errors,o,f):J(r.errors,o)),(f?!ye(E,f):E)||!ie(N)||p){const F={...N,...p&&oe(u)?{isValid:u}:{},errors:r.errors,name:o};r={...r,...F},g.state.next(F)}},D=async o=>{b(o,!0);const u=await t.resolver(l,t.context,pi(o||s.mount,a,t.criteriaMode,t.shouldUseNativeValidation));return b(o),u},$=async o=>{const{errors:u}=await D(o);if(o)for(const f of o){const N=w(u,f);N?z(r.errors,f,N):J(r.errors,f)}else r.errors=u;return u},j=async(o,u,f={valid:!0})=>{for(const N in o){const E=o[N];if(E){const{_f:p,...F}=E;if(p){const U=s.array.has(p.name),q=E._f&&hi(E._f);q&&c.validatingFields&&b([N],!0);const ue=await Fr(E,s.disabled,l,O,t.shouldUseNativeValidation&&!u,U);if(q&&c.validatingFields&&b([N]),ue[p.name]&&(f.valid=!1,u))break;!u&&(w(ue,p.name)?U?Vi(r.errors,ue,p.name):z(r.errors,p.name,ue[p.name]):J(r.errors,p.name))}!ie(F)&&await j(F,u,f)}}return f.valid},M=()=>{for(const o of s.unMount){const u=w(a,o);u&&(u._f.refs?u._f.refs.every(f=>!Aa(f)):!Aa(u._f.ref))&&je(o)}s.unMount=new Set},K=(o,u)=>!t.disabled&&(o&&u&&z(l,o,u),!ye(fe(),n)),x=(o,u,f)=>sn(o,s,{...i.mount?l:Y(u)?n:me(o)?{[o]:u}:u},f,u),R=o=>za(w(i.mount?l:n,o,t.shouldUnregister?w(n,o,[]):[])),L=(o,u,f={})=>{const N=w(a,o);let E=u;if(N){const p=N._f;p&&(!p.disabled&&z(l,o,vn(u,p)),E=ya(p.ref)&&ae(u)?"":u,un(p.ref)?[...p.ref.options].forEach(F=>F.selected=E.includes(F.value)):p.refs?aa(p.ref)?p.refs.forEach(F=>{(!F.defaultChecked||!F.disabled)&&(Array.isArray(E)?F.checked=!!E.find(U=>U===F.value):F.checked=E===F.value||!!E)}):p.refs.forEach(F=>F.checked=F.value===E):Ja(p.ref)?p.ref.value="":(p.ref.value=E,p.ref.type||g.state.next({name:o,values:Z(l)})))}(f.shouldDirty||f.shouldTouch)&&I(o,E,f.shouldTouch,f.shouldDirty,!0),f.shouldValidate&&te(o)},G=(o,u,f)=>{for(const N in u){if(!u.hasOwnProperty(N))return;const E=u[N],p=o+"."+N,F=w(a,p);(s.array.has(o)||W(E)||F&&!F._f)&&!ke(E)?G(p,E,f):L(p,E,f)}},C=(o,u,f={})=>{const N=w(a,o),E=s.array.has(o),p=Z(u);z(l,o,p),E?(g.array.next({name:o,values:Z(l)}),(c.isDirty||c.dirtyFields||y.isDirty||y.dirtyFields)&&f.shouldDirty&&g.state.next({name:o,dirtyFields:$e(n,l),isDirty:K(o,p)})):N&&!N._f&&!ae(p)?G(o,p,f):L(o,p,f),xr(o,s)&&g.state.next({...r,name:o}),g.state.next({name:i.mount?o:void 0,values:Z(l)})},X=async o=>{i.mount=!0;const u=o.target;let f=u.name,N=!0;const E=w(a,f),p=q=>{N=Number.isNaN(q)||ke(q)&&isNaN(q.getTime())||ye(q,w(l,f,q))},F=Vr(t.mode),U=Vr(t.reValidateMode);if(E){let q,ue;const ia=u.type?Nr(E._f):nn(o),he=o.type===ga.BLUR||o.type===ga.FOCUS_OUT,Rn=!Ei(E._f)&&!t.resolver&&!w(r.errors,f)&&!E._f.deps||wi(he,w(r.touchedFields,f),r.isSubmitted,U,F),ka=xr(f,s,he);z(l,f,ia),he?(!u||!u.readOnly)&&(E._f.onBlur&&E._f.onBlur(o),d&&d(0)):E._f.onChange&&E._f.onChange(o);const xa=I(f,ia,he),wn=!ie(xa)||ka;if(!he&&g.state.next({name:f,type:o.type,values:Z(l)}),Rn)return(c.isValid||y.isValid)&&(t.mode==="onBlur"?he&&k():he||k()),wn&&g.state.next({name:f,...ka?{}:xa});if(!he&&ka&&g.state.next({...r}),t.resolver){const{errors:er}=await D([f]);if(p(ia),N){const Nn=Tr(r.errors,a,f),ar=Tr(er,a,Nn.name||f);q=ar.error,f=ar.name,ue=ie(er)}}else b([f],!0),q=(await Fr(E,s.disabled,l,O,t.shouldUseNativeValidation))[f],b([f]),p(ia),N&&(q?ue=!1:(c.isValid||y.isValid)&&(ue=await j(a,!0)));N&&(E._f.deps&&te(E._f.deps),H(f,ue,q,xa))}},ne=(o,u)=>{if(w(r.errors,u)&&o.focus)return o.focus(),1},te=async(o,u={})=>{let f,N;const E=He(o);if(t.resolver){const p=await $(Y(o)?o:E);f=ie(p),N=o?!E.some(F=>w(p,F)):f}else o?(N=(await Promise.all(E.map(async p=>{const F=w(a,p);return await j(F&&F._f?{[p]:F}:F)}))).every(Boolean),!(!N&&!r.isValid)&&k()):N=f=await j(a);return g.state.next({...!me(o)||(c.isValid||y.isValid)&&f!==r.isValid?{}:{name:o},...t.resolver||!o?{isValid:f}:{},errors:r.errors}),u.shouldFocus&&!N&&Ye(a,ne,o?E:s.mount),N},fe=o=>{const u={...i.mount?l:n};return Y(o)?u:me(o)?w(u,o):o.map(f=>w(u,f))},ee=(o,u)=>({invalid:!!w((u||r).errors,o),isDirty:!!w((u||r).dirtyFields,o),error:w((u||r).errors,o),isValidating:!!w(r.validatingFields,o),isTouched:!!w((u||r).touchedFields,o)}),Le=o=>{o&&He(o).forEach(u=>J(r.errors,u)),g.state.next({errors:o?r.errors:{}})},we=(o,u,f)=>{const N=(w(a,o,{_f:{}})._f||{}).ref,E=w(r.errors,o)||{},{ref:p,message:F,type:U,...q}=E;z(r.errors,o,{...q,...u,ref:N}),g.state.next({name:o,errors:r.errors,isValid:!1}),f&&f.shouldFocus&&N&&N.focus&&N.focus()},Na=(o,u)=>ce(o)?g.state.subscribe({next:f=>"values"in f&&o(x(void 0,u),f)}):x(o,u,!0),na=o=>g.state.subscribe({next:u=>{Ri(o.name,u.name,o.exact)&&Oi(u,o.formState||c,Ce,o.reRenderRoot)&&o.callback({values:{...l},...r,...u,defaultValues:n})}}).unsubscribe,Va=o=>(i.mount=!0,y={...y,...o.formState},na({...o,formState:y})),je=(o,u={})=>{for(const f of o?He(o):s.mount)s.mount.delete(f),s.array.delete(f),u.keepValue||(J(a,f),J(l,f)),!u.keepError&&J(r.errors,f),!u.keepDirty&&J(r.dirtyFields,f),!u.keepTouched&&J(r.touchedFields,f),!u.keepIsValidating&&J(r.validatingFields,f),!t.shouldUnregister&&!u.keepDefaultValue&&J(n,f);g.state.next({values:Z(l)}),g.state.next({...r,...u.keepDirty?{isDirty:K()}:{}}),!u.keepIsValid&&k()},ta=({disabled:o,name:u})=>{(oe(o)&&i.mount||o||s.disabled.has(u))&&(o?s.disabled.add(u):s.disabled.delete(u))},xe=(o,u={})=>{let f=w(a,o);const N=oe(u.disabled)||oe(t.disabled);return z(a,o,{...f||{},_f:{...f&&f._f?f._f:{ref:{name:o}},name:o,mount:!0,...u}}),s.mount.add(o),f?ta({disabled:oe(u.disabled)?u.disabled:t.disabled,name:o}):P(o,!0,u.value),{...N?{disabled:u.disabled||t.disabled}:{},...t.progressive?{required:!!u.required,min:qe(u.min),max:qe(u.max),minLength:qe(u.minLength),maxLength:qe(u.maxLength),pattern:qe(u.pattern)}:{},name:o,onChange:X,onBlur:X,ref:E=>{if(E){xe(o,u),f=w(a,o);const p=Y(E.value)&&E.querySelectorAll&&E.querySelectorAll("input,select,textarea")[0]||E,F=yi(p),U=f._f.refs||[];if(F?U.find(q=>q===p):p===f._f.ref)return;z(a,o,{_f:{...f._f,...F?{refs:[...U.filter(Aa),p,...Array.isArray(w(n,o))?[{}]:[]],ref:{type:p.type,name:o}}:{ref:p}}}),P(o,!1,void 0,p)}else f=w(a,o,{}),f._f&&(f._f.mount=!1),(t.shouldUnregister||u.shouldUnregister)&&!(tn(s.array,o)&&i.action)&&s.unMount.add(o)}}},Te=()=>t.shouldFocusError&&Ye(a,ne,s.mount),De=o=>{oe(o)&&(g.state.next({disabled:o}),Ye(a,(u,f)=>{const N=w(a,f);N&&(u.disabled=N._f.disabled||o,Array.isArray(N._f.refs)&&N._f.refs.forEach(E=>{E.disabled=N._f.disabled||o}))},0,!1))},Se=(o,u)=>async f=>{let N;f&&(f.preventDefault&&f.preventDefault(),f.persist&&f.persist());let E=Z(l);if(g.state.next({isSubmitting:!0}),t.resolver){const{errors:p,values:F}=await D();r.errors=p,E=Z(F)}else await j(a);if(s.disabled.size)for(const p of s.disabled)J(E,p);if(J(r.errors,"root"),ie(r.errors)){g.state.next({errors:{}});try{await o(E,f)}catch(p){N=p}}else u&&await u({...r.errors},f),Te(),setTimeout(Te);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ie(r.errors)&&!N,submitCount:r.submitCount+1,errors:r.errors}),N)throw N},Me=(o,u={})=>{w(a,o)&&(Y(u.defaultValue)?C(o,Z(w(n,o))):(C(o,u.defaultValue),z(n,o,Z(u.defaultValue))),u.keepTouched||J(r.touchedFields,o),u.keepDirty||(J(r.dirtyFields,o),r.isDirty=u.defaultValue?K(o,Z(w(n,o))):K()),u.keepError||(J(r.errors,o),c.isValid&&k()),g.state.next({...r}))},Ne=(o,u={})=>{const f=o?Z(o):n,N=Z(f),E=ie(o),p=E?n:N;if(u.keepDefaultValues||(n=f),!u.keepValues){if(u.keepDirtyValues){const F=new Set([...s.mount,...Object.keys($e(n,l))]);for(const U of Array.from(F))w(r.dirtyFields,U)?z(p,U,w(l,U)):C(U,w(p,U))}else{if(qa&&Y(o))for(const F of s.mount){const U=w(a,F);if(U&&U._f){const q=Array.isArray(U._f.refs)?U._f.refs[0]:U._f.ref;if(ya(q)){const ue=q.closest("form");if(ue){ue.reset();break}}}}if(u.keepFieldsRef)for(const F of s.mount)C(F,w(p,F));else a={}}l=t.shouldUnregister?u.keepDefaultValues?Z(n):{}:Z(p),g.array.next({values:{...p}}),g.state.next({values:{...p}})}s={mount:u.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!c.isValid||!!u.keepIsValid||!!u.keepDirtyValues,i.watch=!!t.shouldUnregister,g.state.next({submitCount:u.keepSubmitCount?r.submitCount:0,isDirty:E?!1:u.keepDirty?r.isDirty:!!(u.keepDefaultValues&&!ye(o,n)),isSubmitted:u.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:E?{}:u.keepDirtyValues?u.keepDefaultValues&&l?$e(n,l):r.dirtyFields:u.keepDefaultValues&&o?$e(n,o):u.keepDirty?r.dirtyFields:{},touchedFields:u.keepTouched?r.touchedFields:{},errors:u.keepErrors?r.errors:{},isSubmitSuccessful:u.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:n})},Ve=(o,u)=>Ne(ce(o)?o(l):o,u),Ke=(o,u={})=>{const f=w(a,o),N=f&&f._f;if(N){const E=N.refs?N.refs[0]:N.ref;E.focus&&(E.focus(),u.shouldSelect&&ce(E.select)&&E.select())}},Ce=o=>{r={...r,...o}},Fe={control:{register:xe,unregister:je,getFieldState:ee,handleSubmit:Se,setError:we,_subscribe:na,_runSchema:D,_focusError:Te,_getWatch:x,_getDirty:K,_setValid:k,_setFieldArray:S,_setDisabledField:ta,_setErrors:A,_getFieldArray:R,_reset:Ne,_resetDefaultValues:()=>ce(t.defaultValues)&&t.defaultValues().then(o=>{Ve(o,t.resetOptions),g.state.next({isLoading:!1})}),_removeUnmounted:M,_disableForm:De,_subjects:g,_proxyFormState:c,get _fields(){return a},get _formValues(){return l},get _state(){return i},set _state(o){i=o},get _defaultValues(){return n},get _names(){return s},set _names(o){s=o},get _formState(){return r},get _options(){return t},set _options(o){t={...t,...o}}},subscribe:Va,trigger:te,register:xe,handleSubmit:Se,watch:Na,setValue:C,getValues:fe,reset:Ve,resetField:Me,clearErrors:Le,unregister:je,setError:we,setFocus:Ke,getFieldState:ee};return{...Fe,formControl:Fe}}function Ti(e={}){const t=m.useRef(void 0),r=m.useRef(void 0),[a,n]=m.useState({isDirty:!1,isValidating:!1,isLoading:ce(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:ce(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:a},e.defaultValues&&!ce(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=xi(e);t.current={...s,formState:a}}const l=t.current.control;return l._options=e,Wa(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>n({...l._formState}),reRenderRoot:!0});return n(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),m.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),m.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),m.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),m.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),m.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==a.isDirty&&l._subjects.state.next({isDirty:i})}},[l,a.isDirty]),m.useEffect(()=>{e.values&&!ye(e.values,r.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),r.current=e.values,n(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),m.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),t.current.formState=ln(a,l),t.current}function Si(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ar={exports:{}},ze={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr;function Fi(){if(Pr)return ze;Pr=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,n,l){var i=null;if(l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),"key"in n){l={};for(var s in n)s!=="key"&&(l[s]=n[s])}else l=n;return n=l.ref,{$$typeof:e,type:a,key:i,ref:n!==void 0?n:null,props:l}}return ze.Fragment=t,ze.jsx=r,ze.jsxs=r,ze}var Ir;function Ai(){return Ir||(Ir=1,Ar.exports=Fi()),Ar.exports}var re=Ai();const gn=e=>e.reduce((t,r,a)=>({...t,[a]:n=>r(n)||!0}),{}),yn=(e,t)=>t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e)?.message;var Ia={exports:{}},Pi=Ia.exports,Lr;function Ii(){return Lr||(Lr=1,function(e,t){(function(r,a){e.exports=a()})(Pi,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,d={},v=function(b){return(b=+b)+(b>68?1900:2e3)},c=function(b){return function(S){this[b]=+S}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(S){if(!S||S==="Z")return 0;var h=S.match(/([+-]|\d\d)/g),A=60*h[1]+(+h[2]||0);return A===0?0:h[0]==="+"?-A:A}(b)}],g=function(b){var S=d[b];return S&&(S.indexOf?S:S.s.concat(S.f))},O=function(b,S){var h,A=d.meridiem;if(A){for(var P=1;P<=24;P+=1)if(b.indexOf(A(P,0,S))>-1){h=P>12;break}}else h=b===(S?"pm":"PM");return h},V={A:[s,function(b){this.afternoon=O(b,!1)}],a:[s,function(b){this.afternoon=O(b,!0)}],Q:[n,function(b){this.month=3*(b-1)+1}],S:[n,function(b){this.milliseconds=100*+b}],SS:[l,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[i,c("seconds")],ss:[i,c("seconds")],m:[i,c("minutes")],mm:[i,c("minutes")],H:[i,c("hours")],h:[i,c("hours")],HH:[i,c("hours")],hh:[i,c("hours")],D:[i,c("day")],DD:[l,c("day")],Do:[s,function(b){var S=d.ordinal,h=b.match(/\d+/);if(this.day=h[0],S)for(var A=1;A<=31;A+=1)S(A).replace(/\[|\]/g,"")===b&&(this.day=A)}],w:[i,c("week")],ww:[l,c("week")],M:[i,c("month")],MM:[l,c("month")],MMM:[s,function(b){var S=g("months"),h=(g("monthsShort")||S.map(function(A){return A.slice(0,3)})).indexOf(b)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[s,function(b){var S=g("months").indexOf(b)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,c("year")],YY:[l,function(b){this.year=v(b)}],YYYY:[/\d{4}/,c("year")],Z:y,ZZ:y};function k(b){var S,h;S=b,h=d&&d.formats;for(var A=(b=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(M,K,x){var R=x&&x.toUpperCase();return K||h[x]||r[x]||h[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,G,C){return G||C.slice(1)})})).match(a),P=A.length,I=0;I<P;I+=1){var H=A[I],D=V[H],$=D&&D[0],j=D&&D[1];A[I]=j?{regex:$,parser:j}:H.replace(/^\[|\]$/g,"")}return function(M){for(var K={},x=0,R=0;x<P;x+=1){var L=A[x];if(typeof L=="string")R+=L.length;else{var G=L.regex,C=L.parser,X=M.slice(R),ne=G.exec(X)[0];C.call(K,ne),M=M.replace(ne,"")}}return function(te){var fe=te.afternoon;if(fe!==void 0){var ee=te.hours;fe?ee<12&&(te.hours+=12):ee===12&&(te.hours=0),delete te.afternoon}}(K),K}}return function(b,S,h){h.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(v=b.parseTwoDigitYear);var A=S.prototype,P=A.parse;A.parse=function(I){var H=I.date,D=I.utc,$=I.args;this.$u=D;var j=$[1];if(typeof j=="string"){var M=$[2]===!0,K=$[3]===!0,x=M||K,R=$[2];K&&(R=$[2]),d=this.$locale(),!M&&R&&(d=h.Ls[R]),this.$d=function(X,ne,te,fe){try{if(["x","X"].indexOf(ne)>-1)return new Date((ne==="X"?1e3:1)*X);var ee=k(ne)(X),Le=ee.year,we=ee.month,Na=ee.day,na=ee.hours,Va=ee.minutes,je=ee.seconds,ta=ee.milliseconds,xe=ee.zone,Te=ee.week,De=new Date,Se=Na||(Le||we?1:De.getDate()),Me=Le||De.getFullYear(),Ne=0;Le&&!we||(Ne=we>0?we-1:De.getMonth());var Ve,Ke=na||0,Ce=Va||0,la=je||0,Fe=ta||0;return xe?new Date(Date.UTC(Me,Ne,Se,Ke,Ce,la,Fe+60*xe.offset*1e3)):te?new Date(Date.UTC(Me,Ne,Se,Ke,Ce,la,Fe)):(Ve=new Date(Me,Ne,Se,Ke,Ce,la,Fe),Te&&(Ve=fe(Ve).week(Te).toDate()),Ve)}catch{return new Date("")}}(H,j,D,h),this.init(),R&&R!==!0&&(this.$L=this.locale(R).$L),x&&H!=this.format(j)&&(this.$d=new Date("")),d={}}else if(j instanceof Array)for(var L=j.length,G=1;G<=L;G+=1){$[1]=j[G-1];var C=h.apply(this,$);if(C.isValid()){this.$d=C.$d,this.$L=C.$L,this.init();break}G===L&&(this.$d=new Date(""))}else P.call(this,I)}}})}(Ia)),Ia.exports}var Li=Ii();const ji=Si(Li),Di="_textarea_14c7r_1",Mi="_readOnlyField_14c7r_7",jr={textarea:Di,readOnlyField:Mi},Ki=e=>e!=null&&e!=="",Ci=({label:e,value:t,isEdited:r=!1,type:a,hideLabel:n,size:l})=>Ki(t)?re.jsxs(We,{gap:"space-4",children:[e&&!n&&re.jsx(Re,{size:l,children:e}),re.jsxs(Qe,{gap:"space-8",align:"center",wrap:!1,children:[re.jsx(Ze,{className:a==="textarea"?jr.textarea:jr.readOnlyField,size:l,children:t}),r&&re.jsx(an,{})]})]}):null;xn.extend(ji);const Dr=({label:e,description:t,validate:r=[],onChange:a,children:n,className:l,isReadOnly:i=!1,size:s="small",isEdited:d=!1,hideLegend:v=!1,...c})=>{const{name:y,control:g}=c,{formState:{errors:O}}=ra(),{field:V}=on({name:y,control:g,rules:{validate:gn(r)}});return re.jsx(Fl,{name:y,value:V.value!==void 0?V.value:null,legend:re.jsxs(Qe,{justify:"center",gap:"space-8",children:[e,i&&d&&re.jsx(an,{})]}),hideLegend:v,disabled:i,description:t,size:s,error:yn(O,y),onChange:k=>{a&&a(k),V.onChange(k)},className:l,children:n})},Gi="_textAreaFieldWithBadges_bdz0b_1",Ui="_etikettWrapper_bdz0b_4",Mr={textAreaFieldWithBadges:Gi,etikettWrapper:Ui},Bi=({name:e,control:t,label:r,readOnly:a,maxLength:n,badges:l,validate:i=[],parse:s=O=>O,className:d,description:v,isEdited:c,size:y="small",...g})=>{const{formState:{errors:O}}=ra(),{field:V}=on({name:e,control:t,rules:{validate:_.useMemo(()=>gn(i),[i])}});return a?re.jsx(Ci,{size:y,label:r,value:V.value,type:"textarea",isEdited:c,hideLabel:g.hideLabel}):re.jsxs("div",{className:l?Mr.textAreaFieldWithBadges:null,children:[l&&re.jsx("div",{className:Mr.etikettWrapper,children:l.map(({type:k,titleText:b})=>re.jsx(Nl,{variant:k,size:"small",children:b},b))}),re.jsx(Ml,{size:y,label:r,description:v,className:d,autoComplete:"off",...V,onChange:k=>V.onChange(k.currentTarget.value!==""?s(k.currentTarget.value):null),value:V.value?V.value:"",error:yn(O,e),maxLength:n,...g})]})},$i=({formMethods:e,onSubmit:t,children:r,className:a,setDataOnUnmount:n})=>{const{handleSubmit:l,getValues:i}=e;return _.useEffect(()=>()=>{n&&n(i())},[]),re.jsx(mi,{...e,children:re.jsx("form",{className:a,onSubmit:t?l(s=>t(s)):void 0,children:r})})},qi=Tn(1500),zi=Sn(3),Xa="begrunnelse",pa="vurderingerHovedkategori",Qa="ikkeReelleVurderingerUnderkategori",_n=({readOnly:e,aksjonspunkt:t,faresignalVurderinger:r,risikoklassifisering:a,submitCallback:n})=>{const l=r.filter(d=>d.kode!==se.INNVIRKNING&&d.kode!==se.INGEN_INNVIRKNING),i=Ti({defaultValues:Hi(t,a)}),s=i.watch(pa)===se.INNVIRKNING;return T.jsx($i,{formMethods:i,onSubmit:d=>n&&n(Yi(d)),children:T.jsxs(We,{gap:"space-16",children:[T.jsx(Bi,{name:Xa,control:i.control,label:T.jsx(be,{id:"Risikopanel.Forms.Vurdering"}),validate:[Ta,qi,zi,Fn],maxLength:1500,readOnly:e}),T.jsxs(Dr,{name:pa,control:i.control,label:T.jsx(be,{id:"Risikopanel.RhfForm.Resultat"}),validate:[Ta],isReadOnly:e,children:[T.jsxs(We,{gap:"space-12",children:[T.jsx(Fa,{value:se.INNVIRKNING,size:"small",children:r.find(d=>d.kode===se.INNVIRKNING)?.navn??""}),s&&T.jsx(Yl,{alignOffset:20,children:T.jsx(Dr,{name:Qa,control:i.control,validate:[Ta],isReadOnly:e,children:l.map(d=>T.jsx(Fa,{value:d.kode,size:"small",children:d.navn},d.kode))})})]}),T.jsx(Fa,{value:se.INGEN_INNVIRKNING,size:"small",children:r.find(d=>d.kode===se.INGEN_INNVIRKNING)?.navn??""})]}),T.jsx("div",{children:T.jsx(Jr,{size:"small",variant:"primary",loading:i.formState.isSubmitting,disabled:!i.formState.isDirty||e||i.formState.isSubmitting,onClick:An,children:T.jsx(be,{id:"Risikopanel.RhfForm.Bekreft"})})})]})})},Hi=(e,t)=>{if(e?.begrunnelse&&t?.faresignalVurdering){const r=t.faresignalVurdering;return{[Xa]:e.begrunnelse,[pa]:r===se.INGEN_INNVIRKNING?se.INGEN_INNVIRKNING:se.INNVIRKNING,[Qa]:r===se.INGEN_INNVIRKNING?void 0:r}}},Yi=e=>({kode:Da.VURDER_FARESIGNALER,faresignalVurdering:Wi(e[pa],e[Qa]),begrunnelse:e[Xa]}),Wi=(e,t)=>e===se.INGEN_INNVIRKNING?se.INGEN_INNVIRKNING:t;_n.__docgenInfo={description:`IngenRisikoPanel

Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.`,methods:[],displayName:"AvklarFaresignalerForm",props:{aksjonspunkt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktDefinisjon;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},risikoklassifisering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`},description:""},submitCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FaresignalVurdering'>[]"},description:""}}};const Kr=({risikoFaresignaler:e,labelId:t})=>T.jsxs(T.Fragment,{children:[T.jsx(Re,{size:"small",children:T.jsx(be,{id:t})}),T.jsx("ul",{children:e.faresignaler.map(r=>T.jsx("li",{children:T.jsx(Oe,{size:"small",children:Pn(r)})},r))})]}),bn=({risikoklassifisering:e})=>T.jsxs(T.Fragment,{children:[e.medlFaresignaler?.faresignaler&&T.jsx(Kr,{risikoFaresignaler:e.medlFaresignaler,labelId:"Risikopanel.Panel.Medlemskap"}),e.iayFaresignaler?.faresignaler&&T.jsx(Kr,{risikoFaresignaler:e.iayFaresignaler,labelId:"Risikopanel.Panel.ArbeidsforholdInntekt"})]});bn.__docgenInfo={description:`Faresignaler

Presentasjonskomponent. Viser en liste over faresignaler knyttet til behandlingen.`,methods:[],displayName:"Faresignaler",props:{risikoklassifisering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`},description:""}}};const pn=({risikoklassifisering:e,aksjonspunkt:t,readOnly:r,submitCallback:a,faresignalVurderinger:n})=>T.jsxs(We,{gap:"space-16",children:[t&&t.status===Ma.OPPRETTET&&T.jsx(Ul,{children:T.jsx(be,{id:"Risikopanel.Panel.Tittel"})}),T.jsxs("div",{children:[T.jsx(bn,{risikoklassifisering:e}),!!t&&T.jsx(_n,{aksjonspunkt:t,readOnly:r,submitCallback:a,risikoklassifisering:e,faresignalVurderinger:n})]})]});pn.__docgenInfo={description:`AvklarFaresignaler

Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.`,methods:[],displayName:"HoyRisikoPanel",props:{risikoklassifisering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`},description:""},aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktDefinisjon;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FaresignalVurdering'>[]"},description:""}}};const Ji="_hoyRisikoPanel_wlbat_1",Zi={hoyRisikoPanel:Ji},hn=({risikoklassifisering:e,aksjonspunkt:t,readOnly:r,submitCallback:a,isRiskPanelOpen:n,toggleRiskPanel:l,faresignalVurderinger:i})=>{const s=ha();return T.jsxs(Ee,{"aria-label":s.formatMessage({id:"Risikopanel.Tittel"}),open:n,className:Zi.hoyRisikoPanel,children:[T.jsx(Ee.Header,{onClick:l,children:T.jsx(Ee.Title,{children:T.jsxs(Qe,{gap:"space-16",align:"center",children:[T.jsx(Wr,{title:s.formatMessage({id:"Risikopanel.Tittel"}),color:"var(--ax-danger-600)",height:24,width:24}),T.jsx(Re,{size:"small",children:T.jsx(be,{id:"Risikopanel.Tittel.Faresignaler"})})]})})}),T.jsx(Ee.Content,{children:T.jsx(pn,{risikoklassifisering:e,aksjonspunkt:t,readOnly:r,submitCallback:a,faresignalVurderinger:i})})]})};hn.__docgenInfo={description:`HoyRisikoTittel

Statisk visning av tittel i utvidbart panel dersom faresignaler er funnet.`,methods:[],displayName:"HoyRisikoTittel",props:{risikoklassifisering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`},description:""},aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktDefinisjon;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},isRiskPanelOpen:{required:!0,tsType:{name:"boolean"},description:""},toggleRiskPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FaresignalVurdering'>[]"},description:""}}};const En=()=>T.jsx(Ba.New,{background:"success-moderate",borderRadius:"large",padding:"3",children:T.jsxs(Qe,{gap:"space-16",align:"center",children:[T.jsx(zr,{title:ha().formatMessage({id:"Risikopanel.Tittel"}),height:24,width:24,color:"var(--ax-bg-success-strong)"}),T.jsx(Re,{size:"small",children:T.jsx(be,{id:"Risikopanel.Tittel.IngenFaresignaler"})})]})});En.__docgenInfo={description:`IngenRisikoPanel

Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.`,methods:[],displayName:"IngenRisikoPanel"};const On=()=>T.jsx(Ba.New,{borderWidth:"2",borderColor:"neutral-subtle",borderRadius:"large",padding:"3",children:T.jsxs(Qe,{gap:"space-16",align:"center",children:[T.jsx(et,{title:ha().formatMessage({id:"Risikopanel.Tittel"}),color:"var(--ax-neutral-700)",height:24,width:24}),T.jsx(Re,{size:"small",children:T.jsx(be,{id:"Risikopanel.Tittel.ManglerKlassifisering"})})]})});On.__docgenInfo={description:`ManglendeKlassifiseringPanel

Statisk visning av panel som tilsier ingen risikoklassifisering er utført for valgt behandling, eller at ingen behandling er valgt.`,methods:[],displayName:"ManglendeKlassifiseringPanel"};const Xi={"Risikopanel.Tittel":"Faresignaler","Risikopanel.Tittel.IngenFaresignaler":"Ingen faresignaler oppdaget","Risikopanel.Tittel.Faresignaler":"Faresignaler oppdaget","Risikopanel.Tittel.ManglerKlassifisering":"Venter på mulige faresignaler","Risikopanel.Panel.Tittel":"Vurder faresignalene","Risikopanel.Panel.Medlemskap":"Medlemskap","Risikopanel.Panel.ArbeidsforholdInntekt":"Arbeidsforhold og inntekt","Risikopanel.RhfForm.Resultat":"Resultat av vurderingen","Risikopanel.RhfForm.Bekreft":"Bekreft og fortsett","Risikopanel.Forms.Vurdering":"Vurdering"},Qi=Pe(Xi),Cr=(e,t)=>t?.kontrollresultat?t.kontrollresultat===e:!1,La=({aksjonspunkt:e,risikoklassifisering:t,isPanelOpen:r,readOnly:a,submitAksjonspunkt:n,toggleRiskPanel:l,faresignalVurderinger:i})=>{const s=Cr("IKKE_HOY",t),d=Cr("HOY",t);return T.jsxs(In,{value:Qi,children:[s&&T.jsx(En,{}),t&&d&&T.jsx(hn,{risikoklassifisering:t,aksjonspunkt:e,readOnly:a,isRiskPanelOpen:r,submitCallback:n,toggleRiskPanel:l,faresignalVurderinger:i}),!s&&!d&&T.jsx(On,{})]})};La.__docgenInfo={description:`RisikoklassifiseringSakIndex

Har ansvar for å vise risikoklassifisering for valgt behandling
Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet`,methods:[],displayName:"RisikoklassifiseringSakIndex",props:{aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktDefinisjon;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},risikoklassifisering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`},description:""},isPanelOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitAksjonspunkt:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},toggleRiskPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FaresignalVurdering'>[]"},description:""}}};const{action:Gr}=__STORYBOOK_MODULE_ACTIONS__,ns={title:"sak/sak-risikoklassifisering",component:La,args:{faresignalVurderinger:Kn.FaresignalVurdering,submitAksjonspunkt:Gr("button-click"),toggleRiskPanel:Gr("button-click"),isPanelOpen:!1,readOnly:!1},render:e=>{const[t,r]=_.useState(e),a=()=>{t.toggleRiskPanel?.(),r(n=>({...n,isPanelOpen:!0}))};return T.jsx("div",{style:{width:"600px"},children:T.jsx(La,{...t,toggleRiskPanel:a})})}},oa={},ua={args:{risikoklassifisering:{kontrollresultat:"IKKE_HOY"}}},da={args:{aksjonspunkt:{definisjon:Da.VURDER_FARESIGNALER,status:Ma.OPPRETTET,begrunnelse:null},risikoklassifisering:{kontrollresultat:"HOY",medlFaresignaler:{faresignaler:["Faresignal 1"]},iayFaresignaler:{faresignaler:["Faresignal 2","Faresignal 3","Faresignal 4"]}}}};oa.parameters={...oa.parameters,docs:{...oa.parameters?.docs,source:{originalSource:"{}",...oa.parameters?.docs?.source}}};ua.parameters={...ua.parameters,docs:{...ua.parameters?.docs,source:{originalSource:`{
  args: {
    risikoklassifisering: {
      kontrollresultat: 'IKKE_HOY'
    }
  }
}`,...ua.parameters?.docs?.source}}};da.parameters={...da.parameters,docs:{...da.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: AksjonspunktKode.VURDER_FARESIGNALER,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null
    } as Aksjonspunkt,
    risikoklassifisering: {
      kontrollresultat: 'HOY',
      medlFaresignaler: {
        faresignaler: ['Faresignal 1']
      },
      iayFaresignaler: {
        faresignaler: ['Faresignal 2', 'Faresignal 3', 'Faresignal 4']
      }
    }
  }
}`,...da.parameters?.docs?.source}}};const ts=["IngenRisikoklassifisering","LavRisikoklassifisering","HøyRisikoklassifisering"];export{da as HøyRisikoklassifisering,oa as IngenRisikoklassifisering,ua as LavRisikoklassifisering,ts as __namedExportsOrder,ns as default};
