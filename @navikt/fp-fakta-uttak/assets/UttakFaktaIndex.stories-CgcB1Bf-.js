import{g as hh,r as T,u as Il,_ as bm,s as _m,c as zi,a as ge,b as k,d as Ll,m as kT,e as Oa,S as jl,R as ph,f as Bl,h as Zn,i as dt,P as Ga,n as Qs,j as G,k as od,t as qn,l as bT,o as _T,M as ET,p as TT,E as wT,q as el,X as OT,v as AT,w as ud,O as Em,U as RT,x as ST,y as Gi,z as NT,A as PT,B as DT,C as In,D as FT,F as xT,G as MT}from"./iframe-CRr0JoMt.js";import{r as IT}from"./index-CiSaCPvi.js";import"./preload-helper-D9Z9MdNV.js";var dd=IT();const vh=hh(dd);function LT(e,t){var r=e.values,n=bm(e,["values"]),i=t.values,l=bm(t,["values"]);return _m(i,r)&&_m(n,l)}function yh(e){var t=Il(),r=t.formatMessage,n=t.textComponent,i=n===void 0?T.Fragment:n,l=e.id,u=e.description,d=e.defaultMessage,f=e.values,g=e.children,m=e.tagName,h=m===void 0?i:m,p=e.ignoreTag,b={id:l,description:u,defaultMessage:d},A=r(b,f,{ignoreTag:p});return typeof g=="function"?g(Array.isArray(A)?A:[A]):h?T.createElement(h,null,A):T.createElement(T.Fragment,null,A)}yh.displayName="FormattedMessage";var Le=T.memo(yh,LT);Le.displayName="MemoizedFormattedMessage";var vt=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(vt||{}),kh=(e=>(e.MANUELL="MANU",e.AUTOPUNKT="AUTO",e.OVERSTYRING="OVST",e.SAKSBEHANDLEROVERSTYRING="SAOV",e))(kh||{}),bh=(e=>(e.ADOPSJON="ADPSJN",e.OMSORG="OMSRGO",e.FODSEL="FODSL",e.TERMIN="TERM",e))(bh||{}),un=(e=>(e.ORDINÆRT_ARBEID="ORDINÆRT_ARBEID",e.FRILANS="FRILANS",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.ANNET="ANNET",e))(un||{}),Ut=(e=>(e.MODREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FELLESPERIODE="FELLESPERIODE",e.FORELDREPENGER_FOR_FODSEL="FORELDREPENGER_FØR_FØDSEL",e.FORELDREPENGER="FORELDREPENGER",e.UDEFINERT="-",e))(Ut||{}),_h=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(_h||{}),Eh=(e=>(e.ARBEID="ARBEID",e))(Eh||{}),qt=(e=>(e.SAKSBEHANDLER="SAKSBEHANDLER",e.SØKNAD="SØKNAD",e))(qt||{});const jT=(e,t)=>{if(e==null)throw Error("Data er ikke oppgitt");return e},li=e=>zi({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var BT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const cd=T.forwardRef((e,t)=>{var{className:r,size:n="medium",as:i="p",spacing:l,truncate:u,weight:d="regular",align:f,visuallyHidden:g,textColor:m}=e,h=BT(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=ge();return k.createElement(i,Object.assign({},h,{ref:t,className:p(r,"navds-body-long",`navds-body-long--${n}`,li({spacing:l,truncate:u,weight:d,align:f,visuallyHidden:g,textColor:m}))}))});var CT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Rt=T.forwardRef((e,t)=>{var{className:r,size:n="medium",as:i="p",spacing:l,truncate:u,weight:d="regular",align:f,visuallyHidden:g,textColor:m}=e,h=CT(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=ge();return k.createElement(i,Object.assign({},h,{ref:t,className:p(r,"navds-body-short",`navds-body-short--${n}`,li({spacing:l,truncate:u,weight:d,align:f,visuallyHidden:g,textColor:m}))}))});var VT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const fd=T.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:i,uppercase:l,as:u="p",truncate:d,weight:f="regular",align:g,visuallyHidden:m,textColor:h}=e,p=VT(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:b}=ge();return k.createElement(u,Object.assign({},p,{ref:t,className:b(r,"navds-detail",li({spacing:i,truncate:d,weight:f,align:g,visuallyHidden:m,textColor:h,uppercase:l}),{"navds-detail--small":n==="small"})}))});var KT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Aa=T.forwardRef((e,t)=>{var{children:r,className:n,size:i,spacing:l,as:u="p",showIcon:d=!1}=e,f=KT(e,["children","className","size","spacing","as","showIcon"]);const{cn:g}=ge();return k.createElement(u,Object.assign({},f,{ref:t,className:g("navds-error-message","navds-label",n,li({spacing:l}),{"navds-label--small":i==="small","navds-error-message--show-icon":d})}),d&&k.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var UT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Xi=T.forwardRef((e,t)=>{var{level:r="1",size:n,className:i,as:l,spacing:u,align:d,visuallyHidden:f,textColor:g}=e,m=UT(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:h}=ge(),p=l??`h${r}`;return k.createElement(p,Object.assign({},m,{ref:t,className:h(i,"navds-heading",`navds-heading--${n}`,li({spacing:u,align:d,visuallyHidden:f,textColor:g}))}))});var qT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};T.forwardRef((e,t)=>{var{className:r,spacing:n,as:i="p"}=e,l=qT(e,["className","spacing","as"]);const{cn:u}=ge();return k.createElement(i,Object.assign({},l,{ref:t,className:u(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var GT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const zn=T.forwardRef((e,t)=>{var{className:r,size:n="medium",as:i="label",spacing:l,visuallyHidden:u,textColor:d}=e,f=GT(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:g}=ge();return k.createElement(i,Object.assign({},f,{ref:t,className:g(r,"navds-label",li({spacing:l,visuallyHidden:u,textColor:d}),{"navds-label--small":n==="small"})}))});function Th(e,t=166,r=!1){let n;function i(...l){const u=()=>{n=void 0,e.apply(this,l)};!n&&r&&u(),clearTimeout(n),n=setTimeout(u,t)}return i.clear=()=>{clearTimeout(n)},i}function Ft(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}const ni=globalThis?.document?T.useLayoutEffect:()=>{};let Tm=0;function HT(e){const[t,r]=T.useState(e),n=e||t;return T.useEffect(()=>{t==null&&(Tm+=1,r(`aksel-id-${Tm}`))},[t]),n}const wm=k.useId;function Xr(e){var t;if(wm!==void 0){const r=wm();return e??r.replace(/(:)/g,"")}return(t=HT(e))!==null&&t!==void 0?t:""}function Hi(e,t=[]){const r=T.useRef(e);return T.useEffect(()=>{r.current=e}),T.useCallback((...n)=>{var i;return(i=r.current)===null||i===void 0?void 0:i.call(r,...n)},t)}function $i({value:e,defaultValue:t,onChange:r}){const n=Hi(r),[i,l]=T.useState(t),u=e!==void 0,d=u?e:i,f=Hi(g=>{const h=typeof g=="function"?g(d):g;u||l(h),n(h)},[u,n,d]);return[d,f]}let Om=0;function $T(e){const[t,r]=T.useState(e),n=e||t;return T.useEffect(()=>{t==null&&(Om+=1,r(`aksel-icon-${Om}`))},[t]),n}const Am=k.useId;function St(e){var t;return Am!==void 0?Am().replace(/(:)/g,""):(t=$T(e))!==null&&t!==void 0?t:""}var WT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const YT=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=WT(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",d:"M8.97 6.97a.75.75 0 1 1 1.06 1.06l-3.22 3.22H19a.75.75 0 0 1 0 1.5H6.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06z"}))});var zT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const XT=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=zT(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",d:"M14.087 6.873a.75.75 0 0 1 .943.097l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5a.75.75 0 0 1-.75-.74V12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 0 1 .117-1.157"}))});var ZT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const JT=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=ZT(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var QT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const ew=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=QT(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var tw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const nw=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=tw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var rw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const md=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=rw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var aw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const iw=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=aw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var sw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const lw=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=sw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var ow=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const uw=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=ow(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var dw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const cw=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=dw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var fw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const wh=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=fw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var mw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Oh=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=mw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var gw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const hw=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=gw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var pw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const vw=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=pw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var yw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const kw=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=yw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var bw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const _w=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=bw(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var Ew=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Tw=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=Ew(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 6.25a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.876-11.384h.805a.75.75 0 0 0 0-1.5h-2.75V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25zm5.5-1.5c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm-3.19 3 .867 11.27c.01.13.118.23.249.23h8.148c.13 0 .24-.1.25-.23l.866-11.27zm3.19 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var ww=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const _l=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=ww(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Ow=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Aw=T.forwardRef((e,t)=>{var{title:r,titleId:n}=e,i=Ow(e,["title","titleId"]);let l=St();return l=r?n||"title-"+l:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},i),r?T.createElement("title",{id:l},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function xr(e,t,{checkForDefaultPrevented:r=!0}={}){return function(i){if(e?.(i),r===!1||!i.defaultPrevented)return t?.(i)}}const[Rw,Cl]=Ll({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),Sw=typeof window<"u"&&window.matchMedia===void 0,Nw=(e,t)=>{const[r,n]=T.useState(t);return T.useEffect(()=>{if(Sw)return;const i=window.matchMedia(e);n(i.matches);const l=u=>{n(u.matches)};return i.addEventListener("change",l),()=>{i.removeEventListener("change",l)}},[e]),r};function Mn(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Xt(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let i;if(n==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,d=r?.width?String(r.width):u;i=e.formattingValues[d]||e.formattingValues[u]}else{const u=e.defaultWidth,d=r?.width?String(r.width):e.defaultWidth;i=e.values[d]||e.values[u]}const l=e.argumentCallback?e.argumentCallback(t):t;return i[l]}}function Zt(e){return(t,r={})=>{const n=r.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=t.match(i);if(!l)return null;const u=l[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(d)?Dw(d,h=>h.test(u)):Pw(d,h=>h.test(u));let g;g=e.valueCallback?e.valueCallback(f):f,g=r.valueCallback?r.valueCallback(g):g;const m=t.slice(u.length);return{value:g,rest:m}}}function Pw(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function Dw(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function gd(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const i=n[0],l=t.match(e.parsePattern);if(!l)return null;let u=e.valueCallback?e.valueCallback(l[0]):l[0];u=r.valueCallback?r.valueCallback(u):u;const d=t.slice(i.length);return{value:u,rest:d}}}const Ah=6048e5,Fw=864e5,xw=6e4,Mw=36e5,Iw=1e3,Rm=Symbol.for("constructDateFrom");function He(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Rm in e?e[Rm](t):e instanceof Date?new e.constructor(t):new Date(t)}function oi(e,...t){const r=He.bind(null,t.find(n=>typeof n=="object"));return t.map(r)}let Lw={};function Ra(){return Lw}function Pe(e,t){return He(t||e,e)}function Mr(e,t){const r=Ra(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,i=Pe(e,t?.in),l=i.getDay(),u=(l<n?7:0)+l-n;return i.setDate(i.getDate()-u),i.setHours(0,0,0,0),i}const jw={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Rh=(e,t,r)=>{let n;const i=jw[e];return typeof i=="string"?n=i:t===1?n=i.one:n=i.other.replace("{{count}}",t.toString()),r?.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n},Bw={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Sh=(e,t,r,n)=>Bw[e],Cw={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Vw={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Kw={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Uw={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},qw={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Gw={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Hw=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Nh={ordinalNumber:Hw,era:Xt({values:Cw,defaultWidth:"wide"}),quarter:Xt({values:Vw,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xt({values:Kw,defaultWidth:"wide"}),day:Xt({values:Uw,defaultWidth:"wide"}),dayPeriod:Xt({values:qw,defaultWidth:"wide",formattingValues:Gw,defaultFormattingWidth:"wide"})},$w=/^(\d+)(th|st|nd|rd)?/i,Ww=/\d+/i,Yw={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},zw={any:[/^b/i,/^(a|c)/i]},Xw={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Zw={any:[/1/i,/2/i,/3/i,/4/i]},Jw={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Qw={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},e5={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},t5={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},n5={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},r5={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ph={ordinalNumber:gd({matchPattern:$w,parsePattern:Ww,valueCallback:e=>parseInt(e,10)}),era:Zt({matchPatterns:Yw,defaultMatchWidth:"wide",parsePatterns:zw,defaultParseWidth:"any"}),quarter:Zt({matchPatterns:Xw,defaultMatchWidth:"wide",parsePatterns:Zw,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Zt({matchPatterns:Jw,defaultMatchWidth:"wide",parsePatterns:Qw,defaultParseWidth:"any"}),day:Zt({matchPatterns:e5,defaultMatchWidth:"wide",parsePatterns:t5,defaultParseWidth:"any"}),dayPeriod:Zt({matchPatterns:n5,defaultMatchWidth:"any",parsePatterns:r5,defaultParseWidth:"any"})},a5={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},i5={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},s5={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},l5={date:Mn({formats:a5,defaultWidth:"full"}),time:Mn({formats:i5,defaultWidth:"full"}),dateTime:Mn({formats:s5,defaultWidth:"full"})},Dh={code:"en-GB",formatDistance:Rh,formatLong:l5,formatRelative:Sh,localize:Nh,match:Ph,options:{weekStartsOn:1,firstWeekContainsDate:4}},o5={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},u5={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},d5={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},c5={date:Mn({formats:o5,defaultWidth:"full"}),time:Mn({formats:u5,defaultWidth:"full"}),dateTime:Mn({formats:d5,defaultWidth:"full"})},Vl={code:"en-US",formatDistance:Rh,formatLong:c5,formatRelative:Sh,localize:Nh,match:Ph,options:{weekStartsOn:0,firstWeekContainsDate:1}},f5={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},m5=(e,t,r)=>{let n;const i=f5[e];return typeof i=="string"?n=i:t===1?n=i.one:n=i.other.replace("{{count}}",String(t)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},g5={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},h5={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},p5={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},v5={date:Mn({formats:g5,defaultWidth:"full"}),time:Mn({formats:h5,defaultWidth:"full"}),dateTime:Mn({formats:p5,defaultWidth:"full"})},y5={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},k5=(e,t,r,n)=>y5[e],b5={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},_5={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},E5={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},T5={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},w5={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},O5=(e,t)=>Number(e)+".",A5={ordinalNumber:O5,era:Xt({values:b5,defaultWidth:"wide"}),quarter:Xt({values:_5,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xt({values:E5,defaultWidth:"wide"}),day:Xt({values:T5,defaultWidth:"wide"}),dayPeriod:Xt({values:w5,defaultWidth:"wide"})},R5=/^(\d+)\.?/i,S5=/\d+/i,N5={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},P5={any:[/^f/i,/^e/i]},D5={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},F5={any:[/1/i,/2/i,/3/i,/4/i]},x5={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},M5={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},I5={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},L5={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},j5={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},B5={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},C5={ordinalNumber:gd({matchPattern:R5,parsePattern:S5,valueCallback:e=>parseInt(e,10)}),era:Zt({matchPatterns:N5,defaultMatchWidth:"wide",parsePatterns:P5,defaultParseWidth:"any"}),quarter:Zt({matchPatterns:D5,defaultMatchWidth:"wide",parsePatterns:F5,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Zt({matchPatterns:x5,defaultMatchWidth:"wide",parsePatterns:M5,defaultParseWidth:"any"}),day:Zt({matchPatterns:I5,defaultMatchWidth:"wide",parsePatterns:L5,defaultParseWidth:"any"}),dayPeriod:Zt({matchPatterns:j5,defaultMatchWidth:"any",parsePatterns:B5,defaultParseWidth:"any"})},Fh={code:"nb",formatDistance:m5,formatLong:v5,formatRelative:k5,localize:A5,match:C5,options:{weekStartsOn:1,firstWeekContainsDate:4}},V5={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},K5=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],U5=(e,t,r)=>{let n;const i=V5[e];return typeof i=="string"?n=i:t===1?n=i.one:n=i.other.replace("{{count}}",t<13?K5[t]:String(t)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" sidan":n},q5={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},G5={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},H5={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},$5={date:Mn({formats:q5,defaultWidth:"full"}),time:Mn({formats:G5,defaultWidth:"full"}),dateTime:Mn({formats:H5,defaultWidth:"full"})},W5={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Y5=(e,t,r,n)=>W5[e],z5={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},X5={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Z5={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},J5={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},Q5={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},eO=(e,t)=>Number(e)+".",tO={ordinalNumber:eO,era:Xt({values:z5,defaultWidth:"wide"}),quarter:Xt({values:X5,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xt({values:Z5,defaultWidth:"wide"}),day:Xt({values:J5,defaultWidth:"wide"}),dayPeriod:Xt({values:Q5,defaultWidth:"wide"})},nO=/^(\d+)\.?/i,rO=/\d+/i,aO={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},iO={any:[/^f/i,/^e/i]},sO={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},lO={any:[/1/i,/2/i,/3/i,/4/i]},oO={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},uO={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},dO={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},cO={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},fO={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},mO={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},gO={ordinalNumber:gd({matchPattern:nO,parsePattern:rO,valueCallback:e=>parseInt(e,10)}),era:Zt({matchPatterns:aO,defaultMatchWidth:"wide",parsePatterns:iO,defaultParseWidth:"any"}),quarter:Zt({matchPatterns:sO,defaultMatchWidth:"wide",parsePatterns:lO,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Zt({matchPatterns:oO,defaultMatchWidth:"wide",parsePatterns:uO,defaultParseWidth:"any"}),day:Zt({matchPatterns:dO,defaultMatchWidth:"wide",parsePatterns:cO,defaultParseWidth:"any"}),dayPeriod:Zt({matchPatterns:fO,defaultMatchWidth:"any",parsePatterns:mO,defaultParseWidth:"any"})},xh={code:"nn",formatDistance:U5,formatLong:$5,formatRelative:Y5,localize:tO,match:gO,options:{weekStartsOn:1,firstWeekContainsDate:4}},hO={global:{dateLocale:Fh,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},pO=T.createContext({locale:hO}),hd=()=>T.useContext(pO);function Sm(e){return e.sort((t,r)=>{const n=t.compareDocumentPosition(r);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const vO=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Nm(e,t,r){let n=e+1;return r&&n>=t&&(n=0),n}function Pm(e,t,r){let n=e-1;return r&&n<0&&(n=t),n}const gu=e=>e;class yO{constructor(){this.descendants=new Map,this.register=t=>{if(t!=null)return vO(t)?this.registerNode(t):r=>{this.registerNode(r,t)}},this.unregister=t=>{this.descendants.delete(t);const r=Sm(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=t=>{this.descendants.forEach(r=>{const n=t.indexOf(r.node);r.index=n,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,n)=>r.index-n.index),this.enabledValues=()=>this.values().filter(t=>!t.disabled),this.item=t=>{if(this.count()!==0)return this.values()[t]},this.enabledItem=t=>{if(this.enabledCount()!==0)return this.enabledValues()[t]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const t=this.enabledValues().length-1;return this.enabledItem(t)},this.indexOf=t=>{var r,n;return t&&(n=(r=this.descendants.get(t))===null||r===void 0?void 0:r.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=t=>t==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(t)),this.next=(t,r=!0)=>{const n=Nm(t,this.count(),r);return this.item(n)},this.nextEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const i=this.enabledIndexOf(n.node),l=Nm(i,this.enabledCount(),r);return this.enabledItem(l)},this.prev=(t,r=!0)=>{const n=Pm(t,this.count()-1,r);return this.item(n)},this.prevEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const i=this.enabledIndexOf(n.node),l=Pm(i,this.enabledCount()-1,r);return this.enabledItem(l)},this.registerNode=(t,r)=>{if(!t)return;const n=this.descendants.get(t);if(n){this.descendants.set(t,Object.assign({index:n.index,node:t},r));return}const i=Array.from(this.descendants.keys()).concat(t),l=Sm(i);r?.disabled&&(r.disabled=!!r.disabled);const u=Object.assign({node:t,index:-1},r);this.descendants.set(t,u),this.assignIndex(l)}}}function kO(){const[e,t]=Ll({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=gu(l=>k.createElement(e,Object.assign({},l.value),l.children));function n(l){const u=t(),[d,f]=T.useState(-1),g=T.useRef(null);ni(()=>()=>{g.current&&u.unregister(g.current)},[]),ni(()=>{if(!g.current)return;const h=Number(g.current.dataset.index);d!==h&&!Number.isNaN(h)&&f(h)});const m=gu(l?u.register(l):u.register);return{descendants:u,index:d,enabledIndex:u.enabledIndexOf(g.current),register:kT([m,g])}}function i(){return T.useRef(new yO).current}return[r,t,i,n]}function bO(e,t=globalThis?.document){const r=Hi(e);T.useEffect(()=>{const n=i=>{i.key==="Escape"&&r(i)};return t.addEventListener("keydown",n,!0),()=>t.removeEventListener("keydown",n,!0)},[r,t])}const Mh={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function Ih(e,t,r,{discrete:n}={discrete:!1}){if(!t)return;const i=r.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});i.addEventListener(e,t,{once:!0}),n&&i?vh.flushSync(()=>i.dispatchEvent(l)):i.dispatchEvent(l)}function _O(e,t=globalThis?.document){const r=Hi(e),n=T.useRef(!1);return T.useEffect(()=>{const i=l=>{if(l.target&&!n.current){const u={originalEvent:l};Ih(Mh.FOCUS_OUTSIDE,r,u)}};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,r]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function EO(e,t=globalThis?.document){const r=Hi(e),n=T.useRef(!1),i=T.useRef(()=>{});return T.useEffect(()=>{const l=d=>{function f(){Ih(Mh.POINTER_DOWN_OUTSIDE,r,{originalEvent:d},{discrete:!0})}d.target&&!n.current?d.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=f,t.addEventListener("click",i.current,{once:!0})):f():t.removeEventListener("click",i.current),n.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",l),t.removeEventListener("click",i.current)}},[t,r]),{onPointerDownCapture:()=>{n.current=!0}}}var TO=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const[wO,OO,AO,RO]=kO();let Ha=0,Dm;const SO=T.forwardRef((e,t)=>OO(!1)?k.createElement(Fm,Object.assign({ref:t},e)):k.createElement(NO,null,k.createElement(Fm,Object.assign({ref:t},e)))),NO=({children:e})=>{const t=AO();return k.createElement(wO,{value:t},e)},Fm=T.forwardRef((e,t)=>{var r,{children:n,asChild:i,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:f,onDismiss:g,safeZone:m,disableOutsidePointerEvents:h=!1,enabled:p=!0}=e,b=TO(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,A]=T.useState({}),{register:N,index:y,descendants:S}=RO({disableOutsidePointerEvents:h,disabled:!p,forceUpdate:()=>A({})}),[R,w]=T.useState(null),D=Oa(w,N,t),E=(r=R?.ownerDocument)!==null&&r!==void 0?r:globalThis?.document,I=T.useRef(!1),M=T.useRef(!1),B=(()=>{let j=-1;return S.enabledValues().forEach((te,ne)=>{te.disableOutsidePointerEvents&&(j=ne)}),{isPointerEventsEnabled:y>=j,isBodyPointerEventsDisabled:Ha>0,pointerStyle:y>=j&&Ha>0?"auto":void 0}})();function U(j){var Z,te;if(!m?.anchor&&!m?.dismissable||!p)return;j.defaultPrevented||(I.current=!0,j.detail.originalEvent.type==="pointerdown"&&(M.current=!0));const ne=j.target;j.detail.originalEvent.type==="pointerdown"?(!((Z=m?.anchor)===null||Z===void 0)&&Z.contains(ne)||ne===m?.anchor)&&j.preventDefault():!(ne instanceof HTMLElement&&![m?.anchor,m?.dismissable].some(Q=>Q?.contains(ne))&&!ne.contains((te=m?.dismissable)!==null&&te!==void 0?te:null))&&j.preventDefault(),j.detail.originalEvent.type==="focusin"&&M.current&&j.preventDefault(),M.current=!1,I.current=!1}const Y=EO(j=>{!B.isPointerEventsEnabled||!p||(u?.(j),f?.(j),m&&U(j),!j.defaultPrevented&&g&&g())},E),H=_O(j=>{p&&(d?.(j),f?.(j),m&&U(j),!j.defaultPrevented&&g&&g())},E);bO(j=>{!p||!(y===S.enabledCount()-1)||(l?.(j),!j.defaultPrevented&&g&&(j.preventDefault(),g()))},E),T.useEffect(()=>{if(!(!R||!p||!h))return Ha===0&&(Dm=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),Ha++,()=>{Ha===1&&(E.body.style.pointerEvents=Dm),Ha--}},[R,E,h,S,p]),T.useEffect(()=>()=>S.values().forEach(j=>j.forceUpdate()),[S,R]);const V=i?jl:"div";return k.createElement(V,Object.assign({ref:D},b,{onFocusCapture:H.onFocusCapture,onBlurCapture:H.onBlurCapture,onPointerDownCapture:Y.onPointerDownCapture,style:Object.assign({pointerEvents:B.pointerStyle},b.style)}),n)}),ri=Math.min,ha=Math.max,El=Math.round,tl=Math.floor,cr=e=>({x:e,y:e}),PO={left:"right",right:"left",bottom:"top",top:"bottom"},DO={start:"end",end:"start"};function xu(e,t,r){return ha(e,ri(t,r))}function Zi(e,t){return typeof e=="function"?e(t):e}function va(e){return e.split("-")[0]}function Ji(e){return e.split("-")[1]}function Lh(e){return e==="x"?"y":"x"}function pd(e){return e==="y"?"height":"width"}function ai(e){return["top","bottom"].includes(va(e))?"y":"x"}function vd(e){return Lh(ai(e))}function FO(e,t,r){r===void 0&&(r=!1);const n=Ji(e),i=vd(e),l=pd(i);let u=i==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[l]>t.floating[l]&&(u=Tl(u)),[u,Tl(u)]}function xO(e){const t=Tl(e);return[Mu(e),t,Mu(t)]}function Mu(e){return e.replace(/start|end/g,t=>DO[t])}function MO(e,t,r){const n=["left","right"],i=["right","left"],l=["top","bottom"],u=["bottom","top"];switch(e){case"top":case"bottom":return r?t?i:n:t?n:i;case"left":case"right":return t?l:u;default:return[]}}function IO(e,t,r,n){const i=Ji(e);let l=MO(va(e),r==="start",n);return i&&(l=l.map(u=>u+"-"+i),t&&(l=l.concat(l.map(Mu)))),l}function Tl(e){return e.replace(/left|right|bottom|top/g,t=>PO[t])}function LO(e){return{top:0,right:0,bottom:0,left:0,...e}}function jh(e){return typeof e!="number"?LO(e):{top:e,right:e,bottom:e,left:e}}function wl(e){const{x:t,y:r,width:n,height:i}=e;return{width:n,height:i,top:r,left:t,right:t+n,bottom:r+i,x:t,y:r}}function xm(e,t,r){let{reference:n,floating:i}=e;const l=ai(t),u=vd(t),d=pd(u),f=va(t),g=l==="y",m=n.x+n.width/2-i.width/2,h=n.y+n.height/2-i.height/2,p=n[d]/2-i[d]/2;let b;switch(f){case"top":b={x:m,y:n.y-i.height};break;case"bottom":b={x:m,y:n.y+n.height};break;case"right":b={x:n.x+n.width,y:h};break;case"left":b={x:n.x-i.width,y:h};break;default:b={x:n.x,y:n.y}}switch(Ji(t)){case"start":b[u]-=p*(r&&g?-1:1);break;case"end":b[u]+=p*(r&&g?-1:1);break}return b}const jO=async(e,t,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:l=[],platform:u}=r,d=l.filter(Boolean),f=await(u.isRTL==null?void 0:u.isRTL(t));let g=await u.getElementRects({reference:e,floating:t,strategy:i}),{x:m,y:h}=xm(g,n,f),p=n,b={},A=0;for(let N=0;N<d.length;N++){const{name:y,fn:S}=d[N],{x:R,y:w,data:D,reset:E}=await S({x:m,y:h,initialPlacement:n,placement:p,strategy:i,middlewareData:b,rects:g,platform:u,elements:{reference:e,floating:t}});m=R??m,h=w??h,b={...b,[y]:{...b[y],...D}},E&&A<=50&&(A++,typeof E=="object"&&(E.placement&&(p=E.placement),E.rects&&(g=E.rects===!0?await u.getElementRects({reference:e,floating:t,strategy:i}):E.rects),{x:m,y:h}=xm(g,p,f)),N=-1)}return{x:m,y:h,placement:p,strategy:i,middlewareData:b}};async function Bh(e,t){var r;t===void 0&&(t={});const{x:n,y:i,platform:l,rects:u,elements:d,strategy:f}=e,{boundary:g="clippingAncestors",rootBoundary:m="viewport",elementContext:h="floating",altBoundary:p=!1,padding:b=0}=Zi(t,e),A=jh(b),y=d[p?h==="floating"?"reference":"floating":h],S=wl(await l.getClippingRect({element:(r=await(l.isElement==null?void 0:l.isElement(y)))==null||r?y:y.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(d.floating)),boundary:g,rootBoundary:m,strategy:f})),R=h==="floating"?{x:n,y:i,width:u.floating.width,height:u.floating.height}:u.reference,w=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d.floating)),D=await(l.isElement==null?void 0:l.isElement(w))?await(l.getScale==null?void 0:l.getScale(w))||{x:1,y:1}:{x:1,y:1},E=wl(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:R,offsetParent:w,strategy:f}):R);return{top:(S.top-E.top+A.top)/D.y,bottom:(E.bottom-S.bottom+A.bottom)/D.y,left:(S.left-E.left+A.left)/D.x,right:(E.right-S.right+A.right)/D.x}}const BO=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:i,rects:l,platform:u,elements:d,middlewareData:f}=t,{element:g,padding:m=0}=Zi(e,t)||{};if(g==null)return{};const h=jh(m),p={x:r,y:n},b=vd(i),A=pd(b),N=await u.getDimensions(g),y=b==="y",S=y?"top":"left",R=y?"bottom":"right",w=y?"clientHeight":"clientWidth",D=l.reference[A]+l.reference[b]-p[b]-l.floating[A],E=p[b]-l.reference[b],I=await(u.getOffsetParent==null?void 0:u.getOffsetParent(g));let M=I?I[w]:0;(!M||!await(u.isElement==null?void 0:u.isElement(I)))&&(M=d.floating[w]||l.floating[A]);const B=D/2-E/2,U=M/2-N[A]/2-1,Y=ri(h[S],U),H=ri(h[R],U),V=Y,j=M-N[A]-H,Z=M/2-N[A]/2+B,te=xu(V,Z,j),ne=!f.arrow&&Ji(i)!=null&&Z!==te&&l.reference[A]/2-(Z<V?Y:H)-N[A]/2<0,oe=ne?Z<V?Z-V:Z-j:0;return{[b]:p[b]+oe,data:{[b]:te,centerOffset:Z-te-oe,...ne&&{alignmentOffset:oe}},reset:ne}}}),CO=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:i,middlewareData:l,rects:u,initialPlacement:d,platform:f,elements:g}=t,{mainAxis:m=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:A="none",flipAlignment:N=!0,...y}=Zi(e,t);if((r=l.arrow)!=null&&r.alignmentOffset)return{};const S=va(i),R=ai(d),w=va(d)===d,D=await(f.isRTL==null?void 0:f.isRTL(g.floating)),E=p||(w||!N?[Tl(d)]:xO(d)),I=A!=="none";!p&&I&&E.push(...IO(d,N,A,D));const M=[d,...E],B=await Bh(t,y),U=[];let Y=((n=l.flip)==null?void 0:n.overflows)||[];if(m&&U.push(B[S]),h){const Z=FO(i,u,D);U.push(B[Z[0]],B[Z[1]])}if(Y=[...Y,{placement:i,overflows:U}],!U.every(Z=>Z<=0)){var H,V;const Z=(((H=l.flip)==null?void 0:H.index)||0)+1,te=M[Z];if(te)return{data:{index:Z,overflows:Y},reset:{placement:te}};let ne=(V=Y.filter(oe=>oe.overflows[0]<=0).sort((oe,Q)=>oe.overflows[1]-Q.overflows[1])[0])==null?void 0:V.placement;if(!ne)switch(b){case"bestFit":{var j;const oe=(j=Y.filter(Q=>{if(I){const le=ai(Q.placement);return le===R||le==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(le=>le>0).reduce((le,_e)=>le+_e,0)]).sort((Q,le)=>Q[1]-le[1])[0])==null?void 0:j[0];oe&&(ne=oe);break}case"initialPlacement":ne=d;break}if(i!==ne)return{reset:{placement:ne}}}return{}}}};async function VO(e,t){const{placement:r,platform:n,elements:i}=e,l=await(n.isRTL==null?void 0:n.isRTL(i.floating)),u=va(r),d=Ji(r),f=ai(r)==="y",g=["left","top"].includes(u)?-1:1,m=l&&f?-1:1,h=Zi(t,e);let{mainAxis:p,crossAxis:b,alignmentAxis:A}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return d&&typeof A=="number"&&(b=d==="end"?A*-1:A),f?{x:b*m,y:p*g}:{x:p*g,y:b*m}}const KO=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:i,y:l,placement:u,middlewareData:d}=t,f=await VO(t,e);return u===((r=d.offset)==null?void 0:r.placement)&&(n=d.arrow)!=null&&n.alignmentOffset?{}:{x:i+f.x,y:l+f.y,data:{...f,placement:u}}}}},UO=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:i}=t,{mainAxis:l=!0,crossAxis:u=!1,limiter:d={fn:y=>{let{x:S,y:R}=y;return{x:S,y:R}}},...f}=Zi(e,t),g={x:r,y:n},m=await Bh(t,f),h=ai(va(i)),p=Lh(h);let b=g[p],A=g[h];if(l){const y=p==="y"?"top":"left",S=p==="y"?"bottom":"right",R=b+m[y],w=b-m[S];b=xu(R,b,w)}if(u){const y=h==="y"?"top":"left",S=h==="y"?"bottom":"right",R=A+m[y],w=A-m[S];A=xu(R,A,w)}const N=d.fn({...t,[p]:b,[h]:A});return{...N,data:{x:N.x-r,y:N.y-n,enabled:{[p]:l,[h]:u}}}}}};function Kl(){return typeof window<"u"}function ui(e){return Ch(e)?(e.nodeName||"").toLowerCase():"#document"}function En(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function gr(e){var t;return(t=(Ch(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ch(e){return Kl()?e instanceof Node||e instanceof En(e).Node:!1}function Kt(e){return Kl()?e instanceof Element||e instanceof En(e).Element:!1}function fr(e){return Kl()?e instanceof HTMLElement||e instanceof En(e).HTMLElement:!1}function Mm(e){return!Kl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof En(e).ShadowRoot}function Qi(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=Xn(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(i)}function qO(e){return["table","td","th"].includes(ui(e))}function Ul(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function yd(e){const t=kd(),r=Kt(e)?Xn(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function GO(e){let t=zr(e);for(;fr(t)&&!ii(t);){if(yd(t))return t;if(Ul(t))return null;t=zr(t)}return null}function kd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ii(e){return["html","body","#document"].includes(ui(e))}function Xn(e){return En(e).getComputedStyle(e)}function ql(e){return Kt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function zr(e){if(ui(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Mm(e)&&e.host||gr(e);return Mm(t)?t.host:t}function Vh(e){const t=zr(e);return ii(t)?e.ownerDocument?e.ownerDocument.body:e.body:fr(t)&&Qi(t)?t:Vh(t)}function Wi(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Vh(e),l=i===((n=e.ownerDocument)==null?void 0:n.body),u=En(i);if(l){const d=Iu(u);return t.concat(u,u.visualViewport||[],Qi(i)?i:[],d&&r?Wi(d):[])}return t.concat(i,Wi(i,[],r))}function Iu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Kh(e){const t=Xn(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=fr(e),l=i?e.offsetWidth:r,u=i?e.offsetHeight:n,d=El(r)!==l||El(n)!==u;return d&&(r=l,n=u),{width:r,height:n,$:d}}function bd(e){return Kt(e)?e:e.contextElement}function Qa(e){const t=bd(e);if(!fr(t))return cr(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:l}=Kh(t);let u=(l?El(r.width):r.width)/n,d=(l?El(r.height):r.height)/i;return(!u||!Number.isFinite(u))&&(u=1),(!d||!Number.isFinite(d))&&(d=1),{x:u,y:d}}const HO=cr(0);function Uh(e){const t=En(e);return!kd()||!t.visualViewport?HO:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function $O(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==En(e)?!1:t}function ya(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),l=bd(e);let u=cr(1);t&&(n?Kt(n)&&(u=Qa(n)):u=Qa(e));const d=$O(l,r,n)?Uh(l):cr(0);let f=(i.left+d.x)/u.x,g=(i.top+d.y)/u.y,m=i.width/u.x,h=i.height/u.y;if(l){const p=En(l),b=n&&Kt(n)?En(n):n;let A=p,N=Iu(A);for(;N&&n&&b!==A;){const y=Qa(N),S=N.getBoundingClientRect(),R=Xn(N),w=S.left+(N.clientLeft+parseFloat(R.paddingLeft))*y.x,D=S.top+(N.clientTop+parseFloat(R.paddingTop))*y.y;f*=y.x,g*=y.y,m*=y.x,h*=y.y,f+=w,g+=D,A=En(N),N=Iu(A)}}return wl({width:m,height:h,x:f,y:g})}function _d(e,t){const r=ql(e).scrollLeft;return t?t.left+r:ya(gr(e)).left+r}function qh(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(r?0:_d(e,n)),l=n.top+t.scrollTop;return{x:i,y:l}}function WO(e){let{elements:t,rect:r,offsetParent:n,strategy:i}=e;const l=i==="fixed",u=gr(n),d=t?Ul(t.floating):!1;if(n===u||d&&l)return r;let f={scrollLeft:0,scrollTop:0},g=cr(1);const m=cr(0),h=fr(n);if((h||!h&&!l)&&((ui(n)!=="body"||Qi(u))&&(f=ql(n)),fr(n))){const b=ya(n);g=Qa(n),m.x=b.x+n.clientLeft,m.y=b.y+n.clientTop}const p=u&&!h&&!l?qh(u,f,!0):cr(0);return{width:r.width*g.x,height:r.height*g.y,x:r.x*g.x-f.scrollLeft*g.x+m.x+p.x,y:r.y*g.y-f.scrollTop*g.y+m.y+p.y}}function YO(e){return Array.from(e.getClientRects())}function zO(e){const t=gr(e),r=ql(e),n=e.ownerDocument.body,i=ha(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),l=ha(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let u=-r.scrollLeft+_d(e);const d=-r.scrollTop;return Xn(n).direction==="rtl"&&(u+=ha(t.clientWidth,n.clientWidth)-i),{width:i,height:l,x:u,y:d}}function XO(e,t){const r=En(e),n=gr(e),i=r.visualViewport;let l=n.clientWidth,u=n.clientHeight,d=0,f=0;if(i){l=i.width,u=i.height;const g=kd();(!g||g&&t==="fixed")&&(d=i.offsetLeft,f=i.offsetTop)}return{width:l,height:u,x:d,y:f}}function ZO(e,t){const r=ya(e,!0,t==="fixed"),n=r.top+e.clientTop,i=r.left+e.clientLeft,l=fr(e)?Qa(e):cr(1),u=e.clientWidth*l.x,d=e.clientHeight*l.y,f=i*l.x,g=n*l.y;return{width:u,height:d,x:f,y:g}}function Im(e,t,r){let n;if(t==="viewport")n=XO(e,r);else if(t==="document")n=zO(gr(e));else if(Kt(t))n=ZO(t,r);else{const i=Uh(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return wl(n)}function Gh(e,t){const r=zr(e);return r===t||!Kt(r)||ii(r)?!1:Xn(r).position==="fixed"||Gh(r,t)}function JO(e,t){const r=t.get(e);if(r)return r;let n=Wi(e,[],!1).filter(d=>Kt(d)&&ui(d)!=="body"),i=null;const l=Xn(e).position==="fixed";let u=l?zr(e):e;for(;Kt(u)&&!ii(u);){const d=Xn(u),f=yd(u);!f&&d.position==="fixed"&&(i=null),(l?!f&&!i:!f&&d.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Qi(u)&&!f&&Gh(e,u))?n=n.filter(m=>m!==u):i=d,u=zr(u)}return t.set(e,n),n}function QO(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e;const u=[...r==="clippingAncestors"?Ul(t)?[]:JO(t,this._c):[].concat(r),n],d=u[0],f=u.reduce((g,m)=>{const h=Im(t,m,i);return g.top=ha(h.top,g.top),g.right=ri(h.right,g.right),g.bottom=ri(h.bottom,g.bottom),g.left=ha(h.left,g.left),g},Im(t,d,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function eA(e){const{width:t,height:r}=Kh(e);return{width:t,height:r}}function tA(e,t,r){const n=fr(t),i=gr(t),l=r==="fixed",u=ya(e,!0,l,t);let d={scrollLeft:0,scrollTop:0};const f=cr(0);if(n||!n&&!l)if((ui(t)!=="body"||Qi(i))&&(d=ql(t)),n){const p=ya(t,!0,l,t);f.x=p.x+t.clientLeft,f.y=p.y+t.clientTop}else i&&(f.x=_d(i));const g=i&&!n&&!l?qh(i,d):cr(0),m=u.left+d.scrollLeft-f.x-g.x,h=u.top+d.scrollTop-f.y-g.y;return{x:m,y:h,width:u.width,height:u.height}}function hu(e){return Xn(e).position==="static"}function Lm(e,t){if(!fr(e)||Xn(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return gr(e)===r&&(r=r.ownerDocument.body),r}function Hh(e,t){const r=En(e);if(Ul(e))return r;if(!fr(e)){let i=zr(e);for(;i&&!ii(i);){if(Kt(i)&&!hu(i))return i;i=zr(i)}return r}let n=Lm(e,t);for(;n&&qO(n)&&hu(n);)n=Lm(n,t);return n&&ii(n)&&hu(n)&&!yd(n)?r:n||GO(e)||r}const nA=async function(e){const t=this.getOffsetParent||Hh,r=this.getDimensions,n=await r(e.floating);return{reference:tA(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function rA(e){return Xn(e).direction==="rtl"}const aA={convertOffsetParentRelativeRectToViewportRelativeRect:WO,getDocumentElement:gr,getClippingRect:QO,getOffsetParent:Hh,getElementRects:nA,getClientRects:YO,getDimensions:eA,getScale:Qa,isElement:Kt,isRTL:rA};function $h(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function iA(e,t){let r=null,n;const i=gr(e);function l(){var d;clearTimeout(n),(d=r)==null||d.disconnect(),r=null}function u(d,f){d===void 0&&(d=!1),f===void 0&&(f=1),l();const g=e.getBoundingClientRect(),{left:m,top:h,width:p,height:b}=g;if(d||t(),!p||!b)return;const A=tl(h),N=tl(i.clientWidth-(m+p)),y=tl(i.clientHeight-(h+b)),S=tl(m),w={rootMargin:-A+"px "+-N+"px "+-y+"px "+-S+"px",threshold:ha(0,ri(1,f))||1};let D=!0;function E(I){const M=I[0].intersectionRatio;if(M!==f){if(!D)return u();M?u(!1,M):n=setTimeout(()=>{u(!1,1e-7)},1e3)}M===1&&!$h(g,e.getBoundingClientRect())&&u(),D=!1}try{r=new IntersectionObserver(E,{...w,root:i.ownerDocument})}catch{r=new IntersectionObserver(E,w)}r.observe(e)}return u(!0),l}function sA(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:l=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:f=!1}=n,g=bd(e),m=i||l?[...g?Wi(g):[],...Wi(t)]:[];m.forEach(S=>{i&&S.addEventListener("scroll",r,{passive:!0}),l&&S.addEventListener("resize",r)});const h=g&&d?iA(g,r):null;let p=-1,b=null;u&&(b=new ResizeObserver(S=>{let[R]=S;R&&R.target===g&&b&&(b.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var w;(w=b)==null||w.observe(t)})),r()}),g&&!f&&b.observe(g),b.observe(t));let A,N=f?ya(e):null;f&&y();function y(){const S=ya(e);N&&!$h(N,S)&&r(),N=S,A=requestAnimationFrame(y)}return r(),()=>{var S;m.forEach(R=>{i&&R.removeEventListener("scroll",r),l&&R.removeEventListener("resize",r)}),h?.(),(S=b)==null||S.disconnect(),b=null,f&&cancelAnimationFrame(A)}}const lA=KO,oA=UO,uA=CO,jm=BO,dA=(e,t,r)=>{const n=new Map,i={platform:aA,...r},l={...i.platform,_c:n};return jO(e,t,{...i,platform:l})};var yl=typeof document<"u"?T.useLayoutEffect:T.useEffect;function Ol(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!Ol(e[n],t[n]))return!1;return!0}if(i=Object.keys(e),r=i.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,i[n]))return!1;for(n=r;n--!==0;){const l=i[n];if(!(l==="_owner"&&e.$$typeof)&&!Ol(e[l],t[l]))return!1}return!0}return e!==e&&t!==t}function Wh(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Bm(e,t){const r=Wh(e);return Math.round(t*r)/r}function pu(e){const t=T.useRef(e);return yl(()=>{t.current=e}),t}function cA(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:i,elements:{reference:l,floating:u}={},transform:d=!0,whileElementsMounted:f,open:g}=e,[m,h]=T.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[p,b]=T.useState(n);Ol(p,n)||b(n);const[A,N]=T.useState(null),[y,S]=T.useState(null),R=T.useCallback(Q=>{Q!==I.current&&(I.current=Q,N(Q))},[]),w=T.useCallback(Q=>{Q!==M.current&&(M.current=Q,S(Q))},[]),D=l||A,E=u||y,I=T.useRef(null),M=T.useRef(null),B=T.useRef(m),U=f!=null,Y=pu(f),H=pu(i),V=pu(g),j=T.useCallback(()=>{if(!I.current||!M.current)return;const Q={placement:t,strategy:r,middleware:p};H.current&&(Q.platform=H.current),dA(I.current,M.current,Q).then(le=>{const _e={...le,isPositioned:V.current!==!1};Z.current&&!Ol(B.current,_e)&&(B.current=_e,dd.flushSync(()=>{h(_e)}))})},[p,t,r,H,V]);yl(()=>{g===!1&&B.current.isPositioned&&(B.current.isPositioned=!1,h(Q=>({...Q,isPositioned:!1})))},[g]);const Z=T.useRef(!1);yl(()=>(Z.current=!0,()=>{Z.current=!1}),[]),yl(()=>{if(D&&(I.current=D),E&&(M.current=E),D&&E){if(Y.current)return Y.current(D,E,j);j()}},[D,E,j,Y,U]);const te=T.useMemo(()=>({reference:I,floating:M,setReference:R,setFloating:w}),[R,w]),ne=T.useMemo(()=>({reference:D,floating:E}),[D,E]),oe=T.useMemo(()=>{const Q={position:r,left:0,top:0};if(!ne.floating)return Q;const le=Bm(ne.floating,m.x),_e=Bm(ne.floating,m.y);return d?{...Q,transform:"translate("+le+"px, "+_e+"px)",...Wh(ne.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:le,top:_e}},[r,d,ne.floating,m.x,m.y]);return T.useMemo(()=>({...m,update:j,refs:te,elements:ne,floatingStyles:oe}),[m,j,te,ne,oe])}const fA=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:i}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?jm({element:n.current,padding:i}).fn(r):{}:n?jm({element:n,padding:i}).fn(r):{}}}},mA=(e,t)=>({...lA(e),options:[e,t]}),gA=(e,t)=>({...oA(e),options:[e,t]}),hA=(e,t)=>({...uA(e),options:[e,t]}),pA=(e,t)=>({...fA(e),options:[e,t]}),Cm=/(\w+)/g;function vA(e,t){const r=Array.isArray(e)?e:yA(e);for(const n of t){if(!n)continue;let i=n;for(let l=0;l<r.length;l++){const u=i[r[l]];u!==void 0&&(i=u)}if(typeof i=="string")return i}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function yA(e){const t=[];let r=Cm.exec(e);for(;r;){const[,n,i]=r;t.push(n||i),r=Cm.exec(e)}return t}const kA=/{[^}]*}/g;function Ln(e,...t){const r=hd(),n=r.translations||[],i=[...t,...Array.isArray(n)?n.map(u=>u[e]):[n[e]],r.locale[e]];return(u,d)=>{const f=vA(u,i);return d?f.replace(kA,g=>{const m=g.substring(1,g.length-1);if(d[m]===void 0){const h=JSON.stringify(d);throw new Error(`Error translating key '${u}'. No replacement syntax ({}) found for key '${m}'. The following replacements were passed: '${h}'`)}return d[m]}):f}}function Yh(){const e=hd(),t=e.translations||[],r=Array.isArray(t)?t.map(n=>n.global):[t.global];r.push(e.locale.global);for(const n of r)if(n?.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var bA=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const _A=T.forwardRef((e,t)=>{var{className:r,size:n="medium",title:i,transparent:l=!1,variant:u="neutral",id:d,"data-color":f}=e,g=bA(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:m}=ge(),h=Xr(),p=Ln("Loader");return k.createElement("svg",Object.assign({"aria-labelledby":d??`loader-${h}`,ref:t,className:m("navds-loader",r,`navds-loader--${n}`,`navds-loader--${u}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":f??EA(u)},Ft(g,["children"]),{"data-variant":u}),k.createElement("title",{id:d??`loader-${h}`},i||p("title")),k.createElement("circle",{className:m("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),k.createElement("circle",{className:m("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function EA(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var TA=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Gt=T.forwardRef((e,t)=>{var{as:r="button",variant:n="primary",className:i,children:l,size:u="medium",loading:d=!1,disabled:f,icon:g,iconPosition:m="left",onKeyUp:h,"data-color":p}=e,b=TA(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:A}=ge(),N=f||d?Ft(b,["href"]):b,y=S=>{S.key===" "&&!f&&!d&&S.currentTarget.click()};return k.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":p??wA(n),"data-variant":OA(n)},N,{ref:t,onKeyUp:xr(h,y),className:A(i,"navds-button",`navds-button--${n}`,`navds-button--${u}`,{"navds-button--loading":d,"navds-button--icon-only":!!g&&!l,"navds-button--disabled":f??d}),disabled:f??d?!0:void 0}),g&&m==="left"&&k.createElement("span",{className:A("navds-button__icon")},g),d&&k.createElement(_A,{size:u}),l&&k.createElement(zn,{as:"span",size:u==="medium"?"medium":"small"},l),g&&m==="right"&&k.createElement("span",{className:A("navds-button__icon")},g))});function wA(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function OA(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var AA=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const RA={error:Aw,warning:iw,info:lw,success:nw},zh=T.forwardRef((e,t)=>{var{children:r,className:n,variant:i,size:l="medium",fullWidth:u=!1,contentMaxWidth:d=!0,inline:f=!1,closeButton:g=!1,onClose:m}=e,h=AA(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:p}=ge(),b=Ln("Alert"),A=RA[i];return k.createElement("div",Object.assign({},h,{"data-color":SA(i),"data-variant":i,ref:t,className:p(n,"navds-alert",`navds-alert--${i}`,`navds-alert--${l}`,{"navds-alert--full-width":u,"navds-alert--inline":f,"navds-alert--close-button":g})}),k.createElement(A,{title:b(i),className:p("navds-alert__icon")}),k.createElement(cd,{as:"div",size:l,className:p("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},r),g&&!f&&k.createElement("div",{className:p("navds-alert__button-wrapper")},k.createElement(Gt,{className:p("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:m,type:"button",icon:k.createElement(_l,{title:["error","warning"].includes(i)?b("closeAlert"):b("closeMessage")})})))});function SA(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function es(e,t,r){const n=Pe(e,r?.in);return isNaN(t)?He(r?.in||e,NaN):(t&&n.setDate(n.getDate()+t),n)}function Ed(e,t,r){const n=Pe(e,r?.in);if(isNaN(t))return He(e,NaN);if(!t)return n;const i=n.getDate(),l=He(e,n.getTime());l.setMonth(n.getMonth()+t+1,0);const u=l.getDate();return i>=u?l:(n.setFullYear(l.getFullYear(),l.getMonth(),i),n)}function Al(e,t){const r=Pe(e,t?.in).getDay();return r===0||r===6}function ka(e,t){return Mr(e,{...t,weekStartsOn:1})}function Xh(e,t){const r=Pe(e,t?.in),n=r.getFullYear(),i=He(r,0);i.setFullYear(n+1,0,4),i.setHours(0,0,0,0);const l=ka(i),u=He(r,0);u.setFullYear(n,0,4),u.setHours(0,0,0,0);const d=ka(u);return r.getTime()>=l.getTime()?n+1:r.getTime()>=d.getTime()?n:n-1}function Rl(e){const t=Pe(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function Ir(e,t){const r=Pe(e,t?.in);return r.setHours(0,0,0,0),r}function Yr(e,t,r){const[n,i]=oi(r?.in,e,t),l=Ir(n),u=Ir(i),d=+l-Rl(l),f=+u-Rl(u);return Math.round((d-f)/Fw)}function NA(e,t){const r=Xh(e,t),n=He(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),ka(n)}function PA(e,t,r){return es(e,t*7,r)}function Td(e,t,r){return Ed(e,t*12,r)}function DA(e,t){let r,n=t?.in;return e.forEach(i=>{!n&&typeof i=="object"&&(n=He.bind(null,i));const l=Pe(i,n);(!r||r<l||isNaN(+l))&&(r=l)}),He(n,r||NaN)}function FA(e,t){let r,n=t?.in;return e.forEach(i=>{!n&&typeof i=="object"&&(n=He.bind(null,i));const l=Pe(i,n);(!r||r>l||isNaN(+l))&&(r=l)}),He(n,r||NaN)}function wd(e,t,r){const[n,i]=oi(r?.in,e,t);return+Ir(n)==+Ir(i)}function Zh(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function xA(e){return!(!Zh(e)&&typeof e!="number"||isNaN(+Pe(e)))}function MA(e,t,r){const[n,i]=oi(r?.in,e,t),l=n.getFullYear()-i.getFullYear(),u=n.getMonth()-i.getMonth();return l*12+u}function Jh(e,t){const r=Pe(e,t?.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function IA(e,t){const[r,n]=oi(e,t.start,t.end);return{start:r,end:n}}function Qh(e,t){const{start:r,end:n}=IA(t?.in,e);let i=+r>+n;const l=i?+r:+n,u=i?n:r;u.setHours(0,0,0,0),u.setDate(1);let d=1;const f=[];for(;+u<=l;)f.push(He(r,u)),u.setMonth(u.getMonth()+d);return i?f.reverse():f}function ba(e,t){const r=Pe(e,t?.in);return r.setDate(1),r.setHours(0,0,0,0),r}function Gl(e,t){const r=Pe(e,t?.in),n=r.getFullYear();return r.setFullYear(n+1,0,0),r.setHours(23,59,59,999),r}function ts(e,t){const r=Pe(e,t?.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}function ep(e,t){const r=Ra(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,i=Pe(e,t?.in),l=i.getDay(),u=(l<n?-7:0)+6-(l-n);return i.setDate(i.getDate()+u),i.setHours(23,59,59,999),i}function LA(e,t){return ep(e,{...t,weekStartsOn:1})}function jA(e,t){const r=Pe(e,t?.in);return Yr(r,ts(r))+1}function Od(e,t){const r=Pe(e,t?.in),n=+ka(r)-+NA(r);return Math.round(n/Ah)+1}function Ad(e,t){const r=Pe(e,t?.in),n=r.getFullYear(),i=Ra(),l=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,u=He(t?.in||e,0);u.setFullYear(n+1,0,l),u.setHours(0,0,0,0);const d=Mr(u,t),f=He(t?.in||e,0);f.setFullYear(n,0,l),f.setHours(0,0,0,0);const g=Mr(f,t);return+r>=+d?n+1:+r>=+g?n:n-1}function BA(e,t){const r=Ra(),n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=Ad(e,t),l=He(t?.in||e,0);return l.setFullYear(i,0,n),l.setHours(0,0,0,0),Mr(l,t)}function Rd(e,t){const r=Pe(e,t?.in),n=+Mr(r,t)-+BA(r,t);return Math.round(n/Ah)+1}function Ge(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const Wr={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return Ge(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):Ge(r+1,2)},d(e,t){return Ge(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return Ge(e.getHours()%12||12,t.length)},H(e,t){return Ge(e.getHours(),t.length)},m(e,t){return Ge(e.getMinutes(),t.length)},s(e,t){return Ge(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),i=Math.trunc(n*Math.pow(10,r-3));return Ge(i,t.length)}},$a={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Vm={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return Wr.y(e,t)},Y:function(e,t,r,n){const i=Ad(e,n),l=i>0?i:1-i;if(t==="YY"){const u=l%100;return Ge(u,2)}return t==="Yo"?r.ordinalNumber(l,{unit:"year"}):Ge(l,t.length)},R:function(e,t){const r=Xh(e);return Ge(r,t.length)},u:function(e,t){const r=e.getFullYear();return Ge(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return Ge(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return Ge(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return Wr.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return Ge(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const i=Rd(e,n);return t==="wo"?r.ordinalNumber(i,{unit:"week"}):Ge(i,t.length)},I:function(e,t,r){const n=Od(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):Ge(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):Wr.d(e,t)},D:function(e,t,r){const n=jA(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):Ge(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const i=e.getDay(),l=(i-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(l);case"ee":return Ge(l,2);case"eo":return r.ordinalNumber(l,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const i=e.getDay(),l=(i-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(l);case"cc":return Ge(l,t.length);case"co":return r.ordinalNumber(l,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),i=n===0?7:n;switch(t){case"i":return String(i);case"ii":return Ge(i,t.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let i;switch(n===12?i=$a.noon:n===0?i=$a.midnight:i=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let i;switch(n>=17?i=$a.evening:n>=12?i=$a.afternoon:n>=4?i=$a.morning:i=$a.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return Wr.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):Wr.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):Ge(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):Ge(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Wr.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Wr.s(e,t)},S:function(e,t){return Wr.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return Um(n);case"XXXX":case"XX":return ma(n);case"XXXXX":case"XXX":default:return ma(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return Um(n);case"xxxx":case"xx":return ma(n);case"xxxxx":case"xxx":default:return ma(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Km(n,":");case"OOOO":default:return"GMT"+ma(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Km(n,":");case"zzzz":default:return"GMT"+ma(n,":")}},t:function(e,t,r){const n=Math.trunc(+e/1e3);return Ge(n,t.length)},T:function(e,t,r){return Ge(+e,t.length)}};function Km(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),i=Math.trunc(n/60),l=n%60;return l===0?r+String(i):r+String(i)+t+Ge(l,2)}function Um(e,t){return e%60===0?(e>0?"-":"+")+Ge(Math.abs(e)/60,2):ma(e,t)}function ma(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),i=Ge(Math.trunc(n/60),2),l=Ge(n%60,2);return r+i+t+l}const qm=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},tp=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},CA=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return qm(e,t);let l;switch(n){case"P":l=t.dateTime({width:"short"});break;case"PP":l=t.dateTime({width:"medium"});break;case"PPP":l=t.dateTime({width:"long"});break;case"PPPP":default:l=t.dateTime({width:"full"});break}return l.replace("{{date}}",qm(n,t)).replace("{{time}}",tp(i,t))},Lu={p:tp,P:CA},VA=/^D+$/,KA=/^Y+$/,UA=["D","DD","YY","YYYY"];function np(e){return VA.test(e)}function rp(e){return KA.test(e)}function ju(e,t,r){const n=qA(e,t,r);if(console.warn(n),UA.includes(e))throw new RangeError(n)}function qA(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const GA=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,HA=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$A=/^'([^]*?)'?$/,WA=/''/g,YA=/[a-zA-Z]/;function _a(e,t,r){const n=Ra(),i=r?.locale??n.locale??Vl,l=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,u=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,d=Pe(e,r?.in);if(!xA(d))throw new RangeError("Invalid time value");let f=t.match(HA).map(m=>{const h=m[0];if(h==="p"||h==="P"){const p=Lu[h];return p(m,i.formatLong)}return m}).join("").match(GA).map(m=>{if(m==="''")return{isToken:!1,value:"'"};const h=m[0];if(h==="'")return{isToken:!1,value:zA(m)};if(Vm[h])return{isToken:!0,value:m};if(h.match(YA))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:m}});i.localize.preprocessor&&(f=i.localize.preprocessor(d,f));const g={firstWeekContainsDate:l,weekStartsOn:u,locale:i};return f.map(m=>{if(!m.isToken)return m.value;const h=m.value;(!r?.useAdditionalWeekYearTokens&&rp(h)||!r?.useAdditionalDayOfYearTokens&&np(h))&&ju(h,t,String(e));const p=Vm[h[0]];return p(d,h,i.localize,g)}).join("")}function zA(e){const t=e.match($A);return t?t[1].replace(WA,"'"):e}function XA(e,t){const r=Pe(e,t?.in),n=r.getFullYear(),i=r.getMonth(),l=He(r,0);return l.setFullYear(n,i+1,0),l.setHours(0,0,0,0),l.getDate()}function ZA(){return Object.assign({},Ra())}function JA(e,t){const r=Pe(e,t?.in).getDay();return r===0?7:r}function Sd(e,t){return Pe(e,t?.in).getMonth()}function Nd(e,t){return Pe(e,t?.in).getFullYear()}function ap(e,t){return+Pe(e)>+Pe(t)}function ns(e,t){return+Pe(e)<+Pe(t)}function QA(e,t){const r=eR(t)?new t(0):He(t,0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}function eR(e){return typeof e=="function"&&e.prototype?.constructor===e}const tR=10;class ip{subPriority=0;validate(t,r){return!0}}class nR extends ip{constructor(t,r,n,i,l){super(),this.value=t,this.validateValue=r,this.setValue=n,this.priority=i,l&&(this.subPriority=l)}validate(t,r){return this.validateValue(t,this.value,r)}set(t,r,n){return this.setValue(t,r,this.value,n)}}class rR extends ip{priority=tR;subPriority=-1;constructor(t,r){super(),this.context=t||(n=>He(r,n))}set(t,r){return r.timestampIsSet?t:He(t,QA(t,this.context))}}class Ve{run(t,r,n,i){const l=this.parse(t,r,n,i);return l?{setter:new nR(l.value,this.validate,this.set,this.priority,this.subPriority),rest:l.rest}:null}validate(t,r,n){return!0}}class aR extends Ve{priority=140;parse(t,r,n){switch(r){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})||n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"})}}set(t,r,n){return r.era=n,t.setFullYear(n,0,1),t.setHours(0,0,0,0),t}incompatibleTokens=["R","u","t","T"]}const yt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},lr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function kt(e,t){return e&&{value:t(e.value),rest:e.rest}}function lt(e,t){const r=t.match(e);return r?{value:parseInt(r[0],10),rest:t.slice(r[0].length)}:null}function or(e,t){const r=t.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:t.slice(1)};const n=r[1]==="+"?1:-1,i=r[2]?parseInt(r[2],10):0,l=r[3]?parseInt(r[3],10):0,u=r[5]?parseInt(r[5],10):0;return{value:n*(i*Mw+l*xw+u*Iw),rest:t.slice(r[0].length)}}function sp(e){return lt(yt.anyDigitsSigned,e)}function ct(e,t){switch(e){case 1:return lt(yt.singleDigit,t);case 2:return lt(yt.twoDigits,t);case 3:return lt(yt.threeDigits,t);case 4:return lt(yt.fourDigits,t);default:return lt(new RegExp("^\\d{1,"+e+"}"),t)}}function Sl(e,t){switch(e){case 1:return lt(yt.singleDigitSigned,t);case 2:return lt(yt.twoDigitsSigned,t);case 3:return lt(yt.threeDigitsSigned,t);case 4:return lt(yt.fourDigitsSigned,t);default:return lt(new RegExp("^-?\\d{1,"+e+"}"),t)}}function Pd(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function lp(e,t){const r=t>0,n=r?t:1-t;let i;if(n<=50)i=e||100;else{const l=n+50,u=Math.trunc(l/100)*100,d=e>=l%100;i=e+u-(d?100:0)}return r?i:1-i}function op(e){return e%400===0||e%4===0&&e%100!==0}class iR extends Ve{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(t,r,n){const i=l=>({year:l,isTwoDigitYear:r==="yy"});switch(r){case"y":return kt(ct(4,t),i);case"yo":return kt(n.ordinalNumber(t,{unit:"year"}),i);default:return kt(ct(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,n){const i=t.getFullYear();if(n.isTwoDigitYear){const u=lp(n.year,i);return t.setFullYear(u,0,1),t.setHours(0,0,0,0),t}const l=!("era"in r)||r.era===1?n.year:1-n.year;return t.setFullYear(l,0,1),t.setHours(0,0,0,0),t}}class sR extends Ve{priority=130;parse(t,r,n){const i=l=>({year:l,isTwoDigitYear:r==="YY"});switch(r){case"Y":return kt(ct(4,t),i);case"Yo":return kt(n.ordinalNumber(t,{unit:"year"}),i);default:return kt(ct(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,n,i){const l=Ad(t,i);if(n.isTwoDigitYear){const d=lp(n.year,l);return t.setFullYear(d,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Mr(t,i)}const u=!("era"in r)||r.era===1?n.year:1-n.year;return t.setFullYear(u,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Mr(t,i)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class lR extends Ve{priority=130;parse(t,r){return Sl(r==="R"?4:r.length,t)}set(t,r,n){const i=He(t,0);return i.setFullYear(n,0,4),i.setHours(0,0,0,0),ka(i)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class oR extends Ve{priority=130;parse(t,r){return Sl(r==="u"?4:r.length,t)}set(t,r,n){return t.setFullYear(n,0,1),t.setHours(0,0,0,0),t}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class uR extends Ve{priority=120;parse(t,r,n){switch(r){case"Q":case"QQ":return ct(r.length,t);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})||n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=1&&r<=4}set(t,r,n){return t.setMonth((n-1)*3,1),t.setHours(0,0,0,0),t}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class dR extends Ve{priority=120;parse(t,r,n){switch(r){case"q":case"qq":return ct(r.length,t);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})||n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=1&&r<=4}set(t,r,n){return t.setMonth((n-1)*3,1),t.setHours(0,0,0,0),t}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class cR extends Ve{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(t,r,n){const i=l=>l-1;switch(r){case"M":return kt(lt(yt.month,t),i);case"MM":return kt(ct(2,t),i);case"Mo":return kt(n.ordinalNumber(t,{unit:"month"}),i);case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})||n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=11}set(t,r,n){return t.setMonth(n,1),t.setHours(0,0,0,0),t}}class fR extends Ve{priority=110;parse(t,r,n){const i=l=>l-1;switch(r){case"L":return kt(lt(yt.month,t),i);case"LL":return kt(ct(2,t),i);case"Lo":return kt(n.ordinalNumber(t,{unit:"month"}),i);case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})||n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=11}set(t,r,n){return t.setMonth(n,1),t.setHours(0,0,0,0),t}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function mR(e,t,r){const n=Pe(e,r?.in),i=Rd(n,r)-t;return n.setDate(n.getDate()-i*7),Pe(n,r?.in)}class gR extends Ve{priority=100;parse(t,r,n){switch(r){case"w":return lt(yt.week,t);case"wo":return n.ordinalNumber(t,{unit:"week"});default:return ct(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,n,i){return Mr(mR(t,n,i),i)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function hR(e,t,r){const n=Pe(e,r?.in),i=Od(n,r)-t;return n.setDate(n.getDate()-i*7),n}class pR extends Ve{priority=100;parse(t,r,n){switch(r){case"I":return lt(yt.week,t);case"Io":return n.ordinalNumber(t,{unit:"week"});default:return ct(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,n){return ka(hR(t,n))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const vR=[31,28,31,30,31,30,31,31,30,31,30,31],yR=[31,29,31,30,31,30,31,31,30,31,30,31];class kR extends Ve{priority=90;subPriority=1;parse(t,r,n){switch(r){case"d":return lt(yt.date,t);case"do":return n.ordinalNumber(t,{unit:"date"});default:return ct(r.length,t)}}validate(t,r){const n=t.getFullYear(),i=op(n),l=t.getMonth();return i?r>=1&&r<=yR[l]:r>=1&&r<=vR[l]}set(t,r,n){return t.setDate(n),t.setHours(0,0,0,0),t}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class bR extends Ve{priority=90;subpriority=1;parse(t,r,n){switch(r){case"D":case"DD":return lt(yt.dayOfYear,t);case"Do":return n.ordinalNumber(t,{unit:"date"});default:return ct(r.length,t)}}validate(t,r){const n=t.getFullYear();return op(n)?r>=1&&r<=366:r>=1&&r<=365}set(t,r,n){return t.setMonth(0,n),t.setHours(0,0,0,0),t}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function Dd(e,t,r){const n=Ra(),i=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,l=Pe(e,r?.in),u=l.getDay(),f=(t%7+7)%7,g=7-i,m=t<0||t>6?t-(u+g)%7:(f+g)%7-(u+g)%7;return es(l,m,r)}class _R extends Ve{priority=90;parse(t,r,n){switch(r){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,n,i){return t=Dd(t,n,i),t.setHours(0,0,0,0),t}incompatibleTokens=["D","i","e","c","t","T"]}class ER extends Ve{priority=90;parse(t,r,n,i){const l=u=>{const d=Math.floor((u-1)/7)*7;return(u+i.weekStartsOn+6)%7+d};switch(r){case"e":case"ee":return kt(ct(r.length,t),l);case"eo":return kt(n.ordinalNumber(t,{unit:"day"}),l);case"eee":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeeee":return n.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,n,i){return t=Dd(t,n,i),t.setHours(0,0,0,0),t}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class TR extends Ve{priority=90;parse(t,r,n,i){const l=u=>{const d=Math.floor((u-1)/7)*7;return(u+i.weekStartsOn+6)%7+d};switch(r){case"c":case"cc":return kt(ct(r.length,t),l);case"co":return kt(n.ordinalNumber(t,{unit:"day"}),l);case"ccc":return n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"ccccc":return n.day(t,{width:"narrow",context:"standalone"});case"cccccc":return n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(t,{width:"wide",context:"standalone"})||n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=6}set(t,r,n,i){return t=Dd(t,n,i),t.setHours(0,0,0,0),t}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function wR(e,t,r){const n=Pe(e,r?.in),i=JA(n,r),l=t-i;return es(n,l,r)}class OR extends Ve{priority=90;parse(t,r,n){const i=l=>l===0?7:l;switch(r){case"i":case"ii":return ct(r.length,t);case"io":return n.ordinalNumber(t,{unit:"day"});case"iii":return kt(n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"}),i);case"iiiii":return kt(n.day(t,{width:"narrow",context:"formatting"}),i);case"iiiiii":return kt(n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"}),i);case"iiii":default:return kt(n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"}),i)}}validate(t,r){return r>=1&&r<=7}set(t,r,n){return t=wR(t,n),t.setHours(0,0,0,0),t}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class AR extends Ve{priority=80;parse(t,r,n){switch(r){case"a":case"aa":case"aaa":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,n){return t.setHours(Pd(n),0,0,0),t}incompatibleTokens=["b","B","H","k","t","T"]}class RR extends Ve{priority=80;parse(t,r,n){switch(r){case"b":case"bb":case"bbb":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,n){return t.setHours(Pd(n),0,0,0),t}incompatibleTokens=["a","B","H","k","t","T"]}class SR extends Ve{priority=80;parse(t,r,n){switch(r){case"B":case"BB":case"BBB":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,n){return t.setHours(Pd(n),0,0,0),t}incompatibleTokens=["a","b","t","T"]}class NR extends Ve{priority=70;parse(t,r,n){switch(r){case"h":return lt(yt.hour12h,t);case"ho":return n.ordinalNumber(t,{unit:"hour"});default:return ct(r.length,t)}}validate(t,r){return r>=1&&r<=12}set(t,r,n){const i=t.getHours()>=12;return i&&n<12?t.setHours(n+12,0,0,0):!i&&n===12?t.setHours(0,0,0,0):t.setHours(n,0,0,0),t}incompatibleTokens=["H","K","k","t","T"]}class PR extends Ve{priority=70;parse(t,r,n){switch(r){case"H":return lt(yt.hour23h,t);case"Ho":return n.ordinalNumber(t,{unit:"hour"});default:return ct(r.length,t)}}validate(t,r){return r>=0&&r<=23}set(t,r,n){return t.setHours(n,0,0,0),t}incompatibleTokens=["a","b","h","K","k","t","T"]}class DR extends Ve{priority=70;parse(t,r,n){switch(r){case"K":return lt(yt.hour11h,t);case"Ko":return n.ordinalNumber(t,{unit:"hour"});default:return ct(r.length,t)}}validate(t,r){return r>=0&&r<=11}set(t,r,n){return t.getHours()>=12&&n<12?t.setHours(n+12,0,0,0):t.setHours(n,0,0,0),t}incompatibleTokens=["h","H","k","t","T"]}class FR extends Ve{priority=70;parse(t,r,n){switch(r){case"k":return lt(yt.hour24h,t);case"ko":return n.ordinalNumber(t,{unit:"hour"});default:return ct(r.length,t)}}validate(t,r){return r>=1&&r<=24}set(t,r,n){const i=n<=24?n%24:n;return t.setHours(i,0,0,0),t}incompatibleTokens=["a","b","h","H","K","t","T"]}class xR extends Ve{priority=60;parse(t,r,n){switch(r){case"m":return lt(yt.minute,t);case"mo":return n.ordinalNumber(t,{unit:"minute"});default:return ct(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,n){return t.setMinutes(n,0,0),t}incompatibleTokens=["t","T"]}class MR extends Ve{priority=50;parse(t,r,n){switch(r){case"s":return lt(yt.second,t);case"so":return n.ordinalNumber(t,{unit:"second"});default:return ct(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,n){return t.setSeconds(n,0),t}incompatibleTokens=["t","T"]}class IR extends Ve{priority=30;parse(t,r){const n=i=>Math.trunc(i*Math.pow(10,-r.length+3));return kt(ct(r.length,t),n)}set(t,r,n){return t.setMilliseconds(n),t}incompatibleTokens=["t","T"]}class LR extends Ve{priority=10;parse(t,r){switch(r){case"X":return or(lr.basicOptionalMinutes,t);case"XX":return or(lr.basic,t);case"XXXX":return or(lr.basicOptionalSeconds,t);case"XXXXX":return or(lr.extendedOptionalSeconds,t);case"XXX":default:return or(lr.extended,t)}}set(t,r,n){return r.timestampIsSet?t:He(t,t.getTime()-Rl(t)-n)}incompatibleTokens=["t","T","x"]}class jR extends Ve{priority=10;parse(t,r){switch(r){case"x":return or(lr.basicOptionalMinutes,t);case"xx":return or(lr.basic,t);case"xxxx":return or(lr.basicOptionalSeconds,t);case"xxxxx":return or(lr.extendedOptionalSeconds,t);case"xxx":default:return or(lr.extended,t)}}set(t,r,n){return r.timestampIsSet?t:He(t,t.getTime()-Rl(t)-n)}incompatibleTokens=["t","T","X"]}class BR extends Ve{priority=40;parse(t){return sp(t)}set(t,r,n){return[He(t,n*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class CR extends Ve{priority=20;parse(t){return sp(t)}set(t,r,n){return[He(t,n),{timestampIsSet:!0}]}incompatibleTokens="*"}const VR={G:new aR,y:new iR,Y:new sR,R:new lR,u:new oR,Q:new uR,q:new dR,M:new cR,L:new fR,w:new gR,I:new pR,d:new kR,D:new bR,E:new _R,e:new ER,c:new TR,i:new OR,a:new AR,b:new RR,B:new SR,h:new NR,H:new PR,K:new DR,k:new FR,m:new xR,s:new MR,S:new IR,X:new LR,x:new jR,t:new BR,T:new CR},KR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,UR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,qR=/^'([^]*?)'?$/,GR=/''/g,HR=/\S/,$R=/[a-zA-Z]/;function ei(e,t,r,n){const i=()=>He(n?.in||r,NaN),l=ZA(),u=n?.locale??l.locale??Vl,d=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??l.firstWeekContainsDate??l.locale?.options?.firstWeekContainsDate??1,f=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??l.weekStartsOn??l.locale?.options?.weekStartsOn??0;if(!t)return e?i():Pe(r,n?.in);const g={firstWeekContainsDate:d,weekStartsOn:f,locale:u},m=[new rR(n?.in,r)],h=t.match(UR).map(y=>{const S=y[0];if(S in Lu){const R=Lu[S];return R(y,u.formatLong)}return y}).join("").match(KR),p=[];for(let y of h){!n?.useAdditionalWeekYearTokens&&rp(y)&&ju(y,t,e),!n?.useAdditionalDayOfYearTokens&&np(y)&&ju(y,t,e);const S=y[0],R=VR[S];if(R){const{incompatibleTokens:w}=R;if(Array.isArray(w)){const E=p.find(I=>w.includes(I.token)||I.token===S);if(E)throw new RangeError(`The format string mustn't contain \`${E.fullToken}\` and \`${y}\` at the same time`)}else if(R.incompatibleTokens==="*"&&p.length>0)throw new RangeError(`The format string mustn't contain \`${y}\` and any other token at the same time`);p.push({token:S,fullToken:y});const D=R.run(e,y,u.match,g);if(!D)return i();m.push(D.setter),e=D.rest}else{if(S.match($R))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");if(y==="''"?y="'":S==="'"&&(y=WR(y)),e.indexOf(y)===0)e=e.slice(y.length);else return i()}}if(e.length>0&&HR.test(e))return i();const b=m.map(y=>y.priority).sort((y,S)=>S-y).filter((y,S,R)=>R.indexOf(y)===S).map(y=>m.filter(S=>S.priority===y).sort((S,R)=>R.subPriority-S.subPriority)).map(y=>y[0]);let A=Pe(r,n?.in);if(isNaN(+A))return i();const N={};for(const y of b){if(!y.validate(A,g))return i();const S=y.set(A,N,g);Array.isArray(S)?(A=S[0],Object.assign(N,S[1])):A=S}return A}function WR(e){return e.match(qR)[1].replace(GR,"'")}function YR(e,t,r){const[n,i]=oi(r?.in,e,t);return n.getFullYear()===i.getFullYear()&&n.getMonth()===i.getMonth()}function up(e,t,r){const[n,i]=oi(r?.in,e,t);return n.getFullYear()===i.getFullYear()}function zR(e,t,r){return es(e,-t,r)}function dp(e,t,r){const n=Pe(e,r?.in),i=n.getFullYear(),l=n.getDate(),u=He(e,0);u.setFullYear(i,t,15),u.setHours(0,0,0,0);const d=XA(u);return n.setMonth(t,Math.min(l,d)),n}function cp(e,t,r){const n=Pe(e,r?.in);return isNaN(+n)?He(e,NaN):(n.setFullYear(t),n)}function XR(e,t,r){return Ed(e,-t,r)}function ZR(e,t,r){const{years:n=0,months:i=0,weeks:l=0,days:u=0,hours:d=0,minutes:f=0,seconds:g=0}=t,m=XR(e,i+n*12,r),h=zR(m,u+l*7,r),p=f+d*60,A=(g+p*60)*1e3;return He(e,+h-A)}var ti=typeof document<"u"?T.useLayoutEffect:T.useEffect;const JR={...ph},QR=JR.useInsertionEffect,eS=QR||(e=>e());function tS(e){const t=T.useRef(()=>{});return eS(()=>{t.current=e}),T.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.current==null?void 0:t.current(...n)},[])}const nS={...ph};let Gm=!1,rS=0;const Hm=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+rS++;function aS(){const[e,t]=T.useState(()=>Gm?Hm():void 0);return ti(()=>{e==null&&t(Hm())},[]),T.useEffect(()=>{Gm=!0},[]),e}const iS=nS.useId,fp=iS||aS;function sS(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(i=>i(r))},on(t,r){e.has(t)||e.set(t,new Set),e.get(t).add(r)},off(t,r){var n;(n=e.get(t))==null||n.delete(r)}}}const lS=T.createContext(null),oS=T.createContext(null),uS=()=>{var e;return((e=T.useContext(lS))==null?void 0:e.id)||null},dS=()=>T.useContext(oS);function cS(e){return"data-floating-ui-"+e}const fS=T.createContext(null),$m=cS("portal");function mS(e){e===void 0&&(e={});const{id:t,root:r}=e,n=fp(),i=gS(),[l,u]=T.useState(null),d=T.useRef(null);return ti(()=>()=>{l?.remove(),queueMicrotask(()=>{d.current=null})},[l]),ti(()=>{if(!n||d.current)return;const f=t?document.getElementById(t):null;if(!f)return;const g=document.createElement("div");g.id=n,g.setAttribute($m,""),f.appendChild(g),d.current=g,u(g)},[t,n]),ti(()=>{if(r===null||!n||d.current)return;let f=r||i?.portalNode;f&&!Kt(f)&&(f=f.current),f=f||document.body;let g=null;t&&(g=document.createElement("div"),g.id=t,f.appendChild(g));const m=document.createElement("div");m.id=n,m.setAttribute($m,""),f=g||f,f.appendChild(m),d.current=m,u(m)},[t,r,n,i]),l}const gS=()=>T.useContext(fS);function hS(e){const{open:t=!1,onOpenChange:r,elements:n}=e,i=fp(),l=T.useRef({}),[u]=T.useState(()=>sS()),d=uS()!=null,[f,g]=T.useState(n.reference),m=tS((b,A,N)=>{l.current.openEvent=b?A:void 0,u.emit("openchange",{open:b,event:A,reason:N,nested:d}),r?.(b,A,N)}),h=T.useMemo(()=>({setPositionReference:g}),[]),p=T.useMemo(()=>({reference:f||n.reference||null,floating:n.floating||null,domReference:n.reference}),[f,n.reference,n.floating]);return T.useMemo(()=>({dataRef:l,open:t,onOpenChange:m,elements:p,events:u,floatingId:i,refs:h}),[t,m,p,u,i,h])}function pS(e){e===void 0&&(e={});const{nodeId:t}=e,r=hS({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,i=n.elements,[l,u]=T.useState(null),[d,f]=T.useState(null),m=i?.domReference||l,h=T.useRef(null),p=dS();ti(()=>{m&&(h.current=m)},[m]);const b=cA({...e,elements:{...i,...d&&{reference:d}}}),A=T.useCallback(w=>{const D=Kt(w)?{getBoundingClientRect:()=>w.getBoundingClientRect(),getClientRects:()=>w.getClientRects(),contextElement:w}:w;f(D),b.refs.setReference(D)},[b.refs]),N=T.useCallback(w=>{(Kt(w)||w===null)&&(h.current=w,u(w)),(Kt(b.refs.reference.current)||b.refs.reference.current===null||w!==null&&!Kt(w))&&b.refs.setReference(w)},[b.refs]),y=T.useMemo(()=>({...b.refs,setReference:N,setPositionReference:A,domReference:h}),[b.refs,N,A]),S=T.useMemo(()=>({...b.elements,domReference:m}),[b.elements,m]),R=T.useMemo(()=>({...b,...n,refs:y,elements:S,nodeId:t}),[b,y,S,t,n]);return ti(()=>{n.dataRef.current.floatingContext=R;const w=p?.nodesRef.current.find(D=>D.id===t);w&&(w.context=R)}),T.useMemo(()=>({...b,context:R,refs:y,elements:S}),[b,y,S,R])}const Hl=()=>{const{cn:e}=ge();return k.createElement(Oh,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Fd=()=>{const{cn:e}=ge();return k.createElement(Oh,{title:Ln("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var vS=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const yS=T.forwardRef((e,t)=>{var{className:r,header:n,children:i,open:l,defaultOpen:u=!1,onClick:d,size:f="medium",onOpenChange:g}=e,m=vS(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:h}=ge(),[p,b]=$i({defaultValue:u,value:l,onChange:g}),A=f==="small"?"small":"medium";return k.createElement("div",{className:h("navds-read-more",`navds-read-more--${f}`,r,{"navds-read-more--open":p}),"data-volume":"low"},k.createElement("button",Object.assign({},m,{ref:t,type:"button",className:h("navds-read-more__button","navds-body-short",{"navds-body-short--small":f==="small"}),onClick:xr(d,()=>b(N=>!N)),"aria-expanded":p,"data-state":p?"open":"closed"}),k.createElement(md,{className:h("navds-read-more__expand-icon"),"aria-hidden":!0}),k.createElement("span",null,n)),k.createElement(cd,{as:"div","aria-hidden":!p,className:h("navds-read-more__content",{"navds-read-more__content--closed":!p}),size:A,"data-state":p?"open":"closed"},i))}),Yi=T.createContext(null),Zr=(e,t)=>{var r,n,i;const{size:l,error:u,errorId:d}=e,f=T.useContext(Yi),g=Xr(),m=(r=e.id)!==null&&r!==void 0?r:`${t}-${g}`,h=d??`${t}-error-${g}`,p=`${t}-description-${g}`,b=f?.disabled||e.disabled,A=(f?.readOnly||e.readOnly)&&!b||void 0,N=!b&&!A&&!!(u||f?.error),y=!b&&!A&&!!u&&typeof u!="boolean",S=Object.assign({},N?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:y,hasError:N,errorId:h,inputDescriptionId:p,size:(n=l??f?.size)!==null&&n!==void 0?n:"medium",readOnly:A,inputProps:Object.assign(Object.assign({id:m},S),{"aria-describedby":zi(e["aria-describedby"],{[p]:e.description&&!Nl(e.description),[h]:y,[(i=f?.errorId)!==null&&i!==void 0?i:""]:N&&f?.error})||void 0,disabled:b})}};function Nl(e,t=!0){if(k.isValidElement(e)){if(e.type===yS)return!0;if(e.props.children&&t)return Nl(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>Nl(r,t));return!1}const mp={global:{dateLocale:Dh,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},gp={global:{dateLocale:xh,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},hp=(e="nb")=>{switch(e){case"nn":return xh;case"en":return Dh;default:return Fh}},pp=e=>{switch(e){case"nn":return gp.DatePicker;case"en":case"en-GB":return mp.DatePicker;default:return}},kS=e=>{switch(e){case"nn":return gp.global;case"en":case"en-GB":return mp.global;default:return}},[vp,$l]=Ll();var bS=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const[_S,xd]=Ll({errorMessage:"useDateInputContext must be used with DateInputContext"}),yp=T.forwardRef((e,t)=>{const{className:r,hideLabel:n=!1,label:i,description:l,variant:u="datepicker",setAnchorRef:d}=e,f=bS(e,["className","hideLabel","label","description","variant","setAnchorRef"]),g=T.useRef(null),m=$l().translate,{cn:h}=ge(),p=u==="datepicker",b={prefix:p?"datepicker-input":"monthpicker-input",iconTitle:{open:p?"openDatePicker":"openMonthPicker",close:p?"closeDatePicker":"closeMonthPicker"}},A=xd(),{inputProps:N,size:y="medium",inputDescriptionId:S,errorId:R,showErrorMsg:w,hasError:D,readOnly:E}=Zr(e,b.prefix);return k.createElement("div",{className:h(r,"navds-form-field",`navds-form-field--${y}`,"navds-date__field",{"navds-text-field--error":D,"navds-date__field--error":D,"navds-form-field--disabled":!!N.disabled,"navds-text-field--disabled":!!N.disabled,"navds-form-field--readonly":E,"navds-text-field--readonly":E,"navds-date__field--readonly":E})},k.createElement(zn,{htmlFor:N.id,size:y,className:h("navds-form-field__label",{"navds-sr-only":n})},E&&k.createElement(Hl,null),i),!!l&&k.createElement(Rt,{as:"div",className:h("navds-form-field__description",{"navds-sr-only":n}),id:S,size:y},l),k.createElement("div",{className:h("navds-date__field-wrapper")},k.createElement("input",Object.assign({ref:t},Ft(f,["error","errorId","size"]),N,{autoComplete:"off","aria-controls":A?.open?A.ariaId:void 0,readOnly:E,className:h("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${y}`),size:p?11:14})),k.createElement("button",{disabled:N.disabled||E,tabIndex:E||A?.open?-1:0,onClick:()=>{A?.onOpen(),d?.(g.current)},type:"button",className:h("navds-date__field-button"),ref:g},k.createElement(ew,{title:m(b.iconTitle[A?.open?"close":"open"])}))),k.createElement("div",{className:h("navds-form-field__error"),id:R,"aria-relevant":"additions removals","aria-live":"polite"},w&&k.createElement(Aa,{size:y,showIcon:!0},e.error)))}),ES=T.forwardRef((e,t)=>k.createElement(yp,Object.assign({},e,{ref:t})));T.forwardRef((e,t)=>k.createElement(yp,Object.assign({},e,{variant:"monthpicker",ref:t})));var TS=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const wS=T.forwardRef((e,t)=>{var{className:r}=e,n=TS(e,["className"]);const{cn:i}=ge();return k.createElement("div",Object.assign({},n,{ref:t,className:i("navds-modal__body",r)}))});var OS=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const AS=T.forwardRef((e,t)=>{var{className:r}=e,n=OS(e,["className"]);const{cn:i}=ge();return k.createElement("div",Object.assign({},n,{ref:t,className:i("navds-modal__footer",r)}))});var RS=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const kp=T.forwardRef((e,t)=>{var{children:r,className:n,closeButton:i=!0}=e,l=RS(e,["children","className","closeButton"]);const{cn:u}=ge(),d=Cl(),f=Ln("global");return k.createElement("div",Object.assign({},l,{ref:t,className:u("navds-modal__header",n)}),d.closeHandler&&i&&k.createElement(Gt,{type:"button",className:u("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:g=>{["Enter"," "].includes(g.key)&&g.repeat&&g.preventDefault()},onClick:d.closeHandler,icon:k.createElement(_l,{title:f("close")})}),r)}),Wm=({clientX:e,clientY:t},{left:r,top:n,right:i,bottom:l})=>!(e<r||t<n||e>i||t>l);function SS(e,t,r){if(!(t&&t.closeButton===!1))return r?()=>{var n;return r()!==!1&&((n=e.current)===null||n===void 0?void 0:n.close())}:()=>{var n;return(n=e.current)===null||n===void 0?void 0:n.close()}}const nl="navds-modal__document-body",rl="aksel-modal__document-body";function NS(e,t,r){k.useEffect(()=>{if(r||!e.current||!t)return;e.current.open&&document.body.classList.add(rl,nl);const n=new MutationObserver(()=>{var i;!((i=e.current)===null||i===void 0)&&i.open?document.body.classList.add(rl,nl):document.body.classList.remove(rl,nl)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(rl,nl)}},[e,t,r])}const Za=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function bp(e,t){var r="on"+t.type.toLowerCase();return typeof e[r]=="function"&&e[r](t),e.dispatchEvent(t)}function Vi(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function _p(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function PS(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1}function vu(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Ep(e){var t=["button","input","keygen","select","textarea"],r=t.map(function(u){return u+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(r.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var i=e.querySelectorAll("*"),l=0;l<i.length&&!(i[l].tagName&&i[l].shadowRoot&&(n=Ep(i[l].shadowRoot),n));l++);return n}function Ym(e){return e.isConnected||document.body.contains(e)}function Tp(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var r=je.formSubmitter;if(!r){var n=e.target,i="getRootNode"in n&&n.getRootNode()||document;r=i.activeElement}return!r||r.form!==t?null:r}function DS(e){if(!e.defaultPrevented){var t=e.target,r=je.imagemapUseValue,n=Tp(e);r===null&&n&&(r=n.value);var i=Vi(t);if(i){var l=n&&n.getAttribute("formmethod")||t.getAttribute("method");l==="dialog"&&(e.preventDefault(),r!=null?i.close(r):i.close())}}}function wp(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",DS,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,n=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),i,l=function(u){if(u.target===e){var d="DOMNodeRemoved";r|=u.type.substr(0,d.length)===d,window.clearTimeout(i),i=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(u){e.addEventListener(u,l)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}wp.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Ym(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),je.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Ep(this.dialog_)),_p(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Ym(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!je.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,je.needsCentering(this.dialog_)?(je.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});bp(this.dialog_,t)}};var je={};je.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,r=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,r)+"px"};je.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var r=document.styleSheets[t],n=null;try{n=r.cssRules}catch{}if(n)for(var i=0;i<n.length;++i){var l=n[i],u=null;try{u=document.querySelectorAll(l.selectorText)}catch{}if(!(!u||!PS(u,e))){var d=l.style.getPropertyValue("top"),f=l.style.getPropertyValue("bottom");if(d&&d!=="auto"||f&&f!=="auto")return!0}}}return!1};je.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!je.isInlinePositionSetByStylesheet(e)};je.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new wp(e)};je.registerDialog=function(e){e.showModal||je.forceRegisterDialog(e)};je.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var r=[];t.forEach(function(n){for(var i=0,l;l=n.removedNodes[i];++i)l instanceof Element&&(l.localName==="dialog"&&r.push(l),r=r.concat(l.querySelectorAll("dialog")))}),r.length&&e(r)}))};je.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};je.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};je.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,r;r=this.pendingDialogStack[t];++t)r.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var i=n.dialog.parentNode||document.body;i.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};je.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Vi(e);){for(var t=0,r;r=this.pendingDialogStack[t];++t)if(r.dialog===e)return t===0;e=e.parentElement}return!1};je.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),_p(t),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],n=r.dialog,i=n.compareDocumentPosition(t);return i&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};je.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&bp(r.dialog,t)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};je.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};je.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};je.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Za&&(je.dm=new je.DialogManager,je.formSubmitter=null,je.imagemapUseValue=null);if(Za){var zm=document.createElement("form");if(zm.setAttribute("method","dialog"),zm.method!=="dialog"){var Wa=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Wa){var FS=Wa.get;Wa.get=function(){return vu(this)?"dialog":FS.call(this)};var xS=Wa.set;Wa.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):xS.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Wa)}}document.addEventListener("click",function(e){if(je.formSubmitter=null,je.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var r=e.composedPath();t=r.shift()||t}if(!(!t||!vu(t.form))){var n=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!n){if(!(t.localName==="input"&&t.type==="image"))return;je.imagemapUseValue=e.offsetX+","+e.offsetY}var i=Vi(t);i&&(je.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,r=Vi(t);if(!r){var n=Tp(e),i=n&&n.getAttribute("formmethod")||t.getAttribute("method");i==="dialog"&&e.preventDefault()}});var MS=HTMLFormElement.prototype.submit,IS=function(){if(!vu(this))return MS.call(this);var e=Vi(this);e&&e.close()};HTMLFormElement.prototype.submit=IS}var LS=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const pa=T.forwardRef((e,t)=>{var r,n,{header:i,children:l,open:u,onBeforeClose:d,onCancel:f,closeOnBackdropClick:g,width:m,placement:h,portal:p,className:b,"aria-labelledby":A,style:N,onClick:y,onMouseDown:S}=e,R=LS(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:w}=ge(),D=T.useRef(w("navds-modal--polyfilled")),E=T.useRef(null),I=Oa(E,t),M=Xr(),B=(r=hd())===null||r===void 0?void 0:r.rootElement,U=mS({root:B}),Y=xd(!1),H=Cl(!1)!==void 0;H&&!Y&&console.error("Modals should not be nested"),T.useEffect(()=>{Za&&E.current&&U&&(je.registerDialog(E.current),E.current.classList.add(D.current)),E.current&&U&&(E.current.autofocus=!0)},[U]),T.useEffect(()=>{E.current&&U&&u!==void 0&&(u&&!E.current.open?E.current.showModal():!u&&E.current.open&&E.current.close())},[U,u]),NS(E,U,H);const V=typeof m=="string"&&["small","medium"].includes(m),j=w("navds-modal",b,{[D.current]:Za,"navds-modal--autowidth":!m,[`navds-modal--${m}`]:V,"navds-modal--top":h==="top"&&!Za}),Z=Object.assign(Object.assign({},N),V?{}:{width:m}),te=T.useRef({clientX:0,clientY:0}),ne=Qe=>{te.current=Qe},oe=g&&!Za,Q=Qe=>{if(Qe.target!==E.current)return;const ot=E.current.getBoundingClientRect();Wm(te.current,ot)||Wm(Qe,ot)||d!==void 0&&d()===!1||E.current.close()},le=Qe=>{d&&d()===!1&&Qe.preventDefault()},_e=!A&&!R["aria-label"]&&i?M:A,pe=k.createElement("dialog",Object.assign({},R,{ref:I,className:j,style:Z,onCancel:xr(f,le),onClick:oe?xr(y,Q):y,onMouseDown:oe?xr(S,ne):S,"aria-labelledby":_e}),k.createElement(Rw,{closeHandler:SS(E,i,d),ref:E},i&&k.createElement(kp,null,i.label&&k.createElement(fd,{className:w("navds-modal__label")},i.label),k.createElement(Xi,{size:(n=i.size)!==null&&n!==void 0?n:"medium",level:"1",id:M},i.icon&&k.createElement("span",{className:w("navds-modal__header-icon")},i.icon),i.heading)),l));return p?U?dd.createPortal(pe,U):null:pe});pa.Header=kp;pa.Body=wS;pa.Footer=AS;var jS=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const BS=T.forwardRef((e,t)=>{var{className:r}=e,n=jS(e,["className"]);const{cn:i}=ge();return k.createElement("div",Object.assign({},n,{ref:t,className:i("navds-popover__content",r)}))});var CS=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Op=T.forwardRef((e,t)=>{var{className:r,children:n,anchorEl:i,arrow:l=!0,open:u,onClose:d,placement:f="top",offset:g,strategy:m,flip:h=!0}=e,p=CS(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:b}=ge(),A=T.useRef(null),N=Cl(!1)!==void 0,y=xd(!1),S=m??(N?"fixed":"absolute"),R=y?!1:h,w=Bl(!1),{update:D,refs:E,placement:I,middlewareData:{arrow:{x:M,y:B}={}},floatingStyles:U}=pS({strategy:S,placement:f,open:u,middleware:[mA(g??(w?8:l?16:4)),R&&hA({padding:5,fallbackPlacements:["bottom","top"]}),gA({padding:12}),pA({element:A,padding:8})]});ni(()=>{E.setReference(i)},[i]);const Y=Oa(E.setFloating,t);ni(()=>{if(!E.reference.current||!E.floating.current||!u)return;const V=sA(E.reference.current,E.floating.current,D);return()=>V()},[E.floating,E.reference,D,u,i]);const H={top:"bottom",right:"left",bottom:"top",left:"right"}[I.split("-")[0]];return k.createElement(SO,{asChild:!0,safeZone:{anchor:i,dismissable:E.floating.current},onDismiss:()=>u&&d?.(),enabled:u},k.createElement("div",Object.assign({ref:Y},p,{className:b("navds-popover",r,{"navds-popover--hidden":!u||!i}),style:Object.assign(Object.assign({},p.style),U),"data-placement":I,"aria-hidden":!u||!i}),n,l&&!w&&k.createElement("div",{ref:V=>{A.current=V},style:Object.assign(Object.assign(Object.assign({},M!=null?{left:M}:{}),B!=null?{top:B}:{}),H?{[H]:"-0.5rem"}:{}),className:b("navds-popover__arrow")})))});Op.Content=BS;const VS={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},KS=({open:e,children:t,onClose:r,anchor:n,locale:i,translate:l,variant:u,popoverProps:d})=>{const f=Ln("global",kS(i)),{cn:g}=ge(),m=T.useRef(null),h=Cl(!1)!==void 0;return Nw("screen and (min-width: 768px)",!0)&&!h?k.createElement(Op,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:g("navds-date__popover",{"navds-date":u==="month"}),flip:!1},d),t):k.createElement(pa,{ref:m,open:e,onClose:b=>{b.stopPropagation(),r()},"aria-label":l(VS[u]),className:g("navds-date__modal",{"navds-date__nested-modal":h,"navds-date":u==="month"}),closeOnBackdropClick:!0,placement:"top"},k.createElement("div",{className:g("navds-date__modal-body")},t,k.createElement(Gt,{variant:"tertiary",onClick:()=>{var b;return(b=m?.current)===null||b===void 0?void 0:b.close()},size:"small",type:"button"},f("close"))))};function Ap(e){return!!(e&&typeof e=="object"&&"from"in e)}const US={},ji={};function Ki(e,t){try{const n=(US[e]||=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format)(t).split("GMT")[1]||"";return n in ji?ji[n]:Xm(n,n.split(":"))}catch{if(e in ji)return ji[e];const r=e?.match(qS);return r?Xm(e,r.slice(1)):NaN}}const qS=/([+-]\d\d):?(\d\d)?/;function Xm(e,t){const r=+t[0],n=+(t[1]||0);return ji[e]=r>0?r*60+n:r*60-n}class ur extends Date{constructor(...t){super(),t.length>1&&typeof t[t.length-1]=="string"&&(this.timeZone=t.pop()),this.internal=new Date,isNaN(Ki(this.timeZone,this))?this.setTime(NaN):t.length?typeof t[0]=="number"&&(t.length===1||t.length===2&&typeof t[1]!="number")?this.setTime(t[0]):typeof t[0]=="string"?this.setTime(+new Date(t[0])):t[0]instanceof Date?this.setTime(+t[0]):(this.setTime(+new Date(...t)),Rp(this),Bu(this)):this.setTime(Date.now())}static tz(t,...r){return r.length?new ur(...r,t):new ur(Date.now(),t)}withTimeZone(t){return new ur(+this,t)}getTimezoneOffset(){return-Ki(this.timeZone,this)}setTime(t){return Date.prototype.setTime.apply(this,arguments),Bu(this),+this}[Symbol.for("constructDateFrom")](t){return new ur(+new Date(t),this.timeZone)}}const Zm=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Zm.test(e))return;const t=e.replace(Zm,"$1UTC");ur.prototype[t]&&(e.startsWith("get")?ur.prototype[e]=function(){return this.internal[t]()}:(ur.prototype[e]=function(){return Date.prototype[t].apply(this.internal,arguments),GS(this),+this},ur.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),Bu(this),+this}))});function Bu(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function GS(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),Rp(e)}function Rp(e){const t=Ki(e.timeZone,e),r=new Date(+e);r.setUTCHours(r.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),i=-new Date(+r).getTimezoneOffset(),l=n-i,u=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();l&&u&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+l);const d=n-t;d&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+d);const f=Ki(e.timeZone,e),m=-new Date(+e).getTimezoneOffset()-f,h=f!==t,p=m-d;if(h&&p){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+p);const b=Ki(e.timeZone,e),A=f-b;A&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+A),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+A))}}class Vt extends ur{static tz(t,...r){return r.length?new Vt(...r,t):new Vt(Date.now(),t)}toISOString(){const[t,r,n]=this.tzComponents(),i=`${t}${r}:${n}`;return this.internal.toISOString().slice(0,-1)+i}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[t,r,n,i]=this.internal.toUTCString().split(" ");return`${t?.slice(0,-1)} ${n} ${r} ${i}`}toTimeString(){const t=this.internal.toUTCString().split(" ")[4],[r,n,i]=this.tzComponents();return`${t} GMT${r}${n}${i} (${HS(this.timeZone,this)})`}toLocaleString(t,r){return Date.prototype.toLocaleString.call(this,t,{...r,timeZone:r?.timeZone||this.timeZone})}toLocaleDateString(t,r){return Date.prototype.toLocaleDateString.call(this,t,{...r,timeZone:r?.timeZone||this.timeZone})}toLocaleTimeString(t,r){return Date.prototype.toLocaleTimeString.call(this,t,{...r,timeZone:r?.timeZone||this.timeZone})}tzComponents(){const t=this.getTimezoneOffset(),r=t>0?"-":"+",n=String(Math.floor(Math.abs(t)/60)).padStart(2,"0"),i=String(Math.abs(t)%60).padStart(2,"0");return[r,n,i]}withTimeZone(t){return new Vt(+this,t)}[Symbol.for("constructDateFrom")](t){return new Vt(+new Date(t),this.timeZone)}}function HS(e,t){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(t).slice(12)}var me;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(me||(me={}));var st;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(st||(st={}));var Wn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Wn||(Wn={}));var bn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(bn||(bn={}));const Jm=5,$S=4;function WS(e,t){const r=t.startOfMonth(e),n=r.getDay()>0?r.getDay():7,i=t.addDays(e,-n+1),l=t.addDays(i,Jm*7-1);return t.getMonth(e)===t.getMonth(l)?Jm:$S}function Sp(e,t){const r=t.startOfMonth(e),n=r.getDay();return n===1?r:n===0?t.addDays(r,-1*6):t.addDays(r,-1*(n-1))}function YS(e,t){const r=Sp(e,t),n=WS(e,t);return t.addDays(r,n*7-1)}class Lr{constructor(t,r){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?Vt.tz(this.options.timeZone):new this.Date,this.newDate=(n,i,l)=>this.overrides?.newDate?this.overrides.newDate(n,i,l):this.options.timeZone?new Vt(n,i,l,this.options.timeZone):new Date(n,i,l),this.addDays=(n,i)=>this.overrides?.addDays?this.overrides.addDays(n,i):es(n,i),this.addMonths=(n,i)=>this.overrides?.addMonths?this.overrides.addMonths(n,i):Ed(n,i),this.addWeeks=(n,i)=>this.overrides?.addWeeks?this.overrides.addWeeks(n,i):PA(n,i),this.addYears=(n,i)=>this.overrides?.addYears?this.overrides.addYears(n,i):Td(n,i),this.differenceInCalendarDays=(n,i)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(n,i):Yr(n,i),this.differenceInCalendarMonths=(n,i)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(n,i):MA(n,i),this.eachMonthOfInterval=n=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(n):Qh(n),this.endOfBroadcastWeek=n=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(n):YS(n,this),this.endOfISOWeek=n=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(n):LA(n),this.endOfMonth=n=>this.overrides?.endOfMonth?this.overrides.endOfMonth(n):Jh(n),this.endOfWeek=(n,i)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(n,i):ep(n,this.options),this.endOfYear=n=>this.overrides?.endOfYear?this.overrides.endOfYear(n):Gl(n),this.format=(n,i,l)=>{const u=this.overrides?.format?this.overrides.format(n,i,this.options):_a(n,i,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(u):u},this.getISOWeek=n=>this.overrides?.getISOWeek?this.overrides.getISOWeek(n):Od(n),this.getMonth=(n,i)=>this.overrides?.getMonth?this.overrides.getMonth(n,this.options):Sd(n,this.options),this.getYear=(n,i)=>this.overrides?.getYear?this.overrides.getYear(n,this.options):Nd(n,this.options),this.getWeek=(n,i)=>this.overrides?.getWeek?this.overrides.getWeek(n,this.options):Rd(n,this.options),this.isAfter=(n,i)=>this.overrides?.isAfter?this.overrides.isAfter(n,i):ap(n,i),this.isBefore=(n,i)=>this.overrides?.isBefore?this.overrides.isBefore(n,i):ns(n,i),this.isDate=n=>this.overrides?.isDate?this.overrides.isDate(n):Zh(n),this.isSameDay=(n,i)=>this.overrides?.isSameDay?this.overrides.isSameDay(n,i):wd(n,i),this.isSameMonth=(n,i)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(n,i):YR(n,i),this.isSameYear=(n,i)=>this.overrides?.isSameYear?this.overrides.isSameYear(n,i):up(n,i),this.max=n=>this.overrides?.max?this.overrides.max(n):DA(n),this.min=n=>this.overrides?.min?this.overrides.min(n):FA(n),this.setMonth=(n,i)=>this.overrides?.setMonth?this.overrides.setMonth(n,i):dp(n,i),this.setYear=(n,i)=>this.overrides?.setYear?this.overrides.setYear(n,i):cp(n,i),this.startOfBroadcastWeek=(n,i)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(n,this):Sp(n,this),this.startOfDay=n=>this.overrides?.startOfDay?this.overrides.startOfDay(n):Ir(n),this.startOfISOWeek=n=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(n):ka(n),this.startOfMonth=n=>this.overrides?.startOfMonth?this.overrides.startOfMonth(n):ba(n),this.startOfWeek=(n,i)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(n,this.options):Mr(n,this.options),this.startOfYear=n=>this.overrides?.startOfYear?this.overrides.startOfYear(n):ts(n),this.options={locale:Vl,...t},this.overrides=r}getDigitMap(){const{numerals:t="latn"}=this.options,r=new Intl.NumberFormat("en-US",{numberingSystem:t}),n={};for(let i=0;i<10;i++)n[i.toString()]=r.format(i);return n}replaceDigits(t){const r=this.getDigitMap();return t.replace(/\d/g,n=>r[n]||n)}formatNumber(t){return this.replaceDigits(t.toString())}}const hr=new Lr;class Np{constructor(t,r,n=hr){this.date=t,this.displayMonth=r,this.outside=!!(r&&!n.isSameMonth(t,r)),this.dateLib=n}isEqualTo(t){return this.dateLib.isSameDay(t.date,this.date)&&this.dateLib.isSameMonth(t.displayMonth,this.displayMonth)}}class zS{constructor(t,r){this.date=t,this.weeks=r}}class XS{constructor(t,r){this.days=r,this.weekNumber=t}}function Fr(e,t,r=!1,n=hr){let{from:i,to:l}=e;const{differenceInCalendarDays:u,isSameDay:d}=n;return i&&l?(u(l,i)<0&&([i,l]=[l,i]),u(t,i)>=(r?1:0)&&u(l,t)>=(r?1:0)):!r&&l?d(l,t):!r&&i?d(i,t):!1}function Pp(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Md(e){return!!(e&&typeof e=="object"&&"from"in e)}function Dp(e){return!!(e&&typeof e=="object"&&"after"in e)}function Fp(e){return!!(e&&typeof e=="object"&&"before"in e)}function xp(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function Mp(e,t){return Array.isArray(e)&&e.every(t.isDate)}function xn(e,t,r=hr){const n=Array.isArray(t)?t:[t],{isSameDay:i,differenceInCalendarDays:l,isAfter:u}=r;return n.some(d=>{if(typeof d=="boolean")return d;if(r.isDate(d))return i(e,d);if(Mp(d,r))return d.includes(e);if(Md(d))return Fr(d,e,!1,r);if(xp(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(e.getDay()):d.dayOfWeek===e.getDay();if(Pp(d)){const f=l(d.before,e),g=l(d.after,e),m=f>0,h=g<0;return u(d.before,d.after)?h&&m:m||h}return Dp(d)?l(e,d.after)>0:Fp(d)?l(d.before,e)>0:typeof d=="function"?d(e):!1})}function ZS(e,t,r){const{disabled:n,hidden:i,modifiers:l,showOutsideDays:u,broadcastCalendar:d,today:f}=t,{isSameDay:g,isSameMonth:m,startOfMonth:h,isBefore:p,endOfMonth:b,isAfter:A}=r,N=t.startMonth&&h(t.startMonth),y=t.endMonth&&b(t.endMonth),S={[st.focused]:[],[st.outside]:[],[st.disabled]:[],[st.hidden]:[],[st.today]:[]},R={};for(const w of e){const{date:D,displayMonth:E}=w,I=!!(E&&!m(D,E)),M=!!(N&&p(D,N)),B=!!(y&&A(D,y)),U=!!(n&&xn(D,n,r)),Y=!!(i&&xn(D,i,r))||M||B||!d&&!u&&I||d&&u===!1&&I,H=g(D,f??r.today());I&&S.outside.push(w),U&&S.disabled.push(w),Y&&S.hidden.push(w),H&&S.today.push(w),l&&Object.keys(l).forEach(V=>{const j=l?.[V];j&&xn(D,j,r)&&(R[V]?R[V].push(w):R[V]=[w])})}return w=>{const D={[st.focused]:!1,[st.disabled]:!1,[st.hidden]:!1,[st.outside]:!1,[st.today]:!1},E={};for(const I in S){const M=S[I];D[I]=M.some(B=>B===w)}for(const I in R)E[I]=R[I].some(M=>M===w);return{...D,...E}}}function JS(e,t,r={}){return Object.entries(e).filter(([,i])=>i===!0).reduce((i,[l])=>(r[l]?i.push(r[l]):t[st[l]]?i.push(t[st[l]]):t[Wn[l]]&&i.push(t[Wn[l]]),i),[t[me.Day]])}function QS(e){return k.createElement("button",{...e})}function eN(e){return k.createElement("span",{...e})}function tN(e){const{size:t=24,orientation:r="left",className:n}=e;return k.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&k.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&k.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&k.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&k.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function nN(e){const{day:t,modifiers:r,...n}=e;return k.createElement("td",{...n})}function rN(e){const{day:t,modifiers:r,...n}=e,i=k.useRef(null);return k.useEffect(()=>{r.focused&&i.current?.focus()},[r.focused]),k.createElement("button",{ref:i,...n})}function aN(e){const{options:t,className:r,components:n,classNames:i,...l}=e,u=[i[me.Dropdown],r].join(" "),d=t?.find(({value:f})=>f===l.value);return k.createElement("span",{"data-disabled":l.disabled,className:i[me.DropdownRoot]},k.createElement(n.Select,{className:u,...l},t?.map(({value:f,label:g,disabled:m})=>k.createElement(n.Option,{key:f,value:f,disabled:m},g))),k.createElement("span",{className:i[me.CaptionLabel],"aria-hidden":!0},d?.label,k.createElement(n.Chevron,{orientation:"down",size:18,className:i[me.Chevron]})))}function iN(e){return k.createElement("div",{...e})}function sN(e){return k.createElement("div",{...e})}function lN(e){const{calendarMonth:t,displayIndex:r,...n}=e;return k.createElement("div",{...n},e.children)}function oN(e){const{calendarMonth:t,displayIndex:r,...n}=e;return k.createElement("div",{...n})}function uN(e){return k.createElement("table",{...e})}function dN(e){return k.createElement("div",{...e})}const Ip=T.createContext(void 0);function Sa(){const e=T.useContext(Ip);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function cN(e){const{components:t}=Sa();return k.createElement(t.Dropdown,{...e})}function fN(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:i,...l}=e,{components:u,classNames:d,labels:{labelPrevious:f,labelNext:g}}=Sa(),m=T.useCallback(p=>{i&&r?.(p)},[i,r]),h=T.useCallback(p=>{n&&t?.(p)},[n,t]);return k.createElement("nav",{...l},k.createElement(u.PreviousMonthButton,{type:"button",className:d[me.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":f(n),onClick:h},k.createElement(u.Chevron,{disabled:n?void 0:!0,className:d[me.Chevron],orientation:"left"})),k.createElement(u.NextMonthButton,{type:"button",className:d[me.NextMonthButton],tabIndex:i?void 0:-1,"aria-disabled":i?void 0:!0,"aria-label":g(i),onClick:m},k.createElement(u.Chevron,{disabled:i?void 0:!0,orientation:"right",className:d[me.Chevron]})))}function mN(e){const{components:t}=Sa();return k.createElement(t.Button,{...e})}function gN(e){return k.createElement("option",{...e})}function hN(e){const{components:t}=Sa();return k.createElement(t.Button,{...e})}function pN(e){const{rootRef:t,...r}=e;return k.createElement("div",{...r,ref:t})}function vN(e){return k.createElement("select",{...e})}function yN(e){const{week:t,...r}=e;return k.createElement("tr",{...r})}function kN(e){return k.createElement("th",{...e})}function bN(e){return k.createElement("thead",{"aria-hidden":!0},k.createElement("tr",{...e}))}function _N(e){const{week:t,...r}=e;return k.createElement("th",{...r})}function EN(e){return k.createElement("th",{...e})}function TN(e){return k.createElement("tbody",{...e})}function wN(e){const{components:t}=Sa();return k.createElement(t.Dropdown,{...e})}const ON=Object.freeze(Object.defineProperty({__proto__:null,Button:QS,CaptionLabel:eN,Chevron:tN,Day:nN,DayButton:rN,Dropdown:aN,DropdownNav:iN,Footer:sN,Month:lN,MonthCaption:oN,MonthGrid:uN,Months:dN,MonthsDropdown:cN,Nav:fN,NextMonthButton:mN,Option:gN,PreviousMonthButton:hN,Root:pN,Select:vN,Week:yN,WeekNumber:_N,WeekNumberHeader:EN,Weekday:kN,Weekdays:bN,Weeks:TN,YearsDropdown:wN},Symbol.toStringTag,{value:"Module"}));function AN(e){return{...ON,...e}}function RN(e){const t={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([r,n])=>{r.startsWith("data-")&&(t[r]=n)}),t}function SN(){const e={};for(const t in me)e[me[t]]=`rdp-${me[t]}`;for(const t in st)e[st[t]]=`rdp-${st[t]}`;for(const t in Wn)e[Wn[t]]=`rdp-${Wn[t]}`;for(const t in bn)e[bn[t]]=`rdp-${bn[t]}`;return e}function Lp(e,t,r){return(r??new Lr(t)).format(e,"LLLL y")}const NN=Lp;function PN(e,t,r){return(r??new Lr(t)).format(e,"d")}function DN(e,t=hr){return t.format(e,"LLLL")}function FN(e,t=hr){return e<10?t.formatNumber(`0${e.toLocaleString()}`):t.formatNumber(`${e.toLocaleString()}`)}function xN(){return""}function MN(e,t,r){return(r??new Lr(t)).format(e,"cccccc")}function jp(e,t=hr){return t.format(e,"yyyy")}const IN=jp,LN=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:Lp,formatDay:PN,formatMonthCaption:NN,formatMonthDropdown:DN,formatWeekNumber:FN,formatWeekNumberHeader:xN,formatWeekdayName:MN,formatYearCaption:IN,formatYearDropdown:jp},Symbol.toStringTag,{value:"Module"}));function jN(e){return e?.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e?.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...LN,...e}}function BN(e,t,r,n,i){const{startOfMonth:l,startOfYear:u,endOfYear:d,eachMonthOfInterval:f,getMonth:g}=i;return f({start:u(e),end:d(e)}).map(p=>{const b=n.formatMonthDropdown(p,i),A=g(p),N=t&&p<l(t)||r&&p>l(r)||!1;return{value:A,label:b,disabled:N}})}function CN(e,t={},r={}){let n={...t?.[me.Day]};return Object.entries(e).filter(([,i])=>i===!0).forEach(([i])=>{n={...n,...r?.[i]}}),n}function VN(e,t,r){const n=e.today(),i=t?e.startOfISOWeek(n):e.startOfWeek(n),l=[];for(let u=0;u<7;u++){const d=e.addDays(i,u);l.push(d)}return l}function KN(e,t,r,n){if(!e||!t)return;const{startOfYear:i,endOfYear:l,addYears:u,getYear:d,isBefore:f,isSameYear:g}=n,m=i(e),h=l(t),p=[];let b=m;for(;f(b,h)||g(b,h);)p.push(b),b=u(b,1);return p.map(A=>{const N=r.formatYearDropdown(A,n);return{value:d(A),label:N,disabled:!1}})}function Bp(e,t,r){return(r??new Lr(t)).format(e,"LLLL y")}const UN=Bp;function qN(e,t,r,n){let i=(n??new Lr(r)).format(e,"PPPP");return t?.today&&(i=`Today, ${i}`),i}function Cp(e,t,r,n){let i=(n??new Lr(r)).format(e,"PPPP");return t.today&&(i=`Today, ${i}`),t.selected&&(i=`${i}, selected`),i}const GN=Cp;function HN(){return""}function $N(e){return"Choose the Month"}function WN(e){return"Go to the Next Month"}function YN(e){return"Go to the Previous Month"}function zN(e,t,r){return(r??new Lr(t)).format(e,"cccc")}function XN(e,t){return`Week ${e}`}function ZN(e){return"Week Number"}function JN(e){return"Choose the Year"}const QN=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:UN,labelDay:GN,labelDayButton:Cp,labelGrid:Bp,labelGridcell:qN,labelMonthDropdown:$N,labelNav:HN,labelNext:WN,labelPrevious:YN,labelWeekNumber:XN,labelWeekNumberHeader:ZN,labelWeekday:zN,labelYearDropdown:JN},Symbol.toStringTag,{value:"Module"})),rs=e=>e instanceof HTMLElement?e:null,yu=e=>[...e.querySelectorAll("[data-animated-month]")??[]],eP=e=>rs(e.querySelector("[data-animated-month]")),ku=e=>rs(e.querySelector("[data-animated-caption]")),bu=e=>rs(e.querySelector("[data-animated-weeks]")),tP=e=>rs(e.querySelector("[data-animated-nav]")),nP=e=>rs(e.querySelector("[data-animated-weekdays]"));function rP(e,t,{classNames:r,months:n,focused:i,dateLib:l}){const u=T.useRef(null),d=T.useRef(n),f=T.useRef(!1);T.useLayoutEffect(()=>{const g=d.current;if(d.current=n,!t||!e.current||!(e.current instanceof HTMLElement)||n.length===0||g.length===0||n.length!==g.length)return;const m=l.isSameMonth(n[0].date,g[0].date),h=l.isAfter(n[0].date,g[0].date),p=h?r[bn.caption_after_enter]:r[bn.caption_before_enter],b=h?r[bn.weeks_after_enter]:r[bn.weeks_before_enter],A=u.current,N=e.current.cloneNode(!0);if(N instanceof HTMLElement?(yu(N).forEach(w=>{if(!(w instanceof HTMLElement))return;const D=eP(w);D&&w.contains(D)&&w.removeChild(D);const E=ku(w);E&&E.classList.remove(p);const I=bu(w);I&&I.classList.remove(b)}),u.current=N):u.current=null,f.current||m||i)return;const y=A instanceof HTMLElement?yu(A):[],S=yu(e.current);if(S&&S.every(R=>R instanceof HTMLElement)&&y&&y.every(R=>R instanceof HTMLElement)){f.current=!0,e.current.style.isolation="isolate";const R=tP(e.current);R&&(R.style.zIndex="1"),S.forEach((w,D)=>{const E=y[D];if(!E)return;w.style.position="relative",w.style.overflow="hidden";const I=ku(w);I&&I.classList.add(p);const M=bu(w);M&&M.classList.add(b);const B=()=>{f.current=!1,e.current&&(e.current.style.isolation=""),R&&(R.style.zIndex=""),I&&I.classList.remove(p),M&&M.classList.remove(b),w.style.position="",w.style.overflow="",w.contains(E)&&w.removeChild(E)};E.style.pointerEvents="none",E.style.position="absolute",E.style.overflow="hidden",E.setAttribute("aria-hidden","true");const U=nP(E);U&&(U.style.opacity="0");const Y=ku(E);Y&&(Y.classList.add(h?r[bn.caption_before_exit]:r[bn.caption_after_exit]),Y.addEventListener("animationend",B));const H=bu(E);H&&H.classList.add(h?r[bn.weeks_before_exit]:r[bn.weeks_after_exit]),w.insertBefore(E,w.firstChild)})}})}function aP(e,t,r,n){const i=e[0],l=e[e.length-1],{ISOWeek:u,fixedWeeks:d,broadcastCalendar:f}=r??{},{addDays:g,differenceInCalendarDays:m,differenceInCalendarMonths:h,endOfBroadcastWeek:p,endOfISOWeek:b,endOfMonth:A,endOfWeek:N,isAfter:y,startOfBroadcastWeek:S,startOfISOWeek:R,startOfWeek:w}=n,D=f?S(i,n):u?R(i):w(i),E=f?p(l):u?b(A(l)):N(A(l)),I=m(E,D),M=h(l,i)+1,B=[];for(let H=0;H<=I;H++){const V=g(D,H);if(t&&y(V,t))break;B.push(V)}const Y=(f?35:42)*M;if(d&&B.length<Y){const H=Y-B.length;for(let V=0;V<H;V++){const j=g(B[B.length-1],1);B.push(j)}}return B}function iP(e){const t=[];return e.reduce((r,n)=>{const i=n.weeks.reduce((l,u)=>[...l,...u.days],t);return[...r,...i]},t)}function sP(e,t,r,n){const{numberOfMonths:i=1}=r,l=[];for(let u=0;u<i;u++){const d=n.addMonths(e,u);if(t&&d>t)break;l.push(d)}return l}function Qm(e,t){const{month:r,defaultMonth:n,today:i=t.today(),numberOfMonths:l=1,endMonth:u,startMonth:d}=e;let f=r||n||i;const{differenceInCalendarMonths:g,addMonths:m,startOfMonth:h}=t;if(u&&g(u,f)<0){const p=-1*(l-1);f=m(u,p)}return d&&g(f,d)<0&&(f=d),h(f)}function lP(e,t,r,n){const{addDays:i,endOfBroadcastWeek:l,endOfISOWeek:u,endOfMonth:d,endOfWeek:f,getISOWeek:g,getWeek:m,startOfBroadcastWeek:h,startOfISOWeek:p,startOfWeek:b}=n,A=e.reduce((N,y)=>{const S=r.broadcastCalendar?h(y,n):r.ISOWeek?p(y):b(y),R=r.broadcastCalendar?l(y):r.ISOWeek?u(d(y)):f(d(y)),w=t.filter(M=>M>=S&&M<=R),D=r.broadcastCalendar?35:42;if(r.fixedWeeks&&w.length<D){const M=t.filter(B=>{const U=D-w.length;return B>R&&B<=i(R,U)});w.push(...M)}const E=w.reduce((M,B)=>{const U=r.ISOWeek?g(B):m(B),Y=M.find(V=>V.weekNumber===U),H=new Np(B,y,n);return Y?Y.days.push(H):M.push(new XS(U,[H])),M},[]),I=new zS(y,E);return N.push(I),N},[]);return r.reverseMonths?A.reverse():A}function oP(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:i,startOfDay:l,startOfMonth:u,endOfMonth:d,addYears:f,endOfYear:g,newDate:m,today:h}=t,{fromYear:p,toYear:b,fromMonth:A,toMonth:N}=e;!r&&A&&(r=A),!r&&p&&(r=t.newDate(p,0,1)),!n&&N&&(n=N),!n&&b&&(n=m(b,11,31));const y=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return r?r=u(r):p?r=m(p,0,1):!r&&y&&(r=i(f(e.today??h(),-100))),n?n=d(n):b?n=m(b,11,31):!n&&y&&(n=g(e.today??h())),[r&&l(r),n&&l(n)]}function uP(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:i,numberOfMonths:l=1}=r,{startOfMonth:u,addMonths:d,differenceInCalendarMonths:f}=n,g=i?l:1,m=u(e);if(!t)return d(m,g);if(!(f(t,e)<l))return d(m,g)}function dP(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:i,numberOfMonths:l}=r,{startOfMonth:u,addMonths:d,differenceInCalendarMonths:f}=n,g=i?l??1:1,m=u(e);if(!t)return d(m,-g);if(!(f(m,t)<=0))return d(m,-g)}function cP(e){const t=[];return e.reduce((r,n)=>[...r,...n.weeks],t)}function Wl(e,t){const[r,n]=T.useState(e);return[t===void 0?r:t,n]}function fP(e,t){const[r,n]=oP(e,t),{startOfMonth:i,endOfMonth:l}=t,u=Qm(e,t),[d,f]=Wl(u,e.month?u:void 0);T.useEffect(()=>{const I=Qm(e,t);f(I)},[e.timeZone]);const g=sP(d,n,e,t),m=aP(g,e.endMonth?l(e.endMonth):void 0,e,t),h=lP(g,m,e,t),p=cP(h),b=iP(h),A=dP(d,r,e,t),N=uP(d,n,e,t),{disableNavigation:y,onMonthChange:S}=e,R=I=>p.some(M=>M.days.some(B=>B.isEqualTo(I))),w=I=>{if(y)return;let M=i(I);r&&M<i(r)&&(M=i(r)),n&&M>i(n)&&(M=i(n)),f(M),S?.(M)};return{months:h,weeks:p,days:b,navStart:r,navEnd:n,previousMonth:A,nextMonth:N,goToMonth:w,goToDay:I=>{R(I)||w(I.date)}}}var rr;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(rr||(rr={}));function eg(e){return!e[st.disabled]&&!e[st.hidden]&&!e[st.outside]}function mP(e,t,r,n){let i,l=-1;for(const u of e){const d=t(u);eg(d)&&(d[st.focused]&&l<rr.FocusedModifier?(i=u,l=rr.FocusedModifier):n?.isEqualTo(u)&&l<rr.LastFocused?(i=u,l=rr.LastFocused):r(u.date)&&l<rr.Selected?(i=u,l=rr.Selected):d[st.today]&&l<rr.Today&&(i=u,l=rr.Today))}return i||(i=e.find(u=>eg(t(u)))),i}function gP(e,t,r,n,i,l,u){const{ISOWeek:d,broadcastCalendar:f}=l,{addDays:g,addMonths:m,addWeeks:h,addYears:p,endOfBroadcastWeek:b,endOfISOWeek:A,endOfWeek:N,max:y,min:S,startOfBroadcastWeek:R,startOfISOWeek:w,startOfWeek:D}=u;let I={day:g,week:h,month:m,year:p,startOfWeek:M=>f?R(M,u):d?w(M):D(M),endOfWeek:M=>f?b(M):d?A(M):N(M)}[e](r,t==="after"?1:-1);return t==="before"&&n?I=y([n,I]):t==="after"&&i&&(I=S([i,I])),I}function Vp(e,t,r,n,i,l,u,d=0){if(d>365)return;const f=gP(e,t,r.date,n,i,l,u),g=!!(l.disabled&&xn(f,l.disabled,u)),m=!!(l.hidden&&xn(f,l.hidden,u)),h=f,p=new Np(f,h,u);return!g&&!m?p:Vp(e,t,p,n,i,l,u,d+1)}function hP(e,t,r,n,i){const{autoFocus:l}=e,[u,d]=T.useState(),f=mP(t.days,r,n||(()=>!1),u),[g,m]=T.useState(l?f:void 0);return{isFocusTarget:N=>!!f?.isEqualTo(N),setFocused:m,focused:g,blur:()=>{d(g),m(void 0)},moveFocus:(N,y)=>{if(!g)return;const S=Vp(N,y,g,t.navStart,t.navEnd,e,i);S&&(t.goToDay(S),m(S))}}}function pP(e,t){const{selected:r,required:n,onSelect:i}=e,[l,u]=Wl(r,i?r:void 0),d=i?r:l,{isSameDay:f}=t,g=b=>d?.some(A=>f(A,b))??!1,{min:m,max:h}=e;return{selected:d,select:(b,A,N)=>{let y=[...d??[]];if(g(b)){if(d?.length===m||n&&d?.length===1)return;y=d?.filter(S=>!f(S,b))}else d?.length===h?y=[b]:y=[...y,b];return i||u(y),i?.(y,b,A,N),y},isSelected:g}}function vP(e,t,r=0,n=0,i=!1,l=hr){const{from:u,to:d}=t||{},{isSameDay:f,isAfter:g,isBefore:m}=l;let h;if(!u&&!d)h={from:e,to:r>0?void 0:e};else if(u&&!d)f(u,e)?i?h={from:u,to:void 0}:h=void 0:m(e,u)?h={from:e,to:u}:h={from:u,to:e};else if(u&&d)if(f(u,e)&&f(d,e))i?h={from:u,to:d}:h=void 0;else if(f(u,e))h={from:u,to:r>0?void 0:e};else if(f(d,e))h={from:e,to:r>0?void 0:e};else if(m(e,u))h={from:e,to:d};else if(g(e,u))h={from:u,to:e};else if(g(e,d))h={from:u,to:e};else throw new Error("Invalid range");if(h?.from&&h?.to){const p=l.differenceInCalendarDays(h.to,h.from);n>0&&p>n?h={from:e,to:void 0}:r>1&&p<r&&(h={from:e,to:void 0})}return h}function yP(e,t,r=hr){const n=Array.isArray(t)?t:[t];let i=e.from;const l=r.differenceInCalendarDays(e.to,e.from),u=Math.min(l,6);for(let d=0;d<=u;d++){if(n.includes(i.getDay()))return!0;i=r.addDays(i,1)}return!1}function tg(e,t,r=hr){return Fr(e,t.from,!1,r)||Fr(e,t.to,!1,r)||Fr(t,e.from,!1,r)||Fr(t,e.to,!1,r)}function kP(e,t,r=hr){const n=Array.isArray(t)?t:[t];if(n.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:r.isDate(d)?Fr(e,d,!1,r):Mp(d,r)?d.some(f=>Fr(e,f,!1,r)):Md(d)?d.from&&d.to?tg(e,{from:d.from,to:d.to},r):!1:xp(d)?yP(e,d.dayOfWeek,r):Pp(d)?r.isAfter(d.before,d.after)?tg(e,{from:r.addDays(d.after,1),to:r.addDays(d.before,-1)},r):xn(e.from,d,r)||xn(e.to,d,r):Dp(d)||Fp(d)?xn(e.from,d,r)||xn(e.to,d,r):!1))return!0;const u=n.filter(d=>typeof d=="function");if(u.length){let d=e.from;const f=r.differenceInCalendarDays(e.to,e.from);for(let g=0;g<=f;g++){if(u.some(m=>m(d)))return!0;d=r.addDays(d,1)}}return!1}function bP(e,t){const{disabled:r,excludeDisabled:n,selected:i,required:l,onSelect:u}=e,[d,f]=Wl(i,u?i:void 0),g=u?i:d;return{selected:g,select:(p,b,A)=>{const{min:N,max:y}=e,S=p?vP(p,g,N,y,l,t):void 0;return n&&r&&S?.from&&S.to&&kP({from:S.from,to:S.to},r,t)&&(S.from=p,S.to=void 0),u||f(S),u?.(S,p,b,A),S},isSelected:p=>g&&Fr(g,p,!1,t)}}function _P(e,t){const{selected:r,required:n,onSelect:i}=e,[l,u]=Wl(r,i?r:void 0),d=i?r:l,{isSameDay:f}=t;return{selected:d,select:(h,p,b)=>{let A=h;return!n&&d&&d&&f(h,d)&&(A=void 0),i||u(A),i?.(A,h,p,b),A},isSelected:h=>d?f(d,h):!1}}function EP(e,t){const r=_P(e,t),n=pP(e,t),i=bP(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return i;default:return}}function TP(e){let t=e;t.timeZone&&(t={...e},t.today&&(t.today=new Vt(t.today,t.timeZone)),t.month&&(t.month=new Vt(t.month,t.timeZone)),t.defaultMonth&&(t.defaultMonth=new Vt(t.defaultMonth,t.timeZone)),t.startMonth&&(t.startMonth=new Vt(t.startMonth,t.timeZone)),t.endMonth&&(t.endMonth=new Vt(t.endMonth,t.timeZone)),t.mode==="single"&&t.selected?t.selected=new Vt(t.selected,t.timeZone):t.mode==="multiple"&&t.selected?t.selected=t.selected?.map(we=>new Vt(we,t.timeZone)):t.mode==="range"&&t.selected&&(t.selected={from:t.selected.from?new Vt(t.selected.from,t.timeZone):void 0,to:t.selected.to?new Vt(t.selected.to,t.timeZone):void 0}));const{components:r,formatters:n,labels:i,dateLib:l,locale:u,classNames:d}=T.useMemo(()=>{const we={...Vl,...t.locale};return{dateLib:new Lr({locale:we,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib),components:AN(t.components),formatters:jN(t.formatters),labels:{...QN,...t.labels},locale:we,classNames:{...SN(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]),{captionLayout:f,mode:g,navLayout:m,numberOfMonths:h=1,onDayBlur:p,onDayClick:b,onDayFocus:A,onDayKeyDown:N,onDayMouseEnter:y,onDayMouseLeave:S,onNextClick:R,onPrevClick:w,showWeekNumber:D,styles:E}=t,{formatCaption:I,formatDay:M,formatMonthDropdown:B,formatWeekNumber:U,formatWeekNumberHeader:Y,formatWeekdayName:H,formatYearDropdown:V}=n,j=fP(t,l),{days:Z,months:te,navStart:ne,navEnd:oe,previousMonth:Q,nextMonth:le,goToMonth:_e}=j,pe=ZS(Z,t,l),{isSelected:Qe,select:ot,selected:dn}=EP(t,l)??{},{blur:ve,focused:be,isFocusTarget:et,moveFocus:tt,setFocused:_t}=hP(t,j,pe,Qe??(()=>!1),l),{labelDayButton:cn,labelGridcell:jt,labelGrid:xt,labelMonthDropdown:Jt,labelNav:We,labelPrevious:Et,labelNext:fn,labelWeekday:ft,labelWeekNumber:mn,labelWeekNumberHeader:Qt,labelYearDropdown:F}=i,K=T.useMemo(()=>VN(l,t.ISOWeek),[l,t.ISOWeek]),$=g!==void 0||b!==void 0,ae=T.useCallback(()=>{Q&&(_e(Q),w?.(Q))},[Q,_e,w]),re=T.useCallback(()=>{le&&(_e(le),R?.(le))},[_e,le,R]),ee=T.useCallback((we,Xe)=>$e=>{$e.preventDefault(),$e.stopPropagation(),_t(we),ot?.(we.date,Xe,$e),b?.(we.date,Xe,$e)},[ot,b,_t]),fe=T.useCallback((we,Xe)=>$e=>{_t(we),A?.(we.date,Xe,$e)},[A,_t]),Se=T.useCallback((we,Xe)=>$e=>{ve(),p?.(we.date,Xe,$e)},[ve,p]),Fe=T.useCallback((we,Xe)=>$e=>{const Bn={ArrowLeft:["day",t.dir==="rtl"?"after":"before"],ArrowRight:["day",t.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[$e.shiftKey?"year":"month","before"],PageDown:[$e.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Bn[$e.key]){$e.preventDefault(),$e.stopPropagation();const[tn,Na]=Bn[$e.key];tt(tn,Na)}N?.(we.date,Xe,$e)},[tt,N,t.dir]),Nt=T.useCallback((we,Xe)=>$e=>{y?.(we.date,Xe,$e)},[y]),Qn=T.useCallback((we,Xe)=>$e=>{S?.(we.date,Xe,$e)},[S]),en=T.useCallback(we=>Xe=>{const $e=Number(Xe.target.value),Bn=l.setMonth(l.startOfMonth(we),$e);_e(Bn)},[l,_e]),Qr=T.useCallback(we=>Xe=>{const $e=Number(Xe.target.value),Bn=l.setYear(l.startOfMonth(we),$e);_e(Bn)},[l,_e]),{className:vr,style:yr}=T.useMemo(()=>({className:[d[me.Root],t.className].filter(Boolean).join(" "),style:{...E?.[me.Root],...t.style}}),[d,t.className,t.style,E]),ea=RN(t),kr=T.useRef(null);rP(kr,!!t.animate,{classNames:d,months:te,focused:be,dateLib:l});const ta={dayPickerProps:t,selected:dn,select:ot,isSelected:Qe,months:te,nextMonth:le,previousMonth:Q,goToMonth:_e,getModifiers:pe,components:r,classNames:d,styles:E,labels:i,formatters:n};return k.createElement(Ip.Provider,{value:ta},k.createElement(r.Root,{rootRef:t.animate?kr:void 0,className:vr,style:yr,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],...ea},k.createElement(r.Months,{className:d[me.Months],style:E?.[me.Months]},!t.hideNavigation&&!m&&k.createElement(r.Nav,{"data-animated-nav":t.animate?"true":void 0,className:d[me.Nav],style:E?.[me.Nav],"aria-label":We(),onPreviousClick:ae,onNextClick:re,previousMonth:Q,nextMonth:le}),te.map((we,Xe)=>{const $e=BN(we.date,ne,oe,n,l),Bn=KN(ne,oe,n,l);return k.createElement(r.Month,{"data-animated-month":t.animate?"true":void 0,className:d[me.Month],style:E?.[me.Month],key:Xe,displayIndex:Xe,calendarMonth:we},m==="around"&&!t.hideNavigation&&Xe===0&&k.createElement(r.PreviousMonthButton,{type:"button",className:d[me.PreviousMonthButton],tabIndex:Q?void 0:-1,"aria-disabled":Q?void 0:!0,"aria-label":Et(Q),onClick:ae,"data-animated-button":t.animate?"true":void 0},k.createElement(r.Chevron,{disabled:Q?void 0:!0,className:d[me.Chevron],orientation:t.dir==="rtl"?"right":"left"})),k.createElement(r.MonthCaption,{"data-animated-caption":t.animate?"true":void 0,className:d[me.MonthCaption],style:E?.[me.MonthCaption],calendarMonth:we,displayIndex:Xe},f?.startsWith("dropdown")?k.createElement(r.DropdownNav,{className:d[me.Dropdowns],style:E?.[me.Dropdowns]},f==="dropdown"||f==="dropdown-months"?k.createElement(r.MonthsDropdown,{className:d[me.MonthsDropdown],"aria-label":Jt(),classNames:d,components:r,disabled:!!t.disableNavigation,onChange:en(we.date),options:$e,style:E?.[me.Dropdown],value:l.getMonth(we.date)}):k.createElement("span",null,B(we.date,l)),f==="dropdown"||f==="dropdown-years"?k.createElement(r.YearsDropdown,{className:d[me.YearsDropdown],"aria-label":F(l.options),classNames:d,components:r,disabled:!!t.disableNavigation,onChange:Qr(we.date),options:Bn,style:E?.[me.Dropdown],value:l.getYear(we.date)}):k.createElement("span",null,V(we.date,l)),k.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},I(we.date,l.options,l))):k.createElement(r.CaptionLabel,{className:d[me.CaptionLabel],role:"status","aria-live":"polite"},I(we.date,l.options,l))),m==="around"&&!t.hideNavigation&&Xe===h-1&&k.createElement(r.NextMonthButton,{type:"button",className:d[me.NextMonthButton],tabIndex:le?void 0:-1,"aria-disabled":le?void 0:!0,"aria-label":fn(le),onClick:re,"data-animated-button":t.animate?"true":void 0},k.createElement(r.Chevron,{disabled:le?void 0:!0,className:d[me.Chevron],orientation:t.dir==="rtl"?"left":"right"})),Xe===h-1&&m==="after"&&!t.hideNavigation&&k.createElement(r.Nav,{"data-animated-nav":t.animate?"true":void 0,className:d[me.Nav],style:E?.[me.Nav],"aria-label":We(),onPreviousClick:ae,onNextClick:re,previousMonth:Q,nextMonth:le}),k.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":xt(we.date,l.options,l)||void 0,className:d[me.MonthGrid],style:E?.[me.MonthGrid]},!t.hideWeekdays&&k.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?"true":void 0,className:d[me.Weekdays],style:E?.[me.Weekdays]},D&&k.createElement(r.WeekNumberHeader,{"aria-label":Qt(l.options),className:d[me.WeekNumberHeader],style:E?.[me.WeekNumberHeader],scope:"col"},Y()),K.map((tn,Na)=>k.createElement(r.Weekday,{"aria-label":ft(tn,l.options,l),className:d[me.Weekday],key:Na,style:E?.[me.Weekday],scope:"col"},H(tn,l.options,l)))),k.createElement(r.Weeks,{"data-animated-weeks":t.animate?"true":void 0,className:d[me.Weeks],style:E?.[me.Weeks]},we.weeks.map((tn,Na)=>k.createElement(r.Week,{className:d[me.Week],key:tn.weekNumber,style:E?.[me.Week],week:tn},D&&k.createElement(r.WeekNumber,{week:tn,style:E?.[me.WeekNumber],"aria-label":mn(tn.weekNumber,{locale:u}),className:d[me.WeekNumber],scope:"row",role:"rowheader"},U(tn.weekNumber,l)),tn.days.map(Pt=>{const{date:Tn}=Pt,Be=pe(Pt);if(Be[st.focused]=!Be.hidden&&!!be?.isEqualTo(Pt),Be[Wn.selected]=Qe?.(Tn)||Be.selected,Md(dn)){const{from:mi,to:na}=dn;Be[Wn.range_start]=!!(mi&&na&&l.isSameDay(Tn,mi)),Be[Wn.range_end]=!!(mi&&na&&l.isSameDay(Tn,na)),Be[Wn.range_middle]=Fr(dn,Tn,!0,l)}const ds=CN(Be,E,t.modifiersStyles),eo=JS(Be,d,t.modifiersClassNames),to=!$&&!Be.hidden?jt(Tn,Be,l.options,l):void 0;return k.createElement(r.Day,{key:`${l.format(Tn,"yyyy-MM-dd")}_${l.format(Pt.displayMonth,"yyyy-MM")}`,day:Pt,modifiers:Be,className:eo.join(" "),style:ds,role:"gridcell","aria-selected":Be.selected||void 0,"aria-label":to,"data-day":l.format(Tn,"yyyy-MM-dd"),"data-month":Pt.outside?l.format(Tn,"yyyy-MM"):void 0,"data-selected":Be.selected||void 0,"data-disabled":Be.disabled||void 0,"data-hidden":Be.hidden||void 0,"data-outside":Pt.outside||void 0,"data-focused":Be.focused||void 0,"data-today":Be.today||void 0},!Be.hidden&&$?k.createElement(r.DayButton,{className:d[me.DayButton],style:E?.[me.DayButton],type:"button",day:Pt,modifiers:Be,disabled:Be.disabled||void 0,tabIndex:et(Pt)?0:-1,"aria-label":cn(Tn,Be,l.options,l),onClick:ee(Pt,Be),onBlur:Se(Pt,Be),onFocus:fe(Pt,Be),onKeyDown:Fe(Pt,Be),onMouseEnter:Nt(Pt,Be),onMouseLeave:Qn(Pt,Be)},M(Tn,l.options,l)):!Be.hidden&&M(Pt.date,l.options,l))}))))))})),t.footer&&k.createElement(r.Footer,{className:d[me.Footer],style:E?.[me.Footer],role:"status","aria-live":"polite"},t.footer)))}var wP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Kp=T.forwardRef((e,t)=>{var{as:r="div",className:n,above:i,below:l,variant:u,asChild:d}=e,f=wP(e,["as","className","above","below","variant","asChild"]);const{cn:g}=ge(),m=u==="show"?i:l,h=u==="show"?l:i,p=d?jl:r;return k.createElement(p,Object.assign({},f,{ref:t,className:g("navds-responsive",n,{[`navds-responsive__above--${m}`]:m,[`navds-responsive__below--${h}`]:h})}))}),OP=T.forwardRef((e,t)=>k.createElement(Kp,Object.assign({},e,{ref:t,variant:"hide"}))),Id=T.forwardRef((e,t)=>k.createElement(Kp,Object.assign({},e,{ref:t,variant:"show"})));function Yn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function AP({day:e,fromDate:t,toDate:r}){const n=r&&Yr(e,Ir(r))>0,i=t&&Yr(Ir(t),e)>0;return n||i||!1}const Up="dd.MM.yyyy",RP="MMMM yyyy",qp=[Up,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...qp];const _u=(e,t,r,n,i)=>{let l;const u=qp;if(i){for(const d of u)if(l=ei(e,d,t,{locale:r}),Yn(l)&&!Eu(e,t,r,u))return l;for(const d of[...u.map(f=>f.replace("yyyy","yy"))])if(l=ei(e,d,t,{locale:r}),Yn(l)&&Eu(e,t,r,u)){const f=SP(e,d,t,r);return Yn(new Date(f))?new Date(f):new Date("Invalid date")}return new Date("Invalid date")}for(const d of u)if(l=ei(e,d,t,{locale:r}),Yn(l)&&!Eu(e,t,r,u))return l;return new Date("Invalid date")};function Eu(e,t,r,n){let i;const l=n.map(u=>u.replace("yyyy","yy"));for(const u of l)if(i=ei(e,u,t,{locale:r}),Yn(i))return!0;return!1}function SP(e,t,r,n){const i=ei(ng(e,"19"),t.replace("yy","yyyy"),r,{locale:n}),l=ei(ng(e,"20"),t.replace("yy","yyyy"),r,{locale:n});return Yn(i)&&Yn(l)?ns(i,ZR(new Date,{years:80}))?l:i:new Date("Invalid date")}function ng(e,t){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${t}${r}`}const Ni=(e,t,r,n)=>_a(e,n??Up,{locale:t}),NP=({month:e,start:t,end:r})=>{if(!e)return;let n=e;return t&&ns(n,t)&&(n=t),r&&ap(n,r)&&(n=r),ba(n)};function PP(e,t,r,n){return Qh({start:ts(e),end:Gl(e)}).map(u=>{const d=_a(u,"LLLL",{locale:n}),f=Sd(u),g=t&&u<ba(t)||r&&u>ba(r)||!1;return{value:f,label:d,disabled:g}})}function DP(e,t,r){if(!e||!t)return;const n=ts(e),i=Gl(t),l=[];let u=n;for(;ns(u,i)||up(u,i);)l.push(u),u=Td(u,1);return l.map(d=>{const f=_a(d,"yyyy",{locale:r});return{value:Nd(d),label:f,disabled:!1}})}function FP({captionLayout:e,startMonth:t,endMonth:r,today:n}){const i=e==="dropdown",l=n??new Date;return t?t=ba(t):!t&&i&&(t=ts(Td(l,-100))),r?r=Jh(r):!r&&i&&(r=Gl(l)),[t&&Ir(t),r&&Ir(r)]}var xP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const MP=e=>{var{day:t,modifiers:r,locale:n,children:i}=e,l=xP(e,["day","modifiers","locale","children"]);const{cn:u}=ge(),d=T.useRef(null);return T.useEffect(()=>{var f;r.focused&&((f=d.current)===null||f===void 0||f.focus())},[r.focused]),r.hidden?k.createElement(k.Fragment,null):k.createElement("button",Object.assign({},l,{ref:d,"aria-hidden":t.outside,"aria-pressed":!!r.selected,"aria-label":_a(t.date,"cccc d",{locale:n}),"data-pressed":r.selected,"data-today":r.today||void 0,className:u(l.className,{"rdp-day_disabled":r.disabled,"rdp-day_selected":r.selected,"rdp-day_range_start":r.range_start,"rdp-day_range_middle":r.range_middle,"rdp-day_range_end":r.range_end,"rdp-day_today":r.today,"rdp-day_outside":r.outside,"rdp-day__weekend":r.weekend})}),i)};var IP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Cu=T.forwardRef((e,t)=>{const{inputProps:r,errorId:n,showErrorMsg:i,hasError:l,size:u,inputDescriptionId:d,readOnly:f}=Zr(e,"select"),{children:g,label:m,className:h,description:p,htmlSize:b,hideLabel:A=!1,style:N}=e,y=IP(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:S}=ge(),R={onMouseDown:w=>{f&&(w.preventDefault(),w.target.focus())},onKeyDown:w=>{f&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(w.key)&&w.preventDefault()}};return k.createElement("div",{className:S(h,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":f,"navds-select--error":l,"navds-select--readonly":f})},k.createElement(zn,{htmlFor:r.id,size:u,className:S("navds-form-field__label",{"navds-sr-only":A})},f&&k.createElement(Fd,null),m),!!p&&k.createElement(Rt,{className:S("navds-form-field__description",{"navds-sr-only":A}),id:d,size:u,as:"div"},p),k.createElement("div",{className:S("navds-select__container"),style:N},k.createElement("select",Object.assign({},Ft(y,["error","errorId","size","readOnly"]),r,R,{ref:t,className:S("navds-select__input","navds-body-short",`navds-body-short--${u??"medium"}`),size:b}),g),k.createElement(md,{className:S("navds-select__chevron"),"aria-hidden":!0})),k.createElement("div",{className:S("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},i&&k.createElement(Aa,{size:u,showIcon:!0},e.error)))}),Gp=({week:{weekNumber:e,days:t},onWeekNumberClick:r,className:n,style:i,showOnDesktop:l})=>{const u=$l().translate,{cn:d}=ge(),{getModifiers:f}=Sa(),g=T.useMemo(()=>t.filter(h=>{const p=f(h);return!(p.hidden||p.outside||p.disabled)}).length===0,[t,f]),m=l?Id:OP;return!r||g?k.createElement(m,{above:"sm",asChild:!0},k.createElement("td",{className:"rdp-cell"},k.createElement(fd,{as:"span",textColor:"subtle",className:n,style:i,"aria-label":u("weekNumber",{week:e})},e))):k.createElement(m,{above:"sm",asChild:!0},k.createElement("td",{className:d("rdp-cell",{"navds-date__week-wrapper":!l})},k.createElement(Gt,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":u("selectWeekNumber",{week:e}),style:i,className:d("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{r(e,t.map(h=>h.date))},icon:k.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},LP=({onWeekNumberClick:e,weeks:t})=>{const r=$l().translate,{cn:n}=ge(),i=Xr();return e?k.createElement(Id,{below:"sm",asChild:!0},k.createElement("table",{className:"rdp-table",role:"grid"},k.createElement("tbody",{className:"rdp-tbody"},k.createElement("tr",{className:n("rdp-row navds-date__week-row")},k.createElement(fd,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},k.createElement("span",{className:n("navds-date__week-wrapper"),id:i},r("week"))),t?.map(l=>k.createElement(Gp,{key:l.weekNumber,week:l,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var jP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const BP=e=>{var{children:t,calendarMonth:r,locale:n,onWeekNumberClick:i}=e,l=jP(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:u,goToMonth:d,previousMonth:f,nextMonth:g}=Sa(),{captionLayout:m}=u,{cn:h}=ge(),p=$l().translate,b=T.useCallback((w,D)=>{const E=Number(D.target.value),I=dp(ba(w),E);d(I)},[d]),A=T.useCallback((w,D)=>{const E=Number(D.target.value),I=cp(ba(w),E);d(I)},[d]),[N,y]=FP({captionLayout:m==="dropdown"?"dropdown":"label",startMonth:u.startMonth,endMonth:u.endMonth,today:u.today}),S=PP(r.date,N,y,n),R=DP(N,y,n);return k.createElement("div",Object.assign({},Ft(l,["displayIndex"])),k.createElement("div",{className:h("navds-date__caption")},m?.startsWith("dropdown")&&k.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:h("navds-sr-only")},_a(r.date,"LLLL y",{locale:n})),k.createElement(Gt,{variant:"tertiary-neutral",disabled:!f,onClick:()=>f&&d(f),icon:k.createElement(YT,{title:p("goToPreviousMonth")}),className:h("navds-date__caption-button"),type:"button"}),m?.startsWith("dropdown")?k.createElement("div",{className:h("navds-date__caption")},k.createElement(Cu,{label:p("month"),hideLabel:!0,className:h("navds-date__caption__month"),onChange:w=>b(r.date,w),value:Sd(r.date)},S?.map(({value:w,label:D,disabled:E})=>k.createElement("option",{key:w,value:w,disabled:E},D))),k.createElement(Cu,{label:p("year"),hideLabel:!0,className:h("navds-date__caption__year"),onChange:w=>A(r.date,w),value:Nd(r.date)},R?.map(({value:w,label:D,disabled:E})=>k.createElement("option",{key:w,value:w,disabled:E},D)))):k.createElement(Rt,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:h("navds-date__caption-label")},_a(r.date,"LLLL y",{locale:n})),k.createElement(Gt,{variant:"tertiary-neutral",icon:k.createElement(XT,{title:p("goToNextMonth")}),onClick:()=>g&&d(g),disabled:!g,className:h("navds-date__caption-button"),type:"button"})),k.createElement(LP,{weeks:r.weeks,onWeekNumberClick:i}),t)};var CP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const VP={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},Hp=e=>{var{className:t,dropdownCaption:r,disabled:n=[],disableWeekends:i=!1,showWeekNumber:l=!1,selected:u,fixedWeeks:d=!1,onWeekNumberClick:f,fromDate:g,toDate:m,month:h,mode:p,handleSelect:b,locale:A}=e,N=CP(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:y}=ge(),S=Yh(),R=A?hp(A):S,w=p??"single";return k.createElement(TP,Object.assign({captionLayout:r?"dropdown":"label",hideNavigation:!0,locale:R,mode:w,onSelect:(D,E)=>{if(w!=="range"||D||!Ap(u)){b(D);return}if(!u.to){b({from:E,to:void 0});return}let I;wd(u.to,E)?I=void 0:ns(E,u.to)?I={from:E,to:u.to}:I={from:u.to,to:E},b(I)},selected:u,classNames:VP,components:{MonthCaption:()=>k.createElement(k.Fragment,null),DayButton:T.useCallback(D=>k.createElement(MP,Object.assign({},D,{locale:R})),[R]),Month:T.useCallback(D=>k.createElement(BP,Object.assign({},D,{locale:R,onWeekNumberClick:w==="multiple"?f:void 0})),[R,w,f]),Day:T.useCallback(D=>k.createElement("td",Object.assign({},Ft(D,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:T.useCallback(D=>k.createElement(Gp,Object.assign({},D,{showOnDesktop:!0,onWeekNumberClick:w==="multiple"?f:void 0})),[w,f]),WeekNumberHeader:T.useCallback(D=>k.createElement(Id,{above:"sm",asChild:!0},k.createElement("th",Object.assign({},D))),[]),Weekdays:T.useCallback(D=>k.createElement("thead",Object.assign({},D,{className:"rdp-head","aria-hidden":!0}),k.createElement("tr",{className:"rdp-head_row"},D.children)),[])},className:y("navds-date",t),disabled:D=>i&&Al(D)||xn(D,n)||AP({day:D,fromDate:g,toDate:m}),weekStartsOn:1,modifiers:{weekend:D=>i&&Al(D)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:l,fixedWeeks:d,showOutsideDays:!0,startMonth:g,endMonth:m,month:NP({month:h,start:g,end:m})},Ft(N,["onSelect","role","id","defaultSelected"])))};var KP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const UP=T.forwardRef((e,t)=>{var{className:r,locale:n,translations:i,selected:l,defaultSelected:u,onSelect:d,mode:f}=e,g=KP(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:m}=ge(),h=Ln("DatePicker",i,pp(n)),[p,b]=$i({defaultValue:u,value:l,onChange:A=>d?.(A)});return k.createElement(vp,{translate:h},k.createElement("div",{ref:t,className:m("navds-date__standalone-wrapper",r)},k.createElement(Hp,Object.assign({},g,{locale:n,handleSelect:b,selected:p,mode:f}))))});var qP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Pl=T.forwardRef((e,t)=>{var{children:r,locale:n,translations:i,selected:l,id:u,defaultSelected:d,wrapperClassName:f,open:g,onClose:m,onOpenToggle:h,strategy:p,mode:b}=e,A=qP(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const N=Ln("DatePicker",i,pp(n)),{cn:y}=ge(),S=Xr(u),[R,w]=$i({defaultValue:!1,value:g}),[D,E]=T.useState(null),I=Oa(E,t),[M,B]=$i({defaultValue:d,value:l,onChange:U=>{var Y;let H=!1;b==="single"&&U?H=!0:Ap(U)&&U.from&&U.to&&(H=!0,wd(U.from,U.to)&&(H=!1)),H&&(m?.(),w(!1)),(Y=A?.onSelect)===null||Y===void 0||Y.call(A,U)}});return k.createElement(vp,{translate:N},k.createElement(_S,{open:R,onOpen:()=>{w(U=>!U),h?.()},ariaId:S,defined:!0},k.createElement("div",{ref:I,className:y("navds-date__wrapper",f)},r,k.createElement(KS,{open:R,anchor:D,onClose:()=>{m?.(),R&&w(!1)},locale:n,translate:N,variant:b??"single",popoverProps:{id:S,strategy:p}},k.createElement(Hp,Object.assign({},A,{locale:n,handleSelect:B,selected:M,mode:b}))))))});Pl.Standalone=UP;Pl.Input=ES;const GP=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),HP=(e={})=>{var t;const{locale:r,required:n,defaultSelected:i,today:l=new Date,fromDate:u,toDate:d,disabled:f,disableWeekends:g,onDateChange:m,inputFormat:h,onValidate:p,defaultMonth:b,allowTwoDigitYear:A=!0}=e,[N,y]=T.useState(null),S=Yh(),R=r?hp(r):S,[w,D]=T.useState(i),[E,I]=T.useState((t=w??b)!==null&&t!==void 0?t:l),[M,B]=T.useState(w),[U,Y]=T.useState(!1),H=w?Ni(w,R,"date",h):"",[V,j]=T.useState(H),Z=T.useCallback(ve=>{var be,et;Y(ve),ve&&I((et=(be=M??w)!==null&&be!==void 0?be:b)!==null&&et!==void 0?et:l)},[b,w,M,l]),te=ve=>{m?.(ve),B(ve)},ne=(ve={})=>p?.(GP(ve));return{datepickerProps:{month:E,onMonthChange:I,onDayClick:(ve,{selected:be})=>{if(!(be&&n)){if(ve&&!be&&(Z(!1),N?.focus()),be){te(void 0),j(""),ne({isValidDate:!1,isEmpty:!0});return}te(ve),ne(),I(ve),j(ve?Ni(ve,R,"date",h):"")}},selected:M??new Date("Invalid date"),locale:r,fromDate:u,toDate:d,today:l,open:U,onClose:()=>{Z(!1),N?.focus()},onOpenToggle:()=>Z(!U),disabled:f,disableWeekends:g},inputProps:{onChange:ve=>{j(ve.target.value);const be=_u(ve.target.value,l,R,"date",A),et=u&&be&&Yr(u,be)>0,tt=d&&be&&Yr(be,d)>0;if(!Yn(be)||g&&Al(be)||f&&xn(be,f)){te(void 0),ne({isInvalid:!Yn(be),isWeekend:g&&Al(be),isDisabled:f&&xn(be,f),isValidDate:!1,isEmpty:!ve.target.value,isBefore:et??!1,isAfter:tt??!1});return}if(et||tt){te(void 0),ne({isValidDate:!1,isBefore:et??!1,isAfter:tt??!1});return}te(be),ne(),I(b??be)},onFocus:ve=>{if(ve.target.readOnly)return;const be=_u(ve.target.value,l,R,"date",A);if(Yn(be)){j(Ni(be,R,"date",h));const et=u&&be&&Yr(u,be)>0,tt=d&&be&&Yr(be,d)>0;!et&&!tt&&I(be)}},onBlur:ve=>{const be=_u(ve.target.value,l,R,"date",A);Yn(be)&&j(Ni(be,R,"date",h))},value:V,setAnchorRef:y},reset:()=>{var ve;te(w),I((ve=w??b)!==null&&ve!==void 0?ve:l),j(H??""),D(i)},selectedDay:M,setSelected:ve=>{var be;te(ve),I((be=ve??b)!==null&&be!==void 0?be:l),j(ve?Ni(ve,R,"date",h):"")}}};function Lt(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([i,l])=>[`--__${e}c-${t}-${r}-${i}`,l])):{}}const $P={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},rg=(e,t,r,n,i,l)=>t.split(" ").map((u,d,f)=>{var g;if(e==="margin-inline"&&u==="full")return`calc((100vw - ${100/f.length}%)/-2)`;if(e==="padding-inline"&&u==="full")return`calc((100vw - ${100/f.length}%)/2)`;if(["mi","mb"].includes(e)&&u==="auto")return"auto";let m=`var(--${l}-${r}-${u})`;if(n.includes(u))m=u==="px"?"1px":u;else if(u.startsWith("space"))m=`var(--${l}-${u})`;else{const h=`--${l}-spacing-${u}`;m=`var(${(g=$P[h])!==null&&g!==void 0?g:h})`}return i?u==="0"?"0":`calc(-1 * ${m})`:m}).join(" ");function Fn(e,t,r,n,i,l=!1,u=[]){if(!i)return{};if(typeof i=="string")return{[`--__${e}c-${t}-${r}-xs`]:rg(r,i,n,u,l,e)};const d={};return Object.entries(i).forEach(([f,g])=>{d[`--__${e}c-${t}-${r}-${f}`]=rg(r,g,n,u,l,e)}),d}const WP=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],YP=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:i,margin:l,marginInline:u,marginBlock:d,width:f,minWidth:g,maxWidth:m,height:h,minHeight:p,maxHeight:b,position:A,inset:N,top:y,right:S,left:R,bottom:w,overflow:D,overflowX:E,overflowY:I,flexBasis:M,flexGrow:B,flexShrink:U,gridColumn:Y})=>{const H=Bl(!1),{cn:V}=ge(),j=H?"ax":"a",Z=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Fn(j,"r","p","spacing",r)),Fn(j,"r","pi","spacing",n)),Fn(j,"r","pb","spacing",i)),Fn(j,"r","m","spacing",l)),Fn(j,"r","mi","spacing",u)),Fn(j,"r","mb","spacing",d)),Lt(j,"r","w",f)),Lt(j,"r","minw",g)),Lt(j,"r","maxw",m)),Lt(j,"r","h",h)),Lt(j,"r","minh",p)),Lt(j,"r","maxh",b)),Lt(j,"r","position",A)),Fn(j,"r","inset","spacing",N)),Fn(j,"r","top","spacing",y)),Fn(j,"r","right","spacing",S)),Fn(j,"r","bottom","spacing",w)),Fn(j,"r","left","spacing",R)),Lt(j,"r","overflow",D)),Lt(j,"r","overflowx",E)),Lt(j,"r","overflowy",I)),Lt(j,"r","flex-basis",M)),Lt(j,"r","flex-grow",B)),Lt(j,"r","flex-shrink",U)),Lt(j,"r","grid-column",Y));return k.createElement(jl,{className:V({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":i,"navds-r-m":l,"navds-r-mi":u,"navds-r-mb":d,"navds-r-w":f,"navds-r-minw":g,"navds-r-maxw":m,"navds-r-h":h,"navds-r-minh":p,"navds-r-maxh":b,"navds-r-position":A,"navds-r-inset":N,"navds-r-top":y,"navds-r-right":S,"navds-r-bottom":w,"navds-r-left":R,"navds-r-overflow":D,"navds-r-overflowx":E,"navds-r-overflowy":I,"navds-r-flex-basis":M,"navds-r-flex-grow":B,"navds-r-flex-shrink":U,"navds-r-grid-column":Y}),style:Z},e)};var zP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const $p=T.forwardRef((e,t)=>{var{children:r,className:n,as:i="div",align:l,justify:u,wrap:d=!0,gap:f,style:g,direction:m="row",asChild:h}=e,p=zP(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const A=Bl(!1)?"ax":"a",{cn:N}=ge(),y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},g),Fn(A,"stack","gap","spacing",f)),Lt(A,"stack","direction",m)),Lt(A,"stack","align",l)),Lt(A,"stack","justify",u)),S=h?jl:i;return k.createElement(YP,Object.assign({},p),k.createElement(S,Object.assign({},Ft(p,WP),{ref:t,style:y,className:N("navds-stack",n,{"navds-vstack":m==="column","navds-hstack":m==="row","navds-stack-gap":f,"navds-stack-align":l,"navds-stack-justify":u,"navds-stack-direction":m,"navds-stack-wrap":d})}),r))});var XP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Gn=T.forwardRef((e,t)=>{var{as:r="div"}=e,n=XP(e,["as"]);return k.createElement($p,Object.assign({as:r},n,{ref:t,direction:"row"}))});var ZP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Ea=T.forwardRef((e,t)=>{var{as:r="div"}=e,n=ZP(e,["as"]);return k.createElement($p,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))});var JP=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const QP=T.forwardRef((e,t)=>{var{className:r}=e,n=JP(e,["className"]);const{cn:i}=ge();return k.createElement("tbody",Object.assign({},n,{ref:t,className:i("navds-table__body",r)}))});var eD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Wp=T.forwardRef((e,t)=>{var{className:r,children:n,align:i,textSize:l}=e,u=eD(e,["className","children","align","textSize"]);const{cn:d}=ge();return k.createElement("th",Object.assign({ref:t,className:d("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${i}`]:i,"navds-label--small":l==="small"})},u),n)}),Yp=T.createContext(null);var tD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const nD=T.forwardRef((e,t)=>{var r,n,i,l,{className:u,children:d,sortable:f=!1,sortKey:g}=e,m=tD(e,["className","children","sortable","sortKey"]);const h=T.useContext(Yp),{cn:p}=ge();return f&&!g&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),k.createElement(Wp,Object.assign({scope:"col",ref:t,className:p(u),"aria-sort":f?((r=h?.sort)===null||r===void 0?void 0:r.orderBy)===g?(n=h?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},m),f?k.createElement("button",{type:"button",className:p("navds-table__sort-button"),onClick:f&&g?()=>{var b;return(b=h?.onSortChange)===null||b===void 0?void 0:b.call(h,g)}:void 0},d,((i=h?.sort)===null||i===void 0?void 0:i.orderBy)===g?((l=h?.sort)===null||l===void 0?void 0:l.direction)==="descending"?k.createElement(kw,{"aria-hidden":!0}):k.createElement(_w,{"aria-hidden":!0}):k.createElement(JT,{"aria-hidden":!0})):d)});var rD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const zp=T.forwardRef((e,t)=>{var{className:r,children:n="",align:i,textSize:l}=e,u=rD(e,["className","children","align","textSize"]);const{cn:d}=ge();return k.createElement(Rt,Object.assign({as:"td",ref:t,className:d("navds-table__data-cell",r,{[`navds-table__data-cell--align-${i}`]:i}),size:l},u),n)});var aD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const iD=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function sD(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function ag(e){return typeof e=="string"&&e[e.length-1]==="%"&&sD(e.substring(0,e.length-1))}function Tu(e,t){t===0&&e?.style&&(e.style.display="none")}function lD(e,t){t===0&&e?.style&&(e.style.display="")}const oD=e=>{var{children:t,className:r,innerClassName:n,duration:i=250,easing:l="ease",height:u}=e,d=aD(e,["children","className","innerClassName","duration","easing","height"]);const{cn:f}=ge(),g=T.useRef(u),m=T.useRef(null),h=T.useRef(),p=T.useRef(),b=T.useRef(u),A=T.useRef("visible"),N=iD?0:i;typeof b.current=="number"?(typeof u!="string"&&(b.current=u<0?0:u),A.current="hidden"):ag(b.current)&&(b.current=u==="0%"?0:u,A.current="hidden");const[y,S]=T.useState(b.current),[R,w]=T.useState(A.current),[D,E]=T.useState(!1);T.useEffect(()=>{Tu(m.current,b.current)},[]),T.useEffect(()=>{if(u!==g.current&&m.current){lD(m.current,g.current),m.current.style.overflow="hidden";const U=m.current.offsetHeight;m.current.style.overflow="";const Y=N;let H,V,j="hidden",Z;const te=g.current==="auto";typeof u=="number"?(H=u<0?0:u,V=H):ag(u)?(H=u==="0%"?0:u,V=H):(H=U,V="auto",j=void 0),te&&(V=H,H=U),S(H),w("hidden"),E(!te),clearTimeout(p.current),clearTimeout(h.current),te?(Z=!0,p.current=setTimeout(()=>{S(V),w(j),E(Z)},50),h.current=setTimeout(()=>{E(!1),Tu(m.current,V)},Y)):p.current=setTimeout(()=>{S(V),w(j),E(!1),u!=="auto"&&Tu(m.current,H)},Y)}return g.current=u,()=>{clearTimeout(p.current),clearTimeout(h.current)}},[u]);const I={height:y,overflow:R};D&&(I.transition=`height ${N}ms ${l} 0ms`,I.WebkitTransition=I.transition);const B=typeof d["aria-hidden"]<"u"?d["aria-hidden"]:u===0;return k.createElement("div",Object.assign({},d,{className:f(r),style:I}),k.createElement("div",{"aria-hidden":B,className:f(n),ref:m},t))};var uD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Xp=T.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:i=!0}=e,l=uD(e,["className","selected","shadeOnHover"]);const{cn:u}=ge();return k.createElement("tr",Object.assign({},l,{ref:t,className:u("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":i})}))});var dD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const cD=T.forwardRef((e,t)=>{var{className:r,children:n,content:i,togglePlacement:l="left",defaultOpen:u=!1,open:d,onOpenChange:f,expansionDisabled:g=!1,expandOnRowClick:m=!1,colSpan:h=999,contentGutter:p,onClick:b}=e,A=dD(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:N}=ge(),[y,S]=$i({defaultValue:u,value:d,onChange:f}),R=Ln("global"),w=Xr(),D=I=>{S(M=>!M),I.stopPropagation()},E=I=>{m&&!g&&!Zp(I.target)&&D(I)};return k.createElement(k.Fragment,null,k.createElement(Xp,Object.assign({},A,{ref:t,className:N("navds-table__expandable-row",r,{"navds-table__expandable-row--open":y,"navds-table__expandable-row--expansion-disabled":g,"navds-table__expandable-row--clickable":m}),onClick:xr(b,E)}),l==="right"&&n,k.createElement(zp,{className:N("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":y}),onClick:g?()=>null:D},!g&&k.createElement("button",{className:N("navds-table__toggle-expand-button"),type:"button","aria-controls":w,"aria-expanded":y,onClick:D},k.createElement(md,{className:N("navds-table__expandable-icon"),title:R(y?"showLess":"showMore")}))),l==="left"&&n),k.createElement("tr",{"data-state":y?"open":"closed",className:N("navds-table__expanded-row"),"aria-hidden":!y,id:w},k.createElement("td",{colSpan:h,className:N("navds-table__expanded-row-cell")},k.createElement(oD,{className:N("navds-table__expanded-row-collapse"),innerClassName:N(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${p??l}`),height:y?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},i))))});function Zp(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Zp(e.parentElement)}var fD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const mD=T.forwardRef((e,t)=>{var{className:r}=e,n=fD(e,["className"]);const{cn:i}=ge();return k.createElement("thead",Object.assign({},n,{ref:t,className:i("navds-table__header",r)}))});var gD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const ht=T.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:i="medium",onSortChange:l,sort:u,stickyHeader:d=!1}=e,f=gD(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:g}=ge();return k.createElement(Yp.Provider,{value:{onSortChange:l,sort:u}},k.createElement("table",Object.assign({},f,{ref:t,className:g("navds-table",`navds-table--${i}`,r,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":d})})))});ht.Header=mD;ht.Body=QP;ht.Row=Xp;ht.ColumnHeader=nD;ht.HeaderCell=Wp;ht.DataCell=zp;ht.ExpandableRow=cD;var hD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const pD=T.forwardRef((e,t)=>{var{children:r,className:n,variant:i,size:l="medium",icon:u,"data-color":d}=e,f=hD(e,["children","className","variant","size","icon","data-color"]);const{cn:g}=ge(),m=i?.endsWith("-filled")&&"strong",h=i?.endsWith("-moderate")&&"moderate";return k.createElement(Rt,Object.assign({"data-color":d??vD(i),"data-variant":m||h||"outline"},f,{ref:t,as:"span",size:l==="medium"?"medium":"small",className:g("navds-tag",n,`navds-tag--${i}`,`navds-tag--${l}`)}),u&&k.createElement("span",{className:g("navds-tag__icon--left")},u),r)});function vD(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const yD=e=>{const t=Zr(e,"fieldset");return Object.assign(Object.assign({},t),{inputProps:{"aria-describedby":zi(e["aria-describedby"],{[t.inputDescriptionId]:e.description&&!Nl(e.description)})||void 0}})};var kD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Jp=T.forwardRef((e,t)=>{var r,n,i;const{inputProps:l,errorId:u,showErrorMsg:d,hasError:f,size:g,readOnly:m,inputDescriptionId:h}=yD(e),{cn:p}=ge(),b=T.useContext(Yi),{children:A,className:N,errorPropagation:y=!0,legend:S,description:R,hideLegend:w,nativeReadOnly:D=!0}=e,E=kD(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return k.createElement(Yi.Provider,{value:{error:y?(r=e.error)!==null&&r!==void 0?r:b?.error:void 0,errorId:zi({[u]:d,[(n=b?.errorId)!==null&&n!==void 0?n:""]:!!b?.error}),size:g,disabled:(i=e.disabled)!==null&&i!==void 0?i:!1,readOnly:m}},k.createElement("fieldset",Object.assign({},Ft(E,["errorId","error","size","readOnly"]),l,{ref:t,className:p(N,"navds-fieldset",`navds-fieldset--${g}`,{"navds-fieldset--error":f,"navds-fieldset--readonly":m})}),k.createElement(zn,{size:g,as:"legend",className:p("navds-fieldset__legend",{"navds-sr-only":!!w})},m&&(D?k.createElement(Hl,null):k.createElement(Fd,null)),S),!!R&&k.createElement(Rt,{className:p("navds-fieldset__description",{"navds-sr-only":!!w}),id:h,size:g??"medium",as:"div"},e.description),A,k.createElement("div",{id:u,"aria-relevant":"additions removals","aria-live":"polite",className:p("navds-fieldset__error")},d&&k.createElement(Aa,{size:g,showIcon:!0},e.error))))});var bD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Qp=T.createContext(null);T.forwardRef((e,t)=>{var r,n,{value:i,defaultValue:l,onChange:u=()=>{},children:d,className:f}=e,g=bD(e,["value","defaultValue","onChange","children","className"]);const{cn:m}=ge(),h=T.useContext(Yi),[p,b]=T.useState(l??[]),A=N=>{const y=i??p,S=y.includes(N)?y.filter(R=>R!==N):[...y,N];i===void 0&&b(S),u(S)};return k.createElement(Jp,Object.assign({},g,{ref:t,className:m(f,"navds-checkbox-group",`navds-checkbox-group--${(n=(r=g.size)!==null&&r!==void 0?r:h?.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),k.createElement(Qp.Provider,{value:{value:i,defaultValue:l,toggleValue:A}},k.createElement("div",{className:m("navds-checkboxes")},d)))});var _D=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const ED=e=>{const t=T.useContext(Qp),r=Zr(Ft(e,["description","children"]),"checkbox"),{inputProps:n,readOnly:i}=r,l=_D(r,["inputProps","readOnly"]);return t&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},l),{readOnly:i,nested:!!t,inputProps:Object.assign(Object.assign({},n),{checked:t?.value?t.value.includes(e.value):e.checked,defaultChecked:t?.defaultValue?t.defaultValue.includes(e.value):e.defaultChecked,onChange:u=>{var d;i||((d=e.onChange)===null||d===void 0||d.call(e,u),t?.toggleValue(e.value))},onClick:u=>{var d;if(i){u.preventDefault();return}(d=e?.onClick)===null||d===void 0||d.call(e,u)}})})},TD=T.forwardRef((e,t)=>{const{cn:r}=ge(),{inputProps:n,hasError:i,size:l,readOnly:u,nested:d}=ED(e);return k.createElement("div",{className:r(e.className,"navds-checkbox",`navds-checkbox--${l}`,{"navds-checkbox--error":i,"navds-checkbox--disabled":n.disabled,"navds-checkbox--readonly":u}),"data-color":i?"danger":e["data-color"]},k.createElement("input",Object.assign({},Ft(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),Ft(n,["aria-invalid"]),{type:"checkbox",className:r("navds-checkbox__input"),ref:f=>{var g;f&&(f.indeterminate=(g=e.indeterminate)!==null&&g!==void 0?g:!1),typeof t=="function"?t(f):t!=null&&(t.current=f)}})),k.createElement("label",{htmlFor:n.id,className:r("navds-checkbox__label")},k.createElement("span",{className:r("navds-checkbox__icon")},k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},k.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),k.createElement("span",{className:r("navds-checkbox__icon-indeterminate")}),k.createElement("span",{className:r("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},k.createElement(Rt,{as:"span",size:l,className:r("navds-checkbox__label-text")},!d&&u&&k.createElement(Fd,null),e.children),e.description&&k.createElement(Rt,{as:"span",size:l,className:r("navds-form-field__subdescription navds-checkbox__description")},e.description))))});var wD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const OD=T.forwardRef((e,t)=>{var{children:r,as:n="a",className:i}=e,l=wD(e,["children","as","className"]);const{cn:u}=ge();return k.createElement("li",null,k.createElement(n,Object.assign({},l,{ref:t,className:u(i,"navds-error-summary__item","navds-link")}),r))});var AD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Vu=T.forwardRef((e,t)=>{var{children:r,className:n,size:i="medium",headingTag:l="h2",heading:u}=e,d=AD(e,["children","className","size","headingTag","heading"]);const{cn:f}=ge(),g=Ln("ErrorSummary"),m=T.useRef(null),h=T.useRef(null),p=Oa(t,m);return k.createElement("div",Object.assign({ref:p},d,{className:f(n,"navds-error-summary",`navds-error-summary--${i}`),tabIndex:-1,onFocus:xr(d.onFocus,b=>{var A;b.target===m.current&&((A=h?.current)===null||A===void 0||A.focus())})}),k.createElement(Xi,{className:f("navds-error-summary__heading"),as:l,size:i==="medium"?"small":"xsmall",ref:h,tabIndex:-1},u??g("heading")),k.createElement(Rt,{as:"ul",size:i,className:f("navds-error-summary__list")},r))});Vu.Item=OD;var RD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const ev=k.createContext(null),SD=T.forwardRef((e,t)=>{var r,n,{children:i,className:l,name:u,defaultValue:d,value:f,onChange:g=()=>{},required:m,readOnly:h}=e,p=RD(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:b}=ge(),A=T.useContext(Yi),N=Xr();return k.createElement(Jp,Object.assign({},p,{readOnly:h,ref:t,className:b(l,"navds-radio-group",`navds-radio-group--${(n=(r=p.size)!==null&&r!==void 0?r:A?.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),k.createElement(ev.Provider,{value:{name:u??`radioGroupName-${N}`,defaultValue:d,value:f,onChange:g,required:m}},k.createElement("div",{className:b("navds-radio-buttons")},i)))});var ND=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const PD=e=>{const t=T.useContext(ev),r=Zr(Ft(e,["description"]),"radio"),{inputProps:n,readOnly:i}=r,l=ND(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:i,inputProps:Object.assign(Object.assign({},n),{name:t?.name,defaultChecked:t?.defaultValue===void 0?void 0:t?.defaultValue===e.value,checked:t?.value===void 0?void 0:t?.value===e.value,onChange:u=>{var d,f;i||((d=e.onChange)===null||d===void 0||d.call(e,u),(f=t?.onChange)===null||f===void 0||f.call(t,e.value))},onClick:u=>{var d;if(i){u.preventDefault();return}(d=e?.onClick)===null||d===void 0||d.call(e,u)},required:t?.required,type:"radio"})})},DD=T.forwardRef((e,t)=>{const{cn:r}=ge(),{inputProps:n,size:i,hasError:l,readOnly:u}=PD(e);return k.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${i}`,{"navds-radio--error":l,"navds-radio--disabled":n.disabled,"navds-radio--readonly":u}),"data-color":l?"danger":e["data-color"]},k.createElement("input",Object.assign({},Ft(e,["children","size","description","readOnly"]),Ft(n,["aria-invalid"]),{className:r("navds-radio__input"),ref:t})),k.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},k.createElement("span",{className:r("navds-radio__content")},k.createElement(Rt,{as:"span",size:i},e.children),e.description&&k.createElement(Rt,{as:"span",size:i,className:r("navds-form-field__subdescription navds-radio__description")},e.description))))}),tv=T.createContext(null);var FD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const nv=T.forwardRef((e,t)=>{var r,{className:n,children:i,disabled:l,onClick:u}=e,d=FD(e,["className","children","disabled","onClick"]);const{cn:f}=ge(),g=Ln("Search"),m=T.useContext(tv);if(m===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:h,variant:p,handleClick:b}=m;return k.createElement(Gt,Object.assign({type:"submit"},d,{ref:t,size:h,variant:p==="secondary"?"secondary":"primary",className:f("navds-search__button-search",n),disabled:(r=m?.disabled)!==null&&r!==void 0?r:l,onClick:xr(u,b),icon:k.createElement(wh,Object.assign({},i?{"aria-hidden":!0}:{title:g("search")}))}),i)});var xD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Ku=T.forwardRef((e,t)=>{const{inputProps:r,size:n="medium",inputDescriptionId:i,errorId:l,showErrorMsg:u,hasError:d}=Zr(e,"searchfield"),{className:f,hideLabel:g=!0,label:m,description:h,value:p,clearButtonLabel:b,onClear:A,clearButton:N=!0,children:y,variant:S="primary",defaultValue:R,onChange:w,onSearchClick:D,htmlSize:E,"data-color":I}=e,M=xD(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:B}=ge(),U=T.useRef(null),Y=Oa(U,t),[H,V]=T.useState(R??""),j=oe=>{p===void 0&&V(oe),w?.(oe)},Z=oe=>{var Q,le;A?.(oe),j(""),(le=(Q=U.current)===null||Q===void 0?void 0:Q.focus)===null||le===void 0||le.call(Q)},te=()=>{D?.(`${p??H}`)},ne=N&&!r.disabled&&(p??H);return k.createElement("div",{onKeyDown:oe=>{var Q;oe.key==="Escape"&&(!((Q=U.current)===null||Q===void 0)&&Q.value&&oe.preventDefault(),Z({trigger:"Escape",event:oe}))},className:B(f,"navds-form-field",`navds-form-field--${n}`,"navds-search",{"navds-search--error":d,"navds-search--disabled":r.disabled,"navds-search--with-size":E}),"data-color":I},k.createElement(zn,{htmlFor:r.id,size:n,className:B("navds-form-field__label",{"navds-sr-only":g})},m),!!h&&k.createElement(Rt,{className:B("navds-form-field__description",{"navds-sr-only":g}),id:i,size:n,as:"div"},h),k.createElement("div",{className:B("navds-search__wrapper")},k.createElement("div",{className:B("navds-search__wrapper-inner")},S==="simple"&&k.createElement(wh,{"aria-hidden":!0,className:B("navds-search__search-icon")}),k.createElement("input",Object.assign({ref:Y},Ft(M,["error","errorId","size","readOnly"]),r,{value:p??H,onChange:oe=>j(oe.target.value),type:"search",className:B(f,"navds-search__input",`navds-search__input--${S}`,"navds-text-field__input","navds-body-short",`navds-body-short--${n}`)},E?{size:Number(E)}:{})),ne&&k.createElement(MD,{handleClear:Z,size:n,clearButtonLabel:b})),k.createElement(tv.Provider,{value:{size:n,disabled:r.disabled,variant:S,handleClick:te}},y||S!=="simple"&&k.createElement(nv,{"data-color":I}))),k.createElement("div",{className:B("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},u&&k.createElement(Aa,{size:n,showIcon:!0},e.error)))});function MD({size:e,clearButtonLabel:t,handleClear:r}){const{cn:n}=ge(),i=Bl(!1),l=Ln("Search");return i?k.createElement(Gt,{className:n("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:k.createElement(_l,{"aria-hidden":!0}),title:t||l("clear"),onClick:u=>r({trigger:"Click",event:u}),type:"button"}):k.createElement("button",{type:"button",onClick:u=>r({trigger:"Click",event:u}),className:n("navds-search__button-clear")},k.createElement("span",{className:n("navds-sr-only")},t||l("clear")),k.createElement(_l,{"aria-hidden":!0}))}Ku.Button=nv;var ID=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const ig=(e,t,r)=>{const{outerHeightStyle:n,overflow:i}=t;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==i)?(r.current+=1,t):e},sg=e=>(e?.ownerDocument||document).defaultView||window;function al(e){return parseInt(e,10)||0}const LD=T.forwardRef((e,t)=>{var r,n,{className:i,onChange:l,maxRows:u,minRows:d=1,autoScrollbar:f,style:g,value:m}=e,h=ID(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:p}=T.useRef(m!=null),b=T.useRef(null),A=Oa(b,t),N=T.useRef(null),y=T.useRef(0),[S,R]=T.useState({outerHeightStyle:0}),w=k.useCallback(()=>{const M=b.current,U=sg(M).getComputedStyle(M);if(U.width==="0px")return{outerHeightStyle:0};const Y=N.current;Y.style.width=U.width,Y.value=M.value||h.placeholder||"x",Y.value.slice(-1)===`
`&&(Y.value+=" ");const H=U.boxSizing,V=al(U.paddingBottom)+al(U.paddingTop),j=al(U.borderBottomWidth)+al(U.borderTopWidth),Z=Y.scrollHeight-V;Y.value="x";const te=Y.scrollHeight-V;let ne=Z;d&&(ne=Math.max(Number(d)*te,ne)),u&&(ne=Math.min(Number(u)*te,ne)),ne=Math.max(ne,te);const oe=ne+(H==="border-box"?V+j:0),Q=Math.abs(ne-Z)<=1;return{outerHeightStyle:oe,overflow:Q}},[u,d,h.placeholder]),D=()=>{const M=w();lg(M)||R(B=>ig(B,M,y))};ni(()=>{const M=()=>{const V=w();lg(V)||vh.flushSync(()=>{R(j=>ig(j,V,y))})},B=Th(()=>{var V,j,Z;if(y.current=0,!((V=b.current)===null||V===void 0)&&V.style.height||!((j=b.current)===null||j===void 0)&&j.style.width){((Z=b.current)===null||Z===void 0?void 0:Z.style.overflow)==="hidden"&&R(te=>Object.assign(Object.assign({},te),{overflow:!1}));return}M()},166,!0),U=b.current,Y=sg(U);Y.addEventListener("resize",B);let H;return typeof ResizeObserver<"u"&&(H=new ResizeObserver(B),H.observe(U)),()=>{B.clear(),Y.removeEventListener("resize",B),H&&H.disconnect()}},[w]),ni(()=>{D()}),T.useEffect(()=>{y.current=0},[m]);const E=M=>{y.current=0,p||D(),l&&l(M)},I=Object.assign({"--__ac-textarea-height":S.outerHeightStyle+"px","--__axc-textarea-height":S.outerHeightStyle+"px",overflow:S.overflow&&!f&&!(!((r=b.current)===null||r===void 0)&&r.style.height)&&!(!((n=b.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},g);return k.createElement(k.Fragment,null,k.createElement("textarea",Object.assign({value:m,onChange:E,ref:A,rows:d,style:I},h,{className:i})),k.createElement("textarea",{"aria-hidden":!0,className:i,readOnly:!0,ref:N,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},g)}))});function lg(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const jD=({maxLengthId:e,maxLength:t,currentLength:r,size:n,i18n:i})=>{const{cn:l}=ge(),u=Ln("Textarea",{charsLeft:i?.counterLeft?`{chars} ${i.counterLeft}`:void 0,charsTooMany:i?.counterTooMuch?`{chars} ${i.counterTooMuch}`:void 0}),d=t-r,[f,g]=T.useState(d);return T.useEffect(()=>{const m=Th(()=>{g(d)},2e3);return m(),()=>{m.clear()}},[d]),k.createElement(k.Fragment,null,k.createElement("span",{id:e,className:l("navds-sr-only")},u("maxLength",{maxLength:t})),d<20&&k.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},og(f,u)),k.createElement(Rt,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:n},og(d,u)))},og=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var BD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const CD=T.forwardRef((e,t)=>{var r,n,i;const{inputProps:l,errorId:u,showErrorMsg:d,hasError:f,size:g,inputDescriptionId:m}=Zr(e,"textarea"),{label:h,className:p,description:b,maxLength:A,hideLabel:N=!1,resize:y,UNSAFE_autoScrollbar:S,i18n:R,readOnly:w}=e,D=BD(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:E}=ge(),I=Xr(),M=A!==void 0&&A>0,[B,U]=T.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),Y=()=>{let V=D?.minRows?D?.minRows:3;return g==="small"&&(V=D?.minRows?D?.minRows:2),V},H=zi(l["aria-describedby"],{[I??""]:M});return k.createElement("div",{className:E(p,"navds-form-field",`navds-form-field--${g}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":w,"navds-textarea--readonly":w,"navds-textarea--error":f,"navds-textarea--autoscrollbar":S,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},k.createElement(zn,{htmlFor:l.id,size:g,className:E("navds-form-field__label",{"navds-sr-only":N})},w&&k.createElement(Hl,null),h),!!b&&k.createElement(Rt,{className:E("navds-form-field__description",{"navds-sr-only":N}),id:m,size:g,as:"div"},b),k.createElement(LD,Object.assign({},Ft(D,["error","errorId","size"]),l,{onChange:xr(e.onChange,e.value===void 0?V=>U(V.target.value):void 0),minRows:Y(),autoScrollbar:S,ref:t,readOnly:w,className:E("navds-textarea__input","navds-body-short",`navds-body-short--${g??"medium"}`)},H?{"aria-describedby":H}:{})),M&&!w&&!l.disabled&&k.createElement(jD,{maxLengthId:I,maxLength:A,currentLength:(i=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&i!==void 0?i:B.length,size:g,i18n:R}),k.createElement("div",{className:E("navds-form-field__error"),id:u,"aria-relevant":"additions removals","aria-live":"polite"},d&&k.createElement(Aa,{size:g,showIcon:!0},e.error)))});var VD=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const KD=T.forwardRef((e,t)=>{const{cn:r}=ge(),{inputProps:n,errorId:i,showErrorMsg:l,hasError:u,size:d,inputDescriptionId:f}=Zr(e,"textField"),{label:g,className:m,description:h,htmlSize:p,hideLabel:b=!1,type:A="text",readOnly:N}=e,y=VD(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return k.createElement("div",{className:r(m,"navds-form-field",`navds-form-field--${d}`,{"navds-text-field--error":u,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":N,"navds-text-field--readonly":N})},k.createElement(zn,{htmlFor:n.id,size:d,className:r("navds-form-field__label",{"navds-sr-only":b})},N&&k.createElement(Hl,null),g),!!h&&k.createElement(Rt,{className:r("navds-form-field__description",{"navds-sr-only":b}),id:f,size:d,as:"div"},h),k.createElement("input",Object.assign({},Ft(y,["error","errorId","size"]),n,{ref:t,type:A,readOnly:N,className:r("navds-text-field__input","navds-body-short",`navds-body-short--${d??"medium"}`),size:p})),k.createElement("div",{className:r("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},l&&k.createElement(Aa,{size:d,showIcon:!0},e.error)))});var rv=(e=>(e.IKKE_RETT_ANNEN_FORELDER="IKKE_RETT_ANNEN_FORELDER",e))(rv||{}),as=e=>e.type==="checkbox",ga=e=>e instanceof Date,zt=e=>e==null;const av=e=>typeof e=="object";var bt=e=>!zt(e)&&!Array.isArray(e)&&av(e)&&!ga(e),iv=e=>bt(e)&&e.target?as(e.target)?e.target.checked:e.target.value:e,UD=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,sv=(e,t)=>e.has(UD(t)),qD=e=>{const t=e.constructor&&e.constructor.prototype;return bt(t)&&t.hasOwnProperty("isPrototypeOf")},Ld=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function At(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(!(Ld&&(e instanceof Blob||n))&&(r||bt(e)))if(t=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!qD(e))t=e;else for(const i in e)e.hasOwnProperty(i)&&(t[i]=At(e[i]));else return e;return t}var Yl=e=>/^\w*$/.test(e),pt=e=>e===void 0,jd=e=>Array.isArray(e)?e.filter(Boolean):[],Bd=e=>jd(e.replace(/["|']|\]/g,"").split(/\.|\[/)),se=(e,t,r)=>{if(!t||!bt(e))return r;const n=(Yl(t)?[t]:Bd(t)).reduce((i,l)=>zt(i)?i:i[l],e);return pt(n)||n===e?pt(e[t])?r:e[t]:n},_n=e=>typeof e=="boolean",Je=(e,t,r)=>{let n=-1;const i=Yl(t)?[t]:Bd(t),l=i.length,u=l-1;for(;++n<l;){const d=i[n];let f=r;if(n!==u){const g=e[d];f=bt(g)||Array.isArray(g)?g:isNaN(+i[n+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=f,e=e[d]}};const Dl={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Hn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Nr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Cd=k.createContext(null);Cd.displayName="HookFormContext";const pr=()=>k.useContext(Cd),GD=e=>{const{children:t,...r}=e;return k.createElement(Cd.Provider,{value:r},t)};var lv=(e,t,r,n=!0)=>{const i={defaultValues:t._defaultValues};for(const l in e)Object.defineProperty(i,l,{get:()=>{const u=l;return t._proxyFormState[u]!==Hn.all&&(t._proxyFormState[u]=!n||Hn.all),r&&(r[u]=!0),e[u]}});return i};const Vd=typeof window<"u"?k.useLayoutEffect:k.useEffect;function HD(e){const t=pr(),{control:r=t.control,disabled:n,name:i,exact:l}=e||{},[u,d]=k.useState(r._formState),f=k.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Vd(()=>r._subscribe({name:i,formState:f.current,exact:l,callback:g=>{!n&&d({...r._formState,...g})}}),[i,n,l]),k.useEffect(()=>{f.current.isValid&&r._setValid(!0)},[r]),k.useMemo(()=>lv(u,r,f.current,!1),[u,r])}var dr=e=>typeof e=="string",ov=(e,t,r,n,i)=>dr(e)?(n&&t.watch.add(e),se(r,e,i)):Array.isArray(e)?e.map(l=>(n&&t.watch.add(l),se(r,l))):(n&&(t.watchAll=!0),r),Uu=e=>zt(e)||!av(e);function Pr(e,t,r=new WeakSet){if(Uu(e)||Uu(t))return e===t;if(ga(e)&&ga(t))return e.getTime()===t.getTime();const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;if(r.has(e)||r.has(t))return!0;r.add(e),r.add(t);for(const l of n){const u=e[l];if(!i.includes(l))return!1;if(l!=="ref"){const d=t[l];if(ga(u)&&ga(d)||bt(u)&&bt(d)||Array.isArray(u)&&Array.isArray(d)?!Pr(u,d,r):u!==d)return!1}}return!0}function $D(e){const t=pr(),{control:r=t.control,name:n,defaultValue:i,disabled:l,exact:u,compute:d}=e||{},f=k.useRef(i),g=k.useRef(d),m=k.useRef(void 0);g.current=d;const h=k.useMemo(()=>r._getWatch(n,f.current),[r,n]),[p,b]=k.useState(g.current?g.current(h):h);return Vd(()=>r._subscribe({name:n,formState:{values:!0},exact:u,callback:A=>{if(!l){const N=ov(n,r._names,A.values||r._formValues,!1,f.current);if(g.current){const y=g.current(N);Pr(y,m.current)||(b(y),m.current=y)}else b(N)}}}),[r,l,n,u]),k.useEffect(()=>r._removeUnmounted()),p}function di(e){const t=pr(),{name:r,disabled:n,control:i=t.control,shouldUnregister:l,defaultValue:u}=e,d=sv(i._names.array,r),f=k.useMemo(()=>se(i._formValues,r,se(i._defaultValues,r,u)),[i,r,u]),g=$D({control:i,name:r,defaultValue:f,exact:!0}),m=HD({control:i,name:r,exact:!0}),h=k.useRef(e),p=k.useRef(i.register(r,{...e.rules,value:g,..._n(e.disabled)?{disabled:e.disabled}:{}}));h.current=e;const b=k.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!se(m.errors,r)},isDirty:{enumerable:!0,get:()=>!!se(m.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!se(m.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!se(m.validatingFields,r)},error:{enumerable:!0,get:()=>se(m.errors,r)}}),[m,r]),A=k.useCallback(R=>p.current.onChange({target:{value:iv(R),name:r},type:Dl.CHANGE}),[r]),N=k.useCallback(()=>p.current.onBlur({target:{value:se(i._formValues,r),name:r},type:Dl.BLUR}),[r,i._formValues]),y=k.useCallback(R=>{const w=se(i._fields,r);w&&R&&(w._f.ref={focus:()=>R.focus&&R.focus(),select:()=>R.select&&R.select(),setCustomValidity:D=>R.setCustomValidity(D),reportValidity:()=>R.reportValidity()})},[i._fields,r]),S=k.useMemo(()=>({name:r,value:g,..._n(n)||m.disabled?{disabled:m.disabled||n}:{},onChange:A,onBlur:N,ref:y}),[r,n,m.disabled,A,N,y,g]);return k.useEffect(()=>{const R=i._options.shouldUnregister||l;i.register(r,{...h.current.rules,..._n(h.current.disabled)?{disabled:h.current.disabled}:{}});const w=(D,E)=>{const I=se(i._fields,D);I&&I._f&&(I._f.mount=E)};if(w(r,!0),R){const D=At(se(i._options.defaultValues,r));Je(i._defaultValues,r,D),pt(se(i._formValues,r))&&Je(i._formValues,r,D)}return!d&&i.register(r),()=>{(d?R&&!i._state.action:R)?i.unregister(r):w(r,!1)}},[r,i,d,l]),k.useEffect(()=>{i._setDisabledField({disabled:n,name:r})},[n,r,i]),k.useMemo(()=>({field:S,formState:m,fieldState:b}),[S,m,b])}var WD=(e,t,r,n,i)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:i||!0}}:{},Ui=e=>Array.isArray(e)?e:[e],ug=()=>{let e=[];return{get observers(){return e},next:i=>{for(const l of e)l.next&&l.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(l=>l!==i)}}),unsubscribe:()=>{e=[]}}},ln=e=>bt(e)&&!Object.keys(e).length,Kd=e=>e.type==="file",$n=e=>typeof e=="function",Fl=e=>{if(!Ld)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},uv=e=>e.type==="select-multiple",Ud=e=>e.type==="radio",YD=e=>Ud(e)||as(e),wu=e=>Fl(e)&&e.isConnected;function zD(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=pt(e)?n++:e[t[n++]];return e}function XD(e){for(const t in e)if(e.hasOwnProperty(t)&&!pt(e[t]))return!1;return!0}function Tt(e,t){const r=Array.isArray(t)?t:Yl(t)?[t]:Bd(t),n=r.length===1?e:zD(e,r),i=r.length-1,l=r[i];return n&&delete n[l],i!==0&&(bt(n)&&ln(n)||Array.isArray(n)&&XD(n))&&Tt(e,r.slice(0,-1)),e}var dv=e=>{for(const t in e)if($n(e[t]))return!0;return!1};function xl(e,t={}){const r=Array.isArray(e);if(bt(e)||r)for(const n in e)Array.isArray(e[n])||bt(e[n])&&!dv(e[n])?(t[n]=Array.isArray(e[n])?[]:{},xl(e[n],t[n])):zt(e[n])||(t[n]=!0);return t}function cv(e,t,r){const n=Array.isArray(e);if(bt(e)||n)for(const i in e)Array.isArray(e[i])||bt(e[i])&&!dv(e[i])?pt(t)||Uu(r[i])?r[i]=Array.isArray(e[i])?xl(e[i],[]):{...xl(e[i])}:cv(e[i],zt(t)?{}:t[i],r[i]):r[i]=!Pr(e[i],t[i]);return r}var Pi=(e,t)=>cv(e,t,xl(t));const dg={value:!1,isValid:!1},cg={value:!0,isValid:!0};var fv=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!pt(e[0].attributes.value)?pt(e[0].value)||e[0].value===""?cg:{value:e[0].value,isValid:!0}:cg:dg}return dg},mv=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>pt(e)?e:t?e===""?NaN:e&&+e:r&&dr(e)?new Date(e):n?n(e):e;const fg={isValid:!1,value:null};var gv=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,fg):fg;function mg(e){const t=e.ref;return Kd(t)?t.files:Ud(t)?gv(e.refs).value:uv(t)?[...t.selectedOptions].map(({value:r})=>r):as(t)?fv(e.refs).value:mv(pt(t.value)?e.ref.value:t.value,e)}var ZD=(e,t,r,n)=>{const i={};for(const l of e){const u=se(t,l);u&&Je(i,l,u._f)}return{criteriaMode:r,names:[...e],fields:i,shouldUseNativeValidation:n}},Ml=e=>e instanceof RegExp,Di=e=>pt(e)?e:Ml(e)?e.source:bt(e)?Ml(e.value)?e.value.source:e.value:e,gg=e=>({isOnSubmit:!e||e===Hn.onSubmit,isOnBlur:e===Hn.onBlur,isOnChange:e===Hn.onChange,isOnAll:e===Hn.all,isOnTouch:e===Hn.onTouched});const hg="AsyncFunction";var JD=e=>!!e&&!!e.validate&&!!($n(e.validate)&&e.validate.constructor.name===hg||bt(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===hg)),QD=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),pg=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const qi=(e,t,r,n)=>{for(const i of r||Object.keys(e)){const l=se(e,i);if(l){const{_f:u,...d}=l;if(u){if(u.refs&&u.refs[0]&&t(u.refs[0],i)&&!n)return!0;if(u.ref&&t(u.ref,u.name)&&!n)return!0;if(qi(d,t))break}else if(bt(d)&&qi(d,t))break}}};function vg(e,t,r){const n=se(e,r);if(n||Yl(r))return{error:n,name:r};const i=r.split(".");for(;i.length;){const l=i.join("."),u=se(t,l),d=se(e,l);if(u&&!Array.isArray(u)&&r!==l)return{name:r};if(d&&d.type)return{name:l,error:d};if(d&&d.root&&d.root.type)return{name:`${l}.root`,error:d.root};i.pop()}return{name:r}}var e2=(e,t,r,n)=>{r(e);const{name:i,...l}=e;return ln(l)||Object.keys(l).length>=Object.keys(t).length||Object.keys(l).find(u=>t[u]===(!n||Hn.all))},t2=(e,t,r)=>!e||!t||e===t||Ui(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),n2=(e,t,r,n,i)=>i.isOnAll?!1:!r&&i.isOnTouch?!(t||e):(r?n.isOnBlur:i.isOnBlur)?!e:(r?n.isOnChange:i.isOnChange)?e:!0,r2=(e,t)=>!jd(se(e,t)).length&&Tt(e,t),a2=(e,t,r)=>{const n=Ui(se(e,r));return Je(n,"root",t[r]),Je(e,r,n),e},kl=e=>dr(e);function yg(e,t,r="validate"){if(kl(e)||Array.isArray(e)&&e.every(kl)||_n(e)&&!e)return{type:r,message:kl(e)?e:"",ref:t}}var Ya=e=>bt(e)&&!Ml(e)?e:{value:e,message:""},kg=async(e,t,r,n,i,l)=>{const{ref:u,refs:d,required:f,maxLength:g,minLength:m,min:h,max:p,pattern:b,validate:A,name:N,valueAsNumber:y,mount:S}=e._f,R=se(r,N);if(!S||t.has(N))return{};const w=d?d[0]:u,D=V=>{i&&w.reportValidity&&(w.setCustomValidity(_n(V)?"":V||""),w.reportValidity())},E={},I=Ud(u),M=as(u),B=I||M,U=(y||Kd(u))&&pt(u.value)&&pt(R)||Fl(u)&&u.value===""||R===""||Array.isArray(R)&&!R.length,Y=WD.bind(null,N,n,E),H=(V,j,Z,te=Nr.maxLength,ne=Nr.minLength)=>{const oe=V?j:Z;E[N]={type:V?te:ne,message:oe,ref:u,...Y(V?te:ne,oe)}};if(l?!Array.isArray(R)||!R.length:f&&(!B&&(U||zt(R))||_n(R)&&!R||M&&!fv(d).isValid||I&&!gv(d).isValid)){const{value:V,message:j}=kl(f)?{value:!!f,message:f}:Ya(f);if(V&&(E[N]={type:Nr.required,message:j,ref:w,...Y(Nr.required,j)},!n))return D(j),E}if(!U&&(!zt(h)||!zt(p))){let V,j;const Z=Ya(p),te=Ya(h);if(!zt(R)&&!isNaN(R)){const ne=u.valueAsNumber||R&&+R;zt(Z.value)||(V=ne>Z.value),zt(te.value)||(j=ne<te.value)}else{const ne=u.valueAsDate||new Date(R),oe=_e=>new Date(new Date().toDateString()+" "+_e),Q=u.type=="time",le=u.type=="week";dr(Z.value)&&R&&(V=Q?oe(R)>oe(Z.value):le?R>Z.value:ne>new Date(Z.value)),dr(te.value)&&R&&(j=Q?oe(R)<oe(te.value):le?R<te.value:ne<new Date(te.value))}if((V||j)&&(H(!!V,Z.message,te.message,Nr.max,Nr.min),!n))return D(E[N].message),E}if((g||m)&&!U&&(dr(R)||l&&Array.isArray(R))){const V=Ya(g),j=Ya(m),Z=!zt(V.value)&&R.length>+V.value,te=!zt(j.value)&&R.length<+j.value;if((Z||te)&&(H(Z,V.message,j.message),!n))return D(E[N].message),E}if(b&&!U&&dr(R)){const{value:V,message:j}=Ya(b);if(Ml(V)&&!R.match(V)&&(E[N]={type:Nr.pattern,message:j,ref:u,...Y(Nr.pattern,j)},!n))return D(j),E}if(A){if($n(A)){const V=await A(R,r),j=yg(V,w);if(j&&(E[N]={...j,...Y(Nr.validate,j.message)},!n))return D(j.message),E}else if(bt(A)){let V={};for(const j in A){if(!ln(V)&&!n)break;const Z=yg(await A[j](R,r),w,j);Z&&(V={...Z,...Y(j,Z.message)},D(Z.message),n&&(E[N]=V))}if(!ln(V)&&(E[N]={ref:w,...V},!n))return E}}return D(!0),E};const i2={mode:Hn.onSubmit,reValidateMode:Hn.onChange,shouldFocusError:!0};function s2(e={}){let t={...i2,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:$n(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},n={},i=bt(t.defaultValues)||bt(t.values)?At(t.defaultValues||t.values)||{}:{},l=t.shouldUnregister?{}:At(i),u={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},f,g=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let h={...m};const p={array:ug(),state:ug()},b=t.criteriaMode===Hn.all,A=F=>K=>{clearTimeout(g),g=setTimeout(F,K)},N=async F=>{if(!t.disabled&&(m.isValid||h.isValid||F)){const K=t.resolver?ln((await M()).errors):await U(n,!0);K!==r.isValid&&p.state.next({isValid:K})}},y=(F,K)=>{!t.disabled&&(m.isValidating||m.validatingFields||h.isValidating||h.validatingFields)&&((F||Array.from(d.mount)).forEach($=>{$&&(K?Je(r.validatingFields,$,K):Tt(r.validatingFields,$))}),p.state.next({validatingFields:r.validatingFields,isValidating:!ln(r.validatingFields)}))},S=(F,K=[],$,ae,re=!0,ee=!0)=>{if(ae&&$&&!t.disabled){if(u.action=!0,ee&&Array.isArray(se(n,F))){const fe=$(se(n,F),ae.argA,ae.argB);re&&Je(n,F,fe)}if(ee&&Array.isArray(se(r.errors,F))){const fe=$(se(r.errors,F),ae.argA,ae.argB);re&&Je(r.errors,F,fe),r2(r.errors,F)}if((m.touchedFields||h.touchedFields)&&ee&&Array.isArray(se(r.touchedFields,F))){const fe=$(se(r.touchedFields,F),ae.argA,ae.argB);re&&Je(r.touchedFields,F,fe)}(m.dirtyFields||h.dirtyFields)&&(r.dirtyFields=Pi(i,l)),p.state.next({name:F,isDirty:H(F,K),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Je(l,F,K)},R=(F,K)=>{Je(r.errors,F,K),p.state.next({errors:r.errors})},w=F=>{r.errors=F,p.state.next({errors:r.errors,isValid:!1})},D=(F,K,$,ae)=>{const re=se(n,F);if(re){const ee=se(l,F,pt($)?se(i,F):$);pt(ee)||ae&&ae.defaultChecked||K?Je(l,F,K?ee:mg(re._f)):Z(F,ee),u.mount&&N()}},E=(F,K,$,ae,re)=>{let ee=!1,fe=!1;const Se={name:F};if(!t.disabled){if(!$||ae){(m.isDirty||h.isDirty)&&(fe=r.isDirty,r.isDirty=Se.isDirty=H(),ee=fe!==Se.isDirty);const Fe=Pr(se(i,F),K);fe=!!se(r.dirtyFields,F),Fe?Tt(r.dirtyFields,F):Je(r.dirtyFields,F,!0),Se.dirtyFields=r.dirtyFields,ee=ee||(m.dirtyFields||h.dirtyFields)&&fe!==!Fe}if($){const Fe=se(r.touchedFields,F);Fe||(Je(r.touchedFields,F,$),Se.touchedFields=r.touchedFields,ee=ee||(m.touchedFields||h.touchedFields)&&Fe!==$)}ee&&re&&p.state.next(Se)}return ee?Se:{}},I=(F,K,$,ae)=>{const re=se(r.errors,F),ee=(m.isValid||h.isValid)&&_n(K)&&r.isValid!==K;if(t.delayError&&$?(f=A(()=>R(F,$)),f(t.delayError)):(clearTimeout(g),f=null,$?Je(r.errors,F,$):Tt(r.errors,F)),($?!Pr(re,$):re)||!ln(ae)||ee){const fe={...ae,...ee&&_n(K)?{isValid:K}:{},errors:r.errors,name:F};r={...r,...fe},p.state.next(fe)}},M=async F=>{y(F,!0);const K=await t.resolver(l,t.context,ZD(F||d.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return y(F),K},B=async F=>{const{errors:K}=await M(F);if(F)for(const $ of F){const ae=se(K,$);ae?Je(r.errors,$,ae):Tt(r.errors,$)}else r.errors=K;return K},U=async(F,K,$={valid:!0})=>{for(const ae in F){const re=F[ae];if(re){const{_f:ee,...fe}=re;if(ee){const Se=d.array.has(ee.name),Fe=re._f&&JD(re._f);Fe&&m.validatingFields&&y([ae],!0);const Nt=await kg(re,d.disabled,l,b,t.shouldUseNativeValidation&&!K,Se);if(Fe&&m.validatingFields&&y([ae]),Nt[ee.name]&&($.valid=!1,K))break;!K&&(se(Nt,ee.name)?Se?a2(r.errors,Nt,ee.name):Je(r.errors,ee.name,Nt[ee.name]):Tt(r.errors,ee.name))}!ln(fe)&&await U(fe,K,$)}}return $.valid},Y=()=>{for(const F of d.unMount){const K=se(n,F);K&&(K._f.refs?K._f.refs.every($=>!wu($)):!wu(K._f.ref))&&et(F)}d.unMount=new Set},H=(F,K)=>!t.disabled&&(F&&K&&Je(l,F,K),!Pr(_e(),i)),V=(F,K,$)=>ov(F,d,{...u.mount?l:pt(K)?i:dr(F)?{[F]:K}:K},$,K),j=F=>jd(se(u.mount?l:i,F,t.shouldUnregister?se(i,F,[]):[])),Z=(F,K,$={})=>{const ae=se(n,F);let re=K;if(ae){const ee=ae._f;ee&&(!ee.disabled&&Je(l,F,mv(K,ee)),re=Fl(ee.ref)&&zt(K)?"":K,uv(ee.ref)?[...ee.ref.options].forEach(fe=>fe.selected=re.includes(fe.value)):ee.refs?as(ee.ref)?ee.refs.forEach(fe=>{(!fe.defaultChecked||!fe.disabled)&&(Array.isArray(re)?fe.checked=!!re.find(Se=>Se===fe.value):fe.checked=re===fe.value||!!re)}):ee.refs.forEach(fe=>fe.checked=fe.value===re):Kd(ee.ref)?ee.ref.value="":(ee.ref.value=re,ee.ref.type||p.state.next({name:F,values:At(l)})))}($.shouldDirty||$.shouldTouch)&&E(F,re,$.shouldTouch,$.shouldDirty,!0),$.shouldValidate&&le(F)},te=(F,K,$)=>{for(const ae in K){if(!K.hasOwnProperty(ae))return;const re=K[ae],ee=F+"."+ae,fe=se(n,ee);(d.array.has(F)||bt(re)||fe&&!fe._f)&&!ga(re)?te(ee,re,$):Z(ee,re,$)}},ne=(F,K,$={})=>{const ae=se(n,F),re=d.array.has(F),ee=At(K);Je(l,F,ee),re?(p.array.next({name:F,values:At(l)}),(m.isDirty||m.dirtyFields||h.isDirty||h.dirtyFields)&&$.shouldDirty&&p.state.next({name:F,dirtyFields:Pi(i,l),isDirty:H(F,ee)})):ae&&!ae._f&&!zt(ee)?te(F,ee,$):Z(F,ee,$),pg(F,d)&&p.state.next({...r,name:F}),p.state.next({name:u.mount?F:void 0,values:At(l)})},oe=async F=>{u.mount=!0;const K=F.target;let $=K.name,ae=!0;const re=se(n,$),ee=Fe=>{ae=Number.isNaN(Fe)||ga(Fe)&&isNaN(Fe.getTime())||Pr(Fe,se(l,$,Fe))},fe=gg(t.mode),Se=gg(t.reValidateMode);if(re){let Fe,Nt;const Qn=K.type?mg(re._f):iv(F),en=F.type===Dl.BLUR||F.type===Dl.FOCUS_OUT,Qr=!QD(re._f)&&!t.resolver&&!se(r.errors,$)&&!re._f.deps||n2(en,se(r.touchedFields,$),r.isSubmitted,Se,fe),vr=pg($,d,en);Je(l,$,Qn),en?(!K||!K.readOnly)&&(re._f.onBlur&&re._f.onBlur(F),f&&f(0)):re._f.onChange&&re._f.onChange(F);const yr=E($,Qn,en),ea=!ln(yr)||vr;if(!en&&p.state.next({name:$,type:F.type,values:At(l)}),Qr)return(m.isValid||h.isValid)&&(t.mode==="onBlur"?en&&N():en||N()),ea&&p.state.next({name:$,...vr?{}:yr});if(!en&&vr&&p.state.next({...r}),t.resolver){const{errors:kr}=await M([$]);if(ee(Qn),ae){const ta=vg(r.errors,n,$),we=vg(kr,n,ta.name||$);Fe=we.error,$=we.name,Nt=ln(kr)}}else y([$],!0),Fe=(await kg(re,d.disabled,l,b,t.shouldUseNativeValidation))[$],y([$]),ee(Qn),ae&&(Fe?Nt=!1:(m.isValid||h.isValid)&&(Nt=await U(n,!0)));ae&&(re._f.deps&&le(re._f.deps),I($,Nt,Fe,yr))}},Q=(F,K)=>{if(se(r.errors,K)&&F.focus)return F.focus(),1},le=async(F,K={})=>{let $,ae;const re=Ui(F);if(t.resolver){const ee=await B(pt(F)?F:re);$=ln(ee),ae=F?!re.some(fe=>se(ee,fe)):$}else F?(ae=(await Promise.all(re.map(async ee=>{const fe=se(n,ee);return await U(fe&&fe._f?{[ee]:fe}:fe)}))).every(Boolean),!(!ae&&!r.isValid)&&N()):ae=$=await U(n);return p.state.next({...!dr(F)||(m.isValid||h.isValid)&&$!==r.isValid?{}:{name:F},...t.resolver||!F?{isValid:$}:{},errors:r.errors}),K.shouldFocus&&!ae&&qi(n,Q,F?re:d.mount),ae},_e=F=>{const K={...u.mount?l:i};return pt(F)?K:dr(F)?se(K,F):F.map($=>se(K,$))},pe=(F,K)=>({invalid:!!se((K||r).errors,F),isDirty:!!se((K||r).dirtyFields,F),error:se((K||r).errors,F),isValidating:!!se(r.validatingFields,F),isTouched:!!se((K||r).touchedFields,F)}),Qe=F=>{F&&Ui(F).forEach(K=>Tt(r.errors,K)),p.state.next({errors:F?r.errors:{}})},ot=(F,K,$)=>{const ae=(se(n,F,{_f:{}})._f||{}).ref,re=se(r.errors,F)||{},{ref:ee,message:fe,type:Se,...Fe}=re;Je(r.errors,F,{...Fe,...K,ref:ae}),p.state.next({name:F,errors:r.errors,isValid:!1}),$&&$.shouldFocus&&ae&&ae.focus&&ae.focus()},dn=(F,K)=>$n(F)?p.state.subscribe({next:$=>"values"in $&&F(V(void 0,K),$)}):V(F,K,!0),ve=F=>p.state.subscribe({next:K=>{t2(F.name,K.name,F.exact)&&e2(K,F.formState||m,ft,F.reRenderRoot)&&F.callback({values:{...l},...r,...K,defaultValues:i})}}).unsubscribe,be=F=>(u.mount=!0,h={...h,...F.formState},ve({...F,formState:h})),et=(F,K={})=>{for(const $ of F?Ui(F):d.mount)d.mount.delete($),d.array.delete($),K.keepValue||(Tt(n,$),Tt(l,$)),!K.keepError&&Tt(r.errors,$),!K.keepDirty&&Tt(r.dirtyFields,$),!K.keepTouched&&Tt(r.touchedFields,$),!K.keepIsValidating&&Tt(r.validatingFields,$),!t.shouldUnregister&&!K.keepDefaultValue&&Tt(i,$);p.state.next({values:At(l)}),p.state.next({...r,...K.keepDirty?{isDirty:H()}:{}}),!K.keepIsValid&&N()},tt=({disabled:F,name:K})=>{(_n(F)&&u.mount||F||d.disabled.has(K))&&(F?d.disabled.add(K):d.disabled.delete(K))},_t=(F,K={})=>{let $=se(n,F);const ae=_n(K.disabled)||_n(t.disabled);return Je(n,F,{...$||{},_f:{...$&&$._f?$._f:{ref:{name:F}},name:F,mount:!0,...K}}),d.mount.add(F),$?tt({disabled:_n(K.disabled)?K.disabled:t.disabled,name:F}):D(F,!0,K.value),{...ae?{disabled:K.disabled||t.disabled}:{},...t.progressive?{required:!!K.required,min:Di(K.min),max:Di(K.max),minLength:Di(K.minLength),maxLength:Di(K.maxLength),pattern:Di(K.pattern)}:{},name:F,onChange:oe,onBlur:oe,ref:re=>{if(re){_t(F,K),$=se(n,F);const ee=pt(re.value)&&re.querySelectorAll&&re.querySelectorAll("input,select,textarea")[0]||re,fe=YD(ee),Se=$._f.refs||[];if(fe?Se.find(Fe=>Fe===ee):ee===$._f.ref)return;Je(n,F,{_f:{...$._f,...fe?{refs:[...Se.filter(wu),ee,...Array.isArray(se(i,F))?[{}]:[]],ref:{type:ee.type,name:F}}:{ref:ee}}}),D(F,!1,void 0,ee)}else $=se(n,F,{}),$._f&&($._f.mount=!1),(t.shouldUnregister||K.shouldUnregister)&&!(sv(d.array,F)&&u.action)&&d.unMount.add(F)}}},cn=()=>t.shouldFocusError&&qi(n,Q,d.mount),jt=F=>{_n(F)&&(p.state.next({disabled:F}),qi(n,(K,$)=>{const ae=se(n,$);ae&&(K.disabled=ae._f.disabled||F,Array.isArray(ae._f.refs)&&ae._f.refs.forEach(re=>{re.disabled=ae._f.disabled||F}))},0,!1))},xt=(F,K)=>async $=>{let ae;$&&($.preventDefault&&$.preventDefault(),$.persist&&$.persist());let re=At(l);if(p.state.next({isSubmitting:!0}),t.resolver){const{errors:ee,values:fe}=await M();r.errors=ee,re=At(fe)}else await U(n);if(d.disabled.size)for(const ee of d.disabled)Tt(re,ee);if(Tt(r.errors,"root"),ln(r.errors)){p.state.next({errors:{}});try{await F(re,$)}catch(ee){ae=ee}}else K&&await K({...r.errors},$),cn(),setTimeout(cn);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ln(r.errors)&&!ae,submitCount:r.submitCount+1,errors:r.errors}),ae)throw ae},Jt=(F,K={})=>{se(n,F)&&(pt(K.defaultValue)?ne(F,At(se(i,F))):(ne(F,K.defaultValue),Je(i,F,At(K.defaultValue))),K.keepTouched||Tt(r.touchedFields,F),K.keepDirty||(Tt(r.dirtyFields,F),r.isDirty=K.defaultValue?H(F,At(se(i,F))):H()),K.keepError||(Tt(r.errors,F),m.isValid&&N()),p.state.next({...r}))},We=(F,K={})=>{const $=F?At(F):i,ae=At($),re=ln(F),ee=re?i:ae;if(K.keepDefaultValues||(i=$),!K.keepValues){if(K.keepDirtyValues){const fe=new Set([...d.mount,...Object.keys(Pi(i,l))]);for(const Se of Array.from(fe))se(r.dirtyFields,Se)?Je(ee,Se,se(l,Se)):ne(Se,se(ee,Se))}else{if(Ld&&pt(F))for(const fe of d.mount){const Se=se(n,fe);if(Se&&Se._f){const Fe=Array.isArray(Se._f.refs)?Se._f.refs[0]:Se._f.ref;if(Fl(Fe)){const Nt=Fe.closest("form");if(Nt){Nt.reset();break}}}}if(K.keepFieldsRef)for(const fe of d.mount)ne(fe,se(ee,fe));else n={}}l=t.shouldUnregister?K.keepDefaultValues?At(i):{}:At(ee),p.array.next({values:{...ee}}),p.state.next({values:{...ee}})}d={mount:K.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!m.isValid||!!K.keepIsValid||!!K.keepDirtyValues,u.watch=!!t.shouldUnregister,p.state.next({submitCount:K.keepSubmitCount?r.submitCount:0,isDirty:re?!1:K.keepDirty?r.isDirty:!!(K.keepDefaultValues&&!Pr(F,i)),isSubmitted:K.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:re?{}:K.keepDirtyValues?K.keepDefaultValues&&l?Pi(i,l):r.dirtyFields:K.keepDefaultValues&&F?Pi(i,F):K.keepDirty?r.dirtyFields:{},touchedFields:K.keepTouched?r.touchedFields:{},errors:K.keepErrors?r.errors:{},isSubmitSuccessful:K.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},Et=(F,K)=>We($n(F)?F(l):F,K),fn=(F,K={})=>{const $=se(n,F),ae=$&&$._f;if(ae){const re=ae.refs?ae.refs[0]:ae.ref;re.focus&&(re.focus(),K.shouldSelect&&$n(re.select)&&re.select())}},ft=F=>{r={...r,...F}},Qt={control:{register:_t,unregister:et,getFieldState:pe,handleSubmit:xt,setError:ot,_subscribe:ve,_runSchema:M,_focusError:cn,_getWatch:V,_getDirty:H,_setValid:N,_setFieldArray:S,_setDisabledField:tt,_setErrors:w,_getFieldArray:j,_reset:We,_resetDefaultValues:()=>$n(t.defaultValues)&&t.defaultValues().then(F=>{Et(F,t.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:Y,_disableForm:jt,_subjects:p,_proxyFormState:m,get _fields(){return n},get _formValues(){return l},get _state(){return u},set _state(F){u=F},get _defaultValues(){return i},get _names(){return d},set _names(F){d=F},get _formState(){return r},get _options(){return t},set _options(F){t={...t,...F}}},subscribe:be,trigger:le,register:_t,handleSubmit:xt,watch:dn,setValue:ne,getValues:_e,reset:Et,resetField:Jt,clearErrors:Qe,unregister:et,setError:ot,setFocus:fn,getFieldState:pe};return{...Qt,formControl:Qt}}function hv(e={}){const t=k.useRef(void 0),r=k.useRef(void 0),[n,i]=k.useState({isDirty:!1,isValidating:!1,isLoading:$n(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:$n(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:n},e.defaultValues&&!$n(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:u,...d}=s2(e);t.current={...d,formState:n}}const l=t.current.control;return l._options=e,Vd(()=>{const u=l._subscribe({formState:l._proxyFormState,callback:()=>i({...l._formState}),reRenderRoot:!0});return i(d=>({...d,isReady:!0})),l._formState.isReady=!0,u},[l]),k.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),k.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),k.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),k.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),k.useEffect(()=>{if(l._proxyFormState.isDirty){const u=l._getDirty();u!==n.isDirty&&l._subjects.state.next({isDirty:u})}},[l,n.isDirty]),k.useEffect(()=>{e.values&&!Pr(e.values,r.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),r.current=e.values,i(u=>({...u}))):l._resetDefaultValues()},[l,e.values]),k.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),t.current.formState=lv(n,l),t.current}function l2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bg={exports:{}},Fi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function o2(){if(_g)return Fi;_g=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,i,l){var u=null;if(l!==void 0&&(u=""+l),i.key!==void 0&&(u=""+i.key),"key"in i){l={};for(var d in i)d!=="key"&&(l[d]=i[d])}else l=i;return i=l.ref,{$$typeof:e,type:n,key:u,ref:i!==void 0?i:null,props:l}}return Fi.Fragment=t,Fi.jsx=r,Fi.jsxs=r,Fi}var Eg;function u2(){return Eg||(Eg=1,bg.exports=o2()),bg.exports}var on=u2();const d2=({children:e})=>{const t=T.Children.toArray(e);return t.length===0?null:on.jsx(zh,{variant:"warning",size:"small",children:on.jsx(Ea,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:t.map(r=>on.jsx(Rt,{size:"small",children:r},c2(r)))})})},c2=e=>{if(T.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},is={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},Tg=Zn(is),f2=({onClick:e=()=>{},erOverstyrt:t=!1})=>{const[r,n]=T.useState(t),i=()=>{r||(n(!0),e(!0))};return T.useEffect(()=>{n(t)},[t]),on.jsx(Gt,{variant:r?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:i,"aria-disabled":t,disabled:t,icon:r?on.jsx(cw,{"aria-hidden":!0,color:"var(--ax-neutral-400)",height:25,width:25,title:Tg.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):on.jsx(uw,{"aria-hidden":!0,color:"var(--ax-accent-500)",height:25,width:25,title:Tg.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var wg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Og;function m2(){return Og||(Og=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(l=i(l,n.call(this,d)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var d in l)t.call(l,d)&&l[d]&&(u=i(u,this&&this[d]||d));return u}function i(l,u){return u?l?l+" "+u:l+u:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(wg)),wg.exports}var g2=m2();const qd=l2(g2),h2="_borderbox_1a0x6_1",p2="_error_1a0x6_5",v2="_warning_1a0x6_8",y2={borderbox:h2,error:p2,warning:v2};qd.bind(y2);const k2="_aksjonspunkt_11wjs_1",b2="_erAksjonspunktApent_11wjs_4",_2="_erIkkeGodkjentAvBeslutter_11wjs_8",E2={aksjonspunkt:k2,erAksjonspunktApent:b2,erIkkeGodkjentAvBeslutter:_2};qd.bind(E2);const Ag=Zn(is),T2=({text:e,okButtonText:t,showModal:r,cancel:n,submit:i})=>on.jsxs(pa,{width:"small",open:r,"aria-label":e,onClose:n,children:[on.jsx(pa.Body,{children:on.jsx(Xi,{size:"small",level:"2",children:e})}),on.jsxs(pa.Footer,{children:[on.jsx(Gt,{variant:"primary",size:"small",onClick:i,autoFocus:!0,type:"button",children:t||Ag.formatMessage({id:"OkAvbrytModal.Ok"})}),on.jsx(Gt,{variant:"secondary",size:"small",onClick:n,type:"button",children:Ag.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]});Zn(is);const w2="_divider_1jpov_1",O2="_dividerParagraf_1jpov_8",A2="_leftPanel_1jpov_11",R2="_rightPanel_1jpov_14",S2={divider:w2,dividerParagraf:O2,leftPanel:A2,rightPanel:R2};qd.bind(S2);const pv=()=>on.jsx("span",{"data-testid":"editedIcon",children:on.jsx(hw,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});Zn(is);Zn(is);function N2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rg={exports:{}},xi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function P2(){if(Sg)return xi;Sg=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,i,l){var u=null;if(l!==void 0&&(u=""+l),i.key!==void 0&&(u=""+i.key),"key"in i){l={};for(var d in i)d!=="key"&&(l[d]=i[d])}else l=i;return i=l.ref,{$$typeof:e,type:n,key:u,ref:i!==void 0?i:null,props:l}}return xi.Fragment=t,xi.jsx=r,xi.jsxs=r,xi}var Ng;function D2(){return Ng||(Ng=1,Rg.exports=P2()),Rg.exports}var ze=D2();const ci=e=>e.reduce((t,r,n)=>({...t,[n]:i=>r(i)||!0}),{}),Ta=(e,t)=>t.split(".").reduce((r,n)=>r!==void 0?r[n]:r,e)?.message,qu=({label:e,validate:t=[],readOnly:r=!1,onChange:n,onClick:i,className:l,size:u="small",...d})=>{const{name:f,control:g,disabled:m}=d,{formState:{errors:h}}=pr(),{field:p}=di({name:f,control:g,rules:{validate:T.useMemo(()=>ci(t),[t])}}),b=Ta(h,f);return ze.jsxs(ze.Fragment,{children:[ze.jsx(TD,{size:u,disabled:m||r,checked:p.value===!0,className:l,error:!!b,...p,onChange:A=>{p.onChange(A),n&&n(A.currentTarget.checked)},onClick:()=>{i&&i()},children:e}),b&&ze.jsx(Aa,{children:Ta(h,f)})]})};var Gu={exports:{}},F2=Gu.exports,Pg;function x2(){return Pg||(Pg=1,function(e,t){(function(r,n){e.exports=n()})(F2,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,l=/\d\d/,u=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,f={},g=function(y){return(y=+y)+(y>68?1900:2e3)},m=function(y){return function(S){this[y]=+S}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(S){if(!S||S==="Z")return 0;var R=S.match(/([+-]|\d\d)/g),w=60*R[1]+(+R[2]||0);return w===0?0:R[0]==="+"?-w:w}(y)}],p=function(y){var S=f[y];return S&&(S.indexOf?S:S.s.concat(S.f))},b=function(y,S){var R,w=f.meridiem;if(w){for(var D=1;D<=24;D+=1)if(y.indexOf(w(D,0,S))>-1){R=D>12;break}}else R=y===(S?"pm":"PM");return R},A={A:[d,function(y){this.afternoon=b(y,!1)}],a:[d,function(y){this.afternoon=b(y,!0)}],Q:[i,function(y){this.month=3*(y-1)+1}],S:[i,function(y){this.milliseconds=100*+y}],SS:[l,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[u,m("seconds")],ss:[u,m("seconds")],m:[u,m("minutes")],mm:[u,m("minutes")],H:[u,m("hours")],h:[u,m("hours")],HH:[u,m("hours")],hh:[u,m("hours")],D:[u,m("day")],DD:[l,m("day")],Do:[d,function(y){var S=f.ordinal,R=y.match(/\d+/);if(this.day=R[0],S)for(var w=1;w<=31;w+=1)S(w).replace(/\[|\]/g,"")===y&&(this.day=w)}],w:[u,m("week")],ww:[l,m("week")],M:[u,m("month")],MM:[l,m("month")],MMM:[d,function(y){var S=p("months"),R=(p("monthsShort")||S.map(function(w){return w.slice(0,3)})).indexOf(y)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[d,function(y){var S=p("months").indexOf(y)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(y){this.year=g(y)}],YYYY:[/\d{4}/,m("year")],Z:h,ZZ:h};function N(y){var S,R;S=y,R=f&&f.formats;for(var w=(y=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,H,V){var j=V&&V.toUpperCase();return H||R[V]||r[V]||R[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Z,te,ne){return te||ne.slice(1)})})).match(n),D=w.length,E=0;E<D;E+=1){var I=w[E],M=A[I],B=M&&M[0],U=M&&M[1];w[E]=U?{regex:B,parser:U}:I.replace(/^\[|\]$/g,"")}return function(Y){for(var H={},V=0,j=0;V<D;V+=1){var Z=w[V];if(typeof Z=="string")j+=Z.length;else{var te=Z.regex,ne=Z.parser,oe=Y.slice(j),Q=te.exec(oe)[0];ne.call(H,Q),Y=Y.replace(Q,"")}}return function(le){var _e=le.afternoon;if(_e!==void 0){var pe=le.hours;_e?pe<12&&(le.hours+=12):pe===12&&(le.hours=0),delete le.afternoon}}(H),H}}return function(y,S,R){R.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(g=y.parseTwoDigitYear);var w=S.prototype,D=w.parse;w.parse=function(E){var I=E.date,M=E.utc,B=E.args;this.$u=M;var U=B[1];if(typeof U=="string"){var Y=B[2]===!0,H=B[3]===!0,V=Y||H,j=B[2];H&&(j=B[2]),f=this.$locale(),!Y&&j&&(f=R.Ls[j]),this.$d=function(oe,Q,le,_e){try{if(["x","X"].indexOf(Q)>-1)return new Date((Q==="X"?1e3:1)*oe);var pe=N(Q)(oe),Qe=pe.year,ot=pe.month,dn=pe.day,ve=pe.hours,be=pe.minutes,et=pe.seconds,tt=pe.milliseconds,_t=pe.zone,cn=pe.week,jt=new Date,xt=dn||(Qe||ot?1:jt.getDate()),Jt=Qe||jt.getFullYear(),We=0;Qe&&!ot||(We=ot>0?ot-1:jt.getMonth());var Et,fn=ve||0,ft=be||0,mn=et||0,Qt=tt||0;return _t?new Date(Date.UTC(Jt,We,xt,fn,ft,mn,Qt+60*_t.offset*1e3)):le?new Date(Date.UTC(Jt,We,xt,fn,ft,mn,Qt)):(Et=new Date(Jt,We,xt,fn,ft,mn,Qt),cn&&(Et=_e(Et).week(cn).toDate()),Et)}catch{return new Date("")}}(I,U,M,R),this.init(),j&&j!==!0&&(this.$L=this.locale(j).$L),V&&I!=this.format(U)&&(this.$d=new Date("")),f={}}else if(U instanceof Array)for(var Z=U.length,te=1;te<=Z;te+=1){B[1]=U[te-1];var ne=R.apply(this,B);if(ne.isValid()){this.$d=ne.$d,this.$L=ne.$L,this.init();break}te===Z&&(this.$d=new Date(""))}else D.call(this,E)}}})}(Gu)),Gu.exports}var M2=x2();const I2=N2(M2),L2="_textarea_14c7r_1",j2="_readOnlyField_14c7r_7",Dg={textarea:L2,readOnlyField:j2},B2=e=>e!=null&&e!=="",zl=({label:e,value:t,isEdited:r=!1,type:n,hideLabel:i,size:l})=>B2(t)?ze.jsxs(Ea,{gap:"space-4",children:[e&&!i&&ze.jsx(zn,{size:l,children:e}),ze.jsxs(Gn,{gap:"space-8",align:"center",wrap:!1,children:[ze.jsx(cd,{className:n==="textarea"?Dg.textarea:Dg.readOnlyField,size:l,children:t}),r&&ze.jsx(pv,{})]})]}):null;dt.extend(I2);const Fg=({label:e,description:t,validate:r=[],hideLabel:n=!1,isReadOnly:i=!1,size:l="small",onChange:u,disabledDays:d,isEdited:f,defaultMonth:g,fromDate:m,toDate:h,...p})=>{const{name:b,control:A,disabled:N}=p,{formState:{errors:y}}=pr(),{field:S}=di({name:b,control:A,rules:{validate:T.useMemo(()=>ci(r),[r])}}),R=S.value?dt(S.value,Ga,!0).format(Qs):"",[w,D]=T.useState(R),{datepickerProps:E,inputProps:I}=HP({onDateChange:U=>{if(U!==void 0){const Y=dt(U).format(Ga);u&&u(Y),S.onChange(Y),D(dt(Y,Ga,!0).format(Qs))}},defaultSelected:S.value?dt(S.value,Ga,!0).toDate():void 0,defaultMonth:g||(!S.value&&h?h:void 0),disabled:d}),M=T.useCallback(U=>{const Y=dt(U.target.value,Qs,!0).format(Ga),H=Y!=="Invalid Date";D(U.target.value),u&&u(H?Y:U.target.value),S.onChange(H?Y:U.target.value)},[D,u,S]);if(i)return ze.jsx(zl,{label:e,value:S.value?dt(S.value,Ga,!0).format(Qs):void 0,isEdited:f,hideLabel:n,size:l});const B={...E,fromDate:m,toDate:h,dropdownCaption:m&&h?!0:void 0};return ze.jsx(Pl,{...B,children:ze.jsx(Pl.Input,{...I,hideLabel:n,onChange:M,value:w,size:l,label:e,description:t,disabled:N,error:Ta(y,b)})})},C2=/^(\d+[,]?(\d{1,2})?)$/,V2=/^(\d{1,20}[,.]?(\d{1,10})?)$/,xg=({label:e,hideLabel:t,validate:r=[],readOnly:n=!1,description:i,autoFocus:l,isEdited:u,forceTwoDecimalDigits:d=!1,className:f,returnAsNumber:g=!1,onChange:m,size:h="small",...p})=>{const{name:b,control:A,disabled:N}=p,[y,S]=T.useState(!1),{formState:{errors:R}}=pr(),{field:w}=di({name:b,control:A,rules:{validate:T.useMemo(()=>ci(r),[r])}});if(n)return ze.jsx(zl,{label:e,value:w.value,isEdited:u,hideLabel:t});const D=d?C2:V2,E=w.value!==void 0&&w.value!==null?w.value.toString():"",I=!y&&d&&E!==""&&!Number.isNaN(E)?parseFloat(E).toFixed(2):E;return ze.jsx(KD,{size:h,description:i,label:e,error:Ta(R,b),...w,value:I.replace(".",","),autoFocus:l,autoComplete:"off",disabled:N,type:"text",hideLabel:t,inputMode:"decimal",className:f,onChange:M=>{S(!0);const B=M.currentTarget.value;let U;return B===""?U=null:D.test(B)?U=B.replace(",","."):U=w.value,m&&m(U),U&&g&&(U=parseFloat(U),Number.isNaN(U)&&(U=null)),w.onChange(U)},onBlur:()=>{S(!1),w.onBlur(),d&&E.slice(-1)==="."&&w.onChange(E+0)}})},K2=({label:e,description:t,validate:r=[],onChange:n,children:i,className:l,isReadOnly:u=!1,size:d="small",isEdited:f=!1,hideLegend:g=!1,...m})=>{const{name:h,control:p}=m,{formState:{errors:b}}=pr(),{field:A}=di({name:h,control:p,rules:{validate:ci(r)}});return ze.jsx(SD,{name:h,value:A.value!==void 0?A.value:null,legend:ze.jsxs(Gn,{justify:"center",gap:"space-8",children:[e,u&&f&&ze.jsx(pv,{})]}),hideLegend:g,disabled:u,description:t,size:d,error:Ta(b,h),onChange:N=>{n&&n(N),A.onChange(N)},className:l,children:i})},Xa=({label:e,selectValues:t,validate:r=[],readOnly:n=!1,description:i,hideValueOnDisable:l=!1,onChange:u,className:d,hideLabel:f,isEdited:g,size:m="small",...h})=>{const{name:p,control:b,disabled:A}=h,{formState:{errors:N}}=pr(),{field:y}=di({name:p,control:b,rules:{validate:T.useMemo(()=>ci(r),[r])}});if(n){const w=t.map(E=>E.props).find(E=>E.value===y.value),D=w?w.children:void 0;return ze.jsx(zl,{value:D,label:e,hideLabel:f,isEdited:g,size:m})}const S=y.value||"",R=!t.map(w=>w.props.value).includes(S)&&S!=="";return R&&console.warn(`No corresponding option found for value '${S}'`),ze.jsxs(Cu,{size:m,className:d,error:Ta(N,p),label:e,description:i,value:l&&A||R?"":y.value,disabled:A,onChange:w=>{u&&u(w),y.onChange(w)},hideLabel:f,children:[ze.jsx("option",{style:{display:"none"}}),",",t]})},U2="_textAreaFieldWithBadges_bdz0b_1",q2="_etikettWrapper_bdz0b_4",Mg={textAreaFieldWithBadges:U2,etikettWrapper:q2},G2=({name:e,control:t,label:r,readOnly:n,maxLength:i,badges:l,validate:u=[],parse:d=b=>b,className:f,description:g,isEdited:m,size:h="small",...p})=>{const{formState:{errors:b}}=pr(),{field:A}=di({name:e,control:t,rules:{validate:T.useMemo(()=>ci(u),[u])}});return n?ze.jsx(zl,{size:h,label:r,value:A.value,type:"textarea",isEdited:m,hideLabel:p.hideLabel}):ze.jsxs("div",{className:l?Mg.textAreaFieldWithBadges:null,children:[l&&ze.jsx("div",{className:Mg.etikettWrapper,children:l.map(({type:N,titleText:y})=>ze.jsx(pD,{variant:N,size:"small",children:y},y))}),ze.jsx(CD,{size:h,label:r,description:g,className:f,autoComplete:"off",...A,onChange:N=>A.onChange(N.currentTarget.value!==""?d(N.currentTarget.value):null),value:A.value?A.value:"",error:Ta(b,e),maxLength:i,...p})]})},vv=({formMethods:e,onSubmit:t,children:r,className:n,setDataOnUnmount:i})=>{const{handleSubmit:l,getValues:u}=e;return T.useEffect(()=>()=>{i&&i(u())},[]),ze.jsx(GD,{...e,children:ze.jsx("form",{className:n,onSubmit:t?l(d=>t(d)):void 0,children:r})})},ss={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"},Ou=Zn(ss),H2=bT(3),$2=_T(1500),Xl=({control:e,isReadOnly:t,isSubmittable:r,hasBegrunnelse:n,label:i,hasReadOnlyLabel:l=!1,hasVurderingText:u=!1,size:d})=>{const f=u?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",g=()=>t?l?Ou.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":i??Ou.formatMessage({id:f});return G.jsx(od,{value:Ou,children:(r||n)&&G.jsx(G2,{name:"begrunnelse",control:e,label:g(),validate:[qn,H2,$2,ET],maxLength:1500,readOnly:t,size:d})})},W2=e=>e&&Array.isArray(e)?e[0]?.begrunnelse??"":e&&!Array.isArray(e)&&e.begrunnelse?e.begrunnelse:"";Xl.initialValues=e=>({begrunnelse:TT(W2(e)??void 0)});Xl.transformValues=e=>({begrunnelse:jT(e.begrunnelse)});Xl.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]"},{name:"signature",type:"object",raw:`{
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
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},alias:"FaktaBegrunnelseFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""}}};const Y2=Zn(ss),z2=(e,t,r)=>!r||t?!0:!e,yv=({isReadOnly:e,isSubmittable:t,buttonText:r,onClick:n,isSubmitting:i,isDirty:l})=>G.jsx(od,{value:Y2,children:!e&&G.jsx("div",{children:G.jsxs(Gt,{size:"small",variant:"primary",loading:i,disabled:z2(l,i,t),onClick:n||wT,type:n?"button":"submit",children:[!!r&&r,!r&&G.jsx(Le,{id:"SubmitButton.ConfirmInformation"})]})})});yv.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};Zn(ss);var Bi={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var X2=Bi.exports,Ig;function Z2(){return Ig||(Ig=1,function(e,t){(function(){var r,n="4.17.21",i=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",d="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",g=500,m="__lodash_placeholder__",h=1,p=2,b=4,A=1,N=2,y=1,S=2,R=4,w=8,D=16,E=32,I=64,M=128,B=256,U=512,Y=30,H="...",V=800,j=16,Z=1,te=2,ne=3,oe=1/0,Q=9007199254740991,le=17976931348623157e292,_e=NaN,pe=4294967295,Qe=pe-1,ot=pe>>>1,dn=[["ary",M],["bind",y],["bindKey",S],["curry",w],["curryRight",D],["flip",U],["partial",E],["partialRight",I],["rearg",B]],ve="[object Arguments]",be="[object Array]",et="[object AsyncFunction]",tt="[object Boolean]",_t="[object Date]",cn="[object DOMException]",jt="[object Error]",xt="[object Function]",Jt="[object GeneratorFunction]",We="[object Map]",Et="[object Number]",fn="[object Null]",ft="[object Object]",mn="[object Promise]",Qt="[object Proxy]",F="[object RegExp]",K="[object Set]",$="[object String]",ae="[object Symbol]",re="[object Undefined]",ee="[object WeakMap]",fe="[object WeakSet]",Se="[object ArrayBuffer]",Fe="[object DataView]",Nt="[object Float32Array]",Qn="[object Float64Array]",en="[object Int8Array]",Qr="[object Int16Array]",vr="[object Int32Array]",yr="[object Uint8Array]",ea="[object Uint8ClampedArray]",kr="[object Uint16Array]",ta="[object Uint32Array]",we=/\b__p \+= '';/g,Xe=/\b(__p \+=) '' \+/g,$e=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Bn=/&(?:amp|lt|gt|quot|#39);/g,tn=/[&<>"']/g,Na=RegExp(Bn.source),Pt=RegExp(tn.source),Tn=/<%-([\s\S]+?)%>/g,Be=/<%([\s\S]+?)%>/g,ds=/<%=([\s\S]+?)%>/g,eo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,to=/^\w*$/,mi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,na=/[\\^$.*+?()[\]{}|]/g,Xv=RegExp(na.source),no=/^\s+/,Zv=/\s/,Jv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Qv=/\{\n\/\* \[wrapped with (.+)\] \*/,e0=/,? & /,t0=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,n0=/[()=,{}\[\]\/\s]/,r0=/\\(\\)?/g,a0=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Wd=/\w*$/,i0=/^[-+]0x[0-9a-f]+$/i,s0=/^0b[01]+$/i,l0=/^\[object .+?Constructor\]$/,o0=/^0o[0-7]+$/i,u0=/^(?:0|[1-9]\d*)$/,d0=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,cs=/($^)/,c0=/['\n\r\u2028\u2029\\]/g,fs="\\ud800-\\udfff",f0="\\u0300-\\u036f",m0="\\ufe20-\\ufe2f",g0="\\u20d0-\\u20ff",Yd=f0+m0+g0,zd="\\u2700-\\u27bf",Xd="a-z\\xdf-\\xf6\\xf8-\\xff",h0="\\xac\\xb1\\xd7\\xf7",p0="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",v0="\\u2000-\\u206f",y0=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Zd="A-Z\\xc0-\\xd6\\xd8-\\xde",Jd="\\ufe0e\\ufe0f",Qd=h0+p0+v0+y0,ro="['’]",k0="["+fs+"]",ec="["+Qd+"]",ms="["+Yd+"]",tc="\\d+",b0="["+zd+"]",nc="["+Xd+"]",rc="[^"+fs+Qd+tc+zd+Xd+Zd+"]",ao="\\ud83c[\\udffb-\\udfff]",_0="(?:"+ms+"|"+ao+")",ac="[^"+fs+"]",io="(?:\\ud83c[\\udde6-\\uddff]){2}",so="[\\ud800-\\udbff][\\udc00-\\udfff]",Pa="["+Zd+"]",ic="\\u200d",sc="(?:"+nc+"|"+rc+")",E0="(?:"+Pa+"|"+rc+")",lc="(?:"+ro+"(?:d|ll|m|re|s|t|ve))?",oc="(?:"+ro+"(?:D|LL|M|RE|S|T|VE))?",uc=_0+"?",dc="["+Jd+"]?",T0="(?:"+ic+"(?:"+[ac,io,so].join("|")+")"+dc+uc+")*",w0="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",O0="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",cc=dc+uc+T0,A0="(?:"+[b0,io,so].join("|")+")"+cc,R0="(?:"+[ac+ms+"?",ms,io,so,k0].join("|")+")",S0=RegExp(ro,"g"),N0=RegExp(ms,"g"),lo=RegExp(ao+"(?="+ao+")|"+R0+cc,"g"),P0=RegExp([Pa+"?"+nc+"+"+lc+"(?="+[ec,Pa,"$"].join("|")+")",E0+"+"+oc+"(?="+[ec,Pa+sc,"$"].join("|")+")",Pa+"?"+sc+"+"+lc,Pa+"+"+oc,O0,w0,tc,A0].join("|"),"g"),D0=RegExp("["+ic+fs+Yd+Jd+"]"),F0=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,x0=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],M0=-1,nt={};nt[Nt]=nt[Qn]=nt[en]=nt[Qr]=nt[vr]=nt[yr]=nt[ea]=nt[kr]=nt[ta]=!0,nt[ve]=nt[be]=nt[Se]=nt[tt]=nt[Fe]=nt[_t]=nt[jt]=nt[xt]=nt[We]=nt[Et]=nt[ft]=nt[F]=nt[K]=nt[$]=nt[ee]=!1;var Ze={};Ze[ve]=Ze[be]=Ze[Se]=Ze[Fe]=Ze[tt]=Ze[_t]=Ze[Nt]=Ze[Qn]=Ze[en]=Ze[Qr]=Ze[vr]=Ze[We]=Ze[Et]=Ze[ft]=Ze[F]=Ze[K]=Ze[$]=Ze[ae]=Ze[yr]=Ze[ea]=Ze[kr]=Ze[ta]=!0,Ze[jt]=Ze[xt]=Ze[ee]=!1;var I0={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},L0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},j0={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},B0={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},C0=parseFloat,V0=parseInt,fc=typeof el=="object"&&el&&el.Object===Object&&el,K0=typeof self=="object"&&self&&self.Object===Object&&self,Mt=fc||K0||Function("return this")(),oo=t&&!t.nodeType&&t,ra=oo&&!0&&e&&!e.nodeType&&e,mc=ra&&ra.exports===oo,uo=mc&&fc.process,wn=function(){try{var L=ra&&ra.require&&ra.require("util").types;return L||uo&&uo.binding&&uo.binding("util")}catch{}}(),gc=wn&&wn.isArrayBuffer,hc=wn&&wn.isDate,pc=wn&&wn.isMap,vc=wn&&wn.isRegExp,yc=wn&&wn.isSet,kc=wn&&wn.isTypedArray;function gn(L,W,q){switch(q.length){case 0:return L.call(W);case 1:return L.call(W,q[0]);case 2:return L.call(W,q[0],q[1]);case 3:return L.call(W,q[0],q[1],q[2])}return L.apply(W,q)}function U0(L,W,q,ue){for(var Ee=-1,Ce=L==null?0:L.length;++Ee<Ce;){var wt=L[Ee];W(ue,wt,q(wt),L)}return ue}function On(L,W){for(var q=-1,ue=L==null?0:L.length;++q<ue&&W(L[q],q,L)!==!1;);return L}function q0(L,W){for(var q=L==null?0:L.length;q--&&W(L[q],q,L)!==!1;);return L}function bc(L,W){for(var q=-1,ue=L==null?0:L.length;++q<ue;)if(!W(L[q],q,L))return!1;return!0}function Br(L,W){for(var q=-1,ue=L==null?0:L.length,Ee=0,Ce=[];++q<ue;){var wt=L[q];W(wt,q,L)&&(Ce[Ee++]=wt)}return Ce}function gs(L,W){var q=L==null?0:L.length;return!!q&&Da(L,W,0)>-1}function co(L,W,q){for(var ue=-1,Ee=L==null?0:L.length;++ue<Ee;)if(q(W,L[ue]))return!0;return!1}function at(L,W){for(var q=-1,ue=L==null?0:L.length,Ee=Array(ue);++q<ue;)Ee[q]=W(L[q],q,L);return Ee}function Cr(L,W){for(var q=-1,ue=W.length,Ee=L.length;++q<ue;)L[Ee+q]=W[q];return L}function fo(L,W,q,ue){var Ee=-1,Ce=L==null?0:L.length;for(ue&&Ce&&(q=L[++Ee]);++Ee<Ce;)q=W(q,L[Ee],Ee,L);return q}function G0(L,W,q,ue){var Ee=L==null?0:L.length;for(ue&&Ee&&(q=L[--Ee]);Ee--;)q=W(q,L[Ee],Ee,L);return q}function mo(L,W){for(var q=-1,ue=L==null?0:L.length;++q<ue;)if(W(L[q],q,L))return!0;return!1}var H0=go("length");function $0(L){return L.split("")}function W0(L){return L.match(t0)||[]}function _c(L,W,q){var ue;return q(L,function(Ee,Ce,wt){if(W(Ee,Ce,wt))return ue=Ce,!1}),ue}function hs(L,W,q,ue){for(var Ee=L.length,Ce=q+(ue?1:-1);ue?Ce--:++Ce<Ee;)if(W(L[Ce],Ce,L))return Ce;return-1}function Da(L,W,q){return W===W?iy(L,W,q):hs(L,Ec,q)}function Y0(L,W,q,ue){for(var Ee=q-1,Ce=L.length;++Ee<Ce;)if(ue(L[Ee],W))return Ee;return-1}function Ec(L){return L!==L}function Tc(L,W){var q=L==null?0:L.length;return q?po(L,W)/q:_e}function go(L){return function(W){return W==null?r:W[L]}}function ho(L){return function(W){return L==null?r:L[W]}}function wc(L,W,q,ue,Ee){return Ee(L,function(Ce,wt,Ye){q=ue?(ue=!1,Ce):W(q,Ce,wt,Ye)}),q}function z0(L,W){var q=L.length;for(L.sort(W);q--;)L[q]=L[q].value;return L}function po(L,W){for(var q,ue=-1,Ee=L.length;++ue<Ee;){var Ce=W(L[ue]);Ce!==r&&(q=q===r?Ce:q+Ce)}return q}function vo(L,W){for(var q=-1,ue=Array(L);++q<L;)ue[q]=W(q);return ue}function X0(L,W){return at(W,function(q){return[q,L[q]]})}function Oc(L){return L&&L.slice(0,Nc(L)+1).replace(no,"")}function hn(L){return function(W){return L(W)}}function yo(L,W){return at(W,function(q){return L[q]})}function gi(L,W){return L.has(W)}function Ac(L,W){for(var q=-1,ue=L.length;++q<ue&&Da(W,L[q],0)>-1;);return q}function Rc(L,W){for(var q=L.length;q--&&Da(W,L[q],0)>-1;);return q}function Z0(L,W){for(var q=L.length,ue=0;q--;)L[q]===W&&++ue;return ue}var J0=ho(I0),Q0=ho(L0);function ey(L){return"\\"+B0[L]}function ty(L,W){return L==null?r:L[W]}function Fa(L){return D0.test(L)}function ny(L){return F0.test(L)}function ry(L){for(var W,q=[];!(W=L.next()).done;)q.push(W.value);return q}function ko(L){var W=-1,q=Array(L.size);return L.forEach(function(ue,Ee){q[++W]=[Ee,ue]}),q}function Sc(L,W){return function(q){return L(W(q))}}function Vr(L,W){for(var q=-1,ue=L.length,Ee=0,Ce=[];++q<ue;){var wt=L[q];(wt===W||wt===m)&&(L[q]=m,Ce[Ee++]=q)}return Ce}function ps(L){var W=-1,q=Array(L.size);return L.forEach(function(ue){q[++W]=ue}),q}function ay(L){var W=-1,q=Array(L.size);return L.forEach(function(ue){q[++W]=[ue,ue]}),q}function iy(L,W,q){for(var ue=q-1,Ee=L.length;++ue<Ee;)if(L[ue]===W)return ue;return-1}function sy(L,W,q){for(var ue=q+1;ue--;)if(L[ue]===W)return ue;return ue}function xa(L){return Fa(L)?oy(L):H0(L)}function Cn(L){return Fa(L)?uy(L):$0(L)}function Nc(L){for(var W=L.length;W--&&Zv.test(L.charAt(W)););return W}var ly=ho(j0);function oy(L){for(var W=lo.lastIndex=0;lo.test(L);)++W;return W}function uy(L){return L.match(lo)||[]}function dy(L){return L.match(P0)||[]}var cy=function L(W){W=W==null?Mt:Ma.defaults(Mt.Object(),W,Ma.pick(Mt,x0));var q=W.Array,ue=W.Date,Ee=W.Error,Ce=W.Function,wt=W.Math,Ye=W.Object,bo=W.RegExp,fy=W.String,An=W.TypeError,vs=q.prototype,my=Ce.prototype,Ia=Ye.prototype,ys=W["__core-js_shared__"],ks=my.toString,qe=Ia.hasOwnProperty,gy=0,Pc=function(){var a=/[^.]+$/.exec(ys&&ys.keys&&ys.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),bs=Ia.toString,hy=ks.call(Ye),py=Mt._,vy=bo("^"+ks.call(qe).replace(na,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_s=mc?W.Buffer:r,Kr=W.Symbol,Es=W.Uint8Array,Dc=_s?_s.allocUnsafe:r,Ts=Sc(Ye.getPrototypeOf,Ye),Fc=Ye.create,xc=Ia.propertyIsEnumerable,ws=vs.splice,Mc=Kr?Kr.isConcatSpreadable:r,hi=Kr?Kr.iterator:r,aa=Kr?Kr.toStringTag:r,Os=function(){try{var a=ua(Ye,"defineProperty");return a({},"",{}),a}catch{}}(),yy=W.clearTimeout!==Mt.clearTimeout&&W.clearTimeout,ky=ue&&ue.now!==Mt.Date.now&&ue.now,by=W.setTimeout!==Mt.setTimeout&&W.setTimeout,As=wt.ceil,Rs=wt.floor,_o=Ye.getOwnPropertySymbols,_y=_s?_s.isBuffer:r,Ic=W.isFinite,Ey=vs.join,Ty=Sc(Ye.keys,Ye),Ot=wt.max,Bt=wt.min,wy=ue.now,Oy=W.parseInt,Lc=wt.random,Ay=vs.reverse,Eo=ua(W,"DataView"),pi=ua(W,"Map"),To=ua(W,"Promise"),La=ua(W,"Set"),vi=ua(W,"WeakMap"),yi=ua(Ye,"create"),Ss=vi&&new vi,ja={},Ry=da(Eo),Sy=da(pi),Ny=da(To),Py=da(La),Dy=da(vi),Ns=Kr?Kr.prototype:r,ki=Ns?Ns.valueOf:r,jc=Ns?Ns.toString:r;function _(a){if(ut(a)&&!Te(a)&&!(a instanceof De)){if(a instanceof Rn)return a;if(qe.call(a,"__wrapped__"))return Cf(a)}return new Rn(a)}var Ba=function(){function a(){}return function(s){if(!it(s))return{};if(Fc)return Fc(s);a.prototype=s;var o=new a;return a.prototype=r,o}}();function Ps(){}function Rn(a,s){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=r}_.templateSettings={escape:Tn,evaluate:Be,interpolate:ds,variable:"",imports:{_}},_.prototype=Ps.prototype,_.prototype.constructor=_,Rn.prototype=Ba(Ps.prototype),Rn.prototype.constructor=Rn;function De(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pe,this.__views__=[]}function Fy(){var a=new De(this.__wrapped__);return a.__actions__=nn(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=nn(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=nn(this.__views__),a}function xy(){if(this.__filtered__){var a=new De(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function My(){var a=this.__wrapped__.value(),s=this.__dir__,o=Te(a),c=s<0,v=o?a.length:0,O=$k(0,v,this.__views__),P=O.start,x=O.end,C=x-P,z=c?x:P-1,X=this.__iteratees__,J=X.length,ie=0,ce=Bt(C,this.__takeCount__);if(!o||!c&&v==C&&ce==C)return of(a,this.__actions__);var ye=[];e:for(;C--&&ie<ce;){z+=s;for(var Ae=-1,ke=a[z];++Ae<J;){var Ne=X[Ae],xe=Ne.iteratee,yn=Ne.type,Wt=xe(ke);if(yn==te)ke=Wt;else if(!Wt){if(yn==Z)continue e;break e}}ye[ie++]=ke}return ye}De.prototype=Ba(Ps.prototype),De.prototype.constructor=De;function ia(a){var s=-1,o=a==null?0:a.length;for(this.clear();++s<o;){var c=a[s];this.set(c[0],c[1])}}function Iy(){this.__data__=yi?yi(null):{},this.size=0}function Ly(a){var s=this.has(a)&&delete this.__data__[a];return this.size-=s?1:0,s}function jy(a){var s=this.__data__;if(yi){var o=s[a];return o===f?r:o}return qe.call(s,a)?s[a]:r}function By(a){var s=this.__data__;return yi?s[a]!==r:qe.call(s,a)}function Cy(a,s){var o=this.__data__;return this.size+=this.has(a)?0:1,o[a]=yi&&s===r?f:s,this}ia.prototype.clear=Iy,ia.prototype.delete=Ly,ia.prototype.get=jy,ia.prototype.has=By,ia.prototype.set=Cy;function br(a){var s=-1,o=a==null?0:a.length;for(this.clear();++s<o;){var c=a[s];this.set(c[0],c[1])}}function Vy(){this.__data__=[],this.size=0}function Ky(a){var s=this.__data__,o=Ds(s,a);if(o<0)return!1;var c=s.length-1;return o==c?s.pop():ws.call(s,o,1),--this.size,!0}function Uy(a){var s=this.__data__,o=Ds(s,a);return o<0?r:s[o][1]}function qy(a){return Ds(this.__data__,a)>-1}function Gy(a,s){var o=this.__data__,c=Ds(o,a);return c<0?(++this.size,o.push([a,s])):o[c][1]=s,this}br.prototype.clear=Vy,br.prototype.delete=Ky,br.prototype.get=Uy,br.prototype.has=qy,br.prototype.set=Gy;function _r(a){var s=-1,o=a==null?0:a.length;for(this.clear();++s<o;){var c=a[s];this.set(c[0],c[1])}}function Hy(){this.size=0,this.__data__={hash:new ia,map:new(pi||br),string:new ia}}function $y(a){var s=qs(this,a).delete(a);return this.size-=s?1:0,s}function Wy(a){return qs(this,a).get(a)}function Yy(a){return qs(this,a).has(a)}function zy(a,s){var o=qs(this,a),c=o.size;return o.set(a,s),this.size+=o.size==c?0:1,this}_r.prototype.clear=Hy,_r.prototype.delete=$y,_r.prototype.get=Wy,_r.prototype.has=Yy,_r.prototype.set=zy;function sa(a){var s=-1,o=a==null?0:a.length;for(this.__data__=new _r;++s<o;)this.add(a[s])}function Xy(a){return this.__data__.set(a,f),this}function Zy(a){return this.__data__.has(a)}sa.prototype.add=sa.prototype.push=Xy,sa.prototype.has=Zy;function Vn(a){var s=this.__data__=new br(a);this.size=s.size}function Jy(){this.__data__=new br,this.size=0}function Qy(a){var s=this.__data__,o=s.delete(a);return this.size=s.size,o}function ek(a){return this.__data__.get(a)}function tk(a){return this.__data__.has(a)}function nk(a,s){var o=this.__data__;if(o instanceof br){var c=o.__data__;if(!pi||c.length<i-1)return c.push([a,s]),this.size=++o.size,this;o=this.__data__=new _r(c)}return o.set(a,s),this.size=o.size,this}Vn.prototype.clear=Jy,Vn.prototype.delete=Qy,Vn.prototype.get=ek,Vn.prototype.has=tk,Vn.prototype.set=nk;function Bc(a,s){var o=Te(a),c=!o&&ca(a),v=!o&&!c&&$r(a),O=!o&&!c&&!v&&Ua(a),P=o||c||v||O,x=P?vo(a.length,fy):[],C=x.length;for(var z in a)(s||qe.call(a,z))&&!(P&&(z=="length"||v&&(z=="offset"||z=="parent")||O&&(z=="buffer"||z=="byteLength"||z=="byteOffset")||Or(z,C)))&&x.push(z);return x}function Cc(a){var s=a.length;return s?a[Mo(0,s-1)]:r}function rk(a,s){return Gs(nn(a),la(s,0,a.length))}function ak(a){return Gs(nn(a))}function wo(a,s,o){(o!==r&&!Kn(a[s],o)||o===r&&!(s in a))&&Er(a,s,o)}function bi(a,s,o){var c=a[s];(!(qe.call(a,s)&&Kn(c,o))||o===r&&!(s in a))&&Er(a,s,o)}function Ds(a,s){for(var o=a.length;o--;)if(Kn(a[o][0],s))return o;return-1}function ik(a,s,o,c){return Ur(a,function(v,O,P){s(c,v,o(v),P)}),c}function Vc(a,s){return a&&tr(s,Dt(s),a)}function sk(a,s){return a&&tr(s,an(s),a)}function Er(a,s,o){s=="__proto__"&&Os?Os(a,s,{configurable:!0,enumerable:!0,value:o,writable:!0}):a[s]=o}function Oo(a,s){for(var o=-1,c=s.length,v=q(c),O=a==null;++o<c;)v[o]=O?r:iu(a,s[o]);return v}function la(a,s,o){return a===a&&(o!==r&&(a=a<=o?a:o),s!==r&&(a=a>=s?a:s)),a}function Sn(a,s,o,c,v,O){var P,x=s&h,C=s&p,z=s&b;if(o&&(P=v?o(a,c,v,O):o(a)),P!==r)return P;if(!it(a))return a;var X=Te(a);if(X){if(P=Yk(a),!x)return nn(a,P)}else{var J=Ct(a),ie=J==xt||J==Jt;if($r(a))return cf(a,x);if(J==ft||J==ve||ie&&!v){if(P=C||ie?{}:Pf(a),!x)return C?jk(a,sk(P,a)):Lk(a,Vc(P,a))}else{if(!Ze[J])return v?a:{};P=zk(a,J,x)}}O||(O=new Vn);var ce=O.get(a);if(ce)return ce;O.set(a,P),im(a)?a.forEach(function(ke){P.add(Sn(ke,s,o,ke,a,O))}):rm(a)&&a.forEach(function(ke,Ne){P.set(Ne,Sn(ke,s,o,Ne,a,O))});var ye=z?C?Ho:Go:C?an:Dt,Ae=X?r:ye(a);return On(Ae||a,function(ke,Ne){Ae&&(Ne=ke,ke=a[Ne]),bi(P,Ne,Sn(ke,s,o,Ne,a,O))}),P}function lk(a){var s=Dt(a);return function(o){return Kc(o,a,s)}}function Kc(a,s,o){var c=o.length;if(a==null)return!c;for(a=Ye(a);c--;){var v=o[c],O=s[v],P=a[v];if(P===r&&!(v in a)||!O(P))return!1}return!0}function Uc(a,s,o){if(typeof a!="function")throw new An(u);return Ri(function(){a.apply(r,o)},s)}function _i(a,s,o,c){var v=-1,O=gs,P=!0,x=a.length,C=[],z=s.length;if(!x)return C;o&&(s=at(s,hn(o))),c?(O=co,P=!1):s.length>=i&&(O=gi,P=!1,s=new sa(s));e:for(;++v<x;){var X=a[v],J=o==null?X:o(X);if(X=c||X!==0?X:0,P&&J===J){for(var ie=z;ie--;)if(s[ie]===J)continue e;C.push(X)}else O(s,J,c)||C.push(X)}return C}var Ur=pf(er),qc=pf(Ro,!0);function ok(a,s){var o=!0;return Ur(a,function(c,v,O){return o=!!s(c,v,O),o}),o}function Fs(a,s,o){for(var c=-1,v=a.length;++c<v;){var O=a[c],P=s(O);if(P!=null&&(x===r?P===P&&!vn(P):o(P,x)))var x=P,C=O}return C}function uk(a,s,o,c){var v=a.length;for(o=Oe(o),o<0&&(o=-o>v?0:v+o),c=c===r||c>v?v:Oe(c),c<0&&(c+=v),c=o>c?0:lm(c);o<c;)a[o++]=s;return a}function Gc(a,s){var o=[];return Ur(a,function(c,v,O){s(c,v,O)&&o.push(c)}),o}function It(a,s,o,c,v){var O=-1,P=a.length;for(o||(o=Zk),v||(v=[]);++O<P;){var x=a[O];s>0&&o(x)?s>1?It(x,s-1,o,c,v):Cr(v,x):c||(v[v.length]=x)}return v}var Ao=vf(),Hc=vf(!0);function er(a,s){return a&&Ao(a,s,Dt)}function Ro(a,s){return a&&Hc(a,s,Dt)}function xs(a,s){return Br(s,function(o){return Ar(a[o])})}function oa(a,s){s=Gr(s,a);for(var o=0,c=s.length;a!=null&&o<c;)a=a[nr(s[o++])];return o&&o==c?a:r}function $c(a,s,o){var c=s(a);return Te(a)?c:Cr(c,o(a))}function Ht(a){return a==null?a===r?re:fn:aa&&aa in Ye(a)?Hk(a):ab(a)}function So(a,s){return a>s}function dk(a,s){return a!=null&&qe.call(a,s)}function ck(a,s){return a!=null&&s in Ye(a)}function fk(a,s,o){return a>=Bt(s,o)&&a<Ot(s,o)}function No(a,s,o){for(var c=o?co:gs,v=a[0].length,O=a.length,P=O,x=q(O),C=1/0,z=[];P--;){var X=a[P];P&&s&&(X=at(X,hn(s))),C=Bt(X.length,C),x[P]=!o&&(s||v>=120&&X.length>=120)?new sa(P&&X):r}X=a[0];var J=-1,ie=x[0];e:for(;++J<v&&z.length<C;){var ce=X[J],ye=s?s(ce):ce;if(ce=o||ce!==0?ce:0,!(ie?gi(ie,ye):c(z,ye,o))){for(P=O;--P;){var Ae=x[P];if(!(Ae?gi(Ae,ye):c(a[P],ye,o)))continue e}ie&&ie.push(ye),z.push(ce)}}return z}function mk(a,s,o,c){return er(a,function(v,O,P){s(c,o(v),O,P)}),c}function Ei(a,s,o){s=Gr(s,a),a=Mf(a,s);var c=a==null?a:a[nr(Pn(s))];return c==null?r:gn(c,a,o)}function Wc(a){return ut(a)&&Ht(a)==ve}function gk(a){return ut(a)&&Ht(a)==Se}function hk(a){return ut(a)&&Ht(a)==_t}function Ti(a,s,o,c,v){return a===s?!0:a==null||s==null||!ut(a)&&!ut(s)?a!==a&&s!==s:pk(a,s,o,c,Ti,v)}function pk(a,s,o,c,v,O){var P=Te(a),x=Te(s),C=P?be:Ct(a),z=x?be:Ct(s);C=C==ve?ft:C,z=z==ve?ft:z;var X=C==ft,J=z==ft,ie=C==z;if(ie&&$r(a)){if(!$r(s))return!1;P=!0,X=!1}if(ie&&!X)return O||(O=new Vn),P||Ua(a)?Rf(a,s,o,c,v,O):qk(a,s,C,o,c,v,O);if(!(o&A)){var ce=X&&qe.call(a,"__wrapped__"),ye=J&&qe.call(s,"__wrapped__");if(ce||ye){var Ae=ce?a.value():a,ke=ye?s.value():s;return O||(O=new Vn),v(Ae,ke,o,c,O)}}return ie?(O||(O=new Vn),Gk(a,s,o,c,v,O)):!1}function vk(a){return ut(a)&&Ct(a)==We}function Po(a,s,o,c){var v=o.length,O=v,P=!c;if(a==null)return!O;for(a=Ye(a);v--;){var x=o[v];if(P&&x[2]?x[1]!==a[x[0]]:!(x[0]in a))return!1}for(;++v<O;){x=o[v];var C=x[0],z=a[C],X=x[1];if(P&&x[2]){if(z===r&&!(C in a))return!1}else{var J=new Vn;if(c)var ie=c(z,X,C,a,s,J);if(!(ie===r?Ti(X,z,A|N,c,J):ie))return!1}}return!0}function Yc(a){if(!it(a)||Qk(a))return!1;var s=Ar(a)?vy:l0;return s.test(da(a))}function yk(a){return ut(a)&&Ht(a)==F}function kk(a){return ut(a)&&Ct(a)==K}function bk(a){return ut(a)&&Xs(a.length)&&!!nt[Ht(a)]}function zc(a){return typeof a=="function"?a:a==null?sn:typeof a=="object"?Te(a)?Jc(a[0],a[1]):Zc(a):ym(a)}function Do(a){if(!Ai(a))return Ty(a);var s=[];for(var o in Ye(a))qe.call(a,o)&&o!="constructor"&&s.push(o);return s}function _k(a){if(!it(a))return rb(a);var s=Ai(a),o=[];for(var c in a)c=="constructor"&&(s||!qe.call(a,c))||o.push(c);return o}function Fo(a,s){return a<s}function Xc(a,s){var o=-1,c=rn(a)?q(a.length):[];return Ur(a,function(v,O,P){c[++o]=s(v,O,P)}),c}function Zc(a){var s=Wo(a);return s.length==1&&s[0][2]?Ff(s[0][0],s[0][1]):function(o){return o===a||Po(o,a,s)}}function Jc(a,s){return zo(a)&&Df(s)?Ff(nr(a),s):function(o){var c=iu(o,a);return c===r&&c===s?su(o,a):Ti(s,c,A|N)}}function Ms(a,s,o,c,v){a!==s&&Ao(s,function(O,P){if(v||(v=new Vn),it(O))Ek(a,s,P,o,Ms,c,v);else{var x=c?c(Zo(a,P),O,P+"",a,s,v):r;x===r&&(x=O),wo(a,P,x)}},an)}function Ek(a,s,o,c,v,O,P){var x=Zo(a,o),C=Zo(s,o),z=P.get(C);if(z){wo(a,o,z);return}var X=O?O(x,C,o+"",a,s,P):r,J=X===r;if(J){var ie=Te(C),ce=!ie&&$r(C),ye=!ie&&!ce&&Ua(C);X=C,ie||ce||ye?Te(x)?X=x:mt(x)?X=nn(x):ce?(J=!1,X=cf(C,!0)):ye?(J=!1,X=ff(C,!0)):X=[]:Si(C)||ca(C)?(X=x,ca(x)?X=om(x):(!it(x)||Ar(x))&&(X=Pf(C))):J=!1}J&&(P.set(C,X),v(X,C,c,O,P),P.delete(C)),wo(a,o,X)}function Qc(a,s){var o=a.length;if(o)return s+=s<0?o:0,Or(s,o)?a[s]:r}function ef(a,s,o){s.length?s=at(s,function(O){return Te(O)?function(P){return oa(P,O.length===1?O[0]:O)}:O}):s=[sn];var c=-1;s=at(s,hn(he()));var v=Xc(a,function(O,P,x){var C=at(s,function(z){return z(O)});return{criteria:C,index:++c,value:O}});return z0(v,function(O,P){return Ik(O,P,o)})}function Tk(a,s){return tf(a,s,function(o,c){return su(a,c)})}function tf(a,s,o){for(var c=-1,v=s.length,O={};++c<v;){var P=s[c],x=oa(a,P);o(x,P)&&wi(O,Gr(P,a),x)}return O}function wk(a){return function(s){return oa(s,a)}}function xo(a,s,o,c){var v=c?Y0:Da,O=-1,P=s.length,x=a;for(a===s&&(s=nn(s)),o&&(x=at(a,hn(o)));++O<P;)for(var C=0,z=s[O],X=o?o(z):z;(C=v(x,X,C,c))>-1;)x!==a&&ws.call(x,C,1),ws.call(a,C,1);return a}function nf(a,s){for(var o=a?s.length:0,c=o-1;o--;){var v=s[o];if(o==c||v!==O){var O=v;Or(v)?ws.call(a,v,1):jo(a,v)}}return a}function Mo(a,s){return a+Rs(Lc()*(s-a+1))}function Ok(a,s,o,c){for(var v=-1,O=Ot(As((s-a)/(o||1)),0),P=q(O);O--;)P[c?O:++v]=a,a+=o;return P}function Io(a,s){var o="";if(!a||s<1||s>Q)return o;do s%2&&(o+=a),s=Rs(s/2),s&&(a+=a);while(s);return o}function Re(a,s){return Jo(xf(a,s,sn),a+"")}function Ak(a){return Cc(qa(a))}function Rk(a,s){var o=qa(a);return Gs(o,la(s,0,o.length))}function wi(a,s,o,c){if(!it(a))return a;s=Gr(s,a);for(var v=-1,O=s.length,P=O-1,x=a;x!=null&&++v<O;){var C=nr(s[v]),z=o;if(C==="__proto__"||C==="constructor"||C==="prototype")return a;if(v!=P){var X=x[C];z=c?c(X,C,x):r,z===r&&(z=it(X)?X:Or(s[v+1])?[]:{})}bi(x,C,z),x=x[C]}return a}var rf=Ss?function(a,s){return Ss.set(a,s),a}:sn,Sk=Os?function(a,s){return Os(a,"toString",{configurable:!0,enumerable:!1,value:ou(s),writable:!0})}:sn;function Nk(a){return Gs(qa(a))}function Nn(a,s,o){var c=-1,v=a.length;s<0&&(s=-s>v?0:v+s),o=o>v?v:o,o<0&&(o+=v),v=s>o?0:o-s>>>0,s>>>=0;for(var O=q(v);++c<v;)O[c]=a[c+s];return O}function Pk(a,s){var o;return Ur(a,function(c,v,O){return o=s(c,v,O),!o}),!!o}function Is(a,s,o){var c=0,v=a==null?c:a.length;if(typeof s=="number"&&s===s&&v<=ot){for(;c<v;){var O=c+v>>>1,P=a[O];P!==null&&!vn(P)&&(o?P<=s:P<s)?c=O+1:v=O}return v}return Lo(a,s,sn,o)}function Lo(a,s,o,c){var v=0,O=a==null?0:a.length;if(O===0)return 0;s=o(s);for(var P=s!==s,x=s===null,C=vn(s),z=s===r;v<O;){var X=Rs((v+O)/2),J=o(a[X]),ie=J!==r,ce=J===null,ye=J===J,Ae=vn(J);if(P)var ke=c||ye;else z?ke=ye&&(c||ie):x?ke=ye&&ie&&(c||!ce):C?ke=ye&&ie&&!ce&&(c||!Ae):ce||Ae?ke=!1:ke=c?J<=s:J<s;ke?v=X+1:O=X}return Bt(O,Qe)}function af(a,s){for(var o=-1,c=a.length,v=0,O=[];++o<c;){var P=a[o],x=s?s(P):P;if(!o||!Kn(x,C)){var C=x;O[v++]=P===0?0:P}}return O}function sf(a){return typeof a=="number"?a:vn(a)?_e:+a}function pn(a){if(typeof a=="string")return a;if(Te(a))return at(a,pn)+"";if(vn(a))return jc?jc.call(a):"";var s=a+"";return s=="0"&&1/a==-oe?"-0":s}function qr(a,s,o){var c=-1,v=gs,O=a.length,P=!0,x=[],C=x;if(o)P=!1,v=co;else if(O>=i){var z=s?null:Kk(a);if(z)return ps(z);P=!1,v=gi,C=new sa}else C=s?[]:x;e:for(;++c<O;){var X=a[c],J=s?s(X):X;if(X=o||X!==0?X:0,P&&J===J){for(var ie=C.length;ie--;)if(C[ie]===J)continue e;s&&C.push(J),x.push(X)}else v(C,J,o)||(C!==x&&C.push(J),x.push(X))}return x}function jo(a,s){return s=Gr(s,a),a=Mf(a,s),a==null||delete a[nr(Pn(s))]}function lf(a,s,o,c){return wi(a,s,o(oa(a,s)),c)}function Ls(a,s,o,c){for(var v=a.length,O=c?v:-1;(c?O--:++O<v)&&s(a[O],O,a););return o?Nn(a,c?0:O,c?O+1:v):Nn(a,c?O+1:0,c?v:O)}function of(a,s){var o=a;return o instanceof De&&(o=o.value()),fo(s,function(c,v){return v.func.apply(v.thisArg,Cr([c],v.args))},o)}function Bo(a,s,o){var c=a.length;if(c<2)return c?qr(a[0]):[];for(var v=-1,O=q(c);++v<c;)for(var P=a[v],x=-1;++x<c;)x!=v&&(O[v]=_i(O[v]||P,a[x],s,o));return qr(It(O,1),s,o)}function uf(a,s,o){for(var c=-1,v=a.length,O=s.length,P={};++c<v;){var x=c<O?s[c]:r;o(P,a[c],x)}return P}function Co(a){return mt(a)?a:[]}function Vo(a){return typeof a=="function"?a:sn}function Gr(a,s){return Te(a)?a:zo(a,s)?[a]:Bf(Ke(a))}var Dk=Re;function Hr(a,s,o){var c=a.length;return o=o===r?c:o,!s&&o>=c?a:Nn(a,s,o)}var df=yy||function(a){return Mt.clearTimeout(a)};function cf(a,s){if(s)return a.slice();var o=a.length,c=Dc?Dc(o):new a.constructor(o);return a.copy(c),c}function Ko(a){var s=new a.constructor(a.byteLength);return new Es(s).set(new Es(a)),s}function Fk(a,s){var o=s?Ko(a.buffer):a.buffer;return new a.constructor(o,a.byteOffset,a.byteLength)}function xk(a){var s=new a.constructor(a.source,Wd.exec(a));return s.lastIndex=a.lastIndex,s}function Mk(a){return ki?Ye(ki.call(a)):{}}function ff(a,s){var o=s?Ko(a.buffer):a.buffer;return new a.constructor(o,a.byteOffset,a.length)}function mf(a,s){if(a!==s){var o=a!==r,c=a===null,v=a===a,O=vn(a),P=s!==r,x=s===null,C=s===s,z=vn(s);if(!x&&!z&&!O&&a>s||O&&P&&C&&!x&&!z||c&&P&&C||!o&&C||!v)return 1;if(!c&&!O&&!z&&a<s||z&&o&&v&&!c&&!O||x&&o&&v||!P&&v||!C)return-1}return 0}function Ik(a,s,o){for(var c=-1,v=a.criteria,O=s.criteria,P=v.length,x=o.length;++c<P;){var C=mf(v[c],O[c]);if(C){if(c>=x)return C;var z=o[c];return C*(z=="desc"?-1:1)}}return a.index-s.index}function gf(a,s,o,c){for(var v=-1,O=a.length,P=o.length,x=-1,C=s.length,z=Ot(O-P,0),X=q(C+z),J=!c;++x<C;)X[x]=s[x];for(;++v<P;)(J||v<O)&&(X[o[v]]=a[v]);for(;z--;)X[x++]=a[v++];return X}function hf(a,s,o,c){for(var v=-1,O=a.length,P=-1,x=o.length,C=-1,z=s.length,X=Ot(O-x,0),J=q(X+z),ie=!c;++v<X;)J[v]=a[v];for(var ce=v;++C<z;)J[ce+C]=s[C];for(;++P<x;)(ie||v<O)&&(J[ce+o[P]]=a[v++]);return J}function nn(a,s){var o=-1,c=a.length;for(s||(s=q(c));++o<c;)s[o]=a[o];return s}function tr(a,s,o,c){var v=!o;o||(o={});for(var O=-1,P=s.length;++O<P;){var x=s[O],C=c?c(o[x],a[x],x,o,a):r;C===r&&(C=a[x]),v?Er(o,x,C):bi(o,x,C)}return o}function Lk(a,s){return tr(a,Yo(a),s)}function jk(a,s){return tr(a,Sf(a),s)}function js(a,s){return function(o,c){var v=Te(o)?U0:ik,O=s?s():{};return v(o,a,he(c,2),O)}}function Ca(a){return Re(function(s,o){var c=-1,v=o.length,O=v>1?o[v-1]:r,P=v>2?o[2]:r;for(O=a.length>3&&typeof O=="function"?(v--,O):r,P&&$t(o[0],o[1],P)&&(O=v<3?r:O,v=1),s=Ye(s);++c<v;){var x=o[c];x&&a(s,x,c,O)}return s})}function pf(a,s){return function(o,c){if(o==null)return o;if(!rn(o))return a(o,c);for(var v=o.length,O=s?v:-1,P=Ye(o);(s?O--:++O<v)&&c(P[O],O,P)!==!1;);return o}}function vf(a){return function(s,o,c){for(var v=-1,O=Ye(s),P=c(s),x=P.length;x--;){var C=P[a?x:++v];if(o(O[C],C,O)===!1)break}return s}}function Bk(a,s,o){var c=s&y,v=Oi(a);function O(){var P=this&&this!==Mt&&this instanceof O?v:a;return P.apply(c?o:this,arguments)}return O}function yf(a){return function(s){s=Ke(s);var o=Fa(s)?Cn(s):r,c=o?o[0]:s.charAt(0),v=o?Hr(o,1).join(""):s.slice(1);return c[a]()+v}}function Va(a){return function(s){return fo(pm(hm(s).replace(S0,"")),a,"")}}function Oi(a){return function(){var s=arguments;switch(s.length){case 0:return new a;case 1:return new a(s[0]);case 2:return new a(s[0],s[1]);case 3:return new a(s[0],s[1],s[2]);case 4:return new a(s[0],s[1],s[2],s[3]);case 5:return new a(s[0],s[1],s[2],s[3],s[4]);case 6:return new a(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new a(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var o=Ba(a.prototype),c=a.apply(o,s);return it(c)?c:o}}function Ck(a,s,o){var c=Oi(a);function v(){for(var O=arguments.length,P=q(O),x=O,C=Ka(v);x--;)P[x]=arguments[x];var z=O<3&&P[0]!==C&&P[O-1]!==C?[]:Vr(P,C);if(O-=z.length,O<o)return Tf(a,s,Bs,v.placeholder,r,P,z,r,r,o-O);var X=this&&this!==Mt&&this instanceof v?c:a;return gn(X,this,P)}return v}function kf(a){return function(s,o,c){var v=Ye(s);if(!rn(s)){var O=he(o,3);s=Dt(s),o=function(x){return O(v[x],x,v)}}var P=a(s,o,c);return P>-1?v[O?s[P]:P]:r}}function bf(a){return wr(function(s){var o=s.length,c=o,v=Rn.prototype.thru;for(a&&s.reverse();c--;){var O=s[c];if(typeof O!="function")throw new An(u);if(v&&!P&&Us(O)=="wrapper")var P=new Rn([],!0)}for(c=P?c:o;++c<o;){O=s[c];var x=Us(O),C=x=="wrapper"?$o(O):r;C&&Xo(C[0])&&C[1]==(M|w|E|B)&&!C[4].length&&C[9]==1?P=P[Us(C[0])].apply(P,C[3]):P=O.length==1&&Xo(O)?P[x]():P.thru(O)}return function(){var z=arguments,X=z[0];if(P&&z.length==1&&Te(X))return P.plant(X).value();for(var J=0,ie=o?s[J].apply(this,z):X;++J<o;)ie=s[J].call(this,ie);return ie}})}function Bs(a,s,o,c,v,O,P,x,C,z){var X=s&M,J=s&y,ie=s&S,ce=s&(w|D),ye=s&U,Ae=ie?r:Oi(a);function ke(){for(var Ne=arguments.length,xe=q(Ne),yn=Ne;yn--;)xe[yn]=arguments[yn];if(ce)var Wt=Ka(ke),kn=Z0(xe,Wt);if(c&&(xe=gf(xe,c,v,ce)),O&&(xe=hf(xe,O,P,ce)),Ne-=kn,ce&&Ne<z){var gt=Vr(xe,Wt);return Tf(a,s,Bs,ke.placeholder,o,xe,gt,x,C,z-Ne)}var Un=J?o:this,Sr=ie?Un[a]:a;return Ne=xe.length,x?xe=ib(xe,x):ye&&Ne>1&&xe.reverse(),X&&C<Ne&&(xe.length=C),this&&this!==Mt&&this instanceof ke&&(Sr=Ae||Oi(Sr)),Sr.apply(Un,xe)}return ke}function _f(a,s){return function(o,c){return mk(o,a,s(c),{})}}function Cs(a,s){return function(o,c){var v;if(o===r&&c===r)return s;if(o!==r&&(v=o),c!==r){if(v===r)return c;typeof o=="string"||typeof c=="string"?(o=pn(o),c=pn(c)):(o=sf(o),c=sf(c)),v=a(o,c)}return v}}function Uo(a){return wr(function(s){return s=at(s,hn(he())),Re(function(o){var c=this;return a(s,function(v){return gn(v,c,o)})})})}function Vs(a,s){s=s===r?" ":pn(s);var o=s.length;if(o<2)return o?Io(s,a):s;var c=Io(s,As(a/xa(s)));return Fa(s)?Hr(Cn(c),0,a).join(""):c.slice(0,a)}function Vk(a,s,o,c){var v=s&y,O=Oi(a);function P(){for(var x=-1,C=arguments.length,z=-1,X=c.length,J=q(X+C),ie=this&&this!==Mt&&this instanceof P?O:a;++z<X;)J[z]=c[z];for(;C--;)J[z++]=arguments[++x];return gn(ie,v?o:this,J)}return P}function Ef(a){return function(s,o,c){return c&&typeof c!="number"&&$t(s,o,c)&&(o=c=r),s=Rr(s),o===r?(o=s,s=0):o=Rr(o),c=c===r?s<o?1:-1:Rr(c),Ok(s,o,c,a)}}function Ks(a){return function(s,o){return typeof s=="string"&&typeof o=="string"||(s=Dn(s),o=Dn(o)),a(s,o)}}function Tf(a,s,o,c,v,O,P,x,C,z){var X=s&w,J=X?P:r,ie=X?r:P,ce=X?O:r,ye=X?r:O;s|=X?E:I,s&=~(X?I:E),s&R||(s&=-4);var Ae=[a,s,v,ce,J,ye,ie,x,C,z],ke=o.apply(r,Ae);return Xo(a)&&If(ke,Ae),ke.placeholder=c,Lf(ke,a,s)}function qo(a){var s=wt[a];return function(o,c){if(o=Dn(o),c=c==null?0:Bt(Oe(c),292),c&&Ic(o)){var v=(Ke(o)+"e").split("e"),O=s(v[0]+"e"+(+v[1]+c));return v=(Ke(O)+"e").split("e"),+(v[0]+"e"+(+v[1]-c))}return s(o)}}var Kk=La&&1/ps(new La([,-0]))[1]==oe?function(a){return new La(a)}:cu;function wf(a){return function(s){var o=Ct(s);return o==We?ko(s):o==K?ay(s):X0(s,a(s))}}function Tr(a,s,o,c,v,O,P,x){var C=s&S;if(!C&&typeof a!="function")throw new An(u);var z=c?c.length:0;if(z||(s&=-97,c=v=r),P=P===r?P:Ot(Oe(P),0),x=x===r?x:Oe(x),z-=v?v.length:0,s&I){var X=c,J=v;c=v=r}var ie=C?r:$o(a),ce=[a,s,o,c,v,X,J,O,P,x];if(ie&&nb(ce,ie),a=ce[0],s=ce[1],o=ce[2],c=ce[3],v=ce[4],x=ce[9]=ce[9]===r?C?0:a.length:Ot(ce[9]-z,0),!x&&s&(w|D)&&(s&=-25),!s||s==y)var ye=Bk(a,s,o);else s==w||s==D?ye=Ck(a,s,x):(s==E||s==(y|E))&&!v.length?ye=Vk(a,s,o,c):ye=Bs.apply(r,ce);var Ae=ie?rf:If;return Lf(Ae(ye,ce),a,s)}function Of(a,s,o,c){return a===r||Kn(a,Ia[o])&&!qe.call(c,o)?s:a}function Af(a,s,o,c,v,O){return it(a)&&it(s)&&(O.set(s,a),Ms(a,s,r,Af,O),O.delete(s)),a}function Uk(a){return Si(a)?r:a}function Rf(a,s,o,c,v,O){var P=o&A,x=a.length,C=s.length;if(x!=C&&!(P&&C>x))return!1;var z=O.get(a),X=O.get(s);if(z&&X)return z==s&&X==a;var J=-1,ie=!0,ce=o&N?new sa:r;for(O.set(a,s),O.set(s,a);++J<x;){var ye=a[J],Ae=s[J];if(c)var ke=P?c(Ae,ye,J,s,a,O):c(ye,Ae,J,a,s,O);if(ke!==r){if(ke)continue;ie=!1;break}if(ce){if(!mo(s,function(Ne,xe){if(!gi(ce,xe)&&(ye===Ne||v(ye,Ne,o,c,O)))return ce.push(xe)})){ie=!1;break}}else if(!(ye===Ae||v(ye,Ae,o,c,O))){ie=!1;break}}return O.delete(a),O.delete(s),ie}function qk(a,s,o,c,v,O,P){switch(o){case Fe:if(a.byteLength!=s.byteLength||a.byteOffset!=s.byteOffset)return!1;a=a.buffer,s=s.buffer;case Se:return!(a.byteLength!=s.byteLength||!O(new Es(a),new Es(s)));case tt:case _t:case Et:return Kn(+a,+s);case jt:return a.name==s.name&&a.message==s.message;case F:case $:return a==s+"";case We:var x=ko;case K:var C=c&A;if(x||(x=ps),a.size!=s.size&&!C)return!1;var z=P.get(a);if(z)return z==s;c|=N,P.set(a,s);var X=Rf(x(a),x(s),c,v,O,P);return P.delete(a),X;case ae:if(ki)return ki.call(a)==ki.call(s)}return!1}function Gk(a,s,o,c,v,O){var P=o&A,x=Go(a),C=x.length,z=Go(s),X=z.length;if(C!=X&&!P)return!1;for(var J=C;J--;){var ie=x[J];if(!(P?ie in s:qe.call(s,ie)))return!1}var ce=O.get(a),ye=O.get(s);if(ce&&ye)return ce==s&&ye==a;var Ae=!0;O.set(a,s),O.set(s,a);for(var ke=P;++J<C;){ie=x[J];var Ne=a[ie],xe=s[ie];if(c)var yn=P?c(xe,Ne,ie,s,a,O):c(Ne,xe,ie,a,s,O);if(!(yn===r?Ne===xe||v(Ne,xe,o,c,O):yn)){Ae=!1;break}ke||(ke=ie=="constructor")}if(Ae&&!ke){var Wt=a.constructor,kn=s.constructor;Wt!=kn&&"constructor"in a&&"constructor"in s&&!(typeof Wt=="function"&&Wt instanceof Wt&&typeof kn=="function"&&kn instanceof kn)&&(Ae=!1)}return O.delete(a),O.delete(s),Ae}function wr(a){return Jo(xf(a,r,Uf),a+"")}function Go(a){return $c(a,Dt,Yo)}function Ho(a){return $c(a,an,Sf)}var $o=Ss?function(a){return Ss.get(a)}:cu;function Us(a){for(var s=a.name+"",o=ja[s],c=qe.call(ja,s)?o.length:0;c--;){var v=o[c],O=v.func;if(O==null||O==a)return v.name}return s}function Ka(a){var s=qe.call(_,"placeholder")?_:a;return s.placeholder}function he(){var a=_.iteratee||uu;return a=a===uu?zc:a,arguments.length?a(arguments[0],arguments[1]):a}function qs(a,s){var o=a.__data__;return Jk(s)?o[typeof s=="string"?"string":"hash"]:o.map}function Wo(a){for(var s=Dt(a),o=s.length;o--;){var c=s[o],v=a[c];s[o]=[c,v,Df(v)]}return s}function ua(a,s){var o=ty(a,s);return Yc(o)?o:r}function Hk(a){var s=qe.call(a,aa),o=a[aa];try{a[aa]=r;var c=!0}catch{}var v=bs.call(a);return c&&(s?a[aa]=o:delete a[aa]),v}var Yo=_o?function(a){return a==null?[]:(a=Ye(a),Br(_o(a),function(s){return xc.call(a,s)}))}:fu,Sf=_o?function(a){for(var s=[];a;)Cr(s,Yo(a)),a=Ts(a);return s}:fu,Ct=Ht;(Eo&&Ct(new Eo(new ArrayBuffer(1)))!=Fe||pi&&Ct(new pi)!=We||To&&Ct(To.resolve())!=mn||La&&Ct(new La)!=K||vi&&Ct(new vi)!=ee)&&(Ct=function(a){var s=Ht(a),o=s==ft?a.constructor:r,c=o?da(o):"";if(c)switch(c){case Ry:return Fe;case Sy:return We;case Ny:return mn;case Py:return K;case Dy:return ee}return s});function $k(a,s,o){for(var c=-1,v=o.length;++c<v;){var O=o[c],P=O.size;switch(O.type){case"drop":a+=P;break;case"dropRight":s-=P;break;case"take":s=Bt(s,a+P);break;case"takeRight":a=Ot(a,s-P);break}}return{start:a,end:s}}function Wk(a){var s=a.match(Qv);return s?s[1].split(e0):[]}function Nf(a,s,o){s=Gr(s,a);for(var c=-1,v=s.length,O=!1;++c<v;){var P=nr(s[c]);if(!(O=a!=null&&o(a,P)))break;a=a[P]}return O||++c!=v?O:(v=a==null?0:a.length,!!v&&Xs(v)&&Or(P,v)&&(Te(a)||ca(a)))}function Yk(a){var s=a.length,o=new a.constructor(s);return s&&typeof a[0]=="string"&&qe.call(a,"index")&&(o.index=a.index,o.input=a.input),o}function Pf(a){return typeof a.constructor=="function"&&!Ai(a)?Ba(Ts(a)):{}}function zk(a,s,o){var c=a.constructor;switch(s){case Se:return Ko(a);case tt:case _t:return new c(+a);case Fe:return Fk(a,o);case Nt:case Qn:case en:case Qr:case vr:case yr:case ea:case kr:case ta:return ff(a,o);case We:return new c;case Et:case $:return new c(a);case F:return xk(a);case K:return new c;case ae:return Mk(a)}}function Xk(a,s){var o=s.length;if(!o)return a;var c=o-1;return s[c]=(o>1?"& ":"")+s[c],s=s.join(o>2?", ":" "),a.replace(Jv,`{
/* [wrapped with `+s+`] */
`)}function Zk(a){return Te(a)||ca(a)||!!(Mc&&a&&a[Mc])}function Or(a,s){var o=typeof a;return s=s??Q,!!s&&(o=="number"||o!="symbol"&&u0.test(a))&&a>-1&&a%1==0&&a<s}function $t(a,s,o){if(!it(o))return!1;var c=typeof s;return(c=="number"?rn(o)&&Or(s,o.length):c=="string"&&s in o)?Kn(o[s],a):!1}function zo(a,s){if(Te(a))return!1;var o=typeof a;return o=="number"||o=="symbol"||o=="boolean"||a==null||vn(a)?!0:to.test(a)||!eo.test(a)||s!=null&&a in Ye(s)}function Jk(a){var s=typeof a;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?a!=="__proto__":a===null}function Xo(a){var s=Us(a),o=_[s];if(typeof o!="function"||!(s in De.prototype))return!1;if(a===o)return!0;var c=$o(o);return!!c&&a===c[0]}function Qk(a){return!!Pc&&Pc in a}var eb=ys?Ar:mu;function Ai(a){var s=a&&a.constructor,o=typeof s=="function"&&s.prototype||Ia;return a===o}function Df(a){return a===a&&!it(a)}function Ff(a,s){return function(o){return o==null?!1:o[a]===s&&(s!==r||a in Ye(o))}}function tb(a){var s=Ys(a,function(c){return o.size===g&&o.clear(),c}),o=s.cache;return s}function nb(a,s){var o=a[1],c=s[1],v=o|c,O=v<(y|S|M),P=c==M&&o==w||c==M&&o==B&&a[7].length<=s[8]||c==(M|B)&&s[7].length<=s[8]&&o==w;if(!(O||P))return a;c&y&&(a[2]=s[2],v|=o&y?0:R);var x=s[3];if(x){var C=a[3];a[3]=C?gf(C,x,s[4]):x,a[4]=C?Vr(a[3],m):s[4]}return x=s[5],x&&(C=a[5],a[5]=C?hf(C,x,s[6]):x,a[6]=C?Vr(a[5],m):s[6]),x=s[7],x&&(a[7]=x),c&M&&(a[8]=a[8]==null?s[8]:Bt(a[8],s[8])),a[9]==null&&(a[9]=s[9]),a[0]=s[0],a[1]=v,a}function rb(a){var s=[];if(a!=null)for(var o in Ye(a))s.push(o);return s}function ab(a){return bs.call(a)}function xf(a,s,o){return s=Ot(s===r?a.length-1:s,0),function(){for(var c=arguments,v=-1,O=Ot(c.length-s,0),P=q(O);++v<O;)P[v]=c[s+v];v=-1;for(var x=q(s+1);++v<s;)x[v]=c[v];return x[s]=o(P),gn(a,this,x)}}function Mf(a,s){return s.length<2?a:oa(a,Nn(s,0,-1))}function ib(a,s){for(var o=a.length,c=Bt(s.length,o),v=nn(a);c--;){var O=s[c];a[c]=Or(O,o)?v[O]:r}return a}function Zo(a,s){if(!(s==="constructor"&&typeof a[s]=="function")&&s!="__proto__")return a[s]}var If=jf(rf),Ri=by||function(a,s){return Mt.setTimeout(a,s)},Jo=jf(Sk);function Lf(a,s,o){var c=s+"";return Jo(a,Xk(c,sb(Wk(c),o)))}function jf(a){var s=0,o=0;return function(){var c=wy(),v=j-(c-o);if(o=c,v>0){if(++s>=V)return arguments[0]}else s=0;return a.apply(r,arguments)}}function Gs(a,s){var o=-1,c=a.length,v=c-1;for(s=s===r?c:s;++o<s;){var O=Mo(o,v),P=a[O];a[O]=a[o],a[o]=P}return a.length=s,a}var Bf=tb(function(a){var s=[];return a.charCodeAt(0)===46&&s.push(""),a.replace(mi,function(o,c,v,O){s.push(v?O.replace(r0,"$1"):c||o)}),s});function nr(a){if(typeof a=="string"||vn(a))return a;var s=a+"";return s=="0"&&1/a==-oe?"-0":s}function da(a){if(a!=null){try{return ks.call(a)}catch{}try{return a+""}catch{}}return""}function sb(a,s){return On(dn,function(o){var c="_."+o[0];s&o[1]&&!gs(a,c)&&a.push(c)}),a.sort()}function Cf(a){if(a instanceof De)return a.clone();var s=new Rn(a.__wrapped__,a.__chain__);return s.__actions__=nn(a.__actions__),s.__index__=a.__index__,s.__values__=a.__values__,s}function lb(a,s,o){(o?$t(a,s,o):s===r)?s=1:s=Ot(Oe(s),0);var c=a==null?0:a.length;if(!c||s<1)return[];for(var v=0,O=0,P=q(As(c/s));v<c;)P[O++]=Nn(a,v,v+=s);return P}function ob(a){for(var s=-1,o=a==null?0:a.length,c=0,v=[];++s<o;){var O=a[s];O&&(v[c++]=O)}return v}function ub(){var a=arguments.length;if(!a)return[];for(var s=q(a-1),o=arguments[0],c=a;c--;)s[c-1]=arguments[c];return Cr(Te(o)?nn(o):[o],It(s,1))}var db=Re(function(a,s){return mt(a)?_i(a,It(s,1,mt,!0)):[]}),cb=Re(function(a,s){var o=Pn(s);return mt(o)&&(o=r),mt(a)?_i(a,It(s,1,mt,!0),he(o,2)):[]}),fb=Re(function(a,s){var o=Pn(s);return mt(o)&&(o=r),mt(a)?_i(a,It(s,1,mt,!0),r,o):[]});function mb(a,s,o){var c=a==null?0:a.length;return c?(s=o||s===r?1:Oe(s),Nn(a,s<0?0:s,c)):[]}function gb(a,s,o){var c=a==null?0:a.length;return c?(s=o||s===r?1:Oe(s),s=c-s,Nn(a,0,s<0?0:s)):[]}function hb(a,s){return a&&a.length?Ls(a,he(s,3),!0,!0):[]}function pb(a,s){return a&&a.length?Ls(a,he(s,3),!0):[]}function vb(a,s,o,c){var v=a==null?0:a.length;return v?(o&&typeof o!="number"&&$t(a,s,o)&&(o=0,c=v),uk(a,s,o,c)):[]}function Vf(a,s,o){var c=a==null?0:a.length;if(!c)return-1;var v=o==null?0:Oe(o);return v<0&&(v=Ot(c+v,0)),hs(a,he(s,3),v)}function Kf(a,s,o){var c=a==null?0:a.length;if(!c)return-1;var v=c-1;return o!==r&&(v=Oe(o),v=o<0?Ot(c+v,0):Bt(v,c-1)),hs(a,he(s,3),v,!0)}function Uf(a){var s=a==null?0:a.length;return s?It(a,1):[]}function yb(a){var s=a==null?0:a.length;return s?It(a,oe):[]}function kb(a,s){var o=a==null?0:a.length;return o?(s=s===r?1:Oe(s),It(a,s)):[]}function bb(a){for(var s=-1,o=a==null?0:a.length,c={};++s<o;){var v=a[s];c[v[0]]=v[1]}return c}function qf(a){return a&&a.length?a[0]:r}function _b(a,s,o){var c=a==null?0:a.length;if(!c)return-1;var v=o==null?0:Oe(o);return v<0&&(v=Ot(c+v,0)),Da(a,s,v)}function Eb(a){var s=a==null?0:a.length;return s?Nn(a,0,-1):[]}var Tb=Re(function(a){var s=at(a,Co);return s.length&&s[0]===a[0]?No(s):[]}),wb=Re(function(a){var s=Pn(a),o=at(a,Co);return s===Pn(o)?s=r:o.pop(),o.length&&o[0]===a[0]?No(o,he(s,2)):[]}),Ob=Re(function(a){var s=Pn(a),o=at(a,Co);return s=typeof s=="function"?s:r,s&&o.pop(),o.length&&o[0]===a[0]?No(o,r,s):[]});function Ab(a,s){return a==null?"":Ey.call(a,s)}function Pn(a){var s=a==null?0:a.length;return s?a[s-1]:r}function Rb(a,s,o){var c=a==null?0:a.length;if(!c)return-1;var v=c;return o!==r&&(v=Oe(o),v=v<0?Ot(c+v,0):Bt(v,c-1)),s===s?sy(a,s,v):hs(a,Ec,v,!0)}function Sb(a,s){return a&&a.length?Qc(a,Oe(s)):r}var Nb=Re(Gf);function Gf(a,s){return a&&a.length&&s&&s.length?xo(a,s):a}function Pb(a,s,o){return a&&a.length&&s&&s.length?xo(a,s,he(o,2)):a}function Db(a,s,o){return a&&a.length&&s&&s.length?xo(a,s,r,o):a}var Fb=wr(function(a,s){var o=a==null?0:a.length,c=Oo(a,s);return nf(a,at(s,function(v){return Or(v,o)?+v:v}).sort(mf)),c});function xb(a,s){var o=[];if(!(a&&a.length))return o;var c=-1,v=[],O=a.length;for(s=he(s,3);++c<O;){var P=a[c];s(P,c,a)&&(o.push(P),v.push(c))}return nf(a,v),o}function Qo(a){return a==null?a:Ay.call(a)}function Mb(a,s,o){var c=a==null?0:a.length;return c?(o&&typeof o!="number"&&$t(a,s,o)?(s=0,o=c):(s=s==null?0:Oe(s),o=o===r?c:Oe(o)),Nn(a,s,o)):[]}function Ib(a,s){return Is(a,s)}function Lb(a,s,o){return Lo(a,s,he(o,2))}function jb(a,s){var o=a==null?0:a.length;if(o){var c=Is(a,s);if(c<o&&Kn(a[c],s))return c}return-1}function Bb(a,s){return Is(a,s,!0)}function Cb(a,s,o){return Lo(a,s,he(o,2),!0)}function Vb(a,s){var o=a==null?0:a.length;if(o){var c=Is(a,s,!0)-1;if(Kn(a[c],s))return c}return-1}function Kb(a){return a&&a.length?af(a):[]}function Ub(a,s){return a&&a.length?af(a,he(s,2)):[]}function qb(a){var s=a==null?0:a.length;return s?Nn(a,1,s):[]}function Gb(a,s,o){return a&&a.length?(s=o||s===r?1:Oe(s),Nn(a,0,s<0?0:s)):[]}function Hb(a,s,o){var c=a==null?0:a.length;return c?(s=o||s===r?1:Oe(s),s=c-s,Nn(a,s<0?0:s,c)):[]}function $b(a,s){return a&&a.length?Ls(a,he(s,3),!1,!0):[]}function Wb(a,s){return a&&a.length?Ls(a,he(s,3)):[]}var Yb=Re(function(a){return qr(It(a,1,mt,!0))}),zb=Re(function(a){var s=Pn(a);return mt(s)&&(s=r),qr(It(a,1,mt,!0),he(s,2))}),Xb=Re(function(a){var s=Pn(a);return s=typeof s=="function"?s:r,qr(It(a,1,mt,!0),r,s)});function Zb(a){return a&&a.length?qr(a):[]}function Jb(a,s){return a&&a.length?qr(a,he(s,2)):[]}function Qb(a,s){return s=typeof s=="function"?s:r,a&&a.length?qr(a,r,s):[]}function eu(a){if(!(a&&a.length))return[];var s=0;return a=Br(a,function(o){if(mt(o))return s=Ot(o.length,s),!0}),vo(s,function(o){return at(a,go(o))})}function Hf(a,s){if(!(a&&a.length))return[];var o=eu(a);return s==null?o:at(o,function(c){return gn(s,r,c)})}var e_=Re(function(a,s){return mt(a)?_i(a,s):[]}),t_=Re(function(a){return Bo(Br(a,mt))}),n_=Re(function(a){var s=Pn(a);return mt(s)&&(s=r),Bo(Br(a,mt),he(s,2))}),r_=Re(function(a){var s=Pn(a);return s=typeof s=="function"?s:r,Bo(Br(a,mt),r,s)}),a_=Re(eu);function i_(a,s){return uf(a||[],s||[],bi)}function s_(a,s){return uf(a||[],s||[],wi)}var l_=Re(function(a){var s=a.length,o=s>1?a[s-1]:r;return o=typeof o=="function"?(a.pop(),o):r,Hf(a,o)});function $f(a){var s=_(a);return s.__chain__=!0,s}function o_(a,s){return s(a),a}function Hs(a,s){return s(a)}var u_=wr(function(a){var s=a.length,o=s?a[0]:0,c=this.__wrapped__,v=function(O){return Oo(O,a)};return s>1||this.__actions__.length||!(c instanceof De)||!Or(o)?this.thru(v):(c=c.slice(o,+o+(s?1:0)),c.__actions__.push({func:Hs,args:[v],thisArg:r}),new Rn(c,this.__chain__).thru(function(O){return s&&!O.length&&O.push(r),O}))});function d_(){return $f(this)}function c_(){return new Rn(this.value(),this.__chain__)}function f_(){this.__values__===r&&(this.__values__=sm(this.value()));var a=this.__index__>=this.__values__.length,s=a?r:this.__values__[this.__index__++];return{done:a,value:s}}function m_(){return this}function g_(a){for(var s,o=this;o instanceof Ps;){var c=Cf(o);c.__index__=0,c.__values__=r,s?v.__wrapped__=c:s=c;var v=c;o=o.__wrapped__}return v.__wrapped__=a,s}function h_(){var a=this.__wrapped__;if(a instanceof De){var s=a;return this.__actions__.length&&(s=new De(this)),s=s.reverse(),s.__actions__.push({func:Hs,args:[Qo],thisArg:r}),new Rn(s,this.__chain__)}return this.thru(Qo)}function p_(){return of(this.__wrapped__,this.__actions__)}var v_=js(function(a,s,o){qe.call(a,o)?++a[o]:Er(a,o,1)});function y_(a,s,o){var c=Te(a)?bc:ok;return o&&$t(a,s,o)&&(s=r),c(a,he(s,3))}function k_(a,s){var o=Te(a)?Br:Gc;return o(a,he(s,3))}var b_=kf(Vf),__=kf(Kf);function E_(a,s){return It($s(a,s),1)}function T_(a,s){return It($s(a,s),oe)}function w_(a,s,o){return o=o===r?1:Oe(o),It($s(a,s),o)}function Wf(a,s){var o=Te(a)?On:Ur;return o(a,he(s,3))}function Yf(a,s){var o=Te(a)?q0:qc;return o(a,he(s,3))}var O_=js(function(a,s,o){qe.call(a,o)?a[o].push(s):Er(a,o,[s])});function A_(a,s,o,c){a=rn(a)?a:qa(a),o=o&&!c?Oe(o):0;var v=a.length;return o<0&&(o=Ot(v+o,0)),Zs(a)?o<=v&&a.indexOf(s,o)>-1:!!v&&Da(a,s,o)>-1}var R_=Re(function(a,s,o){var c=-1,v=typeof s=="function",O=rn(a)?q(a.length):[];return Ur(a,function(P){O[++c]=v?gn(s,P,o):Ei(P,s,o)}),O}),S_=js(function(a,s,o){Er(a,o,s)});function $s(a,s){var o=Te(a)?at:Xc;return o(a,he(s,3))}function N_(a,s,o,c){return a==null?[]:(Te(s)||(s=s==null?[]:[s]),o=c?r:o,Te(o)||(o=o==null?[]:[o]),ef(a,s,o))}var P_=js(function(a,s,o){a[o?0:1].push(s)},function(){return[[],[]]});function D_(a,s,o){var c=Te(a)?fo:wc,v=arguments.length<3;return c(a,he(s,4),o,v,Ur)}function F_(a,s,o){var c=Te(a)?G0:wc,v=arguments.length<3;return c(a,he(s,4),o,v,qc)}function x_(a,s){var o=Te(a)?Br:Gc;return o(a,zs(he(s,3)))}function M_(a){var s=Te(a)?Cc:Ak;return s(a)}function I_(a,s,o){(o?$t(a,s,o):s===r)?s=1:s=Oe(s);var c=Te(a)?rk:Rk;return c(a,s)}function L_(a){var s=Te(a)?ak:Nk;return s(a)}function j_(a){if(a==null)return 0;if(rn(a))return Zs(a)?xa(a):a.length;var s=Ct(a);return s==We||s==K?a.size:Do(a).length}function B_(a,s,o){var c=Te(a)?mo:Pk;return o&&$t(a,s,o)&&(s=r),c(a,he(s,3))}var C_=Re(function(a,s){if(a==null)return[];var o=s.length;return o>1&&$t(a,s[0],s[1])?s=[]:o>2&&$t(s[0],s[1],s[2])&&(s=[s[0]]),ef(a,It(s,1),[])}),Ws=ky||function(){return Mt.Date.now()};function V_(a,s){if(typeof s!="function")throw new An(u);return a=Oe(a),function(){if(--a<1)return s.apply(this,arguments)}}function zf(a,s,o){return s=o?r:s,s=a&&s==null?a.length:s,Tr(a,M,r,r,r,r,s)}function Xf(a,s){var o;if(typeof s!="function")throw new An(u);return a=Oe(a),function(){return--a>0&&(o=s.apply(this,arguments)),a<=1&&(s=r),o}}var tu=Re(function(a,s,o){var c=y;if(o.length){var v=Vr(o,Ka(tu));c|=E}return Tr(a,c,s,o,v)}),Zf=Re(function(a,s,o){var c=y|S;if(o.length){var v=Vr(o,Ka(Zf));c|=E}return Tr(s,c,a,o,v)});function Jf(a,s,o){s=o?r:s;var c=Tr(a,w,r,r,r,r,r,s);return c.placeholder=Jf.placeholder,c}function Qf(a,s,o){s=o?r:s;var c=Tr(a,D,r,r,r,r,r,s);return c.placeholder=Qf.placeholder,c}function em(a,s,o){var c,v,O,P,x,C,z=0,X=!1,J=!1,ie=!0;if(typeof a!="function")throw new An(u);s=Dn(s)||0,it(o)&&(X=!!o.leading,J="maxWait"in o,O=J?Ot(Dn(o.maxWait)||0,s):O,ie="trailing"in o?!!o.trailing:ie);function ce(gt){var Un=c,Sr=v;return c=v=r,z=gt,P=a.apply(Sr,Un),P}function ye(gt){return z=gt,x=Ri(Ne,s),X?ce(gt):P}function Ae(gt){var Un=gt-C,Sr=gt-z,km=s-Un;return J?Bt(km,O-Sr):km}function ke(gt){var Un=gt-C,Sr=gt-z;return C===r||Un>=s||Un<0||J&&Sr>=O}function Ne(){var gt=Ws();if(ke(gt))return xe(gt);x=Ri(Ne,Ae(gt))}function xe(gt){return x=r,ie&&c?ce(gt):(c=v=r,P)}function yn(){x!==r&&df(x),z=0,c=C=v=x=r}function Wt(){return x===r?P:xe(Ws())}function kn(){var gt=Ws(),Un=ke(gt);if(c=arguments,v=this,C=gt,Un){if(x===r)return ye(C);if(J)return df(x),x=Ri(Ne,s),ce(C)}return x===r&&(x=Ri(Ne,s)),P}return kn.cancel=yn,kn.flush=Wt,kn}var K_=Re(function(a,s){return Uc(a,1,s)}),U_=Re(function(a,s,o){return Uc(a,Dn(s)||0,o)});function q_(a){return Tr(a,U)}function Ys(a,s){if(typeof a!="function"||s!=null&&typeof s!="function")throw new An(u);var o=function(){var c=arguments,v=s?s.apply(this,c):c[0],O=o.cache;if(O.has(v))return O.get(v);var P=a.apply(this,c);return o.cache=O.set(v,P)||O,P};return o.cache=new(Ys.Cache||_r),o}Ys.Cache=_r;function zs(a){if(typeof a!="function")throw new An(u);return function(){var s=arguments;switch(s.length){case 0:return!a.call(this);case 1:return!a.call(this,s[0]);case 2:return!a.call(this,s[0],s[1]);case 3:return!a.call(this,s[0],s[1],s[2])}return!a.apply(this,s)}}function G_(a){return Xf(2,a)}var H_=Dk(function(a,s){s=s.length==1&&Te(s[0])?at(s[0],hn(he())):at(It(s,1),hn(he()));var o=s.length;return Re(function(c){for(var v=-1,O=Bt(c.length,o);++v<O;)c[v]=s[v].call(this,c[v]);return gn(a,this,c)})}),nu=Re(function(a,s){var o=Vr(s,Ka(nu));return Tr(a,E,r,s,o)}),tm=Re(function(a,s){var o=Vr(s,Ka(tm));return Tr(a,I,r,s,o)}),$_=wr(function(a,s){return Tr(a,B,r,r,r,s)});function W_(a,s){if(typeof a!="function")throw new An(u);return s=s===r?s:Oe(s),Re(a,s)}function Y_(a,s){if(typeof a!="function")throw new An(u);return s=s==null?0:Ot(Oe(s),0),Re(function(o){var c=o[s],v=Hr(o,0,s);return c&&Cr(v,c),gn(a,this,v)})}function z_(a,s,o){var c=!0,v=!0;if(typeof a!="function")throw new An(u);return it(o)&&(c="leading"in o?!!o.leading:c,v="trailing"in o?!!o.trailing:v),em(a,s,{leading:c,maxWait:s,trailing:v})}function X_(a){return zf(a,1)}function Z_(a,s){return nu(Vo(s),a)}function J_(){if(!arguments.length)return[];var a=arguments[0];return Te(a)?a:[a]}function Q_(a){return Sn(a,b)}function e1(a,s){return s=typeof s=="function"?s:r,Sn(a,b,s)}function t1(a){return Sn(a,h|b)}function n1(a,s){return s=typeof s=="function"?s:r,Sn(a,h|b,s)}function r1(a,s){return s==null||Kc(a,s,Dt(s))}function Kn(a,s){return a===s||a!==a&&s!==s}var a1=Ks(So),i1=Ks(function(a,s){return a>=s}),ca=Wc(function(){return arguments}())?Wc:function(a){return ut(a)&&qe.call(a,"callee")&&!xc.call(a,"callee")},Te=q.isArray,s1=gc?hn(gc):gk;function rn(a){return a!=null&&Xs(a.length)&&!Ar(a)}function mt(a){return ut(a)&&rn(a)}function l1(a){return a===!0||a===!1||ut(a)&&Ht(a)==tt}var $r=_y||mu,o1=hc?hn(hc):hk;function u1(a){return ut(a)&&a.nodeType===1&&!Si(a)}function d1(a){if(a==null)return!0;if(rn(a)&&(Te(a)||typeof a=="string"||typeof a.splice=="function"||$r(a)||Ua(a)||ca(a)))return!a.length;var s=Ct(a);if(s==We||s==K)return!a.size;if(Ai(a))return!Do(a).length;for(var o in a)if(qe.call(a,o))return!1;return!0}function c1(a,s){return Ti(a,s)}function f1(a,s,o){o=typeof o=="function"?o:r;var c=o?o(a,s):r;return c===r?Ti(a,s,r,o):!!c}function ru(a){if(!ut(a))return!1;var s=Ht(a);return s==jt||s==cn||typeof a.message=="string"&&typeof a.name=="string"&&!Si(a)}function m1(a){return typeof a=="number"&&Ic(a)}function Ar(a){if(!it(a))return!1;var s=Ht(a);return s==xt||s==Jt||s==et||s==Qt}function nm(a){return typeof a=="number"&&a==Oe(a)}function Xs(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=Q}function it(a){var s=typeof a;return a!=null&&(s=="object"||s=="function")}function ut(a){return a!=null&&typeof a=="object"}var rm=pc?hn(pc):vk;function g1(a,s){return a===s||Po(a,s,Wo(s))}function h1(a,s,o){return o=typeof o=="function"?o:r,Po(a,s,Wo(s),o)}function p1(a){return am(a)&&a!=+a}function v1(a){if(eb(a))throw new Ee(l);return Yc(a)}function y1(a){return a===null}function k1(a){return a==null}function am(a){return typeof a=="number"||ut(a)&&Ht(a)==Et}function Si(a){if(!ut(a)||Ht(a)!=ft)return!1;var s=Ts(a);if(s===null)return!0;var o=qe.call(s,"constructor")&&s.constructor;return typeof o=="function"&&o instanceof o&&ks.call(o)==hy}var au=vc?hn(vc):yk;function b1(a){return nm(a)&&a>=-Q&&a<=Q}var im=yc?hn(yc):kk;function Zs(a){return typeof a=="string"||!Te(a)&&ut(a)&&Ht(a)==$}function vn(a){return typeof a=="symbol"||ut(a)&&Ht(a)==ae}var Ua=kc?hn(kc):bk;function _1(a){return a===r}function E1(a){return ut(a)&&Ct(a)==ee}function T1(a){return ut(a)&&Ht(a)==fe}var w1=Ks(Fo),O1=Ks(function(a,s){return a<=s});function sm(a){if(!a)return[];if(rn(a))return Zs(a)?Cn(a):nn(a);if(hi&&a[hi])return ry(a[hi]());var s=Ct(a),o=s==We?ko:s==K?ps:qa;return o(a)}function Rr(a){if(!a)return a===0?a:0;if(a=Dn(a),a===oe||a===-oe){var s=a<0?-1:1;return s*le}return a===a?a:0}function Oe(a){var s=Rr(a),o=s%1;return s===s?o?s-o:s:0}function lm(a){return a?la(Oe(a),0,pe):0}function Dn(a){if(typeof a=="number")return a;if(vn(a))return _e;if(it(a)){var s=typeof a.valueOf=="function"?a.valueOf():a;a=it(s)?s+"":s}if(typeof a!="string")return a===0?a:+a;a=Oc(a);var o=s0.test(a);return o||o0.test(a)?V0(a.slice(2),o?2:8):i0.test(a)?_e:+a}function om(a){return tr(a,an(a))}function A1(a){return a?la(Oe(a),-Q,Q):a===0?a:0}function Ke(a){return a==null?"":pn(a)}var R1=Ca(function(a,s){if(Ai(s)||rn(s)){tr(s,Dt(s),a);return}for(var o in s)qe.call(s,o)&&bi(a,o,s[o])}),um=Ca(function(a,s){tr(s,an(s),a)}),Js=Ca(function(a,s,o,c){tr(s,an(s),a,c)}),S1=Ca(function(a,s,o,c){tr(s,Dt(s),a,c)}),N1=wr(Oo);function P1(a,s){var o=Ba(a);return s==null?o:Vc(o,s)}var D1=Re(function(a,s){a=Ye(a);var o=-1,c=s.length,v=c>2?s[2]:r;for(v&&$t(s[0],s[1],v)&&(c=1);++o<c;)for(var O=s[o],P=an(O),x=-1,C=P.length;++x<C;){var z=P[x],X=a[z];(X===r||Kn(X,Ia[z])&&!qe.call(a,z))&&(a[z]=O[z])}return a}),F1=Re(function(a){return a.push(r,Af),gn(dm,r,a)});function x1(a,s){return _c(a,he(s,3),er)}function M1(a,s){return _c(a,he(s,3),Ro)}function I1(a,s){return a==null?a:Ao(a,he(s,3),an)}function L1(a,s){return a==null?a:Hc(a,he(s,3),an)}function j1(a,s){return a&&er(a,he(s,3))}function B1(a,s){return a&&Ro(a,he(s,3))}function C1(a){return a==null?[]:xs(a,Dt(a))}function V1(a){return a==null?[]:xs(a,an(a))}function iu(a,s,o){var c=a==null?r:oa(a,s);return c===r?o:c}function K1(a,s){return a!=null&&Nf(a,s,dk)}function su(a,s){return a!=null&&Nf(a,s,ck)}var U1=_f(function(a,s,o){s!=null&&typeof s.toString!="function"&&(s=bs.call(s)),a[s]=o},ou(sn)),q1=_f(function(a,s,o){s!=null&&typeof s.toString!="function"&&(s=bs.call(s)),qe.call(a,s)?a[s].push(o):a[s]=[o]},he),G1=Re(Ei);function Dt(a){return rn(a)?Bc(a):Do(a)}function an(a){return rn(a)?Bc(a,!0):_k(a)}function H1(a,s){var o={};return s=he(s,3),er(a,function(c,v,O){Er(o,s(c,v,O),c)}),o}function $1(a,s){var o={};return s=he(s,3),er(a,function(c,v,O){Er(o,v,s(c,v,O))}),o}var W1=Ca(function(a,s,o){Ms(a,s,o)}),dm=Ca(function(a,s,o,c){Ms(a,s,o,c)}),Y1=wr(function(a,s){var o={};if(a==null)return o;var c=!1;s=at(s,function(O){return O=Gr(O,a),c||(c=O.length>1),O}),tr(a,Ho(a),o),c&&(o=Sn(o,h|p|b,Uk));for(var v=s.length;v--;)jo(o,s[v]);return o});function z1(a,s){return cm(a,zs(he(s)))}var X1=wr(function(a,s){return a==null?{}:Tk(a,s)});function cm(a,s){if(a==null)return{};var o=at(Ho(a),function(c){return[c]});return s=he(s),tf(a,o,function(c,v){return s(c,v[0])})}function Z1(a,s,o){s=Gr(s,a);var c=-1,v=s.length;for(v||(v=1,a=r);++c<v;){var O=a==null?r:a[nr(s[c])];O===r&&(c=v,O=o),a=Ar(O)?O.call(a):O}return a}function J1(a,s,o){return a==null?a:wi(a,s,o)}function Q1(a,s,o,c){return c=typeof c=="function"?c:r,a==null?a:wi(a,s,o,c)}var fm=wf(Dt),mm=wf(an);function eE(a,s,o){var c=Te(a),v=c||$r(a)||Ua(a);if(s=he(s,4),o==null){var O=a&&a.constructor;v?o=c?new O:[]:it(a)?o=Ar(O)?Ba(Ts(a)):{}:o={}}return(v?On:er)(a,function(P,x,C){return s(o,P,x,C)}),o}function tE(a,s){return a==null?!0:jo(a,s)}function nE(a,s,o){return a==null?a:lf(a,s,Vo(o))}function rE(a,s,o,c){return c=typeof c=="function"?c:r,a==null?a:lf(a,s,Vo(o),c)}function qa(a){return a==null?[]:yo(a,Dt(a))}function aE(a){return a==null?[]:yo(a,an(a))}function iE(a,s,o){return o===r&&(o=s,s=r),o!==r&&(o=Dn(o),o=o===o?o:0),s!==r&&(s=Dn(s),s=s===s?s:0),la(Dn(a),s,o)}function sE(a,s,o){return s=Rr(s),o===r?(o=s,s=0):o=Rr(o),a=Dn(a),fk(a,s,o)}function lE(a,s,o){if(o&&typeof o!="boolean"&&$t(a,s,o)&&(s=o=r),o===r&&(typeof s=="boolean"?(o=s,s=r):typeof a=="boolean"&&(o=a,a=r)),a===r&&s===r?(a=0,s=1):(a=Rr(a),s===r?(s=a,a=0):s=Rr(s)),a>s){var c=a;a=s,s=c}if(o||a%1||s%1){var v=Lc();return Bt(a+v*(s-a+C0("1e-"+((v+"").length-1))),s)}return Mo(a,s)}var oE=Va(function(a,s,o){return s=s.toLowerCase(),a+(o?gm(s):s)});function gm(a){return lu(Ke(a).toLowerCase())}function hm(a){return a=Ke(a),a&&a.replace(d0,J0).replace(N0,"")}function uE(a,s,o){a=Ke(a),s=pn(s);var c=a.length;o=o===r?c:la(Oe(o),0,c);var v=o;return o-=s.length,o>=0&&a.slice(o,v)==s}function dE(a){return a=Ke(a),a&&Pt.test(a)?a.replace(tn,Q0):a}function cE(a){return a=Ke(a),a&&Xv.test(a)?a.replace(na,"\\$&"):a}var fE=Va(function(a,s,o){return a+(o?"-":"")+s.toLowerCase()}),mE=Va(function(a,s,o){return a+(o?" ":"")+s.toLowerCase()}),gE=yf("toLowerCase");function hE(a,s,o){a=Ke(a),s=Oe(s);var c=s?xa(a):0;if(!s||c>=s)return a;var v=(s-c)/2;return Vs(Rs(v),o)+a+Vs(As(v),o)}function pE(a,s,o){a=Ke(a),s=Oe(s);var c=s?xa(a):0;return s&&c<s?a+Vs(s-c,o):a}function vE(a,s,o){a=Ke(a),s=Oe(s);var c=s?xa(a):0;return s&&c<s?Vs(s-c,o)+a:a}function yE(a,s,o){return o||s==null?s=0:s&&(s=+s),Oy(Ke(a).replace(no,""),s||0)}function kE(a,s,o){return(o?$t(a,s,o):s===r)?s=1:s=Oe(s),Io(Ke(a),s)}function bE(){var a=arguments,s=Ke(a[0]);return a.length<3?s:s.replace(a[1],a[2])}var _E=Va(function(a,s,o){return a+(o?"_":"")+s.toLowerCase()});function EE(a,s,o){return o&&typeof o!="number"&&$t(a,s,o)&&(s=o=r),o=o===r?pe:o>>>0,o?(a=Ke(a),a&&(typeof s=="string"||s!=null&&!au(s))&&(s=pn(s),!s&&Fa(a))?Hr(Cn(a),0,o):a.split(s,o)):[]}var TE=Va(function(a,s,o){return a+(o?" ":"")+lu(s)});function wE(a,s,o){return a=Ke(a),o=o==null?0:la(Oe(o),0,a.length),s=pn(s),a.slice(o,o+s.length)==s}function OE(a,s,o){var c=_.templateSettings;o&&$t(a,s,o)&&(s=r),a=Ke(a),s=Js({},s,c,Of);var v=Js({},s.imports,c.imports,Of),O=Dt(v),P=yo(v,O),x,C,z=0,X=s.interpolate||cs,J="__p += '",ie=bo((s.escape||cs).source+"|"+X.source+"|"+(X===ds?a0:cs).source+"|"+(s.evaluate||cs).source+"|$","g"),ce="//# sourceURL="+(qe.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++M0+"]")+`
`;a.replace(ie,function(ke,Ne,xe,yn,Wt,kn){return xe||(xe=yn),J+=a.slice(z,kn).replace(c0,ey),Ne&&(x=!0,J+=`' +
__e(`+Ne+`) +
'`),Wt&&(C=!0,J+=`';
`+Wt+`;
__p += '`),xe&&(J+=`' +
((__t = (`+xe+`)) == null ? '' : __t) +
'`),z=kn+ke.length,ke}),J+=`';
`;var ye=qe.call(s,"variable")&&s.variable;if(!ye)J=`with (obj) {
`+J+`
}
`;else if(n0.test(ye))throw new Ee(d);J=(C?J.replace(we,""):J).replace(Xe,"$1").replace($e,"$1;"),J="function("+(ye||"obj")+`) {
`+(ye?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(x?", __e = _.escape":"")+(C?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+J+`return __p
}`;var Ae=vm(function(){return Ce(O,ce+"return "+J).apply(r,P)});if(Ae.source=J,ru(Ae))throw Ae;return Ae}function AE(a){return Ke(a).toLowerCase()}function RE(a){return Ke(a).toUpperCase()}function SE(a,s,o){if(a=Ke(a),a&&(o||s===r))return Oc(a);if(!a||!(s=pn(s)))return a;var c=Cn(a),v=Cn(s),O=Ac(c,v),P=Rc(c,v)+1;return Hr(c,O,P).join("")}function NE(a,s,o){if(a=Ke(a),a&&(o||s===r))return a.slice(0,Nc(a)+1);if(!a||!(s=pn(s)))return a;var c=Cn(a),v=Rc(c,Cn(s))+1;return Hr(c,0,v).join("")}function PE(a,s,o){if(a=Ke(a),a&&(o||s===r))return a.replace(no,"");if(!a||!(s=pn(s)))return a;var c=Cn(a),v=Ac(c,Cn(s));return Hr(c,v).join("")}function DE(a,s){var o=Y,c=H;if(it(s)){var v="separator"in s?s.separator:v;o="length"in s?Oe(s.length):o,c="omission"in s?pn(s.omission):c}a=Ke(a);var O=a.length;if(Fa(a)){var P=Cn(a);O=P.length}if(o>=O)return a;var x=o-xa(c);if(x<1)return c;var C=P?Hr(P,0,x).join(""):a.slice(0,x);if(v===r)return C+c;if(P&&(x+=C.length-x),au(v)){if(a.slice(x).search(v)){var z,X=C;for(v.global||(v=bo(v.source,Ke(Wd.exec(v))+"g")),v.lastIndex=0;z=v.exec(X);)var J=z.index;C=C.slice(0,J===r?x:J)}}else if(a.indexOf(pn(v),x)!=x){var ie=C.lastIndexOf(v);ie>-1&&(C=C.slice(0,ie))}return C+c}function FE(a){return a=Ke(a),a&&Na.test(a)?a.replace(Bn,ly):a}var xE=Va(function(a,s,o){return a+(o?" ":"")+s.toUpperCase()}),lu=yf("toUpperCase");function pm(a,s,o){return a=Ke(a),s=o?r:s,s===r?ny(a)?dy(a):W0(a):a.match(s)||[]}var vm=Re(function(a,s){try{return gn(a,r,s)}catch(o){return ru(o)?o:new Ee(o)}}),ME=wr(function(a,s){return On(s,function(o){o=nr(o),Er(a,o,tu(a[o],a))}),a});function IE(a){var s=a==null?0:a.length,o=he();return a=s?at(a,function(c){if(typeof c[1]!="function")throw new An(u);return[o(c[0]),c[1]]}):[],Re(function(c){for(var v=-1;++v<s;){var O=a[v];if(gn(O[0],this,c))return gn(O[1],this,c)}})}function LE(a){return lk(Sn(a,h))}function ou(a){return function(){return a}}function jE(a,s){return a==null||a!==a?s:a}var BE=bf(),CE=bf(!0);function sn(a){return a}function uu(a){return zc(typeof a=="function"?a:Sn(a,h))}function VE(a){return Zc(Sn(a,h))}function KE(a,s){return Jc(a,Sn(s,h))}var UE=Re(function(a,s){return function(o){return Ei(o,a,s)}}),qE=Re(function(a,s){return function(o){return Ei(a,o,s)}});function du(a,s,o){var c=Dt(s),v=xs(s,c);o==null&&!(it(s)&&(v.length||!c.length))&&(o=s,s=a,a=this,v=xs(s,Dt(s)));var O=!(it(o)&&"chain"in o)||!!o.chain,P=Ar(a);return On(v,function(x){var C=s[x];a[x]=C,P&&(a.prototype[x]=function(){var z=this.__chain__;if(O||z){var X=a(this.__wrapped__),J=X.__actions__=nn(this.__actions__);return J.push({func:C,args:arguments,thisArg:a}),X.__chain__=z,X}return C.apply(a,Cr([this.value()],arguments))})}),a}function GE(){return Mt._===this&&(Mt._=py),this}function cu(){}function HE(a){return a=Oe(a),Re(function(s){return Qc(s,a)})}var $E=Uo(at),WE=Uo(bc),YE=Uo(mo);function ym(a){return zo(a)?go(nr(a)):wk(a)}function zE(a){return function(s){return a==null?r:oa(a,s)}}var XE=Ef(),ZE=Ef(!0);function fu(){return[]}function mu(){return!1}function JE(){return{}}function QE(){return""}function eT(){return!0}function tT(a,s){if(a=Oe(a),a<1||a>Q)return[];var o=pe,c=Bt(a,pe);s=he(s),a-=pe;for(var v=vo(c,s);++o<a;)s(o);return v}function nT(a){return Te(a)?at(a,nr):vn(a)?[a]:nn(Bf(Ke(a)))}function rT(a){var s=++gy;return Ke(a)+s}var aT=Cs(function(a,s){return a+s},0),iT=qo("ceil"),sT=Cs(function(a,s){return a/s},1),lT=qo("floor");function oT(a){return a&&a.length?Fs(a,sn,So):r}function uT(a,s){return a&&a.length?Fs(a,he(s,2),So):r}function dT(a){return Tc(a,sn)}function cT(a,s){return Tc(a,he(s,2))}function fT(a){return a&&a.length?Fs(a,sn,Fo):r}function mT(a,s){return a&&a.length?Fs(a,he(s,2),Fo):r}var gT=Cs(function(a,s){return a*s},1),hT=qo("round"),pT=Cs(function(a,s){return a-s},0);function vT(a){return a&&a.length?po(a,sn):0}function yT(a,s){return a&&a.length?po(a,he(s,2)):0}return _.after=V_,_.ary=zf,_.assign=R1,_.assignIn=um,_.assignInWith=Js,_.assignWith=S1,_.at=N1,_.before=Xf,_.bind=tu,_.bindAll=ME,_.bindKey=Zf,_.castArray=J_,_.chain=$f,_.chunk=lb,_.compact=ob,_.concat=ub,_.cond=IE,_.conforms=LE,_.constant=ou,_.countBy=v_,_.create=P1,_.curry=Jf,_.curryRight=Qf,_.debounce=em,_.defaults=D1,_.defaultsDeep=F1,_.defer=K_,_.delay=U_,_.difference=db,_.differenceBy=cb,_.differenceWith=fb,_.drop=mb,_.dropRight=gb,_.dropRightWhile=hb,_.dropWhile=pb,_.fill=vb,_.filter=k_,_.flatMap=E_,_.flatMapDeep=T_,_.flatMapDepth=w_,_.flatten=Uf,_.flattenDeep=yb,_.flattenDepth=kb,_.flip=q_,_.flow=BE,_.flowRight=CE,_.fromPairs=bb,_.functions=C1,_.functionsIn=V1,_.groupBy=O_,_.initial=Eb,_.intersection=Tb,_.intersectionBy=wb,_.intersectionWith=Ob,_.invert=U1,_.invertBy=q1,_.invokeMap=R_,_.iteratee=uu,_.keyBy=S_,_.keys=Dt,_.keysIn=an,_.map=$s,_.mapKeys=H1,_.mapValues=$1,_.matches=VE,_.matchesProperty=KE,_.memoize=Ys,_.merge=W1,_.mergeWith=dm,_.method=UE,_.methodOf=qE,_.mixin=du,_.negate=zs,_.nthArg=HE,_.omit=Y1,_.omitBy=z1,_.once=G_,_.orderBy=N_,_.over=$E,_.overArgs=H_,_.overEvery=WE,_.overSome=YE,_.partial=nu,_.partialRight=tm,_.partition=P_,_.pick=X1,_.pickBy=cm,_.property=ym,_.propertyOf=zE,_.pull=Nb,_.pullAll=Gf,_.pullAllBy=Pb,_.pullAllWith=Db,_.pullAt=Fb,_.range=XE,_.rangeRight=ZE,_.rearg=$_,_.reject=x_,_.remove=xb,_.rest=W_,_.reverse=Qo,_.sampleSize=I_,_.set=J1,_.setWith=Q1,_.shuffle=L_,_.slice=Mb,_.sortBy=C_,_.sortedUniq=Kb,_.sortedUniqBy=Ub,_.split=EE,_.spread=Y_,_.tail=qb,_.take=Gb,_.takeRight=Hb,_.takeRightWhile=$b,_.takeWhile=Wb,_.tap=o_,_.throttle=z_,_.thru=Hs,_.toArray=sm,_.toPairs=fm,_.toPairsIn=mm,_.toPath=nT,_.toPlainObject=om,_.transform=eE,_.unary=X_,_.union=Yb,_.unionBy=zb,_.unionWith=Xb,_.uniq=Zb,_.uniqBy=Jb,_.uniqWith=Qb,_.unset=tE,_.unzip=eu,_.unzipWith=Hf,_.update=nE,_.updateWith=rE,_.values=qa,_.valuesIn=aE,_.without=e_,_.words=pm,_.wrap=Z_,_.xor=t_,_.xorBy=n_,_.xorWith=r_,_.zip=a_,_.zipObject=i_,_.zipObjectDeep=s_,_.zipWith=l_,_.entries=fm,_.entriesIn=mm,_.extend=um,_.extendWith=Js,du(_,_),_.add=aT,_.attempt=vm,_.camelCase=oE,_.capitalize=gm,_.ceil=iT,_.clamp=iE,_.clone=Q_,_.cloneDeep=t1,_.cloneDeepWith=n1,_.cloneWith=e1,_.conformsTo=r1,_.deburr=hm,_.defaultTo=jE,_.divide=sT,_.endsWith=uE,_.eq=Kn,_.escape=dE,_.escapeRegExp=cE,_.every=y_,_.find=b_,_.findIndex=Vf,_.findKey=x1,_.findLast=__,_.findLastIndex=Kf,_.findLastKey=M1,_.floor=lT,_.forEach=Wf,_.forEachRight=Yf,_.forIn=I1,_.forInRight=L1,_.forOwn=j1,_.forOwnRight=B1,_.get=iu,_.gt=a1,_.gte=i1,_.has=K1,_.hasIn=su,_.head=qf,_.identity=sn,_.includes=A_,_.indexOf=_b,_.inRange=sE,_.invoke=G1,_.isArguments=ca,_.isArray=Te,_.isArrayBuffer=s1,_.isArrayLike=rn,_.isArrayLikeObject=mt,_.isBoolean=l1,_.isBuffer=$r,_.isDate=o1,_.isElement=u1,_.isEmpty=d1,_.isEqual=c1,_.isEqualWith=f1,_.isError=ru,_.isFinite=m1,_.isFunction=Ar,_.isInteger=nm,_.isLength=Xs,_.isMap=rm,_.isMatch=g1,_.isMatchWith=h1,_.isNaN=p1,_.isNative=v1,_.isNil=k1,_.isNull=y1,_.isNumber=am,_.isObject=it,_.isObjectLike=ut,_.isPlainObject=Si,_.isRegExp=au,_.isSafeInteger=b1,_.isSet=im,_.isString=Zs,_.isSymbol=vn,_.isTypedArray=Ua,_.isUndefined=_1,_.isWeakMap=E1,_.isWeakSet=T1,_.join=Ab,_.kebabCase=fE,_.last=Pn,_.lastIndexOf=Rb,_.lowerCase=mE,_.lowerFirst=gE,_.lt=w1,_.lte=O1,_.max=oT,_.maxBy=uT,_.mean=dT,_.meanBy=cT,_.min=fT,_.minBy=mT,_.stubArray=fu,_.stubFalse=mu,_.stubObject=JE,_.stubString=QE,_.stubTrue=eT,_.multiply=gT,_.nth=Sb,_.noConflict=GE,_.noop=cu,_.now=Ws,_.pad=hE,_.padEnd=pE,_.padStart=vE,_.parseInt=yE,_.random=lE,_.reduce=D_,_.reduceRight=F_,_.repeat=kE,_.replace=bE,_.result=Z1,_.round=hT,_.runInContext=L,_.sample=M_,_.size=j_,_.snakeCase=_E,_.some=B_,_.sortedIndex=Ib,_.sortedIndexBy=Lb,_.sortedIndexOf=jb,_.sortedLastIndex=Bb,_.sortedLastIndexBy=Cb,_.sortedLastIndexOf=Vb,_.startCase=TE,_.startsWith=wE,_.subtract=pT,_.sum=vT,_.sumBy=yT,_.template=OE,_.times=tT,_.toFinite=Rr,_.toInteger=Oe,_.toLength=lm,_.toLower=AE,_.toNumber=Dn,_.toSafeInteger=A1,_.toString=Ke,_.toUpper=RE,_.trim=SE,_.trimEnd=NE,_.trimStart=PE,_.truncate=DE,_.unescape=FE,_.uniqueId=rT,_.upperCase=xE,_.upperFirst=lu,_.each=Wf,_.eachRight=Yf,_.first=qf,du(_,function(){var a={};return er(_,function(s,o){qe.call(_.prototype,o)||(a[o]=s)}),a}(),{chain:!1}),_.VERSION=n,On(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){_[a].placeholder=_}),On(["drop","take"],function(a,s){De.prototype[a]=function(o){o=o===r?1:Ot(Oe(o),0);var c=this.__filtered__&&!s?new De(this):this.clone();return c.__filtered__?c.__takeCount__=Bt(o,c.__takeCount__):c.__views__.push({size:Bt(o,pe),type:a+(c.__dir__<0?"Right":"")}),c},De.prototype[a+"Right"]=function(o){return this.reverse()[a](o).reverse()}}),On(["filter","map","takeWhile"],function(a,s){var o=s+1,c=o==Z||o==ne;De.prototype[a]=function(v){var O=this.clone();return O.__iteratees__.push({iteratee:he(v,3),type:o}),O.__filtered__=O.__filtered__||c,O}}),On(["head","last"],function(a,s){var o="take"+(s?"Right":"");De.prototype[a]=function(){return this[o](1).value()[0]}}),On(["initial","tail"],function(a,s){var o="drop"+(s?"":"Right");De.prototype[a]=function(){return this.__filtered__?new De(this):this[o](1)}}),De.prototype.compact=function(){return this.filter(sn)},De.prototype.find=function(a){return this.filter(a).head()},De.prototype.findLast=function(a){return this.reverse().find(a)},De.prototype.invokeMap=Re(function(a,s){return typeof a=="function"?new De(this):this.map(function(o){return Ei(o,a,s)})}),De.prototype.reject=function(a){return this.filter(zs(he(a)))},De.prototype.slice=function(a,s){a=Oe(a);var o=this;return o.__filtered__&&(a>0||s<0)?new De(o):(a<0?o=o.takeRight(-a):a&&(o=o.drop(a)),s!==r&&(s=Oe(s),o=s<0?o.dropRight(-s):o.take(s-a)),o)},De.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},De.prototype.toArray=function(){return this.take(pe)},er(De.prototype,function(a,s){var o=/^(?:filter|find|map|reject)|While$/.test(s),c=/^(?:head|last)$/.test(s),v=_[c?"take"+(s=="last"?"Right":""):s],O=c||/^find/.test(s);v&&(_.prototype[s]=function(){var P=this.__wrapped__,x=c?[1]:arguments,C=P instanceof De,z=x[0],X=C||Te(P),J=function(Ne){var xe=v.apply(_,Cr([Ne],x));return c&&ie?xe[0]:xe};X&&o&&typeof z=="function"&&z.length!=1&&(C=X=!1);var ie=this.__chain__,ce=!!this.__actions__.length,ye=O&&!ie,Ae=C&&!ce;if(!O&&X){P=Ae?P:new De(this);var ke=a.apply(P,x);return ke.__actions__.push({func:Hs,args:[J],thisArg:r}),new Rn(ke,ie)}return ye&&Ae?a.apply(this,x):(ke=this.thru(J),ye?c?ke.value()[0]:ke.value():ke)})}),On(["pop","push","shift","sort","splice","unshift"],function(a){var s=vs[a],o=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",c=/^(?:pop|shift)$/.test(a);_.prototype[a]=function(){var v=arguments;if(c&&!this.__chain__){var O=this.value();return s.apply(Te(O)?O:[],v)}return this[o](function(P){return s.apply(Te(P)?P:[],v)})}}),er(De.prototype,function(a,s){var o=_[s];if(o){var c=o.name+"";qe.call(ja,c)||(ja[c]=[]),ja[c].push({name:s,func:o})}}),ja[Bs(r,S).name]=[{name:"wrapper",func:r}],De.prototype.clone=Fy,De.prototype.reverse=xy,De.prototype.value=My,_.prototype.at=u_,_.prototype.chain=d_,_.prototype.commit=c_,_.prototype.next=f_,_.prototype.plant=g_,_.prototype.reverse=h_,_.prototype.toJSON=_.prototype.valueOf=_.prototype.value=p_,_.prototype.first=_.prototype.head,hi&&(_.prototype[hi]=m_),_},Ma=cy();ra?((ra.exports=Ma)._=Ma,oo._=Ma):Mt._=Ma}).call(X2)}(Bi,Bi.exports)),Bi.exports}Z2();const Lg=(e,...t)=>{const r=t.find(n=>n===e);if(!r)throw Error(`Det finnes ikke enum for kode ${e}`);return r};Zn(ss);const kv=T.forwardRef((e,t)=>G.jsx(Gn,{gap:"space-8",style:{display:"flex"},...e,ref:t}));kv.displayName="FaktaGruppe";kv.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Au={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var jg;function J2(){return jg||(jg=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(l=i(l,n.call(this,d)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var d in l)t.call(l,d)&&l[d]&&(u=i(u,this&&this[d]||d));return u}function i(l,u){return u?l?l+" "+u:l+u:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Au)),Au.exports}var Q2=J2();const bv=hh(Q2),eF="_boks_nm7fe_1",tF="_harBorderLeft_nm7fe_8",nF="_harBorderTop_nm7fe_12",rF={boks:eF,harBorderLeft:tF,harBorderTop:nF};bv.bind(rF);var Ru={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Bg;function aF(){return Bg||(Bg=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(l=i(l,n(d)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var d in l)t.call(l,d)&&l[d]&&(u=i(u,d));return u}function i(l,u){return u?l?l+" "+u:l+u:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Ru)),Ru.exports}aF();function iF(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cg={exports:{}},Mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function sF(){if(Vg)return Mi;Vg=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,i,l){var u=null;if(l!==void 0&&(u=""+l),i.key!==void 0&&(u=""+i.key),"key"in i){l={};for(var d in i)d!=="key"&&(l[d]=i[d])}else l=i;return i=l.ref,{$$typeof:e,type:n,key:u,ref:i!==void 0?i:null,props:l}}return Mi.Fragment=t,Mi.jsx=r,Mi.jsxs=r,Mi}var Kg;function lF(){return Kg||(Kg=1,Cg.exports=sF()),Cg.exports}var Dr=lF();const oF="_autocompleteSuggestion__substring_1s9ip_1",uF="_autocompleteSuggestion__inner_1s9ip_4",Ii={autocompleteSuggestion__substring:oF,autocompleteSuggestion__inner:uF,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_1s9ip_12"};class dF extends k.Component{constructor(t){super(t),this.state={value:t.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:t}=this.props,{value:r}=this.state;t(r)}onMouseMove(){const{setSuggestionIndex:t,index:r}=this.props;t(r)}render(){const{match:t,active:r,avoidBlur:n,id:i}=this.props,{value:l}=this.state.value,u=l.toLowerCase().startsWith(t.toLowerCase());return Dr.jsx("li",{id:i,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:n,onMouseDown:n,onKeyDown:n,className:"autocompleteSuggestion typo-normal",children:u?Dr.jsxs("span",{className:`${Ii.autocompleteSuggestion__inner} ${r?Ii["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,t.length),Dr.jsx("span",{className:Ii.autocompleteSuggestion__substring,children:l.substring(t.length)})]}):Dr.jsx("span",{className:`${Ii.autocompleteSuggestion__inner} ${r?Ii["autocompleteSuggestion--active"]:""}`,children:l})})}}const cF="_autocomplete_cj8jr_1",fF="_autocomplete__suggestions_cj8jr_27",Su={autocomplete:cF,autocomplete__suggestions:fF,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_cj8jr_31"};class CM extends k.Component{input;inputRef;constructor(t){super(t),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:t}=this.state;t&&(clearTimeout(t),this.setState({blurDelay:null}))}onChange(t){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(t)}onSearchButtonClick(t){const{onSearchButtonClick:r}=this.props;t.preventDefault(),r&&r()}onKeyDown(t){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:n}=this.state;const{suggestions:i}=this.props,l=n>-1;switch(this.setState({setAriaActiveDescendant:t.keyCode===38||t.keyCode===40}),t.keyCode){case 9:l&&r&&this.setValue(i[n]);break;case 13:l&&r?(t.preventDefault(),this.setValue(i[n])):r&&i.length===1?this.setValue(i[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&i.length>0&&(t.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(t.preventDefault(),n=n-1===-2?-1:n-1,this.setState({activeSuggestionIndex:n}));break;case 40:r&&(t.preventDefault(),n=n+1===i.length?i.length-1:n+1,this.setState({activeSuggestionIndex:n}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const t=setTimeout(()=>{const{shouldBlur:n}=this.state;n&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:t});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(t){this.setState({activeSuggestionIndex:t}),this.clearBlurDelay()}setValue(t){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(t)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:t}=this.state;t&&(clearTimeout(t),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:t,id:r,ariaLabel:n,placeholder:i,value:l,name:u,shouldFocusOnMount:d,isLoading:f}=this.props,{activeSuggestionIndex:g,setAriaActiveDescendant:m,hasFocus:h,shouldShowSuggestions:p}=this.state,b=h&&p&&t.length>0,A=m&&g>-1?`${r}-item-${g}`:void 0;return Dr.jsxs("div",{className:`${Su.autocomplete} autocomplete`,"aria-expanded":b,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[Dr.jsx(Ku,{variant:"primary",id:r,name:u,"aria-label":n,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":A,placeholder:i,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:N=>{this.inputRef=N},className:"typo-normal",autoFocus:d,label:n,hideLabel:!0,children:Dr.jsx(Ku.Button,{loading:f,onClick:this.onSearchButtonClick})}),Dr.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:b?Su.autocomplete__suggestions:Su["autocomplete__suggestions--hidden"],children:b&&t.map((N,y)=>Dr.jsx(dF,{id:`${r}-item-${y}`,index:y,value:N,match:l,active:y===g,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},N.key))})]})}}var Hu=function(e,t){return Hu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},Hu(e,t)};function Jn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Hu(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var de=function(){return de=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},de.apply(this,arguments)};function Zl(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function sr(e,t,r){if(arguments.length===2)for(var n=0,i=t.length,l;n<i;n++)(l||!(n in t))&&(l||(l=Array.prototype.slice.call(t,0,n)),l[n]=t[n]);return e.concat(l||Array.prototype.slice.call(t))}function ar(e,t){var r=t&&t.cache?t.cache:kF,n=t&&t.serializer?t.serializer:vF,i=t&&t.strategy?t.strategy:hF;return i(e,{cache:r,serializer:n})}function mF(e){return e==null||typeof e=="number"||typeof e=="boolean"}function gF(e,t,r,n){var i=mF(n)?n:r(n),l=t.get(i);return typeof l>"u"&&(l=e.call(this,n),t.set(i,l)),l}function _v(e,t,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),l=t.get(i);return typeof l>"u"&&(l=e.apply(this,n),t.set(i,l)),l}function Ev(e,t,r,n,i){return r.bind(t,e,n,i)}function hF(e,t){var r=e.length===1?gF:_v;return Ev(e,this,r,t.cache.create(),t.serializer)}function pF(e,t){return Ev(e,this,_v,t.cache.create(),t.serializer)}var vF=function(){return JSON.stringify(arguments)},yF=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(t){return this.cache[t]},e.prototype.set=function(t,r){this.cache[t]=r},e}(),kF={create:function(){return new yF}},ir={variadic:pF},Me;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Me||(Me={}));var rt;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(rt||(rt={}));var si;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(si||(si={}));function Ug(e){return e.type===rt.literal}function bF(e){return e.type===rt.argument}function Tv(e){return e.type===rt.number}function wv(e){return e.type===rt.date}function Ov(e){return e.type===rt.time}function Av(e){return e.type===rt.select}function Rv(e){return e.type===rt.plural}function _F(e){return e.type===rt.pound}function Sv(e){return e.type===rt.tag}function Nv(e){return!!(e&&typeof e=="object"&&e.type===si.number)}function $u(e){return!!(e&&typeof e=="object"&&e.type===si.dateTime)}var Pv=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,EF=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function TF(e){var t={};return e.replace(EF,function(r){var n=r.length;switch(r[0]){case"G":t.era=n===4?"long":n===5?"narrow":"short";break;case"y":t.year=n===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][n-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][n-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=n===4?"long":n===5?"narrow":"short";break;case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][n-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][n-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][n-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][n-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][n-1];break;case"s":t.second=["numeric","2-digit"][n-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=n<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var wF=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function OF(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(wF).filter(function(p){return p.length>0}),r=[],n=0,i=t;n<i.length;n++){var l=i[n],u=l.split("/");if(u.length===0)throw new Error("Invalid number skeleton");for(var d=u[0],f=u.slice(1),g=0,m=f;g<m.length;g++){var h=m[g];if(h.length===0)throw new Error("Invalid number skeleton")}r.push({stem:d,options:f})}return r}function AF(e){return e.replace(/^(.*?)-/,"")}var qg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Dv=/^(@+)?(\+|#+)?[rs]?$/g,RF=/(\*)(0+)|(#+)(0+)|(0+)/g,Fv=/^(0+)$/;function Gg(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(Dv,function(r,n,i){return typeof i!="string"?(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length):i==="+"?t.minimumSignificantDigits=n.length:n[0]==="#"?t.maximumSignificantDigits=n.length:(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length+(typeof i=="string"?i.length:0)),""}),t}function xv(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function SF(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if(r==="+!"?(t.signDisplay="always",e=e.slice(2)):r==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!Fv.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function Hg(e){var t={},r=xv(e);return r||t}function NF(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r];switch(i.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=i.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=AF(i.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=de(de(de({},t),{notation:"scientific"}),i.options.reduce(function(f,g){return de(de({},f),Hg(g))},{}));continue;case"engineering":t=de(de(de({},t),{notation:"engineering"}),i.options.reduce(function(f,g){return de(de({},f),Hg(g))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(i.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");i.options[0].replace(RF,function(f,g,m,h,p,b){if(g)t.minimumIntegerDigits=m.length;else{if(h&&p)throw new Error("We currently do not support maximum integer digits");if(b)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Fv.test(i.stem)){t.minimumIntegerDigits=i.stem.length;continue}if(qg.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");i.stem.replace(qg,function(f,g,m,h,p,b){return m==="*"?t.minimumFractionDigits=g.length:h&&h[0]==="#"?t.maximumFractionDigits=h.length:p&&b?(t.minimumFractionDigits=p.length,t.maximumFractionDigits=p.length+b.length):(t.minimumFractionDigits=g.length,t.maximumFractionDigits=g.length),""});var l=i.options[0];l==="w"?t=de(de({},t),{trailingZeroDisplay:"stripIfInteger"}):l&&(t=de(de({},t),Gg(l)));continue}if(Dv.test(i.stem)){t=de(de({},t),Gg(i.stem));continue}var u=xv(i.stem);u&&(t=de(de({},t),u));var d=SF(i.stem);d&&(t=de(de({},t),d))}return t}var il={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function PF(e,t){for(var r="",n=0;n<e.length;n++){var i=e.charAt(n);if(i==="j"){for(var l=0;n+1<e.length&&e.charAt(n+1)===i;)l++,n++;var u=1+(l&1),d=l<2?1:3+(l>>1),f="a",g=DF(t);for((g=="H"||g=="k")&&(d=0);d-- >0;)r+=f;for(;u-- >0;)r=g+r}else i==="J"?r+="H":r+=i}return r}function DF(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,n;r!=="root"&&(n=e.maximize().region);var i=il[n||""]||il[r||""]||il["".concat(r,"-001")]||il["001"];return i[0]}var Nu,FF=new RegExp("^".concat(Pv.source,"*")),xF=new RegExp("".concat(Pv.source,"*$"));function Ie(e,t){return{start:e,end:t}}var MF=!!String.prototype.startsWith&&"_a".startsWith("a",1),IF=!!String.fromCodePoint,LF=!!Object.fromEntries,jF=!!String.prototype.codePointAt,BF=!!String.prototype.trimStart,CF=!!String.prototype.trimEnd,VF=!!Number.isSafeInteger,KF=VF?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Wu=!0;try{var UF=Iv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Wu=((Nu=UF.exec("a"))===null||Nu===void 0?void 0:Nu[0])==="a"}catch{Wu=!1}var $g=MF?function(e,t,r){return e.startsWith(t,r)}:function(e,t,r){return e.slice(r,r+t.length)===t},Yu=IF?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r="",n=e.length,i=0,l;n>i;){if(l=e[i++],l>1114111)throw RangeError(l+" is not a valid code point");r+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return r},Wg=LF?Object.fromEntries:function(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r],l=i[0],u=i[1];t[l]=u}return t},Mv=jF?function(e,t){return e.codePointAt(t)}:function(e,t){var r=e.length;if(!(t<0||t>=r)){var n=e.charCodeAt(t),i;return n<55296||n>56319||t+1===r||(i=e.charCodeAt(t+1))<56320||i>57343?n:(n-55296<<10)+(i-56320)+65536}},qF=BF?function(e){return e.trimStart()}:function(e){return e.replace(FF,"")},GF=CF?function(e){return e.trimEnd()}:function(e){return e.replace(xF,"")};function Iv(e,t){return new RegExp(e,t)}var zu;if(Wu){var Yg=Iv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");zu=function(e,t){var r;Yg.lastIndex=t;var n=Yg.exec(e);return(r=n[1])!==null&&r!==void 0?r:""}}else zu=function(e,t){for(var r=[];;){var n=Mv(e,t);if(n===void 0||Lv(n)||YF(n))break;r.push(n),t+=n>=65536?2:1}return Yu.apply(void 0,r)};var HF=function(){function e(t,r){r===void 0&&(r={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,r,n){for(var i=[];!this.isEOF();){var l=this.char();if(l===123){var u=this.parseArgument(t,n);if(u.err)return u;i.push(u.val)}else{if(l===125&&t>0)break;if(l===35&&(r==="plural"||r==="selectordinal")){var d=this.clonePosition();this.bump(),i.push({type:rt.pound,location:Ie(d,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(n)break;return this.error(Me.UNMATCHED_CLOSING_TAG,Ie(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&Xu(this.peek()||0)){var u=this.parseTag(t,r);if(u.err)return u;i.push(u.val)}else{var u=this.parseLiteral(t,r);if(u.err)return u;i.push(u.val)}}}return{val:i,err:null}},e.prototype.parseTag=function(t,r){var n=this.clonePosition();this.bump();var i=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:rt.literal,value:"<".concat(i,"/>"),location:Ie(n,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(t+1,r,!0);if(l.err)return l;var u=l.val,d=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Xu(this.char()))return this.error(Me.INVALID_TAG,Ie(d,this.clonePosition()));var f=this.clonePosition(),g=this.parseTagName();return i!==g?this.error(Me.UNMATCHED_CLOSING_TAG,Ie(f,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:rt.tag,value:i,children:u,location:Ie(n,this.clonePosition())},err:null}:this.error(Me.INVALID_TAG,Ie(d,this.clonePosition())))}else return this.error(Me.UNCLOSED_TAG,Ie(n,this.clonePosition()))}else return this.error(Me.INVALID_TAG,Ie(n,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&WF(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,r){for(var n=this.clonePosition(),i="";;){var l=this.tryParseQuote(r);if(l){i+=l;continue}var u=this.tryParseUnquoted(t,r);if(u){i+=u;continue}var d=this.tryParseLeftAngleBracket();if(d){i+=d;continue}break}var f=Ie(n,this.clonePosition());return{val:{type:rt.literal,value:i,location:f},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!$F(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var n=this.char();if(n===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(n);this.bump()}return Yu.apply(void 0,r)},e.prototype.tryParseUnquoted=function(t,r){if(this.isEOF())return null;var n=this.char();return n===60||n===123||n===35&&(r==="plural"||r==="selectordinal")||n===125&&t>0?null:(this.bump(),Yu(n))},e.prototype.parseArgument=function(t,r){var n=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,Ie(n,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Me.EMPTY_ARGUMENT,Ie(n,this.clonePosition()));var i=this.parseIdentifierIfPossible().value;if(!i)return this.error(Me.MALFORMED_ARGUMENT,Ie(n,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,Ie(n,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:rt.argument,value:i,location:Ie(n,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,Ie(n,this.clonePosition())):this.parseArgumentOptions(t,r,i,n);default:return this.error(Me.MALFORMED_ARGUMENT,Ie(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),r=this.offset(),n=zu(this.message,r),i=r+n.length;this.bumpTo(i);var l=this.clonePosition(),u=Ie(t,l);return{value:n,location:u}},e.prototype.parseArgumentOptions=function(t,r,n,i){var l,u=this.clonePosition(),d=this.parseIdentifierIfPossible().value,f=this.clonePosition();switch(d){case"":return this.error(Me.EXPECT_ARGUMENT_TYPE,Ie(u,f));case"number":case"date":case"time":{this.bumpSpace();var g=null;if(this.bumpIf(",")){this.bumpSpace();var m=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var p=GF(h.val);if(p.length===0)return this.error(Me.EXPECT_ARGUMENT_STYLE,Ie(this.clonePosition(),this.clonePosition()));var b=Ie(m,this.clonePosition());g={style:p,styleLocation:b}}var A=this.tryParseArgumentClose(i);if(A.err)return A;var N=Ie(i,this.clonePosition());if(g&&$g(g?.style,"::",0)){var y=qF(g.style.slice(2));if(d==="number"){var h=this.parseNumberSkeletonFromString(y,g.styleLocation);return h.err?h:{val:{type:rt.number,value:n,location:N,style:h.val},err:null}}else{if(y.length===0)return this.error(Me.EXPECT_DATE_TIME_SKELETON,N);var S=y;this.locale&&(S=PF(y,this.locale));var p={type:si.dateTime,pattern:S,location:g.styleLocation,parsedOptions:this.shouldParseSkeletons?TF(S):{}},R=d==="date"?rt.date:rt.time;return{val:{type:R,value:n,location:N,style:p},err:null}}}return{val:{type:d==="number"?rt.number:d==="date"?rt.date:rt.time,value:n,location:N,style:(l=g?.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var w=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Me.EXPECT_SELECT_ARGUMENT_OPTIONS,Ie(w,de({},w)));this.bumpSpace();var D=this.parseIdentifierIfPossible(),E=0;if(d!=="select"&&D.value==="offset"){if(!this.bumpIf(":"))return this.error(Me.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ie(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(Me.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Me.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),D=this.parseIdentifierIfPossible(),E=h.val}var I=this.tryParsePluralOrSelectOptions(t,d,r,D);if(I.err)return I;var A=this.tryParseArgumentClose(i);if(A.err)return A;var M=Ie(i,this.clonePosition());return d==="select"?{val:{type:rt.select,value:n,options:Wg(I.val),location:M},err:null}:{val:{type:rt.plural,value:n,options:Wg(I.val),offset:E,pluralType:d==="plural"?"cardinal":"ordinal",location:M},err:null}}default:return this.error(Me.INVALID_ARGUMENT_TYPE,Ie(u,f))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,Ie(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){var n=this.char();switch(n){case 39:{this.bump();var i=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Me.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Ie(i,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,r){var n=[];try{n=OF(t)}catch{return this.error(Me.INVALID_NUMBER_SKELETON,r)}return{val:{type:si.number,tokens:n,location:r,parsedOptions:this.shouldParseSkeletons?NF(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,r,n,i){for(var l,u=!1,d=[],f=new Set,g=i.value,m=i.location;;){if(g.length===0){var h=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var p=this.tryParseDecimalInteger(Me.EXPECT_PLURAL_ARGUMENT_SELECTOR,Me.INVALID_PLURAL_ARGUMENT_SELECTOR);if(p.err)return p;m=Ie(h,this.clonePosition()),g=this.message.slice(h.offset,this.offset())}else break}if(f.has(g))return this.error(r==="select"?Me.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Me.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,m);g==="other"&&(u=!0),this.bumpSpace();var b=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?Me.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Me.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Ie(this.clonePosition(),this.clonePosition()));var A=this.parseMessage(t+1,r,n);if(A.err)return A;var N=this.tryParseArgumentClose(b);if(N.err)return N;d.push([g,{value:A.val,location:Ie(b,this.clonePosition())}]),f.add(g),this.bumpSpace(),l=this.parseIdentifierIfPossible(),g=l.value,m=l.location}return d.length===0?this.error(r==="select"?Me.EXPECT_SELECT_ARGUMENT_SELECTOR:Me.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ie(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!u?this.error(Me.MISSING_OTHER_CLAUSE,Ie(this.clonePosition(),this.clonePosition())):{val:d,err:null}},e.prototype.tryParseDecimalInteger=function(t,r){var n=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(n=-1);for(var l=!1,u=0;!this.isEOF();){var d=this.char();if(d>=48&&d<=57)l=!0,u=u*10+(d-48),this.bump();else break}var f=Ie(i,this.clonePosition());return l?(u*=n,KF(u)?{val:u,err:null}:this.error(r,f)):this.error(t,f)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var r=Mv(this.message,t);if(r===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(t,r){return{val:null,err:{kind:t,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if($g(this.message,t,this.offset())){for(var r=0;r<t.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var r=this.offset(),n=this.message.indexOf(t,r);return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var r=this.offset();if(r===t)break;if(r>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Lv(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),r=this.offset(),n=this.message.charCodeAt(r+(t>=65536?2:1));return n??null},e}();function Xu(e){return e>=97&&e<=122||e>=65&&e<=90}function $F(e){return Xu(e)||e===47}function WF(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Lv(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function YF(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Zu(e){e.forEach(function(t){if(delete t.location,Av(t)||Rv(t))for(var r in t.options)delete t.options[r].location,Zu(t.options[r].value);else Tv(t)&&Nv(t.style)||(wv(t)||Ov(t))&&$u(t.style)?delete t.style.location:Sv(t)&&Zu(t.children)})}function zF(e,t){t===void 0&&(t={}),t=de({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var r=new HF(e,t).parse();if(r.err){var n=SyntaxError(Me[r.err.kind]);throw n.location=r.err.location,n.originalMessage=r.err.message,n}return t?.captureLocation||Zu(r.val),r.val}var mr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(mr||(mr={}));var Jr=function(e){Jn(t,e);function t(r,n,i){var l=e.call(this,r)||this;return l.code=n,l.originalMessage=i,l}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),zg=function(e){Jn(t,e);function t(r,n,i,l){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(n,'". Options are "').concat(Object.keys(i).join('", "'),'"'),mr.INVALID_VALUE,l)||this}return t}(Jr),XF=function(e){Jn(t,e);function t(r,n,i){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(n),mr.INVALID_VALUE,i)||this}return t}(Jr),ZF=function(e){Jn(t,e);function t(r,n){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(n,'"'),mr.MISSING_VALUE,n)||this}return t}(Jr),Yt;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Yt||(Yt={}));function JF(e){return e.length<2?e:e.reduce(function(t,r){var n=t[t.length-1];return!n||n.type!==Yt.literal||r.type!==Yt.literal?t.push(r):n.value+=r.value,t},[])}function jv(e){return typeof e=="function"}function bl(e,t,r,n,i,l,u){if(e.length===1&&Ug(e[0]))return[{type:Yt.literal,value:e[0].value}];for(var d=[],f=0,g=e;f<g.length;f++){var m=g[f];if(Ug(m)){d.push({type:Yt.literal,value:m.value});continue}if(_F(m)){typeof l=="number"&&d.push({type:Yt.literal,value:r.getNumberFormat(t).format(l)});continue}var h=m.value;if(!(i&&h in i))throw new ZF(h,u);var p=i[h];if(bF(m)){(!p||typeof p=="string"||typeof p=="number")&&(p=typeof p=="string"||typeof p=="number"?String(p):""),d.push({type:typeof p=="string"?Yt.literal:Yt.object,value:p});continue}if(wv(m)){var b=typeof m.style=="string"?n.date[m.style]:$u(m.style)?m.style.parsedOptions:void 0;d.push({type:Yt.literal,value:r.getDateTimeFormat(t,b).format(p)});continue}if(Ov(m)){var b=typeof m.style=="string"?n.time[m.style]:$u(m.style)?m.style.parsedOptions:n.time.medium;d.push({type:Yt.literal,value:r.getDateTimeFormat(t,b).format(p)});continue}if(Tv(m)){var b=typeof m.style=="string"?n.number[m.style]:Nv(m.style)?m.style.parsedOptions:void 0;b&&b.scale&&(p=p*(b.scale||1)),d.push({type:Yt.literal,value:r.getNumberFormat(t,b).format(p)});continue}if(Sv(m)){var A=m.children,N=m.value,y=i[N];if(!jv(y))throw new XF(N,"function",u);var S=bl(A,t,r,n,i,l),R=y(S.map(function(E){return E.value}));Array.isArray(R)||(R=[R]),d.push.apply(d,R.map(function(E){return{type:typeof E=="string"?Yt.literal:Yt.object,value:E}}))}if(Av(m)){var w=m.options[p]||m.options.other;if(!w)throw new zg(m.value,p,Object.keys(m.options),u);d.push.apply(d,bl(w.value,t,r,n,i));continue}if(Rv(m)){var w=m.options["=".concat(p)];if(!w){if(!Intl.PluralRules)throw new Jr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,mr.MISSING_INTL_API,u);var D=r.getPluralRules(t,{type:m.pluralType}).select(p-(m.offset||0));w=m.options[D]||m.options.other}if(!w)throw new zg(m.value,p,Object.keys(m.options),u);d.push.apply(d,bl(w.value,t,r,n,i,p-(m.offset||0)));continue}}return JF(d)}function QF(e,t){return t?de(de(de({},e||{}),t||{}),Object.keys(e).reduce(function(r,n){return r[n]=de(de({},e[n]),t[n]||{}),r},{})):e}function ex(e,t){return t?Object.keys(e).reduce(function(r,n){return r[n]=QF(e[n],t[n]),r},de({},e)):e}function Pu(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function tx(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ar(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.NumberFormat).bind.apply(t,sr([void 0],r,!1)))},{cache:Pu(e.number),strategy:ir.variadic}),getDateTimeFormat:ar(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.DateTimeFormat).bind.apply(t,sr([void 0],r,!1)))},{cache:Pu(e.dateTime),strategy:ir.variadic}),getPluralRules:ar(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.PluralRules).bind.apply(t,sr([void 0],r,!1)))},{cache:Pu(e.pluralRules),strategy:ir.variadic})}}var Bv=function(){function e(t,r,n,i){r===void 0&&(r=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(f){var g=l.formatToParts(f);if(g.length===1)return g[0].value;var m=g.reduce(function(h,p){return!h.length||p.type!==Yt.literal||typeof h[h.length-1]!="string"?h.push(p.value):h[h.length-1]+=p.value,h},[]);return m.length<=1?m[0]||"":m},this.formatToParts=function(f){return bl(l.ast,l.locales,l.formatters,l.formats,f,void 0,l.message)},this.resolvedOptions=function(){var f;return{locale:((f=l.resolvedLocale)===null||f===void 0?void 0:f.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=i||{};u.formatters;var d=Zl(u,["formatters"]);this.ast=e.__parse(t,de(de({},d),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=ex(e.formats,n),this.formatters=i&&i.formatters||tx(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(t);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=zF,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),wa;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(wa||(wa={}));var ls=function(e){Jn(t,e);function t(r,n,i){var l=this,u=i?i instanceof Error?i:new Error(String(i)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(n,`
`).concat(u?`
`.concat(u.message,`
`).concat(u.stack):""))||this,l.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,t),l}return t}(Error),nx=function(e){Jn(t,e);function t(r,n){return e.call(this,wa.UNSUPPORTED_FORMATTER,r,n)||this}return t}(ls),rx=function(e){Jn(t,e);function t(r,n){return e.call(this,wa.INVALID_CONFIG,r,n)||this}return t}(ls),Xg=function(e){Jn(t,e);function t(r,n){return e.call(this,wa.MISSING_DATA,r,n)||this}return t}(ls),jn=function(e){Jn(t,e);function t(r,n,i){var l=e.call(this,wa.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(n,`
`),i)||this;return l.locale=n,l}return t}(ls),Du=function(e){Jn(t,e);function t(r,n,i,l){var u=e.call(this,"".concat(r,`
MessageID: `).concat(i?.id,`
Default Message: `).concat(i?.defaultMessage,`
Description: `).concat(i?.description,`
`),n,l)||this;return u.descriptor=i,u.locale=n,u}return t}(jn),ax=function(e){Jn(t,e);function t(r,n){var i=e.call(this,wa.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(n,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(l){var u;return(u=l.value)!==null&&u!==void 0?u:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return i.descriptor=r,i}return t}(ls);function ix(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function fi(e,t,r){return r===void 0&&(r={}),t.reduce(function(n,i){return i in e?n[i]=e[i]:i in r&&(n[i]=r[i]),n},{})}var sx=function(e){},lx=function(e){},Cv={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:sx,onWarn:lx};function Vv(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function fa(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function ox(e){e===void 0&&(e=Vv());var t=Intl.RelativeTimeFormat,r=Intl.ListFormat,n=Intl.DisplayNames,i=ar(function(){for(var d,f=[],g=0;g<arguments.length;g++)f[g]=arguments[g];return new((d=Intl.DateTimeFormat).bind.apply(d,sr([void 0],f,!1)))},{cache:fa(e.dateTime),strategy:ir.variadic}),l=ar(function(){for(var d,f=[],g=0;g<arguments.length;g++)f[g]=arguments[g];return new((d=Intl.NumberFormat).bind.apply(d,sr([void 0],f,!1)))},{cache:fa(e.number),strategy:ir.variadic}),u=ar(function(){for(var d,f=[],g=0;g<arguments.length;g++)f[g]=arguments[g];return new((d=Intl.PluralRules).bind.apply(d,sr([void 0],f,!1)))},{cache:fa(e.pluralRules),strategy:ir.variadic});return{getDateTimeFormat:i,getNumberFormat:l,getMessageFormat:ar(function(d,f,g,m){return new Bv(d,f,g,de({formatters:{getNumberFormat:l,getDateTimeFormat:i,getPluralRules:u}},m||{}))},{cache:fa(e.message),strategy:ir.variadic}),getRelativeTimeFormat:ar(function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];return new(t.bind.apply(t,sr([void 0],d,!1)))},{cache:fa(e.relativeTime),strategy:ir.variadic}),getPluralRules:u,getListFormat:ar(function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];return new(r.bind.apply(r,sr([void 0],d,!1)))},{cache:fa(e.list),strategy:ir.variadic}),getDisplayNames:ar(function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];return new(n.bind.apply(n,sr([void 0],d,!1)))},{cache:fa(e.displayNames),strategy:ir.variadic})}}function Gd(e,t,r,n){var i=e&&e[t],l;if(i&&(l=i[r]),l)return l;n(new nx("No ".concat(t," format named: ").concat(r)))}function sl(e,t){return Object.keys(e).reduce(function(r,n){return r[n]=de({timeZone:t},e[n]),r},{})}function Zg(e,t){var r=Object.keys(de(de({},e),t));return r.reduce(function(n,i){return n[i]=de(de({},e[i]||{}),t[i]||{}),n},{})}function Jg(e,t){if(!t)return e;var r=Bv.formats;return de(de(de({},r),e),{date:Zg(sl(r.date,t),sl(e.date||{},t)),time:Zg(sl(r.time,t),sl(e.time||{},t))})}var Ju=function(e,t,r,n,i){var l=e.locale,u=e.formats,d=e.messages,f=e.defaultLocale,g=e.defaultFormats,m=e.fallbackOnEmptyString,h=e.onError,p=e.timeZone,b=e.defaultRichTextElements;r===void 0&&(r={id:""});var A=r.id,N=r.defaultMessage;ix(!!A,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var y=String(A),S=d&&Object.prototype.hasOwnProperty.call(d,y)&&d[y];if(Array.isArray(S)&&S.length===1&&S[0].type===rt.literal)return S[0].value;if(!n&&S&&typeof S=="string"&&!b)return S.replace(/'\{(.*?)\}'/gi,"{$1}");if(n=de(de({},b),n||{}),u=Jg(u,p),g=Jg(g,p),!S){if(m===!1&&S==="")return S;if((!N||l&&l.toLowerCase()!==f.toLowerCase())&&h(new ax(r,l)),N)try{var R=t.getMessageFormat(N,f,g,i);return R.format(n)}catch(w){return h(new Du('Error formatting default message for: "'.concat(y,'", rendering default message verbatim'),l,r,w)),typeof N=="string"?N:y}return y}try{var R=t.getMessageFormat(S,l,u,de({formatters:t},i||{}));return R.format(n)}catch(w){h(new Du('Error formatting message: "'.concat(y,'", using ').concat(N?"default message":"id"," as fallback."),l,r,w))}if(N)try{var R=t.getMessageFormat(N,f,g,i);return R.format(n)}catch(w){h(new Du('Error formatting the default message for: "'.concat(y,'", rendering message verbatim'),l,r,w))}return typeof S=="string"?S:typeof N=="string"?N:y},ux=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function os(e,t,r,n){var i=e.locale,l=e.formats,u=e.onError,d=e.timeZone;n===void 0&&(n={});var f=n.format,g=de(de({},d&&{timeZone:d}),f&&Gd(l,t,f,u)),m=fi(n,ux,g);return t==="time"&&!m.hour&&!m.minute&&!m.second&&!m.timeStyle&&!m.dateStyle&&(m=de(de({},m),{hour:"numeric",minute:"numeric"})),r(i,m)}function dx(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i=r[0],l=r[1],u=l===void 0?{}:l,d=typeof i=="string"?new Date(i||0):i;try{return os(e,"date",t,u).format(d)}catch(f){e.onError(new jn("Error formatting date.",e.locale,f))}return String(d)}function cx(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i=r[0],l=r[1],u=l===void 0?{}:l,d=typeof i=="string"?new Date(i||0):i;try{return os(e,"time",t,u).format(d)}catch(f){e.onError(new jn("Error formatting time.",e.locale,f))}return String(d)}function fx(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i=r[0],l=r[1],u=r[2],d=u===void 0?{}:u,f=typeof i=="string"?new Date(i||0):i,g=typeof l=="string"?new Date(l||0):l;try{return os(e,"dateTimeRange",t,d).formatRange(f,g)}catch(m){e.onError(new jn("Error formatting date time range.",e.locale,m))}return String(f)}function mx(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i=r[0],l=r[1],u=l===void 0?{}:l,d=typeof i=="string"?new Date(i||0):i;try{return os(e,"date",t,u).formatToParts(d)}catch(f){e.onError(new jn("Error formatting date.",e.locale,f))}return[]}function gx(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i=r[0],l=r[1],u=l===void 0?{}:l,d=typeof i=="string"?new Date(i||0):i;try{return os(e,"time",t,u).formatToParts(d)}catch(f){e.onError(new jn("Error formatting time.",e.locale,f))}return[]}var hx=["style","type","fallback","languageDisplay"];function px(e,t,r,n){var i=e.locale,l=e.onError,u=Intl.DisplayNames;u||l(new Jr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,mr.MISSING_INTL_API));var d=fi(n,hx);try{return t(i,d).of(r)}catch(f){l(new jn("Error formatting display name.",i,f))}}var vx=["type","style"],Qg=Date.now();function yx(e){return"".concat(Qg,"_").concat(e,"_").concat(Qg)}function kx(e,t,r,n){n===void 0&&(n={});var i=Kv(e,t,r,n).reduce(function(l,u){var d=u.value;return typeof d!="string"?l.push(d):typeof l[l.length-1]=="string"?l[l.length-1]+=d:l.push(d),l},[]);return i.length===1?i[0]:i.length===0?"":i}function Kv(e,t,r,n){var i=e.locale,l=e.onError;n===void 0&&(n={});var u=Intl.ListFormat;u||l(new Jr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,mr.MISSING_INTL_API));var d=fi(n,vx);try{var f={},g=r.map(function(m,h){if(typeof m=="object"){var p=yx(h);return f[p]=m,p}return String(m)});return t(i,d).formatToParts(g).map(function(m){return m.type==="literal"?m:de(de({},m),{value:f[m.value]||m.value})})}catch(m){l(new jn("Error formatting list.",i,m))}return r}var bx=["type"];function _x(e,t,r,n){var i=e.locale,l=e.onError;n===void 0&&(n={}),Intl.PluralRules||l(new Jr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,mr.MISSING_INTL_API));var u=fi(n,bx);try{return t(i,u).select(r)}catch(d){l(new jn("Error formatting plural.",i,d))}return"other"}var Ex=["numeric","style"];function Tx(e,t,r){var n=e.locale,i=e.formats,l=e.onError;r===void 0&&(r={});var u=r.format,d=!!u&&Gd(i,"relative",u,l)||{},f=fi(r,Ex,d);return t(n,f)}function wx(e,t,r,n,i){i===void 0&&(i={}),n||(n="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Jr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,mr.MISSING_INTL_API));try{return Tx(e,t,i).format(r,n)}catch(u){e.onError(new jn("Error formatting relative time.",e.locale,u))}return String(r)}var Ox=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Uv(e,t,r){var n=e.locale,i=e.formats,l=e.onError;r===void 0&&(r={});var u=r.format,d=u&&Gd(i,"number",u,l)||{},f=fi(r,Ox,d);return t(n,f)}function Ax(e,t,r,n){n===void 0&&(n={});try{return Uv(e,t,n).format(r)}catch(i){e.onError(new jn("Error formatting number.",e.locale,i))}return String(r)}function Rx(e,t,r,n){n===void 0&&(n={});try{return Uv(e,t,n).formatToParts(r)}catch(i){e.onError(new jn("Error formatting number.",e.locale,i))}return[]}function Sx(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function Nx(e){e.onWarn&&e.defaultRichTextElements&&Sx(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Px(e,t){var r=ox(t),n=de(de({},Cv),e),i=n.locale,l=n.defaultLocale,u=n.onError;return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&u?u(new Xg('Missing locale data for locale: "'.concat(i,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&u&&u(new Xg('Missing locale data for locale: "'.concat(i,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(u&&u(new rx('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),n.locale=n.defaultLocale||"en"),Nx(n),de(de({},n),{formatters:r,formatNumber:Ax.bind(null,n,r.getNumberFormat),formatNumberToParts:Rx.bind(null,n,r.getNumberFormat),formatRelativeTime:wx.bind(null,n,r.getRelativeTimeFormat),formatDate:dx.bind(null,n,r.getDateTimeFormat),formatDateToParts:mx.bind(null,n,r.getDateTimeFormat),formatTime:cx.bind(null,n,r.getDateTimeFormat),formatDateTimeRange:fx.bind(null,n,r.getDateTimeFormat),formatTimeToParts:gx.bind(null,n,r.getDateTimeFormat),formatPlural:_x.bind(null,n,r.getPluralRules),formatMessage:Ju.bind(null,n,r),$t:Ju.bind(null,n,r),formatList:kx.bind(null,n,r.getListFormat),formatListToParts:Kv.bind(null,n,r.getListFormat),formatDisplayName:px.bind(null,n,r.getDisplayNames)})}function Dx(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function Fx(e){Dx(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var xx=de(de({},Cv),{textComponent:T.Fragment}),Mx={key:42},Ix=function(e){return T.isValidElement(e)?T.createElement(T.Fragment,Mx,e):e},Lx=function(e){var t;return(t=T.Children.map(e,Ix))!==null&&t!==void 0?t:[]};function jx(e){return function(t){return e(T.Children.toArray(t))}}var eh={exports:{}},Ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th;function Bx(){if(th)return Ue;th=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,g=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,A=e?Symbol.for("react.lazy"):60116,N=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,S=e?Symbol.for("react.responder"):60118,R=e?Symbol.for("react.scope"):60119;function w(E){if(typeof E=="object"&&E!==null){var I=E.$$typeof;switch(I){case t:switch(E=E.type,E){case f:case g:case n:case l:case i:case h:return E;default:switch(E=E&&E.$$typeof,E){case d:case m:case A:case b:case u:return E;default:return I}}case r:return I}}}function D(E){return w(E)===g}return Ue.AsyncMode=f,Ue.ConcurrentMode=g,Ue.ContextConsumer=d,Ue.ContextProvider=u,Ue.Element=t,Ue.ForwardRef=m,Ue.Fragment=n,Ue.Lazy=A,Ue.Memo=b,Ue.Portal=r,Ue.Profiler=l,Ue.StrictMode=i,Ue.Suspense=h,Ue.isAsyncMode=function(E){return D(E)||w(E)===f},Ue.isConcurrentMode=D,Ue.isContextConsumer=function(E){return w(E)===d},Ue.isContextProvider=function(E){return w(E)===u},Ue.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===t},Ue.isForwardRef=function(E){return w(E)===m},Ue.isFragment=function(E){return w(E)===n},Ue.isLazy=function(E){return w(E)===A},Ue.isMemo=function(E){return w(E)===b},Ue.isPortal=function(E){return w(E)===r},Ue.isProfiler=function(E){return w(E)===l},Ue.isStrictMode=function(E){return w(E)===i},Ue.isSuspense=function(E){return w(E)===h},Ue.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===n||E===g||E===l||E===i||E===h||E===p||typeof E=="object"&&E!==null&&(E.$$typeof===A||E.$$typeof===b||E.$$typeof===u||E.$$typeof===d||E.$$typeof===m||E.$$typeof===y||E.$$typeof===S||E.$$typeof===R||E.$$typeof===N)},Ue.typeOf=w,Ue}var nh;function Cx(){return nh||(nh=1,eh.exports=Bx()),eh.exports}var Fu,rh;function Vx(){if(rh)return Fu;rh=1;var e=Cx(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=n,l[e.Memo]=i;function u(A){return e.isMemo(A)?i:l[A.$$typeof]||t}var d=Object.defineProperty,f=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;function b(A,N,y){if(typeof N!="string"){if(p){var S=h(N);S&&S!==p&&b(A,S,y)}var R=f(N);g&&(R=R.concat(g(N)));for(var w=u(A),D=u(N),E=0;E<R.length;++E){var I=R[E];if(!r[I]&&!(y&&y[I])&&!(D&&D[I])&&!(w&&w[I])){var M=m(N,I);try{d(A,I,M)}catch{}}}}return A}return Fu=b,Fu}Vx();var Hd=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=T.createContext(null)):T.createContext(null);Hd.Consumer;Hd.Provider;var Kx=Hd;function qv(){var e=T.useContext(Kx);return Fx(e),e}var Qu;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Qu||(Qu={}));var ed;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ed||(ed={}));function Gv(e){var t=function(r){var n=qv(),i=r.value,l=r.children,u=Zl(r,["value","children"]),d=typeof i=="string"?new Date(i||0):i,f=e==="formatDate"?n.formatDateToParts(d,u):n.formatTimeToParts(d,u);return l(f)};return t.displayName=ed[e],t}function us(e){var t=function(r){var n=qv(),i=r.value,l=r.children,u=Zl(r,["value","children"]),d=n[e](i,u);if(typeof l=="function")return l(d);var f=n.textComponent||T.Fragment;return T.createElement(f,null,d)};return t.displayName=Qu[e],t}function Hv(e){return e&&Object.keys(e).reduce(function(t,r){var n=e[r];return t[r]=jv(n)?jx(n):n,t},{})}var ah=function(e,t,r,n){for(var i=[],l=4;l<arguments.length;l++)i[l-4]=arguments[l];var u=Hv(n),d=Ju.apply(void 0,sr([e,t,r,u],i,!1));return Array.isArray(d)?Lx(d):d},Ux=function(e,t){var r=e.defaultRichTextElements,n=Zl(e,["defaultRichTextElements"]),i=Hv(r),l=Px(de(de(de({},xx),n),{defaultRichTextElements:i}),t),u={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:i};return de(de({},l),{formatMessage:ah.bind(null,u,l.formatters),$t:ah.bind(null,u,l.formatters)})};us("formatDate");us("formatTime");us("formatNumber");us("formatList");us("formatDisplayName");Gv("formatDate");Gv("formatTime");function $d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var td={exports:{}},qx=td.exports,ih;function Gx(){return ih||(ih=1,function(e,t){(function(r,n){e.exports=n()})(qx,function(){var r,n,i=1e3,l=6e4,u=36e5,d=864e5,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g=31536e6,m=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,p={years:g,months:m,days:d,hours:u,minutes:l,seconds:i,milliseconds:1,weeks:6048e5},b=function(I){return I instanceof D},A=function(I,M,B){return new D(I,B,M.$l)},N=function(I){return n.p(I)+"s"},y=function(I){return I<0},S=function(I){return y(I)?Math.ceil(I):Math.floor(I)},R=function(I){return Math.abs(I)},w=function(I,M){return I?y(I)?{negative:!0,format:""+R(I)+M}:{negative:!1,format:""+I+M}:{negative:!1,format:""}},D=function(){function I(B,U,Y){var H=this;if(this.$d={},this.$l=Y,B===void 0&&(this.$ms=0,this.parseFromMilliseconds()),U)return A(B*p[N(U)],this);if(typeof B=="number")return this.$ms=B,this.parseFromMilliseconds(),this;if(typeof B=="object")return Object.keys(B).forEach(function(Z){H.$d[N(Z)]=B[Z]}),this.calMilliseconds(),this;if(typeof B=="string"){var V=B.match(h);if(V){var j=V.slice(2).map(function(Z){return Z!=null?Number(Z):0});return this.$d.years=j[0],this.$d.months=j[1],this.$d.weeks=j[2],this.$d.days=j[3],this.$d.hours=j[4],this.$d.minutes=j[5],this.$d.seconds=j[6],this.calMilliseconds(),this}}return this}var M=I.prototype;return M.calMilliseconds=function(){var B=this;this.$ms=Object.keys(this.$d).reduce(function(U,Y){return U+(B.$d[Y]||0)*p[Y]},0)},M.parseFromMilliseconds=function(){var B=this.$ms;this.$d.years=S(B/g),B%=g,this.$d.months=S(B/m),B%=m,this.$d.days=S(B/d),B%=d,this.$d.hours=S(B/u),B%=u,this.$d.minutes=S(B/l),B%=l,this.$d.seconds=S(B/i),B%=i,this.$d.milliseconds=B},M.toISOString=function(){var B=w(this.$d.years,"Y"),U=w(this.$d.months,"M"),Y=+this.$d.days||0;this.$d.weeks&&(Y+=7*this.$d.weeks);var H=w(Y,"D"),V=w(this.$d.hours,"H"),j=w(this.$d.minutes,"M"),Z=this.$d.seconds||0;this.$d.milliseconds&&(Z+=this.$d.milliseconds/1e3,Z=Math.round(1e3*Z)/1e3);var te=w(Z,"S"),ne=B.negative||U.negative||H.negative||V.negative||j.negative||te.negative,oe=V.format||j.format||te.format?"T":"",Q=(ne?"-":"")+"P"+B.format+U.format+H.format+oe+V.format+j.format+te.format;return Q==="P"||Q==="-P"?"P0D":Q},M.toJSON=function(){return this.toISOString()},M.format=function(B){var U=B||"YYYY-MM-DDTHH:mm:ss",Y={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return U.replace(f,function(H,V){return V||String(Y[H])})},M.as=function(B){return this.$ms/p[N(B)]},M.get=function(B){var U=this.$ms,Y=N(B);return Y==="milliseconds"?U%=1e3:U=Y==="weeks"?S(U/p[Y]):this.$d[Y],U||0},M.add=function(B,U,Y){var H;return H=U?B*p[N(U)]:b(B)?B.$ms:A(B,this).$ms,A(this.$ms+H*(Y?-1:1),this)},M.subtract=function(B,U){return this.add(B,U,!0)},M.locale=function(B){var U=this.clone();return U.$l=B,U},M.clone=function(){return A(this.$ms,this)},M.humanize=function(B){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!B)},M.valueOf=function(){return this.asMilliseconds()},M.milliseconds=function(){return this.get("milliseconds")},M.asMilliseconds=function(){return this.as("milliseconds")},M.seconds=function(){return this.get("seconds")},M.asSeconds=function(){return this.as("seconds")},M.minutes=function(){return this.get("minutes")},M.asMinutes=function(){return this.as("minutes")},M.hours=function(){return this.get("hours")},M.asHours=function(){return this.as("hours")},M.days=function(){return this.get("days")},M.asDays=function(){return this.as("days")},M.weeks=function(){return this.get("weeks")},M.asWeeks=function(){return this.as("weeks")},M.months=function(){return this.get("months")},M.asMonths=function(){return this.as("months")},M.years=function(){return this.get("years")},M.asYears=function(){return this.as("years")},I}(),E=function(I,M,B){return I.add(M.years()*B,"y").add(M.months()*B,"M").add(M.days()*B,"d").add(M.hours()*B,"h").add(M.minutes()*B,"m").add(M.seconds()*B,"s").add(M.milliseconds()*B,"ms")};return function(I,M,B){r=B,n=B().$utils(),B.duration=function(H,V){var j=B.locale();return A(H,{$l:j},V)},B.isDuration=b;var U=M.prototype.add,Y=M.prototype.subtract;M.prototype.add=function(H,V){return b(H)?E(this,H,1):U.bind(this)(H,V)},M.prototype.subtract=function(H,V){return b(H)?E(this,H,-1):Y.bind(this)(H,V)}}})}(td)),td.exports}var Hx=Gx();const $x=$d(Hx);var nd={exports:{}},Wx=nd.exports,sh;function Yx(){return sh||(sh=1,function(e,t){(function(r,n){e.exports=n()})(Wx,function(){var r="day";return function(n,i,l){var u=function(g){return g.add(4-g.isoWeekday(),r)},d=i.prototype;d.isoWeekYear=function(){return u(this).year()},d.isoWeek=function(g){if(!this.$utils().u(g))return this.add(7*(g-this.isoWeek()),r);var m,h,p,b,A=u(this),N=(m=this.isoWeekYear(),h=this.$u,p=(h?l.utc:l)().year(m).startOf("year"),b=4-p.isoWeekday(),p.isoWeekday()>4&&(b+=7),p.add(b,r));return A.diff(N,"week")+1},d.isoWeekday=function(g){return this.$utils().u(g)?this.day()||7:this.day(this.day()%7?g:g-7)};var f=d.startOf;d.startOf=function(g,m){var h=this.$utils(),p=!!h.u(m)||m;return h.p(g)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):f.bind(this)(g,m)}}})}(nd)),nd.exports}var zx=Yx();const Xx=$d(zx);var rd={exports:{}},Zx=rd.exports,lh;function Jx(){return lh||(lh=1,function(e,t){(function(r,n){e.exports=n()})(Zx,function(){var r="minute",n=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(l,u,d){var f=u.prototype;d.utc=function(N){var y={date:N,utc:!0,args:arguments};return new u(y)},f.utc=function(N){var y=d(this.toDate(),{locale:this.$L,utc:!0});return N?y.add(this.utcOffset(),r):y},f.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var g=f.parse;f.parse=function(N){N.utc&&(this.$u=!0),this.$utils().u(N.$offset)||(this.$offset=N.$offset),g.call(this,N)};var m=f.init;f.init=function(){if(this.$u){var N=this.$d;this.$y=N.getUTCFullYear(),this.$M=N.getUTCMonth(),this.$D=N.getUTCDate(),this.$W=N.getUTCDay(),this.$H=N.getUTCHours(),this.$m=N.getUTCMinutes(),this.$s=N.getUTCSeconds(),this.$ms=N.getUTCMilliseconds()}else m.call(this)};var h=f.utcOffset;f.utcOffset=function(N,y){var S=this.$utils().u;if(S(N))return this.$u?0:S(this.$offset)?h.call(this):this.$offset;if(typeof N=="string"&&(N=function(E){E===void 0&&(E="");var I=E.match(n);if(!I)return null;var M=(""+I[0]).match(i)||["-",0,0],B=M[0],U=60*+M[1]+ +M[2];return U===0?0:B==="+"?U:-U}(N),N===null))return this;var R=Math.abs(N)<=16?60*N:N,w=this;if(y)return w.$offset=R,w.$u=N===0,w;if(N!==0){var D=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(w=this.local().add(R+D,r)).$offset=R,w.$x.$localOffset=D}else w=this.utc();return w};var p=f.format;f.format=function(N){var y=N||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,y)},f.valueOf=function(){var N=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*N},f.isUTC=function(){return!!this.$u},f.toISOString=function(){return this.toDate().toISOString()},f.toString=function(){return this.toDate().toUTCString()};var b=f.toDate;f.toDate=function(N){return N==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():b.call(this)};var A=f.diff;f.diff=function(N,y,S){if(N&&this.$u===N.$u)return A.call(this,N,y,S);var R=this.local(),w=d(N).local();return A.call(R,w,y,S)}}})}(rd)),rd.exports}var Qx=Jx();const eM=$d(Qx),tM=Vv(),Jl=e=>Ux({locale:"nb-NO",messages:e},tM),Ql={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Jl(Ql);var ad={exports:{}},nM=ad.exports,oh;function rM(){return oh||(oh=1,function(e,t){(function(r,n){e.exports=n(dt)})(nM,function(r){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var i=n(r),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return i.default.locale(l,null,!0),l})}(ad)),ad.exports}rM();dt.extend(eM);dt.extend(Xx);dt.extend($x);Jl(Ql);Jl(Ql);var uh={exports:{}},Li={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function aM(){if(dh)return Li;dh=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,i,l){var u=null;if(l!==void 0&&(u=""+l),i.key!==void 0&&(u=""+i.key),"key"in i){l={};for(var d in i)d!=="key"&&(l[d]=i[d])}else l=i;return i=l.ref,{$$typeof:e,type:n,key:u,ref:i!==void 0?i:null,props:l}}return Li.Fragment=t,Li.jsx=r,Li.jsxs=r,Li}var ch;function iM(){return ch||(ch=1,uh.exports=aM()),uh.exports}iM();Jl(Ql);T.createContext({});var id={exports:{}},sM=id.exports,fh;function lM(){return fh||(fh=1,function(e,t){(function(r,n){e.exports=n()})(sM,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,l=/\d\d/,u=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,f={},g=function(y){return(y=+y)+(y>68?1900:2e3)},m=function(y){return function(S){this[y]=+S}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(S){if(!S||S==="Z")return 0;var R=S.match(/([+-]|\d\d)/g),w=60*R[1]+(+R[2]||0);return w===0?0:R[0]==="+"?-w:w}(y)}],p=function(y){var S=f[y];return S&&(S.indexOf?S:S.s.concat(S.f))},b=function(y,S){var R,w=f.meridiem;if(w){for(var D=1;D<=24;D+=1)if(y.indexOf(w(D,0,S))>-1){R=D>12;break}}else R=y===(S?"pm":"PM");return R},A={A:[d,function(y){this.afternoon=b(y,!1)}],a:[d,function(y){this.afternoon=b(y,!0)}],Q:[i,function(y){this.month=3*(y-1)+1}],S:[i,function(y){this.milliseconds=100*+y}],SS:[l,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[u,m("seconds")],ss:[u,m("seconds")],m:[u,m("minutes")],mm:[u,m("minutes")],H:[u,m("hours")],h:[u,m("hours")],HH:[u,m("hours")],hh:[u,m("hours")],D:[u,m("day")],DD:[l,m("day")],Do:[d,function(y){var S=f.ordinal,R=y.match(/\d+/);if(this.day=R[0],S)for(var w=1;w<=31;w+=1)S(w).replace(/\[|\]/g,"")===y&&(this.day=w)}],w:[u,m("week")],ww:[l,m("week")],M:[u,m("month")],MM:[l,m("month")],MMM:[d,function(y){var S=p("months"),R=(p("monthsShort")||S.map(function(w){return w.slice(0,3)})).indexOf(y)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[d,function(y){var S=p("months").indexOf(y)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(y){this.year=g(y)}],YYYY:[/\d{4}/,m("year")],Z:h,ZZ:h};function N(y){var S,R;S=y,R=f&&f.formats;for(var w=(y=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,H,V){var j=V&&V.toUpperCase();return H||R[V]||r[V]||R[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Z,te,ne){return te||ne.slice(1)})})).match(n),D=w.length,E=0;E<D;E+=1){var I=w[E],M=A[I],B=M&&M[0],U=M&&M[1];w[E]=U?{regex:B,parser:U}:I.replace(/^\[|\]$/g,"")}return function(Y){for(var H={},V=0,j=0;V<D;V+=1){var Z=w[V];if(typeof Z=="string")j+=Z.length;else{var te=Z.regex,ne=Z.parser,oe=Y.slice(j),Q=te.exec(oe)[0];ne.call(H,Q),Y=Y.replace(Q,"")}}return function(le){var _e=le.afternoon;if(_e!==void 0){var pe=le.hours;_e?pe<12&&(le.hours+=12):pe===12&&(le.hours=0),delete le.afternoon}}(H),H}}return function(y,S,R){R.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(g=y.parseTwoDigitYear);var w=S.prototype,D=w.parse;w.parse=function(E){var I=E.date,M=E.utc,B=E.args;this.$u=M;var U=B[1];if(typeof U=="string"){var Y=B[2]===!0,H=B[3]===!0,V=Y||H,j=B[2];H&&(j=B[2]),f=this.$locale(),!Y&&j&&(f=R.Ls[j]),this.$d=function(oe,Q,le,_e){try{if(["x","X"].indexOf(Q)>-1)return new Date((Q==="X"?1e3:1)*oe);var pe=N(Q)(oe),Qe=pe.year,ot=pe.month,dn=pe.day,ve=pe.hours,be=pe.minutes,et=pe.seconds,tt=pe.milliseconds,_t=pe.zone,cn=pe.week,jt=new Date,xt=dn||(Qe||ot?1:jt.getDate()),Jt=Qe||jt.getFullYear(),We=0;Qe&&!ot||(We=ot>0?ot-1:jt.getMonth());var Et,fn=ve||0,ft=be||0,mn=et||0,Qt=tt||0;return _t?new Date(Date.UTC(Jt,We,xt,fn,ft,mn,Qt+60*_t.offset*1e3)):le?new Date(Date.UTC(Jt,We,xt,fn,ft,mn,Qt)):(Et=new Date(Jt,We,xt,fn,ft,mn,Qt),cn&&(Et=_e(Et).week(cn).toDate()),Et)}catch{return new Date("")}}(I,U,M,R),this.init(),j&&j!==!0&&(this.$L=this.locale(j).$L),V&&I!=this.format(U)&&(this.$d=new Date("")),f={}}else if(U instanceof Array)for(var Z=U.length,te=1;te<=Z;te+=1){B[1]=U[te-1];var ne=R.apply(this,B);if(ne.isValid()){this.$d=ne.$d,this.$L=ne.$L,this.init();break}te===Z&&(this.$d=new Date(""))}else D.call(this,E)}}})}(id)),id.exports}var oM=lM();const uM=iF(oM);dt.extend(uM);Zn(ss);const dM="_gradering_1g0xl_1",cM="_alert_1g0xl_5",mh={gradering:dM,alert:cM},fM=(e,t,r)=>e.map(n=>{const{arbeidType:i,arbeidsgiverReferanse:l}=n,u=l?r[l]:void 0;let d="";return i&&i!==un.ORDINÆRT_ARBEID?d=t.UttakArbeidType.find(f=>f.kode===i)?.navn??"":u&&(d=OT(u)),G.jsx("option",{value:`${l}-${i}`,children:d},AT())}),$v=({valgtPeriode:e,arbeidsgiverOpplysningerPerId:t,faktaArbeidsforhold:r,readOnly:n,alleKodeverk:i})=>{const l=e?.arbeidsforhold?.arbeidsgiverReferanse,u=l&&l!=="null"&&!t[l],[d,f]=T.useState(!!e?.arbeidstidsprosent),[g,m]=T.useState(!!e?.samtidigUttaksprosent),h=()=>f(N=>!N),p=()=>m(N=>!N),{unregister:b,control:A}=pr();return T.useEffect(()=>{d||(b("arbeidstidsprosent"),b("arbeidsgiverId"))},[d]),T.useEffect(()=>{g||b("samtidigUttaksprosent")},[g]),G.jsxs(G.Fragment,{children:[G.jsxs(Gn,{gap:"space-8",children:[G.jsx(qu,{name:"harGradering",control:A,label:G.jsx(Le,{id:"UttakFaktaDetailForm.HarGradering"}),readOnly:n,onChange:h}),G.jsx(qu,{name:"harSamtidigUttaksprosent",control:A,label:G.jsx(Le,{id:"UttakFaktaDetailForm.HarSamtidigUttaksprosent"}),readOnly:n,onChange:p})]}),!n&&u&&G.jsx("div",{className:mh.alert,children:G.jsx(zh,{variant:"info",children:G.jsx(Le,{id:"UttakFaktaDetailForm.UkjentArbeidsgiver",values:{aRef:l}})})}),(d||g)&&G.jsxs(Gn,{gap:"space-24",children:[d&&r&&G.jsxs(G.Fragment,{children:[G.jsx(xg,{name:"arbeidstidsprosent",control:A,label:G.jsx(Le,{id:"UttakFaktaDetailForm.GraderingProsent"}),forceTwoDecimalDigits:!0,validate:[qn],className:mh.gradering,readOnly:n}),G.jsx(Xa,{name:"arbeidsgiverId",control:A,label:G.jsx(Le,{id:"UttakFaktaDetailForm.Arbeidsgiver"}),validate:[qn],selectValues:fM(r,i,t),readOnly:n})]}),g&&G.jsx(xg,{name:"samtidigUttaksprosent",control:A,label:G.jsx(Le,{id:"UttakFaktaDetailForm.SamtidigUttaksprosent"}),validate:[qn],forceTwoDecimalDigits:!0,readOnly:n})]})]})};$v.__docgenInfo={description:"",methods:[],displayName:"GraderingOgSamtidigUttakPanel",props:{valgtPeriode:{required:!1,tsType:{name:"intersection",raw:`KontrollerFaktaPeriode &
Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:"UttakPeriodeType | null",elements:[{name:"UttakPeriodeType"},{name:"null"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:"UtsettelseÅrsak | null",elements:[{name:"UtsettelseÅrsak"},{name:"null"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"OppholdArsakType | null",elements:[{name:"OppholdArsakType"},{name:"null"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"arbeidsforhold",value:{name:"union",raw:"FaktaArbeidsforhold | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`},{name:"null"}],required:!1}},{key:"samtidigUttaksprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"periodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}`,signature:{properties:[{key:"originalFom",value:{name:"string",required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'START_FOM' | 'INGEN_PERIODER' | 'MANGLENDE_ARBEIDSFORHOLD'",elements:[{name:"literal",value:"'START_FOM'"},{name:"literal",value:"'INGEN_PERIODER'"},{name:"literal",value:"'MANGLENDE_ARBEIDSFORHOLD'"}],required:!1}}]}}],raw:`Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},faktaArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`}],raw:"FaktaArbeidsforhold[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const mM="_marginBtn_1jtfq_1",gM="_select_1jtfq_6",hM="_selectArsak_1jtfq_10",za={marginBtn:mM,select:gM,selectArsak:hM};var Ja=(e=>(e.UTTAK="UTTAK",e.OVERFØRING="OVERFØRING",e.UTSETTELSE="UTSETTELSE",e.OPPHOLD="OPPHOLD",e))(Ja||{});const gh={UTTAK:"UttakFaktaDetailForm.Uttak",OVERFØRING:"UttakFaktaDetailForm.Overføring",UTSETTELSE:"UttakFaktaDetailForm.Utsettelse",OPPHOLD:"UttakFaktaDetailForm.Opphold"},Wv=e=>e.utsettelseÅrsak?"UTSETTELSE":e.overføringÅrsak?"OVERFØRING":e.oppholdÅrsak?"OPPHOLD":"UTTAK",pM=(e,t)=>{const r=Wv(e),n=e.arbeidsforhold?.arbeidsgiverReferanse!=="null"?e.arbeidsforhold?.arbeidsgiverReferanse:void 0,i=n?t[n]:void 0;let l;return(n&&i||e.arbeidsforhold&&!n)&&(l=`${e.arbeidsforhold?.arbeidsgiverReferanse}-${e.arbeidsforhold?.arbeidType}`),{...e,arsakstype:r,arbeidsgiverId:l,harGradering:!!e.arbeidstidsprosent,harSamtidigUttaksprosent:!!e.samtidigUttaksprosent}},vM=e=>({...RT(e,["arsakstype","arbeidsgiverId","harGradering","harSamtidigUttaksprosent"]),arbeidsforhold:e.arbeidsgiverId?{arbeidsgiverReferanse:e.arbeidsgiverId.split("-")[0]==="null"?void 0:e.arbeidsgiverId.split("-")[0],arbeidType:e.arbeidsgiverId.split("-")[1]}:void 0,periodeKilde:qt.SAKSBEHANDLER,aksjonspunktType:void 0,arbeidstidsprosent:e.arbeidstidsprosent,samtidigUttaksprosent:e.samtidigUttaksprosent}),yM=(e,t)=>r=>dt(r).isBefore(t("fom"))?e.formatMessage({id:"UttakFaktaDetailForm.TomForFom"}):null,sd=({fagsak:e,valgtPeriode:t,arbeidsgiverOpplysningerPerId:r,faktaArbeidsforhold:n,slettPeriode:i,avbrytEditering:l,oppdaterPeriode:u,readOnly:d,alleKodeverk:f,defaultMonth:g})=>{const m=Il(),h=t?pM(t,r):void 0,p=hv({defaultValues:h}),[b,A]=T.useState(!1),N=()=>{A(!1),i&&i()},y=f.UttakPeriodeType.toSorted((V,j)=>V.navn.localeCompare(j.navn)),S=f.OverføringÅrsak.toSorted((V,j)=>V.navn.localeCompare(j.navn)),R=f.UtsettelseÅrsak.toSorted((V,j)=>V.navn.localeCompare(j.navn)),w=f.OppholdÅrsak.toSorted((V,j)=>V.navn.localeCompare(j.navn)),D=f.MorsAktivitet.toSorted((V,j)=>V.navn.localeCompare(j.navn)),E=p.watch("arsakstype"),I=p.watch("flerbarnsdager"),M=p.watch("uttakPeriodeType"),B=p.watch("begrunnelse");T.useEffect(()=>{h?.arsakstype!==E&&(p.unregister("uttakPeriodeType"),p.unregister("overføringÅrsak"),p.unregister("oppholdÅrsak"),p.unregister("utsettelseÅrsak"),p.unregister("arbeidstidsprosent"),p.unregister("utsettelseÅrsak"),p.unregister("arbeidsgiverId"),p.unregister("samtidigUttaksprosent"),p.unregister("morsAktivitet"),p.unregister("flerbarnsdager"))},[E]);const U=V=>u(vM(V)),Y=E==="UTTAK"&&(M===Ut.FELLESPERIODE||M===Ut.FORELDREPENGER),H=e.relasjonsRolleType!==ud.MOR&&(Y||E==="UTSETTELSE");return G.jsxs(G.Fragment,{children:[b&&G.jsx(T2,{text:m.formatMessage({id:"UttakFaktaDetailForm.VilDuSlette"}),submit:N,cancel:()=>A(!1),showModal:!0}),G.jsx(vv,{formMethods:p,onSubmit:U,children:G.jsxs(Ea,{gap:"space-16",children:[G.jsxs(Gn,{gap:"space-8",align:"end",children:[G.jsx(Fg,{name:"fom",control:p.control,label:G.jsx(Le,{id:"UttakFaktaDetailForm.Fom"}),validate:[qn,Em],isReadOnly:d,defaultMonth:g}),G.jsx(Fg,{name:"tom",control:p.control,label:G.jsx(Le,{id:"UttakFaktaDetailForm.Tom"}),validate:[qn,Em,yM(m,p.getValues)],isReadOnly:d,defaultMonth:g}),i&&!d&&G.jsx(Gt,{size:"small",variant:"tertiary",type:"button",icon:G.jsx(Tw,{}),onClick:()=>A(!0),children:G.jsx(Le,{id:"UttakFaktaDetailForm.Slett"})})]}),G.jsxs(Gn,{gap:"space-8",children:[d&&G.jsxs("div",{children:[G.jsx(zn,{size:"small",children:G.jsx(Le,{id:"UttakFaktaDetailForm.Periodetype"})}),G.jsx(Rt,{size:"small",children:G.jsx(Le,{id:gh[E]})})]}),!d&&G.jsx(K2,{name:"arsakstype",control:p.control,label:G.jsx(Le,{id:"UttakFaktaDetailForm.Periodetype"}),validate:[qn],isReadOnly:d,children:G.jsx(Gn,{gap:"space-16",children:Object.keys(Ja).map(V=>G.jsx(DD,{value:V,size:"small",children:G.jsx(Le,{id:gh[V]})},V))})})]}),(E==="UTTAK"||E==="OVERFØRING")&&G.jsx(Xa,{name:"uttakPeriodeType",control:p.control,label:G.jsx(Le,{id:"UttakFaktaDetailForm.Stonadskonto"}),validate:[qn],className:za.select,selectValues:y.map(V=>G.jsx("option",{value:V.kode,children:V.navn},V.kode)),readOnly:d}),E!=="UTTAK"&&G.jsxs(Gn,{gap:"space-16",children:[E==="UTSETTELSE"&&G.jsx(Xa,{name:"utsettelseÅrsak",control:p.control,label:G.jsx(Le,{id:"UttakFaktaDetailForm.Årsak"}),validate:[qn],className:za.selectArsak,selectValues:R.map(V=>G.jsx("option",{value:V.kode,children:V.navn},V.kode)),readOnly:d}),E==="OVERFØRING"&&G.jsx(Xa,{name:"overføringÅrsak",control:p.control,label:G.jsx(Le,{id:"UttakFaktaDetailForm.Årsak"}),validate:[qn],className:za.selectArsak,selectValues:S.map(V=>G.jsx("option",{value:V.kode,children:V.navn},V.kode)),readOnly:d}),E==="OPPHOLD"&&G.jsx(Xa,{name:"oppholdÅrsak",control:p.control,label:G.jsx(Le,{id:"UttakFaktaDetailForm.Årsak"}),validate:[qn],className:za.selectArsak,selectValues:w.map(V=>G.jsx("option",{value:V.kode,children:V.navn},V.kode)),readOnly:d})]}),E==="UTTAK"&&G.jsx($v,{valgtPeriode:t,arbeidsgiverOpplysningerPerId:r,faktaArbeidsforhold:n,readOnly:d,alleKodeverk:f}),H&&G.jsx(Xa,{name:"morsAktivitet",control:p.control,label:G.jsx(Le,{id:"UttakFaktaDetailForm.MorsAktivitet"}),className:za.select,selectValues:D.map(V=>G.jsx("option",{value:V.kode,children:V.navn},V.kode)),readOnly:d}),E==="UTTAK"&&G.jsxs(G.Fragment,{children:[d&&G.jsxs("div",{children:[G.jsx(zn,{size:"small",children:G.jsx(Le,{id:"UttakFaktaDetailForm.HarFlerbarnsdager"})}),G.jsx(Rt,{size:"small",children:G.jsx(Le,{id:I===!0?"UttakFaktaDetailForm.Ja":"UttakFaktaDetailForm.Nei"})})]}),!d&&G.jsx(qu,{name:"flerbarnsdager",control:p.control,label:G.jsx(Le,{id:"UttakFaktaDetailForm.Flerbarnsdager"})})]}),B&&G.jsxs("div",{children:[G.jsx(zn,{size:"small",children:G.jsx(Le,{id:"UttakFaktaDetailForm.Begrunnelse"})}),G.jsx(Rt,{size:"small",children:B})]}),!d&&G.jsxs(Gn,{gap:"space-8",className:za.marginBtn,children:[G.jsx(Gt,{size:"small",variant:"secondary",loading:!1,disabled:!p.formState.isDirty||d,children:G.jsx(Le,{id:"UttakFaktaDetailForm.Oppdater"})}),G.jsx(Gt,{size:"small",variant:"tertiary",onClick:l,disabled:d,type:"button",children:G.jsx(Le,{id:"UttakFaktaDetailForm.Avbryt"})})]})]})})]})};sd.__docgenInfo={description:"",methods:[],displayName:"UttakFaktaDetailForm",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"status",value:{name:"FagsakStatus",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"BehandlingType",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: RelasjonsRolleType;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
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
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"SkjermlenkeType | null",elements:[{name:"SkjermlenkeType"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},valgtPeriode:{required:!1,tsType:{name:"intersection",raw:`KontrollerFaktaPeriode &
Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:"UttakPeriodeType | null",elements:[{name:"UttakPeriodeType"},{name:"null"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:"UtsettelseÅrsak | null",elements:[{name:"UtsettelseÅrsak"},{name:"null"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"OppholdArsakType | null",elements:[{name:"OppholdArsakType"},{name:"null"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"arbeidsforhold",value:{name:"union",raw:"FaktaArbeidsforhold | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`},{name:"null"}],required:!1}},{key:"samtidigUttaksprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"periodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}`,signature:{properties:[{key:"originalFom",value:{name:"string",required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'START_FOM' | 'INGEN_PERIODER' | 'MANGLENDE_ARBEIDSFORHOLD'",elements:[{name:"literal",value:"'START_FOM'"},{name:"literal",value:"'INGEN_PERIODER'"},{name:"literal",value:"'MANGLENDE_ARBEIDSFORHOLD'"}],required:!1}}]}}],raw:`Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},faktaArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`}],raw:"FaktaArbeidsforhold[]"},description:""},slettPeriode:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},avbrytEditering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(uttaksperiode: KontrollerFaktaPeriodeMedApMarkering) => void",signature:{arguments:[{type:{name:"intersection",raw:`KontrollerFaktaPeriode &
Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:"UttakPeriodeType | null",elements:[{name:"UttakPeriodeType"},{name:"null"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:"UtsettelseÅrsak | null",elements:[{name:"UtsettelseÅrsak"},{name:"null"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"OppholdArsakType | null",elements:[{name:"OppholdArsakType"},{name:"null"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"arbeidsforhold",value:{name:"union",raw:"FaktaArbeidsforhold | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`},{name:"null"}],required:!1}},{key:"samtidigUttaksprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"periodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}`,signature:{properties:[{key:"originalFom",value:{name:"string",required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'START_FOM' | 'INGEN_PERIODER' | 'MANGLENDE_ARBEIDSFORHOLD'",elements:[{name:"literal",value:"'START_FOM'"},{name:"literal",value:"'INGEN_PERIODER'"},{name:"literal",value:"'MANGLENDE_ARBEIDSFORHOLD'"}],required:!1}}]}}],raw:`Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`}]},name:"uttaksperiode"}],return:{name:"void"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:""}}};const kM="_panel_dvi2f_1",bM="_panelOpen_dvi2f_6",_M="_panelOpenAp_dvi2f_15",EM="_headerRow_dvi2f_25",TM="_row_dvi2f_29",wM="_isOpen_dvi2f_33",OM="_isApOpen_dvi2f_37",Ci={panel:kM,panelOpen:bM,panelOpenAp:_M,headerRow:EM,row:TM,isOpen:wM,isApOpen:OM},AM=bv.bind(Ci),RM=(e,t,r)=>{const n=Wv(t);if(n===Ja.UTTAK||n===Ja.OVERFØRING){const i=e.UttakPeriodeType.find(l=>l.kode===t.uttakPeriodeType)?.navn;return t.arbeidstidsprosent&&t.arbeidstidsprosent>0?`${i} - Gradert ${t.arbeidstidsprosent}%`:i}if(n===Ja.OPPHOLD){const i=e.OppholdÅrsak.find(l=>l.kode===t.oppholdÅrsak)?.navn;return r.formatMessage({id:"UttakFaktaTabel.Opphold"},{arsak:i?.replace("har uttak av","")})}if(n===Ja.UTSETTELSE){const i=e.UtsettelseÅrsak.find(l=>l.kode===t.utsettelseÅrsak)?.navn;return r.formatMessage({id:"UttakFaktaTabel.Utsettelse"},{arsak:i})}return""},Yv=({fagsak:e,valgteFomDatoer:t,setValgteFomDatoer:r,uttakKontrollerFaktaPerioder:n,arbeidsgiverOpplysningerPerId:i,faktaArbeidsforhold:l,oppdaterUttakPerioder:u,alleKodeverk:d,readOnly:f,setDirty:g,erRedigerbart:m,visNyPeriode:h,settVisNyPeriode:p})=>{const b=Il(),A=(R,w=!1)=>{if(R&&t.includes(R))r(D=>D.filter(E=>E!==R));else if(w){const D=R?[R]:[];r(()=>D)}else R&&r(D=>D.concat(R))},N=R=>{const w=n.filter(D=>D.originalFom!==R.originalFom).concat(R).sort((D,E)=>dt(D.fom).diff(dt(E.fom)));g(!0),u(w),A(void 0,!0)},y=R=>{const w=n.filter(D=>D.originalFom!==R);u(w),g(!0)},S=n.length>0?new Date(n[n.length-1].tom):void 0;return G.jsxs(Ea,{gap:"space-24",children:[G.jsxs(ht,{children:[G.jsx(ht.Header,{children:G.jsxs(ht.Row,{className:Ci.headerRow,children:[G.jsx(ht.HeaderCell,{scope:"col",children:G.jsx(Le,{id:"UttakFaktaTable.Periode"})}),G.jsx(ht.HeaderCell,{scope:"col",children:G.jsx(Le,{id:"UttakFaktaTable.AntallDager"})}),G.jsx(ht.HeaderCell,{scope:"col",children:G.jsx(Le,{id:"UttakFaktaTable.Type"})}),G.jsx(ht.HeaderCell,{scope:"col",children:G.jsx(Le,{id:"UttakFaktaTable.Kilde"})}),G.jsx(ht.HeaderCell,{scope:"col"})]})}),G.jsx(ht.Body,{children:n.map(R=>{const w=ST(R.fom,R.tom);return G.jsxs(ht.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",open:t.includes(R.fom),onOpenChange:()=>A(R.fom),className:AM("row",{isOpen:t.includes(R.fom),isApOpen:!!R.aksjonspunktType}),contentGutter:"none",content:t.includes(R.fom)&&G.jsx("div",{className:R.aksjonspunktType?Ci.panelOpenAp:Ci.panelOpen,children:G.jsx(sd,{fagsak:e,valgtPeriode:R,readOnly:f||!m,oppdaterPeriode:N,slettPeriode:()=>y(R.originalFom),avbrytEditering:()=>A(R.fom),alleKodeverk:d,arbeidsgiverOpplysningerPerId:i,faktaArbeidsforhold:l})}),children:[G.jsx(ht.DataCell,{children:`${Gi(R.fom)} - ${Gi(R.tom)}`}),G.jsx(ht.DataCell,{children:w.formattedString}),G.jsx(ht.DataCell,{children:RM(d,R,b)}),G.jsx(ht.DataCell,{children:d.FordelingPeriodeKilde.find(D=>D.kode===R.periodeKilde)?.navn})]},R.fom+R.tom)})})]}),m&&G.jsxs(G.Fragment,{children:[!h&&G.jsx("div",{children:G.jsx(Gt,{size:"small",variant:"tertiary",type:"button",icon:G.jsx(vw,{}),onClick:()=>{A(void 0,!0),p(!0)},children:G.jsx(Le,{id:"UttakFaktaForm.LeggTilPeriode"})})}),h&&G.jsxs(Ea,{gap:"space-16",className:Ci.panel,children:[G.jsx(Xi,{size:"small",level:"3",children:G.jsx(Le,{id:"UttakFaktaForm.NyPeriode"})}),G.jsx(sd,{fagsak:e,avbrytEditering:()=>p(!1),readOnly:!1,alleKodeverk:d,oppdaterPeriode:R=>{const w=n.concat(R).sort((D,E)=>dt(D.fom).diff(dt(E.fom)));g(!0),u(w),p(!1)},arbeidsgiverOpplysningerPerId:i,faktaArbeidsforhold:l,defaultMonth:S})]})]})]})};Yv.__docgenInfo={description:"",methods:[],displayName:"UttakFaktaTable",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"status",value:{name:"FagsakStatus",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"BehandlingType",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: RelasjonsRolleType;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
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
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"SkjermlenkeType | null",elements:[{name:"SkjermlenkeType"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},valgteFomDatoer:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},setValgteFomDatoer:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<string[]>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<string[]>",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}]},description:""},uttakKontrollerFaktaPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`KontrollerFaktaPeriode &
Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:"UttakPeriodeType | null",elements:[{name:"UttakPeriodeType"},{name:"null"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:"UtsettelseÅrsak | null",elements:[{name:"UtsettelseÅrsak"},{name:"null"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"OppholdArsakType | null",elements:[{name:"OppholdArsakType"},{name:"null"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"arbeidsforhold",value:{name:"union",raw:"FaktaArbeidsforhold | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`},{name:"null"}],required:!1}},{key:"samtidigUttaksprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"periodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}`,signature:{properties:[{key:"originalFom",value:{name:"string",required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'START_FOM' | 'INGEN_PERIODER' | 'MANGLENDE_ARBEIDSFORHOLD'",elements:[{name:"literal",value:"'START_FOM'"},{name:"literal",value:"'INGEN_PERIODER'"},{name:"literal",value:"'MANGLENDE_ARBEIDSFORHOLD'"}],required:!1}}]}}],raw:`Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`}]}],raw:"KontrollerFaktaPeriodeMedApMarkering[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},faktaArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`}],raw:"FaktaArbeidsforhold[]"},description:""},oppdaterUttakPerioder:{required:!0,tsType:{name:"signature",type:"function",raw:"(perioder: KontrollerFaktaPeriodeMedApMarkering[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`KontrollerFaktaPeriode &
Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:"UttakPeriodeType | null",elements:[{name:"UttakPeriodeType"},{name:"null"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:"UtsettelseÅrsak | null",elements:[{name:"UtsettelseÅrsak"},{name:"null"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"OppholdArsakType | null",elements:[{name:"OppholdArsakType"},{name:"null"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"arbeidsforhold",value:{name:"union",raw:"FaktaArbeidsforhold | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`},{name:"null"}],required:!1}},{key:"samtidigUttaksprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"periodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}`,signature:{properties:[{key:"originalFom",value:{name:"string",required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'START_FOM' | 'INGEN_PERIODER' | 'MANGLENDE_ARBEIDSFORHOLD'",elements:[{name:"literal",value:"'START_FOM'"},{name:"literal",value:"'INGEN_PERIODER'"},{name:"literal",value:"'MANGLENDE_ARBEIDSFORHOLD'"}],required:!1}}]}}],raw:`Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`}]}],raw:"KontrollerFaktaPeriodeMedApMarkering[]"},name:"perioder"}],return:{name:"void"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},setDirty:{required:!0,tsType:{name:"signature",type:"function",raw:"(isDirty: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isDirty"}],return:{name:"void"}}},description:""},erRedigerbart:{required:!0,tsType:{name:"boolean"},description:""},visNyPeriode:{required:!0,tsType:{name:"boolean"},description:""},settVisNyPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(vis: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"vis"}],return:{name:"void"}}},description:""}}};const SM=(e,t)=>e.filter(r=>r.status===In.OPPRETTET).map(r=>{const n=t?.førsteUttaksdato??void 0,i={value:Gi(n)};return G.jsx(Le,{id:`UttakFaktaForm.Aksjonspunkt.${r.definisjon}`,values:i},`UttakFaktaForm.Aksjonspunkt.${r.definisjon}`)}),NM=(e,t,r)=>e.map(n=>t.some(i=>(i.definisjon===vt.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE||i.definisjon===vt.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE)&&i.status===In.OPPRETTET)&&n.arbeidsforhold?.arbeidsgiverReferanse&&!r[n.arbeidsforhold?.arbeidsgiverReferanse]?{...n,originalFom:n.fom,aksjonspunktType:"MANGLENDE_ARBEIDSFORHOLD"}:{...n,originalFom:n.fom}),PM=e=>!(e.utsettelseÅrsak??e.oppholdÅrsak),DM=(e,t,r,n,i)=>{if(e.filter(l=>t||PM(l)).some(l=>dt(l.fom).isBefore(n)))return r.formatMessage({id:i?"UttakFaktaDetailForm.ErFørFørsteUttaktsdato":"UttakFaktaDetailForm.ErFørFødselsdato"},{dato:Gi(n)})},FM=(e,t,r,n,i,l)=>{const u=t.map(({fom:b,tom:A})=>[b,A]);if(u.length>0?!!FT(u):void 0)return l.formatMessage({id:"UttakFaktaForm.OverlappendePerioder"});const f=e.familiehendelse?.hendelseType===bh.FODSEL?e.familiehendelse.hendelseDato:void 0,g=r&&!!f&&dt(f).isBefore(i),m=g?f:i;if(t.every(b=>!dt(b.fom).isSame(i)))return l.formatMessage({id:"UttakFaktaDetailForm.ErIkkeLikForsteUttaksdato"},{dato:Gi(i)});const h=DM(t,r,l,m,g);if(h)return h;const p=n.some(b=>b.definisjon===vt.FAKTA_UTTAK_INGEN_PERIODER_KODE);return t.every(b=>b.aksjonspunktType===void 0)&&(!p||p&&t.length>0)?null:""},zv=({uttakKontrollerFaktaPerioder:e,arbeidsgiverOpplysningerPerId:t,faktaArbeidsforhold:r,ytelsefordeling:n,submittable:i,kanOverstyre:l})=>{const u=Il(),{alleKodeverk:d,submitCallback:f,fagsak:g,aksjonspunkterForPanel:m,isReadOnly:h}=NT(),p=[...e].sort((le,_e)=>dt(le.fom).diff(dt(_e.fom))),b=NM(p,m,t),{mellomlagretFormData:A,setMellomlagretFormData:N}=PT(),[y,S]=T.useState(A?.uttakPerioder??b),[R,w]=T.useState([]),D=hv({defaultValues:{begrunnelse:A?.begrunnelse??m[0]?.begrunnelse??""}});T.useEffect(()=>()=>{N({uttakPerioder:y,begrunnelse:D.getValues("begrunnelse")})},[y]);const E=m.filter(le=>le.definisjon!==vt.OVERSTYR_FAKTA_UTTAK),I=le=>{const _e=[{kode:Lg(vt.OVERSTYR_FAKTA_UTTAK,vt.OVERSTYR_FAKTA_UTTAK),perioder:y,begrunnelse:le}],pe=E.map(Qe=>({kode:Lg(Qe.definisjon,vt.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,vt.FAKTA_UTTAK_INGEN_PERIODER_KODE,vt.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,vt.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE),perioder:y,begrunnelse:le}));return f(pe.length>0?pe:_e)},M=D.watch("begrunnelse"),[B,U]=T.useState(!1);let Y=null;if(B||D.formState.isDirty){const le=g.relasjonsRolleType===ud.MOR;Y=FM(g,y,le,m,n.førsteUttaksdato,u)}const[H,V]=T.useState(!1),j=i&&Y===null&&!!M&&!H&&R.length===0,[Z,te]=T.useState(!1),ne=m.some(le=>DT(le.status)),oe=SM(m,n),Q=!h&&(E.length>0||Z);return G.jsxs(Ea,{gap:"space-32",children:[G.jsxs(Gn,{gap:"space-16",children:[G.jsx(Xi,{size:"small",level:"2",children:G.jsx(Le,{id:"UttakFaktaForm.FaktaUttak"})}),l&&!h&&E.length===0&&G.jsx(f2,{onClick:()=>te(!0),erOverstyrt:Z})]}),ne&&G.jsx(d2,{children:oe}),Y&&G.jsx(Vu,{children:G.jsx(Vu.Item,{children:Y})}),G.jsx(Yv,{fagsak:g,valgteFomDatoer:R,setValgteFomDatoer:w,uttakKontrollerFaktaPerioder:y,oppdaterUttakPerioder:S,alleKodeverk:d,readOnly:h,setDirty:U,erRedigerbart:Q,arbeidsgiverOpplysningerPerId:t,faktaArbeidsforhold:r,visNyPeriode:H,settVisNyPeriode:V}),G.jsx(vv,{formMethods:D,onSubmit:le=>I(le.begrunnelse),children:G.jsxs(Ea,{gap:"space-16",children:[G.jsx(Xl,{control:D.control,isSubmittable:!0,isReadOnly:!Q,hasBegrunnelse:!0}),Q&&G.jsx(yv,{isSubmittable:j,isReadOnly:h,isSubmitting:D.formState.isSubmitting,isDirty:B||D.formState.isDirty})]})})]})};zv.__docgenInfo={description:"",methods:[],displayName:"UttakFaktaForm",props:{ytelsefordeling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  overstyrtOmsorg: boolean | null;
  førsteUttaksdato: string;
}`,signature:{properties:[{key:"overstyrtOmsorg",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"førsteUttaksdato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  overstyrtOmsorg: boolean | null;
  førsteUttaksdato: string;
}>`},description:""},uttakKontrollerFaktaPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:"UttakPeriodeType | null",elements:[{name:"UttakPeriodeType"},{name:"null"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:"UtsettelseÅrsak | null",elements:[{name:"UtsettelseÅrsak"},{name:"null"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"OppholdArsakType | null",elements:[{name:"OppholdArsakType"},{name:"null"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"arbeidsforhold",value:{name:"union",raw:"FaktaArbeidsforhold | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`},{name:"null"}],required:!1}},{key:"samtidigUttaksprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"periodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}>`}],raw:"KontrollerFaktaPeriode[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},faktaArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`}],raw:"FaktaArbeidsforhold[]"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},kanOverstyre:{required:!0,tsType:{name:"boolean"},description:""}}};const xM={"UttakFaktaForm.FaktaUttak":"Fakta om uttak","UttakFaktaForm.LeggTilPeriode":"Legg til periode","UttakFaktaForm.Aksjonspunkt.5063":"Gradering av ukjent arbeidsforhold. Vurder gradering","UttakFaktaForm.Aksjonspunkt.5064":"Ingen perioder å vurdere. Vurder om behandlingen er feilopprettet og kan henlegges","UttakFaktaForm.Aksjonspunkt.5065":"Første periode starter ikke på avklart startdato {value}. Legg inn periode fra startdato","UttakFaktaForm.Aksjonspunkt.5066":"Gradering av aktivitet uten beregningsgrunnlag. Vurder gradering","UttakFaktaForm.Aksjonspunkt.5074":"Vurder dokumentasjon","UttakFaktaForm.Aksjonspunkt.6065":"Vurder tidligere overstyring","UttakFaktaForm.NyPeriode":"Ny periode","UttakFaktaForm.OverlappendePerioder":"Det finnes overlappende perioder","UttakFaktaTable.Periode":"Periode","UttakFaktaTable.AntallDager":"Antall dager","UttakFaktaTable.Type":"Type","UttakFaktaTable.Kilde":"Kilde","UttakFaktaTabel.Utsettelse":"Utsettelse - {arsak}","UttakFaktaTabel.Opphold":"Opphold - {arsak}","UttakFaktaDetailForm.Fom":"Periode fra","UttakFaktaDetailForm.Tom":"Periode til","UttakFaktaDetailForm.Periodetype":"Periodetype","UttakFaktaDetailForm.Stonadskonto":"Stønadskonto","UttakFaktaDetailForm.GraderingProsent":"Gradering %","UttakFaktaDetailForm.Oppdater":"Oppdater","UttakFaktaDetailForm.Avbryt":"Avbryt","UttakFaktaDetailForm.Slett":"Slett periode","UttakFaktaDetailForm.VilDuSlette":"Vil du slette periode?","UttakFaktaDetailForm.Uttak":"Uttak","UttakFaktaDetailForm.Overføring":"Overføring","UttakFaktaDetailForm.Utsettelse":"Utsettelse","UttakFaktaDetailForm.Årsak":"Årsak","UttakFaktaDetailForm.MorsAktivitet":"Mors aktivitet","UttakFaktaDetailForm.Flerbarnsdager":"Flerbarnsdager","UttakFaktaDetailForm.SamtidigUttaksprosent":"Samtidig uttaksprosent","UttakFaktaDetailForm.Arbeidsgiver":"Arbeidsgiver","UttakFaktaDetailForm.Opphold":"Opphold","UttakFaktaDetailForm.ErIkkeLikForsteUttaksdato":"En av periodene må ha dato lik første uttaksdato ({dato})","UttakFaktaDetailForm.ErFørFørsteUttaktsdato":"En periode kan ikke starte før første uttaksdato ({dato})","UttakFaktaDetailForm.ErFørFødselsdato":"En periode kan ikke starte før fødselsdato ({dato})","UttakFaktaDetailForm.TomForFom":"Dato kan ikke være før fra","UttakFaktaDetailForm.HarFlerbarnsdager":"Har flerbarnsdager","UttakFaktaDetailForm.Begrunnelse":"Begrunnelse","UttakFaktaDetailForm.Ja":"Ja","UttakFaktaDetailForm.Nei":"Nei","UttakFaktaDetailForm.UkjentArbeidsgiver":"Arbeidsgiver oppgitt for perioden er ukjent. Referanse: {aRef}","UttakFaktaDetailForm.HarGradering":"Gradering","UttakFaktaDetailForm.HarSamtidigUttaksprosent":"Samtidig uttaksprosent"},MM=Zn(xM),ld=e=>G.jsx(od,{value:MM,children:G.jsx(zv,{...e})});ld.__docgenInfo={description:"",methods:[],displayName:"UttakFaktaIndex",props:{ytelsefordeling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  overstyrtOmsorg: boolean | null;
  førsteUttaksdato: string;
}`,signature:{properties:[{key:"overstyrtOmsorg",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"førsteUttaksdato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  overstyrtOmsorg: boolean | null;
  førsteUttaksdato: string;
}>`},description:""},uttakKontrollerFaktaPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:"UttakPeriodeType | null",elements:[{name:"UttakPeriodeType"},{name:"null"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:"UtsettelseÅrsak | null",elements:[{name:"UtsettelseÅrsak"},{name:"null"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"OppholdArsakType | null",elements:[{name:"OppholdArsakType"},{name:"null"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"arbeidsforhold",value:{name:"union",raw:"FaktaArbeidsforhold | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`},{name:"null"}],required:!1}},{key:"samtidigUttaksprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"periodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}>`}],raw:"KontrollerFaktaPeriode[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},faktaArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`}],raw:"FaktaArbeidsforhold[]"},description:""},kanOverstyre:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const IM={910909088:{erPrivatPerson:!1,identifikator:"910909088",referanse:"910909088",navn:"BEDRIFT AS"}},jr={definisjon:vt.OMSORGSOVERTAKELSE,status:In.OPPRETTET,begrunnelse:null,kanLoses:!0,toTrinnsBehandling:!1,toTrinnsBehandlingGodkjent:null,vurderPaNyttArsaker:null,besluttersBegrunnelse:null,aksjonspunktType:kh.AUTOPUNKT,vilkarType:_h.OMSORGSVILKARET,erAktivt:!0,fristTid:null,endretTidspunkt:null,endretAv:null},VM={title:"fakta/fakta-uttak",component:ld,decorators:[xT,MT],args:{arbeidsgiverOpplysningerPerId:IM,kanOverstyre:!1,submittable:!0,faktaArbeidsforhold:[{arbeidsgiverReferanse:"910909088",arbeidType:un.ORDINÆRT_ARBEID},{arbeidType:un.SELVSTENDIG_NÆRINGSDRIVENDE,arbeidsgiverReferanse:"null"}]},render:e=>G.jsx(ld,{...e})},ll={args:{aksjonspunkterForPanel:[],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:Ut.MODREKVOTE,arbeidsforhold:void 0,flerbarnsdager:!1,periodeKilde:qt.SØKNAD}],kanOverstyre:!1}},ol={args:{aksjonspunkterForPanel:[],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:Ut.MODREKVOTE,arbeidsforhold:void 0,flerbarnsdager:!1,periodeKilde:qt.SØKNAD}],kanOverstyre:!0}},ul={args:{aksjonspunkterForPanel:[{...jr,definisjon:vt.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,status:In.OPPRETTET,begrunnelse:null,kanLoses:!0}],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:Ut.MODREKVOTE,arbeidstidsprosent:10,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:un.ORDINÆRT_ARBEID},samtidigUttaksprosent:80,flerbarnsdager:!0,periodeKilde:qt.SØKNAD},{fom:"2022-12-02",tom:"2022-12-10",uttakPeriodeType:Ut.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:un.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:qt.SØKNAD},{fom:"2022-12-11",tom:"2022-12-20",uttakPeriodeType:Ut.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:un.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:qt.SØKNAD}],kanOverstyre:!1}},dl={args:{aksjonspunkterForPanel:[{...jr,definisjon:vt.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,status:In.OPPRETTET,begrunnelse:null,kanLoses:!0}],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",utsettelseÅrsak:Eh.ARBEID,periodeKilde:qt.SØKNAD}],kanOverstyre:!1}},cl={args:{aksjonspunkterForPanel:[{...jr,definisjon:vt.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,status:In.OPPRETTET,begrunnelse:null,kanLoses:!0}],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",overføringÅrsak:rv.IKKE_RETT_ANNEN_FORELDER,uttakPeriodeType:Ut.MODREKVOTE,periodeKilde:qt.SØKNAD}],kanOverstyre:!1}},fl={args:{aksjonspunkterForPanel:[{...jr,definisjon:vt.FAKTA_UTTAK_INGEN_PERIODER_KODE,status:In.OPPRETTET,begrunnelse:null,kanLoses:!0}],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[],kanOverstyre:!1}},ml={args:{aksjonspunkterForPanel:[{...jr,definisjon:vt.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,status:In.OPPRETTET,begrunnelse:null,kanLoses:!0}],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:Ut.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"91090823",arbeidType:un.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:qt.SØKNAD}],kanOverstyre:!1}},gl={args:{aksjonspunkterForPanel:[{...jr,definisjon:vt.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,status:In.OPPRETTET,begrunnelse:null,kanLoses:!0}],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:Ut.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910923",arbeidType:un.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:qt.SØKNAD}],kanOverstyre:!1}},hl={args:{aksjonspunkterForPanel:[{...jr,definisjon:vt.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,status:In.UTFORT,begrunnelse:"Dette er en begrunnelse",kanLoses:!1}],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:Ut.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:un.ORDINÆRT_ARBEID},samtidigUttaksprosent:50,morsAktivitet:"ARBEID",flerbarnsdager:!0,periodeKilde:qt.SØKNAD}],kanOverstyre:!1,isReadOnly:!0}},pl={args:{aksjonspunkterForPanel:[{...jr,definisjon:vt.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,status:In.UTFORT,begrunnelse:"Dette er en begrunnelse",kanLoses:!1}],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:Ut.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:un.ORDINÆRT_ARBEID},samtidigUttaksprosent:50,morsAktivitet:"ARBEID",flerbarnsdager:!0,periodeKilde:qt.SØKNAD,begrunnelse:"Dette er en gammel begrunnelse"}],kanOverstyre:!1,isReadOnly:!0}},vl={args:{aksjonspunkterForPanel:[{...jr,definisjon:vt.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,status:In.OPPRETTET,begrunnelse:null,kanLoses:!0}],ytelsefordeling:{overstyrtOmsorg:null,førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:Ut.FELLESPERIODE,arbeidstidsprosent:10,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:un.ORDINÆRT_ARBEID},samtidigUttaksprosent:80,flerbarnsdager:!0,periodeKilde:qt.SØKNAD},{fom:"2022-12-02",tom:"2022-12-10",uttakPeriodeType:Ut.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:un.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:qt.SØKNAD},{fom:"2022-12-11",tom:"2022-12-20",uttakPeriodeType:Ut.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:un.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:qt.SØKNAD}],kanOverstyre:!1,fagsak:{relasjonsRolleType:ud.FAR}}};ll.parameters={...ll.parameters,docs:{...ll.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidsforhold: undefined,
      flerbarnsdager: false,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }],
    kanOverstyre: false
  }
}`,...ll.parameters?.docs?.source}}};ol.parameters={...ol.parameters,docs:{...ol.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidsforhold: undefined,
      flerbarnsdager: false,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }],
    kanOverstyre: true
  }
}`,...ol.parameters?.docs?.source}}};ul.parameters={...ul.parameters,docs:{...ul.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 10,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910909088',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID
      },
      samtidigUttaksprosent: 80,
      flerbarnsdager: true,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }, {
      fom: '2022-12-02',
      tom: '2022-12-10',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 50,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910909088',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID
      },
      flerbarnsdager: false,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }, {
      fom: '2022-12-11',
      tom: '2022-12-20',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 50,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910909088',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID
      },
      flerbarnsdager: false,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }],
    kanOverstyre: false
  }
}`,...ul.parameters?.docs?.source}}};dl.parameters={...dl.parameters,docs:{...dl.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      utsettelseÅrsak: UtsettelseÅrsak.ARBEID,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }],
    kanOverstyre: false
  }
}`,...dl.parameters?.docs?.source}}};cl.parameters={...cl.parameters,docs:{...cl.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      overføringÅrsak: OverføringÅrsak.IKKE_RETT_ANNEN_FORELDER,
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }],
    kanOverstyre: false
  }
}`,...cl.parameters?.docs?.source}}};fl.parameters={...fl.parameters,docs:{...fl.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [],
    kanOverstyre: false
  }
}`,...fl.parameters?.docs?.source}}};ml.parameters={...ml.parameters,docs:{...ml.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 50,
      arbeidsforhold: {
        arbeidsgiverReferanse: '91090823',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID
      },
      flerbarnsdager: false,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }],
    kanOverstyre: false
  }
}`,...ml.parameters?.docs?.source}}};gl.parameters={...gl.parameters,docs:{...gl.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 50,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910923',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID
      },
      flerbarnsdager: false,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }],
    kanOverstyre: false
  }
}`,...gl.parameters?.docs?.source}}};hl.parameters={...hl.parameters,docs:{...hl.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: false
    }],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 50,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910909088',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID
      },
      samtidigUttaksprosent: 50,
      morsAktivitet: 'ARBEID',
      flerbarnsdager: true,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }],
    kanOverstyre: false,
    isReadOnly: true
  }
}`,...hl.parameters?.docs?.source}}};pl.parameters={...pl.parameters,docs:{...pl.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: false
    }],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 50,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910909088',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID
      },
      samtidigUttaksprosent: 50,
      morsAktivitet: 'ARBEID',
      flerbarnsdager: true,
      periodeKilde: FordelingPeriodeKilde.SØKNAD,
      begrunnelse: 'Dette er en gammel begrunnelse'
    }],
    kanOverstyre: false,
    isReadOnly: true
  }
}`,...pl.parameters?.docs?.source}}};vl.parameters={...vl.parameters,docs:{...vl.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.FELLESPERIODE,
      arbeidstidsprosent: 10,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910909088',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID
      },
      samtidigUttaksprosent: 80,
      flerbarnsdager: true,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }, {
      fom: '2022-12-02',
      tom: '2022-12-10',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 50,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910909088',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID
      },
      flerbarnsdager: false,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }, {
      fom: '2022-12-11',
      tom: '2022-12-20',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 50,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910909088',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID
      },
      flerbarnsdager: false,
      periodeKilde: FordelingPeriodeKilde.SØKNAD
    }],
    kanOverstyre: false,
    fagsak: {
      relasjonsRolleType: RelasjonsRolleType.FAR
    } as Fagsak
  }
}`,...vl.parameters?.docs?.source}}};const KM=["VisUttaksperiodeUtenAksjonspunkt","VisUttaksperiodeUtenAksjonspunktKanOverstyre","VisUttaksperiodeMedAksjonspunkt","VisUtsettelseperiodeMedAksjonspunkt","VisOverføringsperiodeMedAksjonspunkt","VisAksjonspunktDerIngenPerioderFinnes","VisAksjonspunktDerArbeidsfoholdErUkjentVedGradering","VisAksjonspunktDerEnIkkeHarBeregningsgrunnlagVedGradering","VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet","VisBegrunnelseFraTidligereUtgaveAvPanel","VisUttaksperiodeMedAksjonspunktForFar"];export{ml as VisAksjonspunktDerArbeidsfoholdErUkjentVedGradering,gl as VisAksjonspunktDerEnIkkeHarBeregningsgrunnlagVedGradering,fl as VisAksjonspunktDerIngenPerioderFinnes,pl as VisBegrunnelseFraTidligereUtgaveAvPanel,cl as VisOverføringsperiodeMedAksjonspunkt,hl as VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet,dl as VisUtsettelseperiodeMedAksjonspunkt,ul as VisUttaksperiodeMedAksjonspunkt,vl as VisUttaksperiodeMedAksjonspunktForFar,ll as VisUttaksperiodeUtenAksjonspunkt,ol as VisUttaksperiodeUtenAksjonspunktKanOverstyre,KM as __namedExportsOrder,VM as default};
