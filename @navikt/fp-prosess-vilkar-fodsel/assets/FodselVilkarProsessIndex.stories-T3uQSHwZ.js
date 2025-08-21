import{g as _r,r as h,u as xa,_ as Xt,s as Zt,c as Xe,a as W,b as v,d as Da,S as Ma,e as yr,f as ce,H as Er,j as I,w as br,h as Ka,i as hr,o as pr,M as Or,R as Rr,E as Nr,t as Qt,A as Ze,k as Sr,l as Tr,F as ja,B as Vr,P as Ar,m as wr,n as Fr}from"./iframe-D_a-NENP.js";import{r as Pr}from"./index-C3l85eUs.js";import"./preload-helper-D9Z9MdNV.js";var Lr=Pr();const kr=_r(Lr);function Ir(e,n){var a=e.values,t=Xt(e,["values"]),r=n.values,l=Xt(n,["values"]);return Zt(r,a)&&Zt(t,l)}function Ga(e){var n=xa(),a=n.formatMessage,t=n.textComponent,r=t===void 0?h.Fragment:t,l=e.id,i=e.description,s=e.defaultMessage,d=e.values,m=e.children,c=e.tagName,g=c===void 0?r:c,_=e.ignoreTag,N={id:l,description:i,defaultMessage:s},S=a(N,d,{ignoreTag:_});return typeof m=="function"?m(Array.isArray(S)?S:[S]):g?h.createElement(g,null,S):h.createElement(h.Fragment,null,S)}Ga.displayName="FormattedMessage";var mt=h.memo(Ga,Ir);mt.displayName="MemoizedFormattedMessage";var Qe=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(Qe||{}),Ua=(e=>(e.INGEN_BEREGNINGSREGLER="1099",e.MANN_ADOPTERER_IKKE_ALENE="1006",e.ÅRSAK_1020="1020",e))(Ua||{}),Ba=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(Ba||{}),Pe=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(Pe||{});const Le=e=>Xe({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var xr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Ca=h.forwardRef((e,n)=>{var{className:a,size:t="medium",as:r="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:m,textColor:c}=e,g=xr(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=W();return v.createElement(r,Object.assign({},g,{ref:n,className:_(a,"navds-body-long",`navds-body-long--${t}`,Le({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:m,textColor:c}))}))});var Dr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const fe=h.forwardRef((e,n)=>{var{className:a,size:t="medium",as:r="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:m,textColor:c}=e,g=Dr(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=W();return v.createElement(r,Object.assign({},g,{ref:n,className:_(a,"navds-body-short",`navds-body-short--${t}`,Le({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:m,textColor:c}))}))});var Mr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Kr=h.forwardRef((e,n)=>{var{className:a,size:t="medium",spacing:r,uppercase:l,as:i="p",truncate:s,weight:d="regular",align:m,visuallyHidden:c,textColor:g}=e,_=Mr(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:N}=W();return v.createElement(i,Object.assign({},_,{ref:n,className:N(a,"navds-detail",Le({spacing:r,truncate:s,weight:d,align:m,visuallyHidden:c,textColor:g,uppercase:l}),{"navds-detail--small":t==="small"})}))});var jr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const xt=h.forwardRef((e,n)=>{var{children:a,className:t,size:r,spacing:l,as:i="p",showIcon:s=!1}=e,d=jr(e,["children","className","size","spacing","as","showIcon"]);const{cn:m}=W();return v.createElement(i,Object.assign({},d,{ref:n,className:m("navds-error-message","navds-label",t,Le({spacing:l}),{"navds-label--small":r==="small","navds-error-message--show-icon":s})}),s&&v.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),a)});var Gr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Ur=h.forwardRef((e,n)=>{var{level:a="1",size:t,className:r,as:l,spacing:i,align:s,visuallyHidden:d,textColor:m}=e,c=Gr(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=W(),_=l??`h${a}`;return v.createElement(_,Object.assign({},c,{ref:n,className:g(r,"navds-heading",`navds-heading--${t}`,Le({spacing:i,align:s,visuallyHidden:d,textColor:m}))}))});var Br=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};h.forwardRef((e,n)=>{var{className:a,spacing:t,as:r="p"}=e,l=Br(e,["className","spacing","as"]);const{cn:i}=W();return v.createElement(r,Object.assign({},l,{ref:n,className:i(a,"navds-ingress",{"navds-typo--spacing":!!t})}))});var Cr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const be=h.forwardRef((e,n)=>{var{className:a,size:t="medium",as:r="label",spacing:l,visuallyHidden:i,textColor:s}=e,d=Cr(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:m}=W();return v.createElement(r,Object.assign({},d,{ref:n,className:m(a,"navds-label",Le({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":t==="small"})}))});function $a(e,n=166,a=!1){let t;function r(...l){const i=()=>{t=void 0,e.apply(this,l)};!t&&a&&i(),clearTimeout(t),t=setTimeout(i,n)}return r.clear=()=>{clearTimeout(t)},r}function ye(e,n){const a=Object.entries(e).filter(([t])=>!n.includes(t));return Object.fromEntries(a)}const ea=globalThis?.document?h.useLayoutEffect:()=>{};let ta=0;function $r(e){const[n,a]=h.useState(e),t=e||n;return h.useEffect(()=>{n==null&&(ta+=1,a(`aksel-id-${ta}`))},[n]),t}const aa=v.useId;function ht(e){var n;return aa!==void 0?aa().replace(/(:)/g,""):(n=$r(e))!==null&&n!==void 0?n:""}function ra(e,n=[]){const a=h.useRef(e);return h.useEffect(()=>{a.current=e}),h.useCallback((...t)=>{var r;return(r=a.current)===null||r===void 0?void 0:r.call(a,...t)},n)}function qr({value:e,defaultValue:n,onChange:a}){const t=ra(a),[r,l]=h.useState(n),i=e!==void 0,s=i?e:r,d=ra(m=>{const g=typeof m=="function"?m(s):m;i||l(g),t(g)},[i,t,s]);return[s,d]}let na=0;function zr(e){const[n,a]=h.useState(e),t=e||n;return h.useEffect(()=>{n==null&&(na+=1,a(`aksel-icon-${na}`))},[n]),t}const la=v.useId;function Se(e){var n;return la!==void 0?la().replace(/(:)/g,""):(n=zr(e))!==null&&n!==void 0?n:""}var Yr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Hr=h.forwardRef((e,n)=>{var{title:a,titleId:t}=e,r=Yr(e,["title","titleId"]);let l=Se();return l=a?t||"title-"+l:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},r),a?h.createElement("title",{id:l},a):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var Wr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Jr=h.forwardRef((e,n)=>{var{title:a,titleId:t}=e,r=Wr(e,["title","titleId"]);let l=Se();return l=a?t||"title-"+l:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},r),a?h.createElement("title",{id:l},a):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Xr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const qa=h.forwardRef((e,n)=>{var{title:a,titleId:t}=e,r=Xr(e,["title","titleId"]);let l=Se();return l=a?t||"title-"+l:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},r),a?h.createElement("title",{id:l},a):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Zr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const za=h.forwardRef((e,n)=>{var{title:a,titleId:t}=e,r=Zr(e,["title","titleId"]);let l=Se();return l=a?t||"title-"+l:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},r),a?h.createElement("title",{id:l},a):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Qr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const en=h.forwardRef((e,n)=>{var{title:a,titleId:t}=e,r=Qr(e,["title","titleId"]);let l=Se();return l=a?t||"title-"+l:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},r),a?h.createElement("title",{id:l},a):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var tn=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const an=h.forwardRef((e,n)=>{var{title:a,titleId:t}=e,r=tn(e,["title","titleId"]);let l=Se();return l=a?t||"title-"+l:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},r),a?h.createElement("title",{id:l},a):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.272 2.25a.75.75 0 0 0-.53.22L2.47 7.742a.75.75 0 0 0-.22.53v7.456c0 .199.079.39.22.53l5.272 5.272c.14.141.331.22.53.22h7.456a.75.75 0 0 0 .53-.22l5.272-5.272a.75.75 0 0 0 .22-.53V8.272a.75.75 0 0 0-.22-.53L16.258 2.47a.75.75 0 0 0-.53-.22zM3.75 8.583 8.583 3.75h6.834l4.833 4.833v6.834l-4.833 4.833H8.583L3.75 15.417zm5.28-.613a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var rn=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const nn=h.forwardRef((e,n)=>{var{title:a,titleId:t}=e,r=rn(e,["title","titleId"]);let l=Se();return l=a?t||"title-"+l:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},r),a?h.createElement("title",{id:l},a):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Dt(e,n,{checkForDefaultPrevented:a=!0}={}){return function(r){if(e?.(r),a===!1||!r.defaultPrevented)return n?.(r)}}function Vt(e){return(n={})=>{const a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}function Ue(e){return(n,a)=>{const t=a?.context?String(a.context):"standalone";let r;if(t==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=a?.width?String(a.width):i;r=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=a?.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(n):n;return r[l]}}function Be(e){return(n,a={})=>{const t=a.width,r=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],l=n.match(r);if(!l)return null;const i=l[0],s=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?sn(s,g=>g.test(i)):ln(s,g=>g.test(i));let m;m=e.valueCallback?e.valueCallback(d):d,m=a.valueCallback?a.valueCallback(m):m;const c=n.slice(i.length);return{value:m,rest:c}}}function ln(e,n){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&n(e[a]))return a}function sn(e,n){for(let a=0;a<e.length;a++)if(n(e[a]))return a}function on(e){return(n,a={})=>{const t=n.match(e.matchPattern);if(!t)return null;const r=t[0],l=n.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=a.valueCallback?a.valueCallback(i):i;const s=n.slice(r.length);return{value:i,rest:s}}}const un={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},dn=(e,n,a)=>{let t;const r=un[e];return typeof r=="string"?t=r:n===1?t=r.one:t=r.other.replace("{{count}}",String(n)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+t:t+" siden":t},cn={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},mn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},fn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},vn={date:Vt({formats:cn,defaultWidth:"full"}),time:Vt({formats:mn,defaultWidth:"full"}),dateTime:Vt({formats:fn,defaultWidth:"full"})},gn={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},_n=(e,n,a,t)=>gn[e],yn={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},En={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},bn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},hn={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},pn={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},On=(e,n)=>Number(e)+".",Rn={ordinalNumber:On,era:Ue({values:yn,defaultWidth:"wide"}),quarter:Ue({values:En,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ue({values:bn,defaultWidth:"wide"}),day:Ue({values:hn,defaultWidth:"wide"}),dayPeriod:Ue({values:pn,defaultWidth:"wide"})},Nn=/^(\d+)\.?/i,Sn=/\d+/i,Tn={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Vn={any:[/^f/i,/^e/i]},An={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},wn={any:[/1/i,/2/i,/3/i,/4/i]},Fn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Pn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ln={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},kn={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},In={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},xn={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Dn={ordinalNumber:on({matchPattern:Nn,parsePattern:Sn,valueCallback:e=>parseInt(e,10)}),era:Be({matchPatterns:Tn,defaultMatchWidth:"wide",parsePatterns:Vn,defaultParseWidth:"any"}),quarter:Be({matchPatterns:An,defaultMatchWidth:"wide",parsePatterns:wn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Be({matchPatterns:Fn,defaultMatchWidth:"wide",parsePatterns:Pn,defaultParseWidth:"any"}),day:Be({matchPatterns:Ln,defaultMatchWidth:"wide",parsePatterns:kn,defaultParseWidth:"any"}),dayPeriod:Be({matchPatterns:In,defaultMatchWidth:"any",parsePatterns:xn,defaultParseWidth:"any"})},Mn={code:"nb",formatDistance:dn,formatLong:vn,formatRelative:_n,localize:Rn,match:Dn,options:{weekStartsOn:1,firstWeekContainsDate:4}},Kn={global:{dateLocale:Mn,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},jn=h.createContext({locale:Kn}),Gn=()=>h.useContext(jn),ia=/(\w+)/g;function Un(e,n){const a=Array.isArray(e)?e:Bn(e);for(const t of n){if(!t)continue;let r=t;for(let l=0;l<a.length;l++){const i=r[a[l]];i!==void 0&&(r=i)}if(typeof r=="string")return r}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Bn(e){const n=[];let a=ia.exec(e);for(;a;){const[,t,r]=a;n.push(t||r),a=ia.exec(e)}return n}const Cn=/{[^}]*}/g;function Mt(e,...n){const a=Gn(),t=a.translations||[],r=[...n,...Array.isArray(t)?t.map(i=>i[e]):[t[e]],a.locale[e]];return(i,s)=>{const d=Un(i,r);return s?d.replace(Cn,m=>{const c=m.substring(1,m.length-1);if(s[c]===void 0){const g=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${c}'. The following replacements were passed: '${g}'`)}return s[c]}):d}}var $n=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const qn=h.forwardRef((e,n)=>{var{className:a,size:t="medium",title:r,transparent:l=!1,variant:i="neutral",id:s,"data-color":d}=e,m=$n(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:c}=W(),g=ht(),_=Mt("Loader");return v.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${g}`,ref:n,className:c("navds-loader",a,`navds-loader--${t}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??zn(i)},ye(m,["children"]),{"data-variant":i}),v.createElement("title",{id:s??`loader-${g}`},r||_("title")),v.createElement("circle",{className:c("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),v.createElement("circle",{className:c("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function zn(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Yn=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Hn=h.forwardRef((e,n)=>{var{as:a="button",variant:t="primary",className:r,children:l,size:i="medium",loading:s=!1,disabled:d,icon:m,iconPosition:c="left",onKeyUp:g,"data-color":_}=e,N=Yn(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:S}=W(),w=d||s?ye(N,["href"]):N,y=V=>{V.key===" "&&!d&&!s&&V.currentTarget.click()};return v.createElement(a,Object.assign({},a!=="button"?{role:"button"}:{},{"data-color":_??Wn(t),"data-variant":Jn(t)},w,{ref:n,onKeyUp:Dt(g,y),className:S(r,"navds-button",`navds-button--${t}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!m&&!l,"navds-button--disabled":d??s}),disabled:d??s?!0:void 0}),m&&c==="left"&&v.createElement("span",{className:S("navds-button__icon")},m),s&&v.createElement(qn,{size:i}),l&&v.createElement(be,{as:"span",size:i==="medium"?"medium":"small"},l),m&&c==="right"&&v.createElement("span",{className:S("navds-button__icon")},m))});function Wn(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Jn(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}const Ya=()=>{const{cn:e}=W();return v.createElement(za,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Ha=()=>{const{cn:e}=W();return v.createElement(za,{title:Mt("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var Xn=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Zn=h.forwardRef((e,n)=>{var{className:a,header:t,children:r,open:l,defaultOpen:i=!1,onClick:s,size:d="medium",onOpenChange:m}=e,c=Xn(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:g}=W(),[_,N]=qr({defaultValue:i,value:l,onChange:m}),S=d==="small"?"small":"medium";return v.createElement("div",{className:g("navds-read-more",`navds-read-more--${d}`,a,{"navds-read-more--open":_}),"data-volume":"low"},v.createElement("button",Object.assign({},c,{ref:n,type:"button",className:g("navds-read-more__button","navds-body-short",{"navds-body-short--small":d==="small"}),onClick:Dt(s,()=>N(w=>!w)),"aria-expanded":_,"data-state":_?"open":"closed"}),v.createElement(qa,{className:g("navds-read-more__expand-icon"),"aria-hidden":!0}),v.createElement("span",null,t)),v.createElement(Ca,{as:"div","aria-hidden":!_,className:g("navds-read-more__content",{"navds-read-more__content--closed":!_}),size:S,"data-state":_?"open":"closed"},r))}),vt=h.createContext(null),pt=(e,n)=>{var a,t,r;const{size:l,error:i,errorId:s}=e,d=h.useContext(vt),m=ht(),c=(a=e.id)!==null&&a!==void 0?a:`${n}-${m}`,g=s??`${n}-error-${m}`,_=`${n}-description-${m}`,N=d?.disabled||e.disabled,S=(d?.readOnly||e.readOnly)&&!N||void 0,w=!N&&!S&&!!(i||d?.error),y=!N&&!S&&!!i&&typeof i!="boolean",V=Object.assign({},w?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:y,hasError:w,errorId:g,inputDescriptionId:_,size:(t=l??d?.size)!==null&&t!==void 0?t:"medium",readOnly:S,inputProps:Object.assign(Object.assign({id:c},V),{"aria-describedby":Xe(e["aria-describedby"],{[_]:e.description&&!gt(e.description),[g]:y,[(r=d?.errorId)!==null&&r!==void 0?r:""]:w&&d?.error})||void 0,disabled:N})}};function gt(e,n=!0){if(v.isValidElement(e)){if(e.type===Zn)return!0;if(e.props.children&&n)return gt(e.props.children,!1)}else if(Array.isArray(e))return e.some(a=>gt(a,n));return!1}var Qn=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const el=h.forwardRef((e,n)=>{const{inputProps:a,errorId:t,showErrorMsg:r,hasError:l,size:i,inputDescriptionId:s,readOnly:d}=pt(e,"select"),{children:m,label:c,className:g,description:_,htmlSize:N,hideLabel:S=!1,style:w}=e,y=Qn(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:V}=W(),E={onMouseDown:A=>{d&&(A.preventDefault(),A.target.focus())},onKeyDown:A=>{d&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(A.key)&&A.preventDefault()}};return v.createElement("div",{className:V(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!a.disabled,"navds-form-field--readonly":d,"navds-select--error":l,"navds-select--readonly":d})},v.createElement(be,{htmlFor:a.id,size:i,className:V("navds-form-field__label",{"navds-sr-only":S})},d&&v.createElement(Ha,null),c),!!_&&v.createElement(fe,{className:V("navds-form-field__description",{"navds-sr-only":S}),id:s,size:i,as:"div"},_),v.createElement("div",{className:V("navds-select__container"),style:w},v.createElement("select",Object.assign({},ye(y,["error","errorId","size","readOnly"]),a,E,{ref:n,className:V("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:N}),m),v.createElement(qa,{className:V("navds-select__chevron"),"aria-hidden":!0})),v.createElement("div",{className:V("navds-form-field__error"),id:t,"aria-relevant":"additions removals","aria-live":"polite"},r&&v.createElement(xt,{size:i,showIcon:!0},e.error)))});function ee(e,n,a,t){return t?typeof t=="string"?{[`--__${e}c-${n}-${a}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([r,l])=>[`--__${e}c-${n}-${a}-${r}`,l])):{}}const tl={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},sa=(e,n,a,t,r,l)=>n.split(" ").map((i,s,d)=>{var m;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let c=`var(--${l}-${a}-${i})`;if(t.includes(i))c=i==="px"?"1px":i;else if(i.startsWith("space"))c=`var(--${l}-${i})`;else{const g=`--${l}-spacing-${i}`;c=`var(${(m=tl[g])!==null&&m!==void 0?m:g})`}return r?i==="0"?"0":`calc(-1 * ${c})`:c}).join(" ");function oe(e,n,a,t,r,l=!1,i=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${n}-${a}-xs`]:sa(a,r,t,i,l,e)};const s={};return Object.entries(r).forEach(([d,m])=>{s[`--__${e}c-${n}-${a}-${d}`]=sa(a,m,t,i,l,e)}),s}const al=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],rl=({children:e,className:n,padding:a,paddingInline:t,paddingBlock:r,margin:l,marginInline:i,marginBlock:s,width:d,minWidth:m,maxWidth:c,height:g,minHeight:_,maxHeight:N,position:S,inset:w,top:y,right:V,left:E,bottom:A,overflow:L,overflowX:k,overflowY:U,flexBasis:M,flexGrow:$,flexShrink:D,gridColumn:K})=>{const j=Da(!1),{cn:F}=W(),O=j?"ax":"a",x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},oe(O,"r","p","spacing",a)),oe(O,"r","pi","spacing",t)),oe(O,"r","pb","spacing",r)),oe(O,"r","m","spacing",l)),oe(O,"r","mi","spacing",i)),oe(O,"r","mb","spacing",s)),ee(O,"r","w",d)),ee(O,"r","minw",m)),ee(O,"r","maxw",c)),ee(O,"r","h",g)),ee(O,"r","minh",_)),ee(O,"r","maxh",N)),ee(O,"r","position",S)),oe(O,"r","inset","spacing",w)),oe(O,"r","top","spacing",y)),oe(O,"r","right","spacing",V)),oe(O,"r","bottom","spacing",A)),oe(O,"r","left","spacing",E)),ee(O,"r","overflow",L)),ee(O,"r","overflowx",k)),ee(O,"r","overflowy",U)),ee(O,"r","flex-basis",M)),ee(O,"r","flex-grow",$)),ee(O,"r","flex-shrink",D)),ee(O,"r","grid-column",K));return v.createElement(Ma,{className:F({className:n,"navds-r-p":a,"navds-r-pi":t,"navds-r-pb":r,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":d,"navds-r-minw":m,"navds-r-maxw":c,"navds-r-h":g,"navds-r-minh":_,"navds-r-maxh":N,"navds-r-position":S,"navds-r-inset":w,"navds-r-top":y,"navds-r-right":V,"navds-r-bottom":A,"navds-r-left":E,"navds-r-overflow":L,"navds-r-overflowx":k,"navds-r-overflowy":U,"navds-r-flex-basis":M,"navds-r-flex-grow":$,"navds-r-flex-shrink":D,"navds-r-grid-column":K}),style:x},e)};var nl=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Wa=h.forwardRef((e,n)=>{var{children:a,className:t,as:r="div",align:l,justify:i,wrap:s=!0,gap:d,style:m,direction:c="row",asChild:g}=e,_=nl(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const S=Da(!1)?"ax":"a",{cn:w}=W(),y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),oe(S,"stack","gap","spacing",d)),ee(S,"stack","direction",c)),ee(S,"stack","align",l)),ee(S,"stack","justify",i)),V=g?Ma:r;return v.createElement(rl,Object.assign({},_),v.createElement(V,Object.assign({},ye(_,al),{ref:n,style:y,className:w("navds-stack",t,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":d,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":c,"navds-stack-wrap":s})}),a))});var ll=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const We=h.forwardRef((e,n)=>{var{as:a="div"}=e,t=ll(e,["as"]);return v.createElement(Wa,Object.assign({as:a},t,{ref:n,direction:"row"}))});var il=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Je=h.forwardRef((e,n)=>{var{as:a="div"}=e,t=il(e,["as"]);return v.createElement(Wa,Object.assign({as:a},t,{ref:n,direction:"column",wrap:!1}))});var sl=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const ol=h.forwardRef((e,n)=>{var{children:a,className:t,variant:r,size:l="medium",icon:i,"data-color":s}=e,d=sl(e,["children","className","variant","size","icon","data-color"]);const{cn:m}=W(),c=r?.endsWith("-filled")&&"strong",g=r?.endsWith("-moderate")&&"moderate";return v.createElement(fe,Object.assign({"data-color":s??ul(r),"data-variant":c||g||"outline"},d,{ref:n,as:"span",size:l==="medium"?"medium":"small",className:m("navds-tag",t,`navds-tag--${r}`,`navds-tag--${l}`)}),i&&v.createElement("span",{className:m("navds-tag__icon--left")},i),a)});function ul(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const dl=e=>{const n=pt(e,"fieldset");return Object.assign(Object.assign({},n),{inputProps:{"aria-describedby":Xe(e["aria-describedby"],{[n.inputDescriptionId]:e.description&&!gt(e.description)})||void 0}})};var cl=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const ml=h.forwardRef((e,n)=>{var a,t,r;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:d,size:m,readOnly:c,inputDescriptionId:g}=dl(e),{cn:_}=W(),N=h.useContext(vt),{children:S,className:w,errorPropagation:y=!0,legend:V,description:E,hideLegend:A,nativeReadOnly:L=!0}=e,k=cl(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return v.createElement(vt.Provider,{value:{error:y?(a=e.error)!==null&&a!==void 0?a:N?.error:void 0,errorId:Xe({[i]:s,[(t=N?.errorId)!==null&&t!==void 0?t:""]:!!N?.error}),size:m,disabled:(r=e.disabled)!==null&&r!==void 0?r:!1,readOnly:c}},v.createElement("fieldset",Object.assign({},ye(k,["errorId","error","size","readOnly"]),l,{ref:n,className:_(w,"navds-fieldset",`navds-fieldset--${m}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":c})}),v.createElement(be,{size:m,as:"legend",className:_("navds-fieldset__legend",{"navds-sr-only":!!A})},c&&(L?v.createElement(Ya,null):v.createElement(Ha,null)),V),!!E&&v.createElement(fe,{className:_("navds-fieldset__description",{"navds-sr-only":!!A}),id:g,size:m??"medium",as:"div"},e.description),S,v.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:_("navds-fieldset__error")},s&&v.createElement(xt,{size:m,showIcon:!0},e.error))))});var fl=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Ja=v.createContext(null),vl=h.forwardRef((e,n)=>{var a,t,{children:r,className:l,name:i,defaultValue:s,value:d,onChange:m=()=>{},required:c,readOnly:g}=e,_=fl(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:N}=W(),S=h.useContext(vt),w=ht();return v.createElement(ml,Object.assign({},_,{readOnly:g,ref:n,className:N(l,"navds-radio-group",`navds-radio-group--${(t=(a=_.size)!==null&&a!==void 0?a:S?.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),v.createElement(Ja.Provider,{value:{name:i??`radioGroupName-${w}`,defaultValue:s,value:d,onChange:m,required:c}},v.createElement("div",{className:N("navds-radio-buttons")},r)))});var gl=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const _l=e=>{const n=h.useContext(Ja),a=pt(ye(e,["description"]),"radio"),{inputProps:t,readOnly:r}=a,l=gl(a,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:r,inputProps:Object.assign(Object.assign({},t),{name:n?.name,defaultChecked:n?.defaultValue===void 0?void 0:n?.defaultValue===e.value,checked:n?.value===void 0?void 0:n?.value===e.value,onChange:i=>{var s,d;r||((s=e.onChange)===null||s===void 0||s.call(e,i),(d=n?.onChange)===null||d===void 0||d.call(n,e.value))},onClick:i=>{var s;if(r){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:n?.required,type:"radio"})})},oa=h.forwardRef((e,n)=>{const{cn:a}=W(),{inputProps:t,size:r,hasError:l,readOnly:i}=_l(e);return v.createElement("div",{className:a(e.className,"navds-radio",`navds-radio--${r}`,{"navds-radio--error":l,"navds-radio--disabled":t.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},v.createElement("input",Object.assign({},ye(e,["children","size","description","readOnly"]),ye(t,["aria-invalid"]),{className:a("navds-radio__input"),ref:n})),v.createElement("label",{htmlFor:t.id,className:a("navds-radio__label")},v.createElement("span",{className:a("navds-radio__content")},v.createElement(fe,{as:"span",size:r},e.children),e.description&&v.createElement(fe,{as:"span",size:r,className:a("navds-form-field__subdescription navds-radio__description")},e.description))))});var yl=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const ua=(e,n,a)=>{const{outerHeightStyle:t,overflow:r}=n;return a.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==r)?(a.current+=1,n):e},da=e=>(e?.ownerDocument||document).defaultView||window;function st(e){return parseInt(e,10)||0}const El=h.forwardRef((e,n)=>{var a,t,{className:r,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:d,style:m,value:c}=e,g=yl(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:_}=h.useRef(c!=null),N=h.useRef(null),S=yr(N,n),w=h.useRef(null),y=h.useRef(0),[V,E]=h.useState({outerHeightStyle:0}),A=v.useCallback(()=>{const M=N.current,D=da(M).getComputedStyle(M);if(D.width==="0px")return{outerHeightStyle:0};const K=w.current;K.style.width=D.width,K.value=M.value||g.placeholder||"x",K.value.slice(-1)===`
`&&(K.value+=" ");const j=D.boxSizing,F=st(D.paddingBottom)+st(D.paddingTop),O=st(D.borderBottomWidth)+st(D.borderTopWidth),x=K.scrollHeight-F;K.value="x";const B=K.scrollHeight-F;let G=x;s&&(G=Math.max(Number(s)*B,G)),i&&(G=Math.min(Number(i)*B,G)),G=Math.max(G,B);const Q=G+(j==="border-box"?F+O:0),re=Math.abs(G-x)<=1;return{outerHeightStyle:Q,overflow:re}},[i,s,g.placeholder]),L=()=>{const M=A();ca(M)||E($=>ua($,M,y))};ea(()=>{const M=()=>{const F=A();ca(F)||kr.flushSync(()=>{E(O=>ua(O,F,y))})},$=$a(()=>{var F,O,x;if(y.current=0,!((F=N.current)===null||F===void 0)&&F.style.height||!((O=N.current)===null||O===void 0)&&O.style.width){((x=N.current)===null||x===void 0?void 0:x.style.overflow)==="hidden"&&E(B=>Object.assign(Object.assign({},B),{overflow:!1}));return}M()},166,!0),D=N.current,K=da(D);K.addEventListener("resize",$);let j;return typeof ResizeObserver<"u"&&(j=new ResizeObserver($),j.observe(D)),()=>{$.clear(),K.removeEventListener("resize",$),j&&j.disconnect()}},[A]),ea(()=>{L()}),h.useEffect(()=>{y.current=0},[c]);const k=M=>{y.current=0,_||L(),l&&l(M)},U=Object.assign({"--__ac-textarea-height":V.outerHeightStyle+"px","--__axc-textarea-height":V.outerHeightStyle+"px",overflow:V.overflow&&!d&&!(!((a=N.current)===null||a===void 0)&&a.style.height)&&!(!((t=N.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},m);return v.createElement(v.Fragment,null,v.createElement("textarea",Object.assign({value:c,onChange:k,ref:S,rows:s,style:U},g,{className:r})),v.createElement("textarea",{"aria-hidden":!0,className:r,readOnly:!0,ref:w,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},m)}))});function ca(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const bl=({maxLengthId:e,maxLength:n,currentLength:a,size:t,i18n:r})=>{const{cn:l}=W(),i=Mt("Textarea",{charsLeft:r?.counterLeft?`{chars} ${r.counterLeft}`:void 0,charsTooMany:r?.counterTooMuch?`{chars} ${r.counterTooMuch}`:void 0}),s=n-a,[d,m]=h.useState(s);return h.useEffect(()=>{const c=$a(()=>{m(s)},2e3);return c(),()=>{c.clear()}},[s]),v.createElement(v.Fragment,null,v.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:n})),s<20&&v.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},ma(d,i)),v.createElement(fe,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:t},ma(s,i)))},ma=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var hl=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const pl=h.forwardRef((e,n)=>{var a,t,r;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:d,size:m,inputDescriptionId:c}=pt(e,"textarea"),{label:g,className:_,description:N,maxLength:S,hideLabel:w=!1,resize:y,UNSAFE_autoScrollbar:V,i18n:E,readOnly:A}=e,L=hl(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:k}=W(),U=ht(),M=S!==void 0&&S>0,[$,D]=h.useState((a=e?.defaultValue)!==null&&a!==void 0?a:""),K=()=>{let F=L?.minRows?L?.minRows:3;return m==="small"&&(F=L?.minRows?L?.minRows:2),F},j=Xe(l["aria-describedby"],{[U??""]:M});return v.createElement("div",{className:k(_,"navds-form-field",`navds-form-field--${m}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":A,"navds-textarea--readonly":A,"navds-textarea--error":d,"navds-textarea--autoscrollbar":V,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},v.createElement(be,{htmlFor:l.id,size:m,className:k("navds-form-field__label",{"navds-sr-only":w})},A&&v.createElement(Ya,null),g),!!N&&v.createElement(fe,{className:k("navds-form-field__description",{"navds-sr-only":w}),id:c,size:m,as:"div"},N),v.createElement(El,Object.assign({},ye(L,["error","errorId","size"]),l,{onChange:Dt(e.onChange,e.value===void 0?F=>D(F.target.value):void 0),minRows:K(),autoScrollbar:V,ref:n,readOnly:A,className:k("navds-textarea__input","navds-body-short",`navds-body-short--${m??"medium"}`)},j?{"aria-describedby":j}:{})),M&&!A&&!l.disabled&&v.createElement(bl,{maxLengthId:U,maxLength:S,currentLength:(r=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&r!==void 0?r:$.length,size:m,i18n:E}),v.createElement("div",{className:k("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&v.createElement(xt,{size:m,showIcon:!0},e.error)))});var et=e=>e.type==="checkbox",Ne=e=>e instanceof Date,ae=e=>e==null;const Xa=e=>typeof e=="object";var H=e=>!ae(e)&&!Array.isArray(e)&&Xa(e)&&!Ne(e),Za=e=>H(e)&&e.target?et(e.target)?e.target.checked:e.target.value:e,Ol=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Qa=(e,n)=>e.has(Ol(n)),Rl=e=>{const n=e.constructor&&e.constructor.prototype;return H(n)&&n.hasOwnProperty("isPrototypeOf")},Kt=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function X(e){let n;const a=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(!(Kt&&(e instanceof Blob||t))&&(a||H(e)))if(n=a?[]:Object.create(Object.getPrototypeOf(e)),!a&&!Rl(e))n=e;else for(const r in e)e.hasOwnProperty(r)&&(n[r]=X(e[r]));else return e;return n}var Ot=e=>/^\w*$/.test(e),Y=e=>e===void 0,jt=e=>Array.isArray(e)?e.filter(Boolean):[],Gt=e=>jt(e.replace(/["|']|\]/g,"").split(/\.|\[/)),R=(e,n,a)=>{if(!n||!H(e))return a;const t=(Ot(n)?[n]:Gt(n)).reduce((r,l)=>ae(r)?r:r[l],e);return Y(t)||t===e?Y(e[n])?a:e[n]:t},ie=e=>typeof e=="boolean",z=(e,n,a)=>{let t=-1;const r=Ot(n)?[n]:Gt(n),l=r.length,i=l-1;for(;++t<l;){const s=r[t];let d=a;if(t!==i){const m=e[s];d=H(m)||Array.isArray(m)?m:isNaN(+r[t+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=d,e=e[s]}};const _t={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ue={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ut=v.createContext(null);Ut.displayName="HookFormContext";const he=()=>v.useContext(Ut),Nl=e=>{const{children:n,...a}=e;return v.createElement(Ut.Provider,{value:a},n)};var er=(e,n,a,t=!0)=>{const r={defaultValues:n._defaultValues};for(const l in e)Object.defineProperty(r,l,{get:()=>{const i=l;return n._proxyFormState[i]!==ue.all&&(n._proxyFormState[i]=!t||ue.all),a&&(a[i]=!0),e[i]}});return r};const Bt=typeof window<"u"?v.useLayoutEffect:v.useEffect;function Sl(e){const n=he(),{control:a=n.control,disabled:t,name:r,exact:l}=e||{},[i,s]=v.useState(a._formState),d=v.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Bt(()=>a._subscribe({name:r,formState:d.current,exact:l,callback:m=>{!t&&s({...a._formState,...m})}}),[r,t,l]),v.useEffect(()=>{d.current.isValid&&a._setValid(!0)},[a]),v.useMemo(()=>er(i,a,d.current,!1),[i,a])}var me=e=>typeof e=="string",tr=(e,n,a,t,r)=>me(e)?(t&&n.watch.add(e),R(a,e,r)):Array.isArray(e)?e.map(l=>(t&&n.watch.add(l),R(a,l))):(t&&(n.watchAll=!0),a),Pt=e=>ae(e)||!Xa(e);function _e(e,n,a=new WeakSet){if(Pt(e)||Pt(n))return e===n;if(Ne(e)&&Ne(n))return e.getTime()===n.getTime();const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;if(a.has(e)||a.has(n))return!0;a.add(e),a.add(n);for(const l of t){const i=e[l];if(!r.includes(l))return!1;if(l!=="ref"){const s=n[l];if(Ne(i)&&Ne(s)||H(i)&&H(s)||Array.isArray(i)&&Array.isArray(s)?!_e(i,s,a):i!==s)return!1}}return!0}function Tl(e){const n=he(),{control:a=n.control,name:t,defaultValue:r,disabled:l,exact:i,compute:s}=e||{},d=v.useRef(r),m=v.useRef(s),c=v.useRef(void 0);m.current=s;const g=v.useMemo(()=>a._getWatch(t,d.current),[a,t]),[_,N]=v.useState(m.current?m.current(g):g);return Bt(()=>a._subscribe({name:t,formState:{values:!0},exact:i,callback:S=>{if(!l){const w=tr(t,a._names,S.values||a._formValues,!1,d.current);if(m.current){const y=m.current(w);_e(y,c.current)||(N(y),c.current=y)}else N(w)}}}),[a,l,t,i]),v.useEffect(()=>a._removeUnmounted()),_}function Ct(e){const n=he(),{name:a,disabled:t,control:r=n.control,shouldUnregister:l,defaultValue:i}=e,s=Qa(r._names.array,a),d=v.useMemo(()=>R(r._formValues,a,R(r._defaultValues,a,i)),[r,a,i]),m=Tl({control:r,name:a,defaultValue:d,exact:!0}),c=Sl({control:r,name:a,exact:!0}),g=v.useRef(e),_=v.useRef(r.register(a,{...e.rules,value:m,...ie(e.disabled)?{disabled:e.disabled}:{}}));g.current=e;const N=v.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!R(c.errors,a)},isDirty:{enumerable:!0,get:()=>!!R(c.dirtyFields,a)},isTouched:{enumerable:!0,get:()=>!!R(c.touchedFields,a)},isValidating:{enumerable:!0,get:()=>!!R(c.validatingFields,a)},error:{enumerable:!0,get:()=>R(c.errors,a)}}),[c,a]),S=v.useCallback(E=>_.current.onChange({target:{value:Za(E),name:a},type:_t.CHANGE}),[a]),w=v.useCallback(()=>_.current.onBlur({target:{value:R(r._formValues,a),name:a},type:_t.BLUR}),[a,r._formValues]),y=v.useCallback(E=>{const A=R(r._fields,a);A&&E&&(A._f.ref={focus:()=>E.focus&&E.focus(),select:()=>E.select&&E.select(),setCustomValidity:L=>E.setCustomValidity(L),reportValidity:()=>E.reportValidity()})},[r._fields,a]),V=v.useMemo(()=>({name:a,value:m,...ie(t)||c.disabled?{disabled:c.disabled||t}:{},onChange:S,onBlur:w,ref:y}),[a,t,c.disabled,S,w,y,m]);return v.useEffect(()=>{const E=r._options.shouldUnregister||l;r.register(a,{...g.current.rules,...ie(g.current.disabled)?{disabled:g.current.disabled}:{}});const A=(L,k)=>{const U=R(r._fields,L);U&&U._f&&(U._f.mount=k)};if(A(a,!0),E){const L=X(R(r._options.defaultValues,a));z(r._defaultValues,a,L),Y(R(r._formValues,a))&&z(r._formValues,a,L)}return!s&&r.register(a),()=>{(s?E&&!r._state.action:E)?r.unregister(a):A(a,!1)}},[a,r,s,l]),v.useEffect(()=>{r._setDisabledField({disabled:t,name:a})},[t,a,r]),v.useMemo(()=>({field:V,formState:c,fieldState:N}),[V,c,N])}var Vl=(e,n,a,t,r)=>n?{...a[e],types:{...a[e]&&a[e].types?a[e].types:{},[t]:r||!0}}:{},Ye=e=>Array.isArray(e)?e:[e],fa=()=>{let e=[];return{get observers(){return e},next:r=>{for(const l of e)l.next&&l.next(r)},subscribe:r=>(e.push(r),{unsubscribe:()=>{e=e.filter(l=>l!==r)}}),unsubscribe:()=>{e=[]}}},le=e=>H(e)&&!Object.keys(e).length,$t=e=>e.type==="file",de=e=>typeof e=="function",yt=e=>{if(!Kt)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},ar=e=>e.type==="select-multiple",qt=e=>e.type==="radio",Al=e=>qt(e)||et(e),At=e=>yt(e)&&e.isConnected;function wl(e,n){const a=n.slice(0,-1).length;let t=0;for(;t<a;)e=Y(e)?t++:e[n[t++]];return e}function Fl(e){for(const n in e)if(e.hasOwnProperty(n)&&!Y(e[n]))return!1;return!0}function J(e,n){const a=Array.isArray(n)?n:Ot(n)?[n]:Gt(n),t=a.length===1?e:wl(e,a),r=a.length-1,l=a[r];return t&&delete t[l],r!==0&&(H(t)&&le(t)||Array.isArray(t)&&Fl(t))&&J(e,a.slice(0,-1)),e}var rr=e=>{for(const n in e)if(de(e[n]))return!0;return!1};function Et(e,n={}){const a=Array.isArray(e);if(H(e)||a)for(const t in e)Array.isArray(e[t])||H(e[t])&&!rr(e[t])?(n[t]=Array.isArray(e[t])?[]:{},Et(e[t],n[t])):ae(e[t])||(n[t]=!0);return n}function nr(e,n,a){const t=Array.isArray(e);if(H(e)||t)for(const r in e)Array.isArray(e[r])||H(e[r])&&!rr(e[r])?Y(n)||Pt(a[r])?a[r]=Array.isArray(e[r])?Et(e[r],[]):{...Et(e[r])}:nr(e[r],ae(n)?{}:n[r],a[r]):a[r]=!_e(e[r],n[r]);return a}var Ce=(e,n)=>nr(e,n,Et(n));const va={value:!1,isValid:!1},ga={value:!0,isValid:!0};var lr=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(a=>a&&a.checked&&!a.disabled).map(a=>a.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Y(e[0].attributes.value)?Y(e[0].value)||e[0].value===""?ga:{value:e[0].value,isValid:!0}:ga:va}return va},ir=(e,{valueAsNumber:n,valueAsDate:a,setValueAs:t})=>Y(e)?e:n?e===""?NaN:e&&+e:a&&me(e)?new Date(e):t?t(e):e;const _a={isValid:!1,value:null};var sr=e=>Array.isArray(e)?e.reduce((n,a)=>a&&a.checked&&!a.disabled?{isValid:!0,value:a.value}:n,_a):_a;function ya(e){const n=e.ref;return $t(n)?n.files:qt(n)?sr(e.refs).value:ar(n)?[...n.selectedOptions].map(({value:a})=>a):et(n)?lr(e.refs).value:ir(Y(n.value)?e.ref.value:n.value,e)}var Pl=(e,n,a,t)=>{const r={};for(const l of e){const i=R(n,l);i&&z(r,l,i._f)}return{criteriaMode:a,names:[...e],fields:r,shouldUseNativeValidation:t}},bt=e=>e instanceof RegExp,$e=e=>Y(e)?e:bt(e)?e.source:H(e)?bt(e.value)?e.value.source:e.value:e,Ea=e=>({isOnSubmit:!e||e===ue.onSubmit,isOnBlur:e===ue.onBlur,isOnChange:e===ue.onChange,isOnAll:e===ue.all,isOnTouch:e===ue.onTouched});const ba="AsyncFunction";var Ll=e=>!!e&&!!e.validate&&!!(de(e.validate)&&e.validate.constructor.name===ba||H(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===ba)),kl=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ha=(e,n,a)=>!a&&(n.watchAll||n.watch.has(e)||[...n.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const He=(e,n,a,t)=>{for(const r of a||Object.keys(e)){const l=R(e,r);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&n(i.refs[0],r)&&!t)return!0;if(i.ref&&n(i.ref,i.name)&&!t)return!0;if(He(s,n))break}else if(H(s)&&He(s,n))break}}};function pa(e,n,a){const t=R(e,a);if(t||Ot(a))return{error:t,name:a};const r=a.split(".");for(;r.length;){const l=r.join("."),i=R(n,l),s=R(e,l);if(i&&!Array.isArray(i)&&a!==l)return{name:a};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};r.pop()}return{name:a}}var Il=(e,n,a,t)=>{a(e);const{name:r,...l}=e;return le(l)||Object.keys(l).length>=Object.keys(n).length||Object.keys(l).find(i=>n[i]===(!t||ue.all))},xl=(e,n,a)=>!e||!n||e===n||Ye(e).some(t=>t&&(a?t===n:t.startsWith(n)||n.startsWith(t))),Dl=(e,n,a,t,r)=>r.isOnAll?!1:!a&&r.isOnTouch?!(n||e):(a?t.isOnBlur:r.isOnBlur)?!e:(a?t.isOnChange:r.isOnChange)?e:!0,Ml=(e,n)=>!jt(R(e,n)).length&&J(e,n),Kl=(e,n,a)=>{const t=Ye(R(e,a));return z(t,"root",n[a]),z(e,a,t),e},ft=e=>me(e);function Oa(e,n,a="validate"){if(ft(e)||Array.isArray(e)&&e.every(ft)||ie(e)&&!e)return{type:a,message:ft(e)?e:"",ref:n}}var Fe=e=>H(e)&&!bt(e)?e:{value:e,message:""},Ra=async(e,n,a,t,r,l)=>{const{ref:i,refs:s,required:d,maxLength:m,minLength:c,min:g,max:_,pattern:N,validate:S,name:w,valueAsNumber:y,mount:V}=e._f,E=R(a,w);if(!V||n.has(w))return{};const A=s?s[0]:i,L=F=>{r&&A.reportValidity&&(A.setCustomValidity(ie(F)?"":F||""),A.reportValidity())},k={},U=qt(i),M=et(i),$=U||M,D=(y||$t(i))&&Y(i.value)&&Y(E)||yt(i)&&i.value===""||E===""||Array.isArray(E)&&!E.length,K=Vl.bind(null,w,t,k),j=(F,O,x,B=ge.maxLength,G=ge.minLength)=>{const Q=F?O:x;k[w]={type:F?B:G,message:Q,ref:i,...K(F?B:G,Q)}};if(l?!Array.isArray(E)||!E.length:d&&(!$&&(D||ae(E))||ie(E)&&!E||M&&!lr(s).isValid||U&&!sr(s).isValid)){const{value:F,message:O}=ft(d)?{value:!!d,message:d}:Fe(d);if(F&&(k[w]={type:ge.required,message:O,ref:A,...K(ge.required,O)},!t))return L(O),k}if(!D&&(!ae(g)||!ae(_))){let F,O;const x=Fe(_),B=Fe(g);if(!ae(E)&&!isNaN(E)){const G=i.valueAsNumber||E&&+E;ae(x.value)||(F=G>x.value),ae(B.value)||(O=G<B.value)}else{const G=i.valueAsDate||new Date(E),Q=ve=>new Date(new Date().toDateString()+" "+ve),re=i.type=="time",ne=i.type=="week";me(x.value)&&E&&(F=re?Q(E)>Q(x.value):ne?E>x.value:G>new Date(x.value)),me(B.value)&&E&&(O=re?Q(E)<Q(B.value):ne?E<B.value:G<new Date(B.value))}if((F||O)&&(j(!!F,x.message,B.message,ge.max,ge.min),!t))return L(k[w].message),k}if((m||c)&&!D&&(me(E)||l&&Array.isArray(E))){const F=Fe(m),O=Fe(c),x=!ae(F.value)&&E.length>+F.value,B=!ae(O.value)&&E.length<+O.value;if((x||B)&&(j(x,F.message,O.message),!t))return L(k[w].message),k}if(N&&!D&&me(E)){const{value:F,message:O}=Fe(N);if(bt(F)&&!E.match(F)&&(k[w]={type:ge.pattern,message:O,ref:i,...K(ge.pattern,O)},!t))return L(O),k}if(S){if(de(S)){const F=await S(E,a),O=Oa(F,A);if(O&&(k[w]={...O,...K(ge.validate,O.message)},!t))return L(O.message),k}else if(H(S)){let F={};for(const O in S){if(!le(F)&&!t)break;const x=Oa(await S[O](E,a),A,O);x&&(F={...x,...K(O,x.message)},L(x.message),t&&(k[w]=F))}if(!le(F)&&(k[w]={ref:A,...F},!t))return k}}return L(!0),k};const jl={mode:ue.onSubmit,reValidateMode:ue.onChange,shouldFocusError:!0};function Gl(e={}){let n={...jl,...e},a={submitCount:0,isDirty:!1,isReady:!1,isLoading:de(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},t={},r=H(n.defaultValues)||H(n.values)?X(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:X(r),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,m=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...c};const _={array:fa(),state:fa()},N=n.criteriaMode===ue.all,S=o=>u=>{clearTimeout(m),m=setTimeout(o,u)},w=async o=>{if(!n.disabled&&(c.isValid||g.isValid||o)){const u=n.resolver?le((await M()).errors):await D(t,!0);u!==a.isValid&&_.state.next({isValid:u})}},y=(o,u)=>{!n.disabled&&(c.isValidating||c.validatingFields||g.isValidating||g.validatingFields)&&((o||Array.from(s.mount)).forEach(f=>{f&&(u?z(a.validatingFields,f,u):J(a.validatingFields,f))}),_.state.next({validatingFields:a.validatingFields,isValidating:!le(a.validatingFields)}))},V=(o,u=[],f,T,p=!0,b=!0)=>{if(T&&f&&!n.disabled){if(i.action=!0,b&&Array.isArray(R(t,o))){const P=f(R(t,o),T.argA,T.argB);p&&z(t,o,P)}if(b&&Array.isArray(R(a.errors,o))){const P=f(R(a.errors,o),T.argA,T.argB);p&&z(a.errors,o,P),Ml(a.errors,o)}if((c.touchedFields||g.touchedFields)&&b&&Array.isArray(R(a.touchedFields,o))){const P=f(R(a.touchedFields,o),T.argA,T.argB);p&&z(a.touchedFields,o,P)}(c.dirtyFields||g.dirtyFields)&&(a.dirtyFields=Ce(r,l)),_.state.next({name:o,isDirty:j(o,u),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else z(l,o,u)},E=(o,u)=>{z(a.errors,o,u),_.state.next({errors:a.errors})},A=o=>{a.errors=o,_.state.next({errors:a.errors,isValid:!1})},L=(o,u,f,T)=>{const p=R(t,o);if(p){const b=R(l,o,Y(f)?R(r,o):f);Y(b)||T&&T.defaultChecked||u?z(l,o,u?b:ya(p._f)):x(o,b),i.mount&&w()}},k=(o,u,f,T,p)=>{let b=!1,P=!1;const C={name:o};if(!n.disabled){if(!f||T){(c.isDirty||g.isDirty)&&(P=a.isDirty,a.isDirty=C.isDirty=j(),b=P!==C.isDirty);const q=_e(R(r,o),u);P=!!R(a.dirtyFields,o),q?J(a.dirtyFields,o):z(a.dirtyFields,o,!0),C.dirtyFields=a.dirtyFields,b=b||(c.dirtyFields||g.dirtyFields)&&P!==!q}if(f){const q=R(a.touchedFields,o);q||(z(a.touchedFields,o,f),C.touchedFields=a.touchedFields,b=b||(c.touchedFields||g.touchedFields)&&q!==f)}b&&p&&_.state.next(C)}return b?C:{}},U=(o,u,f,T)=>{const p=R(a.errors,o),b=(c.isValid||g.isValid)&&ie(u)&&a.isValid!==u;if(n.delayError&&f?(d=S(()=>E(o,f)),d(n.delayError)):(clearTimeout(m),d=null,f?z(a.errors,o,f):J(a.errors,o)),(f?!_e(p,f):p)||!le(T)||b){const P={...T,...b&&ie(u)?{isValid:u}:{},errors:a.errors,name:o};a={...a,...P},_.state.next(P)}},M=async o=>{y(o,!0);const u=await n.resolver(l,n.context,Pl(o||s.mount,t,n.criteriaMode,n.shouldUseNativeValidation));return y(o),u},$=async o=>{const{errors:u}=await M(o);if(o)for(const f of o){const T=R(u,f);T?z(a.errors,f,T):J(a.errors,f)}else a.errors=u;return u},D=async(o,u,f={valid:!0})=>{for(const T in o){const p=o[T];if(p){const{_f:b,...P}=p;if(b){const C=s.array.has(b.name),q=p._f&&Ll(p._f);q&&c.validatingFields&&y([T],!0);const se=await Ra(p,s.disabled,l,N,n.shouldUseNativeValidation&&!u,C);if(q&&c.validatingFields&&y([T]),se[b.name]&&(f.valid=!1,u))break;!u&&(R(se,b.name)?C?Kl(a.errors,se,b.name):z(a.errors,b.name,se[b.name]):J(a.errors,b.name))}!le(P)&&await D(P,u,f)}}return f.valid},K=()=>{for(const o of s.unMount){const u=R(t,o);u&&(u._f.refs?u._f.refs.every(f=>!At(f)):!At(u._f.ref))&&De(o)}s.unMount=new Set},j=(o,u)=>!n.disabled&&(o&&u&&z(l,o,u),!_e(ve(),r)),F=(o,u,f)=>tr(o,s,{...i.mount?l:Y(u)?r:me(o)?{[o]:u}:u},f,u),O=o=>jt(R(i.mount?l:r,o,n.shouldUnregister?R(r,o,[]):[])),x=(o,u,f={})=>{const T=R(t,o);let p=u;if(T){const b=T._f;b&&(!b.disabled&&z(l,o,ir(u,b)),p=yt(b.ref)&&ae(u)?"":u,ar(b.ref)?[...b.ref.options].forEach(P=>P.selected=p.includes(P.value)):b.refs?et(b.ref)?b.refs.forEach(P=>{(!P.defaultChecked||!P.disabled)&&(Array.isArray(p)?P.checked=!!p.find(C=>C===P.value):P.checked=p===P.value||!!p)}):b.refs.forEach(P=>P.checked=P.value===p):$t(b.ref)?b.ref.value="":(b.ref.value=p,b.ref.type||_.state.next({name:o,values:X(l)})))}(f.shouldDirty||f.shouldTouch)&&k(o,p,f.shouldTouch,f.shouldDirty,!0),f.shouldValidate&&ne(o)},B=(o,u,f)=>{for(const T in u){if(!u.hasOwnProperty(T))return;const p=u[T],b=o+"."+T,P=R(t,b);(s.array.has(o)||H(p)||P&&!P._f)&&!Ne(p)?B(b,p,f):x(b,p,f)}},G=(o,u,f={})=>{const T=R(t,o),p=s.array.has(o),b=X(u);z(l,o,b),p?(_.array.next({name:o,values:X(l)}),(c.isDirty||c.dirtyFields||g.isDirty||g.dirtyFields)&&f.shouldDirty&&_.state.next({name:o,dirtyFields:Ce(r,l),isDirty:j(o,b)})):T&&!T._f&&!ae(b)?B(o,b,f):x(o,b,f),ha(o,s)&&_.state.next({...a,name:o}),_.state.next({name:i.mount?o:void 0,values:X(l)})},Q=async o=>{i.mount=!0;const u=o.target;let f=u.name,T=!0;const p=R(t,f),b=q=>{T=Number.isNaN(q)||Ne(q)&&isNaN(q.getTime())||_e(q,R(l,f,q))},P=Ea(n.mode),C=Ea(n.reValidateMode);if(p){let q,se;const it=u.type?ya(p._f):Za(o),Ee=o.type===_t.BLUR||o.type===_t.FOCUS_OUT,fr=!kl(p._f)&&!n.resolver&&!R(a.errors,f)&&!p._f.deps||Dl(Ee,R(a.touchedFields,f),a.isSubmitted,C,P),St=ha(f,s,Ee);z(l,f,it),Ee?(!u||!u.readOnly)&&(p._f.onBlur&&p._f.onBlur(o),d&&d(0)):p._f.onChange&&p._f.onChange(o);const Tt=k(f,it,Ee),vr=!le(Tt)||St;if(!Ee&&_.state.next({name:f,type:o.type,values:X(l)}),fr)return(c.isValid||g.isValid)&&(n.mode==="onBlur"?Ee&&w():Ee||w()),vr&&_.state.next({name:f,...St?{}:Tt});if(!Ee&&St&&_.state.next({...a}),n.resolver){const{errors:Wt}=await M([f]);if(b(it),T){const gr=pa(a.errors,t,f),Jt=pa(Wt,t,gr.name||f);q=Jt.error,f=Jt.name,se=le(Wt)}}else y([f],!0),q=(await Ra(p,s.disabled,l,N,n.shouldUseNativeValidation))[f],y([f]),b(it),T&&(q?se=!1:(c.isValid||g.isValid)&&(se=await D(t,!0)));T&&(p._f.deps&&ne(p._f.deps),U(f,se,q,Tt))}},re=(o,u)=>{if(R(a.errors,u)&&o.focus)return o.focus(),1},ne=async(o,u={})=>{let f,T;const p=Ye(o);if(n.resolver){const b=await $(Y(o)?o:p);f=le(b),T=o?!p.some(P=>R(b,P)):f}else o?(T=(await Promise.all(p.map(async b=>{const P=R(t,b);return await D(P&&P._f?{[b]:P}:P)}))).every(Boolean),!(!T&&!a.isValid)&&w()):T=f=await D(t);return _.state.next({...!me(o)||(c.isValid||g.isValid)&&f!==a.isValid?{}:{name:o},...n.resolver||!o?{isValid:f}:{},errors:a.errors}),u.shouldFocus&&!T&&He(t,re,o?p:s.mount),T},ve=o=>{const u={...i.mount?l:r};return Y(o)?u:me(o)?R(u,o):o.map(f=>R(u,f))},te=(o,u)=>({invalid:!!R((u||a).errors,o),isDirty:!!R((u||a).dirtyFields,o),error:R((u||a).errors,o),isValidating:!!R(a.validatingFields,o),isTouched:!!R((u||a).touchedFields,o)}),xe=o=>{o&&Ye(o).forEach(u=>J(a.errors,u)),_.state.next({errors:o?a.errors:{}})},pe=(o,u,f)=>{const T=(R(t,o,{_f:{}})._f||{}).ref,p=R(a.errors,o)||{},{ref:b,message:P,type:C,...q}=p;z(a.errors,o,{...q,...u,ref:T}),_.state.next({name:o,errors:a.errors,isValid:!1}),f&&f.shouldFocus&&T&&T.focus&&T.focus()},Rt=(o,u)=>de(o)?_.state.subscribe({next:f=>"values"in f&&o(F(void 0,u),f)}):F(o,u,!0),rt=o=>_.state.subscribe({next:u=>{xl(o.name,u.name,o.exact)&&Il(u,o.formState||c,Ge,o.reRenderRoot)&&o.callback({values:{...l},...a,...u,defaultValues:r})}}).unsubscribe,Nt=o=>(i.mount=!0,g={...g,...o.formState},rt({...o,formState:g})),De=(o,u={})=>{for(const f of o?Ye(o):s.mount)s.mount.delete(f),s.array.delete(f),u.keepValue||(J(t,f),J(l,f)),!u.keepError&&J(a.errors,f),!u.keepDirty&&J(a.dirtyFields,f),!u.keepTouched&&J(a.touchedFields,f),!u.keepIsValidating&&J(a.validatingFields,f),!n.shouldUnregister&&!u.keepDefaultValue&&J(r,f);_.state.next({values:X(l)}),_.state.next({...a,...u.keepDirty?{isDirty:j()}:{}}),!u.keepIsValid&&w()},nt=({disabled:o,name:u})=>{(ie(o)&&i.mount||o||s.disabled.has(u))&&(o?s.disabled.add(u):s.disabled.delete(u))},Te=(o,u={})=>{let f=R(t,o);const T=ie(u.disabled)||ie(n.disabled);return z(t,o,{...f||{},_f:{...f&&f._f?f._f:{ref:{name:o}},name:o,mount:!0,...u}}),s.mount.add(o),f?nt({disabled:ie(u.disabled)?u.disabled:n.disabled,name:o}):L(o,!0,u.value),{...T?{disabled:u.disabled||n.disabled}:{},...n.progressive?{required:!!u.required,min:$e(u.min),max:$e(u.max),minLength:$e(u.minLength),maxLength:$e(u.maxLength),pattern:$e(u.pattern)}:{},name:o,onChange:Q,onBlur:Q,ref:p=>{if(p){Te(o,u),f=R(t,o);const b=Y(p.value)&&p.querySelectorAll&&p.querySelectorAll("input,select,textarea")[0]||p,P=Al(b),C=f._f.refs||[];if(P?C.find(q=>q===b):b===f._f.ref)return;z(t,o,{_f:{...f._f,...P?{refs:[...C.filter(At),b,...Array.isArray(R(r,o))?[{}]:[]],ref:{type:b.type,name:o}}:{ref:b}}}),L(o,!1,void 0,b)}else f=R(t,o,{}),f._f&&(f._f.mount=!1),(n.shouldUnregister||u.shouldUnregister)&&!(Qa(s.array,o)&&i.action)&&s.unMount.add(o)}}},Ve=()=>n.shouldFocusError&&He(t,re,s.mount),Me=o=>{ie(o)&&(_.state.next({disabled:o}),He(t,(u,f)=>{const T=R(t,f);T&&(u.disabled=T._f.disabled||o,Array.isArray(T._f.refs)&&T._f.refs.forEach(p=>{p.disabled=T._f.disabled||o}))},0,!1))},Ae=(o,u)=>async f=>{let T;f&&(f.preventDefault&&f.preventDefault(),f.persist&&f.persist());let p=X(l);if(_.state.next({isSubmitting:!0}),n.resolver){const{errors:b,values:P}=await M();a.errors=b,p=X(P)}else await D(t);if(s.disabled.size)for(const b of s.disabled)J(p,b);if(J(a.errors,"root"),le(a.errors)){_.state.next({errors:{}});try{await o(p,f)}catch(b){T=b}}else u&&await u({...a.errors},f),Ve(),setTimeout(Ve);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:le(a.errors)&&!T,submitCount:a.submitCount+1,errors:a.errors}),T)throw T},Ke=(o,u={})=>{R(t,o)&&(Y(u.defaultValue)?G(o,X(R(r,o))):(G(o,u.defaultValue),z(r,o,X(u.defaultValue))),u.keepTouched||J(a.touchedFields,o),u.keepDirty||(J(a.dirtyFields,o),a.isDirty=u.defaultValue?j(o,X(R(r,o))):j()),u.keepError||(J(a.errors,o),c.isValid&&w()),_.state.next({...a}))},Oe=(o,u={})=>{const f=o?X(o):r,T=X(f),p=le(o),b=p?r:T;if(u.keepDefaultValues||(r=f),!u.keepValues){if(u.keepDirtyValues){const P=new Set([...s.mount,...Object.keys(Ce(r,l))]);for(const C of Array.from(P))R(a.dirtyFields,C)?z(b,C,R(l,C)):G(C,R(b,C))}else{if(Kt&&Y(o))for(const P of s.mount){const C=R(t,P);if(C&&C._f){const q=Array.isArray(C._f.refs)?C._f.refs[0]:C._f.ref;if(yt(q)){const se=q.closest("form");if(se){se.reset();break}}}}if(u.keepFieldsRef)for(const P of s.mount)G(P,R(b,P));else t={}}l=n.shouldUnregister?u.keepDefaultValues?X(r):{}:X(b),_.array.next({values:{...b}}),_.state.next({values:{...b}})}s={mount:u.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!c.isValid||!!u.keepIsValid||!!u.keepDirtyValues,i.watch=!!n.shouldUnregister,_.state.next({submitCount:u.keepSubmitCount?a.submitCount:0,isDirty:p?!1:u.keepDirty?a.isDirty:!!(u.keepDefaultValues&&!_e(o,r)),isSubmitted:u.keepIsSubmitted?a.isSubmitted:!1,dirtyFields:p?{}:u.keepDirtyValues?u.keepDefaultValues&&l?Ce(r,l):a.dirtyFields:u.keepDefaultValues&&o?Ce(r,o):u.keepDirty?a.dirtyFields:{},touchedFields:u.keepTouched?a.touchedFields:{},errors:u.keepErrors?a.errors:{},isSubmitSuccessful:u.keepIsSubmitSuccessful?a.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:r})},Re=(o,u)=>Oe(de(o)?o(l):o,u),je=(o,u={})=>{const f=R(t,o),T=f&&f._f;if(T){const p=T.refs?T.refs[0]:T.ref;p.focus&&(p.focus(),u.shouldSelect&&de(p.select)&&p.select())}},Ge=o=>{a={...a,...o}},we={control:{register:Te,unregister:De,getFieldState:te,handleSubmit:Ae,setError:pe,_subscribe:rt,_runSchema:M,_focusError:Ve,_getWatch:F,_getDirty:j,_setValid:w,_setFieldArray:V,_setDisabledField:nt,_setErrors:A,_getFieldArray:O,_reset:Oe,_resetDefaultValues:()=>de(n.defaultValues)&&n.defaultValues().then(o=>{Re(o,n.resetOptions),_.state.next({isLoading:!1})}),_removeUnmounted:K,_disableForm:Me,_subjects:_,_proxyFormState:c,get _fields(){return t},get _formValues(){return l},get _state(){return i},set _state(o){i=o},get _defaultValues(){return r},get _names(){return s},set _names(o){s=o},get _formState(){return a},get _options(){return n},set _options(o){n={...n,...o}}},subscribe:Nt,trigger:ne,register:Te,handleSubmit:Ae,watch:Rt,setValue:G,getValues:ve,reset:Re,resetField:Ke,clearErrors:xe,unregister:De,setError:pe,setFocus:je,getFieldState:te};return{...we,formControl:we}}function Ul(e={}){const n=v.useRef(void 0),a=v.useRef(void 0),[t,r]=v.useState({isDirty:!1,isValidating:!1,isLoading:de(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:de(e.defaultValues)?void 0:e.defaultValues});if(!n.current)if(e.formControl)n.current={...e.formControl,formState:t},e.defaultValues&&!de(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=Gl(e);n.current={...s,formState:t}}const l=n.current.control;return l._options=e,Bt(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>r({...l._formState}),reRenderRoot:!0});return r(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),v.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),v.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),v.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),v.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),v.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==t.isDirty&&l._subjects.state.next({isDirty:i})}},[l,t.isDirty]),v.useEffect(()=>{e.values&&!_e(e.values,a.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),a.current=e.values,r(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),v.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),n.current.formState=er(t,l),n.current}function Bl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Na={exports:{}},qe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa;function Cl(){if(Sa)return qe;Sa=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(t,r,l){var i=null;if(l!==void 0&&(i=""+l),r.key!==void 0&&(i=""+r.key),"key"in r){l={};for(var s in r)s!=="key"&&(l[s]=r[s])}else l=r;return r=l.ref,{$$typeof:e,type:t,key:i,ref:r!==void 0?r:null,props:l}}return qe.Fragment=n,qe.jsx=a,qe.jsxs=a,qe}var Ta;function $l(){return Ta||(Ta=1,Na.exports=Cl()),Na.exports}var Lt=$l();const tt={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};ce(tt);var Va={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Aa;function ql(){return Aa||(Aa=1,function(e){(function(){var n={}.hasOwnProperty;function a(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=r(l,t.call(this,s)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=r(i,this&&this[s]||s));return i}function r(l,i){return i?l?l+" "+i:l+i:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(Va)),Va.exports}var zl=ql();const zt=Bl(zl),Yl="_borderbox_1a0x6_1",Hl="_error_1a0x6_5",Wl="_warning_1a0x6_8",Jl={borderbox:Yl,error:Hl,warning:Wl};zt.bind(Jl);const Xl="_aksjonspunkt_11wjs_1",Zl="_erAksjonspunktApent_11wjs_4",Ql="_erIkkeGodkjentAvBeslutter_11wjs_8",ei={aksjonspunkt:Xl,erAksjonspunktApent:Zl,erIkkeGodkjentAvBeslutter:Ql},ti=zt.bind(ei),ai=({erAksjonspunktApent:e,erIkkeGodkjentAvBeslutter:n,className:a,children:t})=>Lt.jsx("div",{className:ti(a,"aksjonspunkt",{erAksjonspunktApent:e&&!n,erIkkeGodkjentAvBeslutter:n}),children:t});ce(tt);ce(tt);const ri="_divider_1jpov_1",ni="_dividerParagraf_1jpov_8",li="_leftPanel_1jpov_11",ii="_rightPanel_1jpov_14",si={divider:ri,dividerParagraf:ni,leftPanel:li,rightPanel:ii};zt.bind(si);const or=()=>Lt.jsx("span",{"data-testid":"editedIcon",children:Lt.jsx(en,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});ce(tt);ce(tt);function oi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wa={exports:{}},ze={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa;function ui(){if(Fa)return ze;Fa=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(t,r,l){var i=null;if(l!==void 0&&(i=""+l),r.key!==void 0&&(i=""+r.key),"key"in r){l={};for(var s in r)s!=="key"&&(l[s]=r[s])}else l=r;return r=l.ref,{$$typeof:e,type:t,key:i,ref:r!==void 0?r:null,props:l}}return ze.Fragment=n,ze.jsx=a,ze.jsxs=a,ze}var Pa;function di(){return Pa||(Pa=1,wa.exports=ui()),wa.exports}var Z=di();const Yt=e=>e.reduce((n,a,t)=>({...n,[t]:r=>a(r)||!0}),{}),Ht=(e,n)=>n.split(".").reduce((a,t)=>a!==void 0?a[t]:a,e)?.message;var kt={exports:{}},ci=kt.exports,La;function mi(){return La||(La=1,function(e,n){(function(a,t){e.exports=t()})(ci,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,d={},m=function(y){return(y=+y)+(y>68?1900:2e3)},c=function(y){return function(V){this[y]=+V}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(V){if(!V||V==="Z")return 0;var E=V.match(/([+-]|\d\d)/g),A=60*E[1]+(+E[2]||0);return A===0?0:E[0]==="+"?-A:A}(y)}],_=function(y){var V=d[y];return V&&(V.indexOf?V:V.s.concat(V.f))},N=function(y,V){var E,A=d.meridiem;if(A){for(var L=1;L<=24;L+=1)if(y.indexOf(A(L,0,V))>-1){E=L>12;break}}else E=y===(V?"pm":"PM");return E},S={A:[s,function(y){this.afternoon=N(y,!1)}],a:[s,function(y){this.afternoon=N(y,!0)}],Q:[r,function(y){this.month=3*(y-1)+1}],S:[r,function(y){this.milliseconds=100*+y}],SS:[l,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,c("seconds")],ss:[i,c("seconds")],m:[i,c("minutes")],mm:[i,c("minutes")],H:[i,c("hours")],h:[i,c("hours")],HH:[i,c("hours")],hh:[i,c("hours")],D:[i,c("day")],DD:[l,c("day")],Do:[s,function(y){var V=d.ordinal,E=y.match(/\d+/);if(this.day=E[0],V)for(var A=1;A<=31;A+=1)V(A).replace(/\[|\]/g,"")===y&&(this.day=A)}],w:[i,c("week")],ww:[l,c("week")],M:[i,c("month")],MM:[l,c("month")],MMM:[s,function(y){var V=_("months"),E=(_("monthsShort")||V.map(function(A){return A.slice(0,3)})).indexOf(y)+1;if(E<1)throw new Error;this.month=E%12||E}],MMMM:[s,function(y){var V=_("months").indexOf(y)+1;if(V<1)throw new Error;this.month=V%12||V}],Y:[/[+-]?\d+/,c("year")],YY:[l,function(y){this.year=m(y)}],YYYY:[/\d{4}/,c("year")],Z:g,ZZ:g};function w(y){var V,E;V=y,E=d&&d.formats;for(var A=(y=V.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(K,j,F){var O=F&&F.toUpperCase();return j||E[F]||a[F]||E[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,B,G){return B||G.slice(1)})})).match(t),L=A.length,k=0;k<L;k+=1){var U=A[k],M=S[U],$=M&&M[0],D=M&&M[1];A[k]=D?{regex:$,parser:D}:U.replace(/^\[|\]$/g,"")}return function(K){for(var j={},F=0,O=0;F<L;F+=1){var x=A[F];if(typeof x=="string")O+=x.length;else{var B=x.regex,G=x.parser,Q=K.slice(O),re=B.exec(Q)[0];G.call(j,re),K=K.replace(re,"")}}return function(ne){var ve=ne.afternoon;if(ve!==void 0){var te=ne.hours;ve?te<12&&(ne.hours+=12):te===12&&(ne.hours=0),delete ne.afternoon}}(j),j}}return function(y,V,E){E.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(m=y.parseTwoDigitYear);var A=V.prototype,L=A.parse;A.parse=function(k){var U=k.date,M=k.utc,$=k.args;this.$u=M;var D=$[1];if(typeof D=="string"){var K=$[2]===!0,j=$[3]===!0,F=K||j,O=$[2];j&&(O=$[2]),d=this.$locale(),!K&&O&&(d=E.Ls[O]),this.$d=function(Q,re,ne,ve){try{if(["x","X"].indexOf(re)>-1)return new Date((re==="X"?1e3:1)*Q);var te=w(re)(Q),xe=te.year,pe=te.month,Rt=te.day,rt=te.hours,Nt=te.minutes,De=te.seconds,nt=te.milliseconds,Te=te.zone,Ve=te.week,Me=new Date,Ae=Rt||(xe||pe?1:Me.getDate()),Ke=xe||Me.getFullYear(),Oe=0;xe&&!pe||(Oe=pe>0?pe-1:Me.getMonth());var Re,je=rt||0,Ge=Nt||0,lt=De||0,we=nt||0;return Te?new Date(Date.UTC(Ke,Oe,Ae,je,Ge,lt,we+60*Te.offset*1e3)):ne?new Date(Date.UTC(Ke,Oe,Ae,je,Ge,lt,we)):(Re=new Date(Ke,Oe,Ae,je,Ge,lt,we),Ve&&(Re=ve(Re).week(Ve).toDate()),Re)}catch{return new Date("")}}(U,D,M,E),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),F&&U!=this.format(D)&&(this.$d=new Date("")),d={}}else if(D instanceof Array)for(var x=D.length,B=1;B<=x;B+=1){$[1]=D[B-1];var G=E.apply(this,$);if(G.isValid()){this.$d=G.$d,this.$L=G.$L,this.init();break}B===x&&(this.$d=new Date(""))}else L.call(this,k)}}})}(kt)),kt.exports}var fi=mi();const vi=oi(fi),gi="_textarea_14c7r_1",_i="_readOnlyField_14c7r_7",ka={textarea:gi,readOnlyField:_i},yi=e=>e!=null&&e!=="",ur=({label:e,value:n,isEdited:a=!1,type:t,hideLabel:r,size:l})=>yi(n)?Z.jsxs(Je,{gap:"space-4",children:[e&&!r&&Z.jsx(be,{size:l,children:e}),Z.jsxs(We,{gap:"space-8",align:"center",wrap:!1,children:[Z.jsx(Ca,{className:t==="textarea"?ka.textarea:ka.readOnlyField,size:l,children:n}),a&&Z.jsx(or,{})]})]}):null;Er.extend(vi);const Ei=({label:e,description:n,validate:a=[],onChange:t,children:r,className:l,isReadOnly:i=!1,size:s="small",isEdited:d=!1,hideLegend:m=!1,...c})=>{const{name:g,control:_}=c,{formState:{errors:N}}=he(),{field:S}=Ct({name:g,control:_,rules:{validate:Yt(a)}});return Z.jsx(vl,{name:g,value:S.value!==void 0?S.value:null,legend:Z.jsxs(We,{justify:"center",gap:"space-8",children:[e,i&&d&&Z.jsx(or,{})]}),hideLegend:m,disabled:i,description:n,size:s,error:Ht(N,g),onChange:w=>{t&&t(w),S.onChange(w)},className:l,children:r})},bi=({label:e,selectValues:n,validate:a=[],readOnly:t=!1,description:r,hideValueOnDisable:l=!1,onChange:i,className:s,hideLabel:d,isEdited:m,size:c,...g})=>{const{name:_,control:N,disabled:S}=g,{formState:{errors:w}}=he(),{field:y}=Ct({name:_,control:N,rules:{validate:h.useMemo(()=>Yt(a),[a])}});if(t){const A=n.map(k=>k.props).find(k=>k.value===y.value),L=A?A.children:void 0;return Z.jsx(ur,{value:L,label:e,hideLabel:d,isEdited:m,size:c})}const V=y.value||"",E=!n.map(A=>A.props.value).includes(V)&&V!=="";return E&&console.warn(`No corresponding option found for value '${V}'`),Z.jsxs(el,{size:"small",className:s,error:Ht(w,_),label:e,description:r,value:l&&S||E?"":y.value,disabled:S,onChange:A=>{i&&i(A),y.onChange(A)},hideLabel:d,children:[Z.jsx("option",{style:{display:"none"}}),",",n]})},hi="_textAreaFieldWithBadges_bdz0b_1",pi="_etikettWrapper_bdz0b_4",Ia={textAreaFieldWithBadges:hi,etikettWrapper:pi},Oi=({name:e,control:n,label:a,readOnly:t,maxLength:r,badges:l,validate:i=[],parse:s=N=>N,className:d,description:m,isEdited:c,size:g="small",..._})=>{const{formState:{errors:N}}=he(),{field:S}=Ct({name:e,control:n,rules:{validate:h.useMemo(()=>Yt(i),[i])}});return t?Z.jsx(ur,{size:g,label:a,value:S.value,type:"textarea",isEdited:c,hideLabel:_.hideLabel}):Z.jsxs("div",{className:l?Ia.textAreaFieldWithBadges:null,children:[l&&Z.jsx("div",{className:Ia.etikettWrapper,children:l.map(({type:w,titleText:y})=>Z.jsx(ol,{variant:w,size:"small",children:y},y))}),Z.jsx(pl,{size:g,label:a,description:m,className:d,autoComplete:"off",...S,onChange:w=>S.onChange(w.currentTarget.value!==""?s(w.currentTarget.value):null),value:S.value?S.value:"",error:Ht(N,e),maxLength:r,..._})]})},Ri=({formMethods:e,onSubmit:n,children:a,className:t,setDataOnUnmount:r})=>{const{handleSubmit:l,getValues:i}=e;return h.useEffect(()=>()=>{r&&r(i())},[]),Z.jsx(Nl,{...e,children:Z.jsx("form",{className:t,onSubmit:n?l(s=>n(s)):void 0,children:a})})},Ni="_begrunnelseTextField_hw8s7_6",Si={begrunnelseTextField:Ni},at={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},Ti=ce(at),Vi=hr(3),Ai=pr(2e3),wi=e=>e?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",Fi=e=>n=>n!==void 0||e,ke=({readOnly:e,text:n,useAllWidth:a=!1,notRequired:t=!1})=>{const{formState:{isDirty:r},control:l}=he(),i=t?()=>!1:Fi(r);return I.jsx("div",{className:a?"":Si.begrunnelseTextField,children:I.jsx(Oi,{name:"begrunnelse",control:l,label:n??Ti.formatMessage({id:wi(e)}),validate:[Ka(i),Vi,Ai,Or],maxLength:2e3,readOnly:e,parse:br})})},Pi=e=>e.length>0&&e[0].begrunnelse?e[0].begrunnelse:"";ke.buildInitialValues=e=>({begrunnelse:Rr(Pi(e))});ke.transformValues=e=>({begrunnelse:e.begrunnelse});ke.__docgenInfo={description:`ProsessStegBegrunnelseTextField

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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Li=ce(at),ki=(e,n,a,t)=>!a&&!n||e?!0:t===void 0?!a:!a&&t||t,dr=({isReadOnly:e,isSubmittable:n,isSubmitting:a,isDirty:t,text:r,onClick:l,hasEmptyRequiredFields:i})=>e?null:I.jsx("div",{children:I.jsx(Hn,{size:"small",variant:"primary",loading:a,disabled:ki(a,n,t,i),onClick:l||Nr,type:l?"button":"submit",children:r??Li.formatMessage({id:"SubmitButton.ConfirmInformation"})})});dr.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const Ii="_godkjentImage_bo2wj_1",xi="_avslattImage_bo2wj_7",Di="_selectBredde_bo2wj_13",wt={godkjentImage:Ii,avslattImage:xi,selectBredde:Di},Mi=ce(at),Ki=(e,n)=>()=>e===!1&&!n,ji=e=>e.toSorted((n,a)=>n.navn.localeCompare(a.navn)),Ie=({avslagsarsaker:e,customVilkarIkkeOppfyltText:n,customVilkarOppfyltText:a,readOnly:t,skalKunneInnvilge:r=!0,validatorsForRadioOptions:l})=>{const{getValues:i,watch:s,control:d}=he(),m=s("erVilkarOk"),c=l?l.concat(Qt):[Qt];return I.jsxs(Je,{gap:"space-16",paddingInline:"4",children:[t&&m!==void 0&&I.jsxs(We,{gap:"space-8",children:[m&&I.jsx(Hr,{className:wt.godkjentImage}),!m&&I.jsx(an,{className:wt.avslattImage}),m&&I.jsx(fe,{size:"small",children:a}),!m&&I.jsx(fe,{size:"small",children:n})]}),(!t||m===void 0)&&I.jsxs(Ei,{name:"erVilkarOk",control:d,validate:c,isReadOnly:t,children:[I.jsx(oa,{value:!0,size:"small",disabled:!r,children:a}),I.jsx(oa,{value:!1,size:"small",children:n})]}),m!==void 0&&!m&&e&&I.jsx(bi,{name:"avslagskode",control:d,label:Mi.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:ji(e||[]).map(g=>I.jsx("option",{value:g.kode,children:g.navn},g.kode)),readOnly:t,className:wt.selectBredde,validate:[Ka(Ki(m,i("avslagskode")))]})]})};Ie.buildInitialValues=(e,n,a)=>{const r=e.some(l=>l.status===Ze.OPPRETTET)?void 0:Pe.OPPFYLT===n;return{erVilkarOk:r,avslagskode:r===!1&&a?.avslagsarsak?a.avslagsarsak:void 0}};Ie.transformValues=e=>e.erVilkarOk?{erVilkarOk:e.erVilkarOk}:{erVilkarOk:e.erVilkarOk,avslagskode:e.avslagskode};Ie.__docgenInfo={description:`VilkarResultPicker

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
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"},description:""},customVilkarIkkeOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},customVilkarOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},skalKunneInnvilge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},validatorsForRadioOptions:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number | boolean) => string | null | undefined)[]"},description:""}}};const Gi="_vilkar_1ciy8_1",Ui="_aksjonspunktMargin_1ciy8_5",Bi="_godkjentImage_1ciy8_10",Ci="_avslattImage_1ciy8_16",ot={vilkar:Gi,aksjonspunktMargin:Ui,godkjentImage:Bi,avslattImage:Ci},Ft=ce(at),cr=({lovReferanse:e,title:n,originalErVilkarOk:a,isAksjonspunktOpen:t,readOnlySubmitButton:r,readOnly:l,rendreFakta:i,isDirty:s,erIkkeGodkjentAvBeslutter:d,isSubmitting:m,children:c})=>I.jsxs(Je,{gap:"space-16",children:[I.jsxs(We,{gap:"space-8",children:[a!==void 0&&I.jsxs(I.Fragment,{children:[a&&I.jsx(Jr,{className:ot.godkjentImage}),!a&&I.jsx(nn,{className:ot.avslattImage})]}),I.jsx(Ur,{size:"small",level:"3",children:n}),e&&I.jsx(Kr,{className:ot.vilkar,children:e})]}),I.jsxs(We,{gap:"space-8",children:[a&&I.jsx(be,{size:"small",children:Ft.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})}),a===!1&&I.jsx(be,{size:"small",children:Ft.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})}),!t&&a===void 0&&I.jsx(fe,{size:"small",children:Ft.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]}),I.jsx(ai,{className:ot.aksjonspunktMargin,erAksjonspunktApent:t,erIkkeGodkjentAvBeslutter:d,children:I.jsxs(Je,{gap:"space-16",children:[I.jsx("div",{children:c}),I.jsx(dr,{isReadOnly:l,isSubmittable:!r,isDirty:s,isSubmitting:m})]})}),i?.()]});cr.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};ce(at);const $i=(e,...n)=>{const a=n.find(t=>t===e);if(!a)throw Error(`Det finnes ikke enum for kode ${e}`);return a},qi=["1002","1003","1032"],mr=({readOnlySubmitButton:e,status:n,ytelseTypeKode:a,vilkar:t})=>{const r=xa(),{behandling:l,alleKodeverk:i,aksjonspunkterForPanel:s,submitCallback:d,harÅpneAksjonspunkter:m,isReadOnly:c,alleMerknaderFraBeslutter:g}=Sr(),_=s.some(U=>g[U.definisjon]?.notAccepted),N=zi(s,n,l.behandlingsresultat),{mellomlagretFormData:S,setMellomlagretFormData:w}=Tr(),y=Ul({defaultValues:S??N}),V=i.Avslagsårsak[Ba.FODSELSVILKARET_MOR],E=Hi(a===ja.FORELDREPENGER,V),L=s.some(U=>U.status===Ze.OPPRETTET)?void 0:Pe.OPPFYLT===n,{lovReferanse:k}=t[0];return I.jsx(Ri,{formMethods:y,onSubmit:U=>d(Yi(U,s)),setDataOnUnmount:w,children:I.jsx(cr,{title:r.formatMessage({id:"FodselVilkarForm.Fodsel"}),isAksjonspunktOpen:m,readOnlySubmitButton:e,readOnly:c,lovReferanse:k,originalErVilkarOk:L,erIkkeGodkjentAvBeslutter:_,isDirty:y.formState.isDirty,isSubmitting:y.formState.isSubmitting,children:I.jsxs(Je,{gap:"space-16",children:[I.jsx(be,{size:"small",children:I.jsx(mt,{id:"FodselVilkarForm.TidligereUtbetaltStonad"})}),I.jsx(Ie,{avslagsarsaker:E,readOnly:c,customVilkarOppfyltText:I.jsx(mt,{id:"FodselVilkarForm.Oppfylt"}),customVilkarIkkeOppfyltText:I.jsx(mt,{id:"FodselVilkarForm.IkkeOppfylt",values:{b:Vr}})}),I.jsx(ke,{useAllWidth:!0,readOnly:c})]})})})},zi=(e,n,a)=>({...Ie.buildInitialValues(e,n,a),...ke.buildInitialValues(e)}),Yi=(e,n)=>({...Ie.transformValues(e),...ke.transformValues(e),kode:$i(n[0].definisjon,Qe.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN)}),Hi=(e,n)=>e?n.filter(a=>!qi.includes(a.kode)):n;mr.__docgenInfo={description:`FodselVilkarForm

Setter opp aksjonspunktet for avklaring av Fødselsvilkåret.`,methods:[],displayName:"FodselVilkarForm",props:{status:{required:!0,tsType:{name:"string"},description:""},vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]"},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const Wi={"FodselVilkarForm.Fodsel":"Fødsel","FodselVilkarForm.TidligereUtbetaltStonad":"Tidligere utbetalte foreldrepenger eller engangsstønad","FodselVilkarForm.Oppfylt":"Er utbetalt for et annet barn, vilkåret er oppfylt","FodselVilkarForm.IkkeOppfylt":"Er utbetalt for dette barnet, vilkåret er <b>ikke</b> oppfylt","ShowVilkarStatus.Check":"Informasjonen er utfylt"},Ji=ce(Wi),It=e=>I.jsx(Ar,{value:Ji,children:I.jsx(mr,{...e})});It.__docgenInfo={description:"",methods:[],displayName:"FodselVilkarProsessIndex",props:{ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]"},description:""}}};const es={title:"prosess/prosess-vilkar-fodsel",component:It,decorators:[wr,Fr],args:{vilkar:[{lovReferanse:"§§Dette er en lovreferanse"}],ytelseTypeKode:ja.FORELDREPENGER},render:e=>I.jsx(It,{...e})},ut={args:{aksjonspunkterForPanel:[{definisjon:Qe.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,status:Ze.OPPRETTET,begrunnelse:null}],readOnlySubmitButton:!1,status:Pe.IKKE_VURDERT}},dt={args:{aksjonspunkterForPanel:[{definisjon:Qe.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,status:Ze.UTFORT,begrunnelse:"Dette vilkåret er godkjent"}],isReadOnly:!0,readOnlySubmitButton:!0,status:Pe.OPPFYLT}},ct={args:{behandling:{uuid:"1",versjon:1,behandlingsresultat:{avslagsarsak:Ua.INGEN_BEREGNINGSREGLER}},aksjonspunkterForPanel:[{definisjon:Qe.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,status:Ze.UTFORT,begrunnelse:"Dette vilkåret er avslått"}],isReadOnly:!0,readOnlySubmitButton:!0,status:Pe.IKKE_OPPFYLT}};ut.parameters={...ut.parameters,docs:{...ut.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null
    }] as Aksjonspunkt[],
    readOnlySubmitButton: false,
    status: VilkarUtfallType.IKKE_VURDERT
  }
}`,...ut.parameters?.docs?.source}}};dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er godkjent'
    }] as Aksjonspunkt[],
    isReadOnly: true,
    readOnlySubmitButton: true,
    status: VilkarUtfallType.OPPFYLT
  }
}`,...dt.parameters?.docs?.source}}};ct.parameters={...ct.parameters,docs:{...ct.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: Avslagsarsak.INGEN_BEREGNINGSREGLER
      }
    } as Behandling,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er avslått'
    }] as Aksjonspunkt[],
    isReadOnly: true,
    readOnlySubmitButton: true,
    status: VilkarUtfallType.IKKE_OPPFYLT
  }
}`,...ct.parameters?.docs?.source}}};const ts=["ÅpentAksjonspunkt","OppfyltVilkår","AvslåttVilkår"];export{ct as AvslåttVilkår,dt as OppfyltVilkår,ts as __namedExportsOrder,es as default,ut as ÅpentAksjonspunkt};
