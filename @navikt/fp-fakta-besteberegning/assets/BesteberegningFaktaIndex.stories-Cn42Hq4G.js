import{g as nc,r as E,u as aA,_ as Tf,s as Ef,c as ns,a as xe,y as M,b as iA,d as Sa,T as sA,S as Yt,R as rc,e as Tl,W as oA,A as lA,f as vr,j as ie,h as Hr,X as uA,P as El,t as dA,i as fA,o as gA,M as cA,k as mA,E as vA,l as xi,m as hA,n as Ia,p as bA,w as pA,q as yA}from"./iframe-CmgHfvse.js";import{r as kA}from"./index-BMxGSvqI.js";var tc=kA();const Zo=nc(tc);function AA(e,i){var r=e.values,t=Tf(e,["values"]),s=i.values,l=Tf(i,["values"]);return Ef(s,r)&&Ef(t,l)}function ac(e){var i=aA(),r=i.formatMessage,t=i.textComponent,s=t===void 0?E.Fragment:t,l=e.id,u=e.description,f=e.defaultMessage,c=e.values,v=e.children,m=e.tagName,p=m===void 0?s:m,y=e.ignoreTag,k={id:l,description:u,defaultMessage:f},x=r(k,c,{ignoreTag:y});return typeof v=="function"?v(Array.isArray(x)?x:[x]):p?E.createElement(p,null,x):E.createElement(E.Fragment,null,x)}ac.displayName="FormattedMessage";var Bn=E.memo(ac,AA);Bn.displayName="MemoizedFormattedMessage";var bt=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(bt||{}),Nn=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(Nn||{});const _A=(e,i)=>{if(e==null)throw Error("Data er ikke oppgitt");return e},Wt=e=>ns({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var TA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ic=E.forwardRef((e,i)=>{var{className:r,size:t="medium",as:s="p",spacing:l,truncate:u,weight:f="regular",align:c,visuallyHidden:v,textColor:m}=e,p=TA(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=xe();return M.createElement(s,Object.assign({},p,{ref:i,className:y(r,"navds-body-long",`navds-body-long--${t}`,Wt({spacing:l,truncate:u,weight:f,align:c,visuallyHidden:v,textColor:m}))}))});var EA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const mr=E.forwardRef((e,i)=>{var{className:r,size:t="medium",as:s="p",spacing:l,truncate:u,weight:f="regular",align:c,visuallyHidden:v,textColor:m}=e,p=EA(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=xe();return M.createElement(s,Object.assign({},p,{ref:i,className:y(r,"navds-body-short",`navds-body-short--${t}`,Wt({spacing:l,truncate:u,weight:f,align:c,visuallyHidden:v,textColor:m}))}))});var wA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const RA=E.forwardRef((e,i)=>{var{className:r,size:t="medium",spacing:s,uppercase:l,as:u="p",truncate:f,weight:c="regular",align:v,visuallyHidden:m,textColor:p}=e,y=wA(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=xe();return M.createElement(u,Object.assign({},y,{ref:i,className:k(r,"navds-detail",Wt({spacing:s,truncate:f,weight:c,align:v,visuallyHidden:m,textColor:p,uppercase:l}),{"navds-detail--small":t==="small"})}))});var PA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const rs=E.forwardRef((e,i)=>{var{children:r,className:t,size:s,spacing:l,as:u="p",showIcon:f=!1}=e,c=PA(e,["children","className","size","spacing","as","showIcon"]);const{cn:v}=xe();return M.createElement(u,Object.assign({},c,{ref:i,className:v("navds-error-message","navds-label",t,Wt({spacing:l}),{"navds-label--small":s==="small","navds-error-message--show-icon":f})}),f&&M.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var OA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};E.forwardRef((e,i)=>{var{level:r="1",size:t,className:s,as:l,spacing:u,align:f,visuallyHidden:c,textColor:v}=e,m=OA(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:p}=xe(),y=l??`h${r}`;return M.createElement(y,Object.assign({},m,{ref:i,className:p(s,"navds-heading",`navds-heading--${t}`,Wt({spacing:u,align:f,visuallyHidden:c,textColor:v}))}))});var SA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};E.forwardRef((e,i)=>{var{className:r,spacing:t,as:s="p"}=e,l=SA(e,["className","spacing","as"]);const{cn:u}=xe();return M.createElement(s,Object.assign({},l,{ref:i,className:u(r,"navds-ingress",{"navds-typo--spacing":!!t})}))});var IA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const pt=E.forwardRef((e,i)=>{var{className:r,size:t="medium",as:s="label",spacing:l,visuallyHidden:u,textColor:f}=e,c=IA(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:v}=xe();return M.createElement(s,Object.assign({},c,{ref:i,className:v(r,"navds-label",Wt({spacing:l,visuallyHidden:u,textColor:f}),{"navds-label--small":t==="small"})}))});function sc(e,i=166,r=!1){let t;function s(...l){const u=()=>{t=void 0,e.apply(this,l)};!t&&r&&u(),clearTimeout(t),t=setTimeout(u,i)}return s.clear=()=>{clearTimeout(t)},s}function rr(e,i){const r=Object.entries(e).filter(([t])=>!i.includes(t));return Object.fromEntries(r)}const wf=globalThis?.document?E.useLayoutEffect:()=>{};let Rf=0;function xA(e){const[i,r]=E.useState(e),t=e||i;return E.useEffect(()=>{i==null&&(Rf+=1,r(`aksel-id-${Rf}`))},[i]),t}const Pf=M.useId;function yt(e){var i;if(Pf!==void 0){const r=Pf();return e??r.replace(/(:)/g,"")}return(i=xA(e))!==null&&i!==void 0?i:""}function Of(e,i=[]){const r=E.useRef(e);return E.useEffect(()=>{r.current=e}),E.useCallback((...t)=>{var s;return(s=r.current)===null||s===void 0?void 0:s.call(r,...t)},i)}function oc({value:e,defaultValue:i,onChange:r}){const t=Of(r),[s,l]=E.useState(i),u=e!==void 0,f=u?e:s,c=Of(v=>{const p=typeof v=="function"?v(f):v;u||l(p),t(p)},[u,t,f]);return[f,c]}let Sf=0;function NA(e){const[i,r]=E.useState(e),t=e||i;return E.useEffect(()=>{i==null&&(Sf+=1,r(`aksel-icon-${Sf}`))},[i]),t}const If=M.useId;function ar(e){var i;return If!==void 0?If().replace(/(:)/g,""):(i=NA(e))!==null&&i!==void 0?i:""}var qA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const MA=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=qA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var BA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const FA=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=BA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var LA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const jA=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=LA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var DA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const CA=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=DA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var VA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const HA=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=VA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var GA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const lc=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=GA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var UA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const uc=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=UA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var $A=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const KA=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=$A(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var YA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const WA=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=YA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var zA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const XA=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=zA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var ZA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Jo=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=ZA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var JA=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const QA=E.forwardRef((e,i)=>{var{title:r,titleId:t}=e,s=JA(e,["title","titleId"]);let l=ar();return l=r?t||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),r?E.createElement("title",{id:l},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function ts(e,i,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e?.(s),r===!1||!s.defaultPrevented)return i?.(s)}}const[ZP,e_]=iA({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Oo(e){return(i={})=>{const r=i.width?String(i.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function va(e){return(i,r)=>{const t=r?.context?String(r.context):"standalone";let s;if(t==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,f=r?.width?String(r.width):u;s=e.formattingValues[f]||e.formattingValues[u]}else{const u=e.defaultWidth,f=r?.width?String(r.width):e.defaultWidth;s=e.values[f]||e.values[u]}const l=e.argumentCallback?e.argumentCallback(i):i;return s[l]}}function ha(e){return(i,r={})=>{const t=r.width,s=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],l=i.match(s);if(!l)return null;const u=l[0],f=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(f)?r_(f,p=>p.test(u)):n_(f,p=>p.test(u));let v;v=e.valueCallback?e.valueCallback(c):c,v=r.valueCallback?r.valueCallback(v):v;const m=i.slice(u.length);return{value:v,rest:m}}}function n_(e,i){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i(e[r]))return r}function r_(e,i){for(let r=0;r<e.length;r++)if(i(e[r]))return r}function t_(e){return(i,r={})=>{const t=i.match(e.matchPattern);if(!t)return null;const s=t[0],l=i.match(e.parsePattern);if(!l)return null;let u=e.valueCallback?e.valueCallback(l[0]):l[0];u=r.valueCallback?r.valueCallback(u):u;const f=i.slice(s.length);return{value:u,rest:f}}}const a_={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},i_=(e,i,r)=>{let t;const s=a_[e];return typeof s=="string"?t=s:i===1?t=s.one:t=s.other.replace("{{count}}",String(i)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+t:t+" siden":t},s_={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},o_={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},l_={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u_={date:Oo({formats:s_,defaultWidth:"full"}),time:Oo({formats:o_,defaultWidth:"full"}),dateTime:Oo({formats:l_,defaultWidth:"full"})},d_={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},f_=(e,i,r,t)=>d_[e],g_={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},c_={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},m_={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},v_={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},h_={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},b_=(e,i)=>Number(e)+".",p_={ordinalNumber:b_,era:va({values:g_,defaultWidth:"wide"}),quarter:va({values:c_,defaultWidth:"wide",argumentCallback:e=>e-1}),month:va({values:m_,defaultWidth:"wide"}),day:va({values:v_,defaultWidth:"wide"}),dayPeriod:va({values:h_,defaultWidth:"wide"})},y_=/^(\d+)\.?/i,k_=/\d+/i,A_={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},__={any:[/^f/i,/^e/i]},T_={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},E_={any:[/1/i,/2/i,/3/i,/4/i]},w_={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},R_={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},P_={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},O_={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},S_={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},I_={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},x_={ordinalNumber:t_({matchPattern:y_,parsePattern:k_,valueCallback:e=>parseInt(e,10)}),era:ha({matchPatterns:A_,defaultMatchWidth:"wide",parsePatterns:__,defaultParseWidth:"any"}),quarter:ha({matchPatterns:T_,defaultMatchWidth:"wide",parsePatterns:E_,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ha({matchPatterns:w_,defaultMatchWidth:"wide",parsePatterns:R_,defaultParseWidth:"any"}),day:ha({matchPatterns:P_,defaultMatchWidth:"wide",parsePatterns:O_,defaultParseWidth:"any"}),dayPeriod:ha({matchPatterns:S_,defaultMatchWidth:"any",parsePatterns:I_,defaultParseWidth:"any"})},N_={code:"nb",formatDistance:i_,formatLong:u_,formatRelative:f_,localize:p_,match:x_,options:{weekStartsOn:1,firstWeekContainsDate:4}},q_={global:{dateLocale:N_,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},M_=E.createContext({locale:q_}),dc=()=>E.useContext(M_);var B_=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const F_=E.forwardRef((e,i)=>{var r,t,s,{rootElement:l,asChild:u}=e,f=B_(e,["rootElement","asChild"]);const c=Sa(!1),v=(r=dc())===null||r===void 0?void 0:r.rootElement,m=(t=l??v)!==null&&t!==void 0?t:(s=globalThis?.document)===null||s===void 0?void 0:s.body,p=u?Yt:"div";return c?m?Zo.createPortal(M.createElement(sA,{theme:c.theme,asChild:!0,hasBackground:!1,"data-color":c.color},M.createElement(p,Object.assign({ref:i,"data-aksel-portal":""},f))),m):null:m?Zo.createPortal(M.createElement(p,Object.assign({ref:i,"data-aksel-portal":""},f)),m):null}),Gt=Math.min,ht=Math.max,$i=Math.round,Ni=Math.floor,Er=e=>({x:e,y:e}),L_={left:"right",right:"left",bottom:"top",top:"bottom"},j_={start:"end",end:"start"};function Qo(e,i,r){return ht(e,Gt(i,r))}function xa(e,i){return typeof e=="function"?e(i):e}function kt(e){return e.split("-")[0]}function Na(e){return e.split("-")[1]}function fc(e){return e==="x"?"y":"x"}function wl(e){return e==="y"?"height":"width"}function Ut(e){return["top","bottom"].includes(kt(e))?"y":"x"}function Rl(e){return fc(Ut(e))}function D_(e,i,r){r===void 0&&(r=!1);const t=Na(e),s=Rl(e),l=wl(s);let u=s==="x"?t===(r?"end":"start")?"right":"left":t==="start"?"bottom":"top";return i.reference[l]>i.floating[l]&&(u=Ki(u)),[u,Ki(u)]}function C_(e){const i=Ki(e);return[el(e),i,el(i)]}function el(e){return e.replace(/start|end/g,i=>j_[i])}function V_(e,i,r){const t=["left","right"],s=["right","left"],l=["top","bottom"],u=["bottom","top"];switch(e){case"top":case"bottom":return r?i?s:t:i?t:s;case"left":case"right":return i?l:u;default:return[]}}function H_(e,i,r,t){const s=Na(e);let l=V_(kt(e),r==="start",t);return s&&(l=l.map(u=>u+"-"+s),i&&(l=l.concat(l.map(el)))),l}function Ki(e){return e.replace(/left|right|bottom|top/g,i=>L_[i])}function G_(e){return{top:0,right:0,bottom:0,left:0,...e}}function gc(e){return typeof e!="number"?G_(e):{top:e,right:e,bottom:e,left:e}}function Yi(e){const{x:i,y:r,width:t,height:s}=e;return{width:t,height:s,top:r,left:i,right:i+t,bottom:r+s,x:i,y:r}}function xf(e,i,r){let{reference:t,floating:s}=e;const l=Ut(i),u=Rl(i),f=wl(u),c=kt(i),v=l==="y",m=t.x+t.width/2-s.width/2,p=t.y+t.height/2-s.height/2,y=t[f]/2-s[f]/2;let k;switch(c){case"top":k={x:m,y:t.y-s.height};break;case"bottom":k={x:m,y:t.y+t.height};break;case"right":k={x:t.x+t.width,y:p};break;case"left":k={x:t.x-s.width,y:p};break;default:k={x:t.x,y:t.y}}switch(Na(i)){case"start":k[u]-=y*(r&&v?-1:1);break;case"end":k[u]+=y*(r&&v?-1:1);break}return k}const U_=async(e,i,r)=>{const{placement:t="bottom",strategy:s="absolute",middleware:l=[],platform:u}=r,f=l.filter(Boolean),c=await(u.isRTL==null?void 0:u.isRTL(i));let v=await u.getElementRects({reference:e,floating:i,strategy:s}),{x:m,y:p}=xf(v,t,c),y=t,k={},x=0;for(let _=0;_<f.length;_++){const{name:A,fn:R}=f[_],{x:S,y:P,data:D,reset:I}=await R({x:m,y:p,initialPlacement:t,placement:y,strategy:s,middlewareData:k,rects:v,platform:u,elements:{reference:e,floating:i}});m=S??m,p=P??p,k={...k,[A]:{...k[A],...D}},I&&x<=50&&(x++,typeof I=="object"&&(I.placement&&(y=I.placement),I.rects&&(v=I.rects===!0?await u.getElementRects({reference:e,floating:i,strategy:s}):I.rects),{x:m,y:p}=xf(v,y,c)),_=-1)}return{x:m,y:p,placement:y,strategy:s,middlewareData:k}};async function cc(e,i){var r;i===void 0&&(i={});const{x:t,y:s,platform:l,rects:u,elements:f,strategy:c}=e,{boundary:v="clippingAncestors",rootBoundary:m="viewport",elementContext:p="floating",altBoundary:y=!1,padding:k=0}=xa(i,e),x=gc(k),A=f[y?p==="floating"?"reference":"floating":p],R=Yi(await l.getClippingRect({element:(r=await(l.isElement==null?void 0:l.isElement(A)))==null||r?A:A.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(f.floating)),boundary:v,rootBoundary:m,strategy:c})),S=p==="floating"?{x:t,y:s,width:u.floating.width,height:u.floating.height}:u.reference,P=await(l.getOffsetParent==null?void 0:l.getOffsetParent(f.floating)),D=await(l.isElement==null?void 0:l.isElement(P))?await(l.getScale==null?void 0:l.getScale(P))||{x:1,y:1}:{x:1,y:1},I=Yi(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:S,offsetParent:P,strategy:c}):S);return{top:(R.top-I.top+x.top)/D.y,bottom:(I.bottom-R.bottom+x.bottom)/D.y,left:(R.left-I.left+x.left)/D.x,right:(I.right-R.right+x.right)/D.x}}const $_=e=>({name:"arrow",options:e,async fn(i){const{x:r,y:t,placement:s,rects:l,platform:u,elements:f,middlewareData:c}=i,{element:v,padding:m=0}=xa(e,i)||{};if(v==null)return{};const p=gc(m),y={x:r,y:t},k=Rl(s),x=wl(k),_=await u.getDimensions(v),A=k==="y",R=A?"top":"left",S=A?"bottom":"right",P=A?"clientHeight":"clientWidth",D=l.reference[x]+l.reference[k]-y[k]-l.floating[x],I=y[k]-l.reference[k],H=await(u.getOffsetParent==null?void 0:u.getOffsetParent(v));let j=H?H[P]:0;(!j||!await(u.isElement==null?void 0:u.isElement(H)))&&(j=f.floating[P]||l.floating[x]);const C=D/2-I/2,K=j/2-_[x]/2-1,ne=Gt(p[R],K),ee=Gt(p[S],K),G=ne,F=j-_[x]-ee,L=j/2-_[x]/2+C,X=Qo(G,L,F),re=!c.arrow&&Na(s)!=null&&L!==X&&l.reference[x]/2-(L<G?ne:ee)-_[x]/2<0,J=re?L<G?L-G:L-F:0;return{[k]:y[k]+J,data:{[k]:X,centerOffset:L-X-J,...re&&{alignmentOffset:J}},reset:re}}}),K_=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var r,t;const{placement:s,middlewareData:l,rects:u,initialPlacement:f,platform:c,elements:v}=i,{mainAxis:m=!0,crossAxis:p=!0,fallbackPlacements:y,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:_=!0,...A}=xa(e,i);if((r=l.arrow)!=null&&r.alignmentOffset)return{};const R=kt(s),S=Ut(f),P=kt(f)===f,D=await(c.isRTL==null?void 0:c.isRTL(v.floating)),I=y||(P||!_?[Ki(f)]:C_(f)),H=x!=="none";!y&&H&&I.push(...H_(f,_,x,D));const j=[f,...I],C=await cc(i,A),K=[];let ne=((t=l.flip)==null?void 0:t.overflows)||[];if(m&&K.push(C[R]),p){const L=D_(s,u,D);K.push(C[L[0]],C[L[1]])}if(ne=[...ne,{placement:s,overflows:K}],!K.every(L=>L<=0)){var ee,G;const L=(((ee=l.flip)==null?void 0:ee.index)||0)+1,X=j[L];if(X)return{data:{index:L,overflows:ne},reset:{placement:X}};let re=(G=ne.filter(J=>J.overflows[0]<=0).sort((J,z)=>J.overflows[1]-z.overflows[1])[0])==null?void 0:G.placement;if(!re)switch(k){case"bestFit":{var F;const J=(F=ne.filter(z=>{if(H){const Z=Ut(z.placement);return Z===S||Z==="y"}return!0}).map(z=>[z.placement,z.overflows.filter(Z=>Z>0).reduce((Z,de)=>Z+de,0)]).sort((z,Z)=>z[1]-Z[1])[0])==null?void 0:F[0];J&&(re=J);break}case"initialPlacement":re=f;break}if(s!==re)return{reset:{placement:re}}}return{}}}};async function Y_(e,i){const{placement:r,platform:t,elements:s}=e,l=await(t.isRTL==null?void 0:t.isRTL(s.floating)),u=kt(r),f=Na(r),c=Ut(r)==="y",v=["left","top"].includes(u)?-1:1,m=l&&c?-1:1,p=xa(i,e);let{mainAxis:y,crossAxis:k,alignmentAxis:x}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return f&&typeof x=="number"&&(k=f==="end"?x*-1:x),c?{x:k*m,y:y*v}:{x:y*v,y:k*m}}const W_=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var r,t;const{x:s,y:l,placement:u,middlewareData:f}=i,c=await Y_(i,e);return u===((r=f.offset)==null?void 0:r.placement)&&(t=f.arrow)!=null&&t.alignmentOffset?{}:{x:s+c.x,y:l+c.y,data:{...c,placement:u}}}}},z_=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:r,y:t,placement:s}=i,{mainAxis:l=!0,crossAxis:u=!1,limiter:f={fn:A=>{let{x:R,y:S}=A;return{x:R,y:S}}},...c}=xa(e,i),v={x:r,y:t},m=await cc(i,c),p=Ut(kt(s)),y=fc(p);let k=v[y],x=v[p];if(l){const A=y==="y"?"top":"left",R=y==="y"?"bottom":"right",S=k+m[A],P=k-m[R];k=Qo(S,k,P)}if(u){const A=p==="y"?"top":"left",R=p==="y"?"bottom":"right",S=x+m[A],P=x-m[R];x=Qo(S,x,P)}const _=f.fn({...i,[y]:k,[p]:x});return{..._,data:{x:_.x-r,y:_.y-t,enabled:{[y]:l,[p]:u}}}}}};function as(){return typeof window<"u"}function zt(e){return mc(e)?(e.nodeName||"").toLowerCase():"#document"}function Fn(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Pr(e){var i;return(i=(mc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function mc(e){return as()?e instanceof Node||e instanceof Fn(e).Node:!1}function Ke(e){return as()?e instanceof Element||e instanceof Fn(e).Element:!1}function Un(e){return as()?e instanceof HTMLElement||e instanceof Fn(e).HTMLElement:!1}function Wi(e){return!as()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Fn(e).ShadowRoot}function qa(e){const{overflow:i,overflowX:r,overflowY:t,display:s}=tr(e);return/auto|scroll|overlay|hidden|clip/.test(i+t+r)&&!["inline","contents"].includes(s)}function X_(e){return["table","td","th"].includes(zt(e))}function is(e){return[":popover-open",":modal"].some(i=>{try{return e.matches(i)}catch{return!1}})}function Pl(e){const i=ss(),r=Ke(e)?tr(e):e;return["transform","translate","scale","rotate","perspective"].some(t=>r[t]?r[t]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(t=>(r.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(r.contain||"").includes(t))}function Z_(e){let i=Gr(e);for(;Un(i)&&!Vr(i);){if(Pl(i))return i;if(is(i))return null;i=Gr(i)}return null}function ss(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vr(e){return["html","body","#document"].includes(zt(e))}function tr(e){return Fn(e).getComputedStyle(e)}function os(e){return Ke(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(zt(e)==="html")return e;const i=e.assignedSlot||e.parentNode||Wi(e)&&e.host||Pr(e);return Wi(i)?i.host:i}function vc(e){const i=Gr(e);return Vr(i)?e.ownerDocument?e.ownerDocument.body:e.body:Un(i)&&qa(i)?i:vc(i)}function et(e,i,r){var t;i===void 0&&(i=[]),r===void 0&&(r=!0);const s=vc(e),l=s===((t=e.ownerDocument)==null?void 0:t.body),u=Fn(s);if(l){const f=nl(u);return i.concat(u,u.visualViewport||[],qa(s)?s:[],f&&r?et(f):[])}return i.concat(s,et(s,[],r))}function nl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function hc(e){const i=tr(e);let r=parseFloat(i.width)||0,t=parseFloat(i.height)||0;const s=Un(e),l=s?e.offsetWidth:r,u=s?e.offsetHeight:t,f=$i(r)!==l||$i(t)!==u;return f&&(r=l,t=u),{width:r,height:t,$:f}}function Ol(e){return Ke(e)?e:e.contextElement}function Ht(e){const i=Ol(e);if(!Un(i))return Er(1);const r=i.getBoundingClientRect(),{width:t,height:s,$:l}=hc(i);let u=(l?$i(r.width):r.width)/t,f=(l?$i(r.height):r.height)/s;return(!u||!Number.isFinite(u))&&(u=1),(!f||!Number.isFinite(f))&&(f=1),{x:u,y:f}}const J_=Er(0);function bc(e){const i=Fn(e);return!ss()||!i.visualViewport?J_:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function Q_(e,i,r){return i===void 0&&(i=!1),!r||i&&r!==Fn(e)?!1:i}function At(e,i,r,t){i===void 0&&(i=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),l=Ol(e);let u=Er(1);i&&(t?Ke(t)&&(u=Ht(t)):u=Ht(e));const f=Q_(l,r,t)?bc(l):Er(0);let c=(s.left+f.x)/u.x,v=(s.top+f.y)/u.y,m=s.width/u.x,p=s.height/u.y;if(l){const y=Fn(l),k=t&&Ke(t)?Fn(t):t;let x=y,_=nl(x);for(;_&&t&&k!==x;){const A=Ht(_),R=_.getBoundingClientRect(),S=tr(_),P=R.left+(_.clientLeft+parseFloat(S.paddingLeft))*A.x,D=R.top+(_.clientTop+parseFloat(S.paddingTop))*A.y;c*=A.x,v*=A.y,m*=A.x,p*=A.y,c+=P,v+=D,x=Fn(_),_=nl(x)}}return Yi({width:m,height:p,x:c,y:v})}function Sl(e,i){const r=os(e).scrollLeft;return i?i.left+r:At(Pr(e)).left+r}function pc(e,i,r){r===void 0&&(r=!1);const t=e.getBoundingClientRect(),s=t.left+i.scrollLeft-(r?0:Sl(e,t)),l=t.top+i.scrollTop;return{x:s,y:l}}function e1(e){let{elements:i,rect:r,offsetParent:t,strategy:s}=e;const l=s==="fixed",u=Pr(t),f=i?is(i.floating):!1;if(t===u||f&&l)return r;let c={scrollLeft:0,scrollTop:0},v=Er(1);const m=Er(0),p=Un(t);if((p||!p&&!l)&&((zt(t)!=="body"||qa(u))&&(c=os(t)),Un(t))){const k=At(t);v=Ht(t),m.x=k.x+t.clientLeft,m.y=k.y+t.clientTop}const y=u&&!p&&!l?pc(u,c,!0):Er(0);return{width:r.width*v.x,height:r.height*v.y,x:r.x*v.x-c.scrollLeft*v.x+m.x+y.x,y:r.y*v.y-c.scrollTop*v.y+m.y+y.y}}function n1(e){return Array.from(e.getClientRects())}function r1(e){const i=Pr(e),r=os(e),t=e.ownerDocument.body,s=ht(i.scrollWidth,i.clientWidth,t.scrollWidth,t.clientWidth),l=ht(i.scrollHeight,i.clientHeight,t.scrollHeight,t.clientHeight);let u=-r.scrollLeft+Sl(e);const f=-r.scrollTop;return tr(t).direction==="rtl"&&(u+=ht(i.clientWidth,t.clientWidth)-s),{width:s,height:l,x:u,y:f}}function t1(e,i){const r=Fn(e),t=Pr(e),s=r.visualViewport;let l=t.clientWidth,u=t.clientHeight,f=0,c=0;if(s){l=s.width,u=s.height;const v=ss();(!v||v&&i==="fixed")&&(f=s.offsetLeft,c=s.offsetTop)}return{width:l,height:u,x:f,y:c}}function a1(e,i){const r=At(e,!0,i==="fixed"),t=r.top+e.clientTop,s=r.left+e.clientLeft,l=Un(e)?Ht(e):Er(1),u=e.clientWidth*l.x,f=e.clientHeight*l.y,c=s*l.x,v=t*l.y;return{width:u,height:f,x:c,y:v}}function Nf(e,i,r){let t;if(i==="viewport")t=t1(e,r);else if(i==="document")t=r1(Pr(e));else if(Ke(i))t=a1(i,r);else{const s=bc(e);t={x:i.x-s.x,y:i.y-s.y,width:i.width,height:i.height}}return Yi(t)}function yc(e,i){const r=Gr(e);return r===i||!Ke(r)||Vr(r)?!1:tr(r).position==="fixed"||yc(r,i)}function i1(e,i){const r=i.get(e);if(r)return r;let t=et(e,[],!1).filter(f=>Ke(f)&&zt(f)!=="body"),s=null;const l=tr(e).position==="fixed";let u=l?Gr(e):e;for(;Ke(u)&&!Vr(u);){const f=tr(u),c=Pl(u);!c&&f.position==="fixed"&&(s=null),(l?!c&&!s:!c&&f.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||qa(u)&&!c&&yc(e,u))?t=t.filter(m=>m!==u):s=f,u=Gr(u)}return i.set(e,t),t}function s1(e){let{element:i,boundary:r,rootBoundary:t,strategy:s}=e;const u=[...r==="clippingAncestors"?is(i)?[]:i1(i,this._c):[].concat(r),t],f=u[0],c=u.reduce((v,m)=>{const p=Nf(i,m,s);return v.top=ht(p.top,v.top),v.right=Gt(p.right,v.right),v.bottom=Gt(p.bottom,v.bottom),v.left=ht(p.left,v.left),v},Nf(i,f,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function o1(e){const{width:i,height:r}=hc(e);return{width:i,height:r}}function l1(e,i,r){const t=Un(i),s=Pr(i),l=r==="fixed",u=At(e,!0,l,i);let f={scrollLeft:0,scrollTop:0};const c=Er(0);if(t||!t&&!l)if((zt(i)!=="body"||qa(s))&&(f=os(i)),t){const y=At(i,!0,l,i);c.x=y.x+i.clientLeft,c.y=y.y+i.clientTop}else s&&(c.x=Sl(s));const v=s&&!t&&!l?pc(s,f):Er(0),m=u.left+f.scrollLeft-c.x-v.x,p=u.top+f.scrollTop-c.y-v.y;return{x:m,y:p,width:u.width,height:u.height}}function So(e){return tr(e).position==="static"}function qf(e,i){if(!Un(e)||tr(e).position==="fixed")return null;if(i)return i(e);let r=e.offsetParent;return Pr(e)===r&&(r=r.ownerDocument.body),r}function kc(e,i){const r=Fn(e);if(is(e))return r;if(!Un(e)){let s=Gr(e);for(;s&&!Vr(s);){if(Ke(s)&&!So(s))return s;s=Gr(s)}return r}let t=qf(e,i);for(;t&&X_(t)&&So(t);)t=qf(t,i);return t&&Vr(t)&&So(t)&&!Pl(t)?r:t||Z_(e)||r}const u1=async function(e){const i=this.getOffsetParent||kc,r=this.getDimensions,t=await r(e.floating);return{reference:l1(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:t.width,height:t.height}}};function d1(e){return tr(e).direction==="rtl"}const f1={convertOffsetParentRelativeRectToViewportRelativeRect:e1,getDocumentElement:Pr,getClippingRect:s1,getOffsetParent:kc,getElementRects:u1,getClientRects:n1,getDimensions:o1,getScale:Ht,isElement:Ke,isRTL:d1};function Ac(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function g1(e,i){let r=null,t;const s=Pr(e);function l(){var f;clearTimeout(t),(f=r)==null||f.disconnect(),r=null}function u(f,c){f===void 0&&(f=!1),c===void 0&&(c=1),l();const v=e.getBoundingClientRect(),{left:m,top:p,width:y,height:k}=v;if(f||i(),!y||!k)return;const x=Ni(p),_=Ni(s.clientWidth-(m+y)),A=Ni(s.clientHeight-(p+k)),R=Ni(m),P={rootMargin:-x+"px "+-_+"px "+-A+"px "+-R+"px",threshold:ht(0,Gt(1,c))||1};let D=!0;function I(H){const j=H[0].intersectionRatio;if(j!==c){if(!D)return u();j?u(!1,j):t=setTimeout(()=>{u(!1,1e-7)},1e3)}j===1&&!Ac(v,e.getBoundingClientRect())&&u(),D=!1}try{r=new IntersectionObserver(I,{...P,root:s.ownerDocument})}catch{r=new IntersectionObserver(I,P)}r.observe(e)}return u(!0),l}function Mf(e,i,r,t){t===void 0&&(t={});const{ancestorScroll:s=!0,ancestorResize:l=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:c=!1}=t,v=Ol(e),m=s||l?[...v?et(v):[],...et(i)]:[];m.forEach(R=>{s&&R.addEventListener("scroll",r,{passive:!0}),l&&R.addEventListener("resize",r)});const p=v&&f?g1(v,r):null;let y=-1,k=null;u&&(k=new ResizeObserver(R=>{let[S]=R;S&&S.target===v&&k&&(k.unobserve(i),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var P;(P=k)==null||P.observe(i)})),r()}),v&&!c&&k.observe(v),k.observe(i));let x,_=c?At(e):null;c&&A();function A(){const R=At(e);_&&!Ac(_,R)&&r(),_=R,x=requestAnimationFrame(A)}return r(),()=>{var R;m.forEach(S=>{s&&S.removeEventListener("scroll",r),l&&S.removeEventListener("resize",r)}),p?.(),(R=k)==null||R.disconnect(),k=null,c&&cancelAnimationFrame(x)}}const c1=W_,m1=z_,v1=K_,Bf=$_,h1=(e,i,r)=>{const t=new Map,s={platform:f1,...r},l={...s.platform,_c:t};return U_(e,i,{...s,platform:l})};var Vi=typeof document<"u"?E.useLayoutEffect:E.useEffect;function zi(e,i){if(e===i)return!0;if(typeof e!=typeof i)return!1;if(typeof e=="function"&&e.toString()===i.toString())return!0;let r,t,s;if(e&&i&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==i.length)return!1;for(t=r;t--!==0;)if(!zi(e[t],i[t]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(i).length)return!1;for(t=r;t--!==0;)if(!{}.hasOwnProperty.call(i,s[t]))return!1;for(t=r;t--!==0;){const l=s[t];if(!(l==="_owner"&&e.$$typeof)&&!zi(e[l],i[l]))return!1}return!0}return e!==e&&i!==i}function _c(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ff(e,i){const r=_c(e);return Math.round(i*r)/r}function Io(e){const i=E.useRef(e);return Vi(()=>{i.current=e}),i}function b1(e){e===void 0&&(e={});const{placement:i="bottom",strategy:r="absolute",middleware:t=[],platform:s,elements:{reference:l,floating:u}={},transform:f=!0,whileElementsMounted:c,open:v}=e,[m,p]=E.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[y,k]=E.useState(t);zi(y,t)||k(t);const[x,_]=E.useState(null),[A,R]=E.useState(null),S=E.useCallback(z=>{z!==H.current&&(H.current=z,_(z))},[]),P=E.useCallback(z=>{z!==j.current&&(j.current=z,R(z))},[]),D=l||x,I=u||A,H=E.useRef(null),j=E.useRef(null),C=E.useRef(m),K=c!=null,ne=Io(c),ee=Io(s),G=Io(v),F=E.useCallback(()=>{if(!H.current||!j.current)return;const z={placement:i,strategy:r,middleware:y};ee.current&&(z.platform=ee.current),h1(H.current,j.current,z).then(Z=>{const de={...Z,isPositioned:G.current!==!1};L.current&&!zi(C.current,de)&&(C.current=de,tc.flushSync(()=>{p(de)}))})},[y,i,r,ee,G]);Vi(()=>{v===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,p(z=>({...z,isPositioned:!1})))},[v]);const L=E.useRef(!1);Vi(()=>(L.current=!0,()=>{L.current=!1}),[]),Vi(()=>{if(D&&(H.current=D),I&&(j.current=I),D&&I){if(ne.current)return ne.current(D,I,F);F()}},[D,I,F,ne,K]);const X=E.useMemo(()=>({reference:H,floating:j,setReference:S,setFloating:P}),[S,P]),re=E.useMemo(()=>({reference:D,floating:I}),[D,I]),J=E.useMemo(()=>{const z={position:r,left:0,top:0};if(!re.floating)return z;const Z=Ff(re.floating,m.x),de=Ff(re.floating,m.y);return f?{...z,transform:"translate("+Z+"px, "+de+"px)",..._c(re.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:Z,top:de}},[r,f,re.floating,m.x,m.y]);return E.useMemo(()=>({...m,update:F,refs:X,elements:re,floatingStyles:J}),[m,F,X,re,J])}const p1=e=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:t,padding:s}=typeof e=="function"?e(r):e;return t&&i(t)?t.current!=null?Bf({element:t.current,padding:s}).fn(r):{}:t?Bf({element:t,padding:s}).fn(r):{}}}},y1=(e,i)=>({...c1(e),options:[e,i]}),k1=(e,i)=>({...m1(e),options:[e,i]}),A1=(e,i)=>({...v1(e),options:[e,i]}),_1=(e,i)=>({...p1(e),options:[e,i]}),Lf=/(\w+)/g;function T1(e,i){const r=Array.isArray(e)?e:E1(e);for(const t of i){if(!t)continue;let s=t;for(let l=0;l<r.length;l++){const u=s[r[l]];u!==void 0&&(s=u)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function E1(e){const i=[];let r=Lf.exec(e);for(;r;){const[,t,s]=r;i.push(t||s),r=Lf.exec(e)}return i}const w1=/{[^}]*}/g;function Et(e,...i){const r=dc(),t=r.translations||[],s=[...i,...Array.isArray(t)?t.map(u=>u[e]):[t[e]],r.locale[e]];return(u,f)=>{const c=T1(u,s);return f?c.replace(w1,v=>{const m=v.substring(1,v.length-1);if(f[m]===void 0){const p=JSON.stringify(f);throw new Error(`Error translating key '${u}'. No replacement syntax ({}) found for key '${m}'. The following replacements were passed: '${p}'`)}return f[m]}):c}}var R1=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const P1=E.forwardRef((e,i)=>{var{className:r,size:t="medium",title:s,transparent:l=!1,variant:u="neutral",id:f,"data-color":c}=e,v=R1(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:m}=xe(),p=yt(),y=Et("Loader");return M.createElement("svg",Object.assign({"aria-labelledby":f??`loader-${p}`,ref:i,className:m("navds-loader",r,`navds-loader--${t}`,`navds-loader--${u}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??O1(u)},rr(v,["children"]),{"data-variant":u}),M.createElement("title",{id:f??`loader-${p}`},s||y("title")),M.createElement("circle",{className:m("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),M.createElement("circle",{className:m("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function O1(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var S1=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ls=E.forwardRef((e,i)=>{var{as:r="button",variant:t="primary",className:s,children:l,size:u="medium",loading:f=!1,disabled:c,icon:v,iconPosition:m="left",onKeyUp:p,"data-color":y}=e,k=S1(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:x}=xe(),_=c||f?rr(k,["href"]):k,A=R=>{R.key===" "&&!c&&!f&&R.currentTarget.click()};return M.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":y??I1(t),"data-variant":x1(t)},_,{ref:i,onKeyUp:ts(p,A),className:x(s,"navds-button",`navds-button--${t}`,`navds-button--${u}`,{"navds-button--loading":f,"navds-button--icon-only":!!v&&!l,"navds-button--disabled":c??f}),disabled:c??f?!0:void 0}),v&&m==="left"&&M.createElement("span",{className:x("navds-button__icon")},v),f&&M.createElement(P1,{size:u}),l&&M.createElement(pt,{as:"span",size:u==="medium"?"medium":"small"},l),v&&m==="right"&&M.createElement("span",{className:x("navds-button__icon")},v))});function I1(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function x1(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var N1=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const q1={error:QA,warning:CA,info:HA,success:FA},M1=E.forwardRef((e,i)=>{var{children:r,className:t,variant:s,size:l="medium",fullWidth:u=!1,contentMaxWidth:f=!0,inline:c=!1,closeButton:v=!1,onClose:m}=e,p=N1(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:y}=xe(),k=Et("Alert"),x=q1[s];return M.createElement("div",Object.assign({},p,{"data-color":B1(s),"data-variant":s,ref:i,className:y(t,"navds-alert",`navds-alert--${s}`,`navds-alert--${l}`,{"navds-alert--full-width":u,"navds-alert--inline":c,"navds-alert--close-button":v})}),M.createElement(x,{title:k(s),className:y("navds-alert__icon")}),M.createElement(ic,{as:"div",size:l,className:y("navds-alert__wrapper",f&&"navds-alert__wrapper--maxwidth")},r),v&&!c&&M.createElement("div",{className:y("navds-alert__button-wrapper")},M.createElement(ls,{className:y("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:m,type:"button",icon:M.createElement(Jo,{title:["error","warning"].includes(s)?k("closeAlert"):k("closeMessage")})})))});function B1(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function F1(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function L1(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(i=>{let{brand:r,version:t}=i;return r+"/"+t}).join(" "):navigator.userAgent}function j1(){return/apple/i.test(navigator.vendor)}function D1(){return F1().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function C1(){return L1().includes("jsdom/")}const V1="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function jf(e){let i=e.activeElement;for(;((r=i)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;i=i.shadowRoot.activeElement}return i}function Pa(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&Wi(r)){let t=i;for(;t;){if(e===t)return!0;t=t.parentNode||t.host}}return!1}function Vt(e){return"composedPath"in e?e.composedPath()[0]:e.target}function xo(e,i){if(i==null)return!1;if("composedPath"in e)return e.composedPath().includes(i);const r=e;return r.target!=null&&i.contains(r.target)}function H1(e){return e.matches("html,body")}function mt(e){return e?.ownerDocument||document}function G1(e){return Un(e)&&e.matches(V1)}function U1(e){if(!e||C1())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function No(e,i,r){r===void 0&&(r=!0);let t=e.filter(l=>{var u;return l.parentId===i&&((u=l.context)==null?void 0:u.open)}),s=t;for(;s.length;)s=r?e.filter(l=>{var u;return(u=s)==null?void 0:u.some(f=>{var c;return l.parentId===f.id&&((c=l.context)==null?void 0:c.open)})}):e,t=t.concat(s);return t}function $1(e){return"nativeEvent"in e}function rl(e,i){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var $t=typeof document<"u"?E.useLayoutEffect:E.useEffect;const K1={...rc};function qi(e){const i=E.useRef(e);return $t(()=>{i.current=e}),i}const Y1=K1.useInsertionEffect,W1=Y1||(e=>e());function jr(e){const i=E.useRef(()=>{});return W1(()=>{i.current=e}),E.useCallback(function(){for(var r=arguments.length,t=new Array(r),s=0;s<r;s++)t[s]=arguments[s];return i.current==null?void 0:i.current(...t)},[])}const z1="data-floating-ui-focusable",Df="active",Cf="selected",X1={...rc};let Vf=!1,Z1=0;const Hf=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Z1++;function J1(){const[e,i]=E.useState(()=>Vf?Hf():void 0);return $t(()=>{e==null&&i(Hf())},[]),E.useEffect(()=>{Vf=!0},[]),e}const Q1=X1.useId,eT=Q1||J1;function nT(){const e=new Map;return{emit(i,r){var t;(t=e.get(i))==null||t.forEach(s=>s(r))},on(i,r){e.has(i)||e.set(i,new Set),e.get(i).add(r)},off(i,r){var t;(t=e.get(i))==null||t.delete(r)}}}const rT=E.createContext(null),tT=E.createContext(null),Tc=()=>{var e;return((e=E.useContext(rT))==null?void 0:e.id)||null},Il=()=>E.useContext(tT);function xl(e){return"data-floating-ui-"+e}function nr(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Gf=xl("safe-polygon");function qo(e,i,r){if(r&&!rl(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const t=e();return typeof t=="number"?t:t?.[i]}return e?.[i]}function Mo(e){return typeof e=="function"?e():e}function aT(e,i){i===void 0&&(i={});const{open:r,onOpenChange:t,dataRef:s,events:l,elements:u}=e,{enabled:f=!0,delay:c=0,handleClose:v=null,mouseOnly:m=!1,restMs:p=0,move:y=!0}=i,k=Il(),x=Tc(),_=qi(v),A=qi(c),R=qi(r),S=qi(p),P=E.useRef(),D=E.useRef(-1),I=E.useRef(),H=E.useRef(-1),j=E.useRef(!0),C=E.useRef(!1),K=E.useRef(()=>{}),ne=E.useRef(!1),ee=E.useCallback(()=>{var J;const z=(J=s.current.openEvent)==null?void 0:J.type;return z?.includes("mouse")&&z!=="mousedown"},[s]);E.useEffect(()=>{if(!f)return;function J(z){let{open:Z}=z;Z||(nr(D),nr(H),j.current=!0,ne.current=!1)}return l.on("openchange",J),()=>{l.off("openchange",J)}},[f,l]),E.useEffect(()=>{if(!f||!_.current||!r)return;function J(Z){ee()&&t(!1,Z,"hover")}const z=mt(u.floating).documentElement;return z.addEventListener("mouseleave",J),()=>{z.removeEventListener("mouseleave",J)}},[u.floating,r,t,f,_,ee]);const G=E.useCallback(function(J,z,Z){z===void 0&&(z=!0),Z===void 0&&(Z="hover");const de=qo(A.current,"close",P.current);de&&!I.current?(nr(D),D.current=window.setTimeout(()=>t(!1,J,Z),de)):z&&(nr(D),t(!1,J,Z))},[A,t]),F=jr(()=>{K.current(),I.current=void 0}),L=jr(()=>{if(C.current){const J=mt(u.floating).body;J.style.pointerEvents="",J.removeAttribute(Gf),C.current=!1}}),X=jr(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);E.useEffect(()=>{if(!f)return;function J(ve){if(nr(D),j.current=!1,m&&!rl(P.current)||Mo(S.current)>0&&!qo(A.current,"open"))return;const Ae=qo(A.current,"open",P.current);Ae?D.current=window.setTimeout(()=>{R.current||t(!0,ve,"hover")},Ae):r||t(!0,ve,"hover")}function z(ve){if(X()){L();return}K.current();const Ae=mt(u.floating);if(nr(H),ne.current=!1,_.current&&s.current.floatingContext){r||nr(D),I.current=_.current({...s.current.floatingContext,tree:k,x:ve.clientX,y:ve.clientY,onClose(){L(),F(),X()||G(ve,!0,"safe-polygon")}});const Ye=I.current;Ae.addEventListener("mousemove",Ye),K.current=()=>{Ae.removeEventListener("mousemove",Ye)};return}(P.current==="touch"?!Pa(u.floating,ve.relatedTarget):!0)&&G(ve)}function Z(ve){X()||s.current.floatingContext&&(_.current==null||_.current({...s.current.floatingContext,tree:k,x:ve.clientX,y:ve.clientY,onClose(){L(),F(),X()||G(ve)}})(ve))}function de(){nr(D)}function le(ve){X()||G(ve,!1)}if(Ke(u.domReference)){const ve=u.domReference,Ae=u.floating;return r&&ve.addEventListener("mouseleave",Z),y&&ve.addEventListener("mousemove",J,{once:!0}),ve.addEventListener("mouseenter",J),ve.addEventListener("mouseleave",z),Ae&&(Ae.addEventListener("mouseleave",Z),Ae.addEventListener("mouseenter",de),Ae.addEventListener("mouseleave",le)),()=>{r&&ve.removeEventListener("mouseleave",Z),y&&ve.removeEventListener("mousemove",J),ve.removeEventListener("mouseenter",J),ve.removeEventListener("mouseleave",z),Ae&&(Ae.removeEventListener("mouseleave",Z),Ae.removeEventListener("mouseenter",de),Ae.removeEventListener("mouseleave",le))}}},[u,f,e,m,y,G,F,L,t,r,R,k,A,_,s,X,S]),$t(()=>{var J;if(f&&r&&(J=_.current)!=null&&J.__options.blockPointerEvents&&ee()){C.current=!0;const Z=u.floating;if(Ke(u.domReference)&&Z){var z;const de=mt(u.floating).body;de.setAttribute(Gf,"");const le=u.domReference,ve=k==null||(z=k.nodesRef.current.find(Ae=>Ae.id===x))==null||(z=z.context)==null?void 0:z.elements.floating;return ve&&(ve.style.pointerEvents=""),de.style.pointerEvents="none",le.style.pointerEvents="auto",Z.style.pointerEvents="auto",()=>{de.style.pointerEvents="",le.style.pointerEvents="",Z.style.pointerEvents=""}}}},[f,r,x,u,k,_,ee]),$t(()=>{r||(P.current=void 0,ne.current=!1,F(),L())},[r,F,L]),E.useEffect(()=>()=>{F(),nr(D),nr(H),L()},[f,u.domReference,F,L]);const re=E.useMemo(()=>{function J(z){P.current=z.pointerType}return{onPointerDown:J,onPointerEnter:J,onMouseMove(z){const{nativeEvent:Z}=z;function de(){!j.current&&!R.current&&t(!0,Z,"hover")}m&&!rl(P.current)||r||Mo(S.current)===0||ne.current&&z.movementX**2+z.movementY**2<2||(nr(H),P.current==="touch"?de():(ne.current=!0,H.current=window.setTimeout(de,Mo(S.current))))}}},[m,t,r,R,S]);return E.useMemo(()=>f?{reference:re}:{},[f,re])}function Bo(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&Wi(r)){let t=i;for(;t;){if(e===t)return!0;t=t.parentNode||t.host}}return!1}function iT(e){return"composedPath"in e?e.composedPath()[0]:e.target}const sT={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},oT={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Uf=e=>{var i,r;return{escapeKey:typeof e=="boolean"?e:(i=e?.escapeKey)!=null?i:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function lT(e,i){i===void 0&&(i={});const{open:r,onOpenChange:t,elements:s,dataRef:l}=e,{enabled:u=!0,escapeKey:f=!0,outsidePress:c=!0,outsidePressEvent:v="pointerdown",referencePress:m=!1,referencePressEvent:p="pointerdown",ancestorScroll:y=!1,bubbles:k,capture:x}=i,_=Il(),A=jr(typeof c=="function"?c:()=>!1),R=typeof c=="function"?A:c,S=E.useRef(!1),P=E.useRef(!1),{escapeKey:D,outsidePress:I}=Uf(k),{escapeKey:H,outsidePress:j}=Uf(x),C=E.useRef(!1),K=jr(X=>{var re;if(!r||!u||!f||X.key!=="Escape"||C.current)return;const J=(re=l.current.floatingContext)==null?void 0:re.nodeId,z=_?No(_.nodesRef.current,J):[];if(!D&&(X.stopPropagation(),z.length>0)){let Z=!0;if(z.forEach(de=>{var le;if((le=de.context)!=null&&le.open&&!de.context.dataRef.current.__escapeKeyBubbles){Z=!1;return}}),!Z)return}t(!1,$1(X)?X.nativeEvent:X,"escape-key")}),ne=jr(X=>{var re;const J=()=>{var z;K(X),(z=Vt(X))==null||z.removeEventListener("keydown",J)};(re=Vt(X))==null||re.addEventListener("keydown",J)}),ee=jr(X=>{var re;const J=S.current;S.current=!1;const z=P.current;if(P.current=!1,v==="click"&&z||J||typeof R=="function"&&!R(X))return;const Z=Vt(X),de="["+xl("inert")+"]",le=mt(s.floating).querySelectorAll(de);let ve=Ke(Z)?Z:null;for(;ve&&!Vr(ve);){const Ve=Gr(ve);if(Vr(Ve)||!Ke(Ve))break;ve=Ve}if(le.length&&Ke(Z)&&!H1(Z)&&!Pa(Z,s.floating)&&Array.from(le).every(Ve=>!Pa(ve,Ve)))return;if(Un(Z)&&L){const Ve=Vr(Z),He=tr(Z),Ee=/auto|scroll/,Ne=Ve||Ee.test(He.overflowX),nn=Ve||Ee.test(He.overflowY),Xe=Ne&&Z.clientWidth>0&&Z.scrollWidth>Z.clientWidth,Ze=nn&&Z.clientHeight>0&&Z.scrollHeight>Z.clientHeight,Pn=He.direction==="rtl",Ge=Ze&&(Pn?X.offsetX<=Z.offsetWidth-Z.clientWidth:X.offsetX>Z.clientWidth),on=Xe&&X.offsetY>Z.clientHeight;if(Ge||on)return}const Ae=(re=l.current.floatingContext)==null?void 0:re.nodeId,An=_&&No(_.nodesRef.current,Ae).some(Ve=>{var He;return xo(X,(He=Ve.context)==null?void 0:He.elements.floating)});if(xo(X,s.floating)||xo(X,s.domReference)||An)return;const Ye=_?No(_.nodesRef.current,Ae):[];if(Ye.length>0){let Ve=!0;if(Ye.forEach(He=>{var Ee;if((Ee=He.context)!=null&&Ee.open&&!He.context.dataRef.current.__outsidePressBubbles){Ve=!1;return}}),!Ve)return}t(!1,X,"outside-press")}),G=jr(X=>{var re;const J=()=>{var z;ee(X),(z=Vt(X))==null||z.removeEventListener(v,J)};(re=Vt(X))==null||re.addEventListener(v,J)});E.useEffect(()=>{if(!r||!u)return;l.current.__escapeKeyBubbles=D,l.current.__outsidePressBubbles=I;let X=-1;function re(le){t(!1,le,"ancestor-scroll")}function J(){window.clearTimeout(X),C.current=!0}function z(){X=window.setTimeout(()=>{C.current=!1},ss()?5:0)}const Z=mt(s.floating);f&&(Z.addEventListener("keydown",H?ne:K,H),Z.addEventListener("compositionstart",J),Z.addEventListener("compositionend",z)),R&&Z.addEventListener(v,j?G:ee,j);let de=[];return y&&(Ke(s.domReference)&&(de=et(s.domReference)),Ke(s.floating)&&(de=de.concat(et(s.floating))),!Ke(s.reference)&&s.reference&&s.reference.contextElement&&(de=de.concat(et(s.reference.contextElement)))),de=de.filter(le=>{var ve;return le!==((ve=Z.defaultView)==null?void 0:ve.visualViewport)}),de.forEach(le=>{le.addEventListener("scroll",re,{passive:!0})}),()=>{f&&(Z.removeEventListener("keydown",H?ne:K,H),Z.removeEventListener("compositionstart",J),Z.removeEventListener("compositionend",z)),R&&Z.removeEventListener(v,j?G:ee,j),de.forEach(le=>{le.removeEventListener("scroll",re)}),window.clearTimeout(X)}},[l,s,f,R,v,r,t,y,u,D,I,K,H,ne,ee,j,G]),E.useEffect(()=>{S.current=!1},[R,v]);const F=E.useMemo(()=>({onKeyDown:K,...m&&{[sT[p]]:X=>{t(!1,X.nativeEvent,"reference-press")},...p!=="click"&&{onClick(X){t(!1,X.nativeEvent,"reference-press")}}}}),[K,t,m,p]),L=E.useMemo(()=>({onKeyDown:K,onMouseDown(){P.current=!0},onMouseUp(){P.current=!0},[oT[v]]:()=>{S.current=!0}}),[K,v]);return E.useMemo(()=>u?{reference:F,floating:L}:{},[u,F,L])}function uT(e){const{open:i=!1,onOpenChange:r,elements:t}=e,s=eT(),l=E.useRef({}),[u]=E.useState(()=>nT()),f=Tc()!=null,[c,v]=E.useState(t.reference),m=jr((k,x,_)=>{l.current.openEvent=k?x:void 0,u.emit("openchange",{open:k,event:x,reason:_,nested:f}),r?.(k,x,_)}),p=E.useMemo(()=>({setPositionReference:v}),[]),y=E.useMemo(()=>({reference:c||t.reference||null,floating:t.floating||null,domReference:t.reference}),[c,t.reference,t.floating]);return E.useMemo(()=>({dataRef:l,open:i,onOpenChange:m,elements:y,events:u,floatingId:s,refs:p}),[i,m,y,u,s,p])}function dT(e){e===void 0&&(e={});const{nodeId:i}=e,r=uT({...e,elements:{reference:null,floating:null,...e.elements}}),t=e.rootContext||r,s=t.elements,[l,u]=E.useState(null),[f,c]=E.useState(null),m=s?.domReference||l,p=E.useRef(null),y=Il();$t(()=>{m&&(p.current=m)},[m]);const k=b1({...e,elements:{...s,...f&&{reference:f}}}),x=E.useCallback(P=>{const D=Ke(P)?{getBoundingClientRect:()=>P.getBoundingClientRect(),getClientRects:()=>P.getClientRects(),contextElement:P}:P;c(D),k.refs.setReference(D)},[k.refs]),_=E.useCallback(P=>{(Ke(P)||P===null)&&(p.current=P,u(P)),(Ke(k.refs.reference.current)||k.refs.reference.current===null||P!==null&&!Ke(P))&&k.refs.setReference(P)},[k.refs]),A=E.useMemo(()=>({...k.refs,setReference:_,setPositionReference:x,domReference:p}),[k.refs,_,x]),R=E.useMemo(()=>({...k.elements,domReference:m}),[k.elements,m]),S=E.useMemo(()=>({...k,...t,refs:A,elements:R,nodeId:i}),[k,A,R,i,t]);return $t(()=>{t.dataRef.current.floatingContext=S;const P=y?.nodesRef.current.find(D=>D.id===i);P&&(P.context=S)}),E.useMemo(()=>({...k,context:S,refs:A,elements:R}),[k,A,R,S])}function Fo(){return D1()&&j1()}function fT(e,i){i===void 0&&(i={});const{open:r,onOpenChange:t,events:s,dataRef:l,elements:u}=e,{enabled:f=!0,visibleOnly:c=!0}=i,v=E.useRef(!1),m=E.useRef(-1),p=E.useRef(!0);E.useEffect(()=>{if(!f)return;const k=Fn(u.domReference);function x(){!r&&Un(u.domReference)&&u.domReference===jf(mt(u.domReference))&&(v.current=!0)}function _(){p.current=!0}function A(){p.current=!1}return k.addEventListener("blur",x),Fo()&&(k.addEventListener("keydown",_,!0),k.addEventListener("pointerdown",A,!0)),()=>{k.removeEventListener("blur",x),Fo()&&(k.removeEventListener("keydown",_,!0),k.removeEventListener("pointerdown",A,!0))}},[u.domReference,r,f]),E.useEffect(()=>{if(!f)return;function k(x){let{reason:_}=x;(_==="reference-press"||_==="escape-key")&&(v.current=!0)}return s.on("openchange",k),()=>{s.off("openchange",k)}},[s,f]),E.useEffect(()=>()=>{nr(m)},[]);const y=E.useMemo(()=>({onMouseLeave(){v.current=!1},onFocus(k){if(v.current)return;const x=Vt(k.nativeEvent);if(c&&Ke(x)){if(Fo()&&!k.relatedTarget){if(!p.current&&!G1(x))return}else if(!U1(x))return}t(!0,k.nativeEvent,"focus")},onBlur(k){v.current=!1;const x=k.relatedTarget,_=k.nativeEvent,A=Ke(x)&&x.hasAttribute(xl("focus-guard"))&&x.getAttribute("data-type")==="outside";m.current=window.setTimeout(()=>{var R;const S=jf(u.domReference?u.domReference.ownerDocument:document);!x&&S===u.domReference||Pa((R=l.current.floatingContext)==null?void 0:R.refs.floating.current,S)||Pa(u.domReference,S)||A||t(!1,_,"focus")})}}),[l,u.domReference,t,c]);return E.useMemo(()=>f?{reference:y}:{},[f,y])}function Lo(e,i,r){const t=new Map,s=r==="item";let l=e;if(s&&e){const{[Df]:u,[Cf]:f,...c}=e;l=c}return{...r==="floating"&&{tabIndex:-1,[z1]:""},...l,...i.map(u=>{const f=u?u[r]:null;return typeof f=="function"?e?f(e):null:f}).concat(e).reduce((u,f)=>(f&&Object.entries(f).forEach(c=>{let[v,m]=c;if(!(s&&[Df,Cf].includes(v)))if(v.indexOf("on")===0){if(t.has(v)||t.set(v,[]),typeof m=="function"){var p;(p=t.get(v))==null||p.push(m),u[v]=function(){for(var y,k=arguments.length,x=new Array(k),_=0;_<k;_++)x[_]=arguments[_];return(y=t.get(v))==null?void 0:y.map(A=>A(...x)).find(A=>A!==void 0)}}}else u[v]=m}),u),{})}}function gT(e){e===void 0&&(e=[]);const i=e.map(f=>f?.reference),r=e.map(f=>f?.floating),t=e.map(f=>f?.item),s=E.useCallback(f=>Lo(f,e,"reference"),i),l=E.useCallback(f=>Lo(f,e,"floating"),r),u=E.useCallback(f=>Lo(f,e,"item"),t);return E.useMemo(()=>({getReferenceProps:s,getFloatingProps:l,getItemProps:u}),[s,l,u])}function cT(e,i,r){r===void 0&&(r=!0);let t=e.filter(l=>{var u;return l.parentId===i&&((u=l.context)==null?void 0:u.open)}),s=t;for(;s.length;)s=r?e.filter(l=>{var u;return(u=s)==null?void 0:u.some(f=>{var c;return l.parentId===f.id&&((c=l.context)==null?void 0:c.open)})}):e,t=t.concat(s);return t}function $f(e,i){const[r,t]=e;let s=!1;const l=i.length;for(let u=0,f=l-1;u<l;f=u++){const[c,v]=i[u]||[0,0],[m,p]=i[f]||[0,0];v>=t!=p>=t&&r<=(m-c)*(t-v)/(p-v)+c&&(s=!s)}return s}function mT(e,i){return e[0]>=i.x&&e[0]<=i.x+i.width&&e[1]>=i.y&&e[1]<=i.y+i.height}function vT(e){e===void 0&&(e={});const{buffer:i=.5,blockPointerEvents:r=!1,requireIntent:t=!0}=e;let s,l=!1,u=null,f=null,c=performance.now();function v(p,y){const k=performance.now(),x=k-c;if(u===null||f===null||x===0)return u=p,f=y,c=k,null;const _=p-u,A=y-f,S=Math.sqrt(_*_+A*A)/x;return u=p,f=y,c=k,S}const m=p=>{let{x:y,y:k,placement:x,elements:_,onClose:A,nodeId:R,tree:S}=p;return function(D){function I(){clearTimeout(s),A()}if(clearTimeout(s),!_.domReference||!_.floating||x==null||y==null||k==null)return;const{clientX:H,clientY:j}=D,C=[H,j],K=iT(D),ne=D.type==="mouseleave",ee=Bo(_.floating,K),G=Bo(_.domReference,K),F=_.domReference.getBoundingClientRect(),L=_.floating.getBoundingClientRect(),X=x.split("-")[0],re=y>L.right-L.width/2,J=k>L.bottom-L.height/2,z=mT(C,F),Z=L.width>F.width,de=L.height>F.height,le=(Z?F:L).left,ve=(Z?F:L).right,Ae=(de?F:L).top,An=(de?F:L).bottom;if(ee&&(l=!0,!ne))return;if(G&&(l=!1),G&&!ne){l=!0;return}if(ne&&Ke(D.relatedTarget)&&Bo(_.floating,D.relatedTarget)||S&&cT(S.nodesRef.current,R).some(He=>{let{context:Ee}=He;return Ee?.open}))return;if(X==="top"&&k>=F.bottom-1||X==="bottom"&&k<=F.top+1||X==="left"&&y>=F.right-1||X==="right"&&y<=F.left+1)return I();let Ye=[];switch(X){case"top":Ye=[[le,F.top+1],[le,L.bottom-1],[ve,L.bottom-1],[ve,F.top+1]];break;case"bottom":Ye=[[le,L.top+1],[le,F.bottom-1],[ve,F.bottom-1],[ve,L.top+1]];break;case"left":Ye=[[L.right-1,An],[L.right-1,Ae],[F.left+1,Ae],[F.left+1,An]];break;case"right":Ye=[[F.right-1,An],[F.right-1,Ae],[L.left+1,Ae],[L.left+1,An]];break}function Ve(He){let[Ee,Ne]=He;switch(X){case"top":{const nn=[Z?Ee+i/2:re?Ee+i*4:Ee-i*4,Ne+i+1],Xe=[Z?Ee-i/2:re?Ee+i*4:Ee-i*4,Ne+i+1],Ze=[[L.left,re||Z?L.bottom-i:L.top],[L.right,re?Z?L.bottom-i:L.top:L.bottom-i]];return[nn,Xe,...Ze]}case"bottom":{const nn=[Z?Ee+i/2:re?Ee+i*4:Ee-i*4,Ne-i],Xe=[Z?Ee-i/2:re?Ee+i*4:Ee-i*4,Ne-i],Ze=[[L.left,re||Z?L.top+i:L.bottom],[L.right,re?Z?L.top+i:L.bottom:L.top+i]];return[nn,Xe,...Ze]}case"left":{const nn=[Ee+i+1,de?Ne+i/2:J?Ne+i*4:Ne-i*4],Xe=[Ee+i+1,de?Ne-i/2:J?Ne+i*4:Ne-i*4];return[...[[J||de?L.right-i:L.left,L.top],[J?de?L.right-i:L.left:L.right-i,L.bottom]],nn,Xe]}case"right":{const nn=[Ee-i,de?Ne+i/2:J?Ne+i*4:Ne-i*4],Xe=[Ee-i,de?Ne-i/2:J?Ne+i*4:Ne-i*4],Ze=[[J||de?L.left+i:L.right,L.top],[J?de?L.left+i:L.right:L.left+i,L.bottom]];return[nn,Xe,...Ze]}}}if(!$f([H,j],Ye)){if(l&&!z)return I();if(!ne&&t){const He=v(D.clientX,D.clientY);if(He!==null&&He<.1)return I()}$f([H,j],Ve([y,k]))?!l&&t&&(s=window.setTimeout(I,40)):I()}}};return m.__options={blockPointerEvents:r},m}const Ec=()=>{const{cn:e}=xe();return M.createElement(uc,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},wc=()=>{const{cn:e}=xe();return M.createElement(uc,{title:Et("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},Xi=E.createContext(null),us=(e,i)=>{var r,t,s;const{size:l,error:u,errorId:f}=e,c=E.useContext(Xi),v=yt(),m=(r=e.id)!==null&&r!==void 0?r:`${i}-${v}`,p=f??`${i}-error-${v}`,y=`${i}-description-${v}`,k=c?.disabled||e.disabled,x=(c?.readOnly||e.readOnly)&&!k||void 0,_=!k&&!x&&!!(u||c?.error),A=!k&&!x&&!!u&&typeof u!="boolean",R=Object.assign({},_?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:A,hasError:_,errorId:p,inputDescriptionId:y,size:(t=l??c?.size)!==null&&t!==void 0?t:"medium",readOnly:x,inputProps:Object.assign(Object.assign({id:m},R),{"aria-describedby":ns(e["aria-describedby"],{[y]:!!e?.description&&typeof e?.description=="string",[p]:A,[(s=c?.errorId)!==null&&s!==void 0?s:""]:_&&!!c?.error})||void 0,disabled:k})}};function hn(e,i,r,t){return t?typeof t=="string"?{[`--__${e}c-${i}-${r}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([s,l])=>[`--__${e}c-${i}-${r}-${s}`,l])):{}}const hT={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},bT={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},Kf=(e,i,r,t,s,l)=>i.split(" ").map((u,f,c)=>{var v,m;if(e==="margin-inline"&&u==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&u==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&u==="auto")return"auto";let p=`var(--${l}-${r}-${u})`;if(t.includes(u))p=u==="px"?"1px":u;else if(r==="spacing"&&u.startsWith("space"))p=`var(--${l}-${u})`;else if(r==="spacing"){const y=`--${l}-spacing-${u}`;p=`var(${(v=hT[y])!==null&&v!==void 0?v:y})`}else if(r==="radius"){const y=(m=bT[u])!==null&&m!==void 0?m:u;p=`var(--${l}-radius-${y})`}return s?u==="0"?"0":`calc(-1 * ${p})`:p}).join(" ");function qn(e,i,r,t,s,l=!1,u=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${i}-${r}-xs`]:Kf(r,s,t,u,l,e)};const f={};return Object.entries(s).forEach(([c,v])=>{f[`--__${e}c-${i}-${r}-${c}`]=Kf(r,v,t,u,l,e)}),f}const Nl=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],ql=({children:e,className:i,padding:r,paddingInline:t,paddingBlock:s,margin:l,marginInline:u,marginBlock:f,width:c,minWidth:v,maxWidth:m,height:p,minHeight:y,maxHeight:k,position:x,inset:_,top:A,right:R,left:S,bottom:P,overflow:D,overflowX:I,overflowY:H,flexBasis:j,flexGrow:C,flexShrink:K,gridColumn:ne})=>{const ee=Sa(!1),{cn:G}=xe(),F=ee?"ax":"a",L=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},qn(F,"r","p","spacing",r)),qn(F,"r","pi","spacing",t)),qn(F,"r","pb","spacing",s)),qn(F,"r","m","spacing",l)),qn(F,"r","mi","spacing",u)),qn(F,"r","mb","spacing",f)),hn(F,"r","w",c)),hn(F,"r","minw",v)),hn(F,"r","maxw",m)),hn(F,"r","h",p)),hn(F,"r","minh",y)),hn(F,"r","maxh",k)),hn(F,"r","position",x)),qn(F,"r","inset","spacing",_)),qn(F,"r","top","spacing",A)),qn(F,"r","right","spacing",R)),qn(F,"r","bottom","spacing",P)),qn(F,"r","left","spacing",S)),hn(F,"r","overflow",D)),hn(F,"r","overflowx",I)),hn(F,"r","overflowy",H)),hn(F,"r","flex-basis",j)),hn(F,"r","flex-grow",C)),hn(F,"r","flex-shrink",K)),hn(F,"r","grid-column",ne));return M.createElement(Yt,{className:G({className:i,"navds-r-p":r,"navds-r-pi":t,"navds-r-pb":s,"navds-r-m":l,"navds-r-mi":u,"navds-r-mb":f,"navds-r-w":c,"navds-r-minw":v,"navds-r-maxw":m,"navds-r-h":p,"navds-r-minh":y,"navds-r-maxh":k,"navds-r-position":x,"navds-r-inset":_,"navds-r-top":A,"navds-r-right":R,"navds-r-bottom":P,"navds-r-left":S,"navds-r-overflow":D,"navds-r-overflowx":I,"navds-r-overflowy":H,"navds-r-flex-basis":j,"navds-r-flex-grow":C,"navds-r-flex-shrink":K,"navds-r-grid-column":ne}),style:L},e)};var pT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const yT=E.forwardRef((e,i)=>{var{children:r,className:t,as:s="div",background:l,borderColor:u,borderWidth:f,borderRadius:c,shadow:v,style:m,asChild:p}=e,y=pT(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:k}=xe(),x=Object.assign(Object.assign(Object.assign({},m),{"--__axc-box-background":l?`var(--ax-bg-${l})`:void 0,"--__axc-box-shadow":v?`var(--ax-shadow-${v})`:void 0,"--__axc-box-border-color":u?`var(--ax-border-${u})`:void 0,"--__axc-box-border-width":f?f.split(" ").map(A=>`${A}px`).join(" "):void 0}),qn("ax","box","radius","radius",c,!1,["0"])),_=p?Yt:s;return M.createElement(ql,Object.assign({},y),M.createElement(_,Object.assign({},rr(y,Nl),{ref:i,style:x,className:k("navds-box",t,{"navds-box-bg":l,"navds-box-border-color":u,"navds-box-border-width":f,"navds-box-radius":c,"navds-box-shadow":v})}),r))});var kT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const AT=E.forwardRef((e,i)=>{var{children:r,className:t,as:s="div",background:l,borderColor:u,borderWidth:f,borderRadius:c,shadow:v,style:m,asChild:p}=e,y=kT(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const k=Sa(!1),{cn:x}=xe(),_=k?"ax":"a",A=Object.assign(Object.assign(Object.assign({},m),{[`--__${_}c-box-background`]:l?`var(--a-${l})`:void 0,[`--__${_}c-box-shadow`]:v?`var(--a-shadow-${v})`:void 0,[`--__${_}c-box-border-color`]:u?`var(--a-${u})`:void 0,[`--__${_}c-box-border-width`]:f?f.split(" ").map(S=>`${S}px`).join(" "):void 0}),qn(_,"box","radius","radius",c,!1,["0"])),R=p?Yt:s;return M.createElement(ql,Object.assign({},y),M.createElement(R,Object.assign({},rr(y,Nl),{ref:i,style:A,className:x("navds-box",t,{"navds-box-bg":l,"navds-box-border-color":u,"navds-box-border-width":f,"navds-box-border-radius":c,"navds-box-shadow":v})}),r))}),Rc=AT;Rc.New=yT;var _T=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Pc=E.forwardRef((e,i)=>{var{children:r,className:t,as:s="div",align:l,justify:u,wrap:f=!0,gap:c,style:v,direction:m="row",asChild:p}=e,y=_T(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const x=Sa(!1)?"ax":"a",{cn:_}=xe(),A=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},v),qn(x,"stack","gap","spacing",c)),hn(x,"stack","direction",m)),hn(x,"stack","align",l)),hn(x,"stack","justify",u)),R=p?Yt:s;return M.createElement(ql,Object.assign({},y),M.createElement(R,Object.assign({},rr(y,Nl),{ref:i,style:A,className:_("navds-stack",t,{"navds-vstack":m==="column","navds-hstack":m==="row","navds-stack-gap":c,"navds-stack-align":l,"navds-stack-justify":u,"navds-stack-direction":m,"navds-stack-wrap":f})}),r))});var TT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Ml=E.forwardRef((e,i)=>{var{as:r="div"}=e,t=TT(e,["as"]);return M.createElement(Pc,Object.assign({as:r},t,{ref:i,direction:"row"}))});var ET=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const _t=E.forwardRef((e,i)=>{var{as:r="div"}=e,t=ET(e,["as"]);return M.createElement(Pc,Object.assign({as:r},t,{ref:i,direction:"column",wrap:!1}))});var wT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const RT=E.forwardRef((e,i)=>{var{className:r}=e,t=wT(e,["className"]);const{cn:s}=xe();return M.createElement("tbody",Object.assign({},t,{ref:i,className:s("navds-table__body",r)}))});var PT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Oc=E.forwardRef((e,i)=>{var{className:r,children:t,align:s,textSize:l}=e,u=PT(e,["className","children","align","textSize"]);const{cn:f}=xe();return M.createElement("th",Object.assign({ref:i,className:f("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":l==="small"})},u),t)}),Sc=E.createContext(null);var OT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ST=E.forwardRef((e,i)=>{var r,t,s,l,{className:u,children:f,sortable:c=!1,sortKey:v}=e,m=OT(e,["className","children","sortable","sortKey"]);const p=E.useContext(Sc),{cn:y}=xe();return c&&!v&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),M.createElement(Oc,Object.assign({scope:"col",ref:i,className:y(u),"aria-sort":c?((r=p?.sort)===null||r===void 0?void 0:r.orderBy)===v?(t=p?.sort)===null||t===void 0?void 0:t.direction:"none":void 0},m),c?M.createElement("button",{type:"button",className:y("navds-table__sort-button"),onClick:c&&v?()=>{var k;return(k=p?.onSortChange)===null||k===void 0?void 0:k.call(p,v)}:void 0},f,((s=p?.sort)===null||s===void 0?void 0:s.orderBy)===v?((l=p?.sort)===null||l===void 0?void 0:l.direction)==="descending"?M.createElement(WA,{"aria-hidden":!0}):M.createElement(XA,{"aria-hidden":!0}):M.createElement(MA,{"aria-hidden":!0})):f)});var IT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Ic=E.forwardRef((e,i)=>{var{className:r,children:t="",align:s,textSize:l}=e,u=IT(e,["className","children","align","textSize"]);const{cn:f}=xe();return M.createElement(mr,Object.assign({as:"td",ref:i,className:f("navds-table__data-cell",r,{[`navds-table__data-cell--align-${s}`]:s}),size:l},u),t)});var xT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const NT=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function qT(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function Yf(e){return typeof e=="string"&&e[e.length-1]==="%"&&qT(e.substring(0,e.length-1))}function jo(e,i){i===0&&e?.style&&(e.style.display="none")}function MT(e,i){i===0&&e?.style&&(e.style.display="")}const BT=e=>{var{children:i,className:r,innerClassName:t,duration:s=250,easing:l="ease",height:u}=e,f=xT(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=xe(),v=E.useRef(u),m=E.useRef(null),p=E.useRef(),y=E.useRef(),k=E.useRef(u),x=E.useRef("visible"),_=NT?0:s;typeof k.current=="number"?(typeof u!="string"&&(k.current=u<0?0:u),x.current="hidden"):Yf(k.current)&&(k.current=u==="0%"?0:u,x.current="hidden");const[A,R]=E.useState(k.current),[S,P]=E.useState(x.current),[D,I]=E.useState(!1);E.useEffect(()=>{jo(m.current,k.current)},[]),E.useEffect(()=>{if(u!==v.current&&m.current){MT(m.current,v.current),m.current.style.overflow="hidden";const K=m.current.offsetHeight;m.current.style.overflow="";const ne=_;let ee,G,F="hidden",L;const X=v.current==="auto";typeof u=="number"?(ee=u<0?0:u,G=ee):Yf(u)?(ee=u==="0%"?0:u,G=ee):(ee=K,G="auto",F=void 0),X&&(G=ee,ee=K),R(ee),P("hidden"),I(!X),clearTimeout(y.current),clearTimeout(p.current),X?(L=!0,y.current=setTimeout(()=>{R(G),P(F),I(L)},50),p.current=setTimeout(()=>{I(!1),jo(m.current,G)},ne)):y.current=setTimeout(()=>{R(G),P(F),I(!1),u!=="auto"&&jo(m.current,ee)},ne)}return v.current=u,()=>{clearTimeout(y.current),clearTimeout(p.current)}},[u]);const H={height:A,overflow:S};D&&(H.transition=`height ${_}ms ${l} 0ms`,H.WebkitTransition=H.transition);const C=typeof f["aria-hidden"]<"u"?f["aria-hidden"]:u===0;return M.createElement("div",Object.assign({},f,{className:c(r),style:H}),M.createElement("div",{"aria-hidden":C,className:c(t),ref:m},i))};var FT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const xc=E.forwardRef((e,i)=>{var{className:r,selected:t=!1,shadeOnHover:s=!0}=e,l=FT(e,["className","selected","shadeOnHover"]);const{cn:u}=xe();return M.createElement("tr",Object.assign({},l,{ref:i,className:u("navds-table__row",r,{"navds-table__row--selected":t,"navds-table__row--shade-on-hover":s})}))});var LT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const jT=E.forwardRef((e,i)=>{var{className:r,children:t,content:s,togglePlacement:l="left",defaultOpen:u=!1,open:f,onOpenChange:c,expansionDisabled:v=!1,expandOnRowClick:m=!1,colSpan:p=999,contentGutter:y,onClick:k}=e,x=LT(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:_}=xe(),[A,R]=oc({defaultValue:u,value:f,onChange:c}),S=Et("global"),P=yt(),D=H=>{R(j=>!j),H.stopPropagation()},I=H=>{m&&!v&&!Nc(H.target)&&D(H)};return M.createElement(M.Fragment,null,M.createElement(xc,Object.assign({},x,{ref:i,className:_("navds-table__expandable-row",r,{"navds-table__expandable-row--open":A,"navds-table__expandable-row--expansion-disabled":v,"navds-table__expandable-row--clickable":m}),onClick:ts(k,I)}),l==="right"&&t,M.createElement(Ic,{className:_("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":A}),onClick:v?()=>null:D},!v&&M.createElement("button",{className:_("navds-table__toggle-expand-button"),type:"button","aria-controls":P,"aria-expanded":A,onClick:D},M.createElement(jA,{className:_("navds-table__expandable-icon"),title:S(A?"showLess":"showMore")}))),l==="left"&&t),M.createElement("tr",{"data-state":A?"open":"closed",className:_("navds-table__expanded-row"),"aria-hidden":!A,id:P},M.createElement("td",{colSpan:p,className:_("navds-table__expanded-row-cell")},M.createElement(BT,{className:_("navds-table__expanded-row-collapse"),innerClassName:_(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${y??l}`),height:A?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function Nc(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Nc(e.parentElement)}var DT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const CT=E.forwardRef((e,i)=>{var{className:r}=e,t=DT(e,["className"]);const{cn:s}=xe();return M.createElement("thead",Object.assign({},t,{ref:i,className:s("navds-table__header",r)}))});var VT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const je=E.forwardRef((e,i)=>{var{className:r,zebraStripes:t=!1,size:s="medium",onSortChange:l,sort:u,stickyHeader:f=!1}=e,c=VT(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:v}=xe();return M.createElement(Sc.Provider,{value:{onSortChange:l,sort:u}},M.createElement("table",Object.assign({},c,{ref:i,className:v("navds-table",`navds-table--${s}`,r,{"navds-table--zebra-stripes":t,"navds-table--sticky-header":f})})))});je.Header=CT;je.Body=RT;je.Row=xc;je.ColumnHeader=ST;je.HeaderCell=Oc;je.DataCell=Ic;je.ExpandableRow=jT;var HT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const GT=E.forwardRef((e,i)=>{var{children:r,className:t,variant:s,size:l="medium",icon:u,"data-color":f}=e,c=HT(e,["children","className","variant","size","icon","data-color"]);const{cn:v}=xe(),m=s?.endsWith("-filled")&&"strong",p=s?.endsWith("-moderate")&&"moderate";return M.createElement(mr,Object.assign({"data-color":f??UT(s),"data-variant":m||p||"outline"},c,{ref:i,as:"span",size:l==="medium"?"medium":"small",className:v("navds-tag",t,`navds-tag--${s}`,`navds-tag--${l}`)}),u&&M.createElement("span",{className:v("navds-tag__icon--left")},u),r)});function UT(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var $T=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const KT=E.forwardRef((e,i)=>{var{children:r,className:t,arrow:s=!0,placement:l="top",open:u,defaultOpen:f=!1,onOpenChange:c,offset:v,content:m,delay:p=150,id:y,keys:k,maxChar:x=80,describesChild:_=!1}=e,A=$T(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:R}=xe(),[S,P]=oc({defaultValue:f,value:u,onChange:c}),D=E.useRef(null),I=e_(!1),H=I?I.ref.current:void 0,{x:j,y:C,strategy:K,context:ne,placement:ee,middlewareData:{arrow:{x:G,y:F}={},hide:{referenceHidden:L}={}},refs:X}=dT({placement:l,open:S,onOpenChange:le=>P(le),middleware:[y1(v??(s?8:4)),k1(),A1({padding:5,fallbackPlacements:["bottom","top"]}),_1({element:D,padding:5})],whileElementsMounted:I?(le,ve,Ae)=>Mf(le,ve,Ae,{animationFrame:!0}):Mf,strategy:I?"fixed":void 0}),{getReferenceProps:re,getFloatingProps:J}=gT([aT(ne,{handleClose:vT(),restMs:p}),fT(ne),lT(ne)]),z=yt(y),Z=Tl(i,X.setFloating);if(!r||r?.type===M.Fragment||r===M.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;m?.length>x&&S&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${m.length}
Tooltip-content: ${m}`);const de=_?S?{"aria-describedby":z}:{title:m}:{"aria-label":m};return M.createElement(M.Fragment,null,M.createElement(Yt,Object.assign({ref:X.setReference},re(),de,{"aria-keyshortcuts":k?k.join("+"):void 0}),r),M.createElement(F_,{rootElement:H,asChild:!0},S&&M.createElement("div",Object.assign({},J(Object.assign(Object.assign({},A),{ref:Z,style:{position:K,top:C??0,left:j??0,visibility:L?"hidden":"visible"},role:"tooltip",id:z,className:R("navds-tooltip","navds-detail navds-detail--small",t)})),{"data-side":ee,"data-state":"open"}),m,k&&M.createElement("span",{className:R("navds-tooltip__keys"),"aria-hidden":!0},k.map(le=>M.createElement(RA,{as:"kbd",key:le,className:R("navds-tooltip__key")},le))),s&&M.createElement("div",{ref:le=>{D.current=le},className:R("navds-tooltip__arrow"),style:{left:G!=null?`${G}px`:"",top:F!=null?`${F}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[ee]]:"-3.5px"}}))))}),YT=e=>{const i=us(e,"fieldset"),{inputProps:r}=i;return Object.assign(Object.assign({},i),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var WT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const zT=E.forwardRef((e,i)=>{var r,t,s;const{inputProps:l,errorId:u,showErrorMsg:f,hasError:c,size:v,readOnly:m,inputDescriptionId:p}=YT(e),{cn:y}=xe(),k=E.useContext(Xi),{children:x,className:_,errorPropagation:A=!0,legend:R,description:S,hideLegend:P,nativeReadOnly:D=!0}=e,I=WT(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return M.createElement(Xi.Provider,{value:{error:A?(r=e.error)!==null&&r!==void 0?r:k?.error:void 0,errorId:ns({[u]:f,[(t=k?.errorId)!==null&&t!==void 0?t:""]:!!k?.error}),size:v,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:m}},M.createElement("fieldset",Object.assign({},rr(I,["errorId","error","size","readOnly"]),rr(l,["aria-describedby","aria-invalid"]),{ref:i,className:y(_,"navds-fieldset",`navds-fieldset--${v}`,{"navds-fieldset--error":c,"navds-fieldset--readonly":m})}),M.createElement(pt,{size:v,as:"legend",className:y("navds-fieldset__legend",{"navds-sr-only":!!P})},m&&(D?M.createElement(Ec,null):M.createElement(wc,null)),R),!!S&&M.createElement(mr,{className:y("navds-fieldset__description",{"navds-sr-only":!!P}),id:p,size:v??"medium",as:"div"},e.description),x,M.createElement("div",{id:u,"aria-relevant":"additions removals","aria-live":"polite",className:y("navds-fieldset__error")},f&&M.createElement(rs,{size:v,showIcon:!0},e.error))))});var XT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const qc=E.createContext(null);E.forwardRef((e,i)=>{var r,t,{value:s,defaultValue:l,onChange:u=()=>{},children:f,className:c}=e,v=XT(e,["value","defaultValue","onChange","children","className"]);const{cn:m}=xe(),p=E.useContext(Xi),[y,k]=E.useState(l??[]),x=_=>{const A=s??y,R=A.includes(_)?A.filter(S=>S!==_):[...A,_];s===void 0&&k(R),u(R)};return M.createElement(zT,Object.assign({},v,{ref:i,className:m(c,"navds-checkbox-group",`navds-checkbox-group--${(t=(r=v.size)!==null&&r!==void 0?r:p?.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),M.createElement(qc.Provider,{value:{value:s,defaultValue:l,toggleValue:x}},M.createElement("div",{className:m("navds-checkboxes")},f)))});var ZT=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const JT=e=>{const i=E.useContext(qc),r=us(rr(e,["description","children"]),"checkbox"),{inputProps:t,readOnly:s}=r,l=ZT(r,["inputProps","readOnly"]);return i&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},l),{readOnly:s,nested:!!i,inputProps:Object.assign(Object.assign({},t),{checked:i?.value?i.value.includes(e.value):e.checked,defaultChecked:i?.defaultValue?i.defaultValue.includes(e.value):e.defaultChecked,onChange:u=>{var f;s||((f=e.onChange)===null||f===void 0||f.call(e,u),i?.toggleValue(e.value))},onClick:u=>{var f;if(s){u.preventDefault();return}(f=e?.onClick)===null||f===void 0||f.call(e,u)}})})},QT=E.forwardRef((e,i)=>{const{cn:r}=xe(),{inputProps:t,hasError:s,size:l,readOnly:u,nested:f}=JT(e),c=yt(),v=yt();return M.createElement("div",{className:r(e.className,"navds-checkbox",`navds-checkbox--${l}`,{"navds-checkbox--error":s,"navds-checkbox--disabled":t.disabled,"navds-checkbox--readonly":u}),"data-color":s?"danger":e["data-color"]},M.createElement("input",Object.assign({},rr(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),rr(t,["aria-invalid"]),{type:"checkbox",className:r("navds-checkbox__input"),ref:m=>{var p;m&&(m.indeterminate=(p=e.indeterminate)!==null&&p!==void 0?p:!1),typeof i=="function"?i(m):i!=null&&(i.current=m)},"aria-labelledby":r(c,!!e["aria-labelledby"]&&e["aria-labelledby"],{[v]:e.description})})),M.createElement("label",{htmlFor:t.id,className:r("navds-checkbox__label")},M.createElement("span",{className:r("navds-checkbox__icon")},M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},M.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),M.createElement("span",{className:r("navds-checkbox__icon-indeterminate")}),M.createElement("span",{className:r("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},M.createElement(mr,{as:"span",id:c,size:l,className:r("navds-checkbox__label-text"),"aria-hidden":!0},!f&&u&&M.createElement(wc,null),e.children),e.description&&M.createElement(mr,{as:"span",id:v,size:l,className:r("navds-form-field__subdescription navds-checkbox__description"),"aria-hidden":!0},e.description))))}),Mc=E.createContext(null);var eE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Bc=E.forwardRef((e,i)=>{var r,{className:t,children:s,disabled:l,onClick:u}=e,f=eE(e,["className","children","disabled","onClick"]);const{cn:c}=xe(),v=Et("Search"),m=E.useContext(Mc);if(m===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:p,variant:y,handleClick:k}=m;return M.createElement(ls,Object.assign({type:"submit"},f,{ref:i,size:p,variant:y==="secondary"?"secondary":"primary",className:c("navds-search__button-search",t),disabled:(r=m?.disabled)!==null&&r!==void 0?r:l,onClick:ts(u,k),icon:M.createElement(lc,Object.assign({},s?{"aria-hidden":!0}:{title:v("search")}))}),s)});var nE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const tl=E.forwardRef((e,i)=>{const{inputProps:r,size:t="medium",inputDescriptionId:s,errorId:l,showErrorMsg:u,hasError:f}=us(e,"searchfield"),{className:c,hideLabel:v=!0,label:m,description:p,value:y,clearButtonLabel:k,onClear:x,clearButton:_=!0,children:A,variant:R="primary",defaultValue:S,onChange:P,onSearchClick:D,htmlSize:I,"data-color":H}=e,j=nE(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:C}=xe(),K=E.useRef(null),ne=Tl(K,i),[ee,G]=E.useState(S??""),F=J=>{y===void 0&&G(J),P?.(J)},L=J=>{var z,Z;x?.(J),F(""),(Z=(z=K.current)===null||z===void 0?void 0:z.focus)===null||Z===void 0||Z.call(z)},X=()=>{D?.(`${y??ee}`)},re=_&&!r.disabled&&(y??ee);return M.createElement("div",{onKeyDown:J=>{var z;J.key==="Escape"&&(!((z=K.current)===null||z===void 0)&&z.value&&J.preventDefault(),L({trigger:"Escape",event:J}))},className:C(c,"navds-form-field",`navds-form-field--${t}`,"navds-search",{"navds-search--error":f,"navds-search--disabled":r.disabled,"navds-search--with-size":I}),"data-color":H},M.createElement(pt,{htmlFor:r.id,size:t,className:C("navds-form-field__label",{"navds-sr-only":v})},m),!!p&&M.createElement(mr,{className:C("navds-form-field__description",{"navds-sr-only":v}),id:s,size:t,as:"div"},p),M.createElement("div",{className:C("navds-search__wrapper")},M.createElement("div",{className:C("navds-search__wrapper-inner")},R==="simple"&&M.createElement(lc,{"aria-hidden":!0,className:C("navds-search__search-icon")}),M.createElement("input",Object.assign({ref:ne},rr(j,["error","errorId","size","readOnly"]),r,{value:y??ee,onChange:J=>F(J.target.value),type:"search",className:C(c,"navds-search__input",`navds-search__input--${R}`,"navds-text-field__input","navds-body-short",`navds-body-short--${t}`)},I?{size:Number(I)}:{})),re&&M.createElement(rE,{handleClear:L,size:t,clearButtonLabel:k})),M.createElement(Mc.Provider,{value:{size:t,disabled:r.disabled,variant:R,handleClick:X}},A||R!=="simple"&&M.createElement(Bc,{"data-color":H}))),M.createElement("div",{className:C("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},u&&M.createElement(rs,{size:t,showIcon:!0},e.error)))});function rE({size:e,clearButtonLabel:i,handleClear:r}){const{cn:t}=xe(),s=Sa(!1),l=Et("Search");return s?M.createElement(ls,{className:t("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:M.createElement(Jo,{"aria-hidden":!0}),title:i||l("clear"),onClick:u=>r({trigger:"Click",event:u}),type:"button"}):M.createElement("button",{type:"button",onClick:u=>r({trigger:"Click",event:u}),className:t("navds-search__button-clear")},M.createElement("span",{className:t("navds-sr-only")},i||l("clear")),M.createElement(Jo,{"aria-hidden":!0}))}tl.Button=Bc;var tE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Wf=(e,i,r)=>{const{outerHeightStyle:t,overflow:s}=i;return r.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==s)?(r.current+=1,i):e},zf=e=>(e?.ownerDocument||document).defaultView||window;function Mi(e){return parseInt(e,10)||0}const aE=E.forwardRef((e,i)=>{var r,t,{className:s,onChange:l,maxRows:u,minRows:f=1,autoScrollbar:c,style:v,value:m}=e,p=tE(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:y}=E.useRef(m!=null),k=E.useRef(null),x=Tl(k,i),_=E.useRef(null),A=E.useRef(0),[R,S]=E.useState({outerHeightStyle:0}),P=M.useCallback(()=>{const j=k.current,K=zf(j).getComputedStyle(j);if(K.width==="0px")return{outerHeightStyle:0};const ne=_.current;ne.style.width=K.width,ne.value=j.value||p.placeholder||"x",ne.value.slice(-1)===`
`&&(ne.value+=" ");const ee=K.boxSizing,G=Mi(K.paddingBottom)+Mi(K.paddingTop),F=Mi(K.borderBottomWidth)+Mi(K.borderTopWidth),L=ne.scrollHeight-G;ne.value="x";const X=ne.scrollHeight-G;let re=L;f&&(re=Math.max(Number(f)*X,re)),u&&(re=Math.min(Number(u)*X,re)),re=Math.max(re,X);const J=re+(ee==="border-box"?G+F:0),z=Math.abs(re-L)<=1;return{outerHeightStyle:J,overflow:z}},[u,f,p.placeholder]),D=()=>{const j=P();Xf(j)||S(C=>Wf(C,j,A))};wf(()=>{const j=()=>{const G=P();Xf(G)||Zo.flushSync(()=>{S(F=>Wf(F,G,A))})},C=sc(()=>{var G,F,L;if(A.current=0,!((G=k.current)===null||G===void 0)&&G.style.height||!((F=k.current)===null||F===void 0)&&F.style.width){((L=k.current)===null||L===void 0?void 0:L.style.overflow)==="hidden"&&S(X=>Object.assign(Object.assign({},X),{overflow:!1}));return}j()},166,!0),K=k.current,ne=zf(K);ne.addEventListener("resize",C);let ee;return typeof ResizeObserver<"u"&&(ee=new ResizeObserver(C),ee.observe(K)),()=>{C.clear(),ne.removeEventListener("resize",C),ee&&ee.disconnect()}},[P]),wf(()=>{D()}),E.useEffect(()=>{A.current=0},[m]);const I=j=>{A.current=0,y||D(),l&&l(j)},H=Object.assign({"--__ac-textarea-height":R.outerHeightStyle+"px","--__axc-textarea-height":R.outerHeightStyle+"px",overflow:R.overflow&&!c&&!(!((r=k.current)===null||r===void 0)&&r.style.height)&&!(!((t=k.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},v);return M.createElement(M.Fragment,null,M.createElement("textarea",Object.assign({value:m,onChange:I,ref:x,rows:f,style:H},p,{className:s})),M.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:_,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},v)}))});function Xf(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const iE=({maxLengthId:e,maxLength:i,currentLength:r,size:t,i18n:s})=>{const{cn:l}=xe(),u=Et("Textarea",{charsLeft:s?.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s?.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),f=i-r,[c,v]=E.useState(f);return E.useEffect(()=>{const m=sc(()=>{v(f)},2e3);return m(),()=>{m.clear()}},[f]),M.createElement(M.Fragment,null,M.createElement("span",{id:e,className:l("navds-sr-only")},u("maxLength",{maxLength:i})),f<20&&M.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},Zf(c,u)),M.createElement(mr,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":f<0}),size:t},Zf(f,u)))},Zf=(e,i)=>e<0?i("charsTooMany",{chars:Math.abs(e)}):i("charsLeft",{chars:e});var sE=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const oE=E.forwardRef((e,i)=>{var r,t,s;const{inputProps:l,errorId:u,showErrorMsg:f,hasError:c,size:v,inputDescriptionId:m}=us(e,"textarea"),{label:p,className:y,description:k,maxLength:x,hideLabel:_=!1,resize:A,UNSAFE_autoScrollbar:R,i18n:S,readOnly:P}=e,D=sE(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:I}=xe(),H=yt(),j=x!==void 0&&x>0,[C,K]=E.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),ne=()=>{let G=D?.minRows?D?.minRows:3;return v==="small"&&(G=D?.minRows?D?.minRows:2),G},ee=ns(l["aria-describedby"],{[H??""]:j});return M.createElement("div",{className:I(y,"navds-form-field",`navds-form-field--${v}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":P,"navds-textarea--readonly":P,"navds-textarea--error":c,"navds-textarea--autoscrollbar":R,[`navds-textarea--resize-${A===!0?"both":A}`]:A})},M.createElement(pt,{htmlFor:l.id,size:v,className:I("navds-form-field__label",{"navds-sr-only":_})},P&&M.createElement(Ec,null),p),!!k&&M.createElement(mr,{className:I("navds-form-field__description",{"navds-sr-only":_}),id:m,size:v,as:"div"},k),M.createElement(aE,Object.assign({},rr(D,["error","errorId","size"]),l,{onChange:ts(e.onChange,e.value===void 0?G=>K(G.target.value):void 0),minRows:ne(),autoScrollbar:R,ref:i,readOnly:P,className:I("navds-textarea__input","navds-body-short",`navds-body-short--${v??"medium"}`)},ee?{"aria-describedby":ee}:{})),j&&!P&&!l.disabled&&M.createElement(iE,{maxLengthId:H,maxLength:x,currentLength:(s=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:C.length,size:v,i18n:S}),M.createElement("div",{className:I("navds-form-field__error"),id:u,"aria-relevant":"additions removals","aria-live":"polite"},f&&M.createElement(rs,{size:v,showIcon:!0},e.error)))});function lE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jf={exports:{}},ba={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function uE(){if(Qf)return ba;Qf=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:l}}return ba.Fragment=i,ba.jsx=r,ba.jsxs=r,ba}var eg;function dE(){return eg||(eg=1,Jf.exports=uE()),Jf.exports}var wr=dE();const fE=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:wr.jsx(M1,{variant:"warning",size:"small",children:wr.jsx(_t,{gap:"2",children:M.Children.map(e,i=>wr.jsx(mr,{size:"small",children:i},oA(i)?i.key:i))})}),Ma={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};vr(Ma);var ng={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var rg;function gE(){return rg||(rg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var l="",u=0;u<arguments.length;u++){var f=arguments[u];f&&(l=s(l,t.call(this,f)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var f in l)i.call(l,f)&&l[f]&&(u=s(u,this&&this[f]||f));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ng)),ng.exports}var cE=gE();const Bl=lE(cE),mE="_borderbox_1vkvn_1",vE="_error_1vkvn_5",hE="_warning_1vkvn_8",bE={borderbox:mE,error:vE,warning:hE},pE=Bl.bind(bE),tg=({error:e=!1,className:i,children:r})=>wr.jsx(Rc,{padding:"4",className:pE("borderbox",{error:e},i),children:r}),yE="_aksjonspunkt_kn1hn_1",kE="_erAksjonspunktApent_kn1hn_4",AE="_erIkkeGodkjentAvBeslutter_kn1hn_8",_E={aksjonspunkt:yE,erAksjonspunktApent:kE,erIkkeGodkjentAvBeslutter:AE};Bl.bind(_E);vr(Ma);vr(Ma);const TE="_divider_1t980_1",EE="_dividerParagraf_1t980_8",wE="_leftPanel_1t980_11",RE="_rightPanel_1t980_14",PE={divider:TE,dividerParagraf:EE,leftPanel:wE,rightPanel:RE};Bl.bind(PE);const OE=()=>wr.jsx("span",{"data-testid":"editedIcon",children:wr.jsx(KA,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});vr(Ma);const SE=vr(Ma),IE=({tekst:e,children:i})=>{const[r,t]=E.useState(!1);if(!e)return i;const s=async()=>{await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>{t(!1)},1e3)};return wr.jsx(KT,{content:SE.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:wr.jsx("span",{"aria-hidden":"true",onClick:s,children:i??e})})},ag={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},Oa=({beløp:e,kr:i=!1,rød:r=!1})=>{const t=e?.toString().replace(/\s/g,"");return wr.jsx(IE,{tekst:t,children:wr.jsxs("span",{className:r?ag.rød:ag.default,children:[t?lA(t):"-",t&&i&&" kr"]})})},xE=e=>!!e||e===0,ig=e=>e??0,NE=e=>xE(e.overstyrtPrAar)?ig(e.overstyrtPrAar):ig(e.beregnetPrAar),Do=e=>(e.beregningsgrunnlagPrStatusOgAndel||[]).map(r=>NE(r)).reduce((r,t)=>r+t,0),Co=e=>e.flatMap(i=>i.inntekter).map(({inntekt:i})=>i).reduce((i,r)=>i+r,0)*2,sg=(e,i)=>e>i,Fc=({periode:e,besteMåneder:i})=>ie.jsxs(_t,{gap:"4",children:[ie.jsxs(je,{children:[ie.jsx(je.Header,{children:ie.jsxs(je.Row,{children:[ie.jsx(je.HeaderCell,{scope:"col"}),ie.jsx(je.HeaderCell,{scope:"col",children:ie.jsx(Bn,{id:"ResultatGrunnlag.BeregningEtterKap8"})}),ie.jsx(je.HeaderCell,{scope:"col",children:ie.jsx(Bn,{id:"ResultatGrunnlag.BeregningEtterBesteberegning"})})]})}),ie.jsx(je.Body,{children:ie.jsxs(je.Row,{children:[ie.jsx(je.DataCell,{textSize:"small",children:ie.jsx(Bn,{id:"ResultatGrunnlag.BruttoBeregningsgrunnlag"})}),ie.jsx(je.DataCell,{textSize:"small",children:ie.jsx(Oa,{beløp:Do(e)})}),ie.jsx(je.DataCell,{textSize:"small",children:ie.jsx(Oa,{beløp:Co(i)})})]})})]}),ie.jsxs(mr,{size:"small",children:[sg(Do(e),Co(i))&&ie.jsx(Bn,{id:"ResultatGrunnlag.Kap8GirBesteBeregning"}),!sg(Do(e),Co(i))&&ie.jsx(Bn,{id:"ResultatGrunnlag.Kap1473GirBesteBeregning"})]})]});Fc.__docgenInfo={description:`BesteberegningResultatGrunnlagPanel

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
}>`}],raw:"Månedsgrunnlag[]"},description:""}}};const qE="_colWidth_horwr_1",Hi={colWidth:qE,månedRad:"_månedRad_horwr_6",månedAktivitet:"_månedAktivitet_horwr_10",månedInntekt:"_månedInntekt_horwr_14"},ME=e=>{const i=Hr(e).format("MMMM - YYYY");return i.charAt(0).toUpperCase()+i.slice(1)},BE=(e,i,r)=>{const t=e.arbeidsgiverId?i[e.arbeidsgiverId]:void 0;return t?uA(t):r.OpptjeningAktivitetType.find(s=>s.kode===e.opptjeningAktivitetType)?.navn??""},FE=({inntekt:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>ie.jsxs(je.Row,{className:Hi.månedRad,children:[ie.jsx(je.DataCell,{textSize:"small",className:Hi.månedAktivitet,children:BE(e,i,r)}),ie.jsx(je.DataCell,{textSize:"small",className:Hi.månedInntekt,children:ie.jsx(Oa,{beløp:e.inntekt})})]}),LE=({inntekter:e})=>ie.jsxs(je.Row,{children:[ie.jsx(je.HeaderCell,{textSize:"small",children:ie.jsx(Bn,{id:"Inntekttabell.Sum"})}),ie.jsx(je.HeaderCell,{textSize:"small",children:ie.jsx(Oa,{beløp:e.map(({inntekt:i})=>i).reduce((i,r)=>i+r,0)})})]},"sum"),jE=({inntekter:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>ie.jsxs(je,{children:[ie.jsx(je.Header,{children:ie.jsxs(je.Row,{children:[ie.jsx(je.HeaderCell,{scope:"col",children:ie.jsx(Bn,{id:"BesteberegningProsessPanel.Måned.Inntekt.Aktivitet"})}),ie.jsx(je.HeaderCell,{scope:"col",children:ie.jsx(Bn,{id:"BesteberegningProsessPanel.Måned.Inntekt.Inntekt"})})]})}),ie.jsxs(je.Body,{children:[e.map(t=>ie.jsx(FE,{inntekt:t,arbeidsgiverOpplysninger:i,alleKodeverk:r},`${t.arbeidsforholdId}-${t.arbeidsgiverId}-${t.inntekt}`)),e.length>0&&ie.jsx(LE,{inntekter:e})]})]}),Vo=({måneder:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>ie.jsx(Ml,{gap:"2",children:e.map(t=>ie.jsxs("div",{className:Hi.colWidth,children:[ie.jsx(mr,{size:"small",children:ME(t.fom)}),ie.jsx(jE,{inntekter:t.inntekter,arbeidsgiverOpplysninger:i,alleKodeverk:r})]},t.fom))}),DE=e=>e.flatMap(r=>r.inntekter).map(({inntekt:r})=>r).reduce((r,t)=>r+t,0)/6*12,CE=e=>[...e].sort((i,r)=>Hr(i.fom).diff(Hr(r.fom))),Lc=({besteMåneder:e,arbeidsgiverOpplysninger:i,alleKodeverk:r})=>{const t=CE(e);return ie.jsxs(_t,{gap:"4",children:[ie.jsxs(pt,{size:"small",children:[ie.jsx(Bn,{id:"Inntekttabell.Tittel"})," "]}),ie.jsx(Vo,{måneder:t.slice(0,2),arbeidsgiverOpplysninger:i,alleKodeverk:r}),ie.jsx(Vo,{måneder:t.slice(2,4),arbeidsgiverOpplysninger:i,alleKodeverk:r}),ie.jsx(Vo,{måneder:t.slice(4,6),arbeidsgiverOpplysninger:i,alleKodeverk:r}),ie.jsx(pt,{size:"small",children:ie.jsx(Bn,{id:"Inntekttabell.BeregnetÅrsinntekt",values:{inntekt:ie.jsx(Oa,{beløp:DE(e)})}})})]})};Lc.__docgenInfo={description:`BesteManederVisningPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};var Ba=e=>e.type==="checkbox",vt=e=>e instanceof Date,Rn=e=>e==null;const jc=e=>typeof e=="object";var sn=e=>!Rn(e)&&!Array.isArray(e)&&jc(e)&&!vt(e),Dc=e=>sn(e)&&e.target?Ba(e.target)?e.target.checked:e.target.value:e,VE=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Cc=(e,i)=>e.has(VE(i)),HE=e=>{const i=e.constructor&&e.constructor.prototype;return sn(i)&&i.hasOwnProperty("isPrototypeOf")},Fl=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function gn(e){let i;const r=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)i=new Date(e);else if(!(Fl&&(e instanceof Blob||t))&&(r||sn(e)))if(i=r?[]:{},!r&&!HE(e))i=e;else for(const s in e)e.hasOwnProperty(s)&&(i[s]=gn(e[s]));else return e;return i}var ds=e=>/^\w*$/.test(e),an=e=>e===void 0,Ll=e=>Array.isArray(e)?e.filter(Boolean):[],jl=e=>Ll(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ue=(e,i,r)=>{if(!i||!sn(e))return r;const t=(ds(i)?[i]:jl(i)).reduce((s,l)=>Rn(s)?s:s[l],e);return an(t)||t===e?an(e[i])?r:e[i]:t},Gn=e=>typeof e=="boolean",$e=(e,i,r)=>{let t=-1;const s=ds(i)?[i]:jl(i),l=s.length,u=l-1;for(;++t<l;){const f=s[t];let c=r;if(t!==u){const v=e[f];c=sn(v)||Array.isArray(v)?v:isNaN(+s[t+1])?{}:[]}if(f==="__proto__"||f==="constructor"||f==="prototype")return;e[f]=c,e=e[f]}};const Zi={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},gr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Lr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Dl=M.createContext(null);Dl.displayName="HookFormContext";const Fa=()=>M.useContext(Dl),GE=e=>{const{children:i,...r}=e;return M.createElement(Dl.Provider,{value:r},i)};var Vc=(e,i,r,t=!0)=>{const s={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(s,l,{get:()=>{const u=l;return i._proxyFormState[u]!==gr.all&&(i._proxyFormState[u]=!t||gr.all),r&&(r[u]=!0),e[u]}});return s};const Cl=typeof window<"u"?M.useLayoutEffect:M.useEffect;function UE(e){const i=Fa(),{control:r=i.control,disabled:t,name:s,exact:l}=e||{},[u,f]=M.useState(r._formState),c=M.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Cl(()=>r._subscribe({name:s,formState:c.current,exact:l,callback:v=>{!t&&f({...r._formState,...v})}}),[s,t,l]),M.useEffect(()=>{c.current.isValid&&r._setValid(!0)},[r]),M.useMemo(()=>Vc(u,r,c.current,!1),[u,r])}var Tr=e=>typeof e=="string",Hc=(e,i,r,t,s)=>Tr(e)?(t&&i.watch.add(e),ue(r,e,s)):Array.isArray(e)?e.map(l=>(t&&i.watch.add(l),ue(r,l))):(t&&(i.watchAll=!0),r),al=e=>Rn(e)||!jc(e);function Dr(e,i,r=new WeakSet){if(al(e)||al(i))return e===i;if(vt(e)&&vt(i))return e.getTime()===i.getTime();const t=Object.keys(e),s=Object.keys(i);if(t.length!==s.length)return!1;if(r.has(e)||r.has(i))return!0;r.add(e),r.add(i);for(const l of t){const u=e[l];if(!s.includes(l))return!1;if(l!=="ref"){const f=i[l];if(vt(u)&&vt(f)||sn(u)&&sn(f)||Array.isArray(u)&&Array.isArray(f)?!Dr(u,f,r):u!==f)return!1}}return!0}function $E(e){const i=Fa(),{control:r=i.control,name:t,defaultValue:s,disabled:l,exact:u,compute:f}=e||{},c=M.useRef(s),v=M.useRef(f),m=M.useRef(void 0);v.current=f;const p=M.useMemo(()=>r._getWatch(t,c.current),[r,t]),[y,k]=M.useState(v.current?v.current(p):p);return Cl(()=>r._subscribe({name:t,formState:{values:!0},exact:u,callback:x=>{if(!l){const _=Hc(t,r._names,x.values||r._formValues,!1,c.current);if(v.current){const A=v.current(_);Dr(A,m.current)||(k(A),m.current=A)}else k(_)}}}),[r,l,t,u]),M.useEffect(()=>r._removeUnmounted()),y}function Gc(e){const i=Fa(),{name:r,disabled:t,control:s=i.control,shouldUnregister:l,defaultValue:u}=e,f=Cc(s._names.array,r),c=M.useMemo(()=>ue(s._formValues,r,ue(s._defaultValues,r,u)),[s,r,u]),v=$E({control:s,name:r,defaultValue:c,exact:!0}),m=UE({control:s,name:r,exact:!0}),p=M.useRef(e),y=M.useRef(s.register(r,{...e.rules,value:v,...Gn(e.disabled)?{disabled:e.disabled}:{}}));p.current=e;const k=M.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!ue(m.errors,r)},isDirty:{enumerable:!0,get:()=>!!ue(m.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!ue(m.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!ue(m.validatingFields,r)},error:{enumerable:!0,get:()=>ue(m.errors,r)}}),[m,r]),x=M.useCallback(S=>y.current.onChange({target:{value:Dc(S),name:r},type:Zi.CHANGE}),[r]),_=M.useCallback(()=>y.current.onBlur({target:{value:ue(s._formValues,r),name:r},type:Zi.BLUR}),[r,s._formValues]),A=M.useCallback(S=>{const P=ue(s._fields,r);P&&S&&(P._f.ref={focus:()=>S.focus&&S.focus(),select:()=>S.select&&S.select(),setCustomValidity:D=>S.setCustomValidity(D),reportValidity:()=>S.reportValidity()})},[s._fields,r]),R=M.useMemo(()=>({name:r,value:v,...Gn(t)||m.disabled?{disabled:m.disabled||t}:{},onChange:x,onBlur:_,ref:A}),[r,t,m.disabled,x,_,A,v]);return M.useEffect(()=>{const S=s._options.shouldUnregister||l;s.register(r,{...p.current.rules,...Gn(p.current.disabled)?{disabled:p.current.disabled}:{}});const P=(D,I)=>{const H=ue(s._fields,D);H&&H._f&&(H._f.mount=I)};if(P(r,!0),S){const D=gn(ue(s._options.defaultValues,r));$e(s._defaultValues,r,D),an(ue(s._formValues,r))&&$e(s._formValues,r,D)}return!f&&s.register(r),()=>{(f?S&&!s._state.action:S)?s.unregister(r):P(r,!1)}},[r,s,f,l]),M.useEffect(()=>{s._setDisabledField({disabled:t,name:r})},[t,r,s]),M.useMemo(()=>({field:R,formState:m,fieldState:k}),[R,m,k])}var KE=(e,i,r,t,s)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:s||!0}}:{},wa=e=>Array.isArray(e)?e:[e],og=()=>{let e=[];return{get observers(){return e},next:s=>{for(const l of e)l.next&&l.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(l=>l!==s)}}),unsubscribe:()=>{e=[]}}},Mn=e=>sn(e)&&!Object.keys(e).length,Vl=e=>e.type==="file",cr=e=>typeof e=="function",Ji=e=>{if(!Fl)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},Uc=e=>e.type==="select-multiple",Hl=e=>e.type==="radio",YE=e=>Hl(e)||Ba(e),Ho=e=>Ji(e)&&e.isConnected;function WE(e,i){const r=i.slice(0,-1).length;let t=0;for(;t<r;)e=an(e)?t++:e[i[t++]];return e}function zE(e){for(const i in e)if(e.hasOwnProperty(i)&&!an(e[i]))return!1;return!0}function ln(e,i){const r=Array.isArray(i)?i:ds(i)?[i]:jl(i),t=r.length===1?e:WE(e,r),s=r.length-1,l=r[s];return t&&delete t[l],s!==0&&(sn(t)&&Mn(t)||Array.isArray(t)&&zE(t))&&ln(e,r.slice(0,-1)),e}var $c=e=>{for(const i in e)if(cr(e[i]))return!0;return!1};function Qi(e,i={}){const r=Array.isArray(e);if(sn(e)||r)for(const t in e)Array.isArray(e[t])||sn(e[t])&&!$c(e[t])?(i[t]=Array.isArray(e[t])?[]:{},Qi(e[t],i[t])):Rn(e[t])||(i[t]=!0);return i}function Kc(e,i,r){const t=Array.isArray(e);if(sn(e)||t)for(const s in e)Array.isArray(e[s])||sn(e[s])&&!$c(e[s])?an(i)||al(r[s])?r[s]=Array.isArray(e[s])?Qi(e[s],[]):{...Qi(e[s])}:Kc(e[s],Rn(i)?{}:i[s],r[s]):r[s]=!Dr(e[s],i[s]);return r}var pa=(e,i)=>Kc(e,i,Qi(i));const lg={value:!1,isValid:!1},ug={value:!0,isValid:!0};var Yc=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!an(e[0].attributes.value)?an(e[0].value)||e[0].value===""?ug:{value:e[0].value,isValid:!0}:ug:lg}return lg},Wc=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:t})=>an(e)?e:i?e===""?NaN:e&&+e:r&&Tr(e)?new Date(e):t?t(e):e;const dg={isValid:!1,value:null};var zc=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,dg):dg;function fg(e){const i=e.ref;return Vl(i)?i.files:Hl(i)?zc(e.refs).value:Uc(i)?[...i.selectedOptions].map(({value:r})=>r):Ba(i)?Yc(e.refs).value:Wc(an(i.value)?e.ref.value:i.value,e)}var XE=(e,i,r,t)=>{const s={};for(const l of e){const u=ue(i,l);u&&$e(s,l,u._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:t}},es=e=>e instanceof RegExp,ya=e=>an(e)?e:es(e)?e.source:sn(e)?es(e.value)?e.value.source:e.value:e,gg=e=>({isOnSubmit:!e||e===gr.onSubmit,isOnBlur:e===gr.onBlur,isOnChange:e===gr.onChange,isOnAll:e===gr.all,isOnTouch:e===gr.onTouched});const cg="AsyncFunction";var ZE=e=>!!e&&!!e.validate&&!!(cr(e.validate)&&e.validate.constructor.name===cg||sn(e.validate)&&Object.values(e.validate).find(i=>i.constructor.name===cg)),JE=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),mg=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const Ra=(e,i,r,t)=>{for(const s of r||Object.keys(e)){const l=ue(e,s);if(l){const{_f:u,...f}=l;if(u){if(u.refs&&u.refs[0]&&i(u.refs[0],s)&&!t)return!0;if(u.ref&&i(u.ref,u.name)&&!t)return!0;if(Ra(f,i))break}else if(sn(f)&&Ra(f,i))break}}};function vg(e,i,r){const t=ue(e,r);if(t||ds(r))return{error:t,name:r};const s=r.split(".");for(;s.length;){const l=s.join("."),u=ue(i,l),f=ue(e,l);if(u&&!Array.isArray(u)&&r!==l)return{name:r};if(f&&f.type)return{name:l,error:f};if(f&&f.root&&f.root.type)return{name:`${l}.root`,error:f.root};s.pop()}return{name:r}}var QE=(e,i,r,t)=>{r(e);const{name:s,...l}=e;return Mn(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(u=>i[u]===(!t||gr.all))},ew=(e,i,r)=>!e||!i||e===i||wa(e).some(t=>t&&(r?t===i:t.startsWith(i)||i.startsWith(t))),nw=(e,i,r,t,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(i||e):(r?t.isOnBlur:s.isOnBlur)?!e:(r?t.isOnChange:s.isOnChange)?e:!0,rw=(e,i)=>!Ll(ue(e,i)).length&&ln(e,i),tw=(e,i,r)=>{const t=wa(ue(e,r));return $e(t,"root",i[r]),$e(e,r,t),e},Gi=e=>Tr(e);function hg(e,i,r="validate"){if(Gi(e)||Array.isArray(e)&&e.every(Gi)||Gn(e)&&!e)return{type:r,message:Gi(e)?e:"",ref:i}}var Ct=e=>sn(e)&&!es(e)?e:{value:e,message:""},bg=async(e,i,r,t,s,l)=>{const{ref:u,refs:f,required:c,maxLength:v,minLength:m,min:p,max:y,pattern:k,validate:x,name:_,valueAsNumber:A,mount:R}=e._f,S=ue(r,_);if(!R||i.has(_))return{};const P=f?f[0]:u,D=G=>{s&&P.reportValidity&&(P.setCustomValidity(Gn(G)?"":G||""),P.reportValidity())},I={},H=Hl(u),j=Ba(u),C=H||j,K=(A||Vl(u))&&an(u.value)&&an(S)||Ji(u)&&u.value===""||S===""||Array.isArray(S)&&!S.length,ne=KE.bind(null,_,t,I),ee=(G,F,L,X=Lr.maxLength,re=Lr.minLength)=>{const J=G?F:L;I[_]={type:G?X:re,message:J,ref:u,...ne(G?X:re,J)}};if(l?!Array.isArray(S)||!S.length:c&&(!C&&(K||Rn(S))||Gn(S)&&!S||j&&!Yc(f).isValid||H&&!zc(f).isValid)){const{value:G,message:F}=Gi(c)?{value:!!c,message:c}:Ct(c);if(G&&(I[_]={type:Lr.required,message:F,ref:P,...ne(Lr.required,F)},!t))return D(F),I}if(!K&&(!Rn(p)||!Rn(y))){let G,F;const L=Ct(y),X=Ct(p);if(!Rn(S)&&!isNaN(S)){const re=u.valueAsNumber||S&&+S;Rn(L.value)||(G=re>L.value),Rn(X.value)||(F=re<X.value)}else{const re=u.valueAsDate||new Date(S),J=de=>new Date(new Date().toDateString()+" "+de),z=u.type=="time",Z=u.type=="week";Tr(L.value)&&S&&(G=z?J(S)>J(L.value):Z?S>L.value:re>new Date(L.value)),Tr(X.value)&&S&&(F=z?J(S)<J(X.value):Z?S<X.value:re<new Date(X.value))}if((G||F)&&(ee(!!G,L.message,X.message,Lr.max,Lr.min),!t))return D(I[_].message),I}if((v||m)&&!K&&(Tr(S)||l&&Array.isArray(S))){const G=Ct(v),F=Ct(m),L=!Rn(G.value)&&S.length>+G.value,X=!Rn(F.value)&&S.length<+F.value;if((L||X)&&(ee(L,G.message,F.message),!t))return D(I[_].message),I}if(k&&!K&&Tr(S)){const{value:G,message:F}=Ct(k);if(es(G)&&!S.match(G)&&(I[_]={type:Lr.pattern,message:F,ref:u,...ne(Lr.pattern,F)},!t))return D(F),I}if(x){if(cr(x)){const G=await x(S,r),F=hg(G,P);if(F&&(I[_]={...F,...ne(Lr.validate,F.message)},!t))return D(F.message),I}else if(sn(x)){let G={};for(const F in x){if(!Mn(G)&&!t)break;const L=hg(await x[F](S,r),P,F);L&&(G={...L,...ne(F,L.message)},D(L.message),t&&(I[_]=G))}if(!Mn(G)&&(I[_]={ref:P,...G},!t))return I}}return D(!0),I};const aw={mode:gr.onSubmit,reValidateMode:gr.onChange,shouldFocusError:!0};function iw(e={}){let i={...aw,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:cr(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:i.errors||{},disabled:i.disabled||!1},t={},s=sn(i.defaultValues)||sn(i.values)?gn(i.defaultValues||i.values)||{}:{},l=i.shouldUnregister?{}:gn(s),u={action:!1,mount:!1,watch:!1},f={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,v=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let p={...m};const y={array:og(),state:og()},k=i.criteriaMode===gr.all,x=w=>B=>{clearTimeout(v),v=setTimeout(w,B)},_=async w=>{if(!i.disabled&&(m.isValid||p.isValid||w)){const B=i.resolver?Mn((await j()).errors):await K(t,!0);B!==r.isValid&&y.state.next({isValid:B})}},A=(w,B)=>{!i.disabled&&(m.isValidating||m.validatingFields||p.isValidating||p.validatingFields)&&((w||Array.from(f.mount)).forEach(U=>{U&&(B?$e(r.validatingFields,U,B):ln(r.validatingFields,U))}),y.state.next({validatingFields:r.validatingFields,isValidating:!Mn(r.validatingFields)}))},R=(w,B=[],U,oe,ae=!0,te=!0)=>{if(oe&&U&&!i.disabled){if(u.action=!0,te&&Array.isArray(ue(t,w))){const me=U(ue(t,w),oe.argA,oe.argB);ae&&$e(t,w,me)}if(te&&Array.isArray(ue(r.errors,w))){const me=U(ue(r.errors,w),oe.argA,oe.argB);ae&&$e(r.errors,w,me),rw(r.errors,w)}if((m.touchedFields||p.touchedFields)&&te&&Array.isArray(ue(r.touchedFields,w))){const me=U(ue(r.touchedFields,w),oe.argA,oe.argB);ae&&$e(r.touchedFields,w,me)}(m.dirtyFields||p.dirtyFields)&&(r.dirtyFields=pa(s,l)),y.state.next({name:w,isDirty:ee(w,B),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else $e(l,w,B)},S=(w,B)=>{$e(r.errors,w,B),y.state.next({errors:r.errors})},P=w=>{r.errors=w,y.state.next({errors:r.errors,isValid:!1})},D=(w,B,U,oe)=>{const ae=ue(t,w);if(ae){const te=ue(l,w,an(U)?ue(s,w):U);an(te)||oe&&oe.defaultChecked||B?$e(l,w,B?te:fg(ae._f)):L(w,te),u.mount&&_()}},I=(w,B,U,oe,ae)=>{let te=!1,me=!1;const Oe={name:w};if(!i.disabled){if(!U||oe){(m.isDirty||p.isDirty)&&(me=r.isDirty,r.isDirty=Oe.isDirty=ee(),te=me!==Oe.isDirty);const Me=Dr(ue(s,w),B);me=!!ue(r.dirtyFields,w),Me?ln(r.dirtyFields,w):$e(r.dirtyFields,w,!0),Oe.dirtyFields=r.dirtyFields,te=te||(m.dirtyFields||p.dirtyFields)&&me!==!Me}if(U){const Me=ue(r.touchedFields,w);Me||($e(r.touchedFields,w,U),Oe.touchedFields=r.touchedFields,te=te||(m.touchedFields||p.touchedFields)&&Me!==U)}te&&ae&&y.state.next(Oe)}return te?Oe:{}},H=(w,B,U,oe)=>{const ae=ue(r.errors,w),te=(m.isValid||p.isValid)&&Gn(B)&&r.isValid!==B;if(i.delayError&&U?(c=x(()=>S(w,U)),c(i.delayError)):(clearTimeout(v),c=null,U?$e(r.errors,w,U):ln(r.errors,w)),(U?!Dr(ae,U):ae)||!Mn(oe)||te){const me={...oe,...te&&Gn(B)?{isValid:B}:{},errors:r.errors,name:w};r={...r,...me},y.state.next(me)}},j=async w=>{A(w,!0);const B=await i.resolver(l,i.context,XE(w||f.mount,t,i.criteriaMode,i.shouldUseNativeValidation));return A(w),B},C=async w=>{const{errors:B}=await j(w);if(w)for(const U of w){const oe=ue(B,U);oe?$e(r.errors,U,oe):ln(r.errors,U)}else r.errors=B;return B},K=async(w,B,U={valid:!0})=>{for(const oe in w){const ae=w[oe];if(ae){const{_f:te,...me}=ae;if(te){const Oe=f.array.has(te.name),Me=ae._f&&ZE(ae._f);Me&&m.validatingFields&&A([oe],!0);const bn=await bg(ae,f.disabled,l,k,i.shouldUseNativeValidation&&!B,Oe);if(Me&&m.validatingFields&&A([oe]),bn[te.name]&&(U.valid=!1,B))break;!B&&(ue(bn,te.name)?Oe?tw(r.errors,bn,te.name):$e(r.errors,te.name,bn[te.name]):ln(r.errors,te.name))}!Mn(me)&&await K(me,B,U)}}return U.valid},ne=()=>{for(const w of f.unMount){const B=ue(t,w);B&&(B._f.refs?B._f.refs.every(U=>!Ho(U)):!Ho(B._f.ref))&&He(w)}f.unMount=new Set},ee=(w,B)=>!i.disabled&&(w&&B&&$e(l,w,B),!Dr(de(),s)),G=(w,B,U)=>Hc(w,f,{...u.mount?l:an(B)?s:Tr(w)?{[w]:B}:B},U,B),F=w=>Ll(ue(u.mount?l:s,w,i.shouldUnregister?ue(s,w,[]):[])),L=(w,B,U={})=>{const oe=ue(t,w);let ae=B;if(oe){const te=oe._f;te&&(!te.disabled&&$e(l,w,Wc(B,te)),ae=Ji(te.ref)&&Rn(B)?"":B,Uc(te.ref)?[...te.ref.options].forEach(me=>me.selected=ae.includes(me.value)):te.refs?Ba(te.ref)?te.refs.forEach(me=>{(!me.defaultChecked||!me.disabled)&&(Array.isArray(ae)?me.checked=!!ae.find(Oe=>Oe===me.value):me.checked=ae===me.value||!!ae)}):te.refs.forEach(me=>me.checked=me.value===ae):Vl(te.ref)?te.ref.value="":(te.ref.value=ae,te.ref.type||y.state.next({name:w,values:gn(l)})))}(U.shouldDirty||U.shouldTouch)&&I(w,ae,U.shouldTouch,U.shouldDirty,!0),U.shouldValidate&&Z(w)},X=(w,B,U)=>{for(const oe in B){if(!B.hasOwnProperty(oe))return;const ae=B[oe],te=w+"."+oe,me=ue(t,te);(f.array.has(w)||sn(ae)||me&&!me._f)&&!vt(ae)?X(te,ae,U):L(te,ae,U)}},re=(w,B,U={})=>{const oe=ue(t,w),ae=f.array.has(w),te=gn(B);$e(l,w,te),ae?(y.array.next({name:w,values:gn(l)}),(m.isDirty||m.dirtyFields||p.isDirty||p.dirtyFields)&&U.shouldDirty&&y.state.next({name:w,dirtyFields:pa(s,l),isDirty:ee(w,te)})):oe&&!oe._f&&!Rn(te)?X(w,te,U):L(w,te,U),mg(w,f)&&y.state.next({...r,name:w}),y.state.next({name:u.mount?w:void 0,values:gn(l)})},J=async w=>{u.mount=!0;const B=w.target;let U=B.name,oe=!0;const ae=ue(t,U),te=Me=>{oe=Number.isNaN(Me)||vt(Me)&&isNaN(Me.getTime())||Dr(Me,ue(l,U,Me))},me=gg(i.mode),Oe=gg(i.reValidateMode);if(ae){let Me,bn;const Ur=B.type?fg(ae._f):Dc(w),Kn=w.type===Zi.BLUR||w.type===Zi.FOCUS_OUT,Zt=!JE(ae._f)&&!i.resolver&&!ue(r.errors,U)&&!ae._f.deps||nw(Kn,ue(r.touchedFields,U),r.isSubmitted,Oe,me),rt=mg(U,f,Kn);$e(l,U,Ur),Kn?(ae._f.onBlur&&ae._f.onBlur(w),c&&c(0)):ae._f.onChange&&ae._f.onChange(w);const tt=I(U,Ur,Kn),Jt=!Mn(tt)||rt;if(!Kn&&y.state.next({name:U,type:w.type,values:gn(l)}),Zt)return(m.isValid||p.isValid)&&(i.mode==="onBlur"?Kn&&_():Kn||_()),Jt&&y.state.next({name:U,...rt?{}:tt});if(!Kn&&rt&&y.state.next({...r}),i.resolver){const{errors:wt}=await j([U]);if(te(Ur),oe){const Qt=vg(r.errors,t,U),Ha=vg(wt,t,Qt.name||U);Me=Ha.error,U=Ha.name,bn=Mn(wt)}}else A([U],!0),Me=(await bg(ae,f.disabled,l,k,i.shouldUseNativeValidation))[U],A([U]),te(Ur),oe&&(Me?bn=!1:(m.isValid||p.isValid)&&(bn=await K(t,!0)));oe&&(ae._f.deps&&Z(ae._f.deps),H(U,bn,Me,tt))}},z=(w,B)=>{if(ue(r.errors,B)&&w.focus)return w.focus(),1},Z=async(w,B={})=>{let U,oe;const ae=wa(w);if(i.resolver){const te=await C(an(w)?w:ae);U=Mn(te),oe=w?!ae.some(me=>ue(te,me)):U}else w?(oe=(await Promise.all(ae.map(async te=>{const me=ue(t,te);return await K(me&&me._f?{[te]:me}:me)}))).every(Boolean),!(!oe&&!r.isValid)&&_()):oe=U=await K(t);return y.state.next({...!Tr(w)||(m.isValid||p.isValid)&&U!==r.isValid?{}:{name:w},...i.resolver||!w?{isValid:U}:{},errors:r.errors}),B.shouldFocus&&!oe&&Ra(t,z,w?ae:f.mount),oe},de=w=>{const B={...u.mount?l:s};return an(w)?B:Tr(w)?ue(B,w):w.map(U=>ue(B,U))},le=(w,B)=>({invalid:!!ue((B||r).errors,w),isDirty:!!ue((B||r).dirtyFields,w),error:ue((B||r).errors,w),isValidating:!!ue(r.validatingFields,w),isTouched:!!ue((B||r).touchedFields,w)}),ve=w=>{w&&wa(w).forEach(B=>ln(r.errors,B)),y.state.next({errors:w?r.errors:{}})},Ae=(w,B,U)=>{const oe=(ue(t,w,{_f:{}})._f||{}).ref,ae=ue(r.errors,w)||{},{ref:te,message:me,type:Oe,...Me}=ae;$e(r.errors,w,{...Me,...B,ref:oe}),y.state.next({name:w,errors:r.errors,isValid:!1}),U&&U.shouldFocus&&oe&&oe.focus&&oe.focus()},An=(w,B)=>cr(w)?y.state.subscribe({next:U=>"values"in U&&w(G(void 0,B),U)}):G(w,B,!0),Ye=w=>y.state.subscribe({next:B=>{ew(w.name,B.name,w.exact)&&QE(B,w.formState||m,un,w.reRenderRoot)&&w.callback({values:{...l},...r,...B,defaultValues:s})}}).unsubscribe,Ve=w=>(u.mount=!0,p={...p,...w.formState},Ye({...w,formState:p})),He=(w,B={})=>{for(const U of w?wa(w):f.mount)f.mount.delete(U),f.array.delete(U),B.keepValue||(ln(t,U),ln(l,U)),!B.keepError&&ln(r.errors,U),!B.keepDirty&&ln(r.dirtyFields,U),!B.keepTouched&&ln(r.touchedFields,U),!B.keepIsValidating&&ln(r.validatingFields,U),!i.shouldUnregister&&!B.keepDefaultValue&&ln(s,U);y.state.next({values:gn(l)}),y.state.next({...r,...B.keepDirty?{isDirty:ee()}:{}}),!B.keepIsValid&&_()},Ee=({disabled:w,name:B})=>{(Gn(w)&&u.mount||w||f.disabled.has(B))&&(w?f.disabled.add(B):f.disabled.delete(B))},Ne=(w,B={})=>{let U=ue(t,w);const oe=Gn(B.disabled)||Gn(i.disabled);return $e(t,w,{...U||{},_f:{...U&&U._f?U._f:{ref:{name:w}},name:w,mount:!0,...B}}),f.mount.add(w),U?Ee({disabled:Gn(B.disabled)?B.disabled:i.disabled,name:w}):D(w,!0,B.value),{...oe?{disabled:B.disabled||i.disabled}:{},...i.progressive?{required:!!B.required,min:ya(B.min),max:ya(B.max),minLength:ya(B.minLength),maxLength:ya(B.maxLength),pattern:ya(B.pattern)}:{},name:w,onChange:J,onBlur:J,ref:ae=>{if(ae){Ne(w,B),U=ue(t,w);const te=an(ae.value)&&ae.querySelectorAll&&ae.querySelectorAll("input,select,textarea")[0]||ae,me=YE(te),Oe=U._f.refs||[];if(me?Oe.find(Me=>Me===te):te===U._f.ref)return;$e(t,w,{_f:{...U._f,...me?{refs:[...Oe.filter(Ho),te,...Array.isArray(ue(s,w))?[{}]:[]],ref:{type:te.type,name:w}}:{ref:te}}}),D(w,!1,void 0,te)}else U=ue(t,w,{}),U._f&&(U._f.mount=!1),(i.shouldUnregister||B.shouldUnregister)&&!(Cc(f.array,w)&&u.action)&&f.unMount.add(w)}}},nn=()=>i.shouldFocusError&&Ra(t,z,f.mount),Xe=w=>{Gn(w)&&(y.state.next({disabled:w}),Ra(t,(B,U)=>{const oe=ue(t,U);oe&&(B.disabled=oe._f.disabled||w,Array.isArray(oe._f.refs)&&oe._f.refs.forEach(ae=>{ae.disabled=oe._f.disabled||w}))},0,!1))},Ze=(w,B)=>async U=>{let oe;U&&(U.preventDefault&&U.preventDefault(),U.persist&&U.persist());let ae=gn(l);if(y.state.next({isSubmitting:!0}),i.resolver){const{errors:te,values:me}=await j();r.errors=te,ae=gn(me)}else await K(t);if(f.disabled.size)for(const te of f.disabled)ln(ae,te);if(ln(r.errors,"root"),Mn(r.errors)){y.state.next({errors:{}});try{await w(ae,U)}catch(te){oe=te}}else B&&await B({...r.errors},U),nn(),setTimeout(nn);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Mn(r.errors)&&!oe,submitCount:r.submitCount+1,errors:r.errors}),oe)throw oe},Pn=(w,B={})=>{ue(t,w)&&(an(B.defaultValue)?re(w,gn(ue(s,w))):(re(w,B.defaultValue),$e(s,w,gn(B.defaultValue))),B.keepTouched||ln(r.touchedFields,w),B.keepDirty||(ln(r.dirtyFields,w),r.isDirty=B.defaultValue?ee(w,gn(ue(s,w))):ee()),B.keepError||(ln(r.errors,w),m.isValid&&_()),y.state.next({...r}))},Ge=(w,B={})=>{const U=w?gn(w):s,oe=gn(U),ae=Mn(w),te=ae?s:oe;if(B.keepDefaultValues||(s=U),!B.keepValues){if(B.keepDirtyValues){const me=new Set([...f.mount,...Object.keys(pa(s,l))]);for(const Oe of Array.from(me))ue(r.dirtyFields,Oe)?$e(te,Oe,ue(l,Oe)):re(Oe,ue(te,Oe))}else{if(Fl&&an(w))for(const me of f.mount){const Oe=ue(t,me);if(Oe&&Oe._f){const Me=Array.isArray(Oe._f.refs)?Oe._f.refs[0]:Oe._f.ref;if(Ji(Me)){const bn=Me.closest("form");if(bn){bn.reset();break}}}}if(B.keepFieldsRef)for(const me of f.mount)re(me,ue(te,me));else t={}}l=i.shouldUnregister?B.keepDefaultValues?gn(s):{}:gn(te),y.array.next({values:{...te}}),y.state.next({values:{...te}})}f={mount:B.keepDirtyValues?f.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!m.isValid||!!B.keepIsValid||!!B.keepDirtyValues,u.watch=!!i.shouldUnregister,y.state.next({submitCount:B.keepSubmitCount?r.submitCount:0,isDirty:ae?!1:B.keepDirty?r.isDirty:!!(B.keepDefaultValues&&!Dr(w,s)),isSubmitted:B.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:ae?{}:B.keepDirtyValues?B.keepDefaultValues&&l?pa(s,l):r.dirtyFields:B.keepDefaultValues&&w?pa(s,w):B.keepDirty?r.dirtyFields:{},touchedFields:B.keepTouched?r.touchedFields:{},errors:B.keepErrors?r.errors:{},isSubmitSuccessful:B.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},on=(w,B)=>Ge(cr(w)?w(l):w,B),sr=(w,B={})=>{const U=ue(t,w),oe=U&&U._f;if(oe){const ae=oe.refs?oe.refs[0]:oe.ref;ae.focus&&(ae.focus(),B.shouldSelect&&cr(ae.select)&&ae.select())}},un=w=>{r={...r,...w}},$n={control:{register:Ne,unregister:He,getFieldState:le,handleSubmit:Ze,setError:Ae,_subscribe:Ye,_runSchema:j,_focusError:nn,_getWatch:G,_getDirty:ee,_setValid:_,_setFieldArray:R,_setDisabledField:Ee,_setErrors:P,_getFieldArray:F,_reset:Ge,_resetDefaultValues:()=>cr(i.defaultValues)&&i.defaultValues().then(w=>{on(w,i.resetOptions),y.state.next({isLoading:!1})}),_removeUnmounted:ne,_disableForm:Xe,_subjects:y,_proxyFormState:m,get _fields(){return t},get _formValues(){return l},get _state(){return u},set _state(w){u=w},get _defaultValues(){return s},get _names(){return f},set _names(w){f=w},get _formState(){return r},get _options(){return i},set _options(w){i={...i,...w}}},subscribe:Ve,trigger:Z,register:Ne,handleSubmit:Ze,watch:An,setValue:re,getValues:de,reset:on,resetField:Pn,clearErrors:ve,unregister:He,setError:Ae,setFocus:sr,getFieldState:le};return{...$n,formControl:$n}}function sw(e={}){const i=M.useRef(void 0),r=M.useRef(void 0),[t,s]=M.useState({isDirty:!1,isValidating:!1,isLoading:cr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:cr(e.defaultValues)?void 0:e.defaultValues});if(!i.current)if(e.formControl)i.current={...e.formControl,formState:t},e.defaultValues&&!cr(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:u,...f}=iw(e);i.current={...f,formState:t}}const l=i.current.control;return l._options=e,Cl(()=>{const u=l._subscribe({formState:l._proxyFormState,callback:()=>s({...l._formState}),reRenderRoot:!0});return s(f=>({...f,isReady:!0})),l._formState.isReady=!0,u},[l]),M.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),M.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),M.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),M.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),M.useEffect(()=>{if(l._proxyFormState.isDirty){const u=l._getDirty();u!==t.isDirty&&l._subjects.state.next({isDirty:u})}},[l,t.isDirty]),M.useEffect(()=>{e.values&&!Dr(e.values,r.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),r.current=e.values,s(u=>({...u}))):l._resetDefaultValues()},[l,e.values]),M.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),i.current.formState=Vc(t,l),i.current}function ow(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pg={exports:{}},ka={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function lw(){if(yg)return ka;yg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:l}}return ka.Fragment=i,ka.jsx=r,ka.jsxs=r,ka}var kg;function uw(){return kg||(kg=1,pg.exports=lw()),pg.exports}var kn=uw();const Xc=e=>e.reduce((i,r,t)=>({...i,[t]:s=>r(s)||!0}),{}),il=(e,i)=>i.split(".").reduce((r,t)=>r!==void 0?r[t]:r,e)?.message,dw=({label:e,validate:i=[],readOnly:r=!1,onChange:t,onClick:s,className:l,...u})=>{const{name:f,control:c,disabled:v}=u,{formState:{errors:m}}=Fa(),{field:p}=Gc({name:f,control:c,rules:{validate:E.useMemo(()=>Xc(i),[i])}}),y=il(m,f);return kn.jsxs(kn.Fragment,{children:[kn.jsx(QT,{size:"small",disabled:v||r,checked:p.value===!0,className:l,error:!!y,...p,onChange:k=>{p.onChange(k),t&&t(k.currentTarget.checked)},onClick:()=>{s&&s()},children:e}),y&&kn.jsx(rs,{children:il(m,f)})]})};var sl={exports:{}},fw=sl.exports,Ag;function gw(){return Ag||(Ag=1,function(e,i){(function(r,t){e.exports=t()})(fw,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,u=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,c={},v=function(A){return(A=+A)+(A>68?1900:2e3)},m=function(A){return function(R){this[A]=+R}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(A){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var S=R.match(/([+-]|\d\d)/g),P=60*S[1]+(+S[2]||0);return P===0?0:S[0]==="+"?-P:P}(A)}],y=function(A){var R=c[A];return R&&(R.indexOf?R:R.s.concat(R.f))},k=function(A,R){var S,P=c.meridiem;if(P){for(var D=1;D<=24;D+=1)if(A.indexOf(P(D,0,R))>-1){S=D>12;break}}else S=A===(R?"pm":"PM");return S},x={A:[f,function(A){this.afternoon=k(A,!1)}],a:[f,function(A){this.afternoon=k(A,!0)}],Q:[s,function(A){this.month=3*(A-1)+1}],S:[s,function(A){this.milliseconds=100*+A}],SS:[l,function(A){this.milliseconds=10*+A}],SSS:[/\d{3}/,function(A){this.milliseconds=+A}],s:[u,m("seconds")],ss:[u,m("seconds")],m:[u,m("minutes")],mm:[u,m("minutes")],H:[u,m("hours")],h:[u,m("hours")],HH:[u,m("hours")],hh:[u,m("hours")],D:[u,m("day")],DD:[l,m("day")],Do:[f,function(A){var R=c.ordinal,S=A.match(/\d+/);if(this.day=S[0],R)for(var P=1;P<=31;P+=1)R(P).replace(/\[|\]/g,"")===A&&(this.day=P)}],w:[u,m("week")],ww:[l,m("week")],M:[u,m("month")],MM:[l,m("month")],MMM:[f,function(A){var R=y("months"),S=(y("monthsShort")||R.map(function(P){return P.slice(0,3)})).indexOf(A)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[f,function(A){var R=y("months").indexOf(A)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(A){this.year=v(A)}],YYYY:[/\d{4}/,m("year")],Z:p,ZZ:p};function _(A){var R,S;R=A,S=c&&c.formats;for(var P=(A=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(ne,ee,G){var F=G&&G.toUpperCase();return ee||S[G]||r[G]||S[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,X,re){return X||re.slice(1)})})).match(t),D=P.length,I=0;I<D;I+=1){var H=P[I],j=x[H],C=j&&j[0],K=j&&j[1];P[I]=K?{regex:C,parser:K}:H.replace(/^\[|\]$/g,"")}return function(ne){for(var ee={},G=0,F=0;G<D;G+=1){var L=P[G];if(typeof L=="string")F+=L.length;else{var X=L.regex,re=L.parser,J=ne.slice(F),z=X.exec(J)[0];re.call(ee,z),ne=ne.replace(z,"")}}return function(Z){var de=Z.afternoon;if(de!==void 0){var le=Z.hours;de?le<12&&(Z.hours+=12):le===12&&(Z.hours=0),delete Z.afternoon}}(ee),ee}}return function(A,R,S){S.p.customParseFormat=!0,A&&A.parseTwoDigitYear&&(v=A.parseTwoDigitYear);var P=R.prototype,D=P.parse;P.parse=function(I){var H=I.date,j=I.utc,C=I.args;this.$u=j;var K=C[1];if(typeof K=="string"){var ne=C[2]===!0,ee=C[3]===!0,G=ne||ee,F=C[2];ee&&(F=C[2]),c=this.$locale(),!ne&&F&&(c=S.Ls[F]),this.$d=function(J,z,Z,de){try{if(["x","X"].indexOf(z)>-1)return new Date((z==="X"?1e3:1)*J);var le=_(z)(J),ve=le.year,Ae=le.month,An=le.day,Ye=le.hours,Ve=le.minutes,He=le.seconds,Ee=le.milliseconds,Ne=le.zone,nn=le.week,Xe=new Date,Ze=An||(ve||Ae?1:Xe.getDate()),Pn=ve||Xe.getFullYear(),Ge=0;ve&&!Ae||(Ge=Ae>0?Ae-1:Xe.getMonth());var on,sr=Ye||0,un=Ve||0,or=He||0,$n=Ee||0;return Ne?new Date(Date.UTC(Pn,Ge,Ze,sr,un,or,$n+60*Ne.offset*1e3)):Z?new Date(Date.UTC(Pn,Ge,Ze,sr,un,or,$n)):(on=new Date(Pn,Ge,Ze,sr,un,or,$n),nn&&(on=de(on).week(nn).toDate()),on)}catch{return new Date("")}}(H,K,j,S),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),G&&H!=this.format(K)&&(this.$d=new Date("")),c={}}else if(K instanceof Array)for(var L=K.length,X=1;X<=L;X+=1){C[1]=K[X-1];var re=S.apply(this,C);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}X===L&&(this.$d=new Date(""))}else D.call(this,I)}}})}(sl)),sl.exports}var cw=gw();const mw=ow(cw),vw="_textarea_1snk6_1",hw="_readOnlyField_1snk6_7",_g={textarea:vw,readOnlyField:hw},bw=e=>e!=null&&e!=="",pw=({label:e,value:i,isEdited:r=!1,type:t,hideLabel:s,size:l})=>bw(i)?kn.jsxs(_t,{gap:"1",children:[e&&!s&&kn.jsx(pt,{size:l,children:e}),kn.jsxs(Ml,{gap:"2",align:"center",wrap:!1,children:[kn.jsx(ic,{className:t==="textarea"?_g.textarea:_g.readOnlyField,size:l,children:i}),r&&kn.jsx(OE,{})]})]}):null;Hr.extend(mw);const yw="_textAreaFieldWithBadges_bdz0b_1",kw="_etikettWrapper_bdz0b_4",Tg={textAreaFieldWithBadges:yw,etikettWrapper:kw},Aw=({name:e,control:i,label:r,readOnly:t,maxLength:s,badges:l,validate:u=[],parse:f=k=>k,className:c,description:v,isEdited:m,size:p="small",...y})=>{const{formState:{errors:k}}=Fa(),{field:x}=Gc({name:e,control:i,rules:{validate:E.useMemo(()=>Xc(u),[u])}});return t?kn.jsx(pw,{size:p,label:r,value:x.value,type:"textarea",isEdited:m,hideLabel:y.hideLabel}):kn.jsxs("div",{className:l?Tg.textAreaFieldWithBadges:null,children:[l&&kn.jsx("div",{className:Tg.etikettWrapper,children:l.map(({type:_,titleText:A})=>kn.jsx(GT,{variant:_,size:"small",children:A},A))}),kn.jsx(oE,{size:p,label:r,description:v,className:c,autoComplete:"off",...x,onChange:_=>x.onChange(_.currentTarget.value!==""?f(_.currentTarget.value):null),value:x.value?x.value:"",error:il(k,e),maxLength:s,...y})]})},_w=({formMethods:e,onSubmit:i,children:r,className:t,setDataOnUnmount:s})=>{const{handleSubmit:l,getValues:u}=e;return E.useEffect(()=>()=>{s&&s(u())},[]),kn.jsx(GE,{...e,children:kn.jsx("form",{className:t,onSubmit:i?l(f=>i(f)):void 0,children:r})})},La={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"},Go=vr(La),Tw=fA(3),Ew=gA(1500),ja=({control:e,isReadOnly:i,isSubmittable:r,hasBegrunnelse:t,label:s,hasReadOnlyLabel:l=!1,hasVurderingText:u=!1,size:f})=>{const c=u?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",v=()=>i?l?Go.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":s??Go.formatMessage({id:c});return ie.jsx(El,{value:Go,children:(r||t)&&ie.jsx(Aw,{name:"begrunnelse",control:e,label:v(),validate:[dA,Tw,Ew,cA],maxLength:1500,readOnly:i,size:f})})},ww=e=>e&&Array.isArray(e)?e[0]?.begrunnelse??"":e&&!Array.isArray(e)&&e.begrunnelse?e.begrunnelse:"";ja.initialValues=e=>({begrunnelse:mA(ww(e)??void 0)});ja.transformValues=e=>({begrunnelse:_A(e.begrunnelse)});ja.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""}}};const Rw=vr(La),Pw=(e,i,r)=>!r||i?!0:!e,Zc=({isReadOnly:e,isSubmittable:i,buttonText:r,onClick:t,isSubmitting:s,isDirty:l})=>ie.jsx(El,{value:Rw,children:!e&&ie.jsx("div",{children:ie.jsxs(ls,{size:"small",variant:"primary",loading:s,disabled:Pw(l,s,i),onClick:t||vA,type:t?"button":"submit",children:[!!r&&r,!r&&ie.jsx(Bn,{id:"SubmitButton.ConfirmInformation"})]})})});Zc.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};vr(La);var Ea={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Ow=Ea.exports,Eg;function Sw(){return Eg||(Eg=1,function(e,i){(function(){var r,t="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",f="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",v=500,m="__lodash_placeholder__",p=1,y=2,k=4,x=1,_=2,A=1,R=2,S=4,P=8,D=16,I=32,H=64,j=128,C=256,K=512,ne=30,ee="...",G=800,F=16,L=1,X=2,re=3,J=1/0,z=9007199254740991,Z=17976931348623157e292,de=NaN,le=4294967295,ve=le-1,Ae=le>>>1,An=[["ary",j],["bind",A],["bindKey",R],["curry",P],["curryRight",D],["flip",K],["partial",I],["partialRight",H],["rearg",C]],Ye="[object Arguments]",Ve="[object Array]",He="[object AsyncFunction]",Ee="[object Boolean]",Ne="[object Date]",nn="[object DOMException]",Xe="[object Error]",Ze="[object Function]",Pn="[object GeneratorFunction]",Ge="[object Map]",on="[object Number]",sr="[object Null]",un="[object Object]",or="[object Promise]",$n="[object Proxy]",w="[object RegExp]",B="[object Set]",U="[object String]",oe="[object Symbol]",ae="[object Undefined]",te="[object WeakMap]",me="[object WeakSet]",Oe="[object ArrayBuffer]",Me="[object DataView]",bn="[object Float32Array]",Ur="[object Float64Array]",Kn="[object Int8Array]",Zt="[object Int16Array]",rt="[object Int32Array]",tt="[object Uint8Array]",Jt="[object Uint8ClampedArray]",wt="[object Uint16Array]",Qt="[object Uint32Array]",Ha=/\b__p \+= '';/g,Rm=/\b(__p \+=) '' \+/g,Pm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Yl=/&(?:amp|lt|gt|quot|#39);/g,Wl=/[&<>"']/g,Om=RegExp(Yl.source),Sm=RegExp(Wl.source),Im=/<%-([\s\S]+?)%>/g,xm=/<%([\s\S]+?)%>/g,zl=/<%=([\s\S]+?)%>/g,Nm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qm=/^\w*$/,Mm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vs=/[\\^$.*+?()[\]{}|]/g,Bm=RegExp(vs.source),hs=/^\s+/,Fm=/\s/,Lm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,jm=/\{\n\/\* \[wrapped with (.+)\] \*/,Dm=/,? & /,Cm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Vm=/[()=,{}\[\]\/\s]/,Hm=/\\(\\)?/g,Gm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Xl=/\w*$/,Um=/^[-+]0x[0-9a-f]+$/i,$m=/^0b[01]+$/i,Km=/^\[object .+?Constructor\]$/,Ym=/^0o[0-7]+$/i,Wm=/^(?:0|[1-9]\d*)$/,zm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ga=/($^)/,Xm=/['\n\r\u2028\u2029\\]/g,Ua="\\ud800-\\udfff",Zm="\\u0300-\\u036f",Jm="\\ufe20-\\ufe2f",Qm="\\u20d0-\\u20ff",Zl=Zm+Jm+Qm,Jl="\\u2700-\\u27bf",Ql="a-z\\xdf-\\xf6\\xf8-\\xff",ev="\\xac\\xb1\\xd7\\xf7",nv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rv="\\u2000-\\u206f",tv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",eu="A-Z\\xc0-\\xd6\\xd8-\\xde",nu="\\ufe0e\\ufe0f",ru=ev+nv+rv+tv,bs="['’]",av="["+Ua+"]",tu="["+ru+"]",$a="["+Zl+"]",au="\\d+",iv="["+Jl+"]",iu="["+Ql+"]",su="[^"+Ua+ru+au+Jl+Ql+eu+"]",ps="\\ud83c[\\udffb-\\udfff]",sv="(?:"+$a+"|"+ps+")",ou="[^"+Ua+"]",ys="(?:\\ud83c[\\udde6-\\uddff]){2}",ks="[\\ud800-\\udbff][\\udc00-\\udfff]",Rt="["+eu+"]",lu="\\u200d",uu="(?:"+iu+"|"+su+")",ov="(?:"+Rt+"|"+su+")",du="(?:"+bs+"(?:d|ll|m|re|s|t|ve))?",fu="(?:"+bs+"(?:D|LL|M|RE|S|T|VE))?",gu=sv+"?",cu="["+nu+"]?",lv="(?:"+lu+"(?:"+[ou,ys,ks].join("|")+")"+cu+gu+")*",uv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",dv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",mu=cu+gu+lv,fv="(?:"+[iv,ys,ks].join("|")+")"+mu,gv="(?:"+[ou+$a+"?",$a,ys,ks,av].join("|")+")",cv=RegExp(bs,"g"),mv=RegExp($a,"g"),As=RegExp(ps+"(?="+ps+")|"+gv+mu,"g"),vv=RegExp([Rt+"?"+iu+"+"+du+"(?="+[tu,Rt,"$"].join("|")+")",ov+"+"+fu+"(?="+[tu,Rt+uu,"$"].join("|")+")",Rt+"?"+uu+"+"+du,Rt+"+"+fu,dv,uv,au,fv].join("|"),"g"),hv=RegExp("["+lu+Ua+Zl+nu+"]"),bv=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,pv=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],yv=-1,We={};We[bn]=We[Ur]=We[Kn]=We[Zt]=We[rt]=We[tt]=We[Jt]=We[wt]=We[Qt]=!0,We[Ye]=We[Ve]=We[Oe]=We[Ee]=We[Me]=We[Ne]=We[Xe]=We[Ze]=We[Ge]=We[on]=We[un]=We[w]=We[B]=We[U]=We[te]=!1;var Ue={};Ue[Ye]=Ue[Ve]=Ue[Oe]=Ue[Me]=Ue[Ee]=Ue[Ne]=Ue[bn]=Ue[Ur]=Ue[Kn]=Ue[Zt]=Ue[rt]=Ue[Ge]=Ue[on]=Ue[un]=Ue[w]=Ue[B]=Ue[U]=Ue[oe]=Ue[tt]=Ue[Jt]=Ue[wt]=Ue[Qt]=!0,Ue[Xe]=Ue[Ze]=Ue[te]=!1;var kv={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Av={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},_v={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Tv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ev=parseFloat,wv=parseInt,vu=typeof xi=="object"&&xi&&xi.Object===Object&&xi,Rv=typeof self=="object"&&self&&self.Object===Object&&self,mn=vu||Rv||Function("return this")(),_s=i&&!i.nodeType&&i,at=_s&&!0&&e&&!e.nodeType&&e,hu=at&&at.exports===_s,Ts=hu&&vu.process,Yn=function(){try{var N=at&&at.require&&at.require("util").types;return N||Ts&&Ts.binding&&Ts.binding("util")}catch{}}(),bu=Yn&&Yn.isArrayBuffer,pu=Yn&&Yn.isDate,yu=Yn&&Yn.isMap,ku=Yn&&Yn.isRegExp,Au=Yn&&Yn.isSet,_u=Yn&&Yn.isTypedArray;function Ln(N,$,V){switch(V.length){case 0:return N.call($);case 1:return N.call($,V[0]);case 2:return N.call($,V[0],V[1]);case 3:return N.call($,V[0],V[1],V[2])}return N.apply($,V)}function Pv(N,$,V,fe){for(var ye=-1,Be=N==null?0:N.length;++ye<Be;){var dn=N[ye];$(fe,dn,V(dn),N)}return fe}function Wn(N,$){for(var V=-1,fe=N==null?0:N.length;++V<fe&&$(N[V],V,N)!==!1;);return N}function Ov(N,$){for(var V=N==null?0:N.length;V--&&$(N[V],V,N)!==!1;);return N}function Tu(N,$){for(var V=-1,fe=N==null?0:N.length;++V<fe;)if(!$(N[V],V,N))return!1;return!0}function $r(N,$){for(var V=-1,fe=N==null?0:N.length,ye=0,Be=[];++V<fe;){var dn=N[V];$(dn,V,N)&&(Be[ye++]=dn)}return Be}function Ka(N,$){var V=N==null?0:N.length;return!!V&&Pt(N,$,0)>-1}function Es(N,$,V){for(var fe=-1,ye=N==null?0:N.length;++fe<ye;)if(V($,N[fe]))return!0;return!1}function Je(N,$){for(var V=-1,fe=N==null?0:N.length,ye=Array(fe);++V<fe;)ye[V]=$(N[V],V,N);return ye}function Kr(N,$){for(var V=-1,fe=$.length,ye=N.length;++V<fe;)N[ye+V]=$[V];return N}function ws(N,$,V,fe){var ye=-1,Be=N==null?0:N.length;for(fe&&Be&&(V=N[++ye]);++ye<Be;)V=$(V,N[ye],ye,N);return V}function Sv(N,$,V,fe){var ye=N==null?0:N.length;for(fe&&ye&&(V=N[--ye]);ye--;)V=$(V,N[ye],ye,N);return V}function Rs(N,$){for(var V=-1,fe=N==null?0:N.length;++V<fe;)if($(N[V],V,N))return!0;return!1}var Iv=Ps("length");function xv(N){return N.split("")}function Nv(N){return N.match(Cm)||[]}function Eu(N,$,V){var fe;return V(N,function(ye,Be,dn){if($(ye,Be,dn))return fe=Be,!1}),fe}function Ya(N,$,V,fe){for(var ye=N.length,Be=V+(fe?1:-1);fe?Be--:++Be<ye;)if($(N[Be],Be,N))return Be;return-1}function Pt(N,$,V){return $===$?Uv(N,$,V):Ya(N,wu,V)}function qv(N,$,V,fe){for(var ye=V-1,Be=N.length;++ye<Be;)if(fe(N[ye],$))return ye;return-1}function wu(N){return N!==N}function Ru(N,$){var V=N==null?0:N.length;return V?Ss(N,$)/V:de}function Ps(N){return function($){return $==null?r:$[N]}}function Os(N){return function($){return N==null?r:N[$]}}function Pu(N,$,V,fe,ye){return ye(N,function(Be,dn,Ce){V=fe?(fe=!1,Be):$(V,Be,dn,Ce)}),V}function Mv(N,$){var V=N.length;for(N.sort($);V--;)N[V]=N[V].value;return N}function Ss(N,$){for(var V,fe=-1,ye=N.length;++fe<ye;){var Be=$(N[fe]);Be!==r&&(V=V===r?Be:V+Be)}return V}function Is(N,$){for(var V=-1,fe=Array(N);++V<N;)fe[V]=$(V);return fe}function Bv(N,$){return Je($,function(V){return[V,N[V]]})}function Ou(N){return N&&N.slice(0,Nu(N)+1).replace(hs,"")}function jn(N){return function($){return N($)}}function xs(N,$){return Je($,function(V){return N[V]})}function ea(N,$){return N.has($)}function Su(N,$){for(var V=-1,fe=N.length;++V<fe&&Pt($,N[V],0)>-1;);return V}function Iu(N,$){for(var V=N.length;V--&&Pt($,N[V],0)>-1;);return V}function Fv(N,$){for(var V=N.length,fe=0;V--;)N[V]===$&&++fe;return fe}var Lv=Os(kv),jv=Os(Av);function Dv(N){return"\\"+Tv[N]}function Cv(N,$){return N==null?r:N[$]}function Ot(N){return hv.test(N)}function Vv(N){return bv.test(N)}function Hv(N){for(var $,V=[];!($=N.next()).done;)V.push($.value);return V}function Ns(N){var $=-1,V=Array(N.size);return N.forEach(function(fe,ye){V[++$]=[ye,fe]}),V}function xu(N,$){return function(V){return N($(V))}}function Yr(N,$){for(var V=-1,fe=N.length,ye=0,Be=[];++V<fe;){var dn=N[V];(dn===$||dn===m)&&(N[V]=m,Be[ye++]=V)}return Be}function Wa(N){var $=-1,V=Array(N.size);return N.forEach(function(fe){V[++$]=fe}),V}function Gv(N){var $=-1,V=Array(N.size);return N.forEach(function(fe){V[++$]=[fe,fe]}),V}function Uv(N,$,V){for(var fe=V-1,ye=N.length;++fe<ye;)if(N[fe]===$)return fe;return-1}function $v(N,$,V){for(var fe=V+1;fe--;)if(N[fe]===$)return fe;return fe}function St(N){return Ot(N)?Yv(N):Iv(N)}function lr(N){return Ot(N)?Wv(N):xv(N)}function Nu(N){for(var $=N.length;$--&&Fm.test(N.charAt($)););return $}var Kv=Os(_v);function Yv(N){for(var $=As.lastIndex=0;As.test(N);)++$;return $}function Wv(N){return N.match(As)||[]}function zv(N){return N.match(vv)||[]}var Xv=function N($){$=$==null?mn:It.defaults(mn.Object(),$,It.pick(mn,pv));var V=$.Array,fe=$.Date,ye=$.Error,Be=$.Function,dn=$.Math,Ce=$.Object,qs=$.RegExp,Zv=$.String,zn=$.TypeError,za=V.prototype,Jv=Be.prototype,xt=Ce.prototype,Xa=$["__core-js_shared__"],Za=Jv.toString,De=xt.hasOwnProperty,Qv=0,qu=function(){var n=/[^.]+$/.exec(Xa&&Xa.keys&&Xa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ja=xt.toString,eh=Za.call(Ce),nh=mn._,rh=qs("^"+Za.call(De).replace(vs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qa=hu?$.Buffer:r,Wr=$.Symbol,ei=$.Uint8Array,Mu=Qa?Qa.allocUnsafe:r,ni=xu(Ce.getPrototypeOf,Ce),Bu=Ce.create,Fu=xt.propertyIsEnumerable,ri=za.splice,Lu=Wr?Wr.isConcatSpreadable:r,na=Wr?Wr.iterator:r,it=Wr?Wr.toStringTag:r,ti=function(){try{var n=dt(Ce,"defineProperty");return n({},"",{}),n}catch{}}(),th=$.clearTimeout!==mn.clearTimeout&&$.clearTimeout,ah=fe&&fe.now!==mn.Date.now&&fe.now,ih=$.setTimeout!==mn.setTimeout&&$.setTimeout,ai=dn.ceil,ii=dn.floor,Ms=Ce.getOwnPropertySymbols,sh=Qa?Qa.isBuffer:r,ju=$.isFinite,oh=za.join,lh=xu(Ce.keys,Ce),fn=dn.max,pn=dn.min,uh=fe.now,dh=$.parseInt,Du=dn.random,fh=za.reverse,Bs=dt($,"DataView"),ra=dt($,"Map"),Fs=dt($,"Promise"),Nt=dt($,"Set"),ta=dt($,"WeakMap"),aa=dt(Ce,"create"),si=ta&&new ta,qt={},gh=ft(Bs),ch=ft(ra),mh=ft(Fs),vh=ft(Nt),hh=ft(ta),oi=Wr?Wr.prototype:r,ia=oi?oi.valueOf:r,Cu=oi?oi.toString:r;function h(n){if(en(n)&&!ke(n)&&!(n instanceof Pe)){if(n instanceof Xn)return n;if(De.call(n,"__wrapped__"))return Vd(n)}return new Xn(n)}var Mt=function(){function n(){}return function(a){if(!Qe(a))return{};if(Bu)return Bu(a);n.prototype=a;var o=new n;return n.prototype=r,o}}();function li(){}function Xn(n,a){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=r}h.templateSettings={escape:Im,evaluate:xm,interpolate:zl,variable:"",imports:{_:h}},h.prototype=li.prototype,h.prototype.constructor=h,Xn.prototype=Mt(li.prototype),Xn.prototype.constructor=Xn;function Pe(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=le,this.__views__=[]}function bh(){var n=new Pe(this.__wrapped__);return n.__actions__=On(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=On(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=On(this.__views__),n}function ph(){if(this.__filtered__){var n=new Pe(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function yh(){var n=this.__wrapped__.value(),a=this.__dir__,o=ke(n),d=a<0,g=o?n.length:0,b=xb(0,g,this.__views__),T=b.start,O=b.end,q=O-T,Y=d?O:T-1,W=this.__iteratees__,Q=W.length,se=0,ce=pn(q,this.__takeCount__);if(!o||!d&&g==q&&ce==q)return dd(n,this.__actions__);var be=[];e:for(;q--&&se<ce;){Y+=a;for(var Te=-1,pe=n[Y];++Te<Q;){var Re=W[Te],Se=Re.iteratee,Vn=Re.type,En=Se(pe);if(Vn==X)pe=En;else if(!En){if(Vn==L)continue e;break e}}be[se++]=pe}return be}Pe.prototype=Mt(li.prototype),Pe.prototype.constructor=Pe;function st(n){var a=-1,o=n==null?0:n.length;for(this.clear();++a<o;){var d=n[a];this.set(d[0],d[1])}}function kh(){this.__data__=aa?aa(null):{},this.size=0}function Ah(n){var a=this.has(n)&&delete this.__data__[n];return this.size-=a?1:0,a}function _h(n){var a=this.__data__;if(aa){var o=a[n];return o===c?r:o}return De.call(a,n)?a[n]:r}function Th(n){var a=this.__data__;return aa?a[n]!==r:De.call(a,n)}function Eh(n,a){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=aa&&a===r?c:a,this}st.prototype.clear=kh,st.prototype.delete=Ah,st.prototype.get=_h,st.prototype.has=Th,st.prototype.set=Eh;function Or(n){var a=-1,o=n==null?0:n.length;for(this.clear();++a<o;){var d=n[a];this.set(d[0],d[1])}}function wh(){this.__data__=[],this.size=0}function Rh(n){var a=this.__data__,o=ui(a,n);if(o<0)return!1;var d=a.length-1;return o==d?a.pop():ri.call(a,o,1),--this.size,!0}function Ph(n){var a=this.__data__,o=ui(a,n);return o<0?r:a[o][1]}function Oh(n){return ui(this.__data__,n)>-1}function Sh(n,a){var o=this.__data__,d=ui(o,n);return d<0?(++this.size,o.push([n,a])):o[d][1]=a,this}Or.prototype.clear=wh,Or.prototype.delete=Rh,Or.prototype.get=Ph,Or.prototype.has=Oh,Or.prototype.set=Sh;function Sr(n){var a=-1,o=n==null?0:n.length;for(this.clear();++a<o;){var d=n[a];this.set(d[0],d[1])}}function Ih(){this.size=0,this.__data__={hash:new st,map:new(ra||Or),string:new st}}function xh(n){var a=Ai(this,n).delete(n);return this.size-=a?1:0,a}function Nh(n){return Ai(this,n).get(n)}function qh(n){return Ai(this,n).has(n)}function Mh(n,a){var o=Ai(this,n),d=o.size;return o.set(n,a),this.size+=o.size==d?0:1,this}Sr.prototype.clear=Ih,Sr.prototype.delete=xh,Sr.prototype.get=Nh,Sr.prototype.has=qh,Sr.prototype.set=Mh;function ot(n){var a=-1,o=n==null?0:n.length;for(this.__data__=new Sr;++a<o;)this.add(n[a])}function Bh(n){return this.__data__.set(n,c),this}function Fh(n){return this.__data__.has(n)}ot.prototype.add=ot.prototype.push=Bh,ot.prototype.has=Fh;function ur(n){var a=this.__data__=new Or(n);this.size=a.size}function Lh(){this.__data__=new Or,this.size=0}function jh(n){var a=this.__data__,o=a.delete(n);return this.size=a.size,o}function Dh(n){return this.__data__.get(n)}function Ch(n){return this.__data__.has(n)}function Vh(n,a){var o=this.__data__;if(o instanceof Or){var d=o.__data__;if(!ra||d.length<s-1)return d.push([n,a]),this.size=++o.size,this;o=this.__data__=new Sr(d)}return o.set(n,a),this.size=o.size,this}ur.prototype.clear=Lh,ur.prototype.delete=jh,ur.prototype.get=Dh,ur.prototype.has=Ch,ur.prototype.set=Vh;function Vu(n,a){var o=ke(n),d=!o&&gt(n),g=!o&&!d&&Qr(n),b=!o&&!d&&!g&&jt(n),T=o||d||g||b,O=T?Is(n.length,Zv):[],q=O.length;for(var Y in n)(a||De.call(n,Y))&&!(T&&(Y=="length"||g&&(Y=="offset"||Y=="parent")||b&&(Y=="buffer"||Y=="byteLength"||Y=="byteOffset")||qr(Y,q)))&&O.push(Y);return O}function Hu(n){var a=n.length;return a?n[Ys(0,a-1)]:r}function Hh(n,a){return _i(On(n),lt(a,0,n.length))}function Gh(n){return _i(On(n))}function Ls(n,a,o){(o!==r&&!dr(n[a],o)||o===r&&!(a in n))&&Ir(n,a,o)}function sa(n,a,o){var d=n[a];(!(De.call(n,a)&&dr(d,o))||o===r&&!(a in n))&&Ir(n,a,o)}function ui(n,a){for(var o=n.length;o--;)if(dr(n[o][0],a))return o;return-1}function Uh(n,a,o,d){return zr(n,function(g,b,T){a(d,g,o(g),T)}),d}function Gu(n,a){return n&&pr(a,cn(a),n)}function $h(n,a){return n&&pr(a,In(a),n)}function Ir(n,a,o){a=="__proto__"&&ti?ti(n,a,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[a]=o}function js(n,a){for(var o=-1,d=a.length,g=V(d),b=n==null;++o<d;)g[o]=b?r:yo(n,a[o]);return g}function lt(n,a,o){return n===n&&(o!==r&&(n=n<=o?n:o),a!==r&&(n=n>=a?n:a)),n}function Zn(n,a,o,d,g,b){var T,O=a&p,q=a&y,Y=a&k;if(o&&(T=g?o(n,d,g,b):o(n)),T!==r)return T;if(!Qe(n))return n;var W=ke(n);if(W){if(T=qb(n),!O)return On(n,T)}else{var Q=yn(n),se=Q==Ze||Q==Pn;if(Qr(n))return cd(n,O);if(Q==un||Q==Ye||se&&!g){if(T=q||se?{}:Nd(n),!O)return q?_b(n,$h(T,n)):Ab(n,Gu(T,n))}else{if(!Ue[Q])return g?n:{};T=Mb(n,Q,O)}}b||(b=new ur);var ce=b.get(n);if(ce)return ce;b.set(n,T),lf(n)?n.forEach(function(pe){T.add(Zn(pe,a,o,pe,n,b))}):sf(n)&&n.forEach(function(pe,Re){T.set(Re,Zn(pe,a,o,Re,n,b))});var be=Y?q?ao:to:q?In:cn,Te=W?r:be(n);return Wn(Te||n,function(pe,Re){Te&&(Re=pe,pe=n[Re]),sa(T,Re,Zn(pe,a,o,Re,n,b))}),T}function Kh(n){var a=cn(n);return function(o){return Uu(o,n,a)}}function Uu(n,a,o){var d=o.length;if(n==null)return!d;for(n=Ce(n);d--;){var g=o[d],b=a[g],T=n[g];if(T===r&&!(g in n)||!b(T))return!1}return!0}function $u(n,a,o){if(typeof n!="function")throw new zn(u);return ca(function(){n.apply(r,o)},a)}function oa(n,a,o,d){var g=-1,b=Ka,T=!0,O=n.length,q=[],Y=a.length;if(!O)return q;o&&(a=Je(a,jn(o))),d?(b=Es,T=!1):a.length>=s&&(b=ea,T=!1,a=new ot(a));e:for(;++g<O;){var W=n[g],Q=o==null?W:o(W);if(W=d||W!==0?W:0,T&&Q===Q){for(var se=Y;se--;)if(a[se]===Q)continue e;q.push(W)}else b(a,Q,d)||q.push(W)}return q}var zr=pd(br),Ku=pd(Cs,!0);function Yh(n,a){var o=!0;return zr(n,function(d,g,b){return o=!!a(d,g,b),o}),o}function di(n,a,o){for(var d=-1,g=n.length;++d<g;){var b=n[d],T=a(b);if(T!=null&&(O===r?T===T&&!Cn(T):o(T,O)))var O=T,q=b}return q}function Wh(n,a,o,d){var g=n.length;for(o=_e(o),o<0&&(o=-o>g?0:g+o),d=d===r||d>g?g:_e(d),d<0&&(d+=g),d=o>d?0:df(d);o<d;)n[o++]=a;return n}function Yu(n,a){var o=[];return zr(n,function(d,g,b){a(d,g,b)&&o.push(d)}),o}function vn(n,a,o,d,g){var b=-1,T=n.length;for(o||(o=Fb),g||(g=[]);++b<T;){var O=n[b];a>0&&o(O)?a>1?vn(O,a-1,o,d,g):Kr(g,O):d||(g[g.length]=O)}return g}var Ds=yd(),Wu=yd(!0);function br(n,a){return n&&Ds(n,a,cn)}function Cs(n,a){return n&&Wu(n,a,cn)}function fi(n,a){return $r(a,function(o){return Mr(n[o])})}function ut(n,a){a=Zr(a,n);for(var o=0,d=a.length;n!=null&&o<d;)n=n[yr(a[o++])];return o&&o==d?n:r}function zu(n,a,o){var d=a(n);return ke(n)?d:Kr(d,o(n))}function _n(n){return n==null?n===r?ae:sr:it&&it in Ce(n)?Ib(n):Gb(n)}function Vs(n,a){return n>a}function zh(n,a){return n!=null&&De.call(n,a)}function Xh(n,a){return n!=null&&a in Ce(n)}function Zh(n,a,o){return n>=pn(a,o)&&n<fn(a,o)}function Hs(n,a,o){for(var d=o?Es:Ka,g=n[0].length,b=n.length,T=b,O=V(b),q=1/0,Y=[];T--;){var W=n[T];T&&a&&(W=Je(W,jn(a))),q=pn(W.length,q),O[T]=!o&&(a||g>=120&&W.length>=120)?new ot(T&&W):r}W=n[0];var Q=-1,se=O[0];e:for(;++Q<g&&Y.length<q;){var ce=W[Q],be=a?a(ce):ce;if(ce=o||ce!==0?ce:0,!(se?ea(se,be):d(Y,be,o))){for(T=b;--T;){var Te=O[T];if(!(Te?ea(Te,be):d(n[T],be,o)))continue e}se&&se.push(be),Y.push(ce)}}return Y}function Jh(n,a,o,d){return br(n,function(g,b,T){a(d,o(g),b,T)}),d}function la(n,a,o){a=Zr(a,n),n=Fd(n,a);var d=n==null?n:n[yr(Qn(a))];return d==null?r:Ln(d,n,o)}function Xu(n){return en(n)&&_n(n)==Ye}function Qh(n){return en(n)&&_n(n)==Oe}function eb(n){return en(n)&&_n(n)==Ne}function ua(n,a,o,d,g){return n===a?!0:n==null||a==null||!en(n)&&!en(a)?n!==n&&a!==a:nb(n,a,o,d,ua,g)}function nb(n,a,o,d,g,b){var T=ke(n),O=ke(a),q=T?Ve:yn(n),Y=O?Ve:yn(a);q=q==Ye?un:q,Y=Y==Ye?un:Y;var W=q==un,Q=Y==un,se=q==Y;if(se&&Qr(n)){if(!Qr(a))return!1;T=!0,W=!1}if(se&&!W)return b||(b=new ur),T||jt(n)?Sd(n,a,o,d,g,b):Ob(n,a,q,o,d,g,b);if(!(o&x)){var ce=W&&De.call(n,"__wrapped__"),be=Q&&De.call(a,"__wrapped__");if(ce||be){var Te=ce?n.value():n,pe=be?a.value():a;return b||(b=new ur),g(Te,pe,o,d,b)}}return se?(b||(b=new ur),Sb(n,a,o,d,g,b)):!1}function rb(n){return en(n)&&yn(n)==Ge}function Gs(n,a,o,d){var g=o.length,b=g,T=!d;if(n==null)return!b;for(n=Ce(n);g--;){var O=o[g];if(T&&O[2]?O[1]!==n[O[0]]:!(O[0]in n))return!1}for(;++g<b;){O=o[g];var q=O[0],Y=n[q],W=O[1];if(T&&O[2]){if(Y===r&&!(q in n))return!1}else{var Q=new ur;if(d)var se=d(Y,W,q,n,a,Q);if(!(se===r?ua(W,Y,x|_,d,Q):se))return!1}}return!0}function Zu(n){if(!Qe(n)||jb(n))return!1;var a=Mr(n)?rh:Km;return a.test(ft(n))}function tb(n){return en(n)&&_n(n)==w}function ab(n){return en(n)&&yn(n)==B}function ib(n){return en(n)&&Oi(n.length)&&!!We[_n(n)]}function Ju(n){return typeof n=="function"?n:n==null?xn:typeof n=="object"?ke(n)?nd(n[0],n[1]):ed(n):Af(n)}function Us(n){if(!ga(n))return lh(n);var a=[];for(var o in Ce(n))De.call(n,o)&&o!="constructor"&&a.push(o);return a}function sb(n){if(!Qe(n))return Hb(n);var a=ga(n),o=[];for(var d in n)d=="constructor"&&(a||!De.call(n,d))||o.push(d);return o}function $s(n,a){return n<a}function Qu(n,a){var o=-1,d=Sn(n)?V(n.length):[];return zr(n,function(g,b,T){d[++o]=a(g,b,T)}),d}function ed(n){var a=so(n);return a.length==1&&a[0][2]?Md(a[0][0],a[0][1]):function(o){return o===n||Gs(o,n,a)}}function nd(n,a){return lo(n)&&qd(a)?Md(yr(n),a):function(o){var d=yo(o,n);return d===r&&d===a?ko(o,n):ua(a,d,x|_)}}function gi(n,a,o,d,g){n!==a&&Ds(a,function(b,T){if(g||(g=new ur),Qe(b))ob(n,a,T,o,gi,d,g);else{var O=d?d(fo(n,T),b,T+"",n,a,g):r;O===r&&(O=b),Ls(n,T,O)}},In)}function ob(n,a,o,d,g,b,T){var O=fo(n,o),q=fo(a,o),Y=T.get(q);if(Y){Ls(n,o,Y);return}var W=b?b(O,q,o+"",n,a,T):r,Q=W===r;if(Q){var se=ke(q),ce=!se&&Qr(q),be=!se&&!ce&&jt(q);W=q,se||ce||be?ke(O)?W=O:rn(O)?W=On(O):ce?(Q=!1,W=cd(q,!0)):be?(Q=!1,W=md(q,!0)):W=[]:ma(q)||gt(q)?(W=O,gt(O)?W=ff(O):(!Qe(O)||Mr(O))&&(W=Nd(q))):Q=!1}Q&&(T.set(q,W),g(W,q,d,b,T),T.delete(q)),Ls(n,o,W)}function rd(n,a){var o=n.length;if(o)return a+=a<0?o:0,qr(a,o)?n[a]:r}function td(n,a,o){a.length?a=Je(a,function(b){return ke(b)?function(T){return ut(T,b.length===1?b[0]:b)}:b}):a=[xn];var d=-1;a=Je(a,jn(he()));var g=Qu(n,function(b,T,O){var q=Je(a,function(Y){return Y(b)});return{criteria:q,index:++d,value:b}});return Mv(g,function(b,T){return kb(b,T,o)})}function lb(n,a){return ad(n,a,function(o,d){return ko(n,d)})}function ad(n,a,o){for(var d=-1,g=a.length,b={};++d<g;){var T=a[d],O=ut(n,T);o(O,T)&&da(b,Zr(T,n),O)}return b}function ub(n){return function(a){return ut(a,n)}}function Ks(n,a,o,d){var g=d?qv:Pt,b=-1,T=a.length,O=n;for(n===a&&(a=On(a)),o&&(O=Je(n,jn(o)));++b<T;)for(var q=0,Y=a[b],W=o?o(Y):Y;(q=g(O,W,q,d))>-1;)O!==n&&ri.call(O,q,1),ri.call(n,q,1);return n}function id(n,a){for(var o=n?a.length:0,d=o-1;o--;){var g=a[o];if(o==d||g!==b){var b=g;qr(g)?ri.call(n,g,1):Xs(n,g)}}return n}function Ys(n,a){return n+ii(Du()*(a-n+1))}function db(n,a,o,d){for(var g=-1,b=fn(ai((a-n)/(o||1)),0),T=V(b);b--;)T[d?b:++g]=n,n+=o;return T}function Ws(n,a){var o="";if(!n||a<1||a>z)return o;do a%2&&(o+=n),a=ii(a/2),a&&(n+=n);while(a);return o}function we(n,a){return go(Bd(n,a,xn),n+"")}function fb(n){return Hu(Dt(n))}function gb(n,a){var o=Dt(n);return _i(o,lt(a,0,o.length))}function da(n,a,o,d){if(!Qe(n))return n;a=Zr(a,n);for(var g=-1,b=a.length,T=b-1,O=n;O!=null&&++g<b;){var q=yr(a[g]),Y=o;if(q==="__proto__"||q==="constructor"||q==="prototype")return n;if(g!=T){var W=O[q];Y=d?d(W,q,O):r,Y===r&&(Y=Qe(W)?W:qr(a[g+1])?[]:{})}sa(O,q,Y),O=O[q]}return n}var sd=si?function(n,a){return si.set(n,a),n}:xn,cb=ti?function(n,a){return ti(n,"toString",{configurable:!0,enumerable:!1,value:_o(a),writable:!0})}:xn;function mb(n){return _i(Dt(n))}function Jn(n,a,o){var d=-1,g=n.length;a<0&&(a=-a>g?0:g+a),o=o>g?g:o,o<0&&(o+=g),g=a>o?0:o-a>>>0,a>>>=0;for(var b=V(g);++d<g;)b[d]=n[d+a];return b}function vb(n,a){var o;return zr(n,function(d,g,b){return o=a(d,g,b),!o}),!!o}function ci(n,a,o){var d=0,g=n==null?d:n.length;if(typeof a=="number"&&a===a&&g<=Ae){for(;d<g;){var b=d+g>>>1,T=n[b];T!==null&&!Cn(T)&&(o?T<=a:T<a)?d=b+1:g=b}return g}return zs(n,a,xn,o)}function zs(n,a,o,d){var g=0,b=n==null?0:n.length;if(b===0)return 0;a=o(a);for(var T=a!==a,O=a===null,q=Cn(a),Y=a===r;g<b;){var W=ii((g+b)/2),Q=o(n[W]),se=Q!==r,ce=Q===null,be=Q===Q,Te=Cn(Q);if(T)var pe=d||be;else Y?pe=be&&(d||se):O?pe=be&&se&&(d||!ce):q?pe=be&&se&&!ce&&(d||!Te):ce||Te?pe=!1:pe=d?Q<=a:Q<a;pe?g=W+1:b=W}return pn(b,ve)}function od(n,a){for(var o=-1,d=n.length,g=0,b=[];++o<d;){var T=n[o],O=a?a(T):T;if(!o||!dr(O,q)){var q=O;b[g++]=T===0?0:T}}return b}function ld(n){return typeof n=="number"?n:Cn(n)?de:+n}function Dn(n){if(typeof n=="string")return n;if(ke(n))return Je(n,Dn)+"";if(Cn(n))return Cu?Cu.call(n):"";var a=n+"";return a=="0"&&1/n==-1/0?"-0":a}function Xr(n,a,o){var d=-1,g=Ka,b=n.length,T=!0,O=[],q=O;if(o)T=!1,g=Es;else if(b>=s){var Y=a?null:Rb(n);if(Y)return Wa(Y);T=!1,g=ea,q=new ot}else q=a?[]:O;e:for(;++d<b;){var W=n[d],Q=a?a(W):W;if(W=o||W!==0?W:0,T&&Q===Q){for(var se=q.length;se--;)if(q[se]===Q)continue e;a&&q.push(Q),O.push(W)}else g(q,Q,o)||(q!==O&&q.push(Q),O.push(W))}return O}function Xs(n,a){return a=Zr(a,n),n=Fd(n,a),n==null||delete n[yr(Qn(a))]}function ud(n,a,o,d){return da(n,a,o(ut(n,a)),d)}function mi(n,a,o,d){for(var g=n.length,b=d?g:-1;(d?b--:++b<g)&&a(n[b],b,n););return o?Jn(n,d?0:b,d?b+1:g):Jn(n,d?b+1:0,d?g:b)}function dd(n,a){var o=n;return o instanceof Pe&&(o=o.value()),ws(a,function(d,g){return g.func.apply(g.thisArg,Kr([d],g.args))},o)}function Zs(n,a,o){var d=n.length;if(d<2)return d?Xr(n[0]):[];for(var g=-1,b=V(d);++g<d;)for(var T=n[g],O=-1;++O<d;)O!=g&&(b[g]=oa(b[g]||T,n[O],a,o));return Xr(vn(b,1),a,o)}function fd(n,a,o){for(var d=-1,g=n.length,b=a.length,T={};++d<g;){var O=d<b?a[d]:r;o(T,n[d],O)}return T}function Js(n){return rn(n)?n:[]}function Qs(n){return typeof n=="function"?n:xn}function Zr(n,a){return ke(n)?n:lo(n,a)?[n]:Cd(Fe(n))}var hb=we;function Jr(n,a,o){var d=n.length;return o=o===r?d:o,!a&&o>=d?n:Jn(n,a,o)}var gd=th||function(n){return mn.clearTimeout(n)};function cd(n,a){if(a)return n.slice();var o=n.length,d=Mu?Mu(o):new n.constructor(o);return n.copy(d),d}function eo(n){var a=new n.constructor(n.byteLength);return new ei(a).set(new ei(n)),a}function bb(n,a){var o=a?eo(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}function pb(n){var a=new n.constructor(n.source,Xl.exec(n));return a.lastIndex=n.lastIndex,a}function yb(n){return ia?Ce(ia.call(n)):{}}function md(n,a){var o=a?eo(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}function vd(n,a){if(n!==a){var o=n!==r,d=n===null,g=n===n,b=Cn(n),T=a!==r,O=a===null,q=a===a,Y=Cn(a);if(!O&&!Y&&!b&&n>a||b&&T&&q&&!O&&!Y||d&&T&&q||!o&&q||!g)return 1;if(!d&&!b&&!Y&&n<a||Y&&o&&g&&!d&&!b||O&&o&&g||!T&&g||!q)return-1}return 0}function kb(n,a,o){for(var d=-1,g=n.criteria,b=a.criteria,T=g.length,O=o.length;++d<T;){var q=vd(g[d],b[d]);if(q){if(d>=O)return q;var Y=o[d];return q*(Y=="desc"?-1:1)}}return n.index-a.index}function hd(n,a,o,d){for(var g=-1,b=n.length,T=o.length,O=-1,q=a.length,Y=fn(b-T,0),W=V(q+Y),Q=!d;++O<q;)W[O]=a[O];for(;++g<T;)(Q||g<b)&&(W[o[g]]=n[g]);for(;Y--;)W[O++]=n[g++];return W}function bd(n,a,o,d){for(var g=-1,b=n.length,T=-1,O=o.length,q=-1,Y=a.length,W=fn(b-O,0),Q=V(W+Y),se=!d;++g<W;)Q[g]=n[g];for(var ce=g;++q<Y;)Q[ce+q]=a[q];for(;++T<O;)(se||g<b)&&(Q[ce+o[T]]=n[g++]);return Q}function On(n,a){var o=-1,d=n.length;for(a||(a=V(d));++o<d;)a[o]=n[o];return a}function pr(n,a,o,d){var g=!o;o||(o={});for(var b=-1,T=a.length;++b<T;){var O=a[b],q=d?d(o[O],n[O],O,o,n):r;q===r&&(q=n[O]),g?Ir(o,O,q):sa(o,O,q)}return o}function Ab(n,a){return pr(n,oo(n),a)}function _b(n,a){return pr(n,Id(n),a)}function vi(n,a){return function(o,d){var g=ke(o)?Pv:Uh,b=a?a():{};return g(o,n,he(d,2),b)}}function Bt(n){return we(function(a,o){var d=-1,g=o.length,b=g>1?o[g-1]:r,T=g>2?o[2]:r;for(b=n.length>3&&typeof b=="function"?(g--,b):r,T&&Tn(o[0],o[1],T)&&(b=g<3?r:b,g=1),a=Ce(a);++d<g;){var O=o[d];O&&n(a,O,d,b)}return a})}function pd(n,a){return function(o,d){if(o==null)return o;if(!Sn(o))return n(o,d);for(var g=o.length,b=a?g:-1,T=Ce(o);(a?b--:++b<g)&&d(T[b],b,T)!==!1;);return o}}function yd(n){return function(a,o,d){for(var g=-1,b=Ce(a),T=d(a),O=T.length;O--;){var q=T[n?O:++g];if(o(b[q],q,b)===!1)break}return a}}function Tb(n,a,o){var d=a&A,g=fa(n);function b(){var T=this&&this!==mn&&this instanceof b?g:n;return T.apply(d?o:this,arguments)}return b}function kd(n){return function(a){a=Fe(a);var o=Ot(a)?lr(a):r,d=o?o[0]:a.charAt(0),g=o?Jr(o,1).join(""):a.slice(1);return d[n]()+g}}function Ft(n){return function(a){return ws(yf(pf(a).replace(cv,"")),n,"")}}function fa(n){return function(){var a=arguments;switch(a.length){case 0:return new n;case 1:return new n(a[0]);case 2:return new n(a[0],a[1]);case 3:return new n(a[0],a[1],a[2]);case 4:return new n(a[0],a[1],a[2],a[3]);case 5:return new n(a[0],a[1],a[2],a[3],a[4]);case 6:return new n(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new n(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var o=Mt(n.prototype),d=n.apply(o,a);return Qe(d)?d:o}}function Eb(n,a,o){var d=fa(n);function g(){for(var b=arguments.length,T=V(b),O=b,q=Lt(g);O--;)T[O]=arguments[O];var Y=b<3&&T[0]!==q&&T[b-1]!==q?[]:Yr(T,q);if(b-=Y.length,b<o)return wd(n,a,hi,g.placeholder,r,T,Y,r,r,o-b);var W=this&&this!==mn&&this instanceof g?d:n;return Ln(W,this,T)}return g}function Ad(n){return function(a,o,d){var g=Ce(a);if(!Sn(a)){var b=he(o,3);a=cn(a),o=function(O){return b(g[O],O,g)}}var T=n(a,o,d);return T>-1?g[b?a[T]:T]:r}}function _d(n){return Nr(function(a){var o=a.length,d=o,g=Xn.prototype.thru;for(n&&a.reverse();d--;){var b=a[d];if(typeof b!="function")throw new zn(u);if(g&&!T&&ki(b)=="wrapper")var T=new Xn([],!0)}for(d=T?d:o;++d<o;){b=a[d];var O=ki(b),q=O=="wrapper"?io(b):r;q&&uo(q[0])&&q[1]==(j|P|I|C)&&!q[4].length&&q[9]==1?T=T[ki(q[0])].apply(T,q[3]):T=b.length==1&&uo(b)?T[O]():T.thru(b)}return function(){var Y=arguments,W=Y[0];if(T&&Y.length==1&&ke(W))return T.plant(W).value();for(var Q=0,se=o?a[Q].apply(this,Y):W;++Q<o;)se=a[Q].call(this,se);return se}})}function hi(n,a,o,d,g,b,T,O,q,Y){var W=a&j,Q=a&A,se=a&R,ce=a&(P|D),be=a&K,Te=se?r:fa(n);function pe(){for(var Re=arguments.length,Se=V(Re),Vn=Re;Vn--;)Se[Vn]=arguments[Vn];if(ce)var En=Lt(pe),Hn=Fv(Se,En);if(d&&(Se=hd(Se,d,g,ce)),b&&(Se=bd(Se,b,T,ce)),Re-=Hn,ce&&Re<Y){var tn=Yr(Se,En);return wd(n,a,hi,pe.placeholder,o,Se,tn,O,q,Y-Re)}var fr=Q?o:this,Fr=se?fr[n]:n;return Re=Se.length,O?Se=Ub(Se,O):be&&Re>1&&Se.reverse(),W&&q<Re&&(Se.length=q),this&&this!==mn&&this instanceof pe&&(Fr=Te||fa(Fr)),Fr.apply(fr,Se)}return pe}function Td(n,a){return function(o,d){return Jh(o,n,a(d),{})}}function bi(n,a){return function(o,d){var g;if(o===r&&d===r)return a;if(o!==r&&(g=o),d!==r){if(g===r)return d;typeof o=="string"||typeof d=="string"?(o=Dn(o),d=Dn(d)):(o=ld(o),d=ld(d)),g=n(o,d)}return g}}function no(n){return Nr(function(a){return a=Je(a,jn(he())),we(function(o){var d=this;return n(a,function(g){return Ln(g,d,o)})})})}function pi(n,a){a=a===r?" ":Dn(a);var o=a.length;if(o<2)return o?Ws(a,n):a;var d=Ws(a,ai(n/St(a)));return Ot(a)?Jr(lr(d),0,n).join(""):d.slice(0,n)}function wb(n,a,o,d){var g=a&A,b=fa(n);function T(){for(var O=-1,q=arguments.length,Y=-1,W=d.length,Q=V(W+q),se=this&&this!==mn&&this instanceof T?b:n;++Y<W;)Q[Y]=d[Y];for(;q--;)Q[Y++]=arguments[++O];return Ln(se,g?o:this,Q)}return T}function Ed(n){return function(a,o,d){return d&&typeof d!="number"&&Tn(a,o,d)&&(o=d=r),a=Br(a),o===r?(o=a,a=0):o=Br(o),d=d===r?a<o?1:-1:Br(d),db(a,o,d,n)}}function yi(n){return function(a,o){return typeof a=="string"&&typeof o=="string"||(a=er(a),o=er(o)),n(a,o)}}function wd(n,a,o,d,g,b,T,O,q,Y){var W=a&P,Q=W?T:r,se=W?r:T,ce=W?b:r,be=W?r:b;a|=W?I:H,a&=~(W?H:I),a&S||(a&=-4);var Te=[n,a,g,ce,Q,be,se,O,q,Y],pe=o.apply(r,Te);return uo(n)&&Ld(pe,Te),pe.placeholder=d,jd(pe,n,a)}function ro(n){var a=dn[n];return function(o,d){if(o=er(o),d=d==null?0:pn(_e(d),292),d&&ju(o)){var g=(Fe(o)+"e").split("e"),b=a(g[0]+"e"+(+g[1]+d));return g=(Fe(b)+"e").split("e"),+(g[0]+"e"+(+g[1]-d))}return a(o)}}var Rb=Nt&&1/Wa(new Nt([,-0]))[1]==J?function(n){return new Nt(n)}:wo;function Rd(n){return function(a){var o=yn(a);return o==Ge?Ns(a):o==B?Gv(a):Bv(a,n(a))}}function xr(n,a,o,d,g,b,T,O){var q=a&R;if(!q&&typeof n!="function")throw new zn(u);var Y=d?d.length:0;if(Y||(a&=-97,d=g=r),T=T===r?T:fn(_e(T),0),O=O===r?O:_e(O),Y-=g?g.length:0,a&H){var W=d,Q=g;d=g=r}var se=q?r:io(n),ce=[n,a,o,d,g,W,Q,b,T,O];if(se&&Vb(ce,se),n=ce[0],a=ce[1],o=ce[2],d=ce[3],g=ce[4],O=ce[9]=ce[9]===r?q?0:n.length:fn(ce[9]-Y,0),!O&&a&(P|D)&&(a&=-25),!a||a==A)var be=Tb(n,a,o);else a==P||a==D?be=Eb(n,a,O):(a==I||a==(A|I))&&!g.length?be=wb(n,a,o,d):be=hi.apply(r,ce);var Te=se?sd:Ld;return jd(Te(be,ce),n,a)}function Pd(n,a,o,d){return n===r||dr(n,xt[o])&&!De.call(d,o)?a:n}function Od(n,a,o,d,g,b){return Qe(n)&&Qe(a)&&(b.set(a,n),gi(n,a,r,Od,b),b.delete(a)),n}function Pb(n){return ma(n)?r:n}function Sd(n,a,o,d,g,b){var T=o&x,O=n.length,q=a.length;if(O!=q&&!(T&&q>O))return!1;var Y=b.get(n),W=b.get(a);if(Y&&W)return Y==a&&W==n;var Q=-1,se=!0,ce=o&_?new ot:r;for(b.set(n,a),b.set(a,n);++Q<O;){var be=n[Q],Te=a[Q];if(d)var pe=T?d(Te,be,Q,a,n,b):d(be,Te,Q,n,a,b);if(pe!==r){if(pe)continue;se=!1;break}if(ce){if(!Rs(a,function(Re,Se){if(!ea(ce,Se)&&(be===Re||g(be,Re,o,d,b)))return ce.push(Se)})){se=!1;break}}else if(!(be===Te||g(be,Te,o,d,b))){se=!1;break}}return b.delete(n),b.delete(a),se}function Ob(n,a,o,d,g,b,T){switch(o){case Me:if(n.byteLength!=a.byteLength||n.byteOffset!=a.byteOffset)return!1;n=n.buffer,a=a.buffer;case Oe:return!(n.byteLength!=a.byteLength||!b(new ei(n),new ei(a)));case Ee:case Ne:case on:return dr(+n,+a);case Xe:return n.name==a.name&&n.message==a.message;case w:case U:return n==a+"";case Ge:var O=Ns;case B:var q=d&x;if(O||(O=Wa),n.size!=a.size&&!q)return!1;var Y=T.get(n);if(Y)return Y==a;d|=_,T.set(n,a);var W=Sd(O(n),O(a),d,g,b,T);return T.delete(n),W;case oe:if(ia)return ia.call(n)==ia.call(a)}return!1}function Sb(n,a,o,d,g,b){var T=o&x,O=to(n),q=O.length,Y=to(a),W=Y.length;if(q!=W&&!T)return!1;for(var Q=q;Q--;){var se=O[Q];if(!(T?se in a:De.call(a,se)))return!1}var ce=b.get(n),be=b.get(a);if(ce&&be)return ce==a&&be==n;var Te=!0;b.set(n,a),b.set(a,n);for(var pe=T;++Q<q;){se=O[Q];var Re=n[se],Se=a[se];if(d)var Vn=T?d(Se,Re,se,a,n,b):d(Re,Se,se,n,a,b);if(!(Vn===r?Re===Se||g(Re,Se,o,d,b):Vn)){Te=!1;break}pe||(pe=se=="constructor")}if(Te&&!pe){var En=n.constructor,Hn=a.constructor;En!=Hn&&"constructor"in n&&"constructor"in a&&!(typeof En=="function"&&En instanceof En&&typeof Hn=="function"&&Hn instanceof Hn)&&(Te=!1)}return b.delete(n),b.delete(a),Te}function Nr(n){return go(Bd(n,r,Ud),n+"")}function to(n){return zu(n,cn,oo)}function ao(n){return zu(n,In,Id)}var io=si?function(n){return si.get(n)}:wo;function ki(n){for(var a=n.name+"",o=qt[a],d=De.call(qt,a)?o.length:0;d--;){var g=o[d],b=g.func;if(b==null||b==n)return g.name}return a}function Lt(n){var a=De.call(h,"placeholder")?h:n;return a.placeholder}function he(){var n=h.iteratee||To;return n=n===To?Ju:n,arguments.length?n(arguments[0],arguments[1]):n}function Ai(n,a){var o=n.__data__;return Lb(a)?o[typeof a=="string"?"string":"hash"]:o.map}function so(n){for(var a=cn(n),o=a.length;o--;){var d=a[o],g=n[d];a[o]=[d,g,qd(g)]}return a}function dt(n,a){var o=Cv(n,a);return Zu(o)?o:r}function Ib(n){var a=De.call(n,it),o=n[it];try{n[it]=r;var d=!0}catch{}var g=Ja.call(n);return d&&(a?n[it]=o:delete n[it]),g}var oo=Ms?function(n){return n==null?[]:(n=Ce(n),$r(Ms(n),function(a){return Fu.call(n,a)}))}:Ro,Id=Ms?function(n){for(var a=[];n;)Kr(a,oo(n)),n=ni(n);return a}:Ro,yn=_n;(Bs&&yn(new Bs(new ArrayBuffer(1)))!=Me||ra&&yn(new ra)!=Ge||Fs&&yn(Fs.resolve())!=or||Nt&&yn(new Nt)!=B||ta&&yn(new ta)!=te)&&(yn=function(n){var a=_n(n),o=a==un?n.constructor:r,d=o?ft(o):"";if(d)switch(d){case gh:return Me;case ch:return Ge;case mh:return or;case vh:return B;case hh:return te}return a});function xb(n,a,o){for(var d=-1,g=o.length;++d<g;){var b=o[d],T=b.size;switch(b.type){case"drop":n+=T;break;case"dropRight":a-=T;break;case"take":a=pn(a,n+T);break;case"takeRight":n=fn(n,a-T);break}}return{start:n,end:a}}function Nb(n){var a=n.match(jm);return a?a[1].split(Dm):[]}function xd(n,a,o){a=Zr(a,n);for(var d=-1,g=a.length,b=!1;++d<g;){var T=yr(a[d]);if(!(b=n!=null&&o(n,T)))break;n=n[T]}return b||++d!=g?b:(g=n==null?0:n.length,!!g&&Oi(g)&&qr(T,g)&&(ke(n)||gt(n)))}function qb(n){var a=n.length,o=new n.constructor(a);return a&&typeof n[0]=="string"&&De.call(n,"index")&&(o.index=n.index,o.input=n.input),o}function Nd(n){return typeof n.constructor=="function"&&!ga(n)?Mt(ni(n)):{}}function Mb(n,a,o){var d=n.constructor;switch(a){case Oe:return eo(n);case Ee:case Ne:return new d(+n);case Me:return bb(n,o);case bn:case Ur:case Kn:case Zt:case rt:case tt:case Jt:case wt:case Qt:return md(n,o);case Ge:return new d;case on:case U:return new d(n);case w:return pb(n);case B:return new d;case oe:return yb(n)}}function Bb(n,a){var o=a.length;if(!o)return n;var d=o-1;return a[d]=(o>1?"& ":"")+a[d],a=a.join(o>2?", ":" "),n.replace(Lm,`{
/* [wrapped with `+a+`] */
`)}function Fb(n){return ke(n)||gt(n)||!!(Lu&&n&&n[Lu])}function qr(n,a){var o=typeof n;return a=a??z,!!a&&(o=="number"||o!="symbol"&&Wm.test(n))&&n>-1&&n%1==0&&n<a}function Tn(n,a,o){if(!Qe(o))return!1;var d=typeof a;return(d=="number"?Sn(o)&&qr(a,o.length):d=="string"&&a in o)?dr(o[a],n):!1}function lo(n,a){if(ke(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||Cn(n)?!0:qm.test(n)||!Nm.test(n)||a!=null&&n in Ce(a)}function Lb(n){var a=typeof n;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?n!=="__proto__":n===null}function uo(n){var a=ki(n),o=h[a];if(typeof o!="function"||!(a in Pe.prototype))return!1;if(n===o)return!0;var d=io(o);return!!d&&n===d[0]}function jb(n){return!!qu&&qu in n}var Db=Xa?Mr:Po;function ga(n){var a=n&&n.constructor,o=typeof a=="function"&&a.prototype||xt;return n===o}function qd(n){return n===n&&!Qe(n)}function Md(n,a){return function(o){return o==null?!1:o[n]===a&&(a!==r||n in Ce(o))}}function Cb(n){var a=Ri(n,function(d){return o.size===v&&o.clear(),d}),o=a.cache;return a}function Vb(n,a){var o=n[1],d=a[1],g=o|d,b=g<(A|R|j),T=d==j&&o==P||d==j&&o==C&&n[7].length<=a[8]||d==(j|C)&&a[7].length<=a[8]&&o==P;if(!(b||T))return n;d&A&&(n[2]=a[2],g|=o&A?0:S);var O=a[3];if(O){var q=n[3];n[3]=q?hd(q,O,a[4]):O,n[4]=q?Yr(n[3],m):a[4]}return O=a[5],O&&(q=n[5],n[5]=q?bd(q,O,a[6]):O,n[6]=q?Yr(n[5],m):a[6]),O=a[7],O&&(n[7]=O),d&j&&(n[8]=n[8]==null?a[8]:pn(n[8],a[8])),n[9]==null&&(n[9]=a[9]),n[0]=a[0],n[1]=g,n}function Hb(n){var a=[];if(n!=null)for(var o in Ce(n))a.push(o);return a}function Gb(n){return Ja.call(n)}function Bd(n,a,o){return a=fn(a===r?n.length-1:a,0),function(){for(var d=arguments,g=-1,b=fn(d.length-a,0),T=V(b);++g<b;)T[g]=d[a+g];g=-1;for(var O=V(a+1);++g<a;)O[g]=d[g];return O[a]=o(T),Ln(n,this,O)}}function Fd(n,a){return a.length<2?n:ut(n,Jn(a,0,-1))}function Ub(n,a){for(var o=n.length,d=pn(a.length,o),g=On(n);d--;){var b=a[d];n[d]=qr(b,o)?g[b]:r}return n}function fo(n,a){if(!(a==="constructor"&&typeof n[a]=="function")&&a!="__proto__")return n[a]}var Ld=Dd(sd),ca=ih||function(n,a){return mn.setTimeout(n,a)},go=Dd(cb);function jd(n,a,o){var d=a+"";return go(n,Bb(d,$b(Nb(d),o)))}function Dd(n){var a=0,o=0;return function(){var d=uh(),g=F-(d-o);if(o=d,g>0){if(++a>=G)return arguments[0]}else a=0;return n.apply(r,arguments)}}function _i(n,a){var o=-1,d=n.length,g=d-1;for(a=a===r?d:a;++o<a;){var b=Ys(o,g),T=n[b];n[b]=n[o],n[o]=T}return n.length=a,n}var Cd=Cb(function(n){var a=[];return n.charCodeAt(0)===46&&a.push(""),n.replace(Mm,function(o,d,g,b){a.push(g?b.replace(Hm,"$1"):d||o)}),a});function yr(n){if(typeof n=="string"||Cn(n))return n;var a=n+"";return a=="0"&&1/n==-1/0?"-0":a}function ft(n){if(n!=null){try{return Za.call(n)}catch{}try{return n+""}catch{}}return""}function $b(n,a){return Wn(An,function(o){var d="_."+o[0];a&o[1]&&!Ka(n,d)&&n.push(d)}),n.sort()}function Vd(n){if(n instanceof Pe)return n.clone();var a=new Xn(n.__wrapped__,n.__chain__);return a.__actions__=On(n.__actions__),a.__index__=n.__index__,a.__values__=n.__values__,a}function Kb(n,a,o){(o?Tn(n,a,o):a===r)?a=1:a=fn(_e(a),0);var d=n==null?0:n.length;if(!d||a<1)return[];for(var g=0,b=0,T=V(ai(d/a));g<d;)T[b++]=Jn(n,g,g+=a);return T}function Yb(n){for(var a=-1,o=n==null?0:n.length,d=0,g=[];++a<o;){var b=n[a];b&&(g[d++]=b)}return g}function Wb(){var n=arguments.length;if(!n)return[];for(var a=V(n-1),o=arguments[0],d=n;d--;)a[d-1]=arguments[d];return Kr(ke(o)?On(o):[o],vn(a,1))}var zb=we(function(n,a){return rn(n)?oa(n,vn(a,1,rn,!0)):[]}),Xb=we(function(n,a){var o=Qn(a);return rn(o)&&(o=r),rn(n)?oa(n,vn(a,1,rn,!0),he(o,2)):[]}),Zb=we(function(n,a){var o=Qn(a);return rn(o)&&(o=r),rn(n)?oa(n,vn(a,1,rn,!0),r,o):[]});function Jb(n,a,o){var d=n==null?0:n.length;return d?(a=o||a===r?1:_e(a),Jn(n,a<0?0:a,d)):[]}function Qb(n,a,o){var d=n==null?0:n.length;return d?(a=o||a===r?1:_e(a),a=d-a,Jn(n,0,a<0?0:a)):[]}function ep(n,a){return n&&n.length?mi(n,he(a,3),!0,!0):[]}function np(n,a){return n&&n.length?mi(n,he(a,3),!0):[]}function rp(n,a,o,d){var g=n==null?0:n.length;return g?(o&&typeof o!="number"&&Tn(n,a,o)&&(o=0,d=g),Wh(n,a,o,d)):[]}function Hd(n,a,o){var d=n==null?0:n.length;if(!d)return-1;var g=o==null?0:_e(o);return g<0&&(g=fn(d+g,0)),Ya(n,he(a,3),g)}function Gd(n,a,o){var d=n==null?0:n.length;if(!d)return-1;var g=d-1;return o!==r&&(g=_e(o),g=o<0?fn(d+g,0):pn(g,d-1)),Ya(n,he(a,3),g,!0)}function Ud(n){var a=n==null?0:n.length;return a?vn(n,1):[]}function tp(n){var a=n==null?0:n.length;return a?vn(n,J):[]}function ap(n,a){var o=n==null?0:n.length;return o?(a=a===r?1:_e(a),vn(n,a)):[]}function ip(n){for(var a=-1,o=n==null?0:n.length,d={};++a<o;){var g=n[a];d[g[0]]=g[1]}return d}function $d(n){return n&&n.length?n[0]:r}function sp(n,a,o){var d=n==null?0:n.length;if(!d)return-1;var g=o==null?0:_e(o);return g<0&&(g=fn(d+g,0)),Pt(n,a,g)}function op(n){var a=n==null?0:n.length;return a?Jn(n,0,-1):[]}var lp=we(function(n){var a=Je(n,Js);return a.length&&a[0]===n[0]?Hs(a):[]}),up=we(function(n){var a=Qn(n),o=Je(n,Js);return a===Qn(o)?a=r:o.pop(),o.length&&o[0]===n[0]?Hs(o,he(a,2)):[]}),dp=we(function(n){var a=Qn(n),o=Je(n,Js);return a=typeof a=="function"?a:r,a&&o.pop(),o.length&&o[0]===n[0]?Hs(o,r,a):[]});function fp(n,a){return n==null?"":oh.call(n,a)}function Qn(n){var a=n==null?0:n.length;return a?n[a-1]:r}function gp(n,a,o){var d=n==null?0:n.length;if(!d)return-1;var g=d;return o!==r&&(g=_e(o),g=g<0?fn(d+g,0):pn(g,d-1)),a===a?$v(n,a,g):Ya(n,wu,g,!0)}function cp(n,a){return n&&n.length?rd(n,_e(a)):r}var mp=we(Kd);function Kd(n,a){return n&&n.length&&a&&a.length?Ks(n,a):n}function vp(n,a,o){return n&&n.length&&a&&a.length?Ks(n,a,he(o,2)):n}function hp(n,a,o){return n&&n.length&&a&&a.length?Ks(n,a,r,o):n}var bp=Nr(function(n,a){var o=n==null?0:n.length,d=js(n,a);return id(n,Je(a,function(g){return qr(g,o)?+g:g}).sort(vd)),d});function pp(n,a){var o=[];if(!(n&&n.length))return o;var d=-1,g=[],b=n.length;for(a=he(a,3);++d<b;){var T=n[d];a(T,d,n)&&(o.push(T),g.push(d))}return id(n,g),o}function co(n){return n==null?n:fh.call(n)}function yp(n,a,o){var d=n==null?0:n.length;return d?(o&&typeof o!="number"&&Tn(n,a,o)?(a=0,o=d):(a=a==null?0:_e(a),o=o===r?d:_e(o)),Jn(n,a,o)):[]}function kp(n,a){return ci(n,a)}function Ap(n,a,o){return zs(n,a,he(o,2))}function _p(n,a){var o=n==null?0:n.length;if(o){var d=ci(n,a);if(d<o&&dr(n[d],a))return d}return-1}function Tp(n,a){return ci(n,a,!0)}function Ep(n,a,o){return zs(n,a,he(o,2),!0)}function wp(n,a){var o=n==null?0:n.length;if(o){var d=ci(n,a,!0)-1;if(dr(n[d],a))return d}return-1}function Rp(n){return n&&n.length?od(n):[]}function Pp(n,a){return n&&n.length?od(n,he(a,2)):[]}function Op(n){var a=n==null?0:n.length;return a?Jn(n,1,a):[]}function Sp(n,a,o){return n&&n.length?(a=o||a===r?1:_e(a),Jn(n,0,a<0?0:a)):[]}function Ip(n,a,o){var d=n==null?0:n.length;return d?(a=o||a===r?1:_e(a),a=d-a,Jn(n,a<0?0:a,d)):[]}function xp(n,a){return n&&n.length?mi(n,he(a,3),!1,!0):[]}function Np(n,a){return n&&n.length?mi(n,he(a,3)):[]}var qp=we(function(n){return Xr(vn(n,1,rn,!0))}),Mp=we(function(n){var a=Qn(n);return rn(a)&&(a=r),Xr(vn(n,1,rn,!0),he(a,2))}),Bp=we(function(n){var a=Qn(n);return a=typeof a=="function"?a:r,Xr(vn(n,1,rn,!0),r,a)});function Fp(n){return n&&n.length?Xr(n):[]}function Lp(n,a){return n&&n.length?Xr(n,he(a,2)):[]}function jp(n,a){return a=typeof a=="function"?a:r,n&&n.length?Xr(n,r,a):[]}function mo(n){if(!(n&&n.length))return[];var a=0;return n=$r(n,function(o){if(rn(o))return a=fn(o.length,a),!0}),Is(a,function(o){return Je(n,Ps(o))})}function Yd(n,a){if(!(n&&n.length))return[];var o=mo(n);return a==null?o:Je(o,function(d){return Ln(a,r,d)})}var Dp=we(function(n,a){return rn(n)?oa(n,a):[]}),Cp=we(function(n){return Zs($r(n,rn))}),Vp=we(function(n){var a=Qn(n);return rn(a)&&(a=r),Zs($r(n,rn),he(a,2))}),Hp=we(function(n){var a=Qn(n);return a=typeof a=="function"?a:r,Zs($r(n,rn),r,a)}),Gp=we(mo);function Up(n,a){return fd(n||[],a||[],sa)}function $p(n,a){return fd(n||[],a||[],da)}var Kp=we(function(n){var a=n.length,o=a>1?n[a-1]:r;return o=typeof o=="function"?(n.pop(),o):r,Yd(n,o)});function Wd(n){var a=h(n);return a.__chain__=!0,a}function Yp(n,a){return a(n),n}function Ti(n,a){return a(n)}var Wp=Nr(function(n){var a=n.length,o=a?n[0]:0,d=this.__wrapped__,g=function(b){return js(b,n)};return a>1||this.__actions__.length||!(d instanceof Pe)||!qr(o)?this.thru(g):(d=d.slice(o,+o+(a?1:0)),d.__actions__.push({func:Ti,args:[g],thisArg:r}),new Xn(d,this.__chain__).thru(function(b){return a&&!b.length&&b.push(r),b}))});function zp(){return Wd(this)}function Xp(){return new Xn(this.value(),this.__chain__)}function Zp(){this.__values__===r&&(this.__values__=uf(this.value()));var n=this.__index__>=this.__values__.length,a=n?r:this.__values__[this.__index__++];return{done:n,value:a}}function Jp(){return this}function Qp(n){for(var a,o=this;o instanceof li;){var d=Vd(o);d.__index__=0,d.__values__=r,a?g.__wrapped__=d:a=d;var g=d;o=o.__wrapped__}return g.__wrapped__=n,a}function ey(){var n=this.__wrapped__;if(n instanceof Pe){var a=n;return this.__actions__.length&&(a=new Pe(this)),a=a.reverse(),a.__actions__.push({func:Ti,args:[co],thisArg:r}),new Xn(a,this.__chain__)}return this.thru(co)}function ny(){return dd(this.__wrapped__,this.__actions__)}var ry=vi(function(n,a,o){De.call(n,o)?++n[o]:Ir(n,o,1)});function ty(n,a,o){var d=ke(n)?Tu:Yh;return o&&Tn(n,a,o)&&(a=r),d(n,he(a,3))}function ay(n,a){var o=ke(n)?$r:Yu;return o(n,he(a,3))}var iy=Ad(Hd),sy=Ad(Gd);function oy(n,a){return vn(Ei(n,a),1)}function ly(n,a){return vn(Ei(n,a),J)}function uy(n,a,o){return o=o===r?1:_e(o),vn(Ei(n,a),o)}function zd(n,a){var o=ke(n)?Wn:zr;return o(n,he(a,3))}function Xd(n,a){var o=ke(n)?Ov:Ku;return o(n,he(a,3))}var dy=vi(function(n,a,o){De.call(n,o)?n[o].push(a):Ir(n,o,[a])});function fy(n,a,o,d){n=Sn(n)?n:Dt(n),o=o&&!d?_e(o):0;var g=n.length;return o<0&&(o=fn(g+o,0)),Si(n)?o<=g&&n.indexOf(a,o)>-1:!!g&&Pt(n,a,o)>-1}var gy=we(function(n,a,o){var d=-1,g=typeof a=="function",b=Sn(n)?V(n.length):[];return zr(n,function(T){b[++d]=g?Ln(a,T,o):la(T,a,o)}),b}),cy=vi(function(n,a,o){Ir(n,o,a)});function Ei(n,a){var o=ke(n)?Je:Qu;return o(n,he(a,3))}function my(n,a,o,d){return n==null?[]:(ke(a)||(a=a==null?[]:[a]),o=d?r:o,ke(o)||(o=o==null?[]:[o]),td(n,a,o))}var vy=vi(function(n,a,o){n[o?0:1].push(a)},function(){return[[],[]]});function hy(n,a,o){var d=ke(n)?ws:Pu,g=arguments.length<3;return d(n,he(a,4),o,g,zr)}function by(n,a,o){var d=ke(n)?Sv:Pu,g=arguments.length<3;return d(n,he(a,4),o,g,Ku)}function py(n,a){var o=ke(n)?$r:Yu;return o(n,Pi(he(a,3)))}function yy(n){var a=ke(n)?Hu:fb;return a(n)}function ky(n,a,o){(o?Tn(n,a,o):a===r)?a=1:a=_e(a);var d=ke(n)?Hh:gb;return d(n,a)}function Ay(n){var a=ke(n)?Gh:mb;return a(n)}function _y(n){if(n==null)return 0;if(Sn(n))return Si(n)?St(n):n.length;var a=yn(n);return a==Ge||a==B?n.size:Us(n).length}function Ty(n,a,o){var d=ke(n)?Rs:vb;return o&&Tn(n,a,o)&&(a=r),d(n,he(a,3))}var Ey=we(function(n,a){if(n==null)return[];var o=a.length;return o>1&&Tn(n,a[0],a[1])?a=[]:o>2&&Tn(a[0],a[1],a[2])&&(a=[a[0]]),td(n,vn(a,1),[])}),wi=ah||function(){return mn.Date.now()};function wy(n,a){if(typeof a!="function")throw new zn(u);return n=_e(n),function(){if(--n<1)return a.apply(this,arguments)}}function Zd(n,a,o){return a=o?r:a,a=n&&a==null?n.length:a,xr(n,j,r,r,r,r,a)}function Jd(n,a){var o;if(typeof a!="function")throw new zn(u);return n=_e(n),function(){return--n>0&&(o=a.apply(this,arguments)),n<=1&&(a=r),o}}var vo=we(function(n,a,o){var d=A;if(o.length){var g=Yr(o,Lt(vo));d|=I}return xr(n,d,a,o,g)}),Qd=we(function(n,a,o){var d=A|R;if(o.length){var g=Yr(o,Lt(Qd));d|=I}return xr(a,d,n,o,g)});function ef(n,a,o){a=o?r:a;var d=xr(n,P,r,r,r,r,r,a);return d.placeholder=ef.placeholder,d}function nf(n,a,o){a=o?r:a;var d=xr(n,D,r,r,r,r,r,a);return d.placeholder=nf.placeholder,d}function rf(n,a,o){var d,g,b,T,O,q,Y=0,W=!1,Q=!1,se=!0;if(typeof n!="function")throw new zn(u);a=er(a)||0,Qe(o)&&(W=!!o.leading,Q="maxWait"in o,b=Q?fn(er(o.maxWait)||0,a):b,se="trailing"in o?!!o.trailing:se);function ce(tn){var fr=d,Fr=g;return d=g=r,Y=tn,T=n.apply(Fr,fr),T}function be(tn){return Y=tn,O=ca(Re,a),W?ce(tn):T}function Te(tn){var fr=tn-q,Fr=tn-Y,_f=a-fr;return Q?pn(_f,b-Fr):_f}function pe(tn){var fr=tn-q,Fr=tn-Y;return q===r||fr>=a||fr<0||Q&&Fr>=b}function Re(){var tn=wi();if(pe(tn))return Se(tn);O=ca(Re,Te(tn))}function Se(tn){return O=r,se&&d?ce(tn):(d=g=r,T)}function Vn(){O!==r&&gd(O),Y=0,d=q=g=O=r}function En(){return O===r?T:Se(wi())}function Hn(){var tn=wi(),fr=pe(tn);if(d=arguments,g=this,q=tn,fr){if(O===r)return be(q);if(Q)return gd(O),O=ca(Re,a),ce(q)}return O===r&&(O=ca(Re,a)),T}return Hn.cancel=Vn,Hn.flush=En,Hn}var Ry=we(function(n,a){return $u(n,1,a)}),Py=we(function(n,a,o){return $u(n,er(a)||0,o)});function Oy(n){return xr(n,K)}function Ri(n,a){if(typeof n!="function"||a!=null&&typeof a!="function")throw new zn(u);var o=function(){var d=arguments,g=a?a.apply(this,d):d[0],b=o.cache;if(b.has(g))return b.get(g);var T=n.apply(this,d);return o.cache=b.set(g,T)||b,T};return o.cache=new(Ri.Cache||Sr),o}Ri.Cache=Sr;function Pi(n){if(typeof n!="function")throw new zn(u);return function(){var a=arguments;switch(a.length){case 0:return!n.call(this);case 1:return!n.call(this,a[0]);case 2:return!n.call(this,a[0],a[1]);case 3:return!n.call(this,a[0],a[1],a[2])}return!n.apply(this,a)}}function Sy(n){return Jd(2,n)}var Iy=hb(function(n,a){a=a.length==1&&ke(a[0])?Je(a[0],jn(he())):Je(vn(a,1),jn(he()));var o=a.length;return we(function(d){for(var g=-1,b=pn(d.length,o);++g<b;)d[g]=a[g].call(this,d[g]);return Ln(n,this,d)})}),ho=we(function(n,a){var o=Yr(a,Lt(ho));return xr(n,I,r,a,o)}),tf=we(function(n,a){var o=Yr(a,Lt(tf));return xr(n,H,r,a,o)}),xy=Nr(function(n,a){return xr(n,C,r,r,r,a)});function Ny(n,a){if(typeof n!="function")throw new zn(u);return a=a===r?a:_e(a),we(n,a)}function qy(n,a){if(typeof n!="function")throw new zn(u);return a=a==null?0:fn(_e(a),0),we(function(o){var d=o[a],g=Jr(o,0,a);return d&&Kr(g,d),Ln(n,this,g)})}function My(n,a,o){var d=!0,g=!0;if(typeof n!="function")throw new zn(u);return Qe(o)&&(d="leading"in o?!!o.leading:d,g="trailing"in o?!!o.trailing:g),rf(n,a,{leading:d,maxWait:a,trailing:g})}function By(n){return Zd(n,1)}function Fy(n,a){return ho(Qs(a),n)}function Ly(){if(!arguments.length)return[];var n=arguments[0];return ke(n)?n:[n]}function jy(n){return Zn(n,k)}function Dy(n,a){return a=typeof a=="function"?a:r,Zn(n,k,a)}function Cy(n){return Zn(n,p|k)}function Vy(n,a){return a=typeof a=="function"?a:r,Zn(n,p|k,a)}function Hy(n,a){return a==null||Uu(n,a,cn(a))}function dr(n,a){return n===a||n!==n&&a!==a}var Gy=yi(Vs),Uy=yi(function(n,a){return n>=a}),gt=Xu(function(){return arguments}())?Xu:function(n){return en(n)&&De.call(n,"callee")&&!Fu.call(n,"callee")},ke=V.isArray,$y=bu?jn(bu):Qh;function Sn(n){return n!=null&&Oi(n.length)&&!Mr(n)}function rn(n){return en(n)&&Sn(n)}function Ky(n){return n===!0||n===!1||en(n)&&_n(n)==Ee}var Qr=sh||Po,Yy=pu?jn(pu):eb;function Wy(n){return en(n)&&n.nodeType===1&&!ma(n)}function zy(n){if(n==null)return!0;if(Sn(n)&&(ke(n)||typeof n=="string"||typeof n.splice=="function"||Qr(n)||jt(n)||gt(n)))return!n.length;var a=yn(n);if(a==Ge||a==B)return!n.size;if(ga(n))return!Us(n).length;for(var o in n)if(De.call(n,o))return!1;return!0}function Xy(n,a){return ua(n,a)}function Zy(n,a,o){o=typeof o=="function"?o:r;var d=o?o(n,a):r;return d===r?ua(n,a,r,o):!!d}function bo(n){if(!en(n))return!1;var a=_n(n);return a==Xe||a==nn||typeof n.message=="string"&&typeof n.name=="string"&&!ma(n)}function Jy(n){return typeof n=="number"&&ju(n)}function Mr(n){if(!Qe(n))return!1;var a=_n(n);return a==Ze||a==Pn||a==He||a==$n}function af(n){return typeof n=="number"&&n==_e(n)}function Oi(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=z}function Qe(n){var a=typeof n;return n!=null&&(a=="object"||a=="function")}function en(n){return n!=null&&typeof n=="object"}var sf=yu?jn(yu):rb;function Qy(n,a){return n===a||Gs(n,a,so(a))}function ek(n,a,o){return o=typeof o=="function"?o:r,Gs(n,a,so(a),o)}function nk(n){return of(n)&&n!=+n}function rk(n){if(Db(n))throw new ye(l);return Zu(n)}function tk(n){return n===null}function ak(n){return n==null}function of(n){return typeof n=="number"||en(n)&&_n(n)==on}function ma(n){if(!en(n)||_n(n)!=un)return!1;var a=ni(n);if(a===null)return!0;var o=De.call(a,"constructor")&&a.constructor;return typeof o=="function"&&o instanceof o&&Za.call(o)==eh}var po=ku?jn(ku):tb;function ik(n){return af(n)&&n>=-9007199254740991&&n<=z}var lf=Au?jn(Au):ab;function Si(n){return typeof n=="string"||!ke(n)&&en(n)&&_n(n)==U}function Cn(n){return typeof n=="symbol"||en(n)&&_n(n)==oe}var jt=_u?jn(_u):ib;function sk(n){return n===r}function ok(n){return en(n)&&yn(n)==te}function lk(n){return en(n)&&_n(n)==me}var uk=yi($s),dk=yi(function(n,a){return n<=a});function uf(n){if(!n)return[];if(Sn(n))return Si(n)?lr(n):On(n);if(na&&n[na])return Hv(n[na]());var a=yn(n),o=a==Ge?Ns:a==B?Wa:Dt;return o(n)}function Br(n){if(!n)return n===0?n:0;if(n=er(n),n===J||n===-1/0){var a=n<0?-1:1;return a*Z}return n===n?n:0}function _e(n){var a=Br(n),o=a%1;return a===a?o?a-o:a:0}function df(n){return n?lt(_e(n),0,le):0}function er(n){if(typeof n=="number")return n;if(Cn(n))return de;if(Qe(n)){var a=typeof n.valueOf=="function"?n.valueOf():n;n=Qe(a)?a+"":a}if(typeof n!="string")return n===0?n:+n;n=Ou(n);var o=$m.test(n);return o||Ym.test(n)?wv(n.slice(2),o?2:8):Um.test(n)?de:+n}function ff(n){return pr(n,In(n))}function fk(n){return n?lt(_e(n),-9007199254740991,z):n===0?n:0}function Fe(n){return n==null?"":Dn(n)}var gk=Bt(function(n,a){if(ga(a)||Sn(a)){pr(a,cn(a),n);return}for(var o in a)De.call(a,o)&&sa(n,o,a[o])}),gf=Bt(function(n,a){pr(a,In(a),n)}),Ii=Bt(function(n,a,o,d){pr(a,In(a),n,d)}),ck=Bt(function(n,a,o,d){pr(a,cn(a),n,d)}),mk=Nr(js);function vk(n,a){var o=Mt(n);return a==null?o:Gu(o,a)}var hk=we(function(n,a){n=Ce(n);var o=-1,d=a.length,g=d>2?a[2]:r;for(g&&Tn(a[0],a[1],g)&&(d=1);++o<d;)for(var b=a[o],T=In(b),O=-1,q=T.length;++O<q;){var Y=T[O],W=n[Y];(W===r||dr(W,xt[Y])&&!De.call(n,Y))&&(n[Y]=b[Y])}return n}),bk=we(function(n){return n.push(r,Od),Ln(cf,r,n)});function pk(n,a){return Eu(n,he(a,3),br)}function yk(n,a){return Eu(n,he(a,3),Cs)}function kk(n,a){return n==null?n:Ds(n,he(a,3),In)}function Ak(n,a){return n==null?n:Wu(n,he(a,3),In)}function _k(n,a){return n&&br(n,he(a,3))}function Tk(n,a){return n&&Cs(n,he(a,3))}function Ek(n){return n==null?[]:fi(n,cn(n))}function wk(n){return n==null?[]:fi(n,In(n))}function yo(n,a,o){var d=n==null?r:ut(n,a);return d===r?o:d}function Rk(n,a){return n!=null&&xd(n,a,zh)}function ko(n,a){return n!=null&&xd(n,a,Xh)}var Pk=Td(function(n,a,o){a!=null&&typeof a.toString!="function"&&(a=Ja.call(a)),n[a]=o},_o(xn)),Ok=Td(function(n,a,o){a!=null&&typeof a.toString!="function"&&(a=Ja.call(a)),De.call(n,a)?n[a].push(o):n[a]=[o]},he),Sk=we(la);function cn(n){return Sn(n)?Vu(n):Us(n)}function In(n){return Sn(n)?Vu(n,!0):sb(n)}function Ik(n,a){var o={};return a=he(a,3),br(n,function(d,g,b){Ir(o,a(d,g,b),d)}),o}function xk(n,a){var o={};return a=he(a,3),br(n,function(d,g,b){Ir(o,g,a(d,g,b))}),o}var Nk=Bt(function(n,a,o){gi(n,a,o)}),cf=Bt(function(n,a,o,d){gi(n,a,o,d)}),qk=Nr(function(n,a){var o={};if(n==null)return o;var d=!1;a=Je(a,function(b){return b=Zr(b,n),d||(d=b.length>1),b}),pr(n,ao(n),o),d&&(o=Zn(o,p|y|k,Pb));for(var g=a.length;g--;)Xs(o,a[g]);return o});function Mk(n,a){return mf(n,Pi(he(a)))}var Bk=Nr(function(n,a){return n==null?{}:lb(n,a)});function mf(n,a){if(n==null)return{};var o=Je(ao(n),function(d){return[d]});return a=he(a),ad(n,o,function(d,g){return a(d,g[0])})}function Fk(n,a,o){a=Zr(a,n);var d=-1,g=a.length;for(g||(g=1,n=r);++d<g;){var b=n==null?r:n[yr(a[d])];b===r&&(d=g,b=o),n=Mr(b)?b.call(n):b}return n}function Lk(n,a,o){return n==null?n:da(n,a,o)}function jk(n,a,o,d){return d=typeof d=="function"?d:r,n==null?n:da(n,a,o,d)}var vf=Rd(cn),hf=Rd(In);function Dk(n,a,o){var d=ke(n),g=d||Qr(n)||jt(n);if(a=he(a,4),o==null){var b=n&&n.constructor;g?o=d?new b:[]:Qe(n)?o=Mr(b)?Mt(ni(n)):{}:o={}}return(g?Wn:br)(n,function(T,O,q){return a(o,T,O,q)}),o}function Ck(n,a){return n==null?!0:Xs(n,a)}function Vk(n,a,o){return n==null?n:ud(n,a,Qs(o))}function Hk(n,a,o,d){return d=typeof d=="function"?d:r,n==null?n:ud(n,a,Qs(o),d)}function Dt(n){return n==null?[]:xs(n,cn(n))}function Gk(n){return n==null?[]:xs(n,In(n))}function Uk(n,a,o){return o===r&&(o=a,a=r),o!==r&&(o=er(o),o=o===o?o:0),a!==r&&(a=er(a),a=a===a?a:0),lt(er(n),a,o)}function $k(n,a,o){return a=Br(a),o===r?(o=a,a=0):o=Br(o),n=er(n),Zh(n,a,o)}function Kk(n,a,o){if(o&&typeof o!="boolean"&&Tn(n,a,o)&&(a=o=r),o===r&&(typeof a=="boolean"?(o=a,a=r):typeof n=="boolean"&&(o=n,n=r)),n===r&&a===r?(n=0,a=1):(n=Br(n),a===r?(a=n,n=0):a=Br(a)),n>a){var d=n;n=a,a=d}if(o||n%1||a%1){var g=Du();return pn(n+g*(a-n+Ev("1e-"+((g+"").length-1))),a)}return Ys(n,a)}var Yk=Ft(function(n,a,o){return a=a.toLowerCase(),n+(o?bf(a):a)});function bf(n){return Ao(Fe(n).toLowerCase())}function pf(n){return n=Fe(n),n&&n.replace(zm,Lv).replace(mv,"")}function Wk(n,a,o){n=Fe(n),a=Dn(a);var d=n.length;o=o===r?d:lt(_e(o),0,d);var g=o;return o-=a.length,o>=0&&n.slice(o,g)==a}function zk(n){return n=Fe(n),n&&Sm.test(n)?n.replace(Wl,jv):n}function Xk(n){return n=Fe(n),n&&Bm.test(n)?n.replace(vs,"\\$&"):n}var Zk=Ft(function(n,a,o){return n+(o?"-":"")+a.toLowerCase()}),Jk=Ft(function(n,a,o){return n+(o?" ":"")+a.toLowerCase()}),Qk=kd("toLowerCase");function e0(n,a,o){n=Fe(n),a=_e(a);var d=a?St(n):0;if(!a||d>=a)return n;var g=(a-d)/2;return pi(ii(g),o)+n+pi(ai(g),o)}function n0(n,a,o){n=Fe(n),a=_e(a);var d=a?St(n):0;return a&&d<a?n+pi(a-d,o):n}function r0(n,a,o){n=Fe(n),a=_e(a);var d=a?St(n):0;return a&&d<a?pi(a-d,o)+n:n}function t0(n,a,o){return o||a==null?a=0:a&&(a=+a),dh(Fe(n).replace(hs,""),a||0)}function a0(n,a,o){return(o?Tn(n,a,o):a===r)?a=1:a=_e(a),Ws(Fe(n),a)}function i0(){var n=arguments,a=Fe(n[0]);return n.length<3?a:a.replace(n[1],n[2])}var s0=Ft(function(n,a,o){return n+(o?"_":"")+a.toLowerCase()});function o0(n,a,o){return o&&typeof o!="number"&&Tn(n,a,o)&&(a=o=r),o=o===r?le:o>>>0,o?(n=Fe(n),n&&(typeof a=="string"||a!=null&&!po(a))&&(a=Dn(a),!a&&Ot(n))?Jr(lr(n),0,o):n.split(a,o)):[]}var l0=Ft(function(n,a,o){return n+(o?" ":"")+Ao(a)});function u0(n,a,o){return n=Fe(n),o=o==null?0:lt(_e(o),0,n.length),a=Dn(a),n.slice(o,o+a.length)==a}function d0(n,a,o){var d=h.templateSettings;o&&Tn(n,a,o)&&(a=r),n=Fe(n),a=Ii({},a,d,Pd);var g=Ii({},a.imports,d.imports,Pd),b=cn(g),T=xs(g,b),O,q,Y=0,W=a.interpolate||Ga,Q="__p += '",se=qs((a.escape||Ga).source+"|"+W.source+"|"+(W===zl?Gm:Ga).source+"|"+(a.evaluate||Ga).source+"|$","g"),ce="//# sourceURL="+(De.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++yv+"]")+`
`;n.replace(se,function(pe,Re,Se,Vn,En,Hn){return Se||(Se=Vn),Q+=n.slice(Y,Hn).replace(Xm,Dv),Re&&(O=!0,Q+=`' +
__e(`+Re+`) +
'`),En&&(q=!0,Q+=`';
`+En+`;
__p += '`),Se&&(Q+=`' +
((__t = (`+Se+`)) == null ? '' : __t) +
'`),Y=Hn+pe.length,pe}),Q+=`';
`;var be=De.call(a,"variable")&&a.variable;if(!be)Q=`with (obj) {
`+Q+`
}
`;else if(Vm.test(be))throw new ye(f);Q=(q?Q.replace(Ha,""):Q).replace(Rm,"$1").replace(Pm,"$1;"),Q="function("+(be||"obj")+`) {
`+(be?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Q+`return __p
}`;var Te=kf(function(){return Be(b,ce+"return "+Q).apply(r,T)});if(Te.source=Q,bo(Te))throw Te;return Te}function f0(n){return Fe(n).toLowerCase()}function g0(n){return Fe(n).toUpperCase()}function c0(n,a,o){if(n=Fe(n),n&&(o||a===r))return Ou(n);if(!n||!(a=Dn(a)))return n;var d=lr(n),g=lr(a),b=Su(d,g),T=Iu(d,g)+1;return Jr(d,b,T).join("")}function m0(n,a,o){if(n=Fe(n),n&&(o||a===r))return n.slice(0,Nu(n)+1);if(!n||!(a=Dn(a)))return n;var d=lr(n),g=Iu(d,lr(a))+1;return Jr(d,0,g).join("")}function v0(n,a,o){if(n=Fe(n),n&&(o||a===r))return n.replace(hs,"");if(!n||!(a=Dn(a)))return n;var d=lr(n),g=Su(d,lr(a));return Jr(d,g).join("")}function h0(n,a){var o=ne,d=ee;if(Qe(a)){var g="separator"in a?a.separator:g;o="length"in a?_e(a.length):o,d="omission"in a?Dn(a.omission):d}n=Fe(n);var b=n.length;if(Ot(n)){var T=lr(n);b=T.length}if(o>=b)return n;var O=o-St(d);if(O<1)return d;var q=T?Jr(T,0,O).join(""):n.slice(0,O);if(g===r)return q+d;if(T&&(O+=q.length-O),po(g)){if(n.slice(O).search(g)){var Y,W=q;for(g.global||(g=qs(g.source,Fe(Xl.exec(g))+"g")),g.lastIndex=0;Y=g.exec(W);)var Q=Y.index;q=q.slice(0,Q===r?O:Q)}}else if(n.indexOf(Dn(g),O)!=O){var se=q.lastIndexOf(g);se>-1&&(q=q.slice(0,se))}return q+d}function b0(n){return n=Fe(n),n&&Om.test(n)?n.replace(Yl,Kv):n}var p0=Ft(function(n,a,o){return n+(o?" ":"")+a.toUpperCase()}),Ao=kd("toUpperCase");function yf(n,a,o){return n=Fe(n),a=o?r:a,a===r?Vv(n)?zv(n):Nv(n):n.match(a)||[]}var kf=we(function(n,a){try{return Ln(n,r,a)}catch(o){return bo(o)?o:new ye(o)}}),y0=Nr(function(n,a){return Wn(a,function(o){o=yr(o),Ir(n,o,vo(n[o],n))}),n});function k0(n){var a=n==null?0:n.length,o=he();return n=a?Je(n,function(d){if(typeof d[1]!="function")throw new zn(u);return[o(d[0]),d[1]]}):[],we(function(d){for(var g=-1;++g<a;){var b=n[g];if(Ln(b[0],this,d))return Ln(b[1],this,d)}})}function A0(n){return Kh(Zn(n,p))}function _o(n){return function(){return n}}function _0(n,a){return n==null||n!==n?a:n}var T0=_d(),E0=_d(!0);function xn(n){return n}function To(n){return Ju(typeof n=="function"?n:Zn(n,p))}function w0(n){return ed(Zn(n,p))}function R0(n,a){return nd(n,Zn(a,p))}var P0=we(function(n,a){return function(o){return la(o,n,a)}}),O0=we(function(n,a){return function(o){return la(n,o,a)}});function Eo(n,a,o){var d=cn(a),g=fi(a,d);o==null&&!(Qe(a)&&(g.length||!d.length))&&(o=a,a=n,n=this,g=fi(a,cn(a)));var b=!(Qe(o)&&"chain"in o)||!!o.chain,T=Mr(n);return Wn(g,function(O){var q=a[O];n[O]=q,T&&(n.prototype[O]=function(){var Y=this.__chain__;if(b||Y){var W=n(this.__wrapped__),Q=W.__actions__=On(this.__actions__);return Q.push({func:q,args:arguments,thisArg:n}),W.__chain__=Y,W}return q.apply(n,Kr([this.value()],arguments))})}),n}function S0(){return mn._===this&&(mn._=nh),this}function wo(){}function I0(n){return n=_e(n),we(function(a){return rd(a,n)})}var x0=no(Je),N0=no(Tu),q0=no(Rs);function Af(n){return lo(n)?Ps(yr(n)):ub(n)}function M0(n){return function(a){return n==null?r:ut(n,a)}}var B0=Ed(),F0=Ed(!0);function Ro(){return[]}function Po(){return!1}function L0(){return{}}function j0(){return""}function D0(){return!0}function C0(n,a){if(n=_e(n),n<1||n>z)return[];var o=le,d=pn(n,le);a=he(a),n-=le;for(var g=Is(d,a);++o<n;)a(o);return g}function V0(n){return ke(n)?Je(n,yr):Cn(n)?[n]:On(Cd(Fe(n)))}function H0(n){var a=++Qv;return Fe(n)+a}var G0=bi(function(n,a){return n+a},0),U0=ro("ceil"),$0=bi(function(n,a){return n/a},1),K0=ro("floor");function Y0(n){return n&&n.length?di(n,xn,Vs):r}function W0(n,a){return n&&n.length?di(n,he(a,2),Vs):r}function z0(n){return Ru(n,xn)}function X0(n,a){return Ru(n,he(a,2))}function Z0(n){return n&&n.length?di(n,xn,$s):r}function J0(n,a){return n&&n.length?di(n,he(a,2),$s):r}var Q0=bi(function(n,a){return n*a},1),eA=ro("round"),nA=bi(function(n,a){return n-a},0);function rA(n){return n&&n.length?Ss(n,xn):0}function tA(n,a){return n&&n.length?Ss(n,he(a,2)):0}return h.after=wy,h.ary=Zd,h.assign=gk,h.assignIn=gf,h.assignInWith=Ii,h.assignWith=ck,h.at=mk,h.before=Jd,h.bind=vo,h.bindAll=y0,h.bindKey=Qd,h.castArray=Ly,h.chain=Wd,h.chunk=Kb,h.compact=Yb,h.concat=Wb,h.cond=k0,h.conforms=A0,h.constant=_o,h.countBy=ry,h.create=vk,h.curry=ef,h.curryRight=nf,h.debounce=rf,h.defaults=hk,h.defaultsDeep=bk,h.defer=Ry,h.delay=Py,h.difference=zb,h.differenceBy=Xb,h.differenceWith=Zb,h.drop=Jb,h.dropRight=Qb,h.dropRightWhile=ep,h.dropWhile=np,h.fill=rp,h.filter=ay,h.flatMap=oy,h.flatMapDeep=ly,h.flatMapDepth=uy,h.flatten=Ud,h.flattenDeep=tp,h.flattenDepth=ap,h.flip=Oy,h.flow=T0,h.flowRight=E0,h.fromPairs=ip,h.functions=Ek,h.functionsIn=wk,h.groupBy=dy,h.initial=op,h.intersection=lp,h.intersectionBy=up,h.intersectionWith=dp,h.invert=Pk,h.invertBy=Ok,h.invokeMap=gy,h.iteratee=To,h.keyBy=cy,h.keys=cn,h.keysIn=In,h.map=Ei,h.mapKeys=Ik,h.mapValues=xk,h.matches=w0,h.matchesProperty=R0,h.memoize=Ri,h.merge=Nk,h.mergeWith=cf,h.method=P0,h.methodOf=O0,h.mixin=Eo,h.negate=Pi,h.nthArg=I0,h.omit=qk,h.omitBy=Mk,h.once=Sy,h.orderBy=my,h.over=x0,h.overArgs=Iy,h.overEvery=N0,h.overSome=q0,h.partial=ho,h.partialRight=tf,h.partition=vy,h.pick=Bk,h.pickBy=mf,h.property=Af,h.propertyOf=M0,h.pull=mp,h.pullAll=Kd,h.pullAllBy=vp,h.pullAllWith=hp,h.pullAt=bp,h.range=B0,h.rangeRight=F0,h.rearg=xy,h.reject=py,h.remove=pp,h.rest=Ny,h.reverse=co,h.sampleSize=ky,h.set=Lk,h.setWith=jk,h.shuffle=Ay,h.slice=yp,h.sortBy=Ey,h.sortedUniq=Rp,h.sortedUniqBy=Pp,h.split=o0,h.spread=qy,h.tail=Op,h.take=Sp,h.takeRight=Ip,h.takeRightWhile=xp,h.takeWhile=Np,h.tap=Yp,h.throttle=My,h.thru=Ti,h.toArray=uf,h.toPairs=vf,h.toPairsIn=hf,h.toPath=V0,h.toPlainObject=ff,h.transform=Dk,h.unary=By,h.union=qp,h.unionBy=Mp,h.unionWith=Bp,h.uniq=Fp,h.uniqBy=Lp,h.uniqWith=jp,h.unset=Ck,h.unzip=mo,h.unzipWith=Yd,h.update=Vk,h.updateWith=Hk,h.values=Dt,h.valuesIn=Gk,h.without=Dp,h.words=yf,h.wrap=Fy,h.xor=Cp,h.xorBy=Vp,h.xorWith=Hp,h.zip=Gp,h.zipObject=Up,h.zipObjectDeep=$p,h.zipWith=Kp,h.entries=vf,h.entriesIn=hf,h.extend=gf,h.extendWith=Ii,Eo(h,h),h.add=G0,h.attempt=kf,h.camelCase=Yk,h.capitalize=bf,h.ceil=U0,h.clamp=Uk,h.clone=jy,h.cloneDeep=Cy,h.cloneDeepWith=Vy,h.cloneWith=Dy,h.conformsTo=Hy,h.deburr=pf,h.defaultTo=_0,h.divide=$0,h.endsWith=Wk,h.eq=dr,h.escape=zk,h.escapeRegExp=Xk,h.every=ty,h.find=iy,h.findIndex=Hd,h.findKey=pk,h.findLast=sy,h.findLastIndex=Gd,h.findLastKey=yk,h.floor=K0,h.forEach=zd,h.forEachRight=Xd,h.forIn=kk,h.forInRight=Ak,h.forOwn=_k,h.forOwnRight=Tk,h.get=yo,h.gt=Gy,h.gte=Uy,h.has=Rk,h.hasIn=ko,h.head=$d,h.identity=xn,h.includes=fy,h.indexOf=sp,h.inRange=$k,h.invoke=Sk,h.isArguments=gt,h.isArray=ke,h.isArrayBuffer=$y,h.isArrayLike=Sn,h.isArrayLikeObject=rn,h.isBoolean=Ky,h.isBuffer=Qr,h.isDate=Yy,h.isElement=Wy,h.isEmpty=zy,h.isEqual=Xy,h.isEqualWith=Zy,h.isError=bo,h.isFinite=Jy,h.isFunction=Mr,h.isInteger=af,h.isLength=Oi,h.isMap=sf,h.isMatch=Qy,h.isMatchWith=ek,h.isNaN=nk,h.isNative=rk,h.isNil=ak,h.isNull=tk,h.isNumber=of,h.isObject=Qe,h.isObjectLike=en,h.isPlainObject=ma,h.isRegExp=po,h.isSafeInteger=ik,h.isSet=lf,h.isString=Si,h.isSymbol=Cn,h.isTypedArray=jt,h.isUndefined=sk,h.isWeakMap=ok,h.isWeakSet=lk,h.join=fp,h.kebabCase=Zk,h.last=Qn,h.lastIndexOf=gp,h.lowerCase=Jk,h.lowerFirst=Qk,h.lt=uk,h.lte=dk,h.max=Y0,h.maxBy=W0,h.mean=z0,h.meanBy=X0,h.min=Z0,h.minBy=J0,h.stubArray=Ro,h.stubFalse=Po,h.stubObject=L0,h.stubString=j0,h.stubTrue=D0,h.multiply=Q0,h.nth=cp,h.noConflict=S0,h.noop=wo,h.now=wi,h.pad=e0,h.padEnd=n0,h.padStart=r0,h.parseInt=t0,h.random=Kk,h.reduce=hy,h.reduceRight=by,h.repeat=a0,h.replace=i0,h.result=Fk,h.round=eA,h.runInContext=N,h.sample=yy,h.size=_y,h.snakeCase=s0,h.some=Ty,h.sortedIndex=kp,h.sortedIndexBy=Ap,h.sortedIndexOf=_p,h.sortedLastIndex=Tp,h.sortedLastIndexBy=Ep,h.sortedLastIndexOf=wp,h.startCase=l0,h.startsWith=u0,h.subtract=nA,h.sum=rA,h.sumBy=tA,h.template=d0,h.times=C0,h.toFinite=Br,h.toInteger=_e,h.toLength=df,h.toLower=f0,h.toNumber=er,h.toSafeInteger=fk,h.toString=Fe,h.toUpper=g0,h.trim=c0,h.trimEnd=m0,h.trimStart=v0,h.truncate=h0,h.unescape=b0,h.uniqueId=H0,h.upperCase=p0,h.upperFirst=Ao,h.each=zd,h.eachRight=Xd,h.first=$d,Eo(h,function(){var n={};return br(h,function(a,o){De.call(h.prototype,o)||(n[o]=a)}),n}(),{chain:!1}),h.VERSION=t,Wn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){h[n].placeholder=h}),Wn(["drop","take"],function(n,a){Pe.prototype[n]=function(o){o=o===r?1:fn(_e(o),0);var d=this.__filtered__&&!a?new Pe(this):this.clone();return d.__filtered__?d.__takeCount__=pn(o,d.__takeCount__):d.__views__.push({size:pn(o,le),type:n+(d.__dir__<0?"Right":"")}),d},Pe.prototype[n+"Right"]=function(o){return this.reverse()[n](o).reverse()}}),Wn(["filter","map","takeWhile"],function(n,a){var o=a+1,d=o==L||o==re;Pe.prototype[n]=function(g){var b=this.clone();return b.__iteratees__.push({iteratee:he(g,3),type:o}),b.__filtered__=b.__filtered__||d,b}}),Wn(["head","last"],function(n,a){var o="take"+(a?"Right":"");Pe.prototype[n]=function(){return this[o](1).value()[0]}}),Wn(["initial","tail"],function(n,a){var o="drop"+(a?"":"Right");Pe.prototype[n]=function(){return this.__filtered__?new Pe(this):this[o](1)}}),Pe.prototype.compact=function(){return this.filter(xn)},Pe.prototype.find=function(n){return this.filter(n).head()},Pe.prototype.findLast=function(n){return this.reverse().find(n)},Pe.prototype.invokeMap=we(function(n,a){return typeof n=="function"?new Pe(this):this.map(function(o){return la(o,n,a)})}),Pe.prototype.reject=function(n){return this.filter(Pi(he(n)))},Pe.prototype.slice=function(n,a){n=_e(n);var o=this;return o.__filtered__&&(n>0||a<0)?new Pe(o):(n<0?o=o.takeRight(-n):n&&(o=o.drop(n)),a!==r&&(a=_e(a),o=a<0?o.dropRight(-a):o.take(a-n)),o)},Pe.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Pe.prototype.toArray=function(){return this.take(le)},br(Pe.prototype,function(n,a){var o=/^(?:filter|find|map|reject)|While$/.test(a),d=/^(?:head|last)$/.test(a),g=h[d?"take"+(a=="last"?"Right":""):a],b=d||/^find/.test(a);g&&(h.prototype[a]=function(){var T=this.__wrapped__,O=d?[1]:arguments,q=T instanceof Pe,Y=O[0],W=q||ke(T),Q=function(Re){var Se=g.apply(h,Kr([Re],O));return d&&se?Se[0]:Se};W&&o&&typeof Y=="function"&&Y.length!=1&&(q=W=!1);var se=this.__chain__,ce=!!this.__actions__.length,be=b&&!se,Te=q&&!ce;if(!b&&W){T=Te?T:new Pe(this);var pe=n.apply(T,O);return pe.__actions__.push({func:Ti,args:[Q],thisArg:r}),new Xn(pe,se)}return be&&Te?n.apply(this,O):(pe=this.thru(Q),be?d?pe.value()[0]:pe.value():pe)})}),Wn(["pop","push","shift","sort","splice","unshift"],function(n){var a=za[n],o=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);h.prototype[n]=function(){var g=arguments;if(d&&!this.__chain__){var b=this.value();return a.apply(ke(b)?b:[],g)}return this[o](function(T){return a.apply(ke(T)?T:[],g)})}}),br(Pe.prototype,function(n,a){var o=h[a];if(o){var d=o.name+"";De.call(qt,d)||(qt[d]=[]),qt[d].push({name:a,func:o})}}),qt[hi(r,R).name]=[{name:"wrapper",func:r}],Pe.prototype.clone=bh,Pe.prototype.reverse=ph,Pe.prototype.value=yh,h.prototype.at=Wp,h.prototype.chain=zp,h.prototype.commit=Xp,h.prototype.next=Zp,h.prototype.plant=Qp,h.prototype.reverse=ey,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=ny,h.prototype.first=h.prototype.head,na&&(h.prototype[na]=Jp),h},It=Xv();at?((at.exports=It)._=It,_s._=It):mn._=It}).call(Ow)}(Ea,Ea.exports)),Ea.exports}Sw();vr(La);const Jc=E.forwardRef((e,i)=>ie.jsx(Ml,{gap:"2",style:{display:"flex"},...e,ref:i}));Jc.displayName="FaktaGruppe";Jc.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Uo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var wg;function Iw(){return wg||(wg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var l="",u=0;u<arguments.length;u++){var f=arguments[u];f&&(l=s(l,t.call(this,f)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var f in l)i.call(l,f)&&l[f]&&(u=s(u,this&&this[f]||f));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Uo)),Uo.exports}var xw=Iw();const Nw=nc(xw),qw="_boks_c3bfh_1",Mw="_harBorderLeft_c3bfh_8",Bw="_harBorderTop_c3bfh_12",Fw={boks:qw,harBorderLeft:Mw,harBorderTop:Bw};Nw.bind(Fw);var $o={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Rg;function Lw(){return Rg||(Rg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var l="",u=0;u<arguments.length;u++){var f=arguments[u];f&&(l=s(l,t(f)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var f in l)i.call(l,f)&&l[f]&&(u=s(u,f));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}($o)),$o.exports}Lw();function jw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pg={exports:{}},Aa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Dw(){if(Og)return Aa;Og=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:l}}return Aa.Fragment=i,Aa.jsx=r,Aa.jsxs=r,Aa}var Sg;function Cw(){return Sg||(Sg=1,Pg.exports=Dw()),Pg.exports}var Cr=Cw();const Vw="_autocompleteSuggestion__substring_mf7v0_1",Hw="_autocompleteSuggestion__inner_mf7v0_4",_a={autocompleteSuggestion__substring:Vw,autocompleteSuggestion__inner:Hw,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12"};class Gw extends M.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:r}=this.state;i(r)}onMouseMove(){const{setSuggestionIndex:i,index:r}=this.props;i(r)}render(){const{match:i,active:r,avoidBlur:t,id:s}=this.props,{value:l}=this.state.value,u=l.toLowerCase().startsWith(i.toLowerCase());return Cr.jsx("li",{id:s,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:u?Cr.jsxs("span",{className:`${_a.autocompleteSuggestion__inner} ${r?_a["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,i.length),Cr.jsx("span",{className:_a.autocompleteSuggestion__substring,children:l.substring(i.length)})]}):Cr.jsx("span",{className:`${_a.autocompleteSuggestion__inner} ${r?_a["autocompleteSuggestion--active"]:""}`,children:l})})}}const Uw="_autocomplete_9dlnp_1",$w="_autocomplete__suggestions_9dlnp_27",Ko={autocomplete:Uw,autocomplete__suggestions:$w,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31"};class JP extends M.Component{input;inputRef;constructor(i){super(i),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(i)}onSearchButtonClick(i){const{onSearchButtonClick:r}=this.props;i.preventDefault(),r&&r()}onKeyDown(i){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:t}=this.state;const{suggestions:s}=this.props,l=t>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:l&&r&&this.setValue(s[t]);break;case 13:l&&r?(i.preventDefault(),this.setValue(s[t])):r&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(i.preventDefault(),t=t-1===-2?-1:t-1,this.setState({activeSuggestionIndex:t}));break;case 40:r&&(i.preventDefault(),t=t+1===s.length?s.length-1:t+1,this.setState({activeSuggestionIndex:t}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:t}=this.state;t&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:r,ariaLabel:t,placeholder:s,value:l,name:u,shouldFocusOnMount:f,isLoading:c}=this.props,{activeSuggestionIndex:v,setAriaActiveDescendant:m,hasFocus:p,shouldShowSuggestions:y}=this.state,k=p&&y&&i.length>0,x=m&&v>-1?`${r}-item-${v}`:void 0;return Cr.jsxs("div",{className:`${Ko.autocomplete} autocomplete`,"aria-expanded":k,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[Cr.jsx(tl,{variant:"primary",id:r,name:u,"aria-label":t,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":x,placeholder:s,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:_=>{this.inputRef=_},className:"typo-normal",autoFocus:f,label:t,hideLabel:!0,children:Cr.jsx(tl.Button,{loading:c,onClick:this.onSearchButtonClick})}),Cr.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:k?Ko.autocomplete__suggestions:Ko["autocomplete__suggestions--hidden"],children:k&&i.map((_,A)=>Cr.jsx(Gw,{id:`${r}-item-${A}`,index:A,value:_,match:l,active:A===v,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},_.key))})]})}}var ol=function(e,i){return ol=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])},ol(e,i)};function hr(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");ol(e,i);function r(){this.constructor=e}e.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}var ge=function(){return ge=Object.assign||function(e){for(var i,r=1,t=arguments.length;r<t;r++){i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},ge.apply(this,arguments)};function fs(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r}function _r(e,i,r){if(arguments.length===2)for(var t=0,s=i.length,l;t<s;t++)(l||!(t in i))&&(l||(l=Array.prototype.slice.call(i,0,t)),l[t]=i[t]);return e.concat(l||Array.prototype.slice.call(i))}function kr(e,i){var r=i&&i.cache?i.cache:Jw,t=i&&i.serializer?i.serializer:Xw,s=i&&i.strategy?i.strategy:Ww;return s(e,{cache:r,serializer:t})}function Kw(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Yw(e,i,r,t){var s=Kw(t)?t:r(t),l=i.get(s);return typeof l>"u"&&(l=e.call(this,t),i.set(s,l)),l}function Qc(e,i,r){var t=Array.prototype.slice.call(arguments,3),s=r(t),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,t),i.set(s,l)),l}function em(e,i,r,t,s){return r.bind(i,e,t,s)}function Ww(e,i){var r=e.length===1?Yw:Qc;return em(e,this,r,i.cache.create(),i.serializer)}function zw(e,i){return em(e,this,Qc,i.cache.create(),i.serializer)}var Xw=function(){return JSON.stringify(arguments)},Zw=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,r){this.cache[i]=r},e}(),Jw={create:function(){return new Zw}},Ar={variadic:zw},Ie;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ie||(Ie={}));var ze;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(ze||(ze={}));var Kt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Kt||(Kt={}));function Ig(e){return e.type===ze.literal}function Qw(e){return e.type===ze.argument}function nm(e){return e.type===ze.number}function rm(e){return e.type===ze.date}function tm(e){return e.type===ze.time}function am(e){return e.type===ze.select}function im(e){return e.type===ze.plural}function eR(e){return e.type===ze.pound}function sm(e){return e.type===ze.tag}function om(e){return!!(e&&typeof e=="object"&&e.type===Kt.number)}function ll(e){return!!(e&&typeof e=="object"&&e.type===Kt.dateTime)}var lm=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,nR=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function rR(e){var i={};return e.replace(nR,function(r){var t=r.length;switch(r[0]){case"G":i.era=t===4?"long":t===5?"narrow":"short";break;case"y":i.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][t-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][t-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][t-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][t-1];break;case"s":i.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var tR=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function aR(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(tR).filter(function(y){return y.length>0}),r=[],t=0,s=i;t<s.length;t++){var l=s[t],u=l.split("/");if(u.length===0)throw new Error("Invalid number skeleton");for(var f=u[0],c=u.slice(1),v=0,m=c;v<m.length;v++){var p=m[v];if(p.length===0)throw new Error("Invalid number skeleton")}r.push({stem:f,options:c})}return r}function iR(e){return e.replace(/^(.*?)-/,"")}var xg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,um=/^(@+)?(\+|#+)?[rs]?$/g,sR=/(\*)(0+)|(#+)(0+)|(0+)/g,dm=/^(0+)$/;function Ng(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(um,function(r,t,s){return typeof s!="string"?(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length):s==="+"?i.minimumSignificantDigits=t.length:t[0]==="#"?i.maximumSignificantDigits=t.length:(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length+(typeof s=="string"?s.length:0)),""}),i}function fm(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function oR(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var r=e.slice(0,2);if(r==="+!"?(i.signDisplay="always",e=e.slice(2)):r==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!dm.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function qg(e){var i={},r=fm(e);return r||i}function lR(e){for(var i={},r=0,t=e;r<t.length;r++){var s=t[r];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=iR(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ge(ge(ge({},i),{notation:"scientific"}),s.options.reduce(function(c,v){return ge(ge({},c),qg(v))},{}));continue;case"engineering":i=ge(ge(ge({},i),{notation:"engineering"}),s.options.reduce(function(c,v){return ge(ge({},c),qg(v))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(sR,function(c,v,m,p,y,k){if(v)i.minimumIntegerDigits=m.length;else{if(p&&y)throw new Error("We currently do not support maximum integer digits");if(k)throw new Error("We currently do not support exact integer digits")}return""});continue}if(dm.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(xg.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(xg,function(c,v,m,p,y,k){return m==="*"?i.minimumFractionDigits=v.length:p&&p[0]==="#"?i.maximumFractionDigits=p.length:y&&k?(i.minimumFractionDigits=y.length,i.maximumFractionDigits=y.length+k.length):(i.minimumFractionDigits=v.length,i.maximumFractionDigits=v.length),""});var l=s.options[0];l==="w"?i=ge(ge({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ge(ge({},i),Ng(l)));continue}if(um.test(s.stem)){i=ge(ge({},i),Ng(s.stem));continue}var u=fm(s.stem);u&&(i=ge(ge({},i),u));var f=oR(s.stem);f&&(i=ge(ge({},i),f))}return i}var Bi={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function uR(e,i){for(var r="",t=0;t<e.length;t++){var s=e.charAt(t);if(s==="j"){for(var l=0;t+1<e.length&&e.charAt(t+1)===s;)l++,t++;var u=1+(l&1),f=l<2?1:3+(l>>1),c="a",v=dR(i);for((v=="H"||v=="k")&&(f=0);f-- >0;)r+=c;for(;u-- >0;)r=v+r}else s==="J"?r+="H":r+=s}return r}function dR(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,t;r!=="root"&&(t=e.maximize().region);var s=Bi[t||""]||Bi[r||""]||Bi["".concat(r,"-001")]||Bi["001"];return s[0]}var Yo,fR=new RegExp("^".concat(lm.source,"*")),gR=new RegExp("".concat(lm.source,"*$"));function qe(e,i){return{start:e,end:i}}var cR=!!String.prototype.startsWith&&"_a".startsWith("a",1),mR=!!String.fromCodePoint,vR=!!Object.fromEntries,hR=!!String.prototype.codePointAt,bR=!!String.prototype.trimStart,pR=!!String.prototype.trimEnd,yR=!!Number.isSafeInteger,kR=yR?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ul=!0;try{var AR=cm("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ul=((Yo=AR.exec("a"))===null||Yo===void 0?void 0:Yo[0])==="a"}catch{ul=!1}var Mg=cR?function(e,i,r){return e.startsWith(i,r)}:function(e,i,r){return e.slice(r,r+i.length)===i},dl=mR?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r="",t=e.length,s=0,l;t>s;){if(l=e[s++],l>1114111)throw RangeError(l+" is not a valid code point");r+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return r},Bg=vR?Object.fromEntries:function(e){for(var i={},r=0,t=e;r<t.length;r++){var s=t[r],l=s[0],u=s[1];i[l]=u}return i},gm=hR?function(e,i){return e.codePointAt(i)}:function(e,i){var r=e.length;if(!(i<0||i>=r)){var t=e.charCodeAt(i),s;return t<55296||t>56319||i+1===r||(s=e.charCodeAt(i+1))<56320||s>57343?t:(t-55296<<10)+(s-56320)+65536}},_R=bR?function(e){return e.trimStart()}:function(e){return e.replace(fR,"")},TR=pR?function(e){return e.trimEnd()}:function(e){return e.replace(gR,"")};function cm(e,i){return new RegExp(e,i)}var fl;if(ul){var Fg=cm("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");fl=function(e,i){var r;Fg.lastIndex=i;var t=Fg.exec(e);return(r=t[1])!==null&&r!==void 0?r:""}}else fl=function(e,i){for(var r=[];;){var t=gm(e,i);if(t===void 0||mm(t)||PR(t))break;r.push(t),i+=t>=65536?2:1}return dl.apply(void 0,r)};var ER=function(){function e(i,r){r===void 0&&(r={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,r,t){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var u=this.parseArgument(i,t);if(u.err)return u;s.push(u.val)}else{if(l===125&&i>0)break;if(l===35&&(r==="plural"||r==="selectordinal")){var f=this.clonePosition();this.bump(),s.push({type:ze.pound,location:qe(f,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(Ie.UNMATCHED_CLOSING_TAG,qe(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&gl(this.peek()||0)){var u=this.parseTag(i,r);if(u.err)return u;s.push(u.val)}else{var u=this.parseLiteral(i,r);if(u.err)return u;s.push(u.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,r){var t=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:ze.literal,value:"<".concat(s,"/>"),location:qe(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,r,!0);if(l.err)return l;var u=l.val,f=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!gl(this.char()))return this.error(Ie.INVALID_TAG,qe(f,this.clonePosition()));var c=this.clonePosition(),v=this.parseTagName();return s!==v?this.error(Ie.UNMATCHED_CLOSING_TAG,qe(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:ze.tag,value:s,children:u,location:qe(t,this.clonePosition())},err:null}:this.error(Ie.INVALID_TAG,qe(f,this.clonePosition())))}else return this.error(Ie.UNCLOSED_TAG,qe(t,this.clonePosition()))}else return this.error(Ie.INVALID_TAG,qe(t,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&RR(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,r){for(var t=this.clonePosition(),s="";;){var l=this.tryParseQuote(r);if(l){s+=l;continue}var u=this.tryParseUnquoted(i,r);if(u){s+=u;continue}var f=this.tryParseLeftAngleBracket();if(f){s+=f;continue}break}var c=qe(t,this.clonePosition());return{val:{type:ze.literal,value:s,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!wR(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(t);this.bump()}return dl.apply(void 0,r)},e.prototype.tryParseUnquoted=function(i,r){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(r==="plural"||r==="selectordinal")||t===125&&i>0?null:(this.bump(),dl(t))},e.prototype.parseArgument=function(i,r){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,qe(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ie.EMPTY_ARGUMENT,qe(t,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(Ie.MALFORMED_ARGUMENT,qe(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,qe(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:ze.argument,value:s,location:qe(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,qe(t,this.clonePosition())):this.parseArgumentOptions(i,r,s,t);default:return this.error(Ie.MALFORMED_ARGUMENT,qe(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),r=this.offset(),t=fl(this.message,r),s=r+t.length;this.bumpTo(s);var l=this.clonePosition(),u=qe(i,l);return{value:t,location:u}},e.prototype.parseArgumentOptions=function(i,r,t,s){var l,u=this.clonePosition(),f=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(f){case"":return this.error(Ie.EXPECT_ARGUMENT_TYPE,qe(u,c));case"number":case"date":case"time":{this.bumpSpace();var v=null;if(this.bumpIf(",")){this.bumpSpace();var m=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var y=TR(p.val);if(y.length===0)return this.error(Ie.EXPECT_ARGUMENT_STYLE,qe(this.clonePosition(),this.clonePosition()));var k=qe(m,this.clonePosition());v={style:y,styleLocation:k}}var x=this.tryParseArgumentClose(s);if(x.err)return x;var _=qe(s,this.clonePosition());if(v&&Mg(v?.style,"::",0)){var A=_R(v.style.slice(2));if(f==="number"){var p=this.parseNumberSkeletonFromString(A,v.styleLocation);return p.err?p:{val:{type:ze.number,value:t,location:_,style:p.val},err:null}}else{if(A.length===0)return this.error(Ie.EXPECT_DATE_TIME_SKELETON,_);var R=A;this.locale&&(R=uR(A,this.locale));var y={type:Kt.dateTime,pattern:R,location:v.styleLocation,parsedOptions:this.shouldParseSkeletons?rR(R):{}},S=f==="date"?ze.date:ze.time;return{val:{type:S,value:t,location:_,style:y},err:null}}}return{val:{type:f==="number"?ze.number:f==="date"?ze.date:ze.time,value:t,location:_,style:(l=v?.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var P=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ie.EXPECT_SELECT_ARGUMENT_OPTIONS,qe(P,ge({},P)));this.bumpSpace();var D=this.parseIdentifierIfPossible(),I=0;if(f!=="select"&&D.value==="offset"){if(!this.bumpIf(":"))return this.error(Ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,qe(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(Ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ie.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),D=this.parseIdentifierIfPossible(),I=p.val}var H=this.tryParsePluralOrSelectOptions(i,f,r,D);if(H.err)return H;var x=this.tryParseArgumentClose(s);if(x.err)return x;var j=qe(s,this.clonePosition());return f==="select"?{val:{type:ze.select,value:t,options:Bg(H.val),location:j},err:null}:{val:{type:ze.plural,value:t,options:Bg(H.val),offset:I,pluralType:f==="plural"?"cardinal":"ordinal",location:j},err:null}}default:return this.error(Ie.INVALID_ARGUMENT_TYPE,qe(u,c))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,qe(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,r=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ie.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,qe(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,r){var t=[];try{t=aR(i)}catch{return this.error(Ie.INVALID_NUMBER_SKELETON,r)}return{val:{type:Kt.number,tokens:t,location:r,parsedOptions:this.shouldParseSkeletons?lR(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,r,t,s){for(var l,u=!1,f=[],c=new Set,v=s.value,m=s.location;;){if(v.length===0){var p=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var y=this.tryParseDecimalInteger(Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ie.INVALID_PLURAL_ARGUMENT_SELECTOR);if(y.err)return y;m=qe(p,this.clonePosition()),v=this.message.slice(p.offset,this.offset())}else break}if(c.has(v))return this.error(r==="select"?Ie.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ie.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,m);v==="other"&&(u=!0),this.bumpSpace();var k=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?Ie.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,qe(this.clonePosition(),this.clonePosition()));var x=this.parseMessage(i+1,r,t);if(x.err)return x;var _=this.tryParseArgumentClose(k);if(_.err)return _;f.push([v,{value:x.val,location:qe(k,this.clonePosition())}]),c.add(v),this.bumpSpace(),l=this.parseIdentifierIfPossible(),v=l.value,m=l.location}return f.length===0?this.error(r==="select"?Ie.EXPECT_SELECT_ARGUMENT_SELECTOR:Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR,qe(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!u?this.error(Ie.MISSING_OTHER_CLAUSE,qe(this.clonePosition(),this.clonePosition())):{val:f,err:null}},e.prototype.tryParseDecimalInteger=function(i,r){var t=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var l=!1,u=0;!this.isEOF();){var f=this.char();if(f>=48&&f<=57)l=!0,u=u*10+(f-48),this.bump();else break}var c=qe(s,this.clonePosition());return l?(u*=t,kR(u)?{val:u,err:null}:this.error(r,c)):this.error(i,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var r=gm(this.message,i);if(r===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(i,r){return{val:null,err:{kind:i,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Mg(this.message,i,this.offset())){for(var r=0;r<i.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var r=this.offset(),t=this.message.indexOf(i,r);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var r=this.offset();if(r===i)break;if(r>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&mm(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),r=this.offset(),t=this.message.charCodeAt(r+(i>=65536?2:1));return t??null},e}();function gl(e){return e>=97&&e<=122||e>=65&&e<=90}function wR(e){return gl(e)||e===47}function RR(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function mm(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function PR(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function cl(e){e.forEach(function(i){if(delete i.location,am(i)||im(i))for(var r in i.options)delete i.options[r].location,cl(i.options[r].value);else nm(i)&&om(i.style)||(rm(i)||tm(i))&&ll(i.style)?delete i.style.location:sm(i)&&cl(i.children)})}function OR(e,i){i===void 0&&(i={}),i=ge({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var r=new ER(e,i).parse();if(r.err){var t=SyntaxError(Ie[r.err.kind]);throw t.location=r.err.location,t.originalMessage=r.err.message,t}return i?.captureLocation||cl(r.val),r.val}var Rr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Rr||(Rr={}));var nt=function(e){hr(i,e);function i(r,t,s){var l=e.call(this,r)||this;return l.code=t,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Lg=function(e){hr(i,e);function i(r,t,s,l){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(t,'". Options are "').concat(Object.keys(s).join('", "'),'"'),Rr.INVALID_VALUE,l)||this}return i}(nt),SR=function(e){hr(i,e);function i(r,t,s){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(t),Rr.INVALID_VALUE,s)||this}return i}(nt),IR=function(e){hr(i,e);function i(r,t){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(t,'"'),Rr.MISSING_VALUE,t)||this}return i}(nt),wn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(wn||(wn={}));function xR(e){return e.length<2?e:e.reduce(function(i,r){var t=i[i.length-1];return!t||t.type!==wn.literal||r.type!==wn.literal?i.push(r):t.value+=r.value,i},[])}function vm(e){return typeof e=="function"}function Ui(e,i,r,t,s,l,u){if(e.length===1&&Ig(e[0]))return[{type:wn.literal,value:e[0].value}];for(var f=[],c=0,v=e;c<v.length;c++){var m=v[c];if(Ig(m)){f.push({type:wn.literal,value:m.value});continue}if(eR(m)){typeof l=="number"&&f.push({type:wn.literal,value:r.getNumberFormat(i).format(l)});continue}var p=m.value;if(!(s&&p in s))throw new IR(p,u);var y=s[p];if(Qw(m)){(!y||typeof y=="string"||typeof y=="number")&&(y=typeof y=="string"||typeof y=="number"?String(y):""),f.push({type:typeof y=="string"?wn.literal:wn.object,value:y});continue}if(rm(m)){var k=typeof m.style=="string"?t.date[m.style]:ll(m.style)?m.style.parsedOptions:void 0;f.push({type:wn.literal,value:r.getDateTimeFormat(i,k).format(y)});continue}if(tm(m)){var k=typeof m.style=="string"?t.time[m.style]:ll(m.style)?m.style.parsedOptions:t.time.medium;f.push({type:wn.literal,value:r.getDateTimeFormat(i,k).format(y)});continue}if(nm(m)){var k=typeof m.style=="string"?t.number[m.style]:om(m.style)?m.style.parsedOptions:void 0;k&&k.scale&&(y=y*(k.scale||1)),f.push({type:wn.literal,value:r.getNumberFormat(i,k).format(y)});continue}if(sm(m)){var x=m.children,_=m.value,A=s[_];if(!vm(A))throw new SR(_,"function",u);var R=Ui(x,i,r,t,s,l),S=A(R.map(function(I){return I.value}));Array.isArray(S)||(S=[S]),f.push.apply(f,S.map(function(I){return{type:typeof I=="string"?wn.literal:wn.object,value:I}}))}if(am(m)){var P=m.options[y]||m.options.other;if(!P)throw new Lg(m.value,y,Object.keys(m.options),u);f.push.apply(f,Ui(P.value,i,r,t,s));continue}if(im(m)){var P=m.options["=".concat(y)];if(!P){if(!Intl.PluralRules)throw new nt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Rr.MISSING_INTL_API,u);var D=r.getPluralRules(i,{type:m.pluralType}).select(y-(m.offset||0));P=m.options[D]||m.options.other}if(!P)throw new Lg(m.value,y,Object.keys(m.options),u);f.push.apply(f,Ui(P.value,i,r,t,s,y-(m.offset||0)));continue}}return xR(f)}function NR(e,i){return i?ge(ge(ge({},e||{}),i||{}),Object.keys(e).reduce(function(r,t){return r[t]=ge(ge({},e[t]),i[t]||{}),r},{})):e}function qR(e,i){return i?Object.keys(e).reduce(function(r,t){return r[t]=NR(e[t],i[t]),r},ge({},e)):e}function Wo(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function MR(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:kr(function(){for(var i,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((i=Intl.NumberFormat).bind.apply(i,_r([void 0],r,!1)))},{cache:Wo(e.number),strategy:Ar.variadic}),getDateTimeFormat:kr(function(){for(var i,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((i=Intl.DateTimeFormat).bind.apply(i,_r([void 0],r,!1)))},{cache:Wo(e.dateTime),strategy:Ar.variadic}),getPluralRules:kr(function(){for(var i,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((i=Intl.PluralRules).bind.apply(i,_r([void 0],r,!1)))},{cache:Wo(e.pluralRules),strategy:Ar.variadic})}}var hm=function(){function e(i,r,t,s){r===void 0&&(r=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var v=l.formatToParts(c);if(v.length===1)return v[0].value;var m=v.reduce(function(p,y){return!p.length||y.type!==wn.literal||typeof p[p.length-1]!="string"?p.push(y.value):p[p.length-1]+=y.value,p},[]);return m.length<=1?m[0]||"":m},this.formatToParts=function(c){return Ui(l.ast,l.locales,l.formatters,l.formats,c,void 0,l.message)},this.resolvedOptions=function(){var c;return{locale:((c=l.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=s||{};u.formatters;var f=fs(u,["formatters"]);this.ast=e.__parse(i,ge(ge({},f),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=qR(e.formats,t),this.formatters=s&&s.formatters||MR(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(i);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=OR,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Tt;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Tt||(Tt={}));var Da=function(e){hr(i,e);function i(r,t,s){var l=this,u=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(t,`
`).concat(u?`
`.concat(u.message,`
`).concat(u.stack):""))||this,l.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),BR=function(e){hr(i,e);function i(r,t){return e.call(this,Tt.UNSUPPORTED_FORMATTER,r,t)||this}return i}(Da),FR=function(e){hr(i,e);function i(r,t){return e.call(this,Tt.INVALID_CONFIG,r,t)||this}return i}(Da),jg=function(e){hr(i,e);function i(r,t){return e.call(this,Tt.MISSING_DATA,r,t)||this}return i}(Da),ir=function(e){hr(i,e);function i(r,t,s){var l=e.call(this,Tt.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(t,`
`),s)||this;return l.locale=t,l}return i}(Da),zo=function(e){hr(i,e);function i(r,t,s,l){var u=e.call(this,"".concat(r,`
MessageID: `).concat(s?.id,`
Default Message: `).concat(s?.defaultMessage,`
Description: `).concat(s?.description,`
`),t,l)||this;return u.descriptor=s,u.locale=t,u}return i}(ir),LR=function(e){hr(i,e);function i(r,t){var s=e.call(this,Tt.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(t,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(l){var u;return(u=l.value)!==null&&u!==void 0?u:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=r,s}return i}(Da);function jR(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function Xt(e,i,r){return r===void 0&&(r={}),i.reduce(function(t,s){return s in e?t[s]=e[s]:s in r&&(t[s]=r[s]),t},{})}var DR=function(e){},CR=function(e){},bm={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:DR,onWarn:CR};function pm(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function ct(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function VR(e){e===void 0&&(e=pm());var i=Intl.RelativeTimeFormat,r=Intl.ListFormat,t=Intl.DisplayNames,s=kr(function(){for(var f,c=[],v=0;v<arguments.length;v++)c[v]=arguments[v];return new((f=Intl.DateTimeFormat).bind.apply(f,_r([void 0],c,!1)))},{cache:ct(e.dateTime),strategy:Ar.variadic}),l=kr(function(){for(var f,c=[],v=0;v<arguments.length;v++)c[v]=arguments[v];return new((f=Intl.NumberFormat).bind.apply(f,_r([void 0],c,!1)))},{cache:ct(e.number),strategy:Ar.variadic}),u=kr(function(){for(var f,c=[],v=0;v<arguments.length;v++)c[v]=arguments[v];return new((f=Intl.PluralRules).bind.apply(f,_r([void 0],c,!1)))},{cache:ct(e.pluralRules),strategy:Ar.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:kr(function(f,c,v,m){return new hm(f,c,v,ge({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:u}},m||{}))},{cache:ct(e.message),strategy:Ar.variadic}),getRelativeTimeFormat:kr(function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return new(i.bind.apply(i,_r([void 0],f,!1)))},{cache:ct(e.relativeTime),strategy:Ar.variadic}),getPluralRules:u,getListFormat:kr(function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return new(r.bind.apply(r,_r([void 0],f,!1)))},{cache:ct(e.list),strategy:Ar.variadic}),getDisplayNames:kr(function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return new(t.bind.apply(t,_r([void 0],f,!1)))},{cache:ct(e.displayNames),strategy:Ar.variadic})}}function Gl(e,i,r,t){var s=e&&e[i],l;if(s&&(l=s[r]),l)return l;t(new BR("No ".concat(i," format named: ").concat(r)))}function Fi(e,i){return Object.keys(e).reduce(function(r,t){return r[t]=ge({timeZone:i},e[t]),r},{})}function Dg(e,i){var r=Object.keys(ge(ge({},e),i));return r.reduce(function(t,s){return t[s]=ge(ge({},e[s]||{}),i[s]||{}),t},{})}function Cg(e,i){if(!i)return e;var r=hm.formats;return ge(ge(ge({},r),e),{date:Dg(Fi(r.date,i),Fi(e.date||{},i)),time:Dg(Fi(r.time,i),Fi(e.time||{},i))})}var ml=function(e,i,r,t,s){var l=e.locale,u=e.formats,f=e.messages,c=e.defaultLocale,v=e.defaultFormats,m=e.fallbackOnEmptyString,p=e.onError,y=e.timeZone,k=e.defaultRichTextElements;r===void 0&&(r={id:""});var x=r.id,_=r.defaultMessage;jR(!!x,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var A=String(x),R=f&&Object.prototype.hasOwnProperty.call(f,A)&&f[A];if(Array.isArray(R)&&R.length===1&&R[0].type===ze.literal)return R[0].value;if(!t&&R&&typeof R=="string"&&!k)return R.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=ge(ge({},k),t||{}),u=Cg(u,y),v=Cg(v,y),!R){if(m===!1&&R==="")return R;if((!_||l&&l.toLowerCase()!==c.toLowerCase())&&p(new LR(r,l)),_)try{var S=i.getMessageFormat(_,c,v,s);return S.format(t)}catch(P){return p(new zo('Error formatting default message for: "'.concat(A,'", rendering default message verbatim'),l,r,P)),typeof _=="string"?_:A}return A}try{var S=i.getMessageFormat(R,l,u,ge({formatters:i},s||{}));return S.format(t)}catch(P){p(new zo('Error formatting message: "'.concat(A,'", using ').concat(_?"default message":"id"," as fallback."),l,r,P))}if(_)try{var S=i.getMessageFormat(_,c,v,s);return S.format(t)}catch(P){p(new zo('Error formatting the default message for: "'.concat(A,'", rendering message verbatim'),l,r,P))}return typeof R=="string"?R:typeof _=="string"?_:A},HR=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ca(e,i,r,t){var s=e.locale,l=e.formats,u=e.onError,f=e.timeZone;t===void 0&&(t={});var c=t.format,v=ge(ge({},f&&{timeZone:f}),c&&Gl(l,i,c,u)),m=Xt(t,HR,v);return i==="time"&&!m.hour&&!m.minute&&!m.second&&!m.timeStyle&&!m.dateStyle&&(m=ge(ge({},m),{hour:"numeric",minute:"numeric"})),r(s,m)}function GR(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],l=r[1],u=l===void 0?{}:l,f=typeof s=="string"?new Date(s||0):s;try{return Ca(e,"date",i,u).format(f)}catch(c){e.onError(new ir("Error formatting date.",e.locale,c))}return String(f)}function UR(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],l=r[1],u=l===void 0?{}:l,f=typeof s=="string"?new Date(s||0):s;try{return Ca(e,"time",i,u).format(f)}catch(c){e.onError(new ir("Error formatting time.",e.locale,c))}return String(f)}function $R(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],l=r[1],u=r[2],f=u===void 0?{}:u,c=typeof s=="string"?new Date(s||0):s,v=typeof l=="string"?new Date(l||0):l;try{return Ca(e,"dateTimeRange",i,f).formatRange(c,v)}catch(m){e.onError(new ir("Error formatting date time range.",e.locale,m))}return String(c)}function KR(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],l=r[1],u=l===void 0?{}:l,f=typeof s=="string"?new Date(s||0):s;try{return Ca(e,"date",i,u).formatToParts(f)}catch(c){e.onError(new ir("Error formatting date.",e.locale,c))}return[]}function YR(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var s=r[0],l=r[1],u=l===void 0?{}:l,f=typeof s=="string"?new Date(s||0):s;try{return Ca(e,"time",i,u).formatToParts(f)}catch(c){e.onError(new ir("Error formatting time.",e.locale,c))}return[]}var WR=["style","type","fallback","languageDisplay"];function zR(e,i,r,t){var s=e.locale,l=e.onError,u=Intl.DisplayNames;u||l(new nt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Rr.MISSING_INTL_API));var f=Xt(t,WR);try{return i(s,f).of(r)}catch(c){l(new ir("Error formatting display name.",s,c))}}var XR=["type","style"],Vg=Date.now();function ZR(e){return"".concat(Vg,"_").concat(e,"_").concat(Vg)}function JR(e,i,r,t){t===void 0&&(t={});var s=ym(e,i,r,t).reduce(function(l,u){var f=u.value;return typeof f!="string"?l.push(f):typeof l[l.length-1]=="string"?l[l.length-1]+=f:l.push(f),l},[]);return s.length===1?s[0]:s.length===0?"":s}function ym(e,i,r,t){var s=e.locale,l=e.onError;t===void 0&&(t={});var u=Intl.ListFormat;u||l(new nt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Rr.MISSING_INTL_API));var f=Xt(t,XR);try{var c={},v=r.map(function(m,p){if(typeof m=="object"){var y=ZR(p);return c[y]=m,y}return String(m)});return i(s,f).formatToParts(v).map(function(m){return m.type==="literal"?m:ge(ge({},m),{value:c[m.value]||m.value})})}catch(m){l(new ir("Error formatting list.",s,m))}return r}var QR=["type"];function eP(e,i,r,t){var s=e.locale,l=e.onError;t===void 0&&(t={}),Intl.PluralRules||l(new nt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Rr.MISSING_INTL_API));var u=Xt(t,QR);try{return i(s,u).select(r)}catch(f){l(new ir("Error formatting plural.",s,f))}return"other"}var nP=["numeric","style"];function rP(e,i,r){var t=e.locale,s=e.formats,l=e.onError;r===void 0&&(r={});var u=r.format,f=!!u&&Gl(s,"relative",u,l)||{},c=Xt(r,nP,f);return i(t,c)}function tP(e,i,r,t,s){s===void 0&&(s={}),t||(t="second");var l=Intl.RelativeTimeFormat;l||e.onError(new nt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Rr.MISSING_INTL_API));try{return rP(e,i,s).format(r,t)}catch(u){e.onError(new ir("Error formatting relative time.",e.locale,u))}return String(r)}var aP=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function km(e,i,r){var t=e.locale,s=e.formats,l=e.onError;r===void 0&&(r={});var u=r.format,f=u&&Gl(s,"number",u,l)||{},c=Xt(r,aP,f);return i(t,c)}function iP(e,i,r,t){t===void 0&&(t={});try{return km(e,i,t).format(r)}catch(s){e.onError(new ir("Error formatting number.",e.locale,s))}return String(r)}function sP(e,i,r,t){t===void 0&&(t={});try{return km(e,i,t).formatToParts(r)}catch(s){e.onError(new ir("Error formatting number.",e.locale,s))}return[]}function oP(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function lP(e){e.onWarn&&e.defaultRichTextElements&&oP(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function uP(e,i){var r=VR(i),t=ge(ge({},bm),e),s=t.locale,l=t.defaultLocale,u=t.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&u?u(new jg('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&u&&u(new jg('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(u&&u(new FR('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),lP(t),ge(ge({},t),{formatters:r,formatNumber:iP.bind(null,t,r.getNumberFormat),formatNumberToParts:sP.bind(null,t,r.getNumberFormat),formatRelativeTime:tP.bind(null,t,r.getRelativeTimeFormat),formatDate:GR.bind(null,t,r.getDateTimeFormat),formatDateToParts:KR.bind(null,t,r.getDateTimeFormat),formatTime:UR.bind(null,t,r.getDateTimeFormat),formatDateTimeRange:$R.bind(null,t,r.getDateTimeFormat),formatTimeToParts:YR.bind(null,t,r.getDateTimeFormat),formatPlural:eP.bind(null,t,r.getPluralRules),formatMessage:ml.bind(null,t,r),$t:ml.bind(null,t,r),formatList:JR.bind(null,t,r.getListFormat),formatListToParts:ym.bind(null,t,r.getListFormat),formatDisplayName:zR.bind(null,t,r.getDisplayNames)})}function dP(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function fP(e){dP(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var gP=ge(ge({},bm),{textComponent:E.Fragment}),cP={key:42},mP=function(e){return E.isValidElement(e)?E.createElement(E.Fragment,cP,e):e},vP=function(e){var i;return(i=E.Children.map(e,mP))!==null&&i!==void 0?i:[]};function hP(e){return function(i){return e(E.Children.toArray(i))}}var Hg={exports:{}},Le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function bP(){if(Gg)return Le;Gg=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,v=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,k=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,_=e?Symbol.for("react.block"):60121,A=e?Symbol.for("react.fundamental"):60117,R=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function P(I){if(typeof I=="object"&&I!==null){var H=I.$$typeof;switch(H){case i:switch(I=I.type,I){case c:case v:case t:case l:case s:case p:return I;default:switch(I=I&&I.$$typeof,I){case f:case m:case x:case k:case u:return I;default:return H}}case r:return H}}}function D(I){return P(I)===v}return Le.AsyncMode=c,Le.ConcurrentMode=v,Le.ContextConsumer=f,Le.ContextProvider=u,Le.Element=i,Le.ForwardRef=m,Le.Fragment=t,Le.Lazy=x,Le.Memo=k,Le.Portal=r,Le.Profiler=l,Le.StrictMode=s,Le.Suspense=p,Le.isAsyncMode=function(I){return D(I)||P(I)===c},Le.isConcurrentMode=D,Le.isContextConsumer=function(I){return P(I)===f},Le.isContextProvider=function(I){return P(I)===u},Le.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===i},Le.isForwardRef=function(I){return P(I)===m},Le.isFragment=function(I){return P(I)===t},Le.isLazy=function(I){return P(I)===x},Le.isMemo=function(I){return P(I)===k},Le.isPortal=function(I){return P(I)===r},Le.isProfiler=function(I){return P(I)===l},Le.isStrictMode=function(I){return P(I)===s},Le.isSuspense=function(I){return P(I)===p},Le.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===t||I===v||I===l||I===s||I===p||I===y||typeof I=="object"&&I!==null&&(I.$$typeof===x||I.$$typeof===k||I.$$typeof===u||I.$$typeof===f||I.$$typeof===m||I.$$typeof===A||I.$$typeof===R||I.$$typeof===S||I.$$typeof===_)},Le.typeOf=P,Le}var Ug;function pP(){return Ug||(Ug=1,Hg.exports=bP()),Hg.exports}var Xo,$g;function yP(){if($g)return Xo;$g=1;var e=pP(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=t,l[e.Memo]=s;function u(x){return e.isMemo(x)?s:l[x.$$typeof]||i}var f=Object.defineProperty,c=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;function k(x,_,A){if(typeof _!="string"){if(y){var R=p(_);R&&R!==y&&k(x,R,A)}var S=c(_);v&&(S=S.concat(v(_)));for(var P=u(x),D=u(_),I=0;I<S.length;++I){var H=S[I];if(!r[H]&&!(A&&A[H])&&!(D&&D[H])&&!(P&&P[H])){var j=m(_,H);try{f(x,H,j)}catch{}}}}return x}return Xo=k,Xo}yP();var Ul=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=E.createContext(null)):E.createContext(null);Ul.Consumer;Ul.Provider;var kP=Ul;function Am(){var e=E.useContext(kP);return fP(e),e}var vl;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(vl||(vl={}));var hl;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(hl||(hl={}));function _m(e){var i=function(r){var t=Am(),s=r.value,l=r.children,u=fs(r,["value","children"]),f=typeof s=="string"?new Date(s||0):s,c=e==="formatDate"?t.formatDateToParts(f,u):t.formatTimeToParts(f,u);return l(c)};return i.displayName=hl[e],i}function Va(e){var i=function(r){var t=Am(),s=r.value,l=r.children,u=fs(r,["value","children"]),f=t[e](s,u);if(typeof l=="function")return l(f);var c=t.textComponent||E.Fragment;return E.createElement(c,null,f)};return i.displayName=vl[e],i}function Tm(e){return e&&Object.keys(e).reduce(function(i,r){var t=e[r];return i[r]=vm(t)?hP(t):t,i},{})}var Kg=function(e,i,r,t){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var u=Tm(t),f=ml.apply(void 0,_r([e,i,r,u],s,!1));return Array.isArray(f)?vP(f):f},AP=function(e,i){var r=e.defaultRichTextElements,t=fs(e,["defaultRichTextElements"]),s=Tm(r),l=uP(ge(ge(ge({},gP),t),{defaultRichTextElements:s}),i),u={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ge(ge({},l),{formatMessage:Kg.bind(null,u,l.formatters),$t:Kg.bind(null,u,l.formatters)})};Va("formatDate");Va("formatTime");Va("formatNumber");Va("formatList");Va("formatDisplayName");_m("formatDate");_m("formatTime");function $l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bl={exports:{}},_P=bl.exports,Yg;function TP(){return Yg||(Yg=1,function(e,i){(function(r,t){e.exports=t()})(_P,function(){var r,t,s=1e3,l=6e4,u=36e5,f=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v=31536e6,m=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:v,months:m,days:f,hours:u,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},k=function(H){return H instanceof D},x=function(H,j,C){return new D(H,C,j.$l)},_=function(H){return t.p(H)+"s"},A=function(H){return H<0},R=function(H){return A(H)?Math.ceil(H):Math.floor(H)},S=function(H){return Math.abs(H)},P=function(H,j){return H?A(H)?{negative:!0,format:""+S(H)+j}:{negative:!1,format:""+H+j}:{negative:!1,format:""}},D=function(){function H(C,K,ne){var ee=this;if(this.$d={},this.$l=ne,C===void 0&&(this.$ms=0,this.parseFromMilliseconds()),K)return x(C*y[_(K)],this);if(typeof C=="number")return this.$ms=C,this.parseFromMilliseconds(),this;if(typeof C=="object")return Object.keys(C).forEach(function(L){ee.$d[_(L)]=C[L]}),this.calMilliseconds(),this;if(typeof C=="string"){var G=C.match(p);if(G){var F=G.slice(2).map(function(L){return L!=null?Number(L):0});return this.$d.years=F[0],this.$d.months=F[1],this.$d.weeks=F[2],this.$d.days=F[3],this.$d.hours=F[4],this.$d.minutes=F[5],this.$d.seconds=F[6],this.calMilliseconds(),this}}return this}var j=H.prototype;return j.calMilliseconds=function(){var C=this;this.$ms=Object.keys(this.$d).reduce(function(K,ne){return K+(C.$d[ne]||0)*y[ne]},0)},j.parseFromMilliseconds=function(){var C=this.$ms;this.$d.years=R(C/v),C%=v,this.$d.months=R(C/m),C%=m,this.$d.days=R(C/f),C%=f,this.$d.hours=R(C/u),C%=u,this.$d.minutes=R(C/l),C%=l,this.$d.seconds=R(C/s),C%=s,this.$d.milliseconds=C},j.toISOString=function(){var C=P(this.$d.years,"Y"),K=P(this.$d.months,"M"),ne=+this.$d.days||0;this.$d.weeks&&(ne+=7*this.$d.weeks);var ee=P(ne,"D"),G=P(this.$d.hours,"H"),F=P(this.$d.minutes,"M"),L=this.$d.seconds||0;this.$d.milliseconds&&(L+=this.$d.milliseconds/1e3,L=Math.round(1e3*L)/1e3);var X=P(L,"S"),re=C.negative||K.negative||ee.negative||G.negative||F.negative||X.negative,J=G.format||F.format||X.format?"T":"",z=(re?"-":"")+"P"+C.format+K.format+ee.format+J+G.format+F.format+X.format;return z==="P"||z==="-P"?"P0D":z},j.toJSON=function(){return this.toISOString()},j.format=function(C){var K=C||"YYYY-MM-DDTHH:mm:ss",ne={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return K.replace(c,function(ee,G){return G||String(ne[ee])})},j.as=function(C){return this.$ms/y[_(C)]},j.get=function(C){var K=this.$ms,ne=_(C);return ne==="milliseconds"?K%=1e3:K=ne==="weeks"?R(K/y[ne]):this.$d[ne],K||0},j.add=function(C,K,ne){var ee;return ee=K?C*y[_(K)]:k(C)?C.$ms:x(C,this).$ms,x(this.$ms+ee*(ne?-1:1),this)},j.subtract=function(C,K){return this.add(C,K,!0)},j.locale=function(C){var K=this.clone();return K.$l=C,K},j.clone=function(){return x(this.$ms,this)},j.humanize=function(C){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!C)},j.valueOf=function(){return this.asMilliseconds()},j.milliseconds=function(){return this.get("milliseconds")},j.asMilliseconds=function(){return this.as("milliseconds")},j.seconds=function(){return this.get("seconds")},j.asSeconds=function(){return this.as("seconds")},j.minutes=function(){return this.get("minutes")},j.asMinutes=function(){return this.as("minutes")},j.hours=function(){return this.get("hours")},j.asHours=function(){return this.as("hours")},j.days=function(){return this.get("days")},j.asDays=function(){return this.as("days")},j.weeks=function(){return this.get("weeks")},j.asWeeks=function(){return this.as("weeks")},j.months=function(){return this.get("months")},j.asMonths=function(){return this.as("months")},j.years=function(){return this.get("years")},j.asYears=function(){return this.as("years")},H}(),I=function(H,j,C){return H.add(j.years()*C,"y").add(j.months()*C,"M").add(j.days()*C,"d").add(j.hours()*C,"h").add(j.minutes()*C,"m").add(j.seconds()*C,"s").add(j.milliseconds()*C,"ms")};return function(H,j,C){r=C,t=C().$utils(),C.duration=function(ee,G){var F=C.locale();return x(ee,{$l:F},G)},C.isDuration=k;var K=j.prototype.add,ne=j.prototype.subtract;j.prototype.add=function(ee,G){return k(ee)?I(this,ee,1):K.bind(this)(ee,G)},j.prototype.subtract=function(ee,G){return k(ee)?I(this,ee,-1):ne.bind(this)(ee,G)}}})}(bl)),bl.exports}var EP=TP();const wP=$l(EP);var pl={exports:{}},RP=pl.exports,Wg;function PP(){return Wg||(Wg=1,function(e,i){(function(r,t){e.exports=t()})(RP,function(){var r="day";return function(t,s,l){var u=function(v){return v.add(4-v.isoWeekday(),r)},f=s.prototype;f.isoWeekYear=function(){return u(this).year()},f.isoWeek=function(v){if(!this.$utils().u(v))return this.add(7*(v-this.isoWeek()),r);var m,p,y,k,x=u(this),_=(m=this.isoWeekYear(),p=this.$u,y=(p?l.utc:l)().year(m).startOf("year"),k=4-y.isoWeekday(),y.isoWeekday()>4&&(k+=7),y.add(k,r));return x.diff(_,"week")+1},f.isoWeekday=function(v){return this.$utils().u(v)?this.day()||7:this.day(this.day()%7?v:v-7)};var c=f.startOf;f.startOf=function(v,m){var p=this.$utils(),y=!!p.u(m)||m;return p.p(v)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(v,m)}}})}(pl)),pl.exports}var OP=PP();const SP=$l(OP);var yl={exports:{}},IP=yl.exports,zg;function xP(){return zg||(zg=1,function(e,i){(function(r,t){e.exports=t()})(IP,function(){var r="minute",t=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,u,f){var c=u.prototype;f.utc=function(_){var A={date:_,utc:!0,args:arguments};return new u(A)},c.utc=function(_){var A=f(this.toDate(),{locale:this.$L,utc:!0});return _?A.add(this.utcOffset(),r):A},c.local=function(){return f(this.toDate(),{locale:this.$L,utc:!1})};var v=c.parse;c.parse=function(_){_.utc&&(this.$u=!0),this.$utils().u(_.$offset)||(this.$offset=_.$offset),v.call(this,_)};var m=c.init;c.init=function(){if(this.$u){var _=this.$d;this.$y=_.getUTCFullYear(),this.$M=_.getUTCMonth(),this.$D=_.getUTCDate(),this.$W=_.getUTCDay(),this.$H=_.getUTCHours(),this.$m=_.getUTCMinutes(),this.$s=_.getUTCSeconds(),this.$ms=_.getUTCMilliseconds()}else m.call(this)};var p=c.utcOffset;c.utcOffset=function(_,A){var R=this.$utils().u;if(R(_))return this.$u?0:R(this.$offset)?p.call(this):this.$offset;if(typeof _=="string"&&(_=function(I){I===void 0&&(I="");var H=I.match(t);if(!H)return null;var j=(""+H[0]).match(s)||["-",0,0],C=j[0],K=60*+j[1]+ +j[2];return K===0?0:C==="+"?K:-K}(_),_===null))return this;var S=Math.abs(_)<=16?60*_:_,P=this;if(A)return P.$offset=S,P.$u=_===0,P;if(_!==0){var D=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(P=this.local().add(S+D,r)).$offset=S,P.$x.$localOffset=D}else P=this.utc();return P};var y=c.format;c.format=function(_){var A=_||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,A)},c.valueOf=function(){var _=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*_},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var k=c.toDate;c.toDate=function(_){return _==="s"&&this.$offset?f(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():k.call(this)};var x=c.diff;c.diff=function(_,A,R){if(_&&this.$u===_.$u)return x.call(this,_,A,R);var S=this.local(),P=f(_).local();return x.call(S,P,A,R)}}})}(yl)),yl.exports}var NP=xP();const qP=$l(NP),MP=pm(),gs=e=>AP({locale:"nb-NO",messages:e},MP),cs={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};gs(cs);var kl={exports:{}},BP=kl.exports,Xg;function FP(){return Xg||(Xg=1,function(e,i){(function(r,t){e.exports=t(Hr)})(BP,function(r){function t(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var s=t(r),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})}(kl)),kl.exports}FP();Hr.extend(qP);Hr.extend(SP);Hr.extend(wP);gs(cs);gs(cs);var Zg={exports:{}},Ta={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function LP(){if(Jg)return Ta;Jg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(t,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:u,ref:s!==void 0?s:null,props:l}}return Ta.Fragment=i,Ta.jsx=r,Ta.jsxs=r,Ta}var Qg;function jP(){return Qg||(Qg=1,Zg.exports=LP()),Zg.exports}jP();gs(cs);E.createContext({});var Al={exports:{}},DP=Al.exports,ec;function CP(){return ec||(ec=1,function(e,i){(function(r,t){e.exports=t()})(DP,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,u=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,c={},v=function(A){return(A=+A)+(A>68?1900:2e3)},m=function(A){return function(R){this[A]=+R}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(A){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var S=R.match(/([+-]|\d\d)/g),P=60*S[1]+(+S[2]||0);return P===0?0:S[0]==="+"?-P:P}(A)}],y=function(A){var R=c[A];return R&&(R.indexOf?R:R.s.concat(R.f))},k=function(A,R){var S,P=c.meridiem;if(P){for(var D=1;D<=24;D+=1)if(A.indexOf(P(D,0,R))>-1){S=D>12;break}}else S=A===(R?"pm":"PM");return S},x={A:[f,function(A){this.afternoon=k(A,!1)}],a:[f,function(A){this.afternoon=k(A,!0)}],Q:[s,function(A){this.month=3*(A-1)+1}],S:[s,function(A){this.milliseconds=100*+A}],SS:[l,function(A){this.milliseconds=10*+A}],SSS:[/\d{3}/,function(A){this.milliseconds=+A}],s:[u,m("seconds")],ss:[u,m("seconds")],m:[u,m("minutes")],mm:[u,m("minutes")],H:[u,m("hours")],h:[u,m("hours")],HH:[u,m("hours")],hh:[u,m("hours")],D:[u,m("day")],DD:[l,m("day")],Do:[f,function(A){var R=c.ordinal,S=A.match(/\d+/);if(this.day=S[0],R)for(var P=1;P<=31;P+=1)R(P).replace(/\[|\]/g,"")===A&&(this.day=P)}],w:[u,m("week")],ww:[l,m("week")],M:[u,m("month")],MM:[l,m("month")],MMM:[f,function(A){var R=y("months"),S=(y("monthsShort")||R.map(function(P){return P.slice(0,3)})).indexOf(A)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[f,function(A){var R=y("months").indexOf(A)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(A){this.year=v(A)}],YYYY:[/\d{4}/,m("year")],Z:p,ZZ:p};function _(A){var R,S;R=A,S=c&&c.formats;for(var P=(A=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(ne,ee,G){var F=G&&G.toUpperCase();return ee||S[G]||r[G]||S[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,X,re){return X||re.slice(1)})})).match(t),D=P.length,I=0;I<D;I+=1){var H=P[I],j=x[H],C=j&&j[0],K=j&&j[1];P[I]=K?{regex:C,parser:K}:H.replace(/^\[|\]$/g,"")}return function(ne){for(var ee={},G=0,F=0;G<D;G+=1){var L=P[G];if(typeof L=="string")F+=L.length;else{var X=L.regex,re=L.parser,J=ne.slice(F),z=X.exec(J)[0];re.call(ee,z),ne=ne.replace(z,"")}}return function(Z){var de=Z.afternoon;if(de!==void 0){var le=Z.hours;de?le<12&&(Z.hours+=12):le===12&&(Z.hours=0),delete Z.afternoon}}(ee),ee}}return function(A,R,S){S.p.customParseFormat=!0,A&&A.parseTwoDigitYear&&(v=A.parseTwoDigitYear);var P=R.prototype,D=P.parse;P.parse=function(I){var H=I.date,j=I.utc,C=I.args;this.$u=j;var K=C[1];if(typeof K=="string"){var ne=C[2]===!0,ee=C[3]===!0,G=ne||ee,F=C[2];ee&&(F=C[2]),c=this.$locale(),!ne&&F&&(c=S.Ls[F]),this.$d=function(J,z,Z,de){try{if(["x","X"].indexOf(z)>-1)return new Date((z==="X"?1e3:1)*J);var le=_(z)(J),ve=le.year,Ae=le.month,An=le.day,Ye=le.hours,Ve=le.minutes,He=le.seconds,Ee=le.milliseconds,Ne=le.zone,nn=le.week,Xe=new Date,Ze=An||(ve||Ae?1:Xe.getDate()),Pn=ve||Xe.getFullYear(),Ge=0;ve&&!Ae||(Ge=Ae>0?Ae-1:Xe.getMonth());var on,sr=Ye||0,un=Ve||0,or=He||0,$n=Ee||0;return Ne?new Date(Date.UTC(Pn,Ge,Ze,sr,un,or,$n+60*Ne.offset*1e3)):Z?new Date(Date.UTC(Pn,Ge,Ze,sr,un,or,$n)):(on=new Date(Pn,Ge,Ze,sr,un,or,$n),nn&&(on=de(on).week(nn).toDate()),on)}catch{return new Date("")}}(H,K,j,S),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),G&&H!=this.format(K)&&(this.$d=new Date("")),c={}}else if(K instanceof Array)for(var L=K.length,X=1;X<=L;X+=1){C[1]=K[X-1];var re=S.apply(this,C);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}X===L&&(this.$d=new Date(""))}else D.call(this,I)}}})}(Al)),Al.exports}var VP=CP();const HP=jw(VP);Hr.extend(HP);vr(La);const Em=({aksjonspunkt:e,readOnly:i,submittable:r,submitCallback:t})=>{const[s,l]=E.useState(!1),{mellomlagretFormData:u,setMellomlagretFormData:f}=hA(),c=sw({defaultValues:u??GP(e)}),v=c.watch("begrunnelse");return ie.jsxs(_t,{gap:"4",children:[e.status===Ia.OPPRETTET&&ie.jsx(fE,{children:[ie.jsx(Bn,{id:"BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll"},"BesteberegningAksjonspunktTekst")]}),ie.jsx(_w,{formMethods:c,onSubmit:m=>t(UP(m)),setDataOnUnmount:f,children:ie.jsxs(_t,{gap:"4",children:[ie.jsx(dw,{name:"besteberegningErKorrektValg",control:c.control,label:ie.jsx(Bn,{id:"BesteberegningProsessPanel.Aksjonspunkt.Radiotekst"}),readOnly:i,onChange:()=>l(!s)}),ie.jsx(ja,{control:c.control,isSubmittable:r,isReadOnly:i,hasBegrunnelse:!!v,hasVurderingText:!0}),ie.jsx(Zc,{isSubmittable:r&&s,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isDirty,isReadOnly:i})]})})]})},GP=e=>{const i=e.status===Ia.UTFORT;return{...ja.initialValues(e),besteberegningErKorrektValg:i?!0:void 0}},UP=e=>({kode:bt.MANUELL_KONTROLL_AV_BESTEBEREGNING,begrunnelse:e.begrunnelse,besteberegningErKorrekt:!!e.besteberegningErKorrektValg});Em.__docgenInfo={description:`KontrollerBesteberegningPanel

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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const wm=({beregningsgrunnlag:e,arbeidsgiverOpplysninger:i,submittable:r})=>{const{alleKodeverk:t,aksjonspunkterForPanel:s,submitCallback:l,isReadOnly:u}=bA(),{ytelsesspesifiktGrunnlag:f,beregningsgrunnlagPeriode:c}=e,v=f?.besteberegninggrunnlag;if(!v)return null;const m=c[0],p=s.find(y=>y.definisjon===bt.KONTROLLER_AUTOMATISK_BESTEBEREGNING||y.definisjon===bt.MANUELL_KONTROLL_AV_BESTEBEREGNING);return ie.jsxs(_t,{gap:"4",children:[!!p&&ie.jsx(Em,{aksjonspunkt:p,submitCallback:l,submittable:r,readOnly:u}),ie.jsx(tg,{children:ie.jsx(Fc,{periode:m,besteMåneder:v.besteMåneder})}),ie.jsx(tg,{children:ie.jsx(Lc,{besteMåneder:v.besteMåneder,arbeidsgiverOpplysninger:i,alleKodeverk:t})})]})};wm.__docgenInfo={description:`BesteberegningPanel

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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const $P={"BesteberegningProsessPanel.Måned.Inntekt.Aktivitet":"Aktivitet","BesteberegningProsessPanel.Måned.Inntekt.Inntekt":"Inntekt","Inntekttabell.Tittel":"Inntektsgrunnlag for besteberegning","Inntekttabell.Sum":"Total for måned","Inntekttabell.BeregnetÅrsinntekt":"Beregnet årsinntekt: {inntekt}","ResultatGrunnlag.BruttoBeregningsgrunnlag":"Brutto beregningsgrunnlag","ResultatGrunnlag.BeregningEtterBesteberegning":"Beregning etter § 14-7, 3. ledd","ResultatGrunnlag.BeregningEtterKap8":"Beregning etter § 14-7, 1. ledd","ResultatGrunnlag.Kap8GirBesteBeregning":"Beregning etter § 14-7, 1. ledd gir beste beregning.","ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter § 14-7, 3. ledd gir beste beregning.","BesteberegningProsessPanel.Aksjonspunkt.Radiotekst":"Beregningen er riktig, fortsett behandlingen.","BesteberegningProsessPanel.Aksjonspunkt.HelpText":"Saken er automatisk besteberegnet, vennligst kontroller beregningen","BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll":"Saken er tatt ut til kontroll på grunn av stort avvik mellom 3. og 1. ledd. Vennligst kontroller beregningen"},KP=vr($P),_l=e=>ie.jsx(El,{value:KP,children:ie.jsx(wm,{...e})});_l.__docgenInfo={description:"",methods:[],displayName:"BesteberegningFaktaIndex",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const YP={besteMåneder:[{fom:"2020-01-01",tom:"2020-01-31",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Nn.ARBEID,arbeidsgiverId:"974652269",inntekt:2e4}]},{fom:"2020-02-01",tom:"2020-02-29",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531}]},{fom:"2020-03-01",tom:"2020-03-31",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Nn.ARBEID,arbeidsgiverId:"974652269",inntekt:4321},{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:354},{opptjeningAktivitetType:Nn.ARBEID,arbeidsgiverId:"6823424234232",inntekt:32894}]},{fom:"2020-04-01",tom:"2020-04-30",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Nn.ARBEID,arbeidsgiverId:"974652269",inntekt:25322}]},{fom:"2020-05-01",tom:"2020-05-31",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:354},{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531}]},{fom:"2020-06-01",tom:"2020-06-30",inntekter:[{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Nn.DAGPENGER,inntekt:354}]}]},ms={avklaringsbehov:[],skjaeringstidspunktBeregning:"2020-01-13",aktivitetStatus:["AT","DP"],beregningsgrunnlagPeriode:[{beregningsgrunnlagPeriodeFom:"2020-01-13",beregnetPrAar:56e4,bruttoPrAar:75e4,bruttoInkludertBortfaltNaturalytelsePrAar:0,avkortetPrAar:6e5,redusertPrAar:6e5,periodeAarsaker:[],beregningsgrunnlagPrStatusOgAndel:[{aktivitetStatus:"AT",beregningsperiodeFom:"2019-10-01",beregningsperiodeTom:"2019-12-31",beregnetPrAar:36e4,andelsnr:1,besteberegningPrAar:4e5,inntektskategori:"ARBEIDSTAKER",arbeidsforhold:{arbeidsgiverNavn:"BEDRIFT AS",arbeidsgiverId:"974652269",startdato:"2019-02-03",opphoersdato:"2020-02-03",arbeidsforholdType:"ARBEID",belopFraInntektsmeldingPrMnd:3e4,organisasjonstype:"VIRKSOMHET"},lagtTilAvSaksbehandler:!1,erTilkommetAndel:!1,skalFastsetteGrunnlag:!1},{beregningsperiodeFom:"2019-10-01",beregningsperiodeTom:"2019-12-31",aktivitetStatus:"DP",beregnetPrAar:2e5,andelsnr:2,besteberegningPrAar:35e4,inntektskategori:"DAGPENGER",fastsattAvSaksbehandler:!1,lagtTilAvSaksbehandler:!1,belopPrMndEtterAOrdningen:1e4,belopPrAarEtterAOrdningen:12e4,erTilkommetAndel:!1,skalFastsetteGrunnlag:!1}]}],ytelsesspesifiktGrunnlag:{besteberegninggrunnlag:YP,ytelsetype:"FP"},sammenligningsgrunnlagPrStatus:[],grunnbeløp:99858,dekningsgrad:100,erOverstyrtInntekt:!1},WP={974652269:{erPrivatPerson:!1,navn:"BEDRIFT AS",identifikator:"974652269",referanse:"974652269"},6823424234232:{erPrivatPerson:!0,navn:"Testy Test",identifikator:"6823424234232",referanse:"123",fødselsdato:"1943-03-03"}},Kl=(e,i,r)=>({definisjon:e,status:i,kanLoses:!0,begrunnelse:r??null}),QP={title:"fakta/fakta-besteberegning",component:_l,decorators:[pA,yA],args:{submittable:!0,arbeidsgiverOpplysninger:WP},render:e=>ie.jsx(_l,{...e})},Li={args:{aksjonspunkterForPanel:[],beregningsgrunnlag:ms}},ji={args:{beregningsgrunnlag:ms,aksjonspunkterForPanel:[Kl(bt.KONTROLLER_AUTOMATISK_BESTEBEREGNING,Ia.OPPRETTET)]}},Di={args:{beregningsgrunnlag:ms,aksjonspunkterForPanel:[Kl(bt.KONTROLLER_AUTOMATISK_BESTEBEREGNING,Ia.UTFORT,"Min begrunnelse for at besteberegningen er feil")]}},Ci={args:{beregningsgrunnlag:ms,aksjonspunkterForPanel:[Kl(bt.MANUELL_KONTROLL_AV_BESTEBEREGNING,Ia.OPPRETTET)]}};Li.parameters={...Li.parameters,docs:{...Li.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    beregningsgrunnlag: scenarioBG
  }
}`,...Li.parameters?.docs?.source}}};ji.parameters={...ji.parameters,docs:{...ji.parameters?.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING, AksjonspunktStatus.OPPRETTET)]
  }
}`,...ji.parameters?.docs?.source}}};Di.parameters={...Di.parameters,docs:{...Di.parameters?.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING, AksjonspunktStatus.UTFORT, 'Min begrunnelse for at besteberegningen er feil')]
  }
}`,...Di.parameters?.docs?.source}}};Ci.parameters={...Ci.parameters,docs:{...Ci.parameters?.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING, AksjonspunktStatus.OPPRETTET)]
  }
}`,...Ci.parameters?.docs?.source}}};const eO=["BesteberegningMedDagpengerOgArbeid","BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt","BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent","BesteberegningMedAvvik"];export{Ci as BesteberegningMedAvvik,Li as BesteberegningMedDagpengerOgArbeid,Di as BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent,ji as BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt,eO as __namedExportsOrder,QP as default};
