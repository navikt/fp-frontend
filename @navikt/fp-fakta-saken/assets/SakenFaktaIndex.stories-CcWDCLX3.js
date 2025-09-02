import{g as sv,r as R,u as Ss,_ as hf,s as pf,c as Bl,a as ke,b as k,d as ws,m as sT,e as Xa,S as Za,R as ov,f as Gl,h as Ut,i as at,P as Ma,n as qi,j,A as wr,o as _f,t as jr,k as Os,l as Ds,M as Ps,p as Qu,q as oT,E as uT,v as Hi,w as uv,B as dT,O as cT,x as mT,y as fT,z as gT}from"./iframe-DaVly7DC.js";import{r as vT}from"./index-BqSaKIuM.js";import"./preload-helper-D9Z9MdNV.js";var ed=vT();const dv=sv(ed);function hT(e,n){var t=e.values,r=hf(e,["values"]),l=n.values,s=hf(n,["values"]);return pf(l,t)&&pf(r,s)}function cv(e){var n=Ss(),t=n.formatMessage,r=n.textComponent,l=r===void 0?R.Fragment:r,s=e.id,u=e.description,d=e.defaultMessage,m=e.values,g=e.children,f=e.tagName,h=f===void 0?l:f,p=e.ignoreTag,y={id:s,description:u,defaultMessage:d},w=t(y,m,{ignoreTag:p});return typeof g=="function"?g(Array.isArray(w)?w:[w]):h?R.createElement(h,null,w):R.createElement(R.Fragment,null,w)}cv.displayName="FormattedMessage";var qe=R.memo(cv,hT);qe.displayName="MemoizedFormattedMessage";var dn=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(dn||{}),mv=(e=>(e.MANUELL="MANU",e.AUTOPUNKT="AUTO",e.OVERSTYRING="OVST",e.SAKSBEHANDLEROVERSTYRING="SAOV",e))(mv||{}),Ar=(e=>(e.KVINNE="K",e.MANN="M",e.UDEFINERT="-",e))(Ar||{}),fv=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(fv||{});const gv=(e,n)=>{if(e==null)throw Error("Data er ikke oppgitt");return e},Qa=e=>Bl({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var pT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const nd=R.forwardRef((e,n)=>{var{className:t,size:r="medium",as:l="p",spacing:s,truncate:u,weight:d="regular",align:m,visuallyHidden:g,textColor:f}=e,h=pT(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=ke();return k.createElement(l,Object.assign({},h,{ref:n,className:p(t,"navds-body-long",`navds-body-long--${r}`,Qa({spacing:s,truncate:u,weight:d,align:m,visuallyHidden:g,textColor:f}))}))});var _T=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const On=R.forwardRef((e,n)=>{var{className:t,size:r="medium",as:l="p",spacing:s,truncate:u,weight:d="regular",align:m,visuallyHidden:g,textColor:f}=e,h=_T(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=ke();return k.createElement(l,Object.assign({},h,{ref:n,className:p(t,"navds-body-short",`navds-body-short--${r}`,Qa({spacing:s,truncate:u,weight:d,align:m,visuallyHidden:g,textColor:f}))}))});var ET=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const td=R.forwardRef((e,n)=>{var{className:t,size:r="medium",spacing:l,uppercase:s,as:u="p",truncate:d,weight:m="regular",align:g,visuallyHidden:f,textColor:h}=e,p=ET(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=ke();return k.createElement(u,Object.assign({},p,{ref:n,className:y(t,"navds-detail",Qa({spacing:l,truncate:d,weight:m,align:g,visuallyHidden:f,textColor:h,uppercase:s}),{"navds-detail--small":r==="small"})}))});var yT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const jl=R.forwardRef((e,n)=>{var{children:t,className:r,size:l,spacing:s,as:u="p",showIcon:d=!1}=e,m=yT(e,["children","className","size","spacing","as","showIcon"]);const{cn:g}=ke();return k.createElement(u,Object.assign({},m,{ref:n,className:g("navds-error-message","navds-label",r,Qa({spacing:s}),{"navds-label--small":l==="small","navds-error-message--show-icon":d})}),d&&k.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var bT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const ua=R.forwardRef((e,n)=>{var{level:t="1",size:r,className:l,as:s,spacing:u,align:d,visuallyHidden:m,textColor:g}=e,f=bT(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:h}=ke(),p=s??`h${t}`;return k.createElement(p,Object.assign({},f,{ref:n,className:h(l,"navds-heading",`navds-heading--${r}`,Qa({spacing:u,align:d,visuallyHidden:m,textColor:g}))}))});var kT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};R.forwardRef((e,n)=>{var{className:t,spacing:r,as:l="p"}=e,s=kT(e,["className","spacing","as"]);const{cn:u}=ke();return k.createElement(l,Object.assign({},s,{ref:n,className:u(t,"navds-ingress",{"navds-typo--spacing":!!r})}))});var TT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const Ur=R.forwardRef((e,n)=>{var{className:t,size:r="medium",as:l="label",spacing:s,visuallyHidden:u,textColor:d}=e,m=TT(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:g}=ke();return k.createElement(l,Object.assign({},m,{ref:n,className:g(t,"navds-label",Qa({spacing:s,visuallyHidden:u,textColor:d}),{"navds-label--small":r==="small"})}))});function vv(e,n=166,t=!1){let r;function l(...s){const u=()=>{r=void 0,e.apply(this,s)};!r&&t&&u(),clearTimeout(r),r=setTimeout(u,n)}return l.clear=()=>{clearTimeout(r)},l}function Gn(e,n){const t=Object.entries(e).filter(([r])=>!n.includes(r));return Object.fromEntries(t)}const Ha=globalThis?.document?R.useLayoutEffect:()=>{};let Ef=0;function NT(e){const[n,t]=R.useState(e),r=e||n;return R.useEffect(()=>{n==null&&(Ef+=1,t(`aksel-id-${Ef}`))},[n]),r}const yf=k.useId;function ha(e){var n;if(yf!==void 0){const t=yf();return e??t.replace(/(:)/g,"")}return(n=NT(e))!==null&&n!==void 0?n:""}function Ml(e,n=[]){const t=R.useRef(e);return R.useEffect(()=>{t.current=e}),R.useCallback((...r)=>{var l;return(l=t.current)===null||l===void 0?void 0:l.call(t,...r)},n)}function cs({value:e,defaultValue:n,onChange:t}){const r=Ml(t),[l,s]=R.useState(n),u=e!==void 0,d=u?e:l,m=Ml(g=>{const h=typeof g=="function"?g(d):g;u||s(h),r(h)},[u,r,d]);return[d,m]}let bf=0;function AT(e){const[n,t]=R.useState(e),r=e||n;return R.useEffect(()=>{n==null&&(bf+=1,t(`aksel-icon-${bf}`))},[n]),r}const kf=k.useId;function lt(e){var n;return kf!==void 0?kf().replace(/(:)/g,""):(n=AT(e))!==null&&n!==void 0?n:""}var RT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const ST=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=RT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",d:"M8.97 6.97a.75.75 0 1 1 1.06 1.06l-3.22 3.22H19a.75.75 0 0 1 0 1.5H6.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06z"}))});var wT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const OT=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=wT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",d:"M14.087 6.873a.75.75 0 0 1 .943.097l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5a.75.75 0 0 1-.75-.74V12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 0 1 .117-1.157"}))});var DT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const PT=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=DT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var IT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const FT=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=IT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var LT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const hv=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=LT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var MT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const xT=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=MT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var KT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const VT=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=KT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var BT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const pv=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=BT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var GT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const _v=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=GT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var jT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const CT=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=jT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M19.638 4.417a3.25 3.25 0 0 0-4.608-.008l-9.378 9.379a.75.75 0 0 0-.191.324l-1.414 4.95a.75.75 0 0 0 .925.927l4.94-1.398a.75.75 0 0 0 .327-.191l9.39-9.391a3.25 3.25 0 0 0 .01-4.592M16.091 5.47a1.752 1.752 0 1 1 2.478 2.478l-.23.23-2.477-2.479zM14.8 6.76 6.85 14.71l-.991 3.47 3.457-.979 7.963-7.963z",clipRule:"evenodd"}))});var UT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const Ev=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=UT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M19.638 4.417a3.25 3.25 0 0 0-4.608-.008.33.33 0 0 0 .003.467l.298.292 3.841 3.84a.324.324 0 0 0 .458 0 3.25 3.25 0 0 0 .008-4.59m-1.651 6.235a.5.5 0 0 0 0-.707l-3.714-3.713-.184-.181a.5.5 0 0 0-.704.003l-7.733 7.734a.75.75 0 0 0-.19.324l-1.415 4.95a.75.75 0 0 0 .925.927l4.94-1.398a.75.75 0 0 0 .327-.191z",clipRule:"evenodd"}))});var qT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const HT=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=qT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var YT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const ms=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=YT(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var $T=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const WT=R.forwardRef((e,n)=>{var{title:t,titleId:r}=e,l=$T(e,["title","titleId"]);let s=lt();return s=t?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},l),t?R.createElement("title",{id:s},t):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function sa(e,n,{checkForDefaultPrevented:t=!0}={}){return function(l){if(e?.(l),t===!1||!l.defaultPrevented)return n?.(l)}}const[zT,Is]=ws({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),JT=typeof window<"u"&&window.matchMedia===void 0,XT=(e,n)=>{const[t,r]=R.useState(n);return R.useEffect(()=>{if(JT)return;const l=window.matchMedia(e);r(l.matches);const s=u=>{r(u.matches)};return l.addEventListener("change",s),()=>{l.removeEventListener("change",s)}},[e]),t};function Pt(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function Yn(e){return(n,t)=>{const r=t?.context?String(t.context):"standalone";let l;if(r==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,d=t?.width?String(t.width):u;l=e.formattingValues[d]||e.formattingValues[u]}else{const u=e.defaultWidth,d=t?.width?String(t.width):e.defaultWidth;l=e.values[d]||e.values[u]}const s=e.argumentCallback?e.argumentCallback(n):n;return l[s]}}function $n(e){return(n,t={})=>{const r=t.width,l=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=n.match(l);if(!s)return null;const u=s[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(d)?QT(d,h=>h.test(u)):ZT(d,h=>h.test(u));let g;g=e.valueCallback?e.valueCallback(m):m,g=t.valueCallback?t.valueCallback(g):g;const f=n.slice(u.length);return{value:g,rest:f}}}function ZT(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function QT(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function rd(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const l=r[0],s=n.match(e.parsePattern);if(!s)return null;let u=e.valueCallback?e.valueCallback(s[0]):s[0];u=t.valueCallback?t.valueCallback(u):u;const d=n.slice(l.length);return{value:u,rest:d}}}const yv=6048e5,eN=864e5,nN=6e4,tN=36e5,rN=1e3,Tf=Symbol.for("constructDateFrom");function He(e,n){return typeof e=="function"?e(n):e&&typeof e=="object"&&Tf in e?e[Tf](n):e instanceof Date?new e.constructor(n):new Date(n)}function el(e,...n){const t=He.bind(null,n.find(r=>typeof r=="object"));return n.map(t)}let aN={};function pa(){return aN}function De(e,n){return He(n||e,e)}function Rr(e,n){const t=pa(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,l=De(e,n?.in),s=l.getDay(),u=(s<r?7:0)+s-r;return l.setDate(l.getDate()-u),l.setHours(0,0,0,0),l}const lN={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},bv=(e,n,t)=>{let r;const l=lN[e];return typeof l=="string"?r=l:n===1?r=l.one:r=l.other.replace("{{count}}",n.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r},iN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},kv=(e,n,t,r)=>iN[e],sN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},oN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},uN={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},cN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},mN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},fN=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Tv={ordinalNumber:fN,era:Yn({values:sN,defaultWidth:"wide"}),quarter:Yn({values:oN,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Yn({values:uN,defaultWidth:"wide"}),day:Yn({values:dN,defaultWidth:"wide"}),dayPeriod:Yn({values:cN,defaultWidth:"wide",formattingValues:mN,defaultFormattingWidth:"wide"})},gN=/^(\d+)(th|st|nd|rd)?/i,vN=/\d+/i,hN={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},pN={any:[/^b/i,/^(a|c)/i]},_N={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},EN={any:[/1/i,/2/i,/3/i,/4/i]},yN={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},bN={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kN={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},TN={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},NN={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},AN={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Nv={ordinalNumber:rd({matchPattern:gN,parsePattern:vN,valueCallback:e=>parseInt(e,10)}),era:$n({matchPatterns:hN,defaultMatchWidth:"wide",parsePatterns:pN,defaultParseWidth:"any"}),quarter:$n({matchPatterns:_N,defaultMatchWidth:"wide",parsePatterns:EN,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$n({matchPatterns:yN,defaultMatchWidth:"wide",parsePatterns:bN,defaultParseWidth:"any"}),day:$n({matchPatterns:kN,defaultMatchWidth:"wide",parsePatterns:TN,defaultParseWidth:"any"}),dayPeriod:$n({matchPatterns:NN,defaultMatchWidth:"any",parsePatterns:AN,defaultParseWidth:"any"})},RN={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},SN={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},wN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ON={date:Pt({formats:RN,defaultWidth:"full"}),time:Pt({formats:SN,defaultWidth:"full"}),dateTime:Pt({formats:wN,defaultWidth:"full"})},Av={code:"en-GB",formatDistance:bv,formatLong:ON,formatRelative:kv,localize:Tv,match:Nv,options:{weekStartsOn:1,firstWeekContainsDate:4}},DN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},PN={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},IN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},FN={date:Pt({formats:DN,defaultWidth:"full"}),time:Pt({formats:PN,defaultWidth:"full"}),dateTime:Pt({formats:IN,defaultWidth:"full"})},Fs={code:"en-US",formatDistance:bv,formatLong:FN,formatRelative:kv,localize:Tv,match:Nv,options:{weekStartsOn:0,firstWeekContainsDate:1}},LN={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},MN=(e,n,t)=>{let r;const l=LN[e];return typeof l=="string"?r=l:n===1?r=l.one:r=l.other.replace("{{count}}",String(n)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+r:r+" siden":r},xN={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},KN={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},VN={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},BN={date:Pt({formats:xN,defaultWidth:"full"}),time:Pt({formats:KN,defaultWidth:"full"}),dateTime:Pt({formats:VN,defaultWidth:"full"})},GN={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},jN=(e,n,t,r)=>GN[e],CN={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},UN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},qN={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},HN={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},YN={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},$N=(e,n)=>Number(e)+".",WN={ordinalNumber:$N,era:Yn({values:CN,defaultWidth:"wide"}),quarter:Yn({values:UN,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Yn({values:qN,defaultWidth:"wide"}),day:Yn({values:HN,defaultWidth:"wide"}),dayPeriod:Yn({values:YN,defaultWidth:"wide"})},zN=/^(\d+)\.?/i,JN=/\d+/i,XN={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ZN={any:[/^f/i,/^e/i]},QN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},e5={any:[/1/i,/2/i,/3/i,/4/i]},n5={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},t5={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},r5={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},a5={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},l5={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},i5={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},s5={ordinalNumber:rd({matchPattern:zN,parsePattern:JN,valueCallback:e=>parseInt(e,10)}),era:$n({matchPatterns:XN,defaultMatchWidth:"wide",parsePatterns:ZN,defaultParseWidth:"any"}),quarter:$n({matchPatterns:QN,defaultMatchWidth:"wide",parsePatterns:e5,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$n({matchPatterns:n5,defaultMatchWidth:"wide",parsePatterns:t5,defaultParseWidth:"any"}),day:$n({matchPatterns:r5,defaultMatchWidth:"wide",parsePatterns:a5,defaultParseWidth:"any"}),dayPeriod:$n({matchPatterns:l5,defaultMatchWidth:"any",parsePatterns:i5,defaultParseWidth:"any"})},Rv={code:"nb",formatDistance:MN,formatLong:BN,formatRelative:jN,localize:WN,match:s5,options:{weekStartsOn:1,firstWeekContainsDate:4}},o5={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},u5=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],d5=(e,n,t)=>{let r;const l=o5[e];return typeof l=="string"?r=l:n===1?r=l.one:r=l.other.replace("{{count}}",n<13?u5[n]:String(n)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+r:r+" sidan":r},c5={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},m5={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},f5={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},g5={date:Pt({formats:c5,defaultWidth:"full"}),time:Pt({formats:m5,defaultWidth:"full"}),dateTime:Pt({formats:f5,defaultWidth:"full"})},v5={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},h5=(e,n,t,r)=>v5[e],p5={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},_5={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},E5={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},y5={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},b5={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},k5=(e,n)=>Number(e)+".",T5={ordinalNumber:k5,era:Yn({values:p5,defaultWidth:"wide"}),quarter:Yn({values:_5,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Yn({values:E5,defaultWidth:"wide"}),day:Yn({values:y5,defaultWidth:"wide"}),dayPeriod:Yn({values:b5,defaultWidth:"wide"})},N5=/^(\d+)\.?/i,A5=/\d+/i,R5={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},S5={any:[/^f/i,/^e/i]},w5={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},O5={any:[/1/i,/2/i,/3/i,/4/i]},D5={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},P5={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},I5={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},F5={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},L5={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},M5={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},x5={ordinalNumber:rd({matchPattern:N5,parsePattern:A5,valueCallback:e=>parseInt(e,10)}),era:$n({matchPatterns:R5,defaultMatchWidth:"wide",parsePatterns:S5,defaultParseWidth:"any"}),quarter:$n({matchPatterns:w5,defaultMatchWidth:"wide",parsePatterns:O5,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$n({matchPatterns:D5,defaultMatchWidth:"wide",parsePatterns:P5,defaultParseWidth:"any"}),day:$n({matchPatterns:I5,defaultMatchWidth:"wide",parsePatterns:F5,defaultParseWidth:"any"}),dayPeriod:$n({matchPatterns:L5,defaultMatchWidth:"any",parsePatterns:M5,defaultParseWidth:"any"})},Sv={code:"nn",formatDistance:d5,formatLong:g5,formatRelative:h5,localize:T5,match:x5,options:{weekStartsOn:1,firstWeekContainsDate:4}},K5={global:{dateLocale:Rv,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},V5=R.createContext({locale:K5}),ad=()=>R.useContext(V5);function Nf(e){return e.sort((n,t)=>{const r=n.compareDocumentPosition(t);if(r&Node.DOCUMENT_POSITION_FOLLOWING||r&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING||r&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(r&Node.DOCUMENT_POSITION_DISCONNECTED||r&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const B5=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Af(e,n,t){let r=e+1;return t&&r>=n&&(r=0),r}function Rf(e,n,t){let r=e-1;return t&&r<0&&(r=n),r}const ou=e=>e;class G5{constructor(){this.descendants=new Map,this.register=n=>{if(n!=null)return B5(n)?this.registerNode(n):t=>{this.registerNode(t,n)}},this.unregister=n=>{this.descendants.delete(n);const t=Nf(Array.from(this.descendants.keys()));this.assignIndex(t)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=n=>{this.descendants.forEach(t=>{const r=n.indexOf(t.node);t.index=r,t.node.dataset.index=t.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((t,r)=>t.index-r.index),this.enabledValues=()=>this.values().filter(n=>!n.disabled),this.item=n=>{if(this.count()!==0)return this.values()[n]},this.enabledItem=n=>{if(this.enabledCount()!==0)return this.enabledValues()[n]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const n=this.enabledValues().length-1;return this.enabledItem(n)},this.indexOf=n=>{var t,r;return n&&(r=(t=this.descendants.get(n))===null||t===void 0?void 0:t.index)!==null&&r!==void 0?r:-1},this.enabledIndexOf=n=>n==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(n)),this.next=(n,t=!0)=>{const r=Af(n,this.count(),t);return this.item(r)},this.nextEnabled=(n,t=!0)=>{const r=this.item(n);if(!r)return;const l=this.enabledIndexOf(r.node),s=Af(l,this.enabledCount(),t);return this.enabledItem(s)},this.prev=(n,t=!0)=>{const r=Rf(n,this.count()-1,t);return this.item(r)},this.prevEnabled=(n,t=!0)=>{const r=this.item(n);if(!r)return;const l=this.enabledIndexOf(r.node),s=Rf(l,this.enabledCount()-1,t);return this.enabledItem(s)},this.registerNode=(n,t)=>{if(!n)return;const r=this.descendants.get(n);if(r){this.descendants.set(n,Object.assign({index:r.index,node:n},t));return}const l=Array.from(this.descendants.keys()).concat(n),s=Nf(l);t?.disabled&&(t.disabled=!!t.disabled);const u=Object.assign({node:n,index:-1},t);this.descendants.set(n,u),this.assignIndex(s)}}}function j5(){const[e,n]=ws({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),t=ou(s=>k.createElement(e,Object.assign({},s.value),s.children));function r(s){const u=n(),[d,m]=R.useState(-1),g=R.useRef(null);Ha(()=>()=>{g.current&&u.unregister(g.current)},[]),Ha(()=>{if(!g.current)return;const h=Number(g.current.dataset.index);d!==h&&!Number.isNaN(h)&&m(h)});const f=ou(s?u.register(s):u.register);return{descendants:u,index:d,enabledIndex:u.enabledIndexOf(g.current),register:sT([f,g])}}function l(){return R.useRef(new G5).current}return[t,n,l,r]}function C5(e,n=globalThis?.document){const t=Ml(e);R.useEffect(()=>{const r=l=>{l.key==="Escape"&&t(l)};return n.addEventListener("keydown",r,!0),()=>n.removeEventListener("keydown",r,!0)},[t,n])}const wv={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function Ov(e,n,t,{discrete:r}={discrete:!1}){if(!n)return;const l=t.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});l.addEventListener(e,n,{once:!0}),r&&l?dv.flushSync(()=>l.dispatchEvent(s)):l.dispatchEvent(s)}function U5(e,n=globalThis?.document){const t=Ml(e),r=R.useRef(!1);return R.useEffect(()=>{const l=s=>{if(s.target&&!r.current){const u={originalEvent:s};Ov(wv.FOCUS_OUTSIDE,t,u)}};return n.addEventListener("focusin",l),()=>n.removeEventListener("focusin",l)},[n,t]),{onFocusCapture:()=>{r.current=!0},onBlurCapture:()=>{r.current=!1}}}function q5(e,n=globalThis?.document){const t=Ml(e),r=R.useRef(!1),l=R.useRef(()=>{});return R.useEffect(()=>{const s=d=>{function m(){Ov(wv.POINTER_DOWN_OUTSIDE,t,{originalEvent:d},{discrete:!0})}d.target&&!r.current?d.pointerType==="touch"?(n.removeEventListener("click",l.current),l.current=m,n.addEventListener("click",l.current,{once:!0})):m():n.removeEventListener("click",l.current),r.current=!1},u=window.setTimeout(()=>{n.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(u),n.removeEventListener("pointerdown",s),n.removeEventListener("click",l.current)}},[n,t]),{onPointerDownCapture:()=>{r.current=!0}}}var H5=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const[Y5,$5,W5,z5]=j5();let xa=0,Sf;const J5=R.forwardRef((e,n)=>$5(!1)?k.createElement(wf,Object.assign({ref:n},e)):k.createElement(X5,null,k.createElement(wf,Object.assign({ref:n},e)))),X5=({children:e})=>{const n=W5();return k.createElement(Y5,{value:n},e)},wf=R.forwardRef((e,n)=>{var t,{children:r,asChild:l,onEscapeKeyDown:s,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:m,onDismiss:g,safeZone:f,disableOutsidePointerEvents:h=!1,enabled:p=!0}=e,y=H5(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,w]=R.useState({}),{register:S,index:E,descendants:A}=z5({disableOutsidePointerEvents:h,disabled:!p,forceUpdate:()=>w({})}),[O,N]=R.useState(null),F=Xa(N,S,n),T=(t=O?.ownerDocument)!==null&&t!==void 0?t:globalThis?.document,K=R.useRef(!1),L=R.useRef(!1),V=(()=>{let G=-1;return A.enabledValues().forEach((re,ne)=>{re.disableOutsidePointerEvents&&(G=ne)}),{isPointerEventsEnabled:E>=G,isBodyPointerEventsDisabled:xa>0,pointerStyle:E>=G&&xa>0?"auto":void 0}})();function C(G){var Z,re;if(!f?.anchor&&!f?.dismissable||!p)return;G.defaultPrevented||(K.current=!0,G.detail.originalEvent.type==="pointerdown"&&(L.current=!0));const ne=G.target;G.detail.originalEvent.type==="pointerdown"?(!((Z=f?.anchor)===null||Z===void 0)&&Z.contains(ne)||ne===f?.anchor)&&G.preventDefault():!(ne instanceof HTMLElement&&![f?.anchor,f?.dismissable].some(ee=>ee?.contains(ne))&&!ne.contains((re=f?.dismissable)!==null&&re!==void 0?re:null))&&G.preventDefault(),G.detail.originalEvent.type==="focusin"&&L.current&&G.preventDefault(),L.current=!1,K.current=!1}const J=q5(G=>{!V.isPointerEventsEnabled||!p||(u?.(G),m?.(G),f&&C(G),!G.defaultPrevented&&g&&g())},T),W=U5(G=>{p&&(d?.(G),m?.(G),f&&C(G),!G.defaultPrevented&&g&&g())},T);C5(G=>{!p||!(E===A.enabledCount()-1)||(s?.(G),!G.defaultPrevented&&g&&(G.preventDefault(),g()))},T),R.useEffect(()=>{if(!(!O||!p||!h))return xa===0&&(Sf=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),xa++,()=>{xa===1&&(T.body.style.pointerEvents=Sf),xa--}},[O,T,h,A,p]),R.useEffect(()=>()=>A.values().forEach(G=>G.forceUpdate()),[A,O]);const q=l?Za:"div";return k.createElement(q,Object.assign({ref:F},y,{onFocusCapture:W.onFocusCapture,onBlurCapture:W.onBlurCapture,onPointerDownCapture:J.onPointerDownCapture,style:Object.assign({pointerEvents:V.pointerStyle},y.style)}),r)}),Ya=Math.min,oa=Math.max,fs=Math.round,Yi=Math.floor,rr=e=>({x:e,y:e}),Z5={left:"right",right:"left",bottom:"top",top:"bottom"},Q5={start:"end",end:"start"};function wu(e,n,t){return oa(e,Ya(n,t))}function Cl(e,n){return typeof e=="function"?e(n):e}function da(e){return e.split("-")[0]}function Ul(e){return e.split("-")[1]}function Dv(e){return e==="x"?"y":"x"}function ld(e){return e==="y"?"height":"width"}function $a(e){return["top","bottom"].includes(da(e))?"y":"x"}function id(e){return Dv($a(e))}function eA(e,n,t){t===void 0&&(t=!1);const r=Ul(e),l=id(e),s=ld(l);let u=l==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[s]>n.floating[s]&&(u=gs(u)),[u,gs(u)]}function nA(e){const n=gs(e);return[Ou(e),n,Ou(n)]}function Ou(e){return e.replace(/start|end/g,n=>Q5[n])}function tA(e,n,t){const r=["left","right"],l=["right","left"],s=["top","bottom"],u=["bottom","top"];switch(e){case"top":case"bottom":return t?n?l:r:n?r:l;case"left":case"right":return n?s:u;default:return[]}}function rA(e,n,t,r){const l=Ul(e);let s=tA(da(e),t==="start",r);return l&&(s=s.map(u=>u+"-"+l),n&&(s=s.concat(s.map(Ou)))),s}function gs(e){return e.replace(/left|right|bottom|top/g,n=>Z5[n])}function aA(e){return{top:0,right:0,bottom:0,left:0,...e}}function Pv(e){return typeof e!="number"?aA(e):{top:e,right:e,bottom:e,left:e}}function vs(e){const{x:n,y:t,width:r,height:l}=e;return{width:r,height:l,top:t,left:n,right:n+r,bottom:t+l,x:n,y:t}}function Of(e,n,t){let{reference:r,floating:l}=e;const s=$a(n),u=id(n),d=ld(u),m=da(n),g=s==="y",f=r.x+r.width/2-l.width/2,h=r.y+r.height/2-l.height/2,p=r[d]/2-l[d]/2;let y;switch(m){case"top":y={x:f,y:r.y-l.height};break;case"bottom":y={x:f,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:h};break;case"left":y={x:r.x-l.width,y:h};break;default:y={x:r.x,y:r.y}}switch(Ul(n)){case"start":y[u]-=p*(t&&g?-1:1);break;case"end":y[u]+=p*(t&&g?-1:1);break}return y}const lA=async(e,n,t)=>{const{placement:r="bottom",strategy:l="absolute",middleware:s=[],platform:u}=t,d=s.filter(Boolean),m=await(u.isRTL==null?void 0:u.isRTL(n));let g=await u.getElementRects({reference:e,floating:n,strategy:l}),{x:f,y:h}=Of(g,r,m),p=r,y={},w=0;for(let S=0;S<d.length;S++){const{name:E,fn:A}=d[S],{x:O,y:N,data:F,reset:T}=await A({x:f,y:h,initialPlacement:r,placement:p,strategy:l,middlewareData:y,rects:g,platform:u,elements:{reference:e,floating:n}});f=O??f,h=N??h,y={...y,[E]:{...y[E],...F}},T&&w<=50&&(w++,typeof T=="object"&&(T.placement&&(p=T.placement),T.rects&&(g=T.rects===!0?await u.getElementRects({reference:e,floating:n,strategy:l}):T.rects),{x:f,y:h}=Of(g,p,m)),S=-1)}return{x:f,y:h,placement:p,strategy:l,middlewareData:y}};async function Iv(e,n){var t;n===void 0&&(n={});const{x:r,y:l,platform:s,rects:u,elements:d,strategy:m}=e,{boundary:g="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:p=!1,padding:y=0}=Cl(n,e),w=Pv(y),E=d[p?h==="floating"?"reference":"floating":h],A=vs(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(E)))==null||t?E:E.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(d.floating)),boundary:g,rootBoundary:f,strategy:m})),O=h==="floating"?{x:r,y:l,width:u.floating.width,height:u.floating.height}:u.reference,N=await(s.getOffsetParent==null?void 0:s.getOffsetParent(d.floating)),F=await(s.isElement==null?void 0:s.isElement(N))?await(s.getScale==null?void 0:s.getScale(N))||{x:1,y:1}:{x:1,y:1},T=vs(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:O,offsetParent:N,strategy:m}):O);return{top:(A.top-T.top+w.top)/F.y,bottom:(T.bottom-A.bottom+w.bottom)/F.y,left:(A.left-T.left+w.left)/F.x,right:(T.right-A.right+w.right)/F.x}}const iA=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:r,placement:l,rects:s,platform:u,elements:d,middlewareData:m}=n,{element:g,padding:f=0}=Cl(e,n)||{};if(g==null)return{};const h=Pv(f),p={x:t,y:r},y=id(l),w=ld(y),S=await u.getDimensions(g),E=y==="y",A=E?"top":"left",O=E?"bottom":"right",N=E?"clientHeight":"clientWidth",F=s.reference[w]+s.reference[y]-p[y]-s.floating[w],T=p[y]-s.reference[y],K=await(u.getOffsetParent==null?void 0:u.getOffsetParent(g));let L=K?K[N]:0;(!L||!await(u.isElement==null?void 0:u.isElement(K)))&&(L=d.floating[N]||s.floating[w]);const V=F/2-T/2,C=L/2-S[w]/2-1,J=Ya(h[A],C),W=Ya(h[O],C),q=J,G=L-S[w]-W,Z=L/2-S[w]/2+V,re=wu(q,Z,G),ne=!m.arrow&&Ul(l)!=null&&Z!==re&&s.reference[w]/2-(Z<q?J:W)-S[w]/2<0,oe=ne?Z<q?Z-q:Z-G:0;return{[y]:p[y]+oe,data:{[y]:re,centerOffset:Z-re-oe,...ne&&{alignmentOffset:oe}},reset:ne}}}),sA=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,r;const{placement:l,middlewareData:s,rects:u,initialPlacement:d,platform:m,elements:g}=n,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:S=!0,...E}=Cl(e,n);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const A=da(l),O=$a(d),N=da(d)===d,F=await(m.isRTL==null?void 0:m.isRTL(g.floating)),T=p||(N||!S?[gs(d)]:nA(d)),K=w!=="none";!p&&K&&T.push(...rA(d,S,w,F));const L=[d,...T],V=await Iv(n,E),C=[];let J=((r=s.flip)==null?void 0:r.overflows)||[];if(f&&C.push(V[A]),h){const Z=eA(l,u,F);C.push(V[Z[0]],V[Z[1]])}if(J=[...J,{placement:l,overflows:C}],!C.every(Z=>Z<=0)){var W,q;const Z=(((W=s.flip)==null?void 0:W.index)||0)+1,re=L[Z];if(re)return{data:{index:Z,overflows:J},reset:{placement:re}};let ne=(q=J.filter(oe=>oe.overflows[0]<=0).sort((oe,ee)=>oe.overflows[1]-ee.overflows[1])[0])==null?void 0:q.placement;if(!ne)switch(y){case"bestFit":{var G;const oe=(G=J.filter(ee=>{if(K){const me=$a(ee.placement);return me===O||me==="y"}return!0}).map(ee=>[ee.placement,ee.overflows.filter(me=>me>0).reduce((me,Ne)=>me+Ne,0)]).sort((ee,me)=>ee[1]-me[1])[0])==null?void 0:G[0];oe&&(ne=oe);break}case"initialPlacement":ne=d;break}if(l!==ne)return{reset:{placement:ne}}}return{}}}};async function oA(e,n){const{placement:t,platform:r,elements:l}=e,s=await(r.isRTL==null?void 0:r.isRTL(l.floating)),u=da(t),d=Ul(t),m=$a(t)==="y",g=["left","top"].includes(u)?-1:1,f=s&&m?-1:1,h=Cl(n,e);let{mainAxis:p,crossAxis:y,alignmentAxis:w}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return d&&typeof w=="number"&&(y=d==="end"?w*-1:w),m?{x:y*f,y:p*g}:{x:p*g,y:y*f}}const uA=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,r;const{x:l,y:s,placement:u,middlewareData:d}=n,m=await oA(n,e);return u===((t=d.offset)==null?void 0:t.placement)&&(r=d.arrow)!=null&&r.alignmentOffset?{}:{x:l+m.x,y:s+m.y,data:{...m,placement:u}}}}},dA=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:r,placement:l}=n,{mainAxis:s=!0,crossAxis:u=!1,limiter:d={fn:E=>{let{x:A,y:O}=E;return{x:A,y:O}}},...m}=Cl(e,n),g={x:t,y:r},f=await Iv(n,m),h=$a(da(l)),p=Dv(h);let y=g[p],w=g[h];if(s){const E=p==="y"?"top":"left",A=p==="y"?"bottom":"right",O=y+f[E],N=y-f[A];y=wu(O,y,N)}if(u){const E=h==="y"?"top":"left",A=h==="y"?"bottom":"right",O=w+f[E],N=w-f[A];w=wu(O,w,N)}const S=d.fn({...n,[p]:y,[h]:w});return{...S,data:{x:S.x-t,y:S.y-r,enabled:{[p]:s,[h]:u}}}}}};function Ls(){return typeof window<"u"}function nl(e){return Fv(e)?(e.nodeName||"").toLowerCase():"#document"}function Et(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function ir(e){var n;return(n=(Fv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function Fv(e){return Ls()?e instanceof Node||e instanceof Et(e).Node:!1}function Bn(e){return Ls()?e instanceof Element||e instanceof Et(e).Element:!1}function ar(e){return Ls()?e instanceof HTMLElement||e instanceof Et(e).HTMLElement:!1}function Df(e){return!Ls()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Et(e).ShadowRoot}function ql(e){const{overflow:n,overflowX:t,overflowY:r,display:l}=Ct(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&!["inline","contents"].includes(l)}function cA(e){return["table","td","th"].includes(nl(e))}function Ms(e){return[":popover-open",":modal"].some(n=>{try{return e.matches(n)}catch{return!1}})}function sd(e){const n=od(),t=Bn(e)?Ct(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>t[r]?t[r]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(t.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(t.contain||"").includes(r))}function mA(e){let n=Cr(e);for(;ar(n)&&!Wa(n);){if(sd(n))return n;if(Ms(n))return null;n=Cr(n)}return null}function od(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Wa(e){return["html","body","#document"].includes(nl(e))}function Ct(e){return Et(e).getComputedStyle(e)}function xs(e){return Bn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Cr(e){if(nl(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Df(e)&&e.host||ir(e);return Df(n)?n.host:n}function Lv(e){const n=Cr(e);return Wa(n)?e.ownerDocument?e.ownerDocument.body:e.body:ar(n)&&ql(n)?n:Lv(n)}function xl(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const l=Lv(e),s=l===((r=e.ownerDocument)==null?void 0:r.body),u=Et(l);if(s){const d=Du(u);return n.concat(u,u.visualViewport||[],ql(l)?l:[],d&&t?xl(d):[])}return n.concat(l,xl(l,[],t))}function Du(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Mv(e){const n=Ct(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const l=ar(e),s=l?e.offsetWidth:t,u=l?e.offsetHeight:r,d=fs(t)!==s||fs(r)!==u;return d&&(t=s,r=u),{width:t,height:r,$:d}}function ud(e){return Bn(e)?e:e.contextElement}function ja(e){const n=ud(e);if(!ar(n))return rr(1);const t=n.getBoundingClientRect(),{width:r,height:l,$:s}=Mv(n);let u=(s?fs(t.width):t.width)/r,d=(s?fs(t.height):t.height)/l;return(!u||!Number.isFinite(u))&&(u=1),(!d||!Number.isFinite(d))&&(d=1),{x:u,y:d}}const fA=rr(0);function xv(e){const n=Et(e);return!od()||!n.visualViewport?fA:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function gA(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==Et(e)?!1:n}function ca(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=!1);const l=e.getBoundingClientRect(),s=ud(e);let u=rr(1);n&&(r?Bn(r)&&(u=ja(r)):u=ja(e));const d=gA(s,t,r)?xv(s):rr(0);let m=(l.left+d.x)/u.x,g=(l.top+d.y)/u.y,f=l.width/u.x,h=l.height/u.y;if(s){const p=Et(s),y=r&&Bn(r)?Et(r):r;let w=p,S=Du(w);for(;S&&r&&y!==w;){const E=ja(S),A=S.getBoundingClientRect(),O=Ct(S),N=A.left+(S.clientLeft+parseFloat(O.paddingLeft))*E.x,F=A.top+(S.clientTop+parseFloat(O.paddingTop))*E.y;m*=E.x,g*=E.y,f*=E.x,h*=E.y,m+=N,g+=F,w=Et(S),S=Du(w)}}return vs({width:f,height:h,x:m,y:g})}function dd(e,n){const t=xs(e).scrollLeft;return n?n.left+t:ca(ir(e)).left+t}function Kv(e,n,t){t===void 0&&(t=!1);const r=e.getBoundingClientRect(),l=r.left+n.scrollLeft-(t?0:dd(e,r)),s=r.top+n.scrollTop;return{x:l,y:s}}function vA(e){let{elements:n,rect:t,offsetParent:r,strategy:l}=e;const s=l==="fixed",u=ir(r),d=n?Ms(n.floating):!1;if(r===u||d&&s)return t;let m={scrollLeft:0,scrollTop:0},g=rr(1);const f=rr(0),h=ar(r);if((h||!h&&!s)&&((nl(r)!=="body"||ql(u))&&(m=xs(r)),ar(r))){const y=ca(r);g=ja(r),f.x=y.x+r.clientLeft,f.y=y.y+r.clientTop}const p=u&&!h&&!s?Kv(u,m,!0):rr(0);return{width:t.width*g.x,height:t.height*g.y,x:t.x*g.x-m.scrollLeft*g.x+f.x+p.x,y:t.y*g.y-m.scrollTop*g.y+f.y+p.y}}function hA(e){return Array.from(e.getClientRects())}function pA(e){const n=ir(e),t=xs(e),r=e.ownerDocument.body,l=oa(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),s=oa(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let u=-t.scrollLeft+dd(e);const d=-t.scrollTop;return Ct(r).direction==="rtl"&&(u+=oa(n.clientWidth,r.clientWidth)-l),{width:l,height:s,x:u,y:d}}function _A(e,n){const t=Et(e),r=ir(e),l=t.visualViewport;let s=r.clientWidth,u=r.clientHeight,d=0,m=0;if(l){s=l.width,u=l.height;const g=od();(!g||g&&n==="fixed")&&(d=l.offsetLeft,m=l.offsetTop)}return{width:s,height:u,x:d,y:m}}function EA(e,n){const t=ca(e,!0,n==="fixed"),r=t.top+e.clientTop,l=t.left+e.clientLeft,s=ar(e)?ja(e):rr(1),u=e.clientWidth*s.x,d=e.clientHeight*s.y,m=l*s.x,g=r*s.y;return{width:u,height:d,x:m,y:g}}function Pf(e,n,t){let r;if(n==="viewport")r=_A(e,t);else if(n==="document")r=pA(ir(e));else if(Bn(n))r=EA(n,t);else{const l=xv(e);r={x:n.x-l.x,y:n.y-l.y,width:n.width,height:n.height}}return vs(r)}function Vv(e,n){const t=Cr(e);return t===n||!Bn(t)||Wa(t)?!1:Ct(t).position==="fixed"||Vv(t,n)}function yA(e,n){const t=n.get(e);if(t)return t;let r=xl(e,[],!1).filter(d=>Bn(d)&&nl(d)!=="body"),l=null;const s=Ct(e).position==="fixed";let u=s?Cr(e):e;for(;Bn(u)&&!Wa(u);){const d=Ct(u),m=sd(u);!m&&d.position==="fixed"&&(l=null),(s?!m&&!l:!m&&d.position==="static"&&!!l&&["absolute","fixed"].includes(l.position)||ql(u)&&!m&&Vv(e,u))?r=r.filter(f=>f!==u):l=d,u=Cr(u)}return n.set(e,r),r}function bA(e){let{element:n,boundary:t,rootBoundary:r,strategy:l}=e;const u=[...t==="clippingAncestors"?Ms(n)?[]:yA(n,this._c):[].concat(t),r],d=u[0],m=u.reduce((g,f)=>{const h=Pf(n,f,l);return g.top=oa(h.top,g.top),g.right=Ya(h.right,g.right),g.bottom=Ya(h.bottom,g.bottom),g.left=oa(h.left,g.left),g},Pf(n,d,l));return{width:m.right-m.left,height:m.bottom-m.top,x:m.left,y:m.top}}function kA(e){const{width:n,height:t}=Mv(e);return{width:n,height:t}}function TA(e,n,t){const r=ar(n),l=ir(n),s=t==="fixed",u=ca(e,!0,s,n);let d={scrollLeft:0,scrollTop:0};const m=rr(0);if(r||!r&&!s)if((nl(n)!=="body"||ql(l))&&(d=xs(n)),r){const p=ca(n,!0,s,n);m.x=p.x+n.clientLeft,m.y=p.y+n.clientTop}else l&&(m.x=dd(l));const g=l&&!r&&!s?Kv(l,d):rr(0),f=u.left+d.scrollLeft-m.x-g.x,h=u.top+d.scrollTop-m.y-g.y;return{x:f,y:h,width:u.width,height:u.height}}function uu(e){return Ct(e).position==="static"}function If(e,n){if(!ar(e)||Ct(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return ir(e)===t&&(t=t.ownerDocument.body),t}function Bv(e,n){const t=Et(e);if(Ms(e))return t;if(!ar(e)){let l=Cr(e);for(;l&&!Wa(l);){if(Bn(l)&&!uu(l))return l;l=Cr(l)}return t}let r=If(e,n);for(;r&&cA(r)&&uu(r);)r=If(r,n);return r&&Wa(r)&&uu(r)&&!sd(r)?t:r||mA(e)||t}const NA=async function(e){const n=this.getOffsetParent||Bv,t=this.getDimensions,r=await t(e.floating);return{reference:TA(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function AA(e){return Ct(e).direction==="rtl"}const RA={convertOffsetParentRelativeRectToViewportRelativeRect:vA,getDocumentElement:ir,getClippingRect:bA,getOffsetParent:Bv,getElementRects:NA,getClientRects:hA,getDimensions:kA,getScale:ja,isElement:Bn,isRTL:AA};function Gv(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function SA(e,n){let t=null,r;const l=ir(e);function s(){var d;clearTimeout(r),(d=t)==null||d.disconnect(),t=null}function u(d,m){d===void 0&&(d=!1),m===void 0&&(m=1),s();const g=e.getBoundingClientRect(),{left:f,top:h,width:p,height:y}=g;if(d||n(),!p||!y)return;const w=Yi(h),S=Yi(l.clientWidth-(f+p)),E=Yi(l.clientHeight-(h+y)),A=Yi(f),N={rootMargin:-w+"px "+-S+"px "+-E+"px "+-A+"px",threshold:oa(0,Ya(1,m))||1};let F=!0;function T(K){const L=K[0].intersectionRatio;if(L!==m){if(!F)return u();L?u(!1,L):r=setTimeout(()=>{u(!1,1e-7)},1e3)}L===1&&!Gv(g,e.getBoundingClientRect())&&u(),F=!1}try{t=new IntersectionObserver(T,{...N,root:l.ownerDocument})}catch{t=new IntersectionObserver(T,N)}t.observe(e)}return u(!0),s}function wA(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:l=!0,ancestorResize:s=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:m=!1}=r,g=ud(e),f=l||s?[...g?xl(g):[],...xl(n)]:[];f.forEach(A=>{l&&A.addEventListener("scroll",t,{passive:!0}),s&&A.addEventListener("resize",t)});const h=g&&d?SA(g,t):null;let p=-1,y=null;u&&(y=new ResizeObserver(A=>{let[O]=A;O&&O.target===g&&y&&(y.unobserve(n),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var N;(N=y)==null||N.observe(n)})),t()}),g&&!m&&y.observe(g),y.observe(n));let w,S=m?ca(e):null;m&&E();function E(){const A=ca(e);S&&!Gv(S,A)&&t(),S=A,w=requestAnimationFrame(E)}return t(),()=>{var A;f.forEach(O=>{l&&O.removeEventListener("scroll",t),s&&O.removeEventListener("resize",t)}),h?.(),(A=y)==null||A.disconnect(),y=null,m&&cancelAnimationFrame(w)}}const OA=uA,DA=dA,PA=sA,Ff=iA,IA=(e,n,t)=>{const r=new Map,l={platform:RA,...t},s={...l.platform,_c:r};return lA(e,n,{...l,platform:s})};var os=typeof document<"u"?R.useLayoutEffect:R.useEffect;function hs(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,r,l;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(r=t;r--!==0;)if(!hs(e[r],n[r]))return!1;return!0}if(l=Object.keys(e),t=l.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(n,l[r]))return!1;for(r=t;r--!==0;){const s=l[r];if(!(s==="_owner"&&e.$$typeof)&&!hs(e[s],n[s]))return!1}return!0}return e!==e&&n!==n}function jv(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Lf(e,n){const t=jv(e);return Math.round(n*t)/t}function du(e){const n=R.useRef(e);return os(()=>{n.current=e}),n}function FA(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:r=[],platform:l,elements:{reference:s,floating:u}={},transform:d=!0,whileElementsMounted:m,open:g}=e,[f,h]=R.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[p,y]=R.useState(r);hs(p,r)||y(r);const[w,S]=R.useState(null),[E,A]=R.useState(null),O=R.useCallback(ee=>{ee!==K.current&&(K.current=ee,S(ee))},[]),N=R.useCallback(ee=>{ee!==L.current&&(L.current=ee,A(ee))},[]),F=s||w,T=u||E,K=R.useRef(null),L=R.useRef(null),V=R.useRef(f),C=m!=null,J=du(m),W=du(l),q=du(g),G=R.useCallback(()=>{if(!K.current||!L.current)return;const ee={placement:n,strategy:t,middleware:p};W.current&&(ee.platform=W.current),IA(K.current,L.current,ee).then(me=>{const Ne={...me,isPositioned:q.current!==!1};Z.current&&!hs(V.current,Ne)&&(V.current=Ne,ed.flushSync(()=>{h(Ne)}))})},[p,n,t,W,q]);os(()=>{g===!1&&V.current.isPositioned&&(V.current.isPositioned=!1,h(ee=>({...ee,isPositioned:!1})))},[g]);const Z=R.useRef(!1);os(()=>(Z.current=!0,()=>{Z.current=!1}),[]),os(()=>{if(F&&(K.current=F),T&&(L.current=T),F&&T){if(J.current)return J.current(F,T,G);G()}},[F,T,G,J,C]);const re=R.useMemo(()=>({reference:K,floating:L,setReference:O,setFloating:N}),[O,N]),ne=R.useMemo(()=>({reference:F,floating:T}),[F,T]),oe=R.useMemo(()=>{const ee={position:t,left:0,top:0};if(!ne.floating)return ee;const me=Lf(ne.floating,f.x),Ne=Lf(ne.floating,f.y);return d?{...ee,transform:"translate("+me+"px, "+Ne+"px)",...jv(ne.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:me,top:Ne}},[t,d,ne.floating,f.x,f.y]);return R.useMemo(()=>({...f,update:G,refs:re,elements:ne,floatingStyles:oe}),[f,G,re,ne,oe])}const LA=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:r,padding:l}=typeof e=="function"?e(t):e;return r&&n(r)?r.current!=null?Ff({element:r.current,padding:l}).fn(t):{}:r?Ff({element:r,padding:l}).fn(t):{}}}},MA=(e,n)=>({...OA(e),options:[e,n]}),xA=(e,n)=>({...DA(e),options:[e,n]}),KA=(e,n)=>({...PA(e),options:[e,n]}),VA=(e,n)=>({...LA(e),options:[e,n]}),Mf=/(\w+)/g;function BA(e,n){const t=Array.isArray(e)?e:GA(e);for(const r of n){if(!r)continue;let l=r;for(let s=0;s<t.length;s++){const u=l[t[s]];u!==void 0&&(l=u)}if(typeof l=="string")return l}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function GA(e){const n=[];let t=Mf.exec(e);for(;t;){const[,r,l]=t;n.push(r||l),t=Mf.exec(e)}return n}const jA=/{[^}]*}/g;function sr(e,...n){const t=ad(),r=t.translations||[],l=[...n,...Array.isArray(r)?r.map(u=>u[e]):[r[e]],t.locale[e]];return(u,d)=>{const m=BA(u,l);return d?m.replace(jA,g=>{const f=g.substring(1,g.length-1);if(d[f]===void 0){const h=JSON.stringify(d);throw new Error(`Error translating key '${u}'. No replacement syntax ({}) found for key '${f}'. The following replacements were passed: '${h}'`)}return d[f]}):m}}function Cv(){const e=ad(),n=e.translations||[],t=Array.isArray(n)?n.map(r=>r.global):[n.global];t.push(e.locale.global);for(const r of t)if(r?.dateLocale)return r.dateLocale;throw new Error("dateLocale not found.")}var CA=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const UA=R.forwardRef((e,n)=>{var{className:t,size:r="medium",title:l,transparent:s=!1,variant:u="neutral",id:d,"data-color":m}=e,g=CA(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:f}=ke(),h=ha(),p=sr("Loader");return k.createElement("svg",Object.assign({"aria-labelledby":d??`loader-${h}`,ref:n,className:f("navds-loader",t,`navds-loader--${r}`,`navds-loader--${u}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":m??qA(u)},Gn(g,["children"]),{"data-variant":u}),k.createElement("title",{id:d??`loader-${h}`},l||p("title")),k.createElement("circle",{className:f("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),k.createElement("circle",{className:f("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function qA(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var HA=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const yt=R.forwardRef((e,n)=>{var{as:t="button",variant:r="primary",className:l,children:s,size:u="medium",loading:d=!1,disabled:m,icon:g,iconPosition:f="left",onKeyUp:h,"data-color":p}=e,y=HA(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:w}=ke(),S=m||d?Gn(y,["href"]):y,E=A=>{A.key===" "&&!m&&!d&&A.currentTarget.click()};return k.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":p??YA(r),"data-variant":$A(r)},S,{ref:n,onKeyUp:sa(h,E),className:w(l,"navds-button",`navds-button--${r}`,`navds-button--${u}`,{"navds-button--loading":d,"navds-button--icon-only":!!g&&!s,"navds-button--disabled":m??d}),disabled:m??d?!0:void 0}),g&&f==="left"&&k.createElement("span",{className:w("navds-button__icon")},g),d&&k.createElement(UA,{size:u}),s&&k.createElement(Ur,{as:"span",size:u==="medium"?"medium":"small"},s),g&&f==="right"&&k.createElement("span",{className:w("navds-button__icon")},g))});function YA(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function $A(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var WA=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const zA={error:WT,warning:xT,info:VT,success:FT},JA=R.forwardRef((e,n)=>{var{children:t,className:r,variant:l,size:s="medium",fullWidth:u=!1,contentMaxWidth:d=!0,inline:m=!1,closeButton:g=!1,onClose:f}=e,h=WA(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:p}=ke(),y=sr("Alert"),w=zA[l];return k.createElement("div",Object.assign({},h,{"data-color":XA(l),"data-variant":l,ref:n,className:p(r,"navds-alert",`navds-alert--${l}`,`navds-alert--${s}`,{"navds-alert--full-width":u,"navds-alert--inline":m,"navds-alert--close-button":g})}),k.createElement(w,{title:y(l),className:p("navds-alert__icon")}),k.createElement(nd,{as:"div",size:s,className:p("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},t),g&&!m&&k.createElement("div",{className:p("navds-alert__button-wrapper")},k.createElement(yt,{className:p("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:f,type:"button",icon:k.createElement(ms,{title:["error","warning"].includes(l)?y("closeAlert"):y("closeMessage")})})))});function XA(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function Hl(e,n,t){const r=De(e,t?.in);return isNaN(n)?He(t?.in||e,NaN):(n&&r.setDate(r.getDate()+n),r)}function cd(e,n,t){const r=De(e,t?.in);if(isNaN(n))return He(e,NaN);if(!n)return r;const l=r.getDate(),s=He(e,r.getTime());s.setMonth(r.getMonth()+n+1,0);const u=s.getDate();return l>=u?s:(r.setFullYear(s.getFullYear(),s.getMonth(),l),r)}function ps(e,n){const t=De(e,n?.in).getDay();return t===0||t===6}function ma(e,n){return Rr(e,{...n,weekStartsOn:1})}function Uv(e,n){const t=De(e,n?.in),r=t.getFullYear(),l=He(t,0);l.setFullYear(r+1,0,4),l.setHours(0,0,0,0);const s=ma(l),u=He(t,0);u.setFullYear(r,0,4),u.setHours(0,0,0,0);const d=ma(u);return t.getTime()>=s.getTime()?r+1:t.getTime()>=d.getTime()?r:r-1}function _s(e){const n=De(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function Sr(e,n){const t=De(e,n?.in);return t.setHours(0,0,0,0),t}function Gr(e,n,t){const[r,l]=el(t?.in,e,n),s=Sr(r),u=Sr(l),d=+s-_s(s),m=+u-_s(u);return Math.round((d-m)/eN)}function ZA(e,n){const t=Uv(e,n),r=He(e,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),ma(r)}function QA(e,n,t){return Hl(e,n*7,t)}function md(e,n,t){return cd(e,n*12,t)}function eR(e,n){let t,r=n?.in;return e.forEach(l=>{!r&&typeof l=="object"&&(r=He.bind(null,l));const s=De(l,r);(!t||t<s||isNaN(+s))&&(t=s)}),He(r,t||NaN)}function nR(e,n){let t,r=n?.in;return e.forEach(l=>{!r&&typeof l=="object"&&(r=He.bind(null,l));const s=De(l,r);(!t||t>s||isNaN(+s))&&(t=s)}),He(r,t||NaN)}function fd(e,n,t){const[r,l]=el(t?.in,e,n);return+Sr(r)==+Sr(l)}function qv(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function tR(e){return!(!qv(e)&&typeof e!="number"||isNaN(+De(e)))}function rR(e,n,t){const[r,l]=el(t?.in,e,n),s=r.getFullYear()-l.getFullYear(),u=r.getMonth()-l.getMonth();return s*12+u}function Hv(e,n){const t=De(e,n?.in),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function aR(e,n){const[t,r]=el(e,n.start,n.end);return{start:t,end:r}}function Yv(e,n){const{start:t,end:r}=aR(n?.in,e);let l=+t>+r;const s=l?+t:+r,u=l?r:t;u.setHours(0,0,0,0),u.setDate(1);let d=1;const m=[];for(;+u<=s;)m.push(He(t,u)),u.setMonth(u.getMonth()+d);return l?m.reverse():m}function fa(e,n){const t=De(e,n?.in);return t.setDate(1),t.setHours(0,0,0,0),t}function Ks(e,n){const t=De(e,n?.in),r=t.getFullYear();return t.setFullYear(r+1,0,0),t.setHours(23,59,59,999),t}function Yl(e,n){const t=De(e,n?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function $v(e,n){const t=pa(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,l=De(e,n?.in),s=l.getDay(),u=(s<r?-7:0)+6-(s-r);return l.setDate(l.getDate()+u),l.setHours(23,59,59,999),l}function lR(e,n){return $v(e,{...n,weekStartsOn:1})}function iR(e,n){const t=De(e,n?.in);return Gr(t,Yl(t))+1}function gd(e,n){const t=De(e,n?.in),r=+ma(t)-+ZA(t);return Math.round(r/yv)+1}function vd(e,n){const t=De(e,n?.in),r=t.getFullYear(),l=pa(),s=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??l.firstWeekContainsDate??l.locale?.options?.firstWeekContainsDate??1,u=He(n?.in||e,0);u.setFullYear(r+1,0,s),u.setHours(0,0,0,0);const d=Rr(u,n),m=He(n?.in||e,0);m.setFullYear(r,0,s),m.setHours(0,0,0,0);const g=Rr(m,n);return+t>=+d?r+1:+t>=+g?r:r-1}function sR(e,n){const t=pa(),r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,l=vd(e,n),s=He(n?.in||e,0);return s.setFullYear(l,0,r),s.setHours(0,0,0,0),Rr(s,n)}function hd(e,n){const t=De(e,n?.in),r=+Rr(t,n)-+sR(t,n);return Math.round(r/yv)+1}function Ue(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const Br={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return Ue(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):Ue(t+1,2)},d(e,n){return Ue(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return Ue(e.getHours()%12||12,n.length)},H(e,n){return Ue(e.getHours(),n.length)},m(e,n){return Ue(e.getMinutes(),n.length)},s(e,n){return Ue(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),l=Math.trunc(r*Math.pow(10,t-3));return Ue(l,n.length)}},Ka={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},xf={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),l=r>0?r:1-r;return t.ordinalNumber(l,{unit:"year"})}return Br.y(e,n)},Y:function(e,n,t,r){const l=vd(e,r),s=l>0?l:1-l;if(n==="YY"){const u=s%100;return Ue(u,2)}return n==="Yo"?t.ordinalNumber(s,{unit:"year"}):Ue(s,n.length)},R:function(e,n){const t=Uv(e);return Ue(t,n.length)},u:function(e,n){const t=e.getFullYear();return Ue(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return Ue(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return Ue(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return Br.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return Ue(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const l=hd(e,r);return n==="wo"?t.ordinalNumber(l,{unit:"week"}):Ue(l,n.length)},I:function(e,n,t){const r=gd(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):Ue(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):Br.d(e,n)},D:function(e,n,t){const r=iR(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):Ue(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const l=e.getDay(),s=(l-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Ue(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(l,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(l,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(l,{width:"short",context:"formatting"});case"eeee":default:return t.day(l,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const l=e.getDay(),s=(l-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Ue(s,n.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(l,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(l,{width:"narrow",context:"standalone"});case"cccccc":return t.day(l,{width:"short",context:"standalone"});case"cccc":default:return t.day(l,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),l=r===0?7:r;switch(n){case"i":return String(l);case"ii":return Ue(l,n.length);case"io":return t.ordinalNumber(l,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const l=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(l,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(l,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(l,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let l;switch(r===12?l=Ka.noon:r===0?l=Ka.midnight:l=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(l,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(l,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(l,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let l;switch(r>=17?l=Ka.evening:r>=12?l=Ka.afternoon:r>=4?l=Ka.morning:l=Ka.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(l,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(l,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return Br.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):Br.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):Ue(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):Ue(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):Br.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):Br.s(e,n)},S:function(e,n){return Br.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return Vf(r);case"XXXX":case"XX":return la(r);case"XXXXX":case"XXX":default:return la(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return Vf(r);case"xxxx":case"xx":return la(r);case"xxxxx":case"xxx":default:return la(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Kf(r,":");case"OOOO":default:return"GMT"+la(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Kf(r,":");case"zzzz":default:return"GMT"+la(r,":")}},t:function(e,n,t){const r=Math.trunc(+e/1e3);return Ue(r,n.length)},T:function(e,n,t){return Ue(+e,n.length)}};function Kf(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),l=Math.trunc(r/60),s=r%60;return s===0?t+String(l):t+String(l)+n+Ue(s,2)}function Vf(e,n){return e%60===0?(e>0?"-":"+")+Ue(Math.abs(e)/60,2):la(e,n)}function la(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),l=Ue(Math.trunc(r/60),2),s=Ue(r%60,2);return t+l+n+s}const Bf=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Wv=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},oR=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],l=t[2];if(!l)return Bf(e,n);let s;switch(r){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",Bf(r,n)).replace("{{time}}",Wv(l,n))},Pu={p:Wv,P:oR},uR=/^D+$/,dR=/^Y+$/,cR=["D","DD","YY","YYYY"];function zv(e){return uR.test(e)}function Jv(e){return dR.test(e)}function Iu(e,n,t){const r=mR(e,n,t);if(console.warn(r),cR.includes(e))throw new RangeError(r)}function mR(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const fR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,gR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,vR=/^'([^]*?)'?$/,hR=/''/g,pR=/[a-zA-Z]/;function ga(e,n,t){const r=pa(),l=t?.locale??r.locale??Fs,s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,u=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,d=De(e,t?.in);if(!tR(d))throw new RangeError("Invalid time value");let m=n.match(gR).map(f=>{const h=f[0];if(h==="p"||h==="P"){const p=Pu[h];return p(f,l.formatLong)}return f}).join("").match(fR).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const h=f[0];if(h==="'")return{isToken:!1,value:_R(f)};if(xf[h])return{isToken:!0,value:f};if(h.match(pR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:f}});l.localize.preprocessor&&(m=l.localize.preprocessor(d,m));const g={firstWeekContainsDate:s,weekStartsOn:u,locale:l};return m.map(f=>{if(!f.isToken)return f.value;const h=f.value;(!t?.useAdditionalWeekYearTokens&&Jv(h)||!t?.useAdditionalDayOfYearTokens&&zv(h))&&Iu(h,n,String(e));const p=xf[h[0]];return p(d,h,l.localize,g)}).join("")}function _R(e){const n=e.match(vR);return n?n[1].replace(hR,"'"):e}function ER(e,n){const t=De(e,n?.in),r=t.getFullYear(),l=t.getMonth(),s=He(t,0);return s.setFullYear(r,l+1,0),s.setHours(0,0,0,0),s.getDate()}function yR(){return Object.assign({},pa())}function bR(e,n){const t=De(e,n?.in).getDay();return t===0?7:t}function pd(e,n){return De(e,n?.in).getMonth()}function _d(e,n){return De(e,n?.in).getFullYear()}function Xv(e,n){return+De(e)>+De(n)}function $l(e,n){return+De(e)<+De(n)}function kR(e,n){const t=TR(n)?new n(0):He(n,0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t}function TR(e){return typeof e=="function"&&e.prototype?.constructor===e}const NR=10;class Zv{subPriority=0;validate(n,t){return!0}}class AR extends Zv{constructor(n,t,r,l,s){super(),this.value=n,this.validateValue=t,this.setValue=r,this.priority=l,s&&(this.subPriority=s)}validate(n,t){return this.validateValue(n,this.value,t)}set(n,t,r){return this.setValue(n,t,this.value,r)}}class RR extends Zv{priority=NR;subPriority=-1;constructor(n,t){super(),this.context=n||(r=>He(t,r))}set(n,t){return t.timestampIsSet?n:He(n,kR(n,this.context))}}class Be{run(n,t,r,l){const s=this.parse(n,t,r,l);return s?{setter:new AR(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(n,t,r){return!0}}class SR extends Be{priority=140;parse(n,t,r){switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"})||r.era(n,{width:"narrow"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})||r.era(n,{width:"abbreviated"})||r.era(n,{width:"narrow"})}}set(n,t,r){return t.era=r,n.setFullYear(r,0,1),n.setHours(0,0,0,0),n}incompatibleTokens=["R","u","t","T"]}const hn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Qt={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function pn(e,n){return e&&{value:n(e.value),rest:e.rest}}function sn(e,n){const t=n.match(e);return t?{value:parseInt(t[0],10),rest:n.slice(t[0].length)}:null}function er(e,n){const t=n.match(e);if(!t)return null;if(t[0]==="Z")return{value:0,rest:n.slice(1)};const r=t[1]==="+"?1:-1,l=t[2]?parseInt(t[2],10):0,s=t[3]?parseInt(t[3],10):0,u=t[5]?parseInt(t[5],10):0;return{value:r*(l*tN+s*nN+u*rN),rest:n.slice(t[0].length)}}function Qv(e){return sn(hn.anyDigitsSigned,e)}function cn(e,n){switch(e){case 1:return sn(hn.singleDigit,n);case 2:return sn(hn.twoDigits,n);case 3:return sn(hn.threeDigits,n);case 4:return sn(hn.fourDigits,n);default:return sn(new RegExp("^\\d{1,"+e+"}"),n)}}function Es(e,n){switch(e){case 1:return sn(hn.singleDigitSigned,n);case 2:return sn(hn.twoDigitsSigned,n);case 3:return sn(hn.threeDigitsSigned,n);case 4:return sn(hn.fourDigitsSigned,n);default:return sn(new RegExp("^-?\\d{1,"+e+"}"),n)}}function Ed(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function e0(e,n){const t=n>0,r=t?n:1-n;let l;if(r<=50)l=e||100;else{const s=r+50,u=Math.trunc(s/100)*100,d=e>=s%100;l=e+u-(d?100:0)}return t?l:1-l}function n0(e){return e%400===0||e%4===0&&e%100!==0}class wR extends Be{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(n,t,r){const l=s=>({year:s,isTwoDigitYear:t==="yy"});switch(t){case"y":return pn(cn(4,n),l);case"yo":return pn(r.ordinalNumber(n,{unit:"year"}),l);default:return pn(cn(t.length,n),l)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,r){const l=n.getFullYear();if(r.isTwoDigitYear){const u=e0(r.year,l);return n.setFullYear(u,0,1),n.setHours(0,0,0,0),n}const s=!("era"in t)||t.era===1?r.year:1-r.year;return n.setFullYear(s,0,1),n.setHours(0,0,0,0),n}}class OR extends Be{priority=130;parse(n,t,r){const l=s=>({year:s,isTwoDigitYear:t==="YY"});switch(t){case"Y":return pn(cn(4,n),l);case"Yo":return pn(r.ordinalNumber(n,{unit:"year"}),l);default:return pn(cn(t.length,n),l)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,r,l){const s=vd(n,l);if(r.isTwoDigitYear){const d=e0(r.year,s);return n.setFullYear(d,0,l.firstWeekContainsDate),n.setHours(0,0,0,0),Rr(n,l)}const u=!("era"in t)||t.era===1?r.year:1-r.year;return n.setFullYear(u,0,l.firstWeekContainsDate),n.setHours(0,0,0,0),Rr(n,l)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class DR extends Be{priority=130;parse(n,t){return Es(t==="R"?4:t.length,n)}set(n,t,r){const l=He(n,0);return l.setFullYear(r,0,4),l.setHours(0,0,0,0),ma(l)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class PR extends Be{priority=130;parse(n,t){return Es(t==="u"?4:t.length,n)}set(n,t,r){return n.setFullYear(r,0,1),n.setHours(0,0,0,0),n}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class IR extends Be{priority=120;parse(n,t,r){switch(t){case"Q":case"QQ":return cn(t.length,n);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"})||r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})||r.quarter(n,{width:"abbreviated",context:"formatting"})||r.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=1&&t<=4}set(n,t,r){return n.setMonth((r-1)*3,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class FR extends Be{priority=120;parse(n,t,r){switch(t){case"q":case"qq":return cn(t.length,n);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"})||r.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})||r.quarter(n,{width:"abbreviated",context:"standalone"})||r.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=1&&t<=4}set(n,t,r){return n.setMonth((r-1)*3,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class LR extends Be{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(n,t,r){const l=s=>s-1;switch(t){case"M":return pn(sn(hn.month,n),l);case"MM":return pn(cn(2,n),l);case"Mo":return pn(r.ordinalNumber(n,{unit:"month"}),l);case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"})||r.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})||r.month(n,{width:"abbreviated",context:"formatting"})||r.month(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=11}set(n,t,r){return n.setMonth(r,1),n.setHours(0,0,0,0),n}}class MR extends Be{priority=110;parse(n,t,r){const l=s=>s-1;switch(t){case"L":return pn(sn(hn.month,n),l);case"LL":return pn(cn(2,n),l);case"Lo":return pn(r.ordinalNumber(n,{unit:"month"}),l);case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"})||r.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})||r.month(n,{width:"abbreviated",context:"standalone"})||r.month(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=11}set(n,t,r){return n.setMonth(r,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function xR(e,n,t){const r=De(e,t?.in),l=hd(r,t)-n;return r.setDate(r.getDate()-l*7),De(r,t?.in)}class KR extends Be{priority=100;parse(n,t,r){switch(t){case"w":return sn(hn.week,n);case"wo":return r.ordinalNumber(n,{unit:"week"});default:return cn(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,r,l){return Rr(xR(n,r,l),l)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function VR(e,n,t){const r=De(e,t?.in),l=gd(r,t)-n;return r.setDate(r.getDate()-l*7),r}class BR extends Be{priority=100;parse(n,t,r){switch(t){case"I":return sn(hn.week,n);case"Io":return r.ordinalNumber(n,{unit:"week"});default:return cn(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,r){return ma(VR(n,r))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const GR=[31,28,31,30,31,30,31,31,30,31,30,31],jR=[31,29,31,30,31,30,31,31,30,31,30,31];class CR extends Be{priority=90;subPriority=1;parse(n,t,r){switch(t){case"d":return sn(hn.date,n);case"do":return r.ordinalNumber(n,{unit:"date"});default:return cn(t.length,n)}}validate(n,t){const r=n.getFullYear(),l=n0(r),s=n.getMonth();return l?t>=1&&t<=jR[s]:t>=1&&t<=GR[s]}set(n,t,r){return n.setDate(r),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class UR extends Be{priority=90;subpriority=1;parse(n,t,r){switch(t){case"D":case"DD":return sn(hn.dayOfYear,n);case"Do":return r.ordinalNumber(n,{unit:"date"});default:return cn(t.length,n)}}validate(n,t){const r=n.getFullYear();return n0(r)?t>=1&&t<=366:t>=1&&t<=365}set(n,t,r){return n.setMonth(0,r),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function yd(e,n,t){const r=pa(),l=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=De(e,t?.in),u=s.getDay(),m=(n%7+7)%7,g=7-l,f=n<0||n>6?n-(u+g)%7:(m+g)%7-(u+g)%7;return Hl(s,f,t)}class qR extends Be{priority=90;parse(n,t,r){switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,r,l){return n=yd(n,r,l),n.setHours(0,0,0,0),n}incompatibleTokens=["D","i","e","c","t","T"]}class HR extends Be{priority=90;parse(n,t,r,l){const s=u=>{const d=Math.floor((u-1)/7)*7;return(u+l.weekStartsOn+6)%7+d};switch(t){case"e":case"ee":return pn(cn(t.length,n),s);case"eo":return pn(r.ordinalNumber(n,{unit:"day"}),s);case"eee":return r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,r,l){return n=yd(n,r,l),n.setHours(0,0,0,0),n}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class YR extends Be{priority=90;parse(n,t,r,l){const s=u=>{const d=Math.floor((u-1)/7)*7;return(u+l.weekStartsOn+6)%7+d};switch(t){case"c":case"cc":return pn(cn(t.length,n),s);case"co":return pn(r.ordinalNumber(n,{unit:"day"}),s);case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"})||r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})||r.day(n,{width:"abbreviated",context:"standalone"})||r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=6}set(n,t,r,l){return n=yd(n,r,l),n.setHours(0,0,0,0),n}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function $R(e,n,t){const r=De(e,t?.in),l=bR(r,t),s=n-l;return Hl(r,s,t)}class WR extends Be{priority=90;parse(n,t,r){const l=s=>s===0?7:s;switch(t){case"i":case"ii":return cn(t.length,n);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return pn(r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),l);case"iiiii":return pn(r.day(n,{width:"narrow",context:"formatting"}),l);case"iiiiii":return pn(r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),l);case"iiii":default:return pn(r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),l)}}validate(n,t){return t>=1&&t<=7}set(n,t,r){return n=$R(n,r),n.setHours(0,0,0,0),n}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class zR extends Be{priority=80;parse(n,t,r){switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,r){return n.setHours(Ed(r),0,0,0),n}incompatibleTokens=["b","B","H","k","t","T"]}class JR extends Be{priority=80;parse(n,t,r){switch(t){case"b":case"bb":case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,r){return n.setHours(Ed(r),0,0,0),n}incompatibleTokens=["a","B","H","k","t","T"]}class XR extends Be{priority=80;parse(n,t,r){switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,r){return n.setHours(Ed(r),0,0,0),n}incompatibleTokens=["a","b","t","T"]}class ZR extends Be{priority=70;parse(n,t,r){switch(t){case"h":return sn(hn.hour12h,n);case"ho":return r.ordinalNumber(n,{unit:"hour"});default:return cn(t.length,n)}}validate(n,t){return t>=1&&t<=12}set(n,t,r){const l=n.getHours()>=12;return l&&r<12?n.setHours(r+12,0,0,0):!l&&r===12?n.setHours(0,0,0,0):n.setHours(r,0,0,0),n}incompatibleTokens=["H","K","k","t","T"]}class QR extends Be{priority=70;parse(n,t,r){switch(t){case"H":return sn(hn.hour23h,n);case"Ho":return r.ordinalNumber(n,{unit:"hour"});default:return cn(t.length,n)}}validate(n,t){return t>=0&&t<=23}set(n,t,r){return n.setHours(r,0,0,0),n}incompatibleTokens=["a","b","h","K","k","t","T"]}class eS extends Be{priority=70;parse(n,t,r){switch(t){case"K":return sn(hn.hour11h,n);case"Ko":return r.ordinalNumber(n,{unit:"hour"});default:return cn(t.length,n)}}validate(n,t){return t>=0&&t<=11}set(n,t,r){return n.getHours()>=12&&r<12?n.setHours(r+12,0,0,0):n.setHours(r,0,0,0),n}incompatibleTokens=["h","H","k","t","T"]}class nS extends Be{priority=70;parse(n,t,r){switch(t){case"k":return sn(hn.hour24h,n);case"ko":return r.ordinalNumber(n,{unit:"hour"});default:return cn(t.length,n)}}validate(n,t){return t>=1&&t<=24}set(n,t,r){const l=r<=24?r%24:r;return n.setHours(l,0,0,0),n}incompatibleTokens=["a","b","h","H","K","t","T"]}class tS extends Be{priority=60;parse(n,t,r){switch(t){case"m":return sn(hn.minute,n);case"mo":return r.ordinalNumber(n,{unit:"minute"});default:return cn(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,r){return n.setMinutes(r,0,0),n}incompatibleTokens=["t","T"]}class rS extends Be{priority=50;parse(n,t,r){switch(t){case"s":return sn(hn.second,n);case"so":return r.ordinalNumber(n,{unit:"second"});default:return cn(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,r){return n.setSeconds(r,0),n}incompatibleTokens=["t","T"]}class aS extends Be{priority=30;parse(n,t){const r=l=>Math.trunc(l*Math.pow(10,-t.length+3));return pn(cn(t.length,n),r)}set(n,t,r){return n.setMilliseconds(r),n}incompatibleTokens=["t","T"]}class lS extends Be{priority=10;parse(n,t){switch(t){case"X":return er(Qt.basicOptionalMinutes,n);case"XX":return er(Qt.basic,n);case"XXXX":return er(Qt.basicOptionalSeconds,n);case"XXXXX":return er(Qt.extendedOptionalSeconds,n);case"XXX":default:return er(Qt.extended,n)}}set(n,t,r){return t.timestampIsSet?n:He(n,n.getTime()-_s(n)-r)}incompatibleTokens=["t","T","x"]}class iS extends Be{priority=10;parse(n,t){switch(t){case"x":return er(Qt.basicOptionalMinutes,n);case"xx":return er(Qt.basic,n);case"xxxx":return er(Qt.basicOptionalSeconds,n);case"xxxxx":return er(Qt.extendedOptionalSeconds,n);case"xxx":default:return er(Qt.extended,n)}}set(n,t,r){return t.timestampIsSet?n:He(n,n.getTime()-_s(n)-r)}incompatibleTokens=["t","T","X"]}class sS extends Be{priority=40;parse(n){return Qv(n)}set(n,t,r){return[He(n,r*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class oS extends Be{priority=20;parse(n){return Qv(n)}set(n,t,r){return[He(n,r),{timestampIsSet:!0}]}incompatibleTokens="*"}const uS={G:new SR,y:new wR,Y:new OR,R:new DR,u:new PR,Q:new IR,q:new FR,M:new LR,L:new MR,w:new KR,I:new BR,d:new CR,D:new UR,E:new qR,e:new HR,c:new YR,i:new WR,a:new zR,b:new JR,B:new XR,h:new ZR,H:new QR,K:new eS,k:new nS,m:new tS,s:new rS,S:new aS,X:new lS,x:new iS,t:new sS,T:new oS},dS=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,cS=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,mS=/^'([^]*?)'?$/,fS=/''/g,gS=/\S/,vS=/[a-zA-Z]/;function Ca(e,n,t,r){const l=()=>He(r?.in||t,NaN),s=yR(),u=r?.locale??s.locale??Fs,d=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,m=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0;if(!n)return e?l():De(t,r?.in);const g={firstWeekContainsDate:d,weekStartsOn:m,locale:u},f=[new RR(r?.in,t)],h=n.match(cS).map(E=>{const A=E[0];if(A in Pu){const O=Pu[A];return O(E,u.formatLong)}return E}).join("").match(dS),p=[];for(let E of h){!r?.useAdditionalWeekYearTokens&&Jv(E)&&Iu(E,n,e),!r?.useAdditionalDayOfYearTokens&&zv(E)&&Iu(E,n,e);const A=E[0],O=uS[A];if(O){const{incompatibleTokens:N}=O;if(Array.isArray(N)){const T=p.find(K=>N.includes(K.token)||K.token===A);if(T)throw new RangeError(`The format string mustn't contain \`${T.fullToken}\` and \`${E}\` at the same time`)}else if(O.incompatibleTokens==="*"&&p.length>0)throw new RangeError(`The format string mustn't contain \`${E}\` and any other token at the same time`);p.push({token:A,fullToken:E});const F=O.run(e,E,u.match,g);if(!F)return l();f.push(F.setter),e=F.rest}else{if(A.match(vS))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");if(E==="''"?E="'":A==="'"&&(E=hS(E)),e.indexOf(E)===0)e=e.slice(E.length);else return l()}}if(e.length>0&&gS.test(e))return l();const y=f.map(E=>E.priority).sort((E,A)=>A-E).filter((E,A,O)=>O.indexOf(E)===A).map(E=>f.filter(A=>A.priority===E).sort((A,O)=>O.subPriority-A.subPriority)).map(E=>E[0]);let w=De(t,r?.in);if(isNaN(+w))return l();const S={};for(const E of y){if(!E.validate(w,g))return l();const A=E.set(w,S,g);Array.isArray(A)?(w=A[0],Object.assign(S,A[1])):w=A}return w}function hS(e){return e.match(mS)[1].replace(fS,"'")}function pS(e,n,t){const[r,l]=el(t?.in,e,n);return r.getFullYear()===l.getFullYear()&&r.getMonth()===l.getMonth()}function t0(e,n,t){const[r,l]=el(t?.in,e,n);return r.getFullYear()===l.getFullYear()}function _S(e,n,t){return Hl(e,-n,t)}function r0(e,n,t){const r=De(e,t?.in),l=r.getFullYear(),s=r.getDate(),u=He(e,0);u.setFullYear(l,n,15),u.setHours(0,0,0,0);const d=ER(u);return r.setMonth(n,Math.min(s,d)),r}function a0(e,n,t){const r=De(e,t?.in);return isNaN(+r)?He(e,NaN):(r.setFullYear(n),r)}function ES(e,n,t){return cd(e,-n,t)}function yS(e,n,t){const{years:r=0,months:l=0,weeks:s=0,days:u=0,hours:d=0,minutes:m=0,seconds:g=0}=n,f=ES(e,l+r*12,t),h=_S(f,u+s*7,t),p=m+d*60,w=(g+p*60)*1e3;return He(e,+h-w)}var Ua=typeof document<"u"?R.useLayoutEffect:R.useEffect;const bS={...ov},kS=bS.useInsertionEffect,TS=kS||(e=>e());function NS(e){const n=R.useRef(()=>{});return TS(()=>{n.current=e}),R.useCallback(function(){for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return n.current==null?void 0:n.current(...r)},[])}const AS={...ov};let Gf=!1,RS=0;const jf=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+RS++;function SS(){const[e,n]=R.useState(()=>Gf?jf():void 0);return Ua(()=>{e==null&&n(jf())},[]),R.useEffect(()=>{Gf=!0},[]),e}const wS=AS.useId,l0=wS||SS;function OS(){const e=new Map;return{emit(n,t){var r;(r=e.get(n))==null||r.forEach(l=>l(t))},on(n,t){e.has(n)||e.set(n,new Set),e.get(n).add(t)},off(n,t){var r;(r=e.get(n))==null||r.delete(t)}}}const DS=R.createContext(null),PS=R.createContext(null),IS=()=>{var e;return((e=R.useContext(DS))==null?void 0:e.id)||null},FS=()=>R.useContext(PS);function LS(e){return"data-floating-ui-"+e}const MS=R.createContext(null),Cf=LS("portal");function xS(e){e===void 0&&(e={});const{id:n,root:t}=e,r=l0(),l=KS(),[s,u]=R.useState(null),d=R.useRef(null);return Ua(()=>()=>{s?.remove(),queueMicrotask(()=>{d.current=null})},[s]),Ua(()=>{if(!r||d.current)return;const m=n?document.getElementById(n):null;if(!m)return;const g=document.createElement("div");g.id=r,g.setAttribute(Cf,""),m.appendChild(g),d.current=g,u(g)},[n,r]),Ua(()=>{if(t===null||!r||d.current)return;let m=t||l?.portalNode;m&&!Bn(m)&&(m=m.current),m=m||document.body;let g=null;n&&(g=document.createElement("div"),g.id=n,m.appendChild(g));const f=document.createElement("div");f.id=r,f.setAttribute(Cf,""),m=g||m,m.appendChild(f),d.current=f,u(f)},[n,t,r,l]),s}const KS=()=>R.useContext(MS);function VS(e){const{open:n=!1,onOpenChange:t,elements:r}=e,l=l0(),s=R.useRef({}),[u]=R.useState(()=>OS()),d=IS()!=null,[m,g]=R.useState(r.reference),f=NS((y,w,S)=>{s.current.openEvent=y?w:void 0,u.emit("openchange",{open:y,event:w,reason:S,nested:d}),t?.(y,w,S)}),h=R.useMemo(()=>({setPositionReference:g}),[]),p=R.useMemo(()=>({reference:m||r.reference||null,floating:r.floating||null,domReference:r.reference}),[m,r.reference,r.floating]);return R.useMemo(()=>({dataRef:s,open:n,onOpenChange:f,elements:p,events:u,floatingId:l,refs:h}),[n,f,p,u,l,h])}function BS(e){e===void 0&&(e={});const{nodeId:n}=e,t=VS({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||t,l=r.elements,[s,u]=R.useState(null),[d,m]=R.useState(null),f=l?.domReference||s,h=R.useRef(null),p=FS();Ua(()=>{f&&(h.current=f)},[f]);const y=FA({...e,elements:{...l,...d&&{reference:d}}}),w=R.useCallback(N=>{const F=Bn(N)?{getBoundingClientRect:()=>N.getBoundingClientRect(),getClientRects:()=>N.getClientRects(),contextElement:N}:N;m(F),y.refs.setReference(F)},[y.refs]),S=R.useCallback(N=>{(Bn(N)||N===null)&&(h.current=N,u(N)),(Bn(y.refs.reference.current)||y.refs.reference.current===null||N!==null&&!Bn(N))&&y.refs.setReference(N)},[y.refs]),E=R.useMemo(()=>({...y.refs,setReference:S,setPositionReference:w,domReference:h}),[y.refs,S,w]),A=R.useMemo(()=>({...y.elements,domReference:f}),[y.elements,f]),O=R.useMemo(()=>({...y,...r,refs:E,elements:A,nodeId:n}),[y,E,A,n,r]);return Ua(()=>{r.dataRef.current.floatingContext=O;const N=p?.nodesRef.current.find(F=>F.id===n);N&&(N.context=O)}),R.useMemo(()=>({...y,context:O,refs:E,elements:A}),[y,E,A,O])}const bd=()=>{const{cn:e}=ke();return k.createElement(_v,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},i0=()=>{const{cn:e}=ke();return k.createElement(_v,{title:sr("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var GS=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const jS=R.forwardRef((e,n)=>{var{className:t,header:r,children:l,open:s,defaultOpen:u=!1,onClick:d,size:m="medium",onOpenChange:g}=e,f=GS(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:h}=ke(),[p,y]=cs({defaultValue:u,value:s,onChange:g}),w=m==="small"?"small":"medium";return k.createElement("div",{className:h("navds-read-more",`navds-read-more--${m}`,t,{"navds-read-more--open":p}),"data-volume":"low"},k.createElement("button",Object.assign({},f,{ref:n,type:"button",className:h("navds-read-more__button","navds-body-short",{"navds-body-short--small":m==="small"}),onClick:sa(d,()=>y(S=>!S)),"aria-expanded":p,"data-state":p?"open":"closed"}),k.createElement(hv,{className:h("navds-read-more__expand-icon"),"aria-hidden":!0}),k.createElement("span",null,r)),k.createElement(nd,{as:"div","aria-hidden":!p,className:h("navds-read-more__content",{"navds-read-more__content--closed":!p}),size:w,"data-state":p?"open":"closed"},l))}),ys=R.createContext(null),tl=(e,n)=>{var t,r,l;const{size:s,error:u,errorId:d}=e,m=R.useContext(ys),g=ha(),f=(t=e.id)!==null&&t!==void 0?t:`${n}-${g}`,h=d??`${n}-error-${g}`,p=`${n}-description-${g}`,y=m?.disabled||e.disabled,w=(m?.readOnly||e.readOnly)&&!y||void 0,S=!y&&!w&&!!(u||m?.error),E=!y&&!w&&!!u&&typeof u!="boolean",A=Object.assign({},S?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:E,hasError:S,errorId:h,inputDescriptionId:p,size:(r=s??m?.size)!==null&&r!==void 0?r:"medium",readOnly:w,inputProps:Object.assign(Object.assign({id:f},A),{"aria-describedby":Bl(e["aria-describedby"],{[p]:e.description&&!bs(e.description),[h]:E,[(l=m?.errorId)!==null&&l!==void 0?l:""]:S&&m?.error})||void 0,disabled:y})}};function bs(e,n=!0){if(k.isValidElement(e)){if(e.type===jS)return!0;if(e.props.children&&n)return bs(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>bs(t,n));return!1}const s0={global:{dateLocale:Av,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},o0={global:{dateLocale:Sv,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},u0=(e="nb")=>{switch(e){case"nn":return Sv;case"en":return Av;default:return Rv}},d0=e=>{switch(e){case"nn":return o0.DatePicker;case"en":case"en-GB":return s0.DatePicker;default:return}},CS=e=>{switch(e){case"nn":return o0.global;case"en":case"en-GB":return s0.global;default:return}},[c0,Vs]=ws();var US=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const[qS,kd]=ws({errorMessage:"useDateInputContext must be used with DateInputContext"}),m0=R.forwardRef((e,n)=>{const{className:t,hideLabel:r=!1,label:l,description:s,variant:u="datepicker",setAnchorRef:d}=e,m=US(e,["className","hideLabel","label","description","variant","setAnchorRef"]),g=R.useRef(null),f=Vs().translate,{cn:h}=ke(),p=u==="datepicker",y={prefix:p?"datepicker-input":"monthpicker-input",iconTitle:{open:p?"openDatePicker":"openMonthPicker",close:p?"closeDatePicker":"closeMonthPicker"}},w=kd(),{inputProps:S,size:E="medium",inputDescriptionId:A,errorId:O,showErrorMsg:N,hasError:F,readOnly:T}=tl(e,y.prefix);return k.createElement("div",{className:h(t,"navds-form-field",`navds-form-field--${E}`,"navds-date__field",{"navds-text-field--error":F,"navds-date__field--error":F,"navds-form-field--disabled":!!S.disabled,"navds-text-field--disabled":!!S.disabled,"navds-form-field--readonly":T,"navds-text-field--readonly":T,"navds-date__field--readonly":T})},k.createElement(Ur,{htmlFor:S.id,size:E,className:h("navds-form-field__label",{"navds-sr-only":r})},T&&k.createElement(bd,null),l),!!s&&k.createElement(On,{as:"div",className:h("navds-form-field__description",{"navds-sr-only":r}),id:A,size:E},s),k.createElement("div",{className:h("navds-date__field-wrapper")},k.createElement("input",Object.assign({ref:n},Gn(m,["error","errorId","size"]),S,{autoComplete:"off","aria-controls":w?.open?w.ariaId:void 0,readOnly:T,className:h("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${E}`),size:p?11:14})),k.createElement("button",{disabled:S.disabled||T,tabIndex:T||w?.open?-1:0,onClick:()=>{w?.onOpen(),d?.(g.current)},type:"button",className:h("navds-date__field-button"),ref:g},k.createElement(PT,{title:f(y.iconTitle[w?.open?"close":"open"])}))),k.createElement("div",{className:h("navds-form-field__error"),id:O,"aria-relevant":"additions removals","aria-live":"polite"},N&&k.createElement(jl,{size:E,showIcon:!0},e.error)))}),HS=R.forwardRef((e,n)=>k.createElement(m0,Object.assign({},e,{ref:n})));R.forwardRef((e,n)=>k.createElement(m0,Object.assign({},e,{variant:"monthpicker",ref:n})));var YS=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const $S=R.forwardRef((e,n)=>{var{className:t}=e,r=YS(e,["className"]);const{cn:l}=ke();return k.createElement("div",Object.assign({},r,{ref:n,className:l("navds-modal__body",t)}))});var WS=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const zS=R.forwardRef((e,n)=>{var{className:t}=e,r=WS(e,["className"]);const{cn:l}=ke();return k.createElement("div",Object.assign({},r,{ref:n,className:l("navds-modal__footer",t)}))});var JS=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const f0=R.forwardRef((e,n)=>{var{children:t,className:r,closeButton:l=!0}=e,s=JS(e,["children","className","closeButton"]);const{cn:u}=ke(),d=Is(),m=sr("global");return k.createElement("div",Object.assign({},s,{ref:n,className:u("navds-modal__header",r)}),d.closeHandler&&l&&k.createElement(yt,{type:"button",className:u("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:g=>{["Enter"," "].includes(g.key)&&g.repeat&&g.preventDefault()},onClick:d.closeHandler,icon:k.createElement(ms,{title:m("close")})}),t)}),Uf=({clientX:e,clientY:n},{left:t,top:r,right:l,bottom:s})=>!(e<t||n<r||e>l||n>s);function XS(e,n,t){if(!(n&&n.closeButton===!1))return t?()=>{var r;return t()!==!1&&((r=e.current)===null||r===void 0?void 0:r.close())}:()=>{var r;return(r=e.current)===null||r===void 0?void 0:r.close()}}const $i="navds-modal__document-body",Wi="aksel-modal__document-body";function ZS(e,n,t){k.useEffect(()=>{if(t||!e.current||!n)return;e.current.open&&document.body.classList.add(Wi,$i);const r=new MutationObserver(()=>{var l;!((l=e.current)===null||l===void 0)&&l.open?document.body.classList.add(Wi,$i):document.body.classList.remove(Wi,$i)});return r.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{r.disconnect(),document.body.classList.remove(Wi,$i)}},[e,n,t])}const Ga=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function g0(e,n){var t="on"+n.type.toLowerCase();return typeof e[t]=="function"&&e[t](n),e.dispatchEvent(n)}function Pl(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function v0(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function QS(e,n){for(var t=0;t<e.length;++t)if(e[t]===n)return!0;return!1}function cu(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function h0(e){var n=["button","input","keygen","select","textarea"],t=n.map(function(u){return u+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])');var r=e.querySelector(t.join(", "));if(!r&&"attachShadow"in Element.prototype)for(var l=e.querySelectorAll("*"),s=0;s<l.length&&!(l[s].tagName&&l[s].shadowRoot&&(r=h0(l[s].shadowRoot),r));s++);return r}function qf(e){return e.isConnected||document.body.contains(e)}function p0(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var t=xe.formSubmitter;if(!t){var r=e.target,l="getRootNode"in r&&r.getRootNode()||document;t=l.activeElement}return!t||t.form!==n?null:t}function ew(e){if(!e.defaultPrevented){var n=e.target,t=xe.imagemapUseValue,r=p0(e);t===null&&r&&(t=r.value);var l=Pl(n);if(l){var s=r&&r.getAttribute("formmethod")||n.getAttribute("method");s==="dialog"&&(e.preventDefault(),t!=null?l.close(t):l.close())}}}function _0(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",ew,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t=!1,r=(function(){t?this.downgradeModal():this.maybeHideModal(),t=!1}).bind(this),l,s=function(u){if(u.target===e){var d="DOMNodeRemoved";t|=u.type.substr(0,d.length)===d,window.clearTimeout(l),l=window.setTimeout(r,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(u){e.addEventListener(u,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}_0.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&qf(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),xe.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var t=document.createEvent("MouseEvents");t.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(t),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=h0(this.dialog_)),v0(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!qf(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!xe.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,xe.needsCentering(this.dialog_)?(xe.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});g0(this.dialog_,n)}};var xe={};xe.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,t=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,t)+"px"};xe.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var t=document.styleSheets[n],r=null;try{r=t.cssRules}catch{}if(r)for(var l=0;l<r.length;++l){var s=r[l],u=null;try{u=document.querySelectorAll(s.selectorText)}catch{}if(!(!u||!QS(u,e))){var d=s.style.getPropertyValue("top"),m=s.style.getPropertyValue("bottom");if(d&&d!=="auto"||m&&m!=="auto")return!0}}}return!1};xe.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!xe.isInlinePositionSetByStylesheet(e)};xe.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new _0(e)};xe.registerDialog=function(e){e.showModal||xe.forceRegisterDialog(e)};xe.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var t=[];n.forEach(function(r){for(var l=0,s;s=r.removedNodes[l];++l)s instanceof Element&&(s.localName==="dialog"&&t.push(s),t=t.concat(s.querySelectorAll("dialog")))}),t.length&&e(t)}))};xe.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};xe.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};xe.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,t;t=this.pendingDialogStack[n];++n)t.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var r=this.pendingDialogStack[0];if(r){var l=r.dialog.parentNode||document.body;l.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};xe.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Pl(e);){for(var n=0,t;t=this.pendingDialogStack[n];++n)if(t.dialog===e)return n===0;e=e.parentElement}return!1};xe.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),v0(n),this.forwardTab_!==void 0)){var t=this.pendingDialogStack[0],r=t.dialog,l=r.compareDocumentPosition(n);return l&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};xe.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),t=this.pendingDialogStack[0];t&&g0(t.dialog,n)&&t.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};xe.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(t){e.indexOf(t.dialog)!==-1?t.downgradeModal():t.maybeHideModal()})};xe.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};xe.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Ga&&(xe.dm=new xe.DialogManager,xe.formSubmitter=null,xe.imagemapUseValue=null);if(Ga){var Hf=document.createElement("form");if(Hf.setAttribute("method","dialog"),Hf.method!=="dialog"){var Va=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Va){var nw=Va.get;Va.get=function(){return cu(this)?"dialog":nw.call(this)};var tw=Va.set;Va.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):tw.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Va)}}document.addEventListener("click",function(e){if(xe.formSubmitter=null,xe.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var t=e.composedPath();n=t.shift()||n}if(!(!n||!cu(n.form))){var r=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!r){if(!(n.localName==="input"&&n.type==="image"))return;xe.imagemapUseValue=e.offsetX+","+e.offsetY}var l=Pl(n);l&&(xe.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,t=Pl(n);if(!t){var r=p0(e),l=r&&r.getAttribute("formmethod")||n.getAttribute("method");l==="dialog"&&e.preventDefault()}});var rw=HTMLFormElement.prototype.submit,aw=function(){if(!cu(this))return rw.call(this);var e=Pl(this);e&&e.close()};HTMLFormElement.prototype.submit=aw}var lw=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const Bs=R.forwardRef((e,n)=>{var t,r,{header:l,children:s,open:u,onBeforeClose:d,onCancel:m,closeOnBackdropClick:g,width:f,placement:h,portal:p,className:y,"aria-labelledby":w,style:S,onClick:E,onMouseDown:A}=e,O=lw(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:N}=ke(),F=R.useRef(N("navds-modal--polyfilled")),T=R.useRef(null),K=Xa(T,n),L=ha(),V=(t=ad())===null||t===void 0?void 0:t.rootElement,C=xS({root:V}),J=kd(!1),W=Is(!1)!==void 0;W&&!J&&console.error("Modals should not be nested"),R.useEffect(()=>{Ga&&T.current&&C&&(xe.registerDialog(T.current),T.current.classList.add(F.current)),T.current&&C&&(T.current.autofocus=!0)},[C]),R.useEffect(()=>{T.current&&C&&u!==void 0&&(u&&!T.current.open?T.current.showModal():!u&&T.current.open&&T.current.close())},[C,u]),ZS(T,C,W);const q=typeof f=="string"&&["small","medium"].includes(f),G=N("navds-modal",y,{[F.current]:Ga,"navds-modal--autowidth":!f,[`navds-modal--${f}`]:q,"navds-modal--top":h==="top"&&!Ga}),Z=Object.assign(Object.assign({},S),q?{}:{width:f}),re=R.useRef({clientX:0,clientY:0}),ne=rn=>{re.current=rn},oe=g&&!Ga,ee=rn=>{if(rn.target!==T.current)return;const on=T.current.getBoundingClientRect();Uf(re.current,on)||Uf(rn,on)||d!==void 0&&d()===!1||T.current.close()},me=rn=>{d&&d()===!1&&rn.preventDefault()},Ne=!w&&!O["aria-label"]&&l?L:w,Ee=k.createElement("dialog",Object.assign({},O,{ref:K,className:G,style:Z,onCancel:sa(m,me),onClick:oe?sa(E,ee):E,onMouseDown:oe?sa(A,ne):A,"aria-labelledby":Ne}),k.createElement(zT,{closeHandler:XS(T,l,d),ref:T},l&&k.createElement(f0,null,l.label&&k.createElement(td,{className:N("navds-modal__label")},l.label),k.createElement(ua,{size:(r=l.size)!==null&&r!==void 0?r:"medium",level:"1",id:L},l.icon&&k.createElement("span",{className:N("navds-modal__header-icon")},l.icon),l.heading)),s));return p?C?ed.createPortal(Ee,C):null:Ee});Bs.Header=f0;Bs.Body=$S;Bs.Footer=zS;var iw=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const sw=R.forwardRef((e,n)=>{var{className:t}=e,r=iw(e,["className"]);const{cn:l}=ke();return k.createElement("div",Object.assign({},r,{ref:n,className:l("navds-popover__content",t)}))});var ow=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const E0=R.forwardRef((e,n)=>{var{className:t,children:r,anchorEl:l,arrow:s=!0,open:u,onClose:d,placement:m="top",offset:g,strategy:f,flip:h=!0}=e,p=ow(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:y}=ke(),w=R.useRef(null),S=Is(!1)!==void 0,E=kd(!1),A=f??(S?"fixed":"absolute"),O=E?!1:h,N=Gl(!1),{update:F,refs:T,placement:K,middlewareData:{arrow:{x:L,y:V}={}},floatingStyles:C}=BS({strategy:A,placement:m,open:u,middleware:[MA(g??(N?8:s?16:4)),O&&KA({padding:5,fallbackPlacements:["bottom","top"]}),xA({padding:12}),VA({element:w,padding:8})]});Ha(()=>{T.setReference(l)},[l]);const J=Xa(T.setFloating,n);Ha(()=>{if(!T.reference.current||!T.floating.current||!u)return;const q=wA(T.reference.current,T.floating.current,F);return()=>q()},[T.floating,T.reference,F,u,l]);const W={top:"bottom",right:"left",bottom:"top",left:"right"}[K.split("-")[0]];return k.createElement(J5,{asChild:!0,safeZone:{anchor:l,dismissable:T.floating.current},onDismiss:()=>u&&d?.(),enabled:u},k.createElement("div",Object.assign({ref:J},p,{className:y("navds-popover",t,{"navds-popover--hidden":!u||!l}),style:Object.assign(Object.assign({},p.style),C),"data-placement":K,"aria-hidden":!u||!l}),r,s&&!N&&k.createElement("div",{ref:q=>{w.current=q},style:Object.assign(Object.assign(Object.assign({},L!=null?{left:L}:{}),V!=null?{top:V}:{}),W?{[W]:"-0.5rem"}:{}),className:y("navds-popover__arrow")})))});E0.Content=sw;const uw={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},dw=({open:e,children:n,onClose:t,anchor:r,locale:l,translate:s,variant:u,popoverProps:d})=>{const m=sr("global",CS(l)),{cn:g}=ke(),f=R.useRef(null),h=Is(!1)!==void 0;return XT("screen and (min-width: 768px)",!0)&&!h?k.createElement(E0,Object.assign({arrow:!1,anchorEl:r,open:e,onClose:t,placement:"bottom-start",role:"dialog",className:g("navds-date__popover",{"navds-date":u==="month"}),flip:!1},d),n):k.createElement(Bs,{ref:f,open:e,onClose:y=>{y.stopPropagation(),t()},"aria-label":s(uw[u]),className:g("navds-date__modal",{"navds-date__nested-modal":h,"navds-date":u==="month"}),closeOnBackdropClick:!0,placement:"top"},k.createElement("div",{className:g("navds-date__modal-body")},n,k.createElement(yt,{variant:"tertiary",onClick:()=>{var y;return(y=f?.current)===null||y===void 0?void 0:y.close()},size:"small",type:"button"},m("close"))))};function y0(e){return!!(e&&typeof e=="object"&&"from"in e)}const cw={},Ol={};function Il(e,n){try{const r=(cw[e]||=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format)(n).split("GMT")[1]||"";return r in Ol?Ol[r]:Yf(r,r.split(":"))}catch{if(e in Ol)return Ol[e];const t=e?.match(mw);return t?Yf(e,t.slice(1)):NaN}}const mw=/([+-]\d\d):?(\d\d)?/;function Yf(e,n){const t=+n[0],r=+(n[1]||0);return Ol[e]=t>0?t*60+r:t*60-r}class nr extends Date{constructor(...n){super(),n.length>1&&typeof n[n.length-1]=="string"&&(this.timeZone=n.pop()),this.internal=new Date,isNaN(Il(this.timeZone,this))?this.setTime(NaN):n.length?typeof n[0]=="number"&&(n.length===1||n.length===2&&typeof n[1]!="number")?this.setTime(n[0]):typeof n[0]=="string"?this.setTime(+new Date(n[0])):n[0]instanceof Date?this.setTime(+n[0]):(this.setTime(+new Date(...n)),b0(this),Fu(this)):this.setTime(Date.now())}static tz(n,...t){return t.length?new nr(...t,n):new nr(Date.now(),n)}withTimeZone(n){return new nr(+this,n)}getTimezoneOffset(){return-Il(this.timeZone,this)}setTime(n){return Date.prototype.setTime.apply(this,arguments),Fu(this),+this}[Symbol.for("constructDateFrom")](n){return new nr(+new Date(n),this.timeZone)}}const $f=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!$f.test(e))return;const n=e.replace($f,"$1UTC");nr.prototype[n]&&(e.startsWith("get")?nr.prototype[e]=function(){return this.internal[n]()}:(nr.prototype[e]=function(){return Date.prototype[n].apply(this.internal,arguments),fw(this),+this},nr.prototype[n]=function(){return Date.prototype[n].apply(this,arguments),Fu(this),+this}))});function Fu(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function fw(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),b0(e)}function b0(e){const n=Il(e.timeZone,e),t=new Date(+e);t.setUTCHours(t.getUTCHours()-1);const r=-new Date(+e).getTimezoneOffset(),l=-new Date(+t).getTimezoneOffset(),s=r-l,u=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();s&&u&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);const d=r-n;d&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+d);const m=Il(e.timeZone,e),f=-new Date(+e).getTimezoneOffset()-m,h=m!==n,p=f-d;if(h&&p){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+p);const y=Il(e.timeZone,e),w=m-y;w&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+w),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+w))}}class Vn extends nr{static tz(n,...t){return t.length?new Vn(...t,n):new Vn(Date.now(),n)}toISOString(){const[n,t,r]=this.tzComponents(),l=`${n}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+l}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[n,t,r,l]=this.internal.toUTCString().split(" ");return`${n?.slice(0,-1)} ${r} ${t} ${l}`}toTimeString(){const n=this.internal.toUTCString().split(" ")[4],[t,r,l]=this.tzComponents();return`${n} GMT${t}${r}${l} (${gw(this.timeZone,this)})`}toLocaleString(n,t){return Date.prototype.toLocaleString.call(this,n,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(n,t){return Date.prototype.toLocaleDateString.call(this,n,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(n,t){return Date.prototype.toLocaleTimeString.call(this,n,{...t,timeZone:t?.timeZone||this.timeZone})}tzComponents(){const n=this.getTimezoneOffset(),t=n>0?"-":"+",r=String(Math.floor(Math.abs(n)/60)).padStart(2,"0"),l=String(Math.abs(n)%60).padStart(2,"0");return[t,r,l]}withTimeZone(n){return new Vn(+this,n)}[Symbol.for("constructDateFrom")](n){return new Vn(+new Date(n),this.timeZone)}}function gw(e,n){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(n).slice(12)}var fe;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(fe||(fe={}));var ln;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(ln||(ln={}));var Gt;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Gt||(Gt={}));var ht;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(ht||(ht={}));const Wf=5,vw=4;function hw(e,n){const t=n.startOfMonth(e),r=t.getDay()>0?t.getDay():7,l=n.addDays(e,-r+1),s=n.addDays(l,Wf*7-1);return n.getMonth(e)===n.getMonth(s)?Wf:vw}function k0(e,n){const t=n.startOfMonth(e),r=t.getDay();return r===1?t:r===0?n.addDays(t,-1*6):n.addDays(t,-1*(r-1))}function pw(e,n){const t=k0(e,n),r=hw(e,n);return n.addDays(t,r*7-1)}class Or{constructor(n,t){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?Vn.tz(this.options.timeZone):new this.Date,this.newDate=(r,l,s)=>this.overrides?.newDate?this.overrides.newDate(r,l,s):this.options.timeZone?new Vn(r,l,s,this.options.timeZone):new Date(r,l,s),this.addDays=(r,l)=>this.overrides?.addDays?this.overrides.addDays(r,l):Hl(r,l),this.addMonths=(r,l)=>this.overrides?.addMonths?this.overrides.addMonths(r,l):cd(r,l),this.addWeeks=(r,l)=>this.overrides?.addWeeks?this.overrides.addWeeks(r,l):QA(r,l),this.addYears=(r,l)=>this.overrides?.addYears?this.overrides.addYears(r,l):md(r,l),this.differenceInCalendarDays=(r,l)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(r,l):Gr(r,l),this.differenceInCalendarMonths=(r,l)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(r,l):rR(r,l),this.eachMonthOfInterval=r=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(r):Yv(r),this.endOfBroadcastWeek=r=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(r):pw(r,this),this.endOfISOWeek=r=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(r):lR(r),this.endOfMonth=r=>this.overrides?.endOfMonth?this.overrides.endOfMonth(r):Hv(r),this.endOfWeek=(r,l)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(r,l):$v(r,this.options),this.endOfYear=r=>this.overrides?.endOfYear?this.overrides.endOfYear(r):Ks(r),this.format=(r,l,s)=>{const u=this.overrides?.format?this.overrides.format(r,l,this.options):ga(r,l,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(u):u},this.getISOWeek=r=>this.overrides?.getISOWeek?this.overrides.getISOWeek(r):gd(r),this.getMonth=(r,l)=>this.overrides?.getMonth?this.overrides.getMonth(r,this.options):pd(r,this.options),this.getYear=(r,l)=>this.overrides?.getYear?this.overrides.getYear(r,this.options):_d(r,this.options),this.getWeek=(r,l)=>this.overrides?.getWeek?this.overrides.getWeek(r,this.options):hd(r,this.options),this.isAfter=(r,l)=>this.overrides?.isAfter?this.overrides.isAfter(r,l):Xv(r,l),this.isBefore=(r,l)=>this.overrides?.isBefore?this.overrides.isBefore(r,l):$l(r,l),this.isDate=r=>this.overrides?.isDate?this.overrides.isDate(r):qv(r),this.isSameDay=(r,l)=>this.overrides?.isSameDay?this.overrides.isSameDay(r,l):fd(r,l),this.isSameMonth=(r,l)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(r,l):pS(r,l),this.isSameYear=(r,l)=>this.overrides?.isSameYear?this.overrides.isSameYear(r,l):t0(r,l),this.max=r=>this.overrides?.max?this.overrides.max(r):eR(r),this.min=r=>this.overrides?.min?this.overrides.min(r):nR(r),this.setMonth=(r,l)=>this.overrides?.setMonth?this.overrides.setMonth(r,l):r0(r,l),this.setYear=(r,l)=>this.overrides?.setYear?this.overrides.setYear(r,l):a0(r,l),this.startOfBroadcastWeek=(r,l)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(r,this):k0(r,this),this.startOfDay=r=>this.overrides?.startOfDay?this.overrides.startOfDay(r):Sr(r),this.startOfISOWeek=r=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(r):ma(r),this.startOfMonth=r=>this.overrides?.startOfMonth?this.overrides.startOfMonth(r):fa(r),this.startOfWeek=(r,l)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(r,this.options):Rr(r,this.options),this.startOfYear=r=>this.overrides?.startOfYear?this.overrides.startOfYear(r):Yl(r),this.options={locale:Fs,...n},this.overrides=t}getDigitMap(){const{numerals:n="latn"}=this.options,t=new Intl.NumberFormat("en-US",{numberingSystem:n}),r={};for(let l=0;l<10;l++)r[l.toString()]=t.format(l);return r}replaceDigits(n){const t=this.getDigitMap();return n.replace(/\d/g,r=>t[r]||r)}formatNumber(n){return this.replaceDigits(n.toString())}}const or=new Or;class T0{constructor(n,t,r=or){this.date=n,this.displayMonth=t,this.outside=!!(t&&!r.isSameMonth(n,t)),this.dateLib=r}isEqualTo(n){return this.dateLib.isSameDay(n.date,this.date)&&this.dateLib.isSameMonth(n.displayMonth,this.displayMonth)}}class _w{constructor(n,t){this.date=n,this.weeks=t}}class Ew{constructor(n,t){this.days=t,this.weekNumber=n}}function Nr(e,n,t=!1,r=or){let{from:l,to:s}=e;const{differenceInCalendarDays:u,isSameDay:d}=r;return l&&s?(u(s,l)<0&&([l,s]=[s,l]),u(n,l)>=(t?1:0)&&u(s,n)>=(t?1:0)):!t&&s?d(s,n):!t&&l?d(l,n):!1}function N0(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Td(e){return!!(e&&typeof e=="object"&&"from"in e)}function A0(e){return!!(e&&typeof e=="object"&&"after"in e)}function R0(e){return!!(e&&typeof e=="object"&&"before"in e)}function S0(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function w0(e,n){return Array.isArray(e)&&e.every(n.isDate)}function Dt(e,n,t=or){const r=Array.isArray(n)?n:[n],{isSameDay:l,differenceInCalendarDays:s,isAfter:u}=t;return r.some(d=>{if(typeof d=="boolean")return d;if(t.isDate(d))return l(e,d);if(w0(d,t))return d.includes(e);if(Td(d))return Nr(d,e,!1,t);if(S0(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(e.getDay()):d.dayOfWeek===e.getDay();if(N0(d)){const m=s(d.before,e),g=s(d.after,e),f=m>0,h=g<0;return u(d.before,d.after)?h&&f:f||h}return A0(d)?s(e,d.after)>0:R0(d)?s(d.before,e)>0:typeof d=="function"?d(e):!1})}function yw(e,n,t){const{disabled:r,hidden:l,modifiers:s,showOutsideDays:u,broadcastCalendar:d,today:m}=n,{isSameDay:g,isSameMonth:f,startOfMonth:h,isBefore:p,endOfMonth:y,isAfter:w}=t,S=n.startMonth&&h(n.startMonth),E=n.endMonth&&y(n.endMonth),A={[ln.focused]:[],[ln.outside]:[],[ln.disabled]:[],[ln.hidden]:[],[ln.today]:[]},O={};for(const N of e){const{date:F,displayMonth:T}=N,K=!!(T&&!f(F,T)),L=!!(S&&p(F,S)),V=!!(E&&w(F,E)),C=!!(r&&Dt(F,r,t)),J=!!(l&&Dt(F,l,t))||L||V||!d&&!u&&K||d&&u===!1&&K,W=g(F,m??t.today());K&&A.outside.push(N),C&&A.disabled.push(N),J&&A.hidden.push(N),W&&A.today.push(N),s&&Object.keys(s).forEach(q=>{const G=s?.[q];G&&Dt(F,G,t)&&(O[q]?O[q].push(N):O[q]=[N])})}return N=>{const F={[ln.focused]:!1,[ln.disabled]:!1,[ln.hidden]:!1,[ln.outside]:!1,[ln.today]:!1},T={};for(const K in A){const L=A[K];F[K]=L.some(V=>V===N)}for(const K in O)T[K]=O[K].some(L=>L===N);return{...F,...T}}}function bw(e,n,t={}){return Object.entries(e).filter(([,l])=>l===!0).reduce((l,[s])=>(t[s]?l.push(t[s]):n[ln[s]]?l.push(n[ln[s]]):n[Gt[s]]&&l.push(n[Gt[s]]),l),[n[fe.Day]])}function kw(e){return k.createElement("button",{...e})}function Tw(e){return k.createElement("span",{...e})}function Nw(e){const{size:n=24,orientation:t="left",className:r}=e;return k.createElement("svg",{className:r,width:n,height:n,viewBox:"0 0 24 24"},t==="up"&&k.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),t==="down"&&k.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),t==="left"&&k.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),t==="right"&&k.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function Aw(e){const{day:n,modifiers:t,...r}=e;return k.createElement("td",{...r})}function Rw(e){const{day:n,modifiers:t,...r}=e,l=k.useRef(null);return k.useEffect(()=>{t.focused&&l.current?.focus()},[t.focused]),k.createElement("button",{ref:l,...r})}function Sw(e){const{options:n,className:t,components:r,classNames:l,...s}=e,u=[l[fe.Dropdown],t].join(" "),d=n?.find(({value:m})=>m===s.value);return k.createElement("span",{"data-disabled":s.disabled,className:l[fe.DropdownRoot]},k.createElement(r.Select,{className:u,...s},n?.map(({value:m,label:g,disabled:f})=>k.createElement(r.Option,{key:m,value:m,disabled:f},g))),k.createElement("span",{className:l[fe.CaptionLabel],"aria-hidden":!0},d?.label,k.createElement(r.Chevron,{orientation:"down",size:18,className:l[fe.Chevron]})))}function ww(e){return k.createElement("div",{...e})}function Ow(e){return k.createElement("div",{...e})}function Dw(e){const{calendarMonth:n,displayIndex:t,...r}=e;return k.createElement("div",{...r},e.children)}function Pw(e){const{calendarMonth:n,displayIndex:t,...r}=e;return k.createElement("div",{...r})}function Iw(e){return k.createElement("table",{...e})}function Fw(e){return k.createElement("div",{...e})}const O0=R.createContext(void 0);function _a(){const e=R.useContext(O0);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function Lw(e){const{components:n}=_a();return k.createElement(n.Dropdown,{...e})}function Mw(e){const{onPreviousClick:n,onNextClick:t,previousMonth:r,nextMonth:l,...s}=e,{components:u,classNames:d,labels:{labelPrevious:m,labelNext:g}}=_a(),f=R.useCallback(p=>{l&&t?.(p)},[l,t]),h=R.useCallback(p=>{r&&n?.(p)},[r,n]);return k.createElement("nav",{...s},k.createElement(u.PreviousMonthButton,{type:"button",className:d[fe.PreviousMonthButton],tabIndex:r?void 0:-1,"aria-disabled":r?void 0:!0,"aria-label":m(r),onClick:h},k.createElement(u.Chevron,{disabled:r?void 0:!0,className:d[fe.Chevron],orientation:"left"})),k.createElement(u.NextMonthButton,{type:"button",className:d[fe.NextMonthButton],tabIndex:l?void 0:-1,"aria-disabled":l?void 0:!0,"aria-label":g(l),onClick:f},k.createElement(u.Chevron,{disabled:l?void 0:!0,orientation:"right",className:d[fe.Chevron]})))}function xw(e){const{components:n}=_a();return k.createElement(n.Button,{...e})}function Kw(e){return k.createElement("option",{...e})}function Vw(e){const{components:n}=_a();return k.createElement(n.Button,{...e})}function Bw(e){const{rootRef:n,...t}=e;return k.createElement("div",{...t,ref:n})}function Gw(e){return k.createElement("select",{...e})}function jw(e){const{week:n,...t}=e;return k.createElement("tr",{...t})}function Cw(e){return k.createElement("th",{...e})}function Uw(e){return k.createElement("thead",{"aria-hidden":!0},k.createElement("tr",{...e}))}function qw(e){const{week:n,...t}=e;return k.createElement("th",{...t})}function Hw(e){return k.createElement("th",{...e})}function Yw(e){return k.createElement("tbody",{...e})}function $w(e){const{components:n}=_a();return k.createElement(n.Dropdown,{...e})}const Ww=Object.freeze(Object.defineProperty({__proto__:null,Button:kw,CaptionLabel:Tw,Chevron:Nw,Day:Aw,DayButton:Rw,Dropdown:Sw,DropdownNav:ww,Footer:Ow,Month:Dw,MonthCaption:Pw,MonthGrid:Iw,Months:Fw,MonthsDropdown:Lw,Nav:Mw,NextMonthButton:xw,Option:Kw,PreviousMonthButton:Vw,Root:Bw,Select:Gw,Week:jw,WeekNumber:qw,WeekNumberHeader:Hw,Weekday:Cw,Weekdays:Uw,Weeks:Yw,YearsDropdown:$w},Symbol.toStringTag,{value:"Module"}));function zw(e){return{...Ww,...e}}function Jw(e){const n={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([t,r])=>{t.startsWith("data-")&&(n[t]=r)}),n}function Xw(){const e={};for(const n in fe)e[fe[n]]=`rdp-${fe[n]}`;for(const n in ln)e[ln[n]]=`rdp-${ln[n]}`;for(const n in Gt)e[Gt[n]]=`rdp-${Gt[n]}`;for(const n in ht)e[ht[n]]=`rdp-${ht[n]}`;return e}function D0(e,n,t){return(t??new Or(n)).format(e,"LLLL y")}const Zw=D0;function Qw(e,n,t){return(t??new Or(n)).format(e,"d")}function eO(e,n=or){return n.format(e,"LLLL")}function nO(e,n=or){return e<10?n.formatNumber(`0${e.toLocaleString()}`):n.formatNumber(`${e.toLocaleString()}`)}function tO(){return""}function rO(e,n,t){return(t??new Or(n)).format(e,"cccccc")}function P0(e,n=or){return n.format(e,"yyyy")}const aO=P0,lO=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:D0,formatDay:Qw,formatMonthCaption:Zw,formatMonthDropdown:eO,formatWeekNumber:nO,formatWeekNumberHeader:tO,formatWeekdayName:rO,formatYearCaption:aO,formatYearDropdown:P0},Symbol.toStringTag,{value:"Module"}));function iO(e){return e?.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e?.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...lO,...e}}function sO(e,n,t,r,l){const{startOfMonth:s,startOfYear:u,endOfYear:d,eachMonthOfInterval:m,getMonth:g}=l;return m({start:u(e),end:d(e)}).map(p=>{const y=r.formatMonthDropdown(p,l),w=g(p),S=n&&p<s(n)||t&&p>s(t)||!1;return{value:w,label:y,disabled:S}})}function oO(e,n={},t={}){let r={...n?.[fe.Day]};return Object.entries(e).filter(([,l])=>l===!0).forEach(([l])=>{r={...r,...t?.[l]}}),r}function uO(e,n,t){const r=e.today(),l=n?e.startOfISOWeek(r):e.startOfWeek(r),s=[];for(let u=0;u<7;u++){const d=e.addDays(l,u);s.push(d)}return s}function dO(e,n,t,r){if(!e||!n)return;const{startOfYear:l,endOfYear:s,addYears:u,getYear:d,isBefore:m,isSameYear:g}=r,f=l(e),h=s(n),p=[];let y=f;for(;m(y,h)||g(y,h);)p.push(y),y=u(y,1);return p.map(w=>{const S=t.formatYearDropdown(w,r);return{value:d(w),label:S,disabled:!1}})}function I0(e,n,t){return(t??new Or(n)).format(e,"LLLL y")}const cO=I0;function mO(e,n,t,r){let l=(r??new Or(t)).format(e,"PPPP");return n?.today&&(l=`Today, ${l}`),l}function F0(e,n,t,r){let l=(r??new Or(t)).format(e,"PPPP");return n.today&&(l=`Today, ${l}`),n.selected&&(l=`${l}, selected`),l}const fO=F0;function gO(){return""}function vO(e){return"Choose the Month"}function hO(e){return"Go to the Next Month"}function pO(e){return"Go to the Previous Month"}function _O(e,n,t){return(t??new Or(n)).format(e,"cccc")}function EO(e,n){return`Week ${e}`}function yO(e){return"Week Number"}function bO(e){return"Choose the Year"}const kO=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:cO,labelDay:fO,labelDayButton:F0,labelGrid:I0,labelGridcell:mO,labelMonthDropdown:vO,labelNav:gO,labelNext:hO,labelPrevious:pO,labelWeekNumber:EO,labelWeekNumberHeader:yO,labelWeekday:_O,labelYearDropdown:bO},Symbol.toStringTag,{value:"Module"})),Wl=e=>e instanceof HTMLElement?e:null,mu=e=>[...e.querySelectorAll("[data-animated-month]")??[]],TO=e=>Wl(e.querySelector("[data-animated-month]")),fu=e=>Wl(e.querySelector("[data-animated-caption]")),gu=e=>Wl(e.querySelector("[data-animated-weeks]")),NO=e=>Wl(e.querySelector("[data-animated-nav]")),AO=e=>Wl(e.querySelector("[data-animated-weekdays]"));function RO(e,n,{classNames:t,months:r,focused:l,dateLib:s}){const u=R.useRef(null),d=R.useRef(r),m=R.useRef(!1);R.useLayoutEffect(()=>{const g=d.current;if(d.current=r,!n||!e.current||!(e.current instanceof HTMLElement)||r.length===0||g.length===0||r.length!==g.length)return;const f=s.isSameMonth(r[0].date,g[0].date),h=s.isAfter(r[0].date,g[0].date),p=h?t[ht.caption_after_enter]:t[ht.caption_before_enter],y=h?t[ht.weeks_after_enter]:t[ht.weeks_before_enter],w=u.current,S=e.current.cloneNode(!0);if(S instanceof HTMLElement?(mu(S).forEach(N=>{if(!(N instanceof HTMLElement))return;const F=TO(N);F&&N.contains(F)&&N.removeChild(F);const T=fu(N);T&&T.classList.remove(p);const K=gu(N);K&&K.classList.remove(y)}),u.current=S):u.current=null,m.current||f||l)return;const E=w instanceof HTMLElement?mu(w):[],A=mu(e.current);if(A&&A.every(O=>O instanceof HTMLElement)&&E&&E.every(O=>O instanceof HTMLElement)){m.current=!0,e.current.style.isolation="isolate";const O=NO(e.current);O&&(O.style.zIndex="1"),A.forEach((N,F)=>{const T=E[F];if(!T)return;N.style.position="relative",N.style.overflow="hidden";const K=fu(N);K&&K.classList.add(p);const L=gu(N);L&&L.classList.add(y);const V=()=>{m.current=!1,e.current&&(e.current.style.isolation=""),O&&(O.style.zIndex=""),K&&K.classList.remove(p),L&&L.classList.remove(y),N.style.position="",N.style.overflow="",N.contains(T)&&N.removeChild(T)};T.style.pointerEvents="none",T.style.position="absolute",T.style.overflow="hidden",T.setAttribute("aria-hidden","true");const C=AO(T);C&&(C.style.opacity="0");const J=fu(T);J&&(J.classList.add(h?t[ht.caption_before_exit]:t[ht.caption_after_exit]),J.addEventListener("animationend",V));const W=gu(T);W&&W.classList.add(h?t[ht.weeks_before_exit]:t[ht.weeks_after_exit]),N.insertBefore(T,N.firstChild)})}})}function SO(e,n,t,r){const l=e[0],s=e[e.length-1],{ISOWeek:u,fixedWeeks:d,broadcastCalendar:m}=t??{},{addDays:g,differenceInCalendarDays:f,differenceInCalendarMonths:h,endOfBroadcastWeek:p,endOfISOWeek:y,endOfMonth:w,endOfWeek:S,isAfter:E,startOfBroadcastWeek:A,startOfISOWeek:O,startOfWeek:N}=r,F=m?A(l,r):u?O(l):N(l),T=m?p(s):u?y(w(s)):S(w(s)),K=f(T,F),L=h(s,l)+1,V=[];for(let W=0;W<=K;W++){const q=g(F,W);if(n&&E(q,n))break;V.push(q)}const J=(m?35:42)*L;if(d&&V.length<J){const W=J-V.length;for(let q=0;q<W;q++){const G=g(V[V.length-1],1);V.push(G)}}return V}function wO(e){const n=[];return e.reduce((t,r)=>{const l=r.weeks.reduce((s,u)=>[...s,...u.days],n);return[...t,...l]},n)}function OO(e,n,t,r){const{numberOfMonths:l=1}=t,s=[];for(let u=0;u<l;u++){const d=r.addMonths(e,u);if(n&&d>n)break;s.push(d)}return s}function zf(e,n){const{month:t,defaultMonth:r,today:l=n.today(),numberOfMonths:s=1,endMonth:u,startMonth:d}=e;let m=t||r||l;const{differenceInCalendarMonths:g,addMonths:f,startOfMonth:h}=n;if(u&&g(u,m)<0){const p=-1*(s-1);m=f(u,p)}return d&&g(m,d)<0&&(m=d),h(m)}function DO(e,n,t,r){const{addDays:l,endOfBroadcastWeek:s,endOfISOWeek:u,endOfMonth:d,endOfWeek:m,getISOWeek:g,getWeek:f,startOfBroadcastWeek:h,startOfISOWeek:p,startOfWeek:y}=r,w=e.reduce((S,E)=>{const A=t.broadcastCalendar?h(E,r):t.ISOWeek?p(E):y(E),O=t.broadcastCalendar?s(E):t.ISOWeek?u(d(E)):m(d(E)),N=n.filter(L=>L>=A&&L<=O),F=t.broadcastCalendar?35:42;if(t.fixedWeeks&&N.length<F){const L=n.filter(V=>{const C=F-N.length;return V>O&&V<=l(O,C)});N.push(...L)}const T=N.reduce((L,V)=>{const C=t.ISOWeek?g(V):f(V),J=L.find(q=>q.weekNumber===C),W=new T0(V,E,r);return J?J.days.push(W):L.push(new Ew(C,[W])),L},[]),K=new _w(E,T);return S.push(K),S},[]);return t.reverseMonths?w.reverse():w}function PO(e,n){let{startMonth:t,endMonth:r}=e;const{startOfYear:l,startOfDay:s,startOfMonth:u,endOfMonth:d,addYears:m,endOfYear:g,newDate:f,today:h}=n,{fromYear:p,toYear:y,fromMonth:w,toMonth:S}=e;!t&&w&&(t=w),!t&&p&&(t=n.newDate(p,0,1)),!r&&S&&(r=S),!r&&y&&(r=f(y,11,31));const E=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return t?t=u(t):p?t=f(p,0,1):!t&&E&&(t=l(m(e.today??h(),-100))),r?r=d(r):y?r=f(y,11,31):!r&&E&&(r=g(e.today??h())),[t&&s(t),r&&s(r)]}function IO(e,n,t,r){if(t.disableNavigation)return;const{pagedNavigation:l,numberOfMonths:s=1}=t,{startOfMonth:u,addMonths:d,differenceInCalendarMonths:m}=r,g=l?s:1,f=u(e);if(!n)return d(f,g);if(!(m(n,e)<s))return d(f,g)}function FO(e,n,t,r){if(t.disableNavigation)return;const{pagedNavigation:l,numberOfMonths:s}=t,{startOfMonth:u,addMonths:d,differenceInCalendarMonths:m}=r,g=l?s??1:1,f=u(e);if(!n)return d(f,-g);if(!(m(f,n)<=0))return d(f,-g)}function LO(e){const n=[];return e.reduce((t,r)=>[...t,...r.weeks],n)}function Gs(e,n){const[t,r]=R.useState(e);return[n===void 0?t:n,r]}function MO(e,n){const[t,r]=PO(e,n),{startOfMonth:l,endOfMonth:s}=n,u=zf(e,n),[d,m]=Gs(u,e.month?u:void 0);R.useEffect(()=>{const K=zf(e,n);m(K)},[e.timeZone]);const g=OO(d,r,e,n),f=SO(g,e.endMonth?s(e.endMonth):void 0,e,n),h=DO(g,f,e,n),p=LO(h),y=wO(h),w=FO(d,t,e,n),S=IO(d,r,e,n),{disableNavigation:E,onMonthChange:A}=e,O=K=>p.some(L=>L.days.some(V=>V.isEqualTo(K))),N=K=>{if(E)return;let L=l(K);t&&L<l(t)&&(L=l(t)),r&&L>l(r)&&(L=l(r)),m(L),A?.(L)};return{months:h,weeks:p,days:y,navStart:t,navEnd:r,previousMonth:w,nextMonth:S,goToMonth:N,goToDay:K=>{O(K)||N(K.date)}}}var zt;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(zt||(zt={}));function Jf(e){return!e[ln.disabled]&&!e[ln.hidden]&&!e[ln.outside]}function xO(e,n,t,r){let l,s=-1;for(const u of e){const d=n(u);Jf(d)&&(d[ln.focused]&&s<zt.FocusedModifier?(l=u,s=zt.FocusedModifier):r?.isEqualTo(u)&&s<zt.LastFocused?(l=u,s=zt.LastFocused):t(u.date)&&s<zt.Selected?(l=u,s=zt.Selected):d[ln.today]&&s<zt.Today&&(l=u,s=zt.Today))}return l||(l=e.find(u=>Jf(n(u)))),l}function KO(e,n,t,r,l,s,u){const{ISOWeek:d,broadcastCalendar:m}=s,{addDays:g,addMonths:f,addWeeks:h,addYears:p,endOfBroadcastWeek:y,endOfISOWeek:w,endOfWeek:S,max:E,min:A,startOfBroadcastWeek:O,startOfISOWeek:N,startOfWeek:F}=u;let K={day:g,week:h,month:f,year:p,startOfWeek:L=>m?O(L,u):d?N(L):F(L),endOfWeek:L=>m?y(L):d?w(L):S(L)}[e](t,n==="after"?1:-1);return n==="before"&&r?K=E([r,K]):n==="after"&&l&&(K=A([l,K])),K}function L0(e,n,t,r,l,s,u,d=0){if(d>365)return;const m=KO(e,n,t.date,r,l,s,u),g=!!(s.disabled&&Dt(m,s.disabled,u)),f=!!(s.hidden&&Dt(m,s.hidden,u)),h=m,p=new T0(m,h,u);return!g&&!f?p:L0(e,n,p,r,l,s,u,d+1)}function VO(e,n,t,r,l){const{autoFocus:s}=e,[u,d]=R.useState(),m=xO(n.days,t,r||(()=>!1),u),[g,f]=R.useState(s?m:void 0);return{isFocusTarget:S=>!!m?.isEqualTo(S),setFocused:f,focused:g,blur:()=>{d(g),f(void 0)},moveFocus:(S,E)=>{if(!g)return;const A=L0(S,E,g,n.navStart,n.navEnd,e,l);A&&(n.goToDay(A),f(A))}}}function BO(e,n){const{selected:t,required:r,onSelect:l}=e,[s,u]=Gs(t,l?t:void 0),d=l?t:s,{isSameDay:m}=n,g=y=>d?.some(w=>m(w,y))??!1,{min:f,max:h}=e;return{selected:d,select:(y,w,S)=>{let E=[...d??[]];if(g(y)){if(d?.length===f||r&&d?.length===1)return;E=d?.filter(A=>!m(A,y))}else d?.length===h?E=[y]:E=[...E,y];return l||u(E),l?.(E,y,w,S),E},isSelected:g}}function GO(e,n,t=0,r=0,l=!1,s=or){const{from:u,to:d}=n||{},{isSameDay:m,isAfter:g,isBefore:f}=s;let h;if(!u&&!d)h={from:e,to:t>0?void 0:e};else if(u&&!d)m(u,e)?l?h={from:u,to:void 0}:h=void 0:f(e,u)?h={from:e,to:u}:h={from:u,to:e};else if(u&&d)if(m(u,e)&&m(d,e))l?h={from:u,to:d}:h=void 0;else if(m(u,e))h={from:u,to:t>0?void 0:e};else if(m(d,e))h={from:e,to:t>0?void 0:e};else if(f(e,u))h={from:e,to:d};else if(g(e,u))h={from:u,to:e};else if(g(e,d))h={from:u,to:e};else throw new Error("Invalid range");if(h?.from&&h?.to){const p=s.differenceInCalendarDays(h.to,h.from);r>0&&p>r?h={from:e,to:void 0}:t>1&&p<t&&(h={from:e,to:void 0})}return h}function jO(e,n,t=or){const r=Array.isArray(n)?n:[n];let l=e.from;const s=t.differenceInCalendarDays(e.to,e.from),u=Math.min(s,6);for(let d=0;d<=u;d++){if(r.includes(l.getDay()))return!0;l=t.addDays(l,1)}return!1}function Xf(e,n,t=or){return Nr(e,n.from,!1,t)||Nr(e,n.to,!1,t)||Nr(n,e.from,!1,t)||Nr(n,e.to,!1,t)}function CO(e,n,t=or){const r=Array.isArray(n)?n:[n];if(r.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:t.isDate(d)?Nr(e,d,!1,t):w0(d,t)?d.some(m=>Nr(e,m,!1,t)):Td(d)?d.from&&d.to?Xf(e,{from:d.from,to:d.to},t):!1:S0(d)?jO(e,d.dayOfWeek,t):N0(d)?t.isAfter(d.before,d.after)?Xf(e,{from:t.addDays(d.after,1),to:t.addDays(d.before,-1)},t):Dt(e.from,d,t)||Dt(e.to,d,t):A0(d)||R0(d)?Dt(e.from,d,t)||Dt(e.to,d,t):!1))return!0;const u=r.filter(d=>typeof d=="function");if(u.length){let d=e.from;const m=t.differenceInCalendarDays(e.to,e.from);for(let g=0;g<=m;g++){if(u.some(f=>f(d)))return!0;d=t.addDays(d,1)}}return!1}function UO(e,n){const{disabled:t,excludeDisabled:r,selected:l,required:s,onSelect:u}=e,[d,m]=Gs(l,u?l:void 0),g=u?l:d;return{selected:g,select:(p,y,w)=>{const{min:S,max:E}=e,A=p?GO(p,g,S,E,s,n):void 0;return r&&t&&A?.from&&A.to&&CO({from:A.from,to:A.to},t,n)&&(A.from=p,A.to=void 0),u||m(A),u?.(A,p,y,w),A},isSelected:p=>g&&Nr(g,p,!1,n)}}function qO(e,n){const{selected:t,required:r,onSelect:l}=e,[s,u]=Gs(t,l?t:void 0),d=l?t:s,{isSameDay:m}=n;return{selected:d,select:(h,p,y)=>{let w=h;return!r&&d&&d&&m(h,d)&&(w=void 0),l||u(w),l?.(w,h,p,y),w},isSelected:h=>d?m(d,h):!1}}function HO(e,n){const t=qO(e,n),r=BO(e,n),l=UO(e,n);switch(e.mode){case"single":return t;case"multiple":return r;case"range":return l;default:return}}function YO(e){let n=e;n.timeZone&&(n={...e},n.today&&(n.today=new Vn(n.today,n.timeZone)),n.month&&(n.month=new Vn(n.month,n.timeZone)),n.defaultMonth&&(n.defaultMonth=new Vn(n.defaultMonth,n.timeZone)),n.startMonth&&(n.startMonth=new Vn(n.startMonth,n.timeZone)),n.endMonth&&(n.endMonth=new Vn(n.endMonth,n.timeZone)),n.mode==="single"&&n.selected?n.selected=new Vn(n.selected,n.timeZone):n.mode==="multiple"&&n.selected?n.selected=n.selected?.map(Te=>new Vn(Te,n.timeZone)):n.mode==="range"&&n.selected&&(n.selected={from:n.selected.from?new Vn(n.selected.from,n.timeZone):void 0,to:n.selected.to?new Vn(n.selected.to,n.timeZone):void 0}));const{components:t,formatters:r,labels:l,dateLib:s,locale:u,classNames:d}=R.useMemo(()=>{const Te={...Fs,...n.locale};return{dateLib:new Or({locale:Te,weekStartsOn:n.broadcastCalendar?1:n.weekStartsOn,firstWeekContainsDate:n.firstWeekContainsDate,useAdditionalWeekYearTokens:n.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:n.useAdditionalDayOfYearTokens,timeZone:n.timeZone,numerals:n.numerals},n.dateLib),components:zw(n.components),formatters:iO(n.formatters),labels:{...kO,...n.labels},locale:Te,classNames:{...Xw(),...n.classNames}}},[n.locale,n.broadcastCalendar,n.weekStartsOn,n.firstWeekContainsDate,n.useAdditionalWeekYearTokens,n.useAdditionalDayOfYearTokens,n.timeZone,n.numerals,n.dateLib,n.components,n.formatters,n.labels,n.classNames]),{captionLayout:m,mode:g,navLayout:f,numberOfMonths:h=1,onDayBlur:p,onDayClick:y,onDayFocus:w,onDayKeyDown:S,onDayMouseEnter:E,onDayMouseLeave:A,onNextClick:O,onPrevClick:N,showWeekNumber:F,styles:T}=n,{formatCaption:K,formatDay:L,formatMonthDropdown:V,formatWeekNumber:C,formatWeekNumberHeader:J,formatWeekdayName:W,formatYearDropdown:q}=r,G=MO(n,s),{days:Z,months:re,navStart:ne,navEnd:oe,previousMonth:ee,nextMonth:me,goToMonth:Ne}=G,Ee=yw(Z,n,s),{isSelected:rn,select:on,selected:it}=HO(n,s)??{},{blur:ve,focused:_e,isFocusTarget:Ze,moveFocus:Qe,setFocused:En}=VO(n,G,Ee,rn??(()=>!1),s),{labelDayButton:st,labelGridcell:Mn,labelGrid:Dn,labelMonthDropdown:Wn,labelNav:$e,labelPrevious:yn,labelNext:ot,labelWeekday:mn,labelWeekNumber:ut,labelWeekNumberHeader:zn,labelYearDropdown:P}=l,B=R.useMemo(()=>uO(s,n.ISOWeek),[s,n.ISOWeek]),H=g!==void 0||y!==void 0,ae=R.useCallback(()=>{ee&&(Ne(ee),N?.(ee))},[ee,Ne,N]),te=R.useCallback(()=>{me&&(Ne(me),O?.(me))},[Ne,me,O]),Q=R.useCallback((Te,ze)=>Ye=>{Ye.preventDefault(),Ye.stopPropagation(),En(Te),on?.(Te.date,ze,Ye),y?.(Te.date,ze,Ye)},[on,y,En]),ce=R.useCallback((Te,ze)=>Ye=>{En(Te),w?.(Te.date,ze,Ye)},[w,En]),we=R.useCallback((Te,ze)=>Ye=>{ve(),p?.(Te.date,ze,Ye)},[ve,p]),Ie=R.useCallback((Te,ze)=>Ye=>{const Ft={ArrowLeft:["day",n.dir==="rtl"?"after":"before"],ArrowRight:["day",n.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[Ye.shiftKey?"year":"month","before"],PageDown:[Ye.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Ft[Ye.key]){Ye.preventDefault(),Ye.stopPropagation();const[Xn,ya]=Ft[Ye.key];Qe(Xn,ya)}S?.(Te.date,ze,Ye)},[Qe,S,n.dir]),An=R.useCallback((Te,ze)=>Ye=>{E?.(Te.date,ze,Ye)},[E]),Ht=R.useCallback((Te,ze)=>Ye=>{A?.(Te.date,ze,Ye)},[A]),Jn=R.useCallback(Te=>ze=>{const Ye=Number(ze.target.value),Ft=s.setMonth(s.startOfMonth(Te),Ye);Ne(Ft)},[s,Ne]),Hr=R.useCallback(Te=>ze=>{const Ye=Number(ze.target.value),Ft=s.setYear(s.startOfMonth(Te),Ye);Ne(Ft)},[s,Ne]),{className:ur,style:dr}=R.useMemo(()=>({className:[d[fe.Root],n.className].filter(Boolean).join(" "),style:{...T?.[fe.Root],...n.style}}),[d,n.className,n.style,T]),Yr=Jw(n),cr=R.useRef(null);RO(cr,!!n.animate,{classNames:d,months:re,focused:_e,dateLib:s});const $r={dayPickerProps:n,selected:it,select:on,isSelected:rn,months:re,nextMonth:me,previousMonth:ee,goToMonth:Ne,getModifiers:Ee,components:t,classNames:d,styles:T,labels:l,formatters:r};return k.createElement(O0.Provider,{value:$r},k.createElement(t.Root,{rootRef:n.animate?cr:void 0,className:ur,style:dr,dir:n.dir,id:n.id,lang:n.lang,nonce:n.nonce,title:n.title,role:n.role,"aria-label":n["aria-label"],...Yr},k.createElement(t.Months,{className:d[fe.Months],style:T?.[fe.Months]},!n.hideNavigation&&!f&&k.createElement(t.Nav,{"data-animated-nav":n.animate?"true":void 0,className:d[fe.Nav],style:T?.[fe.Nav],"aria-label":$e(),onPreviousClick:ae,onNextClick:te,previousMonth:ee,nextMonth:me}),re.map((Te,ze)=>{const Ye=sO(Te.date,ne,oe,r,s),Ft=dO(ne,oe,r,s);return k.createElement(t.Month,{"data-animated-month":n.animate?"true":void 0,className:d[fe.Month],style:T?.[fe.Month],key:ze,displayIndex:ze,calendarMonth:Te},f==="around"&&!n.hideNavigation&&ze===0&&k.createElement(t.PreviousMonthButton,{type:"button",className:d[fe.PreviousMonthButton],tabIndex:ee?void 0:-1,"aria-disabled":ee?void 0:!0,"aria-label":yn(ee),onClick:ae,"data-animated-button":n.animate?"true":void 0},k.createElement(t.Chevron,{disabled:ee?void 0:!0,className:d[fe.Chevron],orientation:n.dir==="rtl"?"right":"left"})),k.createElement(t.MonthCaption,{"data-animated-caption":n.animate?"true":void 0,className:d[fe.MonthCaption],style:T?.[fe.MonthCaption],calendarMonth:Te,displayIndex:ze},m?.startsWith("dropdown")?k.createElement(t.DropdownNav,{className:d[fe.Dropdowns],style:T?.[fe.Dropdowns]},m==="dropdown"||m==="dropdown-months"?k.createElement(t.MonthsDropdown,{className:d[fe.MonthsDropdown],"aria-label":Wn(),classNames:d,components:t,disabled:!!n.disableNavigation,onChange:Jn(Te.date),options:Ye,style:T?.[fe.Dropdown],value:s.getMonth(Te.date)}):k.createElement("span",null,V(Te.date,s)),m==="dropdown"||m==="dropdown-years"?k.createElement(t.YearsDropdown,{className:d[fe.YearsDropdown],"aria-label":P(s.options),classNames:d,components:t,disabled:!!n.disableNavigation,onChange:Hr(Te.date),options:Ft,style:T?.[fe.Dropdown],value:s.getYear(Te.date)}):k.createElement("span",null,q(Te.date,s)),k.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},K(Te.date,s.options,s))):k.createElement(t.CaptionLabel,{className:d[fe.CaptionLabel],role:"status","aria-live":"polite"},K(Te.date,s.options,s))),f==="around"&&!n.hideNavigation&&ze===h-1&&k.createElement(t.NextMonthButton,{type:"button",className:d[fe.NextMonthButton],tabIndex:me?void 0:-1,"aria-disabled":me?void 0:!0,"aria-label":ot(me),onClick:te,"data-animated-button":n.animate?"true":void 0},k.createElement(t.Chevron,{disabled:me?void 0:!0,className:d[fe.Chevron],orientation:n.dir==="rtl"?"left":"right"})),ze===h-1&&f==="after"&&!n.hideNavigation&&k.createElement(t.Nav,{"data-animated-nav":n.animate?"true":void 0,className:d[fe.Nav],style:T?.[fe.Nav],"aria-label":$e(),onPreviousClick:ae,onNextClick:te,previousMonth:ee,nextMonth:me}),k.createElement(t.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":Dn(Te.date,s.options,s)||void 0,className:d[fe.MonthGrid],style:T?.[fe.MonthGrid]},!n.hideWeekdays&&k.createElement(t.Weekdays,{"data-animated-weekdays":n.animate?"true":void 0,className:d[fe.Weekdays],style:T?.[fe.Weekdays]},F&&k.createElement(t.WeekNumberHeader,{"aria-label":zn(s.options),className:d[fe.WeekNumberHeader],style:T?.[fe.WeekNumberHeader],scope:"col"},J()),B.map((Xn,ya)=>k.createElement(t.Weekday,{"aria-label":mn(Xn,s.options,s),className:d[fe.Weekday],key:ya,style:T?.[fe.Weekday],scope:"col"},W(Xn,s.options,s)))),k.createElement(t.Weeks,{"data-animated-weeks":n.animate?"true":void 0,className:d[fe.Weeks],style:T?.[fe.Weeks]},Te.weeks.map((Xn,ya)=>k.createElement(t.Week,{className:d[fe.Week],key:Xn.weekNumber,style:T?.[fe.Week],week:Xn},F&&k.createElement(t.WeekNumber,{week:Xn,style:T?.[fe.WeekNumber],"aria-label":ut(Xn.weekNumber,{locale:u}),className:d[fe.WeekNumber],scope:"row",role:"rowheader"},C(Xn.weekNumber,s)),Xn.days.map(Rn=>{const{date:bt}=Rn,Ke=Ee(Rn);if(Ke[ln.focused]=!Ke.hidden&&!!_e?.isEqualTo(Rn),Ke[Gt.selected]=rn?.(bt)||Ke.selected,Td(it)){const{from:ll,to:Wr}=it;Ke[Gt.range_start]=!!(ll&&Wr&&s.isSameDay(bt,ll)),Ke[Gt.range_end]=!!(ll&&Wr&&s.isSameDay(bt,Wr)),Ke[Gt.range_middle]=Nr(it,bt,!0,s)}const ni=oO(Ke,T,n.modifiersStyles),Ws=bw(Ke,d,n.modifiersClassNames),zs=!H&&!Ke.hidden?Mn(bt,Ke,s.options,s):void 0;return k.createElement(t.Day,{key:`${s.format(bt,"yyyy-MM-dd")}_${s.format(Rn.displayMonth,"yyyy-MM")}`,day:Rn,modifiers:Ke,className:Ws.join(" "),style:ni,role:"gridcell","aria-selected":Ke.selected||void 0,"aria-label":zs,"data-day":s.format(bt,"yyyy-MM-dd"),"data-month":Rn.outside?s.format(bt,"yyyy-MM"):void 0,"data-selected":Ke.selected||void 0,"data-disabled":Ke.disabled||void 0,"data-hidden":Ke.hidden||void 0,"data-outside":Rn.outside||void 0,"data-focused":Ke.focused||void 0,"data-today":Ke.today||void 0},!Ke.hidden&&H?k.createElement(t.DayButton,{className:d[fe.DayButton],style:T?.[fe.DayButton],type:"button",day:Rn,modifiers:Ke,disabled:Ke.disabled||void 0,tabIndex:Ze(Rn)?0:-1,"aria-label":st(bt,Ke,s.options,s),onClick:Q(Rn,Ke),onBlur:we(Rn,Ke),onFocus:ce(Rn,Ke),onKeyDown:Ie(Rn,Ke),onMouseEnter:An(Rn,Ke),onMouseLeave:Ht(Rn,Ke)},L(bt,s.options,s)):!Ke.hidden&&L(Rn.date,s.options,s))}))))))})),n.footer&&k.createElement(t.Footer,{className:d[fe.Footer],style:T?.[fe.Footer],role:"status","aria-live":"polite"},n.footer)))}var $O=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const M0=R.forwardRef((e,n)=>{var{as:t="div",className:r,above:l,below:s,variant:u,asChild:d}=e,m=$O(e,["as","className","above","below","variant","asChild"]);const{cn:g}=ke(),f=u==="show"?l:s,h=u==="show"?s:l,p=d?Za:t;return k.createElement(p,Object.assign({},m,{ref:n,className:g("navds-responsive",r,{[`navds-responsive__above--${f}`]:f,[`navds-responsive__below--${h}`]:h})}))}),WO=R.forwardRef((e,n)=>k.createElement(M0,Object.assign({},e,{ref:n,variant:"hide"}))),Nd=R.forwardRef((e,n)=>k.createElement(M0,Object.assign({},e,{ref:n,variant:"show"})));function jt(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function zO({day:e,fromDate:n,toDate:t}){const r=t&&Gr(e,Sr(t))>0,l=n&&Gr(Sr(n),e)>0;return r||l||!1}const x0="dd.MM.yyyy",JO="MMMM yyyy",K0=[x0,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...K0];const vu=(e,n,t,r,l)=>{let s;const u=K0;if(l){for(const d of u)if(s=Ca(e,d,n,{locale:t}),jt(s)&&!hu(e,n,t,u))return s;for(const d of[...u.map(m=>m.replace("yyyy","yy"))])if(s=Ca(e,d,n,{locale:t}),jt(s)&&hu(e,n,t,u)){const m=XO(e,d,n,t);return jt(new Date(m))?new Date(m):new Date("Invalid date")}return new Date("Invalid date")}for(const d of u)if(s=Ca(e,d,n,{locale:t}),jt(s)&&!hu(e,n,t,u))return s;return new Date("Invalid date")};function hu(e,n,t,r){let l;const s=r.map(u=>u.replace("yyyy","yy"));for(const u of s)if(l=Ca(e,u,n,{locale:t}),jt(l))return!0;return!1}function XO(e,n,t,r){const l=Ca(Zf(e,"19"),n.replace("yy","yyyy"),t,{locale:r}),s=Ca(Zf(e,"20"),n.replace("yy","yyyy"),t,{locale:r});return jt(l)&&jt(s)?$l(l,yS(new Date,{years:80}))?s:l:new Date("Invalid date")}function Zf(e,n){const t=e.slice(-2);return`${e.slice(0,e.length-2)}${n}${t}`}const bl=(e,n,t,r)=>ga(e,r??x0,{locale:n}),ZO=({month:e,start:n,end:t})=>{if(!e)return;let r=e;return n&&$l(r,n)&&(r=n),t&&Xv(r,t)&&(r=t),fa(r)};function QO(e,n,t,r){return Yv({start:Yl(e),end:Ks(e)}).map(u=>{const d=ga(u,"LLLL",{locale:r}),m=pd(u),g=n&&u<fa(n)||t&&u>fa(t)||!1;return{value:m,label:d,disabled:g}})}function eD(e,n,t){if(!e||!n)return;const r=Yl(e),l=Ks(n),s=[];let u=r;for(;$l(u,l)||t0(u,l);)s.push(u),u=md(u,1);return s.map(d=>{const m=ga(d,"yyyy",{locale:t});return{value:_d(d),label:m,disabled:!1}})}function nD({captionLayout:e,startMonth:n,endMonth:t,today:r}){const l=e==="dropdown",s=r??new Date;return n?n=fa(n):!n&&l&&(n=Yl(md(s,-100))),t?t=Hv(t):!t&&l&&(t=Ks(s)),[n&&Sr(n),t&&Sr(t)]}var tD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const rD=e=>{var{day:n,modifiers:t,locale:r,children:l}=e,s=tD(e,["day","modifiers","locale","children"]);const{cn:u}=ke(),d=R.useRef(null);return R.useEffect(()=>{var m;t.focused&&((m=d.current)===null||m===void 0||m.focus())},[t.focused]),t.hidden?k.createElement(k.Fragment,null):k.createElement("button",Object.assign({},s,{ref:d,"aria-hidden":n.outside,"aria-pressed":!!t.selected,"aria-label":ga(n.date,"cccc d",{locale:r}),"data-pressed":t.selected,"data-today":t.today||void 0,className:u(s.className,{"rdp-day_disabled":t.disabled,"rdp-day_selected":t.selected,"rdp-day_range_start":t.range_start,"rdp-day_range_middle":t.range_middle,"rdp-day_range_end":t.range_end,"rdp-day_today":t.today,"rdp-day_outside":t.outside,"rdp-day__weekend":t.weekend})}),l)};var aD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const Qf=R.forwardRef((e,n)=>{const{inputProps:t,errorId:r,showErrorMsg:l,hasError:s,size:u,inputDescriptionId:d,readOnly:m}=tl(e,"select"),{children:g,label:f,className:h,description:p,htmlSize:y,hideLabel:w=!1,style:S}=e,E=aD(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:A}=ke(),O={onMouseDown:N=>{m&&(N.preventDefault(),N.target.focus())},onKeyDown:N=>{m&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(N.key)&&N.preventDefault()}};return k.createElement("div",{className:A(h,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!t.disabled,"navds-form-field--readonly":m,"navds-select--error":s,"navds-select--readonly":m})},k.createElement(Ur,{htmlFor:t.id,size:u,className:A("navds-form-field__label",{"navds-sr-only":w})},m&&k.createElement(i0,null),f),!!p&&k.createElement(On,{className:A("navds-form-field__description",{"navds-sr-only":w}),id:d,size:u,as:"div"},p),k.createElement("div",{className:A("navds-select__container"),style:S},k.createElement("select",Object.assign({},Gn(E,["error","errorId","size","readOnly"]),t,O,{ref:n,className:A("navds-select__input","navds-body-short",`navds-body-short--${u??"medium"}`),size:y}),g),k.createElement(hv,{className:A("navds-select__chevron"),"aria-hidden":!0})),k.createElement("div",{className:A("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},l&&k.createElement(jl,{size:u,showIcon:!0},e.error)))}),V0=({week:{weekNumber:e,days:n},onWeekNumberClick:t,className:r,style:l,showOnDesktop:s})=>{const u=Vs().translate,{cn:d}=ke(),{getModifiers:m}=_a(),g=R.useMemo(()=>n.filter(h=>{const p=m(h);return!(p.hidden||p.outside||p.disabled)}).length===0,[n,m]),f=s?Nd:WO;return!t||g?k.createElement(f,{above:"sm",asChild:!0},k.createElement("td",{className:"rdp-cell"},k.createElement(td,{as:"span",textColor:"subtle",className:r,style:l,"aria-label":u("weekNumber",{week:e})},e))):k.createElement(f,{above:"sm",asChild:!0},k.createElement("td",{className:d("rdp-cell",{"navds-date__week-wrapper":!s})},k.createElement(yt,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":u("selectWeekNumber",{week:e}),style:l,className:d("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{t(e,n.map(h=>h.date))},icon:k.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},lD=({onWeekNumberClick:e,weeks:n})=>{const t=Vs().translate,{cn:r}=ke(),l=ha();return e?k.createElement(Nd,{below:"sm",asChild:!0},k.createElement("table",{className:"rdp-table",role:"grid"},k.createElement("tbody",{className:"rdp-tbody"},k.createElement("tr",{className:r("rdp-row navds-date__week-row")},k.createElement(td,{as:"th",weight:"semibold",className:r("rdp-cell navds-date__week-cell")},k.createElement("span",{className:r("navds-date__week-wrapper"),id:l},t("week"))),n?.map(s=>k.createElement(V0,{key:s.weekNumber,week:s,onWeekNumberClick:e,showOnDesktop:!1,className:r("navds-date__week-wrapper")})))))):null};var iD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const sD=e=>{var{children:n,calendarMonth:t,locale:r,onWeekNumberClick:l}=e,s=iD(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:u,goToMonth:d,previousMonth:m,nextMonth:g}=_a(),{captionLayout:f}=u,{cn:h}=ke(),p=Vs().translate,y=R.useCallback((N,F)=>{const T=Number(F.target.value),K=r0(fa(N),T);d(K)},[d]),w=R.useCallback((N,F)=>{const T=Number(F.target.value),K=a0(fa(N),T);d(K)},[d]),[S,E]=nD({captionLayout:f==="dropdown"?"dropdown":"label",startMonth:u.startMonth,endMonth:u.endMonth,today:u.today}),A=QO(t.date,S,E,r),O=eD(S,E,r);return k.createElement("div",Object.assign({},Gn(s,["displayIndex"])),k.createElement("div",{className:h("navds-date__caption")},f?.startsWith("dropdown")&&k.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:h("navds-sr-only")},ga(t.date,"LLLL y",{locale:r})),k.createElement(yt,{variant:"tertiary-neutral",disabled:!m,onClick:()=>m&&d(m),icon:k.createElement(ST,{title:p("goToPreviousMonth")}),className:h("navds-date__caption-button"),type:"button"}),f?.startsWith("dropdown")?k.createElement("div",{className:h("navds-date__caption")},k.createElement(Qf,{label:p("month"),hideLabel:!0,className:h("navds-date__caption__month"),onChange:N=>y(t.date,N),value:pd(t.date)},A?.map(({value:N,label:F,disabled:T})=>k.createElement("option",{key:N,value:N,disabled:T},F))),k.createElement(Qf,{label:p("year"),hideLabel:!0,className:h("navds-date__caption__year"),onChange:N=>w(t.date,N),value:_d(t.date)},O?.map(({value:N,label:F,disabled:T})=>k.createElement("option",{key:N,value:N,disabled:T},F)))):k.createElement(On,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:h("navds-date__caption-label")},ga(t.date,"LLLL y",{locale:r})),k.createElement(yt,{variant:"tertiary-neutral",icon:k.createElement(OT,{title:p("goToNextMonth")}),onClick:()=>g&&d(g),disabled:!g,className:h("navds-date__caption-button"),type:"button"})),k.createElement(lD,{weeks:t.weeks,onWeekNumberClick:l}),n)};var oD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const uD={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},B0=e=>{var{className:n,dropdownCaption:t,disabled:r=[],disableWeekends:l=!1,showWeekNumber:s=!1,selected:u,fixedWeeks:d=!1,onWeekNumberClick:m,fromDate:g,toDate:f,month:h,mode:p,handleSelect:y,locale:w}=e,S=oD(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:E}=ke(),A=Cv(),O=w?u0(w):A,N=p??"single";return k.createElement(YO,Object.assign({captionLayout:t?"dropdown":"label",hideNavigation:!0,locale:O,mode:N,onSelect:(F,T)=>{if(N!=="range"||F||!y0(u)){y(F);return}if(!u.to){y({from:T,to:void 0});return}let K;fd(u.to,T)?K=void 0:$l(T,u.to)?K={from:T,to:u.to}:K={from:u.to,to:T},y(K)},selected:u,classNames:uD,components:{MonthCaption:()=>k.createElement(k.Fragment,null),DayButton:R.useCallback(F=>k.createElement(rD,Object.assign({},F,{locale:O})),[O]),Month:R.useCallback(F=>k.createElement(sD,Object.assign({},F,{locale:O,onWeekNumberClick:N==="multiple"?m:void 0})),[O,N,m]),Day:R.useCallback(F=>k.createElement("td",Object.assign({},Gn(F,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:R.useCallback(F=>k.createElement(V0,Object.assign({},F,{showOnDesktop:!0,onWeekNumberClick:N==="multiple"?m:void 0})),[N,m]),WeekNumberHeader:R.useCallback(F=>k.createElement(Nd,{above:"sm",asChild:!0},k.createElement("th",Object.assign({},F))),[]),Weekdays:R.useCallback(F=>k.createElement("thead",Object.assign({},F,{className:"rdp-head","aria-hidden":!0}),k.createElement("tr",{className:"rdp-head_row"},F.children)),[])},className:E("navds-date",n),disabled:F=>l&&ps(F)||Dt(F,r)||zO({day:F,fromDate:g,toDate:f}),weekStartsOn:1,modifiers:{weekend:F=>l&&ps(F)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:s,fixedWeeks:d,showOutsideDays:!0,startMonth:g,endMonth:f,month:ZO({month:h,start:g,end:f})},Gn(S,["onSelect","role","id","defaultSelected"])))};var dD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const cD=R.forwardRef((e,n)=>{var{className:t,locale:r,translations:l,selected:s,defaultSelected:u,onSelect:d,mode:m}=e,g=dD(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:f}=ke(),h=sr("DatePicker",l,d0(r)),[p,y]=cs({defaultValue:u,value:s,onChange:w=>d?.(w)});return k.createElement(c0,{translate:h},k.createElement("div",{ref:n,className:f("navds-date__standalone-wrapper",t)},k.createElement(B0,Object.assign({},g,{locale:r,handleSelect:y,selected:p,mode:m}))))});var mD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const ks=R.forwardRef((e,n)=>{var{children:t,locale:r,translations:l,selected:s,id:u,defaultSelected:d,wrapperClassName:m,open:g,onClose:f,onOpenToggle:h,strategy:p,mode:y}=e,w=mD(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const S=sr("DatePicker",l,d0(r)),{cn:E}=ke(),A=ha(u),[O,N]=cs({defaultValue:!1,value:g}),[F,T]=R.useState(null),K=Xa(T,n),[L,V]=cs({defaultValue:d,value:s,onChange:C=>{var J;let W=!1;y==="single"&&C?W=!0:y0(C)&&C.from&&C.to&&(W=!0,fd(C.from,C.to)&&(W=!1)),W&&(f?.(),N(!1)),(J=w?.onSelect)===null||J===void 0||J.call(w,C)}});return k.createElement(c0,{translate:S},k.createElement(qS,{open:O,onOpen:()=>{N(C=>!C),h?.()},ariaId:A,defined:!0},k.createElement("div",{ref:K,className:E("navds-date__wrapper",m)},t,k.createElement(dw,{open:O,anchor:F,onClose:()=>{f?.(),O&&N(!1)},locale:r,translate:S,variant:y??"single",popoverProps:{id:A,strategy:p}},k.createElement(B0,Object.assign({},w,{locale:r,handleSelect:V,selected:L,mode:y}))))))});ks.Standalone=cD;ks.Input=HS;const fD=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),gD=(e={})=>{var n;const{locale:t,required:r,defaultSelected:l,today:s=new Date,fromDate:u,toDate:d,disabled:m,disableWeekends:g,onDateChange:f,inputFormat:h,onValidate:p,defaultMonth:y,allowTwoDigitYear:w=!0}=e,[S,E]=R.useState(null),A=Cv(),O=t?u0(t):A,[N,F]=R.useState(l),[T,K]=R.useState((n=N??y)!==null&&n!==void 0?n:s),[L,V]=R.useState(N),[C,J]=R.useState(!1),W=N?bl(N,O,"date",h):"",[q,G]=R.useState(W),Z=R.useCallback(ve=>{var _e,Ze;J(ve),ve&&K((Ze=(_e=L??N)!==null&&_e!==void 0?_e:y)!==null&&Ze!==void 0?Ze:s)},[y,N,L,s]),re=ve=>{f?.(ve),V(ve)},ne=(ve={})=>p?.(fD(ve));return{datepickerProps:{month:T,onMonthChange:K,onDayClick:(ve,{selected:_e})=>{if(!(_e&&r)){if(ve&&!_e&&(Z(!1),S?.focus()),_e){re(void 0),G(""),ne({isValidDate:!1,isEmpty:!0});return}re(ve),ne(),K(ve),G(ve?bl(ve,O,"date",h):"")}},selected:L??new Date("Invalid date"),locale:t,fromDate:u,toDate:d,today:s,open:C,onClose:()=>{Z(!1),S?.focus()},onOpenToggle:()=>Z(!C),disabled:m,disableWeekends:g},inputProps:{onChange:ve=>{G(ve.target.value);const _e=vu(ve.target.value,s,O,"date",w),Ze=u&&_e&&Gr(u,_e)>0,Qe=d&&_e&&Gr(_e,d)>0;if(!jt(_e)||g&&ps(_e)||m&&Dt(_e,m)){re(void 0),ne({isInvalid:!jt(_e),isWeekend:g&&ps(_e),isDisabled:m&&Dt(_e,m),isValidDate:!1,isEmpty:!ve.target.value,isBefore:Ze??!1,isAfter:Qe??!1});return}if(Ze||Qe){re(void 0),ne({isValidDate:!1,isBefore:Ze??!1,isAfter:Qe??!1});return}re(_e),ne(),K(y??_e)},onFocus:ve=>{if(ve.target.readOnly)return;const _e=vu(ve.target.value,s,O,"date",w);if(jt(_e)){G(bl(_e,O,"date",h));const Ze=u&&_e&&Gr(u,_e)>0,Qe=d&&_e&&Gr(_e,d)>0;!Ze&&!Qe&&K(_e)}},onBlur:ve=>{const _e=vu(ve.target.value,s,O,"date",w);jt(_e)&&G(bl(_e,O,"date",h))},value:q,setAnchorRef:E},reset:()=>{var ve;re(N),K((ve=N??y)!==null&&ve!==void 0?ve:s),G(W??""),F(l)},selectedDay:L,setSelected:ve=>{var _e;re(ve),K((_e=ve??y)!==null&&_e!==void 0?_e:s),G(ve?bl(ve,O,"date",h):"")}}};function Fn(e,n,t,r){return r?typeof r=="string"?{[`--__${e}c-${n}-${t}-xs`]:r}:Object.fromEntries(Object.entries(r).map(([l,s])=>[`--__${e}c-${n}-${t}-${l}`,s])):{}}const vD={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},hD={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},eg=(e,n,t,r,l,s)=>n.split(" ").map((u,d,m)=>{var g,f;if(e==="margin-inline"&&u==="full")return`calc((100vw - ${100/m.length}%)/-2)`;if(e==="padding-inline"&&u==="full")return`calc((100vw - ${100/m.length}%)/2)`;if(["mi","mb"].includes(e)&&u==="auto")return"auto";let h=`var(--${s}-${t}-${u})`;if(r.includes(u))h=u==="px"?"1px":u;else if(t==="spacing"&&u.startsWith("space"))h=`var(--${s}-${u})`;else if(t==="spacing"){const p=`--${s}-spacing-${u}`;h=`var(${(g=vD[p])!==null&&g!==void 0?g:p})`}else if(t==="radius"){const p=(f=hD[u])!==null&&f!==void 0?f:u;h=`var(--${s}-radius-${p})`}return l?u==="0"?"0":`calc(-1 * ${h})`:h}).join(" ");function tt(e,n,t,r,l,s=!1,u=[]){if(!l)return{};if(typeof l=="string")return{[`--__${e}c-${n}-${t}-xs`]:eg(t,l,r,u,s,e)};const d={};return Object.entries(l).forEach(([m,g])=>{d[`--__${e}c-${n}-${t}-${m}`]=eg(t,g,r,u,s,e)}),d}const Ad=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Rd=({children:e,className:n,padding:t,paddingInline:r,paddingBlock:l,margin:s,marginInline:u,marginBlock:d,width:m,minWidth:g,maxWidth:f,height:h,minHeight:p,maxHeight:y,position:w,inset:S,top:E,right:A,left:O,bottom:N,overflow:F,overflowX:T,overflowY:K,flexBasis:L,flexGrow:V,flexShrink:C,gridColumn:J})=>{const W=Gl(!1),{cn:q}=ke(),G=W?"ax":"a",Z=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},tt(G,"r","p","spacing",t)),tt(G,"r","pi","spacing",r)),tt(G,"r","pb","spacing",l)),tt(G,"r","m","spacing",s)),tt(G,"r","mi","spacing",u)),tt(G,"r","mb","spacing",d)),Fn(G,"r","w",m)),Fn(G,"r","minw",g)),Fn(G,"r","maxw",f)),Fn(G,"r","h",h)),Fn(G,"r","minh",p)),Fn(G,"r","maxh",y)),Fn(G,"r","position",w)),tt(G,"r","inset","spacing",S)),tt(G,"r","top","spacing",E)),tt(G,"r","right","spacing",A)),tt(G,"r","bottom","spacing",N)),tt(G,"r","left","spacing",O)),Fn(G,"r","overflow",F)),Fn(G,"r","overflowx",T)),Fn(G,"r","overflowy",K)),Fn(G,"r","flex-basis",L)),Fn(G,"r","flex-grow",V)),Fn(G,"r","flex-shrink",C)),Fn(G,"r","grid-column",J));return k.createElement(Za,{className:q({className:n,"navds-r-p":t,"navds-r-pi":r,"navds-r-pb":l,"navds-r-m":s,"navds-r-mi":u,"navds-r-mb":d,"navds-r-w":m,"navds-r-minw":g,"navds-r-maxw":f,"navds-r-h":h,"navds-r-minh":p,"navds-r-maxh":y,"navds-r-position":w,"navds-r-inset":S,"navds-r-top":E,"navds-r-right":A,"navds-r-bottom":N,"navds-r-left":O,"navds-r-overflow":F,"navds-r-overflowx":T,"navds-r-overflowy":K,"navds-r-flex-basis":L,"navds-r-flex-grow":V,"navds-r-flex-shrink":C,"navds-r-grid-column":J}),style:Z},e)};var pD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const _D=R.forwardRef((e,n)=>{var{children:t,className:r,as:l="div",background:s,borderColor:u,borderWidth:d,borderRadius:m,shadow:g,style:f,asChild:h}=e,p=pD(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:y}=ke(),w=Object.assign(Object.assign(Object.assign({},f),{"--__axc-box-background":s?`var(--ax-bg-${s})`:void 0,"--__axc-box-shadow":g?`var(--ax-shadow-${g})`:void 0,"--__axc-box-border-color":u?`var(--ax-border-${u})`:void 0,"--__axc-box-border-width":d?d.split(" ").map(E=>`${E}px`).join(" "):void 0}),tt("ax","box","radius","radius",m,!1,["0"])),S=h?Za:l;return k.createElement(Rd,Object.assign({},p),k.createElement(S,Object.assign({},Gn(p,Ad),{ref:n,style:w,className:y("navds-box",r,{"navds-box-bg":s,"navds-box-border-color":u,"navds-box-border-width":d,"navds-box-radius":m,"navds-box-shadow":g})}),t))});var ED=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const yD=R.forwardRef((e,n)=>{var{children:t,className:r,as:l="div",background:s,borderColor:u,borderWidth:d,borderRadius:m,shadow:g,style:f,asChild:h}=e,p=ED(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const y=Gl(!1),{cn:w}=ke(),S=y?"ax":"a",E=Object.assign(Object.assign(Object.assign({},f),{[`--__${S}c-box-background`]:s?`var(--a-${s})`:void 0,[`--__${S}c-box-shadow`]:g?`var(--a-shadow-${g})`:void 0,[`--__${S}c-box-border-color`]:u?`var(--a-${u})`:void 0,[`--__${S}c-box-border-width`]:d?d.split(" ").map(O=>`${O}px`).join(" "):void 0}),tt(S,"box","radius","radius",m,!1,["0"])),A=h?Za:l;return k.createElement(Rd,Object.assign({},p),k.createElement(A,Object.assign({},Gn(p,Ad),{ref:n,style:E,className:w("navds-box",r,{"navds-box-bg":s,"navds-box-border-color":u,"navds-box-border-width":d,"navds-box-border-radius":m,"navds-box-shadow":g})}),t))}),Kl=yD;Kl.New=_D;var bD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const G0=R.forwardRef((e,n)=>{var{children:t,className:r,as:l="div",align:s,justify:u,wrap:d=!0,gap:m,style:g,direction:f="row",asChild:h}=e,p=bD(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const w=Gl(!1)?"ax":"a",{cn:S}=ke(),E=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},g),tt(w,"stack","gap","spacing",m)),Fn(w,"stack","direction",f)),Fn(w,"stack","align",s)),Fn(w,"stack","justify",u)),A=h?Za:l;return k.createElement(Rd,Object.assign({},p),k.createElement(A,Object.assign({},Gn(p,Ad),{ref:n,style:E,className:S("navds-stack",r,{"navds-vstack":f==="column","navds-hstack":f==="row","navds-stack-gap":m,"navds-stack-align":s,"navds-stack-justify":u,"navds-stack-direction":f,"navds-stack-wrap":d})}),t))});var kD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const _t=R.forwardRef((e,n)=>{var{as:t="div"}=e,r=kD(e,["as"]);return k.createElement(G0,Object.assign({as:t},r,{ref:n,direction:"row"}))});var TD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const Ln=R.forwardRef((e,n)=>{var{as:t="div"}=e,r=TD(e,["as"]);return k.createElement(G0,Object.assign({as:t},r,{ref:n,direction:"column",wrap:!1}))});var ND=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const AD=R.forwardRef((e,n)=>{var{children:t,className:r,variant:l,size:s="medium",icon:u,"data-color":d}=e,m=ND(e,["children","className","variant","size","icon","data-color"]);const{cn:g}=ke(),f=l?.endsWith("-filled")&&"strong",h=l?.endsWith("-moderate")&&"moderate";return k.createElement(On,Object.assign({"data-color":d??RD(l),"data-variant":f||h||"outline"},m,{ref:n,as:"span",size:s==="medium"?"medium":"small",className:g("navds-tag",r,`navds-tag--${l}`,`navds-tag--${s}`)}),u&&k.createElement("span",{className:g("navds-tag__icon--left")},u),t)});function RD(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const SD=e=>{const n=tl(e,"fieldset");return Object.assign(Object.assign({},n),{inputProps:{"aria-describedby":Bl(e["aria-describedby"],{[n.inputDescriptionId]:e.description&&!bs(e.description)})||void 0}})};var wD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const OD=R.forwardRef((e,n)=>{var t,r,l;const{inputProps:s,errorId:u,showErrorMsg:d,hasError:m,size:g,readOnly:f,inputDescriptionId:h}=SD(e),{cn:p}=ke(),y=R.useContext(ys),{children:w,className:S,errorPropagation:E=!0,legend:A,description:O,hideLegend:N,nativeReadOnly:F=!0}=e,T=wD(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return k.createElement(ys.Provider,{value:{error:E?(t=e.error)!==null&&t!==void 0?t:y?.error:void 0,errorId:Bl({[u]:d,[(r=y?.errorId)!==null&&r!==void 0?r:""]:!!y?.error}),size:g,disabled:(l=e.disabled)!==null&&l!==void 0?l:!1,readOnly:f}},k.createElement("fieldset",Object.assign({},Gn(T,["errorId","error","size","readOnly"]),s,{ref:n,className:p(S,"navds-fieldset",`navds-fieldset--${g}`,{"navds-fieldset--error":m,"navds-fieldset--readonly":f})}),k.createElement(Ur,{size:g,as:"legend",className:p("navds-fieldset__legend",{"navds-sr-only":!!N})},f&&(F?k.createElement(bd,null):k.createElement(i0,null)),A),!!O&&k.createElement(On,{className:p("navds-fieldset__description",{"navds-sr-only":!!N}),id:h,size:g??"medium",as:"div"},e.description),w,k.createElement("div",{id:u,"aria-relevant":"additions removals","aria-live":"polite",className:p("navds-fieldset__error")},d&&k.createElement(jl,{size:g,showIcon:!0},e.error))))});var DD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const j0=k.createContext(null),PD=R.forwardRef((e,n)=>{var t,r,{children:l,className:s,name:u,defaultValue:d,value:m,onChange:g=()=>{},required:f,readOnly:h}=e,p=DD(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:y}=ke(),w=R.useContext(ys),S=ha();return k.createElement(OD,Object.assign({},p,{readOnly:h,ref:n,className:y(s,"navds-radio-group",`navds-radio-group--${(r=(t=p.size)!==null&&t!==void 0?t:w?.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),k.createElement(j0.Provider,{value:{name:u??`radioGroupName-${S}`,defaultValue:d,value:m,onChange:g,required:f}},k.createElement("div",{className:y("navds-radio-buttons")},l)))});var ID=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const FD=e=>{const n=R.useContext(j0),t=tl(Gn(e,["description"]),"radio"),{inputProps:r,readOnly:l}=t,s=ID(t,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:l,inputProps:Object.assign(Object.assign({},r),{name:n?.name,defaultChecked:n?.defaultValue===void 0?void 0:n?.defaultValue===e.value,checked:n?.value===void 0?void 0:n?.value===e.value,onChange:u=>{var d,m;l||((d=e.onChange)===null||d===void 0||d.call(e,u),(m=n?.onChange)===null||m===void 0||m.call(n,e.value))},onClick:u=>{var d;if(l){u.preventDefault();return}(d=e?.onClick)===null||d===void 0||d.call(e,u)},required:n?.required,type:"radio"})})},za=R.forwardRef((e,n)=>{const{cn:t}=ke(),{inputProps:r,size:l,hasError:s,readOnly:u}=FD(e);return k.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${l}`,{"navds-radio--error":s,"navds-radio--disabled":r.disabled,"navds-radio--readonly":u}),"data-color":s?"danger":e["data-color"]},k.createElement("input",Object.assign({},Gn(e,["children","size","description","readOnly"]),Gn(r,["aria-invalid"]),{className:t("navds-radio__input"),ref:n})),k.createElement("label",{htmlFor:r.id,className:t("navds-radio__label")},k.createElement("span",{className:t("navds-radio__content")},k.createElement(On,{as:"span",size:l},e.children),e.description&&k.createElement(On,{as:"span",size:l,className:t("navds-form-field__subdescription navds-radio__description")},e.description))))}),C0=R.createContext(null);var LD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const U0=R.forwardRef((e,n)=>{var t,{className:r,children:l,disabled:s,onClick:u}=e,d=LD(e,["className","children","disabled","onClick"]);const{cn:m}=ke(),g=sr("Search"),f=R.useContext(C0);if(f===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:h,variant:p,handleClick:y}=f;return k.createElement(yt,Object.assign({type:"submit"},d,{ref:n,size:h,variant:p==="secondary"?"secondary":"primary",className:m("navds-search__button-search",r),disabled:(t=f?.disabled)!==null&&t!==void 0?t:s,onClick:sa(u,y),icon:k.createElement(pv,Object.assign({},l?{"aria-hidden":!0}:{title:g("search")}))}),l)});var MD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const Lu=R.forwardRef((e,n)=>{const{inputProps:t,size:r="medium",inputDescriptionId:l,errorId:s,showErrorMsg:u,hasError:d}=tl(e,"searchfield"),{className:m,hideLabel:g=!0,label:f,description:h,value:p,clearButtonLabel:y,onClear:w,clearButton:S=!0,children:E,variant:A="primary",defaultValue:O,onChange:N,onSearchClick:F,htmlSize:T,"data-color":K}=e,L=MD(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:V}=ke(),C=R.useRef(null),J=Xa(C,n),[W,q]=R.useState(O??""),G=oe=>{p===void 0&&q(oe),N?.(oe)},Z=oe=>{var ee,me;w?.(oe),G(""),(me=(ee=C.current)===null||ee===void 0?void 0:ee.focus)===null||me===void 0||me.call(ee)},re=()=>{F?.(`${p??W}`)},ne=S&&!t.disabled&&(p??W);return k.createElement("div",{onKeyDown:oe=>{var ee;oe.key==="Escape"&&(!((ee=C.current)===null||ee===void 0)&&ee.value&&oe.preventDefault(),Z({trigger:"Escape",event:oe}))},className:V(m,"navds-form-field",`navds-form-field--${r}`,"navds-search",{"navds-search--error":d,"navds-search--disabled":t.disabled,"navds-search--with-size":T}),"data-color":K},k.createElement(Ur,{htmlFor:t.id,size:r,className:V("navds-form-field__label",{"navds-sr-only":g})},f),!!h&&k.createElement(On,{className:V("navds-form-field__description",{"navds-sr-only":g}),id:l,size:r,as:"div"},h),k.createElement("div",{className:V("navds-search__wrapper")},k.createElement("div",{className:V("navds-search__wrapper-inner")},A==="simple"&&k.createElement(pv,{"aria-hidden":!0,className:V("navds-search__search-icon")}),k.createElement("input",Object.assign({ref:J},Gn(L,["error","errorId","size","readOnly"]),t,{value:p??W,onChange:oe=>G(oe.target.value),type:"search",className:V(m,"navds-search__input",`navds-search__input--${A}`,"navds-text-field__input","navds-body-short",`navds-body-short--${r}`)},T?{size:Number(T)}:{})),ne&&k.createElement(xD,{handleClear:Z,size:r,clearButtonLabel:y})),k.createElement(C0.Provider,{value:{size:r,disabled:t.disabled,variant:A,handleClick:re}},E||A!=="simple"&&k.createElement(U0,{"data-color":K}))),k.createElement("div",{className:V("navds-form-field__error"),id:s,"aria-relevant":"additions removals","aria-live":"polite"},u&&k.createElement(jl,{size:r,showIcon:!0},e.error)))});function xD({size:e,clearButtonLabel:n,handleClear:t}){const{cn:r}=ke(),l=Gl(!1),s=sr("Search");return l?k.createElement(yt,{className:r("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:k.createElement(ms,{"aria-hidden":!0}),title:n||s("clear"),onClick:u=>t({trigger:"Click",event:u}),type:"button"}):k.createElement("button",{type:"button",onClick:u=>t({trigger:"Click",event:u}),className:r("navds-search__button-clear")},k.createElement("span",{className:r("navds-sr-only")},n||s("clear")),k.createElement(ms,{"aria-hidden":!0}))}Lu.Button=U0;var KD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const ng=(e,n,t)=>{const{outerHeightStyle:r,overflow:l}=n;return t.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==l)?(t.current+=1,n):e},tg=e=>(e?.ownerDocument||document).defaultView||window;function zi(e){return parseInt(e,10)||0}const VD=R.forwardRef((e,n)=>{var t,r,{className:l,onChange:s,maxRows:u,minRows:d=1,autoScrollbar:m,style:g,value:f}=e,h=KD(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:p}=R.useRef(f!=null),y=R.useRef(null),w=Xa(y,n),S=R.useRef(null),E=R.useRef(0),[A,O]=R.useState({outerHeightStyle:0}),N=k.useCallback(()=>{const L=y.current,C=tg(L).getComputedStyle(L);if(C.width==="0px")return{outerHeightStyle:0};const J=S.current;J.style.width=C.width,J.value=L.value||h.placeholder||"x",J.value.slice(-1)===`
`&&(J.value+=" ");const W=C.boxSizing,q=zi(C.paddingBottom)+zi(C.paddingTop),G=zi(C.borderBottomWidth)+zi(C.borderTopWidth),Z=J.scrollHeight-q;J.value="x";const re=J.scrollHeight-q;let ne=Z;d&&(ne=Math.max(Number(d)*re,ne)),u&&(ne=Math.min(Number(u)*re,ne)),ne=Math.max(ne,re);const oe=ne+(W==="border-box"?q+G:0),ee=Math.abs(ne-Z)<=1;return{outerHeightStyle:oe,overflow:ee}},[u,d,h.placeholder]),F=()=>{const L=N();rg(L)||O(V=>ng(V,L,E))};Ha(()=>{const L=()=>{const q=N();rg(q)||dv.flushSync(()=>{O(G=>ng(G,q,E))})},V=vv(()=>{var q,G,Z;if(E.current=0,!((q=y.current)===null||q===void 0)&&q.style.height||!((G=y.current)===null||G===void 0)&&G.style.width){((Z=y.current)===null||Z===void 0?void 0:Z.style.overflow)==="hidden"&&O(re=>Object.assign(Object.assign({},re),{overflow:!1}));return}L()},166,!0),C=y.current,J=tg(C);J.addEventListener("resize",V);let W;return typeof ResizeObserver<"u"&&(W=new ResizeObserver(V),W.observe(C)),()=>{V.clear(),J.removeEventListener("resize",V),W&&W.disconnect()}},[N]),Ha(()=>{F()}),R.useEffect(()=>{E.current=0},[f]);const T=L=>{E.current=0,p||F(),s&&s(L)},K=Object.assign({"--__ac-textarea-height":A.outerHeightStyle+"px","--__axc-textarea-height":A.outerHeightStyle+"px",overflow:A.overflow&&!m&&!(!((t=y.current)===null||t===void 0)&&t.style.height)&&!(!((r=y.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},g);return k.createElement(k.Fragment,null,k.createElement("textarea",Object.assign({value:f,onChange:T,ref:w,rows:d,style:K},h,{className:l})),k.createElement("textarea",{"aria-hidden":!0,className:l,readOnly:!0,ref:S,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},g)}))});function rg(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const BD=({maxLengthId:e,maxLength:n,currentLength:t,size:r,i18n:l})=>{const{cn:s}=ke(),u=sr("Textarea",{charsLeft:l?.counterLeft?`{chars} ${l.counterLeft}`:void 0,charsTooMany:l?.counterTooMuch?`{chars} ${l.counterTooMuch}`:void 0}),d=n-t,[m,g]=R.useState(d);return R.useEffect(()=>{const f=vv(()=>{g(d)},2e3);return f(),()=>{f.clear()}},[d]),k.createElement(k.Fragment,null,k.createElement("span",{id:e,className:s("navds-sr-only")},u("maxLength",{maxLength:n})),d<20&&k.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},ag(m,u)),k.createElement(On,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:r},ag(d,u)))},ag=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var GD=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};const jD=R.forwardRef((e,n)=>{var t,r,l;const{inputProps:s,errorId:u,showErrorMsg:d,hasError:m,size:g,inputDescriptionId:f}=tl(e,"textarea"),{label:h,className:p,description:y,maxLength:w,hideLabel:S=!1,resize:E,UNSAFE_autoScrollbar:A,i18n:O,readOnly:N}=e,F=GD(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:T}=ke(),K=ha(),L=w!==void 0&&w>0,[V,C]=R.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),J=()=>{let q=F?.minRows?F?.minRows:3;return g==="small"&&(q=F?.minRows?F?.minRows:2),q},W=Bl(s["aria-describedby"],{[K??""]:L});return k.createElement("div",{className:T(p,"navds-form-field",`navds-form-field--${g}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":N,"navds-textarea--readonly":N,"navds-textarea--error":m,"navds-textarea--autoscrollbar":A,[`navds-textarea--resize-${E===!0?"both":E}`]:E})},k.createElement(Ur,{htmlFor:s.id,size:g,className:T("navds-form-field__label",{"navds-sr-only":S})},N&&k.createElement(bd,null),h),!!y&&k.createElement(On,{className:T("navds-form-field__description",{"navds-sr-only":S}),id:f,size:g,as:"div"},y),k.createElement(VD,Object.assign({},Gn(F,["error","errorId","size"]),s,{onChange:sa(e.onChange,e.value===void 0?q=>C(q.target.value):void 0),minRows:J(),autoScrollbar:A,ref:n,readOnly:N,className:T("navds-textarea__input","navds-body-short",`navds-body-short--${g??"medium"}`)},W?{"aria-describedby":W}:{})),L&&!N&&!s.disabled&&k.createElement(BD,{maxLengthId:K,maxLength:w,currentLength:(l=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&l!==void 0?l:V.length,size:g,i18n:O}),k.createElement("div",{className:T("navds-form-field__error"),id:u,"aria-relevant":"additions removals","aria-live":"polite"},d&&k.createElement(jl,{size:g,showIcon:!0},e.error)))});function CD(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lg={exports:{}},kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function UD(){if(ig)return kl;ig=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,l,s){var u=null;if(s!==void 0&&(u=""+s),l.key!==void 0&&(u=""+l.key),"key"in l){s={};for(var d in l)d!=="key"&&(s[d]=l[d])}else s=l;return l=s.ref,{$$typeof:e,type:r,key:u,ref:l!==void 0?l:null,props:s}}return kl.Fragment=n,kl.jsx=t,kl.jsxs=t,kl}var sg;function qD(){return sg||(sg=1,lg.exports=UD()),lg.exports}var qa=qD();const og=({children:e})=>{const n=R.Children.toArray(e);return n.length===0?null:qa.jsx(JA,{variant:"warning",size:"small",children:qa.jsx(Ln,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:n.map(t=>qa.jsx(On,{size:"small",children:t},HD(t)))})})},HD=e=>{if(R.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},zl={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};Ut(zl);var ug={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var dg;function YD(){return dg||(dg=1,function(e){(function(){var n={}.hasOwnProperty;function t(){for(var s="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(s=l(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var u="";for(var d in s)n.call(s,d)&&s[d]&&(u=l(u,this&&this[d]||d));return u}function l(s,u){return u?s?s+" "+u:s+u:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(ug)),ug.exports}var $D=YD();const Sd=CD($D),WD="_borderbox_1a0x6_1",zD="_error_1a0x6_5",JD="_warning_1a0x6_8",XD={borderbox:WD,error:zD,warning:JD};Sd.bind(XD);const ZD="_aksjonspunkt_11wjs_1",QD="_erAksjonspunktApent_11wjs_4",eP="_erIkkeGodkjentAvBeslutter_11wjs_8",nP={aksjonspunkt:ZD,erAksjonspunktApent:QD,erIkkeGodkjentAvBeslutter:eP},tP=Sd.bind(nP),wd=({erAksjonspunktApent:e,erIkkeGodkjentAvBeslutter:n,className:t,children:r})=>qa.jsx("div",{className:tP(t,"aksjonspunkt",{erAksjonspunktApent:e&&!n,erIkkeGodkjentAvBeslutter:n}),children:r});Ut(zl);Ut(zl);const rP="_divider_1jpov_1",aP="_dividerParagraf_1jpov_8",lP="_leftPanel_1jpov_11",iP="_rightPanel_1jpov_14",sP={divider:rP,dividerParagraf:aP,leftPanel:lP,rightPanel:iP};Sd.bind(sP);const q0=()=>qa.jsx("span",{"data-testid":"editedIcon",children:qa.jsx(HT,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});Ut(zl);Ut(zl);var Jl=e=>e.type==="checkbox",ia=e=>e instanceof Date,Hn=e=>e==null;const H0=e=>typeof e=="object";var _n=e=>!Hn(e)&&!Array.isArray(e)&&H0(e)&&!ia(e),Y0=e=>_n(e)&&e.target?Jl(e.target)?e.target.checked:e.target.value:e,oP=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,$0=(e,n)=>e.has(oP(n)),uP=e=>{const n=e.constructor&&e.constructor.prototype;return _n(n)&&n.hasOwnProperty("isPrototypeOf")},Od=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Nn(e){let n;const t=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(!(Od&&(e instanceof Blob||r))&&(t||_n(e)))if(n=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!uP(e))n=e;else for(const l in e)e.hasOwnProperty(l)&&(n[l]=Nn(e[l]));else return e;return n}var js=e=>/^\w*$/.test(e),vn=e=>e===void 0,Dd=e=>Array.isArray(e)?e.filter(Boolean):[],Pd=e=>Dd(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ie=(e,n,t)=>{if(!n||!_n(e))return t;const r=(js(n)?[n]:Pd(n)).reduce((l,s)=>Hn(l)?l:l[s],e);return vn(r)||r===e?vn(e[n])?t:e[n]:r},pt=e=>typeof e=="boolean",Xe=(e,n,t)=>{let r=-1;const l=js(n)?[n]:Pd(n),s=l.length,u=s-1;for(;++r<s;){const d=l[r];let m=t;if(r!==u){const g=e[d];m=_n(g)||Array.isArray(g)?g:isNaN(+l[r+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=m,e=e[d]}};const Ts={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Vt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},br={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Id=k.createContext(null);Id.displayName="HookFormContext";const rl=()=>k.useContext(Id),dP=e=>{const{children:n,...t}=e;return k.createElement(Id.Provider,{value:t},n)};var W0=(e,n,t,r=!0)=>{const l={defaultValues:n._defaultValues};for(const s in e)Object.defineProperty(l,s,{get:()=>{const u=s;return n._proxyFormState[u]!==Vt.all&&(n._proxyFormState[u]=!r||Vt.all),t&&(t[u]=!0),e[u]}});return l};const Fd=typeof window<"u"?k.useLayoutEffect:k.useEffect;function cP(e){const n=rl(),{control:t=n.control,disabled:r,name:l,exact:s}=e||{},[u,d]=k.useState(t._formState),m=k.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Fd(()=>t._subscribe({name:l,formState:m.current,exact:s,callback:g=>{!r&&d({...t._formState,...g})}}),[l,r,s]),k.useEffect(()=>{m.current.isValid&&t._setValid(!0)},[t]),k.useMemo(()=>W0(u,t,m.current,!1),[u,t])}var tr=e=>typeof e=="string",z0=(e,n,t,r,l)=>tr(e)?(r&&n.watch.add(e),ie(t,e,l)):Array.isArray(e)?e.map(s=>(r&&n.watch.add(s),ie(t,s))):(r&&(n.watchAll=!0),t),Mu=e=>Hn(e)||!H0(e);function kr(e,n,t=new WeakSet){if(Mu(e)||Mu(n))return e===n;if(ia(e)&&ia(n))return e.getTime()===n.getTime();const r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;if(t.has(e)||t.has(n))return!0;t.add(e),t.add(n);for(const s of r){const u=e[s];if(!l.includes(s))return!1;if(s!=="ref"){const d=n[s];if(ia(u)&&ia(d)||_n(u)&&_n(d)||Array.isArray(u)&&Array.isArray(d)?!kr(u,d,t):u!==d)return!1}}return!0}function mP(e){const n=rl(),{control:t=n.control,name:r,defaultValue:l,disabled:s,exact:u,compute:d}=e||{},m=k.useRef(l),g=k.useRef(d),f=k.useRef(void 0);g.current=d;const h=k.useMemo(()=>t._getWatch(r,m.current),[t,r]),[p,y]=k.useState(g.current?g.current(h):h);return Fd(()=>t._subscribe({name:r,formState:{values:!0},exact:u,callback:w=>{if(!s){const S=z0(r,t._names,w.values||t._formValues,!1,m.current);if(g.current){const E=g.current(S);kr(E,f.current)||(y(E),f.current=E)}else y(S)}}}),[t,s,r,u]),k.useEffect(()=>t._removeUnmounted()),p}function Ld(e){const n=rl(),{name:t,disabled:r,control:l=n.control,shouldUnregister:s,defaultValue:u}=e,d=$0(l._names.array,t),m=k.useMemo(()=>ie(l._formValues,t,ie(l._defaultValues,t,u)),[l,t,u]),g=mP({control:l,name:t,defaultValue:m,exact:!0}),f=cP({control:l,name:t,exact:!0}),h=k.useRef(e),p=k.useRef(l.register(t,{...e.rules,value:g,...pt(e.disabled)?{disabled:e.disabled}:{}}));h.current=e;const y=k.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!ie(f.errors,t)},isDirty:{enumerable:!0,get:()=>!!ie(f.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!ie(f.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!ie(f.validatingFields,t)},error:{enumerable:!0,get:()=>ie(f.errors,t)}}),[f,t]),w=k.useCallback(O=>p.current.onChange({target:{value:Y0(O),name:t},type:Ts.CHANGE}),[t]),S=k.useCallback(()=>p.current.onBlur({target:{value:ie(l._formValues,t),name:t},type:Ts.BLUR}),[t,l._formValues]),E=k.useCallback(O=>{const N=ie(l._fields,t);N&&O&&(N._f.ref={focus:()=>O.focus&&O.focus(),select:()=>O.select&&O.select(),setCustomValidity:F=>O.setCustomValidity(F),reportValidity:()=>O.reportValidity()})},[l._fields,t]),A=k.useMemo(()=>({name:t,value:g,...pt(r)||f.disabled?{disabled:f.disabled||r}:{},onChange:w,onBlur:S,ref:E}),[t,r,f.disabled,w,S,E,g]);return k.useEffect(()=>{const O=l._options.shouldUnregister||s;l.register(t,{...h.current.rules,...pt(h.current.disabled)?{disabled:h.current.disabled}:{}});const N=(F,T)=>{const K=ie(l._fields,F);K&&K._f&&(K._f.mount=T)};if(N(t,!0),O){const F=Nn(ie(l._options.defaultValues,t));Xe(l._defaultValues,t,F),vn(ie(l._formValues,t))&&Xe(l._formValues,t,F)}return!d&&l.register(t),()=>{(d?O&&!l._state.action:O)?l.unregister(t):N(t,!1)}},[t,l,d,s]),k.useEffect(()=>{l._setDisabledField({disabled:r,name:t})},[r,t,l]),k.useMemo(()=>({field:A,formState:f,fieldState:y}),[A,f,y])}var fP=(e,n,t,r,l)=>n?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:l||!0}}:{},Fl=e=>Array.isArray(e)?e:[e],cg=()=>{let e=[];return{get observers(){return e},next:l=>{for(const s of e)s.next&&s.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(s=>s!==l)}}),unsubscribe:()=>{e=[]}}},rt=e=>_n(e)&&!Object.keys(e).length,Md=e=>e.type==="file",Bt=e=>typeof e=="function",Ns=e=>{if(!Od)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},J0=e=>e.type==="select-multiple",xd=e=>e.type==="radio",gP=e=>xd(e)||Jl(e),pu=e=>Ns(e)&&e.isConnected;function vP(e,n){const t=n.slice(0,-1).length;let r=0;for(;r<t;)e=vn(e)?r++:e[n[r++]];return e}function hP(e){for(const n in e)if(e.hasOwnProperty(n)&&!vn(e[n]))return!1;return!0}function bn(e,n){const t=Array.isArray(n)?n:js(n)?[n]:Pd(n),r=t.length===1?e:vP(e,t),l=t.length-1,s=t[l];return r&&delete r[s],l!==0&&(_n(r)&&rt(r)||Array.isArray(r)&&hP(r))&&bn(e,t.slice(0,-1)),e}var X0=e=>{for(const n in e)if(Bt(e[n]))return!0;return!1};function As(e,n={}){const t=Array.isArray(e);if(_n(e)||t)for(const r in e)Array.isArray(e[r])||_n(e[r])&&!X0(e[r])?(n[r]=Array.isArray(e[r])?[]:{},As(e[r],n[r])):Hn(e[r])||(n[r]=!0);return n}function Z0(e,n,t){const r=Array.isArray(e);if(_n(e)||r)for(const l in e)Array.isArray(e[l])||_n(e[l])&&!X0(e[l])?vn(n)||Mu(t[l])?t[l]=Array.isArray(e[l])?As(e[l],[]):{...As(e[l])}:Z0(e[l],Hn(n)?{}:n[l],t[l]):t[l]=!kr(e[l],n[l]);return t}var Tl=(e,n)=>Z0(e,n,As(n));const mg={value:!1,isValid:!1},fg={value:!0,isValid:!0};var Q0=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!vn(e[0].attributes.value)?vn(e[0].value)||e[0].value===""?fg:{value:e[0].value,isValid:!0}:fg:mg}return mg},eh=(e,{valueAsNumber:n,valueAsDate:t,setValueAs:r})=>vn(e)?e:n?e===""?NaN:e&&+e:t&&tr(e)?new Date(e):r?r(e):e;const gg={isValid:!1,value:null};var nh=e=>Array.isArray(e)?e.reduce((n,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:n,gg):gg;function vg(e){const n=e.ref;return Md(n)?n.files:xd(n)?nh(e.refs).value:J0(n)?[...n.selectedOptions].map(({value:t})=>t):Jl(n)?Q0(e.refs).value:eh(vn(n.value)?e.ref.value:n.value,e)}var pP=(e,n,t,r)=>{const l={};for(const s of e){const u=ie(n,s);u&&Xe(l,s,u._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:r}},Rs=e=>e instanceof RegExp,Nl=e=>vn(e)?e:Rs(e)?e.source:_n(e)?Rs(e.value)?e.value.source:e.value:e,hg=e=>({isOnSubmit:!e||e===Vt.onSubmit,isOnBlur:e===Vt.onBlur,isOnChange:e===Vt.onChange,isOnAll:e===Vt.all,isOnTouch:e===Vt.onTouched});const pg="AsyncFunction";var _P=e=>!!e&&!!e.validate&&!!(Bt(e.validate)&&e.validate.constructor.name===pg||_n(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===pg)),EP=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),_g=(e,n,t)=>!t&&(n.watchAll||n.watch.has(e)||[...n.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Ll=(e,n,t,r)=>{for(const l of t||Object.keys(e)){const s=ie(e,l);if(s){const{_f:u,...d}=s;if(u){if(u.refs&&u.refs[0]&&n(u.refs[0],l)&&!r)return!0;if(u.ref&&n(u.ref,u.name)&&!r)return!0;if(Ll(d,n))break}else if(_n(d)&&Ll(d,n))break}}};function Eg(e,n,t){const r=ie(e,t);if(r||js(t))return{error:r,name:t};const l=t.split(".");for(;l.length;){const s=l.join("."),u=ie(n,s),d=ie(e,s);if(u&&!Array.isArray(u)&&t!==s)return{name:t};if(d&&d.type)return{name:s,error:d};if(d&&d.root&&d.root.type)return{name:`${s}.root`,error:d.root};l.pop()}return{name:t}}var yP=(e,n,t,r)=>{t(e);const{name:l,...s}=e;return rt(s)||Object.keys(s).length>=Object.keys(n).length||Object.keys(s).find(u=>n[u]===(!r||Vt.all))},bP=(e,n,t)=>!e||!n||e===n||Fl(e).some(r=>r&&(t?r===n:r.startsWith(n)||n.startsWith(r))),kP=(e,n,t,r,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(n||e):(t?r.isOnBlur:l.isOnBlur)?!e:(t?r.isOnChange:l.isOnChange)?e:!0,TP=(e,n)=>!Dd(ie(e,n)).length&&bn(e,n),NP=(e,n,t)=>{const r=Fl(ie(e,t));return Xe(r,"root",n[t]),Xe(e,t,r),e},us=e=>tr(e);function yg(e,n,t="validate"){if(us(e)||Array.isArray(e)&&e.every(us)||pt(e)&&!e)return{type:t,message:us(e)?e:"",ref:n}}var Ba=e=>_n(e)&&!Rs(e)?e:{value:e,message:""},bg=async(e,n,t,r,l,s)=>{const{ref:u,refs:d,required:m,maxLength:g,minLength:f,min:h,max:p,pattern:y,validate:w,name:S,valueAsNumber:E,mount:A}=e._f,O=ie(t,S);if(!A||n.has(S))return{};const N=d?d[0]:u,F=q=>{l&&N.reportValidity&&(N.setCustomValidity(pt(q)?"":q||""),N.reportValidity())},T={},K=xd(u),L=Jl(u),V=K||L,C=(E||Md(u))&&vn(u.value)&&vn(O)||Ns(u)&&u.value===""||O===""||Array.isArray(O)&&!O.length,J=fP.bind(null,S,r,T),W=(q,G,Z,re=br.maxLength,ne=br.minLength)=>{const oe=q?G:Z;T[S]={type:q?re:ne,message:oe,ref:u,...J(q?re:ne,oe)}};if(s?!Array.isArray(O)||!O.length:m&&(!V&&(C||Hn(O))||pt(O)&&!O||L&&!Q0(d).isValid||K&&!nh(d).isValid)){const{value:q,message:G}=us(m)?{value:!!m,message:m}:Ba(m);if(q&&(T[S]={type:br.required,message:G,ref:N,...J(br.required,G)},!r))return F(G),T}if(!C&&(!Hn(h)||!Hn(p))){let q,G;const Z=Ba(p),re=Ba(h);if(!Hn(O)&&!isNaN(O)){const ne=u.valueAsNumber||O&&+O;Hn(Z.value)||(q=ne>Z.value),Hn(re.value)||(G=ne<re.value)}else{const ne=u.valueAsDate||new Date(O),oe=Ne=>new Date(new Date().toDateString()+" "+Ne),ee=u.type=="time",me=u.type=="week";tr(Z.value)&&O&&(q=ee?oe(O)>oe(Z.value):me?O>Z.value:ne>new Date(Z.value)),tr(re.value)&&O&&(G=ee?oe(O)<oe(re.value):me?O<re.value:ne<new Date(re.value))}if((q||G)&&(W(!!q,Z.message,re.message,br.max,br.min),!r))return F(T[S].message),T}if((g||f)&&!C&&(tr(O)||s&&Array.isArray(O))){const q=Ba(g),G=Ba(f),Z=!Hn(q.value)&&O.length>+q.value,re=!Hn(G.value)&&O.length<+G.value;if((Z||re)&&(W(Z,q.message,G.message),!r))return F(T[S].message),T}if(y&&!C&&tr(O)){const{value:q,message:G}=Ba(y);if(Rs(q)&&!O.match(q)&&(T[S]={type:br.pattern,message:G,ref:u,...J(br.pattern,G)},!r))return F(G),T}if(w){if(Bt(w)){const q=await w(O,t),G=yg(q,N);if(G&&(T[S]={...G,...J(br.validate,G.message)},!r))return F(G.message),T}else if(_n(w)){let q={};for(const G in w){if(!rt(q)&&!r)break;const Z=yg(await w[G](O,t),N,G);Z&&(q={...Z,...J(G,Z.message)},F(Z.message),r&&(T[S]=q))}if(!rt(q)&&(T[S]={ref:N,...q},!r))return T}}return F(!0),T};const AP={mode:Vt.onSubmit,reValidateMode:Vt.onChange,shouldFocusError:!0};function RP(e={}){let n={...AP,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:Bt(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},r={},l=_n(n.defaultValues)||_n(n.values)?Nn(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Nn(l),u={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},m,g=0;const f={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let h={...f};const p={array:cg(),state:cg()},y=n.criteriaMode===Vt.all,w=P=>B=>{clearTimeout(g),g=setTimeout(P,B)},S=async P=>{if(!n.disabled&&(f.isValid||h.isValid||P)){const B=n.resolver?rt((await L()).errors):await C(r,!0);B!==t.isValid&&p.state.next({isValid:B})}},E=(P,B)=>{!n.disabled&&(f.isValidating||f.validatingFields||h.isValidating||h.validatingFields)&&((P||Array.from(d.mount)).forEach(H=>{H&&(B?Xe(t.validatingFields,H,B):bn(t.validatingFields,H))}),p.state.next({validatingFields:t.validatingFields,isValidating:!rt(t.validatingFields)}))},A=(P,B=[],H,ae,te=!0,Q=!0)=>{if(ae&&H&&!n.disabled){if(u.action=!0,Q&&Array.isArray(ie(r,P))){const ce=H(ie(r,P),ae.argA,ae.argB);te&&Xe(r,P,ce)}if(Q&&Array.isArray(ie(t.errors,P))){const ce=H(ie(t.errors,P),ae.argA,ae.argB);te&&Xe(t.errors,P,ce),TP(t.errors,P)}if((f.touchedFields||h.touchedFields)&&Q&&Array.isArray(ie(t.touchedFields,P))){const ce=H(ie(t.touchedFields,P),ae.argA,ae.argB);te&&Xe(t.touchedFields,P,ce)}(f.dirtyFields||h.dirtyFields)&&(t.dirtyFields=Tl(l,s)),p.state.next({name:P,isDirty:W(P,B),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else Xe(s,P,B)},O=(P,B)=>{Xe(t.errors,P,B),p.state.next({errors:t.errors})},N=P=>{t.errors=P,p.state.next({errors:t.errors,isValid:!1})},F=(P,B,H,ae)=>{const te=ie(r,P);if(te){const Q=ie(s,P,vn(H)?ie(l,P):H);vn(Q)||ae&&ae.defaultChecked||B?Xe(s,P,B?Q:vg(te._f)):Z(P,Q),u.mount&&S()}},T=(P,B,H,ae,te)=>{let Q=!1,ce=!1;const we={name:P};if(!n.disabled){if(!H||ae){(f.isDirty||h.isDirty)&&(ce=t.isDirty,t.isDirty=we.isDirty=W(),Q=ce!==we.isDirty);const Ie=kr(ie(l,P),B);ce=!!ie(t.dirtyFields,P),Ie?bn(t.dirtyFields,P):Xe(t.dirtyFields,P,!0),we.dirtyFields=t.dirtyFields,Q=Q||(f.dirtyFields||h.dirtyFields)&&ce!==!Ie}if(H){const Ie=ie(t.touchedFields,P);Ie||(Xe(t.touchedFields,P,H),we.touchedFields=t.touchedFields,Q=Q||(f.touchedFields||h.touchedFields)&&Ie!==H)}Q&&te&&p.state.next(we)}return Q?we:{}},K=(P,B,H,ae)=>{const te=ie(t.errors,P),Q=(f.isValid||h.isValid)&&pt(B)&&t.isValid!==B;if(n.delayError&&H?(m=w(()=>O(P,H)),m(n.delayError)):(clearTimeout(g),m=null,H?Xe(t.errors,P,H):bn(t.errors,P)),(H?!kr(te,H):te)||!rt(ae)||Q){const ce={...ae,...Q&&pt(B)?{isValid:B}:{},errors:t.errors,name:P};t={...t,...ce},p.state.next(ce)}},L=async P=>{E(P,!0);const B=await n.resolver(s,n.context,pP(P||d.mount,r,n.criteriaMode,n.shouldUseNativeValidation));return E(P),B},V=async P=>{const{errors:B}=await L(P);if(P)for(const H of P){const ae=ie(B,H);ae?Xe(t.errors,H,ae):bn(t.errors,H)}else t.errors=B;return B},C=async(P,B,H={valid:!0})=>{for(const ae in P){const te=P[ae];if(te){const{_f:Q,...ce}=te;if(Q){const we=d.array.has(Q.name),Ie=te._f&&_P(te._f);Ie&&f.validatingFields&&E([ae],!0);const An=await bg(te,d.disabled,s,y,n.shouldUseNativeValidation&&!B,we);if(Ie&&f.validatingFields&&E([ae]),An[Q.name]&&(H.valid=!1,B))break;!B&&(ie(An,Q.name)?we?NP(t.errors,An,Q.name):Xe(t.errors,Q.name,An[Q.name]):bn(t.errors,Q.name))}!rt(ce)&&await C(ce,B,H)}}return H.valid},J=()=>{for(const P of d.unMount){const B=ie(r,P);B&&(B._f.refs?B._f.refs.every(H=>!pu(H)):!pu(B._f.ref))&&Ze(P)}d.unMount=new Set},W=(P,B)=>!n.disabled&&(P&&B&&Xe(s,P,B),!kr(Ne(),l)),q=(P,B,H)=>z0(P,d,{...u.mount?s:vn(B)?l:tr(P)?{[P]:B}:B},H,B),G=P=>Dd(ie(u.mount?s:l,P,n.shouldUnregister?ie(l,P,[]):[])),Z=(P,B,H={})=>{const ae=ie(r,P);let te=B;if(ae){const Q=ae._f;Q&&(!Q.disabled&&Xe(s,P,eh(B,Q)),te=Ns(Q.ref)&&Hn(B)?"":B,J0(Q.ref)?[...Q.ref.options].forEach(ce=>ce.selected=te.includes(ce.value)):Q.refs?Jl(Q.ref)?Q.refs.forEach(ce=>{(!ce.defaultChecked||!ce.disabled)&&(Array.isArray(te)?ce.checked=!!te.find(we=>we===ce.value):ce.checked=te===ce.value||!!te)}):Q.refs.forEach(ce=>ce.checked=ce.value===te):Md(Q.ref)?Q.ref.value="":(Q.ref.value=te,Q.ref.type||p.state.next({name:P,values:Nn(s)})))}(H.shouldDirty||H.shouldTouch)&&T(P,te,H.shouldTouch,H.shouldDirty,!0),H.shouldValidate&&me(P)},re=(P,B,H)=>{for(const ae in B){if(!B.hasOwnProperty(ae))return;const te=B[ae],Q=P+"."+ae,ce=ie(r,Q);(d.array.has(P)||_n(te)||ce&&!ce._f)&&!ia(te)?re(Q,te,H):Z(Q,te,H)}},ne=(P,B,H={})=>{const ae=ie(r,P),te=d.array.has(P),Q=Nn(B);Xe(s,P,Q),te?(p.array.next({name:P,values:Nn(s)}),(f.isDirty||f.dirtyFields||h.isDirty||h.dirtyFields)&&H.shouldDirty&&p.state.next({name:P,dirtyFields:Tl(l,s),isDirty:W(P,Q)})):ae&&!ae._f&&!Hn(Q)?re(P,Q,H):Z(P,Q,H),_g(P,d)&&p.state.next({...t,name:P}),p.state.next({name:u.mount?P:void 0,values:Nn(s)})},oe=async P=>{u.mount=!0;const B=P.target;let H=B.name,ae=!0;const te=ie(r,H),Q=Ie=>{ae=Number.isNaN(Ie)||ia(Ie)&&isNaN(Ie.getTime())||kr(Ie,ie(s,H,Ie))},ce=hg(n.mode),we=hg(n.reValidateMode);if(te){let Ie,An;const Ht=B.type?vg(te._f):Y0(P),Jn=P.type===Ts.BLUR||P.type===Ts.FOCUS_OUT,Hr=!EP(te._f)&&!n.resolver&&!ie(t.errors,H)&&!te._f.deps||kP(Jn,ie(t.touchedFields,H),t.isSubmitted,we,ce),ur=_g(H,d,Jn);Xe(s,H,Ht),Jn?(!B||!B.readOnly)&&(te._f.onBlur&&te._f.onBlur(P),m&&m(0)):te._f.onChange&&te._f.onChange(P);const dr=T(H,Ht,Jn),Yr=!rt(dr)||ur;if(!Jn&&p.state.next({name:H,type:P.type,values:Nn(s)}),Hr)return(f.isValid||h.isValid)&&(n.mode==="onBlur"?Jn&&S():Jn||S()),Yr&&p.state.next({name:H,...ur?{}:dr});if(!Jn&&ur&&p.state.next({...t}),n.resolver){const{errors:cr}=await L([H]);if(Q(Ht),ae){const $r=Eg(t.errors,r,H),Te=Eg(cr,r,$r.name||H);Ie=Te.error,H=Te.name,An=rt(cr)}}else E([H],!0),Ie=(await bg(te,d.disabled,s,y,n.shouldUseNativeValidation))[H],E([H]),Q(Ht),ae&&(Ie?An=!1:(f.isValid||h.isValid)&&(An=await C(r,!0)));ae&&(te._f.deps&&me(te._f.deps),K(H,An,Ie,dr))}},ee=(P,B)=>{if(ie(t.errors,B)&&P.focus)return P.focus(),1},me=async(P,B={})=>{let H,ae;const te=Fl(P);if(n.resolver){const Q=await V(vn(P)?P:te);H=rt(Q),ae=P?!te.some(ce=>ie(Q,ce)):H}else P?(ae=(await Promise.all(te.map(async Q=>{const ce=ie(r,Q);return await C(ce&&ce._f?{[Q]:ce}:ce)}))).every(Boolean),!(!ae&&!t.isValid)&&S()):ae=H=await C(r);return p.state.next({...!tr(P)||(f.isValid||h.isValid)&&H!==t.isValid?{}:{name:P},...n.resolver||!P?{isValid:H}:{},errors:t.errors}),B.shouldFocus&&!ae&&Ll(r,ee,P?te:d.mount),ae},Ne=P=>{const B={...u.mount?s:l};return vn(P)?B:tr(P)?ie(B,P):P.map(H=>ie(B,H))},Ee=(P,B)=>({invalid:!!ie((B||t).errors,P),isDirty:!!ie((B||t).dirtyFields,P),error:ie((B||t).errors,P),isValidating:!!ie(t.validatingFields,P),isTouched:!!ie((B||t).touchedFields,P)}),rn=P=>{P&&Fl(P).forEach(B=>bn(t.errors,B)),p.state.next({errors:P?t.errors:{}})},on=(P,B,H)=>{const ae=(ie(r,P,{_f:{}})._f||{}).ref,te=ie(t.errors,P)||{},{ref:Q,message:ce,type:we,...Ie}=te;Xe(t.errors,P,{...Ie,...B,ref:ae}),p.state.next({name:P,errors:t.errors,isValid:!1}),H&&H.shouldFocus&&ae&&ae.focus&&ae.focus()},it=(P,B)=>Bt(P)?p.state.subscribe({next:H=>"values"in H&&P(q(void 0,B),H)}):q(P,B,!0),ve=P=>p.state.subscribe({next:B=>{bP(P.name,B.name,P.exact)&&yP(B,P.formState||f,mn,P.reRenderRoot)&&P.callback({values:{...s},...t,...B,defaultValues:l})}}).unsubscribe,_e=P=>(u.mount=!0,h={...h,...P.formState},ve({...P,formState:h})),Ze=(P,B={})=>{for(const H of P?Fl(P):d.mount)d.mount.delete(H),d.array.delete(H),B.keepValue||(bn(r,H),bn(s,H)),!B.keepError&&bn(t.errors,H),!B.keepDirty&&bn(t.dirtyFields,H),!B.keepTouched&&bn(t.touchedFields,H),!B.keepIsValidating&&bn(t.validatingFields,H),!n.shouldUnregister&&!B.keepDefaultValue&&bn(l,H);p.state.next({values:Nn(s)}),p.state.next({...t,...B.keepDirty?{isDirty:W()}:{}}),!B.keepIsValid&&S()},Qe=({disabled:P,name:B})=>{(pt(P)&&u.mount||P||d.disabled.has(B))&&(P?d.disabled.add(B):d.disabled.delete(B))},En=(P,B={})=>{let H=ie(r,P);const ae=pt(B.disabled)||pt(n.disabled);return Xe(r,P,{...H||{},_f:{...H&&H._f?H._f:{ref:{name:P}},name:P,mount:!0,...B}}),d.mount.add(P),H?Qe({disabled:pt(B.disabled)?B.disabled:n.disabled,name:P}):F(P,!0,B.value),{...ae?{disabled:B.disabled||n.disabled}:{},...n.progressive?{required:!!B.required,min:Nl(B.min),max:Nl(B.max),minLength:Nl(B.minLength),maxLength:Nl(B.maxLength),pattern:Nl(B.pattern)}:{},name:P,onChange:oe,onBlur:oe,ref:te=>{if(te){En(P,B),H=ie(r,P);const Q=vn(te.value)&&te.querySelectorAll&&te.querySelectorAll("input,select,textarea")[0]||te,ce=gP(Q),we=H._f.refs||[];if(ce?we.find(Ie=>Ie===Q):Q===H._f.ref)return;Xe(r,P,{_f:{...H._f,...ce?{refs:[...we.filter(pu),Q,...Array.isArray(ie(l,P))?[{}]:[]],ref:{type:Q.type,name:P}}:{ref:Q}}}),F(P,!1,void 0,Q)}else H=ie(r,P,{}),H._f&&(H._f.mount=!1),(n.shouldUnregister||B.shouldUnregister)&&!($0(d.array,P)&&u.action)&&d.unMount.add(P)}}},st=()=>n.shouldFocusError&&Ll(r,ee,d.mount),Mn=P=>{pt(P)&&(p.state.next({disabled:P}),Ll(r,(B,H)=>{const ae=ie(r,H);ae&&(B.disabled=ae._f.disabled||P,Array.isArray(ae._f.refs)&&ae._f.refs.forEach(te=>{te.disabled=ae._f.disabled||P}))},0,!1))},Dn=(P,B)=>async H=>{let ae;H&&(H.preventDefault&&H.preventDefault(),H.persist&&H.persist());let te=Nn(s);if(p.state.next({isSubmitting:!0}),n.resolver){const{errors:Q,values:ce}=await L();t.errors=Q,te=Nn(ce)}else await C(r);if(d.disabled.size)for(const Q of d.disabled)bn(te,Q);if(bn(t.errors,"root"),rt(t.errors)){p.state.next({errors:{}});try{await P(te,H)}catch(Q){ae=Q}}else B&&await B({...t.errors},H),st(),setTimeout(st);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:rt(t.errors)&&!ae,submitCount:t.submitCount+1,errors:t.errors}),ae)throw ae},Wn=(P,B={})=>{ie(r,P)&&(vn(B.defaultValue)?ne(P,Nn(ie(l,P))):(ne(P,B.defaultValue),Xe(l,P,Nn(B.defaultValue))),B.keepTouched||bn(t.touchedFields,P),B.keepDirty||(bn(t.dirtyFields,P),t.isDirty=B.defaultValue?W(P,Nn(ie(l,P))):W()),B.keepError||(bn(t.errors,P),f.isValid&&S()),p.state.next({...t}))},$e=(P,B={})=>{const H=P?Nn(P):l,ae=Nn(H),te=rt(P),Q=te?l:ae;if(B.keepDefaultValues||(l=H),!B.keepValues){if(B.keepDirtyValues){const ce=new Set([...d.mount,...Object.keys(Tl(l,s))]);for(const we of Array.from(ce))ie(t.dirtyFields,we)?Xe(Q,we,ie(s,we)):ne(we,ie(Q,we))}else{if(Od&&vn(P))for(const ce of d.mount){const we=ie(r,ce);if(we&&we._f){const Ie=Array.isArray(we._f.refs)?we._f.refs[0]:we._f.ref;if(Ns(Ie)){const An=Ie.closest("form");if(An){An.reset();break}}}}if(B.keepFieldsRef)for(const ce of d.mount)ne(ce,ie(Q,ce));else r={}}s=n.shouldUnregister?B.keepDefaultValues?Nn(l):{}:Nn(Q),p.array.next({values:{...Q}}),p.state.next({values:{...Q}})}d={mount:B.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!f.isValid||!!B.keepIsValid||!!B.keepDirtyValues,u.watch=!!n.shouldUnregister,p.state.next({submitCount:B.keepSubmitCount?t.submitCount:0,isDirty:te?!1:B.keepDirty?t.isDirty:!!(B.keepDefaultValues&&!kr(P,l)),isSubmitted:B.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:te?{}:B.keepDirtyValues?B.keepDefaultValues&&s?Tl(l,s):t.dirtyFields:B.keepDefaultValues&&P?Tl(l,P):B.keepDirty?t.dirtyFields:{},touchedFields:B.keepTouched?t.touchedFields:{},errors:B.keepErrors?t.errors:{},isSubmitSuccessful:B.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:l})},yn=(P,B)=>$e(Bt(P)?P(s):P,B),ot=(P,B={})=>{const H=ie(r,P),ae=H&&H._f;if(ae){const te=ae.refs?ae.refs[0]:ae.ref;te.focus&&(te.focus(),B.shouldSelect&&Bt(te.select)&&te.select())}},mn=P=>{t={...t,...P}},zn={control:{register:En,unregister:Ze,getFieldState:Ee,handleSubmit:Dn,setError:on,_subscribe:ve,_runSchema:L,_focusError:st,_getWatch:q,_getDirty:W,_setValid:S,_setFieldArray:A,_setDisabledField:Qe,_setErrors:N,_getFieldArray:G,_reset:$e,_resetDefaultValues:()=>Bt(n.defaultValues)&&n.defaultValues().then(P=>{yn(P,n.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:J,_disableForm:Mn,_subjects:p,_proxyFormState:f,get _fields(){return r},get _formValues(){return s},get _state(){return u},set _state(P){u=P},get _defaultValues(){return l},get _names(){return d},set _names(P){d=P},get _formState(){return t},get _options(){return n},set _options(P){n={...n,...P}}},subscribe:_e,trigger:me,register:En,handleSubmit:Dn,watch:it,setValue:ne,getValues:Ne,reset:yn,resetField:Wn,clearErrors:rn,unregister:Ze,setError:on,setFocus:ot,getFieldState:Ee};return{...zn,formControl:zn}}function Cs(e={}){const n=k.useRef(void 0),t=k.useRef(void 0),[r,l]=k.useState({isDirty:!1,isValidating:!1,isLoading:Bt(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Bt(e.defaultValues)?void 0:e.defaultValues});if(!n.current)if(e.formControl)n.current={...e.formControl,formState:r},e.defaultValues&&!Bt(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:u,...d}=RP(e);n.current={...d,formState:r}}const s=n.current.control;return s._options=e,Fd(()=>{const u=s._subscribe({formState:s._proxyFormState,callback:()=>l({...s._formState}),reRenderRoot:!0});return l(d=>({...d,isReady:!0})),s._formState.isReady=!0,u},[s]),k.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),k.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode)},[s,e.mode,e.reValidateMode]),k.useEffect(()=>{e.errors&&(s._setErrors(e.errors),s._focusError())},[s,e.errors]),k.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),k.useEffect(()=>{if(s._proxyFormState.isDirty){const u=s._getDirty();u!==r.isDirty&&s._subjects.state.next({isDirty:u})}},[s,r.isDirty]),k.useEffect(()=>{e.values&&!kr(e.values,t.current)?(s._reset(e.values,{keepFieldsRef:!0,...s._options.resetOptions}),t.current=e.values,l(u=>({...u}))):s._resetDefaultValues()},[s,e.values]),k.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),n.current.formState=W0(r,s),n.current}function SP(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kg={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function wP(){if(Tg)return Al;Tg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,l,s){var u=null;if(s!==void 0&&(u=""+s),l.key!==void 0&&(u=""+l.key),"key"in l){s={};for(var d in l)d!=="key"&&(s[d]=l[d])}else s=l;return l=s.ref,{$$typeof:e,type:r,key:u,ref:l!==void 0?l:null,props:s}}return Al.Fragment=n,Al.jsx=t,Al.jsxs=t,Al}var Ng;function OP(){return Ng||(Ng=1,kg.exports=wP()),kg.exports}var wn=OP();const Kd=e=>e.reduce((n,t,r)=>({...n,[r]:l=>t(l)||!0}),{}),Vd=(e,n)=>n.split(".").reduce((t,r)=>t!==void 0?t[r]:t,e)?.message;var xu={exports:{}},DP=xu.exports,Ag;function PP(){return Ag||(Ag=1,function(e,n){(function(t,r){e.exports=r()})(DP,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d/,s=/\d\d/,u=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,m={},g=function(E){return(E=+E)+(E>68?1900:2e3)},f=function(E){return function(A){this[E]=+A}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var O=A.match(/([+-]|\d\d)/g),N=60*O[1]+(+O[2]||0);return N===0?0:O[0]==="+"?-N:N}(E)}],p=function(E){var A=m[E];return A&&(A.indexOf?A:A.s.concat(A.f))},y=function(E,A){var O,N=m.meridiem;if(N){for(var F=1;F<=24;F+=1)if(E.indexOf(N(F,0,A))>-1){O=F>12;break}}else O=E===(A?"pm":"PM");return O},w={A:[d,function(E){this.afternoon=y(E,!1)}],a:[d,function(E){this.afternoon=y(E,!0)}],Q:[l,function(E){this.month=3*(E-1)+1}],S:[l,function(E){this.milliseconds=100*+E}],SS:[s,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[u,f("seconds")],ss:[u,f("seconds")],m:[u,f("minutes")],mm:[u,f("minutes")],H:[u,f("hours")],h:[u,f("hours")],HH:[u,f("hours")],hh:[u,f("hours")],D:[u,f("day")],DD:[s,f("day")],Do:[d,function(E){var A=m.ordinal,O=E.match(/\d+/);if(this.day=O[0],A)for(var N=1;N<=31;N+=1)A(N).replace(/\[|\]/g,"")===E&&(this.day=N)}],w:[u,f("week")],ww:[s,f("week")],M:[u,f("month")],MM:[s,f("month")],MMM:[d,function(E){var A=p("months"),O=(p("monthsShort")||A.map(function(N){return N.slice(0,3)})).indexOf(E)+1;if(O<1)throw new Error;this.month=O%12||O}],MMMM:[d,function(E){var A=p("months").indexOf(E)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,f("year")],YY:[s,function(E){this.year=g(E)}],YYYY:[/\d{4}/,f("year")],Z:h,ZZ:h};function S(E){var A,O;A=E,O=m&&m.formats;for(var N=(E=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(J,W,q){var G=q&&q.toUpperCase();return W||O[q]||t[q]||O[G].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Z,re,ne){return re||ne.slice(1)})})).match(r),F=N.length,T=0;T<F;T+=1){var K=N[T],L=w[K],V=L&&L[0],C=L&&L[1];N[T]=C?{regex:V,parser:C}:K.replace(/^\[|\]$/g,"")}return function(J){for(var W={},q=0,G=0;q<F;q+=1){var Z=N[q];if(typeof Z=="string")G+=Z.length;else{var re=Z.regex,ne=Z.parser,oe=J.slice(G),ee=re.exec(oe)[0];ne.call(W,ee),J=J.replace(ee,"")}}return function(me){var Ne=me.afternoon;if(Ne!==void 0){var Ee=me.hours;Ne?Ee<12&&(me.hours+=12):Ee===12&&(me.hours=0),delete me.afternoon}}(W),W}}return function(E,A,O){O.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(g=E.parseTwoDigitYear);var N=A.prototype,F=N.parse;N.parse=function(T){var K=T.date,L=T.utc,V=T.args;this.$u=L;var C=V[1];if(typeof C=="string"){var J=V[2]===!0,W=V[3]===!0,q=J||W,G=V[2];W&&(G=V[2]),m=this.$locale(),!J&&G&&(m=O.Ls[G]),this.$d=function(oe,ee,me,Ne){try{if(["x","X"].indexOf(ee)>-1)return new Date((ee==="X"?1e3:1)*oe);var Ee=S(ee)(oe),rn=Ee.year,on=Ee.month,it=Ee.day,ve=Ee.hours,_e=Ee.minutes,Ze=Ee.seconds,Qe=Ee.milliseconds,En=Ee.zone,st=Ee.week,Mn=new Date,Dn=it||(rn||on?1:Mn.getDate()),Wn=rn||Mn.getFullYear(),$e=0;rn&&!on||($e=on>0?on-1:Mn.getMonth());var yn,ot=ve||0,mn=_e||0,ut=Ze||0,zn=Qe||0;return En?new Date(Date.UTC(Wn,$e,Dn,ot,mn,ut,zn+60*En.offset*1e3)):me?new Date(Date.UTC(Wn,$e,Dn,ot,mn,ut,zn)):(yn=new Date(Wn,$e,Dn,ot,mn,ut,zn),st&&(yn=Ne(yn).week(st).toDate()),yn)}catch{return new Date("")}}(K,C,L,O),this.init(),G&&G!==!0&&(this.$L=this.locale(G).$L),q&&K!=this.format(C)&&(this.$d=new Date("")),m={}}else if(C instanceof Array)for(var Z=C.length,re=1;re<=Z;re+=1){V[1]=C[re-1];var ne=O.apply(this,V);if(ne.isValid()){this.$d=ne.$d,this.$L=ne.$L,this.init();break}re===Z&&(this.$d=new Date(""))}else F.call(this,T)}}})}(xu)),xu.exports}var IP=PP();const FP=SP(IP),LP="_textarea_14c7r_1",MP="_readOnlyField_14c7r_7",Rg={textarea:LP,readOnlyField:MP},xP=e=>e!=null&&e!=="",th=({label:e,value:n,isEdited:t=!1,type:r,hideLabel:l,size:s})=>xP(n)?wn.jsxs(Ln,{gap:"space-4",children:[e&&!l&&wn.jsx(Ur,{size:s,children:e}),wn.jsxs(_t,{gap:"space-8",align:"center",wrap:!1,children:[wn.jsx(nd,{className:r==="textarea"?Rg.textarea:Rg.readOnlyField,size:s,children:n}),t&&wn.jsx(q0,{})]})]}):null;at.extend(FP);const KP=({label:e,description:n,validate:t=[],hideLabel:r=!1,isReadOnly:l=!1,size:s="small",onChange:u,disabledDays:d,isEdited:m,defaultMonth:g,fromDate:f,toDate:h,...p})=>{const{name:y,control:w,disabled:S}=p,{formState:{errors:E}}=rl(),{field:A}=Ld({name:y,control:w,rules:{validate:R.useMemo(()=>Kd(t),[t])}}),O=A.value?at(A.value,Ma,!0).format(qi):"",[N,F]=R.useState(O),{datepickerProps:T,inputProps:K}=gD({onDateChange:C=>{if(C!==void 0){const J=at(C).format(Ma);u&&u(J),A.onChange(J),F(at(J,Ma,!0).format(qi))}},defaultSelected:A.value?at(A.value,Ma,!0).toDate():void 0,defaultMonth:g||(!A.value&&h?h:void 0),disabled:d}),L=R.useCallback(C=>{const J=at(C.target.value,qi,!0).format(Ma),W=J!=="Invalid Date";F(C.target.value),u&&u(W?J:C.target.value),A.onChange(W?J:C.target.value)},[F,u,A]);if(l)return wn.jsx(th,{label:e,value:A.value?at(A.value,Ma,!0).format(qi):void 0,isEdited:m,hideLabel:r,size:s});const V={...T,fromDate:f,toDate:h,dropdownCaption:f&&h?!0:void 0};return wn.jsx(ks,{...V,children:wn.jsx(ks.Input,{...K,hideLabel:r,onChange:L,value:N,size:s,label:e,description:n,disabled:S,error:Vd(E,y)})})},Bd=({label:e,description:n,validate:t=[],onChange:r,children:l,className:s,isReadOnly:u=!1,size:d="small",isEdited:m=!1,hideLegend:g=!1,...f})=>{const{name:h,control:p}=f,{formState:{errors:y}}=rl(),{field:w}=Ld({name:h,control:p,rules:{validate:Kd(t)}});return wn.jsx(PD,{name:h,value:w.value!==void 0?w.value:null,legend:wn.jsxs(_t,{justify:"center",gap:"space-8",children:[e,u&&m&&wn.jsx(q0,{})]}),hideLegend:g,disabled:u,description:n,size:d,error:Vd(y,h),onChange:S=>{r&&r(S),w.onChange(S)},className:s,children:l})},VP="_textAreaFieldWithBadges_bdz0b_1",BP="_etikettWrapper_bdz0b_4",Sg={textAreaFieldWithBadges:VP,etikettWrapper:BP},Us=({name:e,control:n,label:t,readOnly:r,maxLength:l,badges:s,validate:u=[],parse:d=y=>y,className:m,description:g,isEdited:f,size:h="small",...p})=>{const{formState:{errors:y}}=rl(),{field:w}=Ld({name:e,control:n,rules:{validate:R.useMemo(()=>Kd(u),[u])}});return r?wn.jsx(th,{size:h,label:t,value:w.value,type:"textarea",isEdited:f,hideLabel:p.hideLabel}):wn.jsxs("div",{className:s?Sg.textAreaFieldWithBadges:null,children:[s&&wn.jsx("div",{className:Sg.etikettWrapper,children:s.map(({type:S,titleText:E})=>wn.jsx(AD,{variant:S,size:"small",children:E},E))}),wn.jsx(jD,{size:h,label:t,description:g,className:m,autoComplete:"off",...w,onChange:S=>w.onChange(S.currentTarget.value!==""?d(S.currentTarget.value):null),value:w.value?w.value:"",error:Vd(y,e),maxLength:l,...p})]})},qs=({formMethods:e,onSubmit:n,children:t,className:r,setDataOnUnmount:l})=>{const{handleSubmit:s,getValues:u}=e;return R.useEffect(()=>()=>{l&&l(u())},[]),wn.jsx(dP,{...e,children:wn.jsx("form",{className:r,onSubmit:n?s(d=>n(d)):void 0,children:t})})},rh=()=>j.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[j.jsx("defs",{children:j.jsx("path",{d:"M16 0C7.164 0 0 7.164 0 16s7.163 16 16 16 16-7.163 16-16c0-8.836-7.164-16-16-16zm0 3.974a1.938 1.938 0 110 3.876 1.938 1.938 0 010-3.875zm5.047 7.791v5.4c0 .435-.389.787-.867.787-.48 0-.869-.352-.869-.788V12.69a.365.365 0 00-.731-.025c-.002.01-.01.016-.01.026v14.233a1.102 1.102 0 11-2.206 0V17.9a.365.365 0 00-.729 0v9.022a1.103 1.103 0 01-2.205 0V12.69c0-.01-.008-.017-.01-.025a.365.365 0 00-.732.024v4.476c0 .435-.388.787-.868.787-.479 0-.867-.352-.867-.787v-5.748c0-1.694 1.805-2.928 3.476-3.021l1.204-.008v-.005l.367.003.369-.002v.004l1.204.008c1.67.093 3.474 1.328 3.474 3.02v.35z",id:"a"})}),j.jsxs("g",{fill:"none",fillRule:"evenodd",children:[j.jsx("use",{fill:"#FFF",xlinkHref:"#a"}),j.jsx("use",{fill:"#3385D1",xlinkHref:"#a"})]})]});rh.__docgenInfo={description:"",methods:[],displayName:"ManIcon"};const ah=()=>j.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"0 0 165.4 162.59",children:[j.jsx("defs",{}),j.jsx("title",{children:"Ukjent kjønn"}),j.jsx("path",{style:{fill:"#c7c3c0",fillRule:"evenodd"},d:"M82.7,3.3a78,78,0,1,0,78,78A78,78,0,0,0,82.7,3.3Zm-2,102.22v28.9a5.4,5.4,0,1,1-10.8,0v-28.8H58.14c1.6-5.4,12.4-40.4,12.3-40.4a2.18,2.18,0,0,0-1.5-2.4,2.08,2.08,0,0,0-2.7,1.5L59,87.82a4.49,4.49,0,0,1-5.4,2.4,4.57,4.57,0,0,1-3-5.7s10-31.7,10.1-32c2.7-8.5,9.6-8.5,15.9-8.5h4.1Zm1.7-63.86a9.45,9.45,0,1,1,9.45-9.44A9.44,9.44,0,0,1,82.44,41.66Zm24.5,18.76v26.3a4.22,4.22,0,0,1-8.4,0V64.92a1.79,1.79,0,0,0-1.8-1.8,1.84,1.84,0,0,0-1.8,1.7l-.1.1v69.5a5.4,5.4,0,0,1-10.8.2V44h6c8.1.5,16.9,6.5,16.9,14.7Z"})]});ah.__docgenInfo={description:"",methods:[],displayName:"UnknownIcon"};const lh=()=>j.jsxs("svg",{width:"32px",height:"32px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[j.jsx("title",{children:"Kvinne"}),j.jsx("defs",{}),j.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:j.jsx("g",{transform:"translate(-16.000000, -20.000000)",fill:"#C86151",children:j.jsx("g",{children:j.jsx("g",{transform:"translate(16.000000, 20.000000)",children:j.jsx("g",{children:j.jsx("g",{children:j.jsx("g",{children:j.jsx("path",{d:"M16,0 C7.164,0 0,7.1635 0,16 C0,24.836 7.1635,32 16,32 C24.8365,32 32,24.8365 32,16 C32,7.164 24.836,0 16,0 L16,0 Z M15.999,3.9745 C17.0685,3.9745 17.937,4.8415 17.937,5.9115 C17.937,6.9815 17.0685,7.849 15.999,7.849 C14.9295,7.849 14.0625,6.981 14.0625,5.9115 C14.0625,4.8415 14.929,3.9745 15.999,3.9745 L15.999,3.9745 Z M21.9015,17.855 C21.462,17.988 20.9965,17.767 20.7995,17.354 L19.3165,12.537 C19.2445,12.3005 18.9945,12.167 18.7575,12.239 C18.544,12.304 18.4235,12.514 18.4525,12.728 C18.446,12.7365 20.6445,19.9185 20.981,21.0175 L18.5695,21.0175 L18.5695,26.921 C18.5695,27.5305 18.0765,28.024 17.4675,28.024 C16.8585,28.024 16.364,27.53 16.364,26.921 L16.364,26.906 L16.364,21.193 L16.364,21.0175 L16,21.0175 L15.6355,21.0175 L15.6355,21.193 L15.6355,26.9065 L15.6355,26.9215 C15.6355,27.531 15.1415,28.0245 14.532,28.0245 C13.923,28.0245 13.43,27.5305 13.43,26.9215 L13.43,21.018 L11.0185,21.018 C11.3545,19.9185 13.5535,12.737 13.547,12.7285 C13.5765,12.5145 13.4555,12.304 13.242,12.2395 C13.0055,12.1675 12.755,12.3005 12.683,12.5375 L11.2,17.3545 C11.0035,17.7675 10.538,17.988 10.098,17.8555 C9.6115,17.7085 9.34,17.183 9.492,16.684 C9.492,16.684 11.5495,10.1765 11.5725,10.13 C12.1325,8.3815 13.5445,8.387 14.8435,8.384 L17.155,8.384 C18.4545,8.387 19.8665,8.3815 20.426,10.13 C20.4495,10.177 22.5065,16.684 22.5065,16.684 C22.6595,17.1825 22.3875,17.7075 21.9015,17.855 L21.9015,17.855 Z"})})})})})})})})]});lh.__docgenInfo={description:"",methods:[],displayName:"WomanIcon"};const GP="_hr_tdcw0_5",jP={hr:GP},CP=Os(3),UP=Ds(1500),wg=e=>e===Ar.KVINNE?j.jsx(lh,{}):e===Ar.MANN?j.jsx(rh,{}):j.jsx(ah,{}),ih=({søknad:e,fagsak:n,aksjonspunkt:t,submitCallback:r,readOnly:l,alleMerknaderFraBeslutter:s})=>{const u=Cs({defaultValues:{dekningsgrad:e.oppgittFordeling.dekningsgrader.avklartDekningsgrad,begrunnelse:t.begrunnelse??""}}),{annenPart:d,søker:m}=e.oppgittFordeling.dekningsgrader,g=t.status===wr.OPPRETTET,f=!!s[t.definisjon]?.notAccepted;return j.jsxs(Ln,{gap:"space-16",children:[j.jsx(wd,{erAksjonspunktApent:g,erIkkeGodkjentAvBeslutter:f,children:j.jsx(qs,{formMethods:u,onSubmit:h=>r({kode:dn.AVKLAR_DEKNINGSGRAD,begrunnelse:h.begrunnelse,dekningsgrad:h.dekningsgrad}),children:j.jsxs(Ln,{gap:"space-40",children:[j.jsxs(_t,{gap:"space-16",children:[j.jsx(Kl.New,{background:"brand-blue-moderate",padding:"5",borderColor:"neutral",borderRadius:"medium",children:j.jsxs(Ln,{gap:"space-8",children:[j.jsxs(_t,{gap:"space-16",align:"center",children:[wg(n.bruker.kjønn),j.jsxs(Ln,{gap:"0",children:[j.jsx(On,{size:"medium",children:n.bruker.navn}),j.jsx(On,{size:"small",children:j.jsx(qe,{id:"DekningradApForm.SøknadSendt",values:{dato:_f(m.søknadsdato,{month:"long"})}})})]})]}),j.jsx(ua,{size:"xsmall",level:"3",children:j.jsx(qe,{id:"DekningradApForm.HarValgt",values:{dekningsgrad:m.dekningsgrad}})})]})}),n.annenPart&&j.jsx(Kl.New,{background:"brand-blue-moderate",padding:"5",borderColor:"neutral",borderRadius:"medium",children:j.jsxs(Ln,{gap:"space-8",children:[j.jsxs(_t,{gap:"space-16",align:"center",children:[wg(n.annenPart.kjønn),j.jsxs(Ln,{gap:"0",children:[j.jsxs(On,{size:"medium",children:[n.annenPart.navn," "]}),j.jsx(On,{size:"small",children:j.jsx(qe,{id:"DekningradApForm.SøknadSendt",values:{dato:d?_f(d.søknadsdato,{month:"long"}):"-"}})})]})]}),j.jsx(ua,{size:"xsmall",level:"3",children:j.jsx(qe,{id:"DekningradApForm.HarValgt",values:{dekningsgrad:d?.dekningsgrad}})})]})})]}),j.jsxs(Bd,{name:"dekningsgrad",control:u.control,label:j.jsx(qe,{id:"DekningradApForm.HvilkenDekningsgrad"}),validate:[jr],isReadOnly:l,children:[j.jsx(za,{value:80,size:"small",children:j.jsx(qe,{id:"DekningradApForm.80"})}),j.jsx(za,{value:100,size:"small",children:j.jsx(qe,{id:"DekningradApForm.100"})})]}),j.jsx(Us,{name:"begrunnelse",control:u.control,label:j.jsx(qe,{id:"DekningradApForm.Begrunnelse"}),validate:[jr,CP,UP,Ps],maxLength:1500,readOnly:l}),j.jsx("div",{children:j.jsx(yt,{variant:"primary",size:"small",disabled:l||!u.formState.isDirty||u.formState.isSubmitting,loading:u.formState.isSubmitting,children:j.jsx(qe,{id:"DekningradApForm.Bekreft"})})})]})})}),!f&&!g&&j.jsx("hr",{className:jP.hr})]})};ih.__docgenInfo={description:"",methods:[],displayName:"DekningradApForm",props:{søknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}>`},description:""},fagsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  status: foreldrepenger_behandlingslager_fagsak_FagsakStatus;
  aktørId: string;
  sakSkalTilInfotrygd: boolean;
  dekningsgrad: number;
  bruker: tjenester_fagsak_dto_PersonDto;
  brukerManglerAdresse: boolean;
  annenPart: tjenester_fagsak_dto_PersonDto | null;
  annenpartBehandling: tjenester_behandling_dto_behandling_AnnenPartBehandlingDto | null;
  familiehendelse: tjenester_fagsak_dto_SakHendelseDto | null;
  fagsakMarkeringer: Array<tjenester_fagsak_dto_FagsakMarkeringDto>;
  behandlingTypeKanOpprettes: Array<tjenester_behandling_dto_BehandlingOpprettingDto>;
  behandlinger: Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>;
  historikkinnslag: Array<tjenester_behandling_historikk_HistorikkinnslagDto>;
  notater: Array<tjenester_fagsak_dto_FagsakNotatDto>;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto;
  harVergeIÅpenBehandling: boolean;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"annenPart",value:{name:"union",raw:"tjenester_fagsak_dto_PersonDto | null",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"tjenester_behandling_dto_behandling_AnnenPartBehandlingDto | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  behandlingUuid: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}}]}},{name:"null"}],required:!0}},{key:"familiehendelse",value:{name:"union",raw:"tjenester_fagsak_dto_SakHendelseDto | null",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
  hendelseDato: string | null;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"hendelseDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: foreldrepenger_behandlingslager_fagsak_egenskaper_FagsakMarkering;
  kortNavn: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"kortNavn",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakMarkeringDto>",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  id: number | null;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId: number | null;
  opprettet: string;
  avsluttet: string | null;
  endret: string | null;
  endretAvBrukernavn: string | null;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak: tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null;
  behandlingsfristTid: string | null;
  gjeldendeVedtak: boolean;
  erPaaVent: boolean | null;
  originalVedtaksDato: string | null;
  behandlingHenlagt: boolean;
  behandlingPaaVent: boolean | null;
  behandlingPåVent: boolean;
  fristBehandlingPåVent: string | null;
  fristBehandlingPaaVent: string | null;
  venteArsakKode: string | null;
  venteÅrsakKode: string | null;
  sprakkode: foreldrepenger_behandlingslager_geografisk_Språkkode | null;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler: string | null;
  toTrinnsBehandling: boolean;
  behandlingsresultat: tjenester_behandling_dto_behandling_BehandlingsresultatDto | null;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  behandlingTillatteOperasjoner: tjenester_behandling_dto_BehandlingOperasjonerDto | null;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  totrinnskontrollReadonly: boolean | null;
  risikoAksjonspunkt: tjenester_behandling_aksjonspunkt_AksjonspunktDto | null;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto | null;
  ugunstAksjonspunkt: boolean | null;
  behandlingKoet: boolean | null;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endret",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAvBrukernavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
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
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingsfristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"originalVedtaksDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fristBehandlingPaaVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteArsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"sprakkode",value:{name:"union",raw:"foreldrepenger_behandlingslager_geografisk_Språkkode | null",elements:[{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingsresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
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
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode: string | null;
  lovReferanse: string | null;
  overstyrbar: boolean;
  evaluering: string | null;
  input: string | null;
}`,signature:{properties:[{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"lovReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"input",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"union",raw:"tjenester_behandling_dto_BehandlingOperasjonerDto | null",elements:[{name:"signature",type:"object",raw:`{
  uuid: string | null;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingFraBeslutter: boolean;
  behandlingTilGodkjenning: boolean;
  vergeBehandlingsmeny: foreldrepenger_domene_person_verge_dto_VergeBehandlingsmenyEnum;
}`,signature:{properties:[{key:"uuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean | null;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  beregningDto: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null;
  besluttersBegrunnelse: string | null;
  totrinnskontrollGodkjent: boolean;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  godkjent: boolean;
  arbeidsgiverReferanse: string | null;
  arbeidsgiverNavn: string | null;
  orgnr: string | null;
  privatpersonFødselsdato: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsgiverNavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"orgnr",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"privatpersonFødselsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"beregningDto",value:{name:"union",raw:"tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null",elements:[{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean | null;
  faktaOmBeregningTilfeller: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null;
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"union",raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
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
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!0}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSlettet: boolean | null;
  erEndret: boolean | null;
  erLagtTil: boolean | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSlettet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erLagtTil",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"tjenester_behandling_aksjonspunkt_AksjonspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  medlFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  faresignalVurdering: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"medlFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null",elements:[{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]},required:!0},{name:"null"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingKoet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string | null;
  aktør: tjenester_behandling_historikk_HistorikkinnslagDto_HistorikkAktørDto;
  skjermlenke: foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType | null;
  opprettetTidspunkt: string;
  dokumenter: Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto> | null;
  tittel: string | null;
  linjer: Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: foreldrepenger_behandlingslager_behandling_historikk_HistorikkAktør;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"skjermlenke",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType | null",elements:[{name:"union",raw:`| 'ANKE_MERKNADER'
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
| 'FAKTA_UTTAK_EØS'`,elements:[{name:"literal",value:"'ANKE_MERKNADER'"},{name:"literal",value:"'ANKE_VURDERING'"},{name:"literal",value:"'BEREGNING_ENGANGSSTOENAD'"},{name:"literal",value:"'BEREGNING_FORELDREPENGER'"},{name:"literal",value:"'BESTEBEREGNING'"},{name:"literal",value:"'FAKTA_FOR_OMSORG'"},{name:"literal",value:"'FAKTA_FOR_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_ADOPSJON'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'"},{name:"literal",value:"'FAKTA_OM_BEREGNING'"},{name:"literal",value:"'FAKTA_OM_FOEDSEL'"},{name:"literal",value:"'FAKTA_OM_FORDELING'"},{name:"literal",value:"'FAKTA_OM_MEDLEMSKAP'"},{name:"literal",value:"'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'"},{name:"literal",value:"'FAKTA_OM_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_SIMULERING'"},{name:"literal",value:"'FAKTA_OM_UTTAK'"},{name:"literal",value:"'FAKTA_OM_AKTIVITETSKRAV'"},{name:"literal",value:"'FAKTA_OMSORG_OG_RETT'"},{name:"literal",value:"'FAKTA_OM_VERGE'"},{name:"literal",value:"'FORMKRAV_KLAGE_KA'"},{name:"literal",value:"'FORMKRAV_KLAGE_NFP'"},{name:"literal",value:"'KLAGE_BEH_NFP'"},{name:"literal",value:"'KLAGE_BEH_NK'"},{name:"literal",value:"'KONTROLL_AV_SAKSOPPLYSNINGER'"},{name:"literal",value:"'OPPLYSNINGSPLIKT'"},{name:"literal",value:"'PUNKT_FOR_ADOPSJON'"},{name:"literal",value:"'PUNKT_FOR_FOEDSEL'"},{name:"literal",value:"'PUNKT_FOR_FORELDREANSVAR'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP_LØPENDE'"},{name:"literal",value:"'PUNKT_FOR_OMSORG'"},{name:"literal",value:"'PUNKT_FOR_OPPTJENING'"},{name:"literal",value:"'PUNKT_FOR_SVANGERSKAPSPENGER'"},{name:"literal",value:"'PUNKT_FOR_SVP_INNGANG'"},{name:"literal",value:"'SOEKNADSFRIST'"},{name:"literal",value:"'TILKJENT_YTELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'UTLAND'"},{name:"literal",value:"'UTTAK'"},{name:"literal",value:"'VEDTAK'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'FAKTA_OM_UTTAK_DOKUMENTASJON'"},{name:"literal",value:"'FAKTA_UTTAK'"},{name:"literal",value:"'FAKTA_UTTAK_EØS'"}]},{name:"null"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"dokumenter",value:{name:"union",raw:"Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto> | null",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tag: string;
  journalpostId: string;
  dokumentId: string;
  utgått: boolean;
}`,signature:{properties:[{key:"tag",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: tjenester_behandling_historikk_HistorikkinnslagDto_Linje_Type;
  tekst: string | null;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'TEKST' | 'LINJESKIFT'",elements:[{name:"literal",value:"'TEKST'"},{name:"literal",value:"'LINJESKIFT'"}],required:!0}},{key:"tekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto>",required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetAv: string;
  opprettetTidspunkt: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakNotatDto>",required:!0}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  medlFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  faresignalVurdering: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"medlFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null",elements:[{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]},required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}}]}},description:""},aksjonspunkt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: AvklarDekningsgradAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const qP="_header_1mtdg_1",HP="_editIcon_1mtdg_6",YP="_editIconReadonly_1mtdg_13",_u={header:qP,editIcon:HP,editIconReadonly:YP},$P=Os(3),WP=Ds(1500),sh=({aksjonspunkt:e,fagsak:n,søknad:t,submitCallback:r,readOnly:l,kanOverstyreAccess:s})=>{const u=Ss(),d=t.oppgittFordeling.dekningsgrader.avklartDekningsgrad??t.oppgittFordeling.dekningsgrader.søker.dekningsgrad,m={dekningsgrad:d,begrunnelse:e?.begrunnelse??""},g=Cs({defaultValues:m}),[f,h]=R.useState(!1),p=()=>{g.reset(),h(!1)};return f?j.jsxs(qs,{formMethods:g,onSubmit:y=>r({kode:dn.OVERSTYR_DEKNINGSGRAD,dekningsgrad:y.dekningsgrad,begrunnelse:y.begrunnelse}).then(p),children:[j.jsx("div",{className:_u.header,children:j.jsxs(_t,{gap:"space-8",align:"center",children:[j.jsx(CT,{"aria-hidden":!0,height:24,width:24}),j.jsx(ua,{size:"small",level:"3",children:j.jsx(qe,{id:"DekningsgradForm.EndreDekningsgrad"})})]})}),j.jsx(Kl.New,{background:"neutral-moderate",padding:"5",children:j.jsxs(Ln,{gap:"space-24",children:[j.jsx(Bd,{name:"dekningsgrad",control:g.control,label:j.jsx(qe,{id:"DekningsgradForm.Dekningsgrad"}),description:n.annenPart?u.formatMessage({id:"DekningsgradForm.GjelderFor"},{søker:n.bruker.navn,annenPart:n.annenPart.navn}):void 0,validate:[jr,y=>y===d?u.formatMessage({id:"DekningsgradForm.LikEksisterende"}):null],isReadOnly:l,children:j.jsxs(_t,{gap:"space-16",children:[j.jsx(za,{value:80,size:"small",children:u.formatMessage({id:"DekningsgradForm.80"},{erSatt:t.oppgittFordeling.dekningsgrader.avklartDekningsgrad===80})}),j.jsx(za,{value:100,size:"small",children:u.formatMessage({id:"DekningsgradForm.100"},{erSatt:t.oppgittFordeling.dekningsgrader.avklartDekningsgrad===100})})]})}),j.jsx(Us,{name:"begrunnelse",control:g.control,label:j.jsx(qe,{id:"DekningsgradForm.Begrunnelse"}),validate:[jr,$P,WP,Ps],maxLength:1500,readOnly:l}),j.jsx("div",{children:j.jsx(yt,{variant:"primary",size:"small",disabled:l||!g.formState.isDirty||g.formState.isSubmitting,loading:g.formState.isSubmitting,children:j.jsx(qe,{id:"DekningsgradForm.Bekreft"})})})]})})]}):j.jsxs(Ln,{gap:"space-8",children:[j.jsxs(_t,{gap:"space-8",align:"center",children:[j.jsx(ua,{size:"small",level:"3",children:j.jsx(qe,{id:"DekningsgradForm.Dekningsgrad"})}),e?.begrunnelse&&j.jsx(On,{size:"small",children:j.jsx(qe,{id:"DekningsgradForm.ErEndret"})})]}),j.jsxs(_t,{gap:"space-8",children:[j.jsx(qe,{id:"DekningsgradForm.DekningsgradForeldrepenger",values:{dekningsgrad:t.oppgittFordeling.dekningsgrader.avklartDekningsgrad??t.oppgittFordeling.dekningsgrader.søker.dekningsgrad}}),s&&j.jsx(Ev,{title:u.formatMessage({id:"DekningsgradForm.EndreDekningsgrad"}),className:l?_u.editIconReadonly:_u.editIcon,onClick:l?void 0:()=>h(!0)})]}),e?.begrunnelse&&j.jsx(Kl.New,{background:"neutral-moderate",padding:"5",borderRadius:"medium",children:j.jsxs(Ln,{gap:"space-8",children:[j.jsx(Ur,{size:"small",children:j.jsx(qe,{id:"DekningsgradForm.BeskrivelseAvEndring"})}),j.jsx(On,{size:"small",children:e.begrunnelse})]})})]})};sh.__docgenInfo={description:"",methods:[],displayName:"DekningradForm",props:{aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},fagsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  status: foreldrepenger_behandlingslager_fagsak_FagsakStatus;
  aktørId: string;
  sakSkalTilInfotrygd: boolean;
  dekningsgrad: number;
  bruker: tjenester_fagsak_dto_PersonDto;
  brukerManglerAdresse: boolean;
  annenPart: tjenester_fagsak_dto_PersonDto | null;
  annenpartBehandling: tjenester_behandling_dto_behandling_AnnenPartBehandlingDto | null;
  familiehendelse: tjenester_fagsak_dto_SakHendelseDto | null;
  fagsakMarkeringer: Array<tjenester_fagsak_dto_FagsakMarkeringDto>;
  behandlingTypeKanOpprettes: Array<tjenester_behandling_dto_BehandlingOpprettingDto>;
  behandlinger: Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>;
  historikkinnslag: Array<tjenester_behandling_historikk_HistorikkinnslagDto>;
  notater: Array<tjenester_fagsak_dto_FagsakNotatDto>;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto;
  harVergeIÅpenBehandling: boolean;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"annenPart",value:{name:"union",raw:"tjenester_fagsak_dto_PersonDto | null",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"tjenester_behandling_dto_behandling_AnnenPartBehandlingDto | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  behandlingUuid: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}}]}},{name:"null"}],required:!0}},{key:"familiehendelse",value:{name:"union",raw:"tjenester_fagsak_dto_SakHendelseDto | null",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
  hendelseDato: string | null;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"hendelseDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: foreldrepenger_behandlingslager_fagsak_egenskaper_FagsakMarkering;
  kortNavn: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"kortNavn",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakMarkeringDto>",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  id: number | null;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId: number | null;
  opprettet: string;
  avsluttet: string | null;
  endret: string | null;
  endretAvBrukernavn: string | null;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak: tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null;
  behandlingsfristTid: string | null;
  gjeldendeVedtak: boolean;
  erPaaVent: boolean | null;
  originalVedtaksDato: string | null;
  behandlingHenlagt: boolean;
  behandlingPaaVent: boolean | null;
  behandlingPåVent: boolean;
  fristBehandlingPåVent: string | null;
  fristBehandlingPaaVent: string | null;
  venteArsakKode: string | null;
  venteÅrsakKode: string | null;
  sprakkode: foreldrepenger_behandlingslager_geografisk_Språkkode | null;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler: string | null;
  toTrinnsBehandling: boolean;
  behandlingsresultat: tjenester_behandling_dto_behandling_BehandlingsresultatDto | null;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  behandlingTillatteOperasjoner: tjenester_behandling_dto_BehandlingOperasjonerDto | null;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  totrinnskontrollReadonly: boolean | null;
  risikoAksjonspunkt: tjenester_behandling_aksjonspunkt_AksjonspunktDto | null;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto | null;
  ugunstAksjonspunkt: boolean | null;
  behandlingKoet: boolean | null;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endret",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAvBrukernavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
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
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingsfristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"originalVedtaksDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fristBehandlingPaaVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteArsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"sprakkode",value:{name:"union",raw:"foreldrepenger_behandlingslager_geografisk_Språkkode | null",elements:[{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingsresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
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
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode: string | null;
  lovReferanse: string | null;
  overstyrbar: boolean;
  evaluering: string | null;
  input: string | null;
}`,signature:{properties:[{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"lovReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"input",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"union",raw:"tjenester_behandling_dto_BehandlingOperasjonerDto | null",elements:[{name:"signature",type:"object",raw:`{
  uuid: string | null;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingFraBeslutter: boolean;
  behandlingTilGodkjenning: boolean;
  vergeBehandlingsmeny: foreldrepenger_domene_person_verge_dto_VergeBehandlingsmenyEnum;
}`,signature:{properties:[{key:"uuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean | null;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  beregningDto: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null;
  besluttersBegrunnelse: string | null;
  totrinnskontrollGodkjent: boolean;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  godkjent: boolean;
  arbeidsgiverReferanse: string | null;
  arbeidsgiverNavn: string | null;
  orgnr: string | null;
  privatpersonFødselsdato: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsgiverNavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"orgnr",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"privatpersonFødselsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"beregningDto",value:{name:"union",raw:"tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null",elements:[{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean | null;
  faktaOmBeregningTilfeller: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null;
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"union",raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
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
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!0}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSlettet: boolean | null;
  erEndret: boolean | null;
  erLagtTil: boolean | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSlettet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erLagtTil",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"tjenester_behandling_aksjonspunkt_AksjonspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  medlFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  faresignalVurdering: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"medlFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null",elements:[{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]},required:!0},{name:"null"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingKoet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string | null;
  aktør: tjenester_behandling_historikk_HistorikkinnslagDto_HistorikkAktørDto;
  skjermlenke: foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType | null;
  opprettetTidspunkt: string;
  dokumenter: Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto> | null;
  tittel: string | null;
  linjer: Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: foreldrepenger_behandlingslager_behandling_historikk_HistorikkAktør;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"skjermlenke",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType | null",elements:[{name:"union",raw:`| 'ANKE_MERKNADER'
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
| 'FAKTA_UTTAK_EØS'`,elements:[{name:"literal",value:"'ANKE_MERKNADER'"},{name:"literal",value:"'ANKE_VURDERING'"},{name:"literal",value:"'BEREGNING_ENGANGSSTOENAD'"},{name:"literal",value:"'BEREGNING_FORELDREPENGER'"},{name:"literal",value:"'BESTEBEREGNING'"},{name:"literal",value:"'FAKTA_FOR_OMSORG'"},{name:"literal",value:"'FAKTA_FOR_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_ADOPSJON'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'"},{name:"literal",value:"'FAKTA_OM_BEREGNING'"},{name:"literal",value:"'FAKTA_OM_FOEDSEL'"},{name:"literal",value:"'FAKTA_OM_FORDELING'"},{name:"literal",value:"'FAKTA_OM_MEDLEMSKAP'"},{name:"literal",value:"'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'"},{name:"literal",value:"'FAKTA_OM_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_SIMULERING'"},{name:"literal",value:"'FAKTA_OM_UTTAK'"},{name:"literal",value:"'FAKTA_OM_AKTIVITETSKRAV'"},{name:"literal",value:"'FAKTA_OMSORG_OG_RETT'"},{name:"literal",value:"'FAKTA_OM_VERGE'"},{name:"literal",value:"'FORMKRAV_KLAGE_KA'"},{name:"literal",value:"'FORMKRAV_KLAGE_NFP'"},{name:"literal",value:"'KLAGE_BEH_NFP'"},{name:"literal",value:"'KLAGE_BEH_NK'"},{name:"literal",value:"'KONTROLL_AV_SAKSOPPLYSNINGER'"},{name:"literal",value:"'OPPLYSNINGSPLIKT'"},{name:"literal",value:"'PUNKT_FOR_ADOPSJON'"},{name:"literal",value:"'PUNKT_FOR_FOEDSEL'"},{name:"literal",value:"'PUNKT_FOR_FORELDREANSVAR'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP_LØPENDE'"},{name:"literal",value:"'PUNKT_FOR_OMSORG'"},{name:"literal",value:"'PUNKT_FOR_OPPTJENING'"},{name:"literal",value:"'PUNKT_FOR_SVANGERSKAPSPENGER'"},{name:"literal",value:"'PUNKT_FOR_SVP_INNGANG'"},{name:"literal",value:"'SOEKNADSFRIST'"},{name:"literal",value:"'TILKJENT_YTELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'UTLAND'"},{name:"literal",value:"'UTTAK'"},{name:"literal",value:"'VEDTAK'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'FAKTA_OM_UTTAK_DOKUMENTASJON'"},{name:"literal",value:"'FAKTA_UTTAK'"},{name:"literal",value:"'FAKTA_UTTAK_EØS'"}]},{name:"null"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"dokumenter",value:{name:"union",raw:"Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto> | null",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tag: string;
  journalpostId: string;
  dokumentId: string;
  utgått: boolean;
}`,signature:{properties:[{key:"tag",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: tjenester_behandling_historikk_HistorikkinnslagDto_Linje_Type;
  tekst: string | null;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'TEKST' | 'LINJESKIFT'",elements:[{name:"literal",value:"'TEKST'"},{name:"literal",value:"'LINJESKIFT'"}],required:!0}},{key:"tekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto>",required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetAv: string;
  opprettetTidspunkt: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakNotatDto>",required:!0}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  medlFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  faresignalVurdering: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"medlFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null",elements:[{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]},required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}}]}},description:""},søknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}>`},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: OverstyringDekningsgradAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},kanOverstyreAccess:{required:!0,tsType:{name:"boolean"},description:""}}};const Xl={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"},Eu=Ut(Xl),zP=Os(3),JP=Ds(1500),Vl=({control:e,isReadOnly:n,isSubmittable:t,hasBegrunnelse:r,label:l,hasReadOnlyLabel:s=!1,hasVurderingText:u=!1,size:d})=>{const m=u?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",g=()=>n?s?Eu.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":l??Eu.formatMessage({id:m});return j.jsx(Qu,{value:Eu,children:(t||r)&&j.jsx(Us,{name:"begrunnelse",control:e,label:g(),validate:[jr,zP,JP,Ps],maxLength:1500,readOnly:n,size:d})})},XP=e=>e&&Array.isArray(e)?e[0]?.begrunnelse??"":e&&!Array.isArray(e)&&e.begrunnelse?e.begrunnelse:"";Vl.initialValues=e=>({begrunnelse:oT(XP(e)??void 0)});Vl.transformValues=e=>({begrunnelse:gv(e.begrunnelse)});Vl.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]"},{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},alias:"FaktaBegrunnelseFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""}}};const ZP=Ut(Xl),QP=(e,n,t)=>!t||n?!0:!e,oh=({isReadOnly:e,isSubmittable:n,buttonText:t,onClick:r,isSubmitting:l,isDirty:s})=>j.jsx(Qu,{value:ZP,children:!e&&j.jsx("div",{children:j.jsxs(yt,{size:"small",variant:"primary",loading:l,disabled:QP(s,l,n),onClick:r||uT,type:r?"button":"submit",children:[!!t&&t,!t&&j.jsx(qe,{id:"SubmitButton.ConfirmInformation"})]})})});oh.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};Ut(Xl);var Dl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var eI=Dl.exports,Og;function nI(){return Og||(Og=1,function(e,n){(function(){var t,r="4.17.21",l=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",d="Invalid `variable` option passed into `_.template`",m="__lodash_hash_undefined__",g=500,f="__lodash_placeholder__",h=1,p=2,y=4,w=1,S=2,E=1,A=2,O=4,N=8,F=16,T=32,K=64,L=128,V=256,C=512,J=30,W="...",q=800,G=16,Z=1,re=2,ne=3,oe=1/0,ee=9007199254740991,me=17976931348623157e292,Ne=NaN,Ee=4294967295,rn=Ee-1,on=Ee>>>1,it=[["ary",L],["bind",E],["bindKey",A],["curry",N],["curryRight",F],["flip",C],["partial",T],["partialRight",K],["rearg",V]],ve="[object Arguments]",_e="[object Array]",Ze="[object AsyncFunction]",Qe="[object Boolean]",En="[object Date]",st="[object DOMException]",Mn="[object Error]",Dn="[object Function]",Wn="[object GeneratorFunction]",$e="[object Map]",yn="[object Number]",ot="[object Null]",mn="[object Object]",ut="[object Promise]",zn="[object Proxy]",P="[object RegExp]",B="[object Set]",H="[object String]",ae="[object Symbol]",te="[object Undefined]",Q="[object WeakMap]",ce="[object WeakSet]",we="[object ArrayBuffer]",Ie="[object DataView]",An="[object Float32Array]",Ht="[object Float64Array]",Jn="[object Int8Array]",Hr="[object Int16Array]",ur="[object Int32Array]",dr="[object Uint8Array]",Yr="[object Uint8ClampedArray]",cr="[object Uint16Array]",$r="[object Uint32Array]",Te=/\b__p \+= '';/g,ze=/\b(__p \+=) '' \+/g,Ye=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ft=/&(?:amp|lt|gt|quot|#39);/g,Xn=/[&<>"']/g,ya=RegExp(Ft.source),Rn=RegExp(Xn.source),bt=/<%-([\s\S]+?)%>/g,Ke=/<%([\s\S]+?)%>/g,ni=/<%=([\s\S]+?)%>/g,Ws=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zs=/^\w*$/,ll=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wr=/[\\^$.*+?()[\]{}|]/g,Vh=RegExp(Wr.source),Js=/^\s+/,Bh=/\s/,Gh=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,jh=/\{\n\/\* \[wrapped with (.+)\] \*/,Ch=/,? & /,Uh=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,qh=/[()=,{}\[\]\/\s]/,Hh=/\\(\\)?/g,Yh=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ud=/\w*$/,$h=/^[-+]0x[0-9a-f]+$/i,Wh=/^0b[01]+$/i,zh=/^\[object .+?Constructor\]$/,Jh=/^0o[0-7]+$/i,Xh=/^(?:0|[1-9]\d*)$/,Zh=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ti=/($^)/,Qh=/['\n\r\u2028\u2029\\]/g,ri="\\ud800-\\udfff",ep="\\u0300-\\u036f",np="\\ufe20-\\ufe2f",tp="\\u20d0-\\u20ff",qd=ep+np+tp,Hd="\\u2700-\\u27bf",Yd="a-z\\xdf-\\xf6\\xf8-\\xff",rp="\\xac\\xb1\\xd7\\xf7",ap="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",lp="\\u2000-\\u206f",ip=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",$d="A-Z\\xc0-\\xd6\\xd8-\\xde",Wd="\\ufe0e\\ufe0f",zd=rp+ap+lp+ip,Xs="['’]",sp="["+ri+"]",Jd="["+zd+"]",ai="["+qd+"]",Xd="\\d+",op="["+Hd+"]",Zd="["+Yd+"]",Qd="[^"+ri+zd+Xd+Hd+Yd+$d+"]",Zs="\\ud83c[\\udffb-\\udfff]",up="(?:"+ai+"|"+Zs+")",ec="[^"+ri+"]",Qs="(?:\\ud83c[\\udde6-\\uddff]){2}",eo="[\\ud800-\\udbff][\\udc00-\\udfff]",ba="["+$d+"]",nc="\\u200d",tc="(?:"+Zd+"|"+Qd+")",dp="(?:"+ba+"|"+Qd+")",rc="(?:"+Xs+"(?:d|ll|m|re|s|t|ve))?",ac="(?:"+Xs+"(?:D|LL|M|RE|S|T|VE))?",lc=up+"?",ic="["+Wd+"]?",cp="(?:"+nc+"(?:"+[ec,Qs,eo].join("|")+")"+ic+lc+")*",mp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",fp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",sc=ic+lc+cp,gp="(?:"+[op,Qs,eo].join("|")+")"+sc,vp="(?:"+[ec+ai+"?",ai,Qs,eo,sp].join("|")+")",hp=RegExp(Xs,"g"),pp=RegExp(ai,"g"),no=RegExp(Zs+"(?="+Zs+")|"+vp+sc,"g"),_p=RegExp([ba+"?"+Zd+"+"+rc+"(?="+[Jd,ba,"$"].join("|")+")",dp+"+"+ac+"(?="+[Jd,ba+tc,"$"].join("|")+")",ba+"?"+tc+"+"+rc,ba+"+"+ac,fp,mp,Xd,gp].join("|"),"g"),Ep=RegExp("["+nc+ri+qd+Wd+"]"),yp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,bp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],kp=-1,en={};en[An]=en[Ht]=en[Jn]=en[Hr]=en[ur]=en[dr]=en[Yr]=en[cr]=en[$r]=!0,en[ve]=en[_e]=en[we]=en[Qe]=en[Ie]=en[En]=en[Mn]=en[Dn]=en[$e]=en[yn]=en[mn]=en[P]=en[B]=en[H]=en[Q]=!1;var Je={};Je[ve]=Je[_e]=Je[we]=Je[Ie]=Je[Qe]=Je[En]=Je[An]=Je[Ht]=Je[Jn]=Je[Hr]=Je[ur]=Je[$e]=Je[yn]=Je[mn]=Je[P]=Je[B]=Je[H]=Je[ae]=Je[dr]=Je[Yr]=Je[cr]=Je[$r]=!0,Je[Mn]=Je[Dn]=Je[Q]=!1;var Tp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Np={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ap={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Rp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Sp=parseFloat,wp=parseInt,oc=typeof Hi=="object"&&Hi&&Hi.Object===Object&&Hi,Op=typeof self=="object"&&self&&self.Object===Object&&self,Pn=oc||Op||Function("return this")(),to=n&&!n.nodeType&&n,zr=to&&!0&&e&&!e.nodeType&&e,uc=zr&&zr.exports===to,ro=uc&&oc.process,kt=function(){try{var M=zr&&zr.require&&zr.require("util").types;return M||ro&&ro.binding&&ro.binding("util")}catch{}}(),dc=kt&&kt.isArrayBuffer,cc=kt&&kt.isDate,mc=kt&&kt.isMap,fc=kt&&kt.isRegExp,gc=kt&&kt.isSet,vc=kt&&kt.isTypedArray;function dt(M,Y,U){switch(U.length){case 0:return M.call(Y);case 1:return M.call(Y,U[0]);case 2:return M.call(Y,U[0],U[1]);case 3:return M.call(Y,U[0],U[1],U[2])}return M.apply(Y,U)}function Dp(M,Y,U,se){for(var ye=-1,Ve=M==null?0:M.length;++ye<Ve;){var kn=M[ye];Y(se,kn,U(kn),M)}return se}function Tt(M,Y){for(var U=-1,se=M==null?0:M.length;++U<se&&Y(M[U],U,M)!==!1;);return M}function Pp(M,Y){for(var U=M==null?0:M.length;U--&&Y(M[U],U,M)!==!1;);return M}function hc(M,Y){for(var U=-1,se=M==null?0:M.length;++U<se;)if(!Y(M[U],U,M))return!1;return!0}function Dr(M,Y){for(var U=-1,se=M==null?0:M.length,ye=0,Ve=[];++U<se;){var kn=M[U];Y(kn,U,M)&&(Ve[ye++]=kn)}return Ve}function li(M,Y){var U=M==null?0:M.length;return!!U&&ka(M,Y,0)>-1}function ao(M,Y,U){for(var se=-1,ye=M==null?0:M.length;++se<ye;)if(U(Y,M[se]))return!0;return!1}function tn(M,Y){for(var U=-1,se=M==null?0:M.length,ye=Array(se);++U<se;)ye[U]=Y(M[U],U,M);return ye}function Pr(M,Y){for(var U=-1,se=Y.length,ye=M.length;++U<se;)M[ye+U]=Y[U];return M}function lo(M,Y,U,se){var ye=-1,Ve=M==null?0:M.length;for(se&&Ve&&(U=M[++ye]);++ye<Ve;)U=Y(U,M[ye],ye,M);return U}function Ip(M,Y,U,se){var ye=M==null?0:M.length;for(se&&ye&&(U=M[--ye]);ye--;)U=Y(U,M[ye],ye,M);return U}function io(M,Y){for(var U=-1,se=M==null?0:M.length;++U<se;)if(Y(M[U],U,M))return!0;return!1}var Fp=so("length");function Lp(M){return M.split("")}function Mp(M){return M.match(Uh)||[]}function pc(M,Y,U){var se;return U(M,function(ye,Ve,kn){if(Y(ye,Ve,kn))return se=Ve,!1}),se}function ii(M,Y,U,se){for(var ye=M.length,Ve=U+(se?1:-1);se?Ve--:++Ve<ye;)if(Y(M[Ve],Ve,M))return Ve;return-1}function ka(M,Y,U){return Y===Y?$p(M,Y,U):ii(M,_c,U)}function xp(M,Y,U,se){for(var ye=U-1,Ve=M.length;++ye<Ve;)if(se(M[ye],Y))return ye;return-1}function _c(M){return M!==M}function Ec(M,Y){var U=M==null?0:M.length;return U?uo(M,Y)/U:Ne}function so(M){return function(Y){return Y==null?t:Y[M]}}function oo(M){return function(Y){return M==null?t:M[Y]}}function yc(M,Y,U,se,ye){return ye(M,function(Ve,kn,We){U=se?(se=!1,Ve):Y(U,Ve,kn,We)}),U}function Kp(M,Y){var U=M.length;for(M.sort(Y);U--;)M[U]=M[U].value;return M}function uo(M,Y){for(var U,se=-1,ye=M.length;++se<ye;){var Ve=Y(M[se]);Ve!==t&&(U=U===t?Ve:U+Ve)}return U}function co(M,Y){for(var U=-1,se=Array(M);++U<M;)se[U]=Y(U);return se}function Vp(M,Y){return tn(Y,function(U){return[U,M[U]]})}function bc(M){return M&&M.slice(0,Ac(M)+1).replace(Js,"")}function ct(M){return function(Y){return M(Y)}}function mo(M,Y){return tn(Y,function(U){return M[U]})}function il(M,Y){return M.has(Y)}function kc(M,Y){for(var U=-1,se=M.length;++U<se&&ka(Y,M[U],0)>-1;);return U}function Tc(M,Y){for(var U=M.length;U--&&ka(Y,M[U],0)>-1;);return U}function Bp(M,Y){for(var U=M.length,se=0;U--;)M[U]===Y&&++se;return se}var Gp=oo(Tp),jp=oo(Np);function Cp(M){return"\\"+Rp[M]}function Up(M,Y){return M==null?t:M[Y]}function Ta(M){return Ep.test(M)}function qp(M){return yp.test(M)}function Hp(M){for(var Y,U=[];!(Y=M.next()).done;)U.push(Y.value);return U}function fo(M){var Y=-1,U=Array(M.size);return M.forEach(function(se,ye){U[++Y]=[ye,se]}),U}function Nc(M,Y){return function(U){return M(Y(U))}}function Ir(M,Y){for(var U=-1,se=M.length,ye=0,Ve=[];++U<se;){var kn=M[U];(kn===Y||kn===f)&&(M[U]=f,Ve[ye++]=U)}return Ve}function si(M){var Y=-1,U=Array(M.size);return M.forEach(function(se){U[++Y]=se}),U}function Yp(M){var Y=-1,U=Array(M.size);return M.forEach(function(se){U[++Y]=[se,se]}),U}function $p(M,Y,U){for(var se=U-1,ye=M.length;++se<ye;)if(M[se]===Y)return se;return-1}function Wp(M,Y,U){for(var se=U+1;se--;)if(M[se]===Y)return se;return se}function Na(M){return Ta(M)?Jp(M):Fp(M)}function Lt(M){return Ta(M)?Xp(M):Lp(M)}function Ac(M){for(var Y=M.length;Y--&&Bh.test(M.charAt(Y)););return Y}var zp=oo(Ap);function Jp(M){for(var Y=no.lastIndex=0;no.test(M);)++Y;return Y}function Xp(M){return M.match(no)||[]}function Zp(M){return M.match(_p)||[]}var Qp=function M(Y){Y=Y==null?Pn:Aa.defaults(Pn.Object(),Y,Aa.pick(Pn,bp));var U=Y.Array,se=Y.Date,ye=Y.Error,Ve=Y.Function,kn=Y.Math,We=Y.Object,go=Y.RegExp,e_=Y.String,Nt=Y.TypeError,oi=U.prototype,n_=Ve.prototype,Ra=We.prototype,ui=Y["__core-js_shared__"],di=n_.toString,Ce=Ra.hasOwnProperty,t_=0,Rc=function(){var a=/[^.]+$/.exec(ui&&ui.keys&&ui.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),ci=Ra.toString,r_=di.call(We),a_=Pn._,l_=go("^"+di.call(Ce).replace(Wr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),mi=uc?Y.Buffer:t,Fr=Y.Symbol,fi=Y.Uint8Array,Sc=mi?mi.allocUnsafe:t,gi=Nc(We.getPrototypeOf,We),wc=We.create,Oc=Ra.propertyIsEnumerable,vi=oi.splice,Dc=Fr?Fr.isConcatSpreadable:t,sl=Fr?Fr.iterator:t,Jr=Fr?Fr.toStringTag:t,hi=function(){try{var a=na(We,"defineProperty");return a({},"",{}),a}catch{}}(),i_=Y.clearTimeout!==Pn.clearTimeout&&Y.clearTimeout,s_=se&&se.now!==Pn.Date.now&&se.now,o_=Y.setTimeout!==Pn.setTimeout&&Y.setTimeout,pi=kn.ceil,_i=kn.floor,vo=We.getOwnPropertySymbols,u_=mi?mi.isBuffer:t,Pc=Y.isFinite,d_=oi.join,c_=Nc(We.keys,We),Tn=kn.max,xn=kn.min,m_=se.now,f_=Y.parseInt,Ic=kn.random,g_=oi.reverse,ho=na(Y,"DataView"),ol=na(Y,"Map"),po=na(Y,"Promise"),Sa=na(Y,"Set"),ul=na(Y,"WeakMap"),dl=na(We,"create"),Ei=ul&&new ul,wa={},v_=ta(ho),h_=ta(ol),p_=ta(po),__=ta(Sa),E_=ta(ul),yi=Fr?Fr.prototype:t,cl=yi?yi.valueOf:t,Fc=yi?yi.toString:t;function _(a){if(un(a)&&!be(a)&&!(a instanceof Pe)){if(a instanceof At)return a;if(Ce.call(a,"__wrapped__"))return Lm(a)}return new At(a)}var Oa=function(){function a(){}return function(i){if(!an(i))return{};if(wc)return wc(i);a.prototype=i;var o=new a;return a.prototype=t,o}}();function bi(){}function At(a,i){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}_.templateSettings={escape:bt,evaluate:Ke,interpolate:ni,variable:"",imports:{_}},_.prototype=bi.prototype,_.prototype.constructor=_,At.prototype=Oa(bi.prototype),At.prototype.constructor=At;function Pe(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ee,this.__views__=[]}function y_(){var a=new Pe(this.__wrapped__);return a.__actions__=Zn(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=Zn(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=Zn(this.__views__),a}function b_(){if(this.__filtered__){var a=new Pe(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function k_(){var a=this.__wrapped__.value(),i=this.__dir__,o=be(a),c=i<0,v=o?a.length:0,b=LE(0,v,this.__views__),D=b.start,I=b.end,x=I-D,$=c?I:D-1,z=this.__iteratees__,X=z.length,le=0,de=xn(x,this.__takeCount__);if(!o||!c&&v==x&&de==x)return rm(a,this.__actions__);var he=[];e:for(;x--&&le<de;){$+=i;for(var Re=-1,pe=a[$];++Re<X;){var Oe=z[Re],Fe=Oe.iteratee,gt=Oe.type,Un=Fe(pe);if(gt==re)pe=Un;else if(!Un){if(gt==Z)continue e;break e}}he[le++]=pe}return he}Pe.prototype=Oa(bi.prototype),Pe.prototype.constructor=Pe;function Xr(a){var i=-1,o=a==null?0:a.length;for(this.clear();++i<o;){var c=a[i];this.set(c[0],c[1])}}function T_(){this.__data__=dl?dl(null):{},this.size=0}function N_(a){var i=this.has(a)&&delete this.__data__[a];return this.size-=i?1:0,i}function A_(a){var i=this.__data__;if(dl){var o=i[a];return o===m?t:o}return Ce.call(i,a)?i[a]:t}function R_(a){var i=this.__data__;return dl?i[a]!==t:Ce.call(i,a)}function S_(a,i){var o=this.__data__;return this.size+=this.has(a)?0:1,o[a]=dl&&i===t?m:i,this}Xr.prototype.clear=T_,Xr.prototype.delete=N_,Xr.prototype.get=A_,Xr.prototype.has=R_,Xr.prototype.set=S_;function mr(a){var i=-1,o=a==null?0:a.length;for(this.clear();++i<o;){var c=a[i];this.set(c[0],c[1])}}function w_(){this.__data__=[],this.size=0}function O_(a){var i=this.__data__,o=ki(i,a);if(o<0)return!1;var c=i.length-1;return o==c?i.pop():vi.call(i,o,1),--this.size,!0}function D_(a){var i=this.__data__,o=ki(i,a);return o<0?t:i[o][1]}function P_(a){return ki(this.__data__,a)>-1}function I_(a,i){var o=this.__data__,c=ki(o,a);return c<0?(++this.size,o.push([a,i])):o[c][1]=i,this}mr.prototype.clear=w_,mr.prototype.delete=O_,mr.prototype.get=D_,mr.prototype.has=P_,mr.prototype.set=I_;function fr(a){var i=-1,o=a==null?0:a.length;for(this.clear();++i<o;){var c=a[i];this.set(c[0],c[1])}}function F_(){this.size=0,this.__data__={hash:new Xr,map:new(ol||mr),string:new Xr}}function L_(a){var i=Li(this,a).delete(a);return this.size-=i?1:0,i}function M_(a){return Li(this,a).get(a)}function x_(a){return Li(this,a).has(a)}function K_(a,i){var o=Li(this,a),c=o.size;return o.set(a,i),this.size+=o.size==c?0:1,this}fr.prototype.clear=F_,fr.prototype.delete=L_,fr.prototype.get=M_,fr.prototype.has=x_,fr.prototype.set=K_;function Zr(a){var i=-1,o=a==null?0:a.length;for(this.__data__=new fr;++i<o;)this.add(a[i])}function V_(a){return this.__data__.set(a,m),this}function B_(a){return this.__data__.has(a)}Zr.prototype.add=Zr.prototype.push=V_,Zr.prototype.has=B_;function Mt(a){var i=this.__data__=new mr(a);this.size=i.size}function G_(){this.__data__=new mr,this.size=0}function j_(a){var i=this.__data__,o=i.delete(a);return this.size=i.size,o}function C_(a){return this.__data__.get(a)}function U_(a){return this.__data__.has(a)}function q_(a,i){var o=this.__data__;if(o instanceof mr){var c=o.__data__;if(!ol||c.length<l-1)return c.push([a,i]),this.size=++o.size,this;o=this.__data__=new fr(c)}return o.set(a,i),this.size=o.size,this}Mt.prototype.clear=G_,Mt.prototype.delete=j_,Mt.prototype.get=C_,Mt.prototype.has=U_,Mt.prototype.set=q_;function Lc(a,i){var o=be(a),c=!o&&ra(a),v=!o&&!c&&Vr(a),b=!o&&!c&&!v&&Fa(a),D=o||c||v||b,I=D?co(a.length,e_):[],x=I.length;for(var $ in a)(i||Ce.call(a,$))&&!(D&&($=="length"||v&&($=="offset"||$=="parent")||b&&($=="buffer"||$=="byteLength"||$=="byteOffset")||pr($,x)))&&I.push($);return I}function Mc(a){var i=a.length;return i?a[wo(0,i-1)]:t}function H_(a,i){return Mi(Zn(a),Qr(i,0,a.length))}function Y_(a){return Mi(Zn(a))}function _o(a,i,o){(o!==t&&!xt(a[i],o)||o===t&&!(i in a))&&gr(a,i,o)}function ml(a,i,o){var c=a[i];(!(Ce.call(a,i)&&xt(c,o))||o===t&&!(i in a))&&gr(a,i,o)}function ki(a,i){for(var o=a.length;o--;)if(xt(a[o][0],i))return o;return-1}function $_(a,i,o,c){return Lr(a,function(v,b,D){i(c,v,o(v),D)}),c}function xc(a,i){return a&&$t(i,Sn(i),a)}function W_(a,i){return a&&$t(i,et(i),a)}function gr(a,i,o){i=="__proto__"&&hi?hi(a,i,{configurable:!0,enumerable:!0,value:o,writable:!0}):a[i]=o}function Eo(a,i){for(var o=-1,c=i.length,v=U(c),b=a==null;++o<c;)v[o]=b?t:Qo(a,i[o]);return v}function Qr(a,i,o){return a===a&&(o!==t&&(a=a<=o?a:o),i!==t&&(a=a>=i?a:i)),a}function Rt(a,i,o,c,v,b){var D,I=i&h,x=i&p,$=i&y;if(o&&(D=v?o(a,c,v,b):o(a)),D!==t)return D;if(!an(a))return a;var z=be(a);if(z){if(D=xE(a),!I)return Zn(a,D)}else{var X=Kn(a),le=X==Dn||X==Wn;if(Vr(a))return im(a,I);if(X==mn||X==ve||le&&!v){if(D=x||le?{}:Am(a),!I)return x?AE(a,W_(D,a)):NE(a,xc(D,a))}else{if(!Je[X])return v?a:{};D=KE(a,X,I)}}b||(b=new Mt);var de=b.get(a);if(de)return de;b.set(a,D),ef(a)?a.forEach(function(pe){D.add(Rt(pe,i,o,pe,a,b))}):Zm(a)&&a.forEach(function(pe,Oe){D.set(Oe,Rt(pe,i,o,Oe,a,b))});var he=$?x?Bo:Vo:x?et:Sn,Re=z?t:he(a);return Tt(Re||a,function(pe,Oe){Re&&(Oe=pe,pe=a[Oe]),ml(D,Oe,Rt(pe,i,o,Oe,a,b))}),D}function z_(a){var i=Sn(a);return function(o){return Kc(o,a,i)}}function Kc(a,i,o){var c=o.length;if(a==null)return!c;for(a=We(a);c--;){var v=o[c],b=i[v],D=a[v];if(D===t&&!(v in a)||!b(D))return!1}return!0}function Vc(a,i,o){if(typeof a!="function")throw new Nt(u);return El(function(){a.apply(t,o)},i)}function fl(a,i,o,c){var v=-1,b=li,D=!0,I=a.length,x=[],$=i.length;if(!I)return x;o&&(i=tn(i,ct(o))),c?(b=ao,D=!1):i.length>=l&&(b=il,D=!1,i=new Zr(i));e:for(;++v<I;){var z=a[v],X=o==null?z:o(z);if(z=c||z!==0?z:0,D&&X===X){for(var le=$;le--;)if(i[le]===X)continue e;x.push(z)}else b(i,X,c)||x.push(z)}return x}var Lr=cm(Yt),Bc=cm(bo,!0);function J_(a,i){var o=!0;return Lr(a,function(c,v,b){return o=!!i(c,v,b),o}),o}function Ti(a,i,o){for(var c=-1,v=a.length;++c<v;){var b=a[c],D=i(b);if(D!=null&&(I===t?D===D&&!ft(D):o(D,I)))var I=D,x=b}return x}function X_(a,i,o,c){var v=a.length;for(o=Ae(o),o<0&&(o=-o>v?0:v+o),c=c===t||c>v?v:Ae(c),c<0&&(c+=v),c=o>c?0:tf(c);o<c;)a[o++]=i;return a}function Gc(a,i){var o=[];return Lr(a,function(c,v,b){i(c,v,b)&&o.push(c)}),o}function In(a,i,o,c,v){var b=-1,D=a.length;for(o||(o=BE),v||(v=[]);++b<D;){var I=a[b];i>0&&o(I)?i>1?In(I,i-1,o,c,v):Pr(v,I):c||(v[v.length]=I)}return v}var yo=mm(),jc=mm(!0);function Yt(a,i){return a&&yo(a,i,Sn)}function bo(a,i){return a&&jc(a,i,Sn)}function Ni(a,i){return Dr(i,function(o){return _r(a[o])})}function ea(a,i){i=xr(i,a);for(var o=0,c=i.length;a!=null&&o<c;)a=a[Wt(i[o++])];return o&&o==c?a:t}function Cc(a,i,o){var c=i(a);return be(a)?c:Pr(c,o(a))}function jn(a){return a==null?a===t?te:ot:Jr&&Jr in We(a)?FE(a):YE(a)}function ko(a,i){return a>i}function Z_(a,i){return a!=null&&Ce.call(a,i)}function Q_(a,i){return a!=null&&i in We(a)}function eE(a,i,o){return a>=xn(i,o)&&a<Tn(i,o)}function To(a,i,o){for(var c=o?ao:li,v=a[0].length,b=a.length,D=b,I=U(b),x=1/0,$=[];D--;){var z=a[D];D&&i&&(z=tn(z,ct(i))),x=xn(z.length,x),I[D]=!o&&(i||v>=120&&z.length>=120)?new Zr(D&&z):t}z=a[0];var X=-1,le=I[0];e:for(;++X<v&&$.length<x;){var de=z[X],he=i?i(de):de;if(de=o||de!==0?de:0,!(le?il(le,he):c($,he,o))){for(D=b;--D;){var Re=I[D];if(!(Re?il(Re,he):c(a[D],he,o)))continue e}le&&le.push(he),$.push(de)}}return $}function nE(a,i,o,c){return Yt(a,function(v,b,D){i(c,o(v),b,D)}),c}function gl(a,i,o){i=xr(i,a),a=Om(a,i);var c=a==null?a:a[Wt(wt(i))];return c==null?t:dt(c,a,o)}function Uc(a){return un(a)&&jn(a)==ve}function tE(a){return un(a)&&jn(a)==we}function rE(a){return un(a)&&jn(a)==En}function vl(a,i,o,c,v){return a===i?!0:a==null||i==null||!un(a)&&!un(i)?a!==a&&i!==i:aE(a,i,o,c,vl,v)}function aE(a,i,o,c,v,b){var D=be(a),I=be(i),x=D?_e:Kn(a),$=I?_e:Kn(i);x=x==ve?mn:x,$=$==ve?mn:$;var z=x==mn,X=$==mn,le=x==$;if(le&&Vr(a)){if(!Vr(i))return!1;D=!0,z=!1}if(le&&!z)return b||(b=new Mt),D||Fa(a)?km(a,i,o,c,v,b):PE(a,i,x,o,c,v,b);if(!(o&w)){var de=z&&Ce.call(a,"__wrapped__"),he=X&&Ce.call(i,"__wrapped__");if(de||he){var Re=de?a.value():a,pe=he?i.value():i;return b||(b=new Mt),v(Re,pe,o,c,b)}}return le?(b||(b=new Mt),IE(a,i,o,c,v,b)):!1}function lE(a){return un(a)&&Kn(a)==$e}function No(a,i,o,c){var v=o.length,b=v,D=!c;if(a==null)return!b;for(a=We(a);v--;){var I=o[v];if(D&&I[2]?I[1]!==a[I[0]]:!(I[0]in a))return!1}for(;++v<b;){I=o[v];var x=I[0],$=a[x],z=I[1];if(D&&I[2]){if($===t&&!(x in a))return!1}else{var X=new Mt;if(c)var le=c($,z,x,a,i,X);if(!(le===t?vl(z,$,w|S,c,X):le))return!1}}return!0}function qc(a){if(!an(a)||jE(a))return!1;var i=_r(a)?l_:zh;return i.test(ta(a))}function iE(a){return un(a)&&jn(a)==P}function sE(a){return un(a)&&Kn(a)==B}function oE(a){return un(a)&&ji(a.length)&&!!en[jn(a)]}function Hc(a){return typeof a=="function"?a:a==null?nt:typeof a=="object"?be(a)?Wc(a[0],a[1]):$c(a):gf(a)}function Ao(a){if(!_l(a))return c_(a);var i=[];for(var o in We(a))Ce.call(a,o)&&o!="constructor"&&i.push(o);return i}function uE(a){if(!an(a))return HE(a);var i=_l(a),o=[];for(var c in a)c=="constructor"&&(i||!Ce.call(a,c))||o.push(c);return o}function Ro(a,i){return a<i}function Yc(a,i){var o=-1,c=Qn(a)?U(a.length):[];return Lr(a,function(v,b,D){c[++o]=i(v,b,D)}),c}function $c(a){var i=jo(a);return i.length==1&&i[0][2]?Sm(i[0][0],i[0][1]):function(o){return o===a||No(o,a,i)}}function Wc(a,i){return Uo(a)&&Rm(i)?Sm(Wt(a),i):function(o){var c=Qo(o,a);return c===t&&c===i?eu(o,a):vl(i,c,w|S)}}function Ai(a,i,o,c,v){a!==i&&yo(i,function(b,D){if(v||(v=new Mt),an(b))dE(a,i,D,o,Ai,c,v);else{var I=c?c(Ho(a,D),b,D+"",a,i,v):t;I===t&&(I=b),_o(a,D,I)}},et)}function dE(a,i,o,c,v,b,D){var I=Ho(a,o),x=Ho(i,o),$=D.get(x);if($){_o(a,o,$);return}var z=b?b(I,x,o+"",a,i,D):t,X=z===t;if(X){var le=be(x),de=!le&&Vr(x),he=!le&&!de&&Fa(x);z=x,le||de||he?be(I)?z=I:fn(I)?z=Zn(I):de?(X=!1,z=im(x,!0)):he?(X=!1,z=sm(x,!0)):z=[]:yl(x)||ra(x)?(z=I,ra(I)?z=rf(I):(!an(I)||_r(I))&&(z=Am(x))):X=!1}X&&(D.set(x,z),v(z,x,c,b,D),D.delete(x)),_o(a,o,z)}function zc(a,i){var o=a.length;if(o)return i+=i<0?o:0,pr(i,o)?a[i]:t}function Jc(a,i,o){i.length?i=tn(i,function(b){return be(b)?function(D){return ea(D,b.length===1?b[0]:b)}:b}):i=[nt];var c=-1;i=tn(i,ct(ge()));var v=Yc(a,function(b,D,I){var x=tn(i,function($){return $(b)});return{criteria:x,index:++c,value:b}});return Kp(v,function(b,D){return TE(b,D,o)})}function cE(a,i){return Xc(a,i,function(o,c){return eu(a,c)})}function Xc(a,i,o){for(var c=-1,v=i.length,b={};++c<v;){var D=i[c],I=ea(a,D);o(I,D)&&hl(b,xr(D,a),I)}return b}function mE(a){return function(i){return ea(i,a)}}function So(a,i,o,c){var v=c?xp:ka,b=-1,D=i.length,I=a;for(a===i&&(i=Zn(i)),o&&(I=tn(a,ct(o)));++b<D;)for(var x=0,$=i[b],z=o?o($):$;(x=v(I,z,x,c))>-1;)I!==a&&vi.call(I,x,1),vi.call(a,x,1);return a}function Zc(a,i){for(var o=a?i.length:0,c=o-1;o--;){var v=i[o];if(o==c||v!==b){var b=v;pr(v)?vi.call(a,v,1):Po(a,v)}}return a}function wo(a,i){return a+_i(Ic()*(i-a+1))}function fE(a,i,o,c){for(var v=-1,b=Tn(pi((i-a)/(o||1)),0),D=U(b);b--;)D[c?b:++v]=a,a+=o;return D}function Oo(a,i){var o="";if(!a||i<1||i>ee)return o;do i%2&&(o+=a),i=_i(i/2),i&&(a+=a);while(i);return o}function Se(a,i){return Yo(wm(a,i,nt),a+"")}function gE(a){return Mc(La(a))}function vE(a,i){var o=La(a);return Mi(o,Qr(i,0,o.length))}function hl(a,i,o,c){if(!an(a))return a;i=xr(i,a);for(var v=-1,b=i.length,D=b-1,I=a;I!=null&&++v<b;){var x=Wt(i[v]),$=o;if(x==="__proto__"||x==="constructor"||x==="prototype")return a;if(v!=D){var z=I[x];$=c?c(z,x,I):t,$===t&&($=an(z)?z:pr(i[v+1])?[]:{})}ml(I,x,$),I=I[x]}return a}var Qc=Ei?function(a,i){return Ei.set(a,i),a}:nt,hE=hi?function(a,i){return hi(a,"toString",{configurable:!0,enumerable:!1,value:tu(i),writable:!0})}:nt;function pE(a){return Mi(La(a))}function St(a,i,o){var c=-1,v=a.length;i<0&&(i=-i>v?0:v+i),o=o>v?v:o,o<0&&(o+=v),v=i>o?0:o-i>>>0,i>>>=0;for(var b=U(v);++c<v;)b[c]=a[c+i];return b}function _E(a,i){var o;return Lr(a,function(c,v,b){return o=i(c,v,b),!o}),!!o}function Ri(a,i,o){var c=0,v=a==null?c:a.length;if(typeof i=="number"&&i===i&&v<=on){for(;c<v;){var b=c+v>>>1,D=a[b];D!==null&&!ft(D)&&(o?D<=i:D<i)?c=b+1:v=b}return v}return Do(a,i,nt,o)}function Do(a,i,o,c){var v=0,b=a==null?0:a.length;if(b===0)return 0;i=o(i);for(var D=i!==i,I=i===null,x=ft(i),$=i===t;v<b;){var z=_i((v+b)/2),X=o(a[z]),le=X!==t,de=X===null,he=X===X,Re=ft(X);if(D)var pe=c||he;else $?pe=he&&(c||le):I?pe=he&&le&&(c||!de):x?pe=he&&le&&!de&&(c||!Re):de||Re?pe=!1:pe=c?X<=i:X<i;pe?v=z+1:b=z}return xn(b,rn)}function em(a,i){for(var o=-1,c=a.length,v=0,b=[];++o<c;){var D=a[o],I=i?i(D):D;if(!o||!xt(I,x)){var x=I;b[v++]=D===0?0:D}}return b}function nm(a){return typeof a=="number"?a:ft(a)?Ne:+a}function mt(a){if(typeof a=="string")return a;if(be(a))return tn(a,mt)+"";if(ft(a))return Fc?Fc.call(a):"";var i=a+"";return i=="0"&&1/a==-oe?"-0":i}function Mr(a,i,o){var c=-1,v=li,b=a.length,D=!0,I=[],x=I;if(o)D=!1,v=ao;else if(b>=l){var $=i?null:OE(a);if($)return si($);D=!1,v=il,x=new Zr}else x=i?[]:I;e:for(;++c<b;){var z=a[c],X=i?i(z):z;if(z=o||z!==0?z:0,D&&X===X){for(var le=x.length;le--;)if(x[le]===X)continue e;i&&x.push(X),I.push(z)}else v(x,X,o)||(x!==I&&x.push(X),I.push(z))}return I}function Po(a,i){return i=xr(i,a),a=Om(a,i),a==null||delete a[Wt(wt(i))]}function tm(a,i,o,c){return hl(a,i,o(ea(a,i)),c)}function Si(a,i,o,c){for(var v=a.length,b=c?v:-1;(c?b--:++b<v)&&i(a[b],b,a););return o?St(a,c?0:b,c?b+1:v):St(a,c?b+1:0,c?v:b)}function rm(a,i){var o=a;return o instanceof Pe&&(o=o.value()),lo(i,function(c,v){return v.func.apply(v.thisArg,Pr([c],v.args))},o)}function Io(a,i,o){var c=a.length;if(c<2)return c?Mr(a[0]):[];for(var v=-1,b=U(c);++v<c;)for(var D=a[v],I=-1;++I<c;)I!=v&&(b[v]=fl(b[v]||D,a[I],i,o));return Mr(In(b,1),i,o)}function am(a,i,o){for(var c=-1,v=a.length,b=i.length,D={};++c<v;){var I=c<b?i[c]:t;o(D,a[c],I)}return D}function Fo(a){return fn(a)?a:[]}function Lo(a){return typeof a=="function"?a:nt}function xr(a,i){return be(a)?a:Uo(a,i)?[a]:Fm(Ge(a))}var EE=Se;function Kr(a,i,o){var c=a.length;return o=o===t?c:o,!i&&o>=c?a:St(a,i,o)}var lm=i_||function(a){return Pn.clearTimeout(a)};function im(a,i){if(i)return a.slice();var o=a.length,c=Sc?Sc(o):new a.constructor(o);return a.copy(c),c}function Mo(a){var i=new a.constructor(a.byteLength);return new fi(i).set(new fi(a)),i}function yE(a,i){var o=i?Mo(a.buffer):a.buffer;return new a.constructor(o,a.byteOffset,a.byteLength)}function bE(a){var i=new a.constructor(a.source,Ud.exec(a));return i.lastIndex=a.lastIndex,i}function kE(a){return cl?We(cl.call(a)):{}}function sm(a,i){var o=i?Mo(a.buffer):a.buffer;return new a.constructor(o,a.byteOffset,a.length)}function om(a,i){if(a!==i){var o=a!==t,c=a===null,v=a===a,b=ft(a),D=i!==t,I=i===null,x=i===i,$=ft(i);if(!I&&!$&&!b&&a>i||b&&D&&x&&!I&&!$||c&&D&&x||!o&&x||!v)return 1;if(!c&&!b&&!$&&a<i||$&&o&&v&&!c&&!b||I&&o&&v||!D&&v||!x)return-1}return 0}function TE(a,i,o){for(var c=-1,v=a.criteria,b=i.criteria,D=v.length,I=o.length;++c<D;){var x=om(v[c],b[c]);if(x){if(c>=I)return x;var $=o[c];return x*($=="desc"?-1:1)}}return a.index-i.index}function um(a,i,o,c){for(var v=-1,b=a.length,D=o.length,I=-1,x=i.length,$=Tn(b-D,0),z=U(x+$),X=!c;++I<x;)z[I]=i[I];for(;++v<D;)(X||v<b)&&(z[o[v]]=a[v]);for(;$--;)z[I++]=a[v++];return z}function dm(a,i,o,c){for(var v=-1,b=a.length,D=-1,I=o.length,x=-1,$=i.length,z=Tn(b-I,0),X=U(z+$),le=!c;++v<z;)X[v]=a[v];for(var de=v;++x<$;)X[de+x]=i[x];for(;++D<I;)(le||v<b)&&(X[de+o[D]]=a[v++]);return X}function Zn(a,i){var o=-1,c=a.length;for(i||(i=U(c));++o<c;)i[o]=a[o];return i}function $t(a,i,o,c){var v=!o;o||(o={});for(var b=-1,D=i.length;++b<D;){var I=i[b],x=c?c(o[I],a[I],I,o,a):t;x===t&&(x=a[I]),v?gr(o,I,x):ml(o,I,x)}return o}function NE(a,i){return $t(a,Co(a),i)}function AE(a,i){return $t(a,Tm(a),i)}function wi(a,i){return function(o,c){var v=be(o)?Dp:$_,b=i?i():{};return v(o,a,ge(c,2),b)}}function Da(a){return Se(function(i,o){var c=-1,v=o.length,b=v>1?o[v-1]:t,D=v>2?o[2]:t;for(b=a.length>3&&typeof b=="function"?(v--,b):t,D&&Cn(o[0],o[1],D)&&(b=v<3?t:b,v=1),i=We(i);++c<v;){var I=o[c];I&&a(i,I,c,b)}return i})}function cm(a,i){return function(o,c){if(o==null)return o;if(!Qn(o))return a(o,c);for(var v=o.length,b=i?v:-1,D=We(o);(i?b--:++b<v)&&c(D[b],b,D)!==!1;);return o}}function mm(a){return function(i,o,c){for(var v=-1,b=We(i),D=c(i),I=D.length;I--;){var x=D[a?I:++v];if(o(b[x],x,b)===!1)break}return i}}function RE(a,i,o){var c=i&E,v=pl(a);function b(){var D=this&&this!==Pn&&this instanceof b?v:a;return D.apply(c?o:this,arguments)}return b}function fm(a){return function(i){i=Ge(i);var o=Ta(i)?Lt(i):t,c=o?o[0]:i.charAt(0),v=o?Kr(o,1).join(""):i.slice(1);return c[a]()+v}}function Pa(a){return function(i){return lo(mf(cf(i).replace(hp,"")),a,"")}}function pl(a){return function(){var i=arguments;switch(i.length){case 0:return new a;case 1:return new a(i[0]);case 2:return new a(i[0],i[1]);case 3:return new a(i[0],i[1],i[2]);case 4:return new a(i[0],i[1],i[2],i[3]);case 5:return new a(i[0],i[1],i[2],i[3],i[4]);case 6:return new a(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new a(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var o=Oa(a.prototype),c=a.apply(o,i);return an(c)?c:o}}function SE(a,i,o){var c=pl(a);function v(){for(var b=arguments.length,D=U(b),I=b,x=Ia(v);I--;)D[I]=arguments[I];var $=b<3&&D[0]!==x&&D[b-1]!==x?[]:Ir(D,x);if(b-=$.length,b<o)return _m(a,i,Oi,v.placeholder,t,D,$,t,t,o-b);var z=this&&this!==Pn&&this instanceof v?c:a;return dt(z,this,D)}return v}function gm(a){return function(i,o,c){var v=We(i);if(!Qn(i)){var b=ge(o,3);i=Sn(i),o=function(I){return b(v[I],I,v)}}var D=a(i,o,c);return D>-1?v[b?i[D]:D]:t}}function vm(a){return hr(function(i){var o=i.length,c=o,v=At.prototype.thru;for(a&&i.reverse();c--;){var b=i[c];if(typeof b!="function")throw new Nt(u);if(v&&!D&&Fi(b)=="wrapper")var D=new At([],!0)}for(c=D?c:o;++c<o;){b=i[c];var I=Fi(b),x=I=="wrapper"?Go(b):t;x&&qo(x[0])&&x[1]==(L|N|T|V)&&!x[4].length&&x[9]==1?D=D[Fi(x[0])].apply(D,x[3]):D=b.length==1&&qo(b)?D[I]():D.thru(b)}return function(){var $=arguments,z=$[0];if(D&&$.length==1&&be(z))return D.plant(z).value();for(var X=0,le=o?i[X].apply(this,$):z;++X<o;)le=i[X].call(this,le);return le}})}function Oi(a,i,o,c,v,b,D,I,x,$){var z=i&L,X=i&E,le=i&A,de=i&(N|F),he=i&C,Re=le?t:pl(a);function pe(){for(var Oe=arguments.length,Fe=U(Oe),gt=Oe;gt--;)Fe[gt]=arguments[gt];if(de)var Un=Ia(pe),vt=Bp(Fe,Un);if(c&&(Fe=um(Fe,c,v,de)),b&&(Fe=dm(Fe,b,D,de)),Oe-=vt,de&&Oe<$){var gn=Ir(Fe,Un);return _m(a,i,Oi,pe.placeholder,o,Fe,gn,I,x,$-Oe)}var Kt=X?o:this,yr=le?Kt[a]:a;return Oe=Fe.length,I?Fe=$E(Fe,I):he&&Oe>1&&Fe.reverse(),z&&x<Oe&&(Fe.length=x),this&&this!==Pn&&this instanceof pe&&(yr=Re||pl(yr)),yr.apply(Kt,Fe)}return pe}function hm(a,i){return function(o,c){return nE(o,a,i(c),{})}}function Di(a,i){return function(o,c){var v;if(o===t&&c===t)return i;if(o!==t&&(v=o),c!==t){if(v===t)return c;typeof o=="string"||typeof c=="string"?(o=mt(o),c=mt(c)):(o=nm(o),c=nm(c)),v=a(o,c)}return v}}function xo(a){return hr(function(i){return i=tn(i,ct(ge())),Se(function(o){var c=this;return a(i,function(v){return dt(v,c,o)})})})}function Pi(a,i){i=i===t?" ":mt(i);var o=i.length;if(o<2)return o?Oo(i,a):i;var c=Oo(i,pi(a/Na(i)));return Ta(i)?Kr(Lt(c),0,a).join(""):c.slice(0,a)}function wE(a,i,o,c){var v=i&E,b=pl(a);function D(){for(var I=-1,x=arguments.length,$=-1,z=c.length,X=U(z+x),le=this&&this!==Pn&&this instanceof D?b:a;++$<z;)X[$]=c[$];for(;x--;)X[$++]=arguments[++I];return dt(le,v?o:this,X)}return D}function pm(a){return function(i,o,c){return c&&typeof c!="number"&&Cn(i,o,c)&&(o=c=t),i=Er(i),o===t?(o=i,i=0):o=Er(o),c=c===t?i<o?1:-1:Er(c),fE(i,o,c,a)}}function Ii(a){return function(i,o){return typeof i=="string"&&typeof o=="string"||(i=Ot(i),o=Ot(o)),a(i,o)}}function _m(a,i,o,c,v,b,D,I,x,$){var z=i&N,X=z?D:t,le=z?t:D,de=z?b:t,he=z?t:b;i|=z?T:K,i&=~(z?K:T),i&O||(i&=-4);var Re=[a,i,v,de,X,he,le,I,x,$],pe=o.apply(t,Re);return qo(a)&&Dm(pe,Re),pe.placeholder=c,Pm(pe,a,i)}function Ko(a){var i=kn[a];return function(o,c){if(o=Ot(o),c=c==null?0:xn(Ae(c),292),c&&Pc(o)){var v=(Ge(o)+"e").split("e"),b=i(v[0]+"e"+(+v[1]+c));return v=(Ge(b)+"e").split("e"),+(v[0]+"e"+(+v[1]-c))}return i(o)}}var OE=Sa&&1/si(new Sa([,-0]))[1]==oe?function(a){return new Sa(a)}:lu;function Em(a){return function(i){var o=Kn(i);return o==$e?fo(i):o==B?Yp(i):Vp(i,a(i))}}function vr(a,i,o,c,v,b,D,I){var x=i&A;if(!x&&typeof a!="function")throw new Nt(u);var $=c?c.length:0;if($||(i&=-97,c=v=t),D=D===t?D:Tn(Ae(D),0),I=I===t?I:Ae(I),$-=v?v.length:0,i&K){var z=c,X=v;c=v=t}var le=x?t:Go(a),de=[a,i,o,c,v,z,X,b,D,I];if(le&&qE(de,le),a=de[0],i=de[1],o=de[2],c=de[3],v=de[4],I=de[9]=de[9]===t?x?0:a.length:Tn(de[9]-$,0),!I&&i&(N|F)&&(i&=-25),!i||i==E)var he=RE(a,i,o);else i==N||i==F?he=SE(a,i,I):(i==T||i==(E|T))&&!v.length?he=wE(a,i,o,c):he=Oi.apply(t,de);var Re=le?Qc:Dm;return Pm(Re(he,de),a,i)}function ym(a,i,o,c){return a===t||xt(a,Ra[o])&&!Ce.call(c,o)?i:a}function bm(a,i,o,c,v,b){return an(a)&&an(i)&&(b.set(i,a),Ai(a,i,t,bm,b),b.delete(i)),a}function DE(a){return yl(a)?t:a}function km(a,i,o,c,v,b){var D=o&w,I=a.length,x=i.length;if(I!=x&&!(D&&x>I))return!1;var $=b.get(a),z=b.get(i);if($&&z)return $==i&&z==a;var X=-1,le=!0,de=o&S?new Zr:t;for(b.set(a,i),b.set(i,a);++X<I;){var he=a[X],Re=i[X];if(c)var pe=D?c(Re,he,X,i,a,b):c(he,Re,X,a,i,b);if(pe!==t){if(pe)continue;le=!1;break}if(de){if(!io(i,function(Oe,Fe){if(!il(de,Fe)&&(he===Oe||v(he,Oe,o,c,b)))return de.push(Fe)})){le=!1;break}}else if(!(he===Re||v(he,Re,o,c,b))){le=!1;break}}return b.delete(a),b.delete(i),le}function PE(a,i,o,c,v,b,D){switch(o){case Ie:if(a.byteLength!=i.byteLength||a.byteOffset!=i.byteOffset)return!1;a=a.buffer,i=i.buffer;case we:return!(a.byteLength!=i.byteLength||!b(new fi(a),new fi(i)));case Qe:case En:case yn:return xt(+a,+i);case Mn:return a.name==i.name&&a.message==i.message;case P:case H:return a==i+"";case $e:var I=fo;case B:var x=c&w;if(I||(I=si),a.size!=i.size&&!x)return!1;var $=D.get(a);if($)return $==i;c|=S,D.set(a,i);var z=km(I(a),I(i),c,v,b,D);return D.delete(a),z;case ae:if(cl)return cl.call(a)==cl.call(i)}return!1}function IE(a,i,o,c,v,b){var D=o&w,I=Vo(a),x=I.length,$=Vo(i),z=$.length;if(x!=z&&!D)return!1;for(var X=x;X--;){var le=I[X];if(!(D?le in i:Ce.call(i,le)))return!1}var de=b.get(a),he=b.get(i);if(de&&he)return de==i&&he==a;var Re=!0;b.set(a,i),b.set(i,a);for(var pe=D;++X<x;){le=I[X];var Oe=a[le],Fe=i[le];if(c)var gt=D?c(Fe,Oe,le,i,a,b):c(Oe,Fe,le,a,i,b);if(!(gt===t?Oe===Fe||v(Oe,Fe,o,c,b):gt)){Re=!1;break}pe||(pe=le=="constructor")}if(Re&&!pe){var Un=a.constructor,vt=i.constructor;Un!=vt&&"constructor"in a&&"constructor"in i&&!(typeof Un=="function"&&Un instanceof Un&&typeof vt=="function"&&vt instanceof vt)&&(Re=!1)}return b.delete(a),b.delete(i),Re}function hr(a){return Yo(wm(a,t,Km),a+"")}function Vo(a){return Cc(a,Sn,Co)}function Bo(a){return Cc(a,et,Tm)}var Go=Ei?function(a){return Ei.get(a)}:lu;function Fi(a){for(var i=a.name+"",o=wa[i],c=Ce.call(wa,i)?o.length:0;c--;){var v=o[c],b=v.func;if(b==null||b==a)return v.name}return i}function Ia(a){var i=Ce.call(_,"placeholder")?_:a;return i.placeholder}function ge(){var a=_.iteratee||ru;return a=a===ru?Hc:a,arguments.length?a(arguments[0],arguments[1]):a}function Li(a,i){var o=a.__data__;return GE(i)?o[typeof i=="string"?"string":"hash"]:o.map}function jo(a){for(var i=Sn(a),o=i.length;o--;){var c=i[o],v=a[c];i[o]=[c,v,Rm(v)]}return i}function na(a,i){var o=Up(a,i);return qc(o)?o:t}function FE(a){var i=Ce.call(a,Jr),o=a[Jr];try{a[Jr]=t;var c=!0}catch{}var v=ci.call(a);return c&&(i?a[Jr]=o:delete a[Jr]),v}var Co=vo?function(a){return a==null?[]:(a=We(a),Dr(vo(a),function(i){return Oc.call(a,i)}))}:iu,Tm=vo?function(a){for(var i=[];a;)Pr(i,Co(a)),a=gi(a);return i}:iu,Kn=jn;(ho&&Kn(new ho(new ArrayBuffer(1)))!=Ie||ol&&Kn(new ol)!=$e||po&&Kn(po.resolve())!=ut||Sa&&Kn(new Sa)!=B||ul&&Kn(new ul)!=Q)&&(Kn=function(a){var i=jn(a),o=i==mn?a.constructor:t,c=o?ta(o):"";if(c)switch(c){case v_:return Ie;case h_:return $e;case p_:return ut;case __:return B;case E_:return Q}return i});function LE(a,i,o){for(var c=-1,v=o.length;++c<v;){var b=o[c],D=b.size;switch(b.type){case"drop":a+=D;break;case"dropRight":i-=D;break;case"take":i=xn(i,a+D);break;case"takeRight":a=Tn(a,i-D);break}}return{start:a,end:i}}function ME(a){var i=a.match(jh);return i?i[1].split(Ch):[]}function Nm(a,i,o){i=xr(i,a);for(var c=-1,v=i.length,b=!1;++c<v;){var D=Wt(i[c]);if(!(b=a!=null&&o(a,D)))break;a=a[D]}return b||++c!=v?b:(v=a==null?0:a.length,!!v&&ji(v)&&pr(D,v)&&(be(a)||ra(a)))}function xE(a){var i=a.length,o=new a.constructor(i);return i&&typeof a[0]=="string"&&Ce.call(a,"index")&&(o.index=a.index,o.input=a.input),o}function Am(a){return typeof a.constructor=="function"&&!_l(a)?Oa(gi(a)):{}}function KE(a,i,o){var c=a.constructor;switch(i){case we:return Mo(a);case Qe:case En:return new c(+a);case Ie:return yE(a,o);case An:case Ht:case Jn:case Hr:case ur:case dr:case Yr:case cr:case $r:return sm(a,o);case $e:return new c;case yn:case H:return new c(a);case P:return bE(a);case B:return new c;case ae:return kE(a)}}function VE(a,i){var o=i.length;if(!o)return a;var c=o-1;return i[c]=(o>1?"& ":"")+i[c],i=i.join(o>2?", ":" "),a.replace(Gh,`{
/* [wrapped with `+i+`] */
`)}function BE(a){return be(a)||ra(a)||!!(Dc&&a&&a[Dc])}function pr(a,i){var o=typeof a;return i=i??ee,!!i&&(o=="number"||o!="symbol"&&Xh.test(a))&&a>-1&&a%1==0&&a<i}function Cn(a,i,o){if(!an(o))return!1;var c=typeof i;return(c=="number"?Qn(o)&&pr(i,o.length):c=="string"&&i in o)?xt(o[i],a):!1}function Uo(a,i){if(be(a))return!1;var o=typeof a;return o=="number"||o=="symbol"||o=="boolean"||a==null||ft(a)?!0:zs.test(a)||!Ws.test(a)||i!=null&&a in We(i)}function GE(a){var i=typeof a;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?a!=="__proto__":a===null}function qo(a){var i=Fi(a),o=_[i];if(typeof o!="function"||!(i in Pe.prototype))return!1;if(a===o)return!0;var c=Go(o);return!!c&&a===c[0]}function jE(a){return!!Rc&&Rc in a}var CE=ui?_r:su;function _l(a){var i=a&&a.constructor,o=typeof i=="function"&&i.prototype||Ra;return a===o}function Rm(a){return a===a&&!an(a)}function Sm(a,i){return function(o){return o==null?!1:o[a]===i&&(i!==t||a in We(o))}}function UE(a){var i=Bi(a,function(c){return o.size===g&&o.clear(),c}),o=i.cache;return i}function qE(a,i){var o=a[1],c=i[1],v=o|c,b=v<(E|A|L),D=c==L&&o==N||c==L&&o==V&&a[7].length<=i[8]||c==(L|V)&&i[7].length<=i[8]&&o==N;if(!(b||D))return a;c&E&&(a[2]=i[2],v|=o&E?0:O);var I=i[3];if(I){var x=a[3];a[3]=x?um(x,I,i[4]):I,a[4]=x?Ir(a[3],f):i[4]}return I=i[5],I&&(x=a[5],a[5]=x?dm(x,I,i[6]):I,a[6]=x?Ir(a[5],f):i[6]),I=i[7],I&&(a[7]=I),c&L&&(a[8]=a[8]==null?i[8]:xn(a[8],i[8])),a[9]==null&&(a[9]=i[9]),a[0]=i[0],a[1]=v,a}function HE(a){var i=[];if(a!=null)for(var o in We(a))i.push(o);return i}function YE(a){return ci.call(a)}function wm(a,i,o){return i=Tn(i===t?a.length-1:i,0),function(){for(var c=arguments,v=-1,b=Tn(c.length-i,0),D=U(b);++v<b;)D[v]=c[i+v];v=-1;for(var I=U(i+1);++v<i;)I[v]=c[v];return I[i]=o(D),dt(a,this,I)}}function Om(a,i){return i.length<2?a:ea(a,St(i,0,-1))}function $E(a,i){for(var o=a.length,c=xn(i.length,o),v=Zn(a);c--;){var b=i[c];a[c]=pr(b,o)?v[b]:t}return a}function Ho(a,i){if(!(i==="constructor"&&typeof a[i]=="function")&&i!="__proto__")return a[i]}var Dm=Im(Qc),El=o_||function(a,i){return Pn.setTimeout(a,i)},Yo=Im(hE);function Pm(a,i,o){var c=i+"";return Yo(a,VE(c,WE(ME(c),o)))}function Im(a){var i=0,o=0;return function(){var c=m_(),v=G-(c-o);if(o=c,v>0){if(++i>=q)return arguments[0]}else i=0;return a.apply(t,arguments)}}function Mi(a,i){var o=-1,c=a.length,v=c-1;for(i=i===t?c:i;++o<i;){var b=wo(o,v),D=a[b];a[b]=a[o],a[o]=D}return a.length=i,a}var Fm=UE(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(ll,function(o,c,v,b){i.push(v?b.replace(Hh,"$1"):c||o)}),i});function Wt(a){if(typeof a=="string"||ft(a))return a;var i=a+"";return i=="0"&&1/a==-oe?"-0":i}function ta(a){if(a!=null){try{return di.call(a)}catch{}try{return a+""}catch{}}return""}function WE(a,i){return Tt(it,function(o){var c="_."+o[0];i&o[1]&&!li(a,c)&&a.push(c)}),a.sort()}function Lm(a){if(a instanceof Pe)return a.clone();var i=new At(a.__wrapped__,a.__chain__);return i.__actions__=Zn(a.__actions__),i.__index__=a.__index__,i.__values__=a.__values__,i}function zE(a,i,o){(o?Cn(a,i,o):i===t)?i=1:i=Tn(Ae(i),0);var c=a==null?0:a.length;if(!c||i<1)return[];for(var v=0,b=0,D=U(pi(c/i));v<c;)D[b++]=St(a,v,v+=i);return D}function JE(a){for(var i=-1,o=a==null?0:a.length,c=0,v=[];++i<o;){var b=a[i];b&&(v[c++]=b)}return v}function XE(){var a=arguments.length;if(!a)return[];for(var i=U(a-1),o=arguments[0],c=a;c--;)i[c-1]=arguments[c];return Pr(be(o)?Zn(o):[o],In(i,1))}var ZE=Se(function(a,i){return fn(a)?fl(a,In(i,1,fn,!0)):[]}),QE=Se(function(a,i){var o=wt(i);return fn(o)&&(o=t),fn(a)?fl(a,In(i,1,fn,!0),ge(o,2)):[]}),ey=Se(function(a,i){var o=wt(i);return fn(o)&&(o=t),fn(a)?fl(a,In(i,1,fn,!0),t,o):[]});function ny(a,i,o){var c=a==null?0:a.length;return c?(i=o||i===t?1:Ae(i),St(a,i<0?0:i,c)):[]}function ty(a,i,o){var c=a==null?0:a.length;return c?(i=o||i===t?1:Ae(i),i=c-i,St(a,0,i<0?0:i)):[]}function ry(a,i){return a&&a.length?Si(a,ge(i,3),!0,!0):[]}function ay(a,i){return a&&a.length?Si(a,ge(i,3),!0):[]}function ly(a,i,o,c){var v=a==null?0:a.length;return v?(o&&typeof o!="number"&&Cn(a,i,o)&&(o=0,c=v),X_(a,i,o,c)):[]}function Mm(a,i,o){var c=a==null?0:a.length;if(!c)return-1;var v=o==null?0:Ae(o);return v<0&&(v=Tn(c+v,0)),ii(a,ge(i,3),v)}function xm(a,i,o){var c=a==null?0:a.length;if(!c)return-1;var v=c-1;return o!==t&&(v=Ae(o),v=o<0?Tn(c+v,0):xn(v,c-1)),ii(a,ge(i,3),v,!0)}function Km(a){var i=a==null?0:a.length;return i?In(a,1):[]}function iy(a){var i=a==null?0:a.length;return i?In(a,oe):[]}function sy(a,i){var o=a==null?0:a.length;return o?(i=i===t?1:Ae(i),In(a,i)):[]}function oy(a){for(var i=-1,o=a==null?0:a.length,c={};++i<o;){var v=a[i];c[v[0]]=v[1]}return c}function Vm(a){return a&&a.length?a[0]:t}function uy(a,i,o){var c=a==null?0:a.length;if(!c)return-1;var v=o==null?0:Ae(o);return v<0&&(v=Tn(c+v,0)),ka(a,i,v)}function dy(a){var i=a==null?0:a.length;return i?St(a,0,-1):[]}var cy=Se(function(a){var i=tn(a,Fo);return i.length&&i[0]===a[0]?To(i):[]}),my=Se(function(a){var i=wt(a),o=tn(a,Fo);return i===wt(o)?i=t:o.pop(),o.length&&o[0]===a[0]?To(o,ge(i,2)):[]}),fy=Se(function(a){var i=wt(a),o=tn(a,Fo);return i=typeof i=="function"?i:t,i&&o.pop(),o.length&&o[0]===a[0]?To(o,t,i):[]});function gy(a,i){return a==null?"":d_.call(a,i)}function wt(a){var i=a==null?0:a.length;return i?a[i-1]:t}function vy(a,i,o){var c=a==null?0:a.length;if(!c)return-1;var v=c;return o!==t&&(v=Ae(o),v=v<0?Tn(c+v,0):xn(v,c-1)),i===i?Wp(a,i,v):ii(a,_c,v,!0)}function hy(a,i){return a&&a.length?zc(a,Ae(i)):t}var py=Se(Bm);function Bm(a,i){return a&&a.length&&i&&i.length?So(a,i):a}function _y(a,i,o){return a&&a.length&&i&&i.length?So(a,i,ge(o,2)):a}function Ey(a,i,o){return a&&a.length&&i&&i.length?So(a,i,t,o):a}var yy=hr(function(a,i){var o=a==null?0:a.length,c=Eo(a,i);return Zc(a,tn(i,function(v){return pr(v,o)?+v:v}).sort(om)),c});function by(a,i){var o=[];if(!(a&&a.length))return o;var c=-1,v=[],b=a.length;for(i=ge(i,3);++c<b;){var D=a[c];i(D,c,a)&&(o.push(D),v.push(c))}return Zc(a,v),o}function $o(a){return a==null?a:g_.call(a)}function ky(a,i,o){var c=a==null?0:a.length;return c?(o&&typeof o!="number"&&Cn(a,i,o)?(i=0,o=c):(i=i==null?0:Ae(i),o=o===t?c:Ae(o)),St(a,i,o)):[]}function Ty(a,i){return Ri(a,i)}function Ny(a,i,o){return Do(a,i,ge(o,2))}function Ay(a,i){var o=a==null?0:a.length;if(o){var c=Ri(a,i);if(c<o&&xt(a[c],i))return c}return-1}function Ry(a,i){return Ri(a,i,!0)}function Sy(a,i,o){return Do(a,i,ge(o,2),!0)}function wy(a,i){var o=a==null?0:a.length;if(o){var c=Ri(a,i,!0)-1;if(xt(a[c],i))return c}return-1}function Oy(a){return a&&a.length?em(a):[]}function Dy(a,i){return a&&a.length?em(a,ge(i,2)):[]}function Py(a){var i=a==null?0:a.length;return i?St(a,1,i):[]}function Iy(a,i,o){return a&&a.length?(i=o||i===t?1:Ae(i),St(a,0,i<0?0:i)):[]}function Fy(a,i,o){var c=a==null?0:a.length;return c?(i=o||i===t?1:Ae(i),i=c-i,St(a,i<0?0:i,c)):[]}function Ly(a,i){return a&&a.length?Si(a,ge(i,3),!1,!0):[]}function My(a,i){return a&&a.length?Si(a,ge(i,3)):[]}var xy=Se(function(a){return Mr(In(a,1,fn,!0))}),Ky=Se(function(a){var i=wt(a);return fn(i)&&(i=t),Mr(In(a,1,fn,!0),ge(i,2))}),Vy=Se(function(a){var i=wt(a);return i=typeof i=="function"?i:t,Mr(In(a,1,fn,!0),t,i)});function By(a){return a&&a.length?Mr(a):[]}function Gy(a,i){return a&&a.length?Mr(a,ge(i,2)):[]}function jy(a,i){return i=typeof i=="function"?i:t,a&&a.length?Mr(a,t,i):[]}function Wo(a){if(!(a&&a.length))return[];var i=0;return a=Dr(a,function(o){if(fn(o))return i=Tn(o.length,i),!0}),co(i,function(o){return tn(a,so(o))})}function Gm(a,i){if(!(a&&a.length))return[];var o=Wo(a);return i==null?o:tn(o,function(c){return dt(i,t,c)})}var Cy=Se(function(a,i){return fn(a)?fl(a,i):[]}),Uy=Se(function(a){return Io(Dr(a,fn))}),qy=Se(function(a){var i=wt(a);return fn(i)&&(i=t),Io(Dr(a,fn),ge(i,2))}),Hy=Se(function(a){var i=wt(a);return i=typeof i=="function"?i:t,Io(Dr(a,fn),t,i)}),Yy=Se(Wo);function $y(a,i){return am(a||[],i||[],ml)}function Wy(a,i){return am(a||[],i||[],hl)}var zy=Se(function(a){var i=a.length,o=i>1?a[i-1]:t;return o=typeof o=="function"?(a.pop(),o):t,Gm(a,o)});function jm(a){var i=_(a);return i.__chain__=!0,i}function Jy(a,i){return i(a),a}function xi(a,i){return i(a)}var Xy=hr(function(a){var i=a.length,o=i?a[0]:0,c=this.__wrapped__,v=function(b){return Eo(b,a)};return i>1||this.__actions__.length||!(c instanceof Pe)||!pr(o)?this.thru(v):(c=c.slice(o,+o+(i?1:0)),c.__actions__.push({func:xi,args:[v],thisArg:t}),new At(c,this.__chain__).thru(function(b){return i&&!b.length&&b.push(t),b}))});function Zy(){return jm(this)}function Qy(){return new At(this.value(),this.__chain__)}function eb(){this.__values__===t&&(this.__values__=nf(this.value()));var a=this.__index__>=this.__values__.length,i=a?t:this.__values__[this.__index__++];return{done:a,value:i}}function nb(){return this}function tb(a){for(var i,o=this;o instanceof bi;){var c=Lm(o);c.__index__=0,c.__values__=t,i?v.__wrapped__=c:i=c;var v=c;o=o.__wrapped__}return v.__wrapped__=a,i}function rb(){var a=this.__wrapped__;if(a instanceof Pe){var i=a;return this.__actions__.length&&(i=new Pe(this)),i=i.reverse(),i.__actions__.push({func:xi,args:[$o],thisArg:t}),new At(i,this.__chain__)}return this.thru($o)}function ab(){return rm(this.__wrapped__,this.__actions__)}var lb=wi(function(a,i,o){Ce.call(a,o)?++a[o]:gr(a,o,1)});function ib(a,i,o){var c=be(a)?hc:J_;return o&&Cn(a,i,o)&&(i=t),c(a,ge(i,3))}function sb(a,i){var o=be(a)?Dr:Gc;return o(a,ge(i,3))}var ob=gm(Mm),ub=gm(xm);function db(a,i){return In(Ki(a,i),1)}function cb(a,i){return In(Ki(a,i),oe)}function mb(a,i,o){return o=o===t?1:Ae(o),In(Ki(a,i),o)}function Cm(a,i){var o=be(a)?Tt:Lr;return o(a,ge(i,3))}function Um(a,i){var o=be(a)?Pp:Bc;return o(a,ge(i,3))}var fb=wi(function(a,i,o){Ce.call(a,o)?a[o].push(i):gr(a,o,[i])});function gb(a,i,o,c){a=Qn(a)?a:La(a),o=o&&!c?Ae(o):0;var v=a.length;return o<0&&(o=Tn(v+o,0)),Ci(a)?o<=v&&a.indexOf(i,o)>-1:!!v&&ka(a,i,o)>-1}var vb=Se(function(a,i,o){var c=-1,v=typeof i=="function",b=Qn(a)?U(a.length):[];return Lr(a,function(D){b[++c]=v?dt(i,D,o):gl(D,i,o)}),b}),hb=wi(function(a,i,o){gr(a,o,i)});function Ki(a,i){var o=be(a)?tn:Yc;return o(a,ge(i,3))}function pb(a,i,o,c){return a==null?[]:(be(i)||(i=i==null?[]:[i]),o=c?t:o,be(o)||(o=o==null?[]:[o]),Jc(a,i,o))}var _b=wi(function(a,i,o){a[o?0:1].push(i)},function(){return[[],[]]});function Eb(a,i,o){var c=be(a)?lo:yc,v=arguments.length<3;return c(a,ge(i,4),o,v,Lr)}function yb(a,i,o){var c=be(a)?Ip:yc,v=arguments.length<3;return c(a,ge(i,4),o,v,Bc)}function bb(a,i){var o=be(a)?Dr:Gc;return o(a,Gi(ge(i,3)))}function kb(a){var i=be(a)?Mc:gE;return i(a)}function Tb(a,i,o){(o?Cn(a,i,o):i===t)?i=1:i=Ae(i);var c=be(a)?H_:vE;return c(a,i)}function Nb(a){var i=be(a)?Y_:pE;return i(a)}function Ab(a){if(a==null)return 0;if(Qn(a))return Ci(a)?Na(a):a.length;var i=Kn(a);return i==$e||i==B?a.size:Ao(a).length}function Rb(a,i,o){var c=be(a)?io:_E;return o&&Cn(a,i,o)&&(i=t),c(a,ge(i,3))}var Sb=Se(function(a,i){if(a==null)return[];var o=i.length;return o>1&&Cn(a,i[0],i[1])?i=[]:o>2&&Cn(i[0],i[1],i[2])&&(i=[i[0]]),Jc(a,In(i,1),[])}),Vi=s_||function(){return Pn.Date.now()};function wb(a,i){if(typeof i!="function")throw new Nt(u);return a=Ae(a),function(){if(--a<1)return i.apply(this,arguments)}}function qm(a,i,o){return i=o?t:i,i=a&&i==null?a.length:i,vr(a,L,t,t,t,t,i)}function Hm(a,i){var o;if(typeof i!="function")throw new Nt(u);return a=Ae(a),function(){return--a>0&&(o=i.apply(this,arguments)),a<=1&&(i=t),o}}var zo=Se(function(a,i,o){var c=E;if(o.length){var v=Ir(o,Ia(zo));c|=T}return vr(a,c,i,o,v)}),Ym=Se(function(a,i,o){var c=E|A;if(o.length){var v=Ir(o,Ia(Ym));c|=T}return vr(i,c,a,o,v)});function $m(a,i,o){i=o?t:i;var c=vr(a,N,t,t,t,t,t,i);return c.placeholder=$m.placeholder,c}function Wm(a,i,o){i=o?t:i;var c=vr(a,F,t,t,t,t,t,i);return c.placeholder=Wm.placeholder,c}function zm(a,i,o){var c,v,b,D,I,x,$=0,z=!1,X=!1,le=!0;if(typeof a!="function")throw new Nt(u);i=Ot(i)||0,an(o)&&(z=!!o.leading,X="maxWait"in o,b=X?Tn(Ot(o.maxWait)||0,i):b,le="trailing"in o?!!o.trailing:le);function de(gn){var Kt=c,yr=v;return c=v=t,$=gn,D=a.apply(yr,Kt),D}function he(gn){return $=gn,I=El(Oe,i),z?de(gn):D}function Re(gn){var Kt=gn-x,yr=gn-$,vf=i-Kt;return X?xn(vf,b-yr):vf}function pe(gn){var Kt=gn-x,yr=gn-$;return x===t||Kt>=i||Kt<0||X&&yr>=b}function Oe(){var gn=Vi();if(pe(gn))return Fe(gn);I=El(Oe,Re(gn))}function Fe(gn){return I=t,le&&c?de(gn):(c=v=t,D)}function gt(){I!==t&&lm(I),$=0,c=x=v=I=t}function Un(){return I===t?D:Fe(Vi())}function vt(){var gn=Vi(),Kt=pe(gn);if(c=arguments,v=this,x=gn,Kt){if(I===t)return he(x);if(X)return lm(I),I=El(Oe,i),de(x)}return I===t&&(I=El(Oe,i)),D}return vt.cancel=gt,vt.flush=Un,vt}var Ob=Se(function(a,i){return Vc(a,1,i)}),Db=Se(function(a,i,o){return Vc(a,Ot(i)||0,o)});function Pb(a){return vr(a,C)}function Bi(a,i){if(typeof a!="function"||i!=null&&typeof i!="function")throw new Nt(u);var o=function(){var c=arguments,v=i?i.apply(this,c):c[0],b=o.cache;if(b.has(v))return b.get(v);var D=a.apply(this,c);return o.cache=b.set(v,D)||b,D};return o.cache=new(Bi.Cache||fr),o}Bi.Cache=fr;function Gi(a){if(typeof a!="function")throw new Nt(u);return function(){var i=arguments;switch(i.length){case 0:return!a.call(this);case 1:return!a.call(this,i[0]);case 2:return!a.call(this,i[0],i[1]);case 3:return!a.call(this,i[0],i[1],i[2])}return!a.apply(this,i)}}function Ib(a){return Hm(2,a)}var Fb=EE(function(a,i){i=i.length==1&&be(i[0])?tn(i[0],ct(ge())):tn(In(i,1),ct(ge()));var o=i.length;return Se(function(c){for(var v=-1,b=xn(c.length,o);++v<b;)c[v]=i[v].call(this,c[v]);return dt(a,this,c)})}),Jo=Se(function(a,i){var o=Ir(i,Ia(Jo));return vr(a,T,t,i,o)}),Jm=Se(function(a,i){var o=Ir(i,Ia(Jm));return vr(a,K,t,i,o)}),Lb=hr(function(a,i){return vr(a,V,t,t,t,i)});function Mb(a,i){if(typeof a!="function")throw new Nt(u);return i=i===t?i:Ae(i),Se(a,i)}function xb(a,i){if(typeof a!="function")throw new Nt(u);return i=i==null?0:Tn(Ae(i),0),Se(function(o){var c=o[i],v=Kr(o,0,i);return c&&Pr(v,c),dt(a,this,v)})}function Kb(a,i,o){var c=!0,v=!0;if(typeof a!="function")throw new Nt(u);return an(o)&&(c="leading"in o?!!o.leading:c,v="trailing"in o?!!o.trailing:v),zm(a,i,{leading:c,maxWait:i,trailing:v})}function Vb(a){return qm(a,1)}function Bb(a,i){return Jo(Lo(i),a)}function Gb(){if(!arguments.length)return[];var a=arguments[0];return be(a)?a:[a]}function jb(a){return Rt(a,y)}function Cb(a,i){return i=typeof i=="function"?i:t,Rt(a,y,i)}function Ub(a){return Rt(a,h|y)}function qb(a,i){return i=typeof i=="function"?i:t,Rt(a,h|y,i)}function Hb(a,i){return i==null||Kc(a,i,Sn(i))}function xt(a,i){return a===i||a!==a&&i!==i}var Yb=Ii(ko),$b=Ii(function(a,i){return a>=i}),ra=Uc(function(){return arguments}())?Uc:function(a){return un(a)&&Ce.call(a,"callee")&&!Oc.call(a,"callee")},be=U.isArray,Wb=dc?ct(dc):tE;function Qn(a){return a!=null&&ji(a.length)&&!_r(a)}function fn(a){return un(a)&&Qn(a)}function zb(a){return a===!0||a===!1||un(a)&&jn(a)==Qe}var Vr=u_||su,Jb=cc?ct(cc):rE;function Xb(a){return un(a)&&a.nodeType===1&&!yl(a)}function Zb(a){if(a==null)return!0;if(Qn(a)&&(be(a)||typeof a=="string"||typeof a.splice=="function"||Vr(a)||Fa(a)||ra(a)))return!a.length;var i=Kn(a);if(i==$e||i==B)return!a.size;if(_l(a))return!Ao(a).length;for(var o in a)if(Ce.call(a,o))return!1;return!0}function Qb(a,i){return vl(a,i)}function ek(a,i,o){o=typeof o=="function"?o:t;var c=o?o(a,i):t;return c===t?vl(a,i,t,o):!!c}function Xo(a){if(!un(a))return!1;var i=jn(a);return i==Mn||i==st||typeof a.message=="string"&&typeof a.name=="string"&&!yl(a)}function nk(a){return typeof a=="number"&&Pc(a)}function _r(a){if(!an(a))return!1;var i=jn(a);return i==Dn||i==Wn||i==Ze||i==zn}function Xm(a){return typeof a=="number"&&a==Ae(a)}function ji(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=ee}function an(a){var i=typeof a;return a!=null&&(i=="object"||i=="function")}function un(a){return a!=null&&typeof a=="object"}var Zm=mc?ct(mc):lE;function tk(a,i){return a===i||No(a,i,jo(i))}function rk(a,i,o){return o=typeof o=="function"?o:t,No(a,i,jo(i),o)}function ak(a){return Qm(a)&&a!=+a}function lk(a){if(CE(a))throw new ye(s);return qc(a)}function ik(a){return a===null}function sk(a){return a==null}function Qm(a){return typeof a=="number"||un(a)&&jn(a)==yn}function yl(a){if(!un(a)||jn(a)!=mn)return!1;var i=gi(a);if(i===null)return!0;var o=Ce.call(i,"constructor")&&i.constructor;return typeof o=="function"&&o instanceof o&&di.call(o)==r_}var Zo=fc?ct(fc):iE;function ok(a){return Xm(a)&&a>=-ee&&a<=ee}var ef=gc?ct(gc):sE;function Ci(a){return typeof a=="string"||!be(a)&&un(a)&&jn(a)==H}function ft(a){return typeof a=="symbol"||un(a)&&jn(a)==ae}var Fa=vc?ct(vc):oE;function uk(a){return a===t}function dk(a){return un(a)&&Kn(a)==Q}function ck(a){return un(a)&&jn(a)==ce}var mk=Ii(Ro),fk=Ii(function(a,i){return a<=i});function nf(a){if(!a)return[];if(Qn(a))return Ci(a)?Lt(a):Zn(a);if(sl&&a[sl])return Hp(a[sl]());var i=Kn(a),o=i==$e?fo:i==B?si:La;return o(a)}function Er(a){if(!a)return a===0?a:0;if(a=Ot(a),a===oe||a===-oe){var i=a<0?-1:1;return i*me}return a===a?a:0}function Ae(a){var i=Er(a),o=i%1;return i===i?o?i-o:i:0}function tf(a){return a?Qr(Ae(a),0,Ee):0}function Ot(a){if(typeof a=="number")return a;if(ft(a))return Ne;if(an(a)){var i=typeof a.valueOf=="function"?a.valueOf():a;a=an(i)?i+"":i}if(typeof a!="string")return a===0?a:+a;a=bc(a);var o=Wh.test(a);return o||Jh.test(a)?wp(a.slice(2),o?2:8):$h.test(a)?Ne:+a}function rf(a){return $t(a,et(a))}function gk(a){return a?Qr(Ae(a),-ee,ee):a===0?a:0}function Ge(a){return a==null?"":mt(a)}var vk=Da(function(a,i){if(_l(i)||Qn(i)){$t(i,Sn(i),a);return}for(var o in i)Ce.call(i,o)&&ml(a,o,i[o])}),af=Da(function(a,i){$t(i,et(i),a)}),Ui=Da(function(a,i,o,c){$t(i,et(i),a,c)}),hk=Da(function(a,i,o,c){$t(i,Sn(i),a,c)}),pk=hr(Eo);function _k(a,i){var o=Oa(a);return i==null?o:xc(o,i)}var Ek=Se(function(a,i){a=We(a);var o=-1,c=i.length,v=c>2?i[2]:t;for(v&&Cn(i[0],i[1],v)&&(c=1);++o<c;)for(var b=i[o],D=et(b),I=-1,x=D.length;++I<x;){var $=D[I],z=a[$];(z===t||xt(z,Ra[$])&&!Ce.call(a,$))&&(a[$]=b[$])}return a}),yk=Se(function(a){return a.push(t,bm),dt(lf,t,a)});function bk(a,i){return pc(a,ge(i,3),Yt)}function kk(a,i){return pc(a,ge(i,3),bo)}function Tk(a,i){return a==null?a:yo(a,ge(i,3),et)}function Nk(a,i){return a==null?a:jc(a,ge(i,3),et)}function Ak(a,i){return a&&Yt(a,ge(i,3))}function Rk(a,i){return a&&bo(a,ge(i,3))}function Sk(a){return a==null?[]:Ni(a,Sn(a))}function wk(a){return a==null?[]:Ni(a,et(a))}function Qo(a,i,o){var c=a==null?t:ea(a,i);return c===t?o:c}function Ok(a,i){return a!=null&&Nm(a,i,Z_)}function eu(a,i){return a!=null&&Nm(a,i,Q_)}var Dk=hm(function(a,i,o){i!=null&&typeof i.toString!="function"&&(i=ci.call(i)),a[i]=o},tu(nt)),Pk=hm(function(a,i,o){i!=null&&typeof i.toString!="function"&&(i=ci.call(i)),Ce.call(a,i)?a[i].push(o):a[i]=[o]},ge),Ik=Se(gl);function Sn(a){return Qn(a)?Lc(a):Ao(a)}function et(a){return Qn(a)?Lc(a,!0):uE(a)}function Fk(a,i){var o={};return i=ge(i,3),Yt(a,function(c,v,b){gr(o,i(c,v,b),c)}),o}function Lk(a,i){var o={};return i=ge(i,3),Yt(a,function(c,v,b){gr(o,v,i(c,v,b))}),o}var Mk=Da(function(a,i,o){Ai(a,i,o)}),lf=Da(function(a,i,o,c){Ai(a,i,o,c)}),xk=hr(function(a,i){var o={};if(a==null)return o;var c=!1;i=tn(i,function(b){return b=xr(b,a),c||(c=b.length>1),b}),$t(a,Bo(a),o),c&&(o=Rt(o,h|p|y,DE));for(var v=i.length;v--;)Po(o,i[v]);return o});function Kk(a,i){return sf(a,Gi(ge(i)))}var Vk=hr(function(a,i){return a==null?{}:cE(a,i)});function sf(a,i){if(a==null)return{};var o=tn(Bo(a),function(c){return[c]});return i=ge(i),Xc(a,o,function(c,v){return i(c,v[0])})}function Bk(a,i,o){i=xr(i,a);var c=-1,v=i.length;for(v||(v=1,a=t);++c<v;){var b=a==null?t:a[Wt(i[c])];b===t&&(c=v,b=o),a=_r(b)?b.call(a):b}return a}function Gk(a,i,o){return a==null?a:hl(a,i,o)}function jk(a,i,o,c){return c=typeof c=="function"?c:t,a==null?a:hl(a,i,o,c)}var of=Em(Sn),uf=Em(et);function Ck(a,i,o){var c=be(a),v=c||Vr(a)||Fa(a);if(i=ge(i,4),o==null){var b=a&&a.constructor;v?o=c?new b:[]:an(a)?o=_r(b)?Oa(gi(a)):{}:o={}}return(v?Tt:Yt)(a,function(D,I,x){return i(o,D,I,x)}),o}function Uk(a,i){return a==null?!0:Po(a,i)}function qk(a,i,o){return a==null?a:tm(a,i,Lo(o))}function Hk(a,i,o,c){return c=typeof c=="function"?c:t,a==null?a:tm(a,i,Lo(o),c)}function La(a){return a==null?[]:mo(a,Sn(a))}function Yk(a){return a==null?[]:mo(a,et(a))}function $k(a,i,o){return o===t&&(o=i,i=t),o!==t&&(o=Ot(o),o=o===o?o:0),i!==t&&(i=Ot(i),i=i===i?i:0),Qr(Ot(a),i,o)}function Wk(a,i,o){return i=Er(i),o===t?(o=i,i=0):o=Er(o),a=Ot(a),eE(a,i,o)}function zk(a,i,o){if(o&&typeof o!="boolean"&&Cn(a,i,o)&&(i=o=t),o===t&&(typeof i=="boolean"?(o=i,i=t):typeof a=="boolean"&&(o=a,a=t)),a===t&&i===t?(a=0,i=1):(a=Er(a),i===t?(i=a,a=0):i=Er(i)),a>i){var c=a;a=i,i=c}if(o||a%1||i%1){var v=Ic();return xn(a+v*(i-a+Sp("1e-"+((v+"").length-1))),i)}return wo(a,i)}var Jk=Pa(function(a,i,o){return i=i.toLowerCase(),a+(o?df(i):i)});function df(a){return nu(Ge(a).toLowerCase())}function cf(a){return a=Ge(a),a&&a.replace(Zh,Gp).replace(pp,"")}function Xk(a,i,o){a=Ge(a),i=mt(i);var c=a.length;o=o===t?c:Qr(Ae(o),0,c);var v=o;return o-=i.length,o>=0&&a.slice(o,v)==i}function Zk(a){return a=Ge(a),a&&Rn.test(a)?a.replace(Xn,jp):a}function Qk(a){return a=Ge(a),a&&Vh.test(a)?a.replace(Wr,"\\$&"):a}var e1=Pa(function(a,i,o){return a+(o?"-":"")+i.toLowerCase()}),n1=Pa(function(a,i,o){return a+(o?" ":"")+i.toLowerCase()}),t1=fm("toLowerCase");function r1(a,i,o){a=Ge(a),i=Ae(i);var c=i?Na(a):0;if(!i||c>=i)return a;var v=(i-c)/2;return Pi(_i(v),o)+a+Pi(pi(v),o)}function a1(a,i,o){a=Ge(a),i=Ae(i);var c=i?Na(a):0;return i&&c<i?a+Pi(i-c,o):a}function l1(a,i,o){a=Ge(a),i=Ae(i);var c=i?Na(a):0;return i&&c<i?Pi(i-c,o)+a:a}function i1(a,i,o){return o||i==null?i=0:i&&(i=+i),f_(Ge(a).replace(Js,""),i||0)}function s1(a,i,o){return(o?Cn(a,i,o):i===t)?i=1:i=Ae(i),Oo(Ge(a),i)}function o1(){var a=arguments,i=Ge(a[0]);return a.length<3?i:i.replace(a[1],a[2])}var u1=Pa(function(a,i,o){return a+(o?"_":"")+i.toLowerCase()});function d1(a,i,o){return o&&typeof o!="number"&&Cn(a,i,o)&&(i=o=t),o=o===t?Ee:o>>>0,o?(a=Ge(a),a&&(typeof i=="string"||i!=null&&!Zo(i))&&(i=mt(i),!i&&Ta(a))?Kr(Lt(a),0,o):a.split(i,o)):[]}var c1=Pa(function(a,i,o){return a+(o?" ":"")+nu(i)});function m1(a,i,o){return a=Ge(a),o=o==null?0:Qr(Ae(o),0,a.length),i=mt(i),a.slice(o,o+i.length)==i}function f1(a,i,o){var c=_.templateSettings;o&&Cn(a,i,o)&&(i=t),a=Ge(a),i=Ui({},i,c,ym);var v=Ui({},i.imports,c.imports,ym),b=Sn(v),D=mo(v,b),I,x,$=0,z=i.interpolate||ti,X="__p += '",le=go((i.escape||ti).source+"|"+z.source+"|"+(z===ni?Yh:ti).source+"|"+(i.evaluate||ti).source+"|$","g"),de="//# sourceURL="+(Ce.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++kp+"]")+`
`;a.replace(le,function(pe,Oe,Fe,gt,Un,vt){return Fe||(Fe=gt),X+=a.slice($,vt).replace(Qh,Cp),Oe&&(I=!0,X+=`' +
__e(`+Oe+`) +
'`),Un&&(x=!0,X+=`';
`+Un+`;
__p += '`),Fe&&(X+=`' +
((__t = (`+Fe+`)) == null ? '' : __t) +
'`),$=vt+pe.length,pe}),X+=`';
`;var he=Ce.call(i,"variable")&&i.variable;if(!he)X=`with (obj) {
`+X+`
}
`;else if(qh.test(he))throw new ye(d);X=(x?X.replace(Te,""):X).replace(ze,"$1").replace(Ye,"$1;"),X="function("+(he||"obj")+`) {
`+(he?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(I?", __e = _.escape":"")+(x?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+X+`return __p
}`;var Re=ff(function(){return Ve(b,de+"return "+X).apply(t,D)});if(Re.source=X,Xo(Re))throw Re;return Re}function g1(a){return Ge(a).toLowerCase()}function v1(a){return Ge(a).toUpperCase()}function h1(a,i,o){if(a=Ge(a),a&&(o||i===t))return bc(a);if(!a||!(i=mt(i)))return a;var c=Lt(a),v=Lt(i),b=kc(c,v),D=Tc(c,v)+1;return Kr(c,b,D).join("")}function p1(a,i,o){if(a=Ge(a),a&&(o||i===t))return a.slice(0,Ac(a)+1);if(!a||!(i=mt(i)))return a;var c=Lt(a),v=Tc(c,Lt(i))+1;return Kr(c,0,v).join("")}function _1(a,i,o){if(a=Ge(a),a&&(o||i===t))return a.replace(Js,"");if(!a||!(i=mt(i)))return a;var c=Lt(a),v=kc(c,Lt(i));return Kr(c,v).join("")}function E1(a,i){var o=J,c=W;if(an(i)){var v="separator"in i?i.separator:v;o="length"in i?Ae(i.length):o,c="omission"in i?mt(i.omission):c}a=Ge(a);var b=a.length;if(Ta(a)){var D=Lt(a);b=D.length}if(o>=b)return a;var I=o-Na(c);if(I<1)return c;var x=D?Kr(D,0,I).join(""):a.slice(0,I);if(v===t)return x+c;if(D&&(I+=x.length-I),Zo(v)){if(a.slice(I).search(v)){var $,z=x;for(v.global||(v=go(v.source,Ge(Ud.exec(v))+"g")),v.lastIndex=0;$=v.exec(z);)var X=$.index;x=x.slice(0,X===t?I:X)}}else if(a.indexOf(mt(v),I)!=I){var le=x.lastIndexOf(v);le>-1&&(x=x.slice(0,le))}return x+c}function y1(a){return a=Ge(a),a&&ya.test(a)?a.replace(Ft,zp):a}var b1=Pa(function(a,i,o){return a+(o?" ":"")+i.toUpperCase()}),nu=fm("toUpperCase");function mf(a,i,o){return a=Ge(a),i=o?t:i,i===t?qp(a)?Zp(a):Mp(a):a.match(i)||[]}var ff=Se(function(a,i){try{return dt(a,t,i)}catch(o){return Xo(o)?o:new ye(o)}}),k1=hr(function(a,i){return Tt(i,function(o){o=Wt(o),gr(a,o,zo(a[o],a))}),a});function T1(a){var i=a==null?0:a.length,o=ge();return a=i?tn(a,function(c){if(typeof c[1]!="function")throw new Nt(u);return[o(c[0]),c[1]]}):[],Se(function(c){for(var v=-1;++v<i;){var b=a[v];if(dt(b[0],this,c))return dt(b[1],this,c)}})}function N1(a){return z_(Rt(a,h))}function tu(a){return function(){return a}}function A1(a,i){return a==null||a!==a?i:a}var R1=vm(),S1=vm(!0);function nt(a){return a}function ru(a){return Hc(typeof a=="function"?a:Rt(a,h))}function w1(a){return $c(Rt(a,h))}function O1(a,i){return Wc(a,Rt(i,h))}var D1=Se(function(a,i){return function(o){return gl(o,a,i)}}),P1=Se(function(a,i){return function(o){return gl(a,o,i)}});function au(a,i,o){var c=Sn(i),v=Ni(i,c);o==null&&!(an(i)&&(v.length||!c.length))&&(o=i,i=a,a=this,v=Ni(i,Sn(i)));var b=!(an(o)&&"chain"in o)||!!o.chain,D=_r(a);return Tt(v,function(I){var x=i[I];a[I]=x,D&&(a.prototype[I]=function(){var $=this.__chain__;if(b||$){var z=a(this.__wrapped__),X=z.__actions__=Zn(this.__actions__);return X.push({func:x,args:arguments,thisArg:a}),z.__chain__=$,z}return x.apply(a,Pr([this.value()],arguments))})}),a}function I1(){return Pn._===this&&(Pn._=a_),this}function lu(){}function F1(a){return a=Ae(a),Se(function(i){return zc(i,a)})}var L1=xo(tn),M1=xo(hc),x1=xo(io);function gf(a){return Uo(a)?so(Wt(a)):mE(a)}function K1(a){return function(i){return a==null?t:ea(a,i)}}var V1=pm(),B1=pm(!0);function iu(){return[]}function su(){return!1}function G1(){return{}}function j1(){return""}function C1(){return!0}function U1(a,i){if(a=Ae(a),a<1||a>ee)return[];var o=Ee,c=xn(a,Ee);i=ge(i),a-=Ee;for(var v=co(c,i);++o<a;)i(o);return v}function q1(a){return be(a)?tn(a,Wt):ft(a)?[a]:Zn(Fm(Ge(a)))}function H1(a){var i=++t_;return Ge(a)+i}var Y1=Di(function(a,i){return a+i},0),$1=Ko("ceil"),W1=Di(function(a,i){return a/i},1),z1=Ko("floor");function J1(a){return a&&a.length?Ti(a,nt,ko):t}function X1(a,i){return a&&a.length?Ti(a,ge(i,2),ko):t}function Z1(a){return Ec(a,nt)}function Q1(a,i){return Ec(a,ge(i,2))}function eT(a){return a&&a.length?Ti(a,nt,Ro):t}function nT(a,i){return a&&a.length?Ti(a,ge(i,2),Ro):t}var tT=Di(function(a,i){return a*i},1),rT=Ko("round"),aT=Di(function(a,i){return a-i},0);function lT(a){return a&&a.length?uo(a,nt):0}function iT(a,i){return a&&a.length?uo(a,ge(i,2)):0}return _.after=wb,_.ary=qm,_.assign=vk,_.assignIn=af,_.assignInWith=Ui,_.assignWith=hk,_.at=pk,_.before=Hm,_.bind=zo,_.bindAll=k1,_.bindKey=Ym,_.castArray=Gb,_.chain=jm,_.chunk=zE,_.compact=JE,_.concat=XE,_.cond=T1,_.conforms=N1,_.constant=tu,_.countBy=lb,_.create=_k,_.curry=$m,_.curryRight=Wm,_.debounce=zm,_.defaults=Ek,_.defaultsDeep=yk,_.defer=Ob,_.delay=Db,_.difference=ZE,_.differenceBy=QE,_.differenceWith=ey,_.drop=ny,_.dropRight=ty,_.dropRightWhile=ry,_.dropWhile=ay,_.fill=ly,_.filter=sb,_.flatMap=db,_.flatMapDeep=cb,_.flatMapDepth=mb,_.flatten=Km,_.flattenDeep=iy,_.flattenDepth=sy,_.flip=Pb,_.flow=R1,_.flowRight=S1,_.fromPairs=oy,_.functions=Sk,_.functionsIn=wk,_.groupBy=fb,_.initial=dy,_.intersection=cy,_.intersectionBy=my,_.intersectionWith=fy,_.invert=Dk,_.invertBy=Pk,_.invokeMap=vb,_.iteratee=ru,_.keyBy=hb,_.keys=Sn,_.keysIn=et,_.map=Ki,_.mapKeys=Fk,_.mapValues=Lk,_.matches=w1,_.matchesProperty=O1,_.memoize=Bi,_.merge=Mk,_.mergeWith=lf,_.method=D1,_.methodOf=P1,_.mixin=au,_.negate=Gi,_.nthArg=F1,_.omit=xk,_.omitBy=Kk,_.once=Ib,_.orderBy=pb,_.over=L1,_.overArgs=Fb,_.overEvery=M1,_.overSome=x1,_.partial=Jo,_.partialRight=Jm,_.partition=_b,_.pick=Vk,_.pickBy=sf,_.property=gf,_.propertyOf=K1,_.pull=py,_.pullAll=Bm,_.pullAllBy=_y,_.pullAllWith=Ey,_.pullAt=yy,_.range=V1,_.rangeRight=B1,_.rearg=Lb,_.reject=bb,_.remove=by,_.rest=Mb,_.reverse=$o,_.sampleSize=Tb,_.set=Gk,_.setWith=jk,_.shuffle=Nb,_.slice=ky,_.sortBy=Sb,_.sortedUniq=Oy,_.sortedUniqBy=Dy,_.split=d1,_.spread=xb,_.tail=Py,_.take=Iy,_.takeRight=Fy,_.takeRightWhile=Ly,_.takeWhile=My,_.tap=Jy,_.throttle=Kb,_.thru=xi,_.toArray=nf,_.toPairs=of,_.toPairsIn=uf,_.toPath=q1,_.toPlainObject=rf,_.transform=Ck,_.unary=Vb,_.union=xy,_.unionBy=Ky,_.unionWith=Vy,_.uniq=By,_.uniqBy=Gy,_.uniqWith=jy,_.unset=Uk,_.unzip=Wo,_.unzipWith=Gm,_.update=qk,_.updateWith=Hk,_.values=La,_.valuesIn=Yk,_.without=Cy,_.words=mf,_.wrap=Bb,_.xor=Uy,_.xorBy=qy,_.xorWith=Hy,_.zip=Yy,_.zipObject=$y,_.zipObjectDeep=Wy,_.zipWith=zy,_.entries=of,_.entriesIn=uf,_.extend=af,_.extendWith=Ui,au(_,_),_.add=Y1,_.attempt=ff,_.camelCase=Jk,_.capitalize=df,_.ceil=$1,_.clamp=$k,_.clone=jb,_.cloneDeep=Ub,_.cloneDeepWith=qb,_.cloneWith=Cb,_.conformsTo=Hb,_.deburr=cf,_.defaultTo=A1,_.divide=W1,_.endsWith=Xk,_.eq=xt,_.escape=Zk,_.escapeRegExp=Qk,_.every=ib,_.find=ob,_.findIndex=Mm,_.findKey=bk,_.findLast=ub,_.findLastIndex=xm,_.findLastKey=kk,_.floor=z1,_.forEach=Cm,_.forEachRight=Um,_.forIn=Tk,_.forInRight=Nk,_.forOwn=Ak,_.forOwnRight=Rk,_.get=Qo,_.gt=Yb,_.gte=$b,_.has=Ok,_.hasIn=eu,_.head=Vm,_.identity=nt,_.includes=gb,_.indexOf=uy,_.inRange=Wk,_.invoke=Ik,_.isArguments=ra,_.isArray=be,_.isArrayBuffer=Wb,_.isArrayLike=Qn,_.isArrayLikeObject=fn,_.isBoolean=zb,_.isBuffer=Vr,_.isDate=Jb,_.isElement=Xb,_.isEmpty=Zb,_.isEqual=Qb,_.isEqualWith=ek,_.isError=Xo,_.isFinite=nk,_.isFunction=_r,_.isInteger=Xm,_.isLength=ji,_.isMap=Zm,_.isMatch=tk,_.isMatchWith=rk,_.isNaN=ak,_.isNative=lk,_.isNil=sk,_.isNull=ik,_.isNumber=Qm,_.isObject=an,_.isObjectLike=un,_.isPlainObject=yl,_.isRegExp=Zo,_.isSafeInteger=ok,_.isSet=ef,_.isString=Ci,_.isSymbol=ft,_.isTypedArray=Fa,_.isUndefined=uk,_.isWeakMap=dk,_.isWeakSet=ck,_.join=gy,_.kebabCase=e1,_.last=wt,_.lastIndexOf=vy,_.lowerCase=n1,_.lowerFirst=t1,_.lt=mk,_.lte=fk,_.max=J1,_.maxBy=X1,_.mean=Z1,_.meanBy=Q1,_.min=eT,_.minBy=nT,_.stubArray=iu,_.stubFalse=su,_.stubObject=G1,_.stubString=j1,_.stubTrue=C1,_.multiply=tT,_.nth=hy,_.noConflict=I1,_.noop=lu,_.now=Vi,_.pad=r1,_.padEnd=a1,_.padStart=l1,_.parseInt=i1,_.random=zk,_.reduce=Eb,_.reduceRight=yb,_.repeat=s1,_.replace=o1,_.result=Bk,_.round=rT,_.runInContext=M,_.sample=kb,_.size=Ab,_.snakeCase=u1,_.some=Rb,_.sortedIndex=Ty,_.sortedIndexBy=Ny,_.sortedIndexOf=Ay,_.sortedLastIndex=Ry,_.sortedLastIndexBy=Sy,_.sortedLastIndexOf=wy,_.startCase=c1,_.startsWith=m1,_.subtract=aT,_.sum=lT,_.sumBy=iT,_.template=f1,_.times=U1,_.toFinite=Er,_.toInteger=Ae,_.toLength=tf,_.toLower=g1,_.toNumber=Ot,_.toSafeInteger=gk,_.toString=Ge,_.toUpper=v1,_.trim=h1,_.trimEnd=p1,_.trimStart=_1,_.truncate=E1,_.unescape=y1,_.uniqueId=H1,_.upperCase=b1,_.upperFirst=nu,_.each=Cm,_.eachRight=Um,_.first=Vm,au(_,function(){var a={};return Yt(_,function(i,o){Ce.call(_.prototype,o)||(a[o]=i)}),a}(),{chain:!1}),_.VERSION=r,Tt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){_[a].placeholder=_}),Tt(["drop","take"],function(a,i){Pe.prototype[a]=function(o){o=o===t?1:Tn(Ae(o),0);var c=this.__filtered__&&!i?new Pe(this):this.clone();return c.__filtered__?c.__takeCount__=xn(o,c.__takeCount__):c.__views__.push({size:xn(o,Ee),type:a+(c.__dir__<0?"Right":"")}),c},Pe.prototype[a+"Right"]=function(o){return this.reverse()[a](o).reverse()}}),Tt(["filter","map","takeWhile"],function(a,i){var o=i+1,c=o==Z||o==ne;Pe.prototype[a]=function(v){var b=this.clone();return b.__iteratees__.push({iteratee:ge(v,3),type:o}),b.__filtered__=b.__filtered__||c,b}}),Tt(["head","last"],function(a,i){var o="take"+(i?"Right":"");Pe.prototype[a]=function(){return this[o](1).value()[0]}}),Tt(["initial","tail"],function(a,i){var o="drop"+(i?"":"Right");Pe.prototype[a]=function(){return this.__filtered__?new Pe(this):this[o](1)}}),Pe.prototype.compact=function(){return this.filter(nt)},Pe.prototype.find=function(a){return this.filter(a).head()},Pe.prototype.findLast=function(a){return this.reverse().find(a)},Pe.prototype.invokeMap=Se(function(a,i){return typeof a=="function"?new Pe(this):this.map(function(o){return gl(o,a,i)})}),Pe.prototype.reject=function(a){return this.filter(Gi(ge(a)))},Pe.prototype.slice=function(a,i){a=Ae(a);var o=this;return o.__filtered__&&(a>0||i<0)?new Pe(o):(a<0?o=o.takeRight(-a):a&&(o=o.drop(a)),i!==t&&(i=Ae(i),o=i<0?o.dropRight(-i):o.take(i-a)),o)},Pe.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},Pe.prototype.toArray=function(){return this.take(Ee)},Yt(Pe.prototype,function(a,i){var o=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),v=_[c?"take"+(i=="last"?"Right":""):i],b=c||/^find/.test(i);v&&(_.prototype[i]=function(){var D=this.__wrapped__,I=c?[1]:arguments,x=D instanceof Pe,$=I[0],z=x||be(D),X=function(Oe){var Fe=v.apply(_,Pr([Oe],I));return c&&le?Fe[0]:Fe};z&&o&&typeof $=="function"&&$.length!=1&&(x=z=!1);var le=this.__chain__,de=!!this.__actions__.length,he=b&&!le,Re=x&&!de;if(!b&&z){D=Re?D:new Pe(this);var pe=a.apply(D,I);return pe.__actions__.push({func:xi,args:[X],thisArg:t}),new At(pe,le)}return he&&Re?a.apply(this,I):(pe=this.thru(X),he?c?pe.value()[0]:pe.value():pe)})}),Tt(["pop","push","shift","sort","splice","unshift"],function(a){var i=oi[a],o=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",c=/^(?:pop|shift)$/.test(a);_.prototype[a]=function(){var v=arguments;if(c&&!this.__chain__){var b=this.value();return i.apply(be(b)?b:[],v)}return this[o](function(D){return i.apply(be(D)?D:[],v)})}}),Yt(Pe.prototype,function(a,i){var o=_[i];if(o){var c=o.name+"";Ce.call(wa,c)||(wa[c]=[]),wa[c].push({name:i,func:o})}}),wa[Oi(t,A).name]=[{name:"wrapper",func:t}],Pe.prototype.clone=y_,Pe.prototype.reverse=b_,Pe.prototype.value=k_,_.prototype.at=Xy,_.prototype.chain=Zy,_.prototype.commit=Qy,_.prototype.next=eb,_.prototype.plant=tb,_.prototype.reverse=rb,_.prototype.toJSON=_.prototype.valueOf=_.prototype.value=ab,_.prototype.first=_.prototype.head,sl&&(_.prototype[sl]=nb),_},Aa=Qp();zr?((zr.exports=Aa)._=Aa,to._=Aa):Pn._=Aa}).call(eI)}(Dl,Dl.exports)),Dl.exports}nI();Ut(Xl);const uh=R.forwardRef((e,n)=>j.jsx(_t,{gap:"space-8",style:{display:"flex"},...e,ref:n}));uh.displayName="FaktaGruppe";uh.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var yu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Dg;function tI(){return Dg||(Dg=1,function(e){(function(){var n={}.hasOwnProperty;function t(){for(var s="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(s=l(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var u="";for(var d in s)n.call(s,d)&&s[d]&&(u=l(u,this&&this[d]||d));return u}function l(s,u){return u?s?s+" "+u:s+u:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(yu)),yu.exports}var rI=tI();const aI=sv(rI),lI="_boks_nm7fe_1",iI="_harBorderLeft_nm7fe_8",sI="_harBorderTop_nm7fe_12",oI={boks:lI,harBorderLeft:iI,harBorderTop:sI};aI.bind(oI);var bu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Pg;function uI(){return Pg||(Pg=1,function(e){(function(){var n={}.hasOwnProperty;function t(){for(var s="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(s=l(s,r(d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var u="";for(var d in s)n.call(s,d)&&s[d]&&(u=l(u,d));return u}function l(s,u){return u?s?s+" "+u:s+u:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(bu)),bu.exports}uI();function dI(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ig={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function cI(){if(Fg)return Rl;Fg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,l,s){var u=null;if(s!==void 0&&(u=""+s),l.key!==void 0&&(u=""+l.key),"key"in l){s={};for(var d in l)d!=="key"&&(s[d]=l[d])}else s=l;return l=s.ref,{$$typeof:e,type:r,key:u,ref:l!==void 0?l:null,props:s}}return Rl.Fragment=n,Rl.jsx=t,Rl.jsxs=t,Rl}var Lg;function mI(){return Lg||(Lg=1,Ig.exports=cI()),Ig.exports}var Tr=mI();const fI="_autocompleteSuggestion__substring_1s9ip_1",gI="_autocompleteSuggestion__inner_1s9ip_4",Sl={autocompleteSuggestion__substring:fI,autocompleteSuggestion__inner:gI,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_1s9ip_12"};class vI extends k.Component{constructor(n){super(n),this.state={value:n.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:n}=this.props,{value:t}=this.state;n(t)}onMouseMove(){const{setSuggestionIndex:n,index:t}=this.props;n(t)}render(){const{match:n,active:t,avoidBlur:r,id:l}=this.props,{value:s}=this.state.value,u=s.toLowerCase().startsWith(n.toLowerCase());return Tr.jsx("li",{id:l,role:"option","aria-selected":t,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:r,onMouseDown:r,onKeyDown:r,className:"autocompleteSuggestion typo-normal",children:u?Tr.jsxs("span",{className:`${Sl.autocompleteSuggestion__inner} ${t?Sl["autocompleteSuggestion--active"]:""}`,children:[s.substring(0,n.length),Tr.jsx("span",{className:Sl.autocompleteSuggestion__substring,children:s.substring(n.length)})]}):Tr.jsx("span",{className:`${Sl.autocompleteSuggestion__inner} ${t?Sl["autocompleteSuggestion--active"]:""}`,children:s})})}}const hI="_autocomplete_cj8jr_1",pI="_autocomplete__suggestions_cj8jr_27",ku={autocomplete:hI,autocomplete__suggestions:pI,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_cj8jr_31"};class LL extends k.Component{input;inputRef;constructor(n){super(n),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=t=>{this.input=t},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:n}=this.state;n&&(clearTimeout(n),this.setState({blurDelay:null}))}onChange(n){const{onChange:t}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),t(n)}onSearchButtonClick(n){const{onSearchButtonClick:t}=this.props;n.preventDefault(),t&&t()}onKeyDown(n){const{shouldShowSuggestions:t}=this.state;let{activeSuggestionIndex:r}=this.state;const{suggestions:l}=this.props,s=r>-1;switch(this.setState({setAriaActiveDescendant:n.keyCode===38||n.keyCode===40}),n.keyCode){case 9:s&&t&&this.setValue(l[r]);break;case 13:s&&t?(n.preventDefault(),this.setValue(l[r])):t&&l.length===1?this.setValue(l[0]):this.setState({shouldShowSuggestions:!1});break;case 27:t&&l.length>0&&(n.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:t&&(n.preventDefault(),r=r-1===-2?-1:r-1,this.setState({activeSuggestionIndex:r}));break;case 40:t&&(n.preventDefault(),r=r+1===l.length?l.length-1:r+1,this.setState({activeSuggestionIndex:r}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const n=setTimeout(()=>{const{shouldBlur:r}=this.state;r&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:n});const{onBlur:t}=this.props;t&&t()}setSuggestionIndex(n){this.setState({activeSuggestionIndex:n}),this.clearBlurDelay()}setValue(n){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:t}=this.props;t(n)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:n}=this.state;n&&(clearTimeout(n),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:n,id:t,ariaLabel:r,placeholder:l,value:s,name:u,shouldFocusOnMount:d,isLoading:m}=this.props,{activeSuggestionIndex:g,setAriaActiveDescendant:f,hasFocus:h,shouldShowSuggestions:p}=this.state,y=h&&p&&n.length>0,w=f&&g>-1?`${t}-item-${g}`:void 0;return Tr.jsxs("div",{className:`${ku.autocomplete} autocomplete`,"aria-expanded":y,"aria-owns":`${t}-suggestions`,"aria-haspopup":"listbox",children:[Tr.jsx(Lu,{variant:"primary",id:t,name:u,"aria-label":r,"aria-autocomplete":"list","aria-controls":`${t}-suggestions`,"aria-activedescendant":w,placeholder:l,value:s,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:S=>{this.inputRef=S},className:"typo-normal",autoFocus:d,label:r,hideLabel:!0,children:Tr.jsx(Lu.Button,{loading:m,onClick:this.onSearchButtonClick})}),Tr.jsx("ul",{id:`${t}-suggestions`,role:"listbox",className:y?ku.autocomplete__suggestions:ku["autocomplete__suggestions--hidden"],children:y&&n.map((S,E)=>Tr.jsx(vI,{id:`${t}-item-${E}`,index:E,value:S,match:s,active:E===g,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},S.key))})]})}}var Ku=function(e,n){return Ku=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])},Ku(e,n)};function qt(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Ku(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var ue=function(){return ue=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},ue.apply(this,arguments)};function Hs(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t}function Zt(e,n,t){if(arguments.length===2)for(var r=0,l=n.length,s;r<l;r++)(s||!(r in n))&&(s||(s=Array.prototype.slice.call(n,0,r)),s[r]=n[r]);return e.concat(s||Array.prototype.slice.call(n))}function Jt(e,n){var t=n&&n.cache?n.cache:NI,r=n&&n.serializer?n.serializer:kI,l=n&&n.strategy?n.strategy:yI;return l(e,{cache:t,serializer:r})}function _I(e){return e==null||typeof e=="number"||typeof e=="boolean"}function EI(e,n,t,r){var l=_I(r)?r:t(r),s=n.get(l);return typeof s>"u"&&(s=e.call(this,r),n.set(l,s)),s}function dh(e,n,t){var r=Array.prototype.slice.call(arguments,3),l=t(r),s=n.get(l);return typeof s>"u"&&(s=e.apply(this,r),n.set(l,s)),s}function ch(e,n,t,r,l){return t.bind(n,e,r,l)}function yI(e,n){var t=e.length===1?EI:dh;return ch(e,this,t,n.cache.create(),n.serializer)}function bI(e,n){return ch(e,this,dh,n.cache.create(),n.serializer)}var kI=function(){return JSON.stringify(arguments)},TI=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(n){return this.cache[n]},e.prototype.set=function(n,t){this.cache[n]=t},e}(),NI={create:function(){return new TI}},Xt={variadic:bI},Le;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Le||(Le={}));var nn;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(nn||(nn={}));var Ja;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Ja||(Ja={}));function Mg(e){return e.type===nn.literal}function AI(e){return e.type===nn.argument}function mh(e){return e.type===nn.number}function fh(e){return e.type===nn.date}function gh(e){return e.type===nn.time}function vh(e){return e.type===nn.select}function hh(e){return e.type===nn.plural}function RI(e){return e.type===nn.pound}function ph(e){return e.type===nn.tag}function _h(e){return!!(e&&typeof e=="object"&&e.type===Ja.number)}function Vu(e){return!!(e&&typeof e=="object"&&e.type===Ja.dateTime)}var Eh=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,SI=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function wI(e){var n={};return e.replace(SI,function(t){var r=t.length;switch(t[0]){case"G":n.era=r===4?"long":r===5?"narrow":"short";break;case"y":n.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][r-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][r-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][r-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][r-1];break;case"s":n.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var OI=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function DI(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var n=e.split(OI).filter(function(p){return p.length>0}),t=[],r=0,l=n;r<l.length;r++){var s=l[r],u=s.split("/");if(u.length===0)throw new Error("Invalid number skeleton");for(var d=u[0],m=u.slice(1),g=0,f=m;g<f.length;g++){var h=f[g];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:d,options:m})}return t}function PI(e){return e.replace(/^(.*?)-/,"")}var xg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,yh=/^(@+)?(\+|#+)?[rs]?$/g,II=/(\*)(0+)|(#+)(0+)|(0+)/g,bh=/^(0+)$/;function Kg(e){var n={};return e[e.length-1]==="r"?n.roundingPriority="morePrecision":e[e.length-1]==="s"&&(n.roundingPriority="lessPrecision"),e.replace(yh,function(t,r,l){return typeof l!="string"?(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length):l==="+"?n.minimumSignificantDigits=r.length:r[0]==="#"?n.maximumSignificantDigits=r.length:(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length+(typeof l=="string"?l.length:0)),""}),n}function kh(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function FI(e){var n;if(e[0]==="E"&&e[1]==="E"?(n={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(n={notation:"scientific"},e=e.slice(1)),n){var t=e.slice(0,2);if(t==="+!"?(n.signDisplay="always",e=e.slice(2)):t==="+?"&&(n.signDisplay="exceptZero",e=e.slice(2)),!bh.test(e))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=e.length}return n}function Vg(e){var n={},t=kh(e);return t||n}function LI(e){for(var n={},t=0,r=e;t<r.length;t++){var l=r[t];switch(l.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=l.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=PI(l.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=ue(ue(ue({},n),{notation:"scientific"}),l.options.reduce(function(m,g){return ue(ue({},m),Vg(g))},{}));continue;case"engineering":n=ue(ue(ue({},n),{notation:"engineering"}),l.options.reduce(function(m,g){return ue(ue({},m),Vg(g))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(l.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(l.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");l.options[0].replace(II,function(m,g,f,h,p,y){if(g)n.minimumIntegerDigits=f.length;else{if(h&&p)throw new Error("We currently do not support maximum integer digits");if(y)throw new Error("We currently do not support exact integer digits")}return""});continue}if(bh.test(l.stem)){n.minimumIntegerDigits=l.stem.length;continue}if(xg.test(l.stem)){if(l.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");l.stem.replace(xg,function(m,g,f,h,p,y){return f==="*"?n.minimumFractionDigits=g.length:h&&h[0]==="#"?n.maximumFractionDigits=h.length:p&&y?(n.minimumFractionDigits=p.length,n.maximumFractionDigits=p.length+y.length):(n.minimumFractionDigits=g.length,n.maximumFractionDigits=g.length),""});var s=l.options[0];s==="w"?n=ue(ue({},n),{trailingZeroDisplay:"stripIfInteger"}):s&&(n=ue(ue({},n),Kg(s)));continue}if(yh.test(l.stem)){n=ue(ue({},n),Kg(l.stem));continue}var u=kh(l.stem);u&&(n=ue(ue({},n),u));var d=FI(l.stem);d&&(n=ue(ue({},n),d))}return n}var Ji={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function MI(e,n){for(var t="",r=0;r<e.length;r++){var l=e.charAt(r);if(l==="j"){for(var s=0;r+1<e.length&&e.charAt(r+1)===l;)s++,r++;var u=1+(s&1),d=s<2?1:3+(s>>1),m="a",g=xI(n);for((g=="H"||g=="k")&&(d=0);d-- >0;)t+=m;for(;u-- >0;)t=g+t}else l==="J"?t+="H":t+=l}return t}function xI(e){var n=e.hourCycle;if(n===void 0&&e.hourCycles&&e.hourCycles.length&&(n=e.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,r;t!=="root"&&(r=e.maximize().region);var l=Ji[r||""]||Ji[t||""]||Ji["".concat(t,"-001")]||Ji["001"];return l[0]}var Tu,KI=new RegExp("^".concat(Eh.source,"*")),VI=new RegExp("".concat(Eh.source,"*$"));function Me(e,n){return{start:e,end:n}}var BI=!!String.prototype.startsWith&&"_a".startsWith("a",1),GI=!!String.fromCodePoint,jI=!!Object.fromEntries,CI=!!String.prototype.codePointAt,UI=!!String.prototype.trimStart,qI=!!String.prototype.trimEnd,HI=!!Number.isSafeInteger,YI=HI?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Bu=!0;try{var $I=Nh("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Bu=((Tu=$I.exec("a"))===null||Tu===void 0?void 0:Tu[0])==="a"}catch{Bu=!1}var Bg=BI?function(e,n,t){return e.startsWith(n,t)}:function(e,n,t){return e.slice(t,t+n.length)===n},Gu=GI?String.fromCodePoint:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var t="",r=e.length,l=0,s;r>l;){if(s=e[l++],s>1114111)throw RangeError(s+" is not a valid code point");t+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return t},Gg=jI?Object.fromEntries:function(e){for(var n={},t=0,r=e;t<r.length;t++){var l=r[t],s=l[0],u=l[1];n[s]=u}return n},Th=CI?function(e,n){return e.codePointAt(n)}:function(e,n){var t=e.length;if(!(n<0||n>=t)){var r=e.charCodeAt(n),l;return r<55296||r>56319||n+1===t||(l=e.charCodeAt(n+1))<56320||l>57343?r:(r-55296<<10)+(l-56320)+65536}},WI=UI?function(e){return e.trimStart()}:function(e){return e.replace(KI,"")},zI=qI?function(e){return e.trimEnd()}:function(e){return e.replace(VI,"")};function Nh(e,n){return new RegExp(e,n)}var ju;if(Bu){var jg=Nh("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ju=function(e,n){var t;jg.lastIndex=n;var r=jg.exec(e);return(t=r[1])!==null&&t!==void 0?t:""}}else ju=function(e,n){for(var t=[];;){var r=Th(e,n);if(r===void 0||Ah(r)||QI(r))break;t.push(r),n+=r>=65536?2:1}return Gu.apply(void 0,t)};var JI=function(){function e(n,t){t===void 0&&(t={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(n,t,r){for(var l=[];!this.isEOF();){var s=this.char();if(s===123){var u=this.parseArgument(n,r);if(u.err)return u;l.push(u.val)}else{if(s===125&&n>0)break;if(s===35&&(t==="plural"||t==="selectordinal")){var d=this.clonePosition();this.bump(),l.push({type:nn.pound,location:Me(d,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(Le.UNMATCHED_CLOSING_TAG,Me(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Cu(this.peek()||0)){var u=this.parseTag(n,t);if(u.err)return u;l.push(u.val)}else{var u=this.parseLiteral(n,t);if(u.err)return u;l.push(u.val)}}}return{val:l,err:null}},e.prototype.parseTag=function(n,t){var r=this.clonePosition();this.bump();var l=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:nn.literal,value:"<".concat(l,"/>"),location:Me(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(n+1,t,!0);if(s.err)return s;var u=s.val,d=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Cu(this.char()))return this.error(Le.INVALID_TAG,Me(d,this.clonePosition()));var m=this.clonePosition(),g=this.parseTagName();return l!==g?this.error(Le.UNMATCHED_CLOSING_TAG,Me(m,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:nn.tag,value:l,children:u,location:Me(r,this.clonePosition())},err:null}:this.error(Le.INVALID_TAG,Me(d,this.clonePosition())))}else return this.error(Le.UNCLOSED_TAG,Me(r,this.clonePosition()))}else return this.error(Le.INVALID_TAG,Me(r,this.clonePosition()))},e.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&ZI(this.char());)this.bump();return this.message.slice(n,this.offset())},e.prototype.parseLiteral=function(n,t){for(var r=this.clonePosition(),l="";;){var s=this.tryParseQuote(t);if(s){l+=s;continue}var u=this.tryParseUnquoted(n,t);if(u){l+=u;continue}var d=this.tryParseLeftAngleBracket();if(d){l+=d;continue}break}var m=Me(r,this.clonePosition());return{val:{type:nn.literal,value:l,location:m},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!XI(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(r);this.bump()}return Gu.apply(void 0,t)},e.prototype.tryParseUnquoted=function(n,t){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(t==="plural"||t==="selectordinal")||r===125&&n>0?null:(this.bump(),Gu(r))},e.prototype.parseArgument=function(n,t){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Le.EXPECT_ARGUMENT_CLOSING_BRACE,Me(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Le.EMPTY_ARGUMENT,Me(r,this.clonePosition()));var l=this.parseIdentifierIfPossible().value;if(!l)return this.error(Le.MALFORMED_ARGUMENT,Me(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Le.EXPECT_ARGUMENT_CLOSING_BRACE,Me(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:nn.argument,value:l,location:Me(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Le.EXPECT_ARGUMENT_CLOSING_BRACE,Me(r,this.clonePosition())):this.parseArgumentOptions(n,t,l,r);default:return this.error(Le.MALFORMED_ARGUMENT,Me(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),t=this.offset(),r=ju(this.message,t),l=t+r.length;this.bumpTo(l);var s=this.clonePosition(),u=Me(n,s);return{value:r,location:u}},e.prototype.parseArgumentOptions=function(n,t,r,l){var s,u=this.clonePosition(),d=this.parseIdentifierIfPossible().value,m=this.clonePosition();switch(d){case"":return this.error(Le.EXPECT_ARGUMENT_TYPE,Me(u,m));case"number":case"date":case"time":{this.bumpSpace();var g=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var p=zI(h.val);if(p.length===0)return this.error(Le.EXPECT_ARGUMENT_STYLE,Me(this.clonePosition(),this.clonePosition()));var y=Me(f,this.clonePosition());g={style:p,styleLocation:y}}var w=this.tryParseArgumentClose(l);if(w.err)return w;var S=Me(l,this.clonePosition());if(g&&Bg(g?.style,"::",0)){var E=WI(g.style.slice(2));if(d==="number"){var h=this.parseNumberSkeletonFromString(E,g.styleLocation);return h.err?h:{val:{type:nn.number,value:r,location:S,style:h.val},err:null}}else{if(E.length===0)return this.error(Le.EXPECT_DATE_TIME_SKELETON,S);var A=E;this.locale&&(A=MI(E,this.locale));var p={type:Ja.dateTime,pattern:A,location:g.styleLocation,parsedOptions:this.shouldParseSkeletons?wI(A):{}},O=d==="date"?nn.date:nn.time;return{val:{type:O,value:r,location:S,style:p},err:null}}}return{val:{type:d==="number"?nn.number:d==="date"?nn.date:nn.time,value:r,location:S,style:(s=g?.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var N=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Le.EXPECT_SELECT_ARGUMENT_OPTIONS,Me(N,ue({},N)));this.bumpSpace();var F=this.parseIdentifierIfPossible(),T=0;if(d!=="select"&&F.value==="offset"){if(!this.bumpIf(":"))return this.error(Le.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Me(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(Le.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Le.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),F=this.parseIdentifierIfPossible(),T=h.val}var K=this.tryParsePluralOrSelectOptions(n,d,t,F);if(K.err)return K;var w=this.tryParseArgumentClose(l);if(w.err)return w;var L=Me(l,this.clonePosition());return d==="select"?{val:{type:nn.select,value:r,options:Gg(K.val),location:L},err:null}:{val:{type:nn.plural,value:r,options:Gg(K.val),offset:T,pluralType:d==="plural"?"cardinal":"ordinal",location:L},err:null}}default:return this.error(Le.INVALID_ARGUMENT_TYPE,Me(u,m))}},e.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(Le.EXPECT_ARGUMENT_CLOSING_BRACE,Me(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,t=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var l=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Le.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Me(l,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(n,t){var r=[];try{r=DI(n)}catch{return this.error(Le.INVALID_NUMBER_SKELETON,t)}return{val:{type:Ja.number,tokens:r,location:t,parsedOptions:this.shouldParseSkeletons?LI(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(n,t,r,l){for(var s,u=!1,d=[],m=new Set,g=l.value,f=l.location;;){if(g.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var p=this.tryParseDecimalInteger(Le.EXPECT_PLURAL_ARGUMENT_SELECTOR,Le.INVALID_PLURAL_ARGUMENT_SELECTOR);if(p.err)return p;f=Me(h,this.clonePosition()),g=this.message.slice(h.offset,this.offset())}else break}if(m.has(g))return this.error(t==="select"?Le.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Le.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);g==="other"&&(u=!0),this.bumpSpace();var y=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?Le.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Le.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Me(this.clonePosition(),this.clonePosition()));var w=this.parseMessage(n+1,t,r);if(w.err)return w;var S=this.tryParseArgumentClose(y);if(S.err)return S;d.push([g,{value:w.val,location:Me(y,this.clonePosition())}]),m.add(g),this.bumpSpace(),s=this.parseIdentifierIfPossible(),g=s.value,f=s.location}return d.length===0?this.error(t==="select"?Le.EXPECT_SELECT_ARGUMENT_SELECTOR:Le.EXPECT_PLURAL_ARGUMENT_SELECTOR,Me(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!u?this.error(Le.MISSING_OTHER_CLAUSE,Me(this.clonePosition(),this.clonePosition())):{val:d,err:null}},e.prototype.tryParseDecimalInteger=function(n,t){var r=1,l=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var s=!1,u=0;!this.isEOF();){var d=this.char();if(d>=48&&d<=57)s=!0,u=u*10+(d-48),this.bump();else break}var m=Me(l,this.clonePosition());return s?(u*=r,YI(u)?{val:u,err:null}:this.error(t,m)):this.error(n,m)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var t=Th(this.message,n);if(t===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(n,t){return{val:null,err:{kind:n,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},e.prototype.bumpIf=function(n){if(Bg(this.message,n,this.offset())){for(var t=0;t<n.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(n){var t=this.offset(),r=this.message.indexOf(n,t);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var t=this.offset();if(t===n)break;if(t>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Ah(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),t=this.offset(),r=this.message.charCodeAt(t+(n>=65536?2:1));return r??null},e}();function Cu(e){return e>=97&&e<=122||e>=65&&e<=90}function XI(e){return Cu(e)||e===47}function ZI(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Ah(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function QI(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Uu(e){e.forEach(function(n){if(delete n.location,vh(n)||hh(n))for(var t in n.options)delete n.options[t].location,Uu(n.options[t].value);else mh(n)&&_h(n.style)||(fh(n)||gh(n))&&Vu(n.style)?delete n.style.location:ph(n)&&Uu(n.children)})}function eF(e,n){n===void 0&&(n={}),n=ue({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var t=new JI(e,n).parse();if(t.err){var r=SyntaxError(Le[t.err.kind]);throw r.location=t.err.location,r.originalMessage=t.err.message,r}return n?.captureLocation||Uu(t.val),t.val}var lr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(lr||(lr={}));var qr=function(e){qt(n,e);function n(t,r,l){var s=e.call(this,t)||this;return s.code=r,s.originalMessage=l,s}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n}(Error),Cg=function(e){qt(n,e);function n(t,r,l,s){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(r,'". Options are "').concat(Object.keys(l).join('", "'),'"'),lr.INVALID_VALUE,s)||this}return n}(qr),nF=function(e){qt(n,e);function n(t,r,l){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(r),lr.INVALID_VALUE,l)||this}return n}(qr),tF=function(e){qt(n,e);function n(t,r){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(r,'"'),lr.MISSING_VALUE,r)||this}return n}(qr),qn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(qn||(qn={}));function rF(e){return e.length<2?e:e.reduce(function(n,t){var r=n[n.length-1];return!r||r.type!==qn.literal||t.type!==qn.literal?n.push(t):r.value+=t.value,n},[])}function Rh(e){return typeof e=="function"}function ds(e,n,t,r,l,s,u){if(e.length===1&&Mg(e[0]))return[{type:qn.literal,value:e[0].value}];for(var d=[],m=0,g=e;m<g.length;m++){var f=g[m];if(Mg(f)){d.push({type:qn.literal,value:f.value});continue}if(RI(f)){typeof s=="number"&&d.push({type:qn.literal,value:t.getNumberFormat(n).format(s)});continue}var h=f.value;if(!(l&&h in l))throw new tF(h,u);var p=l[h];if(AI(f)){(!p||typeof p=="string"||typeof p=="number")&&(p=typeof p=="string"||typeof p=="number"?String(p):""),d.push({type:typeof p=="string"?qn.literal:qn.object,value:p});continue}if(fh(f)){var y=typeof f.style=="string"?r.date[f.style]:Vu(f.style)?f.style.parsedOptions:void 0;d.push({type:qn.literal,value:t.getDateTimeFormat(n,y).format(p)});continue}if(gh(f)){var y=typeof f.style=="string"?r.time[f.style]:Vu(f.style)?f.style.parsedOptions:r.time.medium;d.push({type:qn.literal,value:t.getDateTimeFormat(n,y).format(p)});continue}if(mh(f)){var y=typeof f.style=="string"?r.number[f.style]:_h(f.style)?f.style.parsedOptions:void 0;y&&y.scale&&(p=p*(y.scale||1)),d.push({type:qn.literal,value:t.getNumberFormat(n,y).format(p)});continue}if(ph(f)){var w=f.children,S=f.value,E=l[S];if(!Rh(E))throw new nF(S,"function",u);var A=ds(w,n,t,r,l,s),O=E(A.map(function(T){return T.value}));Array.isArray(O)||(O=[O]),d.push.apply(d,O.map(function(T){return{type:typeof T=="string"?qn.literal:qn.object,value:T}}))}if(vh(f)){var N=f.options[p]||f.options.other;if(!N)throw new Cg(f.value,p,Object.keys(f.options),u);d.push.apply(d,ds(N.value,n,t,r,l));continue}if(hh(f)){var N=f.options["=".concat(p)];if(!N){if(!Intl.PluralRules)throw new qr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,lr.MISSING_INTL_API,u);var F=t.getPluralRules(n,{type:f.pluralType}).select(p-(f.offset||0));N=f.options[F]||f.options.other}if(!N)throw new Cg(f.value,p,Object.keys(f.options),u);d.push.apply(d,ds(N.value,n,t,r,l,p-(f.offset||0)));continue}}return rF(d)}function aF(e,n){return n?ue(ue(ue({},e||{}),n||{}),Object.keys(e).reduce(function(t,r){return t[r]=ue(ue({},e[r]),n[r]||{}),t},{})):e}function lF(e,n){return n?Object.keys(e).reduce(function(t,r){return t[r]=aF(e[r],n[r]),t},ue({},e)):e}function Nu(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,t){e[n]=t}}}}}function iF(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Jt(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.NumberFormat).bind.apply(n,Zt([void 0],t,!1)))},{cache:Nu(e.number),strategy:Xt.variadic}),getDateTimeFormat:Jt(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.DateTimeFormat).bind.apply(n,Zt([void 0],t,!1)))},{cache:Nu(e.dateTime),strategy:Xt.variadic}),getPluralRules:Jt(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.PluralRules).bind.apply(n,Zt([void 0],t,!1)))},{cache:Nu(e.pluralRules),strategy:Xt.variadic})}}var Sh=function(){function e(n,t,r,l){t===void 0&&(t=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(m){var g=s.formatToParts(m);if(g.length===1)return g[0].value;var f=g.reduce(function(h,p){return!h.length||p.type!==qn.literal||typeof h[h.length-1]!="string"?h.push(p.value):h[h.length-1]+=p.value,h},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(m){return ds(s.ast,s.locales,s.formatters,s.formats,m,void 0,s.message)},this.resolvedOptions=function(){var m;return{locale:((m=s.resolvedLocale)===null||m===void 0?void 0:m.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof n=="string"){if(this.message=n,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=l||{};u.formatters;var d=Hs(u,["formatters"]);this.ast=e.__parse(n,ue(ue({},d),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=lF(e.formats,r),this.formatters=l&&l.formatters||iF(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(n);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},e.__parse=eF,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),va;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(va||(va={}));var Zl=function(e){qt(n,e);function n(t,r,l){var s=this,u=l?l instanceof Error?l:new Error(String(l)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(r,`
`).concat(u?`
`.concat(u.message,`
`).concat(u.stack):""))||this,s.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,n),s}return n}(Error),sF=function(e){qt(n,e);function n(t,r){return e.call(this,va.UNSUPPORTED_FORMATTER,t,r)||this}return n}(Zl),oF=function(e){qt(n,e);function n(t,r){return e.call(this,va.INVALID_CONFIG,t,r)||this}return n}(Zl),Ug=function(e){qt(n,e);function n(t,r){return e.call(this,va.MISSING_DATA,t,r)||this}return n}(Zl),It=function(e){qt(n,e);function n(t,r,l){var s=e.call(this,va.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(r,`
`),l)||this;return s.locale=r,s}return n}(Zl),Au=function(e){qt(n,e);function n(t,r,l,s){var u=e.call(this,"".concat(t,`
MessageID: `).concat(l?.id,`
Default Message: `).concat(l?.defaultMessage,`
Description: `).concat(l?.description,`
`),r,s)||this;return u.descriptor=l,u.locale=r,u}return n}(It),uF=function(e){qt(n,e);function n(t,r){var l=e.call(this,va.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(r,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(s){var u;return(u=s.value)!==null&&u!==void 0?u:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return l.descriptor=t,l}return n}(Zl);function dF(e,n,t){if(t===void 0&&(t=Error),!e)throw new t(n)}function al(e,n,t){return t===void 0&&(t={}),n.reduce(function(r,l){return l in e?r[l]=e[l]:l in t&&(r[l]=t[l]),r},{})}var cF=function(e){},mF=function(e){},wh={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:cF,onWarn:mF};function Oh(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function aa(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,t){e[n]=t}}}}}function fF(e){e===void 0&&(e=Oh());var n=Intl.RelativeTimeFormat,t=Intl.ListFormat,r=Intl.DisplayNames,l=Jt(function(){for(var d,m=[],g=0;g<arguments.length;g++)m[g]=arguments[g];return new((d=Intl.DateTimeFormat).bind.apply(d,Zt([void 0],m,!1)))},{cache:aa(e.dateTime),strategy:Xt.variadic}),s=Jt(function(){for(var d,m=[],g=0;g<arguments.length;g++)m[g]=arguments[g];return new((d=Intl.NumberFormat).bind.apply(d,Zt([void 0],m,!1)))},{cache:aa(e.number),strategy:Xt.variadic}),u=Jt(function(){for(var d,m=[],g=0;g<arguments.length;g++)m[g]=arguments[g];return new((d=Intl.PluralRules).bind.apply(d,Zt([void 0],m,!1)))},{cache:aa(e.pluralRules),strategy:Xt.variadic});return{getDateTimeFormat:l,getNumberFormat:s,getMessageFormat:Jt(function(d,m,g,f){return new Sh(d,m,g,ue({formatters:{getNumberFormat:s,getDateTimeFormat:l,getPluralRules:u}},f||{}))},{cache:aa(e.message),strategy:Xt.variadic}),getRelativeTimeFormat:Jt(function(){for(var d=[],m=0;m<arguments.length;m++)d[m]=arguments[m];return new(n.bind.apply(n,Zt([void 0],d,!1)))},{cache:aa(e.relativeTime),strategy:Xt.variadic}),getPluralRules:u,getListFormat:Jt(function(){for(var d=[],m=0;m<arguments.length;m++)d[m]=arguments[m];return new(t.bind.apply(t,Zt([void 0],d,!1)))},{cache:aa(e.list),strategy:Xt.variadic}),getDisplayNames:Jt(function(){for(var d=[],m=0;m<arguments.length;m++)d[m]=arguments[m];return new(r.bind.apply(r,Zt([void 0],d,!1)))},{cache:aa(e.displayNames),strategy:Xt.variadic})}}function Gd(e,n,t,r){var l=e&&e[n],s;if(l&&(s=l[t]),s)return s;r(new sF("No ".concat(n," format named: ").concat(t)))}function Xi(e,n){return Object.keys(e).reduce(function(t,r){return t[r]=ue({timeZone:n},e[r]),t},{})}function qg(e,n){var t=Object.keys(ue(ue({},e),n));return t.reduce(function(r,l){return r[l]=ue(ue({},e[l]||{}),n[l]||{}),r},{})}function Hg(e,n){if(!n)return e;var t=Sh.formats;return ue(ue(ue({},t),e),{date:qg(Xi(t.date,n),Xi(e.date||{},n)),time:qg(Xi(t.time,n),Xi(e.time||{},n))})}var qu=function(e,n,t,r,l){var s=e.locale,u=e.formats,d=e.messages,m=e.defaultLocale,g=e.defaultFormats,f=e.fallbackOnEmptyString,h=e.onError,p=e.timeZone,y=e.defaultRichTextElements;t===void 0&&(t={id:""});var w=t.id,S=t.defaultMessage;dF(!!w,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var E=String(w),A=d&&Object.prototype.hasOwnProperty.call(d,E)&&d[E];if(Array.isArray(A)&&A.length===1&&A[0].type===nn.literal)return A[0].value;if(!r&&A&&typeof A=="string"&&!y)return A.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=ue(ue({},y),r||{}),u=Hg(u,p),g=Hg(g,p),!A){if(f===!1&&A==="")return A;if((!S||s&&s.toLowerCase()!==m.toLowerCase())&&h(new uF(t,s)),S)try{var O=n.getMessageFormat(S,m,g,l);return O.format(r)}catch(N){return h(new Au('Error formatting default message for: "'.concat(E,'", rendering default message verbatim'),s,t,N)),typeof S=="string"?S:E}return E}try{var O=n.getMessageFormat(A,s,u,ue({formatters:n},l||{}));return O.format(r)}catch(N){h(new Au('Error formatting message: "'.concat(E,'", using ').concat(S?"default message":"id"," as fallback."),s,t,N))}if(S)try{var O=n.getMessageFormat(S,m,g,l);return O.format(r)}catch(N){h(new Au('Error formatting the default message for: "'.concat(E,'", rendering message verbatim'),s,t,N))}return typeof A=="string"?A:typeof S=="string"?S:E},gF=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ql(e,n,t,r){var l=e.locale,s=e.formats,u=e.onError,d=e.timeZone;r===void 0&&(r={});var m=r.format,g=ue(ue({},d&&{timeZone:d}),m&&Gd(s,n,m,u)),f=al(r,gF,g);return n==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=ue(ue({},f),{hour:"numeric",minute:"numeric"})),t(l,f)}function vF(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var l=t[0],s=t[1],u=s===void 0?{}:s,d=typeof l=="string"?new Date(l||0):l;try{return Ql(e,"date",n,u).format(d)}catch(m){e.onError(new It("Error formatting date.",e.locale,m))}return String(d)}function hF(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var l=t[0],s=t[1],u=s===void 0?{}:s,d=typeof l=="string"?new Date(l||0):l;try{return Ql(e,"time",n,u).format(d)}catch(m){e.onError(new It("Error formatting time.",e.locale,m))}return String(d)}function pF(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var l=t[0],s=t[1],u=t[2],d=u===void 0?{}:u,m=typeof l=="string"?new Date(l||0):l,g=typeof s=="string"?new Date(s||0):s;try{return Ql(e,"dateTimeRange",n,d).formatRange(m,g)}catch(f){e.onError(new It("Error formatting date time range.",e.locale,f))}return String(m)}function _F(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var l=t[0],s=t[1],u=s===void 0?{}:s,d=typeof l=="string"?new Date(l||0):l;try{return Ql(e,"date",n,u).formatToParts(d)}catch(m){e.onError(new It("Error formatting date.",e.locale,m))}return[]}function EF(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var l=t[0],s=t[1],u=s===void 0?{}:s,d=typeof l=="string"?new Date(l||0):l;try{return Ql(e,"time",n,u).formatToParts(d)}catch(m){e.onError(new It("Error formatting time.",e.locale,m))}return[]}var yF=["style","type","fallback","languageDisplay"];function bF(e,n,t,r){var l=e.locale,s=e.onError,u=Intl.DisplayNames;u||s(new qr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,lr.MISSING_INTL_API));var d=al(r,yF);try{return n(l,d).of(t)}catch(m){s(new It("Error formatting display name.",l,m))}}var kF=["type","style"],Yg=Date.now();function TF(e){return"".concat(Yg,"_").concat(e,"_").concat(Yg)}function NF(e,n,t,r){r===void 0&&(r={});var l=Dh(e,n,t,r).reduce(function(s,u){var d=u.value;return typeof d!="string"?s.push(d):typeof s[s.length-1]=="string"?s[s.length-1]+=d:s.push(d),s},[]);return l.length===1?l[0]:l.length===0?"":l}function Dh(e,n,t,r){var l=e.locale,s=e.onError;r===void 0&&(r={});var u=Intl.ListFormat;u||s(new qr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,lr.MISSING_INTL_API));var d=al(r,kF);try{var m={},g=t.map(function(f,h){if(typeof f=="object"){var p=TF(h);return m[p]=f,p}return String(f)});return n(l,d).formatToParts(g).map(function(f){return f.type==="literal"?f:ue(ue({},f),{value:m[f.value]||f.value})})}catch(f){s(new It("Error formatting list.",l,f))}return t}var AF=["type"];function RF(e,n,t,r){var l=e.locale,s=e.onError;r===void 0&&(r={}),Intl.PluralRules||s(new qr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,lr.MISSING_INTL_API));var u=al(r,AF);try{return n(l,u).select(t)}catch(d){s(new It("Error formatting plural.",l,d))}return"other"}var SF=["numeric","style"];function wF(e,n,t){var r=e.locale,l=e.formats,s=e.onError;t===void 0&&(t={});var u=t.format,d=!!u&&Gd(l,"relative",u,s)||{},m=al(t,SF,d);return n(r,m)}function OF(e,n,t,r,l){l===void 0&&(l={}),r||(r="second");var s=Intl.RelativeTimeFormat;s||e.onError(new qr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,lr.MISSING_INTL_API));try{return wF(e,n,l).format(t,r)}catch(u){e.onError(new It("Error formatting relative time.",e.locale,u))}return String(t)}var DF=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Ph(e,n,t){var r=e.locale,l=e.formats,s=e.onError;t===void 0&&(t={});var u=t.format,d=u&&Gd(l,"number",u,s)||{},m=al(t,DF,d);return n(r,m)}function PF(e,n,t,r){r===void 0&&(r={});try{return Ph(e,n,r).format(t)}catch(l){e.onError(new It("Error formatting number.",e.locale,l))}return String(t)}function IF(e,n,t,r){r===void 0&&(r={});try{return Ph(e,n,r).formatToParts(t)}catch(l){e.onError(new It("Error formatting number.",e.locale,l))}return[]}function FF(e){var n=e?e[Object.keys(e)[0]]:void 0;return typeof n=="string"}function LF(e){e.onWarn&&e.defaultRichTextElements&&FF(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function MF(e,n){var t=fF(n),r=ue(ue({},wh),e),l=r.locale,s=r.defaultLocale,u=r.onError;return l?!Intl.NumberFormat.supportedLocalesOf(l).length&&u?u(new Ug('Missing locale data for locale: "'.concat(l,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(l).length&&u&&u(new Ug('Missing locale data for locale: "'.concat(l,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(u&&u(new oF('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),LF(r),ue(ue({},r),{formatters:t,formatNumber:PF.bind(null,r,t.getNumberFormat),formatNumberToParts:IF.bind(null,r,t.getNumberFormat),formatRelativeTime:OF.bind(null,r,t.getRelativeTimeFormat),formatDate:vF.bind(null,r,t.getDateTimeFormat),formatDateToParts:_F.bind(null,r,t.getDateTimeFormat),formatTime:hF.bind(null,r,t.getDateTimeFormat),formatDateTimeRange:pF.bind(null,r,t.getDateTimeFormat),formatTimeToParts:EF.bind(null,r,t.getDateTimeFormat),formatPlural:RF.bind(null,r,t.getPluralRules),formatMessage:qu.bind(null,r,t),$t:qu.bind(null,r,t),formatList:NF.bind(null,r,t.getListFormat),formatListToParts:Dh.bind(null,r,t.getListFormat),formatDisplayName:bF.bind(null,r,t.getDisplayNames)})}function xF(e,n,t){if(t===void 0&&(t=Error),!e)throw new t(n)}function KF(e){xF(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var VF=ue(ue({},wh),{textComponent:R.Fragment}),BF={key:42},GF=function(e){return R.isValidElement(e)?R.createElement(R.Fragment,BF,e):e},jF=function(e){var n;return(n=R.Children.map(e,GF))!==null&&n!==void 0?n:[]};function CF(e){return function(n){return e(R.Children.toArray(n))}}var $g={exports:{}},je={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function UF(){if(Wg)return je;Wg=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,l=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,m=e?Symbol.for("react.async_mode"):60111,g=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,S=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,A=e?Symbol.for("react.responder"):60118,O=e?Symbol.for("react.scope"):60119;function N(T){if(typeof T=="object"&&T!==null){var K=T.$$typeof;switch(K){case n:switch(T=T.type,T){case m:case g:case r:case s:case l:case h:return T;default:switch(T=T&&T.$$typeof,T){case d:case f:case w:case y:case u:return T;default:return K}}case t:return K}}}function F(T){return N(T)===g}return je.AsyncMode=m,je.ConcurrentMode=g,je.ContextConsumer=d,je.ContextProvider=u,je.Element=n,je.ForwardRef=f,je.Fragment=r,je.Lazy=w,je.Memo=y,je.Portal=t,je.Profiler=s,je.StrictMode=l,je.Suspense=h,je.isAsyncMode=function(T){return F(T)||N(T)===m},je.isConcurrentMode=F,je.isContextConsumer=function(T){return N(T)===d},je.isContextProvider=function(T){return N(T)===u},je.isElement=function(T){return typeof T=="object"&&T!==null&&T.$$typeof===n},je.isForwardRef=function(T){return N(T)===f},je.isFragment=function(T){return N(T)===r},je.isLazy=function(T){return N(T)===w},je.isMemo=function(T){return N(T)===y},je.isPortal=function(T){return N(T)===t},je.isProfiler=function(T){return N(T)===s},je.isStrictMode=function(T){return N(T)===l},je.isSuspense=function(T){return N(T)===h},je.isValidElementType=function(T){return typeof T=="string"||typeof T=="function"||T===r||T===g||T===s||T===l||T===h||T===p||typeof T=="object"&&T!==null&&(T.$$typeof===w||T.$$typeof===y||T.$$typeof===u||T.$$typeof===d||T.$$typeof===f||T.$$typeof===E||T.$$typeof===A||T.$$typeof===O||T.$$typeof===S)},je.typeOf=N,je}var zg;function qF(){return zg||(zg=1,$g.exports=UF()),$g.exports}var Ru,Jg;function HF(){if(Jg)return Ru;Jg=1;var e=qF(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=r,s[e.Memo]=l;function u(w){return e.isMemo(w)?l:s[w.$$typeof]||n}var d=Object.defineProperty,m=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;function y(w,S,E){if(typeof S!="string"){if(p){var A=h(S);A&&A!==p&&y(w,A,E)}var O=m(S);g&&(O=O.concat(g(S)));for(var N=u(w),F=u(S),T=0;T<O.length;++T){var K=O[T];if(!t[K]&&!(E&&E[K])&&!(F&&F[K])&&!(N&&N[K])){var L=f(S,K);try{d(w,K,L)}catch{}}}}return w}return Ru=y,Ru}HF();var jd=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=R.createContext(null)):R.createContext(null);jd.Consumer;jd.Provider;var YF=jd;function Ih(){var e=R.useContext(YF);return KF(e),e}var Hu;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Hu||(Hu={}));var Yu;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Yu||(Yu={}));function Fh(e){var n=function(t){var r=Ih(),l=t.value,s=t.children,u=Hs(t,["value","children"]),d=typeof l=="string"?new Date(l||0):l,m=e==="formatDate"?r.formatDateToParts(d,u):r.formatTimeToParts(d,u);return s(m)};return n.displayName=Yu[e],n}function ei(e){var n=function(t){var r=Ih(),l=t.value,s=t.children,u=Hs(t,["value","children"]),d=r[e](l,u);if(typeof s=="function")return s(d);var m=r.textComponent||R.Fragment;return R.createElement(m,null,d)};return n.displayName=Hu[e],n}function Lh(e){return e&&Object.keys(e).reduce(function(n,t){var r=e[t];return n[t]=Rh(r)?CF(r):r,n},{})}var Xg=function(e,n,t,r){for(var l=[],s=4;s<arguments.length;s++)l[s-4]=arguments[s];var u=Lh(r),d=qu.apply(void 0,Zt([e,n,t,u],l,!1));return Array.isArray(d)?jF(d):d},$F=function(e,n){var t=e.defaultRichTextElements,r=Hs(e,["defaultRichTextElements"]),l=Lh(t),s=MF(ue(ue(ue({},VF),r),{defaultRichTextElements:l}),n),u={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:l};return ue(ue({},s),{formatMessage:Xg.bind(null,u,s.formatters),$t:Xg.bind(null,u,s.formatters)})};ei("formatDate");ei("formatTime");ei("formatNumber");ei("formatList");ei("formatDisplayName");Fh("formatDate");Fh("formatTime");function Cd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $u={exports:{}},WF=$u.exports,Zg;function zF(){return Zg||(Zg=1,function(e,n){(function(t,r){e.exports=r()})(WF,function(){var t,r,l=1e3,s=6e4,u=36e5,d=864e5,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g=31536e6,f=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,p={years:g,months:f,days:d,hours:u,minutes:s,seconds:l,milliseconds:1,weeks:6048e5},y=function(K){return K instanceof F},w=function(K,L,V){return new F(K,V,L.$l)},S=function(K){return r.p(K)+"s"},E=function(K){return K<0},A=function(K){return E(K)?Math.ceil(K):Math.floor(K)},O=function(K){return Math.abs(K)},N=function(K,L){return K?E(K)?{negative:!0,format:""+O(K)+L}:{negative:!1,format:""+K+L}:{negative:!1,format:""}},F=function(){function K(V,C,J){var W=this;if(this.$d={},this.$l=J,V===void 0&&(this.$ms=0,this.parseFromMilliseconds()),C)return w(V*p[S(C)],this);if(typeof V=="number")return this.$ms=V,this.parseFromMilliseconds(),this;if(typeof V=="object")return Object.keys(V).forEach(function(Z){W.$d[S(Z)]=V[Z]}),this.calMilliseconds(),this;if(typeof V=="string"){var q=V.match(h);if(q){var G=q.slice(2).map(function(Z){return Z!=null?Number(Z):0});return this.$d.years=G[0],this.$d.months=G[1],this.$d.weeks=G[2],this.$d.days=G[3],this.$d.hours=G[4],this.$d.minutes=G[5],this.$d.seconds=G[6],this.calMilliseconds(),this}}return this}var L=K.prototype;return L.calMilliseconds=function(){var V=this;this.$ms=Object.keys(this.$d).reduce(function(C,J){return C+(V.$d[J]||0)*p[J]},0)},L.parseFromMilliseconds=function(){var V=this.$ms;this.$d.years=A(V/g),V%=g,this.$d.months=A(V/f),V%=f,this.$d.days=A(V/d),V%=d,this.$d.hours=A(V/u),V%=u,this.$d.minutes=A(V/s),V%=s,this.$d.seconds=A(V/l),V%=l,this.$d.milliseconds=V},L.toISOString=function(){var V=N(this.$d.years,"Y"),C=N(this.$d.months,"M"),J=+this.$d.days||0;this.$d.weeks&&(J+=7*this.$d.weeks);var W=N(J,"D"),q=N(this.$d.hours,"H"),G=N(this.$d.minutes,"M"),Z=this.$d.seconds||0;this.$d.milliseconds&&(Z+=this.$d.milliseconds/1e3,Z=Math.round(1e3*Z)/1e3);var re=N(Z,"S"),ne=V.negative||C.negative||W.negative||q.negative||G.negative||re.negative,oe=q.format||G.format||re.format?"T":"",ee=(ne?"-":"")+"P"+V.format+C.format+W.format+oe+q.format+G.format+re.format;return ee==="P"||ee==="-P"?"P0D":ee},L.toJSON=function(){return this.toISOString()},L.format=function(V){var C=V||"YYYY-MM-DDTHH:mm:ss",J={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return C.replace(m,function(W,q){return q||String(J[W])})},L.as=function(V){return this.$ms/p[S(V)]},L.get=function(V){var C=this.$ms,J=S(V);return J==="milliseconds"?C%=1e3:C=J==="weeks"?A(C/p[J]):this.$d[J],C||0},L.add=function(V,C,J){var W;return W=C?V*p[S(C)]:y(V)?V.$ms:w(V,this).$ms,w(this.$ms+W*(J?-1:1),this)},L.subtract=function(V,C){return this.add(V,C,!0)},L.locale=function(V){var C=this.clone();return C.$l=V,C},L.clone=function(){return w(this.$ms,this)},L.humanize=function(V){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!V)},L.valueOf=function(){return this.asMilliseconds()},L.milliseconds=function(){return this.get("milliseconds")},L.asMilliseconds=function(){return this.as("milliseconds")},L.seconds=function(){return this.get("seconds")},L.asSeconds=function(){return this.as("seconds")},L.minutes=function(){return this.get("minutes")},L.asMinutes=function(){return this.as("minutes")},L.hours=function(){return this.get("hours")},L.asHours=function(){return this.as("hours")},L.days=function(){return this.get("days")},L.asDays=function(){return this.as("days")},L.weeks=function(){return this.get("weeks")},L.asWeeks=function(){return this.as("weeks")},L.months=function(){return this.get("months")},L.asMonths=function(){return this.as("months")},L.years=function(){return this.get("years")},L.asYears=function(){return this.as("years")},K}(),T=function(K,L,V){return K.add(L.years()*V,"y").add(L.months()*V,"M").add(L.days()*V,"d").add(L.hours()*V,"h").add(L.minutes()*V,"m").add(L.seconds()*V,"s").add(L.milliseconds()*V,"ms")};return function(K,L,V){t=V,r=V().$utils(),V.duration=function(W,q){var G=V.locale();return w(W,{$l:G},q)},V.isDuration=y;var C=L.prototype.add,J=L.prototype.subtract;L.prototype.add=function(W,q){return y(W)?T(this,W,1):C.bind(this)(W,q)},L.prototype.subtract=function(W,q){return y(W)?T(this,W,-1):J.bind(this)(W,q)}}})}($u)),$u.exports}var JF=zF();const XF=Cd(JF);var Wu={exports:{}},ZF=Wu.exports,Qg;function QF(){return Qg||(Qg=1,function(e,n){(function(t,r){e.exports=r()})(ZF,function(){var t="day";return function(r,l,s){var u=function(g){return g.add(4-g.isoWeekday(),t)},d=l.prototype;d.isoWeekYear=function(){return u(this).year()},d.isoWeek=function(g){if(!this.$utils().u(g))return this.add(7*(g-this.isoWeek()),t);var f,h,p,y,w=u(this),S=(f=this.isoWeekYear(),h=this.$u,p=(h?s.utc:s)().year(f).startOf("year"),y=4-p.isoWeekday(),p.isoWeekday()>4&&(y+=7),p.add(y,t));return w.diff(S,"week")+1},d.isoWeekday=function(g){return this.$utils().u(g)?this.day()||7:this.day(this.day()%7?g:g-7)};var m=d.startOf;d.startOf=function(g,f){var h=this.$utils(),p=!!h.u(f)||f;return h.p(g)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):m.bind(this)(g,f)}}})}(Wu)),Wu.exports}var eL=QF();const nL=Cd(eL);var zu={exports:{}},tL=zu.exports,ev;function rL(){return ev||(ev=1,function(e,n){(function(t,r){e.exports=r()})(tL,function(){var t="minute",r=/[+-]\d\d(?::?\d\d)?/g,l=/([+-]|\d\d)/g;return function(s,u,d){var m=u.prototype;d.utc=function(S){var E={date:S,utc:!0,args:arguments};return new u(E)},m.utc=function(S){var E=d(this.toDate(),{locale:this.$L,utc:!0});return S?E.add(this.utcOffset(),t):E},m.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var g=m.parse;m.parse=function(S){S.utc&&(this.$u=!0),this.$utils().u(S.$offset)||(this.$offset=S.$offset),g.call(this,S)};var f=m.init;m.init=function(){if(this.$u){var S=this.$d;this.$y=S.getUTCFullYear(),this.$M=S.getUTCMonth(),this.$D=S.getUTCDate(),this.$W=S.getUTCDay(),this.$H=S.getUTCHours(),this.$m=S.getUTCMinutes(),this.$s=S.getUTCSeconds(),this.$ms=S.getUTCMilliseconds()}else f.call(this)};var h=m.utcOffset;m.utcOffset=function(S,E){var A=this.$utils().u;if(A(S))return this.$u?0:A(this.$offset)?h.call(this):this.$offset;if(typeof S=="string"&&(S=function(T){T===void 0&&(T="");var K=T.match(r);if(!K)return null;var L=(""+K[0]).match(l)||["-",0,0],V=L[0],C=60*+L[1]+ +L[2];return C===0?0:V==="+"?C:-C}(S),S===null))return this;var O=Math.abs(S)<=16?60*S:S,N=this;if(E)return N.$offset=O,N.$u=S===0,N;if(S!==0){var F=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(N=this.local().add(O+F,t)).$offset=O,N.$x.$localOffset=F}else N=this.utc();return N};var p=m.format;m.format=function(S){var E=S||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,E)},m.valueOf=function(){var S=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*S},m.isUTC=function(){return!!this.$u},m.toISOString=function(){return this.toDate().toISOString()},m.toString=function(){return this.toDate().toUTCString()};var y=m.toDate;m.toDate=function(S){return S==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():y.call(this)};var w=m.diff;m.diff=function(S,E,A){if(S&&this.$u===S.$u)return w.call(this,S,E,A);var O=this.local(),N=d(S).local();return w.call(O,N,E,A)}}})}(zu)),zu.exports}var aL=rL();const lL=Cd(aL),iL=Oh(),Ys=e=>$F({locale:"nb-NO",messages:e},iL),$s={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Ys($s);var Ju={exports:{}},sL=Ju.exports,nv;function oL(){return nv||(nv=1,function(e,n){(function(t,r){e.exports=r(at)})(sL,function(t){function r(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var l=r(t),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return l.default.locale(s,null,!0),s})}(Ju)),Ju.exports}oL();at.extend(lL);at.extend(nL);at.extend(XF);Ys($s);Ys($s);var tv={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function uL(){if(rv)return wl;rv=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,l,s){var u=null;if(s!==void 0&&(u=""+s),l.key!==void 0&&(u=""+l.key),"key"in l){s={};for(var d in l)d!=="key"&&(s[d]=l[d])}else s=l;return l=s.ref,{$$typeof:e,type:r,key:u,ref:l!==void 0?l:null,props:s}}return wl.Fragment=n,wl.jsx=t,wl.jsxs=t,wl}var av;function dL(){return av||(av=1,tv.exports=uL()),tv.exports}dL();Ys($s);R.createContext({});var Xu={exports:{}},cL=Xu.exports,lv;function mL(){return lv||(lv=1,function(e,n){(function(t,r){e.exports=r()})(cL,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d/,s=/\d\d/,u=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,m={},g=function(E){return(E=+E)+(E>68?1900:2e3)},f=function(E){return function(A){this[E]=+A}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var O=A.match(/([+-]|\d\d)/g),N=60*O[1]+(+O[2]||0);return N===0?0:O[0]==="+"?-N:N}(E)}],p=function(E){var A=m[E];return A&&(A.indexOf?A:A.s.concat(A.f))},y=function(E,A){var O,N=m.meridiem;if(N){for(var F=1;F<=24;F+=1)if(E.indexOf(N(F,0,A))>-1){O=F>12;break}}else O=E===(A?"pm":"PM");return O},w={A:[d,function(E){this.afternoon=y(E,!1)}],a:[d,function(E){this.afternoon=y(E,!0)}],Q:[l,function(E){this.month=3*(E-1)+1}],S:[l,function(E){this.milliseconds=100*+E}],SS:[s,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[u,f("seconds")],ss:[u,f("seconds")],m:[u,f("minutes")],mm:[u,f("minutes")],H:[u,f("hours")],h:[u,f("hours")],HH:[u,f("hours")],hh:[u,f("hours")],D:[u,f("day")],DD:[s,f("day")],Do:[d,function(E){var A=m.ordinal,O=E.match(/\d+/);if(this.day=O[0],A)for(var N=1;N<=31;N+=1)A(N).replace(/\[|\]/g,"")===E&&(this.day=N)}],w:[u,f("week")],ww:[s,f("week")],M:[u,f("month")],MM:[s,f("month")],MMM:[d,function(E){var A=p("months"),O=(p("monthsShort")||A.map(function(N){return N.slice(0,3)})).indexOf(E)+1;if(O<1)throw new Error;this.month=O%12||O}],MMMM:[d,function(E){var A=p("months").indexOf(E)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,f("year")],YY:[s,function(E){this.year=g(E)}],YYYY:[/\d{4}/,f("year")],Z:h,ZZ:h};function S(E){var A,O;A=E,O=m&&m.formats;for(var N=(E=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(J,W,q){var G=q&&q.toUpperCase();return W||O[q]||t[q]||O[G].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Z,re,ne){return re||ne.slice(1)})})).match(r),F=N.length,T=0;T<F;T+=1){var K=N[T],L=w[K],V=L&&L[0],C=L&&L[1];N[T]=C?{regex:V,parser:C}:K.replace(/^\[|\]$/g,"")}return function(J){for(var W={},q=0,G=0;q<F;q+=1){var Z=N[q];if(typeof Z=="string")G+=Z.length;else{var re=Z.regex,ne=Z.parser,oe=J.slice(G),ee=re.exec(oe)[0];ne.call(W,ee),J=J.replace(ee,"")}}return function(me){var Ne=me.afternoon;if(Ne!==void 0){var Ee=me.hours;Ne?Ee<12&&(me.hours+=12):Ee===12&&(me.hours=0),delete me.afternoon}}(W),W}}return function(E,A,O){O.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(g=E.parseTwoDigitYear);var N=A.prototype,F=N.parse;N.parse=function(T){var K=T.date,L=T.utc,V=T.args;this.$u=L;var C=V[1];if(typeof C=="string"){var J=V[2]===!0,W=V[3]===!0,q=J||W,G=V[2];W&&(G=V[2]),m=this.$locale(),!J&&G&&(m=O.Ls[G]),this.$d=function(oe,ee,me,Ne){try{if(["x","X"].indexOf(ee)>-1)return new Date((ee==="X"?1e3:1)*oe);var Ee=S(ee)(oe),rn=Ee.year,on=Ee.month,it=Ee.day,ve=Ee.hours,_e=Ee.minutes,Ze=Ee.seconds,Qe=Ee.milliseconds,En=Ee.zone,st=Ee.week,Mn=new Date,Dn=it||(rn||on?1:Mn.getDate()),Wn=rn||Mn.getFullYear(),$e=0;rn&&!on||($e=on>0?on-1:Mn.getMonth());var yn,ot=ve||0,mn=_e||0,ut=Ze||0,zn=Qe||0;return En?new Date(Date.UTC(Wn,$e,Dn,ot,mn,ut,zn+60*En.offset*1e3)):me?new Date(Date.UTC(Wn,$e,Dn,ot,mn,ut,zn)):(yn=new Date(Wn,$e,Dn,ot,mn,ut,zn),st&&(yn=Ne(yn).week(st).toDate()),yn)}catch{return new Date("")}}(K,C,L,O),this.init(),G&&G!==!0&&(this.$L=this.locale(G).$L),q&&K!=this.format(C)&&(this.$d=new Date("")),m={}}else if(C instanceof Array)for(var Z=C.length,re=1;re<=Z;re+=1){V[1]=C[re-1];var ne=O.apply(this,V);if(ne.isValid()){this.$d=ne.$d,this.$L=ne.$L,this.init();break}re===Z&&(this.$d=new Date(""))}else F.call(this,T)}}})}(Xu)),Xu.exports}var fL=mL();const gL=dI(fL);at.extend(gL);Ut(Xl);const vL="_aksjonspunktMargin_1k4dy_1",hL={aksjonspunktMargin:vL},iv={DOKUMENTASJON_VIL_BLI_INNHENTET:"DOKUMENTASJON_VIL_BLI_INNHENTET",DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET:"DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET"},Mh=({readOnly:e,harÅpentAksjonspunkt:n,aksjonspunkt:t,alleMerknaderFraBeslutter:r,submittable:l,submitCallback:s,dokStatus:u})=>{const d=Ss(),{mellomlagretFormData:m,setMellomlagretFormData:g}=uv(),f=Cs({defaultValues:m??{dokStatus:u,...Vl.initialValues(t)}}),h=f.watch("begrunnelse");return j.jsx(qs,{formMethods:f,onSubmit:p=>s(pL(p)),setDataOnUnmount:g,children:j.jsxs(Ln,{gap:"space-24",children:[j.jsx(ua,{size:"small",level:"3",children:j.jsx(qe,{id:"InnhentDokOpptjeningUtlandPanel.OpptjeningUtland"})}),j.jsx(wd,{className:hL.aksjonspunktMargin,erAksjonspunktApent:n,erIkkeGodkjentAvBeslutter:!!r[t.definisjon]?.notAccepted,children:j.jsxs(Ln,{gap:"space-16",children:[j.jsxs(Bd,{name:"dokStatus",control:f.control,label:j.jsx(qe,{id:"InnhentDokOpptjeningUtlandPanel.InnhentelseDok"}),validate:[jr],isReadOnly:e,children:[j.jsx(za,{value:iv.DOKUMENTASJON_VIL_BLI_INNHENTET,size:"small",children:j.jsx(qe,{id:"InnhentDokOpptjeningUtlandPanel.Innhentes"})}),j.jsx(za,{value:iv.DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET,size:"small",children:j.jsx(qe,{id:"InnhentDokOpptjeningUtlandPanel.InnhentesIkke",values:{b:dT}})})]}),j.jsx(Vl,{control:f.control,isSubmittable:l,isReadOnly:e,hasBegrunnelse:!!h,label:d.formatMessage({id:"InnhentDokOpptjeningUtlandPanel.Begrunnelse"})}),j.jsx(oh,{isSubmittable:l,isSubmitting:f.formState.isSubmitting,isDirty:f.formState.isDirty,isReadOnly:e})]})})]})})},pL=e=>({kode:dn.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,...e});Mh.__docgenInfo={description:"",methods:[],displayName:"InnhentDokOpptjeningUtlandPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: MerkOpptjeningUtlandAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  dokStatus?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK>`,elements:[{name:"signature",type:"object",raw:`{
  dokStatus?: string;
}`,signature:{properties:[{key:"dokStatus",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},aksjonspunkt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},dokStatus:{required:!1,tsType:{name:"string"},description:""}}};const _L="_aksjonspunktMargin_cxh44_1",EL="_editIcon_cxh44_7",yL="_editIconReadonly_cxh44_14",Su={aksjonspunktMargin:_L,editIcon:EL,editIconReadonly:yL},bL=Os(3),kL=Ds(1500),TL=e=>{const n=e.toLowerCase();return n.charAt(0).toUpperCase()+n.slice(1)},NL=(e,n)=>({startdatoFraSoknad:e.oppgittFordeling?.startDatoForPermisjon,begrunnelse:n?.begrunnelse??""}),AL=(e,n)=>({kode:dn.OVERSTYR_AVKLAR_STARTDATO,opprinneligDato:e.oppgittFordeling?.startDatoForPermisjon,startdatoFraSoknad:gv(n.startdatoFraSoknad),begrunnelse:n.begrunnelse}),RL=(e,n)=>()=>{const t=e("startdatoFraSoknad");return at(t).isBefore("2019-01-01")?n.formatMessage({id:"StartdatoForForeldrepengerperiodenForm.StartdatoFør2019"}):void 0},xh=({submitCallback:e,aksjonspunkt:n,soknad:t,alleMerknaderFraBeslutter:r,readOnly:l})=>{const s=Ss(),{mellomlagretFormData:u,setMellomlagretFormData:d}=uv(),m=Cs({defaultValues:u??NL(t,n)}),[g,f]=R.useState(!1),h=()=>f(!0),p=()=>{m.reset(),f(!1)};return j.jsx(qs,{formMethods:m,onSubmit:y=>e(AL(t,y)),setDataOnUnmount:d,children:j.jsxs(Ln,{gap:"space-16",children:[j.jsx(ua,{size:"small",level:"3",children:j.jsx(qe,{id:"StartdatoForForeldrepengerperiodenForm.StartdatoForPerioden"})}),!g&&j.jsxs(_t,{gap:"space-8",children:[j.jsx(On,{size:"small",children:t.oppgittFordeling?TL(at(t.oppgittFordeling.startDatoForPermisjon).format("dddd D MMMM YYYY")):"-"}),j.jsx(Ev,{title:s.formatMessage({id:"StartdatoForForeldrepengerperiodenForm.EndreStartdato"}),className:l?Su.editIconReadonly:Su.editIcon,onClick:l?void 0:h})]}),g&&j.jsx(wd,{className:Su.aksjonspunktMargin,erAksjonspunktApent:!1,erIkkeGodkjentAvBeslutter:!!r[dn.OVERSTYR_AVKLAR_STARTDATO]?.notAccepted,children:j.jsxs(Ln,{gap:"space-16",children:[j.jsx(KP,{name:"startdatoFraSoknad",control:m.control,label:s.formatMessage({id:"StartdatoForForeldrepengerperiodenForm.Startdato"}),validate:[jr,cT,RL(m.getValues,s)],isReadOnly:l}),j.jsx(Us,{name:"begrunnelse",control:m.control,label:j.jsx(qe,{id:"StartdatoForForeldrepengerperiodenForm.Vurdering"}),validate:[jr,bL,kL,Ps],maxLength:1500,readOnly:l}),j.jsxs(_t,{gap:"space-8",children:[j.jsx(yt,{size:"small",variant:"primary",disabled:!m.formState.isDirty||m.formState.isSubmitting,loading:m.formState.isSubmitting,children:j.jsx(qe,{id:"UtlandPanel.lagre"})}),j.jsx(yt,{variant:"secondary",size:"small",onClick:p,type:"button",children:j.jsx(qe,{id:"UtlandPanel.avbryt"})})]})]})})]})})};xh.__docgenInfo={description:`StartdatoForForeldrepengerperiodenForm

Overstyring av startdato for foreldrepengerperioden.`,methods:[],displayName:"StartdatoForForeldrepengerperiodenForm",props:{aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}>`},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: OverstyringAvklarStartdatoForPeriodenAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  startdatoFraSoknad: string;
  opprinneligDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO>`,elements:[{name:"signature",type:"object",raw:`{
  startdatoFraSoknad: string;
  opprinneligDato?: string;
}`,signature:{properties:[{key:"startdatoFraSoknad",value:{name:"string",required:!0}},{key:"opprinneligDato",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const SL=e=>e.some(n=>n.definisjon===dn.AUTOMATISK_MARKERING_AV_UTENLANDSSAK),Kh=({soknad:e,utlandDokStatus:n,submittable:t,kanOverstyreAccess:r})=>{const{aksjonspunkterForPanel:l,submitCallback:s,alleMerknaderFraBeslutter:u,harÅpentAksjonspunkt:d,fagsak:m,isReadOnly:g}=mT(),f=l.find(y=>y.definisjon===dn.AUTOMATISK_MARKERING_AV_UTENLANDSSAK),h=l.find(y=>y.definisjon===dn.AVKLAR_DEKNINGSGRAD),p=l.find(y=>y.definisjon===dn.OVERSTYR_DEKNINGSGRAD);return j.jsxs(Ln,{gap:"space-32",children:[d&&SL(l)&&j.jsx(og,{children:j.jsx(qe,{id:"SakenFaktaPanel.OpptjeningUtland"})}),d&&l.some(y=>y.definisjon===dn.AVKLAR_DEKNINGSGRAD)&&j.jsx(og,{children:j.jsx(qe,{id:"SakenFaktaPanel.AvklarDekningsgrad"})}),j.jsxs(Ln,{gap:"space-40",children:[e&&h&&j.jsx(ih,{søknad:e,fagsak:m,aksjonspunkt:h,submitCallback:s,readOnly:g,alleMerknaderFraBeslutter:u}),j.jsxs(_t,{gap:"space-40",children:[f&&j.jsx(Mh,{dokStatus:n?.dokStatus,readOnly:g,harÅpentAksjonspunkt:d,aksjonspunkt:f,submittable:t,submitCallback:s,alleMerknaderFraBeslutter:u}),m.fagsakYtelseType!=="SVP"&&!!e&&j.jsx(xh,{aksjonspunkt:l.find(y=>y.definisjon===dn.OVERSTYR_AVKLAR_STARTDATO),submitCallback:s,readOnly:g,alleMerknaderFraBeslutter:u,soknad:e})]}),e&&!h&&m.fagsakYtelseType==="FP"&&j.jsx(sh,{søknad:e,fagsak:m,aksjonspunkt:p,submitCallback:s,readOnly:g,kanOverstyreAccess:r})]})]})};Kh.__docgenInfo={description:"",methods:[],displayName:"SakenFaktaPanel",props:{soknad:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}>`},description:""},utlandDokStatus:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  dokStatus?: string;
}`,signature:{properties:[{key:"dokStatus",value:{name:"string",required:!1}}]}},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},kanOverstyreAccess:{required:!0,tsType:{name:"boolean"},description:""}}};const wL={"SakenFaktaPanel.OpptjeningUtland":"Se søknad for informasjon om oppgitt rettighet fra EØS. Innhent dokumentasjon fra utenlandsk trygdemyndighet ved behov","SakenFaktaPanel.AvklarDekningsgrad":"Mor og far har søkt med ulik dekningsgrad. Kontroller hvilken som stemmer.","UtlandPanel.lagre":"Lagre","UtlandPanel.avbryt":"Avbryt","InnhentDokOpptjeningUtlandPanel.OpptjeningUtland":"Vurder om SED skal innhentes","InnhentDokOpptjeningUtlandPanel.InnhentelseDok":"Innhentelse av dokumentasjon","InnhentDokOpptjeningUtlandPanel.Innhentes":"Dokumentasjon vil bli innhentet","InnhentDokOpptjeningUtlandPanel.InnhentesIkke":"Dokumentasjon vil <b>ikke</b> bli innhentet","InnhentDokOpptjeningUtlandPanel.Begrunnelse":"Begrunnelse","StartdatoForForeldrepengerperiodenForm.StartdatoFør2019":"Startdato kan ikke være før 01.01.2019","StartdatoForForeldrepengerperiodenForm.StartdatoForPerioden":"Startdato for foreldrepengeperioden","StartdatoForForeldrepengerperiodenForm.Vurdering":"Vurdering","StartdatoForForeldrepengerperiodenForm.Startdato":"Startdato som skal benyttes (fra søknad eller fødsel)","StartdatoForForeldrepengerperiodenForm.Oppdater":"Oppdater","StartdatoForForeldrepengerperiodenForm.EndreStartdato":"Endre startdato for foreldrepenger","DekningsgradForm.Dekningsgrad":"Dekningsgrad","DekningsgradForm.DekningsgradForeldrepenger":"{dekningsgrad}% foreldrepenger","DekningsgradForm.Begrunnelse":"Begrunnelse","DekningsgradForm.Bekreft":"Bekreft og fortsett","DekningsgradForm.80":"80 {erSatt, select, true {(Nåværende)} other {}}","DekningsgradForm.100":"100 {erSatt, select, true {(Nåværende)} other {}}","DekningsgradForm.EndreDekningsgrad":"Endre dekningsgrad","DekningsgradForm.GjelderFor":"Gjelder for {søker} og {annenPart}","DekningsgradForm.ErEndret":"Er endret","DekningsgradForm.LikEksisterende":"Du må endre dekningsgrad","DekningsgradForm.BeskrivelseAvEndring":"Beskrivelse av endring","DekningradApForm.HvilkenDekningsgrad":"Hvilken dekningsgrad skal gjelde for begge?","DekningradApForm.HarValgt":"Har valgt {dekningsgrad}% foreldrepenger","DekningradApForm.SøknadSendt":"Søknad sendt {dato}","DekningradApForm.80":"80","DekningradApForm.100":"100","DekningradApForm.Begrunnelse":"Begrunnelse","DekningradApForm.Bekreft":"Bekreft og fortsett"},OL=Ut(wL),Zu=e=>j.jsx(Qu,{value:OL,children:j.jsx(Kh,{...e})});Zu.__docgenInfo={description:"",methods:[],displayName:"SakenFaktaIndex",props:{soknad:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}>`},description:""},utlandDokStatus:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  dokStatus?: string;
}`,signature:{properties:[{key:"dokStatus",value:{name:"string",required:!1}}]}},description:""},kanOverstyreAccess:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const DL={oppgittFordeling:{startDatoForPermisjon:"2019-01-01",dekningsgrader:{søker:{søknadsdato:"2019-01-02",dekningsgrad:100}}}},Ea={definisjon:dn.OMSORGSOVERTAKELSE,status:wr.OPPRETTET,begrunnelse:null,kanLoses:!0,toTrinnsBehandling:!1,toTrinnsBehandlingGodkjent:null,vurderPaNyttArsaker:null,besluttersBegrunnelse:null,aksjonspunktType:mv.AUTOPUNKT,vilkarType:fv.OMSORGSVILKARET,erAktivt:!0,fristTid:null,endretTidspunkt:null,endretAv:null},ML={title:"fakta/fakta-saken",component:Zu,decorators:[fT,gT],args:{submittable:!0,soknad:DL,kanOverstyreAccess:!0},render:e=>j.jsx(Zu,{...e})},Zi={args:{aksjonspunkterForPanel:[]}},Qi={args:{aksjonspunkterForPanel:[],fagsak:{fagsakYtelseType:"FP",bruker:{navn:"Helga Utvikler"},annenPart:{navn:"Espen Utvikler"}}}},es={args:{aksjonspunkterForPanel:[],fagsak:{fagsakYtelseType:"FP",bruker:{navn:"Helga Utvikler"},annenPart:{navn:"Espen Utvikler"}},kanOverstyreAccess:!1}},ns={args:{aksjonspunkterForPanel:[{...Ea,definisjon:dn.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,status:wr.OPPRETTET,begrunnelse:null,kanLoses:!0}]}},ts={args:{aksjonspunkterForPanel:[{...Ea,definisjon:dn.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,status:wr.OPPRETTET,begrunnelse:null,kanLoses:!0}],fagsak:{fagsakYtelseType:"SVP"}}},rs={args:{aksjonspunkterForPanel:[{...Ea,definisjon:dn.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,status:wr.OPPRETTET,begrunnelse:null,kanLoses:!0}],alleMerknaderFraBeslutter:{[dn.AUTOMATISK_MARKERING_AV_UTENLANDSSAK]:{notAccepted:!0}}}},as={args:{aksjonspunkterForPanel:[{...Ea,definisjon:dn.OVERSTYR_DEKNINGSGRAD,status:wr.UTFORT,kanLoses:!0,begrunnelse:"Er endret til 80 fordi..."}],soknad:{oppgittFordeling:{startDatoForPermisjon:"2019-01-01",dekningsgrader:{avklartDekningsgrad:80,søker:{søknadsdato:"2019-01-02",dekningsgrad:100}}}}}},ls={args:{aksjonspunkterForPanel:[{...Ea,definisjon:dn.AVKLAR_DEKNINGSGRAD,status:wr.OPPRETTET,begrunnelse:null,kanLoses:!0}],fagsak:{fagsakYtelseType:"FP",bruker:{navn:"Helga Utvikler",kjønn:Ar.KVINNE},annenPart:{navn:"Espen Utvikler",kjønn:Ar.MANN}},soknad:{oppgittFordeling:{startDatoForPermisjon:"2019-01-01",dekningsgrader:{søker:{søknadsdato:"2019-01-02",dekningsgrad:100},annenPart:{søknadsdato:"2019-01-01",dekningsgrad:80}}}}}},is={args:{aksjonspunkterForPanel:[{...Ea,definisjon:dn.AVKLAR_DEKNINGSGRAD,status:wr.OPPRETTET,begrunnelse:null,kanLoses:!0}],fagsak:{fagsakYtelseType:"FP",bruker:{navn:"Helga Utvikler",kjønn:Ar.KVINNE},annenPart:{navn:"Espen Utvikler",kjønn:Ar.UDEFINERT}},soknad:{oppgittFordeling:{startDatoForPermisjon:"2019-01-01",dekningsgrader:{søker:{søknadsdato:"2019-01-02",dekningsgrad:100},annenPart:{søknadsdato:"2019-01-01",dekningsgrad:80}}}}}},ss={args:{aksjonspunkterForPanel:[{...Ea,definisjon:dn.AVKLAR_DEKNINGSGRAD,status:wr.OPPRETTET,kanLoses:!0,begrunnelse:"Dette er en begrunnelse"}],fagsak:{fagsakYtelseType:"FP",bruker:{navn:"Helga Utvikler",kjønn:Ar.KVINNE},annenPart:{navn:"Espen Utvikler",kjønn:Ar.MANN}},alleMerknaderFraBeslutter:{[dn.AVKLAR_DEKNINGSGRAD]:{notAccepted:!0}},soknad:{oppgittFordeling:{startDatoForPermisjon:"2019-01-01",dekningsgrader:{avklartDekningsgrad:100,søker:{søknadsdato:"2019-01-02",dekningsgrad:100},annenPart:{søknadsdato:"2019-01-01",dekningsgrad:80}}}}}};Zi.parameters={...Zi.parameters,docs:{...Zi.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: []
  }
}`,...Zi.parameters?.docs?.source}}};Qi.parameters={...Qi.parameters,docs:{...Qi.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Helga Utvikler'
      },
      annenPart: {
        navn: 'Espen Utvikler'
      }
    } as Fagsak
  }
}`,...Qi.parameters?.docs?.source}}};es.parameters={...es.parameters,docs:{...es.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Helga Utvikler'
      },
      annenPart: {
        navn: 'Espen Utvikler'
      }
    } as Fagsak,
    kanOverstyreAccess: false
  }
}`,...es.parameters?.docs?.source}}};ns.parameters={...ns.parameters,docs:{...ns.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }]
  }
}`,...ns.parameters?.docs?.source}}};ts.parameters={...ts.parameters,docs:{...ts.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    fagsak: {
      fagsakYtelseType: 'SVP'
    } as Fagsak
  }
}`,...ts.parameters?.docs?.source}}};rs.parameters={...rs.parameters,docs:{...rs.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK]: {
        notAccepted: true
      }
    }
  }
}`,...rs.parameters?.docs?.source}}};as.parameters={...as.parameters,docs:{...as.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.OVERSTYR_DEKNINGSGRAD,
      status: AksjonspunktStatus.UTFORT,
      kanLoses: true,
      begrunnelse: 'Er endret til 80 fordi...'
    }],
    soknad: {
      oppgittFordeling: {
        startDatoForPermisjon: '2019-01-01',
        dekningsgrader: {
          avklartDekningsgrad: 80,
          søker: {
            søknadsdato: '2019-01-02',
            dekningsgrad: 100
          }
        }
      }
    } as Soknad
  }
}`,...as.parameters?.docs?.source}}};ls.parameters={...ls.parameters,docs:{...ls.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Helga Utvikler',
        kjønn: NavBrukerKjonn.KVINNE
      },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: NavBrukerKjonn.MANN
      }
    } as Fagsak,
    soknad: {
      oppgittFordeling: {
        startDatoForPermisjon: '2019-01-01',
        dekningsgrader: {
          søker: {
            søknadsdato: '2019-01-02',
            dekningsgrad: 100
          },
          annenPart: {
            søknadsdato: '2019-01-01',
            dekningsgrad: 80
          }
        }
      }
    } as Soknad
  }
}`,...ls.parameters?.docs?.source}}};is.parameters={...is.parameters,docs:{...is.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      kanLoses: true
    }],
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Helga Utvikler',
        kjønn: NavBrukerKjonn.KVINNE
      },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: NavBrukerKjonn.UDEFINERT
      }
    } as Fagsak,
    soknad: {
      oppgittFordeling: {
        startDatoForPermisjon: '2019-01-01',
        dekningsgrader: {
          søker: {
            søknadsdato: '2019-01-02',
            dekningsgrad: 100
          },
          annenPart: {
            søknadsdato: '2019-01-01',
            dekningsgrad: 80
          }
        }
      }
    } as Soknad
  }
}`,...is.parameters?.docs?.source}}};ss.parameters={...ss.parameters,docs:{...ss.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
      status: AksjonspunktStatus.OPPRETTET,
      kanLoses: true,
      begrunnelse: 'Dette er en begrunnelse'
    }],
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Helga Utvikler',
        kjønn: NavBrukerKjonn.KVINNE
      },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: NavBrukerKjonn.MANN
      }
    } as Fagsak,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AVKLAR_DEKNINGSGRAD]: {
        notAccepted: true
      }
    },
    soknad: {
      oppgittFordeling: {
        startDatoForPermisjon: '2019-01-01',
        dekningsgrader: {
          avklartDekningsgrad: 100,
          søker: {
            søknadsdato: '2019-01-02',
            dekningsgrad: 100
          },
          annenPart: {
            søknadsdato: '2019-01-01',
            dekningsgrad: 80
          }
        }
      }
    } as Soknad
  }
}`,...ss.parameters?.docs?.source}}};const xL=["StartdatoForForeldrepengerOgDekningsgrad","StartdatoForForeldrepengerOgDekningsgradMedAnnenPart","KanIkkeOverstyreDekningsgrad","ApentAksjonspunktForInnhentingAvDokumentasjon","ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp","AksjonspunktErIkkeGodkjentAvBeslutter","DekningsgradErEndret","HarFåttDekningsgradAksjonspunkt","HarFåttDekningsgradAksjonspunktMedUkjentAndrePart","DekningsgradAksjonspunktErSendtTIlbakeFraBeslutter"];export{rs as AksjonspunktErIkkeGodkjentAvBeslutter,ns as ApentAksjonspunktForInnhentingAvDokumentasjon,ts as ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp,ss as DekningsgradAksjonspunktErSendtTIlbakeFraBeslutter,as as DekningsgradErEndret,ls as HarFåttDekningsgradAksjonspunkt,is as HarFåttDekningsgradAksjonspunktMedUkjentAndrePart,es as KanIkkeOverstyreDekningsgrad,Zi as StartdatoForForeldrepengerOgDekningsgrad,Qi as StartdatoForForeldrepengerOgDekningsgradMedAnnenPart,xL as __namedExportsOrder,ML as default};
