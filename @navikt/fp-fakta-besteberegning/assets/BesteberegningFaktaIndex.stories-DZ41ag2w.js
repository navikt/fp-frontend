import{g as ac,r as E,u as s_,_ as Rf,s as Pf,c as Oa,a as Oe,b as q,d as o_,e as Sa,T as l_,S as Kt,R as ic,f as El,W as u_,A as d_,h as vr,j as ie,i as Hr,X as f_,P as wl,t as g_,k as c_,o as m_,M as v_,l as h_,E as p_,m as qi,n as b_,p as Ia,q as y_,w as k_,v as __}from"./iframe-DIga95gs.js";import{r as A_}from"./index-pT7VGPZ6.js";import"./preload-helper-D9Z9MdNV.js";var sc=A_();const Jo=ac(sc);function T_(e,i){var r=e.values,t=Rf(e,["values"]),s=i.values,l=Rf(i,["values"]);return Pf(s,r)&&Pf(t,l)}function oc(e){var i=s_(),r=i.formatMessage,t=i.textComponent,s=t===void 0?E.Fragment:t,l=e.id,u=e.description,f=e.defaultMessage,c=e.values,m=e.children,v=e.tagName,b=v===void 0?s:v,y=e.ignoreTag,k={id:l,description:u,defaultMessage:f},x=r(k,c,{ignoreTag:y});return typeof m=="function"?m(Array.isArray(x)?x:[x]):b?E.createElement(b,null,x):E.createElement(E.Fragment,null,x)}oc.displayName="FormattedMessage";var Mn=E.memo(oc,T_);Mn.displayName="MemoizedFormattedMessage";var pt=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(pt||{}),Nn=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(Nn||{});const E_=(e,i)=>{if(e==null)throw Error("Data er ikke oppgitt");return e},Yt=e=>Oa({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var w_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Rl=E.forwardRef((e,i)=>{var{className:r,size:t="medium",as:s="p",spacing:l,truncate:u,weight:f="regular",align:c,visuallyHidden:m,textColor:v}=e,b=w_(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=Oe();return q.createElement(s,Object.assign({},b,{ref:i,className:y(r,"navds-body-long",`navds-body-long--${t}`,Yt({spacing:l,truncate:u,weight:f,align:c,visuallyHidden:m,textColor:v}))}))});var R_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const cr=E.forwardRef((e,i)=>{var{className:r,size:t="medium",as:s="p",spacing:l,truncate:u,weight:f="regular",align:c,visuallyHidden:m,textColor:v}=e,b=R_(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=Oe();return q.createElement(s,Object.assign({},b,{ref:i,className:y(r,"navds-body-short",`navds-body-short--${t}`,Yt({spacing:l,truncate:u,weight:f,align:c,visuallyHidden:m,textColor:v}))}))});var P_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const O_=E.forwardRef((e,i)=>{var{className:r,size:t="medium",spacing:s,uppercase:l,as:u="p",truncate:f,weight:c="regular",align:m,visuallyHidden:v,textColor:b}=e,y=P_(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=Oe();return q.createElement(u,Object.assign({},y,{ref:i,className:k(r,"navds-detail",Yt({spacing:s,truncate:f,weight:c,align:m,visuallyHidden:v,textColor:b,uppercase:l}),{"navds-detail--small":t==="small"})}))});var S_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const as=E.forwardRef((e,i)=>{var{children:r,className:t,size:s,spacing:l,as:u="p",showIcon:f=!1}=e,c=S_(e,["children","className","size","spacing","as","showIcon"]);const{cn:m}=Oe();return q.createElement(u,Object.assign({},c,{ref:i,className:m("navds-error-message","navds-label",t,Yt({spacing:l}),{"navds-label--small":s==="small","navds-error-message--show-icon":f})}),f&&q.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var I_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};E.forwardRef((e,i)=>{var{level:r="1",size:t,className:s,as:l,spacing:u,align:f,visuallyHidden:c,textColor:m}=e,v=I_(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:b}=Oe(),y=l??`h${r}`;return q.createElement(y,Object.assign({},v,{ref:i,className:b(s,"navds-heading",`navds-heading--${t}`,Yt({spacing:u,align:f,visuallyHidden:c,textColor:m}))}))});var x_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};E.forwardRef((e,i)=>{var{className:r,spacing:t,as:s="p"}=e,l=x_(e,["className","spacing","as"]);const{cn:u}=Oe();return q.createElement(s,Object.assign({},l,{ref:i,className:u(r,"navds-ingress",{"navds-typo--spacing":!!t})}))});var N_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const bt=E.forwardRef((e,i)=>{var{className:r,size:t="medium",as:s="label",spacing:l,visuallyHidden:u,textColor:f}=e,c=N_(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:m}=Oe();return q.createElement(s,Object.assign({},c,{ref:i,className:m(r,"navds-label",Yt({spacing:l,visuallyHidden:u,textColor:f}),{"navds-label--small":t==="small"})}))});function lc(e,i=166,r=!1){let t;function s(...l){const u=()=>{t=void 0,e.apply(this,l)};!t&&r&&u(),clearTimeout(t),t=setTimeout(u,i)}return s.clear=()=>{clearTimeout(t)},s}function mr(e,i){const r=Object.entries(e).filter(([t])=>!i.includes(t));return Object.fromEntries(r)}const Of=globalThis?.document?E.useLayoutEffect:()=>{};let Sf=0;function q_(e){const[i,r]=E.useState(e),t=e||i;return E.useEffect(()=>{i==null&&(Sf+=1,r(`aksel-id-${Sf}`))},[i]),t}const If=q.useId;function xa(e){var i;if(If!==void 0){const r=If();return e??r.replace(/(:)/g,"")}return(i=q_(e))!==null&&i!==void 0?i:""}function xf(e,i=[]){const r=E.useRef(e);return E.useEffect(()=>{r.current=e}),E.useCallback((...t)=>{var s;return(s=r.current)===null||s===void 0?void 0:s.call(r,...t)},i)}function Pl({value:e,defaultValue:i,onChange:r}){const t=xf(r),[s,l]=E.useState(i),u=e!==void 0,f=u?e:s,c=xf(m=>{const b=typeof m=="function"?m(f):m;u||l(b),t(b)},[u,t,f]);return[f,c]}let Nf=0;function B_(e){const[i,r]=E.useState(e),t=e||i;return E.useEffect(()=>{i==null&&(Nf+=1,r(`aksel-icon-${Nf}`))},[i]),t}const qf=q.useId;function tr(e){var i;return qf!==void 0?qf().replace(/(:)/g,""):(i=B_(e))!==null&&i!==void 0?i:""}var M_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const F_=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=M_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var L_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const j_=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=L_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var D_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const uc=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=D_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var C_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const V_=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=C_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var H_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const G_=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=H_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var U_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const dc=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=U_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var $_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const fc=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=$_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var K_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Y_=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=K_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var W_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const z_=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=W_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var X_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Z_=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=X_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var J_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Qo=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=J_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Q_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const eA=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=Q_(e,["title","titleId"]);let l=tr();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Na(e,i,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e?.(s),r===!1||!s.defaultPrevented)return i?.(s)}}const[nO,nA]=o_({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function So(e){return(i={})=>{const r=i.width?String(i.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function ma(e){return(i,r)=>{const t=r?.context?String(r.context):"standalone";let s;if(t==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,f=r?.width?String(r.width):u;s=e.formattingValues[f]||e.formattingValues[u]}else{const u=e.defaultWidth,f=r?.width?String(r.width):e.defaultWidth;s=e.values[f]||e.values[u]}const l=e.argumentCallback?e.argumentCallback(i):i;return s[l]}}function va(e){return(i,r={})=>{const t=r.width,s=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],l=i.match(s);if(!l)return null;const u=l[0],f=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(f)?tA(f,b=>b.test(u)):rA(f,b=>b.test(u));let m;m=e.valueCallback?e.valueCallback(c):c,m=r.valueCallback?r.valueCallback(m):m;const v=i.slice(u.length);return{value:m,rest:v}}}function rA(e,i){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i(e[r]))return r}function tA(e,i){for(let r=0;r<e.length;r++)if(i(e[r]))return r}function aA(e){return(i,r={})=>{const t=i.match(e.matchPattern);if(!t)return null;const s=t[0],l=i.match(e.parsePattern);if(!l)return null;let u=e.valueCallback?e.valueCallback(l[0]):l[0];u=r.valueCallback?r.valueCallback(u):u;const f=i.slice(s.length);return{value:u,rest:f}}}const iA={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},sA=(e,i,r)=>{let t;const s=iA[e];return typeof s=="string"?t=s:i===1?t=s.one:t=s.other.replace("{{count}}",String(i)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+t:t+" siden":t},oA={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},lA={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},uA={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},dA={date:So({formats:oA,defaultWidth:"full"}),time:So({formats:lA,defaultWidth:"full"}),dateTime:So({formats:uA,defaultWidth:"full"})},fA={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},gA=(e,i,r,t)=>fA[e],cA={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},mA={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},vA={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},hA={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},pA={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},bA=(e,i)=>Number(e)+".",yA={ordinalNumber:bA,era:ma({values:cA,defaultWidth:"wide"}),quarter:ma({values:mA,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ma({values:vA,defaultWidth:"wide"}),day:ma({values:hA,defaultWidth:"wide"}),dayPeriod:ma({values:pA,defaultWidth:"wide"})},kA=/^(\d+)\.?/i,_A=/\d+/i,AA={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},TA={any:[/^f/i,/^e/i]},EA={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},wA={any:[/1/i,/2/i,/3/i,/4/i]},RA={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},PA={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},OA={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},SA={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},IA={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},xA={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},NA={ordinalNumber:aA({matchPattern:kA,parsePattern:_A,valueCallback:e=>parseInt(e,10)}),era:va({matchPatterns:AA,defaultMatchWidth:"wide",parsePatterns:TA,defaultParseWidth:"any"}),quarter:va({matchPatterns:EA,defaultMatchWidth:"wide",parsePatterns:wA,defaultParseWidth:"any",valueCallback:e=>e+1}),month:va({matchPatterns:RA,defaultMatchWidth:"wide",parsePatterns:PA,defaultParseWidth:"any"}),day:va({matchPatterns:OA,defaultMatchWidth:"wide",parsePatterns:SA,defaultParseWidth:"any"}),dayPeriod:va({matchPatterns:IA,defaultMatchWidth:"any",parsePatterns:xA,defaultParseWidth:"any"})},qA={code:"nb",formatDistance:sA,formatLong:dA,formatRelative:gA,localize:yA,match:NA,options:{weekStartsOn:1,firstWeekContainsDate:4}},BA={global:{dateLocale:qA,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},MA=E.createContext({locale:BA}),gc=()=>E.useContext(MA);var FA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const LA=E.forwardRef((e,i)=>{var r,t,s,{rootElement:l,asChild:u}=e,f=FA(e,["rootElement","asChild"]);const c=Sa(!1),m=(r=gc())===null||r===void 0?void 0:r.rootElement,v=(t=l??m)!==null&&t!==void 0?t:(s=globalThis?.document)===null||s===void 0?void 0:s.body,b=u?Kt:"div";return c?v?Jo.createPortal(q.createElement(l_,{theme:c.theme,asChild:!0,hasBackground:!1,"data-color":c.color},q.createElement(b,Object.assign({ref:i,"data-aksel-portal":""},f))),v):null:v?Jo.createPortal(q.createElement(b,Object.assign({ref:i,"data-aksel-portal":""},f)),v):null}),Ht=Math.min,ht=Math.max,Yi=Math.round,Bi=Math.floor,Er=e=>({x:e,y:e}),jA={left:"right",right:"left",bottom:"top",top:"bottom"},DA={start:"end",end:"start"};function el(e,i,r){return ht(e,Ht(i,r))}function qa(e,i){return typeof e=="function"?e(i):e}function yt(e){return e.split("-")[0]}function Ba(e){return e.split("-")[1]}function cc(e){return e==="x"?"y":"x"}function Ol(e){return e==="y"?"height":"width"}function Gt(e){return["top","bottom"].includes(yt(e))?"y":"x"}function Sl(e){return cc(Gt(e))}function CA(e,i,r){r===void 0&&(r=!1);const t=Ba(e),s=Sl(e),l=Ol(s);let u=s==="x"?t===(r?"end":"start")?"right":"left":t==="start"?"bottom":"top";return i.reference[l]>i.floating[l]&&(u=Wi(u)),[u,Wi(u)]}function VA(e){const i=Wi(e);return[nl(e),i,nl(i)]}function nl(e){return e.replace(/start|end/g,i=>DA[i])}function HA(e,i,r){const t=["left","right"],s=["right","left"],l=["top","bottom"],u=["bottom","top"];switch(e){case"top":case"bottom":return r?i?s:t:i?t:s;case"left":case"right":return i?l:u;default:return[]}}function GA(e,i,r,t){const s=Ba(e);let l=HA(yt(e),r==="start",t);return s&&(l=l.map(u=>u+"-"+s),i&&(l=l.concat(l.map(nl)))),l}function Wi(e){return e.replace(/left|right|bottom|top/g,i=>jA[i])}function UA(e){return{top:0,right:0,bottom:0,left:0,...e}}function mc(e){return typeof e!="number"?UA(e):{top:e,right:e,bottom:e,left:e}}function zi(e){const{x:i,y:r,width:t,height:s}=e;return{width:t,height:s,top:r,left:i,right:i+t,bottom:r+s,x:i,y:r}}function Bf(e,i,r){let{reference:t,floating:s}=e;const l=Gt(i),u=Sl(i),f=Ol(u),c=yt(i),m=l==="y",v=t.x+t.width/2-s.width/2,b=t.y+t.height/2-s.height/2,y=t[f]/2-s[f]/2;let k;switch(c){case"top":k={x:v,y:t.y-s.height};break;case"bottom":k={x:v,y:t.y+t.height};break;case"right":k={x:t.x+t.width,y:b};break;case"left":k={x:t.x-s.width,y:b};break;default:k={x:t.x,y:t.y}}switch(Ba(i)){case"start":k[u]-=y*(r&&m?-1:1);break;case"end":k[u]+=y*(r&&m?-1:1);break}return k}const $A=async(e,i,r)=>{const{placement:t="bottom",strategy:s="absolute",middleware:l=[],platform:u}=r,f=l.filter(Boolean),c=await(u.isRTL==null?void 0:u.isRTL(i));let m=await u.getElementRects({reference:e,floating:i,strategy:s}),{x:v,y:b}=Bf(m,t,c),y=t,k={},x=0;for(let A=0;A<f.length;A++){const{name:_,fn:R}=f[A],{x:S,y:P,data:D,reset:I}=await R({x:v,y:b,initialPlacement:t,placement:y,strategy:s,middlewareData:k,rects:m,platform:u,elements:{reference:e,floating:i}});v=S??v,b=P??b,k={...k,[_]:{...k[_],...D}},I&&x<=50&&(x++,typeof I=="object"&&(I.placement&&(y=I.placement),I.rects&&(m=I.rects===!0?await u.getElementRects({reference:e,floating:i,strategy:s}):I.rects),{x:v,y:b}=Bf(m,y,c)),A=-1)}return{x:v,y:b,placement:y,strategy:s,middlewareData:k}};async function vc(e,i){var r;i===void 0&&(i={});const{x:t,y:s,platform:l,rects:u,elements:f,strategy:c}=e,{boundary:m="clippingAncestors",rootBoundary:v="viewport",elementContext:b="floating",altBoundary:y=!1,padding:k=0}=qa(i,e),x=mc(k),_=f[y?b==="floating"?"reference":"floating":b],R=zi(await l.getClippingRect({element:(r=await(l.isElement==null?void 0:l.isElement(_)))==null||r?_:_.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(f.floating)),boundary:m,rootBoundary:v,strategy:c})),S=b==="floating"?{x:t,y:s,width:u.floating.width,height:u.floating.height}:u.reference,P=await(l.getOffsetParent==null?void 0:l.getOffsetParent(f.floating)),D=await(l.isElement==null?void 0:l.isElement(P))?await(l.getScale==null?void 0:l.getScale(P))||{x:1,y:1}:{x:1,y:1},I=zi(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:S,offsetParent:P,strategy:c}):S);return{top:(R.top-I.top+x.top)/D.y,bottom:(I.bottom-R.bottom+x.bottom)/D.y,left:(R.left-I.left+x.left)/D.x,right:(I.right-R.right+x.right)/D.x}}const KA=e=>({name:"arrow",options:e,async fn(i){const{x:r,y:t,placement:s,rects:l,platform:u,elements:f,middlewareData:c}=i,{element:m,padding:v=0}=qa(e,i)||{};if(m==null)return{};const b=mc(v),y={x:r,y:t},k=Sl(s),x=Ol(k),A=await u.getDimensions(m),_=k==="y",R=_?"top":"left",S=_?"bottom":"right",P=_?"clientHeight":"clientWidth",D=l.reference[x]+l.reference[k]-y[k]-l.floating[x],I=y[k]-l.reference[k],H=await(u.getOffsetParent==null?void 0:u.getOffsetParent(m));let j=H?H[P]:0;(!j||!await(u.isElement==null?void 0:u.isElement(H)))&&(j=f.floating[P]||l.floating[x]);const C=D/2-I/2,K=j/2-A[x]/2-1,ne=Ht(b[R],K),ee=Ht(b[S],K),G=ne,F=j-A[x]-ee,L=j/2-A[x]/2+C,X=el(G,L,F),re=!c.arrow&&Ba(s)!=null&&L!==X&&l.reference[x]/2-(L<G?ne:ee)-A[x]/2<0,Z=re?L<G?L-G:L-F:0;return{[k]:y[k]+Z,data:{[k]:X,centerOffset:L-X-Z,...re&&{alignmentOffset:Z}},reset:re}}}),YA=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var r,t;const{placement:s,middlewareData:l,rects:u,initialPlacement:f,platform:c,elements:m}=i,{mainAxis:v=!0,crossAxis:b=!0,fallbackPlacements:y,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:A=!0,..._}=qa(e,i);if((r=l.arrow)!=null&&r.alignmentOffset)return{};const R=yt(s),S=Gt(f),P=yt(f)===f,D=await(c.isRTL==null?void 0:c.isRTL(m.floating)),I=y||(P||!A?[Wi(f)]:VA(f)),H=x!=="none";!y&&H&&I.push(...GA(f,A,x,D));const j=[f,...I],C=await vc(i,_),K=[];let ne=((t=l.flip)==null?void 0:t.overflows)||[];if(v&&K.push(C[R]),b){const L=CA(s,u,D);K.push(C[L[0]],C[L[1]])}if(ne=[...ne,{placement:s,overflows:K}],!K.every(L=>L<=0)){var ee,G;const L=(((ee=l.flip)==null?void 0:ee.index)||0)+1,X=j[L];if(X)return{data:{index:L,overflows:ne},reset:{placement:X}};let re=(G=ne.filter(Z=>Z.overflows[0]<=0).sort((Z,W)=>Z.overflows[1]-W.overflows[1])[0])==null?void 0:G.placement;if(!re)switch(k){case"bestFit":{var F;const Z=(F=ne.filter(W=>{if(H){const J=Gt(W.placement);return J===S||J==="y"}return!0}).map(W=>[W.placement,W.overflows.filter(J=>J>0).reduce((J,de)=>J+de,0)]).sort((W,J)=>W[1]-J[1])[0])==null?void 0:F[0];Z&&(re=Z);break}case"initialPlacement":re=f;break}if(s!==re)return{reset:{placement:re}}}return{}}}};async function WA(e,i){const{placement:r,platform:t,elements:s}=e,l=await(t.isRTL==null?void 0:t.isRTL(s.floating)),u=yt(r),f=Ba(r),c=Gt(r)==="y",m=["left","top"].includes(u)?-1:1,v=l&&c?-1:1,b=qa(i,e);let{mainAxis:y,crossAxis:k,alignmentAxis:x}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return f&&typeof x=="number"&&(k=f==="end"?x*-1:x),c?{x:k*v,y:y*m}:{x:y*m,y:k*v}}const zA=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var r,t;const{x:s,y:l,placement:u,middlewareData:f}=i,c=await WA(i,e);return u===((r=f.offset)==null?void 0:r.placement)&&(t=f.arrow)!=null&&t.alignmentOffset?{}:{x:s+c.x,y:l+c.y,data:{...c,placement:u}}}}},XA=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:r,y:t,placement:s}=i,{mainAxis:l=!0,crossAxis:u=!1,limiter:f={fn:_=>{let{x:R,y:S}=_;return{x:R,y:S}}},...c}=qa(e,i),m={x:r,y:t},v=await vc(i,c),b=Gt(yt(s)),y=cc(b);let k=m[y],x=m[b];if(l){const _=y==="y"?"top":"left",R=y==="y"?"bottom":"right",S=k+v[_],P=k-v[R];k=el(S,k,P)}if(u){const _=b==="y"?"top":"left",R=b==="y"?"bottom":"right",S=x+v[_],P=x-v[R];x=el(S,x,P)}const A=f.fn({...i,[y]:k,[b]:x});return{...A,data:{x:A.x-r,y:A.y-t,enabled:{[y]:l,[b]:u}}}}}};function is(){return typeof window<"u"}function Wt(e){return hc(e)?(e.nodeName||"").toLowerCase():"#document"}function Fn(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Pr(e){var i;return(i=(hc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function hc(e){return is()?e instanceof Node||e instanceof Fn(e).Node:!1}function Ke(e){return is()?e instanceof Element||e instanceof Fn(e).Element:!1}function Un(e){return is()?e instanceof HTMLElement||e instanceof Fn(e).HTMLElement:!1}function Xi(e){return!is()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Fn(e).ShadowRoot}function Ma(e){const{overflow:i,overflowX:r,overflowY:t,display:s}=rr(e);return/auto|scroll|overlay|hidden|clip/.test(i+t+r)&&!["inline","contents"].includes(s)}function ZA(e){return["table","td","th"].includes(Wt(e))}function ss(e){return[":popover-open",":modal"].some(i=>{try{return e.matches(i)}catch{return!1}})}function Il(e){const i=os(),r=Ke(e)?rr(e):e;return["transform","translate","scale","rotate","perspective"].some(t=>r[t]?r[t]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(t=>(r.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(r.contain||"").includes(t))}function JA(e){let i=Gr(e);for(;Un(i)&&!Vr(i);){if(Il(i))return i;if(ss(i))return null;i=Gr(i)}return null}function os(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vr(e){return["html","body","#document"].includes(Wt(e))}function rr(e){return Fn(e).getComputedStyle(e)}function ls(e){return Ke(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(Wt(e)==="html")return e;const i=e.assignedSlot||e.parentNode||Xi(e)&&e.host||Pr(e);return Xi(i)?i.host:i}function pc(e){const i=Gr(e);return Vr(i)?e.ownerDocument?e.ownerDocument.body:e.body:Un(i)&&Ma(i)?i:pc(i)}function et(e,i,r){var t;i===void 0&&(i=[]),r===void 0&&(r=!0);const s=pc(e),l=s===((t=e.ownerDocument)==null?void 0:t.body),u=Fn(s);if(l){const f=rl(u);return i.concat(u,u.visualViewport||[],Ma(s)?s:[],f&&r?et(f):[])}return i.concat(s,et(s,[],r))}function rl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function bc(e){const i=rr(e);let r=parseFloat(i.width)||0,t=parseFloat(i.height)||0;const s=Un(e),l=s?e.offsetWidth:r,u=s?e.offsetHeight:t,f=Yi(r)!==l||Yi(t)!==u;return f&&(r=l,t=u),{width:r,height:t,$:f}}function xl(e){return Ke(e)?e:e.contextElement}function Vt(e){const i=xl(e);if(!Un(i))return Er(1);const r=i.getBoundingClientRect(),{width:t,height:s,$:l}=bc(i);let u=(l?Yi(r.width):r.width)/t,f=(l?Yi(r.height):r.height)/s;return(!u||!Number.isFinite(u))&&(u=1),(!f||!Number.isFinite(f))&&(f=1),{x:u,y:f}}const QA=Er(0);function yc(e){const i=Fn(e);return!os()||!i.visualViewport?QA:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function e1(e,i,r){return i===void 0&&(i=!1),!r||i&&r!==Fn(e)?!1:i}function kt(e,i,r,t){i===void 0&&(i=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),l=xl(e);let u=Er(1);i&&(t?Ke(t)&&(u=Vt(t)):u=Vt(e));const f=e1(l,r,t)?yc(l):Er(0);let c=(s.left+f.x)/u.x,m=(s.top+f.y)/u.y,v=s.width/u.x,b=s.height/u.y;if(l){const y=Fn(l),k=t&&Ke(t)?Fn(t):t;let x=y,A=rl(x);for(;A&&t&&k!==x;){const _=Vt(A),R=A.getBoundingClientRect(),S=rr(A),P=R.left+(A.clientLeft+parseFloat(S.paddingLeft))*_.x,D=R.top+(A.clientTop+parseFloat(S.paddingTop))*_.y;c*=_.x,m*=_.y,v*=_.x,b*=_.y,c+=P,m+=D,x=Fn(A),A=rl(x)}}return zi({width:v,height:b,x:c,y:m})}function Nl(e,i){const r=ls(e).scrollLeft;return i?i.left+r:kt(Pr(e)).left+r}function kc(e,i,r){r===void 0&&(r=!1);const t=e.getBoundingClientRect(),s=t.left+i.scrollLeft-(r?0:Nl(e,t)),l=t.top+i.scrollTop;return{x:s,y:l}}function n1(e){let{elements:i,rect:r,offsetParent:t,strategy:s}=e;const l=s==="fixed",u=Pr(t),f=i?ss(i.floating):!1;if(t===u||f&&l)return r;let c={scrollLeft:0,scrollTop:0},m=Er(1);const v=Er(0),b=Un(t);if((b||!b&&!l)&&((Wt(t)!=="body"||Ma(u))&&(c=ls(t)),Un(t))){const k=kt(t);m=Vt(t),v.x=k.x+t.clientLeft,v.y=k.y+t.clientTop}const y=u&&!b&&!l?kc(u,c,!0):Er(0);return{width:r.width*m.x,height:r.height*m.y,x:r.x*m.x-c.scrollLeft*m.x+v.x+y.x,y:r.y*m.y-c.scrollTop*m.y+v.y+y.y}}function r1(e){return Array.from(e.getClientRects())}function t1(e){const i=Pr(e),r=ls(e),t=e.ownerDocument.body,s=ht(i.scrollWidth,i.clientWidth,t.scrollWidth,t.clientWidth),l=ht(i.scrollHeight,i.clientHeight,t.scrollHeight,t.clientHeight);let u=-r.scrollLeft+Nl(e);const f=-r.scrollTop;return rr(t).direction==="rtl"&&(u+=ht(i.clientWidth,t.clientWidth)-s),{width:s,height:l,x:u,y:f}}function a1(e,i){const r=Fn(e),t=Pr(e),s=r.visualViewport;let l=t.clientWidth,u=t.clientHeight,f=0,c=0;if(s){l=s.width,u=s.height;const m=os();(!m||m&&i==="fixed")&&(f=s.offsetLeft,c=s.offsetTop)}return{width:l,height:u,x:f,y:c}}function i1(e,i){const r=kt(e,!0,i==="fixed"),t=r.top+e.clientTop,s=r.left+e.clientLeft,l=Un(e)?Vt(e):Er(1),u=e.clientWidth*l.x,f=e.clientHeight*l.y,c=s*l.x,m=t*l.y;return{width:u,height:f,x:c,y:m}}function Mf(e,i,r){let t;if(i==="viewport")t=a1(e,r);else if(i==="document")t=t1(Pr(e));else if(Ke(i))t=i1(i,r);else{const s=yc(e);t={x:i.x-s.x,y:i.y-s.y,width:i.width,height:i.height}}return zi(t)}function _c(e,i){const r=Gr(e);return r===i||!Ke(r)||Vr(r)?!1:rr(r).position==="fixed"||_c(r,i)}function s1(e,i){const r=i.get(e);if(r)return r;let t=et(e,[],!1).filter(f=>Ke(f)&&Wt(f)!=="body"),s=null;const l=rr(e).position==="fixed";let u=l?Gr(e):e;for(;Ke(u)&&!Vr(u);){const f=rr(u),c=Il(u);!c&&f.position==="fixed"&&(s=null),(l?!c&&!s:!c&&f.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Ma(u)&&!c&&_c(e,u))?t=t.filter(v=>v!==u):s=f,u=Gr(u)}return i.set(e,t),t}function o1(e){let{element:i,boundary:r,rootBoundary:t,strategy:s}=e;const u=[...r==="clippingAncestors"?ss(i)?[]:s1(i,this._c):[].concat(r),t],f=u[0],c=u.reduce((m,v)=>{const b=Mf(i,v,s);return m.top=ht(b.top,m.top),m.right=Ht(b.right,m.right),m.bottom=Ht(b.bottom,m.bottom),m.left=ht(b.left,m.left),m},Mf(i,f,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function l1(e){const{width:i,height:r}=bc(e);return{width:i,height:r}}function u1(e,i,r){const t=Un(i),s=Pr(i),l=r==="fixed",u=kt(e,!0,l,i);let f={scrollLeft:0,scrollTop:0};const c=Er(0);if(t||!t&&!l)if((Wt(i)!=="body"||Ma(s))&&(f=ls(i)),t){const y=kt(i,!0,l,i);c.x=y.x+i.clientLeft,c.y=y.y+i.clientTop}else s&&(c.x=Nl(s));const m=s&&!t&&!l?kc(s,f):Er(0),v=u.left+f.scrollLeft-c.x-m.x,b=u.top+f.scrollTop-c.y-m.y;return{x:v,y:b,width:u.width,height:u.height}}function Io(e){return rr(e).position==="static"}function Ff(e,i){if(!Un(e)||rr(e).position==="fixed")return null;if(i)return i(e);let r=e.offsetParent;return Pr(e)===r&&(r=r.ownerDocument.body),r}function Ac(e,i){const r=Fn(e);if(ss(e))return r;if(!Un(e)){let s=Gr(e);for(;s&&!Vr(s);){if(Ke(s)&&!Io(s))return s;s=Gr(s)}return r}let t=Ff(e,i);for(;t&&ZA(t)&&Io(t);)t=Ff(t,i);return t&&Vr(t)&&Io(t)&&!Il(t)?r:t||JA(e)||r}const d1=async function(e){const i=this.getOffsetParent||Ac,r=this.getDimensions,t=await r(e.floating);return{reference:u1(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:t.width,height:t.height}}};function f1(e){return rr(e).direction==="rtl"}const g1={convertOffsetParentRelativeRectToViewportRelativeRect:n1,getDocumentElement:Pr,getClippingRect:o1,getOffsetParent:Ac,getElementRects:d1,getClientRects:r1,getDimensions:l1,getScale:Vt,isElement:Ke,isRTL:f1};function Tc(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function c1(e,i){let r=null,t;const s=Pr(e);function l(){var f;clearTimeout(t),(f=r)==null||f.disconnect(),r=null}function u(f,c){f===void 0&&(f=!1),c===void 0&&(c=1),l();const m=e.getBoundingClientRect(),{left:v,top:b,width:y,height:k}=m;if(f||i(),!y||!k)return;const x=Bi(b),A=Bi(s.clientWidth-(v+y)),_=Bi(s.clientHeight-(b+k)),R=Bi(v),P={rootMargin:-x+"px "+-A+"px "+-_+"px "+-R+"px",threshold:ht(0,Ht(1,c))||1};let D=!0;function I(H){const j=H[0].intersectionRatio;if(j!==c){if(!D)return u();j?u(!1,j):t=setTimeout(()=>{u(!1,1e-7)},1e3)}j===1&&!Tc(m,e.getBoundingClientRect())&&u(),D=!1}try{r=new IntersectionObserver(I,{...P,root:s.ownerDocument})}catch{r=new IntersectionObserver(I,P)}r.observe(e)}return u(!0),l}function Lf(e,i,r,t){t===void 0&&(t={});const{ancestorScroll:s=!0,ancestorResize:l=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:c=!1}=t,m=xl(e),v=s||l?[...m?et(m):[],...et(i)]:[];v.forEach(R=>{s&&R.addEventListener("scroll",r,{passive:!0}),l&&R.addEventListener("resize",r)});const b=m&&f?c1(m,r):null;let y=-1,k=null;u&&(k=new ResizeObserver(R=>{let[S]=R;S&&S.target===m&&k&&(k.unobserve(i),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var P;(P=k)==null||P.observe(i)})),r()}),m&&!c&&k.observe(m),k.observe(i));let x,A=c?kt(e):null;c&&_();function _(){const R=kt(e);A&&!Tc(A,R)&&r(),A=R,x=requestAnimationFrame(_)}return r(),()=>{var R;v.forEach(S=>{s&&S.removeEventListener("scroll",r),l&&S.removeEventListener("resize",r)}),b?.(),(R=k)==null||R.disconnect(),k=null,c&&cancelAnimationFrame(x)}}const m1=zA,v1=XA,h1=YA,jf=KA,p1=(e,i,r)=>{const t=new Map,s={platform:g1,...r},l={...s.platform,_c:t};return $A(e,i,{...s,platform:l})};var Gi=typeof document<"u"?E.useLayoutEffect:E.useEffect;function Zi(e,i){if(e===i)return!0;if(typeof e!=typeof i)return!1;if(typeof e=="function"&&e.toString()===i.toString())return!0;let r,t,s;if(e&&i&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==i.length)return!1;for(t=r;t--!==0;)if(!Zi(e[t],i[t]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(i).length)return!1;for(t=r;t--!==0;)if(!{}.hasOwnProperty.call(i,s[t]))return!1;for(t=r;t--!==0;){const l=s[t];if(!(l==="_owner"&&e.$$typeof)&&!Zi(e[l],i[l]))return!1}return!0}return e!==e&&i!==i}function Ec(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Df(e,i){const r=Ec(e);return Math.round(i*r)/r}function xo(e){const i=E.useRef(e);return Gi(()=>{i.current=e}),i}function b1(e){e===void 0&&(e={});const{placement:i="bottom",strategy:r="absolute",middleware:t=[],platform:s,elements:{reference:l,floating:u}={},transform:f=!0,whileElementsMounted:c,open:m}=e,[v,b]=E.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[y,k]=E.useState(t);Zi(y,t)||k(t);const[x,A]=E.useState(null),[_,R]=E.useState(null),S=E.useCallback(W=>{W!==H.current&&(H.current=W,A(W))},[]),P=E.useCallback(W=>{W!==j.current&&(j.current=W,R(W))},[]),D=l||x,I=u||_,H=E.useRef(null),j=E.useRef(null),C=E.useRef(v),K=c!=null,ne=xo(c),ee=xo(s),G=xo(m),F=E.useCallback(()=>{if(!H.current||!j.current)return;const W={placement:i,strategy:r,middleware:y};ee.current&&(W.platform=ee.current),p1(H.current,j.current,W).then(J=>{const de={...J,isPositioned:G.current!==!1};L.current&&!Zi(C.current,de)&&(C.current=de,sc.flushSync(()=>{b(de)}))})},[y,i,r,ee,G]);Gi(()=>{m===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,b(W=>({...W,isPositioned:!1})))},[m]);const L=E.useRef(!1);Gi(()=>(L.current=!0,()=>{L.current=!1}),[]),Gi(()=>{if(D&&(H.current=D),I&&(j.current=I),D&&I){if(ne.current)return ne.current(D,I,F);F()}},[D,I,F,ne,K]);const X=E.useMemo(()=>({reference:H,floating:j,setReference:S,setFloating:P}),[S,P]),re=E.useMemo(()=>({reference:D,floating:I}),[D,I]),Z=E.useMemo(()=>{const W={position:r,left:0,top:0};if(!re.floating)return W;const J=Df(re.floating,v.x),de=Df(re.floating,v.y);return f?{...W,transform:"translate("+J+"px, "+de+"px)",...Ec(re.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:J,top:de}},[r,f,re.floating,v.x,v.y]);return E.useMemo(()=>({...v,update:F,refs:X,elements:re,floatingStyles:Z}),[v,F,X,re,Z])}const y1=e=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:t,padding:s}=typeof e=="function"?e(r):e;return t&&i(t)?t.current!=null?jf({element:t.current,padding:s}).fn(r):{}:t?jf({element:t,padding:s}).fn(r):{}}}},k1=(e,i)=>({...m1(e),options:[e,i]}),_1=(e,i)=>({...v1(e),options:[e,i]}),A1=(e,i)=>({...h1(e),options:[e,i]}),T1=(e,i)=>({...y1(e),options:[e,i]}),Cf=/(\w+)/g;function E1(e,i){const r=Array.isArray(e)?e:w1(e);for(const t of i){if(!t)continue;let s=t;for(let l=0;l<r.length;l++){const u=s[r[l]];u!==void 0&&(s=u)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function w1(e){const i=[];let r=Cf.exec(e);for(;r;){const[,t,s]=r;i.push(t||s),r=Cf.exec(e)}return i}const R1=/{[^}]*}/g;function Tt(e,...i){const r=gc(),t=r.translations||[],s=[...i,...Array.isArray(t)?t.map(u=>u[e]):[t[e]],r.locale[e]];return(u,f)=>{const c=E1(u,s);return f?c.replace(R1,m=>{const v=m.substring(1,m.length-1);if(f[v]===void 0){const b=JSON.stringify(f);throw new Error(`Error translating key '${u}'. No replacement syntax ({}) found for key '${v}'. The following replacements were passed: '${b}'`)}return f[v]}):c}}var P1=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const O1=E.forwardRef((e,i)=>{var{className:r,size:t="medium",title:s,transparent:l=!1,variant:u="neutral",id:f,"data-color":c}=e,m=P1(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:v}=Oe(),b=xa(),y=Tt("Loader");return q.createElement("svg",Object.assign({"aria-labelledby":f??`loader-${b}`,ref:i,className:v("navds-loader",r,`navds-loader--${t}`,`navds-loader--${u}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??S1(u)},mr(m,["children"]),{"data-variant":u}),q.createElement("title",{id:f??`loader-${b}`},s||y("title")),q.createElement("circle",{className:v("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),q.createElement("circle",{className:v("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function S1(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var I1=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const us=E.forwardRef((e,i)=>{var{as:r="button",variant:t="primary",className:s,children:l,size:u="medium",loading:f=!1,disabled:c,icon:m,iconPosition:v="left",onKeyUp:b,"data-color":y}=e,k=I1(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:x}=Oe(),A=c||f?mr(k,["href"]):k,_=R=>{R.key===" "&&!c&&!f&&R.currentTarget.click()};return q.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":y??x1(t),"data-variant":N1(t)},A,{ref:i,onKeyUp:Na(b,_),className:x(s,"navds-button",`navds-button--${t}`,`navds-button--${u}`,{"navds-button--loading":f,"navds-button--icon-only":!!m&&!l,"navds-button--disabled":c??f}),disabled:c??f?!0:void 0}),m&&v==="left"&&q.createElement("span",{className:x("navds-button__icon")},m),f&&q.createElement(O1,{size:u}),l&&q.createElement(bt,{as:"span",size:u==="medium"?"medium":"small"},l),m&&v==="right"&&q.createElement("span",{className:x("navds-button__icon")},m))});function x1(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function N1(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var q1=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const B1={error:eA,warning:V_,info:G_,success:j_},M1=E.forwardRef((e,i)=>{var{children:r,className:t,variant:s,size:l="medium",fullWidth:u=!1,contentMaxWidth:f=!0,inline:c=!1,closeButton:m=!1,onClose:v}=e,b=q1(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:y}=Oe(),k=Tt("Alert"),x=B1[s];return q.createElement("div",Object.assign({},b,{"data-color":F1(s),"data-variant":s,ref:i,className:y(t,"navds-alert",`navds-alert--${s}`,`navds-alert--${l}`,{"navds-alert--full-width":u,"navds-alert--inline":c,"navds-alert--close-button":m})}),q.createElement(x,{title:k(s),className:y("navds-alert__icon")}),q.createElement(Rl,{as:"div",size:l,className:y("navds-alert__wrapper",f&&"navds-alert__wrapper--maxwidth")},r),m&&!c&&q.createElement("div",{className:y("navds-alert__button-wrapper")},q.createElement(us,{className:y("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:v,type:"button",icon:q.createElement(Qo,{title:["error","warning"].includes(s)?k("closeAlert"):k("closeMessage")})})))});function F1(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function L1(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function j1(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(i=>{let{brand:r,version:t}=i;return r+"/"+t}).join(" "):navigator.userAgent}function D1(){return/apple/i.test(navigator.vendor)}function C1(){return L1().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function V1(){return j1().includes("jsdom/")}const H1="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Vf(e){let i=e.activeElement;for(;((r=i)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;i=i.shadowRoot.activeElement}return i}function Ra(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&Xi(r)){let t=i;for(;t;){if(e===t)return!0;t=t.parentNode||t.host}}return!1}function Ct(e){return"composedPath"in e?e.composedPath()[0]:e.target}function No(e,i){if(i==null)return!1;if("composedPath"in e)return e.composedPath().includes(i);const r=e;return r.target!=null&&i.contains(r.target)}function G1(e){return e.matches("html,body")}function mt(e){return e?.ownerDocument||document}function U1(e){return Un(e)&&e.matches(H1)}function $1(e){if(!e||V1())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function qo(e,i,r){r===void 0&&(r=!0);let t=e.filter(l=>{var u;return l.parentId===i&&((u=l.context)==null?void 0:u.open)}),s=t;for(;s.length;)s=r?e.filter(l=>{var u;return(u=s)==null?void 0:u.some(f=>{var c;return l.parentId===f.id&&((c=l.context)==null?void 0:c.open)})}):e,t=t.concat(s);return t}function K1(e){return"nativeEvent"in e}function tl(e,i){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var Ut=typeof document<"u"?E.useLayoutEffect:E.useEffect;const Y1={...ic};function Mi(e){const i=E.useRef(e);return Ut(()=>{i.current=e}),i}const W1=Y1.useInsertionEffect,z1=W1||(e=>e());function jr(e){const i=E.useRef(()=>{});return z1(()=>{i.current=e}),E.useCallback(function(){for(var r=arguments.length,t=new Array(r),s=0;s<r;s++)t[s]=arguments[s];return i.current==null?void 0:i.current(...t)},[])}const X1="data-floating-ui-focusable",Hf="active",Gf="selected",Z1={...ic};let Uf=!1,J1=0;const $f=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+J1++;function Q1(){const[e,i]=E.useState(()=>Uf?$f():void 0);return Ut(()=>{e==null&&i($f())},[]),E.useEffect(()=>{Uf=!0},[]),e}const eT=Z1.useId,nT=eT||Q1;function rT(){const e=new Map;return{emit(i,r){var t;(t=e.get(i))==null||t.forEach(s=>s(r))},on(i,r){e.has(i)||e.set(i,new Set),e.get(i).add(r)},off(i,r){var t;(t=e.get(i))==null||t.delete(r)}}}const tT=E.createContext(null),aT=E.createContext(null),wc=()=>{var e;return((e=E.useContext(tT))==null?void 0:e.id)||null},ql=()=>E.useContext(aT);function Bl(e){return"data-floating-ui-"+e}function nr(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Kf=Bl("safe-polygon");function Bo(e,i,r){if(r&&!tl(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const t=e();return typeof t=="number"?t:t?.[i]}return e?.[i]}function Mo(e){return typeof e=="function"?e():e}function iT(e,i){i===void 0&&(i={});const{open:r,onOpenChange:t,dataRef:s,events:l,elements:u}=e,{enabled:f=!0,delay:c=0,handleClose:m=null,mouseOnly:v=!1,restMs:b=0,move:y=!0}=i,k=ql(),x=wc(),A=Mi(m),_=Mi(c),R=Mi(r),S=Mi(b),P=E.useRef(),D=E.useRef(-1),I=E.useRef(),H=E.useRef(-1),j=E.useRef(!0),C=E.useRef(!1),K=E.useRef(()=>{}),ne=E.useRef(!1),ee=E.useCallback(()=>{var Z;const W=(Z=s.current.openEvent)==null?void 0:Z.type;return W?.includes("mouse")&&W!=="mousedown"},[s]);E.useEffect(()=>{if(!f)return;function Z(W){let{open:J}=W;J||(nr(D),nr(H),j.current=!0,ne.current=!1)}return l.on("openchange",Z),()=>{l.off("openchange",Z)}},[f,l]),E.useEffect(()=>{if(!f||!A.current||!r)return;function Z(J){ee()&&t(!1,J,"hover")}const W=mt(u.floating).documentElement;return W.addEventListener("mouseleave",Z),()=>{W.removeEventListener("mouseleave",Z)}},[u.floating,r,t,f,A,ee]);const G=E.useCallback(function(Z,W,J){W===void 0&&(W=!0),J===void 0&&(J="hover");const de=Bo(_.current,"close",P.current);de&&!I.current?(nr(D),D.current=window.setTimeout(()=>t(!1,Z,J),de)):W&&(nr(D),t(!1,Z,J))},[_,t]),F=jr(()=>{K.current(),I.current=void 0}),L=jr(()=>{if(C.current){const Z=mt(u.floating).body;Z.style.pointerEvents="",Z.removeAttribute(Kf),C.current=!1}}),X=jr(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);E.useEffect(()=>{if(!f)return;function Z(ve){if(nr(D),j.current=!1,v&&!tl(P.current)||Mo(S.current)>0&&!Bo(_.current,"open"))return;const _e=Bo(_.current,"open",P.current);_e?D.current=window.setTimeout(()=>{R.current||t(!0,ve,"hover")},_e):r||t(!0,ve,"hover")}function W(ve){if(X()){L();return}K.current();const _e=mt(u.floating);if(nr(H),ne.current=!1,A.current&&s.current.floatingContext){r||nr(D),I.current=A.current({...s.current.floatingContext,tree:k,x:ve.clientX,y:ve.clientY,onClose(){L(),F(),X()||G(ve,!0,"safe-polygon")}});const Ye=I.current;_e.addEventListener("mousemove",Ye),K.current=()=>{_e.removeEventListener("mousemove",Ye)};return}(P.current==="touch"?!Ra(u.floating,ve.relatedTarget):!0)&&G(ve)}function J(ve){X()||s.current.floatingContext&&(A.current==null||A.current({...s.current.floatingContext,tree:k,x:ve.clientX,y:ve.clientY,onClose(){L(),F(),X()||G(ve)}})(ve))}function de(){nr(D)}function le(ve){X()||G(ve,!1)}if(Ke(u.domReference)){const ve=u.domReference,_e=u.floating;return r&&ve.addEventListener("mouseleave",J),y&&ve.addEventListener("mousemove",Z,{once:!0}),ve.addEventListener("mouseenter",Z),ve.addEventListener("mouseleave",W),_e&&(_e.addEventListener("mouseleave",J),_e.addEventListener("mouseenter",de),_e.addEventListener("mouseleave",le)),()=>{r&&ve.removeEventListener("mouseleave",J),y&&ve.removeEventListener("mousemove",Z),ve.removeEventListener("mouseenter",Z),ve.removeEventListener("mouseleave",W),_e&&(_e.removeEventListener("mouseleave",J),_e.removeEventListener("mouseenter",de),_e.removeEventListener("mouseleave",le))}}},[u,f,e,v,y,G,F,L,t,r,R,k,_,A,s,X,S]),Ut(()=>{var Z;if(f&&r&&(Z=A.current)!=null&&Z.__options.blockPointerEvents&&ee()){C.current=!0;const J=u.floating;if(Ke(u.domReference)&&J){var W;const de=mt(u.floating).body;de.setAttribute(Kf,"");const le=u.domReference,ve=k==null||(W=k.nodesRef.current.find(_e=>_e.id===x))==null||(W=W.context)==null?void 0:W.elements.floating;return ve&&(ve.style.pointerEvents=""),de.style.pointerEvents="none",le.style.pointerEvents="auto",J.style.pointerEvents="auto",()=>{de.style.pointerEvents="",le.style.pointerEvents="",J.style.pointerEvents=""}}}},[f,r,x,u,k,A,ee]),Ut(()=>{r||(P.current=void 0,ne.current=!1,F(),L())},[r,F,L]),E.useEffect(()=>()=>{F(),nr(D),nr(H),L()},[f,u.domReference,F,L]);const re=E.useMemo(()=>{function Z(W){P.current=W.pointerType}return{onPointerDown:Z,onPointerEnter:Z,onMouseMove(W){const{nativeEvent:J}=W;function de(){!j.current&&!R.current&&t(!0,J,"hover")}v&&!tl(P.current)||r||Mo(S.current)===0||ne.current&&W.movementX**2+W.movementY**2<2||(nr(H),P.current==="touch"?de():(ne.current=!0,H.current=window.setTimeout(de,Mo(S.current))))}}},[v,t,r,R,S]);return E.useMemo(()=>f?{reference:re}:{},[f,re])}function Fo(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&Xi(r)){let t=i;for(;t;){if(e===t)return!0;t=t.parentNode||t.host}}return!1}function sT(e){return"composedPath"in e?e.composedPath()[0]:e.target}const oT={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},lT={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Yf=e=>{var i,r;return{escapeKey:typeof e=="boolean"?e:(i=e?.escapeKey)!=null?i:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function uT(e,i){i===void 0&&(i={});const{open:r,onOpenChange:t,elements:s,dataRef:l}=e,{enabled:u=!0,escapeKey:f=!0,outsidePress:c=!0,outsidePressEvent:m="pointerdown",referencePress:v=!1,referencePressEvent:b="pointerdown",ancestorScroll:y=!1,bubbles:k,capture:x}=i,A=ql(),_=jr(typeof c=="function"?c:()=>!1),R=typeof c=="function"?_:c,S=E.useRef(!1),P=E.useRef(!1),{escapeKey:D,outsidePress:I}=Yf(k),{escapeKey:H,outsidePress:j}=Yf(x),C=E.useRef(!1),K=jr(X=>{var re;if(!r||!u||!f||X.key!=="Escape"||C.current)return;const Z=(re=l.current.floatingContext)==null?void 0:re.nodeId,W=A?qo(A.nodesRef.current,Z):[];if(!D&&(X.stopPropagation(),W.length>0)){let J=!0;if(W.forEach(de=>{var le;if((le=de.context)!=null&&le.open&&!de.context.dataRef.current.__escapeKeyBubbles){J=!1;return}}),!J)return}t(!1,K1(X)?X.nativeEvent:X,"escape-key")}),ne=jr(X=>{var re;const Z=()=>{var W;K(X),(W=Ct(X))==null||W.removeEventListener("keydown",Z)};(re=Ct(X))==null||re.addEventListener("keydown",Z)}),ee=jr(X=>{var re;const Z=S.current;S.current=!1;const W=P.current;if(P.current=!1,m==="click"&&W||Z||typeof R=="function"&&!R(X))return;const J=Ct(X),de="["+Bl("inert")+"]",le=mt(s.floating).querySelectorAll(de);let ve=Ke(J)?J:null;for(;ve&&!Vr(ve);){const Ve=Gr(ve);if(Vr(Ve)||!Ke(Ve))break;ve=Ve}if(le.length&&Ke(J)&&!G1(J)&&!Ra(J,s.floating)&&Array.from(le).every(Ve=>!Ra(ve,Ve)))return;if(Un(J)&&L){const Ve=Vr(J),He=rr(J),Ee=/auto|scroll/,Ne=Ve||Ee.test(He.overflowX),nn=Ve||Ee.test(He.overflowY),Xe=Ne&&J.clientWidth>0&&J.scrollWidth>J.clientWidth,Ze=nn&&J.clientHeight>0&&J.scrollHeight>J.clientHeight,Pn=He.direction==="rtl",Ge=Ze&&(Pn?X.offsetX<=J.offsetWidth-J.clientWidth:X.offsetX>J.clientWidth),on=Xe&&X.offsetY>J.clientHeight;if(Ge||on)return}const _e=(re=l.current.floatingContext)==null?void 0:re.nodeId,_n=A&&qo(A.nodesRef.current,_e).some(Ve=>{var He;return No(X,(He=Ve.context)==null?void 0:He.elements.floating)});if(No(X,s.floating)||No(X,s.domReference)||_n)return;const Ye=A?qo(A.nodesRef.current,_e):[];if(Ye.length>0){let Ve=!0;if(Ye.forEach(He=>{var Ee;if((Ee=He.context)!=null&&Ee.open&&!He.context.dataRef.current.__outsidePressBubbles){Ve=!1;return}}),!Ve)return}t(!1,X,"outside-press")}),G=jr(X=>{var re;const Z=()=>{var W;ee(X),(W=Ct(X))==null||W.removeEventListener(m,Z)};(re=Ct(X))==null||re.addEventListener(m,Z)});E.useEffect(()=>{if(!r||!u)return;l.current.__escapeKeyBubbles=D,l.current.__outsidePressBubbles=I;let X=-1;function re(le){t(!1,le,"ancestor-scroll")}function Z(){window.clearTimeout(X),C.current=!0}function W(){X=window.setTimeout(()=>{C.current=!1},os()?5:0)}const J=mt(s.floating);f&&(J.addEventListener("keydown",H?ne:K,H),J.addEventListener("compositionstart",Z),J.addEventListener("compositionend",W)),R&&J.addEventListener(m,j?G:ee,j);let de=[];return y&&(Ke(s.domReference)&&(de=et(s.domReference)),Ke(s.floating)&&(de=de.concat(et(s.floating))),!Ke(s.reference)&&s.reference&&s.reference.contextElement&&(de=de.concat(et(s.reference.contextElement)))),de=de.filter(le=>{var ve;return le!==((ve=J.defaultView)==null?void 0:ve.visualViewport)}),de.forEach(le=>{le.addEventListener("scroll",re,{passive:!0})}),()=>{f&&(J.removeEventListener("keydown",H?ne:K,H),J.removeEventListener("compositionstart",Z),J.removeEventListener("compositionend",W)),R&&J.removeEventListener(m,j?G:ee,j),de.forEach(le=>{le.removeEventListener("scroll",re)}),window.clearTimeout(X)}},[l,s,f,R,m,r,t,y,u,D,I,K,H,ne,ee,j,G]),E.useEffect(()=>{S.current=!1},[R,m]);const F=E.useMemo(()=>({onKeyDown:K,...v&&{[oT[b]]:X=>{t(!1,X.nativeEvent,"reference-press")},...b!=="click"&&{onClick(X){t(!1,X.nativeEvent,"reference-press")}}}}),[K,t,v,b]),L=E.useMemo(()=>({onKeyDown:K,onMouseDown(){P.current=!0},onMouseUp(){P.current=!0},[lT[m]]:()=>{S.current=!0}}),[K,m]);return E.useMemo(()=>u?{reference:F,floating:L}:{},[u,F,L])}function dT(e){const{open:i=!1,onOpenChange:r,elements:t}=e,s=nT(),l=E.useRef({}),[u]=E.useState(()=>rT()),f=wc()!=null,[c,m]=E.useState(t.reference),v=jr((k,x,A)=>{l.current.openEvent=k?x:void 0,u.emit("openchange",{open:k,event:x,reason:A,nested:f}),r?.(k,x,A)}),b=E.useMemo(()=>({setPositionReference:m}),[]),y=E.useMemo(()=>({reference:c||t.reference||null,floating:t.floating||null,domReference:t.reference}),[c,t.reference,t.floating]);return E.useMemo(()=>({dataRef:l,open:i,onOpenChange:v,elements:y,events:u,floatingId:s,refs:b}),[i,v,y,u,s,b])}function fT(e){e===void 0&&(e={});const{nodeId:i}=e,r=dT({...e,elements:{reference:null,floating:null,...e.elements}}),t=e.rootContext||r,s=t.elements,[l,u]=E.useState(null),[f,c]=E.useState(null),v=s?.domReference||l,b=E.useRef(null),y=ql();Ut(()=>{v&&(b.current=v)},[v]);const k=b1({...e,elements:{...s,...f&&{reference:f}}}),x=E.useCallback(P=>{const D=Ke(P)?{getBoundingClientRect:()=>P.getBoundingClientRect(),getClientRects:()=>P.getClientRects(),contextElement:P}:P;c(D),k.refs.setReference(D)},[k.refs]),A=E.useCallback(P=>{(Ke(P)||P===null)&&(b.current=P,u(P)),(Ke(k.refs.reference.current)||k.refs.reference.current===null||P!==null&&!Ke(P))&&k.refs.setReference(P)},[k.refs]),_=E.useMemo(()=>({...k.refs,setReference:A,setPositionReference:x,domReference:b}),[k.refs,A,x]),R=E.useMemo(()=>({...k.elements,domReference:v}),[k.elements,v]),S=E.useMemo(()=>({...k,...t,refs:_,elements:R,nodeId:i}),[k,_,R,i,t]);return Ut(()=>{t.dataRef.current.floatingContext=S;const P=y?.nodesRef.current.find(D=>D.id===i);P&&(P.context=S)}),E.useMemo(()=>({...k,context:S,refs:_,elements:R}),[k,_,R,S])}function Lo(){return C1()&&D1()}function gT(e,i){i===void 0&&(i={});const{open:r,onOpenChange:t,events:s,dataRef:l,elements:u}=e,{enabled:f=!0,visibleOnly:c=!0}=i,m=E.useRef(!1),v=E.useRef(-1),b=E.useRef(!0);E.useEffect(()=>{if(!f)return;const k=Fn(u.domReference);function x(){!r&&Un(u.domReference)&&u.domReference===Vf(mt(u.domReference))&&(m.current=!0)}function A(){b.current=!0}function _(){b.current=!1}return k.addEventListener("blur",x),Lo()&&(k.addEventListener("keydown",A,!0),k.addEventListener("pointerdown",_,!0)),()=>{k.removeEventListener("blur",x),Lo()&&(k.removeEventListener("keydown",A,!0),k.removeEventListener("pointerdown",_,!0))}},[u.domReference,r,f]),E.useEffect(()=>{if(!f)return;function k(x){let{reason:A}=x;(A==="reference-press"||A==="escape-key")&&(m.current=!0)}return s.on("openchange",k),()=>{s.off("openchange",k)}},[s,f]),E.useEffect(()=>()=>{nr(v)},[]);const y=E.useMemo(()=>({onMouseLeave(){m.current=!1},onFocus(k){if(m.current)return;const x=Ct(k.nativeEvent);if(c&&Ke(x)){if(Lo()&&!k.relatedTarget){if(!b.current&&!U1(x))return}else if(!$1(x))return}t(!0,k.nativeEvent,"focus")},onBlur(k){m.current=!1;const x=k.relatedTarget,A=k.nativeEvent,_=Ke(x)&&x.hasAttribute(Bl("focus-guard"))&&x.getAttribute("data-type")==="outside";v.current=window.setTimeout(()=>{var R;const S=Vf(u.domReference?u.domReference.ownerDocument:document);!x&&S===u.domReference||Ra((R=l.current.floatingContext)==null?void 0:R.refs.floating.current,S)||Ra(u.domReference,S)||_||t(!1,A,"focus")})}}),[l,u.domReference,t,c]);return E.useMemo(()=>f?{reference:y}:{},[f,y])}function jo(e,i,r){const t=new Map,s=r==="item";let l=e;if(s&&e){const{[Hf]:u,[Gf]:f,...c}=e;l=c}return{...r==="floating"&&{tabIndex:-1,[X1]:""},...l,...i.map(u=>{const f=u?u[r]:null;return typeof f=="function"?e?f(e):null:f}).concat(e).reduce((u,f)=>(f&&Object.entries(f).forEach(c=>{let[m,v]=c;if(!(s&&[Hf,Gf].includes(m)))if(m.indexOf("on")===0){if(t.has(m)||t.set(m,[]),typeof v=="function"){var b;(b=t.get(m))==null||b.push(v),u[m]=function(){for(var y,k=arguments.length,x=new Array(k),A=0;A<k;A++)x[A]=arguments[A];return(y=t.get(m))==null?void 0:y.map(_=>_(...x)).find(_=>_!==void 0)}}}else u[m]=v}),u),{})}}function cT(e){e===void 0&&(e=[]);const i=e.map(f=>f?.reference),r=e.map(f=>f?.floating),t=e.map(f=>f?.item),s=E.useCallback(f=>jo(f,e,"reference"),i),l=E.useCallback(f=>jo(f,e,"floating"),r),u=E.useCallback(f=>jo(f,e,"item"),t);return E.useMemo(()=>({getReferenceProps:s,getFloatingProps:l,getItemProps:u}),[s,l,u])}function mT(e,i,r){r===void 0&&(r=!0);let t=e.filter(l=>{var u;return l.parentId===i&&((u=l.context)==null?void 0:u.open)}),s=t;for(;s.length;)s=r?e.filter(l=>{var u;return(u=s)==null?void 0:u.some(f=>{var c;return l.parentId===f.id&&((c=l.context)==null?void 0:c.open)})}):e,t=t.concat(s);return t}function Wf(e,i){const[r,t]=e;let s=!1;const l=i.length;for(let u=0,f=l-1;u<l;f=u++){const[c,m]=i[u]||[0,0],[v,b]=i[f]||[0,0];m>=t!=b>=t&&r<=(v-c)*(t-m)/(b-m)+c&&(s=!s)}return s}function vT(e,i){return e[0]>=i.x&&e[0]<=i.x+i.width&&e[1]>=i.y&&e[1]<=i.y+i.height}function hT(e){e===void 0&&(e={});const{buffer:i=.5,blockPointerEvents:r=!1,requireIntent:t=!0}=e;let s,l=!1,u=null,f=null,c=performance.now();function m(b,y){const k=performance.now(),x=k-c;if(u===null||f===null||x===0)return u=b,f=y,c=k,null;const A=b-u,_=y-f,S=Math.sqrt(A*A+_*_)/x;return u=b,f=y,c=k,S}const v=b=>{let{x:y,y:k,placement:x,elements:A,onClose:_,nodeId:R,tree:S}=b;return function(D){function I(){clearTimeout(s),_()}if(clearTimeout(s),!A.domReference||!A.floating||x==null||y==null||k==null)return;const{clientX:H,clientY:j}=D,C=[H,j],K=sT(D),ne=D.type==="mouseleave",ee=Fo(A.floating,K),G=Fo(A.domReference,K),F=A.domReference.getBoundingClientRect(),L=A.floating.getBoundingClientRect(),X=x.split("-")[0],re=y>L.right-L.width/2,Z=k>L.bottom-L.height/2,W=vT(C,F),J=L.width>F.width,de=L.height>F.height,le=(J?F:L).left,ve=(J?F:L).right,_e=(de?F:L).top,_n=(de?F:L).bottom;if(ee&&(l=!0,!ne))return;if(G&&(l=!1),G&&!ne){l=!0;return}if(ne&&Ke(D.relatedTarget)&&Fo(A.floating,D.relatedTarget)||S&&mT(S.nodesRef.current,R).some(He=>{let{context:Ee}=He;return Ee?.open}))return;if(X==="top"&&k>=F.bottom-1||X==="bottom"&&k<=F.top+1||X==="left"&&y>=F.right-1||X==="right"&&y<=F.left+1)return I();let Ye=[];switch(X){case"top":Ye=[[le,F.top+1],[le,L.bottom-1],[ve,L.bottom-1],[ve,F.top+1]];break;case"bottom":Ye=[[le,L.top+1],[le,F.bottom-1],[ve,F.bottom-1],[ve,L.top+1]];break;case"left":Ye=[[L.right-1,_n],[L.right-1,_e],[F.left+1,_e],[F.left+1,_n]];break;case"right":Ye=[[F.right-1,_n],[F.right-1,_e],[L.left+1,_e],[L.left+1,_n]];break}function Ve(He){let[Ee,Ne]=He;switch(X){case"top":{const nn=[J?Ee+i/2:re?Ee+i*4:Ee-i*4,Ne+i+1],Xe=[J?Ee-i/2:re?Ee+i*4:Ee-i*4,Ne+i+1],Ze=[[L.left,re||J?L.bottom-i:L.top],[L.right,re?J?L.bottom-i:L.top:L.bottom-i]];return[nn,Xe,...Ze]}case"bottom":{const nn=[J?Ee+i/2:re?Ee+i*4:Ee-i*4,Ne-i],Xe=[J?Ee-i/2:re?Ee+i*4:Ee-i*4,Ne-i],Ze=[[L.left,re||J?L.top+i:L.bottom],[L.right,re?J?L.top+i:L.bottom:L.top+i]];return[nn,Xe,...Ze]}case"left":{const nn=[Ee+i+1,de?Ne+i/2:Z?Ne+i*4:Ne-i*4],Xe=[Ee+i+1,de?Ne-i/2:Z?Ne+i*4:Ne-i*4];return[...[[Z||de?L.right-i:L.left,L.top],[Z?de?L.right-i:L.left:L.right-i,L.bottom]],nn,Xe]}case"right":{const nn=[Ee-i,de?Ne+i/2:Z?Ne+i*4:Ne-i*4],Xe=[Ee-i,de?Ne-i/2:Z?Ne+i*4:Ne-i*4],Ze=[[Z||de?L.left+i:L.right,L.top],[Z?de?L.left+i:L.right:L.left+i,L.bottom]];return[nn,Xe,...Ze]}}}if(!Wf([H,j],Ye)){if(l&&!W)return I();if(!ne&&t){const He=m(D.clientX,D.clientY);if(He!==null&&He<.1)return I()}Wf([H,j],Ve([y,k]))?!l&&t&&(s=window.setTimeout(I,40)):I()}}};return v.__options={blockPointerEvents:r},v}const Rc=()=>{const{cn:e}=Oe();return q.createElement(fc,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Pc=()=>{const{cn:e}=Oe();return q.createElement(fc,{title:Tt("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var pT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const bT=E.forwardRef((e,i)=>{var{className:r,header:t,children:s,open:l,defaultOpen:u=!1,onClick:f,size:c="medium",onOpenChange:m}=e,v=pT(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:b}=Oe(),[y,k]=Pl({defaultValue:u,value:l,onChange:m}),x=c==="small"?"small":"medium";return q.createElement("div",{className:b("navds-read-more",`navds-read-more--${c}`,r,{"navds-read-more--open":y}),"data-volume":"low"},q.createElement("button",Object.assign({},v,{ref:i,type:"button",className:b("navds-read-more__button","navds-body-short",{"navds-body-short--small":c==="small"}),onClick:Na(f,()=>k(A=>!A)),"aria-expanded":y,"data-state":y?"open":"closed"}),q.createElement(uc,{className:b("navds-read-more__expand-icon"),"aria-hidden":!0}),q.createElement("span",null,t)),q.createElement(Rl,{as:"div","aria-hidden":!y,className:b("navds-read-more__content",{"navds-read-more__content--closed":!y}),size:x,"data-state":y?"open":"closed"},s))}),Ji=E.createContext(null),ds=(e,i)=>{var r,t,s;const{size:l,error:u,errorId:f}=e,c=E.useContext(Ji),m=xa(),v=(r=e.id)!==null&&r!==void 0?r:`${i}-${m}`,b=f??`${i}-error-${m}`,y=`${i}-description-${m}`,k=c?.disabled||e.disabled,x=(c?.readOnly||e.readOnly)&&!k||void 0,A=!k&&!x&&!!(u||c?.error),_=!k&&!x&&!!u&&typeof u!="boolean",R=Object.assign({},A?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:_,hasError:A,errorId:b,inputDescriptionId:y,size:(t=l??c?.size)!==null&&t!==void 0?t:"medium",readOnly:x,inputProps:Object.assign(Object.assign({id:v},R),{"aria-describedby":Oa(e["aria-describedby"],{[y]:e.description&&!Qi(e.description),[b]:_,[(s=c?.errorId)!==null&&s!==void 0?s:""]:A&&c?.error})||void 0,disabled:k})}};function Qi(e,i=!0){if(q.isValidElement(e)){if(e.type===bT)return!0;if(e.props.children&&i)return Qi(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>Qi(r,i));return!1}function hn(e,i,r,t){return t?typeof t=="string"?{[`--__${e}c-${i}-${r}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([s,l])=>[`--__${e}c-${i}-${r}-${s}`,l])):{}}const yT={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},kT={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},zf=(e,i,r,t,s,l)=>i.split(" ").map((u,f,c)=>{var m,v;if(e==="margin-inline"&&u==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&u==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&u==="auto")return"auto";let b=`var(--${l}-${r}-${u})`;if(t.includes(u))b=u==="px"?"1px":u;else if(r==="spacing"&&u.startsWith("space"))b=`var(--${l}-${u})`;else if(r==="spacing"){const y=`--${l}-spacing-${u}`;b=`var(${(m=yT[y])!==null&&m!==void 0?m:y})`}else if(r==="radius"){const y=(v=kT[u])!==null&&v!==void 0?v:u;b=`var(--${l}-radius-${y})`}return s?u==="0"?"0":`calc(-1 * ${b})`:b}).join(" ");function qn(e,i,r,t,s,l=!1,u=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${i}-${r}-xs`]:zf(r,s,t,u,l,e)};const f={};return Object.entries(s).forEach(([c,m])=>{f[`--__${e}c-${i}-${r}-${c}`]=zf(r,m,t,u,l,e)}),f}const Ml=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Fl=({children:e,className:i,padding:r,paddingInline:t,paddingBlock:s,margin:l,marginInline:u,marginBlock:f,width:c,minWidth:m,maxWidth:v,height:b,minHeight:y,maxHeight:k,position:x,inset:A,top:_,right:R,left:S,bottom:P,overflow:D,overflowX:I,overflowY:H,flexBasis:j,flexGrow:C,flexShrink:K,gridColumn:ne})=>{const ee=Sa(!1),{cn:G}=Oe(),F=ee?"ax":"a",L=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},qn(F,"r","p","spacing",r)),qn(F,"r","pi","spacing",t)),qn(F,"r","pb","spacing",s)),qn(F,"r","m","spacing",l)),qn(F,"r","mi","spacing",u)),qn(F,"r","mb","spacing",f)),hn(F,"r","w",c)),hn(F,"r","minw",m)),hn(F,"r","maxw",v)),hn(F,"r","h",b)),hn(F,"r","minh",y)),hn(F,"r","maxh",k)),hn(F,"r","position",x)),qn(F,"r","inset","spacing",A)),qn(F,"r","top","spacing",_)),qn(F,"r","right","spacing",R)),qn(F,"r","bottom","spacing",P)),qn(F,"r","left","spacing",S)),hn(F,"r","overflow",D)),hn(F,"r","overflowx",I)),hn(F,"r","overflowy",H)),hn(F,"r","flex-basis",j)),hn(F,"r","flex-grow",C)),hn(F,"r","flex-shrink",K)),hn(F,"r","grid-column",ne));return q.createElement(Kt,{className:G({className:i,"navds-r-p":r,"navds-r-pi":t,"navds-r-pb":s,"navds-r-m":l,"navds-r-mi":u,"navds-r-mb":f,"navds-r-w":c,"navds-r-minw":m,"navds-r-maxw":v,"navds-r-h":b,"navds-r-minh":y,"navds-r-maxh":k,"navds-r-position":x,"navds-r-inset":A,"navds-r-top":_,"navds-r-right":R,"navds-r-bottom":P,"navds-r-left":S,"navds-r-overflow":D,"navds-r-overflowx":I,"navds-r-overflowy":H,"navds-r-flex-basis":j,"navds-r-flex-grow":C,"navds-r-flex-shrink":K,"navds-r-grid-column":ne}),style:L},e)};var _T=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const AT=E.forwardRef((e,i)=>{var{children:r,className:t,as:s="div",background:l,borderColor:u,borderWidth:f,borderRadius:c,shadow:m,style:v,asChild:b}=e,y=_T(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:k}=Oe(),x=Object.assign(Object.assign(Object.assign({},v),{"--__axc-box-background":l?`var(--ax-bg-${l})`:void 0,"--__axc-box-shadow":m?`var(--ax-shadow-${m})`:void 0,"--__axc-box-border-color":u?`var(--ax-border-${u})`:void 0,"--__axc-box-border-width":f?f.split(" ").map(_=>`${_}px`).join(" "):void 0}),qn("ax","box","radius","radius",c,!1,["0"])),A=b?Kt:s;return q.createElement(Fl,Object.assign({},y),q.createElement(A,Object.assign({},mr(y,Ml),{ref:i,style:x,className:k("navds-box",t,{"navds-box-bg":l,"navds-box-border-color":u,"navds-box-border-width":f,"navds-box-radius":c,"navds-box-shadow":m})}),r))});var TT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ET=E.forwardRef((e,i)=>{var{children:r,className:t,as:s="div",background:l,borderColor:u,borderWidth:f,borderRadius:c,shadow:m,style:v,asChild:b}=e,y=TT(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const k=Sa(!1),{cn:x}=Oe(),A=k?"ax":"a",_=Object.assign(Object.assign(Object.assign({},v),{[`--__${A}c-box-background`]:l?`var(--a-${l})`:void 0,[`--__${A}c-box-shadow`]:m?`var(--a-shadow-${m})`:void 0,[`--__${A}c-box-border-color`]:u?`var(--a-${u})`:void 0,[`--__${A}c-box-border-width`]:f?f.split(" ").map(S=>`${S}px`).join(" "):void 0}),qn(A,"box","radius","radius",c,!1,["0"])),R=b?Kt:s;return q.createElement(Fl,Object.assign({},y),q.createElement(R,Object.assign({},mr(y,Ml),{ref:i,style:_,className:x("navds-box",t,{"navds-box-bg":l,"navds-box-border-color":u,"navds-box-border-width":f,"navds-box-border-radius":c,"navds-box-shadow":m})}),r))}),Oc=ET;Oc.New=AT;var wT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Sc=E.forwardRef((e,i)=>{var{children:r,className:t,as:s="div",align:l,justify:u,wrap:f=!0,gap:c,style:m,direction:v="row",asChild:b}=e,y=wT(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const x=Sa(!1)?"ax":"a",{cn:A}=Oe(),_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),qn(x,"stack","gap","spacing",c)),hn(x,"stack","direction",v)),hn(x,"stack","align",l)),hn(x,"stack","justify",u)),R=b?Kt:s;return q.createElement(Fl,Object.assign({},y),q.createElement(R,Object.assign({},mr(y,Ml),{ref:i,style:_,className:A("navds-stack",t,{"navds-vstack":v==="column","navds-hstack":v==="row","navds-stack-gap":c,"navds-stack-align":l,"navds-stack-justify":u,"navds-stack-direction":v,"navds-stack-wrap":f})}),r))});var RT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Ll=E.forwardRef((e,i)=>{var{as:r="div"}=e,t=RT(e,["as"]);return q.createElement(Sc,Object.assign({as:r},t,{ref:i,direction:"row"}))});var PT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const _t=E.forwardRef((e,i)=>{var{as:r="div"}=e,t=PT(e,["as"]);return q.createElement(Sc,Object.assign({as:r},t,{ref:i,direction:"column",wrap:!1}))});var OT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ST=E.forwardRef((e,i)=>{var{className:r}=e,t=OT(e,["className"]);const{cn:s}=Oe();return q.createElement("tbody",Object.assign({},t,{ref:i,className:s("navds-table__body",r)}))});var IT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Ic=E.forwardRef((e,i)=>{var{className:r,children:t,align:s,textSize:l}=e,u=IT(e,["className","children","align","textSize"]);const{cn:f}=Oe();return q.createElement("th",Object.assign({ref:i,className:f("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":l==="small"})},u),t)}),xc=E.createContext(null);var xT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const NT=E.forwardRef((e,i)=>{var r,t,s,l,{className:u,children:f,sortable:c=!1,sortKey:m}=e,v=xT(e,["className","children","sortable","sortKey"]);const b=E.useContext(xc),{cn:y}=Oe();return c&&!m&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),q.createElement(Ic,Object.assign({scope:"col",ref:i,className:y(u),"aria-sort":c?((r=b?.sort)===null||r===void 0?void 0:r.orderBy)===m?(t=b?.sort)===null||t===void 0?void 0:t.direction:"none":void 0},v),c?q.createElement("button",{type:"button",className:y("navds-table__sort-button"),onClick:c&&m?()=>{var k;return(k=b?.onSortChange)===null||k===void 0?void 0:k.call(b,m)}:void 0},f,((s=b?.sort)===null||s===void 0?void 0:s.orderBy)===m?((l=b?.sort)===null||l===void 0?void 0:l.direction)==="descending"?q.createElement(z_,{"aria-hidden":!0}):q.createElement(Z_,{"aria-hidden":!0}):q.createElement(F_,{"aria-hidden":!0})):f)});var qT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Nc=E.forwardRef((e,i)=>{var{className:r,children:t="",align:s,textSize:l}=e,u=qT(e,["className","children","align","textSize"]);const{cn:f}=Oe();return q.createElement(cr,Object.assign({as:"td",ref:i,className:f("navds-table__data-cell",r,{[`navds-table__data-cell--align-${s}`]:s}),size:l},u),t)});var BT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const MT=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function FT(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function Xf(e){return typeof e=="string"&&e[e.length-1]==="%"&&FT(e.substring(0,e.length-1))}function Do(e,i){i===0&&e?.style&&(e.style.display="none")}function LT(e,i){i===0&&e?.style&&(e.style.display="")}const jT=e=>{var{children:i,className:r,innerClassName:t,duration:s=250,easing:l="ease",height:u}=e,f=BT(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=Oe(),m=E.useRef(u),v=E.useRef(null),b=E.useRef(),y=E.useRef(),k=E.useRef(u),x=E.useRef("visible"),A=MT?0:s;typeof k.current=="number"?(typeof u!="string"&&(k.current=u<0?0:u),x.current="hidden"):Xf(k.current)&&(k.current=u==="0%"?0:u,x.current="hidden");const[_,R]=E.useState(k.current),[S,P]=E.useState(x.current),[D,I]=E.useState(!1);E.useEffect(()=>{Do(v.current,k.current)},[]),E.useEffect(()=>{if(u!==m.current&&v.current){LT(v.current,m.current),v.current.style.overflow="hidden";const K=v.current.offsetHeight;v.current.style.overflow="";const ne=A;let ee,G,F="hidden",L;const X=m.current==="auto";typeof u=="number"?(ee=u<0?0:u,G=ee):Xf(u)?(ee=u==="0%"?0:u,G=ee):(ee=K,G="auto",F=void 0),X&&(G=ee,ee=K),R(ee),P("hidden"),I(!X),clearTimeout(y.current),clearTimeout(b.current),X?(L=!0,y.current=setTimeout(()=>{R(G),P(F),I(L)},50),b.current=setTimeout(()=>{I(!1),Do(v.current,G)},ne)):y.current=setTimeout(()=>{R(G),P(F),I(!1),u!=="auto"&&Do(v.current,ee)},ne)}return m.current=u,()=>{clearTimeout(y.current),clearTimeout(b.current)}},[u]);const H={height:_,overflow:S};D&&(H.transition=`height ${A}ms ${l} 0ms`,H.WebkitTransition=H.transition);const C=typeof f["aria-hidden"]<"u"?f["aria-hidden"]:u===0;return q.createElement("div",Object.assign({},f,{className:c(r),style:H}),q.createElement("div",{"aria-hidden":C,className:c(t),ref:v},i))};var DT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const qc=E.forwardRef((e,i)=>{var{className:r,selected:t=!1,shadeOnHover:s=!0}=e,l=DT(e,["className","selected","shadeOnHover"]);const{cn:u}=Oe();return q.createElement("tr",Object.assign({},l,{ref:i,className:u("navds-table__row",r,{"navds-table__row--selected":t,"navds-table__row--shade-on-hover":s})}))});var CT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const VT=E.forwardRef((e,i)=>{var{className:r,children:t,content:s,togglePlacement:l="left",defaultOpen:u=!1,open:f,onOpenChange:c,expansionDisabled:m=!1,expandOnRowClick:v=!1,colSpan:b=999,contentGutter:y,onClick:k}=e,x=CT(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:A}=Oe(),[_,R]=Pl({defaultValue:u,value:f,onChange:c}),S=Tt("global"),P=xa(),D=H=>{R(j=>!j),H.stopPropagation()},I=H=>{v&&!m&&!Bc(H.target)&&D(H)};return q.createElement(q.Fragment,null,q.createElement(qc,Object.assign({},x,{ref:i,className:A("navds-table__expandable-row",r,{"navds-table__expandable-row--open":_,"navds-table__expandable-row--expansion-disabled":m,"navds-table__expandable-row--clickable":v}),onClick:Na(k,I)}),l==="right"&&t,q.createElement(Nc,{className:A("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":_}),onClick:m?()=>null:D},!m&&q.createElement("button",{className:A("navds-table__toggle-expand-button"),type:"button","aria-controls":P,"aria-expanded":_,onClick:D},q.createElement(uc,{className:A("navds-table__expandable-icon"),title:S(_?"showLess":"showMore")}))),l==="left"&&t),q.createElement("tr",{"data-state":_?"open":"closed",className:A("navds-table__expanded-row"),"aria-hidden":!_,id:P},q.createElement("td",{colSpan:b,className:A("navds-table__expanded-row-cell")},q.createElement(jT,{className:A("navds-table__expanded-row-collapse"),innerClassName:A(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${y??l}`),height:_?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function Bc(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Bc(e.parentElement)}var HT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const GT=E.forwardRef((e,i)=>{var{className:r}=e,t=HT(e,["className"]);const{cn:s}=Oe();return q.createElement("thead",Object.assign({},t,{ref:i,className:s("navds-table__header",r)}))});var UT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const je=E.forwardRef((e,i)=>{var{className:r,zebraStripes:t=!1,size:s="medium",onSortChange:l,sort:u,stickyHeader:f=!1}=e,c=UT(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:m}=Oe();return q.createElement(xc.Provider,{value:{onSortChange:l,sort:u}},q.createElement("table",Object.assign({},c,{ref:i,className:m("navds-table",`navds-table--${s}`,r,{"navds-table--zebra-stripes":t,"navds-table--sticky-header":f})})))});je.Header=GT;je.Body=ST;je.Row=qc;je.ColumnHeader=NT;je.HeaderCell=Ic;je.DataCell=Nc;je.ExpandableRow=VT;var $T=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const KT=E.forwardRef((e,i)=>{var{children:r,className:t,variant:s,size:l="medium",icon:u,"data-color":f}=e,c=$T(e,["children","className","variant","size","icon","data-color"]);const{cn:m}=Oe(),v=s?.endsWith("-filled")&&"strong",b=s?.endsWith("-moderate")&&"moderate";return q.createElement(cr,Object.assign({"data-color":f??YT(s),"data-variant":v||b||"outline"},c,{ref:i,as:"span",size:l==="medium"?"medium":"small",className:m("navds-tag",t,`navds-tag--${s}`,`navds-tag--${l}`)}),u&&q.createElement("span",{className:m("navds-tag__icon--left")},u),r)});function YT(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var WT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const zT=E.forwardRef((e,i)=>{var{children:r,className:t,arrow:s=!0,placement:l="top",open:u,defaultOpen:f=!1,onOpenChange:c,offset:m,content:v,delay:b=150,id:y,keys:k,maxChar:x=80,describesChild:A=!1}=e,_=WT(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:R}=Oe(),[S,P]=Pl({defaultValue:f,value:u,onChange:c}),D=E.useRef(null),I=nA(!1),H=I?I.ref.current:void 0,{x:j,y:C,strategy:K,context:ne,placement:ee,middlewareData:{arrow:{x:G,y:F}={},hide:{referenceHidden:L}={}},refs:X}=fT({placement:l,open:S,onOpenChange:le=>P(le),middleware:[k1(m??(s?8:4)),_1(),A1({padding:5,fallbackPlacements:["bottom","top"]}),T1({element:D,padding:5})],whileElementsMounted:I?(le,ve,_e)=>Lf(le,ve,_e,{animationFrame:!0}):Lf,strategy:I?"fixed":void 0}),{getReferenceProps:re,getFloatingProps:Z}=cT([iT(ne,{handleClose:hT(),restMs:b}),gT(ne),uT(ne)]),W=xa(y),J=El(i,X.setFloating);if(!r||r?.type===q.Fragment||r===q.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;v?.length>x&&S&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${v.length}
Tooltip-content: ${v}`);const de=A?S?{"aria-describedby":W}:{title:v}:{"aria-label":v};return q.createElement(q.Fragment,null,q.createElement(Kt,Object.assign({ref:X.setReference},re(),de,{"aria-keyshortcuts":k?k.join("+"):void 0}),r),q.createElement(LA,{rootElement:H,asChild:!0},S&&q.createElement("div",Object.assign({},Z(Object.assign(Object.assign({},_),{ref:J,style:{position:K,top:C??0,left:j??0,visibility:L?"hidden":"visible"},role:"tooltip",id:W,className:R("navds-tooltip","navds-detail navds-detail--small",t)})),{"data-side":ee,"data-state":"open"}),v,k&&q.createElement("span",{className:R("navds-tooltip__keys"),"aria-hidden":!0},k.map(le=>q.createElement(O_,{as:"kbd",key:le,className:R("navds-tooltip__key")},le))),s&&q.createElement("div",{ref:le=>{D.current=le},className:R("navds-tooltip__arrow"),style:{left:G!=null?`${G}px`:"",top:F!=null?`${F}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[ee]]:"-3.5px"}}))))}),XT=e=>{const i=ds(e,"fieldset");return Object.assign(Object.assign({},i),{inputProps:{"aria-describedby":Oa(e["aria-describedby"],{[i.inputDescriptionId]:e.description&&!Qi(e.description)})||void 0}})};var ZT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const JT=E.forwardRef((e,i)=>{var r,t,s;const{inputProps:l,errorId:u,showErrorMsg:f,hasError:c,size:m,readOnly:v,inputDescriptionId:b}=XT(e),{cn:y}=Oe(),k=E.useContext(Ji),{children:x,className:A,errorPropagation:_=!0,legend:R,description:S,hideLegend:P,nativeReadOnly:D=!0}=e,I=ZT(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return q.createElement(Ji.Provider,{value:{error:_?(r=e.error)!==null&&r!==void 0?r:k?.error:void 0,errorId:Oa({[u]:f,[(t=k?.errorId)!==null&&t!==void 0?t:""]:!!k?.error}),size:m,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:v}},q.createElement("fieldset",Object.assign({},mr(I,["errorId","error","size","readOnly"]),l,{ref:i,className:y(A,"navds-fieldset",`navds-fieldset--${m}`,{"navds-fieldset--error":c,"navds-fieldset--readonly":v})}),q.createElement(bt,{size:m,as:"legend",className:y("navds-fieldset__legend",{"navds-sr-only":!!P})},v&&(D?q.createElement(Rc,null):q.createElement(Pc,null)),R),!!S&&q.createElement(cr,{className:y("navds-fieldset__description",{"navds-sr-only":!!P}),id:b,size:m??"medium",as:"div"},e.description),x,q.createElement("div",{id:u,"aria-relevant":"additions removals","aria-live":"polite",className:y("navds-fieldset__error")},f&&q.createElement(as,{size:m,showIcon:!0},e.error))))});var QT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Mc=E.createContext(null);E.forwardRef((e,i)=>{var r,t,{value:s,defaultValue:l,onChange:u=()=>{},children:f,className:c}=e,m=QT(e,["value","defaultValue","onChange","children","className"]);const{cn:v}=Oe(),b=E.useContext(Ji),[y,k]=E.useState(l??[]),x=A=>{const _=s??y,R=_.includes(A)?_.filter(S=>S!==A):[..._,A];s===void 0&&k(R),u(R)};return q.createElement(JT,Object.assign({},m,{ref:i,className:v(c,"navds-checkbox-group",`navds-checkbox-group--${(t=(r=m.size)!==null&&r!==void 0?r:b?.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),q.createElement(Mc.Provider,{value:{value:s,defaultValue:l,toggleValue:x}},q.createElement("div",{className:v("navds-checkboxes")},f)))});var eE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const nE=e=>{const i=E.useContext(Mc),r=ds(mr(e,["description","children"]),"checkbox"),{inputProps:t,readOnly:s}=r,l=eE(r,["inputProps","readOnly"]);return i&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},l),{readOnly:s,nested:!!i,inputProps:Object.assign(Object.assign({},t),{checked:i?.value?i.value.includes(e.value):e.checked,defaultChecked:i?.defaultValue?i.defaultValue.includes(e.value):e.defaultChecked,onChange:u=>{var f;s||((f=e.onChange)===null||f===void 0||f.call(e,u),i?.toggleValue(e.value))},onClick:u=>{var f;if(s){u.preventDefault();return}(f=e?.onClick)===null||f===void 0||f.call(e,u)}})})},rE=E.forwardRef((e,i)=>{const{cn:r}=Oe(),{inputProps:t,hasError:s,size:l,readOnly:u,nested:f}=nE(e);return q.createElement("div",{className:r(e.className,"navds-checkbox",`navds-checkbox--${l}`,{"navds-checkbox--error":s,"navds-checkbox--disabled":t.disabled,"navds-checkbox--readonly":u}),"data-color":s?"danger":e["data-color"]},q.createElement("input",Object.assign({},mr(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),mr(t,["aria-invalid"]),{type:"checkbox",className:r("navds-checkbox__input"),ref:c=>{var m;c&&(c.indeterminate=(m=e.indeterminate)!==null&&m!==void 0?m:!1),typeof i=="function"?i(c):i!=null&&(i.current=c)}})),q.createElement("label",{htmlFor:t.id,className:r("navds-checkbox__label")},q.createElement("span",{className:r("navds-checkbox__icon")},q.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},q.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),q.createElement("span",{className:r("navds-checkbox__icon-indeterminate")}),q.createElement("span",{className:r("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},q.createElement(cr,{as:"span",size:l,className:r("navds-checkbox__label-text")},!f&&u&&q.createElement(Pc,null),e.children),e.description&&q.createElement(cr,{as:"span",size:l,className:r("navds-form-field__subdescription navds-checkbox__description")},e.description))))}),Fc=E.createContext(null);var tE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Lc=E.forwardRef((e,i)=>{var r,{className:t,children:s,disabled:l,onClick:u}=e,f=tE(e,["className","children","disabled","onClick"]);const{cn:c}=Oe(),m=Tt("Search"),v=E.useContext(Fc);if(v===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:b,variant:y,handleClick:k}=v;return q.createElement(us,Object.assign({type:"submit"},f,{ref:i,size:b,variant:y==="secondary"?"secondary":"primary",className:c("navds-search__button-search",t),disabled:(r=v?.disabled)!==null&&r!==void 0?r:l,onClick:Na(u,k),icon:q.createElement(dc,Object.assign({},s?{"aria-hidden":!0}:{title:m("search")}))}),s)});var aE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const al=E.forwardRef((e,i)=>{const{inputProps:r,size:t="medium",inputDescriptionId:s,errorId:l,showErrorMsg:u,hasError:f}=ds(e,"searchfield"),{className:c,hideLabel:m=!0,label:v,description:b,value:y,clearButtonLabel:k,onClear:x,clearButton:A=!0,children:_,variant:R="primary",defaultValue:S,onChange:P,onSearchClick:D,htmlSize:I,"data-color":H}=e,j=aE(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:C}=Oe(),K=E.useRef(null),ne=El(K,i),[ee,G]=E.useState(S??""),F=Z=>{y===void 0&&G(Z),P?.(Z)},L=Z=>{var W,J;x?.(Z),F(""),(J=(W=K.current)===null||W===void 0?void 0:W.focus)===null||J===void 0||J.call(W)},X=()=>{D?.(`${y??ee}`)},re=A&&!r.disabled&&(y??ee);return q.createElement("div",{onKeyDown:Z=>{var W;Z.key==="Escape"&&(!((W=K.current)===null||W===void 0)&&W.value&&Z.preventDefault(),L({trigger:"Escape",event:Z}))},className:C(c,"navds-form-field",`navds-form-field--${t}`,"navds-search",{"navds-search--error":f,"navds-search--disabled":r.disabled,"navds-search--with-size":I}),"data-color":H},q.createElement(bt,{htmlFor:r.id,size:t,className:C("navds-form-field__label",{"navds-sr-only":m})},v),!!b&&q.createElement(cr,{className:C("navds-form-field__description",{"navds-sr-only":m}),id:s,size:t,as:"div"},b),q.createElement("div",{className:C("navds-search__wrapper")},q.createElement("div",{className:C("navds-search__wrapper-inner")},R==="simple"&&q.createElement(dc,{"aria-hidden":!0,className:C("navds-search__search-icon")}),q.createElement("input",Object.assign({ref:ne},mr(j,["error","errorId","size","readOnly"]),r,{value:y??ee,onChange:Z=>F(Z.target.value),type:"search",className:C(c,"navds-search__input",`navds-search__input--${R}`,"navds-text-field__input","navds-body-short",`navds-body-short--${t}`)},I?{size:Number(I)}:{})),re&&q.createElement(iE,{handleClear:L,size:t,clearButtonLabel:k})),q.createElement(Fc.Provider,{value:{size:t,disabled:r.disabled,variant:R,handleClick:X}},_||R!=="simple"&&q.createElement(Lc,{"data-color":H}))),q.createElement("div",{className:C("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},u&&q.createElement(as,{size:t,showIcon:!0},e.error)))});function iE({size:e,clearButtonLabel:i,handleClear:r}){const{cn:t}=Oe(),s=Sa(!1),l=Tt("Search");return s?q.createElement(us,{className:t("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:q.createElement(Qo,{"aria-hidden":!0}),title:i||l("clear"),onClick:u=>r({trigger:"Click",event:u}),type:"button"}):q.createElement("button",{type:"button",onClick:u=>r({trigger:"Click",event:u}),className:t("navds-search__button-clear")},q.createElement("span",{className:t("navds-sr-only")},i||l("clear")),q.createElement(Qo,{"aria-hidden":!0}))}al.Button=Lc;var sE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Zf=(e,i,r)=>{const{outerHeightStyle:t,overflow:s}=i;return r.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==s)?(r.current+=1,i):e},Jf=e=>(e?.ownerDocument||document).defaultView||window;function Fi(e){return parseInt(e,10)||0}const oE=E.forwardRef((e,i)=>{var r,t,{className:s,onChange:l,maxRows:u,minRows:f=1,autoScrollbar:c,style:m,value:v}=e,b=sE(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:y}=E.useRef(v!=null),k=E.useRef(null),x=El(k,i),A=E.useRef(null),_=E.useRef(0),[R,S]=E.useState({outerHeightStyle:0}),P=q.useCallback(()=>{const j=k.current,K=Jf(j).getComputedStyle(j);if(K.width==="0px")return{outerHeightStyle:0};const ne=A.current;ne.style.width=K.width,ne.value=j.value||b.placeholder||"x",ne.value.slice(-1)===`
`&&(ne.value+=" ");const ee=K.boxSizing,G=Fi(K.paddingBottom)+Fi(K.paddingTop),F=Fi(K.borderBottomWidth)+Fi(K.borderTopWidth),L=ne.scrollHeight-G;ne.value="x";const X=ne.scrollHeight-G;let re=L;f&&(re=Math.max(Number(f)*X,re)),u&&(re=Math.min(Number(u)*X,re)),re=Math.max(re,X);const Z=re+(ee==="border-box"?G+F:0),W=Math.abs(re-L)<=1;return{outerHeightStyle:Z,overflow:W}},[u,f,b.placeholder]),D=()=>{const j=P();Qf(j)||S(C=>Zf(C,j,_))};Of(()=>{const j=()=>{const G=P();Qf(G)||Jo.flushSync(()=>{S(F=>Zf(F,G,_))})},C=lc(()=>{var G,F,L;if(_.current=0,!((G=k.current)===null||G===void 0)&&G.style.height||!((F=k.current)===null||F===void 0)&&F.style.width){((L=k.current)===null||L===void 0?void 0:L.style.overflow)==="hidden"&&S(X=>Object.assign(Object.assign({},X),{overflow:!1}));return}j()},166,!0),K=k.current,ne=Jf(K);ne.addEventListener("resize",C);let ee;return typeof ResizeObserver<"u"&&(ee=new ResizeObserver(C),ee.observe(K)),()=>{C.clear(),ne.removeEventListener("resize",C),ee&&ee.disconnect()}},[P]),Of(()=>{D()}),E.useEffect(()=>{_.current=0},[v]);const I=j=>{_.current=0,y||D(),l&&l(j)},H=Object.assign({"--__ac-textarea-height":R.outerHeightStyle+"px","--__axc-textarea-height":R.outerHeightStyle+"px",overflow:R.overflow&&!c&&!(!((r=k.current)===null||r===void 0)&&r.style.height)&&!(!((t=k.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},m);return q.createElement(q.Fragment,null,q.createElement("textarea",Object.assign({value:v,onChange:I,ref:x,rows:f,style:H},b,{className:s})),q.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:A,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},m)}))});function Qf(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const lE=({maxLengthId:e,maxLength:i,currentLength:r,size:t,i18n:s})=>{const{cn:l}=Oe(),u=Tt("Textarea",{charsLeft:s?.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s?.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),f=i-r,[c,m]=E.useState(f);return E.useEffect(()=>{const v=lc(()=>{m(f)},2e3);return v(),()=>{v.clear()}},[f]),q.createElement(q.Fragment,null,q.createElement("span",{id:e,className:l("navds-sr-only")},u("maxLength",{maxLength:i})),f<20&&q.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},eg(c,u)),q.createElement(cr,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":f<0}),size:t},eg(f,u)))},eg=(e,i)=>e<0?i("charsTooMany",{chars:Math.abs(e)}):i("charsLeft",{chars:e});var uE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const dE=E.forwardRef((e,i)=>{var r,t,s;const{inputProps:l,errorId:u,showErrorMsg:f,hasError:c,size:m,inputDescriptionId:v}=ds(e,"textarea"),{label:b,className:y,description:k,maxLength:x,hideLabel:A=!1,resize:_,UNSAFE_autoScrollbar:R,i18n:S,readOnly:P}=e,D=uE(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:I}=Oe(),H=xa(),j=x!==void 0&&x>0,[C,K]=E.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),ne=()=>{let G=D?.minRows?D?.minRows:3;return m==="small"&&(G=D?.minRows?D?.minRows:2),G},ee=Oa(l["aria-describedby"],{[H??""]:j});return q.createElement("div",{className:I(y,"navds-form-field",`navds-form-field--${m}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":P,"navds-textarea--readonly":P,"navds-textarea--error":c,"navds-textarea--autoscrollbar":R,[`navds-textarea--resize-${_===!0?"both":_}`]:_})},q.createElement(bt,{htmlFor:l.id,size:m,className:I("navds-form-field__label",{"navds-sr-only":A})},P&&q.createElement(Rc,null),b),!!k&&q.createElement(cr,{className:I("navds-form-field__description",{"navds-sr-only":A}),id:v,size:m,as:"div"},k),q.createElement(oE,Object.assign({},mr(D,["error","errorId","size"]),l,{onChange:Na(e.onChange,e.value===void 0?G=>K(G.target.value):void 0),minRows:ne(),autoScrollbar:R,ref:i,readOnly:P,className:I("navds-textarea__input","navds-body-short",`navds-body-short--${m??"medium"}`)},ee?{"aria-describedby":ee}:{})),j&&!P&&!l.disabled&&q.createElement(lE,{maxLengthId:H,maxLength:x,currentLength:(s=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:C.length,size:m,i18n:S}),q.createElement("div",{className:I("navds-form-field__error"),id:u,"aria-relevant":"additions removals","aria-live":"polite"},f&&q.createElement(as,{size:m,showIcon:!0},e.error)))});function fE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ng={exports:{}},ha={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function gE(){if(rg)return ha;rg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:l}}return ha.Fragment=i,ha.jsx=r,ha.jsxs=r,ha}var tg;function cE(){return tg||(tg=1,ng.exports=gE()),ng.exports}var wr=cE();const mE=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:wr.jsx(M1,{variant:"warning",size:"small",children:wr.jsx(_t,{gap:"space-8",children:q.Children.map(e,i=>wr.jsx(cr,{size:"small",children:i},u_(i)?i.key:i))})}),Fa={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};vr(Fa);var ag={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ig;function vE(){return ig||(ig=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var l="",u=0;u<arguments.length;u++){var f=arguments[u];f&&(l=s(l,t.call(this,f)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var f in l)i.call(l,f)&&l[f]&&(u=s(u,this&&this[f]||f));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ag)),ag.exports}var hE=vE();const jl=fE(hE),pE="_borderbox_1a0x6_1",bE="_error_1a0x6_5",yE="_warning_1a0x6_8",kE={borderbox:pE,error:bE,warning:yE},_E=jl.bind(kE),sg=({error:e=!1,className:i,children:r})=>wr.jsx(Oc.New,{padding:"4",className:_E("borderbox",{error:e},i),children:r}),AE="_aksjonspunkt_11wjs_1",TE="_erAksjonspunktApent_11wjs_4",EE="_erIkkeGodkjentAvBeslutter_11wjs_8",wE={aksjonspunkt:AE,erAksjonspunktApent:TE,erIkkeGodkjentAvBeslutter:EE};jl.bind(wE);vr(Fa);vr(Fa);const RE="_divider_1jpov_1",PE="_dividerParagraf_1jpov_8",OE="_leftPanel_1jpov_11",SE="_rightPanel_1jpov_14",IE={divider:RE,dividerParagraf:PE,leftPanel:OE,rightPanel:SE};jl.bind(IE);const xE=()=>wr.jsx("span",{"data-testid":"editedIcon",children:wr.jsx(Y_,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});vr(Fa);const NE=vr(Fa),qE=({tekst:e,children:i})=>{const[r,t]=E.useState(!1);if(!e)return i;const s=async()=>{await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>{t(!1)},1e3)};return wr.jsx(zT,{content:NE.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:wr.jsx("span",{"aria-hidden":"true",onClick:s,children:i??e})})},og={default:"_default_af3od_1",rød:"_rød_af3od_5"},Pa=({beløp:e,kr:i=!1,rød:r=!1})=>{const t=e?.toString().replace(/\s/g,"");return wr.jsx(qE,{tekst:t,children:wr.jsxs("span",{className:r?og.rød:og.default,children:[t?d_(t):"-",t&&i&&" kr"]})})},BE=e=>!!e||e===0,lg=e=>e??0,ME=e=>BE(e.overstyrtPrAar)?lg(e.overstyrtPrAar):lg(e.beregnetPrAar),Co=e=>(e.beregningsgrunnlagPrStatusOgAndel||[]).map(r=>ME(r)).reduce((r,t)=>r+t,0),Vo=e=>e.flatMap(i=>i.inntekter).map(({inntekt:i})=>i).reduce((i,r)=>i+r,0)*2,ug=(e,i)=>e>i,jc=({periode:e,besteMåneder:i})=>ie.jsxs(_t,{gap:"space-16",children:[ie.jsxs(je,{children:[ie.jsx(je.Header,{children:ie.jsxs(je.Row,{children:[ie.jsx(je.HeaderCell,{scope:"col"}),ie.jsx(je.HeaderCell,{scope:"col",children:ie.jsx(Mn,{id:"ResultatGrunnlag.BeregningEtterKap8"})}),ie.jsx(je.HeaderCell,{scope:"col",children:ie.jsx(Mn,{id:"ResultatGrunnlag.BeregningEtterBesteberegning"})})]})}),ie.jsx(je.Body,{children:ie.jsxs(je.Row,{children:[ie.jsx(je.DataCell,{textSize:"small",children:ie.jsx(Mn,{id:"ResultatGrunnlag.BruttoBeregningsgrunnlag"})}),ie.jsx(je.DataCell,{textSize:"small",children:ie.jsx(Pa,{beløp:Co(e)})}),ie.jsx(je.DataCell,{textSize:"small",children:ie.jsx(Pa,{beløp:Vo(i)})})]})})]}),ie.jsxs(cr,{size:"small",children:[ug(Co(e),Vo(i))&&ie.jsx(Mn,{id:"ResultatGrunnlag.Kap8GirBesteBeregning"}),!ug(Co(e),Vo(i))&&ie.jsx(Mn,{id:"ResultatGrunnlag.Kap1473GirBesteBeregning"})]})]});jc.__docgenInfo={description:`BesteberegningResultatGrunnlagPanel

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
}>`}],raw:"Månedsgrunnlag[]"},description:""}}};const FE="_colWidth_horwr_1",Ui={colWidth:FE,månedRad:"_månedRad_horwr_6",månedAktivitet:"_månedAktivitet_horwr_10",månedInntekt:"_månedInntekt_horwr_14"},LE=e=>{const i=Hr(e).format("MMMM - YYYY");return i.charAt(0).toUpperCase()+i.slice(1)},jE=(e,i,r)=>{const t=e.arbeidsgiverId?i[e.arbeidsgiverId]:void 0;return t?f_(t):r.OpptjeningAktivitetType.find(s=>s.kode===e.opptjeningAktivitetType)?.navn??""},DE=({inntekt:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>ie.jsxs(je.Row,{className:Ui.månedRad,children:[ie.jsx(je.DataCell,{textSize:"small",className:Ui.månedAktivitet,children:jE(e,i,r)}),ie.jsx(je.DataCell,{textSize:"small",className:Ui.månedInntekt,children:ie.jsx(Pa,{beløp:e.inntekt})})]}),CE=({inntekter:e})=>ie.jsxs(je.Row,{children:[ie.jsx(je.HeaderCell,{textSize:"small",children:ie.jsx(Mn,{id:"Inntekttabell.Sum"})}),ie.jsx(je.HeaderCell,{textSize:"small",children:ie.jsx(Pa,{beløp:e.map(({inntekt:i})=>i).reduce((i,r)=>i+r,0)})})]},"sum"),VE=({inntekter:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>ie.jsxs(je,{children:[ie.jsx(je.Header,{children:ie.jsxs(je.Row,{children:[ie.jsx(je.HeaderCell,{scope:"col",children:ie.jsx(Mn,{id:"BesteberegningProsessPanel.Måned.Inntekt.Aktivitet"})}),ie.jsx(je.HeaderCell,{scope:"col",children:ie.jsx(Mn,{id:"BesteberegningProsessPanel.Måned.Inntekt.Inntekt"})})]})}),ie.jsxs(je.Body,{children:[e.map(t=>ie.jsx(DE,{inntekt:t,arbeidsgiverOpplysninger:i,alleKodeverk:r},`${t.arbeidsforholdId}-${t.arbeidsgiverId}-${t.inntekt}`)),e.length>0&&ie.jsx(CE,{inntekter:e})]})]}),Ho=({måneder:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>ie.jsx(Ll,{gap:"space-8",children:e.map(t=>ie.jsxs("div",{className:Ui.colWidth,children:[ie.jsx(cr,{size:"small",children:LE(t.fom)}),ie.jsx(VE,{inntekter:t.inntekter,arbeidsgiverOpplysninger:i,alleKodeverk:r})]},t.fom))}),HE=e=>e.flatMap(r=>r.inntekter).map(({inntekt:r})=>r).reduce((r,t)=>r+t,0)/6*12,GE=e=>[...e].sort((i,r)=>Hr(i.fom).diff(Hr(r.fom))),Dc=({besteMåneder:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>{const t=GE(e);return ie.jsxs(_t,{gap:"space-16",children:[ie.jsxs(bt,{size:"small",children:[ie.jsx(Mn,{id:"Inntekttabell.Tittel"})," "]}),ie.jsx(Ho,{måneder:t.slice(0,2),arbeidsgiverOpplysninger:i,alleKodeverk:r}),ie.jsx(Ho,{måneder:t.slice(2,4),arbeidsgiverOpplysninger:i,alleKodeverk:r}),ie.jsx(Ho,{måneder:t.slice(4,6),arbeidsgiverOpplysninger:i,alleKodeverk:r}),ie.jsx(bt,{size:"small",children:ie.jsx(Mn,{id:"Inntekttabell.BeregnetÅrsinntekt",values:{inntekt:ie.jsx(Pa,{beløp:HE(e)})}})})]})};Dc.__docgenInfo={description:`BesteManederVisningPanel

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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};var La=e=>e.type==="checkbox",vt=e=>e instanceof Date,Rn=e=>e==null;const Cc=e=>typeof e=="object";var sn=e=>!Rn(e)&&!Array.isArray(e)&&Cc(e)&&!vt(e),Vc=e=>sn(e)&&e.target?La(e.target)?e.target.checked:e.target.value:e,UE=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Hc=(e,i)=>e.has(UE(i)),$E=e=>{const i=e.constructor&&e.constructor.prototype;return sn(i)&&i.hasOwnProperty("isPrototypeOf")},Dl=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function gn(e){let i;const r=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)i=new Date(e);else if(!(Dl&&(e instanceof Blob||t))&&(r||sn(e)))if(i=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!$E(e))i=e;else for(const s in e)e.hasOwnProperty(s)&&(i[s]=gn(e[s]));else return e;return i}var fs=e=>/^\w*$/.test(e),an=e=>e===void 0,Cl=e=>Array.isArray(e)?e.filter(Boolean):[],Vl=e=>Cl(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ue=(e,i,r)=>{if(!i||!sn(e))return r;const t=(fs(i)?[i]:Vl(i)).reduce((s,l)=>Rn(s)?s:s[l],e);return an(t)||t===e?an(e[i])?r:e[i]:t},Gn=e=>typeof e=="boolean",$e=(e,i,r)=>{let t=-1;const s=fs(i)?[i]:Vl(i),l=s.length,u=l-1;for(;++t<l;){const f=s[t];let c=r;if(t!==u){const m=e[f];c=sn(m)||Array.isArray(m)?m:isNaN(+s[t+1])?{}:[]}if(f==="__proto__"||f==="constructor"||f==="prototype")return;e[f]=c,e=e[f]}};const es={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},fr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Lr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Hl=q.createContext(null);Hl.displayName="HookFormContext";const ja=()=>q.useContext(Hl),KE=e=>{const{children:i,...r}=e;return q.createElement(Hl.Provider,{value:r},i)};var Gc=(e,i,r,t=!0)=>{const s={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(s,l,{get:()=>{const u=l;return i._proxyFormState[u]!==fr.all&&(i._proxyFormState[u]=!t||fr.all),r&&(r[u]=!0),e[u]}});return s};const Gl=typeof window<"u"?q.useLayoutEffect:q.useEffect;function YE(e){const i=ja(),{control:r=i.control,disabled:t,name:s,exact:l}=e||{},[u,f]=q.useState(r._formState),c=q.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Gl(()=>r._subscribe({name:s,formState:c.current,exact:l,callback:m=>{!t&&f({...r._formState,...m})}}),[s,t,l]),q.useEffect(()=>{c.current.isValid&&r._setValid(!0)},[r]),q.useMemo(()=>Gc(u,r,c.current,!1),[u,r])}var Tr=e=>typeof e=="string",Uc=(e,i,r,t,s)=>Tr(e)?(t&&i.watch.add(e),ue(r,e,s)):Array.isArray(e)?e.map(l=>(t&&i.watch.add(l),ue(r,l))):(t&&(i.watchAll=!0),r),il=e=>Rn(e)||!Cc(e);function Dr(e,i,r=new WeakSet){if(il(e)||il(i))return e===i;if(vt(e)&&vt(i))return e.getTime()===i.getTime();const t=Object.keys(e),s=Object.keys(i);if(t.length!==s.length)return!1;if(r.has(e)||r.has(i))return!0;r.add(e),r.add(i);for(const l of t){const u=e[l];if(!s.includes(l))return!1;if(l!=="ref"){const f=i[l];if(vt(u)&&vt(f)||sn(u)&&sn(f)||Array.isArray(u)&&Array.isArray(f)?!Dr(u,f,r):u!==f)return!1}}return!0}function WE(e){const i=ja(),{control:r=i.control,name:t,defaultValue:s,disabled:l,exact:u,compute:f}=e||{},c=q.useRef(s),m=q.useRef(f),v=q.useRef(void 0);m.current=f;const b=q.useMemo(()=>r._getWatch(t,c.current),[r,t]),[y,k]=q.useState(m.current?m.current(b):b);return Gl(()=>r._subscribe({name:t,formState:{values:!0},exact:u,callback:x=>{if(!l){const A=Uc(t,r._names,x.values||r._formValues,!1,c.current);if(m.current){const _=m.current(A);Dr(_,v.current)||(k(_),v.current=_)}else k(A)}}}),[r,l,t,u]),q.useEffect(()=>r._removeUnmounted()),y}function $c(e){const i=ja(),{name:r,disabled:t,control:s=i.control,shouldUnregister:l,defaultValue:u}=e,f=Hc(s._names.array,r),c=q.useMemo(()=>ue(s._formValues,r,ue(s._defaultValues,r,u)),[s,r,u]),m=WE({control:s,name:r,defaultValue:c,exact:!0}),v=YE({control:s,name:r,exact:!0}),b=q.useRef(e),y=q.useRef(s.register(r,{...e.rules,value:m,...Gn(e.disabled)?{disabled:e.disabled}:{}}));b.current=e;const k=q.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!ue(v.errors,r)},isDirty:{enumerable:!0,get:()=>!!ue(v.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!ue(v.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!ue(v.validatingFields,r)},error:{enumerable:!0,get:()=>ue(v.errors,r)}}),[v,r]),x=q.useCallback(S=>y.current.onChange({target:{value:Vc(S),name:r},type:es.CHANGE}),[r]),A=q.useCallback(()=>y.current.onBlur({target:{value:ue(s._formValues,r),name:r},type:es.BLUR}),[r,s._formValues]),_=q.useCallback(S=>{const P=ue(s._fields,r);P&&S&&(P._f.ref={focus:()=>S.focus&&S.focus(),select:()=>S.select&&S.select(),setCustomValidity:D=>S.setCustomValidity(D),reportValidity:()=>S.reportValidity()})},[s._fields,r]),R=q.useMemo(()=>({name:r,value:m,...Gn(t)||v.disabled?{disabled:v.disabled||t}:{},onChange:x,onBlur:A,ref:_}),[r,t,v.disabled,x,A,_,m]);return q.useEffect(()=>{const S=s._options.shouldUnregister||l;s.register(r,{...b.current.rules,...Gn(b.current.disabled)?{disabled:b.current.disabled}:{}});const P=(D,I)=>{const H=ue(s._fields,D);H&&H._f&&(H._f.mount=I)};if(P(r,!0),S){const D=gn(ue(s._options.defaultValues,r));$e(s._defaultValues,r,D),an(ue(s._formValues,r))&&$e(s._formValues,r,D)}return!f&&s.register(r),()=>{(f?S&&!s._state.action:S)?s.unregister(r):P(r,!1)}},[r,s,f,l]),q.useEffect(()=>{s._setDisabledField({disabled:t,name:r})},[t,r,s]),q.useMemo(()=>({field:R,formState:v,fieldState:k}),[R,v,k])}var zE=(e,i,r,t,s)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:s||!0}}:{},Ea=e=>Array.isArray(e)?e:[e],dg=()=>{let e=[];return{get observers(){return e},next:s=>{for(const l of e)l.next&&l.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(l=>l!==s)}}),unsubscribe:()=>{e=[]}}},Bn=e=>sn(e)&&!Object.keys(e).length,Ul=e=>e.type==="file",gr=e=>typeof e=="function",ns=e=>{if(!Dl)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},Kc=e=>e.type==="select-multiple",$l=e=>e.type==="radio",XE=e=>$l(e)||La(e),Go=e=>ns(e)&&e.isConnected;function ZE(e,i){const r=i.slice(0,-1).length;let t=0;for(;t<r;)e=an(e)?t++:e[i[t++]];return e}function JE(e){for(const i in e)if(e.hasOwnProperty(i)&&!an(e[i]))return!1;return!0}function ln(e,i){const r=Array.isArray(i)?i:fs(i)?[i]:Vl(i),t=r.length===1?e:ZE(e,r),s=r.length-1,l=r[s];return t&&delete t[l],s!==0&&(sn(t)&&Bn(t)||Array.isArray(t)&&JE(t))&&ln(e,r.slice(0,-1)),e}var Yc=e=>{for(const i in e)if(gr(e[i]))return!0;return!1};function rs(e,i={}){const r=Array.isArray(e);if(sn(e)||r)for(const t in e)Array.isArray(e[t])||sn(e[t])&&!Yc(e[t])?(i[t]=Array.isArray(e[t])?[]:{},rs(e[t],i[t])):Rn(e[t])||(i[t]=!0);return i}function Wc(e,i,r){const t=Array.isArray(e);if(sn(e)||t)for(const s in e)Array.isArray(e[s])||sn(e[s])&&!Yc(e[s])?an(i)||il(r[s])?r[s]=Array.isArray(e[s])?rs(e[s],[]):{...rs(e[s])}:Wc(e[s],Rn(i)?{}:i[s],r[s]):r[s]=!Dr(e[s],i[s]);return r}var pa=(e,i)=>Wc(e,i,rs(i));const fg={value:!1,isValid:!1},gg={value:!0,isValid:!0};var zc=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!an(e[0].attributes.value)?an(e[0].value)||e[0].value===""?gg:{value:e[0].value,isValid:!0}:gg:fg}return fg},Xc=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:t})=>an(e)?e:i?e===""?NaN:e&&+e:r&&Tr(e)?new Date(e):t?t(e):e;const cg={isValid:!1,value:null};var Zc=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,cg):cg;function mg(e){const i=e.ref;return Ul(i)?i.files:$l(i)?Zc(e.refs).value:Kc(i)?[...i.selectedOptions].map(({value:r})=>r):La(i)?zc(e.refs).value:Xc(an(i.value)?e.ref.value:i.value,e)}var QE=(e,i,r,t)=>{const s={};for(const l of e){const u=ue(i,l);u&&$e(s,l,u._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:t}},ts=e=>e instanceof RegExp,ba=e=>an(e)?e:ts(e)?e.source:sn(e)?ts(e.value)?e.value.source:e.value:e,vg=e=>({isOnSubmit:!e||e===fr.onSubmit,isOnBlur:e===fr.onBlur,isOnChange:e===fr.onChange,isOnAll:e===fr.all,isOnTouch:e===fr.onTouched});const hg="AsyncFunction";var ew=e=>!!e&&!!e.validate&&!!(gr(e.validate)&&e.validate.constructor.name===hg||sn(e.validate)&&Object.values(e.validate).find(i=>i.constructor.name===hg)),nw=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),pg=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const wa=(e,i,r,t)=>{for(const s of r||Object.keys(e)){const l=ue(e,s);if(l){const{_f:u,...f}=l;if(u){if(u.refs&&u.refs[0]&&i(u.refs[0],s)&&!t)return!0;if(u.ref&&i(u.ref,u.name)&&!t)return!0;if(wa(f,i))break}else if(sn(f)&&wa(f,i))break}}};function bg(e,i,r){const t=ue(e,r);if(t||fs(r))return{error:t,name:r};const s=r.split(".");for(;s.length;){const l=s.join("."),u=ue(i,l),f=ue(e,l);if(u&&!Array.isArray(u)&&r!==l)return{name:r};if(f&&f.type)return{name:l,error:f};if(f&&f.root&&f.root.type)return{name:`${l}.root`,error:f.root};s.pop()}return{name:r}}var rw=(e,i,r,t)=>{r(e);const{name:s,...l}=e;return Bn(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(u=>i[u]===(!t||fr.all))},tw=(e,i,r)=>!e||!i||e===i||Ea(e).some(t=>t&&(r?t===i:t.startsWith(i)||i.startsWith(t))),aw=(e,i,r,t,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(i||e):(r?t.isOnBlur:s.isOnBlur)?!e:(r?t.isOnChange:s.isOnChange)?e:!0,iw=(e,i)=>!Cl(ue(e,i)).length&&ln(e,i),sw=(e,i,r)=>{const t=Ea(ue(e,r));return $e(t,"root",i[r]),$e(e,r,t),e},$i=e=>Tr(e);function yg(e,i,r="validate"){if($i(e)||Array.isArray(e)&&e.every($i)||Gn(e)&&!e)return{type:r,message:$i(e)?e:"",ref:i}}var Dt=e=>sn(e)&&!ts(e)?e:{value:e,message:""},kg=async(e,i,r,t,s,l)=>{const{ref:u,refs:f,required:c,maxLength:m,minLength:v,min:b,max:y,pattern:k,validate:x,name:A,valueAsNumber:_,mount:R}=e._f,S=ue(r,A);if(!R||i.has(A))return{};const P=f?f[0]:u,D=G=>{s&&P.reportValidity&&(P.setCustomValidity(Gn(G)?"":G||""),P.reportValidity())},I={},H=$l(u),j=La(u),C=H||j,K=(_||Ul(u))&&an(u.value)&&an(S)||ns(u)&&u.value===""||S===""||Array.isArray(S)&&!S.length,ne=zE.bind(null,A,t,I),ee=(G,F,L,X=Lr.maxLength,re=Lr.minLength)=>{const Z=G?F:L;I[A]={type:G?X:re,message:Z,ref:u,...ne(G?X:re,Z)}};if(l?!Array.isArray(S)||!S.length:c&&(!C&&(K||Rn(S))||Gn(S)&&!S||j&&!zc(f).isValid||H&&!Zc(f).isValid)){const{value:G,message:F}=$i(c)?{value:!!c,message:c}:Dt(c);if(G&&(I[A]={type:Lr.required,message:F,ref:P,...ne(Lr.required,F)},!t))return D(F),I}if(!K&&(!Rn(b)||!Rn(y))){let G,F;const L=Dt(y),X=Dt(b);if(!Rn(S)&&!isNaN(S)){const re=u.valueAsNumber||S&&+S;Rn(L.value)||(G=re>L.value),Rn(X.value)||(F=re<X.value)}else{const re=u.valueAsDate||new Date(S),Z=de=>new Date(new Date().toDateString()+" "+de),W=u.type=="time",J=u.type=="week";Tr(L.value)&&S&&(G=W?Z(S)>Z(L.value):J?S>L.value:re>new Date(L.value)),Tr(X.value)&&S&&(F=W?Z(S)<Z(X.value):J?S<X.value:re<new Date(X.value))}if((G||F)&&(ee(!!G,L.message,X.message,Lr.max,Lr.min),!t))return D(I[A].message),I}if((m||v)&&!K&&(Tr(S)||l&&Array.isArray(S))){const G=Dt(m),F=Dt(v),L=!Rn(G.value)&&S.length>+G.value,X=!Rn(F.value)&&S.length<+F.value;if((L||X)&&(ee(L,G.message,F.message),!t))return D(I[A].message),I}if(k&&!K&&Tr(S)){const{value:G,message:F}=Dt(k);if(ts(G)&&!S.match(G)&&(I[A]={type:Lr.pattern,message:F,ref:u,...ne(Lr.pattern,F)},!t))return D(F),I}if(x){if(gr(x)){const G=await x(S,r),F=yg(G,P);if(F&&(I[A]={...F,...ne(Lr.validate,F.message)},!t))return D(F.message),I}else if(sn(x)){let G={};for(const F in x){if(!Bn(G)&&!t)break;const L=yg(await x[F](S,r),P,F);L&&(G={...L,...ne(F,L.message)},D(L.message),t&&(I[A]=G))}if(!Bn(G)&&(I[A]={ref:P,...G},!t))return I}}return D(!0),I};const ow={mode:fr.onSubmit,reValidateMode:fr.onChange,shouldFocusError:!0};function lw(e={}){let i={...ow,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:gr(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:i.errors||{},disabled:i.disabled||!1},t={},s=sn(i.defaultValues)||sn(i.values)?gn(i.defaultValues||i.values)||{}:{},l=i.shouldUnregister?{}:gn(s),u={action:!1,mount:!1,watch:!1},f={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,m=0;const v={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let b={...v};const y={array:dg(),state:dg()},k=i.criteriaMode===fr.all,x=w=>M=>{clearTimeout(m),m=setTimeout(w,M)},A=async w=>{if(!i.disabled&&(v.isValid||b.isValid||w)){const M=i.resolver?Bn((await j()).errors):await K(t,!0);M!==r.isValid&&y.state.next({isValid:M})}},_=(w,M)=>{!i.disabled&&(v.isValidating||v.validatingFields||b.isValidating||b.validatingFields)&&((w||Array.from(f.mount)).forEach(U=>{U&&(M?$e(r.validatingFields,U,M):ln(r.validatingFields,U))}),y.state.next({validatingFields:r.validatingFields,isValidating:!Bn(r.validatingFields)}))},R=(w,M=[],U,oe,ae=!0,te=!0)=>{if(oe&&U&&!i.disabled){if(u.action=!0,te&&Array.isArray(ue(t,w))){const me=U(ue(t,w),oe.argA,oe.argB);ae&&$e(t,w,me)}if(te&&Array.isArray(ue(r.errors,w))){const me=U(ue(r.errors,w),oe.argA,oe.argB);ae&&$e(r.errors,w,me),iw(r.errors,w)}if((v.touchedFields||b.touchedFields)&&te&&Array.isArray(ue(r.touchedFields,w))){const me=U(ue(r.touchedFields,w),oe.argA,oe.argB);ae&&$e(r.touchedFields,w,me)}(v.dirtyFields||b.dirtyFields)&&(r.dirtyFields=pa(s,l)),y.state.next({name:w,isDirty:ee(w,M),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else $e(l,w,M)},S=(w,M)=>{$e(r.errors,w,M),y.state.next({errors:r.errors})},P=w=>{r.errors=w,y.state.next({errors:r.errors,isValid:!1})},D=(w,M,U,oe)=>{const ae=ue(t,w);if(ae){const te=ue(l,w,an(U)?ue(s,w):U);an(te)||oe&&oe.defaultChecked||M?$e(l,w,M?te:mg(ae._f)):L(w,te),u.mount&&A()}},I=(w,M,U,oe,ae)=>{let te=!1,me=!1;const Se={name:w};if(!i.disabled){if(!U||oe){(v.isDirty||b.isDirty)&&(me=r.isDirty,r.isDirty=Se.isDirty=ee(),te=me!==Se.isDirty);const Be=Dr(ue(s,w),M);me=!!ue(r.dirtyFields,w),Be?ln(r.dirtyFields,w):$e(r.dirtyFields,w,!0),Se.dirtyFields=r.dirtyFields,te=te||(v.dirtyFields||b.dirtyFields)&&me!==!Be}if(U){const Be=ue(r.touchedFields,w);Be||($e(r.touchedFields,w,U),Se.touchedFields=r.touchedFields,te=te||(v.touchedFields||b.touchedFields)&&Be!==U)}te&&ae&&y.state.next(Se)}return te?Se:{}},H=(w,M,U,oe)=>{const ae=ue(r.errors,w),te=(v.isValid||b.isValid)&&Gn(M)&&r.isValid!==M;if(i.delayError&&U?(c=x(()=>S(w,U)),c(i.delayError)):(clearTimeout(m),c=null,U?$e(r.errors,w,U):ln(r.errors,w)),(U?!Dr(ae,U):ae)||!Bn(oe)||te){const me={...oe,...te&&Gn(M)?{isValid:M}:{},errors:r.errors,name:w};r={...r,...me},y.state.next(me)}},j=async w=>{_(w,!0);const M=await i.resolver(l,i.context,QE(w||f.mount,t,i.criteriaMode,i.shouldUseNativeValidation));return _(w),M},C=async w=>{const{errors:M}=await j(w);if(w)for(const U of w){const oe=ue(M,U);oe?$e(r.errors,U,oe):ln(r.errors,U)}else r.errors=M;return M},K=async(w,M,U={valid:!0})=>{for(const oe in w){const ae=w[oe];if(ae){const{_f:te,...me}=ae;if(te){const Se=f.array.has(te.name),Be=ae._f&&ew(ae._f);Be&&v.validatingFields&&_([oe],!0);const pn=await kg(ae,f.disabled,l,k,i.shouldUseNativeValidation&&!M,Se);if(Be&&v.validatingFields&&_([oe]),pn[te.name]&&(U.valid=!1,M))break;!M&&(ue(pn,te.name)?Se?sw(r.errors,pn,te.name):$e(r.errors,te.name,pn[te.name]):ln(r.errors,te.name))}!Bn(me)&&await K(me,M,U)}}return U.valid},ne=()=>{for(const w of f.unMount){const M=ue(t,w);M&&(M._f.refs?M._f.refs.every(U=>!Go(U)):!Go(M._f.ref))&&He(w)}f.unMount=new Set},ee=(w,M)=>!i.disabled&&(w&&M&&$e(l,w,M),!Dr(de(),s)),G=(w,M,U)=>Uc(w,f,{...u.mount?l:an(M)?s:Tr(w)?{[w]:M}:M},U,M),F=w=>Cl(ue(u.mount?l:s,w,i.shouldUnregister?ue(s,w,[]):[])),L=(w,M,U={})=>{const oe=ue(t,w);let ae=M;if(oe){const te=oe._f;te&&(!te.disabled&&$e(l,w,Xc(M,te)),ae=ns(te.ref)&&Rn(M)?"":M,Kc(te.ref)?[...te.ref.options].forEach(me=>me.selected=ae.includes(me.value)):te.refs?La(te.ref)?te.refs.forEach(me=>{(!me.defaultChecked||!me.disabled)&&(Array.isArray(ae)?me.checked=!!ae.find(Se=>Se===me.value):me.checked=ae===me.value||!!ae)}):te.refs.forEach(me=>me.checked=me.value===ae):Ul(te.ref)?te.ref.value="":(te.ref.value=ae,te.ref.type||y.state.next({name:w,values:gn(l)})))}(U.shouldDirty||U.shouldTouch)&&I(w,ae,U.shouldTouch,U.shouldDirty,!0),U.shouldValidate&&J(w)},X=(w,M,U)=>{for(const oe in M){if(!M.hasOwnProperty(oe))return;const ae=M[oe],te=w+"."+oe,me=ue(t,te);(f.array.has(w)||sn(ae)||me&&!me._f)&&!vt(ae)?X(te,ae,U):L(te,ae,U)}},re=(w,M,U={})=>{const oe=ue(t,w),ae=f.array.has(w),te=gn(M);$e(l,w,te),ae?(y.array.next({name:w,values:gn(l)}),(v.isDirty||v.dirtyFields||b.isDirty||b.dirtyFields)&&U.shouldDirty&&y.state.next({name:w,dirtyFields:pa(s,l),isDirty:ee(w,te)})):oe&&!oe._f&&!Rn(te)?X(w,te,U):L(w,te,U),pg(w,f)&&y.state.next({...r,name:w}),y.state.next({name:u.mount?w:void 0,values:gn(l)})},Z=async w=>{u.mount=!0;const M=w.target;let U=M.name,oe=!0;const ae=ue(t,U),te=Be=>{oe=Number.isNaN(Be)||vt(Be)&&isNaN(Be.getTime())||Dr(Be,ue(l,U,Be))},me=vg(i.mode),Se=vg(i.reValidateMode);if(ae){let Be,pn;const Ur=M.type?mg(ae._f):Vc(w),Kn=w.type===es.BLUR||w.type===es.FOCUS_OUT,Xt=!nw(ae._f)&&!i.resolver&&!ue(r.errors,U)&&!ae._f.deps||aw(Kn,ue(r.touchedFields,U),r.isSubmitted,Se,me),rt=pg(U,f,Kn);$e(l,U,Ur),Kn?(!M||!M.readOnly)&&(ae._f.onBlur&&ae._f.onBlur(w),c&&c(0)):ae._f.onChange&&ae._f.onChange(w);const tt=I(U,Ur,Kn),Zt=!Bn(tt)||rt;if(!Kn&&y.state.next({name:U,type:w.type,values:gn(l)}),Xt)return(v.isValid||b.isValid)&&(i.mode==="onBlur"?Kn&&A():Kn||A()),Zt&&y.state.next({name:U,...rt?{}:tt});if(!Kn&&rt&&y.state.next({...r}),i.resolver){const{errors:Et}=await j([U]);if(te(Ur),oe){const Jt=bg(r.errors,t,U),Ua=bg(Et,t,Jt.name||U);Be=Ua.error,U=Ua.name,pn=Bn(Et)}}else _([U],!0),Be=(await kg(ae,f.disabled,l,k,i.shouldUseNativeValidation))[U],_([U]),te(Ur),oe&&(Be?pn=!1:(v.isValid||b.isValid)&&(pn=await K(t,!0)));oe&&(ae._f.deps&&J(ae._f.deps),H(U,pn,Be,tt))}},W=(w,M)=>{if(ue(r.errors,M)&&w.focus)return w.focus(),1},J=async(w,M={})=>{let U,oe;const ae=Ea(w);if(i.resolver){const te=await C(an(w)?w:ae);U=Bn(te),oe=w?!ae.some(me=>ue(te,me)):U}else w?(oe=(await Promise.all(ae.map(async te=>{const me=ue(t,te);return await K(me&&me._f?{[te]:me}:me)}))).every(Boolean),!(!oe&&!r.isValid)&&A()):oe=U=await K(t);return y.state.next({...!Tr(w)||(v.isValid||b.isValid)&&U!==r.isValid?{}:{name:w},...i.resolver||!w?{isValid:U}:{},errors:r.errors}),M.shouldFocus&&!oe&&wa(t,W,w?ae:f.mount),oe},de=w=>{const M={...u.mount?l:s};return an(w)?M:Tr(w)?ue(M,w):w.map(U=>ue(M,U))},le=(w,M)=>({invalid:!!ue((M||r).errors,w),isDirty:!!ue((M||r).dirtyFields,w),error:ue((M||r).errors,w),isValidating:!!ue(r.validatingFields,w),isTouched:!!ue((M||r).touchedFields,w)}),ve=w=>{w&&Ea(w).forEach(M=>ln(r.errors,M)),y.state.next({errors:w?r.errors:{}})},_e=(w,M,U)=>{const oe=(ue(t,w,{_f:{}})._f||{}).ref,ae=ue(r.errors,w)||{},{ref:te,message:me,type:Se,...Be}=ae;$e(r.errors,w,{...Be,...M,ref:oe}),y.state.next({name:w,errors:r.errors,isValid:!1}),U&&U.shouldFocus&&oe&&oe.focus&&oe.focus()},_n=(w,M)=>gr(w)?y.state.subscribe({next:U=>"values"in U&&w(G(void 0,M),U)}):G(w,M,!0),Ye=w=>y.state.subscribe({next:M=>{tw(w.name,M.name,w.exact)&&rw(M,w.formState||v,un,w.reRenderRoot)&&w.callback({values:{...l},...r,...M,defaultValues:s})}}).unsubscribe,Ve=w=>(u.mount=!0,b={...b,...w.formState},Ye({...w,formState:b})),He=(w,M={})=>{for(const U of w?Ea(w):f.mount)f.mount.delete(U),f.array.delete(U),M.keepValue||(ln(t,U),ln(l,U)),!M.keepError&&ln(r.errors,U),!M.keepDirty&&ln(r.dirtyFields,U),!M.keepTouched&&ln(r.touchedFields,U),!M.keepIsValidating&&ln(r.validatingFields,U),!i.shouldUnregister&&!M.keepDefaultValue&&ln(s,U);y.state.next({values:gn(l)}),y.state.next({...r,...M.keepDirty?{isDirty:ee()}:{}}),!M.keepIsValid&&A()},Ee=({disabled:w,name:M})=>{(Gn(w)&&u.mount||w||f.disabled.has(M))&&(w?f.disabled.add(M):f.disabled.delete(M))},Ne=(w,M={})=>{let U=ue(t,w);const oe=Gn(M.disabled)||Gn(i.disabled);return $e(t,w,{...U||{},_f:{...U&&U._f?U._f:{ref:{name:w}},name:w,mount:!0,...M}}),f.mount.add(w),U?Ee({disabled:Gn(M.disabled)?M.disabled:i.disabled,name:w}):D(w,!0,M.value),{...oe?{disabled:M.disabled||i.disabled}:{},...i.progressive?{required:!!M.required,min:ba(M.min),max:ba(M.max),minLength:ba(M.minLength),maxLength:ba(M.maxLength),pattern:ba(M.pattern)}:{},name:w,onChange:Z,onBlur:Z,ref:ae=>{if(ae){Ne(w,M),U=ue(t,w);const te=an(ae.value)&&ae.querySelectorAll&&ae.querySelectorAll("input,select,textarea")[0]||ae,me=XE(te),Se=U._f.refs||[];if(me?Se.find(Be=>Be===te):te===U._f.ref)return;$e(t,w,{_f:{...U._f,...me?{refs:[...Se.filter(Go),te,...Array.isArray(ue(s,w))?[{}]:[]],ref:{type:te.type,name:w}}:{ref:te}}}),D(w,!1,void 0,te)}else U=ue(t,w,{}),U._f&&(U._f.mount=!1),(i.shouldUnregister||M.shouldUnregister)&&!(Hc(f.array,w)&&u.action)&&f.unMount.add(w)}}},nn=()=>i.shouldFocusError&&wa(t,W,f.mount),Xe=w=>{Gn(w)&&(y.state.next({disabled:w}),wa(t,(M,U)=>{const oe=ue(t,U);oe&&(M.disabled=oe._f.disabled||w,Array.isArray(oe._f.refs)&&oe._f.refs.forEach(ae=>{ae.disabled=oe._f.disabled||w}))},0,!1))},Ze=(w,M)=>async U=>{let oe;U&&(U.preventDefault&&U.preventDefault(),U.persist&&U.persist());let ae=gn(l);if(y.state.next({isSubmitting:!0}),i.resolver){const{errors:te,values:me}=await j();r.errors=te,ae=gn(me)}else await K(t);if(f.disabled.size)for(const te of f.disabled)ln(ae,te);if(ln(r.errors,"root"),Bn(r.errors)){y.state.next({errors:{}});try{await w(ae,U)}catch(te){oe=te}}else M&&await M({...r.errors},U),nn(),setTimeout(nn);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Bn(r.errors)&&!oe,submitCount:r.submitCount+1,errors:r.errors}),oe)throw oe},Pn=(w,M={})=>{ue(t,w)&&(an(M.defaultValue)?re(w,gn(ue(s,w))):(re(w,M.defaultValue),$e(s,w,gn(M.defaultValue))),M.keepTouched||ln(r.touchedFields,w),M.keepDirty||(ln(r.dirtyFields,w),r.isDirty=M.defaultValue?ee(w,gn(ue(s,w))):ee()),M.keepError||(ln(r.errors,w),v.isValid&&A()),y.state.next({...r}))},Ge=(w,M={})=>{const U=w?gn(w):s,oe=gn(U),ae=Bn(w),te=ae?s:oe;if(M.keepDefaultValues||(s=U),!M.keepValues){if(M.keepDirtyValues){const me=new Set([...f.mount,...Object.keys(pa(s,l))]);for(const Se of Array.from(me))ue(r.dirtyFields,Se)?$e(te,Se,ue(l,Se)):re(Se,ue(te,Se))}else{if(Dl&&an(w))for(const me of f.mount){const Se=ue(t,me);if(Se&&Se._f){const Be=Array.isArray(Se._f.refs)?Se._f.refs[0]:Se._f.ref;if(ns(Be)){const pn=Be.closest("form");if(pn){pn.reset();break}}}}if(M.keepFieldsRef)for(const me of f.mount)re(me,ue(te,me));else t={}}l=i.shouldUnregister?M.keepDefaultValues?gn(s):{}:gn(te),y.array.next({values:{...te}}),y.state.next({values:{...te}})}f={mount:M.keepDirtyValues?f.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!v.isValid||!!M.keepIsValid||!!M.keepDirtyValues,u.watch=!!i.shouldUnregister,y.state.next({submitCount:M.keepSubmitCount?r.submitCount:0,isDirty:ae?!1:M.keepDirty?r.isDirty:!!(M.keepDefaultValues&&!Dr(w,s)),isSubmitted:M.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:ae?{}:M.keepDirtyValues?M.keepDefaultValues&&l?pa(s,l):r.dirtyFields:M.keepDefaultValues&&w?pa(s,w):M.keepDirty?r.dirtyFields:{},touchedFields:M.keepTouched?r.touchedFields:{},errors:M.keepErrors?r.errors:{},isSubmitSuccessful:M.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:s})},on=(w,M)=>Ge(gr(w)?w(l):w,M),ir=(w,M={})=>{const U=ue(t,w),oe=U&&U._f;if(oe){const ae=oe.refs?oe.refs[0]:oe.ref;ae.focus&&(ae.focus(),M.shouldSelect&&gr(ae.select)&&ae.select())}},un=w=>{r={...r,...w}},$n={control:{register:Ne,unregister:He,getFieldState:le,handleSubmit:Ze,setError:_e,_subscribe:Ye,_runSchema:j,_focusError:nn,_getWatch:G,_getDirty:ee,_setValid:A,_setFieldArray:R,_setDisabledField:Ee,_setErrors:P,_getFieldArray:F,_reset:Ge,_resetDefaultValues:()=>gr(i.defaultValues)&&i.defaultValues().then(w=>{on(w,i.resetOptions),y.state.next({isLoading:!1})}),_removeUnmounted:ne,_disableForm:Xe,_subjects:y,_proxyFormState:v,get _fields(){return t},get _formValues(){return l},get _state(){return u},set _state(w){u=w},get _defaultValues(){return s},get _names(){return f},set _names(w){f=w},get _formState(){return r},get _options(){return i},set _options(w){i={...i,...w}}},subscribe:Ve,trigger:J,register:Ne,handleSubmit:Ze,watch:_n,setValue:re,getValues:de,reset:on,resetField:Pn,clearErrors:ve,unregister:He,setError:_e,setFocus:ir,getFieldState:le};return{...$n,formControl:$n}}function uw(e={}){const i=q.useRef(void 0),r=q.useRef(void 0),[t,s]=q.useState({isDirty:!1,isValidating:!1,isLoading:gr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:gr(e.defaultValues)?void 0:e.defaultValues});if(!i.current)if(e.formControl)i.current={...e.formControl,formState:t},e.defaultValues&&!gr(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:u,...f}=lw(e);i.current={...f,formState:t}}const l=i.current.control;return l._options=e,Gl(()=>{const u=l._subscribe({formState:l._proxyFormState,callback:()=>s({...l._formState}),reRenderRoot:!0});return s(f=>({...f,isReady:!0})),l._formState.isReady=!0,u},[l]),q.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),q.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),q.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),q.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),q.useEffect(()=>{if(l._proxyFormState.isDirty){const u=l._getDirty();u!==t.isDirty&&l._subjects.state.next({isDirty:u})}},[l,t.isDirty]),q.useEffect(()=>{e.values&&!Dr(e.values,r.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),r.current=e.values,s(u=>({...u}))):l._resetDefaultValues()},[l,e.values]),q.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),i.current.formState=Gc(t,l),i.current}function dw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _g={exports:{}},ya={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function fw(){if(Ag)return ya;Ag=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:l}}return ya.Fragment=i,ya.jsx=r,ya.jsxs=r,ya}var Tg;function gw(){return Tg||(Tg=1,_g.exports=fw()),_g.exports}var kn=gw();const Jc=e=>e.reduce((i,r,t)=>({...i,[t]:s=>r(s)||!0}),{}),sl=(e,i)=>i.split(".").reduce((r,t)=>r!==void 0?r[t]:r,e)?.message,cw=({label:e,validate:i=[],readOnly:r=!1,onChange:t,onClick:s,className:l,...u})=>{const{name:f,control:c,disabled:m}=u,{formState:{errors:v}}=ja(),{field:b}=$c({name:f,control:c,rules:{validate:E.useMemo(()=>Jc(i),[i])}}),y=sl(v,f);return kn.jsxs(kn.Fragment,{children:[kn.jsx(rE,{size:"small",disabled:m||r,checked:b.value===!0,className:l,error:!!y,...b,onChange:k=>{b.onChange(k),t&&t(k.currentTarget.checked)},onClick:()=>{s&&s()},children:e}),y&&kn.jsx(as,{children:sl(v,f)})]})};var ol={exports:{}},mw=ol.exports,Eg;function vw(){return Eg||(Eg=1,function(e,i){(function(r,t){e.exports=t()})(mw,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,u=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,c={},m=function(_){return(_=+_)+(_>68?1900:2e3)},v=function(_){return function(R){this[_]=+R}},b=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var S=R.match(/([+-]|\d\d)/g),P=60*S[1]+(+S[2]||0);return P===0?0:S[0]==="+"?-P:P}(_)}],y=function(_){var R=c[_];return R&&(R.indexOf?R:R.s.concat(R.f))},k=function(_,R){var S,P=c.meridiem;if(P){for(var D=1;D<=24;D+=1)if(_.indexOf(P(D,0,R))>-1){S=D>12;break}}else S=_===(R?"pm":"PM");return S},x={A:[f,function(_){this.afternoon=k(_,!1)}],a:[f,function(_){this.afternoon=k(_,!0)}],Q:[s,function(_){this.month=3*(_-1)+1}],S:[s,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[u,v("seconds")],ss:[u,v("seconds")],m:[u,v("minutes")],mm:[u,v("minutes")],H:[u,v("hours")],h:[u,v("hours")],HH:[u,v("hours")],hh:[u,v("hours")],D:[u,v("day")],DD:[l,v("day")],Do:[f,function(_){var R=c.ordinal,S=_.match(/\d+/);if(this.day=S[0],R)for(var P=1;P<=31;P+=1)R(P).replace(/\[|\]/g,"")===_&&(this.day=P)}],w:[u,v("week")],ww:[l,v("week")],M:[u,v("month")],MM:[l,v("month")],MMM:[f,function(_){var R=y("months"),S=(y("monthsShort")||R.map(function(P){return P.slice(0,3)})).indexOf(_)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[f,function(_){var R=y("months").indexOf(_)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,v("year")],YY:[l,function(_){this.year=m(_)}],YYYY:[/\d{4}/,v("year")],Z:b,ZZ:b};function A(_){var R,S;R=_,S=c&&c.formats;for(var P=(_=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(ne,ee,G){var F=G&&G.toUpperCase();return ee||S[G]||r[G]||S[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,X,re){return X||re.slice(1)})})).match(t),D=P.length,I=0;I<D;I+=1){var H=P[I],j=x[H],C=j&&j[0],K=j&&j[1];P[I]=K?{regex:C,parser:K}:H.replace(/^\[|\]$/g,"")}return function(ne){for(var ee={},G=0,F=0;G<D;G+=1){var L=P[G];if(typeof L=="string")F+=L.length;else{var X=L.regex,re=L.parser,Z=ne.slice(F),W=X.exec(Z)[0];re.call(ee,W),ne=ne.replace(W,"")}}return function(J){var de=J.afternoon;if(de!==void 0){var le=J.hours;de?le<12&&(J.hours+=12):le===12&&(J.hours=0),delete J.afternoon}}(ee),ee}}return function(_,R,S){S.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(m=_.parseTwoDigitYear);var P=R.prototype,D=P.parse;P.parse=function(I){var H=I.date,j=I.utc,C=I.args;this.$u=j;var K=C[1];if(typeof K=="string"){var ne=C[2]===!0,ee=C[3]===!0,G=ne||ee,F=C[2];ee&&(F=C[2]),c=this.$locale(),!ne&&F&&(c=S.Ls[F]),this.$d=function(Z,W,J,de){try{if(["x","X"].indexOf(W)>-1)return new Date((W==="X"?1e3:1)*Z);var le=A(W)(Z),ve=le.year,_e=le.month,_n=le.day,Ye=le.hours,Ve=le.minutes,He=le.seconds,Ee=le.milliseconds,Ne=le.zone,nn=le.week,Xe=new Date,Ze=_n||(ve||_e?1:Xe.getDate()),Pn=ve||Xe.getFullYear(),Ge=0;ve&&!_e||(Ge=_e>0?_e-1:Xe.getMonth());var on,ir=Ye||0,un=Ve||0,sr=He||0,$n=Ee||0;return Ne?new Date(Date.UTC(Pn,Ge,Ze,ir,un,sr,$n+60*Ne.offset*1e3)):J?new Date(Date.UTC(Pn,Ge,Ze,ir,un,sr,$n)):(on=new Date(Pn,Ge,Ze,ir,un,sr,$n),nn&&(on=de(on).week(nn).toDate()),on)}catch{return new Date("")}}(H,K,j,S),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),G&&H!=this.format(K)&&(this.$d=new Date("")),c={}}else if(K instanceof Array)for(var L=K.length,X=1;X<=L;X+=1){C[1]=K[X-1];var re=S.apply(this,C);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}X===L&&(this.$d=new Date(""))}else D.call(this,I)}}})}(ol)),ol.exports}var hw=vw();const pw=dw(hw),bw="_textarea_14c7r_1",yw="_readOnlyField_14c7r_7",wg={textarea:bw,readOnlyField:yw},kw=e=>e!=null&&e!=="",_w=({label:e,value:i,isEdited:r=!1,type:t,hideLabel:s,size:l})=>kw(i)?kn.jsxs(_t,{gap:"space-4",children:[e&&!s&&kn.jsx(bt,{size:l,children:e}),kn.jsxs(Ll,{gap:"space-8",align:"center",wrap:!1,children:[kn.jsx(Rl,{className:t==="textarea"?wg.textarea:wg.readOnlyField,size:l,children:i}),r&&kn.jsx(xE,{})]})]}):null;Hr.extend(pw);const Aw="_textAreaFieldWithBadges_bdz0b_1",Tw="_etikettWrapper_bdz0b_4",Rg={textAreaFieldWithBadges:Aw,etikettWrapper:Tw},Ew=({name:e,control:i,label:r,readOnly:t,maxLength:s,badges:l,validate:u=[],parse:f=k=>k,className:c,description:m,isEdited:v,size:b="small",...y})=>{const{formState:{errors:k}}=ja(),{field:x}=$c({name:e,control:i,rules:{validate:E.useMemo(()=>Jc(u),[u])}});return t?kn.jsx(_w,{size:b,label:r,value:x.value,type:"textarea",isEdited:v,hideLabel:y.hideLabel}):kn.jsxs("div",{className:l?Rg.textAreaFieldWithBadges:null,children:[l&&kn.jsx("div",{className:Rg.etikettWrapper,children:l.map(({type:A,titleText:_})=>kn.jsx(KT,{variant:A,size:"small",children:_},_))}),kn.jsx(dE,{size:b,label:r,description:m,className:c,autoComplete:"off",...x,onChange:A=>x.onChange(A.currentTarget.value!==""?f(A.currentTarget.value):null),value:x.value?x.value:"",error:sl(k,e),maxLength:s,...y})]})},ww=({formMethods:e,onSubmit:i,children:r,className:t,setDataOnUnmount:s})=>{const{handleSubmit:l,getValues:u}=e;return E.useEffect(()=>()=>{s&&s(u())},[]),kn.jsx(KE,{...e,children:kn.jsx("form",{className:t,onSubmit:i?l(f=>i(f)):void 0,children:r})})},Da={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"},Uo=vr(Da),Rw=c_(3),Pw=m_(1500),Ca=({control:e,isReadOnly:i,isSubmittable:r,hasBegrunnelse:t,label:s,hasReadOnlyLabel:l=!1,hasVurderingText:u=!1,size:f})=>{const c=u?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",m=()=>i?l?Uo.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":s??Uo.formatMessage({id:c});return ie.jsx(wl,{value:Uo,children:(r||t)&&ie.jsx(Ew,{name:"begrunnelse",control:e,label:m(),validate:[g_,Rw,Pw,v_],maxLength:1500,readOnly:i,size:f})})},Ow=e=>e&&Array.isArray(e)?e[0]?.begrunnelse??"":e&&!Array.isArray(e)&&e.begrunnelse?e.begrunnelse:"";Ca.initialValues=e=>({begrunnelse:h_(Ow(e)??void 0)});Ca.transformValues=e=>({begrunnelse:E_(e.begrunnelse)});Ca.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}]}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},alias:"FaktaBegrunnelseFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""}}};const Sw=vr(Da),Iw=(e,i,r)=>!r||i?!0:!e,Qc=({isReadOnly:e,isSubmittable:i,buttonText:r,onClick:t,isSubmitting:s,isDirty:l})=>ie.jsx(wl,{value:Sw,children:!e&&ie.jsx("div",{children:ie.jsxs(us,{size:"small",variant:"primary",loading:s,disabled:Iw(l,s,i),onClick:t||p_,type:t?"button":"submit",children:[!!r&&r,!r&&ie.jsx(Mn,{id:"SubmitButton.ConfirmInformation"})]})})});Qc.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};vr(Da);var Ta={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var xw=Ta.exports,Pg;function Nw(){return Pg||(Pg=1,function(e,i){(function(){var r,t="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",f="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,v="__lodash_placeholder__",b=1,y=2,k=4,x=1,A=2,_=1,R=2,S=4,P=8,D=16,I=32,H=64,j=128,C=256,K=512,ne=30,ee="...",G=800,F=16,L=1,X=2,re=3,Z=1/0,W=9007199254740991,J=17976931348623157e292,de=NaN,le=4294967295,ve=le-1,_e=le>>>1,_n=[["ary",j],["bind",_],["bindKey",R],["curry",P],["curryRight",D],["flip",K],["partial",I],["partialRight",H],["rearg",C]],Ye="[object Arguments]",Ve="[object Array]",He="[object AsyncFunction]",Ee="[object Boolean]",Ne="[object Date]",nn="[object DOMException]",Xe="[object Error]",Ze="[object Function]",Pn="[object GeneratorFunction]",Ge="[object Map]",on="[object Number]",ir="[object Null]",un="[object Object]",sr="[object Promise]",$n="[object Proxy]",w="[object RegExp]",M="[object Set]",U="[object String]",oe="[object Symbol]",ae="[object Undefined]",te="[object WeakMap]",me="[object WeakSet]",Se="[object ArrayBuffer]",Be="[object DataView]",pn="[object Float32Array]",Ur="[object Float64Array]",Kn="[object Int8Array]",Xt="[object Int16Array]",rt="[object Int32Array]",tt="[object Uint8Array]",Zt="[object Uint8ClampedArray]",Et="[object Uint16Array]",Jt="[object Uint32Array]",Ua=/\b__p \+= '';/g,Om=/\b(__p \+=) '' \+/g,Sm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Xl=/&(?:amp|lt|gt|quot|#39);/g,Zl=/[&<>"']/g,Im=RegExp(Xl.source),xm=RegExp(Zl.source),Nm=/<%-([\s\S]+?)%>/g,qm=/<%([\s\S]+?)%>/g,Jl=/<%=([\s\S]+?)%>/g,Bm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Mm=/^\w*$/,Fm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,hs=/[\\^$.*+?()[\]{}|]/g,Lm=RegExp(hs.source),ps=/^\s+/,jm=/\s/,Dm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Cm=/\{\n\/\* \[wrapped with (.+)\] \*/,Vm=/,? & /,Hm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Gm=/[()=,{}\[\]\/\s]/,Um=/\\(\\)?/g,$m=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ql=/\w*$/,Km=/^[-+]0x[0-9a-f]+$/i,Ym=/^0b[01]+$/i,Wm=/^\[object .+?Constructor\]$/,zm=/^0o[0-7]+$/i,Xm=/^(?:0|[1-9]\d*)$/,Zm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,$a=/($^)/,Jm=/['\n\r\u2028\u2029\\]/g,Ka="\\ud800-\\udfff",Qm="\\u0300-\\u036f",ev="\\ufe20-\\ufe2f",nv="\\u20d0-\\u20ff",eu=Qm+ev+nv,nu="\\u2700-\\u27bf",ru="a-z\\xdf-\\xf6\\xf8-\\xff",rv="\\xac\\xb1\\xd7\\xf7",tv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",av="\\u2000-\\u206f",iv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tu="A-Z\\xc0-\\xd6\\xd8-\\xde",au="\\ufe0e\\ufe0f",iu=rv+tv+av+iv,bs="['’]",sv="["+Ka+"]",su="["+iu+"]",Ya="["+eu+"]",ou="\\d+",ov="["+nu+"]",lu="["+ru+"]",uu="[^"+Ka+iu+ou+nu+ru+tu+"]",ys="\\ud83c[\\udffb-\\udfff]",lv="(?:"+Ya+"|"+ys+")",du="[^"+Ka+"]",ks="(?:\\ud83c[\\udde6-\\uddff]){2}",_s="[\\ud800-\\udbff][\\udc00-\\udfff]",wt="["+tu+"]",fu="\\u200d",gu="(?:"+lu+"|"+uu+")",uv="(?:"+wt+"|"+uu+")",cu="(?:"+bs+"(?:d|ll|m|re|s|t|ve))?",mu="(?:"+bs+"(?:D|LL|M|RE|S|T|VE))?",vu=lv+"?",hu="["+au+"]?",dv="(?:"+fu+"(?:"+[du,ks,_s].join("|")+")"+hu+vu+")*",fv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",gv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",pu=hu+vu+dv,cv="(?:"+[ov,ks,_s].join("|")+")"+pu,mv="(?:"+[du+Ya+"?",Ya,ks,_s,sv].join("|")+")",vv=RegExp(bs,"g"),hv=RegExp(Ya,"g"),As=RegExp(ys+"(?="+ys+")|"+mv+pu,"g"),pv=RegExp([wt+"?"+lu+"+"+cu+"(?="+[su,wt,"$"].join("|")+")",uv+"+"+mu+"(?="+[su,wt+gu,"$"].join("|")+")",wt+"?"+gu+"+"+cu,wt+"+"+mu,gv,fv,ou,cv].join("|"),"g"),bv=RegExp("["+fu+Ka+eu+au+"]"),yv=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,kv=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],_v=-1,We={};We[pn]=We[Ur]=We[Kn]=We[Xt]=We[rt]=We[tt]=We[Zt]=We[Et]=We[Jt]=!0,We[Ye]=We[Ve]=We[Se]=We[Ee]=We[Be]=We[Ne]=We[Xe]=We[Ze]=We[Ge]=We[on]=We[un]=We[w]=We[M]=We[U]=We[te]=!1;var Ue={};Ue[Ye]=Ue[Ve]=Ue[Se]=Ue[Be]=Ue[Ee]=Ue[Ne]=Ue[pn]=Ue[Ur]=Ue[Kn]=Ue[Xt]=Ue[rt]=Ue[Ge]=Ue[on]=Ue[un]=Ue[w]=Ue[M]=Ue[U]=Ue[oe]=Ue[tt]=Ue[Zt]=Ue[Et]=Ue[Jt]=!0,Ue[Xe]=Ue[Ze]=Ue[te]=!1;var Av={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Tv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ev={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},wv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Rv=parseFloat,Pv=parseInt,bu=typeof qi=="object"&&qi&&qi.Object===Object&&qi,Ov=typeof self=="object"&&self&&self.Object===Object&&self,mn=bu||Ov||Function("return this")(),Ts=i&&!i.nodeType&&i,at=Ts&&!0&&e&&!e.nodeType&&e,yu=at&&at.exports===Ts,Es=yu&&bu.process,Yn=function(){try{var N=at&&at.require&&at.require("util").types;return N||Es&&Es.binding&&Es.binding("util")}catch{}}(),ku=Yn&&Yn.isArrayBuffer,_u=Yn&&Yn.isDate,Au=Yn&&Yn.isMap,Tu=Yn&&Yn.isRegExp,Eu=Yn&&Yn.isSet,wu=Yn&&Yn.isTypedArray;function Ln(N,$,V){switch(V.length){case 0:return N.call($);case 1:return N.call($,V[0]);case 2:return N.call($,V[0],V[1]);case 3:return N.call($,V[0],V[1],V[2])}return N.apply($,V)}function Sv(N,$,V,fe){for(var ye=-1,Me=N==null?0:N.length;++ye<Me;){var dn=N[ye];$(fe,dn,V(dn),N)}return fe}function Wn(N,$){for(var V=-1,fe=N==null?0:N.length;++V<fe&&$(N[V],V,N)!==!1;);return N}function Iv(N,$){for(var V=N==null?0:N.length;V--&&$(N[V],V,N)!==!1;);return N}function Ru(N,$){for(var V=-1,fe=N==null?0:N.length;++V<fe;)if(!$(N[V],V,N))return!1;return!0}function $r(N,$){for(var V=-1,fe=N==null?0:N.length,ye=0,Me=[];++V<fe;){var dn=N[V];$(dn,V,N)&&(Me[ye++]=dn)}return Me}function Wa(N,$){var V=N==null?0:N.length;return!!V&&Rt(N,$,0)>-1}function ws(N,$,V){for(var fe=-1,ye=N==null?0:N.length;++fe<ye;)if(V($,N[fe]))return!0;return!1}function Je(N,$){for(var V=-1,fe=N==null?0:N.length,ye=Array(fe);++V<fe;)ye[V]=$(N[V],V,N);return ye}function Kr(N,$){for(var V=-1,fe=$.length,ye=N.length;++V<fe;)N[ye+V]=$[V];return N}function Rs(N,$,V,fe){var ye=-1,Me=N==null?0:N.length;for(fe&&Me&&(V=N[++ye]);++ye<Me;)V=$(V,N[ye],ye,N);return V}function xv(N,$,V,fe){var ye=N==null?0:N.length;for(fe&&ye&&(V=N[--ye]);ye--;)V=$(V,N[ye],ye,N);return V}function Ps(N,$){for(var V=-1,fe=N==null?0:N.length;++V<fe;)if($(N[V],V,N))return!0;return!1}var Nv=Os("length");function qv(N){return N.split("")}function Bv(N){return N.match(Hm)||[]}function Pu(N,$,V){var fe;return V(N,function(ye,Me,dn){if($(ye,Me,dn))return fe=Me,!1}),fe}function za(N,$,V,fe){for(var ye=N.length,Me=V+(fe?1:-1);fe?Me--:++Me<ye;)if($(N[Me],Me,N))return Me;return-1}function Rt(N,$,V){return $===$?Kv(N,$,V):za(N,Ou,V)}function Mv(N,$,V,fe){for(var ye=V-1,Me=N.length;++ye<Me;)if(fe(N[ye],$))return ye;return-1}function Ou(N){return N!==N}function Su(N,$){var V=N==null?0:N.length;return V?Is(N,$)/V:de}function Os(N){return function($){return $==null?r:$[N]}}function Ss(N){return function($){return N==null?r:N[$]}}function Iu(N,$,V,fe,ye){return ye(N,function(Me,dn,Ce){V=fe?(fe=!1,Me):$(V,Me,dn,Ce)}),V}function Fv(N,$){var V=N.length;for(N.sort($);V--;)N[V]=N[V].value;return N}function Is(N,$){for(var V,fe=-1,ye=N.length;++fe<ye;){var Me=$(N[fe]);Me!==r&&(V=V===r?Me:V+Me)}return V}function xs(N,$){for(var V=-1,fe=Array(N);++V<N;)fe[V]=$(V);return fe}function Lv(N,$){return Je($,function(V){return[V,N[V]]})}function xu(N){return N&&N.slice(0,Mu(N)+1).replace(ps,"")}function jn(N){return function($){return N($)}}function Ns(N,$){return Je($,function(V){return N[V]})}function Qt(N,$){return N.has($)}function Nu(N,$){for(var V=-1,fe=N.length;++V<fe&&Rt($,N[V],0)>-1;);return V}function qu(N,$){for(var V=N.length;V--&&Rt($,N[V],0)>-1;);return V}function jv(N,$){for(var V=N.length,fe=0;V--;)N[V]===$&&++fe;return fe}var Dv=Ss(Av),Cv=Ss(Tv);function Vv(N){return"\\"+wv[N]}function Hv(N,$){return N==null?r:N[$]}function Pt(N){return bv.test(N)}function Gv(N){return yv.test(N)}function Uv(N){for(var $,V=[];!($=N.next()).done;)V.push($.value);return V}function qs(N){var $=-1,V=Array(N.size);return N.forEach(function(fe,ye){V[++$]=[ye,fe]}),V}function Bu(N,$){return function(V){return N($(V))}}function Yr(N,$){for(var V=-1,fe=N.length,ye=0,Me=[];++V<fe;){var dn=N[V];(dn===$||dn===v)&&(N[V]=v,Me[ye++]=V)}return Me}function Xa(N){var $=-1,V=Array(N.size);return N.forEach(function(fe){V[++$]=fe}),V}function $v(N){var $=-1,V=Array(N.size);return N.forEach(function(fe){V[++$]=[fe,fe]}),V}function Kv(N,$,V){for(var fe=V-1,ye=N.length;++fe<ye;)if(N[fe]===$)return fe;return-1}function Yv(N,$,V){for(var fe=V+1;fe--;)if(N[fe]===$)return fe;return fe}function Ot(N){return Pt(N)?zv(N):Nv(N)}function or(N){return Pt(N)?Xv(N):qv(N)}function Mu(N){for(var $=N.length;$--&&jm.test(N.charAt($)););return $}var Wv=Ss(Ev);function zv(N){for(var $=As.lastIndex=0;As.test(N);)++$;return $}function Xv(N){return N.match(As)||[]}function Zv(N){return N.match(pv)||[]}var Jv=function N($){$=$==null?mn:St.defaults(mn.Object(),$,St.pick(mn,kv));var V=$.Array,fe=$.Date,ye=$.Error,Me=$.Function,dn=$.Math,Ce=$.Object,Bs=$.RegExp,Qv=$.String,zn=$.TypeError,Za=V.prototype,eh=Me.prototype,It=Ce.prototype,Ja=$["__core-js_shared__"],Qa=eh.toString,De=It.hasOwnProperty,nh=0,Fu=function(){var n=/[^.]+$/.exec(Ja&&Ja.keys&&Ja.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ei=It.toString,rh=Qa.call(Ce),th=mn._,ah=Bs("^"+Qa.call(De).replace(hs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ni=yu?$.Buffer:r,Wr=$.Symbol,ri=$.Uint8Array,Lu=ni?ni.allocUnsafe:r,ti=Bu(Ce.getPrototypeOf,Ce),ju=Ce.create,Du=It.propertyIsEnumerable,ai=Za.splice,Cu=Wr?Wr.isConcatSpreadable:r,ea=Wr?Wr.iterator:r,it=Wr?Wr.toStringTag:r,ii=function(){try{var n=dt(Ce,"defineProperty");return n({},"",{}),n}catch{}}(),ih=$.clearTimeout!==mn.clearTimeout&&$.clearTimeout,sh=fe&&fe.now!==mn.Date.now&&fe.now,oh=$.setTimeout!==mn.setTimeout&&$.setTimeout,si=dn.ceil,oi=dn.floor,Ms=Ce.getOwnPropertySymbols,lh=ni?ni.isBuffer:r,Vu=$.isFinite,uh=Za.join,dh=Bu(Ce.keys,Ce),fn=dn.max,bn=dn.min,fh=fe.now,gh=$.parseInt,Hu=dn.random,ch=Za.reverse,Fs=dt($,"DataView"),na=dt($,"Map"),Ls=dt($,"Promise"),xt=dt($,"Set"),ra=dt($,"WeakMap"),ta=dt(Ce,"create"),li=ra&&new ra,Nt={},mh=ft(Fs),vh=ft(na),hh=ft(Ls),ph=ft(xt),bh=ft(ra),ui=Wr?Wr.prototype:r,aa=ui?ui.valueOf:r,Gu=ui?ui.toString:r;function h(n){if(en(n)&&!ke(n)&&!(n instanceof Pe)){if(n instanceof Xn)return n;if(De.call(n,"__wrapped__"))return Ud(n)}return new Xn(n)}var qt=function(){function n(){}return function(a){if(!Qe(a))return{};if(ju)return ju(a);n.prototype=a;var o=new n;return n.prototype=r,o}}();function di(){}function Xn(n,a){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=r}h.templateSettings={escape:Nm,evaluate:qm,interpolate:Jl,variable:"",imports:{_:h}},h.prototype=di.prototype,h.prototype.constructor=h,Xn.prototype=qt(di.prototype),Xn.prototype.constructor=Xn;function Pe(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=le,this.__views__=[]}function yh(){var n=new Pe(this.__wrapped__);return n.__actions__=On(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=On(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=On(this.__views__),n}function kh(){if(this.__filtered__){var n=new Pe(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function _h(){var n=this.__wrapped__.value(),a=this.__dir__,o=ke(n),d=a<0,g=o?n.length:0,p=qp(0,g,this.__views__),T=p.start,O=p.end,B=O-T,Y=d?O:T-1,z=this.__iteratees__,Q=z.length,se=0,ce=bn(B,this.__takeCount__);if(!o||!d&&g==B&&ce==B)return cd(n,this.__actions__);var pe=[];e:for(;B--&&se<ce;){Y+=a;for(var Te=-1,be=n[Y];++Te<Q;){var Re=z[Te],Ie=Re.iteratee,Vn=Re.type,En=Ie(be);if(Vn==X)be=En;else if(!En){if(Vn==L)continue e;break e}}pe[se++]=be}return pe}Pe.prototype=qt(di.prototype),Pe.prototype.constructor=Pe;function st(n){var a=-1,o=n==null?0:n.length;for(this.clear();++a<o;){var d=n[a];this.set(d[0],d[1])}}function Ah(){this.__data__=ta?ta(null):{},this.size=0}function Th(n){var a=this.has(n)&&delete this.__data__[n];return this.size-=a?1:0,a}function Eh(n){var a=this.__data__;if(ta){var o=a[n];return o===c?r:o}return De.call(a,n)?a[n]:r}function wh(n){var a=this.__data__;return ta?a[n]!==r:De.call(a,n)}function Rh(n,a){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=ta&&a===r?c:a,this}st.prototype.clear=Ah,st.prototype.delete=Th,st.prototype.get=Eh,st.prototype.has=wh,st.prototype.set=Rh;function Or(n){var a=-1,o=n==null?0:n.length;for(this.clear();++a<o;){var d=n[a];this.set(d[0],d[1])}}function Ph(){this.__data__=[],this.size=0}function Oh(n){var a=this.__data__,o=fi(a,n);if(o<0)return!1;var d=a.length-1;return o==d?a.pop():ai.call(a,o,1),--this.size,!0}function Sh(n){var a=this.__data__,o=fi(a,n);return o<0?r:a[o][1]}function Ih(n){return fi(this.__data__,n)>-1}function xh(n,a){var o=this.__data__,d=fi(o,n);return d<0?(++this.size,o.push([n,a])):o[d][1]=a,this}Or.prototype.clear=Ph,Or.prototype.delete=Oh,Or.prototype.get=Sh,Or.prototype.has=Ih,Or.prototype.set=xh;function Sr(n){var a=-1,o=n==null?0:n.length;for(this.clear();++a<o;){var d=n[a];this.set(d[0],d[1])}}function Nh(){this.size=0,this.__data__={hash:new st,map:new(na||Or),string:new st}}function qh(n){var a=Ti(this,n).delete(n);return this.size-=a?1:0,a}function Bh(n){return Ti(this,n).get(n)}function Mh(n){return Ti(this,n).has(n)}function Fh(n,a){var o=Ti(this,n),d=o.size;return o.set(n,a),this.size+=o.size==d?0:1,this}Sr.prototype.clear=Nh,Sr.prototype.delete=qh,Sr.prototype.get=Bh,Sr.prototype.has=Mh,Sr.prototype.set=Fh;function ot(n){var a=-1,o=n==null?0:n.length;for(this.__data__=new Sr;++a<o;)this.add(n[a])}function Lh(n){return this.__data__.set(n,c),this}function jh(n){return this.__data__.has(n)}ot.prototype.add=ot.prototype.push=Lh,ot.prototype.has=jh;function lr(n){var a=this.__data__=new Or(n);this.size=a.size}function Dh(){this.__data__=new Or,this.size=0}function Ch(n){var a=this.__data__,o=a.delete(n);return this.size=a.size,o}function Vh(n){return this.__data__.get(n)}function Hh(n){return this.__data__.has(n)}function Gh(n,a){var o=this.__data__;if(o instanceof Or){var d=o.__data__;if(!na||d.length<s-1)return d.push([n,a]),this.size=++o.size,this;o=this.__data__=new Sr(d)}return o.set(n,a),this.size=o.size,this}lr.prototype.clear=Dh,lr.prototype.delete=Ch,lr.prototype.get=Vh,lr.prototype.has=Hh,lr.prototype.set=Gh;function Uu(n,a){var o=ke(n),d=!o&&gt(n),g=!o&&!d&&Qr(n),p=!o&&!d&&!g&&Lt(n),T=o||d||g||p,O=T?xs(n.length,Qv):[],B=O.length;for(var Y in n)(a||De.call(n,Y))&&!(T&&(Y=="length"||g&&(Y=="offset"||Y=="parent")||p&&(Y=="buffer"||Y=="byteLength"||Y=="byteOffset")||qr(Y,B)))&&O.push(Y);return O}function $u(n){var a=n.length;return a?n[Ws(0,a-1)]:r}function Uh(n,a){return Ei(On(n),lt(a,0,n.length))}function $h(n){return Ei(On(n))}function js(n,a,o){(o!==r&&!ur(n[a],o)||o===r&&!(a in n))&&Ir(n,a,o)}function ia(n,a,o){var d=n[a];(!(De.call(n,a)&&ur(d,o))||o===r&&!(a in n))&&Ir(n,a,o)}function fi(n,a){for(var o=n.length;o--;)if(ur(n[o][0],a))return o;return-1}function Kh(n,a,o,d){return zr(n,function(g,p,T){a(d,g,o(g),T)}),d}function Ku(n,a){return n&&br(a,cn(a),n)}function Yh(n,a){return n&&br(a,In(a),n)}function Ir(n,a,o){a=="__proto__"&&ii?ii(n,a,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[a]=o}function Ds(n,a){for(var o=-1,d=a.length,g=V(d),p=n==null;++o<d;)g[o]=p?r:ko(n,a[o]);return g}function lt(n,a,o){return n===n&&(o!==r&&(n=n<=o?n:o),a!==r&&(n=n>=a?n:a)),n}function Zn(n,a,o,d,g,p){var T,O=a&b,B=a&y,Y=a&k;if(o&&(T=g?o(n,d,g,p):o(n)),T!==r)return T;if(!Qe(n))return n;var z=ke(n);if(z){if(T=Mp(n),!O)return On(n,T)}else{var Q=yn(n),se=Q==Ze||Q==Pn;if(Qr(n))return hd(n,O);if(Q==un||Q==Ye||se&&!g){if(T=B||se?{}:Md(n),!O)return B?Ep(n,Yh(T,n)):Tp(n,Ku(T,n))}else{if(!Ue[Q])return g?n:{};T=Fp(n,Q,O)}}p||(p=new lr);var ce=p.get(n);if(ce)return ce;p.set(n,T),ff(n)?n.forEach(function(be){T.add(Zn(be,a,o,be,n,p))}):uf(n)&&n.forEach(function(be,Re){T.set(Re,Zn(be,a,o,Re,n,p))});var pe=Y?B?io:ao:B?In:cn,Te=z?r:pe(n);return Wn(Te||n,function(be,Re){Te&&(Re=be,be=n[Re]),ia(T,Re,Zn(be,a,o,Re,n,p))}),T}function Wh(n){var a=cn(n);return function(o){return Yu(o,n,a)}}function Yu(n,a,o){var d=o.length;if(n==null)return!d;for(n=Ce(n);d--;){var g=o[d],p=a[g],T=n[g];if(T===r&&!(g in n)||!p(T))return!1}return!0}function Wu(n,a,o){if(typeof n!="function")throw new zn(u);return ga(function(){n.apply(r,o)},a)}function sa(n,a,o,d){var g=-1,p=Wa,T=!0,O=n.length,B=[],Y=a.length;if(!O)return B;o&&(a=Je(a,jn(o))),d?(p=ws,T=!1):a.length>=s&&(p=Qt,T=!1,a=new ot(a));e:for(;++g<O;){var z=n[g],Q=o==null?z:o(z);if(z=d||z!==0?z:0,T&&Q===Q){for(var se=Y;se--;)if(a[se]===Q)continue e;B.push(z)}else p(a,Q,d)||B.push(z)}return B}var zr=_d(pr),zu=_d(Vs,!0);function zh(n,a){var o=!0;return zr(n,function(d,g,p){return o=!!a(d,g,p),o}),o}function gi(n,a,o){for(var d=-1,g=n.length;++d<g;){var p=n[d],T=a(p);if(T!=null&&(O===r?T===T&&!Cn(T):o(T,O)))var O=T,B=p}return B}function Xh(n,a,o,d){var g=n.length;for(o=Ae(o),o<0&&(o=-o>g?0:g+o),d=d===r||d>g?g:Ae(d),d<0&&(d+=g),d=o>d?0:cf(d);o<d;)n[o++]=a;return n}function Xu(n,a){var o=[];return zr(n,function(d,g,p){a(d,g,p)&&o.push(d)}),o}function vn(n,a,o,d,g){var p=-1,T=n.length;for(o||(o=jp),g||(g=[]);++p<T;){var O=n[p];a>0&&o(O)?a>1?vn(O,a-1,o,d,g):Kr(g,O):d||(g[g.length]=O)}return g}var Cs=Ad(),Zu=Ad(!0);function pr(n,a){return n&&Cs(n,a,cn)}function Vs(n,a){return n&&Zu(n,a,cn)}function ci(n,a){return $r(a,function(o){return Br(n[o])})}function ut(n,a){a=Zr(a,n);for(var o=0,d=a.length;n!=null&&o<d;)n=n[yr(a[o++])];return o&&o==d?n:r}function Ju(n,a,o){var d=a(n);return ke(n)?d:Kr(d,o(n))}function An(n){return n==null?n===r?ae:ir:it&&it in Ce(n)?Np(n):$p(n)}function Hs(n,a){return n>a}function Zh(n,a){return n!=null&&De.call(n,a)}function Jh(n,a){return n!=null&&a in Ce(n)}function Qh(n,a,o){return n>=bn(a,o)&&n<fn(a,o)}function Gs(n,a,o){for(var d=o?ws:Wa,g=n[0].length,p=n.length,T=p,O=V(p),B=1/0,Y=[];T--;){var z=n[T];T&&a&&(z=Je(z,jn(a))),B=bn(z.length,B),O[T]=!o&&(a||g>=120&&z.length>=120)?new ot(T&&z):r}z=n[0];var Q=-1,se=O[0];e:for(;++Q<g&&Y.length<B;){var ce=z[Q],pe=a?a(ce):ce;if(ce=o||ce!==0?ce:0,!(se?Qt(se,pe):d(Y,pe,o))){for(T=p;--T;){var Te=O[T];if(!(Te?Qt(Te,pe):d(n[T],pe,o)))continue e}se&&se.push(pe),Y.push(ce)}}return Y}function ep(n,a,o,d){return pr(n,function(g,p,T){a(d,o(g),p,T)}),d}function oa(n,a,o){a=Zr(a,n),n=Dd(n,a);var d=n==null?n:n[yr(Qn(a))];return d==null?r:Ln(d,n,o)}function Qu(n){return en(n)&&An(n)==Ye}function np(n){return en(n)&&An(n)==Se}function rp(n){return en(n)&&An(n)==Ne}function la(n,a,o,d,g){return n===a?!0:n==null||a==null||!en(n)&&!en(a)?n!==n&&a!==a:tp(n,a,o,d,la,g)}function tp(n,a,o,d,g,p){var T=ke(n),O=ke(a),B=T?Ve:yn(n),Y=O?Ve:yn(a);B=B==Ye?un:B,Y=Y==Ye?un:Y;var z=B==un,Q=Y==un,se=B==Y;if(se&&Qr(n)){if(!Qr(a))return!1;T=!0,z=!1}if(se&&!z)return p||(p=new lr),T||Lt(n)?Nd(n,a,o,d,g,p):Ip(n,a,B,o,d,g,p);if(!(o&x)){var ce=z&&De.call(n,"__wrapped__"),pe=Q&&De.call(a,"__wrapped__");if(ce||pe){var Te=ce?n.value():n,be=pe?a.value():a;return p||(p=new lr),g(Te,be,o,d,p)}}return se?(p||(p=new lr),xp(n,a,o,d,g,p)):!1}function ap(n){return en(n)&&yn(n)==Ge}function Us(n,a,o,d){var g=o.length,p=g,T=!d;if(n==null)return!p;for(n=Ce(n);g--;){var O=o[g];if(T&&O[2]?O[1]!==n[O[0]]:!(O[0]in n))return!1}for(;++g<p;){O=o[g];var B=O[0],Y=n[B],z=O[1];if(T&&O[2]){if(Y===r&&!(B in n))return!1}else{var Q=new lr;if(d)var se=d(Y,z,B,n,a,Q);if(!(se===r?la(z,Y,x|A,d,Q):se))return!1}}return!0}function ed(n){if(!Qe(n)||Cp(n))return!1;var a=Br(n)?ah:Wm;return a.test(ft(n))}function ip(n){return en(n)&&An(n)==w}function sp(n){return en(n)&&yn(n)==M}function op(n){return en(n)&&Ii(n.length)&&!!We[An(n)]}function nd(n){return typeof n=="function"?n:n==null?xn:typeof n=="object"?ke(n)?ad(n[0],n[1]):td(n):Ef(n)}function $s(n){if(!fa(n))return dh(n);var a=[];for(var o in Ce(n))De.call(n,o)&&o!="constructor"&&a.push(o);return a}function lp(n){if(!Qe(n))return Up(n);var a=fa(n),o=[];for(var d in n)d=="constructor"&&(a||!De.call(n,d))||o.push(d);return o}function Ks(n,a){return n<a}function rd(n,a){var o=-1,d=Sn(n)?V(n.length):[];return zr(n,function(g,p,T){d[++o]=a(g,p,T)}),d}function td(n){var a=oo(n);return a.length==1&&a[0][2]?Ld(a[0][0],a[0][1]):function(o){return o===n||Us(o,n,a)}}function ad(n,a){return uo(n)&&Fd(a)?Ld(yr(n),a):function(o){var d=ko(o,n);return d===r&&d===a?_o(o,n):la(a,d,x|A)}}function mi(n,a,o,d,g){n!==a&&Cs(a,function(p,T){if(g||(g=new lr),Qe(p))up(n,a,T,o,mi,d,g);else{var O=d?d(go(n,T),p,T+"",n,a,g):r;O===r&&(O=p),js(n,T,O)}},In)}function up(n,a,o,d,g,p,T){var O=go(n,o),B=go(a,o),Y=T.get(B);if(Y){js(n,o,Y);return}var z=p?p(O,B,o+"",n,a,T):r,Q=z===r;if(Q){var se=ke(B),ce=!se&&Qr(B),pe=!se&&!ce&&Lt(B);z=B,se||ce||pe?ke(O)?z=O:rn(O)?z=On(O):ce?(Q=!1,z=hd(B,!0)):pe?(Q=!1,z=pd(B,!0)):z=[]:ca(B)||gt(B)?(z=O,gt(O)?z=mf(O):(!Qe(O)||Br(O))&&(z=Md(B))):Q=!1}Q&&(T.set(B,z),g(z,B,d,p,T),T.delete(B)),js(n,o,z)}function id(n,a){var o=n.length;if(o)return a+=a<0?o:0,qr(a,o)?n[a]:r}function sd(n,a,o){a.length?a=Je(a,function(p){return ke(p)?function(T){return ut(T,p.length===1?p[0]:p)}:p}):a=[xn];var d=-1;a=Je(a,jn(he()));var g=rd(n,function(p,T,O){var B=Je(a,function(Y){return Y(p)});return{criteria:B,index:++d,value:p}});return Fv(g,function(p,T){return Ap(p,T,o)})}function dp(n,a){return od(n,a,function(o,d){return _o(n,d)})}function od(n,a,o){for(var d=-1,g=a.length,p={};++d<g;){var T=a[d],O=ut(n,T);o(O,T)&&ua(p,Zr(T,n),O)}return p}function fp(n){return function(a){return ut(a,n)}}function Ys(n,a,o,d){var g=d?Mv:Rt,p=-1,T=a.length,O=n;for(n===a&&(a=On(a)),o&&(O=Je(n,jn(o)));++p<T;)for(var B=0,Y=a[p],z=o?o(Y):Y;(B=g(O,z,B,d))>-1;)O!==n&&ai.call(O,B,1),ai.call(n,B,1);return n}function ld(n,a){for(var o=n?a.length:0,d=o-1;o--;){var g=a[o];if(o==d||g!==p){var p=g;qr(g)?ai.call(n,g,1):Zs(n,g)}}return n}function Ws(n,a){return n+oi(Hu()*(a-n+1))}function gp(n,a,o,d){for(var g=-1,p=fn(si((a-n)/(o||1)),0),T=V(p);p--;)T[d?p:++g]=n,n+=o;return T}function zs(n,a){var o="";if(!n||a<1||a>W)return o;do a%2&&(o+=n),a=oi(a/2),a&&(n+=n);while(a);return o}function we(n,a){return co(jd(n,a,xn),n+"")}function cp(n){return $u(jt(n))}function mp(n,a){var o=jt(n);return Ei(o,lt(a,0,o.length))}function ua(n,a,o,d){if(!Qe(n))return n;a=Zr(a,n);for(var g=-1,p=a.length,T=p-1,O=n;O!=null&&++g<p;){var B=yr(a[g]),Y=o;if(B==="__proto__"||B==="constructor"||B==="prototype")return n;if(g!=T){var z=O[B];Y=d?d(z,B,O):r,Y===r&&(Y=Qe(z)?z:qr(a[g+1])?[]:{})}ia(O,B,Y),O=O[B]}return n}var ud=li?function(n,a){return li.set(n,a),n}:xn,vp=ii?function(n,a){return ii(n,"toString",{configurable:!0,enumerable:!1,value:To(a),writable:!0})}:xn;function hp(n){return Ei(jt(n))}function Jn(n,a,o){var d=-1,g=n.length;a<0&&(a=-a>g?0:g+a),o=o>g?g:o,o<0&&(o+=g),g=a>o?0:o-a>>>0,a>>>=0;for(var p=V(g);++d<g;)p[d]=n[d+a];return p}function pp(n,a){var o;return zr(n,function(d,g,p){return o=a(d,g,p),!o}),!!o}function vi(n,a,o){var d=0,g=n==null?d:n.length;if(typeof a=="number"&&a===a&&g<=_e){for(;d<g;){var p=d+g>>>1,T=n[p];T!==null&&!Cn(T)&&(o?T<=a:T<a)?d=p+1:g=p}return g}return Xs(n,a,xn,o)}function Xs(n,a,o,d){var g=0,p=n==null?0:n.length;if(p===0)return 0;a=o(a);for(var T=a!==a,O=a===null,B=Cn(a),Y=a===r;g<p;){var z=oi((g+p)/2),Q=o(n[z]),se=Q!==r,ce=Q===null,pe=Q===Q,Te=Cn(Q);if(T)var be=d||pe;else Y?be=pe&&(d||se):O?be=pe&&se&&(d||!ce):B?be=pe&&se&&!ce&&(d||!Te):ce||Te?be=!1:be=d?Q<=a:Q<a;be?g=z+1:p=z}return bn(p,ve)}function dd(n,a){for(var o=-1,d=n.length,g=0,p=[];++o<d;){var T=n[o],O=a?a(T):T;if(!o||!ur(O,B)){var B=O;p[g++]=T===0?0:T}}return p}function fd(n){return typeof n=="number"?n:Cn(n)?de:+n}function Dn(n){if(typeof n=="string")return n;if(ke(n))return Je(n,Dn)+"";if(Cn(n))return Gu?Gu.call(n):"";var a=n+"";return a=="0"&&1/n==-Z?"-0":a}function Xr(n,a,o){var d=-1,g=Wa,p=n.length,T=!0,O=[],B=O;if(o)T=!1,g=ws;else if(p>=s){var Y=a?null:Op(n);if(Y)return Xa(Y);T=!1,g=Qt,B=new ot}else B=a?[]:O;e:for(;++d<p;){var z=n[d],Q=a?a(z):z;if(z=o||z!==0?z:0,T&&Q===Q){for(var se=B.length;se--;)if(B[se]===Q)continue e;a&&B.push(Q),O.push(z)}else g(B,Q,o)||(B!==O&&B.push(Q),O.push(z))}return O}function Zs(n,a){return a=Zr(a,n),n=Dd(n,a),n==null||delete n[yr(Qn(a))]}function gd(n,a,o,d){return ua(n,a,o(ut(n,a)),d)}function hi(n,a,o,d){for(var g=n.length,p=d?g:-1;(d?p--:++p<g)&&a(n[p],p,n););return o?Jn(n,d?0:p,d?p+1:g):Jn(n,d?p+1:0,d?g:p)}function cd(n,a){var o=n;return o instanceof Pe&&(o=o.value()),Rs(a,function(d,g){return g.func.apply(g.thisArg,Kr([d],g.args))},o)}function Js(n,a,o){var d=n.length;if(d<2)return d?Xr(n[0]):[];for(var g=-1,p=V(d);++g<d;)for(var T=n[g],O=-1;++O<d;)O!=g&&(p[g]=sa(p[g]||T,n[O],a,o));return Xr(vn(p,1),a,o)}function md(n,a,o){for(var d=-1,g=n.length,p=a.length,T={};++d<g;){var O=d<p?a[d]:r;o(T,n[d],O)}return T}function Qs(n){return rn(n)?n:[]}function eo(n){return typeof n=="function"?n:xn}function Zr(n,a){return ke(n)?n:uo(n,a)?[n]:Gd(Fe(n))}var bp=we;function Jr(n,a,o){var d=n.length;return o=o===r?d:o,!a&&o>=d?n:Jn(n,a,o)}var vd=ih||function(n){return mn.clearTimeout(n)};function hd(n,a){if(a)return n.slice();var o=n.length,d=Lu?Lu(o):new n.constructor(o);return n.copy(d),d}function no(n){var a=new n.constructor(n.byteLength);return new ri(a).set(new ri(n)),a}function yp(n,a){var o=a?no(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}function kp(n){var a=new n.constructor(n.source,Ql.exec(n));return a.lastIndex=n.lastIndex,a}function _p(n){return aa?Ce(aa.call(n)):{}}function pd(n,a){var o=a?no(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}function bd(n,a){if(n!==a){var o=n!==r,d=n===null,g=n===n,p=Cn(n),T=a!==r,O=a===null,B=a===a,Y=Cn(a);if(!O&&!Y&&!p&&n>a||p&&T&&B&&!O&&!Y||d&&T&&B||!o&&B||!g)return 1;if(!d&&!p&&!Y&&n<a||Y&&o&&g&&!d&&!p||O&&o&&g||!T&&g||!B)return-1}return 0}function Ap(n,a,o){for(var d=-1,g=n.criteria,p=a.criteria,T=g.length,O=o.length;++d<T;){var B=bd(g[d],p[d]);if(B){if(d>=O)return B;var Y=o[d];return B*(Y=="desc"?-1:1)}}return n.index-a.index}function yd(n,a,o,d){for(var g=-1,p=n.length,T=o.length,O=-1,B=a.length,Y=fn(p-T,0),z=V(B+Y),Q=!d;++O<B;)z[O]=a[O];for(;++g<T;)(Q||g<p)&&(z[o[g]]=n[g]);for(;Y--;)z[O++]=n[g++];return z}function kd(n,a,o,d){for(var g=-1,p=n.length,T=-1,O=o.length,B=-1,Y=a.length,z=fn(p-O,0),Q=V(z+Y),se=!d;++g<z;)Q[g]=n[g];for(var ce=g;++B<Y;)Q[ce+B]=a[B];for(;++T<O;)(se||g<p)&&(Q[ce+o[T]]=n[g++]);return Q}function On(n,a){var o=-1,d=n.length;for(a||(a=V(d));++o<d;)a[o]=n[o];return a}function br(n,a,o,d){var g=!o;o||(o={});for(var p=-1,T=a.length;++p<T;){var O=a[p],B=d?d(o[O],n[O],O,o,n):r;B===r&&(B=n[O]),g?Ir(o,O,B):ia(o,O,B)}return o}function Tp(n,a){return br(n,lo(n),a)}function Ep(n,a){return br(n,qd(n),a)}function pi(n,a){return function(o,d){var g=ke(o)?Sv:Kh,p=a?a():{};return g(o,n,he(d,2),p)}}function Bt(n){return we(function(a,o){var d=-1,g=o.length,p=g>1?o[g-1]:r,T=g>2?o[2]:r;for(p=n.length>3&&typeof p=="function"?(g--,p):r,T&&Tn(o[0],o[1],T)&&(p=g<3?r:p,g=1),a=Ce(a);++d<g;){var O=o[d];O&&n(a,O,d,p)}return a})}function _d(n,a){return function(o,d){if(o==null)return o;if(!Sn(o))return n(o,d);for(var g=o.length,p=a?g:-1,T=Ce(o);(a?p--:++p<g)&&d(T[p],p,T)!==!1;);return o}}function Ad(n){return function(a,o,d){for(var g=-1,p=Ce(a),T=d(a),O=T.length;O--;){var B=T[n?O:++g];if(o(p[B],B,p)===!1)break}return a}}function wp(n,a,o){var d=a&_,g=da(n);function p(){var T=this&&this!==mn&&this instanceof p?g:n;return T.apply(d?o:this,arguments)}return p}function Td(n){return function(a){a=Fe(a);var o=Pt(a)?or(a):r,d=o?o[0]:a.charAt(0),g=o?Jr(o,1).join(""):a.slice(1);return d[n]()+g}}function Mt(n){return function(a){return Rs(Af(_f(a).replace(vv,"")),n,"")}}function da(n){return function(){var a=arguments;switch(a.length){case 0:return new n;case 1:return new n(a[0]);case 2:return new n(a[0],a[1]);case 3:return new n(a[0],a[1],a[2]);case 4:return new n(a[0],a[1],a[2],a[3]);case 5:return new n(a[0],a[1],a[2],a[3],a[4]);case 6:return new n(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new n(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var o=qt(n.prototype),d=n.apply(o,a);return Qe(d)?d:o}}function Rp(n,a,o){var d=da(n);function g(){for(var p=arguments.length,T=V(p),O=p,B=Ft(g);O--;)T[O]=arguments[O];var Y=p<3&&T[0]!==B&&T[p-1]!==B?[]:Yr(T,B);if(p-=Y.length,p<o)return Od(n,a,bi,g.placeholder,r,T,Y,r,r,o-p);var z=this&&this!==mn&&this instanceof g?d:n;return Ln(z,this,T)}return g}function Ed(n){return function(a,o,d){var g=Ce(a);if(!Sn(a)){var p=he(o,3);a=cn(a),o=function(O){return p(g[O],O,g)}}var T=n(a,o,d);return T>-1?g[p?a[T]:T]:r}}function wd(n){return Nr(function(a){var o=a.length,d=o,g=Xn.prototype.thru;for(n&&a.reverse();d--;){var p=a[d];if(typeof p!="function")throw new zn(u);if(g&&!T&&Ai(p)=="wrapper")var T=new Xn([],!0)}for(d=T?d:o;++d<o;){p=a[d];var O=Ai(p),B=O=="wrapper"?so(p):r;B&&fo(B[0])&&B[1]==(j|P|I|C)&&!B[4].length&&B[9]==1?T=T[Ai(B[0])].apply(T,B[3]):T=p.length==1&&fo(p)?T[O]():T.thru(p)}return function(){var Y=arguments,z=Y[0];if(T&&Y.length==1&&ke(z))return T.plant(z).value();for(var Q=0,se=o?a[Q].apply(this,Y):z;++Q<o;)se=a[Q].call(this,se);return se}})}function bi(n,a,o,d,g,p,T,O,B,Y){var z=a&j,Q=a&_,se=a&R,ce=a&(P|D),pe=a&K,Te=se?r:da(n);function be(){for(var Re=arguments.length,Ie=V(Re),Vn=Re;Vn--;)Ie[Vn]=arguments[Vn];if(ce)var En=Ft(be),Hn=jv(Ie,En);if(d&&(Ie=yd(Ie,d,g,ce)),p&&(Ie=kd(Ie,p,T,ce)),Re-=Hn,ce&&Re<Y){var tn=Yr(Ie,En);return Od(n,a,bi,be.placeholder,o,Ie,tn,O,B,Y-Re)}var dr=Q?o:this,Fr=se?dr[n]:n;return Re=Ie.length,O?Ie=Kp(Ie,O):pe&&Re>1&&Ie.reverse(),z&&B<Re&&(Ie.length=B),this&&this!==mn&&this instanceof be&&(Fr=Te||da(Fr)),Fr.apply(dr,Ie)}return be}function Rd(n,a){return function(o,d){return ep(o,n,a(d),{})}}function yi(n,a){return function(o,d){var g;if(o===r&&d===r)return a;if(o!==r&&(g=o),d!==r){if(g===r)return d;typeof o=="string"||typeof d=="string"?(o=Dn(o),d=Dn(d)):(o=fd(o),d=fd(d)),g=n(o,d)}return g}}function ro(n){return Nr(function(a){return a=Je(a,jn(he())),we(function(o){var d=this;return n(a,function(g){return Ln(g,d,o)})})})}function ki(n,a){a=a===r?" ":Dn(a);var o=a.length;if(o<2)return o?zs(a,n):a;var d=zs(a,si(n/Ot(a)));return Pt(a)?Jr(or(d),0,n).join(""):d.slice(0,n)}function Pp(n,a,o,d){var g=a&_,p=da(n);function T(){for(var O=-1,B=arguments.length,Y=-1,z=d.length,Q=V(z+B),se=this&&this!==mn&&this instanceof T?p:n;++Y<z;)Q[Y]=d[Y];for(;B--;)Q[Y++]=arguments[++O];return Ln(se,g?o:this,Q)}return T}function Pd(n){return function(a,o,d){return d&&typeof d!="number"&&Tn(a,o,d)&&(o=d=r),a=Mr(a),o===r?(o=a,a=0):o=Mr(o),d=d===r?a<o?1:-1:Mr(d),gp(a,o,d,n)}}function _i(n){return function(a,o){return typeof a=="string"&&typeof o=="string"||(a=er(a),o=er(o)),n(a,o)}}function Od(n,a,o,d,g,p,T,O,B,Y){var z=a&P,Q=z?T:r,se=z?r:T,ce=z?p:r,pe=z?r:p;a|=z?I:H,a&=~(z?H:I),a&S||(a&=-4);var Te=[n,a,g,ce,Q,pe,se,O,B,Y],be=o.apply(r,Te);return fo(n)&&Cd(be,Te),be.placeholder=d,Vd(be,n,a)}function to(n){var a=dn[n];return function(o,d){if(o=er(o),d=d==null?0:bn(Ae(d),292),d&&Vu(o)){var g=(Fe(o)+"e").split("e"),p=a(g[0]+"e"+(+g[1]+d));return g=(Fe(p)+"e").split("e"),+(g[0]+"e"+(+g[1]-d))}return a(o)}}var Op=xt&&1/Xa(new xt([,-0]))[1]==Z?function(n){return new xt(n)}:Ro;function Sd(n){return function(a){var o=yn(a);return o==Ge?qs(a):o==M?$v(a):Lv(a,n(a))}}function xr(n,a,o,d,g,p,T,O){var B=a&R;if(!B&&typeof n!="function")throw new zn(u);var Y=d?d.length:0;if(Y||(a&=-97,d=g=r),T=T===r?T:fn(Ae(T),0),O=O===r?O:Ae(O),Y-=g?g.length:0,a&H){var z=d,Q=g;d=g=r}var se=B?r:so(n),ce=[n,a,o,d,g,z,Q,p,T,O];if(se&&Gp(ce,se),n=ce[0],a=ce[1],o=ce[2],d=ce[3],g=ce[4],O=ce[9]=ce[9]===r?B?0:n.length:fn(ce[9]-Y,0),!O&&a&(P|D)&&(a&=-25),!a||a==_)var pe=wp(n,a,o);else a==P||a==D?pe=Rp(n,a,O):(a==I||a==(_|I))&&!g.length?pe=Pp(n,a,o,d):pe=bi.apply(r,ce);var Te=se?ud:Cd;return Vd(Te(pe,ce),n,a)}function Id(n,a,o,d){return n===r||ur(n,It[o])&&!De.call(d,o)?a:n}function xd(n,a,o,d,g,p){return Qe(n)&&Qe(a)&&(p.set(a,n),mi(n,a,r,xd,p),p.delete(a)),n}function Sp(n){return ca(n)?r:n}function Nd(n,a,o,d,g,p){var T=o&x,O=n.length,B=a.length;if(O!=B&&!(T&&B>O))return!1;var Y=p.get(n),z=p.get(a);if(Y&&z)return Y==a&&z==n;var Q=-1,se=!0,ce=o&A?new ot:r;for(p.set(n,a),p.set(a,n);++Q<O;){var pe=n[Q],Te=a[Q];if(d)var be=T?d(Te,pe,Q,a,n,p):d(pe,Te,Q,n,a,p);if(be!==r){if(be)continue;se=!1;break}if(ce){if(!Ps(a,function(Re,Ie){if(!Qt(ce,Ie)&&(pe===Re||g(pe,Re,o,d,p)))return ce.push(Ie)})){se=!1;break}}else if(!(pe===Te||g(pe,Te,o,d,p))){se=!1;break}}return p.delete(n),p.delete(a),se}function Ip(n,a,o,d,g,p,T){switch(o){case Be:if(n.byteLength!=a.byteLength||n.byteOffset!=a.byteOffset)return!1;n=n.buffer,a=a.buffer;case Se:return!(n.byteLength!=a.byteLength||!p(new ri(n),new ri(a)));case Ee:case Ne:case on:return ur(+n,+a);case Xe:return n.name==a.name&&n.message==a.message;case w:case U:return n==a+"";case Ge:var O=qs;case M:var B=d&x;if(O||(O=Xa),n.size!=a.size&&!B)return!1;var Y=T.get(n);if(Y)return Y==a;d|=A,T.set(n,a);var z=Nd(O(n),O(a),d,g,p,T);return T.delete(n),z;case oe:if(aa)return aa.call(n)==aa.call(a)}return!1}function xp(n,a,o,d,g,p){var T=o&x,O=ao(n),B=O.length,Y=ao(a),z=Y.length;if(B!=z&&!T)return!1;for(var Q=B;Q--;){var se=O[Q];if(!(T?se in a:De.call(a,se)))return!1}var ce=p.get(n),pe=p.get(a);if(ce&&pe)return ce==a&&pe==n;var Te=!0;p.set(n,a),p.set(a,n);for(var be=T;++Q<B;){se=O[Q];var Re=n[se],Ie=a[se];if(d)var Vn=T?d(Ie,Re,se,a,n,p):d(Re,Ie,se,n,a,p);if(!(Vn===r?Re===Ie||g(Re,Ie,o,d,p):Vn)){Te=!1;break}be||(be=se=="constructor")}if(Te&&!be){var En=n.constructor,Hn=a.constructor;En!=Hn&&"constructor"in n&&"constructor"in a&&!(typeof En=="function"&&En instanceof En&&typeof Hn=="function"&&Hn instanceof Hn)&&(Te=!1)}return p.delete(n),p.delete(a),Te}function Nr(n){return co(jd(n,r,Yd),n+"")}function ao(n){return Ju(n,cn,lo)}function io(n){return Ju(n,In,qd)}var so=li?function(n){return li.get(n)}:Ro;function Ai(n){for(var a=n.name+"",o=Nt[a],d=De.call(Nt,a)?o.length:0;d--;){var g=o[d],p=g.func;if(p==null||p==n)return g.name}return a}function Ft(n){var a=De.call(h,"placeholder")?h:n;return a.placeholder}function he(){var n=h.iteratee||Eo;return n=n===Eo?nd:n,arguments.length?n(arguments[0],arguments[1]):n}function Ti(n,a){var o=n.__data__;return Dp(a)?o[typeof a=="string"?"string":"hash"]:o.map}function oo(n){for(var a=cn(n),o=a.length;o--;){var d=a[o],g=n[d];a[o]=[d,g,Fd(g)]}return a}function dt(n,a){var o=Hv(n,a);return ed(o)?o:r}function Np(n){var a=De.call(n,it),o=n[it];try{n[it]=r;var d=!0}catch{}var g=ei.call(n);return d&&(a?n[it]=o:delete n[it]),g}var lo=Ms?function(n){return n==null?[]:(n=Ce(n),$r(Ms(n),function(a){return Du.call(n,a)}))}:Po,qd=Ms?function(n){for(var a=[];n;)Kr(a,lo(n)),n=ti(n);return a}:Po,yn=An;(Fs&&yn(new Fs(new ArrayBuffer(1)))!=Be||na&&yn(new na)!=Ge||Ls&&yn(Ls.resolve())!=sr||xt&&yn(new xt)!=M||ra&&yn(new ra)!=te)&&(yn=function(n){var a=An(n),o=a==un?n.constructor:r,d=o?ft(o):"";if(d)switch(d){case mh:return Be;case vh:return Ge;case hh:return sr;case ph:return M;case bh:return te}return a});function qp(n,a,o){for(var d=-1,g=o.length;++d<g;){var p=o[d],T=p.size;switch(p.type){case"drop":n+=T;break;case"dropRight":a-=T;break;case"take":a=bn(a,n+T);break;case"takeRight":n=fn(n,a-T);break}}return{start:n,end:a}}function Bp(n){var a=n.match(Cm);return a?a[1].split(Vm):[]}function Bd(n,a,o){a=Zr(a,n);for(var d=-1,g=a.length,p=!1;++d<g;){var T=yr(a[d]);if(!(p=n!=null&&o(n,T)))break;n=n[T]}return p||++d!=g?p:(g=n==null?0:n.length,!!g&&Ii(g)&&qr(T,g)&&(ke(n)||gt(n)))}function Mp(n){var a=n.length,o=new n.constructor(a);return a&&typeof n[0]=="string"&&De.call(n,"index")&&(o.index=n.index,o.input=n.input),o}function Md(n){return typeof n.constructor=="function"&&!fa(n)?qt(ti(n)):{}}function Fp(n,a,o){var d=n.constructor;switch(a){case Se:return no(n);case Ee:case Ne:return new d(+n);case Be:return yp(n,o);case pn:case Ur:case Kn:case Xt:case rt:case tt:case Zt:case Et:case Jt:return pd(n,o);case Ge:return new d;case on:case U:return new d(n);case w:return kp(n);case M:return new d;case oe:return _p(n)}}function Lp(n,a){var o=a.length;if(!o)return n;var d=o-1;return a[d]=(o>1?"& ":"")+a[d],a=a.join(o>2?", ":" "),n.replace(Dm,`{
/* [wrapped with `+a+`] */
`)}function jp(n){return ke(n)||gt(n)||!!(Cu&&n&&n[Cu])}function qr(n,a){var o=typeof n;return a=a??W,!!a&&(o=="number"||o!="symbol"&&Xm.test(n))&&n>-1&&n%1==0&&n<a}function Tn(n,a,o){if(!Qe(o))return!1;var d=typeof a;return(d=="number"?Sn(o)&&qr(a,o.length):d=="string"&&a in o)?ur(o[a],n):!1}function uo(n,a){if(ke(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||Cn(n)?!0:Mm.test(n)||!Bm.test(n)||a!=null&&n in Ce(a)}function Dp(n){var a=typeof n;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?n!=="__proto__":n===null}function fo(n){var a=Ai(n),o=h[a];if(typeof o!="function"||!(a in Pe.prototype))return!1;if(n===o)return!0;var d=so(o);return!!d&&n===d[0]}function Cp(n){return!!Fu&&Fu in n}var Vp=Ja?Br:Oo;function fa(n){var a=n&&n.constructor,o=typeof a=="function"&&a.prototype||It;return n===o}function Fd(n){return n===n&&!Qe(n)}function Ld(n,a){return function(o){return o==null?!1:o[n]===a&&(a!==r||n in Ce(o))}}function Hp(n){var a=Oi(n,function(d){return o.size===m&&o.clear(),d}),o=a.cache;return a}function Gp(n,a){var o=n[1],d=a[1],g=o|d,p=g<(_|R|j),T=d==j&&o==P||d==j&&o==C&&n[7].length<=a[8]||d==(j|C)&&a[7].length<=a[8]&&o==P;if(!(p||T))return n;d&_&&(n[2]=a[2],g|=o&_?0:S);var O=a[3];if(O){var B=n[3];n[3]=B?yd(B,O,a[4]):O,n[4]=B?Yr(n[3],v):a[4]}return O=a[5],O&&(B=n[5],n[5]=B?kd(B,O,a[6]):O,n[6]=B?Yr(n[5],v):a[6]),O=a[7],O&&(n[7]=O),d&j&&(n[8]=n[8]==null?a[8]:bn(n[8],a[8])),n[9]==null&&(n[9]=a[9]),n[0]=a[0],n[1]=g,n}function Up(n){var a=[];if(n!=null)for(var o in Ce(n))a.push(o);return a}function $p(n){return ei.call(n)}function jd(n,a,o){return a=fn(a===r?n.length-1:a,0),function(){for(var d=arguments,g=-1,p=fn(d.length-a,0),T=V(p);++g<p;)T[g]=d[a+g];g=-1;for(var O=V(a+1);++g<a;)O[g]=d[g];return O[a]=o(T),Ln(n,this,O)}}function Dd(n,a){return a.length<2?n:ut(n,Jn(a,0,-1))}function Kp(n,a){for(var o=n.length,d=bn(a.length,o),g=On(n);d--;){var p=a[d];n[d]=qr(p,o)?g[p]:r}return n}function go(n,a){if(!(a==="constructor"&&typeof n[a]=="function")&&a!="__proto__")return n[a]}var Cd=Hd(ud),ga=oh||function(n,a){return mn.setTimeout(n,a)},co=Hd(vp);function Vd(n,a,o){var d=a+"";return co(n,Lp(d,Yp(Bp(d),o)))}function Hd(n){var a=0,o=0;return function(){var d=fh(),g=F-(d-o);if(o=d,g>0){if(++a>=G)return arguments[0]}else a=0;return n.apply(r,arguments)}}function Ei(n,a){var o=-1,d=n.length,g=d-1;for(a=a===r?d:a;++o<a;){var p=Ws(o,g),T=n[p];n[p]=n[o],n[o]=T}return n.length=a,n}var Gd=Hp(function(n){var a=[];return n.charCodeAt(0)===46&&a.push(""),n.replace(Fm,function(o,d,g,p){a.push(g?p.replace(Um,"$1"):d||o)}),a});function yr(n){if(typeof n=="string"||Cn(n))return n;var a=n+"";return a=="0"&&1/n==-Z?"-0":a}function ft(n){if(n!=null){try{return Qa.call(n)}catch{}try{return n+""}catch{}}return""}function Yp(n,a){return Wn(_n,function(o){var d="_."+o[0];a&o[1]&&!Wa(n,d)&&n.push(d)}),n.sort()}function Ud(n){if(n instanceof Pe)return n.clone();var a=new Xn(n.__wrapped__,n.__chain__);return a.__actions__=On(n.__actions__),a.__index__=n.__index__,a.__values__=n.__values__,a}function Wp(n,a,o){(o?Tn(n,a,o):a===r)?a=1:a=fn(Ae(a),0);var d=n==null?0:n.length;if(!d||a<1)return[];for(var g=0,p=0,T=V(si(d/a));g<d;)T[p++]=Jn(n,g,g+=a);return T}function zp(n){for(var a=-1,o=n==null?0:n.length,d=0,g=[];++a<o;){var p=n[a];p&&(g[d++]=p)}return g}function Xp(){var n=arguments.length;if(!n)return[];for(var a=V(n-1),o=arguments[0],d=n;d--;)a[d-1]=arguments[d];return Kr(ke(o)?On(o):[o],vn(a,1))}var Zp=we(function(n,a){return rn(n)?sa(n,vn(a,1,rn,!0)):[]}),Jp=we(function(n,a){var o=Qn(a);return rn(o)&&(o=r),rn(n)?sa(n,vn(a,1,rn,!0),he(o,2)):[]}),Qp=we(function(n,a){var o=Qn(a);return rn(o)&&(o=r),rn(n)?sa(n,vn(a,1,rn,!0),r,o):[]});function eb(n,a,o){var d=n==null?0:n.length;return d?(a=o||a===r?1:Ae(a),Jn(n,a<0?0:a,d)):[]}function nb(n,a,o){var d=n==null?0:n.length;return d?(a=o||a===r?1:Ae(a),a=d-a,Jn(n,0,a<0?0:a)):[]}function rb(n,a){return n&&n.length?hi(n,he(a,3),!0,!0):[]}function tb(n,a){return n&&n.length?hi(n,he(a,3),!0):[]}function ab(n,a,o,d){var g=n==null?0:n.length;return g?(o&&typeof o!="number"&&Tn(n,a,o)&&(o=0,d=g),Xh(n,a,o,d)):[]}function $d(n,a,o){var d=n==null?0:n.length;if(!d)return-1;var g=o==null?0:Ae(o);return g<0&&(g=fn(d+g,0)),za(n,he(a,3),g)}function Kd(n,a,o){var d=n==null?0:n.length;if(!d)return-1;var g=d-1;return o!==r&&(g=Ae(o),g=o<0?fn(d+g,0):bn(g,d-1)),za(n,he(a,3),g,!0)}function Yd(n){var a=n==null?0:n.length;return a?vn(n,1):[]}function ib(n){var a=n==null?0:n.length;return a?vn(n,Z):[]}function sb(n,a){var o=n==null?0:n.length;return o?(a=a===r?1:Ae(a),vn(n,a)):[]}function ob(n){for(var a=-1,o=n==null?0:n.length,d={};++a<o;){var g=n[a];d[g[0]]=g[1]}return d}function Wd(n){return n&&n.length?n[0]:r}function lb(n,a,o){var d=n==null?0:n.length;if(!d)return-1;var g=o==null?0:Ae(o);return g<0&&(g=fn(d+g,0)),Rt(n,a,g)}function ub(n){var a=n==null?0:n.length;return a?Jn(n,0,-1):[]}var db=we(function(n){var a=Je(n,Qs);return a.length&&a[0]===n[0]?Gs(a):[]}),fb=we(function(n){var a=Qn(n),o=Je(n,Qs);return a===Qn(o)?a=r:o.pop(),o.length&&o[0]===n[0]?Gs(o,he(a,2)):[]}),gb=we(function(n){var a=Qn(n),o=Je(n,Qs);return a=typeof a=="function"?a:r,a&&o.pop(),o.length&&o[0]===n[0]?Gs(o,r,a):[]});function cb(n,a){return n==null?"":uh.call(n,a)}function Qn(n){var a=n==null?0:n.length;return a?n[a-1]:r}function mb(n,a,o){var d=n==null?0:n.length;if(!d)return-1;var g=d;return o!==r&&(g=Ae(o),g=g<0?fn(d+g,0):bn(g,d-1)),a===a?Yv(n,a,g):za(n,Ou,g,!0)}function vb(n,a){return n&&n.length?id(n,Ae(a)):r}var hb=we(zd);function zd(n,a){return n&&n.length&&a&&a.length?Ys(n,a):n}function pb(n,a,o){return n&&n.length&&a&&a.length?Ys(n,a,he(o,2)):n}function bb(n,a,o){return n&&n.length&&a&&a.length?Ys(n,a,r,o):n}var yb=Nr(function(n,a){var o=n==null?0:n.length,d=Ds(n,a);return ld(n,Je(a,function(g){return qr(g,o)?+g:g}).sort(bd)),d});function kb(n,a){var o=[];if(!(n&&n.length))return o;var d=-1,g=[],p=n.length;for(a=he(a,3);++d<p;){var T=n[d];a(T,d,n)&&(o.push(T),g.push(d))}return ld(n,g),o}function mo(n){return n==null?n:ch.call(n)}function _b(n,a,o){var d=n==null?0:n.length;return d?(o&&typeof o!="number"&&Tn(n,a,o)?(a=0,o=d):(a=a==null?0:Ae(a),o=o===r?d:Ae(o)),Jn(n,a,o)):[]}function Ab(n,a){return vi(n,a)}function Tb(n,a,o){return Xs(n,a,he(o,2))}function Eb(n,a){var o=n==null?0:n.length;if(o){var d=vi(n,a);if(d<o&&ur(n[d],a))return d}return-1}function wb(n,a){return vi(n,a,!0)}function Rb(n,a,o){return Xs(n,a,he(o,2),!0)}function Pb(n,a){var o=n==null?0:n.length;if(o){var d=vi(n,a,!0)-1;if(ur(n[d],a))return d}return-1}function Ob(n){return n&&n.length?dd(n):[]}function Sb(n,a){return n&&n.length?dd(n,he(a,2)):[]}function Ib(n){var a=n==null?0:n.length;return a?Jn(n,1,a):[]}function xb(n,a,o){return n&&n.length?(a=o||a===r?1:Ae(a),Jn(n,0,a<0?0:a)):[]}function Nb(n,a,o){var d=n==null?0:n.length;return d?(a=o||a===r?1:Ae(a),a=d-a,Jn(n,a<0?0:a,d)):[]}function qb(n,a){return n&&n.length?hi(n,he(a,3),!1,!0):[]}function Bb(n,a){return n&&n.length?hi(n,he(a,3)):[]}var Mb=we(function(n){return Xr(vn(n,1,rn,!0))}),Fb=we(function(n){var a=Qn(n);return rn(a)&&(a=r),Xr(vn(n,1,rn,!0),he(a,2))}),Lb=we(function(n){var a=Qn(n);return a=typeof a=="function"?a:r,Xr(vn(n,1,rn,!0),r,a)});function jb(n){return n&&n.length?Xr(n):[]}function Db(n,a){return n&&n.length?Xr(n,he(a,2)):[]}function Cb(n,a){return a=typeof a=="function"?a:r,n&&n.length?Xr(n,r,a):[]}function vo(n){if(!(n&&n.length))return[];var a=0;return n=$r(n,function(o){if(rn(o))return a=fn(o.length,a),!0}),xs(a,function(o){return Je(n,Os(o))})}function Xd(n,a){if(!(n&&n.length))return[];var o=vo(n);return a==null?o:Je(o,function(d){return Ln(a,r,d)})}var Vb=we(function(n,a){return rn(n)?sa(n,a):[]}),Hb=we(function(n){return Js($r(n,rn))}),Gb=we(function(n){var a=Qn(n);return rn(a)&&(a=r),Js($r(n,rn),he(a,2))}),Ub=we(function(n){var a=Qn(n);return a=typeof a=="function"?a:r,Js($r(n,rn),r,a)}),$b=we(vo);function Kb(n,a){return md(n||[],a||[],ia)}function Yb(n,a){return md(n||[],a||[],ua)}var Wb=we(function(n){var a=n.length,o=a>1?n[a-1]:r;return o=typeof o=="function"?(n.pop(),o):r,Xd(n,o)});function Zd(n){var a=h(n);return a.__chain__=!0,a}function zb(n,a){return a(n),n}function wi(n,a){return a(n)}var Xb=Nr(function(n){var a=n.length,o=a?n[0]:0,d=this.__wrapped__,g=function(p){return Ds(p,n)};return a>1||this.__actions__.length||!(d instanceof Pe)||!qr(o)?this.thru(g):(d=d.slice(o,+o+(a?1:0)),d.__actions__.push({func:wi,args:[g],thisArg:r}),new Xn(d,this.__chain__).thru(function(p){return a&&!p.length&&p.push(r),p}))});function Zb(){return Zd(this)}function Jb(){return new Xn(this.value(),this.__chain__)}function Qb(){this.__values__===r&&(this.__values__=gf(this.value()));var n=this.__index__>=this.__values__.length,a=n?r:this.__values__[this.__index__++];return{done:n,value:a}}function ey(){return this}function ny(n){for(var a,o=this;o instanceof di;){var d=Ud(o);d.__index__=0,d.__values__=r,a?g.__wrapped__=d:a=d;var g=d;o=o.__wrapped__}return g.__wrapped__=n,a}function ry(){var n=this.__wrapped__;if(n instanceof Pe){var a=n;return this.__actions__.length&&(a=new Pe(this)),a=a.reverse(),a.__actions__.push({func:wi,args:[mo],thisArg:r}),new Xn(a,this.__chain__)}return this.thru(mo)}function ty(){return cd(this.__wrapped__,this.__actions__)}var ay=pi(function(n,a,o){De.call(n,o)?++n[o]:Ir(n,o,1)});function iy(n,a,o){var d=ke(n)?Ru:zh;return o&&Tn(n,a,o)&&(a=r),d(n,he(a,3))}function sy(n,a){var o=ke(n)?$r:Xu;return o(n,he(a,3))}var oy=Ed($d),ly=Ed(Kd);function uy(n,a){return vn(Ri(n,a),1)}function dy(n,a){return vn(Ri(n,a),Z)}function fy(n,a,o){return o=o===r?1:Ae(o),vn(Ri(n,a),o)}function Jd(n,a){var o=ke(n)?Wn:zr;return o(n,he(a,3))}function Qd(n,a){var o=ke(n)?Iv:zu;return o(n,he(a,3))}var gy=pi(function(n,a,o){De.call(n,o)?n[o].push(a):Ir(n,o,[a])});function cy(n,a,o,d){n=Sn(n)?n:jt(n),o=o&&!d?Ae(o):0;var g=n.length;return o<0&&(o=fn(g+o,0)),xi(n)?o<=g&&n.indexOf(a,o)>-1:!!g&&Rt(n,a,o)>-1}var my=we(function(n,a,o){var d=-1,g=typeof a=="function",p=Sn(n)?V(n.length):[];return zr(n,function(T){p[++d]=g?Ln(a,T,o):oa(T,a,o)}),p}),vy=pi(function(n,a,o){Ir(n,o,a)});function Ri(n,a){var o=ke(n)?Je:rd;return o(n,he(a,3))}function hy(n,a,o,d){return n==null?[]:(ke(a)||(a=a==null?[]:[a]),o=d?r:o,ke(o)||(o=o==null?[]:[o]),sd(n,a,o))}var py=pi(function(n,a,o){n[o?0:1].push(a)},function(){return[[],[]]});function by(n,a,o){var d=ke(n)?Rs:Iu,g=arguments.length<3;return d(n,he(a,4),o,g,zr)}function yy(n,a,o){var d=ke(n)?xv:Iu,g=arguments.length<3;return d(n,he(a,4),o,g,zu)}function ky(n,a){var o=ke(n)?$r:Xu;return o(n,Si(he(a,3)))}function _y(n){var a=ke(n)?$u:cp;return a(n)}function Ay(n,a,o){(o?Tn(n,a,o):a===r)?a=1:a=Ae(a);var d=ke(n)?Uh:mp;return d(n,a)}function Ty(n){var a=ke(n)?$h:hp;return a(n)}function Ey(n){if(n==null)return 0;if(Sn(n))return xi(n)?Ot(n):n.length;var a=yn(n);return a==Ge||a==M?n.size:$s(n).length}function wy(n,a,o){var d=ke(n)?Ps:pp;return o&&Tn(n,a,o)&&(a=r),d(n,he(a,3))}var Ry=we(function(n,a){if(n==null)return[];var o=a.length;return o>1&&Tn(n,a[0],a[1])?a=[]:o>2&&Tn(a[0],a[1],a[2])&&(a=[a[0]]),sd(n,vn(a,1),[])}),Pi=sh||function(){return mn.Date.now()};function Py(n,a){if(typeof a!="function")throw new zn(u);return n=Ae(n),function(){if(--n<1)return a.apply(this,arguments)}}function ef(n,a,o){return a=o?r:a,a=n&&a==null?n.length:a,xr(n,j,r,r,r,r,a)}function nf(n,a){var o;if(typeof a!="function")throw new zn(u);return n=Ae(n),function(){return--n>0&&(o=a.apply(this,arguments)),n<=1&&(a=r),o}}var ho=we(function(n,a,o){var d=_;if(o.length){var g=Yr(o,Ft(ho));d|=I}return xr(n,d,a,o,g)}),rf=we(function(n,a,o){var d=_|R;if(o.length){var g=Yr(o,Ft(rf));d|=I}return xr(a,d,n,o,g)});function tf(n,a,o){a=o?r:a;var d=xr(n,P,r,r,r,r,r,a);return d.placeholder=tf.placeholder,d}function af(n,a,o){a=o?r:a;var d=xr(n,D,r,r,r,r,r,a);return d.placeholder=af.placeholder,d}function sf(n,a,o){var d,g,p,T,O,B,Y=0,z=!1,Q=!1,se=!0;if(typeof n!="function")throw new zn(u);a=er(a)||0,Qe(o)&&(z=!!o.leading,Q="maxWait"in o,p=Q?fn(er(o.maxWait)||0,a):p,se="trailing"in o?!!o.trailing:se);function ce(tn){var dr=d,Fr=g;return d=g=r,Y=tn,T=n.apply(Fr,dr),T}function pe(tn){return Y=tn,O=ga(Re,a),z?ce(tn):T}function Te(tn){var dr=tn-B,Fr=tn-Y,wf=a-dr;return Q?bn(wf,p-Fr):wf}function be(tn){var dr=tn-B,Fr=tn-Y;return B===r||dr>=a||dr<0||Q&&Fr>=p}function Re(){var tn=Pi();if(be(tn))return Ie(tn);O=ga(Re,Te(tn))}function Ie(tn){return O=r,se&&d?ce(tn):(d=g=r,T)}function Vn(){O!==r&&vd(O),Y=0,d=B=g=O=r}function En(){return O===r?T:Ie(Pi())}function Hn(){var tn=Pi(),dr=be(tn);if(d=arguments,g=this,B=tn,dr){if(O===r)return pe(B);if(Q)return vd(O),O=ga(Re,a),ce(B)}return O===r&&(O=ga(Re,a)),T}return Hn.cancel=Vn,Hn.flush=En,Hn}var Oy=we(function(n,a){return Wu(n,1,a)}),Sy=we(function(n,a,o){return Wu(n,er(a)||0,o)});function Iy(n){return xr(n,K)}function Oi(n,a){if(typeof n!="function"||a!=null&&typeof a!="function")throw new zn(u);var o=function(){var d=arguments,g=a?a.apply(this,d):d[0],p=o.cache;if(p.has(g))return p.get(g);var T=n.apply(this,d);return o.cache=p.set(g,T)||p,T};return o.cache=new(Oi.Cache||Sr),o}Oi.Cache=Sr;function Si(n){if(typeof n!="function")throw new zn(u);return function(){var a=arguments;switch(a.length){case 0:return!n.call(this);case 1:return!n.call(this,a[0]);case 2:return!n.call(this,a[0],a[1]);case 3:return!n.call(this,a[0],a[1],a[2])}return!n.apply(this,a)}}function xy(n){return nf(2,n)}var Ny=bp(function(n,a){a=a.length==1&&ke(a[0])?Je(a[0],jn(he())):Je(vn(a,1),jn(he()));var o=a.length;return we(function(d){for(var g=-1,p=bn(d.length,o);++g<p;)d[g]=a[g].call(this,d[g]);return Ln(n,this,d)})}),po=we(function(n,a){var o=Yr(a,Ft(po));return xr(n,I,r,a,o)}),of=we(function(n,a){var o=Yr(a,Ft(of));return xr(n,H,r,a,o)}),qy=Nr(function(n,a){return xr(n,C,r,r,r,a)});function By(n,a){if(typeof n!="function")throw new zn(u);return a=a===r?a:Ae(a),we(n,a)}function My(n,a){if(typeof n!="function")throw new zn(u);return a=a==null?0:fn(Ae(a),0),we(function(o){var d=o[a],g=Jr(o,0,a);return d&&Kr(g,d),Ln(n,this,g)})}function Fy(n,a,o){var d=!0,g=!0;if(typeof n!="function")throw new zn(u);return Qe(o)&&(d="leading"in o?!!o.leading:d,g="trailing"in o?!!o.trailing:g),sf(n,a,{leading:d,maxWait:a,trailing:g})}function Ly(n){return ef(n,1)}function jy(n,a){return po(eo(a),n)}function Dy(){if(!arguments.length)return[];var n=arguments[0];return ke(n)?n:[n]}function Cy(n){return Zn(n,k)}function Vy(n,a){return a=typeof a=="function"?a:r,Zn(n,k,a)}function Hy(n){return Zn(n,b|k)}function Gy(n,a){return a=typeof a=="function"?a:r,Zn(n,b|k,a)}function Uy(n,a){return a==null||Yu(n,a,cn(a))}function ur(n,a){return n===a||n!==n&&a!==a}var $y=_i(Hs),Ky=_i(function(n,a){return n>=a}),gt=Qu(function(){return arguments}())?Qu:function(n){return en(n)&&De.call(n,"callee")&&!Du.call(n,"callee")},ke=V.isArray,Yy=ku?jn(ku):np;function Sn(n){return n!=null&&Ii(n.length)&&!Br(n)}function rn(n){return en(n)&&Sn(n)}function Wy(n){return n===!0||n===!1||en(n)&&An(n)==Ee}var Qr=lh||Oo,zy=_u?jn(_u):rp;function Xy(n){return en(n)&&n.nodeType===1&&!ca(n)}function Zy(n){if(n==null)return!0;if(Sn(n)&&(ke(n)||typeof n=="string"||typeof n.splice=="function"||Qr(n)||Lt(n)||gt(n)))return!n.length;var a=yn(n);if(a==Ge||a==M)return!n.size;if(fa(n))return!$s(n).length;for(var o in n)if(De.call(n,o))return!1;return!0}function Jy(n,a){return la(n,a)}function Qy(n,a,o){o=typeof o=="function"?o:r;var d=o?o(n,a):r;return d===r?la(n,a,r,o):!!d}function bo(n){if(!en(n))return!1;var a=An(n);return a==Xe||a==nn||typeof n.message=="string"&&typeof n.name=="string"&&!ca(n)}function ek(n){return typeof n=="number"&&Vu(n)}function Br(n){if(!Qe(n))return!1;var a=An(n);return a==Ze||a==Pn||a==He||a==$n}function lf(n){return typeof n=="number"&&n==Ae(n)}function Ii(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=W}function Qe(n){var a=typeof n;return n!=null&&(a=="object"||a=="function")}function en(n){return n!=null&&typeof n=="object"}var uf=Au?jn(Au):ap;function nk(n,a){return n===a||Us(n,a,oo(a))}function rk(n,a,o){return o=typeof o=="function"?o:r,Us(n,a,oo(a),o)}function tk(n){return df(n)&&n!=+n}function ak(n){if(Vp(n))throw new ye(l);return ed(n)}function ik(n){return n===null}function sk(n){return n==null}function df(n){return typeof n=="number"||en(n)&&An(n)==on}function ca(n){if(!en(n)||An(n)!=un)return!1;var a=ti(n);if(a===null)return!0;var o=De.call(a,"constructor")&&a.constructor;return typeof o=="function"&&o instanceof o&&Qa.call(o)==rh}var yo=Tu?jn(Tu):ip;function ok(n){return lf(n)&&n>=-W&&n<=W}var ff=Eu?jn(Eu):sp;function xi(n){return typeof n=="string"||!ke(n)&&en(n)&&An(n)==U}function Cn(n){return typeof n=="symbol"||en(n)&&An(n)==oe}var Lt=wu?jn(wu):op;function lk(n){return n===r}function uk(n){return en(n)&&yn(n)==te}function dk(n){return en(n)&&An(n)==me}var fk=_i(Ks),gk=_i(function(n,a){return n<=a});function gf(n){if(!n)return[];if(Sn(n))return xi(n)?or(n):On(n);if(ea&&n[ea])return Uv(n[ea]());var a=yn(n),o=a==Ge?qs:a==M?Xa:jt;return o(n)}function Mr(n){if(!n)return n===0?n:0;if(n=er(n),n===Z||n===-Z){var a=n<0?-1:1;return a*J}return n===n?n:0}function Ae(n){var a=Mr(n),o=a%1;return a===a?o?a-o:a:0}function cf(n){return n?lt(Ae(n),0,le):0}function er(n){if(typeof n=="number")return n;if(Cn(n))return de;if(Qe(n)){var a=typeof n.valueOf=="function"?n.valueOf():n;n=Qe(a)?a+"":a}if(typeof n!="string")return n===0?n:+n;n=xu(n);var o=Ym.test(n);return o||zm.test(n)?Pv(n.slice(2),o?2:8):Km.test(n)?de:+n}function mf(n){return br(n,In(n))}function ck(n){return n?lt(Ae(n),-W,W):n===0?n:0}function Fe(n){return n==null?"":Dn(n)}var mk=Bt(function(n,a){if(fa(a)||Sn(a)){br(a,cn(a),n);return}for(var o in a)De.call(a,o)&&ia(n,o,a[o])}),vf=Bt(function(n,a){br(a,In(a),n)}),Ni=Bt(function(n,a,o,d){br(a,In(a),n,d)}),vk=Bt(function(n,a,o,d){br(a,cn(a),n,d)}),hk=Nr(Ds);function pk(n,a){var o=qt(n);return a==null?o:Ku(o,a)}var bk=we(function(n,a){n=Ce(n);var o=-1,d=a.length,g=d>2?a[2]:r;for(g&&Tn(a[0],a[1],g)&&(d=1);++o<d;)for(var p=a[o],T=In(p),O=-1,B=T.length;++O<B;){var Y=T[O],z=n[Y];(z===r||ur(z,It[Y])&&!De.call(n,Y))&&(n[Y]=p[Y])}return n}),yk=we(function(n){return n.push(r,xd),Ln(hf,r,n)});function kk(n,a){return Pu(n,he(a,3),pr)}function _k(n,a){return Pu(n,he(a,3),Vs)}function Ak(n,a){return n==null?n:Cs(n,he(a,3),In)}function Tk(n,a){return n==null?n:Zu(n,he(a,3),In)}function Ek(n,a){return n&&pr(n,he(a,3))}function wk(n,a){return n&&Vs(n,he(a,3))}function Rk(n){return n==null?[]:ci(n,cn(n))}function Pk(n){return n==null?[]:ci(n,In(n))}function ko(n,a,o){var d=n==null?r:ut(n,a);return d===r?o:d}function Ok(n,a){return n!=null&&Bd(n,a,Zh)}function _o(n,a){return n!=null&&Bd(n,a,Jh)}var Sk=Rd(function(n,a,o){a!=null&&typeof a.toString!="function"&&(a=ei.call(a)),n[a]=o},To(xn)),Ik=Rd(function(n,a,o){a!=null&&typeof a.toString!="function"&&(a=ei.call(a)),De.call(n,a)?n[a].push(o):n[a]=[o]},he),xk=we(oa);function cn(n){return Sn(n)?Uu(n):$s(n)}function In(n){return Sn(n)?Uu(n,!0):lp(n)}function Nk(n,a){var o={};return a=he(a,3),pr(n,function(d,g,p){Ir(o,a(d,g,p),d)}),o}function qk(n,a){var o={};return a=he(a,3),pr(n,function(d,g,p){Ir(o,g,a(d,g,p))}),o}var Bk=Bt(function(n,a,o){mi(n,a,o)}),hf=Bt(function(n,a,o,d){mi(n,a,o,d)}),Mk=Nr(function(n,a){var o={};if(n==null)return o;var d=!1;a=Je(a,function(p){return p=Zr(p,n),d||(d=p.length>1),p}),br(n,io(n),o),d&&(o=Zn(o,b|y|k,Sp));for(var g=a.length;g--;)Zs(o,a[g]);return o});function Fk(n,a){return pf(n,Si(he(a)))}var Lk=Nr(function(n,a){return n==null?{}:dp(n,a)});function pf(n,a){if(n==null)return{};var o=Je(io(n),function(d){return[d]});return a=he(a),od(n,o,function(d,g){return a(d,g[0])})}function jk(n,a,o){a=Zr(a,n);var d=-1,g=a.length;for(g||(g=1,n=r);++d<g;){var p=n==null?r:n[yr(a[d])];p===r&&(d=g,p=o),n=Br(p)?p.call(n):p}return n}function Dk(n,a,o){return n==null?n:ua(n,a,o)}function Ck(n,a,o,d){return d=typeof d=="function"?d:r,n==null?n:ua(n,a,o,d)}var bf=Sd(cn),yf=Sd(In);function Vk(n,a,o){var d=ke(n),g=d||Qr(n)||Lt(n);if(a=he(a,4),o==null){var p=n&&n.constructor;g?o=d?new p:[]:Qe(n)?o=Br(p)?qt(ti(n)):{}:o={}}return(g?Wn:pr)(n,function(T,O,B){return a(o,T,O,B)}),o}function Hk(n,a){return n==null?!0:Zs(n,a)}function Gk(n,a,o){return n==null?n:gd(n,a,eo(o))}function Uk(n,a,o,d){return d=typeof d=="function"?d:r,n==null?n:gd(n,a,eo(o),d)}function jt(n){return n==null?[]:Ns(n,cn(n))}function $k(n){return n==null?[]:Ns(n,In(n))}function Kk(n,a,o){return o===r&&(o=a,a=r),o!==r&&(o=er(o),o=o===o?o:0),a!==r&&(a=er(a),a=a===a?a:0),lt(er(n),a,o)}function Yk(n,a,o){return a=Mr(a),o===r?(o=a,a=0):o=Mr(o),n=er(n),Qh(n,a,o)}function Wk(n,a,o){if(o&&typeof o!="boolean"&&Tn(n,a,o)&&(a=o=r),o===r&&(typeof a=="boolean"?(o=a,a=r):typeof n=="boolean"&&(o=n,n=r)),n===r&&a===r?(n=0,a=1):(n=Mr(n),a===r?(a=n,n=0):a=Mr(a)),n>a){var d=n;n=a,a=d}if(o||n%1||a%1){var g=Hu();return bn(n+g*(a-n+Rv("1e-"+((g+"").length-1))),a)}return Ws(n,a)}var zk=Mt(function(n,a,o){return a=a.toLowerCase(),n+(o?kf(a):a)});function kf(n){return Ao(Fe(n).toLowerCase())}function _f(n){return n=Fe(n),n&&n.replace(Zm,Dv).replace(hv,"")}function Xk(n,a,o){n=Fe(n),a=Dn(a);var d=n.length;o=o===r?d:lt(Ae(o),0,d);var g=o;return o-=a.length,o>=0&&n.slice(o,g)==a}function Zk(n){return n=Fe(n),n&&xm.test(n)?n.replace(Zl,Cv):n}function Jk(n){return n=Fe(n),n&&Lm.test(n)?n.replace(hs,"\\$&"):n}var Qk=Mt(function(n,a,o){return n+(o?"-":"")+a.toLowerCase()}),e0=Mt(function(n,a,o){return n+(o?" ":"")+a.toLowerCase()}),n0=Td("toLowerCase");function r0(n,a,o){n=Fe(n),a=Ae(a);var d=a?Ot(n):0;if(!a||d>=a)return n;var g=(a-d)/2;return ki(oi(g),o)+n+ki(si(g),o)}function t0(n,a,o){n=Fe(n),a=Ae(a);var d=a?Ot(n):0;return a&&d<a?n+ki(a-d,o):n}function a0(n,a,o){n=Fe(n),a=Ae(a);var d=a?Ot(n):0;return a&&d<a?ki(a-d,o)+n:n}function i0(n,a,o){return o||a==null?a=0:a&&(a=+a),gh(Fe(n).replace(ps,""),a||0)}function s0(n,a,o){return(o?Tn(n,a,o):a===r)?a=1:a=Ae(a),zs(Fe(n),a)}function o0(){var n=arguments,a=Fe(n[0]);return n.length<3?a:a.replace(n[1],n[2])}var l0=Mt(function(n,a,o){return n+(o?"_":"")+a.toLowerCase()});function u0(n,a,o){return o&&typeof o!="number"&&Tn(n,a,o)&&(a=o=r),o=o===r?le:o>>>0,o?(n=Fe(n),n&&(typeof a=="string"||a!=null&&!yo(a))&&(a=Dn(a),!a&&Pt(n))?Jr(or(n),0,o):n.split(a,o)):[]}var d0=Mt(function(n,a,o){return n+(o?" ":"")+Ao(a)});function f0(n,a,o){return n=Fe(n),o=o==null?0:lt(Ae(o),0,n.length),a=Dn(a),n.slice(o,o+a.length)==a}function g0(n,a,o){var d=h.templateSettings;o&&Tn(n,a,o)&&(a=r),n=Fe(n),a=Ni({},a,d,Id);var g=Ni({},a.imports,d.imports,Id),p=cn(g),T=Ns(g,p),O,B,Y=0,z=a.interpolate||$a,Q="__p += '",se=Bs((a.escape||$a).source+"|"+z.source+"|"+(z===Jl?$m:$a).source+"|"+(a.evaluate||$a).source+"|$","g"),ce="//# sourceURL="+(De.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++_v+"]")+`
`;n.replace(se,function(be,Re,Ie,Vn,En,Hn){return Ie||(Ie=Vn),Q+=n.slice(Y,Hn).replace(Jm,Vv),Re&&(O=!0,Q+=`' +
__e(`+Re+`) +
'`),En&&(B=!0,Q+=`';
`+En+`;
__p += '`),Ie&&(Q+=`' +
((__t = (`+Ie+`)) == null ? '' : __t) +
'`),Y=Hn+be.length,be}),Q+=`';
`;var pe=De.call(a,"variable")&&a.variable;if(!pe)Q=`with (obj) {
`+Q+`
}
`;else if(Gm.test(pe))throw new ye(f);Q=(B?Q.replace(Ua,""):Q).replace(Om,"$1").replace(Sm,"$1;"),Q="function("+(pe||"obj")+`) {
`+(pe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(B?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Q+`return __p
}`;var Te=Tf(function(){return Me(p,ce+"return "+Q).apply(r,T)});if(Te.source=Q,bo(Te))throw Te;return Te}function c0(n){return Fe(n).toLowerCase()}function m0(n){return Fe(n).toUpperCase()}function v0(n,a,o){if(n=Fe(n),n&&(o||a===r))return xu(n);if(!n||!(a=Dn(a)))return n;var d=or(n),g=or(a),p=Nu(d,g),T=qu(d,g)+1;return Jr(d,p,T).join("")}function h0(n,a,o){if(n=Fe(n),n&&(o||a===r))return n.slice(0,Mu(n)+1);if(!n||!(a=Dn(a)))return n;var d=or(n),g=qu(d,or(a))+1;return Jr(d,0,g).join("")}function p0(n,a,o){if(n=Fe(n),n&&(o||a===r))return n.replace(ps,"");if(!n||!(a=Dn(a)))return n;var d=or(n),g=Nu(d,or(a));return Jr(d,g).join("")}function b0(n,a){var o=ne,d=ee;if(Qe(a)){var g="separator"in a?a.separator:g;o="length"in a?Ae(a.length):o,d="omission"in a?Dn(a.omission):d}n=Fe(n);var p=n.length;if(Pt(n)){var T=or(n);p=T.length}if(o>=p)return n;var O=o-Ot(d);if(O<1)return d;var B=T?Jr(T,0,O).join(""):n.slice(0,O);if(g===r)return B+d;if(T&&(O+=B.length-O),yo(g)){if(n.slice(O).search(g)){var Y,z=B;for(g.global||(g=Bs(g.source,Fe(Ql.exec(g))+"g")),g.lastIndex=0;Y=g.exec(z);)var Q=Y.index;B=B.slice(0,Q===r?O:Q)}}else if(n.indexOf(Dn(g),O)!=O){var se=B.lastIndexOf(g);se>-1&&(B=B.slice(0,se))}return B+d}function y0(n){return n=Fe(n),n&&Im.test(n)?n.replace(Xl,Wv):n}var k0=Mt(function(n,a,o){return n+(o?" ":"")+a.toUpperCase()}),Ao=Td("toUpperCase");function Af(n,a,o){return n=Fe(n),a=o?r:a,a===r?Gv(n)?Zv(n):Bv(n):n.match(a)||[]}var Tf=we(function(n,a){try{return Ln(n,r,a)}catch(o){return bo(o)?o:new ye(o)}}),_0=Nr(function(n,a){return Wn(a,function(o){o=yr(o),Ir(n,o,ho(n[o],n))}),n});function A0(n){var a=n==null?0:n.length,o=he();return n=a?Je(n,function(d){if(typeof d[1]!="function")throw new zn(u);return[o(d[0]),d[1]]}):[],we(function(d){for(var g=-1;++g<a;){var p=n[g];if(Ln(p[0],this,d))return Ln(p[1],this,d)}})}function T0(n){return Wh(Zn(n,b))}function To(n){return function(){return n}}function E0(n,a){return n==null||n!==n?a:n}var w0=wd(),R0=wd(!0);function xn(n){return n}function Eo(n){return nd(typeof n=="function"?n:Zn(n,b))}function P0(n){return td(Zn(n,b))}function O0(n,a){return ad(n,Zn(a,b))}var S0=we(function(n,a){return function(o){return oa(o,n,a)}}),I0=we(function(n,a){return function(o){return oa(n,o,a)}});function wo(n,a,o){var d=cn(a),g=ci(a,d);o==null&&!(Qe(a)&&(g.length||!d.length))&&(o=a,a=n,n=this,g=ci(a,cn(a)));var p=!(Qe(o)&&"chain"in o)||!!o.chain,T=Br(n);return Wn(g,function(O){var B=a[O];n[O]=B,T&&(n.prototype[O]=function(){var Y=this.__chain__;if(p||Y){var z=n(this.__wrapped__),Q=z.__actions__=On(this.__actions__);return Q.push({func:B,args:arguments,thisArg:n}),z.__chain__=Y,z}return B.apply(n,Kr([this.value()],arguments))})}),n}function x0(){return mn._===this&&(mn._=th),this}function Ro(){}function N0(n){return n=Ae(n),we(function(a){return id(a,n)})}var q0=ro(Je),B0=ro(Ru),M0=ro(Ps);function Ef(n){return uo(n)?Os(yr(n)):fp(n)}function F0(n){return function(a){return n==null?r:ut(n,a)}}var L0=Pd(),j0=Pd(!0);function Po(){return[]}function Oo(){return!1}function D0(){return{}}function C0(){return""}function V0(){return!0}function H0(n,a){if(n=Ae(n),n<1||n>W)return[];var o=le,d=bn(n,le);a=he(a),n-=le;for(var g=xs(d,a);++o<n;)a(o);return g}function G0(n){return ke(n)?Je(n,yr):Cn(n)?[n]:On(Gd(Fe(n)))}function U0(n){var a=++nh;return Fe(n)+a}var $0=yi(function(n,a){return n+a},0),K0=to("ceil"),Y0=yi(function(n,a){return n/a},1),W0=to("floor");function z0(n){return n&&n.length?gi(n,xn,Hs):r}function X0(n,a){return n&&n.length?gi(n,he(a,2),Hs):r}function Z0(n){return Su(n,xn)}function J0(n,a){return Su(n,he(a,2))}function Q0(n){return n&&n.length?gi(n,xn,Ks):r}function e_(n,a){return n&&n.length?gi(n,he(a,2),Ks):r}var n_=yi(function(n,a){return n*a},1),r_=to("round"),t_=yi(function(n,a){return n-a},0);function a_(n){return n&&n.length?Is(n,xn):0}function i_(n,a){return n&&n.length?Is(n,he(a,2)):0}return h.after=Py,h.ary=ef,h.assign=mk,h.assignIn=vf,h.assignInWith=Ni,h.assignWith=vk,h.at=hk,h.before=nf,h.bind=ho,h.bindAll=_0,h.bindKey=rf,h.castArray=Dy,h.chain=Zd,h.chunk=Wp,h.compact=zp,h.concat=Xp,h.cond=A0,h.conforms=T0,h.constant=To,h.countBy=ay,h.create=pk,h.curry=tf,h.curryRight=af,h.debounce=sf,h.defaults=bk,h.defaultsDeep=yk,h.defer=Oy,h.delay=Sy,h.difference=Zp,h.differenceBy=Jp,h.differenceWith=Qp,h.drop=eb,h.dropRight=nb,h.dropRightWhile=rb,h.dropWhile=tb,h.fill=ab,h.filter=sy,h.flatMap=uy,h.flatMapDeep=dy,h.flatMapDepth=fy,h.flatten=Yd,h.flattenDeep=ib,h.flattenDepth=sb,h.flip=Iy,h.flow=w0,h.flowRight=R0,h.fromPairs=ob,h.functions=Rk,h.functionsIn=Pk,h.groupBy=gy,h.initial=ub,h.intersection=db,h.intersectionBy=fb,h.intersectionWith=gb,h.invert=Sk,h.invertBy=Ik,h.invokeMap=my,h.iteratee=Eo,h.keyBy=vy,h.keys=cn,h.keysIn=In,h.map=Ri,h.mapKeys=Nk,h.mapValues=qk,h.matches=P0,h.matchesProperty=O0,h.memoize=Oi,h.merge=Bk,h.mergeWith=hf,h.method=S0,h.methodOf=I0,h.mixin=wo,h.negate=Si,h.nthArg=N0,h.omit=Mk,h.omitBy=Fk,h.once=xy,h.orderBy=hy,h.over=q0,h.overArgs=Ny,h.overEvery=B0,h.overSome=M0,h.partial=po,h.partialRight=of,h.partition=py,h.pick=Lk,h.pickBy=pf,h.property=Ef,h.propertyOf=F0,h.pull=hb,h.pullAll=zd,h.pullAllBy=pb,h.pullAllWith=bb,h.pullAt=yb,h.range=L0,h.rangeRight=j0,h.rearg=qy,h.reject=ky,h.remove=kb,h.rest=By,h.reverse=mo,h.sampleSize=Ay,h.set=Dk,h.setWith=Ck,h.shuffle=Ty,h.slice=_b,h.sortBy=Ry,h.sortedUniq=Ob,h.sortedUniqBy=Sb,h.split=u0,h.spread=My,h.tail=Ib,h.take=xb,h.takeRight=Nb,h.takeRightWhile=qb,h.takeWhile=Bb,h.tap=zb,h.throttle=Fy,h.thru=wi,h.toArray=gf,h.toPairs=bf,h.toPairsIn=yf,h.toPath=G0,h.toPlainObject=mf,h.transform=Vk,h.unary=Ly,h.union=Mb,h.unionBy=Fb,h.unionWith=Lb,h.uniq=jb,h.uniqBy=Db,h.uniqWith=Cb,h.unset=Hk,h.unzip=vo,h.unzipWith=Xd,h.update=Gk,h.updateWith=Uk,h.values=jt,h.valuesIn=$k,h.without=Vb,h.words=Af,h.wrap=jy,h.xor=Hb,h.xorBy=Gb,h.xorWith=Ub,h.zip=$b,h.zipObject=Kb,h.zipObjectDeep=Yb,h.zipWith=Wb,h.entries=bf,h.entriesIn=yf,h.extend=vf,h.extendWith=Ni,wo(h,h),h.add=$0,h.attempt=Tf,h.camelCase=zk,h.capitalize=kf,h.ceil=K0,h.clamp=Kk,h.clone=Cy,h.cloneDeep=Hy,h.cloneDeepWith=Gy,h.cloneWith=Vy,h.conformsTo=Uy,h.deburr=_f,h.defaultTo=E0,h.divide=Y0,h.endsWith=Xk,h.eq=ur,h.escape=Zk,h.escapeRegExp=Jk,h.every=iy,h.find=oy,h.findIndex=$d,h.findKey=kk,h.findLast=ly,h.findLastIndex=Kd,h.findLastKey=_k,h.floor=W0,h.forEach=Jd,h.forEachRight=Qd,h.forIn=Ak,h.forInRight=Tk,h.forOwn=Ek,h.forOwnRight=wk,h.get=ko,h.gt=$y,h.gte=Ky,h.has=Ok,h.hasIn=_o,h.head=Wd,h.identity=xn,h.includes=cy,h.indexOf=lb,h.inRange=Yk,h.invoke=xk,h.isArguments=gt,h.isArray=ke,h.isArrayBuffer=Yy,h.isArrayLike=Sn,h.isArrayLikeObject=rn,h.isBoolean=Wy,h.isBuffer=Qr,h.isDate=zy,h.isElement=Xy,h.isEmpty=Zy,h.isEqual=Jy,h.isEqualWith=Qy,h.isError=bo,h.isFinite=ek,h.isFunction=Br,h.isInteger=lf,h.isLength=Ii,h.isMap=uf,h.isMatch=nk,h.isMatchWith=rk,h.isNaN=tk,h.isNative=ak,h.isNil=sk,h.isNull=ik,h.isNumber=df,h.isObject=Qe,h.isObjectLike=en,h.isPlainObject=ca,h.isRegExp=yo,h.isSafeInteger=ok,h.isSet=ff,h.isString=xi,h.isSymbol=Cn,h.isTypedArray=Lt,h.isUndefined=lk,h.isWeakMap=uk,h.isWeakSet=dk,h.join=cb,h.kebabCase=Qk,h.last=Qn,h.lastIndexOf=mb,h.lowerCase=e0,h.lowerFirst=n0,h.lt=fk,h.lte=gk,h.max=z0,h.maxBy=X0,h.mean=Z0,h.meanBy=J0,h.min=Q0,h.minBy=e_,h.stubArray=Po,h.stubFalse=Oo,h.stubObject=D0,h.stubString=C0,h.stubTrue=V0,h.multiply=n_,h.nth=vb,h.noConflict=x0,h.noop=Ro,h.now=Pi,h.pad=r0,h.padEnd=t0,h.padStart=a0,h.parseInt=i0,h.random=Wk,h.reduce=by,h.reduceRight=yy,h.repeat=s0,h.replace=o0,h.result=jk,h.round=r_,h.runInContext=N,h.sample=_y,h.size=Ey,h.snakeCase=l0,h.some=wy,h.sortedIndex=Ab,h.sortedIndexBy=Tb,h.sortedIndexOf=Eb,h.sortedLastIndex=wb,h.sortedLastIndexBy=Rb,h.sortedLastIndexOf=Pb,h.startCase=d0,h.startsWith=f0,h.subtract=t_,h.sum=a_,h.sumBy=i_,h.template=g0,h.times=H0,h.toFinite=Mr,h.toInteger=Ae,h.toLength=cf,h.toLower=c0,h.toNumber=er,h.toSafeInteger=ck,h.toString=Fe,h.toUpper=m0,h.trim=v0,h.trimEnd=h0,h.trimStart=p0,h.truncate=b0,h.unescape=y0,h.uniqueId=U0,h.upperCase=k0,h.upperFirst=Ao,h.each=Jd,h.eachRight=Qd,h.first=Wd,wo(h,function(){var n={};return pr(h,function(a,o){De.call(h.prototype,o)||(n[o]=a)}),n}(),{chain:!1}),h.VERSION=t,Wn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){h[n].placeholder=h}),Wn(["drop","take"],function(n,a){Pe.prototype[n]=function(o){o=o===r?1:fn(Ae(o),0);var d=this.__filtered__&&!a?new Pe(this):this.clone();return d.__filtered__?d.__takeCount__=bn(o,d.__takeCount__):d.__views__.push({size:bn(o,le),type:n+(d.__dir__<0?"Right":"")}),d},Pe.prototype[n+"Right"]=function(o){return this.reverse()[n](o).reverse()}}),Wn(["filter","map","takeWhile"],function(n,a){var o=a+1,d=o==L||o==re;Pe.prototype[n]=function(g){var p=this.clone();return p.__iteratees__.push({iteratee:he(g,3),type:o}),p.__filtered__=p.__filtered__||d,p}}),Wn(["head","last"],function(n,a){var o="take"+(a?"Right":"");Pe.prototype[n]=function(){return this[o](1).value()[0]}}),Wn(["initial","tail"],function(n,a){var o="drop"+(a?"":"Right");Pe.prototype[n]=function(){return this.__filtered__?new Pe(this):this[o](1)}}),Pe.prototype.compact=function(){return this.filter(xn)},Pe.prototype.find=function(n){return this.filter(n).head()},Pe.prototype.findLast=function(n){return this.reverse().find(n)},Pe.prototype.invokeMap=we(function(n,a){return typeof n=="function"?new Pe(this):this.map(function(o){return oa(o,n,a)})}),Pe.prototype.reject=function(n){return this.filter(Si(he(n)))},Pe.prototype.slice=function(n,a){n=Ae(n);var o=this;return o.__filtered__&&(n>0||a<0)?new Pe(o):(n<0?o=o.takeRight(-n):n&&(o=o.drop(n)),a!==r&&(a=Ae(a),o=a<0?o.dropRight(-a):o.take(a-n)),o)},Pe.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Pe.prototype.toArray=function(){return this.take(le)},pr(Pe.prototype,function(n,a){var o=/^(?:filter|find|map|reject)|While$/.test(a),d=/^(?:head|last)$/.test(a),g=h[d?"take"+(a=="last"?"Right":""):a],p=d||/^find/.test(a);g&&(h.prototype[a]=function(){var T=this.__wrapped__,O=d?[1]:arguments,B=T instanceof Pe,Y=O[0],z=B||ke(T),Q=function(Re){var Ie=g.apply(h,Kr([Re],O));return d&&se?Ie[0]:Ie};z&&o&&typeof Y=="function"&&Y.length!=1&&(B=z=!1);var se=this.__chain__,ce=!!this.__actions__.length,pe=p&&!se,Te=B&&!ce;if(!p&&z){T=Te?T:new Pe(this);var be=n.apply(T,O);return be.__actions__.push({func:wi,args:[Q],thisArg:r}),new Xn(be,se)}return pe&&Te?n.apply(this,O):(be=this.thru(Q),pe?d?be.value()[0]:be.value():be)})}),Wn(["pop","push","shift","sort","splice","unshift"],function(n){var a=Za[n],o=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);h.prototype[n]=function(){var g=arguments;if(d&&!this.__chain__){var p=this.value();return a.apply(ke(p)?p:[],g)}return this[o](function(T){return a.apply(ke(T)?T:[],g)})}}),pr(Pe.prototype,function(n,a){var o=h[a];if(o){var d=o.name+"";De.call(Nt,d)||(Nt[d]=[]),Nt[d].push({name:a,func:o})}}),Nt[bi(r,R).name]=[{name:"wrapper",func:r}],Pe.prototype.clone=yh,Pe.prototype.reverse=kh,Pe.prototype.value=_h,h.prototype.at=Xb,h.prototype.chain=Zb,h.prototype.commit=Jb,h.prototype.next=Qb,h.prototype.plant=ny,h.prototype.reverse=ry,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=ty,h.prototype.first=h.prototype.head,ea&&(h.prototype[ea]=ey),h},St=Jv();at?((at.exports=St)._=St,Ts._=St):mn._=St}).call(xw)}(Ta,Ta.exports)),Ta.exports}Nw();vr(Da);const em=E.forwardRef((e,i)=>ie.jsx(Ll,{gap:"space-8",style:{display:"flex"},...e,ref:i}));em.displayName="FaktaGruppe";em.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var $o={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Og;function qw(){return Og||(Og=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var l="",u=0;u<arguments.length;u++){var f=arguments[u];f&&(l=s(l,t.call(this,f)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var f in l)i.call(l,f)&&l[f]&&(u=s(u,this&&this[f]||f));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}($o)),$o.exports}var Bw=qw();const Mw=ac(Bw),Fw="_boks_nm7fe_1",Lw="_harBorderLeft_nm7fe_8",jw="_harBorderTop_nm7fe_12",Dw={boks:Fw,harBorderLeft:Lw,harBorderTop:jw};Mw.bind(Dw);var Ko={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Sg;function Cw(){return Sg||(Sg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var l="",u=0;u<arguments.length;u++){var f=arguments[u];f&&(l=s(l,t(f)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var f in l)i.call(l,f)&&l[f]&&(u=s(u,f));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Ko)),Ko.exports}Cw();function Vw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ig={exports:{}},ka={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function Hw(){if(xg)return ka;xg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:l}}return ka.Fragment=i,ka.jsx=r,ka.jsxs=r,ka}var Ng;function Gw(){return Ng||(Ng=1,Ig.exports=Hw()),Ig.exports}var Cr=Gw();const Uw="_autocompleteSuggestion__substring_uvuzd_1",$w="_autocompleteSuggestion__inner_uvuzd_4",_a={autocompleteSuggestion__substring:Uw,autocompleteSuggestion__inner:$w,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_uvuzd_12"};class Kw extends q.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:r}=this.state;i(r)}onMouseMove(){const{setSuggestionIndex:i,index:r}=this.props;i(r)}render(){const{match:i,active:r,avoidBlur:t,id:s}=this.props,{value:l}=this.state.value,u=l.toLowerCase().startsWith(i.toLowerCase());return Cr.jsx("li",{id:s,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:u?Cr.jsxs("span",{className:`${_a.autocompleteSuggestion__inner} ${r?_a["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,i.length),Cr.jsx("span",{className:_a.autocompleteSuggestion__substring,children:l.substring(i.length)})]}):Cr.jsx("span",{className:`${_a.autocompleteSuggestion__inner} ${r?_a["autocompleteSuggestion--active"]:""}`,children:l})})}}const Yw="_autocomplete_cj8jr_1",Ww="_autocomplete__suggestions_cj8jr_27",Yo={autocomplete:Yw,autocomplete__suggestions:Ww,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_cj8jr_31"};class rO extends q.Component{input;inputRef;constructor(i){super(i),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(i)}onSearchButtonClick(i){const{onSearchButtonClick:r}=this.props;i.preventDefault(),r&&r()}onKeyDown(i){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:t}=this.state;const{suggestions:s}=this.props,l=t>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:l&&r&&this.setValue(s[t]);break;case 13:l&&r?(i.preventDefault(),this.setValue(s[t])):r&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(i.preventDefault(),t=t-1===-2?-1:t-1,this.setState({activeSuggestionIndex:t}));break;case 40:r&&(i.preventDefault(),t=t+1===s.length?s.length-1:t+1,this.setState({activeSuggestionIndex:t}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:t}=this.state;t&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:r,ariaLabel:t,placeholder:s,value:l,name:u,shouldFocusOnMount:f,isLoading:c}=this.props,{activeSuggestionIndex:m,setAriaActiveDescendant:v,hasFocus:b,shouldShowSuggestions:y}=this.state,k=b&&y&&i.length>0,x=v&&m>-1?`${r}-item-${m}`:void 0;return Cr.jsxs("div",{className:`${Yo.autocomplete} autocomplete`,"aria-expanded":k,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[Cr.jsx(al,{variant:"primary",id:r,name:u,"aria-label":t,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":x,placeholder:s,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:A=>{this.inputRef=A},className:"typo-normal",autoFocus:f,label:t,hideLabel:!0,children:Cr.jsx(al.Button,{loading:c,onClick:this.onSearchButtonClick})}),Cr.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:k?Yo.autocomplete__suggestions:Yo["autocomplete__suggestions--hidden"],children:k&&i.map((A,_)=>Cr.jsx(Kw,{id:`${r}-item-${_}`,index:_,value:A,match:l,active:_===m,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},A.key))})]})}}var ll=function(e,i){return ll=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])},ll(e,i)};function hr(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");ll(e,i);function r(){this.constructor=e}e.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}var ge=function(){return ge=Object.assign||function(e){for(var i,r=1,t=arguments.length;r<t;r++){i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},ge.apply(this,arguments)};function gs(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r}function Ar(e,i,r){if(arguments.length===2)for(var t=0,s=i.length,l;t<s;t++)(l||!(t in i))&&(l||(l=Array.prototype.slice.call(i,0,t)),l[t]=i[t]);return e.concat(l||Array.prototype.slice.call(i))}function kr(e,i){var r=i&&i.cache?i.cache:nR,t=i&&i.serializer?i.serializer:Qw,s=i&&i.strategy?i.strategy:Zw;return s(e,{cache:r,serializer:t})}function zw(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Xw(e,i,r,t){var s=zw(t)?t:r(t),l=i.get(s);return typeof l>"u"&&(l=e.call(this,t),i.set(s,l)),l}function nm(e,i,r){var t=Array.prototype.slice.call(arguments,3),s=r(t),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,t),i.set(s,l)),l}function rm(e,i,r,t,s){return r.bind(i,e,t,s)}function Zw(e,i){var r=e.length===1?Xw:nm;return rm(e,this,r,i.cache.create(),i.serializer)}function Jw(e,i){return rm(e,this,nm,i.cache.create(),i.serializer)}var Qw=function(){return JSON.stringify(arguments)},eR=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,r){this.cache[i]=r},e}(),nR={create:function(){return new eR}},_r={variadic:Jw},xe;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(xe||(xe={}));var ze;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(ze||(ze={}));var $t;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})($t||($t={}));function qg(e){return e.type===ze.literal}function rR(e){return e.type===ze.argument}function tm(e){return e.type===ze.number}function am(e){return e.type===ze.date}function im(e){return e.type===ze.time}function sm(e){return e.type===ze.select}function om(e){return e.type===ze.plural}function tR(e){return e.type===ze.pound}function lm(e){return e.type===ze.tag}function um(e){return!!(e&&typeof e=="object"&&e.type===$t.number)}function ul(e){return!!(e&&typeof e=="object"&&e.type===$t.dateTime)}var dm=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,aR=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function iR(e){var i={};return e.replace(aR,function(r){var t=r.length;switch(r[0]){case"G":i.era=t===4?"long":t===5?"narrow":"short";break;case"y":i.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][t-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][t-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][t-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][t-1];break;case"s":i.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var sR=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function oR(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(sR).filter(function(y){return y.length>0}),r=[],t=0,s=i;t<s.length;t++){var l=s[t],u=l.split("/");if(u.length===0)throw new Error("Invalid number skeleton");for(var f=u[0],c=u.slice(1),m=0,v=c;m<v.length;m++){var b=v[m];if(b.length===0)throw new Error("Invalid number skeleton")}r.push({stem:f,options:c})}return r}function lR(e){return e.replace(/^(.*?)-/,"")}var Bg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,fm=/^(@+)?(\+|#+)?[rs]?$/g,uR=/(\*)(0+)|(#+)(0+)|(0+)/g,gm=/^(0+)$/;function Mg(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(fm,function(r,t,s){return typeof s!="string"?(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length):s==="+"?i.minimumSignificantDigits=t.length:t[0]==="#"?i.maximumSignificantDigits=t.length:(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length+(typeof s=="string"?s.length:0)),""}),i}function cm(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function dR(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var r=e.slice(0,2);if(r==="+!"?(i.signDisplay="always",e=e.slice(2)):r==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!gm.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Fg(e){var i={},r=cm(e);return r||i}function fR(e){for(var i={},r=0,t=e;r<t.length;r++){var s=t[r];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=lR(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ge(ge(ge({},i),{notation:"scientific"}),s.options.reduce(function(c,m){return ge(ge({},c),Fg(m))},{}));continue;case"engineering":i=ge(ge(ge({},i),{notation:"engineering"}),s.options.reduce(function(c,m){return ge(ge({},c),Fg(m))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(uR,function(c,m,v,b,y,k){if(m)i.minimumIntegerDigits=v.length;else{if(b&&y)throw new Error("We currently do not support maximum integer digits");if(k)throw new Error("We currently do not support exact integer digits")}return""});continue}if(gm.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Bg.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Bg,function(c,m,v,b,y,k){return v==="*"?i.minimumFractionDigits=m.length:b&&b[0]==="#"?i.maximumFractionDigits=b.length:y&&k?(i.minimumFractionDigits=y.length,i.maximumFractionDigits=y.length+k.length):(i.minimumFractionDigits=m.length,i.maximumFractionDigits=m.length),""});var l=s.options[0];l==="w"?i=ge(ge({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ge(ge({},i),Mg(l)));continue}if(fm.test(s.stem)){i=ge(ge({},i),Mg(s.stem));continue}var u=cm(s.stem);u&&(i=ge(ge({},i),u));var f=dR(s.stem);f&&(i=ge(ge({},i),f))}return i}var Li={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function gR(e,i){for(var r="",t=0;t<e.length;t++){var s=e.charAt(t);if(s==="j"){for(var l=0;t+1<e.length&&e.charAt(t+1)===s;)l++,t++;var u=1+(l&1),f=l<2?1:3+(l>>1),c="a",m=cR(i);for((m=="H"||m=="k")&&(f=0);f-- >0;)r+=c;for(;u-- >0;)r=m+r}else s==="J"?r+="H":r+=s}return r}function cR(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,t;r!=="root"&&(t=e.maximize().region);var s=Li[t||""]||Li[r||""]||Li["".concat(r,"-001")]||Li["001"];return s[0]}var Wo,mR=new RegExp("^".concat(dm.source,"*")),vR=new RegExp("".concat(dm.source,"*$"));function qe(e,i){return{start:e,end:i}}var hR=!!String.prototype.startsWith&&"_a".startsWith("a",1),pR=!!String.fromCodePoint,bR=!!Object.fromEntries,yR=!!String.prototype.codePointAt,kR=!!String.prototype.trimStart,_R=!!String.prototype.trimEnd,AR=!!Number.isSafeInteger,TR=AR?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},dl=!0;try{var ER=vm("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");dl=((Wo=ER.exec("a"))===null||Wo===void 0?void 0:Wo[0])==="a"}catch{dl=!1}var Lg=hR?function(e,i,r){return e.startsWith(i,r)}:function(e,i,r){return e.slice(r,r+i.length)===i},fl=pR?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r="",t=e.length,s=0,l;t>s;){if(l=e[s++],l>1114111)throw RangeError(l+" is not a valid code point");r+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return r},jg=bR?Object.fromEntries:function(e){for(var i={},r=0,t=e;r<t.length;r++){var s=t[r],l=s[0],u=s[1];i[l]=u}return i},mm=yR?function(e,i){return e.codePointAt(i)}:function(e,i){var r=e.length;if(!(i<0||i>=r)){var t=e.charCodeAt(i),s;return t<55296||t>56319||i+1===r||(s=e.charCodeAt(i+1))<56320||s>57343?t:(t-55296<<10)+(s-56320)+65536}},wR=kR?function(e){return e.trimStart()}:function(e){return e.replace(mR,"")},RR=_R?function(e){return e.trimEnd()}:function(e){return e.replace(vR,"")};function vm(e,i){return new RegExp(e,i)}var gl;if(dl){var Dg=vm("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");gl=function(e,i){var r;Dg.lastIndex=i;var t=Dg.exec(e);return(r=t[1])!==null&&r!==void 0?r:""}}else gl=function(e,i){for(var r=[];;){var t=mm(e,i);if(t===void 0||hm(t)||IR(t))break;r.push(t),i+=t>=65536?2:1}return fl.apply(void 0,r)};var PR=function(){function e(i,r){r===void 0&&(r={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,r,t){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var u=this.parseArgument(i,t);if(u.err)return u;s.push(u.val)}else{if(l===125&&i>0)break;if(l===35&&(r==="plural"||r==="selectordinal")){var f=this.clonePosition();this.bump(),s.push({type:ze.pound,location:qe(f,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(xe.UNMATCHED_CLOSING_TAG,qe(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&cl(this.peek()||0)){var u=this.parseTag(i,r);if(u.err)return u;s.push(u.val)}else{var u=this.parseLiteral(i,r);if(u.err)return u;s.push(u.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,r){var t=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:ze.literal,value:"<".concat(s,"/>"),location:qe(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,r,!0);if(l.err)return l;var u=l.val,f=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!cl(this.char()))return this.error(xe.INVALID_TAG,qe(f,this.clonePosition()));var c=this.clonePosition(),m=this.parseTagName();return s!==m?this.error(xe.UNMATCHED_CLOSING_TAG,qe(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:ze.tag,value:s,children:u,location:qe(t,this.clonePosition())},err:null}:this.error(xe.INVALID_TAG,qe(f,this.clonePosition())))}else return this.error(xe.UNCLOSED_TAG,qe(t,this.clonePosition()))}else return this.error(xe.INVALID_TAG,qe(t,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&SR(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,r){for(var t=this.clonePosition(),s="";;){var l=this.tryParseQuote(r);if(l){s+=l;continue}var u=this.tryParseUnquoted(i,r);if(u){s+=u;continue}var f=this.tryParseLeftAngleBracket();if(f){s+=f;continue}break}var c=qe(t,this.clonePosition());return{val:{type:ze.literal,value:s,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!OR(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(t);this.bump()}return fl.apply(void 0,r)},e.prototype.tryParseUnquoted=function(i,r){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(r==="plural"||r==="selectordinal")||t===125&&i>0?null:(this.bump(),fl(t))},e.prototype.parseArgument=function(i,r){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(xe.EXPECT_ARGUMENT_CLOSING_BRACE,qe(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(xe.EMPTY_ARGUMENT,qe(t,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(xe.MALFORMED_ARGUMENT,qe(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(xe.EXPECT_ARGUMENT_CLOSING_BRACE,qe(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:ze.argument,value:s,location:qe(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(xe.EXPECT_ARGUMENT_CLOSING_BRACE,qe(t,this.clonePosition())):this.parseArgumentOptions(i,r,s,t);default:return this.error(xe.MALFORMED_ARGUMENT,qe(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),r=this.offset(),t=gl(this.message,r),s=r+t.length;this.bumpTo(s);var l=this.clonePosition(),u=qe(i,l);return{value:t,location:u}},e.prototype.parseArgumentOptions=function(i,r,t,s){var l,u=this.clonePosition(),f=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(f){case"":return this.error(xe.EXPECT_ARGUMENT_TYPE,qe(u,c));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var v=this.clonePosition(),b=this.parseSimpleArgStyleIfPossible();if(b.err)return b;var y=RR(b.val);if(y.length===0)return this.error(xe.EXPECT_ARGUMENT_STYLE,qe(this.clonePosition(),this.clonePosition()));var k=qe(v,this.clonePosition());m={style:y,styleLocation:k}}var x=this.tryParseArgumentClose(s);if(x.err)return x;var A=qe(s,this.clonePosition());if(m&&Lg(m?.style,"::",0)){var _=wR(m.style.slice(2));if(f==="number"){var b=this.parseNumberSkeletonFromString(_,m.styleLocation);return b.err?b:{val:{type:ze.number,value:t,location:A,style:b.val},err:null}}else{if(_.length===0)return this.error(xe.EXPECT_DATE_TIME_SKELETON,A);var R=_;this.locale&&(R=gR(_,this.locale));var y={type:$t.dateTime,pattern:R,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?iR(R):{}},S=f==="date"?ze.date:ze.time;return{val:{type:S,value:t,location:A,style:y},err:null}}}return{val:{type:f==="number"?ze.number:f==="date"?ze.date:ze.time,value:t,location:A,style:(l=m?.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var P=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(xe.EXPECT_SELECT_ARGUMENT_OPTIONS,qe(P,ge({},P)));this.bumpSpace();var D=this.parseIdentifierIfPossible(),I=0;if(f!=="select"&&D.value==="offset"){if(!this.bumpIf(":"))return this.error(xe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,qe(this.clonePosition(),this.clonePosition()));this.bumpSpace();var b=this.tryParseDecimalInteger(xe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,xe.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(b.err)return b;this.bumpSpace(),D=this.parseIdentifierIfPossible(),I=b.val}var H=this.tryParsePluralOrSelectOptions(i,f,r,D);if(H.err)return H;var x=this.tryParseArgumentClose(s);if(x.err)return x;var j=qe(s,this.clonePosition());return f==="select"?{val:{type:ze.select,value:t,options:jg(H.val),location:j},err:null}:{val:{type:ze.plural,value:t,options:jg(H.val),offset:I,pluralType:f==="plural"?"cardinal":"ordinal",location:j},err:null}}default:return this.error(xe.INVALID_ARGUMENT_TYPE,qe(u,c))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(xe.EXPECT_ARGUMENT_CLOSING_BRACE,qe(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,r=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(xe.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,qe(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,r){var t=[];try{t=oR(i)}catch{return this.error(xe.INVALID_NUMBER_SKELETON,r)}return{val:{type:$t.number,tokens:t,location:r,parsedOptions:this.shouldParseSkeletons?fR(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,r,t,s){for(var l,u=!1,f=[],c=new Set,m=s.value,v=s.location;;){if(m.length===0){var b=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var y=this.tryParseDecimalInteger(xe.EXPECT_PLURAL_ARGUMENT_SELECTOR,xe.INVALID_PLURAL_ARGUMENT_SELECTOR);if(y.err)return y;v=qe(b,this.clonePosition()),m=this.message.slice(b.offset,this.offset())}else break}if(c.has(m))return this.error(r==="select"?xe.DUPLICATE_SELECT_ARGUMENT_SELECTOR:xe.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,v);m==="other"&&(u=!0),this.bumpSpace();var k=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?xe.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:xe.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,qe(this.clonePosition(),this.clonePosition()));var x=this.parseMessage(i+1,r,t);if(x.err)return x;var A=this.tryParseArgumentClose(k);if(A.err)return A;f.push([m,{value:x.val,location:qe(k,this.clonePosition())}]),c.add(m),this.bumpSpace(),l=this.parseIdentifierIfPossible(),m=l.value,v=l.location}return f.length===0?this.error(r==="select"?xe.EXPECT_SELECT_ARGUMENT_SELECTOR:xe.EXPECT_PLURAL_ARGUMENT_SELECTOR,qe(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!u?this.error(xe.MISSING_OTHER_CLAUSE,qe(this.clonePosition(),this.clonePosition())):{val:f,err:null}},e.prototype.tryParseDecimalInteger=function(i,r){var t=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var l=!1,u=0;!this.isEOF();){var f=this.char();if(f>=48&&f<=57)l=!0,u=u*10+(f-48),this.bump();else break}var c=qe(s,this.clonePosition());return l?(u*=t,TR(u)?{val:u,err:null}:this.error(r,c)):this.error(i,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var r=mm(this.message,i);if(r===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(i,r){return{val:null,err:{kind:i,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Lg(this.message,i,this.offset())){for(var r=0;r<i.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var r=this.offset(),t=this.message.indexOf(i,r);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var r=this.offset();if(r===i)break;if(r>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&hm(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),r=this.offset(),t=this.message.charCodeAt(r+(i>=65536?2:1));return t??null},e}();function cl(e){return e>=97&&e<=122||e>=65&&e<=90}function OR(e){return cl(e)||e===47}function SR(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function hm(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function IR(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function ml(e){e.forEach(function(i){if(delete i.location,sm(i)||om(i))for(var r in i.options)delete i.options[r].location,ml(i.options[r].value);else tm(i)&&um(i.style)||(am(i)||im(i))&&ul(i.style)?delete i.style.location:lm(i)&&ml(i.children)})}function xR(e,i){i===void 0&&(i={}),i=ge({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var r=new PR(e,i).parse();if(r.err){var t=SyntaxError(xe[r.err.kind]);throw t.location=r.err.location,t.originalMessage=r.err.message,t}return i?.captureLocation||ml(r.val),r.val}var Rr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Rr||(Rr={}));var nt=function(e){hr(i,e);function i(r,t,s){var l=e.call(this,r)||this;return l.code=t,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Cg=function(e){hr(i,e);function i(r,t,s,l){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(t,'". Options are "').concat(Object.keys(s).join('", "'),'"'),Rr.INVALID_VALUE,l)||this}return i}(nt),NR=function(e){hr(i,e);function i(r,t,s){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(t),Rr.INVALID_VALUE,s)||this}return i}(nt),qR=function(e){hr(i,e);function i(r,t){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(t,'"'),Rr.MISSING_VALUE,t)||this}return i}(nt),wn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(wn||(wn={}));function BR(e){return e.length<2?e:e.reduce(function(i,r){var t=i[i.length-1];return!t||t.type!==wn.literal||r.type!==wn.literal?i.push(r):t.value+=r.value,i},[])}function pm(e){return typeof e=="function"}function Ki(e,i,r,t,s,l,u){if(e.length===1&&qg(e[0]))return[{type:wn.literal,value:e[0].value}];for(var f=[],c=0,m=e;c<m.length;c++){var v=m[c];if(qg(v)){f.push({type:wn.literal,value:v.value});continue}if(tR(v)){typeof l=="number"&&f.push({type:wn.literal,value:r.getNumberFormat(i).format(l)});continue}var b=v.value;if(!(s&&b in s))throw new qR(b,u);var y=s[b];if(rR(v)){(!y||typeof y=="string"||typeof y=="number")&&(y=typeof y=="string"||typeof y=="number"?String(y):""),f.push({type:typeof y=="string"?wn.literal:wn.object,value:y});continue}if(am(v)){var k=typeof v.style=="string"?t.date[v.style]:ul(v.style)?v.style.parsedOptions:void 0;f.push({type:wn.literal,value:r.getDateTimeFormat(i,k).format(y)});continue}if(im(v)){var k=typeof v.style=="string"?t.time[v.style]:ul(v.style)?v.style.parsedOptions:t.time.medium;f.push({type:wn.literal,value:r.getDateTimeFormat(i,k).format(y)});continue}if(tm(v)){var k=typeof v.style=="string"?t.number[v.style]:um(v.style)?v.style.parsedOptions:void 0;k&&k.scale&&(y=y*(k.scale||1)),f.push({type:wn.literal,value:r.getNumberFormat(i,k).format(y)});continue}if(lm(v)){var x=v.children,A=v.value,_=s[A];if(!pm(_))throw new NR(A,"function",u);var R=Ki(x,i,r,t,s,l),S=_(R.map(function(I){return I.value}));Array.isArray(S)||(S=[S]),f.push.apply(f,S.map(function(I){return{type:typeof I=="string"?wn.literal:wn.object,value:I}}))}if(sm(v)){var P=v.options[y]||v.options.other;if(!P)throw new Cg(v.value,y,Object.keys(v.options),u);f.push.apply(f,Ki(P.value,i,r,t,s));continue}if(om(v)){var P=v.options["=".concat(y)];if(!P){if(!Intl.PluralRules)throw new nt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Rr.MISSING_INTL_API,u);var D=r.getPluralRules(i,{type:v.pluralType}).select(y-(v.offset||0));P=v.options[D]||v.options.other}if(!P)throw new Cg(v.value,y,Object.keys(v.options),u);f.push.apply(f,Ki(P.value,i,r,t,s,y-(v.offset||0)));continue}}return BR(f)}function MR(e,i){return i?ge(ge(ge({},e||{}),i||{}),Object.keys(e).reduce(function(r,t){return r[t]=ge(ge({},e[t]),i[t]||{}),r},{})):e}function FR(e,i){return i?Object.keys(e).reduce(function(r,t){return r[t]=MR(e[t],i[t]),r},ge({},e)):e}function zo(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function LR(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:kr(function(){for(var i,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((i=Intl.NumberFormat).bind.apply(i,Ar([void 0],r,!1)))},{cache:zo(e.number),strategy:_r.variadic}),getDateTimeFormat:kr(function(){for(var i,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((i=Intl.DateTimeFormat).bind.apply(i,Ar([void 0],r,!1)))},{cache:zo(e.dateTime),strategy:_r.variadic}),getPluralRules:kr(function(){for(var i,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((i=Intl.PluralRules).bind.apply(i,Ar([void 0],r,!1)))},{cache:zo(e.pluralRules),strategy:_r.variadic})}}var bm=function(){function e(i,r,t,s){r===void 0&&(r=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var m=l.formatToParts(c);if(m.length===1)return m[0].value;var v=m.reduce(function(b,y){return!b.length||y.type!==wn.literal||typeof b[b.length-1]!="string"?b.push(y.value):b[b.length-1]+=y.value,b},[]);return v.length<=1?v[0]||"":v},this.formatToParts=function(c){return Ki(l.ast,l.locales,l.formatters,l.formats,c,void 0,l.message)},this.resolvedOptions=function(){var c;return{locale:((c=l.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=s||{};u.formatters;var f=gs(u,["formatters"]);this.ast=e.__parse(i,ge(ge({},f),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=FR(e.formats,t),this.formatters=s&&s.formatters||LR(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(i);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=xR,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),At;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(At||(At={}));var Va=function(e){hr(i,e);function i(r,t,s){var l=this,u=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(t,`
`).concat(u?`
`.concat(u.message,`
`).concat(u.stack):""))||this,l.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),jR=function(e){hr(i,e);function i(r,t){return e.call(this,At.UNSUPPORTED_FORMATTER,r,t)||this}return i}(Va),DR=function(e){hr(i,e);function i(r,t){return e.call(this,At.INVALID_CONFIG,r,t)||this}return i}(Va),Vg=function(e){hr(i,e);function i(r,t){return e.call(this,At.MISSING_DATA,r,t)||this}return i}(Va),ar=function(e){hr(i,e);function i(r,t,s){var l=e.call(this,At.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(t,`
`),s)||this;return l.locale=t,l}return i}(Va),Xo=function(e){hr(i,e);function i(r,t,s,l){var u=e.call(this,"".concat(r,`
MessageID: `).concat(s?.id,`
Default Message: `).concat(s?.defaultMessage,`
Description: `).concat(s?.description,`
`),t,l)||this;return u.descriptor=s,u.locale=t,u}return i}(ar),CR=function(e){hr(i,e);function i(r,t){var s=e.call(this,At.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(t,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(l){var u;return(u=l.value)!==null&&u!==void 0?u:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=r,s}return i}(Va);function VR(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function zt(e,i,r){return r===void 0&&(r={}),i.reduce(function(t,s){return s in e?t[s]=e[s]:s in r&&(t[s]=r[s]),t},{})}var HR=function(e){},GR=function(e){},ym={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:HR,onWarn:GR};function km(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function ct(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function UR(e){e===void 0&&(e=km());var i=Intl.RelativeTimeFormat,r=Intl.ListFormat,t=Intl.DisplayNames,s=kr(function(){for(var f,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((f=Intl.DateTimeFormat).bind.apply(f,Ar([void 0],c,!1)))},{cache:ct(e.dateTime),strategy:_r.variadic}),l=kr(function(){for(var f,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((f=Intl.NumberFormat).bind.apply(f,Ar([void 0],c,!1)))},{cache:ct(e.number),strategy:_r.variadic}),u=kr(function(){for(var f,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((f=Intl.PluralRules).bind.apply(f,Ar([void 0],c,!1)))},{cache:ct(e.pluralRules),strategy:_r.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:kr(function(f,c,m,v){return new bm(f,c,m,ge({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:u}},v||{}))},{cache:ct(e.message),strategy:_r.variadic}),getRelativeTimeFormat:kr(function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return new(i.bind.apply(i,Ar([void 0],f,!1)))},{cache:ct(e.relativeTime),strategy:_r.variadic}),getPluralRules:u,getListFormat:kr(function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return new(r.bind.apply(r,Ar([void 0],f,!1)))},{cache:ct(e.list),strategy:_r.variadic}),getDisplayNames:kr(function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return new(t.bind.apply(t,Ar([void 0],f,!1)))},{cache:ct(e.displayNames),strategy:_r.variadic})}}function Kl(e,i,r,t){var s=e&&e[i],l;if(s&&(l=s[r]),l)return l;t(new jR("No ".concat(i," format named: ").concat(r)))}function ji(e,i){return Object.keys(e).reduce(function(r,t){return r[t]=ge({timeZone:i},e[t]),r},{})}function Hg(e,i){var r=Object.keys(ge(ge({},e),i));return r.reduce(function(t,s){return t[s]=ge(ge({},e[s]||{}),i[s]||{}),t},{})}function Gg(e,i){if(!i)return e;var r=bm.formats;return ge(ge(ge({},r),e),{date:Hg(ji(r.date,i),ji(e.date||{},i)),time:Hg(ji(r.time,i),ji(e.time||{},i))})}var vl=function(e,i,r,t,s){var l=e.locale,u=e.formats,f=e.messages,c=e.defaultLocale,m=e.defaultFormats,v=e.fallbackOnEmptyString,b=e.onError,y=e.timeZone,k=e.defaultRichTextElements;r===void 0&&(r={id:""});var x=r.id,A=r.defaultMessage;VR(!!x,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var _=String(x),R=f&&Object.prototype.hasOwnProperty.call(f,_)&&f[_];if(Array.isArray(R)&&R.length===1&&R[0].type===ze.literal)return R[0].value;if(!t&&R&&typeof R=="string"&&!k)return R.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=ge(ge({},k),t||{}),u=Gg(u,y),m=Gg(m,y),!R){if(v===!1&&R==="")return R;if((!A||l&&l.toLowerCase()!==c.toLowerCase())&&b(new CR(r,l)),A)try{var S=i.getMessageFormat(A,c,m,s);return S.format(t)}catch(P){return b(new Xo('Error formatting default message for: "'.concat(_,'", rendering default message verbatim'),l,r,P)),typeof A=="string"?A:_}return _}try{var S=i.getMessageFormat(R,l,u,ge({formatters:i},s||{}));return S.format(t)}catch(P){b(new Xo('Error formatting message: "'.concat(_,'", using ').concat(A?"default message":"id"," as fallback."),l,r,P))}if(A)try{var S=i.getMessageFormat(A,c,m,s);return S.format(t)}catch(P){b(new Xo('Error formatting the default message for: "'.concat(_,'", rendering message verbatim'),l,r,P))}return typeof R=="string"?R:typeof A=="string"?A:_},$R=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ha(e,i,r,t){var s=e.locale,l=e.formats,u=e.onError,f=e.timeZone;t===void 0&&(t={});var c=t.format,m=ge(ge({},f&&{timeZone:f}),c&&Kl(l,i,c,u)),v=zt(t,$R,m);return i==="time"&&!v.hour&&!v.minute&&!v.second&&!v.timeStyle&&!v.dateStyle&&(v=ge(ge({},v),{hour:"numeric",minute:"numeric"})),r(s,v)}function KR(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],l=r[1],u=l===void 0?{}:l,f=typeof s=="string"?new Date(s||0):s;try{return Ha(e,"date",i,u).format(f)}catch(c){e.onError(new ar("Error formatting date.",e.locale,c))}return String(f)}function YR(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],l=r[1],u=l===void 0?{}:l,f=typeof s=="string"?new Date(s||0):s;try{return Ha(e,"time",i,u).format(f)}catch(c){e.onError(new ar("Error formatting time.",e.locale,c))}return String(f)}function WR(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],l=r[1],u=r[2],f=u===void 0?{}:u,c=typeof s=="string"?new Date(s||0):s,m=typeof l=="string"?new Date(l||0):l;try{return Ha(e,"dateTimeRange",i,f).formatRange(c,m)}catch(v){e.onError(new ar("Error formatting date time range.",e.locale,v))}return String(c)}function zR(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],l=r[1],u=l===void 0?{}:l,f=typeof s=="string"?new Date(s||0):s;try{return Ha(e,"date",i,u).formatToParts(f)}catch(c){e.onError(new ar("Error formatting date.",e.locale,c))}return[]}function XR(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],l=r[1],u=l===void 0?{}:l,f=typeof s=="string"?new Date(s||0):s;try{return Ha(e,"time",i,u).formatToParts(f)}catch(c){e.onError(new ar("Error formatting time.",e.locale,c))}return[]}var ZR=["style","type","fallback","languageDisplay"];function JR(e,i,r,t){var s=e.locale,l=e.onError,u=Intl.DisplayNames;u||l(new nt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Rr.MISSING_INTL_API));var f=zt(t,ZR);try{return i(s,f).of(r)}catch(c){l(new ar("Error formatting display name.",s,c))}}var QR=["type","style"],Ug=Date.now();function eP(e){return"".concat(Ug,"_").concat(e,"_").concat(Ug)}function nP(e,i,r,t){t===void 0&&(t={});var s=_m(e,i,r,t).reduce(function(l,u){var f=u.value;return typeof f!="string"?l.push(f):typeof l[l.length-1]=="string"?l[l.length-1]+=f:l.push(f),l},[]);return s.length===1?s[0]:s.length===0?"":s}function _m(e,i,r,t){var s=e.locale,l=e.onError;t===void 0&&(t={});var u=Intl.ListFormat;u||l(new nt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Rr.MISSING_INTL_API));var f=zt(t,QR);try{var c={},m=r.map(function(v,b){if(typeof v=="object"){var y=eP(b);return c[y]=v,y}return String(v)});return i(s,f).formatToParts(m).map(function(v){return v.type==="literal"?v:ge(ge({},v),{value:c[v.value]||v.value})})}catch(v){l(new ar("Error formatting list.",s,v))}return r}var rP=["type"];function tP(e,i,r,t){var s=e.locale,l=e.onError;t===void 0&&(t={}),Intl.PluralRules||l(new nt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Rr.MISSING_INTL_API));var u=zt(t,rP);try{return i(s,u).select(r)}catch(f){l(new ar("Error formatting plural.",s,f))}return"other"}var aP=["numeric","style"];function iP(e,i,r){var t=e.locale,s=e.formats,l=e.onError;r===void 0&&(r={});var u=r.format,f=!!u&&Kl(s,"relative",u,l)||{},c=zt(r,aP,f);return i(t,c)}function sP(e,i,r,t,s){s===void 0&&(s={}),t||(t="second");var l=Intl.RelativeTimeFormat;l||e.onError(new nt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Rr.MISSING_INTL_API));try{return iP(e,i,s).format(r,t)}catch(u){e.onError(new ar("Error formatting relative time.",e.locale,u))}return String(r)}var oP=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Am(e,i,r){var t=e.locale,s=e.formats,l=e.onError;r===void 0&&(r={});var u=r.format,f=u&&Kl(s,"number",u,l)||{},c=zt(r,oP,f);return i(t,c)}function lP(e,i,r,t){t===void 0&&(t={});try{return Am(e,i,t).format(r)}catch(s){e.onError(new ar("Error formatting number.",e.locale,s))}return String(r)}function uP(e,i,r,t){t===void 0&&(t={});try{return Am(e,i,t).formatToParts(r)}catch(s){e.onError(new ar("Error formatting number.",e.locale,s))}return[]}function dP(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function fP(e){e.onWarn&&e.defaultRichTextElements&&dP(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function gP(e,i){var r=UR(i),t=ge(ge({},ym),e),s=t.locale,l=t.defaultLocale,u=t.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&u?u(new Vg('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&u&&u(new Vg('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(u&&u(new DR('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),fP(t),ge(ge({},t),{formatters:r,formatNumber:lP.bind(null,t,r.getNumberFormat),formatNumberToParts:uP.bind(null,t,r.getNumberFormat),formatRelativeTime:sP.bind(null,t,r.getRelativeTimeFormat),formatDate:KR.bind(null,t,r.getDateTimeFormat),formatDateToParts:zR.bind(null,t,r.getDateTimeFormat),formatTime:YR.bind(null,t,r.getDateTimeFormat),formatDateTimeRange:WR.bind(null,t,r.getDateTimeFormat),formatTimeToParts:XR.bind(null,t,r.getDateTimeFormat),formatPlural:tP.bind(null,t,r.getPluralRules),formatMessage:vl.bind(null,t,r),$t:vl.bind(null,t,r),formatList:nP.bind(null,t,r.getListFormat),formatListToParts:_m.bind(null,t,r.getListFormat),formatDisplayName:JR.bind(null,t,r.getDisplayNames)})}function cP(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function mP(e){cP(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var vP=ge(ge({},ym),{textComponent:E.Fragment}),hP={key:42},pP=function(e){return E.isValidElement(e)?E.createElement(E.Fragment,hP,e):e},bP=function(e){var i;return(i=E.Children.map(e,pP))!==null&&i!==void 0?i:[]};function yP(e){return function(i){return e(E.Children.toArray(i))}}var $g={exports:{}},Le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function kP(){if(Kg)return Le;Kg=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,v=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,k=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,A=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,R=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function P(I){if(typeof I=="object"&&I!==null){var H=I.$$typeof;switch(H){case i:switch(I=I.type,I){case c:case m:case t:case l:case s:case b:return I;default:switch(I=I&&I.$$typeof,I){case f:case v:case x:case k:case u:return I;default:return H}}case r:return H}}}function D(I){return P(I)===m}return Le.AsyncMode=c,Le.ConcurrentMode=m,Le.ContextConsumer=f,Le.ContextProvider=u,Le.Element=i,Le.ForwardRef=v,Le.Fragment=t,Le.Lazy=x,Le.Memo=k,Le.Portal=r,Le.Profiler=l,Le.StrictMode=s,Le.Suspense=b,Le.isAsyncMode=function(I){return D(I)||P(I)===c},Le.isConcurrentMode=D,Le.isContextConsumer=function(I){return P(I)===f},Le.isContextProvider=function(I){return P(I)===u},Le.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===i},Le.isForwardRef=function(I){return P(I)===v},Le.isFragment=function(I){return P(I)===t},Le.isLazy=function(I){return P(I)===x},Le.isMemo=function(I){return P(I)===k},Le.isPortal=function(I){return P(I)===r},Le.isProfiler=function(I){return P(I)===l},Le.isStrictMode=function(I){return P(I)===s},Le.isSuspense=function(I){return P(I)===b},Le.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===t||I===m||I===l||I===s||I===b||I===y||typeof I=="object"&&I!==null&&(I.$$typeof===x||I.$$typeof===k||I.$$typeof===u||I.$$typeof===f||I.$$typeof===v||I.$$typeof===_||I.$$typeof===R||I.$$typeof===S||I.$$typeof===A)},Le.typeOf=P,Le}var Yg;function _P(){return Yg||(Yg=1,$g.exports=kP()),$g.exports}var Zo,Wg;function AP(){if(Wg)return Zo;Wg=1;var e=_P(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=t,l[e.Memo]=s;function u(x){return e.isMemo(x)?s:l[x.$$typeof]||i}var f=Object.defineProperty,c=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,y=Object.prototype;function k(x,A,_){if(typeof A!="string"){if(y){var R=b(A);R&&R!==y&&k(x,R,_)}var S=c(A);m&&(S=S.concat(m(A)));for(var P=u(x),D=u(A),I=0;I<S.length;++I){var H=S[I];if(!r[H]&&!(_&&_[H])&&!(D&&D[H])&&!(P&&P[H])){var j=v(A,H);try{f(x,H,j)}catch{}}}}return x}return Zo=k,Zo}AP();var Yl=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=E.createContext(null)):E.createContext(null);Yl.Consumer;Yl.Provider;var TP=Yl;function Tm(){var e=E.useContext(TP);return mP(e),e}var hl;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(hl||(hl={}));var pl;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(pl||(pl={}));function Em(e){var i=function(r){var t=Tm(),s=r.value,l=r.children,u=gs(r,["value","children"]),f=typeof s=="string"?new Date(s||0):s,c=e==="formatDate"?t.formatDateToParts(f,u):t.formatTimeToParts(f,u);return l(c)};return i.displayName=pl[e],i}function Ga(e){var i=function(r){var t=Tm(),s=r.value,l=r.children,u=gs(r,["value","children"]),f=t[e](s,u);if(typeof l=="function")return l(f);var c=t.textComponent||E.Fragment;return E.createElement(c,null,f)};return i.displayName=hl[e],i}function wm(e){return e&&Object.keys(e).reduce(function(i,r){var t=e[r];return i[r]=pm(t)?yP(t):t,i},{})}var zg=function(e,i,r,t){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var u=wm(t),f=vl.apply(void 0,Ar([e,i,r,u],s,!1));return Array.isArray(f)?bP(f):f},EP=function(e,i){var r=e.defaultRichTextElements,t=gs(e,["defaultRichTextElements"]),s=wm(r),l=gP(ge(ge(ge({},vP),t),{defaultRichTextElements:s}),i),u={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ge(ge({},l),{formatMessage:zg.bind(null,u,l.formatters),$t:zg.bind(null,u,l.formatters)})};Ga("formatDate");Ga("formatTime");Ga("formatNumber");Ga("formatList");Ga("formatDisplayName");Em("formatDate");Em("formatTime");function Wl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bl={exports:{}},wP=bl.exports,Xg;function RP(){return Xg||(Xg=1,function(e,i){(function(r,t){e.exports=t()})(wP,function(){var r,t,s=1e3,l=6e4,u=36e5,f=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,v=2628e6,b=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:m,months:v,days:f,hours:u,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},k=function(H){return H instanceof D},x=function(H,j,C){return new D(H,C,j.$l)},A=function(H){return t.p(H)+"s"},_=function(H){return H<0},R=function(H){return _(H)?Math.ceil(H):Math.floor(H)},S=function(H){return Math.abs(H)},P=function(H,j){return H?_(H)?{negative:!0,format:""+S(H)+j}:{negative:!1,format:""+H+j}:{negative:!1,format:""}},D=function(){function H(C,K,ne){var ee=this;if(this.$d={},this.$l=ne,C===void 0&&(this.$ms=0,this.parseFromMilliseconds()),K)return x(C*y[A(K)],this);if(typeof C=="number")return this.$ms=C,this.parseFromMilliseconds(),this;if(typeof C=="object")return Object.keys(C).forEach(function(L){ee.$d[A(L)]=C[L]}),this.calMilliseconds(),this;if(typeof C=="string"){var G=C.match(b);if(G){var F=G.slice(2).map(function(L){return L!=null?Number(L):0});return this.$d.years=F[0],this.$d.months=F[1],this.$d.weeks=F[2],this.$d.days=F[3],this.$d.hours=F[4],this.$d.minutes=F[5],this.$d.seconds=F[6],this.calMilliseconds(),this}}return this}var j=H.prototype;return j.calMilliseconds=function(){var C=this;this.$ms=Object.keys(this.$d).reduce(function(K,ne){return K+(C.$d[ne]||0)*y[ne]},0)},j.parseFromMilliseconds=function(){var C=this.$ms;this.$d.years=R(C/m),C%=m,this.$d.months=R(C/v),C%=v,this.$d.days=R(C/f),C%=f,this.$d.hours=R(C/u),C%=u,this.$d.minutes=R(C/l),C%=l,this.$d.seconds=R(C/s),C%=s,this.$d.milliseconds=C},j.toISOString=function(){var C=P(this.$d.years,"Y"),K=P(this.$d.months,"M"),ne=+this.$d.days||0;this.$d.weeks&&(ne+=7*this.$d.weeks);var ee=P(ne,"D"),G=P(this.$d.hours,"H"),F=P(this.$d.minutes,"M"),L=this.$d.seconds||0;this.$d.milliseconds&&(L+=this.$d.milliseconds/1e3,L=Math.round(1e3*L)/1e3);var X=P(L,"S"),re=C.negative||K.negative||ee.negative||G.negative||F.negative||X.negative,Z=G.format||F.format||X.format?"T":"",W=(re?"-":"")+"P"+C.format+K.format+ee.format+Z+G.format+F.format+X.format;return W==="P"||W==="-P"?"P0D":W},j.toJSON=function(){return this.toISOString()},j.format=function(C){var K=C||"YYYY-MM-DDTHH:mm:ss",ne={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return K.replace(c,function(ee,G){return G||String(ne[ee])})},j.as=function(C){return this.$ms/y[A(C)]},j.get=function(C){var K=this.$ms,ne=A(C);return ne==="milliseconds"?K%=1e3:K=ne==="weeks"?R(K/y[ne]):this.$d[ne],K||0},j.add=function(C,K,ne){var ee;return ee=K?C*y[A(K)]:k(C)?C.$ms:x(C,this).$ms,x(this.$ms+ee*(ne?-1:1),this)},j.subtract=function(C,K){return this.add(C,K,!0)},j.locale=function(C){var K=this.clone();return K.$l=C,K},j.clone=function(){return x(this.$ms,this)},j.humanize=function(C){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!C)},j.valueOf=function(){return this.asMilliseconds()},j.milliseconds=function(){return this.get("milliseconds")},j.asMilliseconds=function(){return this.as("milliseconds")},j.seconds=function(){return this.get("seconds")},j.asSeconds=function(){return this.as("seconds")},j.minutes=function(){return this.get("minutes")},j.asMinutes=function(){return this.as("minutes")},j.hours=function(){return this.get("hours")},j.asHours=function(){return this.as("hours")},j.days=function(){return this.get("days")},j.asDays=function(){return this.as("days")},j.weeks=function(){return this.get("weeks")},j.asWeeks=function(){return this.as("weeks")},j.months=function(){return this.get("months")},j.asMonths=function(){return this.as("months")},j.years=function(){return this.get("years")},j.asYears=function(){return this.as("years")},H}(),I=function(H,j,C){return H.add(j.years()*C,"y").add(j.months()*C,"M").add(j.days()*C,"d").add(j.hours()*C,"h").add(j.minutes()*C,"m").add(j.seconds()*C,"s").add(j.milliseconds()*C,"ms")};return function(H,j,C){r=C,t=C().$utils(),C.duration=function(ee,G){var F=C.locale();return x(ee,{$l:F},G)},C.isDuration=k;var K=j.prototype.add,ne=j.prototype.subtract;j.prototype.add=function(ee,G){return k(ee)?I(this,ee,1):K.bind(this)(ee,G)},j.prototype.subtract=function(ee,G){return k(ee)?I(this,ee,-1):ne.bind(this)(ee,G)}}})}(bl)),bl.exports}var PP=RP();const OP=Wl(PP);var yl={exports:{}},SP=yl.exports,Zg;function IP(){return Zg||(Zg=1,function(e,i){(function(r,t){e.exports=t()})(SP,function(){var r="day";return function(t,s,l){var u=function(m){return m.add(4-m.isoWeekday(),r)},f=s.prototype;f.isoWeekYear=function(){return u(this).year()},f.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),r);var v,b,y,k,x=u(this),A=(v=this.isoWeekYear(),b=this.$u,y=(b?l.utc:l)().year(v).startOf("year"),k=4-y.isoWeekday(),y.isoWeekday()>4&&(k+=7),y.add(k,r));return x.diff(A,"week")+1},f.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var c=f.startOf;f.startOf=function(m,v){var b=this.$utils(),y=!!b.u(v)||v;return b.p(m)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(m,v)}}})}(yl)),yl.exports}var xP=IP();const NP=Wl(xP);var kl={exports:{}},qP=kl.exports,Jg;function BP(){return Jg||(Jg=1,function(e,i){(function(r,t){e.exports=t()})(qP,function(){var r="minute",t=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,u,f){var c=u.prototype;f.utc=function(A){var _={date:A,utc:!0,args:arguments};return new u(_)},c.utc=function(A){var _=f(this.toDate(),{locale:this.$L,utc:!0});return A?_.add(this.utcOffset(),r):_},c.local=function(){return f(this.toDate(),{locale:this.$L,utc:!1})};var m=c.parse;c.parse=function(A){A.utc&&(this.$u=!0),this.$utils().u(A.$offset)||(this.$offset=A.$offset),m.call(this,A)};var v=c.init;c.init=function(){if(this.$u){var A=this.$d;this.$y=A.getUTCFullYear(),this.$M=A.getUTCMonth(),this.$D=A.getUTCDate(),this.$W=A.getUTCDay(),this.$H=A.getUTCHours(),this.$m=A.getUTCMinutes(),this.$s=A.getUTCSeconds(),this.$ms=A.getUTCMilliseconds()}else v.call(this)};var b=c.utcOffset;c.utcOffset=function(A,_){var R=this.$utils().u;if(R(A))return this.$u?0:R(this.$offset)?b.call(this):this.$offset;if(typeof A=="string"&&(A=function(I){I===void 0&&(I="");var H=I.match(t);if(!H)return null;var j=(""+H[0]).match(s)||["-",0,0],C=j[0],K=60*+j[1]+ +j[2];return K===0?0:C==="+"?K:-K}(A),A===null))return this;var S=Math.abs(A)<=16?60*A:A,P=this;if(_)return P.$offset=S,P.$u=A===0,P;if(A!==0){var D=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(P=this.local().add(S+D,r)).$offset=S,P.$x.$localOffset=D}else P=this.utc();return P};var y=c.format;c.format=function(A){var _=A||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,_)},c.valueOf=function(){var A=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*A},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var k=c.toDate;c.toDate=function(A){return A==="s"&&this.$offset?f(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():k.call(this)};var x=c.diff;c.diff=function(A,_,R){if(A&&this.$u===A.$u)return x.call(this,A,_,R);var S=this.local(),P=f(A).local();return x.call(S,P,_,R)}}})}(kl)),kl.exports}var MP=BP();const FP=Wl(MP),LP=km(),cs=e=>EP({locale:"nb-NO",messages:e},LP),ms={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};cs(ms);var _l={exports:{}},jP=_l.exports,Qg;function DP(){return Qg||(Qg=1,function(e,i){(function(r,t){e.exports=t(Hr)})(jP,function(r){function t(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var s=t(r),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})}(_l)),_l.exports}DP();Hr.extend(FP);Hr.extend(NP);Hr.extend(OP);cs(ms);cs(ms);var ec={exports:{}},Aa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc;function CP(){if(nc)return Aa;nc=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:l}}return Aa.Fragment=i,Aa.jsx=r,Aa.jsxs=r,Aa}var rc;function VP(){return rc||(rc=1,ec.exports=CP()),ec.exports}VP();cs(ms);E.createContext({});var Al={exports:{}},HP=Al.exports,tc;function GP(){return tc||(tc=1,function(e,i){(function(r,t){e.exports=t()})(HP,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,u=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,c={},m=function(_){return(_=+_)+(_>68?1900:2e3)},v=function(_){return function(R){this[_]=+R}},b=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var S=R.match(/([+-]|\d\d)/g),P=60*S[1]+(+S[2]||0);return P===0?0:S[0]==="+"?-P:P}(_)}],y=function(_){var R=c[_];return R&&(R.indexOf?R:R.s.concat(R.f))},k=function(_,R){var S,P=c.meridiem;if(P){for(var D=1;D<=24;D+=1)if(_.indexOf(P(D,0,R))>-1){S=D>12;break}}else S=_===(R?"pm":"PM");return S},x={A:[f,function(_){this.afternoon=k(_,!1)}],a:[f,function(_){this.afternoon=k(_,!0)}],Q:[s,function(_){this.month=3*(_-1)+1}],S:[s,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[u,v("seconds")],ss:[u,v("seconds")],m:[u,v("minutes")],mm:[u,v("minutes")],H:[u,v("hours")],h:[u,v("hours")],HH:[u,v("hours")],hh:[u,v("hours")],D:[u,v("day")],DD:[l,v("day")],Do:[f,function(_){var R=c.ordinal,S=_.match(/\d+/);if(this.day=S[0],R)for(var P=1;P<=31;P+=1)R(P).replace(/\[|\]/g,"")===_&&(this.day=P)}],w:[u,v("week")],ww:[l,v("week")],M:[u,v("month")],MM:[l,v("month")],MMM:[f,function(_){var R=y("months"),S=(y("monthsShort")||R.map(function(P){return P.slice(0,3)})).indexOf(_)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[f,function(_){var R=y("months").indexOf(_)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,v("year")],YY:[l,function(_){this.year=m(_)}],YYYY:[/\d{4}/,v("year")],Z:b,ZZ:b};function A(_){var R,S;R=_,S=c&&c.formats;for(var P=(_=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(ne,ee,G){var F=G&&G.toUpperCase();return ee||S[G]||r[G]||S[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,X,re){return X||re.slice(1)})})).match(t),D=P.length,I=0;I<D;I+=1){var H=P[I],j=x[H],C=j&&j[0],K=j&&j[1];P[I]=K?{regex:C,parser:K}:H.replace(/^\[|\]$/g,"")}return function(ne){for(var ee={},G=0,F=0;G<D;G+=1){var L=P[G];if(typeof L=="string")F+=L.length;else{var X=L.regex,re=L.parser,Z=ne.slice(F),W=X.exec(Z)[0];re.call(ee,W),ne=ne.replace(W,"")}}return function(J){var de=J.afternoon;if(de!==void 0){var le=J.hours;de?le<12&&(J.hours+=12):le===12&&(J.hours=0),delete J.afternoon}}(ee),ee}}return function(_,R,S){S.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(m=_.parseTwoDigitYear);var P=R.prototype,D=P.parse;P.parse=function(I){var H=I.date,j=I.utc,C=I.args;this.$u=j;var K=C[1];if(typeof K=="string"){var ne=C[2]===!0,ee=C[3]===!0,G=ne||ee,F=C[2];ee&&(F=C[2]),c=this.$locale(),!ne&&F&&(c=S.Ls[F]),this.$d=function(Z,W,J,de){try{if(["x","X"].indexOf(W)>-1)return new Date((W==="X"?1e3:1)*Z);var le=A(W)(Z),ve=le.year,_e=le.month,_n=le.day,Ye=le.hours,Ve=le.minutes,He=le.seconds,Ee=le.milliseconds,Ne=le.zone,nn=le.week,Xe=new Date,Ze=_n||(ve||_e?1:Xe.getDate()),Pn=ve||Xe.getFullYear(),Ge=0;ve&&!_e||(Ge=_e>0?_e-1:Xe.getMonth());var on,ir=Ye||0,un=Ve||0,sr=He||0,$n=Ee||0;return Ne?new Date(Date.UTC(Pn,Ge,Ze,ir,un,sr,$n+60*Ne.offset*1e3)):J?new Date(Date.UTC(Pn,Ge,Ze,ir,un,sr,$n)):(on=new Date(Pn,Ge,Ze,ir,un,sr,$n),nn&&(on=de(on).week(nn).toDate()),on)}catch{return new Date("")}}(H,K,j,S),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),G&&H!=this.format(K)&&(this.$d=new Date("")),c={}}else if(K instanceof Array)for(var L=K.length,X=1;X<=L;X+=1){C[1]=K[X-1];var re=S.apply(this,C);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}X===L&&(this.$d=new Date(""))}else D.call(this,I)}}})}(Al)),Al.exports}var UP=GP();const $P=Vw(UP);Hr.extend($P);vr(Da);const Rm=({aksjonspunkt:e,readOnly:i,submittable:r,submitCallback:t})=>{const[s,l]=E.useState(!1),{mellomlagretFormData:u,setMellomlagretFormData:f}=b_(),c=uw({defaultValues:u??KP(e)}),m=c.watch("begrunnelse");return ie.jsxs(_t,{gap:"space-16",children:[e.status===Ia.OPPRETTET&&ie.jsx(mE,{children:[ie.jsx(Mn,{id:"BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll"},"BesteberegningAksjonspunktTekst")]}),ie.jsx(ww,{formMethods:c,onSubmit:v=>t(YP(v)),setDataOnUnmount:f,children:ie.jsxs(_t,{gap:"space-16",children:[ie.jsx(cw,{name:"besteberegningErKorrektValg",control:c.control,label:ie.jsx(Mn,{id:"BesteberegningProsessPanel.Aksjonspunkt.Radiotekst"}),readOnly:i,onChange:()=>l(!s)}),ie.jsx(Ca,{control:c.control,isSubmittable:r,isReadOnly:i,hasBegrunnelse:!!m,hasVurderingText:!0}),ie.jsx(Qc,{isSubmittable:r&&s,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isDirty,isReadOnly:i})]})})]})},KP=e=>{const i=e.status===Ia.UTFORT;return{...Ca.initialValues(e),besteberegningErKorrektValg:i?!0:void 0}},YP=e=>({kode:pt.MANUELL_KONTROLL_AV_BESTEBEREGNING,begrunnelse:e.begrunnelse,besteberegningErKorrekt:!!e.besteberegningErKorrektValg});Rm.__docgenInfo={description:`KontrollerBesteberegningPanel

Formkomponent. Lar saksbehandler vurdere om den automatiske besteberegningen er korrekt utført.`,methods:[],displayName:"KontrollerBesteberegningPanel",props:{aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ManuellKontrollBesteberegningAP) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const Pm=({beregningsgrunnlag:e,arbeidsgiverOpplysninger:i,submittable:r})=>{const{alleKodeverk:t,aksjonspunkterForPanel:s,submitCallback:l,isReadOnly:u}=y_(),{ytelsesspesifiktGrunnlag:f,beregningsgrunnlagPeriode:c}=e,m=f?.besteberegninggrunnlag;if(!m)return null;const v=c[0],b=s.find(y=>y.definisjon===pt.KONTROLLER_AUTOMATISK_BESTEBEREGNING||y.definisjon===pt.MANUELL_KONTROLL_AV_BESTEBEREGNING);return ie.jsxs(_t,{gap:"space-16",children:[!!b&&ie.jsx(Rm,{aksjonspunkt:b,submitCallback:l,submittable:r,readOnly:u}),ie.jsx(sg,{children:ie.jsx(jc,{periode:v,besteMåneder:m.besteMåneder})}),ie.jsx(sg,{children:ie.jsx(Dc,{besteMåneder:m.besteMåneder,arbeidsgiverOpplysninger:i,alleKodeverk:t})})]})};Pm.__docgenInfo={description:`BesteberegningPanel

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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const WP={"BesteberegningProsessPanel.Måned.Inntekt.Aktivitet":"Aktivitet","BesteberegningProsessPanel.Måned.Inntekt.Inntekt":"Inntekt","Inntekttabell.Tittel":"Inntektsgrunnlag for besteberegning","Inntekttabell.Sum":"Total for måned","Inntekttabell.BeregnetÅrsinntekt":"Beregnet årsinntekt: {inntekt}","ResultatGrunnlag.BruttoBeregningsgrunnlag":"Brutto beregningsgrunnlag","ResultatGrunnlag.BeregningEtterBesteberegning":"Beregning etter § 14-7, 3. ledd","ResultatGrunnlag.BeregningEtterKap8":"Beregning etter § 14-7, 1. ledd","ResultatGrunnlag.Kap8GirBesteBeregning":"Beregning etter § 14-7, 1. ledd gir beste beregning.","ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter § 14-7, 3. ledd gir beste beregning.","BesteberegningProsessPanel.Aksjonspunkt.Radiotekst":"Beregningen er riktig, fortsett behandlingen.","BesteberegningProsessPanel.Aksjonspunkt.HelpText":"Saken er automatisk besteberegnet, vennligst kontroller beregningen","BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll":"Saken er tatt ut til kontroll på grunn av stort avvik mellom 3. og 1. ledd. Vennligst kontroller beregningen"},zP=vr(WP),Tl=e=>ie.jsx(wl,{value:zP,children:ie.jsx(Pm,{...e})});Tl.__docgenInfo={description:"",methods:[],displayName:"BesteberegningFaktaIndex",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const XP={besteMåneder:[{fom:"2020-01-01",tom:"2020-01-31",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Nn.ARBEID,arbeidsgiverId:"974652269",inntekt:2e4}]},{fom:"2020-02-01",tom:"2020-02-29",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531}]},{fom:"2020-03-01",tom:"2020-03-31",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Nn.ARBEID,arbeidsgiverId:"974652269",inntekt:4321},{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:354},{opptjeningAktivitetType:Nn.ARBEID,arbeidsgiverId:"6823424234232",inntekt:32894}]},{fom:"2020-04-01",tom:"2020-04-30",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Nn.ARBEID,arbeidsgiverId:"974652269",inntekt:25322}]},{fom:"2020-05-01",tom:"2020-05-31",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:354},{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531}]},{fom:"2020-06-01",tom:"2020-06-30",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:354}]}]},vs={avklaringsbehov:[],skjaeringstidspunktBeregning:"2020-01-13",aktivitetStatus:["AT","DP"],beregningsgrunnlagPeriode:[{beregningsgrunnlagPeriodeFom:"2020-01-13",beregnetPrAar:56e4,bruttoPrAar:75e4,bruttoInkludertBortfaltNaturalytelsePrAar:0,avkortetPrAar:6e5,redusertPrAar:6e5,periodeAarsaker:[],beregningsgrunnlagPrStatusOgAndel:[{aktivitetStatus:"AT",beregningsperiodeFom:"2019-10-01",beregningsperiodeTom:"2019-12-31",beregnetPrAar:36e4,andelsnr:1,besteberegningPrAar:4e5,inntektskategori:"ARBEIDSTAKER",arbeidsforhold:{arbeidsgiverNavn:"BEDRIFT AS",arbeidsgiverId:"974652269",startdato:"2019-02-03",opphoersdato:"2020-02-03",arbeidsforholdType:"ARBEID",belopFraInntektsmeldingPrMnd:3e4,organisasjonstype:"VIRKSOMHET"},lagtTilAvSaksbehandler:!1,erTilkommetAndel:!1,skalFastsetteGrunnlag:!1},{beregningsperiodeFom:"2019-10-01",beregningsperiodeTom:"2019-12-31",aktivitetStatus:"DP",beregnetPrAar:2e5,andelsnr:2,besteberegningPrAar:35e4,inntektskategori:"DAGPENGER",fastsattAvSaksbehandler:!1,lagtTilAvSaksbehandler:!1,belopPrMndEtterAOrdningen:1e4,belopPrAarEtterAOrdningen:12e4,erTilkommetAndel:!1,skalFastsetteGrunnlag:!1}]}],ytelsesspesifiktGrunnlag:{besteberegninggrunnlag:XP,ytelsetype:"FP"},sammenligningsgrunnlagPrStatus:[],grunnbeløp:99858,dekningsgrad:100,erOverstyrtInntekt:!1},ZP={974652269:{erPrivatPerson:!1,navn:"BEDRIFT AS",identifikator:"974652269",referanse:"974652269"},6823424234232:{erPrivatPerson:!0,navn:"Testy Test",identifikator:"6823424234232",referanse:"123",fødselsdato:"1943-03-03"}},zl=(e,i,r)=>({definisjon:e,status:i,kanLoses:!0,begrunnelse:r??null}),tO={title:"fakta/fakta-besteberegning",component:Tl,decorators:[k_,__],args:{submittable:!0,arbeidsgiverOpplysninger:ZP},render:e=>ie.jsx(Tl,{...e})},Di={args:{aksjonspunkterForPanel:[],beregningsgrunnlag:vs}},Ci={args:{beregningsgrunnlag:vs,aksjonspunkterForPanel:[zl(pt.KONTROLLER_AUTOMATISK_BESTEBEREGNING,Ia.OPPRETTET)]}},Vi={args:{beregningsgrunnlag:vs,aksjonspunkterForPanel:[zl(pt.KONTROLLER_AUTOMATISK_BESTEBEREGNING,Ia.UTFORT,"Min begrunnelse for at besteberegningen er feil")]}},Hi={args:{beregningsgrunnlag:vs,aksjonspunkterForPanel:[zl(pt.MANUELL_KONTROLL_AV_BESTEBEREGNING,Ia.OPPRETTET)]}};Di.parameters={...Di.parameters,docs:{...Di.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    beregningsgrunnlag: scenarioBG
  }
}`,...Di.parameters?.docs?.source}}};Ci.parameters={...Ci.parameters,docs:{...Ci.parameters?.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING, AksjonspunktStatus.OPPRETTET)]
  }
}`,...Ci.parameters?.docs?.source}}};Vi.parameters={...Vi.parameters,docs:{...Vi.parameters?.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING, AksjonspunktStatus.UTFORT, 'Min begrunnelse for at besteberegningen er feil')]
  }
}`,...Vi.parameters?.docs?.source}}};Hi.parameters={...Hi.parameters,docs:{...Hi.parameters?.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING, AksjonspunktStatus.OPPRETTET)]
  }
}`,...Hi.parameters?.docs?.source}}};const aO=["BesteberegningMedDagpengerOgArbeid","BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt","BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent","BesteberegningMedAvvik"];export{Hi as BesteberegningMedAvvik,Di as BesteberegningMedDagpengerOgArbeid,Vi as BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent,Ci as BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt,aO as __namedExportsOrder,tO as default};
