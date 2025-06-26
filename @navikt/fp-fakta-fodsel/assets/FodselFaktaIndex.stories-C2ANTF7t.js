var KT=Object.defineProperty;var XT=(e,r,n)=>r in e?KT(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var ce=(e,r,n)=>XT(e,typeof r!="symbol"?r+"":r,n);import{g as Hp,r as O,u as xi,_ as Mm,s as Bm,c as Gs,a as ke,R as b,b as Ri,m as ZT,d as ss,S as os,e as Vp,f as Ys,q as QT,o as dr,h as _t,i as lt,P as Ha,n as Is,j as Q,k as Fi,l as JT,p as Zo,B as qm,t as eS,v as nS,w as tS,x as rS,A as Up}from"./iframe-BlYdD8Kd.js";import{r as aS}from"./index-D-V6_hYM.js";var Sd=aS();const Wp=Hp(Sd);function sS(e,r){var n=e.values,t=Mm(e,["values"]),a=r.values,i=Mm(r,["values"]);return Bm(a,n)&&Bm(t,i)}function Gp(e){var r=xi(),n=r.formatMessage,t=r.textComponent,a=t===void 0?O.Fragment:t,i=e.id,u=e.description,d=e.defaultMessage,c=e.values,m=e.children,g=e.tagName,p=g===void 0?a:g,y=e.ignoreTag,v={id:i,description:u,defaultMessage:d},D=n(v,c,{ignoreTag:y});return typeof m=="function"?m(Array.isArray(D)?D:[D]):p?O.createElement(p,null,D):O.createElement(O.Fragment,null,D)}Gp.displayName="FormattedMessage";var yn=O.memo(Gp,sS);yn.displayName="MemoizedFormattedMessage";var qt=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(qt||{});const di=(e,r)=>r.some(n=>n.definisjon===e);var Yp=(e=>(e.FODSEL="ST-001",e.ADOPSJON="ST-002",e))(Yp||{});const oS=(e,r)=>{if(e==null)throw Error("Data er ikke oppgitt");return e},is=e=>Gs({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var iS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const zp=O.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:i,truncate:u,weight:d="regular",align:c,visuallyHidden:m,textColor:g}=e,p=iS(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=ke();return b.createElement(a,Object.assign({},p,{ref:r,className:y(n,"navds-body-long",`navds-body-long--${t}`,is({spacing:i,truncate:u,weight:d,align:c,visuallyHidden:m,textColor:g}))}))});var lS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const fn=O.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:i,truncate:u,weight:d="regular",align:c,visuallyHidden:m,textColor:g}=e,p=lS(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=ke();return b.createElement(a,Object.assign({},p,{ref:r,className:y(n,"navds-body-short",`navds-body-short--${t}`,is({spacing:i,truncate:u,weight:d,align:c,visuallyHidden:m,textColor:g}))}))});var uS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ni=O.forwardRef((e,r)=>{var{className:n,size:t="medium",spacing:a,uppercase:i,as:u="p",truncate:d,weight:c="regular",align:m,visuallyHidden:g,textColor:p}=e,y=uS(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=ke();return b.createElement(u,Object.assign({},y,{ref:r,className:v(n,"navds-detail",is({spacing:a,truncate:d,weight:c,align:m,visuallyHidden:g,textColor:p,uppercase:i}),{"navds-detail--small":t==="small"})}))});var dS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ls=O.forwardRef((e,r)=>{var{children:n,className:t,size:a,spacing:i,as:u="p",showIcon:d=!1}=e,c=dS(e,["children","className","size","spacing","as","showIcon"]);const{cn:m}=ke();return b.createElement(u,Object.assign({},c,{ref:r,className:m("navds-error-message","navds-label",t,is({spacing:i}),{"navds-label--small":a==="small","navds-error-message--show-icon":d})}),d&&b.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},b.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),n)});var cS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ai=O.forwardRef((e,r)=>{var{level:n="1",size:t,className:a,as:i,spacing:u,align:d,visuallyHidden:c,textColor:m}=e,g=cS(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:p}=ke(),y=i??`h${n}`;return b.createElement(y,Object.assign({},g,{ref:r,className:p(a,"navds-heading",`navds-heading--${t}`,is({spacing:u,align:d,visuallyHidden:c,textColor:m}))}))});var fS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};O.forwardRef((e,r)=>{var{className:n,spacing:t,as:a="p"}=e,i=fS(e,["className","spacing","as"]);const{cn:u}=ke();return b.createElement(a,Object.assign({},i,{ref:r,className:u(n,"navds-ingress",{"navds-typo--spacing":!!t})}))});var mS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const jn=O.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="label",spacing:i,visuallyHidden:u,textColor:d}=e,c=mS(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:m}=ke();return b.createElement(a,Object.assign({},c,{ref:r,className:m(n,"navds-label",is({spacing:i,visuallyHidden:u,textColor:d}),{"navds-label--small":t==="small"})}))});function Kp(e,r=166,n=!1){let t;function a(...i){const u=()=>{t=void 0,e.apply(this,i)};!t&&n&&u(),clearTimeout(t),t=setTimeout(u,r)}return a.clear=()=>{clearTimeout(t)},a}function In(e,r){const n=Object.entries(e).filter(([t])=>!r.includes(t));return Object.fromEntries(n)}const es=globalThis!=null&&globalThis.document?O.useLayoutEffect:()=>{};let jm=0;function gS(e){const[r,n]=O.useState(e),t=e||r;return O.useEffect(()=>{r==null&&(jm+=1,n(`aksel-id-${jm}`))},[r]),t}const Im=b.useId;function fr(e){var r;if(Im!==void 0){const n=Im();return e??n.replace(/(:)/g,"")}return(r=gS(e))!==null&&r!==void 0?r:""}function Vs(e,r=[]){const n=O.useRef(e);return O.useEffect(()=>{n.current=e}),O.useCallback((...t)=>{var a;return(a=n.current)===null||a===void 0?void 0:a.call(n,...t)},r)}function ci({value:e,defaultValue:r,onChange:n}){const t=Vs(n),[a,i]=O.useState(r),u=e!==void 0,d=u?e:a,c=Vs(m=>{const p=typeof m=="function"?m(d):m;u||i(p),t(p)},[u,t,d]);return[d,c]}let Cm=0;function pS(e){const[r,n]=O.useState(e),t=e||r;return O.useEffect(()=>{r==null&&(Cm+=1,n(`aksel-icon-${Cm}`))},[r]),t}const Lm=b.useId;function Gn(e){var r;return Lm!==void 0?Lm().replace(/(:)/g,""):(r=pS(e))!==null&&r!==void 0?r:""}var hS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const yS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=hS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var vS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const kS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=vS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var bS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const wS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=bS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var _S=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const TS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=_S(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var SS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ES=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=SS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var OS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Xp=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=OS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var DS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const xS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=DS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var RS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const FS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=RS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var NS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Zp=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=NS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var AS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Qp=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=AS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var PS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const MS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=PS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var BS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const $m=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=BS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var qS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const jS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=qS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var IS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const CS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=IS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var LS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Us=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=LS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var $S=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const HS=O.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=$S(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?O.createElement("title",{id:i},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function pa(e,r,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return r==null?void 0:r(a)}}const[VS,Pi]=Ri({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),US=typeof window<"u"&&window.matchMedia===void 0,WS=(e,r)=>{const[n,t]=O.useState(r);return O.useEffect(()=>{if(US)return;const a=window.matchMedia(e);t(a.matches);const i=u=>{t(u.matches)};return a.addEventListener("change",i),()=>{a.removeEventListener("change",i)}},[e]),n};function Mt(e){return(r={})=>{const n=r.width?String(r.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}function Jn(e){return(r,n)=>{const t=n!=null&&n.context?String(n.context):"standalone";let a;if(t==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,d=n!=null&&n.width?String(n.width):u;a=e.formattingValues[d]||e.formattingValues[u]}else{const u=e.defaultWidth,d=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[d]||e.values[u]}const i=e.argumentCallback?e.argumentCallback(r):r;return a[i]}}function et(e){return(r,n={})=>{const t=n.width,a=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],i=r.match(a);if(!i)return null;const u=i[0],d=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(d)?YS(d,p=>p.test(u)):GS(d,p=>p.test(u));let m;m=e.valueCallback?e.valueCallback(c):c,m=n.valueCallback?n.valueCallback(m):m;const g=r.slice(u.length);return{value:m,rest:g}}}function GS(e,r){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&r(e[n]))return n}function YS(e,r){for(let n=0;n<e.length;n++)if(r(e[n]))return n}function Ed(e){return(r,n={})=>{const t=r.match(e.matchPattern);if(!t)return null;const a=t[0],i=r.match(e.parsePattern);if(!i)return null;let u=e.valueCallback?e.valueCallback(i[0]):i[0];u=n.valueCallback?n.valueCallback(u):u;const d=r.slice(a.length);return{value:u,rest:d}}}const Jp=6048e5,zS=864e5,KS=6e4,XS=36e5,ZS=1e3,Hm=Symbol.for("constructDateFrom");function Je(e,r){return typeof e=="function"?e(r):e&&typeof e=="object"&&Hm in e?e[Hm](r):e instanceof Date?new e.constructor(r):new Date(r)}function us(e,...r){const n=Je.bind(null,r.find(t=>typeof t=="object"));return r.map(n)}let QS={};function Ta(){return QS}function Me(e,r){return Je(r||e,e)}function Pr(e,r){var d,c,m,g;const n=Ta(),t=(r==null?void 0:r.weekStartsOn)??((c=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((g=(m=n.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,a=Me(e,r==null?void 0:r.in),i=a.getDay(),u=(i<t?7:0)+i-t;return a.setDate(a.getDate()-u),a.setHours(0,0,0,0),a}const JS={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},eh=(e,r,n)=>{let t;const a=JS[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",r.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+t:t+" ago":t},eE={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nh=(e,r,n,t)=>eE[e],nE={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},tE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},rE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},aE={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},sE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},oE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},iE=(e,r)=>{const n=Number(e),t=n%100;if(t>20||t<10)switch(t%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},th={ordinalNumber:iE,era:Jn({values:nE,defaultWidth:"wide"}),quarter:Jn({values:tE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Jn({values:rE,defaultWidth:"wide"}),day:Jn({values:aE,defaultWidth:"wide"}),dayPeriod:Jn({values:sE,defaultWidth:"wide",formattingValues:oE,defaultFormattingWidth:"wide"})},lE=/^(\d+)(th|st|nd|rd)?/i,uE=/\d+/i,dE={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},cE={any:[/^b/i,/^(a|c)/i]},fE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},mE={any:[/1/i,/2/i,/3/i,/4/i]},gE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},pE={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},hE={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},yE={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vE={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},kE={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},rh={ordinalNumber:Ed({matchPattern:lE,parsePattern:uE,valueCallback:e=>parseInt(e,10)}),era:et({matchPatterns:dE,defaultMatchWidth:"wide",parsePatterns:cE,defaultParseWidth:"any"}),quarter:et({matchPatterns:fE,defaultMatchWidth:"wide",parsePatterns:mE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:et({matchPatterns:gE,defaultMatchWidth:"wide",parsePatterns:pE,defaultParseWidth:"any"}),day:et({matchPatterns:hE,defaultMatchWidth:"wide",parsePatterns:yE,defaultParseWidth:"any"}),dayPeriod:et({matchPatterns:vE,defaultMatchWidth:"any",parsePatterns:kE,defaultParseWidth:"any"})},bE={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},wE={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},_E={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},TE={date:Mt({formats:bE,defaultWidth:"full"}),time:Mt({formats:wE,defaultWidth:"full"}),dateTime:Mt({formats:_E,defaultWidth:"full"})},ah={code:"en-GB",formatDistance:eh,formatLong:TE,formatRelative:nh,localize:th,match:rh,options:{weekStartsOn:1,firstWeekContainsDate:4}},SE={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},EE={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},OE={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},DE={date:Mt({formats:SE,defaultWidth:"full"}),time:Mt({formats:EE,defaultWidth:"full"}),dateTime:Mt({formats:OE,defaultWidth:"full"})},Mi={code:"en-US",formatDistance:eh,formatLong:DE,formatRelative:nh,localize:th,match:rh,options:{weekStartsOn:0,firstWeekContainsDate:1}},xE={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},RE=(e,r,n)=>{let t;const a=xE[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",String(r)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"om "+t:t+" siden":t},FE={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},NE={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},AE={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},PE={date:Mt({formats:FE,defaultWidth:"full"}),time:Mt({formats:NE,defaultWidth:"full"}),dateTime:Mt({formats:AE,defaultWidth:"full"})},ME={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},BE=(e,r,n,t)=>ME[e],qE={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},jE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},IE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},CE={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},LE={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},$E=(e,r)=>Number(e)+".",HE={ordinalNumber:$E,era:Jn({values:qE,defaultWidth:"wide"}),quarter:Jn({values:jE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Jn({values:IE,defaultWidth:"wide"}),day:Jn({values:CE,defaultWidth:"wide"}),dayPeriod:Jn({values:LE,defaultWidth:"wide"})},VE=/^(\d+)\.?/i,UE=/\d+/i,WE={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},GE={any:[/^f/i,/^e/i]},YE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},zE={any:[/1/i,/2/i,/3/i,/4/i]},KE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},XE={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},ZE={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},QE={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},JE={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},eO={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},nO={ordinalNumber:Ed({matchPattern:VE,parsePattern:UE,valueCallback:e=>parseInt(e,10)}),era:et({matchPatterns:WE,defaultMatchWidth:"wide",parsePatterns:GE,defaultParseWidth:"any"}),quarter:et({matchPatterns:YE,defaultMatchWidth:"wide",parsePatterns:zE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:et({matchPatterns:KE,defaultMatchWidth:"wide",parsePatterns:XE,defaultParseWidth:"any"}),day:et({matchPatterns:ZE,defaultMatchWidth:"wide",parsePatterns:QE,defaultParseWidth:"any"}),dayPeriod:et({matchPatterns:JE,defaultMatchWidth:"any",parsePatterns:eO,defaultParseWidth:"any"})},sh={code:"nb",formatDistance:RE,formatLong:PE,formatRelative:BE,localize:HE,match:nO,options:{weekStartsOn:1,firstWeekContainsDate:4}},tO={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},rO=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],aO=(e,r,n)=>{let t;const a=tO[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",r<13?rO[r]:String(r)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"om "+t:t+" sidan":t},sO={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},oO={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},iO={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},lO={date:Mt({formats:sO,defaultWidth:"full"}),time:Mt({formats:oO,defaultWidth:"full"}),dateTime:Mt({formats:iO,defaultWidth:"full"})},uO={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},dO=(e,r,n,t)=>uO[e],cO={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},fO={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},mO={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},gO={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},pO={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},hO=(e,r)=>Number(e)+".",yO={ordinalNumber:hO,era:Jn({values:cO,defaultWidth:"wide"}),quarter:Jn({values:fO,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Jn({values:mO,defaultWidth:"wide"}),day:Jn({values:gO,defaultWidth:"wide"}),dayPeriod:Jn({values:pO,defaultWidth:"wide"})},vO=/^(\d+)\.?/i,kO=/\d+/i,bO={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},wO={any:[/^f/i,/^e/i]},_O={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},TO={any:[/1/i,/2/i,/3/i,/4/i]},SO={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},EO={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},OO={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},DO={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},xO={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},RO={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},FO={ordinalNumber:Ed({matchPattern:vO,parsePattern:kO,valueCallback:e=>parseInt(e,10)}),era:et({matchPatterns:bO,defaultMatchWidth:"wide",parsePatterns:wO,defaultParseWidth:"any"}),quarter:et({matchPatterns:_O,defaultMatchWidth:"wide",parsePatterns:TO,defaultParseWidth:"any",valueCallback:e=>e+1}),month:et({matchPatterns:SO,defaultMatchWidth:"wide",parsePatterns:EO,defaultParseWidth:"any"}),day:et({matchPatterns:OO,defaultMatchWidth:"wide",parsePatterns:DO,defaultParseWidth:"any"}),dayPeriod:et({matchPatterns:xO,defaultMatchWidth:"any",parsePatterns:RO,defaultParseWidth:"any"})},oh={code:"nn",formatDistance:aO,formatLong:lO,formatRelative:dO,localize:yO,match:FO,options:{weekStartsOn:1,firstWeekContainsDate:4}},NO={global:{dateLocale:sh,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},AO=O.createContext({locale:NO}),Od=()=>O.useContext(AO);function Vm(e){return e.sort((r,n)=>{const t=r.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const PO=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Um(e,r,n){let t=e+1;return n&&t>=r&&(t=0),t}function Wm(e,r,n){let t=e-1;return n&&t<0&&(t=r),t}const fu=e=>e;class MO{constructor(){this.descendants=new Map,this.register=r=>{if(r!=null)return PO(r)?this.registerNode(r):n=>{this.registerNode(n,r)}},this.unregister=r=>{this.descendants.delete(r);const n=Vm(Array.from(this.descendants.keys()));this.assignIndex(n)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=r=>{this.descendants.forEach(n=>{const t=r.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((n,t)=>n.index-t.index),this.enabledValues=()=>this.values().filter(r=>!r.disabled),this.item=r=>{if(this.count()!==0)return this.values()[r]},this.enabledItem=r=>{if(this.enabledCount()!==0)return this.enabledValues()[r]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const r=this.enabledValues().length-1;return this.enabledItem(r)},this.indexOf=r=>{var n,t;return r&&(t=(n=this.descendants.get(r))===null||n===void 0?void 0:n.index)!==null&&t!==void 0?t:-1},this.enabledIndexOf=r=>r==null?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(r)),this.next=(r,n=!0)=>{const t=Um(r,this.count(),n);return this.item(t)},this.nextEnabled=(r,n=!0)=>{const t=this.item(r);if(!t)return;const a=this.enabledIndexOf(t.node),i=Um(a,this.enabledCount(),n);return this.enabledItem(i)},this.prev=(r,n=!0)=>{const t=Wm(r,this.count()-1,n);return this.item(t)},this.prevEnabled=(r,n=!0)=>{const t=this.item(r);if(!t)return;const a=this.enabledIndexOf(t.node),i=Wm(a,this.enabledCount()-1,n);return this.enabledItem(i)},this.registerNode=(r,n)=>{if(!r)return;const t=this.descendants.get(r);if(t){this.descendants.set(r,Object.assign({index:t.index,node:r},n));return}const a=Array.from(this.descendants.keys()).concat(r),i=Vm(a);n!=null&&n.disabled&&(n.disabled=!!n.disabled);const u=Object.assign({node:r,index:-1},n);this.descendants.set(r,u),this.assignIndex(i)}}}function BO(){const[e,r]=Ri({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),n=fu(i=>b.createElement(e,Object.assign({},i.value),i.children));function t(i){const u=r(),[d,c]=O.useState(-1),m=O.useRef(null);es(()=>()=>{m.current&&u.unregister(m.current)},[]),es(()=>{if(!m.current)return;const p=Number(m.current.dataset.index);d!==p&&!Number.isNaN(p)&&c(p)});const g=fu(i?u.register(i):u.register);return{descendants:u,index:d,enabledIndex:u.enabledIndexOf(m.current),register:ZT([g,m])}}function a(){return O.useRef(new MO).current}return[n,r,a,t]}function qO(e,r=globalThis==null?void 0:globalThis.document){const n=Vs(e);O.useEffect(()=>{const t=a=>{a.key==="Escape"&&n(a)};return r.addEventListener("keydown",t,!0),()=>r.removeEventListener("keydown",t,!0)},[n,r])}const ih={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function lh(e,r,n,{discrete:t}={discrete:!1}){if(!r)return;const a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});a.addEventListener(e,r,{once:!0}),t&&a?Wp.flushSync(()=>a.dispatchEvent(i)):a.dispatchEvent(i)}function jO(e,r=globalThis==null?void 0:globalThis.document){const n=Vs(e),t=O.useRef(!1);return O.useEffect(()=>{const a=i=>{if(i.target&&!t.current){const u={originalEvent:i};lh(ih.FOCUS_OUTSIDE,n,u)}};return r.addEventListener("focusin",a),()=>r.removeEventListener("focusin",a)},[r,n]),{onFocusCapture:()=>{t.current=!0},onBlurCapture:()=>{t.current=!1}}}function IO(e,r=globalThis==null?void 0:globalThis.document){const n=Vs(e),t=O.useRef(!1),a=O.useRef(()=>{});return O.useEffect(()=>{const i=d=>{function c(){lh(ih.POINTER_DOWN_OUTSIDE,n,{originalEvent:d},{discrete:!0})}d.target&&!t.current?d.pointerType==="touch"?(r.removeEventListener("click",a.current),a.current=c,r.addEventListener("click",a.current,{once:!0})):c():r.removeEventListener("click",a.current),t.current=!1},u=window.setTimeout(()=>{r.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(u),r.removeEventListener("pointerdown",i),r.removeEventListener("click",a.current)}},[r,n]),{onPointerDownCapture:()=>{t.current=!0}}}var CO=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const[LO,$O,HO,VO]=BO();let Va=0,Gm;const UO=O.forwardRef((e,r)=>$O(!1)?b.createElement(Ym,Object.assign({ref:r},e)):b.createElement(WO,null,b.createElement(Ym,Object.assign({ref:r},e)))),WO=({children:e})=>{const r=HO();return b.createElement(LO,{value:r},e)},Ym=O.forwardRef((e,r)=>{var n,{children:t,asChild:a,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:c,onDismiss:m,safeZone:g,disableOutsidePointerEvents:p=!1,enabled:y=!0}=e,v=CO(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,D]=O.useState({}),{register:E,index:T,descendants:x}=VO({disableOutsidePointerEvents:p,disabled:!y,forceUpdate:()=>D({})}),[F,w]=O.useState(null),M=ss(w,E,r),k=(n=F==null?void 0:F.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,N=O.useRef(!1),R=O.useRef(!1),A=(()=>{let L=-1;return x.enabledValues().forEach((G,$)=>{G.disableOutsidePointerEvents&&(L=$)}),{isPointerEventsEnabled:T>=L,isBodyPointerEventsDisabled:Va>0,pointerStyle:T>=L&&Va>0?"auto":void 0}})();function j(L){var U,G;if(!(g!=null&&g.anchor)&&!(g!=null&&g.dismissable)||!y)return;L.defaultPrevented||(N.current=!0,L.detail.originalEvent.type==="pointerdown"&&(R.current=!0));const $=L.target;L.detail.originalEvent.type==="pointerdown"?(!((U=g==null?void 0:g.anchor)===null||U===void 0)&&U.contains($)||$===(g==null?void 0:g.anchor))&&L.preventDefault():!($ instanceof HTMLElement&&![g==null?void 0:g.anchor,g==null?void 0:g.dismissable].some(Y=>Y==null?void 0:Y.contains($))&&!$.contains((G=g==null?void 0:g.dismissable)!==null&&G!==void 0?G:null))&&L.preventDefault(),L.detail.originalEvent.type==="focusin"&&R.current&&L.preventDefault(),R.current=!1,N.current=!1}const z=IO(L=>{!A.isPointerEventsEnabled||!y||(u==null||u(L),c==null||c(L),g&&j(L),!L.defaultPrevented&&m&&m())},k),V=jO(L=>{y&&(d==null||d(L),c==null||c(L),g&&j(L),!L.defaultPrevented&&m&&m())},k);qO(L=>{!y||!(T===x.enabledCount()-1)||(i==null||i(L),!L.defaultPrevented&&m&&(L.preventDefault(),m()))},k),O.useEffect(()=>{if(!(!F||!y||!p))return Va===0&&(Gm=k.body.style.pointerEvents,k.body.style.pointerEvents="none"),Va++,()=>{Va===1&&(k.body.style.pointerEvents=Gm),Va--}},[F,k,p,x,y]),O.useEffect(()=>()=>x.values().forEach(L=>L.forceUpdate()),[x,F]);const W=a?os:"div";return b.createElement(W,Object.assign({ref:M},v,{onFocusCapture:V.onFocusCapture,onBlurCapture:V.onBlurCapture,onPointerDownCapture:z.onPointerDownCapture,style:Object.assign({pointerEvents:A.pointerStyle},v.style)}),t)}),ns=Math.min,ha=Math.max,fi=Math.round,Qo=Math.floor,cr=e=>({x:e,y:e}),GO={left:"right",right:"left",bottom:"top",top:"bottom"},YO={start:"end",end:"start"};function Uu(e,r,n){return ha(e,ns(r,n))}function zs(e,r){return typeof e=="function"?e(r):e}function ya(e){return e.split("-")[0]}function Ks(e){return e.split("-")[1]}function uh(e){return e==="x"?"y":"x"}function Dd(e){return e==="y"?"height":"width"}function ts(e){return["top","bottom"].includes(ya(e))?"y":"x"}function xd(e){return uh(ts(e))}function zO(e,r,n){n===void 0&&(n=!1);const t=Ks(e),a=xd(e),i=Dd(a);let u=a==="x"?t===(n?"end":"start")?"right":"left":t==="start"?"bottom":"top";return r.reference[i]>r.floating[i]&&(u=mi(u)),[u,mi(u)]}function KO(e){const r=mi(e);return[Wu(e),r,Wu(r)]}function Wu(e){return e.replace(/start|end/g,r=>YO[r])}function XO(e,r,n){const t=["left","right"],a=["right","left"],i=["top","bottom"],u=["bottom","top"];switch(e){case"top":case"bottom":return n?r?a:t:r?t:a;case"left":case"right":return r?i:u;default:return[]}}function ZO(e,r,n,t){const a=Ks(e);let i=XO(ya(e),n==="start",t);return a&&(i=i.map(u=>u+"-"+a),r&&(i=i.concat(i.map(Wu)))),i}function mi(e){return e.replace(/left|right|bottom|top/g,r=>GO[r])}function QO(e){return{top:0,right:0,bottom:0,left:0,...e}}function dh(e){return typeof e!="number"?QO(e):{top:e,right:e,bottom:e,left:e}}function gi(e){const{x:r,y:n,width:t,height:a}=e;return{width:t,height:a,top:n,left:r,right:r+t,bottom:n+a,x:r,y:n}}function zm(e,r,n){let{reference:t,floating:a}=e;const i=ts(r),u=xd(r),d=Dd(u),c=ya(r),m=i==="y",g=t.x+t.width/2-a.width/2,p=t.y+t.height/2-a.height/2,y=t[d]/2-a[d]/2;let v;switch(c){case"top":v={x:g,y:t.y-a.height};break;case"bottom":v={x:g,y:t.y+t.height};break;case"right":v={x:t.x+t.width,y:p};break;case"left":v={x:t.x-a.width,y:p};break;default:v={x:t.x,y:t.y}}switch(Ks(r)){case"start":v[u]-=y*(n&&m?-1:1);break;case"end":v[u]+=y*(n&&m?-1:1);break}return v}const JO=async(e,r,n)=>{const{placement:t="bottom",strategy:a="absolute",middleware:i=[],platform:u}=n,d=i.filter(Boolean),c=await(u.isRTL==null?void 0:u.isRTL(r));let m=await u.getElementRects({reference:e,floating:r,strategy:a}),{x:g,y:p}=zm(m,t,c),y=t,v={},D=0;for(let E=0;E<d.length;E++){const{name:T,fn:x}=d[E],{x:F,y:w,data:M,reset:k}=await x({x:g,y:p,initialPlacement:t,placement:y,strategy:a,middlewareData:v,rects:m,platform:u,elements:{reference:e,floating:r}});g=F??g,p=w??p,v={...v,[T]:{...v[T],...M}},k&&D<=50&&(D++,typeof k=="object"&&(k.placement&&(y=k.placement),k.rects&&(m=k.rects===!0?await u.getElementRects({reference:e,floating:r,strategy:a}):k.rects),{x:g,y:p}=zm(m,y,c)),E=-1)}return{x:g,y:p,placement:y,strategy:a,middlewareData:v}};async function ch(e,r){var n;r===void 0&&(r={});const{x:t,y:a,platform:i,rects:u,elements:d,strategy:c}=e,{boundary:m="clippingAncestors",rootBoundary:g="viewport",elementContext:p="floating",altBoundary:y=!1,padding:v=0}=zs(r,e),D=dh(v),T=d[y?p==="floating"?"reference":"floating":p],x=gi(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(T)))==null||n?T:T.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(d.floating)),boundary:m,rootBoundary:g,strategy:c})),F=p==="floating"?{x:t,y:a,width:u.floating.width,height:u.floating.height}:u.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d.floating)),M=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},k=gi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:F,offsetParent:w,strategy:c}):F);return{top:(x.top-k.top+D.top)/M.y,bottom:(k.bottom-x.bottom+D.bottom)/M.y,left:(x.left-k.left+D.left)/M.x,right:(k.right-x.right+D.right)/M.x}}const eD=e=>({name:"arrow",options:e,async fn(r){const{x:n,y:t,placement:a,rects:i,platform:u,elements:d,middlewareData:c}=r,{element:m,padding:g=0}=zs(e,r)||{};if(m==null)return{};const p=dh(g),y={x:n,y:t},v=xd(a),D=Dd(v),E=await u.getDimensions(m),T=v==="y",x=T?"top":"left",F=T?"bottom":"right",w=T?"clientHeight":"clientWidth",M=i.reference[D]+i.reference[v]-y[v]-i.floating[D],k=y[v]-i.reference[v],N=await(u.getOffsetParent==null?void 0:u.getOffsetParent(m));let R=N?N[w]:0;(!R||!await(u.isElement==null?void 0:u.isElement(N)))&&(R=d.floating[w]||i.floating[D]);const A=M/2-k/2,j=R/2-E[D]/2-1,z=ns(p[x],j),V=ns(p[F],j),W=z,L=R-E[D]-V,U=R/2-E[D]/2+A,G=Uu(W,U,L),$=!c.arrow&&Ks(a)!=null&&U!==G&&i.reference[D]/2-(U<W?z:V)-E[D]/2<0,J=$?U<W?U-W:U-L:0;return{[v]:y[v]+J,data:{[v]:G,centerOffset:U-G-J,...$&&{alignmentOffset:J}},reset:$}}}),nD=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var n,t;const{placement:a,middlewareData:i,rects:u,initialPlacement:d,platform:c,elements:m}=r,{mainAxis:g=!0,crossAxis:p=!0,fallbackPlacements:y,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:D="none",flipAlignment:E=!0,...T}=zs(e,r);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const x=ya(a),F=ts(d),w=ya(d)===d,M=await(c.isRTL==null?void 0:c.isRTL(m.floating)),k=y||(w||!E?[mi(d)]:KO(d)),N=D!=="none";!y&&N&&k.push(...ZO(d,E,D,M));const R=[d,...k],A=await ch(r,T),j=[];let z=((t=i.flip)==null?void 0:t.overflows)||[];if(g&&j.push(A[x]),p){const U=zO(a,u,M);j.push(A[U[0]],A[U[1]])}if(z=[...z,{placement:a,overflows:j}],!j.every(U=>U<=0)){var V,W;const U=(((V=i.flip)==null?void 0:V.index)||0)+1,G=R[U];if(G)return{data:{index:U,overflows:z},reset:{placement:G}};let $=(W=z.filter(J=>J.overflows[0]<=0).sort((J,Y)=>J.overflows[1]-Y.overflows[1])[0])==null?void 0:W.placement;if(!$)switch(v){case"bestFit":{var L;const J=(L=z.filter(Y=>{if(N){const re=ts(Y.placement);return re===F||re==="y"}return!0}).map(Y=>[Y.placement,Y.overflows.filter(re=>re>0).reduce((re,se)=>re+se,0)]).sort((Y,re)=>Y[1]-re[1])[0])==null?void 0:L[0];J&&($=J);break}case"initialPlacement":$=d;break}if(a!==$)return{reset:{placement:$}}}return{}}}};async function tD(e,r){const{placement:n,platform:t,elements:a}=e,i=await(t.isRTL==null?void 0:t.isRTL(a.floating)),u=ya(n),d=Ks(n),c=ts(n)==="y",m=["left","top"].includes(u)?-1:1,g=i&&c?-1:1,p=zs(r,e);let{mainAxis:y,crossAxis:v,alignmentAxis:D}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return d&&typeof D=="number"&&(v=d==="end"?D*-1:D),c?{x:v*g,y:y*m}:{x:y*m,y:v*g}}const rD=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var n,t;const{x:a,y:i,placement:u,middlewareData:d}=r,c=await tD(r,e);return u===((n=d.offset)==null?void 0:n.placement)&&(t=d.arrow)!=null&&t.alignmentOffset?{}:{x:a+c.x,y:i+c.y,data:{...c,placement:u}}}}},aD=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:n,y:t,placement:a}=r,{mainAxis:i=!0,crossAxis:u=!1,limiter:d={fn:T=>{let{x,y:F}=T;return{x,y:F}}},...c}=zs(e,r),m={x:n,y:t},g=await ch(r,c),p=ts(ya(a)),y=uh(p);let v=m[y],D=m[p];if(i){const T=y==="y"?"top":"left",x=y==="y"?"bottom":"right",F=v+g[T],w=v-g[x];v=Uu(F,v,w)}if(u){const T=p==="y"?"top":"left",x=p==="y"?"bottom":"right",F=D+g[T],w=D-g[x];D=Uu(F,D,w)}const E=d.fn({...r,[y]:v,[p]:D});return{...E,data:{x:E.x-n,y:E.y-t,enabled:{[y]:i,[p]:u}}}}}};function Bi(){return typeof window<"u"}function ds(e){return fh(e)?(e.nodeName||"").toLowerCase():"#document"}function wt(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function pr(e){var r;return(r=(fh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function fh(e){return Bi()?e instanceof Node||e instanceof wt(e).Node:!1}function Wn(e){return Bi()?e instanceof Element||e instanceof wt(e).Element:!1}function mr(e){return Bi()?e instanceof HTMLElement||e instanceof wt(e).HTMLElement:!1}function Km(e){return!Bi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof wt(e).ShadowRoot}function Xs(e){const{overflow:r,overflowX:n,overflowY:t,display:a}=Gt(e);return/auto|scroll|overlay|hidden|clip/.test(r+t+n)&&!["inline","contents"].includes(a)}function sD(e){return["table","td","th"].includes(ds(e))}function qi(e){return[":popover-open",":modal"].some(r=>{try{return e.matches(r)}catch{return!1}})}function Rd(e){const r=Fd(),n=Wn(e)?Gt(e):e;return["transform","translate","scale","rotate","perspective"].some(t=>n[t]?n[t]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!r&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!r&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function oD(e){let r=Xr(e);for(;mr(r)&&!rs(r);){if(Rd(r))return r;if(qi(r))return null;r=Xr(r)}return null}function Fd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rs(e){return["html","body","#document"].includes(ds(e))}function Gt(e){return wt(e).getComputedStyle(e)}function ji(e){return Wn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Xr(e){if(ds(e)==="html")return e;const r=e.assignedSlot||e.parentNode||Km(e)&&e.host||pr(e);return Km(r)?r.host:r}function mh(e){const r=Xr(e);return rs(r)?e.ownerDocument?e.ownerDocument.body:e.body:mr(r)&&Xs(r)?r:mh(r)}function Ws(e,r,n){var t;r===void 0&&(r=[]),n===void 0&&(n=!0);const a=mh(e),i=a===((t=e.ownerDocument)==null?void 0:t.body),u=wt(a);if(i){const d=Gu(u);return r.concat(u,u.visualViewport||[],Xs(a)?a:[],d&&n?Ws(d):[])}return r.concat(a,Ws(a,[],n))}function Gu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function gh(e){const r=Gt(e);let n=parseFloat(r.width)||0,t=parseFloat(r.height)||0;const a=mr(e),i=a?e.offsetWidth:n,u=a?e.offsetHeight:t,d=fi(n)!==i||fi(t)!==u;return d&&(n=i,t=u),{width:n,height:t,$:d}}function Nd(e){return Wn(e)?e:e.contextElement}function Ka(e){const r=Nd(e);if(!mr(r))return cr(1);const n=r.getBoundingClientRect(),{width:t,height:a,$:i}=gh(r);let u=(i?fi(n.width):n.width)/t,d=(i?fi(n.height):n.height)/a;return(!u||!Number.isFinite(u))&&(u=1),(!d||!Number.isFinite(d))&&(d=1),{x:u,y:d}}const iD=cr(0);function ph(e){const r=wt(e);return!Fd()||!r.visualViewport?iD:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function lD(e,r,n){return r===void 0&&(r=!1),!n||r&&n!==wt(e)?!1:r}function va(e,r,n,t){r===void 0&&(r=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect(),i=Nd(e);let u=cr(1);r&&(t?Wn(t)&&(u=Ka(t)):u=Ka(e));const d=lD(i,n,t)?ph(i):cr(0);let c=(a.left+d.x)/u.x,m=(a.top+d.y)/u.y,g=a.width/u.x,p=a.height/u.y;if(i){const y=wt(i),v=t&&Wn(t)?wt(t):t;let D=y,E=Gu(D);for(;E&&t&&v!==D;){const T=Ka(E),x=E.getBoundingClientRect(),F=Gt(E),w=x.left+(E.clientLeft+parseFloat(F.paddingLeft))*T.x,M=x.top+(E.clientTop+parseFloat(F.paddingTop))*T.y;c*=T.x,m*=T.y,g*=T.x,p*=T.y,c+=w,m+=M,D=wt(E),E=Gu(D)}}return gi({width:g,height:p,x:c,y:m})}function Ad(e,r){const n=ji(e).scrollLeft;return r?r.left+n:va(pr(e)).left+n}function hh(e,r,n){n===void 0&&(n=!1);const t=e.getBoundingClientRect(),a=t.left+r.scrollLeft-(n?0:Ad(e,t)),i=t.top+r.scrollTop;return{x:a,y:i}}function uD(e){let{elements:r,rect:n,offsetParent:t,strategy:a}=e;const i=a==="fixed",u=pr(t),d=r?qi(r.floating):!1;if(t===u||d&&i)return n;let c={scrollLeft:0,scrollTop:0},m=cr(1);const g=cr(0),p=mr(t);if((p||!p&&!i)&&((ds(t)!=="body"||Xs(u))&&(c=ji(t)),mr(t))){const v=va(t);m=Ka(t),g.x=v.x+t.clientLeft,g.y=v.y+t.clientTop}const y=u&&!p&&!i?hh(u,c,!0):cr(0);return{width:n.width*m.x,height:n.height*m.y,x:n.x*m.x-c.scrollLeft*m.x+g.x+y.x,y:n.y*m.y-c.scrollTop*m.y+g.y+y.y}}function dD(e){return Array.from(e.getClientRects())}function cD(e){const r=pr(e),n=ji(e),t=e.ownerDocument.body,a=ha(r.scrollWidth,r.clientWidth,t.scrollWidth,t.clientWidth),i=ha(r.scrollHeight,r.clientHeight,t.scrollHeight,t.clientHeight);let u=-n.scrollLeft+Ad(e);const d=-n.scrollTop;return Gt(t).direction==="rtl"&&(u+=ha(r.clientWidth,t.clientWidth)-a),{width:a,height:i,x:u,y:d}}function fD(e,r){const n=wt(e),t=pr(e),a=n.visualViewport;let i=t.clientWidth,u=t.clientHeight,d=0,c=0;if(a){i=a.width,u=a.height;const m=Fd();(!m||m&&r==="fixed")&&(d=a.offsetLeft,c=a.offsetTop)}return{width:i,height:u,x:d,y:c}}function mD(e,r){const n=va(e,!0,r==="fixed"),t=n.top+e.clientTop,a=n.left+e.clientLeft,i=mr(e)?Ka(e):cr(1),u=e.clientWidth*i.x,d=e.clientHeight*i.y,c=a*i.x,m=t*i.y;return{width:u,height:d,x:c,y:m}}function Xm(e,r,n){let t;if(r==="viewport")t=fD(e,n);else if(r==="document")t=cD(pr(e));else if(Wn(r))t=mD(r,n);else{const a=ph(e);t={x:r.x-a.x,y:r.y-a.y,width:r.width,height:r.height}}return gi(t)}function yh(e,r){const n=Xr(e);return n===r||!Wn(n)||rs(n)?!1:Gt(n).position==="fixed"||yh(n,r)}function gD(e,r){const n=r.get(e);if(n)return n;let t=Ws(e,[],!1).filter(d=>Wn(d)&&ds(d)!=="body"),a=null;const i=Gt(e).position==="fixed";let u=i?Xr(e):e;for(;Wn(u)&&!rs(u);){const d=Gt(u),c=Rd(u);!c&&d.position==="fixed"&&(a=null),(i?!c&&!a:!c&&d.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Xs(u)&&!c&&yh(e,u))?t=t.filter(g=>g!==u):a=d,u=Xr(u)}return r.set(e,t),t}function pD(e){let{element:r,boundary:n,rootBoundary:t,strategy:a}=e;const u=[...n==="clippingAncestors"?qi(r)?[]:gD(r,this._c):[].concat(n),t],d=u[0],c=u.reduce((m,g)=>{const p=Xm(r,g,a);return m.top=ha(p.top,m.top),m.right=ns(p.right,m.right),m.bottom=ns(p.bottom,m.bottom),m.left=ha(p.left,m.left),m},Xm(r,d,a));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function hD(e){const{width:r,height:n}=gh(e);return{width:r,height:n}}function yD(e,r,n){const t=mr(r),a=pr(r),i=n==="fixed",u=va(e,!0,i,r);let d={scrollLeft:0,scrollTop:0};const c=cr(0);if(t||!t&&!i)if((ds(r)!=="body"||Xs(a))&&(d=ji(r)),t){const y=va(r,!0,i,r);c.x=y.x+r.clientLeft,c.y=y.y+r.clientTop}else a&&(c.x=Ad(a));const m=a&&!t&&!i?hh(a,d):cr(0),g=u.left+d.scrollLeft-c.x-m.x,p=u.top+d.scrollTop-c.y-m.y;return{x:g,y:p,width:u.width,height:u.height}}function mu(e){return Gt(e).position==="static"}function Zm(e,r){if(!mr(e)||Gt(e).position==="fixed")return null;if(r)return r(e);let n=e.offsetParent;return pr(e)===n&&(n=n.ownerDocument.body),n}function vh(e,r){const n=wt(e);if(qi(e))return n;if(!mr(e)){let a=Xr(e);for(;a&&!rs(a);){if(Wn(a)&&!mu(a))return a;a=Xr(a)}return n}let t=Zm(e,r);for(;t&&sD(t)&&mu(t);)t=Zm(t,r);return t&&rs(t)&&mu(t)&&!Rd(t)?n:t||oD(e)||n}const vD=async function(e){const r=this.getOffsetParent||vh,n=this.getDimensions,t=await n(e.floating);return{reference:yD(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:t.width,height:t.height}}};function kD(e){return Gt(e).direction==="rtl"}const bD={convertOffsetParentRelativeRectToViewportRelativeRect:uD,getDocumentElement:pr,getClippingRect:pD,getOffsetParent:vh,getElementRects:vD,getClientRects:dD,getDimensions:hD,getScale:Ka,isElement:Wn,isRTL:kD};function kh(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function wD(e,r){let n=null,t;const a=pr(e);function i(){var d;clearTimeout(t),(d=n)==null||d.disconnect(),n=null}function u(d,c){d===void 0&&(d=!1),c===void 0&&(c=1),i();const m=e.getBoundingClientRect(),{left:g,top:p,width:y,height:v}=m;if(d||r(),!y||!v)return;const D=Qo(p),E=Qo(a.clientWidth-(g+y)),T=Qo(a.clientHeight-(p+v)),x=Qo(g),w={rootMargin:-D+"px "+-E+"px "+-T+"px "+-x+"px",threshold:ha(0,ns(1,c))||1};let M=!0;function k(N){const R=N[0].intersectionRatio;if(R!==c){if(!M)return u();R?u(!1,R):t=setTimeout(()=>{u(!1,1e-7)},1e3)}R===1&&!kh(m,e.getBoundingClientRect())&&u(),M=!1}try{n=new IntersectionObserver(k,{...w,root:a.ownerDocument})}catch{n=new IntersectionObserver(k,w)}n.observe(e)}return u(!0),i}function _D(e,r,n,t){t===void 0&&(t={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:c=!1}=t,m=Nd(e),g=a||i?[...m?Ws(m):[],...Ws(r)]:[];g.forEach(x=>{a&&x.addEventListener("scroll",n,{passive:!0}),i&&x.addEventListener("resize",n)});const p=m&&d?wD(m,n):null;let y=-1,v=null;u&&(v=new ResizeObserver(x=>{let[F]=x;F&&F.target===m&&v&&(v.unobserve(r),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var w;(w=v)==null||w.observe(r)})),n()}),m&&!c&&v.observe(m),v.observe(r));let D,E=c?va(e):null;c&&T();function T(){const x=va(e);E&&!kh(E,x)&&n(),E=x,D=requestAnimationFrame(T)}return n(),()=>{var x;g.forEach(F=>{a&&F.removeEventListener("scroll",n),i&&F.removeEventListener("resize",n)}),p==null||p(),(x=v)==null||x.disconnect(),v=null,c&&cancelAnimationFrame(D)}}const TD=rD,SD=aD,ED=nD,Qm=eD,OD=(e,r,n)=>{const t=new Map,a={platform:bD,...n},i={...a.platform,_c:t};return JO(e,r,{...a,platform:i})};var ii=typeof document<"u"?O.useLayoutEffect:O.useEffect;function pi(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let n,t,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==r.length)return!1;for(t=n;t--!==0;)if(!pi(e[t],r[t]))return!1;return!0}if(a=Object.keys(e),n=a.length,n!==Object.keys(r).length)return!1;for(t=n;t--!==0;)if(!{}.hasOwnProperty.call(r,a[t]))return!1;for(t=n;t--!==0;){const i=a[t];if(!(i==="_owner"&&e.$$typeof)&&!pi(e[i],r[i]))return!1}return!0}return e!==e&&r!==r}function bh(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Jm(e,r){const n=bh(e);return Math.round(r*n)/n}function gu(e){const r=O.useRef(e);return ii(()=>{r.current=e}),r}function DD(e){e===void 0&&(e={});const{placement:r="bottom",strategy:n="absolute",middleware:t=[],platform:a,elements:{reference:i,floating:u}={},transform:d=!0,whileElementsMounted:c,open:m}=e,[g,p]=O.useState({x:0,y:0,strategy:n,placement:r,middlewareData:{},isPositioned:!1}),[y,v]=O.useState(t);pi(y,t)||v(t);const[D,E]=O.useState(null),[T,x]=O.useState(null),F=O.useCallback(Y=>{Y!==N.current&&(N.current=Y,E(Y))},[]),w=O.useCallback(Y=>{Y!==R.current&&(R.current=Y,x(Y))},[]),M=i||D,k=u||T,N=O.useRef(null),R=O.useRef(null),A=O.useRef(g),j=c!=null,z=gu(c),V=gu(a),W=gu(m),L=O.useCallback(()=>{if(!N.current||!R.current)return;const Y={placement:r,strategy:n,middleware:y};V.current&&(Y.platform=V.current),OD(N.current,R.current,Y).then(re=>{const se={...re,isPositioned:W.current!==!1};U.current&&!pi(A.current,se)&&(A.current=se,Sd.flushSync(()=>{p(se)}))})},[y,r,n,V,W]);ii(()=>{m===!1&&A.current.isPositioned&&(A.current.isPositioned=!1,p(Y=>({...Y,isPositioned:!1})))},[m]);const U=O.useRef(!1);ii(()=>(U.current=!0,()=>{U.current=!1}),[]),ii(()=>{if(M&&(N.current=M),k&&(R.current=k),M&&k){if(z.current)return z.current(M,k,L);L()}},[M,k,L,z,j]);const G=O.useMemo(()=>({reference:N,floating:R,setReference:F,setFloating:w}),[F,w]),$=O.useMemo(()=>({reference:M,floating:k}),[M,k]),J=O.useMemo(()=>{const Y={position:n,left:0,top:0};if(!$.floating)return Y;const re=Jm($.floating,g.x),se=Jm($.floating,g.y);return d?{...Y,transform:"translate("+re+"px, "+se+"px)",...bh($.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:re,top:se}},[n,d,$.floating,g.x,g.y]);return O.useMemo(()=>({...g,update:L,refs:G,elements:$,floatingStyles:J}),[g,L,G,$,J])}const xD=e=>{function r(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:t,padding:a}=typeof e=="function"?e(n):e;return t&&r(t)?t.current!=null?Qm({element:t.current,padding:a}).fn(n):{}:t?Qm({element:t,padding:a}).fn(n):{}}}},RD=(e,r)=>({...TD(e),options:[e,r]}),FD=(e,r)=>({...SD(e),options:[e,r]}),ND=(e,r)=>({...ED(e),options:[e,r]}),AD=(e,r)=>({...xD(e),options:[e,r]}),eg=/(\w+)/g;function PD(e,r){const n=Array.isArray(e)?e:MD(e);for(const t of r){if(!t)continue;let a=t;for(let i=0;i<n.length;i++){const u=a[n[i]];u!==void 0&&(a=u)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function MD(e){const r=[];let n=eg.exec(e);for(;n;){const[,t,a]=n;r.push(t||a),n=eg.exec(e)}return r}const BD=/{[^}]*}/g;function Kt(e,...r){const n=Od(),t=n.translations||[],a=[...r,...Array.isArray(t)?t.map(u=>u[e]):[t[e]],n.locale[e]];return(u,d)=>{const c=PD(u,a);return d?c.replace(BD,m=>{const g=m.substring(1,m.length-1);if(d[g]===void 0){const p=JSON.stringify(d);throw new Error(`Error translating key '${u}'. No replacement syntax ({}) found for key '${g}'. The following replacements were passed: '${p}'`)}return d[g]}):c}}function wh(){const e=Od(),r=e.translations||[],n=Array.isArray(r)?r.map(t=>t.global):[r.global];n.push(e.locale.global);for(const t of n)if(t!=null&&t.dateLocale)return t.dateLocale;throw new Error("dateLocale not found.")}var qD=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const jD=O.forwardRef((e,r)=>{var{className:n,size:t="medium",title:a,transparent:i=!1,variant:u="neutral",id:d,"data-color":c}=e,m=qD(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:g}=ke(),p=fr(),y=Kt("Loader");return b.createElement("svg",Object.assign({"aria-labelledby":d??`loader-${p}`,ref:r,className:g("navds-loader",n,`navds-loader--${t}`,`navds-loader--${u}`,{"navds-loader--transparent":i}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??ID(u)},In(m,["children"]),{"data-variant":u}),b.createElement("title",{id:d??`loader-${p}`},a||y("title")),b.createElement("circle",{className:g("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),b.createElement("circle",{className:g("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function ID(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var CD=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Yt=O.forwardRef((e,r)=>{var{as:n="button",variant:t="primary",className:a,children:i,size:u="medium",loading:d=!1,disabled:c,icon:m,iconPosition:g="left",onKeyUp:p,"data-color":y}=e,v=CD(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:D}=ke(),E=c||d?In(v,["href"]):v,T=x=>{x.key===" "&&!c&&!d&&x.currentTarget.click()};return b.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},{"data-color":y??LD(t),"data-variant":$D(t)},E,{ref:r,onKeyUp:pa(p,T),className:D(a,"navds-button",`navds-button--${t}`,`navds-button--${u}`,{"navds-button--loading":d,"navds-button--icon-only":!!m&&!i,"navds-button--disabled":c??d}),disabled:c??d?!0:void 0}),m&&g==="left"&&b.createElement("span",{className:D("navds-button__icon")},m),d&&b.createElement(jD,{size:u}),i&&b.createElement(jn,{as:"span",size:u==="medium"?"medium":"small"},i),m&&g==="right"&&b.createElement("span",{className:D("navds-button__icon")},m))});function LD(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function $D(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var HD=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const VD={error:HS,warning:xS,info:FS,success:ES},_h=O.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:i="medium",fullWidth:u=!1,contentMaxWidth:d=!0,inline:c=!1,closeButton:m=!1,onClose:g}=e,p=HD(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:y}=ke(),v=Kt("Alert"),D=VD[a];return b.createElement("div",Object.assign({},p,{"data-color":UD(a),"data-variant":a,ref:r,className:y(t,"navds-alert",`navds-alert--${a}`,`navds-alert--${i}`,{"navds-alert--full-width":u,"navds-alert--inline":c,"navds-alert--close-button":m})}),b.createElement(D,{title:v(a),className:y("navds-alert__icon")}),b.createElement(zp,{as:"div",size:i,className:y("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),m&&!c&&b.createElement("div",{className:y("navds-alert__button-wrapper")},b.createElement(Yt,{className:y("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:g,type:"button",icon:b.createElement(Us,{title:["error","warning"].includes(a)?v("closeAlert"):v("closeMessage")})})))});function UD(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function Zs(e,r,n){const t=Me(e,n==null?void 0:n.in);return isNaN(r)?Je((n==null?void 0:n.in)||e,NaN):(r&&t.setDate(t.getDate()+r),t)}function Pd(e,r,n){const t=Me(e,n==null?void 0:n.in);if(isNaN(r))return Je(e,NaN);if(!r)return t;const a=t.getDate(),i=Je(e,t.getTime());i.setMonth(t.getMonth()+r+1,0);const u=i.getDate();return a>=u?i:(t.setFullYear(i.getFullYear(),i.getMonth(),a),t)}function hi(e,r){const n=Me(e,r==null?void 0:r.in).getDay();return n===0||n===6}function ka(e,r){return Pr(e,{...r,weekStartsOn:1})}function Th(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getFullYear(),a=Je(n,0);a.setFullYear(t+1,0,4),a.setHours(0,0,0,0);const i=ka(a),u=Je(n,0);u.setFullYear(t,0,4),u.setHours(0,0,0,0);const d=ka(u);return n.getTime()>=i.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function yi(e){const r=Me(e),n=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return n.setUTCFullYear(r.getFullYear()),+e-+n}function Mr(e,r){const n=Me(e,r==null?void 0:r.in);return n.setHours(0,0,0,0),n}function Kr(e,r,n){const[t,a]=us(n==null?void 0:n.in,e,r),i=Mr(t),u=Mr(a),d=+i-yi(i),c=+u-yi(u);return Math.round((d-c)/zS)}function WD(e,r){const n=Th(e,r),t=Je(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),ka(t)}function GD(e,r,n){return Zs(e,r*7,n)}function Md(e,r,n){return Pd(e,r*12,n)}function YD(e,r){let n,t=r==null?void 0:r.in;return e.forEach(a=>{!t&&typeof a=="object"&&(t=Je.bind(null,a));const i=Me(a,t);(!n||n<i||isNaN(+i))&&(n=i)}),Je(t,n||NaN)}function zD(e,r){let n,t=r==null?void 0:r.in;return e.forEach(a=>{!t&&typeof a=="object"&&(t=Je.bind(null,a));const i=Me(a,t);(!n||n>i||isNaN(+i))&&(n=i)}),Je(t,n||NaN)}function Bd(e,r,n){const[t,a]=us(n==null?void 0:n.in,e,r);return+Mr(t)==+Mr(a)}function Sh(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function KD(e){return!(!Sh(e)&&typeof e!="number"||isNaN(+Me(e)))}function XD(e,r,n){const[t,a]=us(n==null?void 0:n.in,e,r),i=t.getFullYear()-a.getFullYear(),u=t.getMonth()-a.getMonth();return i*12+u}function Eh(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function ZD(e,r){const[n,t]=us(e,r.start,r.end);return{start:n,end:t}}function Oh(e,r){const{start:n,end:t}=ZD(r==null?void 0:r.in,e);let a=+n>+t;const i=a?+n:+t,u=a?t:n;u.setHours(0,0,0,0),u.setDate(1);let d=1;const c=[];for(;+u<=i;)c.push(Je(n,u)),u.setMonth(u.getMonth()+d);return a?c.reverse():c}function ba(e,r){const n=Me(e,r==null?void 0:r.in);return n.setDate(1),n.setHours(0,0,0,0),n}function Ii(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getFullYear();return n.setFullYear(t+1,0,0),n.setHours(23,59,59,999),n}function Qs(e,r){const n=Me(e,r==null?void 0:r.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Dh(e,r){var d,c,m,g;const n=Ta(),t=(r==null?void 0:r.weekStartsOn)??((c=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((g=(m=n.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,a=Me(e,r==null?void 0:r.in),i=a.getDay(),u=(i<t?-7:0)+6-(i-t);return a.setDate(a.getDate()+u),a.setHours(23,59,59,999),a}function QD(e,r){return Dh(e,{...r,weekStartsOn:1})}function JD(e,r){const n=Me(e,r==null?void 0:r.in);return Kr(n,Qs(n))+1}function qd(e,r){const n=Me(e,r==null?void 0:r.in),t=+ka(n)-+WD(n);return Math.round(t/Jp)+1}function jd(e,r){var g,p,y,v;const n=Me(e,r==null?void 0:r.in),t=n.getFullYear(),a=Ta(),i=(r==null?void 0:r.firstWeekContainsDate)??((p=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:p.firstWeekContainsDate)??a.firstWeekContainsDate??((v=(y=a.locale)==null?void 0:y.options)==null?void 0:v.firstWeekContainsDate)??1,u=Je((r==null?void 0:r.in)||e,0);u.setFullYear(t+1,0,i),u.setHours(0,0,0,0);const d=Pr(u,r),c=Je((r==null?void 0:r.in)||e,0);c.setFullYear(t,0,i),c.setHours(0,0,0,0);const m=Pr(c,r);return+n>=+d?t+1:+n>=+m?t:t-1}function ex(e,r){var d,c,m,g;const n=Ta(),t=(r==null?void 0:r.firstWeekContainsDate)??((c=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((g=(m=n.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??1,a=jd(e,r),i=Je((r==null?void 0:r.in)||e,0);return i.setFullYear(a,0,t),i.setHours(0,0,0,0),Pr(i,r)}function Id(e,r){const n=Me(e,r==null?void 0:r.in),t=+Pr(n,r)-+ex(n,r);return Math.round(t/Jp)+1}function Qe(e,r){const n=e<0?"-":"",t=Math.abs(e).toString().padStart(r,"0");return n+t}const Gr={y(e,r){const n=e.getFullYear(),t=n>0?n:1-n;return Qe(r==="yy"?t%100:t,r.length)},M(e,r){const n=e.getMonth();return r==="M"?String(n+1):Qe(n+1,2)},d(e,r){return Qe(e.getDate(),r.length)},a(e,r){const n=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,r){return Qe(e.getHours()%12||12,r.length)},H(e,r){return Qe(e.getHours(),r.length)},m(e,r){return Qe(e.getMinutes(),r.length)},s(e,r){return Qe(e.getSeconds(),r.length)},S(e,r){const n=r.length,t=e.getMilliseconds(),a=Math.trunc(t*Math.pow(10,n-3));return Qe(a,r.length)}},Ua={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ng={G:function(e,r,n){const t=e.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})}},y:function(e,r,n){if(r==="yo"){const t=e.getFullYear(),a=t>0?t:1-t;return n.ordinalNumber(a,{unit:"year"})}return Gr.y(e,r)},Y:function(e,r,n,t){const a=jd(e,t),i=a>0?a:1-a;if(r==="YY"){const u=i%100;return Qe(u,2)}return r==="Yo"?n.ordinalNumber(i,{unit:"year"}):Qe(i,r.length)},R:function(e,r){const n=Th(e);return Qe(n,r.length)},u:function(e,r){const n=e.getFullYear();return Qe(n,r.length)},Q:function(e,r,n){const t=Math.ceil((e.getMonth()+1)/3);switch(r){case"Q":return String(t);case"QQ":return Qe(t,2);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})}},q:function(e,r,n){const t=Math.ceil((e.getMonth()+1)/3);switch(r){case"q":return String(t);case"qq":return Qe(t,2);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})}},M:function(e,r,n){const t=e.getMonth();switch(r){case"M":case"MM":return Gr.M(e,r);case"Mo":return n.ordinalNumber(t+1,{unit:"month"});case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})}},L:function(e,r,n){const t=e.getMonth();switch(r){case"L":return String(t+1);case"LL":return Qe(t+1,2);case"Lo":return n.ordinalNumber(t+1,{unit:"month"});case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})}},w:function(e,r,n,t){const a=Id(e,t);return r==="wo"?n.ordinalNumber(a,{unit:"week"}):Qe(a,r.length)},I:function(e,r,n){const t=qd(e);return r==="Io"?n.ordinalNumber(t,{unit:"week"}):Qe(t,r.length)},d:function(e,r,n){return r==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Gr.d(e,r)},D:function(e,r,n){const t=JD(e);return r==="Do"?n.ordinalNumber(t,{unit:"dayOfYear"}):Qe(t,r.length)},E:function(e,r,n){const t=e.getDay();switch(r){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})}},e:function(e,r,n,t){const a=e.getDay(),i=(a-t.weekStartsOn+8)%7||7;switch(r){case"e":return String(i);case"ee":return Qe(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,r,n,t){const a=e.getDay(),i=(a-t.weekStartsOn+8)%7||7;switch(r){case"c":return String(i);case"cc":return Qe(i,r.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,r,n){const t=e.getDay(),a=t===0?7:t;switch(r){case"i":return String(a);case"ii":return Qe(a,r.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(t,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(t,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(t,{width:"short",context:"formatting"});case"iiii":default:return n.day(t,{width:"wide",context:"formatting"})}},a:function(e,r,n){const a=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,r,n){const t=e.getHours();let a;switch(t===12?a=Ua.noon:t===0?a=Ua.midnight:a=t/12>=1?"pm":"am",r){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,r,n){const t=e.getHours();let a;switch(t>=17?a=Ua.evening:t>=12?a=Ua.afternoon:t>=4?a=Ua.morning:a=Ua.night,r){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,r,n){if(r==="ho"){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return Gr.h(e,r)},H:function(e,r,n){return r==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Gr.H(e,r)},K:function(e,r,n){const t=e.getHours()%12;return r==="Ko"?n.ordinalNumber(t,{unit:"hour"}):Qe(t,r.length)},k:function(e,r,n){let t=e.getHours();return t===0&&(t=24),r==="ko"?n.ordinalNumber(t,{unit:"hour"}):Qe(t,r.length)},m:function(e,r,n){return r==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Gr.m(e,r)},s:function(e,r,n){return r==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Gr.s(e,r)},S:function(e,r){return Gr.S(e,r)},X:function(e,r,n){const t=e.getTimezoneOffset();if(t===0)return"Z";switch(r){case"X":return rg(t);case"XXXX":case"XX":return ma(t);case"XXXXX":case"XXX":default:return ma(t,":")}},x:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"x":return rg(t);case"xxxx":case"xx":return ma(t);case"xxxxx":case"xxx":default:return ma(t,":")}},O:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+tg(t,":");case"OOOO":default:return"GMT"+ma(t,":")}},z:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+tg(t,":");case"zzzz":default:return"GMT"+ma(t,":")}},t:function(e,r,n){const t=Math.trunc(+e/1e3);return Qe(t,r.length)},T:function(e,r,n){return Qe(+e,r.length)}};function tg(e,r=""){const n=e>0?"-":"+",t=Math.abs(e),a=Math.trunc(t/60),i=t%60;return i===0?n+String(a):n+String(a)+r+Qe(i,2)}function rg(e,r){return e%60===0?(e>0?"-":"+")+Qe(Math.abs(e)/60,2):ma(e,r)}function ma(e,r=""){const n=e>0?"-":"+",t=Math.abs(e),a=Qe(Math.trunc(t/60),2),i=Qe(t%60,2);return n+a+r+i}const ag=(e,r)=>{switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},xh=(e,r)=>{switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},nx=(e,r)=>{const n=e.match(/(P+)(p+)?/)||[],t=n[1],a=n[2];if(!a)return ag(e,r);let i;switch(t){case"P":i=r.dateTime({width:"short"});break;case"PP":i=r.dateTime({width:"medium"});break;case"PPP":i=r.dateTime({width:"long"});break;case"PPPP":default:i=r.dateTime({width:"full"});break}return i.replace("{{date}}",ag(t,r)).replace("{{time}}",xh(a,r))},Yu={p:xh,P:nx},tx=/^D+$/,rx=/^Y+$/,ax=["D","DD","YY","YYYY"];function Rh(e){return tx.test(e)}function Fh(e){return rx.test(e)}function zu(e,r,n){const t=sx(e,r,n);if(console.warn(t),ax.includes(e))throw new RangeError(t)}function sx(e,r,n){const t=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${t} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ox=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ix=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,lx=/^'([^]*?)'?$/,ux=/''/g,dx=/[a-zA-Z]/;function wa(e,r,n){var g,p,y,v,D,E,T,x;const t=Ta(),a=(n==null?void 0:n.locale)??t.locale??Mi,i=(n==null?void 0:n.firstWeekContainsDate)??((p=(g=n==null?void 0:n.locale)==null?void 0:g.options)==null?void 0:p.firstWeekContainsDate)??t.firstWeekContainsDate??((v=(y=t.locale)==null?void 0:y.options)==null?void 0:v.firstWeekContainsDate)??1,u=(n==null?void 0:n.weekStartsOn)??((E=(D=n==null?void 0:n.locale)==null?void 0:D.options)==null?void 0:E.weekStartsOn)??t.weekStartsOn??((x=(T=t.locale)==null?void 0:T.options)==null?void 0:x.weekStartsOn)??0,d=Me(e,n==null?void 0:n.in);if(!KD(d))throw new RangeError("Invalid time value");let c=r.match(ix).map(F=>{const w=F[0];if(w==="p"||w==="P"){const M=Yu[w];return M(F,a.formatLong)}return F}).join("").match(ox).map(F=>{if(F==="''")return{isToken:!1,value:"'"};const w=F[0];if(w==="'")return{isToken:!1,value:cx(F)};if(ng[w])return{isToken:!0,value:F};if(w.match(dx))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return{isToken:!1,value:F}});a.localize.preprocessor&&(c=a.localize.preprocessor(d,c));const m={firstWeekContainsDate:i,weekStartsOn:u,locale:a};return c.map(F=>{if(!F.isToken)return F.value;const w=F.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Fh(w)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Rh(w))&&zu(w,r,String(e));const M=ng[w[0]];return M(d,w,a.localize,m)}).join("")}function cx(e){const r=e.match(lx);return r?r[1].replace(ux,"'"):e}function fx(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getFullYear(),a=n.getMonth(),i=Je(n,0);return i.setFullYear(t,a+1,0),i.setHours(0,0,0,0),i.getDate()}function mx(){return Object.assign({},Ta())}function gx(e,r){const n=Me(e,r==null?void 0:r.in).getDay();return n===0?7:n}function Cd(e,r){return Me(e,r==null?void 0:r.in).getMonth()}function Ld(e,r){return Me(e,r==null?void 0:r.in).getFullYear()}function Nh(e,r){return+Me(e)>+Me(r)}function Js(e,r){return+Me(e)<+Me(r)}function px(e,r){const n=hx(r)?new r(0):Je(r,0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}function hx(e){var r;return typeof e=="function"&&((r=e.prototype)==null?void 0:r.constructor)===e}const yx=10;class Ah{constructor(){ce(this,"subPriority",0)}validate(r,n){return!0}}class vx extends Ah{constructor(r,n,t,a,i){super(),this.value=r,this.validateValue=n,this.setValue=t,this.priority=a,i&&(this.subPriority=i)}validate(r,n){return this.validateValue(r,this.value,n)}set(r,n,t){return this.setValue(r,n,this.value,t)}}class kx extends Ah{constructor(n,t){super();ce(this,"priority",yx);ce(this,"subPriority",-1);this.context=n||(a=>Je(t,a))}set(n,t){return t.timestampIsSet?n:Je(n,px(n,this.context))}}class We{run(r,n,t,a){const i=this.parse(r,n,t,a);return i?{setter:new vx(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(r,n,t){return!0}}class bx extends We{constructor(){super(...arguments);ce(this,"priority",140);ce(this,"incompatibleTokens",["R","u","t","T"])}parse(n,t,a){switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,t,a){return t.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const Sn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},or={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function En(e,r){return e&&{value:r(e.value),rest:e.rest}}function vn(e,r){const n=r.match(e);return n?{value:parseInt(n[0],10),rest:r.slice(n[0].length)}:null}function ir(e,r){const n=r.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:r.slice(1)};const t=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,i=n[3]?parseInt(n[3],10):0,u=n[5]?parseInt(n[5],10):0;return{value:t*(a*XS+i*KS+u*ZS),rest:r.slice(n[0].length)}}function Ph(e){return vn(Sn.anyDigitsSigned,e)}function bn(e,r){switch(e){case 1:return vn(Sn.singleDigit,r);case 2:return vn(Sn.twoDigits,r);case 3:return vn(Sn.threeDigits,r);case 4:return vn(Sn.fourDigits,r);default:return vn(new RegExp("^\\d{1,"+e+"}"),r)}}function vi(e,r){switch(e){case 1:return vn(Sn.singleDigitSigned,r);case 2:return vn(Sn.twoDigitsSigned,r);case 3:return vn(Sn.threeDigitsSigned,r);case 4:return vn(Sn.fourDigitsSigned,r);default:return vn(new RegExp("^-?\\d{1,"+e+"}"),r)}}function $d(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Mh(e,r){const n=r>0,t=n?r:1-r;let a;if(t<=50)a=e||100;else{const i=t+50,u=Math.trunc(i/100)*100,d=e>=i%100;a=e+u-(d?100:0)}return n?a:1-a}function Bh(e){return e%400===0||e%4===0&&e%100!==0}class wx extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,t,a){const i=u=>({year:u,isTwoDigitYear:t==="yy"});switch(t){case"y":return En(bn(4,n),i);case"yo":return En(a.ordinalNumber(n,{unit:"year"}),i);default:return En(bn(t.length,n),i)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,a){const i=n.getFullYear();if(a.isTwoDigitYear){const d=Mh(a.year,i);return n.setFullYear(d,0,1),n.setHours(0,0,0,0),n}const u=!("era"in t)||t.era===1?a.year:1-a.year;return n.setFullYear(u,0,1),n.setHours(0,0,0,0),n}}class _x extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,t,a){const i=u=>({year:u,isTwoDigitYear:t==="YY"});switch(t){case"Y":return En(bn(4,n),i);case"Yo":return En(a.ordinalNumber(n,{unit:"year"}),i);default:return En(bn(t.length,n),i)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,a,i){const u=jd(n,i);if(a.isTwoDigitYear){const c=Mh(a.year,u);return n.setFullYear(c,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Pr(n,i)}const d=!("era"in t)||t.era===1?a.year:1-a.year;return n.setFullYear(d,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Pr(n,i)}}class Tx extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,t){return vi(t==="R"?4:t.length,n)}set(n,t,a){const i=Je(n,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),ka(i)}}class Sx extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,t){return vi(t==="u"?4:t.length,n)}set(n,t,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class Ex extends We{constructor(){super(...arguments);ce(this,"priority",120);ce(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"Q":case"QQ":return bn(t.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=1&&t<=4}set(n,t,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class Ox extends We{constructor(){super(...arguments);ce(this,"priority",120);ce(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"q":case"qq":return bn(t.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=1&&t<=4}set(n,t,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class Dx extends We{constructor(){super(...arguments);ce(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ce(this,"priority",110)}parse(n,t,a){const i=u=>u-1;switch(t){case"M":return En(vn(Sn.month,n),i);case"MM":return En(bn(2,n),i);case"Mo":return En(a.ordinalNumber(n,{unit:"month"}),i);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=11}set(n,t,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class xx extends We{constructor(){super(...arguments);ce(this,"priority",110);ce(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,t,a){const i=u=>u-1;switch(t){case"L":return En(vn(Sn.month,n),i);case"LL":return En(bn(2,n),i);case"Lo":return En(a.ordinalNumber(n,{unit:"month"}),i);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=11}set(n,t,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function Rx(e,r,n){const t=Me(e,n==null?void 0:n.in),a=Id(t,n)-r;return t.setDate(t.getDate()-a*7),Me(t,n==null?void 0:n.in)}class Fx extends We{constructor(){super(...arguments);ce(this,"priority",100);ce(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,t,a){switch(t){case"w":return vn(Sn.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return bn(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,a,i){return Pr(Rx(n,a,i),i)}}function Nx(e,r,n){const t=Me(e,n==null?void 0:n.in),a=qd(t,n)-r;return t.setDate(t.getDate()-a*7),t}class Ax extends We{constructor(){super(...arguments);ce(this,"priority",100);ce(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,t,a){switch(t){case"I":return vn(Sn.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return bn(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,a){return ka(Nx(n,a))}}const Px=[31,28,31,30,31,30,31,31,30,31,30,31],Mx=[31,29,31,30,31,30,31,31,30,31,30,31];class Bx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"subPriority",1);ce(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"d":return vn(Sn.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return bn(t.length,n)}}validate(n,t){const a=n.getFullYear(),i=Bh(a),u=n.getMonth();return i?t>=1&&t<=Mx[u]:t>=1&&t<=Px[u]}set(n,t,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class qx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"subpriority",1);ce(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,t,a){switch(t){case"D":case"DD":return vn(Sn.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return bn(t.length,n)}}validate(n,t){const a=n.getFullYear();return Bh(a)?t>=1&&t<=366:t>=1&&t<=365}set(n,t,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function Hd(e,r,n){var p,y,v,D;const t=Ta(),a=(n==null?void 0:n.weekStartsOn)??((y=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:y.weekStartsOn)??t.weekStartsOn??((D=(v=t.locale)==null?void 0:v.options)==null?void 0:D.weekStartsOn)??0,i=Me(e,n==null?void 0:n.in),u=i.getDay(),c=(r%7+7)%7,m=7-a,g=r<0||r>6?r-(u+m)%7:(c+m)%7-(u+m)%7;return Zs(i,g,n)}class jx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,a,i){return n=Hd(n,a,i),n.setHours(0,0,0,0),n}}class Ix extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,t,a,i){const u=d=>{const c=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+c};switch(t){case"e":case"ee":return En(bn(t.length,n),u);case"eo":return En(a.ordinalNumber(n,{unit:"day"}),u);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,a,i){return n=Hd(n,a,i),n.setHours(0,0,0,0),n}}class Cx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,t,a,i){const u=d=>{const c=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+c};switch(t){case"c":case"cc":return En(bn(t.length,n),u);case"co":return En(a.ordinalNumber(n,{unit:"day"}),u);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=6}set(n,t,a,i){return n=Hd(n,a,i),n.setHours(0,0,0,0),n}}function Lx(e,r,n){const t=Me(e,n==null?void 0:n.in),a=gx(t,n),i=r-a;return Zs(t,i,n)}class $x extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,t,a){const i=u=>u===0?7:u;switch(t){case"i":case"ii":return bn(t.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return En(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiii":return En(a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiiii":return En(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiii":default:return En(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i)}}validate(n,t){return t>=1&&t<=7}set(n,t,a){return n=Lx(n,a),n.setHours(0,0,0,0),n}}class Hx extends We{constructor(){super(...arguments);ce(this,"priority",80);ce(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,t,a){switch(t){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,a){return n.setHours($d(a),0,0,0),n}}class Vx extends We{constructor(){super(...arguments);ce(this,"priority",80);ce(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,t,a){switch(t){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,a){return n.setHours($d(a),0,0,0),n}}class Ux extends We{constructor(){super(...arguments);ce(this,"priority",80);ce(this,"incompatibleTokens",["a","b","t","T"])}parse(n,t,a){switch(t){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,a){return n.setHours($d(a),0,0,0),n}}class Wx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,t,a){switch(t){case"h":return vn(Sn.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return bn(t.length,n)}}validate(n,t){return t>=1&&t<=12}set(n,t,a){const i=n.getHours()>=12;return i&&a<12?n.setHours(a+12,0,0,0):!i&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class Gx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,t,a){switch(t){case"H":return vn(Sn.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return bn(t.length,n)}}validate(n,t){return t>=0&&t<=23}set(n,t,a){return n.setHours(a,0,0,0),n}}class Yx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,t,a){switch(t){case"K":return vn(Sn.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return bn(t.length,n)}}validate(n,t){return t>=0&&t<=11}set(n,t,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class zx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,t,a){switch(t){case"k":return vn(Sn.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return bn(t.length,n)}}validate(n,t){return t>=1&&t<=24}set(n,t,a){const i=a<=24?a%24:a;return n.setHours(i,0,0,0),n}}class Kx extends We{constructor(){super(...arguments);ce(this,"priority",60);ce(this,"incompatibleTokens",["t","T"])}parse(n,t,a){switch(t){case"m":return vn(Sn.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return bn(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,a){return n.setMinutes(a,0,0),n}}class Xx extends We{constructor(){super(...arguments);ce(this,"priority",50);ce(this,"incompatibleTokens",["t","T"])}parse(n,t,a){switch(t){case"s":return vn(Sn.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return bn(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,a){return n.setSeconds(a,0),n}}class Zx extends We{constructor(){super(...arguments);ce(this,"priority",30);ce(this,"incompatibleTokens",["t","T"])}parse(n,t){const a=i=>Math.trunc(i*Math.pow(10,-t.length+3));return En(bn(t.length,n),a)}set(n,t,a){return n.setMilliseconds(a),n}}class Qx extends We{constructor(){super(...arguments);ce(this,"priority",10);ce(this,"incompatibleTokens",["t","T","x"])}parse(n,t){switch(t){case"X":return ir(or.basicOptionalMinutes,n);case"XX":return ir(or.basic,n);case"XXXX":return ir(or.basicOptionalSeconds,n);case"XXXXX":return ir(or.extendedOptionalSeconds,n);case"XXX":default:return ir(or.extended,n)}}set(n,t,a){return t.timestampIsSet?n:Je(n,n.getTime()-yi(n)-a)}}class Jx extends We{constructor(){super(...arguments);ce(this,"priority",10);ce(this,"incompatibleTokens",["t","T","X"])}parse(n,t){switch(t){case"x":return ir(or.basicOptionalMinutes,n);case"xx":return ir(or.basic,n);case"xxxx":return ir(or.basicOptionalSeconds,n);case"xxxxx":return ir(or.extendedOptionalSeconds,n);case"xxx":default:return ir(or.extended,n)}}set(n,t,a){return t.timestampIsSet?n:Je(n,n.getTime()-yi(n)-a)}}class eR extends We{constructor(){super(...arguments);ce(this,"priority",40);ce(this,"incompatibleTokens","*")}parse(n){return Ph(n)}set(n,t,a){return[Je(n,a*1e3),{timestampIsSet:!0}]}}class nR extends We{constructor(){super(...arguments);ce(this,"priority",20);ce(this,"incompatibleTokens","*")}parse(n){return Ph(n)}set(n,t,a){return[Je(n,a),{timestampIsSet:!0}]}}const tR={G:new bx,y:new wx,Y:new _x,R:new Tx,u:new Sx,Q:new Ex,q:new Ox,M:new Dx,L:new xx,w:new Fx,I:new Ax,d:new Bx,D:new qx,E:new jx,e:new Ix,c:new Cx,i:new $x,a:new Hx,b:new Vx,B:new Ux,h:new Wx,H:new Gx,K:new Yx,k:new zx,m:new Kx,s:new Xx,S:new Zx,X:new Qx,x:new Jx,t:new eR,T:new nR},rR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,aR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,sR=/^'([^]*?)'?$/,oR=/''/g,iR=/\S/,lR=/[a-zA-Z]/;function Xa(e,r,n,t){var T,x,F,w,M,k,N,R;const a=()=>Je((t==null?void 0:t.in)||n,NaN),i=mx(),u=(t==null?void 0:t.locale)??i.locale??Mi,d=(t==null?void 0:t.firstWeekContainsDate)??((x=(T=t==null?void 0:t.locale)==null?void 0:T.options)==null?void 0:x.firstWeekContainsDate)??i.firstWeekContainsDate??((w=(F=i.locale)==null?void 0:F.options)==null?void 0:w.firstWeekContainsDate)??1,c=(t==null?void 0:t.weekStartsOn)??((k=(M=t==null?void 0:t.locale)==null?void 0:M.options)==null?void 0:k.weekStartsOn)??i.weekStartsOn??((R=(N=i.locale)==null?void 0:N.options)==null?void 0:R.weekStartsOn)??0;if(!r)return e?a():Me(n,t==null?void 0:t.in);const m={firstWeekContainsDate:d,weekStartsOn:c,locale:u},g=[new kx(t==null?void 0:t.in,n)],p=r.match(aR).map(A=>{const j=A[0];if(j in Yu){const z=Yu[j];return z(A,u.formatLong)}return A}).join("").match(rR),y=[];for(let A of p){!(t!=null&&t.useAdditionalWeekYearTokens)&&Fh(A)&&zu(A,r,e),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Rh(A)&&zu(A,r,e);const j=A[0],z=tR[j];if(z){const{incompatibleTokens:V}=z;if(Array.isArray(V)){const L=y.find(U=>V.includes(U.token)||U.token===j);if(L)throw new RangeError(`The format string mustn't contain \`${L.fullToken}\` and \`${A}\` at the same time`)}else if(z.incompatibleTokens==="*"&&y.length>0)throw new RangeError(`The format string mustn't contain \`${A}\` and any other token at the same time`);y.push({token:j,fullToken:A});const W=z.run(e,A,u.match,m);if(!W)return a();g.push(W.setter),e=W.rest}else{if(j.match(lR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+j+"`");if(A==="''"?A="'":j==="'"&&(A=uR(A)),e.indexOf(A)===0)e=e.slice(A.length);else return a()}}if(e.length>0&&iR.test(e))return a();const v=g.map(A=>A.priority).sort((A,j)=>j-A).filter((A,j,z)=>z.indexOf(A)===j).map(A=>g.filter(j=>j.priority===A).sort((j,z)=>z.subPriority-j.subPriority)).map(A=>A[0]);let D=Me(n,t==null?void 0:t.in);if(isNaN(+D))return a();const E={};for(const A of v){if(!A.validate(D,m))return a();const j=A.set(D,E,m);Array.isArray(j)?(D=j[0],Object.assign(E,j[1])):D=j}return D}function uR(e){return e.match(sR)[1].replace(oR,"'")}function dR(e,r,n){const[t,a]=us(n==null?void 0:n.in,e,r);return t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth()}function qh(e,r,n){const[t,a]=us(n==null?void 0:n.in,e,r);return t.getFullYear()===a.getFullYear()}function cR(e,r,n){return Zs(e,-r,n)}function jh(e,r,n){const t=Me(e,n==null?void 0:n.in),a=t.getFullYear(),i=t.getDate(),u=Je(e,0);u.setFullYear(a,r,15),u.setHours(0,0,0,0);const d=fx(u);return t.setMonth(r,Math.min(i,d)),t}function Ih(e,r,n){const t=Me(e,n==null?void 0:n.in);return isNaN(+t)?Je(e,NaN):(t.setFullYear(r),t)}function fR(e,r,n){return Pd(e,-r,n)}function mR(e,r,n){const{years:t=0,months:a=0,weeks:i=0,days:u=0,hours:d=0,minutes:c=0,seconds:m=0}=r,g=fR(e,a+t*12,n),p=cR(g,u+i*7,n),y=c+d*60,D=(m+y*60)*1e3;return Je(e,+p-D)}var Za=typeof document<"u"?O.useLayoutEffect:O.useEffect;const gR={...Vp},pR=gR.useInsertionEffect,hR=pR||(e=>e());function yR(e){const r=O.useRef(()=>{});return hR(()=>{r.current=e}),O.useCallback(function(){for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return r.current==null?void 0:r.current(...t)},[])}const vR={...Vp};let sg=!1,kR=0;const og=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+kR++;function bR(){const[e,r]=O.useState(()=>sg?og():void 0);return Za(()=>{e==null&&r(og())},[]),O.useEffect(()=>{sg=!0},[]),e}const wR=vR.useId,Ch=wR||bR;function _R(){const e=new Map;return{emit(r,n){var t;(t=e.get(r))==null||t.forEach(a=>a(n))},on(r,n){e.has(r)||e.set(r,new Set),e.get(r).add(n)},off(r,n){var t;(t=e.get(r))==null||t.delete(n)}}}const TR=O.createContext(null),SR=O.createContext(null),ER=()=>{var e;return((e=O.useContext(TR))==null?void 0:e.id)||null},OR=()=>O.useContext(SR);function DR(e){return"data-floating-ui-"+e}const xR=O.createContext(null),ig=DR("portal");function RR(e){e===void 0&&(e={});const{id:r,root:n}=e,t=Ch(),a=FR(),[i,u]=O.useState(null),d=O.useRef(null);return Za(()=>()=>{i==null||i.remove(),queueMicrotask(()=>{d.current=null})},[i]),Za(()=>{if(!t||d.current)return;const c=r?document.getElementById(r):null;if(!c)return;const m=document.createElement("div");m.id=t,m.setAttribute(ig,""),c.appendChild(m),d.current=m,u(m)},[r,t]),Za(()=>{if(n===null||!t||d.current)return;let c=n||(a==null?void 0:a.portalNode);c&&!Wn(c)&&(c=c.current),c=c||document.body;let m=null;r&&(m=document.createElement("div"),m.id=r,c.appendChild(m));const g=document.createElement("div");g.id=t,g.setAttribute(ig,""),c=m||c,c.appendChild(g),d.current=g,u(g)},[r,n,t,a]),i}const FR=()=>O.useContext(xR);function NR(e){const{open:r=!1,onOpenChange:n,elements:t}=e,a=Ch(),i=O.useRef({}),[u]=O.useState(()=>_R()),d=ER()!=null,[c,m]=O.useState(t.reference),g=yR((v,D,E)=>{i.current.openEvent=v?D:void 0,u.emit("openchange",{open:v,event:D,reason:E,nested:d}),n==null||n(v,D,E)}),p=O.useMemo(()=>({setPositionReference:m}),[]),y=O.useMemo(()=>({reference:c||t.reference||null,floating:t.floating||null,domReference:t.reference}),[c,t.reference,t.floating]);return O.useMemo(()=>({dataRef:i,open:r,onOpenChange:g,elements:y,events:u,floatingId:a,refs:p}),[r,g,y,u,a,p])}function AR(e){e===void 0&&(e={});const{nodeId:r}=e,n=NR({...e,elements:{reference:null,floating:null,...e.elements}}),t=e.rootContext||n,a=t.elements,[i,u]=O.useState(null),[d,c]=O.useState(null),g=(a==null?void 0:a.domReference)||i,p=O.useRef(null),y=OR();Za(()=>{g&&(p.current=g)},[g]);const v=DD({...e,elements:{...a,...d&&{reference:d}}}),D=O.useCallback(w=>{const M=Wn(w)?{getBoundingClientRect:()=>w.getBoundingClientRect(),getClientRects:()=>w.getClientRects(),contextElement:w}:w;c(M),v.refs.setReference(M)},[v.refs]),E=O.useCallback(w=>{(Wn(w)||w===null)&&(p.current=w,u(w)),(Wn(v.refs.reference.current)||v.refs.reference.current===null||w!==null&&!Wn(w))&&v.refs.setReference(w)},[v.refs]),T=O.useMemo(()=>({...v.refs,setReference:E,setPositionReference:D,domReference:p}),[v.refs,E,D]),x=O.useMemo(()=>({...v.elements,domReference:g}),[v.elements,g]),F=O.useMemo(()=>({...v,...t,refs:T,elements:x,nodeId:r}),[v,T,x,r,t]);return Za(()=>{t.dataRef.current.floatingContext=F;const w=y==null?void 0:y.nodesRef.current.find(M=>M.id===r);w&&(w.context=F)}),O.useMemo(()=>({...v,context:F,refs:T,elements:x}),[v,T,x,F])}const Ci=()=>{const{cn:e}=ke();return b.createElement(Qp,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Lh=()=>{const{cn:e}=ke();return b.createElement(Qp,{title:Kt("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},ki=O.createContext(null),Sa=(e,r)=>{var n,t,a;const{size:i,error:u,errorId:d}=e,c=O.useContext(ki),m=fr(),g=(n=e.id)!==null&&n!==void 0?n:`${r}-${m}`,p=d??`${r}-error-${m}`,y=`${r}-description-${m}`,v=(c==null?void 0:c.disabled)||e.disabled,D=((c==null?void 0:c.readOnly)||e.readOnly)&&!v||void 0,E=!v&&!D&&!!(u||c!=null&&c.error),T=!v&&!D&&!!u&&typeof u!="boolean",x=Object.assign({},E?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:T,hasError:E,errorId:p,inputDescriptionId:y,size:(t=i??(c==null?void 0:c.size))!==null&&t!==void 0?t:"medium",readOnly:D,inputProps:Object.assign(Object.assign({id:g},x),{"aria-describedby":Gs(e["aria-describedby"],{[y]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[p]:T,[(a=c==null?void 0:c.errorId)!==null&&a!==void 0?a:""]:E&&!!(c!=null&&c.error)})||void 0,disabled:v})}},$h={global:{dateLocale:ah,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Hh={global:{dateLocale:oh,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Vh=(e="nb")=>{switch(e){case"nn":return oh;case"en":return ah;default:return sh}},Uh=e=>{switch(e){case"nn":return Hh.DatePicker;case"en":case"en-GB":return $h.DatePicker;default:return}},PR=e=>{switch(e){case"nn":return Hh.global;case"en":case"en-GB":return $h.global;default:return}},[Wh,Li]=Ri();var MR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const[BR,Vd]=Ri({errorMessage:"useDateInputContext must be used with DateInputContext"}),Gh=O.forwardRef((e,r)=>{const{className:n,hideLabel:t=!1,label:a,description:i,variant:u="datepicker",setAnchorRef:d}=e,c=MR(e,["className","hideLabel","label","description","variant","setAnchorRef"]),m=O.useRef(null),g=Li().translate,{cn:p}=ke(),y=u==="datepicker",v={prefix:y?"datepicker-input":"monthpicker-input",iconTitle:{open:y?"openDatePicker":"openMonthPicker",close:y?"closeDatePicker":"closeMonthPicker"}},D=Vd(),{inputProps:E,size:T="medium",inputDescriptionId:x,errorId:F,showErrorMsg:w,hasError:M,readOnly:k}=Sa(e,v.prefix);return b.createElement("div",{className:p(n,"navds-form-field",`navds-form-field--${T}`,"navds-date__field",{"navds-text-field--error":M,"navds-date__field--error":M,"navds-form-field--disabled":!!E.disabled,"navds-text-field--disabled":!!E.disabled,"navds-form-field--readonly":k,"navds-text-field--readonly":k,"navds-date__field--readonly":k})},b.createElement(jn,{htmlFor:E.id,size:T,className:p("navds-form-field__label",{"navds-sr-only":t})},k&&b.createElement(Ci,null),a),!!i&&b.createElement(fn,{as:"div",className:p("navds-form-field__description",{"navds-sr-only":t}),id:x,size:T},i),b.createElement("div",{className:p("navds-date__field-wrapper")},b.createElement("input",Object.assign({ref:r},In(c,["error","errorId","size"]),E,{autoComplete:"off","aria-controls":D!=null&&D.open?D.ariaId:void 0,readOnly:k,className:p("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${T}`),size:y?11:14})),b.createElement("button",{disabled:E.disabled||k,tabIndex:k||D!=null&&D.open?-1:0,onClick:()=>{D==null||D.onOpen(),d==null||d(m.current)},type:"button",className:p("navds-date__field-button"),ref:m},b.createElement(TS,{title:g(v.iconTitle[D!=null&&D.open?"close":"open"])}))),b.createElement("div",{className:p("navds-form-field__error"),id:F,"aria-relevant":"additions removals","aria-live":"polite"},w&&b.createElement(ls,{size:T,showIcon:!0},e.error)))}),qR=O.forwardRef((e,r)=>b.createElement(Gh,Object.assign({},e,{ref:r})));O.forwardRef((e,r)=>b.createElement(Gh,Object.assign({},e,{variant:"monthpicker",ref:r})));var jR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const IR=O.forwardRef((e,r)=>{var{className:n}=e,t=jR(e,["className"]);const{cn:a}=ke();return b.createElement("div",Object.assign({},t,{ref:r,className:a("navds-modal__body",n)}))});var CR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const LR=O.forwardRef((e,r)=>{var{className:n}=e,t=CR(e,["className"]);const{cn:a}=ke();return b.createElement("div",Object.assign({},t,{ref:r,className:a("navds-modal__footer",n)}))});var $R=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Yh=O.forwardRef((e,r)=>{var{children:n,className:t,closeButton:a=!0}=e,i=$R(e,["children","className","closeButton"]);const{cn:u}=ke(),d=Pi(),c=Kt("global");return b.createElement("div",Object.assign({},i,{ref:r,className:u("navds-modal__header",t)}),d.closeHandler&&a&&b.createElement(Yt,{type:"button",className:u("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:m=>{["Enter"," "].includes(m.key)&&m.repeat&&m.preventDefault()},onClick:d.closeHandler,icon:b.createElement(Us,{title:c("close")})}),n)}),lg=({clientX:e,clientY:r},{left:n,top:t,right:a,bottom:i})=>!(e<n||r<t||e>a||r>i);function HR(e,r,n){if(!(r&&r.closeButton===!1))return n?()=>{var t;return n()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const Jo="navds-modal__document-body";function VR(e,r,n){b.useEffect(()=>{if(n||!e.current||!r)return;e.current.open&&document.body.classList.add(Jo);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Jo):document.body.classList.remove(Jo)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(Jo)}},[e,r,n])}const Ya=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function zh(e,r){var n="on"+r.type.toLowerCase();return typeof e[n]=="function"&&e[n](r),e.dispatchEvent(r)}function $s(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Kh(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function UR(e,r){for(var n=0;n<e.length;++n)if(e[n]===r)return!0;return!1}function pu(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Xh(e){var r=["button","input","keygen","select","textarea"],n=r.map(function(u){return u+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(n.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),i=0;i<a.length&&!(a[i].tagName&&a[i].shadowRoot&&(t=Xh(a[i].shadowRoot),t));i++);return t}function ug(e){return e.isConnected||document.body.contains(e)}function Zh(e){if(e.submitter)return e.submitter;var r=e.target;if(!(r instanceof HTMLFormElement))return null;var n=He.formSubmitter;if(!n){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;n=a.activeElement}return!n||n.form!==r?null:n}function WR(e){if(!e.defaultPrevented){var r=e.target,n=He.imagemapUseValue,t=Zh(e);n===null&&t&&(n=t.value);var a=$s(r);if(a){var i=t&&t.getAttribute("formmethod")||r.getAttribute("method");i==="dialog"&&(e.preventDefault(),n!=null?a.close(n):a.close())}}}function Qh(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",WR,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var r=new MutationObserver(this.maybeHideModal.bind(this));r.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,t=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),a,i=function(u){if(u.target===e){var d="DOMNodeRemoved";n|=u.type.substr(0,d.length)===d,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(u){e.addEventListener(u,i)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Qh.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&ug(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),He.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var r=document.createElement("div");this.dialog_.insertBefore(r,this.dialog_.firstChild),r.tabIndex=-1,r.focus(),this.dialog_.removeChild(r)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Xh(this.dialog_)),Kh(document.activeElement),e&&e.focus()},updateZIndex:function(e,r){if(e<r)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=r},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!ug(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!He.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,He.needsCentering(this.dialog_)?(He.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var r=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});zh(this.dialog_,r)}};var He={};He.reposition=function(e){var r=document.body.scrollTop||document.documentElement.scrollTop,n=r+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(r,n)+"px"};He.isInlinePositionSetByStylesheet=function(e){for(var r=0;r<document.styleSheets.length;++r){var n=document.styleSheets[r],t=null;try{t=n.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var i=t[a],u=null;try{u=document.querySelectorAll(i.selectorText)}catch{}if(!(!u||!UR(u,e))){var d=i.style.getPropertyValue("top"),c=i.style.getPropertyValue("bottom");if(d&&d!=="auto"||c&&c!=="auto")return!0}}}return!1};He.needsCentering=function(e){var r=window.getComputedStyle(e);return r.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!He.isInlinePositionSetByStylesheet(e)};He.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Qh(e)};He.registerDialog=function(e){e.showModal||He.forceRegisterDialog(e)};He.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(r){this.forwardTab_=void 0,r.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(r){var n=[];r.forEach(function(t){for(var a=0,i;i=t.removedNodes[a];++a)i instanceof Element&&(i.localName==="dialog"&&n.push(i),n=n.concat(i.querySelectorAll("dialog")))}),n.length&&e(n)}))};He.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};He.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};He.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,r=0,n;n=this.pendingDialogStack[r];++r)n.updateZIndex(--e,--e),r===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};He.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=$s(e);){for(var r=0,n;n=this.pendingDialogStack[r];++r)if(n.dialog===e)return r===0;e=e.parentElement}return!1};He.DialogManager.prototype.handleFocus_=function(e){var r=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(r)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Kh(r),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],t=n.dialog,a=t.compareDocumentPosition(r);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():r!==document.documentElement&&document.documentElement.focus()),!1}};He.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var r=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&zh(n.dialog,r)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};He.DialogManager.prototype.checkDOM_=function(e){var r=this.pendingDialogStack.slice();r.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};He.DialogManager.prototype.pushDialog=function(e){var r=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=r?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};He.DialogManager.prototype.removeDialog=function(e){var r=this.pendingDialogStack.indexOf(e);r!==-1&&(this.pendingDialogStack.splice(r,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Ya&&(He.dm=new He.DialogManager,He.formSubmitter=null,He.imagemapUseValue=null);if(Ya){var dg=document.createElement("form");if(dg.setAttribute("method","dialog"),dg.method!=="dialog"){var Wa=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Wa){var GR=Wa.get;Wa.get=function(){return pu(this)?"dialog":GR.call(this)};var YR=Wa.set;Wa.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):YR.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Wa)}}document.addEventListener("click",function(e){if(He.formSubmitter=null,He.imagemapUseValue=null,!e.defaultPrevented){var r=e.target;if("composedPath"in e){var n=e.composedPath();r=n.shift()||r}if(!(!r||!pu(r.form))){var t=r.type==="submit"&&["button","input"].indexOf(r.localName)>-1;if(!t){if(!(r.localName==="input"&&r.type==="image"))return;He.imagemapUseValue=e.offsetX+","+e.offsetY}var a=$s(r);a&&(He.formSubmitter=r)}}},!1),document.addEventListener("submit",function(e){var r=e.target,n=$s(r);if(!n){var t=Zh(e),a=t&&t.getAttribute("formmethod")||r.getAttribute("method");a==="dialog"&&e.preventDefault()}});var zR=HTMLFormElement.prototype.submit,KR=function(){if(!pu(this))return zR.call(this);var e=$s(this);e&&e.close()};HTMLFormElement.prototype.submit=KR}var XR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const $i=O.forwardRef((e,r)=>{var n,t,{header:a,children:i,open:u,onBeforeClose:d,onCancel:c,closeOnBackdropClick:m,width:g,placement:p,portal:y,className:v,"aria-labelledby":D,style:E,onClick:T,onMouseDown:x}=e,F=XR(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:w}=ke(),M=O.useRef(w("navds-modal--polyfilled")),k=O.useRef(null),N=ss(k,r),R=fr(),A=(n=Od())===null||n===void 0?void 0:n.rootElement,j=RR({root:A}),z=Vd(!1),V=Pi(!1)!==void 0;V&&!z&&console.error("Modals should not be nested"),O.useEffect(()=>{Ya&&k.current&&j&&(He.registerDialog(k.current),k.current.classList.add(M.current)),k.current&&j&&(k.current.autofocus=!0)},[j]),O.useEffect(()=>{k.current&&j&&u!==void 0&&(u&&!k.current.open?k.current.showModal():!u&&k.current.open&&k.current.close())},[j,u]),VR(k,j,V);const W=typeof g=="string"&&["small","medium"].includes(g),L=w("navds-modal",v,{[M.current]:Ya,"navds-modal--autowidth":!g,[`navds-modal--${g}`]:W,"navds-modal--top":p==="top"&&!Ya}),U=Object.assign(Object.assign({},E),W?{}:{width:g}),G=O.useRef({clientX:0,clientY:0}),$=Te=>{G.current=Te},J=m&&!Ya,Y=Te=>{if(Te.target!==k.current)return;const Ee=k.current.getBoundingClientRect();lg(G.current,Ee)||lg(Te,Ee)||d!==void 0&&d()===!1||k.current.close()},re=Te=>{d&&d()===!1&&Te.preventDefault()},se=!D&&!F["aria-label"]&&a?R:D,de=b.createElement("dialog",Object.assign({},F,{ref:N,className:L,style:U,onCancel:pa(c,re),onClick:J?pa(T,Y):T,onMouseDown:J?pa(x,$):x,"aria-labelledby":se}),b.createElement(VS,{closeHandler:HR(k,a,d),ref:k},a&&b.createElement(Yh,null,a.label&&b.createElement(Ni,{className:w("navds-modal__label")},a.label),b.createElement(Ai,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:R},a.icon&&b.createElement("span",{className:w("navds-modal__header-icon")},a.icon),a.heading)),i));return y?j?Sd.createPortal(de,j):null:de});$i.Header=Yh;$i.Body=IR;$i.Footer=LR;var ZR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const QR=O.forwardRef((e,r)=>{var{className:n}=e,t=ZR(e,["className"]);const{cn:a}=ke();return b.createElement("div",Object.assign({},t,{ref:r,className:a("navds-popover__content",n)}))});var JR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Jh=O.forwardRef((e,r)=>{var{className:n,children:t,anchorEl:a,arrow:i=!0,open:u,onClose:d,placement:c="top",offset:m,strategy:g,flip:p=!0}=e,y=JR(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:v}=ke(),D=O.useRef(null),E=Pi(!1)!==void 0,T=Vd(!1),x=g??(E?"fixed":"absolute"),F=T?!1:p,w=Ys(!1),{update:M,refs:k,placement:N,middlewareData:{arrow:{x:R,y:A}={}},floatingStyles:j}=AR({strategy:x,placement:c,open:u,middleware:[RD(m??(w?8:i?16:4)),F&&ND({padding:5,fallbackPlacements:["bottom","top"]}),FD({padding:12}),AD({element:D,padding:8})]});es(()=>{k.setReference(a)},[a]);const z=ss(k.setFloating,r);es(()=>{if(!k.reference.current||!k.floating.current||!u)return;const W=_D(k.reference.current,k.floating.current,M);return()=>W()},[k.floating,k.reference,M,u,a]);const V={top:"bottom",right:"left",bottom:"top",left:"right"}[N.split("-")[0]];return b.createElement(UO,{asChild:!0,safeZone:{anchor:a,dismissable:k.floating.current},onDismiss:()=>u&&(d==null?void 0:d()),enabled:u},b.createElement("div",Object.assign({ref:z},y,{className:v("navds-popover",n,{"navds-popover--hidden":!u||!a}),style:Object.assign(Object.assign({},y.style),j),"data-placement":N,"aria-hidden":!u||!a}),t,i&&!w&&b.createElement("div",{ref:W=>{D.current=W},style:Object.assign(Object.assign(Object.assign({},R!=null?{left:R}:{}),A!=null?{top:A}:{}),V?{[V]:"-0.5rem"}:{}),className:v("navds-popover__arrow")})))});Jh.Content=QR;const eF={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},nF=({open:e,children:r,onClose:n,anchor:t,locale:a,translate:i,variant:u,popoverProps:d})=>{const c=Kt("global",PR(a)),{cn:m}=ke(),g=O.useRef(null),p=Pi(!1)!==void 0;return WS("screen and (min-width: 768px)",!0)&&!p?b.createElement(Jh,Object.assign({arrow:!1,anchorEl:t,open:e,onClose:n,placement:"bottom-start",role:"dialog",className:m("navds-date__popover",{"navds-date":u==="month"}),flip:!1},d),r):b.createElement($i,{ref:g,open:e,onClose:v=>{v.stopPropagation(),n()},"aria-label":i(eF[u]),className:m("navds-date__modal",{"navds-date__nested-modal":p,"navds-date":u==="month"}),closeOnBackdropClick:!0,placement:"top"},b.createElement("div",{className:m("navds-date__modal-body")},r,b.createElement(Yt,{variant:"tertiary",onClick:()=>{var v;return(v=g==null?void 0:g.current)===null||v===void 0?void 0:v.close()},size:"small",type:"button"},c("close"))))};function ey(e){return!!(e&&typeof e=="object"&&"from"in e)}const hu={},Cs={};function Hs(e,r){try{const t=(hu[e]||(hu[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(r).split("GMT")[1]||"";return t in Cs?Cs[t]:cg(t,t.split(":"))}catch{if(e in Cs)return Cs[e];const n=e==null?void 0:e.match(tF);return n?cg(e,n.slice(1)):NaN}}const tF=/([+-]\d\d):?(\d\d)?/;function cg(e,r){const n=+r[0],t=+(r[1]||0);return Cs[e]=n>0?n*60+t:n*60-t}class lr extends Date{constructor(...r){super(),r.length>1&&typeof r[r.length-1]=="string"&&(this.timeZone=r.pop()),this.internal=new Date,isNaN(Hs(this.timeZone,this))?this.setTime(NaN):r.length?typeof r[0]=="number"&&(r.length===1||r.length===2&&typeof r[1]!="number")?this.setTime(r[0]):typeof r[0]=="string"?this.setTime(+new Date(r[0])):r[0]instanceof Date?this.setTime(+r[0]):(this.setTime(+new Date(...r)),ny(this),Ku(this)):this.setTime(Date.now())}static tz(r,...n){return n.length?new lr(...n,r):new lr(Date.now(),r)}withTimeZone(r){return new lr(+this,r)}getTimezoneOffset(){return-Hs(this.timeZone,this)}setTime(r){return Date.prototype.setTime.apply(this,arguments),Ku(this),+this}[Symbol.for("constructDateFrom")](r){return new lr(+new Date(r),this.timeZone)}}const fg=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!fg.test(e))return;const r=e.replace(fg,"$1UTC");lr.prototype[r]&&(e.startsWith("get")?lr.prototype[e]=function(){return this.internal[r]()}:(lr.prototype[e]=function(){return Date.prototype[r].apply(this.internal,arguments),rF(this),+this},lr.prototype[r]=function(){return Date.prototype[r].apply(this,arguments),Ku(this),+this}))});function Ku(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function rF(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),ny(e)}function ny(e){const r=Hs(e.timeZone,e),n=new Date(+e);n.setUTCHours(n.getUTCHours()-1);const t=-new Date(+e).getTimezoneOffset(),a=-new Date(+n).getTimezoneOffset(),i=t-a,u=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();i&&u&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+i);const d=t-r;d&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+d);const c=Hs(e.timeZone,e),g=-new Date(+e).getTimezoneOffset()-c,p=c!==r,y=g-d;if(p&&y){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+y);const v=Hs(e.timeZone,e),D=c-v;D&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+D),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+D))}}class Un extends lr{static tz(r,...n){return n.length?new Un(...n,r):new Un(Date.now(),r)}toISOString(){const[r,n,t]=this.tzComponents(),a=`${r}${n}:${t}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[r,n,t,a]=this.internal.toUTCString().split(" ");return`${r==null?void 0:r.slice(0,-1)} ${t} ${n} ${a}`}toTimeString(){const r=this.internal.toUTCString().split(" ")[4],[n,t,a]=this.tzComponents();return`${r} GMT${n}${t}${a} (${aF(this.timeZone,this)})`}toLocaleString(r,n){return Date.prototype.toLocaleString.call(this,r,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(r,n){return Date.prototype.toLocaleDateString.call(this,r,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(r,n){return Date.prototype.toLocaleTimeString.call(this,r,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const r=this.getTimezoneOffset(),n=r>0?"-":"+",t=String(Math.floor(Math.abs(r)/60)).padStart(2,"0"),a=String(Math.abs(r)%60).padStart(2,"0");return[n,t,a]}withTimeZone(r){return new Un(+this,r)}[Symbol.for("constructDateFrom")](r){return new Un(+new Date(r),this.timeZone)}}function aF(e,r){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(r).slice(12)}var ve;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(ve||(ve={}));var hn;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(hn||(hn={}));var Ut;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Ut||(Ut={}));var kt;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(kt||(kt={}));const mg=5,sF=4;function oF(e,r){const n=r.startOfMonth(e),t=n.getDay()>0?n.getDay():7,a=r.addDays(e,-t+1),i=r.addDays(a,mg*7-1);return r.getMonth(e)===r.getMonth(i)?mg:sF}function ty(e,r){const n=r.startOfMonth(e),t=n.getDay();return t===1?n:t===0?r.addDays(n,-1*6):r.addDays(n,-1*(t-1))}function iF(e,r){const n=ty(e,r),t=oF(e,r);return r.addDays(n,t*7-1)}class Br{constructor(r,n){this.Date=Date,this.today=()=>{var t;return(t=this.overrides)!=null&&t.today?this.overrides.today():this.options.timeZone?Un.tz(this.options.timeZone):new this.Date},this.newDate=(t,a,i)=>{var u;return(u=this.overrides)!=null&&u.newDate?this.overrides.newDate(t,a,i):this.options.timeZone?new Un(t,a,i,this.options.timeZone):new Date(t,a,i)},this.addDays=(t,a)=>{var i;return(i=this.overrides)!=null&&i.addDays?this.overrides.addDays(t,a):Zs(t,a)},this.addMonths=(t,a)=>{var i;return(i=this.overrides)!=null&&i.addMonths?this.overrides.addMonths(t,a):Pd(t,a)},this.addWeeks=(t,a)=>{var i;return(i=this.overrides)!=null&&i.addWeeks?this.overrides.addWeeks(t,a):GD(t,a)},this.addYears=(t,a)=>{var i;return(i=this.overrides)!=null&&i.addYears?this.overrides.addYears(t,a):Md(t,a)},this.differenceInCalendarDays=(t,a)=>{var i;return(i=this.overrides)!=null&&i.differenceInCalendarDays?this.overrides.differenceInCalendarDays(t,a):Kr(t,a)},this.differenceInCalendarMonths=(t,a)=>{var i;return(i=this.overrides)!=null&&i.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(t,a):XD(t,a)},this.eachMonthOfInterval=t=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(t):Oh(t)},this.endOfBroadcastWeek=t=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(t):iF(t,this)},this.endOfISOWeek=t=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(t):QD(t)},this.endOfMonth=t=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(t):Eh(t)},this.endOfWeek=(t,a)=>{var i;return(i=this.overrides)!=null&&i.endOfWeek?this.overrides.endOfWeek(t,a):Dh(t,this.options)},this.endOfYear=t=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(t):Ii(t)},this.format=(t,a,i)=>{var d;const u=(d=this.overrides)!=null&&d.format?this.overrides.format(t,a,this.options):wa(t,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(u):u},this.getISOWeek=t=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(t):qd(t)},this.getMonth=(t,a)=>{var i;return(i=this.overrides)!=null&&i.getMonth?this.overrides.getMonth(t,this.options):Cd(t,this.options)},this.getYear=(t,a)=>{var i;return(i=this.overrides)!=null&&i.getYear?this.overrides.getYear(t,this.options):Ld(t,this.options)},this.getWeek=(t,a)=>{var i;return(i=this.overrides)!=null&&i.getWeek?this.overrides.getWeek(t,this.options):Id(t,this.options)},this.isAfter=(t,a)=>{var i;return(i=this.overrides)!=null&&i.isAfter?this.overrides.isAfter(t,a):Nh(t,a)},this.isBefore=(t,a)=>{var i;return(i=this.overrides)!=null&&i.isBefore?this.overrides.isBefore(t,a):Js(t,a)},this.isDate=t=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(t):Sh(t)},this.isSameDay=(t,a)=>{var i;return(i=this.overrides)!=null&&i.isSameDay?this.overrides.isSameDay(t,a):Bd(t,a)},this.isSameMonth=(t,a)=>{var i;return(i=this.overrides)!=null&&i.isSameMonth?this.overrides.isSameMonth(t,a):dR(t,a)},this.isSameYear=(t,a)=>{var i;return(i=this.overrides)!=null&&i.isSameYear?this.overrides.isSameYear(t,a):qh(t,a)},this.max=t=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(t):YD(t)},this.min=t=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(t):zD(t)},this.setMonth=(t,a)=>{var i;return(i=this.overrides)!=null&&i.setMonth?this.overrides.setMonth(t,a):jh(t,a)},this.setYear=(t,a)=>{var i;return(i=this.overrides)!=null&&i.setYear?this.overrides.setYear(t,a):Ih(t,a)},this.startOfBroadcastWeek=(t,a)=>{var i;return(i=this.overrides)!=null&&i.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(t,this):ty(t,this)},this.startOfDay=t=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(t):Mr(t)},this.startOfISOWeek=t=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(t):ka(t)},this.startOfMonth=t=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(t):ba(t)},this.startOfWeek=(t,a)=>{var i;return(i=this.overrides)!=null&&i.startOfWeek?this.overrides.startOfWeek(t,this.options):Pr(t,this.options)},this.startOfYear=t=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(t):Qs(t)},this.options={locale:Mi,...r},this.overrides=n}getDigitMap(){const{numerals:r="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:r}),t={};for(let a=0;a<10;a++)t[a.toString()]=n.format(a);return t}replaceDigits(r){const n=this.getDigitMap();return r.replace(/\d/g,t=>n[t]||t)}formatNumber(r){return this.replaceDigits(r.toString())}}const hr=new Br;class ry{constructor(r,n,t=hr){this.date=r,this.displayMonth=n,this.outside=!!(n&&!t.isSameMonth(r,n)),this.dateLib=t}isEqualTo(r){return this.dateLib.isSameDay(r.date,this.date)&&this.dateLib.isSameMonth(r.displayMonth,this.displayMonth)}}class lF{constructor(r,n){this.date=r,this.weeks=n}}class uF{constructor(r,n){this.days=n,this.weekNumber=r}}function Ar(e,r,n=!1,t=hr){let{from:a,to:i}=e;const{differenceInCalendarDays:u,isSameDay:d}=t;return a&&i?(u(i,a)<0&&([a,i]=[i,a]),u(r,a)>=(n?1:0)&&u(i,r)>=(n?1:0)):!n&&i?d(i,r):!n&&a?d(a,r):!1}function ay(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Ud(e){return!!(e&&typeof e=="object"&&"from"in e)}function sy(e){return!!(e&&typeof e=="object"&&"after"in e)}function oy(e){return!!(e&&typeof e=="object"&&"before"in e)}function iy(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function ly(e,r){return Array.isArray(e)&&e.every(r.isDate)}function Pt(e,r,n=hr){const t=Array.isArray(r)?r:[r],{isSameDay:a,differenceInCalendarDays:i,isAfter:u}=n;return t.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(e,d);if(ly(d,n))return d.includes(e);if(Ud(d))return Ar(d,e,!1,n);if(iy(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(e.getDay()):d.dayOfWeek===e.getDay();if(ay(d)){const c=i(d.before,e),m=i(d.after,e),g=c>0,p=m<0;return u(d.before,d.after)?p&&g:g||p}return sy(d)?i(e,d.after)>0:oy(d)?i(d.before,e)>0:typeof d=="function"?d(e):!1})}function dF(e,r,n){const{disabled:t,hidden:a,modifiers:i,showOutsideDays:u,broadcastCalendar:d,today:c}=r,{isSameDay:m,isSameMonth:g,startOfMonth:p,isBefore:y,endOfMonth:v,isAfter:D}=n,E=r.startMonth&&p(r.startMonth),T=r.endMonth&&v(r.endMonth),x={[hn.focused]:[],[hn.outside]:[],[hn.disabled]:[],[hn.hidden]:[],[hn.today]:[]},F={};for(const w of e){const{date:M,displayMonth:k}=w,N=!!(k&&!g(M,k)),R=!!(E&&y(M,E)),A=!!(T&&D(M,T)),j=!!(t&&Pt(M,t,n)),z=!!(a&&Pt(M,a,n))||R||A||!d&&!u&&N||d&&u===!1&&N,V=m(M,c??n.today());N&&x.outside.push(w),j&&x.disabled.push(w),z&&x.hidden.push(w),V&&x.today.push(w),i&&Object.keys(i).forEach(W=>{const L=i==null?void 0:i[W];L&&Pt(M,L,n)&&(F[W]?F[W].push(w):F[W]=[w])})}return w=>{const M={[hn.focused]:!1,[hn.disabled]:!1,[hn.hidden]:!1,[hn.outside]:!1,[hn.today]:!1},k={};for(const N in x){const R=x[N];M[N]=R.some(A=>A===w)}for(const N in F)k[N]=F[N].some(R=>R===w);return{...M,...k}}}function cF(e,r,n={}){return Object.entries(e).filter(([,a])=>a===!0).reduce((a,[i])=>(n[i]?a.push(n[i]):r[hn[i]]?a.push(r[hn[i]]):r[Ut[i]]&&a.push(r[Ut[i]]),a),[r[ve.Day]])}function fF(e){return b.createElement("button",{...e})}function mF(e){return b.createElement("span",{...e})}function gF(e){const{size:r=24,orientation:n="left",className:t}=e;return b.createElement("svg",{className:t,width:r,height:r,viewBox:"0 0 24 24"},n==="up"&&b.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&b.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&b.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&b.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function pF(e){const{day:r,modifiers:n,...t}=e;return b.createElement("td",{...t})}function hF(e){const{day:r,modifiers:n,...t}=e,a=b.useRef(null);return b.useEffect(()=>{var i;n.focused&&((i=a.current)==null||i.focus())},[n.focused]),b.createElement("button",{ref:a,...t})}function yF(e){const{options:r,className:n,components:t,classNames:a,...i}=e,u=[a[ve.Dropdown],n].join(" "),d=r==null?void 0:r.find(({value:c})=>c===i.value);return b.createElement("span",{"data-disabled":i.disabled,className:a[ve.DropdownRoot]},b.createElement(t.Select,{className:u,...i},r==null?void 0:r.map(({value:c,label:m,disabled:g})=>b.createElement(t.Option,{key:c,value:c,disabled:g},m))),b.createElement("span",{className:a[ve.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,b.createElement(t.Chevron,{orientation:"down",size:18,className:a[ve.Chevron]})))}function vF(e){return b.createElement("div",{...e})}function kF(e){return b.createElement("div",{...e})}function bF(e){const{calendarMonth:r,displayIndex:n,...t}=e;return b.createElement("div",{...t},e.children)}function wF(e){const{calendarMonth:r,displayIndex:n,...t}=e;return b.createElement("div",{...t})}function _F(e){return b.createElement("table",{...e})}function TF(e){return b.createElement("div",{...e})}const uy=O.createContext(void 0);function Ea(){const e=O.useContext(uy);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function SF(e){const{components:r}=Ea();return b.createElement(r.Dropdown,{...e})}function EF(e){const{onPreviousClick:r,onNextClick:n,previousMonth:t,nextMonth:a,...i}=e,{components:u,classNames:d,labels:{labelPrevious:c,labelNext:m}}=Ea(),g=O.useCallback(y=>{a&&(n==null||n(y))},[a,n]),p=O.useCallback(y=>{t&&(r==null||r(y))},[t,r]);return b.createElement("nav",{...i},b.createElement(u.PreviousMonthButton,{type:"button",className:d[ve.PreviousMonthButton],tabIndex:t?void 0:-1,"aria-disabled":t?void 0:!0,"aria-label":c(t),onClick:p},b.createElement(u.Chevron,{disabled:t?void 0:!0,className:d[ve.Chevron],orientation:"left"})),b.createElement(u.NextMonthButton,{type:"button",className:d[ve.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":m(a),onClick:g},b.createElement(u.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[ve.Chevron]})))}function OF(e){const{components:r}=Ea();return b.createElement(r.Button,{...e})}function DF(e){return b.createElement("option",{...e})}function xF(e){const{components:r}=Ea();return b.createElement(r.Button,{...e})}function RF(e){const{rootRef:r,...n}=e;return b.createElement("div",{...n,ref:r})}function FF(e){return b.createElement("select",{...e})}function NF(e){const{week:r,...n}=e;return b.createElement("tr",{...n})}function AF(e){return b.createElement("th",{...e})}function PF(e){return b.createElement("thead",{"aria-hidden":!0},b.createElement("tr",{...e}))}function MF(e){const{week:r,...n}=e;return b.createElement("th",{...n})}function BF(e){return b.createElement("th",{...e})}function qF(e){return b.createElement("tbody",{...e})}function jF(e){const{components:r}=Ea();return b.createElement(r.Dropdown,{...e})}const IF=Object.freeze(Object.defineProperty({__proto__:null,Button:fF,CaptionLabel:mF,Chevron:gF,Day:pF,DayButton:hF,Dropdown:yF,DropdownNav:vF,Footer:kF,Month:bF,MonthCaption:wF,MonthGrid:_F,Months:TF,MonthsDropdown:SF,Nav:EF,NextMonthButton:OF,Option:DF,PreviousMonthButton:xF,Root:RF,Select:FF,Week:NF,WeekNumber:MF,WeekNumberHeader:BF,Weekday:AF,Weekdays:PF,Weeks:qF,YearsDropdown:jF},Symbol.toStringTag,{value:"Module"}));function CF(e){return{...IF,...e}}function LF(e){const r={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([n,t])=>{n.startsWith("data-")&&(r[n]=t)}),r}function $F(){const e={};for(const r in ve)e[ve[r]]=`rdp-${ve[r]}`;for(const r in hn)e[hn[r]]=`rdp-${hn[r]}`;for(const r in Ut)e[Ut[r]]=`rdp-${Ut[r]}`;for(const r in kt)e[kt[r]]=`rdp-${kt[r]}`;return e}function dy(e,r,n){return(n??new Br(r)).format(e,"LLLL y")}const HF=dy;function VF(e,r,n){return(n??new Br(r)).format(e,"d")}function UF(e,r=hr){return r.format(e,"LLLL")}function WF(e,r=hr){return e<10?r.formatNumber(`0${e.toLocaleString()}`):r.formatNumber(`${e.toLocaleString()}`)}function GF(){return""}function YF(e,r,n){return(n??new Br(r)).format(e,"cccccc")}function cy(e,r=hr){return r.format(e,"yyyy")}const zF=cy,KF=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:dy,formatDay:VF,formatMonthCaption:HF,formatMonthDropdown:UF,formatWeekNumber:WF,formatWeekNumberHeader:GF,formatWeekdayName:YF,formatYearCaption:zF,formatYearDropdown:cy},Symbol.toStringTag,{value:"Module"}));function XF(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...KF,...e}}function ZF(e,r,n,t,a){const{startOfMonth:i,startOfYear:u,endOfYear:d,eachMonthOfInterval:c,getMonth:m}=a;return c({start:u(e),end:d(e)}).map(y=>{const v=t.formatMonthDropdown(y,a),D=m(y),E=r&&y<i(r)||n&&y>i(n)||!1;return{value:D,label:v,disabled:E}})}function QF(e,r={},n={}){let t={...r==null?void 0:r[ve.Day]};return Object.entries(e).filter(([,a])=>a===!0).forEach(([a])=>{t={...t,...n==null?void 0:n[a]}}),t}function JF(e,r,n){const t=e.today(),a=r?e.startOfISOWeek(t):e.startOfWeek(t),i=[];for(let u=0;u<7;u++){const d=e.addDays(a,u);i.push(d)}return i}function eN(e,r,n,t){if(!e||!r)return;const{startOfYear:a,endOfYear:i,addYears:u,getYear:d,isBefore:c,isSameYear:m}=t,g=a(e),p=i(r),y=[];let v=g;for(;c(v,p)||m(v,p);)y.push(v),v=u(v,1);return y.map(D=>{const E=n.formatYearDropdown(D,t);return{value:d(D),label:E,disabled:!1}})}function fy(e,r,n){return(n??new Br(r)).format(e,"LLLL y")}const nN=fy;function tN(e,r,n,t){let a=(t??new Br(n)).format(e,"PPPP");return r!=null&&r.today&&(a=`Today, ${a}`),a}function my(e,r,n,t){let a=(t??new Br(n)).format(e,"PPPP");return r.today&&(a=`Today, ${a}`),r.selected&&(a=`${a}, selected`),a}const rN=my;function aN(){return""}function sN(e){return"Choose the Month"}function oN(e){return"Go to the Next Month"}function iN(e){return"Go to the Previous Month"}function lN(e,r,n){return(n??new Br(r)).format(e,"cccc")}function uN(e,r){return`Week ${e}`}function dN(e){return"Week Number"}function cN(e){return"Choose the Year"}const fN=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:nN,labelDay:rN,labelDayButton:my,labelGrid:fy,labelGridcell:tN,labelMonthDropdown:sN,labelNav:aN,labelNext:oN,labelPrevious:iN,labelWeekNumber:uN,labelWeekNumberHeader:dN,labelWeekday:lN,labelYearDropdown:cN},Symbol.toStringTag,{value:"Module"})),eo=e=>e instanceof HTMLElement?e:null,yu=e=>[...e.querySelectorAll("[data-animated-month]")??[]],mN=e=>eo(e.querySelector("[data-animated-month]")),vu=e=>eo(e.querySelector("[data-animated-caption]")),ku=e=>eo(e.querySelector("[data-animated-weeks]")),gN=e=>eo(e.querySelector("[data-animated-nav]")),pN=e=>eo(e.querySelector("[data-animated-weekdays]"));function hN(e,r,{classNames:n,months:t,focused:a,dateLib:i}){const u=O.useRef(null),d=O.useRef(t),c=O.useRef(!1);O.useLayoutEffect(()=>{const m=d.current;if(d.current=t,!r||!e.current||!(e.current instanceof HTMLElement)||t.length===0||m.length===0||t.length!==m.length)return;const g=i.isSameMonth(t[0].date,m[0].date),p=i.isAfter(t[0].date,m[0].date),y=p?n[kt.caption_after_enter]:n[kt.caption_before_enter],v=p?n[kt.weeks_after_enter]:n[kt.weeks_before_enter],D=u.current,E=e.current.cloneNode(!0);if(E instanceof HTMLElement?(yu(E).forEach(w=>{if(!(w instanceof HTMLElement))return;const M=mN(w);M&&w.contains(M)&&w.removeChild(M);const k=vu(w);k&&k.classList.remove(y);const N=ku(w);N&&N.classList.remove(v)}),u.current=E):u.current=null,c.current||g||a)return;const T=D instanceof HTMLElement?yu(D):[],x=yu(e.current);if(x&&x.every(F=>F instanceof HTMLElement)&&T&&T.every(F=>F instanceof HTMLElement)){c.current=!0,e.current.style.isolation="isolate";const F=gN(e.current);F&&(F.style.zIndex="1"),x.forEach((w,M)=>{const k=T[M];if(!k)return;w.style.position="relative",w.style.overflow="hidden";const N=vu(w);N&&N.classList.add(y);const R=ku(w);R&&R.classList.add(v);const A=()=>{c.current=!1,e.current&&(e.current.style.isolation=""),F&&(F.style.zIndex=""),N&&N.classList.remove(y),R&&R.classList.remove(v),w.style.position="",w.style.overflow="",w.contains(k)&&w.removeChild(k)};k.style.pointerEvents="none",k.style.position="absolute",k.style.overflow="hidden",k.setAttribute("aria-hidden","true");const j=pN(k);j&&(j.style.opacity="0");const z=vu(k);z&&(z.classList.add(p?n[kt.caption_before_exit]:n[kt.caption_after_exit]),z.addEventListener("animationend",A));const V=ku(k);V&&V.classList.add(p?n[kt.weeks_before_exit]:n[kt.weeks_after_exit]),w.insertBefore(k,w.firstChild)})}})}function yN(e,r,n,t){const a=e[0],i=e[e.length-1],{ISOWeek:u,fixedWeeks:d,broadcastCalendar:c}=n??{},{addDays:m,differenceInCalendarDays:g,differenceInCalendarMonths:p,endOfBroadcastWeek:y,endOfISOWeek:v,endOfMonth:D,endOfWeek:E,isAfter:T,startOfBroadcastWeek:x,startOfISOWeek:F,startOfWeek:w}=t,M=c?x(a,t):u?F(a):w(a),k=c?y(i):u?v(D(i)):E(D(i)),N=g(k,M),R=p(i,a)+1,A=[];for(let V=0;V<=N;V++){const W=m(M,V);if(r&&T(W,r))break;A.push(W)}const z=(c?35:42)*R;if(d&&A.length<z){const V=z-A.length;for(let W=0;W<V;W++){const L=m(A[A.length-1],1);A.push(L)}}return A}function vN(e){const r=[];return e.reduce((n,t)=>{const a=t.weeks.reduce((i,u)=>[...i,...u.days],r);return[...n,...a]},r)}function kN(e,r,n,t){const{numberOfMonths:a=1}=n,i=[];for(let u=0;u<a;u++){const d=t.addMonths(e,u);if(r&&d>r)break;i.push(d)}return i}function gg(e,r){const{month:n,defaultMonth:t,today:a=r.today(),numberOfMonths:i=1,endMonth:u,startMonth:d}=e;let c=n||t||a;const{differenceInCalendarMonths:m,addMonths:g,startOfMonth:p}=r;if(u&&m(u,c)<0){const y=-1*(i-1);c=g(u,y)}return d&&m(c,d)<0&&(c=d),p(c)}function bN(e,r,n,t){const{addDays:a,endOfBroadcastWeek:i,endOfISOWeek:u,endOfMonth:d,endOfWeek:c,getISOWeek:m,getWeek:g,startOfBroadcastWeek:p,startOfISOWeek:y,startOfWeek:v}=t,D=e.reduce((E,T)=>{const x=n.broadcastCalendar?p(T,t):n.ISOWeek?y(T):v(T),F=n.broadcastCalendar?i(T):n.ISOWeek?u(d(T)):c(d(T)),w=r.filter(R=>R>=x&&R<=F),M=n.broadcastCalendar?35:42;if(n.fixedWeeks&&w.length<M){const R=r.filter(A=>{const j=M-w.length;return A>F&&A<=a(F,j)});w.push(...R)}const k=w.reduce((R,A)=>{const j=n.ISOWeek?m(A):g(A),z=R.find(W=>W.weekNumber===j),V=new ry(A,T,t);return z?z.days.push(V):R.push(new uF(j,[V])),R},[]),N=new lF(T,k);return E.push(N),E},[]);return n.reverseMonths?D.reverse():D}function wN(e,r){let{startMonth:n,endMonth:t}=e;const{startOfYear:a,startOfDay:i,startOfMonth:u,endOfMonth:d,addYears:c,endOfYear:m,newDate:g,today:p}=r,{fromYear:y,toYear:v,fromMonth:D,toMonth:E}=e;!n&&D&&(n=D),!n&&y&&(n=r.newDate(y,0,1)),!t&&E&&(t=E),!t&&v&&(t=g(v,11,31));const T=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return n?n=u(n):y?n=g(y,0,1):!n&&T&&(n=a(c(e.today??p(),-100))),t?t=d(t):v?t=g(v,11,31):!t&&T&&(t=m(e.today??p())),[n&&i(n),t&&i(t)]}function _N(e,r,n,t){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:i=1}=n,{startOfMonth:u,addMonths:d,differenceInCalendarMonths:c}=t,m=a?i:1,g=u(e);if(!r)return d(g,m);if(!(c(r,e)<i))return d(g,m)}function TN(e,r,n,t){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:i}=n,{startOfMonth:u,addMonths:d,differenceInCalendarMonths:c}=t,m=a?i??1:1,g=u(e);if(!r)return d(g,-m);if(!(c(g,r)<=0))return d(g,-m)}function SN(e){const r=[];return e.reduce((n,t)=>[...n,...t.weeks],r)}function Hi(e,r){const[n,t]=O.useState(e);return[r===void 0?n:r,t]}function EN(e,r){const[n,t]=wN(e,r),{startOfMonth:a,endOfMonth:i}=r,u=gg(e,r),[d,c]=Hi(u,e.month?u:void 0);O.useEffect(()=>{const N=gg(e,r);c(N)},[e.timeZone]);const m=kN(d,t,e,r),g=yN(m,e.endMonth?i(e.endMonth):void 0,e,r),p=bN(m,g,e,r),y=SN(p),v=vN(p),D=TN(d,n,e,r),E=_N(d,t,e,r),{disableNavigation:T,onMonthChange:x}=e,F=N=>y.some(R=>R.days.some(A=>A.isEqualTo(N))),w=N=>{if(T)return;let R=a(N);n&&R<a(n)&&(R=a(n)),t&&R>a(t)&&(R=a(t)),c(R),x==null||x(R)};return{months:p,weeks:y,days:v,navStart:n,navEnd:t,previousMonth:D,nextMonth:E,goToMonth:w,goToDay:N=>{F(N)||w(N.date)}}}var tr;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(tr||(tr={}));function pg(e){return!e[hn.disabled]&&!e[hn.hidden]&&!e[hn.outside]}function ON(e,r,n,t){let a,i=-1;for(const u of e){const d=r(u);pg(d)&&(d[hn.focused]&&i<tr.FocusedModifier?(a=u,i=tr.FocusedModifier):t!=null&&t.isEqualTo(u)&&i<tr.LastFocused?(a=u,i=tr.LastFocused):n(u.date)&&i<tr.Selected?(a=u,i=tr.Selected):d[hn.today]&&i<tr.Today&&(a=u,i=tr.Today))}return a||(a=e.find(u=>pg(r(u)))),a}function DN(e,r,n,t,a,i,u){const{ISOWeek:d,broadcastCalendar:c}=i,{addDays:m,addMonths:g,addWeeks:p,addYears:y,endOfBroadcastWeek:v,endOfISOWeek:D,endOfWeek:E,max:T,min:x,startOfBroadcastWeek:F,startOfISOWeek:w,startOfWeek:M}=u;let N={day:m,week:p,month:g,year:y,startOfWeek:R=>c?F(R,u):d?w(R):M(R),endOfWeek:R=>c?v(R):d?D(R):E(R)}[e](n,r==="after"?1:-1);return r==="before"&&t?N=T([t,N]):r==="after"&&a&&(N=x([a,N])),N}function gy(e,r,n,t,a,i,u,d=0){if(d>365)return;const c=DN(e,r,n.date,t,a,i,u),m=!!(i.disabled&&Pt(c,i.disabled,u)),g=!!(i.hidden&&Pt(c,i.hidden,u)),p=c,y=new ry(c,p,u);return!m&&!g?y:gy(e,r,y,t,a,i,u,d+1)}function xN(e,r,n,t,a){const{autoFocus:i}=e,[u,d]=O.useState(),c=ON(r.days,n,t||(()=>!1),u),[m,g]=O.useState(i?c:void 0);return{isFocusTarget:E=>!!(c!=null&&c.isEqualTo(E)),setFocused:g,focused:m,blur:()=>{d(m),g(void 0)},moveFocus:(E,T)=>{if(!m)return;const x=gy(E,T,m,r.navStart,r.navEnd,e,a);x&&(r.goToDay(x),g(x))}}}function RN(e,r){const{selected:n,required:t,onSelect:a}=e,[i,u]=Hi(n,a?n:void 0),d=a?n:i,{isSameDay:c}=r,m=v=>(d==null?void 0:d.some(D=>c(D,v)))??!1,{min:g,max:p}=e;return{selected:d,select:(v,D,E)=>{let T=[...d??[]];if(m(v)){if((d==null?void 0:d.length)===g||t&&(d==null?void 0:d.length)===1)return;T=d==null?void 0:d.filter(x=>!c(x,v))}else(d==null?void 0:d.length)===p?T=[v]:T=[...T,v];return a||u(T),a==null||a(T,v,D,E),T},isSelected:m}}function FN(e,r,n=0,t=0,a=!1,i=hr){const{from:u,to:d}=r||{},{isSameDay:c,isAfter:m,isBefore:g}=i;let p;if(!u&&!d)p={from:e,to:n>0?void 0:e};else if(u&&!d)c(u,e)?a?p={from:u,to:void 0}:p=void 0:g(e,u)?p={from:e,to:u}:p={from:u,to:e};else if(u&&d)if(c(u,e)&&c(d,e))a?p={from:u,to:d}:p=void 0;else if(c(u,e))p={from:u,to:n>0?void 0:e};else if(c(d,e))p={from:e,to:n>0?void 0:e};else if(g(e,u))p={from:e,to:d};else if(m(e,u))p={from:u,to:e};else if(m(e,d))p={from:u,to:e};else throw new Error("Invalid range");if(p!=null&&p.from&&(p!=null&&p.to)){const y=i.differenceInCalendarDays(p.to,p.from);t>0&&y>t?p={from:e,to:void 0}:n>1&&y<n&&(p={from:e,to:void 0})}return p}function NN(e,r,n=hr){const t=Array.isArray(r)?r:[r];let a=e.from;const i=n.differenceInCalendarDays(e.to,e.from),u=Math.min(i,6);for(let d=0;d<=u;d++){if(t.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function hg(e,r,n=hr){return Ar(e,r.from,!1,n)||Ar(e,r.to,!1,n)||Ar(r,e.from,!1,n)||Ar(r,e.to,!1,n)}function AN(e,r,n=hr){const t=Array.isArray(r)?r:[r];if(t.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?Ar(e,d,!1,n):ly(d,n)?d.some(c=>Ar(e,c,!1,n)):Ud(d)?d.from&&d.to?hg(e,{from:d.from,to:d.to},n):!1:iy(d)?NN(e,d.dayOfWeek,n):ay(d)?n.isAfter(d.before,d.after)?hg(e,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):Pt(e.from,d,n)||Pt(e.to,d,n):sy(d)||oy(d)?Pt(e.from,d,n)||Pt(e.to,d,n):!1))return!0;const u=t.filter(d=>typeof d=="function");if(u.length){let d=e.from;const c=n.differenceInCalendarDays(e.to,e.from);for(let m=0;m<=c;m++){if(u.some(g=>g(d)))return!0;d=n.addDays(d,1)}}return!1}function PN(e,r){const{disabled:n,excludeDisabled:t,selected:a,required:i,onSelect:u}=e,[d,c]=Hi(a,u?a:void 0),m=u?a:d;return{selected:m,select:(y,v,D)=>{const{min:E,max:T}=e,x=y?FN(y,m,E,T,i,r):void 0;return t&&n&&(x!=null&&x.from)&&x.to&&AN({from:x.from,to:x.to},n,r)&&(x.from=y,x.to=void 0),u||c(x),u==null||u(x,y,v,D),x},isSelected:y=>m&&Ar(m,y,!1,r)}}function MN(e,r){const{selected:n,required:t,onSelect:a}=e,[i,u]=Hi(n,a?n:void 0),d=a?n:i,{isSameDay:c}=r;return{selected:d,select:(p,y,v)=>{let D=p;return!t&&d&&d&&c(p,d)&&(D=void 0),a||u(D),a==null||a(D,p,y,v),D},isSelected:p=>d?c(d,p):!1}}function BN(e,r){const n=MN(e,r),t=RN(e,r),a=PN(e,r);switch(e.mode){case"single":return n;case"multiple":return t;case"range":return a;default:return}}function qN(e){var na;let r=e;r.timeZone&&(r={...e},r.today&&(r.today=new Un(r.today,r.timeZone)),r.month&&(r.month=new Un(r.month,r.timeZone)),r.defaultMonth&&(r.defaultMonth=new Un(r.defaultMonth,r.timeZone)),r.startMonth&&(r.startMonth=new Un(r.startMonth,r.timeZone)),r.endMonth&&(r.endMonth=new Un(r.endMonth,r.timeZone)),r.mode==="single"&&r.selected?r.selected=new Un(r.selected,r.timeZone):r.mode==="multiple"&&r.selected?r.selected=(na=r.selected)==null?void 0:na.map(Re=>new Un(Re,r.timeZone)):r.mode==="range"&&r.selected&&(r.selected={from:r.selected.from?new Un(r.selected.from,r.timeZone):void 0,to:r.selected.to?new Un(r.selected.to,r.timeZone):void 0}));const{components:n,formatters:t,labels:a,dateLib:i,locale:u,classNames:d}=O.useMemo(()=>{const Re={...Mi,...r.locale};return{dateLib:new Br({locale:Re,weekStartsOn:r.broadcastCalendar?1:r.weekStartsOn,firstWeekContainsDate:r.firstWeekContainsDate,useAdditionalWeekYearTokens:r.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:r.useAdditionalDayOfYearTokens,timeZone:r.timeZone,numerals:r.numerals},r.dateLib),components:CF(r.components),formatters:XF(r.formatters),labels:{...fN,...r.labels},locale:Re,classNames:{...$F(),...r.classNames}}},[r.locale,r.broadcastCalendar,r.weekStartsOn,r.firstWeekContainsDate,r.useAdditionalWeekYearTokens,r.useAdditionalDayOfYearTokens,r.timeZone,r.numerals,r.dateLib,r.components,r.formatters,r.labels,r.classNames]),{captionLayout:c,mode:m,navLayout:g,numberOfMonths:p=1,onDayBlur:y,onDayClick:v,onDayFocus:D,onDayKeyDown:E,onDayMouseEnter:T,onDayMouseLeave:x,onNextClick:F,onPrevClick:w,showWeekNumber:M,styles:k}=r,{formatCaption:N,formatDay:R,formatMonthDropdown:A,formatWeekNumber:j,formatWeekNumberHeader:z,formatWeekdayName:V,formatYearDropdown:W}=t,L=EN(r,i),{days:U,months:G,navStart:$,navEnd:J,previousMonth:Y,nextMonth:re,goToMonth:se}=L,de=dF(U,r,i),{isSelected:Te,select:Ee,selected:Ge}=BN(r,i)??{},{blur:me,focused:he,isFocusTarget:Le,moveFocus:Ve,setFocused:en}=xN(r,L,de,Te??(()=>!1),i),{labelDayButton:nn,labelGridcell:on,labelGrid:mn,labelMonthDropdown:Rn,labelNav:tn,labelPrevious:Dn,labelNext:dt,labelWeekday:wn,labelWeekNumber:ct,labelWeekNumberHeader:nt,labelYearDropdown:B}=a,H=O.useMemo(()=>JF(i,r.ISOWeek),[i,r.ISOWeek]),X=m!==void 0||v!==void 0,le=O.useCallback(()=>{Y&&(se(Y),w==null||w(Y))},[Y,se,w]),oe=O.useCallback(()=>{re&&(se(re),F==null||F(re))},[se,re,F]),ae=O.useCallback((Re,an)=>Ke=>{Ke.preventDefault(),Ke.stopPropagation(),en(Re),Ee==null||Ee(Re.date,an,Ke),v==null||v(Re.date,an,Ke)},[Ee,v,en]),ye=O.useCallback((Re,an)=>Ke=>{en(Re),D==null||D(Re.date,an,Ke)},[D,en]),Ae=O.useCallback((Re,an)=>Ke=>{me(),y==null||y(Re.date,an,Ke)},[me,y]),qe=O.useCallback((Re,an)=>Ke=>{const It={ArrowLeft:["day",r.dir==="rtl"?"after":"before"],ArrowRight:["day",r.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[Ke.shiftKey?"year":"month","before"],PageDown:[Ke.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(It[Ke.key]){Ke.preventDefault(),Ke.stopPropagation();const[ft,Da]=It[Ke.key];Ve(ft,Da)}E==null||E(Re.date,an,Ke)},[Ve,E,r.dir]),An=O.useCallback((Re,an)=>Ke=>{T==null||T(Re.date,an,Ke)},[T]),Qt=O.useCallback((Re,an)=>Ke=>{x==null||x(Re.date,an,Ke)},[x]),tt=O.useCallback(Re=>an=>{const Ke=Number(an.target.value),It=i.setMonth(i.startOfMonth(Re),Ke);se(It)},[i,se]),Qr=O.useCallback(Re=>an=>{const Ke=Number(an.target.value),It=i.setYear(i.startOfMonth(Re),Ke);se(It)},[i,se]),{className:vr,style:kr}=O.useMemo(()=>({className:[d[ve.Root],r.className].filter(Boolean).join(" "),style:{...k==null?void 0:k[ve.Root],...r.style}}),[d,r.className,r.style,k]),Jr=LF(r),br=O.useRef(null);hN(br,!!r.animate,{classNames:d,months:G,focused:he,dateLib:i});const ea={dayPickerProps:r,selected:Ge,select:Ee,isSelected:Te,months:G,nextMonth:re,previousMonth:Y,goToMonth:se,getModifiers:de,components:n,classNames:d,styles:k,labels:a,formatters:t};return b.createElement(uy.Provider,{value:ea},b.createElement(n.Root,{rootRef:r.animate?br:void 0,className:vr,style:kr,dir:r.dir,id:r.id,lang:r.lang,nonce:r.nonce,title:r.title,role:r.role,"aria-label":r["aria-label"],...Jr},b.createElement(n.Months,{className:d[ve.Months],style:k==null?void 0:k[ve.Months]},!r.hideNavigation&&!g&&b.createElement(n.Nav,{"data-animated-nav":r.animate?"true":void 0,className:d[ve.Nav],style:k==null?void 0:k[ve.Nav],"aria-label":tn(),onPreviousClick:le,onNextClick:oe,previousMonth:Y,nextMonth:re}),G.map((Re,an)=>{const Ke=ZF(Re.date,$,J,t,i),It=eN($,J,t,i);return b.createElement(n.Month,{"data-animated-month":r.animate?"true":void 0,className:d[ve.Month],style:k==null?void 0:k[ve.Month],key:an,displayIndex:an,calendarMonth:Re},g==="around"&&!r.hideNavigation&&an===0&&b.createElement(n.PreviousMonthButton,{type:"button",className:d[ve.PreviousMonthButton],tabIndex:Y?void 0:-1,"aria-disabled":Y?void 0:!0,"aria-label":Dn(Y),onClick:le,"data-animated-button":r.animate?"true":void 0},b.createElement(n.Chevron,{disabled:Y?void 0:!0,className:d[ve.Chevron],orientation:r.dir==="rtl"?"right":"left"})),b.createElement(n.MonthCaption,{"data-animated-caption":r.animate?"true":void 0,className:d[ve.MonthCaption],style:k==null?void 0:k[ve.MonthCaption],calendarMonth:Re,displayIndex:an},c!=null&&c.startsWith("dropdown")?b.createElement(n.DropdownNav,{className:d[ve.Dropdowns],style:k==null?void 0:k[ve.Dropdowns]},c==="dropdown"||c==="dropdown-months"?b.createElement(n.MonthsDropdown,{className:d[ve.MonthsDropdown],"aria-label":Rn(),classNames:d,components:n,disabled:!!r.disableNavigation,onChange:tt(Re.date),options:Ke,style:k==null?void 0:k[ve.Dropdown],value:i.getMonth(Re.date)}):b.createElement("span",null,A(Re.date,i)),c==="dropdown"||c==="dropdown-years"?b.createElement(n.YearsDropdown,{className:d[ve.YearsDropdown],"aria-label":B(i.options),classNames:d,components:n,disabled:!!r.disableNavigation,onChange:Qr(Re.date),options:It,style:k==null?void 0:k[ve.Dropdown],value:i.getYear(Re.date)}):b.createElement("span",null,W(Re.date,i)),b.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},N(Re.date,i.options,i))):b.createElement(n.CaptionLabel,{className:d[ve.CaptionLabel],role:"status","aria-live":"polite"},N(Re.date,i.options,i))),g==="around"&&!r.hideNavigation&&an===p-1&&b.createElement(n.NextMonthButton,{type:"button",className:d[ve.NextMonthButton],tabIndex:re?void 0:-1,"aria-disabled":re?void 0:!0,"aria-label":dt(re),onClick:oe,"data-animated-button":r.animate?"true":void 0},b.createElement(n.Chevron,{disabled:re?void 0:!0,className:d[ve.Chevron],orientation:r.dir==="rtl"?"left":"right"})),an===p-1&&g==="after"&&!r.hideNavigation&&b.createElement(n.Nav,{"data-animated-nav":r.animate?"true":void 0,className:d[ve.Nav],style:k==null?void 0:k[ve.Nav],"aria-label":tn(),onPreviousClick:le,onNextClick:oe,previousMonth:Y,nextMonth:re}),b.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":m==="multiple"||m==="range","aria-label":mn(Re.date,i.options,i)||void 0,className:d[ve.MonthGrid],style:k==null?void 0:k[ve.MonthGrid]},!r.hideWeekdays&&b.createElement(n.Weekdays,{"data-animated-weekdays":r.animate?"true":void 0,className:d[ve.Weekdays],style:k==null?void 0:k[ve.Weekdays]},M&&b.createElement(n.WeekNumberHeader,{"aria-label":nt(i.options),className:d[ve.WeekNumberHeader],style:k==null?void 0:k[ve.WeekNumberHeader],scope:"col"},z()),H.map((ft,Da)=>b.createElement(n.Weekday,{"aria-label":wn(ft,i.options,i),className:d[ve.Weekday],key:Da,style:k==null?void 0:k[ve.Weekday],scope:"col"},V(ft,i.options,i)))),b.createElement(n.Weeks,{"data-animated-weeks":r.animate?"true":void 0,className:d[ve.Weeks],style:k==null?void 0:k[ve.Weeks]},Re.weeks.map((ft,Da)=>b.createElement(n.Week,{className:d[ve.Week],key:ft.weekNumber,style:k==null?void 0:k[ve.Week],week:ft},M&&b.createElement(n.WeekNumber,{week:ft,style:k==null?void 0:k[ve.WeekNumber],"aria-label":ct(ft.weekNumber,{locale:u}),className:d[ve.WeekNumber],scope:"row",role:"rowheader"},j(ft.weekNumber,i)),ft.days.map(Pn=>{const{date:Tt}=Pn,$e=de(Pn);if($e[hn.focused]=!$e.hidden&&!!(he!=null&&he.isEqualTo(Pn)),$e[Ut.selected]=(Te==null?void 0:Te(Tt))||$e.selected,Ud(Ge)){const{from:ta,to:gs}=Ge;$e[Ut.range_start]=!!(ta&&gs&&i.isSameDay(Tt,ta)),$e[Ut.range_end]=!!(ta&&gs&&i.isSameDay(Tt,gs)),$e[Ut.range_middle]=Ar(Ge,Tt,!0,i)}const Qi=QF($e,k,r.modifiersStyles),Ji=cF($e,d,r.modifiersClassNames),el=!X&&!$e.hidden?on(Tt,$e,i.options,i):void 0;return b.createElement(n.Day,{key:`${i.format(Tt,"yyyy-MM-dd")}_${i.format(Pn.displayMonth,"yyyy-MM")}`,day:Pn,modifiers:$e,className:Ji.join(" "),style:Qi,role:"gridcell","aria-selected":$e.selected||void 0,"aria-label":el,"data-day":i.format(Tt,"yyyy-MM-dd"),"data-month":Pn.outside?i.format(Tt,"yyyy-MM"):void 0,"data-selected":$e.selected||void 0,"data-disabled":$e.disabled||void 0,"data-hidden":$e.hidden||void 0,"data-outside":Pn.outside||void 0,"data-focused":$e.focused||void 0,"data-today":$e.today||void 0},!$e.hidden&&X?b.createElement(n.DayButton,{className:d[ve.DayButton],style:k==null?void 0:k[ve.DayButton],type:"button",day:Pn,modifiers:$e,disabled:$e.disabled||void 0,tabIndex:Le(Pn)?0:-1,"aria-label":nn(Tt,$e,i.options,i),onClick:ae(Pn,$e),onBlur:Ae(Pn,$e),onFocus:ye(Pn,$e),onKeyDown:qe(Pn,$e),onMouseEnter:An(Pn,$e),onMouseLeave:Qt(Pn,$e)},R(Tt,i.options,i)):!$e.hidden&&R(Pn.date,i.options,i))}))))))})),r.footer&&b.createElement(n.Footer,{className:d[ve.Footer],style:k==null?void 0:k[ve.Footer],role:"status","aria-live":"polite"},r.footer)))}var jN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const py=O.forwardRef((e,r)=>{var{as:n="div",className:t,above:a,below:i,variant:u,asChild:d}=e,c=jN(e,["as","className","above","below","variant","asChild"]);const{cn:m}=ke(),g=u==="show"?a:i,p=u==="show"?i:a,y=d?os:n;return b.createElement(y,Object.assign({},c,{ref:r,className:m("navds-responsive",t,{[`navds-responsive__above--${g}`]:g,[`navds-responsive__below--${p}`]:p})}))}),IN=O.forwardRef((e,r)=>b.createElement(py,Object.assign({},e,{ref:r,variant:"hide"}))),Wd=O.forwardRef((e,r)=>b.createElement(py,Object.assign({},e,{ref:r,variant:"show"})));function Wt(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function CN({day:e,fromDate:r,toDate:n}){const t=n&&Kr(e,Mr(n))>0,a=r&&Kr(Mr(r),e)>0;return t||a||!1}const hy="dd.MM.yyyy",LN="MMMM yyyy",yy=[hy,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...yy];const bu=(e,r,n,t,a)=>{let i;const u=yy;if(a){for(const d of u)if(i=Xa(e,d,r,{locale:n}),Wt(i)&&!wu(e,r,n,u))return i;for(const d of[...u.map(c=>c.replace("yyyy","yy"))])if(i=Xa(e,d,r,{locale:n}),Wt(i)&&wu(e,r,n,u)){const c=$N(e,d,r,n);return Wt(new Date(c))?new Date(c):new Date("Invalid date")}return new Date("Invalid date")}for(const d of u)if(i=Xa(e,d,r,{locale:n}),Wt(i)&&!wu(e,r,n,u))return i;return new Date("Invalid date")};function wu(e,r,n,t){let a;const i=t.map(u=>u.replace("yyyy","yy"));for(const u of i)if(a=Xa(e,u,r,{locale:n}),Wt(a))return!0;return!1}function $N(e,r,n,t){const a=Xa(yg(e,"19"),r.replace("yy","yyyy"),n,{locale:t}),i=Xa(yg(e,"20"),r.replace("yy","yyyy"),n,{locale:t});return Wt(a)&&Wt(i)?Js(a,mR(new Date,{years:80}))?i:a:new Date("Invalid date")}function yg(e,r){const n=e.slice(-2);return`${e.slice(0,e.length-2)}${r}${n}`}const Fs=(e,r,n,t)=>wa(e,t??hy,{locale:r}),HN=({month:e,start:r,end:n})=>{if(!e)return;let t=e;return r&&Js(t,r)&&(t=r),n&&Nh(t,n)&&(t=n),ba(t)};function VN(e,r,n,t){return Oh({start:Qs(e),end:Ii(e)}).map(u=>{const d=wa(u,"LLLL",{locale:t}),c=Cd(u),m=r&&u<ba(r)||n&&u>ba(n)||!1;return{value:c,label:d,disabled:m}})}function UN(e,r,n){if(!e||!r)return;const t=Qs(e),a=Ii(r),i=[];let u=t;for(;Js(u,a)||qh(u,a);)i.push(u),u=Md(u,1);return i.map(d=>{const c=wa(d,"yyyy",{locale:n});return{value:Ld(d),label:c,disabled:!1}})}function WN({captionLayout:e,startMonth:r,endMonth:n,today:t}){const a=e==="dropdown",i=t??new Date;return r?r=ba(r):!r&&a&&(r=Qs(Md(i,-100))),n?n=Eh(n):!n&&a&&(n=Ii(i)),[r&&Mr(r),n&&Mr(n)]}var GN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const YN=e=>{var{day:r,modifiers:n,locale:t,children:a}=e,i=GN(e,["day","modifiers","locale","children"]);const{cn:u}=ke(),d=O.useRef(null);return O.useEffect(()=>{var c;n.focused&&((c=d.current)===null||c===void 0||c.focus())},[n.focused]),n.hidden?b.createElement(b.Fragment,null):b.createElement("button",Object.assign({},i,{ref:d,"aria-hidden":r.outside,"aria-pressed":!!n.selected,"aria-label":wa(r.date,"cccc d",{locale:t}),"data-pressed":n.selected,"data-today":n.today||void 0,className:u(i.className,{"rdp-day_disabled":n.disabled,"rdp-day_selected":n.selected,"rdp-day_range_start":n.range_start,"rdp-day_range_middle":n.range_middle,"rdp-day_range_end":n.range_end,"rdp-day_today":n.today,"rdp-day_outside":n.outside,"rdp-day__weekend":n.weekend})}),a)};var zN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const vg=O.forwardRef((e,r)=>{const{inputProps:n,errorId:t,showErrorMsg:a,hasError:i,size:u,inputDescriptionId:d,readOnly:c}=Sa(e,"select"),{children:m,label:g,className:p,description:y,htmlSize:v,hideLabel:D=!1,style:E}=e,T=zN(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:x}=ke(),F={onMouseDown:w=>{c&&(w.preventDefault(),w.target.focus())},onKeyDown:w=>{c&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(w.key)&&w.preventDefault()}};return b.createElement("div",{className:x(p,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":c,"navds-select--error":i,"navds-select--readonly":c})},b.createElement(jn,{htmlFor:n.id,size:u,className:x("navds-form-field__label",{"navds-sr-only":D})},c&&b.createElement(Lh,null),g),!!y&&b.createElement(fn,{className:x("navds-form-field__description",{"navds-sr-only":D}),id:d,size:u,as:"div"},y),b.createElement("div",{className:x("navds-select__container"),style:E},b.createElement("select",Object.assign({},In(T,["error","errorId","size","readOnly"]),n,F,{ref:r,className:x("navds-select__input","navds-body-short",`navds-body-short--${u??"medium"}`),size:v}),m),b.createElement(Xp,{className:x("navds-select__chevron"),"aria-hidden":!0})),b.createElement("div",{className:x("navds-form-field__error"),id:t,"aria-relevant":"additions removals","aria-live":"polite"},a&&b.createElement(ls,{size:u,showIcon:!0},e.error)))}),vy=({week:{weekNumber:e,days:r},onWeekNumberClick:n,className:t,style:a,showOnDesktop:i})=>{const u=Li().translate,{cn:d}=ke(),{getModifiers:c}=Ea(),m=O.useMemo(()=>r.filter(p=>{const y=c(p);return!(y.hidden||y.outside||y.disabled)}).length===0,[r,c]),g=i?Wd:IN;return!n||m?b.createElement(g,{above:"sm",asChild:!0},b.createElement("td",{className:"rdp-cell"},b.createElement(Ni,{as:"span",textColor:"subtle",className:t,style:a,"aria-label":u("weekNumber",{week:e})},e))):b.createElement(g,{above:"sm",asChild:!0},b.createElement("td",{className:d("rdp-cell",{"navds-date__week-wrapper":!i})},b.createElement(Yt,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":u("selectWeekNumber",{week:e}),style:a,className:d("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{n(e,r.map(p=>p.date))},icon:b.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},KN=({onWeekNumberClick:e,weeks:r})=>{const n=Li().translate,{cn:t}=ke(),a=fr();return e?b.createElement(Wd,{below:"sm",asChild:!0},b.createElement("table",{className:"rdp-table",role:"grid"},b.createElement("tbody",{className:"rdp-tbody"},b.createElement("tr",{className:t("rdp-row navds-date__week-row")},b.createElement(Ni,{as:"th",weight:"semibold",className:t("rdp-cell navds-date__week-cell")},b.createElement("span",{className:t("navds-date__week-wrapper"),id:a},n("week"))),r==null?void 0:r.map(i=>b.createElement(vy,{key:i.weekNumber,week:i,onWeekNumberClick:e,showOnDesktop:!1,className:t("navds-date__week-wrapper")})))))):null};var XN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ZN=e=>{var{children:r,calendarMonth:n,locale:t,onWeekNumberClick:a}=e,i=XN(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:u,goToMonth:d,previousMonth:c,nextMonth:m}=Ea(),{captionLayout:g}=u,{cn:p}=ke(),y=Li().translate,v=O.useCallback((w,M)=>{const k=Number(M.target.value),N=jh(ba(w),k);d(N)},[d]),D=O.useCallback((w,M)=>{const k=Number(M.target.value),N=Ih(ba(w),k);d(N)},[d]),[E,T]=WN({captionLayout:g==="dropdown"?"dropdown":"label",startMonth:u.startMonth,endMonth:u.endMonth,today:u.today}),x=VN(n.date,E,T,t),F=UN(E,T,t);return b.createElement("div",Object.assign({},In(i,["displayIndex"])),b.createElement("div",{className:p("navds-date__caption")},(g==null?void 0:g.startsWith("dropdown"))&&b.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:p("navds-sr-only")},wa(n.date,"LLLL y",{locale:t})),b.createElement(Yt,{variant:"tertiary-neutral",disabled:!c,onClick:()=>c&&d(c),icon:b.createElement(yS,{title:y("goToPreviousMonth")}),className:p("navds-date__caption-button"),type:"button"}),g!=null&&g.startsWith("dropdown")?b.createElement("div",{className:p("navds-date__caption")},b.createElement(vg,{label:y("month"),hideLabel:!0,className:p("navds-date__caption__month"),onChange:w=>v(n.date,w),value:Cd(n.date)},x==null?void 0:x.map(({value:w,label:M,disabled:k})=>b.createElement("option",{key:w,value:w,disabled:k},M))),b.createElement(vg,{label:y("year"),hideLabel:!0,className:p("navds-date__caption__year"),onChange:w=>D(n.date,w),value:Ld(n.date)},F==null?void 0:F.map(({value:w,label:M,disabled:k})=>b.createElement("option",{key:w,value:w,disabled:k},M)))):b.createElement(fn,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:p("navds-date__caption-label")},wa(n.date,"LLLL y",{locale:t})),b.createElement(Yt,{variant:"tertiary-neutral",icon:b.createElement(kS,{title:y("goToNextMonth")}),onClick:()=>m&&d(m),disabled:!m,className:p("navds-date__caption-button"),type:"button"})),b.createElement(KN,{weeks:n.weeks,onWeekNumberClick:a}),r)};var QN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const JN={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},ky=e=>{var{className:r,dropdownCaption:n,disabled:t=[],disableWeekends:a=!1,showWeekNumber:i=!1,selected:u,fixedWeeks:d=!1,onWeekNumberClick:c,fromDate:m,toDate:g,month:p,mode:y,handleSelect:v,locale:D}=e,E=QN(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:T}=ke(),x=wh(),F=D?Vh(D):x,w=y??"single";return b.createElement(qN,Object.assign({captionLayout:n?"dropdown":"label",hideNavigation:!0,locale:F,mode:w,onSelect:(M,k)=>{if(w!=="range"||M||!ey(u)){v(M);return}if(!u.to){v({from:k,to:void 0});return}let N;Bd(u.to,k)?N=void 0:Js(k,u.to)?N={from:k,to:u.to}:N={from:u.to,to:k},v(N)},selected:u,classNames:JN,components:{MonthCaption:()=>b.createElement(b.Fragment,null),DayButton:O.useCallback(M=>b.createElement(YN,Object.assign({},M,{locale:F})),[F]),Month:O.useCallback(M=>b.createElement(ZN,Object.assign({},M,{locale:F,onWeekNumberClick:w==="multiple"?c:void 0})),[F,w,c]),Day:O.useCallback(M=>b.createElement("td",Object.assign({},In(M,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:O.useCallback(M=>b.createElement(vy,Object.assign({},M,{showOnDesktop:!0,onWeekNumberClick:w==="multiple"?c:void 0})),[w,c]),WeekNumberHeader:O.useCallback(M=>b.createElement(Wd,{above:"sm",asChild:!0},b.createElement("th",Object.assign({},M))),[]),Weekdays:O.useCallback(M=>b.createElement("thead",Object.assign({},M,{className:"rdp-head","aria-hidden":!0}),b.createElement("tr",{className:"rdp-head_row"},M.children)),[])},className:T("navds-date",r),disabled:M=>a&&hi(M)||Pt(M,t)||CN({day:M,fromDate:m,toDate:g}),weekStartsOn:1,modifiers:{weekend:M=>a&&hi(M)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:i,fixedWeeks:d,showOutsideDays:!0,startMonth:m,endMonth:g,month:HN({month:p,start:m,end:g})},In(E,["onSelect","role","id","defaultSelected"])))};var eA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const nA=O.forwardRef((e,r)=>{var{className:n,locale:t,translations:a,selected:i,defaultSelected:u,onSelect:d,mode:c}=e,m=eA(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:g}=ke(),p=Kt("DatePicker",a,Uh(t)),[y,v]=ci({defaultValue:u,value:i,onChange:D=>d==null?void 0:d(D)});return b.createElement(Wh,{translate:p},b.createElement("div",{ref:r,className:g("navds-date__standalone-wrapper",n)},b.createElement(ky,Object.assign({},m,{locale:t,handleSelect:v,selected:y,mode:c}))))});var tA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const bi=O.forwardRef((e,r)=>{var{children:n,locale:t,translations:a,selected:i,id:u,defaultSelected:d,wrapperClassName:c,open:m,onClose:g,onOpenToggle:p,strategy:y,mode:v}=e,D=tA(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const E=Kt("DatePicker",a,Uh(t)),{cn:T}=ke(),x=fr(u),[F,w]=ci({defaultValue:!1,value:m}),[M,k]=O.useState(null),N=ss(k,r),[R,A]=ci({defaultValue:d,value:i,onChange:j=>{var z;let V=!1;v==="single"&&j?V=!0:ey(j)&&j.from&&j.to&&(V=!0,Bd(j.from,j.to)&&(V=!1)),V&&(g==null||g(),w(!1)),(z=D==null?void 0:D.onSelect)===null||z===void 0||z.call(D,j)}});return b.createElement(Wh,{translate:E},b.createElement(BR,{open:F,onOpen:()=>{w(j=>!j),p==null||p()},ariaId:x,defined:!0},b.createElement("div",{ref:N,className:T("navds-date__wrapper",c)},n,b.createElement(nF,{open:F,anchor:M,onClose:()=>{g==null||g(),F&&w(!1)},locale:t,translate:E,variant:v??"single",popoverProps:{id:x,strategy:y}},b.createElement(ky,Object.assign({},D,{locale:t,handleSelect:A,selected:R,mode:v}))))))});bi.Standalone=nA;bi.Input=qR;const rA=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),aA=(e={})=>{var r;const{locale:n,required:t,defaultSelected:a,today:i=new Date,fromDate:u,toDate:d,disabled:c,disableWeekends:m,onDateChange:g,inputFormat:p,onValidate:y,defaultMonth:v,allowTwoDigitYear:D=!0}=e,[E,T]=O.useState(null),x=wh(),F=n?Vh(n):x,[w,M]=O.useState(a),[k,N]=O.useState((r=w??v)!==null&&r!==void 0?r:i),[R,A]=O.useState(w),[j,z]=O.useState(!1),V=w?Fs(w,F,"date",p):"",[W,L]=O.useState(V),U=O.useCallback(me=>{var he,Le;z(me),me&&N((Le=(he=R??w)!==null&&he!==void 0?he:v)!==null&&Le!==void 0?Le:i)},[v,w,R,i]),G=me=>{g==null||g(me),A(me)},$=(me={})=>y==null?void 0:y(rA(me));return{datepickerProps:{month:k,onMonthChange:N,onDayClick:(me,{selected:he})=>{if(!(he&&t)){if(me&&!he&&(U(!1),E==null||E.focus()),he){G(void 0),L(""),$({isValidDate:!1,isEmpty:!0});return}G(me),$(),N(me),L(me?Fs(me,F,"date",p):"")}},selected:R??new Date("Invalid date"),locale:n,fromDate:u,toDate:d,today:i,open:j,onClose:()=>{U(!1),E==null||E.focus()},onOpenToggle:()=>U(!j),disabled:c,disableWeekends:m},inputProps:{onChange:me=>{L(me.target.value);const he=bu(me.target.value,i,F,"date",D),Le=u&&he&&Kr(u,he)>0,Ve=d&&he&&Kr(he,d)>0;if(!Wt(he)||m&&hi(he)||c&&Pt(he,c)){G(void 0),$({isInvalid:!Wt(he),isWeekend:m&&hi(he),isDisabled:c&&Pt(he,c),isValidDate:!1,isEmpty:!me.target.value,isBefore:Le??!1,isAfter:Ve??!1});return}if(Le||Ve){G(void 0),$({isValidDate:!1,isBefore:Le??!1,isAfter:Ve??!1});return}G(he),$(),N(v??he)},onFocus:me=>{if(me.target.readOnly)return;const he=bu(me.target.value,i,F,"date",D);if(Wt(he)){L(Fs(he,F,"date",p));const Le=u&&he&&Kr(u,he)>0,Ve=d&&he&&Kr(he,d)>0;!Le&&!Ve&&N(he)}},onBlur:me=>{const he=bu(me.target.value,i,F,"date",D);Wt(he)&&L(Fs(he,F,"date",p))},value:W,setAnchorRef:T},reset:()=>{var me;G(w),N((me=w??v)!==null&&me!==void 0?me:i),L(V??""),M(a)},selectedDay:R,setSelected:me=>{var he;G(me),N((he=me??v)!==null&&he!==void 0?he:i),L(me?Fs(me,F,"date",p):"")}}};function $n(e,r,n,t){return t?typeof t=="string"?{[`--__${e}c-${r}-${n}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([a,i])=>[`--__${e}c-${r}-${n}-${a}`,i])):{}}const sA={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},oA={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},kg=(e,r,n,t,a,i)=>r.split(" ").map((u,d,c)=>{var m,g;if(e==="margin-inline"&&u==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&u==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&u==="auto")return"auto";let p=`var(--${i}-${n}-${u})`;if(t.includes(u))p=u==="px"?"1px":u;else if(n==="spacing"&&u.startsWith("space"))p=`var(--${i}-${u})`;else if(n==="spacing"){const y=`--${i}-spacing-${u}`;p=`var(${(m=sA[y])!==null&&m!==void 0?m:y})`}else if(n==="radius"){const y=(g=oA[u])!==null&&g!==void 0?g:u;p=`var(--${i}-radius-${y})`}return a?u==="0"?"0":`calc(-1 * ${p})`:p}).join(" ");function it(e,r,n,t,a,i=!1,u=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${r}-${n}-xs`]:kg(n,a,t,u,i,e)};const d={};return Object.entries(a).forEach(([c,m])=>{d[`--__${e}c-${r}-${n}-${c}`]=kg(n,m,t,u,i,e)}),d}const Gd=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Yd=({children:e,className:r,padding:n,paddingInline:t,paddingBlock:a,margin:i,marginInline:u,marginBlock:d,width:c,minWidth:m,maxWidth:g,height:p,minHeight:y,maxHeight:v,position:D,inset:E,top:T,right:x,left:F,bottom:w,overflow:M,overflowX:k,overflowY:N,flexBasis:R,flexGrow:A,flexShrink:j,gridColumn:z})=>{const V=Ys(!1),{cn:W}=ke(),L=V?"ax":"a",U=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},it(L,"r","p","spacing",n)),it(L,"r","pi","spacing",t)),it(L,"r","pb","spacing",a)),it(L,"r","m","spacing",i)),it(L,"r","mi","spacing",u)),it(L,"r","mb","spacing",d)),$n(L,"r","w",c)),$n(L,"r","minw",m)),$n(L,"r","maxw",g)),$n(L,"r","h",p)),$n(L,"r","minh",y)),$n(L,"r","maxh",v)),$n(L,"r","position",D)),it(L,"r","inset","spacing",E)),it(L,"r","top","spacing",T)),it(L,"r","right","spacing",x)),it(L,"r","bottom","spacing",w)),it(L,"r","left","spacing",F)),$n(L,"r","overflow",M)),$n(L,"r","overflowx",k)),$n(L,"r","overflowy",N)),$n(L,"r","flex-basis",R)),$n(L,"r","flex-grow",A)),$n(L,"r","flex-shrink",j)),$n(L,"r","grid-column",z));return b.createElement(os,{className:W({className:r,"navds-r-p":n,"navds-r-pi":t,"navds-r-pb":a,"navds-r-m":i,"navds-r-mi":u,"navds-r-mb":d,"navds-r-w":c,"navds-r-minw":m,"navds-r-maxw":g,"navds-r-h":p,"navds-r-minh":y,"navds-r-maxh":v,"navds-r-position":D,"navds-r-inset":E,"navds-r-top":T,"navds-r-right":x,"navds-r-bottom":w,"navds-r-left":F,"navds-r-overflow":M,"navds-r-overflowx":k,"navds-r-overflowy":N,"navds-r-flex-basis":R,"navds-r-flex-grow":A,"navds-r-flex-shrink":j,"navds-r-grid-column":z}),style:U},e)};var iA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const lA=O.forwardRef((e,r)=>{var{children:n,className:t,as:a="div",background:i,borderColor:u,borderWidth:d,borderRadius:c,shadow:m,style:g,asChild:p}=e,y=iA(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:v}=ke(),D=Object.assign(Object.assign(Object.assign({},g),{"--__axc-box-background":i?`var(--ax-bg-${i})`:void 0,"--__axc-box-shadow":m?`var(--ax-shadow-${m})`:void 0,"--__axc-box-border-color":u?`var(--ax-border-${u})`:void 0,"--__axc-box-border-width":d?d.split(" ").map(T=>`${T}px`).join(" "):void 0}),it("ax","box","radius","radius",c,!1,["0"])),E=p?os:a;return b.createElement(Yd,Object.assign({},y),b.createElement(E,Object.assign({},In(y,Gd),{ref:r,style:D,className:v("navds-box",t,{"navds-box-bg":i,"navds-box-border-color":u,"navds-box-border-width":d,"navds-box-radius":c,"navds-box-shadow":m})}),n))});var uA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const dA=O.forwardRef((e,r)=>{var{children:n,className:t,as:a="div",background:i,borderColor:u,borderWidth:d,borderRadius:c,shadow:m,style:g,asChild:p}=e,y=uA(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const v=Ys(!1),{cn:D}=ke(),E=v?"ax":"a",T=Object.assign(Object.assign(Object.assign({},g),{[`--__${E}c-box-background`]:i?`var(--a-${i})`:void 0,[`--__${E}c-box-shadow`]:m?`var(--a-shadow-${m})`:void 0,[`--__${E}c-box-border-color`]:u?`var(--a-${u})`:void 0,[`--__${E}c-box-border-width`]:d?d.split(" ").map(F=>`${F}px`).join(" "):void 0}),it(E,"box","radius","radius",c,!1,["0"])),x=p?os:a;return b.createElement(Yd,Object.assign({},y),b.createElement(x,Object.assign({},In(y,Gd),{ref:r,style:T,className:D("navds-box",t,{"navds-box-bg":i,"navds-box-border-color":u,"navds-box-border-width":d,"navds-box-border-radius":c,"navds-box-shadow":m})}),n))}),by=dA;by.New=lA;var cA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const wy=O.forwardRef((e,r)=>{var{children:n,className:t,as:a="div",align:i,justify:u,wrap:d=!0,gap:c,style:m,direction:g="row",asChild:p}=e,y=cA(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const D=Ys(!1)?"ax":"a",{cn:E}=ke(),T=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),it(D,"stack","gap","spacing",c)),$n(D,"stack","direction",g)),$n(D,"stack","align",i)),$n(D,"stack","justify",u)),x=p?os:a;return b.createElement(Yd,Object.assign({},y),b.createElement(x,Object.assign({},In(y,Gd),{ref:r,style:T,className:E("navds-stack",t,{"navds-vstack":g==="column","navds-hstack":g==="row","navds-stack-gap":c,"navds-stack-align":i,"navds-stack-justify":u,"navds-stack-direction":g,"navds-stack-wrap":d})}),n))});var fA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const zt=O.forwardRef((e,r)=>{var{as:n="div"}=e,t=fA(e,["as"]);return b.createElement(wy,Object.assign({as:n},t,{ref:r,direction:"row"}))});var mA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Bt=O.forwardRef((e,r)=>{var{as:n="div"}=e,t=mA(e,["as"]);return b.createElement(wy,Object.assign({as:n},t,{ref:r,direction:"column",wrap:!1}))});var gA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const pA=O.forwardRef((e,r)=>{var{className:n}=e,t=gA(e,["className"]);const{cn:a}=ke();return b.createElement("tbody",Object.assign({},t,{ref:r,className:a("navds-table__body",n)}))});var hA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const _y=O.forwardRef((e,r)=>{var{className:n,children:t,align:a,textSize:i}=e,u=hA(e,["className","children","align","textSize"]);const{cn:d}=ke();return b.createElement("th",Object.assign({ref:r,className:d("navds-table__header-cell","navds-label",n,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":i==="small"})},u),t)}),Ty=O.createContext(null);var yA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const vA=O.forwardRef((e,r)=>{var n,t,a,i,{className:u,children:d,sortable:c=!1,sortKey:m}=e,g=yA(e,["className","children","sortable","sortKey"]);const p=O.useContext(Ty),{cn:y}=ke();return c&&!m&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),b.createElement(_y,Object.assign({scope:"col",ref:r,className:y(u),"aria-sort":c?((n=p==null?void 0:p.sort)===null||n===void 0?void 0:n.orderBy)===m?(t=p==null?void 0:p.sort)===null||t===void 0?void 0:t.direction:"none":void 0},g),c?b.createElement("button",{type:"button",className:y("navds-table__sort-button"),onClick:c&&m?()=>{var v;return(v=p==null?void 0:p.onSortChange)===null||v===void 0?void 0:v.call(p,m)}:void 0},d,((a=p==null?void 0:p.sort)===null||a===void 0?void 0:a.orderBy)===m?((i=p==null?void 0:p.sort)===null||i===void 0?void 0:i.direction)==="descending"?b.createElement(jS,{"aria-hidden":!0}):b.createElement(CS,{"aria-hidden":!0}):b.createElement(wS,{"aria-hidden":!0})):d)});var kA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Sy=O.forwardRef((e,r)=>{var{className:n,children:t="",align:a,textSize:i}=e,u=kA(e,["className","children","align","textSize"]);const{cn:d}=ke();return b.createElement(fn,Object.assign({as:"td",ref:r,className:d("navds-table__data-cell",n,{[`navds-table__data-cell--align-${a}`]:a}),size:i},u),t)});var bA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const wA=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function _A(e){const r=parseFloat(e);return!Number.isNaN(r)&&Number.isFinite(r)}function bg(e){return typeof e=="string"&&e[e.length-1]==="%"&&_A(e.substring(0,e.length-1))}function _u(e,r){r===0&&(e!=null&&e.style)&&(e.style.display="none")}function TA(e,r){r===0&&(e!=null&&e.style)&&(e.style.display="")}const SA=e=>{var{children:r,className:n,innerClassName:t,duration:a=250,easing:i="ease",height:u}=e,d=bA(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=ke(),m=O.useRef(u),g=O.useRef(null),p=O.useRef(),y=O.useRef(),v=O.useRef(u),D=O.useRef("visible"),E=wA?0:a;typeof v.current=="number"?(typeof u!="string"&&(v.current=u<0?0:u),D.current="hidden"):bg(v.current)&&(v.current=u==="0%"?0:u,D.current="hidden");const[T,x]=O.useState(v.current),[F,w]=O.useState(D.current),[M,k]=O.useState(!1);O.useEffect(()=>{_u(g.current,v.current)},[]),O.useEffect(()=>{if(u!==m.current&&g.current){TA(g.current,m.current),g.current.style.overflow="hidden";const j=g.current.offsetHeight;g.current.style.overflow="";const z=E;let V,W,L="hidden",U;const G=m.current==="auto";typeof u=="number"?(V=u<0?0:u,W=V):bg(u)?(V=u==="0%"?0:u,W=V):(V=j,W="auto",L=void 0),G&&(W=V,V=j),x(V),w("hidden"),k(!G),clearTimeout(y.current),clearTimeout(p.current),G?(U=!0,y.current=setTimeout(()=>{x(W),w(L),k(U)},50),p.current=setTimeout(()=>{k(!1),_u(g.current,W)},z)):y.current=setTimeout(()=>{x(W),w(L),k(!1),u!=="auto"&&_u(g.current,V)},z)}return m.current=u,()=>{clearTimeout(y.current),clearTimeout(p.current)}},[u]);const N={height:T,overflow:F};M&&(N.transition=`height ${E}ms ${i} 0ms`,N.WebkitTransition=N.transition);const A=typeof d["aria-hidden"]<"u"?d["aria-hidden"]:u===0;return b.createElement("div",Object.assign({},d,{className:c(n),style:N}),b.createElement("div",{"aria-hidden":A,className:c(t),ref:g},r))};var EA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ey=O.forwardRef((e,r)=>{var{className:n,selected:t=!1,shadeOnHover:a=!0}=e,i=EA(e,["className","selected","shadeOnHover"]);const{cn:u}=ke();return b.createElement("tr",Object.assign({},i,{ref:r,className:u("navds-table__row",n,{"navds-table__row--selected":t,"navds-table__row--shade-on-hover":a})}))});var OA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const DA=O.forwardRef((e,r)=>{var{className:n,children:t,content:a,togglePlacement:i="left",defaultOpen:u=!1,open:d,onOpenChange:c,expansionDisabled:m=!1,expandOnRowClick:g=!1,colSpan:p=999,contentGutter:y,onClick:v}=e,D=OA(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:E}=ke(),[T,x]=ci({defaultValue:u,value:d,onChange:c}),F=Kt("global"),w=fr(),M=N=>{x(R=>!R),N.stopPropagation()},k=N=>{g&&!m&&!Oy(N.target)&&M(N)};return b.createElement(b.Fragment,null,b.createElement(Ey,Object.assign({},D,{ref:r,className:E("navds-table__expandable-row",n,{"navds-table__expandable-row--open":T,"navds-table__expandable-row--expansion-disabled":m,"navds-table__expandable-row--clickable":g}),onClick:pa(v,k)}),i==="right"&&t,b.createElement(Sy,{className:E("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":T}),onClick:m?()=>null:M},!m&&b.createElement("button",{className:E("navds-table__toggle-expand-button"),type:"button","aria-controls":w,"aria-expanded":T,onClick:M},b.createElement(Xp,{className:E("navds-table__expandable-icon"),title:F(T?"showLess":"showMore")}))),i==="left"&&t),b.createElement("tr",{"data-state":T?"open":"closed",className:E("navds-table__expanded-row"),"aria-hidden":!T,id:w},b.createElement("td",{colSpan:p,className:E("navds-table__expanded-row-cell")},b.createElement(SA,{className:E("navds-table__expanded-row-collapse"),innerClassName:E(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${y??i}`),height:T?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function Oy(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Oy(e.parentElement)}var xA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const RA=O.forwardRef((e,r)=>{var{className:n}=e,t=xA(e,["className"]);const{cn:a}=ke();return b.createElement("thead",Object.assign({},t,{ref:r,className:a("navds-table__header",n)}))});var FA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Bn=O.forwardRef((e,r)=>{var{className:n,zebraStripes:t=!1,size:a="medium",onSortChange:i,sort:u}=e,d=FA(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:c}=ke();return b.createElement(Ty.Provider,{value:{onSortChange:i,sort:u}},b.createElement("table",Object.assign({},d,{ref:r,className:c("navds-table",`navds-table--${a}`,n,{"navds-table--zebra-stripes":t})})))});Bn.Header=RA;Bn.Body=pA;Bn.Row=Ey;Bn.ColumnHeader=vA;Bn.HeaderCell=_y;Bn.DataCell=Sy;Bn.ExpandableRow=DA;var NA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Xu=O.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:i="medium",icon:u,"data-color":d}=e,c=NA(e,["children","className","variant","size","icon","data-color"]);const{cn:m}=ke(),g=(a==null?void 0:a.endsWith("-filled"))&&"strong",p=(a==null?void 0:a.endsWith("-moderate"))&&"moderate";return b.createElement(fn,Object.assign({"data-color":d??AA(a),"data-variant":g||p||"outline"},c,{ref:r,as:"span",size:i==="medium"?"medium":"small",className:m("navds-tag",t,`navds-tag--${a}`,`navds-tag--${i}`)}),u&&b.createElement("span",{className:m("navds-tag__icon--left")},u),n)});function AA(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const PA=e=>{const r=Sa(e,"fieldset"),{inputProps:n}=r;return Object.assign(Object.assign({},r),{inputProps:{"aria-invalid":n["aria-invalid"],"aria-describedby":n["aria-describedby"]}})};var MA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Dy=O.forwardRef((e,r)=>{var n,t,a;const{inputProps:i,errorId:u,showErrorMsg:d,hasError:c,size:m,readOnly:g,inputDescriptionId:p}=PA(e),{cn:y}=ke(),v=O.useContext(ki),{children:D,className:E,errorPropagation:T=!0,legend:x,description:F,hideLegend:w,nativeReadOnly:M=!0}=e,k=MA(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return b.createElement(ki.Provider,{value:{error:T?(n=e.error)!==null&&n!==void 0?n:v==null?void 0:v.error:void 0,errorId:Gs({[u]:d,[(t=v==null?void 0:v.errorId)!==null&&t!==void 0?t:""]:!!(v!=null&&v.error)}),size:m,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:g}},b.createElement("fieldset",Object.assign({},In(k,["errorId","error","size","readOnly"]),In(i,["aria-describedby","aria-invalid"]),{ref:r,className:y(E,"navds-fieldset",`navds-fieldset--${m}`,{"navds-fieldset--error":c,"navds-fieldset--readonly":g})}),b.createElement(jn,{size:m,as:"legend",className:y("navds-fieldset__legend",{"navds-sr-only":!!w})},g&&(M?b.createElement(Ci,null):b.createElement(Lh,null)),x),!!F&&b.createElement(fn,{className:y("navds-fieldset__description",{"navds-sr-only":!!w}),id:p,size:m??"medium",as:"div"},e.description),D,b.createElement("div",{id:u,"aria-relevant":"additions removals","aria-live":"polite",className:y("navds-fieldset__error")},d&&b.createElement(ls,{size:m,showIcon:!0},e.error))))});var BA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const xy=b.createContext(null),qA=O.forwardRef((e,r)=>{var n,t,{children:a,className:i,name:u,defaultValue:d,value:c,onChange:m=()=>{},required:g,readOnly:p}=e,y=BA(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:v}=ke(),D=O.useContext(ki),E=fr();return b.createElement(Dy,Object.assign({},y,{readOnly:p,ref:r,className:v(i,"navds-radio-group",`navds-radio-group--${(t=(n=y.size)!==null&&n!==void 0?n:D==null?void 0:D.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),b.createElement(xy.Provider,{value:{name:u??`radioGroupName-${E}`,defaultValue:d,value:c,onChange:m,required:g}},b.createElement("div",{className:v("navds-radio-buttons")},a)))});var jA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const IA=e=>{const r=O.useContext(xy),n=Sa(In(e,["description"]),"radio"),{inputProps:t,readOnly:a}=n,i=jA(n,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},i),{readOnly:a,inputProps:Object.assign(Object.assign({},t),{name:r==null?void 0:r.name,defaultChecked:(r==null?void 0:r.defaultValue)===void 0?void 0:(r==null?void 0:r.defaultValue)===e.value,checked:(r==null?void 0:r.value)===void 0?void 0:(r==null?void 0:r.value)===e.value,onChange:u=>{var d,c;a||((d=e.onChange)===null||d===void 0||d.call(e,u),(c=r==null?void 0:r.onChange)===null||c===void 0||c.call(r,e.value))},onClick:u=>{var d;if(a){u.preventDefault();return}(d=e==null?void 0:e.onClick)===null||d===void 0||d.call(e,u)},required:r==null?void 0:r.required,type:"radio"})})},wg=O.forwardRef((e,r)=>{const{cn:n}=ke(),{inputProps:t,size:a,hasError:i,readOnly:u}=IA(e),d=fr(),c=fr();return b.createElement("div",{className:n(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":i,"navds-radio--disabled":t.disabled,"navds-radio--readonly":u}),"data-color":i?"danger":e["data-color"]},b.createElement("input",Object.assign({},In(e,["children","size","description","readOnly"]),In(t,["aria-invalid"]),{"aria-labelledby":Gs(d,!!e["aria-labelledby"]&&e["aria-labelledby"],{[c]:e.description}),className:n("navds-radio__input"),ref:r})),b.createElement("label",{htmlFor:t.id,className:n("navds-radio__label")},b.createElement("span",{className:n("navds-radio__content")},b.createElement(fn,{as:"span",id:d,size:a,"aria-hidden":!0},e.children),e.description&&b.createElement(fn,{as:"span",id:c,size:a,className:n("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))}),Ry=O.createContext(null);var CA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Fy=O.forwardRef((e,r)=>{var n,{className:t,children:a,disabled:i,onClick:u}=e,d=CA(e,["className","children","disabled","onClick"]);const{cn:c}=ke(),m=Kt("Search"),g=O.useContext(Ry);if(g===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:p,variant:y,handleClick:v}=g;return b.createElement(Yt,Object.assign({type:"submit"},d,{ref:r,size:p,variant:y==="secondary"?"secondary":"primary",className:c("navds-search__button-search",t),disabled:(n=g==null?void 0:g.disabled)!==null&&n!==void 0?n:i,onClick:pa(u,v),icon:b.createElement(Zp,Object.assign({},a?{"aria-hidden":!0}:{title:m("search")}))}),a)});var LA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Zu=O.forwardRef((e,r)=>{const{inputProps:n,size:t="medium",inputDescriptionId:a,errorId:i,showErrorMsg:u,hasError:d}=Sa(e,"searchfield"),{className:c,hideLabel:m=!0,label:g,description:p,value:y,clearButtonLabel:v,onClear:D,clearButton:E=!0,children:T,variant:x="primary",defaultValue:F,onChange:w,onSearchClick:M,htmlSize:k}=e,N=LA(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),{cn:R}=ke(),A=O.useRef(null),j=ss(A,r),[z,V]=O.useState(F??""),W=$=>{y===void 0&&V($),w==null||w($)},L=$=>{var J,Y;D==null||D($),W(""),(Y=(J=A.current)===null||J===void 0?void 0:J.focus)===null||Y===void 0||Y.call(J)},U=()=>{M==null||M(`${y??z}`)},G=E&&!n.disabled&&(y??z);return b.createElement("div",{onKeyDown:$=>{var J;$.key==="Escape"&&(!((J=A.current)===null||J===void 0)&&J.value&&$.preventDefault(),L({trigger:"Escape",event:$}))},className:R(c,"navds-form-field",`navds-form-field--${t}`,"navds-search",{"navds-search--error":d,"navds-search--disabled":n.disabled,"navds-search--with-size":k})},b.createElement(jn,{htmlFor:n.id,size:t,className:R("navds-form-field__label",{"navds-sr-only":m})},g),!!p&&b.createElement(fn,{className:R("navds-form-field__description",{"navds-sr-only":m}),id:a,size:t,as:"div"},p),b.createElement("div",{className:R("navds-search__wrapper")},b.createElement("div",{className:R("navds-search__wrapper-inner")},x==="simple"&&b.createElement(Zp,{"aria-hidden":!0,className:R("navds-search__search-icon")}),b.createElement("input",Object.assign({ref:j},In(N,["error","errorId","size","readOnly"]),n,{value:y??z,onChange:$=>W($.target.value),type:"search",className:R(c,"navds-search__input",`navds-search__input--${x}`,"navds-text-field__input","navds-body-short",`navds-body-short--${t}`)},k?{size:Number(k)}:{})),G&&b.createElement($A,{handleClear:L,size:t,clearButtonLabel:v})),b.createElement(Ry.Provider,{value:{size:t,disabled:n.disabled,variant:x,handleClick:U}},T||x!=="simple"&&b.createElement(Fy,null))),b.createElement("div",{className:R("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},u&&b.createElement(ls,{size:t,showIcon:!0},e.error)))});function $A({size:e,clearButtonLabel:r,handleClear:n}){const{cn:t}=ke(),a=Ys(!1),i=Kt("Search");return a?b.createElement(Yt,{className:t("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:b.createElement(Us,{"aria-hidden":!0}),title:r||i("clear"),onClick:u=>n({trigger:"Click",event:u}),type:"button"}):b.createElement("button",{type:"button",onClick:u=>n({trigger:"Click",event:u}),className:t("navds-search__button-clear")},b.createElement("span",{className:t("navds-sr-only")},r||i("clear")),b.createElement(Us,{"aria-hidden":!0}))}Zu.Button=Fy;var HA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const _g=(e,r,n)=>{const{outerHeightStyle:t,overflow:a}=r;return n.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(n.current+=1,r):e},Tg=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function ei(e){return parseInt(e,10)||0}const VA=O.forwardRef((e,r)=>{var n,t,{className:a,onChange:i,maxRows:u,minRows:d=1,autoScrollbar:c,style:m,value:g}=e,p=HA(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:y}=O.useRef(g!=null),v=O.useRef(null),D=ss(v,r),E=O.useRef(null),T=O.useRef(0),[x,F]=O.useState({outerHeightStyle:0}),w=b.useCallback(()=>{const R=v.current,j=Tg(R).getComputedStyle(R);if(j.width==="0px")return{outerHeightStyle:0};const z=E.current;z.style.width=j.width,z.value=R.value||p.placeholder||"x",z.value.slice(-1)===`
`&&(z.value+=" ");const V=j.boxSizing,W=ei(j.paddingBottom)+ei(j.paddingTop),L=ei(j.borderBottomWidth)+ei(j.borderTopWidth),U=z.scrollHeight-W;z.value="x";const G=z.scrollHeight-W;let $=U;d&&($=Math.max(Number(d)*G,$)),u&&($=Math.min(Number(u)*G,$)),$=Math.max($,G);const J=$+(V==="border-box"?W+L:0),Y=Math.abs($-U)<=1;return{outerHeightStyle:J,overflow:Y}},[u,d,p.placeholder]),M=()=>{const R=w();Sg(R)||F(A=>_g(A,R,T))};es(()=>{const R=()=>{const W=w();Sg(W)||Wp.flushSync(()=>{F(L=>_g(L,W,T))})},A=Kp(()=>{var W,L,U;if(T.current=0,!((W=v.current)===null||W===void 0)&&W.style.height||!((L=v.current)===null||L===void 0)&&L.style.width){((U=v.current)===null||U===void 0?void 0:U.style.overflow)==="hidden"&&F(G=>Object.assign(Object.assign({},G),{overflow:!1}));return}R()},166,!0),j=v.current,z=Tg(j);z.addEventListener("resize",A);let V;return typeof ResizeObserver<"u"&&(V=new ResizeObserver(A),V.observe(j)),()=>{A.clear(),z.removeEventListener("resize",A),V&&V.disconnect()}},[w]),es(()=>{M()}),O.useEffect(()=>{T.current=0},[g]);const k=R=>{T.current=0,y||M(),i&&i(R)},N=Object.assign({"--__ac-textarea-height":x.outerHeightStyle+"px","--__axc-textarea-height":x.outerHeightStyle+"px",overflow:x.overflow&&!c&&!(!((n=v.current)===null||n===void 0)&&n.style.height)&&!(!((t=v.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},m);return b.createElement(b.Fragment,null,b.createElement("textarea",Object.assign({value:g,onChange:k,ref:D,rows:d,style:N},p,{className:a})),b.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:E,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},m)}))});function Sg(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const UA=({maxLengthId:e,maxLength:r,currentLength:n,size:t,i18n:a})=>{const{cn:i}=ke(),u=Kt("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),d=r-n,[c,m]=O.useState(d);return O.useEffect(()=>{const g=Kp(()=>{m(d)},2e3);return g(),()=>{g.clear()}},[d]),b.createElement(b.Fragment,null,b.createElement("span",{id:e,className:i("navds-sr-only")},u("maxLength",{maxLength:r})),d<20&&b.createElement("span",{role:"status",className:i("navds-textarea__sr-counter navds-sr-only")},Eg(c,u)),b.createElement(fn,{className:i("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:t},Eg(d,u)))},Eg=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var WA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const GA=O.forwardRef((e,r)=>{var n,t,a;const{inputProps:i,errorId:u,showErrorMsg:d,hasError:c,size:m,inputDescriptionId:g}=Sa(e,"textarea"),{label:p,className:y,description:v,maxLength:D,hideLabel:E=!1,resize:T,UNSAFE_autoScrollbar:x,i18n:F,readOnly:w}=e,M=WA(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:k}=ke(),N=fr(),R=D!==void 0&&D>0,[A,j]=O.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),z=()=>{let W=M!=null&&M.minRows?M==null?void 0:M.minRows:3;return m==="small"&&(W=M!=null&&M.minRows?M==null?void 0:M.minRows:2),W},V=Gs(i["aria-describedby"],{[N??""]:R});return b.createElement("div",{className:k(y,"navds-form-field",`navds-form-field--${m}`,{"navds-form-field--disabled":!!i.disabled,"navds-form-field--readonly":w,"navds-textarea--readonly":w,"navds-textarea--error":c,"navds-textarea--autoscrollbar":x,[`navds-textarea--resize-${T===!0?"both":T}`]:T})},b.createElement(jn,{htmlFor:i.id,size:m,className:k("navds-form-field__label",{"navds-sr-only":E})},w&&b.createElement(Ci,null),p),!!v&&b.createElement(fn,{className:k("navds-form-field__description",{"navds-sr-only":E}),id:g,size:m,as:"div"},v),b.createElement(VA,Object.assign({},In(M,["error","errorId","size"]),i,{onChange:pa(e.onChange,e.value===void 0?W=>j(W.target.value):void 0),minRows:z(),autoScrollbar:x,ref:r,readOnly:w,className:k("navds-textarea__input","navds-body-short",`navds-body-short--${m??"medium"}`)},V?{"aria-describedby":V}:{})),R&&!w&&!i.disabled&&b.createElement(UA,{maxLengthId:N,maxLength:D,currentLength:(a=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:A.length,size:m,i18n:F}),b.createElement("div",{className:k("navds-form-field__error"),id:u,"aria-relevant":"additions removals","aria-live":"polite"},d&&b.createElement(ls,{size:m,showIcon:!0},e.error)))});var YA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const zA=O.forwardRef((e,r)=>{const{cn:n}=ke(),{inputProps:t,errorId:a,showErrorMsg:i,hasError:u,size:d,inputDescriptionId:c}=Sa(e,"textField"),{label:m,className:g,description:p,htmlSize:y,hideLabel:v=!1,type:D="text",readOnly:E}=e,T=YA(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return b.createElement("div",{className:n(g,"navds-form-field",`navds-form-field--${d}`,{"navds-text-field--error":u,"navds-text-field--disabled":!!t.disabled,"navds-form-field--disabled":!!t.disabled,"navds-form-field--readonly":E,"navds-text-field--readonly":E})},b.createElement(jn,{htmlFor:t.id,size:d,className:n("navds-form-field__label",{"navds-sr-only":v})},E&&b.createElement(Ci,null),m),!!p&&b.createElement(fn,{className:n("navds-form-field__description",{"navds-sr-only":v}),id:c,size:d,as:"div"},p),b.createElement("input",Object.assign({},In(T,["error","errorId","size"]),t,{ref:r,type:D,readOnly:E,className:n("navds-text-field__input","navds-body-short",`navds-body-short--${d??"medium"}`),size:y})),b.createElement("div",{className:n("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},i&&b.createElement(ls,{size:d,showIcon:!0},e.error)))});var no=e=>e.type==="checkbox",ga=e=>e instanceof Date,Qn=e=>e==null;const Ny=e=>typeof e=="object";var On=e=>!Qn(e)&&!Array.isArray(e)&&Ny(e)&&!ga(e),Ay=e=>On(e)&&e.target?no(e.target)?e.target.checked:e.target.value:e,KA=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Py=(e,r)=>e.has(KA(r)),XA=e=>{const r=e.constructor&&e.constructor.prototype;return On(r)&&r.hasOwnProperty("isPrototypeOf")},zd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function pn(e){let r;const n=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(zd&&(e instanceof Blob||t))&&(n||On(e)))if(r=n?[]:{},!n&&!XA(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=pn(e[a]));else return e;return r}var Vi=e=>/^\w*$/.test(e),dn=e=>e===void 0,Ui=e=>Array.isArray(e)?e.filter(Boolean):[],Kd=e=>Ui(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ie=(e,r,n)=>{if(!r||!On(e))return n;const t=(Vi(r)?[r]:Kd(r)).reduce((a,i)=>Qn(a)?a:a[i],e);return dn(t)||t===e?dn(e[r])?n:e[r]:t},bt=e=>typeof e=="boolean",Ze=(e,r,n)=>{let t=-1;const a=Vi(r)?[r]:Kd(r),i=a.length,u=i-1;for(;++t<i;){const d=a[t];let c=n;if(t!==u){const m=e[d];c=On(m)||Array.isArray(m)?m:isNaN(+a[t+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=c,e=e[d]}};const wi={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},At={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Fr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Xd=b.createContext(null);Xd.displayName="HookFormContext";const Xt=()=>b.useContext(Xd),ZA=e=>{const{children:r,...n}=e;return b.createElement(Xd.Provider,{value:n},r)};var My=(e,r,n,t=!0)=>{const a={defaultValues:r._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const u=i;return r._proxyFormState[u]!==At.all&&(r._proxyFormState[u]=!t||At.all),n&&(n[u]=!0),e[u]}});return a};const Wi=typeof window<"u"?O.useLayoutEffect:O.useEffect;function QA(e){const r=Xt(),{control:n=r.control,disabled:t,name:a,exact:i}=e||{},[u,d]=b.useState(n._formState),c=b.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Wi(()=>n._subscribe({name:a,formState:c.current,exact:i,callback:m=>{!t&&d({...n._formState,...m})}}),[a,t,i]),b.useEffect(()=>{c.current.isValid&&n._setValid(!0)},[n]),b.useMemo(()=>My(u,n,c.current,!1),[u,n])}var ur=e=>typeof e=="string",By=(e,r,n,t,a)=>ur(e)?(t&&r.watch.add(e),ie(n,e,a)):Array.isArray(e)?e.map(i=>(t&&r.watch.add(i),ie(n,i))):(t&&(r.watchAll=!0),n);function JA(e){const r=Xt(),{control:n=r.control,name:t,defaultValue:a,disabled:i,exact:u}=e||{},d=b.useRef(a),[c,m]=b.useState(n._getWatch(t,d.current));return Wi(()=>n._subscribe({name:t,formState:{values:!0},exact:u,callback:g=>!i&&m(By(t,n._names,g.values||n._formValues,!1,d.current))}),[t,n,i,u]),b.useEffect(()=>n._removeUnmounted()),c}function Gi(e){const r=Xt(),{name:n,disabled:t,control:a=r.control,shouldUnregister:i}=e,u=Py(a._names.array,n),d=JA({control:a,name:n,defaultValue:ie(a._formValues,n,ie(a._defaultValues,n,e.defaultValue)),exact:!0}),c=QA({control:a,name:n,exact:!0}),m=b.useRef(e),g=b.useRef(a.register(n,{...e.rules,value:d,...bt(e.disabled)?{disabled:e.disabled}:{}})),p=b.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!ie(c.errors,n)},isDirty:{enumerable:!0,get:()=>!!ie(c.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!ie(c.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!ie(c.validatingFields,n)},error:{enumerable:!0,get:()=>ie(c.errors,n)}}),[c,n]),y=b.useCallback(T=>g.current.onChange({target:{value:Ay(T),name:n},type:wi.CHANGE}),[n]),v=b.useCallback(()=>g.current.onBlur({target:{value:ie(a._formValues,n),name:n},type:wi.BLUR}),[n,a._formValues]),D=b.useCallback(T=>{const x=ie(a._fields,n);x&&T&&(x._f.ref={focus:()=>T.focus&&T.focus(),select:()=>T.select&&T.select(),setCustomValidity:F=>T.setCustomValidity(F),reportValidity:()=>T.reportValidity()})},[a._fields,n]),E=b.useMemo(()=>({name:n,value:d,...bt(t)||c.disabled?{disabled:c.disabled||t}:{},onChange:y,onBlur:v,ref:D}),[n,t,c.disabled,y,v,D,d]);return b.useEffect(()=>{const T=a._options.shouldUnregister||i;a.register(n,{...m.current.rules,...bt(m.current.disabled)?{disabled:m.current.disabled}:{}});const x=(F,w)=>{const M=ie(a._fields,F);M&&M._f&&(M._f.mount=w)};if(x(n,!0),T){const F=pn(ie(a._options.defaultValues,n));Ze(a._defaultValues,n,F),dn(ie(a._formValues,n))&&Ze(a._formValues,n,F)}return!u&&a.register(n),()=>{(u?T&&!a._state.action:T)?a.unregister(n):x(n,!1)}},[n,a,u,i]),b.useEffect(()=>{a._setDisabledField({disabled:t,name:n})},[t,n,a]),b.useMemo(()=>({field:E,formState:c,fieldState:p}),[E,c,p])}var eP=(e,r,n,t,a)=>r?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[t]:a||!0}}:{},ut=e=>Array.isArray(e)?e:[e],Og=()=>{let e=[];return{get observers(){return e},next:a=>{for(const i of e)i.next&&i.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(i=>i!==a)}}),unsubscribe:()=>{e=[]}}},Qu=e=>Qn(e)||!Ny(e);function zr(e,r){if(Qu(e)||Qu(r))return e===r;if(ga(e)&&ga(r))return e.getTime()===r.getTime();const n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(const a of n){const i=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const u=r[a];if(ga(i)&&ga(u)||On(i)&&On(u)||Array.isArray(i)&&Array.isArray(u)?!zr(i,u):i!==u)return!1}}return!0}var Xn=e=>On(e)&&!Object.keys(e).length,Zd=e=>e.type==="file",Vt=e=>typeof e=="function",_i=e=>{if(!zd)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},qy=e=>e.type==="select-multiple",Qd=e=>e.type==="radio",nP=e=>Qd(e)||no(e),Tu=e=>_i(e)&&e.isConnected;function tP(e,r){const n=r.slice(0,-1).length;let t=0;for(;t<n;)e=dn(e)?t++:e[r[t++]];return e}function rP(e){for(const r in e)if(e.hasOwnProperty(r)&&!dn(e[r]))return!1;return!0}function xn(e,r){const n=Array.isArray(r)?r:Vi(r)?[r]:Kd(r),t=n.length===1?e:tP(e,n),a=n.length-1,i=n[a];return t&&delete t[i],a!==0&&(On(t)&&Xn(t)||Array.isArray(t)&&rP(t))&&xn(e,n.slice(0,-1)),e}var jy=e=>{for(const r in e)if(Vt(e[r]))return!0;return!1};function Ti(e,r={}){const n=Array.isArray(e);if(On(e)||n)for(const t in e)Array.isArray(e[t])||On(e[t])&&!jy(e[t])?(r[t]=Array.isArray(e[t])?[]:{},Ti(e[t],r[t])):Qn(e[t])||(r[t]=!0);return r}function Iy(e,r,n){const t=Array.isArray(e);if(On(e)||t)for(const a in e)Array.isArray(e[a])||On(e[a])&&!jy(e[a])?dn(r)||Qu(n[a])?n[a]=Array.isArray(e[a])?Ti(e[a],[]):{...Ti(e[a])}:Iy(e[a],Qn(r)?{}:r[a],n[a]):n[a]=!zr(e[a],r[a]);return n}var Ns=(e,r)=>Iy(e,r,Ti(r));const Dg={value:!1,isValid:!1},xg={value:!0,isValid:!0};var Cy=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!dn(e[0].attributes.value)?dn(e[0].value)||e[0].value===""?xg:{value:e[0].value,isValid:!0}:xg:Dg}return Dg},Ly=(e,{valueAsNumber:r,valueAsDate:n,setValueAs:t})=>dn(e)?e:r?e===""?NaN:e&&+e:n&&ur(e)?new Date(e):t?t(e):e;const Rg={isValid:!1,value:null};var $y=e=>Array.isArray(e)?e.reduce((r,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:r,Rg):Rg;function Fg(e){const r=e.ref;return Zd(r)?r.files:Qd(r)?$y(e.refs).value:qy(r)?[...r.selectedOptions].map(({value:n})=>n):no(r)?Cy(e.refs).value:Ly(dn(r.value)?e.ref.value:r.value,e)}var aP=(e,r,n,t)=>{const a={};for(const i of e){const u=ie(r,i);u&&Ze(a,i,u._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:t}},Si=e=>e instanceof RegExp,As=e=>dn(e)?e:Si(e)?e.source:On(e)?Si(e.value)?e.value.source:e.value:e,za=e=>({isOnSubmit:!e||e===At.onSubmit,isOnBlur:e===At.onBlur,isOnChange:e===At.onChange,isOnAll:e===At.all,isOnTouch:e===At.onTouched});const Ng="AsyncFunction";var sP=e=>!!e&&!!e.validate&&!!(Vt(e.validate)&&e.validate.constructor.name===Ng||On(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===Ng)),oP=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Ju=(e,r,n)=>!n&&(r.watchAll||r.watch.has(e)||[...r.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const Qa=(e,r,n,t)=>{for(const a of n||Object.keys(e)){const i=ie(e,a);if(i){const{_f:u,...d}=i;if(u){if(u.refs&&u.refs[0]&&r(u.refs[0],a)&&!t)return!0;if(u.ref&&r(u.ref,u.name)&&!t)return!0;if(Qa(d,r))break}else if(On(d)&&Qa(d,r))break}}};function Ag(e,r,n){const t=ie(e,n);if(t||Vi(n))return{error:t,name:n};const a=n.split(".");for(;a.length;){const i=a.join("."),u=ie(r,i),d=ie(e,i);if(u&&!Array.isArray(u)&&n!==i)return{name:n};if(d&&d.type)return{name:i,error:d};if(d&&d.root&&d.root.type)return{name:`${i}.root`,error:d.root};a.pop()}return{name:n}}var iP=(e,r,n,t)=>{n(e);const{name:a,...i}=e;return Xn(i)||Object.keys(i).length>=Object.keys(r).length||Object.keys(i).find(u=>r[u]===(!t||At.all))},lP=(e,r,n)=>!e||!r||e===r||ut(e).some(t=>t&&(n?t===r:t.startsWith(r)||r.startsWith(t))),uP=(e,r,n,t,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(r||e):(n?t.isOnBlur:a.isOnBlur)?!e:(n?t.isOnChange:a.isOnChange)?e:!0,dP=(e,r)=>!Ui(ie(e,r)).length&&xn(e,r),Hy=(e,r,n)=>{const t=ut(ie(e,n));return Ze(t,"root",r[n]),Ze(e,n,t),e},li=e=>ur(e);function Pg(e,r,n="validate"){if(li(e)||Array.isArray(e)&&e.every(li)||bt(e)&&!e)return{type:n,message:li(e)?e:"",ref:r}}var Ga=e=>On(e)&&!Si(e)?e:{value:e,message:""},ed=async(e,r,n,t,a,i)=>{const{ref:u,refs:d,required:c,maxLength:m,minLength:g,min:p,max:y,pattern:v,validate:D,name:E,valueAsNumber:T,mount:x}=e._f,F=ie(n,E);if(!x||r.has(E))return{};const w=d?d[0]:u,M=W=>{a&&w.reportValidity&&(w.setCustomValidity(bt(W)?"":W||""),w.reportValidity())},k={},N=Qd(u),R=no(u),A=N||R,j=(T||Zd(u))&&dn(u.value)&&dn(F)||_i(u)&&u.value===""||F===""||Array.isArray(F)&&!F.length,z=eP.bind(null,E,t,k),V=(W,L,U,G=Fr.maxLength,$=Fr.minLength)=>{const J=W?L:U;k[E]={type:W?G:$,message:J,ref:u,...z(W?G:$,J)}};if(i?!Array.isArray(F)||!F.length:c&&(!A&&(j||Qn(F))||bt(F)&&!F||R&&!Cy(d).isValid||N&&!$y(d).isValid)){const{value:W,message:L}=li(c)?{value:!!c,message:c}:Ga(c);if(W&&(k[E]={type:Fr.required,message:L,ref:w,...z(Fr.required,L)},!t))return M(L),k}if(!j&&(!Qn(p)||!Qn(y))){let W,L;const U=Ga(y),G=Ga(p);if(!Qn(F)&&!isNaN(F)){const $=u.valueAsNumber||F&&+F;Qn(U.value)||(W=$>U.value),Qn(G.value)||(L=$<G.value)}else{const $=u.valueAsDate||new Date(F),J=se=>new Date(new Date().toDateString()+" "+se),Y=u.type=="time",re=u.type=="week";ur(U.value)&&F&&(W=Y?J(F)>J(U.value):re?F>U.value:$>new Date(U.value)),ur(G.value)&&F&&(L=Y?J(F)<J(G.value):re?F<G.value:$<new Date(G.value))}if((W||L)&&(V(!!W,U.message,G.message,Fr.max,Fr.min),!t))return M(k[E].message),k}if((m||g)&&!j&&(ur(F)||i&&Array.isArray(F))){const W=Ga(m),L=Ga(g),U=!Qn(W.value)&&F.length>+W.value,G=!Qn(L.value)&&F.length<+L.value;if((U||G)&&(V(U,W.message,L.message),!t))return M(k[E].message),k}if(v&&!j&&ur(F)){const{value:W,message:L}=Ga(v);if(Si(W)&&!F.match(W)&&(k[E]={type:Fr.pattern,message:L,ref:u,...z(Fr.pattern,L)},!t))return M(L),k}if(D){if(Vt(D)){const W=await D(F,n),L=Pg(W,w);if(L&&(k[E]={...L,...z(Fr.validate,L.message)},!t))return M(L.message),k}else if(On(D)){let W={};for(const L in D){if(!Xn(W)&&!t)break;const U=Pg(await D[L](F,n),w,L);U&&(W={...U,...z(L,U.message)},M(U.message),t&&(k[E]=W))}if(!Xn(W)&&(k[E]={ref:w,...W},!t))return k}}return M(!0),k};const cP={mode:At.onSubmit,reValidateMode:At.onChange,shouldFocusError:!0};function fP(e={}){let r={...cP,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:Vt(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1};const t={};let a=On(r.defaultValues)||On(r.values)?pn(r.defaultValues||r.values)||{}:{},i=r.shouldUnregister?{}:pn(a),u={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,m=0;const g={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let p={...g};const y={array:Og(),state:Og()},v=r.criteriaMode===At.all,D=B=>H=>{clearTimeout(m),m=setTimeout(B,H)},E=async B=>{if(!r.disabled&&(g.isValid||p.isValid||B)){const H=r.resolver?Xn((await R()).errors):await j(t,!0);H!==n.isValid&&y.state.next({isValid:H})}},T=(B,H)=>{!r.disabled&&(g.isValidating||g.validatingFields||p.isValidating||p.validatingFields)&&((B||Array.from(d.mount)).forEach(X=>{X&&(H?Ze(n.validatingFields,X,H):xn(n.validatingFields,X))}),y.state.next({validatingFields:n.validatingFields,isValidating:!Xn(n.validatingFields)}))},x=(B,H=[],X,le,oe=!0,ae=!0)=>{if(le&&X&&!r.disabled){if(u.action=!0,ae&&Array.isArray(ie(t,B))){const ye=X(ie(t,B),le.argA,le.argB);oe&&Ze(t,B,ye)}if(ae&&Array.isArray(ie(n.errors,B))){const ye=X(ie(n.errors,B),le.argA,le.argB);oe&&Ze(n.errors,B,ye),dP(n.errors,B)}if((g.touchedFields||p.touchedFields)&&ae&&Array.isArray(ie(n.touchedFields,B))){const ye=X(ie(n.touchedFields,B),le.argA,le.argB);oe&&Ze(n.touchedFields,B,ye)}(g.dirtyFields||p.dirtyFields)&&(n.dirtyFields=Ns(a,i)),y.state.next({name:B,isDirty:V(B,H),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Ze(i,B,H)},F=(B,H)=>{Ze(n.errors,B,H),y.state.next({errors:n.errors})},w=B=>{n.errors=B,y.state.next({errors:n.errors,isValid:!1})},M=(B,H,X,le)=>{const oe=ie(t,B);if(oe){const ae=ie(i,B,dn(X)?ie(a,B):X);dn(ae)||le&&le.defaultChecked||H?Ze(i,B,H?ae:Fg(oe._f)):U(B,ae),u.mount&&E()}},k=(B,H,X,le,oe)=>{let ae=!1,ye=!1;const Ae={name:B};if(!r.disabled){if(!X||le){(g.isDirty||p.isDirty)&&(ye=n.isDirty,n.isDirty=Ae.isDirty=V(),ae=ye!==Ae.isDirty);const qe=zr(ie(a,B),H);ye=!!ie(n.dirtyFields,B),qe?xn(n.dirtyFields,B):Ze(n.dirtyFields,B,!0),Ae.dirtyFields=n.dirtyFields,ae=ae||(g.dirtyFields||p.dirtyFields)&&ye!==!qe}if(X){const qe=ie(n.touchedFields,B);qe||(Ze(n.touchedFields,B,X),Ae.touchedFields=n.touchedFields,ae=ae||(g.touchedFields||p.touchedFields)&&qe!==X)}ae&&oe&&y.state.next(Ae)}return ae?Ae:{}},N=(B,H,X,le)=>{const oe=ie(n.errors,B),ae=(g.isValid||p.isValid)&&bt(H)&&n.isValid!==H;if(r.delayError&&X?(c=D(()=>F(B,X)),c(r.delayError)):(clearTimeout(m),c=null,X?Ze(n.errors,B,X):xn(n.errors,B)),(X?!zr(oe,X):oe)||!Xn(le)||ae){const ye={...le,...ae&&bt(H)?{isValid:H}:{},errors:n.errors,name:B};n={...n,...ye},y.state.next(ye)}},R=async B=>{T(B,!0);const H=await r.resolver(i,r.context,aP(B||d.mount,t,r.criteriaMode,r.shouldUseNativeValidation));return T(B),H},A=async B=>{const{errors:H}=await R(B);if(B)for(const X of B){const le=ie(H,X);le?Ze(n.errors,X,le):xn(n.errors,X)}else n.errors=H;return H},j=async(B,H,X={valid:!0})=>{for(const le in B){const oe=B[le];if(oe){const{_f:ae,...ye}=oe;if(ae){const Ae=d.array.has(ae.name),qe=oe._f&&sP(oe._f);qe&&g.validatingFields&&T([le],!0);const An=await ed(oe,d.disabled,i,v,r.shouldUseNativeValidation&&!H,Ae);if(qe&&g.validatingFields&&T([le]),An[ae.name]&&(X.valid=!1,H))break;!H&&(ie(An,ae.name)?Ae?Hy(n.errors,An,ae.name):Ze(n.errors,ae.name,An[ae.name]):xn(n.errors,ae.name))}!Xn(ye)&&await j(ye,H,X)}}return X.valid},z=()=>{for(const B of d.unMount){const H=ie(t,B);H&&(H._f.refs?H._f.refs.every(X=>!Tu(X)):!Tu(H._f.ref))&&Le(B)}d.unMount=new Set},V=(B,H)=>!r.disabled&&(B&&H&&Ze(i,B,H),!zr(se(),a)),W=(B,H,X)=>By(B,d,{...u.mount?i:dn(H)?a:ur(B)?{[B]:H}:H},X,H),L=B=>Ui(ie(u.mount?i:a,B,r.shouldUnregister?ie(a,B,[]):[])),U=(B,H,X={})=>{const le=ie(t,B);let oe=H;if(le){const ae=le._f;ae&&(!ae.disabled&&Ze(i,B,Ly(H,ae)),oe=_i(ae.ref)&&Qn(H)?"":H,qy(ae.ref)?[...ae.ref.options].forEach(ye=>ye.selected=oe.includes(ye.value)):ae.refs?no(ae.ref)?ae.refs.forEach(ye=>{(!ye.defaultChecked||!ye.disabled)&&(Array.isArray(oe)?ye.checked=!!oe.find(Ae=>Ae===ye.value):ye.checked=oe===ye.value||!!oe)}):ae.refs.forEach(ye=>ye.checked=ye.value===oe):Zd(ae.ref)?ae.ref.value="":(ae.ref.value=oe,ae.ref.type||y.state.next({name:B,values:pn(i)})))}(X.shouldDirty||X.shouldTouch)&&k(B,oe,X.shouldTouch,X.shouldDirty,!0),X.shouldValidate&&re(B)},G=(B,H,X)=>{for(const le in H){if(!H.hasOwnProperty(le))return;const oe=H[le],ae=B+"."+le,ye=ie(t,ae);(d.array.has(B)||On(oe)||ye&&!ye._f)&&!ga(oe)?G(ae,oe,X):U(ae,oe,X)}},$=(B,H,X={})=>{const le=ie(t,B),oe=d.array.has(B),ae=pn(H);Ze(i,B,ae),oe?(y.array.next({name:B,values:pn(i)}),(g.isDirty||g.dirtyFields||p.isDirty||p.dirtyFields)&&X.shouldDirty&&y.state.next({name:B,dirtyFields:Ns(a,i),isDirty:V(B,ae)})):le&&!le._f&&!Qn(ae)?G(B,ae,X):U(B,ae,X),Ju(B,d)&&y.state.next({...n}),y.state.next({name:u.mount?B:void 0,values:pn(i)})},J=async B=>{u.mount=!0;const H=B.target;let X=H.name,le=!0;const oe=ie(t,X),ae=qe=>{le=Number.isNaN(qe)||ga(qe)&&isNaN(qe.getTime())||zr(qe,ie(i,X,qe))},ye=za(r.mode),Ae=za(r.reValidateMode);if(oe){let qe,An;const Qt=H.type?Fg(oe._f):Ay(B),tt=B.type===wi.BLUR||B.type===wi.FOCUS_OUT,Qr=!oP(oe._f)&&!r.resolver&&!ie(n.errors,X)&&!oe._f.deps||uP(tt,ie(n.touchedFields,X),n.isSubmitted,Ae,ye),vr=Ju(X,d,tt);Ze(i,X,Qt),tt?(oe._f.onBlur&&oe._f.onBlur(B),c&&c(0)):oe._f.onChange&&oe._f.onChange(B);const kr=k(X,Qt,tt),Jr=!Xn(kr)||vr;if(!tt&&y.state.next({name:X,type:B.type,values:pn(i)}),Qr)return(g.isValid||p.isValid)&&(r.mode==="onBlur"?tt&&E():tt||E()),Jr&&y.state.next({name:X,...vr?{}:kr});if(!tt&&vr&&y.state.next({...n}),r.resolver){const{errors:br}=await R([X]);if(ae(Qt),le){const ea=Ag(n.errors,t,X),na=Ag(br,t,ea.name||X);qe=na.error,X=na.name,An=Xn(br)}}else T([X],!0),qe=(await ed(oe,d.disabled,i,v,r.shouldUseNativeValidation))[X],T([X]),ae(Qt),le&&(qe?An=!1:(g.isValid||p.isValid)&&(An=await j(t,!0)));le&&(oe._f.deps&&re(oe._f.deps),N(X,An,qe,kr))}},Y=(B,H)=>{if(ie(n.errors,H)&&B.focus)return B.focus(),1},re=async(B,H={})=>{let X,le;const oe=ut(B);if(r.resolver){const ae=await A(dn(B)?B:oe);X=Xn(ae),le=B?!oe.some(ye=>ie(ae,ye)):X}else B?(le=(await Promise.all(oe.map(async ae=>{const ye=ie(t,ae);return await j(ye&&ye._f?{[ae]:ye}:ye)}))).every(Boolean),!(!le&&!n.isValid)&&E()):le=X=await j(t);return y.state.next({...!ur(B)||(g.isValid||p.isValid)&&X!==n.isValid?{}:{name:B},...r.resolver||!B?{isValid:X}:{},errors:n.errors}),H.shouldFocus&&!le&&Qa(t,Y,B?oe:d.mount),le},se=B=>{const H={...u.mount?i:a};return dn(B)?H:ur(B)?ie(H,B):B.map(X=>ie(H,X))},de=(B,H)=>({invalid:!!ie((H||n).errors,B),isDirty:!!ie((H||n).dirtyFields,B),error:ie((H||n).errors,B),isValidating:!!ie(n.validatingFields,B),isTouched:!!ie((H||n).touchedFields,B)}),Te=B=>{B&&ut(B).forEach(H=>xn(n.errors,H)),y.state.next({errors:B?n.errors:{}})},Ee=(B,H,X)=>{const le=(ie(t,B,{_f:{}})._f||{}).ref,oe=ie(n.errors,B)||{},{ref:ae,message:ye,type:Ae,...qe}=oe;Ze(n.errors,B,{...qe,...H,ref:le}),y.state.next({name:B,errors:n.errors,isValid:!1}),X&&X.shouldFocus&&le&&le.focus&&le.focus()},Ge=(B,H)=>Vt(B)?y.state.subscribe({next:X=>B(W(void 0,H),X)}):W(B,H,!0),me=B=>y.state.subscribe({next:H=>{lP(B.name,H.name,B.exact)&&iP(H,B.formState||g,wn,B.reRenderRoot)&&B.callback({values:{...i},...n,...H})}}).unsubscribe,he=B=>(u.mount=!0,p={...p,...B.formState},me({...B,formState:p})),Le=(B,H={})=>{for(const X of B?ut(B):d.mount)d.mount.delete(X),d.array.delete(X),H.keepValue||(xn(t,X),xn(i,X)),!H.keepError&&xn(n.errors,X),!H.keepDirty&&xn(n.dirtyFields,X),!H.keepTouched&&xn(n.touchedFields,X),!H.keepIsValidating&&xn(n.validatingFields,X),!r.shouldUnregister&&!H.keepDefaultValue&&xn(a,X);y.state.next({values:pn(i)}),y.state.next({...n,...H.keepDirty?{isDirty:V()}:{}}),!H.keepIsValid&&E()},Ve=({disabled:B,name:H})=>{(bt(B)&&u.mount||B||d.disabled.has(H))&&(B?d.disabled.add(H):d.disabled.delete(H))},en=(B,H={})=>{let X=ie(t,B);const le=bt(H.disabled)||bt(r.disabled);return Ze(t,B,{...X||{},_f:{...X&&X._f?X._f:{ref:{name:B}},name:B,mount:!0,...H}}),d.mount.add(B),X?Ve({disabled:bt(H.disabled)?H.disabled:r.disabled,name:B}):M(B,!0,H.value),{...le?{disabled:H.disabled||r.disabled}:{},...r.progressive?{required:!!H.required,min:As(H.min),max:As(H.max),minLength:As(H.minLength),maxLength:As(H.maxLength),pattern:As(H.pattern)}:{},name:B,onChange:J,onBlur:J,ref:oe=>{if(oe){en(B,H),X=ie(t,B);const ae=dn(oe.value)&&oe.querySelectorAll&&oe.querySelectorAll("input,select,textarea")[0]||oe,ye=nP(ae),Ae=X._f.refs||[];if(ye?Ae.find(qe=>qe===ae):ae===X._f.ref)return;Ze(t,B,{_f:{...X._f,...ye?{refs:[...Ae.filter(Tu),ae,...Array.isArray(ie(a,B))?[{}]:[]],ref:{type:ae.type,name:B}}:{ref:ae}}}),M(B,!1,void 0,ae)}else X=ie(t,B,{}),X._f&&(X._f.mount=!1),(r.shouldUnregister||H.shouldUnregister)&&!(Py(d.array,B)&&u.action)&&d.unMount.add(B)}}},nn=()=>r.shouldFocusError&&Qa(t,Y,d.mount),on=B=>{bt(B)&&(y.state.next({disabled:B}),Qa(t,(H,X)=>{const le=ie(t,X);le&&(H.disabled=le._f.disabled||B,Array.isArray(le._f.refs)&&le._f.refs.forEach(oe=>{oe.disabled=le._f.disabled||B}))},0,!1))},mn=(B,H)=>async X=>{let le;X&&(X.preventDefault&&X.preventDefault(),X.persist&&X.persist());let oe=pn(i);if(y.state.next({isSubmitting:!0}),r.resolver){const{errors:ae,values:ye}=await R();n.errors=ae,oe=ye}else await j(t);if(d.disabled.size)for(const ae of d.disabled)Ze(oe,ae,void 0);if(xn(n.errors,"root"),Xn(n.errors)){y.state.next({errors:{}});try{await B(oe,X)}catch(ae){le=ae}}else H&&await H({...n.errors},X),nn(),setTimeout(nn);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Xn(n.errors)&&!le,submitCount:n.submitCount+1,errors:n.errors}),le)throw le},Rn=(B,H={})=>{ie(t,B)&&(dn(H.defaultValue)?$(B,pn(ie(a,B))):($(B,H.defaultValue),Ze(a,B,pn(H.defaultValue))),H.keepTouched||xn(n.touchedFields,B),H.keepDirty||(xn(n.dirtyFields,B),n.isDirty=H.defaultValue?V(B,pn(ie(a,B))):V()),H.keepError||(xn(n.errors,B),g.isValid&&E()),y.state.next({...n}))},tn=(B,H={})=>{const X=B?pn(B):a,le=pn(X),oe=Xn(B),ae=oe?a:le;if(H.keepDefaultValues||(a=X),!H.keepValues){if(H.keepDirtyValues){const ye=new Set([...d.mount,...Object.keys(Ns(a,i))]);for(const Ae of Array.from(ye))ie(n.dirtyFields,Ae)?Ze(ae,Ae,ie(i,Ae)):$(Ae,ie(ae,Ae))}else{if(zd&&dn(B))for(const ye of d.mount){const Ae=ie(t,ye);if(Ae&&Ae._f){const qe=Array.isArray(Ae._f.refs)?Ae._f.refs[0]:Ae._f.ref;if(_i(qe)){const An=qe.closest("form");if(An){An.reset();break}}}}for(const ye of d.mount)$(ye,ie(ae,ye))}i=pn(ae),y.array.next({values:{...ae}}),y.state.next({values:{...ae}})}d={mount:H.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!g.isValid||!!H.keepIsValid||!!H.keepDirtyValues,u.watch=!!r.shouldUnregister,y.state.next({submitCount:H.keepSubmitCount?n.submitCount:0,isDirty:oe?!1:H.keepDirty?n.isDirty:!!(H.keepDefaultValues&&!zr(B,a)),isSubmitted:H.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:oe?{}:H.keepDirtyValues?H.keepDefaultValues&&i?Ns(a,i):n.dirtyFields:H.keepDefaultValues&&B?Ns(a,B):H.keepDirty?n.dirtyFields:{},touchedFields:H.keepTouched?n.touchedFields:{},errors:H.keepErrors?n.errors:{},isSubmitSuccessful:H.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Dn=(B,H)=>tn(Vt(B)?B(i):B,H),dt=(B,H={})=>{const X=ie(t,B),le=X&&X._f;if(le){const oe=le.refs?le.refs[0]:le.ref;oe.focus&&(oe.focus(),H.shouldSelect&&Vt(oe.select)&&oe.select())}},wn=B=>{n={...n,...B}},nt={control:{register:en,unregister:Le,getFieldState:de,handleSubmit:mn,setError:Ee,_subscribe:me,_runSchema:R,_focusError:nn,_getWatch:W,_getDirty:V,_setValid:E,_setFieldArray:x,_setDisabledField:Ve,_setErrors:w,_getFieldArray:L,_reset:tn,_resetDefaultValues:()=>Vt(r.defaultValues)&&r.defaultValues().then(B=>{Dn(B,r.resetOptions),y.state.next({isLoading:!1})}),_removeUnmounted:z,_disableForm:on,_subjects:y,_proxyFormState:g,get _fields(){return t},get _formValues(){return i},get _state(){return u},set _state(B){u=B},get _defaultValues(){return a},get _names(){return d},set _names(B){d=B},get _formState(){return n},get _options(){return r},set _options(B){r={...r,...B}}},subscribe:he,trigger:re,register:en,handleSubmit:mn,watch:Ge,setValue:$,getValues:se,reset:Dn,resetField:Rn,clearErrors:Te,unregister:Le,setError:Ee,setFocus:dt,getFieldState:de};return{...nt,formControl:nt}}var Yr=()=>{if(typeof crypto<"u"&&crypto.randomUUID)return crypto.randomUUID();const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const n=(Math.random()*16+e)%16|0;return(r=="x"?n:n&3|8).toString(16)})},Su=(e,r,n={})=>n.shouldFocus||dn(n.shouldFocus)?n.focusName||`${e}.${dn(n.focusIndex)?r:n.focusIndex}.`:"",Eu=(e,r)=>[...e,...ut(r)],Ou=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Du(e,r,n){return[...e.slice(0,r),...ut(n),...e.slice(r)]}var xu=(e,r,n)=>Array.isArray(e)?(dn(e[n])&&(e[n]=void 0),e.splice(n,0,e.splice(r,1)[0]),e):[],Ru=(e,r)=>[...ut(r),...ut(e)];function mP(e,r){let n=0;const t=[...e];for(const a of r)t.splice(a-n,1),n++;return Ui(t).length?t:[]}var Fu=(e,r)=>dn(r)?[]:mP(e,ut(r).sort((n,t)=>n-t)),Nu=(e,r,n)=>{[e[r],e[n]]=[e[n],e[r]]},Mg=(e,r,n)=>(e[r]=n,e);function gP(e){const r=Xt(),{control:n=r.control,name:t,keyName:a="id",shouldUnregister:i,rules:u}=e,[d,c]=b.useState(n._getFieldArray(t)),m=b.useRef(n._getFieldArray(t).map(Yr)),g=b.useRef(d),p=b.useRef(t),y=b.useRef(!1);p.current=t,g.current=d,n._names.array.add(t),u&&n.register(t,u),Wi(()=>n._subjects.array.subscribe({next:({values:N,name:R})=>{if(R===p.current||!R){const A=ie(N,p.current);Array.isArray(A)&&(c(A),m.current=A.map(Yr))}}}).unsubscribe,[n]);const v=b.useCallback(N=>{y.current=!0,n._setFieldArray(t,N)},[n,t]),D=(N,R)=>{const A=ut(pn(N)),j=Eu(n._getFieldArray(t),A);n._names.focus=Su(t,j.length-1,R),m.current=Eu(m.current,A.map(Yr)),v(j),c(j),n._setFieldArray(t,j,Eu,{argA:Ou(N)})},E=(N,R)=>{const A=ut(pn(N)),j=Ru(n._getFieldArray(t),A);n._names.focus=Su(t,0,R),m.current=Ru(m.current,A.map(Yr)),v(j),c(j),n._setFieldArray(t,j,Ru,{argA:Ou(N)})},T=N=>{const R=Fu(n._getFieldArray(t),N);m.current=Fu(m.current,N),v(R),c(R),!Array.isArray(ie(n._fields,t))&&Ze(n._fields,t,void 0),n._setFieldArray(t,R,Fu,{argA:N})},x=(N,R,A)=>{const j=ut(pn(R)),z=Du(n._getFieldArray(t),N,j);n._names.focus=Su(t,N,A),m.current=Du(m.current,N,j.map(Yr)),v(z),c(z),n._setFieldArray(t,z,Du,{argA:N,argB:Ou(R)})},F=(N,R)=>{const A=n._getFieldArray(t);Nu(A,N,R),Nu(m.current,N,R),v(A),c(A),n._setFieldArray(t,A,Nu,{argA:N,argB:R},!1)},w=(N,R)=>{const A=n._getFieldArray(t);xu(A,N,R),xu(m.current,N,R),v(A),c(A),n._setFieldArray(t,A,xu,{argA:N,argB:R},!1)},M=(N,R)=>{const A=pn(R),j=Mg(n._getFieldArray(t),N,A);m.current=[...j].map((z,V)=>!z||V===N?Yr():m.current[V]),v(j),c([...j]),n._setFieldArray(t,j,Mg,{argA:N,argB:A},!0,!1)},k=N=>{const R=ut(pn(N));m.current=R.map(Yr),v([...R]),c([...R]),n._setFieldArray(t,[...R],A=>A,{},!0,!1)};return b.useEffect(()=>{if(n._state.action=!1,Ju(t,n._names)&&n._subjects.state.next({...n._formState}),y.current&&(!za(n._options.mode).isOnSubmit||n._formState.isSubmitted)&&!za(n._options.reValidateMode).isOnSubmit)if(n._options.resolver)n._runSchema([t]).then(N=>{const R=ie(N.errors,t),A=ie(n._formState.errors,t);(A?!R&&A.type||R&&(A.type!==R.type||A.message!==R.message):R&&R.type)&&(R?Ze(n._formState.errors,t,R):xn(n._formState.errors,t),n._subjects.state.next({errors:n._formState.errors}))});else{const N=ie(n._fields,t);N&&N._f&&!(za(n._options.reValidateMode).isOnSubmit&&za(n._options.mode).isOnSubmit)&&ed(N,n._names.disabled,n._formValues,n._options.criteriaMode===At.all,n._options.shouldUseNativeValidation,!0).then(R=>!Xn(R)&&n._subjects.state.next({errors:Hy(n._formState.errors,R,t)}))}n._subjects.state.next({name:t,values:pn(n._formValues)}),n._names.focus&&Qa(n._fields,(N,R)=>{if(n._names.focus&&R.startsWith(n._names.focus)&&N.focus)return N.focus(),1}),n._names.focus="",n._setValid(),y.current=!1},[d,t,n]),b.useEffect(()=>(!ie(n._formValues,t)&&n._setFieldArray(t),()=>{const N=(R,A)=>{const j=ie(n._fields,R);j&&j._f&&(j._f.mount=A)};n._options.shouldUnregister||i?n.unregister(t):N(t,!1)}),[t,n,a,i]),{swap:b.useCallback(F,[v,t,n]),move:b.useCallback(w,[v,t,n]),prepend:b.useCallback(E,[v,t,n]),append:b.useCallback(D,[v,t,n]),remove:b.useCallback(T,[v,t,n]),insert:b.useCallback(x,[v,t,n]),update:b.useCallback(M,[v,t,n]),replace:b.useCallback(k,[v,t,n]),fields:b.useMemo(()=>d.map((N,R)=>({...N,[a]:m.current[R]||Yr()})),[d,a])}}function pP(e={}){const r=b.useRef(void 0),n=b.useRef(void 0),[t,a]=b.useState({isDirty:!1,isValidating:!1,isLoading:Vt(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Vt(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:t},e.defaultValues&&!Vt(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:u,...d}=fP(e);r.current={...d,formState:t}}const i=r.current.control;return i._options=e,Wi(()=>{const u=i._subscribe({formState:i._proxyFormState,callback:()=>a({...i._formState}),reRenderRoot:!0});return a(d=>({...d,isReady:!0})),i._formState.isReady=!0,u},[i]),b.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),b.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),b.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),b.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),b.useEffect(()=>{if(i._proxyFormState.isDirty){const u=i._getDirty();u!==t.isDirty&&i._subjects.state.next({isDirty:u})}},[i,t.isDirty]),b.useEffect(()=>{e.values&&!zr(e.values,n.current)?(i._reset(e.values,i._options.resetOptions),n.current=e.values,a(u=>({...u}))):i._resetDefaultValues()},[i,e.values]),b.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),r.current.formState=My(t,i),r.current}function hP(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bg={exports:{}},Ps={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function yP(){if(qg)return Ps;qg=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var u=null;if(i!==void 0&&(u=""+i),a.key!==void 0&&(u=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:u,ref:a!==void 0?a:null,props:i}}return Ps.Fragment=r,Ps.jsx=n,Ps.jsxs=n,Ps}var jg;function vP(){return jg||(jg=1,Bg.exports=yP()),Bg.exports}var qn=vP();const kP=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:qn.jsx(_h,{variant:"warning",size:"small",children:qn.jsx(Bt,{gap:"2",children:b.Children.map(e,r=>qn.jsx(fn,{size:"small",children:r},QT(r)?r.key:r))})}),to={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};_t(to);const Ei="#B7B1A9",Vy=4,bP=(e,r,n)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${Ei};
    border-radius: ${Vy}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${n}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${Ei};
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
`,wP=(e,r,n)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${Ei};
    border-radius: ${Vy}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${n}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${Ei};
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
`,_P=(e,r,n,t)=>r?wP(e,n,t):bP(e,n,t),TP=(e,r,n)=>n?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,SP=({children:e,alignOffset:r=0,alignLeft:n=!1,marginTop:t=0,marginLeft:a=0,hideBorder:i=!1})=>qn.jsxs(qn.Fragment,{children:[qn.jsx("style",{dangerouslySetInnerHTML:{__html:_P(r,n,t,a)}}),qn.jsx("div",{className:TP(r,n,i),children:e})]});var Ig={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Cg;function EP(){return Cg||(Cg=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var i="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(i=a(i,t.call(this,d)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var u="";for(var d in i)r.call(i,d)&&i[d]&&(u=a(u,this&&this[d]||d));return u}function a(i,u){return u?i?i+" "+u:i+u:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Ig)),Ig.exports}var OP=EP();const Jd=hP(OP),DP="_borderbox_1vkvn_1",xP="_error_1vkvn_5",RP="_warning_1vkvn_8",FP={borderbox:DP,error:xP,warning:RP},NP=Jd.bind(FP),AP=({error:e=!1,className:r,children:n})=>qn.jsx(by,{padding:"4",className:NP("borderbox",{error:e},r),children:n}),PP="_aksjonspunkt_kn1hn_1",MP="_erAksjonspunktApent_kn1hn_4",BP="_erIkkeGodkjentAvBeslutter_kn1hn_8",qP={aksjonspunkt:PP,erAksjonspunktApent:MP,erIkkeGodkjentAvBeslutter:BP};Jd.bind(qP);const jP=({dateString:e,year:r,month:n,day:t})=>qn.jsx(qn.Fragment,{children:dr(e,{year:r,month:n,day:t})});_t(to);_t(to);const IP=({withoutBorder:e,error:r,children:n,className:t})=>e?n:qn.jsx(AP,{error:r,className:t,children:n}),nd=({merknaderFraBeslutter:e,title:r,children:n,withoutBorder:t=!1,className:a=""})=>{const i=!!(e&&e.notAccepted);return qn.jsxs(IP,{withoutBorder:t&&!i,error:i,className:a,children:[r&&qn.jsxs(qn.Fragment,{children:[qn.jsx(jn,{size:"small",children:r}),qn.jsx("div",{style:{marginBottom:"20px"}})]}),n]})},CP="_divider_1t980_1",LP="_dividerParagraf_1t980_8",$P="_leftPanel_1t980_11",HP="_rightPanel_1t980_14",VP={divider:CP,dividerParagraf:LP,leftPanel:$P,rightPanel:HP};Jd.bind(VP);const Uy=()=>qn.jsx("span",{"data-testid":"editedIcon",children:qn.jsx(MS,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});_t(to);_t(to);function UP(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lg={exports:{}},Ms={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function WP(){if($g)return Ms;$g=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var u=null;if(i!==void 0&&(u=""+i),a.key!==void 0&&(u=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:u,ref:a!==void 0?a:null,props:i}}return Ms.Fragment=r,Ms.jsx=n,Ms.jsxs=n,Ms}var Hg;function GP(){return Hg||(Hg=1,Lg.exports=WP()),Lg.exports}var Ne=GP();const Yi=e=>e.reduce((r,n,t)=>({...r,[t]:a=>n(a)||!0}),{}),zi=(e,r)=>{const n=r.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e);return n==null?void 0:n.message};var td={exports:{}},YP=td.exports,Vg;function zP(){return Vg||(Vg=1,function(e,r){(function(n,t){e.exports=t()})(YP,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,u=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,c={},m=function(T){return(T=+T)+(T>68?1900:2e3)},g=function(T){return function(x){this[T]=+x}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(T){(this.zone||(this.zone={})).offset=function(x){if(!x||x==="Z")return 0;var F=x.match(/([+-]|\d\d)/g),w=60*F[1]+(+F[2]||0);return w===0?0:F[0]==="+"?-w:w}(T)}],y=function(T){var x=c[T];return x&&(x.indexOf?x:x.s.concat(x.f))},v=function(T,x){var F,w=c.meridiem;if(w){for(var M=1;M<=24;M+=1)if(T.indexOf(w(M,0,x))>-1){F=M>12;break}}else F=T===(x?"pm":"PM");return F},D={A:[d,function(T){this.afternoon=v(T,!1)}],a:[d,function(T){this.afternoon=v(T,!0)}],Q:[a,function(T){this.month=3*(T-1)+1}],S:[a,function(T){this.milliseconds=100*+T}],SS:[i,function(T){this.milliseconds=10*+T}],SSS:[/\d{3}/,function(T){this.milliseconds=+T}],s:[u,g("seconds")],ss:[u,g("seconds")],m:[u,g("minutes")],mm:[u,g("minutes")],H:[u,g("hours")],h:[u,g("hours")],HH:[u,g("hours")],hh:[u,g("hours")],D:[u,g("day")],DD:[i,g("day")],Do:[d,function(T){var x=c.ordinal,F=T.match(/\d+/);if(this.day=F[0],x)for(var w=1;w<=31;w+=1)x(w).replace(/\[|\]/g,"")===T&&(this.day=w)}],w:[u,g("week")],ww:[i,g("week")],M:[u,g("month")],MM:[i,g("month")],MMM:[d,function(T){var x=y("months"),F=(y("monthsShort")||x.map(function(w){return w.slice(0,3)})).indexOf(T)+1;if(F<1)throw new Error;this.month=F%12||F}],MMMM:[d,function(T){var x=y("months").indexOf(T)+1;if(x<1)throw new Error;this.month=x%12||x}],Y:[/[+-]?\d+/,g("year")],YY:[i,function(T){this.year=m(T)}],YYYY:[/\d{4}/,g("year")],Z:p,ZZ:p};function E(T){var x,F;x=T,F=c&&c.formats;for(var w=(T=x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(z,V,W){var L=W&&W.toUpperCase();return V||F[W]||n[W]||F[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(U,G,$){return G||$.slice(1)})})).match(t),M=w.length,k=0;k<M;k+=1){var N=w[k],R=D[N],A=R&&R[0],j=R&&R[1];w[k]=j?{regex:A,parser:j}:N.replace(/^\[|\]$/g,"")}return function(z){for(var V={},W=0,L=0;W<M;W+=1){var U=w[W];if(typeof U=="string")L+=U.length;else{var G=U.regex,$=U.parser,J=z.slice(L),Y=G.exec(J)[0];$.call(V,Y),z=z.replace(Y,"")}}return function(re){var se=re.afternoon;if(se!==void 0){var de=re.hours;se?de<12&&(re.hours+=12):de===12&&(re.hours=0),delete re.afternoon}}(V),V}}return function(T,x,F){F.p.customParseFormat=!0,T&&T.parseTwoDigitYear&&(m=T.parseTwoDigitYear);var w=x.prototype,M=w.parse;w.parse=function(k){var N=k.date,R=k.utc,A=k.args;this.$u=R;var j=A[1];if(typeof j=="string"){var z=A[2]===!0,V=A[3]===!0,W=z||V,L=A[2];V&&(L=A[2]),c=this.$locale(),!z&&L&&(c=F.Ls[L]),this.$d=function(J,Y,re,se){try{if(["x","X"].indexOf(Y)>-1)return new Date((Y==="X"?1e3:1)*J);var de=E(Y)(J),Te=de.year,Ee=de.month,Ge=de.day,me=de.hours,he=de.minutes,Le=de.seconds,Ve=de.milliseconds,en=de.zone,nn=de.week,on=new Date,mn=Ge||(Te||Ee?1:on.getDate()),Rn=Te||on.getFullYear(),tn=0;Te&&!Ee||(tn=Ee>0?Ee-1:on.getMonth());var Dn,dt=me||0,wn=he||0,ct=Le||0,nt=Ve||0;return en?new Date(Date.UTC(Rn,tn,mn,dt,wn,ct,nt+60*en.offset*1e3)):re?new Date(Date.UTC(Rn,tn,mn,dt,wn,ct,nt)):(Dn=new Date(Rn,tn,mn,dt,wn,ct,nt),nn&&(Dn=se(Dn).week(nn).toDate()),Dn)}catch{return new Date("")}}(N,j,R,F),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),W&&N!=this.format(j)&&(this.$d=new Date("")),c={}}else if(j instanceof Array)for(var U=j.length,G=1;G<=U;G+=1){A[1]=j[G-1];var $=F.apply(this,A);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}G===U&&(this.$d=new Date(""))}else M.call(this,k)}}})}(td)),td.exports}var KP=zP();const XP=UP(KP),ZP="_textarea_1snk6_1",QP="_readOnlyField_1snk6_7",Ug={textarea:ZP,readOnlyField:QP},JP=e=>e!=null&&e!=="",ec=({label:e,value:r,isEdited:n=!1,type:t,hideLabel:a,size:i})=>JP(r)?Ne.jsxs(Bt,{gap:"1",children:[e&&!a&&Ne.jsx(jn,{size:i,children:e}),Ne.jsxs(zt,{gap:"2",align:"center",wrap:!1,children:[Ne.jsx(zp,{className:t==="textarea"?Ug.textarea:Ug.readOnlyField,size:i,children:r}),n&&Ne.jsx(Uy,{})]})]}):null;lt.extend(XP);const Oi=({name:e,label:r,description:n,validate:t=[],hideLabel:a=!1,disabled:i=!1,isReadOnly:u=!1,onChange:d,disabledDays:c,isEdited:m,defaultMonth:g,fromDate:p,toDate:y,size:v="small"})=>{const{formState:{errors:D}}=Xt(),{field:E}=Gi({name:e,rules:{validate:O.useMemo(()=>Yi(t),[t])}}),T=E.value?lt(E.value,Ha,!0).format(Is):"",[x,F]=O.useState(T),{datepickerProps:w,inputProps:M}=aA({onDateChange:R=>{if(R!==void 0){const A=lt(R).format(Ha);d&&d(A),E.onChange(A),F(lt(A,Ha,!0).format(Is))}},defaultSelected:E.value?lt(E.value,Ha,!0).toDate():void 0,defaultMonth:g||(!E.value&&y?y:void 0),disabled:c}),k=O.useCallback(R=>{const A=lt(R.target.value,Is,!0).format(Ha),j=A!=="Invalid Date";F(R.target.value),d&&d(j?A:R.target.value),E.onChange(j?A:R.target.value)},[F,d,E]);if(u)return Ne.jsx(ec,{label:r,value:E.value?lt(E.value,Ha,!0).format(Is):void 0,isEdited:m,hideLabel:a,size:v});const N={...w,fromDate:p,toDate:y,dropdownCaption:p&&y?!0:void 0};return Ne.jsx(bi,{...N,children:Ne.jsx(bi.Input,{...M,hideLabel:a,onChange:k,value:x,size:v,label:r,description:n,disabled:i,error:zi(D,e)})})},eM=({name:e,label:r,validate:n=[],readOnly:t=!1,type:a,shouldValidateOnBlur:i=!1,onBlur:u,onChange:d,description:c,autoFocus:m,parse:g=M=>M,format:p=M=>M,normalizeOnBlur:y,isEdited:v,maxLength:D,autoComplete:E=!1,disabled:T,className:x,hideLabel:F,...w})=>{const{formState:{errors:M},trigger:k}=Xt(),{field:N}=Gi({name:e,rules:{validate:O.useMemo(()=>Yi(n),[n])}});return t?Ne.jsx(ec,{label:r,value:N.value,isEdited:v,hideLabel:F,size:w.size}):Ne.jsx(zA,{size:"small",hideLabel:F,description:c,label:r,error:zi(M,e),...N,value:N.value?p(N.value):"",autoFocus:m,autoComplete:E?void 0:"off",maxLength:D,disabled:T,type:a,className:x,onChange:R=>{const A=R.currentTarget.value?g(R.currentTarget.value):null;return d&&d(A),N.onChange(A)},onBlur:async R=>{var A,j,z,V;if(N.onBlur(),i){const W=await k();u&&W&&u((A=R==null?void 0:R.target)==null?void 0:A.value)}else u&&u((j=R==null?void 0:R.target)==null?void 0:j.value);y&&N.onChange((z=R==null?void 0:R.target)!=null&&z.value?y(g((V=R==null?void 0:R.target)==null?void 0:V.value)):null)},...w})},nM="_hideRadioLabels_1u3xf_1",tM={hideRadioLabels:nM},rM=({label:e,description:r,name:n,validate:t=[],radios:a,onChange:i,disabled:u=!1,isReadOnly:d=!1,isHorizontal:c=!1,parse:m=E=>E,isTrueOrFalseSelection:g=!1,hideLegend:p=!1,hideRadioLabels:y=!1,isEdited:v=!1,size:D="small"})=>{const{formState:{errors:E}}=Xt(),{field:T}=Gi({name:n,rules:{validate:O.useMemo(()=>Yi(t),[t])}}),x=g?w=>w==="true":m,F=Ne.jsxs(zt,{justify:"center",gap:"2",children:[e,d&&v&&Ne.jsx(Uy,{})]});return Ne.jsxs(qA,{name:n,value:T.value!==void 0?T.value:null,onChange:w=>{i&&i(w),T.onChange(w)},size:D,legend:F,description:r,error:zi(E,n),className:y?tM.hideRadioLabels:"",hideLegend:p,children:[!c&&a.map(w=>Ne.jsxs(O.Fragment,{children:[Ne.jsx(wg,{size:D,value:x(w.value),disabled:w.disabled||u||d,children:w.label}),T.value===x(w.value)&&w.element]},w.value)),c&&Ne.jsxs(Ne.Fragment,{children:[Ne.jsx(zt,{gap:"4",children:a.map(w=>Ne.jsx(wg,{size:D,value:x(w.value),disabled:w.disabled||u||d,children:w.label},w.value))}),a.filter(w=>T.value===x(w.value)).map(w=>Ne.jsx(O.Fragment,{children:w.element},w.value))]})]})},aM="_textAreaFieldWithBadges_bdz0b_1",sM="_etikettWrapper_bdz0b_4",Wg={textAreaFieldWithBadges:aM,etikettWrapper:sM},oM=({name:e,label:r,readOnly:n,maxLength:t,badges:a,validate:i=[],parse:u=y=>y,className:d,description:c,isEdited:m,size:g="small",...p})=>{const{formState:{errors:y}}=Xt(),{field:v}=Gi({name:e,rules:{validate:O.useMemo(()=>Yi(i),[i])}});return n?Ne.jsx(ec,{size:g,label:r,value:v.value,type:"textarea",isEdited:m,hideLabel:p.hideLabel}):Ne.jsxs("div",{className:a?Wg.textAreaFieldWithBadges:null,children:[a&&Ne.jsx("div",{className:Wg.etikettWrapper,children:a.map(({type:D,titleText:E})=>Ne.jsx(Xu,{variant:D,size:"small",children:E},E))}),Ne.jsx(GA,{size:g,label:r,description:c,className:d,autoComplete:"off",...v,onChange:D=>v.onChange(D.currentTarget.value!==""?u(D.currentTarget.value):null),value:v.value?v.value:"",error:zi(y,e),maxLength:t,...p})]})},iM=({formMethods:e,onSubmit:r,children:n,className:t,setDataOnUnmount:a})=>{const{handleSubmit:i,getValues:u}=e;return O.useEffect(()=>()=>{a&&a(u())},[]),Ne.jsx(ZA,{...e,children:Ne.jsx("form",{className:t,onSubmit:r?i(d=>r(d)):void 0,children:n})})},lM="_addCircleIcon_bm9jq_1",uM="_imageText_bm9jq_2",dM="_addPeriode_bm9jq_7",Au={addCircleIcon:lM,imageText:uM,addPeriode:dM};function Gg(e,r){return()=>{e(r)}}function cM(e,r){return({key:n})=>{n==="Enter"&&e(r)}}const fM=(e,r)=>n=>{if(e>0)return Ne.jsx(Yt,{className:n,icon:Ne.jsx(Us,{"aria-hidden":!0}),type:"button",onClick:()=>{r(e)}})},mM=({fields:e,readOnly:r=!0,titleText:n,bodyText:t,emptyPeriodTemplate:a={periodeFom:"",periodeTom:""},shouldShowAddButton:i=!0,createAddButtonInsteadOfImageLink:u=!1,children:d,remove:c,append:m})=>Ne.jsxs(Dy,{legend:n,children:[e.map((g,p)=>d(g,p,fM(p,c))),i&&Ne.jsxs(Ne.Fragment,{children:[!u&&!r&&Ne.jsxs("div",{onClick:Gg(m,a),onKeyDown:cM(m,a),className:Au.addPeriode,role:"button",tabIndex:0,children:[Ne.jsx($m,{className:Au.addCircleIcon,title:t}),Ne.jsx(Ni,{className:Au.imageText,children:t})]}),u&&!r&&Ne.jsx(Yt,{icon:Ne.jsx($m,{"aria-hidden":!0}),type:"button",onClick:Gg(m,a),children:t}),Ne.jsx("div",{style:{marginBottom:"16px"}})]})]});function Wy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rd={exports:{}},gM=rd.exports,Yg;function pM(){return Yg||(Yg=1,function(e,r){(function(n,t){e.exports=t()})(gM,function(){return function(n,t){t.prototype.isSameOrAfter=function(a,i){return this.isSame(a,i)||this.isAfter(a,i)}}})}(rd)),rd.exports}var hM=pM();const yM=Wy(hM);var ad={exports:{}},vM=ad.exports,zg;function kM(){return zg||(zg=1,function(e,r){(function(n,t){e.exports=t()})(vM,function(){return function(n,t){t.prototype.isSameOrBefore=function(a,i){return this.isSame(a,i)||this.isBefore(a,i)}}})}(ad)),ad.exports}var bM=kM();const wM=Wy(bM),_M="Dato må være før eller lik {limit}",TM="Dato må være etter eller lik {limit}",SM="Perioder kan ikke overlappe i tid",EM="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",OM="Dato må være lik {value}",DM="Dato må skrives slik: dd.mm.åååå",xM="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",RM="Tallet kan ikke inneholde mer enn to desimaler",FM="Tallet kan ikke ha desimaler",NM="Feltet kan kun inneholde tall",AM="Ugyldig fødselsnummer",PM="Feltet må være et fødselsnummer (11 siffer)",MM="Ugyldig organisasjonsnummer.",BM="Ugyldig organisasjonsnummer eller fødselsnummer",qM="Startdato må være før eller lik sluttdato",jM="Periode er utenfor opptjeningsperioden",IM="Ugyldig saksnummer eller fødselsnummer",CM="Feltet inneholder ugyldige tegn: {text}",LM="Feltet inneholder en ugyldig verdi: {value}",$M="Feltet kan ikke inneholde mellomrom",HM="Feltet må fylles ut",VM="Du kan skrive maksimalt {length} tegn",UM="Du må skrive minst {length} tegn",WM="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",GM="Feltet må være mindre eller lik {length}",YM="Feltet må være større eller lik {length}",zM="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",KM={DateNotBeforeOrEqual:_M,DateNotAfterOrEqual:TM,DateRangesOverlapping:SM,DateRangesOverlappingPeriodTypes:EM,DatesNotEqual:OM,InvalidDate:DM,InvalidDatesInPeriod:xM,InvalidDecimal:RM,InvalidInteger:FM,InvalidNumber:NM,InvalidFodselsnr:AM,InvalidFodselsnrFormat:PM,InvalidOrgnr:MM,InvalidOrgnrOrFodselsnr:BM,InvalidPeriod:qM,InvalidPeriodRange:jM,InvalidSaksnrOrFodselsnrFormat:IM,InvalidText:CM,InvalidValue:LM,IllegalWhiteSpace:$M,IsRequired:HM,MaxLength:VM,MinLength:UM,MaxLengthOrFodselsnr:WM,MaxValue:GM,MinValue:YM,SammeFodselsnrSomSoker:zM},{formatMessage:yr}=_t(KM),XM=e=>yr({id:"DateNotBeforeOrEqual"},{limit:e}),ZM=()=>yr({id:"InvalidDate"}),QM=e=>yr({id:"InvalidInteger"},{text:e}),JM=e=>yr({id:"InvalidNumber"},{text:e}),eB=e=>yr({id:"InvalidText"},{text:e}),nB=()=>yr({id:"IsRequired"}),tB=e=>yr({id:"MaxLength"},{length:e}),rB=e=>yr({id:"MinLength"},{length:e}),aB=e=>yr({id:"MaxValue"},{length:e}),sB=e=>yr({id:"MinValue"},{length:e}),oB=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,iB=/^\d+([,.]\d+)?$/,lB=/^\s*\d+\s*$/,uB=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,dB=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Oa=e=>e==null||e.toString().trim().length===0,cB=()=>lt().startOf("day");lt.extend(yM);lt.extend(wM);const Ja=e=>Oa(e)?nB():void 0,fB=e=>r=>Oa(r)||r.toString().trim().length>=e?null:rB(e),mB=e=>r=>Oa(r)||r.toString().trim().length<=e?null:tB(e),gB=e=>r=>r>=e?null:sB(e),pB=e=>r=>r<=e?null:aB(e),hB=e=>Oa(e)||iB.test(e.toString())?null:JM(e.toString()),yB=e=>Oa(e)||lB.test(e.toString())?null:QM(e.toString()),vB=e=>hB(e)||yB(e),Di=(e="")=>Oa(e)||oB.test(e)?null:ZM(),kB=e=>r=>{const n=lt(e).endOf("day");return Oa(r)||lt(r).isSameOrBefore(n)?null:XM(n.format(Is))},Kg=e=>kB(cB())(e),bB=e=>{if(!uB.test(e)){const r=e.replace(dB,"");return eB(r.replace(/[\t]/g,"Tabulatortegn"))}return null},wB=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const r=document.createAttribute("tabindex");r.value="-1";const n=e[0];n.setAttributeNode(r),document.activeElement.blur(),n.focus()}},300)},ro={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Pu=_t(ro),_B=fB(3),TB=mB(1500),qr=({isReadOnly:e,isSubmittable:r,hasBegrunnelse:n,label:t,hasReadOnlyLabel:a=!1,hasVurderingText:i=!1,name:u="begrunnelse"})=>{const d=i?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",c=()=>e?a?Pu.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":t??Pu.formatMessage({id:d});return Q.jsx(Fi,{value:Pu,children:(r||n)&&Q.jsx(oM,{name:u,label:c(),validate:[Ja,_B,TB,bB],maxLength:1500,readOnly:e})})},SB=e=>{var r;return e&&Array.isArray(e)?((r=e[0])==null?void 0:r.begrunnelse)??"":e&&!Array.isArray(e)&&e.begrunnelse?e.begrunnelse:""};qr.initialValues=e=>({begrunnelse:JT(SB(e)??void 0)});qr.transformValues=e=>({begrunnelse:oS(e.begrunnelse)});qr.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const EB=_t(ro),OB=(e,r,n)=>!n||r?!0:!e,Gy=({isReadOnly:e,isSubmittable:r,buttonText:n,onClick:t,isSubmitting:a,isDirty:i})=>Q.jsx(Fi,{value:EB,children:!e&&Q.jsx("div",{children:Q.jsxs(Yt,{size:"small",variant:"primary",loading:a,disabled:OB(i,a,r),onClick:t||wB,type:t?"button":"submit",children:[!!n&&n,!n&&Q.jsx(yn,{id:"SubmitButton.ConfirmInformation"})]})})});Gy.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};_t(ro);const Yy=e=>e!=null,Mu=(e,r)=>Yy(r)&&e!==r;var Ls={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var DB=Ls.exports,Xg;function xB(){return Xg||(Xg=1,function(e,r){(function(){var n,t="4.17.21",a=200,i="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",d="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,g="__lodash_placeholder__",p=1,y=2,v=4,D=1,E=2,T=1,x=2,F=4,w=8,M=16,k=32,N=64,R=128,A=256,j=512,z=30,V="...",W=800,L=16,U=1,G=2,$=3,J=1/0,Y=9007199254740991,re=17976931348623157e292,se=NaN,de=4294967295,Te=de-1,Ee=de>>>1,Ge=[["ary",R],["bind",T],["bindKey",x],["curry",w],["curryRight",M],["flip",j],["partial",k],["partialRight",N],["rearg",A]],me="[object Arguments]",he="[object Array]",Le="[object AsyncFunction]",Ve="[object Boolean]",en="[object Date]",nn="[object DOMException]",on="[object Error]",mn="[object Function]",Rn="[object GeneratorFunction]",tn="[object Map]",Dn="[object Number]",dt="[object Null]",wn="[object Object]",ct="[object Promise]",nt="[object Proxy]",B="[object RegExp]",H="[object Set]",X="[object String]",le="[object Symbol]",oe="[object Undefined]",ae="[object WeakMap]",ye="[object WeakSet]",Ae="[object ArrayBuffer]",qe="[object DataView]",An="[object Float32Array]",Qt="[object Float64Array]",tt="[object Int8Array]",Qr="[object Int16Array]",vr="[object Int32Array]",kr="[object Uint8Array]",Jr="[object Uint8ClampedArray]",br="[object Uint16Array]",ea="[object Uint32Array]",na=/\b__p \+= '';/g,Re=/\b(__p \+=) '' \+/g,an=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ke=/&(?:amp|lt|gt|quot|#39);/g,It=/[&<>"']/g,ft=RegExp(Ke.source),Da=RegExp(It.source),Pn=/<%-([\s\S]+?)%>/g,Tt=/<%([\s\S]+?)%>/g,$e=/<%=([\s\S]+?)%>/g,Qi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ji=/^\w*$/,el=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ta=/[\\^$.*+?()[\]{}|]/g,gs=RegExp(ta.source),nl=/^\s+/,Dv=/\s/,xv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Rv=/\{\n\/\* \[wrapped with (.+)\] \*/,Fv=/,? & /,Nv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Av=/[()=,{}\[\]\/\s]/,Pv=/\\(\\)?/g,Mv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ic=/\w*$/,Bv=/^[-+]0x[0-9a-f]+$/i,qv=/^0b[01]+$/i,jv=/^\[object .+?Constructor\]$/,Iv=/^0o[0-7]+$/i,Cv=/^(?:0|[1-9]\d*)$/,Lv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lo=/($^)/,$v=/['\n\r\u2028\u2029\\]/g,uo="\\ud800-\\udfff",Hv="\\u0300-\\u036f",Vv="\\ufe20-\\ufe2f",Uv="\\u20d0-\\u20ff",lc=Hv+Vv+Uv,uc="\\u2700-\\u27bf",dc="a-z\\xdf-\\xf6\\xf8-\\xff",Wv="\\xac\\xb1\\xd7\\xf7",Gv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Yv="\\u2000-\\u206f",zv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",cc="A-Z\\xc0-\\xd6\\xd8-\\xde",fc="\\ufe0e\\ufe0f",mc=Wv+Gv+Yv+zv,tl="['’]",Kv="["+uo+"]",gc="["+mc+"]",co="["+lc+"]",pc="\\d+",Xv="["+uc+"]",hc="["+dc+"]",yc="[^"+uo+mc+pc+uc+dc+cc+"]",rl="\\ud83c[\\udffb-\\udfff]",Zv="(?:"+co+"|"+rl+")",vc="[^"+uo+"]",al="(?:\\ud83c[\\udde6-\\uddff]){2}",sl="[\\ud800-\\udbff][\\udc00-\\udfff]",xa="["+cc+"]",kc="\\u200d",bc="(?:"+hc+"|"+yc+")",Qv="(?:"+xa+"|"+yc+")",wc="(?:"+tl+"(?:d|ll|m|re|s|t|ve))?",_c="(?:"+tl+"(?:D|LL|M|RE|S|T|VE))?",Tc=Zv+"?",Sc="["+fc+"]?",Jv="(?:"+kc+"(?:"+[vc,al,sl].join("|")+")"+Sc+Tc+")*",ek="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",nk="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ec=Sc+Tc+Jv,tk="(?:"+[Xv,al,sl].join("|")+")"+Ec,rk="(?:"+[vc+co+"?",co,al,sl,Kv].join("|")+")",ak=RegExp(tl,"g"),sk=RegExp(co,"g"),ol=RegExp(rl+"(?="+rl+")|"+rk+Ec,"g"),ok=RegExp([xa+"?"+hc+"+"+wc+"(?="+[gc,xa,"$"].join("|")+")",Qv+"+"+_c+"(?="+[gc,xa+bc,"$"].join("|")+")",xa+"?"+bc+"+"+wc,xa+"+"+_c,nk,ek,pc,tk].join("|"),"g"),ik=RegExp("["+kc+uo+lc+fc+"]"),lk=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,uk=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],dk=-1,ln={};ln[An]=ln[Qt]=ln[tt]=ln[Qr]=ln[vr]=ln[kr]=ln[Jr]=ln[br]=ln[ea]=!0,ln[me]=ln[he]=ln[Ae]=ln[Ve]=ln[qe]=ln[en]=ln[on]=ln[mn]=ln[tn]=ln[Dn]=ln[wn]=ln[B]=ln[H]=ln[X]=ln[ae]=!1;var sn={};sn[me]=sn[he]=sn[Ae]=sn[qe]=sn[Ve]=sn[en]=sn[An]=sn[Qt]=sn[tt]=sn[Qr]=sn[vr]=sn[tn]=sn[Dn]=sn[wn]=sn[B]=sn[H]=sn[X]=sn[le]=sn[kr]=sn[Jr]=sn[br]=sn[ea]=!0,sn[on]=sn[mn]=sn[ae]=!1;var ck={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},fk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},mk={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},gk={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},pk=parseFloat,hk=parseInt,Oc=typeof Zo=="object"&&Zo&&Zo.Object===Object&&Zo,yk=typeof self=="object"&&self&&self.Object===Object&&self,Cn=Oc||yk||Function("return this")(),il=r&&!r.nodeType&&r,ra=il&&!0&&e&&!e.nodeType&&e,Dc=ra&&ra.exports===il,ll=Dc&&Oc.process,St=function(){try{var I=ra&&ra.require&&ra.require("util").types;return I||ll&&ll.binding&&ll.binding("util")}catch{}}(),xc=St&&St.isArrayBuffer,Rc=St&&St.isDate,Fc=St&&St.isMap,Nc=St&&St.isRegExp,Ac=St&&St.isSet,Pc=St&&St.isTypedArray;function mt(I,Z,K){switch(K.length){case 0:return I.call(Z);case 1:return I.call(Z,K[0]);case 2:return I.call(Z,K[0],K[1]);case 3:return I.call(Z,K[0],K[1],K[2])}return I.apply(Z,K)}function vk(I,Z,K,fe){for(var Se=-1,Ue=I==null?0:I.length;++Se<Ue;){var Fn=I[Se];Z(fe,Fn,K(Fn),I)}return fe}function Et(I,Z){for(var K=-1,fe=I==null?0:I.length;++K<fe&&Z(I[K],K,I)!==!1;);return I}function kk(I,Z){for(var K=I==null?0:I.length;K--&&Z(I[K],K,I)!==!1;);return I}function Mc(I,Z){for(var K=-1,fe=I==null?0:I.length;++K<fe;)if(!Z(I[K],K,I))return!1;return!0}function jr(I,Z){for(var K=-1,fe=I==null?0:I.length,Se=0,Ue=[];++K<fe;){var Fn=I[K];Z(Fn,K,I)&&(Ue[Se++]=Fn)}return Ue}function fo(I,Z){var K=I==null?0:I.length;return!!K&&Ra(I,Z,0)>-1}function ul(I,Z,K){for(var fe=-1,Se=I==null?0:I.length;++fe<Se;)if(K(Z,I[fe]))return!0;return!1}function cn(I,Z){for(var K=-1,fe=I==null?0:I.length,Se=Array(fe);++K<fe;)Se[K]=Z(I[K],K,I);return Se}function Ir(I,Z){for(var K=-1,fe=Z.length,Se=I.length;++K<fe;)I[Se+K]=Z[K];return I}function dl(I,Z,K,fe){var Se=-1,Ue=I==null?0:I.length;for(fe&&Ue&&(K=I[++Se]);++Se<Ue;)K=Z(K,I[Se],Se,I);return K}function bk(I,Z,K,fe){var Se=I==null?0:I.length;for(fe&&Se&&(K=I[--Se]);Se--;)K=Z(K,I[Se],Se,I);return K}function cl(I,Z){for(var K=-1,fe=I==null?0:I.length;++K<fe;)if(Z(I[K],K,I))return!0;return!1}var wk=fl("length");function _k(I){return I.split("")}function Tk(I){return I.match(Nv)||[]}function Bc(I,Z,K){var fe;return K(I,function(Se,Ue,Fn){if(Z(Se,Ue,Fn))return fe=Ue,!1}),fe}function mo(I,Z,K,fe){for(var Se=I.length,Ue=K+(fe?1:-1);fe?Ue--:++Ue<Se;)if(Z(I[Ue],Ue,I))return Ue;return-1}function Ra(I,Z,K){return Z===Z?Bk(I,Z,K):mo(I,qc,K)}function Sk(I,Z,K,fe){for(var Se=K-1,Ue=I.length;++Se<Ue;)if(fe(I[Se],Z))return Se;return-1}function qc(I){return I!==I}function jc(I,Z){var K=I==null?0:I.length;return K?gl(I,Z)/K:se}function fl(I){return function(Z){return Z==null?n:Z[I]}}function ml(I){return function(Z){return I==null?n:I[Z]}}function Ic(I,Z,K,fe,Se){return Se(I,function(Ue,Fn,rn){K=fe?(fe=!1,Ue):Z(K,Ue,Fn,rn)}),K}function Ek(I,Z){var K=I.length;for(I.sort(Z);K--;)I[K]=I[K].value;return I}function gl(I,Z){for(var K,fe=-1,Se=I.length;++fe<Se;){var Ue=Z(I[fe]);Ue!==n&&(K=K===n?Ue:K+Ue)}return K}function pl(I,Z){for(var K=-1,fe=Array(I);++K<I;)fe[K]=Z(K);return fe}function Ok(I,Z){return cn(Z,function(K){return[K,I[K]]})}function Cc(I){return I&&I.slice(0,Vc(I)+1).replace(nl,"")}function gt(I){return function(Z){return I(Z)}}function hl(I,Z){return cn(Z,function(K){return I[K]})}function ps(I,Z){return I.has(Z)}function Lc(I,Z){for(var K=-1,fe=I.length;++K<fe&&Ra(Z,I[K],0)>-1;);return K}function $c(I,Z){for(var K=I.length;K--&&Ra(Z,I[K],0)>-1;);return K}function Dk(I,Z){for(var K=I.length,fe=0;K--;)I[K]===Z&&++fe;return fe}var xk=ml(ck),Rk=ml(fk);function Fk(I){return"\\"+gk[I]}function Nk(I,Z){return I==null?n:I[Z]}function Fa(I){return ik.test(I)}function Ak(I){return lk.test(I)}function Pk(I){for(var Z,K=[];!(Z=I.next()).done;)K.push(Z.value);return K}function yl(I){var Z=-1,K=Array(I.size);return I.forEach(function(fe,Se){K[++Z]=[Se,fe]}),K}function Hc(I,Z){return function(K){return I(Z(K))}}function Cr(I,Z){for(var K=-1,fe=I.length,Se=0,Ue=[];++K<fe;){var Fn=I[K];(Fn===Z||Fn===g)&&(I[K]=g,Ue[Se++]=K)}return Ue}function go(I){var Z=-1,K=Array(I.size);return I.forEach(function(fe){K[++Z]=fe}),K}function Mk(I){var Z=-1,K=Array(I.size);return I.forEach(function(fe){K[++Z]=[fe,fe]}),K}function Bk(I,Z,K){for(var fe=K-1,Se=I.length;++fe<Se;)if(I[fe]===Z)return fe;return-1}function qk(I,Z,K){for(var fe=K+1;fe--;)if(I[fe]===Z)return fe;return fe}function Na(I){return Fa(I)?Ik(I):wk(I)}function Ct(I){return Fa(I)?Ck(I):_k(I)}function Vc(I){for(var Z=I.length;Z--&&Dv.test(I.charAt(Z)););return Z}var jk=ml(mk);function Ik(I){for(var Z=ol.lastIndex=0;ol.test(I);)++Z;return Z}function Ck(I){return I.match(ol)||[]}function Lk(I){return I.match(ok)||[]}var $k=function I(Z){Z=Z==null?Cn:Aa.defaults(Cn.Object(),Z,Aa.pick(Cn,uk));var K=Z.Array,fe=Z.Date,Se=Z.Error,Ue=Z.Function,Fn=Z.Math,rn=Z.Object,vl=Z.RegExp,Hk=Z.String,Ot=Z.TypeError,po=K.prototype,Vk=Ue.prototype,Pa=rn.prototype,ho=Z["__core-js_shared__"],yo=Vk.toString,Xe=Pa.hasOwnProperty,Uk=0,Uc=function(){var s=/[^.]+$/.exec(ho&&ho.keys&&ho.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),vo=Pa.toString,Wk=yo.call(rn),Gk=Cn._,Yk=vl("^"+yo.call(Xe).replace(ta,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ko=Dc?Z.Buffer:n,Lr=Z.Symbol,bo=Z.Uint8Array,Wc=ko?ko.allocUnsafe:n,wo=Hc(rn.getPrototypeOf,rn),Gc=rn.create,Yc=Pa.propertyIsEnumerable,_o=po.splice,zc=Lr?Lr.isConcatSpreadable:n,hs=Lr?Lr.iterator:n,aa=Lr?Lr.toStringTag:n,To=function(){try{var s=ua(rn,"defineProperty");return s({},"",{}),s}catch{}}(),zk=Z.clearTimeout!==Cn.clearTimeout&&Z.clearTimeout,Kk=fe&&fe.now!==Cn.Date.now&&fe.now,Xk=Z.setTimeout!==Cn.setTimeout&&Z.setTimeout,So=Fn.ceil,Eo=Fn.floor,kl=rn.getOwnPropertySymbols,Zk=ko?ko.isBuffer:n,Kc=Z.isFinite,Qk=po.join,Jk=Hc(rn.keys,rn),Nn=Fn.max,Hn=Fn.min,eb=fe.now,nb=Z.parseInt,Xc=Fn.random,tb=po.reverse,bl=ua(Z,"DataView"),ys=ua(Z,"Map"),wl=ua(Z,"Promise"),Ma=ua(Z,"Set"),vs=ua(Z,"WeakMap"),ks=ua(rn,"create"),Oo=vs&&new vs,Ba={},rb=da(bl),ab=da(ys),sb=da(wl),ob=da(Ma),ib=da(vs),Do=Lr?Lr.prototype:n,bs=Do?Do.valueOf:n,Zc=Do?Do.toString:n;function _(s){if(kn(s)&&!Oe(s)&&!(s instanceof Be)){if(s instanceof Dt)return s;if(Xe.call(s,"__wrapped__"))return Jf(s)}return new Dt(s)}var qa=function(){function s(){}return function(o){if(!gn(o))return{};if(Gc)return Gc(o);s.prototype=o;var l=new s;return s.prototype=n,l}}();function xo(){}function Dt(s,o){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=n}_.templateSettings={escape:Pn,evaluate:Tt,interpolate:$e,variable:"",imports:{_}},_.prototype=xo.prototype,_.prototype.constructor=_,Dt.prototype=qa(xo.prototype),Dt.prototype.constructor=Dt;function Be(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function lb(){var s=new Be(this.__wrapped__);return s.__actions__=rt(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=rt(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=rt(this.__views__),s}function ub(){if(this.__filtered__){var s=new Be(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function db(){var s=this.__wrapped__.value(),o=this.__dir__,l=Oe(s),f=o<0,h=l?s.length:0,S=_0(0,h,this.__views__),P=S.start,q=S.end,C=q-P,ee=f?q:P-1,ne=this.__iteratees__,te=ne.length,ue=0,pe=Hn(C,this.__takeCount__);if(!l||!f&&h==C&&pe==C)return _f(s,this.__actions__);var we=[];e:for(;C--&&ue<pe;){ee+=o;for(var xe=-1,_e=s[ee];++xe<te;){var Pe=ne[xe],je=Pe.iteratee,yt=Pe.type,Kn=je(_e);if(yt==G)_e=Kn;else if(!Kn){if(yt==U)continue e;break e}}we[ue++]=_e}return we}Be.prototype=qa(xo.prototype),Be.prototype.constructor=Be;function sa(s){var o=-1,l=s==null?0:s.length;for(this.clear();++o<l;){var f=s[o];this.set(f[0],f[1])}}function cb(){this.__data__=ks?ks(null):{},this.size=0}function fb(s){var o=this.has(s)&&delete this.__data__[s];return this.size-=o?1:0,o}function mb(s){var o=this.__data__;if(ks){var l=o[s];return l===c?n:l}return Xe.call(o,s)?o[s]:n}function gb(s){var o=this.__data__;return ks?o[s]!==n:Xe.call(o,s)}function pb(s,o){var l=this.__data__;return this.size+=this.has(s)?0:1,l[s]=ks&&o===n?c:o,this}sa.prototype.clear=cb,sa.prototype.delete=fb,sa.prototype.get=mb,sa.prototype.has=gb,sa.prototype.set=pb;function wr(s){var o=-1,l=s==null?0:s.length;for(this.clear();++o<l;){var f=s[o];this.set(f[0],f[1])}}function hb(){this.__data__=[],this.size=0}function yb(s){var o=this.__data__,l=Ro(o,s);if(l<0)return!1;var f=o.length-1;return l==f?o.pop():_o.call(o,l,1),--this.size,!0}function vb(s){var o=this.__data__,l=Ro(o,s);return l<0?n:o[l][1]}function kb(s){return Ro(this.__data__,s)>-1}function bb(s,o){var l=this.__data__,f=Ro(l,s);return f<0?(++this.size,l.push([s,o])):l[f][1]=o,this}wr.prototype.clear=hb,wr.prototype.delete=yb,wr.prototype.get=vb,wr.prototype.has=kb,wr.prototype.set=bb;function _r(s){var o=-1,l=s==null?0:s.length;for(this.clear();++o<l;){var f=s[o];this.set(f[0],f[1])}}function wb(){this.size=0,this.__data__={hash:new sa,map:new(ys||wr),string:new sa}}function _b(s){var o=$o(this,s).delete(s);return this.size-=o?1:0,o}function Tb(s){return $o(this,s).get(s)}function Sb(s){return $o(this,s).has(s)}function Eb(s,o){var l=$o(this,s),f=l.size;return l.set(s,o),this.size+=l.size==f?0:1,this}_r.prototype.clear=wb,_r.prototype.delete=_b,_r.prototype.get=Tb,_r.prototype.has=Sb,_r.prototype.set=Eb;function oa(s){var o=-1,l=s==null?0:s.length;for(this.__data__=new _r;++o<l;)this.add(s[o])}function Ob(s){return this.__data__.set(s,c),this}function Db(s){return this.__data__.has(s)}oa.prototype.add=oa.prototype.push=Ob,oa.prototype.has=Db;function Lt(s){var o=this.__data__=new wr(s);this.size=o.size}function xb(){this.__data__=new wr,this.size=0}function Rb(s){var o=this.__data__,l=o.delete(s);return this.size=o.size,l}function Fb(s){return this.__data__.get(s)}function Nb(s){return this.__data__.has(s)}function Ab(s,o){var l=this.__data__;if(l instanceof wr){var f=l.__data__;if(!ys||f.length<a-1)return f.push([s,o]),this.size=++l.size,this;l=this.__data__=new _r(f)}return l.set(s,o),this.size=l.size,this}Lt.prototype.clear=xb,Lt.prototype.delete=Rb,Lt.prototype.get=Fb,Lt.prototype.has=Nb,Lt.prototype.set=Ab;function Qc(s,o){var l=Oe(s),f=!l&&ca(s),h=!l&&!f&&Wr(s),S=!l&&!f&&!h&&La(s),P=l||f||h||S,q=P?pl(s.length,Hk):[],C=q.length;for(var ee in s)(o||Xe.call(s,ee))&&!(P&&(ee=="length"||h&&(ee=="offset"||ee=="parent")||S&&(ee=="buffer"||ee=="byteLength"||ee=="byteOffset")||Or(ee,C)))&&q.push(ee);return q}function Jc(s){var o=s.length;return o?s[Al(0,o-1)]:n}function Pb(s,o){return Ho(rt(s),ia(o,0,s.length))}function Mb(s){return Ho(rt(s))}function _l(s,o,l){(l!==n&&!$t(s[o],l)||l===n&&!(o in s))&&Tr(s,o,l)}function ws(s,o,l){var f=s[o];(!(Xe.call(s,o)&&$t(f,l))||l===n&&!(o in s))&&Tr(s,o,l)}function Ro(s,o){for(var l=s.length;l--;)if($t(s[l][0],o))return l;return-1}function Bb(s,o,l,f){return $r(s,function(h,S,P){o(f,h,l(h),P)}),f}function ef(s,o){return s&&er(o,Mn(o),s)}function qb(s,o){return s&&er(o,st(o),s)}function Tr(s,o,l){o=="__proto__"&&To?To(s,o,{configurable:!0,enumerable:!0,value:l,writable:!0}):s[o]=l}function Tl(s,o){for(var l=-1,f=o.length,h=K(f),S=s==null;++l<f;)h[l]=S?n:ru(s,o[l]);return h}function ia(s,o,l){return s===s&&(l!==n&&(s=s<=l?s:l),o!==n&&(s=s>=o?s:o)),s}function xt(s,o,l,f,h,S){var P,q=o&p,C=o&y,ee=o&v;if(l&&(P=h?l(s,f,h,S):l(s)),P!==n)return P;if(!gn(s))return s;var ne=Oe(s);if(ne){if(P=S0(s),!q)return rt(s,P)}else{var te=Vn(s),ue=te==mn||te==Rn;if(Wr(s))return Ef(s,q);if(te==wn||te==me||ue&&!h){if(P=C||ue?{}:Uf(s),!q)return C?m0(s,qb(P,s)):f0(s,ef(P,s))}else{if(!sn[te])return h?s:{};P=E0(s,te,q)}}S||(S=new Lt);var pe=S.get(s);if(pe)return pe;S.set(s,P),km(s)?s.forEach(function(_e){P.add(xt(_e,o,l,_e,s,S))}):ym(s)&&s.forEach(function(_e,Pe){P.set(Pe,xt(_e,o,l,Pe,s,S))});var we=ee?C?Vl:Hl:C?st:Mn,xe=ne?n:we(s);return Et(xe||s,function(_e,Pe){xe&&(Pe=_e,_e=s[Pe]),ws(P,Pe,xt(_e,o,l,Pe,s,S))}),P}function jb(s){var o=Mn(s);return function(l){return nf(l,s,o)}}function nf(s,o,l){var f=l.length;if(s==null)return!f;for(s=rn(s);f--;){var h=l[f],S=o[h],P=s[h];if(P===n&&!(h in s)||!S(P))return!1}return!0}function tf(s,o,l){if(typeof s!="function")throw new Ot(u);return xs(function(){s.apply(n,l)},o)}function _s(s,o,l,f){var h=-1,S=fo,P=!0,q=s.length,C=[],ee=o.length;if(!q)return C;l&&(o=cn(o,gt(l))),f?(S=ul,P=!1):o.length>=a&&(S=ps,P=!1,o=new oa(o));e:for(;++h<q;){var ne=s[h],te=l==null?ne:l(ne);if(ne=f||ne!==0?ne:0,P&&te===te){for(var ue=ee;ue--;)if(o[ue]===te)continue e;C.push(ne)}else S(o,te,f)||C.push(ne)}return C}var $r=Ff(Jt),rf=Ff(El,!0);function Ib(s,o){var l=!0;return $r(s,function(f,h,S){return l=!!o(f,h,S),l}),l}function Fo(s,o,l){for(var f=-1,h=s.length;++f<h;){var S=s[f],P=o(S);if(P!=null&&(q===n?P===P&&!ht(P):l(P,q)))var q=P,C=S}return C}function Cb(s,o,l,f){var h=s.length;for(l=De(l),l<0&&(l=-l>h?0:h+l),f=f===n||f>h?h:De(f),f<0&&(f+=h),f=l>f?0:wm(f);l<f;)s[l++]=o;return s}function af(s,o){var l=[];return $r(s,function(f,h,S){o(f,h,S)&&l.push(f)}),l}function Ln(s,o,l,f,h){var S=-1,P=s.length;for(l||(l=D0),h||(h=[]);++S<P;){var q=s[S];o>0&&l(q)?o>1?Ln(q,o-1,l,f,h):Ir(h,q):f||(h[h.length]=q)}return h}var Sl=Nf(),sf=Nf(!0);function Jt(s,o){return s&&Sl(s,o,Mn)}function El(s,o){return s&&sf(s,o,Mn)}function No(s,o){return jr(o,function(l){return Dr(s[l])})}function la(s,o){o=Vr(o,s);for(var l=0,f=o.length;s!=null&&l<f;)s=s[nr(o[l++])];return l&&l==f?s:n}function of(s,o,l){var f=o(s);return Oe(s)?f:Ir(f,l(s))}function Yn(s){return s==null?s===n?oe:dt:aa&&aa in rn(s)?w0(s):M0(s)}function Ol(s,o){return s>o}function Lb(s,o){return s!=null&&Xe.call(s,o)}function $b(s,o){return s!=null&&o in rn(s)}function Hb(s,o,l){return s>=Hn(o,l)&&s<Nn(o,l)}function Dl(s,o,l){for(var f=l?ul:fo,h=s[0].length,S=s.length,P=S,q=K(S),C=1/0,ee=[];P--;){var ne=s[P];P&&o&&(ne=cn(ne,gt(o))),C=Hn(ne.length,C),q[P]=!l&&(o||h>=120&&ne.length>=120)?new oa(P&&ne):n}ne=s[0];var te=-1,ue=q[0];e:for(;++te<h&&ee.length<C;){var pe=ne[te],we=o?o(pe):pe;if(pe=l||pe!==0?pe:0,!(ue?ps(ue,we):f(ee,we,l))){for(P=S;--P;){var xe=q[P];if(!(xe?ps(xe,we):f(s[P],we,l)))continue e}ue&&ue.push(we),ee.push(pe)}}return ee}function Vb(s,o,l,f){return Jt(s,function(h,S,P){o(f,l(h),S,P)}),f}function Ts(s,o,l){o=Vr(o,s),s=zf(s,o);var f=s==null?s:s[nr(Ft(o))];return f==null?n:mt(f,s,l)}function lf(s){return kn(s)&&Yn(s)==me}function Ub(s){return kn(s)&&Yn(s)==Ae}function Wb(s){return kn(s)&&Yn(s)==en}function Ss(s,o,l,f,h){return s===o?!0:s==null||o==null||!kn(s)&&!kn(o)?s!==s&&o!==o:Gb(s,o,l,f,Ss,h)}function Gb(s,o,l,f,h,S){var P=Oe(s),q=Oe(o),C=P?he:Vn(s),ee=q?he:Vn(o);C=C==me?wn:C,ee=ee==me?wn:ee;var ne=C==wn,te=ee==wn,ue=C==ee;if(ue&&Wr(s)){if(!Wr(o))return!1;P=!0,ne=!1}if(ue&&!ne)return S||(S=new Lt),P||La(s)?$f(s,o,l,f,h,S):k0(s,o,C,l,f,h,S);if(!(l&D)){var pe=ne&&Xe.call(s,"__wrapped__"),we=te&&Xe.call(o,"__wrapped__");if(pe||we){var xe=pe?s.value():s,_e=we?o.value():o;return S||(S=new Lt),h(xe,_e,l,f,S)}}return ue?(S||(S=new Lt),b0(s,o,l,f,h,S)):!1}function Yb(s){return kn(s)&&Vn(s)==tn}function xl(s,o,l,f){var h=l.length,S=h,P=!f;if(s==null)return!S;for(s=rn(s);h--;){var q=l[h];if(P&&q[2]?q[1]!==s[q[0]]:!(q[0]in s))return!1}for(;++h<S;){q=l[h];var C=q[0],ee=s[C],ne=q[1];if(P&&q[2]){if(ee===n&&!(C in s))return!1}else{var te=new Lt;if(f)var ue=f(ee,ne,C,s,o,te);if(!(ue===n?Ss(ne,ee,D|E,f,te):ue))return!1}}return!0}function uf(s){if(!gn(s)||R0(s))return!1;var o=Dr(s)?Yk:jv;return o.test(da(s))}function zb(s){return kn(s)&&Yn(s)==B}function Kb(s){return kn(s)&&Vn(s)==H}function Xb(s){return kn(s)&&zo(s.length)&&!!ln[Yn(s)]}function df(s){return typeof s=="function"?s:s==null?ot:typeof s=="object"?Oe(s)?mf(s[0],s[1]):ff(s):Am(s)}function Rl(s){if(!Ds(s))return Jk(s);var o=[];for(var l in rn(s))Xe.call(s,l)&&l!="constructor"&&o.push(l);return o}function Zb(s){if(!gn(s))return P0(s);var o=Ds(s),l=[];for(var f in s)f=="constructor"&&(o||!Xe.call(s,f))||l.push(f);return l}function Fl(s,o){return s<o}function cf(s,o){var l=-1,f=at(s)?K(s.length):[];return $r(s,function(h,S,P){f[++l]=o(h,S,P)}),f}function ff(s){var o=Wl(s);return o.length==1&&o[0][2]?Gf(o[0][0],o[0][1]):function(l){return l===s||xl(l,s,o)}}function mf(s,o){return Yl(s)&&Wf(o)?Gf(nr(s),o):function(l){var f=ru(l,s);return f===n&&f===o?au(l,s):Ss(o,f,D|E)}}function Ao(s,o,l,f,h){s!==o&&Sl(o,function(S,P){if(h||(h=new Lt),gn(S))Qb(s,o,P,l,Ao,f,h);else{var q=f?f(Kl(s,P),S,P+"",s,o,h):n;q===n&&(q=S),_l(s,P,q)}},st)}function Qb(s,o,l,f,h,S,P){var q=Kl(s,l),C=Kl(o,l),ee=P.get(C);if(ee){_l(s,l,ee);return}var ne=S?S(q,C,l+"",s,o,P):n,te=ne===n;if(te){var ue=Oe(C),pe=!ue&&Wr(C),we=!ue&&!pe&&La(C);ne=C,ue||pe||we?Oe(q)?ne=q:_n(q)?ne=rt(q):pe?(te=!1,ne=Ef(C,!0)):we?(te=!1,ne=Of(C,!0)):ne=[]:Rs(C)||ca(C)?(ne=q,ca(q)?ne=_m(q):(!gn(q)||Dr(q))&&(ne=Uf(C))):te=!1}te&&(P.set(C,ne),h(ne,C,f,S,P),P.delete(C)),_l(s,l,ne)}function gf(s,o){var l=s.length;if(l)return o+=o<0?l:0,Or(o,l)?s[o]:n}function pf(s,o,l){o.length?o=cn(o,function(S){return Oe(S)?function(P){return la(P,S.length===1?S[0]:S)}:S}):o=[ot];var f=-1;o=cn(o,gt(be()));var h=cf(s,function(S,P,q){var C=cn(o,function(ee){return ee(S)});return{criteria:C,index:++f,value:S}});return Ek(h,function(S,P){return c0(S,P,l)})}function Jb(s,o){return hf(s,o,function(l,f){return au(s,f)})}function hf(s,o,l){for(var f=-1,h=o.length,S={};++f<h;){var P=o[f],q=la(s,P);l(q,P)&&Es(S,Vr(P,s),q)}return S}function e0(s){return function(o){return la(o,s)}}function Nl(s,o,l,f){var h=f?Sk:Ra,S=-1,P=o.length,q=s;for(s===o&&(o=rt(o)),l&&(q=cn(s,gt(l)));++S<P;)for(var C=0,ee=o[S],ne=l?l(ee):ee;(C=h(q,ne,C,f))>-1;)q!==s&&_o.call(q,C,1),_o.call(s,C,1);return s}function yf(s,o){for(var l=s?o.length:0,f=l-1;l--;){var h=o[l];if(l==f||h!==S){var S=h;Or(h)?_o.call(s,h,1):Bl(s,h)}}return s}function Al(s,o){return s+Eo(Xc()*(o-s+1))}function n0(s,o,l,f){for(var h=-1,S=Nn(So((o-s)/(l||1)),0),P=K(S);S--;)P[f?S:++h]=s,s+=l;return P}function Pl(s,o){var l="";if(!s||o<1||o>Y)return l;do o%2&&(l+=s),o=Eo(o/2),o&&(s+=s);while(o);return l}function Fe(s,o){return Xl(Yf(s,o,ot),s+"")}function t0(s){return Jc($a(s))}function r0(s,o){var l=$a(s);return Ho(l,ia(o,0,l.length))}function Es(s,o,l,f){if(!gn(s))return s;o=Vr(o,s);for(var h=-1,S=o.length,P=S-1,q=s;q!=null&&++h<S;){var C=nr(o[h]),ee=l;if(C==="__proto__"||C==="constructor"||C==="prototype")return s;if(h!=P){var ne=q[C];ee=f?f(ne,C,q):n,ee===n&&(ee=gn(ne)?ne:Or(o[h+1])?[]:{})}ws(q,C,ee),q=q[C]}return s}var vf=Oo?function(s,o){return Oo.set(s,o),s}:ot,a0=To?function(s,o){return To(s,"toString",{configurable:!0,enumerable:!1,value:ou(o),writable:!0})}:ot;function s0(s){return Ho($a(s))}function Rt(s,o,l){var f=-1,h=s.length;o<0&&(o=-o>h?0:h+o),l=l>h?h:l,l<0&&(l+=h),h=o>l?0:l-o>>>0,o>>>=0;for(var S=K(h);++f<h;)S[f]=s[f+o];return S}function o0(s,o){var l;return $r(s,function(f,h,S){return l=o(f,h,S),!l}),!!l}function Po(s,o,l){var f=0,h=s==null?f:s.length;if(typeof o=="number"&&o===o&&h<=Ee){for(;f<h;){var S=f+h>>>1,P=s[S];P!==null&&!ht(P)&&(l?P<=o:P<o)?f=S+1:h=S}return h}return Ml(s,o,ot,l)}function Ml(s,o,l,f){var h=0,S=s==null?0:s.length;if(S===0)return 0;o=l(o);for(var P=o!==o,q=o===null,C=ht(o),ee=o===n;h<S;){var ne=Eo((h+S)/2),te=l(s[ne]),ue=te!==n,pe=te===null,we=te===te,xe=ht(te);if(P)var _e=f||we;else ee?_e=we&&(f||ue):q?_e=we&&ue&&(f||!pe):C?_e=we&&ue&&!pe&&(f||!xe):pe||xe?_e=!1:_e=f?te<=o:te<o;_e?h=ne+1:S=ne}return Hn(S,Te)}function kf(s,o){for(var l=-1,f=s.length,h=0,S=[];++l<f;){var P=s[l],q=o?o(P):P;if(!l||!$t(q,C)){var C=q;S[h++]=P===0?0:P}}return S}function bf(s){return typeof s=="number"?s:ht(s)?se:+s}function pt(s){if(typeof s=="string")return s;if(Oe(s))return cn(s,pt)+"";if(ht(s))return Zc?Zc.call(s):"";var o=s+"";return o=="0"&&1/s==-1/0?"-0":o}function Hr(s,o,l){var f=-1,h=fo,S=s.length,P=!0,q=[],C=q;if(l)P=!1,h=ul;else if(S>=a){var ee=o?null:y0(s);if(ee)return go(ee);P=!1,h=ps,C=new oa}else C=o?[]:q;e:for(;++f<S;){var ne=s[f],te=o?o(ne):ne;if(ne=l||ne!==0?ne:0,P&&te===te){for(var ue=C.length;ue--;)if(C[ue]===te)continue e;o&&C.push(te),q.push(ne)}else h(C,te,l)||(C!==q&&C.push(te),q.push(ne))}return q}function Bl(s,o){return o=Vr(o,s),s=zf(s,o),s==null||delete s[nr(Ft(o))]}function wf(s,o,l,f){return Es(s,o,l(la(s,o)),f)}function Mo(s,o,l,f){for(var h=s.length,S=f?h:-1;(f?S--:++S<h)&&o(s[S],S,s););return l?Rt(s,f?0:S,f?S+1:h):Rt(s,f?S+1:0,f?h:S)}function _f(s,o){var l=s;return l instanceof Be&&(l=l.value()),dl(o,function(f,h){return h.func.apply(h.thisArg,Ir([f],h.args))},l)}function ql(s,o,l){var f=s.length;if(f<2)return f?Hr(s[0]):[];for(var h=-1,S=K(f);++h<f;)for(var P=s[h],q=-1;++q<f;)q!=h&&(S[h]=_s(S[h]||P,s[q],o,l));return Hr(Ln(S,1),o,l)}function Tf(s,o,l){for(var f=-1,h=s.length,S=o.length,P={};++f<h;){var q=f<S?o[f]:n;l(P,s[f],q)}return P}function jl(s){return _n(s)?s:[]}function Il(s){return typeof s=="function"?s:ot}function Vr(s,o){return Oe(s)?s:Yl(s,o)?[s]:Qf(Ye(s))}var i0=Fe;function Ur(s,o,l){var f=s.length;return l=l===n?f:l,!o&&l>=f?s:Rt(s,o,l)}var Sf=zk||function(s){return Cn.clearTimeout(s)};function Ef(s,o){if(o)return s.slice();var l=s.length,f=Wc?Wc(l):new s.constructor(l);return s.copy(f),f}function Cl(s){var o=new s.constructor(s.byteLength);return new bo(o).set(new bo(s)),o}function l0(s,o){var l=o?Cl(s.buffer):s.buffer;return new s.constructor(l,s.byteOffset,s.byteLength)}function u0(s){var o=new s.constructor(s.source,ic.exec(s));return o.lastIndex=s.lastIndex,o}function d0(s){return bs?rn(bs.call(s)):{}}function Of(s,o){var l=o?Cl(s.buffer):s.buffer;return new s.constructor(l,s.byteOffset,s.length)}function Df(s,o){if(s!==o){var l=s!==n,f=s===null,h=s===s,S=ht(s),P=o!==n,q=o===null,C=o===o,ee=ht(o);if(!q&&!ee&&!S&&s>o||S&&P&&C&&!q&&!ee||f&&P&&C||!l&&C||!h)return 1;if(!f&&!S&&!ee&&s<o||ee&&l&&h&&!f&&!S||q&&l&&h||!P&&h||!C)return-1}return 0}function c0(s,o,l){for(var f=-1,h=s.criteria,S=o.criteria,P=h.length,q=l.length;++f<P;){var C=Df(h[f],S[f]);if(C){if(f>=q)return C;var ee=l[f];return C*(ee=="desc"?-1:1)}}return s.index-o.index}function xf(s,o,l,f){for(var h=-1,S=s.length,P=l.length,q=-1,C=o.length,ee=Nn(S-P,0),ne=K(C+ee),te=!f;++q<C;)ne[q]=o[q];for(;++h<P;)(te||h<S)&&(ne[l[h]]=s[h]);for(;ee--;)ne[q++]=s[h++];return ne}function Rf(s,o,l,f){for(var h=-1,S=s.length,P=-1,q=l.length,C=-1,ee=o.length,ne=Nn(S-q,0),te=K(ne+ee),ue=!f;++h<ne;)te[h]=s[h];for(var pe=h;++C<ee;)te[pe+C]=o[C];for(;++P<q;)(ue||h<S)&&(te[pe+l[P]]=s[h++]);return te}function rt(s,o){var l=-1,f=s.length;for(o||(o=K(f));++l<f;)o[l]=s[l];return o}function er(s,o,l,f){var h=!l;l||(l={});for(var S=-1,P=o.length;++S<P;){var q=o[S],C=f?f(l[q],s[q],q,l,s):n;C===n&&(C=s[q]),h?Tr(l,q,C):ws(l,q,C)}return l}function f0(s,o){return er(s,Gl(s),o)}function m0(s,o){return er(s,Hf(s),o)}function Bo(s,o){return function(l,f){var h=Oe(l)?vk:Bb,S=o?o():{};return h(l,s,be(f,2),S)}}function ja(s){return Fe(function(o,l){var f=-1,h=l.length,S=h>1?l[h-1]:n,P=h>2?l[2]:n;for(S=s.length>3&&typeof S=="function"?(h--,S):n,P&&zn(l[0],l[1],P)&&(S=h<3?n:S,h=1),o=rn(o);++f<h;){var q=l[f];q&&s(o,q,f,S)}return o})}function Ff(s,o){return function(l,f){if(l==null)return l;if(!at(l))return s(l,f);for(var h=l.length,S=o?h:-1,P=rn(l);(o?S--:++S<h)&&f(P[S],S,P)!==!1;);return l}}function Nf(s){return function(o,l,f){for(var h=-1,S=rn(o),P=f(o),q=P.length;q--;){var C=P[s?q:++h];if(l(S[C],C,S)===!1)break}return o}}function g0(s,o,l){var f=o&T,h=Os(s);function S(){var P=this&&this!==Cn&&this instanceof S?h:s;return P.apply(f?l:this,arguments)}return S}function Af(s){return function(o){o=Ye(o);var l=Fa(o)?Ct(o):n,f=l?l[0]:o.charAt(0),h=l?Ur(l,1).join(""):o.slice(1);return f[s]()+h}}function Ia(s){return function(o){return dl(Fm(Rm(o).replace(ak,"")),s,"")}}function Os(s){return function(){var o=arguments;switch(o.length){case 0:return new s;case 1:return new s(o[0]);case 2:return new s(o[0],o[1]);case 3:return new s(o[0],o[1],o[2]);case 4:return new s(o[0],o[1],o[2],o[3]);case 5:return new s(o[0],o[1],o[2],o[3],o[4]);case 6:return new s(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new s(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var l=qa(s.prototype),f=s.apply(l,o);return gn(f)?f:l}}function p0(s,o,l){var f=Os(s);function h(){for(var S=arguments.length,P=K(S),q=S,C=Ca(h);q--;)P[q]=arguments[q];var ee=S<3&&P[0]!==C&&P[S-1]!==C?[]:Cr(P,C);if(S-=ee.length,S<l)return jf(s,o,qo,h.placeholder,n,P,ee,n,n,l-S);var ne=this&&this!==Cn&&this instanceof h?f:s;return mt(ne,this,P)}return h}function Pf(s){return function(o,l,f){var h=rn(o);if(!at(o)){var S=be(l,3);o=Mn(o),l=function(q){return S(h[q],q,h)}}var P=s(o,l,f);return P>-1?h[S?o[P]:P]:n}}function Mf(s){return Er(function(o){var l=o.length,f=l,h=Dt.prototype.thru;for(s&&o.reverse();f--;){var S=o[f];if(typeof S!="function")throw new Ot(u);if(h&&!P&&Lo(S)=="wrapper")var P=new Dt([],!0)}for(f=P?f:l;++f<l;){S=o[f];var q=Lo(S),C=q=="wrapper"?Ul(S):n;C&&zl(C[0])&&C[1]==(R|w|k|A)&&!C[4].length&&C[9]==1?P=P[Lo(C[0])].apply(P,C[3]):P=S.length==1&&zl(S)?P[q]():P.thru(S)}return function(){var ee=arguments,ne=ee[0];if(P&&ee.length==1&&Oe(ne))return P.plant(ne).value();for(var te=0,ue=l?o[te].apply(this,ee):ne;++te<l;)ue=o[te].call(this,ue);return ue}})}function qo(s,o,l,f,h,S,P,q,C,ee){var ne=o&R,te=o&T,ue=o&x,pe=o&(w|M),we=o&j,xe=ue?n:Os(s);function _e(){for(var Pe=arguments.length,je=K(Pe),yt=Pe;yt--;)je[yt]=arguments[yt];if(pe)var Kn=Ca(_e),vt=Dk(je,Kn);if(f&&(je=xf(je,f,h,pe)),S&&(je=Rf(je,S,P,pe)),Pe-=vt,pe&&Pe<ee){var Tn=Cr(je,Kn);return jf(s,o,qo,_e.placeholder,l,je,Tn,q,C,ee-Pe)}var Ht=te?l:this,Rr=ue?Ht[s]:s;return Pe=je.length,q?je=B0(je,q):we&&Pe>1&&je.reverse(),ne&&C<Pe&&(je.length=C),this&&this!==Cn&&this instanceof _e&&(Rr=xe||Os(Rr)),Rr.apply(Ht,je)}return _e}function Bf(s,o){return function(l,f){return Vb(l,s,o(f),{})}}function jo(s,o){return function(l,f){var h;if(l===n&&f===n)return o;if(l!==n&&(h=l),f!==n){if(h===n)return f;typeof l=="string"||typeof f=="string"?(l=pt(l),f=pt(f)):(l=bf(l),f=bf(f)),h=s(l,f)}return h}}function Ll(s){return Er(function(o){return o=cn(o,gt(be())),Fe(function(l){var f=this;return s(o,function(h){return mt(h,f,l)})})})}function Io(s,o){o=o===n?" ":pt(o);var l=o.length;if(l<2)return l?Pl(o,s):o;var f=Pl(o,So(s/Na(o)));return Fa(o)?Ur(Ct(f),0,s).join(""):f.slice(0,s)}function h0(s,o,l,f){var h=o&T,S=Os(s);function P(){for(var q=-1,C=arguments.length,ee=-1,ne=f.length,te=K(ne+C),ue=this&&this!==Cn&&this instanceof P?S:s;++ee<ne;)te[ee]=f[ee];for(;C--;)te[ee++]=arguments[++q];return mt(ue,h?l:this,te)}return P}function qf(s){return function(o,l,f){return f&&typeof f!="number"&&zn(o,l,f)&&(l=f=n),o=xr(o),l===n?(l=o,o=0):l=xr(l),f=f===n?o<l?1:-1:xr(f),n0(o,l,f,s)}}function Co(s){return function(o,l){return typeof o=="string"&&typeof l=="string"||(o=Nt(o),l=Nt(l)),s(o,l)}}function jf(s,o,l,f,h,S,P,q,C,ee){var ne=o&w,te=ne?P:n,ue=ne?n:P,pe=ne?S:n,we=ne?n:S;o|=ne?k:N,o&=~(ne?N:k),o&F||(o&=-4);var xe=[s,o,h,pe,te,we,ue,q,C,ee],_e=l.apply(n,xe);return zl(s)&&Kf(_e,xe),_e.placeholder=f,Xf(_e,s,o)}function $l(s){var o=Fn[s];return function(l,f){if(l=Nt(l),f=f==null?0:Hn(De(f),292),f&&Kc(l)){var h=(Ye(l)+"e").split("e"),S=o(h[0]+"e"+(+h[1]+f));return h=(Ye(S)+"e").split("e"),+(h[0]+"e"+(+h[1]-f))}return o(l)}}var y0=Ma&&1/go(new Ma([,-0]))[1]==J?function(s){return new Ma(s)}:uu;function If(s){return function(o){var l=Vn(o);return l==tn?yl(o):l==H?Mk(o):Ok(o,s(o))}}function Sr(s,o,l,f,h,S,P,q){var C=o&x;if(!C&&typeof s!="function")throw new Ot(u);var ee=f?f.length:0;if(ee||(o&=-97,f=h=n),P=P===n?P:Nn(De(P),0),q=q===n?q:De(q),ee-=h?h.length:0,o&N){var ne=f,te=h;f=h=n}var ue=C?n:Ul(s),pe=[s,o,l,f,h,ne,te,S,P,q];if(ue&&A0(pe,ue),s=pe[0],o=pe[1],l=pe[2],f=pe[3],h=pe[4],q=pe[9]=pe[9]===n?C?0:s.length:Nn(pe[9]-ee,0),!q&&o&(w|M)&&(o&=-25),!o||o==T)var we=g0(s,o,l);else o==w||o==M?we=p0(s,o,q):(o==k||o==(T|k))&&!h.length?we=h0(s,o,l,f):we=qo.apply(n,pe);var xe=ue?vf:Kf;return Xf(xe(we,pe),s,o)}function Cf(s,o,l,f){return s===n||$t(s,Pa[l])&&!Xe.call(f,l)?o:s}function Lf(s,o,l,f,h,S){return gn(s)&&gn(o)&&(S.set(o,s),Ao(s,o,n,Lf,S),S.delete(o)),s}function v0(s){return Rs(s)?n:s}function $f(s,o,l,f,h,S){var P=l&D,q=s.length,C=o.length;if(q!=C&&!(P&&C>q))return!1;var ee=S.get(s),ne=S.get(o);if(ee&&ne)return ee==o&&ne==s;var te=-1,ue=!0,pe=l&E?new oa:n;for(S.set(s,o),S.set(o,s);++te<q;){var we=s[te],xe=o[te];if(f)var _e=P?f(xe,we,te,o,s,S):f(we,xe,te,s,o,S);if(_e!==n){if(_e)continue;ue=!1;break}if(pe){if(!cl(o,function(Pe,je){if(!ps(pe,je)&&(we===Pe||h(we,Pe,l,f,S)))return pe.push(je)})){ue=!1;break}}else if(!(we===xe||h(we,xe,l,f,S))){ue=!1;break}}return S.delete(s),S.delete(o),ue}function k0(s,o,l,f,h,S,P){switch(l){case qe:if(s.byteLength!=o.byteLength||s.byteOffset!=o.byteOffset)return!1;s=s.buffer,o=o.buffer;case Ae:return!(s.byteLength!=o.byteLength||!S(new bo(s),new bo(o)));case Ve:case en:case Dn:return $t(+s,+o);case on:return s.name==o.name&&s.message==o.message;case B:case X:return s==o+"";case tn:var q=yl;case H:var C=f&D;if(q||(q=go),s.size!=o.size&&!C)return!1;var ee=P.get(s);if(ee)return ee==o;f|=E,P.set(s,o);var ne=$f(q(s),q(o),f,h,S,P);return P.delete(s),ne;case le:if(bs)return bs.call(s)==bs.call(o)}return!1}function b0(s,o,l,f,h,S){var P=l&D,q=Hl(s),C=q.length,ee=Hl(o),ne=ee.length;if(C!=ne&&!P)return!1;for(var te=C;te--;){var ue=q[te];if(!(P?ue in o:Xe.call(o,ue)))return!1}var pe=S.get(s),we=S.get(o);if(pe&&we)return pe==o&&we==s;var xe=!0;S.set(s,o),S.set(o,s);for(var _e=P;++te<C;){ue=q[te];var Pe=s[ue],je=o[ue];if(f)var yt=P?f(je,Pe,ue,o,s,S):f(Pe,je,ue,s,o,S);if(!(yt===n?Pe===je||h(Pe,je,l,f,S):yt)){xe=!1;break}_e||(_e=ue=="constructor")}if(xe&&!_e){var Kn=s.constructor,vt=o.constructor;Kn!=vt&&"constructor"in s&&"constructor"in o&&!(typeof Kn=="function"&&Kn instanceof Kn&&typeof vt=="function"&&vt instanceof vt)&&(xe=!1)}return S.delete(s),S.delete(o),xe}function Er(s){return Xl(Yf(s,n,tm),s+"")}function Hl(s){return of(s,Mn,Gl)}function Vl(s){return of(s,st,Hf)}var Ul=Oo?function(s){return Oo.get(s)}:uu;function Lo(s){for(var o=s.name+"",l=Ba[o],f=Xe.call(Ba,o)?l.length:0;f--;){var h=l[f],S=h.func;if(S==null||S==s)return h.name}return o}function Ca(s){var o=Xe.call(_,"placeholder")?_:s;return o.placeholder}function be(){var s=_.iteratee||iu;return s=s===iu?df:s,arguments.length?s(arguments[0],arguments[1]):s}function $o(s,o){var l=s.__data__;return x0(o)?l[typeof o=="string"?"string":"hash"]:l.map}function Wl(s){for(var o=Mn(s),l=o.length;l--;){var f=o[l],h=s[f];o[l]=[f,h,Wf(h)]}return o}function ua(s,o){var l=Nk(s,o);return uf(l)?l:n}function w0(s){var o=Xe.call(s,aa),l=s[aa];try{s[aa]=n;var f=!0}catch{}var h=vo.call(s);return f&&(o?s[aa]=l:delete s[aa]),h}var Gl=kl?function(s){return s==null?[]:(s=rn(s),jr(kl(s),function(o){return Yc.call(s,o)}))}:du,Hf=kl?function(s){for(var o=[];s;)Ir(o,Gl(s)),s=wo(s);return o}:du,Vn=Yn;(bl&&Vn(new bl(new ArrayBuffer(1)))!=qe||ys&&Vn(new ys)!=tn||wl&&Vn(wl.resolve())!=ct||Ma&&Vn(new Ma)!=H||vs&&Vn(new vs)!=ae)&&(Vn=function(s){var o=Yn(s),l=o==wn?s.constructor:n,f=l?da(l):"";if(f)switch(f){case rb:return qe;case ab:return tn;case sb:return ct;case ob:return H;case ib:return ae}return o});function _0(s,o,l){for(var f=-1,h=l.length;++f<h;){var S=l[f],P=S.size;switch(S.type){case"drop":s+=P;break;case"dropRight":o-=P;break;case"take":o=Hn(o,s+P);break;case"takeRight":s=Nn(s,o-P);break}}return{start:s,end:o}}function T0(s){var o=s.match(Rv);return o?o[1].split(Fv):[]}function Vf(s,o,l){o=Vr(o,s);for(var f=-1,h=o.length,S=!1;++f<h;){var P=nr(o[f]);if(!(S=s!=null&&l(s,P)))break;s=s[P]}return S||++f!=h?S:(h=s==null?0:s.length,!!h&&zo(h)&&Or(P,h)&&(Oe(s)||ca(s)))}function S0(s){var o=s.length,l=new s.constructor(o);return o&&typeof s[0]=="string"&&Xe.call(s,"index")&&(l.index=s.index,l.input=s.input),l}function Uf(s){return typeof s.constructor=="function"&&!Ds(s)?qa(wo(s)):{}}function E0(s,o,l){var f=s.constructor;switch(o){case Ae:return Cl(s);case Ve:case en:return new f(+s);case qe:return l0(s,l);case An:case Qt:case tt:case Qr:case vr:case kr:case Jr:case br:case ea:return Of(s,l);case tn:return new f;case Dn:case X:return new f(s);case B:return u0(s);case H:return new f;case le:return d0(s)}}function O0(s,o){var l=o.length;if(!l)return s;var f=l-1;return o[f]=(l>1?"& ":"")+o[f],o=o.join(l>2?", ":" "),s.replace(xv,`{
/* [wrapped with `+o+`] */
`)}function D0(s){return Oe(s)||ca(s)||!!(zc&&s&&s[zc])}function Or(s,o){var l=typeof s;return o=o??Y,!!o&&(l=="number"||l!="symbol"&&Cv.test(s))&&s>-1&&s%1==0&&s<o}function zn(s,o,l){if(!gn(l))return!1;var f=typeof o;return(f=="number"?at(l)&&Or(o,l.length):f=="string"&&o in l)?$t(l[o],s):!1}function Yl(s,o){if(Oe(s))return!1;var l=typeof s;return l=="number"||l=="symbol"||l=="boolean"||s==null||ht(s)?!0:Ji.test(s)||!Qi.test(s)||o!=null&&s in rn(o)}function x0(s){var o=typeof s;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?s!=="__proto__":s===null}function zl(s){var o=Lo(s),l=_[o];if(typeof l!="function"||!(o in Be.prototype))return!1;if(s===l)return!0;var f=Ul(l);return!!f&&s===f[0]}function R0(s){return!!Uc&&Uc in s}var F0=ho?Dr:cu;function Ds(s){var o=s&&s.constructor,l=typeof o=="function"&&o.prototype||Pa;return s===l}function Wf(s){return s===s&&!gn(s)}function Gf(s,o){return function(l){return l==null?!1:l[s]===o&&(o!==n||s in rn(l))}}function N0(s){var o=Go(s,function(f){return l.size===m&&l.clear(),f}),l=o.cache;return o}function A0(s,o){var l=s[1],f=o[1],h=l|f,S=h<(T|x|R),P=f==R&&l==w||f==R&&l==A&&s[7].length<=o[8]||f==(R|A)&&o[7].length<=o[8]&&l==w;if(!(S||P))return s;f&T&&(s[2]=o[2],h|=l&T?0:F);var q=o[3];if(q){var C=s[3];s[3]=C?xf(C,q,o[4]):q,s[4]=C?Cr(s[3],g):o[4]}return q=o[5],q&&(C=s[5],s[5]=C?Rf(C,q,o[6]):q,s[6]=C?Cr(s[5],g):o[6]),q=o[7],q&&(s[7]=q),f&R&&(s[8]=s[8]==null?o[8]:Hn(s[8],o[8])),s[9]==null&&(s[9]=o[9]),s[0]=o[0],s[1]=h,s}function P0(s){var o=[];if(s!=null)for(var l in rn(s))o.push(l);return o}function M0(s){return vo.call(s)}function Yf(s,o,l){return o=Nn(o===n?s.length-1:o,0),function(){for(var f=arguments,h=-1,S=Nn(f.length-o,0),P=K(S);++h<S;)P[h]=f[o+h];h=-1;for(var q=K(o+1);++h<o;)q[h]=f[h];return q[o]=l(P),mt(s,this,q)}}function zf(s,o){return o.length<2?s:la(s,Rt(o,0,-1))}function B0(s,o){for(var l=s.length,f=Hn(o.length,l),h=rt(s);f--;){var S=o[f];s[f]=Or(S,l)?h[S]:n}return s}function Kl(s,o){if(!(o==="constructor"&&typeof s[o]=="function")&&o!="__proto__")return s[o]}var Kf=Zf(vf),xs=Xk||function(s,o){return Cn.setTimeout(s,o)},Xl=Zf(a0);function Xf(s,o,l){var f=o+"";return Xl(s,O0(f,q0(T0(f),l)))}function Zf(s){var o=0,l=0;return function(){var f=eb(),h=L-(f-l);if(l=f,h>0){if(++o>=W)return arguments[0]}else o=0;return s.apply(n,arguments)}}function Ho(s,o){var l=-1,f=s.length,h=f-1;for(o=o===n?f:o;++l<o;){var S=Al(l,h),P=s[S];s[S]=s[l],s[l]=P}return s.length=o,s}var Qf=N0(function(s){var o=[];return s.charCodeAt(0)===46&&o.push(""),s.replace(el,function(l,f,h,S){o.push(h?S.replace(Pv,"$1"):f||l)}),o});function nr(s){if(typeof s=="string"||ht(s))return s;var o=s+"";return o=="0"&&1/s==-1/0?"-0":o}function da(s){if(s!=null){try{return yo.call(s)}catch{}try{return s+""}catch{}}return""}function q0(s,o){return Et(Ge,function(l){var f="_."+l[0];o&l[1]&&!fo(s,f)&&s.push(f)}),s.sort()}function Jf(s){if(s instanceof Be)return s.clone();var o=new Dt(s.__wrapped__,s.__chain__);return o.__actions__=rt(s.__actions__),o.__index__=s.__index__,o.__values__=s.__values__,o}function j0(s,o,l){(l?zn(s,o,l):o===n)?o=1:o=Nn(De(o),0);var f=s==null?0:s.length;if(!f||o<1)return[];for(var h=0,S=0,P=K(So(f/o));h<f;)P[S++]=Rt(s,h,h+=o);return P}function I0(s){for(var o=-1,l=s==null?0:s.length,f=0,h=[];++o<l;){var S=s[o];S&&(h[f++]=S)}return h}function C0(){var s=arguments.length;if(!s)return[];for(var o=K(s-1),l=arguments[0],f=s;f--;)o[f-1]=arguments[f];return Ir(Oe(l)?rt(l):[l],Ln(o,1))}var L0=Fe(function(s,o){return _n(s)?_s(s,Ln(o,1,_n,!0)):[]}),$0=Fe(function(s,o){var l=Ft(o);return _n(l)&&(l=n),_n(s)?_s(s,Ln(o,1,_n,!0),be(l,2)):[]}),H0=Fe(function(s,o){var l=Ft(o);return _n(l)&&(l=n),_n(s)?_s(s,Ln(o,1,_n,!0),n,l):[]});function V0(s,o,l){var f=s==null?0:s.length;return f?(o=l||o===n?1:De(o),Rt(s,o<0?0:o,f)):[]}function U0(s,o,l){var f=s==null?0:s.length;return f?(o=l||o===n?1:De(o),o=f-o,Rt(s,0,o<0?0:o)):[]}function W0(s,o){return s&&s.length?Mo(s,be(o,3),!0,!0):[]}function G0(s,o){return s&&s.length?Mo(s,be(o,3),!0):[]}function Y0(s,o,l,f){var h=s==null?0:s.length;return h?(l&&typeof l!="number"&&zn(s,o,l)&&(l=0,f=h),Cb(s,o,l,f)):[]}function em(s,o,l){var f=s==null?0:s.length;if(!f)return-1;var h=l==null?0:De(l);return h<0&&(h=Nn(f+h,0)),mo(s,be(o,3),h)}function nm(s,o,l){var f=s==null?0:s.length;if(!f)return-1;var h=f-1;return l!==n&&(h=De(l),h=l<0?Nn(f+h,0):Hn(h,f-1)),mo(s,be(o,3),h,!0)}function tm(s){var o=s==null?0:s.length;return o?Ln(s,1):[]}function z0(s){var o=s==null?0:s.length;return o?Ln(s,J):[]}function K0(s,o){var l=s==null?0:s.length;return l?(o=o===n?1:De(o),Ln(s,o)):[]}function X0(s){for(var o=-1,l=s==null?0:s.length,f={};++o<l;){var h=s[o];f[h[0]]=h[1]}return f}function rm(s){return s&&s.length?s[0]:n}function Z0(s,o,l){var f=s==null?0:s.length;if(!f)return-1;var h=l==null?0:De(l);return h<0&&(h=Nn(f+h,0)),Ra(s,o,h)}function Q0(s){var o=s==null?0:s.length;return o?Rt(s,0,-1):[]}var J0=Fe(function(s){var o=cn(s,jl);return o.length&&o[0]===s[0]?Dl(o):[]}),ew=Fe(function(s){var o=Ft(s),l=cn(s,jl);return o===Ft(l)?o=n:l.pop(),l.length&&l[0]===s[0]?Dl(l,be(o,2)):[]}),nw=Fe(function(s){var o=Ft(s),l=cn(s,jl);return o=typeof o=="function"?o:n,o&&l.pop(),l.length&&l[0]===s[0]?Dl(l,n,o):[]});function tw(s,o){return s==null?"":Qk.call(s,o)}function Ft(s){var o=s==null?0:s.length;return o?s[o-1]:n}function rw(s,o,l){var f=s==null?0:s.length;if(!f)return-1;var h=f;return l!==n&&(h=De(l),h=h<0?Nn(f+h,0):Hn(h,f-1)),o===o?qk(s,o,h):mo(s,qc,h,!0)}function aw(s,o){return s&&s.length?gf(s,De(o)):n}var sw=Fe(am);function am(s,o){return s&&s.length&&o&&o.length?Nl(s,o):s}function ow(s,o,l){return s&&s.length&&o&&o.length?Nl(s,o,be(l,2)):s}function iw(s,o,l){return s&&s.length&&o&&o.length?Nl(s,o,n,l):s}var lw=Er(function(s,o){var l=s==null?0:s.length,f=Tl(s,o);return yf(s,cn(o,function(h){return Or(h,l)?+h:h}).sort(Df)),f});function uw(s,o){var l=[];if(!(s&&s.length))return l;var f=-1,h=[],S=s.length;for(o=be(o,3);++f<S;){var P=s[f];o(P,f,s)&&(l.push(P),h.push(f))}return yf(s,h),l}function Zl(s){return s==null?s:tb.call(s)}function dw(s,o,l){var f=s==null?0:s.length;return f?(l&&typeof l!="number"&&zn(s,o,l)?(o=0,l=f):(o=o==null?0:De(o),l=l===n?f:De(l)),Rt(s,o,l)):[]}function cw(s,o){return Po(s,o)}function fw(s,o,l){return Ml(s,o,be(l,2))}function mw(s,o){var l=s==null?0:s.length;if(l){var f=Po(s,o);if(f<l&&$t(s[f],o))return f}return-1}function gw(s,o){return Po(s,o,!0)}function pw(s,o,l){return Ml(s,o,be(l,2),!0)}function hw(s,o){var l=s==null?0:s.length;if(l){var f=Po(s,o,!0)-1;if($t(s[f],o))return f}return-1}function yw(s){return s&&s.length?kf(s):[]}function vw(s,o){return s&&s.length?kf(s,be(o,2)):[]}function kw(s){var o=s==null?0:s.length;return o?Rt(s,1,o):[]}function bw(s,o,l){return s&&s.length?(o=l||o===n?1:De(o),Rt(s,0,o<0?0:o)):[]}function ww(s,o,l){var f=s==null?0:s.length;return f?(o=l||o===n?1:De(o),o=f-o,Rt(s,o<0?0:o,f)):[]}function _w(s,o){return s&&s.length?Mo(s,be(o,3),!1,!0):[]}function Tw(s,o){return s&&s.length?Mo(s,be(o,3)):[]}var Sw=Fe(function(s){return Hr(Ln(s,1,_n,!0))}),Ew=Fe(function(s){var o=Ft(s);return _n(o)&&(o=n),Hr(Ln(s,1,_n,!0),be(o,2))}),Ow=Fe(function(s){var o=Ft(s);return o=typeof o=="function"?o:n,Hr(Ln(s,1,_n,!0),n,o)});function Dw(s){return s&&s.length?Hr(s):[]}function xw(s,o){return s&&s.length?Hr(s,be(o,2)):[]}function Rw(s,o){return o=typeof o=="function"?o:n,s&&s.length?Hr(s,n,o):[]}function Ql(s){if(!(s&&s.length))return[];var o=0;return s=jr(s,function(l){if(_n(l))return o=Nn(l.length,o),!0}),pl(o,function(l){return cn(s,fl(l))})}function sm(s,o){if(!(s&&s.length))return[];var l=Ql(s);return o==null?l:cn(l,function(f){return mt(o,n,f)})}var Fw=Fe(function(s,o){return _n(s)?_s(s,o):[]}),Nw=Fe(function(s){return ql(jr(s,_n))}),Aw=Fe(function(s){var o=Ft(s);return _n(o)&&(o=n),ql(jr(s,_n),be(o,2))}),Pw=Fe(function(s){var o=Ft(s);return o=typeof o=="function"?o:n,ql(jr(s,_n),n,o)}),Mw=Fe(Ql);function Bw(s,o){return Tf(s||[],o||[],ws)}function qw(s,o){return Tf(s||[],o||[],Es)}var jw=Fe(function(s){var o=s.length,l=o>1?s[o-1]:n;return l=typeof l=="function"?(s.pop(),l):n,sm(s,l)});function om(s){var o=_(s);return o.__chain__=!0,o}function Iw(s,o){return o(s),s}function Vo(s,o){return o(s)}var Cw=Er(function(s){var o=s.length,l=o?s[0]:0,f=this.__wrapped__,h=function(S){return Tl(S,s)};return o>1||this.__actions__.length||!(f instanceof Be)||!Or(l)?this.thru(h):(f=f.slice(l,+l+(o?1:0)),f.__actions__.push({func:Vo,args:[h],thisArg:n}),new Dt(f,this.__chain__).thru(function(S){return o&&!S.length&&S.push(n),S}))});function Lw(){return om(this)}function $w(){return new Dt(this.value(),this.__chain__)}function Hw(){this.__values__===n&&(this.__values__=bm(this.value()));var s=this.__index__>=this.__values__.length,o=s?n:this.__values__[this.__index__++];return{done:s,value:o}}function Vw(){return this}function Uw(s){for(var o,l=this;l instanceof xo;){var f=Jf(l);f.__index__=0,f.__values__=n,o?h.__wrapped__=f:o=f;var h=f;l=l.__wrapped__}return h.__wrapped__=s,o}function Ww(){var s=this.__wrapped__;if(s instanceof Be){var o=s;return this.__actions__.length&&(o=new Be(this)),o=o.reverse(),o.__actions__.push({func:Vo,args:[Zl],thisArg:n}),new Dt(o,this.__chain__)}return this.thru(Zl)}function Gw(){return _f(this.__wrapped__,this.__actions__)}var Yw=Bo(function(s,o,l){Xe.call(s,l)?++s[l]:Tr(s,l,1)});function zw(s,o,l){var f=Oe(s)?Mc:Ib;return l&&zn(s,o,l)&&(o=n),f(s,be(o,3))}function Kw(s,o){var l=Oe(s)?jr:af;return l(s,be(o,3))}var Xw=Pf(em),Zw=Pf(nm);function Qw(s,o){return Ln(Uo(s,o),1)}function Jw(s,o){return Ln(Uo(s,o),J)}function e_(s,o,l){return l=l===n?1:De(l),Ln(Uo(s,o),l)}function im(s,o){var l=Oe(s)?Et:$r;return l(s,be(o,3))}function lm(s,o){var l=Oe(s)?kk:rf;return l(s,be(o,3))}var n_=Bo(function(s,o,l){Xe.call(s,l)?s[l].push(o):Tr(s,l,[o])});function t_(s,o,l,f){s=at(s)?s:$a(s),l=l&&!f?De(l):0;var h=s.length;return l<0&&(l=Nn(h+l,0)),Ko(s)?l<=h&&s.indexOf(o,l)>-1:!!h&&Ra(s,o,l)>-1}var r_=Fe(function(s,o,l){var f=-1,h=typeof o=="function",S=at(s)?K(s.length):[];return $r(s,function(P){S[++f]=h?mt(o,P,l):Ts(P,o,l)}),S}),a_=Bo(function(s,o,l){Tr(s,l,o)});function Uo(s,o){var l=Oe(s)?cn:cf;return l(s,be(o,3))}function s_(s,o,l,f){return s==null?[]:(Oe(o)||(o=o==null?[]:[o]),l=f?n:l,Oe(l)||(l=l==null?[]:[l]),pf(s,o,l))}var o_=Bo(function(s,o,l){s[l?0:1].push(o)},function(){return[[],[]]});function i_(s,o,l){var f=Oe(s)?dl:Ic,h=arguments.length<3;return f(s,be(o,4),l,h,$r)}function l_(s,o,l){var f=Oe(s)?bk:Ic,h=arguments.length<3;return f(s,be(o,4),l,h,rf)}function u_(s,o){var l=Oe(s)?jr:af;return l(s,Yo(be(o,3)))}function d_(s){var o=Oe(s)?Jc:t0;return o(s)}function c_(s,o,l){(l?zn(s,o,l):o===n)?o=1:o=De(o);var f=Oe(s)?Pb:r0;return f(s,o)}function f_(s){var o=Oe(s)?Mb:s0;return o(s)}function m_(s){if(s==null)return 0;if(at(s))return Ko(s)?Na(s):s.length;var o=Vn(s);return o==tn||o==H?s.size:Rl(s).length}function g_(s,o,l){var f=Oe(s)?cl:o0;return l&&zn(s,o,l)&&(o=n),f(s,be(o,3))}var p_=Fe(function(s,o){if(s==null)return[];var l=o.length;return l>1&&zn(s,o[0],o[1])?o=[]:l>2&&zn(o[0],o[1],o[2])&&(o=[o[0]]),pf(s,Ln(o,1),[])}),Wo=Kk||function(){return Cn.Date.now()};function h_(s,o){if(typeof o!="function")throw new Ot(u);return s=De(s),function(){if(--s<1)return o.apply(this,arguments)}}function um(s,o,l){return o=l?n:o,o=s&&o==null?s.length:o,Sr(s,R,n,n,n,n,o)}function dm(s,o){var l;if(typeof o!="function")throw new Ot(u);return s=De(s),function(){return--s>0&&(l=o.apply(this,arguments)),s<=1&&(o=n),l}}var Jl=Fe(function(s,o,l){var f=T;if(l.length){var h=Cr(l,Ca(Jl));f|=k}return Sr(s,f,o,l,h)}),cm=Fe(function(s,o,l){var f=T|x;if(l.length){var h=Cr(l,Ca(cm));f|=k}return Sr(o,f,s,l,h)});function fm(s,o,l){o=l?n:o;var f=Sr(s,w,n,n,n,n,n,o);return f.placeholder=fm.placeholder,f}function mm(s,o,l){o=l?n:o;var f=Sr(s,M,n,n,n,n,n,o);return f.placeholder=mm.placeholder,f}function gm(s,o,l){var f,h,S,P,q,C,ee=0,ne=!1,te=!1,ue=!0;if(typeof s!="function")throw new Ot(u);o=Nt(o)||0,gn(l)&&(ne=!!l.leading,te="maxWait"in l,S=te?Nn(Nt(l.maxWait)||0,o):S,ue="trailing"in l?!!l.trailing:ue);function pe(Tn){var Ht=f,Rr=h;return f=h=n,ee=Tn,P=s.apply(Rr,Ht),P}function we(Tn){return ee=Tn,q=xs(Pe,o),ne?pe(Tn):P}function xe(Tn){var Ht=Tn-C,Rr=Tn-ee,Pm=o-Ht;return te?Hn(Pm,S-Rr):Pm}function _e(Tn){var Ht=Tn-C,Rr=Tn-ee;return C===n||Ht>=o||Ht<0||te&&Rr>=S}function Pe(){var Tn=Wo();if(_e(Tn))return je(Tn);q=xs(Pe,xe(Tn))}function je(Tn){return q=n,ue&&f?pe(Tn):(f=h=n,P)}function yt(){q!==n&&Sf(q),ee=0,f=C=h=q=n}function Kn(){return q===n?P:je(Wo())}function vt(){var Tn=Wo(),Ht=_e(Tn);if(f=arguments,h=this,C=Tn,Ht){if(q===n)return we(C);if(te)return Sf(q),q=xs(Pe,o),pe(C)}return q===n&&(q=xs(Pe,o)),P}return vt.cancel=yt,vt.flush=Kn,vt}var y_=Fe(function(s,o){return tf(s,1,o)}),v_=Fe(function(s,o,l){return tf(s,Nt(o)||0,l)});function k_(s){return Sr(s,j)}function Go(s,o){if(typeof s!="function"||o!=null&&typeof o!="function")throw new Ot(u);var l=function(){var f=arguments,h=o?o.apply(this,f):f[0],S=l.cache;if(S.has(h))return S.get(h);var P=s.apply(this,f);return l.cache=S.set(h,P)||S,P};return l.cache=new(Go.Cache||_r),l}Go.Cache=_r;function Yo(s){if(typeof s!="function")throw new Ot(u);return function(){var o=arguments;switch(o.length){case 0:return!s.call(this);case 1:return!s.call(this,o[0]);case 2:return!s.call(this,o[0],o[1]);case 3:return!s.call(this,o[0],o[1],o[2])}return!s.apply(this,o)}}function b_(s){return dm(2,s)}var w_=i0(function(s,o){o=o.length==1&&Oe(o[0])?cn(o[0],gt(be())):cn(Ln(o,1),gt(be()));var l=o.length;return Fe(function(f){for(var h=-1,S=Hn(f.length,l);++h<S;)f[h]=o[h].call(this,f[h]);return mt(s,this,f)})}),eu=Fe(function(s,o){var l=Cr(o,Ca(eu));return Sr(s,k,n,o,l)}),pm=Fe(function(s,o){var l=Cr(o,Ca(pm));return Sr(s,N,n,o,l)}),__=Er(function(s,o){return Sr(s,A,n,n,n,o)});function T_(s,o){if(typeof s!="function")throw new Ot(u);return o=o===n?o:De(o),Fe(s,o)}function S_(s,o){if(typeof s!="function")throw new Ot(u);return o=o==null?0:Nn(De(o),0),Fe(function(l){var f=l[o],h=Ur(l,0,o);return f&&Ir(h,f),mt(s,this,h)})}function E_(s,o,l){var f=!0,h=!0;if(typeof s!="function")throw new Ot(u);return gn(l)&&(f="leading"in l?!!l.leading:f,h="trailing"in l?!!l.trailing:h),gm(s,o,{leading:f,maxWait:o,trailing:h})}function O_(s){return um(s,1)}function D_(s,o){return eu(Il(o),s)}function x_(){if(!arguments.length)return[];var s=arguments[0];return Oe(s)?s:[s]}function R_(s){return xt(s,v)}function F_(s,o){return o=typeof o=="function"?o:n,xt(s,v,o)}function N_(s){return xt(s,p|v)}function A_(s,o){return o=typeof o=="function"?o:n,xt(s,p|v,o)}function P_(s,o){return o==null||nf(s,o,Mn(o))}function $t(s,o){return s===o||s!==s&&o!==o}var M_=Co(Ol),B_=Co(function(s,o){return s>=o}),ca=lf(function(){return arguments}())?lf:function(s){return kn(s)&&Xe.call(s,"callee")&&!Yc.call(s,"callee")},Oe=K.isArray,q_=xc?gt(xc):Ub;function at(s){return s!=null&&zo(s.length)&&!Dr(s)}function _n(s){return kn(s)&&at(s)}function j_(s){return s===!0||s===!1||kn(s)&&Yn(s)==Ve}var Wr=Zk||cu,I_=Rc?gt(Rc):Wb;function C_(s){return kn(s)&&s.nodeType===1&&!Rs(s)}function L_(s){if(s==null)return!0;if(at(s)&&(Oe(s)||typeof s=="string"||typeof s.splice=="function"||Wr(s)||La(s)||ca(s)))return!s.length;var o=Vn(s);if(o==tn||o==H)return!s.size;if(Ds(s))return!Rl(s).length;for(var l in s)if(Xe.call(s,l))return!1;return!0}function $_(s,o){return Ss(s,o)}function H_(s,o,l){l=typeof l=="function"?l:n;var f=l?l(s,o):n;return f===n?Ss(s,o,n,l):!!f}function nu(s){if(!kn(s))return!1;var o=Yn(s);return o==on||o==nn||typeof s.message=="string"&&typeof s.name=="string"&&!Rs(s)}function V_(s){return typeof s=="number"&&Kc(s)}function Dr(s){if(!gn(s))return!1;var o=Yn(s);return o==mn||o==Rn||o==Le||o==nt}function hm(s){return typeof s=="number"&&s==De(s)}function zo(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Y}function gn(s){var o=typeof s;return s!=null&&(o=="object"||o=="function")}function kn(s){return s!=null&&typeof s=="object"}var ym=Fc?gt(Fc):Yb;function U_(s,o){return s===o||xl(s,o,Wl(o))}function W_(s,o,l){return l=typeof l=="function"?l:n,xl(s,o,Wl(o),l)}function G_(s){return vm(s)&&s!=+s}function Y_(s){if(F0(s))throw new Se(i);return uf(s)}function z_(s){return s===null}function K_(s){return s==null}function vm(s){return typeof s=="number"||kn(s)&&Yn(s)==Dn}function Rs(s){if(!kn(s)||Yn(s)!=wn)return!1;var o=wo(s);if(o===null)return!0;var l=Xe.call(o,"constructor")&&o.constructor;return typeof l=="function"&&l instanceof l&&yo.call(l)==Wk}var tu=Nc?gt(Nc):zb;function X_(s){return hm(s)&&s>=-9007199254740991&&s<=Y}var km=Ac?gt(Ac):Kb;function Ko(s){return typeof s=="string"||!Oe(s)&&kn(s)&&Yn(s)==X}function ht(s){return typeof s=="symbol"||kn(s)&&Yn(s)==le}var La=Pc?gt(Pc):Xb;function Z_(s){return s===n}function Q_(s){return kn(s)&&Vn(s)==ae}function J_(s){return kn(s)&&Yn(s)==ye}var e1=Co(Fl),n1=Co(function(s,o){return s<=o});function bm(s){if(!s)return[];if(at(s))return Ko(s)?Ct(s):rt(s);if(hs&&s[hs])return Pk(s[hs]());var o=Vn(s),l=o==tn?yl:o==H?go:$a;return l(s)}function xr(s){if(!s)return s===0?s:0;if(s=Nt(s),s===J||s===-1/0){var o=s<0?-1:1;return o*re}return s===s?s:0}function De(s){var o=xr(s),l=o%1;return o===o?l?o-l:o:0}function wm(s){return s?ia(De(s),0,de):0}function Nt(s){if(typeof s=="number")return s;if(ht(s))return se;if(gn(s)){var o=typeof s.valueOf=="function"?s.valueOf():s;s=gn(o)?o+"":o}if(typeof s!="string")return s===0?s:+s;s=Cc(s);var l=qv.test(s);return l||Iv.test(s)?hk(s.slice(2),l?2:8):Bv.test(s)?se:+s}function _m(s){return er(s,st(s))}function t1(s){return s?ia(De(s),-9007199254740991,Y):s===0?s:0}function Ye(s){return s==null?"":pt(s)}var r1=ja(function(s,o){if(Ds(o)||at(o)){er(o,Mn(o),s);return}for(var l in o)Xe.call(o,l)&&ws(s,l,o[l])}),Tm=ja(function(s,o){er(o,st(o),s)}),Xo=ja(function(s,o,l,f){er(o,st(o),s,f)}),a1=ja(function(s,o,l,f){er(o,Mn(o),s,f)}),s1=Er(Tl);function o1(s,o){var l=qa(s);return o==null?l:ef(l,o)}var i1=Fe(function(s,o){s=rn(s);var l=-1,f=o.length,h=f>2?o[2]:n;for(h&&zn(o[0],o[1],h)&&(f=1);++l<f;)for(var S=o[l],P=st(S),q=-1,C=P.length;++q<C;){var ee=P[q],ne=s[ee];(ne===n||$t(ne,Pa[ee])&&!Xe.call(s,ee))&&(s[ee]=S[ee])}return s}),l1=Fe(function(s){return s.push(n,Lf),mt(Sm,n,s)});function u1(s,o){return Bc(s,be(o,3),Jt)}function d1(s,o){return Bc(s,be(o,3),El)}function c1(s,o){return s==null?s:Sl(s,be(o,3),st)}function f1(s,o){return s==null?s:sf(s,be(o,3),st)}function m1(s,o){return s&&Jt(s,be(o,3))}function g1(s,o){return s&&El(s,be(o,3))}function p1(s){return s==null?[]:No(s,Mn(s))}function h1(s){return s==null?[]:No(s,st(s))}function ru(s,o,l){var f=s==null?n:la(s,o);return f===n?l:f}function y1(s,o){return s!=null&&Vf(s,o,Lb)}function au(s,o){return s!=null&&Vf(s,o,$b)}var v1=Bf(function(s,o,l){o!=null&&typeof o.toString!="function"&&(o=vo.call(o)),s[o]=l},ou(ot)),k1=Bf(function(s,o,l){o!=null&&typeof o.toString!="function"&&(o=vo.call(o)),Xe.call(s,o)?s[o].push(l):s[o]=[l]},be),b1=Fe(Ts);function Mn(s){return at(s)?Qc(s):Rl(s)}function st(s){return at(s)?Qc(s,!0):Zb(s)}function w1(s,o){var l={};return o=be(o,3),Jt(s,function(f,h,S){Tr(l,o(f,h,S),f)}),l}function _1(s,o){var l={};return o=be(o,3),Jt(s,function(f,h,S){Tr(l,h,o(f,h,S))}),l}var T1=ja(function(s,o,l){Ao(s,o,l)}),Sm=ja(function(s,o,l,f){Ao(s,o,l,f)}),S1=Er(function(s,o){var l={};if(s==null)return l;var f=!1;o=cn(o,function(S){return S=Vr(S,s),f||(f=S.length>1),S}),er(s,Vl(s),l),f&&(l=xt(l,p|y|v,v0));for(var h=o.length;h--;)Bl(l,o[h]);return l});function E1(s,o){return Em(s,Yo(be(o)))}var O1=Er(function(s,o){return s==null?{}:Jb(s,o)});function Em(s,o){if(s==null)return{};var l=cn(Vl(s),function(f){return[f]});return o=be(o),hf(s,l,function(f,h){return o(f,h[0])})}function D1(s,o,l){o=Vr(o,s);var f=-1,h=o.length;for(h||(h=1,s=n);++f<h;){var S=s==null?n:s[nr(o[f])];S===n&&(f=h,S=l),s=Dr(S)?S.call(s):S}return s}function x1(s,o,l){return s==null?s:Es(s,o,l)}function R1(s,o,l,f){return f=typeof f=="function"?f:n,s==null?s:Es(s,o,l,f)}var Om=If(Mn),Dm=If(st);function F1(s,o,l){var f=Oe(s),h=f||Wr(s)||La(s);if(o=be(o,4),l==null){var S=s&&s.constructor;h?l=f?new S:[]:gn(s)?l=Dr(S)?qa(wo(s)):{}:l={}}return(h?Et:Jt)(s,function(P,q,C){return o(l,P,q,C)}),l}function N1(s,o){return s==null?!0:Bl(s,o)}function A1(s,o,l){return s==null?s:wf(s,o,Il(l))}function P1(s,o,l,f){return f=typeof f=="function"?f:n,s==null?s:wf(s,o,Il(l),f)}function $a(s){return s==null?[]:hl(s,Mn(s))}function M1(s){return s==null?[]:hl(s,st(s))}function B1(s,o,l){return l===n&&(l=o,o=n),l!==n&&(l=Nt(l),l=l===l?l:0),o!==n&&(o=Nt(o),o=o===o?o:0),ia(Nt(s),o,l)}function q1(s,o,l){return o=xr(o),l===n?(l=o,o=0):l=xr(l),s=Nt(s),Hb(s,o,l)}function j1(s,o,l){if(l&&typeof l!="boolean"&&zn(s,o,l)&&(o=l=n),l===n&&(typeof o=="boolean"?(l=o,o=n):typeof s=="boolean"&&(l=s,s=n)),s===n&&o===n?(s=0,o=1):(s=xr(s),o===n?(o=s,s=0):o=xr(o)),s>o){var f=s;s=o,o=f}if(l||s%1||o%1){var h=Xc();return Hn(s+h*(o-s+pk("1e-"+((h+"").length-1))),o)}return Al(s,o)}var I1=Ia(function(s,o,l){return o=o.toLowerCase(),s+(l?xm(o):o)});function xm(s){return su(Ye(s).toLowerCase())}function Rm(s){return s=Ye(s),s&&s.replace(Lv,xk).replace(sk,"")}function C1(s,o,l){s=Ye(s),o=pt(o);var f=s.length;l=l===n?f:ia(De(l),0,f);var h=l;return l-=o.length,l>=0&&s.slice(l,h)==o}function L1(s){return s=Ye(s),s&&Da.test(s)?s.replace(It,Rk):s}function $1(s){return s=Ye(s),s&&gs.test(s)?s.replace(ta,"\\$&"):s}var H1=Ia(function(s,o,l){return s+(l?"-":"")+o.toLowerCase()}),V1=Ia(function(s,o,l){return s+(l?" ":"")+o.toLowerCase()}),U1=Af("toLowerCase");function W1(s,o,l){s=Ye(s),o=De(o);var f=o?Na(s):0;if(!o||f>=o)return s;var h=(o-f)/2;return Io(Eo(h),l)+s+Io(So(h),l)}function G1(s,o,l){s=Ye(s),o=De(o);var f=o?Na(s):0;return o&&f<o?s+Io(o-f,l):s}function Y1(s,o,l){s=Ye(s),o=De(o);var f=o?Na(s):0;return o&&f<o?Io(o-f,l)+s:s}function z1(s,o,l){return l||o==null?o=0:o&&(o=+o),nb(Ye(s).replace(nl,""),o||0)}function K1(s,o,l){return(l?zn(s,o,l):o===n)?o=1:o=De(o),Pl(Ye(s),o)}function X1(){var s=arguments,o=Ye(s[0]);return s.length<3?o:o.replace(s[1],s[2])}var Z1=Ia(function(s,o,l){return s+(l?"_":"")+o.toLowerCase()});function Q1(s,o,l){return l&&typeof l!="number"&&zn(s,o,l)&&(o=l=n),l=l===n?de:l>>>0,l?(s=Ye(s),s&&(typeof o=="string"||o!=null&&!tu(o))&&(o=pt(o),!o&&Fa(s))?Ur(Ct(s),0,l):s.split(o,l)):[]}var J1=Ia(function(s,o,l){return s+(l?" ":"")+su(o)});function eT(s,o,l){return s=Ye(s),l=l==null?0:ia(De(l),0,s.length),o=pt(o),s.slice(l,l+o.length)==o}function nT(s,o,l){var f=_.templateSettings;l&&zn(s,o,l)&&(o=n),s=Ye(s),o=Xo({},o,f,Cf);var h=Xo({},o.imports,f.imports,Cf),S=Mn(h),P=hl(h,S),q,C,ee=0,ne=o.interpolate||lo,te="__p += '",ue=vl((o.escape||lo).source+"|"+ne.source+"|"+(ne===$e?Mv:lo).source+"|"+(o.evaluate||lo).source+"|$","g"),pe="//# sourceURL="+(Xe.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++dk+"]")+`
`;s.replace(ue,function(_e,Pe,je,yt,Kn,vt){return je||(je=yt),te+=s.slice(ee,vt).replace($v,Fk),Pe&&(q=!0,te+=`' +
__e(`+Pe+`) +
'`),Kn&&(C=!0,te+=`';
`+Kn+`;
__p += '`),je&&(te+=`' +
((__t = (`+je+`)) == null ? '' : __t) +
'`),ee=vt+_e.length,_e}),te+=`';
`;var we=Xe.call(o,"variable")&&o.variable;if(!we)te=`with (obj) {
`+te+`
}
`;else if(Av.test(we))throw new Se(d);te=(C?te.replace(na,""):te).replace(Re,"$1").replace(an,"$1;"),te="function("+(we||"obj")+`) {
`+(we?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(q?", __e = _.escape":"")+(C?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+te+`return __p
}`;var xe=Nm(function(){return Ue(S,pe+"return "+te).apply(n,P)});if(xe.source=te,nu(xe))throw xe;return xe}function tT(s){return Ye(s).toLowerCase()}function rT(s){return Ye(s).toUpperCase()}function aT(s,o,l){if(s=Ye(s),s&&(l||o===n))return Cc(s);if(!s||!(o=pt(o)))return s;var f=Ct(s),h=Ct(o),S=Lc(f,h),P=$c(f,h)+1;return Ur(f,S,P).join("")}function sT(s,o,l){if(s=Ye(s),s&&(l||o===n))return s.slice(0,Vc(s)+1);if(!s||!(o=pt(o)))return s;var f=Ct(s),h=$c(f,Ct(o))+1;return Ur(f,0,h).join("")}function oT(s,o,l){if(s=Ye(s),s&&(l||o===n))return s.replace(nl,"");if(!s||!(o=pt(o)))return s;var f=Ct(s),h=Lc(f,Ct(o));return Ur(f,h).join("")}function iT(s,o){var l=z,f=V;if(gn(o)){var h="separator"in o?o.separator:h;l="length"in o?De(o.length):l,f="omission"in o?pt(o.omission):f}s=Ye(s);var S=s.length;if(Fa(s)){var P=Ct(s);S=P.length}if(l>=S)return s;var q=l-Na(f);if(q<1)return f;var C=P?Ur(P,0,q).join(""):s.slice(0,q);if(h===n)return C+f;if(P&&(q+=C.length-q),tu(h)){if(s.slice(q).search(h)){var ee,ne=C;for(h.global||(h=vl(h.source,Ye(ic.exec(h))+"g")),h.lastIndex=0;ee=h.exec(ne);)var te=ee.index;C=C.slice(0,te===n?q:te)}}else if(s.indexOf(pt(h),q)!=q){var ue=C.lastIndexOf(h);ue>-1&&(C=C.slice(0,ue))}return C+f}function lT(s){return s=Ye(s),s&&ft.test(s)?s.replace(Ke,jk):s}var uT=Ia(function(s,o,l){return s+(l?" ":"")+o.toUpperCase()}),su=Af("toUpperCase");function Fm(s,o,l){return s=Ye(s),o=l?n:o,o===n?Ak(s)?Lk(s):Tk(s):s.match(o)||[]}var Nm=Fe(function(s,o){try{return mt(s,n,o)}catch(l){return nu(l)?l:new Se(l)}}),dT=Er(function(s,o){return Et(o,function(l){l=nr(l),Tr(s,l,Jl(s[l],s))}),s});function cT(s){var o=s==null?0:s.length,l=be();return s=o?cn(s,function(f){if(typeof f[1]!="function")throw new Ot(u);return[l(f[0]),f[1]]}):[],Fe(function(f){for(var h=-1;++h<o;){var S=s[h];if(mt(S[0],this,f))return mt(S[1],this,f)}})}function fT(s){return jb(xt(s,p))}function ou(s){return function(){return s}}function mT(s,o){return s==null||s!==s?o:s}var gT=Mf(),pT=Mf(!0);function ot(s){return s}function iu(s){return df(typeof s=="function"?s:xt(s,p))}function hT(s){return ff(xt(s,p))}function yT(s,o){return mf(s,xt(o,p))}var vT=Fe(function(s,o){return function(l){return Ts(l,s,o)}}),kT=Fe(function(s,o){return function(l){return Ts(s,l,o)}});function lu(s,o,l){var f=Mn(o),h=No(o,f);l==null&&!(gn(o)&&(h.length||!f.length))&&(l=o,o=s,s=this,h=No(o,Mn(o)));var S=!(gn(l)&&"chain"in l)||!!l.chain,P=Dr(s);return Et(h,function(q){var C=o[q];s[q]=C,P&&(s.prototype[q]=function(){var ee=this.__chain__;if(S||ee){var ne=s(this.__wrapped__),te=ne.__actions__=rt(this.__actions__);return te.push({func:C,args:arguments,thisArg:s}),ne.__chain__=ee,ne}return C.apply(s,Ir([this.value()],arguments))})}),s}function bT(){return Cn._===this&&(Cn._=Gk),this}function uu(){}function wT(s){return s=De(s),Fe(function(o){return gf(o,s)})}var _T=Ll(cn),TT=Ll(Mc),ST=Ll(cl);function Am(s){return Yl(s)?fl(nr(s)):e0(s)}function ET(s){return function(o){return s==null?n:la(s,o)}}var OT=qf(),DT=qf(!0);function du(){return[]}function cu(){return!1}function xT(){return{}}function RT(){return""}function FT(){return!0}function NT(s,o){if(s=De(s),s<1||s>Y)return[];var l=de,f=Hn(s,de);o=be(o),s-=de;for(var h=pl(f,o);++l<s;)o(l);return h}function AT(s){return Oe(s)?cn(s,nr):ht(s)?[s]:rt(Qf(Ye(s)))}function PT(s){var o=++Uk;return Ye(s)+o}var MT=jo(function(s,o){return s+o},0),BT=$l("ceil"),qT=jo(function(s,o){return s/o},1),jT=$l("floor");function IT(s){return s&&s.length?Fo(s,ot,Ol):n}function CT(s,o){return s&&s.length?Fo(s,be(o,2),Ol):n}function LT(s){return jc(s,ot)}function $T(s,o){return jc(s,be(o,2))}function HT(s){return s&&s.length?Fo(s,ot,Fl):n}function VT(s,o){return s&&s.length?Fo(s,be(o,2),Fl):n}var UT=jo(function(s,o){return s*o},1),WT=$l("round"),GT=jo(function(s,o){return s-o},0);function YT(s){return s&&s.length?gl(s,ot):0}function zT(s,o){return s&&s.length?gl(s,be(o,2)):0}return _.after=h_,_.ary=um,_.assign=r1,_.assignIn=Tm,_.assignInWith=Xo,_.assignWith=a1,_.at=s1,_.before=dm,_.bind=Jl,_.bindAll=dT,_.bindKey=cm,_.castArray=x_,_.chain=om,_.chunk=j0,_.compact=I0,_.concat=C0,_.cond=cT,_.conforms=fT,_.constant=ou,_.countBy=Yw,_.create=o1,_.curry=fm,_.curryRight=mm,_.debounce=gm,_.defaults=i1,_.defaultsDeep=l1,_.defer=y_,_.delay=v_,_.difference=L0,_.differenceBy=$0,_.differenceWith=H0,_.drop=V0,_.dropRight=U0,_.dropRightWhile=W0,_.dropWhile=G0,_.fill=Y0,_.filter=Kw,_.flatMap=Qw,_.flatMapDeep=Jw,_.flatMapDepth=e_,_.flatten=tm,_.flattenDeep=z0,_.flattenDepth=K0,_.flip=k_,_.flow=gT,_.flowRight=pT,_.fromPairs=X0,_.functions=p1,_.functionsIn=h1,_.groupBy=n_,_.initial=Q0,_.intersection=J0,_.intersectionBy=ew,_.intersectionWith=nw,_.invert=v1,_.invertBy=k1,_.invokeMap=r_,_.iteratee=iu,_.keyBy=a_,_.keys=Mn,_.keysIn=st,_.map=Uo,_.mapKeys=w1,_.mapValues=_1,_.matches=hT,_.matchesProperty=yT,_.memoize=Go,_.merge=T1,_.mergeWith=Sm,_.method=vT,_.methodOf=kT,_.mixin=lu,_.negate=Yo,_.nthArg=wT,_.omit=S1,_.omitBy=E1,_.once=b_,_.orderBy=s_,_.over=_T,_.overArgs=w_,_.overEvery=TT,_.overSome=ST,_.partial=eu,_.partialRight=pm,_.partition=o_,_.pick=O1,_.pickBy=Em,_.property=Am,_.propertyOf=ET,_.pull=sw,_.pullAll=am,_.pullAllBy=ow,_.pullAllWith=iw,_.pullAt=lw,_.range=OT,_.rangeRight=DT,_.rearg=__,_.reject=u_,_.remove=uw,_.rest=T_,_.reverse=Zl,_.sampleSize=c_,_.set=x1,_.setWith=R1,_.shuffle=f_,_.slice=dw,_.sortBy=p_,_.sortedUniq=yw,_.sortedUniqBy=vw,_.split=Q1,_.spread=S_,_.tail=kw,_.take=bw,_.takeRight=ww,_.takeRightWhile=_w,_.takeWhile=Tw,_.tap=Iw,_.throttle=E_,_.thru=Vo,_.toArray=bm,_.toPairs=Om,_.toPairsIn=Dm,_.toPath=AT,_.toPlainObject=_m,_.transform=F1,_.unary=O_,_.union=Sw,_.unionBy=Ew,_.unionWith=Ow,_.uniq=Dw,_.uniqBy=xw,_.uniqWith=Rw,_.unset=N1,_.unzip=Ql,_.unzipWith=sm,_.update=A1,_.updateWith=P1,_.values=$a,_.valuesIn=M1,_.without=Fw,_.words=Fm,_.wrap=D_,_.xor=Nw,_.xorBy=Aw,_.xorWith=Pw,_.zip=Mw,_.zipObject=Bw,_.zipObjectDeep=qw,_.zipWith=jw,_.entries=Om,_.entriesIn=Dm,_.extend=Tm,_.extendWith=Xo,lu(_,_),_.add=MT,_.attempt=Nm,_.camelCase=I1,_.capitalize=xm,_.ceil=BT,_.clamp=B1,_.clone=R_,_.cloneDeep=N_,_.cloneDeepWith=A_,_.cloneWith=F_,_.conformsTo=P_,_.deburr=Rm,_.defaultTo=mT,_.divide=qT,_.endsWith=C1,_.eq=$t,_.escape=L1,_.escapeRegExp=$1,_.every=zw,_.find=Xw,_.findIndex=em,_.findKey=u1,_.findLast=Zw,_.findLastIndex=nm,_.findLastKey=d1,_.floor=jT,_.forEach=im,_.forEachRight=lm,_.forIn=c1,_.forInRight=f1,_.forOwn=m1,_.forOwnRight=g1,_.get=ru,_.gt=M_,_.gte=B_,_.has=y1,_.hasIn=au,_.head=rm,_.identity=ot,_.includes=t_,_.indexOf=Z0,_.inRange=q1,_.invoke=b1,_.isArguments=ca,_.isArray=Oe,_.isArrayBuffer=q_,_.isArrayLike=at,_.isArrayLikeObject=_n,_.isBoolean=j_,_.isBuffer=Wr,_.isDate=I_,_.isElement=C_,_.isEmpty=L_,_.isEqual=$_,_.isEqualWith=H_,_.isError=nu,_.isFinite=V_,_.isFunction=Dr,_.isInteger=hm,_.isLength=zo,_.isMap=ym,_.isMatch=U_,_.isMatchWith=W_,_.isNaN=G_,_.isNative=Y_,_.isNil=K_,_.isNull=z_,_.isNumber=vm,_.isObject=gn,_.isObjectLike=kn,_.isPlainObject=Rs,_.isRegExp=tu,_.isSafeInteger=X_,_.isSet=km,_.isString=Ko,_.isSymbol=ht,_.isTypedArray=La,_.isUndefined=Z_,_.isWeakMap=Q_,_.isWeakSet=J_,_.join=tw,_.kebabCase=H1,_.last=Ft,_.lastIndexOf=rw,_.lowerCase=V1,_.lowerFirst=U1,_.lt=e1,_.lte=n1,_.max=IT,_.maxBy=CT,_.mean=LT,_.meanBy=$T,_.min=HT,_.minBy=VT,_.stubArray=du,_.stubFalse=cu,_.stubObject=xT,_.stubString=RT,_.stubTrue=FT,_.multiply=UT,_.nth=aw,_.noConflict=bT,_.noop=uu,_.now=Wo,_.pad=W1,_.padEnd=G1,_.padStart=Y1,_.parseInt=z1,_.random=j1,_.reduce=i_,_.reduceRight=l_,_.repeat=K1,_.replace=X1,_.result=D1,_.round=WT,_.runInContext=I,_.sample=d_,_.size=m_,_.snakeCase=Z1,_.some=g_,_.sortedIndex=cw,_.sortedIndexBy=fw,_.sortedIndexOf=mw,_.sortedLastIndex=gw,_.sortedLastIndexBy=pw,_.sortedLastIndexOf=hw,_.startCase=J1,_.startsWith=eT,_.subtract=GT,_.sum=YT,_.sumBy=zT,_.template=nT,_.times=NT,_.toFinite=xr,_.toInteger=De,_.toLength=wm,_.toLower=tT,_.toNumber=Nt,_.toSafeInteger=t1,_.toString=Ye,_.toUpper=rT,_.trim=aT,_.trimEnd=sT,_.trimStart=oT,_.truncate=iT,_.unescape=lT,_.uniqueId=PT,_.upperCase=uT,_.upperFirst=su,_.each=im,_.eachRight=lm,_.first=rm,lu(_,function(){var s={};return Jt(_,function(o,l){Xe.call(_.prototype,l)||(s[l]=o)}),s}(),{chain:!1}),_.VERSION=t,Et(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){_[s].placeholder=_}),Et(["drop","take"],function(s,o){Be.prototype[s]=function(l){l=l===n?1:Nn(De(l),0);var f=this.__filtered__&&!o?new Be(this):this.clone();return f.__filtered__?f.__takeCount__=Hn(l,f.__takeCount__):f.__views__.push({size:Hn(l,de),type:s+(f.__dir__<0?"Right":"")}),f},Be.prototype[s+"Right"]=function(l){return this.reverse()[s](l).reverse()}}),Et(["filter","map","takeWhile"],function(s,o){var l=o+1,f=l==U||l==$;Be.prototype[s]=function(h){var S=this.clone();return S.__iteratees__.push({iteratee:be(h,3),type:l}),S.__filtered__=S.__filtered__||f,S}}),Et(["head","last"],function(s,o){var l="take"+(o?"Right":"");Be.prototype[s]=function(){return this[l](1).value()[0]}}),Et(["initial","tail"],function(s,o){var l="drop"+(o?"":"Right");Be.prototype[s]=function(){return this.__filtered__?new Be(this):this[l](1)}}),Be.prototype.compact=function(){return this.filter(ot)},Be.prototype.find=function(s){return this.filter(s).head()},Be.prototype.findLast=function(s){return this.reverse().find(s)},Be.prototype.invokeMap=Fe(function(s,o){return typeof s=="function"?new Be(this):this.map(function(l){return Ts(l,s,o)})}),Be.prototype.reject=function(s){return this.filter(Yo(be(s)))},Be.prototype.slice=function(s,o){s=De(s);var l=this;return l.__filtered__&&(s>0||o<0)?new Be(l):(s<0?l=l.takeRight(-s):s&&(l=l.drop(s)),o!==n&&(o=De(o),l=o<0?l.dropRight(-o):l.take(o-s)),l)},Be.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},Be.prototype.toArray=function(){return this.take(de)},Jt(Be.prototype,function(s,o){var l=/^(?:filter|find|map|reject)|While$/.test(o),f=/^(?:head|last)$/.test(o),h=_[f?"take"+(o=="last"?"Right":""):o],S=f||/^find/.test(o);h&&(_.prototype[o]=function(){var P=this.__wrapped__,q=f?[1]:arguments,C=P instanceof Be,ee=q[0],ne=C||Oe(P),te=function(Pe){var je=h.apply(_,Ir([Pe],q));return f&&ue?je[0]:je};ne&&l&&typeof ee=="function"&&ee.length!=1&&(C=ne=!1);var ue=this.__chain__,pe=!!this.__actions__.length,we=S&&!ue,xe=C&&!pe;if(!S&&ne){P=xe?P:new Be(this);var _e=s.apply(P,q);return _e.__actions__.push({func:Vo,args:[te],thisArg:n}),new Dt(_e,ue)}return we&&xe?s.apply(this,q):(_e=this.thru(te),we?f?_e.value()[0]:_e.value():_e)})}),Et(["pop","push","shift","sort","splice","unshift"],function(s){var o=po[s],l=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",f=/^(?:pop|shift)$/.test(s);_.prototype[s]=function(){var h=arguments;if(f&&!this.__chain__){var S=this.value();return o.apply(Oe(S)?S:[],h)}return this[l](function(P){return o.apply(Oe(P)?P:[],h)})}}),Jt(Be.prototype,function(s,o){var l=_[o];if(l){var f=l.name+"";Xe.call(Ba,f)||(Ba[f]=[]),Ba[f].push({name:o,func:l})}}),Ba[qo(n,x).name]=[{name:"wrapper",func:n}],Be.prototype.clone=lb,Be.prototype.reverse=ub,Be.prototype.value=db,_.prototype.at=Cw,_.prototype.chain=Lw,_.prototype.commit=$w,_.prototype.next=Hw,_.prototype.plant=Uw,_.prototype.reverse=Ww,_.prototype.toJSON=_.prototype.valueOf=_.prototype.value=Gw,_.prototype.first=_.prototype.head,hs&&(_.prototype[hs]=Vw),_},Aa=$k();ra?((ra.exports=Aa)._=Aa,il._=Aa):Cn._=Aa}).call(DB)}(Ls,Ls.exports)),Ls.exports}xB();_t(ro);const zy=O.forwardRef((e,r)=>Q.jsx(zt,{gap:"2",style:{display:"flex"},...e,ref:r}));zy.displayName="FaktaGruppe";zy.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Bu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Zg;function RB(){return Zg||(Zg=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var i="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(i=a(i,t.call(this,d)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var u="";for(var d in i)r.call(i,d)&&i[d]&&(u=a(u,this&&this[d]||d));return u}function a(i,u){return u?i?i+" "+u:i+u:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Bu)),Bu.exports}var FB=RB();const NB=Hp(FB),AB="_boks_c3bfh_1",PB="_harBorderLeft_c3bfh_8",MB="_harBorderTop_c3bfh_12",BB={boks:AB,harBorderLeft:PB,harBorderTop:MB};NB.bind(BB);var qu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Qg;function qB(){return Qg||(Qg=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var i="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(i=a(i,t(d)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var u="";for(var d in i)r.call(i,d)&&i[d]&&(u=a(u,d));return u}function a(i,u){return u?i?i+" "+u:i+u:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(qu)),qu.exports}qB();var jB=Object.defineProperty,IB=(e,r,n)=>r in e?jB(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Jg=(e,r,n)=>IB(e,typeof r!="symbol"?r+"":r,n);function Ky(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ep={exports:{}},Bs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function CB(){if(np)return Bs;np=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var u=null;if(i!==void 0&&(u=""+i),a.key!==void 0&&(u=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:u,ref:a!==void 0?a:null,props:i}}return Bs.Fragment=r,Bs.jsx=n,Bs.jsxs=n,Bs}var tp;function LB(){return tp||(tp=1,ep.exports=CB()),ep.exports}var Nr=LB();const $B="_autocompleteSuggestion__substring_mf7v0_1",HB="_autocompleteSuggestion__inner_mf7v0_4",qs={autocompleteSuggestion__substring:$B,autocompleteSuggestion__inner:HB,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12"};class VB extends b.Component{constructor(r){super(r),this.state={value:r.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:r}=this.props,{value:n}=this.state;r(n)}onMouseMove(){const{setSuggestionIndex:r,index:n}=this.props;r(n)}render(){const{match:r,active:n,avoidBlur:t,id:a}=this.props,{value:i}=this.state.value,u=i.toLowerCase().startsWith(r.toLowerCase());return Nr.jsx("li",{id:a,role:"option","aria-selected":n,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:u?Nr.jsxs("span",{className:`${qs.autocompleteSuggestion__inner} ${n?qs["autocompleteSuggestion--active"]:""}`,children:[i.substring(0,r.length),Nr.jsx("span",{className:qs.autocompleteSuggestion__substring,children:i.substring(r.length)})]}):Nr.jsx("span",{className:`${qs.autocompleteSuggestion__inner} ${n?qs["autocompleteSuggestion--active"]:""}`,children:i})})}}const UB="_autocomplete_9dlnp_1",WB="_autocomplete__suggestions_9dlnp_27",ju={autocomplete:UB,autocomplete__suggestions:WB,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31"};class bI extends b.Component{constructor(r){super(r),Jg(this,"input"),Jg(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=n=>{this.input=n},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:r}=this.state;r&&(clearTimeout(r),this.setState({blurDelay:null}))}onChange(r){const{onChange:n}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),n(r)}onSearchButtonClick(r){const{onSearchButtonClick:n}=this.props;r.preventDefault(),n&&n()}onKeyDown(r){const{shouldShowSuggestions:n}=this.state;let{activeSuggestionIndex:t}=this.state;const{suggestions:a}=this.props,i=t>-1;switch(this.setState({setAriaActiveDescendant:r.keyCode===38||r.keyCode===40}),r.keyCode){case 9:i&&n&&this.setValue(a[t]);break;case 13:i&&n?(r.preventDefault(),this.setValue(a[t])):n&&a.length===1?this.setValue(a[0]):this.setState({shouldShowSuggestions:!1});break;case 27:n&&a.length>0&&(r.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:n&&(r.preventDefault(),t=t-1===-2?-1:t-1,this.setState({activeSuggestionIndex:t}));break;case 40:n&&(r.preventDefault(),t=t+1===a.length?a.length-1:t+1,this.setState({activeSuggestionIndex:t}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const r=setTimeout(()=>{const{shouldBlur:t}=this.state;t&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:r});const{onBlur:n}=this.props;n&&n()}setSuggestionIndex(r){this.setState({activeSuggestionIndex:r}),this.clearBlurDelay()}setValue(r){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:n}=this.props;n(r)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:r}=this.state;r&&(clearTimeout(r),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:r,id:n,ariaLabel:t,placeholder:a,value:i,name:u,shouldFocusOnMount:d,isLoading:c}=this.props,{activeSuggestionIndex:m,setAriaActiveDescendant:g,hasFocus:p,shouldShowSuggestions:y}=this.state,v=p&&y&&r.length>0,D=g&&m>-1?`${n}-item-${m}`:void 0;return Nr.jsxs("div",{className:`${ju.autocomplete} autocomplete`,"aria-expanded":v,"aria-owns":`${n}-suggestions`,"aria-haspopup":"listbox",children:[Nr.jsx(Zu,{variant:"primary",id:n,name:u,"aria-label":t,"aria-autocomplete":"list","aria-controls":`${n}-suggestions`,"aria-activedescendant":D,placeholder:a,value:i,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:E=>{this.inputRef=E},className:"typo-normal",autoFocus:d,label:t,hideLabel:!0,children:Nr.jsx(Zu.Button,{loading:c,onClick:this.onSearchButtonClick})}),Nr.jsx("ul",{id:`${n}-suggestions`,role:"listbox",className:v?ju.autocomplete__suggestions:ju["autocomplete__suggestions--hidden"],children:v&&r.map((E,T)=>Nr.jsx(VB,{id:`${n}-item-${T}`,index:T,value:E,match:i,active:T===m,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},E.key))})]})}}var sd={exports:{}},GB=sd.exports,rp;function YB(){return rp||(rp=1,function(e,r){(function(n,t){e.exports=t()})(GB,function(){var n=1e3,t=6e4,a=36e5,i="millisecond",u="second",d="minute",c="hour",m="day",g="week",p="month",y="quarter",v="year",D="date",E="Invalid Date",T=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(U){var G=["th","st","nd","rd"],$=U%100;return"["+U+(G[($-20)%10]||G[$]||G[0])+"]"}},w=function(U,G,$){var J=String(U);return!J||J.length>=G?U:""+Array(G+1-J.length).join($)+U},M={s:w,z:function(U){var G=-U.utcOffset(),$=Math.abs(G),J=Math.floor($/60),Y=$%60;return(G<=0?"+":"-")+w(J,2,"0")+":"+w(Y,2,"0")},m:function U(G,$){if(G.date()<$.date())return-U($,G);var J=12*($.year()-G.year())+($.month()-G.month()),Y=G.clone().add(J,p),re=$-Y<0,se=G.clone().add(J+(re?-1:1),p);return+(-(J+($-Y)/(re?Y-se:se-Y))||0)},a:function(U){return U<0?Math.ceil(U)||0:Math.floor(U)},p:function(U){return{M:p,y:v,w:g,d:m,D,h:c,m:d,s:u,ms:i,Q:y}[U]||String(U||"").toLowerCase().replace(/s$/,"")},u:function(U){return U===void 0}},k="en",N={};N[k]=F;var R="$isDayjsObject",A=function(U){return U instanceof W||!(!U||!U[R])},j=function U(G,$,J){var Y;if(!G)return k;if(typeof G=="string"){var re=G.toLowerCase();N[re]&&(Y=re),$&&(N[re]=$,Y=re);var se=G.split("-");if(!Y&&se.length>1)return U(se[0])}else{var de=G.name;N[de]=G,Y=de}return!J&&Y&&(k=Y),Y||!J&&k},z=function(U,G){if(A(U))return U.clone();var $=typeof G=="object"?G:{};return $.date=U,$.args=arguments,new W($)},V=M;V.l=j,V.i=A,V.w=function(U,G){return z(U,{locale:G.$L,utc:G.$u,x:G.$x,$offset:G.$offset})};var W=function(){function U($){this.$L=j($.locale,null,!0),this.parse($),this.$x=this.$x||$.x||{},this[R]=!0}var G=U.prototype;return G.parse=function($){this.$d=function(J){var Y=J.date,re=J.utc;if(Y===null)return new Date(NaN);if(V.u(Y))return new Date;if(Y instanceof Date)return new Date(Y);if(typeof Y=="string"&&!/Z$/i.test(Y)){var se=Y.match(T);if(se){var de=se[2]-1||0,Te=(se[7]||"0").substring(0,3);return re?new Date(Date.UTC(se[1],de,se[3]||1,se[4]||0,se[5]||0,se[6]||0,Te)):new Date(se[1],de,se[3]||1,se[4]||0,se[5]||0,se[6]||0,Te)}}return new Date(Y)}($),this.init()},G.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},G.$utils=function(){return V},G.isValid=function(){return this.$d.toString()!==E},G.isSame=function($,J){var Y=z($);return this.startOf(J)<=Y&&Y<=this.endOf(J)},G.isAfter=function($,J){return z($)<this.startOf(J)},G.isBefore=function($,J){return this.endOf(J)<z($)},G.$g=function($,J,Y){return V.u($)?this[J]:this.set(Y,$)},G.unix=function(){return Math.floor(this.valueOf()/1e3)},G.valueOf=function(){return this.$d.getTime()},G.startOf=function($,J){var Y=this,re=!!V.u(J)||J,se=V.p($),de=function(en,nn){var on=V.w(Y.$u?Date.UTC(Y.$y,nn,en):new Date(Y.$y,nn,en),Y);return re?on:on.endOf(m)},Te=function(en,nn){return V.w(Y.toDate()[en].apply(Y.toDate("s"),(re?[0,0,0,0]:[23,59,59,999]).slice(nn)),Y)},Ee=this.$W,Ge=this.$M,me=this.$D,he="set"+(this.$u?"UTC":"");switch(se){case v:return re?de(1,0):de(31,11);case p:return re?de(1,Ge):de(0,Ge+1);case g:var Le=this.$locale().weekStart||0,Ve=(Ee<Le?Ee+7:Ee)-Le;return de(re?me-Ve:me+(6-Ve),Ge);case m:case D:return Te(he+"Hours",0);case c:return Te(he+"Minutes",1);case d:return Te(he+"Seconds",2);case u:return Te(he+"Milliseconds",3);default:return this.clone()}},G.endOf=function($){return this.startOf($,!1)},G.$set=function($,J){var Y,re=V.p($),se="set"+(this.$u?"UTC":""),de=(Y={},Y[m]=se+"Date",Y[D]=se+"Date",Y[p]=se+"Month",Y[v]=se+"FullYear",Y[c]=se+"Hours",Y[d]=se+"Minutes",Y[u]=se+"Seconds",Y[i]=se+"Milliseconds",Y)[re],Te=re===m?this.$D+(J-this.$W):J;if(re===p||re===v){var Ee=this.clone().set(D,1);Ee.$d[de](Te),Ee.init(),this.$d=Ee.set(D,Math.min(this.$D,Ee.daysInMonth())).$d}else de&&this.$d[de](Te);return this.init(),this},G.set=function($,J){return this.clone().$set($,J)},G.get=function($){return this[V.p($)]()},G.add=function($,J){var Y,re=this;$=Number($);var se=V.p(J),de=function(Ge){var me=z(re);return V.w(me.date(me.date()+Math.round(Ge*$)),re)};if(se===p)return this.set(p,this.$M+$);if(se===v)return this.set(v,this.$y+$);if(se===m)return de(1);if(se===g)return de(7);var Te=(Y={},Y[d]=t,Y[c]=a,Y[u]=n,Y)[se]||1,Ee=this.$d.getTime()+$*Te;return V.w(Ee,this)},G.subtract=function($,J){return this.add(-1*$,J)},G.format=function($){var J=this,Y=this.$locale();if(!this.isValid())return Y.invalidDate||E;var re=$||"YYYY-MM-DDTHH:mm:ssZ",se=V.z(this),de=this.$H,Te=this.$m,Ee=this.$M,Ge=Y.weekdays,me=Y.months,he=Y.meridiem,Le=function(nn,on,mn,Rn){return nn&&(nn[on]||nn(J,re))||mn[on].slice(0,Rn)},Ve=function(nn){return V.s(de%12||12,nn,"0")},en=he||function(nn,on,mn){var Rn=nn<12?"AM":"PM";return mn?Rn.toLowerCase():Rn};return re.replace(x,function(nn,on){return on||function(mn){switch(mn){case"YY":return String(J.$y).slice(-2);case"YYYY":return V.s(J.$y,4,"0");case"M":return Ee+1;case"MM":return V.s(Ee+1,2,"0");case"MMM":return Le(Y.monthsShort,Ee,me,3);case"MMMM":return Le(me,Ee);case"D":return J.$D;case"DD":return V.s(J.$D,2,"0");case"d":return String(J.$W);case"dd":return Le(Y.weekdaysMin,J.$W,Ge,2);case"ddd":return Le(Y.weekdaysShort,J.$W,Ge,3);case"dddd":return Ge[J.$W];case"H":return String(de);case"HH":return V.s(de,2,"0");case"h":return Ve(1);case"hh":return Ve(2);case"a":return en(de,Te,!0);case"A":return en(de,Te,!1);case"m":return String(Te);case"mm":return V.s(Te,2,"0");case"s":return String(J.$s);case"ss":return V.s(J.$s,2,"0");case"SSS":return V.s(J.$ms,3,"0");case"Z":return se}return null}(nn)||se.replace(":","")})},G.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},G.diff=function($,J,Y){var re,se=this,de=V.p(J),Te=z($),Ee=(Te.utcOffset()-this.utcOffset())*t,Ge=this-Te,me=function(){return V.m(se,Te)};switch(de){case v:re=me()/12;break;case p:re=me();break;case y:re=me()/3;break;case g:re=(Ge-Ee)/6048e5;break;case m:re=(Ge-Ee)/864e5;break;case c:re=Ge/a;break;case d:re=Ge/t;break;case u:re=Ge/n;break;default:re=Ge}return Y?re:V.a(re)},G.daysInMonth=function(){return this.endOf(p).$D},G.$locale=function(){return N[this.$L]},G.locale=function($,J){if(!$)return this.$L;var Y=this.clone(),re=j($,J,!0);return re&&(Y.$L=re),Y},G.clone=function(){return V.w(this.$d,this)},G.toDate=function(){return new Date(this.valueOf())},G.toJSON=function(){return this.isValid()?this.toISOString():null},G.toISOString=function(){return this.$d.toISOString()},G.toString=function(){return this.$d.toUTCString()},U}(),L=W.prototype;return z.prototype=L,[["$ms",i],["$s",u],["$m",d],["$H",c],["$W",m],["$M",p],["$y",v],["$D",D]].forEach(function(U){L[U[1]]=function(G){return this.$g(G,U[0],U[1])}}),z.extend=function(U,G){return U.$i||(U(G,W,z),U.$i=!0),z},z.locale=j,z.isDayjs=A,z.unix=function(U){return z(1e3*U)},z.en=N[k],z.Ls=N,z.p={},z})}(sd)),sd.exports}var zB=YB();const ao=Ky(zB);var od=function(e,r){return od=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])},od(e,r)};function Zt(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");od(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var ge=function(){return ge=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ge.apply(this,arguments)};function Ki(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n}function sr(e,r,n){if(arguments.length===2)for(var t=0,a=r.length,i;t<a;t++)(i||!(t in r))&&(i||(i=Array.prototype.slice.call(r,0,t)),i[t]=r[t]);return e.concat(i||Array.prototype.slice.call(r))}function rr(e,r){var n=r&&r.cache?r.cache:nq,t=r&&r.serializer?r.serializer:JB,a=r&&r.strategy?r.strategy:ZB;return a(e,{cache:n,serializer:t})}function KB(e){return e==null||typeof e=="number"||typeof e=="boolean"}function XB(e,r,n,t){var a=KB(t)?t:n(t),i=r.get(a);return typeof i>"u"&&(i=e.call(this,t),r.set(a,i)),i}function Xy(e,r,n){var t=Array.prototype.slice.call(arguments,3),a=n(t),i=r.get(a);return typeof i>"u"&&(i=e.apply(this,t),r.set(a,i)),i}function Zy(e,r,n,t,a){return n.bind(r,e,t,a)}function ZB(e,r){var n=e.length===1?XB:Xy;return Zy(e,this,n,r.cache.create(),r.serializer)}function QB(e,r){return Zy(e,this,Xy,r.cache.create(),r.serializer)}var JB=function(){return JSON.stringify(arguments)},eq=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(r){return this.cache[r]},e.prototype.set=function(r,n){this.cache[r]=n},e}(),nq={create:function(){return new eq}},ar={variadic:QB},Ie;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ie||(Ie={}));var un;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(un||(un={}));var as;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(as||(as={}));function ap(e){return e.type===un.literal}function tq(e){return e.type===un.argument}function Qy(e){return e.type===un.number}function Jy(e){return e.type===un.date}function ev(e){return e.type===un.time}function nv(e){return e.type===un.select}function tv(e){return e.type===un.plural}function rq(e){return e.type===un.pound}function rv(e){return e.type===un.tag}function av(e){return!!(e&&typeof e=="object"&&e.type===as.number)}function id(e){return!!(e&&typeof e=="object"&&e.type===as.dateTime)}var sv=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,aq=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function sq(e){var r={};return e.replace(aq,function(n){var t=n.length;switch(n[0]){case"G":r.era=t===4?"long":t===5?"narrow":"short";break;case"y":r.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":r.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":r.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"a":r.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][t-1];break;case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][t-1];break;case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][t-1];break;case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":r.minute=["numeric","2-digit"][t-1];break;case"s":r.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":r.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),r}var oq=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function iq(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var r=e.split(oq).filter(function(y){return y.length>0}),n=[],t=0,a=r;t<a.length;t++){var i=a[t],u=i.split("/");if(u.length===0)throw new Error("Invalid number skeleton");for(var d=u[0],c=u.slice(1),m=0,g=c;m<g.length;m++){var p=g[m];if(p.length===0)throw new Error("Invalid number skeleton")}n.push({stem:d,options:c})}return n}function lq(e){return e.replace(/^(.*?)-/,"")}var sp=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,ov=/^(@+)?(\+|#+)?[rs]?$/g,uq=/(\*)(0+)|(#+)(0+)|(0+)/g,iv=/^(0+)$/;function op(e){var r={};return e[e.length-1]==="r"?r.roundingPriority="morePrecision":e[e.length-1]==="s"&&(r.roundingPriority="lessPrecision"),e.replace(ov,function(n,t,a){return typeof a!="string"?(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length):a==="+"?r.minimumSignificantDigits=t.length:t[0]==="#"?r.maximumSignificantDigits=t.length:(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length+(typeof a=="string"?a.length:0)),""}),r}function lv(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function dq(e){var r;if(e[0]==="E"&&e[1]==="E"?(r={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(r={notation:"scientific"},e=e.slice(1)),r){var n=e.slice(0,2);if(n==="+!"?(r.signDisplay="always",e=e.slice(2)):n==="+?"&&(r.signDisplay="exceptZero",e=e.slice(2)),!iv.test(e))throw new Error("Malformed concise eng/scientific notation");r.minimumIntegerDigits=e.length}return r}function ip(e){var r={},n=lv(e);return n||r}function cq(e){for(var r={},n=0,t=e;n<t.length;n++){var a=t[n];switch(a.stem){case"percent":case"%":r.style="percent";continue;case"%x100":r.style="percent",r.scale=100;continue;case"currency":r.style="currency",r.currency=a.options[0];continue;case"group-off":case",_":r.useGrouping=!1;continue;case"precision-integer":case".":r.maximumFractionDigits=0;continue;case"measure-unit":case"unit":r.style="unit",r.unit=lq(a.options[0]);continue;case"compact-short":case"K":r.notation="compact",r.compactDisplay="short";continue;case"compact-long":case"KK":r.notation="compact",r.compactDisplay="long";continue;case"scientific":r=ge(ge(ge({},r),{notation:"scientific"}),a.options.reduce(function(c,m){return ge(ge({},c),ip(m))},{}));continue;case"engineering":r=ge(ge(ge({},r),{notation:"engineering"}),a.options.reduce(function(c,m){return ge(ge({},c),ip(m))},{}));continue;case"notation-simple":r.notation="standard";continue;case"unit-width-narrow":r.currencyDisplay="narrowSymbol",r.unitDisplay="narrow";continue;case"unit-width-short":r.currencyDisplay="code",r.unitDisplay="short";continue;case"unit-width-full-name":r.currencyDisplay="name",r.unitDisplay="long";continue;case"unit-width-iso-code":r.currencyDisplay="symbol";continue;case"scale":r.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":r.roundingMode="floor";continue;case"rounding-mode-ceiling":r.roundingMode="ceil";continue;case"rounding-mode-down":r.roundingMode="trunc";continue;case"rounding-mode-up":r.roundingMode="expand";continue;case"rounding-mode-half-even":r.roundingMode="halfEven";continue;case"rounding-mode-half-down":r.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":r.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(uq,function(c,m,g,p,y,v){if(m)r.minimumIntegerDigits=g.length;else{if(p&&y)throw new Error("We currently do not support maximum integer digits");if(v)throw new Error("We currently do not support exact integer digits")}return""});continue}if(iv.test(a.stem)){r.minimumIntegerDigits=a.stem.length;continue}if(sp.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(sp,function(c,m,g,p,y,v){return g==="*"?r.minimumFractionDigits=m.length:p&&p[0]==="#"?r.maximumFractionDigits=p.length:y&&v?(r.minimumFractionDigits=y.length,r.maximumFractionDigits=y.length+v.length):(r.minimumFractionDigits=m.length,r.maximumFractionDigits=m.length),""});var i=a.options[0];i==="w"?r=ge(ge({},r),{trailingZeroDisplay:"stripIfInteger"}):i&&(r=ge(ge({},r),op(i)));continue}if(ov.test(a.stem)){r=ge(ge({},r),op(a.stem));continue}var u=lv(a.stem);u&&(r=ge(ge({},r),u));var d=dq(a.stem);d&&(r=ge(ge({},r),d))}return r}var ni={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function fq(e,r){for(var n="",t=0;t<e.length;t++){var a=e.charAt(t);if(a==="j"){for(var i=0;t+1<e.length&&e.charAt(t+1)===a;)i++,t++;var u=1+(i&1),d=i<2?1:3+(i>>1),c="a",m=mq(r);for((m=="H"||m=="k")&&(d=0);d-- >0;)n+=c;for(;u-- >0;)n=m+n}else a==="J"?n+="H":n+=a}return n}function mq(e){var r=e.hourCycle;if(r===void 0&&e.hourCycles&&e.hourCycles.length&&(r=e.hourCycles[0]),r)switch(r){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,t;n!=="root"&&(t=e.maximize().region);var a=ni[t||""]||ni[n||""]||ni["".concat(n,"-001")]||ni["001"];return a[0]}var Iu,gq=new RegExp("^".concat(sv.source,"*")),pq=new RegExp("".concat(sv.source,"*$"));function Ce(e,r){return{start:e,end:r}}var hq=!!String.prototype.startsWith&&"_a".startsWith("a",1),yq=!!String.fromCodePoint,vq=!!Object.fromEntries,kq=!!String.prototype.codePointAt,bq=!!String.prototype.trimStart,wq=!!String.prototype.trimEnd,_q=!!Number.isSafeInteger,Tq=_q?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ld=!0;try{var Sq=dv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ld=((Iu=Sq.exec("a"))===null||Iu===void 0?void 0:Iu[0])==="a"}catch{ld=!1}var lp=hq?function(e,r,n){return e.startsWith(r,n)}:function(e,r,n){return e.slice(n,n+r.length)===r},ud=yq?String.fromCodePoint:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n="",t=e.length,a=0,i;t>a;){if(i=e[a++],i>1114111)throw RangeError(i+" is not a valid code point");n+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return n},up=vq?Object.fromEntries:function(e){for(var r={},n=0,t=e;n<t.length;n++){var a=t[n],i=a[0],u=a[1];r[i]=u}return r},uv=kq?function(e,r){return e.codePointAt(r)}:function(e,r){var n=e.length;if(!(r<0||r>=n)){var t=e.charCodeAt(r),a;return t<55296||t>56319||r+1===n||(a=e.charCodeAt(r+1))<56320||a>57343?t:(t-55296<<10)+(a-56320)+65536}},Eq=bq?function(e){return e.trimStart()}:function(e){return e.replace(gq,"")},Oq=wq?function(e){return e.trimEnd()}:function(e){return e.replace(pq,"")};function dv(e,r){return new RegExp(e,r)}var dd;if(ld){var dp=dv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");dd=function(e,r){var n;dp.lastIndex=r;var t=dp.exec(e);return(n=t[1])!==null&&n!==void 0?n:""}}else dd=function(e,r){for(var n=[];;){var t=uv(e,r);if(t===void 0||cv(t)||Fq(t))break;n.push(t),r+=t>=65536?2:1}return ud.apply(void 0,n)};var Dq=function(){function e(r,n){n===void 0&&(n={}),this.message=r,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(r,n,t){for(var a=[];!this.isEOF();){var i=this.char();if(i===123){var u=this.parseArgument(r,t);if(u.err)return u;a.push(u.val)}else{if(i===125&&r>0)break;if(i===35&&(n==="plural"||n==="selectordinal")){var d=this.clonePosition();this.bump(),a.push({type:un.pound,location:Ce(d,this.clonePosition())})}else if(i===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(Ie.UNMATCHED_CLOSING_TAG,Ce(this.clonePosition(),this.clonePosition()))}else if(i===60&&!this.ignoreTag&&cd(this.peek()||0)){var u=this.parseTag(r,n);if(u.err)return u;a.push(u.val)}else{var u=this.parseLiteral(r,n);if(u.err)return u;a.push(u.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(r,n){var t=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:un.literal,value:"<".concat(a,"/>"),location:Ce(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var i=this.parseMessage(r+1,n,!0);if(i.err)return i;var u=i.val,d=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!cd(this.char()))return this.error(Ie.INVALID_TAG,Ce(d,this.clonePosition()));var c=this.clonePosition(),m=this.parseTagName();return a!==m?this.error(Ie.UNMATCHED_CLOSING_TAG,Ce(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:un.tag,value:a,children:u,location:Ce(t,this.clonePosition())},err:null}:this.error(Ie.INVALID_TAG,Ce(d,this.clonePosition())))}else return this.error(Ie.UNCLOSED_TAG,Ce(t,this.clonePosition()))}else return this.error(Ie.INVALID_TAG,Ce(t,this.clonePosition()))},e.prototype.parseTagName=function(){var r=this.offset();for(this.bump();!this.isEOF()&&Rq(this.char());)this.bump();return this.message.slice(r,this.offset())},e.prototype.parseLiteral=function(r,n){for(var t=this.clonePosition(),a="";;){var i=this.tryParseQuote(n);if(i){a+=i;continue}var u=this.tryParseUnquoted(r,n);if(u){a+=u;continue}var d=this.tryParseLeftAngleBracket();if(d){a+=d;continue}break}var c=Ce(t,this.clonePosition());return{val:{type:un.literal,value:a,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!xq(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(r){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(r==="plural"||r==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(t);this.bump()}return ud.apply(void 0,n)},e.prototype.tryParseUnquoted=function(r,n){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(n==="plural"||n==="selectordinal")||t===125&&r>0?null:(this.bump(),ud(t))},e.prototype.parseArgument=function(r,n){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ie.EMPTY_ARGUMENT,Ce(t,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(Ie.MALFORMED_ARGUMENT,Ce(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:un.argument,value:a,location:Ce(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(t,this.clonePosition())):this.parseArgumentOptions(r,n,a,t);default:return this.error(Ie.MALFORMED_ARGUMENT,Ce(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var r=this.clonePosition(),n=this.offset(),t=dd(this.message,n),a=n+t.length;this.bumpTo(a);var i=this.clonePosition(),u=Ce(r,i);return{value:t,location:u}},e.prototype.parseArgumentOptions=function(r,n,t,a){var i,u=this.clonePosition(),d=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(d){case"":return this.error(Ie.EXPECT_ARGUMENT_TYPE,Ce(u,c));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var g=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var y=Oq(p.val);if(y.length===0)return this.error(Ie.EXPECT_ARGUMENT_STYLE,Ce(this.clonePosition(),this.clonePosition()));var v=Ce(g,this.clonePosition());m={style:y,styleLocation:v}}var D=this.tryParseArgumentClose(a);if(D.err)return D;var E=Ce(a,this.clonePosition());if(m&&lp(m==null?void 0:m.style,"::",0)){var T=Eq(m.style.slice(2));if(d==="number"){var p=this.parseNumberSkeletonFromString(T,m.styleLocation);return p.err?p:{val:{type:un.number,value:t,location:E,style:p.val},err:null}}else{if(T.length===0)return this.error(Ie.EXPECT_DATE_TIME_SKELETON,E);var x=T;this.locale&&(x=fq(T,this.locale));var y={type:as.dateTime,pattern:x,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?sq(x):{}},F=d==="date"?un.date:un.time;return{val:{type:F,value:t,location:E,style:y},err:null}}}return{val:{type:d==="number"?un.number:d==="date"?un.date:un.time,value:t,location:E,style:(i=m==null?void 0:m.style)!==null&&i!==void 0?i:null},err:null}}case"plural":case"selectordinal":case"select":{var w=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ie.EXPECT_SELECT_ARGUMENT_OPTIONS,Ce(w,ge({},w)));this.bumpSpace();var M=this.parseIdentifierIfPossible(),k=0;if(d!=="select"&&M.value==="offset"){if(!this.bumpIf(":"))return this.error(Ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ce(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(Ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ie.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),M=this.parseIdentifierIfPossible(),k=p.val}var N=this.tryParsePluralOrSelectOptions(r,d,n,M);if(N.err)return N;var D=this.tryParseArgumentClose(a);if(D.err)return D;var R=Ce(a,this.clonePosition());return d==="select"?{val:{type:un.select,value:t,options:up(N.val),location:R},err:null}:{val:{type:un.plural,value:t,options:up(N.val),offset:k,pluralType:d==="plural"?"cardinal":"ordinal",location:R},err:null}}default:return this.error(Ie.INVALID_ARGUMENT_TYPE,Ce(u,c))}},e.prototype.tryParseArgumentClose=function(r){return this.isEOF()||this.char()!==125?this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(r,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var r=0,n=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ie.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Ce(a,this.clonePosition()));this.bump();break}case 123:{r+=1,this.bump();break}case 125:{if(r>0)r-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(r,n){var t=[];try{t=iq(r)}catch{return this.error(Ie.INVALID_NUMBER_SKELETON,n)}return{val:{type:as.number,tokens:t,location:n,parsedOptions:this.shouldParseSkeletons?cq(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(r,n,t,a){for(var i,u=!1,d=[],c=new Set,m=a.value,g=a.location;;){if(m.length===0){var p=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var y=this.tryParseDecimalInteger(Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ie.INVALID_PLURAL_ARGUMENT_SELECTOR);if(y.err)return y;g=Ce(p,this.clonePosition()),m=this.message.slice(p.offset,this.offset())}else break}if(c.has(m))return this.error(n==="select"?Ie.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ie.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,g);m==="other"&&(u=!0),this.bumpSpace();var v=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?Ie.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Ce(this.clonePosition(),this.clonePosition()));var D=this.parseMessage(r+1,n,t);if(D.err)return D;var E=this.tryParseArgumentClose(v);if(E.err)return E;d.push([m,{value:D.val,location:Ce(v,this.clonePosition())}]),c.add(m),this.bumpSpace(),i=this.parseIdentifierIfPossible(),m=i.value,g=i.location}return d.length===0?this.error(n==="select"?Ie.EXPECT_SELECT_ARGUMENT_SELECTOR:Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ce(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!u?this.error(Ie.MISSING_OTHER_CLAUSE,Ce(this.clonePosition(),this.clonePosition())):{val:d,err:null}},e.prototype.tryParseDecimalInteger=function(r,n){var t=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var i=!1,u=0;!this.isEOF();){var d=this.char();if(d>=48&&d<=57)i=!0,u=u*10+(d-48),this.bump();else break}var c=Ce(a,this.clonePosition());return i?(u*=t,Tq(u)?{val:u,err:null}:this.error(n,c)):this.error(r,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var r=this.position.offset;if(r>=this.message.length)throw Error("out of bound");var n=uv(this.message,r);if(n===void 0)throw Error("Offset ".concat(r," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(r,n){return{val:null,err:{kind:r,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var r=this.char();r===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=r<65536?1:2)}},e.prototype.bumpIf=function(r){if(lp(this.message,r,this.offset())){for(var n=0;n<r.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(r){var n=this.offset(),t=this.message.indexOf(r,n);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(r){if(this.offset()>r)throw Error("targetOffset ".concat(r," must be greater than or equal to the current offset ").concat(this.offset()));for(r=Math.min(r,this.message.length);;){var n=this.offset();if(n===r)break;if(n>r)throw Error("targetOffset ".concat(r," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&cv(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var r=this.char(),n=this.offset(),t=this.message.charCodeAt(n+(r>=65536?2:1));return t??null},e}();function cd(e){return e>=97&&e<=122||e>=65&&e<=90}function xq(e){return cd(e)||e===47}function Rq(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function cv(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Fq(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function fd(e){e.forEach(function(r){if(delete r.location,nv(r)||tv(r))for(var n in r.options)delete r.options[n].location,fd(r.options[n].value);else Qy(r)&&av(r.style)||(Jy(r)||ev(r))&&id(r.style)?delete r.style.location:rv(r)&&fd(r.children)})}function Nq(e,r){r===void 0&&(r={}),r=ge({shouldParseSkeletons:!0,requiresOtherClause:!0},r);var n=new Dq(e,r).parse();if(n.err){var t=SyntaxError(Ie[n.err.kind]);throw t.location=n.err.location,t.originalMessage=n.err.message,t}return r!=null&&r.captureLocation||fd(n.val),n.val}var gr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(gr||(gr={}));var Zr=function(e){Zt(r,e);function r(n,t,a){var i=e.call(this,n)||this;return i.code=t,i.originalMessage=a,i}return r.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},r}(Error),cp=function(e){Zt(r,e);function r(n,t,a,i){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(t,'". Options are "').concat(Object.keys(a).join('", "'),'"'),gr.INVALID_VALUE,i)||this}return r}(Zr),Aq=function(e){Zt(r,e);function r(n,t,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(t),gr.INVALID_VALUE,a)||this}return r}(Zr),Pq=function(e){Zt(r,e);function r(n,t){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(t,'"'),gr.MISSING_VALUE,t)||this}return r}(Zr),Zn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Zn||(Zn={}));function Mq(e){return e.length<2?e:e.reduce(function(r,n){var t=r[r.length-1];return!t||t.type!==Zn.literal||n.type!==Zn.literal?r.push(n):t.value+=n.value,r},[])}function fv(e){return typeof e=="function"}function ui(e,r,n,t,a,i,u){if(e.length===1&&ap(e[0]))return[{type:Zn.literal,value:e[0].value}];for(var d=[],c=0,m=e;c<m.length;c++){var g=m[c];if(ap(g)){d.push({type:Zn.literal,value:g.value});continue}if(rq(g)){typeof i=="number"&&d.push({type:Zn.literal,value:n.getNumberFormat(r).format(i)});continue}var p=g.value;if(!(a&&p in a))throw new Pq(p,u);var y=a[p];if(tq(g)){(!y||typeof y=="string"||typeof y=="number")&&(y=typeof y=="string"||typeof y=="number"?String(y):""),d.push({type:typeof y=="string"?Zn.literal:Zn.object,value:y});continue}if(Jy(g)){var v=typeof g.style=="string"?t.date[g.style]:id(g.style)?g.style.parsedOptions:void 0;d.push({type:Zn.literal,value:n.getDateTimeFormat(r,v).format(y)});continue}if(ev(g)){var v=typeof g.style=="string"?t.time[g.style]:id(g.style)?g.style.parsedOptions:t.time.medium;d.push({type:Zn.literal,value:n.getDateTimeFormat(r,v).format(y)});continue}if(Qy(g)){var v=typeof g.style=="string"?t.number[g.style]:av(g.style)?g.style.parsedOptions:void 0;v&&v.scale&&(y=y*(v.scale||1)),d.push({type:Zn.literal,value:n.getNumberFormat(r,v).format(y)});continue}if(rv(g)){var D=g.children,E=g.value,T=a[E];if(!fv(T))throw new Aq(E,"function",u);var x=ui(D,r,n,t,a,i),F=T(x.map(function(k){return k.value}));Array.isArray(F)||(F=[F]),d.push.apply(d,F.map(function(k){return{type:typeof k=="string"?Zn.literal:Zn.object,value:k}}))}if(nv(g)){var w=g.options[y]||g.options.other;if(!w)throw new cp(g.value,y,Object.keys(g.options),u);d.push.apply(d,ui(w.value,r,n,t,a));continue}if(tv(g)){var w=g.options["=".concat(y)];if(!w){if(!Intl.PluralRules)throw new Zr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,gr.MISSING_INTL_API,u);var M=n.getPluralRules(r,{type:g.pluralType}).select(y-(g.offset||0));w=g.options[M]||g.options.other}if(!w)throw new cp(g.value,y,Object.keys(g.options),u);d.push.apply(d,ui(w.value,r,n,t,a,y-(g.offset||0)));continue}}return Mq(d)}function Bq(e,r){return r?ge(ge(ge({},e||{}),r||{}),Object.keys(e).reduce(function(n,t){return n[t]=ge(ge({},e[t]),r[t]||{}),n},{})):e}function qq(e,r){return r?Object.keys(e).reduce(function(n,t){return n[t]=Bq(e[t],r[t]),n},ge({},e)):e}function Cu(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function jq(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:rr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.NumberFormat).bind.apply(r,sr([void 0],n,!1)))},{cache:Cu(e.number),strategy:ar.variadic}),getDateTimeFormat:rr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.DateTimeFormat).bind.apply(r,sr([void 0],n,!1)))},{cache:Cu(e.dateTime),strategy:ar.variadic}),getPluralRules:rr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.PluralRules).bind.apply(r,sr([void 0],n,!1)))},{cache:Cu(e.pluralRules),strategy:ar.variadic})}}var mv=function(){function e(r,n,t,a){n===void 0&&(n=e.defaultLocale);var i=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var m=i.formatToParts(c);if(m.length===1)return m[0].value;var g=m.reduce(function(p,y){return!p.length||y.type!==Zn.literal||typeof p[p.length-1]!="string"?p.push(y.value):p[p.length-1]+=y.value,p},[]);return g.length<=1?g[0]||"":g},this.formatToParts=function(c){return ui(i.ast,i.locales,i.formatters,i.formats,c,void 0,i.message)},this.resolvedOptions=function(){var c;return{locale:((c=i.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(i.locales)[0]}},this.getAst=function(){return i.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof r=="string"){if(this.message=r,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=a||{};u.formatters;var d=Ki(u,["formatters"]);this.ast=e.__parse(r,ge(ge({},d),{locale:this.resolvedLocale}))}else this.ast=r;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=qq(e.formats,t),this.formatters=a&&a.formatters||jq(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(r){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(r);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof r=="string"?r:r[0])}},e.__parse=Nq,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),_a;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(_a||(_a={}));var so=function(e){Zt(r,e);function r(n,t,a){var i=this,u=a?a instanceof Error?a:new Error(String(a)):void 0;return i=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(t,`
`).concat(u?`
`.concat(u.message,`
`).concat(u.stack):""))||this,i.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(i,r),i}return r}(Error),Iq=function(e){Zt(r,e);function r(n,t){return e.call(this,_a.UNSUPPORTED_FORMATTER,n,t)||this}return r}(so),Cq=function(e){Zt(r,e);function r(n,t){return e.call(this,_a.INVALID_CONFIG,n,t)||this}return r}(so),fp=function(e){Zt(r,e);function r(n,t){return e.call(this,_a.MISSING_DATA,n,t)||this}return r}(so),jt=function(e){Zt(r,e);function r(n,t,a){var i=e.call(this,_a.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(t,`
`),a)||this;return i.locale=t,i}return r}(so),Lu=function(e){Zt(r,e);function r(n,t,a,i){var u=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),t,i)||this;return u.descriptor=a,u.locale=t,u}return r}(jt),Lq=function(e){Zt(r,e);function r(n,t){var a=e.call(this,_a.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(t,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(i){var u;return(u=i.value)!==null&&u!==void 0?u:JSON.stringify(i)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return r}(so);function $q(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}function cs(e,r,n){return n===void 0&&(n={}),r.reduce(function(t,a){return a in e?t[a]=e[a]:a in n&&(t[a]=n[a]),t},{})}var Hq=function(e){},Vq=function(e){},gv={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Hq,onWarn:Vq};function pv(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function fa(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function Uq(e){e===void 0&&(e=pv());var r=Intl.RelativeTimeFormat,n=Intl.ListFormat,t=Intl.DisplayNames,a=rr(function(){for(var d,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((d=Intl.DateTimeFormat).bind.apply(d,sr([void 0],c,!1)))},{cache:fa(e.dateTime),strategy:ar.variadic}),i=rr(function(){for(var d,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((d=Intl.NumberFormat).bind.apply(d,sr([void 0],c,!1)))},{cache:fa(e.number),strategy:ar.variadic}),u=rr(function(){for(var d,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((d=Intl.PluralRules).bind.apply(d,sr([void 0],c,!1)))},{cache:fa(e.pluralRules),strategy:ar.variadic});return{getDateTimeFormat:a,getNumberFormat:i,getMessageFormat:rr(function(d,c,m,g){return new mv(d,c,m,ge({formatters:{getNumberFormat:i,getDateTimeFormat:a,getPluralRules:u}},g||{}))},{cache:fa(e.message),strategy:ar.variadic}),getRelativeTimeFormat:rr(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return new(r.bind.apply(r,sr([void 0],d,!1)))},{cache:fa(e.relativeTime),strategy:ar.variadic}),getPluralRules:u,getListFormat:rr(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return new(n.bind.apply(n,sr([void 0],d,!1)))},{cache:fa(e.list),strategy:ar.variadic}),getDisplayNames:rr(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return new(t.bind.apply(t,sr([void 0],d,!1)))},{cache:fa(e.displayNames),strategy:ar.variadic})}}function nc(e,r,n,t){var a=e&&e[r],i;if(a&&(i=a[n]),i)return i;t(new Iq("No ".concat(r," format named: ").concat(n)))}function ti(e,r){return Object.keys(e).reduce(function(n,t){return n[t]=ge({timeZone:r},e[t]),n},{})}function mp(e,r){var n=Object.keys(ge(ge({},e),r));return n.reduce(function(t,a){return t[a]=ge(ge({},e[a]||{}),r[a]||{}),t},{})}function gp(e,r){if(!r)return e;var n=mv.formats;return ge(ge(ge({},n),e),{date:mp(ti(n.date,r),ti(e.date||{},r)),time:mp(ti(n.time,r),ti(e.time||{},r))})}var md=function(e,r,n,t,a){var i=e.locale,u=e.formats,d=e.messages,c=e.defaultLocale,m=e.defaultFormats,g=e.fallbackOnEmptyString,p=e.onError,y=e.timeZone,v=e.defaultRichTextElements;n===void 0&&(n={id:""});var D=n.id,E=n.defaultMessage;$q(!!D,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var T=String(D),x=d&&Object.prototype.hasOwnProperty.call(d,T)&&d[T];if(Array.isArray(x)&&x.length===1&&x[0].type===un.literal)return x[0].value;if(!t&&x&&typeof x=="string"&&!v)return x.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=ge(ge({},v),t||{}),u=gp(u,y),m=gp(m,y),!x){if(g===!1&&x==="")return x;if((!E||i&&i.toLowerCase()!==c.toLowerCase())&&p(new Lq(n,i)),E)try{var F=r.getMessageFormat(E,c,m,a);return F.format(t)}catch(w){return p(new Lu('Error formatting default message for: "'.concat(T,'", rendering default message verbatim'),i,n,w)),typeof E=="string"?E:T}return T}try{var F=r.getMessageFormat(x,i,u,ge({formatters:r},a||{}));return F.format(t)}catch(w){p(new Lu('Error formatting message: "'.concat(T,'", using ').concat(E?"default message":"id"," as fallback."),i,n,w))}if(E)try{var F=r.getMessageFormat(E,c,m,a);return F.format(t)}catch(w){p(new Lu('Error formatting the default message for: "'.concat(T,'", rendering message verbatim'),i,n,w))}return typeof x=="string"?x:typeof E=="string"?E:T},Wq=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function oo(e,r,n,t){var a=e.locale,i=e.formats,u=e.onError,d=e.timeZone;t===void 0&&(t={});var c=t.format,m=ge(ge({},d&&{timeZone:d}),c&&nc(i,r,c,u)),g=cs(t,Wq,m);return r==="time"&&!g.hour&&!g.minute&&!g.second&&!g.timeStyle&&!g.dateStyle&&(g=ge(ge({},g),{hour:"numeric",minute:"numeric"})),n(a,g)}function Gq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],u=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return oo(e,"date",r,u).format(d)}catch(c){e.onError(new jt("Error formatting date.",e.locale,c))}return String(d)}function Yq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],u=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return oo(e,"time",r,u).format(d)}catch(c){e.onError(new jt("Error formatting time.",e.locale,c))}return String(d)}function zq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],u=n[2],d=u===void 0?{}:u,c=typeof a=="string"?new Date(a||0):a,m=typeof i=="string"?new Date(i||0):i;try{return oo(e,"dateTimeRange",r,d).formatRange(c,m)}catch(g){e.onError(new jt("Error formatting date time range.",e.locale,g))}return String(c)}function Kq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],u=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return oo(e,"date",r,u).formatToParts(d)}catch(c){e.onError(new jt("Error formatting date.",e.locale,c))}return[]}function Xq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],u=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return oo(e,"time",r,u).formatToParts(d)}catch(c){e.onError(new jt("Error formatting time.",e.locale,c))}return[]}var Zq=["style","type","fallback","languageDisplay"];function Qq(e,r,n,t){var a=e.locale,i=e.onError,u=Intl.DisplayNames;u||i(new Zr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,gr.MISSING_INTL_API));var d=cs(t,Zq);try{return r(a,d).of(n)}catch(c){i(new jt("Error formatting display name.",a,c))}}var Jq=["type","style"],pp=Date.now();function ej(e){return"".concat(pp,"_").concat(e,"_").concat(pp)}function nj(e,r,n,t){t===void 0&&(t={});var a=hv(e,r,n,t).reduce(function(i,u){var d=u.value;return typeof d!="string"?i.push(d):typeof i[i.length-1]=="string"?i[i.length-1]+=d:i.push(d),i},[]);return a.length===1?a[0]:a.length===0?"":a}function hv(e,r,n,t){var a=e.locale,i=e.onError;t===void 0&&(t={});var u=Intl.ListFormat;u||i(new Zr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,gr.MISSING_INTL_API));var d=cs(t,Jq);try{var c={},m=n.map(function(g,p){if(typeof g=="object"){var y=ej(p);return c[y]=g,y}return String(g)});return r(a,d).formatToParts(m).map(function(g){return g.type==="literal"?g:ge(ge({},g),{value:c[g.value]||g.value})})}catch(g){i(new jt("Error formatting list.",a,g))}return n}var tj=["type"];function rj(e,r,n,t){var a=e.locale,i=e.onError;t===void 0&&(t={}),Intl.PluralRules||i(new Zr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,gr.MISSING_INTL_API));var u=cs(t,tj);try{return r(a,u).select(n)}catch(d){i(new jt("Error formatting plural.",a,d))}return"other"}var aj=["numeric","style"];function sj(e,r,n){var t=e.locale,a=e.formats,i=e.onError;n===void 0&&(n={});var u=n.format,d=!!u&&nc(a,"relative",u,i)||{},c=cs(n,aj,d);return r(t,c)}function oj(e,r,n,t,a){a===void 0&&(a={}),t||(t="second");var i=Intl.RelativeTimeFormat;i||e.onError(new Zr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,gr.MISSING_INTL_API));try{return sj(e,r,a).format(n,t)}catch(u){e.onError(new jt("Error formatting relative time.",e.locale,u))}return String(n)}var ij=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function yv(e,r,n){var t=e.locale,a=e.formats,i=e.onError;n===void 0&&(n={});var u=n.format,d=u&&nc(a,"number",u,i)||{},c=cs(n,ij,d);return r(t,c)}function lj(e,r,n,t){t===void 0&&(t={});try{return yv(e,r,t).format(n)}catch(a){e.onError(new jt("Error formatting number.",e.locale,a))}return String(n)}function uj(e,r,n,t){t===void 0&&(t={});try{return yv(e,r,t).formatToParts(n)}catch(a){e.onError(new jt("Error formatting number.",e.locale,a))}return[]}function dj(e){var r=e?e[Object.keys(e)[0]]:void 0;return typeof r=="string"}function cj(e){e.onWarn&&e.defaultRichTextElements&&dj(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function fj(e,r){var n=Uq(r),t=ge(ge({},gv),e),a=t.locale,i=t.defaultLocale,u=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&u?u(new fp('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&u&&u(new fp('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(u&&u(new Cq('"locale" was not configured, using "'.concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),cj(t),ge(ge({},t),{formatters:n,formatNumber:lj.bind(null,t,n.getNumberFormat),formatNumberToParts:uj.bind(null,t,n.getNumberFormat),formatRelativeTime:oj.bind(null,t,n.getRelativeTimeFormat),formatDate:Gq.bind(null,t,n.getDateTimeFormat),formatDateToParts:Kq.bind(null,t,n.getDateTimeFormat),formatTime:Yq.bind(null,t,n.getDateTimeFormat),formatDateTimeRange:zq.bind(null,t,n.getDateTimeFormat),formatTimeToParts:Xq.bind(null,t,n.getDateTimeFormat),formatPlural:rj.bind(null,t,n.getPluralRules),formatMessage:md.bind(null,t,n),$t:md.bind(null,t,n),formatList:nj.bind(null,t,n.getListFormat),formatListToParts:hv.bind(null,t,n.getListFormat),formatDisplayName:Qq.bind(null,t,n.getDisplayNames)})}function mj(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}function gj(e){mj(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var pj=ge(ge({},gv),{textComponent:O.Fragment}),hj={key:42},yj=function(e){return O.isValidElement(e)?O.createElement(O.Fragment,hj,e):e},vj=function(e){var r;return(r=O.Children.map(e,yj))!==null&&r!==void 0?r:[]};function kj(e){return function(r){return e(O.Children.toArray(r))}}var hp={exports:{}},ze={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function bj(){if(yp)return ze;yp=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,D=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,T=e?Symbol.for("react.fundamental"):60117,x=e?Symbol.for("react.responder"):60118,F=e?Symbol.for("react.scope"):60119;function w(k){if(typeof k=="object"&&k!==null){var N=k.$$typeof;switch(N){case r:switch(k=k.type,k){case c:case m:case t:case i:case a:case p:return k;default:switch(k=k&&k.$$typeof,k){case d:case g:case D:case v:case u:return k;default:return N}}case n:return N}}}function M(k){return w(k)===m}return ze.AsyncMode=c,ze.ConcurrentMode=m,ze.ContextConsumer=d,ze.ContextProvider=u,ze.Element=r,ze.ForwardRef=g,ze.Fragment=t,ze.Lazy=D,ze.Memo=v,ze.Portal=n,ze.Profiler=i,ze.StrictMode=a,ze.Suspense=p,ze.isAsyncMode=function(k){return M(k)||w(k)===c},ze.isConcurrentMode=M,ze.isContextConsumer=function(k){return w(k)===d},ze.isContextProvider=function(k){return w(k)===u},ze.isElement=function(k){return typeof k=="object"&&k!==null&&k.$$typeof===r},ze.isForwardRef=function(k){return w(k)===g},ze.isFragment=function(k){return w(k)===t},ze.isLazy=function(k){return w(k)===D},ze.isMemo=function(k){return w(k)===v},ze.isPortal=function(k){return w(k)===n},ze.isProfiler=function(k){return w(k)===i},ze.isStrictMode=function(k){return w(k)===a},ze.isSuspense=function(k){return w(k)===p},ze.isValidElementType=function(k){return typeof k=="string"||typeof k=="function"||k===t||k===m||k===i||k===a||k===p||k===y||typeof k=="object"&&k!==null&&(k.$$typeof===D||k.$$typeof===v||k.$$typeof===u||k.$$typeof===d||k.$$typeof===g||k.$$typeof===T||k.$$typeof===x||k.$$typeof===F||k.$$typeof===E)},ze.typeOf=w,ze}var vp;function wj(){return vp||(vp=1,hp.exports=bj()),hp.exports}var $u,kp;function _j(){if(kp)return $u;kp=1;var e=wj(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[e.ForwardRef]=t,i[e.Memo]=a;function u(D){return e.isMemo(D)?a:i[D.$$typeof]||r}var d=Object.defineProperty,c=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;function v(D,E,T){if(typeof E!="string"){if(y){var x=p(E);x&&x!==y&&v(D,x,T)}var F=c(E);m&&(F=F.concat(m(E)));for(var w=u(D),M=u(E),k=0;k<F.length;++k){var N=F[k];if(!n[N]&&!(T&&T[N])&&!(M&&M[N])&&!(w&&w[N])){var R=g(E,N);try{d(D,N,R)}catch{}}}}return D}return $u=v,$u}_j();var tc=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=O.createContext(null)):O.createContext(null);tc.Consumer;tc.Provider;var Tj=tc;function vv(){var e=O.useContext(Tj);return gj(e),e}var gd;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(gd||(gd={}));var pd;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(pd||(pd={}));function kv(e){var r=function(n){var t=vv(),a=n.value,i=n.children,u=Ki(n,["value","children"]),d=typeof a=="string"?new Date(a||0):a,c=e==="formatDate"?t.formatDateToParts(d,u):t.formatTimeToParts(d,u);return i(c)};return r.displayName=pd[e],r}function io(e){var r=function(n){var t=vv(),a=n.value,i=n.children,u=Ki(n,["value","children"]),d=t[e](a,u);if(typeof i=="function")return i(d);var c=t.textComponent||O.Fragment;return O.createElement(c,null,d)};return r.displayName=gd[e],r}function bv(e){return e&&Object.keys(e).reduce(function(r,n){var t=e[n];return r[n]=fv(t)?kj(t):t,r},{})}var bp=function(e,r,n,t){for(var a=[],i=4;i<arguments.length;i++)a[i-4]=arguments[i];var u=bv(t),d=md.apply(void 0,sr([e,r,n,u],a,!1));return Array.isArray(d)?vj(d):d},Sj=function(e,r){var n=e.defaultRichTextElements,t=Ki(e,["defaultRichTextElements"]),a=bv(n),i=fj(ge(ge(ge({},pj),t),{defaultRichTextElements:a}),r),u={locale:i.locale,timeZone:i.timeZone,fallbackOnEmptyString:i.fallbackOnEmptyString,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:a};return ge(ge({},i),{formatMessage:bp.bind(null,u,i.formatters),$t:bp.bind(null,u,i.formatters)})};io("formatDate");io("formatTime");io("formatNumber");io("formatList");io("formatDisplayName");kv("formatDate");kv("formatTime");function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hd={exports:{}},Ej=hd.exports,wp;function Oj(){return wp||(wp=1,function(e,r){(function(n,t){e.exports=t()})(Ej,function(){var n,t,a=1e3,i=6e4,u=36e5,d=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,g=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:m,months:g,days:d,hours:u,minutes:i,seconds:a,milliseconds:1,weeks:6048e5},v=function(N){return N instanceof M},D=function(N,R,A){return new M(N,A,R.$l)},E=function(N){return t.p(N)+"s"},T=function(N){return N<0},x=function(N){return T(N)?Math.ceil(N):Math.floor(N)},F=function(N){return Math.abs(N)},w=function(N,R){return N?T(N)?{negative:!0,format:""+F(N)+R}:{negative:!1,format:""+N+R}:{negative:!1,format:""}},M=function(){function N(A,j,z){var V=this;if(this.$d={},this.$l=z,A===void 0&&(this.$ms=0,this.parseFromMilliseconds()),j)return D(A*y[E(j)],this);if(typeof A=="number")return this.$ms=A,this.parseFromMilliseconds(),this;if(typeof A=="object")return Object.keys(A).forEach(function(U){V.$d[E(U)]=A[U]}),this.calMilliseconds(),this;if(typeof A=="string"){var W=A.match(p);if(W){var L=W.slice(2).map(function(U){return U!=null?Number(U):0});return this.$d.years=L[0],this.$d.months=L[1],this.$d.weeks=L[2],this.$d.days=L[3],this.$d.hours=L[4],this.$d.minutes=L[5],this.$d.seconds=L[6],this.calMilliseconds(),this}}return this}var R=N.prototype;return R.calMilliseconds=function(){var A=this;this.$ms=Object.keys(this.$d).reduce(function(j,z){return j+(A.$d[z]||0)*y[z]},0)},R.parseFromMilliseconds=function(){var A=this.$ms;this.$d.years=x(A/m),A%=m,this.$d.months=x(A/g),A%=g,this.$d.days=x(A/d),A%=d,this.$d.hours=x(A/u),A%=u,this.$d.minutes=x(A/i),A%=i,this.$d.seconds=x(A/a),A%=a,this.$d.milliseconds=A},R.toISOString=function(){var A=w(this.$d.years,"Y"),j=w(this.$d.months,"M"),z=+this.$d.days||0;this.$d.weeks&&(z+=7*this.$d.weeks);var V=w(z,"D"),W=w(this.$d.hours,"H"),L=w(this.$d.minutes,"M"),U=this.$d.seconds||0;this.$d.milliseconds&&(U+=this.$d.milliseconds/1e3,U=Math.round(1e3*U)/1e3);var G=w(U,"S"),$=A.negative||j.negative||V.negative||W.negative||L.negative||G.negative,J=W.format||L.format||G.format?"T":"",Y=($?"-":"")+"P"+A.format+j.format+V.format+J+W.format+L.format+G.format;return Y==="P"||Y==="-P"?"P0D":Y},R.toJSON=function(){return this.toISOString()},R.format=function(A){var j=A||"YYYY-MM-DDTHH:mm:ss",z={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return j.replace(c,function(V,W){return W||String(z[V])})},R.as=function(A){return this.$ms/y[E(A)]},R.get=function(A){var j=this.$ms,z=E(A);return z==="milliseconds"?j%=1e3:j=z==="weeks"?x(j/y[z]):this.$d[z],j||0},R.add=function(A,j,z){var V;return V=j?A*y[E(j)]:v(A)?A.$ms:D(A,this).$ms,D(this.$ms+V*(z?-1:1),this)},R.subtract=function(A,j){return this.add(A,j,!0)},R.locale=function(A){var j=this.clone();return j.$l=A,j},R.clone=function(){return D(this.$ms,this)},R.humanize=function(A){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!A)},R.valueOf=function(){return this.asMilliseconds()},R.milliseconds=function(){return this.get("milliseconds")},R.asMilliseconds=function(){return this.as("milliseconds")},R.seconds=function(){return this.get("seconds")},R.asSeconds=function(){return this.as("seconds")},R.minutes=function(){return this.get("minutes")},R.asMinutes=function(){return this.as("minutes")},R.hours=function(){return this.get("hours")},R.asHours=function(){return this.as("hours")},R.days=function(){return this.get("days")},R.asDays=function(){return this.as("days")},R.weeks=function(){return this.get("weeks")},R.asWeeks=function(){return this.as("weeks")},R.months=function(){return this.get("months")},R.asMonths=function(){return this.as("months")},R.years=function(){return this.get("years")},R.asYears=function(){return this.as("years")},N}(),k=function(N,R,A){return N.add(R.years()*A,"y").add(R.months()*A,"M").add(R.days()*A,"d").add(R.hours()*A,"h").add(R.minutes()*A,"m").add(R.seconds()*A,"s").add(R.milliseconds()*A,"ms")};return function(N,R,A){n=A,t=A().$utils(),A.duration=function(V,W){var L=A.locale();return D(V,{$l:L},W)},A.isDuration=v;var j=R.prototype.add,z=R.prototype.subtract;R.prototype.add=function(V,W){return v(V)?k(this,V,1):j.bind(this)(V,W)},R.prototype.subtract=function(V,W){return v(V)?k(this,V,-1):z.bind(this)(V,W)}}})}(hd)),hd.exports}var Dj=Oj();const xj=rc(Dj);var yd={exports:{}},Rj=yd.exports,_p;function Fj(){return _p||(_p=1,function(e,r){(function(n,t){e.exports=t()})(Rj,function(){var n="day";return function(t,a,i){var u=function(m){return m.add(4-m.isoWeekday(),n)},d=a.prototype;d.isoWeekYear=function(){return u(this).year()},d.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),n);var g,p,y,v,D=u(this),E=(g=this.isoWeekYear(),p=this.$u,y=(p?i.utc:i)().year(g).startOf("year"),v=4-y.isoWeekday(),y.isoWeekday()>4&&(v+=7),y.add(v,n));return D.diff(E,"week")+1},d.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var c=d.startOf;d.startOf=function(m,g){var p=this.$utils(),y=!!p.u(g)||g;return p.p(m)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(m,g)}}})}(yd)),yd.exports}var Nj=Fj();const Aj=rc(Nj);var vd={exports:{}},Pj=vd.exports,Tp;function Mj(){return Tp||(Tp=1,function(e,r){(function(n,t){e.exports=t()})(Pj,function(){var n="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(i,u,d){var c=u.prototype;d.utc=function(E){var T={date:E,utc:!0,args:arguments};return new u(T)},c.utc=function(E){var T=d(this.toDate(),{locale:this.$L,utc:!0});return E?T.add(this.utcOffset(),n):T},c.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var m=c.parse;c.parse=function(E){E.utc&&(this.$u=!0),this.$utils().u(E.$offset)||(this.$offset=E.$offset),m.call(this,E)};var g=c.init;c.init=function(){if(this.$u){var E=this.$d;this.$y=E.getUTCFullYear(),this.$M=E.getUTCMonth(),this.$D=E.getUTCDate(),this.$W=E.getUTCDay(),this.$H=E.getUTCHours(),this.$m=E.getUTCMinutes(),this.$s=E.getUTCSeconds(),this.$ms=E.getUTCMilliseconds()}else g.call(this)};var p=c.utcOffset;c.utcOffset=function(E,T){var x=this.$utils().u;if(x(E))return this.$u?0:x(this.$offset)?p.call(this):this.$offset;if(typeof E=="string"&&(E=function(k){k===void 0&&(k="");var N=k.match(t);if(!N)return null;var R=(""+N[0]).match(a)||["-",0,0],A=R[0],j=60*+R[1]+ +R[2];return j===0?0:A==="+"?j:-j}(E),E===null))return this;var F=Math.abs(E)<=16?60*E:E,w=this;if(T)return w.$offset=F,w.$u=E===0,w;if(E!==0){var M=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(w=this.local().add(F+M,n)).$offset=F,w.$x.$localOffset=M}else w=this.utc();return w};var y=c.format;c.format=function(E){var T=E||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,T)},c.valueOf=function(){var E=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*E},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var v=c.toDate;c.toDate=function(E){return E==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():v.call(this)};var D=c.diff;c.diff=function(E,T,x){if(E&&this.$u===E.$u)return D.call(this,E,T,x);var F=this.local(),w=d(E).local();return D.call(F,w,T,x)}}})}(vd)),vd.exports}var Bj=Mj();const qj=rc(Bj),jj=pv(),Xi=e=>Sj({locale:"nb-NO",messages:e},jj),Zi={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Xi(Zi);var kd={exports:{}},Ij=kd.exports,Sp;function Cj(){return Sp||(Sp=1,function(e,r){(function(n,t){e.exports=t(ao)})(Ij,function(n){function t(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var a=t(n),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(i,null,!0),i})}(kd)),kd.exports}Cj();ao.extend(qj);ao.extend(Aj);ao.extend(xj);Xi(Zi);Xi(Zi);var Ep={exports:{}},js={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function Lj(){if(Op)return js;Op=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var u=null;if(i!==void 0&&(u=""+i),a.key!==void 0&&(u=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:u,ref:a!==void 0?a:null,props:i}}return js.Fragment=r,js.jsx=n,js.jsxs=n,js}var Dp;function $j(){return Dp||(Dp=1,Ep.exports=Lj()),Ep.exports}$j();Xi(Zi);O.createContext({});var bd={exports:{}},Hj=bd.exports,xp;function Vj(){return xp||(xp=1,function(e,r){(function(n,t){e.exports=t()})(Hj,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,u=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,c={},m=function(T){return(T=+T)+(T>68?1900:2e3)},g=function(T){return function(x){this[T]=+x}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(T){(this.zone||(this.zone={})).offset=function(x){if(!x||x==="Z")return 0;var F=x.match(/([+-]|\d\d)/g),w=60*F[1]+(+F[2]||0);return w===0?0:F[0]==="+"?-w:w}(T)}],y=function(T){var x=c[T];return x&&(x.indexOf?x:x.s.concat(x.f))},v=function(T,x){var F,w=c.meridiem;if(w){for(var M=1;M<=24;M+=1)if(T.indexOf(w(M,0,x))>-1){F=M>12;break}}else F=T===(x?"pm":"PM");return F},D={A:[d,function(T){this.afternoon=v(T,!1)}],a:[d,function(T){this.afternoon=v(T,!0)}],Q:[a,function(T){this.month=3*(T-1)+1}],S:[a,function(T){this.milliseconds=100*+T}],SS:[i,function(T){this.milliseconds=10*+T}],SSS:[/\d{3}/,function(T){this.milliseconds=+T}],s:[u,g("seconds")],ss:[u,g("seconds")],m:[u,g("minutes")],mm:[u,g("minutes")],H:[u,g("hours")],h:[u,g("hours")],HH:[u,g("hours")],hh:[u,g("hours")],D:[u,g("day")],DD:[i,g("day")],Do:[d,function(T){var x=c.ordinal,F=T.match(/\d+/);if(this.day=F[0],x)for(var w=1;w<=31;w+=1)x(w).replace(/\[|\]/g,"")===T&&(this.day=w)}],w:[u,g("week")],ww:[i,g("week")],M:[u,g("month")],MM:[i,g("month")],MMM:[d,function(T){var x=y("months"),F=(y("monthsShort")||x.map(function(w){return w.slice(0,3)})).indexOf(T)+1;if(F<1)throw new Error;this.month=F%12||F}],MMMM:[d,function(T){var x=y("months").indexOf(T)+1;if(x<1)throw new Error;this.month=x%12||x}],Y:[/[+-]?\d+/,g("year")],YY:[i,function(T){this.year=m(T)}],YYYY:[/\d{4}/,g("year")],Z:p,ZZ:p};function E(T){var x,F;x=T,F=c&&c.formats;for(var w=(T=x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(z,V,W){var L=W&&W.toUpperCase();return V||F[W]||n[W]||F[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(U,G,$){return G||$.slice(1)})})).match(t),M=w.length,k=0;k<M;k+=1){var N=w[k],R=D[N],A=R&&R[0],j=R&&R[1];w[k]=j?{regex:A,parser:j}:N.replace(/^\[|\]$/g,"")}return function(z){for(var V={},W=0,L=0;W<M;W+=1){var U=w[W];if(typeof U=="string")L+=U.length;else{var G=U.regex,$=U.parser,J=z.slice(L),Y=G.exec(J)[0];$.call(V,Y),z=z.replace(Y,"")}}return function(re){var se=re.afternoon;if(se!==void 0){var de=re.hours;se?de<12&&(re.hours+=12):de===12&&(re.hours=0),delete re.afternoon}}(V),V}}return function(T,x,F){F.p.customParseFormat=!0,T&&T.parseTwoDigitYear&&(m=T.parseTwoDigitYear);var w=x.prototype,M=w.parse;w.parse=function(k){var N=k.date,R=k.utc,A=k.args;this.$u=R;var j=A[1];if(typeof j=="string"){var z=A[2]===!0,V=A[3]===!0,W=z||V,L=A[2];V&&(L=A[2]),c=this.$locale(),!z&&L&&(c=F.Ls[L]),this.$d=function(J,Y,re,se){try{if(["x","X"].indexOf(Y)>-1)return new Date((Y==="X"?1e3:1)*J);var de=E(Y)(J),Te=de.year,Ee=de.month,Ge=de.day,me=de.hours,he=de.minutes,Le=de.seconds,Ve=de.milliseconds,en=de.zone,nn=de.week,on=new Date,mn=Ge||(Te||Ee?1:on.getDate()),Rn=Te||on.getFullYear(),tn=0;Te&&!Ee||(tn=Ee>0?Ee-1:on.getMonth());var Dn,dt=me||0,wn=he||0,ct=Le||0,nt=Ve||0;return en?new Date(Date.UTC(Rn,tn,mn,dt,wn,ct,nt+60*en.offset*1e3)):re?new Date(Date.UTC(Rn,tn,mn,dt,wn,ct,nt)):(Dn=new Date(Rn,tn,mn,dt,wn,ct,nt),nn&&(Dn=se(Dn).week(nn).toDate()),Dn)}catch{return new Date("")}}(N,j,R,F),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),W&&N!=this.format(j)&&(this.$d=new Date("")),c={}}else if(j instanceof Array)for(var U=j.length,G=1;G<=U;G+=1){A[1]=j[G-1];var $=F.apply(this,A);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}G===U&&(this.$d=new Date(""))}else M.call(this,k)}}})}(bd)),bd.exports}var Uj=Vj();const Wj=Ky(Uj);ao.extend(Wj);_t(ro);const Gj=(e,r,n,t)=>e&&Object.keys(r).length>0?dr(Object.values(r)[0]):t?dr(t):e?n?dr(n):"-":null,wv=({soknad:e,termindato:r})=>{const n=e.fodselsdatoer?e.fodselsdatoer:{},t=Object.keys(n).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(n).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",i=Gj(!!e,n,e.termindato,r);return Q.jsxs(Bt,{gap:"4",children:[Q.jsx(Ai,{size:"small",children:Q.jsx(yn,{id:a})}),Q.jsxs(zt,{gap:"4",children:[e.utstedtdato&&Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.UstedtDato"})}),Q.jsx(fn,{size:"small",children:dr(e.utstedtdato)})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:t})}),Q.jsx(fn,{size:"small",children:i})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.AntallBarn"})}),Q.jsx(fn,{size:"small",children:e.antallBarn})]})]})]})};wv.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const Yj=(e,r,n)=>{if(!r&&!n)return"";const t=n??{termindato:void 0,avklartBarn:[]};if(e){const a=(t==null?void 0:t.termindato)??(r==null?void 0:r.termindato);return a?dr(a):void 0}return t.avklartBarn&&t.avklartBarn.length>0?dr(t.avklartBarn[0].fodselsdato):r!=null&&r.fodselsdatoer?dr(Object.values(r.fodselsdatoer)[0]):"-"},zj=(e,r,n)=>{if(!r&&!n)return 0;const t=n??{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?t.termindato?t.antallBarnTermin:r==null?void 0:r.antallBarn:t.avklartBarn&&t.avklartBarn.length>0?t.avklartBarn.length:r==null?void 0:r.antallBarn},_v=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:r,familiehendelseOriginalBehandling:n})=>{const t=n&&!!n.termindato||!(r!=null&&r.fodselsdatoer)||Object.keys(r.fodselsdatoer).length===0,a=t?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",i=Yj(t,r,n),u=zj(t,r,n),d=n?(!n.avklartBarn||n.avklartBarn.length===0)&&!!e:!1;return Q.jsxs(Bt,{gap:"4",children:[Q.jsx(Ai,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),Q.jsxs(zt,{gap:"4",children:[d&&Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),Q.jsx(fn,{size:"small",children:e})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:a})}),Q.jsx(fn,{size:"small",children:i??"-"})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.AntallBarn"})}),Q.jsx(fn,{size:"small",children:u??"-"})]})]})]})};_v.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const Kj="_noChildrenInTps_yb1cb_1",Xj="_col_yb1cb_5",Hu={noChildrenInTps:Kj,col:Xj},Tv=({behandlingsTypeKode:e,avklartBarn:r,nrOfDodfodteBarn:n,soknad:t,vedtaksDatoSomSvangerskapsuke:a,termindato:i,soknadOriginalBehandling:u,familiehendelseOriginalBehandling:d})=>Q.jsxs(zt,{gap:"10",children:[Q.jsxs("div",{className:Hu.col,children:[e!==qm.REVURDERING&&Q.jsx(wv,{soknad:t,termindato:i}),e===qm.REVURDERING&&Q.jsx(_v,{soknadOriginalBehandling:u,familiehendelseOriginalBehandling:d,vedtaksDatoSomSvangerskapsuke:a})]}),Q.jsxs("div",{className:Hu.col,children:[Q.jsxs(zt,{gap:"4",children:[Q.jsx(Ai,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.OpplysningerTPS"})}),n>0&&Q.jsx(Xu,{variant:"info",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Dodfodt"})})]}),r.length>0&&Q.jsxs(Bn,{children:[Q.jsx(Bn.Header,{children:Q.jsxs(Bn.Row,{children:[Q.jsx(Bn.HeaderCell,{scope:"col",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Fodselsdato"})}),Q.jsx(Bn.HeaderCell,{scope:"col",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Dodsdato"})}),Q.jsx(Bn.HeaderCell,{scope:"col"})]})}),Q.jsx(Bn.Body,{children:r.map(c=>{const m=c.fodselsdato+c.dodsdato;return Q.jsxs(Bn.Row,{id:m,children:[Q.jsx(Bn.DataCell,{children:Q.jsx(fn,{size:"small",children:dr(c.fodselsdato)})}),Q.jsx(Bn.DataCell,{children:Q.jsx(fn,{size:"small",children:c.dodsdato?dr(c.dodsdato):"-"})}),Q.jsx(Bn.DataCell,{children:c.dodsdato&&Q.jsx(Xu,{variant:"info",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Dod"})})})]},m)})})]}),r.length===0&&Q.jsx("div",{className:Hu.noChildrenInTps,children:Q.jsx(fn,{size:"small",children:"-"})})]})]});Tv.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const Zj={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},Qj=_t(Zj),ac=({behandlingsTypeKode:e,avklartBarn:r=[],termindato:n,vedtaksDatoSomSvangerskapsuke:t,soknad:a,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:u})=>{const d=r.reduce((c,m)=>c+(m.dodsdato?1:0),0);return Q.jsx(Fi,{value:Qj,children:Q.jsx(Tv,{avklartBarn:r,termindato:n,vedtaksDatoSomSvangerskapsuke:t,nrOfDodfodteBarn:d,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:u})})};ac.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Vu="avklartBarn",Jj={fodselsdato:void 0,dodsdato:void 0},Sv=({readOnly:e})=>{const r=xi(),{control:n,watch:t}=Xt(),{fields:a,remove:i,append:u}=gP({control:n,name:Vu}),d=t("avklartBarn");return Q.jsx(mM,{fields:a,emptyPeriodTemplate:Jj,readOnly:e,bodyText:r.formatMessage({id:"AvklartBarnFieldArray.LeggTilBarn"}),shouldShowAddButton:d.length<9,remove:i,append:u,children:(c,m,g=()=>"-")=>Q.jsx(b.Fragment,{children:Q.jsxs(zt,{gap:"4",align:"end",children:[Q.jsx(Oi,{name:`${Vu}.${m}.fodselsdato`,label:r.formatMessage({id:"AvklartBarnFieldArray.Title"}),validate:[Di,Ja,Kg],isReadOnly:e}),Q.jsx(Oi,{name:`${Vu}.${m}.dodsdato`,label:r.formatMessage({id:"AvklartBarnFieldArray.Dodsdato"}),validate:[Di,Kg],isReadOnly:e}),!e&&g()]})},c.id)})};Sv.__docgenInfo={description:"",methods:[],displayName:"AvklartBarnFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const eI="_clearfix_yy4j0_1",nI={clearfix:eI},fs=({readOnly:e,submittable:r,behandlingType:n,soknad:t,soknadOriginalBehandling:a,familiehendelseOriginalBehandling:i,alleMerknaderFraBeslutter:u,familiehendelse:d})=>{const c=xi(),{watch:m}=Xt(),{gjeldende:g,register:p}=d,y=m("dokumentasjonForeligger")||!1,v=m("begrunnelse")||!1,{termindato:D,vedtaksDatoSomSvangerskapsuke:E}=g;return Q.jsxs(Bt,{gap:"4",children:[Q.jsx(ac,{behandlingsTypeKode:n,avklartBarn:p==null?void 0:p.avklartBarn,termindato:D,vedtaksDatoSomSvangerskapsuke:E,soknad:t,soknadOriginalBehandling:a,familiehendelseOriginalBehandling:i}),Q.jsx(nd,{title:c.formatMessage({id:"SjekkFodselDokForm.DokumentasjonAvFodsel"}),merknaderFraBeslutter:u[qt.SJEKK_MANGLENDE_FODSEL],children:Q.jsxs(Bt,{gap:"2",children:[Q.jsx(rM,{name:"dokumentasjonForeligger",isEdited:Yy(g.dokumentasjonForeligger),hideLegend:!0,validate:[Ja],isReadOnly:e,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:Q.jsx(yn,{id:"SjekkFodselDokForm.DokumentasjonForeligger"}),value:"true"},{label:Q.jsx(yn,{id:"SjekkFodselDokForm.DokumentasjonForeliggerIkke"}),value:"false"}]}),y&&Q.jsx("div",{className:nI.clearfix,children:Q.jsx(SP,{children:Q.jsxs(Bt,{gap:"2",children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"SjekkFodselDokForm.FyllInnDokumenterteOpplysninger"})}),Q.jsx(Sv,{readOnly:e})]})})})]})}),Q.jsx(qr,{isSubmittable:r,isReadOnly:e,hasBegrunnelse:!!v})]})},tI=e=>{let r=e;(r===0||!r)&&(r=1);const n=[];for(;r>0;)n.push({fodselsdato:void 0,dodsdato:void 0}),r-=1;return n},rI=e=>e.map(r=>({fodselsdato:r.fodselsdato,dodsdato:r.dodsdato===""||r.dodsdato===null?void 0:r.dodsdato}));fs.buildInitialValues=(e,r,n)=>({dokumentasjonForeligger:r.dokumentasjonForeligger!==null?r.dokumentasjonForeligger:void 0,brukAntallBarnITps:r.brukAntallBarnFraTps!==null?r.brukAntallBarnFraTps:void 0,avklartBarn:r.avklartBarn&&r.avklartBarn.length>0?r.avklartBarn:tI(e.antallBarn||0),...qr.initialValues(n)});fs.transformValues=(e,r)=>({kode:qt.SJEKK_MANGLENDE_FODSEL,dokumentasjonForeligger:e.dokumentasjonForeligger,uidentifiserteBarn:rI(e.avklartBarn),brukAntallBarnITps:r&&r.length?e.brukAntallBarnITps:!1,...qr.transformValues(e)});fs.__docgenInfo={description:`FodselInfoPanel

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
}>`},description:""}}};const aI="_marginBottom_u0i22_1",sI="_bredde_u0i22_5",Rp={marginBottom:aI,bredde:sI},oI=gB(1),iI=pB(9),lI=(e,r)=>!!e&&!!r&&!lt(e).isAfter(lt(r).subtract(18,"weeks").subtract(4,"days")),ms=({readOnly:e,soknad:r,gjeldendeFamiliehendelse:n,submittable:t,alleMerknaderFraBeslutter:a})=>{const i=xi(),{watch:u}=Xt(),d=u("termindato"),c=u("utstedtdato"),m=u("begrunnelse"),g=lI(c,d),{avklartBarn:p}=n,y=p&&p.length>0?p[0].fodselsdato:void 0,v=p?p.length:0,D=n.erOverstyrt||!1;return Q.jsxs(Q.Fragment,{children:[Q.jsx(nd,{title:i.formatMessage({id:"TermindatoFaktaForm.ApplicationInformation"}),merknaderFraBeslutter:a[qt.TERMINBEKREFTELSE],children:Q.jsxs(zt,{gap:"4",children:[Q.jsx(Oi,{name:"utstedtdato",label:i.formatMessage({id:"TermindatoFaktaForm.UtstedtDato"}),validate:[Ja,Di],isReadOnly:e,isEdited:Mu(r.utstedtdato,n.utstedtdato)}),Q.jsx(Oi,{name:"termindato",label:i.formatMessage({id:"TermindatoFaktaForm.Termindato"}),validate:[Ja,Di],isReadOnly:e,isEdited:Mu(r.termindato,n.termindato)}),Q.jsx(eM,{name:"antallBarn",label:i.formatMessage({id:"TermindatoFaktaForm.AntallBarn"}),parse:E=>{const T=parseInt(E.toString(),10);return Number.isNaN(T)?E:T},validate:[Ja,vB,oI,iI],readOnly:e,className:Rp.bredde,isEdited:Mu(r.antallBarn,n.antallBarnTermin)})]})}),Q.jsxs(Bt,{gap:"4",children:[y&&!D&&Q.jsx(nd,{title:i.formatMessage({id:"TermindatoFaktaForm.OpplysningerTPS"}),children:Q.jsxs(zt,{gap:"10",children:[Q.jsxs(Bt,{gap:"2",children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"TermindatoFaktaForm.FodselsdatoTps"})}),Q.jsx(fn,{size:"small",children:Q.jsx(jP,{dateString:y})})]}),Q.jsxs(Bt,{gap:"2",children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"TermindatoFaktaForm.AntallBarnTps"})}),Q.jsx(fn,{size:"small",children:v})]})]})}),Q.jsx(qr,{isSubmittable:t,isReadOnly:e,hasBegrunnelse:!!m}),g&&Q.jsx(_h,{variant:"warning",className:Rp.marginBottom,children:Q.jsx(yn,{id:"TermindatoFaktaForm.AdvarselForTidligUtstedtdato"})})]})]})};ms.buildInitialValues=(e,r,n)=>{const t=e.antallBarn?e.antallBarn:NaN,a=e.utstedtdato??void 0;return{utstedtdato:r.utstedtdato??a,termindato:r.termindato??e.termindato,antallBarn:r.antallBarnTermin??t,...qr.initialValues(n)}};ms.transformValues=e=>({kode:qt.TERMINBEKREFTELSE,utstedtdato:e.utstedtdato,termindato:e.termindato,antallBarn:e.antallBarn,...qr.transformValues(e)});ms.__docgenInfo={description:`TermindatoFaktaForm

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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const{TERMINBEKREFTELSE:wd,SJEKK_MANGLENDE_FODSEL:_d}=qt,uI=e=>{const r=[];return di(wd,e)&&r.push(Q.jsx(yn,{id:"FodselInfoPanel.KontrollerMotTerminbekreftelsen"},"KontrollerMotTerminbekreftelsen")),di(_d,e)&&r.push(Q.jsx(yn,{id:"FodselInfoPanel.KontrollerMotFodselsdokumentasjon"},"KontrollerMotFodselsdokumentasjon")),r},dI=(e,r,n,t)=>({...n?ms.buildInitialValues(e,r.gjeldende,n):{},...t?fs.buildInitialValues(e,r.gjeldende,t):{}}),cI=(e,r,n,t)=>{const a=[];return n&&a.push(ms.transformValues(e)),t&&a.push(fs.transformValues(e,r)),a},Ev=({submittable:e,soknad:r,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:t,familiehendelse:a})=>{var w,M,k;const{submitCallback:i,behandling:u,aksjonspunkterForPanel:d,harÅpneAksjonspunkter:c,alleMerknaderFraBeslutter:m,isReadOnly:g}=eS(),p=((w=a==null?void 0:a.register)==null?void 0:w.avklartBarn)??[],y=((M=a==null?void 0:a.gjeldende)==null?void 0:M.termindato)??void 0,v=((k=a==null?void 0:a.gjeldende)==null?void 0:k.vedtaksDatoSomSvangerskapsuke)??void 0,D=d.find(N=>N.definisjon===wd),E=d.find(N=>N.definisjon===_d),{mellomlagretFormData:T,setMellomlagretFormData:x}=nS(),F=pP({defaultValues:T??dI(r,a,D,E)});return Q.jsxs(Bt,{gap:"2",children:[c&&Q.jsx(kP,{children:uI(d)}),Q.jsx(iM,{formMethods:F,onSubmit:N=>i(cI(N,p,D,E)),setDataOnUnmount:x,children:Q.jsxs(Bt,{gap:"2",children:[di(wd,d)&&Q.jsx(ms,{readOnly:g,submittable:e,alleMerknaderFraBeslutter:m,soknad:r,gjeldendeFamiliehendelse:a.gjeldende}),di(_d,d)&&Q.jsx(fs,{behandlingType:u.type,readOnly:g,submittable:e,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:t,alleMerknaderFraBeslutter:m,soknad:r,avklartBarn:p,familiehendelse:a}),d.length!==0&&!g&&Q.jsx(Gy,{isSubmittable:e,isReadOnly:g,isSubmitting:F.formState.isSubmitting,isDirty:F.formState.isDirty}),d.length===0&&Q.jsx(ac,{behandlingsTypeKode:u.type,avklartBarn:p,termindato:y,vedtaksDatoSomSvangerskapsuke:v,soknad:r,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:t})]})})]})};Ev.__docgenInfo={description:`FodselInfoPanel

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
}>`},description:""}}};const fI={"FodselInfoPanel.KontrollerMotTerminbekreftelsen":"Kontroller terminbekreftelse","FodselInfoPanel.KontrollerMotFodselsdokumentasjon":"Kontroller mot opplysningene fra fødselsdokumentasjonen","TermindatoFaktaForm.ApplicationInformation":"Opplysninger om termin oppgitt i søknaden","TermindatoFaktaForm.UtstedtDato":"Utstedt dato","TermindatoFaktaForm.Termindato":"Termindato","TermindatoFaktaForm.AntallBarn":"Antall barn","TermindatoFaktaForm.CheckInformation":"Kontroller og godkjenn opplysningene i terminbekreftelsen","TermindatoFaktaForm.14WeeksAndThreeDays":"Utstedtdato kan ikke være før 26. svangerskapsuke","TermindatoFaktaForm.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","TermindatoFaktaForm.FodselsdatoTps":"Fødselsdato","TermindatoFaktaForm.AntallBarnTps":"Antall barn","TermindatoFaktaForm.AdvarselForTidligUtstedtdato":"Terminbekreftelsen utstedt før 22. svangerskapsuke. Kontakt søker for en nyere terminbekreftelse og sett saken på vent. Fortsett dersom ny bekreftelse ikke skal hentes inn. Behandlingen vil avslås på grunn av manglende dokumentasjon","AvklartBarnFieldArray.Title":"Fødselsdato","AvklartBarnFieldArray.Dodsdato":"Dødsdato","AvklartBarnFieldArray.LeggTilBarn":"Legg til barn","SjekkFodselDokForm.DokumentasjonForeligger":"Dokumentasjon foreligger","SjekkFodselDokForm.DokumentasjonForeliggerIkke":"Dokumentasjon foreligger ikke, bruk opplysningene i folkeregisteret","SjekkFodselDokForm.DokumentasjonAvFodsel":"Dokumentasjon av fødsel","SjekkFodselDokForm.FyllInnDokumenterteOpplysninger":"Fyll inn dokumenterte opplysninger"},mI=_t(fI),Td=e=>Q.jsx(Fi,{value:mI,children:Q.jsx(Ev,{...e})});Td.__docgenInfo={description:"",methods:[],displayName:"FodselFaktaIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const gI={register:{avklartBarn:[{fodselsdato:"2019-01-10"}]},gjeldende:{avklartBarn:[{fodselsdato:"2019-01-01"}],termindato:"2019-01-01",utstedtdato:"2019-01-01",antallBarnTermin:1,vedtaksDatoSomSvangerskapsuke:43,erOverstyrt:!1,morForSykVedFodsel:!0,dokumentasjonForeligger:!0,brukAntallBarnFraTps:!0}},Ov={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1,soknadType:Yp.FODSEL},pI={...Ov},hI={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},sc=[{definisjon:qt.TERMINBEKREFTELSE,status:Up.OPPRETTET,begrunnelse:null,kanLoses:!0}],oc={notAccepted:!1},wI={title:"fakta/fakta-fodsel",component:Td,decorators:[tS,rS],args:{submittable:!0,soknad:Ov,familiehendelse:gI,soknadOriginalBehandling:pI,familiehendelseOriginalBehandling:hI},render:e=>Q.jsx(Td,{...e})},ri={args:{aksjonspunkterForPanel:sc,alleMerknaderFraBeslutter:{[qt.TERMINBEKREFTELSE]:oc}}},ai={args:{aksjonspunkterForPanel:sc.map(e=>({...e,definisjon:qt.SJEKK_MANGLENDE_FODSEL})),alleMerknaderFraBeslutter:{[qt.SJEKK_MANGLENDE_FODSEL]:oc}}},si={args:{isReadOnly:!0,aksjonspunkterForPanel:sc.map(e=>({...e,status:Up.UTFORT,definisjon:qt.SJEKK_MANGLENDE_FODSEL,begrunnelse:"Dette er en begrunnelse"})),alleMerknaderFraBeslutter:{[qt.SJEKK_MANGLENDE_FODSEL]:oc}}},oi={args:{aksjonspunkterForPanel:[],alleMerknaderFraBeslutter:{}}};var Fp,Np,Ap;ri.parameters={...ri.parameters,docs:{...(Fp=ri.parameters)==null?void 0:Fp.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: defaultAksjonspunkter,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.TERMINBEKREFTELSE]: merknaderFraBeslutter
    }
  }
}`,...(Ap=(Np=ri.parameters)==null?void 0:Np.docs)==null?void 0:Ap.source}}};var Pp,Mp,Bp;ai.parameters={...ai.parameters,docs:{...(Pp=ai.parameters)==null?void 0:Pp.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: defaultAksjonspunkter.map(a => ({
      ...a,
      definisjon: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL
    })),
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter
    }
  }
}`,...(Bp=(Mp=ai.parameters)==null?void 0:Mp.docs)==null?void 0:Bp.source}}};var qp,jp,Ip;si.parameters={...si.parameters,docs:{...(qp=si.parameters)==null?void 0:qp.docs,source:{originalSource:`{
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
}`,...(Ip=(jp=si.parameters)==null?void 0:jp.docs)==null?void 0:Ip.source}}};var Cp,Lp,$p;oi.parameters={...oi.parameters,docs:{...(Cp=oi.parameters)==null?void 0:Cp.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    alleMerknaderFraBeslutter: {}
  }
}`,...($p=(Lp=oi.parameters)==null?void 0:Lp.docs)==null?void 0:$p.source}}};const _I=["AksjonspunktTerminbekreftelse","AksjonspunktSjekkManglendeFødsel","ReadonlyPanel","PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter"];export{ai as AksjonspunktSjekkManglendeFødsel,ri as AksjonspunktTerminbekreftelse,oi as PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter,si as ReadonlyPanel,_I as __namedExportsOrder,wI as default};
