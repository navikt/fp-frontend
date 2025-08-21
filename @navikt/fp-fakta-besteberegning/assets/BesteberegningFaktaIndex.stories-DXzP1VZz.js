import{g as ac,r as T,u as o_,_ as wf,s as Rf,c as Sa,a as Oe,b as F,d as u_,e as Ia,T as d_,S as $t,R as ic,f as To,W as f_,A as g_,h as vr,j as ie,i as Gr,X as c_,P as Po,t as m_,k as v_,o as h_,M as b_,l as p_,E as y_,m as Fi,n as k_,p as Yt,q as __,w as A_,v as E_}from"./iframe-D5RgMc4a.js";import{r as T_}from"./index-CbQqdKeJ.js";import"./preload-helper-D9Z9MdNV.js";var sc=T_();const Zl=ac(sc);function P_(e,i){var r=e.values,t=wf(e,["values"]),s=i.values,o=wf(i,["values"]);return Rf(s,r)&&Rf(t,o)}function lc(e){var i=o_(),r=i.formatMessage,t=i.textComponent,s=t===void 0?T.Fragment:t,o=e.id,u=e.description,f=e.defaultMessage,c=e.values,m=e.children,v=e.tagName,p=v===void 0?s:v,y=e.ignoreTag,k={id:o,description:u,defaultMessage:f},N=r(k,c,{ignoreTag:y});return typeof m=="function"?m(Array.isArray(N)?N:[N]):p?T.createElement(p,null,N):T.createElement(T.Fragment,null,N)}lc.displayName="FormattedMessage";var Bn=T.memo(lc,P_);Bn.displayName="MemoizedFormattedMessage";var nt=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(nt||{}),oc=(e=>(e.MANUELL="MANU",e.AUTOPUNKT="AUTO",e.OVERSTYRING="OVST",e.SAKSBEHANDLEROVERSTYRING="SAOV",e))(oc||{}),xn=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(xn||{}),uc=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(uc||{});const w_=(e,i)=>{if(e==null)throw Error("Data er ikke oppgitt");return e},Wt=e=>Sa({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var R_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const wo=T.forwardRef((e,i)=>{var{className:r,size:t="medium",as:s="p",spacing:o,truncate:u,weight:f="regular",align:c,visuallyHidden:m,textColor:v}=e,p=R_(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=Oe();return F.createElement(s,Object.assign({},p,{ref:i,className:y(r,"navds-body-long",`navds-body-long--${t}`,Wt({spacing:o,truncate:u,weight:f,align:c,visuallyHidden:m,textColor:v}))}))});var O_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const cr=T.forwardRef((e,i)=>{var{className:r,size:t="medium",as:s="p",spacing:o,truncate:u,weight:f="regular",align:c,visuallyHidden:m,textColor:v}=e,p=O_(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=Oe();return F.createElement(s,Object.assign({},p,{ref:i,className:y(r,"navds-body-short",`navds-body-short--${t}`,Wt({spacing:o,truncate:u,weight:f,align:c,visuallyHidden:m,textColor:v}))}))});var S_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const I_=T.forwardRef((e,i)=>{var{className:r,size:t="medium",spacing:s,uppercase:o,as:u="p",truncate:f,weight:c="regular",align:m,visuallyHidden:v,textColor:p}=e,y=S_(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=Oe();return F.createElement(u,Object.assign({},y,{ref:i,className:k(r,"navds-detail",Wt({spacing:s,truncate:f,weight:c,align:m,visuallyHidden:v,textColor:p,uppercase:o}),{"navds-detail--small":t==="small"})}))});var N_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const as=T.forwardRef((e,i)=>{var{children:r,className:t,size:s,spacing:o,as:u="p",showIcon:f=!1}=e,c=N_(e,["children","className","size","spacing","as","showIcon"]);const{cn:m}=Oe();return F.createElement(u,Object.assign({},c,{ref:i,className:m("navds-error-message","navds-label",t,Wt({spacing:o}),{"navds-label--small":s==="small","navds-error-message--show-icon":f})}),f&&F.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},F.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var x_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};T.forwardRef((e,i)=>{var{level:r="1",size:t,className:s,as:o,spacing:u,align:f,visuallyHidden:c,textColor:m}=e,v=x_(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:p}=Oe(),y=o??`h${r}`;return F.createElement(y,Object.assign({},v,{ref:i,className:p(s,"navds-heading",`navds-heading--${t}`,Wt({spacing:u,align:f,visuallyHidden:c,textColor:m}))}))});var F_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};T.forwardRef((e,i)=>{var{className:r,spacing:t,as:s="p"}=e,o=F_(e,["className","spacing","as"]);const{cn:u}=Oe();return F.createElement(s,Object.assign({},o,{ref:i,className:u(r,"navds-ingress",{"navds-typo--spacing":!!t})}))});var L_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const pt=T.forwardRef((e,i)=>{var{className:r,size:t="medium",as:s="label",spacing:o,visuallyHidden:u,textColor:f}=e,c=L_(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:m}=Oe();return F.createElement(s,Object.assign({},c,{ref:i,className:m(r,"navds-label",Wt({spacing:o,visuallyHidden:u,textColor:f}),{"navds-label--small":t==="small"})}))});function dc(e,i=166,r=!1){let t;function s(...o){const u=()=>{t=void 0,e.apply(this,o)};!t&&r&&u(),clearTimeout(t),t=setTimeout(u,i)}return s.clear=()=>{clearTimeout(t)},s}function mr(e,i){const r=Object.entries(e).filter(([t])=>!i.includes(t));return Object.fromEntries(r)}const Of=globalThis?.document?T.useLayoutEffect:()=>{};let Sf=0;function B_(e){const[i,r]=T.useState(e),t=e||i;return T.useEffect(()=>{i==null&&(Sf+=1,r(`aksel-id-${Sf}`))},[i]),t}const If=F.useId;function Na(e){var i;if(If!==void 0){const r=If();return e??r.replace(/(:)/g,"")}return(i=B_(e))!==null&&i!==void 0?i:""}function Nf(e,i=[]){const r=T.useRef(e);return T.useEffect(()=>{r.current=e}),T.useCallback((...t)=>{var s;return(s=r.current)===null||s===void 0?void 0:s.call(r,...t)},i)}function Ro({value:e,defaultValue:i,onChange:r}){const t=Nf(r),[s,o]=T.useState(i),u=e!==void 0,f=u?e:s,c=Nf(m=>{const p=typeof m=="function"?m(f):m;u||o(p),t(p)},[u,t,f]);return[f,c]}let xf=0;function q_(e){const[i,r]=T.useState(e),t=e||i;return T.useEffect(()=>{i==null&&(xf+=1,r(`aksel-icon-${xf}`))},[i]),t}const Ff=F.useId;function tr(e){var i;return Ff!==void 0?Ff().replace(/(:)/g,""):(i=q_(e))!==null&&i!==void 0?i:""}var M_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const D_=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=M_(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var j_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const C_=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=j_(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var V_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const fc=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=V_(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var G_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const K_=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=G_(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var U_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const H_=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=U_(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var $_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const gc=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=$_(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var Y_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const cc=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=Y_(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var W_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const z_=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=W_(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var X_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Z_=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=X_(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var J_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Q_=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=J_(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var e1=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Jl=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=e1(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var n1=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const r1=T.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=n1(e,["title","titleId"]);let o=tr();return o=r?t||"title-"+o:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?T.createElement("title",{id:o},r):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function xa(e,i,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e?.(s),r===!1||!s.defaultPrevented)return i?.(s)}}const[tR,t1]=u_({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Ol(e){return(i={})=>{const r=i.width?String(i.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function va(e){return(i,r)=>{const t=r?.context?String(r.context):"standalone";let s;if(t==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,f=r?.width?String(r.width):u;s=e.formattingValues[f]||e.formattingValues[u]}else{const u=e.defaultWidth,f=r?.width?String(r.width):e.defaultWidth;s=e.values[f]||e.values[u]}const o=e.argumentCallback?e.argumentCallback(i):i;return s[o]}}function ha(e){return(i,r={})=>{const t=r.width,s=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],o=i.match(s);if(!o)return null;const u=o[0],f=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(f)?i1(f,p=>p.test(u)):a1(f,p=>p.test(u));let m;m=e.valueCallback?e.valueCallback(c):c,m=r.valueCallback?r.valueCallback(m):m;const v=i.slice(u.length);return{value:m,rest:v}}}function a1(e,i){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i(e[r]))return r}function i1(e,i){for(let r=0;r<e.length;r++)if(i(e[r]))return r}function s1(e){return(i,r={})=>{const t=i.match(e.matchPattern);if(!t)return null;const s=t[0],o=i.match(e.parsePattern);if(!o)return null;let u=e.valueCallback?e.valueCallback(o[0]):o[0];u=r.valueCallback?r.valueCallback(u):u;const f=i.slice(s.length);return{value:u,rest:f}}}const l1={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},o1=(e,i,r)=>{let t;const s=l1[e];return typeof s=="string"?t=s:i===1?t=s.one:t=s.other.replace("{{count}}",String(i)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+t:t+" siden":t},u1={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},d1={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},f1={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},g1={date:Ol({formats:u1,defaultWidth:"full"}),time:Ol({formats:d1,defaultWidth:"full"}),dateTime:Ol({formats:f1,defaultWidth:"full"})},c1={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},m1=(e,i,r,t)=>c1[e],v1={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},h1={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},b1={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},p1={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},y1={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},k1=(e,i)=>Number(e)+".",_1={ordinalNumber:k1,era:va({values:v1,defaultWidth:"wide"}),quarter:va({values:h1,defaultWidth:"wide",argumentCallback:e=>e-1}),month:va({values:b1,defaultWidth:"wide"}),day:va({values:p1,defaultWidth:"wide"}),dayPeriod:va({values:y1,defaultWidth:"wide"})},A1=/^(\d+)\.?/i,E1=/\d+/i,T1={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},P1={any:[/^f/i,/^e/i]},w1={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},R1={any:[/1/i,/2/i,/3/i,/4/i]},O1={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},S1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},I1={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},N1={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},x1={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},F1={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},L1={ordinalNumber:s1({matchPattern:A1,parsePattern:E1,valueCallback:e=>parseInt(e,10)}),era:ha({matchPatterns:T1,defaultMatchWidth:"wide",parsePatterns:P1,defaultParseWidth:"any"}),quarter:ha({matchPatterns:w1,defaultMatchWidth:"wide",parsePatterns:R1,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ha({matchPatterns:O1,defaultMatchWidth:"wide",parsePatterns:S1,defaultParseWidth:"any"}),day:ha({matchPatterns:I1,defaultMatchWidth:"wide",parsePatterns:N1,defaultParseWidth:"any"}),dayPeriod:ha({matchPatterns:x1,defaultMatchWidth:"any",parsePatterns:F1,defaultParseWidth:"any"})},B1={code:"nb",formatDistance:o1,formatLong:g1,formatRelative:m1,localize:_1,match:L1,options:{weekStartsOn:1,firstWeekContainsDate:4}},q1={global:{dateLocale:B1,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},M1=T.createContext({locale:q1}),mc=()=>T.useContext(M1);var D1=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const j1=T.forwardRef((e,i)=>{var r,t,s,{rootElement:o,asChild:u}=e,f=D1(e,["rootElement","asChild"]);const c=Ia(!1),m=(r=mc())===null||r===void 0?void 0:r.rootElement,v=(t=o??m)!==null&&t!==void 0?t:(s=globalThis?.document)===null||s===void 0?void 0:s.body,p=u?$t:"div";return c?v?Zl.createPortal(F.createElement(d_,{theme:c.theme,asChild:!0,hasBackground:!1,"data-color":c.color},F.createElement(p,Object.assign({ref:i,"data-aksel-portal":""},f))),v):null:v?Zl.createPortal(F.createElement(p,Object.assign({ref:i,"data-aksel-portal":""},f)),v):null}),Gt=Math.min,bt=Math.max,Yi=Math.round,Li=Math.floor,Tr=e=>({x:e,y:e}),C1={left:"right",right:"left",bottom:"top",top:"bottom"},V1={start:"end",end:"start"};function Ql(e,i,r){return bt(e,Gt(i,r))}function Fa(e,i){return typeof e=="function"?e(i):e}function yt(e){return e.split("-")[0]}function La(e){return e.split("-")[1]}function vc(e){return e==="x"?"y":"x"}function Oo(e){return e==="y"?"height":"width"}function Kt(e){return["top","bottom"].includes(yt(e))?"y":"x"}function So(e){return vc(Kt(e))}function G1(e,i,r){r===void 0&&(r=!1);const t=La(e),s=So(e),o=Oo(s);let u=s==="x"?t===(r?"end":"start")?"right":"left":t==="start"?"bottom":"top";return i.reference[o]>i.floating[o]&&(u=Wi(u)),[u,Wi(u)]}function K1(e){const i=Wi(e);return[eo(e),i,eo(i)]}function eo(e){return e.replace(/start|end/g,i=>V1[i])}function U1(e,i,r){const t=["left","right"],s=["right","left"],o=["top","bottom"],u=["bottom","top"];switch(e){case"top":case"bottom":return r?i?s:t:i?t:s;case"left":case"right":return i?o:u;default:return[]}}function H1(e,i,r,t){const s=La(e);let o=U1(yt(e),r==="start",t);return s&&(o=o.map(u=>u+"-"+s),i&&(o=o.concat(o.map(eo)))),o}function Wi(e){return e.replace(/left|right|bottom|top/g,i=>C1[i])}function $1(e){return{top:0,right:0,bottom:0,left:0,...e}}function hc(e){return typeof e!="number"?$1(e):{top:e,right:e,bottom:e,left:e}}function zi(e){const{x:i,y:r,width:t,height:s}=e;return{width:t,height:s,top:r,left:i,right:i+t,bottom:r+s,x:i,y:r}}function Lf(e,i,r){let{reference:t,floating:s}=e;const o=Kt(i),u=So(i),f=Oo(u),c=yt(i),m=o==="y",v=t.x+t.width/2-s.width/2,p=t.y+t.height/2-s.height/2,y=t[f]/2-s[f]/2;let k;switch(c){case"top":k={x:v,y:t.y-s.height};break;case"bottom":k={x:v,y:t.y+t.height};break;case"right":k={x:t.x+t.width,y:p};break;case"left":k={x:t.x-s.width,y:p};break;default:k={x:t.x,y:t.y}}switch(La(i)){case"start":k[u]-=y*(r&&m?-1:1);break;case"end":k[u]+=y*(r&&m?-1:1);break}return k}const Y1=async(e,i,r)=>{const{placement:t="bottom",strategy:s="absolute",middleware:o=[],platform:u}=r,f=o.filter(Boolean),c=await(u.isRTL==null?void 0:u.isRTL(i));let m=await u.getElementRects({reference:e,floating:i,strategy:s}),{x:v,y:p}=Lf(m,t,c),y=t,k={},N=0;for(let A=0;A<f.length;A++){const{name:_,fn:w}=f[A],{x:S,y:R,data:j,reset:I}=await w({x:v,y:p,initialPlacement:t,placement:y,strategy:s,middlewareData:k,rects:m,platform:u,elements:{reference:e,floating:i}});v=S??v,p=R??p,k={...k,[_]:{...k[_],...j}},I&&N<=50&&(N++,typeof I=="object"&&(I.placement&&(y=I.placement),I.rects&&(m=I.rects===!0?await u.getElementRects({reference:e,floating:i,strategy:s}):I.rects),{x:v,y:p}=Lf(m,y,c)),A=-1)}return{x:v,y:p,placement:y,strategy:s,middlewareData:k}};async function bc(e,i){var r;i===void 0&&(i={});const{x:t,y:s,platform:o,rects:u,elements:f,strategy:c}=e,{boundary:m="clippingAncestors",rootBoundary:v="viewport",elementContext:p="floating",altBoundary:y=!1,padding:k=0}=Fa(i,e),N=hc(k),_=f[y?p==="floating"?"reference":"floating":p],w=zi(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(_)))==null||r?_:_.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(f.floating)),boundary:m,rootBoundary:v,strategy:c})),S=p==="floating"?{x:t,y:s,width:u.floating.width,height:u.floating.height}:u.reference,R=await(o.getOffsetParent==null?void 0:o.getOffsetParent(f.floating)),j=await(o.isElement==null?void 0:o.isElement(R))?await(o.getScale==null?void 0:o.getScale(R))||{x:1,y:1}:{x:1,y:1},I=zi(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:S,offsetParent:R,strategy:c}):S);return{top:(w.top-I.top+N.top)/j.y,bottom:(I.bottom-w.bottom+N.bottom)/j.y,left:(w.left-I.left+N.left)/j.x,right:(I.right-w.right+N.right)/j.x}}const W1=e=>({name:"arrow",options:e,async fn(i){const{x:r,y:t,placement:s,rects:o,platform:u,elements:f,middlewareData:c}=i,{element:m,padding:v=0}=Fa(e,i)||{};if(m==null)return{};const p=hc(v),y={x:r,y:t},k=So(s),N=Oo(k),A=await u.getDimensions(m),_=k==="y",w=_?"top":"left",S=_?"bottom":"right",R=_?"clientHeight":"clientWidth",j=o.reference[N]+o.reference[k]-y[k]-o.floating[N],I=y[k]-o.reference[k],G=await(u.getOffsetParent==null?void 0:u.getOffsetParent(m));let D=G?G[R]:0;(!D||!await(u.isElement==null?void 0:u.isElement(G)))&&(D=f.floating[R]||o.floating[N]);const C=j/2-I/2,$=D/2-A[N]/2-1,ne=Gt(p[w],$),ee=Gt(p[S],$),K=ne,q=D-A[N]-ee,M=D/2-A[N]/2+C,X=Ql(K,M,q),re=!c.arrow&&La(s)!=null&&M!==X&&o.reference[N]/2-(M<K?ne:ee)-A[N]/2<0,Z=re?M<K?M-K:M-q:0;return{[k]:y[k]+Z,data:{[k]:X,centerOffset:M-X-Z,...re&&{alignmentOffset:Z}},reset:re}}}),z1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var r,t;const{placement:s,middlewareData:o,rects:u,initialPlacement:f,platform:c,elements:m}=i,{mainAxis:v=!0,crossAxis:p=!0,fallbackPlacements:y,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:N="none",flipAlignment:A=!0,..._}=Fa(e,i);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const w=yt(s),S=Kt(f),R=yt(f)===f,j=await(c.isRTL==null?void 0:c.isRTL(m.floating)),I=y||(R||!A?[Wi(f)]:K1(f)),G=N!=="none";!y&&G&&I.push(...H1(f,A,N,j));const D=[f,...I],C=await bc(i,_),$=[];let ne=((t=o.flip)==null?void 0:t.overflows)||[];if(v&&$.push(C[w]),p){const M=G1(s,u,j);$.push(C[M[0]],C[M[1]])}if(ne=[...ne,{placement:s,overflows:$}],!$.every(M=>M<=0)){var ee,K;const M=(((ee=o.flip)==null?void 0:ee.index)||0)+1,X=D[M];if(X)return{data:{index:M,overflows:ne},reset:{placement:X}};let re=(K=ne.filter(Z=>Z.overflows[0]<=0).sort((Z,W)=>Z.overflows[1]-W.overflows[1])[0])==null?void 0:K.placement;if(!re)switch(k){case"bestFit":{var q;const Z=(q=ne.filter(W=>{if(G){const J=Kt(W.placement);return J===S||J==="y"}return!0}).map(W=>[W.placement,W.overflows.filter(J=>J>0).reduce((J,de)=>J+de,0)]).sort((W,J)=>W[1]-J[1])[0])==null?void 0:q[0];Z&&(re=Z);break}case"initialPlacement":re=f;break}if(s!==re)return{reset:{placement:re}}}return{}}}};async function X1(e,i){const{placement:r,platform:t,elements:s}=e,o=await(t.isRTL==null?void 0:t.isRTL(s.floating)),u=yt(r),f=La(r),c=Kt(r)==="y",m=["left","top"].includes(u)?-1:1,v=o&&c?-1:1,p=Fa(i,e);let{mainAxis:y,crossAxis:k,alignmentAxis:N}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return f&&typeof N=="number"&&(k=f==="end"?N*-1:N),c?{x:k*v,y:y*m}:{x:y*m,y:k*v}}const Z1=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var r,t;const{x:s,y:o,placement:u,middlewareData:f}=i,c=await X1(i,e);return u===((r=f.offset)==null?void 0:r.placement)&&(t=f.arrow)!=null&&t.alignmentOffset?{}:{x:s+c.x,y:o+c.y,data:{...c,placement:u}}}}},J1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:r,y:t,placement:s}=i,{mainAxis:o=!0,crossAxis:u=!1,limiter:f={fn:_=>{let{x:w,y:S}=_;return{x:w,y:S}}},...c}=Fa(e,i),m={x:r,y:t},v=await bc(i,c),p=Kt(yt(s)),y=vc(p);let k=m[y],N=m[p];if(o){const _=y==="y"?"top":"left",w=y==="y"?"bottom":"right",S=k+v[_],R=k-v[w];k=Ql(S,k,R)}if(u){const _=p==="y"?"top":"left",w=p==="y"?"bottom":"right",S=N+v[_],R=N-v[w];N=Ql(S,N,R)}const A=f.fn({...i,[y]:k,[p]:N});return{...A,data:{x:A.x-r,y:A.y-t,enabled:{[y]:o,[p]:u}}}}}};function is(){return typeof window<"u"}function zt(e){return pc(e)?(e.nodeName||"").toLowerCase():"#document"}function qn(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Rr(e){var i;return(i=(pc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function pc(e){return is()?e instanceof Node||e instanceof qn(e).Node:!1}function $e(e){return is()?e instanceof Element||e instanceof qn(e).Element:!1}function Un(e){return is()?e instanceof HTMLElement||e instanceof qn(e).HTMLElement:!1}function Xi(e){return!is()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof qn(e).ShadowRoot}function Ba(e){const{overflow:i,overflowX:r,overflowY:t,display:s}=rr(e);return/auto|scroll|overlay|hidden|clip/.test(i+t+r)&&!["inline","contents"].includes(s)}function Q1(e){return["table","td","th"].includes(zt(e))}function ss(e){return[":popover-open",":modal"].some(i=>{try{return e.matches(i)}catch{return!1}})}function Io(e){const i=ls(),r=$e(e)?rr(e):e;return["transform","translate","scale","rotate","perspective"].some(t=>r[t]?r[t]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(t=>(r.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(r.contain||"").includes(t))}function eA(e){let i=Kr(e);for(;Un(i)&&!Vr(i);){if(Io(i))return i;if(ss(i))return null;i=Kr(i)}return null}function ls(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vr(e){return["html","body","#document"].includes(zt(e))}function rr(e){return qn(e).getComputedStyle(e)}function os(e){return $e(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Kr(e){if(zt(e)==="html")return e;const i=e.assignedSlot||e.parentNode||Xi(e)&&e.host||Rr(e);return Xi(i)?i.host:i}function yc(e){const i=Kr(e);return Vr(i)?e.ownerDocument?e.ownerDocument.body:e.body:Un(i)&&Ba(i)?i:yc(i)}function et(e,i,r){var t;i===void 0&&(i=[]),r===void 0&&(r=!0);const s=yc(e),o=s===((t=e.ownerDocument)==null?void 0:t.body),u=qn(s);if(o){const f=no(u);return i.concat(u,u.visualViewport||[],Ba(s)?s:[],f&&r?et(f):[])}return i.concat(s,et(s,[],r))}function no(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function kc(e){const i=rr(e);let r=parseFloat(i.width)||0,t=parseFloat(i.height)||0;const s=Un(e),o=s?e.offsetWidth:r,u=s?e.offsetHeight:t,f=Yi(r)!==o||Yi(t)!==u;return f&&(r=o,t=u),{width:r,height:t,$:f}}function No(e){return $e(e)?e:e.contextElement}function Vt(e){const i=No(e);if(!Un(i))return Tr(1);const r=i.getBoundingClientRect(),{width:t,height:s,$:o}=kc(i);let u=(o?Yi(r.width):r.width)/t,f=(o?Yi(r.height):r.height)/s;return(!u||!Number.isFinite(u))&&(u=1),(!f||!Number.isFinite(f))&&(f=1),{x:u,y:f}}const nA=Tr(0);function _c(e){const i=qn(e);return!ls()||!i.visualViewport?nA:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function rA(e,i,r){return i===void 0&&(i=!1),!r||i&&r!==qn(e)?!1:i}function kt(e,i,r,t){i===void 0&&(i=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),o=No(e);let u=Tr(1);i&&(t?$e(t)&&(u=Vt(t)):u=Vt(e));const f=rA(o,r,t)?_c(o):Tr(0);let c=(s.left+f.x)/u.x,m=(s.top+f.y)/u.y,v=s.width/u.x,p=s.height/u.y;if(o){const y=qn(o),k=t&&$e(t)?qn(t):t;let N=y,A=no(N);for(;A&&t&&k!==N;){const _=Vt(A),w=A.getBoundingClientRect(),S=rr(A),R=w.left+(A.clientLeft+parseFloat(S.paddingLeft))*_.x,j=w.top+(A.clientTop+parseFloat(S.paddingTop))*_.y;c*=_.x,m*=_.y,v*=_.x,p*=_.y,c+=R,m+=j,N=qn(A),A=no(N)}}return zi({width:v,height:p,x:c,y:m})}function xo(e,i){const r=os(e).scrollLeft;return i?i.left+r:kt(Rr(e)).left+r}function Ac(e,i,r){r===void 0&&(r=!1);const t=e.getBoundingClientRect(),s=t.left+i.scrollLeft-(r?0:xo(e,t)),o=t.top+i.scrollTop;return{x:s,y:o}}function tA(e){let{elements:i,rect:r,offsetParent:t,strategy:s}=e;const o=s==="fixed",u=Rr(t),f=i?ss(i.floating):!1;if(t===u||f&&o)return r;let c={scrollLeft:0,scrollTop:0},m=Tr(1);const v=Tr(0),p=Un(t);if((p||!p&&!o)&&((zt(t)!=="body"||Ba(u))&&(c=os(t)),Un(t))){const k=kt(t);m=Vt(t),v.x=k.x+t.clientLeft,v.y=k.y+t.clientTop}const y=u&&!p&&!o?Ac(u,c,!0):Tr(0);return{width:r.width*m.x,height:r.height*m.y,x:r.x*m.x-c.scrollLeft*m.x+v.x+y.x,y:r.y*m.y-c.scrollTop*m.y+v.y+y.y}}function aA(e){return Array.from(e.getClientRects())}function iA(e){const i=Rr(e),r=os(e),t=e.ownerDocument.body,s=bt(i.scrollWidth,i.clientWidth,t.scrollWidth,t.clientWidth),o=bt(i.scrollHeight,i.clientHeight,t.scrollHeight,t.clientHeight);let u=-r.scrollLeft+xo(e);const f=-r.scrollTop;return rr(t).direction==="rtl"&&(u+=bt(i.clientWidth,t.clientWidth)-s),{width:s,height:o,x:u,y:f}}function sA(e,i){const r=qn(e),t=Rr(e),s=r.visualViewport;let o=t.clientWidth,u=t.clientHeight,f=0,c=0;if(s){o=s.width,u=s.height;const m=ls();(!m||m&&i==="fixed")&&(f=s.offsetLeft,c=s.offsetTop)}return{width:o,height:u,x:f,y:c}}function lA(e,i){const r=kt(e,!0,i==="fixed"),t=r.top+e.clientTop,s=r.left+e.clientLeft,o=Un(e)?Vt(e):Tr(1),u=e.clientWidth*o.x,f=e.clientHeight*o.y,c=s*o.x,m=t*o.y;return{width:u,height:f,x:c,y:m}}function Bf(e,i,r){let t;if(i==="viewport")t=sA(e,r);else if(i==="document")t=iA(Rr(e));else if($e(i))t=lA(i,r);else{const s=_c(e);t={x:i.x-s.x,y:i.y-s.y,width:i.width,height:i.height}}return zi(t)}function Ec(e,i){const r=Kr(e);return r===i||!$e(r)||Vr(r)?!1:rr(r).position==="fixed"||Ec(r,i)}function oA(e,i){const r=i.get(e);if(r)return r;let t=et(e,[],!1).filter(f=>$e(f)&&zt(f)!=="body"),s=null;const o=rr(e).position==="fixed";let u=o?Kr(e):e;for(;$e(u)&&!Vr(u);){const f=rr(u),c=Io(u);!c&&f.position==="fixed"&&(s=null),(o?!c&&!s:!c&&f.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Ba(u)&&!c&&Ec(e,u))?t=t.filter(v=>v!==u):s=f,u=Kr(u)}return i.set(e,t),t}function uA(e){let{element:i,boundary:r,rootBoundary:t,strategy:s}=e;const u=[...r==="clippingAncestors"?ss(i)?[]:oA(i,this._c):[].concat(r),t],f=u[0],c=u.reduce((m,v)=>{const p=Bf(i,v,s);return m.top=bt(p.top,m.top),m.right=Gt(p.right,m.right),m.bottom=Gt(p.bottom,m.bottom),m.left=bt(p.left,m.left),m},Bf(i,f,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function dA(e){const{width:i,height:r}=kc(e);return{width:i,height:r}}function fA(e,i,r){const t=Un(i),s=Rr(i),o=r==="fixed",u=kt(e,!0,o,i);let f={scrollLeft:0,scrollTop:0};const c=Tr(0);if(t||!t&&!o)if((zt(i)!=="body"||Ba(s))&&(f=os(i)),t){const y=kt(i,!0,o,i);c.x=y.x+i.clientLeft,c.y=y.y+i.clientTop}else s&&(c.x=xo(s));const m=s&&!t&&!o?Ac(s,f):Tr(0),v=u.left+f.scrollLeft-c.x-m.x,p=u.top+f.scrollTop-c.y-m.y;return{x:v,y:p,width:u.width,height:u.height}}function Sl(e){return rr(e).position==="static"}function qf(e,i){if(!Un(e)||rr(e).position==="fixed")return null;if(i)return i(e);let r=e.offsetParent;return Rr(e)===r&&(r=r.ownerDocument.body),r}function Tc(e,i){const r=qn(e);if(ss(e))return r;if(!Un(e)){let s=Kr(e);for(;s&&!Vr(s);){if($e(s)&&!Sl(s))return s;s=Kr(s)}return r}let t=qf(e,i);for(;t&&Q1(t)&&Sl(t);)t=qf(t,i);return t&&Vr(t)&&Sl(t)&&!Io(t)?r:t||eA(e)||r}const gA=async function(e){const i=this.getOffsetParent||Tc,r=this.getDimensions,t=await r(e.floating);return{reference:fA(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:t.width,height:t.height}}};function cA(e){return rr(e).direction==="rtl"}const mA={convertOffsetParentRelativeRectToViewportRelativeRect:tA,getDocumentElement:Rr,getClippingRect:uA,getOffsetParent:Tc,getElementRects:gA,getClientRects:aA,getDimensions:dA,getScale:Vt,isElement:$e,isRTL:cA};function Pc(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function vA(e,i){let r=null,t;const s=Rr(e);function o(){var f;clearTimeout(t),(f=r)==null||f.disconnect(),r=null}function u(f,c){f===void 0&&(f=!1),c===void 0&&(c=1),o();const m=e.getBoundingClientRect(),{left:v,top:p,width:y,height:k}=m;if(f||i(),!y||!k)return;const N=Li(p),A=Li(s.clientWidth-(v+y)),_=Li(s.clientHeight-(p+k)),w=Li(v),R={rootMargin:-N+"px "+-A+"px "+-_+"px "+-w+"px",threshold:bt(0,Gt(1,c))||1};let j=!0;function I(G){const D=G[0].intersectionRatio;if(D!==c){if(!j)return u();D?u(!1,D):t=setTimeout(()=>{u(!1,1e-7)},1e3)}D===1&&!Pc(m,e.getBoundingClientRect())&&u(),j=!1}try{r=new IntersectionObserver(I,{...R,root:s.ownerDocument})}catch{r=new IntersectionObserver(I,R)}r.observe(e)}return u(!0),o}function Mf(e,i,r,t){t===void 0&&(t={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:c=!1}=t,m=No(e),v=s||o?[...m?et(m):[],...et(i)]:[];v.forEach(w=>{s&&w.addEventListener("scroll",r,{passive:!0}),o&&w.addEventListener("resize",r)});const p=m&&f?vA(m,r):null;let y=-1,k=null;u&&(k=new ResizeObserver(w=>{let[S]=w;S&&S.target===m&&k&&(k.unobserve(i),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var R;(R=k)==null||R.observe(i)})),r()}),m&&!c&&k.observe(m),k.observe(i));let N,A=c?kt(e):null;c&&_();function _(){const w=kt(e);A&&!Pc(A,w)&&r(),A=w,N=requestAnimationFrame(_)}return r(),()=>{var w;v.forEach(S=>{s&&S.removeEventListener("scroll",r),o&&S.removeEventListener("resize",r)}),p?.(),(w=k)==null||w.disconnect(),k=null,c&&cancelAnimationFrame(N)}}const hA=Z1,bA=J1,pA=z1,Df=W1,yA=(e,i,r)=>{const t=new Map,s={platform:mA,...r},o={...s.platform,_c:t};return Y1(e,i,{...s,platform:o})};var Ki=typeof document<"u"?T.useLayoutEffect:T.useEffect;function Zi(e,i){if(e===i)return!0;if(typeof e!=typeof i)return!1;if(typeof e=="function"&&e.toString()===i.toString())return!0;let r,t,s;if(e&&i&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==i.length)return!1;for(t=r;t--!==0;)if(!Zi(e[t],i[t]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(i).length)return!1;for(t=r;t--!==0;)if(!{}.hasOwnProperty.call(i,s[t]))return!1;for(t=r;t--!==0;){const o=s[t];if(!(o==="_owner"&&e.$$typeof)&&!Zi(e[o],i[o]))return!1}return!0}return e!==e&&i!==i}function wc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function jf(e,i){const r=wc(e);return Math.round(i*r)/r}function Il(e){const i=T.useRef(e);return Ki(()=>{i.current=e}),i}function kA(e){e===void 0&&(e={});const{placement:i="bottom",strategy:r="absolute",middleware:t=[],platform:s,elements:{reference:o,floating:u}={},transform:f=!0,whileElementsMounted:c,open:m}=e,[v,p]=T.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[y,k]=T.useState(t);Zi(y,t)||k(t);const[N,A]=T.useState(null),[_,w]=T.useState(null),S=T.useCallback(W=>{W!==G.current&&(G.current=W,A(W))},[]),R=T.useCallback(W=>{W!==D.current&&(D.current=W,w(W))},[]),j=o||N,I=u||_,G=T.useRef(null),D=T.useRef(null),C=T.useRef(v),$=c!=null,ne=Il(c),ee=Il(s),K=Il(m),q=T.useCallback(()=>{if(!G.current||!D.current)return;const W={placement:i,strategy:r,middleware:y};ee.current&&(W.platform=ee.current),yA(G.current,D.current,W).then(J=>{const de={...J,isPositioned:K.current!==!1};M.current&&!Zi(C.current,de)&&(C.current=de,sc.flushSync(()=>{p(de)}))})},[y,i,r,ee,K]);Ki(()=>{m===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,p(W=>({...W,isPositioned:!1})))},[m]);const M=T.useRef(!1);Ki(()=>(M.current=!0,()=>{M.current=!1}),[]),Ki(()=>{if(j&&(G.current=j),I&&(D.current=I),j&&I){if(ne.current)return ne.current(j,I,q);q()}},[j,I,q,ne,$]);const X=T.useMemo(()=>({reference:G,floating:D,setReference:S,setFloating:R}),[S,R]),re=T.useMemo(()=>({reference:j,floating:I}),[j,I]),Z=T.useMemo(()=>{const W={position:r,left:0,top:0};if(!re.floating)return W;const J=jf(re.floating,v.x),de=jf(re.floating,v.y);return f?{...W,transform:"translate("+J+"px, "+de+"px)",...wc(re.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:J,top:de}},[r,f,re.floating,v.x,v.y]);return T.useMemo(()=>({...v,update:q,refs:X,elements:re,floatingStyles:Z}),[v,q,X,re,Z])}const _A=e=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:t,padding:s}=typeof e=="function"?e(r):e;return t&&i(t)?t.current!=null?Df({element:t.current,padding:s}).fn(r):{}:t?Df({element:t,padding:s}).fn(r):{}}}},AA=(e,i)=>({...hA(e),options:[e,i]}),EA=(e,i)=>({...bA(e),options:[e,i]}),TA=(e,i)=>({...pA(e),options:[e,i]}),PA=(e,i)=>({..._A(e),options:[e,i]}),Cf=/(\w+)/g;function wA(e,i){const r=Array.isArray(e)?e:RA(e);for(const t of i){if(!t)continue;let s=t;for(let o=0;o<r.length;o++){const u=s[r[o]];u!==void 0&&(s=u)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function RA(e){const i=[];let r=Cf.exec(e);for(;r;){const[,t,s]=r;i.push(t||s),r=Cf.exec(e)}return i}const OA=/{[^}]*}/g;function Et(e,...i){const r=mc(),t=r.translations||[],s=[...i,...Array.isArray(t)?t.map(u=>u[e]):[t[e]],r.locale[e]];return(u,f)=>{const c=wA(u,s);return f?c.replace(OA,m=>{const v=m.substring(1,m.length-1);if(f[v]===void 0){const p=JSON.stringify(f);throw new Error(`Error translating key '${u}'. No replacement syntax ({}) found for key '${v}'. The following replacements were passed: '${p}'`)}return f[v]}):c}}var SA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const IA=T.forwardRef((e,i)=>{var{className:r,size:t="medium",title:s,transparent:o=!1,variant:u="neutral",id:f,"data-color":c}=e,m=SA(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:v}=Oe(),p=Na(),y=Et("Loader");return F.createElement("svg",Object.assign({"aria-labelledby":f??`loader-${p}`,ref:i,className:v("navds-loader",r,`navds-loader--${t}`,`navds-loader--${u}`,{"navds-loader--transparent":o}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??NA(u)},mr(m,["children"]),{"data-variant":u}),F.createElement("title",{id:f??`loader-${p}`},s||y("title")),F.createElement("circle",{className:v("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),F.createElement("circle",{className:v("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function NA(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var xA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const us=T.forwardRef((e,i)=>{var{as:r="button",variant:t="primary",className:s,children:o,size:u="medium",loading:f=!1,disabled:c,icon:m,iconPosition:v="left",onKeyUp:p,"data-color":y}=e,k=xA(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:N}=Oe(),A=c||f?mr(k,["href"]):k,_=w=>{w.key===" "&&!c&&!f&&w.currentTarget.click()};return F.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":y??FA(t),"data-variant":LA(t)},A,{ref:i,onKeyUp:xa(p,_),className:N(s,"navds-button",`navds-button--${t}`,`navds-button--${u}`,{"navds-button--loading":f,"navds-button--icon-only":!!m&&!o,"navds-button--disabled":c??f}),disabled:c??f?!0:void 0}),m&&v==="left"&&F.createElement("span",{className:N("navds-button__icon")},m),f&&F.createElement(IA,{size:u}),o&&F.createElement(pt,{as:"span",size:u==="medium"?"medium":"small"},o),m&&v==="right"&&F.createElement("span",{className:N("navds-button__icon")},m))});function FA(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function LA(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var BA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const qA={error:r1,warning:K_,info:H_,success:C_},MA=T.forwardRef((e,i)=>{var{children:r,className:t,variant:s,size:o="medium",fullWidth:u=!1,contentMaxWidth:f=!0,inline:c=!1,closeButton:m=!1,onClose:v}=e,p=BA(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:y}=Oe(),k=Et("Alert"),N=qA[s];return F.createElement("div",Object.assign({},p,{"data-color":DA(s),"data-variant":s,ref:i,className:y(t,"navds-alert",`navds-alert--${s}`,`navds-alert--${o}`,{"navds-alert--full-width":u,"navds-alert--inline":c,"navds-alert--close-button":m})}),F.createElement(N,{title:k(s),className:y("navds-alert__icon")}),F.createElement(wo,{as:"div",size:o,className:y("navds-alert__wrapper",f&&"navds-alert__wrapper--maxwidth")},r),m&&!c&&F.createElement("div",{className:y("navds-alert__button-wrapper")},F.createElement(us,{className:y("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:v,type:"button",icon:F.createElement(Jl,{title:["error","warning"].includes(s)?k("closeAlert"):k("closeMessage")})})))});function DA(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function jA(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function CA(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(i=>{let{brand:r,version:t}=i;return r+"/"+t}).join(" "):navigator.userAgent}function VA(){return/apple/i.test(navigator.vendor)}function GA(){return jA().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function KA(){return CA().includes("jsdom/")}const UA="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Vf(e){let i=e.activeElement;for(;((r=i)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;i=i.shadowRoot.activeElement}return i}function Ra(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&Xi(r)){let t=i;for(;t;){if(e===t)return!0;t=t.parentNode||t.host}}return!1}function Ct(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Nl(e,i){if(i==null)return!1;if("composedPath"in e)return e.composedPath().includes(i);const r=e;return r.target!=null&&i.contains(r.target)}function HA(e){return e.matches("html,body")}function vt(e){return e?.ownerDocument||document}function $A(e){return Un(e)&&e.matches(UA)}function YA(e){if(!e||KA())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function xl(e,i,r){r===void 0&&(r=!0);let t=e.filter(o=>{var u;return o.parentId===i&&((u=o.context)==null?void 0:u.open)}),s=t;for(;s.length;)s=r?e.filter(o=>{var u;return(u=s)==null?void 0:u.some(f=>{var c;return o.parentId===f.id&&((c=o.context)==null?void 0:c.open)})}):e,t=t.concat(s);return t}function WA(e){return"nativeEvent"in e}function ro(e,i){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var Ut=typeof document<"u"?T.useLayoutEffect:T.useEffect;const zA={...ic};function Bi(e){const i=T.useRef(e);return Ut(()=>{i.current=e}),i}const XA=zA.useInsertionEffect,ZA=XA||(e=>e());function Dr(e){const i=T.useRef(()=>{});return ZA(()=>{i.current=e}),T.useCallback(function(){for(var r=arguments.length,t=new Array(r),s=0;s<r;s++)t[s]=arguments[s];return i.current==null?void 0:i.current(...t)},[])}const JA="data-floating-ui-focusable",Gf="active",Kf="selected",QA={...ic};let Uf=!1,eE=0;const Hf=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+eE++;function nE(){const[e,i]=T.useState(()=>Uf?Hf():void 0);return Ut(()=>{e==null&&i(Hf())},[]),T.useEffect(()=>{Uf=!0},[]),e}const rE=QA.useId,tE=rE||nE;function aE(){const e=new Map;return{emit(i,r){var t;(t=e.get(i))==null||t.forEach(s=>s(r))},on(i,r){e.has(i)||e.set(i,new Set),e.get(i).add(r)},off(i,r){var t;(t=e.get(i))==null||t.delete(r)}}}const iE=T.createContext(null),sE=T.createContext(null),Rc=()=>{var e;return((e=T.useContext(iE))==null?void 0:e.id)||null},Fo=()=>T.useContext(sE);function Lo(e){return"data-floating-ui-"+e}function nr(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const $f=Lo("safe-polygon");function Fl(e,i,r){if(r&&!ro(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const t=e();return typeof t=="number"?t:t?.[i]}return e?.[i]}function Ll(e){return typeof e=="function"?e():e}function lE(e,i){i===void 0&&(i={});const{open:r,onOpenChange:t,dataRef:s,events:o,elements:u}=e,{enabled:f=!0,delay:c=0,handleClose:m=null,mouseOnly:v=!1,restMs:p=0,move:y=!0}=i,k=Fo(),N=Rc(),A=Bi(m),_=Bi(c),w=Bi(r),S=Bi(p),R=T.useRef(),j=T.useRef(-1),I=T.useRef(),G=T.useRef(-1),D=T.useRef(!0),C=T.useRef(!1),$=T.useRef(()=>{}),ne=T.useRef(!1),ee=T.useCallback(()=>{var Z;const W=(Z=s.current.openEvent)==null?void 0:Z.type;return W?.includes("mouse")&&W!=="mousedown"},[s]);T.useEffect(()=>{if(!f)return;function Z(W){let{open:J}=W;J||(nr(j),nr(G),D.current=!0,ne.current=!1)}return o.on("openchange",Z),()=>{o.off("openchange",Z)}},[f,o]),T.useEffect(()=>{if(!f||!A.current||!r)return;function Z(J){ee()&&t(!1,J,"hover")}const W=vt(u.floating).documentElement;return W.addEventListener("mouseleave",Z),()=>{W.removeEventListener("mouseleave",Z)}},[u.floating,r,t,f,A,ee]);const K=T.useCallback(function(Z,W,J){W===void 0&&(W=!0),J===void 0&&(J="hover");const de=Fl(_.current,"close",R.current);de&&!I.current?(nr(j),j.current=window.setTimeout(()=>t(!1,Z,J),de)):W&&(nr(j),t(!1,Z,J))},[_,t]),q=Dr(()=>{$.current(),I.current=void 0}),M=Dr(()=>{if(C.current){const Z=vt(u.floating).body;Z.style.pointerEvents="",Z.removeAttribute($f),C.current=!1}}),X=Dr(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);T.useEffect(()=>{if(!f)return;function Z(ve){if(nr(j),D.current=!1,v&&!ro(R.current)||Ll(S.current)>0&&!Fl(_.current,"open"))return;const _e=Fl(_.current,"open",R.current);_e?j.current=window.setTimeout(()=>{w.current||t(!0,ve,"hover")},_e):r||t(!0,ve,"hover")}function W(ve){if(X()){M();return}$.current();const _e=vt(u.floating);if(nr(G),ne.current=!1,A.current&&s.current.floatingContext){r||nr(j),I.current=A.current({...s.current.floatingContext,tree:k,x:ve.clientX,y:ve.clientY,onClose(){M(),q(),X()||K(ve,!0,"safe-polygon")}});const Ye=I.current;_e.addEventListener("mousemove",Ye),$.current=()=>{_e.removeEventListener("mousemove",Ye)};return}(R.current==="touch"?!Ra(u.floating,ve.relatedTarget):!0)&&K(ve)}function J(ve){X()||s.current.floatingContext&&(A.current==null||A.current({...s.current.floatingContext,tree:k,x:ve.clientX,y:ve.clientY,onClose(){M(),q(),X()||K(ve)}})(ve))}function de(){nr(j)}function oe(ve){X()||K(ve,!1)}if($e(u.domReference)){const ve=u.domReference,_e=u.floating;return r&&ve.addEventListener("mouseleave",J),y&&ve.addEventListener("mousemove",Z,{once:!0}),ve.addEventListener("mouseenter",Z),ve.addEventListener("mouseleave",W),_e&&(_e.addEventListener("mouseleave",J),_e.addEventListener("mouseenter",de),_e.addEventListener("mouseleave",oe)),()=>{r&&ve.removeEventListener("mouseleave",J),y&&ve.removeEventListener("mousemove",Z),ve.removeEventListener("mouseenter",Z),ve.removeEventListener("mouseleave",W),_e&&(_e.removeEventListener("mouseleave",J),_e.removeEventListener("mouseenter",de),_e.removeEventListener("mouseleave",oe))}}},[u,f,e,v,y,K,q,M,t,r,w,k,_,A,s,X,S]),Ut(()=>{var Z;if(f&&r&&(Z=A.current)!=null&&Z.__options.blockPointerEvents&&ee()){C.current=!0;const J=u.floating;if($e(u.domReference)&&J){var W;const de=vt(u.floating).body;de.setAttribute($f,"");const oe=u.domReference,ve=k==null||(W=k.nodesRef.current.find(_e=>_e.id===N))==null||(W=W.context)==null?void 0:W.elements.floating;return ve&&(ve.style.pointerEvents=""),de.style.pointerEvents="none",oe.style.pointerEvents="auto",J.style.pointerEvents="auto",()=>{de.style.pointerEvents="",oe.style.pointerEvents="",J.style.pointerEvents=""}}}},[f,r,N,u,k,A,ee]),Ut(()=>{r||(R.current=void 0,ne.current=!1,q(),M())},[r,q,M]),T.useEffect(()=>()=>{q(),nr(j),nr(G),M()},[f,u.domReference,q,M]);const re=T.useMemo(()=>{function Z(W){R.current=W.pointerType}return{onPointerDown:Z,onPointerEnter:Z,onMouseMove(W){const{nativeEvent:J}=W;function de(){!D.current&&!w.current&&t(!0,J,"hover")}v&&!ro(R.current)||r||Ll(S.current)===0||ne.current&&W.movementX**2+W.movementY**2<2||(nr(G),R.current==="touch"?de():(ne.current=!0,G.current=window.setTimeout(de,Ll(S.current))))}}},[v,t,r,w,S]);return T.useMemo(()=>f?{reference:re}:{},[f,re])}function Bl(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&Xi(r)){let t=i;for(;t;){if(e===t)return!0;t=t.parentNode||t.host}}return!1}function oE(e){return"composedPath"in e?e.composedPath()[0]:e.target}const uE={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},dE={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Yf=e=>{var i,r;return{escapeKey:typeof e=="boolean"?e:(i=e?.escapeKey)!=null?i:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function fE(e,i){i===void 0&&(i={});const{open:r,onOpenChange:t,elements:s,dataRef:o}=e,{enabled:u=!0,escapeKey:f=!0,outsidePress:c=!0,outsidePressEvent:m="pointerdown",referencePress:v=!1,referencePressEvent:p="pointerdown",ancestorScroll:y=!1,bubbles:k,capture:N}=i,A=Fo(),_=Dr(typeof c=="function"?c:()=>!1),w=typeof c=="function"?_:c,S=T.useRef(!1),R=T.useRef(!1),{escapeKey:j,outsidePress:I}=Yf(k),{escapeKey:G,outsidePress:D}=Yf(N),C=T.useRef(!1),$=Dr(X=>{var re;if(!r||!u||!f||X.key!=="Escape"||C.current)return;const Z=(re=o.current.floatingContext)==null?void 0:re.nodeId,W=A?xl(A.nodesRef.current,Z):[];if(!j&&(X.stopPropagation(),W.length>0)){let J=!0;if(W.forEach(de=>{var oe;if((oe=de.context)!=null&&oe.open&&!de.context.dataRef.current.__escapeKeyBubbles){J=!1;return}}),!J)return}t(!1,WA(X)?X.nativeEvent:X,"escape-key")}),ne=Dr(X=>{var re;const Z=()=>{var W;$(X),(W=Ct(X))==null||W.removeEventListener("keydown",Z)};(re=Ct(X))==null||re.addEventListener("keydown",Z)}),ee=Dr(X=>{var re;const Z=S.current;S.current=!1;const W=R.current;if(R.current=!1,m==="click"&&W||Z||typeof w=="function"&&!w(X))return;const J=Ct(X),de="["+Lo("inert")+"]",oe=vt(s.floating).querySelectorAll(de);let ve=$e(J)?J:null;for(;ve&&!Vr(ve);){const Ve=Kr(ve);if(Vr(Ve)||!$e(Ve))break;ve=Ve}if(oe.length&&$e(J)&&!HA(J)&&!Ra(J,s.floating)&&Array.from(oe).every(Ve=>!Ra(ve,Ve)))return;if(Un(J)&&M){const Ve=Vr(J),Ge=rr(J),Te=/auto|scroll/,xe=Ve||Te.test(Ge.overflowX),nn=Ve||Te.test(Ge.overflowY),Xe=xe&&J.clientWidth>0&&J.scrollWidth>J.clientWidth,Ze=nn&&J.clientHeight>0&&J.scrollHeight>J.clientHeight,Rn=Ge.direction==="rtl",Ke=Ze&&(Rn?X.offsetX<=J.offsetWidth-J.clientWidth:X.offsetX>J.clientWidth),ln=Xe&&X.offsetY>J.clientHeight;if(Ke||ln)return}const _e=(re=o.current.floatingContext)==null?void 0:re.nodeId,_n=A&&xl(A.nodesRef.current,_e).some(Ve=>{var Ge;return Nl(X,(Ge=Ve.context)==null?void 0:Ge.elements.floating)});if(Nl(X,s.floating)||Nl(X,s.domReference)||_n)return;const Ye=A?xl(A.nodesRef.current,_e):[];if(Ye.length>0){let Ve=!0;if(Ye.forEach(Ge=>{var Te;if((Te=Ge.context)!=null&&Te.open&&!Ge.context.dataRef.current.__outsidePressBubbles){Ve=!1;return}}),!Ve)return}t(!1,X,"outside-press")}),K=Dr(X=>{var re;const Z=()=>{var W;ee(X),(W=Ct(X))==null||W.removeEventListener(m,Z)};(re=Ct(X))==null||re.addEventListener(m,Z)});T.useEffect(()=>{if(!r||!u)return;o.current.__escapeKeyBubbles=j,o.current.__outsidePressBubbles=I;let X=-1;function re(oe){t(!1,oe,"ancestor-scroll")}function Z(){window.clearTimeout(X),C.current=!0}function W(){X=window.setTimeout(()=>{C.current=!1},ls()?5:0)}const J=vt(s.floating);f&&(J.addEventListener("keydown",G?ne:$,G),J.addEventListener("compositionstart",Z),J.addEventListener("compositionend",W)),w&&J.addEventListener(m,D?K:ee,D);let de=[];return y&&($e(s.domReference)&&(de=et(s.domReference)),$e(s.floating)&&(de=de.concat(et(s.floating))),!$e(s.reference)&&s.reference&&s.reference.contextElement&&(de=de.concat(et(s.reference.contextElement)))),de=de.filter(oe=>{var ve;return oe!==((ve=J.defaultView)==null?void 0:ve.visualViewport)}),de.forEach(oe=>{oe.addEventListener("scroll",re,{passive:!0})}),()=>{f&&(J.removeEventListener("keydown",G?ne:$,G),J.removeEventListener("compositionstart",Z),J.removeEventListener("compositionend",W)),w&&J.removeEventListener(m,D?K:ee,D),de.forEach(oe=>{oe.removeEventListener("scroll",re)}),window.clearTimeout(X)}},[o,s,f,w,m,r,t,y,u,j,I,$,G,ne,ee,D,K]),T.useEffect(()=>{S.current=!1},[w,m]);const q=T.useMemo(()=>({onKeyDown:$,...v&&{[uE[p]]:X=>{t(!1,X.nativeEvent,"reference-press")},...p!=="click"&&{onClick(X){t(!1,X.nativeEvent,"reference-press")}}}}),[$,t,v,p]),M=T.useMemo(()=>({onKeyDown:$,onMouseDown(){R.current=!0},onMouseUp(){R.current=!0},[dE[m]]:()=>{S.current=!0}}),[$,m]);return T.useMemo(()=>u?{reference:q,floating:M}:{},[u,q,M])}function gE(e){const{open:i=!1,onOpenChange:r,elements:t}=e,s=tE(),o=T.useRef({}),[u]=T.useState(()=>aE()),f=Rc()!=null,[c,m]=T.useState(t.reference),v=Dr((k,N,A)=>{o.current.openEvent=k?N:void 0,u.emit("openchange",{open:k,event:N,reason:A,nested:f}),r?.(k,N,A)}),p=T.useMemo(()=>({setPositionReference:m}),[]),y=T.useMemo(()=>({reference:c||t.reference||null,floating:t.floating||null,domReference:t.reference}),[c,t.reference,t.floating]);return T.useMemo(()=>({dataRef:o,open:i,onOpenChange:v,elements:y,events:u,floatingId:s,refs:p}),[i,v,y,u,s,p])}function cE(e){e===void 0&&(e={});const{nodeId:i}=e,r=gE({...e,elements:{reference:null,floating:null,...e.elements}}),t=e.rootContext||r,s=t.elements,[o,u]=T.useState(null),[f,c]=T.useState(null),v=s?.domReference||o,p=T.useRef(null),y=Fo();Ut(()=>{v&&(p.current=v)},[v]);const k=kA({...e,elements:{...s,...f&&{reference:f}}}),N=T.useCallback(R=>{const j=$e(R)?{getBoundingClientRect:()=>R.getBoundingClientRect(),getClientRects:()=>R.getClientRects(),contextElement:R}:R;c(j),k.refs.setReference(j)},[k.refs]),A=T.useCallback(R=>{($e(R)||R===null)&&(p.current=R,u(R)),($e(k.refs.reference.current)||k.refs.reference.current===null||R!==null&&!$e(R))&&k.refs.setReference(R)},[k.refs]),_=T.useMemo(()=>({...k.refs,setReference:A,setPositionReference:N,domReference:p}),[k.refs,A,N]),w=T.useMemo(()=>({...k.elements,domReference:v}),[k.elements,v]),S=T.useMemo(()=>({...k,...t,refs:_,elements:w,nodeId:i}),[k,_,w,i,t]);return Ut(()=>{t.dataRef.current.floatingContext=S;const R=y?.nodesRef.current.find(j=>j.id===i);R&&(R.context=S)}),T.useMemo(()=>({...k,context:S,refs:_,elements:w}),[k,_,w,S])}function ql(){return GA()&&VA()}function mE(e,i){i===void 0&&(i={});const{open:r,onOpenChange:t,events:s,dataRef:o,elements:u}=e,{enabled:f=!0,visibleOnly:c=!0}=i,m=T.useRef(!1),v=T.useRef(-1),p=T.useRef(!0);T.useEffect(()=>{if(!f)return;const k=qn(u.domReference);function N(){!r&&Un(u.domReference)&&u.domReference===Vf(vt(u.domReference))&&(m.current=!0)}function A(){p.current=!0}function _(){p.current=!1}return k.addEventListener("blur",N),ql()&&(k.addEventListener("keydown",A,!0),k.addEventListener("pointerdown",_,!0)),()=>{k.removeEventListener("blur",N),ql()&&(k.removeEventListener("keydown",A,!0),k.removeEventListener("pointerdown",_,!0))}},[u.domReference,r,f]),T.useEffect(()=>{if(!f)return;function k(N){let{reason:A}=N;(A==="reference-press"||A==="escape-key")&&(m.current=!0)}return s.on("openchange",k),()=>{s.off("openchange",k)}},[s,f]),T.useEffect(()=>()=>{nr(v)},[]);const y=T.useMemo(()=>({onMouseLeave(){m.current=!1},onFocus(k){if(m.current)return;const N=Ct(k.nativeEvent);if(c&&$e(N)){if(ql()&&!k.relatedTarget){if(!p.current&&!$A(N))return}else if(!YA(N))return}t(!0,k.nativeEvent,"focus")},onBlur(k){m.current=!1;const N=k.relatedTarget,A=k.nativeEvent,_=$e(N)&&N.hasAttribute(Lo("focus-guard"))&&N.getAttribute("data-type")==="outside";v.current=window.setTimeout(()=>{var w;const S=Vf(u.domReference?u.domReference.ownerDocument:document);!N&&S===u.domReference||Ra((w=o.current.floatingContext)==null?void 0:w.refs.floating.current,S)||Ra(u.domReference,S)||_||t(!1,A,"focus")})}}),[o,u.domReference,t,c]);return T.useMemo(()=>f?{reference:y}:{},[f,y])}function Ml(e,i,r){const t=new Map,s=r==="item";let o=e;if(s&&e){const{[Gf]:u,[Kf]:f,...c}=e;o=c}return{...r==="floating"&&{tabIndex:-1,[JA]:""},...o,...i.map(u=>{const f=u?u[r]:null;return typeof f=="function"?e?f(e):null:f}).concat(e).reduce((u,f)=>(f&&Object.entries(f).forEach(c=>{let[m,v]=c;if(!(s&&[Gf,Kf].includes(m)))if(m.indexOf("on")===0){if(t.has(m)||t.set(m,[]),typeof v=="function"){var p;(p=t.get(m))==null||p.push(v),u[m]=function(){for(var y,k=arguments.length,N=new Array(k),A=0;A<k;A++)N[A]=arguments[A];return(y=t.get(m))==null?void 0:y.map(_=>_(...N)).find(_=>_!==void 0)}}}else u[m]=v}),u),{})}}function vE(e){e===void 0&&(e=[]);const i=e.map(f=>f?.reference),r=e.map(f=>f?.floating),t=e.map(f=>f?.item),s=T.useCallback(f=>Ml(f,e,"reference"),i),o=T.useCallback(f=>Ml(f,e,"floating"),r),u=T.useCallback(f=>Ml(f,e,"item"),t);return T.useMemo(()=>({getReferenceProps:s,getFloatingProps:o,getItemProps:u}),[s,o,u])}function hE(e,i,r){r===void 0&&(r=!0);let t=e.filter(o=>{var u;return o.parentId===i&&((u=o.context)==null?void 0:u.open)}),s=t;for(;s.length;)s=r?e.filter(o=>{var u;return(u=s)==null?void 0:u.some(f=>{var c;return o.parentId===f.id&&((c=o.context)==null?void 0:c.open)})}):e,t=t.concat(s);return t}function Wf(e,i){const[r,t]=e;let s=!1;const o=i.length;for(let u=0,f=o-1;u<o;f=u++){const[c,m]=i[u]||[0,0],[v,p]=i[f]||[0,0];m>=t!=p>=t&&r<=(v-c)*(t-m)/(p-m)+c&&(s=!s)}return s}function bE(e,i){return e[0]>=i.x&&e[0]<=i.x+i.width&&e[1]>=i.y&&e[1]<=i.y+i.height}function pE(e){e===void 0&&(e={});const{buffer:i=.5,blockPointerEvents:r=!1,requireIntent:t=!0}=e;let s,o=!1,u=null,f=null,c=performance.now();function m(p,y){const k=performance.now(),N=k-c;if(u===null||f===null||N===0)return u=p,f=y,c=k,null;const A=p-u,_=y-f,S=Math.sqrt(A*A+_*_)/N;return u=p,f=y,c=k,S}const v=p=>{let{x:y,y:k,placement:N,elements:A,onClose:_,nodeId:w,tree:S}=p;return function(j){function I(){clearTimeout(s),_()}if(clearTimeout(s),!A.domReference||!A.floating||N==null||y==null||k==null)return;const{clientX:G,clientY:D}=j,C=[G,D],$=oE(j),ne=j.type==="mouseleave",ee=Bl(A.floating,$),K=Bl(A.domReference,$),q=A.domReference.getBoundingClientRect(),M=A.floating.getBoundingClientRect(),X=N.split("-")[0],re=y>M.right-M.width/2,Z=k>M.bottom-M.height/2,W=bE(C,q),J=M.width>q.width,de=M.height>q.height,oe=(J?q:M).left,ve=(J?q:M).right,_e=(de?q:M).top,_n=(de?q:M).bottom;if(ee&&(o=!0,!ne))return;if(K&&(o=!1),K&&!ne){o=!0;return}if(ne&&$e(j.relatedTarget)&&Bl(A.floating,j.relatedTarget)||S&&hE(S.nodesRef.current,w).some(Ge=>{let{context:Te}=Ge;return Te?.open}))return;if(X==="top"&&k>=q.bottom-1||X==="bottom"&&k<=q.top+1||X==="left"&&y>=q.right-1||X==="right"&&y<=q.left+1)return I();let Ye=[];switch(X){case"top":Ye=[[oe,q.top+1],[oe,M.bottom-1],[ve,M.bottom-1],[ve,q.top+1]];break;case"bottom":Ye=[[oe,M.top+1],[oe,q.bottom-1],[ve,q.bottom-1],[ve,M.top+1]];break;case"left":Ye=[[M.right-1,_n],[M.right-1,_e],[q.left+1,_e],[q.left+1,_n]];break;case"right":Ye=[[q.right-1,_n],[q.right-1,_e],[M.left+1,_e],[M.left+1,_n]];break}function Ve(Ge){let[Te,xe]=Ge;switch(X){case"top":{const nn=[J?Te+i/2:re?Te+i*4:Te-i*4,xe+i+1],Xe=[J?Te-i/2:re?Te+i*4:Te-i*4,xe+i+1],Ze=[[M.left,re||J?M.bottom-i:M.top],[M.right,re?J?M.bottom-i:M.top:M.bottom-i]];return[nn,Xe,...Ze]}case"bottom":{const nn=[J?Te+i/2:re?Te+i*4:Te-i*4,xe-i],Xe=[J?Te-i/2:re?Te+i*4:Te-i*4,xe-i],Ze=[[M.left,re||J?M.top+i:M.bottom],[M.right,re?J?M.top+i:M.bottom:M.top+i]];return[nn,Xe,...Ze]}case"left":{const nn=[Te+i+1,de?xe+i/2:Z?xe+i*4:xe-i*4],Xe=[Te+i+1,de?xe-i/2:Z?xe+i*4:xe-i*4];return[...[[Z||de?M.right-i:M.left,M.top],[Z?de?M.right-i:M.left:M.right-i,M.bottom]],nn,Xe]}case"right":{const nn=[Te-i,de?xe+i/2:Z?xe+i*4:xe-i*4],Xe=[Te-i,de?xe-i/2:Z?xe+i*4:xe-i*4],Ze=[[Z||de?M.left+i:M.right,M.top],[Z?de?M.left+i:M.right:M.left+i,M.bottom]];return[nn,Xe,...Ze]}}}if(!Wf([G,D],Ye)){if(o&&!W)return I();if(!ne&&t){const Ge=m(j.clientX,j.clientY);if(Ge!==null&&Ge<.1)return I()}Wf([G,D],Ve([y,k]))?!o&&t&&(s=window.setTimeout(I,40)):I()}}};return v.__options={blockPointerEvents:r},v}const Oc=()=>{const{cn:e}=Oe();return F.createElement(cc,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Sc=()=>{const{cn:e}=Oe();return F.createElement(cc,{title:Et("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var yE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const kE=T.forwardRef((e,i)=>{var{className:r,header:t,children:s,open:o,defaultOpen:u=!1,onClick:f,size:c="medium",onOpenChange:m}=e,v=yE(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:p}=Oe(),[y,k]=Ro({defaultValue:u,value:o,onChange:m}),N=c==="small"?"small":"medium";return F.createElement("div",{className:p("navds-read-more",`navds-read-more--${c}`,r,{"navds-read-more--open":y}),"data-volume":"low"},F.createElement("button",Object.assign({},v,{ref:i,type:"button",className:p("navds-read-more__button","navds-body-short",{"navds-body-short--small":c==="small"}),onClick:xa(f,()=>k(A=>!A)),"aria-expanded":y,"data-state":y?"open":"closed"}),F.createElement(fc,{className:p("navds-read-more__expand-icon"),"aria-hidden":!0}),F.createElement("span",null,t)),F.createElement(wo,{as:"div","aria-hidden":!y,className:p("navds-read-more__content",{"navds-read-more__content--closed":!y}),size:N,"data-state":y?"open":"closed"},s))}),Ji=T.createContext(null),ds=(e,i)=>{var r,t,s;const{size:o,error:u,errorId:f}=e,c=T.useContext(Ji),m=Na(),v=(r=e.id)!==null&&r!==void 0?r:`${i}-${m}`,p=f??`${i}-error-${m}`,y=`${i}-description-${m}`,k=c?.disabled||e.disabled,N=(c?.readOnly||e.readOnly)&&!k||void 0,A=!k&&!N&&!!(u||c?.error),_=!k&&!N&&!!u&&typeof u!="boolean",w=Object.assign({},A?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:_,hasError:A,errorId:p,inputDescriptionId:y,size:(t=o??c?.size)!==null&&t!==void 0?t:"medium",readOnly:N,inputProps:Object.assign(Object.assign({id:v},w),{"aria-describedby":Sa(e["aria-describedby"],{[y]:e.description&&!Qi(e.description),[p]:_,[(s=c?.errorId)!==null&&s!==void 0?s:""]:A&&c?.error})||void 0,disabled:k})}};function Qi(e,i=!0){if(F.isValidElement(e)){if(e.type===kE)return!0;if(e.props.children&&i)return Qi(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>Qi(r,i));return!1}function hn(e,i,r,t){return t?typeof t=="string"?{[`--__${e}c-${i}-${r}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([s,o])=>[`--__${e}c-${i}-${r}-${s}`,o])):{}}const _E={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},AE={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},zf=(e,i,r,t,s,o)=>i.split(" ").map((u,f,c)=>{var m,v;if(e==="margin-inline"&&u==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&u==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&u==="auto")return"auto";let p=`var(--${o}-${r}-${u})`;if(t.includes(u))p=u==="px"?"1px":u;else if(r==="spacing"&&u.startsWith("space"))p=`var(--${o}-${u})`;else if(r==="spacing"){const y=`--${o}-spacing-${u}`;p=`var(${(m=_E[y])!==null&&m!==void 0?m:y})`}else if(r==="radius"){const y=(v=AE[u])!==null&&v!==void 0?v:u;p=`var(--${o}-radius-${y})`}return s?u==="0"?"0":`calc(-1 * ${p})`:p}).join(" ");function Fn(e,i,r,t,s,o=!1,u=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${i}-${r}-xs`]:zf(r,s,t,u,o,e)};const f={};return Object.entries(s).forEach(([c,m])=>{f[`--__${e}c-${i}-${r}-${c}`]=zf(r,m,t,u,o,e)}),f}const Bo=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],qo=({children:e,className:i,padding:r,paddingInline:t,paddingBlock:s,margin:o,marginInline:u,marginBlock:f,width:c,minWidth:m,maxWidth:v,height:p,minHeight:y,maxHeight:k,position:N,inset:A,top:_,right:w,left:S,bottom:R,overflow:j,overflowX:I,overflowY:G,flexBasis:D,flexGrow:C,flexShrink:$,gridColumn:ne})=>{const ee=Ia(!1),{cn:K}=Oe(),q=ee?"ax":"a",M=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Fn(q,"r","p","spacing",r)),Fn(q,"r","pi","spacing",t)),Fn(q,"r","pb","spacing",s)),Fn(q,"r","m","spacing",o)),Fn(q,"r","mi","spacing",u)),Fn(q,"r","mb","spacing",f)),hn(q,"r","w",c)),hn(q,"r","minw",m)),hn(q,"r","maxw",v)),hn(q,"r","h",p)),hn(q,"r","minh",y)),hn(q,"r","maxh",k)),hn(q,"r","position",N)),Fn(q,"r","inset","spacing",A)),Fn(q,"r","top","spacing",_)),Fn(q,"r","right","spacing",w)),Fn(q,"r","bottom","spacing",R)),Fn(q,"r","left","spacing",S)),hn(q,"r","overflow",j)),hn(q,"r","overflowx",I)),hn(q,"r","overflowy",G)),hn(q,"r","flex-basis",D)),hn(q,"r","flex-grow",C)),hn(q,"r","flex-shrink",$)),hn(q,"r","grid-column",ne));return F.createElement($t,{className:K({className:i,"navds-r-p":r,"navds-r-pi":t,"navds-r-pb":s,"navds-r-m":o,"navds-r-mi":u,"navds-r-mb":f,"navds-r-w":c,"navds-r-minw":m,"navds-r-maxw":v,"navds-r-h":p,"navds-r-minh":y,"navds-r-maxh":k,"navds-r-position":N,"navds-r-inset":A,"navds-r-top":_,"navds-r-right":w,"navds-r-bottom":R,"navds-r-left":S,"navds-r-overflow":j,"navds-r-overflowx":I,"navds-r-overflowy":G,"navds-r-flex-basis":D,"navds-r-flex-grow":C,"navds-r-flex-shrink":$,"navds-r-grid-column":ne}),style:M},e)};var EE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const TE=T.forwardRef((e,i)=>{var{children:r,className:t,as:s="div",background:o,borderColor:u,borderWidth:f,borderRadius:c,shadow:m,style:v,asChild:p}=e,y=EE(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:k}=Oe(),N=Object.assign(Object.assign(Object.assign({},v),{"--__axc-box-background":o?`var(--ax-bg-${o})`:void 0,"--__axc-box-shadow":m?`var(--ax-shadow-${m})`:void 0,"--__axc-box-border-color":u?`var(--ax-border-${u})`:void 0,"--__axc-box-border-width":f?f.split(" ").map(_=>`${_}px`).join(" "):void 0}),Fn("ax","box","radius","radius",c,!1,["0"])),A=p?$t:s;return F.createElement(qo,Object.assign({},y),F.createElement(A,Object.assign({},mr(y,Bo),{ref:i,style:N,className:k("navds-box",t,{"navds-box-bg":o,"navds-box-border-color":u,"navds-box-border-width":f,"navds-box-radius":c,"navds-box-shadow":m})}),r))});var PE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const wE=T.forwardRef((e,i)=>{var{children:r,className:t,as:s="div",background:o,borderColor:u,borderWidth:f,borderRadius:c,shadow:m,style:v,asChild:p}=e,y=PE(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const k=Ia(!1),{cn:N}=Oe(),A=k?"ax":"a",_=Object.assign(Object.assign(Object.assign({},v),{[`--__${A}c-box-background`]:o?`var(--a-${o})`:void 0,[`--__${A}c-box-shadow`]:m?`var(--a-shadow-${m})`:void 0,[`--__${A}c-box-border-color`]:u?`var(--a-${u})`:void 0,[`--__${A}c-box-border-width`]:f?f.split(" ").map(S=>`${S}px`).join(" "):void 0}),Fn(A,"box","radius","radius",c,!1,["0"])),w=p?$t:s;return F.createElement(qo,Object.assign({},y),F.createElement(w,Object.assign({},mr(y,Bo),{ref:i,style:_,className:N("navds-box",t,{"navds-box-bg":o,"navds-box-border-color":u,"navds-box-border-width":f,"navds-box-border-radius":c,"navds-box-shadow":m})}),r))}),Ic=wE;Ic.New=TE;var RE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Nc=T.forwardRef((e,i)=>{var{children:r,className:t,as:s="div",align:o,justify:u,wrap:f=!0,gap:c,style:m,direction:v="row",asChild:p}=e,y=RE(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const N=Ia(!1)?"ax":"a",{cn:A}=Oe(),_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),Fn(N,"stack","gap","spacing",c)),hn(N,"stack","direction",v)),hn(N,"stack","align",o)),hn(N,"stack","justify",u)),w=p?$t:s;return F.createElement(qo,Object.assign({},y),F.createElement(w,Object.assign({},mr(y,Bo),{ref:i,style:_,className:A("navds-stack",t,{"navds-vstack":v==="column","navds-hstack":v==="row","navds-stack-gap":c,"navds-stack-align":o,"navds-stack-justify":u,"navds-stack-direction":v,"navds-stack-wrap":f})}),r))});var OE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Mo=T.forwardRef((e,i)=>{var{as:r="div"}=e,t=OE(e,["as"]);return F.createElement(Nc,Object.assign({as:r},t,{ref:i,direction:"row"}))});var SE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const _t=T.forwardRef((e,i)=>{var{as:r="div"}=e,t=SE(e,["as"]);return F.createElement(Nc,Object.assign({as:r},t,{ref:i,direction:"column",wrap:!1}))});var IE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const NE=T.forwardRef((e,i)=>{var{className:r}=e,t=IE(e,["className"]);const{cn:s}=Oe();return F.createElement("tbody",Object.assign({},t,{ref:i,className:s("navds-table__body",r)}))});var xE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const xc=T.forwardRef((e,i)=>{var{className:r,children:t,align:s,textSize:o}=e,u=xE(e,["className","children","align","textSize"]);const{cn:f}=Oe();return F.createElement("th",Object.assign({ref:i,className:f("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":o==="small"})},u),t)}),Fc=T.createContext(null);var FE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const LE=T.forwardRef((e,i)=>{var r,t,s,o,{className:u,children:f,sortable:c=!1,sortKey:m}=e,v=FE(e,["className","children","sortable","sortKey"]);const p=T.useContext(Fc),{cn:y}=Oe();return c&&!m&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),F.createElement(xc,Object.assign({scope:"col",ref:i,className:y(u),"aria-sort":c?((r=p?.sort)===null||r===void 0?void 0:r.orderBy)===m?(t=p?.sort)===null||t===void 0?void 0:t.direction:"none":void 0},v),c?F.createElement("button",{type:"button",className:y("navds-table__sort-button"),onClick:c&&m?()=>{var k;return(k=p?.onSortChange)===null||k===void 0?void 0:k.call(p,m)}:void 0},f,((s=p?.sort)===null||s===void 0?void 0:s.orderBy)===m?((o=p?.sort)===null||o===void 0?void 0:o.direction)==="descending"?F.createElement(Z_,{"aria-hidden":!0}):F.createElement(Q_,{"aria-hidden":!0}):F.createElement(D_,{"aria-hidden":!0})):f)});var BE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Lc=T.forwardRef((e,i)=>{var{className:r,children:t="",align:s,textSize:o}=e,u=BE(e,["className","children","align","textSize"]);const{cn:f}=Oe();return F.createElement(cr,Object.assign({as:"td",ref:i,className:f("navds-table__data-cell",r,{[`navds-table__data-cell--align-${s}`]:s}),size:o},u),t)});var qE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ME=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function DE(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function Xf(e){return typeof e=="string"&&e[e.length-1]==="%"&&DE(e.substring(0,e.length-1))}function Dl(e,i){i===0&&e?.style&&(e.style.display="none")}function jE(e,i){i===0&&e?.style&&(e.style.display="")}const CE=e=>{var{children:i,className:r,innerClassName:t,duration:s=250,easing:o="ease",height:u}=e,f=qE(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=Oe(),m=T.useRef(u),v=T.useRef(null),p=T.useRef(),y=T.useRef(),k=T.useRef(u),N=T.useRef("visible"),A=ME?0:s;typeof k.current=="number"?(typeof u!="string"&&(k.current=u<0?0:u),N.current="hidden"):Xf(k.current)&&(k.current=u==="0%"?0:u,N.current="hidden");const[_,w]=T.useState(k.current),[S,R]=T.useState(N.current),[j,I]=T.useState(!1);T.useEffect(()=>{Dl(v.current,k.current)},[]),T.useEffect(()=>{if(u!==m.current&&v.current){jE(v.current,m.current),v.current.style.overflow="hidden";const $=v.current.offsetHeight;v.current.style.overflow="";const ne=A;let ee,K,q="hidden",M;const X=m.current==="auto";typeof u=="number"?(ee=u<0?0:u,K=ee):Xf(u)?(ee=u==="0%"?0:u,K=ee):(ee=$,K="auto",q=void 0),X&&(K=ee,ee=$),w(ee),R("hidden"),I(!X),clearTimeout(y.current),clearTimeout(p.current),X?(M=!0,y.current=setTimeout(()=>{w(K),R(q),I(M)},50),p.current=setTimeout(()=>{I(!1),Dl(v.current,K)},ne)):y.current=setTimeout(()=>{w(K),R(q),I(!1),u!=="auto"&&Dl(v.current,ee)},ne)}return m.current=u,()=>{clearTimeout(y.current),clearTimeout(p.current)}},[u]);const G={height:_,overflow:S};j&&(G.transition=`height ${A}ms ${o} 0ms`,G.WebkitTransition=G.transition);const C=typeof f["aria-hidden"]<"u"?f["aria-hidden"]:u===0;return F.createElement("div",Object.assign({},f,{className:c(r),style:G}),F.createElement("div",{"aria-hidden":C,className:c(t),ref:v},i))};var VE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Bc=T.forwardRef((e,i)=>{var{className:r,selected:t=!1,shadeOnHover:s=!0}=e,o=VE(e,["className","selected","shadeOnHover"]);const{cn:u}=Oe();return F.createElement("tr",Object.assign({},o,{ref:i,className:u("navds-table__row",r,{"navds-table__row--selected":t,"navds-table__row--shade-on-hover":s})}))});var GE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const KE=T.forwardRef((e,i)=>{var{className:r,children:t,content:s,togglePlacement:o="left",defaultOpen:u=!1,open:f,onOpenChange:c,expansionDisabled:m=!1,expandOnRowClick:v=!1,colSpan:p=999,contentGutter:y,onClick:k}=e,N=GE(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:A}=Oe(),[_,w]=Ro({defaultValue:u,value:f,onChange:c}),S=Et("global"),R=Na(),j=G=>{w(D=>!D),G.stopPropagation()},I=G=>{v&&!m&&!qc(G.target)&&j(G)};return F.createElement(F.Fragment,null,F.createElement(Bc,Object.assign({},N,{ref:i,className:A("navds-table__expandable-row",r,{"navds-table__expandable-row--open":_,"navds-table__expandable-row--expansion-disabled":m,"navds-table__expandable-row--clickable":v}),onClick:xa(k,I)}),o==="right"&&t,F.createElement(Lc,{className:A("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":_}),onClick:m?()=>null:j},!m&&F.createElement("button",{className:A("navds-table__toggle-expand-button"),type:"button","aria-controls":R,"aria-expanded":_,onClick:j},F.createElement(fc,{className:A("navds-table__expandable-icon"),title:S(_?"showLess":"showMore")}))),o==="left"&&t),F.createElement("tr",{"data-state":_?"open":"closed",className:A("navds-table__expanded-row"),"aria-hidden":!_,id:R},F.createElement("td",{colSpan:p,className:A("navds-table__expanded-row-cell")},F.createElement(CE,{className:A("navds-table__expanded-row-collapse"),innerClassName:A(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${y??o}`),height:_?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function qc(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:qc(e.parentElement)}var UE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const HE=T.forwardRef((e,i)=>{var{className:r}=e,t=UE(e,["className"]);const{cn:s}=Oe();return F.createElement("thead",Object.assign({},t,{ref:i,className:s("navds-table__header",r)}))});var $E=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const De=T.forwardRef((e,i)=>{var{className:r,zebraStripes:t=!1,size:s="medium",onSortChange:o,sort:u,stickyHeader:f=!1}=e,c=$E(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:m}=Oe();return F.createElement(Fc.Provider,{value:{onSortChange:o,sort:u}},F.createElement("table",Object.assign({},c,{ref:i,className:m("navds-table",`navds-table--${s}`,r,{"navds-table--zebra-stripes":t,"navds-table--sticky-header":f})})))});De.Header=HE;De.Body=NE;De.Row=Bc;De.ColumnHeader=LE;De.HeaderCell=xc;De.DataCell=Lc;De.ExpandableRow=KE;var YE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const WE=T.forwardRef((e,i)=>{var{children:r,className:t,variant:s,size:o="medium",icon:u,"data-color":f}=e,c=YE(e,["children","className","variant","size","icon","data-color"]);const{cn:m}=Oe(),v=s?.endsWith("-filled")&&"strong",p=s?.endsWith("-moderate")&&"moderate";return F.createElement(cr,Object.assign({"data-color":f??zE(s),"data-variant":v||p||"outline"},c,{ref:i,as:"span",size:o==="medium"?"medium":"small",className:m("navds-tag",t,`navds-tag--${s}`,`navds-tag--${o}`)}),u&&F.createElement("span",{className:m("navds-tag__icon--left")},u),r)});function zE(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var XE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ZE=T.forwardRef((e,i)=>{var{children:r,className:t,arrow:s=!0,placement:o="top",open:u,defaultOpen:f=!1,onOpenChange:c,offset:m,content:v,delay:p=150,id:y,keys:k,maxChar:N=80,describesChild:A=!1}=e,_=XE(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:w}=Oe(),[S,R]=Ro({defaultValue:f,value:u,onChange:c}),j=T.useRef(null),I=t1(!1),G=I?I.ref.current:void 0,{x:D,y:C,strategy:$,context:ne,placement:ee,middlewareData:{arrow:{x:K,y:q}={},hide:{referenceHidden:M}={}},refs:X}=cE({placement:o,open:S,onOpenChange:oe=>R(oe),middleware:[AA(m??(s?8:4)),EA(),TA({padding:5,fallbackPlacements:["bottom","top"]}),PA({element:j,padding:5})],whileElementsMounted:I?(oe,ve,_e)=>Mf(oe,ve,_e,{animationFrame:!0}):Mf,strategy:I?"fixed":void 0}),{getReferenceProps:re,getFloatingProps:Z}=vE([lE(ne,{handleClose:pE(),restMs:p}),mE(ne),fE(ne)]),W=Na(y),J=To(i,X.setFloating);if(!r||r?.type===F.Fragment||r===F.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;v?.length>N&&S&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${v.length}
Tooltip-content: ${v}`);const de=A?S?{"aria-describedby":W}:{title:v}:{"aria-label":v};return F.createElement(F.Fragment,null,F.createElement($t,Object.assign({ref:X.setReference},re(),de,{"aria-keyshortcuts":k?k.join("+"):void 0}),r),F.createElement(j1,{rootElement:G,asChild:!0},S&&F.createElement("div",Object.assign({},Z(Object.assign(Object.assign({},_),{ref:J,style:{position:$,top:C??0,left:D??0,visibility:M?"hidden":"visible"},role:"tooltip",id:W,className:w("navds-tooltip","navds-detail navds-detail--small",t)})),{"data-side":ee,"data-state":"open"}),v,k&&F.createElement("span",{className:w("navds-tooltip__keys"),"aria-hidden":!0},k.map(oe=>F.createElement(I_,{as:"kbd",key:oe,className:w("navds-tooltip__key")},oe))),s&&F.createElement("div",{ref:oe=>{j.current=oe},className:w("navds-tooltip__arrow"),style:{left:K!=null?`${K}px`:"",top:q!=null?`${q}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[ee]]:"-3.5px"}}))))}),JE=e=>{const i=ds(e,"fieldset");return Object.assign(Object.assign({},i),{inputProps:{"aria-describedby":Sa(e["aria-describedby"],{[i.inputDescriptionId]:e.description&&!Qi(e.description)})||void 0}})};var QE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const e5=T.forwardRef((e,i)=>{var r,t,s;const{inputProps:o,errorId:u,showErrorMsg:f,hasError:c,size:m,readOnly:v,inputDescriptionId:p}=JE(e),{cn:y}=Oe(),k=T.useContext(Ji),{children:N,className:A,errorPropagation:_=!0,legend:w,description:S,hideLegend:R,nativeReadOnly:j=!0}=e,I=QE(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return F.createElement(Ji.Provider,{value:{error:_?(r=e.error)!==null&&r!==void 0?r:k?.error:void 0,errorId:Sa({[u]:f,[(t=k?.errorId)!==null&&t!==void 0?t:""]:!!k?.error}),size:m,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:v}},F.createElement("fieldset",Object.assign({},mr(I,["errorId","error","size","readOnly"]),o,{ref:i,className:y(A,"navds-fieldset",`navds-fieldset--${m}`,{"navds-fieldset--error":c,"navds-fieldset--readonly":v})}),F.createElement(pt,{size:m,as:"legend",className:y("navds-fieldset__legend",{"navds-sr-only":!!R})},v&&(j?F.createElement(Oc,null):F.createElement(Sc,null)),w),!!S&&F.createElement(cr,{className:y("navds-fieldset__description",{"navds-sr-only":!!R}),id:p,size:m??"medium",as:"div"},e.description),N,F.createElement("div",{id:u,"aria-relevant":"additions removals","aria-live":"polite",className:y("navds-fieldset__error")},f&&F.createElement(as,{size:m,showIcon:!0},e.error))))});var n5=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Mc=T.createContext(null);T.forwardRef((e,i)=>{var r,t,{value:s,defaultValue:o,onChange:u=()=>{},children:f,className:c}=e,m=n5(e,["value","defaultValue","onChange","children","className"]);const{cn:v}=Oe(),p=T.useContext(Ji),[y,k]=T.useState(o??[]),N=A=>{const _=s??y,w=_.includes(A)?_.filter(S=>S!==A):[..._,A];s===void 0&&k(w),u(w)};return F.createElement(e5,Object.assign({},m,{ref:i,className:v(c,"navds-checkbox-group",`navds-checkbox-group--${(t=(r=m.size)!==null&&r!==void 0?r:p?.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),F.createElement(Mc.Provider,{value:{value:s,defaultValue:o,toggleValue:N}},F.createElement("div",{className:v("navds-checkboxes")},f)))});var r5=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const t5=e=>{const i=T.useContext(Mc),r=ds(mr(e,["description","children"]),"checkbox"),{inputProps:t,readOnly:s}=r,o=r5(r,["inputProps","readOnly"]);return i&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},o),{readOnly:s,nested:!!i,inputProps:Object.assign(Object.assign({},t),{checked:i?.value?i.value.includes(e.value):e.checked,defaultChecked:i?.defaultValue?i.defaultValue.includes(e.value):e.defaultChecked,onChange:u=>{var f;s||((f=e.onChange)===null||f===void 0||f.call(e,u),i?.toggleValue(e.value))},onClick:u=>{var f;if(s){u.preventDefault();return}(f=e?.onClick)===null||f===void 0||f.call(e,u)}})})},a5=T.forwardRef((e,i)=>{const{cn:r}=Oe(),{inputProps:t,hasError:s,size:o,readOnly:u,nested:f}=t5(e);return F.createElement("div",{className:r(e.className,"navds-checkbox",`navds-checkbox--${o}`,{"navds-checkbox--error":s,"navds-checkbox--disabled":t.disabled,"navds-checkbox--readonly":u}),"data-color":s?"danger":e["data-color"]},F.createElement("input",Object.assign({},mr(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),mr(t,["aria-invalid"]),{type:"checkbox",className:r("navds-checkbox__input"),ref:c=>{var m;c&&(c.indeterminate=(m=e.indeterminate)!==null&&m!==void 0?m:!1),typeof i=="function"?i(c):i!=null&&(i.current=c)}})),F.createElement("label",{htmlFor:t.id,className:r("navds-checkbox__label")},F.createElement("span",{className:r("navds-checkbox__icon")},F.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},F.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),F.createElement("span",{className:r("navds-checkbox__icon-indeterminate")}),F.createElement("span",{className:r("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},F.createElement(cr,{as:"span",size:o,className:r("navds-checkbox__label-text")},!f&&u&&F.createElement(Sc,null),e.children),e.description&&F.createElement(cr,{as:"span",size:o,className:r("navds-form-field__subdescription navds-checkbox__description")},e.description))))}),Dc=T.createContext(null);var i5=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const jc=T.forwardRef((e,i)=>{var r,{className:t,children:s,disabled:o,onClick:u}=e,f=i5(e,["className","children","disabled","onClick"]);const{cn:c}=Oe(),m=Et("Search"),v=T.useContext(Dc);if(v===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:p,variant:y,handleClick:k}=v;return F.createElement(us,Object.assign({type:"submit"},f,{ref:i,size:p,variant:y==="secondary"?"secondary":"primary",className:c("navds-search__button-search",t),disabled:(r=v?.disabled)!==null&&r!==void 0?r:o,onClick:xa(u,k),icon:F.createElement(gc,Object.assign({},s?{"aria-hidden":!0}:{title:m("search")}))}),s)});var s5=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const to=T.forwardRef((e,i)=>{const{inputProps:r,size:t="medium",inputDescriptionId:s,errorId:o,showErrorMsg:u,hasError:f}=ds(e,"searchfield"),{className:c,hideLabel:m=!0,label:v,description:p,value:y,clearButtonLabel:k,onClear:N,clearButton:A=!0,children:_,variant:w="primary",defaultValue:S,onChange:R,onSearchClick:j,htmlSize:I,"data-color":G}=e,D=s5(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:C}=Oe(),$=T.useRef(null),ne=To($,i),[ee,K]=T.useState(S??""),q=Z=>{y===void 0&&K(Z),R?.(Z)},M=Z=>{var W,J;N?.(Z),q(""),(J=(W=$.current)===null||W===void 0?void 0:W.focus)===null||J===void 0||J.call(W)},X=()=>{j?.(`${y??ee}`)},re=A&&!r.disabled&&(y??ee);return F.createElement("div",{onKeyDown:Z=>{var W;Z.key==="Escape"&&(!((W=$.current)===null||W===void 0)&&W.value&&Z.preventDefault(),M({trigger:"Escape",event:Z}))},className:C(c,"navds-form-field",`navds-form-field--${t}`,"navds-search",{"navds-search--error":f,"navds-search--disabled":r.disabled,"navds-search--with-size":I}),"data-color":G},F.createElement(pt,{htmlFor:r.id,size:t,className:C("navds-form-field__label",{"navds-sr-only":m})},v),!!p&&F.createElement(cr,{className:C("navds-form-field__description",{"navds-sr-only":m}),id:s,size:t,as:"div"},p),F.createElement("div",{className:C("navds-search__wrapper")},F.createElement("div",{className:C("navds-search__wrapper-inner")},w==="simple"&&F.createElement(gc,{"aria-hidden":!0,className:C("navds-search__search-icon")}),F.createElement("input",Object.assign({ref:ne},mr(D,["error","errorId","size","readOnly"]),r,{value:y??ee,onChange:Z=>q(Z.target.value),type:"search",className:C(c,"navds-search__input",`navds-search__input--${w}`,"navds-text-field__input","navds-body-short",`navds-body-short--${t}`)},I?{size:Number(I)}:{})),re&&F.createElement(l5,{handleClear:M,size:t,clearButtonLabel:k})),F.createElement(Dc.Provider,{value:{size:t,disabled:r.disabled,variant:w,handleClick:X}},_||w!=="simple"&&F.createElement(jc,{"data-color":G}))),F.createElement("div",{className:C("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},u&&F.createElement(as,{size:t,showIcon:!0},e.error)))});function l5({size:e,clearButtonLabel:i,handleClear:r}){const{cn:t}=Oe(),s=Ia(!1),o=Et("Search");return s?F.createElement(us,{className:t("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:F.createElement(Jl,{"aria-hidden":!0}),title:i||o("clear"),onClick:u=>r({trigger:"Click",event:u}),type:"button"}):F.createElement("button",{type:"button",onClick:u=>r({trigger:"Click",event:u}),className:t("navds-search__button-clear")},F.createElement("span",{className:t("navds-sr-only")},i||o("clear")),F.createElement(Jl,{"aria-hidden":!0}))}to.Button=jc;var o5=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Zf=(e,i,r)=>{const{outerHeightStyle:t,overflow:s}=i;return r.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==s)?(r.current+=1,i):e},Jf=e=>(e?.ownerDocument||document).defaultView||window;function qi(e){return parseInt(e,10)||0}const u5=T.forwardRef((e,i)=>{var r,t,{className:s,onChange:o,maxRows:u,minRows:f=1,autoScrollbar:c,style:m,value:v}=e,p=o5(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:y}=T.useRef(v!=null),k=T.useRef(null),N=To(k,i),A=T.useRef(null),_=T.useRef(0),[w,S]=T.useState({outerHeightStyle:0}),R=F.useCallback(()=>{const D=k.current,$=Jf(D).getComputedStyle(D);if($.width==="0px")return{outerHeightStyle:0};const ne=A.current;ne.style.width=$.width,ne.value=D.value||p.placeholder||"x",ne.value.slice(-1)===`
`&&(ne.value+=" ");const ee=$.boxSizing,K=qi($.paddingBottom)+qi($.paddingTop),q=qi($.borderBottomWidth)+qi($.borderTopWidth),M=ne.scrollHeight-K;ne.value="x";const X=ne.scrollHeight-K;let re=M;f&&(re=Math.max(Number(f)*X,re)),u&&(re=Math.min(Number(u)*X,re)),re=Math.max(re,X);const Z=re+(ee==="border-box"?K+q:0),W=Math.abs(re-M)<=1;return{outerHeightStyle:Z,overflow:W}},[u,f,p.placeholder]),j=()=>{const D=R();Qf(D)||S(C=>Zf(C,D,_))};Of(()=>{const D=()=>{const K=R();Qf(K)||Zl.flushSync(()=>{S(q=>Zf(q,K,_))})},C=dc(()=>{var K,q,M;if(_.current=0,!((K=k.current)===null||K===void 0)&&K.style.height||!((q=k.current)===null||q===void 0)&&q.style.width){((M=k.current)===null||M===void 0?void 0:M.style.overflow)==="hidden"&&S(X=>Object.assign(Object.assign({},X),{overflow:!1}));return}D()},166,!0),$=k.current,ne=Jf($);ne.addEventListener("resize",C);let ee;return typeof ResizeObserver<"u"&&(ee=new ResizeObserver(C),ee.observe($)),()=>{C.clear(),ne.removeEventListener("resize",C),ee&&ee.disconnect()}},[R]),Of(()=>{j()}),T.useEffect(()=>{_.current=0},[v]);const I=D=>{_.current=0,y||j(),o&&o(D)},G=Object.assign({"--__ac-textarea-height":w.outerHeightStyle+"px","--__axc-textarea-height":w.outerHeightStyle+"px",overflow:w.overflow&&!c&&!(!((r=k.current)===null||r===void 0)&&r.style.height)&&!(!((t=k.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},m);return F.createElement(F.Fragment,null,F.createElement("textarea",Object.assign({value:v,onChange:I,ref:N,rows:f,style:G},p,{className:s})),F.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:A,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},m)}))});function Qf(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const d5=({maxLengthId:e,maxLength:i,currentLength:r,size:t,i18n:s})=>{const{cn:o}=Oe(),u=Et("Textarea",{charsLeft:s?.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s?.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),f=i-r,[c,m]=T.useState(f);return T.useEffect(()=>{const v=dc(()=>{m(f)},2e3);return v(),()=>{v.clear()}},[f]),F.createElement(F.Fragment,null,F.createElement("span",{id:e,className:o("navds-sr-only")},u("maxLength",{maxLength:i})),f<20&&F.createElement("span",{role:"status",className:o("navds-textarea__sr-counter navds-sr-only")},eg(c,u)),F.createElement(cr,{className:o("navds-textarea__counter",{"navds-textarea__counter--error":f<0}),size:t},eg(f,u)))},eg=(e,i)=>e<0?i("charsTooMany",{chars:Math.abs(e)}):i("charsLeft",{chars:e});var f5=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const g5=T.forwardRef((e,i)=>{var r,t,s;const{inputProps:o,errorId:u,showErrorMsg:f,hasError:c,size:m,inputDescriptionId:v}=ds(e,"textarea"),{label:p,className:y,description:k,maxLength:N,hideLabel:A=!1,resize:_,UNSAFE_autoScrollbar:w,i18n:S,readOnly:R}=e,j=f5(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:I}=Oe(),G=Na(),D=N!==void 0&&N>0,[C,$]=T.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),ne=()=>{let K=j?.minRows?j?.minRows:3;return m==="small"&&(K=j?.minRows?j?.minRows:2),K},ee=Sa(o["aria-describedby"],{[G??""]:D});return F.createElement("div",{className:I(y,"navds-form-field",`navds-form-field--${m}`,{"navds-form-field--disabled":!!o.disabled,"navds-form-field--readonly":R,"navds-textarea--readonly":R,"navds-textarea--error":c,"navds-textarea--autoscrollbar":w,[`navds-textarea--resize-${_===!0?"both":_}`]:_})},F.createElement(pt,{htmlFor:o.id,size:m,className:I("navds-form-field__label",{"navds-sr-only":A})},R&&F.createElement(Oc,null),p),!!k&&F.createElement(cr,{className:I("navds-form-field__description",{"navds-sr-only":A}),id:v,size:m,as:"div"},k),F.createElement(u5,Object.assign({},mr(j,["error","errorId","size"]),o,{onChange:xa(e.onChange,e.value===void 0?K=>$(K.target.value):void 0),minRows:ne(),autoScrollbar:w,ref:i,readOnly:R,className:I("navds-textarea__input","navds-body-short",`navds-body-short--${m??"medium"}`)},ee?{"aria-describedby":ee}:{})),D&&!R&&!o.disabled&&F.createElement(d5,{maxLengthId:G,maxLength:N,currentLength:(s=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:C.length,size:m,i18n:S}),F.createElement("div",{className:I("navds-form-field__error"),id:u,"aria-relevant":"additions removals","aria-live":"polite"},f&&F.createElement(as,{size:m,showIcon:!0},e.error)))});function c5(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ng={exports:{}},ba={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function m5(){if(rg)return ba;rg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,o){var u=null;if(o!==void 0&&(u=""+o),s.key!==void 0&&(u=""+s.key),"key"in s){o={};for(var f in s)f!=="key"&&(o[f]=s[f])}else o=s;return s=o.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:o}}return ba.Fragment=i,ba.jsx=r,ba.jsxs=r,ba}var tg;function v5(){return tg||(tg=1,ng.exports=m5()),ng.exports}var Pr=v5();const h5=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Pr.jsx(MA,{variant:"warning",size:"small",children:Pr.jsx(_t,{gap:"space-8",children:F.Children.map(e,i=>Pr.jsx(cr,{size:"small",children:i},f_(i)?i.key:i))})}),qa={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};vr(qa);var ag={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ig;function b5(){return ig||(ig=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",u=0;u<arguments.length;u++){var f=arguments[u];f&&(o=s(o,t.call(this,f)))}return o}function t(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var u="";for(var f in o)i.call(o,f)&&o[f]&&(u=s(u,this&&this[f]||f));return u}function s(o,u){return u?o?o+" "+u:o+u:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ag)),ag.exports}var p5=b5();const Do=c5(p5),y5="_borderbox_1a0x6_1",k5="_error_1a0x6_5",_5="_warning_1a0x6_8",A5={borderbox:y5,error:k5,warning:_5},E5=Do.bind(A5),sg=({error:e=!1,className:i,children:r})=>Pr.jsx(Ic.New,{padding:"4",className:E5("borderbox",{error:e},i),children:r}),T5="_aksjonspunkt_11wjs_1",P5="_erAksjonspunktApent_11wjs_4",w5="_erIkkeGodkjentAvBeslutter_11wjs_8",R5={aksjonspunkt:T5,erAksjonspunktApent:P5,erIkkeGodkjentAvBeslutter:w5};Do.bind(R5);vr(qa);vr(qa);const O5="_divider_1jpov_1",S5="_dividerParagraf_1jpov_8",I5="_leftPanel_1jpov_11",N5="_rightPanel_1jpov_14",x5={divider:O5,dividerParagraf:S5,leftPanel:I5,rightPanel:N5};Do.bind(x5);const F5=()=>Pr.jsx("span",{"data-testid":"editedIcon",children:Pr.jsx(z_,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});vr(qa);const L5=vr(qa),B5=({tekst:e,children:i})=>{const[r,t]=T.useState(!1);if(!e)return i;const s=async()=>{await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>{t(!1)},1e3)};return Pr.jsx(ZE,{content:L5.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Pr.jsx("span",{"aria-hidden":"true",onClick:s,children:i??e})})},lg={default:"_default_af3od_1",rød:"_rød_af3od_5"},Oa=({beløp:e,kr:i=!1,rød:r=!1})=>{const t=e?.toString().replace(/\s/g,"");return Pr.jsx(B5,{tekst:t,children:Pr.jsxs("span",{className:r?lg.rød:lg.default,children:[t?g_(t):"-",t&&i&&" kr"]})})},q5=e=>!!e||e===0,og=e=>e??0,M5=e=>q5(e.overstyrtPrAar)?og(e.overstyrtPrAar):og(e.beregnetPrAar),jl=e=>(e.beregningsgrunnlagPrStatusOgAndel||[]).map(r=>M5(r)).reduce((r,t)=>r+t,0),Cl=e=>e.flatMap(i=>i.inntekter).map(({inntekt:i})=>i).reduce((i,r)=>i+r,0)*2,ug=(e,i)=>e>i,Cc=({periode:e,besteMåneder:i})=>ie.jsxs(_t,{gap:"space-16",children:[ie.jsxs(De,{children:[ie.jsx(De.Header,{children:ie.jsxs(De.Row,{children:[ie.jsx(De.HeaderCell,{scope:"col"}),ie.jsx(De.HeaderCell,{scope:"col",children:ie.jsx(Bn,{id:"ResultatGrunnlag.BeregningEtterKap8"})}),ie.jsx(De.HeaderCell,{scope:"col",children:ie.jsx(Bn,{id:"ResultatGrunnlag.BeregningEtterBesteberegning"})})]})}),ie.jsx(De.Body,{children:ie.jsxs(De.Row,{children:[ie.jsx(De.DataCell,{textSize:"small",children:ie.jsx(Bn,{id:"ResultatGrunnlag.BruttoBeregningsgrunnlag"})}),ie.jsx(De.DataCell,{textSize:"small",children:ie.jsx(Oa,{beløp:jl(e)})}),ie.jsx(De.DataCell,{textSize:"small",children:ie.jsx(Oa,{beløp:Cl(i)})})]})})]}),ie.jsxs(cr,{size:"small",children:[ug(jl(e),Cl(i))&&ie.jsx(Bn,{id:"ResultatGrunnlag.Kap8GirBesteBeregning"}),!ug(jl(e),Cl(i))&&ie.jsx(Bn,{id:"ResultatGrunnlag.Kap1473GirBesteBeregning"})]})]});Cc.__docgenInfo={description:`BesteberegningResultatGrunnlagPanel

Presentasjonskomponent. Viser sammenligning av kap 8 beregning og §14-7, ledd 3 beregning.`,methods:[],displayName:"BesteberegningResultatGrunnlagPanel",props:{periode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!1}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!1}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`},description:""},besteMåneder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: OpptjeningAktivitetType;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: OpptjeningAktivitetType;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]"},description:""}}};const D5="_colWidth_horwr_1",Ui={colWidth:D5,månedRad:"_månedRad_horwr_6",månedAktivitet:"_månedAktivitet_horwr_10",månedInntekt:"_månedInntekt_horwr_14"},j5=e=>{const i=Gr(e).format("MMMM - YYYY");return i.charAt(0).toUpperCase()+i.slice(1)},C5=(e,i,r)=>{const t=e.arbeidsgiverId?i[e.arbeidsgiverId]:void 0;return t?c_(t):r.OpptjeningAktivitetType.find(s=>s.kode===e.opptjeningAktivitetType)?.navn??""},V5=({inntekt:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>ie.jsxs(De.Row,{className:Ui.månedRad,children:[ie.jsx(De.DataCell,{textSize:"small",className:Ui.månedAktivitet,children:C5(e,i,r)}),ie.jsx(De.DataCell,{textSize:"small",className:Ui.månedInntekt,children:ie.jsx(Oa,{beløp:e.inntekt})})]}),G5=({inntekter:e})=>ie.jsxs(De.Row,{children:[ie.jsx(De.HeaderCell,{textSize:"small",children:ie.jsx(Bn,{id:"Inntekttabell.Sum"})}),ie.jsx(De.HeaderCell,{textSize:"small",children:ie.jsx(Oa,{beløp:e.map(({inntekt:i})=>i).reduce((i,r)=>i+r,0)})})]},"sum"),K5=({inntekter:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>ie.jsxs(De,{children:[ie.jsx(De.Header,{children:ie.jsxs(De.Row,{children:[ie.jsx(De.HeaderCell,{scope:"col",children:ie.jsx(Bn,{id:"BesteberegningProsessPanel.Måned.Inntekt.Aktivitet"})}),ie.jsx(De.HeaderCell,{scope:"col",children:ie.jsx(Bn,{id:"BesteberegningProsessPanel.Måned.Inntekt.Inntekt"})})]})}),ie.jsxs(De.Body,{children:[e.map(t=>ie.jsx(V5,{inntekt:t,arbeidsgiverOpplysninger:i,alleKodeverk:r},`${t.arbeidsforholdId}-${t.arbeidsgiverId}-${t.inntekt}`)),e.length>0&&ie.jsx(G5,{inntekter:e})]})]}),Vl=({måneder:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>ie.jsx(Mo,{gap:"space-8",children:e.map(t=>ie.jsxs("div",{className:Ui.colWidth,children:[ie.jsx(cr,{size:"small",children:j5(t.fom)}),ie.jsx(K5,{inntekter:t.inntekter,arbeidsgiverOpplysninger:i,alleKodeverk:r})]},t.fom))}),U5=e=>e.flatMap(r=>r.inntekter).map(({inntekt:r})=>r).reduce((r,t)=>r+t,0)/6*12,H5=e=>[...e].sort((i,r)=>Gr(i.fom).diff(Gr(r.fom))),Vc=({besteMåneder:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>{const t=H5(e);return ie.jsxs(_t,{gap:"space-16",children:[ie.jsxs(pt,{size:"small",children:[ie.jsx(Bn,{id:"Inntekttabell.Tittel"})," "]}),ie.jsx(Vl,{måneder:t.slice(0,2),arbeidsgiverOpplysninger:i,alleKodeverk:r}),ie.jsx(Vl,{måneder:t.slice(2,4),arbeidsgiverOpplysninger:i,alleKodeverk:r}),ie.jsx(Vl,{måneder:t.slice(4,6),arbeidsgiverOpplysninger:i,alleKodeverk:r}),ie.jsx(pt,{size:"small",children:ie.jsx(Bn,{id:"Inntekttabell.BeregnetÅrsinntekt",values:{inntekt:ie.jsx(Oa,{beløp:U5(e)})}})})]})};Vc.__docgenInfo={description:`BesteManederVisningPanel

Presentasjonskomponent. Viser månedene som brukes i beregning etter §14-7, tredje ledd`,methods:[],displayName:"BesteMånederVisningPanel",props:{besteMåneder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: OpptjeningAktivitetType;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: OpptjeningAktivitetType;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]"},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};var Ma=e=>e.type==="checkbox",ht=e=>e instanceof Date,wn=e=>e==null;const Gc=e=>typeof e=="object";var sn=e=>!wn(e)&&!Array.isArray(e)&&Gc(e)&&!ht(e),Kc=e=>sn(e)&&e.target?Ma(e.target)?e.target.checked:e.target.value:e,$5=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Uc=(e,i)=>e.has($5(i)),Y5=e=>{const i=e.constructor&&e.constructor.prototype;return sn(i)&&i.hasOwnProperty("isPrototypeOf")},jo=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function gn(e){let i;const r=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)i=new Date(e);else if(!(jo&&(e instanceof Blob||t))&&(r||sn(e)))if(i=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!Y5(e))i=e;else for(const s in e)e.hasOwnProperty(s)&&(i[s]=gn(e[s]));else return e;return i}var fs=e=>/^\w*$/.test(e),an=e=>e===void 0,Co=e=>Array.isArray(e)?e.filter(Boolean):[],Vo=e=>Co(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ue=(e,i,r)=>{if(!i||!sn(e))return r;const t=(fs(i)?[i]:Vo(i)).reduce((s,o)=>wn(s)?s:s[o],e);return an(t)||t===e?an(e[i])?r:e[i]:t},Kn=e=>typeof e=="boolean",He=(e,i,r)=>{let t=-1;const s=fs(i)?[i]:Vo(i),o=s.length,u=o-1;for(;++t<o;){const f=s[t];let c=r;if(t!==u){const m=e[f];c=sn(m)||Array.isArray(m)?m:isNaN(+s[t+1])?{}:[]}if(f==="__proto__"||f==="constructor"||f==="prototype")return;e[f]=c,e=e[f]}};const es={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},fr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Mr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Go=F.createContext(null);Go.displayName="HookFormContext";const Da=()=>F.useContext(Go),W5=e=>{const{children:i,...r}=e;return F.createElement(Go.Provider,{value:r},i)};var Hc=(e,i,r,t=!0)=>{const s={defaultValues:i._defaultValues};for(const o in e)Object.defineProperty(s,o,{get:()=>{const u=o;return i._proxyFormState[u]!==fr.all&&(i._proxyFormState[u]=!t||fr.all),r&&(r[u]=!0),e[u]}});return s};const Ko=typeof window<"u"?F.useLayoutEffect:F.useEffect;function z5(e){const i=Da(),{control:r=i.control,disabled:t,name:s,exact:o}=e||{},[u,f]=F.useState(r._formState),c=F.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Ko(()=>r._subscribe({name:s,formState:c.current,exact:o,callback:m=>{!t&&f({...r._formState,...m})}}),[s,t,o]),F.useEffect(()=>{c.current.isValid&&r._setValid(!0)},[r]),F.useMemo(()=>Hc(u,r,c.current,!1),[u,r])}var Er=e=>typeof e=="string",$c=(e,i,r,t,s)=>Er(e)?(t&&i.watch.add(e),ue(r,e,s)):Array.isArray(e)?e.map(o=>(t&&i.watch.add(o),ue(r,o))):(t&&(i.watchAll=!0),r),ao=e=>wn(e)||!Gc(e);function jr(e,i,r=new WeakSet){if(ao(e)||ao(i))return e===i;if(ht(e)&&ht(i))return e.getTime()===i.getTime();const t=Object.keys(e),s=Object.keys(i);if(t.length!==s.length)return!1;if(r.has(e)||r.has(i))return!0;r.add(e),r.add(i);for(const o of t){const u=e[o];if(!s.includes(o))return!1;if(o!=="ref"){const f=i[o];if(ht(u)&&ht(f)||sn(u)&&sn(f)||Array.isArray(u)&&Array.isArray(f)?!jr(u,f,r):u!==f)return!1}}return!0}function X5(e){const i=Da(),{control:r=i.control,name:t,defaultValue:s,disabled:o,exact:u,compute:f}=e||{},c=F.useRef(s),m=F.useRef(f),v=F.useRef(void 0);m.current=f;const p=F.useMemo(()=>r._getWatch(t,c.current),[r,t]),[y,k]=F.useState(m.current?m.current(p):p);return Ko(()=>r._subscribe({name:t,formState:{values:!0},exact:u,callback:N=>{if(!o){const A=$c(t,r._names,N.values||r._formValues,!1,c.current);if(m.current){const _=m.current(A);jr(_,v.current)||(k(_),v.current=_)}else k(A)}}}),[r,o,t,u]),F.useEffect(()=>r._removeUnmounted()),y}function Yc(e){const i=Da(),{name:r,disabled:t,control:s=i.control,shouldUnregister:o,defaultValue:u}=e,f=Uc(s._names.array,r),c=F.useMemo(()=>ue(s._formValues,r,ue(s._defaultValues,r,u)),[s,r,u]),m=X5({control:s,name:r,defaultValue:c,exact:!0}),v=z5({control:s,name:r,exact:!0}),p=F.useRef(e),y=F.useRef(s.register(r,{...e.rules,value:m,...Kn(e.disabled)?{disabled:e.disabled}:{}}));p.current=e;const k=F.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!ue(v.errors,r)},isDirty:{enumerable:!0,get:()=>!!ue(v.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!ue(v.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!ue(v.validatingFields,r)},error:{enumerable:!0,get:()=>ue(v.errors,r)}}),[v,r]),N=F.useCallback(S=>y.current.onChange({target:{value:Kc(S),name:r},type:es.CHANGE}),[r]),A=F.useCallback(()=>y.current.onBlur({target:{value:ue(s._formValues,r),name:r},type:es.BLUR}),[r,s._formValues]),_=F.useCallback(S=>{const R=ue(s._fields,r);R&&S&&(R._f.ref={focus:()=>S.focus&&S.focus(),select:()=>S.select&&S.select(),setCustomValidity:j=>S.setCustomValidity(j),reportValidity:()=>S.reportValidity()})},[s._fields,r]),w=F.useMemo(()=>({name:r,value:m,...Kn(t)||v.disabled?{disabled:v.disabled||t}:{},onChange:N,onBlur:A,ref:_}),[r,t,v.disabled,N,A,_,m]);return F.useEffect(()=>{const S=s._options.shouldUnregister||o;s.register(r,{...p.current.rules,...Kn(p.current.disabled)?{disabled:p.current.disabled}:{}});const R=(j,I)=>{const G=ue(s._fields,j);G&&G._f&&(G._f.mount=I)};if(R(r,!0),S){const j=gn(ue(s._options.defaultValues,r));He(s._defaultValues,r,j),an(ue(s._formValues,r))&&He(s._formValues,r,j)}return!f&&s.register(r),()=>{(f?S&&!s._state.action:S)?s.unregister(r):R(r,!1)}},[r,s,f,o]),F.useEffect(()=>{s._setDisabledField({disabled:t,name:r})},[t,r,s]),F.useMemo(()=>({field:w,formState:v,fieldState:k}),[w,v,k])}var Z5=(e,i,r,t,s)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:s||!0}}:{},Pa=e=>Array.isArray(e)?e:[e],dg=()=>{let e=[];return{get observers(){return e},next:s=>{for(const o of e)o.next&&o.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(o=>o!==s)}}),unsubscribe:()=>{e=[]}}},Ln=e=>sn(e)&&!Object.keys(e).length,Uo=e=>e.type==="file",gr=e=>typeof e=="function",ns=e=>{if(!jo)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},Wc=e=>e.type==="select-multiple",Ho=e=>e.type==="radio",J5=e=>Ho(e)||Ma(e),Gl=e=>ns(e)&&e.isConnected;function Q5(e,i){const r=i.slice(0,-1).length;let t=0;for(;t<r;)e=an(e)?t++:e[i[t++]];return e}function eT(e){for(const i in e)if(e.hasOwnProperty(i)&&!an(e[i]))return!1;return!0}function on(e,i){const r=Array.isArray(i)?i:fs(i)?[i]:Vo(i),t=r.length===1?e:Q5(e,r),s=r.length-1,o=r[s];return t&&delete t[o],s!==0&&(sn(t)&&Ln(t)||Array.isArray(t)&&eT(t))&&on(e,r.slice(0,-1)),e}var zc=e=>{for(const i in e)if(gr(e[i]))return!0;return!1};function rs(e,i={}){const r=Array.isArray(e);if(sn(e)||r)for(const t in e)Array.isArray(e[t])||sn(e[t])&&!zc(e[t])?(i[t]=Array.isArray(e[t])?[]:{},rs(e[t],i[t])):wn(e[t])||(i[t]=!0);return i}function Xc(e,i,r){const t=Array.isArray(e);if(sn(e)||t)for(const s in e)Array.isArray(e[s])||sn(e[s])&&!zc(e[s])?an(i)||ao(r[s])?r[s]=Array.isArray(e[s])?rs(e[s],[]):{...rs(e[s])}:Xc(e[s],wn(i)?{}:i[s],r[s]):r[s]=!jr(e[s],i[s]);return r}var pa=(e,i)=>Xc(e,i,rs(i));const fg={value:!1,isValid:!1},gg={value:!0,isValid:!0};var Zc=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!an(e[0].attributes.value)?an(e[0].value)||e[0].value===""?gg:{value:e[0].value,isValid:!0}:gg:fg}return fg},Jc=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:t})=>an(e)?e:i?e===""?NaN:e&&+e:r&&Er(e)?new Date(e):t?t(e):e;const cg={isValid:!1,value:null};var Qc=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,cg):cg;function mg(e){const i=e.ref;return Uo(i)?i.files:Ho(i)?Qc(e.refs).value:Wc(i)?[...i.selectedOptions].map(({value:r})=>r):Ma(i)?Zc(e.refs).value:Jc(an(i.value)?e.ref.value:i.value,e)}var nT=(e,i,r,t)=>{const s={};for(const o of e){const u=ue(i,o);u&&He(s,o,u._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:t}},ts=e=>e instanceof RegExp,ya=e=>an(e)?e:ts(e)?e.source:sn(e)?ts(e.value)?e.value.source:e.value:e,vg=e=>({isOnSubmit:!e||e===fr.onSubmit,isOnBlur:e===fr.onBlur,isOnChange:e===fr.onChange,isOnAll:e===fr.all,isOnTouch:e===fr.onTouched});const hg="AsyncFunction";var rT=e=>!!e&&!!e.validate&&!!(gr(e.validate)&&e.validate.constructor.name===hg||sn(e.validate)&&Object.values(e.validate).find(i=>i.constructor.name===hg)),tT=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),bg=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const wa=(e,i,r,t)=>{for(const s of r||Object.keys(e)){const o=ue(e,s);if(o){const{_f:u,...f}=o;if(u){if(u.refs&&u.refs[0]&&i(u.refs[0],s)&&!t)return!0;if(u.ref&&i(u.ref,u.name)&&!t)return!0;if(wa(f,i))break}else if(sn(f)&&wa(f,i))break}}};function pg(e,i,r){const t=ue(e,r);if(t||fs(r))return{error:t,name:r};const s=r.split(".");for(;s.length;){const o=s.join("."),u=ue(i,o),f=ue(e,o);if(u&&!Array.isArray(u)&&r!==o)return{name:r};if(f&&f.type)return{name:o,error:f};if(f&&f.root&&f.root.type)return{name:`${o}.root`,error:f.root};s.pop()}return{name:r}}var aT=(e,i,r,t)=>{r(e);const{name:s,...o}=e;return Ln(o)||Object.keys(o).length>=Object.keys(i).length||Object.keys(o).find(u=>i[u]===(!t||fr.all))},iT=(e,i,r)=>!e||!i||e===i||Pa(e).some(t=>t&&(r?t===i:t.startsWith(i)||i.startsWith(t))),sT=(e,i,r,t,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(i||e):(r?t.isOnBlur:s.isOnBlur)?!e:(r?t.isOnChange:s.isOnChange)?e:!0,lT=(e,i)=>!Co(ue(e,i)).length&&on(e,i),oT=(e,i,r)=>{const t=Pa(ue(e,r));return He(t,"root",i[r]),He(e,r,t),e},Hi=e=>Er(e);function yg(e,i,r="validate"){if(Hi(e)||Array.isArray(e)&&e.every(Hi)||Kn(e)&&!e)return{type:r,message:Hi(e)?e:"",ref:i}}var jt=e=>sn(e)&&!ts(e)?e:{value:e,message:""},kg=async(e,i,r,t,s,o)=>{const{ref:u,refs:f,required:c,maxLength:m,minLength:v,min:p,max:y,pattern:k,validate:N,name:A,valueAsNumber:_,mount:w}=e._f,S=ue(r,A);if(!w||i.has(A))return{};const R=f?f[0]:u,j=K=>{s&&R.reportValidity&&(R.setCustomValidity(Kn(K)?"":K||""),R.reportValidity())},I={},G=Ho(u),D=Ma(u),C=G||D,$=(_||Uo(u))&&an(u.value)&&an(S)||ns(u)&&u.value===""||S===""||Array.isArray(S)&&!S.length,ne=Z5.bind(null,A,t,I),ee=(K,q,M,X=Mr.maxLength,re=Mr.minLength)=>{const Z=K?q:M;I[A]={type:K?X:re,message:Z,ref:u,...ne(K?X:re,Z)}};if(o?!Array.isArray(S)||!S.length:c&&(!C&&($||wn(S))||Kn(S)&&!S||D&&!Zc(f).isValid||G&&!Qc(f).isValid)){const{value:K,message:q}=Hi(c)?{value:!!c,message:c}:jt(c);if(K&&(I[A]={type:Mr.required,message:q,ref:R,...ne(Mr.required,q)},!t))return j(q),I}if(!$&&(!wn(p)||!wn(y))){let K,q;const M=jt(y),X=jt(p);if(!wn(S)&&!isNaN(S)){const re=u.valueAsNumber||S&&+S;wn(M.value)||(K=re>M.value),wn(X.value)||(q=re<X.value)}else{const re=u.valueAsDate||new Date(S),Z=de=>new Date(new Date().toDateString()+" "+de),W=u.type=="time",J=u.type=="week";Er(M.value)&&S&&(K=W?Z(S)>Z(M.value):J?S>M.value:re>new Date(M.value)),Er(X.value)&&S&&(q=W?Z(S)<Z(X.value):J?S<X.value:re<new Date(X.value))}if((K||q)&&(ee(!!K,M.message,X.message,Mr.max,Mr.min),!t))return j(I[A].message),I}if((m||v)&&!$&&(Er(S)||o&&Array.isArray(S))){const K=jt(m),q=jt(v),M=!wn(K.value)&&S.length>+K.value,X=!wn(q.value)&&S.length<+q.value;if((M||X)&&(ee(M,K.message,q.message),!t))return j(I[A].message),I}if(k&&!$&&Er(S)){const{value:K,message:q}=jt(k);if(ts(K)&&!S.match(K)&&(I[A]={type:Mr.pattern,message:q,ref:u,...ne(Mr.pattern,q)},!t))return j(q),I}if(N){if(gr(N)){const K=await N(S,r),q=yg(K,R);if(q&&(I[A]={...q,...ne(Mr.validate,q.message)},!t))return j(q.message),I}else if(sn(N)){let K={};for(const q in N){if(!Ln(K)&&!t)break;const M=yg(await N[q](S,r),R,q);M&&(K={...M,...ne(q,M.message)},j(M.message),t&&(I[A]=K))}if(!Ln(K)&&(I[A]={ref:R,...K},!t))return I}}return j(!0),I};const uT={mode:fr.onSubmit,reValidateMode:fr.onChange,shouldFocusError:!0};function dT(e={}){let i={...uT,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:gr(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:i.errors||{},disabled:i.disabled||!1},t={},s=sn(i.defaultValues)||sn(i.values)?gn(i.defaultValues||i.values)||{}:{},o=i.shouldUnregister?{}:gn(s),u={action:!1,mount:!1,watch:!1},f={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,m=0;const v={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let p={...v};const y={array:dg(),state:dg()},k=i.criteriaMode===fr.all,N=P=>B=>{clearTimeout(m),m=setTimeout(P,B)},A=async P=>{if(!i.disabled&&(v.isValid||p.isValid||P)){const B=i.resolver?Ln((await D()).errors):await $(t,!0);B!==r.isValid&&y.state.next({isValid:B})}},_=(P,B)=>{!i.disabled&&(v.isValidating||v.validatingFields||p.isValidating||p.validatingFields)&&((P||Array.from(f.mount)).forEach(U=>{U&&(B?He(r.validatingFields,U,B):on(r.validatingFields,U))}),y.state.next({validatingFields:r.validatingFields,isValidating:!Ln(r.validatingFields)}))},w=(P,B=[],U,le,ae=!0,te=!0)=>{if(le&&U&&!i.disabled){if(u.action=!0,te&&Array.isArray(ue(t,P))){const me=U(ue(t,P),le.argA,le.argB);ae&&He(t,P,me)}if(te&&Array.isArray(ue(r.errors,P))){const me=U(ue(r.errors,P),le.argA,le.argB);ae&&He(r.errors,P,me),lT(r.errors,P)}if((v.touchedFields||p.touchedFields)&&te&&Array.isArray(ue(r.touchedFields,P))){const me=U(ue(r.touchedFields,P),le.argA,le.argB);ae&&He(r.touchedFields,P,me)}(v.dirtyFields||p.dirtyFields)&&(r.dirtyFields=pa(s,o)),y.state.next({name:P,isDirty:ee(P,B),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else He(o,P,B)},S=(P,B)=>{He(r.errors,P,B),y.state.next({errors:r.errors})},R=P=>{r.errors=P,y.state.next({errors:r.errors,isValid:!1})},j=(P,B,U,le)=>{const ae=ue(t,P);if(ae){const te=ue(o,P,an(U)?ue(s,P):U);an(te)||le&&le.defaultChecked||B?He(o,P,B?te:mg(ae._f)):M(P,te),u.mount&&A()}},I=(P,B,U,le,ae)=>{let te=!1,me=!1;const Se={name:P};if(!i.disabled){if(!U||le){(v.isDirty||p.isDirty)&&(me=r.isDirty,r.isDirty=Se.isDirty=ee(),te=me!==Se.isDirty);const Le=jr(ue(s,P),B);me=!!ue(r.dirtyFields,P),Le?on(r.dirtyFields,P):He(r.dirtyFields,P,!0),Se.dirtyFields=r.dirtyFields,te=te||(v.dirtyFields||p.dirtyFields)&&me!==!Le}if(U){const Le=ue(r.touchedFields,P);Le||(He(r.touchedFields,P,U),Se.touchedFields=r.touchedFields,te=te||(v.touchedFields||p.touchedFields)&&Le!==U)}te&&ae&&y.state.next(Se)}return te?Se:{}},G=(P,B,U,le)=>{const ae=ue(r.errors,P),te=(v.isValid||p.isValid)&&Kn(B)&&r.isValid!==B;if(i.delayError&&U?(c=N(()=>S(P,U)),c(i.delayError)):(clearTimeout(m),c=null,U?He(r.errors,P,U):on(r.errors,P)),(U?!jr(ae,U):ae)||!Ln(le)||te){const me={...le,...te&&Kn(B)?{isValid:B}:{},errors:r.errors,name:P};r={...r,...me},y.state.next(me)}},D=async P=>{_(P,!0);const B=await i.resolver(o,i.context,nT(P||f.mount,t,i.criteriaMode,i.shouldUseNativeValidation));return _(P),B},C=async P=>{const{errors:B}=await D(P);if(P)for(const U of P){const le=ue(B,U);le?He(r.errors,U,le):on(r.errors,U)}else r.errors=B;return B},$=async(P,B,U={valid:!0})=>{for(const le in P){const ae=P[le];if(ae){const{_f:te,...me}=ae;if(te){const Se=f.array.has(te.name),Le=ae._f&&rT(ae._f);Le&&v.validatingFields&&_([le],!0);const bn=await kg(ae,f.disabled,o,k,i.shouldUseNativeValidation&&!B,Se);if(Le&&v.validatingFields&&_([le]),bn[te.name]&&(U.valid=!1,B))break;!B&&(ue(bn,te.name)?Se?oT(r.errors,bn,te.name):He(r.errors,te.name,bn[te.name]):on(r.errors,te.name))}!Ln(me)&&await $(me,B,U)}}return U.valid},ne=()=>{for(const P of f.unMount){const B=ue(t,P);B&&(B._f.refs?B._f.refs.every(U=>!Gl(U)):!Gl(B._f.ref))&&Ge(P)}f.unMount=new Set},ee=(P,B)=>!i.disabled&&(P&&B&&He(o,P,B),!jr(de(),s)),K=(P,B,U)=>$c(P,f,{...u.mount?o:an(B)?s:Er(P)?{[P]:B}:B},U,B),q=P=>Co(ue(u.mount?o:s,P,i.shouldUnregister?ue(s,P,[]):[])),M=(P,B,U={})=>{const le=ue(t,P);let ae=B;if(le){const te=le._f;te&&(!te.disabled&&He(o,P,Jc(B,te)),ae=ns(te.ref)&&wn(B)?"":B,Wc(te.ref)?[...te.ref.options].forEach(me=>me.selected=ae.includes(me.value)):te.refs?Ma(te.ref)?te.refs.forEach(me=>{(!me.defaultChecked||!me.disabled)&&(Array.isArray(ae)?me.checked=!!ae.find(Se=>Se===me.value):me.checked=ae===me.value||!!ae)}):te.refs.forEach(me=>me.checked=me.value===ae):Uo(te.ref)?te.ref.value="":(te.ref.value=ae,te.ref.type||y.state.next({name:P,values:gn(o)})))}(U.shouldDirty||U.shouldTouch)&&I(P,ae,U.shouldTouch,U.shouldDirty,!0),U.shouldValidate&&J(P)},X=(P,B,U)=>{for(const le in B){if(!B.hasOwnProperty(le))return;const ae=B[le],te=P+"."+le,me=ue(t,te);(f.array.has(P)||sn(ae)||me&&!me._f)&&!ht(ae)?X(te,ae,U):M(te,ae,U)}},re=(P,B,U={})=>{const le=ue(t,P),ae=f.array.has(P),te=gn(B);He(o,P,te),ae?(y.array.next({name:P,values:gn(o)}),(v.isDirty||v.dirtyFields||p.isDirty||p.dirtyFields)&&U.shouldDirty&&y.state.next({name:P,dirtyFields:pa(s,o),isDirty:ee(P,te)})):le&&!le._f&&!wn(te)?X(P,te,U):M(P,te,U),bg(P,f)&&y.state.next({...r,name:P}),y.state.next({name:u.mount?P:void 0,values:gn(o)})},Z=async P=>{u.mount=!0;const B=P.target;let U=B.name,le=!0;const ae=ue(t,U),te=Le=>{le=Number.isNaN(Le)||ht(Le)&&isNaN(Le.getTime())||jr(Le,ue(o,U,Le))},me=vg(i.mode),Se=vg(i.reValidateMode);if(ae){let Le,bn;const Ur=B.type?mg(ae._f):Kc(P),$n=P.type===es.BLUR||P.type===es.FOCUS_OUT,Zt=!tT(ae._f)&&!i.resolver&&!ue(r.errors,U)&&!ae._f.deps||sT($n,ue(r.touchedFields,U),r.isSubmitted,Se,me),tt=bg(U,f,$n);He(o,U,Ur),$n?(!B||!B.readOnly)&&(ae._f.onBlur&&ae._f.onBlur(P),c&&c(0)):ae._f.onChange&&ae._f.onChange(P);const at=I(U,Ur,$n),Jt=!Ln(at)||tt;if(!$n&&y.state.next({name:U,type:P.type,values:gn(o)}),Zt)return(v.isValid||p.isValid)&&(i.mode==="onBlur"?$n&&A():$n||A()),Jt&&y.state.next({name:U,...tt?{}:at});if(!$n&&tt&&y.state.next({...r}),i.resolver){const{errors:Tt}=await D([U]);if(te(Ur),le){const Qt=pg(r.errors,t,U),Ua=pg(Tt,t,Qt.name||U);Le=Ua.error,U=Ua.name,bn=Ln(Tt)}}else _([U],!0),Le=(await kg(ae,f.disabled,o,k,i.shouldUseNativeValidation))[U],_([U]),te(Ur),le&&(Le?bn=!1:(v.isValid||p.isValid)&&(bn=await $(t,!0)));le&&(ae._f.deps&&J(ae._f.deps),G(U,bn,Le,at))}},W=(P,B)=>{if(ue(r.errors,B)&&P.focus)return P.focus(),1},J=async(P,B={})=>{let U,le;const ae=Pa(P);if(i.resolver){const te=await C(an(P)?P:ae);U=Ln(te),le=P?!ae.some(me=>ue(te,me)):U}else P?(le=(await Promise.all(ae.map(async te=>{const me=ue(t,te);return await $(me&&me._f?{[te]:me}:me)}))).every(Boolean),!(!le&&!r.isValid)&&A()):le=U=await $(t);return y.state.next({...!Er(P)||(v.isValid||p.isValid)&&U!==r.isValid?{}:{name:P},...i.resolver||!P?{isValid:U}:{},errors:r.errors}),B.shouldFocus&&!le&&wa(t,W,P?ae:f.mount),le},de=P=>{const B={...u.mount?o:s};return an(P)?B:Er(P)?ue(B,P):P.map(U=>ue(B,U))},oe=(P,B)=>({invalid:!!ue((B||r).errors,P),isDirty:!!ue((B||r).dirtyFields,P),error:ue((B||r).errors,P),isValidating:!!ue(r.validatingFields,P),isTouched:!!ue((B||r).touchedFields,P)}),ve=P=>{P&&Pa(P).forEach(B=>on(r.errors,B)),y.state.next({errors:P?r.errors:{}})},_e=(P,B,U)=>{const le=(ue(t,P,{_f:{}})._f||{}).ref,ae=ue(r.errors,P)||{},{ref:te,message:me,type:Se,...Le}=ae;He(r.errors,P,{...Le,...B,ref:le}),y.state.next({name:P,errors:r.errors,isValid:!1}),U&&U.shouldFocus&&le&&le.focus&&le.focus()},_n=(P,B)=>gr(P)?y.state.subscribe({next:U=>"values"in U&&P(K(void 0,B),U)}):K(P,B,!0),Ye=P=>y.state.subscribe({next:B=>{iT(P.name,B.name,P.exact)&&aT(B,P.formState||v,un,P.reRenderRoot)&&P.callback({values:{...o},...r,...B,defaultValues:s})}}).unsubscribe,Ve=P=>(u.mount=!0,p={...p,...P.formState},Ye({...P,formState:p})),Ge=(P,B={})=>{for(const U of P?Pa(P):f.mount)f.mount.delete(U),f.array.delete(U),B.keepValue||(on(t,U),on(o,U)),!B.keepError&&on(r.errors,U),!B.keepDirty&&on(r.dirtyFields,U),!B.keepTouched&&on(r.touchedFields,U),!B.keepIsValidating&&on(r.validatingFields,U),!i.shouldUnregister&&!B.keepDefaultValue&&on(s,U);y.state.next({values:gn(o)}),y.state.next({...r,...B.keepDirty?{isDirty:ee()}:{}}),!B.keepIsValid&&A()},Te=({disabled:P,name:B})=>{(Kn(P)&&u.mount||P||f.disabled.has(B))&&(P?f.disabled.add(B):f.disabled.delete(B))},xe=(P,B={})=>{let U=ue(t,P);const le=Kn(B.disabled)||Kn(i.disabled);return He(t,P,{...U||{},_f:{...U&&U._f?U._f:{ref:{name:P}},name:P,mount:!0,...B}}),f.mount.add(P),U?Te({disabled:Kn(B.disabled)?B.disabled:i.disabled,name:P}):j(P,!0,B.value),{...le?{disabled:B.disabled||i.disabled}:{},...i.progressive?{required:!!B.required,min:ya(B.min),max:ya(B.max),minLength:ya(B.minLength),maxLength:ya(B.maxLength),pattern:ya(B.pattern)}:{},name:P,onChange:Z,onBlur:Z,ref:ae=>{if(ae){xe(P,B),U=ue(t,P);const te=an(ae.value)&&ae.querySelectorAll&&ae.querySelectorAll("input,select,textarea")[0]||ae,me=J5(te),Se=U._f.refs||[];if(me?Se.find(Le=>Le===te):te===U._f.ref)return;He(t,P,{_f:{...U._f,...me?{refs:[...Se.filter(Gl),te,...Array.isArray(ue(s,P))?[{}]:[]],ref:{type:te.type,name:P}}:{ref:te}}}),j(P,!1,void 0,te)}else U=ue(t,P,{}),U._f&&(U._f.mount=!1),(i.shouldUnregister||B.shouldUnregister)&&!(Uc(f.array,P)&&u.action)&&f.unMount.add(P)}}},nn=()=>i.shouldFocusError&&wa(t,W,f.mount),Xe=P=>{Kn(P)&&(y.state.next({disabled:P}),wa(t,(B,U)=>{const le=ue(t,U);le&&(B.disabled=le._f.disabled||P,Array.isArray(le._f.refs)&&le._f.refs.forEach(ae=>{ae.disabled=le._f.disabled||P}))},0,!1))},Ze=(P,B)=>async U=>{let le;U&&(U.preventDefault&&U.preventDefault(),U.persist&&U.persist());let ae=gn(o);if(y.state.next({isSubmitting:!0}),i.resolver){const{errors:te,values:me}=await D();r.errors=te,ae=gn(me)}else await $(t);if(f.disabled.size)for(const te of f.disabled)on(ae,te);if(on(r.errors,"root"),Ln(r.errors)){y.state.next({errors:{}});try{await P(ae,U)}catch(te){le=te}}else B&&await B({...r.errors},U),nn(),setTimeout(nn);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ln(r.errors)&&!le,submitCount:r.submitCount+1,errors:r.errors}),le)throw le},Rn=(P,B={})=>{ue(t,P)&&(an(B.defaultValue)?re(P,gn(ue(s,P))):(re(P,B.defaultValue),He(s,P,gn(B.defaultValue))),B.keepTouched||on(r.touchedFields,P),B.keepDirty||(on(r.dirtyFields,P),r.isDirty=B.defaultValue?ee(P,gn(ue(s,P))):ee()),B.keepError||(on(r.errors,P),v.isValid&&A()),y.state.next({...r}))},Ke=(P,B={})=>{const U=P?gn(P):s,le=gn(U),ae=Ln(P),te=ae?s:le;if(B.keepDefaultValues||(s=U),!B.keepValues){if(B.keepDirtyValues){const me=new Set([...f.mount,...Object.keys(pa(s,o))]);for(const Se of Array.from(me))ue(r.dirtyFields,Se)?He(te,Se,ue(o,Se)):re(Se,ue(te,Se))}else{if(jo&&an(P))for(const me of f.mount){const Se=ue(t,me);if(Se&&Se._f){const Le=Array.isArray(Se._f.refs)?Se._f.refs[0]:Se._f.ref;if(ns(Le)){const bn=Le.closest("form");if(bn){bn.reset();break}}}}if(B.keepFieldsRef)for(const me of f.mount)re(me,ue(te,me));else t={}}o=i.shouldUnregister?B.keepDefaultValues?gn(s):{}:gn(te),y.array.next({values:{...te}}),y.state.next({values:{...te}})}f={mount:B.keepDirtyValues?f.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!v.isValid||!!B.keepIsValid||!!B.keepDirtyValues,u.watch=!!i.shouldUnregister,y.state.next({submitCount:B.keepSubmitCount?r.submitCount:0,isDirty:ae?!1:B.keepDirty?r.isDirty:!!(B.keepDefaultValues&&!jr(P,s)),isSubmitted:B.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:ae?{}:B.keepDirtyValues?B.keepDefaultValues&&o?pa(s,o):r.dirtyFields:B.keepDefaultValues&&P?pa(s,P):B.keepDirty?r.dirtyFields:{},touchedFields:B.keepTouched?r.touchedFields:{},errors:B.keepErrors?r.errors:{},isSubmitSuccessful:B.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:s})},ln=(P,B)=>Ke(gr(P)?P(o):P,B),ir=(P,B={})=>{const U=ue(t,P),le=U&&U._f;if(le){const ae=le.refs?le.refs[0]:le.ref;ae.focus&&(ae.focus(),B.shouldSelect&&gr(ae.select)&&ae.select())}},un=P=>{r={...r,...P}},Hn={control:{register:xe,unregister:Ge,getFieldState:oe,handleSubmit:Ze,setError:_e,_subscribe:Ye,_runSchema:D,_focusError:nn,_getWatch:K,_getDirty:ee,_setValid:A,_setFieldArray:w,_setDisabledField:Te,_setErrors:R,_getFieldArray:q,_reset:Ke,_resetDefaultValues:()=>gr(i.defaultValues)&&i.defaultValues().then(P=>{ln(P,i.resetOptions),y.state.next({isLoading:!1})}),_removeUnmounted:ne,_disableForm:Xe,_subjects:y,_proxyFormState:v,get _fields(){return t},get _formValues(){return o},get _state(){return u},set _state(P){u=P},get _defaultValues(){return s},get _names(){return f},set _names(P){f=P},get _formState(){return r},get _options(){return i},set _options(P){i={...i,...P}}},subscribe:Ve,trigger:J,register:xe,handleSubmit:Ze,watch:_n,setValue:re,getValues:de,reset:ln,resetField:Rn,clearErrors:ve,unregister:Ge,setError:_e,setFocus:ir,getFieldState:oe};return{...Hn,formControl:Hn}}function fT(e={}){const i=F.useRef(void 0),r=F.useRef(void 0),[t,s]=F.useState({isDirty:!1,isValidating:!1,isLoading:gr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:gr(e.defaultValues)?void 0:e.defaultValues});if(!i.current)if(e.formControl)i.current={...e.formControl,formState:t},e.defaultValues&&!gr(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:u,...f}=dT(e);i.current={...f,formState:t}}const o=i.current.control;return o._options=e,Ko(()=>{const u=o._subscribe({formState:o._proxyFormState,callback:()=>s({...o._formState}),reRenderRoot:!0});return s(f=>({...f,isReady:!0})),o._formState.isReady=!0,u},[o]),F.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),F.useEffect(()=>{e.mode&&(o._options.mode=e.mode),e.reValidateMode&&(o._options.reValidateMode=e.reValidateMode)},[o,e.mode,e.reValidateMode]),F.useEffect(()=>{e.errors&&(o._setErrors(e.errors),o._focusError())},[o,e.errors]),F.useEffect(()=>{e.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,e.shouldUnregister]),F.useEffect(()=>{if(o._proxyFormState.isDirty){const u=o._getDirty();u!==t.isDirty&&o._subjects.state.next({isDirty:u})}},[o,t.isDirty]),F.useEffect(()=>{e.values&&!jr(e.values,r.current)?(o._reset(e.values,{keepFieldsRef:!0,...o._options.resetOptions}),r.current=e.values,s(u=>({...u}))):o._resetDefaultValues()},[o,e.values]),F.useEffect(()=>{o._state.mount||(o._setValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),i.current.formState=Hc(t,o),i.current}function gT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _g={exports:{}},ka={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function cT(){if(Ag)return ka;Ag=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,o){var u=null;if(o!==void 0&&(u=""+o),s.key!==void 0&&(u=""+s.key),"key"in s){o={};for(var f in s)f!=="key"&&(o[f]=s[f])}else o=s;return s=o.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:o}}return ka.Fragment=i,ka.jsx=r,ka.jsxs=r,ka}var Eg;function mT(){return Eg||(Eg=1,_g.exports=cT()),_g.exports}var kn=mT();const em=e=>e.reduce((i,r,t)=>({...i,[t]:s=>r(s)||!0}),{}),io=(e,i)=>i.split(".").reduce((r,t)=>r!==void 0?r[t]:r,e)?.message,vT=({label:e,validate:i=[],readOnly:r=!1,onChange:t,onClick:s,className:o,...u})=>{const{name:f,control:c,disabled:m}=u,{formState:{errors:v}}=Da(),{field:p}=Yc({name:f,control:c,rules:{validate:T.useMemo(()=>em(i),[i])}}),y=io(v,f);return kn.jsxs(kn.Fragment,{children:[kn.jsx(a5,{size:"small",disabled:m||r,checked:p.value===!0,className:o,error:!!y,...p,onChange:k=>{p.onChange(k),t&&t(k.currentTarget.checked)},onClick:()=>{s&&s()},children:e}),y&&kn.jsx(as,{children:io(v,f)})]})};var so={exports:{}},hT=so.exports,Tg;function bT(){return Tg||(Tg=1,function(e,i){(function(r,t){e.exports=t()})(hT,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,o=/\d\d/,u=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,c={},m=function(_){return(_=+_)+(_>68?1900:2e3)},v=function(_){return function(w){this[_]=+w}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var S=w.match(/([+-]|\d\d)/g),R=60*S[1]+(+S[2]||0);return R===0?0:S[0]==="+"?-R:R}(_)}],y=function(_){var w=c[_];return w&&(w.indexOf?w:w.s.concat(w.f))},k=function(_,w){var S,R=c.meridiem;if(R){for(var j=1;j<=24;j+=1)if(_.indexOf(R(j,0,w))>-1){S=j>12;break}}else S=_===(w?"pm":"PM");return S},N={A:[f,function(_){this.afternoon=k(_,!1)}],a:[f,function(_){this.afternoon=k(_,!0)}],Q:[s,function(_){this.month=3*(_-1)+1}],S:[s,function(_){this.milliseconds=100*+_}],SS:[o,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[u,v("seconds")],ss:[u,v("seconds")],m:[u,v("minutes")],mm:[u,v("minutes")],H:[u,v("hours")],h:[u,v("hours")],HH:[u,v("hours")],hh:[u,v("hours")],D:[u,v("day")],DD:[o,v("day")],Do:[f,function(_){var w=c.ordinal,S=_.match(/\d+/);if(this.day=S[0],w)for(var R=1;R<=31;R+=1)w(R).replace(/\[|\]/g,"")===_&&(this.day=R)}],w:[u,v("week")],ww:[o,v("week")],M:[u,v("month")],MM:[o,v("month")],MMM:[f,function(_){var w=y("months"),S=(y("monthsShort")||w.map(function(R){return R.slice(0,3)})).indexOf(_)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[f,function(_){var w=y("months").indexOf(_)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,v("year")],YY:[o,function(_){this.year=m(_)}],YYYY:[/\d{4}/,v("year")],Z:p,ZZ:p};function A(_){var w,S;w=_,S=c&&c.formats;for(var R=(_=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(ne,ee,K){var q=K&&K.toUpperCase();return ee||S[K]||r[K]||S[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,X,re){return X||re.slice(1)})})).match(t),j=R.length,I=0;I<j;I+=1){var G=R[I],D=N[G],C=D&&D[0],$=D&&D[1];R[I]=$?{regex:C,parser:$}:G.replace(/^\[|\]$/g,"")}return function(ne){for(var ee={},K=0,q=0;K<j;K+=1){var M=R[K];if(typeof M=="string")q+=M.length;else{var X=M.regex,re=M.parser,Z=ne.slice(q),W=X.exec(Z)[0];re.call(ee,W),ne=ne.replace(W,"")}}return function(J){var de=J.afternoon;if(de!==void 0){var oe=J.hours;de?oe<12&&(J.hours+=12):oe===12&&(J.hours=0),delete J.afternoon}}(ee),ee}}return function(_,w,S){S.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(m=_.parseTwoDigitYear);var R=w.prototype,j=R.parse;R.parse=function(I){var G=I.date,D=I.utc,C=I.args;this.$u=D;var $=C[1];if(typeof $=="string"){var ne=C[2]===!0,ee=C[3]===!0,K=ne||ee,q=C[2];ee&&(q=C[2]),c=this.$locale(),!ne&&q&&(c=S.Ls[q]),this.$d=function(Z,W,J,de){try{if(["x","X"].indexOf(W)>-1)return new Date((W==="X"?1e3:1)*Z);var oe=A(W)(Z),ve=oe.year,_e=oe.month,_n=oe.day,Ye=oe.hours,Ve=oe.minutes,Ge=oe.seconds,Te=oe.milliseconds,xe=oe.zone,nn=oe.week,Xe=new Date,Ze=_n||(ve||_e?1:Xe.getDate()),Rn=ve||Xe.getFullYear(),Ke=0;ve&&!_e||(Ke=_e>0?_e-1:Xe.getMonth());var ln,ir=Ye||0,un=Ve||0,sr=Ge||0,Hn=Te||0;return xe?new Date(Date.UTC(Rn,Ke,Ze,ir,un,sr,Hn+60*xe.offset*1e3)):J?new Date(Date.UTC(Rn,Ke,Ze,ir,un,sr,Hn)):(ln=new Date(Rn,Ke,Ze,ir,un,sr,Hn),nn&&(ln=de(ln).week(nn).toDate()),ln)}catch{return new Date("")}}(G,$,D,S),this.init(),q&&q!==!0&&(this.$L=this.locale(q).$L),K&&G!=this.format($)&&(this.$d=new Date("")),c={}}else if($ instanceof Array)for(var M=$.length,X=1;X<=M;X+=1){C[1]=$[X-1];var re=S.apply(this,C);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}X===M&&(this.$d=new Date(""))}else j.call(this,I)}}})}(so)),so.exports}var pT=bT();const yT=gT(pT),kT="_textarea_14c7r_1",_T="_readOnlyField_14c7r_7",Pg={textarea:kT,readOnlyField:_T},AT=e=>e!=null&&e!=="",ET=({label:e,value:i,isEdited:r=!1,type:t,hideLabel:s,size:o})=>AT(i)?kn.jsxs(_t,{gap:"space-4",children:[e&&!s&&kn.jsx(pt,{size:o,children:e}),kn.jsxs(Mo,{gap:"space-8",align:"center",wrap:!1,children:[kn.jsx(wo,{className:t==="textarea"?Pg.textarea:Pg.readOnlyField,size:o,children:i}),r&&kn.jsx(F5,{})]})]}):null;Gr.extend(yT);const TT="_textAreaFieldWithBadges_bdz0b_1",PT="_etikettWrapper_bdz0b_4",wg={textAreaFieldWithBadges:TT,etikettWrapper:PT},wT=({name:e,control:i,label:r,readOnly:t,maxLength:s,badges:o,validate:u=[],parse:f=k=>k,className:c,description:m,isEdited:v,size:p="small",...y})=>{const{formState:{errors:k}}=Da(),{field:N}=Yc({name:e,control:i,rules:{validate:T.useMemo(()=>em(u),[u])}});return t?kn.jsx(ET,{size:p,label:r,value:N.value,type:"textarea",isEdited:v,hideLabel:y.hideLabel}):kn.jsxs("div",{className:o?wg.textAreaFieldWithBadges:null,children:[o&&kn.jsx("div",{className:wg.etikettWrapper,children:o.map(({type:A,titleText:_})=>kn.jsx(WE,{variant:A,size:"small",children:_},_))}),kn.jsx(g5,{size:p,label:r,description:m,className:c,autoComplete:"off",...N,onChange:A=>N.onChange(A.currentTarget.value!==""?f(A.currentTarget.value):null),value:N.value?N.value:"",error:io(k,e),maxLength:s,...y})]})},RT=({formMethods:e,onSubmit:i,children:r,className:t,setDataOnUnmount:s})=>{const{handleSubmit:o,getValues:u}=e;return T.useEffect(()=>()=>{s&&s(u())},[]),kn.jsx(W5,{...e,children:kn.jsx("form",{className:t,onSubmit:i?o(f=>i(f)):void 0,children:r})})},ja={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"},Kl=vr(ja),OT=v_(3),ST=h_(1500),Ca=({control:e,isReadOnly:i,isSubmittable:r,hasBegrunnelse:t,label:s,hasReadOnlyLabel:o=!1,hasVurderingText:u=!1,size:f})=>{const c=u?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",m=()=>i?o?Kl.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":s??Kl.formatMessage({id:c});return ie.jsx(Po,{value:Kl,children:(r||t)&&ie.jsx(wT,{name:"begrunnelse",control:e,label:m(),validate:[m_,OT,ST,b_],maxLength:1500,readOnly:i,size:f})})},IT=e=>e&&Array.isArray(e)?e[0]?.begrunnelse??"":e&&!Array.isArray(e)&&e.begrunnelse?e.begrunnelse:"";Ca.initialValues=e=>({begrunnelse:p_(IT(e)??void 0)});Ca.transformValues=e=>({begrunnelse:w_(e.begrunnelse)});Ca.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""}}};const NT=vr(ja),xT=(e,i,r)=>!r||i?!0:!e,nm=({isReadOnly:e,isSubmittable:i,buttonText:r,onClick:t,isSubmitting:s,isDirty:o})=>ie.jsx(Po,{value:NT,children:!e&&ie.jsx("div",{children:ie.jsxs(us,{size:"small",variant:"primary",loading:s,disabled:xT(o,s,i),onClick:t||y_,type:t?"button":"submit",children:[!!r&&r,!r&&ie.jsx(Bn,{id:"SubmitButton.ConfirmInformation"})]})})});nm.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};vr(ja);var Ta={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var FT=Ta.exports,Rg;function LT(){return Rg||(Rg=1,function(e,i){(function(){var r,t="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",f="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,v="__lodash_placeholder__",p=1,y=2,k=4,N=1,A=2,_=1,w=2,S=4,R=8,j=16,I=32,G=64,D=128,C=256,$=512,ne=30,ee="...",K=800,q=16,M=1,X=2,re=3,Z=1/0,W=9007199254740991,J=17976931348623157e292,de=NaN,oe=4294967295,ve=oe-1,_e=oe>>>1,_n=[["ary",D],["bind",_],["bindKey",w],["curry",R],["curryRight",j],["flip",$],["partial",I],["partialRight",G],["rearg",C]],Ye="[object Arguments]",Ve="[object Array]",Ge="[object AsyncFunction]",Te="[object Boolean]",xe="[object Date]",nn="[object DOMException]",Xe="[object Error]",Ze="[object Function]",Rn="[object GeneratorFunction]",Ke="[object Map]",ln="[object Number]",ir="[object Null]",un="[object Object]",sr="[object Promise]",Hn="[object Proxy]",P="[object RegExp]",B="[object Set]",U="[object String]",le="[object Symbol]",ae="[object Undefined]",te="[object WeakMap]",me="[object WeakSet]",Se="[object ArrayBuffer]",Le="[object DataView]",bn="[object Float32Array]",Ur="[object Float64Array]",$n="[object Int8Array]",Zt="[object Int16Array]",tt="[object Int32Array]",at="[object Uint8Array]",Jt="[object Uint8ClampedArray]",Tt="[object Uint16Array]",Qt="[object Uint32Array]",Ua=/\b__p \+= '';/g,Im=/\b(__p \+=) '' \+/g,Nm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Xo=/&(?:amp|lt|gt|quot|#39);/g,Zo=/[&<>"']/g,xm=RegExp(Xo.source),Fm=RegExp(Zo.source),Lm=/<%-([\s\S]+?)%>/g,Bm=/<%([\s\S]+?)%>/g,Jo=/<%=([\s\S]+?)%>/g,qm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Mm=/^\w*$/,Dm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,hs=/[\\^$.*+?()[\]{}|]/g,jm=RegExp(hs.source),bs=/^\s+/,Cm=/\s/,Vm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Gm=/\{\n\/\* \[wrapped with (.+)\] \*/,Km=/,? & /,Um=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Hm=/[()=,{}\[\]\/\s]/,$m=/\\(\\)?/g,Ym=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qo=/\w*$/,Wm=/^[-+]0x[0-9a-f]+$/i,zm=/^0b[01]+$/i,Xm=/^\[object .+?Constructor\]$/,Zm=/^0o[0-7]+$/i,Jm=/^(?:0|[1-9]\d*)$/,Qm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ha=/($^)/,ev=/['\n\r\u2028\u2029\\]/g,$a="\\ud800-\\udfff",nv="\\u0300-\\u036f",rv="\\ufe20-\\ufe2f",tv="\\u20d0-\\u20ff",eu=nv+rv+tv,nu="\\u2700-\\u27bf",ru="a-z\\xdf-\\xf6\\xf8-\\xff",av="\\xac\\xb1\\xd7\\xf7",iv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",sv="\\u2000-\\u206f",lv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tu="A-Z\\xc0-\\xd6\\xd8-\\xde",au="\\ufe0e\\ufe0f",iu=av+iv+sv+lv,ps="['’]",ov="["+$a+"]",su="["+iu+"]",Ya="["+eu+"]",lu="\\d+",uv="["+nu+"]",ou="["+ru+"]",uu="[^"+$a+iu+lu+nu+ru+tu+"]",ys="\\ud83c[\\udffb-\\udfff]",dv="(?:"+Ya+"|"+ys+")",du="[^"+$a+"]",ks="(?:\\ud83c[\\udde6-\\uddff]){2}",_s="[\\ud800-\\udbff][\\udc00-\\udfff]",Pt="["+tu+"]",fu="\\u200d",gu="(?:"+ou+"|"+uu+")",fv="(?:"+Pt+"|"+uu+")",cu="(?:"+ps+"(?:d|ll|m|re|s|t|ve))?",mu="(?:"+ps+"(?:D|LL|M|RE|S|T|VE))?",vu=dv+"?",hu="["+au+"]?",gv="(?:"+fu+"(?:"+[du,ks,_s].join("|")+")"+hu+vu+")*",cv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",mv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",bu=hu+vu+gv,vv="(?:"+[uv,ks,_s].join("|")+")"+bu,hv="(?:"+[du+Ya+"?",Ya,ks,_s,ov].join("|")+")",bv=RegExp(ps,"g"),pv=RegExp(Ya,"g"),As=RegExp(ys+"(?="+ys+")|"+hv+bu,"g"),yv=RegExp([Pt+"?"+ou+"+"+cu+"(?="+[su,Pt,"$"].join("|")+")",fv+"+"+mu+"(?="+[su,Pt+gu,"$"].join("|")+")",Pt+"?"+gu+"+"+cu,Pt+"+"+mu,mv,cv,lu,vv].join("|"),"g"),kv=RegExp("["+fu+$a+eu+au+"]"),_v=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Av=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ev=-1,We={};We[bn]=We[Ur]=We[$n]=We[Zt]=We[tt]=We[at]=We[Jt]=We[Tt]=We[Qt]=!0,We[Ye]=We[Ve]=We[Se]=We[Te]=We[Le]=We[xe]=We[Xe]=We[Ze]=We[Ke]=We[ln]=We[un]=We[P]=We[B]=We[U]=We[te]=!1;var Ue={};Ue[Ye]=Ue[Ve]=Ue[Se]=Ue[Le]=Ue[Te]=Ue[xe]=Ue[bn]=Ue[Ur]=Ue[$n]=Ue[Zt]=Ue[tt]=Ue[Ke]=Ue[ln]=Ue[un]=Ue[P]=Ue[B]=Ue[U]=Ue[le]=Ue[at]=Ue[Jt]=Ue[Tt]=Ue[Qt]=!0,Ue[Xe]=Ue[Ze]=Ue[te]=!1;var Tv={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Pv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wv={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Rv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ov=parseFloat,Sv=parseInt,pu=typeof Fi=="object"&&Fi&&Fi.Object===Object&&Fi,Iv=typeof self=="object"&&self&&self.Object===Object&&self,mn=pu||Iv||Function("return this")(),Es=i&&!i.nodeType&&i,it=Es&&!0&&e&&!e.nodeType&&e,yu=it&&it.exports===Es,Ts=yu&&pu.process,Yn=function(){try{var x=it&&it.require&&it.require("util").types;return x||Ts&&Ts.binding&&Ts.binding("util")}catch{}}(),ku=Yn&&Yn.isArrayBuffer,_u=Yn&&Yn.isDate,Au=Yn&&Yn.isMap,Eu=Yn&&Yn.isRegExp,Tu=Yn&&Yn.isSet,Pu=Yn&&Yn.isTypedArray;function Mn(x,H,V){switch(V.length){case 0:return x.call(H);case 1:return x.call(H,V[0]);case 2:return x.call(H,V[0],V[1]);case 3:return x.call(H,V[0],V[1],V[2])}return x.apply(H,V)}function Nv(x,H,V,fe){for(var ye=-1,Be=x==null?0:x.length;++ye<Be;){var dn=x[ye];H(fe,dn,V(dn),x)}return fe}function Wn(x,H){for(var V=-1,fe=x==null?0:x.length;++V<fe&&H(x[V],V,x)!==!1;);return x}function xv(x,H){for(var V=x==null?0:x.length;V--&&H(x[V],V,x)!==!1;);return x}function wu(x,H){for(var V=-1,fe=x==null?0:x.length;++V<fe;)if(!H(x[V],V,x))return!1;return!0}function Hr(x,H){for(var V=-1,fe=x==null?0:x.length,ye=0,Be=[];++V<fe;){var dn=x[V];H(dn,V,x)&&(Be[ye++]=dn)}return Be}function Wa(x,H){var V=x==null?0:x.length;return!!V&&wt(x,H,0)>-1}function Ps(x,H,V){for(var fe=-1,ye=x==null?0:x.length;++fe<ye;)if(V(H,x[fe]))return!0;return!1}function Je(x,H){for(var V=-1,fe=x==null?0:x.length,ye=Array(fe);++V<fe;)ye[V]=H(x[V],V,x);return ye}function $r(x,H){for(var V=-1,fe=H.length,ye=x.length;++V<fe;)x[ye+V]=H[V];return x}function ws(x,H,V,fe){var ye=-1,Be=x==null?0:x.length;for(fe&&Be&&(V=x[++ye]);++ye<Be;)V=H(V,x[ye],ye,x);return V}function Fv(x,H,V,fe){var ye=x==null?0:x.length;for(fe&&ye&&(V=x[--ye]);ye--;)V=H(V,x[ye],ye,x);return V}function Rs(x,H){for(var V=-1,fe=x==null?0:x.length;++V<fe;)if(H(x[V],V,x))return!0;return!1}var Lv=Os("length");function Bv(x){return x.split("")}function qv(x){return x.match(Um)||[]}function Ru(x,H,V){var fe;return V(x,function(ye,Be,dn){if(H(ye,Be,dn))return fe=Be,!1}),fe}function za(x,H,V,fe){for(var ye=x.length,Be=V+(fe?1:-1);fe?Be--:++Be<ye;)if(H(x[Be],Be,x))return Be;return-1}function wt(x,H,V){return H===H?Wv(x,H,V):za(x,Ou,V)}function Mv(x,H,V,fe){for(var ye=V-1,Be=x.length;++ye<Be;)if(fe(x[ye],H))return ye;return-1}function Ou(x){return x!==x}function Su(x,H){var V=x==null?0:x.length;return V?Is(x,H)/V:de}function Os(x){return function(H){return H==null?r:H[x]}}function Ss(x){return function(H){return x==null?r:x[H]}}function Iu(x,H,V,fe,ye){return ye(x,function(Be,dn,Ce){V=fe?(fe=!1,Be):H(V,Be,dn,Ce)}),V}function Dv(x,H){var V=x.length;for(x.sort(H);V--;)x[V]=x[V].value;return x}function Is(x,H){for(var V,fe=-1,ye=x.length;++fe<ye;){var Be=H(x[fe]);Be!==r&&(V=V===r?Be:V+Be)}return V}function Ns(x,H){for(var V=-1,fe=Array(x);++V<x;)fe[V]=H(V);return fe}function jv(x,H){return Je(H,function(V){return[V,x[V]]})}function Nu(x){return x&&x.slice(0,Bu(x)+1).replace(bs,"")}function Dn(x){return function(H){return x(H)}}function xs(x,H){return Je(H,function(V){return x[V]})}function ea(x,H){return x.has(H)}function xu(x,H){for(var V=-1,fe=x.length;++V<fe&&wt(H,x[V],0)>-1;);return V}function Fu(x,H){for(var V=x.length;V--&&wt(H,x[V],0)>-1;);return V}function Cv(x,H){for(var V=x.length,fe=0;V--;)x[V]===H&&++fe;return fe}var Vv=Ss(Tv),Gv=Ss(Pv);function Kv(x){return"\\"+Rv[x]}function Uv(x,H){return x==null?r:x[H]}function Rt(x){return kv.test(x)}function Hv(x){return _v.test(x)}function $v(x){for(var H,V=[];!(H=x.next()).done;)V.push(H.value);return V}function Fs(x){var H=-1,V=Array(x.size);return x.forEach(function(fe,ye){V[++H]=[ye,fe]}),V}function Lu(x,H){return function(V){return x(H(V))}}function Yr(x,H){for(var V=-1,fe=x.length,ye=0,Be=[];++V<fe;){var dn=x[V];(dn===H||dn===v)&&(x[V]=v,Be[ye++]=V)}return Be}function Xa(x){var H=-1,V=Array(x.size);return x.forEach(function(fe){V[++H]=fe}),V}function Yv(x){var H=-1,V=Array(x.size);return x.forEach(function(fe){V[++H]=[fe,fe]}),V}function Wv(x,H,V){for(var fe=V-1,ye=x.length;++fe<ye;)if(x[fe]===H)return fe;return-1}function zv(x,H,V){for(var fe=V+1;fe--;)if(x[fe]===H)return fe;return fe}function Ot(x){return Rt(x)?Zv(x):Lv(x)}function lr(x){return Rt(x)?Jv(x):Bv(x)}function Bu(x){for(var H=x.length;H--&&Cm.test(x.charAt(H)););return H}var Xv=Ss(wv);function Zv(x){for(var H=As.lastIndex=0;As.test(x);)++H;return H}function Jv(x){return x.match(As)||[]}function Qv(x){return x.match(yv)||[]}var eh=function x(H){H=H==null?mn:St.defaults(mn.Object(),H,St.pick(mn,Av));var V=H.Array,fe=H.Date,ye=H.Error,Be=H.Function,dn=H.Math,Ce=H.Object,Ls=H.RegExp,nh=H.String,zn=H.TypeError,Za=V.prototype,rh=Be.prototype,It=Ce.prototype,Ja=H["__core-js_shared__"],Qa=rh.toString,je=It.hasOwnProperty,th=0,qu=function(){var n=/[^.]+$/.exec(Ja&&Ja.keys&&Ja.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ei=It.toString,ah=Qa.call(Ce),ih=mn._,sh=Ls("^"+Qa.call(je).replace(hs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ni=yu?H.Buffer:r,Wr=H.Symbol,ri=H.Uint8Array,Mu=ni?ni.allocUnsafe:r,ti=Lu(Ce.getPrototypeOf,Ce),Du=Ce.create,ju=It.propertyIsEnumerable,ai=Za.splice,Cu=Wr?Wr.isConcatSpreadable:r,na=Wr?Wr.iterator:r,st=Wr?Wr.toStringTag:r,ii=function(){try{var n=ft(Ce,"defineProperty");return n({},"",{}),n}catch{}}(),lh=H.clearTimeout!==mn.clearTimeout&&H.clearTimeout,oh=fe&&fe.now!==mn.Date.now&&fe.now,uh=H.setTimeout!==mn.setTimeout&&H.setTimeout,si=dn.ceil,li=dn.floor,Bs=Ce.getOwnPropertySymbols,dh=ni?ni.isBuffer:r,Vu=H.isFinite,fh=Za.join,gh=Lu(Ce.keys,Ce),fn=dn.max,pn=dn.min,ch=fe.now,mh=H.parseInt,Gu=dn.random,vh=Za.reverse,qs=ft(H,"DataView"),ra=ft(H,"Map"),Ms=ft(H,"Promise"),Nt=ft(H,"Set"),ta=ft(H,"WeakMap"),aa=ft(Ce,"create"),oi=ta&&new ta,xt={},hh=gt(qs),bh=gt(ra),ph=gt(Ms),yh=gt(Nt),kh=gt(ta),ui=Wr?Wr.prototype:r,ia=ui?ui.valueOf:r,Ku=ui?ui.toString:r;function h(n){if(en(n)&&!ke(n)&&!(n instanceof Re)){if(n instanceof Xn)return n;if(je.call(n,"__wrapped__"))return Ud(n)}return new Xn(n)}var Ft=function(){function n(){}return function(a){if(!Qe(a))return{};if(Du)return Du(a);n.prototype=a;var l=new n;return n.prototype=r,l}}();function di(){}function Xn(n,a){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=r}h.templateSettings={escape:Lm,evaluate:Bm,interpolate:Jo,variable:"",imports:{_:h}},h.prototype=di.prototype,h.prototype.constructor=h,Xn.prototype=Ft(di.prototype),Xn.prototype.constructor=Xn;function Re(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=oe,this.__views__=[]}function _h(){var n=new Re(this.__wrapped__);return n.__actions__=On(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=On(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=On(this.__views__),n}function Ah(){if(this.__filtered__){var n=new Re(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Eh(){var n=this.__wrapped__.value(),a=this.__dir__,l=ke(n),d=a<0,g=l?n.length:0,b=Bb(0,g,this.__views__),E=b.start,O=b.end,L=O-E,Y=d?O:E-1,z=this.__iteratees__,Q=z.length,se=0,ce=pn(L,this.__takeCount__);if(!l||!d&&g==L&&ce==L)return cd(n,this.__actions__);var be=[];e:for(;L--&&se<ce;){Y+=a;for(var Ee=-1,pe=n[Y];++Ee<Q;){var we=z[Ee],Ie=we.iteratee,Vn=we.type,Tn=Ie(pe);if(Vn==X)pe=Tn;else if(!Tn){if(Vn==M)continue e;break e}}be[se++]=pe}return be}Re.prototype=Ft(di.prototype),Re.prototype.constructor=Re;function lt(n){var a=-1,l=n==null?0:n.length;for(this.clear();++a<l;){var d=n[a];this.set(d[0],d[1])}}function Th(){this.__data__=aa?aa(null):{},this.size=0}function Ph(n){var a=this.has(n)&&delete this.__data__[n];return this.size-=a?1:0,a}function wh(n){var a=this.__data__;if(aa){var l=a[n];return l===c?r:l}return je.call(a,n)?a[n]:r}function Rh(n){var a=this.__data__;return aa?a[n]!==r:je.call(a,n)}function Oh(n,a){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=aa&&a===r?c:a,this}lt.prototype.clear=Th,lt.prototype.delete=Ph,lt.prototype.get=wh,lt.prototype.has=Rh,lt.prototype.set=Oh;function Or(n){var a=-1,l=n==null?0:n.length;for(this.clear();++a<l;){var d=n[a];this.set(d[0],d[1])}}function Sh(){this.__data__=[],this.size=0}function Ih(n){var a=this.__data__,l=fi(a,n);if(l<0)return!1;var d=a.length-1;return l==d?a.pop():ai.call(a,l,1),--this.size,!0}function Nh(n){var a=this.__data__,l=fi(a,n);return l<0?r:a[l][1]}function xh(n){return fi(this.__data__,n)>-1}function Fh(n,a){var l=this.__data__,d=fi(l,n);return d<0?(++this.size,l.push([n,a])):l[d][1]=a,this}Or.prototype.clear=Sh,Or.prototype.delete=Ih,Or.prototype.get=Nh,Or.prototype.has=xh,Or.prototype.set=Fh;function Sr(n){var a=-1,l=n==null?0:n.length;for(this.clear();++a<l;){var d=n[a];this.set(d[0],d[1])}}function Lh(){this.size=0,this.__data__={hash:new lt,map:new(ra||Or),string:new lt}}function Bh(n){var a=Ei(this,n).delete(n);return this.size-=a?1:0,a}function qh(n){return Ei(this,n).get(n)}function Mh(n){return Ei(this,n).has(n)}function Dh(n,a){var l=Ei(this,n),d=l.size;return l.set(n,a),this.size+=l.size==d?0:1,this}Sr.prototype.clear=Lh,Sr.prototype.delete=Bh,Sr.prototype.get=qh,Sr.prototype.has=Mh,Sr.prototype.set=Dh;function ot(n){var a=-1,l=n==null?0:n.length;for(this.__data__=new Sr;++a<l;)this.add(n[a])}function jh(n){return this.__data__.set(n,c),this}function Ch(n){return this.__data__.has(n)}ot.prototype.add=ot.prototype.push=jh,ot.prototype.has=Ch;function or(n){var a=this.__data__=new Or(n);this.size=a.size}function Vh(){this.__data__=new Or,this.size=0}function Gh(n){var a=this.__data__,l=a.delete(n);return this.size=a.size,l}function Kh(n){return this.__data__.get(n)}function Uh(n){return this.__data__.has(n)}function Hh(n,a){var l=this.__data__;if(l instanceof Or){var d=l.__data__;if(!ra||d.length<s-1)return d.push([n,a]),this.size=++l.size,this;l=this.__data__=new Sr(d)}return l.set(n,a),this.size=l.size,this}or.prototype.clear=Vh,or.prototype.delete=Gh,or.prototype.get=Kh,or.prototype.has=Uh,or.prototype.set=Hh;function Uu(n,a){var l=ke(n),d=!l&&ct(n),g=!l&&!d&&Qr(n),b=!l&&!d&&!g&&Mt(n),E=l||d||g||b,O=E?Ns(n.length,nh):[],L=O.length;for(var Y in n)(a||je.call(n,Y))&&!(E&&(Y=="length"||g&&(Y=="offset"||Y=="parent")||b&&(Y=="buffer"||Y=="byteLength"||Y=="byteOffset")||Fr(Y,L)))&&O.push(Y);return O}function Hu(n){var a=n.length;return a?n[Ws(0,a-1)]:r}function $h(n,a){return Ti(On(n),ut(a,0,n.length))}function Yh(n){return Ti(On(n))}function Ds(n,a,l){(l!==r&&!ur(n[a],l)||l===r&&!(a in n))&&Ir(n,a,l)}function sa(n,a,l){var d=n[a];(!(je.call(n,a)&&ur(d,l))||l===r&&!(a in n))&&Ir(n,a,l)}function fi(n,a){for(var l=n.length;l--;)if(ur(n[l][0],a))return l;return-1}function Wh(n,a,l,d){return zr(n,function(g,b,E){a(d,g,l(g),E)}),d}function $u(n,a){return n&&pr(a,cn(a),n)}function zh(n,a){return n&&pr(a,In(a),n)}function Ir(n,a,l){a=="__proto__"&&ii?ii(n,a,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[a]=l}function js(n,a){for(var l=-1,d=a.length,g=V(d),b=n==null;++l<d;)g[l]=b?r:yl(n,a[l]);return g}function ut(n,a,l){return n===n&&(l!==r&&(n=n<=l?n:l),a!==r&&(n=n>=a?n:a)),n}function Zn(n,a,l,d,g,b){var E,O=a&p,L=a&y,Y=a&k;if(l&&(E=g?l(n,d,g,b):l(n)),E!==r)return E;if(!Qe(n))return n;var z=ke(n);if(z){if(E=Mb(n),!O)return On(n,E)}else{var Q=yn(n),se=Q==Ze||Q==Rn;if(Qr(n))return hd(n,O);if(Q==un||Q==Ye||se&&!g){if(E=L||se?{}:Bd(n),!O)return L?wb(n,zh(E,n)):Pb(n,$u(E,n))}else{if(!Ue[Q])return g?n:{};E=Db(n,Q,O)}}b||(b=new or);var ce=b.get(n);if(ce)return ce;b.set(n,E),ff(n)?n.forEach(function(pe){E.add(Zn(pe,a,l,pe,n,b))}):uf(n)&&n.forEach(function(pe,we){E.set(we,Zn(pe,a,l,we,n,b))});var be=Y?L?il:al:L?In:cn,Ee=z?r:be(n);return Wn(Ee||n,function(pe,we){Ee&&(we=pe,pe=n[we]),sa(E,we,Zn(pe,a,l,we,n,b))}),E}function Xh(n){var a=cn(n);return function(l){return Yu(l,n,a)}}function Yu(n,a,l){var d=l.length;if(n==null)return!d;for(n=Ce(n);d--;){var g=l[d],b=a[g],E=n[g];if(E===r&&!(g in n)||!b(E))return!1}return!0}function Wu(n,a,l){if(typeof n!="function")throw new zn(u);return ca(function(){n.apply(r,l)},a)}function la(n,a,l,d){var g=-1,b=Wa,E=!0,O=n.length,L=[],Y=a.length;if(!O)return L;l&&(a=Je(a,Dn(l))),d?(b=Ps,E=!1):a.length>=s&&(b=ea,E=!1,a=new ot(a));e:for(;++g<O;){var z=n[g],Q=l==null?z:l(z);if(z=d||z!==0?z:0,E&&Q===Q){for(var se=Y;se--;)if(a[se]===Q)continue e;L.push(z)}else b(a,Q,d)||L.push(z)}return L}var zr=_d(br),zu=_d(Vs,!0);function Zh(n,a){var l=!0;return zr(n,function(d,g,b){return l=!!a(d,g,b),l}),l}function gi(n,a,l){for(var d=-1,g=n.length;++d<g;){var b=n[d],E=a(b);if(E!=null&&(O===r?E===E&&!Cn(E):l(E,O)))var O=E,L=b}return L}function Jh(n,a,l,d){var g=n.length;for(l=Ae(l),l<0&&(l=-l>g?0:g+l),d=d===r||d>g?g:Ae(d),d<0&&(d+=g),d=l>d?0:cf(d);l<d;)n[l++]=a;return n}function Xu(n,a){var l=[];return zr(n,function(d,g,b){a(d,g,b)&&l.push(d)}),l}function vn(n,a,l,d,g){var b=-1,E=n.length;for(l||(l=Cb),g||(g=[]);++b<E;){var O=n[b];a>0&&l(O)?a>1?vn(O,a-1,l,d,g):$r(g,O):d||(g[g.length]=O)}return g}var Cs=Ad(),Zu=Ad(!0);function br(n,a){return n&&Cs(n,a,cn)}function Vs(n,a){return n&&Zu(n,a,cn)}function ci(n,a){return Hr(a,function(l){return Lr(n[l])})}function dt(n,a){a=Zr(a,n);for(var l=0,d=a.length;n!=null&&l<d;)n=n[yr(a[l++])];return l&&l==d?n:r}function Ju(n,a,l){var d=a(n);return ke(n)?d:$r(d,l(n))}function An(n){return n==null?n===r?ae:ir:st&&st in Ce(n)?Lb(n):Yb(n)}function Gs(n,a){return n>a}function Qh(n,a){return n!=null&&je.call(n,a)}function eb(n,a){return n!=null&&a in Ce(n)}function nb(n,a,l){return n>=pn(a,l)&&n<fn(a,l)}function Ks(n,a,l){for(var d=l?Ps:Wa,g=n[0].length,b=n.length,E=b,O=V(b),L=1/0,Y=[];E--;){var z=n[E];E&&a&&(z=Je(z,Dn(a))),L=pn(z.length,L),O[E]=!l&&(a||g>=120&&z.length>=120)?new ot(E&&z):r}z=n[0];var Q=-1,se=O[0];e:for(;++Q<g&&Y.length<L;){var ce=z[Q],be=a?a(ce):ce;if(ce=l||ce!==0?ce:0,!(se?ea(se,be):d(Y,be,l))){for(E=b;--E;){var Ee=O[E];if(!(Ee?ea(Ee,be):d(n[E],be,l)))continue e}se&&se.push(be),Y.push(ce)}}return Y}function rb(n,a,l,d){return br(n,function(g,b,E){a(d,l(g),b,E)}),d}function oa(n,a,l){a=Zr(a,n),n=jd(n,a);var d=n==null?n:n[yr(Qn(a))];return d==null?r:Mn(d,n,l)}function Qu(n){return en(n)&&An(n)==Ye}function tb(n){return en(n)&&An(n)==Se}function ab(n){return en(n)&&An(n)==xe}function ua(n,a,l,d,g){return n===a?!0:n==null||a==null||!en(n)&&!en(a)?n!==n&&a!==a:ib(n,a,l,d,ua,g)}function ib(n,a,l,d,g,b){var E=ke(n),O=ke(a),L=E?Ve:yn(n),Y=O?Ve:yn(a);L=L==Ye?un:L,Y=Y==Ye?un:Y;var z=L==un,Q=Y==un,se=L==Y;if(se&&Qr(n)){if(!Qr(a))return!1;E=!0,z=!1}if(se&&!z)return b||(b=new or),E||Mt(n)?xd(n,a,l,d,g,b):xb(n,a,L,l,d,g,b);if(!(l&N)){var ce=z&&je.call(n,"__wrapped__"),be=Q&&je.call(a,"__wrapped__");if(ce||be){var Ee=ce?n.value():n,pe=be?a.value():a;return b||(b=new or),g(Ee,pe,l,d,b)}}return se?(b||(b=new or),Fb(n,a,l,d,g,b)):!1}function sb(n){return en(n)&&yn(n)==Ke}function Us(n,a,l,d){var g=l.length,b=g,E=!d;if(n==null)return!b;for(n=Ce(n);g--;){var O=l[g];if(E&&O[2]?O[1]!==n[O[0]]:!(O[0]in n))return!1}for(;++g<b;){O=l[g];var L=O[0],Y=n[L],z=O[1];if(E&&O[2]){if(Y===r&&!(L in n))return!1}else{var Q=new or;if(d)var se=d(Y,z,L,n,a,Q);if(!(se===r?ua(z,Y,N|A,d,Q):se))return!1}}return!0}function ed(n){if(!Qe(n)||Gb(n))return!1;var a=Lr(n)?sh:Xm;return a.test(gt(n))}function lb(n){return en(n)&&An(n)==P}function ob(n){return en(n)&&yn(n)==B}function ub(n){return en(n)&&Ii(n.length)&&!!We[An(n)]}function nd(n){return typeof n=="function"?n:n==null?Nn:typeof n=="object"?ke(n)?ad(n[0],n[1]):td(n):Tf(n)}function Hs(n){if(!ga(n))return gh(n);var a=[];for(var l in Ce(n))je.call(n,l)&&l!="constructor"&&a.push(l);return a}function db(n){if(!Qe(n))return $b(n);var a=ga(n),l=[];for(var d in n)d=="constructor"&&(a||!je.call(n,d))||l.push(d);return l}function $s(n,a){return n<a}function rd(n,a){var l=-1,d=Sn(n)?V(n.length):[];return zr(n,function(g,b,E){d[++l]=a(g,b,E)}),d}function td(n){var a=ll(n);return a.length==1&&a[0][2]?Md(a[0][0],a[0][1]):function(l){return l===n||Us(l,n,a)}}function ad(n,a){return ul(n)&&qd(a)?Md(yr(n),a):function(l){var d=yl(l,n);return d===r&&d===a?kl(l,n):ua(a,d,N|A)}}function mi(n,a,l,d,g){n!==a&&Cs(a,function(b,E){if(g||(g=new or),Qe(b))fb(n,a,E,l,mi,d,g);else{var O=d?d(fl(n,E),b,E+"",n,a,g):r;O===r&&(O=b),Ds(n,E,O)}},In)}function fb(n,a,l,d,g,b,E){var O=fl(n,l),L=fl(a,l),Y=E.get(L);if(Y){Ds(n,l,Y);return}var z=b?b(O,L,l+"",n,a,E):r,Q=z===r;if(Q){var se=ke(L),ce=!se&&Qr(L),be=!se&&!ce&&Mt(L);z=L,se||ce||be?ke(O)?z=O:rn(O)?z=On(O):ce?(Q=!1,z=hd(L,!0)):be?(Q=!1,z=bd(L,!0)):z=[]:ma(L)||ct(L)?(z=O,ct(O)?z=mf(O):(!Qe(O)||Lr(O))&&(z=Bd(L))):Q=!1}Q&&(E.set(L,z),g(z,L,d,b,E),E.delete(L)),Ds(n,l,z)}function id(n,a){var l=n.length;if(l)return a+=a<0?l:0,Fr(a,l)?n[a]:r}function sd(n,a,l){a.length?a=Je(a,function(b){return ke(b)?function(E){return dt(E,b.length===1?b[0]:b)}:b}):a=[Nn];var d=-1;a=Je(a,Dn(he()));var g=rd(n,function(b,E,O){var L=Je(a,function(Y){return Y(b)});return{criteria:L,index:++d,value:b}});return Dv(g,function(b,E){return Tb(b,E,l)})}function gb(n,a){return ld(n,a,function(l,d){return kl(n,d)})}function ld(n,a,l){for(var d=-1,g=a.length,b={};++d<g;){var E=a[d],O=dt(n,E);l(O,E)&&da(b,Zr(E,n),O)}return b}function cb(n){return function(a){return dt(a,n)}}function Ys(n,a,l,d){var g=d?Mv:wt,b=-1,E=a.length,O=n;for(n===a&&(a=On(a)),l&&(O=Je(n,Dn(l)));++b<E;)for(var L=0,Y=a[b],z=l?l(Y):Y;(L=g(O,z,L,d))>-1;)O!==n&&ai.call(O,L,1),ai.call(n,L,1);return n}function od(n,a){for(var l=n?a.length:0,d=l-1;l--;){var g=a[l];if(l==d||g!==b){var b=g;Fr(g)?ai.call(n,g,1):Zs(n,g)}}return n}function Ws(n,a){return n+li(Gu()*(a-n+1))}function mb(n,a,l,d){for(var g=-1,b=fn(si((a-n)/(l||1)),0),E=V(b);b--;)E[d?b:++g]=n,n+=l;return E}function zs(n,a){var l="";if(!n||a<1||a>W)return l;do a%2&&(l+=n),a=li(a/2),a&&(n+=n);while(a);return l}function Pe(n,a){return gl(Dd(n,a,Nn),n+"")}function vb(n){return Hu(Dt(n))}function hb(n,a){var l=Dt(n);return Ti(l,ut(a,0,l.length))}function da(n,a,l,d){if(!Qe(n))return n;a=Zr(a,n);for(var g=-1,b=a.length,E=b-1,O=n;O!=null&&++g<b;){var L=yr(a[g]),Y=l;if(L==="__proto__"||L==="constructor"||L==="prototype")return n;if(g!=E){var z=O[L];Y=d?d(z,L,O):r,Y===r&&(Y=Qe(z)?z:Fr(a[g+1])?[]:{})}sa(O,L,Y),O=O[L]}return n}var ud=oi?function(n,a){return oi.set(n,a),n}:Nn,bb=ii?function(n,a){return ii(n,"toString",{configurable:!0,enumerable:!1,value:Al(a),writable:!0})}:Nn;function pb(n){return Ti(Dt(n))}function Jn(n,a,l){var d=-1,g=n.length;a<0&&(a=-a>g?0:g+a),l=l>g?g:l,l<0&&(l+=g),g=a>l?0:l-a>>>0,a>>>=0;for(var b=V(g);++d<g;)b[d]=n[d+a];return b}function yb(n,a){var l;return zr(n,function(d,g,b){return l=a(d,g,b),!l}),!!l}function vi(n,a,l){var d=0,g=n==null?d:n.length;if(typeof a=="number"&&a===a&&g<=_e){for(;d<g;){var b=d+g>>>1,E=n[b];E!==null&&!Cn(E)&&(l?E<=a:E<a)?d=b+1:g=b}return g}return Xs(n,a,Nn,l)}function Xs(n,a,l,d){var g=0,b=n==null?0:n.length;if(b===0)return 0;a=l(a);for(var E=a!==a,O=a===null,L=Cn(a),Y=a===r;g<b;){var z=li((g+b)/2),Q=l(n[z]),se=Q!==r,ce=Q===null,be=Q===Q,Ee=Cn(Q);if(E)var pe=d||be;else Y?pe=be&&(d||se):O?pe=be&&se&&(d||!ce):L?pe=be&&se&&!ce&&(d||!Ee):ce||Ee?pe=!1:pe=d?Q<=a:Q<a;pe?g=z+1:b=z}return pn(b,ve)}function dd(n,a){for(var l=-1,d=n.length,g=0,b=[];++l<d;){var E=n[l],O=a?a(E):E;if(!l||!ur(O,L)){var L=O;b[g++]=E===0?0:E}}return b}function fd(n){return typeof n=="number"?n:Cn(n)?de:+n}function jn(n){if(typeof n=="string")return n;if(ke(n))return Je(n,jn)+"";if(Cn(n))return Ku?Ku.call(n):"";var a=n+"";return a=="0"&&1/n==-Z?"-0":a}function Xr(n,a,l){var d=-1,g=Wa,b=n.length,E=!0,O=[],L=O;if(l)E=!1,g=Ps;else if(b>=s){var Y=a?null:Ib(n);if(Y)return Xa(Y);E=!1,g=ea,L=new ot}else L=a?[]:O;e:for(;++d<b;){var z=n[d],Q=a?a(z):z;if(z=l||z!==0?z:0,E&&Q===Q){for(var se=L.length;se--;)if(L[se]===Q)continue e;a&&L.push(Q),O.push(z)}else g(L,Q,l)||(L!==O&&L.push(Q),O.push(z))}return O}function Zs(n,a){return a=Zr(a,n),n=jd(n,a),n==null||delete n[yr(Qn(a))]}function gd(n,a,l,d){return da(n,a,l(dt(n,a)),d)}function hi(n,a,l,d){for(var g=n.length,b=d?g:-1;(d?b--:++b<g)&&a(n[b],b,n););return l?Jn(n,d?0:b,d?b+1:g):Jn(n,d?b+1:0,d?g:b)}function cd(n,a){var l=n;return l instanceof Re&&(l=l.value()),ws(a,function(d,g){return g.func.apply(g.thisArg,$r([d],g.args))},l)}function Js(n,a,l){var d=n.length;if(d<2)return d?Xr(n[0]):[];for(var g=-1,b=V(d);++g<d;)for(var E=n[g],O=-1;++O<d;)O!=g&&(b[g]=la(b[g]||E,n[O],a,l));return Xr(vn(b,1),a,l)}function md(n,a,l){for(var d=-1,g=n.length,b=a.length,E={};++d<g;){var O=d<b?a[d]:r;l(E,n[d],O)}return E}function Qs(n){return rn(n)?n:[]}function el(n){return typeof n=="function"?n:Nn}function Zr(n,a){return ke(n)?n:ul(n,a)?[n]:Kd(qe(n))}var kb=Pe;function Jr(n,a,l){var d=n.length;return l=l===r?d:l,!a&&l>=d?n:Jn(n,a,l)}var vd=lh||function(n){return mn.clearTimeout(n)};function hd(n,a){if(a)return n.slice();var l=n.length,d=Mu?Mu(l):new n.constructor(l);return n.copy(d),d}function nl(n){var a=new n.constructor(n.byteLength);return new ri(a).set(new ri(n)),a}function _b(n,a){var l=a?nl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Ab(n){var a=new n.constructor(n.source,Qo.exec(n));return a.lastIndex=n.lastIndex,a}function Eb(n){return ia?Ce(ia.call(n)):{}}function bd(n,a){var l=a?nl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function pd(n,a){if(n!==a){var l=n!==r,d=n===null,g=n===n,b=Cn(n),E=a!==r,O=a===null,L=a===a,Y=Cn(a);if(!O&&!Y&&!b&&n>a||b&&E&&L&&!O&&!Y||d&&E&&L||!l&&L||!g)return 1;if(!d&&!b&&!Y&&n<a||Y&&l&&g&&!d&&!b||O&&l&&g||!E&&g||!L)return-1}return 0}function Tb(n,a,l){for(var d=-1,g=n.criteria,b=a.criteria,E=g.length,O=l.length;++d<E;){var L=pd(g[d],b[d]);if(L){if(d>=O)return L;var Y=l[d];return L*(Y=="desc"?-1:1)}}return n.index-a.index}function yd(n,a,l,d){for(var g=-1,b=n.length,E=l.length,O=-1,L=a.length,Y=fn(b-E,0),z=V(L+Y),Q=!d;++O<L;)z[O]=a[O];for(;++g<E;)(Q||g<b)&&(z[l[g]]=n[g]);for(;Y--;)z[O++]=n[g++];return z}function kd(n,a,l,d){for(var g=-1,b=n.length,E=-1,O=l.length,L=-1,Y=a.length,z=fn(b-O,0),Q=V(z+Y),se=!d;++g<z;)Q[g]=n[g];for(var ce=g;++L<Y;)Q[ce+L]=a[L];for(;++E<O;)(se||g<b)&&(Q[ce+l[E]]=n[g++]);return Q}function On(n,a){var l=-1,d=n.length;for(a||(a=V(d));++l<d;)a[l]=n[l];return a}function pr(n,a,l,d){var g=!l;l||(l={});for(var b=-1,E=a.length;++b<E;){var O=a[b],L=d?d(l[O],n[O],O,l,n):r;L===r&&(L=n[O]),g?Ir(l,O,L):sa(l,O,L)}return l}function Pb(n,a){return pr(n,ol(n),a)}function wb(n,a){return pr(n,Fd(n),a)}function bi(n,a){return function(l,d){var g=ke(l)?Nv:Wh,b=a?a():{};return g(l,n,he(d,2),b)}}function Lt(n){return Pe(function(a,l){var d=-1,g=l.length,b=g>1?l[g-1]:r,E=g>2?l[2]:r;for(b=n.length>3&&typeof b=="function"?(g--,b):r,E&&En(l[0],l[1],E)&&(b=g<3?r:b,g=1),a=Ce(a);++d<g;){var O=l[d];O&&n(a,O,d,b)}return a})}function _d(n,a){return function(l,d){if(l==null)return l;if(!Sn(l))return n(l,d);for(var g=l.length,b=a?g:-1,E=Ce(l);(a?b--:++b<g)&&d(E[b],b,E)!==!1;);return l}}function Ad(n){return function(a,l,d){for(var g=-1,b=Ce(a),E=d(a),O=E.length;O--;){var L=E[n?O:++g];if(l(b[L],L,b)===!1)break}return a}}function Rb(n,a,l){var d=a&_,g=fa(n);function b(){var E=this&&this!==mn&&this instanceof b?g:n;return E.apply(d?l:this,arguments)}return b}function Ed(n){return function(a){a=qe(a);var l=Rt(a)?lr(a):r,d=l?l[0]:a.charAt(0),g=l?Jr(l,1).join(""):a.slice(1);return d[n]()+g}}function Bt(n){return function(a){return ws(Af(_f(a).replace(bv,"")),n,"")}}function fa(n){return function(){var a=arguments;switch(a.length){case 0:return new n;case 1:return new n(a[0]);case 2:return new n(a[0],a[1]);case 3:return new n(a[0],a[1],a[2]);case 4:return new n(a[0],a[1],a[2],a[3]);case 5:return new n(a[0],a[1],a[2],a[3],a[4]);case 6:return new n(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new n(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var l=Ft(n.prototype),d=n.apply(l,a);return Qe(d)?d:l}}function Ob(n,a,l){var d=fa(n);function g(){for(var b=arguments.length,E=V(b),O=b,L=qt(g);O--;)E[O]=arguments[O];var Y=b<3&&E[0]!==L&&E[b-1]!==L?[]:Yr(E,L);if(b-=Y.length,b<l)return Od(n,a,pi,g.placeholder,r,E,Y,r,r,l-b);var z=this&&this!==mn&&this instanceof g?d:n;return Mn(z,this,E)}return g}function Td(n){return function(a,l,d){var g=Ce(a);if(!Sn(a)){var b=he(l,3);a=cn(a),l=function(O){return b(g[O],O,g)}}var E=n(a,l,d);return E>-1?g[b?a[E]:E]:r}}function Pd(n){return xr(function(a){var l=a.length,d=l,g=Xn.prototype.thru;for(n&&a.reverse();d--;){var b=a[d];if(typeof b!="function")throw new zn(u);if(g&&!E&&Ai(b)=="wrapper")var E=new Xn([],!0)}for(d=E?d:l;++d<l;){b=a[d];var O=Ai(b),L=O=="wrapper"?sl(b):r;L&&dl(L[0])&&L[1]==(D|R|I|C)&&!L[4].length&&L[9]==1?E=E[Ai(L[0])].apply(E,L[3]):E=b.length==1&&dl(b)?E[O]():E.thru(b)}return function(){var Y=arguments,z=Y[0];if(E&&Y.length==1&&ke(z))return E.plant(z).value();for(var Q=0,se=l?a[Q].apply(this,Y):z;++Q<l;)se=a[Q].call(this,se);return se}})}function pi(n,a,l,d,g,b,E,O,L,Y){var z=a&D,Q=a&_,se=a&w,ce=a&(R|j),be=a&$,Ee=se?r:fa(n);function pe(){for(var we=arguments.length,Ie=V(we),Vn=we;Vn--;)Ie[Vn]=arguments[Vn];if(ce)var Tn=qt(pe),Gn=Cv(Ie,Tn);if(d&&(Ie=yd(Ie,d,g,ce)),b&&(Ie=kd(Ie,b,E,ce)),we-=Gn,ce&&we<Y){var tn=Yr(Ie,Tn);return Od(n,a,pi,pe.placeholder,l,Ie,tn,O,L,Y-we)}var dr=Q?l:this,qr=se?dr[n]:n;return we=Ie.length,O?Ie=Wb(Ie,O):be&&we>1&&Ie.reverse(),z&&L<we&&(Ie.length=L),this&&this!==mn&&this instanceof pe&&(qr=Ee||fa(qr)),qr.apply(dr,Ie)}return pe}function wd(n,a){return function(l,d){return rb(l,n,a(d),{})}}function yi(n,a){return function(l,d){var g;if(l===r&&d===r)return a;if(l!==r&&(g=l),d!==r){if(g===r)return d;typeof l=="string"||typeof d=="string"?(l=jn(l),d=jn(d)):(l=fd(l),d=fd(d)),g=n(l,d)}return g}}function rl(n){return xr(function(a){return a=Je(a,Dn(he())),Pe(function(l){var d=this;return n(a,function(g){return Mn(g,d,l)})})})}function ki(n,a){a=a===r?" ":jn(a);var l=a.length;if(l<2)return l?zs(a,n):a;var d=zs(a,si(n/Ot(a)));return Rt(a)?Jr(lr(d),0,n).join(""):d.slice(0,n)}function Sb(n,a,l,d){var g=a&_,b=fa(n);function E(){for(var O=-1,L=arguments.length,Y=-1,z=d.length,Q=V(z+L),se=this&&this!==mn&&this instanceof E?b:n;++Y<z;)Q[Y]=d[Y];for(;L--;)Q[Y++]=arguments[++O];return Mn(se,g?l:this,Q)}return E}function Rd(n){return function(a,l,d){return d&&typeof d!="number"&&En(a,l,d)&&(l=d=r),a=Br(a),l===r?(l=a,a=0):l=Br(l),d=d===r?a<l?1:-1:Br(d),mb(a,l,d,n)}}function _i(n){return function(a,l){return typeof a=="string"&&typeof l=="string"||(a=er(a),l=er(l)),n(a,l)}}function Od(n,a,l,d,g,b,E,O,L,Y){var z=a&R,Q=z?E:r,se=z?r:E,ce=z?b:r,be=z?r:b;a|=z?I:G,a&=~(z?G:I),a&S||(a&=-4);var Ee=[n,a,g,ce,Q,be,se,O,L,Y],pe=l.apply(r,Ee);return dl(n)&&Cd(pe,Ee),pe.placeholder=d,Vd(pe,n,a)}function tl(n){var a=dn[n];return function(l,d){if(l=er(l),d=d==null?0:pn(Ae(d),292),d&&Vu(l)){var g=(qe(l)+"e").split("e"),b=a(g[0]+"e"+(+g[1]+d));return g=(qe(b)+"e").split("e"),+(g[0]+"e"+(+g[1]-d))}return a(l)}}var Ib=Nt&&1/Xa(new Nt([,-0]))[1]==Z?function(n){return new Nt(n)}:Pl;function Sd(n){return function(a){var l=yn(a);return l==Ke?Fs(a):l==B?Yv(a):jv(a,n(a))}}function Nr(n,a,l,d,g,b,E,O){var L=a&w;if(!L&&typeof n!="function")throw new zn(u);var Y=d?d.length:0;if(Y||(a&=-97,d=g=r),E=E===r?E:fn(Ae(E),0),O=O===r?O:Ae(O),Y-=g?g.length:0,a&G){var z=d,Q=g;d=g=r}var se=L?r:sl(n),ce=[n,a,l,d,g,z,Q,b,E,O];if(se&&Hb(ce,se),n=ce[0],a=ce[1],l=ce[2],d=ce[3],g=ce[4],O=ce[9]=ce[9]===r?L?0:n.length:fn(ce[9]-Y,0),!O&&a&(R|j)&&(a&=-25),!a||a==_)var be=Rb(n,a,l);else a==R||a==j?be=Ob(n,a,O):(a==I||a==(_|I))&&!g.length?be=Sb(n,a,l,d):be=pi.apply(r,ce);var Ee=se?ud:Cd;return Vd(Ee(be,ce),n,a)}function Id(n,a,l,d){return n===r||ur(n,It[l])&&!je.call(d,l)?a:n}function Nd(n,a,l,d,g,b){return Qe(n)&&Qe(a)&&(b.set(a,n),mi(n,a,r,Nd,b),b.delete(a)),n}function Nb(n){return ma(n)?r:n}function xd(n,a,l,d,g,b){var E=l&N,O=n.length,L=a.length;if(O!=L&&!(E&&L>O))return!1;var Y=b.get(n),z=b.get(a);if(Y&&z)return Y==a&&z==n;var Q=-1,se=!0,ce=l&A?new ot:r;for(b.set(n,a),b.set(a,n);++Q<O;){var be=n[Q],Ee=a[Q];if(d)var pe=E?d(Ee,be,Q,a,n,b):d(be,Ee,Q,n,a,b);if(pe!==r){if(pe)continue;se=!1;break}if(ce){if(!Rs(a,function(we,Ie){if(!ea(ce,Ie)&&(be===we||g(be,we,l,d,b)))return ce.push(Ie)})){se=!1;break}}else if(!(be===Ee||g(be,Ee,l,d,b))){se=!1;break}}return b.delete(n),b.delete(a),se}function xb(n,a,l,d,g,b,E){switch(l){case Le:if(n.byteLength!=a.byteLength||n.byteOffset!=a.byteOffset)return!1;n=n.buffer,a=a.buffer;case Se:return!(n.byteLength!=a.byteLength||!b(new ri(n),new ri(a)));case Te:case xe:case ln:return ur(+n,+a);case Xe:return n.name==a.name&&n.message==a.message;case P:case U:return n==a+"";case Ke:var O=Fs;case B:var L=d&N;if(O||(O=Xa),n.size!=a.size&&!L)return!1;var Y=E.get(n);if(Y)return Y==a;d|=A,E.set(n,a);var z=xd(O(n),O(a),d,g,b,E);return E.delete(n),z;case le:if(ia)return ia.call(n)==ia.call(a)}return!1}function Fb(n,a,l,d,g,b){var E=l&N,O=al(n),L=O.length,Y=al(a),z=Y.length;if(L!=z&&!E)return!1;for(var Q=L;Q--;){var se=O[Q];if(!(E?se in a:je.call(a,se)))return!1}var ce=b.get(n),be=b.get(a);if(ce&&be)return ce==a&&be==n;var Ee=!0;b.set(n,a),b.set(a,n);for(var pe=E;++Q<L;){se=O[Q];var we=n[se],Ie=a[se];if(d)var Vn=E?d(Ie,we,se,a,n,b):d(we,Ie,se,n,a,b);if(!(Vn===r?we===Ie||g(we,Ie,l,d,b):Vn)){Ee=!1;break}pe||(pe=se=="constructor")}if(Ee&&!pe){var Tn=n.constructor,Gn=a.constructor;Tn!=Gn&&"constructor"in n&&"constructor"in a&&!(typeof Tn=="function"&&Tn instanceof Tn&&typeof Gn=="function"&&Gn instanceof Gn)&&(Ee=!1)}return b.delete(n),b.delete(a),Ee}function xr(n){return gl(Dd(n,r,Yd),n+"")}function al(n){return Ju(n,cn,ol)}function il(n){return Ju(n,In,Fd)}var sl=oi?function(n){return oi.get(n)}:Pl;function Ai(n){for(var a=n.name+"",l=xt[a],d=je.call(xt,a)?l.length:0;d--;){var g=l[d],b=g.func;if(b==null||b==n)return g.name}return a}function qt(n){var a=je.call(h,"placeholder")?h:n;return a.placeholder}function he(){var n=h.iteratee||El;return n=n===El?nd:n,arguments.length?n(arguments[0],arguments[1]):n}function Ei(n,a){var l=n.__data__;return Vb(a)?l[typeof a=="string"?"string":"hash"]:l.map}function ll(n){for(var a=cn(n),l=a.length;l--;){var d=a[l],g=n[d];a[l]=[d,g,qd(g)]}return a}function ft(n,a){var l=Uv(n,a);return ed(l)?l:r}function Lb(n){var a=je.call(n,st),l=n[st];try{n[st]=r;var d=!0}catch{}var g=ei.call(n);return d&&(a?n[st]=l:delete n[st]),g}var ol=Bs?function(n){return n==null?[]:(n=Ce(n),Hr(Bs(n),function(a){return ju.call(n,a)}))}:wl,Fd=Bs?function(n){for(var a=[];n;)$r(a,ol(n)),n=ti(n);return a}:wl,yn=An;(qs&&yn(new qs(new ArrayBuffer(1)))!=Le||ra&&yn(new ra)!=Ke||Ms&&yn(Ms.resolve())!=sr||Nt&&yn(new Nt)!=B||ta&&yn(new ta)!=te)&&(yn=function(n){var a=An(n),l=a==un?n.constructor:r,d=l?gt(l):"";if(d)switch(d){case hh:return Le;case bh:return Ke;case ph:return sr;case yh:return B;case kh:return te}return a});function Bb(n,a,l){for(var d=-1,g=l.length;++d<g;){var b=l[d],E=b.size;switch(b.type){case"drop":n+=E;break;case"dropRight":a-=E;break;case"take":a=pn(a,n+E);break;case"takeRight":n=fn(n,a-E);break}}return{start:n,end:a}}function qb(n){var a=n.match(Gm);return a?a[1].split(Km):[]}function Ld(n,a,l){a=Zr(a,n);for(var d=-1,g=a.length,b=!1;++d<g;){var E=yr(a[d]);if(!(b=n!=null&&l(n,E)))break;n=n[E]}return b||++d!=g?b:(g=n==null?0:n.length,!!g&&Ii(g)&&Fr(E,g)&&(ke(n)||ct(n)))}function Mb(n){var a=n.length,l=new n.constructor(a);return a&&typeof n[0]=="string"&&je.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Bd(n){return typeof n.constructor=="function"&&!ga(n)?Ft(ti(n)):{}}function Db(n,a,l){var d=n.constructor;switch(a){case Se:return nl(n);case Te:case xe:return new d(+n);case Le:return _b(n,l);case bn:case Ur:case $n:case Zt:case tt:case at:case Jt:case Tt:case Qt:return bd(n,l);case Ke:return new d;case ln:case U:return new d(n);case P:return Ab(n);case B:return new d;case le:return Eb(n)}}function jb(n,a){var l=a.length;if(!l)return n;var d=l-1;return a[d]=(l>1?"& ":"")+a[d],a=a.join(l>2?", ":" "),n.replace(Vm,`{
/* [wrapped with `+a+`] */
`)}function Cb(n){return ke(n)||ct(n)||!!(Cu&&n&&n[Cu])}function Fr(n,a){var l=typeof n;return a=a??W,!!a&&(l=="number"||l!="symbol"&&Jm.test(n))&&n>-1&&n%1==0&&n<a}function En(n,a,l){if(!Qe(l))return!1;var d=typeof a;return(d=="number"?Sn(l)&&Fr(a,l.length):d=="string"&&a in l)?ur(l[a],n):!1}function ul(n,a){if(ke(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Cn(n)?!0:Mm.test(n)||!qm.test(n)||a!=null&&n in Ce(a)}function Vb(n){var a=typeof n;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?n!=="__proto__":n===null}function dl(n){var a=Ai(n),l=h[a];if(typeof l!="function"||!(a in Re.prototype))return!1;if(n===l)return!0;var d=sl(l);return!!d&&n===d[0]}function Gb(n){return!!qu&&qu in n}var Kb=Ja?Lr:Rl;function ga(n){var a=n&&n.constructor,l=typeof a=="function"&&a.prototype||It;return n===l}function qd(n){return n===n&&!Qe(n)}function Md(n,a){return function(l){return l==null?!1:l[n]===a&&(a!==r||n in Ce(l))}}function Ub(n){var a=Oi(n,function(d){return l.size===m&&l.clear(),d}),l=a.cache;return a}function Hb(n,a){var l=n[1],d=a[1],g=l|d,b=g<(_|w|D),E=d==D&&l==R||d==D&&l==C&&n[7].length<=a[8]||d==(D|C)&&a[7].length<=a[8]&&l==R;if(!(b||E))return n;d&_&&(n[2]=a[2],g|=l&_?0:S);var O=a[3];if(O){var L=n[3];n[3]=L?yd(L,O,a[4]):O,n[4]=L?Yr(n[3],v):a[4]}return O=a[5],O&&(L=n[5],n[5]=L?kd(L,O,a[6]):O,n[6]=L?Yr(n[5],v):a[6]),O=a[7],O&&(n[7]=O),d&D&&(n[8]=n[8]==null?a[8]:pn(n[8],a[8])),n[9]==null&&(n[9]=a[9]),n[0]=a[0],n[1]=g,n}function $b(n){var a=[];if(n!=null)for(var l in Ce(n))a.push(l);return a}function Yb(n){return ei.call(n)}function Dd(n,a,l){return a=fn(a===r?n.length-1:a,0),function(){for(var d=arguments,g=-1,b=fn(d.length-a,0),E=V(b);++g<b;)E[g]=d[a+g];g=-1;for(var O=V(a+1);++g<a;)O[g]=d[g];return O[a]=l(E),Mn(n,this,O)}}function jd(n,a){return a.length<2?n:dt(n,Jn(a,0,-1))}function Wb(n,a){for(var l=n.length,d=pn(a.length,l),g=On(n);d--;){var b=a[d];n[d]=Fr(b,l)?g[b]:r}return n}function fl(n,a){if(!(a==="constructor"&&typeof n[a]=="function")&&a!="__proto__")return n[a]}var Cd=Gd(ud),ca=uh||function(n,a){return mn.setTimeout(n,a)},gl=Gd(bb);function Vd(n,a,l){var d=a+"";return gl(n,jb(d,zb(qb(d),l)))}function Gd(n){var a=0,l=0;return function(){var d=ch(),g=q-(d-l);if(l=d,g>0){if(++a>=K)return arguments[0]}else a=0;return n.apply(r,arguments)}}function Ti(n,a){var l=-1,d=n.length,g=d-1;for(a=a===r?d:a;++l<a;){var b=Ws(l,g),E=n[b];n[b]=n[l],n[l]=E}return n.length=a,n}var Kd=Ub(function(n){var a=[];return n.charCodeAt(0)===46&&a.push(""),n.replace(Dm,function(l,d,g,b){a.push(g?b.replace($m,"$1"):d||l)}),a});function yr(n){if(typeof n=="string"||Cn(n))return n;var a=n+"";return a=="0"&&1/n==-Z?"-0":a}function gt(n){if(n!=null){try{return Qa.call(n)}catch{}try{return n+""}catch{}}return""}function zb(n,a){return Wn(_n,function(l){var d="_."+l[0];a&l[1]&&!Wa(n,d)&&n.push(d)}),n.sort()}function Ud(n){if(n instanceof Re)return n.clone();var a=new Xn(n.__wrapped__,n.__chain__);return a.__actions__=On(n.__actions__),a.__index__=n.__index__,a.__values__=n.__values__,a}function Xb(n,a,l){(l?En(n,a,l):a===r)?a=1:a=fn(Ae(a),0);var d=n==null?0:n.length;if(!d||a<1)return[];for(var g=0,b=0,E=V(si(d/a));g<d;)E[b++]=Jn(n,g,g+=a);return E}function Zb(n){for(var a=-1,l=n==null?0:n.length,d=0,g=[];++a<l;){var b=n[a];b&&(g[d++]=b)}return g}function Jb(){var n=arguments.length;if(!n)return[];for(var a=V(n-1),l=arguments[0],d=n;d--;)a[d-1]=arguments[d];return $r(ke(l)?On(l):[l],vn(a,1))}var Qb=Pe(function(n,a){return rn(n)?la(n,vn(a,1,rn,!0)):[]}),ep=Pe(function(n,a){var l=Qn(a);return rn(l)&&(l=r),rn(n)?la(n,vn(a,1,rn,!0),he(l,2)):[]}),np=Pe(function(n,a){var l=Qn(a);return rn(l)&&(l=r),rn(n)?la(n,vn(a,1,rn,!0),r,l):[]});function rp(n,a,l){var d=n==null?0:n.length;return d?(a=l||a===r?1:Ae(a),Jn(n,a<0?0:a,d)):[]}function tp(n,a,l){var d=n==null?0:n.length;return d?(a=l||a===r?1:Ae(a),a=d-a,Jn(n,0,a<0?0:a)):[]}function ap(n,a){return n&&n.length?hi(n,he(a,3),!0,!0):[]}function ip(n,a){return n&&n.length?hi(n,he(a,3),!0):[]}function sp(n,a,l,d){var g=n==null?0:n.length;return g?(l&&typeof l!="number"&&En(n,a,l)&&(l=0,d=g),Jh(n,a,l,d)):[]}function Hd(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var g=l==null?0:Ae(l);return g<0&&(g=fn(d+g,0)),za(n,he(a,3),g)}function $d(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var g=d-1;return l!==r&&(g=Ae(l),g=l<0?fn(d+g,0):pn(g,d-1)),za(n,he(a,3),g,!0)}function Yd(n){var a=n==null?0:n.length;return a?vn(n,1):[]}function lp(n){var a=n==null?0:n.length;return a?vn(n,Z):[]}function op(n,a){var l=n==null?0:n.length;return l?(a=a===r?1:Ae(a),vn(n,a)):[]}function up(n){for(var a=-1,l=n==null?0:n.length,d={};++a<l;){var g=n[a];d[g[0]]=g[1]}return d}function Wd(n){return n&&n.length?n[0]:r}function dp(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var g=l==null?0:Ae(l);return g<0&&(g=fn(d+g,0)),wt(n,a,g)}function fp(n){var a=n==null?0:n.length;return a?Jn(n,0,-1):[]}var gp=Pe(function(n){var a=Je(n,Qs);return a.length&&a[0]===n[0]?Ks(a):[]}),cp=Pe(function(n){var a=Qn(n),l=Je(n,Qs);return a===Qn(l)?a=r:l.pop(),l.length&&l[0]===n[0]?Ks(l,he(a,2)):[]}),mp=Pe(function(n){var a=Qn(n),l=Je(n,Qs);return a=typeof a=="function"?a:r,a&&l.pop(),l.length&&l[0]===n[0]?Ks(l,r,a):[]});function vp(n,a){return n==null?"":fh.call(n,a)}function Qn(n){var a=n==null?0:n.length;return a?n[a-1]:r}function hp(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var g=d;return l!==r&&(g=Ae(l),g=g<0?fn(d+g,0):pn(g,d-1)),a===a?zv(n,a,g):za(n,Ou,g,!0)}function bp(n,a){return n&&n.length?id(n,Ae(a)):r}var pp=Pe(zd);function zd(n,a){return n&&n.length&&a&&a.length?Ys(n,a):n}function yp(n,a,l){return n&&n.length&&a&&a.length?Ys(n,a,he(l,2)):n}function kp(n,a,l){return n&&n.length&&a&&a.length?Ys(n,a,r,l):n}var _p=xr(function(n,a){var l=n==null?0:n.length,d=js(n,a);return od(n,Je(a,function(g){return Fr(g,l)?+g:g}).sort(pd)),d});function Ap(n,a){var l=[];if(!(n&&n.length))return l;var d=-1,g=[],b=n.length;for(a=he(a,3);++d<b;){var E=n[d];a(E,d,n)&&(l.push(E),g.push(d))}return od(n,g),l}function cl(n){return n==null?n:vh.call(n)}function Ep(n,a,l){var d=n==null?0:n.length;return d?(l&&typeof l!="number"&&En(n,a,l)?(a=0,l=d):(a=a==null?0:Ae(a),l=l===r?d:Ae(l)),Jn(n,a,l)):[]}function Tp(n,a){return vi(n,a)}function Pp(n,a,l){return Xs(n,a,he(l,2))}function wp(n,a){var l=n==null?0:n.length;if(l){var d=vi(n,a);if(d<l&&ur(n[d],a))return d}return-1}function Rp(n,a){return vi(n,a,!0)}function Op(n,a,l){return Xs(n,a,he(l,2),!0)}function Sp(n,a){var l=n==null?0:n.length;if(l){var d=vi(n,a,!0)-1;if(ur(n[d],a))return d}return-1}function Ip(n){return n&&n.length?dd(n):[]}function Np(n,a){return n&&n.length?dd(n,he(a,2)):[]}function xp(n){var a=n==null?0:n.length;return a?Jn(n,1,a):[]}function Fp(n,a,l){return n&&n.length?(a=l||a===r?1:Ae(a),Jn(n,0,a<0?0:a)):[]}function Lp(n,a,l){var d=n==null?0:n.length;return d?(a=l||a===r?1:Ae(a),a=d-a,Jn(n,a<0?0:a,d)):[]}function Bp(n,a){return n&&n.length?hi(n,he(a,3),!1,!0):[]}function qp(n,a){return n&&n.length?hi(n,he(a,3)):[]}var Mp=Pe(function(n){return Xr(vn(n,1,rn,!0))}),Dp=Pe(function(n){var a=Qn(n);return rn(a)&&(a=r),Xr(vn(n,1,rn,!0),he(a,2))}),jp=Pe(function(n){var a=Qn(n);return a=typeof a=="function"?a:r,Xr(vn(n,1,rn,!0),r,a)});function Cp(n){return n&&n.length?Xr(n):[]}function Vp(n,a){return n&&n.length?Xr(n,he(a,2)):[]}function Gp(n,a){return a=typeof a=="function"?a:r,n&&n.length?Xr(n,r,a):[]}function ml(n){if(!(n&&n.length))return[];var a=0;return n=Hr(n,function(l){if(rn(l))return a=fn(l.length,a),!0}),Ns(a,function(l){return Je(n,Os(l))})}function Xd(n,a){if(!(n&&n.length))return[];var l=ml(n);return a==null?l:Je(l,function(d){return Mn(a,r,d)})}var Kp=Pe(function(n,a){return rn(n)?la(n,a):[]}),Up=Pe(function(n){return Js(Hr(n,rn))}),Hp=Pe(function(n){var a=Qn(n);return rn(a)&&(a=r),Js(Hr(n,rn),he(a,2))}),$p=Pe(function(n){var a=Qn(n);return a=typeof a=="function"?a:r,Js(Hr(n,rn),r,a)}),Yp=Pe(ml);function Wp(n,a){return md(n||[],a||[],sa)}function zp(n,a){return md(n||[],a||[],da)}var Xp=Pe(function(n){var a=n.length,l=a>1?n[a-1]:r;return l=typeof l=="function"?(n.pop(),l):r,Xd(n,l)});function Zd(n){var a=h(n);return a.__chain__=!0,a}function Zp(n,a){return a(n),n}function Pi(n,a){return a(n)}var Jp=xr(function(n){var a=n.length,l=a?n[0]:0,d=this.__wrapped__,g=function(b){return js(b,n)};return a>1||this.__actions__.length||!(d instanceof Re)||!Fr(l)?this.thru(g):(d=d.slice(l,+l+(a?1:0)),d.__actions__.push({func:Pi,args:[g],thisArg:r}),new Xn(d,this.__chain__).thru(function(b){return a&&!b.length&&b.push(r),b}))});function Qp(){return Zd(this)}function e0(){return new Xn(this.value(),this.__chain__)}function n0(){this.__values__===r&&(this.__values__=gf(this.value()));var n=this.__index__>=this.__values__.length,a=n?r:this.__values__[this.__index__++];return{done:n,value:a}}function r0(){return this}function t0(n){for(var a,l=this;l instanceof di;){var d=Ud(l);d.__index__=0,d.__values__=r,a?g.__wrapped__=d:a=d;var g=d;l=l.__wrapped__}return g.__wrapped__=n,a}function a0(){var n=this.__wrapped__;if(n instanceof Re){var a=n;return this.__actions__.length&&(a=new Re(this)),a=a.reverse(),a.__actions__.push({func:Pi,args:[cl],thisArg:r}),new Xn(a,this.__chain__)}return this.thru(cl)}function i0(){return cd(this.__wrapped__,this.__actions__)}var s0=bi(function(n,a,l){je.call(n,l)?++n[l]:Ir(n,l,1)});function l0(n,a,l){var d=ke(n)?wu:Zh;return l&&En(n,a,l)&&(a=r),d(n,he(a,3))}function o0(n,a){var l=ke(n)?Hr:Xu;return l(n,he(a,3))}var u0=Td(Hd),d0=Td($d);function f0(n,a){return vn(wi(n,a),1)}function g0(n,a){return vn(wi(n,a),Z)}function c0(n,a,l){return l=l===r?1:Ae(l),vn(wi(n,a),l)}function Jd(n,a){var l=ke(n)?Wn:zr;return l(n,he(a,3))}function Qd(n,a){var l=ke(n)?xv:zu;return l(n,he(a,3))}var m0=bi(function(n,a,l){je.call(n,l)?n[l].push(a):Ir(n,l,[a])});function v0(n,a,l,d){n=Sn(n)?n:Dt(n),l=l&&!d?Ae(l):0;var g=n.length;return l<0&&(l=fn(g+l,0)),Ni(n)?l<=g&&n.indexOf(a,l)>-1:!!g&&wt(n,a,l)>-1}var h0=Pe(function(n,a,l){var d=-1,g=typeof a=="function",b=Sn(n)?V(n.length):[];return zr(n,function(E){b[++d]=g?Mn(a,E,l):oa(E,a,l)}),b}),b0=bi(function(n,a,l){Ir(n,l,a)});function wi(n,a){var l=ke(n)?Je:rd;return l(n,he(a,3))}function p0(n,a,l,d){return n==null?[]:(ke(a)||(a=a==null?[]:[a]),l=d?r:l,ke(l)||(l=l==null?[]:[l]),sd(n,a,l))}var y0=bi(function(n,a,l){n[l?0:1].push(a)},function(){return[[],[]]});function k0(n,a,l){var d=ke(n)?ws:Iu,g=arguments.length<3;return d(n,he(a,4),l,g,zr)}function _0(n,a,l){var d=ke(n)?Fv:Iu,g=arguments.length<3;return d(n,he(a,4),l,g,zu)}function A0(n,a){var l=ke(n)?Hr:Xu;return l(n,Si(he(a,3)))}function E0(n){var a=ke(n)?Hu:vb;return a(n)}function T0(n,a,l){(l?En(n,a,l):a===r)?a=1:a=Ae(a);var d=ke(n)?$h:hb;return d(n,a)}function P0(n){var a=ke(n)?Yh:pb;return a(n)}function w0(n){if(n==null)return 0;if(Sn(n))return Ni(n)?Ot(n):n.length;var a=yn(n);return a==Ke||a==B?n.size:Hs(n).length}function R0(n,a,l){var d=ke(n)?Rs:yb;return l&&En(n,a,l)&&(a=r),d(n,he(a,3))}var O0=Pe(function(n,a){if(n==null)return[];var l=a.length;return l>1&&En(n,a[0],a[1])?a=[]:l>2&&En(a[0],a[1],a[2])&&(a=[a[0]]),sd(n,vn(a,1),[])}),Ri=oh||function(){return mn.Date.now()};function S0(n,a){if(typeof a!="function")throw new zn(u);return n=Ae(n),function(){if(--n<1)return a.apply(this,arguments)}}function ef(n,a,l){return a=l?r:a,a=n&&a==null?n.length:a,Nr(n,D,r,r,r,r,a)}function nf(n,a){var l;if(typeof a!="function")throw new zn(u);return n=Ae(n),function(){return--n>0&&(l=a.apply(this,arguments)),n<=1&&(a=r),l}}var vl=Pe(function(n,a,l){var d=_;if(l.length){var g=Yr(l,qt(vl));d|=I}return Nr(n,d,a,l,g)}),rf=Pe(function(n,a,l){var d=_|w;if(l.length){var g=Yr(l,qt(rf));d|=I}return Nr(a,d,n,l,g)});function tf(n,a,l){a=l?r:a;var d=Nr(n,R,r,r,r,r,r,a);return d.placeholder=tf.placeholder,d}function af(n,a,l){a=l?r:a;var d=Nr(n,j,r,r,r,r,r,a);return d.placeholder=af.placeholder,d}function sf(n,a,l){var d,g,b,E,O,L,Y=0,z=!1,Q=!1,se=!0;if(typeof n!="function")throw new zn(u);a=er(a)||0,Qe(l)&&(z=!!l.leading,Q="maxWait"in l,b=Q?fn(er(l.maxWait)||0,a):b,se="trailing"in l?!!l.trailing:se);function ce(tn){var dr=d,qr=g;return d=g=r,Y=tn,E=n.apply(qr,dr),E}function be(tn){return Y=tn,O=ca(we,a),z?ce(tn):E}function Ee(tn){var dr=tn-L,qr=tn-Y,Pf=a-dr;return Q?pn(Pf,b-qr):Pf}function pe(tn){var dr=tn-L,qr=tn-Y;return L===r||dr>=a||dr<0||Q&&qr>=b}function we(){var tn=Ri();if(pe(tn))return Ie(tn);O=ca(we,Ee(tn))}function Ie(tn){return O=r,se&&d?ce(tn):(d=g=r,E)}function Vn(){O!==r&&vd(O),Y=0,d=L=g=O=r}function Tn(){return O===r?E:Ie(Ri())}function Gn(){var tn=Ri(),dr=pe(tn);if(d=arguments,g=this,L=tn,dr){if(O===r)return be(L);if(Q)return vd(O),O=ca(we,a),ce(L)}return O===r&&(O=ca(we,a)),E}return Gn.cancel=Vn,Gn.flush=Tn,Gn}var I0=Pe(function(n,a){return Wu(n,1,a)}),N0=Pe(function(n,a,l){return Wu(n,er(a)||0,l)});function x0(n){return Nr(n,$)}function Oi(n,a){if(typeof n!="function"||a!=null&&typeof a!="function")throw new zn(u);var l=function(){var d=arguments,g=a?a.apply(this,d):d[0],b=l.cache;if(b.has(g))return b.get(g);var E=n.apply(this,d);return l.cache=b.set(g,E)||b,E};return l.cache=new(Oi.Cache||Sr),l}Oi.Cache=Sr;function Si(n){if(typeof n!="function")throw new zn(u);return function(){var a=arguments;switch(a.length){case 0:return!n.call(this);case 1:return!n.call(this,a[0]);case 2:return!n.call(this,a[0],a[1]);case 3:return!n.call(this,a[0],a[1],a[2])}return!n.apply(this,a)}}function F0(n){return nf(2,n)}var L0=kb(function(n,a){a=a.length==1&&ke(a[0])?Je(a[0],Dn(he())):Je(vn(a,1),Dn(he()));var l=a.length;return Pe(function(d){for(var g=-1,b=pn(d.length,l);++g<b;)d[g]=a[g].call(this,d[g]);return Mn(n,this,d)})}),hl=Pe(function(n,a){var l=Yr(a,qt(hl));return Nr(n,I,r,a,l)}),lf=Pe(function(n,a){var l=Yr(a,qt(lf));return Nr(n,G,r,a,l)}),B0=xr(function(n,a){return Nr(n,C,r,r,r,a)});function q0(n,a){if(typeof n!="function")throw new zn(u);return a=a===r?a:Ae(a),Pe(n,a)}function M0(n,a){if(typeof n!="function")throw new zn(u);return a=a==null?0:fn(Ae(a),0),Pe(function(l){var d=l[a],g=Jr(l,0,a);return d&&$r(g,d),Mn(n,this,g)})}function D0(n,a,l){var d=!0,g=!0;if(typeof n!="function")throw new zn(u);return Qe(l)&&(d="leading"in l?!!l.leading:d,g="trailing"in l?!!l.trailing:g),sf(n,a,{leading:d,maxWait:a,trailing:g})}function j0(n){return ef(n,1)}function C0(n,a){return hl(el(a),n)}function V0(){if(!arguments.length)return[];var n=arguments[0];return ke(n)?n:[n]}function G0(n){return Zn(n,k)}function K0(n,a){return a=typeof a=="function"?a:r,Zn(n,k,a)}function U0(n){return Zn(n,p|k)}function H0(n,a){return a=typeof a=="function"?a:r,Zn(n,p|k,a)}function $0(n,a){return a==null||Yu(n,a,cn(a))}function ur(n,a){return n===a||n!==n&&a!==a}var Y0=_i(Gs),W0=_i(function(n,a){return n>=a}),ct=Qu(function(){return arguments}())?Qu:function(n){return en(n)&&je.call(n,"callee")&&!ju.call(n,"callee")},ke=V.isArray,z0=ku?Dn(ku):tb;function Sn(n){return n!=null&&Ii(n.length)&&!Lr(n)}function rn(n){return en(n)&&Sn(n)}function X0(n){return n===!0||n===!1||en(n)&&An(n)==Te}var Qr=dh||Rl,Z0=_u?Dn(_u):ab;function J0(n){return en(n)&&n.nodeType===1&&!ma(n)}function Q0(n){if(n==null)return!0;if(Sn(n)&&(ke(n)||typeof n=="string"||typeof n.splice=="function"||Qr(n)||Mt(n)||ct(n)))return!n.length;var a=yn(n);if(a==Ke||a==B)return!n.size;if(ga(n))return!Hs(n).length;for(var l in n)if(je.call(n,l))return!1;return!0}function ey(n,a){return ua(n,a)}function ny(n,a,l){l=typeof l=="function"?l:r;var d=l?l(n,a):r;return d===r?ua(n,a,r,l):!!d}function bl(n){if(!en(n))return!1;var a=An(n);return a==Xe||a==nn||typeof n.message=="string"&&typeof n.name=="string"&&!ma(n)}function ry(n){return typeof n=="number"&&Vu(n)}function Lr(n){if(!Qe(n))return!1;var a=An(n);return a==Ze||a==Rn||a==Ge||a==Hn}function of(n){return typeof n=="number"&&n==Ae(n)}function Ii(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=W}function Qe(n){var a=typeof n;return n!=null&&(a=="object"||a=="function")}function en(n){return n!=null&&typeof n=="object"}var uf=Au?Dn(Au):sb;function ty(n,a){return n===a||Us(n,a,ll(a))}function ay(n,a,l){return l=typeof l=="function"?l:r,Us(n,a,ll(a),l)}function iy(n){return df(n)&&n!=+n}function sy(n){if(Kb(n))throw new ye(o);return ed(n)}function ly(n){return n===null}function oy(n){return n==null}function df(n){return typeof n=="number"||en(n)&&An(n)==ln}function ma(n){if(!en(n)||An(n)!=un)return!1;var a=ti(n);if(a===null)return!0;var l=je.call(a,"constructor")&&a.constructor;return typeof l=="function"&&l instanceof l&&Qa.call(l)==ah}var pl=Eu?Dn(Eu):lb;function uy(n){return of(n)&&n>=-W&&n<=W}var ff=Tu?Dn(Tu):ob;function Ni(n){return typeof n=="string"||!ke(n)&&en(n)&&An(n)==U}function Cn(n){return typeof n=="symbol"||en(n)&&An(n)==le}var Mt=Pu?Dn(Pu):ub;function dy(n){return n===r}function fy(n){return en(n)&&yn(n)==te}function gy(n){return en(n)&&An(n)==me}var cy=_i($s),my=_i(function(n,a){return n<=a});function gf(n){if(!n)return[];if(Sn(n))return Ni(n)?lr(n):On(n);if(na&&n[na])return $v(n[na]());var a=yn(n),l=a==Ke?Fs:a==B?Xa:Dt;return l(n)}function Br(n){if(!n)return n===0?n:0;if(n=er(n),n===Z||n===-Z){var a=n<0?-1:1;return a*J}return n===n?n:0}function Ae(n){var a=Br(n),l=a%1;return a===a?l?a-l:a:0}function cf(n){return n?ut(Ae(n),0,oe):0}function er(n){if(typeof n=="number")return n;if(Cn(n))return de;if(Qe(n)){var a=typeof n.valueOf=="function"?n.valueOf():n;n=Qe(a)?a+"":a}if(typeof n!="string")return n===0?n:+n;n=Nu(n);var l=zm.test(n);return l||Zm.test(n)?Sv(n.slice(2),l?2:8):Wm.test(n)?de:+n}function mf(n){return pr(n,In(n))}function vy(n){return n?ut(Ae(n),-W,W):n===0?n:0}function qe(n){return n==null?"":jn(n)}var hy=Lt(function(n,a){if(ga(a)||Sn(a)){pr(a,cn(a),n);return}for(var l in a)je.call(a,l)&&sa(n,l,a[l])}),vf=Lt(function(n,a){pr(a,In(a),n)}),xi=Lt(function(n,a,l,d){pr(a,In(a),n,d)}),by=Lt(function(n,a,l,d){pr(a,cn(a),n,d)}),py=xr(js);function yy(n,a){var l=Ft(n);return a==null?l:$u(l,a)}var ky=Pe(function(n,a){n=Ce(n);var l=-1,d=a.length,g=d>2?a[2]:r;for(g&&En(a[0],a[1],g)&&(d=1);++l<d;)for(var b=a[l],E=In(b),O=-1,L=E.length;++O<L;){var Y=E[O],z=n[Y];(z===r||ur(z,It[Y])&&!je.call(n,Y))&&(n[Y]=b[Y])}return n}),_y=Pe(function(n){return n.push(r,Nd),Mn(hf,r,n)});function Ay(n,a){return Ru(n,he(a,3),br)}function Ey(n,a){return Ru(n,he(a,3),Vs)}function Ty(n,a){return n==null?n:Cs(n,he(a,3),In)}function Py(n,a){return n==null?n:Zu(n,he(a,3),In)}function wy(n,a){return n&&br(n,he(a,3))}function Ry(n,a){return n&&Vs(n,he(a,3))}function Oy(n){return n==null?[]:ci(n,cn(n))}function Sy(n){return n==null?[]:ci(n,In(n))}function yl(n,a,l){var d=n==null?r:dt(n,a);return d===r?l:d}function Iy(n,a){return n!=null&&Ld(n,a,Qh)}function kl(n,a){return n!=null&&Ld(n,a,eb)}var Ny=wd(function(n,a,l){a!=null&&typeof a.toString!="function"&&(a=ei.call(a)),n[a]=l},Al(Nn)),xy=wd(function(n,a,l){a!=null&&typeof a.toString!="function"&&(a=ei.call(a)),je.call(n,a)?n[a].push(l):n[a]=[l]},he),Fy=Pe(oa);function cn(n){return Sn(n)?Uu(n):Hs(n)}function In(n){return Sn(n)?Uu(n,!0):db(n)}function Ly(n,a){var l={};return a=he(a,3),br(n,function(d,g,b){Ir(l,a(d,g,b),d)}),l}function By(n,a){var l={};return a=he(a,3),br(n,function(d,g,b){Ir(l,g,a(d,g,b))}),l}var qy=Lt(function(n,a,l){mi(n,a,l)}),hf=Lt(function(n,a,l,d){mi(n,a,l,d)}),My=xr(function(n,a){var l={};if(n==null)return l;var d=!1;a=Je(a,function(b){return b=Zr(b,n),d||(d=b.length>1),b}),pr(n,il(n),l),d&&(l=Zn(l,p|y|k,Nb));for(var g=a.length;g--;)Zs(l,a[g]);return l});function Dy(n,a){return bf(n,Si(he(a)))}var jy=xr(function(n,a){return n==null?{}:gb(n,a)});function bf(n,a){if(n==null)return{};var l=Je(il(n),function(d){return[d]});return a=he(a),ld(n,l,function(d,g){return a(d,g[0])})}function Cy(n,a,l){a=Zr(a,n);var d=-1,g=a.length;for(g||(g=1,n=r);++d<g;){var b=n==null?r:n[yr(a[d])];b===r&&(d=g,b=l),n=Lr(b)?b.call(n):b}return n}function Vy(n,a,l){return n==null?n:da(n,a,l)}function Gy(n,a,l,d){return d=typeof d=="function"?d:r,n==null?n:da(n,a,l,d)}var pf=Sd(cn),yf=Sd(In);function Ky(n,a,l){var d=ke(n),g=d||Qr(n)||Mt(n);if(a=he(a,4),l==null){var b=n&&n.constructor;g?l=d?new b:[]:Qe(n)?l=Lr(b)?Ft(ti(n)):{}:l={}}return(g?Wn:br)(n,function(E,O,L){return a(l,E,O,L)}),l}function Uy(n,a){return n==null?!0:Zs(n,a)}function Hy(n,a,l){return n==null?n:gd(n,a,el(l))}function $y(n,a,l,d){return d=typeof d=="function"?d:r,n==null?n:gd(n,a,el(l),d)}function Dt(n){return n==null?[]:xs(n,cn(n))}function Yy(n){return n==null?[]:xs(n,In(n))}function Wy(n,a,l){return l===r&&(l=a,a=r),l!==r&&(l=er(l),l=l===l?l:0),a!==r&&(a=er(a),a=a===a?a:0),ut(er(n),a,l)}function zy(n,a,l){return a=Br(a),l===r?(l=a,a=0):l=Br(l),n=er(n),nb(n,a,l)}function Xy(n,a,l){if(l&&typeof l!="boolean"&&En(n,a,l)&&(a=l=r),l===r&&(typeof a=="boolean"?(l=a,a=r):typeof n=="boolean"&&(l=n,n=r)),n===r&&a===r?(n=0,a=1):(n=Br(n),a===r?(a=n,n=0):a=Br(a)),n>a){var d=n;n=a,a=d}if(l||n%1||a%1){var g=Gu();return pn(n+g*(a-n+Ov("1e-"+((g+"").length-1))),a)}return Ws(n,a)}var Zy=Bt(function(n,a,l){return a=a.toLowerCase(),n+(l?kf(a):a)});function kf(n){return _l(qe(n).toLowerCase())}function _f(n){return n=qe(n),n&&n.replace(Qm,Vv).replace(pv,"")}function Jy(n,a,l){n=qe(n),a=jn(a);var d=n.length;l=l===r?d:ut(Ae(l),0,d);var g=l;return l-=a.length,l>=0&&n.slice(l,g)==a}function Qy(n){return n=qe(n),n&&Fm.test(n)?n.replace(Zo,Gv):n}function ek(n){return n=qe(n),n&&jm.test(n)?n.replace(hs,"\\$&"):n}var nk=Bt(function(n,a,l){return n+(l?"-":"")+a.toLowerCase()}),rk=Bt(function(n,a,l){return n+(l?" ":"")+a.toLowerCase()}),tk=Ed("toLowerCase");function ak(n,a,l){n=qe(n),a=Ae(a);var d=a?Ot(n):0;if(!a||d>=a)return n;var g=(a-d)/2;return ki(li(g),l)+n+ki(si(g),l)}function ik(n,a,l){n=qe(n),a=Ae(a);var d=a?Ot(n):0;return a&&d<a?n+ki(a-d,l):n}function sk(n,a,l){n=qe(n),a=Ae(a);var d=a?Ot(n):0;return a&&d<a?ki(a-d,l)+n:n}function lk(n,a,l){return l||a==null?a=0:a&&(a=+a),mh(qe(n).replace(bs,""),a||0)}function ok(n,a,l){return(l?En(n,a,l):a===r)?a=1:a=Ae(a),zs(qe(n),a)}function uk(){var n=arguments,a=qe(n[0]);return n.length<3?a:a.replace(n[1],n[2])}var dk=Bt(function(n,a,l){return n+(l?"_":"")+a.toLowerCase()});function fk(n,a,l){return l&&typeof l!="number"&&En(n,a,l)&&(a=l=r),l=l===r?oe:l>>>0,l?(n=qe(n),n&&(typeof a=="string"||a!=null&&!pl(a))&&(a=jn(a),!a&&Rt(n))?Jr(lr(n),0,l):n.split(a,l)):[]}var gk=Bt(function(n,a,l){return n+(l?" ":"")+_l(a)});function ck(n,a,l){return n=qe(n),l=l==null?0:ut(Ae(l),0,n.length),a=jn(a),n.slice(l,l+a.length)==a}function mk(n,a,l){var d=h.templateSettings;l&&En(n,a,l)&&(a=r),n=qe(n),a=xi({},a,d,Id);var g=xi({},a.imports,d.imports,Id),b=cn(g),E=xs(g,b),O,L,Y=0,z=a.interpolate||Ha,Q="__p += '",se=Ls((a.escape||Ha).source+"|"+z.source+"|"+(z===Jo?Ym:Ha).source+"|"+(a.evaluate||Ha).source+"|$","g"),ce="//# sourceURL="+(je.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ev+"]")+`
`;n.replace(se,function(pe,we,Ie,Vn,Tn,Gn){return Ie||(Ie=Vn),Q+=n.slice(Y,Gn).replace(ev,Kv),we&&(O=!0,Q+=`' +
__e(`+we+`) +
'`),Tn&&(L=!0,Q+=`';
`+Tn+`;
__p += '`),Ie&&(Q+=`' +
((__t = (`+Ie+`)) == null ? '' : __t) +
'`),Y=Gn+pe.length,pe}),Q+=`';
`;var be=je.call(a,"variable")&&a.variable;if(!be)Q=`with (obj) {
`+Q+`
}
`;else if(Hm.test(be))throw new ye(f);Q=(L?Q.replace(Ua,""):Q).replace(Im,"$1").replace(Nm,"$1;"),Q="function("+(be||"obj")+`) {
`+(be?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(L?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Q+`return __p
}`;var Ee=Ef(function(){return Be(b,ce+"return "+Q).apply(r,E)});if(Ee.source=Q,bl(Ee))throw Ee;return Ee}function vk(n){return qe(n).toLowerCase()}function hk(n){return qe(n).toUpperCase()}function bk(n,a,l){if(n=qe(n),n&&(l||a===r))return Nu(n);if(!n||!(a=jn(a)))return n;var d=lr(n),g=lr(a),b=xu(d,g),E=Fu(d,g)+1;return Jr(d,b,E).join("")}function pk(n,a,l){if(n=qe(n),n&&(l||a===r))return n.slice(0,Bu(n)+1);if(!n||!(a=jn(a)))return n;var d=lr(n),g=Fu(d,lr(a))+1;return Jr(d,0,g).join("")}function yk(n,a,l){if(n=qe(n),n&&(l||a===r))return n.replace(bs,"");if(!n||!(a=jn(a)))return n;var d=lr(n),g=xu(d,lr(a));return Jr(d,g).join("")}function kk(n,a){var l=ne,d=ee;if(Qe(a)){var g="separator"in a?a.separator:g;l="length"in a?Ae(a.length):l,d="omission"in a?jn(a.omission):d}n=qe(n);var b=n.length;if(Rt(n)){var E=lr(n);b=E.length}if(l>=b)return n;var O=l-Ot(d);if(O<1)return d;var L=E?Jr(E,0,O).join(""):n.slice(0,O);if(g===r)return L+d;if(E&&(O+=L.length-O),pl(g)){if(n.slice(O).search(g)){var Y,z=L;for(g.global||(g=Ls(g.source,qe(Qo.exec(g))+"g")),g.lastIndex=0;Y=g.exec(z);)var Q=Y.index;L=L.slice(0,Q===r?O:Q)}}else if(n.indexOf(jn(g),O)!=O){var se=L.lastIndexOf(g);se>-1&&(L=L.slice(0,se))}return L+d}function _k(n){return n=qe(n),n&&xm.test(n)?n.replace(Xo,Xv):n}var Ak=Bt(function(n,a,l){return n+(l?" ":"")+a.toUpperCase()}),_l=Ed("toUpperCase");function Af(n,a,l){return n=qe(n),a=l?r:a,a===r?Hv(n)?Qv(n):qv(n):n.match(a)||[]}var Ef=Pe(function(n,a){try{return Mn(n,r,a)}catch(l){return bl(l)?l:new ye(l)}}),Ek=xr(function(n,a){return Wn(a,function(l){l=yr(l),Ir(n,l,vl(n[l],n))}),n});function Tk(n){var a=n==null?0:n.length,l=he();return n=a?Je(n,function(d){if(typeof d[1]!="function")throw new zn(u);return[l(d[0]),d[1]]}):[],Pe(function(d){for(var g=-1;++g<a;){var b=n[g];if(Mn(b[0],this,d))return Mn(b[1],this,d)}})}function Pk(n){return Xh(Zn(n,p))}function Al(n){return function(){return n}}function wk(n,a){return n==null||n!==n?a:n}var Rk=Pd(),Ok=Pd(!0);function Nn(n){return n}function El(n){return nd(typeof n=="function"?n:Zn(n,p))}function Sk(n){return td(Zn(n,p))}function Ik(n,a){return ad(n,Zn(a,p))}var Nk=Pe(function(n,a){return function(l){return oa(l,n,a)}}),xk=Pe(function(n,a){return function(l){return oa(n,l,a)}});function Tl(n,a,l){var d=cn(a),g=ci(a,d);l==null&&!(Qe(a)&&(g.length||!d.length))&&(l=a,a=n,n=this,g=ci(a,cn(a)));var b=!(Qe(l)&&"chain"in l)||!!l.chain,E=Lr(n);return Wn(g,function(O){var L=a[O];n[O]=L,E&&(n.prototype[O]=function(){var Y=this.__chain__;if(b||Y){var z=n(this.__wrapped__),Q=z.__actions__=On(this.__actions__);return Q.push({func:L,args:arguments,thisArg:n}),z.__chain__=Y,z}return L.apply(n,$r([this.value()],arguments))})}),n}function Fk(){return mn._===this&&(mn._=ih),this}function Pl(){}function Lk(n){return n=Ae(n),Pe(function(a){return id(a,n)})}var Bk=rl(Je),qk=rl(wu),Mk=rl(Rs);function Tf(n){return ul(n)?Os(yr(n)):cb(n)}function Dk(n){return function(a){return n==null?r:dt(n,a)}}var jk=Rd(),Ck=Rd(!0);function wl(){return[]}function Rl(){return!1}function Vk(){return{}}function Gk(){return""}function Kk(){return!0}function Uk(n,a){if(n=Ae(n),n<1||n>W)return[];var l=oe,d=pn(n,oe);a=he(a),n-=oe;for(var g=Ns(d,a);++l<n;)a(l);return g}function Hk(n){return ke(n)?Je(n,yr):Cn(n)?[n]:On(Kd(qe(n)))}function $k(n){var a=++th;return qe(n)+a}var Yk=yi(function(n,a){return n+a},0),Wk=tl("ceil"),zk=yi(function(n,a){return n/a},1),Xk=tl("floor");function Zk(n){return n&&n.length?gi(n,Nn,Gs):r}function Jk(n,a){return n&&n.length?gi(n,he(a,2),Gs):r}function Qk(n){return Su(n,Nn)}function e_(n,a){return Su(n,he(a,2))}function n_(n){return n&&n.length?gi(n,Nn,$s):r}function r_(n,a){return n&&n.length?gi(n,he(a,2),$s):r}var t_=yi(function(n,a){return n*a},1),a_=tl("round"),i_=yi(function(n,a){return n-a},0);function s_(n){return n&&n.length?Is(n,Nn):0}function l_(n,a){return n&&n.length?Is(n,he(a,2)):0}return h.after=S0,h.ary=ef,h.assign=hy,h.assignIn=vf,h.assignInWith=xi,h.assignWith=by,h.at=py,h.before=nf,h.bind=vl,h.bindAll=Ek,h.bindKey=rf,h.castArray=V0,h.chain=Zd,h.chunk=Xb,h.compact=Zb,h.concat=Jb,h.cond=Tk,h.conforms=Pk,h.constant=Al,h.countBy=s0,h.create=yy,h.curry=tf,h.curryRight=af,h.debounce=sf,h.defaults=ky,h.defaultsDeep=_y,h.defer=I0,h.delay=N0,h.difference=Qb,h.differenceBy=ep,h.differenceWith=np,h.drop=rp,h.dropRight=tp,h.dropRightWhile=ap,h.dropWhile=ip,h.fill=sp,h.filter=o0,h.flatMap=f0,h.flatMapDeep=g0,h.flatMapDepth=c0,h.flatten=Yd,h.flattenDeep=lp,h.flattenDepth=op,h.flip=x0,h.flow=Rk,h.flowRight=Ok,h.fromPairs=up,h.functions=Oy,h.functionsIn=Sy,h.groupBy=m0,h.initial=fp,h.intersection=gp,h.intersectionBy=cp,h.intersectionWith=mp,h.invert=Ny,h.invertBy=xy,h.invokeMap=h0,h.iteratee=El,h.keyBy=b0,h.keys=cn,h.keysIn=In,h.map=wi,h.mapKeys=Ly,h.mapValues=By,h.matches=Sk,h.matchesProperty=Ik,h.memoize=Oi,h.merge=qy,h.mergeWith=hf,h.method=Nk,h.methodOf=xk,h.mixin=Tl,h.negate=Si,h.nthArg=Lk,h.omit=My,h.omitBy=Dy,h.once=F0,h.orderBy=p0,h.over=Bk,h.overArgs=L0,h.overEvery=qk,h.overSome=Mk,h.partial=hl,h.partialRight=lf,h.partition=y0,h.pick=jy,h.pickBy=bf,h.property=Tf,h.propertyOf=Dk,h.pull=pp,h.pullAll=zd,h.pullAllBy=yp,h.pullAllWith=kp,h.pullAt=_p,h.range=jk,h.rangeRight=Ck,h.rearg=B0,h.reject=A0,h.remove=Ap,h.rest=q0,h.reverse=cl,h.sampleSize=T0,h.set=Vy,h.setWith=Gy,h.shuffle=P0,h.slice=Ep,h.sortBy=O0,h.sortedUniq=Ip,h.sortedUniqBy=Np,h.split=fk,h.spread=M0,h.tail=xp,h.take=Fp,h.takeRight=Lp,h.takeRightWhile=Bp,h.takeWhile=qp,h.tap=Zp,h.throttle=D0,h.thru=Pi,h.toArray=gf,h.toPairs=pf,h.toPairsIn=yf,h.toPath=Hk,h.toPlainObject=mf,h.transform=Ky,h.unary=j0,h.union=Mp,h.unionBy=Dp,h.unionWith=jp,h.uniq=Cp,h.uniqBy=Vp,h.uniqWith=Gp,h.unset=Uy,h.unzip=ml,h.unzipWith=Xd,h.update=Hy,h.updateWith=$y,h.values=Dt,h.valuesIn=Yy,h.without=Kp,h.words=Af,h.wrap=C0,h.xor=Up,h.xorBy=Hp,h.xorWith=$p,h.zip=Yp,h.zipObject=Wp,h.zipObjectDeep=zp,h.zipWith=Xp,h.entries=pf,h.entriesIn=yf,h.extend=vf,h.extendWith=xi,Tl(h,h),h.add=Yk,h.attempt=Ef,h.camelCase=Zy,h.capitalize=kf,h.ceil=Wk,h.clamp=Wy,h.clone=G0,h.cloneDeep=U0,h.cloneDeepWith=H0,h.cloneWith=K0,h.conformsTo=$0,h.deburr=_f,h.defaultTo=wk,h.divide=zk,h.endsWith=Jy,h.eq=ur,h.escape=Qy,h.escapeRegExp=ek,h.every=l0,h.find=u0,h.findIndex=Hd,h.findKey=Ay,h.findLast=d0,h.findLastIndex=$d,h.findLastKey=Ey,h.floor=Xk,h.forEach=Jd,h.forEachRight=Qd,h.forIn=Ty,h.forInRight=Py,h.forOwn=wy,h.forOwnRight=Ry,h.get=yl,h.gt=Y0,h.gte=W0,h.has=Iy,h.hasIn=kl,h.head=Wd,h.identity=Nn,h.includes=v0,h.indexOf=dp,h.inRange=zy,h.invoke=Fy,h.isArguments=ct,h.isArray=ke,h.isArrayBuffer=z0,h.isArrayLike=Sn,h.isArrayLikeObject=rn,h.isBoolean=X0,h.isBuffer=Qr,h.isDate=Z0,h.isElement=J0,h.isEmpty=Q0,h.isEqual=ey,h.isEqualWith=ny,h.isError=bl,h.isFinite=ry,h.isFunction=Lr,h.isInteger=of,h.isLength=Ii,h.isMap=uf,h.isMatch=ty,h.isMatchWith=ay,h.isNaN=iy,h.isNative=sy,h.isNil=oy,h.isNull=ly,h.isNumber=df,h.isObject=Qe,h.isObjectLike=en,h.isPlainObject=ma,h.isRegExp=pl,h.isSafeInteger=uy,h.isSet=ff,h.isString=Ni,h.isSymbol=Cn,h.isTypedArray=Mt,h.isUndefined=dy,h.isWeakMap=fy,h.isWeakSet=gy,h.join=vp,h.kebabCase=nk,h.last=Qn,h.lastIndexOf=hp,h.lowerCase=rk,h.lowerFirst=tk,h.lt=cy,h.lte=my,h.max=Zk,h.maxBy=Jk,h.mean=Qk,h.meanBy=e_,h.min=n_,h.minBy=r_,h.stubArray=wl,h.stubFalse=Rl,h.stubObject=Vk,h.stubString=Gk,h.stubTrue=Kk,h.multiply=t_,h.nth=bp,h.noConflict=Fk,h.noop=Pl,h.now=Ri,h.pad=ak,h.padEnd=ik,h.padStart=sk,h.parseInt=lk,h.random=Xy,h.reduce=k0,h.reduceRight=_0,h.repeat=ok,h.replace=uk,h.result=Cy,h.round=a_,h.runInContext=x,h.sample=E0,h.size=w0,h.snakeCase=dk,h.some=R0,h.sortedIndex=Tp,h.sortedIndexBy=Pp,h.sortedIndexOf=wp,h.sortedLastIndex=Rp,h.sortedLastIndexBy=Op,h.sortedLastIndexOf=Sp,h.startCase=gk,h.startsWith=ck,h.subtract=i_,h.sum=s_,h.sumBy=l_,h.template=mk,h.times=Uk,h.toFinite=Br,h.toInteger=Ae,h.toLength=cf,h.toLower=vk,h.toNumber=er,h.toSafeInteger=vy,h.toString=qe,h.toUpper=hk,h.trim=bk,h.trimEnd=pk,h.trimStart=yk,h.truncate=kk,h.unescape=_k,h.uniqueId=$k,h.upperCase=Ak,h.upperFirst=_l,h.each=Jd,h.eachRight=Qd,h.first=Wd,Tl(h,function(){var n={};return br(h,function(a,l){je.call(h.prototype,l)||(n[l]=a)}),n}(),{chain:!1}),h.VERSION=t,Wn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){h[n].placeholder=h}),Wn(["drop","take"],function(n,a){Re.prototype[n]=function(l){l=l===r?1:fn(Ae(l),0);var d=this.__filtered__&&!a?new Re(this):this.clone();return d.__filtered__?d.__takeCount__=pn(l,d.__takeCount__):d.__views__.push({size:pn(l,oe),type:n+(d.__dir__<0?"Right":"")}),d},Re.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Wn(["filter","map","takeWhile"],function(n,a){var l=a+1,d=l==M||l==re;Re.prototype[n]=function(g){var b=this.clone();return b.__iteratees__.push({iteratee:he(g,3),type:l}),b.__filtered__=b.__filtered__||d,b}}),Wn(["head","last"],function(n,a){var l="take"+(a?"Right":"");Re.prototype[n]=function(){return this[l](1).value()[0]}}),Wn(["initial","tail"],function(n,a){var l="drop"+(a?"":"Right");Re.prototype[n]=function(){return this.__filtered__?new Re(this):this[l](1)}}),Re.prototype.compact=function(){return this.filter(Nn)},Re.prototype.find=function(n){return this.filter(n).head()},Re.prototype.findLast=function(n){return this.reverse().find(n)},Re.prototype.invokeMap=Pe(function(n,a){return typeof n=="function"?new Re(this):this.map(function(l){return oa(l,n,a)})}),Re.prototype.reject=function(n){return this.filter(Si(he(n)))},Re.prototype.slice=function(n,a){n=Ae(n);var l=this;return l.__filtered__&&(n>0||a<0)?new Re(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),a!==r&&(a=Ae(a),l=a<0?l.dropRight(-a):l.take(a-n)),l)},Re.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Re.prototype.toArray=function(){return this.take(oe)},br(Re.prototype,function(n,a){var l=/^(?:filter|find|map|reject)|While$/.test(a),d=/^(?:head|last)$/.test(a),g=h[d?"take"+(a=="last"?"Right":""):a],b=d||/^find/.test(a);g&&(h.prototype[a]=function(){var E=this.__wrapped__,O=d?[1]:arguments,L=E instanceof Re,Y=O[0],z=L||ke(E),Q=function(we){var Ie=g.apply(h,$r([we],O));return d&&se?Ie[0]:Ie};z&&l&&typeof Y=="function"&&Y.length!=1&&(L=z=!1);var se=this.__chain__,ce=!!this.__actions__.length,be=b&&!se,Ee=L&&!ce;if(!b&&z){E=Ee?E:new Re(this);var pe=n.apply(E,O);return pe.__actions__.push({func:Pi,args:[Q],thisArg:r}),new Xn(pe,se)}return be&&Ee?n.apply(this,O):(pe=this.thru(Q),be?d?pe.value()[0]:pe.value():pe)})}),Wn(["pop","push","shift","sort","splice","unshift"],function(n){var a=Za[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);h.prototype[n]=function(){var g=arguments;if(d&&!this.__chain__){var b=this.value();return a.apply(ke(b)?b:[],g)}return this[l](function(E){return a.apply(ke(E)?E:[],g)})}}),br(Re.prototype,function(n,a){var l=h[a];if(l){var d=l.name+"";je.call(xt,d)||(xt[d]=[]),xt[d].push({name:a,func:l})}}),xt[pi(r,w).name]=[{name:"wrapper",func:r}],Re.prototype.clone=_h,Re.prototype.reverse=Ah,Re.prototype.value=Eh,h.prototype.at=Jp,h.prototype.chain=Qp,h.prototype.commit=e0,h.prototype.next=n0,h.prototype.plant=t0,h.prototype.reverse=a0,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=i0,h.prototype.first=h.prototype.head,na&&(h.prototype[na]=r0),h},St=eh();it?((it.exports=St)._=St,Es._=St):mn._=St}).call(FT)}(Ta,Ta.exports)),Ta.exports}LT();vr(ja);const rm=T.forwardRef((e,i)=>ie.jsx(Mo,{gap:"space-8",style:{display:"flex"},...e,ref:i}));rm.displayName="FaktaGruppe";rm.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Ul={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Og;function BT(){return Og||(Og=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",u=0;u<arguments.length;u++){var f=arguments[u];f&&(o=s(o,t.call(this,f)))}return o}function t(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var u="";for(var f in o)i.call(o,f)&&o[f]&&(u=s(u,this&&this[f]||f));return u}function s(o,u){return u?o?o+" "+u:o+u:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Ul)),Ul.exports}var qT=BT();const MT=ac(qT),DT="_boks_nm7fe_1",jT="_harBorderLeft_nm7fe_8",CT="_harBorderTop_nm7fe_12",VT={boks:DT,harBorderLeft:jT,harBorderTop:CT};MT.bind(VT);var Hl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Sg;function GT(){return Sg||(Sg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",u=0;u<arguments.length;u++){var f=arguments[u];f&&(o=s(o,t(f)))}return o}function t(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var u="";for(var f in o)i.call(o,f)&&o[f]&&(u=s(u,f));return u}function s(o,u){return u?o?o+" "+u:o+u:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Hl)),Hl.exports}GT();function KT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ig={exports:{}},_a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function UT(){if(Ng)return _a;Ng=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,o){var u=null;if(o!==void 0&&(u=""+o),s.key!==void 0&&(u=""+s.key),"key"in s){o={};for(var f in s)f!=="key"&&(o[f]=s[f])}else o=s;return s=o.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:o}}return _a.Fragment=i,_a.jsx=r,_a.jsxs=r,_a}var xg;function HT(){return xg||(xg=1,Ig.exports=UT()),Ig.exports}var Cr=HT();const $T="_autocompleteSuggestion__substring_uvuzd_1",YT="_autocompleteSuggestion__inner_uvuzd_4",Aa={autocompleteSuggestion__substring:$T,autocompleteSuggestion__inner:YT,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_uvuzd_12"};class WT extends F.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:r}=this.state;i(r)}onMouseMove(){const{setSuggestionIndex:i,index:r}=this.props;i(r)}render(){const{match:i,active:r,avoidBlur:t,id:s}=this.props,{value:o}=this.state.value,u=o.toLowerCase().startsWith(i.toLowerCase());return Cr.jsx("li",{id:s,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:u?Cr.jsxs("span",{className:`${Aa.autocompleteSuggestion__inner} ${r?Aa["autocompleteSuggestion--active"]:""}`,children:[o.substring(0,i.length),Cr.jsx("span",{className:Aa.autocompleteSuggestion__substring,children:o.substring(i.length)})]}):Cr.jsx("span",{className:`${Aa.autocompleteSuggestion__inner} ${r?Aa["autocompleteSuggestion--active"]:""}`,children:o})})}}const zT="_autocomplete_cj8jr_1",XT="_autocomplete__suggestions_cj8jr_27",$l={autocomplete:zT,autocomplete__suggestions:XT,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_cj8jr_31"};class aR extends F.Component{input;inputRef;constructor(i){super(i),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(i)}onSearchButtonClick(i){const{onSearchButtonClick:r}=this.props;i.preventDefault(),r&&r()}onKeyDown(i){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:t}=this.state;const{suggestions:s}=this.props,o=t>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:o&&r&&this.setValue(s[t]);break;case 13:o&&r?(i.preventDefault(),this.setValue(s[t])):r&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(i.preventDefault(),t=t-1===-2?-1:t-1,this.setState({activeSuggestionIndex:t}));break;case 40:r&&(i.preventDefault(),t=t+1===s.length?s.length-1:t+1,this.setState({activeSuggestionIndex:t}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:t}=this.state;t&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:r,ariaLabel:t,placeholder:s,value:o,name:u,shouldFocusOnMount:f,isLoading:c}=this.props,{activeSuggestionIndex:m,setAriaActiveDescendant:v,hasFocus:p,shouldShowSuggestions:y}=this.state,k=p&&y&&i.length>0,N=v&&m>-1?`${r}-item-${m}`:void 0;return Cr.jsxs("div",{className:`${$l.autocomplete} autocomplete`,"aria-expanded":k,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[Cr.jsx(to,{variant:"primary",id:r,name:u,"aria-label":t,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":N,placeholder:s,value:o,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:A=>{this.inputRef=A},className:"typo-normal",autoFocus:f,label:t,hideLabel:!0,children:Cr.jsx(to.Button,{loading:c,onClick:this.onSearchButtonClick})}),Cr.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:k?$l.autocomplete__suggestions:$l["autocomplete__suggestions--hidden"],children:k&&i.map((A,_)=>Cr.jsx(WT,{id:`${r}-item-${_}`,index:_,value:A,match:o,active:_===m,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},A.key))})]})}}var lo=function(e,i){return lo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])},lo(e,i)};function hr(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");lo(e,i);function r(){this.constructor=e}e.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}var ge=function(){return ge=Object.assign||function(e){for(var i,r=1,t=arguments.length;r<t;r++){i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},ge.apply(this,arguments)};function gs(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r}function Ar(e,i,r){if(arguments.length===2)for(var t=0,s=i.length,o;t<s;t++)(o||!(t in i))&&(o||(o=Array.prototype.slice.call(i,0,t)),o[t]=i[t]);return e.concat(o||Array.prototype.slice.call(i))}function kr(e,i){var r=i&&i.cache?i.cache:tP,t=i&&i.serializer?i.serializer:nP,s=i&&i.strategy?i.strategy:QT;return s(e,{cache:r,serializer:t})}function ZT(e){return e==null||typeof e=="number"||typeof e=="boolean"}function JT(e,i,r,t){var s=ZT(t)?t:r(t),o=i.get(s);return typeof o>"u"&&(o=e.call(this,t),i.set(s,o)),o}function tm(e,i,r){var t=Array.prototype.slice.call(arguments,3),s=r(t),o=i.get(s);return typeof o>"u"&&(o=e.apply(this,t),i.set(s,o)),o}function am(e,i,r,t,s){return r.bind(i,e,t,s)}function QT(e,i){var r=e.length===1?JT:tm;return am(e,this,r,i.cache.create(),i.serializer)}function eP(e,i){return am(e,this,tm,i.cache.create(),i.serializer)}var nP=function(){return JSON.stringify(arguments)},rP=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,r){this.cache[i]=r},e}(),tP={create:function(){return new rP}},_r={variadic:eP},Ne;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ne||(Ne={}));var ze;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(ze||(ze={}));var Ht;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Ht||(Ht={}));function Fg(e){return e.type===ze.literal}function aP(e){return e.type===ze.argument}function im(e){return e.type===ze.number}function sm(e){return e.type===ze.date}function lm(e){return e.type===ze.time}function om(e){return e.type===ze.select}function um(e){return e.type===ze.plural}function iP(e){return e.type===ze.pound}function dm(e){return e.type===ze.tag}function fm(e){return!!(e&&typeof e=="object"&&e.type===Ht.number)}function oo(e){return!!(e&&typeof e=="object"&&e.type===Ht.dateTime)}var gm=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,sP=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function lP(e){var i={};return e.replace(sP,function(r){var t=r.length;switch(r[0]){case"G":i.era=t===4?"long":t===5?"narrow":"short";break;case"y":i.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][t-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][t-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][t-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][t-1];break;case"s":i.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var oP=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function uP(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(oP).filter(function(y){return y.length>0}),r=[],t=0,s=i;t<s.length;t++){var o=s[t],u=o.split("/");if(u.length===0)throw new Error("Invalid number skeleton");for(var f=u[0],c=u.slice(1),m=0,v=c;m<v.length;m++){var p=v[m];if(p.length===0)throw new Error("Invalid number skeleton")}r.push({stem:f,options:c})}return r}function dP(e){return e.replace(/^(.*?)-/,"")}var Lg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,cm=/^(@+)?(\+|#+)?[rs]?$/g,fP=/(\*)(0+)|(#+)(0+)|(0+)/g,mm=/^(0+)$/;function Bg(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(cm,function(r,t,s){return typeof s!="string"?(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length):s==="+"?i.minimumSignificantDigits=t.length:t[0]==="#"?i.maximumSignificantDigits=t.length:(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length+(typeof s=="string"?s.length:0)),""}),i}function vm(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function gP(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var r=e.slice(0,2);if(r==="+!"?(i.signDisplay="always",e=e.slice(2)):r==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!mm.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function qg(e){var i={},r=vm(e);return r||i}function cP(e){for(var i={},r=0,t=e;r<t.length;r++){var s=t[r];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=dP(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ge(ge(ge({},i),{notation:"scientific"}),s.options.reduce(function(c,m){return ge(ge({},c),qg(m))},{}));continue;case"engineering":i=ge(ge(ge({},i),{notation:"engineering"}),s.options.reduce(function(c,m){return ge(ge({},c),qg(m))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(fP,function(c,m,v,p,y,k){if(m)i.minimumIntegerDigits=v.length;else{if(p&&y)throw new Error("We currently do not support maximum integer digits");if(k)throw new Error("We currently do not support exact integer digits")}return""});continue}if(mm.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Lg.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Lg,function(c,m,v,p,y,k){return v==="*"?i.minimumFractionDigits=m.length:p&&p[0]==="#"?i.maximumFractionDigits=p.length:y&&k?(i.minimumFractionDigits=y.length,i.maximumFractionDigits=y.length+k.length):(i.minimumFractionDigits=m.length,i.maximumFractionDigits=m.length),""});var o=s.options[0];o==="w"?i=ge(ge({},i),{trailingZeroDisplay:"stripIfInteger"}):o&&(i=ge(ge({},i),Bg(o)));continue}if(cm.test(s.stem)){i=ge(ge({},i),Bg(s.stem));continue}var u=vm(s.stem);u&&(i=ge(ge({},i),u));var f=gP(s.stem);f&&(i=ge(ge({},i),f))}return i}var Mi={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function mP(e,i){for(var r="",t=0;t<e.length;t++){var s=e.charAt(t);if(s==="j"){for(var o=0;t+1<e.length&&e.charAt(t+1)===s;)o++,t++;var u=1+(o&1),f=o<2?1:3+(o>>1),c="a",m=vP(i);for((m=="H"||m=="k")&&(f=0);f-- >0;)r+=c;for(;u-- >0;)r=m+r}else s==="J"?r+="H":r+=s}return r}function vP(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,t;r!=="root"&&(t=e.maximize().region);var s=Mi[t||""]||Mi[r||""]||Mi["".concat(r,"-001")]||Mi["001"];return s[0]}var Yl,hP=new RegExp("^".concat(gm.source,"*")),bP=new RegExp("".concat(gm.source,"*$"));function Fe(e,i){return{start:e,end:i}}var pP=!!String.prototype.startsWith&&"_a".startsWith("a",1),yP=!!String.fromCodePoint,kP=!!Object.fromEntries,_P=!!String.prototype.codePointAt,AP=!!String.prototype.trimStart,EP=!!String.prototype.trimEnd,TP=!!Number.isSafeInteger,PP=TP?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},uo=!0;try{var wP=bm("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");uo=((Yl=wP.exec("a"))===null||Yl===void 0?void 0:Yl[0])==="a"}catch{uo=!1}var Mg=pP?function(e,i,r){return e.startsWith(i,r)}:function(e,i,r){return e.slice(r,r+i.length)===i},fo=yP?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r="",t=e.length,s=0,o;t>s;){if(o=e[s++],o>1114111)throw RangeError(o+" is not a valid code point");r+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return r},Dg=kP?Object.fromEntries:function(e){for(var i={},r=0,t=e;r<t.length;r++){var s=t[r],o=s[0],u=s[1];i[o]=u}return i},hm=_P?function(e,i){return e.codePointAt(i)}:function(e,i){var r=e.length;if(!(i<0||i>=r)){var t=e.charCodeAt(i),s;return t<55296||t>56319||i+1===r||(s=e.charCodeAt(i+1))<56320||s>57343?t:(t-55296<<10)+(s-56320)+65536}},RP=AP?function(e){return e.trimStart()}:function(e){return e.replace(hP,"")},OP=EP?function(e){return e.trimEnd()}:function(e){return e.replace(bP,"")};function bm(e,i){return new RegExp(e,i)}var go;if(uo){var jg=bm("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");go=function(e,i){var r;jg.lastIndex=i;var t=jg.exec(e);return(r=t[1])!==null&&r!==void 0?r:""}}else go=function(e,i){for(var r=[];;){var t=hm(e,i);if(t===void 0||pm(t)||xP(t))break;r.push(t),i+=t>=65536?2:1}return fo.apply(void 0,r)};var SP=function(){function e(i,r){r===void 0&&(r={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,r,t){for(var s=[];!this.isEOF();){var o=this.char();if(o===123){var u=this.parseArgument(i,t);if(u.err)return u;s.push(u.val)}else{if(o===125&&i>0)break;if(o===35&&(r==="plural"||r==="selectordinal")){var f=this.clonePosition();this.bump(),s.push({type:ze.pound,location:Fe(f,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(Ne.UNMATCHED_CLOSING_TAG,Fe(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&co(this.peek()||0)){var u=this.parseTag(i,r);if(u.err)return u;s.push(u.val)}else{var u=this.parseLiteral(i,r);if(u.err)return u;s.push(u.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,r){var t=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:ze.literal,value:"<".concat(s,"/>"),location:Fe(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(i+1,r,!0);if(o.err)return o;var u=o.val,f=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!co(this.char()))return this.error(Ne.INVALID_TAG,Fe(f,this.clonePosition()));var c=this.clonePosition(),m=this.parseTagName();return s!==m?this.error(Ne.UNMATCHED_CLOSING_TAG,Fe(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:ze.tag,value:s,children:u,location:Fe(t,this.clonePosition())},err:null}:this.error(Ne.INVALID_TAG,Fe(f,this.clonePosition())))}else return this.error(Ne.UNCLOSED_TAG,Fe(t,this.clonePosition()))}else return this.error(Ne.INVALID_TAG,Fe(t,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&NP(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,r){for(var t=this.clonePosition(),s="";;){var o=this.tryParseQuote(r);if(o){s+=o;continue}var u=this.tryParseUnquoted(i,r);if(u){s+=u;continue}var f=this.tryParseLeftAngleBracket();if(f){s+=f;continue}break}var c=Fe(t,this.clonePosition());return{val:{type:ze.literal,value:s,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!IP(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(t);this.bump()}return fo.apply(void 0,r)},e.prototype.tryParseUnquoted=function(i,r){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(r==="plural"||r==="selectordinal")||t===125&&i>0?null:(this.bump(),fo(t))},e.prototype.parseArgument=function(i,r){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Fe(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ne.EMPTY_ARGUMENT,Fe(t,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(Ne.MALFORMED_ARGUMENT,Fe(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Fe(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:ze.argument,value:s,location:Fe(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Fe(t,this.clonePosition())):this.parseArgumentOptions(i,r,s,t);default:return this.error(Ne.MALFORMED_ARGUMENT,Fe(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),r=this.offset(),t=go(this.message,r),s=r+t.length;this.bumpTo(s);var o=this.clonePosition(),u=Fe(i,o);return{value:t,location:u}},e.prototype.parseArgumentOptions=function(i,r,t,s){var o,u=this.clonePosition(),f=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(f){case"":return this.error(Ne.EXPECT_ARGUMENT_TYPE,Fe(u,c));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var v=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var y=OP(p.val);if(y.length===0)return this.error(Ne.EXPECT_ARGUMENT_STYLE,Fe(this.clonePosition(),this.clonePosition()));var k=Fe(v,this.clonePosition());m={style:y,styleLocation:k}}var N=this.tryParseArgumentClose(s);if(N.err)return N;var A=Fe(s,this.clonePosition());if(m&&Mg(m?.style,"::",0)){var _=RP(m.style.slice(2));if(f==="number"){var p=this.parseNumberSkeletonFromString(_,m.styleLocation);return p.err?p:{val:{type:ze.number,value:t,location:A,style:p.val},err:null}}else{if(_.length===0)return this.error(Ne.EXPECT_DATE_TIME_SKELETON,A);var w=_;this.locale&&(w=mP(_,this.locale));var y={type:Ht.dateTime,pattern:w,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?lP(w):{}},S=f==="date"?ze.date:ze.time;return{val:{type:S,value:t,location:A,style:y},err:null}}}return{val:{type:f==="number"?ze.number:f==="date"?ze.date:ze.time,value:t,location:A,style:(o=m?.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var R=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ne.EXPECT_SELECT_ARGUMENT_OPTIONS,Fe(R,ge({},R)));this.bumpSpace();var j=this.parseIdentifierIfPossible(),I=0;if(f!=="select"&&j.value==="offset"){if(!this.bumpIf(":"))return this.error(Ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Fe(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(Ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ne.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),j=this.parseIdentifierIfPossible(),I=p.val}var G=this.tryParsePluralOrSelectOptions(i,f,r,j);if(G.err)return G;var N=this.tryParseArgumentClose(s);if(N.err)return N;var D=Fe(s,this.clonePosition());return f==="select"?{val:{type:ze.select,value:t,options:Dg(G.val),location:D},err:null}:{val:{type:ze.plural,value:t,options:Dg(G.val),offset:I,pluralType:f==="plural"?"cardinal":"ordinal",location:D},err:null}}default:return this.error(Ne.INVALID_ARGUMENT_TYPE,Fe(u,c))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Fe(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,r=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ne.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Fe(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,r){var t=[];try{t=uP(i)}catch{return this.error(Ne.INVALID_NUMBER_SKELETON,r)}return{val:{type:Ht.number,tokens:t,location:r,parsedOptions:this.shouldParseSkeletons?cP(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,r,t,s){for(var o,u=!1,f=[],c=new Set,m=s.value,v=s.location;;){if(m.length===0){var p=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var y=this.tryParseDecimalInteger(Ne.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ne.INVALID_PLURAL_ARGUMENT_SELECTOR);if(y.err)return y;v=Fe(p,this.clonePosition()),m=this.message.slice(p.offset,this.offset())}else break}if(c.has(m))return this.error(r==="select"?Ne.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ne.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,v);m==="other"&&(u=!0),this.bumpSpace();var k=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?Ne.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ne.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Fe(this.clonePosition(),this.clonePosition()));var N=this.parseMessage(i+1,r,t);if(N.err)return N;var A=this.tryParseArgumentClose(k);if(A.err)return A;f.push([m,{value:N.val,location:Fe(k,this.clonePosition())}]),c.add(m),this.bumpSpace(),o=this.parseIdentifierIfPossible(),m=o.value,v=o.location}return f.length===0?this.error(r==="select"?Ne.EXPECT_SELECT_ARGUMENT_SELECTOR:Ne.EXPECT_PLURAL_ARGUMENT_SELECTOR,Fe(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!u?this.error(Ne.MISSING_OTHER_CLAUSE,Fe(this.clonePosition(),this.clonePosition())):{val:f,err:null}},e.prototype.tryParseDecimalInteger=function(i,r){var t=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var o=!1,u=0;!this.isEOF();){var f=this.char();if(f>=48&&f<=57)o=!0,u=u*10+(f-48),this.bump();else break}var c=Fe(s,this.clonePosition());return o?(u*=t,PP(u)?{val:u,err:null}:this.error(r,c)):this.error(i,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var r=hm(this.message,i);if(r===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(i,r){return{val:null,err:{kind:i,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Mg(this.message,i,this.offset())){for(var r=0;r<i.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var r=this.offset(),t=this.message.indexOf(i,r);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var r=this.offset();if(r===i)break;if(r>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&pm(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),r=this.offset(),t=this.message.charCodeAt(r+(i>=65536?2:1));return t??null},e}();function co(e){return e>=97&&e<=122||e>=65&&e<=90}function IP(e){return co(e)||e===47}function NP(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function pm(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function xP(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function mo(e){e.forEach(function(i){if(delete i.location,om(i)||um(i))for(var r in i.options)delete i.options[r].location,mo(i.options[r].value);else im(i)&&fm(i.style)||(sm(i)||lm(i))&&oo(i.style)?delete i.style.location:dm(i)&&mo(i.children)})}function FP(e,i){i===void 0&&(i={}),i=ge({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var r=new SP(e,i).parse();if(r.err){var t=SyntaxError(Ne[r.err.kind]);throw t.location=r.err.location,t.originalMessage=r.err.message,t}return i?.captureLocation||mo(r.val),r.val}var wr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(wr||(wr={}));var rt=function(e){hr(i,e);function i(r,t,s){var o=e.call(this,r)||this;return o.code=t,o.originalMessage=s,o}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Cg=function(e){hr(i,e);function i(r,t,s,o){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(t,'". Options are "').concat(Object.keys(s).join('", "'),'"'),wr.INVALID_VALUE,o)||this}return i}(rt),LP=function(e){hr(i,e);function i(r,t,s){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(t),wr.INVALID_VALUE,s)||this}return i}(rt),BP=function(e){hr(i,e);function i(r,t){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(t,'"'),wr.MISSING_VALUE,t)||this}return i}(rt),Pn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Pn||(Pn={}));function qP(e){return e.length<2?e:e.reduce(function(i,r){var t=i[i.length-1];return!t||t.type!==Pn.literal||r.type!==Pn.literal?i.push(r):t.value+=r.value,i},[])}function ym(e){return typeof e=="function"}function $i(e,i,r,t,s,o,u){if(e.length===1&&Fg(e[0]))return[{type:Pn.literal,value:e[0].value}];for(var f=[],c=0,m=e;c<m.length;c++){var v=m[c];if(Fg(v)){f.push({type:Pn.literal,value:v.value});continue}if(iP(v)){typeof o=="number"&&f.push({type:Pn.literal,value:r.getNumberFormat(i).format(o)});continue}var p=v.value;if(!(s&&p in s))throw new BP(p,u);var y=s[p];if(aP(v)){(!y||typeof y=="string"||typeof y=="number")&&(y=typeof y=="string"||typeof y=="number"?String(y):""),f.push({type:typeof y=="string"?Pn.literal:Pn.object,value:y});continue}if(sm(v)){var k=typeof v.style=="string"?t.date[v.style]:oo(v.style)?v.style.parsedOptions:void 0;f.push({type:Pn.literal,value:r.getDateTimeFormat(i,k).format(y)});continue}if(lm(v)){var k=typeof v.style=="string"?t.time[v.style]:oo(v.style)?v.style.parsedOptions:t.time.medium;f.push({type:Pn.literal,value:r.getDateTimeFormat(i,k).format(y)});continue}if(im(v)){var k=typeof v.style=="string"?t.number[v.style]:fm(v.style)?v.style.parsedOptions:void 0;k&&k.scale&&(y=y*(k.scale||1)),f.push({type:Pn.literal,value:r.getNumberFormat(i,k).format(y)});continue}if(dm(v)){var N=v.children,A=v.value,_=s[A];if(!ym(_))throw new LP(A,"function",u);var w=$i(N,i,r,t,s,o),S=_(w.map(function(I){return I.value}));Array.isArray(S)||(S=[S]),f.push.apply(f,S.map(function(I){return{type:typeof I=="string"?Pn.literal:Pn.object,value:I}}))}if(om(v)){var R=v.options[y]||v.options.other;if(!R)throw new Cg(v.value,y,Object.keys(v.options),u);f.push.apply(f,$i(R.value,i,r,t,s));continue}if(um(v)){var R=v.options["=".concat(y)];if(!R){if(!Intl.PluralRules)throw new rt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,wr.MISSING_INTL_API,u);var j=r.getPluralRules(i,{type:v.pluralType}).select(y-(v.offset||0));R=v.options[j]||v.options.other}if(!R)throw new Cg(v.value,y,Object.keys(v.options),u);f.push.apply(f,$i(R.value,i,r,t,s,y-(v.offset||0)));continue}}return qP(f)}function MP(e,i){return i?ge(ge(ge({},e||{}),i||{}),Object.keys(e).reduce(function(r,t){return r[t]=ge(ge({},e[t]),i[t]||{}),r},{})):e}function DP(e,i){return i?Object.keys(e).reduce(function(r,t){return r[t]=MP(e[t],i[t]),r},ge({},e)):e}function Wl(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function jP(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:kr(function(){for(var i,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((i=Intl.NumberFormat).bind.apply(i,Ar([void 0],r,!1)))},{cache:Wl(e.number),strategy:_r.variadic}),getDateTimeFormat:kr(function(){for(var i,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((i=Intl.DateTimeFormat).bind.apply(i,Ar([void 0],r,!1)))},{cache:Wl(e.dateTime),strategy:_r.variadic}),getPluralRules:kr(function(){for(var i,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((i=Intl.PluralRules).bind.apply(i,Ar([void 0],r,!1)))},{cache:Wl(e.pluralRules),strategy:_r.variadic})}}var km=function(){function e(i,r,t,s){r===void 0&&(r=e.defaultLocale);var o=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var m=o.formatToParts(c);if(m.length===1)return m[0].value;var v=m.reduce(function(p,y){return!p.length||y.type!==Pn.literal||typeof p[p.length-1]!="string"?p.push(y.value):p[p.length-1]+=y.value,p},[]);return v.length<=1?v[0]||"":v},this.formatToParts=function(c){return $i(o.ast,o.locales,o.formatters,o.formats,c,void 0,o.message)},this.resolvedOptions=function(){var c;return{locale:((c=o.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=s||{};u.formatters;var f=gs(u,["formatters"]);this.ast=e.__parse(i,ge(ge({},f),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=DP(e.formats,t),this.formatters=s&&s.formatters||jP(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(i);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=FP,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),At;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(At||(At={}));var Va=function(e){hr(i,e);function i(r,t,s){var o=this,u=s?s instanceof Error?s:new Error(String(s)):void 0;return o=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(t,`
`).concat(u?`
`.concat(u.message,`
`).concat(u.stack):""))||this,o.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,i),o}return i}(Error),CP=function(e){hr(i,e);function i(r,t){return e.call(this,At.UNSUPPORTED_FORMATTER,r,t)||this}return i}(Va),VP=function(e){hr(i,e);function i(r,t){return e.call(this,At.INVALID_CONFIG,r,t)||this}return i}(Va),Vg=function(e){hr(i,e);function i(r,t){return e.call(this,At.MISSING_DATA,r,t)||this}return i}(Va),ar=function(e){hr(i,e);function i(r,t,s){var o=e.call(this,At.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(t,`
`),s)||this;return o.locale=t,o}return i}(Va),zl=function(e){hr(i,e);function i(r,t,s,o){var u=e.call(this,"".concat(r,`
MessageID: `).concat(s?.id,`
Default Message: `).concat(s?.defaultMessage,`
Description: `).concat(s?.description,`
`),t,o)||this;return u.descriptor=s,u.locale=t,u}return i}(ar),GP=function(e){hr(i,e);function i(r,t){var s=e.call(this,At.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(t,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(o){var u;return(u=o.value)!==null&&u!==void 0?u:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=r,s}return i}(Va);function KP(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function Xt(e,i,r){return r===void 0&&(r={}),i.reduce(function(t,s){return s in e?t[s]=e[s]:s in r&&(t[s]=r[s]),t},{})}var UP=function(e){},HP=function(e){},_m={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:UP,onWarn:HP};function Am(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function mt(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function $P(e){e===void 0&&(e=Am());var i=Intl.RelativeTimeFormat,r=Intl.ListFormat,t=Intl.DisplayNames,s=kr(function(){for(var f,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((f=Intl.DateTimeFormat).bind.apply(f,Ar([void 0],c,!1)))},{cache:mt(e.dateTime),strategy:_r.variadic}),o=kr(function(){for(var f,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((f=Intl.NumberFormat).bind.apply(f,Ar([void 0],c,!1)))},{cache:mt(e.number),strategy:_r.variadic}),u=kr(function(){for(var f,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((f=Intl.PluralRules).bind.apply(f,Ar([void 0],c,!1)))},{cache:mt(e.pluralRules),strategy:_r.variadic});return{getDateTimeFormat:s,getNumberFormat:o,getMessageFormat:kr(function(f,c,m,v){return new km(f,c,m,ge({formatters:{getNumberFormat:o,getDateTimeFormat:s,getPluralRules:u}},v||{}))},{cache:mt(e.message),strategy:_r.variadic}),getRelativeTimeFormat:kr(function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return new(i.bind.apply(i,Ar([void 0],f,!1)))},{cache:mt(e.relativeTime),strategy:_r.variadic}),getPluralRules:u,getListFormat:kr(function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return new(r.bind.apply(r,Ar([void 0],f,!1)))},{cache:mt(e.list),strategy:_r.variadic}),getDisplayNames:kr(function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return new(t.bind.apply(t,Ar([void 0],f,!1)))},{cache:mt(e.displayNames),strategy:_r.variadic})}}function $o(e,i,r,t){var s=e&&e[i],o;if(s&&(o=s[r]),o)return o;t(new CP("No ".concat(i," format named: ").concat(r)))}function Di(e,i){return Object.keys(e).reduce(function(r,t){return r[t]=ge({timeZone:i},e[t]),r},{})}function Gg(e,i){var r=Object.keys(ge(ge({},e),i));return r.reduce(function(t,s){return t[s]=ge(ge({},e[s]||{}),i[s]||{}),t},{})}function Kg(e,i){if(!i)return e;var r=km.formats;return ge(ge(ge({},r),e),{date:Gg(Di(r.date,i),Di(e.date||{},i)),time:Gg(Di(r.time,i),Di(e.time||{},i))})}var vo=function(e,i,r,t,s){var o=e.locale,u=e.formats,f=e.messages,c=e.defaultLocale,m=e.defaultFormats,v=e.fallbackOnEmptyString,p=e.onError,y=e.timeZone,k=e.defaultRichTextElements;r===void 0&&(r={id:""});var N=r.id,A=r.defaultMessage;KP(!!N,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var _=String(N),w=f&&Object.prototype.hasOwnProperty.call(f,_)&&f[_];if(Array.isArray(w)&&w.length===1&&w[0].type===ze.literal)return w[0].value;if(!t&&w&&typeof w=="string"&&!k)return w.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=ge(ge({},k),t||{}),u=Kg(u,y),m=Kg(m,y),!w){if(v===!1&&w==="")return w;if((!A||o&&o.toLowerCase()!==c.toLowerCase())&&p(new GP(r,o)),A)try{var S=i.getMessageFormat(A,c,m,s);return S.format(t)}catch(R){return p(new zl('Error formatting default message for: "'.concat(_,'", rendering default message verbatim'),o,r,R)),typeof A=="string"?A:_}return _}try{var S=i.getMessageFormat(w,o,u,ge({formatters:i},s||{}));return S.format(t)}catch(R){p(new zl('Error formatting message: "'.concat(_,'", using ').concat(A?"default message":"id"," as fallback."),o,r,R))}if(A)try{var S=i.getMessageFormat(A,c,m,s);return S.format(t)}catch(R){p(new zl('Error formatting the default message for: "'.concat(_,'", rendering message verbatim'),o,r,R))}return typeof w=="string"?w:typeof A=="string"?A:_},YP=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ga(e,i,r,t){var s=e.locale,o=e.formats,u=e.onError,f=e.timeZone;t===void 0&&(t={});var c=t.format,m=ge(ge({},f&&{timeZone:f}),c&&$o(o,i,c,u)),v=Xt(t,YP,m);return i==="time"&&!v.hour&&!v.minute&&!v.second&&!v.timeStyle&&!v.dateStyle&&(v=ge(ge({},v),{hour:"numeric",minute:"numeric"})),r(s,v)}function WP(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],o=r[1],u=o===void 0?{}:o,f=typeof s=="string"?new Date(s||0):s;try{return Ga(e,"date",i,u).format(f)}catch(c){e.onError(new ar("Error formatting date.",e.locale,c))}return String(f)}function zP(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],o=r[1],u=o===void 0?{}:o,f=typeof s=="string"?new Date(s||0):s;try{return Ga(e,"time",i,u).format(f)}catch(c){e.onError(new ar("Error formatting time.",e.locale,c))}return String(f)}function XP(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],o=r[1],u=r[2],f=u===void 0?{}:u,c=typeof s=="string"?new Date(s||0):s,m=typeof o=="string"?new Date(o||0):o;try{return Ga(e,"dateTimeRange",i,f).formatRange(c,m)}catch(v){e.onError(new ar("Error formatting date time range.",e.locale,v))}return String(c)}function ZP(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],o=r[1],u=o===void 0?{}:o,f=typeof s=="string"?new Date(s||0):s;try{return Ga(e,"date",i,u).formatToParts(f)}catch(c){e.onError(new ar("Error formatting date.",e.locale,c))}return[]}function JP(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],o=r[1],u=o===void 0?{}:o,f=typeof s=="string"?new Date(s||0):s;try{return Ga(e,"time",i,u).formatToParts(f)}catch(c){e.onError(new ar("Error formatting time.",e.locale,c))}return[]}var QP=["style","type","fallback","languageDisplay"];function ew(e,i,r,t){var s=e.locale,o=e.onError,u=Intl.DisplayNames;u||o(new rt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,wr.MISSING_INTL_API));var f=Xt(t,QP);try{return i(s,f).of(r)}catch(c){o(new ar("Error formatting display name.",s,c))}}var nw=["type","style"],Ug=Date.now();function rw(e){return"".concat(Ug,"_").concat(e,"_").concat(Ug)}function tw(e,i,r,t){t===void 0&&(t={});var s=Em(e,i,r,t).reduce(function(o,u){var f=u.value;return typeof f!="string"?o.push(f):typeof o[o.length-1]=="string"?o[o.length-1]+=f:o.push(f),o},[]);return s.length===1?s[0]:s.length===0?"":s}function Em(e,i,r,t){var s=e.locale,o=e.onError;t===void 0&&(t={});var u=Intl.ListFormat;u||o(new rt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,wr.MISSING_INTL_API));var f=Xt(t,nw);try{var c={},m=r.map(function(v,p){if(typeof v=="object"){var y=rw(p);return c[y]=v,y}return String(v)});return i(s,f).formatToParts(m).map(function(v){return v.type==="literal"?v:ge(ge({},v),{value:c[v.value]||v.value})})}catch(v){o(new ar("Error formatting list.",s,v))}return r}var aw=["type"];function iw(e,i,r,t){var s=e.locale,o=e.onError;t===void 0&&(t={}),Intl.PluralRules||o(new rt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,wr.MISSING_INTL_API));var u=Xt(t,aw);try{return i(s,u).select(r)}catch(f){o(new ar("Error formatting plural.",s,f))}return"other"}var sw=["numeric","style"];function lw(e,i,r){var t=e.locale,s=e.formats,o=e.onError;r===void 0&&(r={});var u=r.format,f=!!u&&$o(s,"relative",u,o)||{},c=Xt(r,sw,f);return i(t,c)}function ow(e,i,r,t,s){s===void 0&&(s={}),t||(t="second");var o=Intl.RelativeTimeFormat;o||e.onError(new rt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,wr.MISSING_INTL_API));try{return lw(e,i,s).format(r,t)}catch(u){e.onError(new ar("Error formatting relative time.",e.locale,u))}return String(r)}var uw=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Tm(e,i,r){var t=e.locale,s=e.formats,o=e.onError;r===void 0&&(r={});var u=r.format,f=u&&$o(s,"number",u,o)||{},c=Xt(r,uw,f);return i(t,c)}function dw(e,i,r,t){t===void 0&&(t={});try{return Tm(e,i,t).format(r)}catch(s){e.onError(new ar("Error formatting number.",e.locale,s))}return String(r)}function fw(e,i,r,t){t===void 0&&(t={});try{return Tm(e,i,t).formatToParts(r)}catch(s){e.onError(new ar("Error formatting number.",e.locale,s))}return[]}function gw(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function cw(e){e.onWarn&&e.defaultRichTextElements&&gw(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function mw(e,i){var r=$P(i),t=ge(ge({},_m),e),s=t.locale,o=t.defaultLocale,u=t.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&u?u(new Vg('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&u&&u(new Vg('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(u&&u(new VP('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),cw(t),ge(ge({},t),{formatters:r,formatNumber:dw.bind(null,t,r.getNumberFormat),formatNumberToParts:fw.bind(null,t,r.getNumberFormat),formatRelativeTime:ow.bind(null,t,r.getRelativeTimeFormat),formatDate:WP.bind(null,t,r.getDateTimeFormat),formatDateToParts:ZP.bind(null,t,r.getDateTimeFormat),formatTime:zP.bind(null,t,r.getDateTimeFormat),formatDateTimeRange:XP.bind(null,t,r.getDateTimeFormat),formatTimeToParts:JP.bind(null,t,r.getDateTimeFormat),formatPlural:iw.bind(null,t,r.getPluralRules),formatMessage:vo.bind(null,t,r),$t:vo.bind(null,t,r),formatList:tw.bind(null,t,r.getListFormat),formatListToParts:Em.bind(null,t,r.getListFormat),formatDisplayName:ew.bind(null,t,r.getDisplayNames)})}function vw(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function hw(e){vw(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var bw=ge(ge({},_m),{textComponent:T.Fragment}),pw={key:42},yw=function(e){return T.isValidElement(e)?T.createElement(T.Fragment,pw,e):e},kw=function(e){var i;return(i=T.Children.map(e,yw))!==null&&i!==void 0?i:[]};function _w(e){return function(i){return e(T.Children.toArray(i))}}var Hg={exports:{}},Me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function Aw(){if($g)return Me;$g=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,v=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,k=e?Symbol.for("react.memo"):60115,N=e?Symbol.for("react.lazy"):60116,A=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function R(I){if(typeof I=="object"&&I!==null){var G=I.$$typeof;switch(G){case i:switch(I=I.type,I){case c:case m:case t:case o:case s:case p:return I;default:switch(I=I&&I.$$typeof,I){case f:case v:case N:case k:case u:return I;default:return G}}case r:return G}}}function j(I){return R(I)===m}return Me.AsyncMode=c,Me.ConcurrentMode=m,Me.ContextConsumer=f,Me.ContextProvider=u,Me.Element=i,Me.ForwardRef=v,Me.Fragment=t,Me.Lazy=N,Me.Memo=k,Me.Portal=r,Me.Profiler=o,Me.StrictMode=s,Me.Suspense=p,Me.isAsyncMode=function(I){return j(I)||R(I)===c},Me.isConcurrentMode=j,Me.isContextConsumer=function(I){return R(I)===f},Me.isContextProvider=function(I){return R(I)===u},Me.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===i},Me.isForwardRef=function(I){return R(I)===v},Me.isFragment=function(I){return R(I)===t},Me.isLazy=function(I){return R(I)===N},Me.isMemo=function(I){return R(I)===k},Me.isPortal=function(I){return R(I)===r},Me.isProfiler=function(I){return R(I)===o},Me.isStrictMode=function(I){return R(I)===s},Me.isSuspense=function(I){return R(I)===p},Me.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===t||I===m||I===o||I===s||I===p||I===y||typeof I=="object"&&I!==null&&(I.$$typeof===N||I.$$typeof===k||I.$$typeof===u||I.$$typeof===f||I.$$typeof===v||I.$$typeof===_||I.$$typeof===w||I.$$typeof===S||I.$$typeof===A)},Me.typeOf=R,Me}var Yg;function Ew(){return Yg||(Yg=1,Hg.exports=Aw()),Hg.exports}var Xl,Wg;function Tw(){if(Wg)return Xl;Wg=1;var e=Ew(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=t,o[e.Memo]=s;function u(N){return e.isMemo(N)?s:o[N.$$typeof]||i}var f=Object.defineProperty,c=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;function k(N,A,_){if(typeof A!="string"){if(y){var w=p(A);w&&w!==y&&k(N,w,_)}var S=c(A);m&&(S=S.concat(m(A)));for(var R=u(N),j=u(A),I=0;I<S.length;++I){var G=S[I];if(!r[G]&&!(_&&_[G])&&!(j&&j[G])&&!(R&&R[G])){var D=v(A,G);try{f(N,G,D)}catch{}}}}return N}return Xl=k,Xl}Tw();var Yo=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=T.createContext(null)):T.createContext(null);Yo.Consumer;Yo.Provider;var Pw=Yo;function Pm(){var e=T.useContext(Pw);return hw(e),e}var ho;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(ho||(ho={}));var bo;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(bo||(bo={}));function wm(e){var i=function(r){var t=Pm(),s=r.value,o=r.children,u=gs(r,["value","children"]),f=typeof s=="string"?new Date(s||0):s,c=e==="formatDate"?t.formatDateToParts(f,u):t.formatTimeToParts(f,u);return o(c)};return i.displayName=bo[e],i}function Ka(e){var i=function(r){var t=Pm(),s=r.value,o=r.children,u=gs(r,["value","children"]),f=t[e](s,u);if(typeof o=="function")return o(f);var c=t.textComponent||T.Fragment;return T.createElement(c,null,f)};return i.displayName=ho[e],i}function Rm(e){return e&&Object.keys(e).reduce(function(i,r){var t=e[r];return i[r]=ym(t)?_w(t):t,i},{})}var zg=function(e,i,r,t){for(var s=[],o=4;o<arguments.length;o++)s[o-4]=arguments[o];var u=Rm(t),f=vo.apply(void 0,Ar([e,i,r,u],s,!1));return Array.isArray(f)?kw(f):f},ww=function(e,i){var r=e.defaultRichTextElements,t=gs(e,["defaultRichTextElements"]),s=Rm(r),o=mw(ge(ge(ge({},bw),t),{defaultRichTextElements:s}),i),u={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:s};return ge(ge({},o),{formatMessage:zg.bind(null,u,o.formatters),$t:zg.bind(null,u,o.formatters)})};Ka("formatDate");Ka("formatTime");Ka("formatNumber");Ka("formatList");Ka("formatDisplayName");wm("formatDate");wm("formatTime");function Wo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var po={exports:{}},Rw=po.exports,Xg;function Ow(){return Xg||(Xg=1,function(e,i){(function(r,t){e.exports=t()})(Rw,function(){var r,t,s=1e3,o=6e4,u=36e5,f=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,v=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:m,months:v,days:f,hours:u,minutes:o,seconds:s,milliseconds:1,weeks:6048e5},k=function(G){return G instanceof j},N=function(G,D,C){return new j(G,C,D.$l)},A=function(G){return t.p(G)+"s"},_=function(G){return G<0},w=function(G){return _(G)?Math.ceil(G):Math.floor(G)},S=function(G){return Math.abs(G)},R=function(G,D){return G?_(G)?{negative:!0,format:""+S(G)+D}:{negative:!1,format:""+G+D}:{negative:!1,format:""}},j=function(){function G(C,$,ne){var ee=this;if(this.$d={},this.$l=ne,C===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return N(C*y[A($)],this);if(typeof C=="number")return this.$ms=C,this.parseFromMilliseconds(),this;if(typeof C=="object")return Object.keys(C).forEach(function(M){ee.$d[A(M)]=C[M]}),this.calMilliseconds(),this;if(typeof C=="string"){var K=C.match(p);if(K){var q=K.slice(2).map(function(M){return M!=null?Number(M):0});return this.$d.years=q[0],this.$d.months=q[1],this.$d.weeks=q[2],this.$d.days=q[3],this.$d.hours=q[4],this.$d.minutes=q[5],this.$d.seconds=q[6],this.calMilliseconds(),this}}return this}var D=G.prototype;return D.calMilliseconds=function(){var C=this;this.$ms=Object.keys(this.$d).reduce(function($,ne){return $+(C.$d[ne]||0)*y[ne]},0)},D.parseFromMilliseconds=function(){var C=this.$ms;this.$d.years=w(C/m),C%=m,this.$d.months=w(C/v),C%=v,this.$d.days=w(C/f),C%=f,this.$d.hours=w(C/u),C%=u,this.$d.minutes=w(C/o),C%=o,this.$d.seconds=w(C/s),C%=s,this.$d.milliseconds=C},D.toISOString=function(){var C=R(this.$d.years,"Y"),$=R(this.$d.months,"M"),ne=+this.$d.days||0;this.$d.weeks&&(ne+=7*this.$d.weeks);var ee=R(ne,"D"),K=R(this.$d.hours,"H"),q=R(this.$d.minutes,"M"),M=this.$d.seconds||0;this.$d.milliseconds&&(M+=this.$d.milliseconds/1e3,M=Math.round(1e3*M)/1e3);var X=R(M,"S"),re=C.negative||$.negative||ee.negative||K.negative||q.negative||X.negative,Z=K.format||q.format||X.format?"T":"",W=(re?"-":"")+"P"+C.format+$.format+ee.format+Z+K.format+q.format+X.format;return W==="P"||W==="-P"?"P0D":W},D.toJSON=function(){return this.toISOString()},D.format=function(C){var $=C||"YYYY-MM-DDTHH:mm:ss",ne={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return $.replace(c,function(ee,K){return K||String(ne[ee])})},D.as=function(C){return this.$ms/y[A(C)]},D.get=function(C){var $=this.$ms,ne=A(C);return ne==="milliseconds"?$%=1e3:$=ne==="weeks"?w($/y[ne]):this.$d[ne],$||0},D.add=function(C,$,ne){var ee;return ee=$?C*y[A($)]:k(C)?C.$ms:N(C,this).$ms,N(this.$ms+ee*(ne?-1:1),this)},D.subtract=function(C,$){return this.add(C,$,!0)},D.locale=function(C){var $=this.clone();return $.$l=C,$},D.clone=function(){return N(this.$ms,this)},D.humanize=function(C){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!C)},D.valueOf=function(){return this.asMilliseconds()},D.milliseconds=function(){return this.get("milliseconds")},D.asMilliseconds=function(){return this.as("milliseconds")},D.seconds=function(){return this.get("seconds")},D.asSeconds=function(){return this.as("seconds")},D.minutes=function(){return this.get("minutes")},D.asMinutes=function(){return this.as("minutes")},D.hours=function(){return this.get("hours")},D.asHours=function(){return this.as("hours")},D.days=function(){return this.get("days")},D.asDays=function(){return this.as("days")},D.weeks=function(){return this.get("weeks")},D.asWeeks=function(){return this.as("weeks")},D.months=function(){return this.get("months")},D.asMonths=function(){return this.as("months")},D.years=function(){return this.get("years")},D.asYears=function(){return this.as("years")},G}(),I=function(G,D,C){return G.add(D.years()*C,"y").add(D.months()*C,"M").add(D.days()*C,"d").add(D.hours()*C,"h").add(D.minutes()*C,"m").add(D.seconds()*C,"s").add(D.milliseconds()*C,"ms")};return function(G,D,C){r=C,t=C().$utils(),C.duration=function(ee,K){var q=C.locale();return N(ee,{$l:q},K)},C.isDuration=k;var $=D.prototype.add,ne=D.prototype.subtract;D.prototype.add=function(ee,K){return k(ee)?I(this,ee,1):$.bind(this)(ee,K)},D.prototype.subtract=function(ee,K){return k(ee)?I(this,ee,-1):ne.bind(this)(ee,K)}}})}(po)),po.exports}var Sw=Ow();const Iw=Wo(Sw);var yo={exports:{}},Nw=yo.exports,Zg;function xw(){return Zg||(Zg=1,function(e,i){(function(r,t){e.exports=t()})(Nw,function(){var r="day";return function(t,s,o){var u=function(m){return m.add(4-m.isoWeekday(),r)},f=s.prototype;f.isoWeekYear=function(){return u(this).year()},f.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),r);var v,p,y,k,N=u(this),A=(v=this.isoWeekYear(),p=this.$u,y=(p?o.utc:o)().year(v).startOf("year"),k=4-y.isoWeekday(),y.isoWeekday()>4&&(k+=7),y.add(k,r));return N.diff(A,"week")+1},f.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var c=f.startOf;f.startOf=function(m,v){var p=this.$utils(),y=!!p.u(v)||v;return p.p(m)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(m,v)}}})}(yo)),yo.exports}var Fw=xw();const Lw=Wo(Fw);var ko={exports:{}},Bw=ko.exports,Jg;function qw(){return Jg||(Jg=1,function(e,i){(function(r,t){e.exports=t()})(Bw,function(){var r="minute",t=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(o,u,f){var c=u.prototype;f.utc=function(A){var _={date:A,utc:!0,args:arguments};return new u(_)},c.utc=function(A){var _=f(this.toDate(),{locale:this.$L,utc:!0});return A?_.add(this.utcOffset(),r):_},c.local=function(){return f(this.toDate(),{locale:this.$L,utc:!1})};var m=c.parse;c.parse=function(A){A.utc&&(this.$u=!0),this.$utils().u(A.$offset)||(this.$offset=A.$offset),m.call(this,A)};var v=c.init;c.init=function(){if(this.$u){var A=this.$d;this.$y=A.getUTCFullYear(),this.$M=A.getUTCMonth(),this.$D=A.getUTCDate(),this.$W=A.getUTCDay(),this.$H=A.getUTCHours(),this.$m=A.getUTCMinutes(),this.$s=A.getUTCSeconds(),this.$ms=A.getUTCMilliseconds()}else v.call(this)};var p=c.utcOffset;c.utcOffset=function(A,_){var w=this.$utils().u;if(w(A))return this.$u?0:w(this.$offset)?p.call(this):this.$offset;if(typeof A=="string"&&(A=function(I){I===void 0&&(I="");var G=I.match(t);if(!G)return null;var D=(""+G[0]).match(s)||["-",0,0],C=D[0],$=60*+D[1]+ +D[2];return $===0?0:C==="+"?$:-$}(A),A===null))return this;var S=Math.abs(A)<=16?60*A:A,R=this;if(_)return R.$offset=S,R.$u=A===0,R;if(A!==0){var j=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(R=this.local().add(S+j,r)).$offset=S,R.$x.$localOffset=j}else R=this.utc();return R};var y=c.format;c.format=function(A){var _=A||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,_)},c.valueOf=function(){var A=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*A},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var k=c.toDate;c.toDate=function(A){return A==="s"&&this.$offset?f(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():k.call(this)};var N=c.diff;c.diff=function(A,_,w){if(A&&this.$u===A.$u)return N.call(this,A,_,w);var S=this.local(),R=f(A).local();return N.call(S,R,_,w)}}})}(ko)),ko.exports}var Mw=qw();const Dw=Wo(Mw),jw=Am(),cs=e=>ww({locale:"nb-NO",messages:e},jw),ms={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};cs(ms);var _o={exports:{}},Cw=_o.exports,Qg;function Vw(){return Qg||(Qg=1,function(e,i){(function(r,t){e.exports=t(Gr)})(Cw,function(r){function t(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var s=t(r),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(o,null,!0),o})}(_o)),_o.exports}Vw();Gr.extend(Dw);Gr.extend(Lw);Gr.extend(Iw);cs(ms);cs(ms);var ec={exports:{}},Ea={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc;function Gw(){if(nc)return Ea;nc=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,o){var u=null;if(o!==void 0&&(u=""+o),s.key!==void 0&&(u=""+s.key),"key"in s){o={};for(var f in s)f!=="key"&&(o[f]=s[f])}else o=s;return s=o.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:o}}return Ea.Fragment=i,Ea.jsx=r,Ea.jsxs=r,Ea}var rc;function Kw(){return rc||(rc=1,ec.exports=Gw()),ec.exports}Kw();cs(ms);T.createContext({});var Ao={exports:{}},Uw=Ao.exports,tc;function Hw(){return tc||(tc=1,function(e,i){(function(r,t){e.exports=t()})(Uw,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,o=/\d\d/,u=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,c={},m=function(_){return(_=+_)+(_>68?1900:2e3)},v=function(_){return function(w){this[_]=+w}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var S=w.match(/([+-]|\d\d)/g),R=60*S[1]+(+S[2]||0);return R===0?0:S[0]==="+"?-R:R}(_)}],y=function(_){var w=c[_];return w&&(w.indexOf?w:w.s.concat(w.f))},k=function(_,w){var S,R=c.meridiem;if(R){for(var j=1;j<=24;j+=1)if(_.indexOf(R(j,0,w))>-1){S=j>12;break}}else S=_===(w?"pm":"PM");return S},N={A:[f,function(_){this.afternoon=k(_,!1)}],a:[f,function(_){this.afternoon=k(_,!0)}],Q:[s,function(_){this.month=3*(_-1)+1}],S:[s,function(_){this.milliseconds=100*+_}],SS:[o,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[u,v("seconds")],ss:[u,v("seconds")],m:[u,v("minutes")],mm:[u,v("minutes")],H:[u,v("hours")],h:[u,v("hours")],HH:[u,v("hours")],hh:[u,v("hours")],D:[u,v("day")],DD:[o,v("day")],Do:[f,function(_){var w=c.ordinal,S=_.match(/\d+/);if(this.day=S[0],w)for(var R=1;R<=31;R+=1)w(R).replace(/\[|\]/g,"")===_&&(this.day=R)}],w:[u,v("week")],ww:[o,v("week")],M:[u,v("month")],MM:[o,v("month")],MMM:[f,function(_){var w=y("months"),S=(y("monthsShort")||w.map(function(R){return R.slice(0,3)})).indexOf(_)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[f,function(_){var w=y("months").indexOf(_)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,v("year")],YY:[o,function(_){this.year=m(_)}],YYYY:[/\d{4}/,v("year")],Z:p,ZZ:p};function A(_){var w,S;w=_,S=c&&c.formats;for(var R=(_=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(ne,ee,K){var q=K&&K.toUpperCase();return ee||S[K]||r[K]||S[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,X,re){return X||re.slice(1)})})).match(t),j=R.length,I=0;I<j;I+=1){var G=R[I],D=N[G],C=D&&D[0],$=D&&D[1];R[I]=$?{regex:C,parser:$}:G.replace(/^\[|\]$/g,"")}return function(ne){for(var ee={},K=0,q=0;K<j;K+=1){var M=R[K];if(typeof M=="string")q+=M.length;else{var X=M.regex,re=M.parser,Z=ne.slice(q),W=X.exec(Z)[0];re.call(ee,W),ne=ne.replace(W,"")}}return function(J){var de=J.afternoon;if(de!==void 0){var oe=J.hours;de?oe<12&&(J.hours+=12):oe===12&&(J.hours=0),delete J.afternoon}}(ee),ee}}return function(_,w,S){S.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(m=_.parseTwoDigitYear);var R=w.prototype,j=R.parse;R.parse=function(I){var G=I.date,D=I.utc,C=I.args;this.$u=D;var $=C[1];if(typeof $=="string"){var ne=C[2]===!0,ee=C[3]===!0,K=ne||ee,q=C[2];ee&&(q=C[2]),c=this.$locale(),!ne&&q&&(c=S.Ls[q]),this.$d=function(Z,W,J,de){try{if(["x","X"].indexOf(W)>-1)return new Date((W==="X"?1e3:1)*Z);var oe=A(W)(Z),ve=oe.year,_e=oe.month,_n=oe.day,Ye=oe.hours,Ve=oe.minutes,Ge=oe.seconds,Te=oe.milliseconds,xe=oe.zone,nn=oe.week,Xe=new Date,Ze=_n||(ve||_e?1:Xe.getDate()),Rn=ve||Xe.getFullYear(),Ke=0;ve&&!_e||(Ke=_e>0?_e-1:Xe.getMonth());var ln,ir=Ye||0,un=Ve||0,sr=Ge||0,Hn=Te||0;return xe?new Date(Date.UTC(Rn,Ke,Ze,ir,un,sr,Hn+60*xe.offset*1e3)):J?new Date(Date.UTC(Rn,Ke,Ze,ir,un,sr,Hn)):(ln=new Date(Rn,Ke,Ze,ir,un,sr,Hn),nn&&(ln=de(ln).week(nn).toDate()),ln)}catch{return new Date("")}}(G,$,D,S),this.init(),q&&q!==!0&&(this.$L=this.locale(q).$L),K&&G!=this.format($)&&(this.$d=new Date("")),c={}}else if($ instanceof Array)for(var M=$.length,X=1;X<=M;X+=1){C[1]=$[X-1];var re=S.apply(this,C);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}X===M&&(this.$d=new Date(""))}else j.call(this,I)}}})}(Ao)),Ao.exports}var $w=Hw();const Yw=KT($w);Gr.extend(Yw);vr(ja);const Om=({aksjonspunkt:e,readOnly:i,submittable:r,submitCallback:t})=>{const[s,o]=T.useState(!1),{mellomlagretFormData:u,setMellomlagretFormData:f}=k_(),c=fT({defaultValues:u??Ww(e)}),m=c.watch("begrunnelse");return ie.jsxs(_t,{gap:"space-16",children:[e.status===Yt.OPPRETTET&&ie.jsx(h5,{children:[ie.jsx(Bn,{id:"BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll"},"BesteberegningAksjonspunktTekst")]}),ie.jsx(RT,{formMethods:c,onSubmit:v=>t(zw(v)),setDataOnUnmount:f,children:ie.jsxs(_t,{gap:"space-16",children:[ie.jsx(vT,{name:"besteberegningErKorrektValg",control:c.control,label:ie.jsx(Bn,{id:"BesteberegningProsessPanel.Aksjonspunkt.Radiotekst"}),readOnly:i,onChange:()=>o(!s)}),ie.jsx(Ca,{control:c.control,isSubmittable:r,isReadOnly:i,hasBegrunnelse:!!m,hasVurderingText:!0}),ie.jsx(nm,{isSubmittable:r&&s,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isDirty,isReadOnly:i})]})})]})},Ww=e=>{const i=e.status===Yt.UTFORT;return{...Ca.initialValues(e),besteberegningErKorrektValg:i?!0:void 0}},zw=e=>({kode:nt.MANUELL_KONTROLL_AV_BESTEBEREGNING,begrunnelse:e.begrunnelse,besteberegningErKorrekt:!!e.besteberegningErKorrektValg});Om.__docgenInfo={description:`KontrollerBesteberegningPanel

Formkomponent. Lar saksbehandler vurdere om den automatiske besteberegningen er korrekt utført.`,methods:[],displayName:"KontrollerBesteberegningPanel",props:{aksjonspunkt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ManuellKontrollBesteberegningAP) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const Sm=({beregningsgrunnlag:e,arbeidsgiverOpplysninger:i,submittable:r})=>{const{alleKodeverk:t,aksjonspunkterForPanel:s,submitCallback:o,isReadOnly:u}=__(),{ytelsesspesifiktGrunnlag:f,beregningsgrunnlagPeriode:c}=e,m=f?.besteberegninggrunnlag;if(!m)return null;const v=c[0],p=s.find(y=>y.definisjon===nt.KONTROLLER_AUTOMATISK_BESTEBEREGNING||y.definisjon===nt.MANUELL_KONTROLL_AV_BESTEBEREGNING);return ie.jsxs(_t,{gap:"space-16",children:[!!p&&ie.jsx(Om,{aksjonspunkt:p,submitCallback:o,submittable:r,readOnly:u}),ie.jsx(sg,{children:ie.jsx(Cc,{periode:v,besteMåneder:m.besteMåneder})}),ie.jsx(sg,{children:ie.jsx(Vc,{besteMåneder:m.besteMåneder,arbeidsgiverOpplysninger:i,alleKodeverk:t})})]})};Sm.__docgenInfo={description:`BesteberegningPanel

Container komponent. Holder paneler for resultat av besteberegning og inntektsgrunnlag`,methods:[],displayName:"BesteberegningPanel",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}`,signature:{properties:[{key:"avklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!1}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!1}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"aktørIdString",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"visningsnavn",value:{name:"string",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}>`,required:!1}},{key:"andelerMedGraderingUtenBG",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}},{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: OpptjeningAktivitetType;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: OpptjeningAktivitetType;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`,required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  måneder?: InntektsgrunnlagMåned[];
}`,signature:{properties:[{key:"måneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektAktivitetType: string;
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  inntektAktivitetType: string;
  beløp: number;
}>`}],raw:"InntektsgrunnlagInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}>`}],raw:"InntektsgrunnlagMåned[]",required:!1}}]}}],raw:`Readonly<{
  måneder?: InntektsgrunnlagMåned[];
}>`,required:!1}}]}}],raw:`Readonly<{
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const Xw={"BesteberegningProsessPanel.Måned.Inntekt.Aktivitet":"Aktivitet","BesteberegningProsessPanel.Måned.Inntekt.Inntekt":"Inntekt","Inntekttabell.Tittel":"Inntektsgrunnlag for besteberegning","Inntekttabell.Sum":"Total for måned","Inntekttabell.BeregnetÅrsinntekt":"Beregnet årsinntekt: {inntekt}","ResultatGrunnlag.BruttoBeregningsgrunnlag":"Brutto beregningsgrunnlag","ResultatGrunnlag.BeregningEtterBesteberegning":"Beregning etter § 14-7, 3. ledd","ResultatGrunnlag.BeregningEtterKap8":"Beregning etter § 14-7, 1. ledd","ResultatGrunnlag.Kap8GirBesteBeregning":"Beregning etter § 14-7, 1. ledd gir beste beregning.","ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter § 14-7, 3. ledd gir beste beregning.","BesteberegningProsessPanel.Aksjonspunkt.Radiotekst":"Beregningen er riktig, fortsett behandlingen.","BesteberegningProsessPanel.Aksjonspunkt.HelpText":"Saken er automatisk besteberegnet, vennligst kontroller beregningen","BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll":"Saken er tatt ut til kontroll på grunn av stort avvik mellom 3. og 1. ledd. Vennligst kontroller beregningen"},Zw=vr(Xw),Eo=e=>ie.jsx(Po,{value:Zw,children:ie.jsx(Sm,{...e})});Eo.__docgenInfo={description:"",methods:[],displayName:"BesteberegningFaktaIndex",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}`,signature:{properties:[{key:"avklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!1}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!1}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"aktørIdString",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"visningsnavn",value:{name:"string",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}>`,required:!1}},{key:"andelerMedGraderingUtenBG",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}},{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: OpptjeningAktivitetType;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: OpptjeningAktivitetType;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`,required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  måneder?: InntektsgrunnlagMåned[];
}`,signature:{properties:[{key:"måneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektAktivitetType: string;
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  inntektAktivitetType: string;
  beløp: number;
}>`}],raw:"InntektsgrunnlagInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}>`}],raw:"InntektsgrunnlagMåned[]",required:!1}}]}}],raw:`Readonly<{
  måneder?: InntektsgrunnlagMåned[];
}>`,required:!1}}]}}],raw:`Readonly<{
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const Jw={besteMåneder:[{fom:"2020-01-01",tom:"2020-01-31",inntekter:[{opptjeningAktivitetType:xn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:xn.ARBEID,arbeidsgiverId:"974652269",inntekt:2e4}]},{fom:"2020-02-01",tom:"2020-02-29",inntekter:[{opptjeningAktivitetType:xn.DAGPENGER,inntekt:5531}]},{fom:"2020-03-01",tom:"2020-03-31",inntekter:[{opptjeningAktivitetType:xn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:xn.ARBEID,arbeidsgiverId:"974652269",inntekt:4321},{opptjeningAktivitetType:xn.DAGPENGER,inntekt:354},{opptjeningAktivitetType:xn.ARBEID,arbeidsgiverId:"6823424234232",inntekt:32894}]},{fom:"2020-04-01",tom:"2020-04-30",inntekter:[{opptjeningAktivitetType:xn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:xn.ARBEID,arbeidsgiverId:"974652269",inntekt:25322}]},{fom:"2020-05-01",tom:"2020-05-31",inntekter:[{opptjeningAktivitetType:xn.DAGPENGER,inntekt:354},{opptjeningAktivitetType:xn.DAGPENGER,inntekt:5531}]},{fom:"2020-06-01",tom:"2020-06-30",inntekter:[{opptjeningAktivitetType:xn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:xn.DAGPENGER,inntekt:354}]}]},vs={avklaringsbehov:[],skjaeringstidspunktBeregning:"2020-01-13",aktivitetStatus:["AT","DP"],beregningsgrunnlagPeriode:[{beregningsgrunnlagPeriodeFom:"2020-01-13",beregnetPrAar:56e4,bruttoPrAar:75e4,bruttoInkludertBortfaltNaturalytelsePrAar:0,avkortetPrAar:6e5,redusertPrAar:6e5,periodeAarsaker:[],beregningsgrunnlagPrStatusOgAndel:[{aktivitetStatus:"AT",beregningsperiodeFom:"2019-10-01",beregningsperiodeTom:"2019-12-31",beregnetPrAar:36e4,andelsnr:1,besteberegningPrAar:4e5,inntektskategori:"ARBEIDSTAKER",arbeidsforhold:{arbeidsgiverNavn:"BEDRIFT AS",arbeidsgiverId:"974652269",startdato:"2019-02-03",opphoersdato:"2020-02-03",arbeidsforholdType:"ARBEID",belopFraInntektsmeldingPrMnd:3e4,organisasjonstype:"VIRKSOMHET"},lagtTilAvSaksbehandler:!1,erTilkommetAndel:!1,skalFastsetteGrunnlag:!1},{beregningsperiodeFom:"2019-10-01",beregningsperiodeTom:"2019-12-31",aktivitetStatus:"DP",beregnetPrAar:2e5,andelsnr:2,besteberegningPrAar:35e4,inntektskategori:"DAGPENGER",fastsattAvSaksbehandler:!1,lagtTilAvSaksbehandler:!1,belopPrMndEtterAOrdningen:1e4,belopPrAarEtterAOrdningen:12e4,erTilkommetAndel:!1,skalFastsetteGrunnlag:!1}]}],ytelsesspesifiktGrunnlag:{besteberegninggrunnlag:Jw,ytelsetype:"FP"},sammenligningsgrunnlagPrStatus:[],grunnbeløp:99858,dekningsgrad:100,erOverstyrtInntekt:!1},Qw={974652269:{erPrivatPerson:!1,navn:"BEDRIFT AS",identifikator:"974652269",referanse:"974652269"},6823424234232:{erPrivatPerson:!0,navn:"Testy Test",identifikator:"6823424234232",referanse:"123",fødselsdato:"1943-03-03"}},zo={definisjon:nt.VURDER_INNSYN,status:Yt.OPPRETTET,begrunnelse:null,kanLoses:!0,toTrinnsBehandling:!1,toTrinnsBehandlingGodkjent:null,vurderPaNyttArsaker:null,besluttersBegrunnelse:null,aksjonspunktType:oc.AUTOPUNKT,vilkarType:uc.OMSORGSVILKARET,erAktivt:!0,fristTid:null,endretTidspunkt:null,endretAv:null},iR={title:"fakta/fakta-besteberegning",component:Eo,decorators:[A_,E_],args:{submittable:!0,arbeidsgiverOpplysninger:Qw},render:e=>ie.jsx(Eo,{...e})},ji={args:{aksjonspunkterForPanel:[],beregningsgrunnlag:vs}},Ci={args:{beregningsgrunnlag:vs,aksjonspunkterForPanel:[{...zo,definisjon:nt.KONTROLLER_AUTOMATISK_BESTEBEREGNING,status:Yt.OPPRETTET}]}},Vi={args:{beregningsgrunnlag:vs,aksjonspunkterForPanel:[{...zo,definisjon:nt.KONTROLLER_AUTOMATISK_BESTEBEREGNING,status:Yt.UTFORT,begrunnelse:"Min begrunnelse for at besteberegningen er feil"}]}},Gi={args:{beregningsgrunnlag:vs,aksjonspunkterForPanel:[{...zo,definisjon:nt.KONTROLLER_AUTOMATISK_BESTEBEREGNING,status:Yt.OPPRETTET}]}};ji.parameters={...ji.parameters,docs:{...ji.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    beregningsgrunnlag: scenarioBG
  }
}`,...ji.parameters?.docs?.source}}};Ci.parameters={...Ci.parameters,docs:{...Ci.parameters?.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
      status: AksjonspunktStatus.OPPRETTET
    }]
  }
}`,...Ci.parameters?.docs?.source}}};Vi.parameters={...Vi.parameters,docs:{...Vi.parameters?.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Min begrunnelse for at besteberegningen er feil'
    }]
  }
}`,...Vi.parameters?.docs?.source}}};Gi.parameters={...Gi.parameters,docs:{...Gi.parameters?.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [{
      ...aksjonspunktDefault,
      definisjon: AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
      status: AksjonspunktStatus.OPPRETTET
    }]
  }
}`,...Gi.parameters?.docs?.source}}};const sR=["BesteberegningMedDagpengerOgArbeid","BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt","BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent","BesteberegningMedAvvik"];export{Gi as BesteberegningMedAvvik,ji as BesteberegningMedDagpengerOgArbeid,Vi as BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent,Ci as BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt,sR as __namedExportsOrder,iR as default};
