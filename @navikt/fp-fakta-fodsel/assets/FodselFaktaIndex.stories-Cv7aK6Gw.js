var UT=Object.defineProperty;var WT=(e,r,n)=>r in e?UT(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var ce=(e,r,n)=>WT(e,typeof r!="symbol"?r+"":r,n);import{g as Ap,r as O,u as Si,_ as Sm,s as Em,c as Ls,a as ke,R as w,b as Ei,m as GT,d as Za,S as Qa,e as Np,f as $s,q as YT,o as lr,h as _t,i as ut,P as Ma,n as Ns,j as Q,k as Oi,l as zT,p as KT,t as Yo,B as Om,v as XT,w as ZT,x as QT,y as JT,A as Pp}from"./iframe-DRfDSGz7.js";import{r as eS}from"./index-CvlqQC6K.js";var md=eS();const Mp=Ap(md);function nS(e,r){var n=e.values,t=Sm(e,["values"]),a=r.values,i=Sm(r,["values"]);return Em(a,n)&&Em(t,i)}function Bp(e){var r=Si(),n=r.formatMessage,t=r.textComponent,a=t===void 0?O.Fragment:t,i=e.id,l=e.description,d=e.defaultMessage,c=e.values,m=e.children,g=e.tagName,p=g===void 0?a:g,y=e.ignoreTag,v={id:i,description:l,defaultMessage:d},D=n(v,c,{ignoreTag:y});return typeof m=="function"?m(Array.isArray(D)?D:[D]):p?O.createElement(p,null,D):O.createElement(O.Fragment,null,D)}Bp.displayName="FormattedMessage";var yn=O.memo(Bp,nS);yn.displayName="MemoizedFormattedMessage";var qt=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(qt||{});const oi=(e,r)=>r.some(n=>n.definisjon===e);var qp=(e=>(e.FODSEL="ST-001",e.ADOPSJON="ST-002",e))(qp||{});const tS=(e,r)=>{if(e==null)throw Error("Data er ikke oppgitt");return e},Ja=e=>Ls({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var rS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const jp=O.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:i,truncate:l,weight:d="regular",align:c,visuallyHidden:m,textColor:g}=e,p=rS(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=ke();return w.createElement(a,Object.assign({},p,{ref:r,className:y(n,"navds-body-long",`navds-body-long--${t}`,Ja({spacing:i,truncate:l,weight:d,align:c,visuallyHidden:m,textColor:g}))}))});var aS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const mn=O.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:i,truncate:l,weight:d="regular",align:c,visuallyHidden:m,textColor:g}=e,p=aS(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=ke();return w.createElement(a,Object.assign({},p,{ref:r,className:y(n,"navds-body-short",`navds-body-short--${t}`,Ja({spacing:i,truncate:l,weight:d,align:c,visuallyHidden:m,textColor:g}))}))});var sS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Di=O.forwardRef((e,r)=>{var{className:n,size:t="medium",spacing:a,uppercase:i,as:l="p",truncate:d,weight:c="regular",align:m,visuallyHidden:g,textColor:p}=e,y=sS(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=ke();return w.createElement(l,Object.assign({},y,{ref:r,className:v(n,"navds-detail",Ja({spacing:a,truncate:d,weight:c,align:m,visuallyHidden:g,textColor:p,uppercase:i}),{"navds-detail--small":t==="small"})}))});var oS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const es=O.forwardRef((e,r)=>{var{children:n,className:t,size:a,spacing:i,as:l="p",showIcon:d=!1}=e,c=oS(e,["children","className","size","spacing","as","showIcon"]);const{cn:m}=ke();return w.createElement(l,Object.assign({},c,{ref:r,className:m("navds-error-message","navds-label",t,Ja({spacing:i}),{"navds-label--small":a==="small","navds-error-message--show-icon":d})}),d&&w.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},w.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),n)});var iS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const xi=O.forwardRef((e,r)=>{var{level:n="1",size:t,className:a,as:i,spacing:l,align:d,visuallyHidden:c,textColor:m}=e,g=iS(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:p}=ke(),y=i??`h${n}`;return w.createElement(y,Object.assign({},g,{ref:r,className:p(a,"navds-heading",`navds-heading--${t}`,Ja({spacing:l,align:d,visuallyHidden:c,textColor:m}))}))});var lS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};O.forwardRef((e,r)=>{var{className:n,spacing:t,as:a="p"}=e,i=lS(e,["className","spacing","as"]);const{cn:l}=ke();return w.createElement(a,Object.assign({},i,{ref:r,className:l(n,"navds-ingress",{"navds-typo--spacing":!!t})}))});var uS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const jn=O.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="label",spacing:i,visuallyHidden:l,textColor:d}=e,c=uS(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:m}=ke();return w.createElement(a,Object.assign({},c,{ref:r,className:m(n,"navds-label",Ja({spacing:i,visuallyHidden:l,textColor:d}),{"navds-label--small":t==="small"})}))});function Ip(e,r=166,n=!1){let t;function a(...i){const l=()=>{t=void 0,e.apply(this,i)};!t&&n&&l(),clearTimeout(t),t=setTimeout(l,r)}return a.clear=()=>{clearTimeout(t)},a}function In(e,r){const n=Object.entries(e).filter(([t])=>!r.includes(t));return Object.fromEntries(n)}const Ga=globalThis!=null&&globalThis.document?O.useLayoutEffect:()=>{};let Dm=0;function dS(e){const[r,n]=O.useState(e),t=e||r;return O.useEffect(()=>{r==null&&(Dm+=1,n(`aksel-id-${Dm}`))},[r]),t}const xm=w.useId;function dr(e){var r;if(xm!==void 0){const n=xm();return e??n.replace(/(:)/g,"")}return(r=dS(e))!==null&&r!==void 0?r:""}function js(e,r=[]){const n=O.useRef(e);return O.useEffect(()=>{n.current=e}),O.useCallback((...t)=>{var a;return(a=n.current)===null||a===void 0?void 0:a.call(n,...t)},r)}function ii({value:e,defaultValue:r,onChange:n}){const t=js(n),[a,i]=O.useState(r),l=e!==void 0,d=l?e:a,c=js(m=>{const p=typeof m=="function"?m(d):m;l||i(p),t(p)},[l,t,d]);return[d,c]}let Rm=0;function cS(e){const[r,n]=O.useState(e),t=e||r;return O.useEffect(()=>{r==null&&(Rm+=1,n(`aksel-icon-${Rm}`))},[r]),t}const Fm=w.useId;function Gn(e){var r;return Fm!==void 0?Fm().replace(/(:)/g,""):(r=cS(e))!==null&&r!==void 0?r:""}var fS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const mS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=fS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var gS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const pS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=gS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var hS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const yS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=hS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var vS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const kS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=vS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var bS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const wS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=bS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var _S=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Cp=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=_S(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var TS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const SS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=TS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var ES=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const OS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=ES(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var DS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Lp=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=DS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var xS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const $p=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=xS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var RS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const FS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=RS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var AS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Am=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=AS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var NS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const PS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=NS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var MS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const BS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=MS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var qS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Is=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=qS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var jS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const IS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=jS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function la(e,r,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return r==null?void 0:r(a)}}const[CS,Ri]=Ei({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),LS=typeof window<"u"&&window.matchMedia===void 0,$S=(e,r)=>{const[n,t]=O.useState(r);return O.useEffect(()=>{if(LS)return;const a=window.matchMedia(e);t(a.matches);const i=l=>{t(l.matches)};return a.addEventListener("change",i),()=>{a.removeEventListener("change",i)}},[e]),n};function Mt(e){return(r={})=>{const n=r.width?String(r.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}function nt(e){return(r,n)=>{const t=n!=null&&n.context?String(n.context):"standalone";let a;if(t==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,d=n!=null&&n.width?String(n.width):l;a=e.formattingValues[d]||e.formattingValues[l]}else{const l=e.defaultWidth,d=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[d]||e.values[l]}const i=e.argumentCallback?e.argumentCallback(r):r;return a[i]}}function tt(e){return(r,n={})=>{const t=n.width,a=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],i=r.match(a);if(!i)return null;const l=i[0],d=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(d)?VS(d,p=>p.test(l)):HS(d,p=>p.test(l));let m;m=e.valueCallback?e.valueCallback(c):c,m=n.valueCallback?n.valueCallback(m):m;const g=r.slice(l.length);return{value:m,rest:g}}}function HS(e,r){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&r(e[n]))return n}function VS(e,r){for(let n=0;n<e.length;n++)if(r(e[n]))return n}function gd(e){return(r,n={})=>{const t=r.match(e.matchPattern);if(!t)return null;const a=t[0],i=r.match(e.parsePattern);if(!i)return null;let l=e.valueCallback?e.valueCallback(i[0]):i[0];l=n.valueCallback?n.valueCallback(l):l;const d=r.slice(a.length);return{value:l,rest:d}}}const Hp=6048e5,US=864e5,WS=6e4,GS=36e5,YS=1e3,Nm=Symbol.for("constructDateFrom");function Je(e,r){return typeof e=="function"?e(r):e&&typeof e=="object"&&Nm in e?e[Nm](r):e instanceof Date?new e.constructor(r):new Date(r)}function ns(e,...r){const n=Je.bind(null,r.find(t=>typeof t=="object"));return r.map(n)}let zS={};function ha(){return zS}function Me(e,r){return Je(r||e,e)}function xr(e,r){var d,c,m,g;const n=ha(),t=(r==null?void 0:r.weekStartsOn)??((c=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((g=(m=n.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,a=Me(e,r==null?void 0:r.in),i=a.getDay(),l=(i<t?7:0)+i-t;return a.setDate(a.getDate()-l),a.setHours(0,0,0,0),a}const KS={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Vp=(e,r,n)=>{let t;const a=KS[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",r.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+t:t+" ago":t},XS={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Up=(e,r,n,t)=>XS[e],ZS={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},QS={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},JS={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},eE={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},tE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},rE=(e,r)=>{const n=Number(e),t=n%100;if(t>20||t<10)switch(t%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Wp={ordinalNumber:rE,era:nt({values:ZS,defaultWidth:"wide"}),quarter:nt({values:QS,defaultWidth:"wide",argumentCallback:e=>e-1}),month:nt({values:JS,defaultWidth:"wide"}),day:nt({values:eE,defaultWidth:"wide"}),dayPeriod:nt({values:nE,defaultWidth:"wide",formattingValues:tE,defaultFormattingWidth:"wide"})},aE=/^(\d+)(th|st|nd|rd)?/i,sE=/\d+/i,oE={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},iE={any:[/^b/i,/^(a|c)/i]},lE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},uE={any:[/1/i,/2/i,/3/i,/4/i]},dE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},cE={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},fE={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},mE={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},gE={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pE={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Gp={ordinalNumber:gd({matchPattern:aE,parsePattern:sE,valueCallback:e=>parseInt(e,10)}),era:tt({matchPatterns:oE,defaultMatchWidth:"wide",parsePatterns:iE,defaultParseWidth:"any"}),quarter:tt({matchPatterns:lE,defaultMatchWidth:"wide",parsePatterns:uE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:tt({matchPatterns:dE,defaultMatchWidth:"wide",parsePatterns:cE,defaultParseWidth:"any"}),day:tt({matchPatterns:fE,defaultMatchWidth:"wide",parsePatterns:mE,defaultParseWidth:"any"}),dayPeriod:tt({matchPatterns:gE,defaultMatchWidth:"any",parsePatterns:pE,defaultParseWidth:"any"})},hE={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},yE={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},vE={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},kE={date:Mt({formats:hE,defaultWidth:"full"}),time:Mt({formats:yE,defaultWidth:"full"}),dateTime:Mt({formats:vE,defaultWidth:"full"})},Yp={code:"en-GB",formatDistance:Vp,formatLong:kE,formatRelative:Up,localize:Wp,match:Gp,options:{weekStartsOn:1,firstWeekContainsDate:4}},bE={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wE={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},_E={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},TE={date:Mt({formats:bE,defaultWidth:"full"}),time:Mt({formats:wE,defaultWidth:"full"}),dateTime:Mt({formats:_E,defaultWidth:"full"})},Fi={code:"en-US",formatDistance:Vp,formatLong:TE,formatRelative:Up,localize:Wp,match:Gp,options:{weekStartsOn:0,firstWeekContainsDate:1}},SE={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},EE=(e,r,n)=>{let t;const a=SE[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",String(r)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"om "+t:t+" siden":t},OE={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},DE={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},xE={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},RE={date:Mt({formats:OE,defaultWidth:"full"}),time:Mt({formats:DE,defaultWidth:"full"}),dateTime:Mt({formats:xE,defaultWidth:"full"})},FE={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},AE=(e,r,n,t)=>FE[e],NE={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},PE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},ME={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},BE={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},qE={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},jE=(e,r)=>Number(e)+".",IE={ordinalNumber:jE,era:nt({values:NE,defaultWidth:"wide"}),quarter:nt({values:PE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:nt({values:ME,defaultWidth:"wide"}),day:nt({values:BE,defaultWidth:"wide"}),dayPeriod:nt({values:qE,defaultWidth:"wide"})},CE=/^(\d+)\.?/i,LE=/\d+/i,$E={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},HE={any:[/^f/i,/^e/i]},VE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},UE={any:[/1/i,/2/i,/3/i,/4/i]},WE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},GE={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},YE={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},zE={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},KE={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},XE={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},ZE={ordinalNumber:gd({matchPattern:CE,parsePattern:LE,valueCallback:e=>parseInt(e,10)}),era:tt({matchPatterns:$E,defaultMatchWidth:"wide",parsePatterns:HE,defaultParseWidth:"any"}),quarter:tt({matchPatterns:VE,defaultMatchWidth:"wide",parsePatterns:UE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:tt({matchPatterns:WE,defaultMatchWidth:"wide",parsePatterns:GE,defaultParseWidth:"any"}),day:tt({matchPatterns:YE,defaultMatchWidth:"wide",parsePatterns:zE,defaultParseWidth:"any"}),dayPeriod:tt({matchPatterns:KE,defaultMatchWidth:"any",parsePatterns:XE,defaultParseWidth:"any"})},zp={code:"nb",formatDistance:EE,formatLong:RE,formatRelative:AE,localize:IE,match:ZE,options:{weekStartsOn:1,firstWeekContainsDate:4}},QE={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},JE=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],eO=(e,r,n)=>{let t;const a=QE[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",r<13?JE[r]:String(r)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"om "+t:t+" sidan":t},nO={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},tO={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},rO={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},aO={date:Mt({formats:nO,defaultWidth:"full"}),time:Mt({formats:tO,defaultWidth:"full"}),dateTime:Mt({formats:rO,defaultWidth:"full"})},sO={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},oO=(e,r,n,t)=>sO[e],iO={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},lO={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},uO={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},dO={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},cO={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},fO=(e,r)=>Number(e)+".",mO={ordinalNumber:fO,era:nt({values:iO,defaultWidth:"wide"}),quarter:nt({values:lO,defaultWidth:"wide",argumentCallback:e=>e-1}),month:nt({values:uO,defaultWidth:"wide"}),day:nt({values:dO,defaultWidth:"wide"}),dayPeriod:nt({values:cO,defaultWidth:"wide"})},gO=/^(\d+)\.?/i,pO=/\d+/i,hO={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},yO={any:[/^f/i,/^e/i]},vO={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},kO={any:[/1/i,/2/i,/3/i,/4/i]},bO={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},wO={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},_O={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},TO={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},SO={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},EO={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},OO={ordinalNumber:gd({matchPattern:gO,parsePattern:pO,valueCallback:e=>parseInt(e,10)}),era:tt({matchPatterns:hO,defaultMatchWidth:"wide",parsePatterns:yO,defaultParseWidth:"any"}),quarter:tt({matchPatterns:vO,defaultMatchWidth:"wide",parsePatterns:kO,defaultParseWidth:"any",valueCallback:e=>e+1}),month:tt({matchPatterns:bO,defaultMatchWidth:"wide",parsePatterns:wO,defaultParseWidth:"any"}),day:tt({matchPatterns:_O,defaultMatchWidth:"wide",parsePatterns:TO,defaultParseWidth:"any"}),dayPeriod:tt({matchPatterns:SO,defaultMatchWidth:"any",parsePatterns:EO,defaultParseWidth:"any"})},Kp={code:"nn",formatDistance:eO,formatLong:aO,formatRelative:oO,localize:mO,match:OO,options:{weekStartsOn:1,firstWeekContainsDate:4}},DO={global:{dateLocale:zp,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},xO=O.createContext({locale:DO}),pd=()=>O.useContext(xO);function Pm(e){return e.sort((r,n)=>{const t=r.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const RO=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Mm(e,r,n){let t=e+1;return n&&t>=r&&(t=0),t}function Bm(e,r,n){let t=e-1;return n&&t<0&&(t=r),t}const su=e=>e;class FO{constructor(){this.descendants=new Map,this.register=r=>{if(r!=null)return RO(r)?this.registerNode(r):n=>{this.registerNode(n,r)}},this.unregister=r=>{this.descendants.delete(r);const n=Pm(Array.from(this.descendants.keys()));this.assignIndex(n)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=r=>{this.descendants.forEach(n=>{const t=r.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((n,t)=>n.index-t.index),this.enabledValues=()=>this.values().filter(r=>!r.disabled),this.item=r=>{if(this.count()!==0)return this.values()[r]},this.enabledItem=r=>{if(this.enabledCount()!==0)return this.enabledValues()[r]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const r=this.enabledValues().length-1;return this.enabledItem(r)},this.indexOf=r=>{var n,t;return r&&(t=(n=this.descendants.get(r))===null||n===void 0?void 0:n.index)!==null&&t!==void 0?t:-1},this.enabledIndexOf=r=>r==null?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(r)),this.next=(r,n=!0)=>{const t=Mm(r,this.count(),n);return this.item(t)},this.nextEnabled=(r,n=!0)=>{const t=this.item(r);if(!t)return;const a=this.enabledIndexOf(t.node),i=Mm(a,this.enabledCount(),n);return this.enabledItem(i)},this.prev=(r,n=!0)=>{const t=Bm(r,this.count()-1,n);return this.item(t)},this.prevEnabled=(r,n=!0)=>{const t=this.item(r);if(!t)return;const a=this.enabledIndexOf(t.node),i=Bm(a,this.enabledCount()-1,n);return this.enabledItem(i)},this.registerNode=(r,n)=>{if(!r)return;const t=this.descendants.get(r);if(t){this.descendants.set(r,Object.assign({index:t.index,node:r},n));return}const a=Array.from(this.descendants.keys()).concat(r),i=Pm(a);n!=null&&n.disabled&&(n.disabled=!!n.disabled);const l=Object.assign({node:r,index:-1},n);this.descendants.set(r,l),this.assignIndex(i)}}}function AO(){const[e,r]=Ei({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),n=su(i=>w.createElement(e,Object.assign({},i.value),i.children));function t(i){const l=r(),[d,c]=O.useState(-1),m=O.useRef(null);Ga(()=>()=>{m.current&&l.unregister(m.current)},[]),Ga(()=>{if(!m.current)return;const p=Number(m.current.dataset.index);d!==p&&!Number.isNaN(p)&&c(p)});const g=su(i?l.register(i):l.register);return{descendants:l,index:d,enabledIndex:l.enabledIndexOf(m.current),register:GT([g,m])}}function a(){return O.useRef(new FO).current}return[n,r,a,t]}function NO(e,r=globalThis==null?void 0:globalThis.document){const n=js(e);O.useEffect(()=>{const t=a=>{a.key==="Escape"&&n(a)};return r.addEventListener("keydown",t,!0),()=>r.removeEventListener("keydown",t,!0)},[n,r])}const Xp={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function Zp(e,r,n,{discrete:t}={discrete:!1}){if(!r)return;const a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});a.addEventListener(e,r,{once:!0}),t&&a?Mp.flushSync(()=>a.dispatchEvent(i)):a.dispatchEvent(i)}function PO(e,r=globalThis==null?void 0:globalThis.document){const n=js(e),t=O.useRef(!1);return O.useEffect(()=>{const a=i=>{if(i.target&&!t.current){const l={originalEvent:i};Zp(Xp.FOCUS_OUTSIDE,n,l)}};return r.addEventListener("focusin",a),()=>r.removeEventListener("focusin",a)},[r,n]),{onFocusCapture:()=>{t.current=!0},onBlurCapture:()=>{t.current=!1}}}function MO(e,r=globalThis==null?void 0:globalThis.document){const n=js(e),t=O.useRef(!1),a=O.useRef(()=>{});return O.useEffect(()=>{const i=d=>{function c(){Zp(Xp.POINTER_DOWN_OUTSIDE,n,{originalEvent:d},{discrete:!0})}d.target&&!t.current?d.pointerType==="touch"?(r.removeEventListener("click",a.current),a.current=c,r.addEventListener("click",a.current,{once:!0})):c():r.removeEventListener("click",a.current),t.current=!1},l=window.setTimeout(()=>{r.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),r.removeEventListener("pointerdown",i),r.removeEventListener("click",a.current)}},[r,n]),{onPointerDownCapture:()=>{t.current=!0}}}var BO=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const[qO,jO,IO,CO]=AO();let Ba=0,qm;const LO=O.forwardRef((e,r)=>jO(!1)?w.createElement(jm,Object.assign({ref:r},e)):w.createElement($O,null,w.createElement(jm,Object.assign({ref:r},e)))),$O=({children:e})=>{const r=IO();return w.createElement(qO,{value:r},e)},jm=O.forwardRef((e,r)=>{var n,{children:t,asChild:a,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:d,onInteractOutside:c,onDismiss:m,safeZone:g,disableOutsidePointerEvents:p=!1,enabled:y=!0}=e,v=BO(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,D]=O.useState({}),{register:E,index:k,descendants:R}=CO({disableOutsidePointerEvents:p,disabled:!y,forceUpdate:()=>D({})}),[_,T]=O.useState(null),B=Za(T,E,r),x=(n=_==null?void 0:_.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,N=O.useRef(!1),F=O.useRef(!1),A=(()=>{let L=-1;return R.enabledValues().forEach((W,H)=>{W.disableOutsidePointerEvents&&(L=H)}),{isPointerEventsEnabled:k>=L,isBodyPointerEventsDisabled:Ba>0,pointerStyle:k>=L&&Ba>0?"auto":void 0}})();function j(L){var U,W;if(!(g!=null&&g.anchor)&&!(g!=null&&g.dismissable)||!y)return;L.defaultPrevented||(N.current=!0,L.detail.originalEvent.type==="pointerdown"&&(F.current=!0));const H=L.target;L.detail.originalEvent.type==="pointerdown"?(!((U=g==null?void 0:g.anchor)===null||U===void 0)&&U.contains(H)||H===(g==null?void 0:g.anchor))&&L.preventDefault():!(H instanceof HTMLElement&&![g==null?void 0:g.anchor,g==null?void 0:g.dismissable].some(K=>K==null?void 0:K.contains(H))&&!H.contains((W=g==null?void 0:g.dismissable)!==null&&W!==void 0?W:null))&&L.preventDefault(),L.detail.originalEvent.type==="focusin"&&F.current&&L.preventDefault(),F.current=!1,N.current=!1}const Y=MO(L=>{!A.isPointerEventsEnabled||!y||(l==null||l(L),c==null||c(L),g&&j(L),!L.defaultPrevented&&m&&m())},x),V=PO(L=>{y&&(d==null||d(L),c==null||c(L),g&&j(L),!L.defaultPrevented&&m&&m())},x);NO(L=>{!y||!(k===R.enabledCount()-1)||(i==null||i(L),!L.defaultPrevented&&m&&(L.preventDefault(),m()))},x),O.useEffect(()=>{if(!(!_||!y||!p))return Ba===0&&(qm=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),Ba++,()=>{Ba===1&&(x.body.style.pointerEvents=qm),Ba--}},[_,x,p,R,y]),O.useEffect(()=>()=>R.values().forEach(L=>L.forceUpdate()),[R,_]);const G=a?Qa:"div";return w.createElement(G,Object.assign({ref:B},v,{onFocusCapture:V.onFocusCapture,onBlurCapture:V.onBlurCapture,onPointerDownCapture:Y.onPointerDownCapture,style:Object.assign({pointerEvents:A.pointerStyle},v.style)}),t)}),Ya=Math.min,ua=Math.max,li=Math.round,zo=Math.floor,ur=e=>({x:e,y:e}),HO={left:"right",right:"left",bottom:"top",top:"bottom"},VO={start:"end",end:"start"};function Pu(e,r,n){return ua(e,Ya(r,n))}function Hs(e,r){return typeof e=="function"?e(r):e}function da(e){return e.split("-")[0]}function Vs(e){return e.split("-")[1]}function Qp(e){return e==="x"?"y":"x"}function hd(e){return e==="y"?"height":"width"}function za(e){return["top","bottom"].includes(da(e))?"y":"x"}function yd(e){return Qp(za(e))}function UO(e,r,n){n===void 0&&(n=!1);const t=Vs(e),a=yd(e),i=hd(a);let l=a==="x"?t===(n?"end":"start")?"right":"left":t==="start"?"bottom":"top";return r.reference[i]>r.floating[i]&&(l=ui(l)),[l,ui(l)]}function WO(e){const r=ui(e);return[Mu(e),r,Mu(r)]}function Mu(e){return e.replace(/start|end/g,r=>VO[r])}function GO(e,r,n){const t=["left","right"],a=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?r?a:t:r?t:a;case"left":case"right":return r?i:l;default:return[]}}function YO(e,r,n,t){const a=Vs(e);let i=GO(da(e),n==="start",t);return a&&(i=i.map(l=>l+"-"+a),r&&(i=i.concat(i.map(Mu)))),i}function ui(e){return e.replace(/left|right|bottom|top/g,r=>HO[r])}function zO(e){return{top:0,right:0,bottom:0,left:0,...e}}function Jp(e){return typeof e!="number"?zO(e):{top:e,right:e,bottom:e,left:e}}function di(e){const{x:r,y:n,width:t,height:a}=e;return{width:t,height:a,top:n,left:r,right:r+t,bottom:n+a,x:r,y:n}}function Im(e,r,n){let{reference:t,floating:a}=e;const i=za(r),l=yd(r),d=hd(l),c=da(r),m=i==="y",g=t.x+t.width/2-a.width/2,p=t.y+t.height/2-a.height/2,y=t[d]/2-a[d]/2;let v;switch(c){case"top":v={x:g,y:t.y-a.height};break;case"bottom":v={x:g,y:t.y+t.height};break;case"right":v={x:t.x+t.width,y:p};break;case"left":v={x:t.x-a.width,y:p};break;default:v={x:t.x,y:t.y}}switch(Vs(r)){case"start":v[l]-=y*(n&&m?-1:1);break;case"end":v[l]+=y*(n&&m?-1:1);break}return v}const KO=async(e,r,n)=>{const{placement:t="bottom",strategy:a="absolute",middleware:i=[],platform:l}=n,d=i.filter(Boolean),c=await(l.isRTL==null?void 0:l.isRTL(r));let m=await l.getElementRects({reference:e,floating:r,strategy:a}),{x:g,y:p}=Im(m,t,c),y=t,v={},D=0;for(let E=0;E<d.length;E++){const{name:k,fn:R}=d[E],{x:_,y:T,data:B,reset:x}=await R({x:g,y:p,initialPlacement:t,placement:y,strategy:a,middlewareData:v,rects:m,platform:l,elements:{reference:e,floating:r}});g=_??g,p=T??p,v={...v,[k]:{...v[k],...B}},x&&D<=50&&(D++,typeof x=="object"&&(x.placement&&(y=x.placement),x.rects&&(m=x.rects===!0?await l.getElementRects({reference:e,floating:r,strategy:a}):x.rects),{x:g,y:p}=Im(m,y,c)),E=-1)}return{x:g,y:p,placement:y,strategy:a,middlewareData:v}};async function eh(e,r){var n;r===void 0&&(r={});const{x:t,y:a,platform:i,rects:l,elements:d,strategy:c}=e,{boundary:m="clippingAncestors",rootBoundary:g="viewport",elementContext:p="floating",altBoundary:y=!1,padding:v=0}=Hs(r,e),D=Jp(v),k=d[y?p==="floating"?"reference":"floating":p],R=di(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(k)))==null||n?k:k.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(d.floating)),boundary:m,rootBoundary:g,strategy:c})),_=p==="floating"?{x:t,y:a,width:l.floating.width,height:l.floating.height}:l.reference,T=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d.floating)),B=await(i.isElement==null?void 0:i.isElement(T))?await(i.getScale==null?void 0:i.getScale(T))||{x:1,y:1}:{x:1,y:1},x=di(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:_,offsetParent:T,strategy:c}):_);return{top:(R.top-x.top+D.top)/B.y,bottom:(x.bottom-R.bottom+D.bottom)/B.y,left:(R.left-x.left+D.left)/B.x,right:(x.right-R.right+D.right)/B.x}}const XO=e=>({name:"arrow",options:e,async fn(r){const{x:n,y:t,placement:a,rects:i,platform:l,elements:d,middlewareData:c}=r,{element:m,padding:g=0}=Hs(e,r)||{};if(m==null)return{};const p=Jp(g),y={x:n,y:t},v=yd(a),D=hd(v),E=await l.getDimensions(m),k=v==="y",R=k?"top":"left",_=k?"bottom":"right",T=k?"clientHeight":"clientWidth",B=i.reference[D]+i.reference[v]-y[v]-i.floating[D],x=y[v]-i.reference[v],N=await(l.getOffsetParent==null?void 0:l.getOffsetParent(m));let F=N?N[T]:0;(!F||!await(l.isElement==null?void 0:l.isElement(N)))&&(F=d.floating[T]||i.floating[D]);const A=B/2-x/2,j=F/2-E[D]/2-1,Y=Ya(p[R],j),V=Ya(p[_],j),G=Y,L=F-E[D]-V,U=F/2-E[D]/2+A,W=Pu(G,U,L),H=!c.arrow&&Vs(a)!=null&&U!==W&&i.reference[D]/2-(U<G?Y:V)-E[D]/2<0,J=H?U<G?U-G:U-L:0;return{[v]:y[v]+J,data:{[v]:W,centerOffset:U-W-J,...H&&{alignmentOffset:J}},reset:H}}}),ZO=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var n,t;const{placement:a,middlewareData:i,rects:l,initialPlacement:d,platform:c,elements:m}=r,{mainAxis:g=!0,crossAxis:p=!0,fallbackPlacements:y,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:D="none",flipAlignment:E=!0,...k}=Hs(e,r);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const R=da(a),_=za(d),T=da(d)===d,B=await(c.isRTL==null?void 0:c.isRTL(m.floating)),x=y||(T||!E?[ui(d)]:WO(d)),N=D!=="none";!y&&N&&x.push(...YO(d,E,D,B));const F=[d,...x],A=await eh(r,k),j=[];let Y=((t=i.flip)==null?void 0:t.overflows)||[];if(g&&j.push(A[R]),p){const U=UO(a,l,B);j.push(A[U[0]],A[U[1]])}if(Y=[...Y,{placement:a,overflows:j}],!j.every(U=>U<=0)){var V,G;const U=(((V=i.flip)==null?void 0:V.index)||0)+1,W=F[U];if(W)return{data:{index:U,overflows:Y},reset:{placement:W}};let H=(G=Y.filter(J=>J.overflows[0]<=0).sort((J,K)=>J.overflows[1]-K.overflows[1])[0])==null?void 0:G.placement;if(!H)switch(v){case"bestFit":{var L;const J=(L=Y.filter(K=>{if(N){const te=za(K.placement);return te===_||te==="y"}return!0}).map(K=>[K.placement,K.overflows.filter(te=>te>0).reduce((te,se)=>te+se,0)]).sort((K,te)=>K[1]-te[1])[0])==null?void 0:L[0];J&&(H=J);break}case"initialPlacement":H=d;break}if(a!==H)return{reset:{placement:H}}}return{}}}};async function QO(e,r){const{placement:n,platform:t,elements:a}=e,i=await(t.isRTL==null?void 0:t.isRTL(a.floating)),l=da(n),d=Vs(n),c=za(n)==="y",m=["left","top"].includes(l)?-1:1,g=i&&c?-1:1,p=Hs(r,e);let{mainAxis:y,crossAxis:v,alignmentAxis:D}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return d&&typeof D=="number"&&(v=d==="end"?D*-1:D),c?{x:v*g,y:y*m}:{x:y*m,y:v*g}}const JO=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var n,t;const{x:a,y:i,placement:l,middlewareData:d}=r,c=await QO(r,e);return l===((n=d.offset)==null?void 0:n.placement)&&(t=d.arrow)!=null&&t.alignmentOffset?{}:{x:a+c.x,y:i+c.y,data:{...c,placement:l}}}}},eD=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:n,y:t,placement:a}=r,{mainAxis:i=!0,crossAxis:l=!1,limiter:d={fn:k=>{let{x:R,y:_}=k;return{x:R,y:_}}},...c}=Hs(e,r),m={x:n,y:t},g=await eh(r,c),p=za(da(a)),y=Qp(p);let v=m[y],D=m[p];if(i){const k=y==="y"?"top":"left",R=y==="y"?"bottom":"right",_=v+g[k],T=v-g[R];v=Pu(_,v,T)}if(l){const k=p==="y"?"top":"left",R=p==="y"?"bottom":"right",_=D+g[k],T=D-g[R];D=Pu(_,D,T)}const E=d.fn({...r,[y]:v,[p]:D});return{...E,data:{x:E.x-n,y:E.y-t,enabled:{[y]:i,[p]:l}}}}}};function Ai(){return typeof window<"u"}function ts(e){return nh(e)?(e.nodeName||"").toLowerCase():"#document"}function wt(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function mr(e){var r;return(r=(nh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function nh(e){return Ai()?e instanceof Node||e instanceof wt(e).Node:!1}function Wn(e){return Ai()?e instanceof Element||e instanceof wt(e).Element:!1}function cr(e){return Ai()?e instanceof HTMLElement||e instanceof wt(e).HTMLElement:!1}function Cm(e){return!Ai()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof wt(e).ShadowRoot}function Us(e){const{overflow:r,overflowX:n,overflowY:t,display:a}=Wt(e);return/auto|scroll|overlay|hidden|clip/.test(r+t+n)&&!["inline","contents"].includes(a)}function nD(e){return["table","td","th"].includes(ts(e))}function Ni(e){return[":popover-open",":modal"].some(r=>{try{return e.matches(r)}catch{return!1}})}function vd(e){const r=kd(),n=Wn(e)?Wt(e):e;return["transform","translate","scale","rotate","perspective"].some(t=>n[t]?n[t]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!r&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!r&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function tD(e){let r=Gr(e);for(;cr(r)&&!Ka(r);){if(vd(r))return r;if(Ni(r))return null;r=Gr(r)}return null}function kd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ka(e){return["html","body","#document"].includes(ts(e))}function Wt(e){return wt(e).getComputedStyle(e)}function Pi(e){return Wn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(ts(e)==="html")return e;const r=e.assignedSlot||e.parentNode||Cm(e)&&e.host||mr(e);return Cm(r)?r.host:r}function th(e){const r=Gr(e);return Ka(r)?e.ownerDocument?e.ownerDocument.body:e.body:cr(r)&&Us(r)?r:th(r)}function Cs(e,r,n){var t;r===void 0&&(r=[]),n===void 0&&(n=!0);const a=th(e),i=a===((t=e.ownerDocument)==null?void 0:t.body),l=wt(a);if(i){const d=Bu(l);return r.concat(l,l.visualViewport||[],Us(a)?a:[],d&&n?Cs(d):[])}return r.concat(a,Cs(a,[],n))}function Bu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function rh(e){const r=Wt(e);let n=parseFloat(r.width)||0,t=parseFloat(r.height)||0;const a=cr(e),i=a?e.offsetWidth:n,l=a?e.offsetHeight:t,d=li(n)!==i||li(t)!==l;return d&&(n=i,t=l),{width:n,height:t,$:d}}function bd(e){return Wn(e)?e:e.contextElement}function $a(e){const r=bd(e);if(!cr(r))return ur(1);const n=r.getBoundingClientRect(),{width:t,height:a,$:i}=rh(r);let l=(i?li(n.width):n.width)/t,d=(i?li(n.height):n.height)/a;return(!l||!Number.isFinite(l))&&(l=1),(!d||!Number.isFinite(d))&&(d=1),{x:l,y:d}}const rD=ur(0);function ah(e){const r=wt(e);return!kd()||!r.visualViewport?rD:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function aD(e,r,n){return r===void 0&&(r=!1),!n||r&&n!==wt(e)?!1:r}function ca(e,r,n,t){r===void 0&&(r=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect(),i=bd(e);let l=ur(1);r&&(t?Wn(t)&&(l=$a(t)):l=$a(e));const d=aD(i,n,t)?ah(i):ur(0);let c=(a.left+d.x)/l.x,m=(a.top+d.y)/l.y,g=a.width/l.x,p=a.height/l.y;if(i){const y=wt(i),v=t&&Wn(t)?wt(t):t;let D=y,E=Bu(D);for(;E&&t&&v!==D;){const k=$a(E),R=E.getBoundingClientRect(),_=Wt(E),T=R.left+(E.clientLeft+parseFloat(_.paddingLeft))*k.x,B=R.top+(E.clientTop+parseFloat(_.paddingTop))*k.y;c*=k.x,m*=k.y,g*=k.x,p*=k.y,c+=T,m+=B,D=wt(E),E=Bu(D)}}return di({width:g,height:p,x:c,y:m})}function wd(e,r){const n=Pi(e).scrollLeft;return r?r.left+n:ca(mr(e)).left+n}function sh(e,r,n){n===void 0&&(n=!1);const t=e.getBoundingClientRect(),a=t.left+r.scrollLeft-(n?0:wd(e,t)),i=t.top+r.scrollTop;return{x:a,y:i}}function sD(e){let{elements:r,rect:n,offsetParent:t,strategy:a}=e;const i=a==="fixed",l=mr(t),d=r?Ni(r.floating):!1;if(t===l||d&&i)return n;let c={scrollLeft:0,scrollTop:0},m=ur(1);const g=ur(0),p=cr(t);if((p||!p&&!i)&&((ts(t)!=="body"||Us(l))&&(c=Pi(t)),cr(t))){const v=ca(t);m=$a(t),g.x=v.x+t.clientLeft,g.y=v.y+t.clientTop}const y=l&&!p&&!i?sh(l,c,!0):ur(0);return{width:n.width*m.x,height:n.height*m.y,x:n.x*m.x-c.scrollLeft*m.x+g.x+y.x,y:n.y*m.y-c.scrollTop*m.y+g.y+y.y}}function oD(e){return Array.from(e.getClientRects())}function iD(e){const r=mr(e),n=Pi(e),t=e.ownerDocument.body,a=ua(r.scrollWidth,r.clientWidth,t.scrollWidth,t.clientWidth),i=ua(r.scrollHeight,r.clientHeight,t.scrollHeight,t.clientHeight);let l=-n.scrollLeft+wd(e);const d=-n.scrollTop;return Wt(t).direction==="rtl"&&(l+=ua(r.clientWidth,t.clientWidth)-a),{width:a,height:i,x:l,y:d}}function lD(e,r){const n=wt(e),t=mr(e),a=n.visualViewport;let i=t.clientWidth,l=t.clientHeight,d=0,c=0;if(a){i=a.width,l=a.height;const m=kd();(!m||m&&r==="fixed")&&(d=a.offsetLeft,c=a.offsetTop)}return{width:i,height:l,x:d,y:c}}function uD(e,r){const n=ca(e,!0,r==="fixed"),t=n.top+e.clientTop,a=n.left+e.clientLeft,i=cr(e)?$a(e):ur(1),l=e.clientWidth*i.x,d=e.clientHeight*i.y,c=a*i.x,m=t*i.y;return{width:l,height:d,x:c,y:m}}function Lm(e,r,n){let t;if(r==="viewport")t=lD(e,n);else if(r==="document")t=iD(mr(e));else if(Wn(r))t=uD(r,n);else{const a=ah(e);t={x:r.x-a.x,y:r.y-a.y,width:r.width,height:r.height}}return di(t)}function oh(e,r){const n=Gr(e);return n===r||!Wn(n)||Ka(n)?!1:Wt(n).position==="fixed"||oh(n,r)}function dD(e,r){const n=r.get(e);if(n)return n;let t=Cs(e,[],!1).filter(d=>Wn(d)&&ts(d)!=="body"),a=null;const i=Wt(e).position==="fixed";let l=i?Gr(e):e;for(;Wn(l)&&!Ka(l);){const d=Wt(l),c=vd(l);!c&&d.position==="fixed"&&(a=null),(i?!c&&!a:!c&&d.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Us(l)&&!c&&oh(e,l))?t=t.filter(g=>g!==l):a=d,l=Gr(l)}return r.set(e,t),t}function cD(e){let{element:r,boundary:n,rootBoundary:t,strategy:a}=e;const l=[...n==="clippingAncestors"?Ni(r)?[]:dD(r,this._c):[].concat(n),t],d=l[0],c=l.reduce((m,g)=>{const p=Lm(r,g,a);return m.top=ua(p.top,m.top),m.right=Ya(p.right,m.right),m.bottom=Ya(p.bottom,m.bottom),m.left=ua(p.left,m.left),m},Lm(r,d,a));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function fD(e){const{width:r,height:n}=rh(e);return{width:r,height:n}}function mD(e,r,n){const t=cr(r),a=mr(r),i=n==="fixed",l=ca(e,!0,i,r);let d={scrollLeft:0,scrollTop:0};const c=ur(0);if(t||!t&&!i)if((ts(r)!=="body"||Us(a))&&(d=Pi(r)),t){const y=ca(r,!0,i,r);c.x=y.x+r.clientLeft,c.y=y.y+r.clientTop}else a&&(c.x=wd(a));const m=a&&!t&&!i?sh(a,d):ur(0),g=l.left+d.scrollLeft-c.x-m.x,p=l.top+d.scrollTop-c.y-m.y;return{x:g,y:p,width:l.width,height:l.height}}function ou(e){return Wt(e).position==="static"}function $m(e,r){if(!cr(e)||Wt(e).position==="fixed")return null;if(r)return r(e);let n=e.offsetParent;return mr(e)===n&&(n=n.ownerDocument.body),n}function ih(e,r){const n=wt(e);if(Ni(e))return n;if(!cr(e)){let a=Gr(e);for(;a&&!Ka(a);){if(Wn(a)&&!ou(a))return a;a=Gr(a)}return n}let t=$m(e,r);for(;t&&nD(t)&&ou(t);)t=$m(t,r);return t&&Ka(t)&&ou(t)&&!vd(t)?n:t||tD(e)||n}const gD=async function(e){const r=this.getOffsetParent||ih,n=this.getDimensions,t=await n(e.floating);return{reference:mD(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:t.width,height:t.height}}};function pD(e){return Wt(e).direction==="rtl"}const hD={convertOffsetParentRelativeRectToViewportRelativeRect:sD,getDocumentElement:mr,getClippingRect:cD,getOffsetParent:ih,getElementRects:gD,getClientRects:oD,getDimensions:fD,getScale:$a,isElement:Wn,isRTL:pD};function lh(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function yD(e,r){let n=null,t;const a=mr(e);function i(){var d;clearTimeout(t),(d=n)==null||d.disconnect(),n=null}function l(d,c){d===void 0&&(d=!1),c===void 0&&(c=1),i();const m=e.getBoundingClientRect(),{left:g,top:p,width:y,height:v}=m;if(d||r(),!y||!v)return;const D=zo(p),E=zo(a.clientWidth-(g+y)),k=zo(a.clientHeight-(p+v)),R=zo(g),T={rootMargin:-D+"px "+-E+"px "+-k+"px "+-R+"px",threshold:ua(0,Ya(1,c))||1};let B=!0;function x(N){const F=N[0].intersectionRatio;if(F!==c){if(!B)return l();F?l(!1,F):t=setTimeout(()=>{l(!1,1e-7)},1e3)}F===1&&!lh(m,e.getBoundingClientRect())&&l(),B=!1}try{n=new IntersectionObserver(x,{...T,root:a.ownerDocument})}catch{n=new IntersectionObserver(x,T)}n.observe(e)}return l(!0),i}function vD(e,r,n,t){t===void 0&&(t={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:c=!1}=t,m=bd(e),g=a||i?[...m?Cs(m):[],...Cs(r)]:[];g.forEach(R=>{a&&R.addEventListener("scroll",n,{passive:!0}),i&&R.addEventListener("resize",n)});const p=m&&d?yD(m,n):null;let y=-1,v=null;l&&(v=new ResizeObserver(R=>{let[_]=R;_&&_.target===m&&v&&(v.unobserve(r),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var T;(T=v)==null||T.observe(r)})),n()}),m&&!c&&v.observe(m),v.observe(r));let D,E=c?ca(e):null;c&&k();function k(){const R=ca(e);E&&!lh(E,R)&&n(),E=R,D=requestAnimationFrame(k)}return n(),()=>{var R;g.forEach(_=>{a&&_.removeEventListener("scroll",n),i&&_.removeEventListener("resize",n)}),p==null||p(),(R=v)==null||R.disconnect(),v=null,c&&cancelAnimationFrame(D)}}const kD=JO,bD=eD,wD=ZO,Hm=XO,_D=(e,r,n)=>{const t=new Map,a={platform:hD,...n},i={...a.platform,_c:t};return KO(e,r,{...a,platform:i})};var ri=typeof document<"u"?O.useLayoutEffect:O.useEffect;function ci(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let n,t,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==r.length)return!1;for(t=n;t--!==0;)if(!ci(e[t],r[t]))return!1;return!0}if(a=Object.keys(e),n=a.length,n!==Object.keys(r).length)return!1;for(t=n;t--!==0;)if(!{}.hasOwnProperty.call(r,a[t]))return!1;for(t=n;t--!==0;){const i=a[t];if(!(i==="_owner"&&e.$$typeof)&&!ci(e[i],r[i]))return!1}return!0}return e!==e&&r!==r}function uh(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Vm(e,r){const n=uh(e);return Math.round(r*n)/n}function iu(e){const r=O.useRef(e);return ri(()=>{r.current=e}),r}function TD(e){e===void 0&&(e={});const{placement:r="bottom",strategy:n="absolute",middleware:t=[],platform:a,elements:{reference:i,floating:l}={},transform:d=!0,whileElementsMounted:c,open:m}=e,[g,p]=O.useState({x:0,y:0,strategy:n,placement:r,middlewareData:{},isPositioned:!1}),[y,v]=O.useState(t);ci(y,t)||v(t);const[D,E]=O.useState(null),[k,R]=O.useState(null),_=O.useCallback(K=>{K!==N.current&&(N.current=K,E(K))},[]),T=O.useCallback(K=>{K!==F.current&&(F.current=K,R(K))},[]),B=i||D,x=l||k,N=O.useRef(null),F=O.useRef(null),A=O.useRef(g),j=c!=null,Y=iu(c),V=iu(a),G=iu(m),L=O.useCallback(()=>{if(!N.current||!F.current)return;const K={placement:r,strategy:n,middleware:y};V.current&&(K.platform=V.current),_D(N.current,F.current,K).then(te=>{const se={...te,isPositioned:G.current!==!1};U.current&&!ci(A.current,se)&&(A.current=se,md.flushSync(()=>{p(se)}))})},[y,r,n,V,G]);ri(()=>{m===!1&&A.current.isPositioned&&(A.current.isPositioned=!1,p(K=>({...K,isPositioned:!1})))},[m]);const U=O.useRef(!1);ri(()=>(U.current=!0,()=>{U.current=!1}),[]),ri(()=>{if(B&&(N.current=B),x&&(F.current=x),B&&x){if(Y.current)return Y.current(B,x,L);L()}},[B,x,L,Y,j]);const W=O.useMemo(()=>({reference:N,floating:F,setReference:_,setFloating:T}),[_,T]),H=O.useMemo(()=>({reference:B,floating:x}),[B,x]),J=O.useMemo(()=>{const K={position:n,left:0,top:0};if(!H.floating)return K;const te=Vm(H.floating,g.x),se=Vm(H.floating,g.y);return d?{...K,transform:"translate("+te+"px, "+se+"px)",...uh(H.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:te,top:se}},[n,d,H.floating,g.x,g.y]);return O.useMemo(()=>({...g,update:L,refs:W,elements:H,floatingStyles:J}),[g,L,W,H,J])}const SD=e=>{function r(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:t,padding:a}=typeof e=="function"?e(n):e;return t&&r(t)?t.current!=null?Hm({element:t.current,padding:a}).fn(n):{}:t?Hm({element:t,padding:a}).fn(n):{}}}},ED=(e,r)=>({...kD(e),options:[e,r]}),OD=(e,r)=>({...bD(e),options:[e,r]}),DD=(e,r)=>({...wD(e),options:[e,r]}),xD=(e,r)=>({...SD(e),options:[e,r]}),Um=/(\w+)/g;function RD(e,r){const n=Array.isArray(e)?e:FD(e);for(const t of r){if(!t)continue;let a=t;for(let i=0;i<n.length;i++){const l=a[n[i]];l!==void 0&&(a=l)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function FD(e){const r=[];let n=Um.exec(e);for(;n;){const[,t,a]=n;r.push(t||a),n=Um.exec(e)}return r}const AD=/{[^}]*}/g;function zt(e,...r){const n=pd(),t=n.translations||[],a=[...r,...Array.isArray(t)?t.map(l=>l[e]):[t[e]],n.locale[e]];return(l,d)=>{const c=RD(l,a);return d?c.replace(AD,m=>{const g=m.substring(1,m.length-1);if(d[g]===void 0){const p=JSON.stringify(d);throw new Error(`Error translating key '${l}'. No replacement syntax ({}) found for key '${g}'. The following replacements were passed: '${p}'`)}return d[g]}):c}}function dh(){const e=pd(),r=e.translations||[],n=Array.isArray(r)?r.map(t=>t.global):[r.global];n.push(e.locale.global);for(const t of n)if(t!=null&&t.dateLocale)return t.dateLocale;throw new Error("dateLocale not found.")}var ND=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const PD=O.forwardRef((e,r)=>{var{className:n,size:t="medium",title:a,transparent:i=!1,variant:l="neutral",id:d}=e,c=ND(e,["className","size","title","transparent","variant","id"]);const{cn:m}=ke(),g=dr(),p=zt("Loader");return w.createElement("svg",Object.assign({"aria-labelledby":d??`loader-${g}`,ref:r,className:m("navds-loader",n,`navds-loader--${t}`,`navds-loader--${l}`,{"navds-loader--transparent":i}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},In(c,["children"])),w.createElement("title",{id:d??`loader-${g}`},a||p("title")),w.createElement("circle",{className:m("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),w.createElement("circle",{className:m("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var MD=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Gt=O.forwardRef((e,r)=>{var{as:n="button",variant:t="primary",className:a,children:i,size:l="medium",loading:d=!1,disabled:c,icon:m,iconPosition:g="left",onKeyUp:p}=e,y=MD(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:v}=ke(),D=c||d?In(y,["href"]):y,E=k=>{k.key===" "&&!c&&!d&&k.currentTarget.click()};return w.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},D,{ref:r,onKeyUp:la(p,E),className:v(a,"navds-button",`navds-button--${t}`,`navds-button--${l}`,{"navds-button--loading":d,"navds-button--icon-only":!!m&&!i,"navds-button--disabled":c??d}),disabled:c??d?!0:void 0}),m&&g==="left"&&w.createElement("span",{className:v("navds-button__icon")},m),d&&w.createElement(PD,{size:l}),i&&w.createElement(jn,{as:"span",size:l==="medium"?"medium":"small"},i),m&&g==="right"&&w.createElement("span",{className:v("navds-button__icon")},m))});var BD=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const qD={error:IS,warning:SS,info:OS,success:wS},ch=O.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:i="medium",fullWidth:l=!1,contentMaxWidth:d=!0,inline:c=!1,closeButton:m=!1,onClose:g}=e,p=BD(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:y}=ke(),v=zt("Alert"),D=qD[a];return w.createElement("div",Object.assign({},p,{ref:r,className:y(t,"navds-alert",`navds-alert--${a}`,`navds-alert--${i}`,{"navds-alert--full-width":l,"navds-alert--inline":c,"navds-alert--close-button":m})}),w.createElement(D,{title:v(a),className:y("navds-alert__icon")}),w.createElement(jp,{as:"div",size:i,className:y("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),m&&!c&&w.createElement("div",{className:y("navds-alert__button-wrapper")},w.createElement(Gt,{className:y("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:g,type:"button",icon:w.createElement(Is,{title:["error","warning"].includes(a)?v("closeAlert"):v("closeMessage")})})))});function Ws(e,r,n){const t=Me(e,n==null?void 0:n.in);return isNaN(r)?Je((n==null?void 0:n.in)||e,NaN):(r&&t.setDate(t.getDate()+r),t)}function _d(e,r,n){const t=Me(e,n==null?void 0:n.in);if(isNaN(r))return Je(e,NaN);if(!r)return t;const a=t.getDate(),i=Je(e,t.getTime());i.setMonth(t.getMonth()+r+1,0);const l=i.getDate();return a>=l?i:(t.setFullYear(i.getFullYear(),i.getMonth(),a),t)}function fi(e,r){const n=Me(e,r==null?void 0:r.in).getDay();return n===0||n===6}function fa(e,r){return xr(e,{...r,weekStartsOn:1})}function fh(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getFullYear(),a=Je(n,0);a.setFullYear(t+1,0,4),a.setHours(0,0,0,0);const i=fa(a),l=Je(n,0);l.setFullYear(t,0,4),l.setHours(0,0,0,0);const d=fa(l);return n.getTime()>=i.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function mi(e){const r=Me(e),n=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return n.setUTCFullYear(r.getFullYear()),+e-+n}function Rr(e,r){const n=Me(e,r==null?void 0:r.in);return n.setHours(0,0,0,0),n}function Wr(e,r,n){const[t,a]=ns(n==null?void 0:n.in,e,r),i=Rr(t),l=Rr(a),d=+i-mi(i),c=+l-mi(l);return Math.round((d-c)/US)}function jD(e,r){const n=fh(e,r),t=Je(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),fa(t)}function ID(e,r,n){return Ws(e,r*7,n)}function Td(e,r,n){return _d(e,r*12,n)}function CD(e,r){let n,t=r==null?void 0:r.in;return e.forEach(a=>{!t&&typeof a=="object"&&(t=Je.bind(null,a));const i=Me(a,t);(!n||n<i||isNaN(+i))&&(n=i)}),Je(t,n||NaN)}function LD(e,r){let n,t=r==null?void 0:r.in;return e.forEach(a=>{!t&&typeof a=="object"&&(t=Je.bind(null,a));const i=Me(a,t);(!n||n>i||isNaN(+i))&&(n=i)}),Je(t,n||NaN)}function Sd(e,r,n){const[t,a]=ns(n==null?void 0:n.in,e,r);return+Rr(t)==+Rr(a)}function mh(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function $D(e){return!(!mh(e)&&typeof e!="number"||isNaN(+Me(e)))}function HD(e,r,n){const[t,a]=ns(n==null?void 0:n.in,e,r),i=t.getFullYear()-a.getFullYear(),l=t.getMonth()-a.getMonth();return i*12+l}function gh(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function VD(e,r){const[n,t]=ns(e,r.start,r.end);return{start:n,end:t}}function ph(e,r){const{start:n,end:t}=VD(r==null?void 0:r.in,e);let a=+n>+t;const i=a?+n:+t,l=a?t:n;l.setHours(0,0,0,0),l.setDate(1);let d=1;const c=[];for(;+l<=i;)c.push(Je(n,l)),l.setMonth(l.getMonth()+d);return a?c.reverse():c}function ma(e,r){const n=Me(e,r==null?void 0:r.in);return n.setDate(1),n.setHours(0,0,0,0),n}function Mi(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getFullYear();return n.setFullYear(t+1,0,0),n.setHours(23,59,59,999),n}function Gs(e,r){const n=Me(e,r==null?void 0:r.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function hh(e,r){var d,c,m,g;const n=ha(),t=(r==null?void 0:r.weekStartsOn)??((c=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((g=(m=n.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,a=Me(e,r==null?void 0:r.in),i=a.getDay(),l=(i<t?-7:0)+6-(i-t);return a.setDate(a.getDate()+l),a.setHours(23,59,59,999),a}function UD(e,r){return hh(e,{...r,weekStartsOn:1})}function WD(e,r){const n=Me(e,r==null?void 0:r.in);return Wr(n,Gs(n))+1}function Ed(e,r){const n=Me(e,r==null?void 0:r.in),t=+fa(n)-+jD(n);return Math.round(t/Hp)+1}function Od(e,r){var g,p,y,v;const n=Me(e,r==null?void 0:r.in),t=n.getFullYear(),a=ha(),i=(r==null?void 0:r.firstWeekContainsDate)??((p=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:p.firstWeekContainsDate)??a.firstWeekContainsDate??((v=(y=a.locale)==null?void 0:y.options)==null?void 0:v.firstWeekContainsDate)??1,l=Je((r==null?void 0:r.in)||e,0);l.setFullYear(t+1,0,i),l.setHours(0,0,0,0);const d=xr(l,r),c=Je((r==null?void 0:r.in)||e,0);c.setFullYear(t,0,i),c.setHours(0,0,0,0);const m=xr(c,r);return+n>=+d?t+1:+n>=+m?t:t-1}function GD(e,r){var d,c,m,g;const n=ha(),t=(r==null?void 0:r.firstWeekContainsDate)??((c=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((g=(m=n.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??1,a=Od(e,r),i=Je((r==null?void 0:r.in)||e,0);return i.setFullYear(a,0,t),i.setHours(0,0,0,0),xr(i,r)}function Dd(e,r){const n=Me(e,r==null?void 0:r.in),t=+xr(n,r)-+GD(n,r);return Math.round(t/Hp)+1}function Qe(e,r){const n=e<0?"-":"",t=Math.abs(e).toString().padStart(r,"0");return n+t}const Hr={y(e,r){const n=e.getFullYear(),t=n>0?n:1-n;return Qe(r==="yy"?t%100:t,r.length)},M(e,r){const n=e.getMonth();return r==="M"?String(n+1):Qe(n+1,2)},d(e,r){return Qe(e.getDate(),r.length)},a(e,r){const n=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,r){return Qe(e.getHours()%12||12,r.length)},H(e,r){return Qe(e.getHours(),r.length)},m(e,r){return Qe(e.getMinutes(),r.length)},s(e,r){return Qe(e.getSeconds(),r.length)},S(e,r){const n=r.length,t=e.getMilliseconds(),a=Math.trunc(t*Math.pow(10,n-3));return Qe(a,r.length)}},qa={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Wm={G:function(e,r,n){const t=e.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})}},y:function(e,r,n){if(r==="yo"){const t=e.getFullYear(),a=t>0?t:1-t;return n.ordinalNumber(a,{unit:"year"})}return Hr.y(e,r)},Y:function(e,r,n,t){const a=Od(e,t),i=a>0?a:1-a;if(r==="YY"){const l=i%100;return Qe(l,2)}return r==="Yo"?n.ordinalNumber(i,{unit:"year"}):Qe(i,r.length)},R:function(e,r){const n=fh(e);return Qe(n,r.length)},u:function(e,r){const n=e.getFullYear();return Qe(n,r.length)},Q:function(e,r,n){const t=Math.ceil((e.getMonth()+1)/3);switch(r){case"Q":return String(t);case"QQ":return Qe(t,2);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})}},q:function(e,r,n){const t=Math.ceil((e.getMonth()+1)/3);switch(r){case"q":return String(t);case"qq":return Qe(t,2);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})}},M:function(e,r,n){const t=e.getMonth();switch(r){case"M":case"MM":return Hr.M(e,r);case"Mo":return n.ordinalNumber(t+1,{unit:"month"});case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})}},L:function(e,r,n){const t=e.getMonth();switch(r){case"L":return String(t+1);case"LL":return Qe(t+1,2);case"Lo":return n.ordinalNumber(t+1,{unit:"month"});case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})}},w:function(e,r,n,t){const a=Dd(e,t);return r==="wo"?n.ordinalNumber(a,{unit:"week"}):Qe(a,r.length)},I:function(e,r,n){const t=Ed(e);return r==="Io"?n.ordinalNumber(t,{unit:"week"}):Qe(t,r.length)},d:function(e,r,n){return r==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Hr.d(e,r)},D:function(e,r,n){const t=WD(e);return r==="Do"?n.ordinalNumber(t,{unit:"dayOfYear"}):Qe(t,r.length)},E:function(e,r,n){const t=e.getDay();switch(r){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})}},e:function(e,r,n,t){const a=e.getDay(),i=(a-t.weekStartsOn+8)%7||7;switch(r){case"e":return String(i);case"ee":return Qe(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,r,n,t){const a=e.getDay(),i=(a-t.weekStartsOn+8)%7||7;switch(r){case"c":return String(i);case"cc":return Qe(i,r.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,r,n){const t=e.getDay(),a=t===0?7:t;switch(r){case"i":return String(a);case"ii":return Qe(a,r.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(t,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(t,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(t,{width:"short",context:"formatting"});case"iiii":default:return n.day(t,{width:"wide",context:"formatting"})}},a:function(e,r,n){const a=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,r,n){const t=e.getHours();let a;switch(t===12?a=qa.noon:t===0?a=qa.midnight:a=t/12>=1?"pm":"am",r){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,r,n){const t=e.getHours();let a;switch(t>=17?a=qa.evening:t>=12?a=qa.afternoon:t>=4?a=qa.morning:a=qa.night,r){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,r,n){if(r==="ho"){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return Hr.h(e,r)},H:function(e,r,n){return r==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Hr.H(e,r)},K:function(e,r,n){const t=e.getHours()%12;return r==="Ko"?n.ordinalNumber(t,{unit:"hour"}):Qe(t,r.length)},k:function(e,r,n){let t=e.getHours();return t===0&&(t=24),r==="ko"?n.ordinalNumber(t,{unit:"hour"}):Qe(t,r.length)},m:function(e,r,n){return r==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Hr.m(e,r)},s:function(e,r,n){return r==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Hr.s(e,r)},S:function(e,r){return Hr.S(e,r)},X:function(e,r,n){const t=e.getTimezoneOffset();if(t===0)return"Z";switch(r){case"X":return Ym(t);case"XXXX":case"XX":return sa(t);case"XXXXX":case"XXX":default:return sa(t,":")}},x:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"x":return Ym(t);case"xxxx":case"xx":return sa(t);case"xxxxx":case"xxx":default:return sa(t,":")}},O:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Gm(t,":");case"OOOO":default:return"GMT"+sa(t,":")}},z:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Gm(t,":");case"zzzz":default:return"GMT"+sa(t,":")}},t:function(e,r,n){const t=Math.trunc(+e/1e3);return Qe(t,r.length)},T:function(e,r,n){return Qe(+e,r.length)}};function Gm(e,r=""){const n=e>0?"-":"+",t=Math.abs(e),a=Math.trunc(t/60),i=t%60;return i===0?n+String(a):n+String(a)+r+Qe(i,2)}function Ym(e,r){return e%60===0?(e>0?"-":"+")+Qe(Math.abs(e)/60,2):sa(e,r)}function sa(e,r=""){const n=e>0?"-":"+",t=Math.abs(e),a=Qe(Math.trunc(t/60),2),i=Qe(t%60,2);return n+a+r+i}const zm=(e,r)=>{switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},yh=(e,r)=>{switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},YD=(e,r)=>{const n=e.match(/(P+)(p+)?/)||[],t=n[1],a=n[2];if(!a)return zm(e,r);let i;switch(t){case"P":i=r.dateTime({width:"short"});break;case"PP":i=r.dateTime({width:"medium"});break;case"PPP":i=r.dateTime({width:"long"});break;case"PPPP":default:i=r.dateTime({width:"full"});break}return i.replace("{{date}}",zm(t,r)).replace("{{time}}",yh(a,r))},qu={p:yh,P:YD},zD=/^D+$/,KD=/^Y+$/,XD=["D","DD","YY","YYYY"];function vh(e){return zD.test(e)}function kh(e){return KD.test(e)}function ju(e,r,n){const t=ZD(e,r,n);if(console.warn(t),XD.includes(e))throw new RangeError(t)}function ZD(e,r,n){const t=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${t} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const QD=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,JD=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ex=/^'([^]*?)'?$/,nx=/''/g,tx=/[a-zA-Z]/;function ga(e,r,n){var g,p,y,v,D,E,k,R;const t=ha(),a=(n==null?void 0:n.locale)??t.locale??Fi,i=(n==null?void 0:n.firstWeekContainsDate)??((p=(g=n==null?void 0:n.locale)==null?void 0:g.options)==null?void 0:p.firstWeekContainsDate)??t.firstWeekContainsDate??((v=(y=t.locale)==null?void 0:y.options)==null?void 0:v.firstWeekContainsDate)??1,l=(n==null?void 0:n.weekStartsOn)??((E=(D=n==null?void 0:n.locale)==null?void 0:D.options)==null?void 0:E.weekStartsOn)??t.weekStartsOn??((R=(k=t.locale)==null?void 0:k.options)==null?void 0:R.weekStartsOn)??0,d=Me(e,n==null?void 0:n.in);if(!$D(d))throw new RangeError("Invalid time value");let c=r.match(JD).map(_=>{const T=_[0];if(T==="p"||T==="P"){const B=qu[T];return B(_,a.formatLong)}return _}).join("").match(QD).map(_=>{if(_==="''")return{isToken:!1,value:"'"};const T=_[0];if(T==="'")return{isToken:!1,value:rx(_)};if(Wm[T])return{isToken:!0,value:_};if(T.match(tx))throw new RangeError("Format string contains an unescaped latin alphabet character `"+T+"`");return{isToken:!1,value:_}});a.localize.preprocessor&&(c=a.localize.preprocessor(d,c));const m={firstWeekContainsDate:i,weekStartsOn:l,locale:a};return c.map(_=>{if(!_.isToken)return _.value;const T=_.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&kh(T)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&vh(T))&&ju(T,r,String(e));const B=Wm[T[0]];return B(d,T,a.localize,m)}).join("")}function rx(e){const r=e.match(ex);return r?r[1].replace(nx,"'"):e}function ax(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getFullYear(),a=n.getMonth(),i=Je(n,0);return i.setFullYear(t,a+1,0),i.setHours(0,0,0,0),i.getDate()}function sx(){return Object.assign({},ha())}function ox(e,r){const n=Me(e,r==null?void 0:r.in).getDay();return n===0?7:n}function xd(e,r){return Me(e,r==null?void 0:r.in).getMonth()}function Rd(e,r){return Me(e,r==null?void 0:r.in).getFullYear()}function bh(e,r){return+Me(e)>+Me(r)}function Ys(e,r){return+Me(e)<+Me(r)}function ix(e,r){const n=lx(r)?new r(0):Je(r,0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}function lx(e){var r;return typeof e=="function"&&((r=e.prototype)==null?void 0:r.constructor)===e}const ux=10;class wh{constructor(){ce(this,"subPriority",0)}validate(r,n){return!0}}class dx extends wh{constructor(r,n,t,a,i){super(),this.value=r,this.validateValue=n,this.setValue=t,this.priority=a,i&&(this.subPriority=i)}validate(r,n){return this.validateValue(r,this.value,n)}set(r,n,t){return this.setValue(r,n,this.value,t)}}class cx extends wh{constructor(n,t){super();ce(this,"priority",ux);ce(this,"subPriority",-1);this.context=n||(a=>Je(t,a))}set(n,t){return t.timestampIsSet?n:Je(n,ix(n,this.context))}}class We{run(r,n,t,a){const i=this.parse(r,n,t,a);return i?{setter:new dx(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(r,n,t){return!0}}class fx extends We{constructor(){super(...arguments);ce(this,"priority",140);ce(this,"incompatibleTokens",["R","u","t","T"])}parse(n,t,a){switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,t,a){return t.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const Sn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},ar={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function En(e,r){return e&&{value:r(e.value),rest:e.rest}}function vn(e,r){const n=r.match(e);return n?{value:parseInt(n[0],10),rest:r.slice(n[0].length)}:null}function sr(e,r){const n=r.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:r.slice(1)};const t=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,i=n[3]?parseInt(n[3],10):0,l=n[5]?parseInt(n[5],10):0;return{value:t*(a*GS+i*WS+l*YS),rest:r.slice(n[0].length)}}function _h(e){return vn(Sn.anyDigitsSigned,e)}function wn(e,r){switch(e){case 1:return vn(Sn.singleDigit,r);case 2:return vn(Sn.twoDigits,r);case 3:return vn(Sn.threeDigits,r);case 4:return vn(Sn.fourDigits,r);default:return vn(new RegExp("^\\d{1,"+e+"}"),r)}}function gi(e,r){switch(e){case 1:return vn(Sn.singleDigitSigned,r);case 2:return vn(Sn.twoDigitsSigned,r);case 3:return vn(Sn.threeDigitsSigned,r);case 4:return vn(Sn.fourDigitsSigned,r);default:return vn(new RegExp("^-?\\d{1,"+e+"}"),r)}}function Fd(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Th(e,r){const n=r>0,t=n?r:1-r;let a;if(t<=50)a=e||100;else{const i=t+50,l=Math.trunc(i/100)*100,d=e>=i%100;a=e+l-(d?100:0)}return n?a:1-a}function Sh(e){return e%400===0||e%4===0&&e%100!==0}class mx extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,t,a){const i=l=>({year:l,isTwoDigitYear:t==="yy"});switch(t){case"y":return En(wn(4,n),i);case"yo":return En(a.ordinalNumber(n,{unit:"year"}),i);default:return En(wn(t.length,n),i)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,a){const i=n.getFullYear();if(a.isTwoDigitYear){const d=Th(a.year,i);return n.setFullYear(d,0,1),n.setHours(0,0,0,0),n}const l=!("era"in t)||t.era===1?a.year:1-a.year;return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}}class gx extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,t,a){const i=l=>({year:l,isTwoDigitYear:t==="YY"});switch(t){case"Y":return En(wn(4,n),i);case"Yo":return En(a.ordinalNumber(n,{unit:"year"}),i);default:return En(wn(t.length,n),i)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,a,i){const l=Od(n,i);if(a.isTwoDigitYear){const c=Th(a.year,l);return n.setFullYear(c,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),xr(n,i)}const d=!("era"in t)||t.era===1?a.year:1-a.year;return n.setFullYear(d,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),xr(n,i)}}class px extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,t){return gi(t==="R"?4:t.length,n)}set(n,t,a){const i=Je(n,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),fa(i)}}class hx extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,t){return gi(t==="u"?4:t.length,n)}set(n,t,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class yx extends We{constructor(){super(...arguments);ce(this,"priority",120);ce(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"Q":case"QQ":return wn(t.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=1&&t<=4}set(n,t,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class vx extends We{constructor(){super(...arguments);ce(this,"priority",120);ce(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"q":case"qq":return wn(t.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=1&&t<=4}set(n,t,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class kx extends We{constructor(){super(...arguments);ce(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ce(this,"priority",110)}parse(n,t,a){const i=l=>l-1;switch(t){case"M":return En(vn(Sn.month,n),i);case"MM":return En(wn(2,n),i);case"Mo":return En(a.ordinalNumber(n,{unit:"month"}),i);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=11}set(n,t,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class bx extends We{constructor(){super(...arguments);ce(this,"priority",110);ce(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,t,a){const i=l=>l-1;switch(t){case"L":return En(vn(Sn.month,n),i);case"LL":return En(wn(2,n),i);case"Lo":return En(a.ordinalNumber(n,{unit:"month"}),i);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=11}set(n,t,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function wx(e,r,n){const t=Me(e,n==null?void 0:n.in),a=Dd(t,n)-r;return t.setDate(t.getDate()-a*7),Me(t,n==null?void 0:n.in)}class _x extends We{constructor(){super(...arguments);ce(this,"priority",100);ce(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,t,a){switch(t){case"w":return vn(Sn.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return wn(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,a,i){return xr(wx(n,a,i),i)}}function Tx(e,r,n){const t=Me(e,n==null?void 0:n.in),a=Ed(t,n)-r;return t.setDate(t.getDate()-a*7),t}class Sx extends We{constructor(){super(...arguments);ce(this,"priority",100);ce(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,t,a){switch(t){case"I":return vn(Sn.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return wn(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,a){return fa(Tx(n,a))}}const Ex=[31,28,31,30,31,30,31,31,30,31,30,31],Ox=[31,29,31,30,31,30,31,31,30,31,30,31];class Dx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"subPriority",1);ce(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"d":return vn(Sn.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return wn(t.length,n)}}validate(n,t){const a=n.getFullYear(),i=Sh(a),l=n.getMonth();return i?t>=1&&t<=Ox[l]:t>=1&&t<=Ex[l]}set(n,t,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class xx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"subpriority",1);ce(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,t,a){switch(t){case"D":case"DD":return vn(Sn.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return wn(t.length,n)}}validate(n,t){const a=n.getFullYear();return Sh(a)?t>=1&&t<=366:t>=1&&t<=365}set(n,t,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function Ad(e,r,n){var p,y,v,D;const t=ha(),a=(n==null?void 0:n.weekStartsOn)??((y=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:y.weekStartsOn)??t.weekStartsOn??((D=(v=t.locale)==null?void 0:v.options)==null?void 0:D.weekStartsOn)??0,i=Me(e,n==null?void 0:n.in),l=i.getDay(),c=(r%7+7)%7,m=7-a,g=r<0||r>6?r-(l+m)%7:(c+m)%7-(l+m)%7;return Ws(i,g,n)}class Rx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,a,i){return n=Ad(n,a,i),n.setHours(0,0,0,0),n}}class Fx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,t,a,i){const l=d=>{const c=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+c};switch(t){case"e":case"ee":return En(wn(t.length,n),l);case"eo":return En(a.ordinalNumber(n,{unit:"day"}),l);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,a,i){return n=Ad(n,a,i),n.setHours(0,0,0,0),n}}class Ax extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,t,a,i){const l=d=>{const c=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+c};switch(t){case"c":case"cc":return En(wn(t.length,n),l);case"co":return En(a.ordinalNumber(n,{unit:"day"}),l);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=6}set(n,t,a,i){return n=Ad(n,a,i),n.setHours(0,0,0,0),n}}function Nx(e,r,n){const t=Me(e,n==null?void 0:n.in),a=ox(t,n),i=r-a;return Ws(t,i,n)}class Px extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,t,a){const i=l=>l===0?7:l;switch(t){case"i":case"ii":return wn(t.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return En(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiii":return En(a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiiii":return En(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiii":default:return En(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i)}}validate(n,t){return t>=1&&t<=7}set(n,t,a){return n=Nx(n,a),n.setHours(0,0,0,0),n}}class Mx extends We{constructor(){super(...arguments);ce(this,"priority",80);ce(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,t,a){switch(t){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,a){return n.setHours(Fd(a),0,0,0),n}}class Bx extends We{constructor(){super(...arguments);ce(this,"priority",80);ce(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,t,a){switch(t){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,a){return n.setHours(Fd(a),0,0,0),n}}class qx extends We{constructor(){super(...arguments);ce(this,"priority",80);ce(this,"incompatibleTokens",["a","b","t","T"])}parse(n,t,a){switch(t){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,a){return n.setHours(Fd(a),0,0,0),n}}class jx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,t,a){switch(t){case"h":return vn(Sn.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return wn(t.length,n)}}validate(n,t){return t>=1&&t<=12}set(n,t,a){const i=n.getHours()>=12;return i&&a<12?n.setHours(a+12,0,0,0):!i&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class Ix extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,t,a){switch(t){case"H":return vn(Sn.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return wn(t.length,n)}}validate(n,t){return t>=0&&t<=23}set(n,t,a){return n.setHours(a,0,0,0),n}}class Cx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,t,a){switch(t){case"K":return vn(Sn.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return wn(t.length,n)}}validate(n,t){return t>=0&&t<=11}set(n,t,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class Lx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,t,a){switch(t){case"k":return vn(Sn.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return wn(t.length,n)}}validate(n,t){return t>=1&&t<=24}set(n,t,a){const i=a<=24?a%24:a;return n.setHours(i,0,0,0),n}}class $x extends We{constructor(){super(...arguments);ce(this,"priority",60);ce(this,"incompatibleTokens",["t","T"])}parse(n,t,a){switch(t){case"m":return vn(Sn.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return wn(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,a){return n.setMinutes(a,0,0),n}}class Hx extends We{constructor(){super(...arguments);ce(this,"priority",50);ce(this,"incompatibleTokens",["t","T"])}parse(n,t,a){switch(t){case"s":return vn(Sn.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return wn(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,a){return n.setSeconds(a,0),n}}class Vx extends We{constructor(){super(...arguments);ce(this,"priority",30);ce(this,"incompatibleTokens",["t","T"])}parse(n,t){const a=i=>Math.trunc(i*Math.pow(10,-t.length+3));return En(wn(t.length,n),a)}set(n,t,a){return n.setMilliseconds(a),n}}class Ux extends We{constructor(){super(...arguments);ce(this,"priority",10);ce(this,"incompatibleTokens",["t","T","x"])}parse(n,t){switch(t){case"X":return sr(ar.basicOptionalMinutes,n);case"XX":return sr(ar.basic,n);case"XXXX":return sr(ar.basicOptionalSeconds,n);case"XXXXX":return sr(ar.extendedOptionalSeconds,n);case"XXX":default:return sr(ar.extended,n)}}set(n,t,a){return t.timestampIsSet?n:Je(n,n.getTime()-mi(n)-a)}}class Wx extends We{constructor(){super(...arguments);ce(this,"priority",10);ce(this,"incompatibleTokens",["t","T","X"])}parse(n,t){switch(t){case"x":return sr(ar.basicOptionalMinutes,n);case"xx":return sr(ar.basic,n);case"xxxx":return sr(ar.basicOptionalSeconds,n);case"xxxxx":return sr(ar.extendedOptionalSeconds,n);case"xxx":default:return sr(ar.extended,n)}}set(n,t,a){return t.timestampIsSet?n:Je(n,n.getTime()-mi(n)-a)}}class Gx extends We{constructor(){super(...arguments);ce(this,"priority",40);ce(this,"incompatibleTokens","*")}parse(n){return _h(n)}set(n,t,a){return[Je(n,a*1e3),{timestampIsSet:!0}]}}class Yx extends We{constructor(){super(...arguments);ce(this,"priority",20);ce(this,"incompatibleTokens","*")}parse(n){return _h(n)}set(n,t,a){return[Je(n,a),{timestampIsSet:!0}]}}const zx={G:new fx,y:new mx,Y:new gx,R:new px,u:new hx,Q:new yx,q:new vx,M:new kx,L:new bx,w:new _x,I:new Sx,d:new Dx,D:new xx,E:new Rx,e:new Fx,c:new Ax,i:new Px,a:new Mx,b:new Bx,B:new qx,h:new jx,H:new Ix,K:new Cx,k:new Lx,m:new $x,s:new Hx,S:new Vx,X:new Ux,x:new Wx,t:new Gx,T:new Yx},Kx=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Xx=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Zx=/^'([^]*?)'?$/,Qx=/''/g,Jx=/\S/,eR=/[a-zA-Z]/;function Ha(e,r,n,t){var k,R,_,T,B,x,N,F;const a=()=>Je((t==null?void 0:t.in)||n,NaN),i=sx(),l=(t==null?void 0:t.locale)??i.locale??Fi,d=(t==null?void 0:t.firstWeekContainsDate)??((R=(k=t==null?void 0:t.locale)==null?void 0:k.options)==null?void 0:R.firstWeekContainsDate)??i.firstWeekContainsDate??((T=(_=i.locale)==null?void 0:_.options)==null?void 0:T.firstWeekContainsDate)??1,c=(t==null?void 0:t.weekStartsOn)??((x=(B=t==null?void 0:t.locale)==null?void 0:B.options)==null?void 0:x.weekStartsOn)??i.weekStartsOn??((F=(N=i.locale)==null?void 0:N.options)==null?void 0:F.weekStartsOn)??0;if(!r)return e?a():Me(n,t==null?void 0:t.in);const m={firstWeekContainsDate:d,weekStartsOn:c,locale:l},g=[new cx(t==null?void 0:t.in,n)],p=r.match(Xx).map(A=>{const j=A[0];if(j in qu){const Y=qu[j];return Y(A,l.formatLong)}return A}).join("").match(Kx),y=[];for(let A of p){!(t!=null&&t.useAdditionalWeekYearTokens)&&kh(A)&&ju(A,r,e),!(t!=null&&t.useAdditionalDayOfYearTokens)&&vh(A)&&ju(A,r,e);const j=A[0],Y=zx[j];if(Y){const{incompatibleTokens:V}=Y;if(Array.isArray(V)){const L=y.find(U=>V.includes(U.token)||U.token===j);if(L)throw new RangeError(`The format string mustn't contain \`${L.fullToken}\` and \`${A}\` at the same time`)}else if(Y.incompatibleTokens==="*"&&y.length>0)throw new RangeError(`The format string mustn't contain \`${A}\` and any other token at the same time`);y.push({token:j,fullToken:A});const G=Y.run(e,A,l.match,m);if(!G)return a();g.push(G.setter),e=G.rest}else{if(j.match(eR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+j+"`");if(A==="''"?A="'":j==="'"&&(A=nR(A)),e.indexOf(A)===0)e=e.slice(A.length);else return a()}}if(e.length>0&&Jx.test(e))return a();const v=g.map(A=>A.priority).sort((A,j)=>j-A).filter((A,j,Y)=>Y.indexOf(A)===j).map(A=>g.filter(j=>j.priority===A).sort((j,Y)=>Y.subPriority-j.subPriority)).map(A=>A[0]);let D=Me(n,t==null?void 0:t.in);if(isNaN(+D))return a();const E={};for(const A of v){if(!A.validate(D,m))return a();const j=A.set(D,E,m);Array.isArray(j)?(D=j[0],Object.assign(E,j[1])):D=j}return D}function nR(e){return e.match(Zx)[1].replace(Qx,"'")}function tR(e,r,n){const[t,a]=ns(n==null?void 0:n.in,e,r);return t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth()}function Eh(e,r,n){const[t,a]=ns(n==null?void 0:n.in,e,r);return t.getFullYear()===a.getFullYear()}function rR(e,r,n){return Ws(e,-r,n)}function Oh(e,r,n){const t=Me(e,n==null?void 0:n.in),a=t.getFullYear(),i=t.getDate(),l=Je(e,0);l.setFullYear(a,r,15),l.setHours(0,0,0,0);const d=ax(l);return t.setMonth(r,Math.min(i,d)),t}function Dh(e,r,n){const t=Me(e,n==null?void 0:n.in);return isNaN(+t)?Je(e,NaN):(t.setFullYear(r),t)}function aR(e,r,n){return _d(e,-r,n)}function sR(e,r,n){const{years:t=0,months:a=0,weeks:i=0,days:l=0,hours:d=0,minutes:c=0,seconds:m=0}=r,g=aR(e,a+t*12,n),p=rR(g,l+i*7,n),y=c+d*60,D=(m+y*60)*1e3;return Je(e,+p-D)}var Va=typeof document<"u"?O.useLayoutEffect:O.useEffect;const oR={...Np},iR=oR.useInsertionEffect,lR=iR||(e=>e());function uR(e){const r=O.useRef(()=>{});return lR(()=>{r.current=e}),O.useCallback(function(){for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return r.current==null?void 0:r.current(...t)},[])}const dR={...Np};let Km=!1,cR=0;const Xm=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+cR++;function fR(){const[e,r]=O.useState(()=>Km?Xm():void 0);return Va(()=>{e==null&&r(Xm())},[]),O.useEffect(()=>{Km=!0},[]),e}const mR=dR.useId,xh=mR||fR;function gR(){const e=new Map;return{emit(r,n){var t;(t=e.get(r))==null||t.forEach(a=>a(n))},on(r,n){e.has(r)||e.set(r,new Set),e.get(r).add(n)},off(r,n){var t;(t=e.get(r))==null||t.delete(n)}}}const pR=O.createContext(null),hR=O.createContext(null),yR=()=>{var e;return((e=O.useContext(pR))==null?void 0:e.id)||null},vR=()=>O.useContext(hR);function kR(e){return"data-floating-ui-"+e}const bR=O.createContext(null),Zm=kR("portal");function wR(e){e===void 0&&(e={});const{id:r,root:n}=e,t=xh(),a=_R(),[i,l]=O.useState(null),d=O.useRef(null);return Va(()=>()=>{i==null||i.remove(),queueMicrotask(()=>{d.current=null})},[i]),Va(()=>{if(!t||d.current)return;const c=r?document.getElementById(r):null;if(!c)return;const m=document.createElement("div");m.id=t,m.setAttribute(Zm,""),c.appendChild(m),d.current=m,l(m)},[r,t]),Va(()=>{if(n===null||!t||d.current)return;let c=n||(a==null?void 0:a.portalNode);c&&!Wn(c)&&(c=c.current),c=c||document.body;let m=null;r&&(m=document.createElement("div"),m.id=r,c.appendChild(m));const g=document.createElement("div");g.id=t,g.setAttribute(Zm,""),c=m||c,c.appendChild(g),d.current=g,l(g)},[r,n,t,a]),i}const _R=()=>O.useContext(bR);function TR(e){const{open:r=!1,onOpenChange:n,elements:t}=e,a=xh(),i=O.useRef({}),[l]=O.useState(()=>gR()),d=yR()!=null,[c,m]=O.useState(t.reference),g=uR((v,D,E)=>{i.current.openEvent=v?D:void 0,l.emit("openchange",{open:v,event:D,reason:E,nested:d}),n==null||n(v,D,E)}),p=O.useMemo(()=>({setPositionReference:m}),[]),y=O.useMemo(()=>({reference:c||t.reference||null,floating:t.floating||null,domReference:t.reference}),[c,t.reference,t.floating]);return O.useMemo(()=>({dataRef:i,open:r,onOpenChange:g,elements:y,events:l,floatingId:a,refs:p}),[r,g,y,l,a,p])}function SR(e){e===void 0&&(e={});const{nodeId:r}=e,n=TR({...e,elements:{reference:null,floating:null,...e.elements}}),t=e.rootContext||n,a=t.elements,[i,l]=O.useState(null),[d,c]=O.useState(null),g=(a==null?void 0:a.domReference)||i,p=O.useRef(null),y=vR();Va(()=>{g&&(p.current=g)},[g]);const v=TD({...e,elements:{...a,...d&&{reference:d}}}),D=O.useCallback(T=>{const B=Wn(T)?{getBoundingClientRect:()=>T.getBoundingClientRect(),getClientRects:()=>T.getClientRects(),contextElement:T}:T;c(B),v.refs.setReference(B)},[v.refs]),E=O.useCallback(T=>{(Wn(T)||T===null)&&(p.current=T,l(T)),(Wn(v.refs.reference.current)||v.refs.reference.current===null||T!==null&&!Wn(T))&&v.refs.setReference(T)},[v.refs]),k=O.useMemo(()=>({...v.refs,setReference:E,setPositionReference:D,domReference:p}),[v.refs,E,D]),R=O.useMemo(()=>({...v.elements,domReference:g}),[v.elements,g]),_=O.useMemo(()=>({...v,...t,refs:k,elements:R,nodeId:r}),[v,k,R,r,t]);return Va(()=>{t.dataRef.current.floatingContext=_;const T=y==null?void 0:y.nodesRef.current.find(B=>B.id===r);T&&(T.context=_)}),O.useMemo(()=>({...v,context:_,refs:k,elements:R}),[v,k,R,_])}const Bi=()=>{const{cn:e}=ke();return w.createElement($p,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Rh=()=>{const{cn:e}=ke();return w.createElement($p,{title:zt("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},pi=O.createContext(null),ya=(e,r)=>{var n,t,a;const{size:i,error:l,errorId:d}=e,c=O.useContext(pi),m=dr(),g=(n=e.id)!==null&&n!==void 0?n:`${r}-${m}`,p=d??`${r}-error-${m}`,y=`${r}-description-${m}`,v=(c==null?void 0:c.disabled)||e.disabled,D=((c==null?void 0:c.readOnly)||e.readOnly)&&!v||void 0,E=!v&&!D&&!!(l||c!=null&&c.error),k=!v&&!D&&!!l&&typeof l!="boolean",R=Object.assign({},E?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:k,hasError:E,errorId:p,inputDescriptionId:y,size:(t=i??(c==null?void 0:c.size))!==null&&t!==void 0?t:"medium",readOnly:D,inputProps:Object.assign(Object.assign({id:g},R),{"aria-describedby":Ls(e["aria-describedby"],{[y]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[p]:k,[(a=c==null?void 0:c.errorId)!==null&&a!==void 0?a:""]:E&&!!(c!=null&&c.error)})||void 0,disabled:v})}},Fh={global:{dateLocale:Yp,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Ah={global:{dateLocale:Kp,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Nh=(e="nb")=>{switch(e){case"nn":return Kp;case"en":return Yp;default:return zp}},Ph=e=>{switch(e){case"nn":return Ah.DatePicker;case"en":case"en-GB":return Fh.DatePicker;default:return}},ER=e=>{switch(e){case"nn":return Ah.global;case"en":case"en-GB":return Fh.global;default:return}},[Mh,qi]=Ei();var OR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const[DR,Nd]=Ei({errorMessage:"useDateInputContext must be used with DateInputContext"}),Bh=O.forwardRef((e,r)=>{const{className:n,hideLabel:t=!1,label:a,description:i,variant:l="datepicker",setAnchorRef:d}=e,c=OR(e,["className","hideLabel","label","description","variant","setAnchorRef"]),m=O.useRef(null),g=qi().translate,{cn:p}=ke(),y=l==="datepicker",v={prefix:y?"datepicker-input":"monthpicker-input",iconTitle:{open:y?"openDatePicker":"openMonthPicker",close:y?"closeDatePicker":"closeMonthPicker"}},D=Nd(),{inputProps:E,size:k="medium",inputDescriptionId:R,errorId:_,showErrorMsg:T,hasError:B,readOnly:x}=ya(e,v.prefix);return w.createElement("div",{className:p(n,"navds-form-field",`navds-form-field--${k}`,"navds-date__field",{"navds-text-field--error":B,"navds-date__field--error":B,"navds-form-field--disabled":!!E.disabled,"navds-text-field--disabled":!!E.disabled,"navds-form-field--readonly":x,"navds-text-field--readonly":x,"navds-date__field--readonly":x})},w.createElement(jn,{htmlFor:E.id,size:k,className:p("navds-form-field__label",{"navds-sr-only":t})},x&&w.createElement(Bi,null),a),!!i&&w.createElement(mn,{as:"div",className:p("navds-form-field__description",{"navds-sr-only":t}),id:R,size:k},i),w.createElement("div",{className:p("navds-date__field-wrapper")},w.createElement("input",Object.assign({ref:r},In(c,["error","errorId","size"]),E,{autoComplete:"off","aria-controls":D!=null&&D.open?D.ariaId:void 0,readOnly:x,className:p("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${k}`),size:y?11:14})),w.createElement("button",{disabled:E.disabled||x,tabIndex:x||D!=null&&D.open?-1:0,onClick:()=>{D==null||D.onOpen(),d==null||d(m.current)},type:"button",className:p("navds-date__field-button"),ref:m},w.createElement(kS,{title:g(v.iconTitle[D!=null&&D.open?"close":"open"])}))),w.createElement("div",{className:p("navds-form-field__error"),id:_,"aria-relevant":"additions removals","aria-live":"polite"},T&&w.createElement(es,{size:k,showIcon:!0},e.error)))}),xR=O.forwardRef((e,r)=>w.createElement(Bh,Object.assign({},e,{ref:r})));O.forwardRef((e,r)=>w.createElement(Bh,Object.assign({},e,{variant:"monthpicker",ref:r})));var RR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const FR=O.forwardRef((e,r)=>{var{className:n}=e,t=RR(e,["className"]);const{cn:a}=ke();return w.createElement("div",Object.assign({},t,{ref:r,className:a("navds-modal__body",n)}))});var AR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const NR=O.forwardRef((e,r)=>{var{className:n}=e,t=AR(e,["className"]);const{cn:a}=ke();return w.createElement("div",Object.assign({},t,{ref:r,className:a("navds-modal__footer",n)}))});var PR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const qh=O.forwardRef((e,r)=>{var{children:n,className:t,closeButton:a=!0}=e,i=PR(e,["children","className","closeButton"]);const{cn:l}=ke(),d=Ri(),c=zt("global");return w.createElement("div",Object.assign({},i,{ref:r,className:l("navds-modal__header",t)}),d.closeHandler&&a&&w.createElement(Gt,{type:"button",className:l("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:m=>{["Enter"," "].includes(m.key)&&m.repeat&&m.preventDefault()},onClick:d.closeHandler,icon:w.createElement(Is,{title:c("close")})}),n)}),Qm=({clientX:e,clientY:r},{left:n,top:t,right:a,bottom:i})=>!(e<n||r<t||e>a||r>i);function MR(e,r,n){if(!(r&&r.closeButton===!1))return n?()=>{var t;return n()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const Ko="navds-modal__document-body";function BR(e,r,n){w.useEffect(()=>{if(n||!e.current||!r)return;e.current.open&&document.body.classList.add(Ko);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Ko):document.body.classList.remove(Ko)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(Ko)}},[e,r,n])}const Ca=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function jh(e,r){var n="on"+r.type.toLowerCase();return typeof e[n]=="function"&&e[n](r),e.dispatchEvent(r)}function Bs(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Ih(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function qR(e,r){for(var n=0;n<e.length;++n)if(e[n]===r)return!0;return!1}function lu(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Ch(e){var r=["button","input","keygen","select","textarea"],n=r.map(function(l){return l+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(n.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),i=0;i<a.length&&!(a[i].tagName&&a[i].shadowRoot&&(t=Ch(a[i].shadowRoot),t));i++);return t}function Jm(e){return e.isConnected||document.body.contains(e)}function Lh(e){if(e.submitter)return e.submitter;var r=e.target;if(!(r instanceof HTMLFormElement))return null;var n=Ve.formSubmitter;if(!n){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;n=a.activeElement}return!n||n.form!==r?null:n}function jR(e){if(!e.defaultPrevented){var r=e.target,n=Ve.imagemapUseValue,t=Lh(e);n===null&&t&&(n=t.value);var a=Bs(r);if(a){var i=t&&t.getAttribute("formmethod")||r.getAttribute("method");i==="dialog"&&(e.preventDefault(),n!=null?a.close(n):a.close())}}}function $h(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",jR,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var r=new MutationObserver(this.maybeHideModal.bind(this));r.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,t=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),a,i=function(l){if(l.target===e){var d="DOMNodeRemoved";n|=l.type.substr(0,d.length)===d,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(l){e.addEventListener(l,i)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}$h.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Jm(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),Ve.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var r=document.createElement("div");this.dialog_.insertBefore(r,this.dialog_.firstChild),r.tabIndex=-1,r.focus(),this.dialog_.removeChild(r)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Ch(this.dialog_)),Ih(document.activeElement),e&&e.focus()},updateZIndex:function(e,r){if(e<r)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=r},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Jm(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!Ve.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,Ve.needsCentering(this.dialog_)?(Ve.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var r=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});jh(this.dialog_,r)}};var Ve={};Ve.reposition=function(e){var r=document.body.scrollTop||document.documentElement.scrollTop,n=r+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(r,n)+"px"};Ve.isInlinePositionSetByStylesheet=function(e){for(var r=0;r<document.styleSheets.length;++r){var n=document.styleSheets[r],t=null;try{t=n.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var i=t[a],l=null;try{l=document.querySelectorAll(i.selectorText)}catch{}if(!(!l||!qR(l,e))){var d=i.style.getPropertyValue("top"),c=i.style.getPropertyValue("bottom");if(d&&d!=="auto"||c&&c!=="auto")return!0}}}return!1};Ve.needsCentering=function(e){var r=window.getComputedStyle(e);return r.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!Ve.isInlinePositionSetByStylesheet(e)};Ve.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new $h(e)};Ve.registerDialog=function(e){e.showModal||Ve.forceRegisterDialog(e)};Ve.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(r){this.forwardTab_=void 0,r.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(r){var n=[];r.forEach(function(t){for(var a=0,i;i=t.removedNodes[a];++a)i instanceof Element&&(i.localName==="dialog"&&n.push(i),n=n.concat(i.querySelectorAll("dialog")))}),n.length&&e(n)}))};Ve.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};Ve.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};Ve.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,r=0,n;n=this.pendingDialogStack[r];++r)n.updateZIndex(--e,--e),r===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};Ve.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Bs(e);){for(var r=0,n;n=this.pendingDialogStack[r];++r)if(n.dialog===e)return r===0;e=e.parentElement}return!1};Ve.DialogManager.prototype.handleFocus_=function(e){var r=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(r)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Ih(r),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],t=n.dialog,a=t.compareDocumentPosition(r);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():r!==document.documentElement&&document.documentElement.focus()),!1}};Ve.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var r=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&jh(n.dialog,r)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};Ve.DialogManager.prototype.checkDOM_=function(e){var r=this.pendingDialogStack.slice();r.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};Ve.DialogManager.prototype.pushDialog=function(e){var r=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=r?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};Ve.DialogManager.prototype.removeDialog=function(e){var r=this.pendingDialogStack.indexOf(e);r!==-1&&(this.pendingDialogStack.splice(r,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Ca&&(Ve.dm=new Ve.DialogManager,Ve.formSubmitter=null,Ve.imagemapUseValue=null);if(Ca){var eg=document.createElement("form");if(eg.setAttribute("method","dialog"),eg.method!=="dialog"){var ja=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(ja){var IR=ja.get;ja.get=function(){return lu(this)?"dialog":IR.call(this)};var CR=ja.set;ja.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):CR.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",ja)}}document.addEventListener("click",function(e){if(Ve.formSubmitter=null,Ve.imagemapUseValue=null,!e.defaultPrevented){var r=e.target;if("composedPath"in e){var n=e.composedPath();r=n.shift()||r}if(!(!r||!lu(r.form))){var t=r.type==="submit"&&["button","input"].indexOf(r.localName)>-1;if(!t){if(!(r.localName==="input"&&r.type==="image"))return;Ve.imagemapUseValue=e.offsetX+","+e.offsetY}var a=Bs(r);a&&(Ve.formSubmitter=r)}}},!1),document.addEventListener("submit",function(e){var r=e.target,n=Bs(r);if(!n){var t=Lh(e),a=t&&t.getAttribute("formmethod")||r.getAttribute("method");a==="dialog"&&e.preventDefault()}});var LR=HTMLFormElement.prototype.submit,$R=function(){if(!lu(this))return LR.call(this);var e=Bs(this);e&&e.close()};HTMLFormElement.prototype.submit=$R}var HR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ji=O.forwardRef((e,r)=>{var n,t,{header:a,children:i,open:l,onBeforeClose:d,onCancel:c,closeOnBackdropClick:m,width:g,placement:p,portal:y,className:v,"aria-labelledby":D,style:E,onClick:k,onMouseDown:R}=e,_=HR(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:T}=ke(),B=O.useRef(T("navds-modal--polyfilled")),x=O.useRef(null),N=Za(x,r),F=dr(),A=(n=pd())===null||n===void 0?void 0:n.rootElement,j=wR({root:A}),Y=Nd(!1),V=Ri(!1)!==void 0;V&&!Y&&console.error("Modals should not be nested"),O.useEffect(()=>{Ca&&x.current&&j&&(Ve.registerDialog(x.current),x.current.classList.add(B.current)),x.current&&j&&(x.current.autofocus=!0)},[j]),O.useEffect(()=>{x.current&&j&&l!==void 0&&(l&&!x.current.open?x.current.showModal():!l&&x.current.open&&x.current.close())},[j,l]),BR(x,j,V);const G=typeof g=="string"&&["small","medium"].includes(g),L=T("navds-modal",v,{[B.current]:Ca,"navds-modal--autowidth":!g,[`navds-modal--${g}`]:G,"navds-modal--top":p==="top"&&!Ca}),U=Object.assign(Object.assign({},E),G?{}:{width:g}),W=O.useRef({clientX:0,clientY:0}),H=Te=>{W.current=Te},J=m&&!Ca,K=Te=>{if(Te.target!==x.current)return;const Oe=x.current.getBoundingClientRect();Qm(W.current,Oe)||Qm(Te,Oe)||d!==void 0&&d()===!1||x.current.close()},te=Te=>{d&&d()===!1&&Te.preventDefault()},se=!D&&!_["aria-label"]&&a?F:D,le=w.createElement("dialog",Object.assign({},_,{ref:N,className:L,style:U,onCancel:la(c,te),onClick:J?la(k,K):k,onMouseDown:J?la(R,H):R,"aria-labelledby":se}),w.createElement(CS,{closeHandler:MR(x,a,d),ref:x},a&&w.createElement(qh,null,a.label&&w.createElement(Di,{className:T("navds-modal__label")},a.label),w.createElement(xi,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:F},a.icon&&w.createElement("span",{className:T("navds-modal__header-icon")},a.icon),a.heading)),i));return y?j?md.createPortal(le,j):null:le});ji.Header=qh;ji.Body=FR;ji.Footer=NR;var VR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const UR=O.forwardRef((e,r)=>{var{className:n}=e,t=VR(e,["className"]);const{cn:a}=ke();return w.createElement("div",Object.assign({},t,{ref:r,className:a("navds-popover__content",n)}))});var WR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Hh=O.forwardRef((e,r)=>{var{className:n,children:t,anchorEl:a,arrow:i=!0,open:l,onClose:d,placement:c="top",offset:m,strategy:g,flip:p=!0}=e,y=WR(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:v}=ke(),D=O.useRef(null),E=Ri(!1)!==void 0,k=Nd(!1),R=g??(E?"fixed":"absolute"),_=k?!1:p,T=$s(!1),{update:B,refs:x,placement:N,middlewareData:{arrow:{x:F,y:A}={}},floatingStyles:j}=SR({strategy:R,placement:c,open:l,middleware:[ED(m??(T?8:i?16:4)),_&&DD({padding:5,fallbackPlacements:["bottom","top"]}),OD({padding:12}),xD({element:D,padding:8})]});Ga(()=>{x.setReference(a)},[a]);const Y=Za(x.setFloating,r);Ga(()=>{if(!x.reference.current||!x.floating.current||!l)return;const G=vD(x.reference.current,x.floating.current,B);return()=>G()},[x.floating,x.reference,B,l,a]);const V={top:"bottom",right:"left",bottom:"top",left:"right"}[N.split("-")[0]];return w.createElement(LO,{asChild:!0,safeZone:{anchor:a,dismissable:x.floating.current},onDismiss:()=>l&&(d==null?void 0:d()),enabled:l},w.createElement("div",Object.assign({ref:Y},y,{className:v("navds-popover",n,{"navds-popover--hidden":!l||!a}),style:Object.assign(Object.assign({},y.style),j),"data-placement":N,"aria-hidden":!l||!a}),t,i&&!T&&w.createElement("div",{ref:G=>{D.current=G},style:Object.assign(Object.assign(Object.assign({},F!=null?{left:F}:{}),A!=null?{top:A}:{}),V?{[V]:"-0.5rem"}:{}),className:v("navds-popover__arrow")})))});Hh.Content=UR;const GR={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},YR=({open:e,children:r,onClose:n,anchor:t,locale:a,translate:i,variant:l,popoverProps:d})=>{const c=zt("global",ER(a)),{cn:m}=ke(),g=O.useRef(null),p=Ri(!1)!==void 0;return $S("screen and (min-width: 768px)",!0)&&!p?w.createElement(Hh,Object.assign({arrow:!1,anchorEl:t,open:e,onClose:n,placement:"bottom-start",role:"dialog",className:m("navds-date__popover",{"navds-date":l==="month"}),flip:!1},d),r):w.createElement(ji,{ref:g,open:e,onClose:v=>{v.stopPropagation(),n()},"aria-label":i(GR[l]),className:m("navds-date__modal",{"navds-date__nested-modal":p,"navds-date":l==="month"}),closeOnBackdropClick:!0,placement:"top"},w.createElement("div",{className:m("navds-date__modal-body")},r,w.createElement(Gt,{variant:"tertiary",onClick:()=>{var v;return(v=g==null?void 0:g.current)===null||v===void 0?void 0:v.close()},size:"small",type:"button"},c("close"))))};function Vh(e){return!!(e&&typeof e=="object"&&"from"in e)}var _e;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(_e||(_e={}));var sn;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(sn||(sn={}));var Vt;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Vt||(Vt={}));var kt;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(kt||(kt={}));const uu={},Ps={};function qs(e,r){try{const t=(uu[e]||(uu[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(r).split("GMT")[1]||"";return t in Ps?Ps[t]:ng(t,t.split(":"))}catch{if(e in Ps)return Ps[e];const n=e==null?void 0:e.match(zR);return n?ng(e,n.slice(1)):NaN}}const zR=/([+-]\d\d):?(\d\d)?/;function ng(e,r){const n=+r[0],t=+(r[1]||0);return Ps[e]=n>0?n*60+t:n*60-t}class or extends Date{constructor(...r){super(),r.length>1&&typeof r[r.length-1]=="string"&&(this.timeZone=r.pop()),this.internal=new Date,isNaN(qs(this.timeZone,this))?this.setTime(NaN):r.length?typeof r[0]=="number"&&(r.length===1||r.length===2&&typeof r[1]!="number")?this.setTime(r[0]):typeof r[0]=="string"?this.setTime(+new Date(r[0])):r[0]instanceof Date?this.setTime(+r[0]):(this.setTime(+new Date(...r)),Uh(this),Iu(this)):this.setTime(Date.now())}static tz(r,...n){return n.length?new or(...n,r):new or(Date.now(),r)}withTimeZone(r){return new or(+this,r)}getTimezoneOffset(){return-qs(this.timeZone,this)}setTime(r){return Date.prototype.setTime.apply(this,arguments),Iu(this),+this}[Symbol.for("constructDateFrom")](r){return new or(+new Date(r),this.timeZone)}}const tg=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!tg.test(e))return;const r=e.replace(tg,"$1UTC");or.prototype[r]&&(e.startsWith("get")?or.prototype[e]=function(){return this.internal[r]()}:(or.prototype[e]=function(){return Date.prototype[r].apply(this.internal,arguments),KR(this),+this},or.prototype[r]=function(){return Date.prototype[r].apply(this,arguments),Iu(this),+this}))});function Iu(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function KR(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),Uh(e)}function Uh(e){const r=qs(e.timeZone,e),n=new Date(+e);n.setUTCHours(n.getUTCHours()-1);const t=-new Date(+e).getTimezoneOffset(),a=-new Date(+n).getTimezoneOffset(),i=t-a,l=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();i&&l&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+i);const d=t-r;d&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+d);const c=qs(e.timeZone,e),g=-new Date(+e).getTimezoneOffset()-c,p=c!==r,y=g-d;if(p&&y){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+y);const v=qs(e.timeZone,e),D=c-v;D&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+D),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+D))}}class oa extends or{static tz(r,...n){return n.length?new oa(...n,r):new oa(Date.now(),r)}toISOString(){const[r,n,t]=this.tzComponents(),a=`${r}${n}:${t}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[r,n,t,a]=this.internal.toUTCString().split(" ");return`${r==null?void 0:r.slice(0,-1)} ${t} ${n} ${a}`}toTimeString(){const r=this.internal.toUTCString().split(" ")[4],[n,t,a]=this.tzComponents();return`${r} GMT${n}${t}${a} (${XR(this.timeZone,this)})`}toLocaleString(r,n){return Date.prototype.toLocaleString.call(this,r,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(r,n){return Date.prototype.toLocaleDateString.call(this,r,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(r,n){return Date.prototype.toLocaleTimeString.call(this,r,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const r=this.getTimezoneOffset(),n=r>0?"-":"+",t=String(Math.floor(Math.abs(r)/60)).padStart(2,"0"),a=String(Math.abs(r)%60).padStart(2,"0");return[n,t,a]}withTimeZone(r){return new oa(+this,r)}[Symbol.for("constructDateFrom")](r){return new oa(+new Date(r),this.timeZone)}}function XR(e,r){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(r).slice(12)}const rg=5,ZR=4;function QR(e,r){const n=r.startOfMonth(e),t=n.getDay()>0?n.getDay():7,a=r.addDays(e,-t+1),i=r.addDays(a,rg*7-1);return r.getMonth(e)===r.getMonth(i)?rg:ZR}function Wh(e,r){const n=r.startOfMonth(e),t=n.getDay();return t===1?n:t===0?r.addDays(n,-1*6):r.addDays(n,-1*(t-1))}function JR(e,r){const n=Wh(e,r),t=QR(e,r);return r.addDays(n,t*7-1)}class Fr{constructor(r,n){this.Date=Date,this.today=()=>{var t;return(t=this.overrides)!=null&&t.today?this.overrides.today():this.options.timeZone?oa.tz(this.options.timeZone):new this.Date},this.newDate=(t,a,i)=>{var l;return(l=this.overrides)!=null&&l.newDate?this.overrides.newDate(t,a,i):this.options.timeZone?new oa(t,a,i,this.options.timeZone):new Date(t,a,i)},this.addDays=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.addDays)==null?void 0:l.call(i,t,a))??Ws(t,a)},this.addMonths=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.addMonths)==null?void 0:l.call(i,t,a))??_d(t,a)},this.addWeeks=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.addWeeks)==null?void 0:l.call(i,t,a))??ID(t,a)},this.addYears=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.addYears)==null?void 0:l.call(i,t,a))??Td(t,a)},this.differenceInCalendarDays=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.differenceInCalendarDays)==null?void 0:l.call(i,t,a))??Wr(t,a)},this.differenceInCalendarMonths=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.differenceInCalendarMonths)==null?void 0:l.call(i,t,a))??HD(t,a)},this.eachMonthOfInterval=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.eachMonthOfInterval)==null?void 0:i.call(a,t))??ph(t)},this.endOfBroadcastWeek=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.endOfBroadcastWeek)==null?void 0:l.call(i,t,a))??JR(t,this)},this.endOfISOWeek=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.endOfISOWeek)==null?void 0:i.call(a,t))??UD(t)},this.endOfMonth=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.endOfMonth)==null?void 0:i.call(a,t))??gh(t)},this.endOfWeek=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.endOfWeek)==null?void 0:l.call(i,t,a??this.options))??hh(t,a??this.options)},this.endOfYear=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.endOfYear)==null?void 0:i.call(a,t))??Mi(t)},this.format=(t,a,i)=>{var d,c;const l=((c=(d=this.overrides)==null?void 0:d.format)==null?void 0:c.call(d,t,a,i??this.options))??ga(t,a,i??this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(l):l},this.getISOWeek=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.getISOWeek)==null?void 0:i.call(a,t))??Ed(t)},this.getMonth=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.getMonth)==null?void 0:i.call(a,t))??xd(t)},this.getYear=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.getYear)==null?void 0:i.call(a,t))??Rd(t)},this.getWeek=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.getWeek)==null?void 0:l.call(i,t,a??this.options))??Dd(t,a??this.options)},this.isAfter=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.isAfter)==null?void 0:l.call(i,t,a))??bh(t,a)},this.isBefore=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.isBefore)==null?void 0:l.call(i,t,a))??Ys(t,a)},this.isDate=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.isDate)==null?void 0:i.call(a,t))??mh(t)},this.isSameDay=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.isSameDay)==null?void 0:l.call(i,t,a))??Sd(t,a)},this.isSameMonth=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.isSameMonth)==null?void 0:l.call(i,t,a))??tR(t,a)},this.isSameYear=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.isSameYear)==null?void 0:l.call(i,t,a))??Eh(t,a)},this.max=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.max)==null?void 0:i.call(a,t))??CD(t)},this.min=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.min)==null?void 0:i.call(a,t))??LD(t)},this.setMonth=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.setMonth)==null?void 0:l.call(i,t,a))??Oh(t,a)},this.setYear=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.setYear)==null?void 0:l.call(i,t,a))??Dh(t,a)},this.startOfBroadcastWeek=(t,a)=>{var i,l;return((l=(i=this.overrides)==null?void 0:i.startOfBroadcastWeek)==null?void 0:l.call(i,t,a??this))??Wh(t,a??this)},this.startOfDay=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.startOfDay)==null?void 0:i.call(a,t))??Rr(t)},this.startOfISOWeek=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.startOfISOWeek)==null?void 0:i.call(a,t))??fa(t)},this.startOfMonth=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.startOfMonth)==null?void 0:i.call(a,t))??ma(t)},this.startOfWeek=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.startOfWeek)==null?void 0:i.call(a,t))??xr(t,this.options)},this.startOfYear=t=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.startOfYear)==null?void 0:i.call(a,t))??Gs(t)},this.options={locale:Fi,...r},this.overrides=n}getDigitMap(){const{numerals:r="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:r}),t={};for(let a=0;a<10;a++)t[a.toString()]=n.format(a);return t}replaceDigits(r){const n=this.getDigitMap();return r.replace(/\d/g,t=>n[t]||t)}formatNumber(r){return this.replaceDigits(r.toString())}}const Ar=new Fr;function eF(e,r,n={}){return Object.entries(e).filter(([,a])=>a===!0).reduce((a,[i])=>(n[i]?a.push(n[i]):r[sn[i]]?a.push(r[sn[i]]):r[Vt[i]]&&a.push(r[Vt[i]]),a),[r[_e.Day]])}function nF(e){return w.createElement("button",{...e})}function tF(e){return w.createElement("span",{...e})}function rF(e){const{size:r=24,orientation:n="left",className:t}=e;return w.createElement("svg",{className:t,width:r,height:r,viewBox:"0 0 24 24"},n==="up"&&w.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&w.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&w.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&w.createElement("polygon",{points:"8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5"}))}function aF(e){const{day:r,modifiers:n,...t}=e;return w.createElement("td",{...t})}function sF(e){const{day:r,modifiers:n,...t}=e,a=w.useRef(null);return w.useEffect(()=>{var i;n.focused&&((i=a.current)==null||i.focus())},[n.focused]),w.createElement("button",{ref:a,...t})}function oF(e){const{options:r,className:n,components:t,classNames:a,...i}=e,l=[a[_e.Dropdown],n].join(" "),d=r==null?void 0:r.find(({value:c})=>c===i.value);return w.createElement("span",{"data-disabled":i.disabled,className:a[_e.DropdownRoot]},w.createElement(t.Select,{className:l,...i},r==null?void 0:r.map(({value:c,label:m,disabled:g})=>w.createElement(t.Option,{key:c,value:c,disabled:g},m))),w.createElement("span",{className:a[_e.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,w.createElement(t.Chevron,{orientation:"down",size:18,className:a[_e.Chevron]})))}function iF(e){return w.createElement("div",{...e})}function lF(e){return w.createElement("div",{...e})}function uF(e){const{calendarMonth:r,displayIndex:n,...t}=e;return w.createElement("div",{...t},e.children)}function dF(e){const{calendarMonth:r,displayIndex:n,...t}=e;return w.createElement("div",{...t})}function cF(e){return w.createElement("table",{...e})}function fF(e){return w.createElement("div",{...e})}const Gh=O.createContext(void 0);function va(){const e=O.useContext(Gh);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function mF(e){const{components:r}=va();return w.createElement(r.Dropdown,{...e})}function gF(e){const{onPreviousClick:r,onNextClick:n,previousMonth:t,nextMonth:a,...i}=e,{components:l,classNames:d,labels:{labelPrevious:c,labelNext:m}}=va(),g=O.useCallback(y=>{a&&(n==null||n(y))},[a,n]),p=O.useCallback(y=>{t&&(r==null||r(y))},[t,r]);return w.createElement("nav",{...i},w.createElement(l.PreviousMonthButton,{type:"button",className:d[_e.PreviousMonthButton],tabIndex:t?void 0:-1,"aria-disabled":t?void 0:!0,"aria-label":c(t),onClick:p},w.createElement(l.Chevron,{disabled:t?void 0:!0,className:d[_e.Chevron],orientation:"left"})),w.createElement(l.NextMonthButton,{type:"button",className:d[_e.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":m(a),onClick:g},w.createElement(l.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[_e.Chevron]})))}function pF(e){const{components:r}=va();return w.createElement(r.Button,{...e})}function hF(e){return w.createElement("option",{...e})}function yF(e){const{components:r}=va();return w.createElement(r.Button,{...e})}function vF(e){const{rootRef:r,...n}=e;return w.createElement("div",{...n,ref:r})}function kF(e){return w.createElement("select",{...e})}function bF(e){const{week:r,...n}=e;return w.createElement("tr",{...n})}function wF(e){return w.createElement("th",{...e})}function _F(e){return w.createElement("thead",{"aria-hidden":!0},w.createElement("tr",{...e}))}function TF(e){const{week:r,...n}=e;return w.createElement("th",{...n})}function SF(e){return w.createElement("th",{...e})}function EF(e){return w.createElement("tbody",{...e})}function OF(e){const{components:r}=va();return w.createElement(r.Dropdown,{...e})}const DF=Object.freeze(Object.defineProperty({__proto__:null,Button:nF,CaptionLabel:tF,Chevron:rF,Day:aF,DayButton:sF,Dropdown:oF,DropdownNav:iF,Footer:lF,Month:uF,MonthCaption:dF,MonthGrid:cF,Months:fF,MonthsDropdown:mF,Nav:gF,NextMonthButton:pF,Option:hF,PreviousMonthButton:yF,Root:vF,Select:kF,Week:bF,WeekNumber:TF,WeekNumberHeader:SF,Weekday:wF,Weekdays:_F,Weeks:EF,YearsDropdown:OF},Symbol.toStringTag,{value:"Module"}));function xF(e){return{...DF,...e}}function RF(e){const r={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0};return Object.entries(e).forEach(([n,t])=>{n.startsWith("data-")&&(r[n]=t)}),r}function FF(){const e={};for(const r in _e)e[_e[r]]=`rdp-${_e[r]}`;for(const r in sn)e[sn[r]]=`rdp-${sn[r]}`;for(const r in Vt)e[Vt[r]]=`rdp-${Vt[r]}`;for(const r in kt)e[kt[r]]=`rdp-${kt[r]}`;return e}function Yh(e,r,n){return(n??new Fr(r)).format(e,"LLLL y")}const AF=Yh;function NF(e,r,n){return(n??new Fr(r)).format(e,"d")}function PF(e,r=Ar){return r.format(e,"LLLL")}function MF(e){return e<10?`0${e.toLocaleString()}`:`${e.toLocaleString()}`}function BF(){return""}function qF(e,r,n){return(n??new Fr(r)).format(e,"cccccc")}function zh(e,r=Ar){return r.format(e,"yyyy")}const jF=zh,IF=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:Yh,formatDay:NF,formatMonthCaption:AF,formatMonthDropdown:PF,formatWeekNumber:MF,formatWeekNumberHeader:BF,formatWeekdayName:qF,formatYearCaption:jF,formatYearDropdown:zh},Symbol.toStringTag,{value:"Module"}));function CF(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...IF,...e}}function LF(e,r,n,t,a){const{startOfMonth:i,startOfYear:l,endOfYear:d,eachMonthOfInterval:c,getMonth:m}=a;return c({start:l(e),end:d(e)}).map(y=>{const v=t.formatMonthDropdown(y,a),D=m(y),E=r&&y<i(r)||n&&y>i(n)||!1;return{value:D,label:v,disabled:E}})}function $F(e,r={},n={}){let t={...r==null?void 0:r[_e.Day]};return Object.entries(e).filter(([,a])=>a===!0).forEach(([a])=>{t={...t,...n==null?void 0:n[a]}}),t}function HF(e,r,n){const t=e.today(),a=r?e.startOfISOWeek(t):e.startOfWeek(t),i=[];for(let l=0;l<7;l++){const d=e.addDays(a,l);i.push(d)}return i}function VF(e,r,n,t){if(!e||!r)return;const{startOfYear:a,endOfYear:i,addYears:l,getYear:d,isBefore:c,isSameYear:m}=t,g=a(e),p=i(r),y=[];let v=g;for(;c(v,p)||m(v,p);)y.push(v),v=l(v,1);return y.map(D=>{const E=n.formatYearDropdown(D,t);return{value:d(D),label:E,disabled:!1}})}function Kh(e,r,n){return(n??new Fr(r)).format(e,"LLLL y")}const UF=Kh;function WF(e,r,n,t){let a=(t??new Fr(n)).format(e,"PPPP");return r!=null&&r.today&&(a=`Today, ${a}`),a}function Xh(e,r,n,t){let a=(t??new Fr(n)).format(e,"PPPP");return r.today&&(a=`Today, ${a}`),r.selected&&(a=`${a}, selected`),a}const GF=Xh;function YF(){return""}function zF(e){return"Choose the Month"}function KF(e){return"Go to the Next Month"}function XF(e){return"Go to the Previous Month"}function ZF(e,r,n){return(n??new Fr(r)).format(e,"cccc")}function QF(e,r){return`Week ${e}`}function JF(e){return"Week Number"}function eA(e){return"Choose the Year"}const nA=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:UF,labelDay:GF,labelDayButton:Xh,labelGrid:Kh,labelGridcell:WF,labelMonthDropdown:zF,labelNav:YF,labelNext:KF,labelPrevious:XF,labelWeekNumber:QF,labelWeekNumberHeader:JF,labelWeekday:ZF,labelYearDropdown:eA},Symbol.toStringTag,{value:"Module"}));function tA(e,r,{classNames:n,months:t,focused:a,dateLib:i}){const l=O.useRef(null),d=O.useRef(t),c=O.useRef(!1);O.useLayoutEffect(()=>{const m=d.current;if(d.current=t,!r||!e.current||!(e.current instanceof HTMLElement))return;const g=l.current,p=e.current.cloneNode(!0);if(p instanceof HTMLElement?([...p.querySelectorAll("[data-animated-month]")??[]].forEach(k=>{const R=k.querySelector("[data-animated-month]");R&&k.contains(R)&&k.removeChild(R)}),l.current=p):l.current=null,t.length===0||m.length===0||t.length!==m.length||a||c.current||i.isSameMonth(t[0].date,m[0].date))return;const v=[...(g==null?void 0:g.querySelectorAll("[data-animated-month]"))??[]],D=[...e.current.querySelectorAll("[data-animated-month]")??[]];if(D&&D.every(E=>E instanceof HTMLElement)&&v&&v.every(E=>E instanceof HTMLElement)){c.current=!0;const E=i.isAfter(t[0].date,m[0].date);D.forEach((k,R)=>{const _=v[R];if(!_)return;const T=E?n[kt.caption_after_enter]:n[kt.caption_before_enter],B=E?n[kt.weeks_after_enter]:n[kt.weeks_before_enter];k.style.position="relative",k.style.overflow="hidden";const x=k.querySelector("[data-animated-caption]");x&&x instanceof HTMLElement&&x.classList.add(T);const N=k.querySelector("[data-animated-weeks]");N&&N instanceof HTMLElement&&N.classList.add(B);const F=()=>{c.current=!1,x&&x instanceof HTMLElement&&x.classList.remove(T),N&&N instanceof HTMLElement&&N.classList.remove(B),k.style.position="",k.style.overflow="",k.contains(_)&&k.removeChild(_)};_.style.pointerEvents="none",_.style.position="absolute",_.style.overflow="hidden",_.setAttribute("aria-hidden","true");const A=_.querySelector("[data-animated-weekdays]");A&&A instanceof HTMLElement&&(A.style.opacity="0");const j=_.querySelector("[data-animated-caption]");j&&j instanceof HTMLElement&&(j.classList.add(E?n[kt.caption_before_exit]:n[kt.caption_after_exit]),j.addEventListener("animationend",F));const Y=_.querySelector("[data-animated-weeks]");Y&&Y instanceof HTMLElement&&Y.classList.add(E?n[kt.weeks_before_exit]:n[kt.weeks_after_exit]),k.insertBefore(_,k.firstChild)})}})}function rA(e,r,n,t){const a=e[0],i=e[e.length-1],{ISOWeek:l,fixedWeeks:d,broadcastCalendar:c}=n??{},{addDays:m,differenceInCalendarDays:g,differenceInCalendarMonths:p,endOfBroadcastWeek:y,endOfISOWeek:v,endOfMonth:D,endOfWeek:E,isAfter:k,startOfBroadcastWeek:R,startOfISOWeek:_,startOfWeek:T}=t,B=c?R(a,t):l?_(a):T(a),x=c?y(i,t):l?v(D(i)):E(D(i)),N=g(x,B),F=p(i,a)+1,A=[];for(let V=0;V<=N;V++){const G=m(B,V);if(r&&k(G,r))break;A.push(G)}const Y=(c?35:42)*F;if(d&&A.length<Y){const V=Y-A.length;for(let G=0;G<V;G++){const L=m(A[A.length-1],1);A.push(L)}}return A}function aA(e){const r=[];return e.reduce((n,t)=>{const a=[],i=t.weeks.reduce((l,d)=>[...l,...d.days],a);return[...n,...i]},r)}function sA(e,r,n,t){const{numberOfMonths:a=1}=n,i=[];for(let l=0;l<a;l++){const d=t.addMonths(e,l);if(r&&d>r)break;i.push(d)}return i}function ag(e,r){const{month:n,defaultMonth:t,today:a=r.today(),numberOfMonths:i=1,endMonth:l,startMonth:d}=e;let c=n||t||a;const{differenceInCalendarMonths:m,addMonths:g,startOfMonth:p}=r;if(l&&m(l,c)<0){const y=-1*(i-1);c=g(l,y)}return d&&m(c,d)<0&&(c=d),p(c)}class Zh{constructor(r,n,t=Ar){this.date=r,this.displayMonth=n,this.outside=!!(n&&!t.isSameMonth(r,n)),this.dateLib=t}isEqualTo(r){return this.dateLib.isSameDay(r.date,this.date)&&this.dateLib.isSameMonth(r.displayMonth,this.displayMonth)}}class oA{constructor(r,n){this.date=r,this.weeks=n}}class iA{constructor(r,n){this.days=n,this.weekNumber=r}}function lA(e,r,n,t){const{addDays:a,endOfBroadcastWeek:i,endOfISOWeek:l,endOfMonth:d,endOfWeek:c,getISOWeek:m,getWeek:g,startOfBroadcastWeek:p,startOfISOWeek:y,startOfWeek:v}=t,D=e.reduce((E,k)=>{const R=n.broadcastCalendar?p(k,t):n.ISOWeek?y(k):v(k),_=n.broadcastCalendar?i(k,t):n.ISOWeek?l(d(k)):c(d(k)),T=r.filter(F=>F>=R&&F<=_),B=n.broadcastCalendar?35:42;if(n.fixedWeeks&&T.length<B){const F=r.filter(A=>{const j=B-T.length;return A>_&&A<=a(_,j)});T.push(...F)}const x=T.reduce((F,A)=>{const j=n.ISOWeek?m(A):g(A),Y=F.find(G=>G.weekNumber===j),V=new Zh(A,k,t);return Y?Y.days.push(V):F.push(new iA(j,[V])),F},[]),N=new oA(k,x);return E.push(N),E},[]);return n.reverseMonths?D.reverse():D}function uA(e,r){let{startMonth:n,endMonth:t}=e;const{startOfYear:a,startOfDay:i,startOfMonth:l,endOfMonth:d,addYears:c,endOfYear:m,newDate:g,today:p}=r,{fromYear:y,toYear:v,fromMonth:D,toMonth:E}=e;!n&&D&&(n=D),!n&&y&&(n=r.newDate(y,0,1)),!t&&E&&(t=E),!t&&v&&(t=g(v,11,31));const k=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return n?n=l(n):y?n=g(y,0,1):!n&&k&&(n=a(c(e.today??p(),-100))),t?t=d(t):v?t=g(v,11,31):!t&&k&&(t=m(e.today??p())),[n&&i(n),t&&i(t)]}function dA(e,r,n,t){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:i=1}=n,{startOfMonth:l,addMonths:d,differenceInCalendarMonths:c}=t,m=a?i:1,g=l(e);if(!r)return d(g,m);if(!(c(r,e)<i))return d(g,m)}function cA(e,r,n,t){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:i}=n,{startOfMonth:l,addMonths:d,differenceInCalendarMonths:c}=t,m=a?i??1:1,g=l(e);if(!r)return d(g,-m);if(!(c(g,r)<=0))return d(g,-m)}function fA(e){const r=[];return e.reduce((n,t)=>[...n,...t.weeks],r)}function Ii(e,r){const[n,t]=O.useState(e);return[r===void 0?n:r,t]}function mA(e,r){const[n,t]=uA(e,r),{startOfMonth:a,endOfMonth:i}=r,l=ag(e,r),[d,c]=Ii(l,e.month?l:void 0);O.useEffect(()=>{const N=ag(e,r);c(N)},[e.timeZone]);const m=sA(d,t,e,r),g=rA(m,e.endMonth?i(e.endMonth):void 0,e,r),p=lA(m,g,e,r),y=fA(p),v=aA(p),D=cA(d,n,e,r),E=dA(d,t,e,r),{disableNavigation:k,onMonthChange:R}=e,_=N=>y.some(F=>F.days.some(A=>A.isEqualTo(N))),T=N=>{if(k)return;let F=a(N);n&&F<a(n)&&(F=a(n)),t&&F>a(t)&&(F=a(t)),c(F),R==null||R(F)};return{months:p,weeks:y,days:v,navStart:n,navEnd:t,previousMonth:D,nextMonth:E,goToMonth:T,goToDay:N=>{_(N)||T(N.date)}}}function gA(e,r,n,t){let a,i=0,l=!1;for(;i<e.length&&!l;){const d=e[i],c=r(d);!c[sn.disabled]&&!c[sn.hidden]&&!c[sn.outside]&&(c[sn.focused]||t!=null&&t.isEqualTo(d)||n(d.date)||c[sn.today])&&(a=d,l=!0),i++}return a||(a=e.find(d=>{const c=r(d);return!c[sn.disabled]&&!c[sn.hidden]&&!c[sn.outside]})),a}function Dr(e,r,n=!1,t=Ar){let{from:a,to:i}=e;const{differenceInCalendarDays:l,isSameDay:d}=t;return a&&i?(l(i,a)<0&&([a,i]=[i,a]),l(r,a)>=(n?1:0)&&l(i,r)>=(n?1:0)):!n&&i?d(i,r):!n&&a?d(a,r):!1}function Qh(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Pd(e){return!!(e&&typeof e=="object"&&"from"in e)}function Jh(e){return!!(e&&typeof e=="object"&&"after"in e)}function ey(e){return!!(e&&typeof e=="object"&&"before"in e)}function ny(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function ty(e,r){return Array.isArray(e)&&e.every(r.isDate)}function Pt(e,r,n=Ar){const t=Array.isArray(r)?r:[r],{isSameDay:a,differenceInCalendarDays:i,isAfter:l}=n;return t.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(e,d);if(ty(d,n))return d.includes(e);if(Pd(d))return Dr(d,e,!1,n);if(ny(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(e.getDay()):d.dayOfWeek===e.getDay();if(Qh(d)){const c=i(d.before,e),m=i(d.after,e),g=c>0,p=m<0;return l(d.before,d.after)?p&&g:g||p}return Jh(d)?i(e,d.after)>0:ey(d)?i(d.before,e)>0:typeof d=="function"?d(e):!1})}function pA(e,r,n,t,a,i,l){const{ISOWeek:d,broadcastCalendar:c}=i,{addDays:m,addMonths:g,addWeeks:p,addYears:y,endOfBroadcastWeek:v,endOfISOWeek:D,endOfWeek:E,max:k,min:R,startOfBroadcastWeek:_,startOfISOWeek:T,startOfWeek:B}=l;let N={day:m,week:p,month:g,year:y,startOfWeek:F=>c?_(F,l):d?T(F):B(F),endOfWeek:F=>c?v(F,l):d?D(F):E(F)}[e](n,r==="after"?1:-1);return r==="before"&&t?N=k([t,N]):r==="after"&&a&&(N=R([a,N])),N}function ry(e,r,n,t,a,i,l,d=0){if(d>365)return;const c=pA(e,r,n.date,t,a,i,l),m=!!(i.disabled&&Pt(c,i.disabled,l)),g=!!(i.hidden&&Pt(c,i.hidden,l)),p=c,y=new Zh(c,p,l);return!m&&!g?y:ry(e,r,y,t,a,i,l,d+1)}function hA(e,r,n,t,a){const{autoFocus:i}=e,[l,d]=O.useState(),c=gA(r.days,n,t||(()=>!1),l),[m,g]=O.useState(i?c:void 0);return{isFocusTarget:E=>!!(c!=null&&c.isEqualTo(E)),setFocused:g,focused:m,blur:()=>{d(m),g(void 0)},moveFocus:(E,k)=>{if(!m)return;const R=ry(E,k,m,r.navStart,r.navEnd,e,a);R&&(r.goToDay(R),g(R))}}}function yA(e,r,n){const{disabled:t,hidden:a,modifiers:i,showOutsideDays:l,broadcastCalendar:d,today:c}=r,{isSameDay:m,isSameMonth:g,startOfMonth:p,isBefore:y,endOfMonth:v,isAfter:D}=n,E=r.startMonth&&p(r.startMonth),k=r.endMonth&&v(r.endMonth),R={[sn.focused]:[],[sn.outside]:[],[sn.disabled]:[],[sn.hidden]:[],[sn.today]:[]},_={};for(const T of e){const{date:B,displayMonth:x}=T,N=!!(x&&!g(B,x)),F=!!(E&&y(B,E)),A=!!(k&&D(B,k)),j=!!(t&&Pt(B,t,n)),Y=!!(a&&Pt(B,a,n))||F||A||!d&&!l&&N||d&&l===!1&&N,V=m(B,c??n.today());N&&R.outside.push(T),j&&R.disabled.push(T),Y&&R.hidden.push(T),V&&R.today.push(T),i&&Object.keys(i).forEach(G=>{const L=i==null?void 0:i[G];L&&Pt(B,L,n)&&(_[G]?_[G].push(T):_[G]=[T])})}return T=>{const B={[sn.focused]:!1,[sn.disabled]:!1,[sn.hidden]:!1,[sn.outside]:!1,[sn.today]:!1},x={};for(const N in R){const F=R[N];B[N]=F.some(A=>A===T)}for(const N in _)x[N]=_[N].some(F=>F===T);return{...B,...x}}}function vA(e,r){const{selected:n,required:t,onSelect:a}=e,[i,l]=Ii(n,a?n:void 0),d=a?n:i,{isSameDay:c}=r,m=v=>(d==null?void 0:d.some(D=>c(D,v)))??!1,{min:g,max:p}=e;return{selected:d,select:(v,D,E)=>{let k=[...d??[]];if(m(v)){if((d==null?void 0:d.length)===g||t&&(d==null?void 0:d.length)===1)return;k=d==null?void 0:d.filter(R=>!c(R,v))}else(d==null?void 0:d.length)===p?k=[v]:k=[...k,v];return a||l(k),a==null||a(k,v,D,E),k},isSelected:m}}function kA(e,r,n=0,t=0,a=!1,i=Ar){const{from:l,to:d}=r||{},{isSameDay:c,isAfter:m,isBefore:g}=i;let p;if(!l&&!d)p={from:e,to:n>0?void 0:e};else if(l&&!d)c(l,e)?a?p={from:l,to:void 0}:p=void 0:g(e,l)?p={from:e,to:l}:p={from:l,to:e};else if(l&&d)if(c(l,e)&&c(d,e))a?p={from:l,to:d}:p=void 0;else if(c(l,e))p={from:l,to:n>0?void 0:e};else if(c(d,e))p={from:e,to:n>0?void 0:e};else if(g(e,l))p={from:e,to:d};else if(m(e,l))p={from:l,to:e};else if(m(e,d))p={from:l,to:e};else throw new Error("Invalid range");if(p!=null&&p.from&&(p!=null&&p.to)){const y=i.differenceInCalendarDays(p.to,p.from);t>0&&y>t?p={from:e,to:void 0}:n>1&&y<n&&(p={from:e,to:void 0})}return p}function bA(e,r,n=Ar){const t=Array.isArray(r)?r:[r];let a=e.from;const i=n.differenceInCalendarDays(e.to,e.from),l=Math.min(i,6);for(let d=0;d<=l;d++){if(t.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function sg(e,r,n=Ar){return Dr(e,r.from,!1,n)||Dr(e,r.to,!1,n)||Dr(r,e.from,!1,n)||Dr(r,e.to,!1,n)}function wA(e,r,n=Ar){const t=Array.isArray(r)?r:[r];if(t.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?Dr(e,d,!1,n):ty(d,n)?d.some(c=>Dr(e,c,!1,n)):Pd(d)?d.from&&d.to?sg(e,{from:d.from,to:d.to},n):!1:ny(d)?bA(e,d.dayOfWeek,n):Qh(d)?n.isAfter(d.before,d.after)?sg(e,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):Pt(e.from,d,n)||Pt(e.to,d,n):Jh(d)||ey(d)?Pt(e.from,d,n)||Pt(e.to,d,n):!1))return!0;const l=t.filter(d=>typeof d=="function");if(l.length){let d=e.from;const c=n.differenceInCalendarDays(e.to,e.from);for(let m=0;m<=c;m++){if(l.some(g=>g(d)))return!0;d=n.addDays(d,1)}}return!1}function _A(e,r){const{disabled:n,excludeDisabled:t,selected:a,required:i,onSelect:l}=e,[d,c]=Ii(a,l?a:void 0),m=l?a:d;return{selected:m,select:(y,v,D)=>{const{min:E,max:k}=e,R=y?kA(y,m,E,k,i,r):void 0;return t&&n&&(R!=null&&R.from)&&R.to&&wA({from:R.from,to:R.to},n,r)&&(R.from=y,R.to=void 0),l||c(R),l==null||l(R,y,v,D),R},isSelected:y=>m&&Dr(m,y,!1,r)}}function TA(e,r){const{selected:n,required:t,onSelect:a}=e,[i,l]=Ii(n,a?n:void 0),d=a?n:i,{isSameDay:c}=r;return{selected:d,select:(p,y,v)=>{let D=p;return!t&&d&&d&&c(p,d)&&(D=void 0),a||l(D),a==null||a(D,p,y,v),D},isSelected:p=>d?c(d,p):!1}}function SA(e,r){const n=TA(e,r),t=vA(e,r),a=_A(e,r);switch(e.mode){case"single":return n;case"multiple":return t;case"range":return a;default:return}}function EA(e){const{components:r,formatters:n,labels:t,dateLib:a,locale:i,classNames:l}=O.useMemo(()=>{const De={...Fi,...e.locale};return{dateLib:new Fr({locale:De,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:xF(e.components),formatters:CF(e.formatters),labels:{...nA,...e.labels},locale:De,classNames:{...FF(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:d,mode:c,onDayBlur:m,onDayClick:g,onDayFocus:p,onDayKeyDown:y,onDayMouseEnter:v,onDayMouseLeave:D,onNextClick:E,onPrevClick:k,showWeekNumber:R,styles:_}=e,{formatCaption:T,formatDay:B,formatMonthDropdown:x,formatWeekNumber:N,formatWeekNumberHeader:F,formatWeekdayName:A,formatYearDropdown:j}=n,Y=mA(e,a),{days:V,months:G,navStart:L,navEnd:U,previousMonth:W,nextMonth:H,goToMonth:J}=Y,K=yA(V,e,a),{isSelected:te,select:se,selected:le}=SA(e,a)??{},{blur:Te,focused:Oe,isFocusTarget:nn,moveFocus:me,setFocused:he}=hA(e,Y,K,te??(()=>!1),a),{labelDayButton:Le,labelGridcell:Ge,labelGrid:on,labelMonthDropdown:en,labelNav:ln,labelWeekday:gn,labelWeekNumber:Rn,labelWeekNumberHeader:rn,labelYearDropdown:Dn}=t,ct=O.useMemo(()=>HF(a,e.ISOWeek),[a,e.ISOWeek]),kn=c!==void 0||g!==void 0,ft=O.useCallback(()=>{W&&(J(W),k==null||k(W))},[W,J,k]),rt=O.useCallback(()=>{H&&(J(H),E==null||E(H))},[J,H,E]),M=O.useCallback((De,Ke)=>$e=>{$e.preventDefault(),$e.stopPropagation(),he(De),se==null||se(De.date,Ke,$e),g==null||g(De.date,Ke,$e)},[se,g,he]),$=O.useCallback((De,Ke)=>$e=>{he(De),p==null||p(De.date,Ke,$e)},[p,he]),X=O.useCallback((De,Ke)=>$e=>{Te(),m==null||m(De.date,Ke,$e)},[Te,m]),ue=O.useCallback((De,Ke)=>$e=>{const zn={ArrowLeft:["day",e.dir==="rtl"?"after":"before"],ArrowRight:["day",e.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[$e.shiftKey?"year":"month","before"],PageDown:[$e.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(zn[$e.key]){$e.preventDefault(),$e.stopPropagation();const[Cn,pr]=zn[$e.key];me(Cn,pr)}y==null||y(De.date,Ke,$e)},[me,y,e.dir]),oe=O.useCallback((De,Ke)=>$e=>{v==null||v(De.date,Ke,$e)},[v]),ae=O.useCallback((De,Ke)=>$e=>{D==null||D(De.date,Ke,$e)},[D]),ye=O.useCallback(De=>Ke=>{const $e=Number(Ke.target.value),zn=a.setMonth(a.startOfMonth(De),$e);J(zn)},[a,J]),Ne=O.useCallback(De=>Ke=>{const $e=Number(Ke.target.value),zn=a.setYear(a.startOfMonth(De),$e);J(zn)},[a,J]),{className:qe,style:Nn}=O.useMemo(()=>({className:[l[_e.Root],e.className].filter(Boolean).join(" "),style:{..._==null?void 0:_[_e.Root],...e.style}}),[l,e.className,e.style,_]),Zt=RF(e),Yn=O.useRef(null);tA(Yn,!!e.animate,{classNames:l,months:G,focused:Oe,dateLib:a});const zr={dayPickerProps:e,selected:le,select:se,isSelected:te,months:G,nextMonth:H,previousMonth:W,goToMonth:J,getModifiers:K,components:r,classNames:l,styles:_,labels:t,formatters:n};return w.createElement(Gh.Provider,{value:zr},w.createElement(r.Root,{rootRef:e.animate?Yn:void 0,className:qe,style:Nn,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...Zt},w.createElement(r.Months,{className:l[_e.Months],style:_==null?void 0:_[_e.Months]},!e.hideNavigation&&w.createElement(r.Nav,{className:l[_e.Nav],style:_==null?void 0:_[_e.Nav],"aria-label":ln(),onPreviousClick:ft,onNextClick:rt,previousMonth:W,nextMonth:H}),G.map((De,Ke)=>{const $e=LF(De.date,L,U,n,a),zn=VF(L,U,n,a);return w.createElement(r.Month,{"data-animated-month":e.animate?"true":void 0,className:l[_e.Month],style:_==null?void 0:_[_e.Month],key:Ke,displayIndex:Ke,calendarMonth:De},w.createElement(r.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:l[_e.MonthCaption],style:_==null?void 0:_[_e.MonthCaption],calendarMonth:De,displayIndex:Ke},d!=null&&d.startsWith("dropdown")?w.createElement(r.DropdownNav,{className:l[_e.Dropdowns],style:_==null?void 0:_[_e.Dropdowns]},d==="dropdown"||d==="dropdown-months"?w.createElement(r.MonthsDropdown,{className:l[_e.MonthsDropdown],"aria-label":en(),classNames:l,components:r,disabled:!!e.disableNavigation,onChange:ye(De.date),options:$e,style:_==null?void 0:_[_e.Dropdown],value:a.getMonth(De.date)}):w.createElement("span",{role:"status","aria-live":"polite"},x(De.date,a)),d==="dropdown"||d==="dropdown-years"?w.createElement(r.YearsDropdown,{className:l[_e.YearsDropdown],"aria-label":Dn(a.options),classNames:l,components:r,disabled:!!e.disableNavigation,onChange:Ne(De.date),options:zn,style:_==null?void 0:_[_e.Dropdown],value:a.getYear(De.date)}):w.createElement("span",{role:"status","aria-live":"polite"},j(De.date,a))):w.createElement(r.CaptionLabel,{className:l[_e.CaptionLabel],role:"status","aria-live":"polite"},T(De.date,a.options,a))),w.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":c==="multiple"||c==="range","aria-label":on(De.date,a.options,a)||void 0,className:l[_e.MonthGrid],style:_==null?void 0:_[_e.MonthGrid]},!e.hideWeekdays&&w.createElement(r.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:l[_e.Weekdays],style:_==null?void 0:_[_e.Weekdays]},R&&w.createElement(r.WeekNumberHeader,{"aria-label":rn(a.options),className:l[_e.WeekNumberHeader],style:_==null?void 0:_[_e.WeekNumberHeader],scope:"col"},F()),ct.map((Cn,pr)=>w.createElement(r.Weekday,{"aria-label":gn(Cn,a.options,a),className:l[_e.Weekday],key:pr,style:_==null?void 0:_[_e.Weekday],scope:"col"},A(Cn,a.options,a)))),w.createElement(r.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:l[_e.Weeks],style:_==null?void 0:_[_e.Weeks]},De.weeks.map((Cn,pr)=>w.createElement(r.Week,{className:l[_e.Week],key:Cn.weekNumber,style:_==null?void 0:_[_e.Week],week:Cn},R&&w.createElement(r.WeekNumber,{week:Cn,style:_==null?void 0:_[_e.WeekNumber],"aria-label":Rn(Cn.weekNumber,{locale:i}),className:l[_e.WeekNumber],scope:"row",role:"rowheader"},N(Cn.weekNumber)),Cn.days.map(Pn=>{const{date:Tt}=Pn,He=K(Pn);if(He[sn.focused]=!He.hidden&&!!(Oe!=null&&Oe.isEqualTo(Pn)),He[Vt.selected]=(te==null?void 0:te(Tt))||He.selected,Pd(le)){const{from:is,to:ls}=le;He[Vt.range_start]=!!(is&&ls&&a.isSameDay(Tt,is)),He[Vt.range_end]=!!(is&&ls&&a.isSameDay(Tt,ls)),He[Vt.range_middle]=Dr(le,Tt,!0,a)}const ro=$F(He,_,e.modifiersStyles),Wi=eF(He,l,e.modifiersClassNames),Gi=!kn&&!He.hidden?Ge(Tt,He,a.options,a):void 0;return w.createElement(r.Day,{key:`${a.format(Tt,"yyyy-MM-dd")}_${a.format(Pn.displayMonth,"yyyy-MM")}`,day:Pn,modifiers:He,className:Wi.join(" "),style:ro,role:"gridcell","aria-selected":He.selected||void 0,"aria-label":Gi,"data-day":a.format(Tt,"yyyy-MM-dd"),"data-month":Pn.outside?a.format(Tt,"yyyy-MM"):void 0,"data-selected":He.selected||void 0,"data-disabled":He.disabled||void 0,"data-hidden":He.hidden||void 0,"data-outside":Pn.outside||void 0,"data-focused":He.focused||void 0,"data-today":He.today||void 0},!He.hidden&&kn?w.createElement(r.DayButton,{className:l[_e.DayButton],style:_==null?void 0:_[_e.DayButton],type:"button",day:Pn,modifiers:He,disabled:He.disabled||void 0,tabIndex:nn(Pn)?0:-1,"aria-label":Le(Tt,He,a.options,a),onClick:M(Pn,He),onBlur:X(Pn,He),onFocus:$(Pn,He),onKeyDown:ue(Pn,He),onMouseEnter:oe(Pn,He),onMouseLeave:ae(Pn,He)},B(Tt,a.options,a)):!He.hidden&&B(Pn.date,a.options,a))}))))))})),e.footer&&w.createElement(r.Footer,{className:l[_e.Footer],style:_==null?void 0:_[_e.Footer],role:"status","aria-live":"polite"},e.footer)))}var OA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ay=O.forwardRef((e,r)=>{var{as:n="div",className:t,above:a,below:i,variant:l,asChild:d}=e,c=OA(e,["as","className","above","below","variant","asChild"]);const{cn:m}=ke(),g=l==="show"?a:i,p=l==="show"?i:a,y=d?Qa:n;return w.createElement(y,Object.assign({},c,{ref:r,className:m("navds-responsive",t,{[`navds-responsive__above--${g}`]:g,[`navds-responsive__below--${p}`]:p})}))}),DA=O.forwardRef((e,r)=>w.createElement(ay,Object.assign({},e,{ref:r,variant:"hide"}))),Md=O.forwardRef((e,r)=>w.createElement(ay,Object.assign({},e,{ref:r,variant:"show"})));function Ut(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function xA({day:e,fromDate:r,toDate:n}){const t=n&&Wr(e,Rr(n))>0,a=r&&Wr(Rr(r),e)>0;return t||a||!1}const sy="dd.MM.yyyy",RA="MMMM yyyy",oy=[sy,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...oy];const du=(e,r,n,t,a)=>{let i;const l=oy;if(a){for(const d of l)if(i=Ha(e,d,r,{locale:n}),Ut(i)&&!cu(e,r,n,l))return i;for(const d of[...l.map(c=>c.replace("yyyy","yy"))])if(i=Ha(e,d,r,{locale:n}),Ut(i)&&cu(e,r,n,l)){const c=FA(e,d,r,n);return Ut(new Date(c))?new Date(c):new Date("Invalid date")}return new Date("Invalid date")}for(const d of l)if(i=Ha(e,d,r,{locale:n}),Ut(i)&&!cu(e,r,n,l))return i;return new Date("Invalid date")};function cu(e,r,n,t){let a;const i=t.map(l=>l.replace("yyyy","yy"));for(const l of i)if(a=Ha(e,l,r,{locale:n}),Ut(a))return!0;return!1}function FA(e,r,n,t){const a=Ha(og(e,"19"),r.replace("yy","yyyy"),n,{locale:t}),i=Ha(og(e,"20"),r.replace("yy","yyyy"),n,{locale:t});return Ut(a)&&Ut(i)?Ys(a,sR(new Date,{years:80}))?i:a:new Date("Invalid date")}function og(e,r){const n=e.slice(-2);return`${e.slice(0,e.length-2)}${r}${n}`}const Ss=(e,r,n,t)=>ga(e,t??sy,{locale:r}),AA=({month:e,start:r,end:n})=>{if(!e)return;let t=e;return r&&Ys(t,r)&&(t=r),n&&bh(t,n)&&(t=n),ma(t)};function NA(e,r,n,t){return ph({start:Gs(e),end:Mi(e)}).map(l=>{const d=ga(l,"LLLL",{locale:t}),c=xd(l),m=r&&l<ma(r)||n&&l>ma(n)||!1;return{value:c,label:d,disabled:m}})}function PA(e,r,n){if(!e||!r)return;const t=Gs(e),a=Mi(r),i=[];let l=t;for(;Ys(l,a)||Eh(l,a);)i.push(l),l=Td(l,1);return i.map(d=>{const c=ga(d,"yyyy",{locale:n});return{value:Rd(d),label:c,disabled:!1}})}function MA({captionLayout:e,startMonth:r,endMonth:n,today:t}){const a=e==="dropdown",i=t??new Date;return r?r=ma(r):!r&&a&&(r=Gs(Td(i,-100))),n?n=gh(n):!n&&a&&(n=Mi(i)),[r&&Rr(r),n&&Rr(n)]}var BA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const qA=e=>{var{day:r,modifiers:n,locale:t,children:a}=e,i=BA(e,["day","modifiers","locale","children"]);const{cn:l}=ke(),d=O.useRef(null);return O.useEffect(()=>{var c;n.focused&&((c=d.current)===null||c===void 0||c.focus())},[n.focused]),n.hidden?w.createElement(w.Fragment,null):w.createElement("button",Object.assign({},i,{ref:d,"aria-hidden":r.outside,"aria-pressed":!!n.selected,"aria-label":ga(r.date,"cccc d",{locale:t}),"data-pressed":n.selected,"data-today":n.today||void 0,className:l(i.className,{"rdp-day_disabled":n.disabled,"rdp-day_selected":n.selected,"rdp-day_range_start":n.range_start,"rdp-day_range_middle":n.range_middle,"rdp-day_range_end":n.range_end,"rdp-day_today":n.today,"rdp-day_outside":n.outside,"rdp-day__weekend":n.weekend})}),a)};var jA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ig=O.forwardRef((e,r)=>{const{inputProps:n,errorId:t,showErrorMsg:a,hasError:i,size:l,inputDescriptionId:d,readOnly:c}=ya(e,"select"),{children:m,label:g,className:p,description:y,htmlSize:v,hideLabel:D=!1,style:E}=e,k=jA(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:R}=ke(),_={onMouseDown:T=>{c&&(T.preventDefault(),T.target.focus())},onKeyDown:T=>{c&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(T.key)&&T.preventDefault()}};return w.createElement("div",{className:R(p,"navds-form-field",`navds-form-field--${l}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":c,"navds-select--error":i,"navds-select--readonly":c})},w.createElement(jn,{htmlFor:n.id,size:l,className:R("navds-form-field__label",{"navds-sr-only":D})},c&&w.createElement(Rh,null),g),!!y&&w.createElement(mn,{className:R("navds-form-field__description",{"navds-sr-only":D}),id:d,size:l,as:"div"},y),w.createElement("div",{className:R("navds-select__container"),style:E},w.createElement("select",Object.assign({},In(k,["error","errorId","size","readOnly"]),n,_,{ref:r,className:R("navds-select__input","navds-body-short",`navds-body-short--${l??"medium"}`),size:v}),m),w.createElement(Cp,{className:R("navds-select__chevron"),"aria-hidden":!0})),w.createElement("div",{className:R("navds-form-field__error"),id:t,"aria-relevant":"additions removals","aria-live":"polite"},a&&w.createElement(es,{size:l,showIcon:!0},e.error)))}),iy=({week:{weekNumber:e,days:r},onWeekNumberClick:n,className:t,style:a,showOnDesktop:i})=>{const l=qi().translate,{cn:d}=ke(),{getModifiers:c}=va(),m=O.useMemo(()=>r.filter(p=>{const y=c(p);return!(y.hidden||y.outside||y.disabled)}).length===0,[r,c]),g=i?Md:DA;return!n||m?w.createElement(g,{above:"sm",asChild:!0},w.createElement("td",{className:"rdp-cell"},w.createElement(Di,{as:"span",textColor:"subtle",className:t,style:a,"aria-label":l("weekNumber",{week:e})},e))):w.createElement(g,{above:"sm",asChild:!0},w.createElement("td",{className:d("rdp-cell",{"navds-date__week-wrapper":!i})},w.createElement(Gt,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":l("selectWeekNumber",{week:e}),style:a,className:d("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{n(e,r.map(p=>p.date))},icon:w.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},IA=({onWeekNumberClick:e,weeks:r})=>{const n=qi().translate,{cn:t}=ke(),a=dr();return e?w.createElement(Md,{below:"sm",asChild:!0},w.createElement("table",{className:"rdp-table",role:"grid"},w.createElement("tbody",{className:"rdp-tbody"},w.createElement("tr",{className:t("rdp-row navds-date__week-row")},w.createElement(Di,{as:"th",weight:"semibold",className:t("rdp-cell navds-date__week-cell")},w.createElement("span",{className:t("navds-date__week-wrapper"),id:a},n("week"))),r==null?void 0:r.map(i=>w.createElement(iy,{key:i.weekNumber,week:i,onWeekNumberClick:e,showOnDesktop:!1,className:t("navds-date__week-wrapper")})))))):null};var CA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const LA=e=>{var{children:r,calendarMonth:n,locale:t,onWeekNumberClick:a}=e,i=CA(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:l,goToMonth:d,previousMonth:c,nextMonth:m}=va(),{captionLayout:g}=l,{cn:p}=ke(),y=qi().translate,v=O.useCallback((T,B)=>{const x=Number(B.target.value),N=Oh(ma(T),x);d(N)},[d]),D=O.useCallback((T,B)=>{const x=Number(B.target.value),N=Dh(ma(T),x);d(N)},[d]),[E,k]=MA({captionLayout:g==="dropdown"?"dropdown":"label",startMonth:l.startMonth,endMonth:l.endMonth,today:l.today}),R=NA(n.date,E,k,t),_=PA(E,k,t);return w.createElement("div",Object.assign({},In(i,["displayIndex"])),w.createElement("div",{className:p("navds-date__caption")},(g==null?void 0:g.startsWith("dropdown"))&&w.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:p("navds-sr-only")},ga(n.date,"LLLL y",{locale:t})),w.createElement(Gt,{variant:"tertiary-neutral",disabled:!c,onClick:()=>c&&d(c),icon:w.createElement(mS,{title:y("goToPreviousMonth")}),className:p("navds-date__caption-button"),type:"button"}),g!=null&&g.startsWith("dropdown")?w.createElement("div",{className:p("navds-date__caption")},w.createElement(ig,{label:y("month"),hideLabel:!0,className:p("navds-date__caption__month"),onChange:T=>v(n.date,T),value:xd(n.date)},R==null?void 0:R.map(({value:T,label:B,disabled:x})=>w.createElement("option",{key:T,value:T,disabled:x},B))),w.createElement(ig,{label:y("year"),hideLabel:!0,className:p("navds-date__caption__year"),onChange:T=>D(n.date,T),value:Rd(n.date)},_==null?void 0:_.map(({value:T,label:B,disabled:x})=>w.createElement("option",{key:T,value:T,disabled:x},B)))):w.createElement(mn,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:p("navds-date__caption-label")},ga(n.date,"LLLL y",{locale:t})),w.createElement(Gt,{variant:"tertiary-neutral",icon:w.createElement(pS,{title:y("goToNextMonth")}),onClick:()=>m&&d(m),disabled:!m,className:p("navds-date__caption-button"),type:"button"})),w.createElement(IA,{weeks:n.weeks,onWeekNumberClick:a}),r)};var $A=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const HA={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},ly=e=>{var{className:r,dropdownCaption:n,disabled:t=[],disableWeekends:a=!1,showWeekNumber:i=!1,selected:l,fixedWeeks:d=!1,onWeekNumberClick:c,fromDate:m,toDate:g,month:p,mode:y,handleSelect:v,locale:D}=e,E=$A(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:k}=ke(),R=dh(),_=D?Nh(D):R,T=y??"single";return w.createElement(EA,Object.assign({captionLayout:n?"dropdown":"label",hideNavigation:!0,locale:_,mode:T,onSelect:(B,x)=>{if(T!=="range"||B||!Vh(l)){v(B);return}if(!l.to){v({from:x,to:void 0});return}let N;Sd(l.to,x)?N=void 0:Ys(x,l.to)?N={from:x,to:l.to}:N={from:l.to,to:x},v(N)},selected:l,classNames:HA,components:{MonthCaption:()=>w.createElement(w.Fragment,null),DayButton:O.useCallback(B=>w.createElement(qA,Object.assign({},B,{locale:_})),[_]),Month:O.useCallback(B=>w.createElement(LA,Object.assign({},B,{locale:_,onWeekNumberClick:T==="multiple"?c:void 0})),[_,T,c]),Day:O.useCallback(B=>w.createElement("td",Object.assign({},In(B,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:O.useCallback(B=>w.createElement(iy,Object.assign({},B,{showOnDesktop:!0,onWeekNumberClick:T==="multiple"?c:void 0})),[T,c]),WeekNumberHeader:O.useCallback(B=>w.createElement(Md,{above:"sm",asChild:!0},w.createElement("th",Object.assign({},B))),[]),Weekdays:O.useCallback(B=>w.createElement("thead",Object.assign({},B,{className:"rdp-head","aria-hidden":!0}),w.createElement("tr",{className:"rdp-head_row"},B.children)),[])},className:k("navds-date",r),disabled:B=>a&&fi(B)||Pt(B,t)||xA({day:B,fromDate:m,toDate:g}),weekStartsOn:1,modifiers:{weekend:B=>a&&fi(B)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:i,fixedWeeks:d,showOutsideDays:!0,startMonth:m,endMonth:g,month:AA({month:p,start:m,end:g})},In(E,["onSelect","role","id","defaultSelected"])))};var VA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const UA=O.forwardRef((e,r)=>{var{className:n,locale:t,translations:a,selected:i,defaultSelected:l,onSelect:d,mode:c}=e,m=VA(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:g}=ke(),p=zt("DatePicker",a,Ph(t)),[y,v]=ii({defaultValue:l,value:i,onChange:D=>d==null?void 0:d(D)});return w.createElement(Mh,{translate:p},w.createElement("div",{ref:r,className:g("navds-date__standalone-wrapper",n)},w.createElement(ly,Object.assign({},m,{locale:t,handleSelect:v,selected:y,mode:c}))))});var WA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const hi=O.forwardRef((e,r)=>{var{children:n,locale:t,translations:a,selected:i,id:l,defaultSelected:d,wrapperClassName:c,open:m,onClose:g,onOpenToggle:p,strategy:y,mode:v}=e,D=WA(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const E=zt("DatePicker",a,Ph(t)),{cn:k}=ke(),R=dr(l),[_,T]=ii({defaultValue:!1,value:m}),[B,x]=O.useState(null),N=Za(x,r),[F,A]=ii({defaultValue:d,value:i,onChange:j=>{var Y;let V=!1;v==="single"&&j?V=!0:Vh(j)&&j.from&&j.to&&(V=!0,Sd(j.from,j.to)&&(V=!1)),V&&(g==null||g(),T(!1)),(Y=D==null?void 0:D.onSelect)===null||Y===void 0||Y.call(D,j)}});return w.createElement(Mh,{translate:E},w.createElement(DR,{open:_,onOpen:()=>{T(j=>!j),p==null||p()},ariaId:R,defined:!0},w.createElement("div",{ref:N,className:k("navds-date__wrapper",c)},n,w.createElement(YR,{open:_,anchor:B,onClose:()=>{g==null||g(),_&&T(!1)},locale:t,translate:E,variant:v??"single",popoverProps:{id:R,strategy:y}},w.createElement(ly,Object.assign({},D,{locale:t,handleSelect:A,selected:F,mode:v}))))))});hi.Standalone=UA;hi.Input=xR;const GA=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),YA=(e={})=>{var r;const{locale:n,required:t,defaultSelected:a,today:i=new Date,fromDate:l,toDate:d,disabled:c,disableWeekends:m,onDateChange:g,inputFormat:p,onValidate:y,defaultMonth:v,allowTwoDigitYear:D=!0}=e,[E,k]=O.useState(null),R=dh(),_=n?Nh(n):R,[T,B]=O.useState(a),[x,N]=O.useState((r=T??v)!==null&&r!==void 0?r:i),[F,A]=O.useState(T),[j,Y]=O.useState(!1),V=T?Ss(T,_,"date",p):"",[G,L]=O.useState(V),U=O.useCallback(me=>{var he,Le;Y(me),me&&N((Le=(he=F??T)!==null&&he!==void 0?he:v)!==null&&Le!==void 0?Le:i)},[v,T,F,i]),W=me=>{g==null||g(me),A(me)},H=(me={})=>y==null?void 0:y(GA(me));return{datepickerProps:{month:x,onMonthChange:N,onDayClick:(me,{selected:he})=>{if(!(he&&t)){if(me&&!he&&(U(!1),E==null||E.focus()),he){W(void 0),L(""),H({isValidDate:!1,isEmpty:!0});return}W(me),H(),N(me),L(me?Ss(me,_,"date",p):"")}},selected:F??new Date("Invalid date"),locale:n,fromDate:l,toDate:d,today:i,open:j,onClose:()=>{U(!1),E==null||E.focus()},onOpenToggle:()=>U(!j),disabled:c,disableWeekends:m},inputProps:{onChange:me=>{L(me.target.value);const he=du(me.target.value,i,_,"date",D),Le=l&&he&&Wr(l,he)>0,Ge=d&&he&&Wr(he,d)>0;if(!Ut(he)||m&&fi(he)||c&&Pt(he,c)){W(void 0),H({isInvalid:!Ut(he),isWeekend:m&&fi(he),isDisabled:c&&Pt(he,c),isValidDate:!1,isEmpty:!me.target.value,isBefore:Le??!1,isAfter:Ge??!1});return}if(Le||Ge){W(void 0),H({isValidDate:!1,isBefore:Le??!1,isAfter:Ge??!1});return}W(he),H(),N(v??he)},onFocus:me=>{if(me.target.readOnly)return;const he=du(me.target.value,i,_,"date",D);if(Ut(he)){L(Ss(he,_,"date",p));const Le=l&&he&&Wr(l,he)>0,Ge=d&&he&&Wr(he,d)>0;!Le&&!Ge&&N(he)}},onBlur:me=>{const he=du(me.target.value,i,_,"date",D);Ut(he)&&L(Ss(he,_,"date",p))},value:G,setAnchorRef:k},reset:()=>{var me;W(T),N((me=T??v)!==null&&me!==void 0?me:i),L(V??""),B(a)},selectedDay:F,setSelected:me=>{var he;W(me),N((he=me??v)!==null&&he!==void 0?he:i),L(me?Ss(me,_,"date",p):"")}}};function Hn(e,r,n,t){return t?typeof t=="string"?{[`--__${e}c-${r}-${n}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([a,i])=>[`--__${e}c-${r}-${n}-${a}`,i])):{}}const zA={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},KA={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},lg=(e,r,n,t,a,i)=>r.split(" ").map((l,d,c)=>{var m,g;if(e==="margin-inline"&&l==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&l==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&l==="auto")return"auto";let p=`var(--${i}-${n}-${l})`;if(t.includes(l))p=l==="px"?"1px":l;else if(n==="spacing"&&l.startsWith("space"))p=`var(--${i}-${l})`;else if(n==="spacing"){const y=`--${i}-spacing-${l}`;p=`var(${(m=zA[y])!==null&&m!==void 0?m:y})`}else if(n==="radius"){const y=(g=KA[l])!==null&&g!==void 0?g:l;p=`var(--${i}-radius-${y})`}return a?l==="0"?"0":`calc(-1 * ${p})`:p}).join(" ");function lt(e,r,n,t,a,i=!1,l=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${r}-${n}-xs`]:lg(n,a,t,l,i,e)};const d={};return Object.entries(a).forEach(([c,m])=>{d[`--__${e}c-${r}-${n}-${c}`]=lg(n,m,t,l,i,e)}),d}const Bd=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],qd=({children:e,className:r,padding:n,paddingInline:t,paddingBlock:a,margin:i,marginInline:l,marginBlock:d,width:c,minWidth:m,maxWidth:g,height:p,minHeight:y,maxHeight:v,position:D,inset:E,top:k,right:R,left:_,bottom:T,overflow:B,overflowX:x,overflowY:N,flexBasis:F,flexGrow:A,flexShrink:j,gridColumn:Y})=>{const V=$s(!1),{cn:G}=ke(),L=V?"ax":"a",U=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},lt(L,"r","p","spacing",n)),lt(L,"r","pi","spacing",t)),lt(L,"r","pb","spacing",a)),lt(L,"r","m","spacing",i)),lt(L,"r","mi","spacing",l)),lt(L,"r","mb","spacing",d)),Hn(L,"r","w",c)),Hn(L,"r","minw",m)),Hn(L,"r","maxw",g)),Hn(L,"r","h",p)),Hn(L,"r","minh",y)),Hn(L,"r","maxh",v)),Hn(L,"r","position",D)),lt(L,"r","inset","spacing",E)),lt(L,"r","top","spacing",k)),lt(L,"r","right","spacing",R)),lt(L,"r","bottom","spacing",T)),lt(L,"r","left","spacing",_)),Hn(L,"r","overflow",B)),Hn(L,"r","overflowx",x)),Hn(L,"r","overflowy",N)),Hn(L,"r","flex-basis",F)),Hn(L,"r","flex-grow",A)),Hn(L,"r","flex-shrink",j)),Hn(L,"r","grid-column",Y));return w.createElement(Qa,{className:G({className:r,"navds-r-p":n,"navds-r-pi":t,"navds-r-pb":a,"navds-r-m":i,"navds-r-mi":l,"navds-r-mb":d,"navds-r-w":c,"navds-r-minw":m,"navds-r-maxw":g,"navds-r-h":p,"navds-r-minh":y,"navds-r-maxh":v,"navds-r-position":D,"navds-r-inset":E,"navds-r-top":k,"navds-r-right":R,"navds-r-bottom":T,"navds-r-left":_,"navds-r-overflow":B,"navds-r-overflowx":x,"navds-r-overflowy":N,"navds-r-flex-basis":F,"navds-r-flex-grow":A,"navds-r-flex-shrink":j,"navds-r-grid-column":Y}),style:U},e)};var XA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ZA=O.forwardRef((e,r)=>{var{children:n,className:t,as:a="div",background:i,borderColor:l,borderWidth:d,borderRadius:c,shadow:m,style:g,asChild:p}=e,y=XA(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:v}=ke(),D=Object.assign(Object.assign(Object.assign({},g),{"--__axc-box-background":i?`var(--ax-bg-${i})`:void 0,"--__axc-box-shadow":m?`var(--ax-shadow-${m})`:void 0,"--__axc-box-border-color":l?`var(--ax-border-${l})`:void 0,"--__axc-box-border-width":d?d.split(" ").map(k=>`${k}px`).join(" "):void 0}),lt("ax","box","radius","radius",c,!1,["0"])),E=p?Qa:a;return w.createElement(qd,Object.assign({},y),w.createElement(E,Object.assign({},In(y,Bd),{ref:r,style:D,className:v("navds-box",t,{"navds-box-bg":i,"navds-box-border-color":l,"navds-box-border-width":d,"navds-box-radius":c,"navds-box-shadow":m})}),n))});var QA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const JA=O.forwardRef((e,r)=>{var{children:n,className:t,as:a="div",background:i,borderColor:l,borderWidth:d,borderRadius:c,shadow:m,style:g,asChild:p}=e,y=QA(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const v=$s(!1),{cn:D}=ke(),E=v?"ax":"a",k=Object.assign(Object.assign(Object.assign({},g),{[`--__${E}c-box-background`]:i?`var(--a-${i})`:void 0,[`--__${E}c-box-shadow`]:m?`var(--a-shadow-${m})`:void 0,[`--__${E}c-box-border-color`]:l?`var(--a-${l})`:void 0,[`--__${E}c-box-border-width`]:d?d.split(" ").map(_=>`${_}px`).join(" "):void 0}),lt(E,"box","radius","radius",c,!1,["0"])),R=p?Qa:a;return w.createElement(qd,Object.assign({},y),w.createElement(R,Object.assign({},In(y,Bd),{ref:r,style:k,className:D("navds-box",t,{"navds-box-bg":i,"navds-box-border-color":l,"navds-box-border-width":d,"navds-box-border-radius":c,"navds-box-shadow":m})}),n))}),uy=JA;uy.New=ZA;var eN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const dy=O.forwardRef((e,r)=>{var{children:n,className:t,as:a="div",align:i,justify:l,wrap:d=!0,gap:c,style:m,direction:g="row",asChild:p}=e,y=eN(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const D=$s(!1)?"ax":"a",{cn:E}=ke(),k=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),lt(D,"stack","gap","spacing",c)),Hn(D,"stack","direction",g)),Hn(D,"stack","align",i)),Hn(D,"stack","justify",l)),R=p?Qa:a;return w.createElement(qd,Object.assign({},y),w.createElement(R,Object.assign({},In(y,Bd),{ref:r,style:k,className:E("navds-stack",t,{"navds-vstack":g==="column","navds-hstack":g==="row","navds-stack-gap":c,"navds-stack-align":i,"navds-stack-justify":l,"navds-stack-direction":g,"navds-stack-wrap":d})}),n))});var nN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Yt=O.forwardRef((e,r)=>{var{as:n="div"}=e,t=nN(e,["as"]);return w.createElement(dy,Object.assign({as:n},t,{ref:r,direction:"row"}))});var tN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Bt=O.forwardRef((e,r)=>{var{as:n="div"}=e,t=tN(e,["as"]);return w.createElement(dy,Object.assign({as:n},t,{ref:r,direction:"column",wrap:!1}))});var rN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const aN=O.forwardRef((e,r)=>{var{className:n}=e,t=rN(e,["className"]);const{cn:a}=ke();return w.createElement("tbody",Object.assign({},t,{ref:r,className:a("navds-table__body",n)}))});var sN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const cy=O.forwardRef((e,r)=>{var{className:n,children:t,align:a,textSize:i}=e,l=sN(e,["className","children","align","textSize"]);const{cn:d}=ke();return w.createElement("th",Object.assign({ref:r,className:d("navds-table__header-cell","navds-label",n,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":i==="small"})},l),t)}),fy=O.createContext(null);var oN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const iN=O.forwardRef((e,r)=>{var n,t,a,i,{className:l,children:d,sortable:c=!1,sortKey:m}=e,g=oN(e,["className","children","sortable","sortKey"]);const p=O.useContext(fy),{cn:y}=ke();return c&&!m&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),w.createElement(cy,Object.assign({scope:"col",ref:r,className:y(l),"aria-sort":c?((n=p==null?void 0:p.sort)===null||n===void 0?void 0:n.orderBy)===m?(t=p==null?void 0:p.sort)===null||t===void 0?void 0:t.direction:"none":void 0},g),c?w.createElement("button",{type:"button",className:y("navds-table__sort-button"),onClick:c&&m?()=>{var v;return(v=p==null?void 0:p.onSortChange)===null||v===void 0?void 0:v.call(p,m)}:void 0},d,((a=p==null?void 0:p.sort)===null||a===void 0?void 0:a.orderBy)===m?((i=p==null?void 0:p.sort)===null||i===void 0?void 0:i.direction)==="descending"?w.createElement(PS,{"aria-hidden":!0}):w.createElement(BS,{"aria-hidden":!0}):w.createElement(yS,{"aria-hidden":!0})):d)});var lN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const my=O.forwardRef((e,r)=>{var{className:n,children:t="",align:a,textSize:i}=e,l=lN(e,["className","children","align","textSize"]);const{cn:d}=ke();return w.createElement(mn,Object.assign({as:"td",ref:r,className:d("navds-table__data-cell",n,{[`navds-table__data-cell--align-${a}`]:a}),size:i},l),t)});var uN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const dN=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function cN(e){const r=parseFloat(e);return!Number.isNaN(r)&&Number.isFinite(r)}function ug(e){return typeof e=="string"&&e[e.length-1]==="%"&&cN(e.substring(0,e.length-1))}function fu(e,r){r===0&&(e!=null&&e.style)&&(e.style.display="none")}function fN(e,r){r===0&&(e!=null&&e.style)&&(e.style.display="")}const mN=e=>{var{children:r,className:n,innerClassName:t,duration:a=250,easing:i="ease",height:l}=e,d=uN(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=ke(),m=O.useRef(l),g=O.useRef(null),p=O.useRef(),y=O.useRef(),v=O.useRef(l),D=O.useRef("visible"),E=dN?0:a;typeof v.current=="number"?(typeof l!="string"&&(v.current=l<0?0:l),D.current="hidden"):ug(v.current)&&(v.current=l==="0%"?0:l,D.current="hidden");const[k,R]=O.useState(v.current),[_,T]=O.useState(D.current),[B,x]=O.useState(!1);O.useEffect(()=>{fu(g.current,v.current)},[]),O.useEffect(()=>{if(l!==m.current&&g.current){fN(g.current,m.current),g.current.style.overflow="hidden";const j=g.current.offsetHeight;g.current.style.overflow="";const Y=E;let V,G,L="hidden",U;const W=m.current==="auto";typeof l=="number"?(V=l<0?0:l,G=V):ug(l)?(V=l==="0%"?0:l,G=V):(V=j,G="auto",L=void 0),W&&(G=V,V=j),R(V),T("hidden"),x(!W),clearTimeout(y.current),clearTimeout(p.current),W?(U=!0,y.current=setTimeout(()=>{R(G),T(L),x(U)},50),p.current=setTimeout(()=>{x(!1),fu(g.current,G)},Y)):y.current=setTimeout(()=>{R(G),T(L),x(!1),l!=="auto"&&fu(g.current,V)},Y)}return m.current=l,()=>{clearTimeout(y.current),clearTimeout(p.current)}},[l]);const N={height:k,overflow:_};B&&(N.transition=`height ${E}ms ${i} 0ms`,N.WebkitTransition=N.transition);const A=typeof d["aria-hidden"]<"u"?d["aria-hidden"]:l===0;return w.createElement("div",Object.assign({},d,{className:c(n),style:N}),w.createElement("div",{"aria-hidden":A,className:c(t),ref:g},r))};var gN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const gy=O.forwardRef((e,r)=>{var{className:n,selected:t=!1,shadeOnHover:a=!0}=e,i=gN(e,["className","selected","shadeOnHover"]);const{cn:l}=ke();return w.createElement("tr",Object.assign({},i,{ref:r,className:l("navds-table__row",n,{"navds-table__row--selected":t,"navds-table__row--shade-on-hover":a})}))});var pN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const hN=O.forwardRef((e,r)=>{var{className:n,children:t,content:a,togglePlacement:i="left",defaultOpen:l=!1,open:d,onOpenChange:c,expansionDisabled:m=!1,expandOnRowClick:g=!1,colSpan:p=999,contentGutter:y,onClick:v}=e,D=pN(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:E}=ke(),[k,R]=ii({defaultValue:l,value:d,onChange:c}),_=zt("global"),T=dr(),B=N=>{R(F=>!F),N.stopPropagation()},x=N=>{g&&!m&&!py(N.target)&&B(N)};return w.createElement(w.Fragment,null,w.createElement(gy,Object.assign({},D,{ref:r,className:E("navds-table__expandable-row",n,{"navds-table__expandable-row--open":k,"navds-table__expandable-row--expansion-disabled":m,"navds-table__expandable-row--clickable":g}),onClick:la(v,x)}),i==="right"&&t,w.createElement(my,{className:E("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":k}),onClick:m?()=>null:B},!m&&w.createElement("button",{className:E("navds-table__toggle-expand-button"),type:"button","aria-controls":T,"aria-expanded":k,onClick:B},w.createElement(Cp,{className:E("navds-table__expandable-icon"),title:_(k?"showLess":"showMore")}))),i==="left"&&t),w.createElement("tr",{"data-state":k?"open":"closed",className:E("navds-table__expanded-row"),"aria-hidden":!k,id:T},w.createElement("td",{colSpan:p,className:E("navds-table__expanded-row-cell")},w.createElement(mN,{className:E("navds-table__expanded-row-collapse"),innerClassName:E(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${y??i}`),height:k?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function py(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:py(e.parentElement)}var yN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const vN=O.forwardRef((e,r)=>{var{className:n}=e,t=yN(e,["className"]);const{cn:a}=ke();return w.createElement("thead",Object.assign({},t,{ref:r,className:a("navds-table__header",n)}))});var kN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Bn=O.forwardRef((e,r)=>{var{className:n,zebraStripes:t=!1,size:a="medium",onSortChange:i,sort:l}=e,d=kN(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:c}=ke();return w.createElement(fy.Provider,{value:{onSortChange:i,sort:l}},w.createElement("table",Object.assign({},d,{ref:r,className:c("navds-table",`navds-table--${a}`,n,{"navds-table--zebra-stripes":t})})))});Bn.Header=vN;Bn.Body=aN;Bn.Row=gy;Bn.ColumnHeader=iN;Bn.HeaderCell=cy;Bn.DataCell=my;Bn.ExpandableRow=hN;var bN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Cu=O.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:i="medium",icon:l}=e,d=bN(e,["children","className","variant","size","icon"]);const{cn:c}=ke(),m=(a==null?void 0:a.endsWith("-filled"))&&"strong",g=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",p=a==null?void 0:a.replace("-filled","").replace("-moderate","");return w.createElement(mn,Object.assign({},d,{ref:r,as:"span",size:i==="medium"?"medium":"small",className:c("navds-tag",t,`navds-tag--${a}`,`navds-tag--${i}`,`navds-tag--${m||g||"outline"}`,`navds-tag--${p}`)}),l&&w.createElement("span",{className:c("navds-tag__icon--left")},l),n)}),wN=e=>{const r=ya(e,"fieldset"),{inputProps:n}=r;return Object.assign(Object.assign({},r),{inputProps:{"aria-invalid":n["aria-invalid"],"aria-describedby":n["aria-describedby"]}})};var _N=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const hy=O.forwardRef((e,r)=>{var n,t,a;const{inputProps:i,errorId:l,showErrorMsg:d,hasError:c,size:m,readOnly:g,inputDescriptionId:p}=wN(e),{cn:y}=ke(),v=O.useContext(pi),{children:D,className:E,errorPropagation:k=!0,legend:R,description:_,hideLegend:T,nativeReadOnly:B=!0}=e,x=_N(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return w.createElement(pi.Provider,{value:{error:k?(n=e.error)!==null&&n!==void 0?n:v==null?void 0:v.error:void 0,errorId:Ls({[l]:d,[(t=v==null?void 0:v.errorId)!==null&&t!==void 0?t:""]:!!(v!=null&&v.error)}),size:m,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:g}},w.createElement("fieldset",Object.assign({},In(x,["errorId","error","size","readOnly"]),In(i,["aria-describedby","aria-invalid"]),{ref:r,className:y(E,"navds-fieldset",`navds-fieldset--${m}`,{"navds-fieldset--error":c,"navds-fieldset--readonly":g})}),w.createElement(jn,{size:m,as:"legend",className:y("navds-fieldset__legend",{"navds-sr-only":!!T})},g&&(B?w.createElement(Bi,null):w.createElement(Rh,null)),R),!!_&&w.createElement(mn,{className:y("navds-fieldset__description",{"navds-sr-only":!!T}),id:p,size:m??"medium",as:"div"},e.description),D,w.createElement("div",{id:l,"aria-relevant":"additions removals","aria-live":"polite",className:y("navds-fieldset__error")},d&&w.createElement(es,{size:m,showIcon:!0},e.error))))});var TN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const yy=w.createContext(null),SN=O.forwardRef((e,r)=>{var n,t,{children:a,className:i,name:l,defaultValue:d,value:c,onChange:m=()=>{},required:g,readOnly:p}=e,y=TN(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:v}=ke(),D=O.useContext(pi),E=dr();return w.createElement(hy,Object.assign({},y,{readOnly:p,ref:r,className:v(i,"navds-radio-group",`navds-radio-group--${(t=(n=y.size)!==null&&n!==void 0?n:D==null?void 0:D.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),w.createElement(yy.Provider,{value:{name:l??`radioGroupName-${E}`,defaultValue:d,value:c,onChange:m,required:g}},w.createElement("div",{className:v("navds-radio-buttons")},a)))});var EN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ON=e=>{const r=O.useContext(yy),n=ya(In(e,["description"]),"radio"),{inputProps:t,readOnly:a}=n,i=EN(n,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},i),{readOnly:a,inputProps:Object.assign(Object.assign({},t),{name:r==null?void 0:r.name,defaultChecked:(r==null?void 0:r.defaultValue)===void 0?void 0:(r==null?void 0:r.defaultValue)===e.value,checked:(r==null?void 0:r.value)===void 0?void 0:(r==null?void 0:r.value)===e.value,onChange:l=>{var d,c;a||((d=e.onChange)===null||d===void 0||d.call(e,l),(c=r==null?void 0:r.onChange)===null||c===void 0||c.call(r,e.value))},onClick:l=>{var d;if(a){l.preventDefault();return}(d=e==null?void 0:e.onClick)===null||d===void 0||d.call(e,l)},required:r==null?void 0:r.required,type:"radio"})})},dg=O.forwardRef((e,r)=>{const{cn:n}=ke(),{inputProps:t,size:a,hasError:i,readOnly:l}=ON(e),d=dr(),c=dr();return w.createElement("div",{className:n(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":i,"navds-radio--disabled":t.disabled,"navds-radio--readonly":l})},w.createElement("input",Object.assign({},In(e,["children","size","description","readOnly"]),In(t,["aria-invalid"]),{"aria-labelledby":Ls(d,!!e["aria-labelledby"]&&e["aria-labelledby"],{[c]:e.description}),className:n("navds-radio__input"),ref:r})),w.createElement("label",{htmlFor:t.id,className:n("navds-radio__label")},w.createElement("span",{className:n("navds-radio__content")},w.createElement(mn,{as:"span",id:d,size:a,"aria-hidden":!0},e.children),e.description&&w.createElement(mn,{as:"span",id:c,size:a,className:n("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))}),vy=O.createContext(null);var DN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ky=O.forwardRef((e,r)=>{var n,{className:t,children:a,disabled:i,onClick:l}=e,d=DN(e,["className","children","disabled","onClick"]);const{cn:c}=ke(),m=zt("Search"),g=O.useContext(vy);if(g===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:p,variant:y,handleClick:v}=g;return w.createElement(Gt,Object.assign({type:"submit"},d,{ref:r,size:p,variant:y==="secondary"?"secondary":"primary",className:c("navds-search__button-search",t),disabled:(n=g==null?void 0:g.disabled)!==null&&n!==void 0?n:i,onClick:la(l,v),icon:w.createElement(Lp,Object.assign({},a?{"aria-hidden":!0}:{title:m("search")}))}),a)});var xN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Lu=O.forwardRef((e,r)=>{const{inputProps:n,size:t="medium",inputDescriptionId:a,errorId:i,showErrorMsg:l,hasError:d}=ya(e,"searchfield"),{className:c,hideLabel:m=!0,label:g,description:p,value:y,clearButtonLabel:v,onClear:D,clearButton:E=!0,children:k,variant:R="primary",defaultValue:_,onChange:T,onSearchClick:B,htmlSize:x}=e,N=xN(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),{cn:F}=ke(),A=$s(!1),j=O.useRef(null),Y=Za(j,r),V=zt("Search"),[G,L]=O.useState(_??""),U=te=>{y===void 0&&L(te),T==null||T(te)},W=te=>{var se,le;D==null||D(te),U(""),(le=(se=j.current)===null||se===void 0?void 0:se.focus)===null||le===void 0||le.call(se)},H=()=>{B==null||B(`${y??G}`)},J=E&&!n.disabled&&(y??G),K=()=>A?w.createElement(Gt,{className:F("navds-search__button-clear"),variant:"tertiary-neutral",size:t==="medium"?"small":"xsmall",icon:w.createElement(Is,{"aria-hidden":!0}),title:v||V("clear"),hidden:!J,onClick:te=>W({trigger:"Click",event:te}),type:"button"}):w.createElement("button",{type:"button",onClick:te=>W({trigger:"Click",event:te}),className:F("navds-search__button-clear"),hidden:!J},w.createElement("span",{className:F("navds-sr-only")},v||V("clear")),w.createElement(Is,{"aria-hidden":!0}));return w.createElement("div",{onKeyDown:te=>{var se;te.key==="Escape"&&(!((se=j.current)===null||se===void 0)&&se.value&&te.preventDefault(),W({trigger:"Escape",event:te}))},className:F(c,"navds-form-field",`navds-form-field--${t}`,"navds-search",{"navds-search--error":d,"navds-search--disabled":n.disabled,"navds-search--with-size":x})},w.createElement(jn,{htmlFor:n.id,size:t,className:F("navds-form-field__label",{"navds-sr-only":m})},g),!!p&&w.createElement(mn,{className:F("navds-form-field__description",{"navds-sr-only":m}),id:a,size:t,as:"div"},p),w.createElement("div",{className:F("navds-search__wrapper")},w.createElement("div",{className:F("navds-search__wrapper-inner")},R==="simple"&&w.createElement(Lp,{"aria-hidden":!0,className:F("navds-search__search-icon")}),w.createElement("input",Object.assign({ref:Y},In(N,["error","errorId","size","readOnly"]),n,{value:y??G,onChange:te=>U(te.target.value),type:"search",className:F(c,"navds-search__input",`navds-search__input--${R}`,"navds-text-field__input","navds-body-short",`navds-body-short--${t}`)},x?{size:Number(x)}:{})),w.createElement(K,null)),w.createElement(vy.Provider,{value:{size:t,disabled:n.disabled,variant:R,handleClick:H}},k||R!=="simple"&&w.createElement(ky,null))),w.createElement("div",{className:F("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},l&&w.createElement(es,{size:t,showIcon:!0},e.error)))});Lu.Button=ky;var RN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const cg=(e,r,n)=>{const{outerHeightStyle:t,overflow:a}=r;return n.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(n.current+=1,r):e},fg=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Xo(e){return parseInt(e,10)||0}const FN=O.forwardRef((e,r)=>{var n,t,{className:a,onChange:i,maxRows:l,minRows:d=1,autoScrollbar:c,style:m,value:g}=e,p=RN(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:y}=O.useRef(g!=null),v=O.useRef(null),D=Za(v,r),E=O.useRef(null),k=O.useRef(0),[R,_]=O.useState({outerHeightStyle:0}),T=w.useCallback(()=>{const F=v.current,j=fg(F).getComputedStyle(F);if(j.width==="0px")return{outerHeightStyle:0};const Y=E.current;Y.style.width=j.width,Y.value=F.value||p.placeholder||"x",Y.value.slice(-1)===`
`&&(Y.value+=" ");const V=j.boxSizing,G=Xo(j.paddingBottom)+Xo(j.paddingTop),L=Xo(j.borderBottomWidth)+Xo(j.borderTopWidth),U=Y.scrollHeight-G;Y.value="x";const W=Y.scrollHeight-G;let H=U;d&&(H=Math.max(Number(d)*W,H)),l&&(H=Math.min(Number(l)*W,H)),H=Math.max(H,W);const J=H+(V==="border-box"?G+L:0),K=Math.abs(H-U)<=1;return{outerHeightStyle:J,overflow:K}},[l,d,p.placeholder]),B=()=>{const F=T();mg(F)||_(A=>cg(A,F,k))};Ga(()=>{const F=()=>{const G=T();mg(G)||Mp.flushSync(()=>{_(L=>cg(L,G,k))})},A=Ip(()=>{var G,L,U;if(k.current=0,!((G=v.current)===null||G===void 0)&&G.style.height||!((L=v.current)===null||L===void 0)&&L.style.width){((U=v.current)===null||U===void 0?void 0:U.style.overflow)==="hidden"&&_(W=>Object.assign(Object.assign({},W),{overflow:!1}));return}F()},166,!0),j=v.current,Y=fg(j);Y.addEventListener("resize",A);let V;return typeof ResizeObserver<"u"&&(V=new ResizeObserver(A),V.observe(j)),()=>{A.clear(),Y.removeEventListener("resize",A),V&&V.disconnect()}},[T]),Ga(()=>{B()}),O.useEffect(()=>{k.current=0},[g]);const x=F=>{k.current=0,y||B(),i&&i(F)},N=Object.assign({"--__ac-textarea-height":R.outerHeightStyle+"px","--__axc-textarea-height":R.outerHeightStyle+"px",overflow:R.overflow&&!c&&!(!((n=v.current)===null||n===void 0)&&n.style.height)&&!(!((t=v.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},m);return w.createElement(w.Fragment,null,w.createElement("textarea",Object.assign({value:g,onChange:x,ref:D,rows:d,style:N},p,{className:a})),w.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:E,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},m)}))});function mg(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const AN=({maxLengthId:e,maxLength:r,currentLength:n,size:t,i18n:a})=>{const{cn:i}=ke(),l=zt("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),d=r-n,[c,m]=O.useState(d);return O.useEffect(()=>{const g=Ip(()=>{m(d)},2e3);return g(),()=>{g.clear()}},[d]),w.createElement(w.Fragment,null,w.createElement("span",{id:e,className:i("navds-sr-only")},l("maxLength",{maxLength:r})),d<20&&w.createElement("span",{role:"status",className:i("navds-textarea__sr-counter navds-sr-only")},gg(c,l)),w.createElement(mn,{className:i("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:t},gg(d,l)))},gg=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var NN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const PN=O.forwardRef((e,r)=>{var n,t,a;const{inputProps:i,errorId:l,showErrorMsg:d,hasError:c,size:m,inputDescriptionId:g}=ya(e,"textarea"),{label:p,className:y,description:v,maxLength:D,hideLabel:E=!1,resize:k,UNSAFE_autoScrollbar:R,i18n:_,readOnly:T}=e,B=NN(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:x}=ke(),N=dr(),F=D!==void 0&&D>0,[A,j]=O.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),Y=()=>{let G=B!=null&&B.minRows?B==null?void 0:B.minRows:3;return m==="small"&&(G=B!=null&&B.minRows?B==null?void 0:B.minRows:2),G},V=Ls(i["aria-describedby"],{[N??""]:F});return w.createElement("div",{className:x(y,"navds-form-field",`navds-form-field--${m}`,{"navds-form-field--disabled":!!i.disabled,"navds-form-field--readonly":T,"navds-textarea--readonly":T,"navds-textarea--error":c,"navds-textarea--autoscrollbar":R,[`navds-textarea--resize-${k===!0?"both":k}`]:k})},w.createElement(jn,{htmlFor:i.id,size:m,className:x("navds-form-field__label",{"navds-sr-only":E})},T&&w.createElement(Bi,null),p),!!v&&w.createElement(mn,{className:x("navds-form-field__description",{"navds-sr-only":E}),id:g,size:m,as:"div"},v),w.createElement(FN,Object.assign({},In(B,["error","errorId","size"]),i,{onChange:la(e.onChange,e.value===void 0?G=>j(G.target.value):void 0),minRows:Y(),autoScrollbar:R,ref:r,readOnly:T,className:x("navds-textarea__input","navds-body-short",`navds-body-short--${m??"medium"}`)},V?{"aria-describedby":V}:{})),F&&!T&&!i.disabled&&w.createElement(AN,{maxLengthId:N,maxLength:D,currentLength:(a=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:A.length,size:m,i18n:_}),w.createElement("div",{className:x("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},d&&w.createElement(es,{size:m,showIcon:!0},e.error)))});var MN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const BN=O.forwardRef((e,r)=>{const{cn:n}=ke(),{inputProps:t,errorId:a,showErrorMsg:i,hasError:l,size:d,inputDescriptionId:c}=ya(e,"textField"),{label:m,className:g,description:p,htmlSize:y,hideLabel:v=!1,type:D="text",readOnly:E}=e,k=MN(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return w.createElement("div",{className:n(g,"navds-form-field",`navds-form-field--${d}`,{"navds-text-field--error":l,"navds-text-field--disabled":!!t.disabled,"navds-form-field--disabled":!!t.disabled,"navds-form-field--readonly":E,"navds-text-field--readonly":E})},w.createElement(jn,{htmlFor:t.id,size:d,className:n("navds-form-field__label",{"navds-sr-only":v})},E&&w.createElement(Bi,null),m),!!p&&w.createElement(mn,{className:n("navds-form-field__description",{"navds-sr-only":v}),id:c,size:d,as:"div"},p),w.createElement("input",Object.assign({},In(k,["error","errorId","size"]),t,{ref:r,type:D,readOnly:E,className:n("navds-text-field__input","navds-body-short",`navds-body-short--${d??"medium"}`),size:y})),w.createElement("div",{className:n("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},i&&w.createElement(es,{size:d,showIcon:!0},e.error)))});var zs=e=>e.type==="checkbox",ia=e=>e instanceof Date,et=e=>e==null;const by=e=>typeof e=="object";var On=e=>!et(e)&&!Array.isArray(e)&&by(e)&&!ia(e),wy=e=>On(e)&&e.target?zs(e.target)?e.target.checked:e.target.value:e,qN=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,_y=(e,r)=>e.has(qN(r)),jN=e=>{const r=e.constructor&&e.constructor.prototype;return On(r)&&r.hasOwnProperty("isPrototypeOf")},jd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function hn(e){let r;const n=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(jd&&(e instanceof Blob||t))&&(n||On(e)))if(r=n?[]:{},!n&&!jN(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=hn(e[a]));else return e;return r}var Ks=e=>Array.isArray(e)?e.filter(Boolean):[],cn=e=>e===void 0,ie=(e,r,n)=>{if(!r||!On(e))return n;const t=Ks(r.split(/[,[\].]+?/)).reduce((a,i)=>et(a)?a:a[i],e);return cn(t)||t===e?cn(e[r])?n:e[r]:t},bt=e=>typeof e=="boolean",Id=e=>/^\w*$/.test(e),Ty=e=>Ks(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Ze=(e,r,n)=>{let t=-1;const a=Id(r)?[r]:Ty(r),i=a.length,l=i-1;for(;++t<i;){const d=a[t];let c=n;if(t!==l){const m=e[d];c=On(m)||Array.isArray(m)?m:isNaN(+a[t+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=c,e=e[d]}};const yi={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Nt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Er={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Sy=w.createContext(null),Kt=()=>w.useContext(Sy),IN=e=>{const{children:r,...n}=e;return w.createElement(Sy.Provider,{value:n},r)};var Ey=(e,r,n,t=!0)=>{const a={defaultValues:r._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const l=i;return r._proxyFormState[l]!==Nt.all&&(r._proxyFormState[l]=!t||Nt.all),n&&(n[l]=!0),e[l]}});return a};const Cd=typeof window<"u"?O.useLayoutEffect:O.useEffect;function CN(e){const r=Kt(),{control:n=r.control,disabled:t,name:a,exact:i}=e||{},[l,d]=w.useState(n._formState),c=w.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Cd(()=>n._subscribe({name:a,formState:c.current,exact:i,callback:m=>{!t&&d({...n._formState,...m})}}),[a,t,i]),w.useEffect(()=>{c.current.isValid&&n._setValid(!0)},[n]),w.useMemo(()=>Ey(l,n,c.current,!1),[l,n])}var ir=e=>typeof e=="string",Oy=(e,r,n,t,a)=>ir(e)?(t&&r.watch.add(e),ie(n,e,a)):Array.isArray(e)?e.map(i=>(t&&r.watch.add(i),ie(n,i))):(t&&(r.watchAll=!0),n);function LN(e){const r=Kt(),{control:n=r.control,name:t,defaultValue:a,disabled:i,exact:l}=e||{},d=w.useRef(a),[c,m]=w.useState(n._getWatch(t,d.current));return Cd(()=>n._subscribe({name:t,formState:{values:!0},exact:l,callback:g=>!i&&m(Oy(t,n._names,g.values||n._formValues,!1,d.current))}),[t,n,i,l]),w.useEffect(()=>n._removeUnmounted()),c}function Ci(e){const r=Kt(),{name:n,disabled:t,control:a=r.control,shouldUnregister:i}=e,l=_y(a._names.array,n),d=LN({control:a,name:n,defaultValue:ie(a._formValues,n,ie(a._defaultValues,n,e.defaultValue)),exact:!0}),c=CN({control:a,name:n,exact:!0}),m=w.useRef(e),g=w.useRef(a.register(n,{...e.rules,value:d,...bt(e.disabled)?{disabled:e.disabled}:{}})),p=w.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!ie(c.errors,n)},isDirty:{enumerable:!0,get:()=>!!ie(c.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!ie(c.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!ie(c.validatingFields,n)},error:{enumerable:!0,get:()=>ie(c.errors,n)}}),[c,n]),y=w.useCallback(k=>g.current.onChange({target:{value:wy(k),name:n},type:yi.CHANGE}),[n]),v=w.useCallback(()=>g.current.onBlur({target:{value:ie(a._formValues,n),name:n},type:yi.BLUR}),[n,a._formValues]),D=w.useCallback(k=>{const R=ie(a._fields,n);R&&k&&(R._f.ref={focus:()=>k.focus&&k.focus(),select:()=>k.select&&k.select(),setCustomValidity:_=>k.setCustomValidity(_),reportValidity:()=>k.reportValidity()})},[a._fields,n]),E=w.useMemo(()=>({name:n,value:d,...bt(t)||c.disabled?{disabled:c.disabled||t}:{},onChange:y,onBlur:v,ref:D}),[n,t,c.disabled,y,v,D,d]);return w.useEffect(()=>{const k=a._options.shouldUnregister||i;a.register(n,{...m.current.rules,...bt(m.current.disabled)?{disabled:m.current.disabled}:{}});const R=(_,T)=>{const B=ie(a._fields,_);B&&B._f&&(B._f.mount=T)};if(R(n,!0),k){const _=hn(ie(a._options.defaultValues,n));Ze(a._defaultValues,n,_),cn(ie(a._formValues,n))&&Ze(a._formValues,n,_)}return!l&&a.register(n),()=>{(l?k&&!a._state.action:k)?a.unregister(n):R(n,!1)}},[n,a,l,i]),w.useEffect(()=>{a._setDisabledField({disabled:t,name:n})},[t,n,a]),w.useMemo(()=>({field:E,formState:c,fieldState:p}),[E,c,p])}var $N=(e,r,n,t,a)=>r?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[t]:a||!0}}:{},dt=e=>Array.isArray(e)?e:[e],pg=()=>{let e=[];return{get observers(){return e},next:a=>{for(const i of e)i.next&&i.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(i=>i!==a)}}),unsubscribe:()=>{e=[]}}},$u=e=>et(e)||!by(e);function Ur(e,r){if($u(e)||$u(r))return e===r;if(ia(e)&&ia(r))return e.getTime()===r.getTime();const n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(const a of n){const i=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const l=r[a];if(ia(i)&&ia(l)||On(i)&&On(l)||Array.isArray(i)&&Array.isArray(l)?!Ur(i,l):i!==l)return!1}}return!0}var Qn=e=>On(e)&&!Object.keys(e).length,Ld=e=>e.type==="file",Ht=e=>typeof e=="function",vi=e=>{if(!jd)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Dy=e=>e.type==="select-multiple",$d=e=>e.type==="radio",HN=e=>$d(e)||zs(e),mu=e=>vi(e)&&e.isConnected;function VN(e,r){const n=r.slice(0,-1).length;let t=0;for(;t<n;)e=cn(e)?t++:e[r[t++]];return e}function UN(e){for(const r in e)if(e.hasOwnProperty(r)&&!cn(e[r]))return!1;return!0}function xn(e,r){const n=Array.isArray(r)?r:Id(r)?[r]:Ty(r),t=n.length===1?e:VN(e,n),a=n.length-1,i=n[a];return t&&delete t[i],a!==0&&(On(t)&&Qn(t)||Array.isArray(t)&&UN(t))&&xn(e,n.slice(0,-1)),e}var xy=e=>{for(const r in e)if(Ht(e[r]))return!0;return!1};function ki(e,r={}){const n=Array.isArray(e);if(On(e)||n)for(const t in e)Array.isArray(e[t])||On(e[t])&&!xy(e[t])?(r[t]=Array.isArray(e[t])?[]:{},ki(e[t],r[t])):et(e[t])||(r[t]=!0);return r}function Ry(e,r,n){const t=Array.isArray(e);if(On(e)||t)for(const a in e)Array.isArray(e[a])||On(e[a])&&!xy(e[a])?cn(r)||$u(n[a])?n[a]=Array.isArray(e[a])?ki(e[a],[]):{...ki(e[a])}:Ry(e[a],et(r)?{}:r[a],n[a]):n[a]=!Ur(e[a],r[a]);return n}var Es=(e,r)=>Ry(e,r,ki(r));const hg={value:!1,isValid:!1},yg={value:!0,isValid:!0};var Fy=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!cn(e[0].attributes.value)?cn(e[0].value)||e[0].value===""?yg:{value:e[0].value,isValid:!0}:yg:hg}return hg},Ay=(e,{valueAsNumber:r,valueAsDate:n,setValueAs:t})=>cn(e)?e:r?e===""?NaN:e&&+e:n&&ir(e)?new Date(e):t?t(e):e;const vg={isValid:!1,value:null};var Ny=e=>Array.isArray(e)?e.reduce((r,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:r,vg):vg;function kg(e){const r=e.ref;return Ld(r)?r.files:$d(r)?Ny(e.refs).value:Dy(r)?[...r.selectedOptions].map(({value:n})=>n):zs(r)?Fy(e.refs).value:Ay(cn(r.value)?e.ref.value:r.value,e)}var WN=(e,r,n,t)=>{const a={};for(const i of e){const l=ie(r,i);l&&Ze(a,i,l._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:t}},bi=e=>e instanceof RegExp,Os=e=>cn(e)?e:bi(e)?e.source:On(e)?bi(e.value)?e.value.source:e.value:e,La=e=>({isOnSubmit:!e||e===Nt.onSubmit,isOnBlur:e===Nt.onBlur,isOnChange:e===Nt.onChange,isOnAll:e===Nt.all,isOnTouch:e===Nt.onTouched});const bg="AsyncFunction";var GN=e=>!!e&&!!e.validate&&!!(Ht(e.validate)&&e.validate.constructor.name===bg||On(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===bg)),YN=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Hu=(e,r,n)=>!n&&(r.watchAll||r.watch.has(e)||[...r.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const Ua=(e,r,n,t)=>{for(const a of n||Object.keys(e)){const i=ie(e,a);if(i){const{_f:l,...d}=i;if(l){if(l.refs&&l.refs[0]&&r(l.refs[0],a)&&!t)return!0;if(l.ref&&r(l.ref,l.name)&&!t)return!0;if(Ua(d,r))break}else if(On(d)&&Ua(d,r))break}}};function wg(e,r,n){const t=ie(e,n);if(t||Id(n))return{error:t,name:n};const a=n.split(".");for(;a.length;){const i=a.join("."),l=ie(r,i),d=ie(e,i);if(l&&!Array.isArray(l)&&n!==i)return{name:n};if(d&&d.type)return{name:i,error:d};if(d&&d.root&&d.root.type)return{name:`${i}.root`,error:d.root};a.pop()}return{name:n}}var zN=(e,r,n,t)=>{n(e);const{name:a,...i}=e;return Qn(i)||Object.keys(i).length>=Object.keys(r).length||Object.keys(i).find(l=>r[l]===(!t||Nt.all))},KN=(e,r,n)=>!e||!r||e===r||dt(e).some(t=>t&&(n?t===r:t.startsWith(r)||r.startsWith(t))),XN=(e,r,n,t,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(r||e):(n?t.isOnBlur:a.isOnBlur)?!e:(n?t.isOnChange:a.isOnChange)?e:!0,ZN=(e,r)=>!Ks(ie(e,r)).length&&xn(e,r),Py=(e,r,n)=>{const t=dt(ie(e,n));return Ze(t,"root",r[n]),Ze(e,n,t),e},ai=e=>ir(e);function _g(e,r,n="validate"){if(ai(e)||Array.isArray(e)&&e.every(ai)||bt(e)&&!e)return{type:n,message:ai(e)?e:"",ref:r}}var Ia=e=>On(e)&&!bi(e)?e:{value:e,message:""},Vu=async(e,r,n,t,a,i)=>{const{ref:l,refs:d,required:c,maxLength:m,minLength:g,min:p,max:y,pattern:v,validate:D,name:E,valueAsNumber:k,mount:R}=e._f,_=ie(n,E);if(!R||r.has(E))return{};const T=d?d[0]:l,B=G=>{a&&T.reportValidity&&(T.setCustomValidity(bt(G)?"":G||""),T.reportValidity())},x={},N=$d(l),F=zs(l),A=N||F,j=(k||Ld(l))&&cn(l.value)&&cn(_)||vi(l)&&l.value===""||_===""||Array.isArray(_)&&!_.length,Y=$N.bind(null,E,t,x),V=(G,L,U,W=Er.maxLength,H=Er.minLength)=>{const J=G?L:U;x[E]={type:G?W:H,message:J,ref:l,...Y(G?W:H,J)}};if(i?!Array.isArray(_)||!_.length:c&&(!A&&(j||et(_))||bt(_)&&!_||F&&!Fy(d).isValid||N&&!Ny(d).isValid)){const{value:G,message:L}=ai(c)?{value:!!c,message:c}:Ia(c);if(G&&(x[E]={type:Er.required,message:L,ref:T,...Y(Er.required,L)},!t))return B(L),x}if(!j&&(!et(p)||!et(y))){let G,L;const U=Ia(y),W=Ia(p);if(!et(_)&&!isNaN(_)){const H=l.valueAsNumber||_&&+_;et(U.value)||(G=H>U.value),et(W.value)||(L=H<W.value)}else{const H=l.valueAsDate||new Date(_),J=se=>new Date(new Date().toDateString()+" "+se),K=l.type=="time",te=l.type=="week";ir(U.value)&&_&&(G=K?J(_)>J(U.value):te?_>U.value:H>new Date(U.value)),ir(W.value)&&_&&(L=K?J(_)<J(W.value):te?_<W.value:H<new Date(W.value))}if((G||L)&&(V(!!G,U.message,W.message,Er.max,Er.min),!t))return B(x[E].message),x}if((m||g)&&!j&&(ir(_)||i&&Array.isArray(_))){const G=Ia(m),L=Ia(g),U=!et(G.value)&&_.length>+G.value,W=!et(L.value)&&_.length<+L.value;if((U||W)&&(V(U,G.message,L.message),!t))return B(x[E].message),x}if(v&&!j&&ir(_)){const{value:G,message:L}=Ia(v);if(bi(G)&&!_.match(G)&&(x[E]={type:Er.pattern,message:L,ref:l,...Y(Er.pattern,L)},!t))return B(L),x}if(D){if(Ht(D)){const G=await D(_,n),L=_g(G,T);if(L&&(x[E]={...L,...Y(Er.validate,L.message)},!t))return B(L.message),x}else if(On(D)){let G={};for(const L in D){if(!Qn(G)&&!t)break;const U=_g(await D[L](_,n),T,L);U&&(G={...U,...Y(L,U.message)},B(U.message),t&&(x[E]=G))}if(!Qn(G)&&(x[E]={ref:T,...G},!t))return x}}return B(!0),x};const QN={mode:Nt.onSubmit,reValidateMode:Nt.onChange,shouldFocusError:!0};function JN(e={}){let r={...QN,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:Ht(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1};const t={};let a=On(r.defaultValues)||On(r.values)?hn(r.defaultValues||r.values)||{}:{},i=r.shouldUnregister?{}:hn(a),l={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,m=0;const g={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let p={...g};const y={array:pg(),state:pg()},v=r.criteriaMode===Nt.all,D=M=>$=>{clearTimeout(m),m=setTimeout(M,$)},E=async M=>{if(!r.disabled&&(g.isValid||p.isValid||M)){const $=r.resolver?Qn((await F()).errors):await j(t,!0);$!==n.isValid&&y.state.next({isValid:$})}},k=(M,$)=>{!r.disabled&&(g.isValidating||g.validatingFields||p.isValidating||p.validatingFields)&&((M||Array.from(d.mount)).forEach(X=>{X&&($?Ze(n.validatingFields,X,$):xn(n.validatingFields,X))}),y.state.next({validatingFields:n.validatingFields,isValidating:!Qn(n.validatingFields)}))},R=(M,$=[],X,ue,oe=!0,ae=!0)=>{if(ue&&X&&!r.disabled){if(l.action=!0,ae&&Array.isArray(ie(t,M))){const ye=X(ie(t,M),ue.argA,ue.argB);oe&&Ze(t,M,ye)}if(ae&&Array.isArray(ie(n.errors,M))){const ye=X(ie(n.errors,M),ue.argA,ue.argB);oe&&Ze(n.errors,M,ye),ZN(n.errors,M)}if((g.touchedFields||p.touchedFields)&&ae&&Array.isArray(ie(n.touchedFields,M))){const ye=X(ie(n.touchedFields,M),ue.argA,ue.argB);oe&&Ze(n.touchedFields,M,ye)}(g.dirtyFields||p.dirtyFields)&&(n.dirtyFields=Es(a,i)),y.state.next({name:M,isDirty:V(M,$),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Ze(i,M,$)},_=(M,$)=>{Ze(n.errors,M,$),y.state.next({errors:n.errors})},T=M=>{n.errors=M,y.state.next({errors:n.errors,isValid:!1})},B=(M,$,X,ue)=>{const oe=ie(t,M);if(oe){const ae=ie(i,M,cn(X)?ie(a,M):X);cn(ae)||ue&&ue.defaultChecked||$?Ze(i,M,$?ae:kg(oe._f)):U(M,ae),l.mount&&E()}},x=(M,$,X,ue,oe)=>{let ae=!1,ye=!1;const Ne={name:M};if(!r.disabled){if(!X||ue){(g.isDirty||p.isDirty)&&(ye=n.isDirty,n.isDirty=Ne.isDirty=V(),ae=ye!==Ne.isDirty);const qe=Ur(ie(a,M),$);ye=!!ie(n.dirtyFields,M),qe?xn(n.dirtyFields,M):Ze(n.dirtyFields,M,!0),Ne.dirtyFields=n.dirtyFields,ae=ae||(g.dirtyFields||p.dirtyFields)&&ye!==!qe}if(X){const qe=ie(n.touchedFields,M);qe||(Ze(n.touchedFields,M,X),Ne.touchedFields=n.touchedFields,ae=ae||(g.touchedFields||p.touchedFields)&&qe!==X)}ae&&oe&&y.state.next(Ne)}return ae?Ne:{}},N=(M,$,X,ue)=>{const oe=ie(n.errors,M),ae=(g.isValid||p.isValid)&&bt($)&&n.isValid!==$;if(r.delayError&&X?(c=D(()=>_(M,X)),c(r.delayError)):(clearTimeout(m),c=null,X?Ze(n.errors,M,X):xn(n.errors,M)),(X?!Ur(oe,X):oe)||!Qn(ue)||ae){const ye={...ue,...ae&&bt($)?{isValid:$}:{},errors:n.errors,name:M};n={...n,...ye},y.state.next(ye)}},F=async M=>{k(M,!0);const $=await r.resolver(i,r.context,WN(M||d.mount,t,r.criteriaMode,r.shouldUseNativeValidation));return k(M),$},A=async M=>{const{errors:$}=await F(M);if(M)for(const X of M){const ue=ie($,X);ue?Ze(n.errors,X,ue):xn(n.errors,X)}else n.errors=$;return $},j=async(M,$,X={valid:!0})=>{for(const ue in M){const oe=M[ue];if(oe){const{_f:ae,...ye}=oe;if(ae){const Ne=d.array.has(ae.name),qe=oe._f&&GN(oe._f);qe&&g.validatingFields&&k([ue],!0);const Nn=await Vu(oe,d.disabled,i,v,r.shouldUseNativeValidation&&!$,Ne);if(qe&&g.validatingFields&&k([ue]),Nn[ae.name]&&(X.valid=!1,$))break;!$&&(ie(Nn,ae.name)?Ne?Py(n.errors,Nn,ae.name):Ze(n.errors,ae.name,Nn[ae.name]):xn(n.errors,ae.name))}!Qn(ye)&&await j(ye,$,X)}}return X.valid},Y=()=>{for(const M of d.unMount){const $=ie(t,M);$&&($._f.refs?$._f.refs.every(X=>!mu(X)):!mu($._f.ref))&&Le(M)}d.unMount=new Set},V=(M,$)=>!r.disabled&&(M&&$&&Ze(i,M,$),!Ur(se(),a)),G=(M,$,X)=>Oy(M,d,{...l.mount?i:cn($)?a:ir(M)?{[M]:$}:$},X,$),L=M=>Ks(ie(l.mount?i:a,M,r.shouldUnregister?ie(a,M,[]):[])),U=(M,$,X={})=>{const ue=ie(t,M);let oe=$;if(ue){const ae=ue._f;ae&&(!ae.disabled&&Ze(i,M,Ay($,ae)),oe=vi(ae.ref)&&et($)?"":$,Dy(ae.ref)?[...ae.ref.options].forEach(ye=>ye.selected=oe.includes(ye.value)):ae.refs?zs(ae.ref)?ae.refs.forEach(ye=>{(!ye.defaultChecked||!ye.disabled)&&(Array.isArray(oe)?ye.checked=!!oe.find(Ne=>Ne===ye.value):ye.checked=oe===ye.value||!!oe)}):ae.refs.forEach(ye=>ye.checked=ye.value===oe):Ld(ae.ref)?ae.ref.value="":(ae.ref.value=oe,ae.ref.type||y.state.next({name:M,values:hn(i)})))}(X.shouldDirty||X.shouldTouch)&&x(M,oe,X.shouldTouch,X.shouldDirty,!0),X.shouldValidate&&te(M)},W=(M,$,X)=>{for(const ue in $){if(!$.hasOwnProperty(ue))return;const oe=$[ue],ae=M+"."+ue,ye=ie(t,ae);(d.array.has(M)||On(oe)||ye&&!ye._f)&&!ia(oe)?W(ae,oe,X):U(ae,oe,X)}},H=(M,$,X={})=>{const ue=ie(t,M),oe=d.array.has(M),ae=hn($);Ze(i,M,ae),oe?(y.array.next({name:M,values:hn(i)}),(g.isDirty||g.dirtyFields||p.isDirty||p.dirtyFields)&&X.shouldDirty&&y.state.next({name:M,dirtyFields:Es(a,i),isDirty:V(M,ae)})):ue&&!ue._f&&!et(ae)?W(M,ae,X):U(M,ae,X),Hu(M,d)&&y.state.next({...n}),y.state.next({name:l.mount?M:void 0,values:hn(i)})},J=async M=>{l.mount=!0;const $=M.target;let X=$.name,ue=!0;const oe=ie(t,X),ae=qe=>{ue=Number.isNaN(qe)||ia(qe)&&isNaN(qe.getTime())||Ur(qe,ie(i,X,qe))},ye=La(r.mode),Ne=La(r.reValidateMode);if(oe){let qe,Nn;const Zt=$.type?kg(oe._f):wy(M),Yn=M.type===yi.BLUR||M.type===yi.FOCUS_OUT,zr=!YN(oe._f)&&!r.resolver&&!ie(n.errors,X)&&!oe._f.deps||XN(Yn,ie(n.touchedFields,X),n.isSubmitted,Ne,ye),De=Hu(X,d,Yn);Ze(i,X,Zt),Yn?(oe._f.onBlur&&oe._f.onBlur(M),c&&c(0)):oe._f.onChange&&oe._f.onChange(M);const Ke=x(X,Zt,Yn),$e=!Qn(Ke)||De;if(!Yn&&y.state.next({name:X,type:M.type,values:hn(i)}),zr)return(g.isValid||p.isValid)&&(r.mode==="onBlur"?Yn&&E():Yn||E()),$e&&y.state.next({name:X,...De?{}:Ke});if(!Yn&&De&&y.state.next({...n}),r.resolver){const{errors:zn}=await F([X]);if(ae(Zt),ue){const Cn=wg(n.errors,t,X),pr=wg(zn,t,Cn.name||X);qe=pr.error,X=pr.name,Nn=Qn(zn)}}else k([X],!0),qe=(await Vu(oe,d.disabled,i,v,r.shouldUseNativeValidation))[X],k([X]),ae(Zt),ue&&(qe?Nn=!1:(g.isValid||p.isValid)&&(Nn=await j(t,!0)));ue&&(oe._f.deps&&te(oe._f.deps),N(X,Nn,qe,Ke))}},K=(M,$)=>{if(ie(n.errors,$)&&M.focus)return M.focus(),1},te=async(M,$={})=>{let X,ue;const oe=dt(M);if(r.resolver){const ae=await A(cn(M)?M:oe);X=Qn(ae),ue=M?!oe.some(ye=>ie(ae,ye)):X}else M?(ue=(await Promise.all(oe.map(async ae=>{const ye=ie(t,ae);return await j(ye&&ye._f?{[ae]:ye}:ye)}))).every(Boolean),!(!ue&&!n.isValid)&&E()):ue=X=await j(t);return y.state.next({...!ir(M)||(g.isValid||p.isValid)&&X!==n.isValid?{}:{name:M},...r.resolver||!M?{isValid:X}:{},errors:n.errors}),$.shouldFocus&&!ue&&Ua(t,K,M?oe:d.mount),ue},se=M=>{const $={...l.mount?i:a};return cn(M)?$:ir(M)?ie($,M):M.map(X=>ie($,X))},le=(M,$)=>({invalid:!!ie(($||n).errors,M),isDirty:!!ie(($||n).dirtyFields,M),error:ie(($||n).errors,M),isValidating:!!ie(n.validatingFields,M),isTouched:!!ie(($||n).touchedFields,M)}),Te=M=>{M&&dt(M).forEach($=>xn(n.errors,$)),y.state.next({errors:M?n.errors:{}})},Oe=(M,$,X)=>{const ue=(ie(t,M,{_f:{}})._f||{}).ref,oe=ie(n.errors,M)||{},{ref:ae,message:ye,type:Ne,...qe}=oe;Ze(n.errors,M,{...qe,...$,ref:ue}),y.state.next({name:M,errors:n.errors,isValid:!1}),X&&X.shouldFocus&&ue&&ue.focus&&ue.focus()},nn=(M,$)=>Ht(M)?y.state.subscribe({next:X=>M(G(void 0,$),X)}):G(M,$,!0),me=M=>y.state.subscribe({next:$=>{KN(M.name,$.name,M.exact)&&zN($,M.formState||g,kn,M.reRenderRoot)&&M.callback({values:{...i},...n,...$})}}).unsubscribe,he=M=>(l.mount=!0,p={...p,...M.formState},me({...M,formState:p})),Le=(M,$={})=>{for(const X of M?dt(M):d.mount)d.mount.delete(X),d.array.delete(X),$.keepValue||(xn(t,X),xn(i,X)),!$.keepError&&xn(n.errors,X),!$.keepDirty&&xn(n.dirtyFields,X),!$.keepTouched&&xn(n.touchedFields,X),!$.keepIsValidating&&xn(n.validatingFields,X),!r.shouldUnregister&&!$.keepDefaultValue&&xn(a,X);y.state.next({values:hn(i)}),y.state.next({...n,...$.keepDirty?{isDirty:V()}:{}}),!$.keepIsValid&&E()},Ge=({disabled:M,name:$})=>{(bt(M)&&l.mount||M||d.disabled.has($))&&(M?d.disabled.add($):d.disabled.delete($))},on=(M,$={})=>{let X=ie(t,M);const ue=bt($.disabled)||bt(r.disabled);return Ze(t,M,{...X||{},_f:{...X&&X._f?X._f:{ref:{name:M}},name:M,mount:!0,...$}}),d.mount.add(M),X?Ge({disabled:bt($.disabled)?$.disabled:r.disabled,name:M}):B(M,!0,$.value),{...ue?{disabled:$.disabled||r.disabled}:{},...r.progressive?{required:!!$.required,min:Os($.min),max:Os($.max),minLength:Os($.minLength),maxLength:Os($.maxLength),pattern:Os($.pattern)}:{},name:M,onChange:J,onBlur:J,ref:oe=>{if(oe){on(M,$),X=ie(t,M);const ae=cn(oe.value)&&oe.querySelectorAll&&oe.querySelectorAll("input,select,textarea")[0]||oe,ye=HN(ae),Ne=X._f.refs||[];if(ye?Ne.find(qe=>qe===ae):ae===X._f.ref)return;Ze(t,M,{_f:{...X._f,...ye?{refs:[...Ne.filter(mu),ae,...Array.isArray(ie(a,M))?[{}]:[]],ref:{type:ae.type,name:M}}:{ref:ae}}}),B(M,!1,void 0,ae)}else X=ie(t,M,{}),X._f&&(X._f.mount=!1),(r.shouldUnregister||$.shouldUnregister)&&!(_y(d.array,M)&&l.action)&&d.unMount.add(M)}}},en=()=>r.shouldFocusError&&Ua(t,K,d.mount),ln=M=>{bt(M)&&(y.state.next({disabled:M}),Ua(t,($,X)=>{const ue=ie(t,X);ue&&($.disabled=ue._f.disabled||M,Array.isArray(ue._f.refs)&&ue._f.refs.forEach(oe=>{oe.disabled=ue._f.disabled||M}))},0,!1))},gn=(M,$)=>async X=>{let ue;X&&(X.preventDefault&&X.preventDefault(),X.persist&&X.persist());let oe=hn(i);if(y.state.next({isSubmitting:!0}),r.resolver){const{errors:ae,values:ye}=await F();n.errors=ae,oe=ye}else await j(t);if(d.disabled.size)for(const ae of d.disabled)Ze(oe,ae,void 0);if(xn(n.errors,"root"),Qn(n.errors)){y.state.next({errors:{}});try{await M(oe,X)}catch(ae){ue=ae}}else $&&await $({...n.errors},X),en(),setTimeout(en);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Qn(n.errors)&&!ue,submitCount:n.submitCount+1,errors:n.errors}),ue)throw ue},Rn=(M,$={})=>{ie(t,M)&&(cn($.defaultValue)?H(M,hn(ie(a,M))):(H(M,$.defaultValue),Ze(a,M,hn($.defaultValue))),$.keepTouched||xn(n.touchedFields,M),$.keepDirty||(xn(n.dirtyFields,M),n.isDirty=$.defaultValue?V(M,hn(ie(a,M))):V()),$.keepError||(xn(n.errors,M),g.isValid&&E()),y.state.next({...n}))},rn=(M,$={})=>{const X=M?hn(M):a,ue=hn(X),oe=Qn(M),ae=oe?a:ue;if($.keepDefaultValues||(a=X),!$.keepValues){if($.keepDirtyValues){const ye=new Set([...d.mount,...Object.keys(Es(a,i))]);for(const Ne of Array.from(ye))ie(n.dirtyFields,Ne)?Ze(ae,Ne,ie(i,Ne)):H(Ne,ie(ae,Ne))}else{if(jd&&cn(M))for(const ye of d.mount){const Ne=ie(t,ye);if(Ne&&Ne._f){const qe=Array.isArray(Ne._f.refs)?Ne._f.refs[0]:Ne._f.ref;if(vi(qe)){const Nn=qe.closest("form");if(Nn){Nn.reset();break}}}}for(const ye of d.mount)H(ye,ie(ae,ye))}i=hn(ae),y.array.next({values:{...ae}}),y.state.next({values:{...ae}})}d={mount:$.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!g.isValid||!!$.keepIsValid||!!$.keepDirtyValues,l.watch=!!r.shouldUnregister,y.state.next({submitCount:$.keepSubmitCount?n.submitCount:0,isDirty:oe?!1:$.keepDirty?n.isDirty:!!($.keepDefaultValues&&!Ur(M,a)),isSubmitted:$.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:oe?{}:$.keepDirtyValues?$.keepDefaultValues&&i?Es(a,i):n.dirtyFields:$.keepDefaultValues&&M?Es(a,M):$.keepDirty?n.dirtyFields:{},touchedFields:$.keepTouched?n.touchedFields:{},errors:$.keepErrors?n.errors:{},isSubmitSuccessful:$.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Dn=(M,$)=>rn(Ht(M)?M(i):M,$),ct=(M,$={})=>{const X=ie(t,M),ue=X&&X._f;if(ue){const oe=ue.refs?ue.refs[0]:ue.ref;oe.focus&&(oe.focus(),$.shouldSelect&&Ht(oe.select)&&oe.select())}},kn=M=>{n={...n,...M}},rt={control:{register:on,unregister:Le,getFieldState:le,handleSubmit:gn,setError:Oe,_subscribe:me,_runSchema:F,_focusError:en,_getWatch:G,_getDirty:V,_setValid:E,_setFieldArray:R,_setDisabledField:Ge,_setErrors:T,_getFieldArray:L,_reset:rn,_resetDefaultValues:()=>Ht(r.defaultValues)&&r.defaultValues().then(M=>{Dn(M,r.resetOptions),y.state.next({isLoading:!1})}),_removeUnmounted:Y,_disableForm:ln,_subjects:y,_proxyFormState:g,get _fields(){return t},get _formValues(){return i},get _state(){return l},set _state(M){l=M},get _defaultValues(){return a},get _names(){return d},set _names(M){d=M},get _formState(){return n},get _options(){return r},set _options(M){r={...r,...M}}},subscribe:he,trigger:te,register:on,handleSubmit:gn,watch:nn,setValue:H,getValues:se,reset:Dn,resetField:Rn,clearErrors:Te,unregister:Le,setError:Oe,setFocus:ct,getFieldState:le};return{...rt,formControl:rt}}var Vr=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const n=(Math.random()*16+e)%16|0;return(r=="x"?n:n&3|8).toString(16)})},gu=(e,r,n={})=>n.shouldFocus||cn(n.shouldFocus)?n.focusName||`${e}.${cn(n.focusIndex)?r:n.focusIndex}.`:"",pu=(e,r)=>[...e,...dt(r)],hu=e=>Array.isArray(e)?e.map(()=>{}):void 0;function yu(e,r,n){return[...e.slice(0,r),...dt(n),...e.slice(r)]}var vu=(e,r,n)=>Array.isArray(e)?(cn(e[n])&&(e[n]=void 0),e.splice(n,0,e.splice(r,1)[0]),e):[],ku=(e,r)=>[...dt(r),...dt(e)];function eP(e,r){let n=0;const t=[...e];for(const a of r)t.splice(a-n,1),n++;return Ks(t).length?t:[]}var bu=(e,r)=>cn(r)?[]:eP(e,dt(r).sort((n,t)=>n-t)),wu=(e,r,n)=>{[e[r],e[n]]=[e[n],e[r]]},Tg=(e,r,n)=>(e[r]=n,e);function nP(e){const r=Kt(),{control:n=r.control,name:t,keyName:a="id",shouldUnregister:i,rules:l}=e,[d,c]=w.useState(n._getFieldArray(t)),m=w.useRef(n._getFieldArray(t).map(Vr)),g=w.useRef(d),p=w.useRef(t),y=w.useRef(!1);p.current=t,g.current=d,n._names.array.add(t),l&&n.register(t,l),w.useEffect(()=>n._subjects.array.subscribe({next:({values:N,name:F})=>{if(F===p.current||!F){const A=ie(N,p.current);Array.isArray(A)&&(c(A),m.current=A.map(Vr))}}}).unsubscribe,[n]);const v=w.useCallback(N=>{y.current=!0,n._setFieldArray(t,N)},[n,t]),D=(N,F)=>{const A=dt(hn(N)),j=pu(n._getFieldArray(t),A);n._names.focus=gu(t,j.length-1,F),m.current=pu(m.current,A.map(Vr)),v(j),c(j),n._setFieldArray(t,j,pu,{argA:hu(N)})},E=(N,F)=>{const A=dt(hn(N)),j=ku(n._getFieldArray(t),A);n._names.focus=gu(t,0,F),m.current=ku(m.current,A.map(Vr)),v(j),c(j),n._setFieldArray(t,j,ku,{argA:hu(N)})},k=N=>{const F=bu(n._getFieldArray(t),N);m.current=bu(m.current,N),v(F),c(F),!Array.isArray(ie(n._fields,t))&&Ze(n._fields,t,void 0),n._setFieldArray(t,F,bu,{argA:N})},R=(N,F,A)=>{const j=dt(hn(F)),Y=yu(n._getFieldArray(t),N,j);n._names.focus=gu(t,N,A),m.current=yu(m.current,N,j.map(Vr)),v(Y),c(Y),n._setFieldArray(t,Y,yu,{argA:N,argB:hu(F)})},_=(N,F)=>{const A=n._getFieldArray(t);wu(A,N,F),wu(m.current,N,F),v(A),c(A),n._setFieldArray(t,A,wu,{argA:N,argB:F},!1)},T=(N,F)=>{const A=n._getFieldArray(t);vu(A,N,F),vu(m.current,N,F),v(A),c(A),n._setFieldArray(t,A,vu,{argA:N,argB:F},!1)},B=(N,F)=>{const A=hn(F),j=Tg(n._getFieldArray(t),N,A);m.current=[...j].map((Y,V)=>!Y||V===N?Vr():m.current[V]),v(j),c([...j]),n._setFieldArray(t,j,Tg,{argA:N,argB:A},!0,!1)},x=N=>{const F=dt(hn(N));m.current=F.map(Vr),v([...F]),c([...F]),n._setFieldArray(t,[...F],A=>A,{},!0,!1)};return w.useEffect(()=>{if(n._state.action=!1,Hu(t,n._names)&&n._subjects.state.next({...n._formState}),y.current&&(!La(n._options.mode).isOnSubmit||n._formState.isSubmitted)&&!La(n._options.reValidateMode).isOnSubmit)if(n._options.resolver)n._runSchema([t]).then(N=>{const F=ie(N.errors,t),A=ie(n._formState.errors,t);(A?!F&&A.type||F&&(A.type!==F.type||A.message!==F.message):F&&F.type)&&(F?Ze(n._formState.errors,t,F):xn(n._formState.errors,t),n._subjects.state.next({errors:n._formState.errors}))});else{const N=ie(n._fields,t);N&&N._f&&!(La(n._options.reValidateMode).isOnSubmit&&La(n._options.mode).isOnSubmit)&&Vu(N,n._names.disabled,n._formValues,n._options.criteriaMode===Nt.all,n._options.shouldUseNativeValidation,!0).then(F=>!Qn(F)&&n._subjects.state.next({errors:Py(n._formState.errors,F,t)}))}n._subjects.state.next({name:t,values:hn(n._formValues)}),n._names.focus&&Ua(n._fields,(N,F)=>{if(n._names.focus&&F.startsWith(n._names.focus)&&N.focus)return N.focus(),1}),n._names.focus="",n._setValid(),y.current=!1},[d,t,n]),w.useEffect(()=>(!ie(n._formValues,t)&&n._setFieldArray(t),()=>{const N=(F,A)=>{const j=ie(n._fields,F);j&&j._f&&(j._f.mount=A)};n._options.shouldUnregister||i?n.unregister(t):N(t,!1)}),[t,n,a,i]),{swap:w.useCallback(_,[v,t,n]),move:w.useCallback(T,[v,t,n]),prepend:w.useCallback(E,[v,t,n]),append:w.useCallback(D,[v,t,n]),remove:w.useCallback(k,[v,t,n]),insert:w.useCallback(R,[v,t,n]),update:w.useCallback(B,[v,t,n]),replace:w.useCallback(x,[v,t,n]),fields:w.useMemo(()=>d.map((N,F)=>({...N,[a]:m.current[F]||Vr()})),[d,a])}}function tP(e={}){const r=w.useRef(void 0),n=w.useRef(void 0),[t,a]=w.useState({isDirty:!1,isValidating:!1,isLoading:Ht(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Ht(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...e.formControl?e.formControl:JN(e),formState:t},e.formControl&&e.defaultValues&&!Ht(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const i=r.current.control;return i._options=e,Cd(()=>{const l=i._subscribe({formState:i._proxyFormState,callback:()=>a({...i._formState}),reRenderRoot:!0});return a(d=>({...d,isReady:!0})),i._formState.isReady=!0,l},[i]),w.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),w.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),w.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),w.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),w.useEffect(()=>{if(i._proxyFormState.isDirty){const l=i._getDirty();l!==t.isDirty&&i._subjects.state.next({isDirty:l})}},[i,t.isDirty]),w.useEffect(()=>{e.values&&!Ur(e.values,n.current)?(i._reset(e.values,i._options.resetOptions),n.current=e.values,a(l=>({...l}))):i._resetDefaultValues()},[i,e.values]),w.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),r.current.formState=Ey(t,i),r.current}function rP(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sg={exports:{}},Ds={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function aP(){if(Eg)return Ds;Eg=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var l=null;if(i!==void 0&&(l=""+i),a.key!==void 0&&(l=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:i}}return Ds.Fragment=r,Ds.jsx=n,Ds.jsxs=n,Ds}var Og;function sP(){return Og||(Og=1,Sg.exports=aP()),Sg.exports}var qn=sP();const oP=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:qn.jsx(ch,{variant:"warning",size:"small",children:qn.jsx(Bt,{gap:"2",children:w.Children.map(e,r=>qn.jsx(mn,{size:"small",children:r},YT(r)?r.key:r))})}),Xs={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};_t(Xs);const wi="#B7B1A9",My=4,iP=(e,r,n)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${wi};
    border-radius: ${My}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${n}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${wi};
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
`,lP=(e,r,n)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${wi};
    border-radius: ${My}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${n}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${wi};
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
`,uP=(e,r,n,t)=>r?lP(e,n,t):iP(e,n,t),dP=(e,r,n)=>n?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,cP=({children:e,alignOffset:r=0,alignLeft:n=!1,marginTop:t=0,marginLeft:a=0,hideBorder:i=!1})=>qn.jsxs(qn.Fragment,{children:[qn.jsx("style",{dangerouslySetInnerHTML:{__html:uP(r,n,t,a)}}),qn.jsx("div",{className:dP(r,n,i),children:e})]});var Dg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var xg;function fP(){return xg||(xg=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var i="",l=0;l<arguments.length;l++){var d=arguments[l];d&&(i=a(i,t.call(this,d)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var d in i)r.call(i,d)&&i[d]&&(l=a(l,this&&this[d]||d));return l}function a(i,l){return l?i?i+" "+l:i+l:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Dg)),Dg.exports}var mP=fP();const Hd=rP(mP),gP="_borderbox_1vkvn_1",pP="_error_1vkvn_5",hP="_warning_1vkvn_8",yP={borderbox:gP,error:pP,warning:hP},vP=Hd.bind(yP),kP=({error:e=!1,className:r,children:n})=>qn.jsx(uy,{padding:"4",className:vP("borderbox",{error:e},r),children:n}),bP="_aksjonspunkt_kn1hn_1",wP="_erAksjonspunktApent_kn1hn_4",_P="_erIkkeGodkjentAvBeslutter_kn1hn_8",TP={aksjonspunkt:bP,erAksjonspunktApent:wP,erIkkeGodkjentAvBeslutter:_P};Hd.bind(TP);const SP=({dateString:e,year:r,month:n,day:t})=>qn.jsx(qn.Fragment,{children:lr(e,{year:r,month:n,day:t})});_t(Xs);_t(Xs);const EP=({withoutBorder:e,error:r,children:n,className:t})=>e?n:qn.jsx(kP,{error:r,className:t,children:n}),Uu=({merknaderFraBeslutter:e,title:r,children:n,withoutBorder:t=!1,className:a=""})=>{const i=!!(e&&e.notAccepted);return qn.jsxs(EP,{withoutBorder:t&&!i,error:i,className:a,children:[r&&qn.jsxs(qn.Fragment,{children:[qn.jsx(jn,{size:"small",children:r}),qn.jsx("div",{style:{marginBottom:"20px"}})]}),n]})},OP="_divider_1t980_1",DP="_dividerParagraf_1t980_8",xP="_leftPanel_1t980_11",RP="_rightPanel_1t980_14",FP={divider:OP,dividerParagraf:DP,leftPanel:xP,rightPanel:RP};Hd.bind(FP);const By=()=>qn.jsx("span",{"data-testid":"editedIcon",children:qn.jsx(FS,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});_t(Xs);_t(Xs);function AP(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rg={exports:{}},xs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function NP(){if(Fg)return xs;Fg=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var l=null;if(i!==void 0&&(l=""+i),a.key!==void 0&&(l=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:i}}return xs.Fragment=r,xs.jsx=n,xs.jsxs=n,xs}var Ag;function PP(){return Ag||(Ag=1,Rg.exports=NP()),Rg.exports}var Ae=PP();const Li=e=>e.reduce((r,n,t)=>({...r,[t]:a=>n(a)||!0}),{}),$i=(e,r)=>{const n=r.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e);return n==null?void 0:n.message};var Wu={exports:{}},MP=Wu.exports,Ng;function BP(){return Ng||(Ng=1,function(e,r){(function(n,t){e.exports=t()})(MP,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,l=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,c={},m=function(k){return(k=+k)+(k>68?1900:2e3)},g=function(k){return function(R){this[k]=+R}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(k){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var _=R.match(/([+-]|\d\d)/g),T=60*_[1]+(+_[2]||0);return T===0?0:_[0]==="+"?-T:T}(k)}],y=function(k){var R=c[k];return R&&(R.indexOf?R:R.s.concat(R.f))},v=function(k,R){var _,T=c.meridiem;if(T){for(var B=1;B<=24;B+=1)if(k.indexOf(T(B,0,R))>-1){_=B>12;break}}else _=k===(R?"pm":"PM");return _},D={A:[d,function(k){this.afternoon=v(k,!1)}],a:[d,function(k){this.afternoon=v(k,!0)}],Q:[a,function(k){this.month=3*(k-1)+1}],S:[a,function(k){this.milliseconds=100*+k}],SS:[i,function(k){this.milliseconds=10*+k}],SSS:[/\d{3}/,function(k){this.milliseconds=+k}],s:[l,g("seconds")],ss:[l,g("seconds")],m:[l,g("minutes")],mm:[l,g("minutes")],H:[l,g("hours")],h:[l,g("hours")],HH:[l,g("hours")],hh:[l,g("hours")],D:[l,g("day")],DD:[i,g("day")],Do:[d,function(k){var R=c.ordinal,_=k.match(/\d+/);if(this.day=_[0],R)for(var T=1;T<=31;T+=1)R(T).replace(/\[|\]/g,"")===k&&(this.day=T)}],w:[l,g("week")],ww:[i,g("week")],M:[l,g("month")],MM:[i,g("month")],MMM:[d,function(k){var R=y("months"),_=(y("monthsShort")||R.map(function(T){return T.slice(0,3)})).indexOf(k)+1;if(_<1)throw new Error;this.month=_%12||_}],MMMM:[d,function(k){var R=y("months").indexOf(k)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,g("year")],YY:[i,function(k){this.year=m(k)}],YYYY:[/\d{4}/,g("year")],Z:p,ZZ:p};function E(k){var R,_;R=k,_=c&&c.formats;for(var T=(k=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,V,G){var L=G&&G.toUpperCase();return V||_[G]||n[G]||_[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(U,W,H){return W||H.slice(1)})})).match(t),B=T.length,x=0;x<B;x+=1){var N=T[x],F=D[N],A=F&&F[0],j=F&&F[1];T[x]=j?{regex:A,parser:j}:N.replace(/^\[|\]$/g,"")}return function(Y){for(var V={},G=0,L=0;G<B;G+=1){var U=T[G];if(typeof U=="string")L+=U.length;else{var W=U.regex,H=U.parser,J=Y.slice(L),K=W.exec(J)[0];H.call(V,K),Y=Y.replace(K,"")}}return function(te){var se=te.afternoon;if(se!==void 0){var le=te.hours;se?le<12&&(te.hours+=12):le===12&&(te.hours=0),delete te.afternoon}}(V),V}}return function(k,R,_){_.p.customParseFormat=!0,k&&k.parseTwoDigitYear&&(m=k.parseTwoDigitYear);var T=R.prototype,B=T.parse;T.parse=function(x){var N=x.date,F=x.utc,A=x.args;this.$u=F;var j=A[1];if(typeof j=="string"){var Y=A[2]===!0,V=A[3]===!0,G=Y||V,L=A[2];V&&(L=A[2]),c=this.$locale(),!Y&&L&&(c=_.Ls[L]),this.$d=function(J,K,te,se){try{if(["x","X"].indexOf(K)>-1)return new Date((K==="X"?1e3:1)*J);var le=E(K)(J),Te=le.year,Oe=le.month,nn=le.day,me=le.hours,he=le.minutes,Le=le.seconds,Ge=le.milliseconds,on=le.zone,en=le.week,ln=new Date,gn=nn||(Te||Oe?1:ln.getDate()),Rn=Te||ln.getFullYear(),rn=0;Te&&!Oe||(rn=Oe>0?Oe-1:ln.getMonth());var Dn,ct=me||0,kn=he||0,ft=Le||0,rt=Ge||0;return on?new Date(Date.UTC(Rn,rn,gn,ct,kn,ft,rt+60*on.offset*1e3)):te?new Date(Date.UTC(Rn,rn,gn,ct,kn,ft,rt)):(Dn=new Date(Rn,rn,gn,ct,kn,ft,rt),en&&(Dn=se(Dn).week(en).toDate()),Dn)}catch{return new Date("")}}(N,j,F,_),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),G&&N!=this.format(j)&&(this.$d=new Date("")),c={}}else if(j instanceof Array)for(var U=j.length,W=1;W<=U;W+=1){A[1]=j[W-1];var H=_.apply(this,A);if(H.isValid()){this.$d=H.$d,this.$L=H.$L,this.init();break}W===U&&(this.$d=new Date(""))}else B.call(this,x)}}})}(Wu)),Wu.exports}var qP=BP();const jP=AP(qP),IP="_textarea_1snk6_1",CP="_readOnlyField_1snk6_7",Pg={textarea:IP,readOnlyField:CP},LP=e=>e!=null&&e!=="",Vd=({label:e,value:r,isEdited:n=!1,type:t,hideLabel:a,size:i})=>LP(r)?Ae.jsxs(Bt,{gap:"1",children:[e&&!a&&Ae.jsx(jn,{size:i,children:e}),Ae.jsxs(Yt,{gap:"2",align:"center",wrap:!1,children:[Ae.jsx(jp,{className:t==="textarea"?Pg.textarea:Pg.readOnlyField,size:i,children:r}),n&&Ae.jsx(By,{})]})]}):null;ut.extend(jP);const _i=({name:e,label:r,description:n,validate:t=[],hideLabel:a=!1,disabled:i=!1,isReadOnly:l=!1,onChange:d,disabledDays:c,isEdited:m,defaultMonth:g,fromDate:p,toDate:y,size:v="small"})=>{const{formState:{errors:D}}=Kt(),{field:E}=Ci({name:e,rules:{validate:O.useMemo(()=>Li(t),[t])}}),k=E.value?ut(E.value,Ma,!0).format(Ns):"",[R,_]=O.useState(k),{datepickerProps:T,inputProps:B}=YA({onDateChange:F=>{if(F!==void 0){const A=ut(F).format(Ma);d&&d(A),E.onChange(A),_(ut(A,Ma,!0).format(Ns))}},defaultSelected:E.value?ut(E.value,Ma,!0).toDate():void 0,defaultMonth:g||(!E.value&&y?y:void 0),disabled:c}),x=O.useCallback(F=>{const A=ut(F.target.value,Ns,!0).format(Ma),j=A!=="Invalid Date";_(F.target.value),d&&d(j?A:F.target.value),E.onChange(j?A:F.target.value)},[_,d,E]);if(l)return Ae.jsx(Vd,{label:r,value:E.value?ut(E.value,Ma,!0).format(Ns):void 0,isEdited:m,hideLabel:a,size:v});const N={...T,fromDate:p,toDate:y,dropdownCaption:p&&y?!0:void 0};return Ae.jsx(hi,{...N,children:Ae.jsx(hi.Input,{...B,hideLabel:a,onChange:x,value:R,size:v,label:r,description:n,disabled:i,error:$i(D,e)})})},$P=({name:e,label:r,validate:n=[],readOnly:t=!1,type:a,shouldValidateOnBlur:i=!1,onBlur:l,onChange:d,description:c,autoFocus:m,parse:g=B=>B,format:p=B=>B,normalizeOnBlur:y,isEdited:v,maxLength:D,autoComplete:E=!1,disabled:k,className:R,hideLabel:_,...T})=>{const{formState:{errors:B},trigger:x}=Kt(),{field:N}=Ci({name:e,rules:{validate:O.useMemo(()=>Li(n),[n])}});return t?Ae.jsx(Vd,{label:r,value:N.value,isEdited:v,hideLabel:_,size:T.size}):Ae.jsx(BN,{size:"small",hideLabel:_,description:c,label:r,error:$i(B,e),...N,value:N.value?p(N.value):"",autoFocus:m,autoComplete:E?void 0:"off",maxLength:D,disabled:k,type:a,className:R,onChange:F=>{const A=F.currentTarget.value?g(F.currentTarget.value):null;return d&&d(A),N.onChange(A)},onBlur:async F=>{var A,j,Y,V;if(N.onBlur(),i){const G=await x();l&&G&&l((A=F==null?void 0:F.target)==null?void 0:A.value)}else l&&l((j=F==null?void 0:F.target)==null?void 0:j.value);y&&N.onChange((Y=F==null?void 0:F.target)!=null&&Y.value?y(g((V=F==null?void 0:F.target)==null?void 0:V.value)):null)},...T})},HP="_hideRadioLabels_1u3xf_1",VP={hideRadioLabels:HP},UP=({label:e,description:r,name:n,validate:t=[],radios:a,onChange:i,disabled:l=!1,isReadOnly:d=!1,isHorizontal:c=!1,parse:m=E=>E,isTrueOrFalseSelection:g=!1,hideLegend:p=!1,hideRadioLabels:y=!1,isEdited:v=!1,size:D="small"})=>{const{formState:{errors:E}}=Kt(),{field:k}=Ci({name:n,rules:{validate:O.useMemo(()=>Li(t),[t])}}),R=g?T=>T==="true":m,_=Ae.jsxs(Yt,{justify:"center",gap:"2",children:[e,d&&v&&Ae.jsx(By,{})]});return Ae.jsxs(SN,{name:n,value:k.value!==void 0?k.value:null,onChange:T=>{i&&i(T),k.onChange(T)},size:D,legend:_,description:r,error:$i(E,n),className:y?VP.hideRadioLabels:"",hideLegend:p,children:[!c&&a.map(T=>Ae.jsxs(O.Fragment,{children:[Ae.jsx(dg,{size:D,value:R(T.value),disabled:T.disabled||l||d,children:T.label}),k.value===R(T.value)&&T.element]},T.value)),c&&Ae.jsxs(Ae.Fragment,{children:[Ae.jsx(Yt,{gap:"4",children:a.map(T=>Ae.jsx(dg,{size:D,value:R(T.value),disabled:T.disabled||l||d,children:T.label},T.value))}),a.filter(T=>k.value===R(T.value)).map(T=>Ae.jsx(O.Fragment,{children:T.element},T.value))]})]})},WP="_textAreaFieldWithBadges_bdz0b_1",GP="_etikettWrapper_bdz0b_4",Mg={textAreaFieldWithBadges:WP,etikettWrapper:GP},YP=({name:e,label:r,readOnly:n,maxLength:t,badges:a,validate:i=[],parse:l=y=>y,className:d,description:c,isEdited:m,size:g="small",...p})=>{const{formState:{errors:y}}=Kt(),{field:v}=Ci({name:e,rules:{validate:O.useMemo(()=>Li(i),[i])}});return n?Ae.jsx(Vd,{size:g,label:r,value:v.value,type:"textarea",isEdited:m,hideLabel:p.hideLabel}):Ae.jsxs("div",{className:a?Mg.textAreaFieldWithBadges:null,children:[a&&Ae.jsx("div",{className:Mg.etikettWrapper,children:a.map(({type:D,titleText:E})=>Ae.jsx(Cu,{variant:D,size:"small",children:E},E))}),Ae.jsx(PN,{size:g,label:r,description:c,className:d,autoComplete:"off",...v,onChange:D=>v.onChange(D.currentTarget.value!==""?l(D.currentTarget.value):null),value:v.value?v.value:"",error:$i(y,e),maxLength:t,...p})]})},zP=({formMethods:e,onSubmit:r,children:n,className:t,setDataOnUnmount:a})=>{const{handleSubmit:i,getValues:l}=e;return O.useEffect(()=>()=>{a&&a(l())},[]),Ae.jsx(IN,{...e,children:Ae.jsx("form",{className:t,onSubmit:r?i(d=>r(d)):void 0,children:n})})},KP="_addCircleIcon_bm9jq_1",XP="_imageText_bm9jq_2",ZP="_addPeriode_bm9jq_7",_u={addCircleIcon:KP,imageText:XP,addPeriode:ZP};function Bg(e,r){return()=>{e(r)}}function QP(e,r){return({key:n})=>{n==="Enter"&&e(r)}}const JP=(e,r)=>n=>{if(e>0)return Ae.jsx(Gt,{className:n,icon:Ae.jsx(Is,{"aria-hidden":!0}),type:"button",onClick:()=>{r(e)}})},eM=({fields:e,readOnly:r=!0,titleText:n,bodyText:t,emptyPeriodTemplate:a={periodeFom:"",periodeTom:""},shouldShowAddButton:i=!0,createAddButtonInsteadOfImageLink:l=!1,children:d,remove:c,append:m})=>Ae.jsxs(hy,{legend:n,children:[e.map((g,p)=>d(g,p,JP(p,c))),i&&Ae.jsxs(Ae.Fragment,{children:[!l&&!r&&Ae.jsxs("div",{onClick:Bg(m,a),onKeyDown:QP(m,a),className:_u.addPeriode,role:"button",tabIndex:0,children:[Ae.jsx(Am,{className:_u.addCircleIcon,title:t}),Ae.jsx(Di,{className:_u.imageText,children:t})]}),l&&!r&&Ae.jsx(Gt,{icon:Ae.jsx(Am,{"aria-hidden":!0}),type:"button",onClick:Bg(m,a),children:t}),Ae.jsx("div",{style:{marginBottom:"16px"}})]})]});function qy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gu={exports:{}},nM=Gu.exports,qg;function tM(){return qg||(qg=1,function(e,r){(function(n,t){e.exports=t()})(nM,function(){return function(n,t){t.prototype.isSameOrAfter=function(a,i){return this.isSame(a,i)||this.isAfter(a,i)}}})}(Gu)),Gu.exports}var rM=tM();const aM=qy(rM);var Yu={exports:{}},sM=Yu.exports,jg;function oM(){return jg||(jg=1,function(e,r){(function(n,t){e.exports=t()})(sM,function(){return function(n,t){t.prototype.isSameOrBefore=function(a,i){return this.isSame(a,i)||this.isBefore(a,i)}}})}(Yu)),Yu.exports}var iM=oM();const lM=qy(iM),uM="Dato må være før eller lik {limit}",dM="Dato må være etter eller lik {limit}",cM="Perioder kan ikke overlappe i tid",fM="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",mM="Dato må være lik {value}",gM="Dato må skrives slik: dd.mm.åååå",pM="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",hM="Tallet kan ikke inneholde mer enn to desimaler",yM="Tallet kan ikke ha desimaler",vM="Feltet kan kun inneholde tall",kM="Ugyldig fødselsnummer",bM="Feltet må være et fødselsnummer (11 siffer)",wM="Ugyldig organisasjonsnummer.",_M="Ugyldig organisasjonsnummer eller fødselsnummer",TM="Startdato må være før eller lik sluttdato",SM="Periode er utenfor opptjeningsperioden",EM="Ugyldig saksnummer eller fødselsnummer",OM="Feltet inneholder ugyldige tegn: {text}",DM="Feltet inneholder en ugyldig verdi: {value}",xM="Feltet kan ikke inneholde mellomrom",RM="Feltet må fylles ut",FM="Du kan skrive maksimalt {length} tegn",AM="Du må skrive minst {length} tegn",NM="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",PM="Feltet må være mindre eller lik {length}",MM="Feltet må være større eller lik {length}",BM="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",qM={DateNotBeforeOrEqual:uM,DateNotAfterOrEqual:dM,DateRangesOverlapping:cM,DateRangesOverlappingPeriodTypes:fM,DatesNotEqual:mM,InvalidDate:gM,InvalidDatesInPeriod:pM,InvalidDecimal:hM,InvalidInteger:yM,InvalidNumber:vM,InvalidFodselsnr:kM,InvalidFodselsnrFormat:bM,InvalidOrgnr:wM,InvalidOrgnrOrFodselsnr:_M,InvalidPeriod:TM,InvalidPeriodRange:SM,InvalidSaksnrOrFodselsnrFormat:EM,InvalidText:OM,InvalidValue:DM,IllegalWhiteSpace:xM,IsRequired:RM,MaxLength:FM,MinLength:AM,MaxLengthOrFodselsnr:NM,MaxValue:PM,MinValue:MM,SammeFodselsnrSomSoker:BM},{formatMessage:gr}=_t(qM),jM=e=>gr({id:"DateNotBeforeOrEqual"},{limit:e}),IM=()=>gr({id:"InvalidDate"}),CM=e=>gr({id:"InvalidInteger"},{text:e}),LM=e=>gr({id:"InvalidNumber"},{text:e}),$M=e=>gr({id:"InvalidText"},{text:e}),HM=()=>gr({id:"IsRequired"}),VM=e=>gr({id:"MaxLength"},{length:e}),UM=e=>gr({id:"MinLength"},{length:e}),WM=e=>gr({id:"MaxValue"},{length:e}),GM=e=>gr({id:"MinValue"},{length:e}),YM=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,zM=/^\d+([,.]\d+)?$/,KM=/^\s*\d+\s*$/,XM=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,ZM=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,ka=e=>e==null||e.toString().trim().length===0,QM=()=>ut().startOf("day");ut.extend(aM);ut.extend(lM);const Wa=e=>ka(e)?HM():void 0,JM=e=>r=>ka(r)||r.toString().trim().length>=e?null:UM(e),eB=e=>r=>ka(r)||r.toString().trim().length<=e?null:VM(e),nB=e=>r=>r>=e?null:GM(e),tB=e=>r=>r<=e?null:WM(e),rB=e=>ka(e)||zM.test(e.toString())?null:LM(e.toString()),aB=e=>ka(e)||KM.test(e.toString())?null:CM(e.toString()),sB=e=>rB(e)||aB(e),Ti=(e="")=>ka(e)||YM.test(e)?null:IM(),oB=e=>r=>{const n=ut(e).endOf("day");return ka(r)||ut(r).isSameOrBefore(n)?null:jM(n.format(Ns))},Ig=e=>oB(QM())(e),iB=e=>{if(!XM.test(e)){const r=e.replace(ZM,"");return $M(r.replace(/[\t]/g,"Tabulatortegn"))}return null},lB=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const r=document.createAttribute("tabindex");r.value="-1";const n=e[0];n.setAttributeNode(r),document.activeElement.blur(),n.focus()}},300)},Zs={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Tu=_t(Zs),uB=JM(3),dB=eB(1500),Nr=({isReadOnly:e,isSubmittable:r,hasBegrunnelse:n,label:t,hasReadOnlyLabel:a=!1,hasVurderingText:i=!1,name:l="begrunnelse"})=>{const d=i?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",c=()=>e?a?Tu.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":t??Tu.formatMessage({id:d});return Q.jsx(Oi,{value:Tu,children:(r||n)&&Q.jsx(YP,{name:l,label:c(),validate:[Wa,uB,dB,iB],maxLength:1500,readOnly:e})})},cB=e=>{var r;return e&&Array.isArray(e)?((r=e[0])==null?void 0:r.begrunnelse)??"":e&&!Array.isArray(e)&&e.begrunnelse?e.begrunnelse:""};Nr.initialValues=e=>({begrunnelse:zT(cB(e)??void 0)});Nr.transformValues=e=>({begrunnelse:tS(e.begrunnelse)});Nr.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const fB=_t(Zs),mB=(e,r,n)=>!n||r?!0:!e,jy=({isReadOnly:e,isSubmittable:r,buttonText:n,onClick:t,isSubmitting:a,isDirty:i})=>Q.jsx(Oi,{value:fB,children:!e&&Q.jsx("div",{children:Q.jsxs(Gt,{size:"small",variant:"primary",loading:a,disabled:mB(i,a,r),onClick:t||lB,type:t?"button":"submit",children:[!!n&&n,!n&&Q.jsx(yn,{id:"SubmitButton.ConfirmInformation"})]})})});jy.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};_t(Zs);const Qs=e=>e!=null,rs=(e,r)=>Qs(r)&&e!==r,gB=(e,r)=>rs(e.utstedtdato,r.utstedtdato),pB=(e,r)=>rs(e.termindato,r.termindato),hB=(e,r)=>rs(e.antallBarn,r.antallBarnTermin),yB=e=>Qs(e.vilkarType),vB=(e,r)=>KT(e.adopsjonFodelsedatoer,r.adopsjonFodelsedatoer),kB=(e,r)=>rs(e.omsorgsovertakelseDato,r.omsorgsovertakelseDato),bB=(e,r)=>rs(e.barnetsAnkomstTilNorgeDato,r.ankomstNorge),wB=(e,r)=>rs(e.antallBarn,r.antallBarnTilBeregning),_B=e=>Qs(e.ektefellesBarn),TB=e=>Qs(e.mannAdoptererAlene),SB=e=>Qs(e.dokumentasjonForeligger),Iy=(e={},r={})=>({termindato:pB(e,r),antallBarn:hB(e,r),utstedtdato:gB(e,r),adopsjonFodelsedatoer:vB(e,r),omsorgsovertakelseDato:kB(e,r),barnetsAnkomstTilNorgeDato:bB(e,r),antallBarnOmsorgOgForeldreansvar:wB(e,r),vilkarType:yB(r),ektefellesBarn:_B(r),mannAdoptererAlene:TB(r),dokumentasjonForeligger:SB(r)});var Ms={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var EB=Ms.exports,Cg;function OB(){return Cg||(Cg=1,function(e,r){(function(){var n,t="4.17.21",a=200,i="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",d="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,g="__lodash_placeholder__",p=1,y=2,v=4,D=1,E=2,k=1,R=2,_=4,T=8,B=16,x=32,N=64,F=128,A=256,j=512,Y=30,V="...",G=800,L=16,U=1,W=2,H=3,J=1/0,K=9007199254740991,te=17976931348623157e292,se=NaN,le=4294967295,Te=le-1,Oe=le>>>1,nn=[["ary",F],["bind",k],["bindKey",R],["curry",T],["curryRight",B],["flip",j],["partial",x],["partialRight",N],["rearg",A]],me="[object Arguments]",he="[object Array]",Le="[object AsyncFunction]",Ge="[object Boolean]",on="[object Date]",en="[object DOMException]",ln="[object Error]",gn="[object Function]",Rn="[object GeneratorFunction]",rn="[object Map]",Dn="[object Number]",ct="[object Null]",kn="[object Object]",ft="[object Promise]",rt="[object Proxy]",M="[object RegExp]",$="[object Set]",X="[object String]",ue="[object Symbol]",oe="[object Undefined]",ae="[object WeakMap]",ye="[object WeakSet]",Ne="[object ArrayBuffer]",qe="[object DataView]",Nn="[object Float32Array]",Zt="[object Float64Array]",Yn="[object Int8Array]",zr="[object Int16Array]",De="[object Int32Array]",Ke="[object Uint8Array]",$e="[object Uint8ClampedArray]",zn="[object Uint16Array]",Cn="[object Uint32Array]",pr=/\b__p \+= '';/g,Pn=/\b(__p \+=) '' \+/g,Tt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,He=/&(?:amp|lt|gt|quot|#39);/g,ro=/[&<>"']/g,Wi=RegExp(He.source),Gi=RegExp(ro.source),is=/<%-([\s\S]+?)%>/g,ls=/<%([\s\S]+?)%>/g,Xd=/<%=([\s\S]+?)%>/g,vv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kv=/^\w*$/,bv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yi=/[\\^$.*+?()[\]{}|]/g,wv=RegExp(Yi.source),zi=/^\s+/,_v=/\s/,Tv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Sv=/\{\n\/\* \[wrapped with (.+)\] \*/,Ev=/,? & /,Ov=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Dv=/[()=,{}\[\]\/\s]/,xv=/\\(\\)?/g,Rv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zd=/\w*$/,Fv=/^[-+]0x[0-9a-f]+$/i,Av=/^0b[01]+$/i,Nv=/^\[object .+?Constructor\]$/,Pv=/^0o[0-7]+$/i,Mv=/^(?:0|[1-9]\d*)$/,Bv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ao=/($^)/,qv=/['\n\r\u2028\u2029\\]/g,so="\\ud800-\\udfff",jv="\\u0300-\\u036f",Iv="\\ufe20-\\ufe2f",Cv="\\u20d0-\\u20ff",Qd=jv+Iv+Cv,Jd="\\u2700-\\u27bf",ec="a-z\\xdf-\\xf6\\xf8-\\xff",Lv="\\xac\\xb1\\xd7\\xf7",$v="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Hv="\\u2000-\\u206f",Vv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",nc="A-Z\\xc0-\\xd6\\xd8-\\xde",tc="\\ufe0e\\ufe0f",rc=Lv+$v+Hv+Vv,Ki="['’]",Uv="["+so+"]",ac="["+rc+"]",oo="["+Qd+"]",sc="\\d+",Wv="["+Jd+"]",oc="["+ec+"]",ic="[^"+so+rc+sc+Jd+ec+nc+"]",Xi="\\ud83c[\\udffb-\\udfff]",Gv="(?:"+oo+"|"+Xi+")",lc="[^"+so+"]",Zi="(?:\\ud83c[\\udde6-\\uddff]){2}",Qi="[\\ud800-\\udbff][\\udc00-\\udfff]",ba="["+nc+"]",uc="\\u200d",dc="(?:"+oc+"|"+ic+")",Yv="(?:"+ba+"|"+ic+")",cc="(?:"+Ki+"(?:d|ll|m|re|s|t|ve))?",fc="(?:"+Ki+"(?:D|LL|M|RE|S|T|VE))?",mc=Gv+"?",gc="["+tc+"]?",zv="(?:"+uc+"(?:"+[lc,Zi,Qi].join("|")+")"+gc+mc+")*",Kv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Xv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",pc=gc+mc+zv,Zv="(?:"+[Wv,Zi,Qi].join("|")+")"+pc,Qv="(?:"+[lc+oo+"?",oo,Zi,Qi,Uv].join("|")+")",Jv=RegExp(Ki,"g"),ek=RegExp(oo,"g"),Ji=RegExp(Xi+"(?="+Xi+")|"+Qv+pc,"g"),nk=RegExp([ba+"?"+oc+"+"+cc+"(?="+[ac,ba,"$"].join("|")+")",Yv+"+"+fc+"(?="+[ac,ba+dc,"$"].join("|")+")",ba+"?"+dc+"+"+cc,ba+"+"+fc,Xv,Kv,sc,Zv].join("|"),"g"),tk=RegExp("["+uc+so+Qd+tc+"]"),rk=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ak=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],sk=-1,un={};un[Nn]=un[Zt]=un[Yn]=un[zr]=un[De]=un[Ke]=un[$e]=un[zn]=un[Cn]=!0,un[me]=un[he]=un[Ne]=un[Ge]=un[qe]=un[on]=un[ln]=un[gn]=un[rn]=un[Dn]=un[kn]=un[M]=un[$]=un[X]=un[ae]=!1;var an={};an[me]=an[he]=an[Ne]=an[qe]=an[Ge]=an[on]=an[Nn]=an[Zt]=an[Yn]=an[zr]=an[De]=an[rn]=an[Dn]=an[kn]=an[M]=an[$]=an[X]=an[ue]=an[Ke]=an[$e]=an[zn]=an[Cn]=!0,an[ln]=an[gn]=an[ae]=!1;var ok={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ik={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lk={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},uk={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dk=parseFloat,ck=parseInt,hc=typeof Yo=="object"&&Yo&&Yo.Object===Object&&Yo,fk=typeof self=="object"&&self&&self.Object===Object&&self,Ln=hc||fk||Function("return this")(),el=r&&!r.nodeType&&r,Kr=el&&!0&&e&&!e.nodeType&&e,yc=Kr&&Kr.exports===el,nl=yc&&hc.process,St=function(){try{var I=Kr&&Kr.require&&Kr.require("util").types;return I||nl&&nl.binding&&nl.binding("util")}catch{}}(),vc=St&&St.isArrayBuffer,kc=St&&St.isDate,bc=St&&St.isMap,wc=St&&St.isRegExp,_c=St&&St.isSet,Tc=St&&St.isTypedArray;function mt(I,Z,z){switch(z.length){case 0:return I.call(Z);case 1:return I.call(Z,z[0]);case 2:return I.call(Z,z[0],z[1]);case 3:return I.call(Z,z[0],z[1],z[2])}return I.apply(Z,z)}function mk(I,Z,z,fe){for(var Se=-1,Ue=I==null?0:I.length;++Se<Ue;){var Fn=I[Se];Z(fe,Fn,z(Fn),I)}return fe}function Et(I,Z){for(var z=-1,fe=I==null?0:I.length;++z<fe&&Z(I[z],z,I)!==!1;);return I}function gk(I,Z){for(var z=I==null?0:I.length;z--&&Z(I[z],z,I)!==!1;);return I}function Sc(I,Z){for(var z=-1,fe=I==null?0:I.length;++z<fe;)if(!Z(I[z],z,I))return!1;return!0}function Pr(I,Z){for(var z=-1,fe=I==null?0:I.length,Se=0,Ue=[];++z<fe;){var Fn=I[z];Z(Fn,z,I)&&(Ue[Se++]=Fn)}return Ue}function io(I,Z){var z=I==null?0:I.length;return!!z&&wa(I,Z,0)>-1}function tl(I,Z,z){for(var fe=-1,Se=I==null?0:I.length;++fe<Se;)if(z(Z,I[fe]))return!0;return!1}function fn(I,Z){for(var z=-1,fe=I==null?0:I.length,Se=Array(fe);++z<fe;)Se[z]=Z(I[z],z,I);return Se}function Mr(I,Z){for(var z=-1,fe=Z.length,Se=I.length;++z<fe;)I[Se+z]=Z[z];return I}function rl(I,Z,z,fe){var Se=-1,Ue=I==null?0:I.length;for(fe&&Ue&&(z=I[++Se]);++Se<Ue;)z=Z(z,I[Se],Se,I);return z}function pk(I,Z,z,fe){var Se=I==null?0:I.length;for(fe&&Se&&(z=I[--Se]);Se--;)z=Z(z,I[Se],Se,I);return z}function al(I,Z){for(var z=-1,fe=I==null?0:I.length;++z<fe;)if(Z(I[z],z,I))return!0;return!1}var hk=sl("length");function yk(I){return I.split("")}function vk(I){return I.match(Ov)||[]}function Ec(I,Z,z){var fe;return z(I,function(Se,Ue,Fn){if(Z(Se,Ue,Fn))return fe=Ue,!1}),fe}function lo(I,Z,z,fe){for(var Se=I.length,Ue=z+(fe?1:-1);fe?Ue--:++Ue<Se;)if(Z(I[Ue],Ue,I))return Ue;return-1}function wa(I,Z,z){return Z===Z?Fk(I,Z,z):lo(I,Oc,z)}function kk(I,Z,z,fe){for(var Se=z-1,Ue=I.length;++Se<Ue;)if(fe(I[Se],Z))return Se;return-1}function Oc(I){return I!==I}function Dc(I,Z){var z=I==null?0:I.length;return z?il(I,Z)/z:se}function sl(I){return function(Z){return Z==null?n:Z[I]}}function ol(I){return function(Z){return I==null?n:I[Z]}}function xc(I,Z,z,fe,Se){return Se(I,function(Ue,Fn,tn){z=fe?(fe=!1,Ue):Z(z,Ue,Fn,tn)}),z}function bk(I,Z){var z=I.length;for(I.sort(Z);z--;)I[z]=I[z].value;return I}function il(I,Z){for(var z,fe=-1,Se=I.length;++fe<Se;){var Ue=Z(I[fe]);Ue!==n&&(z=z===n?Ue:z+Ue)}return z}function ll(I,Z){for(var z=-1,fe=Array(I);++z<I;)fe[z]=Z(z);return fe}function wk(I,Z){return fn(Z,function(z){return[z,I[z]]})}function Rc(I){return I&&I.slice(0,Pc(I)+1).replace(zi,"")}function gt(I){return function(Z){return I(Z)}}function ul(I,Z){return fn(Z,function(z){return I[z]})}function us(I,Z){return I.has(Z)}function Fc(I,Z){for(var z=-1,fe=I.length;++z<fe&&wa(Z,I[z],0)>-1;);return z}function Ac(I,Z){for(var z=I.length;z--&&wa(Z,I[z],0)>-1;);return z}function _k(I,Z){for(var z=I.length,fe=0;z--;)I[z]===Z&&++fe;return fe}var Tk=ol(ok),Sk=ol(ik);function Ek(I){return"\\"+uk[I]}function Ok(I,Z){return I==null?n:I[Z]}function _a(I){return tk.test(I)}function Dk(I){return rk.test(I)}function xk(I){for(var Z,z=[];!(Z=I.next()).done;)z.push(Z.value);return z}function dl(I){var Z=-1,z=Array(I.size);return I.forEach(function(fe,Se){z[++Z]=[Se,fe]}),z}function Nc(I,Z){return function(z){return I(Z(z))}}function Br(I,Z){for(var z=-1,fe=I.length,Se=0,Ue=[];++z<fe;){var Fn=I[z];(Fn===Z||Fn===g)&&(I[z]=g,Ue[Se++]=z)}return Ue}function uo(I){var Z=-1,z=Array(I.size);return I.forEach(function(fe){z[++Z]=fe}),z}function Rk(I){var Z=-1,z=Array(I.size);return I.forEach(function(fe){z[++Z]=[fe,fe]}),z}function Fk(I,Z,z){for(var fe=z-1,Se=I.length;++fe<Se;)if(I[fe]===Z)return fe;return-1}function Ak(I,Z,z){for(var fe=z+1;fe--;)if(I[fe]===Z)return fe;return fe}function Ta(I){return _a(I)?Pk(I):hk(I)}function It(I){return _a(I)?Mk(I):yk(I)}function Pc(I){for(var Z=I.length;Z--&&_v.test(I.charAt(Z)););return Z}var Nk=ol(lk);function Pk(I){for(var Z=Ji.lastIndex=0;Ji.test(I);)++Z;return Z}function Mk(I){return I.match(Ji)||[]}function Bk(I){return I.match(nk)||[]}var qk=function I(Z){Z=Z==null?Ln:Sa.defaults(Ln.Object(),Z,Sa.pick(Ln,ak));var z=Z.Array,fe=Z.Date,Se=Z.Error,Ue=Z.Function,Fn=Z.Math,tn=Z.Object,cl=Z.RegExp,jk=Z.String,Ot=Z.TypeError,co=z.prototype,Ik=Ue.prototype,Ea=tn.prototype,fo=Z["__core-js_shared__"],mo=Ik.toString,Xe=Ea.hasOwnProperty,Ck=0,Mc=function(){var s=/[^.]+$/.exec(fo&&fo.keys&&fo.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),go=Ea.toString,Lk=mo.call(tn),$k=Ln._,Hk=cl("^"+mo.call(Xe).replace(Yi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),po=yc?Z.Buffer:n,qr=Z.Symbol,ho=Z.Uint8Array,Bc=po?po.allocUnsafe:n,yo=Nc(tn.getPrototypeOf,tn),qc=tn.create,jc=Ea.propertyIsEnumerable,vo=co.splice,Ic=qr?qr.isConcatSpreadable:n,ds=qr?qr.iterator:n,Xr=qr?qr.toStringTag:n,ko=function(){try{var s=na(tn,"defineProperty");return s({},"",{}),s}catch{}}(),Vk=Z.clearTimeout!==Ln.clearTimeout&&Z.clearTimeout,Uk=fe&&fe.now!==Ln.Date.now&&fe.now,Wk=Z.setTimeout!==Ln.setTimeout&&Z.setTimeout,bo=Fn.ceil,wo=Fn.floor,fl=tn.getOwnPropertySymbols,Gk=po?po.isBuffer:n,Cc=Z.isFinite,Yk=co.join,zk=Nc(tn.keys,tn),An=Fn.max,Vn=Fn.min,Kk=fe.now,Xk=Z.parseInt,Lc=Fn.random,Zk=co.reverse,ml=na(Z,"DataView"),cs=na(Z,"Map"),gl=na(Z,"Promise"),Oa=na(Z,"Set"),fs=na(Z,"WeakMap"),ms=na(tn,"create"),_o=fs&&new fs,Da={},Qk=ta(ml),Jk=ta(cs),eb=ta(gl),nb=ta(Oa),tb=ta(fs),To=qr?qr.prototype:n,gs=To?To.valueOf:n,$c=To?To.toString:n;function b(s){if(bn(s)&&!Ee(s)&&!(s instanceof Be)){if(s instanceof Dt)return s;if(Xe.call(s,"__wrapped__"))return Vf(s)}return new Dt(s)}var xa=function(){function s(){}return function(o){if(!pn(o))return{};if(qc)return qc(o);s.prototype=o;var u=new s;return s.prototype=n,u}}();function So(){}function Dt(s,o){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=n}b.templateSettings={escape:is,evaluate:ls,interpolate:Xd,variable:"",imports:{_:b}},b.prototype=So.prototype,b.prototype.constructor=b,Dt.prototype=xa(So.prototype),Dt.prototype.constructor=Dt;function Be(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=le,this.__views__=[]}function rb(){var s=new Be(this.__wrapped__);return s.__actions__=at(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=at(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=at(this.__views__),s}function ab(){if(this.__filtered__){var s=new Be(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function sb(){var s=this.__wrapped__.value(),o=this.__dir__,u=Ee(s),f=o<0,h=u?s.length:0,S=y0(0,h,this.__views__),P=S.start,q=S.end,C=q-P,ee=f?q:P-1,ne=this.__iteratees__,re=ne.length,de=0,pe=Vn(C,this.__takeCount__);if(!u||!f&&h==C&&pe==C)return ff(s,this.__actions__);var be=[];e:for(;C--&&de<pe;){ee+=o;for(var Re=-1,we=s[ee];++Re<re;){var Pe=ne[Re],je=Pe.iteratee,yt=Pe.type,Zn=je(we);if(yt==W)we=Zn;else if(!Zn){if(yt==U)continue e;break e}}be[de++]=we}return be}Be.prototype=xa(So.prototype),Be.prototype.constructor=Be;function Zr(s){var o=-1,u=s==null?0:s.length;for(this.clear();++o<u;){var f=s[o];this.set(f[0],f[1])}}function ob(){this.__data__=ms?ms(null):{},this.size=0}function ib(s){var o=this.has(s)&&delete this.__data__[s];return this.size-=o?1:0,o}function lb(s){var o=this.__data__;if(ms){var u=o[s];return u===c?n:u}return Xe.call(o,s)?o[s]:n}function ub(s){var o=this.__data__;return ms?o[s]!==n:Xe.call(o,s)}function db(s,o){var u=this.__data__;return this.size+=this.has(s)?0:1,u[s]=ms&&o===n?c:o,this}Zr.prototype.clear=ob,Zr.prototype.delete=ib,Zr.prototype.get=lb,Zr.prototype.has=ub,Zr.prototype.set=db;function hr(s){var o=-1,u=s==null?0:s.length;for(this.clear();++o<u;){var f=s[o];this.set(f[0],f[1])}}function cb(){this.__data__=[],this.size=0}function fb(s){var o=this.__data__,u=Eo(o,s);if(u<0)return!1;var f=o.length-1;return u==f?o.pop():vo.call(o,u,1),--this.size,!0}function mb(s){var o=this.__data__,u=Eo(o,s);return u<0?n:o[u][1]}function gb(s){return Eo(this.__data__,s)>-1}function pb(s,o){var u=this.__data__,f=Eo(u,s);return f<0?(++this.size,u.push([s,o])):u[f][1]=o,this}hr.prototype.clear=cb,hr.prototype.delete=fb,hr.prototype.get=mb,hr.prototype.has=gb,hr.prototype.set=pb;function yr(s){var o=-1,u=s==null?0:s.length;for(this.clear();++o<u;){var f=s[o];this.set(f[0],f[1])}}function hb(){this.size=0,this.__data__={hash:new Zr,map:new(cs||hr),string:new Zr}}function yb(s){var o=jo(this,s).delete(s);return this.size-=o?1:0,o}function vb(s){return jo(this,s).get(s)}function kb(s){return jo(this,s).has(s)}function bb(s,o){var u=jo(this,s),f=u.size;return u.set(s,o),this.size+=u.size==f?0:1,this}yr.prototype.clear=hb,yr.prototype.delete=yb,yr.prototype.get=vb,yr.prototype.has=kb,yr.prototype.set=bb;function Qr(s){var o=-1,u=s==null?0:s.length;for(this.__data__=new yr;++o<u;)this.add(s[o])}function wb(s){return this.__data__.set(s,c),this}function _b(s){return this.__data__.has(s)}Qr.prototype.add=Qr.prototype.push=wb,Qr.prototype.has=_b;function Ct(s){var o=this.__data__=new hr(s);this.size=o.size}function Tb(){this.__data__=new hr,this.size=0}function Sb(s){var o=this.__data__,u=o.delete(s);return this.size=o.size,u}function Eb(s){return this.__data__.get(s)}function Ob(s){return this.__data__.has(s)}function Db(s,o){var u=this.__data__;if(u instanceof hr){var f=u.__data__;if(!cs||f.length<a-1)return f.push([s,o]),this.size=++u.size,this;u=this.__data__=new yr(f)}return u.set(s,o),this.size=u.size,this}Ct.prototype.clear=Tb,Ct.prototype.delete=Sb,Ct.prototype.get=Eb,Ct.prototype.has=Ob,Ct.prototype.set=Db;function Hc(s,o){var u=Ee(s),f=!u&&ra(s),h=!u&&!f&&$r(s),S=!u&&!f&&!h&&Na(s),P=u||f||h||S,q=P?ll(s.length,jk):[],C=q.length;for(var ee in s)(o||Xe.call(s,ee))&&!(P&&(ee=="length"||h&&(ee=="offset"||ee=="parent")||S&&(ee=="buffer"||ee=="byteLength"||ee=="byteOffset")||wr(ee,C)))&&q.push(ee);return q}function Vc(s){var o=s.length;return o?s[El(0,o-1)]:n}function xb(s,o){return Io(at(s),Jr(o,0,s.length))}function Rb(s){return Io(at(s))}function pl(s,o,u){(u!==n&&!Lt(s[o],u)||u===n&&!(o in s))&&vr(s,o,u)}function ps(s,o,u){var f=s[o];(!(Xe.call(s,o)&&Lt(f,u))||u===n&&!(o in s))&&vr(s,o,u)}function Eo(s,o){for(var u=s.length;u--;)if(Lt(s[u][0],o))return u;return-1}function Fb(s,o,u,f){return jr(s,function(h,S,P){o(f,h,u(h),P)}),f}function Uc(s,o){return s&&Jt(o,Mn(o),s)}function Ab(s,o){return s&&Jt(o,ot(o),s)}function vr(s,o,u){o=="__proto__"&&ko?ko(s,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):s[o]=u}function hl(s,o){for(var u=-1,f=o.length,h=z(f),S=s==null;++u<f;)h[u]=S?n:Xl(s,o[u]);return h}function Jr(s,o,u){return s===s&&(u!==n&&(s=s<=u?s:u),o!==n&&(s=s>=o?s:o)),s}function xt(s,o,u,f,h,S){var P,q=o&p,C=o&y,ee=o&v;if(u&&(P=h?u(s,f,h,S):u(s)),P!==n)return P;if(!pn(s))return s;var ne=Ee(s);if(ne){if(P=k0(s),!q)return at(s,P)}else{var re=Un(s),de=re==gn||re==Rn;if($r(s))return pf(s,q);if(re==kn||re==me||de&&!h){if(P=C||de?{}:Mf(s),!q)return C?l0(s,Ab(P,s)):i0(s,Uc(P,s))}else{if(!an[re])return h?s:{};P=b0(s,re,q)}}S||(S=new Ct);var pe=S.get(s);if(pe)return pe;S.set(s,P),um(s)?s.forEach(function(we){P.add(xt(we,o,u,we,s,S))}):im(s)&&s.forEach(function(we,Pe){P.set(Pe,xt(we,o,u,Pe,s,S))});var be=ee?C?ql:Bl:C?ot:Mn,Re=ne?n:be(s);return Et(Re||s,function(we,Pe){Re&&(Pe=we,we=s[Pe]),ps(P,Pe,xt(we,o,u,Pe,s,S))}),P}function Nb(s){var o=Mn(s);return function(u){return Wc(u,s,o)}}function Wc(s,o,u){var f=u.length;if(s==null)return!f;for(s=tn(s);f--;){var h=u[f],S=o[h],P=s[h];if(P===n&&!(h in s)||!S(P))return!1}return!0}function Gc(s,o,u){if(typeof s!="function")throw new Ot(l);return _s(function(){s.apply(n,u)},o)}function hs(s,o,u,f){var h=-1,S=io,P=!0,q=s.length,C=[],ee=o.length;if(!q)return C;u&&(o=fn(o,gt(u))),f?(S=tl,P=!1):o.length>=a&&(S=us,P=!1,o=new Qr(o));e:for(;++h<q;){var ne=s[h],re=u==null?ne:u(ne);if(ne=f||ne!==0?ne:0,P&&re===re){for(var de=ee;de--;)if(o[de]===re)continue e;C.push(ne)}else S(o,re,f)||C.push(ne)}return C}var jr=bf(Qt),Yc=bf(vl,!0);function Pb(s,o){var u=!0;return jr(s,function(f,h,S){return u=!!o(f,h,S),u}),u}function Oo(s,o,u){for(var f=-1,h=s.length;++f<h;){var S=s[f],P=o(S);if(P!=null&&(q===n?P===P&&!ht(P):u(P,q)))var q=P,C=S}return C}function Mb(s,o,u,f){var h=s.length;for(u=xe(u),u<0&&(u=-u>h?0:h+u),f=f===n||f>h?h:xe(f),f<0&&(f+=h),f=u>f?0:cm(f);u<f;)s[u++]=o;return s}function zc(s,o){var u=[];return jr(s,function(f,h,S){o(f,h,S)&&u.push(f)}),u}function $n(s,o,u,f,h){var S=-1,P=s.length;for(u||(u=_0),h||(h=[]);++S<P;){var q=s[S];o>0&&u(q)?o>1?$n(q,o-1,u,f,h):Mr(h,q):f||(h[h.length]=q)}return h}var yl=wf(),Kc=wf(!0);function Qt(s,o){return s&&yl(s,o,Mn)}function vl(s,o){return s&&Kc(s,o,Mn)}function Do(s,o){return Pr(o,function(u){return _r(s[u])})}function ea(s,o){o=Cr(o,s);for(var u=0,f=o.length;s!=null&&u<f;)s=s[er(o[u++])];return u&&u==f?s:n}function Xc(s,o,u){var f=o(s);return Ee(s)?f:Mr(f,u(s))}function Kn(s){return s==null?s===n?oe:ct:Xr&&Xr in tn(s)?h0(s):R0(s)}function kl(s,o){return s>o}function Bb(s,o){return s!=null&&Xe.call(s,o)}function qb(s,o){return s!=null&&o in tn(s)}function jb(s,o,u){return s>=Vn(o,u)&&s<An(o,u)}function bl(s,o,u){for(var f=u?tl:io,h=s[0].length,S=s.length,P=S,q=z(S),C=1/0,ee=[];P--;){var ne=s[P];P&&o&&(ne=fn(ne,gt(o))),C=Vn(ne.length,C),q[P]=!u&&(o||h>=120&&ne.length>=120)?new Qr(P&&ne):n}ne=s[0];var re=-1,de=q[0];e:for(;++re<h&&ee.length<C;){var pe=ne[re],be=o?o(pe):pe;if(pe=u||pe!==0?pe:0,!(de?us(de,be):f(ee,be,u))){for(P=S;--P;){var Re=q[P];if(!(Re?us(Re,be):f(s[P],be,u)))continue e}de&&de.push(be),ee.push(pe)}}return ee}function Ib(s,o,u,f){return Qt(s,function(h,S,P){o(f,u(h),S,P)}),f}function ys(s,o,u){o=Cr(o,s),s=If(s,o);var f=s==null?s:s[er(Ft(o))];return f==null?n:mt(f,s,u)}function Zc(s){return bn(s)&&Kn(s)==me}function Cb(s){return bn(s)&&Kn(s)==Ne}function Lb(s){return bn(s)&&Kn(s)==on}function vs(s,o,u,f,h){return s===o?!0:s==null||o==null||!bn(s)&&!bn(o)?s!==s&&o!==o:$b(s,o,u,f,vs,h)}function $b(s,o,u,f,h,S){var P=Ee(s),q=Ee(o),C=P?he:Un(s),ee=q?he:Un(o);C=C==me?kn:C,ee=ee==me?kn:ee;var ne=C==kn,re=ee==kn,de=C==ee;if(de&&$r(s)){if(!$r(o))return!1;P=!0,ne=!1}if(de&&!ne)return S||(S=new Ct),P||Na(s)?Af(s,o,u,f,h,S):g0(s,o,C,u,f,h,S);if(!(u&D)){var pe=ne&&Xe.call(s,"__wrapped__"),be=re&&Xe.call(o,"__wrapped__");if(pe||be){var Re=pe?s.value():s,we=be?o.value():o;return S||(S=new Ct),h(Re,we,u,f,S)}}return de?(S||(S=new Ct),p0(s,o,u,f,h,S)):!1}function Hb(s){return bn(s)&&Un(s)==rn}function wl(s,o,u,f){var h=u.length,S=h,P=!f;if(s==null)return!S;for(s=tn(s);h--;){var q=u[h];if(P&&q[2]?q[1]!==s[q[0]]:!(q[0]in s))return!1}for(;++h<S;){q=u[h];var C=q[0],ee=s[C],ne=q[1];if(P&&q[2]){if(ee===n&&!(C in s))return!1}else{var re=new Ct;if(f)var de=f(ee,ne,C,s,o,re);if(!(de===n?vs(ne,ee,D|E,f,re):de))return!1}}return!0}function Qc(s){if(!pn(s)||S0(s))return!1;var o=_r(s)?Hk:Nv;return o.test(ta(s))}function Vb(s){return bn(s)&&Kn(s)==M}function Ub(s){return bn(s)&&Un(s)==$}function Wb(s){return bn(s)&&Uo(s.length)&&!!un[Kn(s)]}function Jc(s){return typeof s=="function"?s:s==null?it:typeof s=="object"?Ee(s)?tf(s[0],s[1]):nf(s):_m(s)}function _l(s){if(!ws(s))return zk(s);var o=[];for(var u in tn(s))Xe.call(s,u)&&u!="constructor"&&o.push(u);return o}function Gb(s){if(!pn(s))return x0(s);var o=ws(s),u=[];for(var f in s)f=="constructor"&&(o||!Xe.call(s,f))||u.push(f);return u}function Tl(s,o){return s<o}function ef(s,o){var u=-1,f=st(s)?z(s.length):[];return jr(s,function(h,S,P){f[++u]=o(h,S,P)}),f}function nf(s){var o=Il(s);return o.length==1&&o[0][2]?qf(o[0][0],o[0][1]):function(u){return u===s||wl(u,s,o)}}function tf(s,o){return Ll(s)&&Bf(o)?qf(er(s),o):function(u){var f=Xl(u,s);return f===n&&f===o?Zl(u,s):vs(o,f,D|E)}}function xo(s,o,u,f,h){s!==o&&yl(o,function(S,P){if(h||(h=new Ct),pn(S))Yb(s,o,P,u,xo,f,h);else{var q=f?f(Hl(s,P),S,P+"",s,o,h):n;q===n&&(q=S),pl(s,P,q)}},ot)}function Yb(s,o,u,f,h,S,P){var q=Hl(s,u),C=Hl(o,u),ee=P.get(C);if(ee){pl(s,u,ee);return}var ne=S?S(q,C,u+"",s,o,P):n,re=ne===n;if(re){var de=Ee(C),pe=!de&&$r(C),be=!de&&!pe&&Na(C);ne=C,de||pe||be?Ee(q)?ne=q:_n(q)?ne=at(q):pe?(re=!1,ne=pf(C,!0)):be?(re=!1,ne=hf(C,!0)):ne=[]:Ts(C)||ra(C)?(ne=q,ra(q)?ne=fm(q):(!pn(q)||_r(q))&&(ne=Mf(C))):re=!1}re&&(P.set(C,ne),h(ne,C,f,S,P),P.delete(C)),pl(s,u,ne)}function rf(s,o){var u=s.length;if(u)return o+=o<0?u:0,wr(o,u)?s[o]:n}function af(s,o,u){o.length?o=fn(o,function(S){return Ee(S)?function(P){return ea(P,S.length===1?S[0]:S)}:S}):o=[it];var f=-1;o=fn(o,gt(ve()));var h=ef(s,function(S,P,q){var C=fn(o,function(ee){return ee(S)});return{criteria:C,index:++f,value:S}});return bk(h,function(S,P){return o0(S,P,u)})}function zb(s,o){return sf(s,o,function(u,f){return Zl(s,f)})}function sf(s,o,u){for(var f=-1,h=o.length,S={};++f<h;){var P=o[f],q=ea(s,P);u(q,P)&&ks(S,Cr(P,s),q)}return S}function Kb(s){return function(o){return ea(o,s)}}function Sl(s,o,u,f){var h=f?kk:wa,S=-1,P=o.length,q=s;for(s===o&&(o=at(o)),u&&(q=fn(s,gt(u)));++S<P;)for(var C=0,ee=o[S],ne=u?u(ee):ee;(C=h(q,ne,C,f))>-1;)q!==s&&vo.call(q,C,1),vo.call(s,C,1);return s}function of(s,o){for(var u=s?o.length:0,f=u-1;u--;){var h=o[u];if(u==f||h!==S){var S=h;wr(h)?vo.call(s,h,1):xl(s,h)}}return s}function El(s,o){return s+wo(Lc()*(o-s+1))}function Xb(s,o,u,f){for(var h=-1,S=An(bo((o-s)/(u||1)),0),P=z(S);S--;)P[f?S:++h]=s,s+=u;return P}function Ol(s,o){var u="";if(!s||o<1||o>K)return u;do o%2&&(u+=s),o=wo(o/2),o&&(s+=s);while(o);return u}function Fe(s,o){return Vl(jf(s,o,it),s+"")}function Zb(s){return Vc(Pa(s))}function Qb(s,o){var u=Pa(s);return Io(u,Jr(o,0,u.length))}function ks(s,o,u,f){if(!pn(s))return s;o=Cr(o,s);for(var h=-1,S=o.length,P=S-1,q=s;q!=null&&++h<S;){var C=er(o[h]),ee=u;if(C==="__proto__"||C==="constructor"||C==="prototype")return s;if(h!=P){var ne=q[C];ee=f?f(ne,C,q):n,ee===n&&(ee=pn(ne)?ne:wr(o[h+1])?[]:{})}ps(q,C,ee),q=q[C]}return s}var lf=_o?function(s,o){return _o.set(s,o),s}:it,Jb=ko?function(s,o){return ko(s,"toString",{configurable:!0,enumerable:!1,value:Jl(o),writable:!0})}:it;function e0(s){return Io(Pa(s))}function Rt(s,o,u){var f=-1,h=s.length;o<0&&(o=-o>h?0:h+o),u=u>h?h:u,u<0&&(u+=h),h=o>u?0:u-o>>>0,o>>>=0;for(var S=z(h);++f<h;)S[f]=s[f+o];return S}function n0(s,o){var u;return jr(s,function(f,h,S){return u=o(f,h,S),!u}),!!u}function Ro(s,o,u){var f=0,h=s==null?f:s.length;if(typeof o=="number"&&o===o&&h<=Oe){for(;f<h;){var S=f+h>>>1,P=s[S];P!==null&&!ht(P)&&(u?P<=o:P<o)?f=S+1:h=S}return h}return Dl(s,o,it,u)}function Dl(s,o,u,f){var h=0,S=s==null?0:s.length;if(S===0)return 0;o=u(o);for(var P=o!==o,q=o===null,C=ht(o),ee=o===n;h<S;){var ne=wo((h+S)/2),re=u(s[ne]),de=re!==n,pe=re===null,be=re===re,Re=ht(re);if(P)var we=f||be;else ee?we=be&&(f||de):q?we=be&&de&&(f||!pe):C?we=be&&de&&!pe&&(f||!Re):pe||Re?we=!1:we=f?re<=o:re<o;we?h=ne+1:S=ne}return Vn(S,Te)}function uf(s,o){for(var u=-1,f=s.length,h=0,S=[];++u<f;){var P=s[u],q=o?o(P):P;if(!u||!Lt(q,C)){var C=q;S[h++]=P===0?0:P}}return S}function df(s){return typeof s=="number"?s:ht(s)?se:+s}function pt(s){if(typeof s=="string")return s;if(Ee(s))return fn(s,pt)+"";if(ht(s))return $c?$c.call(s):"";var o=s+"";return o=="0"&&1/s==-1/0?"-0":o}function Ir(s,o,u){var f=-1,h=io,S=s.length,P=!0,q=[],C=q;if(u)P=!1,h=tl;else if(S>=a){var ee=o?null:f0(s);if(ee)return uo(ee);P=!1,h=us,C=new Qr}else C=o?[]:q;e:for(;++f<S;){var ne=s[f],re=o?o(ne):ne;if(ne=u||ne!==0?ne:0,P&&re===re){for(var de=C.length;de--;)if(C[de]===re)continue e;o&&C.push(re),q.push(ne)}else h(C,re,u)||(C!==q&&C.push(re),q.push(ne))}return q}function xl(s,o){return o=Cr(o,s),s=If(s,o),s==null||delete s[er(Ft(o))]}function cf(s,o,u,f){return ks(s,o,u(ea(s,o)),f)}function Fo(s,o,u,f){for(var h=s.length,S=f?h:-1;(f?S--:++S<h)&&o(s[S],S,s););return u?Rt(s,f?0:S,f?S+1:h):Rt(s,f?S+1:0,f?h:S)}function ff(s,o){var u=s;return u instanceof Be&&(u=u.value()),rl(o,function(f,h){return h.func.apply(h.thisArg,Mr([f],h.args))},u)}function Rl(s,o,u){var f=s.length;if(f<2)return f?Ir(s[0]):[];for(var h=-1,S=z(f);++h<f;)for(var P=s[h],q=-1;++q<f;)q!=h&&(S[h]=hs(S[h]||P,s[q],o,u));return Ir($n(S,1),o,u)}function mf(s,o,u){for(var f=-1,h=s.length,S=o.length,P={};++f<h;){var q=f<S?o[f]:n;u(P,s[f],q)}return P}function Fl(s){return _n(s)?s:[]}function Al(s){return typeof s=="function"?s:it}function Cr(s,o){return Ee(s)?s:Ll(s,o)?[s]:Hf(Ye(s))}var t0=Fe;function Lr(s,o,u){var f=s.length;return u=u===n?f:u,!o&&u>=f?s:Rt(s,o,u)}var gf=Vk||function(s){return Ln.clearTimeout(s)};function pf(s,o){if(o)return s.slice();var u=s.length,f=Bc?Bc(u):new s.constructor(u);return s.copy(f),f}function Nl(s){var o=new s.constructor(s.byteLength);return new ho(o).set(new ho(s)),o}function r0(s,o){var u=o?Nl(s.buffer):s.buffer;return new s.constructor(u,s.byteOffset,s.byteLength)}function a0(s){var o=new s.constructor(s.source,Zd.exec(s));return o.lastIndex=s.lastIndex,o}function s0(s){return gs?tn(gs.call(s)):{}}function hf(s,o){var u=o?Nl(s.buffer):s.buffer;return new s.constructor(u,s.byteOffset,s.length)}function yf(s,o){if(s!==o){var u=s!==n,f=s===null,h=s===s,S=ht(s),P=o!==n,q=o===null,C=o===o,ee=ht(o);if(!q&&!ee&&!S&&s>o||S&&P&&C&&!q&&!ee||f&&P&&C||!u&&C||!h)return 1;if(!f&&!S&&!ee&&s<o||ee&&u&&h&&!f&&!S||q&&u&&h||!P&&h||!C)return-1}return 0}function o0(s,o,u){for(var f=-1,h=s.criteria,S=o.criteria,P=h.length,q=u.length;++f<P;){var C=yf(h[f],S[f]);if(C){if(f>=q)return C;var ee=u[f];return C*(ee=="desc"?-1:1)}}return s.index-o.index}function vf(s,o,u,f){for(var h=-1,S=s.length,P=u.length,q=-1,C=o.length,ee=An(S-P,0),ne=z(C+ee),re=!f;++q<C;)ne[q]=o[q];for(;++h<P;)(re||h<S)&&(ne[u[h]]=s[h]);for(;ee--;)ne[q++]=s[h++];return ne}function kf(s,o,u,f){for(var h=-1,S=s.length,P=-1,q=u.length,C=-1,ee=o.length,ne=An(S-q,0),re=z(ne+ee),de=!f;++h<ne;)re[h]=s[h];for(var pe=h;++C<ee;)re[pe+C]=o[C];for(;++P<q;)(de||h<S)&&(re[pe+u[P]]=s[h++]);return re}function at(s,o){var u=-1,f=s.length;for(o||(o=z(f));++u<f;)o[u]=s[u];return o}function Jt(s,o,u,f){var h=!u;u||(u={});for(var S=-1,P=o.length;++S<P;){var q=o[S],C=f?f(u[q],s[q],q,u,s):n;C===n&&(C=s[q]),h?vr(u,q,C):ps(u,q,C)}return u}function i0(s,o){return Jt(s,Cl(s),o)}function l0(s,o){return Jt(s,Nf(s),o)}function Ao(s,o){return function(u,f){var h=Ee(u)?mk:Fb,S=o?o():{};return h(u,s,ve(f,2),S)}}function Ra(s){return Fe(function(o,u){var f=-1,h=u.length,S=h>1?u[h-1]:n,P=h>2?u[2]:n;for(S=s.length>3&&typeof S=="function"?(h--,S):n,P&&Xn(u[0],u[1],P)&&(S=h<3?n:S,h=1),o=tn(o);++f<h;){var q=u[f];q&&s(o,q,f,S)}return o})}function bf(s,o){return function(u,f){if(u==null)return u;if(!st(u))return s(u,f);for(var h=u.length,S=o?h:-1,P=tn(u);(o?S--:++S<h)&&f(P[S],S,P)!==!1;);return u}}function wf(s){return function(o,u,f){for(var h=-1,S=tn(o),P=f(o),q=P.length;q--;){var C=P[s?q:++h];if(u(S[C],C,S)===!1)break}return o}}function u0(s,o,u){var f=o&k,h=bs(s);function S(){var P=this&&this!==Ln&&this instanceof S?h:s;return P.apply(f?u:this,arguments)}return S}function _f(s){return function(o){o=Ye(o);var u=_a(o)?It(o):n,f=u?u[0]:o.charAt(0),h=u?Lr(u,1).join(""):o.slice(1);return f[s]()+h}}function Fa(s){return function(o){return rl(bm(km(o).replace(Jv,"")),s,"")}}function bs(s){return function(){var o=arguments;switch(o.length){case 0:return new s;case 1:return new s(o[0]);case 2:return new s(o[0],o[1]);case 3:return new s(o[0],o[1],o[2]);case 4:return new s(o[0],o[1],o[2],o[3]);case 5:return new s(o[0],o[1],o[2],o[3],o[4]);case 6:return new s(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new s(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var u=xa(s.prototype),f=s.apply(u,o);return pn(f)?f:u}}function d0(s,o,u){var f=bs(s);function h(){for(var S=arguments.length,P=z(S),q=S,C=Aa(h);q--;)P[q]=arguments[q];var ee=S<3&&P[0]!==C&&P[S-1]!==C?[]:Br(P,C);if(S-=ee.length,S<u)return Df(s,o,No,h.placeholder,n,P,ee,n,n,u-S);var ne=this&&this!==Ln&&this instanceof h?f:s;return mt(ne,this,P)}return h}function Tf(s){return function(o,u,f){var h=tn(o);if(!st(o)){var S=ve(u,3);o=Mn(o),u=function(q){return S(h[q],q,h)}}var P=s(o,u,f);return P>-1?h[S?o[P]:P]:n}}function Sf(s){return br(function(o){var u=o.length,f=u,h=Dt.prototype.thru;for(s&&o.reverse();f--;){var S=o[f];if(typeof S!="function")throw new Ot(l);if(h&&!P&&qo(S)=="wrapper")var P=new Dt([],!0)}for(f=P?f:u;++f<u;){S=o[f];var q=qo(S),C=q=="wrapper"?jl(S):n;C&&$l(C[0])&&C[1]==(F|T|x|A)&&!C[4].length&&C[9]==1?P=P[qo(C[0])].apply(P,C[3]):P=S.length==1&&$l(S)?P[q]():P.thru(S)}return function(){var ee=arguments,ne=ee[0];if(P&&ee.length==1&&Ee(ne))return P.plant(ne).value();for(var re=0,de=u?o[re].apply(this,ee):ne;++re<u;)de=o[re].call(this,de);return de}})}function No(s,o,u,f,h,S,P,q,C,ee){var ne=o&F,re=o&k,de=o&R,pe=o&(T|B),be=o&j,Re=de?n:bs(s);function we(){for(var Pe=arguments.length,je=z(Pe),yt=Pe;yt--;)je[yt]=arguments[yt];if(pe)var Zn=Aa(we),vt=_k(je,Zn);if(f&&(je=vf(je,f,h,pe)),S&&(je=kf(je,S,P,pe)),Pe-=vt,pe&&Pe<ee){var Tn=Br(je,Zn);return Df(s,o,No,we.placeholder,u,je,Tn,q,C,ee-Pe)}var $t=re?u:this,Sr=de?$t[s]:s;return Pe=je.length,q?je=F0(je,q):be&&Pe>1&&je.reverse(),ne&&C<Pe&&(je.length=C),this&&this!==Ln&&this instanceof we&&(Sr=Re||bs(Sr)),Sr.apply($t,je)}return we}function Ef(s,o){return function(u,f){return Ib(u,s,o(f),{})}}function Po(s,o){return function(u,f){var h;if(u===n&&f===n)return o;if(u!==n&&(h=u),f!==n){if(h===n)return f;typeof u=="string"||typeof f=="string"?(u=pt(u),f=pt(f)):(u=df(u),f=df(f)),h=s(u,f)}return h}}function Pl(s){return br(function(o){return o=fn(o,gt(ve())),Fe(function(u){var f=this;return s(o,function(h){return mt(h,f,u)})})})}function Mo(s,o){o=o===n?" ":pt(o);var u=o.length;if(u<2)return u?Ol(o,s):o;var f=Ol(o,bo(s/Ta(o)));return _a(o)?Lr(It(f),0,s).join(""):f.slice(0,s)}function c0(s,o,u,f){var h=o&k,S=bs(s);function P(){for(var q=-1,C=arguments.length,ee=-1,ne=f.length,re=z(ne+C),de=this&&this!==Ln&&this instanceof P?S:s;++ee<ne;)re[ee]=f[ee];for(;C--;)re[ee++]=arguments[++q];return mt(de,h?u:this,re)}return P}function Of(s){return function(o,u,f){return f&&typeof f!="number"&&Xn(o,u,f)&&(u=f=n),o=Tr(o),u===n?(u=o,o=0):u=Tr(u),f=f===n?o<u?1:-1:Tr(f),Xb(o,u,f,s)}}function Bo(s){return function(o,u){return typeof o=="string"&&typeof u=="string"||(o=At(o),u=At(u)),s(o,u)}}function Df(s,o,u,f,h,S,P,q,C,ee){var ne=o&T,re=ne?P:n,de=ne?n:P,pe=ne?S:n,be=ne?n:S;o|=ne?x:N,o&=~(ne?N:x),o&_||(o&=-4);var Re=[s,o,h,pe,re,be,de,q,C,ee],we=u.apply(n,Re);return $l(s)&&Cf(we,Re),we.placeholder=f,Lf(we,s,o)}function Ml(s){var o=Fn[s];return function(u,f){if(u=At(u),f=f==null?0:Vn(xe(f),292),f&&Cc(u)){var h=(Ye(u)+"e").split("e"),S=o(h[0]+"e"+(+h[1]+f));return h=(Ye(S)+"e").split("e"),+(h[0]+"e"+(+h[1]-f))}return o(u)}}var f0=Oa&&1/uo(new Oa([,-0]))[1]==J?function(s){return new Oa(s)}:tu;function xf(s){return function(o){var u=Un(o);return u==rn?dl(o):u==$?Rk(o):wk(o,s(o))}}function kr(s,o,u,f,h,S,P,q){var C=o&R;if(!C&&typeof s!="function")throw new Ot(l);var ee=f?f.length:0;if(ee||(o&=-97,f=h=n),P=P===n?P:An(xe(P),0),q=q===n?q:xe(q),ee-=h?h.length:0,o&N){var ne=f,re=h;f=h=n}var de=C?n:jl(s),pe=[s,o,u,f,h,ne,re,S,P,q];if(de&&D0(pe,de),s=pe[0],o=pe[1],u=pe[2],f=pe[3],h=pe[4],q=pe[9]=pe[9]===n?C?0:s.length:An(pe[9]-ee,0),!q&&o&(T|B)&&(o&=-25),!o||o==k)var be=u0(s,o,u);else o==T||o==B?be=d0(s,o,q):(o==x||o==(k|x))&&!h.length?be=c0(s,o,u,f):be=No.apply(n,pe);var Re=de?lf:Cf;return Lf(Re(be,pe),s,o)}function Rf(s,o,u,f){return s===n||Lt(s,Ea[u])&&!Xe.call(f,u)?o:s}function Ff(s,o,u,f,h,S){return pn(s)&&pn(o)&&(S.set(o,s),xo(s,o,n,Ff,S),S.delete(o)),s}function m0(s){return Ts(s)?n:s}function Af(s,o,u,f,h,S){var P=u&D,q=s.length,C=o.length;if(q!=C&&!(P&&C>q))return!1;var ee=S.get(s),ne=S.get(o);if(ee&&ne)return ee==o&&ne==s;var re=-1,de=!0,pe=u&E?new Qr:n;for(S.set(s,o),S.set(o,s);++re<q;){var be=s[re],Re=o[re];if(f)var we=P?f(Re,be,re,o,s,S):f(be,Re,re,s,o,S);if(we!==n){if(we)continue;de=!1;break}if(pe){if(!al(o,function(Pe,je){if(!us(pe,je)&&(be===Pe||h(be,Pe,u,f,S)))return pe.push(je)})){de=!1;break}}else if(!(be===Re||h(be,Re,u,f,S))){de=!1;break}}return S.delete(s),S.delete(o),de}function g0(s,o,u,f,h,S,P){switch(u){case qe:if(s.byteLength!=o.byteLength||s.byteOffset!=o.byteOffset)return!1;s=s.buffer,o=o.buffer;case Ne:return!(s.byteLength!=o.byteLength||!S(new ho(s),new ho(o)));case Ge:case on:case Dn:return Lt(+s,+o);case ln:return s.name==o.name&&s.message==o.message;case M:case X:return s==o+"";case rn:var q=dl;case $:var C=f&D;if(q||(q=uo),s.size!=o.size&&!C)return!1;var ee=P.get(s);if(ee)return ee==o;f|=E,P.set(s,o);var ne=Af(q(s),q(o),f,h,S,P);return P.delete(s),ne;case ue:if(gs)return gs.call(s)==gs.call(o)}return!1}function p0(s,o,u,f,h,S){var P=u&D,q=Bl(s),C=q.length,ee=Bl(o),ne=ee.length;if(C!=ne&&!P)return!1;for(var re=C;re--;){var de=q[re];if(!(P?de in o:Xe.call(o,de)))return!1}var pe=S.get(s),be=S.get(o);if(pe&&be)return pe==o&&be==s;var Re=!0;S.set(s,o),S.set(o,s);for(var we=P;++re<C;){de=q[re];var Pe=s[de],je=o[de];if(f)var yt=P?f(je,Pe,de,o,s,S):f(Pe,je,de,s,o,S);if(!(yt===n?Pe===je||h(Pe,je,u,f,S):yt)){Re=!1;break}we||(we=de=="constructor")}if(Re&&!we){var Zn=s.constructor,vt=o.constructor;Zn!=vt&&"constructor"in s&&"constructor"in o&&!(typeof Zn=="function"&&Zn instanceof Zn&&typeof vt=="function"&&vt instanceof vt)&&(Re=!1)}return S.delete(s),S.delete(o),Re}function br(s){return Vl(jf(s,n,Gf),s+"")}function Bl(s){return Xc(s,Mn,Cl)}function ql(s){return Xc(s,ot,Nf)}var jl=_o?function(s){return _o.get(s)}:tu;function qo(s){for(var o=s.name+"",u=Da[o],f=Xe.call(Da,o)?u.length:0;f--;){var h=u[f],S=h.func;if(S==null||S==s)return h.name}return o}function Aa(s){var o=Xe.call(b,"placeholder")?b:s;return o.placeholder}function ve(){var s=b.iteratee||eu;return s=s===eu?Jc:s,arguments.length?s(arguments[0],arguments[1]):s}function jo(s,o){var u=s.__data__;return T0(o)?u[typeof o=="string"?"string":"hash"]:u.map}function Il(s){for(var o=Mn(s),u=o.length;u--;){var f=o[u],h=s[f];o[u]=[f,h,Bf(h)]}return o}function na(s,o){var u=Ok(s,o);return Qc(u)?u:n}function h0(s){var o=Xe.call(s,Xr),u=s[Xr];try{s[Xr]=n;var f=!0}catch{}var h=go.call(s);return f&&(o?s[Xr]=u:delete s[Xr]),h}var Cl=fl?function(s){return s==null?[]:(s=tn(s),Pr(fl(s),function(o){return jc.call(s,o)}))}:ru,Nf=fl?function(s){for(var o=[];s;)Mr(o,Cl(s)),s=yo(s);return o}:ru,Un=Kn;(ml&&Un(new ml(new ArrayBuffer(1)))!=qe||cs&&Un(new cs)!=rn||gl&&Un(gl.resolve())!=ft||Oa&&Un(new Oa)!=$||fs&&Un(new fs)!=ae)&&(Un=function(s){var o=Kn(s),u=o==kn?s.constructor:n,f=u?ta(u):"";if(f)switch(f){case Qk:return qe;case Jk:return rn;case eb:return ft;case nb:return $;case tb:return ae}return o});function y0(s,o,u){for(var f=-1,h=u.length;++f<h;){var S=u[f],P=S.size;switch(S.type){case"drop":s+=P;break;case"dropRight":o-=P;break;case"take":o=Vn(o,s+P);break;case"takeRight":s=An(s,o-P);break}}return{start:s,end:o}}function v0(s){var o=s.match(Sv);return o?o[1].split(Ev):[]}function Pf(s,o,u){o=Cr(o,s);for(var f=-1,h=o.length,S=!1;++f<h;){var P=er(o[f]);if(!(S=s!=null&&u(s,P)))break;s=s[P]}return S||++f!=h?S:(h=s==null?0:s.length,!!h&&Uo(h)&&wr(P,h)&&(Ee(s)||ra(s)))}function k0(s){var o=s.length,u=new s.constructor(o);return o&&typeof s[0]=="string"&&Xe.call(s,"index")&&(u.index=s.index,u.input=s.input),u}function Mf(s){return typeof s.constructor=="function"&&!ws(s)?xa(yo(s)):{}}function b0(s,o,u){var f=s.constructor;switch(o){case Ne:return Nl(s);case Ge:case on:return new f(+s);case qe:return r0(s,u);case Nn:case Zt:case Yn:case zr:case De:case Ke:case $e:case zn:case Cn:return hf(s,u);case rn:return new f;case Dn:case X:return new f(s);case M:return a0(s);case $:return new f;case ue:return s0(s)}}function w0(s,o){var u=o.length;if(!u)return s;var f=u-1;return o[f]=(u>1?"& ":"")+o[f],o=o.join(u>2?", ":" "),s.replace(Tv,`{
/* [wrapped with `+o+`] */
`)}function _0(s){return Ee(s)||ra(s)||!!(Ic&&s&&s[Ic])}function wr(s,o){var u=typeof s;return o=o??K,!!o&&(u=="number"||u!="symbol"&&Mv.test(s))&&s>-1&&s%1==0&&s<o}function Xn(s,o,u){if(!pn(u))return!1;var f=typeof o;return(f=="number"?st(u)&&wr(o,u.length):f=="string"&&o in u)?Lt(u[o],s):!1}function Ll(s,o){if(Ee(s))return!1;var u=typeof s;return u=="number"||u=="symbol"||u=="boolean"||s==null||ht(s)?!0:kv.test(s)||!vv.test(s)||o!=null&&s in tn(o)}function T0(s){var o=typeof s;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?s!=="__proto__":s===null}function $l(s){var o=qo(s),u=b[o];if(typeof u!="function"||!(o in Be.prototype))return!1;if(s===u)return!0;var f=jl(u);return!!f&&s===f[0]}function S0(s){return!!Mc&&Mc in s}var E0=fo?_r:au;function ws(s){var o=s&&s.constructor,u=typeof o=="function"&&o.prototype||Ea;return s===u}function Bf(s){return s===s&&!pn(s)}function qf(s,o){return function(u){return u==null?!1:u[s]===o&&(o!==n||s in tn(u))}}function O0(s){var o=Ho(s,function(f){return u.size===m&&u.clear(),f}),u=o.cache;return o}function D0(s,o){var u=s[1],f=o[1],h=u|f,S=h<(k|R|F),P=f==F&&u==T||f==F&&u==A&&s[7].length<=o[8]||f==(F|A)&&o[7].length<=o[8]&&u==T;if(!(S||P))return s;f&k&&(s[2]=o[2],h|=u&k?0:_);var q=o[3];if(q){var C=s[3];s[3]=C?vf(C,q,o[4]):q,s[4]=C?Br(s[3],g):o[4]}return q=o[5],q&&(C=s[5],s[5]=C?kf(C,q,o[6]):q,s[6]=C?Br(s[5],g):o[6]),q=o[7],q&&(s[7]=q),f&F&&(s[8]=s[8]==null?o[8]:Vn(s[8],o[8])),s[9]==null&&(s[9]=o[9]),s[0]=o[0],s[1]=h,s}function x0(s){var o=[];if(s!=null)for(var u in tn(s))o.push(u);return o}function R0(s){return go.call(s)}function jf(s,o,u){return o=An(o===n?s.length-1:o,0),function(){for(var f=arguments,h=-1,S=An(f.length-o,0),P=z(S);++h<S;)P[h]=f[o+h];h=-1;for(var q=z(o+1);++h<o;)q[h]=f[h];return q[o]=u(P),mt(s,this,q)}}function If(s,o){return o.length<2?s:ea(s,Rt(o,0,-1))}function F0(s,o){for(var u=s.length,f=Vn(o.length,u),h=at(s);f--;){var S=o[f];s[f]=wr(S,u)?h[S]:n}return s}function Hl(s,o){if(!(o==="constructor"&&typeof s[o]=="function")&&o!="__proto__")return s[o]}var Cf=$f(lf),_s=Wk||function(s,o){return Ln.setTimeout(s,o)},Vl=$f(Jb);function Lf(s,o,u){var f=o+"";return Vl(s,w0(f,A0(v0(f),u)))}function $f(s){var o=0,u=0;return function(){var f=Kk(),h=L-(f-u);if(u=f,h>0){if(++o>=G)return arguments[0]}else o=0;return s.apply(n,arguments)}}function Io(s,o){var u=-1,f=s.length,h=f-1;for(o=o===n?f:o;++u<o;){var S=El(u,h),P=s[S];s[S]=s[u],s[u]=P}return s.length=o,s}var Hf=O0(function(s){var o=[];return s.charCodeAt(0)===46&&o.push(""),s.replace(bv,function(u,f,h,S){o.push(h?S.replace(xv,"$1"):f||u)}),o});function er(s){if(typeof s=="string"||ht(s))return s;var o=s+"";return o=="0"&&1/s==-1/0?"-0":o}function ta(s){if(s!=null){try{return mo.call(s)}catch{}try{return s+""}catch{}}return""}function A0(s,o){return Et(nn,function(u){var f="_."+u[0];o&u[1]&&!io(s,f)&&s.push(f)}),s.sort()}function Vf(s){if(s instanceof Be)return s.clone();var o=new Dt(s.__wrapped__,s.__chain__);return o.__actions__=at(s.__actions__),o.__index__=s.__index__,o.__values__=s.__values__,o}function N0(s,o,u){(u?Xn(s,o,u):o===n)?o=1:o=An(xe(o),0);var f=s==null?0:s.length;if(!f||o<1)return[];for(var h=0,S=0,P=z(bo(f/o));h<f;)P[S++]=Rt(s,h,h+=o);return P}function P0(s){for(var o=-1,u=s==null?0:s.length,f=0,h=[];++o<u;){var S=s[o];S&&(h[f++]=S)}return h}function M0(){var s=arguments.length;if(!s)return[];for(var o=z(s-1),u=arguments[0],f=s;f--;)o[f-1]=arguments[f];return Mr(Ee(u)?at(u):[u],$n(o,1))}var B0=Fe(function(s,o){return _n(s)?hs(s,$n(o,1,_n,!0)):[]}),q0=Fe(function(s,o){var u=Ft(o);return _n(u)&&(u=n),_n(s)?hs(s,$n(o,1,_n,!0),ve(u,2)):[]}),j0=Fe(function(s,o){var u=Ft(o);return _n(u)&&(u=n),_n(s)?hs(s,$n(o,1,_n,!0),n,u):[]});function I0(s,o,u){var f=s==null?0:s.length;return f?(o=u||o===n?1:xe(o),Rt(s,o<0?0:o,f)):[]}function C0(s,o,u){var f=s==null?0:s.length;return f?(o=u||o===n?1:xe(o),o=f-o,Rt(s,0,o<0?0:o)):[]}function L0(s,o){return s&&s.length?Fo(s,ve(o,3),!0,!0):[]}function $0(s,o){return s&&s.length?Fo(s,ve(o,3),!0):[]}function H0(s,o,u,f){var h=s==null?0:s.length;return h?(u&&typeof u!="number"&&Xn(s,o,u)&&(u=0,f=h),Mb(s,o,u,f)):[]}function Uf(s,o,u){var f=s==null?0:s.length;if(!f)return-1;var h=u==null?0:xe(u);return h<0&&(h=An(f+h,0)),lo(s,ve(o,3),h)}function Wf(s,o,u){var f=s==null?0:s.length;if(!f)return-1;var h=f-1;return u!==n&&(h=xe(u),h=u<0?An(f+h,0):Vn(h,f-1)),lo(s,ve(o,3),h,!0)}function Gf(s){var o=s==null?0:s.length;return o?$n(s,1):[]}function V0(s){var o=s==null?0:s.length;return o?$n(s,J):[]}function U0(s,o){var u=s==null?0:s.length;return u?(o=o===n?1:xe(o),$n(s,o)):[]}function W0(s){for(var o=-1,u=s==null?0:s.length,f={};++o<u;){var h=s[o];f[h[0]]=h[1]}return f}function Yf(s){return s&&s.length?s[0]:n}function G0(s,o,u){var f=s==null?0:s.length;if(!f)return-1;var h=u==null?0:xe(u);return h<0&&(h=An(f+h,0)),wa(s,o,h)}function Y0(s){var o=s==null?0:s.length;return o?Rt(s,0,-1):[]}var z0=Fe(function(s){var o=fn(s,Fl);return o.length&&o[0]===s[0]?bl(o):[]}),K0=Fe(function(s){var o=Ft(s),u=fn(s,Fl);return o===Ft(u)?o=n:u.pop(),u.length&&u[0]===s[0]?bl(u,ve(o,2)):[]}),X0=Fe(function(s){var o=Ft(s),u=fn(s,Fl);return o=typeof o=="function"?o:n,o&&u.pop(),u.length&&u[0]===s[0]?bl(u,n,o):[]});function Z0(s,o){return s==null?"":Yk.call(s,o)}function Ft(s){var o=s==null?0:s.length;return o?s[o-1]:n}function Q0(s,o,u){var f=s==null?0:s.length;if(!f)return-1;var h=f;return u!==n&&(h=xe(u),h=h<0?An(f+h,0):Vn(h,f-1)),o===o?Ak(s,o,h):lo(s,Oc,h,!0)}function J0(s,o){return s&&s.length?rf(s,xe(o)):n}var ew=Fe(zf);function zf(s,o){return s&&s.length&&o&&o.length?Sl(s,o):s}function nw(s,o,u){return s&&s.length&&o&&o.length?Sl(s,o,ve(u,2)):s}function tw(s,o,u){return s&&s.length&&o&&o.length?Sl(s,o,n,u):s}var rw=br(function(s,o){var u=s==null?0:s.length,f=hl(s,o);return of(s,fn(o,function(h){return wr(h,u)?+h:h}).sort(yf)),f});function aw(s,o){var u=[];if(!(s&&s.length))return u;var f=-1,h=[],S=s.length;for(o=ve(o,3);++f<S;){var P=s[f];o(P,f,s)&&(u.push(P),h.push(f))}return of(s,h),u}function Ul(s){return s==null?s:Zk.call(s)}function sw(s,o,u){var f=s==null?0:s.length;return f?(u&&typeof u!="number"&&Xn(s,o,u)?(o=0,u=f):(o=o==null?0:xe(o),u=u===n?f:xe(u)),Rt(s,o,u)):[]}function ow(s,o){return Ro(s,o)}function iw(s,o,u){return Dl(s,o,ve(u,2))}function lw(s,o){var u=s==null?0:s.length;if(u){var f=Ro(s,o);if(f<u&&Lt(s[f],o))return f}return-1}function uw(s,o){return Ro(s,o,!0)}function dw(s,o,u){return Dl(s,o,ve(u,2),!0)}function cw(s,o){var u=s==null?0:s.length;if(u){var f=Ro(s,o,!0)-1;if(Lt(s[f],o))return f}return-1}function fw(s){return s&&s.length?uf(s):[]}function mw(s,o){return s&&s.length?uf(s,ve(o,2)):[]}function gw(s){var o=s==null?0:s.length;return o?Rt(s,1,o):[]}function pw(s,o,u){return s&&s.length?(o=u||o===n?1:xe(o),Rt(s,0,o<0?0:o)):[]}function hw(s,o,u){var f=s==null?0:s.length;return f?(o=u||o===n?1:xe(o),o=f-o,Rt(s,o<0?0:o,f)):[]}function yw(s,o){return s&&s.length?Fo(s,ve(o,3),!1,!0):[]}function vw(s,o){return s&&s.length?Fo(s,ve(o,3)):[]}var kw=Fe(function(s){return Ir($n(s,1,_n,!0))}),bw=Fe(function(s){var o=Ft(s);return _n(o)&&(o=n),Ir($n(s,1,_n,!0),ve(o,2))}),ww=Fe(function(s){var o=Ft(s);return o=typeof o=="function"?o:n,Ir($n(s,1,_n,!0),n,o)});function _w(s){return s&&s.length?Ir(s):[]}function Tw(s,o){return s&&s.length?Ir(s,ve(o,2)):[]}function Sw(s,o){return o=typeof o=="function"?o:n,s&&s.length?Ir(s,n,o):[]}function Wl(s){if(!(s&&s.length))return[];var o=0;return s=Pr(s,function(u){if(_n(u))return o=An(u.length,o),!0}),ll(o,function(u){return fn(s,sl(u))})}function Kf(s,o){if(!(s&&s.length))return[];var u=Wl(s);return o==null?u:fn(u,function(f){return mt(o,n,f)})}var Ew=Fe(function(s,o){return _n(s)?hs(s,o):[]}),Ow=Fe(function(s){return Rl(Pr(s,_n))}),Dw=Fe(function(s){var o=Ft(s);return _n(o)&&(o=n),Rl(Pr(s,_n),ve(o,2))}),xw=Fe(function(s){var o=Ft(s);return o=typeof o=="function"?o:n,Rl(Pr(s,_n),n,o)}),Rw=Fe(Wl);function Fw(s,o){return mf(s||[],o||[],ps)}function Aw(s,o){return mf(s||[],o||[],ks)}var Nw=Fe(function(s){var o=s.length,u=o>1?s[o-1]:n;return u=typeof u=="function"?(s.pop(),u):n,Kf(s,u)});function Xf(s){var o=b(s);return o.__chain__=!0,o}function Pw(s,o){return o(s),s}function Co(s,o){return o(s)}var Mw=br(function(s){var o=s.length,u=o?s[0]:0,f=this.__wrapped__,h=function(S){return hl(S,s)};return o>1||this.__actions__.length||!(f instanceof Be)||!wr(u)?this.thru(h):(f=f.slice(u,+u+(o?1:0)),f.__actions__.push({func:Co,args:[h],thisArg:n}),new Dt(f,this.__chain__).thru(function(S){return o&&!S.length&&S.push(n),S}))});function Bw(){return Xf(this)}function qw(){return new Dt(this.value(),this.__chain__)}function jw(){this.__values__===n&&(this.__values__=dm(this.value()));var s=this.__index__>=this.__values__.length,o=s?n:this.__values__[this.__index__++];return{done:s,value:o}}function Iw(){return this}function Cw(s){for(var o,u=this;u instanceof So;){var f=Vf(u);f.__index__=0,f.__values__=n,o?h.__wrapped__=f:o=f;var h=f;u=u.__wrapped__}return h.__wrapped__=s,o}function Lw(){var s=this.__wrapped__;if(s instanceof Be){var o=s;return this.__actions__.length&&(o=new Be(this)),o=o.reverse(),o.__actions__.push({func:Co,args:[Ul],thisArg:n}),new Dt(o,this.__chain__)}return this.thru(Ul)}function $w(){return ff(this.__wrapped__,this.__actions__)}var Hw=Ao(function(s,o,u){Xe.call(s,u)?++s[u]:vr(s,u,1)});function Vw(s,o,u){var f=Ee(s)?Sc:Pb;return u&&Xn(s,o,u)&&(o=n),f(s,ve(o,3))}function Uw(s,o){var u=Ee(s)?Pr:zc;return u(s,ve(o,3))}var Ww=Tf(Uf),Gw=Tf(Wf);function Yw(s,o){return $n(Lo(s,o),1)}function zw(s,o){return $n(Lo(s,o),J)}function Kw(s,o,u){return u=u===n?1:xe(u),$n(Lo(s,o),u)}function Zf(s,o){var u=Ee(s)?Et:jr;return u(s,ve(o,3))}function Qf(s,o){var u=Ee(s)?gk:Yc;return u(s,ve(o,3))}var Xw=Ao(function(s,o,u){Xe.call(s,u)?s[u].push(o):vr(s,u,[o])});function Zw(s,o,u,f){s=st(s)?s:Pa(s),u=u&&!f?xe(u):0;var h=s.length;return u<0&&(u=An(h+u,0)),Wo(s)?u<=h&&s.indexOf(o,u)>-1:!!h&&wa(s,o,u)>-1}var Qw=Fe(function(s,o,u){var f=-1,h=typeof o=="function",S=st(s)?z(s.length):[];return jr(s,function(P){S[++f]=h?mt(o,P,u):ys(P,o,u)}),S}),Jw=Ao(function(s,o,u){vr(s,u,o)});function Lo(s,o){var u=Ee(s)?fn:ef;return u(s,ve(o,3))}function e_(s,o,u,f){return s==null?[]:(Ee(o)||(o=o==null?[]:[o]),u=f?n:u,Ee(u)||(u=u==null?[]:[u]),af(s,o,u))}var n_=Ao(function(s,o,u){s[u?0:1].push(o)},function(){return[[],[]]});function t_(s,o,u){var f=Ee(s)?rl:xc,h=arguments.length<3;return f(s,ve(o,4),u,h,jr)}function r_(s,o,u){var f=Ee(s)?pk:xc,h=arguments.length<3;return f(s,ve(o,4),u,h,Yc)}function a_(s,o){var u=Ee(s)?Pr:zc;return u(s,Vo(ve(o,3)))}function s_(s){var o=Ee(s)?Vc:Zb;return o(s)}function o_(s,o,u){(u?Xn(s,o,u):o===n)?o=1:o=xe(o);var f=Ee(s)?xb:Qb;return f(s,o)}function i_(s){var o=Ee(s)?Rb:e0;return o(s)}function l_(s){if(s==null)return 0;if(st(s))return Wo(s)?Ta(s):s.length;var o=Un(s);return o==rn||o==$?s.size:_l(s).length}function u_(s,o,u){var f=Ee(s)?al:n0;return u&&Xn(s,o,u)&&(o=n),f(s,ve(o,3))}var d_=Fe(function(s,o){if(s==null)return[];var u=o.length;return u>1&&Xn(s,o[0],o[1])?o=[]:u>2&&Xn(o[0],o[1],o[2])&&(o=[o[0]]),af(s,$n(o,1),[])}),$o=Uk||function(){return Ln.Date.now()};function c_(s,o){if(typeof o!="function")throw new Ot(l);return s=xe(s),function(){if(--s<1)return o.apply(this,arguments)}}function Jf(s,o,u){return o=u?n:o,o=s&&o==null?s.length:o,kr(s,F,n,n,n,n,o)}function em(s,o){var u;if(typeof o!="function")throw new Ot(l);return s=xe(s),function(){return--s>0&&(u=o.apply(this,arguments)),s<=1&&(o=n),u}}var Gl=Fe(function(s,o,u){var f=k;if(u.length){var h=Br(u,Aa(Gl));f|=x}return kr(s,f,o,u,h)}),nm=Fe(function(s,o,u){var f=k|R;if(u.length){var h=Br(u,Aa(nm));f|=x}return kr(o,f,s,u,h)});function tm(s,o,u){o=u?n:o;var f=kr(s,T,n,n,n,n,n,o);return f.placeholder=tm.placeholder,f}function rm(s,o,u){o=u?n:o;var f=kr(s,B,n,n,n,n,n,o);return f.placeholder=rm.placeholder,f}function am(s,o,u){var f,h,S,P,q,C,ee=0,ne=!1,re=!1,de=!0;if(typeof s!="function")throw new Ot(l);o=At(o)||0,pn(u)&&(ne=!!u.leading,re="maxWait"in u,S=re?An(At(u.maxWait)||0,o):S,de="trailing"in u?!!u.trailing:de);function pe(Tn){var $t=f,Sr=h;return f=h=n,ee=Tn,P=s.apply(Sr,$t),P}function be(Tn){return ee=Tn,q=_s(Pe,o),ne?pe(Tn):P}function Re(Tn){var $t=Tn-C,Sr=Tn-ee,Tm=o-$t;return re?Vn(Tm,S-Sr):Tm}function we(Tn){var $t=Tn-C,Sr=Tn-ee;return C===n||$t>=o||$t<0||re&&Sr>=S}function Pe(){var Tn=$o();if(we(Tn))return je(Tn);q=_s(Pe,Re(Tn))}function je(Tn){return q=n,de&&f?pe(Tn):(f=h=n,P)}function yt(){q!==n&&gf(q),ee=0,f=C=h=q=n}function Zn(){return q===n?P:je($o())}function vt(){var Tn=$o(),$t=we(Tn);if(f=arguments,h=this,C=Tn,$t){if(q===n)return be(C);if(re)return gf(q),q=_s(Pe,o),pe(C)}return q===n&&(q=_s(Pe,o)),P}return vt.cancel=yt,vt.flush=Zn,vt}var f_=Fe(function(s,o){return Gc(s,1,o)}),m_=Fe(function(s,o,u){return Gc(s,At(o)||0,u)});function g_(s){return kr(s,j)}function Ho(s,o){if(typeof s!="function"||o!=null&&typeof o!="function")throw new Ot(l);var u=function(){var f=arguments,h=o?o.apply(this,f):f[0],S=u.cache;if(S.has(h))return S.get(h);var P=s.apply(this,f);return u.cache=S.set(h,P)||S,P};return u.cache=new(Ho.Cache||yr),u}Ho.Cache=yr;function Vo(s){if(typeof s!="function")throw new Ot(l);return function(){var o=arguments;switch(o.length){case 0:return!s.call(this);case 1:return!s.call(this,o[0]);case 2:return!s.call(this,o[0],o[1]);case 3:return!s.call(this,o[0],o[1],o[2])}return!s.apply(this,o)}}function p_(s){return em(2,s)}var h_=t0(function(s,o){o=o.length==1&&Ee(o[0])?fn(o[0],gt(ve())):fn($n(o,1),gt(ve()));var u=o.length;return Fe(function(f){for(var h=-1,S=Vn(f.length,u);++h<S;)f[h]=o[h].call(this,f[h]);return mt(s,this,f)})}),Yl=Fe(function(s,o){var u=Br(o,Aa(Yl));return kr(s,x,n,o,u)}),sm=Fe(function(s,o){var u=Br(o,Aa(sm));return kr(s,N,n,o,u)}),y_=br(function(s,o){return kr(s,A,n,n,n,o)});function v_(s,o){if(typeof s!="function")throw new Ot(l);return o=o===n?o:xe(o),Fe(s,o)}function k_(s,o){if(typeof s!="function")throw new Ot(l);return o=o==null?0:An(xe(o),0),Fe(function(u){var f=u[o],h=Lr(u,0,o);return f&&Mr(h,f),mt(s,this,h)})}function b_(s,o,u){var f=!0,h=!0;if(typeof s!="function")throw new Ot(l);return pn(u)&&(f="leading"in u?!!u.leading:f,h="trailing"in u?!!u.trailing:h),am(s,o,{leading:f,maxWait:o,trailing:h})}function w_(s){return Jf(s,1)}function __(s,o){return Yl(Al(o),s)}function T_(){if(!arguments.length)return[];var s=arguments[0];return Ee(s)?s:[s]}function S_(s){return xt(s,v)}function E_(s,o){return o=typeof o=="function"?o:n,xt(s,v,o)}function O_(s){return xt(s,p|v)}function D_(s,o){return o=typeof o=="function"?o:n,xt(s,p|v,o)}function x_(s,o){return o==null||Wc(s,o,Mn(o))}function Lt(s,o){return s===o||s!==s&&o!==o}var R_=Bo(kl),F_=Bo(function(s,o){return s>=o}),ra=Zc(function(){return arguments}())?Zc:function(s){return bn(s)&&Xe.call(s,"callee")&&!jc.call(s,"callee")},Ee=z.isArray,A_=vc?gt(vc):Cb;function st(s){return s!=null&&Uo(s.length)&&!_r(s)}function _n(s){return bn(s)&&st(s)}function N_(s){return s===!0||s===!1||bn(s)&&Kn(s)==Ge}var $r=Gk||au,P_=kc?gt(kc):Lb;function M_(s){return bn(s)&&s.nodeType===1&&!Ts(s)}function B_(s){if(s==null)return!0;if(st(s)&&(Ee(s)||typeof s=="string"||typeof s.splice=="function"||$r(s)||Na(s)||ra(s)))return!s.length;var o=Un(s);if(o==rn||o==$)return!s.size;if(ws(s))return!_l(s).length;for(var u in s)if(Xe.call(s,u))return!1;return!0}function q_(s,o){return vs(s,o)}function j_(s,o,u){u=typeof u=="function"?u:n;var f=u?u(s,o):n;return f===n?vs(s,o,n,u):!!f}function zl(s){if(!bn(s))return!1;var o=Kn(s);return o==ln||o==en||typeof s.message=="string"&&typeof s.name=="string"&&!Ts(s)}function I_(s){return typeof s=="number"&&Cc(s)}function _r(s){if(!pn(s))return!1;var o=Kn(s);return o==gn||o==Rn||o==Le||o==rt}function om(s){return typeof s=="number"&&s==xe(s)}function Uo(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=K}function pn(s){var o=typeof s;return s!=null&&(o=="object"||o=="function")}function bn(s){return s!=null&&typeof s=="object"}var im=bc?gt(bc):Hb;function C_(s,o){return s===o||wl(s,o,Il(o))}function L_(s,o,u){return u=typeof u=="function"?u:n,wl(s,o,Il(o),u)}function $_(s){return lm(s)&&s!=+s}function H_(s){if(E0(s))throw new Se(i);return Qc(s)}function V_(s){return s===null}function U_(s){return s==null}function lm(s){return typeof s=="number"||bn(s)&&Kn(s)==Dn}function Ts(s){if(!bn(s)||Kn(s)!=kn)return!1;var o=yo(s);if(o===null)return!0;var u=Xe.call(o,"constructor")&&o.constructor;return typeof u=="function"&&u instanceof u&&mo.call(u)==Lk}var Kl=wc?gt(wc):Vb;function W_(s){return om(s)&&s>=-9007199254740991&&s<=K}var um=_c?gt(_c):Ub;function Wo(s){return typeof s=="string"||!Ee(s)&&bn(s)&&Kn(s)==X}function ht(s){return typeof s=="symbol"||bn(s)&&Kn(s)==ue}var Na=Tc?gt(Tc):Wb;function G_(s){return s===n}function Y_(s){return bn(s)&&Un(s)==ae}function z_(s){return bn(s)&&Kn(s)==ye}var K_=Bo(Tl),X_=Bo(function(s,o){return s<=o});function dm(s){if(!s)return[];if(st(s))return Wo(s)?It(s):at(s);if(ds&&s[ds])return xk(s[ds]());var o=Un(s),u=o==rn?dl:o==$?uo:Pa;return u(s)}function Tr(s){if(!s)return s===0?s:0;if(s=At(s),s===J||s===-1/0){var o=s<0?-1:1;return o*te}return s===s?s:0}function xe(s){var o=Tr(s),u=o%1;return o===o?u?o-u:o:0}function cm(s){return s?Jr(xe(s),0,le):0}function At(s){if(typeof s=="number")return s;if(ht(s))return se;if(pn(s)){var o=typeof s.valueOf=="function"?s.valueOf():s;s=pn(o)?o+"":o}if(typeof s!="string")return s===0?s:+s;s=Rc(s);var u=Av.test(s);return u||Pv.test(s)?ck(s.slice(2),u?2:8):Fv.test(s)?se:+s}function fm(s){return Jt(s,ot(s))}function Z_(s){return s?Jr(xe(s),-9007199254740991,K):s===0?s:0}function Ye(s){return s==null?"":pt(s)}var Q_=Ra(function(s,o){if(ws(o)||st(o)){Jt(o,Mn(o),s);return}for(var u in o)Xe.call(o,u)&&ps(s,u,o[u])}),mm=Ra(function(s,o){Jt(o,ot(o),s)}),Go=Ra(function(s,o,u,f){Jt(o,ot(o),s,f)}),J_=Ra(function(s,o,u,f){Jt(o,Mn(o),s,f)}),e1=br(hl);function n1(s,o){var u=xa(s);return o==null?u:Uc(u,o)}var t1=Fe(function(s,o){s=tn(s);var u=-1,f=o.length,h=f>2?o[2]:n;for(h&&Xn(o[0],o[1],h)&&(f=1);++u<f;)for(var S=o[u],P=ot(S),q=-1,C=P.length;++q<C;){var ee=P[q],ne=s[ee];(ne===n||Lt(ne,Ea[ee])&&!Xe.call(s,ee))&&(s[ee]=S[ee])}return s}),r1=Fe(function(s){return s.push(n,Ff),mt(gm,n,s)});function a1(s,o){return Ec(s,ve(o,3),Qt)}function s1(s,o){return Ec(s,ve(o,3),vl)}function o1(s,o){return s==null?s:yl(s,ve(o,3),ot)}function i1(s,o){return s==null?s:Kc(s,ve(o,3),ot)}function l1(s,o){return s&&Qt(s,ve(o,3))}function u1(s,o){return s&&vl(s,ve(o,3))}function d1(s){return s==null?[]:Do(s,Mn(s))}function c1(s){return s==null?[]:Do(s,ot(s))}function Xl(s,o,u){var f=s==null?n:ea(s,o);return f===n?u:f}function f1(s,o){return s!=null&&Pf(s,o,Bb)}function Zl(s,o){return s!=null&&Pf(s,o,qb)}var m1=Ef(function(s,o,u){o!=null&&typeof o.toString!="function"&&(o=go.call(o)),s[o]=u},Jl(it)),g1=Ef(function(s,o,u){o!=null&&typeof o.toString!="function"&&(o=go.call(o)),Xe.call(s,o)?s[o].push(u):s[o]=[u]},ve),p1=Fe(ys);function Mn(s){return st(s)?Hc(s):_l(s)}function ot(s){return st(s)?Hc(s,!0):Gb(s)}function h1(s,o){var u={};return o=ve(o,3),Qt(s,function(f,h,S){vr(u,o(f,h,S),f)}),u}function y1(s,o){var u={};return o=ve(o,3),Qt(s,function(f,h,S){vr(u,h,o(f,h,S))}),u}var v1=Ra(function(s,o,u){xo(s,o,u)}),gm=Ra(function(s,o,u,f){xo(s,o,u,f)}),k1=br(function(s,o){var u={};if(s==null)return u;var f=!1;o=fn(o,function(S){return S=Cr(S,s),f||(f=S.length>1),S}),Jt(s,ql(s),u),f&&(u=xt(u,p|y|v,m0));for(var h=o.length;h--;)xl(u,o[h]);return u});function b1(s,o){return pm(s,Vo(ve(o)))}var w1=br(function(s,o){return s==null?{}:zb(s,o)});function pm(s,o){if(s==null)return{};var u=fn(ql(s),function(f){return[f]});return o=ve(o),sf(s,u,function(f,h){return o(f,h[0])})}function _1(s,o,u){o=Cr(o,s);var f=-1,h=o.length;for(h||(h=1,s=n);++f<h;){var S=s==null?n:s[er(o[f])];S===n&&(f=h,S=u),s=_r(S)?S.call(s):S}return s}function T1(s,o,u){return s==null?s:ks(s,o,u)}function S1(s,o,u,f){return f=typeof f=="function"?f:n,s==null?s:ks(s,o,u,f)}var hm=xf(Mn),ym=xf(ot);function E1(s,o,u){var f=Ee(s),h=f||$r(s)||Na(s);if(o=ve(o,4),u==null){var S=s&&s.constructor;h?u=f?new S:[]:pn(s)?u=_r(S)?xa(yo(s)):{}:u={}}return(h?Et:Qt)(s,function(P,q,C){return o(u,P,q,C)}),u}function O1(s,o){return s==null?!0:xl(s,o)}function D1(s,o,u){return s==null?s:cf(s,o,Al(u))}function x1(s,o,u,f){return f=typeof f=="function"?f:n,s==null?s:cf(s,o,Al(u),f)}function Pa(s){return s==null?[]:ul(s,Mn(s))}function R1(s){return s==null?[]:ul(s,ot(s))}function F1(s,o,u){return u===n&&(u=o,o=n),u!==n&&(u=At(u),u=u===u?u:0),o!==n&&(o=At(o),o=o===o?o:0),Jr(At(s),o,u)}function A1(s,o,u){return o=Tr(o),u===n?(u=o,o=0):u=Tr(u),s=At(s),jb(s,o,u)}function N1(s,o,u){if(u&&typeof u!="boolean"&&Xn(s,o,u)&&(o=u=n),u===n&&(typeof o=="boolean"?(u=o,o=n):typeof s=="boolean"&&(u=s,s=n)),s===n&&o===n?(s=0,o=1):(s=Tr(s),o===n?(o=s,s=0):o=Tr(o)),s>o){var f=s;s=o,o=f}if(u||s%1||o%1){var h=Lc();return Vn(s+h*(o-s+dk("1e-"+((h+"").length-1))),o)}return El(s,o)}var P1=Fa(function(s,o,u){return o=o.toLowerCase(),s+(u?vm(o):o)});function vm(s){return Ql(Ye(s).toLowerCase())}function km(s){return s=Ye(s),s&&s.replace(Bv,Tk).replace(ek,"")}function M1(s,o,u){s=Ye(s),o=pt(o);var f=s.length;u=u===n?f:Jr(xe(u),0,f);var h=u;return u-=o.length,u>=0&&s.slice(u,h)==o}function B1(s){return s=Ye(s),s&&Gi.test(s)?s.replace(ro,Sk):s}function q1(s){return s=Ye(s),s&&wv.test(s)?s.replace(Yi,"\\$&"):s}var j1=Fa(function(s,o,u){return s+(u?"-":"")+o.toLowerCase()}),I1=Fa(function(s,o,u){return s+(u?" ":"")+o.toLowerCase()}),C1=_f("toLowerCase");function L1(s,o,u){s=Ye(s),o=xe(o);var f=o?Ta(s):0;if(!o||f>=o)return s;var h=(o-f)/2;return Mo(wo(h),u)+s+Mo(bo(h),u)}function $1(s,o,u){s=Ye(s),o=xe(o);var f=o?Ta(s):0;return o&&f<o?s+Mo(o-f,u):s}function H1(s,o,u){s=Ye(s),o=xe(o);var f=o?Ta(s):0;return o&&f<o?Mo(o-f,u)+s:s}function V1(s,o,u){return u||o==null?o=0:o&&(o=+o),Xk(Ye(s).replace(zi,""),o||0)}function U1(s,o,u){return(u?Xn(s,o,u):o===n)?o=1:o=xe(o),Ol(Ye(s),o)}function W1(){var s=arguments,o=Ye(s[0]);return s.length<3?o:o.replace(s[1],s[2])}var G1=Fa(function(s,o,u){return s+(u?"_":"")+o.toLowerCase()});function Y1(s,o,u){return u&&typeof u!="number"&&Xn(s,o,u)&&(o=u=n),u=u===n?le:u>>>0,u?(s=Ye(s),s&&(typeof o=="string"||o!=null&&!Kl(o))&&(o=pt(o),!o&&_a(s))?Lr(It(s),0,u):s.split(o,u)):[]}var z1=Fa(function(s,o,u){return s+(u?" ":"")+Ql(o)});function K1(s,o,u){return s=Ye(s),u=u==null?0:Jr(xe(u),0,s.length),o=pt(o),s.slice(u,u+o.length)==o}function X1(s,o,u){var f=b.templateSettings;u&&Xn(s,o,u)&&(o=n),s=Ye(s),o=Go({},o,f,Rf);var h=Go({},o.imports,f.imports,Rf),S=Mn(h),P=ul(h,S),q,C,ee=0,ne=o.interpolate||ao,re="__p += '",de=cl((o.escape||ao).source+"|"+ne.source+"|"+(ne===Xd?Rv:ao).source+"|"+(o.evaluate||ao).source+"|$","g"),pe="//# sourceURL="+(Xe.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++sk+"]")+`
`;s.replace(de,function(we,Pe,je,yt,Zn,vt){return je||(je=yt),re+=s.slice(ee,vt).replace(qv,Ek),Pe&&(q=!0,re+=`' +
__e(`+Pe+`) +
'`),Zn&&(C=!0,re+=`';
`+Zn+`;
__p += '`),je&&(re+=`' +
((__t = (`+je+`)) == null ? '' : __t) +
'`),ee=vt+we.length,we}),re+=`';
`;var be=Xe.call(o,"variable")&&o.variable;if(!be)re=`with (obj) {
`+re+`
}
`;else if(Dv.test(be))throw new Se(d);re=(C?re.replace(pr,""):re).replace(Pn,"$1").replace(Tt,"$1;"),re="function("+(be||"obj")+`) {
`+(be?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(q?", __e = _.escape":"")+(C?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+re+`return __p
}`;var Re=wm(function(){return Ue(S,pe+"return "+re).apply(n,P)});if(Re.source=re,zl(Re))throw Re;return Re}function Z1(s){return Ye(s).toLowerCase()}function Q1(s){return Ye(s).toUpperCase()}function J1(s,o,u){if(s=Ye(s),s&&(u||o===n))return Rc(s);if(!s||!(o=pt(o)))return s;var f=It(s),h=It(o),S=Fc(f,h),P=Ac(f,h)+1;return Lr(f,S,P).join("")}function eT(s,o,u){if(s=Ye(s),s&&(u||o===n))return s.slice(0,Pc(s)+1);if(!s||!(o=pt(o)))return s;var f=It(s),h=Ac(f,It(o))+1;return Lr(f,0,h).join("")}function nT(s,o,u){if(s=Ye(s),s&&(u||o===n))return s.replace(zi,"");if(!s||!(o=pt(o)))return s;var f=It(s),h=Fc(f,It(o));return Lr(f,h).join("")}function tT(s,o){var u=Y,f=V;if(pn(o)){var h="separator"in o?o.separator:h;u="length"in o?xe(o.length):u,f="omission"in o?pt(o.omission):f}s=Ye(s);var S=s.length;if(_a(s)){var P=It(s);S=P.length}if(u>=S)return s;var q=u-Ta(f);if(q<1)return f;var C=P?Lr(P,0,q).join(""):s.slice(0,q);if(h===n)return C+f;if(P&&(q+=C.length-q),Kl(h)){if(s.slice(q).search(h)){var ee,ne=C;for(h.global||(h=cl(h.source,Ye(Zd.exec(h))+"g")),h.lastIndex=0;ee=h.exec(ne);)var re=ee.index;C=C.slice(0,re===n?q:re)}}else if(s.indexOf(pt(h),q)!=q){var de=C.lastIndexOf(h);de>-1&&(C=C.slice(0,de))}return C+f}function rT(s){return s=Ye(s),s&&Wi.test(s)?s.replace(He,Nk):s}var aT=Fa(function(s,o,u){return s+(u?" ":"")+o.toUpperCase()}),Ql=_f("toUpperCase");function bm(s,o,u){return s=Ye(s),o=u?n:o,o===n?Dk(s)?Bk(s):vk(s):s.match(o)||[]}var wm=Fe(function(s,o){try{return mt(s,n,o)}catch(u){return zl(u)?u:new Se(u)}}),sT=br(function(s,o){return Et(o,function(u){u=er(u),vr(s,u,Gl(s[u],s))}),s});function oT(s){var o=s==null?0:s.length,u=ve();return s=o?fn(s,function(f){if(typeof f[1]!="function")throw new Ot(l);return[u(f[0]),f[1]]}):[],Fe(function(f){for(var h=-1;++h<o;){var S=s[h];if(mt(S[0],this,f))return mt(S[1],this,f)}})}function iT(s){return Nb(xt(s,p))}function Jl(s){return function(){return s}}function lT(s,o){return s==null||s!==s?o:s}var uT=Sf(),dT=Sf(!0);function it(s){return s}function eu(s){return Jc(typeof s=="function"?s:xt(s,p))}function cT(s){return nf(xt(s,p))}function fT(s,o){return tf(s,xt(o,p))}var mT=Fe(function(s,o){return function(u){return ys(u,s,o)}}),gT=Fe(function(s,o){return function(u){return ys(s,u,o)}});function nu(s,o,u){var f=Mn(o),h=Do(o,f);u==null&&!(pn(o)&&(h.length||!f.length))&&(u=o,o=s,s=this,h=Do(o,Mn(o)));var S=!(pn(u)&&"chain"in u)||!!u.chain,P=_r(s);return Et(h,function(q){var C=o[q];s[q]=C,P&&(s.prototype[q]=function(){var ee=this.__chain__;if(S||ee){var ne=s(this.__wrapped__),re=ne.__actions__=at(this.__actions__);return re.push({func:C,args:arguments,thisArg:s}),ne.__chain__=ee,ne}return C.apply(s,Mr([this.value()],arguments))})}),s}function pT(){return Ln._===this&&(Ln._=$k),this}function tu(){}function hT(s){return s=xe(s),Fe(function(o){return rf(o,s)})}var yT=Pl(fn),vT=Pl(Sc),kT=Pl(al);function _m(s){return Ll(s)?sl(er(s)):Kb(s)}function bT(s){return function(o){return s==null?n:ea(s,o)}}var wT=Of(),_T=Of(!0);function ru(){return[]}function au(){return!1}function TT(){return{}}function ST(){return""}function ET(){return!0}function OT(s,o){if(s=xe(s),s<1||s>K)return[];var u=le,f=Vn(s,le);o=ve(o),s-=le;for(var h=ll(f,o);++u<s;)o(u);return h}function DT(s){return Ee(s)?fn(s,er):ht(s)?[s]:at(Hf(Ye(s)))}function xT(s){var o=++Ck;return Ye(s)+o}var RT=Po(function(s,o){return s+o},0),FT=Ml("ceil"),AT=Po(function(s,o){return s/o},1),NT=Ml("floor");function PT(s){return s&&s.length?Oo(s,it,kl):n}function MT(s,o){return s&&s.length?Oo(s,ve(o,2),kl):n}function BT(s){return Dc(s,it)}function qT(s,o){return Dc(s,ve(o,2))}function jT(s){return s&&s.length?Oo(s,it,Tl):n}function IT(s,o){return s&&s.length?Oo(s,ve(o,2),Tl):n}var CT=Po(function(s,o){return s*o},1),LT=Ml("round"),$T=Po(function(s,o){return s-o},0);function HT(s){return s&&s.length?il(s,it):0}function VT(s,o){return s&&s.length?il(s,ve(o,2)):0}return b.after=c_,b.ary=Jf,b.assign=Q_,b.assignIn=mm,b.assignInWith=Go,b.assignWith=J_,b.at=e1,b.before=em,b.bind=Gl,b.bindAll=sT,b.bindKey=nm,b.castArray=T_,b.chain=Xf,b.chunk=N0,b.compact=P0,b.concat=M0,b.cond=oT,b.conforms=iT,b.constant=Jl,b.countBy=Hw,b.create=n1,b.curry=tm,b.curryRight=rm,b.debounce=am,b.defaults=t1,b.defaultsDeep=r1,b.defer=f_,b.delay=m_,b.difference=B0,b.differenceBy=q0,b.differenceWith=j0,b.drop=I0,b.dropRight=C0,b.dropRightWhile=L0,b.dropWhile=$0,b.fill=H0,b.filter=Uw,b.flatMap=Yw,b.flatMapDeep=zw,b.flatMapDepth=Kw,b.flatten=Gf,b.flattenDeep=V0,b.flattenDepth=U0,b.flip=g_,b.flow=uT,b.flowRight=dT,b.fromPairs=W0,b.functions=d1,b.functionsIn=c1,b.groupBy=Xw,b.initial=Y0,b.intersection=z0,b.intersectionBy=K0,b.intersectionWith=X0,b.invert=m1,b.invertBy=g1,b.invokeMap=Qw,b.iteratee=eu,b.keyBy=Jw,b.keys=Mn,b.keysIn=ot,b.map=Lo,b.mapKeys=h1,b.mapValues=y1,b.matches=cT,b.matchesProperty=fT,b.memoize=Ho,b.merge=v1,b.mergeWith=gm,b.method=mT,b.methodOf=gT,b.mixin=nu,b.negate=Vo,b.nthArg=hT,b.omit=k1,b.omitBy=b1,b.once=p_,b.orderBy=e_,b.over=yT,b.overArgs=h_,b.overEvery=vT,b.overSome=kT,b.partial=Yl,b.partialRight=sm,b.partition=n_,b.pick=w1,b.pickBy=pm,b.property=_m,b.propertyOf=bT,b.pull=ew,b.pullAll=zf,b.pullAllBy=nw,b.pullAllWith=tw,b.pullAt=rw,b.range=wT,b.rangeRight=_T,b.rearg=y_,b.reject=a_,b.remove=aw,b.rest=v_,b.reverse=Ul,b.sampleSize=o_,b.set=T1,b.setWith=S1,b.shuffle=i_,b.slice=sw,b.sortBy=d_,b.sortedUniq=fw,b.sortedUniqBy=mw,b.split=Y1,b.spread=k_,b.tail=gw,b.take=pw,b.takeRight=hw,b.takeRightWhile=yw,b.takeWhile=vw,b.tap=Pw,b.throttle=b_,b.thru=Co,b.toArray=dm,b.toPairs=hm,b.toPairsIn=ym,b.toPath=DT,b.toPlainObject=fm,b.transform=E1,b.unary=w_,b.union=kw,b.unionBy=bw,b.unionWith=ww,b.uniq=_w,b.uniqBy=Tw,b.uniqWith=Sw,b.unset=O1,b.unzip=Wl,b.unzipWith=Kf,b.update=D1,b.updateWith=x1,b.values=Pa,b.valuesIn=R1,b.without=Ew,b.words=bm,b.wrap=__,b.xor=Ow,b.xorBy=Dw,b.xorWith=xw,b.zip=Rw,b.zipObject=Fw,b.zipObjectDeep=Aw,b.zipWith=Nw,b.entries=hm,b.entriesIn=ym,b.extend=mm,b.extendWith=Go,nu(b,b),b.add=RT,b.attempt=wm,b.camelCase=P1,b.capitalize=vm,b.ceil=FT,b.clamp=F1,b.clone=S_,b.cloneDeep=O_,b.cloneDeepWith=D_,b.cloneWith=E_,b.conformsTo=x_,b.deburr=km,b.defaultTo=lT,b.divide=AT,b.endsWith=M1,b.eq=Lt,b.escape=B1,b.escapeRegExp=q1,b.every=Vw,b.find=Ww,b.findIndex=Uf,b.findKey=a1,b.findLast=Gw,b.findLastIndex=Wf,b.findLastKey=s1,b.floor=NT,b.forEach=Zf,b.forEachRight=Qf,b.forIn=o1,b.forInRight=i1,b.forOwn=l1,b.forOwnRight=u1,b.get=Xl,b.gt=R_,b.gte=F_,b.has=f1,b.hasIn=Zl,b.head=Yf,b.identity=it,b.includes=Zw,b.indexOf=G0,b.inRange=A1,b.invoke=p1,b.isArguments=ra,b.isArray=Ee,b.isArrayBuffer=A_,b.isArrayLike=st,b.isArrayLikeObject=_n,b.isBoolean=N_,b.isBuffer=$r,b.isDate=P_,b.isElement=M_,b.isEmpty=B_,b.isEqual=q_,b.isEqualWith=j_,b.isError=zl,b.isFinite=I_,b.isFunction=_r,b.isInteger=om,b.isLength=Uo,b.isMap=im,b.isMatch=C_,b.isMatchWith=L_,b.isNaN=$_,b.isNative=H_,b.isNil=U_,b.isNull=V_,b.isNumber=lm,b.isObject=pn,b.isObjectLike=bn,b.isPlainObject=Ts,b.isRegExp=Kl,b.isSafeInteger=W_,b.isSet=um,b.isString=Wo,b.isSymbol=ht,b.isTypedArray=Na,b.isUndefined=G_,b.isWeakMap=Y_,b.isWeakSet=z_,b.join=Z0,b.kebabCase=j1,b.last=Ft,b.lastIndexOf=Q0,b.lowerCase=I1,b.lowerFirst=C1,b.lt=K_,b.lte=X_,b.max=PT,b.maxBy=MT,b.mean=BT,b.meanBy=qT,b.min=jT,b.minBy=IT,b.stubArray=ru,b.stubFalse=au,b.stubObject=TT,b.stubString=ST,b.stubTrue=ET,b.multiply=CT,b.nth=J0,b.noConflict=pT,b.noop=tu,b.now=$o,b.pad=L1,b.padEnd=$1,b.padStart=H1,b.parseInt=V1,b.random=N1,b.reduce=t_,b.reduceRight=r_,b.repeat=U1,b.replace=W1,b.result=_1,b.round=LT,b.runInContext=I,b.sample=s_,b.size=l_,b.snakeCase=G1,b.some=u_,b.sortedIndex=ow,b.sortedIndexBy=iw,b.sortedIndexOf=lw,b.sortedLastIndex=uw,b.sortedLastIndexBy=dw,b.sortedLastIndexOf=cw,b.startCase=z1,b.startsWith=K1,b.subtract=$T,b.sum=HT,b.sumBy=VT,b.template=X1,b.times=OT,b.toFinite=Tr,b.toInteger=xe,b.toLength=cm,b.toLower=Z1,b.toNumber=At,b.toSafeInteger=Z_,b.toString=Ye,b.toUpper=Q1,b.trim=J1,b.trimEnd=eT,b.trimStart=nT,b.truncate=tT,b.unescape=rT,b.uniqueId=xT,b.upperCase=aT,b.upperFirst=Ql,b.each=Zf,b.eachRight=Qf,b.first=Yf,nu(b,function(){var s={};return Qt(b,function(o,u){Xe.call(b.prototype,u)||(s[u]=o)}),s}(),{chain:!1}),b.VERSION=t,Et(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){b[s].placeholder=b}),Et(["drop","take"],function(s,o){Be.prototype[s]=function(u){u=u===n?1:An(xe(u),0);var f=this.__filtered__&&!o?new Be(this):this.clone();return f.__filtered__?f.__takeCount__=Vn(u,f.__takeCount__):f.__views__.push({size:Vn(u,le),type:s+(f.__dir__<0?"Right":"")}),f},Be.prototype[s+"Right"]=function(u){return this.reverse()[s](u).reverse()}}),Et(["filter","map","takeWhile"],function(s,o){var u=o+1,f=u==U||u==H;Be.prototype[s]=function(h){var S=this.clone();return S.__iteratees__.push({iteratee:ve(h,3),type:u}),S.__filtered__=S.__filtered__||f,S}}),Et(["head","last"],function(s,o){var u="take"+(o?"Right":"");Be.prototype[s]=function(){return this[u](1).value()[0]}}),Et(["initial","tail"],function(s,o){var u="drop"+(o?"":"Right");Be.prototype[s]=function(){return this.__filtered__?new Be(this):this[u](1)}}),Be.prototype.compact=function(){return this.filter(it)},Be.prototype.find=function(s){return this.filter(s).head()},Be.prototype.findLast=function(s){return this.reverse().find(s)},Be.prototype.invokeMap=Fe(function(s,o){return typeof s=="function"?new Be(this):this.map(function(u){return ys(u,s,o)})}),Be.prototype.reject=function(s){return this.filter(Vo(ve(s)))},Be.prototype.slice=function(s,o){s=xe(s);var u=this;return u.__filtered__&&(s>0||o<0)?new Be(u):(s<0?u=u.takeRight(-s):s&&(u=u.drop(s)),o!==n&&(o=xe(o),u=o<0?u.dropRight(-o):u.take(o-s)),u)},Be.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},Be.prototype.toArray=function(){return this.take(le)},Qt(Be.prototype,function(s,o){var u=/^(?:filter|find|map|reject)|While$/.test(o),f=/^(?:head|last)$/.test(o),h=b[f?"take"+(o=="last"?"Right":""):o],S=f||/^find/.test(o);h&&(b.prototype[o]=function(){var P=this.__wrapped__,q=f?[1]:arguments,C=P instanceof Be,ee=q[0],ne=C||Ee(P),re=function(Pe){var je=h.apply(b,Mr([Pe],q));return f&&de?je[0]:je};ne&&u&&typeof ee=="function"&&ee.length!=1&&(C=ne=!1);var de=this.__chain__,pe=!!this.__actions__.length,be=S&&!de,Re=C&&!pe;if(!S&&ne){P=Re?P:new Be(this);var we=s.apply(P,q);return we.__actions__.push({func:Co,args:[re],thisArg:n}),new Dt(we,de)}return be&&Re?s.apply(this,q):(we=this.thru(re),be?f?we.value()[0]:we.value():we)})}),Et(["pop","push","shift","sort","splice","unshift"],function(s){var o=co[s],u=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",f=/^(?:pop|shift)$/.test(s);b.prototype[s]=function(){var h=arguments;if(f&&!this.__chain__){var S=this.value();return o.apply(Ee(S)?S:[],h)}return this[u](function(P){return o.apply(Ee(P)?P:[],h)})}}),Qt(Be.prototype,function(s,o){var u=b[o];if(u){var f=u.name+"";Xe.call(Da,f)||(Da[f]=[]),Da[f].push({name:o,func:u})}}),Da[No(n,R).name]=[{name:"wrapper",func:n}],Be.prototype.clone=rb,Be.prototype.reverse=ab,Be.prototype.value=sb,b.prototype.at=Mw,b.prototype.chain=Bw,b.prototype.commit=qw,b.prototype.next=jw,b.prototype.plant=Cw,b.prototype.reverse=Lw,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=$w,b.prototype.first=b.prototype.head,ds&&(b.prototype[ds]=Iw),b},Sa=qk();Kr?((Kr.exports=Sa)._=Sa,el._=Sa):Ln._=Sa}).call(EB)}(Ms,Ms.exports)),Ms.exports}OB();_t(Zs);const Cy=O.forwardRef((e,r)=>Q.jsx(Yt,{gap:"2",style:{display:"flex"},...e,ref:r}));Cy.displayName="FaktaGruppe";Cy.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Su={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Lg;function DB(){return Lg||(Lg=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var i="",l=0;l<arguments.length;l++){var d=arguments[l];d&&(i=a(i,t.call(this,d)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var d in i)r.call(i,d)&&i[d]&&(l=a(l,this&&this[d]||d));return l}function a(i,l){return l?i?i+" "+l:i+l:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Su)),Su.exports}var xB=DB();const RB=Ap(xB),FB="_boks_c3bfh_1",AB="_harBorderLeft_c3bfh_8",NB="_harBorderTop_c3bfh_12",PB={boks:FB,harBorderLeft:AB,harBorderTop:NB};RB.bind(PB);var Eu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var $g;function MB(){return $g||($g=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var i="",l=0;l<arguments.length;l++){var d=arguments[l];d&&(i=a(i,t(d)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var d in i)r.call(i,d)&&i[d]&&(l=a(l,d));return l}function a(i,l){return l?i?i+" "+l:i+l:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Eu)),Eu.exports}MB();var BB=Object.defineProperty,qB=(e,r,n)=>r in e?BB(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Hg=(e,r,n)=>qB(e,typeof r!="symbol"?r+"":r,n);function Ly(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vg={exports:{}},Rs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function jB(){if(Ug)return Rs;Ug=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var l=null;if(i!==void 0&&(l=""+i),a.key!==void 0&&(l=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:i}}return Rs.Fragment=r,Rs.jsx=n,Rs.jsxs=n,Rs}var Wg;function IB(){return Wg||(Wg=1,Vg.exports=jB()),Vg.exports}var Or=IB();const CB="_autocompleteSuggestion__substring_mf7v0_1",LB="_autocompleteSuggestion__inner_mf7v0_4",Fs={autocompleteSuggestion__substring:CB,autocompleteSuggestion__inner:LB,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12"};class $B extends w.Component{constructor(r){super(r),this.state={value:r.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:r}=this.props,{value:n}=this.state;r(n)}onMouseMove(){const{setSuggestionIndex:r,index:n}=this.props;r(n)}render(){const{match:r,active:n,avoidBlur:t,id:a}=this.props,{value:i}=this.state.value,l=i.toLowerCase().startsWith(r.toLowerCase());return Or.jsx("li",{id:a,role:"option","aria-selected":n,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:l?Or.jsxs("span",{className:`${Fs.autocompleteSuggestion__inner} ${n?Fs["autocompleteSuggestion--active"]:""}`,children:[i.substring(0,r.length),Or.jsx("span",{className:Fs.autocompleteSuggestion__substring,children:i.substring(r.length)})]}):Or.jsx("span",{className:`${Fs.autocompleteSuggestion__inner} ${n?Fs["autocompleteSuggestion--active"]:""}`,children:i})})}}const HB="_autocomplete_9dlnp_1",VB="_autocomplete__suggestions_9dlnp_27",Ou={autocomplete:HB,autocomplete__suggestions:VB,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31"};class vI extends w.Component{constructor(r){super(r),Hg(this,"input"),Hg(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=n=>{this.input=n},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:r}=this.state;r&&(clearTimeout(r),this.setState({blurDelay:null}))}onChange(r){const{onChange:n}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),n(r)}onSearchButtonClick(r){const{onSearchButtonClick:n}=this.props;r.preventDefault(),n&&n()}onKeyDown(r){const{shouldShowSuggestions:n}=this.state;let{activeSuggestionIndex:t}=this.state;const{suggestions:a}=this.props,i=t>-1;switch(this.setState({setAriaActiveDescendant:r.keyCode===38||r.keyCode===40}),r.keyCode){case 9:i&&n&&this.setValue(a[t]);break;case 13:i&&n?(r.preventDefault(),this.setValue(a[t])):n&&a.length===1?this.setValue(a[0]):this.setState({shouldShowSuggestions:!1});break;case 27:n&&a.length>0&&(r.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:n&&(r.preventDefault(),t=t-1===-2?-1:t-1,this.setState({activeSuggestionIndex:t}));break;case 40:n&&(r.preventDefault(),t=t+1===a.length?a.length-1:t+1,this.setState({activeSuggestionIndex:t}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const r=setTimeout(()=>{const{shouldBlur:t}=this.state;t&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:r});const{onBlur:n}=this.props;n&&n()}setSuggestionIndex(r){this.setState({activeSuggestionIndex:r}),this.clearBlurDelay()}setValue(r){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:n}=this.props;n(r)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:r}=this.state;r&&(clearTimeout(r),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:r,id:n,ariaLabel:t,placeholder:a,value:i,name:l,shouldFocusOnMount:d,isLoading:c}=this.props,{activeSuggestionIndex:m,setAriaActiveDescendant:g,hasFocus:p,shouldShowSuggestions:y}=this.state,v=p&&y&&r.length>0,D=g&&m>-1?`${n}-item-${m}`:void 0;return Or.jsxs("div",{className:`${Ou.autocomplete} autocomplete`,"aria-expanded":v,"aria-owns":`${n}-suggestions`,"aria-haspopup":"listbox",children:[Or.jsx(Lu,{variant:"primary",id:n,name:l,"aria-label":t,"aria-autocomplete":"list","aria-controls":`${n}-suggestions`,"aria-activedescendant":D,placeholder:a,value:i,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:E=>{this.inputRef=E},className:"typo-normal",autoFocus:d,label:t,hideLabel:!0,children:Or.jsx(Lu.Button,{loading:c,onClick:this.onSearchButtonClick})}),Or.jsx("ul",{id:`${n}-suggestions`,role:"listbox",className:v?Ou.autocomplete__suggestions:Ou["autocomplete__suggestions--hidden"],children:v&&r.map((E,k)=>Or.jsx($B,{id:`${n}-item-${k}`,index:k,value:E,match:i,active:k===m,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},E.key))})]})}}var zu={exports:{}},UB=zu.exports,Gg;function WB(){return Gg||(Gg=1,function(e,r){(function(n,t){e.exports=t()})(UB,function(){var n=1e3,t=6e4,a=36e5,i="millisecond",l="second",d="minute",c="hour",m="day",g="week",p="month",y="quarter",v="year",D="date",E="Invalid Date",k=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(U){var W=["th","st","nd","rd"],H=U%100;return"["+U+(W[(H-20)%10]||W[H]||W[0])+"]"}},T=function(U,W,H){var J=String(U);return!J||J.length>=W?U:""+Array(W+1-J.length).join(H)+U},B={s:T,z:function(U){var W=-U.utcOffset(),H=Math.abs(W),J=Math.floor(H/60),K=H%60;return(W<=0?"+":"-")+T(J,2,"0")+":"+T(K,2,"0")},m:function U(W,H){if(W.date()<H.date())return-U(H,W);var J=12*(H.year()-W.year())+(H.month()-W.month()),K=W.clone().add(J,p),te=H-K<0,se=W.clone().add(J+(te?-1:1),p);return+(-(J+(H-K)/(te?K-se:se-K))||0)},a:function(U){return U<0?Math.ceil(U)||0:Math.floor(U)},p:function(U){return{M:p,y:v,w:g,d:m,D,h:c,m:d,s:l,ms:i,Q:y}[U]||String(U||"").toLowerCase().replace(/s$/,"")},u:function(U){return U===void 0}},x="en",N={};N[x]=_;var F="$isDayjsObject",A=function(U){return U instanceof G||!(!U||!U[F])},j=function U(W,H,J){var K;if(!W)return x;if(typeof W=="string"){var te=W.toLowerCase();N[te]&&(K=te),H&&(N[te]=H,K=te);var se=W.split("-");if(!K&&se.length>1)return U(se[0])}else{var le=W.name;N[le]=W,K=le}return!J&&K&&(x=K),K||!J&&x},Y=function(U,W){if(A(U))return U.clone();var H=typeof W=="object"?W:{};return H.date=U,H.args=arguments,new G(H)},V=B;V.l=j,V.i=A,V.w=function(U,W){return Y(U,{locale:W.$L,utc:W.$u,x:W.$x,$offset:W.$offset})};var G=function(){function U(H){this.$L=j(H.locale,null,!0),this.parse(H),this.$x=this.$x||H.x||{},this[F]=!0}var W=U.prototype;return W.parse=function(H){this.$d=function(J){var K=J.date,te=J.utc;if(K===null)return new Date(NaN);if(V.u(K))return new Date;if(K instanceof Date)return new Date(K);if(typeof K=="string"&&!/Z$/i.test(K)){var se=K.match(k);if(se){var le=se[2]-1||0,Te=(se[7]||"0").substring(0,3);return te?new Date(Date.UTC(se[1],le,se[3]||1,se[4]||0,se[5]||0,se[6]||0,Te)):new Date(se[1],le,se[3]||1,se[4]||0,se[5]||0,se[6]||0,Te)}}return new Date(K)}(H),this.init()},W.init=function(){var H=this.$d;this.$y=H.getFullYear(),this.$M=H.getMonth(),this.$D=H.getDate(),this.$W=H.getDay(),this.$H=H.getHours(),this.$m=H.getMinutes(),this.$s=H.getSeconds(),this.$ms=H.getMilliseconds()},W.$utils=function(){return V},W.isValid=function(){return this.$d.toString()!==E},W.isSame=function(H,J){var K=Y(H);return this.startOf(J)<=K&&K<=this.endOf(J)},W.isAfter=function(H,J){return Y(H)<this.startOf(J)},W.isBefore=function(H,J){return this.endOf(J)<Y(H)},W.$g=function(H,J,K){return V.u(H)?this[J]:this.set(K,H)},W.unix=function(){return Math.floor(this.valueOf()/1e3)},W.valueOf=function(){return this.$d.getTime()},W.startOf=function(H,J){var K=this,te=!!V.u(J)||J,se=V.p(H),le=function(on,en){var ln=V.w(K.$u?Date.UTC(K.$y,en,on):new Date(K.$y,en,on),K);return te?ln:ln.endOf(m)},Te=function(on,en){return V.w(K.toDate()[on].apply(K.toDate("s"),(te?[0,0,0,0]:[23,59,59,999]).slice(en)),K)},Oe=this.$W,nn=this.$M,me=this.$D,he="set"+(this.$u?"UTC":"");switch(se){case v:return te?le(1,0):le(31,11);case p:return te?le(1,nn):le(0,nn+1);case g:var Le=this.$locale().weekStart||0,Ge=(Oe<Le?Oe+7:Oe)-Le;return le(te?me-Ge:me+(6-Ge),nn);case m:case D:return Te(he+"Hours",0);case c:return Te(he+"Minutes",1);case d:return Te(he+"Seconds",2);case l:return Te(he+"Milliseconds",3);default:return this.clone()}},W.endOf=function(H){return this.startOf(H,!1)},W.$set=function(H,J){var K,te=V.p(H),se="set"+(this.$u?"UTC":""),le=(K={},K[m]=se+"Date",K[D]=se+"Date",K[p]=se+"Month",K[v]=se+"FullYear",K[c]=se+"Hours",K[d]=se+"Minutes",K[l]=se+"Seconds",K[i]=se+"Milliseconds",K)[te],Te=te===m?this.$D+(J-this.$W):J;if(te===p||te===v){var Oe=this.clone().set(D,1);Oe.$d[le](Te),Oe.init(),this.$d=Oe.set(D,Math.min(this.$D,Oe.daysInMonth())).$d}else le&&this.$d[le](Te);return this.init(),this},W.set=function(H,J){return this.clone().$set(H,J)},W.get=function(H){return this[V.p(H)]()},W.add=function(H,J){var K,te=this;H=Number(H);var se=V.p(J),le=function(nn){var me=Y(te);return V.w(me.date(me.date()+Math.round(nn*H)),te)};if(se===p)return this.set(p,this.$M+H);if(se===v)return this.set(v,this.$y+H);if(se===m)return le(1);if(se===g)return le(7);var Te=(K={},K[d]=t,K[c]=a,K[l]=n,K)[se]||1,Oe=this.$d.getTime()+H*Te;return V.w(Oe,this)},W.subtract=function(H,J){return this.add(-1*H,J)},W.format=function(H){var J=this,K=this.$locale();if(!this.isValid())return K.invalidDate||E;var te=H||"YYYY-MM-DDTHH:mm:ssZ",se=V.z(this),le=this.$H,Te=this.$m,Oe=this.$M,nn=K.weekdays,me=K.months,he=K.meridiem,Le=function(en,ln,gn,Rn){return en&&(en[ln]||en(J,te))||gn[ln].slice(0,Rn)},Ge=function(en){return V.s(le%12||12,en,"0")},on=he||function(en,ln,gn){var Rn=en<12?"AM":"PM";return gn?Rn.toLowerCase():Rn};return te.replace(R,function(en,ln){return ln||function(gn){switch(gn){case"YY":return String(J.$y).slice(-2);case"YYYY":return V.s(J.$y,4,"0");case"M":return Oe+1;case"MM":return V.s(Oe+1,2,"0");case"MMM":return Le(K.monthsShort,Oe,me,3);case"MMMM":return Le(me,Oe);case"D":return J.$D;case"DD":return V.s(J.$D,2,"0");case"d":return String(J.$W);case"dd":return Le(K.weekdaysMin,J.$W,nn,2);case"ddd":return Le(K.weekdaysShort,J.$W,nn,3);case"dddd":return nn[J.$W];case"H":return String(le);case"HH":return V.s(le,2,"0");case"h":return Ge(1);case"hh":return Ge(2);case"a":return on(le,Te,!0);case"A":return on(le,Te,!1);case"m":return String(Te);case"mm":return V.s(Te,2,"0");case"s":return String(J.$s);case"ss":return V.s(J.$s,2,"0");case"SSS":return V.s(J.$ms,3,"0");case"Z":return se}return null}(en)||se.replace(":","")})},W.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},W.diff=function(H,J,K){var te,se=this,le=V.p(J),Te=Y(H),Oe=(Te.utcOffset()-this.utcOffset())*t,nn=this-Te,me=function(){return V.m(se,Te)};switch(le){case v:te=me()/12;break;case p:te=me();break;case y:te=me()/3;break;case g:te=(nn-Oe)/6048e5;break;case m:te=(nn-Oe)/864e5;break;case c:te=nn/a;break;case d:te=nn/t;break;case l:te=nn/n;break;default:te=nn}return K?te:V.a(te)},W.daysInMonth=function(){return this.endOf(p).$D},W.$locale=function(){return N[this.$L]},W.locale=function(H,J){if(!H)return this.$L;var K=this.clone(),te=j(H,J,!0);return te&&(K.$L=te),K},W.clone=function(){return V.w(this.$d,this)},W.toDate=function(){return new Date(this.valueOf())},W.toJSON=function(){return this.isValid()?this.toISOString():null},W.toISOString=function(){return this.$d.toISOString()},W.toString=function(){return this.$d.toUTCString()},U}(),L=G.prototype;return Y.prototype=L,[["$ms",i],["$s",l],["$m",d],["$H",c],["$W",m],["$M",p],["$y",v],["$D",D]].forEach(function(U){L[U[1]]=function(W){return this.$g(W,U[0],U[1])}}),Y.extend=function(U,W){return U.$i||(U(W,G,Y),U.$i=!0),Y},Y.locale=j,Y.isDayjs=A,Y.unix=function(U){return Y(1e3*U)},Y.en=N[x],Y.Ls=N,Y.p={},Y})}(zu)),zu.exports}var GB=WB();const Js=Ly(GB);var Ku=function(e,r){return Ku=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])},Ku(e,r)};function Xt(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");Ku(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var ge=function(){return ge=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ge.apply(this,arguments)};function Hi(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n}function rr(e,r,n){if(arguments.length===2)for(var t=0,a=r.length,i;t<a;t++)(i||!(t in r))&&(i||(i=Array.prototype.slice.call(r,0,t)),i[t]=r[t]);return e.concat(i||Array.prototype.slice.call(r))}function nr(e,r){var n=r&&r.cache?r.cache:JB,t=r&&r.serializer?r.serializer:ZB,a=r&&r.strategy?r.strategy:KB;return a(e,{cache:n,serializer:t})}function YB(e){return e==null||typeof e=="number"||typeof e=="boolean"}function zB(e,r,n,t){var a=YB(t)?t:n(t),i=r.get(a);return typeof i>"u"&&(i=e.call(this,t),r.set(a,i)),i}function $y(e,r,n){var t=Array.prototype.slice.call(arguments,3),a=n(t),i=r.get(a);return typeof i>"u"&&(i=e.apply(this,t),r.set(a,i)),i}function Hy(e,r,n,t,a){return n.bind(r,e,t,a)}function KB(e,r){var n=e.length===1?zB:$y;return Hy(e,this,n,r.cache.create(),r.serializer)}function XB(e,r){return Hy(e,this,$y,r.cache.create(),r.serializer)}var ZB=function(){return JSON.stringify(arguments)},QB=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(r){return this.cache[r]},e.prototype.set=function(r,n){this.cache[r]=n},e}(),JB={create:function(){return new QB}},tr={variadic:XB},Ie;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ie||(Ie={}));var dn;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(dn||(dn={}));var Xa;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Xa||(Xa={}));function Yg(e){return e.type===dn.literal}function eq(e){return e.type===dn.argument}function Vy(e){return e.type===dn.number}function Uy(e){return e.type===dn.date}function Wy(e){return e.type===dn.time}function Gy(e){return e.type===dn.select}function Yy(e){return e.type===dn.plural}function nq(e){return e.type===dn.pound}function zy(e){return e.type===dn.tag}function Ky(e){return!!(e&&typeof e=="object"&&e.type===Xa.number)}function Xu(e){return!!(e&&typeof e=="object"&&e.type===Xa.dateTime)}var Xy=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,tq=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function rq(e){var r={};return e.replace(tq,function(n){var t=n.length;switch(n[0]){case"G":r.era=t===4?"long":t===5?"narrow":"short";break;case"y":r.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":r.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":r.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"a":r.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][t-1];break;case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][t-1];break;case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][t-1];break;case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":r.minute=["numeric","2-digit"][t-1];break;case"s":r.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":r.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),r}var aq=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function sq(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var r=e.split(aq).filter(function(y){return y.length>0}),n=[],t=0,a=r;t<a.length;t++){var i=a[t],l=i.split("/");if(l.length===0)throw new Error("Invalid number skeleton");for(var d=l[0],c=l.slice(1),m=0,g=c;m<g.length;m++){var p=g[m];if(p.length===0)throw new Error("Invalid number skeleton")}n.push({stem:d,options:c})}return n}function oq(e){return e.replace(/^(.*?)-/,"")}var zg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Zy=/^(@+)?(\+|#+)?[rs]?$/g,iq=/(\*)(0+)|(#+)(0+)|(0+)/g,Qy=/^(0+)$/;function Kg(e){var r={};return e[e.length-1]==="r"?r.roundingPriority="morePrecision":e[e.length-1]==="s"&&(r.roundingPriority="lessPrecision"),e.replace(Zy,function(n,t,a){return typeof a!="string"?(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length):a==="+"?r.minimumSignificantDigits=t.length:t[0]==="#"?r.maximumSignificantDigits=t.length:(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length+(typeof a=="string"?a.length:0)),""}),r}function Jy(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function lq(e){var r;if(e[0]==="E"&&e[1]==="E"?(r={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(r={notation:"scientific"},e=e.slice(1)),r){var n=e.slice(0,2);if(n==="+!"?(r.signDisplay="always",e=e.slice(2)):n==="+?"&&(r.signDisplay="exceptZero",e=e.slice(2)),!Qy.test(e))throw new Error("Malformed concise eng/scientific notation");r.minimumIntegerDigits=e.length}return r}function Xg(e){var r={},n=Jy(e);return n||r}function uq(e){for(var r={},n=0,t=e;n<t.length;n++){var a=t[n];switch(a.stem){case"percent":case"%":r.style="percent";continue;case"%x100":r.style="percent",r.scale=100;continue;case"currency":r.style="currency",r.currency=a.options[0];continue;case"group-off":case",_":r.useGrouping=!1;continue;case"precision-integer":case".":r.maximumFractionDigits=0;continue;case"measure-unit":case"unit":r.style="unit",r.unit=oq(a.options[0]);continue;case"compact-short":case"K":r.notation="compact",r.compactDisplay="short";continue;case"compact-long":case"KK":r.notation="compact",r.compactDisplay="long";continue;case"scientific":r=ge(ge(ge({},r),{notation:"scientific"}),a.options.reduce(function(c,m){return ge(ge({},c),Xg(m))},{}));continue;case"engineering":r=ge(ge(ge({},r),{notation:"engineering"}),a.options.reduce(function(c,m){return ge(ge({},c),Xg(m))},{}));continue;case"notation-simple":r.notation="standard";continue;case"unit-width-narrow":r.currencyDisplay="narrowSymbol",r.unitDisplay="narrow";continue;case"unit-width-short":r.currencyDisplay="code",r.unitDisplay="short";continue;case"unit-width-full-name":r.currencyDisplay="name",r.unitDisplay="long";continue;case"unit-width-iso-code":r.currencyDisplay="symbol";continue;case"scale":r.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":r.roundingMode="floor";continue;case"rounding-mode-ceiling":r.roundingMode="ceil";continue;case"rounding-mode-down":r.roundingMode="trunc";continue;case"rounding-mode-up":r.roundingMode="expand";continue;case"rounding-mode-half-even":r.roundingMode="halfEven";continue;case"rounding-mode-half-down":r.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":r.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(iq,function(c,m,g,p,y,v){if(m)r.minimumIntegerDigits=g.length;else{if(p&&y)throw new Error("We currently do not support maximum integer digits");if(v)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Qy.test(a.stem)){r.minimumIntegerDigits=a.stem.length;continue}if(zg.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(zg,function(c,m,g,p,y,v){return g==="*"?r.minimumFractionDigits=m.length:p&&p[0]==="#"?r.maximumFractionDigits=p.length:y&&v?(r.minimumFractionDigits=y.length,r.maximumFractionDigits=y.length+v.length):(r.minimumFractionDigits=m.length,r.maximumFractionDigits=m.length),""});var i=a.options[0];i==="w"?r=ge(ge({},r),{trailingZeroDisplay:"stripIfInteger"}):i&&(r=ge(ge({},r),Kg(i)));continue}if(Zy.test(a.stem)){r=ge(ge({},r),Kg(a.stem));continue}var l=Jy(a.stem);l&&(r=ge(ge({},r),l));var d=lq(a.stem);d&&(r=ge(ge({},r),d))}return r}var Zo={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function dq(e,r){for(var n="",t=0;t<e.length;t++){var a=e.charAt(t);if(a==="j"){for(var i=0;t+1<e.length&&e.charAt(t+1)===a;)i++,t++;var l=1+(i&1),d=i<2?1:3+(i>>1),c="a",m=cq(r);for((m=="H"||m=="k")&&(d=0);d-- >0;)n+=c;for(;l-- >0;)n=m+n}else a==="J"?n+="H":n+=a}return n}function cq(e){var r=e.hourCycle;if(r===void 0&&e.hourCycles&&e.hourCycles.length&&(r=e.hourCycles[0]),r)switch(r){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,t;n!=="root"&&(t=e.maximize().region);var a=Zo[t||""]||Zo[n||""]||Zo["".concat(n,"-001")]||Zo["001"];return a[0]}var Du,fq=new RegExp("^".concat(Xy.source,"*")),mq=new RegExp("".concat(Xy.source,"*$"));function Ce(e,r){return{start:e,end:r}}var gq=!!String.prototype.startsWith&&"_a".startsWith("a",1),pq=!!String.fromCodePoint,hq=!!Object.fromEntries,yq=!!String.prototype.codePointAt,vq=!!String.prototype.trimStart,kq=!!String.prototype.trimEnd,bq=!!Number.isSafeInteger,wq=bq?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Zu=!0;try{var _q=nv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Zu=((Du=_q.exec("a"))===null||Du===void 0?void 0:Du[0])==="a"}catch{Zu=!1}var Zg=gq?function(e,r,n){return e.startsWith(r,n)}:function(e,r,n){return e.slice(n,n+r.length)===r},Qu=pq?String.fromCodePoint:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n="",t=e.length,a=0,i;t>a;){if(i=e[a++],i>1114111)throw RangeError(i+" is not a valid code point");n+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return n},Qg=hq?Object.fromEntries:function(e){for(var r={},n=0,t=e;n<t.length;n++){var a=t[n],i=a[0],l=a[1];r[i]=l}return r},ev=yq?function(e,r){return e.codePointAt(r)}:function(e,r){var n=e.length;if(!(r<0||r>=n)){var t=e.charCodeAt(r),a;return t<55296||t>56319||r+1===n||(a=e.charCodeAt(r+1))<56320||a>57343?t:(t-55296<<10)+(a-56320)+65536}},Tq=vq?function(e){return e.trimStart()}:function(e){return e.replace(fq,"")},Sq=kq?function(e){return e.trimEnd()}:function(e){return e.replace(mq,"")};function nv(e,r){return new RegExp(e,r)}var Ju;if(Zu){var Jg=nv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ju=function(e,r){var n;Jg.lastIndex=r;var t=Jg.exec(e);return(n=t[1])!==null&&n!==void 0?n:""}}else Ju=function(e,r){for(var n=[];;){var t=ev(e,r);if(t===void 0||tv(t)||xq(t))break;n.push(t),r+=t>=65536?2:1}return Qu.apply(void 0,n)};var Eq=function(){function e(r,n){n===void 0&&(n={}),this.message=r,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(r,n,t){for(var a=[];!this.isEOF();){var i=this.char();if(i===123){var l=this.parseArgument(r,t);if(l.err)return l;a.push(l.val)}else{if(i===125&&r>0)break;if(i===35&&(n==="plural"||n==="selectordinal")){var d=this.clonePosition();this.bump(),a.push({type:dn.pound,location:Ce(d,this.clonePosition())})}else if(i===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(Ie.UNMATCHED_CLOSING_TAG,Ce(this.clonePosition(),this.clonePosition()))}else if(i===60&&!this.ignoreTag&&ed(this.peek()||0)){var l=this.parseTag(r,n);if(l.err)return l;a.push(l.val)}else{var l=this.parseLiteral(r,n);if(l.err)return l;a.push(l.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(r,n){var t=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:dn.literal,value:"<".concat(a,"/>"),location:Ce(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var i=this.parseMessage(r+1,n,!0);if(i.err)return i;var l=i.val,d=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ed(this.char()))return this.error(Ie.INVALID_TAG,Ce(d,this.clonePosition()));var c=this.clonePosition(),m=this.parseTagName();return a!==m?this.error(Ie.UNMATCHED_CLOSING_TAG,Ce(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:dn.tag,value:a,children:l,location:Ce(t,this.clonePosition())},err:null}:this.error(Ie.INVALID_TAG,Ce(d,this.clonePosition())))}else return this.error(Ie.UNCLOSED_TAG,Ce(t,this.clonePosition()))}else return this.error(Ie.INVALID_TAG,Ce(t,this.clonePosition()))},e.prototype.parseTagName=function(){var r=this.offset();for(this.bump();!this.isEOF()&&Dq(this.char());)this.bump();return this.message.slice(r,this.offset())},e.prototype.parseLiteral=function(r,n){for(var t=this.clonePosition(),a="";;){var i=this.tryParseQuote(n);if(i){a+=i;continue}var l=this.tryParseUnquoted(r,n);if(l){a+=l;continue}var d=this.tryParseLeftAngleBracket();if(d){a+=d;continue}break}var c=Ce(t,this.clonePosition());return{val:{type:dn.literal,value:a,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Oq(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(r){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(r==="plural"||r==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(t);this.bump()}return Qu.apply(void 0,n)},e.prototype.tryParseUnquoted=function(r,n){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(n==="plural"||n==="selectordinal")||t===125&&r>0?null:(this.bump(),Qu(t))},e.prototype.parseArgument=function(r,n){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ie.EMPTY_ARGUMENT,Ce(t,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(Ie.MALFORMED_ARGUMENT,Ce(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:dn.argument,value:a,location:Ce(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(t,this.clonePosition())):this.parseArgumentOptions(r,n,a,t);default:return this.error(Ie.MALFORMED_ARGUMENT,Ce(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var r=this.clonePosition(),n=this.offset(),t=Ju(this.message,n),a=n+t.length;this.bumpTo(a);var i=this.clonePosition(),l=Ce(r,i);return{value:t,location:l}},e.prototype.parseArgumentOptions=function(r,n,t,a){var i,l=this.clonePosition(),d=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(d){case"":return this.error(Ie.EXPECT_ARGUMENT_TYPE,Ce(l,c));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var g=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var y=Sq(p.val);if(y.length===0)return this.error(Ie.EXPECT_ARGUMENT_STYLE,Ce(this.clonePosition(),this.clonePosition()));var v=Ce(g,this.clonePosition());m={style:y,styleLocation:v}}var D=this.tryParseArgumentClose(a);if(D.err)return D;var E=Ce(a,this.clonePosition());if(m&&Zg(m==null?void 0:m.style,"::",0)){var k=Tq(m.style.slice(2));if(d==="number"){var p=this.parseNumberSkeletonFromString(k,m.styleLocation);return p.err?p:{val:{type:dn.number,value:t,location:E,style:p.val},err:null}}else{if(k.length===0)return this.error(Ie.EXPECT_DATE_TIME_SKELETON,E);var R=k;this.locale&&(R=dq(k,this.locale));var y={type:Xa.dateTime,pattern:R,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?rq(R):{}},_=d==="date"?dn.date:dn.time;return{val:{type:_,value:t,location:E,style:y},err:null}}}return{val:{type:d==="number"?dn.number:d==="date"?dn.date:dn.time,value:t,location:E,style:(i=m==null?void 0:m.style)!==null&&i!==void 0?i:null},err:null}}case"plural":case"selectordinal":case"select":{var T=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ie.EXPECT_SELECT_ARGUMENT_OPTIONS,Ce(T,ge({},T)));this.bumpSpace();var B=this.parseIdentifierIfPossible(),x=0;if(d!=="select"&&B.value==="offset"){if(!this.bumpIf(":"))return this.error(Ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ce(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(Ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ie.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),B=this.parseIdentifierIfPossible(),x=p.val}var N=this.tryParsePluralOrSelectOptions(r,d,n,B);if(N.err)return N;var D=this.tryParseArgumentClose(a);if(D.err)return D;var F=Ce(a,this.clonePosition());return d==="select"?{val:{type:dn.select,value:t,options:Qg(N.val),location:F},err:null}:{val:{type:dn.plural,value:t,options:Qg(N.val),offset:x,pluralType:d==="plural"?"cardinal":"ordinal",location:F},err:null}}default:return this.error(Ie.INVALID_ARGUMENT_TYPE,Ce(l,c))}},e.prototype.tryParseArgumentClose=function(r){return this.isEOF()||this.char()!==125?this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(r,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var r=0,n=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ie.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Ce(a,this.clonePosition()));this.bump();break}case 123:{r+=1,this.bump();break}case 125:{if(r>0)r-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(r,n){var t=[];try{t=sq(r)}catch{return this.error(Ie.INVALID_NUMBER_SKELETON,n)}return{val:{type:Xa.number,tokens:t,location:n,parsedOptions:this.shouldParseSkeletons?uq(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(r,n,t,a){for(var i,l=!1,d=[],c=new Set,m=a.value,g=a.location;;){if(m.length===0){var p=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var y=this.tryParseDecimalInteger(Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ie.INVALID_PLURAL_ARGUMENT_SELECTOR);if(y.err)return y;g=Ce(p,this.clonePosition()),m=this.message.slice(p.offset,this.offset())}else break}if(c.has(m))return this.error(n==="select"?Ie.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ie.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,g);m==="other"&&(l=!0),this.bumpSpace();var v=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?Ie.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Ce(this.clonePosition(),this.clonePosition()));var D=this.parseMessage(r+1,n,t);if(D.err)return D;var E=this.tryParseArgumentClose(v);if(E.err)return E;d.push([m,{value:D.val,location:Ce(v,this.clonePosition())}]),c.add(m),this.bumpSpace(),i=this.parseIdentifierIfPossible(),m=i.value,g=i.location}return d.length===0?this.error(n==="select"?Ie.EXPECT_SELECT_ARGUMENT_SELECTOR:Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ce(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!l?this.error(Ie.MISSING_OTHER_CLAUSE,Ce(this.clonePosition(),this.clonePosition())):{val:d,err:null}},e.prototype.tryParseDecimalInteger=function(r,n){var t=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var i=!1,l=0;!this.isEOF();){var d=this.char();if(d>=48&&d<=57)i=!0,l=l*10+(d-48),this.bump();else break}var c=Ce(a,this.clonePosition());return i?(l*=t,wq(l)?{val:l,err:null}:this.error(n,c)):this.error(r,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var r=this.position.offset;if(r>=this.message.length)throw Error("out of bound");var n=ev(this.message,r);if(n===void 0)throw Error("Offset ".concat(r," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(r,n){return{val:null,err:{kind:r,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var r=this.char();r===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=r<65536?1:2)}},e.prototype.bumpIf=function(r){if(Zg(this.message,r,this.offset())){for(var n=0;n<r.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(r){var n=this.offset(),t=this.message.indexOf(r,n);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(r){if(this.offset()>r)throw Error("targetOffset ".concat(r," must be greater than or equal to the current offset ").concat(this.offset()));for(r=Math.min(r,this.message.length);;){var n=this.offset();if(n===r)break;if(n>r)throw Error("targetOffset ".concat(r," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&tv(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var r=this.char(),n=this.offset(),t=this.message.charCodeAt(n+(r>=65536?2:1));return t??null},e}();function ed(e){return e>=97&&e<=122||e>=65&&e<=90}function Oq(e){return ed(e)||e===47}function Dq(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function tv(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function xq(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function nd(e){e.forEach(function(r){if(delete r.location,Gy(r)||Yy(r))for(var n in r.options)delete r.options[n].location,nd(r.options[n].value);else Vy(r)&&Ky(r.style)||(Uy(r)||Wy(r))&&Xu(r.style)?delete r.style.location:zy(r)&&nd(r.children)})}function Rq(e,r){r===void 0&&(r={}),r=ge({shouldParseSkeletons:!0,requiresOtherClause:!0},r);var n=new Eq(e,r).parse();if(n.err){var t=SyntaxError(Ie[n.err.kind]);throw t.location=n.err.location,t.originalMessage=n.err.message,t}return r!=null&&r.captureLocation||nd(n.val),n.val}var fr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(fr||(fr={}));var Yr=function(e){Xt(r,e);function r(n,t,a){var i=e.call(this,n)||this;return i.code=t,i.originalMessage=a,i}return r.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},r}(Error),ep=function(e){Xt(r,e);function r(n,t,a,i){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(t,'". Options are "').concat(Object.keys(a).join('", "'),'"'),fr.INVALID_VALUE,i)||this}return r}(Yr),Fq=function(e){Xt(r,e);function r(n,t,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(t),fr.INVALID_VALUE,a)||this}return r}(Yr),Aq=function(e){Xt(r,e);function r(n,t){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(t,'"'),fr.MISSING_VALUE,t)||this}return r}(Yr),Jn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Jn||(Jn={}));function Nq(e){return e.length<2?e:e.reduce(function(r,n){var t=r[r.length-1];return!t||t.type!==Jn.literal||n.type!==Jn.literal?r.push(n):t.value+=n.value,r},[])}function rv(e){return typeof e=="function"}function si(e,r,n,t,a,i,l){if(e.length===1&&Yg(e[0]))return[{type:Jn.literal,value:e[0].value}];for(var d=[],c=0,m=e;c<m.length;c++){var g=m[c];if(Yg(g)){d.push({type:Jn.literal,value:g.value});continue}if(nq(g)){typeof i=="number"&&d.push({type:Jn.literal,value:n.getNumberFormat(r).format(i)});continue}var p=g.value;if(!(a&&p in a))throw new Aq(p,l);var y=a[p];if(eq(g)){(!y||typeof y=="string"||typeof y=="number")&&(y=typeof y=="string"||typeof y=="number"?String(y):""),d.push({type:typeof y=="string"?Jn.literal:Jn.object,value:y});continue}if(Uy(g)){var v=typeof g.style=="string"?t.date[g.style]:Xu(g.style)?g.style.parsedOptions:void 0;d.push({type:Jn.literal,value:n.getDateTimeFormat(r,v).format(y)});continue}if(Wy(g)){var v=typeof g.style=="string"?t.time[g.style]:Xu(g.style)?g.style.parsedOptions:t.time.medium;d.push({type:Jn.literal,value:n.getDateTimeFormat(r,v).format(y)});continue}if(Vy(g)){var v=typeof g.style=="string"?t.number[g.style]:Ky(g.style)?g.style.parsedOptions:void 0;v&&v.scale&&(y=y*(v.scale||1)),d.push({type:Jn.literal,value:n.getNumberFormat(r,v).format(y)});continue}if(zy(g)){var D=g.children,E=g.value,k=a[E];if(!rv(k))throw new Fq(E,"function",l);var R=si(D,r,n,t,a,i),_=k(R.map(function(x){return x.value}));Array.isArray(_)||(_=[_]),d.push.apply(d,_.map(function(x){return{type:typeof x=="string"?Jn.literal:Jn.object,value:x}}))}if(Gy(g)){var T=g.options[y]||g.options.other;if(!T)throw new ep(g.value,y,Object.keys(g.options),l);d.push.apply(d,si(T.value,r,n,t,a));continue}if(Yy(g)){var T=g.options["=".concat(y)];if(!T){if(!Intl.PluralRules)throw new Yr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,fr.MISSING_INTL_API,l);var B=n.getPluralRules(r,{type:g.pluralType}).select(y-(g.offset||0));T=g.options[B]||g.options.other}if(!T)throw new ep(g.value,y,Object.keys(g.options),l);d.push.apply(d,si(T.value,r,n,t,a,y-(g.offset||0)));continue}}return Nq(d)}function Pq(e,r){return r?ge(ge(ge({},e||{}),r||{}),Object.keys(e).reduce(function(n,t){return n[t]=ge(ge({},e[t]),r[t]||{}),n},{})):e}function Mq(e,r){return r?Object.keys(e).reduce(function(n,t){return n[t]=Pq(e[t],r[t]),n},ge({},e)):e}function xu(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function Bq(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:nr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.NumberFormat).bind.apply(r,rr([void 0],n,!1)))},{cache:xu(e.number),strategy:tr.variadic}),getDateTimeFormat:nr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.DateTimeFormat).bind.apply(r,rr([void 0],n,!1)))},{cache:xu(e.dateTime),strategy:tr.variadic}),getPluralRules:nr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.PluralRules).bind.apply(r,rr([void 0],n,!1)))},{cache:xu(e.pluralRules),strategy:tr.variadic})}}var av=function(){function e(r,n,t,a){n===void 0&&(n=e.defaultLocale);var i=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var m=i.formatToParts(c);if(m.length===1)return m[0].value;var g=m.reduce(function(p,y){return!p.length||y.type!==Jn.literal||typeof p[p.length-1]!="string"?p.push(y.value):p[p.length-1]+=y.value,p},[]);return g.length<=1?g[0]||"":g},this.formatToParts=function(c){return si(i.ast,i.locales,i.formatters,i.formats,c,void 0,i.message)},this.resolvedOptions=function(){var c;return{locale:((c=i.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(i.locales)[0]}},this.getAst=function(){return i.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof r=="string"){if(this.message=r,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var l=a||{};l.formatters;var d=Hi(l,["formatters"]);this.ast=e.__parse(r,ge(ge({},d),{locale:this.resolvedLocale}))}else this.ast=r;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Mq(e.formats,t),this.formatters=a&&a.formatters||Bq(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(r){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(r);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof r=="string"?r:r[0])}},e.__parse=Rq,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),pa;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(pa||(pa={}));var eo=function(e){Xt(r,e);function r(n,t,a){var i=this,l=a?a instanceof Error?a:new Error(String(a)):void 0;return i=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(t,`
`).concat(l?`
`.concat(l.message,`
`).concat(l.stack):""))||this,i.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(i,r),i}return r}(Error),qq=function(e){Xt(r,e);function r(n,t){return e.call(this,pa.UNSUPPORTED_FORMATTER,n,t)||this}return r}(eo),jq=function(e){Xt(r,e);function r(n,t){return e.call(this,pa.INVALID_CONFIG,n,t)||this}return r}(eo),np=function(e){Xt(r,e);function r(n,t){return e.call(this,pa.MISSING_DATA,n,t)||this}return r}(eo),jt=function(e){Xt(r,e);function r(n,t,a){var i=e.call(this,pa.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(t,`
`),a)||this;return i.locale=t,i}return r}(eo),Ru=function(e){Xt(r,e);function r(n,t,a,i){var l=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),t,i)||this;return l.descriptor=a,l.locale=t,l}return r}(jt),Iq=function(e){Xt(r,e);function r(n,t){var a=e.call(this,pa.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(t,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(i){var l;return(l=i.value)!==null&&l!==void 0?l:JSON.stringify(i)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return r}(eo);function Cq(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}function as(e,r,n){return n===void 0&&(n={}),r.reduce(function(t,a){return a in e?t[a]=e[a]:a in n&&(t[a]=n[a]),t},{})}var Lq=function(e){},$q=function(e){},sv={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Lq,onWarn:$q};function ov(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function aa(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function Hq(e){e===void 0&&(e=ov());var r=Intl.RelativeTimeFormat,n=Intl.ListFormat,t=Intl.DisplayNames,a=nr(function(){for(var d,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((d=Intl.DateTimeFormat).bind.apply(d,rr([void 0],c,!1)))},{cache:aa(e.dateTime),strategy:tr.variadic}),i=nr(function(){for(var d,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((d=Intl.NumberFormat).bind.apply(d,rr([void 0],c,!1)))},{cache:aa(e.number),strategy:tr.variadic}),l=nr(function(){for(var d,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((d=Intl.PluralRules).bind.apply(d,rr([void 0],c,!1)))},{cache:aa(e.pluralRules),strategy:tr.variadic});return{getDateTimeFormat:a,getNumberFormat:i,getMessageFormat:nr(function(d,c,m,g){return new av(d,c,m,ge({formatters:{getNumberFormat:i,getDateTimeFormat:a,getPluralRules:l}},g||{}))},{cache:aa(e.message),strategy:tr.variadic}),getRelativeTimeFormat:nr(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return new(r.bind.apply(r,rr([void 0],d,!1)))},{cache:aa(e.relativeTime),strategy:tr.variadic}),getPluralRules:l,getListFormat:nr(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return new(n.bind.apply(n,rr([void 0],d,!1)))},{cache:aa(e.list),strategy:tr.variadic}),getDisplayNames:nr(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return new(t.bind.apply(t,rr([void 0],d,!1)))},{cache:aa(e.displayNames),strategy:tr.variadic})}}function Ud(e,r,n,t){var a=e&&e[r],i;if(a&&(i=a[n]),i)return i;t(new qq("No ".concat(r," format named: ").concat(n)))}function Qo(e,r){return Object.keys(e).reduce(function(n,t){return n[t]=ge({timeZone:r},e[t]),n},{})}function tp(e,r){var n=Object.keys(ge(ge({},e),r));return n.reduce(function(t,a){return t[a]=ge(ge({},e[a]||{}),r[a]||{}),t},{})}function rp(e,r){if(!r)return e;var n=av.formats;return ge(ge(ge({},n),e),{date:tp(Qo(n.date,r),Qo(e.date||{},r)),time:tp(Qo(n.time,r),Qo(e.time||{},r))})}var td=function(e,r,n,t,a){var i=e.locale,l=e.formats,d=e.messages,c=e.defaultLocale,m=e.defaultFormats,g=e.fallbackOnEmptyString,p=e.onError,y=e.timeZone,v=e.defaultRichTextElements;n===void 0&&(n={id:""});var D=n.id,E=n.defaultMessage;Cq(!!D,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var k=String(D),R=d&&Object.prototype.hasOwnProperty.call(d,k)&&d[k];if(Array.isArray(R)&&R.length===1&&R[0].type===dn.literal)return R[0].value;if(!t&&R&&typeof R=="string"&&!v)return R.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=ge(ge({},v),t||{}),l=rp(l,y),m=rp(m,y),!R){if(g===!1&&R==="")return R;if((!E||i&&i.toLowerCase()!==c.toLowerCase())&&p(new Iq(n,i)),E)try{var _=r.getMessageFormat(E,c,m,a);return _.format(t)}catch(T){return p(new Ru('Error formatting default message for: "'.concat(k,'", rendering default message verbatim'),i,n,T)),typeof E=="string"?E:k}return k}try{var _=r.getMessageFormat(R,i,l,ge({formatters:r},a||{}));return _.format(t)}catch(T){p(new Ru('Error formatting message: "'.concat(k,'", using ').concat(E?"default message":"id"," as fallback."),i,n,T))}if(E)try{var _=r.getMessageFormat(E,c,m,a);return _.format(t)}catch(T){p(new Ru('Error formatting the default message for: "'.concat(k,'", rendering message verbatim'),i,n,T))}return typeof R=="string"?R:typeof E=="string"?E:k},Vq=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function no(e,r,n,t){var a=e.locale,i=e.formats,l=e.onError,d=e.timeZone;t===void 0&&(t={});var c=t.format,m=ge(ge({},d&&{timeZone:d}),c&&Ud(i,r,c,l)),g=as(t,Vq,m);return r==="time"&&!g.hour&&!g.minute&&!g.second&&!g.timeStyle&&!g.dateStyle&&(g=ge(ge({},g),{hour:"numeric",minute:"numeric"})),n(a,g)}function Uq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],l=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return no(e,"date",r,l).format(d)}catch(c){e.onError(new jt("Error formatting date.",e.locale,c))}return String(d)}function Wq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],l=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return no(e,"time",r,l).format(d)}catch(c){e.onError(new jt("Error formatting time.",e.locale,c))}return String(d)}function Gq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],l=n[2],d=l===void 0?{}:l,c=typeof a=="string"?new Date(a||0):a,m=typeof i=="string"?new Date(i||0):i;try{return no(e,"dateTimeRange",r,d).formatRange(c,m)}catch(g){e.onError(new jt("Error formatting date time range.",e.locale,g))}return String(c)}function Yq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],l=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return no(e,"date",r,l).formatToParts(d)}catch(c){e.onError(new jt("Error formatting date.",e.locale,c))}return[]}function zq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],l=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return no(e,"time",r,l).formatToParts(d)}catch(c){e.onError(new jt("Error formatting time.",e.locale,c))}return[]}var Kq=["style","type","fallback","languageDisplay"];function Xq(e,r,n,t){var a=e.locale,i=e.onError,l=Intl.DisplayNames;l||i(new Yr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,fr.MISSING_INTL_API));var d=as(t,Kq);try{return r(a,d).of(n)}catch(c){i(new jt("Error formatting display name.",a,c))}}var Zq=["type","style"],ap=Date.now();function Qq(e){return"".concat(ap,"_").concat(e,"_").concat(ap)}function Jq(e,r,n,t){t===void 0&&(t={});var a=iv(e,r,n,t).reduce(function(i,l){var d=l.value;return typeof d!="string"?i.push(d):typeof i[i.length-1]=="string"?i[i.length-1]+=d:i.push(d),i},[]);return a.length===1?a[0]:a.length===0?"":a}function iv(e,r,n,t){var a=e.locale,i=e.onError;t===void 0&&(t={});var l=Intl.ListFormat;l||i(new Yr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,fr.MISSING_INTL_API));var d=as(t,Zq);try{var c={},m=n.map(function(g,p){if(typeof g=="object"){var y=Qq(p);return c[y]=g,y}return String(g)});return r(a,d).formatToParts(m).map(function(g){return g.type==="literal"?g:ge(ge({},g),{value:c[g.value]||g.value})})}catch(g){i(new jt("Error formatting list.",a,g))}return n}var ej=["type"];function nj(e,r,n,t){var a=e.locale,i=e.onError;t===void 0&&(t={}),Intl.PluralRules||i(new Yr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,fr.MISSING_INTL_API));var l=as(t,ej);try{return r(a,l).select(n)}catch(d){i(new jt("Error formatting plural.",a,d))}return"other"}var tj=["numeric","style"];function rj(e,r,n){var t=e.locale,a=e.formats,i=e.onError;n===void 0&&(n={});var l=n.format,d=!!l&&Ud(a,"relative",l,i)||{},c=as(n,tj,d);return r(t,c)}function aj(e,r,n,t,a){a===void 0&&(a={}),t||(t="second");var i=Intl.RelativeTimeFormat;i||e.onError(new Yr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,fr.MISSING_INTL_API));try{return rj(e,r,a).format(n,t)}catch(l){e.onError(new jt("Error formatting relative time.",e.locale,l))}return String(n)}var sj=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function lv(e,r,n){var t=e.locale,a=e.formats,i=e.onError;n===void 0&&(n={});var l=n.format,d=l&&Ud(a,"number",l,i)||{},c=as(n,sj,d);return r(t,c)}function oj(e,r,n,t){t===void 0&&(t={});try{return lv(e,r,t).format(n)}catch(a){e.onError(new jt("Error formatting number.",e.locale,a))}return String(n)}function ij(e,r,n,t){t===void 0&&(t={});try{return lv(e,r,t).formatToParts(n)}catch(a){e.onError(new jt("Error formatting number.",e.locale,a))}return[]}function lj(e){var r=e?e[Object.keys(e)[0]]:void 0;return typeof r=="string"}function uj(e){e.onWarn&&e.defaultRichTextElements&&lj(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function dj(e,r){var n=Hq(r),t=ge(ge({},sv),e),a=t.locale,i=t.defaultLocale,l=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&l?l(new np('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&l&&l(new np('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(l&&l(new jq('"locale" was not configured, using "'.concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),uj(t),ge(ge({},t),{formatters:n,formatNumber:oj.bind(null,t,n.getNumberFormat),formatNumberToParts:ij.bind(null,t,n.getNumberFormat),formatRelativeTime:aj.bind(null,t,n.getRelativeTimeFormat),formatDate:Uq.bind(null,t,n.getDateTimeFormat),formatDateToParts:Yq.bind(null,t,n.getDateTimeFormat),formatTime:Wq.bind(null,t,n.getDateTimeFormat),formatDateTimeRange:Gq.bind(null,t,n.getDateTimeFormat),formatTimeToParts:zq.bind(null,t,n.getDateTimeFormat),formatPlural:nj.bind(null,t,n.getPluralRules),formatMessage:td.bind(null,t,n),$t:td.bind(null,t,n),formatList:Jq.bind(null,t,n.getListFormat),formatListToParts:iv.bind(null,t,n.getListFormat),formatDisplayName:Xq.bind(null,t,n.getDisplayNames)})}function cj(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}function fj(e){cj(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var mj=ge(ge({},sv),{textComponent:O.Fragment}),gj={key:42},pj=function(e){return O.isValidElement(e)?O.createElement(O.Fragment,gj,e):e},hj=function(e){var r;return(r=O.Children.map(e,pj))!==null&&r!==void 0?r:[]};function yj(e){return function(r){return e(O.Children.toArray(r))}}var sp={exports:{}},ze={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function vj(){if(op)return ze;op=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,D=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,k=e?Symbol.for("react.fundamental"):60117,R=e?Symbol.for("react.responder"):60118,_=e?Symbol.for("react.scope"):60119;function T(x){if(typeof x=="object"&&x!==null){var N=x.$$typeof;switch(N){case r:switch(x=x.type,x){case c:case m:case t:case i:case a:case p:return x;default:switch(x=x&&x.$$typeof,x){case d:case g:case D:case v:case l:return x;default:return N}}case n:return N}}}function B(x){return T(x)===m}return ze.AsyncMode=c,ze.ConcurrentMode=m,ze.ContextConsumer=d,ze.ContextProvider=l,ze.Element=r,ze.ForwardRef=g,ze.Fragment=t,ze.Lazy=D,ze.Memo=v,ze.Portal=n,ze.Profiler=i,ze.StrictMode=a,ze.Suspense=p,ze.isAsyncMode=function(x){return B(x)||T(x)===c},ze.isConcurrentMode=B,ze.isContextConsumer=function(x){return T(x)===d},ze.isContextProvider=function(x){return T(x)===l},ze.isElement=function(x){return typeof x=="object"&&x!==null&&x.$$typeof===r},ze.isForwardRef=function(x){return T(x)===g},ze.isFragment=function(x){return T(x)===t},ze.isLazy=function(x){return T(x)===D},ze.isMemo=function(x){return T(x)===v},ze.isPortal=function(x){return T(x)===n},ze.isProfiler=function(x){return T(x)===i},ze.isStrictMode=function(x){return T(x)===a},ze.isSuspense=function(x){return T(x)===p},ze.isValidElementType=function(x){return typeof x=="string"||typeof x=="function"||x===t||x===m||x===i||x===a||x===p||x===y||typeof x=="object"&&x!==null&&(x.$$typeof===D||x.$$typeof===v||x.$$typeof===l||x.$$typeof===d||x.$$typeof===g||x.$$typeof===k||x.$$typeof===R||x.$$typeof===_||x.$$typeof===E)},ze.typeOf=T,ze}var ip;function kj(){return ip||(ip=1,sp.exports=vj()),sp.exports}var Fu,lp;function bj(){if(lp)return Fu;lp=1;var e=kj(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[e.ForwardRef]=t,i[e.Memo]=a;function l(D){return e.isMemo(D)?a:i[D.$$typeof]||r}var d=Object.defineProperty,c=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;function v(D,E,k){if(typeof E!="string"){if(y){var R=p(E);R&&R!==y&&v(D,R,k)}var _=c(E);m&&(_=_.concat(m(E)));for(var T=l(D),B=l(E),x=0;x<_.length;++x){var N=_[x];if(!n[N]&&!(k&&k[N])&&!(B&&B[N])&&!(T&&T[N])){var F=g(E,N);try{d(D,N,F)}catch{}}}}return D}return Fu=v,Fu}bj();var Wd=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=O.createContext(null)):O.createContext(null);Wd.Consumer;Wd.Provider;var wj=Wd;function uv(){var e=O.useContext(wj);return fj(e),e}var rd;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(rd||(rd={}));var ad;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ad||(ad={}));function dv(e){var r=function(n){var t=uv(),a=n.value,i=n.children,l=Hi(n,["value","children"]),d=typeof a=="string"?new Date(a||0):a,c=e==="formatDate"?t.formatDateToParts(d,l):t.formatTimeToParts(d,l);return i(c)};return r.displayName=ad[e],r}function to(e){var r=function(n){var t=uv(),a=n.value,i=n.children,l=Hi(n,["value","children"]),d=t[e](a,l);if(typeof i=="function")return i(d);var c=t.textComponent||O.Fragment;return O.createElement(c,null,d)};return r.displayName=rd[e],r}function cv(e){return e&&Object.keys(e).reduce(function(r,n){var t=e[n];return r[n]=rv(t)?yj(t):t,r},{})}var up=function(e,r,n,t){for(var a=[],i=4;i<arguments.length;i++)a[i-4]=arguments[i];var l=cv(t),d=td.apply(void 0,rr([e,r,n,l],a,!1));return Array.isArray(d)?hj(d):d},_j=function(e,r){var n=e.defaultRichTextElements,t=Hi(e,["defaultRichTextElements"]),a=cv(n),i=dj(ge(ge(ge({},mj),t),{defaultRichTextElements:a}),r),l={locale:i.locale,timeZone:i.timeZone,fallbackOnEmptyString:i.fallbackOnEmptyString,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:a};return ge(ge({},i),{formatMessage:up.bind(null,l,i.formatters),$t:up.bind(null,l,i.formatters)})};to("formatDate");to("formatTime");to("formatNumber");to("formatList");to("formatDisplayName");dv("formatDate");dv("formatTime");function Gd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sd={exports:{}},Tj=sd.exports,dp;function Sj(){return dp||(dp=1,function(e,r){(function(n,t){e.exports=t()})(Tj,function(){var n,t,a=1e3,i=6e4,l=36e5,d=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,g=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:m,months:g,days:d,hours:l,minutes:i,seconds:a,milliseconds:1,weeks:6048e5},v=function(N){return N instanceof B},D=function(N,F,A){return new B(N,A,F.$l)},E=function(N){return t.p(N)+"s"},k=function(N){return N<0},R=function(N){return k(N)?Math.ceil(N):Math.floor(N)},_=function(N){return Math.abs(N)},T=function(N,F){return N?k(N)?{negative:!0,format:""+_(N)+F}:{negative:!1,format:""+N+F}:{negative:!1,format:""}},B=function(){function N(A,j,Y){var V=this;if(this.$d={},this.$l=Y,A===void 0&&(this.$ms=0,this.parseFromMilliseconds()),j)return D(A*y[E(j)],this);if(typeof A=="number")return this.$ms=A,this.parseFromMilliseconds(),this;if(typeof A=="object")return Object.keys(A).forEach(function(U){V.$d[E(U)]=A[U]}),this.calMilliseconds(),this;if(typeof A=="string"){var G=A.match(p);if(G){var L=G.slice(2).map(function(U){return U!=null?Number(U):0});return this.$d.years=L[0],this.$d.months=L[1],this.$d.weeks=L[2],this.$d.days=L[3],this.$d.hours=L[4],this.$d.minutes=L[5],this.$d.seconds=L[6],this.calMilliseconds(),this}}return this}var F=N.prototype;return F.calMilliseconds=function(){var A=this;this.$ms=Object.keys(this.$d).reduce(function(j,Y){return j+(A.$d[Y]||0)*y[Y]},0)},F.parseFromMilliseconds=function(){var A=this.$ms;this.$d.years=R(A/m),A%=m,this.$d.months=R(A/g),A%=g,this.$d.days=R(A/d),A%=d,this.$d.hours=R(A/l),A%=l,this.$d.minutes=R(A/i),A%=i,this.$d.seconds=R(A/a),A%=a,this.$d.milliseconds=A},F.toISOString=function(){var A=T(this.$d.years,"Y"),j=T(this.$d.months,"M"),Y=+this.$d.days||0;this.$d.weeks&&(Y+=7*this.$d.weeks);var V=T(Y,"D"),G=T(this.$d.hours,"H"),L=T(this.$d.minutes,"M"),U=this.$d.seconds||0;this.$d.milliseconds&&(U+=this.$d.milliseconds/1e3,U=Math.round(1e3*U)/1e3);var W=T(U,"S"),H=A.negative||j.negative||V.negative||G.negative||L.negative||W.negative,J=G.format||L.format||W.format?"T":"",K=(H?"-":"")+"P"+A.format+j.format+V.format+J+G.format+L.format+W.format;return K==="P"||K==="-P"?"P0D":K},F.toJSON=function(){return this.toISOString()},F.format=function(A){var j=A||"YYYY-MM-DDTHH:mm:ss",Y={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return j.replace(c,function(V,G){return G||String(Y[V])})},F.as=function(A){return this.$ms/y[E(A)]},F.get=function(A){var j=this.$ms,Y=E(A);return Y==="milliseconds"?j%=1e3:j=Y==="weeks"?R(j/y[Y]):this.$d[Y],j||0},F.add=function(A,j,Y){var V;return V=j?A*y[E(j)]:v(A)?A.$ms:D(A,this).$ms,D(this.$ms+V*(Y?-1:1),this)},F.subtract=function(A,j){return this.add(A,j,!0)},F.locale=function(A){var j=this.clone();return j.$l=A,j},F.clone=function(){return D(this.$ms,this)},F.humanize=function(A){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!A)},F.valueOf=function(){return this.asMilliseconds()},F.milliseconds=function(){return this.get("milliseconds")},F.asMilliseconds=function(){return this.as("milliseconds")},F.seconds=function(){return this.get("seconds")},F.asSeconds=function(){return this.as("seconds")},F.minutes=function(){return this.get("minutes")},F.asMinutes=function(){return this.as("minutes")},F.hours=function(){return this.get("hours")},F.asHours=function(){return this.as("hours")},F.days=function(){return this.get("days")},F.asDays=function(){return this.as("days")},F.weeks=function(){return this.get("weeks")},F.asWeeks=function(){return this.as("weeks")},F.months=function(){return this.get("months")},F.asMonths=function(){return this.as("months")},F.years=function(){return this.get("years")},F.asYears=function(){return this.as("years")},N}(),x=function(N,F,A){return N.add(F.years()*A,"y").add(F.months()*A,"M").add(F.days()*A,"d").add(F.hours()*A,"h").add(F.minutes()*A,"m").add(F.seconds()*A,"s").add(F.milliseconds()*A,"ms")};return function(N,F,A){n=A,t=A().$utils(),A.duration=function(V,G){var L=A.locale();return D(V,{$l:L},G)},A.isDuration=v;var j=F.prototype.add,Y=F.prototype.subtract;F.prototype.add=function(V,G){return v(V)?x(this,V,1):j.bind(this)(V,G)},F.prototype.subtract=function(V,G){return v(V)?x(this,V,-1):Y.bind(this)(V,G)}}})}(sd)),sd.exports}var Ej=Sj();const Oj=Gd(Ej);var od={exports:{}},Dj=od.exports,cp;function xj(){return cp||(cp=1,function(e,r){(function(n,t){e.exports=t()})(Dj,function(){var n="day";return function(t,a,i){var l=function(m){return m.add(4-m.isoWeekday(),n)},d=a.prototype;d.isoWeekYear=function(){return l(this).year()},d.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),n);var g,p,y,v,D=l(this),E=(g=this.isoWeekYear(),p=this.$u,y=(p?i.utc:i)().year(g).startOf("year"),v=4-y.isoWeekday(),y.isoWeekday()>4&&(v+=7),y.add(v,n));return D.diff(E,"week")+1},d.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var c=d.startOf;d.startOf=function(m,g){var p=this.$utils(),y=!!p.u(g)||g;return p.p(m)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(m,g)}}})}(od)),od.exports}var Rj=xj();const Fj=Gd(Rj);var id={exports:{}},Aj=id.exports,fp;function Nj(){return fp||(fp=1,function(e,r){(function(n,t){e.exports=t()})(Aj,function(){var n="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(i,l,d){var c=l.prototype;d.utc=function(E){var k={date:E,utc:!0,args:arguments};return new l(k)},c.utc=function(E){var k=d(this.toDate(),{locale:this.$L,utc:!0});return E?k.add(this.utcOffset(),n):k},c.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var m=c.parse;c.parse=function(E){E.utc&&(this.$u=!0),this.$utils().u(E.$offset)||(this.$offset=E.$offset),m.call(this,E)};var g=c.init;c.init=function(){if(this.$u){var E=this.$d;this.$y=E.getUTCFullYear(),this.$M=E.getUTCMonth(),this.$D=E.getUTCDate(),this.$W=E.getUTCDay(),this.$H=E.getUTCHours(),this.$m=E.getUTCMinutes(),this.$s=E.getUTCSeconds(),this.$ms=E.getUTCMilliseconds()}else g.call(this)};var p=c.utcOffset;c.utcOffset=function(E,k){var R=this.$utils().u;if(R(E))return this.$u?0:R(this.$offset)?p.call(this):this.$offset;if(typeof E=="string"&&(E=function(x){x===void 0&&(x="");var N=x.match(t);if(!N)return null;var F=(""+N[0]).match(a)||["-",0,0],A=F[0],j=60*+F[1]+ +F[2];return j===0?0:A==="+"?j:-j}(E),E===null))return this;var _=Math.abs(E)<=16?60*E:E,T=this;if(k)return T.$offset=_,T.$u=E===0,T;if(E!==0){var B=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(T=this.local().add(_+B,n)).$offset=_,T.$x.$localOffset=B}else T=this.utc();return T};var y=c.format;c.format=function(E){var k=E||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,k)},c.valueOf=function(){var E=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*E},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var v=c.toDate;c.toDate=function(E){return E==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():v.call(this)};var D=c.diff;c.diff=function(E,k,R){if(E&&this.$u===E.$u)return D.call(this,E,k,R);var _=this.local(),T=d(E).local();return D.call(_,T,k,R)}}})}(id)),id.exports}var Pj=Nj();const Mj=Gd(Pj),Bj=ov(),Vi=e=>_j({locale:"nb-NO",messages:e},Bj),Ui={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Vi(Ui);var ld={exports:{}},qj=ld.exports,mp;function jj(){return mp||(mp=1,function(e,r){(function(n,t){e.exports=t(Js)})(qj,function(n){function t(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var a=t(n),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(l){return l+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(i,null,!0),i})}(ld)),ld.exports}jj();Js.extend(Mj);Js.extend(Fj);Js.extend(Oj);Vi(Ui);Vi(Ui);var gp={exports:{}},As={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function Ij(){if(pp)return As;pp=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var l=null;if(i!==void 0&&(l=""+i),a.key!==void 0&&(l=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:i}}return As.Fragment=r,As.jsx=n,As.jsxs=n,As}var hp;function Cj(){return hp||(hp=1,gp.exports=Ij()),gp.exports}Cj();Vi(Ui);O.createContext({});var ud={exports:{}},Lj=ud.exports,yp;function $j(){return yp||(yp=1,function(e,r){(function(n,t){e.exports=t()})(Lj,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,l=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,c={},m=function(k){return(k=+k)+(k>68?1900:2e3)},g=function(k){return function(R){this[k]=+R}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(k){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var _=R.match(/([+-]|\d\d)/g),T=60*_[1]+(+_[2]||0);return T===0?0:_[0]==="+"?-T:T}(k)}],y=function(k){var R=c[k];return R&&(R.indexOf?R:R.s.concat(R.f))},v=function(k,R){var _,T=c.meridiem;if(T){for(var B=1;B<=24;B+=1)if(k.indexOf(T(B,0,R))>-1){_=B>12;break}}else _=k===(R?"pm":"PM");return _},D={A:[d,function(k){this.afternoon=v(k,!1)}],a:[d,function(k){this.afternoon=v(k,!0)}],Q:[a,function(k){this.month=3*(k-1)+1}],S:[a,function(k){this.milliseconds=100*+k}],SS:[i,function(k){this.milliseconds=10*+k}],SSS:[/\d{3}/,function(k){this.milliseconds=+k}],s:[l,g("seconds")],ss:[l,g("seconds")],m:[l,g("minutes")],mm:[l,g("minutes")],H:[l,g("hours")],h:[l,g("hours")],HH:[l,g("hours")],hh:[l,g("hours")],D:[l,g("day")],DD:[i,g("day")],Do:[d,function(k){var R=c.ordinal,_=k.match(/\d+/);if(this.day=_[0],R)for(var T=1;T<=31;T+=1)R(T).replace(/\[|\]/g,"")===k&&(this.day=T)}],w:[l,g("week")],ww:[i,g("week")],M:[l,g("month")],MM:[i,g("month")],MMM:[d,function(k){var R=y("months"),_=(y("monthsShort")||R.map(function(T){return T.slice(0,3)})).indexOf(k)+1;if(_<1)throw new Error;this.month=_%12||_}],MMMM:[d,function(k){var R=y("months").indexOf(k)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,g("year")],YY:[i,function(k){this.year=m(k)}],YYYY:[/\d{4}/,g("year")],Z:p,ZZ:p};function E(k){var R,_;R=k,_=c&&c.formats;for(var T=(k=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,V,G){var L=G&&G.toUpperCase();return V||_[G]||n[G]||_[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(U,W,H){return W||H.slice(1)})})).match(t),B=T.length,x=0;x<B;x+=1){var N=T[x],F=D[N],A=F&&F[0],j=F&&F[1];T[x]=j?{regex:A,parser:j}:N.replace(/^\[|\]$/g,"")}return function(Y){for(var V={},G=0,L=0;G<B;G+=1){var U=T[G];if(typeof U=="string")L+=U.length;else{var W=U.regex,H=U.parser,J=Y.slice(L),K=W.exec(J)[0];H.call(V,K),Y=Y.replace(K,"")}}return function(te){var se=te.afternoon;if(se!==void 0){var le=te.hours;se?le<12&&(te.hours+=12):le===12&&(te.hours=0),delete te.afternoon}}(V),V}}return function(k,R,_){_.p.customParseFormat=!0,k&&k.parseTwoDigitYear&&(m=k.parseTwoDigitYear);var T=R.prototype,B=T.parse;T.parse=function(x){var N=x.date,F=x.utc,A=x.args;this.$u=F;var j=A[1];if(typeof j=="string"){var Y=A[2]===!0,V=A[3]===!0,G=Y||V,L=A[2];V&&(L=A[2]),c=this.$locale(),!Y&&L&&(c=_.Ls[L]),this.$d=function(J,K,te,se){try{if(["x","X"].indexOf(K)>-1)return new Date((K==="X"?1e3:1)*J);var le=E(K)(J),Te=le.year,Oe=le.month,nn=le.day,me=le.hours,he=le.minutes,Le=le.seconds,Ge=le.milliseconds,on=le.zone,en=le.week,ln=new Date,gn=nn||(Te||Oe?1:ln.getDate()),Rn=Te||ln.getFullYear(),rn=0;Te&&!Oe||(rn=Oe>0?Oe-1:ln.getMonth());var Dn,ct=me||0,kn=he||0,ft=Le||0,rt=Ge||0;return on?new Date(Date.UTC(Rn,rn,gn,ct,kn,ft,rt+60*on.offset*1e3)):te?new Date(Date.UTC(Rn,rn,gn,ct,kn,ft,rt)):(Dn=new Date(Rn,rn,gn,ct,kn,ft,rt),en&&(Dn=se(Dn).week(en).toDate()),Dn)}catch{return new Date("")}}(N,j,F,_),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),G&&N!=this.format(j)&&(this.$d=new Date("")),c={}}else if(j instanceof Array)for(var U=j.length,W=1;W<=U;W+=1){A[1]=j[W-1];var H=_.apply(this,A);if(H.isValid()){this.$d=H.$d,this.$L=H.$L,this.init();break}W===U&&(this.$d=new Date(""))}else B.call(this,x)}}})}(ud)),ud.exports}var Hj=$j();const Vj=Ly(Hj);Js.extend(Vj);_t(Zs);const Uj=(e,r,n,t)=>e&&Object.keys(r).length>0?lr(Object.values(r)[0]):t?lr(t):e?n?lr(n):"-":null,fv=({soknad:e,termindato:r})=>{const n=e.fodselsdatoer?e.fodselsdatoer:{},t=Object.keys(n).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(n).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",i=Uj(!!e,n,e.termindato,r);return Q.jsxs(Bt,{gap:"4",children:[Q.jsx(xi,{size:"small",children:Q.jsx(yn,{id:a})}),Q.jsxs(Yt,{gap:"4",children:[e.utstedtdato&&Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.UstedtDato"})}),Q.jsx(mn,{size:"small",children:lr(e.utstedtdato)})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:t})}),Q.jsx(mn,{size:"small",children:i})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.AntallBarn"})}),Q.jsx(mn,{size:"small",children:e.antallBarn})]})]})]})};fv.__docgenInfo={description:`FodselSammenligningOtherPanel

Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.`,methods:[],displayName:"FodselSammenligningOtherPanel",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const Wj=(e,r,n)=>{if(!r&&!n)return"";const t=n??{termindato:void 0,avklartBarn:[]};if(e){const a=(t==null?void 0:t.termindato)??(r==null?void 0:r.termindato);return a?lr(a):void 0}return t.avklartBarn&&t.avklartBarn.length>0?lr(t.avklartBarn[0].fodselsdato):r!=null&&r.fodselsdatoer?lr(Object.values(r.fodselsdatoer)[0]):"-"},Gj=(e,r,n)=>{if(!r&&!n)return 0;const t=n??{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?t.termindato?t.antallBarnTermin:r==null?void 0:r.antallBarn:t.avklartBarn&&t.avklartBarn.length>0?t.avklartBarn.length:r==null?void 0:r.antallBarn},mv=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:r,familiehendelseOriginalBehandling:n})=>{const t=n&&!!n.termindato||!(r!=null&&r.fodselsdatoer)||Object.keys(r.fodselsdatoer).length===0,a=t?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",i=Wj(t,r,n),l=Gj(t,r,n),d=n?(!n.avklartBarn||n.avklartBarn.length===0)&&!!e:!1;return Q.jsxs(Bt,{gap:"4",children:[Q.jsx(xi,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),Q.jsxs(Yt,{gap:"4",children:[d&&Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),Q.jsx(mn,{size:"small",children:e})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:a})}),Q.jsx(mn,{size:"small",children:i??"-"})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.AntallBarn"})}),Q.jsx(mn,{size:"small",children:l??"-"})]})]})]})};mv.__docgenInfo={description:`FodselSammenligningRevurderingPanel

Presentasjonskomponent. Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.`,methods:[],displayName:"FodselSammenligningRevurderingPanel",props:{soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelseOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const Yj="_noChildrenInTps_yb1cb_1",zj="_col_yb1cb_5",Au={noChildrenInTps:Yj,col:zj},gv=({behandlingsTypeKode:e,avklartBarn:r,nrOfDodfodteBarn:n,soknad:t,vedtaksDatoSomSvangerskapsuke:a,termindato:i,soknadOriginalBehandling:l,familiehendelseOriginalBehandling:d})=>Q.jsxs(Yt,{gap:"10",children:[Q.jsxs("div",{className:Au.col,children:[e!==Om.REVURDERING&&Q.jsx(fv,{soknad:t,termindato:i}),e===Om.REVURDERING&&Q.jsx(mv,{soknadOriginalBehandling:l,familiehendelseOriginalBehandling:d,vedtaksDatoSomSvangerskapsuke:a})]}),Q.jsxs("div",{className:Au.col,children:[Q.jsxs(Yt,{gap:"4",children:[Q.jsx(xi,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.OpplysningerTPS"})}),n>0&&Q.jsx(Cu,{variant:"info",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Dodfodt"})})]}),r.length>0&&Q.jsxs(Bn,{children:[Q.jsx(Bn.Header,{children:Q.jsxs(Bn.Row,{children:[Q.jsx(Bn.HeaderCell,{scope:"col",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Fodselsdato"})}),Q.jsx(Bn.HeaderCell,{scope:"col",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Dodsdato"})}),Q.jsx(Bn.HeaderCell,{scope:"col"})]})}),Q.jsx(Bn.Body,{children:r.map(c=>{const m=c.fodselsdato+c.dodsdato;return Q.jsxs(Bn.Row,{id:m,children:[Q.jsx(Bn.DataCell,{children:Q.jsx(mn,{size:"small",children:lr(c.fodselsdato)})}),Q.jsx(Bn.DataCell,{children:Q.jsx(mn,{size:"small",children:c.dodsdato?lr(c.dodsdato):"-"})}),Q.jsx(Bn.DataCell,{children:c.dodsdato&&Q.jsx(Cu,{variant:"info",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Dod"})})})]},m)})})]}),r.length===0&&Q.jsx("div",{className:Au.noChildrenInTps,children:Q.jsx(mn,{size:"small",children:"-"})})]})]});gv.__docgenInfo={description:`FodselSammenlingningPanel

Presentasjonskomponent. Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.`,methods:[],displayName:"FodselSammenligningPanel",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]"},description:""},nrOfDodfodteBarn:{required:!0,tsType:{name:"number"},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelseOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const Kj={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},Xj=_t(Kj),Yd=({behandlingsTypeKode:e,avklartBarn:r=[],termindato:n,vedtaksDatoSomSvangerskapsuke:t,soknad:a,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:l})=>{const d=r.reduce((c,m)=>c+(m.dodsdato?1:0),0);return Q.jsx(Oi,{value:Xj,children:Q.jsx(gv,{avklartBarn:r,termindato:n,vedtaksDatoSomSvangerskapsuke:t,nrOfDodfodteBarn:d,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:l})})};Yd.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]"},description:"",defaultValue:{value:"[]",computed:!1}},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelseOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`},description:""}}};const Nu="avklartBarn",Zj={fodselsdato:void 0,dodsdato:void 0},pv=({readOnly:e})=>{const r=Si(),{control:n,watch:t}=Kt(),{fields:a,remove:i,append:l}=nP({control:n,name:Nu}),d=t("avklartBarn");return Q.jsx(eM,{fields:a,emptyPeriodTemplate:Zj,readOnly:e,bodyText:r.formatMessage({id:"AvklartBarnFieldArray.LeggTilBarn"}),shouldShowAddButton:d.length<9,remove:i,append:l,children:(c,m,g=()=>"-")=>Q.jsx(w.Fragment,{children:Q.jsxs(Yt,{gap:"4",align:"end",children:[Q.jsx(_i,{name:`${Nu}.${m}.fodselsdato`,label:r.formatMessage({id:"AvklartBarnFieldArray.Title"}),validate:[Ti,Wa,Ig],isReadOnly:e}),Q.jsx(_i,{name:`${Nu}.${m}.dodsdato`,label:r.formatMessage({id:"AvklartBarnFieldArray.Dodsdato"}),validate:[Ti,Ig],isReadOnly:e}),!e&&g()]})},c.id)})};pv.__docgenInfo={description:"",methods:[],displayName:"AvklartBarnFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Qj="_clearfix_yy4j0_1",Jj={clearfix:Qj},ss=({readOnly:e,submittable:r,behandlingType:n,soknad:t,soknadOriginalBehandling:a,familiehendelseOriginalBehandling:i,alleMerknaderFraBeslutter:l,familiehendelse:d})=>{const c=Si(),{watch:m}=Kt(),{gjeldende:g,register:p}=d,y=m("dokumentasjonForeligger")||!1,v=m("begrunnelse")||!1,D=Iy(t,g).dokumentasjonForeligger,{termindato:E,vedtaksDatoSomSvangerskapsuke:k}=g;return Q.jsxs(Bt,{gap:"4",children:[Q.jsx(Yd,{behandlingsTypeKode:n,avklartBarn:p==null?void 0:p.avklartBarn,termindato:E,vedtaksDatoSomSvangerskapsuke:k,soknad:t,soknadOriginalBehandling:a,familiehendelseOriginalBehandling:i}),Q.jsx(Uu,{title:c.formatMessage({id:"SjekkFodselDokForm.DokumentasjonAvFodsel"}),merknaderFraBeslutter:l[qt.SJEKK_MANGLENDE_FODSEL],children:Q.jsxs(Bt,{gap:"2",children:[Q.jsx(UP,{name:"dokumentasjonForeligger",isEdited:D,hideLegend:!0,validate:[Wa],isReadOnly:e,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:Q.jsx(yn,{id:"SjekkFodselDokForm.DokumentasjonForeligger"}),value:"true"},{label:Q.jsx(yn,{id:"SjekkFodselDokForm.DokumentasjonForeliggerIkke"}),value:"false"}]}),y&&Q.jsx("div",{className:Jj.clearfix,children:Q.jsx(cP,{children:Q.jsxs(Bt,{gap:"2",children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"SjekkFodselDokForm.FyllInnDokumenterteOpplysninger"})}),Q.jsx(pv,{readOnly:e})]})})})]})}),Q.jsx(Nr,{isSubmittable:r,isReadOnly:e,hasBegrunnelse:!!v})]})},eI=e=>{let r=e;(r===0||!r)&&(r=1);const n=[];for(;r>0;)n.push({fodselsdato:void 0,dodsdato:void 0}),r-=1;return n},nI=e=>e.map(r=>({fodselsdato:r.fodselsdato,dodsdato:r.dodsdato===""||r.dodsdato===null?void 0:r.dodsdato}));ss.buildInitialValues=(e,r,n)=>({dokumentasjonForeligger:r.dokumentasjonForeligger!==null?r.dokumentasjonForeligger:void 0,brukAntallBarnITps:r.brukAntallBarnFraTps!==null?r.brukAntallBarnFraTps:void 0,avklartBarn:r.avklartBarn&&r.avklartBarn.length>0?r.avklartBarn:eI(e.antallBarn||0),...Nr.initialValues(n)});ss.transformValues=(e,r)=>({kode:qt.SJEKK_MANGLENDE_FODSEL,dokumentasjonForeligger:e.dokumentasjonForeligger,uidentifiserteBarn:nI(e.avklartBarn),brukAntallBarnITps:r&&r.length?e.brukAntallBarnITps:!1,...Nr.transformValues(e)});ss.__docgenInfo={description:`FodselInfoPanel

Setter opp aksjonspunktet for avklaring av manglende fødsel (Fødselsvilkåret).`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"soknad",optional:!1,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,alias:"Soknad"}},{name:"familiehendelse",optional:!1,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,alias:"FamilieHendelse"}},{name:"aksjonspunkt",optional:!1,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,alias:"Aksjonspunkt"}}],returns:{type:{name:"intersection",raw:`{
  fodselsdato?: string;
  dokumentasjonForeligger?: boolean;
  brukAntallBarnITps?: boolean;
  avklartBarn?: AvklartBarn[];
  antallBarnFodt?: number;
} & FaktaBegrunnelseFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fodselsdato?: string;
  dokumentasjonForeligger?: boolean;
  brukAntallBarnITps?: boolean;
  avklartBarn?: AvklartBarn[];
  antallBarnFodt?: number;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"brukAntallBarnITps",value:{name:"boolean",required:!1}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"antallBarnFodt",value:{name:"number",required:!1}}]}},{name:"FormValues"}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
  fodselsdato?: string;
  dokumentasjonForeligger?: boolean;
  brukAntallBarnITps?: boolean;
  avklartBarn?: AvklartBarn[];
  antallBarnFodt?: number;
} & FaktaBegrunnelseFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fodselsdato?: string;
  dokumentasjonForeligger?: boolean;
  brukAntallBarnITps?: boolean;
  avklartBarn?: AvklartBarn[];
  antallBarnFodt?: number;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"brukAntallBarnITps",value:{name:"boolean",required:!1}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"antallBarnFodt",value:{name:"number",required:!1}}]}},{name:"FormValues"}],alias:"FormValues"}},{name:"avklartBarn",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]"}}],returns:{type:{name:"intersection",raw:`{
  dokumentasjonForeligger: boolean;
  brukAntallBarnITps: boolean;
  uidentifiserteBarn: {
    fodselsdato: string;
    dodsdato?: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_MANGLENDE_FODSEL>`,elements:[{name:"signature",type:"object",raw:`{
  dokumentasjonForeligger: boolean;
  brukAntallBarnITps: boolean;
  uidentifiserteBarn: {
    fodselsdato: string;
    dodsdato?: string;
  }[];
}`,signature:{properties:[{key:"dokumentasjonForeligger",value:{name:"boolean",required:!0}},{key:"brukAntallBarnITps",value:{name:"boolean",required:!0}},{key:"uidentifiserteBarn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`{
  fodselsdato: string;
  dodsdato?: string;
}[]`,required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}}}],displayName:"SjekkFodselDokForm",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"register",value:{name:"union",raw:"FamilieHendelse | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},avklartBarn:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},behandlingType:{required:!0,tsType:{name:"string"},description:""},soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelseOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`},description:""}}};const tI="_marginBottom_u0i22_1",rI="_bredde_u0i22_5",vp={marginBottom:tI,bredde:rI},aI=nB(1),sI=tB(9),oI=(e,r)=>!!e&&!!r&&!ut(e).isAfter(ut(r).subtract(18,"weeks").subtract(4,"days")),os=({readOnly:e,soknad:r,gjeldendeFamiliehendelse:n,submittable:t,alleMerknaderFraBeslutter:a})=>{const i=Si(),l=Iy(r,n),{watch:d}=Kt(),c=d("termindato"),m=d("utstedtdato"),g=d("begrunnelse"),p=oI(m,c),{avklartBarn:y}=n,v=y&&y.length>0?y[0].fodselsdato:void 0,D=y?y.length:0,E=n.erOverstyrt||!1;return Q.jsxs(Q.Fragment,{children:[Q.jsx(Uu,{title:i.formatMessage({id:"TermindatoFaktaForm.ApplicationInformation"}),merknaderFraBeslutter:a[qt.TERMINBEKREFTELSE],children:Q.jsxs(Yt,{gap:"4",children:[Q.jsx(_i,{name:"utstedtdato",label:i.formatMessage({id:"TermindatoFaktaForm.UtstedtDato"}),validate:[Wa,Ti],isReadOnly:e,isEdited:l.utstedtdato}),Q.jsx(_i,{name:"termindato",label:i.formatMessage({id:"TermindatoFaktaForm.Termindato"}),validate:[Wa,Ti],isReadOnly:e,isEdited:l.termindato}),Q.jsx($P,{name:"antallBarn",label:i.formatMessage({id:"TermindatoFaktaForm.AntallBarn"}),parse:k=>{const R=parseInt(k.toString(),10);return Number.isNaN(R)?k:R},validate:[Wa,sB,aI,sI],readOnly:e,className:vp.bredde,isEdited:l.antallBarn})]})}),Q.jsxs(Bt,{gap:"4",children:[v&&!E&&Q.jsx(Uu,{title:i.formatMessage({id:"TermindatoFaktaForm.OpplysningerTPS"}),children:Q.jsxs(Yt,{gap:"10",children:[Q.jsxs(Bt,{gap:"2",children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"TermindatoFaktaForm.FodselsdatoTps"})}),Q.jsx(mn,{size:"small",children:Q.jsx(SP,{dateString:v})})]}),Q.jsxs(Bt,{gap:"2",children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"TermindatoFaktaForm.AntallBarnTps"})}),Q.jsx(mn,{size:"small",children:D})]})]})}),Q.jsx(Nr,{isSubmittable:t,isReadOnly:e,hasBegrunnelse:!!g}),p&&Q.jsx(ch,{variant:"warning",className:vp.marginBottom,children:Q.jsx(yn,{id:"TermindatoFaktaForm.AdvarselForTidligUtstedtdato"})})]})]})};os.buildInitialValues=(e,r,n)=>{const t=e.antallBarn?e.antallBarn:NaN,a=e.utstedtdato??void 0;return{utstedtdato:r.utstedtdato??a,termindato:r.termindato??e.termindato,antallBarn:r.antallBarnTermin??t,...Nr.initialValues(n)}};os.transformValues=e=>({kode:qt.TERMINBEKREFTELSE,utstedtdato:e.utstedtdato,termindato:e.termindato,antallBarn:e.antallBarn,...Nr.transformValues(e)});os.__docgenInfo={description:`TermindatoFaktaForm

Setter opp aksjonspunktet for avklaring av termindato (Fødselsvilkåret).`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"soknad",optional:!1,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,alias:"Soknad"}},{name:"familiehendelse",optional:!1,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,alias:"FamilieHendelse"}},{name:"aksjonspunkt",optional:!1,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,alias:"Aksjonspunkt"}}],returns:{type:{name:"intersection",raw:`{
  utstedtdato?: string;
  termindato?: string;
  antallBarn?: number;
} & FaktaBegrunnelseFormValues`,elements:[{name:"signature",type:"object",raw:`{
  utstedtdato?: string;
  termindato?: string;
  antallBarn?: number;
}`,signature:{properties:[{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}},{name:"FormValues"}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
  utstedtdato?: string;
  termindato?: string;
  antallBarn?: number;
} & FaktaBegrunnelseFormValues`,elements:[{name:"signature",type:"object",raw:`{
  utstedtdato?: string;
  termindato?: string;
  antallBarn?: number;
}`,signature:{properties:[{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}},{name:"FormValues"}],alias:"FormValues"}}],returns:{type:{name:"intersection",raw:`{
  utstedtdato: string;
  termindato: string;
  antallBarn: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.TERMINBEKREFTELSE>`,elements:[{name:"signature",type:"object",raw:`{
  utstedtdato: string;
  termindato: string;
  antallBarn: number;
}`,signature:{properties:[{key:"utstedtdato",value:{name:"string",required:!0}},{key:"termindato",value:{name:"string",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}}}],displayName:"TermindatoFaktaForm",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},gjeldendeFamiliehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const{TERMINBEKREFTELSE:dd,SJEKK_MANGLENDE_FODSEL:cd}=qt,iI=e=>{const r=[];return oi(dd,e)&&r.push(Q.jsx(yn,{id:"FodselInfoPanel.KontrollerMotTerminbekreftelsen"},"KontrollerMotTerminbekreftelsen")),oi(cd,e)&&r.push(Q.jsx(yn,{id:"FodselInfoPanel.KontrollerMotFodselsdokumentasjon"},"KontrollerMotFodselsdokumentasjon")),r},lI=(e,r,n,t)=>({...n?os.buildInitialValues(e,r.gjeldende,n):{},...t?ss.buildInitialValues(e,r.gjeldende,t):{}}),uI=(e,r,n,t)=>{const a=[];return n&&a.push(os.transformValues(e)),t&&a.push(ss.transformValues(e,r)),a},hv=({submittable:e,soknad:r,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:t,familiehendelse:a})=>{var T,B,x;const{submitCallback:i,behandling:l,aksjonspunkterForPanel:d,harÅpneAksjonspunkter:c,alleMerknaderFraBeslutter:m,isReadOnly:g}=XT(),p=((T=a==null?void 0:a.register)==null?void 0:T.avklartBarn)??[],y=((B=a==null?void 0:a.gjeldende)==null?void 0:B.termindato)??void 0,v=((x=a==null?void 0:a.gjeldende)==null?void 0:x.vedtaksDatoSomSvangerskapsuke)??void 0,D=d.find(N=>N.definisjon===dd),E=d.find(N=>N.definisjon===cd),{mellomlagretFormData:k,setMellomlagretFormData:R}=ZT(),_=tP({defaultValues:k??lI(r,a,D,E)});return Q.jsxs(Bt,{gap:"2",children:[c&&Q.jsx(oP,{children:iI(d)}),Q.jsx(zP,{formMethods:_,onSubmit:N=>i(uI(N,p,D,E)),setDataOnUnmount:R,children:Q.jsxs(Bt,{gap:"2",children:[oi(dd,d)&&Q.jsx(os,{readOnly:g,submittable:e,alleMerknaderFraBeslutter:m,soknad:r,gjeldendeFamiliehendelse:a.gjeldende}),oi(cd,d)&&Q.jsx(ss,{behandlingType:l.type,readOnly:g,submittable:e,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:t,alleMerknaderFraBeslutter:m,soknad:r,avklartBarn:p,familiehendelse:a}),d.length!==0&&!g&&Q.jsx(jy,{isSubmittable:e,isReadOnly:g,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isDirty}),d.length===0&&Q.jsx(Yd,{behandlingsTypeKode:l.type,avklartBarn:p,termindato:y,vedtaksDatoSomSvangerskapsuke:v,soknad:r,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:t})]})})]})};hv.__docgenInfo={description:`FodselInfoPanel

Har ansvar for å sette opp formen for faktapenelet til Fødselsvilkåret.`,methods:[],displayName:"FodselInfoPanel",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"register",value:{name:"union",raw:"FamilieHendelse | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}>`},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelseOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`},description:""}}};const dI={"FodselInfoPanel.KontrollerMotTerminbekreftelsen":"Kontroller terminbekreftelse","FodselInfoPanel.KontrollerMotFodselsdokumentasjon":"Kontroller mot opplysningene fra fødselsdokumentasjonen","TermindatoFaktaForm.ApplicationInformation":"Opplysninger om termin oppgitt i søknaden","TermindatoFaktaForm.UtstedtDato":"Utstedt dato","TermindatoFaktaForm.Termindato":"Termindato","TermindatoFaktaForm.AntallBarn":"Antall barn","TermindatoFaktaForm.CheckInformation":"Kontroller og godkjenn opplysningene i terminbekreftelsen","TermindatoFaktaForm.14WeeksAndThreeDays":"Utstedtdato kan ikke være før 26. svangerskapsuke","TermindatoFaktaForm.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","TermindatoFaktaForm.FodselsdatoTps":"Fødselsdato","TermindatoFaktaForm.AntallBarnTps":"Antall barn","TermindatoFaktaForm.AdvarselForTidligUtstedtdato":"Terminbekreftelsen utstedt før 22. svangerskapsuke. Kontakt søker for en nyere terminbekreftelse og sett saken på vent. Fortsett dersom ny bekreftelse ikke skal hentes inn. Behandlingen vil avslås på grunn av manglende dokumentasjon","AvklartBarnFieldArray.Title":"Fødselsdato","AvklartBarnFieldArray.Dodsdato":"Dødsdato","AvklartBarnFieldArray.LeggTilBarn":"Legg til barn","SjekkFodselDokForm.DokumentasjonForeligger":"Dokumentasjon foreligger","SjekkFodselDokForm.DokumentasjonForeliggerIkke":"Dokumentasjon foreligger ikke, bruk opplysningene i folkeregisteret","SjekkFodselDokForm.DokumentasjonAvFodsel":"Dokumentasjon av fødsel","SjekkFodselDokForm.FyllInnDokumenterteOpplysninger":"Fyll inn dokumenterte opplysninger"},cI=_t(dI),fd=e=>Q.jsx(Oi,{value:cI,children:Q.jsx(hv,{...e})});fd.__docgenInfo={description:"",methods:[],displayName:"FodselFaktaIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"register",value:{name:"union",raw:"FamilieHendelse | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}>`},description:""},soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelseOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const fI={register:{avklartBarn:[{fodselsdato:"2019-01-10"}]},gjeldende:{avklartBarn:[{fodselsdato:"2019-01-01"}],termindato:"2019-01-01",utstedtdato:"2019-01-01",antallBarnTermin:1,vedtaksDatoSomSvangerskapsuke:43,erOverstyrt:!1,morForSykVedFodsel:!0,dokumentasjonForeligger:!0,brukAntallBarnFraTps:!0}},yv={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1,soknadType:qp.FODSEL},mI={...yv},gI={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},zd=[{definisjon:qt.TERMINBEKREFTELSE,status:Pp.OPPRETTET,begrunnelse:null,kanLoses:!0}],Kd={notAccepted:!1},kI={title:"fakta/fakta-fodsel",component:fd,decorators:[QT,JT],args:{submittable:!0,soknad:yv,familiehendelse:fI,soknadOriginalBehandling:mI,familiehendelseOriginalBehandling:gI},render:e=>Q.jsx(fd,{...e})},Jo={args:{aksjonspunkterForPanel:zd,alleMerknaderFraBeslutter:{[qt.TERMINBEKREFTELSE]:Kd}}},ei={args:{aksjonspunkterForPanel:zd.map(e=>({...e,definisjon:qt.SJEKK_MANGLENDE_FODSEL})),alleMerknaderFraBeslutter:{[qt.SJEKK_MANGLENDE_FODSEL]:Kd}}},ni={args:{isReadOnly:!0,aksjonspunkterForPanel:zd.map(e=>({...e,status:Pp.UTFORT,definisjon:qt.SJEKK_MANGLENDE_FODSEL,begrunnelse:"Dette er en begrunnelse"})),alleMerknaderFraBeslutter:{[qt.SJEKK_MANGLENDE_FODSEL]:Kd}}},ti={args:{aksjonspunkterForPanel:[],alleMerknaderFraBeslutter:{}}};var kp,bp,wp;Jo.parameters={...Jo.parameters,docs:{...(kp=Jo.parameters)==null?void 0:kp.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: defaultAksjonspunkter,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.TERMINBEKREFTELSE]: merknaderFraBeslutter
    }
  }
}`,...(wp=(bp=Jo.parameters)==null?void 0:bp.docs)==null?void 0:wp.source}}};var _p,Tp,Sp;ei.parameters={...ei.parameters,docs:{...(_p=ei.parameters)==null?void 0:_p.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: defaultAksjonspunkter.map(a => ({
      ...a,
      definisjon: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL
    })),
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter
    }
  }
}`,...(Sp=(Tp=ei.parameters)==null?void 0:Tp.docs)==null?void 0:Sp.source}}};var Ep,Op,Dp;ni.parameters={...ni.parameters,docs:{...(Ep=ni.parameters)==null?void 0:Ep.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    aksjonspunkterForPanel: defaultAksjonspunkter.map(a => ({
      ...a,
      status: AksjonspunktStatus.UTFORT,
      definisjon: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
      begrunnelse: 'Dette er en begrunnelse'
    })),
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter
    }
  }
}`,...(Dp=(Op=ni.parameters)==null?void 0:Op.docs)==null?void 0:Dp.source}}};var xp,Rp,Fp;ti.parameters={...ti.parameters,docs:{...(xp=ti.parameters)==null?void 0:xp.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    alleMerknaderFraBeslutter: {}
  }
}`,...(Fp=(Rp=ti.parameters)==null?void 0:Rp.docs)==null?void 0:Fp.source}}};const bI=["AksjonspunktTerminbekreftelse","AksjonspunktSjekkManglendeFødsel","ReadonlyPanel","PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter"];export{ei as AksjonspunktSjekkManglendeFødsel,Jo as AksjonspunktTerminbekreftelse,ti as PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter,ni as ReadonlyPanel,bI as __namedExportsOrder,kI as default};
