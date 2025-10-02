import{g as sd,r as D,u as ws,_ as hf,s as pf,c as Aa,a as Ee,b as g,d as Fs,m as hA,e as ka,S as Ks,R as gv,f as il,h as zt,i as mn,P as Ca,n as Zi,j as C,k as od,t as Ht,l as pA,o as TA,N as RA,p as yA,q as Qi,X as NA,v as AA,w as ud,O as Tf,U as kA,x as bA,y as Cl,z as SA,A as OA,B as _v,C as DA,D as IA,E as LA}from"./iframe-D_oKlPfw.js";import{r as PA}from"./index-C3kSkZre.js";import"./preload-helper-PPVm8Dsz.js";var dd=PA();const hv=sd(dd);function wA(e,n){var r=e.values,t=hf(e,["values"]),l=n.values,s=hf(n,["values"]);return pf(l,r)&&pf(t,s)}function pv(e){var n=ws(),r=n.formatMessage,t=n.textComponent,l=t===void 0?D.Fragment:t,s=e.id,u=e.description,d=e.defaultMessage,m=e.values,E=e.children,f=e.tagName,v=f===void 0?l:f,_=e.ignoreTag,T={id:s,description:u,defaultMessage:d},k=r(T,m,{ignoreTag:_});return typeof E=="function"?E(Array.isArray(k)?k:[k]):v?D.createElement(v,null,k):D.createElement(D.Fragment,null,k)}pv.displayName="FormattedMessage";var Me=D.memo(pv,wA);Me.displayName="MemoizedFormattedMessage";var Tn=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(Tn||{}),ot=(e=>(e.ORDINÆRT_ARBEID="ORDINÆRT_ARBEID",e.FRILANS="FRILANS",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.ANNET="ANNET",e))(ot||{}),jn=(e=>(e.MODREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FELLESPERIODE="FELLESPERIODE",e.FORELDREPENGER_FOR_FODSEL="FORELDREPENGER_FØR_FØDSEL",e.FORELDREPENGER="FORELDREPENGER",e.UDEFINERT="-",e))(jn||{}),Tv=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(Tv||{}),Rv=(e=>(e.ARBEID="ARBEID",e))(Rv||{});const FA=(e,n)=>{if(e==null)throw new Error("Data er ikke oppgitt");return e},sl=e=>Aa({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var KA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const cd=D.forwardRef((e,n)=>{var{className:r,size:t="medium",as:l="p",spacing:s,truncate:u,weight:d="regular",align:m,visuallyHidden:E,textColor:f}=e,v=KA(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Ee();return g.createElement(l,Object.assign({},v,{ref:n,className:_(r,"navds-body-long",`navds-body-long--${t}`,sl({spacing:s,truncate:u,weight:d,align:m,visuallyHidden:E,textColor:f}))}))});var MA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const un=D.forwardRef((e,n)=>{var{className:r,size:t="medium",as:l="p",spacing:s,truncate:u,weight:d="regular",align:m,visuallyHidden:E,textColor:f}=e,v=MA(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Ee();return g.createElement(l,Object.assign({},v,{ref:n,className:_(r,"navds-body-short",`navds-body-short--${t}`,sl({spacing:s,truncate:u,weight:d,align:m,visuallyHidden:E,textColor:f}))}))});var GA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const md=D.forwardRef((e,n)=>{var{className:r,size:t="medium",spacing:l,uppercase:s,as:u="p",truncate:d,weight:m="regular",align:E,visuallyHidden:f,textColor:v}=e,_=GA(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:T}=Ee();return g.createElement(u,Object.assign({},_,{ref:n,className:T(r,"navds-detail",sl({spacing:l,truncate:d,weight:m,align:E,visuallyHidden:f,textColor:v,uppercase:s}),{"navds-detail--small":t==="small"})}))});var VA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const ba=D.forwardRef((e,n)=>{var{children:r,className:t,size:l,spacing:s,as:u="p",showIcon:d=!1}=e,m=VA(e,["children","className","size","spacing","as","showIcon"]);const{cn:E}=Ee();return g.createElement(u,Object.assign({},m,{ref:n,className:E("navds-error-message","navds-label",t,sl({spacing:s}),{"navds-label--small":l==="small","navds-error-message--show-icon":d})}),d&&g.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},g.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var BA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Jl=D.forwardRef((e,n)=>{var{level:r="1",size:t,className:l,as:s,spacing:u,align:d,visuallyHidden:m,textColor:E}=e,f=BA(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:v}=Ee(),_=s??`h${r}`;return g.createElement(_,Object.assign({},f,{ref:n,className:v(l,"navds-heading",`navds-heading--${t}`,sl({spacing:u,align:d,visuallyHidden:m,textColor:E}))}))});var xA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};D.forwardRef((e,n)=>{var{className:r,spacing:t,as:l="p"}=e,s=xA(e,["className","spacing","as"]);const{cn:u}=Ee();return g.createElement(l,Object.assign({},s,{ref:n,className:u(r,"navds-ingress",{"navds-typo--spacing":!!t})}))});var UA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Wt=D.forwardRef((e,n)=>{var{className:r,size:t="medium",as:l="label",spacing:s,visuallyHidden:u,textColor:d}=e,m=UA(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:E}=Ee();return g.createElement(l,Object.assign({},m,{ref:n,className:E(r,"navds-label",sl({spacing:s,visuallyHidden:u,textColor:d}),{"navds-label--small":t==="small"})}))});function yv(e,n=166,r=!1){let t;function l(...s){const u=()=>{t=void 0,e.apply(this,s)};!t&&r&&u(),clearTimeout(t),t=setTimeout(u,n)}return l.clear=()=>{clearTimeout(t)},l}function fn(e,n){const r=Object.entries(e).filter(([t])=>!n.includes(t));return Object.fromEntries(r)}const tl=globalThis?.document?D.useLayoutEffect:()=>{};let Rf=0;function HA(e){const[n,r]=D.useState(e),t=e||n;return D.useEffect(()=>{n==null&&(Rf+=1,r(`aksel-id-${Rf}`))},[n]),t}const yf=g.useId;function Xt(e){var n;if(yf!==void 0){const r=yf();return e??r.replace(/(:)/g,"")}return(n=HA(e))!==null&&n!==void 0?n:""}function ql(e,n=[]){const r=D.useRef(e);return D.useEffect(()=>{r.current=e}),D.useCallback(((...t)=>{var l;return(l=r.current)===null||l===void 0?void 0:l.call(r,...t)}),n)}function Yl({value:e,defaultValue:n,onChange:r}){const t=ql(r),[l,s]=D.useState(n),u=e!==void 0,d=u?e:l,m=ql(E=>{const v=typeof E=="function"?E(d):E;u||s(v),t(v)},[u,t,d]);return[d,m]}let Nf=0;function jA(e){const[n,r]=D.useState(e),t=e||n;return D.useEffect(()=>{n==null&&(Nf+=1,r(`aksel-icon-${Nf}`))},[n]),t}const Af=g.useId;function In(e){var n;return Af!==void 0?Af().replace(/(:)/g,""):(n=jA(e))!==null&&n!==void 0?n:""}var CA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const qA=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=CA(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",d:"M8.97 6.97a.75.75 0 1 1 1.06 1.06l-3.22 3.22H19a.75.75 0 0 1 0 1.5H6.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06z"}))});var YA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const $A=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=YA(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",d:"M14.087 6.873a.75.75 0 0 1 .943.097l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5a.75.75 0 0 1-.75-.74V12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 0 1 .117-1.157"}))});var WA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const JA=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=WA(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var zA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const XA=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=zA(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var ZA=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const QA=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=ZA(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var ek=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const fd=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=ek(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var nk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const tk=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=nk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var rk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const ak=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=rk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var lk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const ik=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=lk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var sk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const ok=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=sk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var uk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Nv=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=uk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var dk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Av=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=dk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var ck=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const mk=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=ck(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var fk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Ek=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=fk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var vk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const gk=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=vk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var _k=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const hk=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=_k(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var pk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Tk=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=pk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 6.25a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.876-11.384h.805a.75.75 0 0 0 0-1.5h-2.75V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25zm5.5-1.5c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm-3.19 3 .867 11.27c.01.13.118.23.249.23h8.148c.13 0 .24-.1.25-.23l.866-11.27zm3.19 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var Rk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const ps=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=Rk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var yk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Nk=D.forwardRef((e,n)=>{var{title:r,titleId:t}=e,l=yk(e,["title","titleId"]);let s=In();return s=r?t||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),r?g.createElement("title",{id:s},r):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function dr(e,n,{checkForDefaultPrevented:r=!0}={}){return function(l){if(e?.(l),r===!1||!l.defaultPrevented)return n?.(l)}}const[Ak,Ms]=Fs({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),kk=typeof window<"u"&&window.matchMedia===void 0,bk=(e,n)=>{const[r,t]=D.useState(n);return D.useEffect(()=>{if(kk)return;const l=window.matchMedia(e);t(l.matches);const s=u=>{t(u.matches)};return l.addEventListener("change",s),()=>{l.removeEventListener("change",s)}},[e]),r};function Ft(e){return(n={})=>{const r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function zn(e){return(n,r)=>{const t=r?.context?String(r.context):"standalone";let l;if(t==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,d=r?.width?String(r.width):u;l=e.formattingValues[d]||e.formattingValues[u]}else{const u=e.defaultWidth,d=r?.width?String(r.width):e.defaultWidth;l=e.values[d]||e.values[u]}const s=e.argumentCallback?e.argumentCallback(n):n;return l[s]}}function Xn(e){return(n,r={})=>{const t=r.width,l=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],s=n.match(l);if(!s)return null;const u=s[0],d=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(d)?Ok(d,v=>v.test(u)):Sk(d,v=>v.test(u));let E;E=e.valueCallback?e.valueCallback(m):m,E=r.valueCallback?r.valueCallback(E):E;const f=n.slice(u.length);return{value:E,rest:f}}}function Sk(e,n){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n(e[r]))return r}function Ok(e,n){for(let r=0;r<e.length;r++)if(n(e[r]))return r}function Ed(e){return(n,r={})=>{const t=n.match(e.matchPattern);if(!t)return null;const l=t[0],s=n.match(e.parsePattern);if(!s)return null;let u=e.valueCallback?e.valueCallback(s[0]):s[0];u=r.valueCallback?r.valueCallback(u):u;const d=n.slice(l.length);return{value:u,rest:d}}}const kv=6048e5,Dk=864e5,Ik=6e4,Lk=36e5,Pk=1e3,kf=Symbol.for("constructDateFrom");function qe(e,n){return typeof e=="function"?e(n):e&&typeof e=="object"&&kf in e?e[kf](n):e instanceof Date?new e.constructor(n):new Date(n)}function ol(e,...n){const r=qe.bind(null,n.find(t=>typeof t=="object"));return n.map(r)}let wk={};function Sa(){return wk}function Ie(e,n){return qe(n||e,e)}function wr(e,n){const r=Sa(),t=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,l=Ie(e,n?.in),s=l.getDay(),u=(s<t?7:0)+s-t;return l.setDate(l.getDate()-u),l.setHours(0,0,0,0),l}const Fk={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},bv=(e,n,r)=>{let t;const l=Fk[e];return typeof l=="string"?t=l:n===1?t=l.one:t=l.other.replace("{{count}}",n.toString()),r?.addSuffix?r.comparison&&r.comparison>0?"in "+t:t+" ago":t},Kk={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Sv=(e,n,r,t)=>Kk[e],Mk={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Gk={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Vk={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Bk={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},xk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Uk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Hk=(e,n)=>{const r=Number(e),t=r%100;if(t>20||t<10)switch(t%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Ov={ordinalNumber:Hk,era:zn({values:Mk,defaultWidth:"wide"}),quarter:zn({values:Gk,defaultWidth:"wide",argumentCallback:e=>e-1}),month:zn({values:Vk,defaultWidth:"wide"}),day:zn({values:Bk,defaultWidth:"wide"}),dayPeriod:zn({values:xk,defaultWidth:"wide",formattingValues:Uk,defaultFormattingWidth:"wide"})},jk=/^(\d+)(th|st|nd|rd)?/i,Ck=/\d+/i,qk={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Yk={any:[/^b/i,/^(a|c)/i]},$k={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Wk={any:[/1/i,/2/i,/3/i,/4/i]},Jk={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},zk={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Xk={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Zk={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Qk={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},eb={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Dv={ordinalNumber:Ed({matchPattern:jk,parsePattern:Ck,valueCallback:e=>parseInt(e,10)}),era:Xn({matchPatterns:qk,defaultMatchWidth:"wide",parsePatterns:Yk,defaultParseWidth:"any"}),quarter:Xn({matchPatterns:$k,defaultMatchWidth:"wide",parsePatterns:Wk,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xn({matchPatterns:Jk,defaultMatchWidth:"wide",parsePatterns:zk,defaultParseWidth:"any"}),day:Xn({matchPatterns:Xk,defaultMatchWidth:"wide",parsePatterns:Zk,defaultParseWidth:"any"}),dayPeriod:Xn({matchPatterns:Qk,defaultMatchWidth:"any",parsePatterns:eb,defaultParseWidth:"any"})},nb={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},tb={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},rb={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ab={date:Ft({formats:nb,defaultWidth:"full"}),time:Ft({formats:tb,defaultWidth:"full"}),dateTime:Ft({formats:rb,defaultWidth:"full"})},Iv={code:"en-GB",formatDistance:bv,formatLong:ab,formatRelative:Sv,localize:Ov,match:Dv,options:{weekStartsOn:1,firstWeekContainsDate:4}},lb={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ib={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},sb={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ob={date:Ft({formats:lb,defaultWidth:"full"}),time:Ft({formats:ib,defaultWidth:"full"}),dateTime:Ft({formats:sb,defaultWidth:"full"})},Gs={code:"en-US",formatDistance:bv,formatLong:ob,formatRelative:Sv,localize:Ov,match:Dv,options:{weekStartsOn:0,firstWeekContainsDate:1}},ub={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},db=(e,n,r)=>{let t;const l=ub[e];return typeof l=="string"?t=l:n===1?t=l.one:t=l.other.replace("{{count}}",String(n)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+t:t+" siden":t},cb={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},mb={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},fb={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Eb={date:Ft({formats:cb,defaultWidth:"full"}),time:Ft({formats:mb,defaultWidth:"full"}),dateTime:Ft({formats:fb,defaultWidth:"full"})},vb={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},gb=(e,n,r,t)=>vb[e],_b={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},hb={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},pb={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Tb={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Rb={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},yb=(e,n)=>Number(e)+".",Nb={ordinalNumber:yb,era:zn({values:_b,defaultWidth:"wide"}),quarter:zn({values:hb,defaultWidth:"wide",argumentCallback:e=>e-1}),month:zn({values:pb,defaultWidth:"wide"}),day:zn({values:Tb,defaultWidth:"wide"}),dayPeriod:zn({values:Rb,defaultWidth:"wide"})},Ab=/^(\d+)\.?/i,kb=/\d+/i,bb={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Sb={any:[/^f/i,/^e/i]},Ob={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Db={any:[/1/i,/2/i,/3/i,/4/i]},Ib={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Lb={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Pb={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},wb={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Fb={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Kb={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Mb={ordinalNumber:Ed({matchPattern:Ab,parsePattern:kb,valueCallback:e=>parseInt(e,10)}),era:Xn({matchPatterns:bb,defaultMatchWidth:"wide",parsePatterns:Sb,defaultParseWidth:"any"}),quarter:Xn({matchPatterns:Ob,defaultMatchWidth:"wide",parsePatterns:Db,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xn({matchPatterns:Ib,defaultMatchWidth:"wide",parsePatterns:Lb,defaultParseWidth:"any"}),day:Xn({matchPatterns:Pb,defaultMatchWidth:"wide",parsePatterns:wb,defaultParseWidth:"any"}),dayPeriod:Xn({matchPatterns:Fb,defaultMatchWidth:"any",parsePatterns:Kb,defaultParseWidth:"any"})},Lv={code:"nb",formatDistance:db,formatLong:Eb,formatRelative:gb,localize:Nb,match:Mb,options:{weekStartsOn:1,firstWeekContainsDate:4}},Gb={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},Vb=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Bb=(e,n,r)=>{let t;const l=Gb[e];return typeof l=="string"?t=l:n===1?t=l.one:t=l.other.replace("{{count}}",n<13?Vb[n]:String(n)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+t:t+" sidan":t},xb={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Ub={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Hb={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},jb={date:Ft({formats:xb,defaultWidth:"full"}),time:Ft({formats:Ub,defaultWidth:"full"}),dateTime:Ft({formats:Hb,defaultWidth:"full"})},Cb={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},qb=(e,n,r,t)=>Cb[e],Yb={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},$b={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Wb={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Jb={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},zb={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},Xb=(e,n)=>Number(e)+".",Zb={ordinalNumber:Xb,era:zn({values:Yb,defaultWidth:"wide"}),quarter:zn({values:$b,defaultWidth:"wide",argumentCallback:e=>e-1}),month:zn({values:Wb,defaultWidth:"wide"}),day:zn({values:Jb,defaultWidth:"wide"}),dayPeriod:zn({values:zb,defaultWidth:"wide"})},Qb=/^(\d+)\.?/i,eS=/\d+/i,nS={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},tS={any:[/^f/i,/^e/i]},rS={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},aS={any:[/1/i,/2/i,/3/i,/4/i]},lS={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},iS={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},sS={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},oS={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},uS={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},dS={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},cS={ordinalNumber:Ed({matchPattern:Qb,parsePattern:eS,valueCallback:e=>parseInt(e,10)}),era:Xn({matchPatterns:nS,defaultMatchWidth:"wide",parsePatterns:tS,defaultParseWidth:"any"}),quarter:Xn({matchPatterns:rS,defaultMatchWidth:"wide",parsePatterns:aS,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xn({matchPatterns:lS,defaultMatchWidth:"wide",parsePatterns:iS,defaultParseWidth:"any"}),day:Xn({matchPatterns:sS,defaultMatchWidth:"wide",parsePatterns:oS,defaultParseWidth:"any"}),dayPeriod:Xn({matchPatterns:uS,defaultMatchWidth:"any",parsePatterns:dS,defaultParseWidth:"any"})},Pv={code:"nn",formatDistance:Bb,formatLong:jb,formatRelative:qb,localize:Zb,match:cS,options:{weekStartsOn:1,firstWeekContainsDate:4}},mS={global:{dateLocale:Lv,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},fS=D.createContext({locale:mS}),vd=()=>D.useContext(fS);function bf(e){return e.sort((n,r)=>{const t=n.compareDocumentPosition(r);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const ES=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Sf(e,n,r){let t=e+1;return r&&t>=n&&(t=0),t}function Of(e,n,r){let t=e-1;return r&&t<0&&(t=n),t}const mu=e=>e;class vS{constructor(){this.descendants=new Map,this.register=n=>{if(n!=null)return ES(n)?this.registerNode(n):r=>{this.registerNode(r,n)}},this.unregister=n=>{this.descendants.delete(n);const r=bf(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=n=>{this.descendants.forEach(r=>{const t=n.indexOf(r.node);r.index=t,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,t)=>r.index-t.index),this.enabledValues=()=>this.values().filter(n=>!n.disabled),this.item=n=>{if(this.count()!==0)return this.values()[n]},this.enabledItem=n=>{if(this.enabledCount()!==0)return this.enabledValues()[n]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const n=this.enabledValues().length-1;return this.enabledItem(n)},this.indexOf=n=>{var r,t;return n&&(t=(r=this.descendants.get(n))===null||r===void 0?void 0:r.index)!==null&&t!==void 0?t:-1},this.enabledIndexOf=n=>n==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(n)),this.next=(n,r=!0)=>{const t=Sf(n,this.count(),r);return this.item(t)},this.nextEnabled=(n,r=!0)=>{const t=this.item(n);if(!t)return;const l=this.enabledIndexOf(t.node),s=Sf(l,this.enabledCount(),r);return this.enabledItem(s)},this.prev=(n,r=!0)=>{const t=Of(n,this.count()-1,r);return this.item(t)},this.prevEnabled=(n,r=!0)=>{const t=this.item(n);if(!t)return;const l=this.enabledIndexOf(t.node),s=Of(l,this.enabledCount()-1,r);return this.enabledItem(s)},this.registerNode=(n,r)=>{if(!n)return;const t=this.descendants.get(n);if(t){this.descendants.set(n,Object.assign({index:t.index,node:n},r));return}const l=Array.from(this.descendants.keys()).concat(n),s=bf(l);r?.disabled&&(r.disabled=!!r.disabled);const u=Object.assign({node:n,index:-1},r);this.descendants.set(n,u),this.assignIndex(s)}}}function gS(){const[e,n]=Fs({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=mu(s=>g.createElement(e,Object.assign({},s.value),s.children));function t(s){const u=n(),[d,m]=D.useState(-1),E=D.useRef(null);tl(()=>()=>{E.current&&u.unregister(E.current)},[]),tl(()=>{if(!E.current)return;const v=Number(E.current.dataset.index);d!==v&&!Number.isNaN(v)&&m(v)});const f=mu(s?u.register(s):u.register);return{descendants:u,index:d,enabledIndex:u.enabledIndexOf(E.current),register:hA([f,E])}}function l(){return D.useRef(new vS).current}return[r,n,l,t]}function _S(e,n=globalThis?.document){const r=ql(e);D.useEffect(()=>{const t=l=>{l.key==="Escape"&&r(l)};return n.addEventListener("keydown",t,!0),()=>n.removeEventListener("keydown",t,!0)},[r,n])}const wv={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function Fv(e,n,r,{discrete:t}={discrete:!1}){if(!n)return;const l=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});l.addEventListener(e,n,{once:!0}),t&&l?hv.flushSync(()=>l.dispatchEvent(s)):l.dispatchEvent(s)}function hS(e,n=globalThis?.document){const r=ql(e),t=D.useRef(!1);return D.useEffect(()=>{const l=s=>{if(s.target&&!t.current){const u={originalEvent:s};Fv(wv.FOCUS_OUTSIDE,r,u)}};return n.addEventListener("focusin",l),()=>n.removeEventListener("focusin",l)},[n,r]),{onFocusCapture:()=>{t.current=!0},onBlurCapture:()=>{t.current=!1}}}function pS(e,n=globalThis?.document){const r=ql(e),t=D.useRef(!1),l=D.useRef(()=>{});return D.useEffect(()=>{const s=d=>{function m(){Fv(wv.POINTER_DOWN_OUTSIDE,r,{originalEvent:d},{discrete:!0})}d.target&&!t.current?d.pointerType==="touch"?(n.removeEventListener("click",l.current),l.current=m,n.addEventListener("click",l.current,{once:!0})):m():n.removeEventListener("click",l.current),t.current=!1},u=window.setTimeout(()=>{n.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(u),n.removeEventListener("pointerdown",s),n.removeEventListener("click",l.current)}},[n,r]),{onPointerDownCapture:()=>{t.current=!0}}}var TS=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const[RS,yS,NS,AS]=gS();let qa=0,Df;const kS=D.forwardRef((e,n)=>yS(!1)?g.createElement(If,Object.assign({ref:n},e)):g.createElement(bS,null,g.createElement(If,Object.assign({ref:n},e)))),bS=({children:e})=>{const n=NS();return g.createElement(RS,{value:n},e)},If=D.forwardRef((e,n)=>{var r,{children:t,asChild:l,onEscapeKeyDown:s,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:m,onDismiss:E,safeZone:f,disableOutsidePointerEvents:v=!1,enabled:_=!0}=e,T=TS(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,k]=D.useState({}),{register:O,index:p,descendants:b}=AS({disableOutsidePointerEvents:v,disabled:!_,forceUpdate:()=>k({})}),[S,N]=D.useState(null),L=ka(N,O,n),y=(r=S?.ownerDocument)!==null&&r!==void 0?r:globalThis?.document,K=D.useRef(!1),F=D.useRef(!1),G=(()=>{let V=-1;return b.enabledValues().forEach((ne,te)=>{ne.disableOutsidePointerEvents&&(V=te)}),{isPointerEventsEnabled:p>=V,isBodyPointerEventsDisabled:qa>0,pointerStyle:p>=V&&qa>0?"auto":void 0}})();function H(V){var X,ne;if(!f?.anchor&&!f?.dismissable||!_)return;V.defaultPrevented||(K.current=!0,V.detail.originalEvent.type==="pointerdown"&&(F.current=!0));const te=V.target;V.detail.originalEvent.type==="pointerdown"?(!((X=f?.anchor)===null||X===void 0)&&X.contains(te)||te===f?.anchor)&&V.preventDefault():!(te instanceof HTMLElement&&![f?.anchor,f?.dismissable].some(Q=>Q?.contains(te))&&!te.contains((ne=f?.dismissable)!==null&&ne!==void 0?ne:null))&&V.preventDefault(),V.detail.originalEvent.type==="focusin"&&F.current&&V.preventDefault(),F.current=!1,K.current=!1}const W=pS(V=>{!G.isPointerEventsEnabled||!_||(u?.(V),m?.(V),f&&H(V),!V.defaultPrevented&&E&&E())},y),Y=hS(V=>{_&&(d?.(V),m?.(V),f&&H(V),!V.defaultPrevented&&E&&E())},y);_S(V=>{!_||!(p===b.enabledCount()-1)||(s?.(V),!V.defaultPrevented&&E&&(V.preventDefault(),E()))},y),D.useEffect(()=>{if(!(!S||!_||!v))return qa===0&&(Df=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),qa++,()=>{qa===1&&(y.body.style.pointerEvents=Df),qa--}},[S,y,v,b,_]),D.useEffect(()=>()=>b.values().forEach(V=>V.forceUpdate()),[b,S]);const x=l?Ks:"div";return g.createElement(x,Object.assign({ref:L},T,{onFocusCapture:Y.onFocusCapture,onBlurCapture:Y.onBlurCapture,onPointerDownCapture:W.onPointerDownCapture,style:Object.assign({pointerEvents:G.pointerStyle},T.style)}),t)}),rl=Math.min,Ea=Math.max,Ts=Math.round,es=Math.floor,cr=e=>({x:e,y:e}),SS={left:"right",right:"left",bottom:"top",top:"bottom"},OS={start:"end",end:"start"};function Lu(e,n,r){return Ea(e,rl(n,r))}function zl(e,n){return typeof e=="function"?e(n):e}function ga(e){return e.split("-")[0]}function Xl(e){return e.split("-")[1]}function Kv(e){return e==="x"?"y":"x"}function gd(e){return e==="y"?"height":"width"}const DS=new Set(["top","bottom"]);function $r(e){return DS.has(ga(e))?"y":"x"}function _d(e){return Kv($r(e))}function IS(e,n,r){r===void 0&&(r=!1);const t=Xl(e),l=_d(e),s=gd(l);let u=l==="x"?t===(r?"end":"start")?"right":"left":t==="start"?"bottom":"top";return n.reference[s]>n.floating[s]&&(u=Rs(u)),[u,Rs(u)]}function LS(e){const n=Rs(e);return[Pu(e),n,Pu(n)]}function Pu(e){return e.replace(/start|end/g,n=>OS[n])}const Lf=["left","right"],Pf=["right","left"],PS=["top","bottom"],wS=["bottom","top"];function FS(e,n,r){switch(e){case"top":case"bottom":return r?n?Pf:Lf:n?Lf:Pf;case"left":case"right":return n?PS:wS;default:return[]}}function KS(e,n,r,t){const l=Xl(e);let s=FS(ga(e),r==="start",t);return l&&(s=s.map(u=>u+"-"+l),n&&(s=s.concat(s.map(Pu)))),s}function Rs(e){return e.replace(/left|right|bottom|top/g,n=>SS[n])}function MS(e){return{top:0,right:0,bottom:0,left:0,...e}}function Mv(e){return typeof e!="number"?MS(e):{top:e,right:e,bottom:e,left:e}}function ys(e){const{x:n,y:r,width:t,height:l}=e;return{width:t,height:l,top:r,left:n,right:n+t,bottom:r+l,x:n,y:r}}function wf(e,n,r){let{reference:t,floating:l}=e;const s=$r(n),u=_d(n),d=gd(u),m=ga(n),E=s==="y",f=t.x+t.width/2-l.width/2,v=t.y+t.height/2-l.height/2,_=t[d]/2-l[d]/2;let T;switch(m){case"top":T={x:f,y:t.y-l.height};break;case"bottom":T={x:f,y:t.y+t.height};break;case"right":T={x:t.x+t.width,y:v};break;case"left":T={x:t.x-l.width,y:v};break;default:T={x:t.x,y:t.y}}switch(Xl(n)){case"start":T[u]-=_*(r&&E?-1:1);break;case"end":T[u]+=_*(r&&E?-1:1);break}return T}const GS=async(e,n,r)=>{const{placement:t="bottom",strategy:l="absolute",middleware:s=[],platform:u}=r,d=s.filter(Boolean),m=await(u.isRTL==null?void 0:u.isRTL(n));let E=await u.getElementRects({reference:e,floating:n,strategy:l}),{x:f,y:v}=wf(E,t,m),_=t,T={},k=0;for(let O=0;O<d.length;O++){const{name:p,fn:b}=d[O],{x:S,y:N,data:L,reset:y}=await b({x:f,y:v,initialPlacement:t,placement:_,strategy:l,middlewareData:T,rects:E,platform:u,elements:{reference:e,floating:n}});f=S??f,v=N??v,T={...T,[p]:{...T[p],...L}},y&&k<=50&&(k++,typeof y=="object"&&(y.placement&&(_=y.placement),y.rects&&(E=y.rects===!0?await u.getElementRects({reference:e,floating:n,strategy:l}):y.rects),{x:f,y:v}=wf(E,_,m)),O=-1)}return{x:f,y:v,placement:_,strategy:l,middlewareData:T}};async function Gv(e,n){var r;n===void 0&&(n={});const{x:t,y:l,platform:s,rects:u,elements:d,strategy:m}=e,{boundary:E="clippingAncestors",rootBoundary:f="viewport",elementContext:v="floating",altBoundary:_=!1,padding:T=0}=zl(n,e),k=Mv(T),p=d[_?v==="floating"?"reference":"floating":v],b=ys(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(p)))==null||r?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(d.floating)),boundary:E,rootBoundary:f,strategy:m})),S=v==="floating"?{x:t,y:l,width:u.floating.width,height:u.floating.height}:u.reference,N=await(s.getOffsetParent==null?void 0:s.getOffsetParent(d.floating)),L=await(s.isElement==null?void 0:s.isElement(N))?await(s.getScale==null?void 0:s.getScale(N))||{x:1,y:1}:{x:1,y:1},y=ys(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:S,offsetParent:N,strategy:m}):S);return{top:(b.top-y.top+k.top)/L.y,bottom:(y.bottom-b.bottom+k.bottom)/L.y,left:(b.left-y.left+k.left)/L.x,right:(y.right-b.right+k.right)/L.x}}const VS=e=>({name:"arrow",options:e,async fn(n){const{x:r,y:t,placement:l,rects:s,platform:u,elements:d,middlewareData:m}=n,{element:E,padding:f=0}=zl(e,n)||{};if(E==null)return{};const v=Mv(f),_={x:r,y:t},T=_d(l),k=gd(T),O=await u.getDimensions(E),p=T==="y",b=p?"top":"left",S=p?"bottom":"right",N=p?"clientHeight":"clientWidth",L=s.reference[k]+s.reference[T]-_[T]-s.floating[k],y=_[T]-s.reference[T],K=await(u.getOffsetParent==null?void 0:u.getOffsetParent(E));let F=K?K[N]:0;(!F||!await(u.isElement==null?void 0:u.isElement(K)))&&(F=d.floating[N]||s.floating[k]);const G=L/2-y/2,H=F/2-O[k]/2-1,W=rl(v[b],H),Y=rl(v[S],H),x=W,V=F-O[k]-Y,X=F/2-O[k]/2+G,ne=Lu(x,X,V),te=!m.arrow&&Xl(l)!=null&&X!==ne&&s.reference[k]/2-(X<x?W:Y)-O[k]/2<0,se=te?X<x?X-x:X-V:0;return{[T]:_[T]+se,data:{[T]:ne,centerOffset:X-ne-se,...te&&{alignmentOffset:se}},reset:te}}}),BS=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var r,t;const{placement:l,middlewareData:s,rects:u,initialPlacement:d,platform:m,elements:E}=n,{mainAxis:f=!0,crossAxis:v=!0,fallbackPlacements:_,fallbackStrategy:T="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:O=!0,...p}=zl(e,n);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const b=ga(l),S=$r(d),N=ga(d)===d,L=await(m.isRTL==null?void 0:m.isRTL(E.floating)),y=_||(N||!O?[Rs(d)]:LS(d)),K=k!=="none";!_&&K&&y.push(...KS(d,O,k,L));const F=[d,...y],G=await Gv(n,p),H=[];let W=((t=s.flip)==null?void 0:t.overflows)||[];if(f&&H.push(G[b]),v){const X=IS(l,u,L);H.push(G[X[0]],G[X[1]])}if(W=[...W,{placement:l,overflows:H}],!H.every(X=>X<=0)){var Y,x;const X=(((Y=s.flip)==null?void 0:Y.index)||0)+1,ne=F[X];if(ne&&(!(v==="alignment"?S!==$r(ne):!1)||W.every(Q=>$r(Q.placement)===S?Q.overflows[0]>0:!0)))return{data:{index:X,overflows:W},reset:{placement:ne}};let te=(x=W.filter(se=>se.overflows[0]<=0).sort((se,Q)=>se.overflows[1]-Q.overflows[1])[0])==null?void 0:x.placement;if(!te)switch(T){case"bestFit":{var V;const se=(V=W.filter(Q=>{if(K){const oe=$r(Q.placement);return oe===S||oe==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(oe=>oe>0).reduce((oe,Re)=>oe+Re,0)]).sort((Q,oe)=>Q[1]-oe[1])[0])==null?void 0:V[0];se&&(te=se);break}case"initialPlacement":te=d;break}if(l!==te)return{reset:{placement:te}}}return{}}}},xS=new Set(["left","top"]);async function US(e,n){const{placement:r,platform:t,elements:l}=e,s=await(t.isRTL==null?void 0:t.isRTL(l.floating)),u=ga(r),d=Xl(r),m=$r(r)==="y",E=xS.has(u)?-1:1,f=s&&m?-1:1,v=zl(n,e);let{mainAxis:_,crossAxis:T,alignmentAxis:k}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return d&&typeof k=="number"&&(T=d==="end"?k*-1:k),m?{x:T*f,y:_*E}:{x:_*E,y:T*f}}const HS=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var r,t;const{x:l,y:s,placement:u,middlewareData:d}=n,m=await US(n,e);return u===((r=d.offset)==null?void 0:r.placement)&&(t=d.arrow)!=null&&t.alignmentOffset?{}:{x:l+m.x,y:s+m.y,data:{...m,placement:u}}}}},jS=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:r,y:t,placement:l}=n,{mainAxis:s=!0,crossAxis:u=!1,limiter:d={fn:p=>{let{x:b,y:S}=p;return{x:b,y:S}}},...m}=zl(e,n),E={x:r,y:t},f=await Gv(n,m),v=$r(ga(l)),_=Kv(v);let T=E[_],k=E[v];if(s){const p=_==="y"?"top":"left",b=_==="y"?"bottom":"right",S=T+f[p],N=T-f[b];T=Lu(S,T,N)}if(u){const p=v==="y"?"top":"left",b=v==="y"?"bottom":"right",S=k+f[p],N=k-f[b];k=Lu(S,k,N)}const O=d.fn({...n,[_]:T,[v]:k});return{...O,data:{x:O.x-r,y:O.y-t,enabled:{[_]:s,[v]:u}}}}}};function Vs(){return typeof window<"u"}function ul(e){return Vv(e)?(e.nodeName||"").toLowerCase():"#document"}function yt(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Er(e){var n;return(n=(Vv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function Vv(e){return Vs()?e instanceof Node||e instanceof yt(e).Node:!1}function Hn(e){return Vs()?e instanceof Element||e instanceof yt(e).Element:!1}function mr(e){return Vs()?e instanceof HTMLElement||e instanceof yt(e).HTMLElement:!1}function Ff(e){return!Vs()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof yt(e).ShadowRoot}const CS=new Set(["inline","contents"]);function Zl(e){const{overflow:n,overflowX:r,overflowY:t,display:l}=Jt(e);return/auto|scroll|overlay|hidden|clip/.test(n+t+r)&&!CS.has(l)}const qS=new Set(["table","td","th"]);function YS(e){return qS.has(ul(e))}const $S=[":popover-open",":modal"];function Bs(e){return $S.some(n=>{try{return e.matches(n)}catch{return!1}})}const WS=["transform","translate","scale","rotate","perspective"],JS=["transform","translate","scale","rotate","perspective","filter"],zS=["paint","layout","strict","content"];function hd(e){const n=pd(),r=Hn(e)?Jt(e):e;return WS.some(t=>r[t]?r[t]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!n&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!n&&(r.filter?r.filter!=="none":!1)||JS.some(t=>(r.willChange||"").includes(t))||zS.some(t=>(r.contain||"").includes(t))}function XS(e){let n=Jr(e);for(;mr(n)&&!al(n);){if(hd(n))return n;if(Bs(n))return null;n=Jr(n)}return null}function pd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ZS=new Set(["html","body","#document"]);function al(e){return ZS.has(ul(e))}function Jt(e){return yt(e).getComputedStyle(e)}function xs(e){return Hn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Jr(e){if(ul(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Ff(e)&&e.host||Er(e);return Ff(n)?n.host:n}function Bv(e){const n=Jr(e);return al(n)?e.ownerDocument?e.ownerDocument.body:e.body:mr(n)&&Zl(n)?n:Bv(n)}function $l(e,n,r){var t;n===void 0&&(n=[]),r===void 0&&(r=!0);const l=Bv(e),s=l===((t=e.ownerDocument)==null?void 0:t.body),u=yt(l);if(s){const d=wu(u);return n.concat(u,u.visualViewport||[],Zl(l)?l:[],d&&r?$l(d):[])}return n.concat(l,$l(l,[],r))}function wu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function xv(e){const n=Jt(e);let r=parseFloat(n.width)||0,t=parseFloat(n.height)||0;const l=mr(e),s=l?e.offsetWidth:r,u=l?e.offsetHeight:t,d=Ts(r)!==s||Ts(t)!==u;return d&&(r=s,t=u),{width:r,height:t,$:d}}function Td(e){return Hn(e)?e:e.contextElement}function Qa(e){const n=Td(e);if(!mr(n))return cr(1);const r=n.getBoundingClientRect(),{width:t,height:l,$:s}=xv(n);let u=(s?Ts(r.width):r.width)/t,d=(s?Ts(r.height):r.height)/l;return(!u||!Number.isFinite(u))&&(u=1),(!d||!Number.isFinite(d))&&(d=1),{x:u,y:d}}const QS=cr(0);function Uv(e){const n=yt(e);return!pd()||!n.visualViewport?QS:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function eO(e,n,r){return n===void 0&&(n=!1),!r||n&&r!==yt(e)?!1:n}function _a(e,n,r,t){n===void 0&&(n=!1),r===void 0&&(r=!1);const l=e.getBoundingClientRect(),s=Td(e);let u=cr(1);n&&(t?Hn(t)&&(u=Qa(t)):u=Qa(e));const d=eO(s,r,t)?Uv(s):cr(0);let m=(l.left+d.x)/u.x,E=(l.top+d.y)/u.y,f=l.width/u.x,v=l.height/u.y;if(s){const _=yt(s),T=t&&Hn(t)?yt(t):t;let k=_,O=wu(k);for(;O&&t&&T!==k;){const p=Qa(O),b=O.getBoundingClientRect(),S=Jt(O),N=b.left+(O.clientLeft+parseFloat(S.paddingLeft))*p.x,L=b.top+(O.clientTop+parseFloat(S.paddingTop))*p.y;m*=p.x,E*=p.y,f*=p.x,v*=p.y,m+=N,E+=L,k=yt(O),O=wu(k)}}return ys({width:f,height:v,x:m,y:E})}function Us(e,n){const r=xs(e).scrollLeft;return n?n.left+r:_a(Er(e)).left+r}function Hv(e,n){const r=e.getBoundingClientRect(),t=r.left+n.scrollLeft-Us(e,r),l=r.top+n.scrollTop;return{x:t,y:l}}function nO(e){let{elements:n,rect:r,offsetParent:t,strategy:l}=e;const s=l==="fixed",u=Er(t),d=n?Bs(n.floating):!1;if(t===u||d&&s)return r;let m={scrollLeft:0,scrollTop:0},E=cr(1);const f=cr(0),v=mr(t);if((v||!v&&!s)&&((ul(t)!=="body"||Zl(u))&&(m=xs(t)),mr(t))){const T=_a(t);E=Qa(t),f.x=T.x+t.clientLeft,f.y=T.y+t.clientTop}const _=u&&!v&&!s?Hv(u,m):cr(0);return{width:r.width*E.x,height:r.height*E.y,x:r.x*E.x-m.scrollLeft*E.x+f.x+_.x,y:r.y*E.y-m.scrollTop*E.y+f.y+_.y}}function tO(e){return Array.from(e.getClientRects())}function rO(e){const n=Er(e),r=xs(e),t=e.ownerDocument.body,l=Ea(n.scrollWidth,n.clientWidth,t.scrollWidth,t.clientWidth),s=Ea(n.scrollHeight,n.clientHeight,t.scrollHeight,t.clientHeight);let u=-r.scrollLeft+Us(e);const d=-r.scrollTop;return Jt(t).direction==="rtl"&&(u+=Ea(n.clientWidth,t.clientWidth)-l),{width:l,height:s,x:u,y:d}}const Kf=25;function aO(e,n){const r=yt(e),t=Er(e),l=r.visualViewport;let s=t.clientWidth,u=t.clientHeight,d=0,m=0;if(l){s=l.width,u=l.height;const f=pd();(!f||f&&n==="fixed")&&(d=l.offsetLeft,m=l.offsetTop)}const E=Us(t);if(E<=0){const f=t.ownerDocument,v=f.body,_=getComputedStyle(v),T=f.compatMode==="CSS1Compat"&&parseFloat(_.marginLeft)+parseFloat(_.marginRight)||0,k=Math.abs(t.clientWidth-v.clientWidth-T);k<=Kf&&(s-=k)}else E<=Kf&&(s+=E);return{width:s,height:u,x:d,y:m}}const lO=new Set(["absolute","fixed"]);function iO(e,n){const r=_a(e,!0,n==="fixed"),t=r.top+e.clientTop,l=r.left+e.clientLeft,s=mr(e)?Qa(e):cr(1),u=e.clientWidth*s.x,d=e.clientHeight*s.y,m=l*s.x,E=t*s.y;return{width:u,height:d,x:m,y:E}}function Mf(e,n,r){let t;if(n==="viewport")t=aO(e,r);else if(n==="document")t=rO(Er(e));else if(Hn(n))t=iO(n,r);else{const l=Uv(e);t={x:n.x-l.x,y:n.y-l.y,width:n.width,height:n.height}}return ys(t)}function jv(e,n){const r=Jr(e);return r===n||!Hn(r)||al(r)?!1:Jt(r).position==="fixed"||jv(r,n)}function sO(e,n){const r=n.get(e);if(r)return r;let t=$l(e,[],!1).filter(d=>Hn(d)&&ul(d)!=="body"),l=null;const s=Jt(e).position==="fixed";let u=s?Jr(e):e;for(;Hn(u)&&!al(u);){const d=Jt(u),m=hd(u);!m&&d.position==="fixed"&&(l=null),(s?!m&&!l:!m&&d.position==="static"&&!!l&&lO.has(l.position)||Zl(u)&&!m&&jv(e,u))?t=t.filter(f=>f!==u):l=d,u=Jr(u)}return n.set(e,t),t}function oO(e){let{element:n,boundary:r,rootBoundary:t,strategy:l}=e;const u=[...r==="clippingAncestors"?Bs(n)?[]:sO(n,this._c):[].concat(r),t],d=u[0],m=u.reduce((E,f)=>{const v=Mf(n,f,l);return E.top=Ea(v.top,E.top),E.right=rl(v.right,E.right),E.bottom=rl(v.bottom,E.bottom),E.left=Ea(v.left,E.left),E},Mf(n,d,l));return{width:m.right-m.left,height:m.bottom-m.top,x:m.left,y:m.top}}function uO(e){const{width:n,height:r}=xv(e);return{width:n,height:r}}function dO(e,n,r){const t=mr(n),l=Er(n),s=r==="fixed",u=_a(e,!0,s,n);let d={scrollLeft:0,scrollTop:0};const m=cr(0);function E(){m.x=Us(l)}if(t||!t&&!s)if((ul(n)!=="body"||Zl(l))&&(d=xs(n)),t){const T=_a(n,!0,s,n);m.x=T.x+n.clientLeft,m.y=T.y+n.clientTop}else l&&E();s&&!t&&l&&E();const f=l&&!t&&!s?Hv(l,d):cr(0),v=u.left+d.scrollLeft-m.x-f.x,_=u.top+d.scrollTop-m.y-f.y;return{x:v,y:_,width:u.width,height:u.height}}function fu(e){return Jt(e).position==="static"}function Gf(e,n){if(!mr(e)||Jt(e).position==="fixed")return null;if(n)return n(e);let r=e.offsetParent;return Er(e)===r&&(r=r.ownerDocument.body),r}function Cv(e,n){const r=yt(e);if(Bs(e))return r;if(!mr(e)){let l=Jr(e);for(;l&&!al(l);){if(Hn(l)&&!fu(l))return l;l=Jr(l)}return r}let t=Gf(e,n);for(;t&&YS(t)&&fu(t);)t=Gf(t,n);return t&&al(t)&&fu(t)&&!hd(t)?r:t||XS(e)||r}const cO=async function(e){const n=this.getOffsetParent||Cv,r=this.getDimensions,t=await r(e.floating);return{reference:dO(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:t.width,height:t.height}}};function mO(e){return Jt(e).direction==="rtl"}const fO={convertOffsetParentRelativeRectToViewportRelativeRect:nO,getDocumentElement:Er,getClippingRect:oO,getOffsetParent:Cv,getElementRects:cO,getClientRects:tO,getDimensions:uO,getScale:Qa,isElement:Hn,isRTL:mO};function qv(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function EO(e,n){let r=null,t;const l=Er(e);function s(){var d;clearTimeout(t),(d=r)==null||d.disconnect(),r=null}function u(d,m){d===void 0&&(d=!1),m===void 0&&(m=1),s();const E=e.getBoundingClientRect(),{left:f,top:v,width:_,height:T}=E;if(d||n(),!_||!T)return;const k=es(v),O=es(l.clientWidth-(f+_)),p=es(l.clientHeight-(v+T)),b=es(f),N={rootMargin:-k+"px "+-O+"px "+-p+"px "+-b+"px",threshold:Ea(0,rl(1,m))||1};let L=!0;function y(K){const F=K[0].intersectionRatio;if(F!==m){if(!L)return u();F?u(!1,F):t=setTimeout(()=>{u(!1,1e-7)},1e3)}F===1&&!qv(E,e.getBoundingClientRect())&&u(),L=!1}try{r=new IntersectionObserver(y,{...N,root:l.ownerDocument})}catch{r=new IntersectionObserver(y,N)}r.observe(e)}return u(!0),s}function vO(e,n,r,t){t===void 0&&(t={});const{ancestorScroll:l=!0,ancestorResize:s=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:m=!1}=t,E=Td(e),f=l||s?[...E?$l(E):[],...$l(n)]:[];f.forEach(b=>{l&&b.addEventListener("scroll",r,{passive:!0}),s&&b.addEventListener("resize",r)});const v=E&&d?EO(E,r):null;let _=-1,T=null;u&&(T=new ResizeObserver(b=>{let[S]=b;S&&S.target===E&&T&&(T.unobserve(n),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var N;(N=T)==null||N.observe(n)})),r()}),E&&!m&&T.observe(E),T.observe(n));let k,O=m?_a(e):null;m&&p();function p(){const b=_a(e);O&&!qv(O,b)&&r(),O=b,k=requestAnimationFrame(p)}return r(),()=>{var b;f.forEach(S=>{l&&S.removeEventListener("scroll",r),s&&S.removeEventListener("resize",r)}),v?.(),(b=T)==null||b.disconnect(),T=null,m&&cancelAnimationFrame(k)}}const gO=HS,_O=jS,hO=BS,Vf=VS,pO=(e,n,r)=>{const t=new Map,l={platform:fO,...r},s={...l.platform,_c:t};return GS(e,n,{...l,platform:s})};var TO=typeof document<"u",RO=function(){},_s=TO?D.useLayoutEffect:RO;function Ns(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let r,t,l;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==n.length)return!1;for(t=r;t--!==0;)if(!Ns(e[t],n[t]))return!1;return!0}if(l=Object.keys(e),r=l.length,r!==Object.keys(n).length)return!1;for(t=r;t--!==0;)if(!{}.hasOwnProperty.call(n,l[t]))return!1;for(t=r;t--!==0;){const s=l[t];if(!(s==="_owner"&&e.$$typeof)&&!Ns(e[s],n[s]))return!1}return!0}return e!==e&&n!==n}function Yv(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Bf(e,n){const r=Yv(e);return Math.round(n*r)/r}function Eu(e){const n=D.useRef(e);return _s(()=>{n.current=e}),n}function yO(e){e===void 0&&(e={});const{placement:n="bottom",strategy:r="absolute",middleware:t=[],platform:l,elements:{reference:s,floating:u}={},transform:d=!0,whileElementsMounted:m,open:E}=e,[f,v]=D.useState({x:0,y:0,strategy:r,placement:n,middlewareData:{},isPositioned:!1}),[_,T]=D.useState(t);Ns(_,t)||T(t);const[k,O]=D.useState(null),[p,b]=D.useState(null),S=D.useCallback(Q=>{Q!==K.current&&(K.current=Q,O(Q))},[]),N=D.useCallback(Q=>{Q!==F.current&&(F.current=Q,b(Q))},[]),L=s||k,y=u||p,K=D.useRef(null),F=D.useRef(null),G=D.useRef(f),H=m!=null,W=Eu(m),Y=Eu(l),x=Eu(E),V=D.useCallback(()=>{if(!K.current||!F.current)return;const Q={placement:n,strategy:r,middleware:_};Y.current&&(Q.platform=Y.current),pO(K.current,F.current,Q).then(oe=>{const Re={...oe,isPositioned:x.current!==!1};X.current&&!Ns(G.current,Re)&&(G.current=Re,dd.flushSync(()=>{v(Re)}))})},[_,n,r,Y,x]);_s(()=>{E===!1&&G.current.isPositioned&&(G.current.isPositioned=!1,v(Q=>({...Q,isPositioned:!1})))},[E]);const X=D.useRef(!1);_s(()=>(X.current=!0,()=>{X.current=!1}),[]),_s(()=>{if(L&&(K.current=L),y&&(F.current=y),L&&y){if(W.current)return W.current(L,y,V);V()}},[L,y,V,W,H]);const ne=D.useMemo(()=>({reference:K,floating:F,setReference:S,setFloating:N}),[S,N]),te=D.useMemo(()=>({reference:L,floating:y}),[L,y]),se=D.useMemo(()=>{const Q={position:r,left:0,top:0};if(!te.floating)return Q;const oe=Bf(te.floating,f.x),Re=Bf(te.floating,f.y);return d?{...Q,transform:"translate("+oe+"px, "+Re+"px)",...Yv(te.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:oe,top:Re}},[r,d,te.floating,f.x,f.y]);return D.useMemo(()=>({...f,update:V,refs:ne,elements:te,floatingStyles:se}),[f,V,ne,te,se])}const NO=e=>{function n(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:t,padding:l}=typeof e=="function"?e(r):e;return t&&n(t)?t.current!=null?Vf({element:t.current,padding:l}).fn(r):{}:t?Vf({element:t,padding:l}).fn(r):{}}}},AO=(e,n)=>({...gO(e),options:[e,n]}),kO=(e,n)=>({..._O(e),options:[e,n]}),bO=(e,n)=>({...hO(e),options:[e,n]}),SO=(e,n)=>({...NO(e),options:[e,n]}),xf=/(\w+)/g;function OO(e,n){const r=Array.isArray(e)?e:DO(e);for(const t of n){if(!t)continue;let l=t;for(let s=0;s<r.length;s++){const u=l[r[s]];u!==void 0&&(l=u)}if(typeof l=="string")return l}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function DO(e){const n=[];let r=xf.exec(e);for(;r;){const[,t,l]=r;n.push(t||l),r=xf.exec(e)}return n}const IO=/{[^}]*}/g;function Kt(e,...n){const r=vd(),t=r.translations||[],l=[...n,...Array.isArray(t)?t.map(u=>u[e]):[t[e]],r.locale[e]];return(u,d)=>{const m=OO(u,l);return d?m.replace(IO,E=>{const f=E.substring(1,E.length-1);if(d[f]===void 0){const v=JSON.stringify(d);throw new Error(`Error translating key '${u}'. No replacement syntax ({}) found for key '${f}'. The following replacements were passed: '${v}'`)}return d[f]}):m}}function $v(){const e=vd(),n=e.translations||[],r=Array.isArray(n)?n.map(t=>t.global):[n.global];r.push(e.locale.global);for(const t of r)if(t?.dateLocale)return t.dateLocale;throw new Error("dateLocale not found.")}var LO=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const PO=D.forwardRef((e,n)=>{var{className:r,size:t="medium",title:l,transparent:s=!1,variant:u="neutral",id:d,"data-color":m}=e,E=LO(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:f}=Ee(),v=Xt(),_=Kt("Loader");return g.createElement("svg",Object.assign({"aria-labelledby":d??`loader-${v}`,ref:n,className:f("navds-loader",r,`navds-loader--${t}`,`navds-loader--${u}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":m??wO(u)},fn(E,["children"]),{"data-variant":u}),g.createElement("title",{id:d??`loader-${v}`},l||_("title")),g.createElement("circle",{className:f("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),g.createElement("circle",{className:f("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function wO(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var FO=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Cn=D.forwardRef((e,n)=>{var{as:r="button",variant:t="primary",className:l,children:s,size:u="medium",loading:d=!1,disabled:m,icon:E,iconPosition:f="left",onKeyUp:v,"data-color":_}=e,T=FO(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:k}=Ee(),O=m||d?fn(T,["href"]):T,p=b=>{b.key===" "&&!m&&!d&&b.currentTarget.click()};return g.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":_??KO(t),"data-variant":MO(t)},O,{ref:n,onKeyUp:dr(v,p),className:k(l,"navds-button",`navds-button--${t}`,`navds-button--${u}`,{"navds-button--loading":d,"navds-button--icon-only":!!E&&!s,"navds-button--disabled":m??d}),disabled:m??d?!0:void 0}),E&&f==="left"&&g.createElement("span",{className:k("navds-button__icon")},E),d&&g.createElement(PO,{size:u}),s&&g.createElement(Wt,{as:"span",size:u==="medium"?"medium":"small"},s),E&&f==="right"&&g.createElement("span",{className:k("navds-button__icon")},E))});function KO(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function MO(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var GO=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const VO={error:Nk,warning:tk,info:ak,success:QA},Wv=D.forwardRef((e,n)=>{var{children:r,className:t,variant:l,size:s="medium",fullWidth:u=!1,contentMaxWidth:d=!0,inline:m=!1,closeButton:E=!1,onClose:f}=e,v=GO(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:_}=Ee(),T=Kt("Alert"),k=VO[l];return g.createElement("div",Object.assign({},v,{"data-color":BO(l),"data-variant":l,ref:n,className:_(t,"navds-alert",`navds-alert--${l}`,`navds-alert--${s}`,{"navds-alert--full-width":u,"navds-alert--inline":m,"navds-alert--close-button":E})}),g.createElement(k,{title:T(l),className:_("navds-alert__icon")}),g.createElement(cd,{as:"div",size:s,className:_("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},r),E&&!m&&g.createElement("div",{className:_("navds-alert__button-wrapper")},g.createElement(Cn,{className:_("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:f,type:"button",icon:g.createElement(ps,{title:["error","warning"].includes(l)?T("closeAlert"):T("closeMessage")})})))});function BO(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function Ql(e,n,r){const t=Ie(e,r?.in);return isNaN(n)?qe(r?.in||e,NaN):(n&&t.setDate(t.getDate()+n),t)}function Rd(e,n,r){const t=Ie(e,r?.in);if(isNaN(n))return qe(e,NaN);if(!n)return t;const l=t.getDate(),s=qe(e,t.getTime());s.setMonth(t.getMonth()+n+1,0);const u=s.getDate();return l>=u?s:(t.setFullYear(s.getFullYear(),s.getMonth(),l),t)}function As(e,n){const r=Ie(e,n?.in).getDay();return r===0||r===6}function ha(e,n){return wr(e,{...n,weekStartsOn:1})}function Jv(e,n){const r=Ie(e,n?.in),t=r.getFullYear(),l=qe(r,0);l.setFullYear(t+1,0,4),l.setHours(0,0,0,0);const s=ha(l),u=qe(r,0);u.setFullYear(t,0,4),u.setHours(0,0,0,0);const d=ha(u);return r.getTime()>=s.getTime()?t+1:r.getTime()>=d.getTime()?t:t-1}function ks(e){const n=Ie(e),r=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return r.setUTCFullYear(n.getFullYear()),+e-+r}function Fr(e,n){const r=Ie(e,n?.in);return r.setHours(0,0,0,0),r}function Wr(e,n,r){const[t,l]=ol(r?.in,e,n),s=Fr(t),u=Fr(l),d=+s-ks(s),m=+u-ks(u);return Math.round((d-m)/Dk)}function xO(e,n){const r=Jv(e,n),t=qe(e,0);return t.setFullYear(r,0,4),t.setHours(0,0,0,0),ha(t)}function UO(e,n,r){return Ql(e,n*7,r)}function yd(e,n,r){return Rd(e,n*12,r)}function HO(e,n){let r,t=n?.in;return e.forEach(l=>{!t&&typeof l=="object"&&(t=qe.bind(null,l));const s=Ie(l,t);(!r||r<s||isNaN(+s))&&(r=s)}),qe(t,r||NaN)}function jO(e,n){let r,t=n?.in;return e.forEach(l=>{!t&&typeof l=="object"&&(t=qe.bind(null,l));const s=Ie(l,t);(!r||r>s||isNaN(+s))&&(r=s)}),qe(t,r||NaN)}function Nd(e,n,r){const[t,l]=ol(r?.in,e,n);return+Fr(t)==+Fr(l)}function zv(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function CO(e){return!(!zv(e)&&typeof e!="number"||isNaN(+Ie(e)))}function qO(e,n,r){const[t,l]=ol(r?.in,e,n),s=t.getFullYear()-l.getFullYear(),u=t.getMonth()-l.getMonth();return s*12+u}function Xv(e,n){const r=Ie(e,n?.in),t=r.getMonth();return r.setFullYear(r.getFullYear(),t+1,0),r.setHours(23,59,59,999),r}function YO(e,n){const[r,t]=ol(e,n.start,n.end);return{start:r,end:t}}function Zv(e,n){const{start:r,end:t}=YO(n?.in,e);let l=+r>+t;const s=l?+r:+t,u=l?t:r;u.setHours(0,0,0,0),u.setDate(1);let d=1;const m=[];for(;+u<=s;)m.push(qe(r,u)),u.setMonth(u.getMonth()+d);return l?m.reverse():m}function pa(e,n){const r=Ie(e,n?.in);return r.setDate(1),r.setHours(0,0,0,0),r}function Hs(e,n){const r=Ie(e,n?.in),t=r.getFullYear();return r.setFullYear(t+1,0,0),r.setHours(23,59,59,999),r}function ei(e,n){const r=Ie(e,n?.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Qv(e,n){const r=Sa(),t=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,l=Ie(e,n?.in),s=l.getDay(),u=(s<t?-7:0)+6-(s-t);return l.setDate(l.getDate()+u),l.setHours(23,59,59,999),l}function $O(e,n){return Qv(e,{...n,weekStartsOn:1})}function WO(e,n){const r=Ie(e,n?.in);return Wr(r,ei(r))+1}function Ad(e,n){const r=Ie(e,n?.in),t=+ha(r)-+xO(r);return Math.round(t/kv)+1}function kd(e,n){const r=Ie(e,n?.in),t=r.getFullYear(),l=Sa(),s=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??l.firstWeekContainsDate??l.locale?.options?.firstWeekContainsDate??1,u=qe(n?.in||e,0);u.setFullYear(t+1,0,s),u.setHours(0,0,0,0);const d=wr(u,n),m=qe(n?.in||e,0);m.setFullYear(t,0,s),m.setHours(0,0,0,0);const E=wr(m,n);return+r>=+d?t+1:+r>=+E?t:t-1}function JO(e,n){const r=Sa(),t=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,l=kd(e,n),s=qe(n?.in||e,0);return s.setFullYear(l,0,t),s.setHours(0,0,0,0),wr(s,n)}function bd(e,n){const r=Ie(e,n?.in),t=+wr(r,n)-+JO(r,n);return Math.round(t/kv)+1}function Ce(e,n){const r=e<0?"-":"",t=Math.abs(e).toString().padStart(n,"0");return r+t}const Yr={y(e,n){const r=e.getFullYear(),t=r>0?r:1-r;return Ce(n==="yy"?t%100:t,n.length)},M(e,n){const r=e.getMonth();return n==="M"?String(r+1):Ce(r+1,2)},d(e,n){return Ce(e.getDate(),n.length)},a(e,n){const r=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,n){return Ce(e.getHours()%12||12,n.length)},H(e,n){return Ce(e.getHours(),n.length)},m(e,n){return Ce(e.getMinutes(),n.length)},s(e,n){return Ce(e.getSeconds(),n.length)},S(e,n){const r=n.length,t=e.getMilliseconds(),l=Math.trunc(t*Math.pow(10,r-3));return Ce(l,n.length)}},Ya={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Uf={G:function(e,n,r){const t=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(t,{width:"abbreviated"});case"GGGGG":return r.era(t,{width:"narrow"});case"GGGG":default:return r.era(t,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){const t=e.getFullYear(),l=t>0?t:1-t;return r.ordinalNumber(l,{unit:"year"})}return Yr.y(e,n)},Y:function(e,n,r,t){const l=kd(e,t),s=l>0?l:1-l;if(n==="YY"){const u=s%100;return Ce(u,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Ce(s,n.length)},R:function(e,n){const r=Jv(e);return Ce(r,n.length)},u:function(e,n){const r=e.getFullYear();return Ce(r,n.length)},Q:function(e,n,r){const t=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(t);case"QQ":return Ce(t,2);case"Qo":return r.ordinalNumber(t,{unit:"quarter"});case"QQQ":return r.quarter(t,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(t,{width:"wide",context:"formatting"})}},q:function(e,n,r){const t=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(t);case"qq":return Ce(t,2);case"qo":return r.ordinalNumber(t,{unit:"quarter"});case"qqq":return r.quarter(t,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(t,{width:"wide",context:"standalone"})}},M:function(e,n,r){const t=e.getMonth();switch(n){case"M":case"MM":return Yr.M(e,n);case"Mo":return r.ordinalNumber(t+1,{unit:"month"});case"MMM":return r.month(t,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(t,{width:"wide",context:"formatting"})}},L:function(e,n,r){const t=e.getMonth();switch(n){case"L":return String(t+1);case"LL":return Ce(t+1,2);case"Lo":return r.ordinalNumber(t+1,{unit:"month"});case"LLL":return r.month(t,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(t,{width:"wide",context:"standalone"})}},w:function(e,n,r,t){const l=bd(e,t);return n==="wo"?r.ordinalNumber(l,{unit:"week"}):Ce(l,n.length)},I:function(e,n,r){const t=Ad(e);return n==="Io"?r.ordinalNumber(t,{unit:"week"}):Ce(t,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):Yr.d(e,n)},D:function(e,n,r){const t=WO(e);return n==="Do"?r.ordinalNumber(t,{unit:"dayOfYear"}):Ce(t,n.length)},E:function(e,n,r){const t=e.getDay();switch(n){case"E":case"EE":case"EEE":return r.day(t,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(t,{width:"short",context:"formatting"});case"EEEE":default:return r.day(t,{width:"wide",context:"formatting"})}},e:function(e,n,r,t){const l=e.getDay(),s=(l-t.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Ce(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(l,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(l,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(l,{width:"short",context:"formatting"});case"eeee":default:return r.day(l,{width:"wide",context:"formatting"})}},c:function(e,n,r,t){const l=e.getDay(),s=(l-t.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Ce(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(l,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(l,{width:"narrow",context:"standalone"});case"cccccc":return r.day(l,{width:"short",context:"standalone"});case"cccc":default:return r.day(l,{width:"wide",context:"standalone"})}},i:function(e,n,r){const t=e.getDay(),l=t===0?7:t;switch(n){case"i":return String(l);case"ii":return Ce(l,n.length);case"io":return r.ordinalNumber(l,{unit:"day"});case"iii":return r.day(t,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(t,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(t,{width:"short",context:"formatting"});case"iiii":default:return r.day(t,{width:"wide",context:"formatting"})}},a:function(e,n,r){const l=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(l,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(l,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(l,{width:"wide",context:"formatting"})}},b:function(e,n,r){const t=e.getHours();let l;switch(t===12?l=Ya.noon:t===0?l=Ya.midnight:l=t/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(l,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(l,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(l,{width:"wide",context:"formatting"})}},B:function(e,n,r){const t=e.getHours();let l;switch(t>=17?l=Ya.evening:t>=12?l=Ya.afternoon:t>=4?l=Ya.morning:l=Ya.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(l,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(l,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){let t=e.getHours()%12;return t===0&&(t=12),r.ordinalNumber(t,{unit:"hour"})}return Yr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):Yr.H(e,n)},K:function(e,n,r){const t=e.getHours()%12;return n==="Ko"?r.ordinalNumber(t,{unit:"hour"}):Ce(t,n.length)},k:function(e,n,r){let t=e.getHours();return t===0&&(t=24),n==="ko"?r.ordinalNumber(t,{unit:"hour"}):Ce(t,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Yr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Yr.s(e,n)},S:function(e,n){return Yr.S(e,n)},X:function(e,n,r){const t=e.getTimezoneOffset();if(t===0)return"Z";switch(n){case"X":return jf(t);case"XXXX":case"XX":return ma(t);case"XXXXX":case"XXX":default:return ma(t,":")}},x:function(e,n,r){const t=e.getTimezoneOffset();switch(n){case"x":return jf(t);case"xxxx":case"xx":return ma(t);case"xxxxx":case"xxx":default:return ma(t,":")}},O:function(e,n,r){const t=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Hf(t,":");case"OOOO":default:return"GMT"+ma(t,":")}},z:function(e,n,r){const t=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Hf(t,":");case"zzzz":default:return"GMT"+ma(t,":")}},t:function(e,n,r){const t=Math.trunc(+e/1e3);return Ce(t,n.length)},T:function(e,n,r){return Ce(+e,n.length)}};function Hf(e,n=""){const r=e>0?"-":"+",t=Math.abs(e),l=Math.trunc(t/60),s=t%60;return s===0?r+String(l):r+String(l)+n+Ce(s,2)}function jf(e,n){return e%60===0?(e>0?"-":"+")+Ce(Math.abs(e)/60,2):ma(e,n)}function ma(e,n=""){const r=e>0?"-":"+",t=Math.abs(e),l=Ce(Math.trunc(t/60),2),s=Ce(t%60,2);return r+l+n+s}const Cf=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},eg=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},zO=(e,n)=>{const r=e.match(/(P+)(p+)?/)||[],t=r[1],l=r[2];if(!l)return Cf(e,n);let s;switch(t){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",Cf(t,n)).replace("{{time}}",eg(l,n))},Fu={p:eg,P:zO},XO=/^D+$/,ZO=/^Y+$/,QO=["D","DD","YY","YYYY"];function ng(e){return XO.test(e)}function tg(e){return ZO.test(e)}function Ku(e,n,r){const t=eD(e,n,r);if(console.warn(t),QO.includes(e))throw new RangeError(t)}function eD(e,n,r){const t=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${t} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const nD=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tD=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rD=/^'([^]*?)'?$/,aD=/''/g,lD=/[a-zA-Z]/;function Ta(e,n,r){const t=Sa(),l=r?.locale??t.locale??Gs,s=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,u=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,d=Ie(e,r?.in);if(!CO(d))throw new RangeError("Invalid time value");let m=n.match(tD).map(f=>{const v=f[0];if(v==="p"||v==="P"){const _=Fu[v];return _(f,l.formatLong)}return f}).join("").match(nD).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const v=f[0];if(v==="'")return{isToken:!1,value:iD(f)};if(Uf[v])return{isToken:!0,value:f};if(v.match(lD))throw new RangeError("Format string contains an unescaped latin alphabet character `"+v+"`");return{isToken:!1,value:f}});l.localize.preprocessor&&(m=l.localize.preprocessor(d,m));const E={firstWeekContainsDate:s,weekStartsOn:u,locale:l};return m.map(f=>{if(!f.isToken)return f.value;const v=f.value;(!r?.useAdditionalWeekYearTokens&&tg(v)||!r?.useAdditionalDayOfYearTokens&&ng(v))&&Ku(v,n,String(e));const _=Uf[v[0]];return _(d,v,l.localize,E)}).join("")}function iD(e){const n=e.match(rD);return n?n[1].replace(aD,"'"):e}function sD(e,n){const r=Ie(e,n?.in),t=r.getFullYear(),l=r.getMonth(),s=qe(r,0);return s.setFullYear(t,l+1,0),s.setHours(0,0,0,0),s.getDate()}function oD(){return Object.assign({},Sa())}function uD(e,n){const r=Ie(e,n?.in).getDay();return r===0?7:r}function Sd(e,n){return Ie(e,n?.in).getMonth()}function Od(e,n){return Ie(e,n?.in).getFullYear()}function rg(e,n){return+Ie(e)>+Ie(n)}function ni(e,n){return+Ie(e)<+Ie(n)}function dD(e,n){const r=cD(n)?new n(0):qe(n,0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}function cD(e){return typeof e=="function"&&e.prototype?.constructor===e}const mD=10;class ag{subPriority=0;validate(n,r){return!0}}class fD extends ag{constructor(n,r,t,l,s){super(),this.value=n,this.validateValue=r,this.setValue=t,this.priority=l,s&&(this.subPriority=s)}validate(n,r){return this.validateValue(n,this.value,r)}set(n,r,t){return this.setValue(n,r,this.value,t)}}class ED extends ag{priority=mD;subPriority=-1;constructor(n,r){super(),this.context=n||(t=>qe(r,t))}set(n,r){return r.timestampIsSet?n:qe(n,dD(n,this.context))}}class xe{run(n,r,t,l){const s=this.parse(n,r,t,l);return s?{setter:new fD(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(n,r,t){return!0}}class vD extends xe{priority=140;parse(n,r,t){switch(r){case"G":case"GG":case"GGG":return t.era(n,{width:"abbreviated"})||t.era(n,{width:"narrow"});case"GGGGG":return t.era(n,{width:"narrow"});case"GGGG":default:return t.era(n,{width:"wide"})||t.era(n,{width:"abbreviated"})||t.era(n,{width:"narrow"})}}set(n,r,t){return r.era=t,n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}incompatibleTokens=["R","u","t","T"]}const Rn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},sr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function yn(e,n){return e&&{value:n(e.value),rest:e.rest}}function on(e,n){const r=n.match(e);return r?{value:parseInt(r[0],10),rest:n.slice(r[0].length)}:null}function or(e,n){const r=n.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:n.slice(1)};const t=r[1]==="+"?1:-1,l=r[2]?parseInt(r[2],10):0,s=r[3]?parseInt(r[3],10):0,u=r[5]?parseInt(r[5],10):0;return{value:t*(l*Lk+s*Ik+u*Pk),rest:n.slice(r[0].length)}}function lg(e){return on(Rn.anyDigitsSigned,e)}function En(e,n){switch(e){case 1:return on(Rn.singleDigit,n);case 2:return on(Rn.twoDigits,n);case 3:return on(Rn.threeDigits,n);case 4:return on(Rn.fourDigits,n);default:return on(new RegExp("^\\d{1,"+e+"}"),n)}}function bs(e,n){switch(e){case 1:return on(Rn.singleDigitSigned,n);case 2:return on(Rn.twoDigitsSigned,n);case 3:return on(Rn.threeDigitsSigned,n);case 4:return on(Rn.fourDigitsSigned,n);default:return on(new RegExp("^-?\\d{1,"+e+"}"),n)}}function Dd(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function ig(e,n){const r=n>0,t=r?n:1-n;let l;if(t<=50)l=e||100;else{const s=t+50,u=Math.trunc(s/100)*100,d=e>=s%100;l=e+u-(d?100:0)}return r?l:1-l}function sg(e){return e%400===0||e%4===0&&e%100!==0}class gD extends xe{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(n,r,t){const l=s=>({year:s,isTwoDigitYear:r==="yy"});switch(r){case"y":return yn(En(4,n),l);case"yo":return yn(t.ordinalNumber(n,{unit:"year"}),l);default:return yn(En(r.length,n),l)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,t){const l=n.getFullYear();if(t.isTwoDigitYear){const u=ig(t.year,l);return n.setFullYear(u,0,1),n.setHours(0,0,0,0),n}const s=!("era"in r)||r.era===1?t.year:1-t.year;return n.setFullYear(s,0,1),n.setHours(0,0,0,0),n}}class _D extends xe{priority=130;parse(n,r,t){const l=s=>({year:s,isTwoDigitYear:r==="YY"});switch(r){case"Y":return yn(En(4,n),l);case"Yo":return yn(t.ordinalNumber(n,{unit:"year"}),l);default:return yn(En(r.length,n),l)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,t,l){const s=kd(n,l);if(t.isTwoDigitYear){const d=ig(t.year,s);return n.setFullYear(d,0,l.firstWeekContainsDate),n.setHours(0,0,0,0),wr(n,l)}const u=!("era"in r)||r.era===1?t.year:1-t.year;return n.setFullYear(u,0,l.firstWeekContainsDate),n.setHours(0,0,0,0),wr(n,l)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class hD extends xe{priority=130;parse(n,r){return bs(r==="R"?4:r.length,n)}set(n,r,t){const l=qe(n,0);return l.setFullYear(t,0,4),l.setHours(0,0,0,0),ha(l)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class pD extends xe{priority=130;parse(n,r){return bs(r==="u"?4:r.length,n)}set(n,r,t){return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class TD extends xe{priority=120;parse(n,r,t){switch(r){case"Q":case"QQ":return En(r.length,n);case"Qo":return t.ordinalNumber(n,{unit:"quarter"});case"QQQ":return t.quarter(n,{width:"abbreviated",context:"formatting"})||t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(n,{width:"wide",context:"formatting"})||t.quarter(n,{width:"abbreviated",context:"formatting"})||t.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,t){return n.setMonth((t-1)*3,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class RD extends xe{priority=120;parse(n,r,t){switch(r){case"q":case"qq":return En(r.length,n);case"qo":return t.ordinalNumber(n,{unit:"quarter"});case"qqq":return t.quarter(n,{width:"abbreviated",context:"standalone"})||t.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return t.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(n,{width:"wide",context:"standalone"})||t.quarter(n,{width:"abbreviated",context:"standalone"})||t.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,t){return n.setMonth((t-1)*3,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class yD extends xe{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(n,r,t){const l=s=>s-1;switch(r){case"M":return yn(on(Rn.month,n),l);case"MM":return yn(En(2,n),l);case"Mo":return yn(t.ordinalNumber(n,{unit:"month"}),l);case"MMM":return t.month(n,{width:"abbreviated",context:"formatting"})||t.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return t.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(n,{width:"wide",context:"formatting"})||t.month(n,{width:"abbreviated",context:"formatting"})||t.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,t){return n.setMonth(t,1),n.setHours(0,0,0,0),n}}class ND extends xe{priority=110;parse(n,r,t){const l=s=>s-1;switch(r){case"L":return yn(on(Rn.month,n),l);case"LL":return yn(En(2,n),l);case"Lo":return yn(t.ordinalNumber(n,{unit:"month"}),l);case"LLL":return t.month(n,{width:"abbreviated",context:"standalone"})||t.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return t.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(n,{width:"wide",context:"standalone"})||t.month(n,{width:"abbreviated",context:"standalone"})||t.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,t){return n.setMonth(t,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function AD(e,n,r){const t=Ie(e,r?.in),l=bd(t,r)-n;return t.setDate(t.getDate()-l*7),Ie(t,r?.in)}class kD extends xe{priority=100;parse(n,r,t){switch(r){case"w":return on(Rn.week,n);case"wo":return t.ordinalNumber(n,{unit:"week"});default:return En(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,t,l){return wr(AD(n,t,l),l)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function bD(e,n,r){const t=Ie(e,r?.in),l=Ad(t,r)-n;return t.setDate(t.getDate()-l*7),t}class SD extends xe{priority=100;parse(n,r,t){switch(r){case"I":return on(Rn.week,n);case"Io":return t.ordinalNumber(n,{unit:"week"});default:return En(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,t){return ha(bD(n,t))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const OD=[31,28,31,30,31,30,31,31,30,31,30,31],DD=[31,29,31,30,31,30,31,31,30,31,30,31];class ID extends xe{priority=90;subPriority=1;parse(n,r,t){switch(r){case"d":return on(Rn.date,n);case"do":return t.ordinalNumber(n,{unit:"date"});default:return En(r.length,n)}}validate(n,r){const t=n.getFullYear(),l=sg(t),s=n.getMonth();return l?r>=1&&r<=DD[s]:r>=1&&r<=OD[s]}set(n,r,t){return n.setDate(t),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class LD extends xe{priority=90;subpriority=1;parse(n,r,t){switch(r){case"D":case"DD":return on(Rn.dayOfYear,n);case"Do":return t.ordinalNumber(n,{unit:"date"});default:return En(r.length,n)}}validate(n,r){const t=n.getFullYear();return sg(t)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,t){return n.setMonth(0,t),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function Id(e,n,r){const t=Sa(),l=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,s=Ie(e,r?.in),u=s.getDay(),m=(n%7+7)%7,E=7-l,f=n<0||n>6?n-(u+E)%7:(m+E)%7-(u+E)%7;return Ql(s,f,r)}class PD extends xe{priority=90;parse(n,r,t){switch(r){case"E":case"EE":case"EEE":return t.day(n,{width:"abbreviated",context:"formatting"})||t.day(n,{width:"short",context:"formatting"})||t.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return t.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(n,{width:"short",context:"formatting"})||t.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return t.day(n,{width:"wide",context:"formatting"})||t.day(n,{width:"abbreviated",context:"formatting"})||t.day(n,{width:"short",context:"formatting"})||t.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,t,l){return n=Id(n,t,l),n.setHours(0,0,0,0),n}incompatibleTokens=["D","i","e","c","t","T"]}class wD extends xe{priority=90;parse(n,r,t,l){const s=u=>{const d=Math.floor((u-1)/7)*7;return(u+l.weekStartsOn+6)%7+d};switch(r){case"e":case"ee":return yn(En(r.length,n),s);case"eo":return yn(t.ordinalNumber(n,{unit:"day"}),s);case"eee":return t.day(n,{width:"abbreviated",context:"formatting"})||t.day(n,{width:"short",context:"formatting"})||t.day(n,{width:"narrow",context:"formatting"});case"eeeee":return t.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(n,{width:"short",context:"formatting"})||t.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return t.day(n,{width:"wide",context:"formatting"})||t.day(n,{width:"abbreviated",context:"formatting"})||t.day(n,{width:"short",context:"formatting"})||t.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,t,l){return n=Id(n,t,l),n.setHours(0,0,0,0),n}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class FD extends xe{priority=90;parse(n,r,t,l){const s=u=>{const d=Math.floor((u-1)/7)*7;return(u+l.weekStartsOn+6)%7+d};switch(r){case"c":case"cc":return yn(En(r.length,n),s);case"co":return yn(t.ordinalNumber(n,{unit:"day"}),s);case"ccc":return t.day(n,{width:"abbreviated",context:"standalone"})||t.day(n,{width:"short",context:"standalone"})||t.day(n,{width:"narrow",context:"standalone"});case"ccccc":return t.day(n,{width:"narrow",context:"standalone"});case"cccccc":return t.day(n,{width:"short",context:"standalone"})||t.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return t.day(n,{width:"wide",context:"standalone"})||t.day(n,{width:"abbreviated",context:"standalone"})||t.day(n,{width:"short",context:"standalone"})||t.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,t,l){return n=Id(n,t,l),n.setHours(0,0,0,0),n}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function KD(e,n,r){const t=Ie(e,r?.in),l=uD(t,r),s=n-l;return Ql(t,s,r)}class MD extends xe{priority=90;parse(n,r,t){const l=s=>s===0?7:s;switch(r){case"i":case"ii":return En(r.length,n);case"io":return t.ordinalNumber(n,{unit:"day"});case"iii":return yn(t.day(n,{width:"abbreviated",context:"formatting"})||t.day(n,{width:"short",context:"formatting"})||t.day(n,{width:"narrow",context:"formatting"}),l);case"iiiii":return yn(t.day(n,{width:"narrow",context:"formatting"}),l);case"iiiiii":return yn(t.day(n,{width:"short",context:"formatting"})||t.day(n,{width:"narrow",context:"formatting"}),l);case"iiii":default:return yn(t.day(n,{width:"wide",context:"formatting"})||t.day(n,{width:"abbreviated",context:"formatting"})||t.day(n,{width:"short",context:"formatting"})||t.day(n,{width:"narrow",context:"formatting"}),l)}}validate(n,r){return r>=1&&r<=7}set(n,r,t){return n=KD(n,t),n.setHours(0,0,0,0),n}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class GD extends xe{priority=80;parse(n,r,t){switch(r){case"a":case"aa":case"aaa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"})||t.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})||t.dayPeriod(n,{width:"abbreviated",context:"formatting"})||t.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,t){return n.setHours(Dd(t),0,0,0),n}incompatibleTokens=["b","B","H","k","t","T"]}class VD extends xe{priority=80;parse(n,r,t){switch(r){case"b":case"bb":case"bbb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"})||t.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})||t.dayPeriod(n,{width:"abbreviated",context:"formatting"})||t.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,t){return n.setHours(Dd(t),0,0,0),n}incompatibleTokens=["a","B","H","k","t","T"]}class BD extends xe{priority=80;parse(n,r,t){switch(r){case"B":case"BB":case"BBB":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"})||t.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})||t.dayPeriod(n,{width:"abbreviated",context:"formatting"})||t.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,t){return n.setHours(Dd(t),0,0,0),n}incompatibleTokens=["a","b","t","T"]}class xD extends xe{priority=70;parse(n,r,t){switch(r){case"h":return on(Rn.hour12h,n);case"ho":return t.ordinalNumber(n,{unit:"hour"});default:return En(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,t){const l=n.getHours()>=12;return l&&t<12?n.setHours(t+12,0,0,0):!l&&t===12?n.setHours(0,0,0,0):n.setHours(t,0,0,0),n}incompatibleTokens=["H","K","k","t","T"]}class UD extends xe{priority=70;parse(n,r,t){switch(r){case"H":return on(Rn.hour23h,n);case"Ho":return t.ordinalNumber(n,{unit:"hour"});default:return En(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,t){return n.setHours(t,0,0,0),n}incompatibleTokens=["a","b","h","K","k","t","T"]}class HD extends xe{priority=70;parse(n,r,t){switch(r){case"K":return on(Rn.hour11h,n);case"Ko":return t.ordinalNumber(n,{unit:"hour"});default:return En(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,t){return n.getHours()>=12&&t<12?n.setHours(t+12,0,0,0):n.setHours(t,0,0,0),n}incompatibleTokens=["h","H","k","t","T"]}class jD extends xe{priority=70;parse(n,r,t){switch(r){case"k":return on(Rn.hour24h,n);case"ko":return t.ordinalNumber(n,{unit:"hour"});default:return En(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,t){const l=t<=24?t%24:t;return n.setHours(l,0,0,0),n}incompatibleTokens=["a","b","h","H","K","t","T"]}class CD extends xe{priority=60;parse(n,r,t){switch(r){case"m":return on(Rn.minute,n);case"mo":return t.ordinalNumber(n,{unit:"minute"});default:return En(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,t){return n.setMinutes(t,0,0),n}incompatibleTokens=["t","T"]}class qD extends xe{priority=50;parse(n,r,t){switch(r){case"s":return on(Rn.second,n);case"so":return t.ordinalNumber(n,{unit:"second"});default:return En(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,t){return n.setSeconds(t,0),n}incompatibleTokens=["t","T"]}class YD extends xe{priority=30;parse(n,r){const t=l=>Math.trunc(l*Math.pow(10,-r.length+3));return yn(En(r.length,n),t)}set(n,r,t){return n.setMilliseconds(t),n}incompatibleTokens=["t","T"]}class $D extends xe{priority=10;parse(n,r){switch(r){case"X":return or(sr.basicOptionalMinutes,n);case"XX":return or(sr.basic,n);case"XXXX":return or(sr.basicOptionalSeconds,n);case"XXXXX":return or(sr.extendedOptionalSeconds,n);case"XXX":default:return or(sr.extended,n)}}set(n,r,t){return r.timestampIsSet?n:qe(n,n.getTime()-ks(n)-t)}incompatibleTokens=["t","T","x"]}class WD extends xe{priority=10;parse(n,r){switch(r){case"x":return or(sr.basicOptionalMinutes,n);case"xx":return or(sr.basic,n);case"xxxx":return or(sr.basicOptionalSeconds,n);case"xxxxx":return or(sr.extendedOptionalSeconds,n);case"xxx":default:return or(sr.extended,n)}}set(n,r,t){return r.timestampIsSet?n:qe(n,n.getTime()-ks(n)-t)}incompatibleTokens=["t","T","X"]}class JD extends xe{priority=40;parse(n){return lg(n)}set(n,r,t){return[qe(n,t*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class zD extends xe{priority=20;parse(n){return lg(n)}set(n,r,t){return[qe(n,t),{timestampIsSet:!0}]}incompatibleTokens="*"}const XD={G:new vD,y:new gD,Y:new _D,R:new hD,u:new pD,Q:new TD,q:new RD,M:new yD,L:new ND,w:new kD,I:new SD,d:new ID,D:new LD,E:new PD,e:new wD,c:new FD,i:new MD,a:new GD,b:new VD,B:new BD,h:new xD,H:new UD,K:new HD,k:new jD,m:new CD,s:new qD,S:new YD,X:new $D,x:new WD,t:new JD,T:new zD},ZD=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,QD=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,e1=/^'([^]*?)'?$/,n1=/''/g,t1=/\S/,r1=/[a-zA-Z]/;function el(e,n,r,t){const l=()=>qe(t?.in||r,NaN),s=oD(),u=t?.locale??s.locale??Gs,d=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,m=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0;if(!n)return e?l():Ie(r,t?.in);const E={firstWeekContainsDate:d,weekStartsOn:m,locale:u},f=[new ED(t?.in,r)],v=n.match(QD).map(p=>{const b=p[0];if(b in Fu){const S=Fu[b];return S(p,u.formatLong)}return p}).join("").match(ZD),_=[];for(let p of v){!t?.useAdditionalWeekYearTokens&&tg(p)&&Ku(p,n,e),!t?.useAdditionalDayOfYearTokens&&ng(p)&&Ku(p,n,e);const b=p[0],S=XD[b];if(S){const{incompatibleTokens:N}=S;if(Array.isArray(N)){const y=_.find(K=>N.includes(K.token)||K.token===b);if(y)throw new RangeError(`The format string mustn't contain \`${y.fullToken}\` and \`${p}\` at the same time`)}else if(S.incompatibleTokens==="*"&&_.length>0)throw new RangeError(`The format string mustn't contain \`${p}\` and any other token at the same time`);_.push({token:b,fullToken:p});const L=S.run(e,p,u.match,E);if(!L)return l();f.push(L.setter),e=L.rest}else{if(b.match(r1))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");if(p==="''"?p="'":b==="'"&&(p=a1(p)),e.indexOf(p)===0)e=e.slice(p.length);else return l()}}if(e.length>0&&t1.test(e))return l();const T=f.map(p=>p.priority).sort((p,b)=>b-p).filter((p,b,S)=>S.indexOf(p)===b).map(p=>f.filter(b=>b.priority===p).sort((b,S)=>S.subPriority-b.subPriority)).map(p=>p[0]);let k=Ie(r,t?.in);if(isNaN(+k))return l();const O={};for(const p of T){if(!p.validate(k,E))return l();const b=p.set(k,O,E);Array.isArray(b)?(k=b[0],Object.assign(O,b[1])):k=b}return k}function a1(e){return e.match(e1)[1].replace(n1,"'")}function l1(e,n,r){const[t,l]=ol(r?.in,e,n);return t.getFullYear()===l.getFullYear()&&t.getMonth()===l.getMonth()}function og(e,n,r){const[t,l]=ol(r?.in,e,n);return t.getFullYear()===l.getFullYear()}function i1(e,n,r){return Ql(e,-n,r)}function ug(e,n,r){const t=Ie(e,r?.in),l=t.getFullYear(),s=t.getDate(),u=qe(e,0);u.setFullYear(l,n,15),u.setHours(0,0,0,0);const d=sD(u);return t.setMonth(n,Math.min(s,d)),t}function dg(e,n,r){const t=Ie(e,r?.in);return isNaN(+t)?qe(e,NaN):(t.setFullYear(n),t)}function s1(e,n,r){return Rd(e,-n,r)}function o1(e,n,r){const{years:t=0,months:l=0,weeks:s=0,days:u=0,hours:d=0,minutes:m=0,seconds:E=0}=n,f=s1(e,l+t*12,r),v=i1(f,u+s*7,r),_=m+d*60,k=(E+_*60)*1e3;return qe(e,+v-k)}var nl=typeof document<"u"?D.useLayoutEffect:D.useEffect;const u1={...gv},d1=u1.useInsertionEffect,c1=d1||(e=>e());function m1(e){const n=D.useRef(()=>{});return c1(()=>{n.current=e}),D.useCallback(function(){for(var r=arguments.length,t=new Array(r),l=0;l<r;l++)t[l]=arguments[l];return n.current==null?void 0:n.current(...t)},[])}const f1={...gv};let qf=!1,E1=0;const Yf=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+E1++;function v1(){const[e,n]=D.useState(()=>qf?Yf():void 0);return nl(()=>{e==null&&n(Yf())},[]),D.useEffect(()=>{qf=!0},[]),e}const g1=f1.useId,cg=g1||v1;function _1(){const e=new Map;return{emit(n,r){var t;(t=e.get(n))==null||t.forEach(l=>l(r))},on(n,r){e.has(n)||e.set(n,new Set),e.get(n).add(r)},off(n,r){var t;(t=e.get(n))==null||t.delete(r)}}}const h1=D.createContext(null),p1=D.createContext(null),T1=()=>{var e;return((e=D.useContext(h1))==null?void 0:e.id)||null},R1=()=>D.useContext(p1);function y1(e){return"data-floating-ui-"+e}const N1=D.createContext(null),$f=y1("portal");function A1(e){e===void 0&&(e={});const{id:n,root:r}=e,t=cg(),l=k1(),[s,u]=D.useState(null),d=D.useRef(null);return nl(()=>()=>{s?.remove(),queueMicrotask(()=>{d.current=null})},[s]),nl(()=>{if(!t||d.current)return;const m=n?document.getElementById(n):null;if(!m)return;const E=document.createElement("div");E.id=t,E.setAttribute($f,""),m.appendChild(E),d.current=E,u(E)},[n,t]),nl(()=>{if(r===null||!t||d.current)return;let m=r||l?.portalNode;m&&!Hn(m)&&(m=m.current),m=m||document.body;let E=null;n&&(E=document.createElement("div"),E.id=n,m.appendChild(E));const f=document.createElement("div");f.id=t,f.setAttribute($f,""),m=E||m,m.appendChild(f),d.current=f,u(f)},[n,r,t,l]),s}const k1=()=>D.useContext(N1);function b1(e){const{open:n=!1,onOpenChange:r,elements:t}=e,l=cg(),s=D.useRef({}),[u]=D.useState(()=>_1()),d=T1()!=null,[m,E]=D.useState(t.reference),f=m1((T,k,O)=>{s.current.openEvent=T?k:void 0,u.emit("openchange",{open:T,event:k,reason:O,nested:d}),r?.(T,k,O)}),v=D.useMemo(()=>({setPositionReference:E}),[]),_=D.useMemo(()=>({reference:m||t.reference||null,floating:t.floating||null,domReference:t.reference}),[m,t.reference,t.floating]);return D.useMemo(()=>({dataRef:s,open:n,onOpenChange:f,elements:_,events:u,floatingId:l,refs:v}),[n,f,_,u,l,v])}function S1(e){e===void 0&&(e={});const{nodeId:n}=e,r=b1({...e,elements:{reference:null,floating:null,...e.elements}}),t=e.rootContext||r,l=t.elements,[s,u]=D.useState(null),[d,m]=D.useState(null),f=l?.domReference||s,v=D.useRef(null),_=R1();nl(()=>{f&&(v.current=f)},[f]);const T=yO({...e,elements:{...l,...d&&{reference:d}}}),k=D.useCallback(N=>{const L=Hn(N)?{getBoundingClientRect:()=>N.getBoundingClientRect(),getClientRects:()=>N.getClientRects(),contextElement:N}:N;m(L),T.refs.setReference(L)},[T.refs]),O=D.useCallback(N=>{(Hn(N)||N===null)&&(v.current=N,u(N)),(Hn(T.refs.reference.current)||T.refs.reference.current===null||N!==null&&!Hn(N))&&T.refs.setReference(N)},[T.refs]),p=D.useMemo(()=>({...T.refs,setReference:O,setPositionReference:k,domReference:v}),[T.refs,O,k]),b=D.useMemo(()=>({...T.elements,domReference:f}),[T.elements,f]),S=D.useMemo(()=>({...T,...t,refs:p,elements:b,nodeId:n}),[T,p,b,n,t]);return nl(()=>{t.dataRef.current.floatingContext=S;const N=_?.nodesRef.current.find(L=>L.id===n);N&&(N.context=S)}),D.useMemo(()=>({...T,context:S,refs:p,elements:b}),[T,p,b,S])}const js=()=>{const{cn:e}=Ee();return g.createElement(Av,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Ss=()=>{const{cn:e}=Ee();return g.createElement(Av,{title:Kt("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var O1=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const D1=D.forwardRef((e,n)=>{var{className:r,header:t,children:l,open:s,defaultOpen:u=!1,onClick:d,size:m="medium",onOpenChange:E}=e,f=O1(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:v}=Ee(),[_,T]=Yl({defaultValue:u,value:s,onChange:E}),k=m==="small"?"small":"medium";return g.createElement("div",{className:v("navds-read-more",`navds-read-more--${m}`,r,{"navds-read-more--open":_}),"data-volume":"low"},g.createElement("button",Object.assign({},f,{ref:n,type:"button",className:v("navds-read-more__button","navds-body-short",{"navds-body-short--small":m==="small"}),onClick:dr(d,()=>T(O=>!O)),"aria-expanded":_,"data-state":_?"open":"closed"}),g.createElement(fd,{className:v("navds-read-more__expand-icon"),"aria-hidden":!0}),g.createElement("span",null,t)),g.createElement(cd,{as:"div","aria-hidden":!_,className:v("navds-read-more__content",{"navds-read-more__content--closed":!_}),size:k,"data-state":_?"open":"closed"},l))}),Wl=D.createContext(null),zr=(e,n)=>{var r,t,l;const{size:s,error:u,errorId:d}=e,m=D.useContext(Wl),E=Xt(),f=(r=e.id)!==null&&r!==void 0?r:`${n}-${E}`,v=d??`${n}-error-${E}`,_=`${n}-description-${E}`,T=m?.disabled||e.disabled,k=(m?.readOnly||e.readOnly)&&!T||void 0,O=!T&&!k&&!!(u||m?.error),p=!T&&!k&&!!u&&typeof u!="boolean",b=Object.assign({},O?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:p,hasError:O,errorId:v,inputDescriptionId:_,size:(t=s??m?.size)!==null&&t!==void 0?t:"medium",readOnly:k,inputProps:Object.assign(Object.assign({id:f},b),{"aria-describedby":Aa(e["aria-describedby"],{[_]:e.description&&!Os(e.description),[v]:p,[(l=m?.errorId)!==null&&l!==void 0?l:""]:O&&m?.error})||void 0,disabled:T})}};function Os(e,n=!0){if(g.isValidElement(e)){if(e.type===D1)return!0;if(e.props.children&&n)return Os(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>Os(r,n));return!1}const mg={global:{dateLocale:Iv,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},fg={global:{dateLocale:Pv,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Eg=(e="nb")=>{switch(e){case"nn":return Pv;case"en":return Iv;default:return Lv}},vg=e=>{switch(e){case"nn":return fg.DatePicker;case"en":case"en-GB":return mg.DatePicker;default:return}},I1=e=>{switch(e){case"nn":return fg.global;case"en":case"en-GB":return mg.global;default:return}},[gg,Cs]=Fs();var L1=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const[P1,Ld]=Fs({errorMessage:"useDateInputContext must be used with DateInputContext"}),_g=D.forwardRef((e,n)=>{const{className:r,hideLabel:t=!1,label:l,description:s,variant:u="datepicker",setAnchorRef:d}=e,m=L1(e,["className","hideLabel","label","description","variant","setAnchorRef"]),E=D.useRef(null),f=Cs().translate,{cn:v}=Ee(),_=u==="datepicker",T={prefix:_?"datepicker-input":"monthpicker-input",iconTitle:{open:_?"openDatePicker":"openMonthPicker",close:_?"closeDatePicker":"closeMonthPicker"}},k=Ld(),{inputProps:O,size:p="medium",inputDescriptionId:b,errorId:S,showErrorMsg:N,hasError:L,readOnly:y}=zr(e,T.prefix);return g.createElement("div",{className:v(r,"navds-form-field",`navds-form-field--${p}`,"navds-date__field",{"navds-text-field--error":L,"navds-date__field--error":L,"navds-form-field--disabled":!!O.disabled,"navds-text-field--disabled":!!O.disabled,"navds-form-field--readonly":y,"navds-text-field--readonly":y,"navds-date__field--readonly":y})},g.createElement(Wt,{htmlFor:O.id,size:p,className:v("navds-form-field__label",{"navds-sr-only":t})},y&&g.createElement(js,null),l),!!s&&g.createElement(un,{as:"div",className:v("navds-form-field__description",{"navds-sr-only":t}),id:b,size:p},s),g.createElement("div",{className:v("navds-date__field-wrapper")},g.createElement("input",Object.assign({ref:n},fn(m,["error","errorId","size"]),O,{autoComplete:"off","aria-controls":k?.open?k.ariaId:void 0,readOnly:y,className:v("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${p}`),size:_?11:14})),g.createElement("button",{disabled:O.disabled||y,tabIndex:y||k?.open?-1:0,onClick:()=>{k?.onOpen(),d?.(E.current)},type:"button",className:v("navds-date__field-button"),ref:E},g.createElement(XA,{title:f(T.iconTitle[k?.open?"close":"open"])}))),g.createElement("div",{className:v("navds-form-field__error"),id:S,"aria-relevant":"additions removals","aria-live":"polite"},N&&g.createElement(ba,{size:p,showIcon:!0},e.error)))}),w1=D.forwardRef((e,n)=>g.createElement(_g,Object.assign({},e,{ref:n})));D.forwardRef((e,n)=>g.createElement(_g,Object.assign({},e,{variant:"monthpicker",ref:n})));var F1=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const K1=D.forwardRef((e,n)=>{var{className:r}=e,t=F1(e,["className"]);const{cn:l}=Ee();return g.createElement("div",Object.assign({},t,{ref:n,className:l("navds-modal__body",r)}))});var M1=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const G1=D.forwardRef((e,n)=>{var{className:r}=e,t=M1(e,["className"]);const{cn:l}=Ee();return g.createElement("div",Object.assign({},t,{ref:n,className:l("navds-modal__footer",r)}))});var V1=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const hg=D.forwardRef((e,n)=>{var{children:r,className:t,closeButton:l=!0}=e,s=V1(e,["children","className","closeButton"]);const{cn:u}=Ee(),d=Ms(),m=Kt("global");return g.createElement("div",Object.assign({},s,{ref:n,className:u("navds-modal__header",t)}),d.closeHandler&&l&&g.createElement(Cn,{type:"button",className:u("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:E=>{["Enter"," "].includes(E.key)&&E.repeat&&E.preventDefault()},onClick:d.closeHandler,icon:g.createElement(ps,{title:m("close")})}),r)}),Wf=({clientX:e,clientY:n},{left:r,top:t,right:l,bottom:s})=>!(e<r||n<t||e>l||n>s);function B1(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var t;return r()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const ns="navds-modal__document-body",ts="aksel-modal__document-body";function x1(e,n,r){g.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(ts,ns);const t=new MutationObserver(()=>{var l;!((l=e.current)===null||l===void 0)&&l.open?document.body.classList.add(ts,ns):document.body.classList.remove(ts,ns)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(ts,ns)}},[e,n,r])}const Za=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function pg(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function Bl(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Tg(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function U1(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function vu(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Rg(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(u){return u+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(r.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var l=e.querySelectorAll("*"),s=0;s<l.length&&!(l[s].tagName&&l[s].shadowRoot&&(t=Rg(l[s].shadowRoot),t));s++);return t}function Jf(e){return e.isConnected||document.body.contains(e)}function yg(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=Ge.formSubmitter;if(!r){var t=e.target,l="getRootNode"in t&&t.getRootNode()||document;r=l.activeElement}return!r||r.form!==n?null:r}function H1(e){if(!e.defaultPrevented){var n=e.target,r=Ge.imagemapUseValue,t=yg(e);r===null&&t&&(r=t.value);var l=Bl(n);if(l){var s=t&&t.getAttribute("formmethod")||n.getAttribute("method");s==="dialog"&&(e.preventDefault(),r!=null?l.close(r):l.close())}}}function Ng(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",H1,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,t=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),l,s=function(u){if(u.target===e){var d="DOMNodeRemoved";r|=u.type.substr(0,d.length)===d,window.clearTimeout(l),l=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(u){e.addEventListener(u,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Ng.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Jf(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),Ge.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Rg(this.dialog_)),Tg(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Jf(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!Ge.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,Ge.needsCentering(this.dialog_)?(Ge.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});pg(this.dialog_,n)}};var Ge={};Ge.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};Ge.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],t=null;try{t=r.cssRules}catch{}if(t)for(var l=0;l<t.length;++l){var s=t[l],u=null;try{u=document.querySelectorAll(s.selectorText)}catch{}if(!(!u||!U1(u,e))){var d=s.style.getPropertyValue("top"),m=s.style.getPropertyValue("bottom");if(d&&d!=="auto"||m&&m!=="auto")return!0}}}return!1};Ge.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!Ge.isInlinePositionSetByStylesheet(e)};Ge.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Ng(e)};Ge.registerDialog=function(e){e.showModal||Ge.forceRegisterDialog(e)};Ge.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(t){for(var l=0,s;s=t.removedNodes[l];++l)s instanceof Element&&(s.localName==="dialog"&&r.push(s),r=r.concat(s.querySelectorAll("dialog")))}),r.length&&e(r)}))};Ge.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};Ge.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};Ge.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var l=t.dialog.parentNode||document.body;l.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};Ge.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Bl(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};Ge.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Tg(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],t=r.dialog,l=t.compareDocumentPosition(n);return l&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};Ge.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&pg(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};Ge.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};Ge.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};Ge.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Za&&(Ge.dm=new Ge.DialogManager,Ge.formSubmitter=null,Ge.imagemapUseValue=null);if(Za){var zf=document.createElement("form");if(zf.setAttribute("method","dialog"),zf.method!=="dialog"){var $a=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if($a){var j1=$a.get;$a.get=function(){return vu(this)?"dialog":j1.call(this)};var C1=$a.set;$a.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):C1.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",$a)}}document.addEventListener("click",function(e){if(Ge.formSubmitter=null,Ge.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!vu(n.form))){var t=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!t){if(!(n.localName==="input"&&n.type==="image"))return;Ge.imagemapUseValue=e.offsetX+","+e.offsetY}var l=Bl(n);l&&(Ge.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=Bl(n);if(!r){var t=yg(e),l=t&&t.getAttribute("formmethod")||n.getAttribute("method");l==="dialog"&&e.preventDefault()}});var q1=HTMLFormElement.prototype.submit,Y1=function(){if(!vu(this))return q1.call(this);var e=Bl(this);e&&e.close()};HTMLFormElement.prototype.submit=Y1}var $1=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const va=D.forwardRef((e,n)=>{var r,t,{header:l,children:s,open:u,onBeforeClose:d,onCancel:m,closeOnBackdropClick:E,width:f,placement:v,portal:_,className:T,"aria-labelledby":k,style:O,onClick:p,onMouseDown:b}=e,S=$1(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:N}=Ee(),L=D.useRef(N("navds-modal--polyfilled")),y=D.useRef(null),K=ka(y,n),F=Xt(),G=(r=vd())===null||r===void 0?void 0:r.rootElement,H=A1({root:G}),W=Ld(!1),Y=Ms(!1)!==void 0;Y&&!W&&console.error("Modals should not be nested"),D.useEffect(()=>{Za&&y.current&&H&&(Ge.registerDialog(y.current),y.current.classList.add(L.current)),y.current&&H&&(y.current.autofocus=!0)},[H]),D.useEffect(()=>{y.current&&H&&u!==void 0&&(u&&!y.current.open?y.current.showModal():!u&&y.current.open&&y.current.close())},[H,u]),x1(y,H,Y);const x=typeof f=="string"&&["small","medium"].includes(f),V=N("navds-modal",T,{[L.current]:Za,"navds-modal--autowidth":!f,[`navds-modal--${f}`]:x,"navds-modal--top":v==="top"&&!Za}),X=Object.assign(Object.assign({},O),x?{}:{width:f}),ne=D.useRef({clientX:0,clientY:0}),te=Qe=>{ne.current=Qe},se=E&&!Za,Q=Qe=>{if(Qe.target!==y.current)return;const dn=y.current.getBoundingClientRect();Wf(ne.current,dn)||Wf(Qe,dn)||d!==void 0&&d()===!1||y.current.close()},oe=Qe=>{d&&d()===!1&&Qe.preventDefault()},Re=!k&&!S["aria-label"]&&l?F:k,ge=g.createElement("dialog",Object.assign({},S,{ref:K,className:V,style:X,onCancel:dr(m,oe),onClick:se?dr(p,Q):p,onMouseDown:se?dr(b,te):b,"aria-labelledby":Re}),g.createElement(Ak,{closeHandler:B1(y,l,d),ref:y},l&&g.createElement(hg,null,l.label&&g.createElement(md,{className:N("navds-modal__label")},l.label),g.createElement(Jl,{size:(t=l.size)!==null&&t!==void 0?t:"medium",level:"1",id:F},l.icon&&g.createElement("span",{className:N("navds-modal__header-icon")},l.icon),l.heading)),s));return _?H?dd.createPortal(ge,H):null:ge});va.Header=hg;va.Body=K1;va.Footer=G1;var W1=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const J1=D.forwardRef((e,n)=>{var{className:r}=e,t=W1(e,["className"]);const{cn:l}=Ee();return g.createElement("div",Object.assign({},t,{ref:n,className:l("navds-popover__content",r)}))});var z1=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Ag=D.forwardRef((e,n)=>{var{className:r,children:t,anchorEl:l,arrow:s=!0,open:u,onClose:d,placement:m="top",offset:E,strategy:f,flip:v=!0}=e,_=z1(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:T}=Ee(),k=D.useRef(null),O=Ms(!1)!==void 0,p=Ld(!1),b=f??(O?"fixed":"absolute"),S=p?!1:v,N=il(!1),{update:L,refs:y,placement:K,middlewareData:{arrow:{x:F,y:G}={}},floatingStyles:H}=S1({strategy:b,placement:m,open:u,middleware:[AO(E??(N?.isDarkside?8:s?16:4)),S&&bO({padding:5,fallbackPlacements:["bottom","top"]}),kO({padding:12}),SO({element:k,padding:8})]});tl(()=>{y.setReference(l)},[l]);const W=ka(y.setFloating,n);tl(()=>{if(!y.reference.current||!y.floating.current||!u)return;const x=vO(y.reference.current,y.floating.current,L);return()=>x()},[y.floating,y.reference,L,u,l]);const Y={top:"bottom",right:"left",bottom:"top",left:"right"}[K.split("-")[0]];return g.createElement(kS,{asChild:!0,safeZone:{anchor:l,dismissable:y.floating.current},onDismiss:()=>u&&d?.(),enabled:u},g.createElement("div",Object.assign({ref:W},_,{className:T("navds-popover",r,{"navds-popover--hidden":!u||!l}),style:Object.assign(Object.assign({},_.style),H),"data-placement":K,"aria-hidden":!u||!l}),t,s&&!N?.isDarkside&&g.createElement("div",{ref:x=>{k.current=x},style:Object.assign(Object.assign(Object.assign({},F!=null?{left:F}:{}),G!=null?{top:G}:{}),Y?{[Y]:"-0.5rem"}:{}),className:T("navds-popover__arrow")})))});Ag.Content=J1;const X1={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},Z1=({open:e,children:n,onClose:r,anchor:t,locale:l,translate:s,variant:u,popoverProps:d})=>{const m=Kt("global",I1(l)),{cn:E}=Ee(),f=D.useRef(null),v=Ms(!1)!==void 0;return bk("screen and (min-width: 768px)",!0)&&!v?g.createElement(Ag,Object.assign({arrow:!1,anchorEl:t,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:E("navds-date__popover",{"navds-date":u==="month"}),flip:!1},d),n):g.createElement(va,{ref:f,open:e,onClose:T=>{T.stopPropagation(),r()},"aria-label":s(X1[u]),className:E("navds-date__modal",{"navds-date__nested-modal":v,"navds-date":u==="month"}),closeOnBackdropClick:!0,placement:"top"},g.createElement("div",{className:E("navds-date__modal-body")},n,g.createElement(Cn,{variant:"tertiary",onClick:()=>{var T;return(T=f?.current)===null||T===void 0?void 0:T.close()},size:"small",type:"button"},m("close"))))};function kg(e){return!!(e&&typeof e=="object"&&"from"in e)}const Q1={},Ml={};function xl(e,n){try{const t=(Q1[e]||=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format)(n).split("GMT")[1]||"";return t in Ml?Ml[t]:Xf(t,t.split(":"))}catch{if(e in Ml)return Ml[e];const r=e?.match(eI);return r?Xf(e,r.slice(1)):NaN}}const eI=/([+-]\d\d):?(\d\d)?/;function Xf(e,n){const r=+n[0],t=+(n[1]||0);return Ml[e]=r>0?r*60+t:r*60-t}class ur extends Date{constructor(...n){super(),n.length>1&&typeof n[n.length-1]=="string"&&(this.timeZone=n.pop()),this.internal=new Date,isNaN(xl(this.timeZone,this))?this.setTime(NaN):n.length?typeof n[0]=="number"&&(n.length===1||n.length===2&&typeof n[1]!="number")?this.setTime(n[0]):typeof n[0]=="string"?this.setTime(+new Date(n[0])):n[0]instanceof Date?this.setTime(+n[0]):(this.setTime(+new Date(...n)),bg(this),Mu(this)):this.setTime(Date.now())}static tz(n,...r){return r.length?new ur(...r,n):new ur(Date.now(),n)}withTimeZone(n){return new ur(+this,n)}getTimezoneOffset(){return-xl(this.timeZone,this)}setTime(n){return Date.prototype.setTime.apply(this,arguments),Mu(this),+this}[Symbol.for("constructDateFrom")](n){return new ur(+new Date(n),this.timeZone)}}const Zf=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Zf.test(e))return;const n=e.replace(Zf,"$1UTC");ur.prototype[n]&&(e.startsWith("get")?ur.prototype[e]=function(){return this.internal[n]()}:(ur.prototype[e]=function(){return Date.prototype[n].apply(this.internal,arguments),nI(this),+this},ur.prototype[n]=function(){return Date.prototype[n].apply(this,arguments),Mu(this),+this}))});function Mu(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function nI(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),bg(e)}function bg(e){const n=xl(e.timeZone,e),r=new Date(+e);r.setUTCHours(r.getUTCHours()-1);const t=-new Date(+e).getTimezoneOffset(),l=-new Date(+r).getTimezoneOffset(),s=t-l,u=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();s&&u&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);const d=t-n;d&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+d);const m=xl(e.timeZone,e),f=-new Date(+e).getTimezoneOffset()-m,v=m!==n,_=f-d;if(v&&_){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+_);const T=xl(e.timeZone,e),k=m-T;k&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+k),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+k))}}class Un extends ur{static tz(n,...r){return r.length?new Un(...r,n):new Un(Date.now(),n)}toISOString(){const[n,r,t]=this.tzComponents(),l=`${n}${r}:${t}`;return this.internal.toISOString().slice(0,-1)+l}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[n,r,t,l]=this.internal.toUTCString().split(" ");return`${n?.slice(0,-1)} ${t} ${r} ${l}`}toTimeString(){const n=this.internal.toUTCString().split(" ")[4],[r,t,l]=this.tzComponents();return`${n} GMT${r}${t}${l} (${tI(this.timeZone,this)})`}toLocaleString(n,r){return Date.prototype.toLocaleString.call(this,n,{...r,timeZone:r?.timeZone||this.timeZone})}toLocaleDateString(n,r){return Date.prototype.toLocaleDateString.call(this,n,{...r,timeZone:r?.timeZone||this.timeZone})}toLocaleTimeString(n,r){return Date.prototype.toLocaleTimeString.call(this,n,{...r,timeZone:r?.timeZone||this.timeZone})}tzComponents(){const n=this.getTimezoneOffset(),r=n>0?"-":"+",t=String(Math.floor(Math.abs(n)/60)).padStart(2,"0"),l=String(Math.abs(n)%60).padStart(2,"0");return[r,t,l]}withTimeZone(n){return new Un(+this,n)}[Symbol.for("constructDateFrom")](n){return new Un(+new Date(n),this.timeZone)}}function tI(e,n){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(n).slice(12)}var fe;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(fe||(fe={}));var sn;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(sn||(sn={}));var Yt;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Yt||(Yt={}));var pt;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(pt||(pt={}));const Qf=5,rI=4;function aI(e,n){const r=n.startOfMonth(e),t=r.getDay()>0?r.getDay():7,l=n.addDays(e,-t+1),s=n.addDays(l,Qf*7-1);return n.getMonth(e)===n.getMonth(s)?Qf:rI}function Sg(e,n){const r=n.startOfMonth(e),t=r.getDay();return t===1?r:t===0?n.addDays(r,-6):n.addDays(r,-1*(t-1))}function lI(e,n){const r=Sg(e,n),t=aI(e,n);return n.addDays(r,t*7-1)}class Kr{constructor(n,r){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?Un.tz(this.options.timeZone):new this.Date,this.newDate=(t,l,s)=>this.overrides?.newDate?this.overrides.newDate(t,l,s):this.options.timeZone?new Un(t,l,s,this.options.timeZone):new Date(t,l,s),this.addDays=(t,l)=>this.overrides?.addDays?this.overrides.addDays(t,l):Ql(t,l),this.addMonths=(t,l)=>this.overrides?.addMonths?this.overrides.addMonths(t,l):Rd(t,l),this.addWeeks=(t,l)=>this.overrides?.addWeeks?this.overrides.addWeeks(t,l):UO(t,l),this.addYears=(t,l)=>this.overrides?.addYears?this.overrides.addYears(t,l):yd(t,l),this.differenceInCalendarDays=(t,l)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(t,l):Wr(t,l),this.differenceInCalendarMonths=(t,l)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(t,l):qO(t,l),this.eachMonthOfInterval=t=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(t):Zv(t),this.endOfBroadcastWeek=t=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(t):lI(t,this),this.endOfISOWeek=t=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(t):$O(t),this.endOfMonth=t=>this.overrides?.endOfMonth?this.overrides.endOfMonth(t):Xv(t),this.endOfWeek=(t,l)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(t,l):Qv(t,this.options),this.endOfYear=t=>this.overrides?.endOfYear?this.overrides.endOfYear(t):Hs(t),this.format=(t,l,s)=>{const u=this.overrides?.format?this.overrides.format(t,l,this.options):Ta(t,l,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(u):u},this.getISOWeek=t=>this.overrides?.getISOWeek?this.overrides.getISOWeek(t):Ad(t),this.getMonth=(t,l)=>this.overrides?.getMonth?this.overrides.getMonth(t,this.options):Sd(t,this.options),this.getYear=(t,l)=>this.overrides?.getYear?this.overrides.getYear(t,this.options):Od(t,this.options),this.getWeek=(t,l)=>this.overrides?.getWeek?this.overrides.getWeek(t,this.options):bd(t,this.options),this.isAfter=(t,l)=>this.overrides?.isAfter?this.overrides.isAfter(t,l):rg(t,l),this.isBefore=(t,l)=>this.overrides?.isBefore?this.overrides.isBefore(t,l):ni(t,l),this.isDate=t=>this.overrides?.isDate?this.overrides.isDate(t):zv(t),this.isSameDay=(t,l)=>this.overrides?.isSameDay?this.overrides.isSameDay(t,l):Nd(t,l),this.isSameMonth=(t,l)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(t,l):l1(t,l),this.isSameYear=(t,l)=>this.overrides?.isSameYear?this.overrides.isSameYear(t,l):og(t,l),this.max=t=>this.overrides?.max?this.overrides.max(t):HO(t),this.min=t=>this.overrides?.min?this.overrides.min(t):jO(t),this.setMonth=(t,l)=>this.overrides?.setMonth?this.overrides.setMonth(t,l):ug(t,l),this.setYear=(t,l)=>this.overrides?.setYear?this.overrides.setYear(t,l):dg(t,l),this.startOfBroadcastWeek=(t,l)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(t,this):Sg(t,this),this.startOfDay=t=>this.overrides?.startOfDay?this.overrides.startOfDay(t):Fr(t),this.startOfISOWeek=t=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(t):ha(t),this.startOfMonth=t=>this.overrides?.startOfMonth?this.overrides.startOfMonth(t):pa(t),this.startOfWeek=(t,l)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(t,this.options):wr(t,this.options),this.startOfYear=t=>this.overrides?.startOfYear?this.overrides.startOfYear(t):ei(t),this.options={locale:Gs,...n},this.overrides=r}getDigitMap(){const{numerals:n="latn"}=this.options,r=new Intl.NumberFormat("en-US",{numberingSystem:n}),t={};for(let l=0;l<10;l++)t[l.toString()]=r.format(l);return t}replaceDigits(n){const r=this.getDigitMap();return n.replace(/\d/g,t=>r[t]||t)}formatNumber(n){return this.replaceDigits(n.toString())}}const vr=new Kr;class Og{constructor(n,r,t=vr){this.date=n,this.displayMonth=r,this.outside=!!(r&&!t.isSameMonth(n,r)),this.dateLib=t}isEqualTo(n){return this.dateLib.isSameDay(n.date,this.date)&&this.dateLib.isSameMonth(n.displayMonth,this.displayMonth)}}class iI{constructor(n,r){this.date=n,this.weeks=r}}class sI{constructor(n,r){this.days=r,this.weekNumber=n}}function Pr(e,n,r=!1,t=vr){let{from:l,to:s}=e;const{differenceInCalendarDays:u,isSameDay:d}=t;return l&&s?(u(s,l)<0&&([l,s]=[s,l]),u(n,l)>=(r?1:0)&&u(s,n)>=(r?1:0)):!r&&s?d(s,n):!r&&l?d(l,n):!1}function Dg(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Pd(e){return!!(e&&typeof e=="object"&&"from"in e)}function Ig(e){return!!(e&&typeof e=="object"&&"after"in e)}function Lg(e){return!!(e&&typeof e=="object"&&"before"in e)}function Pg(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function wg(e,n){return Array.isArray(e)&&e.every(n.isDate)}function wt(e,n,r=vr){const t=Array.isArray(n)?n:[n],{isSameDay:l,differenceInCalendarDays:s,isAfter:u}=r;return t.some(d=>{if(typeof d=="boolean")return d;if(r.isDate(d))return l(e,d);if(wg(d,r))return d.includes(e);if(Pd(d))return Pr(d,e,!1,r);if(Pg(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(e.getDay()):d.dayOfWeek===e.getDay();if(Dg(d)){const m=s(d.before,e),E=s(d.after,e),f=m>0,v=E<0;return u(d.before,d.after)?v&&f:f||v}return Ig(d)?s(e,d.after)>0:Lg(d)?s(d.before,e)>0:typeof d=="function"?d(e):!1})}function oI(e,n,r){const{disabled:t,hidden:l,modifiers:s,showOutsideDays:u,broadcastCalendar:d,today:m}=n,{isSameDay:E,isSameMonth:f,startOfMonth:v,isBefore:_,endOfMonth:T,isAfter:k}=r,O=n.startMonth&&v(n.startMonth),p=n.endMonth&&T(n.endMonth),b={[sn.focused]:[],[sn.outside]:[],[sn.disabled]:[],[sn.hidden]:[],[sn.today]:[]},S={};for(const N of e){const{date:L,displayMonth:y}=N,K=!!(y&&!f(L,y)),F=!!(O&&_(L,O)),G=!!(p&&k(L,p)),H=!!(t&&wt(L,t,r)),W=!!(l&&wt(L,l,r))||F||G||!d&&!u&&K||d&&u===!1&&K,Y=E(L,m??r.today());K&&b.outside.push(N),H&&b.disabled.push(N),W&&b.hidden.push(N),Y&&b.today.push(N),s&&Object.keys(s).forEach(x=>{const V=s?.[x];V&&wt(L,V,r)&&(S[x]?S[x].push(N):S[x]=[N])})}return N=>{const L={[sn.focused]:!1,[sn.disabled]:!1,[sn.hidden]:!1,[sn.outside]:!1,[sn.today]:!1},y={};for(const K in b){const F=b[K];L[K]=F.some(G=>G===N)}for(const K in S)y[K]=S[K].some(F=>F===N);return{...L,...y}}}function uI(e,n,r={}){return Object.entries(e).filter(([,l])=>l===!0).reduce((l,[s])=>(r[s]?l.push(r[s]):n[sn[s]]?l.push(n[sn[s]]):n[Yt[s]]&&l.push(n[Yt[s]]),l),[n[fe.Day]])}function dI(e){return g.createElement("button",{...e})}function cI(e){return g.createElement("span",{...e})}function mI(e){const{size:n=24,orientation:r="left",className:t}=e;return g.createElement("svg",{className:t,width:n,height:n,viewBox:"0 0 24 24"},r==="up"&&g.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&g.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&g.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&g.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function fI(e){const{day:n,modifiers:r,...t}=e;return g.createElement("td",{...t})}function EI(e){const{day:n,modifiers:r,...t}=e,l=g.useRef(null);return g.useEffect(()=>{r.focused&&l.current?.focus()},[r.focused]),g.createElement("button",{ref:l,...t})}function vI(e){const{options:n,className:r,components:t,classNames:l,...s}=e,u=[l[fe.Dropdown],r].join(" "),d=n?.find(({value:m})=>m===s.value);return g.createElement("span",{"data-disabled":s.disabled,className:l[fe.DropdownRoot]},g.createElement(t.Select,{className:u,...s},n?.map(({value:m,label:E,disabled:f})=>g.createElement(t.Option,{key:m,value:m,disabled:f},E))),g.createElement("span",{className:l[fe.CaptionLabel],"aria-hidden":!0},d?.label,g.createElement(t.Chevron,{orientation:"down",size:18,className:l[fe.Chevron]})))}function gI(e){return g.createElement("div",{...e})}function _I(e){return g.createElement("div",{...e})}function hI(e){const{calendarMonth:n,displayIndex:r,...t}=e;return g.createElement("div",{...t},e.children)}function pI(e){const{calendarMonth:n,displayIndex:r,...t}=e;return g.createElement("div",{...t})}function TI(e){return g.createElement("table",{...e})}function RI(e){return g.createElement("div",{...e})}const Fg=D.createContext(void 0);function Oa(){const e=D.useContext(Fg);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function yI(e){const{components:n}=Oa();return g.createElement(n.Dropdown,{...e})}function NI(e){const{onPreviousClick:n,onNextClick:r,previousMonth:t,nextMonth:l,...s}=e,{components:u,classNames:d,labels:{labelPrevious:m,labelNext:E}}=Oa(),f=D.useCallback(_=>{l&&r?.(_)},[l,r]),v=D.useCallback(_=>{t&&n?.(_)},[t,n]);return g.createElement("nav",{...s},g.createElement(u.PreviousMonthButton,{type:"button",className:d[fe.PreviousMonthButton],tabIndex:t?void 0:-1,"aria-disabled":t?void 0:!0,"aria-label":m(t),onClick:v},g.createElement(u.Chevron,{disabled:t?void 0:!0,className:d[fe.Chevron],orientation:"left"})),g.createElement(u.NextMonthButton,{type:"button",className:d[fe.NextMonthButton],tabIndex:l?void 0:-1,"aria-disabled":l?void 0:!0,"aria-label":E(l),onClick:f},g.createElement(u.Chevron,{disabled:l?void 0:!0,orientation:"right",className:d[fe.Chevron]})))}function AI(e){const{components:n}=Oa();return g.createElement(n.Button,{...e})}function kI(e){return g.createElement("option",{...e})}function bI(e){const{components:n}=Oa();return g.createElement(n.Button,{...e})}function SI(e){const{rootRef:n,...r}=e;return g.createElement("div",{...r,ref:n})}function OI(e){return g.createElement("select",{...e})}function DI(e){const{week:n,...r}=e;return g.createElement("tr",{...r})}function II(e){return g.createElement("th",{...e})}function LI(e){return g.createElement("thead",{"aria-hidden":!0},g.createElement("tr",{...e}))}function PI(e){const{week:n,...r}=e;return g.createElement("th",{...r})}function wI(e){return g.createElement("th",{...e})}function FI(e){return g.createElement("tbody",{...e})}function KI(e){const{components:n}=Oa();return g.createElement(n.Dropdown,{...e})}const MI=Object.freeze(Object.defineProperty({__proto__:null,Button:dI,CaptionLabel:cI,Chevron:mI,Day:fI,DayButton:EI,Dropdown:vI,DropdownNav:gI,Footer:_I,Month:hI,MonthCaption:pI,MonthGrid:TI,Months:RI,MonthsDropdown:yI,Nav:NI,NextMonthButton:AI,Option:kI,PreviousMonthButton:bI,Root:SI,Select:OI,Week:DI,WeekNumber:PI,WeekNumberHeader:wI,Weekday:II,Weekdays:LI,Weeks:FI,YearsDropdown:KI},Symbol.toStringTag,{value:"Module"}));function GI(e){return{...MI,...e}}function VI(e){const n={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([r,t])=>{r.startsWith("data-")&&(n[r]=t)}),n}function BI(){const e={};for(const n in fe)e[fe[n]]=`rdp-${fe[n]}`;for(const n in sn)e[sn[n]]=`rdp-${sn[n]}`;for(const n in Yt)e[Yt[n]]=`rdp-${Yt[n]}`;for(const n in pt)e[pt[n]]=`rdp-${pt[n]}`;return e}function Kg(e,n,r){return(r??new Kr(n)).format(e,"LLLL y")}const xI=Kg;function UI(e,n,r){return(r??new Kr(n)).format(e,"d")}function HI(e,n=vr){return n.format(e,"LLLL")}function jI(e,n=vr){return e<10?n.formatNumber(`0${e.toLocaleString()}`):n.formatNumber(`${e.toLocaleString()}`)}function CI(){return""}function qI(e,n,r){return(r??new Kr(n)).format(e,"cccccc")}function Mg(e,n=vr){return n.format(e,"yyyy")}const YI=Mg,$I=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:Kg,formatDay:UI,formatMonthCaption:xI,formatMonthDropdown:HI,formatWeekNumber:jI,formatWeekNumberHeader:CI,formatWeekdayName:qI,formatYearCaption:YI,formatYearDropdown:Mg},Symbol.toStringTag,{value:"Module"}));function WI(e){return e?.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e?.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...$I,...e}}function JI(e,n,r,t,l){const{startOfMonth:s,startOfYear:u,endOfYear:d,eachMonthOfInterval:m,getMonth:E}=l;return m({start:u(e),end:d(e)}).map(_=>{const T=t.formatMonthDropdown(_,l),k=E(_),O=n&&_<s(n)||r&&_>s(r)||!1;return{value:k,label:T,disabled:O}})}function zI(e,n={},r={}){let t={...n?.[fe.Day]};return Object.entries(e).filter(([,l])=>l===!0).forEach(([l])=>{t={...t,...r?.[l]}}),t}function XI(e,n,r){const t=e.today(),l=n?e.startOfISOWeek(t):e.startOfWeek(t),s=[];for(let u=0;u<7;u++){const d=e.addDays(l,u);s.push(d)}return s}function ZI(e,n,r,t){if(!e||!n)return;const{startOfYear:l,endOfYear:s,addYears:u,getYear:d,isBefore:m,isSameYear:E}=t,f=l(e),v=s(n),_=[];let T=f;for(;m(T,v)||E(T,v);)_.push(T),T=u(T,1);return _.map(k=>{const O=r.formatYearDropdown(k,t);return{value:d(k),label:O,disabled:!1}})}function Gg(e,n,r){return(r??new Kr(n)).format(e,"LLLL y")}const QI=Gg;function eL(e,n,r,t){let l=(t??new Kr(r)).format(e,"PPPP");return n?.today&&(l=`Today, ${l}`),l}function Vg(e,n,r,t){let l=(t??new Kr(r)).format(e,"PPPP");return n.today&&(l=`Today, ${l}`),n.selected&&(l=`${l}, selected`),l}const nL=Vg;function tL(){return""}function rL(e){return"Choose the Month"}function aL(e){return"Go to the Next Month"}function lL(e){return"Go to the Previous Month"}function iL(e,n,r){return(r??new Kr(n)).format(e,"cccc")}function sL(e,n){return`Week ${e}`}function oL(e){return"Week Number"}function uL(e){return"Choose the Year"}const dL=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:QI,labelDay:nL,labelDayButton:Vg,labelGrid:Gg,labelGridcell:eL,labelMonthDropdown:rL,labelNav:tL,labelNext:aL,labelPrevious:lL,labelWeekNumber:sL,labelWeekNumberHeader:oL,labelWeekday:iL,labelYearDropdown:uL},Symbol.toStringTag,{value:"Module"})),ti=e=>e instanceof HTMLElement?e:null,gu=e=>[...e.querySelectorAll("[data-animated-month]")??[]],cL=e=>ti(e.querySelector("[data-animated-month]")),_u=e=>ti(e.querySelector("[data-animated-caption]")),hu=e=>ti(e.querySelector("[data-animated-weeks]")),mL=e=>ti(e.querySelector("[data-animated-nav]")),fL=e=>ti(e.querySelector("[data-animated-weekdays]"));function EL(e,n,{classNames:r,months:t,focused:l,dateLib:s}){const u=D.useRef(null),d=D.useRef(t),m=D.useRef(!1);D.useLayoutEffect(()=>{const E=d.current;if(d.current=t,!n||!e.current||!(e.current instanceof HTMLElement)||t.length===0||E.length===0||t.length!==E.length)return;const f=s.isSameMonth(t[0].date,E[0].date),v=s.isAfter(t[0].date,E[0].date),_=v?r[pt.caption_after_enter]:r[pt.caption_before_enter],T=v?r[pt.weeks_after_enter]:r[pt.weeks_before_enter],k=u.current,O=e.current.cloneNode(!0);if(O instanceof HTMLElement?(gu(O).forEach(N=>{if(!(N instanceof HTMLElement))return;const L=cL(N);L&&N.contains(L)&&N.removeChild(L);const y=_u(N);y&&y.classList.remove(_);const K=hu(N);K&&K.classList.remove(T)}),u.current=O):u.current=null,m.current||f||l)return;const p=k instanceof HTMLElement?gu(k):[],b=gu(e.current);if(b&&b.every(S=>S instanceof HTMLElement)&&p&&p.every(S=>S instanceof HTMLElement)){m.current=!0,e.current.style.isolation="isolate";const S=mL(e.current);S&&(S.style.zIndex="1"),b.forEach((N,L)=>{const y=p[L];if(!y)return;N.style.position="relative",N.style.overflow="hidden";const K=_u(N);K&&K.classList.add(_);const F=hu(N);F&&F.classList.add(T);const G=()=>{m.current=!1,e.current&&(e.current.style.isolation=""),S&&(S.style.zIndex=""),K&&K.classList.remove(_),F&&F.classList.remove(T),N.style.position="",N.style.overflow="",N.contains(y)&&N.removeChild(y)};y.style.pointerEvents="none",y.style.position="absolute",y.style.overflow="hidden",y.setAttribute("aria-hidden","true");const H=fL(y);H&&(H.style.opacity="0");const W=_u(y);W&&(W.classList.add(v?r[pt.caption_before_exit]:r[pt.caption_after_exit]),W.addEventListener("animationend",G));const Y=hu(y);Y&&Y.classList.add(v?r[pt.weeks_before_exit]:r[pt.weeks_after_exit]),N.insertBefore(y,N.firstChild)})}})}function vL(e,n,r,t){const l=e[0],s=e[e.length-1],{ISOWeek:u,fixedWeeks:d,broadcastCalendar:m}=r??{},{addDays:E,differenceInCalendarDays:f,differenceInCalendarMonths:v,endOfBroadcastWeek:_,endOfISOWeek:T,endOfMonth:k,endOfWeek:O,isAfter:p,startOfBroadcastWeek:b,startOfISOWeek:S,startOfWeek:N}=t,L=m?b(l,t):u?S(l):N(l),y=m?_(s):u?T(k(s)):O(k(s)),K=f(y,L),F=v(s,l)+1,G=[];for(let Y=0;Y<=K;Y++){const x=E(L,Y);if(n&&p(x,n))break;G.push(x)}const W=(m?35:42)*F;if(d&&G.length<W){const Y=W-G.length;for(let x=0;x<Y;x++){const V=E(G[G.length-1],1);G.push(V)}}return G}function gL(e){const n=[];return e.reduce((r,t)=>{const l=t.weeks.reduce((s,u)=>[...s,...u.days],n);return[...r,...l]},n)}function _L(e,n,r,t){const{numberOfMonths:l=1}=r,s=[];for(let u=0;u<l;u++){const d=t.addMonths(e,u);if(n&&d>n)break;s.push(d)}return s}function eE(e,n){const{month:r,defaultMonth:t,today:l=n.today(),numberOfMonths:s=1,endMonth:u,startMonth:d}=e;let m=r||t||l;const{differenceInCalendarMonths:E,addMonths:f,startOfMonth:v}=n;if(u&&E(u,m)<0){const _=-1*(s-1);m=f(u,_)}return d&&E(m,d)<0&&(m=d),v(m)}function hL(e,n,r,t){const{addDays:l,endOfBroadcastWeek:s,endOfISOWeek:u,endOfMonth:d,endOfWeek:m,getISOWeek:E,getWeek:f,startOfBroadcastWeek:v,startOfISOWeek:_,startOfWeek:T}=t,k=e.reduce((O,p)=>{const b=r.broadcastCalendar?v(p,t):r.ISOWeek?_(p):T(p),S=r.broadcastCalendar?s(p):r.ISOWeek?u(d(p)):m(d(p)),N=n.filter(F=>F>=b&&F<=S),L=r.broadcastCalendar?35:42;if(r.fixedWeeks&&N.length<L){const F=n.filter(G=>{const H=L-N.length;return G>S&&G<=l(S,H)});N.push(...F)}const y=N.reduce((F,G)=>{const H=r.ISOWeek?E(G):f(G),W=F.find(x=>x.weekNumber===H),Y=new Og(G,p,t);return W?W.days.push(Y):F.push(new sI(H,[Y])),F},[]),K=new iI(p,y);return O.push(K),O},[]);return r.reverseMonths?k.reverse():k}function pL(e,n){let{startMonth:r,endMonth:t}=e;const{startOfYear:l,startOfDay:s,startOfMonth:u,endOfMonth:d,addYears:m,endOfYear:E,newDate:f,today:v}=n,{fromYear:_,toYear:T,fromMonth:k,toMonth:O}=e;!r&&k&&(r=k),!r&&_&&(r=n.newDate(_,0,1)),!t&&O&&(t=O),!t&&T&&(t=f(T,11,31));const p=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return r?r=u(r):_?r=f(_,0,1):!r&&p&&(r=l(m(e.today??v(),-100))),t?t=d(t):T?t=f(T,11,31):!t&&p&&(t=E(e.today??v())),[r&&s(r),t&&s(t)]}function TL(e,n,r,t){if(r.disableNavigation)return;const{pagedNavigation:l,numberOfMonths:s=1}=r,{startOfMonth:u,addMonths:d,differenceInCalendarMonths:m}=t,E=l?s:1,f=u(e);if(!n)return d(f,E);if(!(m(n,e)<s))return d(f,E)}function RL(e,n,r,t){if(r.disableNavigation)return;const{pagedNavigation:l,numberOfMonths:s}=r,{startOfMonth:u,addMonths:d,differenceInCalendarMonths:m}=t,E=l?s??1:1,f=u(e);if(!n)return d(f,-E);if(!(m(f,n)<=0))return d(f,-E)}function yL(e){const n=[];return e.reduce((r,t)=>[...r,...t.weeks],n)}function qs(e,n){const[r,t]=D.useState(e);return[n===void 0?r:n,t]}function NL(e,n){const[r,t]=pL(e,n),{startOfMonth:l,endOfMonth:s}=n,u=eE(e,n),[d,m]=qs(u,e.month?u:void 0);D.useEffect(()=>{const K=eE(e,n);m(K)},[e.timeZone]);const E=_L(d,t,e,n),f=vL(E,e.endMonth?s(e.endMonth):void 0,e,n),v=hL(E,f,e,n),_=yL(v),T=gL(v),k=RL(d,r,e,n),O=TL(d,t,e,n),{disableNavigation:p,onMonthChange:b}=e,S=K=>_.some(F=>F.days.some(G=>G.isEqualTo(K))),N=K=>{if(p)return;let F=l(K);r&&F<l(r)&&(F=l(r)),t&&F>l(t)&&(F=l(t)),m(F),b?.(F)};return{months:v,weeks:_,days:T,navStart:r,navEnd:t,previousMonth:k,nextMonth:O,goToMonth:N,goToDay:K=>{S(K)||N(K.date)}}}var rr;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(rr||(rr={}));function nE(e){return!e[sn.disabled]&&!e[sn.hidden]&&!e[sn.outside]}function AL(e,n,r,t){let l,s=-1;for(const u of e){const d=n(u);nE(d)&&(d[sn.focused]&&s<rr.FocusedModifier?(l=u,s=rr.FocusedModifier):t?.isEqualTo(u)&&s<rr.LastFocused?(l=u,s=rr.LastFocused):r(u.date)&&s<rr.Selected?(l=u,s=rr.Selected):d[sn.today]&&s<rr.Today&&(l=u,s=rr.Today))}return l||(l=e.find(u=>nE(n(u)))),l}function kL(e,n,r,t,l,s,u){const{ISOWeek:d,broadcastCalendar:m}=s,{addDays:E,addMonths:f,addWeeks:v,addYears:_,endOfBroadcastWeek:T,endOfISOWeek:k,endOfWeek:O,max:p,min:b,startOfBroadcastWeek:S,startOfISOWeek:N,startOfWeek:L}=u;let K={day:E,week:v,month:f,year:_,startOfWeek:F=>m?S(F,u):d?N(F):L(F),endOfWeek:F=>m?T(F):d?k(F):O(F)}[e](r,n==="after"?1:-1);return n==="before"&&t?K=p([t,K]):n==="after"&&l&&(K=b([l,K])),K}function Bg(e,n,r,t,l,s,u,d=0){if(d>365)return;const m=kL(e,n,r.date,t,l,s,u),E=!!(s.disabled&&wt(m,s.disabled,u)),f=!!(s.hidden&&wt(m,s.hidden,u)),v=m,_=new Og(m,v,u);return!E&&!f?_:Bg(e,n,_,t,l,s,u,d+1)}function bL(e,n,r,t,l){const{autoFocus:s}=e,[u,d]=D.useState(),m=AL(n.days,r,t||(()=>!1),u),[E,f]=D.useState(s?m:void 0);return{isFocusTarget:O=>!!m?.isEqualTo(O),setFocused:f,focused:E,blur:()=>{d(E),f(void 0)},moveFocus:(O,p)=>{if(!E)return;const b=Bg(O,p,E,n.navStart,n.navEnd,e,l);b&&(n.goToDay(b),f(b))}}}function SL(e,n){const{selected:r,required:t,onSelect:l}=e,[s,u]=qs(r,l?r:void 0),d=l?r:s,{isSameDay:m}=n,E=T=>d?.some(k=>m(k,T))??!1,{min:f,max:v}=e;return{selected:d,select:(T,k,O)=>{let p=[...d??[]];if(E(T)){if(d?.length===f||t&&d?.length===1)return;p=d?.filter(b=>!m(b,T))}else d?.length===v?p=[T]:p=[...p,T];return l||u(p),l?.(p,T,k,O),p},isSelected:E}}function OL(e,n,r=0,t=0,l=!1,s=vr){const{from:u,to:d}=n||{},{isSameDay:m,isAfter:E,isBefore:f}=s;let v;if(!u&&!d)v={from:e,to:r>0?void 0:e};else if(u&&!d)m(u,e)?l?v={from:u,to:void 0}:v=void 0:f(e,u)?v={from:e,to:u}:v={from:u,to:e};else if(u&&d)if(m(u,e)&&m(d,e))l?v={from:u,to:d}:v=void 0;else if(m(u,e))v={from:u,to:r>0?void 0:e};else if(m(d,e))v={from:e,to:r>0?void 0:e};else if(f(e,u))v={from:e,to:d};else if(E(e,u))v={from:u,to:e};else if(E(e,d))v={from:u,to:e};else throw new Error("Invalid range");if(v?.from&&v?.to){const _=s.differenceInCalendarDays(v.to,v.from);t>0&&_>t?v={from:e,to:void 0}:r>1&&_<r&&(v={from:e,to:void 0})}return v}function DL(e,n,r=vr){const t=Array.isArray(n)?n:[n];let l=e.from;const s=r.differenceInCalendarDays(e.to,e.from),u=Math.min(s,6);for(let d=0;d<=u;d++){if(t.includes(l.getDay()))return!0;l=r.addDays(l,1)}return!1}function tE(e,n,r=vr){return Pr(e,n.from,!1,r)||Pr(e,n.to,!1,r)||Pr(n,e.from,!1,r)||Pr(n,e.to,!1,r)}function IL(e,n,r=vr){const t=Array.isArray(n)?n:[n];if(t.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:r.isDate(d)?Pr(e,d,!1,r):wg(d,r)?d.some(m=>Pr(e,m,!1,r)):Pd(d)?d.from&&d.to?tE(e,{from:d.from,to:d.to},r):!1:Pg(d)?DL(e,d.dayOfWeek,r):Dg(d)?r.isAfter(d.before,d.after)?tE(e,{from:r.addDays(d.after,1),to:r.addDays(d.before,-1)},r):wt(e.from,d,r)||wt(e.to,d,r):Ig(d)||Lg(d)?wt(e.from,d,r)||wt(e.to,d,r):!1))return!0;const u=t.filter(d=>typeof d=="function");if(u.length){let d=e.from;const m=r.differenceInCalendarDays(e.to,e.from);for(let E=0;E<=m;E++){if(u.some(f=>f(d)))return!0;d=r.addDays(d,1)}}return!1}function LL(e,n){const{disabled:r,excludeDisabled:t,selected:l,required:s,onSelect:u}=e,[d,m]=qs(l,u?l:void 0),E=u?l:d;return{selected:E,select:(_,T,k)=>{const{min:O,max:p}=e,b=_?OL(_,E,O,p,s,n):void 0;return t&&r&&b?.from&&b.to&&IL({from:b.from,to:b.to},r,n)&&(b.from=_,b.to=void 0),u||m(b),u?.(b,_,T,k),b},isSelected:_=>E&&Pr(E,_,!1,n)}}function PL(e,n){const{selected:r,required:t,onSelect:l}=e,[s,u]=qs(r,l?r:void 0),d=l?r:s,{isSameDay:m}=n;return{selected:d,select:(v,_,T)=>{let k=v;return!t&&d&&d&&m(v,d)&&(k=void 0),l||u(k),l?.(k,v,_,T),k},isSelected:v=>d?m(d,v):!1}}function wL(e,n){const r=PL(e,n),t=SL(e,n),l=LL(e,n);switch(e.mode){case"single":return r;case"multiple":return t;case"range":return l;default:return}}function FL(e){let n=e;n.timeZone&&(n={...e},n.today&&(n.today=new Un(n.today,n.timeZone)),n.month&&(n.month=new Un(n.month,n.timeZone)),n.defaultMonth&&(n.defaultMonth=new Un(n.defaultMonth,n.timeZone)),n.startMonth&&(n.startMonth=new Un(n.startMonth,n.timeZone)),n.endMonth&&(n.endMonth=new Un(n.endMonth,n.timeZone)),n.mode==="single"&&n.selected?n.selected=new Un(n.selected,n.timeZone):n.mode==="multiple"&&n.selected?n.selected=n.selected?.map(Ae=>new Un(Ae,n.timeZone)):n.mode==="range"&&n.selected&&(n.selected={from:n.selected.from?new Un(n.selected.from,n.timeZone):void 0,to:n.selected.to?new Un(n.selected.to,n.timeZone):void 0}));const{components:r,formatters:t,labels:l,dateLib:s,locale:u,classNames:d}=D.useMemo(()=>{const Ae={...Gs,...n.locale};return{dateLib:new Kr({locale:Ae,weekStartsOn:n.broadcastCalendar?1:n.weekStartsOn,firstWeekContainsDate:n.firstWeekContainsDate,useAdditionalWeekYearTokens:n.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:n.useAdditionalDayOfYearTokens,timeZone:n.timeZone,numerals:n.numerals},n.dateLib),components:GI(n.components),formatters:WI(n.formatters),labels:{...dL,...n.labels},locale:Ae,classNames:{...BI(),...n.classNames}}},[n.locale,n.broadcastCalendar,n.weekStartsOn,n.firstWeekContainsDate,n.useAdditionalWeekYearTokens,n.useAdditionalDayOfYearTokens,n.timeZone,n.numerals,n.dateLib,n.components,n.formatters,n.labels,n.classNames]),{captionLayout:m,mode:E,navLayout:f,numberOfMonths:v=1,onDayBlur:_,onDayClick:T,onDayFocus:k,onDayKeyDown:O,onDayMouseEnter:p,onDayMouseLeave:b,onNextClick:S,onPrevClick:N,showWeekNumber:L,styles:y}=n,{formatCaption:K,formatDay:F,formatMonthDropdown:G,formatWeekNumber:H,formatWeekNumberHeader:W,formatWeekdayName:Y,formatYearDropdown:x}=t,V=NL(n,s),{days:X,months:ne,navStart:te,navEnd:se,previousMonth:Q,nextMonth:oe,goToMonth:Re}=V,ge=oI(X,n,s),{isSelected:Qe,select:dn,selected:ut}=wL(n,s)??{},{blur:_e,focused:Te,isFocusTarget:en,moveFocus:nn,setFocused:Nn}=bL(n,V,ge,Qe??(()=>!1),s),{labelDayButton:dt,labelGridcell:Vn,labelGrid:Fn,labelMonthDropdown:Zn,labelNav:$e,labelPrevious:An,labelNext:ct,labelWeekday:vn,labelWeekNumber:mt,labelWeekNumberHeader:Qn,labelYearDropdown:P}=l,U=D.useMemo(()=>XI(s,n.ISOWeek),[s,n.ISOWeek]),q=E!==void 0||T!==void 0,ae=D.useCallback(()=>{Q&&(Re(Q),N?.(Q))},[Q,Re,N]),re=D.useCallback(()=>{oe&&(Re(oe),S?.(oe))},[Re,oe,S]),ee=D.useCallback((Ae,ze)=>Ye=>{Ye.preventDefault(),Ye.stopPropagation(),Nn(Ae),dn?.(Ae.date,ze,Ye),T?.(Ae.date,ze,Ye)},[dn,T,Nn]),me=D.useCallback((Ae,ze)=>Ye=>{Nn(Ae),k?.(Ae.date,ze,Ye)},[k,Nn]),Oe=D.useCallback((Ae,ze)=>Ye=>{_e(),_?.(Ae.date,ze,Ye)},[_e,_]),Pe=D.useCallback((Ae,ze)=>Ye=>{const Gt={ArrowLeft:["day",n.dir==="rtl"?"after":"before"],ArrowRight:["day",n.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[Ye.shiftKey?"year":"month","before"],PageDown:[Ye.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Gt[Ye.key]){Ye.preventDefault(),Ye.stopPropagation();const[nt,Da]=Gt[Ye.key];nn(nt,Da)}O?.(Ae.date,ze,Ye)},[nn,O,n.dir]),Ln=D.useCallback((Ae,ze)=>Ye=>{p?.(Ae.date,ze,Ye)},[p]),Qt=D.useCallback((Ae,ze)=>Ye=>{b?.(Ae.date,ze,Ye)},[b]),et=D.useCallback(Ae=>ze=>{const Ye=Number(ze.target.value),Gt=s.setMonth(s.startOfMonth(Ae),Ye);Re(Gt)},[s,Re]),Zr=D.useCallback(Ae=>ze=>{const Ye=Number(ze.target.value),Gt=s.setYear(s.startOfMonth(Ae),Ye);Re(Gt)},[s,Re]),{className:_r,style:hr}=D.useMemo(()=>({className:[d[fe.Root],n.className].filter(Boolean).join(" "),style:{...y?.[fe.Root],...n.style}}),[d,n.className,n.style,y]),Qr=VI(n),pr=D.useRef(null);EL(pr,!!n.animate,{classNames:d,months:ne,focused:Te,dateLib:s});const ea={dayPickerProps:n,selected:ut,select:dn,isSelected:Qe,months:ne,nextMonth:oe,previousMonth:Q,goToMonth:Re,getModifiers:ge,components:r,classNames:d,styles:y,labels:l,formatters:t};return g.createElement(Fg.Provider,{value:ea},g.createElement(r.Root,{rootRef:n.animate?pr:void 0,className:_r,style:hr,dir:n.dir,id:n.id,lang:n.lang,nonce:n.nonce,title:n.title,role:n.role,"aria-label":n["aria-label"],...Qr},g.createElement(r.Months,{className:d[fe.Months],style:y?.[fe.Months]},!n.hideNavigation&&!f&&g.createElement(r.Nav,{"data-animated-nav":n.animate?"true":void 0,className:d[fe.Nav],style:y?.[fe.Nav],"aria-label":$e(),onPreviousClick:ae,onNextClick:re,previousMonth:Q,nextMonth:oe}),ne.map((Ae,ze)=>{const Ye=JI(Ae.date,te,se,t,s),Gt=ZI(te,se,t,s);return g.createElement(r.Month,{"data-animated-month":n.animate?"true":void 0,className:d[fe.Month],style:y?.[fe.Month],key:ze,displayIndex:ze,calendarMonth:Ae},f==="around"&&!n.hideNavigation&&ze===0&&g.createElement(r.PreviousMonthButton,{type:"button",className:d[fe.PreviousMonthButton],tabIndex:Q?void 0:-1,"aria-disabled":Q?void 0:!0,"aria-label":An(Q),onClick:ae,"data-animated-button":n.animate?"true":void 0},g.createElement(r.Chevron,{disabled:Q?void 0:!0,className:d[fe.Chevron],orientation:n.dir==="rtl"?"right":"left"})),g.createElement(r.MonthCaption,{"data-animated-caption":n.animate?"true":void 0,className:d[fe.MonthCaption],style:y?.[fe.MonthCaption],calendarMonth:Ae,displayIndex:ze},m?.startsWith("dropdown")?g.createElement(r.DropdownNav,{className:d[fe.Dropdowns],style:y?.[fe.Dropdowns]},m==="dropdown"||m==="dropdown-months"?g.createElement(r.MonthsDropdown,{className:d[fe.MonthsDropdown],"aria-label":Zn(),classNames:d,components:r,disabled:!!n.disableNavigation,onChange:et(Ae.date),options:Ye,style:y?.[fe.Dropdown],value:s.getMonth(Ae.date)}):g.createElement("span",null,G(Ae.date,s)),m==="dropdown"||m==="dropdown-years"?g.createElement(r.YearsDropdown,{className:d[fe.YearsDropdown],"aria-label":P(s.options),classNames:d,components:r,disabled:!!n.disableNavigation,onChange:Zr(Ae.date),options:Gt,style:y?.[fe.Dropdown],value:s.getYear(Ae.date)}):g.createElement("span",null,x(Ae.date,s)),g.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},K(Ae.date,s.options,s))):g.createElement(r.CaptionLabel,{className:d[fe.CaptionLabel],role:"status","aria-live":"polite"},K(Ae.date,s.options,s))),f==="around"&&!n.hideNavigation&&ze===v-1&&g.createElement(r.NextMonthButton,{type:"button",className:d[fe.NextMonthButton],tabIndex:oe?void 0:-1,"aria-disabled":oe?void 0:!0,"aria-label":ct(oe),onClick:re,"data-animated-button":n.animate?"true":void 0},g.createElement(r.Chevron,{disabled:oe?void 0:!0,className:d[fe.Chevron],orientation:n.dir==="rtl"?"left":"right"})),ze===v-1&&f==="after"&&!n.hideNavigation&&g.createElement(r.Nav,{"data-animated-nav":n.animate?"true":void 0,className:d[fe.Nav],style:y?.[fe.Nav],"aria-label":$e(),onPreviousClick:ae,onNextClick:re,previousMonth:Q,nextMonth:oe}),g.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":E==="multiple"||E==="range","aria-label":Fn(Ae.date,s.options,s)||void 0,className:d[fe.MonthGrid],style:y?.[fe.MonthGrid]},!n.hideWeekdays&&g.createElement(r.Weekdays,{"data-animated-weekdays":n.animate?"true":void 0,className:d[fe.Weekdays],style:y?.[fe.Weekdays]},L&&g.createElement(r.WeekNumberHeader,{"aria-label":Qn(s.options),className:d[fe.WeekNumberHeader],style:y?.[fe.WeekNumberHeader],scope:"col"},W()),U.map((nt,Da)=>g.createElement(r.Weekday,{"aria-label":vn(nt,s.options,s),className:d[fe.Weekday],key:Da,style:y?.[fe.Weekday],scope:"col"},Y(nt,s.options,s)))),g.createElement(r.Weeks,{"data-animated-weeks":n.animate?"true":void 0,className:d[fe.Weeks],style:y?.[fe.Weeks]},Ae.weeks.map((nt,Da)=>g.createElement(r.Week,{className:d[fe.Week],key:nt.weekNumber,style:y?.[fe.Week],week:nt},L&&g.createElement(r.WeekNumber,{week:nt,style:y?.[fe.WeekNumber],"aria-label":mt(nt.weekNumber,{locale:u}),className:d[fe.WeekNumber],scope:"row",role:"rowheader"},H(nt.weekNumber,s)),nt.days.map(Pn=>{const{date:Nt}=Pn,Ve=ge(Pn);if(Ve[sn.focused]=!Ve.hidden&&!!Te?.isEqualTo(Pn),Ve[Yt.selected]=Qe?.(Nt)||Ve.selected,Pd(ut)){const{from:fl,to:na}=ut;Ve[Yt.range_start]=!!(fl&&na&&s.isSameDay(Nt,fl)),Ve[Yt.range_end]=!!(fl&&na&&s.isSameDay(Nt,na)),Ve[Yt.range_middle]=Pr(ut,Nt,!0,s)}const ui=zI(Ve,y,n.modifiersStyles),Zs=uI(Ve,d,n.modifiersClassNames),Qs=!q&&!Ve.hidden?Vn(Nt,Ve,s.options,s):void 0;return g.createElement(r.Day,{key:`${s.format(Nt,"yyyy-MM-dd")}_${s.format(Pn.displayMonth,"yyyy-MM")}`,day:Pn,modifiers:Ve,className:Zs.join(" "),style:ui,role:"gridcell","aria-selected":Ve.selected||void 0,"aria-label":Qs,"data-day":s.format(Nt,"yyyy-MM-dd"),"data-month":Pn.outside?s.format(Nt,"yyyy-MM"):void 0,"data-selected":Ve.selected||void 0,"data-disabled":Ve.disabled||void 0,"data-hidden":Ve.hidden||void 0,"data-outside":Pn.outside||void 0,"data-focused":Ve.focused||void 0,"data-today":Ve.today||void 0},!Ve.hidden&&q?g.createElement(r.DayButton,{className:d[fe.DayButton],style:y?.[fe.DayButton],type:"button",day:Pn,modifiers:Ve,disabled:Ve.disabled||void 0,tabIndex:en(Pn)?0:-1,"aria-label":dt(Nt,Ve,s.options,s),onClick:ee(Pn,Ve),onBlur:Oe(Pn,Ve),onFocus:me(Pn,Ve),onKeyDown:Pe(Pn,Ve),onMouseEnter:Ln(Pn,Ve),onMouseLeave:Qt(Pn,Ve)},F(Nt,s.options,s)):!Ve.hidden&&F(Pn.date,s.options,s))}))))))})),n.footer&&g.createElement(r.Footer,{className:d[fe.Footer],style:y?.[fe.Footer],role:"status","aria-live":"polite"},n.footer)))}var KL=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const xg=D.forwardRef((e,n)=>{var{as:r="div",className:t,above:l,below:s,variant:u,asChild:d}=e,m=KL(e,["as","className","above","below","variant","asChild"]);const{cn:E}=Ee(),f=u==="show"?l:s,v=u==="show"?s:l,_=d?Ks:r;return g.createElement(_,Object.assign({},m,{ref:n,className:E("navds-responsive",t,{[`navds-responsive__above--${f}`]:f,[`navds-responsive__below--${v}`]:v})}))}),ML=D.forwardRef((e,n)=>g.createElement(xg,Object.assign({},e,{ref:n,variant:"hide"}))),wd=D.forwardRef((e,n)=>g.createElement(xg,Object.assign({},e,{ref:n,variant:"show"})));function $t(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function GL({day:e,fromDate:n,toDate:r}){const t=r&&Wr(e,Fr(r))>0,l=n&&Wr(Fr(n),e)>0;return t||l||!1}const Ug="dd.MM.yyyy",VL="MMMM yyyy",Hg=[Ug,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...Hg];const pu=(e,n,r,t,l)=>{let s;const u=Hg;if(l){for(const d of u)if(s=el(e,d,n,{locale:r}),$t(s)&&!Tu(e,n,r,u))return s;for(const d of[...u.map(m=>m.replace("yyyy","yy"))])if(s=el(e,d,n,{locale:r}),$t(s)&&Tu(e,n,r,u)){const m=BL(e,d,n,r);return $t(new Date(m))?new Date(m):new Date("Invalid date")}return new Date("Invalid date")}for(const d of u)if(s=el(e,d,n,{locale:r}),$t(s)&&!Tu(e,n,r,u))return s;return new Date("Invalid date")};function Tu(e,n,r,t){let l;const s=t.map(u=>u.replace("yyyy","yy"));for(const u of s)if(l=el(e,u,n,{locale:r}),$t(l))return!0;return!1}function BL(e,n,r,t){const l=el(rE(e,"19"),n.replace("yy","yyyy"),r,{locale:t}),s=el(rE(e,"20"),n.replace("yy","yyyy"),r,{locale:t});return $t(l)&&$t(s)?ni(l,o1(new Date,{years:80}))?s:l:new Date("Invalid date")}function rE(e,n){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${n}${r}`}const Dl=(e,n,r,t)=>Ta(e,t??Ug,{locale:n}),xL=({month:e,start:n,end:r})=>{if(!e)return;let t=e;return n&&ni(t,n)&&(t=n),r&&rg(t,r)&&(t=r),pa(t)};function UL(e,n,r,t){return Zv({start:ei(e),end:Hs(e)}).map(u=>{const d=Ta(u,"LLLL",{locale:t}),m=Sd(u),E=n&&u<pa(n)||r&&u>pa(r)||!1;return{value:m,label:d,disabled:E}})}function HL(e,n,r){if(!e||!n)return;const t=ei(e),l=Hs(n),s=[];let u=t;for(;ni(u,l)||og(u,l);)s.push(u),u=yd(u,1);return s.map(d=>{const m=Ta(d,"yyyy",{locale:r});return{value:Od(d),label:m,disabled:!1}})}function jL({captionLayout:e,startMonth:n,endMonth:r,today:t}){const l=e==="dropdown",s=t??new Date;return n?n=pa(n):!n&&l&&(n=ei(yd(s,-100))),r?r=Xv(r):!r&&l&&(r=Hs(s)),[n&&Fr(n),r&&Fr(r)]}var CL=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const qL=e=>{var{day:n,modifiers:r,locale:t,children:l}=e,s=CL(e,["day","modifiers","locale","children"]);const{cn:u}=Ee(),d=D.useRef(null);return D.useEffect(()=>{var m;r.focused&&((m=d.current)===null||m===void 0||m.focus())},[r.focused]),r.hidden?g.createElement(g.Fragment,null):g.createElement("button",Object.assign({},s,{ref:d,"aria-hidden":n.outside,"aria-pressed":!!r.selected,"aria-label":Ta(n.date,"cccc d",{locale:t}),"data-pressed":r.selected,"data-today":r.today||void 0,className:u(s.className,{"rdp-day_disabled":r.disabled,"rdp-day_selected":r.selected,"rdp-day_range_start":r.range_start,"rdp-day_range_middle":r.range_middle,"rdp-day_range_end":r.range_end,"rdp-day_today":r.today,"rdp-day_outside":r.outside,"rdp-day__weekend":r.weekend})}),l)};var YL=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Gu=D.forwardRef((e,n)=>{const{inputProps:r,errorId:t,showErrorMsg:l,hasError:s,size:u,inputDescriptionId:d,readOnly:m}=zr(e,"select"),{children:E,label:f,className:v,description:_,htmlSize:T,hideLabel:k=!1,style:O}=e,p=YL(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:b}=Ee(),S={onMouseDown:N=>{m&&(N.preventDefault(),N.target.focus())},onKeyDown:N=>{m&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(N.key)&&N.preventDefault()}};return g.createElement("div",{className:b(v,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":m,"navds-select--error":s,"navds-select--readonly":m})},g.createElement(Wt,{htmlFor:r.id,size:u,className:b("navds-form-field__label",{"navds-sr-only":k})},m&&g.createElement(Ss,null),f),!!_&&g.createElement(un,{className:b("navds-form-field__description",{"navds-sr-only":k}),id:d,size:u,as:"div"},_),g.createElement("div",{className:b("navds-select__container"),style:O},g.createElement("select",Object.assign({},fn(p,["error","errorId","size","readOnly"]),r,S,{ref:n,className:b("navds-select__input","navds-body-short",`navds-body-short--${u??"medium"}`),size:T}),E),g.createElement(fd,{className:b("navds-select__chevron"),"aria-hidden":!0})),g.createElement("div",{className:b("navds-form-field__error"),id:t,"aria-relevant":"additions removals","aria-live":"polite"},l&&g.createElement(ba,{size:u,showIcon:!0},e.error)))}),jg=({week:{weekNumber:e,days:n},onWeekNumberClick:r,className:t,style:l,showOnDesktop:s})=>{const u=Cs().translate,{cn:d}=Ee(),{getModifiers:m}=Oa(),E=D.useMemo(()=>n.filter(v=>{const _=m(v);return!(_.hidden||_.outside||_.disabled)}).length===0,[n,m]),f=s?wd:ML;return!r||E?g.createElement(f,{above:"sm",asChild:!0},g.createElement("td",{className:"rdp-cell"},g.createElement(md,{as:"span",textColor:"subtle",className:t,style:l,"aria-label":u("weekNumber",{week:e})},e))):g.createElement(f,{above:"sm",asChild:!0},g.createElement("td",{className:d("rdp-cell",{"navds-date__week-wrapper":!s})},g.createElement(Cn,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":u("selectWeekNumber",{week:e}),style:l,className:d("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{r(e,n.map(v=>v.date))},icon:g.createElement("span",{className:d("navds-date__weeknumber-number")},e)})))},$L=({onWeekNumberClick:e,weeks:n})=>{const r=Cs().translate,{cn:t}=Ee(),l=Xt();return e?g.createElement(wd,{below:"sm",asChild:!0},g.createElement("table",{className:"rdp-table",role:"grid"},g.createElement("tbody",{className:"rdp-tbody"},g.createElement("tr",{className:t("rdp-row navds-date__week-row")},g.createElement(md,{as:"th",weight:"semibold",className:t("rdp-cell navds-date__week-cell")},g.createElement("span",{className:t("navds-date__week-wrapper"),id:l},r("week"))),n?.map(s=>g.createElement(jg,{key:s.weekNumber,week:s,onWeekNumberClick:e,showOnDesktop:!1,className:t("navds-date__week-wrapper")})))))):null};var WL=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const JL=e=>{var{children:n,calendarMonth:r,locale:t,onWeekNumberClick:l}=e,s=WL(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:u,goToMonth:d,previousMonth:m,nextMonth:E}=Oa(),{captionLayout:f}=u,{cn:v}=Ee(),_=Cs().translate,T=D.useCallback((N,L)=>{const y=Number(L.target.value),K=ug(pa(N),y);d(K)},[d]),k=D.useCallback((N,L)=>{const y=Number(L.target.value),K=dg(pa(N),y);d(K)},[d]),[O,p]=jL({captionLayout:f==="dropdown"?"dropdown":"label",startMonth:u.startMonth,endMonth:u.endMonth,today:u.today}),b=UL(r.date,O,p,t),S=HL(O,p,t);return g.createElement("div",Object.assign({},fn(s,["displayIndex"])),g.createElement("div",{className:v("navds-date__caption")},f?.startsWith("dropdown")&&g.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:v("navds-sr-only")},Ta(r.date,"LLLL y",{locale:t})),g.createElement(Cn,{variant:"tertiary-neutral",disabled:!m,onClick:()=>m&&d(m),icon:g.createElement(qA,{title:_("goToPreviousMonth")}),className:v("navds-date__caption-button"),type:"button"}),f?.startsWith("dropdown")?g.createElement("div",{className:v("navds-date__caption")},g.createElement(Gu,{label:_("month"),hideLabel:!0,className:v("navds-date__caption__month"),onChange:N=>T(r.date,N),value:Sd(r.date)},b?.map(({value:N,label:L,disabled:y})=>g.createElement("option",{key:N,value:N,disabled:y},L))),g.createElement(Gu,{label:_("year"),hideLabel:!0,className:v("navds-date__caption__year"),onChange:N=>k(r.date,N),value:Od(r.date)},S?.map(({value:N,label:L,disabled:y})=>g.createElement("option",{key:N,value:N,disabled:y},L)))):g.createElement(un,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:v("navds-date__caption-label")},Ta(r.date,"LLLL y",{locale:t})),g.createElement(Cn,{variant:"tertiary-neutral",icon:g.createElement($A,{title:_("goToNextMonth")}),onClick:()=>E&&d(E),disabled:!E,className:v("navds-date__caption-button"),type:"button"})),g.createElement($L,{weeks:r.weeks,onWeekNumberClick:l}),n)};var zL=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const XL={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},Cg=e=>{var{className:n,dropdownCaption:r,disabled:t=[],disableWeekends:l=!1,showWeekNumber:s=!1,selected:u,fixedWeeks:d=!1,onWeekNumberClick:m,fromDate:E,toDate:f,month:v,mode:_,handleSelect:T,locale:k}=e,O=zL(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:p}=Ee(),b=$v(),S=k?Eg(k):b,N=_??"single";return g.createElement(FL,Object.assign({captionLayout:r?"dropdown":"label",hideNavigation:!0,locale:S,mode:N,onSelect:(L,y)=>{if(N!=="range"||L||!kg(u)){T(L);return}if(!u.to){T({from:y,to:void 0});return}let K;Nd(u.to,y)?K=void 0:ni(y,u.to)?K={from:y,to:u.to}:K={from:u.to,to:y},T(K)},selected:u,classNames:XL,components:{MonthCaption:()=>g.createElement(g.Fragment,null),DayButton:D.useCallback(L=>g.createElement(qL,Object.assign({},L,{locale:S})),[S]),Month:D.useCallback(L=>g.createElement(JL,Object.assign({},L,{locale:S,onWeekNumberClick:N==="multiple"?m:void 0})),[S,N,m]),Day:D.useCallback(L=>g.createElement("td",Object.assign({},fn(L,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:D.useCallback(L=>g.createElement(jg,Object.assign({},L,{showOnDesktop:!0,onWeekNumberClick:N==="multiple"?m:void 0})),[N,m]),WeekNumberHeader:D.useCallback(L=>g.createElement(wd,{above:"sm",asChild:!0},g.createElement("th",Object.assign({},L))),[]),Weekdays:D.useCallback(L=>g.createElement("thead",Object.assign({},L,{className:"rdp-head","aria-hidden":!0}),g.createElement("tr",{className:"rdp-head_row"},L.children)),[])},className:p("navds-date",n),disabled:L=>l&&As(L)||wt(L,t)||GL({day:L,fromDate:E,toDate:f}),weekStartsOn:1,modifiers:{weekend:L=>l&&As(L)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:s,fixedWeeks:d,showOutsideDays:!0,startMonth:E,endMonth:f,month:xL({month:v,start:E,end:f})},fn(O,["onSelect","role","id","defaultSelected"])))};var ZL=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const QL=D.forwardRef((e,n)=>{var{className:r,locale:t,translations:l,selected:s,defaultSelected:u,onSelect:d,mode:m}=e,E=ZL(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:f}=Ee(),v=Kt("DatePicker",l,vg(t)),[_,T]=Yl({defaultValue:u,value:s,onChange:k=>d?.(k)});return g.createElement(gg,{translate:v},g.createElement("div",{ref:n,className:f("navds-date__standalone-wrapper",r)},g.createElement(Cg,Object.assign({},E,{locale:t,handleSelect:T,selected:_,mode:m}))))});var eP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Ds=D.forwardRef((e,n)=>{var{children:r,locale:t,translations:l,selected:s,id:u,defaultSelected:d,wrapperClassName:m,open:E,onClose:f,onOpenToggle:v,strategy:_,mode:T}=e,k=eP(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const O=Kt("DatePicker",l,vg(t)),{cn:p}=Ee(),b=Xt(u),[S,N]=Yl({defaultValue:!1,value:E}),[L,y]=D.useState(null),K=ka(y,n),[F,G]=Yl({defaultValue:d,value:s,onChange:H=>{var W;let Y=!1;T==="single"&&H?Y=!0:kg(H)&&H.from&&H.to&&(Y=!0,Nd(H.from,H.to)&&(Y=!1)),Y&&(f?.(),N(!1)),(W=k?.onSelect)===null||W===void 0||W.call(k,H)}});return g.createElement(gg,{translate:O},g.createElement(P1,{open:S,onOpen:()=>{N(H=>!H),v?.()},ariaId:b,defined:!0},g.createElement("div",{ref:K,className:p("navds-date__wrapper",m)},r,g.createElement(Z1,{open:S,anchor:L,onClose:()=>{f?.(),S&&N(!1)},locale:t,translate:O,variant:T??"single",popoverProps:{id:b,strategy:_}},g.createElement(Cg,Object.assign({},k,{locale:t,handleSelect:G,selected:F,mode:T}))))))});Ds.Standalone=QL;Ds.Input=w1;const nP=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),tP=(e={})=>{var n;const{locale:r,required:t,defaultSelected:l,today:s=new Date,fromDate:u,toDate:d,disabled:m,disableWeekends:E,onDateChange:f,inputFormat:v,onValidate:_,defaultMonth:T,allowTwoDigitYear:k=!0}=e,[O,p]=D.useState(null),b=$v(),S=r?Eg(r):b,[N,L]=D.useState(l),[y,K]=D.useState((n=N??T)!==null&&n!==void 0?n:s),[F,G]=D.useState(N),[H,W]=D.useState(!1),Y=N?Dl(N,S,"date",v):"",[x,V]=D.useState(Y),X=D.useCallback(_e=>{var Te,en;W(_e),_e&&K((en=(Te=F??N)!==null&&Te!==void 0?Te:T)!==null&&en!==void 0?en:s)},[T,N,F,s]),ne=_e=>{f?.(_e),G(_e)},te=(_e={})=>_?.(nP(_e));return{datepickerProps:{month:y,onMonthChange:K,onDayClick:(_e,{selected:Te})=>{if(!(Te&&t)){if(_e&&!Te&&(X(!1),O?.focus()),Te){ne(void 0),V(""),te({isValidDate:!1,isEmpty:!0});return}ne(_e),te(),K(_e),V(_e?Dl(_e,S,"date",v):"")}},selected:F??new Date("Invalid date"),locale:r,fromDate:u,toDate:d,today:s,open:H,onClose:()=>{X(!1),O?.focus()},onOpenToggle:()=>X(!H),disabled:m,disableWeekends:E},inputProps:{onChange:_e=>{V(_e.target.value);const Te=pu(_e.target.value,s,S,"date",k),en=u&&Te&&Wr(u,Te)>0,nn=d&&Te&&Wr(Te,d)>0;if(!$t(Te)||E&&As(Te)||m&&wt(Te,m)){ne(void 0),te({isInvalid:!$t(Te),isWeekend:E&&As(Te),isDisabled:m&&wt(Te,m),isValidDate:!1,isEmpty:!_e.target.value,isBefore:en??!1,isAfter:nn??!1});return}if(en||nn){ne(void 0),te({isValidDate:!1,isBefore:en??!1,isAfter:nn??!1});return}ne(Te),te(),K(T??Te)},onFocus:_e=>{if(_e.target.readOnly)return;const Te=pu(_e.target.value,s,S,"date",k);if($t(Te)){V(Dl(Te,S,"date",v));const en=u&&Te&&Wr(u,Te)>0,nn=d&&Te&&Wr(Te,d)>0;!en&&!nn&&K(Te)}},onBlur:_e=>{const Te=pu(_e.target.value,s,S,"date",k);$t(Te)&&V(Dl(Te,S,"date",v))},value:x,setAnchorRef:p},reset:()=>{var _e;ne(N),K((_e=N??T)!==null&&_e!==void 0?_e:s),V(Y??""),L(l)},selectedDay:F,setSelected:_e=>{var Te;ne(_e),K((Te=_e??T)!==null&&Te!==void 0?Te:s),V(_e?Dl(_e,S,"date",v):"")}}};function Gn(e,n,r,t){return t?typeof t=="string"?{[`--__${e}c-${n}-${r}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([l,s])=>[`--__${e}c-${n}-${r}-${l}`,s])):{}}const rP={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},aE=(e,n,r,t,l,s)=>n.split(" ").map((u,d,m)=>{var E;if(e==="margin-inline"&&u==="full")return`calc((100vw - ${100/m.length}%)/-2)`;if(e==="padding-inline"&&u==="full")return`calc((100vw - ${100/m.length}%)/2)`;if(["mi","mb"].includes(e)&&u==="auto")return"auto";let f=`var(--${s}-${r}-${u})`;if(t.includes(u))f=u==="px"?"1px":u;else if(u.startsWith("space"))f=`var(--${s}-${u})`;else{const v=`--${s}-spacing-${u}`;f=`var(${(E=rP[v])!==null&&E!==void 0?E:v})`}return l?u==="0"?"0":`calc(-1 * ${f})`:f}).join(" ");function Pt(e,n,r,t,l,s=!1,u=[]){if(!l)return{};if(typeof l=="string")return{[`--__${e}c-${n}-${r}-xs`]:aE(r,l,t,u,s,e)};const d={};return Object.entries(l).forEach(([m,E])=>{d[`--__${e}c-${n}-${r}-${m}`]=aE(r,E,t,u,s,e)}),d}const aP=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],lP=({children:e,className:n,padding:r,paddingInline:t,paddingBlock:l,margin:s,marginInline:u,marginBlock:d,width:m,minWidth:E,maxWidth:f,height:v,minHeight:_,maxHeight:T,position:k,inset:O,top:p,right:b,left:S,bottom:N,overflow:L,overflowX:y,overflowY:K,flexBasis:F,flexGrow:G,flexShrink:H,gridColumn:W})=>{const Y=il(!1),{cn:x}=Ee(),V=Y?.isDarkside?"ax":"a",X=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Pt(V,"r","p","spacing",r)),Pt(V,"r","pi","spacing",t)),Pt(V,"r","pb","spacing",l)),Pt(V,"r","m","spacing",s)),Pt(V,"r","mi","spacing",u)),Pt(V,"r","mb","spacing",d)),Gn(V,"r","w",m)),Gn(V,"r","minw",E)),Gn(V,"r","maxw",f)),Gn(V,"r","h",v)),Gn(V,"r","minh",_)),Gn(V,"r","maxh",T)),Gn(V,"r","position",k)),Pt(V,"r","inset","spacing",O)),Pt(V,"r","top","spacing",p)),Pt(V,"r","right","spacing",b)),Pt(V,"r","bottom","spacing",N)),Pt(V,"r","left","spacing",S)),Gn(V,"r","overflow",L)),Gn(V,"r","overflowx",y)),Gn(V,"r","overflowy",K)),Gn(V,"r","flex-basis",F)),Gn(V,"r","flex-grow",G)),Gn(V,"r","flex-shrink",H)),Gn(V,"r","grid-column",W));return g.createElement(Ks,{className:x({className:n,"navds-r-p":r,"navds-r-pi":t,"navds-r-pb":l,"navds-r-m":s,"navds-r-mi":u,"navds-r-mb":d,"navds-r-w":m,"navds-r-minw":E,"navds-r-maxw":f,"navds-r-h":v,"navds-r-minh":_,"navds-r-maxh":T,"navds-r-position":k,"navds-r-inset":O,"navds-r-top":p,"navds-r-right":b,"navds-r-bottom":N,"navds-r-left":S,"navds-r-overflow":L,"navds-r-overflowx":y,"navds-r-overflowy":K,"navds-r-flex-basis":F,"navds-r-flex-grow":G,"navds-r-flex-shrink":H,"navds-r-grid-column":W}),style:X},e)};var iP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const qg=D.forwardRef((e,n)=>{var{children:r,className:t,as:l="div",align:s,justify:u,wrap:d=!0,gap:m,style:E,direction:f="row",asChild:v}=e,_=iP(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const T=il(!1),k=T?.isDarkside?"ax":"a",{cn:O}=Ee(),p=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},E),Pt(k,"stack","gap","spacing",m)),Gn(k,"stack","direction",f)),Gn(k,"stack","align",s)),Gn(k,"stack","justify",u)),b=v?Ks:l;return g.createElement(lP,Object.assign({},_),g.createElement(b,Object.assign({},fn(_,aP),{ref:n,style:p,className:O("navds-stack",t,{"navds-vstack":f==="column","navds-hstack":f==="row","navds-stack-gap":m,"navds-stack-align":s,"navds-stack-justify":u,"navds-stack-direction":f,"navds-stack-wrap":d})}),r))});var sP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const jt=D.forwardRef((e,n)=>{var{as:r="div"}=e,t=sP(e,["as"]);return g.createElement(qg,Object.assign({as:r},t,{ref:n,direction:"row"}))});var oP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Ra=D.forwardRef((e,n)=>{var{as:r="div"}=e,t=oP(e,["as"]);return g.createElement(qg,Object.assign({as:r},t,{ref:n,direction:"column",wrap:!1}))});var uP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const dP=D.forwardRef((e,n)=>{var{className:r}=e,t=uP(e,["className"]);const{cn:l}=Ee();return g.createElement("tbody",Object.assign({},t,{ref:n,className:l("navds-table__body",r)}))});var cP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Yg=D.forwardRef((e,n)=>{var{className:r,children:t,align:l,textSize:s}=e,u=cP(e,["className","children","align","textSize"]);const{cn:d}=Ee();return g.createElement("th",Object.assign({ref:n,className:d("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${l}`]:l,"navds-label--small":s==="small"})},u),t)}),$g=D.createContext(null);var mP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const fP=D.forwardRef((e,n)=>{var r,t,l,s,{className:u,children:d,sortable:m=!1,sortKey:E}=e,f=mP(e,["className","children","sortable","sortKey"]);const v=D.useContext($g),{cn:_}=Ee();return m&&!E&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),g.createElement(Yg,Object.assign({scope:"col",ref:n,className:_(u),"aria-sort":m?((r=v?.sort)===null||r===void 0?void 0:r.orderBy)===E?(t=v?.sort)===null||t===void 0?void 0:t.direction:"none":void 0},f),m?g.createElement("button",{type:"button",className:_("navds-table__sort-button"),onClick:m&&E?()=>{var T;return(T=v?.onSortChange)===null||T===void 0?void 0:T.call(v,E)}:void 0},d,((l=v?.sort)===null||l===void 0?void 0:l.orderBy)===E?((s=v?.sort)===null||s===void 0?void 0:s.direction)==="descending"?g.createElement(gk,{"aria-hidden":!0}):g.createElement(hk,{"aria-hidden":!0}):g.createElement(JA,{"aria-hidden":!0})):d)});var EP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Wg=D.forwardRef((e,n)=>{var{className:r,children:t="",align:l,textSize:s}=e,u=EP(e,["className","children","align","textSize"]);const{cn:d}=Ee();return g.createElement(un,Object.assign({as:"td",ref:n,className:d("navds-table__data-cell",r,{[`navds-table__data-cell--align-${l}`]:l}),size:s},u),t)});var vP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const gP=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function _P(e){const n=parseFloat(e);return!Number.isNaN(n)&&Number.isFinite(n)}function lE(e){return typeof e=="string"&&e[e.length-1]==="%"&&_P(e.substring(0,e.length-1))}function Ru(e,n){n===0&&e?.style&&(e.style.display="none")}function hP(e,n){n===0&&e?.style&&(e.style.display="")}const pP=e=>{var{children:n,className:r,innerClassName:t,duration:l=250,easing:s="ease",height:u}=e,d=vP(e,["children","className","innerClassName","duration","easing","height"]);const{cn:m}=Ee(),E=D.useRef(u),f=D.useRef(null),v=D.useRef(),_=D.useRef(),T=D.useRef(u),k=D.useRef("visible"),O=gP?0:l;typeof T.current=="number"?(typeof u!="string"&&(T.current=u<0?0:u),k.current="hidden"):lE(T.current)&&(T.current=u==="0%"?0:u,k.current="hidden");const[p,b]=D.useState(T.current),[S,N]=D.useState(k.current),[L,y]=D.useState(!1);D.useEffect(()=>{Ru(f.current,T.current)},[]),D.useEffect(()=>{if(u!==E.current&&f.current){hP(f.current,E.current),f.current.style.overflow="hidden";const H=f.current.offsetHeight;f.current.style.overflow="";const W=O;let Y,x,V="hidden",X;const ne=E.current==="auto";typeof u=="number"?(Y=u<0?0:u,x=Y):lE(u)?(Y=u==="0%"?0:u,x=Y):(Y=H,x="auto",V=void 0),ne&&(x=Y,Y=H),b(Y),N("hidden"),y(!ne),clearTimeout(_.current),clearTimeout(v.current),ne?(X=!0,_.current=setTimeout(()=>{b(x),N(V),y(X)},50),v.current=setTimeout(()=>{y(!1),Ru(f.current,x)},W)):_.current=setTimeout(()=>{b(x),N(V),y(!1),u!=="auto"&&Ru(f.current,Y)},W)}return E.current=u,()=>{clearTimeout(_.current),clearTimeout(v.current)}},[u]);const K={height:p,overflow:S};L&&(K.transition=`height ${O}ms ${s} 0ms`,K.WebkitTransition=K.transition);const G=typeof d["aria-hidden"]<"u"?d["aria-hidden"]:u===0;return g.createElement("div",Object.assign({},d,{className:m(r),style:K}),g.createElement("div",{"aria-hidden":G,className:m(t),ref:f},n))},TP=new Set(["BUTTON","A","INPUT","SELECT","TEXTAREA","DETAILS","SUMMARY","LABEL"]),RP=new Set(["button","link","checkbox","radio","switch","menuitem","option","tab","textbox","combobox","spinbutton","slider"]);function Jg(e){for(let n=e;n&&n.nodeName!=="TR"&&n.nodeName!=="TH";n=n.parentElement){const r=n.nodeName;if(TP.has(r))return!0;const t=n.getAttribute("role");if(t&&RP.has(t)||n.hasAttribute("tabindex")&&n.getAttribute("tabindex")!=="-1")return!0}return!1}var yP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const zg=D.forwardRef((e,n)=>{var{className:r,selected:t=!1,shadeOnHover:l=!0,onClick:s,onRowClick:u}=e,d=yP(e,["className","selected","shadeOnHover","onClick","onRowClick"]);const{cn:m}=Ee(),E=f=>{u&&(Jg(f.target)||u(f))};return g.createElement("tr",Object.assign({},d,{ref:n,className:m("navds-table__row",r,{"navds-table__row--selected":t,"navds-table__row--shade-on-hover":l}),onClick:dr(s,E),"data-interactive":!!u}))});var NP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const AP=D.forwardRef((e,n)=>{var{className:r,children:t,content:l,togglePlacement:s="left",defaultOpen:u=!1,open:d,onOpenChange:m,expansionDisabled:E=!1,expandOnRowClick:f=!1,colSpan:v=999,contentGutter:_,onClick:T}=e,k=NP(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:O}=Ee(),[p,b]=Yl({defaultValue:u,value:d,onChange:m}),S=Kt("global"),N=Xt(),L=K=>{b(F=>!F),K.stopPropagation()},y=K=>{f&&!E&&!Jg(K.target)&&L(K)};return g.createElement(g.Fragment,null,g.createElement(zg,Object.assign({},k,{ref:n,className:O("navds-table__expandable-row",r,{"navds-table__expandable-row--open":p,"navds-table__expandable-row--expansion-disabled":E,"navds-table__expandable-row--clickable":f}),onClick:dr(T,y)}),s==="right"&&t,g.createElement(Wg,{className:O("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":p}),onClick:E?()=>null:L},!E&&g.createElement("button",{className:O("navds-table__toggle-expand-button"),type:"button","aria-controls":N,"aria-expanded":p,onClick:L},g.createElement(fd,{className:O("navds-table__expandable-icon"),title:S(p?"showLess":"showMore")}))),s==="left"&&t),g.createElement("tr",{"data-state":p?"open":"closed",className:O("navds-table__expanded-row"),"aria-hidden":!p,id:N},g.createElement("td",{colSpan:v,className:O("navds-table__expanded-row-cell")},g.createElement(pP,{className:O("navds-table__expanded-row-collapse"),innerClassName:O(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${_??s}`),height:p?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},l))))});var kP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const bP=D.forwardRef((e,n)=>{var{className:r}=e,t=kP(e,["className"]);const{cn:l}=Ee();return g.createElement("thead",Object.assign({},t,{ref:n,className:l("navds-table__header",r)}))});var SP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const hn=D.forwardRef((e,n)=>{var{className:r,zebraStripes:t=!1,size:l="medium",onSortChange:s,sort:u,stickyHeader:d=!1}=e,m=SP(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:E}=Ee();return g.createElement($g.Provider,{value:{onSortChange:s,sort:u}},g.createElement("table",Object.assign({},m,{ref:n,className:E("navds-table",`navds-table--${l}`,r,{"navds-table--zebra-stripes":t,"navds-table--sticky-header":d})})))});hn.Header=bP;hn.Body=dP;hn.Row=zg;hn.ColumnHeader=fP;hn.HeaderCell=Yg;hn.DataCell=Wg;hn.ExpandableRow=AP;var OP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const DP=D.forwardRef((e,n)=>{var{children:r,className:t,variant:l,size:s="medium",icon:u,"data-color":d}=e,m=OP(e,["children","className","variant","size","icon","data-color"]);const{cn:E}=Ee(),f=l?.endsWith("-filled")&&"strong",v=l?.endsWith("-moderate")&&"moderate";return g.createElement(un,Object.assign({"data-color":d??IP(l),"data-variant":f||v||"outline"},m,{ref:n,as:"span",size:s==="medium"?"medium":"small",className:E("navds-tag",t,`navds-tag--${l}`,`navds-tag--${s}`)}),u&&g.createElement("span",{className:E("navds-tag__icon--left")},u),r)});function IP(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const LP=(e,n)=>{const r=zr(e,"fieldset");return Object.assign(Object.assign({},r),{inputProps:{"aria-labelledby":e["aria-labelledby"]||Aa(n,{[r.inputDescriptionId]:e.description&&!Os(e.description)})}})};var PP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Xg=D.forwardRef((e,n)=>{var r,t,l;const s=Xt(),{inputProps:u,errorId:d,showErrorMsg:m,hasError:E,size:f,readOnly:v,inputDescriptionId:_}=LP(e,s),{cn:T}=Ee(),k=D.useContext(Wl),{children:O,className:p,errorPropagation:b=!0,legend:S,description:N,hideLegend:L,nativeReadOnly:y=!0}=e,K=PP(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return g.createElement(Wl.Provider,{value:{error:b?(r=e.error)!==null&&r!==void 0?r:k?.error:void 0,errorId:Aa({[d]:m,[(t=k?.errorId)!==null&&t!==void 0?t:""]:!!k?.error}),size:f,disabled:(l=e.disabled)!==null&&l!==void 0?l:!1,readOnly:v}},g.createElement("fieldset",Object.assign({},fn(K,["errorId","error","size","readOnly"]),u,{ref:n,className:T(p,"navds-fieldset",`navds-fieldset--${f}`,{"navds-fieldset--error":E,"navds-fieldset--readonly":v})}),g.createElement(Wt,{id:s,size:f,as:"legend",className:T("navds-fieldset__legend",{"navds-sr-only":!!L})},v&&(y?g.createElement(js,null):g.createElement(Ss,null)),S),!!N&&g.createElement(un,{className:T("navds-fieldset__description",{"navds-sr-only":!!L}),id:_,size:f??"medium",as:"div"},e.description),O,g.createElement("div",{id:d,"aria-relevant":"additions removals","aria-live":"polite",className:T("navds-fieldset__error")},m&&g.createElement(ba,{size:f,showIcon:!0},e.error))))});var wP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Zg=D.createContext(null);D.forwardRef((e,n)=>{var r,t,{value:l,defaultValue:s,onChange:u=()=>{},children:d,className:m}=e,E=wP(e,["value","defaultValue","onChange","children","className"]);const{cn:f}=Ee(),v=D.useContext(Wl),[_,T]=D.useState(s??[]),k=O=>{const p=l??_,b=p.includes(O)?p.filter(S=>S!==O):[...p,O];l===void 0&&T(b),u(b)};return g.createElement(Xg,Object.assign({},E,{ref:n,className:f(m,"navds-checkbox-group",`navds-checkbox-group--${(t=(r=E.size)!==null&&r!==void 0?r:v?.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),g.createElement(Zg.Provider,{value:{value:l,defaultValue:s,toggleValue:k}},g.createElement("div",{className:f("navds-checkboxes")},d)))});var FP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const KP=e=>{const n=D.useContext(Zg),r=zr(fn(e,["description","children"]),"checkbox"),{inputProps:t,readOnly:l}=r,s=FP(r,["inputProps","readOnly"]);return n&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},s),{readOnly:l,nested:!!n,inputProps:Object.assign(Object.assign({},t),{checked:n?.value?n.value.includes(e.value):e.checked,defaultChecked:n?.defaultValue?n.defaultValue.includes(e.value):e.defaultChecked,onChange:u=>{var d;l||((d=e.onChange)===null||d===void 0||d.call(e,u),n?.toggleValue(e.value))},onClick:u=>{var d;if(l){u.preventDefault();return}(d=e?.onClick)===null||d===void 0||d.call(e,u)}})})},MP=D.forwardRef((e,n)=>{const{cn:r}=Ee(),{inputProps:t,hasError:l,size:s,readOnly:u,nested:d}=KP(e),m=Xt(),E=il(!1);return E?.isDarkside?g.createElement("div",{className:r(e.className,"navds-checkbox",`navds-checkbox--${s}`,{"navds-checkbox--error":l,"navds-checkbox--disabled":t.disabled,"navds-checkbox--readonly":u}),"data-color":l?"danger":e["data-color"]},g.createElement("div",{className:r("navds-checkbox__input-wrapper")},g.createElement("input",Object.assign({},fn(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),fn(t,["aria-invalid","aria-describedby"]),{"aria-describedby":Aa(t["aria-describedby"],{[m]:e.description})||void 0,type:"checkbox",className:r("navds-checkbox__input"),ref:f=>{var v;f&&(f.indeterminate=(v=e.indeterminate)!==null&&v!==void 0?v:!1),typeof n=="function"?n(f):n!=null&&(n.current=f)}})),g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0,className:r("navds-checkbox__icon")},g.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),g.createElement(un,{as:"label",htmlFor:t.id,size:s,className:r("navds-checkbox__label",{"navds-sr-only":e.hideLabel})},!d&&u&&g.createElement(Ss,null),e.children),e.description&&g.createElement(un,{id:m,size:s,className:r("navds-form-field__subdescription navds-checkbox__description")},e.description)):g.createElement("div",{className:r(e.className,"navds-checkbox",`navds-checkbox--${s}`,{"navds-checkbox--error":l,"navds-checkbox--disabled":t.disabled,"navds-checkbox--readonly":u}),"data-color":l?"danger":e["data-color"]},g.createElement("input",Object.assign({},fn(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),fn(t,["aria-invalid"]),{type:"checkbox",className:r("navds-checkbox__input"),ref:f=>{var v;f&&(f.indeterminate=(v=e.indeterminate)!==null&&v!==void 0?v:!1),typeof n=="function"?n(f):n!=null&&(n.current=f)}})),g.createElement("label",{htmlFor:t.id,className:r("navds-checkbox__label")},g.createElement("span",{className:r("navds-checkbox__icon")},g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},g.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),g.createElement("span",{className:r("navds-checkbox__icon-indeterminate")}),g.createElement("span",{className:r("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},g.createElement(un,{as:"span",size:s,className:r("navds-checkbox__label-text")},!d&&u&&g.createElement(Ss,null),e.children),e.description&&g.createElement(un,{as:"span",size:s,className:r("navds-form-field__subdescription navds-checkbox__description")},e.description))))});var GP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const VP=D.forwardRef((e,n)=>{var{children:r,as:t="a",className:l}=e,s=GP(e,["children","as","className"]);const{cn:u}=Ee();return g.createElement("li",null,g.createElement(t,Object.assign({},s,{ref:n,className:u(l,"navds-error-summary__item","navds-link")}),r))});var BP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Vu=D.forwardRef((e,n)=>{var{children:r,className:t,size:l="medium",headingTag:s="h2",heading:u}=e,d=BP(e,["children","className","size","headingTag","heading"]);const{cn:m}=Ee(),E=Kt("ErrorSummary"),f=D.useRef(null),v=D.useRef(null),_=ka(n,f);return g.createElement("div",Object.assign({ref:_},d,{className:m(t,"navds-error-summary",`navds-error-summary--${l}`),tabIndex:-1,onFocus:dr(d.onFocus,T=>{var k;T.target===f.current&&((k=v?.current)===null||k===void 0||k.focus())})}),g.createElement(Jl,{className:m("navds-error-summary__heading"),as:s,size:l==="medium"?"small":"xsmall",ref:v,tabIndex:-1},u??E("heading")),g.createElement(un,{as:"ul",size:l,className:m("navds-error-summary__list")},r))});Vu.Item=VP;var xP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Qg=g.createContext(null),UP=D.forwardRef((e,n)=>{var r,t,{children:l,className:s,name:u,defaultValue:d,value:m,onChange:E=()=>{},required:f,readOnly:v}=e,_=xP(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:T}=Ee(),k=D.useContext(Wl),O=Xt();return g.createElement(Xg,Object.assign({},_,{readOnly:v,ref:n,className:T(s,"navds-radio-group",`navds-radio-group--${(t=(r=_.size)!==null&&r!==void 0?r:k?.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),g.createElement(Qg.Provider,{value:{name:u??`radioGroupName-${O}`,defaultValue:d,value:m,onChange:E,required:f}},g.createElement("div",{className:T("navds-radio-buttons")},l)))});var HP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const jP=e=>{const n=D.useContext(Qg),r=zr(fn(e,["description"]),"radio"),{inputProps:t,readOnly:l}=r,s=HP(r,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:l,inputProps:Object.assign(Object.assign({},t),{name:n?.name,defaultChecked:n?.defaultValue===void 0?void 0:n?.defaultValue===e.value,checked:n?.value===void 0?void 0:n?.value===e.value,onChange:u=>{var d,m;l||((d=e.onChange)===null||d===void 0||d.call(e,u),(m=n?.onChange)===null||m===void 0||m.call(n,e.value))},onClick:u=>{var d;if(l){u.preventDefault();return}(d=e?.onClick)===null||d===void 0||d.call(e,u)},required:n?.required,type:"radio"})})},CP=D.forwardRef((e,n)=>{const{cn:r}=Ee(),{inputProps:t,size:l,hasError:s,readOnly:u}=jP(e),d=Xt(),m=il(!1);return m?.isDarkside?g.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${l}`,{"navds-radio--error":s,"navds-radio--disabled":t.disabled,"navds-radio--readonly":u}),"data-color":s?"danger":e["data-color"]},g.createElement("input",Object.assign({},fn(e,["children","size","description","readOnly"]),fn(t,["aria-invalid","aria-describedby"]),{"aria-describedby":Aa(t["aria-describedby"],{[d]:e.description})||void 0,className:r("navds-radio__input"),ref:n})),g.createElement(un,{as:"label",htmlFor:t.id,className:r("navds-radio__label"),size:l},e.children),e.description&&g.createElement(un,{id:d,size:l,className:r("navds-form-field__subdescription navds-radio__description")},e.description)):g.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${l}`,{"navds-radio--error":s,"navds-radio--disabled":t.disabled,"navds-radio--readonly":u}),"data-color":s?"danger":e["data-color"]},g.createElement("input",Object.assign({},fn(e,["children","size","description","readOnly"]),fn(t,["aria-invalid"]),{className:r("navds-radio__input"),ref:n})),g.createElement("label",{htmlFor:t.id,className:r("navds-radio__label")},g.createElement("span",{className:r("navds-radio__content")},g.createElement(un,{as:"span",size:l},e.children),e.description&&g.createElement(un,{as:"span",size:l,className:r("navds-form-field__subdescription navds-radio__description")},e.description))))}),e_=D.createContext(null);var qP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const n_=D.forwardRef((e,n)=>{var r,{className:t,children:l,disabled:s,onClick:u}=e,d=qP(e,["className","children","disabled","onClick"]);const{cn:m}=Ee(),E=Kt("Search"),f=D.useContext(e_);if(f===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:v,variant:_,handleClick:T}=f;return g.createElement(Cn,Object.assign({type:"submit"},d,{ref:n,size:v,variant:_==="secondary"?"secondary":"primary",className:m("navds-search__button-search",t),disabled:(r=f?.disabled)!==null&&r!==void 0?r:s,onClick:dr(u,T),icon:g.createElement(Nv,Object.assign({},l?{"aria-hidden":!0}:{title:E("search")}))}),l)});var YP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const Bu=D.forwardRef((e,n)=>{const{inputProps:r,size:t="medium",inputDescriptionId:l,errorId:s,showErrorMsg:u,hasError:d}=zr(e,"searchfield"),{className:m,hideLabel:E=!0,label:f,description:v,value:_,clearButtonLabel:T,onClear:k,clearButton:O=!0,children:p,variant:b="primary",defaultValue:S,onChange:N,onSearchClick:L,htmlSize:y,"data-color":K}=e,F=YP(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:G}=Ee(),H=D.useRef(null),W=ka(H,n),[Y,x]=D.useState(S??""),V=se=>{_===void 0&&x(se),N?.(se)},X=se=>{var Q,oe;k?.(se),V(""),(oe=(Q=H.current)===null||Q===void 0?void 0:Q.focus)===null||oe===void 0||oe.call(Q)},ne=()=>{L?.(`${_??Y}`)},te=O&&!r.disabled&&(_??Y);return g.createElement("div",{onKeyDown:se=>{var Q;se.key==="Escape"&&(!((Q=H.current)===null||Q===void 0)&&Q.value&&se.preventDefault(),X({trigger:"Escape",event:se}))},className:G(m,"navds-form-field",`navds-form-field--${t}`,"navds-search",{"navds-search--error":d,"navds-search--disabled":r.disabled,"navds-search--with-size":y}),"data-color":K},g.createElement(Wt,{htmlFor:r.id,size:t,className:G("navds-form-field__label",{"navds-sr-only":E})},f),!!v&&g.createElement(un,{className:G("navds-form-field__description",{"navds-sr-only":E}),id:l,size:t,as:"div"},v),g.createElement("div",{className:G("navds-search__wrapper")},g.createElement("div",{className:G("navds-search__wrapper-inner")},b==="simple"&&g.createElement(Nv,{"aria-hidden":!0,className:G("navds-search__search-icon")}),g.createElement("input",Object.assign({ref:W},fn(F,["error","errorId","size","readOnly"]),r,{value:_??Y,onChange:se=>V(se.target.value),type:"search",className:G(m,"navds-search__input",`navds-search__input--${b}`,"navds-text-field__input","navds-body-short",`navds-body-short--${t}`)},y?{size:Number(y)}:{})),te&&g.createElement($P,{handleClear:X,size:t,clearButtonLabel:T})),g.createElement(e_.Provider,{value:{size:t,disabled:r.disabled,variant:b,handleClick:ne}},p||b!=="simple"&&g.createElement(n_,{"data-color":K}))),g.createElement("div",{className:G("navds-form-field__error"),id:s,"aria-relevant":"additions removals","aria-live":"polite"},u&&g.createElement(ba,{size:t,showIcon:!0},e.error)))});function $P({size:e,clearButtonLabel:n,handleClear:r}){const{cn:t}=Ee(),l=il(!1),s=Kt("Search");return l?.isDarkside?g.createElement(Cn,{className:t("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:g.createElement(ps,{"aria-hidden":!0}),title:n||s("clear"),onClick:u=>r({trigger:"Click",event:u}),type:"button"}):g.createElement("button",{type:"button",onClick:u=>r({trigger:"Click",event:u}),className:t("navds-search__button-clear")},g.createElement("span",{className:t("navds-sr-only")},n||s("clear")),g.createElement(ps,{"aria-hidden":!0}))}Bu.Button=n_;var WP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const iE=(e,n,r)=>{const{outerHeightStyle:t,overflow:l}=n;return r.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==l)?(r.current+=1,n):e},sE=e=>(e?.ownerDocument||document).defaultView||window;function rs(e){return parseInt(e,10)||0}const JP=D.forwardRef((e,n)=>{var r,t,{className:l,onChange:s,maxRows:u,minRows:d=1,autoScrollbar:m,style:E,value:f}=e,v=WP(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:_}=D.useRef(f!=null),T=D.useRef(null),k=ka(T,n),O=D.useRef(null),p=D.useRef(0),[b,S]=D.useState({outerHeightStyle:0}),N=g.useCallback(()=>{const F=T.current,H=sE(F).getComputedStyle(F);if(H.width==="0px")return{outerHeightStyle:0};const W=O.current;W.style.width=H.width,W.value=F.value||v.placeholder||"x",W.value.slice(-1)===`
`&&(W.value+=" ");const Y=H.boxSizing,x=rs(H.paddingBottom)+rs(H.paddingTop),V=rs(H.borderBottomWidth)+rs(H.borderTopWidth),X=W.scrollHeight-x;W.value="x";const ne=W.scrollHeight-x;let te=X;d&&(te=Math.max(Number(d)*ne,te)),u&&(te=Math.min(Number(u)*ne,te)),te=Math.max(te,ne);const se=te+(Y==="border-box"?x+V:0),Q=Math.abs(te-X)<=1;return{outerHeightStyle:se,overflow:Q}},[u,d,v.placeholder]),L=()=>{const F=N();oE(F)||S(G=>iE(G,F,p))};tl(()=>{const F=()=>{const x=N();oE(x)||hv.flushSync(()=>{S(V=>iE(V,x,p))})},G=yv(()=>{var x,V,X;if(p.current=0,!((x=T.current)===null||x===void 0)&&x.style.height||!((V=T.current)===null||V===void 0)&&V.style.width){((X=T.current)===null||X===void 0?void 0:X.style.overflow)==="hidden"&&S(ne=>Object.assign(Object.assign({},ne),{overflow:!1}));return}F()},166,!0),H=T.current,W=sE(H);W.addEventListener("resize",G);let Y;return typeof ResizeObserver<"u"&&(Y=new ResizeObserver(G),Y.observe(H)),()=>{G.clear(),W.removeEventListener("resize",G),Y&&Y.disconnect()}},[N]),tl(()=>{L()}),D.useEffect(()=>{p.current=0},[f]);const y=F=>{p.current=0,_||L(),s&&s(F)},K=Object.assign({"--__ac-textarea-height":b.outerHeightStyle+"px","--__axc-textarea-height":b.outerHeightStyle+"px",overflow:b.overflow&&!m&&!(!((r=T.current)===null||r===void 0)&&r.style.height)&&!(!((t=T.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},E);return g.createElement(g.Fragment,null,g.createElement("textarea",Object.assign({value:f,onChange:y,ref:k,rows:d,style:K},v,{className:l})),g.createElement("textarea",{"aria-hidden":!0,className:l,readOnly:!0,ref:O,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},E)}))});function oE(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const zP=({maxLengthId:e,maxLength:n,currentLength:r,size:t,i18n:l})=>{const{cn:s}=Ee(),u=Kt("Textarea",{charsLeft:l?.counterLeft?`{chars} ${l.counterLeft}`:void 0,charsTooMany:l?.counterTooMuch?`{chars} ${l.counterTooMuch}`:void 0}),d=n-r,[m,E]=D.useState(d);return D.useEffect(()=>{const f=yv(()=>{E(d)},2e3);return f(),()=>{f.clear()}},[d]),g.createElement(g.Fragment,null,g.createElement("span",{id:e,className:s("navds-sr-only")},u("maxLength",{maxLength:n})),d<20&&g.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},uE(m,u)),g.createElement(un,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:t},uE(d,u)))},uE=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var XP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const ZP=D.forwardRef((e,n)=>{var r,t,l;const{inputProps:s,errorId:u,showErrorMsg:d,hasError:m,size:E,inputDescriptionId:f}=zr(e,"textarea"),{label:v,className:_,description:T,maxLength:k,hideLabel:O=!1,resize:p,UNSAFE_autoScrollbar:b,i18n:S,readOnly:N}=e,L=XP(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:y}=Ee(),K=Xt(),F=k!==void 0&&k>0,[G,H]=D.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),W=()=>{let x=L?.minRows?L?.minRows:3;return E==="small"&&(x=L?.minRows?L?.minRows:2),x},Y=Aa(s["aria-describedby"],{[K??""]:F});return g.createElement("div",{className:y(_,"navds-form-field",`navds-form-field--${E}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":N,"navds-textarea--readonly":N,"navds-textarea--error":m,"navds-textarea--autoscrollbar":b,[`navds-textarea--resize-${p===!0?"both":p}`]:p})},g.createElement(Wt,{htmlFor:s.id,size:E,className:y("navds-form-field__label",{"navds-sr-only":O})},N&&g.createElement(js,null),v),!!T&&g.createElement(un,{className:y("navds-form-field__description",{"navds-sr-only":O}),id:f,size:E,as:"div"},T),g.createElement(JP,Object.assign({},fn(L,["error","errorId","size"]),s,{onChange:dr(e.onChange,e.value===void 0?x=>H(x.target.value):void 0),minRows:W(),autoScrollbar:b,ref:n,readOnly:N,className:y("navds-textarea__input","navds-body-short",`navds-body-short--${E??"medium"}`)},Y?{"aria-describedby":Y}:{})),F&&!N&&!s.disabled&&g.createElement(zP,{maxLengthId:K,maxLength:k,currentLength:(l=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&l!==void 0?l:G.length,size:E,i18n:S}),g.createElement("div",{className:y("navds-form-field__error"),id:u,"aria-relevant":"additions removals","aria-live":"polite"},d&&g.createElement(ba,{size:E,showIcon:!0},e.error)))});var QP=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const ew=D.forwardRef((e,n)=>{const{cn:r}=Ee(),{inputProps:t,errorId:l,showErrorMsg:s,hasError:u,size:d,inputDescriptionId:m}=zr(e,"textField"),{label:E,className:f,description:v,htmlSize:_,hideLabel:T=!1,type:k="text",readOnly:O}=e,p=QP(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return g.createElement("div",{className:r(f,"navds-form-field",`navds-form-field--${d}`,{"navds-text-field--error":u,"navds-text-field--disabled":!!t.disabled,"navds-form-field--disabled":!!t.disabled,"navds-form-field--readonly":O,"navds-text-field--readonly":O})},g.createElement(Wt,{htmlFor:t.id,size:d,className:r("navds-form-field__label",{"navds-sr-only":T})},O&&g.createElement(js,null),E),!!v&&g.createElement(un,{className:r("navds-form-field__description",{"navds-sr-only":T}),id:m,size:d,as:"div"},v),g.createElement("input",Object.assign({},fn(p,["error","errorId","size"]),t,{ref:n,type:k,readOnly:O,className:r("navds-text-field__input","navds-body-short",`navds-body-short--${d??"medium"}`),size:_})),g.createElement("div",{className:r("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},s&&g.createElement(ba,{size:d,showIcon:!0},e.error)))});var t_=(e=>(e.IKKE_RETT_ANNEN_FORELDER="IKKE_RETT_ANNEN_FORELDER",e))(t_||{}),ri=e=>e.type==="checkbox",fa=e=>e instanceof Date,Jn=e=>e==null;const r_=e=>typeof e=="object";var bn=e=>!Jn(e)&&!Array.isArray(e)&&r_(e)&&!fa(e),a_=e=>bn(e)&&e.target?ri(e.target)?e.target.checked:e.target.value:e,nw=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,l_=(e,n)=>e.has(nw(n)),tw=e=>{const n=e.constructor&&e.constructor.prototype;return bn(n)&&n.hasOwnProperty("isPrototypeOf")},Fd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Dn(e){let n;const r=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(!(Fd&&(e instanceof Blob||t))&&(r||bn(e)))if(n=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!tw(e))n=e;else for(const l in e)e.hasOwnProperty(l)&&(n[l]=Dn(e[l]));else return e;return n}var Ys=e=>/^\w*$/.test(e),pn=e=>e===void 0,Kd=e=>Array.isArray(e)?e.filter(Boolean):[],Md=e=>Kd(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ie=(e,n,r)=>{if(!n||!bn(e))return r;const t=(Ys(n)?[n]:Md(n)).reduce((l,s)=>Jn(l)?l:l[s],e);return pn(t)||t===e?pn(e[n])?r:e[n]:t},Tt=e=>typeof e=="boolean",Ze=(e,n,r)=>{let t=-1;const l=Ys(n)?[n]:Md(n),s=l.length,u=s-1;for(;++t<s;){const d=l[t];let m=r;if(t!==u){const E=e[d];m=bn(E)||Array.isArray(E)?E:isNaN(+l[t+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=m,e=e[d]}};const Is={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Ct={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Dr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Gd=g.createContext(null);Gd.displayName="HookFormContext";const gr=()=>g.useContext(Gd),rw=e=>{const{children:n,...r}=e;return g.createElement(Gd.Provider,{value:r},n)};var i_=(e,n,r,t=!0)=>{const l={defaultValues:n._defaultValues};for(const s in e)Object.defineProperty(l,s,{get:()=>{const u=s;return n._proxyFormState[u]!==Ct.all&&(n._proxyFormState[u]=!t||Ct.all),r&&(r[u]=!0),e[u]}});return l};const Vd=typeof window<"u"?g.useLayoutEffect:g.useEffect;function aw(e){const n=gr(),{control:r=n.control,disabled:t,name:l,exact:s}=e||{},[u,d]=g.useState(r._formState),m=g.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Vd(()=>r._subscribe({name:l,formState:m.current,exact:s,callback:E=>{!t&&d({...r._formState,...E})}}),[l,t,s]),g.useEffect(()=>{m.current.isValid&&r._setValid(!0)},[r]),g.useMemo(()=>i_(u,r,m.current,!1),[u,r])}var Rt=e=>typeof e=="string",s_=(e,n,r,t,l)=>Rt(e)?(t&&n.watch.add(e),ie(r,e,l)):Array.isArray(e)?e.map(s=>(t&&n.watch.add(s),ie(r,s))):(t&&(n.watchAll=!0),r),xu=e=>Jn(e)||!r_(e);function Ir(e,n,r=new WeakSet){if(xu(e)||xu(n))return e===n;if(fa(e)&&fa(n))return e.getTime()===n.getTime();const t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;if(r.has(e)||r.has(n))return!0;r.add(e),r.add(n);for(const s of t){const u=e[s];if(!l.includes(s))return!1;if(s!=="ref"){const d=n[s];if(fa(u)&&fa(d)||bn(u)&&bn(d)||Array.isArray(u)&&Array.isArray(d)?!Ir(u,d,r):u!==d)return!1}}return!0}function lw(e){const n=gr(),{control:r=n.control,name:t,defaultValue:l,disabled:s,exact:u,compute:d}=e||{},m=g.useRef(l),E=g.useRef(d),f=g.useRef(void 0);E.current=d;const v=g.useMemo(()=>r._getWatch(t,m.current),[r,t]),[_,T]=g.useState(E.current?E.current(v):v);return Vd(()=>r._subscribe({name:t,formState:{values:!0},exact:u,callback:k=>{if(!s){const O=s_(t,r._names,k.values||r._formValues,!1,m.current);if(E.current){const p=E.current(O);Ir(p,f.current)||(T(p),f.current=p)}else T(O)}}}),[r,s,t,u]),g.useEffect(()=>r._removeUnmounted()),_}function dl(e){const n=gr(),{name:r,disabled:t,control:l=n.control,shouldUnregister:s,defaultValue:u}=e,d=l_(l._names.array,r),m=g.useMemo(()=>ie(l._formValues,r,ie(l._defaultValues,r,u)),[l,r,u]),E=lw({control:l,name:r,defaultValue:m,exact:!0}),f=aw({control:l,name:r,exact:!0}),v=g.useRef(e),_=g.useRef(void 0),T=g.useRef(l.register(r,{...e.rules,value:E,...Tt(e.disabled)?{disabled:e.disabled}:{}}));v.current=e;const k=g.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!ie(f.errors,r)},isDirty:{enumerable:!0,get:()=>!!ie(f.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!ie(f.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!ie(f.validatingFields,r)},error:{enumerable:!0,get:()=>ie(f.errors,r)}}),[f,r]),O=g.useCallback(N=>T.current.onChange({target:{value:a_(N),name:r},type:Is.CHANGE}),[r]),p=g.useCallback(()=>T.current.onBlur({target:{value:ie(l._formValues,r),name:r},type:Is.BLUR}),[r,l._formValues]),b=g.useCallback(N=>{const L=ie(l._fields,r);L&&N&&(L._f.ref={focus:()=>N.focus&&N.focus(),select:()=>N.select&&N.select(),setCustomValidity:y=>N.setCustomValidity(y),reportValidity:()=>N.reportValidity()})},[l._fields,r]),S=g.useMemo(()=>({name:r,value:E,...Tt(t)||f.disabled?{disabled:f.disabled||t}:{},onChange:O,onBlur:p,ref:b}),[r,t,f.disabled,O,p,b,E]);return g.useEffect(()=>{const N=l._options.shouldUnregister||s,L=_.current;L&&L!==r&&!d&&l.unregister(L),l.register(r,{...v.current.rules,...Tt(v.current.disabled)?{disabled:v.current.disabled}:{}});const y=(K,F)=>{const G=ie(l._fields,K);G&&G._f&&(G._f.mount=F)};if(y(r,!0),N){const K=Dn(ie(l._options.defaultValues,r));Ze(l._defaultValues,r,K),pn(ie(l._formValues,r))&&Ze(l._formValues,r,K)}return!d&&l.register(r),_.current=r,()=>{(d?N&&!l._state.action:N)?l.unregister(r):y(r,!1)}},[r,l,d,s]),g.useEffect(()=>{l._setDisabledField({disabled:t,name:r})},[t,r,l]),g.useMemo(()=>({field:S,formState:f,fieldState:k}),[S,f,k])}var iw=(e,n,r,t,l)=>n?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:l||!0}}:{},Ul=e=>Array.isArray(e)?e:[e],dE=()=>{let e=[];return{get observers(){return e},next:l=>{for(const s of e)s.next&&s.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(s=>s!==l)}}),unsubscribe:()=>{e=[]}}};function o_(e,n){const r={};for(const t in e)if(e.hasOwnProperty(t)){const l=e[t],s=n[t];if(l&&bn(l)&&s){const u=o_(l,s);bn(u)&&(r[t]=u)}else e[t]&&(r[t]=s)}return r}var it=e=>bn(e)&&!Object.keys(e).length,Bd=e=>e.type==="file",qt=e=>typeof e=="function",Ls=e=>{if(!Fd)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},u_=e=>e.type==="select-multiple",xd=e=>e.type==="radio",sw=e=>xd(e)||ri(e),yu=e=>Ls(e)&&e.isConnected;function ow(e,n){const r=n.slice(0,-1).length;let t=0;for(;t<r;)e=pn(e)?t++:e[n[t++]];return e}function uw(e){for(const n in e)if(e.hasOwnProperty(n)&&!pn(e[n]))return!1;return!0}function kn(e,n){const r=Array.isArray(n)?n:Ys(n)?[n]:Md(n),t=r.length===1?e:ow(e,r),l=r.length-1,s=r[l];return t&&delete t[s],l!==0&&(bn(t)&&it(t)||Array.isArray(t)&&uw(t))&&kn(e,r.slice(0,-1)),e}var dw=e=>{for(const n in e)if(qt(e[n]))return!0;return!1};function d_(e){return Array.isArray(e)||bn(e)&&!dw(e)}function Uu(e,n={}){for(const r in e)d_(e[r])?(n[r]=Array.isArray(e[r])?[]:{},Uu(e[r],n[r])):Jn(e[r])||(n[r]=!0);return n}function za(e,n,r){r||(r=Uu(n));for(const t in e)d_(e[t])?pn(n)||xu(r[t])?r[t]=Uu(e[t],Array.isArray(e[t])?[]:{}):za(e[t],Jn(n)?{}:n[t],r[t]):r[t]=!Ir(e[t],n[t]);return r}const cE={value:!1,isValid:!1},mE={value:!0,isValid:!0};var c_=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!pn(e[0].attributes.value)?pn(e[0].value)||e[0].value===""?mE:{value:e[0].value,isValid:!0}:mE:cE}return cE},m_=(e,{valueAsNumber:n,valueAsDate:r,setValueAs:t})=>pn(e)?e:n?e===""?NaN:e&&+e:r&&Rt(e)?new Date(e):t?t(e):e;const fE={isValid:!1,value:null};var f_=e=>Array.isArray(e)?e.reduce((n,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:n,fE):fE;function EE(e){const n=e.ref;return Bd(n)?n.files:xd(n)?f_(e.refs).value:u_(n)?[...n.selectedOptions].map(({value:r})=>r):ri(n)?c_(e.refs).value:m_(pn(n.value)?e.ref.value:n.value,e)}var cw=(e,n,r,t)=>{const l={};for(const s of e){const u=ie(n,s);u&&Ze(l,s,u._f)}return{criteriaMode:r,names:[...e],fields:l,shouldUseNativeValidation:t}},Ps=e=>e instanceof RegExp,Il=e=>pn(e)?e:Ps(e)?e.source:bn(e)?Ps(e.value)?e.value.source:e.value:e,vE=e=>({isOnSubmit:!e||e===Ct.onSubmit,isOnBlur:e===Ct.onBlur,isOnChange:e===Ct.onChange,isOnAll:e===Ct.all,isOnTouch:e===Ct.onTouched});const gE="AsyncFunction";var mw=e=>!!e&&!!e.validate&&!!(qt(e.validate)&&e.validate.constructor.name===gE||bn(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===gE)),fw=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),_E=(e,n,r)=>!r&&(n.watchAll||n.watch.has(e)||[...n.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const Hl=(e,n,r,t)=>{for(const l of r||Object.keys(e)){const s=ie(e,l);if(s){const{_f:u,...d}=s;if(u){if(u.refs&&u.refs[0]&&n(u.refs[0],l)&&!t)return!0;if(u.ref&&n(u.ref,u.name)&&!t)return!0;if(Hl(d,n))break}else if(bn(d)&&Hl(d,n))break}}};function hE(e,n,r){const t=ie(e,r);if(t||Ys(r))return{error:t,name:r};const l=r.split(".");for(;l.length;){const s=l.join("."),u=ie(n,s),d=ie(e,s);if(u&&!Array.isArray(u)&&r!==s)return{name:r};if(d&&d.type)return{name:s,error:d};if(d&&d.root&&d.root.type)return{name:`${s}.root`,error:d.root};l.pop()}return{name:r}}var Ew=(e,n,r,t)=>{r(e);const{name:l,...s}=e;return it(s)||Object.keys(s).length>=Object.keys(n).length||Object.keys(s).find(u=>n[u]===(!t||Ct.all))},vw=(e,n,r)=>!e||!n||e===n||Ul(e).some(t=>t&&(r?t===n:t.startsWith(n)||n.startsWith(t))),gw=(e,n,r,t,l)=>l.isOnAll?!1:!r&&l.isOnTouch?!(n||e):(r?t.isOnBlur:l.isOnBlur)?!e:(r?t.isOnChange:l.isOnChange)?e:!0,_w=(e,n)=>!Kd(ie(e,n)).length&&kn(e,n),hw=(e,n,r)=>{const t=Ul(ie(e,r));return Ze(t,"root",n[r]),Ze(e,r,t),e};function pE(e,n,r="validate"){if(Rt(e)||Array.isArray(e)&&e.every(Rt)||Tt(e)&&!e)return{type:r,message:Rt(e)?e:"",ref:n}}var Wa=e=>bn(e)&&!Ps(e)?e:{value:e,message:""},TE=async(e,n,r,t,l,s)=>{const{ref:u,refs:d,required:m,maxLength:E,minLength:f,min:v,max:_,pattern:T,validate:k,name:O,valueAsNumber:p,mount:b}=e._f,S=ie(r,O);if(!b||n.has(O))return{};const N=d?d[0]:u,L=x=>{l&&N.reportValidity&&(N.setCustomValidity(Tt(x)?"":x||""),N.reportValidity())},y={},K=xd(u),F=ri(u),G=K||F,H=(p||Bd(u))&&pn(u.value)&&pn(S)||Ls(u)&&u.value===""||S===""||Array.isArray(S)&&!S.length,W=iw.bind(null,O,t,y),Y=(x,V,X,ne=Dr.maxLength,te=Dr.minLength)=>{const se=x?V:X;y[O]={type:x?ne:te,message:se,ref:u,...W(x?ne:te,se)}};if(s?!Array.isArray(S)||!S.length:m&&(!G&&(H||Jn(S))||Tt(S)&&!S||F&&!c_(d).isValid||K&&!f_(d).isValid)){const{value:x,message:V}=Rt(m)?{value:!!m,message:m}:Wa(m);if(x&&(y[O]={type:Dr.required,message:V,ref:N,...W(Dr.required,V)},!t))return L(V),y}if(!H&&(!Jn(v)||!Jn(_))){let x,V;const X=Wa(_),ne=Wa(v);if(!Jn(S)&&!isNaN(S)){const te=u.valueAsNumber||S&&+S;Jn(X.value)||(x=te>X.value),Jn(ne.value)||(V=te<ne.value)}else{const te=u.valueAsDate||new Date(S),se=Re=>new Date(new Date().toDateString()+" "+Re),Q=u.type=="time",oe=u.type=="week";Rt(X.value)&&S&&(x=Q?se(S)>se(X.value):oe?S>X.value:te>new Date(X.value)),Rt(ne.value)&&S&&(V=Q?se(S)<se(ne.value):oe?S<ne.value:te<new Date(ne.value))}if((x||V)&&(Y(!!x,X.message,ne.message,Dr.max,Dr.min),!t))return L(y[O].message),y}if((E||f)&&!H&&(Rt(S)||s&&Array.isArray(S))){const x=Wa(E),V=Wa(f),X=!Jn(x.value)&&S.length>+x.value,ne=!Jn(V.value)&&S.length<+V.value;if((X||ne)&&(Y(X,x.message,V.message),!t))return L(y[O].message),y}if(T&&!H&&Rt(S)){const{value:x,message:V}=Wa(T);if(Ps(x)&&!S.match(x)&&(y[O]={type:Dr.pattern,message:V,ref:u,...W(Dr.pattern,V)},!t))return L(V),y}if(k){if(qt(k)){const x=await k(S,r),V=pE(x,N);if(V&&(y[O]={...V,...W(Dr.validate,V.message)},!t))return L(V.message),y}else if(bn(k)){let x={};for(const V in k){if(!it(x)&&!t)break;const X=pE(await k[V](S,r),N,V);X&&(x={...X,...W(V,X.message)},L(X.message),t&&(y[O]=x))}if(!it(x)&&(y[O]={ref:N,...x},!t))return y}}return L(!0),y};const pw={mode:Ct.onSubmit,reValidateMode:Ct.onChange,shouldFocusError:!0};function Tw(e={}){let n={...pw,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:qt(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},t={},l=bn(n.defaultValues)||bn(n.values)?Dn(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Dn(l),u={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},m,E=0;const f={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let v={...f};const _={array:dE(),state:dE()},T=n.criteriaMode===Ct.all,k=P=>U=>{clearTimeout(E),E=setTimeout(P,U)},O=async P=>{if(!n.disabled&&(f.isValid||v.isValid||P)){const U=n.resolver?it((await F()).errors):await H(t,!0);U!==r.isValid&&_.state.next({isValid:U})}},p=(P,U)=>{!n.disabled&&(f.isValidating||f.validatingFields||v.isValidating||v.validatingFields)&&((P||Array.from(d.mount)).forEach(q=>{q&&(U?Ze(r.validatingFields,q,U):kn(r.validatingFields,q))}),_.state.next({validatingFields:r.validatingFields,isValidating:!it(r.validatingFields)}))},b=(P,U=[],q,ae,re=!0,ee=!0)=>{if(ae&&q&&!n.disabled){if(u.action=!0,ee&&Array.isArray(ie(t,P))){const me=q(ie(t,P),ae.argA,ae.argB);re&&Ze(t,P,me)}if(ee&&Array.isArray(ie(r.errors,P))){const me=q(ie(r.errors,P),ae.argA,ae.argB);re&&Ze(r.errors,P,me),_w(r.errors,P)}if((f.touchedFields||v.touchedFields)&&ee&&Array.isArray(ie(r.touchedFields,P))){const me=q(ie(r.touchedFields,P),ae.argA,ae.argB);re&&Ze(r.touchedFields,P,me)}(f.dirtyFields||v.dirtyFields)&&(r.dirtyFields=za(l,s)),_.state.next({name:P,isDirty:Y(P,U),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ze(s,P,U)},S=(P,U)=>{Ze(r.errors,P,U),_.state.next({errors:r.errors})},N=P=>{r.errors=P,_.state.next({errors:r.errors,isValid:!1})},L=(P,U,q,ae)=>{const re=ie(t,P);if(re){const ee=ie(s,P,pn(q)?ie(l,P):q);pn(ee)||ae&&ae.defaultChecked||U?Ze(s,P,U?ee:EE(re._f)):X(P,ee),u.mount&&O()}},y=(P,U,q,ae,re)=>{let ee=!1,me=!1;const Oe={name:P};if(!n.disabled){if(!q||ae){(f.isDirty||v.isDirty)&&(me=r.isDirty,r.isDirty=Oe.isDirty=Y(),ee=me!==Oe.isDirty);const Pe=Ir(ie(l,P),U);me=!!ie(r.dirtyFields,P),Pe?kn(r.dirtyFields,P):Ze(r.dirtyFields,P,!0),Oe.dirtyFields=r.dirtyFields,ee=ee||(f.dirtyFields||v.dirtyFields)&&me!==!Pe}if(q){const Pe=ie(r.touchedFields,P);Pe||(Ze(r.touchedFields,P,q),Oe.touchedFields=r.touchedFields,ee=ee||(f.touchedFields||v.touchedFields)&&Pe!==q)}ee&&re&&_.state.next(Oe)}return ee?Oe:{}},K=(P,U,q,ae)=>{const re=ie(r.errors,P),ee=(f.isValid||v.isValid)&&Tt(U)&&r.isValid!==U;if(n.delayError&&q?(m=k(()=>S(P,q)),m(n.delayError)):(clearTimeout(E),m=null,q?Ze(r.errors,P,q):kn(r.errors,P)),(q?!Ir(re,q):re)||!it(ae)||ee){const me={...ae,...ee&&Tt(U)?{isValid:U}:{},errors:r.errors,name:P};r={...r,...me},_.state.next(me)}},F=async P=>{p(P,!0);const U=await n.resolver(s,n.context,cw(P||d.mount,t,n.criteriaMode,n.shouldUseNativeValidation));return p(P),U},G=async P=>{const{errors:U}=await F(P);if(P)for(const q of P){const ae=ie(U,q);ae?Ze(r.errors,q,ae):kn(r.errors,q)}else r.errors=U;return U},H=async(P,U,q={valid:!0})=>{for(const ae in P){const re=P[ae];if(re){const{_f:ee,...me}=re;if(ee){const Oe=d.array.has(ee.name),Pe=re._f&&mw(re._f);Pe&&f.validatingFields&&p([ee.name],!0);const Ln=await TE(re,d.disabled,s,T,n.shouldUseNativeValidation&&!U,Oe);if(Pe&&f.validatingFields&&p([ee.name]),Ln[ee.name]&&(q.valid=!1,U))break;!U&&(ie(Ln,ee.name)?Oe?hw(r.errors,Ln,ee.name):Ze(r.errors,ee.name,Ln[ee.name]):kn(r.errors,ee.name))}!it(me)&&await H(me,U,q)}}return q.valid},W=()=>{for(const P of d.unMount){const U=ie(t,P);U&&(U._f.refs?U._f.refs.every(q=>!yu(q)):!yu(U._f.ref))&&en(P)}d.unMount=new Set},Y=(P,U)=>!n.disabled&&(P&&U&&Ze(s,P,U),!Ir(Re(),l)),x=(P,U,q)=>s_(P,d,{...u.mount?s:pn(U)?l:Rt(P)?{[P]:U}:U},q,U),V=P=>Kd(ie(u.mount?s:l,P,n.shouldUnregister?ie(l,P,[]):[])),X=(P,U,q={})=>{const ae=ie(t,P);let re=U;if(ae){const ee=ae._f;ee&&(!ee.disabled&&Ze(s,P,m_(U,ee)),re=Ls(ee.ref)&&Jn(U)?"":U,u_(ee.ref)?[...ee.ref.options].forEach(me=>me.selected=re.includes(me.value)):ee.refs?ri(ee.ref)?ee.refs.forEach(me=>{(!me.defaultChecked||!me.disabled)&&(Array.isArray(re)?me.checked=!!re.find(Oe=>Oe===me.value):me.checked=re===me.value||!!re)}):ee.refs.forEach(me=>me.checked=me.value===re):Bd(ee.ref)?ee.ref.value="":(ee.ref.value=re,ee.ref.type||_.state.next({name:P,values:Dn(s)})))}(q.shouldDirty||q.shouldTouch)&&y(P,re,q.shouldTouch,q.shouldDirty,!0),q.shouldValidate&&oe(P)},ne=(P,U,q)=>{for(const ae in U){if(!U.hasOwnProperty(ae))return;const re=U[ae],ee=P+"."+ae,me=ie(t,ee);(d.array.has(P)||bn(re)||me&&!me._f)&&!fa(re)?ne(ee,re,q):X(ee,re,q)}},te=(P,U,q={})=>{const ae=ie(t,P),re=d.array.has(P),ee=Dn(U);Ze(s,P,ee),re?(_.array.next({name:P,values:Dn(s)}),(f.isDirty||f.dirtyFields||v.isDirty||v.dirtyFields)&&q.shouldDirty&&_.state.next({name:P,dirtyFields:za(l,s),isDirty:Y(P,ee)})):ae&&!ae._f&&!Jn(ee)?ne(P,ee,q):X(P,ee,q),_E(P,d)&&_.state.next({...r,name:P}),_.state.next({name:u.mount?P:void 0,values:Dn(s)})},se=async P=>{u.mount=!0;const U=P.target;let q=U.name,ae=!0;const re=ie(t,q),ee=Pe=>{ae=Number.isNaN(Pe)||fa(Pe)&&isNaN(Pe.getTime())||Ir(Pe,ie(s,q,Pe))},me=vE(n.mode),Oe=vE(n.reValidateMode);if(re){let Pe,Ln;const Qt=U.type?EE(re._f):a_(P),et=P.type===Is.BLUR||P.type===Is.FOCUS_OUT,Zr=!fw(re._f)&&!n.resolver&&!ie(r.errors,q)&&!re._f.deps||gw(et,ie(r.touchedFields,q),r.isSubmitted,Oe,me),_r=_E(q,d,et);Ze(s,q,Qt),et?(!U||!U.readOnly)&&(re._f.onBlur&&re._f.onBlur(P),m&&m(0)):re._f.onChange&&re._f.onChange(P);const hr=y(q,Qt,et),Qr=!it(hr)||_r;if(!et&&_.state.next({name:q,type:P.type,values:Dn(s)}),Zr)return(f.isValid||v.isValid)&&(n.mode==="onBlur"?et&&O():et||O()),Qr&&_.state.next({name:q,..._r?{}:hr});if(!et&&_r&&_.state.next({...r}),n.resolver){const{errors:pr}=await F([q]);if(ee(Qt),ae){const ea=hE(r.errors,t,q),Ae=hE(pr,t,ea.name||q);Pe=Ae.error,q=Ae.name,Ln=it(pr)}}else p([q],!0),Pe=(await TE(re,d.disabled,s,T,n.shouldUseNativeValidation))[q],p([q]),ee(Qt),ae&&(Pe?Ln=!1:(f.isValid||v.isValid)&&(Ln=await H(t,!0)));ae&&(re._f.deps&&(!Array.isArray(re._f.deps)||re._f.deps.length>0)&&oe(re._f.deps),K(q,Ln,Pe,hr))}},Q=(P,U)=>{if(ie(r.errors,U)&&P.focus)return P.focus(),1},oe=async(P,U={})=>{let q,ae;const re=Ul(P);if(n.resolver){const ee=await G(pn(P)?P:re);q=it(ee),ae=P?!re.some(me=>ie(ee,me)):q}else P?(ae=(await Promise.all(re.map(async ee=>{const me=ie(t,ee);return await H(me&&me._f?{[ee]:me}:me)}))).every(Boolean),!(!ae&&!r.isValid)&&O()):ae=q=await H(t);return _.state.next({...!Rt(P)||(f.isValid||v.isValid)&&q!==r.isValid?{}:{name:P},...n.resolver||!P?{isValid:q}:{},errors:r.errors}),U.shouldFocus&&!ae&&Hl(t,Q,P?re:d.mount),ae},Re=(P,U)=>{let q={...u.mount?s:l};return U&&(q=o_(U.dirtyFields?r.dirtyFields:r.touchedFields,q)),pn(P)?q:Rt(P)?ie(q,P):P.map(ae=>ie(q,ae))},ge=(P,U)=>({invalid:!!ie((U||r).errors,P),isDirty:!!ie((U||r).dirtyFields,P),error:ie((U||r).errors,P),isValidating:!!ie(r.validatingFields,P),isTouched:!!ie((U||r).touchedFields,P)}),Qe=P=>{P&&Ul(P).forEach(U=>kn(r.errors,U)),_.state.next({errors:P?r.errors:{}})},dn=(P,U,q)=>{const ae=(ie(t,P,{_f:{}})._f||{}).ref,re=ie(r.errors,P)||{},{ref:ee,message:me,type:Oe,...Pe}=re;Ze(r.errors,P,{...Pe,...U,ref:ae}),_.state.next({name:P,errors:r.errors,isValid:!1}),q&&q.shouldFocus&&ae&&ae.focus&&ae.focus()},ut=(P,U)=>qt(P)?_.state.subscribe({next:q=>"values"in q&&P(x(void 0,U),q)}):x(P,U,!0),_e=P=>_.state.subscribe({next:U=>{vw(P.name,U.name,P.exact)&&Ew(U,P.formState||f,vn,P.reRenderRoot)&&P.callback({values:{...s},...r,...U,defaultValues:l})}}).unsubscribe,Te=P=>(u.mount=!0,v={...v,...P.formState},_e({...P,formState:v})),en=(P,U={})=>{for(const q of P?Ul(P):d.mount)d.mount.delete(q),d.array.delete(q),U.keepValue||(kn(t,q),kn(s,q)),!U.keepError&&kn(r.errors,q),!U.keepDirty&&kn(r.dirtyFields,q),!U.keepTouched&&kn(r.touchedFields,q),!U.keepIsValidating&&kn(r.validatingFields,q),!n.shouldUnregister&&!U.keepDefaultValue&&kn(l,q);_.state.next({values:Dn(s)}),_.state.next({...r,...U.keepDirty?{isDirty:Y()}:{}}),!U.keepIsValid&&O()},nn=({disabled:P,name:U})=>{(Tt(P)&&u.mount||P||d.disabled.has(U))&&(P?d.disabled.add(U):d.disabled.delete(U))},Nn=(P,U={})=>{let q=ie(t,P);const ae=Tt(U.disabled)||Tt(n.disabled);return Ze(t,P,{...q||{},_f:{...q&&q._f?q._f:{ref:{name:P}},name:P,mount:!0,...U}}),d.mount.add(P),q?nn({disabled:Tt(U.disabled)?U.disabled:n.disabled,name:P}):L(P,!0,U.value),{...ae?{disabled:U.disabled||n.disabled}:{},...n.progressive?{required:!!U.required,min:Il(U.min),max:Il(U.max),minLength:Il(U.minLength),maxLength:Il(U.maxLength),pattern:Il(U.pattern)}:{},name:P,onChange:se,onBlur:se,ref:re=>{if(re){Nn(P,U),q=ie(t,P);const ee=pn(re.value)&&re.querySelectorAll&&re.querySelectorAll("input,select,textarea")[0]||re,me=sw(ee),Oe=q._f.refs||[];if(me?Oe.find(Pe=>Pe===ee):ee===q._f.ref)return;Ze(t,P,{_f:{...q._f,...me?{refs:[...Oe.filter(yu),ee,...Array.isArray(ie(l,P))?[{}]:[]],ref:{type:ee.type,name:P}}:{ref:ee}}}),L(P,!1,void 0,ee)}else q=ie(t,P,{}),q._f&&(q._f.mount=!1),(n.shouldUnregister||U.shouldUnregister)&&!(l_(d.array,P)&&u.action)&&d.unMount.add(P)}}},dt=()=>n.shouldFocusError&&Hl(t,Q,d.mount),Vn=P=>{Tt(P)&&(_.state.next({disabled:P}),Hl(t,(U,q)=>{const ae=ie(t,q);ae&&(U.disabled=ae._f.disabled||P,Array.isArray(ae._f.refs)&&ae._f.refs.forEach(re=>{re.disabled=ae._f.disabled||P}))},0,!1))},Fn=(P,U)=>async q=>{let ae;q&&(q.preventDefault&&q.preventDefault(),q.persist&&q.persist());let re=Dn(s);if(_.state.next({isSubmitting:!0}),n.resolver){const{errors:ee,values:me}=await F();r.errors=ee,re=Dn(me)}else await H(t);if(d.disabled.size)for(const ee of d.disabled)kn(re,ee);if(kn(r.errors,"root"),it(r.errors)){_.state.next({errors:{}});try{await P(re,q)}catch(ee){ae=ee}}else U&&await U({...r.errors},q),dt(),setTimeout(dt);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:it(r.errors)&&!ae,submitCount:r.submitCount+1,errors:r.errors}),ae)throw ae},Zn=(P,U={})=>{ie(t,P)&&(pn(U.defaultValue)?te(P,Dn(ie(l,P))):(te(P,U.defaultValue),Ze(l,P,Dn(U.defaultValue))),U.keepTouched||kn(r.touchedFields,P),U.keepDirty||(kn(r.dirtyFields,P),r.isDirty=U.defaultValue?Y(P,Dn(ie(l,P))):Y()),U.keepError||(kn(r.errors,P),f.isValid&&O()),_.state.next({...r}))},$e=(P,U={})=>{const q=P?Dn(P):l,ae=Dn(q),re=it(P),ee=re?l:ae;if(U.keepDefaultValues||(l=q),!U.keepValues){if(U.keepDirtyValues){const me=new Set([...d.mount,...Object.keys(za(l,s))]);for(const Oe of Array.from(me))ie(r.dirtyFields,Oe)?Ze(ee,Oe,ie(s,Oe)):te(Oe,ie(ee,Oe))}else{if(Fd&&pn(P))for(const me of d.mount){const Oe=ie(t,me);if(Oe&&Oe._f){const Pe=Array.isArray(Oe._f.refs)?Oe._f.refs[0]:Oe._f.ref;if(Ls(Pe)){const Ln=Pe.closest("form");if(Ln){Ln.reset();break}}}}if(U.keepFieldsRef)for(const me of d.mount)te(me,ie(ee,me));else t={}}s=n.shouldUnregister?U.keepDefaultValues?Dn(l):{}:Dn(ee),_.array.next({values:{...ee}}),_.state.next({values:{...ee}})}d={mount:U.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!f.isValid||!!U.keepIsValid||!!U.keepDirtyValues,u.watch=!!n.shouldUnregister,_.state.next({submitCount:U.keepSubmitCount?r.submitCount:0,isDirty:re?!1:U.keepDirty?r.isDirty:!!(U.keepDefaultValues&&!Ir(P,l)),isSubmitted:U.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:re?{}:U.keepDirtyValues?U.keepDefaultValues&&s?za(l,s):r.dirtyFields:U.keepDefaultValues&&P?za(l,P):U.keepDirty?r.dirtyFields:{},touchedFields:U.keepTouched?r.touchedFields:{},errors:U.keepErrors?r.errors:{},isSubmitSuccessful:U.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:l})},An=(P,U)=>$e(qt(P)?P(s):P,U),ct=(P,U={})=>{const q=ie(t,P),ae=q&&q._f;if(ae){const re=ae.refs?ae.refs[0]:ae.ref;re.focus&&(re.focus(),U.shouldSelect&&qt(re.select)&&re.select())}},vn=P=>{r={...r,...P}},Qn={control:{register:Nn,unregister:en,getFieldState:ge,handleSubmit:Fn,setError:dn,_subscribe:_e,_runSchema:F,_focusError:dt,_getWatch:x,_getDirty:Y,_setValid:O,_setFieldArray:b,_setDisabledField:nn,_setErrors:N,_getFieldArray:V,_reset:$e,_resetDefaultValues:()=>qt(n.defaultValues)&&n.defaultValues().then(P=>{An(P,n.resetOptions),_.state.next({isLoading:!1})}),_removeUnmounted:W,_disableForm:Vn,_subjects:_,_proxyFormState:f,get _fields(){return t},get _formValues(){return s},get _state(){return u},set _state(P){u=P},get _defaultValues(){return l},get _names(){return d},set _names(P){d=P},get _formState(){return r},get _options(){return n},set _options(P){n={...n,...P}}},subscribe:Te,trigger:oe,register:Nn,handleSubmit:Fn,watch:ut,setValue:te,getValues:Re,reset:An,resetField:Zn,clearErrors:Qe,unregister:en,setError:dn,setFocus:ct,getFieldState:ge};return{...Qn,formControl:Qn}}function E_(e={}){const n=g.useRef(void 0),r=g.useRef(void 0),[t,l]=g.useState({isDirty:!1,isValidating:!1,isLoading:qt(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:qt(e.defaultValues)?void 0:e.defaultValues});if(!n.current)if(e.formControl)n.current={...e.formControl,formState:t},e.defaultValues&&!qt(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:u,...d}=Tw(e);n.current={...d,formState:t}}const s=n.current.control;return s._options=e,Vd(()=>{const u=s._subscribe({formState:s._proxyFormState,callback:()=>l({...s._formState}),reRenderRoot:!0});return l(d=>({...d,isReady:!0})),s._formState.isReady=!0,u},[s]),g.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),g.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode)},[s,e.mode,e.reValidateMode]),g.useEffect(()=>{e.errors&&(s._setErrors(e.errors),s._focusError())},[s,e.errors]),g.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),g.useEffect(()=>{if(s._proxyFormState.isDirty){const u=s._getDirty();u!==t.isDirty&&s._subjects.state.next({isDirty:u})}},[s,t.isDirty]),g.useEffect(()=>{e.values&&!Ir(e.values,r.current)?(s._reset(e.values,{keepFieldsRef:!0,...s._options.resetOptions}),r.current=e.values,l(u=>({...u}))):s._resetDefaultValues()},[s,e.values]),g.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),n.current.formState=i_(t,s),n.current}function Rw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var RE={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE;function yw(){if(yE)return Ll;yE=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,l,s){var u=null;if(s!==void 0&&(u=""+s),l.key!==void 0&&(u=""+l.key),"key"in l){s={};for(var d in l)d!=="key"&&(s[d]=l[d])}else s=l;return l=s.ref,{$$typeof:e,type:t,key:u,ref:l!==void 0?l:null,props:s}}return Ll.Fragment=n,Ll.jsx=r,Ll.jsxs=r,Ll}var NE;function Nw(){return NE||(NE=1,RE.exports=yw()),RE.exports}var st=Nw();const Aw=({children:e})=>{const n=D.Children.toArray(e);return n.length===0?null:st.jsx(Wv,{variant:"warning",size:"small",children:st.jsx(Ra,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:n.map(r=>st.jsx(un,{size:"small",children:r},kw(r)))})})},kw=e=>{if(D.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},ai={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},AE=zt(ai),bw=({onClick:e=()=>{},erOverstyrt:n=!1})=>{const[r,t]=D.useState(n),l=()=>{r||(t(!0),e(!0))};return D.useEffect(()=>{t(n)},[n]),st.jsx(Cn,{variant:r?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:l,"aria-disabled":n,disabled:n,icon:r?st.jsx(ok,{"aria-hidden":!0,color:"var(--ax-neutral-400)",height:25,width:25,title:AE.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):st.jsx(ik,{"aria-hidden":!0,color:"var(--ax-accent-500)",height:25,width:25,title:AE.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var kE={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var bE;function Sw(){return bE||(bE=1,(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(s=l(s,t.call(this,d)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var u="";for(var d in s)n.call(s,d)&&s[d]&&(u=l(u,this&&this[d]||d));return u}function l(s,u){return u?s?s+" "+u:s+u:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(kE)),kE.exports}var Ow=Sw();const Ud=Rw(Ow),Dw="_borderbox_1a0x6_1",Iw="_error_1a0x6_5",Lw="_warning_1a0x6_8",Pw={borderbox:Dw,error:Iw,warning:Lw};Ud.bind(Pw);const ww="_aksjonspunkt_11wjs_1",Fw="_erAksjonspunktApent_11wjs_4",Kw="_erIkkeGodkjentAvBeslutter_11wjs_8",Mw={aksjonspunkt:ww,erAksjonspunktApent:Fw,erIkkeGodkjentAvBeslutter:Kw};Ud.bind(Mw);const SE=zt(ai),Gw=({text:e,okButtonText:n,showModal:r,cancel:t,submit:l})=>st.jsxs(va,{width:"small",open:r,"aria-label":e,onClose:t,children:[st.jsx(va.Body,{children:st.jsx(Jl,{size:"small",level:"2",children:e})}),st.jsxs(va.Footer,{children:[st.jsx(Cn,{variant:"primary",size:"small",onClick:l,autoFocus:!0,type:"button",children:n||SE.formatMessage({id:"OkAvbrytModal.Ok"})}),st.jsx(Cn,{variant:"secondary",size:"small",onClick:t,type:"button",children:SE.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]});zt(ai);const Vw="_divider_1jpov_1",Bw="_dividerParagraf_1jpov_8",xw="_leftPanel_1jpov_11",Uw="_rightPanel_1jpov_14",Hw={divider:Vw,dividerParagraf:Bw,leftPanel:xw,rightPanel:Uw};Ud.bind(Hw);const v_=()=>st.jsx("span",{"data-testid":"editedIcon",children:st.jsx(mk,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});zt(ai);zt(ai);var Nu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var OE;function jw(){return OE||(OE=1,(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(s=l(s,t(d)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var u="";for(var d in s)n.call(s,d)&&s[d]&&(u=l(u,d));return u}function l(s,u){return u?s?s+" "+u:s+u:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Nu)),Nu.exports}var Cw=jw();const qw=sd(Cw);function Yw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var DE={exports:{}},Pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE;function $w(){if(IE)return Pl;IE=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,l,s){var u=null;if(s!==void 0&&(u=""+s),l.key!==void 0&&(u=""+l.key),"key"in l){s={};for(var d in l)d!=="key"&&(s[d]=l[d])}else s=l;return l=s.ref,{$$typeof:e,type:t,key:u,ref:l!==void 0?l:null,props:s}}return Pl.Fragment=n,Pl.jsx=r,Pl.jsxs=r,Pl}var LE;function Ww(){return LE||(LE=1,DE.exports=$w()),DE.exports}var Je=Ww();const cl=e=>e.reduce((n,r,t)=>({...n,[t]:l=>r(l)||!0}),{}),ya=(e,n)=>n.split(".").reduce((r,t)=>r!==void 0?r[t]:r,e)?.message,Hu=({label:e,validate:n=[],readOnly:r=!1,onChange:t,onClick:l,className:s,size:u="small",...d})=>{const{name:m,control:E,disabled:f}=d,{formState:{errors:v}}=gr(),{field:_}=dl({name:m,control:E,rules:{validate:D.useMemo(()=>cl(n),[n])}}),T=ya(v,m);return Je.jsxs(Je.Fragment,{children:[Je.jsx(MP,{size:u,disabled:f||r,checked:_.value===!0,className:s,error:!!T,..._,onChange:k=>{_.onChange(k),t&&t(k.currentTarget.checked)},onClick:()=>{l&&l()},children:e}),T&&Je.jsx(ba,{children:ya(v,m)})]})};var ju={exports:{}},Jw=ju.exports,PE;function zw(){return PE||(PE=1,(function(e,n){(function(r,t){e.exports=t()})(Jw,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d/,s=/\d\d/,u=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,m={},E=function(p){return(p=+p)+(p>68?1900:2e3)},f=function(p){return function(b){this[p]=+b}},v=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=(function(b){if(!b||b==="Z")return 0;var S=b.match(/([+-]|\d\d)/g),N=60*S[1]+(+S[2]||0);return N===0?0:S[0]==="+"?-N:N})(p)}],_=function(p){var b=m[p];return b&&(b.indexOf?b:b.s.concat(b.f))},T=function(p,b){var S,N=m.meridiem;if(N){for(var L=1;L<=24;L+=1)if(p.indexOf(N(L,0,b))>-1){S=L>12;break}}else S=p===(b?"pm":"PM");return S},k={A:[d,function(p){this.afternoon=T(p,!1)}],a:[d,function(p){this.afternoon=T(p,!0)}],Q:[l,function(p){this.month=3*(p-1)+1}],S:[l,function(p){this.milliseconds=100*+p}],SS:[s,function(p){this.milliseconds=10*+p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[u,f("seconds")],ss:[u,f("seconds")],m:[u,f("minutes")],mm:[u,f("minutes")],H:[u,f("hours")],h:[u,f("hours")],HH:[u,f("hours")],hh:[u,f("hours")],D:[u,f("day")],DD:[s,f("day")],Do:[d,function(p){var b=m.ordinal,S=p.match(/\d+/);if(this.day=S[0],b)for(var N=1;N<=31;N+=1)b(N).replace(/\[|\]/g,"")===p&&(this.day=N)}],w:[u,f("week")],ww:[s,f("week")],M:[u,f("month")],MM:[s,f("month")],MMM:[d,function(p){var b=_("months"),S=(_("monthsShort")||b.map(function(N){return N.slice(0,3)})).indexOf(p)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[d,function(p){var b=_("months").indexOf(p)+1;if(b<1)throw new Error;this.month=b%12||b}],Y:[/[+-]?\d+/,f("year")],YY:[s,function(p){this.year=E(p)}],YYYY:[/\d{4}/,f("year")],Z:v,ZZ:v};function O(p){var b,S;b=p,S=m&&m.formats;for(var N=(p=b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(W,Y,x){var V=x&&x.toUpperCase();return Y||S[x]||r[x]||S[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(X,ne,te){return ne||te.slice(1)})})).match(t),L=N.length,y=0;y<L;y+=1){var K=N[y],F=k[K],G=F&&F[0],H=F&&F[1];N[y]=H?{regex:G,parser:H}:K.replace(/^\[|\]$/g,"")}return function(W){for(var Y={},x=0,V=0;x<L;x+=1){var X=N[x];if(typeof X=="string")V+=X.length;else{var ne=X.regex,te=X.parser,se=W.slice(V),Q=ne.exec(se)[0];te.call(Y,Q),W=W.replace(Q,"")}}return(function(oe){var Re=oe.afternoon;if(Re!==void 0){var ge=oe.hours;Re?ge<12&&(oe.hours+=12):ge===12&&(oe.hours=0),delete oe.afternoon}})(Y),Y}}return function(p,b,S){S.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(E=p.parseTwoDigitYear);var N=b.prototype,L=N.parse;N.parse=function(y){var K=y.date,F=y.utc,G=y.args;this.$u=F;var H=G[1];if(typeof H=="string"){var W=G[2]===!0,Y=G[3]===!0,x=W||Y,V=G[2];Y&&(V=G[2]),m=this.$locale(),!W&&V&&(m=S.Ls[V]),this.$d=(function(se,Q,oe,Re){try{if(["x","X"].indexOf(Q)>-1)return new Date((Q==="X"?1e3:1)*se);var ge=O(Q)(se),Qe=ge.year,dn=ge.month,ut=ge.day,_e=ge.hours,Te=ge.minutes,en=ge.seconds,nn=ge.milliseconds,Nn=ge.zone,dt=ge.week,Vn=new Date,Fn=ut||(Qe||dn?1:Vn.getDate()),Zn=Qe||Vn.getFullYear(),$e=0;Qe&&!dn||($e=dn>0?dn-1:Vn.getMonth());var An,ct=_e||0,vn=Te||0,mt=en||0,Qn=nn||0;return Nn?new Date(Date.UTC(Zn,$e,Fn,ct,vn,mt,Qn+60*Nn.offset*1e3)):oe?new Date(Date.UTC(Zn,$e,Fn,ct,vn,mt,Qn)):(An=new Date(Zn,$e,Fn,ct,vn,mt,Qn),dt&&(An=Re(An).week(dt).toDate()),An)}catch{return new Date("")}})(K,H,F,S),this.init(),V&&V!==!0&&(this.$L=this.locale(V).$L),x&&K!=this.format(H)&&(this.$d=new Date("")),m={}}else if(H instanceof Array)for(var X=H.length,ne=1;ne<=X;ne+=1){G[1]=H[ne-1];var te=S.apply(this,G);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}ne===X&&(this.$d=new Date(""))}else L.call(this,y)}}})})(ju)),ju.exports}var Xw=zw();const Zw=Yw(Xw),Qw="_textarea_14c7r_1",eF="_readOnlyField_14c7r_7",wE={textarea:Qw,readOnlyField:eF},nF=e=>e!=null&&e!=="",$s=({label:e,value:n,isEdited:r=!1,type:t,hideLabel:l,size:s})=>nF(n)?Je.jsxs(Ra,{gap:"space-4",children:[e&&!l&&Je.jsx(Wt,{size:s,children:e}),Je.jsxs(jt,{gap:"space-8",align:"center",wrap:!1,children:[Je.jsx(cd,{className:t==="textarea"?wE.textarea:wE.readOnlyField,size:s,children:n}),r&&Je.jsx(v_,{})]})]}):null;mn.extend(Zw);const FE=({label:e,description:n,validate:r=[],hideLabel:t=!1,isReadOnly:l=!1,size:s="small",onChange:u,disabledDays:d,isEdited:m,defaultMonth:E,fromDate:f,toDate:v,..._})=>{const{name:T,control:k,disabled:O}=_,{formState:{errors:p}}=gr(),{field:b}=dl({name:T,control:k,rules:{validate:D.useMemo(()=>cl(r),[r])}}),S=b.value?mn(b.value,Ca,!0).format(Zi):"",[N,L]=D.useState(S),{datepickerProps:y,inputProps:K}=tP({onDateChange:H=>{if(H!==void 0){const W=mn(H).format(Ca);u&&u(W),b.onChange(W),L(mn(W,Ca,!0).format(Zi))}},defaultSelected:b.value?mn(b.value,Ca,!0).toDate():void 0,defaultMonth:E||(!b.value&&v?v:void 0),disabled:d}),F=D.useCallback(H=>{const W=mn(H.target.value,Zi,!0).format(Ca),Y=W!=="Invalid Date";L(H.target.value),u&&u(Y?W:H.target.value),b.onChange(Y?W:H.target.value)},[L,u,b]);if(l)return Je.jsx($s,{label:e,value:b.value?mn(b.value,Ca,!0).format(Zi):void 0,isEdited:m,hideLabel:t,size:s});const G={...y,fromDate:f,toDate:v,dropdownCaption:f&&v?!0:void 0};return Je.jsx(Ds,{...G,children:Je.jsx(Ds.Input,{...K,hideLabel:t,onChange:F,value:N,size:s,label:e,description:n,disabled:O,error:ya(p,T)})})},tF=/^(\d+[,]?(\d{1,2})?)$/,rF=/^(\d{1,20}[,.]?(\d{1,10})?)$/,KE=({label:e,hideLabel:n,validate:r=[],readOnly:t=!1,description:l,autoFocus:s,isEdited:u,forceTwoDecimalDigits:d=!1,className:m,returnAsNumber:E=!1,onChange:f,size:v="small",..._})=>{const{name:T,control:k,disabled:O}=_,[p,b]=D.useState(!1),{formState:{errors:S}}=gr(),{field:N}=dl({name:T,control:k,rules:{validate:D.useMemo(()=>cl(r),[r])}});if(t)return Je.jsx($s,{label:e,value:N.value,isEdited:u,hideLabel:n});const L=d?tF:rF,y=N.value!==void 0&&N.value!==null?N.value.toString():"",K=!p&&d&&y!==""&&!Number.isNaN(y)?parseFloat(y).toFixed(2):y;return Je.jsx(ew,{size:v,description:l,label:e,error:ya(S,T),...N,value:K.replace(".",","),autoFocus:s,autoComplete:"off",disabled:O,type:"text",hideLabel:n,inputMode:"decimal",className:m,onChange:F=>{b(!0);const G=F.currentTarget.value;let H;return G===""?H=null:L.test(G)?H=G.replace(",","."):H=N.value,f&&f(H),H&&E&&(H=parseFloat(H),Number.isNaN(H)&&(H=null)),N.onChange(H)},onBlur:()=>{b(!1),N.onBlur(),d&&y.slice(-1)==="."&&N.onChange(y+0)}})},aF="_noReadOnlyIcon_11vhl_2",lF={noReadOnlyIcon:aF},iF=({label:e,description:n,validate:r=[],onChange:t,children:l,className:s,isReadOnly:u=!1,size:d="small",isEdited:m=!1,hideLegend:E=!1,...f})=>{const{name:v,control:_}=f,{formState:{errors:T}}=gr(),{field:k}=dl({name:v,control:_,rules:{validate:cl(r)}});return Je.jsx(UP,{name:v,value:k.value!==void 0?k.value:null,legend:Je.jsxs(jt,{justify:"center",gap:"space-8",children:[e,u&&m&&Je.jsx(v_,{})]}),hideLegend:E,"aria-readonly":u,readOnly:u,description:n,size:d,error:ya(T,v),onChange:O=>{t&&t(O),k.onChange(O)},className:qw(s,lF.noReadOnlyIcon),children:l})},Xa=({label:e,selectValues:n,validate:r=[],readOnly:t=!1,description:l,hideValueOnDisable:s=!1,onChange:u,className:d,hideLabel:m,isEdited:E,size:f="small",...v})=>{const{name:_,control:T,disabled:k}=v,{formState:{errors:O}}=gr(),{field:p}=dl({name:_,control:T,rules:{validate:D.useMemo(()=>cl(r),[r])}});if(t){const N=n.map(y=>y.props).find(y=>y.value===p.value),L=N?N.children:void 0;return Je.jsx($s,{value:L,label:e,hideLabel:m,isEdited:E,size:f})}const b=p.value||"",S=!n.map(N=>N.props.value).includes(b)&&b!=="";return S&&console.warn(`No corresponding option found for value '${b}'`),Je.jsxs(Gu,{size:f,className:d,error:ya(O,_),label:e,description:l,value:s&&k||S?"":p.value,disabled:k,onChange:N=>{u&&u(N),p.onChange(N)},hideLabel:m,children:[Je.jsx("option",{style:{display:"none"}}),",",n]})},sF="_textAreaFieldWithBadges_bdz0b_1",oF="_etikettWrapper_bdz0b_4",ME={textAreaFieldWithBadges:sF,etikettWrapper:oF},uF=({name:e,control:n,label:r,readOnly:t,maxLength:l,badges:s,validate:u=[],parse:d=T=>T,className:m,description:E,isEdited:f,size:v="small",..._})=>{const{formState:{errors:T}}=gr(),{field:k}=dl({name:e,control:n,rules:{validate:D.useMemo(()=>cl(u),[u])}});return t?Je.jsx($s,{size:v,label:r,value:k.value,type:"textarea",isEdited:f,hideLabel:_.hideLabel}):Je.jsxs("div",{className:s?ME.textAreaFieldWithBadges:null,children:[s&&Je.jsx("div",{className:ME.etikettWrapper,children:s.map(({type:O,titleText:p})=>Je.jsx(DP,{variant:O,size:"small",children:p},p))}),Je.jsx(ZP,{size:v,label:r,description:E,className:m,autoComplete:"off",...k,onChange:O=>k.onChange(O.currentTarget.value!==""?d(O.currentTarget.value):null),value:k.value?k.value:"",error:ya(T,e),maxLength:l,..._})]})},g_=({formMethods:e,onSubmit:n,children:r,className:t,setDataOnUnmount:l})=>{const{handleSubmit:s,getValues:u}=e;return D.useEffect(()=>()=>{l&&l(u())},[]),Je.jsx(rw,{...e,children:Je.jsx("form",{className:t,onSubmit:n?s(d=>n(d)):void 0,children:r})})},li={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"},Au=zt(li),dF=pA(3),cF=TA(1500),Ws=({control:e,isReadOnly:n,isSubmittable:r,hasBegrunnelse:t,label:l,hasReadOnlyLabel:s=!1,hasVurderingText:u=!1,size:d})=>{const m=u?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",E=()=>n?s?Au.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":l??Au.formatMessage({id:m});return C.jsx(od,{value:Au,children:(r||t)&&C.jsx(uF,{name:"begrunnelse",control:e,label:E(),validate:[Ht,dF,cF,RA],maxLength:1500,readOnly:n,size:d})})},mF=e=>e&&Array.isArray(e)?e[0]?.begrunnelse??"":e&&!Array.isArray(e)&&e.begrunnelse?e.begrunnelse:"";Ws.initialValues=e=>({begrunnelse:yA(mF(e)??void 0)});Ws.transformValues=e=>({begrunnelse:FA(e.begrunnelse)});Ws.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}}],raw:"Aksjonspunkt[]"},{name:"signature",type:"object",raw:`{
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
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}}]}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},alias:"FaktaBegrunnelseFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""}}};const fF=zt(li),EF=(e,n,r)=>!r||n?!0:!e,__=({isReadOnly:e,isSubmittable:n,buttonText:r,onClick:t,isSubmitting:l,isDirty:s})=>C.jsx(od,{value:fF,children:!e&&C.jsx("div",{children:C.jsxs(Cn,{size:"small",variant:"primary",loading:l,disabled:EF(s,l,n),onClick:t,type:t?"button":"submit",children:[!!r&&r,!r&&C.jsx(Me,{id:"SubmitButton.ConfirmInformation"})]})})});__.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};zt(li);var Gl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var vF=Gl.exports,GE;function gF(){return GE||(GE=1,(function(e,n){(function(){var r,t="4.17.21",l=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",d="Invalid `variable` option passed into `_.template`",m="__lodash_hash_undefined__",E=500,f="__lodash_placeholder__",v=1,_=2,T=4,k=1,O=2,p=1,b=2,S=4,N=8,L=16,y=32,K=64,F=128,G=256,H=512,W=30,Y="...",x=800,V=16,X=1,ne=2,te=3,se=1/0,Q=9007199254740991,oe=17976931348623157e292,Re=NaN,ge=4294967295,Qe=ge-1,dn=ge>>>1,ut=[["ary",F],["bind",p],["bindKey",b],["curry",N],["curryRight",L],["flip",H],["partial",y],["partialRight",K],["rearg",G]],_e="[object Arguments]",Te="[object Array]",en="[object AsyncFunction]",nn="[object Boolean]",Nn="[object Date]",dt="[object DOMException]",Vn="[object Error]",Fn="[object Function]",Zn="[object GeneratorFunction]",$e="[object Map]",An="[object Number]",ct="[object Null]",vn="[object Object]",mt="[object Promise]",Qn="[object Proxy]",P="[object RegExp]",U="[object Set]",q="[object String]",ae="[object Symbol]",re="[object Undefined]",ee="[object WeakMap]",me="[object WeakSet]",Oe="[object ArrayBuffer]",Pe="[object DataView]",Ln="[object Float32Array]",Qt="[object Float64Array]",et="[object Int8Array]",Zr="[object Int16Array]",_r="[object Int32Array]",hr="[object Uint8Array]",Qr="[object Uint8ClampedArray]",pr="[object Uint16Array]",ea="[object Uint32Array]",Ae=/\b__p \+= '';/g,ze=/\b(__p \+=) '' \+/g,Ye=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Gt=/&(?:amp|lt|gt|quot|#39);/g,nt=/[&<>"']/g,Da=RegExp(Gt.source),Pn=RegExp(nt.source),Nt=/<%-([\s\S]+?)%>/g,Ve=/<%([\s\S]+?)%>/g,ui=/<%=([\s\S]+?)%>/g,Zs=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qs=/^\w*$/,fl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,na=/[\\^$.*+?()[\]{}|]/g,J_=RegExp(na.source),eo=/^\s+/,z_=/\s/,X_=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Z_=/\{\n\/\* \[wrapped with (.+)\] \*/,Q_=/,? & /,eh=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,nh=/[()=,{}\[\]\/\s]/,th=/\\(\\)?/g,rh=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,qd=/\w*$/,ah=/^[-+]0x[0-9a-f]+$/i,lh=/^0b[01]+$/i,ih=/^\[object .+?Constructor\]$/,sh=/^0o[0-7]+$/i,oh=/^(?:0|[1-9]\d*)$/,uh=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,di=/($^)/,dh=/['\n\r\u2028\u2029\\]/g,ci="\\ud800-\\udfff",ch="\\u0300-\\u036f",mh="\\ufe20-\\ufe2f",fh="\\u20d0-\\u20ff",Yd=ch+mh+fh,$d="\\u2700-\\u27bf",Wd="a-z\\xdf-\\xf6\\xf8-\\xff",Eh="\\xac\\xb1\\xd7\\xf7",vh="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",gh="\\u2000-\\u206f",_h=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Jd="A-Z\\xc0-\\xd6\\xd8-\\xde",zd="\\ufe0e\\ufe0f",Xd=Eh+vh+gh+_h,no="['’]",hh="["+ci+"]",Zd="["+Xd+"]",mi="["+Yd+"]",Qd="\\d+",ph="["+$d+"]",ec="["+Wd+"]",nc="[^"+ci+Xd+Qd+$d+Wd+Jd+"]",to="\\ud83c[\\udffb-\\udfff]",Th="(?:"+mi+"|"+to+")",tc="[^"+ci+"]",ro="(?:\\ud83c[\\udde6-\\uddff]){2}",ao="[\\ud800-\\udbff][\\udc00-\\udfff]",Ia="["+Jd+"]",rc="\\u200d",ac="(?:"+ec+"|"+nc+")",Rh="(?:"+Ia+"|"+nc+")",lc="(?:"+no+"(?:d|ll|m|re|s|t|ve))?",ic="(?:"+no+"(?:D|LL|M|RE|S|T|VE))?",sc=Th+"?",oc="["+zd+"]?",yh="(?:"+rc+"(?:"+[tc,ro,ao].join("|")+")"+oc+sc+")*",Nh="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ah="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",uc=oc+sc+yh,kh="(?:"+[ph,ro,ao].join("|")+")"+uc,bh="(?:"+[tc+mi+"?",mi,ro,ao,hh].join("|")+")",Sh=RegExp(no,"g"),Oh=RegExp(mi,"g"),lo=RegExp(to+"(?="+to+")|"+bh+uc,"g"),Dh=RegExp([Ia+"?"+ec+"+"+lc+"(?="+[Zd,Ia,"$"].join("|")+")",Rh+"+"+ic+"(?="+[Zd,Ia+ac,"$"].join("|")+")",Ia+"?"+ac+"+"+lc,Ia+"+"+ic,Ah,Nh,Qd,kh].join("|"),"g"),Ih=RegExp("["+rc+ci+Yd+zd+"]"),Lh=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ph=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],wh=-1,tn={};tn[Ln]=tn[Qt]=tn[et]=tn[Zr]=tn[_r]=tn[hr]=tn[Qr]=tn[pr]=tn[ea]=!0,tn[_e]=tn[Te]=tn[Oe]=tn[nn]=tn[Pe]=tn[Nn]=tn[Vn]=tn[Fn]=tn[$e]=tn[An]=tn[vn]=tn[P]=tn[U]=tn[q]=tn[ee]=!1;var Xe={};Xe[_e]=Xe[Te]=Xe[Oe]=Xe[Pe]=Xe[nn]=Xe[Nn]=Xe[Ln]=Xe[Qt]=Xe[et]=Xe[Zr]=Xe[_r]=Xe[$e]=Xe[An]=Xe[vn]=Xe[P]=Xe[U]=Xe[q]=Xe[ae]=Xe[hr]=Xe[Qr]=Xe[pr]=Xe[ea]=!0,Xe[Vn]=Xe[Fn]=Xe[ee]=!1;var Fh={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Kh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Mh={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Gh={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Vh=parseFloat,Bh=parseInt,dc=typeof Qi=="object"&&Qi&&Qi.Object===Object&&Qi,xh=typeof self=="object"&&self&&self.Object===Object&&self,Kn=dc||xh||Function("return this")(),io=n&&!n.nodeType&&n,ta=io&&!0&&e&&!e.nodeType&&e,cc=ta&&ta.exports===io,so=cc&&dc.process,At=(function(){try{var M=ta&&ta.require&&ta.require("util").types;return M||so&&so.binding&&so.binding("util")}catch{}})(),mc=At&&At.isArrayBuffer,fc=At&&At.isDate,Ec=At&&At.isMap,vc=At&&At.isRegExp,gc=At&&At.isSet,_c=At&&At.isTypedArray;function ft(M,$,j){switch(j.length){case 0:return M.call($);case 1:return M.call($,j[0]);case 2:return M.call($,j[0],j[1]);case 3:return M.call($,j[0],j[1],j[2])}return M.apply($,j)}function Uh(M,$,j,ue){for(var ye=-1,Be=M==null?0:M.length;++ye<Be;){var Sn=M[ye];$(ue,Sn,j(Sn),M)}return ue}function kt(M,$){for(var j=-1,ue=M==null?0:M.length;++j<ue&&$(M[j],j,M)!==!1;);return M}function Hh(M,$){for(var j=M==null?0:M.length;j--&&$(M[j],j,M)!==!1;);return M}function hc(M,$){for(var j=-1,ue=M==null?0:M.length;++j<ue;)if(!$(M[j],j,M))return!1;return!0}function Gr(M,$){for(var j=-1,ue=M==null?0:M.length,ye=0,Be=[];++j<ue;){var Sn=M[j];$(Sn,j,M)&&(Be[ye++]=Sn)}return Be}function fi(M,$){var j=M==null?0:M.length;return!!j&&La(M,$,0)>-1}function oo(M,$,j){for(var ue=-1,ye=M==null?0:M.length;++ue<ye;)if(j($,M[ue]))return!0;return!1}function an(M,$){for(var j=-1,ue=M==null?0:M.length,ye=Array(ue);++j<ue;)ye[j]=$(M[j],j,M);return ye}function Vr(M,$){for(var j=-1,ue=$.length,ye=M.length;++j<ue;)M[ye+j]=$[j];return M}function uo(M,$,j,ue){var ye=-1,Be=M==null?0:M.length;for(ue&&Be&&(j=M[++ye]);++ye<Be;)j=$(j,M[ye],ye,M);return j}function jh(M,$,j,ue){var ye=M==null?0:M.length;for(ue&&ye&&(j=M[--ye]);ye--;)j=$(j,M[ye],ye,M);return j}function co(M,$){for(var j=-1,ue=M==null?0:M.length;++j<ue;)if($(M[j],j,M))return!0;return!1}var Ch=mo("length");function qh(M){return M.split("")}function Yh(M){return M.match(eh)||[]}function pc(M,$,j){var ue;return j(M,function(ye,Be,Sn){if($(ye,Be,Sn))return ue=Be,!1}),ue}function Ei(M,$,j,ue){for(var ye=M.length,Be=j+(ue?1:-1);ue?Be--:++Be<ye;)if($(M[Be],Be,M))return Be;return-1}function La(M,$,j){return $===$?ap(M,$,j):Ei(M,Tc,j)}function $h(M,$,j,ue){for(var ye=j-1,Be=M.length;++ye<Be;)if(ue(M[ye],$))return ye;return-1}function Tc(M){return M!==M}function Rc(M,$){var j=M==null?0:M.length;return j?Eo(M,$)/j:Re}function mo(M){return function($){return $==null?r:$[M]}}function fo(M){return function($){return M==null?r:M[$]}}function yc(M,$,j,ue,ye){return ye(M,function(Be,Sn,We){j=ue?(ue=!1,Be):$(j,Be,Sn,We)}),j}function Wh(M,$){var j=M.length;for(M.sort($);j--;)M[j]=M[j].value;return M}function Eo(M,$){for(var j,ue=-1,ye=M.length;++ue<ye;){var Be=$(M[ue]);Be!==r&&(j=j===r?Be:j+Be)}return j}function vo(M,$){for(var j=-1,ue=Array(M);++j<M;)ue[j]=$(j);return ue}function Jh(M,$){return an($,function(j){return[j,M[j]]})}function Nc(M){return M&&M.slice(0,Sc(M)+1).replace(eo,"")}function Et(M){return function($){return M($)}}function go(M,$){return an($,function(j){return M[j]})}function El(M,$){return M.has($)}function Ac(M,$){for(var j=-1,ue=M.length;++j<ue&&La($,M[j],0)>-1;);return j}function kc(M,$){for(var j=M.length;j--&&La($,M[j],0)>-1;);return j}function zh(M,$){for(var j=M.length,ue=0;j--;)M[j]===$&&++ue;return ue}var Xh=fo(Fh),Zh=fo(Kh);function Qh(M){return"\\"+Gh[M]}function ep(M,$){return M==null?r:M[$]}function Pa(M){return Ih.test(M)}function np(M){return Lh.test(M)}function tp(M){for(var $,j=[];!($=M.next()).done;)j.push($.value);return j}function _o(M){var $=-1,j=Array(M.size);return M.forEach(function(ue,ye){j[++$]=[ye,ue]}),j}function bc(M,$){return function(j){return M($(j))}}function Br(M,$){for(var j=-1,ue=M.length,ye=0,Be=[];++j<ue;){var Sn=M[j];(Sn===$||Sn===f)&&(M[j]=f,Be[ye++]=j)}return Be}function vi(M){var $=-1,j=Array(M.size);return M.forEach(function(ue){j[++$]=ue}),j}function rp(M){var $=-1,j=Array(M.size);return M.forEach(function(ue){j[++$]=[ue,ue]}),j}function ap(M,$,j){for(var ue=j-1,ye=M.length;++ue<ye;)if(M[ue]===$)return ue;return-1}function lp(M,$,j){for(var ue=j+1;ue--;)if(M[ue]===$)return ue;return ue}function wa(M){return Pa(M)?sp(M):Ch(M)}function Vt(M){return Pa(M)?op(M):qh(M)}function Sc(M){for(var $=M.length;$--&&z_.test(M.charAt($)););return $}var ip=fo(Mh);function sp(M){for(var $=lo.lastIndex=0;lo.test(M);)++$;return $}function op(M){return M.match(lo)||[]}function up(M){return M.match(Dh)||[]}var dp=(function M($){$=$==null?Kn:Fa.defaults(Kn.Object(),$,Fa.pick(Kn,Ph));var j=$.Array,ue=$.Date,ye=$.Error,Be=$.Function,Sn=$.Math,We=$.Object,ho=$.RegExp,cp=$.String,bt=$.TypeError,gi=j.prototype,mp=Be.prototype,Ka=We.prototype,_i=$["__core-js_shared__"],hi=mp.toString,je=Ka.hasOwnProperty,fp=0,Oc=(function(){var a=/[^.]+$/.exec(_i&&_i.keys&&_i.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""})(),pi=Ka.toString,Ep=hi.call(We),vp=Kn._,gp=ho("^"+hi.call(je).replace(na,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ti=cc?$.Buffer:r,xr=$.Symbol,Ri=$.Uint8Array,Dc=Ti?Ti.allocUnsafe:r,yi=bc(We.getPrototypeOf,We),Ic=We.create,Lc=Ka.propertyIsEnumerable,Ni=gi.splice,Pc=xr?xr.isConcatSpreadable:r,vl=xr?xr.iterator:r,ra=xr?xr.toStringTag:r,Ai=(function(){try{var a=oa(We,"defineProperty");return a({},"",{}),a}catch{}})(),_p=$.clearTimeout!==Kn.clearTimeout&&$.clearTimeout,hp=ue&&ue.now!==Kn.Date.now&&ue.now,pp=$.setTimeout!==Kn.setTimeout&&$.setTimeout,ki=Sn.ceil,bi=Sn.floor,po=We.getOwnPropertySymbols,Tp=Ti?Ti.isBuffer:r,wc=$.isFinite,Rp=gi.join,yp=bc(We.keys,We),On=Sn.max,Bn=Sn.min,Np=ue.now,Ap=$.parseInt,Fc=Sn.random,kp=gi.reverse,To=oa($,"DataView"),gl=oa($,"Map"),Ro=oa($,"Promise"),Ma=oa($,"Set"),_l=oa($,"WeakMap"),hl=oa(We,"create"),Si=_l&&new _l,Ga={},bp=ua(To),Sp=ua(gl),Op=ua(Ro),Dp=ua(Ma),Ip=ua(_l),Oi=xr?xr.prototype:r,pl=Oi?Oi.valueOf:r,Kc=Oi?Oi.toString:r;function R(a){if(cn(a)&&!Ne(a)&&!(a instanceof Le)){if(a instanceof St)return a;if(je.call(a,"__wrapped__"))return Mm(a)}return new St(a)}var Va=(function(){function a(){}return function(i){if(!ln(i))return{};if(Ic)return Ic(i);a.prototype=i;var o=new a;return a.prototype=r,o}})();function Di(){}function St(a,i){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}R.templateSettings={escape:Nt,evaluate:Ve,interpolate:ui,variable:"",imports:{_:R}},R.prototype=Di.prototype,R.prototype.constructor=R,St.prototype=Va(Di.prototype),St.prototype.constructor=St;function Le(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ge,this.__views__=[]}function Lp(){var a=new Le(this.__wrapped__);return a.__actions__=tt(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=tt(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=tt(this.__views__),a}function Pp(){if(this.__filtered__){var a=new Le(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function wp(){var a=this.__wrapped__.value(),i=this.__dir__,o=Ne(a),c=i<0,h=o?a.length:0,A=qT(0,h,this.__views__),I=A.start,w=A.end,B=w-I,J=c?w:I-1,z=this.__iteratees__,Z=z.length,le=0,ce=Bn(B,this.__takeCount__);if(!o||!c&&h==B&&ce==B)return lm(a,this.__actions__);var he=[];e:for(;B--&&le<ce;){J+=i;for(var be=-1,pe=a[J];++be<Z;){var De=z[be],we=De.iteratee,_t=De.type,$n=we(pe);if(_t==ne)pe=$n;else if(!$n){if(_t==X)continue e;break e}}he[le++]=pe}return he}Le.prototype=Va(Di.prototype),Le.prototype.constructor=Le;function aa(a){var i=-1,o=a==null?0:a.length;for(this.clear();++i<o;){var c=a[i];this.set(c[0],c[1])}}function Fp(){this.__data__=hl?hl(null):{},this.size=0}function Kp(a){var i=this.has(a)&&delete this.__data__[a];return this.size-=i?1:0,i}function Mp(a){var i=this.__data__;if(hl){var o=i[a];return o===m?r:o}return je.call(i,a)?i[a]:r}function Gp(a){var i=this.__data__;return hl?i[a]!==r:je.call(i,a)}function Vp(a,i){var o=this.__data__;return this.size+=this.has(a)?0:1,o[a]=hl&&i===r?m:i,this}aa.prototype.clear=Fp,aa.prototype.delete=Kp,aa.prototype.get=Mp,aa.prototype.has=Gp,aa.prototype.set=Vp;function Tr(a){var i=-1,o=a==null?0:a.length;for(this.clear();++i<o;){var c=a[i];this.set(c[0],c[1])}}function Bp(){this.__data__=[],this.size=0}function xp(a){var i=this.__data__,o=Ii(i,a);if(o<0)return!1;var c=i.length-1;return o==c?i.pop():Ni.call(i,o,1),--this.size,!0}function Up(a){var i=this.__data__,o=Ii(i,a);return o<0?r:i[o][1]}function Hp(a){return Ii(this.__data__,a)>-1}function jp(a,i){var o=this.__data__,c=Ii(o,a);return c<0?(++this.size,o.push([a,i])):o[c][1]=i,this}Tr.prototype.clear=Bp,Tr.prototype.delete=xp,Tr.prototype.get=Up,Tr.prototype.has=Hp,Tr.prototype.set=jp;function Rr(a){var i=-1,o=a==null?0:a.length;for(this.clear();++i<o;){var c=a[i];this.set(c[0],c[1])}}function Cp(){this.size=0,this.__data__={hash:new aa,map:new(gl||Tr),string:new aa}}function qp(a){var i=Hi(this,a).delete(a);return this.size-=i?1:0,i}function Yp(a){return Hi(this,a).get(a)}function $p(a){return Hi(this,a).has(a)}function Wp(a,i){var o=Hi(this,a),c=o.size;return o.set(a,i),this.size+=o.size==c?0:1,this}Rr.prototype.clear=Cp,Rr.prototype.delete=qp,Rr.prototype.get=Yp,Rr.prototype.has=$p,Rr.prototype.set=Wp;function la(a){var i=-1,o=a==null?0:a.length;for(this.__data__=new Rr;++i<o;)this.add(a[i])}function Jp(a){return this.__data__.set(a,m),this}function zp(a){return this.__data__.has(a)}la.prototype.add=la.prototype.push=Jp,la.prototype.has=zp;function Bt(a){var i=this.__data__=new Tr(a);this.size=i.size}function Xp(){this.__data__=new Tr,this.size=0}function Zp(a){var i=this.__data__,o=i.delete(a);return this.size=i.size,o}function Qp(a){return this.__data__.get(a)}function eT(a){return this.__data__.has(a)}function nT(a,i){var o=this.__data__;if(o instanceof Tr){var c=o.__data__;if(!gl||c.length<l-1)return c.push([a,i]),this.size=++o.size,this;o=this.__data__=new Rr(c)}return o.set(a,i),this.size=o.size,this}Bt.prototype.clear=Xp,Bt.prototype.delete=Zp,Bt.prototype.get=Qp,Bt.prototype.has=eT,Bt.prototype.set=nT;function Mc(a,i){var o=Ne(a),c=!o&&da(a),h=!o&&!c&&qr(a),A=!o&&!c&&!h&&Ha(a),I=o||c||h||A,w=I?vo(a.length,cp):[],B=w.length;for(var J in a)(i||je.call(a,J))&&!(I&&(J=="length"||h&&(J=="offset"||J=="parent")||A&&(J=="buffer"||J=="byteLength"||J=="byteOffset")||kr(J,B)))&&w.push(J);return w}function Gc(a){var i=a.length;return i?a[Po(0,i-1)]:r}function tT(a,i){return ji(tt(a),ia(i,0,a.length))}function rT(a){return ji(tt(a))}function yo(a,i,o){(o!==r&&!xt(a[i],o)||o===r&&!(i in a))&&yr(a,i,o)}function Tl(a,i,o){var c=a[i];(!(je.call(a,i)&&xt(c,o))||o===r&&!(i in a))&&yr(a,i,o)}function Ii(a,i){for(var o=a.length;o--;)if(xt(a[o][0],i))return o;return-1}function aT(a,i,o,c){return Ur(a,function(h,A,I){i(c,h,o(h),I)}),c}function Vc(a,i){return a&&nr(i,wn(i),a)}function lT(a,i){return a&&nr(i,at(i),a)}function yr(a,i,o){i=="__proto__"&&Ai?Ai(a,i,{configurable:!0,enumerable:!0,value:o,writable:!0}):a[i]=o}function No(a,i){for(var o=-1,c=i.length,h=j(c),A=a==null;++o<c;)h[o]=A?r:ru(a,i[o]);return h}function ia(a,i,o){return a===a&&(o!==r&&(a=a<=o?a:o),i!==r&&(a=a>=i?a:i)),a}function Ot(a,i,o,c,h,A){var I,w=i&v,B=i&_,J=i&T;if(o&&(I=h?o(a,c,h,A):o(a)),I!==r)return I;if(!ln(a))return a;var z=Ne(a);if(z){if(I=$T(a),!w)return tt(a,I)}else{var Z=xn(a),le=Z==Fn||Z==Zn;if(qr(a))return om(a,w);if(Z==vn||Z==_e||le&&!h){if(I=B||le?{}:Sm(a),!w)return B?MT(a,lT(I,a)):KT(a,Vc(I,a))}else{if(!Xe[Z])return h?a:{};I=WT(a,Z,w)}}A||(A=new Bt);var ce=A.get(a);if(ce)return ce;A.set(a,I),tf(a)?a.forEach(function(pe){I.add(Ot(pe,i,o,pe,a,A))}):ef(a)&&a.forEach(function(pe,De){I.set(De,Ot(pe,i,o,De,a,A))});var he=J?B?jo:Ho:B?at:wn,be=z?r:he(a);return kt(be||a,function(pe,De){be&&(De=pe,pe=a[De]),Tl(I,De,Ot(pe,i,o,De,a,A))}),I}function iT(a){var i=wn(a);return function(o){return Bc(o,a,i)}}function Bc(a,i,o){var c=o.length;if(a==null)return!c;for(a=We(a);c--;){var h=o[c],A=i[h],I=a[h];if(I===r&&!(h in a)||!A(I))return!1}return!0}function xc(a,i,o){if(typeof a!="function")throw new bt(u);return Sl(function(){a.apply(r,o)},i)}function Rl(a,i,o,c){var h=-1,A=fi,I=!0,w=a.length,B=[],J=i.length;if(!w)return B;o&&(i=an(i,Et(o))),c?(A=oo,I=!1):i.length>=l&&(A=El,I=!1,i=new la(i));e:for(;++h<w;){var z=a[h],Z=o==null?z:o(z);if(z=c||z!==0?z:0,I&&Z===Z){for(var le=J;le--;)if(i[le]===Z)continue e;B.push(z)}else A(i,Z,c)||B.push(z)}return B}var Ur=fm(er),Uc=fm(ko,!0);function sT(a,i){var o=!0;return Ur(a,function(c,h,A){return o=!!i(c,h,A),o}),o}function Li(a,i,o){for(var c=-1,h=a.length;++c<h;){var A=a[c],I=i(A);if(I!=null&&(w===r?I===I&&!gt(I):o(I,w)))var w=I,B=A}return B}function oT(a,i,o,c){var h=a.length;for(o=ke(o),o<0&&(o=-o>h?0:h+o),c=c===r||c>h?h:ke(c),c<0&&(c+=h),c=o>c?0:af(c);o<c;)a[o++]=i;return a}function Hc(a,i){var o=[];return Ur(a,function(c,h,A){i(c,h,A)&&o.push(c)}),o}function Mn(a,i,o,c,h){var A=-1,I=a.length;for(o||(o=zT),h||(h=[]);++A<I;){var w=a[A];i>0&&o(w)?i>1?Mn(w,i-1,o,c,h):Vr(h,w):c||(h[h.length]=w)}return h}var Ao=Em(),jc=Em(!0);function er(a,i){return a&&Ao(a,i,wn)}function ko(a,i){return a&&jc(a,i,wn)}function Pi(a,i){return Gr(i,function(o){return br(a[o])})}function sa(a,i){i=jr(i,a);for(var o=0,c=i.length;a!=null&&o<c;)a=a[tr(i[o++])];return o&&o==c?a:r}function Cc(a,i,o){var c=i(a);return Ne(a)?c:Vr(c,o(a))}function qn(a){return a==null?a===r?re:ct:ra&&ra in We(a)?CT(a):r0(a)}function bo(a,i){return a>i}function uT(a,i){return a!=null&&je.call(a,i)}function dT(a,i){return a!=null&&i in We(a)}function cT(a,i,o){return a>=Bn(i,o)&&a<On(i,o)}function So(a,i,o){for(var c=o?oo:fi,h=a[0].length,A=a.length,I=A,w=j(A),B=1/0,J=[];I--;){var z=a[I];I&&i&&(z=an(z,Et(i))),B=Bn(z.length,B),w[I]=!o&&(i||h>=120&&z.length>=120)?new la(I&&z):r}z=a[0];var Z=-1,le=w[0];e:for(;++Z<h&&J.length<B;){var ce=z[Z],he=i?i(ce):ce;if(ce=o||ce!==0?ce:0,!(le?El(le,he):c(J,he,o))){for(I=A;--I;){var be=w[I];if(!(be?El(be,he):c(a[I],he,o)))continue e}le&&le.push(he),J.push(ce)}}return J}function mT(a,i,o,c){return er(a,function(h,A,I){i(c,o(h),A,I)}),c}function yl(a,i,o){i=jr(i,a),a=Lm(a,i);var c=a==null?a:a[tr(It(i))];return c==null?r:ft(c,a,o)}function qc(a){return cn(a)&&qn(a)==_e}function fT(a){return cn(a)&&qn(a)==Oe}function ET(a){return cn(a)&&qn(a)==Nn}function Nl(a,i,o,c,h){return a===i?!0:a==null||i==null||!cn(a)&&!cn(i)?a!==a&&i!==i:vT(a,i,o,c,Nl,h)}function vT(a,i,o,c,h,A){var I=Ne(a),w=Ne(i),B=I?Te:xn(a),J=w?Te:xn(i);B=B==_e?vn:B,J=J==_e?vn:J;var z=B==vn,Z=J==vn,le=B==J;if(le&&qr(a)){if(!qr(i))return!1;I=!0,z=!1}if(le&&!z)return A||(A=new Bt),I||Ha(a)?Am(a,i,o,c,h,A):HT(a,i,B,o,c,h,A);if(!(o&k)){var ce=z&&je.call(a,"__wrapped__"),he=Z&&je.call(i,"__wrapped__");if(ce||he){var be=ce?a.value():a,pe=he?i.value():i;return A||(A=new Bt),h(be,pe,o,c,A)}}return le?(A||(A=new Bt),jT(a,i,o,c,h,A)):!1}function gT(a){return cn(a)&&xn(a)==$e}function Oo(a,i,o,c){var h=o.length,A=h,I=!c;if(a==null)return!A;for(a=We(a);h--;){var w=o[h];if(I&&w[2]?w[1]!==a[w[0]]:!(w[0]in a))return!1}for(;++h<A;){w=o[h];var B=w[0],J=a[B],z=w[1];if(I&&w[2]){if(J===r&&!(B in a))return!1}else{var Z=new Bt;if(c)var le=c(J,z,B,a,i,Z);if(!(le===r?Nl(z,J,k|O,c,Z):le))return!1}}return!0}function Yc(a){if(!ln(a)||ZT(a))return!1;var i=br(a)?gp:ih;return i.test(ua(a))}function _T(a){return cn(a)&&qn(a)==P}function hT(a){return cn(a)&&xn(a)==U}function pT(a){return cn(a)&&Ji(a.length)&&!!tn[qn(a)]}function $c(a){return typeof a=="function"?a:a==null?lt:typeof a=="object"?Ne(a)?zc(a[0],a[1]):Jc(a):gf(a)}function Do(a){if(!bl(a))return yp(a);var i=[];for(var o in We(a))je.call(a,o)&&o!="constructor"&&i.push(o);return i}function TT(a){if(!ln(a))return t0(a);var i=bl(a),o=[];for(var c in a)c=="constructor"&&(i||!je.call(a,c))||o.push(c);return o}function Io(a,i){return a<i}function Wc(a,i){var o=-1,c=rt(a)?j(a.length):[];return Ur(a,function(h,A,I){c[++o]=i(h,A,I)}),c}function Jc(a){var i=qo(a);return i.length==1&&i[0][2]?Dm(i[0][0],i[0][1]):function(o){return o===a||Oo(o,a,i)}}function zc(a,i){return $o(a)&&Om(i)?Dm(tr(a),i):function(o){var c=ru(o,a);return c===r&&c===i?au(o,a):Nl(i,c,k|O)}}function wi(a,i,o,c,h){a!==i&&Ao(i,function(A,I){if(h||(h=new Bt),ln(A))RT(a,i,I,o,wi,c,h);else{var w=c?c(Jo(a,I),A,I+"",a,i,h):r;w===r&&(w=A),yo(a,I,w)}},at)}function RT(a,i,o,c,h,A,I){var w=Jo(a,o),B=Jo(i,o),J=I.get(B);if(J){yo(a,o,J);return}var z=A?A(w,B,o+"",a,i,I):r,Z=z===r;if(Z){var le=Ne(B),ce=!le&&qr(B),he=!le&&!ce&&Ha(B);z=B,le||ce||he?Ne(w)?z=w:gn(w)?z=tt(w):ce?(Z=!1,z=om(B,!0)):he?(Z=!1,z=um(B,!0)):z=[]:Ol(B)||da(B)?(z=w,da(w)?z=lf(w):(!ln(w)||br(w))&&(z=Sm(B))):Z=!1}Z&&(I.set(B,z),h(z,B,c,A,I),I.delete(B)),yo(a,o,z)}function Xc(a,i){var o=a.length;if(o)return i+=i<0?o:0,kr(i,o)?a[i]:r}function Zc(a,i,o){i.length?i=an(i,function(A){return Ne(A)?function(I){return sa(I,A.length===1?A[0]:A)}:A}):i=[lt];var c=-1;i=an(i,Et(ve()));var h=Wc(a,function(A,I,w){var B=an(i,function(J){return J(A)});return{criteria:B,index:++c,value:A}});return Wh(h,function(A,I){return FT(A,I,o)})}function yT(a,i){return Qc(a,i,function(o,c){return au(a,c)})}function Qc(a,i,o){for(var c=-1,h=i.length,A={};++c<h;){var I=i[c],w=sa(a,I);o(w,I)&&Al(A,jr(I,a),w)}return A}function NT(a){return function(i){return sa(i,a)}}function Lo(a,i,o,c){var h=c?$h:La,A=-1,I=i.length,w=a;for(a===i&&(i=tt(i)),o&&(w=an(a,Et(o)));++A<I;)for(var B=0,J=i[A],z=o?o(J):J;(B=h(w,z,B,c))>-1;)w!==a&&Ni.call(w,B,1),Ni.call(a,B,1);return a}function em(a,i){for(var o=a?i.length:0,c=o-1;o--;){var h=i[o];if(o==c||h!==A){var A=h;kr(h)?Ni.call(a,h,1):Ko(a,h)}}return a}function Po(a,i){return a+bi(Fc()*(i-a+1))}function AT(a,i,o,c){for(var h=-1,A=On(ki((i-a)/(o||1)),0),I=j(A);A--;)I[c?A:++h]=a,a+=o;return I}function wo(a,i){var o="";if(!a||i<1||i>Q)return o;do i%2&&(o+=a),i=bi(i/2),i&&(a+=a);while(i);return o}function Se(a,i){return zo(Im(a,i,lt),a+"")}function kT(a){return Gc(ja(a))}function bT(a,i){var o=ja(a);return ji(o,ia(i,0,o.length))}function Al(a,i,o,c){if(!ln(a))return a;i=jr(i,a);for(var h=-1,A=i.length,I=A-1,w=a;w!=null&&++h<A;){var B=tr(i[h]),J=o;if(B==="__proto__"||B==="constructor"||B==="prototype")return a;if(h!=I){var z=w[B];J=c?c(z,B,w):r,J===r&&(J=ln(z)?z:kr(i[h+1])?[]:{})}Tl(w,B,J),w=w[B]}return a}var nm=Si?function(a,i){return Si.set(a,i),a}:lt,ST=Ai?function(a,i){return Ai(a,"toString",{configurable:!0,enumerable:!1,value:iu(i),writable:!0})}:lt;function OT(a){return ji(ja(a))}function Dt(a,i,o){var c=-1,h=a.length;i<0&&(i=-i>h?0:h+i),o=o>h?h:o,o<0&&(o+=h),h=i>o?0:o-i>>>0,i>>>=0;for(var A=j(h);++c<h;)A[c]=a[c+i];return A}function DT(a,i){var o;return Ur(a,function(c,h,A){return o=i(c,h,A),!o}),!!o}function Fi(a,i,o){var c=0,h=a==null?c:a.length;if(typeof i=="number"&&i===i&&h<=dn){for(;c<h;){var A=c+h>>>1,I=a[A];I!==null&&!gt(I)&&(o?I<=i:I<i)?c=A+1:h=A}return h}return Fo(a,i,lt,o)}function Fo(a,i,o,c){var h=0,A=a==null?0:a.length;if(A===0)return 0;i=o(i);for(var I=i!==i,w=i===null,B=gt(i),J=i===r;h<A;){var z=bi((h+A)/2),Z=o(a[z]),le=Z!==r,ce=Z===null,he=Z===Z,be=gt(Z);if(I)var pe=c||he;else J?pe=he&&(c||le):w?pe=he&&le&&(c||!ce):B?pe=he&&le&&!ce&&(c||!be):ce||be?pe=!1:pe=c?Z<=i:Z<i;pe?h=z+1:A=z}return Bn(A,Qe)}function tm(a,i){for(var o=-1,c=a.length,h=0,A=[];++o<c;){var I=a[o],w=i?i(I):I;if(!o||!xt(w,B)){var B=w;A[h++]=I===0?0:I}}return A}function rm(a){return typeof a=="number"?a:gt(a)?Re:+a}function vt(a){if(typeof a=="string")return a;if(Ne(a))return an(a,vt)+"";if(gt(a))return Kc?Kc.call(a):"";var i=a+"";return i=="0"&&1/a==-se?"-0":i}function Hr(a,i,o){var c=-1,h=fi,A=a.length,I=!0,w=[],B=w;if(o)I=!1,h=oo;else if(A>=l){var J=i?null:xT(a);if(J)return vi(J);I=!1,h=El,B=new la}else B=i?[]:w;e:for(;++c<A;){var z=a[c],Z=i?i(z):z;if(z=o||z!==0?z:0,I&&Z===Z){for(var le=B.length;le--;)if(B[le]===Z)continue e;i&&B.push(Z),w.push(z)}else h(B,Z,o)||(B!==w&&B.push(Z),w.push(z))}return w}function Ko(a,i){return i=jr(i,a),a=Lm(a,i),a==null||delete a[tr(It(i))]}function am(a,i,o,c){return Al(a,i,o(sa(a,i)),c)}function Ki(a,i,o,c){for(var h=a.length,A=c?h:-1;(c?A--:++A<h)&&i(a[A],A,a););return o?Dt(a,c?0:A,c?A+1:h):Dt(a,c?A+1:0,c?h:A)}function lm(a,i){var o=a;return o instanceof Le&&(o=o.value()),uo(i,function(c,h){return h.func.apply(h.thisArg,Vr([c],h.args))},o)}function Mo(a,i,o){var c=a.length;if(c<2)return c?Hr(a[0]):[];for(var h=-1,A=j(c);++h<c;)for(var I=a[h],w=-1;++w<c;)w!=h&&(A[h]=Rl(A[h]||I,a[w],i,o));return Hr(Mn(A,1),i,o)}function im(a,i,o){for(var c=-1,h=a.length,A=i.length,I={};++c<h;){var w=c<A?i[c]:r;o(I,a[c],w)}return I}function Go(a){return gn(a)?a:[]}function Vo(a){return typeof a=="function"?a:lt}function jr(a,i){return Ne(a)?a:$o(a,i)?[a]:Km(Ue(a))}var IT=Se;function Cr(a,i,o){var c=a.length;return o=o===r?c:o,!i&&o>=c?a:Dt(a,i,o)}var sm=_p||function(a){return Kn.clearTimeout(a)};function om(a,i){if(i)return a.slice();var o=a.length,c=Dc?Dc(o):new a.constructor(o);return a.copy(c),c}function Bo(a){var i=new a.constructor(a.byteLength);return new Ri(i).set(new Ri(a)),i}function LT(a,i){var o=i?Bo(a.buffer):a.buffer;return new a.constructor(o,a.byteOffset,a.byteLength)}function PT(a){var i=new a.constructor(a.source,qd.exec(a));return i.lastIndex=a.lastIndex,i}function wT(a){return pl?We(pl.call(a)):{}}function um(a,i){var o=i?Bo(a.buffer):a.buffer;return new a.constructor(o,a.byteOffset,a.length)}function dm(a,i){if(a!==i){var o=a!==r,c=a===null,h=a===a,A=gt(a),I=i!==r,w=i===null,B=i===i,J=gt(i);if(!w&&!J&&!A&&a>i||A&&I&&B&&!w&&!J||c&&I&&B||!o&&B||!h)return 1;if(!c&&!A&&!J&&a<i||J&&o&&h&&!c&&!A||w&&o&&h||!I&&h||!B)return-1}return 0}function FT(a,i,o){for(var c=-1,h=a.criteria,A=i.criteria,I=h.length,w=o.length;++c<I;){var B=dm(h[c],A[c]);if(B){if(c>=w)return B;var J=o[c];return B*(J=="desc"?-1:1)}}return a.index-i.index}function cm(a,i,o,c){for(var h=-1,A=a.length,I=o.length,w=-1,B=i.length,J=On(A-I,0),z=j(B+J),Z=!c;++w<B;)z[w]=i[w];for(;++h<I;)(Z||h<A)&&(z[o[h]]=a[h]);for(;J--;)z[w++]=a[h++];return z}function mm(a,i,o,c){for(var h=-1,A=a.length,I=-1,w=o.length,B=-1,J=i.length,z=On(A-w,0),Z=j(z+J),le=!c;++h<z;)Z[h]=a[h];for(var ce=h;++B<J;)Z[ce+B]=i[B];for(;++I<w;)(le||h<A)&&(Z[ce+o[I]]=a[h++]);return Z}function tt(a,i){var o=-1,c=a.length;for(i||(i=j(c));++o<c;)i[o]=a[o];return i}function nr(a,i,o,c){var h=!o;o||(o={});for(var A=-1,I=i.length;++A<I;){var w=i[A],B=c?c(o[w],a[w],w,o,a):r;B===r&&(B=a[w]),h?yr(o,w,B):Tl(o,w,B)}return o}function KT(a,i){return nr(a,Yo(a),i)}function MT(a,i){return nr(a,km(a),i)}function Mi(a,i){return function(o,c){var h=Ne(o)?Uh:aT,A=i?i():{};return h(o,a,ve(c,2),A)}}function Ba(a){return Se(function(i,o){var c=-1,h=o.length,A=h>1?o[h-1]:r,I=h>2?o[2]:r;for(A=a.length>3&&typeof A=="function"?(h--,A):r,I&&Yn(o[0],o[1],I)&&(A=h<3?r:A,h=1),i=We(i);++c<h;){var w=o[c];w&&a(i,w,c,A)}return i})}function fm(a,i){return function(o,c){if(o==null)return o;if(!rt(o))return a(o,c);for(var h=o.length,A=i?h:-1,I=We(o);(i?A--:++A<h)&&c(I[A],A,I)!==!1;);return o}}function Em(a){return function(i,o,c){for(var h=-1,A=We(i),I=c(i),w=I.length;w--;){var B=I[a?w:++h];if(o(A[B],B,A)===!1)break}return i}}function GT(a,i,o){var c=i&p,h=kl(a);function A(){var I=this&&this!==Kn&&this instanceof A?h:a;return I.apply(c?o:this,arguments)}return A}function vm(a){return function(i){i=Ue(i);var o=Pa(i)?Vt(i):r,c=o?o[0]:i.charAt(0),h=o?Cr(o,1).join(""):i.slice(1);return c[a]()+h}}function xa(a){return function(i){return uo(Ef(ff(i).replace(Sh,"")),a,"")}}function kl(a){return function(){var i=arguments;switch(i.length){case 0:return new a;case 1:return new a(i[0]);case 2:return new a(i[0],i[1]);case 3:return new a(i[0],i[1],i[2]);case 4:return new a(i[0],i[1],i[2],i[3]);case 5:return new a(i[0],i[1],i[2],i[3],i[4]);case 6:return new a(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new a(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var o=Va(a.prototype),c=a.apply(o,i);return ln(c)?c:o}}function VT(a,i,o){var c=kl(a);function h(){for(var A=arguments.length,I=j(A),w=A,B=Ua(h);w--;)I[w]=arguments[w];var J=A<3&&I[0]!==B&&I[A-1]!==B?[]:Br(I,B);if(A-=J.length,A<o)return Tm(a,i,Gi,h.placeholder,r,I,J,r,r,o-A);var z=this&&this!==Kn&&this instanceof h?c:a;return ft(z,this,I)}return h}function gm(a){return function(i,o,c){var h=We(i);if(!rt(i)){var A=ve(o,3);i=wn(i),o=function(w){return A(h[w],w,h)}}var I=a(i,o,c);return I>-1?h[A?i[I]:I]:r}}function _m(a){return Ar(function(i){var o=i.length,c=o,h=St.prototype.thru;for(a&&i.reverse();c--;){var A=i[c];if(typeof A!="function")throw new bt(u);if(h&&!I&&Ui(A)=="wrapper")var I=new St([],!0)}for(c=I?c:o;++c<o;){A=i[c];var w=Ui(A),B=w=="wrapper"?Co(A):r;B&&Wo(B[0])&&B[1]==(F|N|y|G)&&!B[4].length&&B[9]==1?I=I[Ui(B[0])].apply(I,B[3]):I=A.length==1&&Wo(A)?I[w]():I.thru(A)}return function(){var J=arguments,z=J[0];if(I&&J.length==1&&Ne(z))return I.plant(z).value();for(var Z=0,le=o?i[Z].apply(this,J):z;++Z<o;)le=i[Z].call(this,le);return le}})}function Gi(a,i,o,c,h,A,I,w,B,J){var z=i&F,Z=i&p,le=i&b,ce=i&(N|L),he=i&H,be=le?r:kl(a);function pe(){for(var De=arguments.length,we=j(De),_t=De;_t--;)we[_t]=arguments[_t];if(ce)var $n=Ua(pe),ht=zh(we,$n);if(c&&(we=cm(we,c,h,ce)),A&&(we=mm(we,A,I,ce)),De-=ht,ce&&De<J){var _n=Br(we,$n);return Tm(a,i,Gi,pe.placeholder,o,we,_n,w,B,J-De)}var Ut=Z?o:this,Or=le?Ut[a]:a;return De=we.length,w?we=a0(we,w):he&&De>1&&we.reverse(),z&&B<De&&(we.length=B),this&&this!==Kn&&this instanceof pe&&(Or=be||kl(Or)),Or.apply(Ut,we)}return pe}function hm(a,i){return function(o,c){return mT(o,a,i(c),{})}}function Vi(a,i){return function(o,c){var h;if(o===r&&c===r)return i;if(o!==r&&(h=o),c!==r){if(h===r)return c;typeof o=="string"||typeof c=="string"?(o=vt(o),c=vt(c)):(o=rm(o),c=rm(c)),h=a(o,c)}return h}}function xo(a){return Ar(function(i){return i=an(i,Et(ve())),Se(function(o){var c=this;return a(i,function(h){return ft(h,c,o)})})})}function Bi(a,i){i=i===r?" ":vt(i);var o=i.length;if(o<2)return o?wo(i,a):i;var c=wo(i,ki(a/wa(i)));return Pa(i)?Cr(Vt(c),0,a).join(""):c.slice(0,a)}function BT(a,i,o,c){var h=i&p,A=kl(a);function I(){for(var w=-1,B=arguments.length,J=-1,z=c.length,Z=j(z+B),le=this&&this!==Kn&&this instanceof I?A:a;++J<z;)Z[J]=c[J];for(;B--;)Z[J++]=arguments[++w];return ft(le,h?o:this,Z)}return I}function pm(a){return function(i,o,c){return c&&typeof c!="number"&&Yn(i,o,c)&&(o=c=r),i=Sr(i),o===r?(o=i,i=0):o=Sr(o),c=c===r?i<o?1:-1:Sr(c),AT(i,o,c,a)}}function xi(a){return function(i,o){return typeof i=="string"&&typeof o=="string"||(i=Lt(i),o=Lt(o)),a(i,o)}}function Tm(a,i,o,c,h,A,I,w,B,J){var z=i&N,Z=z?I:r,le=z?r:I,ce=z?A:r,he=z?r:A;i|=z?y:K,i&=~(z?K:y),i&S||(i&=-4);var be=[a,i,h,ce,Z,he,le,w,B,J],pe=o.apply(r,be);return Wo(a)&&Pm(pe,be),pe.placeholder=c,wm(pe,a,i)}function Uo(a){var i=Sn[a];return function(o,c){if(o=Lt(o),c=c==null?0:Bn(ke(c),292),c&&wc(o)){var h=(Ue(o)+"e").split("e"),A=i(h[0]+"e"+(+h[1]+c));return h=(Ue(A)+"e").split("e"),+(h[0]+"e"+(+h[1]-c))}return i(o)}}var xT=Ma&&1/vi(new Ma([,-0]))[1]==se?function(a){return new Ma(a)}:uu;function Rm(a){return function(i){var o=xn(i);return o==$e?_o(i):o==U?rp(i):Jh(i,a(i))}}function Nr(a,i,o,c,h,A,I,w){var B=i&b;if(!B&&typeof a!="function")throw new bt(u);var J=c?c.length:0;if(J||(i&=-97,c=h=r),I=I===r?I:On(ke(I),0),w=w===r?w:ke(w),J-=h?h.length:0,i&K){var z=c,Z=h;c=h=r}var le=B?r:Co(a),ce=[a,i,o,c,h,z,Z,A,I,w];if(le&&n0(ce,le),a=ce[0],i=ce[1],o=ce[2],c=ce[3],h=ce[4],w=ce[9]=ce[9]===r?B?0:a.length:On(ce[9]-J,0),!w&&i&(N|L)&&(i&=-25),!i||i==p)var he=GT(a,i,o);else i==N||i==L?he=VT(a,i,w):(i==y||i==(p|y))&&!h.length?he=BT(a,i,o,c):he=Gi.apply(r,ce);var be=le?nm:Pm;return wm(be(he,ce),a,i)}function ym(a,i,o,c){return a===r||xt(a,Ka[o])&&!je.call(c,o)?i:a}function Nm(a,i,o,c,h,A){return ln(a)&&ln(i)&&(A.set(i,a),wi(a,i,r,Nm,A),A.delete(i)),a}function UT(a){return Ol(a)?r:a}function Am(a,i,o,c,h,A){var I=o&k,w=a.length,B=i.length;if(w!=B&&!(I&&B>w))return!1;var J=A.get(a),z=A.get(i);if(J&&z)return J==i&&z==a;var Z=-1,le=!0,ce=o&O?new la:r;for(A.set(a,i),A.set(i,a);++Z<w;){var he=a[Z],be=i[Z];if(c)var pe=I?c(be,he,Z,i,a,A):c(he,be,Z,a,i,A);if(pe!==r){if(pe)continue;le=!1;break}if(ce){if(!co(i,function(De,we){if(!El(ce,we)&&(he===De||h(he,De,o,c,A)))return ce.push(we)})){le=!1;break}}else if(!(he===be||h(he,be,o,c,A))){le=!1;break}}return A.delete(a),A.delete(i),le}function HT(a,i,o,c,h,A,I){switch(o){case Pe:if(a.byteLength!=i.byteLength||a.byteOffset!=i.byteOffset)return!1;a=a.buffer,i=i.buffer;case Oe:return!(a.byteLength!=i.byteLength||!A(new Ri(a),new Ri(i)));case nn:case Nn:case An:return xt(+a,+i);case Vn:return a.name==i.name&&a.message==i.message;case P:case q:return a==i+"";case $e:var w=_o;case U:var B=c&k;if(w||(w=vi),a.size!=i.size&&!B)return!1;var J=I.get(a);if(J)return J==i;c|=O,I.set(a,i);var z=Am(w(a),w(i),c,h,A,I);return I.delete(a),z;case ae:if(pl)return pl.call(a)==pl.call(i)}return!1}function jT(a,i,o,c,h,A){var I=o&k,w=Ho(a),B=w.length,J=Ho(i),z=J.length;if(B!=z&&!I)return!1;for(var Z=B;Z--;){var le=w[Z];if(!(I?le in i:je.call(i,le)))return!1}var ce=A.get(a),he=A.get(i);if(ce&&he)return ce==i&&he==a;var be=!0;A.set(a,i),A.set(i,a);for(var pe=I;++Z<B;){le=w[Z];var De=a[le],we=i[le];if(c)var _t=I?c(we,De,le,i,a,A):c(De,we,le,a,i,A);if(!(_t===r?De===we||h(De,we,o,c,A):_t)){be=!1;break}pe||(pe=le=="constructor")}if(be&&!pe){var $n=a.constructor,ht=i.constructor;$n!=ht&&"constructor"in a&&"constructor"in i&&!(typeof $n=="function"&&$n instanceof $n&&typeof ht=="function"&&ht instanceof ht)&&(be=!1)}return A.delete(a),A.delete(i),be}function Ar(a){return zo(Im(a,r,Bm),a+"")}function Ho(a){return Cc(a,wn,Yo)}function jo(a){return Cc(a,at,km)}var Co=Si?function(a){return Si.get(a)}:uu;function Ui(a){for(var i=a.name+"",o=Ga[i],c=je.call(Ga,i)?o.length:0;c--;){var h=o[c],A=h.func;if(A==null||A==a)return h.name}return i}function Ua(a){var i=je.call(R,"placeholder")?R:a;return i.placeholder}function ve(){var a=R.iteratee||su;return a=a===su?$c:a,arguments.length?a(arguments[0],arguments[1]):a}function Hi(a,i){var o=a.__data__;return XT(i)?o[typeof i=="string"?"string":"hash"]:o.map}function qo(a){for(var i=wn(a),o=i.length;o--;){var c=i[o],h=a[c];i[o]=[c,h,Om(h)]}return i}function oa(a,i){var o=ep(a,i);return Yc(o)?o:r}function CT(a){var i=je.call(a,ra),o=a[ra];try{a[ra]=r;var c=!0}catch{}var h=pi.call(a);return c&&(i?a[ra]=o:delete a[ra]),h}var Yo=po?function(a){return a==null?[]:(a=We(a),Gr(po(a),function(i){return Lc.call(a,i)}))}:du,km=po?function(a){for(var i=[];a;)Vr(i,Yo(a)),a=yi(a);return i}:du,xn=qn;(To&&xn(new To(new ArrayBuffer(1)))!=Pe||gl&&xn(new gl)!=$e||Ro&&xn(Ro.resolve())!=mt||Ma&&xn(new Ma)!=U||_l&&xn(new _l)!=ee)&&(xn=function(a){var i=qn(a),o=i==vn?a.constructor:r,c=o?ua(o):"";if(c)switch(c){case bp:return Pe;case Sp:return $e;case Op:return mt;case Dp:return U;case Ip:return ee}return i});function qT(a,i,o){for(var c=-1,h=o.length;++c<h;){var A=o[c],I=A.size;switch(A.type){case"drop":a+=I;break;case"dropRight":i-=I;break;case"take":i=Bn(i,a+I);break;case"takeRight":a=On(a,i-I);break}}return{start:a,end:i}}function YT(a){var i=a.match(Z_);return i?i[1].split(Q_):[]}function bm(a,i,o){i=jr(i,a);for(var c=-1,h=i.length,A=!1;++c<h;){var I=tr(i[c]);if(!(A=a!=null&&o(a,I)))break;a=a[I]}return A||++c!=h?A:(h=a==null?0:a.length,!!h&&Ji(h)&&kr(I,h)&&(Ne(a)||da(a)))}function $T(a){var i=a.length,o=new a.constructor(i);return i&&typeof a[0]=="string"&&je.call(a,"index")&&(o.index=a.index,o.input=a.input),o}function Sm(a){return typeof a.constructor=="function"&&!bl(a)?Va(yi(a)):{}}function WT(a,i,o){var c=a.constructor;switch(i){case Oe:return Bo(a);case nn:case Nn:return new c(+a);case Pe:return LT(a,o);case Ln:case Qt:case et:case Zr:case _r:case hr:case Qr:case pr:case ea:return um(a,o);case $e:return new c;case An:case q:return new c(a);case P:return PT(a);case U:return new c;case ae:return wT(a)}}function JT(a,i){var o=i.length;if(!o)return a;var c=o-1;return i[c]=(o>1?"& ":"")+i[c],i=i.join(o>2?", ":" "),a.replace(X_,`{
/* [wrapped with `+i+`] */
`)}function zT(a){return Ne(a)||da(a)||!!(Pc&&a&&a[Pc])}function kr(a,i){var o=typeof a;return i=i??Q,!!i&&(o=="number"||o!="symbol"&&oh.test(a))&&a>-1&&a%1==0&&a<i}function Yn(a,i,o){if(!ln(o))return!1;var c=typeof i;return(c=="number"?rt(o)&&kr(i,o.length):c=="string"&&i in o)?xt(o[i],a):!1}function $o(a,i){if(Ne(a))return!1;var o=typeof a;return o=="number"||o=="symbol"||o=="boolean"||a==null||gt(a)?!0:Qs.test(a)||!Zs.test(a)||i!=null&&a in We(i)}function XT(a){var i=typeof a;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?a!=="__proto__":a===null}function Wo(a){var i=Ui(a),o=R[i];if(typeof o!="function"||!(i in Le.prototype))return!1;if(a===o)return!0;var c=Co(o);return!!c&&a===c[0]}function ZT(a){return!!Oc&&Oc in a}var QT=_i?br:cu;function bl(a){var i=a&&a.constructor,o=typeof i=="function"&&i.prototype||Ka;return a===o}function Om(a){return a===a&&!ln(a)}function Dm(a,i){return function(o){return o==null?!1:o[a]===i&&(i!==r||a in We(o))}}function e0(a){var i=$i(a,function(c){return o.size===E&&o.clear(),c}),o=i.cache;return i}function n0(a,i){var o=a[1],c=i[1],h=o|c,A=h<(p|b|F),I=c==F&&o==N||c==F&&o==G&&a[7].length<=i[8]||c==(F|G)&&i[7].length<=i[8]&&o==N;if(!(A||I))return a;c&p&&(a[2]=i[2],h|=o&p?0:S);var w=i[3];if(w){var B=a[3];a[3]=B?cm(B,w,i[4]):w,a[4]=B?Br(a[3],f):i[4]}return w=i[5],w&&(B=a[5],a[5]=B?mm(B,w,i[6]):w,a[6]=B?Br(a[5],f):i[6]),w=i[7],w&&(a[7]=w),c&F&&(a[8]=a[8]==null?i[8]:Bn(a[8],i[8])),a[9]==null&&(a[9]=i[9]),a[0]=i[0],a[1]=h,a}function t0(a){var i=[];if(a!=null)for(var o in We(a))i.push(o);return i}function r0(a){return pi.call(a)}function Im(a,i,o){return i=On(i===r?a.length-1:i,0),function(){for(var c=arguments,h=-1,A=On(c.length-i,0),I=j(A);++h<A;)I[h]=c[i+h];h=-1;for(var w=j(i+1);++h<i;)w[h]=c[h];return w[i]=o(I),ft(a,this,w)}}function Lm(a,i){return i.length<2?a:sa(a,Dt(i,0,-1))}function a0(a,i){for(var o=a.length,c=Bn(i.length,o),h=tt(a);c--;){var A=i[c];a[c]=kr(A,o)?h[A]:r}return a}function Jo(a,i){if(!(i==="constructor"&&typeof a[i]=="function")&&i!="__proto__")return a[i]}var Pm=Fm(nm),Sl=pp||function(a,i){return Kn.setTimeout(a,i)},zo=Fm(ST);function wm(a,i,o){var c=i+"";return zo(a,JT(c,l0(YT(c),o)))}function Fm(a){var i=0,o=0;return function(){var c=Np(),h=V-(c-o);if(o=c,h>0){if(++i>=x)return arguments[0]}else i=0;return a.apply(r,arguments)}}function ji(a,i){var o=-1,c=a.length,h=c-1;for(i=i===r?c:i;++o<i;){var A=Po(o,h),I=a[A];a[A]=a[o],a[o]=I}return a.length=i,a}var Km=e0(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(fl,function(o,c,h,A){i.push(h?A.replace(th,"$1"):c||o)}),i});function tr(a){if(typeof a=="string"||gt(a))return a;var i=a+"";return i=="0"&&1/a==-se?"-0":i}function ua(a){if(a!=null){try{return hi.call(a)}catch{}try{return a+""}catch{}}return""}function l0(a,i){return kt(ut,function(o){var c="_."+o[0];i&o[1]&&!fi(a,c)&&a.push(c)}),a.sort()}function Mm(a){if(a instanceof Le)return a.clone();var i=new St(a.__wrapped__,a.__chain__);return i.__actions__=tt(a.__actions__),i.__index__=a.__index__,i.__values__=a.__values__,i}function i0(a,i,o){(o?Yn(a,i,o):i===r)?i=1:i=On(ke(i),0);var c=a==null?0:a.length;if(!c||i<1)return[];for(var h=0,A=0,I=j(ki(c/i));h<c;)I[A++]=Dt(a,h,h+=i);return I}function s0(a){for(var i=-1,o=a==null?0:a.length,c=0,h=[];++i<o;){var A=a[i];A&&(h[c++]=A)}return h}function o0(){var a=arguments.length;if(!a)return[];for(var i=j(a-1),o=arguments[0],c=a;c--;)i[c-1]=arguments[c];return Vr(Ne(o)?tt(o):[o],Mn(i,1))}var u0=Se(function(a,i){return gn(a)?Rl(a,Mn(i,1,gn,!0)):[]}),d0=Se(function(a,i){var o=It(i);return gn(o)&&(o=r),gn(a)?Rl(a,Mn(i,1,gn,!0),ve(o,2)):[]}),c0=Se(function(a,i){var o=It(i);return gn(o)&&(o=r),gn(a)?Rl(a,Mn(i,1,gn,!0),r,o):[]});function m0(a,i,o){var c=a==null?0:a.length;return c?(i=o||i===r?1:ke(i),Dt(a,i<0?0:i,c)):[]}function f0(a,i,o){var c=a==null?0:a.length;return c?(i=o||i===r?1:ke(i),i=c-i,Dt(a,0,i<0?0:i)):[]}function E0(a,i){return a&&a.length?Ki(a,ve(i,3),!0,!0):[]}function v0(a,i){return a&&a.length?Ki(a,ve(i,3),!0):[]}function g0(a,i,o,c){var h=a==null?0:a.length;return h?(o&&typeof o!="number"&&Yn(a,i,o)&&(o=0,c=h),oT(a,i,o,c)):[]}function Gm(a,i,o){var c=a==null?0:a.length;if(!c)return-1;var h=o==null?0:ke(o);return h<0&&(h=On(c+h,0)),Ei(a,ve(i,3),h)}function Vm(a,i,o){var c=a==null?0:a.length;if(!c)return-1;var h=c-1;return o!==r&&(h=ke(o),h=o<0?On(c+h,0):Bn(h,c-1)),Ei(a,ve(i,3),h,!0)}function Bm(a){var i=a==null?0:a.length;return i?Mn(a,1):[]}function _0(a){var i=a==null?0:a.length;return i?Mn(a,se):[]}function h0(a,i){var o=a==null?0:a.length;return o?(i=i===r?1:ke(i),Mn(a,i)):[]}function p0(a){for(var i=-1,o=a==null?0:a.length,c={};++i<o;){var h=a[i];c[h[0]]=h[1]}return c}function xm(a){return a&&a.length?a[0]:r}function T0(a,i,o){var c=a==null?0:a.length;if(!c)return-1;var h=o==null?0:ke(o);return h<0&&(h=On(c+h,0)),La(a,i,h)}function R0(a){var i=a==null?0:a.length;return i?Dt(a,0,-1):[]}var y0=Se(function(a){var i=an(a,Go);return i.length&&i[0]===a[0]?So(i):[]}),N0=Se(function(a){var i=It(a),o=an(a,Go);return i===It(o)?i=r:o.pop(),o.length&&o[0]===a[0]?So(o,ve(i,2)):[]}),A0=Se(function(a){var i=It(a),o=an(a,Go);return i=typeof i=="function"?i:r,i&&o.pop(),o.length&&o[0]===a[0]?So(o,r,i):[]});function k0(a,i){return a==null?"":Rp.call(a,i)}function It(a){var i=a==null?0:a.length;return i?a[i-1]:r}function b0(a,i,o){var c=a==null?0:a.length;if(!c)return-1;var h=c;return o!==r&&(h=ke(o),h=h<0?On(c+h,0):Bn(h,c-1)),i===i?lp(a,i,h):Ei(a,Tc,h,!0)}function S0(a,i){return a&&a.length?Xc(a,ke(i)):r}var O0=Se(Um);function Um(a,i){return a&&a.length&&i&&i.length?Lo(a,i):a}function D0(a,i,o){return a&&a.length&&i&&i.length?Lo(a,i,ve(o,2)):a}function I0(a,i,o){return a&&a.length&&i&&i.length?Lo(a,i,r,o):a}var L0=Ar(function(a,i){var o=a==null?0:a.length,c=No(a,i);return em(a,an(i,function(h){return kr(h,o)?+h:h}).sort(dm)),c});function P0(a,i){var o=[];if(!(a&&a.length))return o;var c=-1,h=[],A=a.length;for(i=ve(i,3);++c<A;){var I=a[c];i(I,c,a)&&(o.push(I),h.push(c))}return em(a,h),o}function Xo(a){return a==null?a:kp.call(a)}function w0(a,i,o){var c=a==null?0:a.length;return c?(o&&typeof o!="number"&&Yn(a,i,o)?(i=0,o=c):(i=i==null?0:ke(i),o=o===r?c:ke(o)),Dt(a,i,o)):[]}function F0(a,i){return Fi(a,i)}function K0(a,i,o){return Fo(a,i,ve(o,2))}function M0(a,i){var o=a==null?0:a.length;if(o){var c=Fi(a,i);if(c<o&&xt(a[c],i))return c}return-1}function G0(a,i){return Fi(a,i,!0)}function V0(a,i,o){return Fo(a,i,ve(o,2),!0)}function B0(a,i){var o=a==null?0:a.length;if(o){var c=Fi(a,i,!0)-1;if(xt(a[c],i))return c}return-1}function x0(a){return a&&a.length?tm(a):[]}function U0(a,i){return a&&a.length?tm(a,ve(i,2)):[]}function H0(a){var i=a==null?0:a.length;return i?Dt(a,1,i):[]}function j0(a,i,o){return a&&a.length?(i=o||i===r?1:ke(i),Dt(a,0,i<0?0:i)):[]}function C0(a,i,o){var c=a==null?0:a.length;return c?(i=o||i===r?1:ke(i),i=c-i,Dt(a,i<0?0:i,c)):[]}function q0(a,i){return a&&a.length?Ki(a,ve(i,3),!1,!0):[]}function Y0(a,i){return a&&a.length?Ki(a,ve(i,3)):[]}var $0=Se(function(a){return Hr(Mn(a,1,gn,!0))}),W0=Se(function(a){var i=It(a);return gn(i)&&(i=r),Hr(Mn(a,1,gn,!0),ve(i,2))}),J0=Se(function(a){var i=It(a);return i=typeof i=="function"?i:r,Hr(Mn(a,1,gn,!0),r,i)});function z0(a){return a&&a.length?Hr(a):[]}function X0(a,i){return a&&a.length?Hr(a,ve(i,2)):[]}function Z0(a,i){return i=typeof i=="function"?i:r,a&&a.length?Hr(a,r,i):[]}function Zo(a){if(!(a&&a.length))return[];var i=0;return a=Gr(a,function(o){if(gn(o))return i=On(o.length,i),!0}),vo(i,function(o){return an(a,mo(o))})}function Hm(a,i){if(!(a&&a.length))return[];var o=Zo(a);return i==null?o:an(o,function(c){return ft(i,r,c)})}var Q0=Se(function(a,i){return gn(a)?Rl(a,i):[]}),eR=Se(function(a){return Mo(Gr(a,gn))}),nR=Se(function(a){var i=It(a);return gn(i)&&(i=r),Mo(Gr(a,gn),ve(i,2))}),tR=Se(function(a){var i=It(a);return i=typeof i=="function"?i:r,Mo(Gr(a,gn),r,i)}),rR=Se(Zo);function aR(a,i){return im(a||[],i||[],Tl)}function lR(a,i){return im(a||[],i||[],Al)}var iR=Se(function(a){var i=a.length,o=i>1?a[i-1]:r;return o=typeof o=="function"?(a.pop(),o):r,Hm(a,o)});function jm(a){var i=R(a);return i.__chain__=!0,i}function sR(a,i){return i(a),a}function Ci(a,i){return i(a)}var oR=Ar(function(a){var i=a.length,o=i?a[0]:0,c=this.__wrapped__,h=function(A){return No(A,a)};return i>1||this.__actions__.length||!(c instanceof Le)||!kr(o)?this.thru(h):(c=c.slice(o,+o+(i?1:0)),c.__actions__.push({func:Ci,args:[h],thisArg:r}),new St(c,this.__chain__).thru(function(A){return i&&!A.length&&A.push(r),A}))});function uR(){return jm(this)}function dR(){return new St(this.value(),this.__chain__)}function cR(){this.__values__===r&&(this.__values__=rf(this.value()));var a=this.__index__>=this.__values__.length,i=a?r:this.__values__[this.__index__++];return{done:a,value:i}}function mR(){return this}function fR(a){for(var i,o=this;o instanceof Di;){var c=Mm(o);c.__index__=0,c.__values__=r,i?h.__wrapped__=c:i=c;var h=c;o=o.__wrapped__}return h.__wrapped__=a,i}function ER(){var a=this.__wrapped__;if(a instanceof Le){var i=a;return this.__actions__.length&&(i=new Le(this)),i=i.reverse(),i.__actions__.push({func:Ci,args:[Xo],thisArg:r}),new St(i,this.__chain__)}return this.thru(Xo)}function vR(){return lm(this.__wrapped__,this.__actions__)}var gR=Mi(function(a,i,o){je.call(a,o)?++a[o]:yr(a,o,1)});function _R(a,i,o){var c=Ne(a)?hc:sT;return o&&Yn(a,i,o)&&(i=r),c(a,ve(i,3))}function hR(a,i){var o=Ne(a)?Gr:Hc;return o(a,ve(i,3))}var pR=gm(Gm),TR=gm(Vm);function RR(a,i){return Mn(qi(a,i),1)}function yR(a,i){return Mn(qi(a,i),se)}function NR(a,i,o){return o=o===r?1:ke(o),Mn(qi(a,i),o)}function Cm(a,i){var o=Ne(a)?kt:Ur;return o(a,ve(i,3))}function qm(a,i){var o=Ne(a)?Hh:Uc;return o(a,ve(i,3))}var AR=Mi(function(a,i,o){je.call(a,o)?a[o].push(i):yr(a,o,[i])});function kR(a,i,o,c){a=rt(a)?a:ja(a),o=o&&!c?ke(o):0;var h=a.length;return o<0&&(o=On(h+o,0)),zi(a)?o<=h&&a.indexOf(i,o)>-1:!!h&&La(a,i,o)>-1}var bR=Se(function(a,i,o){var c=-1,h=typeof i=="function",A=rt(a)?j(a.length):[];return Ur(a,function(I){A[++c]=h?ft(i,I,o):yl(I,i,o)}),A}),SR=Mi(function(a,i,o){yr(a,o,i)});function qi(a,i){var o=Ne(a)?an:Wc;return o(a,ve(i,3))}function OR(a,i,o,c){return a==null?[]:(Ne(i)||(i=i==null?[]:[i]),o=c?r:o,Ne(o)||(o=o==null?[]:[o]),Zc(a,i,o))}var DR=Mi(function(a,i,o){a[o?0:1].push(i)},function(){return[[],[]]});function IR(a,i,o){var c=Ne(a)?uo:yc,h=arguments.length<3;return c(a,ve(i,4),o,h,Ur)}function LR(a,i,o){var c=Ne(a)?jh:yc,h=arguments.length<3;return c(a,ve(i,4),o,h,Uc)}function PR(a,i){var o=Ne(a)?Gr:Hc;return o(a,Wi(ve(i,3)))}function wR(a){var i=Ne(a)?Gc:kT;return i(a)}function FR(a,i,o){(o?Yn(a,i,o):i===r)?i=1:i=ke(i);var c=Ne(a)?tT:bT;return c(a,i)}function KR(a){var i=Ne(a)?rT:OT;return i(a)}function MR(a){if(a==null)return 0;if(rt(a))return zi(a)?wa(a):a.length;var i=xn(a);return i==$e||i==U?a.size:Do(a).length}function GR(a,i,o){var c=Ne(a)?co:DT;return o&&Yn(a,i,o)&&(i=r),c(a,ve(i,3))}var VR=Se(function(a,i){if(a==null)return[];var o=i.length;return o>1&&Yn(a,i[0],i[1])?i=[]:o>2&&Yn(i[0],i[1],i[2])&&(i=[i[0]]),Zc(a,Mn(i,1),[])}),Yi=hp||function(){return Kn.Date.now()};function BR(a,i){if(typeof i!="function")throw new bt(u);return a=ke(a),function(){if(--a<1)return i.apply(this,arguments)}}function Ym(a,i,o){return i=o?r:i,i=a&&i==null?a.length:i,Nr(a,F,r,r,r,r,i)}function $m(a,i){var o;if(typeof i!="function")throw new bt(u);return a=ke(a),function(){return--a>0&&(o=i.apply(this,arguments)),a<=1&&(i=r),o}}var Qo=Se(function(a,i,o){var c=p;if(o.length){var h=Br(o,Ua(Qo));c|=y}return Nr(a,c,i,o,h)}),Wm=Se(function(a,i,o){var c=p|b;if(o.length){var h=Br(o,Ua(Wm));c|=y}return Nr(i,c,a,o,h)});function Jm(a,i,o){i=o?r:i;var c=Nr(a,N,r,r,r,r,r,i);return c.placeholder=Jm.placeholder,c}function zm(a,i,o){i=o?r:i;var c=Nr(a,L,r,r,r,r,r,i);return c.placeholder=zm.placeholder,c}function Xm(a,i,o){var c,h,A,I,w,B,J=0,z=!1,Z=!1,le=!0;if(typeof a!="function")throw new bt(u);i=Lt(i)||0,ln(o)&&(z=!!o.leading,Z="maxWait"in o,A=Z?On(Lt(o.maxWait)||0,i):A,le="trailing"in o?!!o.trailing:le);function ce(_n){var Ut=c,Or=h;return c=h=r,J=_n,I=a.apply(Or,Ut),I}function he(_n){return J=_n,w=Sl(De,i),z?ce(_n):I}function be(_n){var Ut=_n-B,Or=_n-J,_f=i-Ut;return Z?Bn(_f,A-Or):_f}function pe(_n){var Ut=_n-B,Or=_n-J;return B===r||Ut>=i||Ut<0||Z&&Or>=A}function De(){var _n=Yi();if(pe(_n))return we(_n);w=Sl(De,be(_n))}function we(_n){return w=r,le&&c?ce(_n):(c=h=r,I)}function _t(){w!==r&&sm(w),J=0,c=B=h=w=r}function $n(){return w===r?I:we(Yi())}function ht(){var _n=Yi(),Ut=pe(_n);if(c=arguments,h=this,B=_n,Ut){if(w===r)return he(B);if(Z)return sm(w),w=Sl(De,i),ce(B)}return w===r&&(w=Sl(De,i)),I}return ht.cancel=_t,ht.flush=$n,ht}var xR=Se(function(a,i){return xc(a,1,i)}),UR=Se(function(a,i,o){return xc(a,Lt(i)||0,o)});function HR(a){return Nr(a,H)}function $i(a,i){if(typeof a!="function"||i!=null&&typeof i!="function")throw new bt(u);var o=function(){var c=arguments,h=i?i.apply(this,c):c[0],A=o.cache;if(A.has(h))return A.get(h);var I=a.apply(this,c);return o.cache=A.set(h,I)||A,I};return o.cache=new($i.Cache||Rr),o}$i.Cache=Rr;function Wi(a){if(typeof a!="function")throw new bt(u);return function(){var i=arguments;switch(i.length){case 0:return!a.call(this);case 1:return!a.call(this,i[0]);case 2:return!a.call(this,i[0],i[1]);case 3:return!a.call(this,i[0],i[1],i[2])}return!a.apply(this,i)}}function jR(a){return $m(2,a)}var CR=IT(function(a,i){i=i.length==1&&Ne(i[0])?an(i[0],Et(ve())):an(Mn(i,1),Et(ve()));var o=i.length;return Se(function(c){for(var h=-1,A=Bn(c.length,o);++h<A;)c[h]=i[h].call(this,c[h]);return ft(a,this,c)})}),eu=Se(function(a,i){var o=Br(i,Ua(eu));return Nr(a,y,r,i,o)}),Zm=Se(function(a,i){var o=Br(i,Ua(Zm));return Nr(a,K,r,i,o)}),qR=Ar(function(a,i){return Nr(a,G,r,r,r,i)});function YR(a,i){if(typeof a!="function")throw new bt(u);return i=i===r?i:ke(i),Se(a,i)}function $R(a,i){if(typeof a!="function")throw new bt(u);return i=i==null?0:On(ke(i),0),Se(function(o){var c=o[i],h=Cr(o,0,i);return c&&Vr(h,c),ft(a,this,h)})}function WR(a,i,o){var c=!0,h=!0;if(typeof a!="function")throw new bt(u);return ln(o)&&(c="leading"in o?!!o.leading:c,h="trailing"in o?!!o.trailing:h),Xm(a,i,{leading:c,maxWait:i,trailing:h})}function JR(a){return Ym(a,1)}function zR(a,i){return eu(Vo(i),a)}function XR(){if(!arguments.length)return[];var a=arguments[0];return Ne(a)?a:[a]}function ZR(a){return Ot(a,T)}function QR(a,i){return i=typeof i=="function"?i:r,Ot(a,T,i)}function ey(a){return Ot(a,v|T)}function ny(a,i){return i=typeof i=="function"?i:r,Ot(a,v|T,i)}function ty(a,i){return i==null||Bc(a,i,wn(i))}function xt(a,i){return a===i||a!==a&&i!==i}var ry=xi(bo),ay=xi(function(a,i){return a>=i}),da=qc((function(){return arguments})())?qc:function(a){return cn(a)&&je.call(a,"callee")&&!Lc.call(a,"callee")},Ne=j.isArray,ly=mc?Et(mc):fT;function rt(a){return a!=null&&Ji(a.length)&&!br(a)}function gn(a){return cn(a)&&rt(a)}function iy(a){return a===!0||a===!1||cn(a)&&qn(a)==nn}var qr=Tp||cu,sy=fc?Et(fc):ET;function oy(a){return cn(a)&&a.nodeType===1&&!Ol(a)}function uy(a){if(a==null)return!0;if(rt(a)&&(Ne(a)||typeof a=="string"||typeof a.splice=="function"||qr(a)||Ha(a)||da(a)))return!a.length;var i=xn(a);if(i==$e||i==U)return!a.size;if(bl(a))return!Do(a).length;for(var o in a)if(je.call(a,o))return!1;return!0}function dy(a,i){return Nl(a,i)}function cy(a,i,o){o=typeof o=="function"?o:r;var c=o?o(a,i):r;return c===r?Nl(a,i,r,o):!!c}function nu(a){if(!cn(a))return!1;var i=qn(a);return i==Vn||i==dt||typeof a.message=="string"&&typeof a.name=="string"&&!Ol(a)}function my(a){return typeof a=="number"&&wc(a)}function br(a){if(!ln(a))return!1;var i=qn(a);return i==Fn||i==Zn||i==en||i==Qn}function Qm(a){return typeof a=="number"&&a==ke(a)}function Ji(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=Q}function ln(a){var i=typeof a;return a!=null&&(i=="object"||i=="function")}function cn(a){return a!=null&&typeof a=="object"}var ef=Ec?Et(Ec):gT;function fy(a,i){return a===i||Oo(a,i,qo(i))}function Ey(a,i,o){return o=typeof o=="function"?o:r,Oo(a,i,qo(i),o)}function vy(a){return nf(a)&&a!=+a}function gy(a){if(QT(a))throw new ye(s);return Yc(a)}function _y(a){return a===null}function hy(a){return a==null}function nf(a){return typeof a=="number"||cn(a)&&qn(a)==An}function Ol(a){if(!cn(a)||qn(a)!=vn)return!1;var i=yi(a);if(i===null)return!0;var o=je.call(i,"constructor")&&i.constructor;return typeof o=="function"&&o instanceof o&&hi.call(o)==Ep}var tu=vc?Et(vc):_T;function py(a){return Qm(a)&&a>=-Q&&a<=Q}var tf=gc?Et(gc):hT;function zi(a){return typeof a=="string"||!Ne(a)&&cn(a)&&qn(a)==q}function gt(a){return typeof a=="symbol"||cn(a)&&qn(a)==ae}var Ha=_c?Et(_c):pT;function Ty(a){return a===r}function Ry(a){return cn(a)&&xn(a)==ee}function yy(a){return cn(a)&&qn(a)==me}var Ny=xi(Io),Ay=xi(function(a,i){return a<=i});function rf(a){if(!a)return[];if(rt(a))return zi(a)?Vt(a):tt(a);if(vl&&a[vl])return tp(a[vl]());var i=xn(a),o=i==$e?_o:i==U?vi:ja;return o(a)}function Sr(a){if(!a)return a===0?a:0;if(a=Lt(a),a===se||a===-se){var i=a<0?-1:1;return i*oe}return a===a?a:0}function ke(a){var i=Sr(a),o=i%1;return i===i?o?i-o:i:0}function af(a){return a?ia(ke(a),0,ge):0}function Lt(a){if(typeof a=="number")return a;if(gt(a))return Re;if(ln(a)){var i=typeof a.valueOf=="function"?a.valueOf():a;a=ln(i)?i+"":i}if(typeof a!="string")return a===0?a:+a;a=Nc(a);var o=lh.test(a);return o||sh.test(a)?Bh(a.slice(2),o?2:8):ah.test(a)?Re:+a}function lf(a){return nr(a,at(a))}function ky(a){return a?ia(ke(a),-Q,Q):a===0?a:0}function Ue(a){return a==null?"":vt(a)}var by=Ba(function(a,i){if(bl(i)||rt(i)){nr(i,wn(i),a);return}for(var o in i)je.call(i,o)&&Tl(a,o,i[o])}),sf=Ba(function(a,i){nr(i,at(i),a)}),Xi=Ba(function(a,i,o,c){nr(i,at(i),a,c)}),Sy=Ba(function(a,i,o,c){nr(i,wn(i),a,c)}),Oy=Ar(No);function Dy(a,i){var o=Va(a);return i==null?o:Vc(o,i)}var Iy=Se(function(a,i){a=We(a);var o=-1,c=i.length,h=c>2?i[2]:r;for(h&&Yn(i[0],i[1],h)&&(c=1);++o<c;)for(var A=i[o],I=at(A),w=-1,B=I.length;++w<B;){var J=I[w],z=a[J];(z===r||xt(z,Ka[J])&&!je.call(a,J))&&(a[J]=A[J])}return a}),Ly=Se(function(a){return a.push(r,Nm),ft(of,r,a)});function Py(a,i){return pc(a,ve(i,3),er)}function wy(a,i){return pc(a,ve(i,3),ko)}function Fy(a,i){return a==null?a:Ao(a,ve(i,3),at)}function Ky(a,i){return a==null?a:jc(a,ve(i,3),at)}function My(a,i){return a&&er(a,ve(i,3))}function Gy(a,i){return a&&ko(a,ve(i,3))}function Vy(a){return a==null?[]:Pi(a,wn(a))}function By(a){return a==null?[]:Pi(a,at(a))}function ru(a,i,o){var c=a==null?r:sa(a,i);return c===r?o:c}function xy(a,i){return a!=null&&bm(a,i,uT)}function au(a,i){return a!=null&&bm(a,i,dT)}var Uy=hm(function(a,i,o){i!=null&&typeof i.toString!="function"&&(i=pi.call(i)),a[i]=o},iu(lt)),Hy=hm(function(a,i,o){i!=null&&typeof i.toString!="function"&&(i=pi.call(i)),je.call(a,i)?a[i].push(o):a[i]=[o]},ve),jy=Se(yl);function wn(a){return rt(a)?Mc(a):Do(a)}function at(a){return rt(a)?Mc(a,!0):TT(a)}function Cy(a,i){var o={};return i=ve(i,3),er(a,function(c,h,A){yr(o,i(c,h,A),c)}),o}function qy(a,i){var o={};return i=ve(i,3),er(a,function(c,h,A){yr(o,h,i(c,h,A))}),o}var Yy=Ba(function(a,i,o){wi(a,i,o)}),of=Ba(function(a,i,o,c){wi(a,i,o,c)}),$y=Ar(function(a,i){var o={};if(a==null)return o;var c=!1;i=an(i,function(A){return A=jr(A,a),c||(c=A.length>1),A}),nr(a,jo(a),o),c&&(o=Ot(o,v|_|T,UT));for(var h=i.length;h--;)Ko(o,i[h]);return o});function Wy(a,i){return uf(a,Wi(ve(i)))}var Jy=Ar(function(a,i){return a==null?{}:yT(a,i)});function uf(a,i){if(a==null)return{};var o=an(jo(a),function(c){return[c]});return i=ve(i),Qc(a,o,function(c,h){return i(c,h[0])})}function zy(a,i,o){i=jr(i,a);var c=-1,h=i.length;for(h||(h=1,a=r);++c<h;){var A=a==null?r:a[tr(i[c])];A===r&&(c=h,A=o),a=br(A)?A.call(a):A}return a}function Xy(a,i,o){return a==null?a:Al(a,i,o)}function Zy(a,i,o,c){return c=typeof c=="function"?c:r,a==null?a:Al(a,i,o,c)}var df=Rm(wn),cf=Rm(at);function Qy(a,i,o){var c=Ne(a),h=c||qr(a)||Ha(a);if(i=ve(i,4),o==null){var A=a&&a.constructor;h?o=c?new A:[]:ln(a)?o=br(A)?Va(yi(a)):{}:o={}}return(h?kt:er)(a,function(I,w,B){return i(o,I,w,B)}),o}function eN(a,i){return a==null?!0:Ko(a,i)}function nN(a,i,o){return a==null?a:am(a,i,Vo(o))}function tN(a,i,o,c){return c=typeof c=="function"?c:r,a==null?a:am(a,i,Vo(o),c)}function ja(a){return a==null?[]:go(a,wn(a))}function rN(a){return a==null?[]:go(a,at(a))}function aN(a,i,o){return o===r&&(o=i,i=r),o!==r&&(o=Lt(o),o=o===o?o:0),i!==r&&(i=Lt(i),i=i===i?i:0),ia(Lt(a),i,o)}function lN(a,i,o){return i=Sr(i),o===r?(o=i,i=0):o=Sr(o),a=Lt(a),cT(a,i,o)}function iN(a,i,o){if(o&&typeof o!="boolean"&&Yn(a,i,o)&&(i=o=r),o===r&&(typeof i=="boolean"?(o=i,i=r):typeof a=="boolean"&&(o=a,a=r)),a===r&&i===r?(a=0,i=1):(a=Sr(a),i===r?(i=a,a=0):i=Sr(i)),a>i){var c=a;a=i,i=c}if(o||a%1||i%1){var h=Fc();return Bn(a+h*(i-a+Vh("1e-"+((h+"").length-1))),i)}return Po(a,i)}var sN=xa(function(a,i,o){return i=i.toLowerCase(),a+(o?mf(i):i)});function mf(a){return lu(Ue(a).toLowerCase())}function ff(a){return a=Ue(a),a&&a.replace(uh,Xh).replace(Oh,"")}function oN(a,i,o){a=Ue(a),i=vt(i);var c=a.length;o=o===r?c:ia(ke(o),0,c);var h=o;return o-=i.length,o>=0&&a.slice(o,h)==i}function uN(a){return a=Ue(a),a&&Pn.test(a)?a.replace(nt,Zh):a}function dN(a){return a=Ue(a),a&&J_.test(a)?a.replace(na,"\\$&"):a}var cN=xa(function(a,i,o){return a+(o?"-":"")+i.toLowerCase()}),mN=xa(function(a,i,o){return a+(o?" ":"")+i.toLowerCase()}),fN=vm("toLowerCase");function EN(a,i,o){a=Ue(a),i=ke(i);var c=i?wa(a):0;if(!i||c>=i)return a;var h=(i-c)/2;return Bi(bi(h),o)+a+Bi(ki(h),o)}function vN(a,i,o){a=Ue(a),i=ke(i);var c=i?wa(a):0;return i&&c<i?a+Bi(i-c,o):a}function gN(a,i,o){a=Ue(a),i=ke(i);var c=i?wa(a):0;return i&&c<i?Bi(i-c,o)+a:a}function _N(a,i,o){return o||i==null?i=0:i&&(i=+i),Ap(Ue(a).replace(eo,""),i||0)}function hN(a,i,o){return(o?Yn(a,i,o):i===r)?i=1:i=ke(i),wo(Ue(a),i)}function pN(){var a=arguments,i=Ue(a[0]);return a.length<3?i:i.replace(a[1],a[2])}var TN=xa(function(a,i,o){return a+(o?"_":"")+i.toLowerCase()});function RN(a,i,o){return o&&typeof o!="number"&&Yn(a,i,o)&&(i=o=r),o=o===r?ge:o>>>0,o?(a=Ue(a),a&&(typeof i=="string"||i!=null&&!tu(i))&&(i=vt(i),!i&&Pa(a))?Cr(Vt(a),0,o):a.split(i,o)):[]}var yN=xa(function(a,i,o){return a+(o?" ":"")+lu(i)});function NN(a,i,o){return a=Ue(a),o=o==null?0:ia(ke(o),0,a.length),i=vt(i),a.slice(o,o+i.length)==i}function AN(a,i,o){var c=R.templateSettings;o&&Yn(a,i,o)&&(i=r),a=Ue(a),i=Xi({},i,c,ym);var h=Xi({},i.imports,c.imports,ym),A=wn(h),I=go(h,A),w,B,J=0,z=i.interpolate||di,Z="__p += '",le=ho((i.escape||di).source+"|"+z.source+"|"+(z===ui?rh:di).source+"|"+(i.evaluate||di).source+"|$","g"),ce="//# sourceURL="+(je.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++wh+"]")+`
`;a.replace(le,function(pe,De,we,_t,$n,ht){return we||(we=_t),Z+=a.slice(J,ht).replace(dh,Qh),De&&(w=!0,Z+=`' +
__e(`+De+`) +
'`),$n&&(B=!0,Z+=`';
`+$n+`;
__p += '`),we&&(Z+=`' +
((__t = (`+we+`)) == null ? '' : __t) +
'`),J=ht+pe.length,pe}),Z+=`';
`;var he=je.call(i,"variable")&&i.variable;if(!he)Z=`with (obj) {
`+Z+`
}
`;else if(nh.test(he))throw new ye(d);Z=(B?Z.replace(Ae,""):Z).replace(ze,"$1").replace(Ye,"$1;"),Z="function("+(he||"obj")+`) {
`+(he?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(w?", __e = _.escape":"")+(B?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Z+`return __p
}`;var be=vf(function(){return Be(A,ce+"return "+Z).apply(r,I)});if(be.source=Z,nu(be))throw be;return be}function kN(a){return Ue(a).toLowerCase()}function bN(a){return Ue(a).toUpperCase()}function SN(a,i,o){if(a=Ue(a),a&&(o||i===r))return Nc(a);if(!a||!(i=vt(i)))return a;var c=Vt(a),h=Vt(i),A=Ac(c,h),I=kc(c,h)+1;return Cr(c,A,I).join("")}function ON(a,i,o){if(a=Ue(a),a&&(o||i===r))return a.slice(0,Sc(a)+1);if(!a||!(i=vt(i)))return a;var c=Vt(a),h=kc(c,Vt(i))+1;return Cr(c,0,h).join("")}function DN(a,i,o){if(a=Ue(a),a&&(o||i===r))return a.replace(eo,"");if(!a||!(i=vt(i)))return a;var c=Vt(a),h=Ac(c,Vt(i));return Cr(c,h).join("")}function IN(a,i){var o=W,c=Y;if(ln(i)){var h="separator"in i?i.separator:h;o="length"in i?ke(i.length):o,c="omission"in i?vt(i.omission):c}a=Ue(a);var A=a.length;if(Pa(a)){var I=Vt(a);A=I.length}if(o>=A)return a;var w=o-wa(c);if(w<1)return c;var B=I?Cr(I,0,w).join(""):a.slice(0,w);if(h===r)return B+c;if(I&&(w+=B.length-w),tu(h)){if(a.slice(w).search(h)){var J,z=B;for(h.global||(h=ho(h.source,Ue(qd.exec(h))+"g")),h.lastIndex=0;J=h.exec(z);)var Z=J.index;B=B.slice(0,Z===r?w:Z)}}else if(a.indexOf(vt(h),w)!=w){var le=B.lastIndexOf(h);le>-1&&(B=B.slice(0,le))}return B+c}function LN(a){return a=Ue(a),a&&Da.test(a)?a.replace(Gt,ip):a}var PN=xa(function(a,i,o){return a+(o?" ":"")+i.toUpperCase()}),lu=vm("toUpperCase");function Ef(a,i,o){return a=Ue(a),i=o?r:i,i===r?np(a)?up(a):Yh(a):a.match(i)||[]}var vf=Se(function(a,i){try{return ft(a,r,i)}catch(o){return nu(o)?o:new ye(o)}}),wN=Ar(function(a,i){return kt(i,function(o){o=tr(o),yr(a,o,Qo(a[o],a))}),a});function FN(a){var i=a==null?0:a.length,o=ve();return a=i?an(a,function(c){if(typeof c[1]!="function")throw new bt(u);return[o(c[0]),c[1]]}):[],Se(function(c){for(var h=-1;++h<i;){var A=a[h];if(ft(A[0],this,c))return ft(A[1],this,c)}})}function KN(a){return iT(Ot(a,v))}function iu(a){return function(){return a}}function MN(a,i){return a==null||a!==a?i:a}var GN=_m(),VN=_m(!0);function lt(a){return a}function su(a){return $c(typeof a=="function"?a:Ot(a,v))}function BN(a){return Jc(Ot(a,v))}function xN(a,i){return zc(a,Ot(i,v))}var UN=Se(function(a,i){return function(o){return yl(o,a,i)}}),HN=Se(function(a,i){return function(o){return yl(a,o,i)}});function ou(a,i,o){var c=wn(i),h=Pi(i,c);o==null&&!(ln(i)&&(h.length||!c.length))&&(o=i,i=a,a=this,h=Pi(i,wn(i)));var A=!(ln(o)&&"chain"in o)||!!o.chain,I=br(a);return kt(h,function(w){var B=i[w];a[w]=B,I&&(a.prototype[w]=function(){var J=this.__chain__;if(A||J){var z=a(this.__wrapped__),Z=z.__actions__=tt(this.__actions__);return Z.push({func:B,args:arguments,thisArg:a}),z.__chain__=J,z}return B.apply(a,Vr([this.value()],arguments))})}),a}function jN(){return Kn._===this&&(Kn._=vp),this}function uu(){}function CN(a){return a=ke(a),Se(function(i){return Xc(i,a)})}var qN=xo(an),YN=xo(hc),$N=xo(co);function gf(a){return $o(a)?mo(tr(a)):NT(a)}function WN(a){return function(i){return a==null?r:sa(a,i)}}var JN=pm(),zN=pm(!0);function du(){return[]}function cu(){return!1}function XN(){return{}}function ZN(){return""}function QN(){return!0}function eA(a,i){if(a=ke(a),a<1||a>Q)return[];var o=ge,c=Bn(a,ge);i=ve(i),a-=ge;for(var h=vo(c,i);++o<a;)i(o);return h}function nA(a){return Ne(a)?an(a,tr):gt(a)?[a]:tt(Km(Ue(a)))}function tA(a){var i=++fp;return Ue(a)+i}var rA=Vi(function(a,i){return a+i},0),aA=Uo("ceil"),lA=Vi(function(a,i){return a/i},1),iA=Uo("floor");function sA(a){return a&&a.length?Li(a,lt,bo):r}function oA(a,i){return a&&a.length?Li(a,ve(i,2),bo):r}function uA(a){return Rc(a,lt)}function dA(a,i){return Rc(a,ve(i,2))}function cA(a){return a&&a.length?Li(a,lt,Io):r}function mA(a,i){return a&&a.length?Li(a,ve(i,2),Io):r}var fA=Vi(function(a,i){return a*i},1),EA=Uo("round"),vA=Vi(function(a,i){return a-i},0);function gA(a){return a&&a.length?Eo(a,lt):0}function _A(a,i){return a&&a.length?Eo(a,ve(i,2)):0}return R.after=BR,R.ary=Ym,R.assign=by,R.assignIn=sf,R.assignInWith=Xi,R.assignWith=Sy,R.at=Oy,R.before=$m,R.bind=Qo,R.bindAll=wN,R.bindKey=Wm,R.castArray=XR,R.chain=jm,R.chunk=i0,R.compact=s0,R.concat=o0,R.cond=FN,R.conforms=KN,R.constant=iu,R.countBy=gR,R.create=Dy,R.curry=Jm,R.curryRight=zm,R.debounce=Xm,R.defaults=Iy,R.defaultsDeep=Ly,R.defer=xR,R.delay=UR,R.difference=u0,R.differenceBy=d0,R.differenceWith=c0,R.drop=m0,R.dropRight=f0,R.dropRightWhile=E0,R.dropWhile=v0,R.fill=g0,R.filter=hR,R.flatMap=RR,R.flatMapDeep=yR,R.flatMapDepth=NR,R.flatten=Bm,R.flattenDeep=_0,R.flattenDepth=h0,R.flip=HR,R.flow=GN,R.flowRight=VN,R.fromPairs=p0,R.functions=Vy,R.functionsIn=By,R.groupBy=AR,R.initial=R0,R.intersection=y0,R.intersectionBy=N0,R.intersectionWith=A0,R.invert=Uy,R.invertBy=Hy,R.invokeMap=bR,R.iteratee=su,R.keyBy=SR,R.keys=wn,R.keysIn=at,R.map=qi,R.mapKeys=Cy,R.mapValues=qy,R.matches=BN,R.matchesProperty=xN,R.memoize=$i,R.merge=Yy,R.mergeWith=of,R.method=UN,R.methodOf=HN,R.mixin=ou,R.negate=Wi,R.nthArg=CN,R.omit=$y,R.omitBy=Wy,R.once=jR,R.orderBy=OR,R.over=qN,R.overArgs=CR,R.overEvery=YN,R.overSome=$N,R.partial=eu,R.partialRight=Zm,R.partition=DR,R.pick=Jy,R.pickBy=uf,R.property=gf,R.propertyOf=WN,R.pull=O0,R.pullAll=Um,R.pullAllBy=D0,R.pullAllWith=I0,R.pullAt=L0,R.range=JN,R.rangeRight=zN,R.rearg=qR,R.reject=PR,R.remove=P0,R.rest=YR,R.reverse=Xo,R.sampleSize=FR,R.set=Xy,R.setWith=Zy,R.shuffle=KR,R.slice=w0,R.sortBy=VR,R.sortedUniq=x0,R.sortedUniqBy=U0,R.split=RN,R.spread=$R,R.tail=H0,R.take=j0,R.takeRight=C0,R.takeRightWhile=q0,R.takeWhile=Y0,R.tap=sR,R.throttle=WR,R.thru=Ci,R.toArray=rf,R.toPairs=df,R.toPairsIn=cf,R.toPath=nA,R.toPlainObject=lf,R.transform=Qy,R.unary=JR,R.union=$0,R.unionBy=W0,R.unionWith=J0,R.uniq=z0,R.uniqBy=X0,R.uniqWith=Z0,R.unset=eN,R.unzip=Zo,R.unzipWith=Hm,R.update=nN,R.updateWith=tN,R.values=ja,R.valuesIn=rN,R.without=Q0,R.words=Ef,R.wrap=zR,R.xor=eR,R.xorBy=nR,R.xorWith=tR,R.zip=rR,R.zipObject=aR,R.zipObjectDeep=lR,R.zipWith=iR,R.entries=df,R.entriesIn=cf,R.extend=sf,R.extendWith=Xi,ou(R,R),R.add=rA,R.attempt=vf,R.camelCase=sN,R.capitalize=mf,R.ceil=aA,R.clamp=aN,R.clone=ZR,R.cloneDeep=ey,R.cloneDeepWith=ny,R.cloneWith=QR,R.conformsTo=ty,R.deburr=ff,R.defaultTo=MN,R.divide=lA,R.endsWith=oN,R.eq=xt,R.escape=uN,R.escapeRegExp=dN,R.every=_R,R.find=pR,R.findIndex=Gm,R.findKey=Py,R.findLast=TR,R.findLastIndex=Vm,R.findLastKey=wy,R.floor=iA,R.forEach=Cm,R.forEachRight=qm,R.forIn=Fy,R.forInRight=Ky,R.forOwn=My,R.forOwnRight=Gy,R.get=ru,R.gt=ry,R.gte=ay,R.has=xy,R.hasIn=au,R.head=xm,R.identity=lt,R.includes=kR,R.indexOf=T0,R.inRange=lN,R.invoke=jy,R.isArguments=da,R.isArray=Ne,R.isArrayBuffer=ly,R.isArrayLike=rt,R.isArrayLikeObject=gn,R.isBoolean=iy,R.isBuffer=qr,R.isDate=sy,R.isElement=oy,R.isEmpty=uy,R.isEqual=dy,R.isEqualWith=cy,R.isError=nu,R.isFinite=my,R.isFunction=br,R.isInteger=Qm,R.isLength=Ji,R.isMap=ef,R.isMatch=fy,R.isMatchWith=Ey,R.isNaN=vy,R.isNative=gy,R.isNil=hy,R.isNull=_y,R.isNumber=nf,R.isObject=ln,R.isObjectLike=cn,R.isPlainObject=Ol,R.isRegExp=tu,R.isSafeInteger=py,R.isSet=tf,R.isString=zi,R.isSymbol=gt,R.isTypedArray=Ha,R.isUndefined=Ty,R.isWeakMap=Ry,R.isWeakSet=yy,R.join=k0,R.kebabCase=cN,R.last=It,R.lastIndexOf=b0,R.lowerCase=mN,R.lowerFirst=fN,R.lt=Ny,R.lte=Ay,R.max=sA,R.maxBy=oA,R.mean=uA,R.meanBy=dA,R.min=cA,R.minBy=mA,R.stubArray=du,R.stubFalse=cu,R.stubObject=XN,R.stubString=ZN,R.stubTrue=QN,R.multiply=fA,R.nth=S0,R.noConflict=jN,R.noop=uu,R.now=Yi,R.pad=EN,R.padEnd=vN,R.padStart=gN,R.parseInt=_N,R.random=iN,R.reduce=IR,R.reduceRight=LR,R.repeat=hN,R.replace=pN,R.result=zy,R.round=EA,R.runInContext=M,R.sample=wR,R.size=MR,R.snakeCase=TN,R.some=GR,R.sortedIndex=F0,R.sortedIndexBy=K0,R.sortedIndexOf=M0,R.sortedLastIndex=G0,R.sortedLastIndexBy=V0,R.sortedLastIndexOf=B0,R.startCase=yN,R.startsWith=NN,R.subtract=vA,R.sum=gA,R.sumBy=_A,R.template=AN,R.times=eA,R.toFinite=Sr,R.toInteger=ke,R.toLength=af,R.toLower=kN,R.toNumber=Lt,R.toSafeInteger=ky,R.toString=Ue,R.toUpper=bN,R.trim=SN,R.trimEnd=ON,R.trimStart=DN,R.truncate=IN,R.unescape=LN,R.uniqueId=tA,R.upperCase=PN,R.upperFirst=lu,R.each=Cm,R.eachRight=qm,R.first=xm,ou(R,(function(){var a={};return er(R,function(i,o){je.call(R.prototype,o)||(a[o]=i)}),a})(),{chain:!1}),R.VERSION=t,kt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){R[a].placeholder=R}),kt(["drop","take"],function(a,i){Le.prototype[a]=function(o){o=o===r?1:On(ke(o),0);var c=this.__filtered__&&!i?new Le(this):this.clone();return c.__filtered__?c.__takeCount__=Bn(o,c.__takeCount__):c.__views__.push({size:Bn(o,ge),type:a+(c.__dir__<0?"Right":"")}),c},Le.prototype[a+"Right"]=function(o){return this.reverse()[a](o).reverse()}}),kt(["filter","map","takeWhile"],function(a,i){var o=i+1,c=o==X||o==te;Le.prototype[a]=function(h){var A=this.clone();return A.__iteratees__.push({iteratee:ve(h,3),type:o}),A.__filtered__=A.__filtered__||c,A}}),kt(["head","last"],function(a,i){var o="take"+(i?"Right":"");Le.prototype[a]=function(){return this[o](1).value()[0]}}),kt(["initial","tail"],function(a,i){var o="drop"+(i?"":"Right");Le.prototype[a]=function(){return this.__filtered__?new Le(this):this[o](1)}}),Le.prototype.compact=function(){return this.filter(lt)},Le.prototype.find=function(a){return this.filter(a).head()},Le.prototype.findLast=function(a){return this.reverse().find(a)},Le.prototype.invokeMap=Se(function(a,i){return typeof a=="function"?new Le(this):this.map(function(o){return yl(o,a,i)})}),Le.prototype.reject=function(a){return this.filter(Wi(ve(a)))},Le.prototype.slice=function(a,i){a=ke(a);var o=this;return o.__filtered__&&(a>0||i<0)?new Le(o):(a<0?o=o.takeRight(-a):a&&(o=o.drop(a)),i!==r&&(i=ke(i),o=i<0?o.dropRight(-i):o.take(i-a)),o)},Le.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},Le.prototype.toArray=function(){return this.take(ge)},er(Le.prototype,function(a,i){var o=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),h=R[c?"take"+(i=="last"?"Right":""):i],A=c||/^find/.test(i);h&&(R.prototype[i]=function(){var I=this.__wrapped__,w=c?[1]:arguments,B=I instanceof Le,J=w[0],z=B||Ne(I),Z=function(De){var we=h.apply(R,Vr([De],w));return c&&le?we[0]:we};z&&o&&typeof J=="function"&&J.length!=1&&(B=z=!1);var le=this.__chain__,ce=!!this.__actions__.length,he=A&&!le,be=B&&!ce;if(!A&&z){I=be?I:new Le(this);var pe=a.apply(I,w);return pe.__actions__.push({func:Ci,args:[Z],thisArg:r}),new St(pe,le)}return he&&be?a.apply(this,w):(pe=this.thru(Z),he?c?pe.value()[0]:pe.value():pe)})}),kt(["pop","push","shift","sort","splice","unshift"],function(a){var i=gi[a],o=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",c=/^(?:pop|shift)$/.test(a);R.prototype[a]=function(){var h=arguments;if(c&&!this.__chain__){var A=this.value();return i.apply(Ne(A)?A:[],h)}return this[o](function(I){return i.apply(Ne(I)?I:[],h)})}}),er(Le.prototype,function(a,i){var o=R[i];if(o){var c=o.name+"";je.call(Ga,c)||(Ga[c]=[]),Ga[c].push({name:i,func:o})}}),Ga[Gi(r,b).name]=[{name:"wrapper",func:r}],Le.prototype.clone=Lp,Le.prototype.reverse=Pp,Le.prototype.value=wp,R.prototype.at=oR,R.prototype.chain=uR,R.prototype.commit=dR,R.prototype.next=cR,R.prototype.plant=fR,R.prototype.reverse=ER,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=vR,R.prototype.first=R.prototype.head,vl&&(R.prototype[vl]=mR),R}),Fa=dp();ta?((ta.exports=Fa)._=Fa,io._=Fa):Kn._=Fa}).call(vF)})(Gl,Gl.exports)),Gl.exports}gF();const VE=(e,...n)=>{const r=n.find(t=>t===e);if(!r)throw new Error(`Det finnes ikke enum for kode ${e}`);return r};zt(li);const h_=D.forwardRef((e,n)=>C.jsx(jt,{gap:"space-8",style:{display:"flex"},...e,ref:n}));h_.displayName="FaktaGruppe";h_.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var ku={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var BE;function _F(){return BE||(BE=1,(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(s=l(s,t.call(this,d)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var u="";for(var d in s)n.call(s,d)&&s[d]&&(u=l(u,this&&this[d]||d));return u}function l(s,u){return u?s?s+" "+u:s+u:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(ku)),ku.exports}var hF=_F();const p_=sd(hF),pF="_boks_nm7fe_1",TF="_harBorderLeft_nm7fe_8",RF="_harBorderTop_nm7fe_12",yF={boks:pF,harBorderLeft:TF,harBorderTop:RF};p_.bind(yF);function NF(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xE={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE;function AF(){if(UE)return wl;UE=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,l,s){var u=null;if(s!==void 0&&(u=""+s),l.key!==void 0&&(u=""+l.key),"key"in l){s={};for(var d in l)d!=="key"&&(s[d]=l[d])}else s=l;return l=s.ref,{$$typeof:e,type:t,key:u,ref:l!==void 0?l:null,props:s}}return wl.Fragment=n,wl.jsx=r,wl.jsxs=r,wl}var HE;function kF(){return HE||(HE=1,xE.exports=AF()),xE.exports}var Lr=kF();const bF="_autocompleteSuggestion__substring_1s9ip_1",SF="_autocompleteSuggestion__inner_1s9ip_4",Fl={autocompleteSuggestion__substring:bF,autocompleteSuggestion__inner:SF,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_1s9ip_12"};class OF extends g.Component{constructor(n){super(n),this.state={value:n.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:n}=this.props,{value:r}=this.state;n(r)}onMouseMove(){const{setSuggestionIndex:n,index:r}=this.props;n(r)}render(){const{match:n,active:r,avoidBlur:t,id:l}=this.props,{value:s}=this.state.value,u=s.toLowerCase().startsWith(n.toLowerCase());return Lr.jsx("li",{id:l,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:u?Lr.jsxs("span",{className:`${Fl.autocompleteSuggestion__inner} ${r?Fl["autocompleteSuggestion--active"]:""}`,children:[s.substring(0,n.length),Lr.jsx("span",{className:Fl.autocompleteSuggestion__substring,children:s.substring(n.length)})]}):Lr.jsx("span",{className:`${Fl.autocompleteSuggestion__inner} ${r?Fl["autocompleteSuggestion--active"]:""}`,children:s})})}}const DF="_autocomplete_cj8jr_1",IF="_autocomplete__suggestions_cj8jr_27",bu={autocomplete:DF,autocomplete__suggestions:IF,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_cj8jr_31"};class r5 extends g.Component{input;inputRef;constructor(n){super(n),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:n}=this.state;n&&(clearTimeout(n),this.setState({blurDelay:null}))}onChange(n){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(n)}onSearchButtonClick(n){const{onSearchButtonClick:r}=this.props;n.preventDefault(),r&&r()}onKeyDown(n){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:t}=this.state;const{suggestions:l}=this.props,s=t>-1;switch(this.setState({setAriaActiveDescendant:n.keyCode===38||n.keyCode===40}),n.keyCode){case 9:s&&r&&this.setValue(l[t]);break;case 13:s&&r?(n.preventDefault(),this.setValue(l[t])):r&&l.length===1?this.setValue(l[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&l.length>0&&(n.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(n.preventDefault(),t=t-1===-2?-1:t-1,this.setState({activeSuggestionIndex:t}));break;case 40:r&&(n.preventDefault(),t=t+1===l.length?l.length-1:t+1,this.setState({activeSuggestionIndex:t}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const n=setTimeout(()=>{const{shouldBlur:t}=this.state;t&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:n});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(n){this.setState({activeSuggestionIndex:n}),this.clearBlurDelay()}setValue(n){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(n)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:n}=this.state;n&&(clearTimeout(n),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:n,id:r,ariaLabel:t,placeholder:l,value:s,name:u,shouldFocusOnMount:d,isLoading:m}=this.props,{activeSuggestionIndex:E,setAriaActiveDescendant:f,hasFocus:v,shouldShowSuggestions:_}=this.state,T=v&&_&&n.length>0,k=f&&E>-1?`${r}-item-${E}`:void 0;return Lr.jsxs("div",{className:`${bu.autocomplete} autocomplete`,"aria-expanded":T,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[Lr.jsx(Bu,{variant:"primary",id:r,name:u,"aria-label":t,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":k,placeholder:l,value:s,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:O=>{this.inputRef=O},className:"typo-normal",autoFocus:d,label:t,hideLabel:!0,children:Lr.jsx(Bu.Button,{loading:m,onClick:this.onSearchButtonClick})}),Lr.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:T?bu.autocomplete__suggestions:bu["autocomplete__suggestions--hidden"],children:T&&n.map((O,p)=>Lr.jsx(OF,{id:`${r}-item-${p}`,index:p,value:O,match:s,active:p===E,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},O.key))})]})}}var Cu=function(e,n){return Cu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(r[l]=t[l])},Cu(e,n)};function Zt(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Cu(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var de=function(){return de=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},de.apply(this,arguments)};function Js(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r}function ir(e,n,r){if(arguments.length===2)for(var t=0,l=n.length,s;t<l;t++)(s||!(t in n))&&(s||(s=Array.prototype.slice.call(n,0,t)),s[t]=n[t]);return e.concat(s||Array.prototype.slice.call(n))}function ar(e,n){var r=n&&n.cache?n.cache:GF,t=n&&n.serializer?n.serializer:KF,l=n&&n.strategy?n.strategy:wF;return l(e,{cache:r,serializer:t})}function LF(e){return e==null||typeof e=="number"||typeof e=="boolean"}function PF(e,n,r,t){var l=LF(t)?t:r(t),s=n.get(l);return typeof s>"u"&&(s=e.call(this,t),n.set(l,s)),s}function T_(e,n,r){var t=Array.prototype.slice.call(arguments,3),l=r(t),s=n.get(l);return typeof s>"u"&&(s=e.apply(this,t),n.set(l,s)),s}function R_(e,n,r,t,l){return r.bind(n,e,t,l)}function wF(e,n){var r=e.length===1?PF:T_;return R_(e,this,r,n.cache.create(),n.serializer)}function FF(e,n){return R_(e,this,T_,n.cache.create(),n.serializer)}var KF=function(){return JSON.stringify(arguments)},MF=(function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(n){return this.cache[n]},e.prototype.set=function(n,r){this.cache[n]=r},e})(),GF={create:function(){return new MF}},lr={variadic:FF},Fe;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Fe||(Fe={}));var rn;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(rn||(rn={}));var ll;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(ll||(ll={}));function jE(e){return e.type===rn.literal}function VF(e){return e.type===rn.argument}function y_(e){return e.type===rn.number}function N_(e){return e.type===rn.date}function A_(e){return e.type===rn.time}function k_(e){return e.type===rn.select}function b_(e){return e.type===rn.plural}function BF(e){return e.type===rn.pound}function S_(e){return e.type===rn.tag}function O_(e){return!!(e&&typeof e=="object"&&e.type===ll.number)}function qu(e){return!!(e&&typeof e=="object"&&e.type===ll.dateTime)}var D_=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,xF=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function UF(e){var n={};return e.replace(xF,function(r){var t=r.length;switch(r[0]){case"G":n.era=t===4?"long":t===5?"narrow":"short";break;case"y":n.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][t-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][t-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][t-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][t-1];break;case"s":n.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var HF=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function jF(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var n=e.split(HF).filter(function(_){return _.length>0}),r=[],t=0,l=n;t<l.length;t++){var s=l[t],u=s.split("/");if(u.length===0)throw new Error("Invalid number skeleton");for(var d=u[0],m=u.slice(1),E=0,f=m;E<f.length;E++){var v=f[E];if(v.length===0)throw new Error("Invalid number skeleton")}r.push({stem:d,options:m})}return r}function CF(e){return e.replace(/^(.*?)-/,"")}var CE=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,I_=/^(@+)?(\+|#+)?[rs]?$/g,qF=/(\*)(0+)|(#+)(0+)|(0+)/g,L_=/^(0+)$/;function qE(e){var n={};return e[e.length-1]==="r"?n.roundingPriority="morePrecision":e[e.length-1]==="s"&&(n.roundingPriority="lessPrecision"),e.replace(I_,function(r,t,l){return typeof l!="string"?(n.minimumSignificantDigits=t.length,n.maximumSignificantDigits=t.length):l==="+"?n.minimumSignificantDigits=t.length:t[0]==="#"?n.maximumSignificantDigits=t.length:(n.minimumSignificantDigits=t.length,n.maximumSignificantDigits=t.length+(typeof l=="string"?l.length:0)),""}),n}function P_(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function YF(e){var n;if(e[0]==="E"&&e[1]==="E"?(n={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(n={notation:"scientific"},e=e.slice(1)),n){var r=e.slice(0,2);if(r==="+!"?(n.signDisplay="always",e=e.slice(2)):r==="+?"&&(n.signDisplay="exceptZero",e=e.slice(2)),!L_.test(e))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=e.length}return n}function YE(e){var n={},r=P_(e);return r||n}function $F(e){for(var n={},r=0,t=e;r<t.length;r++){var l=t[r];switch(l.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=l.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=CF(l.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=de(de(de({},n),{notation:"scientific"}),l.options.reduce(function(m,E){return de(de({},m),YE(E))},{}));continue;case"engineering":n=de(de(de({},n),{notation:"engineering"}),l.options.reduce(function(m,E){return de(de({},m),YE(E))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(l.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(l.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");l.options[0].replace(qF,function(m,E,f,v,_,T){if(E)n.minimumIntegerDigits=f.length;else{if(v&&_)throw new Error("We currently do not support maximum integer digits");if(T)throw new Error("We currently do not support exact integer digits")}return""});continue}if(L_.test(l.stem)){n.minimumIntegerDigits=l.stem.length;continue}if(CE.test(l.stem)){if(l.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");l.stem.replace(CE,function(m,E,f,v,_,T){return f==="*"?n.minimumFractionDigits=E.length:v&&v[0]==="#"?n.maximumFractionDigits=v.length:_&&T?(n.minimumFractionDigits=_.length,n.maximumFractionDigits=_.length+T.length):(n.minimumFractionDigits=E.length,n.maximumFractionDigits=E.length),""});var s=l.options[0];s==="w"?n=de(de({},n),{trailingZeroDisplay:"stripIfInteger"}):s&&(n=de(de({},n),qE(s)));continue}if(I_.test(l.stem)){n=de(de({},n),qE(l.stem));continue}var u=P_(l.stem);u&&(n=de(de({},n),u));var d=YF(l.stem);d&&(n=de(de({},n),d))}return n}var as={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function WF(e,n){for(var r="",t=0;t<e.length;t++){var l=e.charAt(t);if(l==="j"){for(var s=0;t+1<e.length&&e.charAt(t+1)===l;)s++,t++;var u=1+(s&1),d=s<2?1:3+(s>>1),m="a",E=JF(n);for((E=="H"||E=="k")&&(d=0);d-- >0;)r+=m;for(;u-- >0;)r=E+r}else l==="J"?r+="H":r+=l}return r}function JF(e){var n=e.hourCycle;if(n===void 0&&e.hourCycles&&e.hourCycles.length&&(n=e.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,t;r!=="root"&&(t=e.maximize().region);var l=as[t||""]||as[r||""]||as["".concat(r,"-001")]||as["001"];return l[0]}var Su,zF=new RegExp("^".concat(D_.source,"*")),XF=new RegExp("".concat(D_.source,"*$"));function Ke(e,n){return{start:e,end:n}}var ZF=!!String.prototype.startsWith&&"_a".startsWith("a",1),QF=!!String.fromCodePoint,eK=!!Object.fromEntries,nK=!!String.prototype.codePointAt,tK=!!String.prototype.trimStart,rK=!!String.prototype.trimEnd,aK=!!Number.isSafeInteger,lK=aK?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Yu=!0;try{var iK=F_("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Yu=((Su=iK.exec("a"))===null||Su===void 0?void 0:Su[0])==="a"}catch{Yu=!1}var $E=ZF?(function(e,n,r){return e.startsWith(n,r)}):(function(e,n,r){return e.slice(r,r+n.length)===n}),$u=QF?String.fromCodePoint:(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r="",t=e.length,l=0,s;t>l;){if(s=e[l++],s>1114111)throw RangeError(s+" is not a valid code point");r+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return r}),WE=eK?Object.fromEntries:(function(e){for(var n={},r=0,t=e;r<t.length;r++){var l=t[r],s=l[0],u=l[1];n[s]=u}return n}),w_=nK?(function(e,n){return e.codePointAt(n)}):(function(e,n){var r=e.length;if(!(n<0||n>=r)){var t=e.charCodeAt(n),l;return t<55296||t>56319||n+1===r||(l=e.charCodeAt(n+1))<56320||l>57343?t:(t-55296<<10)+(l-56320)+65536}}),sK=tK?(function(e){return e.trimStart()}):(function(e){return e.replace(zF,"")}),oK=rK?(function(e){return e.trimEnd()}):(function(e){return e.replace(XF,"")});function F_(e,n){return new RegExp(e,n)}var Wu;if(Yu){var JE=F_("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Wu=function(e,n){var r;JE.lastIndex=n;var t=JE.exec(e);return(r=t[1])!==null&&r!==void 0?r:""}}else Wu=function(e,n){for(var r=[];;){var t=w_(e,n);if(t===void 0||K_(t)||mK(t))break;r.push(t),n+=t>=65536?2:1}return $u.apply(void 0,r)};var uK=(function(){function e(n,r){r===void 0&&(r={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(n,r,t){for(var l=[];!this.isEOF();){var s=this.char();if(s===123){var u=this.parseArgument(n,t);if(u.err)return u;l.push(u.val)}else{if(s===125&&n>0)break;if(s===35&&(r==="plural"||r==="selectordinal")){var d=this.clonePosition();this.bump(),l.push({type:rn.pound,location:Ke(d,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(Fe.UNMATCHED_CLOSING_TAG,Ke(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Ju(this.peek()||0)){var u=this.parseTag(n,r);if(u.err)return u;l.push(u.val)}else{var u=this.parseLiteral(n,r);if(u.err)return u;l.push(u.val)}}}return{val:l,err:null}},e.prototype.parseTag=function(n,r){var t=this.clonePosition();this.bump();var l=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:rn.literal,value:"<".concat(l,"/>"),location:Ke(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(n+1,r,!0);if(s.err)return s;var u=s.val,d=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Ju(this.char()))return this.error(Fe.INVALID_TAG,Ke(d,this.clonePosition()));var m=this.clonePosition(),E=this.parseTagName();return l!==E?this.error(Fe.UNMATCHED_CLOSING_TAG,Ke(m,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:rn.tag,value:l,children:u,location:Ke(t,this.clonePosition())},err:null}:this.error(Fe.INVALID_TAG,Ke(d,this.clonePosition())))}else return this.error(Fe.UNCLOSED_TAG,Ke(t,this.clonePosition()))}else return this.error(Fe.INVALID_TAG,Ke(t,this.clonePosition()))},e.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&cK(this.char());)this.bump();return this.message.slice(n,this.offset())},e.prototype.parseLiteral=function(n,r){for(var t=this.clonePosition(),l="";;){var s=this.tryParseQuote(r);if(s){l+=s;continue}var u=this.tryParseUnquoted(n,r);if(u){l+=u;continue}var d=this.tryParseLeftAngleBracket();if(d){l+=d;continue}break}var m=Ke(t,this.clonePosition());return{val:{type:rn.literal,value:l,location:m},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!dK(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(t);this.bump()}return $u.apply(void 0,r)},e.prototype.tryParseUnquoted=function(n,r){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(r==="plural"||r==="selectordinal")||t===125&&n>0?null:(this.bump(),$u(t))},e.prototype.parseArgument=function(n,r){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Fe.EXPECT_ARGUMENT_CLOSING_BRACE,Ke(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Fe.EMPTY_ARGUMENT,Ke(t,this.clonePosition()));var l=this.parseIdentifierIfPossible().value;if(!l)return this.error(Fe.MALFORMED_ARGUMENT,Ke(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Fe.EXPECT_ARGUMENT_CLOSING_BRACE,Ke(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:rn.argument,value:l,location:Ke(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Fe.EXPECT_ARGUMENT_CLOSING_BRACE,Ke(t,this.clonePosition())):this.parseArgumentOptions(n,r,l,t);default:return this.error(Fe.MALFORMED_ARGUMENT,Ke(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),r=this.offset(),t=Wu(this.message,r),l=r+t.length;this.bumpTo(l);var s=this.clonePosition(),u=Ke(n,s);return{value:t,location:u}},e.prototype.parseArgumentOptions=function(n,r,t,l){var s,u=this.clonePosition(),d=this.parseIdentifierIfPossible().value,m=this.clonePosition();switch(d){case"":return this.error(Fe.EXPECT_ARGUMENT_TYPE,Ke(u,m));case"number":case"date":case"time":{this.bumpSpace();var E=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),v=this.parseSimpleArgStyleIfPossible();if(v.err)return v;var _=oK(v.val);if(_.length===0)return this.error(Fe.EXPECT_ARGUMENT_STYLE,Ke(this.clonePosition(),this.clonePosition()));var T=Ke(f,this.clonePosition());E={style:_,styleLocation:T}}var k=this.tryParseArgumentClose(l);if(k.err)return k;var O=Ke(l,this.clonePosition());if(E&&$E(E?.style,"::",0)){var p=sK(E.style.slice(2));if(d==="number"){var v=this.parseNumberSkeletonFromString(p,E.styleLocation);return v.err?v:{val:{type:rn.number,value:t,location:O,style:v.val},err:null}}else{if(p.length===0)return this.error(Fe.EXPECT_DATE_TIME_SKELETON,O);var b=p;this.locale&&(b=WF(p,this.locale));var _={type:ll.dateTime,pattern:b,location:E.styleLocation,parsedOptions:this.shouldParseSkeletons?UF(b):{}},S=d==="date"?rn.date:rn.time;return{val:{type:S,value:t,location:O,style:_},err:null}}}return{val:{type:d==="number"?rn.number:d==="date"?rn.date:rn.time,value:t,location:O,style:(s=E?.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var N=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Fe.EXPECT_SELECT_ARGUMENT_OPTIONS,Ke(N,de({},N)));this.bumpSpace();var L=this.parseIdentifierIfPossible(),y=0;if(d!=="select"&&L.value==="offset"){if(!this.bumpIf(":"))return this.error(Fe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ke(this.clonePosition(),this.clonePosition()));this.bumpSpace();var v=this.tryParseDecimalInteger(Fe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Fe.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(v.err)return v;this.bumpSpace(),L=this.parseIdentifierIfPossible(),y=v.val}var K=this.tryParsePluralOrSelectOptions(n,d,r,L);if(K.err)return K;var k=this.tryParseArgumentClose(l);if(k.err)return k;var F=Ke(l,this.clonePosition());return d==="select"?{val:{type:rn.select,value:t,options:WE(K.val),location:F},err:null}:{val:{type:rn.plural,value:t,options:WE(K.val),offset:y,pluralType:d==="plural"?"cardinal":"ordinal",location:F},err:null}}default:return this.error(Fe.INVALID_ARGUMENT_TYPE,Ke(u,m))}},e.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(Fe.EXPECT_ARGUMENT_CLOSING_BRACE,Ke(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,r=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var l=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Fe.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Ke(l,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(n,r){var t=[];try{t=jF(n)}catch{return this.error(Fe.INVALID_NUMBER_SKELETON,r)}return{val:{type:ll.number,tokens:t,location:r,parsedOptions:this.shouldParseSkeletons?$F(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(n,r,t,l){for(var s,u=!1,d=[],m=new Set,E=l.value,f=l.location;;){if(E.length===0){var v=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var _=this.tryParseDecimalInteger(Fe.EXPECT_PLURAL_ARGUMENT_SELECTOR,Fe.INVALID_PLURAL_ARGUMENT_SELECTOR);if(_.err)return _;f=Ke(v,this.clonePosition()),E=this.message.slice(v.offset,this.offset())}else break}if(m.has(E))return this.error(r==="select"?Fe.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Fe.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);E==="other"&&(u=!0),this.bumpSpace();var T=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?Fe.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Fe.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Ke(this.clonePosition(),this.clonePosition()));var k=this.parseMessage(n+1,r,t);if(k.err)return k;var O=this.tryParseArgumentClose(T);if(O.err)return O;d.push([E,{value:k.val,location:Ke(T,this.clonePosition())}]),m.add(E),this.bumpSpace(),s=this.parseIdentifierIfPossible(),E=s.value,f=s.location}return d.length===0?this.error(r==="select"?Fe.EXPECT_SELECT_ARGUMENT_SELECTOR:Fe.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ke(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!u?this.error(Fe.MISSING_OTHER_CLAUSE,Ke(this.clonePosition(),this.clonePosition())):{val:d,err:null}},e.prototype.tryParseDecimalInteger=function(n,r){var t=1,l=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var s=!1,u=0;!this.isEOF();){var d=this.char();if(d>=48&&d<=57)s=!0,u=u*10+(d-48),this.bump();else break}var m=Ke(l,this.clonePosition());return s?(u*=t,lK(u)?{val:u,err:null}:this.error(r,m)):this.error(n,m)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var r=w_(this.message,n);if(r===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(n,r){return{val:null,err:{kind:n,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},e.prototype.bumpIf=function(n){if($E(this.message,n,this.offset())){for(var r=0;r<n.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(n){var r=this.offset(),t=this.message.indexOf(n,r);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var r=this.offset();if(r===n)break;if(r>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&K_(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),r=this.offset(),t=this.message.charCodeAt(r+(n>=65536?2:1));return t??null},e})();function Ju(e){return e>=97&&e<=122||e>=65&&e<=90}function dK(e){return Ju(e)||e===47}function cK(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function K_(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function mK(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function zu(e){e.forEach(function(n){if(delete n.location,k_(n)||b_(n))for(var r in n.options)delete n.options[r].location,zu(n.options[r].value);else y_(n)&&O_(n.style)||(N_(n)||A_(n))&&qu(n.style)?delete n.style.location:S_(n)&&zu(n.children)})}function fK(e,n){n===void 0&&(n={}),n=de({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var r=new uK(e,n).parse();if(r.err){var t=SyntaxError(Fe[r.err.kind]);throw t.location=r.err.location,t.originalMessage=r.err.message,t}return n?.captureLocation||zu(r.val),r.val}var fr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(fr||(fr={}));var Xr=(function(e){Zt(n,e);function n(r,t,l){var s=e.call(this,r)||this;return s.code=t,s.originalMessage=l,s}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n})(Error),zE=(function(e){Zt(n,e);function n(r,t,l,s){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(t,'". Options are "').concat(Object.keys(l).join('", "'),'"'),fr.INVALID_VALUE,s)||this}return n})(Xr),EK=(function(e){Zt(n,e);function n(r,t,l){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(t),fr.INVALID_VALUE,l)||this}return n})(Xr),vK=(function(e){Zt(n,e);function n(r,t){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(t,'"'),fr.MISSING_VALUE,t)||this}return n})(Xr),Wn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Wn||(Wn={}));function gK(e){return e.length<2?e:e.reduce(function(n,r){var t=n[n.length-1];return!t||t.type!==Wn.literal||r.type!==Wn.literal?n.push(r):t.value+=r.value,n},[])}function M_(e){return typeof e=="function"}function hs(e,n,r,t,l,s,u){if(e.length===1&&jE(e[0]))return[{type:Wn.literal,value:e[0].value}];for(var d=[],m=0,E=e;m<E.length;m++){var f=E[m];if(jE(f)){d.push({type:Wn.literal,value:f.value});continue}if(BF(f)){typeof s=="number"&&d.push({type:Wn.literal,value:r.getNumberFormat(n).format(s)});continue}var v=f.value;if(!(l&&v in l))throw new vK(v,u);var _=l[v];if(VF(f)){(!_||typeof _=="string"||typeof _=="number")&&(_=typeof _=="string"||typeof _=="number"?String(_):""),d.push({type:typeof _=="string"?Wn.literal:Wn.object,value:_});continue}if(N_(f)){var T=typeof f.style=="string"?t.date[f.style]:qu(f.style)?f.style.parsedOptions:void 0;d.push({type:Wn.literal,value:r.getDateTimeFormat(n,T).format(_)});continue}if(A_(f)){var T=typeof f.style=="string"?t.time[f.style]:qu(f.style)?f.style.parsedOptions:t.time.medium;d.push({type:Wn.literal,value:r.getDateTimeFormat(n,T).format(_)});continue}if(y_(f)){var T=typeof f.style=="string"?t.number[f.style]:O_(f.style)?f.style.parsedOptions:void 0;T&&T.scale&&(_=_*(T.scale||1)),d.push({type:Wn.literal,value:r.getNumberFormat(n,T).format(_)});continue}if(S_(f)){var k=f.children,O=f.value,p=l[O];if(!M_(p))throw new EK(O,"function",u);var b=hs(k,n,r,t,l,s),S=p(b.map(function(y){return y.value}));Array.isArray(S)||(S=[S]),d.push.apply(d,S.map(function(y){return{type:typeof y=="string"?Wn.literal:Wn.object,value:y}}))}if(k_(f)){var N=f.options[_]||f.options.other;if(!N)throw new zE(f.value,_,Object.keys(f.options),u);d.push.apply(d,hs(N.value,n,r,t,l));continue}if(b_(f)){var N=f.options["=".concat(_)];if(!N){if(!Intl.PluralRules)throw new Xr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,fr.MISSING_INTL_API,u);var L=r.getPluralRules(n,{type:f.pluralType}).select(_-(f.offset||0));N=f.options[L]||f.options.other}if(!N)throw new zE(f.value,_,Object.keys(f.options),u);d.push.apply(d,hs(N.value,n,r,t,l,_-(f.offset||0)));continue}}return gK(d)}function _K(e,n){return n?de(de(de({},e||{}),n||{}),Object.keys(e).reduce(function(r,t){return r[t]=de(de({},e[t]),n[t]||{}),r},{})):e}function hK(e,n){return n?Object.keys(e).reduce(function(r,t){return r[t]=_K(e[t],n[t]),r},de({},e)):e}function Ou(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,r){e[n]=r}}}}}function pK(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ar(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.NumberFormat).bind.apply(n,ir([void 0],r,!1)))},{cache:Ou(e.number),strategy:lr.variadic}),getDateTimeFormat:ar(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.DateTimeFormat).bind.apply(n,ir([void 0],r,!1)))},{cache:Ou(e.dateTime),strategy:lr.variadic}),getPluralRules:ar(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.PluralRules).bind.apply(n,ir([void 0],r,!1)))},{cache:Ou(e.pluralRules),strategy:lr.variadic})}}var G_=(function(){function e(n,r,t,l){r===void 0&&(r=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(m){var E=s.formatToParts(m);if(E.length===1)return E[0].value;var f=E.reduce(function(v,_){return!v.length||_.type!==Wn.literal||typeof v[v.length-1]!="string"?v.push(_.value):v[v.length-1]+=_.value,v},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(m){return hs(s.ast,s.locales,s.formatters,s.formats,m,void 0,s.message)},this.resolvedOptions=function(){var m;return{locale:((m=s.resolvedLocale)===null||m===void 0?void 0:m.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof n=="string"){if(this.message=n,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=l||{};u.formatters;var d=Js(u,["formatters"]);this.ast=e.__parse(n,de(de({},d),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=hK(e.formats,t),this.formatters=l&&l.formatters||pK(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(n);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},e.__parse=fK,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e})(),Na;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Na||(Na={}));var ii=(function(e){Zt(n,e);function n(r,t,l){var s=this,u=l?l instanceof Error?l:new Error(String(l)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(t,`
`).concat(u?`
`.concat(u.message,`
`).concat(u.stack):""))||this,s.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,n),s}return n})(Error),TK=(function(e){Zt(n,e);function n(r,t){return e.call(this,Na.UNSUPPORTED_FORMATTER,r,t)||this}return n})(ii),RK=(function(e){Zt(n,e);function n(r,t){return e.call(this,Na.INVALID_CONFIG,r,t)||this}return n})(ii),XE=(function(e){Zt(n,e);function n(r,t){return e.call(this,Na.MISSING_DATA,r,t)||this}return n})(ii),Mt=(function(e){Zt(n,e);function n(r,t,l){var s=e.call(this,Na.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(t,`
`),l)||this;return s.locale=t,s}return n})(ii),Du=(function(e){Zt(n,e);function n(r,t,l,s){var u=e.call(this,"".concat(r,`
MessageID: `).concat(l?.id,`
Default Message: `).concat(l?.defaultMessage,`
Description: `).concat(l?.description,`
`),t,s)||this;return u.descriptor=l,u.locale=t,u}return n})(Mt),yK=(function(e){Zt(n,e);function n(r,t){var l=e.call(this,Na.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(t,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(s){var u;return(u=s.value)!==null&&u!==void 0?u:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return l.descriptor=r,l}return n})(ii);function NK(e,n,r){if(r===void 0&&(r=Error),!e)throw new r(n)}function ml(e,n,r){return r===void 0&&(r={}),n.reduce(function(t,l){return l in e?t[l]=e[l]:l in r&&(t[l]=r[l]),t},{})}var AK=function(e){},kK=function(e){},V_={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:AK,onWarn:kK};function B_(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function ca(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,r){e[n]=r}}}}}function bK(e){e===void 0&&(e=B_());var n=Intl.RelativeTimeFormat,r=Intl.ListFormat,t=Intl.DisplayNames,l=ar(function(){for(var d,m=[],E=0;E<arguments.length;E++)m[E]=arguments[E];return new((d=Intl.DateTimeFormat).bind.apply(d,ir([void 0],m,!1)))},{cache:ca(e.dateTime),strategy:lr.variadic}),s=ar(function(){for(var d,m=[],E=0;E<arguments.length;E++)m[E]=arguments[E];return new((d=Intl.NumberFormat).bind.apply(d,ir([void 0],m,!1)))},{cache:ca(e.number),strategy:lr.variadic}),u=ar(function(){for(var d,m=[],E=0;E<arguments.length;E++)m[E]=arguments[E];return new((d=Intl.PluralRules).bind.apply(d,ir([void 0],m,!1)))},{cache:ca(e.pluralRules),strategy:lr.variadic});return{getDateTimeFormat:l,getNumberFormat:s,getMessageFormat:ar(function(d,m,E,f){return new G_(d,m,E,de({formatters:{getNumberFormat:s,getDateTimeFormat:l,getPluralRules:u}},f||{}))},{cache:ca(e.message),strategy:lr.variadic}),getRelativeTimeFormat:ar(function(){for(var d=[],m=0;m<arguments.length;m++)d[m]=arguments[m];return new(n.bind.apply(n,ir([void 0],d,!1)))},{cache:ca(e.relativeTime),strategy:lr.variadic}),getPluralRules:u,getListFormat:ar(function(){for(var d=[],m=0;m<arguments.length;m++)d[m]=arguments[m];return new(r.bind.apply(r,ir([void 0],d,!1)))},{cache:ca(e.list),strategy:lr.variadic}),getDisplayNames:ar(function(){for(var d=[],m=0;m<arguments.length;m++)d[m]=arguments[m];return new(t.bind.apply(t,ir([void 0],d,!1)))},{cache:ca(e.displayNames),strategy:lr.variadic})}}function Hd(e,n,r,t){var l=e&&e[n],s;if(l&&(s=l[r]),s)return s;t(new TK("No ".concat(n," format named: ").concat(r)))}function ls(e,n){return Object.keys(e).reduce(function(r,t){return r[t]=de({timeZone:n},e[t]),r},{})}function ZE(e,n){var r=Object.keys(de(de({},e),n));return r.reduce(function(t,l){return t[l]=de(de({},e[l]||{}),n[l]||{}),t},{})}function QE(e,n){if(!n)return e;var r=G_.formats;return de(de(de({},r),e),{date:ZE(ls(r.date,n),ls(e.date||{},n)),time:ZE(ls(r.time,n),ls(e.time||{},n))})}var Xu=function(e,n,r,t,l){var s=e.locale,u=e.formats,d=e.messages,m=e.defaultLocale,E=e.defaultFormats,f=e.fallbackOnEmptyString,v=e.onError,_=e.timeZone,T=e.defaultRichTextElements;r===void 0&&(r={id:""});var k=r.id,O=r.defaultMessage;NK(!!k,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var p=String(k),b=d&&Object.prototype.hasOwnProperty.call(d,p)&&d[p];if(Array.isArray(b)&&b.length===1&&b[0].type===rn.literal)return b[0].value;if(!t&&b&&typeof b=="string"&&!T)return b.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=de(de({},T),t||{}),u=QE(u,_),E=QE(E,_),!b){if(f===!1&&b==="")return b;if((!O||s&&s.toLowerCase()!==m.toLowerCase())&&v(new yK(r,s)),O)try{var S=n.getMessageFormat(O,m,E,l);return S.format(t)}catch(N){return v(new Du('Error formatting default message for: "'.concat(p,'", rendering default message verbatim'),s,r,N)),typeof O=="string"?O:p}return p}try{var S=n.getMessageFormat(b,s,u,de({formatters:n},l||{}));return S.format(t)}catch(N){v(new Du('Error formatting message: "'.concat(p,'", using ').concat(O?"default message":"id"," as fallback."),s,r,N))}if(O)try{var S=n.getMessageFormat(O,m,E,l);return S.format(t)}catch(N){v(new Du('Error formatting the default message for: "'.concat(p,'", rendering message verbatim'),s,r,N))}return typeof b=="string"?b:typeof O=="string"?O:p},SK=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function si(e,n,r,t){var l=e.locale,s=e.formats,u=e.onError,d=e.timeZone;t===void 0&&(t={});var m=t.format,E=de(de({},d&&{timeZone:d}),m&&Hd(s,n,m,u)),f=ml(t,SK,E);return n==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=de(de({},f),{hour:"numeric",minute:"numeric"})),r(l,f)}function OK(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var l=r[0],s=r[1],u=s===void 0?{}:s,d=typeof l=="string"?new Date(l||0):l;try{return si(e,"date",n,u).format(d)}catch(m){e.onError(new Mt("Error formatting date.",e.locale,m))}return String(d)}function DK(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var l=r[0],s=r[1],u=s===void 0?{}:s,d=typeof l=="string"?new Date(l||0):l;try{return si(e,"time",n,u).format(d)}catch(m){e.onError(new Mt("Error formatting time.",e.locale,m))}return String(d)}function IK(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var l=r[0],s=r[1],u=r[2],d=u===void 0?{}:u,m=typeof l=="string"?new Date(l||0):l,E=typeof s=="string"?new Date(s||0):s;try{return si(e,"dateTimeRange",n,d).formatRange(m,E)}catch(f){e.onError(new Mt("Error formatting date time range.",e.locale,f))}return String(m)}function LK(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var l=r[0],s=r[1],u=s===void 0?{}:s,d=typeof l=="string"?new Date(l||0):l;try{return si(e,"date",n,u).formatToParts(d)}catch(m){e.onError(new Mt("Error formatting date.",e.locale,m))}return[]}function PK(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var l=r[0],s=r[1],u=s===void 0?{}:s,d=typeof l=="string"?new Date(l||0):l;try{return si(e,"time",n,u).formatToParts(d)}catch(m){e.onError(new Mt("Error formatting time.",e.locale,m))}return[]}var wK=["style","type","fallback","languageDisplay"];function FK(e,n,r,t){var l=e.locale,s=e.onError,u=Intl.DisplayNames;u||s(new Xr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,fr.MISSING_INTL_API));var d=ml(t,wK);try{return n(l,d).of(r)}catch(m){s(new Mt("Error formatting display name.",l,m))}}var KK=["type","style"],ev=Date.now();function MK(e){return"".concat(ev,"_").concat(e,"_").concat(ev)}function GK(e,n,r,t){t===void 0&&(t={});var l=x_(e,n,r,t).reduce(function(s,u){var d=u.value;return typeof d!="string"?s.push(d):typeof s[s.length-1]=="string"?s[s.length-1]+=d:s.push(d),s},[]);return l.length===1?l[0]:l.length===0?"":l}function x_(e,n,r,t){var l=e.locale,s=e.onError;t===void 0&&(t={});var u=Intl.ListFormat;u||s(new Xr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,fr.MISSING_INTL_API));var d=ml(t,KK);try{var m={},E=r.map(function(f,v){if(typeof f=="object"){var _=MK(v);return m[_]=f,_}return String(f)});return n(l,d).formatToParts(E).map(function(f){return f.type==="literal"?f:de(de({},f),{value:m[f.value]||f.value})})}catch(f){s(new Mt("Error formatting list.",l,f))}return r}var VK=["type"];function BK(e,n,r,t){var l=e.locale,s=e.onError;t===void 0&&(t={}),Intl.PluralRules||s(new Xr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,fr.MISSING_INTL_API));var u=ml(t,VK);try{return n(l,u).select(r)}catch(d){s(new Mt("Error formatting plural.",l,d))}return"other"}var xK=["numeric","style"];function UK(e,n,r){var t=e.locale,l=e.formats,s=e.onError;r===void 0&&(r={});var u=r.format,d=!!u&&Hd(l,"relative",u,s)||{},m=ml(r,xK,d);return n(t,m)}function HK(e,n,r,t,l){l===void 0&&(l={}),t||(t="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Xr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,fr.MISSING_INTL_API));try{return UK(e,n,l).format(r,t)}catch(u){e.onError(new Mt("Error formatting relative time.",e.locale,u))}return String(r)}var jK=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function U_(e,n,r){var t=e.locale,l=e.formats,s=e.onError;r===void 0&&(r={});var u=r.format,d=u&&Hd(l,"number",u,s)||{},m=ml(r,jK,d);return n(t,m)}function CK(e,n,r,t){t===void 0&&(t={});try{return U_(e,n,t).format(r)}catch(l){e.onError(new Mt("Error formatting number.",e.locale,l))}return String(r)}function qK(e,n,r,t){t===void 0&&(t={});try{return U_(e,n,t).formatToParts(r)}catch(l){e.onError(new Mt("Error formatting number.",e.locale,l))}return[]}function YK(e){var n=e?e[Object.keys(e)[0]]:void 0;return typeof n=="string"}function $K(e){e.onWarn&&e.defaultRichTextElements&&YK(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function WK(e,n){var r=bK(n),t=de(de({},V_),e),l=t.locale,s=t.defaultLocale,u=t.onError;return l?!Intl.NumberFormat.supportedLocalesOf(l).length&&u?u(new XE('Missing locale data for locale: "'.concat(l,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(l).length&&u&&u(new XE('Missing locale data for locale: "'.concat(l,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(u&&u(new RK('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),$K(t),de(de({},t),{formatters:r,formatNumber:CK.bind(null,t,r.getNumberFormat),formatNumberToParts:qK.bind(null,t,r.getNumberFormat),formatRelativeTime:HK.bind(null,t,r.getRelativeTimeFormat),formatDate:OK.bind(null,t,r.getDateTimeFormat),formatDateToParts:LK.bind(null,t,r.getDateTimeFormat),formatTime:DK.bind(null,t,r.getDateTimeFormat),formatDateTimeRange:IK.bind(null,t,r.getDateTimeFormat),formatTimeToParts:PK.bind(null,t,r.getDateTimeFormat),formatPlural:BK.bind(null,t,r.getPluralRules),formatMessage:Xu.bind(null,t,r),$t:Xu.bind(null,t,r),formatList:GK.bind(null,t,r.getListFormat),formatListToParts:x_.bind(null,t,r.getListFormat),formatDisplayName:FK.bind(null,t,r.getDisplayNames)})}function JK(e,n,r){if(r===void 0&&(r=Error),!e)throw new r(n)}function zK(e){JK(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var XK=de(de({},V_),{textComponent:D.Fragment}),ZK={key:42},QK=function(e){return D.isValidElement(e)?D.createElement(D.Fragment,ZK,e):e},eM=function(e){var n;return(n=D.Children.map(e,QK))!==null&&n!==void 0?n:[]};function nM(e){return function(n){return e(D.Children.toArray(n))}}var nv={exports:{}},He={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function tM(){if(tv)return He;tv=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,l=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,m=e?Symbol.for("react.async_mode"):60111,E=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,_=e?Symbol.for("react.suspense_list"):60120,T=e?Symbol.for("react.memo"):60115,k=e?Symbol.for("react.lazy"):60116,O=e?Symbol.for("react.block"):60121,p=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function N(y){if(typeof y=="object"&&y!==null){var K=y.$$typeof;switch(K){case n:switch(y=y.type,y){case m:case E:case t:case s:case l:case v:return y;default:switch(y=y&&y.$$typeof,y){case d:case f:case k:case T:case u:return y;default:return K}}case r:return K}}}function L(y){return N(y)===E}return He.AsyncMode=m,He.ConcurrentMode=E,He.ContextConsumer=d,He.ContextProvider=u,He.Element=n,He.ForwardRef=f,He.Fragment=t,He.Lazy=k,He.Memo=T,He.Portal=r,He.Profiler=s,He.StrictMode=l,He.Suspense=v,He.isAsyncMode=function(y){return L(y)||N(y)===m},He.isConcurrentMode=L,He.isContextConsumer=function(y){return N(y)===d},He.isContextProvider=function(y){return N(y)===u},He.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===n},He.isForwardRef=function(y){return N(y)===f},He.isFragment=function(y){return N(y)===t},He.isLazy=function(y){return N(y)===k},He.isMemo=function(y){return N(y)===T},He.isPortal=function(y){return N(y)===r},He.isProfiler=function(y){return N(y)===s},He.isStrictMode=function(y){return N(y)===l},He.isSuspense=function(y){return N(y)===v},He.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===t||y===E||y===s||y===l||y===v||y===_||typeof y=="object"&&y!==null&&(y.$$typeof===k||y.$$typeof===T||y.$$typeof===u||y.$$typeof===d||y.$$typeof===f||y.$$typeof===p||y.$$typeof===b||y.$$typeof===S||y.$$typeof===O)},He.typeOf=N,He}var rv;function rM(){return rv||(rv=1,nv.exports=tM()),nv.exports}var Iu,av;function aM(){if(av)return Iu;av=1;var e=rM(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=t,s[e.Memo]=l;function u(k){return e.isMemo(k)?l:s[k.$$typeof]||n}var d=Object.defineProperty,m=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,_=Object.prototype;function T(k,O,p){if(typeof O!="string"){if(_){var b=v(O);b&&b!==_&&T(k,b,p)}var S=m(O);E&&(S=S.concat(E(O)));for(var N=u(k),L=u(O),y=0;y<S.length;++y){var K=S[y];if(!r[K]&&!(p&&p[K])&&!(L&&L[K])&&!(N&&N[K])){var F=f(O,K);try{d(k,K,F)}catch{}}}}return k}return Iu=T,Iu}aM();var jd=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=D.createContext(null)):D.createContext(null);jd.Consumer;jd.Provider;var lM=jd;function H_(){var e=D.useContext(lM);return zK(e),e}var Zu;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Zu||(Zu={}));var Qu;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Qu||(Qu={}));function j_(e){var n=function(r){var t=H_(),l=r.value,s=r.children,u=Js(r,["value","children"]),d=typeof l=="string"?new Date(l||0):l,m=e==="formatDate"?t.formatDateToParts(d,u):t.formatTimeToParts(d,u);return s(m)};return n.displayName=Qu[e],n}function oi(e){var n=function(r){var t=H_(),l=r.value,s=r.children,u=Js(r,["value","children"]),d=t[e](l,u);if(typeof s=="function")return s(d);var m=t.textComponent||D.Fragment;return D.createElement(m,null,d)};return n.displayName=Zu[e],n}function C_(e){return e&&Object.keys(e).reduce(function(n,r){var t=e[r];return n[r]=M_(t)?nM(t):t,n},{})}var lv=function(e,n,r,t){for(var l=[],s=4;s<arguments.length;s++)l[s-4]=arguments[s];var u=C_(t),d=Xu.apply(void 0,ir([e,n,r,u],l,!1));return Array.isArray(d)?eM(d):d},iM=function(e,n){var r=e.defaultRichTextElements,t=Js(e,["defaultRichTextElements"]),l=C_(r),s=WK(de(de(de({},XK),t),{defaultRichTextElements:l}),n),u={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:l};return de(de({},s),{formatMessage:lv.bind(null,u,s.formatters),$t:lv.bind(null,u,s.formatters)})};oi("formatDate");oi("formatTime");oi("formatNumber");oi("formatList");oi("formatDisplayName");j_("formatDate");j_("formatTime");function Cd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ed={exports:{}},sM=ed.exports,iv;function oM(){return iv||(iv=1,(function(e,n){(function(r,t){e.exports=t()})(sM,function(){var r,t,l=1e3,s=6e4,u=36e5,d=864e5,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E=31536e6,f=2628e6,v=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,_={years:E,months:f,days:d,hours:u,minutes:s,seconds:l,milliseconds:1,weeks:6048e5},T=function(K){return K instanceof L},k=function(K,F,G){return new L(K,G,F.$l)},O=function(K){return t.p(K)+"s"},p=function(K){return K<0},b=function(K){return p(K)?Math.ceil(K):Math.floor(K)},S=function(K){return Math.abs(K)},N=function(K,F){return K?p(K)?{negative:!0,format:""+S(K)+F}:{negative:!1,format:""+K+F}:{negative:!1,format:""}},L=(function(){function K(G,H,W){var Y=this;if(this.$d={},this.$l=W,G===void 0&&(this.$ms=0,this.parseFromMilliseconds()),H)return k(G*_[O(H)],this);if(typeof G=="number")return this.$ms=G,this.parseFromMilliseconds(),this;if(typeof G=="object")return Object.keys(G).forEach(function(X){Y.$d[O(X)]=G[X]}),this.calMilliseconds(),this;if(typeof G=="string"){var x=G.match(v);if(x){var V=x.slice(2).map(function(X){return X!=null?Number(X):0});return this.$d.years=V[0],this.$d.months=V[1],this.$d.weeks=V[2],this.$d.days=V[3],this.$d.hours=V[4],this.$d.minutes=V[5],this.$d.seconds=V[6],this.calMilliseconds(),this}}return this}var F=K.prototype;return F.calMilliseconds=function(){var G=this;this.$ms=Object.keys(this.$d).reduce(function(H,W){return H+(G.$d[W]||0)*_[W]},0)},F.parseFromMilliseconds=function(){var G=this.$ms;this.$d.years=b(G/E),G%=E,this.$d.months=b(G/f),G%=f,this.$d.days=b(G/d),G%=d,this.$d.hours=b(G/u),G%=u,this.$d.minutes=b(G/s),G%=s,this.$d.seconds=b(G/l),G%=l,this.$d.milliseconds=G},F.toISOString=function(){var G=N(this.$d.years,"Y"),H=N(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var Y=N(W,"D"),x=N(this.$d.hours,"H"),V=N(this.$d.minutes,"M"),X=this.$d.seconds||0;this.$d.milliseconds&&(X+=this.$d.milliseconds/1e3,X=Math.round(1e3*X)/1e3);var ne=N(X,"S"),te=G.negative||H.negative||Y.negative||x.negative||V.negative||ne.negative,se=x.format||V.format||ne.format?"T":"",Q=(te?"-":"")+"P"+G.format+H.format+Y.format+se+x.format+V.format+ne.format;return Q==="P"||Q==="-P"?"P0D":Q},F.toJSON=function(){return this.toISOString()},F.format=function(G){var H=G||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return H.replace(m,function(Y,x){return x||String(W[Y])})},F.as=function(G){return this.$ms/_[O(G)]},F.get=function(G){var H=this.$ms,W=O(G);return W==="milliseconds"?H%=1e3:H=W==="weeks"?b(H/_[W]):this.$d[W],H||0},F.add=function(G,H,W){var Y;return Y=H?G*_[O(H)]:T(G)?G.$ms:k(G,this).$ms,k(this.$ms+Y*(W?-1:1),this)},F.subtract=function(G,H){return this.add(G,H,!0)},F.locale=function(G){var H=this.clone();return H.$l=G,H},F.clone=function(){return k(this.$ms,this)},F.humanize=function(G){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!G)},F.valueOf=function(){return this.asMilliseconds()},F.milliseconds=function(){return this.get("milliseconds")},F.asMilliseconds=function(){return this.as("milliseconds")},F.seconds=function(){return this.get("seconds")},F.asSeconds=function(){return this.as("seconds")},F.minutes=function(){return this.get("minutes")},F.asMinutes=function(){return this.as("minutes")},F.hours=function(){return this.get("hours")},F.asHours=function(){return this.as("hours")},F.days=function(){return this.get("days")},F.asDays=function(){return this.as("days")},F.weeks=function(){return this.get("weeks")},F.asWeeks=function(){return this.as("weeks")},F.months=function(){return this.get("months")},F.asMonths=function(){return this.as("months")},F.years=function(){return this.get("years")},F.asYears=function(){return this.as("years")},K})(),y=function(K,F,G){return K.add(F.years()*G,"y").add(F.months()*G,"M").add(F.days()*G,"d").add(F.hours()*G,"h").add(F.minutes()*G,"m").add(F.seconds()*G,"s").add(F.milliseconds()*G,"ms")};return function(K,F,G){r=G,t=G().$utils(),G.duration=function(Y,x){var V=G.locale();return k(Y,{$l:V},x)},G.isDuration=T;var H=F.prototype.add,W=F.prototype.subtract;F.prototype.add=function(Y,x){return T(Y)?y(this,Y,1):H.bind(this)(Y,x)},F.prototype.subtract=function(Y,x){return T(Y)?y(this,Y,-1):W.bind(this)(Y,x)}}})})(ed)),ed.exports}var uM=oM();const dM=Cd(uM);var nd={exports:{}},cM=nd.exports,sv;function mM(){return sv||(sv=1,(function(e,n){(function(r,t){e.exports=t()})(cM,function(){var r="day";return function(t,l,s){var u=function(E){return E.add(4-E.isoWeekday(),r)},d=l.prototype;d.isoWeekYear=function(){return u(this).year()},d.isoWeek=function(E){if(!this.$utils().u(E))return this.add(7*(E-this.isoWeek()),r);var f,v,_,T,k=u(this),O=(f=this.isoWeekYear(),v=this.$u,_=(v?s.utc:s)().year(f).startOf("year"),T=4-_.isoWeekday(),_.isoWeekday()>4&&(T+=7),_.add(T,r));return k.diff(O,"week")+1},d.isoWeekday=function(E){return this.$utils().u(E)?this.day()||7:this.day(this.day()%7?E:E-7)};var m=d.startOf;d.startOf=function(E,f){var v=this.$utils(),_=!!v.u(f)||f;return v.p(E)==="isoweek"?_?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):m.bind(this)(E,f)}}})})(nd)),nd.exports}var fM=mM();const EM=Cd(fM);var td={exports:{}},vM=td.exports,ov;function gM(){return ov||(ov=1,(function(e,n){(function(r,t){e.exports=t()})(vM,function(){var r="minute",t=/[+-]\d\d(?::?\d\d)?/g,l=/([+-]|\d\d)/g;return function(s,u,d){var m=u.prototype;d.utc=function(O){var p={date:O,utc:!0,args:arguments};return new u(p)},m.utc=function(O){var p=d(this.toDate(),{locale:this.$L,utc:!0});return O?p.add(this.utcOffset(),r):p},m.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var E=m.parse;m.parse=function(O){O.utc&&(this.$u=!0),this.$utils().u(O.$offset)||(this.$offset=O.$offset),E.call(this,O)};var f=m.init;m.init=function(){if(this.$u){var O=this.$d;this.$y=O.getUTCFullYear(),this.$M=O.getUTCMonth(),this.$D=O.getUTCDate(),this.$W=O.getUTCDay(),this.$H=O.getUTCHours(),this.$m=O.getUTCMinutes(),this.$s=O.getUTCSeconds(),this.$ms=O.getUTCMilliseconds()}else f.call(this)};var v=m.utcOffset;m.utcOffset=function(O,p){var b=this.$utils().u;if(b(O))return this.$u?0:b(this.$offset)?v.call(this):this.$offset;if(typeof O=="string"&&(O=(function(y){y===void 0&&(y="");var K=y.match(t);if(!K)return null;var F=(""+K[0]).match(l)||["-",0,0],G=F[0],H=60*+F[1]+ +F[2];return H===0?0:G==="+"?H:-H})(O),O===null))return this;var S=Math.abs(O)<=16?60*O:O;if(S===0)return this.utc(p);var N=this.clone();if(p)return N.$offset=S,N.$u=!1,N;var L=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(N=this.local().add(S+L,r)).$offset=S,N.$x.$localOffset=L,N};var _=m.format;m.format=function(O){var p=O||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return _.call(this,p)},m.valueOf=function(){var O=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*O},m.isUTC=function(){return!!this.$u},m.toISOString=function(){return this.toDate().toISOString()},m.toString=function(){return this.toDate().toUTCString()};var T=m.toDate;m.toDate=function(O){return O==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():T.call(this)};var k=m.diff;m.diff=function(O,p,b){if(O&&this.$u===O.$u)return k.call(this,O,p,b);var S=this.local(),N=d(O).local();return k.call(S,N,p,b)}}})})(td)),td.exports}var _M=gM();const hM=Cd(_M),pM=B_(),zs=e=>iM({locale:"nb-NO",messages:e},pM),Xs={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};zs(Xs);var rd={exports:{}},TM=rd.exports,uv;function RM(){return uv||(uv=1,(function(e,n){(function(r,t){e.exports=t(mn)})(TM,function(r){function t(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var l=t(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return l.default.locale(s,null,!0),s})})(rd)),rd.exports}RM();mn.extend(hM);mn.extend(EM);mn.extend(dM);zs(Xs);zs(Xs);var dv={exports:{}},Kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function yM(){if(cv)return Kl;cv=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,l,s){var u=null;if(s!==void 0&&(u=""+s),l.key!==void 0&&(u=""+l.key),"key"in l){s={};for(var d in l)d!=="key"&&(s[d]=l[d])}else s=l;return l=s.ref,{$$typeof:e,type:t,key:u,ref:l!==void 0?l:null,props:s}}return Kl.Fragment=n,Kl.jsx=r,Kl.jsxs=r,Kl}var mv;function NM(){return mv||(mv=1,dv.exports=yM()),dv.exports}NM();zs(Xs);D.createContext({});var ad={exports:{}},AM=ad.exports,fv;function kM(){return fv||(fv=1,(function(e,n){(function(r,t){e.exports=t()})(AM,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d/,s=/\d\d/,u=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,m={},E=function(p){return(p=+p)+(p>68?1900:2e3)},f=function(p){return function(b){this[p]=+b}},v=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=(function(b){if(!b||b==="Z")return 0;var S=b.match(/([+-]|\d\d)/g),N=60*S[1]+(+S[2]||0);return N===0?0:S[0]==="+"?-N:N})(p)}],_=function(p){var b=m[p];return b&&(b.indexOf?b:b.s.concat(b.f))},T=function(p,b){var S,N=m.meridiem;if(N){for(var L=1;L<=24;L+=1)if(p.indexOf(N(L,0,b))>-1){S=L>12;break}}else S=p===(b?"pm":"PM");return S},k={A:[d,function(p){this.afternoon=T(p,!1)}],a:[d,function(p){this.afternoon=T(p,!0)}],Q:[l,function(p){this.month=3*(p-1)+1}],S:[l,function(p){this.milliseconds=100*+p}],SS:[s,function(p){this.milliseconds=10*+p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[u,f("seconds")],ss:[u,f("seconds")],m:[u,f("minutes")],mm:[u,f("minutes")],H:[u,f("hours")],h:[u,f("hours")],HH:[u,f("hours")],hh:[u,f("hours")],D:[u,f("day")],DD:[s,f("day")],Do:[d,function(p){var b=m.ordinal,S=p.match(/\d+/);if(this.day=S[0],b)for(var N=1;N<=31;N+=1)b(N).replace(/\[|\]/g,"")===p&&(this.day=N)}],w:[u,f("week")],ww:[s,f("week")],M:[u,f("month")],MM:[s,f("month")],MMM:[d,function(p){var b=_("months"),S=(_("monthsShort")||b.map(function(N){return N.slice(0,3)})).indexOf(p)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[d,function(p){var b=_("months").indexOf(p)+1;if(b<1)throw new Error;this.month=b%12||b}],Y:[/[+-]?\d+/,f("year")],YY:[s,function(p){this.year=E(p)}],YYYY:[/\d{4}/,f("year")],Z:v,ZZ:v};function O(p){var b,S;b=p,S=m&&m.formats;for(var N=(p=b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(W,Y,x){var V=x&&x.toUpperCase();return Y||S[x]||r[x]||S[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(X,ne,te){return ne||te.slice(1)})})).match(t),L=N.length,y=0;y<L;y+=1){var K=N[y],F=k[K],G=F&&F[0],H=F&&F[1];N[y]=H?{regex:G,parser:H}:K.replace(/^\[|\]$/g,"")}return function(W){for(var Y={},x=0,V=0;x<L;x+=1){var X=N[x];if(typeof X=="string")V+=X.length;else{var ne=X.regex,te=X.parser,se=W.slice(V),Q=ne.exec(se)[0];te.call(Y,Q),W=W.replace(Q,"")}}return(function(oe){var Re=oe.afternoon;if(Re!==void 0){var ge=oe.hours;Re?ge<12&&(oe.hours+=12):ge===12&&(oe.hours=0),delete oe.afternoon}})(Y),Y}}return function(p,b,S){S.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(E=p.parseTwoDigitYear);var N=b.prototype,L=N.parse;N.parse=function(y){var K=y.date,F=y.utc,G=y.args;this.$u=F;var H=G[1];if(typeof H=="string"){var W=G[2]===!0,Y=G[3]===!0,x=W||Y,V=G[2];Y&&(V=G[2]),m=this.$locale(),!W&&V&&(m=S.Ls[V]),this.$d=(function(se,Q,oe,Re){try{if(["x","X"].indexOf(Q)>-1)return new Date((Q==="X"?1e3:1)*se);var ge=O(Q)(se),Qe=ge.year,dn=ge.month,ut=ge.day,_e=ge.hours,Te=ge.minutes,en=ge.seconds,nn=ge.milliseconds,Nn=ge.zone,dt=ge.week,Vn=new Date,Fn=ut||(Qe||dn?1:Vn.getDate()),Zn=Qe||Vn.getFullYear(),$e=0;Qe&&!dn||($e=dn>0?dn-1:Vn.getMonth());var An,ct=_e||0,vn=Te||0,mt=en||0,Qn=nn||0;return Nn?new Date(Date.UTC(Zn,$e,Fn,ct,vn,mt,Qn+60*Nn.offset*1e3)):oe?new Date(Date.UTC(Zn,$e,Fn,ct,vn,mt,Qn)):(An=new Date(Zn,$e,Fn,ct,vn,mt,Qn),dt&&(An=Re(An).week(dt).toDate()),An)}catch{return new Date("")}})(K,H,F,S),this.init(),V&&V!==!0&&(this.$L=this.locale(V).$L),x&&K!=this.format(H)&&(this.$d=new Date("")),m={}}else if(H instanceof Array)for(var X=H.length,ne=1;ne<=X;ne+=1){G[1]=H[ne-1];var te=S.apply(this,G);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}ne===X&&(this.$d=new Date(""))}else L.call(this,y)}}})})(ad)),ad.exports}var bM=kM();const SM=NF(bM);mn.extend(SM);zt(li);const OM="_gradering_1g0xl_1",DM="_alert_1g0xl_5",Ev={gradering:OM,alert:DM},IM=(e,n,r)=>e.map(t=>{const{arbeidType:l,arbeidsgiverReferanse:s}=t,u=s?r[s]:void 0;let d="";return l&&l!==ot.ORDINÆRT_ARBEID?d=n.UttakArbeidType.find(m=>m.kode===l)?.navn??"":u&&(d=NA(u)),C.jsx("option",{value:`${s}-${l}`,children:d},AA())}),q_=({valgtPeriode:e,arbeidsgiverOpplysningerPerId:n,faktaArbeidsforhold:r,readOnly:t,alleKodeverk:l})=>{const s=e?.arbeidsforhold?.arbeidsgiverReferanse,u=s&&s!=="null"&&!n[s],[d,m]=D.useState(!!e?.arbeidstidsprosent),[E,f]=D.useState(!!e?.samtidigUttaksprosent),v=()=>m(O=>!O),_=()=>f(O=>!O),{unregister:T,control:k}=gr();return D.useEffect(()=>{d||(T("arbeidstidsprosent"),T("arbeidsgiverId"))},[d]),D.useEffect(()=>{E||T("samtidigUttaksprosent")},[E]),C.jsxs(C.Fragment,{children:[C.jsxs(jt,{gap:"space-8",children:[C.jsx(Hu,{name:"harGradering",control:k,label:C.jsx(Me,{id:"UttakFaktaDetailForm.HarGradering"}),readOnly:t,onChange:v}),C.jsx(Hu,{name:"harSamtidigUttaksprosent",control:k,label:C.jsx(Me,{id:"UttakFaktaDetailForm.HarSamtidigUttaksprosent"}),readOnly:t,onChange:_})]}),!t&&u&&C.jsx("div",{className:Ev.alert,children:C.jsx(Wv,{variant:"info",children:C.jsx(Me,{id:"UttakFaktaDetailForm.UkjentArbeidsgiver",values:{aRef:s}})})}),(d||E)&&C.jsxs(jt,{gap:"space-24",children:[d&&r&&C.jsxs(C.Fragment,{children:[C.jsx(KE,{name:"arbeidstidsprosent",control:k,label:C.jsx(Me,{id:"UttakFaktaDetailForm.GraderingProsent"}),forceTwoDecimalDigits:!0,validate:[Ht],className:Ev.gradering,readOnly:t}),C.jsx(Xa,{name:"arbeidsgiverId",control:k,label:C.jsx(Me,{id:"UttakFaktaDetailForm.Arbeidsgiver"}),validate:[Ht],selectValues:IM(r,l,n),readOnly:t})]}),E&&C.jsx(KE,{name:"samtidigUttaksprosent",control:k,label:C.jsx(Me,{id:"UttakFaktaDetailForm.SamtidigUttaksprosent"}),validate:[Ht],forceTwoDecimalDigits:!0,readOnly:t})]})]})};q_.__docgenInfo={description:"",methods:[],displayName:"GraderingOgSamtidigUttakPanel",props:{valgtPeriode:{required:!1,tsType:{name:"intersection",raw:`KontrollerFaktaPeriode &
Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`,elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  arbeidstidsprosent?: number;
  begrunnelse?: string;
  flerbarnsdager?: boolean;
  fom: string;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  samtidigUttaksprosent?: number;
  tom: string;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]},required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!1}}]}},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}`,signature:{properties:[{key:"originalFom",value:{name:"string",required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'START_FOM' | 'INGEN_PERIODER' | 'MANGLENDE_ARBEIDSFORHOLD'",elements:[{name:"literal",value:"'START_FOM'"},{name:"literal",value:"'INGEN_PERIODER'"},{name:"literal",value:"'MANGLENDE_ARBEIDSFORHOLD'"}],required:!1}}]}}],raw:`Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},faktaArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]}}],raw:"FaktaArbeidsforhold[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  FagsakMarkering: FagsakMarkeringType;
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
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}},{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"union",raw:`| 'ETTERLØNN_SLUTTPAKKE'
| 'FORENKLET_OPPGJØRSORDNING'
| 'FRILANSER'
| 'FRILANSER_OPPDRAGSTAKER'
| 'LØNN_UNDER_UTDANNING'
| 'MARITIMT_ARBEIDSFORHOLD'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'ORDINÆRT_ARBEIDSFORHOLD'
| 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'
| 'NÆRING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'VANLIG'
| '-'`,elements:[{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FORENKLET_OPPGJØRSORDNING'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'FRILANSER_OPPDRAGSTAKER'"},{name:"literal",value:"'LØNN_UNDER_UTDANNING'"},{name:"literal",value:"'MARITIMT_ARBEIDSFORHOLD'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'ORDINÆRT_ARBEIDSFORHOLD'"},{name:"literal",value:"'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Avslagsårsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingResultatType",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingÅrsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FaresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FarSøkerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FordelingPeriodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"ForeldreType",value:{name:"union",raw:"'MOR' | 'FAR' | 'MEDMOR' | 'ANDRE' | '-'",elements:[{name:"literal",value:"'MOR'"},{name:"literal",value:"'FAR'"},{name:"literal",value:"'MEDMOR'"},{name:"literal",value:"'ANDRE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"Inntektskategori",value:{name:"Inntektskategori",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkarType | '-'",elements:[{name:"VilkarType"},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const LM="_marginBtn_1jtfq_1",PM="_select_1jtfq_6",wM="_selectArsak_1jtfq_10",Ja={marginBtn:LM,select:PM,selectArsak:wM};var jl=(e=>(e.UTTAK="UTTAK",e.OVERFØRING="OVERFØRING",e.UTSETTELSE="UTSETTELSE",e.OPPHOLD="OPPHOLD",e))(jl||{});const vv={UTTAK:"UttakFaktaDetailForm.Uttak",OVERFØRING:"UttakFaktaDetailForm.Overføring",UTSETTELSE:"UttakFaktaDetailForm.Utsettelse",OPPHOLD:"UttakFaktaDetailForm.Opphold"},Y_=e=>e.utsettelseÅrsak?"UTSETTELSE":e.overføringÅrsak?"OVERFØRING":e.oppholdÅrsak?"OPPHOLD":"UTTAK",FM=(e,n)=>{const r=Y_(e),t=e.arbeidsforhold?.arbeidsgiverReferanse!=="undefined"?e.arbeidsforhold?.arbeidsgiverReferanse:void 0,l=t?n[t]:void 0;let s;return(t&&l||e.arbeidsforhold&&!t)&&(s=`${e.arbeidsforhold?.arbeidsgiverReferanse}-${e.arbeidsforhold?.arbeidType}`),{...e,arsakstype:r,arbeidsgiverId:s,harGradering:!!e.arbeidstidsprosent,harSamtidigUttaksprosent:!!e.samtidigUttaksprosent}},KM=e=>({...kA(e,["arsakstype","arbeidsgiverId","harGradering","harSamtidigUttaksprosent"]),arbeidsforhold:e.arbeidsgiverId?{arbeidsgiverReferanse:e.arbeidsgiverId.split("-")[0]==="undefined"?void 0:e.arbeidsgiverId.split("-")[0],arbeidType:e.arbeidsgiverId.split("-")[1]}:void 0,periodeKilde:"SAKSBEHANDLER",aksjonspunktType:void 0,arbeidstidsprosent:e.arbeidstidsprosent,samtidigUttaksprosent:e.samtidigUttaksprosent}),MM=(e,n)=>r=>mn(r).isBefore(n("fom"))?e.formatMessage({id:"UttakFaktaDetailForm.TomForFom"}):null,ld=({fagsak:e,valgtPeriode:n,arbeidsgiverOpplysningerPerId:r,faktaArbeidsforhold:t,slettPeriode:l,avbrytEditering:s,oppdaterPeriode:u,readOnly:d,alleKodeverk:m,defaultMonth:E})=>{const f=ws(),v=n?FM(n,r):void 0,_=E_({defaultValues:v}),[T,k]=D.useState(!1),O=()=>{k(!1),l&&l()},p=m.UttakPeriodeType.toSorted((x,V)=>x.navn.localeCompare(V.navn)),b=m.OverføringÅrsak.toSorted((x,V)=>x.navn.localeCompare(V.navn)),S=m.UtsettelseÅrsak.toSorted((x,V)=>x.navn.localeCompare(V.navn)),N=m.OppholdÅrsak.toSorted((x,V)=>x.navn.localeCompare(V.navn)),L=m.MorsAktivitet.toSorted((x,V)=>x.navn.localeCompare(V.navn)),y=_.watch("arsakstype"),K=_.watch("flerbarnsdager"),F=_.watch("uttakPeriodeType"),G=_.watch("begrunnelse");D.useEffect(()=>{v?.arsakstype!==y&&(_.unregister("uttakPeriodeType"),_.unregister("overføringÅrsak"),_.unregister("oppholdÅrsak"),_.unregister("utsettelseÅrsak"),_.unregister("arbeidstidsprosent"),_.unregister("utsettelseÅrsak"),_.unregister("arbeidsgiverId"),_.unregister("samtidigUttaksprosent"),_.unregister("morsAktivitet"),_.unregister("flerbarnsdager"))},[y]);const H=x=>u(KM(x)),W=y==="UTTAK"&&(F===jn.FELLESPERIODE||F===jn.FORELDREPENGER),Y=e.relasjonsRolleType!==ud.MOR&&(W||y==="UTSETTELSE");return C.jsxs(C.Fragment,{children:[T&&C.jsx(Gw,{text:f.formatMessage({id:"UttakFaktaDetailForm.VilDuSlette"}),submit:O,cancel:()=>k(!1),showModal:!0}),C.jsx(g_,{formMethods:_,onSubmit:H,children:C.jsxs(Ra,{gap:"space-16",children:[C.jsxs(jt,{gap:"space-8",align:"end",children:[C.jsx(FE,{name:"fom",control:_.control,label:C.jsx(Me,{id:"UttakFaktaDetailForm.Fom"}),validate:[Ht,Tf],isReadOnly:d,defaultMonth:E}),C.jsx(FE,{name:"tom",control:_.control,label:C.jsx(Me,{id:"UttakFaktaDetailForm.Tom"}),validate:[Ht,Tf,MM(f,_.getValues)],isReadOnly:d,defaultMonth:E}),l&&!d&&C.jsx(Cn,{size:"small",variant:"tertiary",type:"button",icon:C.jsx(Tk,{}),onClick:()=>k(!0),children:C.jsx(Me,{id:"UttakFaktaDetailForm.Slett"})})]}),C.jsxs(jt,{gap:"space-8",children:[d&&C.jsxs("div",{children:[C.jsx(Wt,{size:"small",children:C.jsx(Me,{id:"UttakFaktaDetailForm.Periodetype"})}),C.jsx(un,{size:"small",children:C.jsx(Me,{id:vv[y]})})]}),!d&&C.jsx(iF,{name:"arsakstype",control:_.control,label:C.jsx(Me,{id:"UttakFaktaDetailForm.Periodetype"}),validate:[Ht],isReadOnly:d,children:C.jsx(jt,{gap:"space-16",children:Object.values(jl).map(x=>C.jsx(CP,{value:x,size:"small",children:C.jsx(Me,{id:vv[x]})},x))})})]}),(y==="UTTAK"||y==="OVERFØRING")&&C.jsx(Xa,{name:"uttakPeriodeType",control:_.control,label:C.jsx(Me,{id:"UttakFaktaDetailForm.Stonadskonto"}),validate:[Ht],className:Ja.select,selectValues:p.map(x=>C.jsx("option",{value:x.kode,children:x.navn},x.kode)),readOnly:d}),y!=="UTTAK"&&C.jsxs(jt,{gap:"space-16",children:[y==="UTSETTELSE"&&C.jsx(Xa,{name:"utsettelseÅrsak",control:_.control,label:C.jsx(Me,{id:"UttakFaktaDetailForm.Årsak"}),validate:[Ht],className:Ja.selectArsak,selectValues:S.map(x=>C.jsx("option",{value:x.kode,children:x.navn},x.kode)),readOnly:d}),y==="OVERFØRING"&&C.jsx(Xa,{name:"overføringÅrsak",control:_.control,label:C.jsx(Me,{id:"UttakFaktaDetailForm.Årsak"}),validate:[Ht],className:Ja.selectArsak,selectValues:b.map(x=>C.jsx("option",{value:x.kode,children:x.navn},x.kode)),readOnly:d}),y==="OPPHOLD"&&C.jsx(Xa,{name:"oppholdÅrsak",control:_.control,label:C.jsx(Me,{id:"UttakFaktaDetailForm.Årsak"}),validate:[Ht],className:Ja.selectArsak,selectValues:N.map(x=>C.jsx("option",{value:x.kode,children:x.navn},x.kode)),readOnly:d})]}),y==="UTTAK"&&C.jsx(q_,{valgtPeriode:n,arbeidsgiverOpplysningerPerId:r,faktaArbeidsforhold:t,readOnly:d,alleKodeverk:m}),Y&&C.jsx(Xa,{name:"morsAktivitet",control:_.control,label:C.jsx(Me,{id:"UttakFaktaDetailForm.MorsAktivitet"}),className:Ja.select,selectValues:L.map(x=>C.jsx("option",{value:x.kode,children:x.navn},x.kode)),readOnly:d}),y==="UTTAK"&&C.jsxs(C.Fragment,{children:[d&&C.jsxs("div",{children:[C.jsx(Wt,{size:"small",children:C.jsx(Me,{id:"UttakFaktaDetailForm.HarFlerbarnsdager"})}),C.jsx(un,{size:"small",children:C.jsx(Me,{id:K===!0?"UttakFaktaDetailForm.Ja":"UttakFaktaDetailForm.Nei"})})]}),!d&&C.jsx(Hu,{name:"flerbarnsdager",control:_.control,label:C.jsx(Me,{id:"UttakFaktaDetailForm.Flerbarnsdager"})})]}),G&&C.jsxs("div",{children:[C.jsx(Wt,{size:"small",children:C.jsx(Me,{id:"UttakFaktaDetailForm.Begrunnelse"})}),C.jsx(un,{size:"small",children:G})]}),!d&&C.jsxs(jt,{gap:"space-8",className:Ja.marginBtn,children:[C.jsx(Cn,{size:"small",variant:"secondary",loading:!1,disabled:!_.formState.isDirty||d,children:C.jsx(Me,{id:"UttakFaktaDetailForm.Oppdater"})}),C.jsx(Cn,{size:"small",variant:"tertiary",onClick:s,disabled:d,type:"button",children:C.jsx(Me,{id:"UttakFaktaDetailForm.Avbryt"})})]})]})})]})};ld.__docgenInfo={description:"",methods:[],displayName:"UttakFaktaDetailForm",props:{fagsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId: string;
  annenPart?: tjenester_fagsak_dto_PersonDto;
  annenpartBehandling?: tjenester_behandling_dto_behandling_AnnenPartBehandlingDto;
  behandlingTypeKanOpprettes: Array<tjenester_behandling_dto_BehandlingOpprettingDto>;
  behandlinger: Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>;
  bruker: tjenester_fagsak_dto_PersonDto;
  brukerManglerAdresse: boolean;
  dekningsgrad: number;
  fagsakMarkeringer: Array<tjenester_fagsak_dto_FagsakMarkeringDto>;
  fagsakYtelseType: foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
  familiehendelse?: tjenester_fagsak_dto_SakHendelseDto;
  harVergeIÅpenBehandling: boolean;
  historikkinnslag: Array<tjenester_behandling_historikk_HistorikkinnslagDto>;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto;
  notater: Array<tjenester_fagsak_dto_FagsakNotatDto>;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  sakSkalTilInfotrygd: boolean;
  saksnummer: string;
  status: foreldrepenger_behandlingslager_fagsak_FagsakStatus;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  saksnummer: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"saksnummer",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_BehandlingOpprettingDto>",required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ansvarligSaksbehandler?: string;
  avsluttet?: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingHenlagt: boolean;
  behandlingKoet?: boolean;
  behandlingKøet: boolean;
  behandlingPaaVent?: boolean;
  behandlingPåVent: boolean;
  behandlingTillatteOperasjoner?: tjenester_behandling_dto_BehandlingOperasjonerDto;
  behandlingsfristTid?: string;
  behandlingsresultat?: tjenester_behandling_dto_behandling_BehandlingsresultatDto;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  endret?: string;
  endretAvBrukernavn?: string;
  erAktivPapirsoknad: boolean;
  erPaaVent?: boolean;
  fagsakId?: number;
  fristBehandlingPaaVent?: string;
  fristBehandlingPåVent?: string;
  førsteÅrsak?: tjenester_behandling_dto_behandling_BehandlingÅrsakDto;
  gjeldendeVedtak: boolean;
  id?: number;
  kontrollResultat?: tjenester_behandling_kontroll_dto_KontrollresultatDto;
  links: Array<rest_ResourceLink>;
  opprettet: string;
  originalVedtaksDato?: string;
  risikoAksjonspunkt?: tjenester_behandling_aksjonspunkt_AksjonspunktDto;
  sprakkode?: foreldrepenger_behandlingslager_geografisk_Språkkode;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  toTrinnsBehandling: boolean;
  totrinnskontrollReadonly?: boolean;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  ugunstAksjonspunkt?: boolean;
  uuid: string;
  venteArsakKode?: string;
  venteÅrsakKode?: string;
  versjon: number;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
}`,signature:{properties:[{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!1}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"boolean",required:!1}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingTilGodkjenning: boolean;
  uuid?: string;
  vergeBehandlingsmeny: foreldrepenger_domene_person_verge_dto_VergeBehandlingsmenyEnum;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"uuid",value:{name:"string",required:!1}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]},required:!1}},{key:"behandlingsfristTid",value:{name:"string",required:!1}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  avslagsarsak?: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak;
  avslagsarsakFritekst?: string;
  endretDekningsgrad?: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  fritekstbrev?: string;
  harRedigertVedtaksbrev: boolean;
  id: number;
  konsekvenserForYtelsen?: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>;
  opphørsdato?: string;
  overskrift?: string;
  rettenTil?: foreldrepenger_behandlingslager_behandling_RettenTil;
  skjæringstidspunkt?: tjenester_behandling_dto_behandling_SkjæringstidspunktDto;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  vedtaksbrev?: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
}`,signature:{properties:[{key:"avslagsarsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"endretDekningsgrad",value:{name:"boolean",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"id",value:{name:"number",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}],required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato?: string;
  utenMinsterett?: boolean;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!1}},{key:"utenMinsterett",value:{name:"boolean",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]},required:!1}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  erAutomatiskRevurdering: boolean;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig?: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!1}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"endretAvBrukernavn",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"boolean",required:!1}},{key:"fagsakId",value:{name:"number",required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  erAutomatiskRevurdering: boolean;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"id",value:{name:"number",required:!1}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  faresignalVurdering?: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering;
  iayFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  medlFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
}`,signature:{properties:[{key:"faresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}},{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}}]},required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"originalVedtaksDato",value:{name:"string",required:!1}},{key:"risikoAksjonspunkt",value:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]},required:!1}},{key:"sprakkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!1}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  beregningDto?: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto;
  besluttersBegrunnelse?: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  totrinnskontrollGodkjent: boolean;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  faktaOmBeregningTilfeller?: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>;
  fastsattVarigEndringNaering?: boolean;
}`,signature:{properties:[{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>",required:!1}},{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!1}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  arbeidsgiverNavn?: string;
  arbeidsgiverReferanse?: string;
  erEndring: boolean;
  godkjent: boolean;
  orgnr?: string;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"orgnr",value:{name:"string",required:!1}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erEndret?: boolean;
  erLagtTil?: boolean;
  erSlettet?: boolean;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"erEndret",value:{name:"boolean",required:!1}},{key:"erLagtTil",value:{name:"boolean",required:!1}},{key:"erSlettet",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!1}},{key:"uuid",value:{name:"string",required:!0}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"venteÅrsakKode",value:{name:"string",required:!1}},{key:"versjon",value:{name:"number",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  evaluering?: string;
  input?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: foreldrepenger_behandlingslager_fagsak_egenskaper_FagsakMarkering;
  kortNavn: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"kortNavn",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakMarkeringDto>",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"familiehendelse",value:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  dødfødsel: boolean;
  hendelseDato?: string;
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktør: tjenester_behandling_historikk_HistorikkinnslagDto_HistorikkAktørDto;
  behandlingUuid?: string;
  dokumenter?: Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>;
  linjer: Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>;
  opprettetTidspunkt: string;
  skjermlenke?: foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType;
  tittel?: string;
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  ident?: string;
  type: foreldrepenger_behandlingslager_behandling_historikk_HistorikkAktør;
}`,signature:{properties:[{key:"ident",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"behandlingUuid",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>",required:!1}},{key:"linjer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tekst?: string;
  type: tjenester_behandling_historikk_HistorikkinnslagDto_Linje_Type;
}`,signature:{properties:[{key:"tekst",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:"'TEKST' | 'LINJESKIFT'",elements:[{name:"literal",value:"'TEKST'"},{name:"literal",value:"'LINJESKIFT'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"union",raw:`| 'ANKE_MERKNADER'
| 'ANKE_VURDERING'
| 'BEREGNING_ENGANGSSTOENAD'
| 'BEREGNING_FORELDREPENGER'
| 'BESTEBEREGNING'
| 'FAKTA_FOR_OMSORG'
| 'FAKTA_FOR_OPPTJENING'
| 'FAKTA_OM_ADOPSJON'
| 'FAKTA_OM_ARBEIDSFORHOLD'
| 'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'
| 'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'
| 'FAKTA_OM_BEREGNING'
| 'FAKTA_OM_FOEDSEL'
| 'FAKTA_OM_FORDELING'
| 'FAKTA_OM_MEDLEMSKAP'
| 'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'
| 'FAKTA_OM_OPPTJENING'
| 'FAKTA_OM_SIMULERING'
| 'FAKTA_OM_UTTAK'
| 'FAKTA_OM_AKTIVITETSKRAV'
| 'FAKTA_OMSORG_OG_RETT'
| 'FAKTA_OM_VERGE'
| 'FORMKRAV_KLAGE_KA'
| 'FORMKRAV_KLAGE_NFP'
| 'KLAGE_BEH_NFP'
| 'KLAGE_BEH_NK'
| 'KONTROLL_AV_SAKSOPPLYSNINGER'
| 'OPPLYSNINGSPLIKT'
| 'PUNKT_FOR_ADOPSJON'
| 'PUNKT_FOR_FOEDSEL'
| 'PUNKT_FOR_FORELDREANSVAR'
| 'PUNKT_FOR_MEDLEMSKAP'
| 'PUNKT_FOR_MEDLEMSKAP_LØPENDE'
| 'PUNKT_FOR_OMSORG'
| 'PUNKT_FOR_OPPTJENING'
| 'PUNKT_FOR_SVANGERSKAPSPENGER'
| 'PUNKT_FOR_SVP_INNGANG'
| 'SOEKNADSFRIST'
| 'TILKJENT_YTELSE'
| '-'
| 'UTLAND'
| 'UTTAK'
| 'VEDTAK'
| 'VURDER_FARESIGNALER'
| 'FAKTA_OM_UTTAK_DOKUMENTASJON'
| 'FAKTA_UTTAK'
| 'FAKTA_UTTAK_EØS'`,elements:[{name:"literal",value:"'ANKE_MERKNADER'"},{name:"literal",value:"'ANKE_VURDERING'"},{name:"literal",value:"'BEREGNING_ENGANGSSTOENAD'"},{name:"literal",value:"'BEREGNING_FORELDREPENGER'"},{name:"literal",value:"'BESTEBEREGNING'"},{name:"literal",value:"'FAKTA_FOR_OMSORG'"},{name:"literal",value:"'FAKTA_FOR_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_ADOPSJON'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'"},{name:"literal",value:"'FAKTA_OM_BEREGNING'"},{name:"literal",value:"'FAKTA_OM_FOEDSEL'"},{name:"literal",value:"'FAKTA_OM_FORDELING'"},{name:"literal",value:"'FAKTA_OM_MEDLEMSKAP'"},{name:"literal",value:"'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'"},{name:"literal",value:"'FAKTA_OM_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_SIMULERING'"},{name:"literal",value:"'FAKTA_OM_UTTAK'"},{name:"literal",value:"'FAKTA_OM_AKTIVITETSKRAV'"},{name:"literal",value:"'FAKTA_OMSORG_OG_RETT'"},{name:"literal",value:"'FAKTA_OM_VERGE'"},{name:"literal",value:"'FORMKRAV_KLAGE_KA'"},{name:"literal",value:"'FORMKRAV_KLAGE_NFP'"},{name:"literal",value:"'KLAGE_BEH_NFP'"},{name:"literal",value:"'KLAGE_BEH_NK'"},{name:"literal",value:"'KONTROLL_AV_SAKSOPPLYSNINGER'"},{name:"literal",value:"'OPPLYSNINGSPLIKT'"},{name:"literal",value:"'PUNKT_FOR_ADOPSJON'"},{name:"literal",value:"'PUNKT_FOR_FOEDSEL'"},{name:"literal",value:"'PUNKT_FOR_FORELDREANSVAR'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP_LØPENDE'"},{name:"literal",value:"'PUNKT_FOR_OMSORG'"},{name:"literal",value:"'PUNKT_FOR_OPPTJENING'"},{name:"literal",value:"'PUNKT_FOR_SVANGERSKAPSPENGER'"},{name:"literal",value:"'PUNKT_FOR_SVP_INNGANG'"},{name:"literal",value:"'SOEKNADSFRIST'"},{name:"literal",value:"'TILKJENT_YTELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'UTLAND'"},{name:"literal",value:"'UTTAK'"},{name:"literal",value:"'VEDTAK'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'FAKTA_OM_UTTAK_DOKUMENTASJON'"},{name:"literal",value:"'FAKTA_UTTAK'"},{name:"literal",value:"'FAKTA_UTTAK_EØS'"}],required:!1}},{key:"tittel",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto>",required:!0}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  faresignalVurdering?: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering;
  iayFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  medlFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
}`,signature:{properties:[{key:"faresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}},{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}}]},required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  notat: string;
  opprettetAv: string;
  opprettetTidspunkt: string;
}`,signature:{properties:[{key:"notat",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakNotatDto>",required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}}]}},description:""},valgtPeriode:{required:!1,tsType:{name:"intersection",raw:`KontrollerFaktaPeriode &
Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`,elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  arbeidstidsprosent?: number;
  begrunnelse?: string;
  flerbarnsdager?: boolean;
  fom: string;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  samtidigUttaksprosent?: number;
  tom: string;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]},required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!1}}]}},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}`,signature:{properties:[{key:"originalFom",value:{name:"string",required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'START_FOM' | 'INGEN_PERIODER' | 'MANGLENDE_ARBEIDSFORHOLD'",elements:[{name:"literal",value:"'START_FOM'"},{name:"literal",value:"'INGEN_PERIODER'"},{name:"literal",value:"'MANGLENDE_ARBEIDSFORHOLD'"}],required:!1}}]}}],raw:`Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},faktaArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]}}],raw:"FaktaArbeidsforhold[]"},description:""},slettPeriode:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},avbrytEditering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(uttaksperiode: KontrollerFaktaPeriodeMedApMarkering) => void",signature:{arguments:[{type:{name:"intersection",raw:`KontrollerFaktaPeriode &
Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`,elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  arbeidstidsprosent?: number;
  begrunnelse?: string;
  flerbarnsdager?: boolean;
  fom: string;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  samtidigUttaksprosent?: number;
  tom: string;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]},required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!1}}]}},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  FagsakMarkering: FagsakMarkeringType;
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
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}},{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"union",raw:`| 'ETTERLØNN_SLUTTPAKKE'
| 'FORENKLET_OPPGJØRSORDNING'
| 'FRILANSER'
| 'FRILANSER_OPPDRAGSTAKER'
| 'LØNN_UNDER_UTDANNING'
| 'MARITIMT_ARBEIDSFORHOLD'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'ORDINÆRT_ARBEIDSFORHOLD'
| 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'
| 'NÆRING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'VANLIG'
| '-'`,elements:[{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FORENKLET_OPPGJØRSORDNING'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'FRILANSER_OPPDRAGSTAKER'"},{name:"literal",value:"'LØNN_UNDER_UTDANNING'"},{name:"literal",value:"'MARITIMT_ARBEIDSFORHOLD'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'ORDINÆRT_ARBEIDSFORHOLD'"},{name:"literal",value:"'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Avslagsårsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingResultatType",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingÅrsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FaresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FarSøkerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FordelingPeriodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"ForeldreType",value:{name:"union",raw:"'MOR' | 'FAR' | 'MEDMOR' | 'ANDRE' | '-'",elements:[{name:"literal",value:"'MOR'"},{name:"literal",value:"'FAR'"},{name:"literal",value:"'MEDMOR'"},{name:"literal",value:"'ANDRE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"Inntektskategori",value:{name:"Inntektskategori",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkarType | '-'",elements:[{name:"VilkarType"},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:""}}};const GM="_panel_dvi2f_1",VM="_panelOpen_dvi2f_6",BM="_panelOpenAp_dvi2f_15",xM="_headerRow_dvi2f_25",UM="_row_dvi2f_29",HM="_isOpen_dvi2f_33",jM="_isApOpen_dvi2f_37",Vl={panel:GM,panelOpen:VM,panelOpenAp:BM,headerRow:xM,row:UM,isOpen:HM,isApOpen:jM},CM=p_.bind(Vl),qM=(e,n,r)=>{const t=Y_(n);if(t===jl.UTTAK||t===jl.OVERFØRING){const s=e.UttakPeriodeType.find(u=>u.kode===n.uttakPeriodeType)?.navn;return n.arbeidstidsprosent&&n.arbeidstidsprosent>0?`${s} - Gradert ${n.arbeidstidsprosent}%`:s}if(t===jl.OPPHOLD){const s=e.OppholdÅrsak.find(u=>u.kode===n.oppholdÅrsak)?.navn;return r.formatMessage({id:"UttakFaktaTabel.Opphold"},{arsak:s?.replace("har uttak av","")})}const l=e.UtsettelseÅrsak.find(s=>s.kode===n.utsettelseÅrsak)?.navn;return r.formatMessage({id:"UttakFaktaTabel.Utsettelse"},{arsak:l})},$_=({fagsak:e,valgteFomDatoer:n,setValgteFomDatoer:r,uttakKontrollerFaktaPerioder:t,arbeidsgiverOpplysningerPerId:l,faktaArbeidsforhold:s,oppdaterUttakPerioder:u,alleKodeverk:d,readOnly:m,setDirty:E,erRedigerbart:f,visNyPeriode:v,settVisNyPeriode:_})=>{const T=ws(),k=(S,N=!1)=>{if(S&&n.includes(S))r(L=>L.filter(y=>y!==S));else if(N){const L=S?[S]:[];r(()=>L)}else S&&r(L=>L.concat(S))},O=S=>{const N=t.filter(L=>L.originalFom!==S.originalFom).concat(S).sort((L,y)=>mn(L.fom).diff(mn(y.fom)));E(!0),u(N),k(void 0,!0)},p=S=>{const N=t.filter(L=>L.originalFom!==S);u(N),E(!0)},b=t.length>0?new Date(t.at(-1).tom):void 0;return C.jsxs(Ra,{gap:"space-24",children:[C.jsxs(hn,{children:[C.jsx(hn.Header,{children:C.jsxs(hn.Row,{className:Vl.headerRow,children:[C.jsx(hn.HeaderCell,{scope:"col",children:C.jsx(Me,{id:"UttakFaktaTable.Periode"})}),C.jsx(hn.HeaderCell,{scope:"col",children:C.jsx(Me,{id:"UttakFaktaTable.AntallDager"})}),C.jsx(hn.HeaderCell,{scope:"col",children:C.jsx(Me,{id:"UttakFaktaTable.Type"})}),C.jsx(hn.HeaderCell,{scope:"col",children:C.jsx(Me,{id:"UttakFaktaTable.Kilde"})}),C.jsx(hn.HeaderCell,{scope:"col"})]})}),C.jsx(hn.Body,{children:t.map(S=>{const N=bA(S.fom,S.tom);return C.jsxs(hn.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",open:n.includes(S.fom),onOpenChange:()=>k(S.fom),className:CM("row",{isOpen:n.includes(S.fom),isApOpen:!!S.aksjonspunktType}),contentGutter:"none",content:n.includes(S.fom)&&C.jsx("div",{className:S.aksjonspunktType?Vl.panelOpenAp:Vl.panelOpen,children:C.jsx(ld,{fagsak:e,valgtPeriode:S,readOnly:m||!f,oppdaterPeriode:O,slettPeriode:()=>p(S.originalFom),avbrytEditering:()=>k(S.fom),alleKodeverk:d,arbeidsgiverOpplysningerPerId:l,faktaArbeidsforhold:s})}),children:[C.jsx(hn.DataCell,{children:`${Cl(S.fom)} - ${Cl(S.tom)}`}),C.jsx(hn.DataCell,{children:N.formattedString}),C.jsx(hn.DataCell,{children:qM(d,S,T)}),C.jsx(hn.DataCell,{children:d.FordelingPeriodeKilde.find(L=>L.kode===S.periodeKilde)?.navn})]},S.fom+S.tom)})})]}),f&&C.jsxs(C.Fragment,{children:[!v&&C.jsx("div",{children:C.jsx(Cn,{size:"small",variant:"tertiary",type:"button",icon:C.jsx(Ek,{}),onClick:()=>{k(void 0,!0),_(!0)},children:C.jsx(Me,{id:"UttakFaktaForm.LeggTilPeriode"})})}),v&&C.jsxs(Ra,{gap:"space-16",className:Vl.panel,children:[C.jsx(Jl,{size:"small",level:"3",children:C.jsx(Me,{id:"UttakFaktaForm.NyPeriode"})}),C.jsx(ld,{fagsak:e,avbrytEditering:()=>_(!1),readOnly:!1,alleKodeverk:d,oppdaterPeriode:S=>{const N=t.concat(S).sort((L,y)=>mn(L.fom).diff(mn(y.fom)));E(!0),u(N),_(!1)},arbeidsgiverOpplysningerPerId:l,faktaArbeidsforhold:s,defaultMonth:b})]})]})]})};$_.__docgenInfo={description:"",methods:[],displayName:"UttakFaktaTable",props:{fagsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId: string;
  annenPart?: tjenester_fagsak_dto_PersonDto;
  annenpartBehandling?: tjenester_behandling_dto_behandling_AnnenPartBehandlingDto;
  behandlingTypeKanOpprettes: Array<tjenester_behandling_dto_BehandlingOpprettingDto>;
  behandlinger: Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>;
  bruker: tjenester_fagsak_dto_PersonDto;
  brukerManglerAdresse: boolean;
  dekningsgrad: number;
  fagsakMarkeringer: Array<tjenester_fagsak_dto_FagsakMarkeringDto>;
  fagsakYtelseType: foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
  familiehendelse?: tjenester_fagsak_dto_SakHendelseDto;
  harVergeIÅpenBehandling: boolean;
  historikkinnslag: Array<tjenester_behandling_historikk_HistorikkinnslagDto>;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto;
  notater: Array<tjenester_fagsak_dto_FagsakNotatDto>;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  sakSkalTilInfotrygd: boolean;
  saksnummer: string;
  status: foreldrepenger_behandlingslager_fagsak_FagsakStatus;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  saksnummer: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"saksnummer",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_BehandlingOpprettingDto>",required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ansvarligSaksbehandler?: string;
  avsluttet?: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingHenlagt: boolean;
  behandlingKoet?: boolean;
  behandlingKøet: boolean;
  behandlingPaaVent?: boolean;
  behandlingPåVent: boolean;
  behandlingTillatteOperasjoner?: tjenester_behandling_dto_BehandlingOperasjonerDto;
  behandlingsfristTid?: string;
  behandlingsresultat?: tjenester_behandling_dto_behandling_BehandlingsresultatDto;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  endret?: string;
  endretAvBrukernavn?: string;
  erAktivPapirsoknad: boolean;
  erPaaVent?: boolean;
  fagsakId?: number;
  fristBehandlingPaaVent?: string;
  fristBehandlingPåVent?: string;
  førsteÅrsak?: tjenester_behandling_dto_behandling_BehandlingÅrsakDto;
  gjeldendeVedtak: boolean;
  id?: number;
  kontrollResultat?: tjenester_behandling_kontroll_dto_KontrollresultatDto;
  links: Array<rest_ResourceLink>;
  opprettet: string;
  originalVedtaksDato?: string;
  risikoAksjonspunkt?: tjenester_behandling_aksjonspunkt_AksjonspunktDto;
  sprakkode?: foreldrepenger_behandlingslager_geografisk_Språkkode;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  toTrinnsBehandling: boolean;
  totrinnskontrollReadonly?: boolean;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  ugunstAksjonspunkt?: boolean;
  uuid: string;
  venteArsakKode?: string;
  venteÅrsakKode?: string;
  versjon: number;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
}`,signature:{properties:[{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!1}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"boolean",required:!1}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingTilGodkjenning: boolean;
  uuid?: string;
  vergeBehandlingsmeny: foreldrepenger_domene_person_verge_dto_VergeBehandlingsmenyEnum;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"uuid",value:{name:"string",required:!1}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]},required:!1}},{key:"behandlingsfristTid",value:{name:"string",required:!1}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  avslagsarsak?: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak;
  avslagsarsakFritekst?: string;
  endretDekningsgrad?: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  fritekstbrev?: string;
  harRedigertVedtaksbrev: boolean;
  id: number;
  konsekvenserForYtelsen?: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>;
  opphørsdato?: string;
  overskrift?: string;
  rettenTil?: foreldrepenger_behandlingslager_behandling_RettenTil;
  skjæringstidspunkt?: tjenester_behandling_dto_behandling_SkjæringstidspunktDto;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  vedtaksbrev?: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
}`,signature:{properties:[{key:"avslagsarsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"endretDekningsgrad",value:{name:"boolean",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"id",value:{name:"number",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}],required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato?: string;
  utenMinsterett?: boolean;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!1}},{key:"utenMinsterett",value:{name:"boolean",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]},required:!1}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  erAutomatiskRevurdering: boolean;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig?: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!1}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"endretAvBrukernavn",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"boolean",required:!1}},{key:"fagsakId",value:{name:"number",required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  erAutomatiskRevurdering: boolean;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"id",value:{name:"number",required:!1}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  faresignalVurdering?: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering;
  iayFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  medlFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
}`,signature:{properties:[{key:"faresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}},{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}}]},required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"originalVedtaksDato",value:{name:"string",required:!1}},{key:"risikoAksjonspunkt",value:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]},required:!1}},{key:"sprakkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!1}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  beregningDto?: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto;
  besluttersBegrunnelse?: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  totrinnskontrollGodkjent: boolean;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  faktaOmBeregningTilfeller?: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>;
  fastsattVarigEndringNaering?: boolean;
}`,signature:{properties:[{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>",required:!1}},{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!1}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  arbeidsgiverNavn?: string;
  arbeidsgiverReferanse?: string;
  erEndring: boolean;
  godkjent: boolean;
  orgnr?: string;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"orgnr",value:{name:"string",required:!1}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erEndret?: boolean;
  erLagtTil?: boolean;
  erSlettet?: boolean;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"erEndret",value:{name:"boolean",required:!1}},{key:"erLagtTil",value:{name:"boolean",required:!1}},{key:"erSlettet",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!1}},{key:"uuid",value:{name:"string",required:!0}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"venteÅrsakKode",value:{name:"string",required:!1}},{key:"versjon",value:{name:"number",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  evaluering?: string;
  input?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: foreldrepenger_behandlingslager_fagsak_egenskaper_FagsakMarkering;
  kortNavn: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"kortNavn",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakMarkeringDto>",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"familiehendelse",value:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  dødfødsel: boolean;
  hendelseDato?: string;
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktør: tjenester_behandling_historikk_HistorikkinnslagDto_HistorikkAktørDto;
  behandlingUuid?: string;
  dokumenter?: Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>;
  linjer: Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>;
  opprettetTidspunkt: string;
  skjermlenke?: foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType;
  tittel?: string;
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  ident?: string;
  type: foreldrepenger_behandlingslager_behandling_historikk_HistorikkAktør;
}`,signature:{properties:[{key:"ident",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"behandlingUuid",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>",required:!1}},{key:"linjer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tekst?: string;
  type: tjenester_behandling_historikk_HistorikkinnslagDto_Linje_Type;
}`,signature:{properties:[{key:"tekst",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:"'TEKST' | 'LINJESKIFT'",elements:[{name:"literal",value:"'TEKST'"},{name:"literal",value:"'LINJESKIFT'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"union",raw:`| 'ANKE_MERKNADER'
| 'ANKE_VURDERING'
| 'BEREGNING_ENGANGSSTOENAD'
| 'BEREGNING_FORELDREPENGER'
| 'BESTEBEREGNING'
| 'FAKTA_FOR_OMSORG'
| 'FAKTA_FOR_OPPTJENING'
| 'FAKTA_OM_ADOPSJON'
| 'FAKTA_OM_ARBEIDSFORHOLD'
| 'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'
| 'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'
| 'FAKTA_OM_BEREGNING'
| 'FAKTA_OM_FOEDSEL'
| 'FAKTA_OM_FORDELING'
| 'FAKTA_OM_MEDLEMSKAP'
| 'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'
| 'FAKTA_OM_OPPTJENING'
| 'FAKTA_OM_SIMULERING'
| 'FAKTA_OM_UTTAK'
| 'FAKTA_OM_AKTIVITETSKRAV'
| 'FAKTA_OMSORG_OG_RETT'
| 'FAKTA_OM_VERGE'
| 'FORMKRAV_KLAGE_KA'
| 'FORMKRAV_KLAGE_NFP'
| 'KLAGE_BEH_NFP'
| 'KLAGE_BEH_NK'
| 'KONTROLL_AV_SAKSOPPLYSNINGER'
| 'OPPLYSNINGSPLIKT'
| 'PUNKT_FOR_ADOPSJON'
| 'PUNKT_FOR_FOEDSEL'
| 'PUNKT_FOR_FORELDREANSVAR'
| 'PUNKT_FOR_MEDLEMSKAP'
| 'PUNKT_FOR_MEDLEMSKAP_LØPENDE'
| 'PUNKT_FOR_OMSORG'
| 'PUNKT_FOR_OPPTJENING'
| 'PUNKT_FOR_SVANGERSKAPSPENGER'
| 'PUNKT_FOR_SVP_INNGANG'
| 'SOEKNADSFRIST'
| 'TILKJENT_YTELSE'
| '-'
| 'UTLAND'
| 'UTTAK'
| 'VEDTAK'
| 'VURDER_FARESIGNALER'
| 'FAKTA_OM_UTTAK_DOKUMENTASJON'
| 'FAKTA_UTTAK'
| 'FAKTA_UTTAK_EØS'`,elements:[{name:"literal",value:"'ANKE_MERKNADER'"},{name:"literal",value:"'ANKE_VURDERING'"},{name:"literal",value:"'BEREGNING_ENGANGSSTOENAD'"},{name:"literal",value:"'BEREGNING_FORELDREPENGER'"},{name:"literal",value:"'BESTEBEREGNING'"},{name:"literal",value:"'FAKTA_FOR_OMSORG'"},{name:"literal",value:"'FAKTA_FOR_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_ADOPSJON'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'"},{name:"literal",value:"'FAKTA_OM_BEREGNING'"},{name:"literal",value:"'FAKTA_OM_FOEDSEL'"},{name:"literal",value:"'FAKTA_OM_FORDELING'"},{name:"literal",value:"'FAKTA_OM_MEDLEMSKAP'"},{name:"literal",value:"'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'"},{name:"literal",value:"'FAKTA_OM_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_SIMULERING'"},{name:"literal",value:"'FAKTA_OM_UTTAK'"},{name:"literal",value:"'FAKTA_OM_AKTIVITETSKRAV'"},{name:"literal",value:"'FAKTA_OMSORG_OG_RETT'"},{name:"literal",value:"'FAKTA_OM_VERGE'"},{name:"literal",value:"'FORMKRAV_KLAGE_KA'"},{name:"literal",value:"'FORMKRAV_KLAGE_NFP'"},{name:"literal",value:"'KLAGE_BEH_NFP'"},{name:"literal",value:"'KLAGE_BEH_NK'"},{name:"literal",value:"'KONTROLL_AV_SAKSOPPLYSNINGER'"},{name:"literal",value:"'OPPLYSNINGSPLIKT'"},{name:"literal",value:"'PUNKT_FOR_ADOPSJON'"},{name:"literal",value:"'PUNKT_FOR_FOEDSEL'"},{name:"literal",value:"'PUNKT_FOR_FORELDREANSVAR'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP_LØPENDE'"},{name:"literal",value:"'PUNKT_FOR_OMSORG'"},{name:"literal",value:"'PUNKT_FOR_OPPTJENING'"},{name:"literal",value:"'PUNKT_FOR_SVANGERSKAPSPENGER'"},{name:"literal",value:"'PUNKT_FOR_SVP_INNGANG'"},{name:"literal",value:"'SOEKNADSFRIST'"},{name:"literal",value:"'TILKJENT_YTELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'UTLAND'"},{name:"literal",value:"'UTTAK'"},{name:"literal",value:"'VEDTAK'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'FAKTA_OM_UTTAK_DOKUMENTASJON'"},{name:"literal",value:"'FAKTA_UTTAK'"},{name:"literal",value:"'FAKTA_UTTAK_EØS'"}],required:!1}},{key:"tittel",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto>",required:!0}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  faresignalVurdering?: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering;
  iayFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  medlFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
}`,signature:{properties:[{key:"faresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}},{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}}]},required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  notat: string;
  opprettetAv: string;
  opprettetTidspunkt: string;
}`,signature:{properties:[{key:"notat",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakNotatDto>",required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}}]}},description:""},valgteFomDatoer:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},setValgteFomDatoer:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<string[]>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<string[]>",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}]},description:""},uttakKontrollerFaktaPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`KontrollerFaktaPeriode &
Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`,elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  arbeidstidsprosent?: number;
  begrunnelse?: string;
  flerbarnsdager?: boolean;
  fom: string;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  samtidigUttaksprosent?: number;
  tom: string;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]},required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!1}}]}},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}`,signature:{properties:[{key:"originalFom",value:{name:"string",required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'START_FOM' | 'INGEN_PERIODER' | 'MANGLENDE_ARBEIDSFORHOLD'",elements:[{name:"literal",value:"'START_FOM'"},{name:"literal",value:"'INGEN_PERIODER'"},{name:"literal",value:"'MANGLENDE_ARBEIDSFORHOLD'"}],required:!1}}]}}],raw:`Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`}]}],raw:"KontrollerFaktaPeriodeMedApMarkering[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},faktaArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]}}],raw:"FaktaArbeidsforhold[]"},description:""},oppdaterUttakPerioder:{required:!0,tsType:{name:"signature",type:"function",raw:"(perioder: KontrollerFaktaPeriodeMedApMarkering[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`KontrollerFaktaPeriode &
Readonly<{
  originalFom: string;
  aksjonspunktType?: PeriodeApType;
}>`,elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  arbeidstidsprosent?: number;
  begrunnelse?: string;
  flerbarnsdager?: boolean;
  fom: string;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  samtidigUttaksprosent?: number;
  tom: string;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]},required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!1}}]}},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  FagsakMarkering: FagsakMarkeringType;
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
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}},{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"union",raw:`| 'ETTERLØNN_SLUTTPAKKE'
| 'FORENKLET_OPPGJØRSORDNING'
| 'FRILANSER'
| 'FRILANSER_OPPDRAGSTAKER'
| 'LØNN_UNDER_UTDANNING'
| 'MARITIMT_ARBEIDSFORHOLD'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'ORDINÆRT_ARBEIDSFORHOLD'
| 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'
| 'NÆRING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'VANLIG'
| '-'`,elements:[{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FORENKLET_OPPGJØRSORDNING'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'FRILANSER_OPPDRAGSTAKER'"},{name:"literal",value:"'LØNN_UNDER_UTDANNING'"},{name:"literal",value:"'MARITIMT_ARBEIDSFORHOLD'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'ORDINÆRT_ARBEIDSFORHOLD'"},{name:"literal",value:"'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Avslagsårsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingResultatType",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingÅrsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FaresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FarSøkerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FordelingPeriodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"ForeldreType",value:{name:"union",raw:"'MOR' | 'FAR' | 'MEDMOR' | 'ANDRE' | '-'",elements:[{name:"literal",value:"'MOR'"},{name:"literal",value:"'FAR'"},{name:"literal",value:"'MEDMOR'"},{name:"literal",value:"'ANDRE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"Inntektskategori",value:{name:"Inntektskategori",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkarType | '-'",elements:[{name:"VilkarType"},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},setDirty:{required:!0,tsType:{name:"signature",type:"function",raw:"(isDirty: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isDirty"}],return:{name:"void"}}},description:""},erRedigerbart:{required:!0,tsType:{name:"boolean"},description:""},visNyPeriode:{required:!0,tsType:{name:"boolean"},description:""},settVisNyPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(vis: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"vis"}],return:{name:"void"}}},description:""}}};const YM=(e,n)=>e.filter(_v).map(r=>{const t=n.førsteUttaksdato,l={value:Cl(t)};return C.jsx(Me,{id:`UttakFaktaForm.Aksjonspunkt.${r.definisjon}`,values:l},`UttakFaktaForm.Aksjonspunkt.${r.definisjon}`)}),$M=(e,n,r)=>e.map(t=>n.some(l=>(l.definisjon===Tn.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE||l.definisjon===Tn.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE)&&l.status==="OPPR")&&t.arbeidsforhold?.arbeidsgiverReferanse&&!r[t.arbeidsforhold.arbeidsgiverReferanse]?{...t,originalFom:t.fom,aksjonspunktType:"MANGLENDE_ARBEIDSFORHOLD"}:{...t,originalFom:t.fom}),WM=e=>!(e.utsettelseÅrsak??e.oppholdÅrsak),JM=(e,n,r,t,l)=>{if(e.filter(s=>n||WM(s)).some(s=>mn(s.fom).isBefore(t)))return r.formatMessage({id:l?"UttakFaktaDetailForm.ErFørFørsteUttaktsdato":"UttakFaktaDetailForm.ErFørFødselsdato"},{dato:Cl(t)})},zM=(e,n,r,t,l,s)=>{const u=n.map(({fom:T,tom:k})=>[T,k]);if(u.length>0?!!DA(u):void 0)return s.formatMessage({id:"UttakFaktaForm.OverlappendePerioder"});const m=e.familiehendelse?.hendelseType==="FODSL"?e.familiehendelse.hendelseDato:void 0,E=r&&!!m&&mn(m).isBefore(l),f=E?m:l;if(n.every(T=>!mn(T.fom).isSame(l)))return s.formatMessage({id:"UttakFaktaDetailForm.ErIkkeLikForsteUttaksdato"},{dato:Cl(l)});const v=JM(n,r,s,f,E);if(v)return v;const _=t.some(T=>T.definisjon===Tn.FAKTA_UTTAK_INGEN_PERIODER_KODE);return n.every(T=>T.aksjonspunktType===void 0)&&(!_||n.length>0)?null:""},W_=({uttakKontrollerFaktaPerioder:e,arbeidsgiverOpplysningerPerId:n,faktaArbeidsforhold:r,ytelsefordeling:t,kanOverstyre:l})=>{const s=ws(),{alleKodeverk:u,isSubmittable:d,submitCallback:m,fagsak:E,aksjonspunkterForPanel:f,isReadOnly:v}=SA(),_=[...e].sort((oe,Re)=>mn(oe.fom).diff(mn(Re.fom))),T=$M(_,f,n),{mellomlagretFormData:k,setMellomlagretFormData:O}=OA(),[p,b]=D.useState(k?.uttakPerioder??T),[S,N]=D.useState([]),L=E_({defaultValues:{begrunnelse:k?.begrunnelse??f[0]?.begrunnelse??""}});D.useEffect(()=>()=>{O({uttakPerioder:p,begrunnelse:L.getValues("begrunnelse")})},[p]);const y=f.filter(oe=>oe.definisjon!==Tn.OVERSTYR_FAKTA_UTTAK),K=oe=>{const Re=[{kode:VE(Tn.OVERSTYR_FAKTA_UTTAK,Tn.OVERSTYR_FAKTA_UTTAK),perioder:p,begrunnelse:oe}],ge=y.map(Qe=>({kode:VE(Qe.definisjon,Tn.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,Tn.FAKTA_UTTAK_INGEN_PERIODER_KODE,Tn.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,Tn.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE),perioder:p,begrunnelse:oe}));return m(ge.length>0?ge:Re)},F=L.watch("begrunnelse"),[G,H]=D.useState(!1);let W=null;if(G||L.formState.isDirty){const oe=E.relasjonsRolleType===ud.MOR;W=zM(E,p,oe,f,t.førsteUttaksdato,s)}const[Y,x]=D.useState(!1),V=d&&W===null&&!!F&&!Y&&S.length===0,[X,ne]=D.useState(!1),te=f.some(_v),se=YM(f,t),Q=!v&&(y.length>0||X);return C.jsxs(Ra,{gap:"space-32",children:[C.jsxs(jt,{gap:"space-16",children:[C.jsx(Jl,{size:"small",level:"2",children:C.jsx(Me,{id:"UttakFaktaForm.FaktaUttak"})}),l&&!v&&y.length===0&&C.jsx(bw,{onClick:()=>ne(!0),erOverstyrt:X})]}),te&&C.jsx(Aw,{children:se}),W&&C.jsx(Vu,{children:C.jsx(Vu.Item,{children:W})}),C.jsx($_,{fagsak:E,valgteFomDatoer:S,setValgteFomDatoer:N,uttakKontrollerFaktaPerioder:p,oppdaterUttakPerioder:b,alleKodeverk:u,readOnly:v,setDirty:H,erRedigerbart:Q,arbeidsgiverOpplysningerPerId:n,faktaArbeidsforhold:r,visNyPeriode:Y,settVisNyPeriode:x}),C.jsx(g_,{formMethods:L,onSubmit:oe=>K(oe.begrunnelse),children:C.jsxs(Ra,{gap:"space-16",children:[C.jsx(Ws,{control:L.control,isSubmittable:!0,isReadOnly:!Q,hasBegrunnelse:!0}),Q&&C.jsx(__,{isSubmittable:V,isReadOnly:v,isSubmitting:L.formState.isSubmitting,isDirty:G||L.formState.isDirty})]})})]})};W_.__docgenInfo={description:"",methods:[],displayName:"UttakFaktaForm",props:{ytelsefordeling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  førsteUttaksdato: string;
  overstyrtOmsorg?: boolean;
  ønskerJustertVedFødsel?: boolean;
}`,signature:{properties:[{key:"førsteUttaksdato",value:{name:"string",required:!0}},{key:"overstyrtOmsorg",value:{name:"boolean",required:!1}},{key:"ønskerJustertVedFødsel",value:{name:"boolean",required:!1}}]}},description:""},uttakKontrollerFaktaPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  arbeidstidsprosent?: number;
  begrunnelse?: string;
  flerbarnsdager?: boolean;
  fom: string;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  samtidigUttaksprosent?: number;
  tom: string;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]},required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!1}}]}}],raw:"KontrollerFaktaPeriode[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},faktaArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]}}],raw:"FaktaArbeidsforhold[]"},description:""},kanOverstyre:{required:!0,tsType:{name:"boolean"},description:""}}};const XM={"UttakFaktaForm.FaktaUttak":"Fakta om uttak","UttakFaktaForm.LeggTilPeriode":"Legg til periode","UttakFaktaForm.Aksjonspunkt.5063":"Gradering av ukjent arbeidsforhold. Vurder gradering","UttakFaktaForm.Aksjonspunkt.5064":"Ingen perioder å vurdere. Vurder om behandlingen er feilopprettet og kan henlegges","UttakFaktaForm.Aksjonspunkt.5065":"Første periode starter ikke på avklart startdato {value}. Legg inn periode fra startdato","UttakFaktaForm.Aksjonspunkt.5066":"Gradering av aktivitet uten beregningsgrunnlag. Vurder gradering","UttakFaktaForm.Aksjonspunkt.5074":"Vurder dokumentasjon","UttakFaktaForm.Aksjonspunkt.6065":"Vurder tidligere overstyring","UttakFaktaForm.NyPeriode":"Ny periode","UttakFaktaForm.OverlappendePerioder":"Det finnes overlappende perioder","UttakFaktaTable.Periode":"Periode","UttakFaktaTable.AntallDager":"Antall dager","UttakFaktaTable.Type":"Type","UttakFaktaTable.Kilde":"Kilde","UttakFaktaTabel.Utsettelse":"Utsettelse - {arsak}","UttakFaktaTabel.Opphold":"Opphold - {arsak}","UttakFaktaDetailForm.Fom":"Periode fra","UttakFaktaDetailForm.Tom":"Periode til","UttakFaktaDetailForm.Periodetype":"Periodetype","UttakFaktaDetailForm.Stonadskonto":"Stønadskonto","UttakFaktaDetailForm.GraderingProsent":"Gradering %","UttakFaktaDetailForm.Oppdater":"Oppdater","UttakFaktaDetailForm.Avbryt":"Avbryt","UttakFaktaDetailForm.Slett":"Slett periode","UttakFaktaDetailForm.VilDuSlette":"Vil du slette periode?","UttakFaktaDetailForm.Uttak":"Uttak","UttakFaktaDetailForm.Overføring":"Overføring","UttakFaktaDetailForm.Utsettelse":"Utsettelse","UttakFaktaDetailForm.Årsak":"Årsak","UttakFaktaDetailForm.MorsAktivitet":"Mors aktivitet","UttakFaktaDetailForm.Flerbarnsdager":"Flerbarnsdager","UttakFaktaDetailForm.SamtidigUttaksprosent":"Samtidig uttaksprosent","UttakFaktaDetailForm.Arbeidsgiver":"Arbeidsgiver","UttakFaktaDetailForm.Opphold":"Opphold","UttakFaktaDetailForm.ErIkkeLikForsteUttaksdato":"En av periodene må ha dato lik første uttaksdato ({dato})","UttakFaktaDetailForm.ErFørFørsteUttaktsdato":"En periode kan ikke starte før første uttaksdato ({dato})","UttakFaktaDetailForm.ErFørFødselsdato":"En periode kan ikke starte før fødselsdato ({dato})","UttakFaktaDetailForm.TomForFom":"Dato kan ikke være før fra","UttakFaktaDetailForm.HarFlerbarnsdager":"Har flerbarnsdager","UttakFaktaDetailForm.Begrunnelse":"Begrunnelse","UttakFaktaDetailForm.Ja":"Ja","UttakFaktaDetailForm.Nei":"Nei","UttakFaktaDetailForm.UkjentArbeidsgiver":"Arbeidsgiver oppgitt for perioden er ukjent. Referanse: {aRef}","UttakFaktaDetailForm.HarGradering":"Gradering","UttakFaktaDetailForm.HarSamtidigUttaksprosent":"Samtidig uttaksprosent"},ZM=zt(XM),id=e=>C.jsx(od,{value:ZM,children:C.jsx(W_,{...e})});id.__docgenInfo={description:"",methods:[],displayName:"UttakFaktaIndex",props:{ytelsefordeling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  førsteUttaksdato: string;
  overstyrtOmsorg?: boolean;
  ønskerJustertVedFødsel?: boolean;
}`,signature:{properties:[{key:"førsteUttaksdato",value:{name:"string",required:!0}},{key:"overstyrtOmsorg",value:{name:"boolean",required:!1}},{key:"ønskerJustertVedFødsel",value:{name:"boolean",required:!1}}]}},description:""},uttakKontrollerFaktaPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  arbeidstidsprosent?: number;
  begrunnelse?: string;
  flerbarnsdager?: boolean;
  fom: string;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  samtidigUttaksprosent?: number;
  tom: string;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]},required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!1}}]}}],raw:"KontrollerFaktaPeriode[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},faktaArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]}}],raw:"FaktaArbeidsforhold[]"},description:""},kanOverstyre:{required:!0,tsType:{name:"boolean"},description:""}}};const QM={910909088:{erPrivatPerson:!1,identifikator:"910909088",referanse:"910909088",navn:"BEDRIFT AS"}},Mr={definisjon:Tn.OMSORGSOVERTAKELSE,status:"OPPR",kanLoses:!0,toTrinnsBehandling:!1,aksjonspunktType:"AUTO",vilkarType:Tv.OMSORGSVILKARET,erAktivt:!0},a5={title:"fakta/fakta-uttak",component:id,decorators:[IA,LA],args:{arbeidsgiverOpplysningerPerId:QM,kanOverstyre:!1,faktaArbeidsforhold:[{arbeidsgiverReferanse:"910909088",arbeidType:ot.ORDINÆRT_ARBEID},{arbeidType:ot.SELVSTENDIG_NÆRINGSDRIVENDE,arbeidsgiverReferanse:"null"}]},render:e=>C.jsx(id,{...e})},is={args:{aksjonspunkterForPanel:[],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:jn.MODREKVOTE,flerbarnsdager:!1,periodeKilde:"SØKNAD"}],kanOverstyre:!1}},ss={args:{aksjonspunkterForPanel:[],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:jn.MODREKVOTE,flerbarnsdager:!1,periodeKilde:"SØKNAD"}],kanOverstyre:!0}},os={args:{aksjonspunkterForPanel:[{...Mr,definisjon:Tn.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,status:"OPPR",kanLoses:!0}],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:jn.MODREKVOTE,arbeidstidsprosent:10,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:ot.ORDINÆRT_ARBEID},samtidigUttaksprosent:80,flerbarnsdager:!0,periodeKilde:"SØKNAD"},{fom:"2022-12-02",tom:"2022-12-10",uttakPeriodeType:jn.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:ot.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:"SØKNAD"},{fom:"2022-12-11",tom:"2022-12-20",uttakPeriodeType:jn.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:ot.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:"SØKNAD"}],kanOverstyre:!1}},us={args:{aksjonspunkterForPanel:[{...Mr,definisjon:Tn.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,status:"OPPR",kanLoses:!0}],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",utsettelseÅrsak:Rv.ARBEID,periodeKilde:"SØKNAD"}],kanOverstyre:!1}},ds={args:{aksjonspunkterForPanel:[{...Mr,definisjon:Tn.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,status:"OPPR",kanLoses:!0}],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",overføringÅrsak:t_.IKKE_RETT_ANNEN_FORELDER,uttakPeriodeType:jn.MODREKVOTE,periodeKilde:"SØKNAD"}],kanOverstyre:!1}},cs={args:{aksjonspunkterForPanel:[{...Mr,definisjon:Tn.FAKTA_UTTAK_INGEN_PERIODER_KODE,status:"OPPR",kanLoses:!0}],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[],kanOverstyre:!1}},ms={args:{aksjonspunkterForPanel:[{...Mr,definisjon:Tn.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,status:"OPPR",kanLoses:!0}],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:jn.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"91090823",arbeidType:ot.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:"SØKNAD"}],kanOverstyre:!1}},fs={args:{aksjonspunkterForPanel:[{...Mr,definisjon:Tn.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,status:"OPPR",kanLoses:!0}],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:jn.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910923",arbeidType:ot.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:"SØKNAD"}],kanOverstyre:!1}},Es={args:{aksjonspunkterForPanel:[{...Mr,definisjon:Tn.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,status:"UTFO",begrunnelse:"Dette er en begrunnelse",kanLoses:!1}],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:jn.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:ot.ORDINÆRT_ARBEID},samtidigUttaksprosent:50,morsAktivitet:"ARBEID",flerbarnsdager:!0,periodeKilde:"SØKNAD"}],kanOverstyre:!1,isReadOnly:!0}},vs={args:{aksjonspunkterForPanel:[{...Mr,definisjon:Tn.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,status:"UTFO",begrunnelse:"Dette er en begrunnelse",kanLoses:!1}],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:jn.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:ot.ORDINÆRT_ARBEID},samtidigUttaksprosent:50,morsAktivitet:"ARBEID",flerbarnsdager:!0,periodeKilde:"SØKNAD",begrunnelse:"Dette er en gammel begrunnelse"}],kanOverstyre:!1,isReadOnly:!0}},gs={args:{aksjonspunkterForPanel:[{...Mr,definisjon:Tn.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,status:"OPPR",kanLoses:!0}],ytelsefordeling:{førsteUttaksdato:"2022-01-31"},uttakKontrollerFaktaPerioder:[{fom:"2022-11-12",tom:"2022-12-01",uttakPeriodeType:jn.FELLESPERIODE,arbeidstidsprosent:10,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:ot.ORDINÆRT_ARBEID},samtidigUttaksprosent:80,flerbarnsdager:!0,periodeKilde:"SØKNAD"},{fom:"2022-12-02",tom:"2022-12-10",uttakPeriodeType:jn.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:ot.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:"SØKNAD"},{fom:"2022-12-11",tom:"2022-12-20",uttakPeriodeType:jn.MODREKVOTE,arbeidstidsprosent:50,arbeidsforhold:{arbeidsgiverReferanse:"910909088",arbeidType:ot.ORDINÆRT_ARBEID},flerbarnsdager:!1,periodeKilde:"SØKNAD"}],kanOverstyre:!1,fagsak:{relasjonsRolleType:ud.FAR}}};is.parameters={...is.parameters,docs:{...is.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      flerbarnsdager: false,
      periodeKilde: 'SØKNAD'
    }],
    kanOverstyre: false
  }
}`,...is.parameters?.docs?.source}}};ss.parameters={...ss.parameters,docs:{...ss.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      flerbarnsdager: false,
      periodeKilde: 'SØKNAD'
    }],
    kanOverstyre: true
  }
}`,...ss.parameters?.docs?.source}}};os.parameters={...os.parameters,docs:{...os.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: 'OPPR',
      kanLoses: true
    }],
    ytelsefordeling: {
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
      periodeKilde: 'SØKNAD'
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
      periodeKilde: 'SØKNAD'
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
      periodeKilde: 'SØKNAD'
    }],
    kanOverstyre: false
  }
}`,...os.parameters?.docs?.source}}};us.parameters={...us.parameters,docs:{...us.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: 'OPPR',
      kanLoses: true
    }],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      utsettelseÅrsak: UtsettelseÅrsak.ARBEID,
      periodeKilde: 'SØKNAD'
    }],
    kanOverstyre: false
  }
}`,...us.parameters?.docs?.source}}};ds.parameters={...ds.parameters,docs:{...ds.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: 'OPPR',
      kanLoses: true
    }],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [{
      fom: '2022-11-12',
      tom: '2022-12-01',
      overføringÅrsak: OverføringÅrsak.IKKE_RETT_ANNEN_FORELDER,
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      periodeKilde: 'SØKNAD'
    }],
    kanOverstyre: false
  }
}`,...ds.parameters?.docs?.source}}};cs.parameters={...cs.parameters,docs:{...cs.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE,
      status: 'OPPR',
      kanLoses: true
    }],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31'
    },
    uttakKontrollerFaktaPerioder: [],
    kanOverstyre: false
  }
}`,...cs.parameters?.docs?.source}}};ms.parameters={...ms.parameters,docs:{...ms.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,
      status: 'OPPR',
      kanLoses: true
    }],
    ytelsefordeling: {
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
      periodeKilde: 'SØKNAD'
    }],
    kanOverstyre: false
  }
}`,...ms.parameters?.docs?.source}}};fs.parameters={...fs.parameters,docs:{...fs.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
      status: 'OPPR',
      kanLoses: true
    }],
    ytelsefordeling: {
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
      periodeKilde: 'SØKNAD'
    }],
    kanOverstyre: false
  }
}`,...fs.parameters?.docs?.source}}};Es.parameters={...Es.parameters,docs:{...Es.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
      status: 'UTFO',
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: false
    }],
    ytelsefordeling: {
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
      periodeKilde: 'SØKNAD'
    }],
    kanOverstyre: false,
    isReadOnly: true
  }
}`,...Es.parameters?.docs?.source}}};vs.parameters={...vs.parameters,docs:{...vs.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
      status: 'UTFO',
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: false
    }],
    ytelsefordeling: {
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
      periodeKilde: 'SØKNAD',
      begrunnelse: 'Dette er en gammel begrunnelse'
    }],
    kanOverstyre: false,
    isReadOnly: true
  }
}`,...vs.parameters?.docs?.source}}};gs.parameters={...gs.parameters,docs:{...gs.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: 'OPPR',
      kanLoses: true
    }],
    ytelsefordeling: {
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
      periodeKilde: 'SØKNAD'
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
      periodeKilde: 'SØKNAD'
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
      periodeKilde: 'SØKNAD'
    }],
    kanOverstyre: false,
    fagsak: {
      relasjonsRolleType: RelasjonsRolleType.FAR
    } as Fagsak
  }
}`,...gs.parameters?.docs?.source}}};const l5=["VisUttaksperiodeUtenAksjonspunkt","VisUttaksperiodeUtenAksjonspunktKanOverstyre","VisUttaksperiodeMedAksjonspunkt","VisUtsettelseperiodeMedAksjonspunkt","VisOverføringsperiodeMedAksjonspunkt","VisAksjonspunktDerIngenPerioderFinnes","VisAksjonspunktDerArbeidsfoholdErUkjentVedGradering","VisAksjonspunktDerEnIkkeHarBeregningsgrunnlagVedGradering","VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet","VisBegrunnelseFraTidligereUtgaveAvPanel","VisUttaksperiodeMedAksjonspunktForFar"];export{ms as VisAksjonspunktDerArbeidsfoholdErUkjentVedGradering,fs as VisAksjonspunktDerEnIkkeHarBeregningsgrunnlagVedGradering,cs as VisAksjonspunktDerIngenPerioderFinnes,vs as VisBegrunnelseFraTidligereUtgaveAvPanel,ds as VisOverføringsperiodeMedAksjonspunkt,Es as VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet,us as VisUtsettelseperiodeMedAksjonspunkt,os as VisUttaksperiodeMedAksjonspunkt,gs as VisUttaksperiodeMedAksjonspunktForFar,is as VisUttaksperiodeUtenAksjonspunkt,ss as VisUttaksperiodeUtenAksjonspunktKanOverstyre,l5 as __namedExportsOrder,a5 as default};
