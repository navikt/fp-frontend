var XT=Object.defineProperty;var ZT=(e,r,n)=>r in e?XT(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var ce=(e,r,n)=>ZT(e,typeof r!="symbol"?r+"":r,n);import{g as Hp,r as E,u as xi,_ as Mm,s as Bm,c as Gs,a as ke,R as b,b as Ri,m as QT,d as ss,S as os,e as Vp,f as Ys,q as JT,o as dr,h as _t,i as lt,P as Ha,n as Is,j as Q,k as Fi,l as eS,p as Zo,B as qm,t as nS,v as tS,w as rS,x as aS,A as Up}from"./iframe-BOKoXQg-.js";import{r as sS}from"./index-DjVxpKgT.js";var Sd=sS();const Wp=Hp(Sd);function oS(e,r){var n=e.values,t=Mm(e,["values"]),a=r.values,i=Mm(r,["values"]);return Bm(a,n)&&Bm(t,i)}function Gp(e){var r=xi(),n=r.formatMessage,t=r.textComponent,a=t===void 0?E.Fragment:t,i=e.id,u=e.description,d=e.defaultMessage,c=e.values,m=e.children,g=e.tagName,p=g===void 0?a:g,y=e.ignoreTag,k={id:i,description:u,defaultMessage:d},O=n(k,c,{ignoreTag:y});return typeof m=="function"?m(Array.isArray(O)?O:[O]):p?E.createElement(p,null,O):E.createElement(E.Fragment,null,O)}Gp.displayName="FormattedMessage";var yn=E.memo(Gp,oS);yn.displayName="MemoizedFormattedMessage";var qt=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(qt||{});const di=(e,r)=>r.some(n=>n.definisjon===e);var Yp=(e=>(e.FODSEL="ST-001",e.ADOPSJON="ST-002",e))(Yp||{});const iS=(e,r)=>{if(e==null)throw Error("Data er ikke oppgitt");return e},is=e=>Gs({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var lS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const zp=E.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:i,truncate:u,weight:d="regular",align:c,visuallyHidden:m,textColor:g}=e,p=lS(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=ke();return b.createElement(a,Object.assign({},p,{ref:r,className:y(n,"navds-body-long",`navds-body-long--${t}`,is({spacing:i,truncate:u,weight:d,align:c,visuallyHidden:m,textColor:g}))}))});var uS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const fn=E.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:i,truncate:u,weight:d="regular",align:c,visuallyHidden:m,textColor:g}=e,p=uS(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=ke();return b.createElement(a,Object.assign({},p,{ref:r,className:y(n,"navds-body-short",`navds-body-short--${t}`,is({spacing:i,truncate:u,weight:d,align:c,visuallyHidden:m,textColor:g}))}))});var dS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ni=E.forwardRef((e,r)=>{var{className:n,size:t="medium",spacing:a,uppercase:i,as:u="p",truncate:d,weight:c="regular",align:m,visuallyHidden:g,textColor:p}=e,y=dS(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=ke();return b.createElement(u,Object.assign({},y,{ref:r,className:k(n,"navds-detail",is({spacing:a,truncate:d,weight:c,align:m,visuallyHidden:g,textColor:p,uppercase:i}),{"navds-detail--small":t==="small"})}))});var cS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ls=E.forwardRef((e,r)=>{var{children:n,className:t,size:a,spacing:i,as:u="p",showIcon:d=!1}=e,c=cS(e,["children","className","size","spacing","as","showIcon"]);const{cn:m}=ke();return b.createElement(u,Object.assign({},c,{ref:r,className:m("navds-error-message","navds-label",t,is({spacing:i}),{"navds-label--small":a==="small","navds-error-message--show-icon":d})}),d&&b.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},b.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),n)});var fS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ai=E.forwardRef((e,r)=>{var{level:n="1",size:t,className:a,as:i,spacing:u,align:d,visuallyHidden:c,textColor:m}=e,g=fS(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:p}=ke(),y=i??`h${n}`;return b.createElement(y,Object.assign({},g,{ref:r,className:p(a,"navds-heading",`navds-heading--${t}`,is({spacing:u,align:d,visuallyHidden:c,textColor:m}))}))});var mS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};E.forwardRef((e,r)=>{var{className:n,spacing:t,as:a="p"}=e,i=mS(e,["className","spacing","as"]);const{cn:u}=ke();return b.createElement(a,Object.assign({},i,{ref:r,className:u(n,"navds-ingress",{"navds-typo--spacing":!!t})}))});var gS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const jn=E.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="label",spacing:i,visuallyHidden:u,textColor:d}=e,c=gS(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:m}=ke();return b.createElement(a,Object.assign({},c,{ref:r,className:m(n,"navds-label",is({spacing:i,visuallyHidden:u,textColor:d}),{"navds-label--small":t==="small"})}))});function Kp(e,r=166,n=!1){let t;function a(...i){const u=()=>{t=void 0,e.apply(this,i)};!t&&n&&u(),clearTimeout(t),t=setTimeout(u,r)}return a.clear=()=>{clearTimeout(t)},a}function In(e,r){const n=Object.entries(e).filter(([t])=>!r.includes(t));return Object.fromEntries(n)}const es=globalThis!=null&&globalThis.document?E.useLayoutEffect:()=>{};let jm=0;function pS(e){const[r,n]=E.useState(e),t=e||r;return E.useEffect(()=>{r==null&&(jm+=1,n(`aksel-id-${jm}`))},[r]),t}const Im=b.useId;function fr(e){var r;if(Im!==void 0){const n=Im();return e??n.replace(/(:)/g,"")}return(r=pS(e))!==null&&r!==void 0?r:""}function Vs(e,r=[]){const n=E.useRef(e);return E.useEffect(()=>{n.current=e}),E.useCallback((...t)=>{var a;return(a=n.current)===null||a===void 0?void 0:a.call(n,...t)},r)}function ci({value:e,defaultValue:r,onChange:n}){const t=Vs(n),[a,i]=E.useState(r),u=e!==void 0,d=u?e:a,c=Vs(m=>{const p=typeof m=="function"?m(d):m;u||i(p),t(p)},[u,t,d]);return[d,c]}let Cm=0;function hS(e){const[r,n]=E.useState(e),t=e||r;return E.useEffect(()=>{r==null&&(Cm+=1,n(`aksel-icon-${Cm}`))},[r]),t}const Lm=b.useId;function Gn(e){var r;return Lm!==void 0?Lm().replace(/(:)/g,""):(r=hS(e))!==null&&r!==void 0?r:""}var yS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const vS=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=yS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var kS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const bS=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=kS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var wS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const _S=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=wS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var TS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const SS=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=TS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var ES=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const OS=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=ES(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var DS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Xp=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=DS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var xS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const RS=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=xS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var FS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const NS=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=FS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var AS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Zp=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=AS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var PS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Qp=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=PS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var MS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const BS=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=MS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var qS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const $m=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=qS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var jS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const IS=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=jS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var CS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const LS=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=CS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var $S=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Us=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=$S(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var HS=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const VS=E.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=HS(e,["title","titleId"]);let i=Gn();return i=n?t||"title-"+i:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),n?E.createElement("title",{id:i},n):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function pa(e,r,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return r==null?void 0:r(a)}}const[US,Pi]=Ri({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),WS=typeof window<"u"&&window.matchMedia===void 0,GS=(e,r)=>{const[n,t]=E.useState(r);return E.useEffect(()=>{if(WS)return;const a=window.matchMedia(e);t(a.matches);const i=u=>{t(u.matches)};return a.addEventListener("change",i),()=>{a.removeEventListener("change",i)}},[e]),n};function Mt(e){return(r={})=>{const n=r.width?String(r.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}function Jn(e){return(r,n)=>{const t=n!=null&&n.context?String(n.context):"standalone";let a;if(t==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,d=n!=null&&n.width?String(n.width):u;a=e.formattingValues[d]||e.formattingValues[u]}else{const u=e.defaultWidth,d=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[d]||e.values[u]}const i=e.argumentCallback?e.argumentCallback(r):r;return a[i]}}function et(e){return(r,n={})=>{const t=n.width,a=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],i=r.match(a);if(!i)return null;const u=i[0],d=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(d)?zS(d,p=>p.test(u)):YS(d,p=>p.test(u));let m;m=e.valueCallback?e.valueCallback(c):c,m=n.valueCallback?n.valueCallback(m):m;const g=r.slice(u.length);return{value:m,rest:g}}}function YS(e,r){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&r(e[n]))return n}function zS(e,r){for(let n=0;n<e.length;n++)if(r(e[n]))return n}function Ed(e){return(r,n={})=>{const t=r.match(e.matchPattern);if(!t)return null;const a=t[0],i=r.match(e.parsePattern);if(!i)return null;let u=e.valueCallback?e.valueCallback(i[0]):i[0];u=n.valueCallback?n.valueCallback(u):u;const d=r.slice(a.length);return{value:u,rest:d}}}const Jp=6048e5,KS=864e5,XS=6e4,ZS=36e5,QS=1e3,Hm=Symbol.for("constructDateFrom");function Je(e,r){return typeof e=="function"?e(r):e&&typeof e=="object"&&Hm in e?e[Hm](r):e instanceof Date?new e.constructor(r):new Date(r)}function us(e,...r){const n=Je.bind(null,r.find(t=>typeof t=="object"));return r.map(n)}let JS={};function Ta(){return JS}function Me(e,r){return Je(r||e,e)}function Pr(e,r){var d,c,m,g;const n=Ta(),t=(r==null?void 0:r.weekStartsOn)??((c=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((g=(m=n.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,a=Me(e,r==null?void 0:r.in),i=a.getDay(),u=(i<t?7:0)+i-t;return a.setDate(a.getDate()-u),a.setHours(0,0,0,0),a}const eE={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},eh=(e,r,n)=>{let t;const a=eE[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",r.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+t:t+" ago":t},nE={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nh=(e,r,n,t)=>nE[e],tE={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},aE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},sE={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},oE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},iE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},lE=(e,r)=>{const n=Number(e),t=n%100;if(t>20||t<10)switch(t%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},th={ordinalNumber:lE,era:Jn({values:tE,defaultWidth:"wide"}),quarter:Jn({values:rE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Jn({values:aE,defaultWidth:"wide"}),day:Jn({values:sE,defaultWidth:"wide"}),dayPeriod:Jn({values:oE,defaultWidth:"wide",formattingValues:iE,defaultFormattingWidth:"wide"})},uE=/^(\d+)(th|st|nd|rd)?/i,dE=/\d+/i,cE={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},fE={any:[/^b/i,/^(a|c)/i]},mE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gE={any:[/1/i,/2/i,/3/i,/4/i]},pE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},hE={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},yE={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},vE={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},kE={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},bE={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},rh={ordinalNumber:Ed({matchPattern:uE,parsePattern:dE,valueCallback:e=>parseInt(e,10)}),era:et({matchPatterns:cE,defaultMatchWidth:"wide",parsePatterns:fE,defaultParseWidth:"any"}),quarter:et({matchPatterns:mE,defaultMatchWidth:"wide",parsePatterns:gE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:et({matchPatterns:pE,defaultMatchWidth:"wide",parsePatterns:hE,defaultParseWidth:"any"}),day:et({matchPatterns:yE,defaultMatchWidth:"wide",parsePatterns:vE,defaultParseWidth:"any"}),dayPeriod:et({matchPatterns:kE,defaultMatchWidth:"any",parsePatterns:bE,defaultParseWidth:"any"})},wE={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},_E={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},TE={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},SE={date:Mt({formats:wE,defaultWidth:"full"}),time:Mt({formats:_E,defaultWidth:"full"}),dateTime:Mt({formats:TE,defaultWidth:"full"})},ah={code:"en-GB",formatDistance:eh,formatLong:SE,formatRelative:nh,localize:th,match:rh,options:{weekStartsOn:1,firstWeekContainsDate:4}},EE={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},OE={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},DE={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xE={date:Mt({formats:EE,defaultWidth:"full"}),time:Mt({formats:OE,defaultWidth:"full"}),dateTime:Mt({formats:DE,defaultWidth:"full"})},Mi={code:"en-US",formatDistance:eh,formatLong:xE,formatRelative:nh,localize:th,match:rh,options:{weekStartsOn:0,firstWeekContainsDate:1}},RE={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},FE=(e,r,n)=>{let t;const a=RE[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",String(r)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"om "+t:t+" siden":t},NE={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},AE={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},PE={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ME={date:Mt({formats:NE,defaultWidth:"full"}),time:Mt({formats:AE,defaultWidth:"full"}),dateTime:Mt({formats:PE,defaultWidth:"full"})},BE={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},qE=(e,r,n,t)=>BE[e],jE={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},IE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},CE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},LE={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},$E={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},HE=(e,r)=>Number(e)+".",VE={ordinalNumber:HE,era:Jn({values:jE,defaultWidth:"wide"}),quarter:Jn({values:IE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Jn({values:CE,defaultWidth:"wide"}),day:Jn({values:LE,defaultWidth:"wide"}),dayPeriod:Jn({values:$E,defaultWidth:"wide"})},UE=/^(\d+)\.?/i,WE=/\d+/i,GE={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},YE={any:[/^f/i,/^e/i]},zE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},KE={any:[/1/i,/2/i,/3/i,/4/i]},XE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ZE={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},QE={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},JE={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},eO={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},nO={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},tO={ordinalNumber:Ed({matchPattern:UE,parsePattern:WE,valueCallback:e=>parseInt(e,10)}),era:et({matchPatterns:GE,defaultMatchWidth:"wide",parsePatterns:YE,defaultParseWidth:"any"}),quarter:et({matchPatterns:zE,defaultMatchWidth:"wide",parsePatterns:KE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:et({matchPatterns:XE,defaultMatchWidth:"wide",parsePatterns:ZE,defaultParseWidth:"any"}),day:et({matchPatterns:QE,defaultMatchWidth:"wide",parsePatterns:JE,defaultParseWidth:"any"}),dayPeriod:et({matchPatterns:eO,defaultMatchWidth:"any",parsePatterns:nO,defaultParseWidth:"any"})},sh={code:"nb",formatDistance:FE,formatLong:ME,formatRelative:qE,localize:VE,match:tO,options:{weekStartsOn:1,firstWeekContainsDate:4}},rO={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},aO=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],sO=(e,r,n)=>{let t;const a=rO[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",r<13?aO[r]:String(r)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"om "+t:t+" sidan":t},oO={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},iO={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},lO={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},uO={date:Mt({formats:oO,defaultWidth:"full"}),time:Mt({formats:iO,defaultWidth:"full"}),dateTime:Mt({formats:lO,defaultWidth:"full"})},dO={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},cO=(e,r,n,t)=>dO[e],fO={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},mO={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},gO={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},pO={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},hO={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},yO=(e,r)=>Number(e)+".",vO={ordinalNumber:yO,era:Jn({values:fO,defaultWidth:"wide"}),quarter:Jn({values:mO,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Jn({values:gO,defaultWidth:"wide"}),day:Jn({values:pO,defaultWidth:"wide"}),dayPeriod:Jn({values:hO,defaultWidth:"wide"})},kO=/^(\d+)\.?/i,bO=/\d+/i,wO={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},_O={any:[/^f/i,/^e/i]},TO={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},SO={any:[/1/i,/2/i,/3/i,/4/i]},EO={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},OO={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},DO={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},xO={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},RO={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},FO={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},NO={ordinalNumber:Ed({matchPattern:kO,parsePattern:bO,valueCallback:e=>parseInt(e,10)}),era:et({matchPatterns:wO,defaultMatchWidth:"wide",parsePatterns:_O,defaultParseWidth:"any"}),quarter:et({matchPatterns:TO,defaultMatchWidth:"wide",parsePatterns:SO,defaultParseWidth:"any",valueCallback:e=>e+1}),month:et({matchPatterns:EO,defaultMatchWidth:"wide",parsePatterns:OO,defaultParseWidth:"any"}),day:et({matchPatterns:DO,defaultMatchWidth:"wide",parsePatterns:xO,defaultParseWidth:"any"}),dayPeriod:et({matchPatterns:RO,defaultMatchWidth:"any",parsePatterns:FO,defaultParseWidth:"any"})},oh={code:"nn",formatDistance:sO,formatLong:uO,formatRelative:cO,localize:vO,match:NO,options:{weekStartsOn:1,firstWeekContainsDate:4}},AO={global:{dateLocale:sh,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},PO=E.createContext({locale:AO}),Od=()=>E.useContext(PO);function Vm(e){return e.sort((r,n)=>{const t=r.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const MO=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Um(e,r,n){let t=e+1;return n&&t>=r&&(t=0),t}function Wm(e,r,n){let t=e-1;return n&&t<0&&(t=r),t}const fu=e=>e;class BO{constructor(){this.descendants=new Map,this.register=r=>{if(r!=null)return MO(r)?this.registerNode(r):n=>{this.registerNode(n,r)}},this.unregister=r=>{this.descendants.delete(r);const n=Vm(Array.from(this.descendants.keys()));this.assignIndex(n)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=r=>{this.descendants.forEach(n=>{const t=r.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((n,t)=>n.index-t.index),this.enabledValues=()=>this.values().filter(r=>!r.disabled),this.item=r=>{if(this.count()!==0)return this.values()[r]},this.enabledItem=r=>{if(this.enabledCount()!==0)return this.enabledValues()[r]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const r=this.enabledValues().length-1;return this.enabledItem(r)},this.indexOf=r=>{var n,t;return r&&(t=(n=this.descendants.get(r))===null||n===void 0?void 0:n.index)!==null&&t!==void 0?t:-1},this.enabledIndexOf=r=>r==null?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(r)),this.next=(r,n=!0)=>{const t=Um(r,this.count(),n);return this.item(t)},this.nextEnabled=(r,n=!0)=>{const t=this.item(r);if(!t)return;const a=this.enabledIndexOf(t.node),i=Um(a,this.enabledCount(),n);return this.enabledItem(i)},this.prev=(r,n=!0)=>{const t=Wm(r,this.count()-1,n);return this.item(t)},this.prevEnabled=(r,n=!0)=>{const t=this.item(r);if(!t)return;const a=this.enabledIndexOf(t.node),i=Wm(a,this.enabledCount()-1,n);return this.enabledItem(i)},this.registerNode=(r,n)=>{if(!r)return;const t=this.descendants.get(r);if(t){this.descendants.set(r,Object.assign({index:t.index,node:r},n));return}const a=Array.from(this.descendants.keys()).concat(r),i=Vm(a);n!=null&&n.disabled&&(n.disabled=!!n.disabled);const u=Object.assign({node:r,index:-1},n);this.descendants.set(r,u),this.assignIndex(i)}}}function qO(){const[e,r]=Ri({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),n=fu(i=>b.createElement(e,Object.assign({},i.value),i.children));function t(i){const u=r(),[d,c]=E.useState(-1),m=E.useRef(null);es(()=>()=>{m.current&&u.unregister(m.current)},[]),es(()=>{if(!m.current)return;const p=Number(m.current.dataset.index);d!==p&&!Number.isNaN(p)&&c(p)});const g=fu(i?u.register(i):u.register);return{descendants:u,index:d,enabledIndex:u.enabledIndexOf(m.current),register:QT([g,m])}}function a(){return E.useRef(new BO).current}return[n,r,a,t]}function jO(e,r=globalThis==null?void 0:globalThis.document){const n=Vs(e);E.useEffect(()=>{const t=a=>{a.key==="Escape"&&n(a)};return r.addEventListener("keydown",t,!0),()=>r.removeEventListener("keydown",t,!0)},[n,r])}const ih={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function lh(e,r,n,{discrete:t}={discrete:!1}){if(!r)return;const a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});a.addEventListener(e,r,{once:!0}),t&&a?Wp.flushSync(()=>a.dispatchEvent(i)):a.dispatchEvent(i)}function IO(e,r=globalThis==null?void 0:globalThis.document){const n=Vs(e),t=E.useRef(!1);return E.useEffect(()=>{const a=i=>{if(i.target&&!t.current){const u={originalEvent:i};lh(ih.FOCUS_OUTSIDE,n,u)}};return r.addEventListener("focusin",a),()=>r.removeEventListener("focusin",a)},[r,n]),{onFocusCapture:()=>{t.current=!0},onBlurCapture:()=>{t.current=!1}}}function CO(e,r=globalThis==null?void 0:globalThis.document){const n=Vs(e),t=E.useRef(!1),a=E.useRef(()=>{});return E.useEffect(()=>{const i=d=>{function c(){lh(ih.POINTER_DOWN_OUTSIDE,n,{originalEvent:d},{discrete:!0})}d.target&&!t.current?d.pointerType==="touch"?(r.removeEventListener("click",a.current),a.current=c,r.addEventListener("click",a.current,{once:!0})):c():r.removeEventListener("click",a.current),t.current=!1},u=window.setTimeout(()=>{r.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(u),r.removeEventListener("pointerdown",i),r.removeEventListener("click",a.current)}},[r,n]),{onPointerDownCapture:()=>{t.current=!0}}}var LO=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const[$O,HO,VO,UO]=qO();let Va=0,Gm;const WO=E.forwardRef((e,r)=>HO(!1)?b.createElement(Ym,Object.assign({ref:r},e)):b.createElement(GO,null,b.createElement(Ym,Object.assign({ref:r},e)))),GO=({children:e})=>{const r=VO();return b.createElement($O,{value:r},e)},Ym=E.forwardRef((e,r)=>{var n,{children:t,asChild:a,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:c,onDismiss:m,safeZone:g,disableOutsidePointerEvents:p=!1,enabled:y=!0}=e,k=LO(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,O]=E.useState({}),{register:D,index:_,descendants:x}=UO({disableOutsidePointerEvents:p,disabled:!y,forceUpdate:()=>O({})}),[R,T]=E.useState(null),M=ss(T,D,r),v=(n=R==null?void 0:R.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,P=E.useRef(!1),F=E.useRef(!1),N=(()=>{let C=-1;return x.enabledValues().forEach((Y,$)=>{Y.disableOutsidePointerEvents&&(C=$)}),{isPointerEventsEnabled:_>=C,isBodyPointerEventsDisabled:Va>0,pointerStyle:_>=C&&Va>0?"auto":void 0}})();function j(C){var W,Y;if(!(g!=null&&g.anchor)&&!(g!=null&&g.dismissable)||!y)return;C.defaultPrevented||(P.current=!0,C.detail.originalEvent.type==="pointerdown"&&(F.current=!0));const $=C.target;C.detail.originalEvent.type==="pointerdown"?(!((W=g==null?void 0:g.anchor)===null||W===void 0)&&W.contains($)||$===(g==null?void 0:g.anchor))&&C.preventDefault():!($ instanceof HTMLElement&&![g==null?void 0:g.anchor,g==null?void 0:g.dismissable].some(z=>z==null?void 0:z.contains($))&&!$.contains((Y=g==null?void 0:g.dismissable)!==null&&Y!==void 0?Y:null))&&C.preventDefault(),C.detail.originalEvent.type==="focusin"&&F.current&&C.preventDefault(),F.current=!1,P.current=!1}const U=CO(C=>{!N.isPointerEventsEnabled||!y||(u==null||u(C),c==null||c(C),g&&j(C),!C.defaultPrevented&&m&&m())},v),V=IO(C=>{y&&(d==null||d(C),c==null||c(C),g&&j(C),!C.defaultPrevented&&m&&m())},v);jO(C=>{!y||!(_===x.enabledCount()-1)||(i==null||i(C),!C.defaultPrevented&&m&&(C.preventDefault(),m()))},v),E.useEffect(()=>{if(!(!R||!y||!p))return Va===0&&(Gm=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),Va++,()=>{Va===1&&(v.body.style.pointerEvents=Gm),Va--}},[R,v,p,x,y]),E.useEffect(()=>()=>x.values().forEach(C=>C.forceUpdate()),[x,R]);const G=a?os:"div";return b.createElement(G,Object.assign({ref:M},k,{onFocusCapture:V.onFocusCapture,onBlurCapture:V.onBlurCapture,onPointerDownCapture:U.onPointerDownCapture,style:Object.assign({pointerEvents:N.pointerStyle},k.style)}),t)}),ns=Math.min,ha=Math.max,fi=Math.round,Qo=Math.floor,cr=e=>({x:e,y:e}),YO={left:"right",right:"left",bottom:"top",top:"bottom"},zO={start:"end",end:"start"};function Uu(e,r,n){return ha(e,ns(r,n))}function zs(e,r){return typeof e=="function"?e(r):e}function ya(e){return e.split("-")[0]}function Ks(e){return e.split("-")[1]}function uh(e){return e==="x"?"y":"x"}function Dd(e){return e==="y"?"height":"width"}function ts(e){return["top","bottom"].includes(ya(e))?"y":"x"}function xd(e){return uh(ts(e))}function KO(e,r,n){n===void 0&&(n=!1);const t=Ks(e),a=xd(e),i=Dd(a);let u=a==="x"?t===(n?"end":"start")?"right":"left":t==="start"?"bottom":"top";return r.reference[i]>r.floating[i]&&(u=mi(u)),[u,mi(u)]}function XO(e){const r=mi(e);return[Wu(e),r,Wu(r)]}function Wu(e){return e.replace(/start|end/g,r=>zO[r])}function ZO(e,r,n){const t=["left","right"],a=["right","left"],i=["top","bottom"],u=["bottom","top"];switch(e){case"top":case"bottom":return n?r?a:t:r?t:a;case"left":case"right":return r?i:u;default:return[]}}function QO(e,r,n,t){const a=Ks(e);let i=ZO(ya(e),n==="start",t);return a&&(i=i.map(u=>u+"-"+a),r&&(i=i.concat(i.map(Wu)))),i}function mi(e){return e.replace(/left|right|bottom|top/g,r=>YO[r])}function JO(e){return{top:0,right:0,bottom:0,left:0,...e}}function dh(e){return typeof e!="number"?JO(e):{top:e,right:e,bottom:e,left:e}}function gi(e){const{x:r,y:n,width:t,height:a}=e;return{width:t,height:a,top:n,left:r,right:r+t,bottom:n+a,x:r,y:n}}function zm(e,r,n){let{reference:t,floating:a}=e;const i=ts(r),u=xd(r),d=Dd(u),c=ya(r),m=i==="y",g=t.x+t.width/2-a.width/2,p=t.y+t.height/2-a.height/2,y=t[d]/2-a[d]/2;let k;switch(c){case"top":k={x:g,y:t.y-a.height};break;case"bottom":k={x:g,y:t.y+t.height};break;case"right":k={x:t.x+t.width,y:p};break;case"left":k={x:t.x-a.width,y:p};break;default:k={x:t.x,y:t.y}}switch(Ks(r)){case"start":k[u]-=y*(n&&m?-1:1);break;case"end":k[u]+=y*(n&&m?-1:1);break}return k}const eD=async(e,r,n)=>{const{placement:t="bottom",strategy:a="absolute",middleware:i=[],platform:u}=n,d=i.filter(Boolean),c=await(u.isRTL==null?void 0:u.isRTL(r));let m=await u.getElementRects({reference:e,floating:r,strategy:a}),{x:g,y:p}=zm(m,t,c),y=t,k={},O=0;for(let D=0;D<d.length;D++){const{name:_,fn:x}=d[D],{x:R,y:T,data:M,reset:v}=await x({x:g,y:p,initialPlacement:t,placement:y,strategy:a,middlewareData:k,rects:m,platform:u,elements:{reference:e,floating:r}});g=R??g,p=T??p,k={...k,[_]:{...k[_],...M}},v&&O<=50&&(O++,typeof v=="object"&&(v.placement&&(y=v.placement),v.rects&&(m=v.rects===!0?await u.getElementRects({reference:e,floating:r,strategy:a}):v.rects),{x:g,y:p}=zm(m,y,c)),D=-1)}return{x:g,y:p,placement:y,strategy:a,middlewareData:k}};async function ch(e,r){var n;r===void 0&&(r={});const{x:t,y:a,platform:i,rects:u,elements:d,strategy:c}=e,{boundary:m="clippingAncestors",rootBoundary:g="viewport",elementContext:p="floating",altBoundary:y=!1,padding:k=0}=zs(r,e),O=dh(k),_=d[y?p==="floating"?"reference":"floating":p],x=gi(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(_)))==null||n?_:_.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(d.floating)),boundary:m,rootBoundary:g,strategy:c})),R=p==="floating"?{x:t,y:a,width:u.floating.width,height:u.floating.height}:u.reference,T=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d.floating)),M=await(i.isElement==null?void 0:i.isElement(T))?await(i.getScale==null?void 0:i.getScale(T))||{x:1,y:1}:{x:1,y:1},v=gi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:R,offsetParent:T,strategy:c}):R);return{top:(x.top-v.top+O.top)/M.y,bottom:(v.bottom-x.bottom+O.bottom)/M.y,left:(x.left-v.left+O.left)/M.x,right:(v.right-x.right+O.right)/M.x}}const nD=e=>({name:"arrow",options:e,async fn(r){const{x:n,y:t,placement:a,rects:i,platform:u,elements:d,middlewareData:c}=r,{element:m,padding:g=0}=zs(e,r)||{};if(m==null)return{};const p=dh(g),y={x:n,y:t},k=xd(a),O=Dd(k),D=await u.getDimensions(m),_=k==="y",x=_?"top":"left",R=_?"bottom":"right",T=_?"clientHeight":"clientWidth",M=i.reference[O]+i.reference[k]-y[k]-i.floating[O],v=y[k]-i.reference[k],P=await(u.getOffsetParent==null?void 0:u.getOffsetParent(m));let F=P?P[T]:0;(!F||!await(u.isElement==null?void 0:u.isElement(P)))&&(F=d.floating[T]||i.floating[O]);const N=M/2-v/2,j=F/2-D[O]/2-1,U=ns(p[x],j),V=ns(p[R],j),G=U,C=F-D[O]-V,W=F/2-D[O]/2+N,Y=Uu(G,W,C),$=!c.arrow&&Ks(a)!=null&&W!==Y&&i.reference[O]/2-(W<G?U:V)-D[O]/2<0,J=$?W<G?W-G:W-C:0;return{[k]:y[k]+J,data:{[k]:Y,centerOffset:W-Y-J,...$&&{alignmentOffset:J}},reset:$}}}),tD=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var n,t;const{placement:a,middlewareData:i,rects:u,initialPlacement:d,platform:c,elements:m}=r,{mainAxis:g=!0,crossAxis:p=!0,fallbackPlacements:y,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:D=!0,..._}=zs(e,r);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const x=ya(a),R=ts(d),T=ya(d)===d,M=await(c.isRTL==null?void 0:c.isRTL(m.floating)),v=y||(T||!D?[mi(d)]:XO(d)),P=O!=="none";!y&&P&&v.push(...QO(d,D,O,M));const F=[d,...v],N=await ch(r,_),j=[];let U=((t=i.flip)==null?void 0:t.overflows)||[];if(g&&j.push(N[x]),p){const W=KO(a,u,M);j.push(N[W[0]],N[W[1]])}if(U=[...U,{placement:a,overflows:j}],!j.every(W=>W<=0)){var V,G;const W=(((V=i.flip)==null?void 0:V.index)||0)+1,Y=F[W];if(Y)return{data:{index:W,overflows:U},reset:{placement:Y}};let $=(G=U.filter(J=>J.overflows[0]<=0).sort((J,z)=>J.overflows[1]-z.overflows[1])[0])==null?void 0:G.placement;if(!$)switch(k){case"bestFit":{var C;const J=(C=U.filter(z=>{if(P){const re=ts(z.placement);return re===R||re==="y"}return!0}).map(z=>[z.placement,z.overflows.filter(re=>re>0).reduce((re,se)=>re+se,0)]).sort((z,re)=>z[1]-re[1])[0])==null?void 0:C[0];J&&($=J);break}case"initialPlacement":$=d;break}if(a!==$)return{reset:{placement:$}}}return{}}}};async function rD(e,r){const{placement:n,platform:t,elements:a}=e,i=await(t.isRTL==null?void 0:t.isRTL(a.floating)),u=ya(n),d=Ks(n),c=ts(n)==="y",m=["left","top"].includes(u)?-1:1,g=i&&c?-1:1,p=zs(r,e);let{mainAxis:y,crossAxis:k,alignmentAxis:O}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return d&&typeof O=="number"&&(k=d==="end"?O*-1:O),c?{x:k*g,y:y*m}:{x:y*m,y:k*g}}const aD=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var n,t;const{x:a,y:i,placement:u,middlewareData:d}=r,c=await rD(r,e);return u===((n=d.offset)==null?void 0:n.placement)&&(t=d.arrow)!=null&&t.alignmentOffset?{}:{x:a+c.x,y:i+c.y,data:{...c,placement:u}}}}},sD=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:n,y:t,placement:a}=r,{mainAxis:i=!0,crossAxis:u=!1,limiter:d={fn:_=>{let{x,y:R}=_;return{x,y:R}}},...c}=zs(e,r),m={x:n,y:t},g=await ch(r,c),p=ts(ya(a)),y=uh(p);let k=m[y],O=m[p];if(i){const _=y==="y"?"top":"left",x=y==="y"?"bottom":"right",R=k+g[_],T=k-g[x];k=Uu(R,k,T)}if(u){const _=p==="y"?"top":"left",x=p==="y"?"bottom":"right",R=O+g[_],T=O-g[x];O=Uu(R,O,T)}const D=d.fn({...r,[y]:k,[p]:O});return{...D,data:{x:D.x-n,y:D.y-t,enabled:{[y]:i,[p]:u}}}}}};function Bi(){return typeof window<"u"}function ds(e){return fh(e)?(e.nodeName||"").toLowerCase():"#document"}function wt(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function pr(e){var r;return(r=(fh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function fh(e){return Bi()?e instanceof Node||e instanceof wt(e).Node:!1}function Wn(e){return Bi()?e instanceof Element||e instanceof wt(e).Element:!1}function mr(e){return Bi()?e instanceof HTMLElement||e instanceof wt(e).HTMLElement:!1}function Km(e){return!Bi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof wt(e).ShadowRoot}function Xs(e){const{overflow:r,overflowX:n,overflowY:t,display:a}=Gt(e);return/auto|scroll|overlay|hidden|clip/.test(r+t+n)&&!["inline","contents"].includes(a)}function oD(e){return["table","td","th"].includes(ds(e))}function qi(e){return[":popover-open",":modal"].some(r=>{try{return e.matches(r)}catch{return!1}})}function Rd(e){const r=Fd(),n=Wn(e)?Gt(e):e;return["transform","translate","scale","rotate","perspective"].some(t=>n[t]?n[t]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!r&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!r&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function iD(e){let r=Xr(e);for(;mr(r)&&!rs(r);){if(Rd(r))return r;if(qi(r))return null;r=Xr(r)}return null}function Fd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rs(e){return["html","body","#document"].includes(ds(e))}function Gt(e){return wt(e).getComputedStyle(e)}function ji(e){return Wn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Xr(e){if(ds(e)==="html")return e;const r=e.assignedSlot||e.parentNode||Km(e)&&e.host||pr(e);return Km(r)?r.host:r}function mh(e){const r=Xr(e);return rs(r)?e.ownerDocument?e.ownerDocument.body:e.body:mr(r)&&Xs(r)?r:mh(r)}function Ws(e,r,n){var t;r===void 0&&(r=[]),n===void 0&&(n=!0);const a=mh(e),i=a===((t=e.ownerDocument)==null?void 0:t.body),u=wt(a);if(i){const d=Gu(u);return r.concat(u,u.visualViewport||[],Xs(a)?a:[],d&&n?Ws(d):[])}return r.concat(a,Ws(a,[],n))}function Gu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function gh(e){const r=Gt(e);let n=parseFloat(r.width)||0,t=parseFloat(r.height)||0;const a=mr(e),i=a?e.offsetWidth:n,u=a?e.offsetHeight:t,d=fi(n)!==i||fi(t)!==u;return d&&(n=i,t=u),{width:n,height:t,$:d}}function Nd(e){return Wn(e)?e:e.contextElement}function Ka(e){const r=Nd(e);if(!mr(r))return cr(1);const n=r.getBoundingClientRect(),{width:t,height:a,$:i}=gh(r);let u=(i?fi(n.width):n.width)/t,d=(i?fi(n.height):n.height)/a;return(!u||!Number.isFinite(u))&&(u=1),(!d||!Number.isFinite(d))&&(d=1),{x:u,y:d}}const lD=cr(0);function ph(e){const r=wt(e);return!Fd()||!r.visualViewport?lD:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function uD(e,r,n){return r===void 0&&(r=!1),!n||r&&n!==wt(e)?!1:r}function va(e,r,n,t){r===void 0&&(r=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect(),i=Nd(e);let u=cr(1);r&&(t?Wn(t)&&(u=Ka(t)):u=Ka(e));const d=uD(i,n,t)?ph(i):cr(0);let c=(a.left+d.x)/u.x,m=(a.top+d.y)/u.y,g=a.width/u.x,p=a.height/u.y;if(i){const y=wt(i),k=t&&Wn(t)?wt(t):t;let O=y,D=Gu(O);for(;D&&t&&k!==O;){const _=Ka(D),x=D.getBoundingClientRect(),R=Gt(D),T=x.left+(D.clientLeft+parseFloat(R.paddingLeft))*_.x,M=x.top+(D.clientTop+parseFloat(R.paddingTop))*_.y;c*=_.x,m*=_.y,g*=_.x,p*=_.y,c+=T,m+=M,O=wt(D),D=Gu(O)}}return gi({width:g,height:p,x:c,y:m})}function Ad(e,r){const n=ji(e).scrollLeft;return r?r.left+n:va(pr(e)).left+n}function hh(e,r,n){n===void 0&&(n=!1);const t=e.getBoundingClientRect(),a=t.left+r.scrollLeft-(n?0:Ad(e,t)),i=t.top+r.scrollTop;return{x:a,y:i}}function dD(e){let{elements:r,rect:n,offsetParent:t,strategy:a}=e;const i=a==="fixed",u=pr(t),d=r?qi(r.floating):!1;if(t===u||d&&i)return n;let c={scrollLeft:0,scrollTop:0},m=cr(1);const g=cr(0),p=mr(t);if((p||!p&&!i)&&((ds(t)!=="body"||Xs(u))&&(c=ji(t)),mr(t))){const k=va(t);m=Ka(t),g.x=k.x+t.clientLeft,g.y=k.y+t.clientTop}const y=u&&!p&&!i?hh(u,c,!0):cr(0);return{width:n.width*m.x,height:n.height*m.y,x:n.x*m.x-c.scrollLeft*m.x+g.x+y.x,y:n.y*m.y-c.scrollTop*m.y+g.y+y.y}}function cD(e){return Array.from(e.getClientRects())}function fD(e){const r=pr(e),n=ji(e),t=e.ownerDocument.body,a=ha(r.scrollWidth,r.clientWidth,t.scrollWidth,t.clientWidth),i=ha(r.scrollHeight,r.clientHeight,t.scrollHeight,t.clientHeight);let u=-n.scrollLeft+Ad(e);const d=-n.scrollTop;return Gt(t).direction==="rtl"&&(u+=ha(r.clientWidth,t.clientWidth)-a),{width:a,height:i,x:u,y:d}}function mD(e,r){const n=wt(e),t=pr(e),a=n.visualViewport;let i=t.clientWidth,u=t.clientHeight,d=0,c=0;if(a){i=a.width,u=a.height;const m=Fd();(!m||m&&r==="fixed")&&(d=a.offsetLeft,c=a.offsetTop)}return{width:i,height:u,x:d,y:c}}function gD(e,r){const n=va(e,!0,r==="fixed"),t=n.top+e.clientTop,a=n.left+e.clientLeft,i=mr(e)?Ka(e):cr(1),u=e.clientWidth*i.x,d=e.clientHeight*i.y,c=a*i.x,m=t*i.y;return{width:u,height:d,x:c,y:m}}function Xm(e,r,n){let t;if(r==="viewport")t=mD(e,n);else if(r==="document")t=fD(pr(e));else if(Wn(r))t=gD(r,n);else{const a=ph(e);t={x:r.x-a.x,y:r.y-a.y,width:r.width,height:r.height}}return gi(t)}function yh(e,r){const n=Xr(e);return n===r||!Wn(n)||rs(n)?!1:Gt(n).position==="fixed"||yh(n,r)}function pD(e,r){const n=r.get(e);if(n)return n;let t=Ws(e,[],!1).filter(d=>Wn(d)&&ds(d)!=="body"),a=null;const i=Gt(e).position==="fixed";let u=i?Xr(e):e;for(;Wn(u)&&!rs(u);){const d=Gt(u),c=Rd(u);!c&&d.position==="fixed"&&(a=null),(i?!c&&!a:!c&&d.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Xs(u)&&!c&&yh(e,u))?t=t.filter(g=>g!==u):a=d,u=Xr(u)}return r.set(e,t),t}function hD(e){let{element:r,boundary:n,rootBoundary:t,strategy:a}=e;const u=[...n==="clippingAncestors"?qi(r)?[]:pD(r,this._c):[].concat(n),t],d=u[0],c=u.reduce((m,g)=>{const p=Xm(r,g,a);return m.top=ha(p.top,m.top),m.right=ns(p.right,m.right),m.bottom=ns(p.bottom,m.bottom),m.left=ha(p.left,m.left),m},Xm(r,d,a));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function yD(e){const{width:r,height:n}=gh(e);return{width:r,height:n}}function vD(e,r,n){const t=mr(r),a=pr(r),i=n==="fixed",u=va(e,!0,i,r);let d={scrollLeft:0,scrollTop:0};const c=cr(0);if(t||!t&&!i)if((ds(r)!=="body"||Xs(a))&&(d=ji(r)),t){const y=va(r,!0,i,r);c.x=y.x+r.clientLeft,c.y=y.y+r.clientTop}else a&&(c.x=Ad(a));const m=a&&!t&&!i?hh(a,d):cr(0),g=u.left+d.scrollLeft-c.x-m.x,p=u.top+d.scrollTop-c.y-m.y;return{x:g,y:p,width:u.width,height:u.height}}function mu(e){return Gt(e).position==="static"}function Zm(e,r){if(!mr(e)||Gt(e).position==="fixed")return null;if(r)return r(e);let n=e.offsetParent;return pr(e)===n&&(n=n.ownerDocument.body),n}function vh(e,r){const n=wt(e);if(qi(e))return n;if(!mr(e)){let a=Xr(e);for(;a&&!rs(a);){if(Wn(a)&&!mu(a))return a;a=Xr(a)}return n}let t=Zm(e,r);for(;t&&oD(t)&&mu(t);)t=Zm(t,r);return t&&rs(t)&&mu(t)&&!Rd(t)?n:t||iD(e)||n}const kD=async function(e){const r=this.getOffsetParent||vh,n=this.getDimensions,t=await n(e.floating);return{reference:vD(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:t.width,height:t.height}}};function bD(e){return Gt(e).direction==="rtl"}const wD={convertOffsetParentRelativeRectToViewportRelativeRect:dD,getDocumentElement:pr,getClippingRect:hD,getOffsetParent:vh,getElementRects:kD,getClientRects:cD,getDimensions:yD,getScale:Ka,isElement:Wn,isRTL:bD};function kh(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function _D(e,r){let n=null,t;const a=pr(e);function i(){var d;clearTimeout(t),(d=n)==null||d.disconnect(),n=null}function u(d,c){d===void 0&&(d=!1),c===void 0&&(c=1),i();const m=e.getBoundingClientRect(),{left:g,top:p,width:y,height:k}=m;if(d||r(),!y||!k)return;const O=Qo(p),D=Qo(a.clientWidth-(g+y)),_=Qo(a.clientHeight-(p+k)),x=Qo(g),T={rootMargin:-O+"px "+-D+"px "+-_+"px "+-x+"px",threshold:ha(0,ns(1,c))||1};let M=!0;function v(P){const F=P[0].intersectionRatio;if(F!==c){if(!M)return u();F?u(!1,F):t=setTimeout(()=>{u(!1,1e-7)},1e3)}F===1&&!kh(m,e.getBoundingClientRect())&&u(),M=!1}try{n=new IntersectionObserver(v,{...T,root:a.ownerDocument})}catch{n=new IntersectionObserver(v,T)}n.observe(e)}return u(!0),i}function TD(e,r,n,t){t===void 0&&(t={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:c=!1}=t,m=Nd(e),g=a||i?[...m?Ws(m):[],...Ws(r)]:[];g.forEach(x=>{a&&x.addEventListener("scroll",n,{passive:!0}),i&&x.addEventListener("resize",n)});const p=m&&d?_D(m,n):null;let y=-1,k=null;u&&(k=new ResizeObserver(x=>{let[R]=x;R&&R.target===m&&k&&(k.unobserve(r),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var T;(T=k)==null||T.observe(r)})),n()}),m&&!c&&k.observe(m),k.observe(r));let O,D=c?va(e):null;c&&_();function _(){const x=va(e);D&&!kh(D,x)&&n(),D=x,O=requestAnimationFrame(_)}return n(),()=>{var x;g.forEach(R=>{a&&R.removeEventListener("scroll",n),i&&R.removeEventListener("resize",n)}),p==null||p(),(x=k)==null||x.disconnect(),k=null,c&&cancelAnimationFrame(O)}}const SD=aD,ED=sD,OD=tD,Qm=nD,DD=(e,r,n)=>{const t=new Map,a={platform:wD,...n},i={...a.platform,_c:t};return eD(e,r,{...a,platform:i})};var ii=typeof document<"u"?E.useLayoutEffect:E.useEffect;function pi(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let n,t,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==r.length)return!1;for(t=n;t--!==0;)if(!pi(e[t],r[t]))return!1;return!0}if(a=Object.keys(e),n=a.length,n!==Object.keys(r).length)return!1;for(t=n;t--!==0;)if(!{}.hasOwnProperty.call(r,a[t]))return!1;for(t=n;t--!==0;){const i=a[t];if(!(i==="_owner"&&e.$$typeof)&&!pi(e[i],r[i]))return!1}return!0}return e!==e&&r!==r}function bh(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Jm(e,r){const n=bh(e);return Math.round(r*n)/n}function gu(e){const r=E.useRef(e);return ii(()=>{r.current=e}),r}function xD(e){e===void 0&&(e={});const{placement:r="bottom",strategy:n="absolute",middleware:t=[],platform:a,elements:{reference:i,floating:u}={},transform:d=!0,whileElementsMounted:c,open:m}=e,[g,p]=E.useState({x:0,y:0,strategy:n,placement:r,middlewareData:{},isPositioned:!1}),[y,k]=E.useState(t);pi(y,t)||k(t);const[O,D]=E.useState(null),[_,x]=E.useState(null),R=E.useCallback(z=>{z!==P.current&&(P.current=z,D(z))},[]),T=E.useCallback(z=>{z!==F.current&&(F.current=z,x(z))},[]),M=i||O,v=u||_,P=E.useRef(null),F=E.useRef(null),N=E.useRef(g),j=c!=null,U=gu(c),V=gu(a),G=gu(m),C=E.useCallback(()=>{if(!P.current||!F.current)return;const z={placement:r,strategy:n,middleware:y};V.current&&(z.platform=V.current),DD(P.current,F.current,z).then(re=>{const se={...re,isPositioned:G.current!==!1};W.current&&!pi(N.current,se)&&(N.current=se,Sd.flushSync(()=>{p(se)}))})},[y,r,n,V,G]);ii(()=>{m===!1&&N.current.isPositioned&&(N.current.isPositioned=!1,p(z=>({...z,isPositioned:!1})))},[m]);const W=E.useRef(!1);ii(()=>(W.current=!0,()=>{W.current=!1}),[]),ii(()=>{if(M&&(P.current=M),v&&(F.current=v),M&&v){if(U.current)return U.current(M,v,C);C()}},[M,v,C,U,j]);const Y=E.useMemo(()=>({reference:P,floating:F,setReference:R,setFloating:T}),[R,T]),$=E.useMemo(()=>({reference:M,floating:v}),[M,v]),J=E.useMemo(()=>{const z={position:n,left:0,top:0};if(!$.floating)return z;const re=Jm($.floating,g.x),se=Jm($.floating,g.y);return d?{...z,transform:"translate("+re+"px, "+se+"px)",...bh($.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:re,top:se}},[n,d,$.floating,g.x,g.y]);return E.useMemo(()=>({...g,update:C,refs:Y,elements:$,floatingStyles:J}),[g,C,Y,$,J])}const RD=e=>{function r(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:t,padding:a}=typeof e=="function"?e(n):e;return t&&r(t)?t.current!=null?Qm({element:t.current,padding:a}).fn(n):{}:t?Qm({element:t,padding:a}).fn(n):{}}}},FD=(e,r)=>({...SD(e),options:[e,r]}),ND=(e,r)=>({...ED(e),options:[e,r]}),AD=(e,r)=>({...OD(e),options:[e,r]}),PD=(e,r)=>({...RD(e),options:[e,r]}),eg=/(\w+)/g;function MD(e,r){const n=Array.isArray(e)?e:BD(e);for(const t of r){if(!t)continue;let a=t;for(let i=0;i<n.length;i++){const u=a[n[i]];u!==void 0&&(a=u)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function BD(e){const r=[];let n=eg.exec(e);for(;n;){const[,t,a]=n;r.push(t||a),n=eg.exec(e)}return r}const qD=/{[^}]*}/g;function Kt(e,...r){const n=Od(),t=n.translations||[],a=[...r,...Array.isArray(t)?t.map(u=>u[e]):[t[e]],n.locale[e]];return(u,d)=>{const c=MD(u,a);return d?c.replace(qD,m=>{const g=m.substring(1,m.length-1);if(d[g]===void 0){const p=JSON.stringify(d);throw new Error(`Error translating key '${u}'. No replacement syntax ({}) found for key '${g}'. The following replacements were passed: '${p}'`)}return d[g]}):c}}function wh(){const e=Od(),r=e.translations||[],n=Array.isArray(r)?r.map(t=>t.global):[r.global];n.push(e.locale.global);for(const t of n)if(t!=null&&t.dateLocale)return t.dateLocale;throw new Error("dateLocale not found.")}var jD=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ID=E.forwardRef((e,r)=>{var{className:n,size:t="medium",title:a,transparent:i=!1,variant:u="neutral",id:d,"data-color":c}=e,m=jD(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:g}=ke(),p=fr(),y=Kt("Loader");return b.createElement("svg",Object.assign({"aria-labelledby":d??`loader-${p}`,ref:r,className:g("navds-loader",n,`navds-loader--${t}`,`navds-loader--${u}`,{"navds-loader--transparent":i}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??CD(u)},In(m,["children"]),{"data-variant":u}),b.createElement("title",{id:d??`loader-${p}`},a||y("title")),b.createElement("circle",{className:g("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),b.createElement("circle",{className:g("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function CD(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var LD=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Yt=E.forwardRef((e,r)=>{var{as:n="button",variant:t="primary",className:a,children:i,size:u="medium",loading:d=!1,disabled:c,icon:m,iconPosition:g="left",onKeyUp:p,"data-color":y}=e,k=LD(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:O}=ke(),D=c||d?In(k,["href"]):k,_=x=>{x.key===" "&&!c&&!d&&x.currentTarget.click()};return b.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},{"data-color":y??$D(t),"data-variant":HD(t)},D,{ref:r,onKeyUp:pa(p,_),className:O(a,"navds-button",`navds-button--${t}`,`navds-button--${u}`,{"navds-button--loading":d,"navds-button--icon-only":!!m&&!i,"navds-button--disabled":c??d}),disabled:c??d?!0:void 0}),m&&g==="left"&&b.createElement("span",{className:O("navds-button__icon")},m),d&&b.createElement(ID,{size:u}),i&&b.createElement(jn,{as:"span",size:u==="medium"?"medium":"small"},i),m&&g==="right"&&b.createElement("span",{className:O("navds-button__icon")},m))});function $D(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function HD(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var VD=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const UD={error:VS,warning:RS,info:NS,success:OS},_h=E.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:i="medium",fullWidth:u=!1,contentMaxWidth:d=!0,inline:c=!1,closeButton:m=!1,onClose:g}=e,p=VD(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:y}=ke(),k=Kt("Alert"),O=UD[a];return b.createElement("div",Object.assign({},p,{"data-color":WD(a),"data-variant":a,ref:r,className:y(t,"navds-alert",`navds-alert--${a}`,`navds-alert--${i}`,{"navds-alert--full-width":u,"navds-alert--inline":c,"navds-alert--close-button":m})}),b.createElement(O,{title:k(a),className:y("navds-alert__icon")}),b.createElement(zp,{as:"div",size:i,className:y("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),m&&!c&&b.createElement("div",{className:y("navds-alert__button-wrapper")},b.createElement(Yt,{className:y("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:g,type:"button",icon:b.createElement(Us,{title:["error","warning"].includes(a)?k("closeAlert"):k("closeMessage")})})))});function WD(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function Zs(e,r,n){const t=Me(e,n==null?void 0:n.in);return isNaN(r)?Je((n==null?void 0:n.in)||e,NaN):(r&&t.setDate(t.getDate()+r),t)}function Pd(e,r,n){const t=Me(e,n==null?void 0:n.in);if(isNaN(r))return Je(e,NaN);if(!r)return t;const a=t.getDate(),i=Je(e,t.getTime());i.setMonth(t.getMonth()+r+1,0);const u=i.getDate();return a>=u?i:(t.setFullYear(i.getFullYear(),i.getMonth(),a),t)}function hi(e,r){const n=Me(e,r==null?void 0:r.in).getDay();return n===0||n===6}function ka(e,r){return Pr(e,{...r,weekStartsOn:1})}function Th(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getFullYear(),a=Je(n,0);a.setFullYear(t+1,0,4),a.setHours(0,0,0,0);const i=ka(a),u=Je(n,0);u.setFullYear(t,0,4),u.setHours(0,0,0,0);const d=ka(u);return n.getTime()>=i.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function yi(e){const r=Me(e),n=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return n.setUTCFullYear(r.getFullYear()),+e-+n}function Mr(e,r){const n=Me(e,r==null?void 0:r.in);return n.setHours(0,0,0,0),n}function Kr(e,r,n){const[t,a]=us(n==null?void 0:n.in,e,r),i=Mr(t),u=Mr(a),d=+i-yi(i),c=+u-yi(u);return Math.round((d-c)/KS)}function GD(e,r){const n=Th(e,r),t=Je(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),ka(t)}function YD(e,r,n){return Zs(e,r*7,n)}function Md(e,r,n){return Pd(e,r*12,n)}function zD(e,r){let n,t=r==null?void 0:r.in;return e.forEach(a=>{!t&&typeof a=="object"&&(t=Je.bind(null,a));const i=Me(a,t);(!n||n<i||isNaN(+i))&&(n=i)}),Je(t,n||NaN)}function KD(e,r){let n,t=r==null?void 0:r.in;return e.forEach(a=>{!t&&typeof a=="object"&&(t=Je.bind(null,a));const i=Me(a,t);(!n||n>i||isNaN(+i))&&(n=i)}),Je(t,n||NaN)}function Bd(e,r,n){const[t,a]=us(n==null?void 0:n.in,e,r);return+Mr(t)==+Mr(a)}function Sh(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function XD(e){return!(!Sh(e)&&typeof e!="number"||isNaN(+Me(e)))}function ZD(e,r,n){const[t,a]=us(n==null?void 0:n.in,e,r),i=t.getFullYear()-a.getFullYear(),u=t.getMonth()-a.getMonth();return i*12+u}function Eh(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function QD(e,r){const[n,t]=us(e,r.start,r.end);return{start:n,end:t}}function Oh(e,r){const{start:n,end:t}=QD(r==null?void 0:r.in,e);let a=+n>+t;const i=a?+n:+t,u=a?t:n;u.setHours(0,0,0,0),u.setDate(1);let d=1;const c=[];for(;+u<=i;)c.push(Je(n,u)),u.setMonth(u.getMonth()+d);return a?c.reverse():c}function ba(e,r){const n=Me(e,r==null?void 0:r.in);return n.setDate(1),n.setHours(0,0,0,0),n}function Ii(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getFullYear();return n.setFullYear(t+1,0,0),n.setHours(23,59,59,999),n}function Qs(e,r){const n=Me(e,r==null?void 0:r.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Dh(e,r){var d,c,m,g;const n=Ta(),t=(r==null?void 0:r.weekStartsOn)??((c=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((g=(m=n.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,a=Me(e,r==null?void 0:r.in),i=a.getDay(),u=(i<t?-7:0)+6-(i-t);return a.setDate(a.getDate()+u),a.setHours(23,59,59,999),a}function JD(e,r){return Dh(e,{...r,weekStartsOn:1})}function ex(e,r){const n=Me(e,r==null?void 0:r.in);return Kr(n,Qs(n))+1}function qd(e,r){const n=Me(e,r==null?void 0:r.in),t=+ka(n)-+GD(n);return Math.round(t/Jp)+1}function jd(e,r){var g,p,y,k;const n=Me(e,r==null?void 0:r.in),t=n.getFullYear(),a=Ta(),i=(r==null?void 0:r.firstWeekContainsDate)??((p=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:p.firstWeekContainsDate)??a.firstWeekContainsDate??((k=(y=a.locale)==null?void 0:y.options)==null?void 0:k.firstWeekContainsDate)??1,u=Je((r==null?void 0:r.in)||e,0);u.setFullYear(t+1,0,i),u.setHours(0,0,0,0);const d=Pr(u,r),c=Je((r==null?void 0:r.in)||e,0);c.setFullYear(t,0,i),c.setHours(0,0,0,0);const m=Pr(c,r);return+n>=+d?t+1:+n>=+m?t:t-1}function nx(e,r){var d,c,m,g;const n=Ta(),t=(r==null?void 0:r.firstWeekContainsDate)??((c=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((g=(m=n.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??1,a=jd(e,r),i=Je((r==null?void 0:r.in)||e,0);return i.setFullYear(a,0,t),i.setHours(0,0,0,0),Pr(i,r)}function Id(e,r){const n=Me(e,r==null?void 0:r.in),t=+Pr(n,r)-+nx(n,r);return Math.round(t/Jp)+1}function Qe(e,r){const n=e<0?"-":"",t=Math.abs(e).toString().padStart(r,"0");return n+t}const Gr={y(e,r){const n=e.getFullYear(),t=n>0?n:1-n;return Qe(r==="yy"?t%100:t,r.length)},M(e,r){const n=e.getMonth();return r==="M"?String(n+1):Qe(n+1,2)},d(e,r){return Qe(e.getDate(),r.length)},a(e,r){const n=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,r){return Qe(e.getHours()%12||12,r.length)},H(e,r){return Qe(e.getHours(),r.length)},m(e,r){return Qe(e.getMinutes(),r.length)},s(e,r){return Qe(e.getSeconds(),r.length)},S(e,r){const n=r.length,t=e.getMilliseconds(),a=Math.trunc(t*Math.pow(10,n-3));return Qe(a,r.length)}},Ua={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ng={G:function(e,r,n){const t=e.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})}},y:function(e,r,n){if(r==="yo"){const t=e.getFullYear(),a=t>0?t:1-t;return n.ordinalNumber(a,{unit:"year"})}return Gr.y(e,r)},Y:function(e,r,n,t){const a=jd(e,t),i=a>0?a:1-a;if(r==="YY"){const u=i%100;return Qe(u,2)}return r==="Yo"?n.ordinalNumber(i,{unit:"year"}):Qe(i,r.length)},R:function(e,r){const n=Th(e);return Qe(n,r.length)},u:function(e,r){const n=e.getFullYear();return Qe(n,r.length)},Q:function(e,r,n){const t=Math.ceil((e.getMonth()+1)/3);switch(r){case"Q":return String(t);case"QQ":return Qe(t,2);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})}},q:function(e,r,n){const t=Math.ceil((e.getMonth()+1)/3);switch(r){case"q":return String(t);case"qq":return Qe(t,2);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})}},M:function(e,r,n){const t=e.getMonth();switch(r){case"M":case"MM":return Gr.M(e,r);case"Mo":return n.ordinalNumber(t+1,{unit:"month"});case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})}},L:function(e,r,n){const t=e.getMonth();switch(r){case"L":return String(t+1);case"LL":return Qe(t+1,2);case"Lo":return n.ordinalNumber(t+1,{unit:"month"});case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})}},w:function(e,r,n,t){const a=Id(e,t);return r==="wo"?n.ordinalNumber(a,{unit:"week"}):Qe(a,r.length)},I:function(e,r,n){const t=qd(e);return r==="Io"?n.ordinalNumber(t,{unit:"week"}):Qe(t,r.length)},d:function(e,r,n){return r==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Gr.d(e,r)},D:function(e,r,n){const t=ex(e);return r==="Do"?n.ordinalNumber(t,{unit:"dayOfYear"}):Qe(t,r.length)},E:function(e,r,n){const t=e.getDay();switch(r){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})}},e:function(e,r,n,t){const a=e.getDay(),i=(a-t.weekStartsOn+8)%7||7;switch(r){case"e":return String(i);case"ee":return Qe(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,r,n,t){const a=e.getDay(),i=(a-t.weekStartsOn+8)%7||7;switch(r){case"c":return String(i);case"cc":return Qe(i,r.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,r,n){const t=e.getDay(),a=t===0?7:t;switch(r){case"i":return String(a);case"ii":return Qe(a,r.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(t,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(t,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(t,{width:"short",context:"formatting"});case"iiii":default:return n.day(t,{width:"wide",context:"formatting"})}},a:function(e,r,n){const a=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,r,n){const t=e.getHours();let a;switch(t===12?a=Ua.noon:t===0?a=Ua.midnight:a=t/12>=1?"pm":"am",r){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,r,n){const t=e.getHours();let a;switch(t>=17?a=Ua.evening:t>=12?a=Ua.afternoon:t>=4?a=Ua.morning:a=Ua.night,r){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,r,n){if(r==="ho"){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return Gr.h(e,r)},H:function(e,r,n){return r==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Gr.H(e,r)},K:function(e,r,n){const t=e.getHours()%12;return r==="Ko"?n.ordinalNumber(t,{unit:"hour"}):Qe(t,r.length)},k:function(e,r,n){let t=e.getHours();return t===0&&(t=24),r==="ko"?n.ordinalNumber(t,{unit:"hour"}):Qe(t,r.length)},m:function(e,r,n){return r==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Gr.m(e,r)},s:function(e,r,n){return r==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Gr.s(e,r)},S:function(e,r){return Gr.S(e,r)},X:function(e,r,n){const t=e.getTimezoneOffset();if(t===0)return"Z";switch(r){case"X":return rg(t);case"XXXX":case"XX":return ma(t);case"XXXXX":case"XXX":default:return ma(t,":")}},x:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"x":return rg(t);case"xxxx":case"xx":return ma(t);case"xxxxx":case"xxx":default:return ma(t,":")}},O:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+tg(t,":");case"OOOO":default:return"GMT"+ma(t,":")}},z:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+tg(t,":");case"zzzz":default:return"GMT"+ma(t,":")}},t:function(e,r,n){const t=Math.trunc(+e/1e3);return Qe(t,r.length)},T:function(e,r,n){return Qe(+e,r.length)}};function tg(e,r=""){const n=e>0?"-":"+",t=Math.abs(e),a=Math.trunc(t/60),i=t%60;return i===0?n+String(a):n+String(a)+r+Qe(i,2)}function rg(e,r){return e%60===0?(e>0?"-":"+")+Qe(Math.abs(e)/60,2):ma(e,r)}function ma(e,r=""){const n=e>0?"-":"+",t=Math.abs(e),a=Qe(Math.trunc(t/60),2),i=Qe(t%60,2);return n+a+r+i}const ag=(e,r)=>{switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},xh=(e,r)=>{switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},tx=(e,r)=>{const n=e.match(/(P+)(p+)?/)||[],t=n[1],a=n[2];if(!a)return ag(e,r);let i;switch(t){case"P":i=r.dateTime({width:"short"});break;case"PP":i=r.dateTime({width:"medium"});break;case"PPP":i=r.dateTime({width:"long"});break;case"PPPP":default:i=r.dateTime({width:"full"});break}return i.replace("{{date}}",ag(t,r)).replace("{{time}}",xh(a,r))},Yu={p:xh,P:tx},rx=/^D+$/,ax=/^Y+$/,sx=["D","DD","YY","YYYY"];function Rh(e){return rx.test(e)}function Fh(e){return ax.test(e)}function zu(e,r,n){const t=ox(e,r,n);if(console.warn(t),sx.includes(e))throw new RangeError(t)}function ox(e,r,n){const t=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${t} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ix=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,lx=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ux=/^'([^]*?)'?$/,dx=/''/g,cx=/[a-zA-Z]/;function wa(e,r,n){var g,p,y,k,O,D,_,x;const t=Ta(),a=(n==null?void 0:n.locale)??t.locale??Mi,i=(n==null?void 0:n.firstWeekContainsDate)??((p=(g=n==null?void 0:n.locale)==null?void 0:g.options)==null?void 0:p.firstWeekContainsDate)??t.firstWeekContainsDate??((k=(y=t.locale)==null?void 0:y.options)==null?void 0:k.firstWeekContainsDate)??1,u=(n==null?void 0:n.weekStartsOn)??((D=(O=n==null?void 0:n.locale)==null?void 0:O.options)==null?void 0:D.weekStartsOn)??t.weekStartsOn??((x=(_=t.locale)==null?void 0:_.options)==null?void 0:x.weekStartsOn)??0,d=Me(e,n==null?void 0:n.in);if(!XD(d))throw new RangeError("Invalid time value");let c=r.match(lx).map(R=>{const T=R[0];if(T==="p"||T==="P"){const M=Yu[T];return M(R,a.formatLong)}return R}).join("").match(ix).map(R=>{if(R==="''")return{isToken:!1,value:"'"};const T=R[0];if(T==="'")return{isToken:!1,value:fx(R)};if(ng[T])return{isToken:!0,value:R};if(T.match(cx))throw new RangeError("Format string contains an unescaped latin alphabet character `"+T+"`");return{isToken:!1,value:R}});a.localize.preprocessor&&(c=a.localize.preprocessor(d,c));const m={firstWeekContainsDate:i,weekStartsOn:u,locale:a};return c.map(R=>{if(!R.isToken)return R.value;const T=R.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Fh(T)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Rh(T))&&zu(T,r,String(e));const M=ng[T[0]];return M(d,T,a.localize,m)}).join("")}function fx(e){const r=e.match(ux);return r?r[1].replace(dx,"'"):e}function mx(e,r){const n=Me(e,r==null?void 0:r.in),t=n.getFullYear(),a=n.getMonth(),i=Je(n,0);return i.setFullYear(t,a+1,0),i.setHours(0,0,0,0),i.getDate()}function gx(){return Object.assign({},Ta())}function px(e,r){const n=Me(e,r==null?void 0:r.in).getDay();return n===0?7:n}function Cd(e,r){return Me(e,r==null?void 0:r.in).getMonth()}function Ld(e,r){return Me(e,r==null?void 0:r.in).getFullYear()}function Nh(e,r){return+Me(e)>+Me(r)}function Js(e,r){return+Me(e)<+Me(r)}function hx(e,r){const n=yx(r)?new r(0):Je(r,0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}function yx(e){var r;return typeof e=="function"&&((r=e.prototype)==null?void 0:r.constructor)===e}const vx=10;class Ah{constructor(){ce(this,"subPriority",0)}validate(r,n){return!0}}class kx extends Ah{constructor(r,n,t,a,i){super(),this.value=r,this.validateValue=n,this.setValue=t,this.priority=a,i&&(this.subPriority=i)}validate(r,n){return this.validateValue(r,this.value,n)}set(r,n,t){return this.setValue(r,n,this.value,t)}}class bx extends Ah{constructor(n,t){super();ce(this,"priority",vx);ce(this,"subPriority",-1);this.context=n||(a=>Je(t,a))}set(n,t){return t.timestampIsSet?n:Je(n,hx(n,this.context))}}class We{run(r,n,t,a){const i=this.parse(r,n,t,a);return i?{setter:new kx(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(r,n,t){return!0}}class wx extends We{constructor(){super(...arguments);ce(this,"priority",140);ce(this,"incompatibleTokens",["R","u","t","T"])}parse(n,t,a){switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,t,a){return t.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const Sn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},or={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function En(e,r){return e&&{value:r(e.value),rest:e.rest}}function vn(e,r){const n=r.match(e);return n?{value:parseInt(n[0],10),rest:r.slice(n[0].length)}:null}function ir(e,r){const n=r.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:r.slice(1)};const t=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,i=n[3]?parseInt(n[3],10):0,u=n[5]?parseInt(n[5],10):0;return{value:t*(a*ZS+i*XS+u*QS),rest:r.slice(n[0].length)}}function Ph(e){return vn(Sn.anyDigitsSigned,e)}function bn(e,r){switch(e){case 1:return vn(Sn.singleDigit,r);case 2:return vn(Sn.twoDigits,r);case 3:return vn(Sn.threeDigits,r);case 4:return vn(Sn.fourDigits,r);default:return vn(new RegExp("^\\d{1,"+e+"}"),r)}}function vi(e,r){switch(e){case 1:return vn(Sn.singleDigitSigned,r);case 2:return vn(Sn.twoDigitsSigned,r);case 3:return vn(Sn.threeDigitsSigned,r);case 4:return vn(Sn.fourDigitsSigned,r);default:return vn(new RegExp("^-?\\d{1,"+e+"}"),r)}}function $d(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Mh(e,r){const n=r>0,t=n?r:1-r;let a;if(t<=50)a=e||100;else{const i=t+50,u=Math.trunc(i/100)*100,d=e>=i%100;a=e+u-(d?100:0)}return n?a:1-a}function Bh(e){return e%400===0||e%4===0&&e%100!==0}class _x extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,t,a){const i=u=>({year:u,isTwoDigitYear:t==="yy"});switch(t){case"y":return En(bn(4,n),i);case"yo":return En(a.ordinalNumber(n,{unit:"year"}),i);default:return En(bn(t.length,n),i)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,a){const i=n.getFullYear();if(a.isTwoDigitYear){const d=Mh(a.year,i);return n.setFullYear(d,0,1),n.setHours(0,0,0,0),n}const u=!("era"in t)||t.era===1?a.year:1-a.year;return n.setFullYear(u,0,1),n.setHours(0,0,0,0),n}}class Tx extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,t,a){const i=u=>({year:u,isTwoDigitYear:t==="YY"});switch(t){case"Y":return En(bn(4,n),i);case"Yo":return En(a.ordinalNumber(n,{unit:"year"}),i);default:return En(bn(t.length,n),i)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,a,i){const u=jd(n,i);if(a.isTwoDigitYear){const c=Mh(a.year,u);return n.setFullYear(c,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Pr(n,i)}const d=!("era"in t)||t.era===1?a.year:1-a.year;return n.setFullYear(d,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Pr(n,i)}}class Sx extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,t){return vi(t==="R"?4:t.length,n)}set(n,t,a){const i=Je(n,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),ka(i)}}class Ex extends We{constructor(){super(...arguments);ce(this,"priority",130);ce(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,t){return vi(t==="u"?4:t.length,n)}set(n,t,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class Ox extends We{constructor(){super(...arguments);ce(this,"priority",120);ce(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"Q":case"QQ":return bn(t.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=1&&t<=4}set(n,t,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class Dx extends We{constructor(){super(...arguments);ce(this,"priority",120);ce(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"q":case"qq":return bn(t.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=1&&t<=4}set(n,t,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class xx extends We{constructor(){super(...arguments);ce(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ce(this,"priority",110)}parse(n,t,a){const i=u=>u-1;switch(t){case"M":return En(vn(Sn.month,n),i);case"MM":return En(bn(2,n),i);case"Mo":return En(a.ordinalNumber(n,{unit:"month"}),i);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=11}set(n,t,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class Rx extends We{constructor(){super(...arguments);ce(this,"priority",110);ce(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,t,a){const i=u=>u-1;switch(t){case"L":return En(vn(Sn.month,n),i);case"LL":return En(bn(2,n),i);case"Lo":return En(a.ordinalNumber(n,{unit:"month"}),i);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=11}set(n,t,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function Fx(e,r,n){const t=Me(e,n==null?void 0:n.in),a=Id(t,n)-r;return t.setDate(t.getDate()-a*7),Me(t,n==null?void 0:n.in)}class Nx extends We{constructor(){super(...arguments);ce(this,"priority",100);ce(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,t,a){switch(t){case"w":return vn(Sn.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return bn(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,a,i){return Pr(Fx(n,a,i),i)}}function Ax(e,r,n){const t=Me(e,n==null?void 0:n.in),a=qd(t,n)-r;return t.setDate(t.getDate()-a*7),t}class Px extends We{constructor(){super(...arguments);ce(this,"priority",100);ce(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,t,a){switch(t){case"I":return vn(Sn.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return bn(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,a){return ka(Ax(n,a))}}const Mx=[31,28,31,30,31,30,31,31,30,31,30,31],Bx=[31,29,31,30,31,30,31,31,30,31,30,31];class qx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"subPriority",1);ce(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"d":return vn(Sn.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return bn(t.length,n)}}validate(n,t){const a=n.getFullYear(),i=Bh(a),u=n.getMonth();return i?t>=1&&t<=Bx[u]:t>=1&&t<=Mx[u]}set(n,t,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class jx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"subpriority",1);ce(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,t,a){switch(t){case"D":case"DD":return vn(Sn.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return bn(t.length,n)}}validate(n,t){const a=n.getFullYear();return Bh(a)?t>=1&&t<=366:t>=1&&t<=365}set(n,t,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function Hd(e,r,n){var p,y,k,O;const t=Ta(),a=(n==null?void 0:n.weekStartsOn)??((y=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:y.weekStartsOn)??t.weekStartsOn??((O=(k=t.locale)==null?void 0:k.options)==null?void 0:O.weekStartsOn)??0,i=Me(e,n==null?void 0:n.in),u=i.getDay(),c=(r%7+7)%7,m=7-a,g=r<0||r>6?r-(u+m)%7:(c+m)%7-(u+m)%7;return Zs(i,g,n)}class Ix extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,t,a){switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,a,i){return n=Hd(n,a,i),n.setHours(0,0,0,0),n}}class Cx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,t,a,i){const u=d=>{const c=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+c};switch(t){case"e":case"ee":return En(bn(t.length,n),u);case"eo":return En(a.ordinalNumber(n,{unit:"day"}),u);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,a,i){return n=Hd(n,a,i),n.setHours(0,0,0,0),n}}class Lx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,t,a,i){const u=d=>{const c=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+c};switch(t){case"c":case"cc":return En(bn(t.length,n),u);case"co":return En(a.ordinalNumber(n,{unit:"day"}),u);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=6}set(n,t,a,i){return n=Hd(n,a,i),n.setHours(0,0,0,0),n}}function $x(e,r,n){const t=Me(e,n==null?void 0:n.in),a=px(t,n),i=r-a;return Zs(t,i,n)}class Hx extends We{constructor(){super(...arguments);ce(this,"priority",90);ce(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,t,a){const i=u=>u===0?7:u;switch(t){case"i":case"ii":return bn(t.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return En(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiii":return En(a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiiii":return En(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiii":default:return En(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i)}}validate(n,t){return t>=1&&t<=7}set(n,t,a){return n=$x(n,a),n.setHours(0,0,0,0),n}}class Vx extends We{constructor(){super(...arguments);ce(this,"priority",80);ce(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,t,a){switch(t){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,a){return n.setHours($d(a),0,0,0),n}}class Ux extends We{constructor(){super(...arguments);ce(this,"priority",80);ce(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,t,a){switch(t){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,a){return n.setHours($d(a),0,0,0),n}}class Wx extends We{constructor(){super(...arguments);ce(this,"priority",80);ce(this,"incompatibleTokens",["a","b","t","T"])}parse(n,t,a){switch(t){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,a){return n.setHours($d(a),0,0,0),n}}class Gx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,t,a){switch(t){case"h":return vn(Sn.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return bn(t.length,n)}}validate(n,t){return t>=1&&t<=12}set(n,t,a){const i=n.getHours()>=12;return i&&a<12?n.setHours(a+12,0,0,0):!i&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class Yx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,t,a){switch(t){case"H":return vn(Sn.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return bn(t.length,n)}}validate(n,t){return t>=0&&t<=23}set(n,t,a){return n.setHours(a,0,0,0),n}}class zx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,t,a){switch(t){case"K":return vn(Sn.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return bn(t.length,n)}}validate(n,t){return t>=0&&t<=11}set(n,t,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class Kx extends We{constructor(){super(...arguments);ce(this,"priority",70);ce(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,t,a){switch(t){case"k":return vn(Sn.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return bn(t.length,n)}}validate(n,t){return t>=1&&t<=24}set(n,t,a){const i=a<=24?a%24:a;return n.setHours(i,0,0,0),n}}class Xx extends We{constructor(){super(...arguments);ce(this,"priority",60);ce(this,"incompatibleTokens",["t","T"])}parse(n,t,a){switch(t){case"m":return vn(Sn.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return bn(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,a){return n.setMinutes(a,0,0),n}}class Zx extends We{constructor(){super(...arguments);ce(this,"priority",50);ce(this,"incompatibleTokens",["t","T"])}parse(n,t,a){switch(t){case"s":return vn(Sn.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return bn(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,a){return n.setSeconds(a,0),n}}class Qx extends We{constructor(){super(...arguments);ce(this,"priority",30);ce(this,"incompatibleTokens",["t","T"])}parse(n,t){const a=i=>Math.trunc(i*Math.pow(10,-t.length+3));return En(bn(t.length,n),a)}set(n,t,a){return n.setMilliseconds(a),n}}class Jx extends We{constructor(){super(...arguments);ce(this,"priority",10);ce(this,"incompatibleTokens",["t","T","x"])}parse(n,t){switch(t){case"X":return ir(or.basicOptionalMinutes,n);case"XX":return ir(or.basic,n);case"XXXX":return ir(or.basicOptionalSeconds,n);case"XXXXX":return ir(or.extendedOptionalSeconds,n);case"XXX":default:return ir(or.extended,n)}}set(n,t,a){return t.timestampIsSet?n:Je(n,n.getTime()-yi(n)-a)}}class eR extends We{constructor(){super(...arguments);ce(this,"priority",10);ce(this,"incompatibleTokens",["t","T","X"])}parse(n,t){switch(t){case"x":return ir(or.basicOptionalMinutes,n);case"xx":return ir(or.basic,n);case"xxxx":return ir(or.basicOptionalSeconds,n);case"xxxxx":return ir(or.extendedOptionalSeconds,n);case"xxx":default:return ir(or.extended,n)}}set(n,t,a){return t.timestampIsSet?n:Je(n,n.getTime()-yi(n)-a)}}class nR extends We{constructor(){super(...arguments);ce(this,"priority",40);ce(this,"incompatibleTokens","*")}parse(n){return Ph(n)}set(n,t,a){return[Je(n,a*1e3),{timestampIsSet:!0}]}}class tR extends We{constructor(){super(...arguments);ce(this,"priority",20);ce(this,"incompatibleTokens","*")}parse(n){return Ph(n)}set(n,t,a){return[Je(n,a),{timestampIsSet:!0}]}}const rR={G:new wx,y:new _x,Y:new Tx,R:new Sx,u:new Ex,Q:new Ox,q:new Dx,M:new xx,L:new Rx,w:new Nx,I:new Px,d:new qx,D:new jx,E:new Ix,e:new Cx,c:new Lx,i:new Hx,a:new Vx,b:new Ux,B:new Wx,h:new Gx,H:new Yx,K:new zx,k:new Kx,m:new Xx,s:new Zx,S:new Qx,X:new Jx,x:new eR,t:new nR,T:new tR},aR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,sR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oR=/^'([^]*?)'?$/,iR=/''/g,lR=/\S/,uR=/[a-zA-Z]/;function Xa(e,r,n,t){var _,x,R,T,M,v,P,F;const a=()=>Je((t==null?void 0:t.in)||n,NaN),i=gx(),u=(t==null?void 0:t.locale)??i.locale??Mi,d=(t==null?void 0:t.firstWeekContainsDate)??((x=(_=t==null?void 0:t.locale)==null?void 0:_.options)==null?void 0:x.firstWeekContainsDate)??i.firstWeekContainsDate??((T=(R=i.locale)==null?void 0:R.options)==null?void 0:T.firstWeekContainsDate)??1,c=(t==null?void 0:t.weekStartsOn)??((v=(M=t==null?void 0:t.locale)==null?void 0:M.options)==null?void 0:v.weekStartsOn)??i.weekStartsOn??((F=(P=i.locale)==null?void 0:P.options)==null?void 0:F.weekStartsOn)??0;if(!r)return e?a():Me(n,t==null?void 0:t.in);const m={firstWeekContainsDate:d,weekStartsOn:c,locale:u},g=[new bx(t==null?void 0:t.in,n)],p=r.match(sR).map(N=>{const j=N[0];if(j in Yu){const U=Yu[j];return U(N,u.formatLong)}return N}).join("").match(aR),y=[];for(let N of p){!(t!=null&&t.useAdditionalWeekYearTokens)&&Fh(N)&&zu(N,r,e),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Rh(N)&&zu(N,r,e);const j=N[0],U=rR[j];if(U){const{incompatibleTokens:V}=U;if(Array.isArray(V)){const C=y.find(W=>V.includes(W.token)||W.token===j);if(C)throw new RangeError(`The format string mustn't contain \`${C.fullToken}\` and \`${N}\` at the same time`)}else if(U.incompatibleTokens==="*"&&y.length>0)throw new RangeError(`The format string mustn't contain \`${N}\` and any other token at the same time`);y.push({token:j,fullToken:N});const G=U.run(e,N,u.match,m);if(!G)return a();g.push(G.setter),e=G.rest}else{if(j.match(uR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+j+"`");if(N==="''"?N="'":j==="'"&&(N=dR(N)),e.indexOf(N)===0)e=e.slice(N.length);else return a()}}if(e.length>0&&lR.test(e))return a();const k=g.map(N=>N.priority).sort((N,j)=>j-N).filter((N,j,U)=>U.indexOf(N)===j).map(N=>g.filter(j=>j.priority===N).sort((j,U)=>U.subPriority-j.subPriority)).map(N=>N[0]);let O=Me(n,t==null?void 0:t.in);if(isNaN(+O))return a();const D={};for(const N of k){if(!N.validate(O,m))return a();const j=N.set(O,D,m);Array.isArray(j)?(O=j[0],Object.assign(D,j[1])):O=j}return O}function dR(e){return e.match(oR)[1].replace(iR,"'")}function cR(e,r,n){const[t,a]=us(n==null?void 0:n.in,e,r);return t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth()}function qh(e,r,n){const[t,a]=us(n==null?void 0:n.in,e,r);return t.getFullYear()===a.getFullYear()}function fR(e,r,n){return Zs(e,-r,n)}function jh(e,r,n){const t=Me(e,n==null?void 0:n.in),a=t.getFullYear(),i=t.getDate(),u=Je(e,0);u.setFullYear(a,r,15),u.setHours(0,0,0,0);const d=mx(u);return t.setMonth(r,Math.min(i,d)),t}function Ih(e,r,n){const t=Me(e,n==null?void 0:n.in);return isNaN(+t)?Je(e,NaN):(t.setFullYear(r),t)}function mR(e,r,n){return Pd(e,-r,n)}function gR(e,r,n){const{years:t=0,months:a=0,weeks:i=0,days:u=0,hours:d=0,minutes:c=0,seconds:m=0}=r,g=mR(e,a+t*12,n),p=fR(g,u+i*7,n),y=c+d*60,O=(m+y*60)*1e3;return Je(e,+p-O)}var Za=typeof document<"u"?E.useLayoutEffect:E.useEffect;const pR={...Vp},hR=pR.useInsertionEffect,yR=hR||(e=>e());function vR(e){const r=E.useRef(()=>{});return yR(()=>{r.current=e}),E.useCallback(function(){for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return r.current==null?void 0:r.current(...t)},[])}const kR={...Vp};let sg=!1,bR=0;const og=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+bR++;function wR(){const[e,r]=E.useState(()=>sg?og():void 0);return Za(()=>{e==null&&r(og())},[]),E.useEffect(()=>{sg=!0},[]),e}const _R=kR.useId,Ch=_R||wR;function TR(){const e=new Map;return{emit(r,n){var t;(t=e.get(r))==null||t.forEach(a=>a(n))},on(r,n){e.has(r)||e.set(r,new Set),e.get(r).add(n)},off(r,n){var t;(t=e.get(r))==null||t.delete(n)}}}const SR=E.createContext(null),ER=E.createContext(null),OR=()=>{var e;return((e=E.useContext(SR))==null?void 0:e.id)||null},DR=()=>E.useContext(ER);function xR(e){return"data-floating-ui-"+e}const RR=E.createContext(null),ig=xR("portal");function FR(e){e===void 0&&(e={});const{id:r,root:n}=e,t=Ch(),a=NR(),[i,u]=E.useState(null),d=E.useRef(null);return Za(()=>()=>{i==null||i.remove(),queueMicrotask(()=>{d.current=null})},[i]),Za(()=>{if(!t||d.current)return;const c=r?document.getElementById(r):null;if(!c)return;const m=document.createElement("div");m.id=t,m.setAttribute(ig,""),c.appendChild(m),d.current=m,u(m)},[r,t]),Za(()=>{if(n===null||!t||d.current)return;let c=n||(a==null?void 0:a.portalNode);c&&!Wn(c)&&(c=c.current),c=c||document.body;let m=null;r&&(m=document.createElement("div"),m.id=r,c.appendChild(m));const g=document.createElement("div");g.id=t,g.setAttribute(ig,""),c=m||c,c.appendChild(g),d.current=g,u(g)},[r,n,t,a]),i}const NR=()=>E.useContext(RR);function AR(e){const{open:r=!1,onOpenChange:n,elements:t}=e,a=Ch(),i=E.useRef({}),[u]=E.useState(()=>TR()),d=OR()!=null,[c,m]=E.useState(t.reference),g=vR((k,O,D)=>{i.current.openEvent=k?O:void 0,u.emit("openchange",{open:k,event:O,reason:D,nested:d}),n==null||n(k,O,D)}),p=E.useMemo(()=>({setPositionReference:m}),[]),y=E.useMemo(()=>({reference:c||t.reference||null,floating:t.floating||null,domReference:t.reference}),[c,t.reference,t.floating]);return E.useMemo(()=>({dataRef:i,open:r,onOpenChange:g,elements:y,events:u,floatingId:a,refs:p}),[r,g,y,u,a,p])}function PR(e){e===void 0&&(e={});const{nodeId:r}=e,n=AR({...e,elements:{reference:null,floating:null,...e.elements}}),t=e.rootContext||n,a=t.elements,[i,u]=E.useState(null),[d,c]=E.useState(null),g=(a==null?void 0:a.domReference)||i,p=E.useRef(null),y=DR();Za(()=>{g&&(p.current=g)},[g]);const k=xD({...e,elements:{...a,...d&&{reference:d}}}),O=E.useCallback(T=>{const M=Wn(T)?{getBoundingClientRect:()=>T.getBoundingClientRect(),getClientRects:()=>T.getClientRects(),contextElement:T}:T;c(M),k.refs.setReference(M)},[k.refs]),D=E.useCallback(T=>{(Wn(T)||T===null)&&(p.current=T,u(T)),(Wn(k.refs.reference.current)||k.refs.reference.current===null||T!==null&&!Wn(T))&&k.refs.setReference(T)},[k.refs]),_=E.useMemo(()=>({...k.refs,setReference:D,setPositionReference:O,domReference:p}),[k.refs,D,O]),x=E.useMemo(()=>({...k.elements,domReference:g}),[k.elements,g]),R=E.useMemo(()=>({...k,...t,refs:_,elements:x,nodeId:r}),[k,_,x,r,t]);return Za(()=>{t.dataRef.current.floatingContext=R;const T=y==null?void 0:y.nodesRef.current.find(M=>M.id===r);T&&(T.context=R)}),E.useMemo(()=>({...k,context:R,refs:_,elements:x}),[k,_,x,R])}const Ci=()=>{const{cn:e}=ke();return b.createElement(Qp,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Lh=()=>{const{cn:e}=ke();return b.createElement(Qp,{title:Kt("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},ki=E.createContext(null),Sa=(e,r)=>{var n,t,a;const{size:i,error:u,errorId:d}=e,c=E.useContext(ki),m=fr(),g=(n=e.id)!==null&&n!==void 0?n:`${r}-${m}`,p=d??`${r}-error-${m}`,y=`${r}-description-${m}`,k=(c==null?void 0:c.disabled)||e.disabled,O=((c==null?void 0:c.readOnly)||e.readOnly)&&!k||void 0,D=!k&&!O&&!!(u||c!=null&&c.error),_=!k&&!O&&!!u&&typeof u!="boolean",x=Object.assign({},D?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:_,hasError:D,errorId:p,inputDescriptionId:y,size:(t=i??(c==null?void 0:c.size))!==null&&t!==void 0?t:"medium",readOnly:O,inputProps:Object.assign(Object.assign({id:g},x),{"aria-describedby":Gs(e["aria-describedby"],{[y]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[p]:_,[(a=c==null?void 0:c.errorId)!==null&&a!==void 0?a:""]:D&&!!(c!=null&&c.error)})||void 0,disabled:k})}},$h={global:{dateLocale:ah,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Hh={global:{dateLocale:oh,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Vh=(e="nb")=>{switch(e){case"nn":return oh;case"en":return ah;default:return sh}},Uh=e=>{switch(e){case"nn":return Hh.DatePicker;case"en":case"en-GB":return $h.DatePicker;default:return}},MR=e=>{switch(e){case"nn":return Hh.global;case"en":case"en-GB":return $h.global;default:return}},[Wh,Li]=Ri();var BR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const[qR,Vd]=Ri({errorMessage:"useDateInputContext must be used with DateInputContext"}),Gh=E.forwardRef((e,r)=>{const{className:n,hideLabel:t=!1,label:a,description:i,variant:u="datepicker",setAnchorRef:d}=e,c=BR(e,["className","hideLabel","label","description","variant","setAnchorRef"]),m=E.useRef(null),g=Li().translate,{cn:p}=ke(),y=u==="datepicker",k={prefix:y?"datepicker-input":"monthpicker-input",iconTitle:{open:y?"openDatePicker":"openMonthPicker",close:y?"closeDatePicker":"closeMonthPicker"}},O=Vd(),{inputProps:D,size:_="medium",inputDescriptionId:x,errorId:R,showErrorMsg:T,hasError:M,readOnly:v}=Sa(e,k.prefix);return b.createElement("div",{className:p(n,"navds-form-field",`navds-form-field--${_}`,"navds-date__field",{"navds-text-field--error":M,"navds-date__field--error":M,"navds-form-field--disabled":!!D.disabled,"navds-text-field--disabled":!!D.disabled,"navds-form-field--readonly":v,"navds-text-field--readonly":v,"navds-date__field--readonly":v})},b.createElement(jn,{htmlFor:D.id,size:_,className:p("navds-form-field__label",{"navds-sr-only":t})},v&&b.createElement(Ci,null),a),!!i&&b.createElement(fn,{as:"div",className:p("navds-form-field__description",{"navds-sr-only":t}),id:x,size:_},i),b.createElement("div",{className:p("navds-date__field-wrapper")},b.createElement("input",Object.assign({ref:r},In(c,["error","errorId","size"]),D,{autoComplete:"off","aria-controls":O!=null&&O.open?O.ariaId:void 0,readOnly:v,className:p("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${_}`),size:y?11:14})),b.createElement("button",{disabled:D.disabled||v,tabIndex:v||O!=null&&O.open?-1:0,onClick:()=>{O==null||O.onOpen(),d==null||d(m.current)},type:"button",className:p("navds-date__field-button"),ref:m},b.createElement(SS,{title:g(k.iconTitle[O!=null&&O.open?"close":"open"])}))),b.createElement("div",{className:p("navds-form-field__error"),id:R,"aria-relevant":"additions removals","aria-live":"polite"},T&&b.createElement(ls,{size:_,showIcon:!0},e.error)))}),jR=E.forwardRef((e,r)=>b.createElement(Gh,Object.assign({},e,{ref:r})));E.forwardRef((e,r)=>b.createElement(Gh,Object.assign({},e,{variant:"monthpicker",ref:r})));var IR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const CR=E.forwardRef((e,r)=>{var{className:n}=e,t=IR(e,["className"]);const{cn:a}=ke();return b.createElement("div",Object.assign({},t,{ref:r,className:a("navds-modal__body",n)}))});var LR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const $R=E.forwardRef((e,r)=>{var{className:n}=e,t=LR(e,["className"]);const{cn:a}=ke();return b.createElement("div",Object.assign({},t,{ref:r,className:a("navds-modal__footer",n)}))});var HR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Yh=E.forwardRef((e,r)=>{var{children:n,className:t,closeButton:a=!0}=e,i=HR(e,["children","className","closeButton"]);const{cn:u}=ke(),d=Pi(),c=Kt("global");return b.createElement("div",Object.assign({},i,{ref:r,className:u("navds-modal__header",t)}),d.closeHandler&&a&&b.createElement(Yt,{type:"button",className:u("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:m=>{["Enter"," "].includes(m.key)&&m.repeat&&m.preventDefault()},onClick:d.closeHandler,icon:b.createElement(Us,{title:c("close")})}),n)}),lg=({clientX:e,clientY:r},{left:n,top:t,right:a,bottom:i})=>!(e<n||r<t||e>a||r>i);function VR(e,r,n){if(!(r&&r.closeButton===!1))return n?()=>{var t;return n()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const Jo="navds-modal__document-body";function UR(e,r,n){b.useEffect(()=>{if(n||!e.current||!r)return;e.current.open&&document.body.classList.add(Jo);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Jo):document.body.classList.remove(Jo)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(Jo)}},[e,r,n])}const Ya=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function zh(e,r){var n="on"+r.type.toLowerCase();return typeof e[n]=="function"&&e[n](r),e.dispatchEvent(r)}function $s(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Kh(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function WR(e,r){for(var n=0;n<e.length;++n)if(e[n]===r)return!0;return!1}function pu(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Xh(e){var r=["button","input","keygen","select","textarea"],n=r.map(function(u){return u+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(n.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),i=0;i<a.length&&!(a[i].tagName&&a[i].shadowRoot&&(t=Xh(a[i].shadowRoot),t));i++);return t}function ug(e){return e.isConnected||document.body.contains(e)}function Zh(e){if(e.submitter)return e.submitter;var r=e.target;if(!(r instanceof HTMLFormElement))return null;var n=He.formSubmitter;if(!n){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;n=a.activeElement}return!n||n.form!==r?null:n}function GR(e){if(!e.defaultPrevented){var r=e.target,n=He.imagemapUseValue,t=Zh(e);n===null&&t&&(n=t.value);var a=$s(r);if(a){var i=t&&t.getAttribute("formmethod")||r.getAttribute("method");i==="dialog"&&(e.preventDefault(),n!=null?a.close(n):a.close())}}}function Qh(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",GR,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var r=new MutationObserver(this.maybeHideModal.bind(this));r.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,t=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),a,i=function(u){if(u.target===e){var d="DOMNodeRemoved";n|=u.type.substr(0,d.length)===d,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(u){e.addEventListener(u,i)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Qh.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&ug(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),He.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var r=document.createElement("div");this.dialog_.insertBefore(r,this.dialog_.firstChild),r.tabIndex=-1,r.focus(),this.dialog_.removeChild(r)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Xh(this.dialog_)),Kh(document.activeElement),e&&e.focus()},updateZIndex:function(e,r){if(e<r)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=r},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!ug(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!He.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,He.needsCentering(this.dialog_)?(He.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var r=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});zh(this.dialog_,r)}};var He={};He.reposition=function(e){var r=document.body.scrollTop||document.documentElement.scrollTop,n=r+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(r,n)+"px"};He.isInlinePositionSetByStylesheet=function(e){for(var r=0;r<document.styleSheets.length;++r){var n=document.styleSheets[r],t=null;try{t=n.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var i=t[a],u=null;try{u=document.querySelectorAll(i.selectorText)}catch{}if(!(!u||!WR(u,e))){var d=i.style.getPropertyValue("top"),c=i.style.getPropertyValue("bottom");if(d&&d!=="auto"||c&&c!=="auto")return!0}}}return!1};He.needsCentering=function(e){var r=window.getComputedStyle(e);return r.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!He.isInlinePositionSetByStylesheet(e)};He.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Qh(e)};He.registerDialog=function(e){e.showModal||He.forceRegisterDialog(e)};He.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(r){this.forwardTab_=void 0,r.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(r){var n=[];r.forEach(function(t){for(var a=0,i;i=t.removedNodes[a];++a)i instanceof Element&&(i.localName==="dialog"&&n.push(i),n=n.concat(i.querySelectorAll("dialog")))}),n.length&&e(n)}))};He.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};He.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};He.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,r=0,n;n=this.pendingDialogStack[r];++r)n.updateZIndex(--e,--e),r===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};He.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=$s(e);){for(var r=0,n;n=this.pendingDialogStack[r];++r)if(n.dialog===e)return r===0;e=e.parentElement}return!1};He.DialogManager.prototype.handleFocus_=function(e){var r=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(r)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Kh(r),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],t=n.dialog,a=t.compareDocumentPosition(r);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():r!==document.documentElement&&document.documentElement.focus()),!1}};He.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var r=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&zh(n.dialog,r)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};He.DialogManager.prototype.checkDOM_=function(e){var r=this.pendingDialogStack.slice();r.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};He.DialogManager.prototype.pushDialog=function(e){var r=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=r?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};He.DialogManager.prototype.removeDialog=function(e){var r=this.pendingDialogStack.indexOf(e);r!==-1&&(this.pendingDialogStack.splice(r,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Ya&&(He.dm=new He.DialogManager,He.formSubmitter=null,He.imagemapUseValue=null);if(Ya){var dg=document.createElement("form");if(dg.setAttribute("method","dialog"),dg.method!=="dialog"){var Wa=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Wa){var YR=Wa.get;Wa.get=function(){return pu(this)?"dialog":YR.call(this)};var zR=Wa.set;Wa.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):zR.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Wa)}}document.addEventListener("click",function(e){if(He.formSubmitter=null,He.imagemapUseValue=null,!e.defaultPrevented){var r=e.target;if("composedPath"in e){var n=e.composedPath();r=n.shift()||r}if(!(!r||!pu(r.form))){var t=r.type==="submit"&&["button","input"].indexOf(r.localName)>-1;if(!t){if(!(r.localName==="input"&&r.type==="image"))return;He.imagemapUseValue=e.offsetX+","+e.offsetY}var a=$s(r);a&&(He.formSubmitter=r)}}},!1),document.addEventListener("submit",function(e){var r=e.target,n=$s(r);if(!n){var t=Zh(e),a=t&&t.getAttribute("formmethod")||r.getAttribute("method");a==="dialog"&&e.preventDefault()}});var KR=HTMLFormElement.prototype.submit,XR=function(){if(!pu(this))return KR.call(this);var e=$s(this);e&&e.close()};HTMLFormElement.prototype.submit=XR}var ZR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const $i=E.forwardRef((e,r)=>{var n,t,{header:a,children:i,open:u,onBeforeClose:d,onCancel:c,closeOnBackdropClick:m,width:g,placement:p,portal:y,className:k,"aria-labelledby":O,style:D,onClick:_,onMouseDown:x}=e,R=ZR(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:T}=ke(),M=E.useRef(T("navds-modal--polyfilled")),v=E.useRef(null),P=ss(v,r),F=fr(),N=(n=Od())===null||n===void 0?void 0:n.rootElement,j=FR({root:N}),U=Vd(!1),V=Pi(!1)!==void 0;V&&!U&&console.error("Modals should not be nested"),E.useEffect(()=>{Ya&&v.current&&j&&(He.registerDialog(v.current),v.current.classList.add(M.current)),v.current&&j&&(v.current.autofocus=!0)},[j]),E.useEffect(()=>{v.current&&j&&u!==void 0&&(u&&!v.current.open?v.current.showModal():!u&&v.current.open&&v.current.close())},[j,u]),UR(v,j,V);const G=typeof g=="string"&&["small","medium"].includes(g),C=T("navds-modal",k,{[M.current]:Ya,"navds-modal--autowidth":!g,[`navds-modal--${g}`]:G,"navds-modal--top":p==="top"&&!Ya}),W=Object.assign(Object.assign({},D),G?{}:{width:g}),Y=E.useRef({clientX:0,clientY:0}),$=Te=>{Y.current=Te},J=m&&!Ya,z=Te=>{if(Te.target!==v.current)return;const Ee=v.current.getBoundingClientRect();lg(Y.current,Ee)||lg(Te,Ee)||d!==void 0&&d()===!1||v.current.close()},re=Te=>{d&&d()===!1&&Te.preventDefault()},se=!O&&!R["aria-label"]&&a?F:O,de=b.createElement("dialog",Object.assign({},R,{ref:P,className:C,style:W,onCancel:pa(c,re),onClick:J?pa(_,z):_,onMouseDown:J?pa(x,$):x,"aria-labelledby":se}),b.createElement(US,{closeHandler:VR(v,a,d),ref:v},a&&b.createElement(Yh,null,a.label&&b.createElement(Ni,{className:T("navds-modal__label")},a.label),b.createElement(Ai,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:F},a.icon&&b.createElement("span",{className:T("navds-modal__header-icon")},a.icon),a.heading)),i));return y?j?Sd.createPortal(de,j):null:de});$i.Header=Yh;$i.Body=CR;$i.Footer=$R;var QR=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const JR=E.forwardRef((e,r)=>{var{className:n}=e,t=QR(e,["className"]);const{cn:a}=ke();return b.createElement("div",Object.assign({},t,{ref:r,className:a("navds-popover__content",n)}))});var eF=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Jh=E.forwardRef((e,r)=>{var{className:n,children:t,anchorEl:a,arrow:i=!0,open:u,onClose:d,placement:c="top",offset:m,strategy:g,flip:p=!0}=e,y=eF(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:k}=ke(),O=E.useRef(null),D=Pi(!1)!==void 0,_=Vd(!1),x=g??(D?"fixed":"absolute"),R=_?!1:p,T=Ys(!1),{update:M,refs:v,placement:P,middlewareData:{arrow:{x:F,y:N}={}},floatingStyles:j}=PR({strategy:x,placement:c,open:u,middleware:[FD(m??(T?8:i?16:4)),R&&AD({padding:5,fallbackPlacements:["bottom","top"]}),ND({padding:12}),PD({element:O,padding:8})]});es(()=>{v.setReference(a)},[a]);const U=ss(v.setFloating,r);es(()=>{if(!v.reference.current||!v.floating.current||!u)return;const G=TD(v.reference.current,v.floating.current,M);return()=>G()},[v.floating,v.reference,M,u,a]);const V={top:"bottom",right:"left",bottom:"top",left:"right"}[P.split("-")[0]];return b.createElement(WO,{asChild:!0,safeZone:{anchor:a,dismissable:v.floating.current},onDismiss:()=>u&&(d==null?void 0:d()),enabled:u},b.createElement("div",Object.assign({ref:U},y,{className:k("navds-popover",n,{"navds-popover--hidden":!u||!a}),style:Object.assign(Object.assign({},y.style),j),"data-placement":P,"aria-hidden":!u||!a}),t,i&&!T&&b.createElement("div",{ref:G=>{O.current=G},style:Object.assign(Object.assign(Object.assign({},F!=null?{left:F}:{}),N!=null?{top:N}:{}),V?{[V]:"-0.5rem"}:{}),className:k("navds-popover__arrow")})))});Jh.Content=JR;const nF={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},tF=({open:e,children:r,onClose:n,anchor:t,locale:a,translate:i,variant:u,popoverProps:d})=>{const c=Kt("global",MR(a)),{cn:m}=ke(),g=E.useRef(null),p=Pi(!1)!==void 0;return GS("screen and (min-width: 768px)",!0)&&!p?b.createElement(Jh,Object.assign({arrow:!1,anchorEl:t,open:e,onClose:n,placement:"bottom-start",role:"dialog",className:m("navds-date__popover",{"navds-date":u==="month"}),flip:!1},d),r):b.createElement($i,{ref:g,open:e,onClose:k=>{k.stopPropagation(),n()},"aria-label":i(nF[u]),className:m("navds-date__modal",{"navds-date__nested-modal":p,"navds-date":u==="month"}),closeOnBackdropClick:!0,placement:"top"},b.createElement("div",{className:m("navds-date__modal-body")},r,b.createElement(Yt,{variant:"tertiary",onClick:()=>{var k;return(k=g==null?void 0:g.current)===null||k===void 0?void 0:k.close()},size:"small",type:"button"},c("close"))))};function ey(e){return!!(e&&typeof e=="object"&&"from"in e)}const hu={},Cs={};function Hs(e,r){try{const t=(hu[e]||(hu[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(r).split("GMT")[1]||"";return t in Cs?Cs[t]:cg(t,t.split(":"))}catch{if(e in Cs)return Cs[e];const n=e==null?void 0:e.match(rF);return n?cg(e,n.slice(1)):NaN}}const rF=/([+-]\d\d):?(\d\d)?/;function cg(e,r){const n=+r[0],t=+(r[1]||0);return Cs[e]=n>0?n*60+t:n*60-t}class lr extends Date{constructor(...r){super(),r.length>1&&typeof r[r.length-1]=="string"&&(this.timeZone=r.pop()),this.internal=new Date,isNaN(Hs(this.timeZone,this))?this.setTime(NaN):r.length?typeof r[0]=="number"&&(r.length===1||r.length===2&&typeof r[1]!="number")?this.setTime(r[0]):typeof r[0]=="string"?this.setTime(+new Date(r[0])):r[0]instanceof Date?this.setTime(+r[0]):(this.setTime(+new Date(...r)),ny(this),Ku(this)):this.setTime(Date.now())}static tz(r,...n){return n.length?new lr(...n,r):new lr(Date.now(),r)}withTimeZone(r){return new lr(+this,r)}getTimezoneOffset(){return-Hs(this.timeZone,this)}setTime(r){return Date.prototype.setTime.apply(this,arguments),Ku(this),+this}[Symbol.for("constructDateFrom")](r){return new lr(+new Date(r),this.timeZone)}}const fg=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!fg.test(e))return;const r=e.replace(fg,"$1UTC");lr.prototype[r]&&(e.startsWith("get")?lr.prototype[e]=function(){return this.internal[r]()}:(lr.prototype[e]=function(){return Date.prototype[r].apply(this.internal,arguments),aF(this),+this},lr.prototype[r]=function(){return Date.prototype[r].apply(this,arguments),Ku(this),+this}))});function Ku(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function aF(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),ny(e)}function ny(e){const r=Hs(e.timeZone,e),n=new Date(+e);n.setUTCHours(n.getUTCHours()-1);const t=-new Date(+e).getTimezoneOffset(),a=-new Date(+n).getTimezoneOffset(),i=t-a,u=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();i&&u&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+i);const d=t-r;d&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+d);const c=Hs(e.timeZone,e),g=-new Date(+e).getTimezoneOffset()-c,p=c!==r,y=g-d;if(p&&y){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+y);const k=Hs(e.timeZone,e),O=c-k;O&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+O),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+O))}}class Un extends lr{static tz(r,...n){return n.length?new Un(...n,r):new Un(Date.now(),r)}toISOString(){const[r,n,t]=this.tzComponents(),a=`${r}${n}:${t}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[r,n,t,a]=this.internal.toUTCString().split(" ");return`${r==null?void 0:r.slice(0,-1)} ${t} ${n} ${a}`}toTimeString(){const r=this.internal.toUTCString().split(" ")[4],[n,t,a]=this.tzComponents();return`${r} GMT${n}${t}${a} (${sF(this.timeZone,this)})`}toLocaleString(r,n){return Date.prototype.toLocaleString.call(this,r,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(r,n){return Date.prototype.toLocaleDateString.call(this,r,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(r,n){return Date.prototype.toLocaleTimeString.call(this,r,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const r=this.getTimezoneOffset(),n=r>0?"-":"+",t=String(Math.floor(Math.abs(r)/60)).padStart(2,"0"),a=String(Math.abs(r)%60).padStart(2,"0");return[n,t,a]}withTimeZone(r){return new Un(+this,r)}[Symbol.for("constructDateFrom")](r){return new Un(+new Date(r),this.timeZone)}}function sF(e,r){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(r).slice(12)}var ve;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(ve||(ve={}));var hn;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(hn||(hn={}));var Ut;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Ut||(Ut={}));var kt;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(kt||(kt={}));const mg=5,oF=4;function iF(e,r){const n=r.startOfMonth(e),t=n.getDay()>0?n.getDay():7,a=r.addDays(e,-t+1),i=r.addDays(a,mg*7-1);return r.getMonth(e)===r.getMonth(i)?mg:oF}function ty(e,r){const n=r.startOfMonth(e),t=n.getDay();return t===1?n:t===0?r.addDays(n,-1*6):r.addDays(n,-1*(t-1))}function lF(e,r){const n=ty(e,r),t=iF(e,r);return r.addDays(n,t*7-1)}class Br{constructor(r,n){this.Date=Date,this.today=()=>{var t;return(t=this.overrides)!=null&&t.today?this.overrides.today():this.options.timeZone?Un.tz(this.options.timeZone):new this.Date},this.newDate=(t,a,i)=>{var u;return(u=this.overrides)!=null&&u.newDate?this.overrides.newDate(t,a,i):this.options.timeZone?new Un(t,a,i,this.options.timeZone):new Date(t,a,i)},this.addDays=(t,a)=>{var i;return(i=this.overrides)!=null&&i.addDays?this.overrides.addDays(t,a):Zs(t,a)},this.addMonths=(t,a)=>{var i;return(i=this.overrides)!=null&&i.addMonths?this.overrides.addMonths(t,a):Pd(t,a)},this.addWeeks=(t,a)=>{var i;return(i=this.overrides)!=null&&i.addWeeks?this.overrides.addWeeks(t,a):YD(t,a)},this.addYears=(t,a)=>{var i;return(i=this.overrides)!=null&&i.addYears?this.overrides.addYears(t,a):Md(t,a)},this.differenceInCalendarDays=(t,a)=>{var i;return(i=this.overrides)!=null&&i.differenceInCalendarDays?this.overrides.differenceInCalendarDays(t,a):Kr(t,a)},this.differenceInCalendarMonths=(t,a)=>{var i;return(i=this.overrides)!=null&&i.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(t,a):ZD(t,a)},this.eachMonthOfInterval=t=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(t):Oh(t)},this.endOfBroadcastWeek=t=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(t):lF(t,this)},this.endOfISOWeek=t=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(t):JD(t)},this.endOfMonth=t=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(t):Eh(t)},this.endOfWeek=(t,a)=>{var i;return(i=this.overrides)!=null&&i.endOfWeek?this.overrides.endOfWeek(t,a):Dh(t,this.options)},this.endOfYear=t=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(t):Ii(t)},this.format=(t,a,i)=>{var d;const u=(d=this.overrides)!=null&&d.format?this.overrides.format(t,a,this.options):wa(t,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(u):u},this.getISOWeek=t=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(t):qd(t)},this.getMonth=(t,a)=>{var i;return(i=this.overrides)!=null&&i.getMonth?this.overrides.getMonth(t,this.options):Cd(t,this.options)},this.getYear=(t,a)=>{var i;return(i=this.overrides)!=null&&i.getYear?this.overrides.getYear(t,this.options):Ld(t,this.options)},this.getWeek=(t,a)=>{var i;return(i=this.overrides)!=null&&i.getWeek?this.overrides.getWeek(t,this.options):Id(t,this.options)},this.isAfter=(t,a)=>{var i;return(i=this.overrides)!=null&&i.isAfter?this.overrides.isAfter(t,a):Nh(t,a)},this.isBefore=(t,a)=>{var i;return(i=this.overrides)!=null&&i.isBefore?this.overrides.isBefore(t,a):Js(t,a)},this.isDate=t=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(t):Sh(t)},this.isSameDay=(t,a)=>{var i;return(i=this.overrides)!=null&&i.isSameDay?this.overrides.isSameDay(t,a):Bd(t,a)},this.isSameMonth=(t,a)=>{var i;return(i=this.overrides)!=null&&i.isSameMonth?this.overrides.isSameMonth(t,a):cR(t,a)},this.isSameYear=(t,a)=>{var i;return(i=this.overrides)!=null&&i.isSameYear?this.overrides.isSameYear(t,a):qh(t,a)},this.max=t=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(t):zD(t)},this.min=t=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(t):KD(t)},this.setMonth=(t,a)=>{var i;return(i=this.overrides)!=null&&i.setMonth?this.overrides.setMonth(t,a):jh(t,a)},this.setYear=(t,a)=>{var i;return(i=this.overrides)!=null&&i.setYear?this.overrides.setYear(t,a):Ih(t,a)},this.startOfBroadcastWeek=(t,a)=>{var i;return(i=this.overrides)!=null&&i.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(t,this):ty(t,this)},this.startOfDay=t=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(t):Mr(t)},this.startOfISOWeek=t=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(t):ka(t)},this.startOfMonth=t=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(t):ba(t)},this.startOfWeek=(t,a)=>{var i;return(i=this.overrides)!=null&&i.startOfWeek?this.overrides.startOfWeek(t,this.options):Pr(t,this.options)},this.startOfYear=t=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(t):Qs(t)},this.options={locale:Mi,...r},this.overrides=n}getDigitMap(){const{numerals:r="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:r}),t={};for(let a=0;a<10;a++)t[a.toString()]=n.format(a);return t}replaceDigits(r){const n=this.getDigitMap();return r.replace(/\d/g,t=>n[t]||t)}formatNumber(r){return this.replaceDigits(r.toString())}}const hr=new Br;class ry{constructor(r,n,t=hr){this.date=r,this.displayMonth=n,this.outside=!!(n&&!t.isSameMonth(r,n)),this.dateLib=t}isEqualTo(r){return this.dateLib.isSameDay(r.date,this.date)&&this.dateLib.isSameMonth(r.displayMonth,this.displayMonth)}}class uF{constructor(r,n){this.date=r,this.weeks=n}}class dF{constructor(r,n){this.days=n,this.weekNumber=r}}function Ar(e,r,n=!1,t=hr){let{from:a,to:i}=e;const{differenceInCalendarDays:u,isSameDay:d}=t;return a&&i?(u(i,a)<0&&([a,i]=[i,a]),u(r,a)>=(n?1:0)&&u(i,r)>=(n?1:0)):!n&&i?d(i,r):!n&&a?d(a,r):!1}function ay(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Ud(e){return!!(e&&typeof e=="object"&&"from"in e)}function sy(e){return!!(e&&typeof e=="object"&&"after"in e)}function oy(e){return!!(e&&typeof e=="object"&&"before"in e)}function iy(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function ly(e,r){return Array.isArray(e)&&e.every(r.isDate)}function Pt(e,r,n=hr){const t=Array.isArray(r)?r:[r],{isSameDay:a,differenceInCalendarDays:i,isAfter:u}=n;return t.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(e,d);if(ly(d,n))return d.includes(e);if(Ud(d))return Ar(d,e,!1,n);if(iy(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(e.getDay()):d.dayOfWeek===e.getDay();if(ay(d)){const c=i(d.before,e),m=i(d.after,e),g=c>0,p=m<0;return u(d.before,d.after)?p&&g:g||p}return sy(d)?i(e,d.after)>0:oy(d)?i(d.before,e)>0:typeof d=="function"?d(e):!1})}function cF(e,r,n){const{disabled:t,hidden:a,modifiers:i,showOutsideDays:u,broadcastCalendar:d,today:c}=r,{isSameDay:m,isSameMonth:g,startOfMonth:p,isBefore:y,endOfMonth:k,isAfter:O}=n,D=r.startMonth&&p(r.startMonth),_=r.endMonth&&k(r.endMonth),x={[hn.focused]:[],[hn.outside]:[],[hn.disabled]:[],[hn.hidden]:[],[hn.today]:[]},R={};for(const T of e){const{date:M,displayMonth:v}=T,P=!!(v&&!g(M,v)),F=!!(D&&y(M,D)),N=!!(_&&O(M,_)),j=!!(t&&Pt(M,t,n)),U=!!(a&&Pt(M,a,n))||F||N||!d&&!u&&P||d&&u===!1&&P,V=m(M,c??n.today());P&&x.outside.push(T),j&&x.disabled.push(T),U&&x.hidden.push(T),V&&x.today.push(T),i&&Object.keys(i).forEach(G=>{const C=i==null?void 0:i[G];C&&Pt(M,C,n)&&(R[G]?R[G].push(T):R[G]=[T])})}return T=>{const M={[hn.focused]:!1,[hn.disabled]:!1,[hn.hidden]:!1,[hn.outside]:!1,[hn.today]:!1},v={};for(const P in x){const F=x[P];M[P]=F.some(N=>N===T)}for(const P in R)v[P]=R[P].some(F=>F===T);return{...M,...v}}}function fF(e,r,n={}){return Object.entries(e).filter(([,a])=>a===!0).reduce((a,[i])=>(n[i]?a.push(n[i]):r[hn[i]]?a.push(r[hn[i]]):r[Ut[i]]&&a.push(r[Ut[i]]),a),[r[ve.Day]])}function mF(e){return b.createElement("button",{...e})}function gF(e){return b.createElement("span",{...e})}function pF(e){const{size:r=24,orientation:n="left",className:t}=e;return b.createElement("svg",{className:t,width:r,height:r,viewBox:"0 0 24 24"},n==="up"&&b.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&b.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&b.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&b.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function hF(e){const{day:r,modifiers:n,...t}=e;return b.createElement("td",{...t})}function yF(e){const{day:r,modifiers:n,...t}=e,a=b.useRef(null);return b.useEffect(()=>{var i;n.focused&&((i=a.current)==null||i.focus())},[n.focused]),b.createElement("button",{ref:a,...t})}function vF(e){const{options:r,className:n,components:t,classNames:a,...i}=e,u=[a[ve.Dropdown],n].join(" "),d=r==null?void 0:r.find(({value:c})=>c===i.value);return b.createElement("span",{"data-disabled":i.disabled,className:a[ve.DropdownRoot]},b.createElement(t.Select,{className:u,...i},r==null?void 0:r.map(({value:c,label:m,disabled:g})=>b.createElement(t.Option,{key:c,value:c,disabled:g},m))),b.createElement("span",{className:a[ve.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,b.createElement(t.Chevron,{orientation:"down",size:18,className:a[ve.Chevron]})))}function kF(e){return b.createElement("div",{...e})}function bF(e){return b.createElement("div",{...e})}function wF(e){const{calendarMonth:r,displayIndex:n,...t}=e;return b.createElement("div",{...t},e.children)}function _F(e){const{calendarMonth:r,displayIndex:n,...t}=e;return b.createElement("div",{...t})}function TF(e){return b.createElement("table",{...e})}function SF(e){return b.createElement("div",{...e})}const uy=E.createContext(void 0);function Ea(){const e=E.useContext(uy);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function EF(e){const{components:r}=Ea();return b.createElement(r.Dropdown,{...e})}function OF(e){const{onPreviousClick:r,onNextClick:n,previousMonth:t,nextMonth:a,...i}=e,{components:u,classNames:d,labels:{labelPrevious:c,labelNext:m}}=Ea(),g=E.useCallback(y=>{a&&(n==null||n(y))},[a,n]),p=E.useCallback(y=>{t&&(r==null||r(y))},[t,r]);return b.createElement("nav",{...i},b.createElement(u.PreviousMonthButton,{type:"button",className:d[ve.PreviousMonthButton],tabIndex:t?void 0:-1,"aria-disabled":t?void 0:!0,"aria-label":c(t),onClick:p},b.createElement(u.Chevron,{disabled:t?void 0:!0,className:d[ve.Chevron],orientation:"left"})),b.createElement(u.NextMonthButton,{type:"button",className:d[ve.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":m(a),onClick:g},b.createElement(u.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[ve.Chevron]})))}function DF(e){const{components:r}=Ea();return b.createElement(r.Button,{...e})}function xF(e){return b.createElement("option",{...e})}function RF(e){const{components:r}=Ea();return b.createElement(r.Button,{...e})}function FF(e){const{rootRef:r,...n}=e;return b.createElement("div",{...n,ref:r})}function NF(e){return b.createElement("select",{...e})}function AF(e){const{week:r,...n}=e;return b.createElement("tr",{...n})}function PF(e){return b.createElement("th",{...e})}function MF(e){return b.createElement("thead",{"aria-hidden":!0},b.createElement("tr",{...e}))}function BF(e){const{week:r,...n}=e;return b.createElement("th",{...n})}function qF(e){return b.createElement("th",{...e})}function jF(e){return b.createElement("tbody",{...e})}function IF(e){const{components:r}=Ea();return b.createElement(r.Dropdown,{...e})}const CF=Object.freeze(Object.defineProperty({__proto__:null,Button:mF,CaptionLabel:gF,Chevron:pF,Day:hF,DayButton:yF,Dropdown:vF,DropdownNav:kF,Footer:bF,Month:wF,MonthCaption:_F,MonthGrid:TF,Months:SF,MonthsDropdown:EF,Nav:OF,NextMonthButton:DF,Option:xF,PreviousMonthButton:RF,Root:FF,Select:NF,Week:AF,WeekNumber:BF,WeekNumberHeader:qF,Weekday:PF,Weekdays:MF,Weeks:jF,YearsDropdown:IF},Symbol.toStringTag,{value:"Module"}));function LF(e){return{...CF,...e}}function $F(e){const r={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([n,t])=>{n.startsWith("data-")&&(r[n]=t)}),r}function HF(){const e={};for(const r in ve)e[ve[r]]=`rdp-${ve[r]}`;for(const r in hn)e[hn[r]]=`rdp-${hn[r]}`;for(const r in Ut)e[Ut[r]]=`rdp-${Ut[r]}`;for(const r in kt)e[kt[r]]=`rdp-${kt[r]}`;return e}function dy(e,r,n){return(n??new Br(r)).format(e,"LLLL y")}const VF=dy;function UF(e,r,n){return(n??new Br(r)).format(e,"d")}function WF(e,r=hr){return r.format(e,"LLLL")}function GF(e,r=hr){return e<10?r.formatNumber(`0${e.toLocaleString()}`):r.formatNumber(`${e.toLocaleString()}`)}function YF(){return""}function zF(e,r,n){return(n??new Br(r)).format(e,"cccccc")}function cy(e,r=hr){return r.format(e,"yyyy")}const KF=cy,XF=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:dy,formatDay:UF,formatMonthCaption:VF,formatMonthDropdown:WF,formatWeekNumber:GF,formatWeekNumberHeader:YF,formatWeekdayName:zF,formatYearCaption:KF,formatYearDropdown:cy},Symbol.toStringTag,{value:"Module"}));function ZF(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...XF,...e}}function QF(e,r,n,t,a){const{startOfMonth:i,startOfYear:u,endOfYear:d,eachMonthOfInterval:c,getMonth:m}=a;return c({start:u(e),end:d(e)}).map(y=>{const k=t.formatMonthDropdown(y,a),O=m(y),D=r&&y<i(r)||n&&y>i(n)||!1;return{value:O,label:k,disabled:D}})}function JF(e,r={},n={}){let t={...r==null?void 0:r[ve.Day]};return Object.entries(e).filter(([,a])=>a===!0).forEach(([a])=>{t={...t,...n==null?void 0:n[a]}}),t}function eN(e,r,n){const t=e.today(),a=r?e.startOfISOWeek(t):e.startOfWeek(t),i=[];for(let u=0;u<7;u++){const d=e.addDays(a,u);i.push(d)}return i}function nN(e,r,n,t){if(!e||!r)return;const{startOfYear:a,endOfYear:i,addYears:u,getYear:d,isBefore:c,isSameYear:m}=t,g=a(e),p=i(r),y=[];let k=g;for(;c(k,p)||m(k,p);)y.push(k),k=u(k,1);return y.map(O=>{const D=n.formatYearDropdown(O,t);return{value:d(O),label:D,disabled:!1}})}function fy(e,r,n){return(n??new Br(r)).format(e,"LLLL y")}const tN=fy;function rN(e,r,n,t){let a=(t??new Br(n)).format(e,"PPPP");return r!=null&&r.today&&(a=`Today, ${a}`),a}function my(e,r,n,t){let a=(t??new Br(n)).format(e,"PPPP");return r.today&&(a=`Today, ${a}`),r.selected&&(a=`${a}, selected`),a}const aN=my;function sN(){return""}function oN(e){return"Choose the Month"}function iN(e){return"Go to the Next Month"}function lN(e){return"Go to the Previous Month"}function uN(e,r,n){return(n??new Br(r)).format(e,"cccc")}function dN(e,r){return`Week ${e}`}function cN(e){return"Week Number"}function fN(e){return"Choose the Year"}const mN=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:tN,labelDay:aN,labelDayButton:my,labelGrid:fy,labelGridcell:rN,labelMonthDropdown:oN,labelNav:sN,labelNext:iN,labelPrevious:lN,labelWeekNumber:dN,labelWeekNumberHeader:cN,labelWeekday:uN,labelYearDropdown:fN},Symbol.toStringTag,{value:"Module"})),eo=e=>e instanceof HTMLElement?e:null,yu=e=>[...e.querySelectorAll("[data-animated-month]")??[]],gN=e=>eo(e.querySelector("[data-animated-month]")),vu=e=>eo(e.querySelector("[data-animated-caption]")),ku=e=>eo(e.querySelector("[data-animated-weeks]")),pN=e=>eo(e.querySelector("[data-animated-nav]")),hN=e=>eo(e.querySelector("[data-animated-weekdays]"));function yN(e,r,{classNames:n,months:t,focused:a,dateLib:i}){const u=E.useRef(null),d=E.useRef(t),c=E.useRef(!1);E.useLayoutEffect(()=>{const m=d.current;if(d.current=t,!r||!e.current||!(e.current instanceof HTMLElement)||t.length===0||m.length===0||t.length!==m.length)return;const g=i.isSameMonth(t[0].date,m[0].date),p=i.isAfter(t[0].date,m[0].date),y=p?n[kt.caption_after_enter]:n[kt.caption_before_enter],k=p?n[kt.weeks_after_enter]:n[kt.weeks_before_enter],O=u.current,D=e.current.cloneNode(!0);if(D instanceof HTMLElement?(yu(D).forEach(T=>{if(!(T instanceof HTMLElement))return;const M=gN(T);M&&T.contains(M)&&T.removeChild(M);const v=vu(T);v&&v.classList.remove(y);const P=ku(T);P&&P.classList.remove(k)}),u.current=D):u.current=null,c.current||g||a)return;const _=O instanceof HTMLElement?yu(O):[],x=yu(e.current);if(x&&x.every(R=>R instanceof HTMLElement)&&_&&_.every(R=>R instanceof HTMLElement)){c.current=!0,e.current.style.isolation="isolate";const R=pN(e.current);R&&(R.style.zIndex="1"),x.forEach((T,M)=>{const v=_[M];if(!v)return;T.style.position="relative",T.style.overflow="hidden";const P=vu(T);P&&P.classList.add(y);const F=ku(T);F&&F.classList.add(k);const N=()=>{c.current=!1,e.current&&(e.current.style.isolation=""),R&&(R.style.zIndex=""),P&&P.classList.remove(y),F&&F.classList.remove(k),T.style.position="",T.style.overflow="",T.contains(v)&&T.removeChild(v)};v.style.pointerEvents="none",v.style.position="absolute",v.style.overflow="hidden",v.setAttribute("aria-hidden","true");const j=hN(v);j&&(j.style.opacity="0");const U=vu(v);U&&(U.classList.add(p?n[kt.caption_before_exit]:n[kt.caption_after_exit]),U.addEventListener("animationend",N));const V=ku(v);V&&V.classList.add(p?n[kt.weeks_before_exit]:n[kt.weeks_after_exit]),T.insertBefore(v,T.firstChild)})}})}function vN(e,r,n,t){const a=e[0],i=e[e.length-1],{ISOWeek:u,fixedWeeks:d,broadcastCalendar:c}=n??{},{addDays:m,differenceInCalendarDays:g,differenceInCalendarMonths:p,endOfBroadcastWeek:y,endOfISOWeek:k,endOfMonth:O,endOfWeek:D,isAfter:_,startOfBroadcastWeek:x,startOfISOWeek:R,startOfWeek:T}=t,M=c?x(a,t):u?R(a):T(a),v=c?y(i):u?k(O(i)):D(O(i)),P=g(v,M),F=p(i,a)+1,N=[];for(let V=0;V<=P;V++){const G=m(M,V);if(r&&_(G,r))break;N.push(G)}const U=(c?35:42)*F;if(d&&N.length<U){const V=U-N.length;for(let G=0;G<V;G++){const C=m(N[N.length-1],1);N.push(C)}}return N}function kN(e){const r=[];return e.reduce((n,t)=>{const a=t.weeks.reduce((i,u)=>[...i,...u.days],r);return[...n,...a]},r)}function bN(e,r,n,t){const{numberOfMonths:a=1}=n,i=[];for(let u=0;u<a;u++){const d=t.addMonths(e,u);if(r&&d>r)break;i.push(d)}return i}function gg(e,r){const{month:n,defaultMonth:t,today:a=r.today(),numberOfMonths:i=1,endMonth:u,startMonth:d}=e;let c=n||t||a;const{differenceInCalendarMonths:m,addMonths:g,startOfMonth:p}=r;if(u&&m(u,c)<0){const y=-1*(i-1);c=g(u,y)}return d&&m(c,d)<0&&(c=d),p(c)}function wN(e,r,n,t){const{addDays:a,endOfBroadcastWeek:i,endOfISOWeek:u,endOfMonth:d,endOfWeek:c,getISOWeek:m,getWeek:g,startOfBroadcastWeek:p,startOfISOWeek:y,startOfWeek:k}=t,O=e.reduce((D,_)=>{const x=n.broadcastCalendar?p(_,t):n.ISOWeek?y(_):k(_),R=n.broadcastCalendar?i(_):n.ISOWeek?u(d(_)):c(d(_)),T=r.filter(F=>F>=x&&F<=R),M=n.broadcastCalendar?35:42;if(n.fixedWeeks&&T.length<M){const F=r.filter(N=>{const j=M-T.length;return N>R&&N<=a(R,j)});T.push(...F)}const v=T.reduce((F,N)=>{const j=n.ISOWeek?m(N):g(N),U=F.find(G=>G.weekNumber===j),V=new ry(N,_,t);return U?U.days.push(V):F.push(new dF(j,[V])),F},[]),P=new uF(_,v);return D.push(P),D},[]);return n.reverseMonths?O.reverse():O}function _N(e,r){let{startMonth:n,endMonth:t}=e;const{startOfYear:a,startOfDay:i,startOfMonth:u,endOfMonth:d,addYears:c,endOfYear:m,newDate:g,today:p}=r,{fromYear:y,toYear:k,fromMonth:O,toMonth:D}=e;!n&&O&&(n=O),!n&&y&&(n=r.newDate(y,0,1)),!t&&D&&(t=D),!t&&k&&(t=g(k,11,31));const _=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return n?n=u(n):y?n=g(y,0,1):!n&&_&&(n=a(c(e.today??p(),-100))),t?t=d(t):k?t=g(k,11,31):!t&&_&&(t=m(e.today??p())),[n&&i(n),t&&i(t)]}function TN(e,r,n,t){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:i=1}=n,{startOfMonth:u,addMonths:d,differenceInCalendarMonths:c}=t,m=a?i:1,g=u(e);if(!r)return d(g,m);if(!(c(r,e)<i))return d(g,m)}function SN(e,r,n,t){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:i}=n,{startOfMonth:u,addMonths:d,differenceInCalendarMonths:c}=t,m=a?i??1:1,g=u(e);if(!r)return d(g,-m);if(!(c(g,r)<=0))return d(g,-m)}function EN(e){const r=[];return e.reduce((n,t)=>[...n,...t.weeks],r)}function Hi(e,r){const[n,t]=E.useState(e);return[r===void 0?n:r,t]}function ON(e,r){const[n,t]=_N(e,r),{startOfMonth:a,endOfMonth:i}=r,u=gg(e,r),[d,c]=Hi(u,e.month?u:void 0);E.useEffect(()=>{const P=gg(e,r);c(P)},[e.timeZone]);const m=bN(d,t,e,r),g=vN(m,e.endMonth?i(e.endMonth):void 0,e,r),p=wN(m,g,e,r),y=EN(p),k=kN(p),O=SN(d,n,e,r),D=TN(d,t,e,r),{disableNavigation:_,onMonthChange:x}=e,R=P=>y.some(F=>F.days.some(N=>N.isEqualTo(P))),T=P=>{if(_)return;let F=a(P);n&&F<a(n)&&(F=a(n)),t&&F>a(t)&&(F=a(t)),c(F),x==null||x(F)};return{months:p,weeks:y,days:k,navStart:n,navEnd:t,previousMonth:O,nextMonth:D,goToMonth:T,goToDay:P=>{R(P)||T(P.date)}}}var tr;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(tr||(tr={}));function pg(e){return!e[hn.disabled]&&!e[hn.hidden]&&!e[hn.outside]}function DN(e,r,n,t){let a,i=-1;for(const u of e){const d=r(u);pg(d)&&(d[hn.focused]&&i<tr.FocusedModifier?(a=u,i=tr.FocusedModifier):t!=null&&t.isEqualTo(u)&&i<tr.LastFocused?(a=u,i=tr.LastFocused):n(u.date)&&i<tr.Selected?(a=u,i=tr.Selected):d[hn.today]&&i<tr.Today&&(a=u,i=tr.Today))}return a||(a=e.find(u=>pg(r(u)))),a}function xN(e,r,n,t,a,i,u){const{ISOWeek:d,broadcastCalendar:c}=i,{addDays:m,addMonths:g,addWeeks:p,addYears:y,endOfBroadcastWeek:k,endOfISOWeek:O,endOfWeek:D,max:_,min:x,startOfBroadcastWeek:R,startOfISOWeek:T,startOfWeek:M}=u;let P={day:m,week:p,month:g,year:y,startOfWeek:F=>c?R(F,u):d?T(F):M(F),endOfWeek:F=>c?k(F):d?O(F):D(F)}[e](n,r==="after"?1:-1);return r==="before"&&t?P=_([t,P]):r==="after"&&a&&(P=x([a,P])),P}function gy(e,r,n,t,a,i,u,d=0){if(d>365)return;const c=xN(e,r,n.date,t,a,i,u),m=!!(i.disabled&&Pt(c,i.disabled,u)),g=!!(i.hidden&&Pt(c,i.hidden,u)),p=c,y=new ry(c,p,u);return!m&&!g?y:gy(e,r,y,t,a,i,u,d+1)}function RN(e,r,n,t,a){const{autoFocus:i}=e,[u,d]=E.useState(),c=DN(r.days,n,t||(()=>!1),u),[m,g]=E.useState(i?c:void 0);return{isFocusTarget:D=>!!(c!=null&&c.isEqualTo(D)),setFocused:g,focused:m,blur:()=>{d(m),g(void 0)},moveFocus:(D,_)=>{if(!m)return;const x=gy(D,_,m,r.navStart,r.navEnd,e,a);x&&(r.goToDay(x),g(x))}}}function FN(e,r){const{selected:n,required:t,onSelect:a}=e,[i,u]=Hi(n,a?n:void 0),d=a?n:i,{isSameDay:c}=r,m=k=>(d==null?void 0:d.some(O=>c(O,k)))??!1,{min:g,max:p}=e;return{selected:d,select:(k,O,D)=>{let _=[...d??[]];if(m(k)){if((d==null?void 0:d.length)===g||t&&(d==null?void 0:d.length)===1)return;_=d==null?void 0:d.filter(x=>!c(x,k))}else(d==null?void 0:d.length)===p?_=[k]:_=[..._,k];return a||u(_),a==null||a(_,k,O,D),_},isSelected:m}}function NN(e,r,n=0,t=0,a=!1,i=hr){const{from:u,to:d}=r||{},{isSameDay:c,isAfter:m,isBefore:g}=i;let p;if(!u&&!d)p={from:e,to:n>0?void 0:e};else if(u&&!d)c(u,e)?a?p={from:u,to:void 0}:p=void 0:g(e,u)?p={from:e,to:u}:p={from:u,to:e};else if(u&&d)if(c(u,e)&&c(d,e))a?p={from:u,to:d}:p=void 0;else if(c(u,e))p={from:u,to:n>0?void 0:e};else if(c(d,e))p={from:e,to:n>0?void 0:e};else if(g(e,u))p={from:e,to:d};else if(m(e,u))p={from:u,to:e};else if(m(e,d))p={from:u,to:e};else throw new Error("Invalid range");if(p!=null&&p.from&&(p!=null&&p.to)){const y=i.differenceInCalendarDays(p.to,p.from);t>0&&y>t?p={from:e,to:void 0}:n>1&&y<n&&(p={from:e,to:void 0})}return p}function AN(e,r,n=hr){const t=Array.isArray(r)?r:[r];let a=e.from;const i=n.differenceInCalendarDays(e.to,e.from),u=Math.min(i,6);for(let d=0;d<=u;d++){if(t.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function hg(e,r,n=hr){return Ar(e,r.from,!1,n)||Ar(e,r.to,!1,n)||Ar(r,e.from,!1,n)||Ar(r,e.to,!1,n)}function PN(e,r,n=hr){const t=Array.isArray(r)?r:[r];if(t.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?Ar(e,d,!1,n):ly(d,n)?d.some(c=>Ar(e,c,!1,n)):Ud(d)?d.from&&d.to?hg(e,{from:d.from,to:d.to},n):!1:iy(d)?AN(e,d.dayOfWeek,n):ay(d)?n.isAfter(d.before,d.after)?hg(e,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):Pt(e.from,d,n)||Pt(e.to,d,n):sy(d)||oy(d)?Pt(e.from,d,n)||Pt(e.to,d,n):!1))return!0;const u=t.filter(d=>typeof d=="function");if(u.length){let d=e.from;const c=n.differenceInCalendarDays(e.to,e.from);for(let m=0;m<=c;m++){if(u.some(g=>g(d)))return!0;d=n.addDays(d,1)}}return!1}function MN(e,r){const{disabled:n,excludeDisabled:t,selected:a,required:i,onSelect:u}=e,[d,c]=Hi(a,u?a:void 0),m=u?a:d;return{selected:m,select:(y,k,O)=>{const{min:D,max:_}=e,x=y?NN(y,m,D,_,i,r):void 0;return t&&n&&(x!=null&&x.from)&&x.to&&PN({from:x.from,to:x.to},n,r)&&(x.from=y,x.to=void 0),u||c(x),u==null||u(x,y,k,O),x},isSelected:y=>m&&Ar(m,y,!1,r)}}function BN(e,r){const{selected:n,required:t,onSelect:a}=e,[i,u]=Hi(n,a?n:void 0),d=a?n:i,{isSameDay:c}=r;return{selected:d,select:(p,y,k)=>{let O=p;return!t&&d&&d&&c(p,d)&&(O=void 0),a||u(O),a==null||a(O,p,y,k),O},isSelected:p=>d?c(d,p):!1}}function qN(e,r){const n=BN(e,r),t=FN(e,r),a=MN(e,r);switch(e.mode){case"single":return n;case"multiple":return t;case"range":return a;default:return}}function jN(e){var na;let r=e;r.timeZone&&(r={...e},r.today&&(r.today=new Un(r.today,r.timeZone)),r.month&&(r.month=new Un(r.month,r.timeZone)),r.defaultMonth&&(r.defaultMonth=new Un(r.defaultMonth,r.timeZone)),r.startMonth&&(r.startMonth=new Un(r.startMonth,r.timeZone)),r.endMonth&&(r.endMonth=new Un(r.endMonth,r.timeZone)),r.mode==="single"&&r.selected?r.selected=new Un(r.selected,r.timeZone):r.mode==="multiple"&&r.selected?r.selected=(na=r.selected)==null?void 0:na.map(Re=>new Un(Re,r.timeZone)):r.mode==="range"&&r.selected&&(r.selected={from:r.selected.from?new Un(r.selected.from,r.timeZone):void 0,to:r.selected.to?new Un(r.selected.to,r.timeZone):void 0}));const{components:n,formatters:t,labels:a,dateLib:i,locale:u,classNames:d}=E.useMemo(()=>{const Re={...Mi,...r.locale};return{dateLib:new Br({locale:Re,weekStartsOn:r.broadcastCalendar?1:r.weekStartsOn,firstWeekContainsDate:r.firstWeekContainsDate,useAdditionalWeekYearTokens:r.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:r.useAdditionalDayOfYearTokens,timeZone:r.timeZone,numerals:r.numerals},r.dateLib),components:LF(r.components),formatters:ZF(r.formatters),labels:{...mN,...r.labels},locale:Re,classNames:{...HF(),...r.classNames}}},[r.locale,r.broadcastCalendar,r.weekStartsOn,r.firstWeekContainsDate,r.useAdditionalWeekYearTokens,r.useAdditionalDayOfYearTokens,r.timeZone,r.numerals,r.dateLib,r.components,r.formatters,r.labels,r.classNames]),{captionLayout:c,mode:m,navLayout:g,numberOfMonths:p=1,onDayBlur:y,onDayClick:k,onDayFocus:O,onDayKeyDown:D,onDayMouseEnter:_,onDayMouseLeave:x,onNextClick:R,onPrevClick:T,showWeekNumber:M,styles:v}=r,{formatCaption:P,formatDay:F,formatMonthDropdown:N,formatWeekNumber:j,formatWeekNumberHeader:U,formatWeekdayName:V,formatYearDropdown:G}=t,C=ON(r,i),{days:W,months:Y,navStart:$,navEnd:J,previousMonth:z,nextMonth:re,goToMonth:se}=C,de=cF(W,r,i),{isSelected:Te,select:Ee,selected:Ge}=qN(r,i)??{},{blur:me,focused:he,isFocusTarget:Le,moveFocus:Ve,setFocused:en}=RN(r,C,de,Te??(()=>!1),i),{labelDayButton:nn,labelGridcell:on,labelGrid:mn,labelMonthDropdown:Rn,labelNav:tn,labelPrevious:Dn,labelNext:dt,labelWeekday:wn,labelWeekNumber:ct,labelWeekNumberHeader:nt,labelYearDropdown:B}=a,H=E.useMemo(()=>eN(i,r.ISOWeek),[i,r.ISOWeek]),X=m!==void 0||k!==void 0,le=E.useCallback(()=>{z&&(se(z),T==null||T(z))},[z,se,T]),oe=E.useCallback(()=>{re&&(se(re),R==null||R(re))},[se,re,R]),ae=E.useCallback((Re,an)=>Ke=>{Ke.preventDefault(),Ke.stopPropagation(),en(Re),Ee==null||Ee(Re.date,an,Ke),k==null||k(Re.date,an,Ke)},[Ee,k,en]),ye=E.useCallback((Re,an)=>Ke=>{en(Re),O==null||O(Re.date,an,Ke)},[O,en]),Ae=E.useCallback((Re,an)=>Ke=>{me(),y==null||y(Re.date,an,Ke)},[me,y]),qe=E.useCallback((Re,an)=>Ke=>{const It={ArrowLeft:["day",r.dir==="rtl"?"after":"before"],ArrowRight:["day",r.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[Ke.shiftKey?"year":"month","before"],PageDown:[Ke.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(It[Ke.key]){Ke.preventDefault(),Ke.stopPropagation();const[ft,Da]=It[Ke.key];Ve(ft,Da)}D==null||D(Re.date,an,Ke)},[Ve,D,r.dir]),An=E.useCallback((Re,an)=>Ke=>{_==null||_(Re.date,an,Ke)},[_]),Qt=E.useCallback((Re,an)=>Ke=>{x==null||x(Re.date,an,Ke)},[x]),tt=E.useCallback(Re=>an=>{const Ke=Number(an.target.value),It=i.setMonth(i.startOfMonth(Re),Ke);se(It)},[i,se]),Qr=E.useCallback(Re=>an=>{const Ke=Number(an.target.value),It=i.setYear(i.startOfMonth(Re),Ke);se(It)},[i,se]),{className:vr,style:kr}=E.useMemo(()=>({className:[d[ve.Root],r.className].filter(Boolean).join(" "),style:{...v==null?void 0:v[ve.Root],...r.style}}),[d,r.className,r.style,v]),Jr=$F(r),br=E.useRef(null);yN(br,!!r.animate,{classNames:d,months:Y,focused:he,dateLib:i});const ea={dayPickerProps:r,selected:Ge,select:Ee,isSelected:Te,months:Y,nextMonth:re,previousMonth:z,goToMonth:se,getModifiers:de,components:n,classNames:d,styles:v,labels:a,formatters:t};return b.createElement(uy.Provider,{value:ea},b.createElement(n.Root,{rootRef:r.animate?br:void 0,className:vr,style:kr,dir:r.dir,id:r.id,lang:r.lang,nonce:r.nonce,title:r.title,role:r.role,"aria-label":r["aria-label"],...Jr},b.createElement(n.Months,{className:d[ve.Months],style:v==null?void 0:v[ve.Months]},!r.hideNavigation&&!g&&b.createElement(n.Nav,{"data-animated-nav":r.animate?"true":void 0,className:d[ve.Nav],style:v==null?void 0:v[ve.Nav],"aria-label":tn(),onPreviousClick:le,onNextClick:oe,previousMonth:z,nextMonth:re}),Y.map((Re,an)=>{const Ke=QF(Re.date,$,J,t,i),It=nN($,J,t,i);return b.createElement(n.Month,{"data-animated-month":r.animate?"true":void 0,className:d[ve.Month],style:v==null?void 0:v[ve.Month],key:an,displayIndex:an,calendarMonth:Re},g==="around"&&!r.hideNavigation&&an===0&&b.createElement(n.PreviousMonthButton,{type:"button",className:d[ve.PreviousMonthButton],tabIndex:z?void 0:-1,"aria-disabled":z?void 0:!0,"aria-label":Dn(z),onClick:le,"data-animated-button":r.animate?"true":void 0},b.createElement(n.Chevron,{disabled:z?void 0:!0,className:d[ve.Chevron],orientation:r.dir==="rtl"?"right":"left"})),b.createElement(n.MonthCaption,{"data-animated-caption":r.animate?"true":void 0,className:d[ve.MonthCaption],style:v==null?void 0:v[ve.MonthCaption],calendarMonth:Re,displayIndex:an},c!=null&&c.startsWith("dropdown")?b.createElement(n.DropdownNav,{className:d[ve.Dropdowns],style:v==null?void 0:v[ve.Dropdowns]},c==="dropdown"||c==="dropdown-months"?b.createElement(n.MonthsDropdown,{className:d[ve.MonthsDropdown],"aria-label":Rn(),classNames:d,components:n,disabled:!!r.disableNavigation,onChange:tt(Re.date),options:Ke,style:v==null?void 0:v[ve.Dropdown],value:i.getMonth(Re.date)}):b.createElement("span",null,N(Re.date,i)),c==="dropdown"||c==="dropdown-years"?b.createElement(n.YearsDropdown,{className:d[ve.YearsDropdown],"aria-label":B(i.options),classNames:d,components:n,disabled:!!r.disableNavigation,onChange:Qr(Re.date),options:It,style:v==null?void 0:v[ve.Dropdown],value:i.getYear(Re.date)}):b.createElement("span",null,G(Re.date,i)),b.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},P(Re.date,i.options,i))):b.createElement(n.CaptionLabel,{className:d[ve.CaptionLabel],role:"status","aria-live":"polite"},P(Re.date,i.options,i))),g==="around"&&!r.hideNavigation&&an===p-1&&b.createElement(n.NextMonthButton,{type:"button",className:d[ve.NextMonthButton],tabIndex:re?void 0:-1,"aria-disabled":re?void 0:!0,"aria-label":dt(re),onClick:oe,"data-animated-button":r.animate?"true":void 0},b.createElement(n.Chevron,{disabled:re?void 0:!0,className:d[ve.Chevron],orientation:r.dir==="rtl"?"left":"right"})),an===p-1&&g==="after"&&!r.hideNavigation&&b.createElement(n.Nav,{"data-animated-nav":r.animate?"true":void 0,className:d[ve.Nav],style:v==null?void 0:v[ve.Nav],"aria-label":tn(),onPreviousClick:le,onNextClick:oe,previousMonth:z,nextMonth:re}),b.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":m==="multiple"||m==="range","aria-label":mn(Re.date,i.options,i)||void 0,className:d[ve.MonthGrid],style:v==null?void 0:v[ve.MonthGrid]},!r.hideWeekdays&&b.createElement(n.Weekdays,{"data-animated-weekdays":r.animate?"true":void 0,className:d[ve.Weekdays],style:v==null?void 0:v[ve.Weekdays]},M&&b.createElement(n.WeekNumberHeader,{"aria-label":nt(i.options),className:d[ve.WeekNumberHeader],style:v==null?void 0:v[ve.WeekNumberHeader],scope:"col"},U()),H.map((ft,Da)=>b.createElement(n.Weekday,{"aria-label":wn(ft,i.options,i),className:d[ve.Weekday],key:Da,style:v==null?void 0:v[ve.Weekday],scope:"col"},V(ft,i.options,i)))),b.createElement(n.Weeks,{"data-animated-weeks":r.animate?"true":void 0,className:d[ve.Weeks],style:v==null?void 0:v[ve.Weeks]},Re.weeks.map((ft,Da)=>b.createElement(n.Week,{className:d[ve.Week],key:ft.weekNumber,style:v==null?void 0:v[ve.Week],week:ft},M&&b.createElement(n.WeekNumber,{week:ft,style:v==null?void 0:v[ve.WeekNumber],"aria-label":ct(ft.weekNumber,{locale:u}),className:d[ve.WeekNumber],scope:"row",role:"rowheader"},j(ft.weekNumber,i)),ft.days.map(Pn=>{const{date:Tt}=Pn,$e=de(Pn);if($e[hn.focused]=!$e.hidden&&!!(he!=null&&he.isEqualTo(Pn)),$e[Ut.selected]=(Te==null?void 0:Te(Tt))||$e.selected,Ud(Ge)){const{from:ta,to:gs}=Ge;$e[Ut.range_start]=!!(ta&&gs&&i.isSameDay(Tt,ta)),$e[Ut.range_end]=!!(ta&&gs&&i.isSameDay(Tt,gs)),$e[Ut.range_middle]=Ar(Ge,Tt,!0,i)}const Qi=JF($e,v,r.modifiersStyles),Ji=fF($e,d,r.modifiersClassNames),el=!X&&!$e.hidden?on(Tt,$e,i.options,i):void 0;return b.createElement(n.Day,{key:`${i.format(Tt,"yyyy-MM-dd")}_${i.format(Pn.displayMonth,"yyyy-MM")}`,day:Pn,modifiers:$e,className:Ji.join(" "),style:Qi,role:"gridcell","aria-selected":$e.selected||void 0,"aria-label":el,"data-day":i.format(Tt,"yyyy-MM-dd"),"data-month":Pn.outside?i.format(Tt,"yyyy-MM"):void 0,"data-selected":$e.selected||void 0,"data-disabled":$e.disabled||void 0,"data-hidden":$e.hidden||void 0,"data-outside":Pn.outside||void 0,"data-focused":$e.focused||void 0,"data-today":$e.today||void 0},!$e.hidden&&X?b.createElement(n.DayButton,{className:d[ve.DayButton],style:v==null?void 0:v[ve.DayButton],type:"button",day:Pn,modifiers:$e,disabled:$e.disabled||void 0,tabIndex:Le(Pn)?0:-1,"aria-label":nn(Tt,$e,i.options,i),onClick:ae(Pn,$e),onBlur:Ae(Pn,$e),onFocus:ye(Pn,$e),onKeyDown:qe(Pn,$e),onMouseEnter:An(Pn,$e),onMouseLeave:Qt(Pn,$e)},F(Tt,i.options,i)):!$e.hidden&&F(Pn.date,i.options,i))}))))))})),r.footer&&b.createElement(n.Footer,{className:d[ve.Footer],style:v==null?void 0:v[ve.Footer],role:"status","aria-live":"polite"},r.footer)))}var IN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const py=E.forwardRef((e,r)=>{var{as:n="div",className:t,above:a,below:i,variant:u,asChild:d}=e,c=IN(e,["as","className","above","below","variant","asChild"]);const{cn:m}=ke(),g=u==="show"?a:i,p=u==="show"?i:a,y=d?os:n;return b.createElement(y,Object.assign({},c,{ref:r,className:m("navds-responsive",t,{[`navds-responsive__above--${g}`]:g,[`navds-responsive__below--${p}`]:p})}))}),CN=E.forwardRef((e,r)=>b.createElement(py,Object.assign({},e,{ref:r,variant:"hide"}))),Wd=E.forwardRef((e,r)=>b.createElement(py,Object.assign({},e,{ref:r,variant:"show"})));function Wt(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function LN({day:e,fromDate:r,toDate:n}){const t=n&&Kr(e,Mr(n))>0,a=r&&Kr(Mr(r),e)>0;return t||a||!1}const hy="dd.MM.yyyy",$N="MMMM yyyy",yy=[hy,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...yy];const bu=(e,r,n,t,a)=>{let i;const u=yy;if(a){for(const d of u)if(i=Xa(e,d,r,{locale:n}),Wt(i)&&!wu(e,r,n,u))return i;for(const d of[...u.map(c=>c.replace("yyyy","yy"))])if(i=Xa(e,d,r,{locale:n}),Wt(i)&&wu(e,r,n,u)){const c=HN(e,d,r,n);return Wt(new Date(c))?new Date(c):new Date("Invalid date")}return new Date("Invalid date")}for(const d of u)if(i=Xa(e,d,r,{locale:n}),Wt(i)&&!wu(e,r,n,u))return i;return new Date("Invalid date")};function wu(e,r,n,t){let a;const i=t.map(u=>u.replace("yyyy","yy"));for(const u of i)if(a=Xa(e,u,r,{locale:n}),Wt(a))return!0;return!1}function HN(e,r,n,t){const a=Xa(yg(e,"19"),r.replace("yy","yyyy"),n,{locale:t}),i=Xa(yg(e,"20"),r.replace("yy","yyyy"),n,{locale:t});return Wt(a)&&Wt(i)?Js(a,gR(new Date,{years:80}))?i:a:new Date("Invalid date")}function yg(e,r){const n=e.slice(-2);return`${e.slice(0,e.length-2)}${r}${n}`}const Fs=(e,r,n,t)=>wa(e,t??hy,{locale:r}),VN=({month:e,start:r,end:n})=>{if(!e)return;let t=e;return r&&Js(t,r)&&(t=r),n&&Nh(t,n)&&(t=n),ba(t)};function UN(e,r,n,t){return Oh({start:Qs(e),end:Ii(e)}).map(u=>{const d=wa(u,"LLLL",{locale:t}),c=Cd(u),m=r&&u<ba(r)||n&&u>ba(n)||!1;return{value:c,label:d,disabled:m}})}function WN(e,r,n){if(!e||!r)return;const t=Qs(e),a=Ii(r),i=[];let u=t;for(;Js(u,a)||qh(u,a);)i.push(u),u=Md(u,1);return i.map(d=>{const c=wa(d,"yyyy",{locale:n});return{value:Ld(d),label:c,disabled:!1}})}function GN({captionLayout:e,startMonth:r,endMonth:n,today:t}){const a=e==="dropdown",i=t??new Date;return r?r=ba(r):!r&&a&&(r=Qs(Md(i,-100))),n?n=Eh(n):!n&&a&&(n=Ii(i)),[r&&Mr(r),n&&Mr(n)]}var YN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const zN=e=>{var{day:r,modifiers:n,locale:t,children:a}=e,i=YN(e,["day","modifiers","locale","children"]);const{cn:u}=ke(),d=E.useRef(null);return E.useEffect(()=>{var c;n.focused&&((c=d.current)===null||c===void 0||c.focus())},[n.focused]),n.hidden?b.createElement(b.Fragment,null):b.createElement("button",Object.assign({},i,{ref:d,"aria-hidden":r.outside,"aria-pressed":!!n.selected,"aria-label":wa(r.date,"cccc d",{locale:t}),"data-pressed":n.selected,"data-today":n.today||void 0,className:u(i.className,{"rdp-day_disabled":n.disabled,"rdp-day_selected":n.selected,"rdp-day_range_start":n.range_start,"rdp-day_range_middle":n.range_middle,"rdp-day_range_end":n.range_end,"rdp-day_today":n.today,"rdp-day_outside":n.outside,"rdp-day__weekend":n.weekend})}),a)};var KN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const vg=E.forwardRef((e,r)=>{const{inputProps:n,errorId:t,showErrorMsg:a,hasError:i,size:u,inputDescriptionId:d,readOnly:c}=Sa(e,"select"),{children:m,label:g,className:p,description:y,htmlSize:k,hideLabel:O=!1,style:D}=e,_=KN(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:x}=ke(),R={onMouseDown:T=>{c&&(T.preventDefault(),T.target.focus())},onKeyDown:T=>{c&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(T.key)&&T.preventDefault()}};return b.createElement("div",{className:x(p,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":c,"navds-select--error":i,"navds-select--readonly":c})},b.createElement(jn,{htmlFor:n.id,size:u,className:x("navds-form-field__label",{"navds-sr-only":O})},c&&b.createElement(Lh,null),g),!!y&&b.createElement(fn,{className:x("navds-form-field__description",{"navds-sr-only":O}),id:d,size:u,as:"div"},y),b.createElement("div",{className:x("navds-select__container"),style:D},b.createElement("select",Object.assign({},In(_,["error","errorId","size","readOnly"]),n,R,{ref:r,className:x("navds-select__input","navds-body-short",`navds-body-short--${u??"medium"}`),size:k}),m),b.createElement(Xp,{className:x("navds-select__chevron"),"aria-hidden":!0})),b.createElement("div",{className:x("navds-form-field__error"),id:t,"aria-relevant":"additions removals","aria-live":"polite"},a&&b.createElement(ls,{size:u,showIcon:!0},e.error)))}),vy=({week:{weekNumber:e,days:r},onWeekNumberClick:n,className:t,style:a,showOnDesktop:i})=>{const u=Li().translate,{cn:d}=ke(),{getModifiers:c}=Ea(),m=E.useMemo(()=>r.filter(p=>{const y=c(p);return!(y.hidden||y.outside||y.disabled)}).length===0,[r,c]),g=i?Wd:CN;return!n||m?b.createElement(g,{above:"sm",asChild:!0},b.createElement("td",{className:"rdp-cell"},b.createElement(Ni,{as:"span",textColor:"subtle",className:t,style:a,"aria-label":u("weekNumber",{week:e})},e))):b.createElement(g,{above:"sm",asChild:!0},b.createElement("td",{className:d("rdp-cell",{"navds-date__week-wrapper":!i})},b.createElement(Yt,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":u("selectWeekNumber",{week:e}),style:a,className:d("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{n(e,r.map(p=>p.date))},icon:b.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},XN=({onWeekNumberClick:e,weeks:r})=>{const n=Li().translate,{cn:t}=ke(),a=fr();return e?b.createElement(Wd,{below:"sm",asChild:!0},b.createElement("table",{className:"rdp-table",role:"grid"},b.createElement("tbody",{className:"rdp-tbody"},b.createElement("tr",{className:t("rdp-row navds-date__week-row")},b.createElement(Ni,{as:"th",weight:"semibold",className:t("rdp-cell navds-date__week-cell")},b.createElement("span",{className:t("navds-date__week-wrapper"),id:a},n("week"))),r==null?void 0:r.map(i=>b.createElement(vy,{key:i.weekNumber,week:i,onWeekNumberClick:e,showOnDesktop:!1,className:t("navds-date__week-wrapper")})))))):null};var ZN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const QN=e=>{var{children:r,calendarMonth:n,locale:t,onWeekNumberClick:a}=e,i=ZN(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:u,goToMonth:d,previousMonth:c,nextMonth:m}=Ea(),{captionLayout:g}=u,{cn:p}=ke(),y=Li().translate,k=E.useCallback((T,M)=>{const v=Number(M.target.value),P=jh(ba(T),v);d(P)},[d]),O=E.useCallback((T,M)=>{const v=Number(M.target.value),P=Ih(ba(T),v);d(P)},[d]),[D,_]=GN({captionLayout:g==="dropdown"?"dropdown":"label",startMonth:u.startMonth,endMonth:u.endMonth,today:u.today}),x=UN(n.date,D,_,t),R=WN(D,_,t);return b.createElement("div",Object.assign({},In(i,["displayIndex"])),b.createElement("div",{className:p("navds-date__caption")},(g==null?void 0:g.startsWith("dropdown"))&&b.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:p("navds-sr-only")},wa(n.date,"LLLL y",{locale:t})),b.createElement(Yt,{variant:"tertiary-neutral",disabled:!c,onClick:()=>c&&d(c),icon:b.createElement(vS,{title:y("goToPreviousMonth")}),className:p("navds-date__caption-button"),type:"button"}),g!=null&&g.startsWith("dropdown")?b.createElement("div",{className:p("navds-date__caption")},b.createElement(vg,{label:y("month"),hideLabel:!0,className:p("navds-date__caption__month"),onChange:T=>k(n.date,T),value:Cd(n.date)},x==null?void 0:x.map(({value:T,label:M,disabled:v})=>b.createElement("option",{key:T,value:T,disabled:v},M))),b.createElement(vg,{label:y("year"),hideLabel:!0,className:p("navds-date__caption__year"),onChange:T=>O(n.date,T),value:Ld(n.date)},R==null?void 0:R.map(({value:T,label:M,disabled:v})=>b.createElement("option",{key:T,value:T,disabled:v},M)))):b.createElement(fn,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:p("navds-date__caption-label")},wa(n.date,"LLLL y",{locale:t})),b.createElement(Yt,{variant:"tertiary-neutral",icon:b.createElement(bS,{title:y("goToNextMonth")}),onClick:()=>m&&d(m),disabled:!m,className:p("navds-date__caption-button"),type:"button"})),b.createElement(XN,{weeks:n.weeks,onWeekNumberClick:a}),r)};var JN=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const eA={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},ky=e=>{var{className:r,dropdownCaption:n,disabled:t=[],disableWeekends:a=!1,showWeekNumber:i=!1,selected:u,fixedWeeks:d=!1,onWeekNumberClick:c,fromDate:m,toDate:g,month:p,mode:y,handleSelect:k,locale:O}=e,D=JN(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:_}=ke(),x=wh(),R=O?Vh(O):x,T=y??"single";return b.createElement(jN,Object.assign({captionLayout:n?"dropdown":"label",hideNavigation:!0,locale:R,mode:T,onSelect:(M,v)=>{if(T!=="range"||M||!ey(u)){k(M);return}if(!u.to){k({from:v,to:void 0});return}let P;Bd(u.to,v)?P=void 0:Js(v,u.to)?P={from:v,to:u.to}:P={from:u.to,to:v},k(P)},selected:u,classNames:eA,components:{MonthCaption:()=>b.createElement(b.Fragment,null),DayButton:E.useCallback(M=>b.createElement(zN,Object.assign({},M,{locale:R})),[R]),Month:E.useCallback(M=>b.createElement(QN,Object.assign({},M,{locale:R,onWeekNumberClick:T==="multiple"?c:void 0})),[R,T,c]),Day:E.useCallback(M=>b.createElement("td",Object.assign({},In(M,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:E.useCallback(M=>b.createElement(vy,Object.assign({},M,{showOnDesktop:!0,onWeekNumberClick:T==="multiple"?c:void 0})),[T,c]),WeekNumberHeader:E.useCallback(M=>b.createElement(Wd,{above:"sm",asChild:!0},b.createElement("th",Object.assign({},M))),[]),Weekdays:E.useCallback(M=>b.createElement("thead",Object.assign({},M,{className:"rdp-head","aria-hidden":!0}),b.createElement("tr",{className:"rdp-head_row"},M.children)),[])},className:_("navds-date",r),disabled:M=>a&&hi(M)||Pt(M,t)||LN({day:M,fromDate:m,toDate:g}),weekStartsOn:1,modifiers:{weekend:M=>a&&hi(M)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:i,fixedWeeks:d,showOutsideDays:!0,startMonth:m,endMonth:g,month:VN({month:p,start:m,end:g})},In(D,["onSelect","role","id","defaultSelected"])))};var nA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const tA=E.forwardRef((e,r)=>{var{className:n,locale:t,translations:a,selected:i,defaultSelected:u,onSelect:d,mode:c}=e,m=nA(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:g}=ke(),p=Kt("DatePicker",a,Uh(t)),[y,k]=ci({defaultValue:u,value:i,onChange:O=>d==null?void 0:d(O)});return b.createElement(Wh,{translate:p},b.createElement("div",{ref:r,className:g("navds-date__standalone-wrapper",n)},b.createElement(ky,Object.assign({},m,{locale:t,handleSelect:k,selected:y,mode:c}))))});var rA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const bi=E.forwardRef((e,r)=>{var{children:n,locale:t,translations:a,selected:i,id:u,defaultSelected:d,wrapperClassName:c,open:m,onClose:g,onOpenToggle:p,strategy:y,mode:k}=e,O=rA(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const D=Kt("DatePicker",a,Uh(t)),{cn:_}=ke(),x=fr(u),[R,T]=ci({defaultValue:!1,value:m}),[M,v]=E.useState(null),P=ss(v,r),[F,N]=ci({defaultValue:d,value:i,onChange:j=>{var U;let V=!1;k==="single"&&j?V=!0:ey(j)&&j.from&&j.to&&(V=!0,Bd(j.from,j.to)&&(V=!1)),V&&(g==null||g(),T(!1)),(U=O==null?void 0:O.onSelect)===null||U===void 0||U.call(O,j)}});return b.createElement(Wh,{translate:D},b.createElement(qR,{open:R,onOpen:()=>{T(j=>!j),p==null||p()},ariaId:x,defined:!0},b.createElement("div",{ref:P,className:_("navds-date__wrapper",c)},n,b.createElement(tF,{open:R,anchor:M,onClose:()=>{g==null||g(),R&&T(!1)},locale:t,translate:D,variant:k??"single",popoverProps:{id:x,strategy:y}},b.createElement(ky,Object.assign({},O,{locale:t,handleSelect:N,selected:F,mode:k}))))))});bi.Standalone=tA;bi.Input=jR;const aA=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),sA=(e={})=>{var r;const{locale:n,required:t,defaultSelected:a,today:i=new Date,fromDate:u,toDate:d,disabled:c,disableWeekends:m,onDateChange:g,inputFormat:p,onValidate:y,defaultMonth:k,allowTwoDigitYear:O=!0}=e,[D,_]=E.useState(null),x=wh(),R=n?Vh(n):x,[T,M]=E.useState(a),[v,P]=E.useState((r=T??k)!==null&&r!==void 0?r:i),[F,N]=E.useState(T),[j,U]=E.useState(!1),V=T?Fs(T,R,"date",p):"",[G,C]=E.useState(V),W=E.useCallback(me=>{var he,Le;U(me),me&&P((Le=(he=F??T)!==null&&he!==void 0?he:k)!==null&&Le!==void 0?Le:i)},[k,T,F,i]),Y=me=>{g==null||g(me),N(me)},$=(me={})=>y==null?void 0:y(aA(me));return{datepickerProps:{month:v,onMonthChange:P,onDayClick:(me,{selected:he})=>{if(!(he&&t)){if(me&&!he&&(W(!1),D==null||D.focus()),he){Y(void 0),C(""),$({isValidDate:!1,isEmpty:!0});return}Y(me),$(),P(me),C(me?Fs(me,R,"date",p):"")}},selected:F??new Date("Invalid date"),locale:n,fromDate:u,toDate:d,today:i,open:j,onClose:()=>{W(!1),D==null||D.focus()},onOpenToggle:()=>W(!j),disabled:c,disableWeekends:m},inputProps:{onChange:me=>{C(me.target.value);const he=bu(me.target.value,i,R,"date",O),Le=u&&he&&Kr(u,he)>0,Ve=d&&he&&Kr(he,d)>0;if(!Wt(he)||m&&hi(he)||c&&Pt(he,c)){Y(void 0),$({isInvalid:!Wt(he),isWeekend:m&&hi(he),isDisabled:c&&Pt(he,c),isValidDate:!1,isEmpty:!me.target.value,isBefore:Le??!1,isAfter:Ve??!1});return}if(Le||Ve){Y(void 0),$({isValidDate:!1,isBefore:Le??!1,isAfter:Ve??!1});return}Y(he),$(),P(k??he)},onFocus:me=>{if(me.target.readOnly)return;const he=bu(me.target.value,i,R,"date",O);if(Wt(he)){C(Fs(he,R,"date",p));const Le=u&&he&&Kr(u,he)>0,Ve=d&&he&&Kr(he,d)>0;!Le&&!Ve&&P(he)}},onBlur:me=>{const he=bu(me.target.value,i,R,"date",O);Wt(he)&&C(Fs(he,R,"date",p))},value:G,setAnchorRef:_},reset:()=>{var me;Y(T),P((me=T??k)!==null&&me!==void 0?me:i),C(V??""),M(a)},selectedDay:F,setSelected:me=>{var he;Y(me),P((he=me??k)!==null&&he!==void 0?he:i),C(me?Fs(me,R,"date",p):"")}}};function $n(e,r,n,t){return t?typeof t=="string"?{[`--__${e}c-${r}-${n}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([a,i])=>[`--__${e}c-${r}-${n}-${a}`,i])):{}}const oA={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},iA={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},kg=(e,r,n,t,a,i)=>r.split(" ").map((u,d,c)=>{var m,g;if(e==="margin-inline"&&u==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&u==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&u==="auto")return"auto";let p=`var(--${i}-${n}-${u})`;if(t.includes(u))p=u==="px"?"1px":u;else if(n==="spacing"&&u.startsWith("space"))p=`var(--${i}-${u})`;else if(n==="spacing"){const y=`--${i}-spacing-${u}`;p=`var(${(m=oA[y])!==null&&m!==void 0?m:y})`}else if(n==="radius"){const y=(g=iA[u])!==null&&g!==void 0?g:u;p=`var(--${i}-radius-${y})`}return a?u==="0"?"0":`calc(-1 * ${p})`:p}).join(" ");function it(e,r,n,t,a,i=!1,u=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${r}-${n}-xs`]:kg(n,a,t,u,i,e)};const d={};return Object.entries(a).forEach(([c,m])=>{d[`--__${e}c-${r}-${n}-${c}`]=kg(n,m,t,u,i,e)}),d}const Gd=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Yd=({children:e,className:r,padding:n,paddingInline:t,paddingBlock:a,margin:i,marginInline:u,marginBlock:d,width:c,minWidth:m,maxWidth:g,height:p,minHeight:y,maxHeight:k,position:O,inset:D,top:_,right:x,left:R,bottom:T,overflow:M,overflowX:v,overflowY:P,flexBasis:F,flexGrow:N,flexShrink:j,gridColumn:U})=>{const V=Ys(!1),{cn:G}=ke(),C=V?"ax":"a",W=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},it(C,"r","p","spacing",n)),it(C,"r","pi","spacing",t)),it(C,"r","pb","spacing",a)),it(C,"r","m","spacing",i)),it(C,"r","mi","spacing",u)),it(C,"r","mb","spacing",d)),$n(C,"r","w",c)),$n(C,"r","minw",m)),$n(C,"r","maxw",g)),$n(C,"r","h",p)),$n(C,"r","minh",y)),$n(C,"r","maxh",k)),$n(C,"r","position",O)),it(C,"r","inset","spacing",D)),it(C,"r","top","spacing",_)),it(C,"r","right","spacing",x)),it(C,"r","bottom","spacing",T)),it(C,"r","left","spacing",R)),$n(C,"r","overflow",M)),$n(C,"r","overflowx",v)),$n(C,"r","overflowy",P)),$n(C,"r","flex-basis",F)),$n(C,"r","flex-grow",N)),$n(C,"r","flex-shrink",j)),$n(C,"r","grid-column",U));return b.createElement(os,{className:G({className:r,"navds-r-p":n,"navds-r-pi":t,"navds-r-pb":a,"navds-r-m":i,"navds-r-mi":u,"navds-r-mb":d,"navds-r-w":c,"navds-r-minw":m,"navds-r-maxw":g,"navds-r-h":p,"navds-r-minh":y,"navds-r-maxh":k,"navds-r-position":O,"navds-r-inset":D,"navds-r-top":_,"navds-r-right":x,"navds-r-bottom":T,"navds-r-left":R,"navds-r-overflow":M,"navds-r-overflowx":v,"navds-r-overflowy":P,"navds-r-flex-basis":F,"navds-r-flex-grow":N,"navds-r-flex-shrink":j,"navds-r-grid-column":U}),style:W},e)};var lA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const uA=E.forwardRef((e,r)=>{var{children:n,className:t,as:a="div",background:i,borderColor:u,borderWidth:d,borderRadius:c,shadow:m,style:g,asChild:p}=e,y=lA(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:k}=ke(),O=Object.assign(Object.assign(Object.assign({},g),{"--__axc-box-background":i?`var(--ax-bg-${i})`:void 0,"--__axc-box-shadow":m?`var(--ax-shadow-${m})`:void 0,"--__axc-box-border-color":u?`var(--ax-border-${u})`:void 0,"--__axc-box-border-width":d?d.split(" ").map(_=>`${_}px`).join(" "):void 0}),it("ax","box","radius","radius",c,!1,["0"])),D=p?os:a;return b.createElement(Yd,Object.assign({},y),b.createElement(D,Object.assign({},In(y,Gd),{ref:r,style:O,className:k("navds-box",t,{"navds-box-bg":i,"navds-box-border-color":u,"navds-box-border-width":d,"navds-box-radius":c,"navds-box-shadow":m})}),n))});var dA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const cA=E.forwardRef((e,r)=>{var{children:n,className:t,as:a="div",background:i,borderColor:u,borderWidth:d,borderRadius:c,shadow:m,style:g,asChild:p}=e,y=dA(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const k=Ys(!1),{cn:O}=ke(),D=k?"ax":"a",_=Object.assign(Object.assign(Object.assign({},g),{[`--__${D}c-box-background`]:i?`var(--a-${i})`:void 0,[`--__${D}c-box-shadow`]:m?`var(--a-shadow-${m})`:void 0,[`--__${D}c-box-border-color`]:u?`var(--a-${u})`:void 0,[`--__${D}c-box-border-width`]:d?d.split(" ").map(R=>`${R}px`).join(" "):void 0}),it(D,"box","radius","radius",c,!1,["0"])),x=p?os:a;return b.createElement(Yd,Object.assign({},y),b.createElement(x,Object.assign({},In(y,Gd),{ref:r,style:_,className:O("navds-box",t,{"navds-box-bg":i,"navds-box-border-color":u,"navds-box-border-width":d,"navds-box-border-radius":c,"navds-box-shadow":m})}),n))}),by=cA;by.New=uA;var fA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const wy=E.forwardRef((e,r)=>{var{children:n,className:t,as:a="div",align:i,justify:u,wrap:d=!0,gap:c,style:m,direction:g="row",asChild:p}=e,y=fA(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const O=Ys(!1)?"ax":"a",{cn:D}=ke(),_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),it(O,"stack","gap","spacing",c)),$n(O,"stack","direction",g)),$n(O,"stack","align",i)),$n(O,"stack","justify",u)),x=p?os:a;return b.createElement(Yd,Object.assign({},y),b.createElement(x,Object.assign({},In(y,Gd),{ref:r,style:_,className:D("navds-stack",t,{"navds-vstack":g==="column","navds-hstack":g==="row","navds-stack-gap":c,"navds-stack-align":i,"navds-stack-justify":u,"navds-stack-direction":g,"navds-stack-wrap":d})}),n))});var mA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const zt=E.forwardRef((e,r)=>{var{as:n="div"}=e,t=mA(e,["as"]);return b.createElement(wy,Object.assign({as:n},t,{ref:r,direction:"row"}))});var gA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Bt=E.forwardRef((e,r)=>{var{as:n="div"}=e,t=gA(e,["as"]);return b.createElement(wy,Object.assign({as:n},t,{ref:r,direction:"column",wrap:!1}))});var pA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const hA=E.forwardRef((e,r)=>{var{className:n}=e,t=pA(e,["className"]);const{cn:a}=ke();return b.createElement("tbody",Object.assign({},t,{ref:r,className:a("navds-table__body",n)}))});var yA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const _y=E.forwardRef((e,r)=>{var{className:n,children:t,align:a,textSize:i}=e,u=yA(e,["className","children","align","textSize"]);const{cn:d}=ke();return b.createElement("th",Object.assign({ref:r,className:d("navds-table__header-cell","navds-label",n,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":i==="small"})},u),t)}),Ty=E.createContext(null);var vA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const kA=E.forwardRef((e,r)=>{var n,t,a,i,{className:u,children:d,sortable:c=!1,sortKey:m}=e,g=vA(e,["className","children","sortable","sortKey"]);const p=E.useContext(Ty),{cn:y}=ke();return c&&!m&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),b.createElement(_y,Object.assign({scope:"col",ref:r,className:y(u),"aria-sort":c?((n=p==null?void 0:p.sort)===null||n===void 0?void 0:n.orderBy)===m?(t=p==null?void 0:p.sort)===null||t===void 0?void 0:t.direction:"none":void 0},g),c?b.createElement("button",{type:"button",className:y("navds-table__sort-button"),onClick:c&&m?()=>{var k;return(k=p==null?void 0:p.onSortChange)===null||k===void 0?void 0:k.call(p,m)}:void 0},d,((a=p==null?void 0:p.sort)===null||a===void 0?void 0:a.orderBy)===m?((i=p==null?void 0:p.sort)===null||i===void 0?void 0:i.direction)==="descending"?b.createElement(IS,{"aria-hidden":!0}):b.createElement(LS,{"aria-hidden":!0}):b.createElement(_S,{"aria-hidden":!0})):d)});var bA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Sy=E.forwardRef((e,r)=>{var{className:n,children:t="",align:a,textSize:i}=e,u=bA(e,["className","children","align","textSize"]);const{cn:d}=ke();return b.createElement(fn,Object.assign({as:"td",ref:r,className:d("navds-table__data-cell",n,{[`navds-table__data-cell--align-${a}`]:a}),size:i},u),t)});var wA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const _A=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function TA(e){const r=parseFloat(e);return!Number.isNaN(r)&&Number.isFinite(r)}function bg(e){return typeof e=="string"&&e[e.length-1]==="%"&&TA(e.substring(0,e.length-1))}function _u(e,r){r===0&&(e!=null&&e.style)&&(e.style.display="none")}function SA(e,r){r===0&&(e!=null&&e.style)&&(e.style.display="")}const EA=e=>{var{children:r,className:n,innerClassName:t,duration:a=250,easing:i="ease",height:u}=e,d=wA(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=ke(),m=E.useRef(u),g=E.useRef(null),p=E.useRef(),y=E.useRef(),k=E.useRef(u),O=E.useRef("visible"),D=_A?0:a;typeof k.current=="number"?(typeof u!="string"&&(k.current=u<0?0:u),O.current="hidden"):bg(k.current)&&(k.current=u==="0%"?0:u,O.current="hidden");const[_,x]=E.useState(k.current),[R,T]=E.useState(O.current),[M,v]=E.useState(!1);E.useEffect(()=>{_u(g.current,k.current)},[]),E.useEffect(()=>{if(u!==m.current&&g.current){SA(g.current,m.current),g.current.style.overflow="hidden";const j=g.current.offsetHeight;g.current.style.overflow="";const U=D;let V,G,C="hidden",W;const Y=m.current==="auto";typeof u=="number"?(V=u<0?0:u,G=V):bg(u)?(V=u==="0%"?0:u,G=V):(V=j,G="auto",C=void 0),Y&&(G=V,V=j),x(V),T("hidden"),v(!Y),clearTimeout(y.current),clearTimeout(p.current),Y?(W=!0,y.current=setTimeout(()=>{x(G),T(C),v(W)},50),p.current=setTimeout(()=>{v(!1),_u(g.current,G)},U)):y.current=setTimeout(()=>{x(G),T(C),v(!1),u!=="auto"&&_u(g.current,V)},U)}return m.current=u,()=>{clearTimeout(y.current),clearTimeout(p.current)}},[u]);const P={height:_,overflow:R};M&&(P.transition=`height ${D}ms ${i} 0ms`,P.WebkitTransition=P.transition);const N=typeof d["aria-hidden"]<"u"?d["aria-hidden"]:u===0;return b.createElement("div",Object.assign({},d,{className:c(n),style:P}),b.createElement("div",{"aria-hidden":N,className:c(t),ref:g},r))};var OA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ey=E.forwardRef((e,r)=>{var{className:n,selected:t=!1,shadeOnHover:a=!0}=e,i=OA(e,["className","selected","shadeOnHover"]);const{cn:u}=ke();return b.createElement("tr",Object.assign({},i,{ref:r,className:u("navds-table__row",n,{"navds-table__row--selected":t,"navds-table__row--shade-on-hover":a})}))});var DA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const xA=E.forwardRef((e,r)=>{var{className:n,children:t,content:a,togglePlacement:i="left",defaultOpen:u=!1,open:d,onOpenChange:c,expansionDisabled:m=!1,expandOnRowClick:g=!1,colSpan:p=999,contentGutter:y,onClick:k}=e,O=DA(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:D}=ke(),[_,x]=ci({defaultValue:u,value:d,onChange:c}),R=Kt("global"),T=fr(),M=P=>{x(F=>!F),P.stopPropagation()},v=P=>{g&&!m&&!Oy(P.target)&&M(P)};return b.createElement(b.Fragment,null,b.createElement(Ey,Object.assign({},O,{ref:r,className:D("navds-table__expandable-row",n,{"navds-table__expandable-row--open":_,"navds-table__expandable-row--expansion-disabled":m,"navds-table__expandable-row--clickable":g}),onClick:pa(k,v)}),i==="right"&&t,b.createElement(Sy,{className:D("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":_}),onClick:m?()=>null:M},!m&&b.createElement("button",{className:D("navds-table__toggle-expand-button"),type:"button","aria-controls":T,"aria-expanded":_,onClick:M},b.createElement(Xp,{className:D("navds-table__expandable-icon"),title:R(_?"showLess":"showMore")}))),i==="left"&&t),b.createElement("tr",{"data-state":_?"open":"closed",className:D("navds-table__expanded-row"),"aria-hidden":!_,id:T},b.createElement("td",{colSpan:p,className:D("navds-table__expanded-row-cell")},b.createElement(EA,{className:D("navds-table__expanded-row-collapse"),innerClassName:D(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${y??i}`),height:_?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function Oy(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Oy(e.parentElement)}var RA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const FA=E.forwardRef((e,r)=>{var{className:n}=e,t=RA(e,["className"]);const{cn:a}=ke();return b.createElement("thead",Object.assign({},t,{ref:r,className:a("navds-table__header",n)}))});var NA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Bn=E.forwardRef((e,r)=>{var{className:n,zebraStripes:t=!1,size:a="medium",onSortChange:i,sort:u}=e,d=NA(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:c}=ke();return b.createElement(Ty.Provider,{value:{onSortChange:i,sort:u}},b.createElement("table",Object.assign({},d,{ref:r,className:c("navds-table",`navds-table--${a}`,n,{"navds-table--zebra-stripes":t})})))});Bn.Header=FA;Bn.Body=hA;Bn.Row=Ey;Bn.ColumnHeader=kA;Bn.HeaderCell=_y;Bn.DataCell=Sy;Bn.ExpandableRow=xA;var AA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Xu=E.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:i="medium",icon:u,"data-color":d}=e,c=AA(e,["children","className","variant","size","icon","data-color"]);const{cn:m}=ke(),g=(a==null?void 0:a.endsWith("-filled"))&&"strong",p=(a==null?void 0:a.endsWith("-moderate"))&&"moderate";return b.createElement(fn,Object.assign({"data-color":d??PA(a),"data-variant":g||p||"outline"},c,{ref:r,as:"span",size:i==="medium"?"medium":"small",className:m("navds-tag",t,`navds-tag--${a}`,`navds-tag--${i}`)}),u&&b.createElement("span",{className:m("navds-tag__icon--left")},u),n)});function PA(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const MA=e=>{const r=Sa(e,"fieldset"),{inputProps:n}=r;return Object.assign(Object.assign({},r),{inputProps:{"aria-invalid":n["aria-invalid"],"aria-describedby":n["aria-describedby"]}})};var BA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Dy=E.forwardRef((e,r)=>{var n,t,a;const{inputProps:i,errorId:u,showErrorMsg:d,hasError:c,size:m,readOnly:g,inputDescriptionId:p}=MA(e),{cn:y}=ke(),k=E.useContext(ki),{children:O,className:D,errorPropagation:_=!0,legend:x,description:R,hideLegend:T,nativeReadOnly:M=!0}=e,v=BA(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return b.createElement(ki.Provider,{value:{error:_?(n=e.error)!==null&&n!==void 0?n:k==null?void 0:k.error:void 0,errorId:Gs({[u]:d,[(t=k==null?void 0:k.errorId)!==null&&t!==void 0?t:""]:!!(k!=null&&k.error)}),size:m,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:g}},b.createElement("fieldset",Object.assign({},In(v,["errorId","error","size","readOnly"]),In(i,["aria-describedby","aria-invalid"]),{ref:r,className:y(D,"navds-fieldset",`navds-fieldset--${m}`,{"navds-fieldset--error":c,"navds-fieldset--readonly":g})}),b.createElement(jn,{size:m,as:"legend",className:y("navds-fieldset__legend",{"navds-sr-only":!!T})},g&&(M?b.createElement(Ci,null):b.createElement(Lh,null)),x),!!R&&b.createElement(fn,{className:y("navds-fieldset__description",{"navds-sr-only":!!T}),id:p,size:m??"medium",as:"div"},e.description),O,b.createElement("div",{id:u,"aria-relevant":"additions removals","aria-live":"polite",className:y("navds-fieldset__error")},d&&b.createElement(ls,{size:m,showIcon:!0},e.error))))});var qA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const xy=b.createContext(null),jA=E.forwardRef((e,r)=>{var n,t,{children:a,className:i,name:u,defaultValue:d,value:c,onChange:m=()=>{},required:g,readOnly:p}=e,y=qA(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:k}=ke(),O=E.useContext(ki),D=fr();return b.createElement(Dy,Object.assign({},y,{readOnly:p,ref:r,className:k(i,"navds-radio-group",`navds-radio-group--${(t=(n=y.size)!==null&&n!==void 0?n:O==null?void 0:O.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),b.createElement(xy.Provider,{value:{name:u??`radioGroupName-${D}`,defaultValue:d,value:c,onChange:m,required:g}},b.createElement("div",{className:k("navds-radio-buttons")},a)))});var IA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const CA=e=>{const r=E.useContext(xy),n=Sa(In(e,["description"]),"radio"),{inputProps:t,readOnly:a}=n,i=IA(n,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},i),{readOnly:a,inputProps:Object.assign(Object.assign({},t),{name:r==null?void 0:r.name,defaultChecked:(r==null?void 0:r.defaultValue)===void 0?void 0:(r==null?void 0:r.defaultValue)===e.value,checked:(r==null?void 0:r.value)===void 0?void 0:(r==null?void 0:r.value)===e.value,onChange:u=>{var d,c;a||((d=e.onChange)===null||d===void 0||d.call(e,u),(c=r==null?void 0:r.onChange)===null||c===void 0||c.call(r,e.value))},onClick:u=>{var d;if(a){u.preventDefault();return}(d=e==null?void 0:e.onClick)===null||d===void 0||d.call(e,u)},required:r==null?void 0:r.required,type:"radio"})})},wg=E.forwardRef((e,r)=>{const{cn:n}=ke(),{inputProps:t,size:a,hasError:i,readOnly:u}=CA(e),d=fr(),c=fr();return b.createElement("div",{className:n(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":i,"navds-radio--disabled":t.disabled,"navds-radio--readonly":u}),"data-color":i?"danger":e["data-color"]},b.createElement("input",Object.assign({},In(e,["children","size","description","readOnly"]),In(t,["aria-invalid"]),{"aria-labelledby":Gs(d,!!e["aria-labelledby"]&&e["aria-labelledby"],{[c]:e.description}),className:n("navds-radio__input"),ref:r})),b.createElement("label",{htmlFor:t.id,className:n("navds-radio__label")},b.createElement("span",{className:n("navds-radio__content")},b.createElement(fn,{as:"span",id:d,size:a,"aria-hidden":!0},e.children),e.description&&b.createElement(fn,{as:"span",id:c,size:a,className:n("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))}),Ry=E.createContext(null);var LA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Fy=E.forwardRef((e,r)=>{var n,{className:t,children:a,disabled:i,onClick:u}=e,d=LA(e,["className","children","disabled","onClick"]);const{cn:c}=ke(),m=Kt("Search"),g=E.useContext(Ry);if(g===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:p,variant:y,handleClick:k}=g;return b.createElement(Yt,Object.assign({type:"submit"},d,{ref:r,size:p,variant:y==="secondary"?"secondary":"primary",className:c("navds-search__button-search",t),disabled:(n=g==null?void 0:g.disabled)!==null&&n!==void 0?n:i,onClick:pa(u,k),icon:b.createElement(Zp,Object.assign({},a?{"aria-hidden":!0}:{title:m("search")}))}),a)});var $A=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Zu=E.forwardRef((e,r)=>{const{inputProps:n,size:t="medium",inputDescriptionId:a,errorId:i,showErrorMsg:u,hasError:d}=Sa(e,"searchfield"),{className:c,hideLabel:m=!0,label:g,description:p,value:y,clearButtonLabel:k,onClear:O,clearButton:D=!0,children:_,variant:x="primary",defaultValue:R,onChange:T,onSearchClick:M,htmlSize:v}=e,P=$A(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),{cn:F}=ke(),N=E.useRef(null),j=ss(N,r),[U,V]=E.useState(R??""),G=$=>{y===void 0&&V($),T==null||T($)},C=$=>{var J,z;O==null||O($),G(""),(z=(J=N.current)===null||J===void 0?void 0:J.focus)===null||z===void 0||z.call(J)},W=()=>{M==null||M(`${y??U}`)},Y=D&&!n.disabled&&(y??U);return b.createElement("div",{onKeyDown:$=>{var J;$.key==="Escape"&&(!((J=N.current)===null||J===void 0)&&J.value&&$.preventDefault(),C({trigger:"Escape",event:$}))},className:F(c,"navds-form-field",`navds-form-field--${t}`,"navds-search",{"navds-search--error":d,"navds-search--disabled":n.disabled,"navds-search--with-size":v})},b.createElement(jn,{htmlFor:n.id,size:t,className:F("navds-form-field__label",{"navds-sr-only":m})},g),!!p&&b.createElement(fn,{className:F("navds-form-field__description",{"navds-sr-only":m}),id:a,size:t,as:"div"},p),b.createElement("div",{className:F("navds-search__wrapper")},b.createElement("div",{className:F("navds-search__wrapper-inner")},x==="simple"&&b.createElement(Zp,{"aria-hidden":!0,className:F("navds-search__search-icon")}),b.createElement("input",Object.assign({ref:j},In(P,["error","errorId","size","readOnly"]),n,{value:y??U,onChange:$=>G($.target.value),type:"search",className:F(c,"navds-search__input",`navds-search__input--${x}`,"navds-text-field__input","navds-body-short",`navds-body-short--${t}`)},v?{size:Number(v)}:{})),Y&&b.createElement(HA,{handleClear:C,size:t,clearButtonLabel:k})),b.createElement(Ry.Provider,{value:{size:t,disabled:n.disabled,variant:x,handleClick:W}},_||x!=="simple"&&b.createElement(Fy,null))),b.createElement("div",{className:F("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},u&&b.createElement(ls,{size:t,showIcon:!0},e.error)))});function HA({size:e,clearButtonLabel:r,handleClear:n}){const{cn:t}=ke(),a=Ys(!1),i=Kt("Search");return a?b.createElement(Yt,{className:t("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:b.createElement(Us,{"aria-hidden":!0}),title:r||i("clear"),onClick:u=>n({trigger:"Click",event:u}),type:"button"}):b.createElement("button",{type:"button",onClick:u=>n({trigger:"Click",event:u}),className:t("navds-search__button-clear")},b.createElement("span",{className:t("navds-sr-only")},r||i("clear")),b.createElement(Us,{"aria-hidden":!0}))}Zu.Button=Fy;var VA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const _g=(e,r,n)=>{const{outerHeightStyle:t,overflow:a}=r;return n.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(n.current+=1,r):e},Tg=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function ei(e){return parseInt(e,10)||0}const UA=E.forwardRef((e,r)=>{var n,t,{className:a,onChange:i,maxRows:u,minRows:d=1,autoScrollbar:c,style:m,value:g}=e,p=VA(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:y}=E.useRef(g!=null),k=E.useRef(null),O=ss(k,r),D=E.useRef(null),_=E.useRef(0),[x,R]=E.useState({outerHeightStyle:0}),T=b.useCallback(()=>{const F=k.current,j=Tg(F).getComputedStyle(F);if(j.width==="0px")return{outerHeightStyle:0};const U=D.current;U.style.width=j.width,U.value=F.value||p.placeholder||"x",U.value.slice(-1)===`
`&&(U.value+=" ");const V=j.boxSizing,G=ei(j.paddingBottom)+ei(j.paddingTop),C=ei(j.borderBottomWidth)+ei(j.borderTopWidth),W=U.scrollHeight-G;U.value="x";const Y=U.scrollHeight-G;let $=W;d&&($=Math.max(Number(d)*Y,$)),u&&($=Math.min(Number(u)*Y,$)),$=Math.max($,Y);const J=$+(V==="border-box"?G+C:0),z=Math.abs($-W)<=1;return{outerHeightStyle:J,overflow:z}},[u,d,p.placeholder]),M=()=>{const F=T();Sg(F)||R(N=>_g(N,F,_))};es(()=>{const F=()=>{const G=T();Sg(G)||Wp.flushSync(()=>{R(C=>_g(C,G,_))})},N=Kp(()=>{var G,C,W;if(_.current=0,!((G=k.current)===null||G===void 0)&&G.style.height||!((C=k.current)===null||C===void 0)&&C.style.width){((W=k.current)===null||W===void 0?void 0:W.style.overflow)==="hidden"&&R(Y=>Object.assign(Object.assign({},Y),{overflow:!1}));return}F()},166,!0),j=k.current,U=Tg(j);U.addEventListener("resize",N);let V;return typeof ResizeObserver<"u"&&(V=new ResizeObserver(N),V.observe(j)),()=>{N.clear(),U.removeEventListener("resize",N),V&&V.disconnect()}},[T]),es(()=>{M()}),E.useEffect(()=>{_.current=0},[g]);const v=F=>{_.current=0,y||M(),i&&i(F)},P=Object.assign({"--__ac-textarea-height":x.outerHeightStyle+"px","--__axc-textarea-height":x.outerHeightStyle+"px",overflow:x.overflow&&!c&&!(!((n=k.current)===null||n===void 0)&&n.style.height)&&!(!((t=k.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},m);return b.createElement(b.Fragment,null,b.createElement("textarea",Object.assign({value:g,onChange:v,ref:O,rows:d,style:P},p,{className:a})),b.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:D,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},m)}))});function Sg(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const WA=({maxLengthId:e,maxLength:r,currentLength:n,size:t,i18n:a})=>{const{cn:i}=ke(),u=Kt("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),d=r-n,[c,m]=E.useState(d);return E.useEffect(()=>{const g=Kp(()=>{m(d)},2e3);return g(),()=>{g.clear()}},[d]),b.createElement(b.Fragment,null,b.createElement("span",{id:e,className:i("navds-sr-only")},u("maxLength",{maxLength:r})),d<20&&b.createElement("span",{role:"status",className:i("navds-textarea__sr-counter navds-sr-only")},Eg(c,u)),b.createElement(fn,{className:i("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:t},Eg(d,u)))},Eg=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var GA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const YA=E.forwardRef((e,r)=>{var n,t,a;const{inputProps:i,errorId:u,showErrorMsg:d,hasError:c,size:m,inputDescriptionId:g}=Sa(e,"textarea"),{label:p,className:y,description:k,maxLength:O,hideLabel:D=!1,resize:_,UNSAFE_autoScrollbar:x,i18n:R,readOnly:T}=e,M=GA(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:v}=ke(),P=fr(),F=O!==void 0&&O>0,[N,j]=E.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),U=()=>{let G=M!=null&&M.minRows?M==null?void 0:M.minRows:3;return m==="small"&&(G=M!=null&&M.minRows?M==null?void 0:M.minRows:2),G},V=Gs(i["aria-describedby"],{[P??""]:F});return b.createElement("div",{className:v(y,"navds-form-field",`navds-form-field--${m}`,{"navds-form-field--disabled":!!i.disabled,"navds-form-field--readonly":T,"navds-textarea--readonly":T,"navds-textarea--error":c,"navds-textarea--autoscrollbar":x,[`navds-textarea--resize-${_===!0?"both":_}`]:_})},b.createElement(jn,{htmlFor:i.id,size:m,className:v("navds-form-field__label",{"navds-sr-only":D})},T&&b.createElement(Ci,null),p),!!k&&b.createElement(fn,{className:v("navds-form-field__description",{"navds-sr-only":D}),id:g,size:m,as:"div"},k),b.createElement(UA,Object.assign({},In(M,["error","errorId","size"]),i,{onChange:pa(e.onChange,e.value===void 0?G=>j(G.target.value):void 0),minRows:U(),autoScrollbar:x,ref:r,readOnly:T,className:v("navds-textarea__input","navds-body-short",`navds-body-short--${m??"medium"}`)},V?{"aria-describedby":V}:{})),F&&!T&&!i.disabled&&b.createElement(WA,{maxLengthId:P,maxLength:O,currentLength:(a=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:N.length,size:m,i18n:R}),b.createElement("div",{className:v("navds-form-field__error"),id:u,"aria-relevant":"additions removals","aria-live":"polite"},d&&b.createElement(ls,{size:m,showIcon:!0},e.error)))});var zA=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const KA=E.forwardRef((e,r)=>{const{cn:n}=ke(),{inputProps:t,errorId:a,showErrorMsg:i,hasError:u,size:d,inputDescriptionId:c}=Sa(e,"textField"),{label:m,className:g,description:p,htmlSize:y,hideLabel:k=!1,type:O="text",readOnly:D}=e,_=zA(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return b.createElement("div",{className:n(g,"navds-form-field",`navds-form-field--${d}`,{"navds-text-field--error":u,"navds-text-field--disabled":!!t.disabled,"navds-form-field--disabled":!!t.disabled,"navds-form-field--readonly":D,"navds-text-field--readonly":D})},b.createElement(jn,{htmlFor:t.id,size:d,className:n("navds-form-field__label",{"navds-sr-only":k})},D&&b.createElement(Ci,null),m),!!p&&b.createElement(fn,{className:n("navds-form-field__description",{"navds-sr-only":k}),id:c,size:d,as:"div"},p),b.createElement("input",Object.assign({},In(_,["error","errorId","size"]),t,{ref:r,type:O,readOnly:D,className:n("navds-text-field__input","navds-body-short",`navds-body-short--${d??"medium"}`),size:y})),b.createElement("div",{className:n("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},i&&b.createElement(ls,{size:d,showIcon:!0},e.error)))});var no=e=>e.type==="checkbox",ga=e=>e instanceof Date,Qn=e=>e==null;const Ny=e=>typeof e=="object";var On=e=>!Qn(e)&&!Array.isArray(e)&&Ny(e)&&!ga(e),Ay=e=>On(e)&&e.target?no(e.target)?e.target.checked:e.target.value:e,XA=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Py=(e,r)=>e.has(XA(r)),ZA=e=>{const r=e.constructor&&e.constructor.prototype;return On(r)&&r.hasOwnProperty("isPrototypeOf")},zd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function pn(e){let r;const n=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(zd&&(e instanceof Blob||t))&&(n||On(e)))if(r=n?[]:{},!n&&!ZA(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=pn(e[a]));else return e;return r}var Vi=e=>/^\w*$/.test(e),dn=e=>e===void 0,Ui=e=>Array.isArray(e)?e.filter(Boolean):[],Kd=e=>Ui(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ie=(e,r,n)=>{if(!r||!On(e))return n;const t=(Vi(r)?[r]:Kd(r)).reduce((a,i)=>Qn(a)?a:a[i],e);return dn(t)||t===e?dn(e[r])?n:e[r]:t},bt=e=>typeof e=="boolean",Ze=(e,r,n)=>{let t=-1;const a=Vi(r)?[r]:Kd(r),i=a.length,u=i-1;for(;++t<i;){const d=a[t];let c=n;if(t!==u){const m=e[d];c=On(m)||Array.isArray(m)?m:isNaN(+a[t+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=c,e=e[d]}};const wi={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},At={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Fr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Xd=b.createContext(null);Xd.displayName="HookFormContext";const Xt=()=>b.useContext(Xd),QA=e=>{const{children:r,...n}=e;return b.createElement(Xd.Provider,{value:n},r)};var My=(e,r,n,t=!0)=>{const a={defaultValues:r._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const u=i;return r._proxyFormState[u]!==At.all&&(r._proxyFormState[u]=!t||At.all),n&&(n[u]=!0),e[u]}});return a};const Wi=typeof window<"u"?E.useLayoutEffect:E.useEffect;function JA(e){const r=Xt(),{control:n=r.control,disabled:t,name:a,exact:i}=e||{},[u,d]=b.useState(n._formState),c=b.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Wi(()=>n._subscribe({name:a,formState:c.current,exact:i,callback:m=>{!t&&d({...n._formState,...m})}}),[a,t,i]),b.useEffect(()=>{c.current.isValid&&n._setValid(!0)},[n]),b.useMemo(()=>My(u,n,c.current,!1),[u,n])}var ur=e=>typeof e=="string",By=(e,r,n,t,a)=>ur(e)?(t&&r.watch.add(e),ie(n,e,a)):Array.isArray(e)?e.map(i=>(t&&r.watch.add(i),ie(n,i))):(t&&(r.watchAll=!0),n);function eP(e){const r=Xt(),{control:n=r.control,name:t,defaultValue:a,disabled:i,exact:u}=e||{},d=b.useRef(a),[c,m]=b.useState(n._getWatch(t,d.current));return Wi(()=>n._subscribe({name:t,formState:{values:!0},exact:u,callback:g=>!i&&m(By(t,n._names,g.values||n._formValues,!1,d.current))}),[t,n,i,u]),b.useEffect(()=>n._removeUnmounted()),c}function Gi(e){const r=Xt(),{name:n,disabled:t,control:a=r.control,shouldUnregister:i}=e,u=Py(a._names.array,n),d=eP({control:a,name:n,defaultValue:ie(a._formValues,n,ie(a._defaultValues,n,e.defaultValue)),exact:!0}),c=JA({control:a,name:n,exact:!0}),m=b.useRef(e),g=b.useRef(a.register(n,{...e.rules,value:d,...bt(e.disabled)?{disabled:e.disabled}:{}})),p=b.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!ie(c.errors,n)},isDirty:{enumerable:!0,get:()=>!!ie(c.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!ie(c.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!ie(c.validatingFields,n)},error:{enumerable:!0,get:()=>ie(c.errors,n)}}),[c,n]),y=b.useCallback(_=>g.current.onChange({target:{value:Ay(_),name:n},type:wi.CHANGE}),[n]),k=b.useCallback(()=>g.current.onBlur({target:{value:ie(a._formValues,n),name:n},type:wi.BLUR}),[n,a._formValues]),O=b.useCallback(_=>{const x=ie(a._fields,n);x&&_&&(x._f.ref={focus:()=>_.focus&&_.focus(),select:()=>_.select&&_.select(),setCustomValidity:R=>_.setCustomValidity(R),reportValidity:()=>_.reportValidity()})},[a._fields,n]),D=b.useMemo(()=>({name:n,value:d,...bt(t)||c.disabled?{disabled:c.disabled||t}:{},onChange:y,onBlur:k,ref:O}),[n,t,c.disabled,y,k,O,d]);return b.useEffect(()=>{const _=a._options.shouldUnregister||i;a.register(n,{...m.current.rules,...bt(m.current.disabled)?{disabled:m.current.disabled}:{}});const x=(R,T)=>{const M=ie(a._fields,R);M&&M._f&&(M._f.mount=T)};if(x(n,!0),_){const R=pn(ie(a._options.defaultValues,n));Ze(a._defaultValues,n,R),dn(ie(a._formValues,n))&&Ze(a._formValues,n,R)}return!u&&a.register(n),()=>{(u?_&&!a._state.action:_)?a.unregister(n):x(n,!1)}},[n,a,u,i]),b.useEffect(()=>{a._setDisabledField({disabled:t,name:n})},[t,n,a]),b.useMemo(()=>({field:D,formState:c,fieldState:p}),[D,c,p])}var nP=(e,r,n,t,a)=>r?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[t]:a||!0}}:{},ut=e=>Array.isArray(e)?e:[e],Og=()=>{let e=[];return{get observers(){return e},next:a=>{for(const i of e)i.next&&i.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(i=>i!==a)}}),unsubscribe:()=>{e=[]}}},Qu=e=>Qn(e)||!Ny(e);function zr(e,r){if(Qu(e)||Qu(r))return e===r;if(ga(e)&&ga(r))return e.getTime()===r.getTime();const n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(const a of n){const i=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const u=r[a];if(ga(i)&&ga(u)||On(i)&&On(u)||Array.isArray(i)&&Array.isArray(u)?!zr(i,u):i!==u)return!1}}return!0}var Xn=e=>On(e)&&!Object.keys(e).length,Zd=e=>e.type==="file",Vt=e=>typeof e=="function",_i=e=>{if(!zd)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},qy=e=>e.type==="select-multiple",Qd=e=>e.type==="radio",tP=e=>Qd(e)||no(e),Tu=e=>_i(e)&&e.isConnected;function rP(e,r){const n=r.slice(0,-1).length;let t=0;for(;t<n;)e=dn(e)?t++:e[r[t++]];return e}function aP(e){for(const r in e)if(e.hasOwnProperty(r)&&!dn(e[r]))return!1;return!0}function xn(e,r){const n=Array.isArray(r)?r:Vi(r)?[r]:Kd(r),t=n.length===1?e:rP(e,n),a=n.length-1,i=n[a];return t&&delete t[i],a!==0&&(On(t)&&Xn(t)||Array.isArray(t)&&aP(t))&&xn(e,n.slice(0,-1)),e}var jy=e=>{for(const r in e)if(Vt(e[r]))return!0;return!1};function Ti(e,r={}){const n=Array.isArray(e);if(On(e)||n)for(const t in e)Array.isArray(e[t])||On(e[t])&&!jy(e[t])?(r[t]=Array.isArray(e[t])?[]:{},Ti(e[t],r[t])):Qn(e[t])||(r[t]=!0);return r}function Iy(e,r,n){const t=Array.isArray(e);if(On(e)||t)for(const a in e)Array.isArray(e[a])||On(e[a])&&!jy(e[a])?dn(r)||Qu(n[a])?n[a]=Array.isArray(e[a])?Ti(e[a],[]):{...Ti(e[a])}:Iy(e[a],Qn(r)?{}:r[a],n[a]):n[a]=!zr(e[a],r[a]);return n}var Ns=(e,r)=>Iy(e,r,Ti(r));const Dg={value:!1,isValid:!1},xg={value:!0,isValid:!0};var Cy=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!dn(e[0].attributes.value)?dn(e[0].value)||e[0].value===""?xg:{value:e[0].value,isValid:!0}:xg:Dg}return Dg},Ly=(e,{valueAsNumber:r,valueAsDate:n,setValueAs:t})=>dn(e)?e:r?e===""?NaN:e&&+e:n&&ur(e)?new Date(e):t?t(e):e;const Rg={isValid:!1,value:null};var $y=e=>Array.isArray(e)?e.reduce((r,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:r,Rg):Rg;function Fg(e){const r=e.ref;return Zd(r)?r.files:Qd(r)?$y(e.refs).value:qy(r)?[...r.selectedOptions].map(({value:n})=>n):no(r)?Cy(e.refs).value:Ly(dn(r.value)?e.ref.value:r.value,e)}var sP=(e,r,n,t)=>{const a={};for(const i of e){const u=ie(r,i);u&&Ze(a,i,u._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:t}},Si=e=>e instanceof RegExp,As=e=>dn(e)?e:Si(e)?e.source:On(e)?Si(e.value)?e.value.source:e.value:e,za=e=>({isOnSubmit:!e||e===At.onSubmit,isOnBlur:e===At.onBlur,isOnChange:e===At.onChange,isOnAll:e===At.all,isOnTouch:e===At.onTouched});const Ng="AsyncFunction";var oP=e=>!!e&&!!e.validate&&!!(Vt(e.validate)&&e.validate.constructor.name===Ng||On(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===Ng)),iP=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Ju=(e,r,n)=>!n&&(r.watchAll||r.watch.has(e)||[...r.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const Qa=(e,r,n,t)=>{for(const a of n||Object.keys(e)){const i=ie(e,a);if(i){const{_f:u,...d}=i;if(u){if(u.refs&&u.refs[0]&&r(u.refs[0],a)&&!t)return!0;if(u.ref&&r(u.ref,u.name)&&!t)return!0;if(Qa(d,r))break}else if(On(d)&&Qa(d,r))break}}};function Ag(e,r,n){const t=ie(e,n);if(t||Vi(n))return{error:t,name:n};const a=n.split(".");for(;a.length;){const i=a.join("."),u=ie(r,i),d=ie(e,i);if(u&&!Array.isArray(u)&&n!==i)return{name:n};if(d&&d.type)return{name:i,error:d};if(d&&d.root&&d.root.type)return{name:`${i}.root`,error:d.root};a.pop()}return{name:n}}var lP=(e,r,n,t)=>{n(e);const{name:a,...i}=e;return Xn(i)||Object.keys(i).length>=Object.keys(r).length||Object.keys(i).find(u=>r[u]===(!t||At.all))},uP=(e,r,n)=>!e||!r||e===r||ut(e).some(t=>t&&(n?t===r:t.startsWith(r)||r.startsWith(t))),dP=(e,r,n,t,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(r||e):(n?t.isOnBlur:a.isOnBlur)?!e:(n?t.isOnChange:a.isOnChange)?e:!0,cP=(e,r)=>!Ui(ie(e,r)).length&&xn(e,r),Hy=(e,r,n)=>{const t=ut(ie(e,n));return Ze(t,"root",r[n]),Ze(e,n,t),e},li=e=>ur(e);function Pg(e,r,n="validate"){if(li(e)||Array.isArray(e)&&e.every(li)||bt(e)&&!e)return{type:n,message:li(e)?e:"",ref:r}}var Ga=e=>On(e)&&!Si(e)?e:{value:e,message:""},ed=async(e,r,n,t,a,i)=>{const{ref:u,refs:d,required:c,maxLength:m,minLength:g,min:p,max:y,pattern:k,validate:O,name:D,valueAsNumber:_,mount:x}=e._f,R=ie(n,D);if(!x||r.has(D))return{};const T=d?d[0]:u,M=G=>{a&&T.reportValidity&&(T.setCustomValidity(bt(G)?"":G||""),T.reportValidity())},v={},P=Qd(u),F=no(u),N=P||F,j=(_||Zd(u))&&dn(u.value)&&dn(R)||_i(u)&&u.value===""||R===""||Array.isArray(R)&&!R.length,U=nP.bind(null,D,t,v),V=(G,C,W,Y=Fr.maxLength,$=Fr.minLength)=>{const J=G?C:W;v[D]={type:G?Y:$,message:J,ref:u,...U(G?Y:$,J)}};if(i?!Array.isArray(R)||!R.length:c&&(!N&&(j||Qn(R))||bt(R)&&!R||F&&!Cy(d).isValid||P&&!$y(d).isValid)){const{value:G,message:C}=li(c)?{value:!!c,message:c}:Ga(c);if(G&&(v[D]={type:Fr.required,message:C,ref:T,...U(Fr.required,C)},!t))return M(C),v}if(!j&&(!Qn(p)||!Qn(y))){let G,C;const W=Ga(y),Y=Ga(p);if(!Qn(R)&&!isNaN(R)){const $=u.valueAsNumber||R&&+R;Qn(W.value)||(G=$>W.value),Qn(Y.value)||(C=$<Y.value)}else{const $=u.valueAsDate||new Date(R),J=se=>new Date(new Date().toDateString()+" "+se),z=u.type=="time",re=u.type=="week";ur(W.value)&&R&&(G=z?J(R)>J(W.value):re?R>W.value:$>new Date(W.value)),ur(Y.value)&&R&&(C=z?J(R)<J(Y.value):re?R<Y.value:$<new Date(Y.value))}if((G||C)&&(V(!!G,W.message,Y.message,Fr.max,Fr.min),!t))return M(v[D].message),v}if((m||g)&&!j&&(ur(R)||i&&Array.isArray(R))){const G=Ga(m),C=Ga(g),W=!Qn(G.value)&&R.length>+G.value,Y=!Qn(C.value)&&R.length<+C.value;if((W||Y)&&(V(W,G.message,C.message),!t))return M(v[D].message),v}if(k&&!j&&ur(R)){const{value:G,message:C}=Ga(k);if(Si(G)&&!R.match(G)&&(v[D]={type:Fr.pattern,message:C,ref:u,...U(Fr.pattern,C)},!t))return M(C),v}if(O){if(Vt(O)){const G=await O(R,n),C=Pg(G,T);if(C&&(v[D]={...C,...U(Fr.validate,C.message)},!t))return M(C.message),v}else if(On(O)){let G={};for(const C in O){if(!Xn(G)&&!t)break;const W=Pg(await O[C](R,n),T,C);W&&(G={...W,...U(C,W.message)},M(W.message),t&&(v[D]=G))}if(!Xn(G)&&(v[D]={ref:T,...G},!t))return v}}return M(!0),v};const fP={mode:At.onSubmit,reValidateMode:At.onChange,shouldFocusError:!0};function mP(e={}){let r={...fP,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:Vt(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1};const t={};let a=On(r.defaultValues)||On(r.values)?pn(r.defaultValues||r.values)||{}:{},i=r.shouldUnregister?{}:pn(a),u={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,m=0;const g={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let p={...g};const y={array:Og(),state:Og()},k=r.criteriaMode===At.all,O=B=>H=>{clearTimeout(m),m=setTimeout(B,H)},D=async B=>{if(!r.disabled&&(g.isValid||p.isValid||B)){const H=r.resolver?Xn((await F()).errors):await j(t,!0);H!==n.isValid&&y.state.next({isValid:H})}},_=(B,H)=>{!r.disabled&&(g.isValidating||g.validatingFields||p.isValidating||p.validatingFields)&&((B||Array.from(d.mount)).forEach(X=>{X&&(H?Ze(n.validatingFields,X,H):xn(n.validatingFields,X))}),y.state.next({validatingFields:n.validatingFields,isValidating:!Xn(n.validatingFields)}))},x=(B,H=[],X,le,oe=!0,ae=!0)=>{if(le&&X&&!r.disabled){if(u.action=!0,ae&&Array.isArray(ie(t,B))){const ye=X(ie(t,B),le.argA,le.argB);oe&&Ze(t,B,ye)}if(ae&&Array.isArray(ie(n.errors,B))){const ye=X(ie(n.errors,B),le.argA,le.argB);oe&&Ze(n.errors,B,ye),cP(n.errors,B)}if((g.touchedFields||p.touchedFields)&&ae&&Array.isArray(ie(n.touchedFields,B))){const ye=X(ie(n.touchedFields,B),le.argA,le.argB);oe&&Ze(n.touchedFields,B,ye)}(g.dirtyFields||p.dirtyFields)&&(n.dirtyFields=Ns(a,i)),y.state.next({name:B,isDirty:V(B,H),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Ze(i,B,H)},R=(B,H)=>{Ze(n.errors,B,H),y.state.next({errors:n.errors})},T=B=>{n.errors=B,y.state.next({errors:n.errors,isValid:!1})},M=(B,H,X,le)=>{const oe=ie(t,B);if(oe){const ae=ie(i,B,dn(X)?ie(a,B):X);dn(ae)||le&&le.defaultChecked||H?Ze(i,B,H?ae:Fg(oe._f)):W(B,ae),u.mount&&D()}},v=(B,H,X,le,oe)=>{let ae=!1,ye=!1;const Ae={name:B};if(!r.disabled){if(!X||le){(g.isDirty||p.isDirty)&&(ye=n.isDirty,n.isDirty=Ae.isDirty=V(),ae=ye!==Ae.isDirty);const qe=zr(ie(a,B),H);ye=!!ie(n.dirtyFields,B),qe?xn(n.dirtyFields,B):Ze(n.dirtyFields,B,!0),Ae.dirtyFields=n.dirtyFields,ae=ae||(g.dirtyFields||p.dirtyFields)&&ye!==!qe}if(X){const qe=ie(n.touchedFields,B);qe||(Ze(n.touchedFields,B,X),Ae.touchedFields=n.touchedFields,ae=ae||(g.touchedFields||p.touchedFields)&&qe!==X)}ae&&oe&&y.state.next(Ae)}return ae?Ae:{}},P=(B,H,X,le)=>{const oe=ie(n.errors,B),ae=(g.isValid||p.isValid)&&bt(H)&&n.isValid!==H;if(r.delayError&&X?(c=O(()=>R(B,X)),c(r.delayError)):(clearTimeout(m),c=null,X?Ze(n.errors,B,X):xn(n.errors,B)),(X?!zr(oe,X):oe)||!Xn(le)||ae){const ye={...le,...ae&&bt(H)?{isValid:H}:{},errors:n.errors,name:B};n={...n,...ye},y.state.next(ye)}},F=async B=>{_(B,!0);const H=await r.resolver(i,r.context,sP(B||d.mount,t,r.criteriaMode,r.shouldUseNativeValidation));return _(B),H},N=async B=>{const{errors:H}=await F(B);if(B)for(const X of B){const le=ie(H,X);le?Ze(n.errors,X,le):xn(n.errors,X)}else n.errors=H;return H},j=async(B,H,X={valid:!0})=>{for(const le in B){const oe=B[le];if(oe){const{_f:ae,...ye}=oe;if(ae){const Ae=d.array.has(ae.name),qe=oe._f&&oP(oe._f);qe&&g.validatingFields&&_([le],!0);const An=await ed(oe,d.disabled,i,k,r.shouldUseNativeValidation&&!H,Ae);if(qe&&g.validatingFields&&_([le]),An[ae.name]&&(X.valid=!1,H))break;!H&&(ie(An,ae.name)?Ae?Hy(n.errors,An,ae.name):Ze(n.errors,ae.name,An[ae.name]):xn(n.errors,ae.name))}!Xn(ye)&&await j(ye,H,X)}}return X.valid},U=()=>{for(const B of d.unMount){const H=ie(t,B);H&&(H._f.refs?H._f.refs.every(X=>!Tu(X)):!Tu(H._f.ref))&&Le(B)}d.unMount=new Set},V=(B,H)=>!r.disabled&&(B&&H&&Ze(i,B,H),!zr(se(),a)),G=(B,H,X)=>By(B,d,{...u.mount?i:dn(H)?a:ur(B)?{[B]:H}:H},X,H),C=B=>Ui(ie(u.mount?i:a,B,r.shouldUnregister?ie(a,B,[]):[])),W=(B,H,X={})=>{const le=ie(t,B);let oe=H;if(le){const ae=le._f;ae&&(!ae.disabled&&Ze(i,B,Ly(H,ae)),oe=_i(ae.ref)&&Qn(H)?"":H,qy(ae.ref)?[...ae.ref.options].forEach(ye=>ye.selected=oe.includes(ye.value)):ae.refs?no(ae.ref)?ae.refs.forEach(ye=>{(!ye.defaultChecked||!ye.disabled)&&(Array.isArray(oe)?ye.checked=!!oe.find(Ae=>Ae===ye.value):ye.checked=oe===ye.value||!!oe)}):ae.refs.forEach(ye=>ye.checked=ye.value===oe):Zd(ae.ref)?ae.ref.value="":(ae.ref.value=oe,ae.ref.type||y.state.next({name:B,values:pn(i)})))}(X.shouldDirty||X.shouldTouch)&&v(B,oe,X.shouldTouch,X.shouldDirty,!0),X.shouldValidate&&re(B)},Y=(B,H,X)=>{for(const le in H){if(!H.hasOwnProperty(le))return;const oe=H[le],ae=B+"."+le,ye=ie(t,ae);(d.array.has(B)||On(oe)||ye&&!ye._f)&&!ga(oe)?Y(ae,oe,X):W(ae,oe,X)}},$=(B,H,X={})=>{const le=ie(t,B),oe=d.array.has(B),ae=pn(H);Ze(i,B,ae),oe?(y.array.next({name:B,values:pn(i)}),(g.isDirty||g.dirtyFields||p.isDirty||p.dirtyFields)&&X.shouldDirty&&y.state.next({name:B,dirtyFields:Ns(a,i),isDirty:V(B,ae)})):le&&!le._f&&!Qn(ae)?Y(B,ae,X):W(B,ae,X),Ju(B,d)&&y.state.next({...n}),y.state.next({name:u.mount?B:void 0,values:pn(i)})},J=async B=>{u.mount=!0;const H=B.target;let X=H.name,le=!0;const oe=ie(t,X),ae=qe=>{le=Number.isNaN(qe)||ga(qe)&&isNaN(qe.getTime())||zr(qe,ie(i,X,qe))},ye=za(r.mode),Ae=za(r.reValidateMode);if(oe){let qe,An;const Qt=H.type?Fg(oe._f):Ay(B),tt=B.type===wi.BLUR||B.type===wi.FOCUS_OUT,Qr=!iP(oe._f)&&!r.resolver&&!ie(n.errors,X)&&!oe._f.deps||dP(tt,ie(n.touchedFields,X),n.isSubmitted,Ae,ye),vr=Ju(X,d,tt);Ze(i,X,Qt),tt?(oe._f.onBlur&&oe._f.onBlur(B),c&&c(0)):oe._f.onChange&&oe._f.onChange(B);const kr=v(X,Qt,tt),Jr=!Xn(kr)||vr;if(!tt&&y.state.next({name:X,type:B.type,values:pn(i)}),Qr)return(g.isValid||p.isValid)&&(r.mode==="onBlur"?tt&&D():tt||D()),Jr&&y.state.next({name:X,...vr?{}:kr});if(!tt&&vr&&y.state.next({...n}),r.resolver){const{errors:br}=await F([X]);if(ae(Qt),le){const ea=Ag(n.errors,t,X),na=Ag(br,t,ea.name||X);qe=na.error,X=na.name,An=Xn(br)}}else _([X],!0),qe=(await ed(oe,d.disabled,i,k,r.shouldUseNativeValidation))[X],_([X]),ae(Qt),le&&(qe?An=!1:(g.isValid||p.isValid)&&(An=await j(t,!0)));le&&(oe._f.deps&&re(oe._f.deps),P(X,An,qe,kr))}},z=(B,H)=>{if(ie(n.errors,H)&&B.focus)return B.focus(),1},re=async(B,H={})=>{let X,le;const oe=ut(B);if(r.resolver){const ae=await N(dn(B)?B:oe);X=Xn(ae),le=B?!oe.some(ye=>ie(ae,ye)):X}else B?(le=(await Promise.all(oe.map(async ae=>{const ye=ie(t,ae);return await j(ye&&ye._f?{[ae]:ye}:ye)}))).every(Boolean),!(!le&&!n.isValid)&&D()):le=X=await j(t);return y.state.next({...!ur(B)||(g.isValid||p.isValid)&&X!==n.isValid?{}:{name:B},...r.resolver||!B?{isValid:X}:{},errors:n.errors}),H.shouldFocus&&!le&&Qa(t,z,B?oe:d.mount),le},se=B=>{const H={...u.mount?i:a};return dn(B)?H:ur(B)?ie(H,B):B.map(X=>ie(H,X))},de=(B,H)=>({invalid:!!ie((H||n).errors,B),isDirty:!!ie((H||n).dirtyFields,B),error:ie((H||n).errors,B),isValidating:!!ie(n.validatingFields,B),isTouched:!!ie((H||n).touchedFields,B)}),Te=B=>{B&&ut(B).forEach(H=>xn(n.errors,H)),y.state.next({errors:B?n.errors:{}})},Ee=(B,H,X)=>{const le=(ie(t,B,{_f:{}})._f||{}).ref,oe=ie(n.errors,B)||{},{ref:ae,message:ye,type:Ae,...qe}=oe;Ze(n.errors,B,{...qe,...H,ref:le}),y.state.next({name:B,errors:n.errors,isValid:!1}),X&&X.shouldFocus&&le&&le.focus&&le.focus()},Ge=(B,H)=>Vt(B)?y.state.subscribe({next:X=>B(G(void 0,H),X)}):G(B,H,!0),me=B=>y.state.subscribe({next:H=>{uP(B.name,H.name,B.exact)&&lP(H,B.formState||g,wn,B.reRenderRoot)&&B.callback({values:{...i},...n,...H})}}).unsubscribe,he=B=>(u.mount=!0,p={...p,...B.formState},me({...B,formState:p})),Le=(B,H={})=>{for(const X of B?ut(B):d.mount)d.mount.delete(X),d.array.delete(X),H.keepValue||(xn(t,X),xn(i,X)),!H.keepError&&xn(n.errors,X),!H.keepDirty&&xn(n.dirtyFields,X),!H.keepTouched&&xn(n.touchedFields,X),!H.keepIsValidating&&xn(n.validatingFields,X),!r.shouldUnregister&&!H.keepDefaultValue&&xn(a,X);y.state.next({values:pn(i)}),y.state.next({...n,...H.keepDirty?{isDirty:V()}:{}}),!H.keepIsValid&&D()},Ve=({disabled:B,name:H})=>{(bt(B)&&u.mount||B||d.disabled.has(H))&&(B?d.disabled.add(H):d.disabled.delete(H))},en=(B,H={})=>{let X=ie(t,B);const le=bt(H.disabled)||bt(r.disabled);return Ze(t,B,{...X||{},_f:{...X&&X._f?X._f:{ref:{name:B}},name:B,mount:!0,...H}}),d.mount.add(B),X?Ve({disabled:bt(H.disabled)?H.disabled:r.disabled,name:B}):M(B,!0,H.value),{...le?{disabled:H.disabled||r.disabled}:{},...r.progressive?{required:!!H.required,min:As(H.min),max:As(H.max),minLength:As(H.minLength),maxLength:As(H.maxLength),pattern:As(H.pattern)}:{},name:B,onChange:J,onBlur:J,ref:oe=>{if(oe){en(B,H),X=ie(t,B);const ae=dn(oe.value)&&oe.querySelectorAll&&oe.querySelectorAll("input,select,textarea")[0]||oe,ye=tP(ae),Ae=X._f.refs||[];if(ye?Ae.find(qe=>qe===ae):ae===X._f.ref)return;Ze(t,B,{_f:{...X._f,...ye?{refs:[...Ae.filter(Tu),ae,...Array.isArray(ie(a,B))?[{}]:[]],ref:{type:ae.type,name:B}}:{ref:ae}}}),M(B,!1,void 0,ae)}else X=ie(t,B,{}),X._f&&(X._f.mount=!1),(r.shouldUnregister||H.shouldUnregister)&&!(Py(d.array,B)&&u.action)&&d.unMount.add(B)}}},nn=()=>r.shouldFocusError&&Qa(t,z,d.mount),on=B=>{bt(B)&&(y.state.next({disabled:B}),Qa(t,(H,X)=>{const le=ie(t,X);le&&(H.disabled=le._f.disabled||B,Array.isArray(le._f.refs)&&le._f.refs.forEach(oe=>{oe.disabled=le._f.disabled||B}))},0,!1))},mn=(B,H)=>async X=>{let le;X&&(X.preventDefault&&X.preventDefault(),X.persist&&X.persist());let oe=pn(i);if(y.state.next({isSubmitting:!0}),r.resolver){const{errors:ae,values:ye}=await F();n.errors=ae,oe=ye}else await j(t);if(d.disabled.size)for(const ae of d.disabled)Ze(oe,ae,void 0);if(xn(n.errors,"root"),Xn(n.errors)){y.state.next({errors:{}});try{await B(oe,X)}catch(ae){le=ae}}else H&&await H({...n.errors},X),nn(),setTimeout(nn);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Xn(n.errors)&&!le,submitCount:n.submitCount+1,errors:n.errors}),le)throw le},Rn=(B,H={})=>{ie(t,B)&&(dn(H.defaultValue)?$(B,pn(ie(a,B))):($(B,H.defaultValue),Ze(a,B,pn(H.defaultValue))),H.keepTouched||xn(n.touchedFields,B),H.keepDirty||(xn(n.dirtyFields,B),n.isDirty=H.defaultValue?V(B,pn(ie(a,B))):V()),H.keepError||(xn(n.errors,B),g.isValid&&D()),y.state.next({...n}))},tn=(B,H={})=>{const X=B?pn(B):a,le=pn(X),oe=Xn(B),ae=oe?a:le;if(H.keepDefaultValues||(a=X),!H.keepValues){if(H.keepDirtyValues){const ye=new Set([...d.mount,...Object.keys(Ns(a,i))]);for(const Ae of Array.from(ye))ie(n.dirtyFields,Ae)?Ze(ae,Ae,ie(i,Ae)):$(Ae,ie(ae,Ae))}else{if(zd&&dn(B))for(const ye of d.mount){const Ae=ie(t,ye);if(Ae&&Ae._f){const qe=Array.isArray(Ae._f.refs)?Ae._f.refs[0]:Ae._f.ref;if(_i(qe)){const An=qe.closest("form");if(An){An.reset();break}}}}for(const ye of d.mount)$(ye,ie(ae,ye))}i=pn(ae),y.array.next({values:{...ae}}),y.state.next({values:{...ae}})}d={mount:H.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!g.isValid||!!H.keepIsValid||!!H.keepDirtyValues,u.watch=!!r.shouldUnregister,y.state.next({submitCount:H.keepSubmitCount?n.submitCount:0,isDirty:oe?!1:H.keepDirty?n.isDirty:!!(H.keepDefaultValues&&!zr(B,a)),isSubmitted:H.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:oe?{}:H.keepDirtyValues?H.keepDefaultValues&&i?Ns(a,i):n.dirtyFields:H.keepDefaultValues&&B?Ns(a,B):H.keepDirty?n.dirtyFields:{},touchedFields:H.keepTouched?n.touchedFields:{},errors:H.keepErrors?n.errors:{},isSubmitSuccessful:H.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Dn=(B,H)=>tn(Vt(B)?B(i):B,H),dt=(B,H={})=>{const X=ie(t,B),le=X&&X._f;if(le){const oe=le.refs?le.refs[0]:le.ref;oe.focus&&(oe.focus(),H.shouldSelect&&Vt(oe.select)&&oe.select())}},wn=B=>{n={...n,...B}},nt={control:{register:en,unregister:Le,getFieldState:de,handleSubmit:mn,setError:Ee,_subscribe:me,_runSchema:F,_focusError:nn,_getWatch:G,_getDirty:V,_setValid:D,_setFieldArray:x,_setDisabledField:Ve,_setErrors:T,_getFieldArray:C,_reset:tn,_resetDefaultValues:()=>Vt(r.defaultValues)&&r.defaultValues().then(B=>{Dn(B,r.resetOptions),y.state.next({isLoading:!1})}),_removeUnmounted:U,_disableForm:on,_subjects:y,_proxyFormState:g,get _fields(){return t},get _formValues(){return i},get _state(){return u},set _state(B){u=B},get _defaultValues(){return a},get _names(){return d},set _names(B){d=B},get _formState(){return n},get _options(){return r},set _options(B){r={...r,...B}}},subscribe:he,trigger:re,register:en,handleSubmit:mn,watch:Ge,setValue:$,getValues:se,reset:Dn,resetField:Rn,clearErrors:Te,unregister:Le,setError:Ee,setFocus:dt,getFieldState:de};return{...nt,formControl:nt}}var Yr=()=>{if(typeof crypto<"u"&&crypto.randomUUID)return crypto.randomUUID();const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const n=(Math.random()*16+e)%16|0;return(r=="x"?n:n&3|8).toString(16)})},Su=(e,r,n={})=>n.shouldFocus||dn(n.shouldFocus)?n.focusName||`${e}.${dn(n.focusIndex)?r:n.focusIndex}.`:"",Eu=(e,r)=>[...e,...ut(r)],Ou=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Du(e,r,n){return[...e.slice(0,r),...ut(n),...e.slice(r)]}var xu=(e,r,n)=>Array.isArray(e)?(dn(e[n])&&(e[n]=void 0),e.splice(n,0,e.splice(r,1)[0]),e):[],Ru=(e,r)=>[...ut(r),...ut(e)];function gP(e,r){let n=0;const t=[...e];for(const a of r)t.splice(a-n,1),n++;return Ui(t).length?t:[]}var Fu=(e,r)=>dn(r)?[]:gP(e,ut(r).sort((n,t)=>n-t)),Nu=(e,r,n)=>{[e[r],e[n]]=[e[n],e[r]]},Mg=(e,r,n)=>(e[r]=n,e);function pP(e){const r=Xt(),{control:n=r.control,name:t,keyName:a="id",shouldUnregister:i,rules:u}=e,[d,c]=b.useState(n._getFieldArray(t)),m=b.useRef(n._getFieldArray(t).map(Yr)),g=b.useRef(d),p=b.useRef(t),y=b.useRef(!1);p.current=t,g.current=d,n._names.array.add(t),u&&n.register(t,u),Wi(()=>n._subjects.array.subscribe({next:({values:P,name:F})=>{if(F===p.current||!F){const N=ie(P,p.current);Array.isArray(N)&&(c(N),m.current=N.map(Yr))}}}).unsubscribe,[n]);const k=b.useCallback(P=>{y.current=!0,n._setFieldArray(t,P)},[n,t]),O=(P,F)=>{const N=ut(pn(P)),j=Eu(n._getFieldArray(t),N);n._names.focus=Su(t,j.length-1,F),m.current=Eu(m.current,N.map(Yr)),k(j),c(j),n._setFieldArray(t,j,Eu,{argA:Ou(P)})},D=(P,F)=>{const N=ut(pn(P)),j=Ru(n._getFieldArray(t),N);n._names.focus=Su(t,0,F),m.current=Ru(m.current,N.map(Yr)),k(j),c(j),n._setFieldArray(t,j,Ru,{argA:Ou(P)})},_=P=>{const F=Fu(n._getFieldArray(t),P);m.current=Fu(m.current,P),k(F),c(F),!Array.isArray(ie(n._fields,t))&&Ze(n._fields,t,void 0),n._setFieldArray(t,F,Fu,{argA:P})},x=(P,F,N)=>{const j=ut(pn(F)),U=Du(n._getFieldArray(t),P,j);n._names.focus=Su(t,P,N),m.current=Du(m.current,P,j.map(Yr)),k(U),c(U),n._setFieldArray(t,U,Du,{argA:P,argB:Ou(F)})},R=(P,F)=>{const N=n._getFieldArray(t);Nu(N,P,F),Nu(m.current,P,F),k(N),c(N),n._setFieldArray(t,N,Nu,{argA:P,argB:F},!1)},T=(P,F)=>{const N=n._getFieldArray(t);xu(N,P,F),xu(m.current,P,F),k(N),c(N),n._setFieldArray(t,N,xu,{argA:P,argB:F},!1)},M=(P,F)=>{const N=pn(F),j=Mg(n._getFieldArray(t),P,N);m.current=[...j].map((U,V)=>!U||V===P?Yr():m.current[V]),k(j),c([...j]),n._setFieldArray(t,j,Mg,{argA:P,argB:N},!0,!1)},v=P=>{const F=ut(pn(P));m.current=F.map(Yr),k([...F]),c([...F]),n._setFieldArray(t,[...F],N=>N,{},!0,!1)};return b.useEffect(()=>{if(n._state.action=!1,Ju(t,n._names)&&n._subjects.state.next({...n._formState}),y.current&&(!za(n._options.mode).isOnSubmit||n._formState.isSubmitted)&&!za(n._options.reValidateMode).isOnSubmit)if(n._options.resolver)n._runSchema([t]).then(P=>{const F=ie(P.errors,t),N=ie(n._formState.errors,t);(N?!F&&N.type||F&&(N.type!==F.type||N.message!==F.message):F&&F.type)&&(F?Ze(n._formState.errors,t,F):xn(n._formState.errors,t),n._subjects.state.next({errors:n._formState.errors}))});else{const P=ie(n._fields,t);P&&P._f&&!(za(n._options.reValidateMode).isOnSubmit&&za(n._options.mode).isOnSubmit)&&ed(P,n._names.disabled,n._formValues,n._options.criteriaMode===At.all,n._options.shouldUseNativeValidation,!0).then(F=>!Xn(F)&&n._subjects.state.next({errors:Hy(n._formState.errors,F,t)}))}n._subjects.state.next({name:t,values:pn(n._formValues)}),n._names.focus&&Qa(n._fields,(P,F)=>{if(n._names.focus&&F.startsWith(n._names.focus)&&P.focus)return P.focus(),1}),n._names.focus="",n._setValid(),y.current=!1},[d,t,n]),b.useEffect(()=>(!ie(n._formValues,t)&&n._setFieldArray(t),()=>{const P=(F,N)=>{const j=ie(n._fields,F);j&&j._f&&(j._f.mount=N)};n._options.shouldUnregister||i?n.unregister(t):P(t,!1)}),[t,n,a,i]),{swap:b.useCallback(R,[k,t,n]),move:b.useCallback(T,[k,t,n]),prepend:b.useCallback(D,[k,t,n]),append:b.useCallback(O,[k,t,n]),remove:b.useCallback(_,[k,t,n]),insert:b.useCallback(x,[k,t,n]),update:b.useCallback(M,[k,t,n]),replace:b.useCallback(v,[k,t,n]),fields:b.useMemo(()=>d.map((P,F)=>({...P,[a]:m.current[F]||Yr()})),[d,a])}}function hP(e={}){const r=b.useRef(void 0),n=b.useRef(void 0),[t,a]=b.useState({isDirty:!1,isValidating:!1,isLoading:Vt(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Vt(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:t},e.defaultValues&&!Vt(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:u,...d}=mP(e);r.current={...d,formState:t}}const i=r.current.control;return i._options=e,Wi(()=>{const u=i._subscribe({formState:i._proxyFormState,callback:()=>a({...i._formState}),reRenderRoot:!0});return a(d=>({...d,isReady:!0})),i._formState.isReady=!0,u},[i]),b.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),b.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),b.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),b.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),b.useEffect(()=>{if(i._proxyFormState.isDirty){const u=i._getDirty();u!==t.isDirty&&i._subjects.state.next({isDirty:u})}},[i,t.isDirty]),b.useEffect(()=>{e.values&&!zr(e.values,n.current)?(i._reset(e.values,i._options.resetOptions),n.current=e.values,a(u=>({...u}))):i._resetDefaultValues()},[i,e.values]),b.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),r.current.formState=My(t,i),r.current}function yP(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bg={exports:{}},Ps={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function vP(){if(qg)return Ps;qg=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var u=null;if(i!==void 0&&(u=""+i),a.key!==void 0&&(u=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:u,ref:a!==void 0?a:null,props:i}}return Ps.Fragment=r,Ps.jsx=n,Ps.jsxs=n,Ps}var jg;function kP(){return jg||(jg=1,Bg.exports=vP()),Bg.exports}var qn=kP();const bP=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:qn.jsx(_h,{variant:"warning",size:"small",children:qn.jsx(Bt,{gap:"2",children:b.Children.map(e,r=>qn.jsx(fn,{size:"small",children:r},JT(r)?r.key:r))})}),to={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};_t(to);const Ei="#B7B1A9",Vy=4,wP=(e,r,n)=>`
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
`,_P=(e,r,n)=>`
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
`,TP=(e,r,n,t)=>r?_P(e,n,t):wP(e,n,t),SP=(e,r,n)=>n?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,EP=({children:e,alignOffset:r=0,alignLeft:n=!1,marginTop:t=0,marginLeft:a=0,hideBorder:i=!1})=>qn.jsxs(qn.Fragment,{children:[qn.jsx("style",{dangerouslySetInnerHTML:{__html:TP(r,n,t,a)}}),qn.jsx("div",{className:SP(r,n,i),children:e})]});var Ig={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Cg;function OP(){return Cg||(Cg=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var i="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(i=a(i,t.call(this,d)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var u="";for(var d in i)r.call(i,d)&&i[d]&&(u=a(u,this&&this[d]||d));return u}function a(i,u){return u?i?i+" "+u:i+u:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Ig)),Ig.exports}var DP=OP();const Jd=yP(DP),xP="_borderbox_1vkvn_1",RP="_error_1vkvn_5",FP="_warning_1vkvn_8",NP={borderbox:xP,error:RP,warning:FP},AP=Jd.bind(NP),PP=({error:e=!1,className:r,children:n})=>qn.jsx(by,{padding:"4",className:AP("borderbox",{error:e},r),children:n}),MP="_aksjonspunkt_kn1hn_1",BP="_erAksjonspunktApent_kn1hn_4",qP="_erIkkeGodkjentAvBeslutter_kn1hn_8",jP={aksjonspunkt:MP,erAksjonspunktApent:BP,erIkkeGodkjentAvBeslutter:qP};Jd.bind(jP);const IP=({dateString:e,year:r,month:n,day:t})=>qn.jsx(qn.Fragment,{children:dr(e,{year:r,month:n,day:t})});_t(to);_t(to);const CP=({withoutBorder:e,error:r,children:n,className:t})=>e?n:qn.jsx(PP,{error:r,className:t,children:n}),nd=({merknaderFraBeslutter:e,title:r,children:n,withoutBorder:t=!1,className:a=""})=>{const i=!!(e&&e.notAccepted);return qn.jsxs(CP,{withoutBorder:t&&!i,error:i,className:a,children:[r&&qn.jsxs(qn.Fragment,{children:[qn.jsx(jn,{size:"small",children:r}),qn.jsx("div",{style:{marginBottom:"20px"}})]}),n]})},LP="_divider_1t980_1",$P="_dividerParagraf_1t980_8",HP="_leftPanel_1t980_11",VP="_rightPanel_1t980_14",UP={divider:LP,dividerParagraf:$P,leftPanel:HP,rightPanel:VP};Jd.bind(UP);const Uy=()=>qn.jsx("span",{"data-testid":"editedIcon",children:qn.jsx(BS,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});_t(to);_t(to);function WP(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lg={exports:{}},Ms={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function GP(){if($g)return Ms;$g=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var u=null;if(i!==void 0&&(u=""+i),a.key!==void 0&&(u=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:u,ref:a!==void 0?a:null,props:i}}return Ms.Fragment=r,Ms.jsx=n,Ms.jsxs=n,Ms}var Hg;function YP(){return Hg||(Hg=1,Lg.exports=GP()),Lg.exports}var Ne=YP();const Yi=e=>e.reduce((r,n,t)=>({...r,[t]:a=>n(a)||!0}),{}),zi=(e,r)=>{const n=r.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e);return n==null?void 0:n.message};var td={exports:{}},zP=td.exports,Vg;function KP(){return Vg||(Vg=1,function(e,r){(function(n,t){e.exports=t()})(zP,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,u=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,c={},m=function(_){return(_=+_)+(_>68?1900:2e3)},g=function(_){return function(x){this[_]=+x}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(x){if(!x||x==="Z")return 0;var R=x.match(/([+-]|\d\d)/g),T=60*R[1]+(+R[2]||0);return T===0?0:R[0]==="+"?-T:T}(_)}],y=function(_){var x=c[_];return x&&(x.indexOf?x:x.s.concat(x.f))},k=function(_,x){var R,T=c.meridiem;if(T){for(var M=1;M<=24;M+=1)if(_.indexOf(T(M,0,x))>-1){R=M>12;break}}else R=_===(x?"pm":"PM");return R},O={A:[d,function(_){this.afternoon=k(_,!1)}],a:[d,function(_){this.afternoon=k(_,!0)}],Q:[a,function(_){this.month=3*(_-1)+1}],S:[a,function(_){this.milliseconds=100*+_}],SS:[i,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[u,g("seconds")],ss:[u,g("seconds")],m:[u,g("minutes")],mm:[u,g("minutes")],H:[u,g("hours")],h:[u,g("hours")],HH:[u,g("hours")],hh:[u,g("hours")],D:[u,g("day")],DD:[i,g("day")],Do:[d,function(_){var x=c.ordinal,R=_.match(/\d+/);if(this.day=R[0],x)for(var T=1;T<=31;T+=1)x(T).replace(/\[|\]/g,"")===_&&(this.day=T)}],w:[u,g("week")],ww:[i,g("week")],M:[u,g("month")],MM:[i,g("month")],MMM:[d,function(_){var x=y("months"),R=(y("monthsShort")||x.map(function(T){return T.slice(0,3)})).indexOf(_)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[d,function(_){var x=y("months").indexOf(_)+1;if(x<1)throw new Error;this.month=x%12||x}],Y:[/[+-]?\d+/,g("year")],YY:[i,function(_){this.year=m(_)}],YYYY:[/\d{4}/,g("year")],Z:p,ZZ:p};function D(_){var x,R;x=_,R=c&&c.formats;for(var T=(_=x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(U,V,G){var C=G&&G.toUpperCase();return V||R[G]||n[G]||R[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(W,Y,$){return Y||$.slice(1)})})).match(t),M=T.length,v=0;v<M;v+=1){var P=T[v],F=O[P],N=F&&F[0],j=F&&F[1];T[v]=j?{regex:N,parser:j}:P.replace(/^\[|\]$/g,"")}return function(U){for(var V={},G=0,C=0;G<M;G+=1){var W=T[G];if(typeof W=="string")C+=W.length;else{var Y=W.regex,$=W.parser,J=U.slice(C),z=Y.exec(J)[0];$.call(V,z),U=U.replace(z,"")}}return function(re){var se=re.afternoon;if(se!==void 0){var de=re.hours;se?de<12&&(re.hours+=12):de===12&&(re.hours=0),delete re.afternoon}}(V),V}}return function(_,x,R){R.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(m=_.parseTwoDigitYear);var T=x.prototype,M=T.parse;T.parse=function(v){var P=v.date,F=v.utc,N=v.args;this.$u=F;var j=N[1];if(typeof j=="string"){var U=N[2]===!0,V=N[3]===!0,G=U||V,C=N[2];V&&(C=N[2]),c=this.$locale(),!U&&C&&(c=R.Ls[C]),this.$d=function(J,z,re,se){try{if(["x","X"].indexOf(z)>-1)return new Date((z==="X"?1e3:1)*J);var de=D(z)(J),Te=de.year,Ee=de.month,Ge=de.day,me=de.hours,he=de.minutes,Le=de.seconds,Ve=de.milliseconds,en=de.zone,nn=de.week,on=new Date,mn=Ge||(Te||Ee?1:on.getDate()),Rn=Te||on.getFullYear(),tn=0;Te&&!Ee||(tn=Ee>0?Ee-1:on.getMonth());var Dn,dt=me||0,wn=he||0,ct=Le||0,nt=Ve||0;return en?new Date(Date.UTC(Rn,tn,mn,dt,wn,ct,nt+60*en.offset*1e3)):re?new Date(Date.UTC(Rn,tn,mn,dt,wn,ct,nt)):(Dn=new Date(Rn,tn,mn,dt,wn,ct,nt),nn&&(Dn=se(Dn).week(nn).toDate()),Dn)}catch{return new Date("")}}(P,j,F,R),this.init(),C&&C!==!0&&(this.$L=this.locale(C).$L),G&&P!=this.format(j)&&(this.$d=new Date("")),c={}}else if(j instanceof Array)for(var W=j.length,Y=1;Y<=W;Y+=1){N[1]=j[Y-1];var $=R.apply(this,N);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}Y===W&&(this.$d=new Date(""))}else M.call(this,v)}}})}(td)),td.exports}var XP=KP();const ZP=WP(XP),QP="_textarea_1snk6_1",JP="_readOnlyField_1snk6_7",Ug={textarea:QP,readOnlyField:JP},eM=e=>e!=null&&e!=="",ec=({label:e,value:r,isEdited:n=!1,type:t,hideLabel:a,size:i})=>eM(r)?Ne.jsxs(Bt,{gap:"1",children:[e&&!a&&Ne.jsx(jn,{size:i,children:e}),Ne.jsxs(zt,{gap:"2",align:"center",wrap:!1,children:[Ne.jsx(zp,{className:t==="textarea"?Ug.textarea:Ug.readOnlyField,size:i,children:r}),n&&Ne.jsx(Uy,{})]})]}):null;lt.extend(ZP);const Oi=({label:e,description:r,validate:n=[],hideLabel:t=!1,isReadOnly:a=!1,onChange:i,disabledDays:u,isEdited:d,defaultMonth:c,fromDate:m,toDate:g,size:p="small",...y})=>{const{name:k,control:O,disabled:D}=y,{formState:{errors:_}}=Xt(),{field:x}=Gi({name:k,control:O,rules:{validate:E.useMemo(()=>Yi(n),[n])}}),R=x.value?lt(x.value,Ha,!0).format(Is):"",[T,M]=E.useState(R),{datepickerProps:v,inputProps:P}=sA({onDateChange:j=>{if(j!==void 0){const U=lt(j).format(Ha);i&&i(U),x.onChange(U),M(lt(U,Ha,!0).format(Is))}},defaultSelected:x.value?lt(x.value,Ha,!0).toDate():void 0,defaultMonth:c||(!x.value&&g?g:void 0),disabled:u}),F=E.useCallback(j=>{const U=lt(j.target.value,Is,!0).format(Ha),V=U!=="Invalid Date";M(j.target.value),i&&i(V?U:j.target.value),x.onChange(V?U:j.target.value)},[M,i,x]);if(a)return Ne.jsx(ec,{label:e,value:x.value?lt(x.value,Ha,!0).format(Is):void 0,isEdited:d,hideLabel:t,size:p});const N={...v,fromDate:m,toDate:g,dropdownCaption:m&&g?!0:void 0};return Ne.jsx(bi,{...N,children:Ne.jsx(bi.Input,{...P,hideLabel:t,onChange:F,value:T,size:p,label:e,description:r,disabled:D,error:zi(_,k)})})},nM=({name:e,control:r,label:n,validate:t=[],readOnly:a=!1,type:i,shouldValidateOnBlur:u=!1,onBlur:d,onChange:c,description:m,autoFocus:g,parse:p=v=>v,format:y=v=>v,normalizeOnBlur:k,isEdited:O,maxLength:D,autoComplete:_=!1,disabled:x,className:R,hideLabel:T,...M})=>{const{formState:{errors:v},trigger:P}=Xt(),{field:F}=Gi({name:e,control:r,rules:{validate:E.useMemo(()=>Yi(t),[t])}});return a?Ne.jsx(ec,{label:n,value:F.value,isEdited:O,hideLabel:T,size:M.size}):Ne.jsx(KA,{size:"small",hideLabel:T,description:m,label:n,error:zi(v,e),...F,value:F.value?y(F.value):"",autoFocus:g,autoComplete:_?void 0:"off",maxLength:D,disabled:x,type:i,className:R,onChange:N=>{const j=N.currentTarget.value?p(N.currentTarget.value):null;return c&&c(j),F.onChange(j)},onBlur:async N=>{var j,U,V,G;if(F.onBlur(),u){const C=await P();d&&C&&d((j=N==null?void 0:N.target)==null?void 0:j.value)}else d&&d((U=N==null?void 0:N.target)==null?void 0:U.value);k&&F.onChange((V=N==null?void 0:N.target)!=null&&V.value?k(p((G=N==null?void 0:N.target)==null?void 0:G.value)):null)},...M})},tM="_hideRadioLabels_1u3xf_1",rM={hideRadioLabels:tM},aM=({label:e,description:r,validate:n=[],radios:t,onChange:a,isReadOnly:i=!1,isHorizontal:u=!1,parse:d=O=>O,isTrueOrFalseSelection:c=!1,hideLegend:m=!1,hideRadioLabels:g=!1,isEdited:p=!1,size:y="small",...k})=>{const{name:O,control:D,disabled:_}=k,{formState:{errors:x}}=Xt(),{field:R}=Gi({name:O,control:D,rules:{validate:E.useMemo(()=>Yi(n),[n])}}),T=c?v=>v==="true":d,M=Ne.jsxs(zt,{justify:"center",gap:"2",children:[e,i&&p&&Ne.jsx(Uy,{})]});return Ne.jsxs(jA,{name:O,value:R.value!==void 0?R.value:null,onChange:v=>{a&&a(v),R.onChange(v)},size:y,legend:M,description:r,error:zi(x,O),className:g?rM.hideRadioLabels:"",hideLegend:m,children:[!u&&t.map(v=>Ne.jsxs(E.Fragment,{children:[Ne.jsx(wg,{size:y,value:T(v.value),disabled:v.disabled||_||i,children:v.label}),R.value===T(v.value)&&v.element]},v.value)),u&&Ne.jsxs(Ne.Fragment,{children:[Ne.jsx(zt,{gap:"4",children:t.map(v=>Ne.jsx(wg,{size:y,value:T(v.value),disabled:v.disabled||_||i,children:v.label},v.value))}),t.filter(v=>R.value===T(v.value)).map(v=>Ne.jsx(E.Fragment,{children:v.element},v.value))]})]})},sM="_textAreaFieldWithBadges_bdz0b_1",oM="_etikettWrapper_bdz0b_4",Wg={textAreaFieldWithBadges:sM,etikettWrapper:oM},iM=({name:e,control:r,label:n,readOnly:t,maxLength:a,badges:i,validate:u=[],parse:d=k=>k,className:c,description:m,isEdited:g,size:p="small",...y})=>{const{formState:{errors:k}}=Xt(),{field:O}=Gi({name:e,control:r,rules:{validate:E.useMemo(()=>Yi(u),[u])}});return t?Ne.jsx(ec,{size:p,label:n,value:O.value,type:"textarea",isEdited:g,hideLabel:y.hideLabel}):Ne.jsxs("div",{className:i?Wg.textAreaFieldWithBadges:null,children:[i&&Ne.jsx("div",{className:Wg.etikettWrapper,children:i.map(({type:D,titleText:_})=>Ne.jsx(Xu,{variant:D,size:"small",children:_},_))}),Ne.jsx(YA,{size:p,label:n,description:m,className:c,autoComplete:"off",...O,onChange:D=>O.onChange(D.currentTarget.value!==""?d(D.currentTarget.value):null),value:O.value?O.value:"",error:zi(k,e),maxLength:a,...y})]})},lM=({formMethods:e,onSubmit:r,children:n,className:t,setDataOnUnmount:a})=>{const{handleSubmit:i,getValues:u}=e;return E.useEffect(()=>()=>{a&&a(u())},[]),Ne.jsx(QA,{...e,children:Ne.jsx("form",{className:t,onSubmit:r?i(d=>r(d)):void 0,children:n})})},uM="_addCircleIcon_bm9jq_1",dM="_imageText_bm9jq_2",cM="_addPeriode_bm9jq_7",Au={addCircleIcon:uM,imageText:dM,addPeriode:cM};function Gg(e,r){return()=>{e(r)}}function fM(e,r){return({key:n})=>{n==="Enter"&&e(r)}}const mM=(e,r)=>n=>{if(e>0)return Ne.jsx(Yt,{className:n,icon:Ne.jsx(Us,{"aria-hidden":!0}),type:"button",onClick:()=>{r(e)}})},gM=({fields:e,readOnly:r=!0,titleText:n,bodyText:t,emptyPeriodTemplate:a={periodeFom:"",periodeTom:""},shouldShowAddButton:i=!0,createAddButtonInsteadOfImageLink:u=!1,children:d,remove:c,append:m})=>Ne.jsxs(Dy,{legend:n,children:[e.map((g,p)=>d(g,p,mM(p,c))),i&&Ne.jsxs(Ne.Fragment,{children:[!u&&!r&&Ne.jsxs("div",{onClick:Gg(m,a),onKeyDown:fM(m,a),className:Au.addPeriode,role:"button",tabIndex:0,children:[Ne.jsx($m,{className:Au.addCircleIcon,title:t}),Ne.jsx(Ni,{className:Au.imageText,children:t})]}),u&&!r&&Ne.jsx(Yt,{icon:Ne.jsx($m,{"aria-hidden":!0}),type:"button",onClick:Gg(m,a),children:t}),Ne.jsx("div",{style:{marginBottom:"16px"}})]})]});function Wy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rd={exports:{}},pM=rd.exports,Yg;function hM(){return Yg||(Yg=1,function(e,r){(function(n,t){e.exports=t()})(pM,function(){return function(n,t){t.prototype.isSameOrAfter=function(a,i){return this.isSame(a,i)||this.isAfter(a,i)}}})}(rd)),rd.exports}var yM=hM();const vM=Wy(yM);var ad={exports:{}},kM=ad.exports,zg;function bM(){return zg||(zg=1,function(e,r){(function(n,t){e.exports=t()})(kM,function(){return function(n,t){t.prototype.isSameOrBefore=function(a,i){return this.isSame(a,i)||this.isBefore(a,i)}}})}(ad)),ad.exports}var wM=bM();const _M=Wy(wM),TM="Dato må være før eller lik {limit}",SM="Dato må være etter eller lik {limit}",EM="Perioder kan ikke overlappe i tid",OM="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",DM="Dato må være lik {value}",xM="Dato må skrives slik: dd.mm.åååå",RM="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",FM="Tallet kan ikke inneholde mer enn to desimaler",NM="Tallet kan ikke ha desimaler",AM="Feltet kan kun inneholde tall",PM="Ugyldig fødselsnummer",MM="Feltet må være et fødselsnummer (11 siffer)",BM="Ugyldig organisasjonsnummer.",qM="Ugyldig organisasjonsnummer eller fødselsnummer",jM="Startdato må være før eller lik sluttdato",IM="Periode er utenfor opptjeningsperioden",CM="Ugyldig saksnummer eller fødselsnummer",LM="Feltet inneholder ugyldige tegn: {text}",$M="Feltet inneholder en ugyldig verdi: {value}",HM="Feltet kan ikke inneholde mellomrom",VM="Feltet må fylles ut",UM="Du kan skrive maksimalt {length} tegn",WM="Du må skrive minst {length} tegn",GM="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",YM="Feltet må være mindre eller lik {length}",zM="Feltet må være større eller lik {length}",KM="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",XM={DateNotBeforeOrEqual:TM,DateNotAfterOrEqual:SM,DateRangesOverlapping:EM,DateRangesOverlappingPeriodTypes:OM,DatesNotEqual:DM,InvalidDate:xM,InvalidDatesInPeriod:RM,InvalidDecimal:FM,InvalidInteger:NM,InvalidNumber:AM,InvalidFodselsnr:PM,InvalidFodselsnrFormat:MM,InvalidOrgnr:BM,InvalidOrgnrOrFodselsnr:qM,InvalidPeriod:jM,InvalidPeriodRange:IM,InvalidSaksnrOrFodselsnrFormat:CM,InvalidText:LM,InvalidValue:$M,IllegalWhiteSpace:HM,IsRequired:VM,MaxLength:UM,MinLength:WM,MaxLengthOrFodselsnr:GM,MaxValue:YM,MinValue:zM,SammeFodselsnrSomSoker:KM},{formatMessage:yr}=_t(XM),ZM=e=>yr({id:"DateNotBeforeOrEqual"},{limit:e}),QM=()=>yr({id:"InvalidDate"}),JM=e=>yr({id:"InvalidInteger"},{text:e}),eB=e=>yr({id:"InvalidNumber"},{text:e}),nB=e=>yr({id:"InvalidText"},{text:e}),tB=()=>yr({id:"IsRequired"}),rB=e=>yr({id:"MaxLength"},{length:e}),aB=e=>yr({id:"MinLength"},{length:e}),sB=e=>yr({id:"MaxValue"},{length:e}),oB=e=>yr({id:"MinValue"},{length:e}),iB=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,lB=/^\d+([,.]\d+)?$/,uB=/^\s*\d+\s*$/,dB=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,cB=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Oa=e=>e==null||e.toString().trim().length===0,fB=()=>lt().startOf("day");lt.extend(vM);lt.extend(_M);const Ja=e=>Oa(e)?tB():void 0,mB=e=>r=>Oa(r)||r.toString().trim().length>=e?null:aB(e),gB=e=>r=>Oa(r)||r.toString().trim().length<=e?null:rB(e),pB=e=>r=>Gy(r)>=e?null:oB(e),hB=e=>r=>Gy(r)<=e?null:sB(e),Gy=e=>typeof e=="string"?Number(e):e,yB=e=>Oa(e)||lB.test(e.toString())?null:eB(e.toString()),vB=e=>Oa(e)||uB.test(e.toString())?null:JM(e.toString()),kB=e=>yB(e)||vB(e),Di=(e="")=>Oa(e)||iB.test(e)?null:QM(),bB=e=>r=>{const n=lt(e).endOf("day");return Oa(r)||lt(r).isSameOrBefore(n)?null:ZM(n.format(Is))},Kg=e=>bB(fB())(e),wB=e=>{if(!dB.test(e)){const r=e.replace(cB,"");return nB(r.replace(/[\t]/g,"Tabulatortegn"))}return null},_B=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const r=document.createAttribute("tabindex");r.value="-1";const n=e[0];n.setAttributeNode(r),document.activeElement.blur(),n.focus()}},300)},ro={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Pu=_t(ro),TB=mB(3),SB=gB(1500),qr=({isReadOnly:e,isSubmittable:r,hasBegrunnelse:n,label:t,hasReadOnlyLabel:a=!1,hasVurderingText:i=!1,name:u="begrunnelse"})=>{const d=i?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",c=()=>e?a?Pu.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":t??Pu.formatMessage({id:d});return Q.jsx(Fi,{value:Pu,children:(r||n)&&Q.jsx(iM,{name:u,label:c(),validate:[Ja,TB,SB,wB],maxLength:1500,readOnly:e})})},EB=e=>{var r;return e&&Array.isArray(e)?((r=e[0])==null?void 0:r.begrunnelse)??"":e&&!Array.isArray(e)&&e.begrunnelse?e.begrunnelse:""};qr.initialValues=e=>({begrunnelse:eS(EB(e)??void 0)});qr.transformValues=e=>({begrunnelse:iS(e.begrunnelse)});qr.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const OB=_t(ro),DB=(e,r,n)=>!n||r?!0:!e,Yy=({isReadOnly:e,isSubmittable:r,buttonText:n,onClick:t,isSubmitting:a,isDirty:i})=>Q.jsx(Fi,{value:OB,children:!e&&Q.jsx("div",{children:Q.jsxs(Yt,{size:"small",variant:"primary",loading:a,disabled:DB(i,a,r),onClick:t||_B,type:t?"button":"submit",children:[!!n&&n,!n&&Q.jsx(yn,{id:"SubmitButton.ConfirmInformation"})]})})});Yy.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};_t(ro);const zy=e=>e!=null,Mu=(e,r)=>zy(r)&&e!==r;var Ls={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var xB=Ls.exports,Xg;function RB(){return Xg||(Xg=1,function(e,r){(function(){var n,t="4.17.21",a=200,i="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",d="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,g="__lodash_placeholder__",p=1,y=2,k=4,O=1,D=2,_=1,x=2,R=4,T=8,M=16,v=32,P=64,F=128,N=256,j=512,U=30,V="...",G=800,C=16,W=1,Y=2,$=3,J=1/0,z=9007199254740991,re=17976931348623157e292,se=NaN,de=4294967295,Te=de-1,Ee=de>>>1,Ge=[["ary",F],["bind",_],["bindKey",x],["curry",T],["curryRight",M],["flip",j],["partial",v],["partialRight",P],["rearg",N]],me="[object Arguments]",he="[object Array]",Le="[object AsyncFunction]",Ve="[object Boolean]",en="[object Date]",nn="[object DOMException]",on="[object Error]",mn="[object Function]",Rn="[object GeneratorFunction]",tn="[object Map]",Dn="[object Number]",dt="[object Null]",wn="[object Object]",ct="[object Promise]",nt="[object Proxy]",B="[object RegExp]",H="[object Set]",X="[object String]",le="[object Symbol]",oe="[object Undefined]",ae="[object WeakMap]",ye="[object WeakSet]",Ae="[object ArrayBuffer]",qe="[object DataView]",An="[object Float32Array]",Qt="[object Float64Array]",tt="[object Int8Array]",Qr="[object Int16Array]",vr="[object Int32Array]",kr="[object Uint8Array]",Jr="[object Uint8ClampedArray]",br="[object Uint16Array]",ea="[object Uint32Array]",na=/\b__p \+= '';/g,Re=/\b(__p \+=) '' \+/g,an=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ke=/&(?:amp|lt|gt|quot|#39);/g,It=/[&<>"']/g,ft=RegExp(Ke.source),Da=RegExp(It.source),Pn=/<%-([\s\S]+?)%>/g,Tt=/<%([\s\S]+?)%>/g,$e=/<%=([\s\S]+?)%>/g,Qi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ji=/^\w*$/,el=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ta=/[\\^$.*+?()[\]{}|]/g,gs=RegExp(ta.source),nl=/^\s+/,xv=/\s/,Rv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Fv=/\{\n\/\* \[wrapped with (.+)\] \*/,Nv=/,? & /,Av=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Pv=/[()=,{}\[\]\/\s]/,Mv=/\\(\\)?/g,Bv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ic=/\w*$/,qv=/^[-+]0x[0-9a-f]+$/i,jv=/^0b[01]+$/i,Iv=/^\[object .+?Constructor\]$/,Cv=/^0o[0-7]+$/i,Lv=/^(?:0|[1-9]\d*)$/,$v=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lo=/($^)/,Hv=/['\n\r\u2028\u2029\\]/g,uo="\\ud800-\\udfff",Vv="\\u0300-\\u036f",Uv="\\ufe20-\\ufe2f",Wv="\\u20d0-\\u20ff",lc=Vv+Uv+Wv,uc="\\u2700-\\u27bf",dc="a-z\\xdf-\\xf6\\xf8-\\xff",Gv="\\xac\\xb1\\xd7\\xf7",Yv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",zv="\\u2000-\\u206f",Kv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",cc="A-Z\\xc0-\\xd6\\xd8-\\xde",fc="\\ufe0e\\ufe0f",mc=Gv+Yv+zv+Kv,tl="['’]",Xv="["+uo+"]",gc="["+mc+"]",co="["+lc+"]",pc="\\d+",Zv="["+uc+"]",hc="["+dc+"]",yc="[^"+uo+mc+pc+uc+dc+cc+"]",rl="\\ud83c[\\udffb-\\udfff]",Qv="(?:"+co+"|"+rl+")",vc="[^"+uo+"]",al="(?:\\ud83c[\\udde6-\\uddff]){2}",sl="[\\ud800-\\udbff][\\udc00-\\udfff]",xa="["+cc+"]",kc="\\u200d",bc="(?:"+hc+"|"+yc+")",Jv="(?:"+xa+"|"+yc+")",wc="(?:"+tl+"(?:d|ll|m|re|s|t|ve))?",_c="(?:"+tl+"(?:D|LL|M|RE|S|T|VE))?",Tc=Qv+"?",Sc="["+fc+"]?",ek="(?:"+kc+"(?:"+[vc,al,sl].join("|")+")"+Sc+Tc+")*",nk="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tk="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ec=Sc+Tc+ek,rk="(?:"+[Zv,al,sl].join("|")+")"+Ec,ak="(?:"+[vc+co+"?",co,al,sl,Xv].join("|")+")",sk=RegExp(tl,"g"),ok=RegExp(co,"g"),ol=RegExp(rl+"(?="+rl+")|"+ak+Ec,"g"),ik=RegExp([xa+"?"+hc+"+"+wc+"(?="+[gc,xa,"$"].join("|")+")",Jv+"+"+_c+"(?="+[gc,xa+bc,"$"].join("|")+")",xa+"?"+bc+"+"+wc,xa+"+"+_c,tk,nk,pc,rk].join("|"),"g"),lk=RegExp("["+kc+uo+lc+fc+"]"),uk=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,dk=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ck=-1,ln={};ln[An]=ln[Qt]=ln[tt]=ln[Qr]=ln[vr]=ln[kr]=ln[Jr]=ln[br]=ln[ea]=!0,ln[me]=ln[he]=ln[Ae]=ln[Ve]=ln[qe]=ln[en]=ln[on]=ln[mn]=ln[tn]=ln[Dn]=ln[wn]=ln[B]=ln[H]=ln[X]=ln[ae]=!1;var sn={};sn[me]=sn[he]=sn[Ae]=sn[qe]=sn[Ve]=sn[en]=sn[An]=sn[Qt]=sn[tt]=sn[Qr]=sn[vr]=sn[tn]=sn[Dn]=sn[wn]=sn[B]=sn[H]=sn[X]=sn[le]=sn[kr]=sn[Jr]=sn[br]=sn[ea]=!0,sn[on]=sn[mn]=sn[ae]=!1;var fk={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},mk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gk={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},pk={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},hk=parseFloat,yk=parseInt,Oc=typeof Zo=="object"&&Zo&&Zo.Object===Object&&Zo,vk=typeof self=="object"&&self&&self.Object===Object&&self,Cn=Oc||vk||Function("return this")(),il=r&&!r.nodeType&&r,ra=il&&!0&&e&&!e.nodeType&&e,Dc=ra&&ra.exports===il,ll=Dc&&Oc.process,St=function(){try{var I=ra&&ra.require&&ra.require("util").types;return I||ll&&ll.binding&&ll.binding("util")}catch{}}(),xc=St&&St.isArrayBuffer,Rc=St&&St.isDate,Fc=St&&St.isMap,Nc=St&&St.isRegExp,Ac=St&&St.isSet,Pc=St&&St.isTypedArray;function mt(I,Z,K){switch(K.length){case 0:return I.call(Z);case 1:return I.call(Z,K[0]);case 2:return I.call(Z,K[0],K[1]);case 3:return I.call(Z,K[0],K[1],K[2])}return I.apply(Z,K)}function kk(I,Z,K,fe){for(var Se=-1,Ue=I==null?0:I.length;++Se<Ue;){var Fn=I[Se];Z(fe,Fn,K(Fn),I)}return fe}function Et(I,Z){for(var K=-1,fe=I==null?0:I.length;++K<fe&&Z(I[K],K,I)!==!1;);return I}function bk(I,Z){for(var K=I==null?0:I.length;K--&&Z(I[K],K,I)!==!1;);return I}function Mc(I,Z){for(var K=-1,fe=I==null?0:I.length;++K<fe;)if(!Z(I[K],K,I))return!1;return!0}function jr(I,Z){for(var K=-1,fe=I==null?0:I.length,Se=0,Ue=[];++K<fe;){var Fn=I[K];Z(Fn,K,I)&&(Ue[Se++]=Fn)}return Ue}function fo(I,Z){var K=I==null?0:I.length;return!!K&&Ra(I,Z,0)>-1}function ul(I,Z,K){for(var fe=-1,Se=I==null?0:I.length;++fe<Se;)if(K(Z,I[fe]))return!0;return!1}function cn(I,Z){for(var K=-1,fe=I==null?0:I.length,Se=Array(fe);++K<fe;)Se[K]=Z(I[K],K,I);return Se}function Ir(I,Z){for(var K=-1,fe=Z.length,Se=I.length;++K<fe;)I[Se+K]=Z[K];return I}function dl(I,Z,K,fe){var Se=-1,Ue=I==null?0:I.length;for(fe&&Ue&&(K=I[++Se]);++Se<Ue;)K=Z(K,I[Se],Se,I);return K}function wk(I,Z,K,fe){var Se=I==null?0:I.length;for(fe&&Se&&(K=I[--Se]);Se--;)K=Z(K,I[Se],Se,I);return K}function cl(I,Z){for(var K=-1,fe=I==null?0:I.length;++K<fe;)if(Z(I[K],K,I))return!0;return!1}var _k=fl("length");function Tk(I){return I.split("")}function Sk(I){return I.match(Av)||[]}function Bc(I,Z,K){var fe;return K(I,function(Se,Ue,Fn){if(Z(Se,Ue,Fn))return fe=Ue,!1}),fe}function mo(I,Z,K,fe){for(var Se=I.length,Ue=K+(fe?1:-1);fe?Ue--:++Ue<Se;)if(Z(I[Ue],Ue,I))return Ue;return-1}function Ra(I,Z,K){return Z===Z?qk(I,Z,K):mo(I,qc,K)}function Ek(I,Z,K,fe){for(var Se=K-1,Ue=I.length;++Se<Ue;)if(fe(I[Se],Z))return Se;return-1}function qc(I){return I!==I}function jc(I,Z){var K=I==null?0:I.length;return K?gl(I,Z)/K:se}function fl(I){return function(Z){return Z==null?n:Z[I]}}function ml(I){return function(Z){return I==null?n:I[Z]}}function Ic(I,Z,K,fe,Se){return Se(I,function(Ue,Fn,rn){K=fe?(fe=!1,Ue):Z(K,Ue,Fn,rn)}),K}function Ok(I,Z){var K=I.length;for(I.sort(Z);K--;)I[K]=I[K].value;return I}function gl(I,Z){for(var K,fe=-1,Se=I.length;++fe<Se;){var Ue=Z(I[fe]);Ue!==n&&(K=K===n?Ue:K+Ue)}return K}function pl(I,Z){for(var K=-1,fe=Array(I);++K<I;)fe[K]=Z(K);return fe}function Dk(I,Z){return cn(Z,function(K){return[K,I[K]]})}function Cc(I){return I&&I.slice(0,Vc(I)+1).replace(nl,"")}function gt(I){return function(Z){return I(Z)}}function hl(I,Z){return cn(Z,function(K){return I[K]})}function ps(I,Z){return I.has(Z)}function Lc(I,Z){for(var K=-1,fe=I.length;++K<fe&&Ra(Z,I[K],0)>-1;);return K}function $c(I,Z){for(var K=I.length;K--&&Ra(Z,I[K],0)>-1;);return K}function xk(I,Z){for(var K=I.length,fe=0;K--;)I[K]===Z&&++fe;return fe}var Rk=ml(fk),Fk=ml(mk);function Nk(I){return"\\"+pk[I]}function Ak(I,Z){return I==null?n:I[Z]}function Fa(I){return lk.test(I)}function Pk(I){return uk.test(I)}function Mk(I){for(var Z,K=[];!(Z=I.next()).done;)K.push(Z.value);return K}function yl(I){var Z=-1,K=Array(I.size);return I.forEach(function(fe,Se){K[++Z]=[Se,fe]}),K}function Hc(I,Z){return function(K){return I(Z(K))}}function Cr(I,Z){for(var K=-1,fe=I.length,Se=0,Ue=[];++K<fe;){var Fn=I[K];(Fn===Z||Fn===g)&&(I[K]=g,Ue[Se++]=K)}return Ue}function go(I){var Z=-1,K=Array(I.size);return I.forEach(function(fe){K[++Z]=fe}),K}function Bk(I){var Z=-1,K=Array(I.size);return I.forEach(function(fe){K[++Z]=[fe,fe]}),K}function qk(I,Z,K){for(var fe=K-1,Se=I.length;++fe<Se;)if(I[fe]===Z)return fe;return-1}function jk(I,Z,K){for(var fe=K+1;fe--;)if(I[fe]===Z)return fe;return fe}function Na(I){return Fa(I)?Ck(I):_k(I)}function Ct(I){return Fa(I)?Lk(I):Tk(I)}function Vc(I){for(var Z=I.length;Z--&&xv.test(I.charAt(Z)););return Z}var Ik=ml(gk);function Ck(I){for(var Z=ol.lastIndex=0;ol.test(I);)++Z;return Z}function Lk(I){return I.match(ol)||[]}function $k(I){return I.match(ik)||[]}var Hk=function I(Z){Z=Z==null?Cn:Aa.defaults(Cn.Object(),Z,Aa.pick(Cn,dk));var K=Z.Array,fe=Z.Date,Se=Z.Error,Ue=Z.Function,Fn=Z.Math,rn=Z.Object,vl=Z.RegExp,Vk=Z.String,Ot=Z.TypeError,po=K.prototype,Uk=Ue.prototype,Pa=rn.prototype,ho=Z["__core-js_shared__"],yo=Uk.toString,Xe=Pa.hasOwnProperty,Wk=0,Uc=function(){var s=/[^.]+$/.exec(ho&&ho.keys&&ho.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),vo=Pa.toString,Gk=yo.call(rn),Yk=Cn._,zk=vl("^"+yo.call(Xe).replace(ta,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ko=Dc?Z.Buffer:n,Lr=Z.Symbol,bo=Z.Uint8Array,Wc=ko?ko.allocUnsafe:n,wo=Hc(rn.getPrototypeOf,rn),Gc=rn.create,Yc=Pa.propertyIsEnumerable,_o=po.splice,zc=Lr?Lr.isConcatSpreadable:n,hs=Lr?Lr.iterator:n,aa=Lr?Lr.toStringTag:n,To=function(){try{var s=ua(rn,"defineProperty");return s({},"",{}),s}catch{}}(),Kk=Z.clearTimeout!==Cn.clearTimeout&&Z.clearTimeout,Xk=fe&&fe.now!==Cn.Date.now&&fe.now,Zk=Z.setTimeout!==Cn.setTimeout&&Z.setTimeout,So=Fn.ceil,Eo=Fn.floor,kl=rn.getOwnPropertySymbols,Qk=ko?ko.isBuffer:n,Kc=Z.isFinite,Jk=po.join,eb=Hc(rn.keys,rn),Nn=Fn.max,Hn=Fn.min,nb=fe.now,tb=Z.parseInt,Xc=Fn.random,rb=po.reverse,bl=ua(Z,"DataView"),ys=ua(Z,"Map"),wl=ua(Z,"Promise"),Ma=ua(Z,"Set"),vs=ua(Z,"WeakMap"),ks=ua(rn,"create"),Oo=vs&&new vs,Ba={},ab=da(bl),sb=da(ys),ob=da(wl),ib=da(Ma),lb=da(vs),Do=Lr?Lr.prototype:n,bs=Do?Do.valueOf:n,Zc=Do?Do.toString:n;function w(s){if(kn(s)&&!Oe(s)&&!(s instanceof Be)){if(s instanceof Dt)return s;if(Xe.call(s,"__wrapped__"))return Jf(s)}return new Dt(s)}var qa=function(){function s(){}return function(o){if(!gn(o))return{};if(Gc)return Gc(o);s.prototype=o;var l=new s;return s.prototype=n,l}}();function xo(){}function Dt(s,o){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=n}w.templateSettings={escape:Pn,evaluate:Tt,interpolate:$e,variable:"",imports:{_:w}},w.prototype=xo.prototype,w.prototype.constructor=w,Dt.prototype=qa(xo.prototype),Dt.prototype.constructor=Dt;function Be(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function ub(){var s=new Be(this.__wrapped__);return s.__actions__=rt(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=rt(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=rt(this.__views__),s}function db(){if(this.__filtered__){var s=new Be(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function cb(){var s=this.__wrapped__.value(),o=this.__dir__,l=Oe(s),f=o<0,h=l?s.length:0,S=T0(0,h,this.__views__),A=S.start,q=S.end,L=q-A,ee=f?q:A-1,ne=this.__iteratees__,te=ne.length,ue=0,pe=Hn(L,this.__takeCount__);if(!l||!f&&h==L&&pe==L)return _f(s,this.__actions__);var we=[];e:for(;L--&&ue<pe;){ee+=o;for(var xe=-1,_e=s[ee];++xe<te;){var Pe=ne[xe],je=Pe.iteratee,yt=Pe.type,Kn=je(_e);if(yt==Y)_e=Kn;else if(!Kn){if(yt==W)continue e;break e}}we[ue++]=_e}return we}Be.prototype=qa(xo.prototype),Be.prototype.constructor=Be;function sa(s){var o=-1,l=s==null?0:s.length;for(this.clear();++o<l;){var f=s[o];this.set(f[0],f[1])}}function fb(){this.__data__=ks?ks(null):{},this.size=0}function mb(s){var o=this.has(s)&&delete this.__data__[s];return this.size-=o?1:0,o}function gb(s){var o=this.__data__;if(ks){var l=o[s];return l===c?n:l}return Xe.call(o,s)?o[s]:n}function pb(s){var o=this.__data__;return ks?o[s]!==n:Xe.call(o,s)}function hb(s,o){var l=this.__data__;return this.size+=this.has(s)?0:1,l[s]=ks&&o===n?c:o,this}sa.prototype.clear=fb,sa.prototype.delete=mb,sa.prototype.get=gb,sa.prototype.has=pb,sa.prototype.set=hb;function wr(s){var o=-1,l=s==null?0:s.length;for(this.clear();++o<l;){var f=s[o];this.set(f[0],f[1])}}function yb(){this.__data__=[],this.size=0}function vb(s){var o=this.__data__,l=Ro(o,s);if(l<0)return!1;var f=o.length-1;return l==f?o.pop():_o.call(o,l,1),--this.size,!0}function kb(s){var o=this.__data__,l=Ro(o,s);return l<0?n:o[l][1]}function bb(s){return Ro(this.__data__,s)>-1}function wb(s,o){var l=this.__data__,f=Ro(l,s);return f<0?(++this.size,l.push([s,o])):l[f][1]=o,this}wr.prototype.clear=yb,wr.prototype.delete=vb,wr.prototype.get=kb,wr.prototype.has=bb,wr.prototype.set=wb;function _r(s){var o=-1,l=s==null?0:s.length;for(this.clear();++o<l;){var f=s[o];this.set(f[0],f[1])}}function _b(){this.size=0,this.__data__={hash:new sa,map:new(ys||wr),string:new sa}}function Tb(s){var o=$o(this,s).delete(s);return this.size-=o?1:0,o}function Sb(s){return $o(this,s).get(s)}function Eb(s){return $o(this,s).has(s)}function Ob(s,o){var l=$o(this,s),f=l.size;return l.set(s,o),this.size+=l.size==f?0:1,this}_r.prototype.clear=_b,_r.prototype.delete=Tb,_r.prototype.get=Sb,_r.prototype.has=Eb,_r.prototype.set=Ob;function oa(s){var o=-1,l=s==null?0:s.length;for(this.__data__=new _r;++o<l;)this.add(s[o])}function Db(s){return this.__data__.set(s,c),this}function xb(s){return this.__data__.has(s)}oa.prototype.add=oa.prototype.push=Db,oa.prototype.has=xb;function Lt(s){var o=this.__data__=new wr(s);this.size=o.size}function Rb(){this.__data__=new wr,this.size=0}function Fb(s){var o=this.__data__,l=o.delete(s);return this.size=o.size,l}function Nb(s){return this.__data__.get(s)}function Ab(s){return this.__data__.has(s)}function Pb(s,o){var l=this.__data__;if(l instanceof wr){var f=l.__data__;if(!ys||f.length<a-1)return f.push([s,o]),this.size=++l.size,this;l=this.__data__=new _r(f)}return l.set(s,o),this.size=l.size,this}Lt.prototype.clear=Rb,Lt.prototype.delete=Fb,Lt.prototype.get=Nb,Lt.prototype.has=Ab,Lt.prototype.set=Pb;function Qc(s,o){var l=Oe(s),f=!l&&ca(s),h=!l&&!f&&Wr(s),S=!l&&!f&&!h&&La(s),A=l||f||h||S,q=A?pl(s.length,Vk):[],L=q.length;for(var ee in s)(o||Xe.call(s,ee))&&!(A&&(ee=="length"||h&&(ee=="offset"||ee=="parent")||S&&(ee=="buffer"||ee=="byteLength"||ee=="byteOffset")||Or(ee,L)))&&q.push(ee);return q}function Jc(s){var o=s.length;return o?s[Al(0,o-1)]:n}function Mb(s,o){return Ho(rt(s),ia(o,0,s.length))}function Bb(s){return Ho(rt(s))}function _l(s,o,l){(l!==n&&!$t(s[o],l)||l===n&&!(o in s))&&Tr(s,o,l)}function ws(s,o,l){var f=s[o];(!(Xe.call(s,o)&&$t(f,l))||l===n&&!(o in s))&&Tr(s,o,l)}function Ro(s,o){for(var l=s.length;l--;)if($t(s[l][0],o))return l;return-1}function qb(s,o,l,f){return $r(s,function(h,S,A){o(f,h,l(h),A)}),f}function ef(s,o){return s&&er(o,Mn(o),s)}function jb(s,o){return s&&er(o,st(o),s)}function Tr(s,o,l){o=="__proto__"&&To?To(s,o,{configurable:!0,enumerable:!0,value:l,writable:!0}):s[o]=l}function Tl(s,o){for(var l=-1,f=o.length,h=K(f),S=s==null;++l<f;)h[l]=S?n:ru(s,o[l]);return h}function ia(s,o,l){return s===s&&(l!==n&&(s=s<=l?s:l),o!==n&&(s=s>=o?s:o)),s}function xt(s,o,l,f,h,S){var A,q=o&p,L=o&y,ee=o&k;if(l&&(A=h?l(s,f,h,S):l(s)),A!==n)return A;if(!gn(s))return s;var ne=Oe(s);if(ne){if(A=E0(s),!q)return rt(s,A)}else{var te=Vn(s),ue=te==mn||te==Rn;if(Wr(s))return Ef(s,q);if(te==wn||te==me||ue&&!h){if(A=L||ue?{}:Uf(s),!q)return L?g0(s,jb(A,s)):m0(s,ef(A,s))}else{if(!sn[te])return h?s:{};A=O0(s,te,q)}}S||(S=new Lt);var pe=S.get(s);if(pe)return pe;S.set(s,A),km(s)?s.forEach(function(_e){A.add(xt(_e,o,l,_e,s,S))}):ym(s)&&s.forEach(function(_e,Pe){A.set(Pe,xt(_e,o,l,Pe,s,S))});var we=ee?L?Vl:Hl:L?st:Mn,xe=ne?n:we(s);return Et(xe||s,function(_e,Pe){xe&&(Pe=_e,_e=s[Pe]),ws(A,Pe,xt(_e,o,l,Pe,s,S))}),A}function Ib(s){var o=Mn(s);return function(l){return nf(l,s,o)}}function nf(s,o,l){var f=l.length;if(s==null)return!f;for(s=rn(s);f--;){var h=l[f],S=o[h],A=s[h];if(A===n&&!(h in s)||!S(A))return!1}return!0}function tf(s,o,l){if(typeof s!="function")throw new Ot(u);return xs(function(){s.apply(n,l)},o)}function _s(s,o,l,f){var h=-1,S=fo,A=!0,q=s.length,L=[],ee=o.length;if(!q)return L;l&&(o=cn(o,gt(l))),f?(S=ul,A=!1):o.length>=a&&(S=ps,A=!1,o=new oa(o));e:for(;++h<q;){var ne=s[h],te=l==null?ne:l(ne);if(ne=f||ne!==0?ne:0,A&&te===te){for(var ue=ee;ue--;)if(o[ue]===te)continue e;L.push(ne)}else S(o,te,f)||L.push(ne)}return L}var $r=Ff(Jt),rf=Ff(El,!0);function Cb(s,o){var l=!0;return $r(s,function(f,h,S){return l=!!o(f,h,S),l}),l}function Fo(s,o,l){for(var f=-1,h=s.length;++f<h;){var S=s[f],A=o(S);if(A!=null&&(q===n?A===A&&!ht(A):l(A,q)))var q=A,L=S}return L}function Lb(s,o,l,f){var h=s.length;for(l=De(l),l<0&&(l=-l>h?0:h+l),f=f===n||f>h?h:De(f),f<0&&(f+=h),f=l>f?0:wm(f);l<f;)s[l++]=o;return s}function af(s,o){var l=[];return $r(s,function(f,h,S){o(f,h,S)&&l.push(f)}),l}function Ln(s,o,l,f,h){var S=-1,A=s.length;for(l||(l=x0),h||(h=[]);++S<A;){var q=s[S];o>0&&l(q)?o>1?Ln(q,o-1,l,f,h):Ir(h,q):f||(h[h.length]=q)}return h}var Sl=Nf(),sf=Nf(!0);function Jt(s,o){return s&&Sl(s,o,Mn)}function El(s,o){return s&&sf(s,o,Mn)}function No(s,o){return jr(o,function(l){return Dr(s[l])})}function la(s,o){o=Vr(o,s);for(var l=0,f=o.length;s!=null&&l<f;)s=s[nr(o[l++])];return l&&l==f?s:n}function of(s,o,l){var f=o(s);return Oe(s)?f:Ir(f,l(s))}function Yn(s){return s==null?s===n?oe:dt:aa&&aa in rn(s)?_0(s):B0(s)}function Ol(s,o){return s>o}function $b(s,o){return s!=null&&Xe.call(s,o)}function Hb(s,o){return s!=null&&o in rn(s)}function Vb(s,o,l){return s>=Hn(o,l)&&s<Nn(o,l)}function Dl(s,o,l){for(var f=l?ul:fo,h=s[0].length,S=s.length,A=S,q=K(S),L=1/0,ee=[];A--;){var ne=s[A];A&&o&&(ne=cn(ne,gt(o))),L=Hn(ne.length,L),q[A]=!l&&(o||h>=120&&ne.length>=120)?new oa(A&&ne):n}ne=s[0];var te=-1,ue=q[0];e:for(;++te<h&&ee.length<L;){var pe=ne[te],we=o?o(pe):pe;if(pe=l||pe!==0?pe:0,!(ue?ps(ue,we):f(ee,we,l))){for(A=S;--A;){var xe=q[A];if(!(xe?ps(xe,we):f(s[A],we,l)))continue e}ue&&ue.push(we),ee.push(pe)}}return ee}function Ub(s,o,l,f){return Jt(s,function(h,S,A){o(f,l(h),S,A)}),f}function Ts(s,o,l){o=Vr(o,s),s=zf(s,o);var f=s==null?s:s[nr(Ft(o))];return f==null?n:mt(f,s,l)}function lf(s){return kn(s)&&Yn(s)==me}function Wb(s){return kn(s)&&Yn(s)==Ae}function Gb(s){return kn(s)&&Yn(s)==en}function Ss(s,o,l,f,h){return s===o?!0:s==null||o==null||!kn(s)&&!kn(o)?s!==s&&o!==o:Yb(s,o,l,f,Ss,h)}function Yb(s,o,l,f,h,S){var A=Oe(s),q=Oe(o),L=A?he:Vn(s),ee=q?he:Vn(o);L=L==me?wn:L,ee=ee==me?wn:ee;var ne=L==wn,te=ee==wn,ue=L==ee;if(ue&&Wr(s)){if(!Wr(o))return!1;A=!0,ne=!1}if(ue&&!ne)return S||(S=new Lt),A||La(s)?$f(s,o,l,f,h,S):b0(s,o,L,l,f,h,S);if(!(l&O)){var pe=ne&&Xe.call(s,"__wrapped__"),we=te&&Xe.call(o,"__wrapped__");if(pe||we){var xe=pe?s.value():s,_e=we?o.value():o;return S||(S=new Lt),h(xe,_e,l,f,S)}}return ue?(S||(S=new Lt),w0(s,o,l,f,h,S)):!1}function zb(s){return kn(s)&&Vn(s)==tn}function xl(s,o,l,f){var h=l.length,S=h,A=!f;if(s==null)return!S;for(s=rn(s);h--;){var q=l[h];if(A&&q[2]?q[1]!==s[q[0]]:!(q[0]in s))return!1}for(;++h<S;){q=l[h];var L=q[0],ee=s[L],ne=q[1];if(A&&q[2]){if(ee===n&&!(L in s))return!1}else{var te=new Lt;if(f)var ue=f(ee,ne,L,s,o,te);if(!(ue===n?Ss(ne,ee,O|D,f,te):ue))return!1}}return!0}function uf(s){if(!gn(s)||F0(s))return!1;var o=Dr(s)?zk:Iv;return o.test(da(s))}function Kb(s){return kn(s)&&Yn(s)==B}function Xb(s){return kn(s)&&Vn(s)==H}function Zb(s){return kn(s)&&zo(s.length)&&!!ln[Yn(s)]}function df(s){return typeof s=="function"?s:s==null?ot:typeof s=="object"?Oe(s)?mf(s[0],s[1]):ff(s):Am(s)}function Rl(s){if(!Ds(s))return eb(s);var o=[];for(var l in rn(s))Xe.call(s,l)&&l!="constructor"&&o.push(l);return o}function Qb(s){if(!gn(s))return M0(s);var o=Ds(s),l=[];for(var f in s)f=="constructor"&&(o||!Xe.call(s,f))||l.push(f);return l}function Fl(s,o){return s<o}function cf(s,o){var l=-1,f=at(s)?K(s.length):[];return $r(s,function(h,S,A){f[++l]=o(h,S,A)}),f}function ff(s){var o=Wl(s);return o.length==1&&o[0][2]?Gf(o[0][0],o[0][1]):function(l){return l===s||xl(l,s,o)}}function mf(s,o){return Yl(s)&&Wf(o)?Gf(nr(s),o):function(l){var f=ru(l,s);return f===n&&f===o?au(l,s):Ss(o,f,O|D)}}function Ao(s,o,l,f,h){s!==o&&Sl(o,function(S,A){if(h||(h=new Lt),gn(S))Jb(s,o,A,l,Ao,f,h);else{var q=f?f(Kl(s,A),S,A+"",s,o,h):n;q===n&&(q=S),_l(s,A,q)}},st)}function Jb(s,o,l,f,h,S,A){var q=Kl(s,l),L=Kl(o,l),ee=A.get(L);if(ee){_l(s,l,ee);return}var ne=S?S(q,L,l+"",s,o,A):n,te=ne===n;if(te){var ue=Oe(L),pe=!ue&&Wr(L),we=!ue&&!pe&&La(L);ne=L,ue||pe||we?Oe(q)?ne=q:_n(q)?ne=rt(q):pe?(te=!1,ne=Ef(L,!0)):we?(te=!1,ne=Of(L,!0)):ne=[]:Rs(L)||ca(L)?(ne=q,ca(q)?ne=_m(q):(!gn(q)||Dr(q))&&(ne=Uf(L))):te=!1}te&&(A.set(L,ne),h(ne,L,f,S,A),A.delete(L)),_l(s,l,ne)}function gf(s,o){var l=s.length;if(l)return o+=o<0?l:0,Or(o,l)?s[o]:n}function pf(s,o,l){o.length?o=cn(o,function(S){return Oe(S)?function(A){return la(A,S.length===1?S[0]:S)}:S}):o=[ot];var f=-1;o=cn(o,gt(be()));var h=cf(s,function(S,A,q){var L=cn(o,function(ee){return ee(S)});return{criteria:L,index:++f,value:S}});return Ok(h,function(S,A){return f0(S,A,l)})}function e0(s,o){return hf(s,o,function(l,f){return au(s,f)})}function hf(s,o,l){for(var f=-1,h=o.length,S={};++f<h;){var A=o[f],q=la(s,A);l(q,A)&&Es(S,Vr(A,s),q)}return S}function n0(s){return function(o){return la(o,s)}}function Nl(s,o,l,f){var h=f?Ek:Ra,S=-1,A=o.length,q=s;for(s===o&&(o=rt(o)),l&&(q=cn(s,gt(l)));++S<A;)for(var L=0,ee=o[S],ne=l?l(ee):ee;(L=h(q,ne,L,f))>-1;)q!==s&&_o.call(q,L,1),_o.call(s,L,1);return s}function yf(s,o){for(var l=s?o.length:0,f=l-1;l--;){var h=o[l];if(l==f||h!==S){var S=h;Or(h)?_o.call(s,h,1):Bl(s,h)}}return s}function Al(s,o){return s+Eo(Xc()*(o-s+1))}function t0(s,o,l,f){for(var h=-1,S=Nn(So((o-s)/(l||1)),0),A=K(S);S--;)A[f?S:++h]=s,s+=l;return A}function Pl(s,o){var l="";if(!s||o<1||o>z)return l;do o%2&&(l+=s),o=Eo(o/2),o&&(s+=s);while(o);return l}function Fe(s,o){return Xl(Yf(s,o,ot),s+"")}function r0(s){return Jc($a(s))}function a0(s,o){var l=$a(s);return Ho(l,ia(o,0,l.length))}function Es(s,o,l,f){if(!gn(s))return s;o=Vr(o,s);for(var h=-1,S=o.length,A=S-1,q=s;q!=null&&++h<S;){var L=nr(o[h]),ee=l;if(L==="__proto__"||L==="constructor"||L==="prototype")return s;if(h!=A){var ne=q[L];ee=f?f(ne,L,q):n,ee===n&&(ee=gn(ne)?ne:Or(o[h+1])?[]:{})}ws(q,L,ee),q=q[L]}return s}var vf=Oo?function(s,o){return Oo.set(s,o),s}:ot,s0=To?function(s,o){return To(s,"toString",{configurable:!0,enumerable:!1,value:ou(o),writable:!0})}:ot;function o0(s){return Ho($a(s))}function Rt(s,o,l){var f=-1,h=s.length;o<0&&(o=-o>h?0:h+o),l=l>h?h:l,l<0&&(l+=h),h=o>l?0:l-o>>>0,o>>>=0;for(var S=K(h);++f<h;)S[f]=s[f+o];return S}function i0(s,o){var l;return $r(s,function(f,h,S){return l=o(f,h,S),!l}),!!l}function Po(s,o,l){var f=0,h=s==null?f:s.length;if(typeof o=="number"&&o===o&&h<=Ee){for(;f<h;){var S=f+h>>>1,A=s[S];A!==null&&!ht(A)&&(l?A<=o:A<o)?f=S+1:h=S}return h}return Ml(s,o,ot,l)}function Ml(s,o,l,f){var h=0,S=s==null?0:s.length;if(S===0)return 0;o=l(o);for(var A=o!==o,q=o===null,L=ht(o),ee=o===n;h<S;){var ne=Eo((h+S)/2),te=l(s[ne]),ue=te!==n,pe=te===null,we=te===te,xe=ht(te);if(A)var _e=f||we;else ee?_e=we&&(f||ue):q?_e=we&&ue&&(f||!pe):L?_e=we&&ue&&!pe&&(f||!xe):pe||xe?_e=!1:_e=f?te<=o:te<o;_e?h=ne+1:S=ne}return Hn(S,Te)}function kf(s,o){for(var l=-1,f=s.length,h=0,S=[];++l<f;){var A=s[l],q=o?o(A):A;if(!l||!$t(q,L)){var L=q;S[h++]=A===0?0:A}}return S}function bf(s){return typeof s=="number"?s:ht(s)?se:+s}function pt(s){if(typeof s=="string")return s;if(Oe(s))return cn(s,pt)+"";if(ht(s))return Zc?Zc.call(s):"";var o=s+"";return o=="0"&&1/s==-1/0?"-0":o}function Hr(s,o,l){var f=-1,h=fo,S=s.length,A=!0,q=[],L=q;if(l)A=!1,h=ul;else if(S>=a){var ee=o?null:v0(s);if(ee)return go(ee);A=!1,h=ps,L=new oa}else L=o?[]:q;e:for(;++f<S;){var ne=s[f],te=o?o(ne):ne;if(ne=l||ne!==0?ne:0,A&&te===te){for(var ue=L.length;ue--;)if(L[ue]===te)continue e;o&&L.push(te),q.push(ne)}else h(L,te,l)||(L!==q&&L.push(te),q.push(ne))}return q}function Bl(s,o){return o=Vr(o,s),s=zf(s,o),s==null||delete s[nr(Ft(o))]}function wf(s,o,l,f){return Es(s,o,l(la(s,o)),f)}function Mo(s,o,l,f){for(var h=s.length,S=f?h:-1;(f?S--:++S<h)&&o(s[S],S,s););return l?Rt(s,f?0:S,f?S+1:h):Rt(s,f?S+1:0,f?h:S)}function _f(s,o){var l=s;return l instanceof Be&&(l=l.value()),dl(o,function(f,h){return h.func.apply(h.thisArg,Ir([f],h.args))},l)}function ql(s,o,l){var f=s.length;if(f<2)return f?Hr(s[0]):[];for(var h=-1,S=K(f);++h<f;)for(var A=s[h],q=-1;++q<f;)q!=h&&(S[h]=_s(S[h]||A,s[q],o,l));return Hr(Ln(S,1),o,l)}function Tf(s,o,l){for(var f=-1,h=s.length,S=o.length,A={};++f<h;){var q=f<S?o[f]:n;l(A,s[f],q)}return A}function jl(s){return _n(s)?s:[]}function Il(s){return typeof s=="function"?s:ot}function Vr(s,o){return Oe(s)?s:Yl(s,o)?[s]:Qf(Ye(s))}var l0=Fe;function Ur(s,o,l){var f=s.length;return l=l===n?f:l,!o&&l>=f?s:Rt(s,o,l)}var Sf=Kk||function(s){return Cn.clearTimeout(s)};function Ef(s,o){if(o)return s.slice();var l=s.length,f=Wc?Wc(l):new s.constructor(l);return s.copy(f),f}function Cl(s){var o=new s.constructor(s.byteLength);return new bo(o).set(new bo(s)),o}function u0(s,o){var l=o?Cl(s.buffer):s.buffer;return new s.constructor(l,s.byteOffset,s.byteLength)}function d0(s){var o=new s.constructor(s.source,ic.exec(s));return o.lastIndex=s.lastIndex,o}function c0(s){return bs?rn(bs.call(s)):{}}function Of(s,o){var l=o?Cl(s.buffer):s.buffer;return new s.constructor(l,s.byteOffset,s.length)}function Df(s,o){if(s!==o){var l=s!==n,f=s===null,h=s===s,S=ht(s),A=o!==n,q=o===null,L=o===o,ee=ht(o);if(!q&&!ee&&!S&&s>o||S&&A&&L&&!q&&!ee||f&&A&&L||!l&&L||!h)return 1;if(!f&&!S&&!ee&&s<o||ee&&l&&h&&!f&&!S||q&&l&&h||!A&&h||!L)return-1}return 0}function f0(s,o,l){for(var f=-1,h=s.criteria,S=o.criteria,A=h.length,q=l.length;++f<A;){var L=Df(h[f],S[f]);if(L){if(f>=q)return L;var ee=l[f];return L*(ee=="desc"?-1:1)}}return s.index-o.index}function xf(s,o,l,f){for(var h=-1,S=s.length,A=l.length,q=-1,L=o.length,ee=Nn(S-A,0),ne=K(L+ee),te=!f;++q<L;)ne[q]=o[q];for(;++h<A;)(te||h<S)&&(ne[l[h]]=s[h]);for(;ee--;)ne[q++]=s[h++];return ne}function Rf(s,o,l,f){for(var h=-1,S=s.length,A=-1,q=l.length,L=-1,ee=o.length,ne=Nn(S-q,0),te=K(ne+ee),ue=!f;++h<ne;)te[h]=s[h];for(var pe=h;++L<ee;)te[pe+L]=o[L];for(;++A<q;)(ue||h<S)&&(te[pe+l[A]]=s[h++]);return te}function rt(s,o){var l=-1,f=s.length;for(o||(o=K(f));++l<f;)o[l]=s[l];return o}function er(s,o,l,f){var h=!l;l||(l={});for(var S=-1,A=o.length;++S<A;){var q=o[S],L=f?f(l[q],s[q],q,l,s):n;L===n&&(L=s[q]),h?Tr(l,q,L):ws(l,q,L)}return l}function m0(s,o){return er(s,Gl(s),o)}function g0(s,o){return er(s,Hf(s),o)}function Bo(s,o){return function(l,f){var h=Oe(l)?kk:qb,S=o?o():{};return h(l,s,be(f,2),S)}}function ja(s){return Fe(function(o,l){var f=-1,h=l.length,S=h>1?l[h-1]:n,A=h>2?l[2]:n;for(S=s.length>3&&typeof S=="function"?(h--,S):n,A&&zn(l[0],l[1],A)&&(S=h<3?n:S,h=1),o=rn(o);++f<h;){var q=l[f];q&&s(o,q,f,S)}return o})}function Ff(s,o){return function(l,f){if(l==null)return l;if(!at(l))return s(l,f);for(var h=l.length,S=o?h:-1,A=rn(l);(o?S--:++S<h)&&f(A[S],S,A)!==!1;);return l}}function Nf(s){return function(o,l,f){for(var h=-1,S=rn(o),A=f(o),q=A.length;q--;){var L=A[s?q:++h];if(l(S[L],L,S)===!1)break}return o}}function p0(s,o,l){var f=o&_,h=Os(s);function S(){var A=this&&this!==Cn&&this instanceof S?h:s;return A.apply(f?l:this,arguments)}return S}function Af(s){return function(o){o=Ye(o);var l=Fa(o)?Ct(o):n,f=l?l[0]:o.charAt(0),h=l?Ur(l,1).join(""):o.slice(1);return f[s]()+h}}function Ia(s){return function(o){return dl(Fm(Rm(o).replace(sk,"")),s,"")}}function Os(s){return function(){var o=arguments;switch(o.length){case 0:return new s;case 1:return new s(o[0]);case 2:return new s(o[0],o[1]);case 3:return new s(o[0],o[1],o[2]);case 4:return new s(o[0],o[1],o[2],o[3]);case 5:return new s(o[0],o[1],o[2],o[3],o[4]);case 6:return new s(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new s(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var l=qa(s.prototype),f=s.apply(l,o);return gn(f)?f:l}}function h0(s,o,l){var f=Os(s);function h(){for(var S=arguments.length,A=K(S),q=S,L=Ca(h);q--;)A[q]=arguments[q];var ee=S<3&&A[0]!==L&&A[S-1]!==L?[]:Cr(A,L);if(S-=ee.length,S<l)return jf(s,o,qo,h.placeholder,n,A,ee,n,n,l-S);var ne=this&&this!==Cn&&this instanceof h?f:s;return mt(ne,this,A)}return h}function Pf(s){return function(o,l,f){var h=rn(o);if(!at(o)){var S=be(l,3);o=Mn(o),l=function(q){return S(h[q],q,h)}}var A=s(o,l,f);return A>-1?h[S?o[A]:A]:n}}function Mf(s){return Er(function(o){var l=o.length,f=l,h=Dt.prototype.thru;for(s&&o.reverse();f--;){var S=o[f];if(typeof S!="function")throw new Ot(u);if(h&&!A&&Lo(S)=="wrapper")var A=new Dt([],!0)}for(f=A?f:l;++f<l;){S=o[f];var q=Lo(S),L=q=="wrapper"?Ul(S):n;L&&zl(L[0])&&L[1]==(F|T|v|N)&&!L[4].length&&L[9]==1?A=A[Lo(L[0])].apply(A,L[3]):A=S.length==1&&zl(S)?A[q]():A.thru(S)}return function(){var ee=arguments,ne=ee[0];if(A&&ee.length==1&&Oe(ne))return A.plant(ne).value();for(var te=0,ue=l?o[te].apply(this,ee):ne;++te<l;)ue=o[te].call(this,ue);return ue}})}function qo(s,o,l,f,h,S,A,q,L,ee){var ne=o&F,te=o&_,ue=o&x,pe=o&(T|M),we=o&j,xe=ue?n:Os(s);function _e(){for(var Pe=arguments.length,je=K(Pe),yt=Pe;yt--;)je[yt]=arguments[yt];if(pe)var Kn=Ca(_e),vt=xk(je,Kn);if(f&&(je=xf(je,f,h,pe)),S&&(je=Rf(je,S,A,pe)),Pe-=vt,pe&&Pe<ee){var Tn=Cr(je,Kn);return jf(s,o,qo,_e.placeholder,l,je,Tn,q,L,ee-Pe)}var Ht=te?l:this,Rr=ue?Ht[s]:s;return Pe=je.length,q?je=q0(je,q):we&&Pe>1&&je.reverse(),ne&&L<Pe&&(je.length=L),this&&this!==Cn&&this instanceof _e&&(Rr=xe||Os(Rr)),Rr.apply(Ht,je)}return _e}function Bf(s,o){return function(l,f){return Ub(l,s,o(f),{})}}function jo(s,o){return function(l,f){var h;if(l===n&&f===n)return o;if(l!==n&&(h=l),f!==n){if(h===n)return f;typeof l=="string"||typeof f=="string"?(l=pt(l),f=pt(f)):(l=bf(l),f=bf(f)),h=s(l,f)}return h}}function Ll(s){return Er(function(o){return o=cn(o,gt(be())),Fe(function(l){var f=this;return s(o,function(h){return mt(h,f,l)})})})}function Io(s,o){o=o===n?" ":pt(o);var l=o.length;if(l<2)return l?Pl(o,s):o;var f=Pl(o,So(s/Na(o)));return Fa(o)?Ur(Ct(f),0,s).join(""):f.slice(0,s)}function y0(s,o,l,f){var h=o&_,S=Os(s);function A(){for(var q=-1,L=arguments.length,ee=-1,ne=f.length,te=K(ne+L),ue=this&&this!==Cn&&this instanceof A?S:s;++ee<ne;)te[ee]=f[ee];for(;L--;)te[ee++]=arguments[++q];return mt(ue,h?l:this,te)}return A}function qf(s){return function(o,l,f){return f&&typeof f!="number"&&zn(o,l,f)&&(l=f=n),o=xr(o),l===n?(l=o,o=0):l=xr(l),f=f===n?o<l?1:-1:xr(f),t0(o,l,f,s)}}function Co(s){return function(o,l){return typeof o=="string"&&typeof l=="string"||(o=Nt(o),l=Nt(l)),s(o,l)}}function jf(s,o,l,f,h,S,A,q,L,ee){var ne=o&T,te=ne?A:n,ue=ne?n:A,pe=ne?S:n,we=ne?n:S;o|=ne?v:P,o&=~(ne?P:v),o&R||(o&=-4);var xe=[s,o,h,pe,te,we,ue,q,L,ee],_e=l.apply(n,xe);return zl(s)&&Kf(_e,xe),_e.placeholder=f,Xf(_e,s,o)}function $l(s){var o=Fn[s];return function(l,f){if(l=Nt(l),f=f==null?0:Hn(De(f),292),f&&Kc(l)){var h=(Ye(l)+"e").split("e"),S=o(h[0]+"e"+(+h[1]+f));return h=(Ye(S)+"e").split("e"),+(h[0]+"e"+(+h[1]-f))}return o(l)}}var v0=Ma&&1/go(new Ma([,-0]))[1]==J?function(s){return new Ma(s)}:uu;function If(s){return function(o){var l=Vn(o);return l==tn?yl(o):l==H?Bk(o):Dk(o,s(o))}}function Sr(s,o,l,f,h,S,A,q){var L=o&x;if(!L&&typeof s!="function")throw new Ot(u);var ee=f?f.length:0;if(ee||(o&=-97,f=h=n),A=A===n?A:Nn(De(A),0),q=q===n?q:De(q),ee-=h?h.length:0,o&P){var ne=f,te=h;f=h=n}var ue=L?n:Ul(s),pe=[s,o,l,f,h,ne,te,S,A,q];if(ue&&P0(pe,ue),s=pe[0],o=pe[1],l=pe[2],f=pe[3],h=pe[4],q=pe[9]=pe[9]===n?L?0:s.length:Nn(pe[9]-ee,0),!q&&o&(T|M)&&(o&=-25),!o||o==_)var we=p0(s,o,l);else o==T||o==M?we=h0(s,o,q):(o==v||o==(_|v))&&!h.length?we=y0(s,o,l,f):we=qo.apply(n,pe);var xe=ue?vf:Kf;return Xf(xe(we,pe),s,o)}function Cf(s,o,l,f){return s===n||$t(s,Pa[l])&&!Xe.call(f,l)?o:s}function Lf(s,o,l,f,h,S){return gn(s)&&gn(o)&&(S.set(o,s),Ao(s,o,n,Lf,S),S.delete(o)),s}function k0(s){return Rs(s)?n:s}function $f(s,o,l,f,h,S){var A=l&O,q=s.length,L=o.length;if(q!=L&&!(A&&L>q))return!1;var ee=S.get(s),ne=S.get(o);if(ee&&ne)return ee==o&&ne==s;var te=-1,ue=!0,pe=l&D?new oa:n;for(S.set(s,o),S.set(o,s);++te<q;){var we=s[te],xe=o[te];if(f)var _e=A?f(xe,we,te,o,s,S):f(we,xe,te,s,o,S);if(_e!==n){if(_e)continue;ue=!1;break}if(pe){if(!cl(o,function(Pe,je){if(!ps(pe,je)&&(we===Pe||h(we,Pe,l,f,S)))return pe.push(je)})){ue=!1;break}}else if(!(we===xe||h(we,xe,l,f,S))){ue=!1;break}}return S.delete(s),S.delete(o),ue}function b0(s,o,l,f,h,S,A){switch(l){case qe:if(s.byteLength!=o.byteLength||s.byteOffset!=o.byteOffset)return!1;s=s.buffer,o=o.buffer;case Ae:return!(s.byteLength!=o.byteLength||!S(new bo(s),new bo(o)));case Ve:case en:case Dn:return $t(+s,+o);case on:return s.name==o.name&&s.message==o.message;case B:case X:return s==o+"";case tn:var q=yl;case H:var L=f&O;if(q||(q=go),s.size!=o.size&&!L)return!1;var ee=A.get(s);if(ee)return ee==o;f|=D,A.set(s,o);var ne=$f(q(s),q(o),f,h,S,A);return A.delete(s),ne;case le:if(bs)return bs.call(s)==bs.call(o)}return!1}function w0(s,o,l,f,h,S){var A=l&O,q=Hl(s),L=q.length,ee=Hl(o),ne=ee.length;if(L!=ne&&!A)return!1;for(var te=L;te--;){var ue=q[te];if(!(A?ue in o:Xe.call(o,ue)))return!1}var pe=S.get(s),we=S.get(o);if(pe&&we)return pe==o&&we==s;var xe=!0;S.set(s,o),S.set(o,s);for(var _e=A;++te<L;){ue=q[te];var Pe=s[ue],je=o[ue];if(f)var yt=A?f(je,Pe,ue,o,s,S):f(Pe,je,ue,s,o,S);if(!(yt===n?Pe===je||h(Pe,je,l,f,S):yt)){xe=!1;break}_e||(_e=ue=="constructor")}if(xe&&!_e){var Kn=s.constructor,vt=o.constructor;Kn!=vt&&"constructor"in s&&"constructor"in o&&!(typeof Kn=="function"&&Kn instanceof Kn&&typeof vt=="function"&&vt instanceof vt)&&(xe=!1)}return S.delete(s),S.delete(o),xe}function Er(s){return Xl(Yf(s,n,tm),s+"")}function Hl(s){return of(s,Mn,Gl)}function Vl(s){return of(s,st,Hf)}var Ul=Oo?function(s){return Oo.get(s)}:uu;function Lo(s){for(var o=s.name+"",l=Ba[o],f=Xe.call(Ba,o)?l.length:0;f--;){var h=l[f],S=h.func;if(S==null||S==s)return h.name}return o}function Ca(s){var o=Xe.call(w,"placeholder")?w:s;return o.placeholder}function be(){var s=w.iteratee||iu;return s=s===iu?df:s,arguments.length?s(arguments[0],arguments[1]):s}function $o(s,o){var l=s.__data__;return R0(o)?l[typeof o=="string"?"string":"hash"]:l.map}function Wl(s){for(var o=Mn(s),l=o.length;l--;){var f=o[l],h=s[f];o[l]=[f,h,Wf(h)]}return o}function ua(s,o){var l=Ak(s,o);return uf(l)?l:n}function _0(s){var o=Xe.call(s,aa),l=s[aa];try{s[aa]=n;var f=!0}catch{}var h=vo.call(s);return f&&(o?s[aa]=l:delete s[aa]),h}var Gl=kl?function(s){return s==null?[]:(s=rn(s),jr(kl(s),function(o){return Yc.call(s,o)}))}:du,Hf=kl?function(s){for(var o=[];s;)Ir(o,Gl(s)),s=wo(s);return o}:du,Vn=Yn;(bl&&Vn(new bl(new ArrayBuffer(1)))!=qe||ys&&Vn(new ys)!=tn||wl&&Vn(wl.resolve())!=ct||Ma&&Vn(new Ma)!=H||vs&&Vn(new vs)!=ae)&&(Vn=function(s){var o=Yn(s),l=o==wn?s.constructor:n,f=l?da(l):"";if(f)switch(f){case ab:return qe;case sb:return tn;case ob:return ct;case ib:return H;case lb:return ae}return o});function T0(s,o,l){for(var f=-1,h=l.length;++f<h;){var S=l[f],A=S.size;switch(S.type){case"drop":s+=A;break;case"dropRight":o-=A;break;case"take":o=Hn(o,s+A);break;case"takeRight":s=Nn(s,o-A);break}}return{start:s,end:o}}function S0(s){var o=s.match(Fv);return o?o[1].split(Nv):[]}function Vf(s,o,l){o=Vr(o,s);for(var f=-1,h=o.length,S=!1;++f<h;){var A=nr(o[f]);if(!(S=s!=null&&l(s,A)))break;s=s[A]}return S||++f!=h?S:(h=s==null?0:s.length,!!h&&zo(h)&&Or(A,h)&&(Oe(s)||ca(s)))}function E0(s){var o=s.length,l=new s.constructor(o);return o&&typeof s[0]=="string"&&Xe.call(s,"index")&&(l.index=s.index,l.input=s.input),l}function Uf(s){return typeof s.constructor=="function"&&!Ds(s)?qa(wo(s)):{}}function O0(s,o,l){var f=s.constructor;switch(o){case Ae:return Cl(s);case Ve:case en:return new f(+s);case qe:return u0(s,l);case An:case Qt:case tt:case Qr:case vr:case kr:case Jr:case br:case ea:return Of(s,l);case tn:return new f;case Dn:case X:return new f(s);case B:return d0(s);case H:return new f;case le:return c0(s)}}function D0(s,o){var l=o.length;if(!l)return s;var f=l-1;return o[f]=(l>1?"& ":"")+o[f],o=o.join(l>2?", ":" "),s.replace(Rv,`{
/* [wrapped with `+o+`] */
`)}function x0(s){return Oe(s)||ca(s)||!!(zc&&s&&s[zc])}function Or(s,o){var l=typeof s;return o=o??z,!!o&&(l=="number"||l!="symbol"&&Lv.test(s))&&s>-1&&s%1==0&&s<o}function zn(s,o,l){if(!gn(l))return!1;var f=typeof o;return(f=="number"?at(l)&&Or(o,l.length):f=="string"&&o in l)?$t(l[o],s):!1}function Yl(s,o){if(Oe(s))return!1;var l=typeof s;return l=="number"||l=="symbol"||l=="boolean"||s==null||ht(s)?!0:Ji.test(s)||!Qi.test(s)||o!=null&&s in rn(o)}function R0(s){var o=typeof s;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?s!=="__proto__":s===null}function zl(s){var o=Lo(s),l=w[o];if(typeof l!="function"||!(o in Be.prototype))return!1;if(s===l)return!0;var f=Ul(l);return!!f&&s===f[0]}function F0(s){return!!Uc&&Uc in s}var N0=ho?Dr:cu;function Ds(s){var o=s&&s.constructor,l=typeof o=="function"&&o.prototype||Pa;return s===l}function Wf(s){return s===s&&!gn(s)}function Gf(s,o){return function(l){return l==null?!1:l[s]===o&&(o!==n||s in rn(l))}}function A0(s){var o=Go(s,function(f){return l.size===m&&l.clear(),f}),l=o.cache;return o}function P0(s,o){var l=s[1],f=o[1],h=l|f,S=h<(_|x|F),A=f==F&&l==T||f==F&&l==N&&s[7].length<=o[8]||f==(F|N)&&o[7].length<=o[8]&&l==T;if(!(S||A))return s;f&_&&(s[2]=o[2],h|=l&_?0:R);var q=o[3];if(q){var L=s[3];s[3]=L?xf(L,q,o[4]):q,s[4]=L?Cr(s[3],g):o[4]}return q=o[5],q&&(L=s[5],s[5]=L?Rf(L,q,o[6]):q,s[6]=L?Cr(s[5],g):o[6]),q=o[7],q&&(s[7]=q),f&F&&(s[8]=s[8]==null?o[8]:Hn(s[8],o[8])),s[9]==null&&(s[9]=o[9]),s[0]=o[0],s[1]=h,s}function M0(s){var o=[];if(s!=null)for(var l in rn(s))o.push(l);return o}function B0(s){return vo.call(s)}function Yf(s,o,l){return o=Nn(o===n?s.length-1:o,0),function(){for(var f=arguments,h=-1,S=Nn(f.length-o,0),A=K(S);++h<S;)A[h]=f[o+h];h=-1;for(var q=K(o+1);++h<o;)q[h]=f[h];return q[o]=l(A),mt(s,this,q)}}function zf(s,o){return o.length<2?s:la(s,Rt(o,0,-1))}function q0(s,o){for(var l=s.length,f=Hn(o.length,l),h=rt(s);f--;){var S=o[f];s[f]=Or(S,l)?h[S]:n}return s}function Kl(s,o){if(!(o==="constructor"&&typeof s[o]=="function")&&o!="__proto__")return s[o]}var Kf=Zf(vf),xs=Zk||function(s,o){return Cn.setTimeout(s,o)},Xl=Zf(s0);function Xf(s,o,l){var f=o+"";return Xl(s,D0(f,j0(S0(f),l)))}function Zf(s){var o=0,l=0;return function(){var f=nb(),h=C-(f-l);if(l=f,h>0){if(++o>=G)return arguments[0]}else o=0;return s.apply(n,arguments)}}function Ho(s,o){var l=-1,f=s.length,h=f-1;for(o=o===n?f:o;++l<o;){var S=Al(l,h),A=s[S];s[S]=s[l],s[l]=A}return s.length=o,s}var Qf=A0(function(s){var o=[];return s.charCodeAt(0)===46&&o.push(""),s.replace(el,function(l,f,h,S){o.push(h?S.replace(Mv,"$1"):f||l)}),o});function nr(s){if(typeof s=="string"||ht(s))return s;var o=s+"";return o=="0"&&1/s==-1/0?"-0":o}function da(s){if(s!=null){try{return yo.call(s)}catch{}try{return s+""}catch{}}return""}function j0(s,o){return Et(Ge,function(l){var f="_."+l[0];o&l[1]&&!fo(s,f)&&s.push(f)}),s.sort()}function Jf(s){if(s instanceof Be)return s.clone();var o=new Dt(s.__wrapped__,s.__chain__);return o.__actions__=rt(s.__actions__),o.__index__=s.__index__,o.__values__=s.__values__,o}function I0(s,o,l){(l?zn(s,o,l):o===n)?o=1:o=Nn(De(o),0);var f=s==null?0:s.length;if(!f||o<1)return[];for(var h=0,S=0,A=K(So(f/o));h<f;)A[S++]=Rt(s,h,h+=o);return A}function C0(s){for(var o=-1,l=s==null?0:s.length,f=0,h=[];++o<l;){var S=s[o];S&&(h[f++]=S)}return h}function L0(){var s=arguments.length;if(!s)return[];for(var o=K(s-1),l=arguments[0],f=s;f--;)o[f-1]=arguments[f];return Ir(Oe(l)?rt(l):[l],Ln(o,1))}var $0=Fe(function(s,o){return _n(s)?_s(s,Ln(o,1,_n,!0)):[]}),H0=Fe(function(s,o){var l=Ft(o);return _n(l)&&(l=n),_n(s)?_s(s,Ln(o,1,_n,!0),be(l,2)):[]}),V0=Fe(function(s,o){var l=Ft(o);return _n(l)&&(l=n),_n(s)?_s(s,Ln(o,1,_n,!0),n,l):[]});function U0(s,o,l){var f=s==null?0:s.length;return f?(o=l||o===n?1:De(o),Rt(s,o<0?0:o,f)):[]}function W0(s,o,l){var f=s==null?0:s.length;return f?(o=l||o===n?1:De(o),o=f-o,Rt(s,0,o<0?0:o)):[]}function G0(s,o){return s&&s.length?Mo(s,be(o,3),!0,!0):[]}function Y0(s,o){return s&&s.length?Mo(s,be(o,3),!0):[]}function z0(s,o,l,f){var h=s==null?0:s.length;return h?(l&&typeof l!="number"&&zn(s,o,l)&&(l=0,f=h),Lb(s,o,l,f)):[]}function em(s,o,l){var f=s==null?0:s.length;if(!f)return-1;var h=l==null?0:De(l);return h<0&&(h=Nn(f+h,0)),mo(s,be(o,3),h)}function nm(s,o,l){var f=s==null?0:s.length;if(!f)return-1;var h=f-1;return l!==n&&(h=De(l),h=l<0?Nn(f+h,0):Hn(h,f-1)),mo(s,be(o,3),h,!0)}function tm(s){var o=s==null?0:s.length;return o?Ln(s,1):[]}function K0(s){var o=s==null?0:s.length;return o?Ln(s,J):[]}function X0(s,o){var l=s==null?0:s.length;return l?(o=o===n?1:De(o),Ln(s,o)):[]}function Z0(s){for(var o=-1,l=s==null?0:s.length,f={};++o<l;){var h=s[o];f[h[0]]=h[1]}return f}function rm(s){return s&&s.length?s[0]:n}function Q0(s,o,l){var f=s==null?0:s.length;if(!f)return-1;var h=l==null?0:De(l);return h<0&&(h=Nn(f+h,0)),Ra(s,o,h)}function J0(s){var o=s==null?0:s.length;return o?Rt(s,0,-1):[]}var ew=Fe(function(s){var o=cn(s,jl);return o.length&&o[0]===s[0]?Dl(o):[]}),nw=Fe(function(s){var o=Ft(s),l=cn(s,jl);return o===Ft(l)?o=n:l.pop(),l.length&&l[0]===s[0]?Dl(l,be(o,2)):[]}),tw=Fe(function(s){var o=Ft(s),l=cn(s,jl);return o=typeof o=="function"?o:n,o&&l.pop(),l.length&&l[0]===s[0]?Dl(l,n,o):[]});function rw(s,o){return s==null?"":Jk.call(s,o)}function Ft(s){var o=s==null?0:s.length;return o?s[o-1]:n}function aw(s,o,l){var f=s==null?0:s.length;if(!f)return-1;var h=f;return l!==n&&(h=De(l),h=h<0?Nn(f+h,0):Hn(h,f-1)),o===o?jk(s,o,h):mo(s,qc,h,!0)}function sw(s,o){return s&&s.length?gf(s,De(o)):n}var ow=Fe(am);function am(s,o){return s&&s.length&&o&&o.length?Nl(s,o):s}function iw(s,o,l){return s&&s.length&&o&&o.length?Nl(s,o,be(l,2)):s}function lw(s,o,l){return s&&s.length&&o&&o.length?Nl(s,o,n,l):s}var uw=Er(function(s,o){var l=s==null?0:s.length,f=Tl(s,o);return yf(s,cn(o,function(h){return Or(h,l)?+h:h}).sort(Df)),f});function dw(s,o){var l=[];if(!(s&&s.length))return l;var f=-1,h=[],S=s.length;for(o=be(o,3);++f<S;){var A=s[f];o(A,f,s)&&(l.push(A),h.push(f))}return yf(s,h),l}function Zl(s){return s==null?s:rb.call(s)}function cw(s,o,l){var f=s==null?0:s.length;return f?(l&&typeof l!="number"&&zn(s,o,l)?(o=0,l=f):(o=o==null?0:De(o),l=l===n?f:De(l)),Rt(s,o,l)):[]}function fw(s,o){return Po(s,o)}function mw(s,o,l){return Ml(s,o,be(l,2))}function gw(s,o){var l=s==null?0:s.length;if(l){var f=Po(s,o);if(f<l&&$t(s[f],o))return f}return-1}function pw(s,o){return Po(s,o,!0)}function hw(s,o,l){return Ml(s,o,be(l,2),!0)}function yw(s,o){var l=s==null?0:s.length;if(l){var f=Po(s,o,!0)-1;if($t(s[f],o))return f}return-1}function vw(s){return s&&s.length?kf(s):[]}function kw(s,o){return s&&s.length?kf(s,be(o,2)):[]}function bw(s){var o=s==null?0:s.length;return o?Rt(s,1,o):[]}function ww(s,o,l){return s&&s.length?(o=l||o===n?1:De(o),Rt(s,0,o<0?0:o)):[]}function _w(s,o,l){var f=s==null?0:s.length;return f?(o=l||o===n?1:De(o),o=f-o,Rt(s,o<0?0:o,f)):[]}function Tw(s,o){return s&&s.length?Mo(s,be(o,3),!1,!0):[]}function Sw(s,o){return s&&s.length?Mo(s,be(o,3)):[]}var Ew=Fe(function(s){return Hr(Ln(s,1,_n,!0))}),Ow=Fe(function(s){var o=Ft(s);return _n(o)&&(o=n),Hr(Ln(s,1,_n,!0),be(o,2))}),Dw=Fe(function(s){var o=Ft(s);return o=typeof o=="function"?o:n,Hr(Ln(s,1,_n,!0),n,o)});function xw(s){return s&&s.length?Hr(s):[]}function Rw(s,o){return s&&s.length?Hr(s,be(o,2)):[]}function Fw(s,o){return o=typeof o=="function"?o:n,s&&s.length?Hr(s,n,o):[]}function Ql(s){if(!(s&&s.length))return[];var o=0;return s=jr(s,function(l){if(_n(l))return o=Nn(l.length,o),!0}),pl(o,function(l){return cn(s,fl(l))})}function sm(s,o){if(!(s&&s.length))return[];var l=Ql(s);return o==null?l:cn(l,function(f){return mt(o,n,f)})}var Nw=Fe(function(s,o){return _n(s)?_s(s,o):[]}),Aw=Fe(function(s){return ql(jr(s,_n))}),Pw=Fe(function(s){var o=Ft(s);return _n(o)&&(o=n),ql(jr(s,_n),be(o,2))}),Mw=Fe(function(s){var o=Ft(s);return o=typeof o=="function"?o:n,ql(jr(s,_n),n,o)}),Bw=Fe(Ql);function qw(s,o){return Tf(s||[],o||[],ws)}function jw(s,o){return Tf(s||[],o||[],Es)}var Iw=Fe(function(s){var o=s.length,l=o>1?s[o-1]:n;return l=typeof l=="function"?(s.pop(),l):n,sm(s,l)});function om(s){var o=w(s);return o.__chain__=!0,o}function Cw(s,o){return o(s),s}function Vo(s,o){return o(s)}var Lw=Er(function(s){var o=s.length,l=o?s[0]:0,f=this.__wrapped__,h=function(S){return Tl(S,s)};return o>1||this.__actions__.length||!(f instanceof Be)||!Or(l)?this.thru(h):(f=f.slice(l,+l+(o?1:0)),f.__actions__.push({func:Vo,args:[h],thisArg:n}),new Dt(f,this.__chain__).thru(function(S){return o&&!S.length&&S.push(n),S}))});function $w(){return om(this)}function Hw(){return new Dt(this.value(),this.__chain__)}function Vw(){this.__values__===n&&(this.__values__=bm(this.value()));var s=this.__index__>=this.__values__.length,o=s?n:this.__values__[this.__index__++];return{done:s,value:o}}function Uw(){return this}function Ww(s){for(var o,l=this;l instanceof xo;){var f=Jf(l);f.__index__=0,f.__values__=n,o?h.__wrapped__=f:o=f;var h=f;l=l.__wrapped__}return h.__wrapped__=s,o}function Gw(){var s=this.__wrapped__;if(s instanceof Be){var o=s;return this.__actions__.length&&(o=new Be(this)),o=o.reverse(),o.__actions__.push({func:Vo,args:[Zl],thisArg:n}),new Dt(o,this.__chain__)}return this.thru(Zl)}function Yw(){return _f(this.__wrapped__,this.__actions__)}var zw=Bo(function(s,o,l){Xe.call(s,l)?++s[l]:Tr(s,l,1)});function Kw(s,o,l){var f=Oe(s)?Mc:Cb;return l&&zn(s,o,l)&&(o=n),f(s,be(o,3))}function Xw(s,o){var l=Oe(s)?jr:af;return l(s,be(o,3))}var Zw=Pf(em),Qw=Pf(nm);function Jw(s,o){return Ln(Uo(s,o),1)}function e_(s,o){return Ln(Uo(s,o),J)}function n_(s,o,l){return l=l===n?1:De(l),Ln(Uo(s,o),l)}function im(s,o){var l=Oe(s)?Et:$r;return l(s,be(o,3))}function lm(s,o){var l=Oe(s)?bk:rf;return l(s,be(o,3))}var t_=Bo(function(s,o,l){Xe.call(s,l)?s[l].push(o):Tr(s,l,[o])});function r_(s,o,l,f){s=at(s)?s:$a(s),l=l&&!f?De(l):0;var h=s.length;return l<0&&(l=Nn(h+l,0)),Ko(s)?l<=h&&s.indexOf(o,l)>-1:!!h&&Ra(s,o,l)>-1}var a_=Fe(function(s,o,l){var f=-1,h=typeof o=="function",S=at(s)?K(s.length):[];return $r(s,function(A){S[++f]=h?mt(o,A,l):Ts(A,o,l)}),S}),s_=Bo(function(s,o,l){Tr(s,l,o)});function Uo(s,o){var l=Oe(s)?cn:cf;return l(s,be(o,3))}function o_(s,o,l,f){return s==null?[]:(Oe(o)||(o=o==null?[]:[o]),l=f?n:l,Oe(l)||(l=l==null?[]:[l]),pf(s,o,l))}var i_=Bo(function(s,o,l){s[l?0:1].push(o)},function(){return[[],[]]});function l_(s,o,l){var f=Oe(s)?dl:Ic,h=arguments.length<3;return f(s,be(o,4),l,h,$r)}function u_(s,o,l){var f=Oe(s)?wk:Ic,h=arguments.length<3;return f(s,be(o,4),l,h,rf)}function d_(s,o){var l=Oe(s)?jr:af;return l(s,Yo(be(o,3)))}function c_(s){var o=Oe(s)?Jc:r0;return o(s)}function f_(s,o,l){(l?zn(s,o,l):o===n)?o=1:o=De(o);var f=Oe(s)?Mb:a0;return f(s,o)}function m_(s){var o=Oe(s)?Bb:o0;return o(s)}function g_(s){if(s==null)return 0;if(at(s))return Ko(s)?Na(s):s.length;var o=Vn(s);return o==tn||o==H?s.size:Rl(s).length}function p_(s,o,l){var f=Oe(s)?cl:i0;return l&&zn(s,o,l)&&(o=n),f(s,be(o,3))}var h_=Fe(function(s,o){if(s==null)return[];var l=o.length;return l>1&&zn(s,o[0],o[1])?o=[]:l>2&&zn(o[0],o[1],o[2])&&(o=[o[0]]),pf(s,Ln(o,1),[])}),Wo=Xk||function(){return Cn.Date.now()};function y_(s,o){if(typeof o!="function")throw new Ot(u);return s=De(s),function(){if(--s<1)return o.apply(this,arguments)}}function um(s,o,l){return o=l?n:o,o=s&&o==null?s.length:o,Sr(s,F,n,n,n,n,o)}function dm(s,o){var l;if(typeof o!="function")throw new Ot(u);return s=De(s),function(){return--s>0&&(l=o.apply(this,arguments)),s<=1&&(o=n),l}}var Jl=Fe(function(s,o,l){var f=_;if(l.length){var h=Cr(l,Ca(Jl));f|=v}return Sr(s,f,o,l,h)}),cm=Fe(function(s,o,l){var f=_|x;if(l.length){var h=Cr(l,Ca(cm));f|=v}return Sr(o,f,s,l,h)});function fm(s,o,l){o=l?n:o;var f=Sr(s,T,n,n,n,n,n,o);return f.placeholder=fm.placeholder,f}function mm(s,o,l){o=l?n:o;var f=Sr(s,M,n,n,n,n,n,o);return f.placeholder=mm.placeholder,f}function gm(s,o,l){var f,h,S,A,q,L,ee=0,ne=!1,te=!1,ue=!0;if(typeof s!="function")throw new Ot(u);o=Nt(o)||0,gn(l)&&(ne=!!l.leading,te="maxWait"in l,S=te?Nn(Nt(l.maxWait)||0,o):S,ue="trailing"in l?!!l.trailing:ue);function pe(Tn){var Ht=f,Rr=h;return f=h=n,ee=Tn,A=s.apply(Rr,Ht),A}function we(Tn){return ee=Tn,q=xs(Pe,o),ne?pe(Tn):A}function xe(Tn){var Ht=Tn-L,Rr=Tn-ee,Pm=o-Ht;return te?Hn(Pm,S-Rr):Pm}function _e(Tn){var Ht=Tn-L,Rr=Tn-ee;return L===n||Ht>=o||Ht<0||te&&Rr>=S}function Pe(){var Tn=Wo();if(_e(Tn))return je(Tn);q=xs(Pe,xe(Tn))}function je(Tn){return q=n,ue&&f?pe(Tn):(f=h=n,A)}function yt(){q!==n&&Sf(q),ee=0,f=L=h=q=n}function Kn(){return q===n?A:je(Wo())}function vt(){var Tn=Wo(),Ht=_e(Tn);if(f=arguments,h=this,L=Tn,Ht){if(q===n)return we(L);if(te)return Sf(q),q=xs(Pe,o),pe(L)}return q===n&&(q=xs(Pe,o)),A}return vt.cancel=yt,vt.flush=Kn,vt}var v_=Fe(function(s,o){return tf(s,1,o)}),k_=Fe(function(s,o,l){return tf(s,Nt(o)||0,l)});function b_(s){return Sr(s,j)}function Go(s,o){if(typeof s!="function"||o!=null&&typeof o!="function")throw new Ot(u);var l=function(){var f=arguments,h=o?o.apply(this,f):f[0],S=l.cache;if(S.has(h))return S.get(h);var A=s.apply(this,f);return l.cache=S.set(h,A)||S,A};return l.cache=new(Go.Cache||_r),l}Go.Cache=_r;function Yo(s){if(typeof s!="function")throw new Ot(u);return function(){var o=arguments;switch(o.length){case 0:return!s.call(this);case 1:return!s.call(this,o[0]);case 2:return!s.call(this,o[0],o[1]);case 3:return!s.call(this,o[0],o[1],o[2])}return!s.apply(this,o)}}function w_(s){return dm(2,s)}var __=l0(function(s,o){o=o.length==1&&Oe(o[0])?cn(o[0],gt(be())):cn(Ln(o,1),gt(be()));var l=o.length;return Fe(function(f){for(var h=-1,S=Hn(f.length,l);++h<S;)f[h]=o[h].call(this,f[h]);return mt(s,this,f)})}),eu=Fe(function(s,o){var l=Cr(o,Ca(eu));return Sr(s,v,n,o,l)}),pm=Fe(function(s,o){var l=Cr(o,Ca(pm));return Sr(s,P,n,o,l)}),T_=Er(function(s,o){return Sr(s,N,n,n,n,o)});function S_(s,o){if(typeof s!="function")throw new Ot(u);return o=o===n?o:De(o),Fe(s,o)}function E_(s,o){if(typeof s!="function")throw new Ot(u);return o=o==null?0:Nn(De(o),0),Fe(function(l){var f=l[o],h=Ur(l,0,o);return f&&Ir(h,f),mt(s,this,h)})}function O_(s,o,l){var f=!0,h=!0;if(typeof s!="function")throw new Ot(u);return gn(l)&&(f="leading"in l?!!l.leading:f,h="trailing"in l?!!l.trailing:h),gm(s,o,{leading:f,maxWait:o,trailing:h})}function D_(s){return um(s,1)}function x_(s,o){return eu(Il(o),s)}function R_(){if(!arguments.length)return[];var s=arguments[0];return Oe(s)?s:[s]}function F_(s){return xt(s,k)}function N_(s,o){return o=typeof o=="function"?o:n,xt(s,k,o)}function A_(s){return xt(s,p|k)}function P_(s,o){return o=typeof o=="function"?o:n,xt(s,p|k,o)}function M_(s,o){return o==null||nf(s,o,Mn(o))}function $t(s,o){return s===o||s!==s&&o!==o}var B_=Co(Ol),q_=Co(function(s,o){return s>=o}),ca=lf(function(){return arguments}())?lf:function(s){return kn(s)&&Xe.call(s,"callee")&&!Yc.call(s,"callee")},Oe=K.isArray,j_=xc?gt(xc):Wb;function at(s){return s!=null&&zo(s.length)&&!Dr(s)}function _n(s){return kn(s)&&at(s)}function I_(s){return s===!0||s===!1||kn(s)&&Yn(s)==Ve}var Wr=Qk||cu,C_=Rc?gt(Rc):Gb;function L_(s){return kn(s)&&s.nodeType===1&&!Rs(s)}function $_(s){if(s==null)return!0;if(at(s)&&(Oe(s)||typeof s=="string"||typeof s.splice=="function"||Wr(s)||La(s)||ca(s)))return!s.length;var o=Vn(s);if(o==tn||o==H)return!s.size;if(Ds(s))return!Rl(s).length;for(var l in s)if(Xe.call(s,l))return!1;return!0}function H_(s,o){return Ss(s,o)}function V_(s,o,l){l=typeof l=="function"?l:n;var f=l?l(s,o):n;return f===n?Ss(s,o,n,l):!!f}function nu(s){if(!kn(s))return!1;var o=Yn(s);return o==on||o==nn||typeof s.message=="string"&&typeof s.name=="string"&&!Rs(s)}function U_(s){return typeof s=="number"&&Kc(s)}function Dr(s){if(!gn(s))return!1;var o=Yn(s);return o==mn||o==Rn||o==Le||o==nt}function hm(s){return typeof s=="number"&&s==De(s)}function zo(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=z}function gn(s){var o=typeof s;return s!=null&&(o=="object"||o=="function")}function kn(s){return s!=null&&typeof s=="object"}var ym=Fc?gt(Fc):zb;function W_(s,o){return s===o||xl(s,o,Wl(o))}function G_(s,o,l){return l=typeof l=="function"?l:n,xl(s,o,Wl(o),l)}function Y_(s){return vm(s)&&s!=+s}function z_(s){if(N0(s))throw new Se(i);return uf(s)}function K_(s){return s===null}function X_(s){return s==null}function vm(s){return typeof s=="number"||kn(s)&&Yn(s)==Dn}function Rs(s){if(!kn(s)||Yn(s)!=wn)return!1;var o=wo(s);if(o===null)return!0;var l=Xe.call(o,"constructor")&&o.constructor;return typeof l=="function"&&l instanceof l&&yo.call(l)==Gk}var tu=Nc?gt(Nc):Kb;function Z_(s){return hm(s)&&s>=-9007199254740991&&s<=z}var km=Ac?gt(Ac):Xb;function Ko(s){return typeof s=="string"||!Oe(s)&&kn(s)&&Yn(s)==X}function ht(s){return typeof s=="symbol"||kn(s)&&Yn(s)==le}var La=Pc?gt(Pc):Zb;function Q_(s){return s===n}function J_(s){return kn(s)&&Vn(s)==ae}function e1(s){return kn(s)&&Yn(s)==ye}var n1=Co(Fl),t1=Co(function(s,o){return s<=o});function bm(s){if(!s)return[];if(at(s))return Ko(s)?Ct(s):rt(s);if(hs&&s[hs])return Mk(s[hs]());var o=Vn(s),l=o==tn?yl:o==H?go:$a;return l(s)}function xr(s){if(!s)return s===0?s:0;if(s=Nt(s),s===J||s===-1/0){var o=s<0?-1:1;return o*re}return s===s?s:0}function De(s){var o=xr(s),l=o%1;return o===o?l?o-l:o:0}function wm(s){return s?ia(De(s),0,de):0}function Nt(s){if(typeof s=="number")return s;if(ht(s))return se;if(gn(s)){var o=typeof s.valueOf=="function"?s.valueOf():s;s=gn(o)?o+"":o}if(typeof s!="string")return s===0?s:+s;s=Cc(s);var l=jv.test(s);return l||Cv.test(s)?yk(s.slice(2),l?2:8):qv.test(s)?se:+s}function _m(s){return er(s,st(s))}function r1(s){return s?ia(De(s),-9007199254740991,z):s===0?s:0}function Ye(s){return s==null?"":pt(s)}var a1=ja(function(s,o){if(Ds(o)||at(o)){er(o,Mn(o),s);return}for(var l in o)Xe.call(o,l)&&ws(s,l,o[l])}),Tm=ja(function(s,o){er(o,st(o),s)}),Xo=ja(function(s,o,l,f){er(o,st(o),s,f)}),s1=ja(function(s,o,l,f){er(o,Mn(o),s,f)}),o1=Er(Tl);function i1(s,o){var l=qa(s);return o==null?l:ef(l,o)}var l1=Fe(function(s,o){s=rn(s);var l=-1,f=o.length,h=f>2?o[2]:n;for(h&&zn(o[0],o[1],h)&&(f=1);++l<f;)for(var S=o[l],A=st(S),q=-1,L=A.length;++q<L;){var ee=A[q],ne=s[ee];(ne===n||$t(ne,Pa[ee])&&!Xe.call(s,ee))&&(s[ee]=S[ee])}return s}),u1=Fe(function(s){return s.push(n,Lf),mt(Sm,n,s)});function d1(s,o){return Bc(s,be(o,3),Jt)}function c1(s,o){return Bc(s,be(o,3),El)}function f1(s,o){return s==null?s:Sl(s,be(o,3),st)}function m1(s,o){return s==null?s:sf(s,be(o,3),st)}function g1(s,o){return s&&Jt(s,be(o,3))}function p1(s,o){return s&&El(s,be(o,3))}function h1(s){return s==null?[]:No(s,Mn(s))}function y1(s){return s==null?[]:No(s,st(s))}function ru(s,o,l){var f=s==null?n:la(s,o);return f===n?l:f}function v1(s,o){return s!=null&&Vf(s,o,$b)}function au(s,o){return s!=null&&Vf(s,o,Hb)}var k1=Bf(function(s,o,l){o!=null&&typeof o.toString!="function"&&(o=vo.call(o)),s[o]=l},ou(ot)),b1=Bf(function(s,o,l){o!=null&&typeof o.toString!="function"&&(o=vo.call(o)),Xe.call(s,o)?s[o].push(l):s[o]=[l]},be),w1=Fe(Ts);function Mn(s){return at(s)?Qc(s):Rl(s)}function st(s){return at(s)?Qc(s,!0):Qb(s)}function _1(s,o){var l={};return o=be(o,3),Jt(s,function(f,h,S){Tr(l,o(f,h,S),f)}),l}function T1(s,o){var l={};return o=be(o,3),Jt(s,function(f,h,S){Tr(l,h,o(f,h,S))}),l}var S1=ja(function(s,o,l){Ao(s,o,l)}),Sm=ja(function(s,o,l,f){Ao(s,o,l,f)}),E1=Er(function(s,o){var l={};if(s==null)return l;var f=!1;o=cn(o,function(S){return S=Vr(S,s),f||(f=S.length>1),S}),er(s,Vl(s),l),f&&(l=xt(l,p|y|k,k0));for(var h=o.length;h--;)Bl(l,o[h]);return l});function O1(s,o){return Em(s,Yo(be(o)))}var D1=Er(function(s,o){return s==null?{}:e0(s,o)});function Em(s,o){if(s==null)return{};var l=cn(Vl(s),function(f){return[f]});return o=be(o),hf(s,l,function(f,h){return o(f,h[0])})}function x1(s,o,l){o=Vr(o,s);var f=-1,h=o.length;for(h||(h=1,s=n);++f<h;){var S=s==null?n:s[nr(o[f])];S===n&&(f=h,S=l),s=Dr(S)?S.call(s):S}return s}function R1(s,o,l){return s==null?s:Es(s,o,l)}function F1(s,o,l,f){return f=typeof f=="function"?f:n,s==null?s:Es(s,o,l,f)}var Om=If(Mn),Dm=If(st);function N1(s,o,l){var f=Oe(s),h=f||Wr(s)||La(s);if(o=be(o,4),l==null){var S=s&&s.constructor;h?l=f?new S:[]:gn(s)?l=Dr(S)?qa(wo(s)):{}:l={}}return(h?Et:Jt)(s,function(A,q,L){return o(l,A,q,L)}),l}function A1(s,o){return s==null?!0:Bl(s,o)}function P1(s,o,l){return s==null?s:wf(s,o,Il(l))}function M1(s,o,l,f){return f=typeof f=="function"?f:n,s==null?s:wf(s,o,Il(l),f)}function $a(s){return s==null?[]:hl(s,Mn(s))}function B1(s){return s==null?[]:hl(s,st(s))}function q1(s,o,l){return l===n&&(l=o,o=n),l!==n&&(l=Nt(l),l=l===l?l:0),o!==n&&(o=Nt(o),o=o===o?o:0),ia(Nt(s),o,l)}function j1(s,o,l){return o=xr(o),l===n?(l=o,o=0):l=xr(l),s=Nt(s),Vb(s,o,l)}function I1(s,o,l){if(l&&typeof l!="boolean"&&zn(s,o,l)&&(o=l=n),l===n&&(typeof o=="boolean"?(l=o,o=n):typeof s=="boolean"&&(l=s,s=n)),s===n&&o===n?(s=0,o=1):(s=xr(s),o===n?(o=s,s=0):o=xr(o)),s>o){var f=s;s=o,o=f}if(l||s%1||o%1){var h=Xc();return Hn(s+h*(o-s+hk("1e-"+((h+"").length-1))),o)}return Al(s,o)}var C1=Ia(function(s,o,l){return o=o.toLowerCase(),s+(l?xm(o):o)});function xm(s){return su(Ye(s).toLowerCase())}function Rm(s){return s=Ye(s),s&&s.replace($v,Rk).replace(ok,"")}function L1(s,o,l){s=Ye(s),o=pt(o);var f=s.length;l=l===n?f:ia(De(l),0,f);var h=l;return l-=o.length,l>=0&&s.slice(l,h)==o}function $1(s){return s=Ye(s),s&&Da.test(s)?s.replace(It,Fk):s}function H1(s){return s=Ye(s),s&&gs.test(s)?s.replace(ta,"\\$&"):s}var V1=Ia(function(s,o,l){return s+(l?"-":"")+o.toLowerCase()}),U1=Ia(function(s,o,l){return s+(l?" ":"")+o.toLowerCase()}),W1=Af("toLowerCase");function G1(s,o,l){s=Ye(s),o=De(o);var f=o?Na(s):0;if(!o||f>=o)return s;var h=(o-f)/2;return Io(Eo(h),l)+s+Io(So(h),l)}function Y1(s,o,l){s=Ye(s),o=De(o);var f=o?Na(s):0;return o&&f<o?s+Io(o-f,l):s}function z1(s,o,l){s=Ye(s),o=De(o);var f=o?Na(s):0;return o&&f<o?Io(o-f,l)+s:s}function K1(s,o,l){return l||o==null?o=0:o&&(o=+o),tb(Ye(s).replace(nl,""),o||0)}function X1(s,o,l){return(l?zn(s,o,l):o===n)?o=1:o=De(o),Pl(Ye(s),o)}function Z1(){var s=arguments,o=Ye(s[0]);return s.length<3?o:o.replace(s[1],s[2])}var Q1=Ia(function(s,o,l){return s+(l?"_":"")+o.toLowerCase()});function J1(s,o,l){return l&&typeof l!="number"&&zn(s,o,l)&&(o=l=n),l=l===n?de:l>>>0,l?(s=Ye(s),s&&(typeof o=="string"||o!=null&&!tu(o))&&(o=pt(o),!o&&Fa(s))?Ur(Ct(s),0,l):s.split(o,l)):[]}var eT=Ia(function(s,o,l){return s+(l?" ":"")+su(o)});function nT(s,o,l){return s=Ye(s),l=l==null?0:ia(De(l),0,s.length),o=pt(o),s.slice(l,l+o.length)==o}function tT(s,o,l){var f=w.templateSettings;l&&zn(s,o,l)&&(o=n),s=Ye(s),o=Xo({},o,f,Cf);var h=Xo({},o.imports,f.imports,Cf),S=Mn(h),A=hl(h,S),q,L,ee=0,ne=o.interpolate||lo,te="__p += '",ue=vl((o.escape||lo).source+"|"+ne.source+"|"+(ne===$e?Bv:lo).source+"|"+(o.evaluate||lo).source+"|$","g"),pe="//# sourceURL="+(Xe.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ck+"]")+`
`;s.replace(ue,function(_e,Pe,je,yt,Kn,vt){return je||(je=yt),te+=s.slice(ee,vt).replace(Hv,Nk),Pe&&(q=!0,te+=`' +
__e(`+Pe+`) +
'`),Kn&&(L=!0,te+=`';
`+Kn+`;
__p += '`),je&&(te+=`' +
((__t = (`+je+`)) == null ? '' : __t) +
'`),ee=vt+_e.length,_e}),te+=`';
`;var we=Xe.call(o,"variable")&&o.variable;if(!we)te=`with (obj) {
`+te+`
}
`;else if(Pv.test(we))throw new Se(d);te=(L?te.replace(na,""):te).replace(Re,"$1").replace(an,"$1;"),te="function("+(we||"obj")+`) {
`+(we?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(q?", __e = _.escape":"")+(L?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+te+`return __p
}`;var xe=Nm(function(){return Ue(S,pe+"return "+te).apply(n,A)});if(xe.source=te,nu(xe))throw xe;return xe}function rT(s){return Ye(s).toLowerCase()}function aT(s){return Ye(s).toUpperCase()}function sT(s,o,l){if(s=Ye(s),s&&(l||o===n))return Cc(s);if(!s||!(o=pt(o)))return s;var f=Ct(s),h=Ct(o),S=Lc(f,h),A=$c(f,h)+1;return Ur(f,S,A).join("")}function oT(s,o,l){if(s=Ye(s),s&&(l||o===n))return s.slice(0,Vc(s)+1);if(!s||!(o=pt(o)))return s;var f=Ct(s),h=$c(f,Ct(o))+1;return Ur(f,0,h).join("")}function iT(s,o,l){if(s=Ye(s),s&&(l||o===n))return s.replace(nl,"");if(!s||!(o=pt(o)))return s;var f=Ct(s),h=Lc(f,Ct(o));return Ur(f,h).join("")}function lT(s,o){var l=U,f=V;if(gn(o)){var h="separator"in o?o.separator:h;l="length"in o?De(o.length):l,f="omission"in o?pt(o.omission):f}s=Ye(s);var S=s.length;if(Fa(s)){var A=Ct(s);S=A.length}if(l>=S)return s;var q=l-Na(f);if(q<1)return f;var L=A?Ur(A,0,q).join(""):s.slice(0,q);if(h===n)return L+f;if(A&&(q+=L.length-q),tu(h)){if(s.slice(q).search(h)){var ee,ne=L;for(h.global||(h=vl(h.source,Ye(ic.exec(h))+"g")),h.lastIndex=0;ee=h.exec(ne);)var te=ee.index;L=L.slice(0,te===n?q:te)}}else if(s.indexOf(pt(h),q)!=q){var ue=L.lastIndexOf(h);ue>-1&&(L=L.slice(0,ue))}return L+f}function uT(s){return s=Ye(s),s&&ft.test(s)?s.replace(Ke,Ik):s}var dT=Ia(function(s,o,l){return s+(l?" ":"")+o.toUpperCase()}),su=Af("toUpperCase");function Fm(s,o,l){return s=Ye(s),o=l?n:o,o===n?Pk(s)?$k(s):Sk(s):s.match(o)||[]}var Nm=Fe(function(s,o){try{return mt(s,n,o)}catch(l){return nu(l)?l:new Se(l)}}),cT=Er(function(s,o){return Et(o,function(l){l=nr(l),Tr(s,l,Jl(s[l],s))}),s});function fT(s){var o=s==null?0:s.length,l=be();return s=o?cn(s,function(f){if(typeof f[1]!="function")throw new Ot(u);return[l(f[0]),f[1]]}):[],Fe(function(f){for(var h=-1;++h<o;){var S=s[h];if(mt(S[0],this,f))return mt(S[1],this,f)}})}function mT(s){return Ib(xt(s,p))}function ou(s){return function(){return s}}function gT(s,o){return s==null||s!==s?o:s}var pT=Mf(),hT=Mf(!0);function ot(s){return s}function iu(s){return df(typeof s=="function"?s:xt(s,p))}function yT(s){return ff(xt(s,p))}function vT(s,o){return mf(s,xt(o,p))}var kT=Fe(function(s,o){return function(l){return Ts(l,s,o)}}),bT=Fe(function(s,o){return function(l){return Ts(s,l,o)}});function lu(s,o,l){var f=Mn(o),h=No(o,f);l==null&&!(gn(o)&&(h.length||!f.length))&&(l=o,o=s,s=this,h=No(o,Mn(o)));var S=!(gn(l)&&"chain"in l)||!!l.chain,A=Dr(s);return Et(h,function(q){var L=o[q];s[q]=L,A&&(s.prototype[q]=function(){var ee=this.__chain__;if(S||ee){var ne=s(this.__wrapped__),te=ne.__actions__=rt(this.__actions__);return te.push({func:L,args:arguments,thisArg:s}),ne.__chain__=ee,ne}return L.apply(s,Ir([this.value()],arguments))})}),s}function wT(){return Cn._===this&&(Cn._=Yk),this}function uu(){}function _T(s){return s=De(s),Fe(function(o){return gf(o,s)})}var TT=Ll(cn),ST=Ll(Mc),ET=Ll(cl);function Am(s){return Yl(s)?fl(nr(s)):n0(s)}function OT(s){return function(o){return s==null?n:la(s,o)}}var DT=qf(),xT=qf(!0);function du(){return[]}function cu(){return!1}function RT(){return{}}function FT(){return""}function NT(){return!0}function AT(s,o){if(s=De(s),s<1||s>z)return[];var l=de,f=Hn(s,de);o=be(o),s-=de;for(var h=pl(f,o);++l<s;)o(l);return h}function PT(s){return Oe(s)?cn(s,nr):ht(s)?[s]:rt(Qf(Ye(s)))}function MT(s){var o=++Wk;return Ye(s)+o}var BT=jo(function(s,o){return s+o},0),qT=$l("ceil"),jT=jo(function(s,o){return s/o},1),IT=$l("floor");function CT(s){return s&&s.length?Fo(s,ot,Ol):n}function LT(s,o){return s&&s.length?Fo(s,be(o,2),Ol):n}function $T(s){return jc(s,ot)}function HT(s,o){return jc(s,be(o,2))}function VT(s){return s&&s.length?Fo(s,ot,Fl):n}function UT(s,o){return s&&s.length?Fo(s,be(o,2),Fl):n}var WT=jo(function(s,o){return s*o},1),GT=$l("round"),YT=jo(function(s,o){return s-o},0);function zT(s){return s&&s.length?gl(s,ot):0}function KT(s,o){return s&&s.length?gl(s,be(o,2)):0}return w.after=y_,w.ary=um,w.assign=a1,w.assignIn=Tm,w.assignInWith=Xo,w.assignWith=s1,w.at=o1,w.before=dm,w.bind=Jl,w.bindAll=cT,w.bindKey=cm,w.castArray=R_,w.chain=om,w.chunk=I0,w.compact=C0,w.concat=L0,w.cond=fT,w.conforms=mT,w.constant=ou,w.countBy=zw,w.create=i1,w.curry=fm,w.curryRight=mm,w.debounce=gm,w.defaults=l1,w.defaultsDeep=u1,w.defer=v_,w.delay=k_,w.difference=$0,w.differenceBy=H0,w.differenceWith=V0,w.drop=U0,w.dropRight=W0,w.dropRightWhile=G0,w.dropWhile=Y0,w.fill=z0,w.filter=Xw,w.flatMap=Jw,w.flatMapDeep=e_,w.flatMapDepth=n_,w.flatten=tm,w.flattenDeep=K0,w.flattenDepth=X0,w.flip=b_,w.flow=pT,w.flowRight=hT,w.fromPairs=Z0,w.functions=h1,w.functionsIn=y1,w.groupBy=t_,w.initial=J0,w.intersection=ew,w.intersectionBy=nw,w.intersectionWith=tw,w.invert=k1,w.invertBy=b1,w.invokeMap=a_,w.iteratee=iu,w.keyBy=s_,w.keys=Mn,w.keysIn=st,w.map=Uo,w.mapKeys=_1,w.mapValues=T1,w.matches=yT,w.matchesProperty=vT,w.memoize=Go,w.merge=S1,w.mergeWith=Sm,w.method=kT,w.methodOf=bT,w.mixin=lu,w.negate=Yo,w.nthArg=_T,w.omit=E1,w.omitBy=O1,w.once=w_,w.orderBy=o_,w.over=TT,w.overArgs=__,w.overEvery=ST,w.overSome=ET,w.partial=eu,w.partialRight=pm,w.partition=i_,w.pick=D1,w.pickBy=Em,w.property=Am,w.propertyOf=OT,w.pull=ow,w.pullAll=am,w.pullAllBy=iw,w.pullAllWith=lw,w.pullAt=uw,w.range=DT,w.rangeRight=xT,w.rearg=T_,w.reject=d_,w.remove=dw,w.rest=S_,w.reverse=Zl,w.sampleSize=f_,w.set=R1,w.setWith=F1,w.shuffle=m_,w.slice=cw,w.sortBy=h_,w.sortedUniq=vw,w.sortedUniqBy=kw,w.split=J1,w.spread=E_,w.tail=bw,w.take=ww,w.takeRight=_w,w.takeRightWhile=Tw,w.takeWhile=Sw,w.tap=Cw,w.throttle=O_,w.thru=Vo,w.toArray=bm,w.toPairs=Om,w.toPairsIn=Dm,w.toPath=PT,w.toPlainObject=_m,w.transform=N1,w.unary=D_,w.union=Ew,w.unionBy=Ow,w.unionWith=Dw,w.uniq=xw,w.uniqBy=Rw,w.uniqWith=Fw,w.unset=A1,w.unzip=Ql,w.unzipWith=sm,w.update=P1,w.updateWith=M1,w.values=$a,w.valuesIn=B1,w.without=Nw,w.words=Fm,w.wrap=x_,w.xor=Aw,w.xorBy=Pw,w.xorWith=Mw,w.zip=Bw,w.zipObject=qw,w.zipObjectDeep=jw,w.zipWith=Iw,w.entries=Om,w.entriesIn=Dm,w.extend=Tm,w.extendWith=Xo,lu(w,w),w.add=BT,w.attempt=Nm,w.camelCase=C1,w.capitalize=xm,w.ceil=qT,w.clamp=q1,w.clone=F_,w.cloneDeep=A_,w.cloneDeepWith=P_,w.cloneWith=N_,w.conformsTo=M_,w.deburr=Rm,w.defaultTo=gT,w.divide=jT,w.endsWith=L1,w.eq=$t,w.escape=$1,w.escapeRegExp=H1,w.every=Kw,w.find=Zw,w.findIndex=em,w.findKey=d1,w.findLast=Qw,w.findLastIndex=nm,w.findLastKey=c1,w.floor=IT,w.forEach=im,w.forEachRight=lm,w.forIn=f1,w.forInRight=m1,w.forOwn=g1,w.forOwnRight=p1,w.get=ru,w.gt=B_,w.gte=q_,w.has=v1,w.hasIn=au,w.head=rm,w.identity=ot,w.includes=r_,w.indexOf=Q0,w.inRange=j1,w.invoke=w1,w.isArguments=ca,w.isArray=Oe,w.isArrayBuffer=j_,w.isArrayLike=at,w.isArrayLikeObject=_n,w.isBoolean=I_,w.isBuffer=Wr,w.isDate=C_,w.isElement=L_,w.isEmpty=$_,w.isEqual=H_,w.isEqualWith=V_,w.isError=nu,w.isFinite=U_,w.isFunction=Dr,w.isInteger=hm,w.isLength=zo,w.isMap=ym,w.isMatch=W_,w.isMatchWith=G_,w.isNaN=Y_,w.isNative=z_,w.isNil=X_,w.isNull=K_,w.isNumber=vm,w.isObject=gn,w.isObjectLike=kn,w.isPlainObject=Rs,w.isRegExp=tu,w.isSafeInteger=Z_,w.isSet=km,w.isString=Ko,w.isSymbol=ht,w.isTypedArray=La,w.isUndefined=Q_,w.isWeakMap=J_,w.isWeakSet=e1,w.join=rw,w.kebabCase=V1,w.last=Ft,w.lastIndexOf=aw,w.lowerCase=U1,w.lowerFirst=W1,w.lt=n1,w.lte=t1,w.max=CT,w.maxBy=LT,w.mean=$T,w.meanBy=HT,w.min=VT,w.minBy=UT,w.stubArray=du,w.stubFalse=cu,w.stubObject=RT,w.stubString=FT,w.stubTrue=NT,w.multiply=WT,w.nth=sw,w.noConflict=wT,w.noop=uu,w.now=Wo,w.pad=G1,w.padEnd=Y1,w.padStart=z1,w.parseInt=K1,w.random=I1,w.reduce=l_,w.reduceRight=u_,w.repeat=X1,w.replace=Z1,w.result=x1,w.round=GT,w.runInContext=I,w.sample=c_,w.size=g_,w.snakeCase=Q1,w.some=p_,w.sortedIndex=fw,w.sortedIndexBy=mw,w.sortedIndexOf=gw,w.sortedLastIndex=pw,w.sortedLastIndexBy=hw,w.sortedLastIndexOf=yw,w.startCase=eT,w.startsWith=nT,w.subtract=YT,w.sum=zT,w.sumBy=KT,w.template=tT,w.times=AT,w.toFinite=xr,w.toInteger=De,w.toLength=wm,w.toLower=rT,w.toNumber=Nt,w.toSafeInteger=r1,w.toString=Ye,w.toUpper=aT,w.trim=sT,w.trimEnd=oT,w.trimStart=iT,w.truncate=lT,w.unescape=uT,w.uniqueId=MT,w.upperCase=dT,w.upperFirst=su,w.each=im,w.eachRight=lm,w.first=rm,lu(w,function(){var s={};return Jt(w,function(o,l){Xe.call(w.prototype,l)||(s[l]=o)}),s}(),{chain:!1}),w.VERSION=t,Et(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){w[s].placeholder=w}),Et(["drop","take"],function(s,o){Be.prototype[s]=function(l){l=l===n?1:Nn(De(l),0);var f=this.__filtered__&&!o?new Be(this):this.clone();return f.__filtered__?f.__takeCount__=Hn(l,f.__takeCount__):f.__views__.push({size:Hn(l,de),type:s+(f.__dir__<0?"Right":"")}),f},Be.prototype[s+"Right"]=function(l){return this.reverse()[s](l).reverse()}}),Et(["filter","map","takeWhile"],function(s,o){var l=o+1,f=l==W||l==$;Be.prototype[s]=function(h){var S=this.clone();return S.__iteratees__.push({iteratee:be(h,3),type:l}),S.__filtered__=S.__filtered__||f,S}}),Et(["head","last"],function(s,o){var l="take"+(o?"Right":"");Be.prototype[s]=function(){return this[l](1).value()[0]}}),Et(["initial","tail"],function(s,o){var l="drop"+(o?"":"Right");Be.prototype[s]=function(){return this.__filtered__?new Be(this):this[l](1)}}),Be.prototype.compact=function(){return this.filter(ot)},Be.prototype.find=function(s){return this.filter(s).head()},Be.prototype.findLast=function(s){return this.reverse().find(s)},Be.prototype.invokeMap=Fe(function(s,o){return typeof s=="function"?new Be(this):this.map(function(l){return Ts(l,s,o)})}),Be.prototype.reject=function(s){return this.filter(Yo(be(s)))},Be.prototype.slice=function(s,o){s=De(s);var l=this;return l.__filtered__&&(s>0||o<0)?new Be(l):(s<0?l=l.takeRight(-s):s&&(l=l.drop(s)),o!==n&&(o=De(o),l=o<0?l.dropRight(-o):l.take(o-s)),l)},Be.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},Be.prototype.toArray=function(){return this.take(de)},Jt(Be.prototype,function(s,o){var l=/^(?:filter|find|map|reject)|While$/.test(o),f=/^(?:head|last)$/.test(o),h=w[f?"take"+(o=="last"?"Right":""):o],S=f||/^find/.test(o);h&&(w.prototype[o]=function(){var A=this.__wrapped__,q=f?[1]:arguments,L=A instanceof Be,ee=q[0],ne=L||Oe(A),te=function(Pe){var je=h.apply(w,Ir([Pe],q));return f&&ue?je[0]:je};ne&&l&&typeof ee=="function"&&ee.length!=1&&(L=ne=!1);var ue=this.__chain__,pe=!!this.__actions__.length,we=S&&!ue,xe=L&&!pe;if(!S&&ne){A=xe?A:new Be(this);var _e=s.apply(A,q);return _e.__actions__.push({func:Vo,args:[te],thisArg:n}),new Dt(_e,ue)}return we&&xe?s.apply(this,q):(_e=this.thru(te),we?f?_e.value()[0]:_e.value():_e)})}),Et(["pop","push","shift","sort","splice","unshift"],function(s){var o=po[s],l=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",f=/^(?:pop|shift)$/.test(s);w.prototype[s]=function(){var h=arguments;if(f&&!this.__chain__){var S=this.value();return o.apply(Oe(S)?S:[],h)}return this[l](function(A){return o.apply(Oe(A)?A:[],h)})}}),Jt(Be.prototype,function(s,o){var l=w[o];if(l){var f=l.name+"";Xe.call(Ba,f)||(Ba[f]=[]),Ba[f].push({name:o,func:l})}}),Ba[qo(n,x).name]=[{name:"wrapper",func:n}],Be.prototype.clone=ub,Be.prototype.reverse=db,Be.prototype.value=cb,w.prototype.at=Lw,w.prototype.chain=$w,w.prototype.commit=Hw,w.prototype.next=Vw,w.prototype.plant=Ww,w.prototype.reverse=Gw,w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=Yw,w.prototype.first=w.prototype.head,hs&&(w.prototype[hs]=Uw),w},Aa=Hk();ra?((ra.exports=Aa)._=Aa,il._=Aa):Cn._=Aa}).call(xB)}(Ls,Ls.exports)),Ls.exports}RB();_t(ro);const Ky=E.forwardRef((e,r)=>Q.jsx(zt,{gap:"2",style:{display:"flex"},...e,ref:r}));Ky.displayName="FaktaGruppe";Ky.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Bu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Zg;function FB(){return Zg||(Zg=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var i="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(i=a(i,t.call(this,d)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var u="";for(var d in i)r.call(i,d)&&i[d]&&(u=a(u,this&&this[d]||d));return u}function a(i,u){return u?i?i+" "+u:i+u:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Bu)),Bu.exports}var NB=FB();const AB=Hp(NB),PB="_boks_c3bfh_1",MB="_harBorderLeft_c3bfh_8",BB="_harBorderTop_c3bfh_12",qB={boks:PB,harBorderLeft:MB,harBorderTop:BB};AB.bind(qB);var qu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Qg;function jB(){return Qg||(Qg=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var i="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(i=a(i,t(d)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var u="";for(var d in i)r.call(i,d)&&i[d]&&(u=a(u,d));return u}function a(i,u){return u?i?i+" "+u:i+u:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(qu)),qu.exports}jB();var IB=Object.defineProperty,CB=(e,r,n)=>r in e?IB(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Jg=(e,r,n)=>CB(e,typeof r!="symbol"?r+"":r,n);function Xy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ep={exports:{}},Bs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function LB(){if(np)return Bs;np=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var u=null;if(i!==void 0&&(u=""+i),a.key!==void 0&&(u=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:u,ref:a!==void 0?a:null,props:i}}return Bs.Fragment=r,Bs.jsx=n,Bs.jsxs=n,Bs}var tp;function $B(){return tp||(tp=1,ep.exports=LB()),ep.exports}var Nr=$B();const HB="_autocompleteSuggestion__substring_mf7v0_1",VB="_autocompleteSuggestion__inner_mf7v0_4",qs={autocompleteSuggestion__substring:HB,autocompleteSuggestion__inner:VB,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12"};class UB extends b.Component{constructor(r){super(r),this.state={value:r.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:r}=this.props,{value:n}=this.state;r(n)}onMouseMove(){const{setSuggestionIndex:r,index:n}=this.props;r(n)}render(){const{match:r,active:n,avoidBlur:t,id:a}=this.props,{value:i}=this.state.value,u=i.toLowerCase().startsWith(r.toLowerCase());return Nr.jsx("li",{id:a,role:"option","aria-selected":n,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:u?Nr.jsxs("span",{className:`${qs.autocompleteSuggestion__inner} ${n?qs["autocompleteSuggestion--active"]:""}`,children:[i.substring(0,r.length),Nr.jsx("span",{className:qs.autocompleteSuggestion__substring,children:i.substring(r.length)})]}):Nr.jsx("span",{className:`${qs.autocompleteSuggestion__inner} ${n?qs["autocompleteSuggestion--active"]:""}`,children:i})})}}const WB="_autocomplete_9dlnp_1",GB="_autocomplete__suggestions_9dlnp_27",ju={autocomplete:WB,autocomplete__suggestions:GB,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31"};class wI extends b.Component{constructor(r){super(r),Jg(this,"input"),Jg(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=n=>{this.input=n},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:r}=this.state;r&&(clearTimeout(r),this.setState({blurDelay:null}))}onChange(r){const{onChange:n}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),n(r)}onSearchButtonClick(r){const{onSearchButtonClick:n}=this.props;r.preventDefault(),n&&n()}onKeyDown(r){const{shouldShowSuggestions:n}=this.state;let{activeSuggestionIndex:t}=this.state;const{suggestions:a}=this.props,i=t>-1;switch(this.setState({setAriaActiveDescendant:r.keyCode===38||r.keyCode===40}),r.keyCode){case 9:i&&n&&this.setValue(a[t]);break;case 13:i&&n?(r.preventDefault(),this.setValue(a[t])):n&&a.length===1?this.setValue(a[0]):this.setState({shouldShowSuggestions:!1});break;case 27:n&&a.length>0&&(r.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:n&&(r.preventDefault(),t=t-1===-2?-1:t-1,this.setState({activeSuggestionIndex:t}));break;case 40:n&&(r.preventDefault(),t=t+1===a.length?a.length-1:t+1,this.setState({activeSuggestionIndex:t}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const r=setTimeout(()=>{const{shouldBlur:t}=this.state;t&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:r});const{onBlur:n}=this.props;n&&n()}setSuggestionIndex(r){this.setState({activeSuggestionIndex:r}),this.clearBlurDelay()}setValue(r){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:n}=this.props;n(r)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:r}=this.state;r&&(clearTimeout(r),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:r,id:n,ariaLabel:t,placeholder:a,value:i,name:u,shouldFocusOnMount:d,isLoading:c}=this.props,{activeSuggestionIndex:m,setAriaActiveDescendant:g,hasFocus:p,shouldShowSuggestions:y}=this.state,k=p&&y&&r.length>0,O=g&&m>-1?`${n}-item-${m}`:void 0;return Nr.jsxs("div",{className:`${ju.autocomplete} autocomplete`,"aria-expanded":k,"aria-owns":`${n}-suggestions`,"aria-haspopup":"listbox",children:[Nr.jsx(Zu,{variant:"primary",id:n,name:u,"aria-label":t,"aria-autocomplete":"list","aria-controls":`${n}-suggestions`,"aria-activedescendant":O,placeholder:a,value:i,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:D=>{this.inputRef=D},className:"typo-normal",autoFocus:d,label:t,hideLabel:!0,children:Nr.jsx(Zu.Button,{loading:c,onClick:this.onSearchButtonClick})}),Nr.jsx("ul",{id:`${n}-suggestions`,role:"listbox",className:k?ju.autocomplete__suggestions:ju["autocomplete__suggestions--hidden"],children:k&&r.map((D,_)=>Nr.jsx(UB,{id:`${n}-item-${_}`,index:_,value:D,match:i,active:_===m,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},D.key))})]})}}var sd={exports:{}},YB=sd.exports,rp;function zB(){return rp||(rp=1,function(e,r){(function(n,t){e.exports=t()})(YB,function(){var n=1e3,t=6e4,a=36e5,i="millisecond",u="second",d="minute",c="hour",m="day",g="week",p="month",y="quarter",k="year",O="date",D="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(W){var Y=["th","st","nd","rd"],$=W%100;return"["+W+(Y[($-20)%10]||Y[$]||Y[0])+"]"}},T=function(W,Y,$){var J=String(W);return!J||J.length>=Y?W:""+Array(Y+1-J.length).join($)+W},M={s:T,z:function(W){var Y=-W.utcOffset(),$=Math.abs(Y),J=Math.floor($/60),z=$%60;return(Y<=0?"+":"-")+T(J,2,"0")+":"+T(z,2,"0")},m:function W(Y,$){if(Y.date()<$.date())return-W($,Y);var J=12*($.year()-Y.year())+($.month()-Y.month()),z=Y.clone().add(J,p),re=$-z<0,se=Y.clone().add(J+(re?-1:1),p);return+(-(J+($-z)/(re?z-se:se-z))||0)},a:function(W){return W<0?Math.ceil(W)||0:Math.floor(W)},p:function(W){return{M:p,y:k,w:g,d:m,D:O,h:c,m:d,s:u,ms:i,Q:y}[W]||String(W||"").toLowerCase().replace(/s$/,"")},u:function(W){return W===void 0}},v="en",P={};P[v]=R;var F="$isDayjsObject",N=function(W){return W instanceof G||!(!W||!W[F])},j=function W(Y,$,J){var z;if(!Y)return v;if(typeof Y=="string"){var re=Y.toLowerCase();P[re]&&(z=re),$&&(P[re]=$,z=re);var se=Y.split("-");if(!z&&se.length>1)return W(se[0])}else{var de=Y.name;P[de]=Y,z=de}return!J&&z&&(v=z),z||!J&&v},U=function(W,Y){if(N(W))return W.clone();var $=typeof Y=="object"?Y:{};return $.date=W,$.args=arguments,new G($)},V=M;V.l=j,V.i=N,V.w=function(W,Y){return U(W,{locale:Y.$L,utc:Y.$u,x:Y.$x,$offset:Y.$offset})};var G=function(){function W($){this.$L=j($.locale,null,!0),this.parse($),this.$x=this.$x||$.x||{},this[F]=!0}var Y=W.prototype;return Y.parse=function($){this.$d=function(J){var z=J.date,re=J.utc;if(z===null)return new Date(NaN);if(V.u(z))return new Date;if(z instanceof Date)return new Date(z);if(typeof z=="string"&&!/Z$/i.test(z)){var se=z.match(_);if(se){var de=se[2]-1||0,Te=(se[7]||"0").substring(0,3);return re?new Date(Date.UTC(se[1],de,se[3]||1,se[4]||0,se[5]||0,se[6]||0,Te)):new Date(se[1],de,se[3]||1,se[4]||0,se[5]||0,se[6]||0,Te)}}return new Date(z)}($),this.init()},Y.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},Y.$utils=function(){return V},Y.isValid=function(){return this.$d.toString()!==D},Y.isSame=function($,J){var z=U($);return this.startOf(J)<=z&&z<=this.endOf(J)},Y.isAfter=function($,J){return U($)<this.startOf(J)},Y.isBefore=function($,J){return this.endOf(J)<U($)},Y.$g=function($,J,z){return V.u($)?this[J]:this.set(z,$)},Y.unix=function(){return Math.floor(this.valueOf()/1e3)},Y.valueOf=function(){return this.$d.getTime()},Y.startOf=function($,J){var z=this,re=!!V.u(J)||J,se=V.p($),de=function(en,nn){var on=V.w(z.$u?Date.UTC(z.$y,nn,en):new Date(z.$y,nn,en),z);return re?on:on.endOf(m)},Te=function(en,nn){return V.w(z.toDate()[en].apply(z.toDate("s"),(re?[0,0,0,0]:[23,59,59,999]).slice(nn)),z)},Ee=this.$W,Ge=this.$M,me=this.$D,he="set"+(this.$u?"UTC":"");switch(se){case k:return re?de(1,0):de(31,11);case p:return re?de(1,Ge):de(0,Ge+1);case g:var Le=this.$locale().weekStart||0,Ve=(Ee<Le?Ee+7:Ee)-Le;return de(re?me-Ve:me+(6-Ve),Ge);case m:case O:return Te(he+"Hours",0);case c:return Te(he+"Minutes",1);case d:return Te(he+"Seconds",2);case u:return Te(he+"Milliseconds",3);default:return this.clone()}},Y.endOf=function($){return this.startOf($,!1)},Y.$set=function($,J){var z,re=V.p($),se="set"+(this.$u?"UTC":""),de=(z={},z[m]=se+"Date",z[O]=se+"Date",z[p]=se+"Month",z[k]=se+"FullYear",z[c]=se+"Hours",z[d]=se+"Minutes",z[u]=se+"Seconds",z[i]=se+"Milliseconds",z)[re],Te=re===m?this.$D+(J-this.$W):J;if(re===p||re===k){var Ee=this.clone().set(O,1);Ee.$d[de](Te),Ee.init(),this.$d=Ee.set(O,Math.min(this.$D,Ee.daysInMonth())).$d}else de&&this.$d[de](Te);return this.init(),this},Y.set=function($,J){return this.clone().$set($,J)},Y.get=function($){return this[V.p($)]()},Y.add=function($,J){var z,re=this;$=Number($);var se=V.p(J),de=function(Ge){var me=U(re);return V.w(me.date(me.date()+Math.round(Ge*$)),re)};if(se===p)return this.set(p,this.$M+$);if(se===k)return this.set(k,this.$y+$);if(se===m)return de(1);if(se===g)return de(7);var Te=(z={},z[d]=t,z[c]=a,z[u]=n,z)[se]||1,Ee=this.$d.getTime()+$*Te;return V.w(Ee,this)},Y.subtract=function($,J){return this.add(-1*$,J)},Y.format=function($){var J=this,z=this.$locale();if(!this.isValid())return z.invalidDate||D;var re=$||"YYYY-MM-DDTHH:mm:ssZ",se=V.z(this),de=this.$H,Te=this.$m,Ee=this.$M,Ge=z.weekdays,me=z.months,he=z.meridiem,Le=function(nn,on,mn,Rn){return nn&&(nn[on]||nn(J,re))||mn[on].slice(0,Rn)},Ve=function(nn){return V.s(de%12||12,nn,"0")},en=he||function(nn,on,mn){var Rn=nn<12?"AM":"PM";return mn?Rn.toLowerCase():Rn};return re.replace(x,function(nn,on){return on||function(mn){switch(mn){case"YY":return String(J.$y).slice(-2);case"YYYY":return V.s(J.$y,4,"0");case"M":return Ee+1;case"MM":return V.s(Ee+1,2,"0");case"MMM":return Le(z.monthsShort,Ee,me,3);case"MMMM":return Le(me,Ee);case"D":return J.$D;case"DD":return V.s(J.$D,2,"0");case"d":return String(J.$W);case"dd":return Le(z.weekdaysMin,J.$W,Ge,2);case"ddd":return Le(z.weekdaysShort,J.$W,Ge,3);case"dddd":return Ge[J.$W];case"H":return String(de);case"HH":return V.s(de,2,"0");case"h":return Ve(1);case"hh":return Ve(2);case"a":return en(de,Te,!0);case"A":return en(de,Te,!1);case"m":return String(Te);case"mm":return V.s(Te,2,"0");case"s":return String(J.$s);case"ss":return V.s(J.$s,2,"0");case"SSS":return V.s(J.$ms,3,"0");case"Z":return se}return null}(nn)||se.replace(":","")})},Y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},Y.diff=function($,J,z){var re,se=this,de=V.p(J),Te=U($),Ee=(Te.utcOffset()-this.utcOffset())*t,Ge=this-Te,me=function(){return V.m(se,Te)};switch(de){case k:re=me()/12;break;case p:re=me();break;case y:re=me()/3;break;case g:re=(Ge-Ee)/6048e5;break;case m:re=(Ge-Ee)/864e5;break;case c:re=Ge/a;break;case d:re=Ge/t;break;case u:re=Ge/n;break;default:re=Ge}return z?re:V.a(re)},Y.daysInMonth=function(){return this.endOf(p).$D},Y.$locale=function(){return P[this.$L]},Y.locale=function($,J){if(!$)return this.$L;var z=this.clone(),re=j($,J,!0);return re&&(z.$L=re),z},Y.clone=function(){return V.w(this.$d,this)},Y.toDate=function(){return new Date(this.valueOf())},Y.toJSON=function(){return this.isValid()?this.toISOString():null},Y.toISOString=function(){return this.$d.toISOString()},Y.toString=function(){return this.$d.toUTCString()},W}(),C=G.prototype;return U.prototype=C,[["$ms",i],["$s",u],["$m",d],["$H",c],["$W",m],["$M",p],["$y",k],["$D",O]].forEach(function(W){C[W[1]]=function(Y){return this.$g(Y,W[0],W[1])}}),U.extend=function(W,Y){return W.$i||(W(Y,G,U),W.$i=!0),U},U.locale=j,U.isDayjs=N,U.unix=function(W){return U(1e3*W)},U.en=P[v],U.Ls=P,U.p={},U})}(sd)),sd.exports}var KB=zB();const ao=Xy(KB);var od=function(e,r){return od=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])},od(e,r)};function Zt(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");od(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var ge=function(){return ge=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ge.apply(this,arguments)};function Ki(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n}function sr(e,r,n){if(arguments.length===2)for(var t=0,a=r.length,i;t<a;t++)(i||!(t in r))&&(i||(i=Array.prototype.slice.call(r,0,t)),i[t]=r[t]);return e.concat(i||Array.prototype.slice.call(r))}function rr(e,r){var n=r&&r.cache?r.cache:tq,t=r&&r.serializer?r.serializer:eq,a=r&&r.strategy?r.strategy:QB;return a(e,{cache:n,serializer:t})}function XB(e){return e==null||typeof e=="number"||typeof e=="boolean"}function ZB(e,r,n,t){var a=XB(t)?t:n(t),i=r.get(a);return typeof i>"u"&&(i=e.call(this,t),r.set(a,i)),i}function Zy(e,r,n){var t=Array.prototype.slice.call(arguments,3),a=n(t),i=r.get(a);return typeof i>"u"&&(i=e.apply(this,t),r.set(a,i)),i}function Qy(e,r,n,t,a){return n.bind(r,e,t,a)}function QB(e,r){var n=e.length===1?ZB:Zy;return Qy(e,this,n,r.cache.create(),r.serializer)}function JB(e,r){return Qy(e,this,Zy,r.cache.create(),r.serializer)}var eq=function(){return JSON.stringify(arguments)},nq=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(r){return this.cache[r]},e.prototype.set=function(r,n){this.cache[r]=n},e}(),tq={create:function(){return new nq}},ar={variadic:JB},Ie;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ie||(Ie={}));var un;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(un||(un={}));var as;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(as||(as={}));function ap(e){return e.type===un.literal}function rq(e){return e.type===un.argument}function Jy(e){return e.type===un.number}function ev(e){return e.type===un.date}function nv(e){return e.type===un.time}function tv(e){return e.type===un.select}function rv(e){return e.type===un.plural}function aq(e){return e.type===un.pound}function av(e){return e.type===un.tag}function sv(e){return!!(e&&typeof e=="object"&&e.type===as.number)}function id(e){return!!(e&&typeof e=="object"&&e.type===as.dateTime)}var ov=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,sq=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function oq(e){var r={};return e.replace(sq,function(n){var t=n.length;switch(n[0]){case"G":r.era=t===4?"long":t===5?"narrow":"short";break;case"y":r.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":r.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":r.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"a":r.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][t-1];break;case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][t-1];break;case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][t-1];break;case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":r.minute=["numeric","2-digit"][t-1];break;case"s":r.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":r.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),r}var iq=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function lq(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var r=e.split(iq).filter(function(y){return y.length>0}),n=[],t=0,a=r;t<a.length;t++){var i=a[t],u=i.split("/");if(u.length===0)throw new Error("Invalid number skeleton");for(var d=u[0],c=u.slice(1),m=0,g=c;m<g.length;m++){var p=g[m];if(p.length===0)throw new Error("Invalid number skeleton")}n.push({stem:d,options:c})}return n}function uq(e){return e.replace(/^(.*?)-/,"")}var sp=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,iv=/^(@+)?(\+|#+)?[rs]?$/g,dq=/(\*)(0+)|(#+)(0+)|(0+)/g,lv=/^(0+)$/;function op(e){var r={};return e[e.length-1]==="r"?r.roundingPriority="morePrecision":e[e.length-1]==="s"&&(r.roundingPriority="lessPrecision"),e.replace(iv,function(n,t,a){return typeof a!="string"?(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length):a==="+"?r.minimumSignificantDigits=t.length:t[0]==="#"?r.maximumSignificantDigits=t.length:(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length+(typeof a=="string"?a.length:0)),""}),r}function uv(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function cq(e){var r;if(e[0]==="E"&&e[1]==="E"?(r={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(r={notation:"scientific"},e=e.slice(1)),r){var n=e.slice(0,2);if(n==="+!"?(r.signDisplay="always",e=e.slice(2)):n==="+?"&&(r.signDisplay="exceptZero",e=e.slice(2)),!lv.test(e))throw new Error("Malformed concise eng/scientific notation");r.minimumIntegerDigits=e.length}return r}function ip(e){var r={},n=uv(e);return n||r}function fq(e){for(var r={},n=0,t=e;n<t.length;n++){var a=t[n];switch(a.stem){case"percent":case"%":r.style="percent";continue;case"%x100":r.style="percent",r.scale=100;continue;case"currency":r.style="currency",r.currency=a.options[0];continue;case"group-off":case",_":r.useGrouping=!1;continue;case"precision-integer":case".":r.maximumFractionDigits=0;continue;case"measure-unit":case"unit":r.style="unit",r.unit=uq(a.options[0]);continue;case"compact-short":case"K":r.notation="compact",r.compactDisplay="short";continue;case"compact-long":case"KK":r.notation="compact",r.compactDisplay="long";continue;case"scientific":r=ge(ge(ge({},r),{notation:"scientific"}),a.options.reduce(function(c,m){return ge(ge({},c),ip(m))},{}));continue;case"engineering":r=ge(ge(ge({},r),{notation:"engineering"}),a.options.reduce(function(c,m){return ge(ge({},c),ip(m))},{}));continue;case"notation-simple":r.notation="standard";continue;case"unit-width-narrow":r.currencyDisplay="narrowSymbol",r.unitDisplay="narrow";continue;case"unit-width-short":r.currencyDisplay="code",r.unitDisplay="short";continue;case"unit-width-full-name":r.currencyDisplay="name",r.unitDisplay="long";continue;case"unit-width-iso-code":r.currencyDisplay="symbol";continue;case"scale":r.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":r.roundingMode="floor";continue;case"rounding-mode-ceiling":r.roundingMode="ceil";continue;case"rounding-mode-down":r.roundingMode="trunc";continue;case"rounding-mode-up":r.roundingMode="expand";continue;case"rounding-mode-half-even":r.roundingMode="halfEven";continue;case"rounding-mode-half-down":r.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":r.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(dq,function(c,m,g,p,y,k){if(m)r.minimumIntegerDigits=g.length;else{if(p&&y)throw new Error("We currently do not support maximum integer digits");if(k)throw new Error("We currently do not support exact integer digits")}return""});continue}if(lv.test(a.stem)){r.minimumIntegerDigits=a.stem.length;continue}if(sp.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(sp,function(c,m,g,p,y,k){return g==="*"?r.minimumFractionDigits=m.length:p&&p[0]==="#"?r.maximumFractionDigits=p.length:y&&k?(r.minimumFractionDigits=y.length,r.maximumFractionDigits=y.length+k.length):(r.minimumFractionDigits=m.length,r.maximumFractionDigits=m.length),""});var i=a.options[0];i==="w"?r=ge(ge({},r),{trailingZeroDisplay:"stripIfInteger"}):i&&(r=ge(ge({},r),op(i)));continue}if(iv.test(a.stem)){r=ge(ge({},r),op(a.stem));continue}var u=uv(a.stem);u&&(r=ge(ge({},r),u));var d=cq(a.stem);d&&(r=ge(ge({},r),d))}return r}var ni={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function mq(e,r){for(var n="",t=0;t<e.length;t++){var a=e.charAt(t);if(a==="j"){for(var i=0;t+1<e.length&&e.charAt(t+1)===a;)i++,t++;var u=1+(i&1),d=i<2?1:3+(i>>1),c="a",m=gq(r);for((m=="H"||m=="k")&&(d=0);d-- >0;)n+=c;for(;u-- >0;)n=m+n}else a==="J"?n+="H":n+=a}return n}function gq(e){var r=e.hourCycle;if(r===void 0&&e.hourCycles&&e.hourCycles.length&&(r=e.hourCycles[0]),r)switch(r){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,t;n!=="root"&&(t=e.maximize().region);var a=ni[t||""]||ni[n||""]||ni["".concat(n,"-001")]||ni["001"];return a[0]}var Iu,pq=new RegExp("^".concat(ov.source,"*")),hq=new RegExp("".concat(ov.source,"*$"));function Ce(e,r){return{start:e,end:r}}var yq=!!String.prototype.startsWith&&"_a".startsWith("a",1),vq=!!String.fromCodePoint,kq=!!Object.fromEntries,bq=!!String.prototype.codePointAt,wq=!!String.prototype.trimStart,_q=!!String.prototype.trimEnd,Tq=!!Number.isSafeInteger,Sq=Tq?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ld=!0;try{var Eq=cv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ld=((Iu=Eq.exec("a"))===null||Iu===void 0?void 0:Iu[0])==="a"}catch{ld=!1}var lp=yq?function(e,r,n){return e.startsWith(r,n)}:function(e,r,n){return e.slice(n,n+r.length)===r},ud=vq?String.fromCodePoint:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n="",t=e.length,a=0,i;t>a;){if(i=e[a++],i>1114111)throw RangeError(i+" is not a valid code point");n+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return n},up=kq?Object.fromEntries:function(e){for(var r={},n=0,t=e;n<t.length;n++){var a=t[n],i=a[0],u=a[1];r[i]=u}return r},dv=bq?function(e,r){return e.codePointAt(r)}:function(e,r){var n=e.length;if(!(r<0||r>=n)){var t=e.charCodeAt(r),a;return t<55296||t>56319||r+1===n||(a=e.charCodeAt(r+1))<56320||a>57343?t:(t-55296<<10)+(a-56320)+65536}},Oq=wq?function(e){return e.trimStart()}:function(e){return e.replace(pq,"")},Dq=_q?function(e){return e.trimEnd()}:function(e){return e.replace(hq,"")};function cv(e,r){return new RegExp(e,r)}var dd;if(ld){var dp=cv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");dd=function(e,r){var n;dp.lastIndex=r;var t=dp.exec(e);return(n=t[1])!==null&&n!==void 0?n:""}}else dd=function(e,r){for(var n=[];;){var t=dv(e,r);if(t===void 0||fv(t)||Nq(t))break;n.push(t),r+=t>=65536?2:1}return ud.apply(void 0,n)};var xq=function(){function e(r,n){n===void 0&&(n={}),this.message=r,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(r,n,t){for(var a=[];!this.isEOF();){var i=this.char();if(i===123){var u=this.parseArgument(r,t);if(u.err)return u;a.push(u.val)}else{if(i===125&&r>0)break;if(i===35&&(n==="plural"||n==="selectordinal")){var d=this.clonePosition();this.bump(),a.push({type:un.pound,location:Ce(d,this.clonePosition())})}else if(i===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(Ie.UNMATCHED_CLOSING_TAG,Ce(this.clonePosition(),this.clonePosition()))}else if(i===60&&!this.ignoreTag&&cd(this.peek()||0)){var u=this.parseTag(r,n);if(u.err)return u;a.push(u.val)}else{var u=this.parseLiteral(r,n);if(u.err)return u;a.push(u.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(r,n){var t=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:un.literal,value:"<".concat(a,"/>"),location:Ce(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var i=this.parseMessage(r+1,n,!0);if(i.err)return i;var u=i.val,d=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!cd(this.char()))return this.error(Ie.INVALID_TAG,Ce(d,this.clonePosition()));var c=this.clonePosition(),m=this.parseTagName();return a!==m?this.error(Ie.UNMATCHED_CLOSING_TAG,Ce(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:un.tag,value:a,children:u,location:Ce(t,this.clonePosition())},err:null}:this.error(Ie.INVALID_TAG,Ce(d,this.clonePosition())))}else return this.error(Ie.UNCLOSED_TAG,Ce(t,this.clonePosition()))}else return this.error(Ie.INVALID_TAG,Ce(t,this.clonePosition()))},e.prototype.parseTagName=function(){var r=this.offset();for(this.bump();!this.isEOF()&&Fq(this.char());)this.bump();return this.message.slice(r,this.offset())},e.prototype.parseLiteral=function(r,n){for(var t=this.clonePosition(),a="";;){var i=this.tryParseQuote(n);if(i){a+=i;continue}var u=this.tryParseUnquoted(r,n);if(u){a+=u;continue}var d=this.tryParseLeftAngleBracket();if(d){a+=d;continue}break}var c=Ce(t,this.clonePosition());return{val:{type:un.literal,value:a,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Rq(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(r){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(r==="plural"||r==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(t);this.bump()}return ud.apply(void 0,n)},e.prototype.tryParseUnquoted=function(r,n){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(n==="plural"||n==="selectordinal")||t===125&&r>0?null:(this.bump(),ud(t))},e.prototype.parseArgument=function(r,n){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ie.EMPTY_ARGUMENT,Ce(t,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(Ie.MALFORMED_ARGUMENT,Ce(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:un.argument,value:a,location:Ce(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(t,this.clonePosition())):this.parseArgumentOptions(r,n,a,t);default:return this.error(Ie.MALFORMED_ARGUMENT,Ce(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var r=this.clonePosition(),n=this.offset(),t=dd(this.message,n),a=n+t.length;this.bumpTo(a);var i=this.clonePosition(),u=Ce(r,i);return{value:t,location:u}},e.prototype.parseArgumentOptions=function(r,n,t,a){var i,u=this.clonePosition(),d=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(d){case"":return this.error(Ie.EXPECT_ARGUMENT_TYPE,Ce(u,c));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var g=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var y=Dq(p.val);if(y.length===0)return this.error(Ie.EXPECT_ARGUMENT_STYLE,Ce(this.clonePosition(),this.clonePosition()));var k=Ce(g,this.clonePosition());m={style:y,styleLocation:k}}var O=this.tryParseArgumentClose(a);if(O.err)return O;var D=Ce(a,this.clonePosition());if(m&&lp(m==null?void 0:m.style,"::",0)){var _=Oq(m.style.slice(2));if(d==="number"){var p=this.parseNumberSkeletonFromString(_,m.styleLocation);return p.err?p:{val:{type:un.number,value:t,location:D,style:p.val},err:null}}else{if(_.length===0)return this.error(Ie.EXPECT_DATE_TIME_SKELETON,D);var x=_;this.locale&&(x=mq(_,this.locale));var y={type:as.dateTime,pattern:x,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?oq(x):{}},R=d==="date"?un.date:un.time;return{val:{type:R,value:t,location:D,style:y},err:null}}}return{val:{type:d==="number"?un.number:d==="date"?un.date:un.time,value:t,location:D,style:(i=m==null?void 0:m.style)!==null&&i!==void 0?i:null},err:null}}case"plural":case"selectordinal":case"select":{var T=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ie.EXPECT_SELECT_ARGUMENT_OPTIONS,Ce(T,ge({},T)));this.bumpSpace();var M=this.parseIdentifierIfPossible(),v=0;if(d!=="select"&&M.value==="offset"){if(!this.bumpIf(":"))return this.error(Ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ce(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(Ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ie.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),M=this.parseIdentifierIfPossible(),v=p.val}var P=this.tryParsePluralOrSelectOptions(r,d,n,M);if(P.err)return P;var O=this.tryParseArgumentClose(a);if(O.err)return O;var F=Ce(a,this.clonePosition());return d==="select"?{val:{type:un.select,value:t,options:up(P.val),location:F},err:null}:{val:{type:un.plural,value:t,options:up(P.val),offset:v,pluralType:d==="plural"?"cardinal":"ordinal",location:F},err:null}}default:return this.error(Ie.INVALID_ARGUMENT_TYPE,Ce(u,c))}},e.prototype.tryParseArgumentClose=function(r){return this.isEOF()||this.char()!==125?this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Ce(r,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var r=0,n=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ie.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Ce(a,this.clonePosition()));this.bump();break}case 123:{r+=1,this.bump();break}case 125:{if(r>0)r-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(r,n){var t=[];try{t=lq(r)}catch{return this.error(Ie.INVALID_NUMBER_SKELETON,n)}return{val:{type:as.number,tokens:t,location:n,parsedOptions:this.shouldParseSkeletons?fq(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(r,n,t,a){for(var i,u=!1,d=[],c=new Set,m=a.value,g=a.location;;){if(m.length===0){var p=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var y=this.tryParseDecimalInteger(Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ie.INVALID_PLURAL_ARGUMENT_SELECTOR);if(y.err)return y;g=Ce(p,this.clonePosition()),m=this.message.slice(p.offset,this.offset())}else break}if(c.has(m))return this.error(n==="select"?Ie.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ie.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,g);m==="other"&&(u=!0),this.bumpSpace();var k=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?Ie.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Ce(this.clonePosition(),this.clonePosition()));var O=this.parseMessage(r+1,n,t);if(O.err)return O;var D=this.tryParseArgumentClose(k);if(D.err)return D;d.push([m,{value:O.val,location:Ce(k,this.clonePosition())}]),c.add(m),this.bumpSpace(),i=this.parseIdentifierIfPossible(),m=i.value,g=i.location}return d.length===0?this.error(n==="select"?Ie.EXPECT_SELECT_ARGUMENT_SELECTOR:Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ce(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!u?this.error(Ie.MISSING_OTHER_CLAUSE,Ce(this.clonePosition(),this.clonePosition())):{val:d,err:null}},e.prototype.tryParseDecimalInteger=function(r,n){var t=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var i=!1,u=0;!this.isEOF();){var d=this.char();if(d>=48&&d<=57)i=!0,u=u*10+(d-48),this.bump();else break}var c=Ce(a,this.clonePosition());return i?(u*=t,Sq(u)?{val:u,err:null}:this.error(n,c)):this.error(r,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var r=this.position.offset;if(r>=this.message.length)throw Error("out of bound");var n=dv(this.message,r);if(n===void 0)throw Error("Offset ".concat(r," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(r,n){return{val:null,err:{kind:r,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var r=this.char();r===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=r<65536?1:2)}},e.prototype.bumpIf=function(r){if(lp(this.message,r,this.offset())){for(var n=0;n<r.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(r){var n=this.offset(),t=this.message.indexOf(r,n);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(r){if(this.offset()>r)throw Error("targetOffset ".concat(r," must be greater than or equal to the current offset ").concat(this.offset()));for(r=Math.min(r,this.message.length);;){var n=this.offset();if(n===r)break;if(n>r)throw Error("targetOffset ".concat(r," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&fv(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var r=this.char(),n=this.offset(),t=this.message.charCodeAt(n+(r>=65536?2:1));return t??null},e}();function cd(e){return e>=97&&e<=122||e>=65&&e<=90}function Rq(e){return cd(e)||e===47}function Fq(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function fv(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Nq(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function fd(e){e.forEach(function(r){if(delete r.location,tv(r)||rv(r))for(var n in r.options)delete r.options[n].location,fd(r.options[n].value);else Jy(r)&&sv(r.style)||(ev(r)||nv(r))&&id(r.style)?delete r.style.location:av(r)&&fd(r.children)})}function Aq(e,r){r===void 0&&(r={}),r=ge({shouldParseSkeletons:!0,requiresOtherClause:!0},r);var n=new xq(e,r).parse();if(n.err){var t=SyntaxError(Ie[n.err.kind]);throw t.location=n.err.location,t.originalMessage=n.err.message,t}return r!=null&&r.captureLocation||fd(n.val),n.val}var gr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(gr||(gr={}));var Zr=function(e){Zt(r,e);function r(n,t,a){var i=e.call(this,n)||this;return i.code=t,i.originalMessage=a,i}return r.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},r}(Error),cp=function(e){Zt(r,e);function r(n,t,a,i){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(t,'". Options are "').concat(Object.keys(a).join('", "'),'"'),gr.INVALID_VALUE,i)||this}return r}(Zr),Pq=function(e){Zt(r,e);function r(n,t,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(t),gr.INVALID_VALUE,a)||this}return r}(Zr),Mq=function(e){Zt(r,e);function r(n,t){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(t,'"'),gr.MISSING_VALUE,t)||this}return r}(Zr),Zn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Zn||(Zn={}));function Bq(e){return e.length<2?e:e.reduce(function(r,n){var t=r[r.length-1];return!t||t.type!==Zn.literal||n.type!==Zn.literal?r.push(n):t.value+=n.value,r},[])}function mv(e){return typeof e=="function"}function ui(e,r,n,t,a,i,u){if(e.length===1&&ap(e[0]))return[{type:Zn.literal,value:e[0].value}];for(var d=[],c=0,m=e;c<m.length;c++){var g=m[c];if(ap(g)){d.push({type:Zn.literal,value:g.value});continue}if(aq(g)){typeof i=="number"&&d.push({type:Zn.literal,value:n.getNumberFormat(r).format(i)});continue}var p=g.value;if(!(a&&p in a))throw new Mq(p,u);var y=a[p];if(rq(g)){(!y||typeof y=="string"||typeof y=="number")&&(y=typeof y=="string"||typeof y=="number"?String(y):""),d.push({type:typeof y=="string"?Zn.literal:Zn.object,value:y});continue}if(ev(g)){var k=typeof g.style=="string"?t.date[g.style]:id(g.style)?g.style.parsedOptions:void 0;d.push({type:Zn.literal,value:n.getDateTimeFormat(r,k).format(y)});continue}if(nv(g)){var k=typeof g.style=="string"?t.time[g.style]:id(g.style)?g.style.parsedOptions:t.time.medium;d.push({type:Zn.literal,value:n.getDateTimeFormat(r,k).format(y)});continue}if(Jy(g)){var k=typeof g.style=="string"?t.number[g.style]:sv(g.style)?g.style.parsedOptions:void 0;k&&k.scale&&(y=y*(k.scale||1)),d.push({type:Zn.literal,value:n.getNumberFormat(r,k).format(y)});continue}if(av(g)){var O=g.children,D=g.value,_=a[D];if(!mv(_))throw new Pq(D,"function",u);var x=ui(O,r,n,t,a,i),R=_(x.map(function(v){return v.value}));Array.isArray(R)||(R=[R]),d.push.apply(d,R.map(function(v){return{type:typeof v=="string"?Zn.literal:Zn.object,value:v}}))}if(tv(g)){var T=g.options[y]||g.options.other;if(!T)throw new cp(g.value,y,Object.keys(g.options),u);d.push.apply(d,ui(T.value,r,n,t,a));continue}if(rv(g)){var T=g.options["=".concat(y)];if(!T){if(!Intl.PluralRules)throw new Zr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,gr.MISSING_INTL_API,u);var M=n.getPluralRules(r,{type:g.pluralType}).select(y-(g.offset||0));T=g.options[M]||g.options.other}if(!T)throw new cp(g.value,y,Object.keys(g.options),u);d.push.apply(d,ui(T.value,r,n,t,a,y-(g.offset||0)));continue}}return Bq(d)}function qq(e,r){return r?ge(ge(ge({},e||{}),r||{}),Object.keys(e).reduce(function(n,t){return n[t]=ge(ge({},e[t]),r[t]||{}),n},{})):e}function jq(e,r){return r?Object.keys(e).reduce(function(n,t){return n[t]=qq(e[t],r[t]),n},ge({},e)):e}function Cu(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function Iq(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:rr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.NumberFormat).bind.apply(r,sr([void 0],n,!1)))},{cache:Cu(e.number),strategy:ar.variadic}),getDateTimeFormat:rr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.DateTimeFormat).bind.apply(r,sr([void 0],n,!1)))},{cache:Cu(e.dateTime),strategy:ar.variadic}),getPluralRules:rr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.PluralRules).bind.apply(r,sr([void 0],n,!1)))},{cache:Cu(e.pluralRules),strategy:ar.variadic})}}var gv=function(){function e(r,n,t,a){n===void 0&&(n=e.defaultLocale);var i=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var m=i.formatToParts(c);if(m.length===1)return m[0].value;var g=m.reduce(function(p,y){return!p.length||y.type!==Zn.literal||typeof p[p.length-1]!="string"?p.push(y.value):p[p.length-1]+=y.value,p},[]);return g.length<=1?g[0]||"":g},this.formatToParts=function(c){return ui(i.ast,i.locales,i.formatters,i.formats,c,void 0,i.message)},this.resolvedOptions=function(){var c;return{locale:((c=i.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(i.locales)[0]}},this.getAst=function(){return i.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof r=="string"){if(this.message=r,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=a||{};u.formatters;var d=Ki(u,["formatters"]);this.ast=e.__parse(r,ge(ge({},d),{locale:this.resolvedLocale}))}else this.ast=r;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=jq(e.formats,t),this.formatters=a&&a.formatters||Iq(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(r){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(r);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof r=="string"?r:r[0])}},e.__parse=Aq,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),_a;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(_a||(_a={}));var so=function(e){Zt(r,e);function r(n,t,a){var i=this,u=a?a instanceof Error?a:new Error(String(a)):void 0;return i=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(t,`
`).concat(u?`
`.concat(u.message,`
`).concat(u.stack):""))||this,i.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(i,r),i}return r}(Error),Cq=function(e){Zt(r,e);function r(n,t){return e.call(this,_a.UNSUPPORTED_FORMATTER,n,t)||this}return r}(so),Lq=function(e){Zt(r,e);function r(n,t){return e.call(this,_a.INVALID_CONFIG,n,t)||this}return r}(so),fp=function(e){Zt(r,e);function r(n,t){return e.call(this,_a.MISSING_DATA,n,t)||this}return r}(so),jt=function(e){Zt(r,e);function r(n,t,a){var i=e.call(this,_a.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(t,`
`),a)||this;return i.locale=t,i}return r}(so),Lu=function(e){Zt(r,e);function r(n,t,a,i){var u=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),t,i)||this;return u.descriptor=a,u.locale=t,u}return r}(jt),$q=function(e){Zt(r,e);function r(n,t){var a=e.call(this,_a.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(t,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(i){var u;return(u=i.value)!==null&&u!==void 0?u:JSON.stringify(i)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return r}(so);function Hq(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}function cs(e,r,n){return n===void 0&&(n={}),r.reduce(function(t,a){return a in e?t[a]=e[a]:a in n&&(t[a]=n[a]),t},{})}var Vq=function(e){},Uq=function(e){},pv={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Vq,onWarn:Uq};function hv(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function fa(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function Wq(e){e===void 0&&(e=hv());var r=Intl.RelativeTimeFormat,n=Intl.ListFormat,t=Intl.DisplayNames,a=rr(function(){for(var d,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((d=Intl.DateTimeFormat).bind.apply(d,sr([void 0],c,!1)))},{cache:fa(e.dateTime),strategy:ar.variadic}),i=rr(function(){for(var d,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((d=Intl.NumberFormat).bind.apply(d,sr([void 0],c,!1)))},{cache:fa(e.number),strategy:ar.variadic}),u=rr(function(){for(var d,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((d=Intl.PluralRules).bind.apply(d,sr([void 0],c,!1)))},{cache:fa(e.pluralRules),strategy:ar.variadic});return{getDateTimeFormat:a,getNumberFormat:i,getMessageFormat:rr(function(d,c,m,g){return new gv(d,c,m,ge({formatters:{getNumberFormat:i,getDateTimeFormat:a,getPluralRules:u}},g||{}))},{cache:fa(e.message),strategy:ar.variadic}),getRelativeTimeFormat:rr(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return new(r.bind.apply(r,sr([void 0],d,!1)))},{cache:fa(e.relativeTime),strategy:ar.variadic}),getPluralRules:u,getListFormat:rr(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return new(n.bind.apply(n,sr([void 0],d,!1)))},{cache:fa(e.list),strategy:ar.variadic}),getDisplayNames:rr(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return new(t.bind.apply(t,sr([void 0],d,!1)))},{cache:fa(e.displayNames),strategy:ar.variadic})}}function nc(e,r,n,t){var a=e&&e[r],i;if(a&&(i=a[n]),i)return i;t(new Cq("No ".concat(r," format named: ").concat(n)))}function ti(e,r){return Object.keys(e).reduce(function(n,t){return n[t]=ge({timeZone:r},e[t]),n},{})}function mp(e,r){var n=Object.keys(ge(ge({},e),r));return n.reduce(function(t,a){return t[a]=ge(ge({},e[a]||{}),r[a]||{}),t},{})}function gp(e,r){if(!r)return e;var n=gv.formats;return ge(ge(ge({},n),e),{date:mp(ti(n.date,r),ti(e.date||{},r)),time:mp(ti(n.time,r),ti(e.time||{},r))})}var md=function(e,r,n,t,a){var i=e.locale,u=e.formats,d=e.messages,c=e.defaultLocale,m=e.defaultFormats,g=e.fallbackOnEmptyString,p=e.onError,y=e.timeZone,k=e.defaultRichTextElements;n===void 0&&(n={id:""});var O=n.id,D=n.defaultMessage;Hq(!!O,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var _=String(O),x=d&&Object.prototype.hasOwnProperty.call(d,_)&&d[_];if(Array.isArray(x)&&x.length===1&&x[0].type===un.literal)return x[0].value;if(!t&&x&&typeof x=="string"&&!k)return x.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=ge(ge({},k),t||{}),u=gp(u,y),m=gp(m,y),!x){if(g===!1&&x==="")return x;if((!D||i&&i.toLowerCase()!==c.toLowerCase())&&p(new $q(n,i)),D)try{var R=r.getMessageFormat(D,c,m,a);return R.format(t)}catch(T){return p(new Lu('Error formatting default message for: "'.concat(_,'", rendering default message verbatim'),i,n,T)),typeof D=="string"?D:_}return _}try{var R=r.getMessageFormat(x,i,u,ge({formatters:r},a||{}));return R.format(t)}catch(T){p(new Lu('Error formatting message: "'.concat(_,'", using ').concat(D?"default message":"id"," as fallback."),i,n,T))}if(D)try{var R=r.getMessageFormat(D,c,m,a);return R.format(t)}catch(T){p(new Lu('Error formatting the default message for: "'.concat(_,'", rendering message verbatim'),i,n,T))}return typeof x=="string"?x:typeof D=="string"?D:_},Gq=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function oo(e,r,n,t){var a=e.locale,i=e.formats,u=e.onError,d=e.timeZone;t===void 0&&(t={});var c=t.format,m=ge(ge({},d&&{timeZone:d}),c&&nc(i,r,c,u)),g=cs(t,Gq,m);return r==="time"&&!g.hour&&!g.minute&&!g.second&&!g.timeStyle&&!g.dateStyle&&(g=ge(ge({},g),{hour:"numeric",minute:"numeric"})),n(a,g)}function Yq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],u=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return oo(e,"date",r,u).format(d)}catch(c){e.onError(new jt("Error formatting date.",e.locale,c))}return String(d)}function zq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],u=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return oo(e,"time",r,u).format(d)}catch(c){e.onError(new jt("Error formatting time.",e.locale,c))}return String(d)}function Kq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],u=n[2],d=u===void 0?{}:u,c=typeof a=="string"?new Date(a||0):a,m=typeof i=="string"?new Date(i||0):i;try{return oo(e,"dateTimeRange",r,d).formatRange(c,m)}catch(g){e.onError(new jt("Error formatting date time range.",e.locale,g))}return String(c)}function Xq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],u=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return oo(e,"date",r,u).formatToParts(d)}catch(c){e.onError(new jt("Error formatting date.",e.locale,c))}return[]}function Zq(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],i=n[1],u=i===void 0?{}:i,d=typeof a=="string"?new Date(a||0):a;try{return oo(e,"time",r,u).formatToParts(d)}catch(c){e.onError(new jt("Error formatting time.",e.locale,c))}return[]}var Qq=["style","type","fallback","languageDisplay"];function Jq(e,r,n,t){var a=e.locale,i=e.onError,u=Intl.DisplayNames;u||i(new Zr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,gr.MISSING_INTL_API));var d=cs(t,Qq);try{return r(a,d).of(n)}catch(c){i(new jt("Error formatting display name.",a,c))}}var ej=["type","style"],pp=Date.now();function nj(e){return"".concat(pp,"_").concat(e,"_").concat(pp)}function tj(e,r,n,t){t===void 0&&(t={});var a=yv(e,r,n,t).reduce(function(i,u){var d=u.value;return typeof d!="string"?i.push(d):typeof i[i.length-1]=="string"?i[i.length-1]+=d:i.push(d),i},[]);return a.length===1?a[0]:a.length===0?"":a}function yv(e,r,n,t){var a=e.locale,i=e.onError;t===void 0&&(t={});var u=Intl.ListFormat;u||i(new Zr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,gr.MISSING_INTL_API));var d=cs(t,ej);try{var c={},m=n.map(function(g,p){if(typeof g=="object"){var y=nj(p);return c[y]=g,y}return String(g)});return r(a,d).formatToParts(m).map(function(g){return g.type==="literal"?g:ge(ge({},g),{value:c[g.value]||g.value})})}catch(g){i(new jt("Error formatting list.",a,g))}return n}var rj=["type"];function aj(e,r,n,t){var a=e.locale,i=e.onError;t===void 0&&(t={}),Intl.PluralRules||i(new Zr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,gr.MISSING_INTL_API));var u=cs(t,rj);try{return r(a,u).select(n)}catch(d){i(new jt("Error formatting plural.",a,d))}return"other"}var sj=["numeric","style"];function oj(e,r,n){var t=e.locale,a=e.formats,i=e.onError;n===void 0&&(n={});var u=n.format,d=!!u&&nc(a,"relative",u,i)||{},c=cs(n,sj,d);return r(t,c)}function ij(e,r,n,t,a){a===void 0&&(a={}),t||(t="second");var i=Intl.RelativeTimeFormat;i||e.onError(new Zr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,gr.MISSING_INTL_API));try{return oj(e,r,a).format(n,t)}catch(u){e.onError(new jt("Error formatting relative time.",e.locale,u))}return String(n)}var lj=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function vv(e,r,n){var t=e.locale,a=e.formats,i=e.onError;n===void 0&&(n={});var u=n.format,d=u&&nc(a,"number",u,i)||{},c=cs(n,lj,d);return r(t,c)}function uj(e,r,n,t){t===void 0&&(t={});try{return vv(e,r,t).format(n)}catch(a){e.onError(new jt("Error formatting number.",e.locale,a))}return String(n)}function dj(e,r,n,t){t===void 0&&(t={});try{return vv(e,r,t).formatToParts(n)}catch(a){e.onError(new jt("Error formatting number.",e.locale,a))}return[]}function cj(e){var r=e?e[Object.keys(e)[0]]:void 0;return typeof r=="string"}function fj(e){e.onWarn&&e.defaultRichTextElements&&cj(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function mj(e,r){var n=Wq(r),t=ge(ge({},pv),e),a=t.locale,i=t.defaultLocale,u=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&u?u(new fp('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&u&&u(new fp('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(u&&u(new Lq('"locale" was not configured, using "'.concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),fj(t),ge(ge({},t),{formatters:n,formatNumber:uj.bind(null,t,n.getNumberFormat),formatNumberToParts:dj.bind(null,t,n.getNumberFormat),formatRelativeTime:ij.bind(null,t,n.getRelativeTimeFormat),formatDate:Yq.bind(null,t,n.getDateTimeFormat),formatDateToParts:Xq.bind(null,t,n.getDateTimeFormat),formatTime:zq.bind(null,t,n.getDateTimeFormat),formatDateTimeRange:Kq.bind(null,t,n.getDateTimeFormat),formatTimeToParts:Zq.bind(null,t,n.getDateTimeFormat),formatPlural:aj.bind(null,t,n.getPluralRules),formatMessage:md.bind(null,t,n),$t:md.bind(null,t,n),formatList:tj.bind(null,t,n.getListFormat),formatListToParts:yv.bind(null,t,n.getListFormat),formatDisplayName:Jq.bind(null,t,n.getDisplayNames)})}function gj(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}function pj(e){gj(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var hj=ge(ge({},pv),{textComponent:E.Fragment}),yj={key:42},vj=function(e){return E.isValidElement(e)?E.createElement(E.Fragment,yj,e):e},kj=function(e){var r;return(r=E.Children.map(e,vj))!==null&&r!==void 0?r:[]};function bj(e){return function(r){return e(E.Children.toArray(r))}}var hp={exports:{}},ze={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function wj(){if(yp)return ze;yp=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,k=e?Symbol.for("react.memo"):60115,O=e?Symbol.for("react.lazy"):60116,D=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,x=e?Symbol.for("react.responder"):60118,R=e?Symbol.for("react.scope"):60119;function T(v){if(typeof v=="object"&&v!==null){var P=v.$$typeof;switch(P){case r:switch(v=v.type,v){case c:case m:case t:case i:case a:case p:return v;default:switch(v=v&&v.$$typeof,v){case d:case g:case O:case k:case u:return v;default:return P}}case n:return P}}}function M(v){return T(v)===m}return ze.AsyncMode=c,ze.ConcurrentMode=m,ze.ContextConsumer=d,ze.ContextProvider=u,ze.Element=r,ze.ForwardRef=g,ze.Fragment=t,ze.Lazy=O,ze.Memo=k,ze.Portal=n,ze.Profiler=i,ze.StrictMode=a,ze.Suspense=p,ze.isAsyncMode=function(v){return M(v)||T(v)===c},ze.isConcurrentMode=M,ze.isContextConsumer=function(v){return T(v)===d},ze.isContextProvider=function(v){return T(v)===u},ze.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===r},ze.isForwardRef=function(v){return T(v)===g},ze.isFragment=function(v){return T(v)===t},ze.isLazy=function(v){return T(v)===O},ze.isMemo=function(v){return T(v)===k},ze.isPortal=function(v){return T(v)===n},ze.isProfiler=function(v){return T(v)===i},ze.isStrictMode=function(v){return T(v)===a},ze.isSuspense=function(v){return T(v)===p},ze.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===t||v===m||v===i||v===a||v===p||v===y||typeof v=="object"&&v!==null&&(v.$$typeof===O||v.$$typeof===k||v.$$typeof===u||v.$$typeof===d||v.$$typeof===g||v.$$typeof===_||v.$$typeof===x||v.$$typeof===R||v.$$typeof===D)},ze.typeOf=T,ze}var vp;function _j(){return vp||(vp=1,hp.exports=wj()),hp.exports}var $u,kp;function Tj(){if(kp)return $u;kp=1;var e=_j(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[e.ForwardRef]=t,i[e.Memo]=a;function u(O){return e.isMemo(O)?a:i[O.$$typeof]||r}var d=Object.defineProperty,c=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;function k(O,D,_){if(typeof D!="string"){if(y){var x=p(D);x&&x!==y&&k(O,x,_)}var R=c(D);m&&(R=R.concat(m(D)));for(var T=u(O),M=u(D),v=0;v<R.length;++v){var P=R[v];if(!n[P]&&!(_&&_[P])&&!(M&&M[P])&&!(T&&T[P])){var F=g(D,P);try{d(O,P,F)}catch{}}}}return O}return $u=k,$u}Tj();var tc=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=E.createContext(null)):E.createContext(null);tc.Consumer;tc.Provider;var Sj=tc;function kv(){var e=E.useContext(Sj);return pj(e),e}var gd;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(gd||(gd={}));var pd;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(pd||(pd={}));function bv(e){var r=function(n){var t=kv(),a=n.value,i=n.children,u=Ki(n,["value","children"]),d=typeof a=="string"?new Date(a||0):a,c=e==="formatDate"?t.formatDateToParts(d,u):t.formatTimeToParts(d,u);return i(c)};return r.displayName=pd[e],r}function io(e){var r=function(n){var t=kv(),a=n.value,i=n.children,u=Ki(n,["value","children"]),d=t[e](a,u);if(typeof i=="function")return i(d);var c=t.textComponent||E.Fragment;return E.createElement(c,null,d)};return r.displayName=gd[e],r}function wv(e){return e&&Object.keys(e).reduce(function(r,n){var t=e[n];return r[n]=mv(t)?bj(t):t,r},{})}var bp=function(e,r,n,t){for(var a=[],i=4;i<arguments.length;i++)a[i-4]=arguments[i];var u=wv(t),d=md.apply(void 0,sr([e,r,n,u],a,!1));return Array.isArray(d)?kj(d):d},Ej=function(e,r){var n=e.defaultRichTextElements,t=Ki(e,["defaultRichTextElements"]),a=wv(n),i=mj(ge(ge(ge({},hj),t),{defaultRichTextElements:a}),r),u={locale:i.locale,timeZone:i.timeZone,fallbackOnEmptyString:i.fallbackOnEmptyString,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:a};return ge(ge({},i),{formatMessage:bp.bind(null,u,i.formatters),$t:bp.bind(null,u,i.formatters)})};io("formatDate");io("formatTime");io("formatNumber");io("formatList");io("formatDisplayName");bv("formatDate");bv("formatTime");function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hd={exports:{}},Oj=hd.exports,wp;function Dj(){return wp||(wp=1,function(e,r){(function(n,t){e.exports=t()})(Oj,function(){var n,t,a=1e3,i=6e4,u=36e5,d=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,g=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:m,months:g,days:d,hours:u,minutes:i,seconds:a,milliseconds:1,weeks:6048e5},k=function(P){return P instanceof M},O=function(P,F,N){return new M(P,N,F.$l)},D=function(P){return t.p(P)+"s"},_=function(P){return P<0},x=function(P){return _(P)?Math.ceil(P):Math.floor(P)},R=function(P){return Math.abs(P)},T=function(P,F){return P?_(P)?{negative:!0,format:""+R(P)+F}:{negative:!1,format:""+P+F}:{negative:!1,format:""}},M=function(){function P(N,j,U){var V=this;if(this.$d={},this.$l=U,N===void 0&&(this.$ms=0,this.parseFromMilliseconds()),j)return O(N*y[D(j)],this);if(typeof N=="number")return this.$ms=N,this.parseFromMilliseconds(),this;if(typeof N=="object")return Object.keys(N).forEach(function(W){V.$d[D(W)]=N[W]}),this.calMilliseconds(),this;if(typeof N=="string"){var G=N.match(p);if(G){var C=G.slice(2).map(function(W){return W!=null?Number(W):0});return this.$d.years=C[0],this.$d.months=C[1],this.$d.weeks=C[2],this.$d.days=C[3],this.$d.hours=C[4],this.$d.minutes=C[5],this.$d.seconds=C[6],this.calMilliseconds(),this}}return this}var F=P.prototype;return F.calMilliseconds=function(){var N=this;this.$ms=Object.keys(this.$d).reduce(function(j,U){return j+(N.$d[U]||0)*y[U]},0)},F.parseFromMilliseconds=function(){var N=this.$ms;this.$d.years=x(N/m),N%=m,this.$d.months=x(N/g),N%=g,this.$d.days=x(N/d),N%=d,this.$d.hours=x(N/u),N%=u,this.$d.minutes=x(N/i),N%=i,this.$d.seconds=x(N/a),N%=a,this.$d.milliseconds=N},F.toISOString=function(){var N=T(this.$d.years,"Y"),j=T(this.$d.months,"M"),U=+this.$d.days||0;this.$d.weeks&&(U+=7*this.$d.weeks);var V=T(U,"D"),G=T(this.$d.hours,"H"),C=T(this.$d.minutes,"M"),W=this.$d.seconds||0;this.$d.milliseconds&&(W+=this.$d.milliseconds/1e3,W=Math.round(1e3*W)/1e3);var Y=T(W,"S"),$=N.negative||j.negative||V.negative||G.negative||C.negative||Y.negative,J=G.format||C.format||Y.format?"T":"",z=($?"-":"")+"P"+N.format+j.format+V.format+J+G.format+C.format+Y.format;return z==="P"||z==="-P"?"P0D":z},F.toJSON=function(){return this.toISOString()},F.format=function(N){var j=N||"YYYY-MM-DDTHH:mm:ss",U={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return j.replace(c,function(V,G){return G||String(U[V])})},F.as=function(N){return this.$ms/y[D(N)]},F.get=function(N){var j=this.$ms,U=D(N);return U==="milliseconds"?j%=1e3:j=U==="weeks"?x(j/y[U]):this.$d[U],j||0},F.add=function(N,j,U){var V;return V=j?N*y[D(j)]:k(N)?N.$ms:O(N,this).$ms,O(this.$ms+V*(U?-1:1),this)},F.subtract=function(N,j){return this.add(N,j,!0)},F.locale=function(N){var j=this.clone();return j.$l=N,j},F.clone=function(){return O(this.$ms,this)},F.humanize=function(N){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!N)},F.valueOf=function(){return this.asMilliseconds()},F.milliseconds=function(){return this.get("milliseconds")},F.asMilliseconds=function(){return this.as("milliseconds")},F.seconds=function(){return this.get("seconds")},F.asSeconds=function(){return this.as("seconds")},F.minutes=function(){return this.get("minutes")},F.asMinutes=function(){return this.as("minutes")},F.hours=function(){return this.get("hours")},F.asHours=function(){return this.as("hours")},F.days=function(){return this.get("days")},F.asDays=function(){return this.as("days")},F.weeks=function(){return this.get("weeks")},F.asWeeks=function(){return this.as("weeks")},F.months=function(){return this.get("months")},F.asMonths=function(){return this.as("months")},F.years=function(){return this.get("years")},F.asYears=function(){return this.as("years")},P}(),v=function(P,F,N){return P.add(F.years()*N,"y").add(F.months()*N,"M").add(F.days()*N,"d").add(F.hours()*N,"h").add(F.minutes()*N,"m").add(F.seconds()*N,"s").add(F.milliseconds()*N,"ms")};return function(P,F,N){n=N,t=N().$utils(),N.duration=function(V,G){var C=N.locale();return O(V,{$l:C},G)},N.isDuration=k;var j=F.prototype.add,U=F.prototype.subtract;F.prototype.add=function(V,G){return k(V)?v(this,V,1):j.bind(this)(V,G)},F.prototype.subtract=function(V,G){return k(V)?v(this,V,-1):U.bind(this)(V,G)}}})}(hd)),hd.exports}var xj=Dj();const Rj=rc(xj);var yd={exports:{}},Fj=yd.exports,_p;function Nj(){return _p||(_p=1,function(e,r){(function(n,t){e.exports=t()})(Fj,function(){var n="day";return function(t,a,i){var u=function(m){return m.add(4-m.isoWeekday(),n)},d=a.prototype;d.isoWeekYear=function(){return u(this).year()},d.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),n);var g,p,y,k,O=u(this),D=(g=this.isoWeekYear(),p=this.$u,y=(p?i.utc:i)().year(g).startOf("year"),k=4-y.isoWeekday(),y.isoWeekday()>4&&(k+=7),y.add(k,n));return O.diff(D,"week")+1},d.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var c=d.startOf;d.startOf=function(m,g){var p=this.$utils(),y=!!p.u(g)||g;return p.p(m)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(m,g)}}})}(yd)),yd.exports}var Aj=Nj();const Pj=rc(Aj);var vd={exports:{}},Mj=vd.exports,Tp;function Bj(){return Tp||(Tp=1,function(e,r){(function(n,t){e.exports=t()})(Mj,function(){var n="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(i,u,d){var c=u.prototype;d.utc=function(D){var _={date:D,utc:!0,args:arguments};return new u(_)},c.utc=function(D){var _=d(this.toDate(),{locale:this.$L,utc:!0});return D?_.add(this.utcOffset(),n):_},c.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var m=c.parse;c.parse=function(D){D.utc&&(this.$u=!0),this.$utils().u(D.$offset)||(this.$offset=D.$offset),m.call(this,D)};var g=c.init;c.init=function(){if(this.$u){var D=this.$d;this.$y=D.getUTCFullYear(),this.$M=D.getUTCMonth(),this.$D=D.getUTCDate(),this.$W=D.getUTCDay(),this.$H=D.getUTCHours(),this.$m=D.getUTCMinutes(),this.$s=D.getUTCSeconds(),this.$ms=D.getUTCMilliseconds()}else g.call(this)};var p=c.utcOffset;c.utcOffset=function(D,_){var x=this.$utils().u;if(x(D))return this.$u?0:x(this.$offset)?p.call(this):this.$offset;if(typeof D=="string"&&(D=function(v){v===void 0&&(v="");var P=v.match(t);if(!P)return null;var F=(""+P[0]).match(a)||["-",0,0],N=F[0],j=60*+F[1]+ +F[2];return j===0?0:N==="+"?j:-j}(D),D===null))return this;var R=Math.abs(D)<=16?60*D:D,T=this;if(_)return T.$offset=R,T.$u=D===0,T;if(D!==0){var M=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(T=this.local().add(R+M,n)).$offset=R,T.$x.$localOffset=M}else T=this.utc();return T};var y=c.format;c.format=function(D){var _=D||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,_)},c.valueOf=function(){var D=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*D},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var k=c.toDate;c.toDate=function(D){return D==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():k.call(this)};var O=c.diff;c.diff=function(D,_,x){if(D&&this.$u===D.$u)return O.call(this,D,_,x);var R=this.local(),T=d(D).local();return O.call(R,T,_,x)}}})}(vd)),vd.exports}var qj=Bj();const jj=rc(qj),Ij=hv(),Xi=e=>Ej({locale:"nb-NO",messages:e},Ij),Zi={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Xi(Zi);var kd={exports:{}},Cj=kd.exports,Sp;function Lj(){return Sp||(Sp=1,function(e,r){(function(n,t){e.exports=t(ao)})(Cj,function(n){function t(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var a=t(n),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(i,null,!0),i})}(kd)),kd.exports}Lj();ao.extend(jj);ao.extend(Pj);ao.extend(Rj);Xi(Zi);Xi(Zi);var Ep={exports:{}},js={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function $j(){if(Op)return js;Op=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,i){var u=null;if(i!==void 0&&(u=""+i),a.key!==void 0&&(u=""+a.key),"key"in a){i={};for(var d in a)d!=="key"&&(i[d]=a[d])}else i=a;return a=i.ref,{$$typeof:e,type:t,key:u,ref:a!==void 0?a:null,props:i}}return js.Fragment=r,js.jsx=n,js.jsxs=n,js}var Dp;function Hj(){return Dp||(Dp=1,Ep.exports=$j()),Ep.exports}Hj();Xi(Zi);E.createContext({});var bd={exports:{}},Vj=bd.exports,xp;function Uj(){return xp||(xp=1,function(e,r){(function(n,t){e.exports=t()})(Vj,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,u=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,c={},m=function(_){return(_=+_)+(_>68?1900:2e3)},g=function(_){return function(x){this[_]=+x}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(x){if(!x||x==="Z")return 0;var R=x.match(/([+-]|\d\d)/g),T=60*R[1]+(+R[2]||0);return T===0?0:R[0]==="+"?-T:T}(_)}],y=function(_){var x=c[_];return x&&(x.indexOf?x:x.s.concat(x.f))},k=function(_,x){var R,T=c.meridiem;if(T){for(var M=1;M<=24;M+=1)if(_.indexOf(T(M,0,x))>-1){R=M>12;break}}else R=_===(x?"pm":"PM");return R},O={A:[d,function(_){this.afternoon=k(_,!1)}],a:[d,function(_){this.afternoon=k(_,!0)}],Q:[a,function(_){this.month=3*(_-1)+1}],S:[a,function(_){this.milliseconds=100*+_}],SS:[i,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[u,g("seconds")],ss:[u,g("seconds")],m:[u,g("minutes")],mm:[u,g("minutes")],H:[u,g("hours")],h:[u,g("hours")],HH:[u,g("hours")],hh:[u,g("hours")],D:[u,g("day")],DD:[i,g("day")],Do:[d,function(_){var x=c.ordinal,R=_.match(/\d+/);if(this.day=R[0],x)for(var T=1;T<=31;T+=1)x(T).replace(/\[|\]/g,"")===_&&(this.day=T)}],w:[u,g("week")],ww:[i,g("week")],M:[u,g("month")],MM:[i,g("month")],MMM:[d,function(_){var x=y("months"),R=(y("monthsShort")||x.map(function(T){return T.slice(0,3)})).indexOf(_)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[d,function(_){var x=y("months").indexOf(_)+1;if(x<1)throw new Error;this.month=x%12||x}],Y:[/[+-]?\d+/,g("year")],YY:[i,function(_){this.year=m(_)}],YYYY:[/\d{4}/,g("year")],Z:p,ZZ:p};function D(_){var x,R;x=_,R=c&&c.formats;for(var T=(_=x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(U,V,G){var C=G&&G.toUpperCase();return V||R[G]||n[G]||R[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(W,Y,$){return Y||$.slice(1)})})).match(t),M=T.length,v=0;v<M;v+=1){var P=T[v],F=O[P],N=F&&F[0],j=F&&F[1];T[v]=j?{regex:N,parser:j}:P.replace(/^\[|\]$/g,"")}return function(U){for(var V={},G=0,C=0;G<M;G+=1){var W=T[G];if(typeof W=="string")C+=W.length;else{var Y=W.regex,$=W.parser,J=U.slice(C),z=Y.exec(J)[0];$.call(V,z),U=U.replace(z,"")}}return function(re){var se=re.afternoon;if(se!==void 0){var de=re.hours;se?de<12&&(re.hours+=12):de===12&&(re.hours=0),delete re.afternoon}}(V),V}}return function(_,x,R){R.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(m=_.parseTwoDigitYear);var T=x.prototype,M=T.parse;T.parse=function(v){var P=v.date,F=v.utc,N=v.args;this.$u=F;var j=N[1];if(typeof j=="string"){var U=N[2]===!0,V=N[3]===!0,G=U||V,C=N[2];V&&(C=N[2]),c=this.$locale(),!U&&C&&(c=R.Ls[C]),this.$d=function(J,z,re,se){try{if(["x","X"].indexOf(z)>-1)return new Date((z==="X"?1e3:1)*J);var de=D(z)(J),Te=de.year,Ee=de.month,Ge=de.day,me=de.hours,he=de.minutes,Le=de.seconds,Ve=de.milliseconds,en=de.zone,nn=de.week,on=new Date,mn=Ge||(Te||Ee?1:on.getDate()),Rn=Te||on.getFullYear(),tn=0;Te&&!Ee||(tn=Ee>0?Ee-1:on.getMonth());var Dn,dt=me||0,wn=he||0,ct=Le||0,nt=Ve||0;return en?new Date(Date.UTC(Rn,tn,mn,dt,wn,ct,nt+60*en.offset*1e3)):re?new Date(Date.UTC(Rn,tn,mn,dt,wn,ct,nt)):(Dn=new Date(Rn,tn,mn,dt,wn,ct,nt),nn&&(Dn=se(Dn).week(nn).toDate()),Dn)}catch{return new Date("")}}(P,j,F,R),this.init(),C&&C!==!0&&(this.$L=this.locale(C).$L),G&&P!=this.format(j)&&(this.$d=new Date("")),c={}}else if(j instanceof Array)for(var W=j.length,Y=1;Y<=W;Y+=1){N[1]=j[Y-1];var $=R.apply(this,N);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}Y===W&&(this.$d=new Date(""))}else M.call(this,v)}}})}(bd)),bd.exports}var Wj=Uj();const Gj=Xy(Wj);ao.extend(Gj);_t(ro);const Yj=(e,r,n,t)=>e&&Object.keys(r).length>0?dr(Object.values(r)[0]):t?dr(t):e?n?dr(n):"-":null,_v=({soknad:e,termindato:r})=>{const n=e.fodselsdatoer?e.fodselsdatoer:{},t=Object.keys(n).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(n).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",i=Yj(!!e,n,e.termindato,r);return Q.jsxs(Bt,{gap:"4",children:[Q.jsx(Ai,{size:"small",children:Q.jsx(yn,{id:a})}),Q.jsxs(zt,{gap:"4",children:[e.utstedtdato&&Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.UstedtDato"})}),Q.jsx(fn,{size:"small",children:dr(e.utstedtdato)})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:t})}),Q.jsx(fn,{size:"small",children:i})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.AntallBarn"})}),Q.jsx(fn,{size:"small",children:e.antallBarn})]})]})]})};_v.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const zj=(e,r,n)=>{if(!r&&!n)return"";const t=n??{termindato:void 0,avklartBarn:[]};if(e){const a=(t==null?void 0:t.termindato)??(r==null?void 0:r.termindato);return a?dr(a):void 0}return t.avklartBarn&&t.avklartBarn.length>0?dr(t.avklartBarn[0].fodselsdato):r!=null&&r.fodselsdatoer?dr(Object.values(r.fodselsdatoer)[0]):"-"},Kj=(e,r,n)=>{if(!r&&!n)return 0;const t=n??{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?t.termindato?t.antallBarnTermin:r==null?void 0:r.antallBarn:t.avklartBarn&&t.avklartBarn.length>0?t.avklartBarn.length:r==null?void 0:r.antallBarn},Tv=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:r,familiehendelseOriginalBehandling:n})=>{const t=n&&!!n.termindato||!(r!=null&&r.fodselsdatoer)||Object.keys(r.fodselsdatoer).length===0,a=t?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",i=zj(t,r,n),u=Kj(t,r,n),d=n?(!n.avklartBarn||n.avklartBarn.length===0)&&!!e:!1;return Q.jsxs(Bt,{gap:"4",children:[Q.jsx(Ai,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),Q.jsxs(zt,{gap:"4",children:[d&&Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),Q.jsx(fn,{size:"small",children:e})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:a})}),Q.jsx(fn,{size:"small",children:i??"-"})]}),Q.jsxs("div",{children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.AntallBarn"})}),Q.jsx(fn,{size:"small",children:u??"-"})]})]})]})};Tv.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const Xj="_noChildrenInTps_yb1cb_1",Zj="_col_yb1cb_5",Hu={noChildrenInTps:Xj,col:Zj},Sv=({behandlingsTypeKode:e,avklartBarn:r,nrOfDodfodteBarn:n,soknad:t,vedtaksDatoSomSvangerskapsuke:a,termindato:i,soknadOriginalBehandling:u,familiehendelseOriginalBehandling:d})=>Q.jsxs(zt,{gap:"10",children:[Q.jsxs("div",{className:Hu.col,children:[e!==qm.REVURDERING&&Q.jsx(_v,{soknad:t,termindato:i}),e===qm.REVURDERING&&Q.jsx(Tv,{soknadOriginalBehandling:u,familiehendelseOriginalBehandling:d,vedtaksDatoSomSvangerskapsuke:a})]}),Q.jsxs("div",{className:Hu.col,children:[Q.jsxs(zt,{gap:"4",children:[Q.jsx(Ai,{size:"small",children:Q.jsx(yn,{id:"FodselsammenligningPanel.OpplysningerTPS"})}),n>0&&Q.jsx(Xu,{variant:"info",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Dodfodt"})})]}),r.length>0&&Q.jsxs(Bn,{children:[Q.jsx(Bn.Header,{children:Q.jsxs(Bn.Row,{children:[Q.jsx(Bn.HeaderCell,{scope:"col",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Fodselsdato"})}),Q.jsx(Bn.HeaderCell,{scope:"col",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Dodsdato"})}),Q.jsx(Bn.HeaderCell,{scope:"col"})]})}),Q.jsx(Bn.Body,{children:r.map(c=>{const m=c.fodselsdato+c.dodsdato;return Q.jsxs(Bn.Row,{id:m,children:[Q.jsx(Bn.DataCell,{children:Q.jsx(fn,{size:"small",children:dr(c.fodselsdato)})}),Q.jsx(Bn.DataCell,{children:Q.jsx(fn,{size:"small",children:c.dodsdato?dr(c.dodsdato):"-"})}),Q.jsx(Bn.DataCell,{children:c.dodsdato&&Q.jsx(Xu,{variant:"info",children:Q.jsx(yn,{id:"FodselsammenligningPanel.Dod"})})})]},m)})})]}),r.length===0&&Q.jsx("div",{className:Hu.noChildrenInTps,children:Q.jsx(fn,{size:"small",children:"-"})})]})]});Sv.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const Qj={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},Jj=_t(Qj),ac=({behandlingsTypeKode:e,avklartBarn:r=[],termindato:n,vedtaksDatoSomSvangerskapsuke:t,soknad:a,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:u})=>{const d=r.reduce((c,m)=>c+(m.dodsdato?1:0),0);return Q.jsx(Fi,{value:Jj,children:Q.jsx(Sv,{avklartBarn:r,termindato:n,vedtaksDatoSomSvangerskapsuke:t,nrOfDodfodteBarn:d,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:u})})};ac.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Vu="avklartBarn",eI={fodselsdato:void 0,dodsdato:void 0},Ev=({readOnly:e})=>{const r=xi(),{control:n,watch:t}=Xt(),{fields:a,remove:i,append:u}=pP({control:n,name:Vu}),d=t("avklartBarn");return Q.jsx(gM,{fields:a,emptyPeriodTemplate:eI,readOnly:e,bodyText:r.formatMessage({id:"AvklartBarnFieldArray.LeggTilBarn"}),shouldShowAddButton:d.length<9,remove:i,append:u,children:(c,m,g=()=>"-")=>Q.jsx(b.Fragment,{children:Q.jsxs(zt,{gap:"4",align:"end",children:[Q.jsx(Oi,{name:`${Vu}.${m}.fodselsdato`,control:n,label:r.formatMessage({id:"AvklartBarnFieldArray.Title"}),validate:[Di,Ja,Kg],isReadOnly:e}),Q.jsx(Oi,{name:`${Vu}.${m}.dodsdato`,control:n,label:r.formatMessage({id:"AvklartBarnFieldArray.Dodsdato"}),validate:[Di,Kg],isReadOnly:e}),!e&&g()]})},c.id)})};Ev.__docgenInfo={description:"",methods:[],displayName:"AvklartBarnFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const nI="_clearfix_yy4j0_1",tI={clearfix:nI},fs=({readOnly:e,submittable:r,behandlingType:n,soknad:t,soknadOriginalBehandling:a,familiehendelseOriginalBehandling:i,alleMerknaderFraBeslutter:u,familiehendelse:d})=>{const c=xi(),{watch:m,control:g}=Xt(),{gjeldende:p,register:y}=d,k=m("dokumentasjonForeligger")||!1,O=m("begrunnelse")||!1,{termindato:D,vedtaksDatoSomSvangerskapsuke:_}=p;return Q.jsxs(Bt,{gap:"4",children:[Q.jsx(ac,{behandlingsTypeKode:n,avklartBarn:y==null?void 0:y.avklartBarn,termindato:D,vedtaksDatoSomSvangerskapsuke:_,soknad:t,soknadOriginalBehandling:a,familiehendelseOriginalBehandling:i}),Q.jsx(nd,{title:c.formatMessage({id:"SjekkFodselDokForm.DokumentasjonAvFodsel"}),merknaderFraBeslutter:u[qt.SJEKK_MANGLENDE_FODSEL],children:Q.jsxs(Bt,{gap:"2",children:[Q.jsx(aM,{name:"dokumentasjonForeligger",control:g,isEdited:zy(p.dokumentasjonForeligger),hideLegend:!0,validate:[Ja],isReadOnly:e,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:Q.jsx(yn,{id:"SjekkFodselDokForm.DokumentasjonForeligger"}),value:"true"},{label:Q.jsx(yn,{id:"SjekkFodselDokForm.DokumentasjonForeliggerIkke"}),value:"false"}]}),k&&Q.jsx("div",{className:tI.clearfix,children:Q.jsx(EP,{children:Q.jsxs(Bt,{gap:"2",children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"SjekkFodselDokForm.FyllInnDokumenterteOpplysninger"})}),Q.jsx(Ev,{readOnly:e})]})})})]})}),Q.jsx(qr,{isSubmittable:r,isReadOnly:e,hasBegrunnelse:!!O})]})},rI=e=>{let r=e;(r===0||!r)&&(r=1);const n=[];for(;r>0;)n.push({fodselsdato:void 0,dodsdato:void 0}),r-=1;return n},aI=e=>e.map(r=>({fodselsdato:r.fodselsdato,dodsdato:r.dodsdato===""||r.dodsdato===null?void 0:r.dodsdato}));fs.buildInitialValues=(e,r,n)=>({dokumentasjonForeligger:r.dokumentasjonForeligger!==null?r.dokumentasjonForeligger:void 0,brukAntallBarnITps:r.brukAntallBarnFraTps!==null?r.brukAntallBarnFraTps:void 0,avklartBarn:r.avklartBarn&&r.avklartBarn.length>0?r.avklartBarn:rI(e.antallBarn||0),...qr.initialValues(n)});fs.transformValues=(e,r)=>({kode:qt.SJEKK_MANGLENDE_FODSEL,dokumentasjonForeligger:e.dokumentasjonForeligger,uidentifiserteBarn:aI(e.avklartBarn),brukAntallBarnITps:r&&r.length?e.brukAntallBarnITps:!1,...qr.transformValues(e)});fs.__docgenInfo={description:`FodselInfoPanel

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
}>`},description:""}}};const sI="_marginBottom_u0i22_1",oI="_bredde_u0i22_5",Rp={marginBottom:sI,bredde:oI},iI=pB(1),lI=hB(9),uI=(e,r)=>!!e&&!!r&&!lt(e).isAfter(lt(r).subtract(18,"weeks").subtract(4,"days")),ms=({readOnly:e,soknad:r,gjeldendeFamiliehendelse:n,submittable:t,alleMerknaderFraBeslutter:a})=>{const i=xi(),{watch:u,control:d}=Xt(),c=u("termindato"),m=u("utstedtdato"),g=u("begrunnelse"),p=uI(m,c),{avklartBarn:y}=n,k=y&&y.length>0?y[0].fodselsdato:void 0,O=y?y.length:0,D=n.erOverstyrt||!1;return Q.jsxs(Q.Fragment,{children:[Q.jsx(nd,{title:i.formatMessage({id:"TermindatoFaktaForm.ApplicationInformation"}),merknaderFraBeslutter:a[qt.TERMINBEKREFTELSE],children:Q.jsxs(zt,{gap:"4",children:[Q.jsx(Oi,{name:"utstedtdato",control:d,label:i.formatMessage({id:"TermindatoFaktaForm.UtstedtDato"}),validate:[Ja,Di],isReadOnly:e,isEdited:Mu(r.utstedtdato,n.utstedtdato)}),Q.jsx(Oi,{name:"termindato",control:d,label:i.formatMessage({id:"TermindatoFaktaForm.Termindato"}),validate:[Ja,Di],isReadOnly:e,isEdited:Mu(r.termindato,n.termindato)}),Q.jsx(nM,{name:"antallBarn",control:d,label:i.formatMessage({id:"TermindatoFaktaForm.AntallBarn"}),parse:_=>{const x=parseInt(_.toString(),10);return Number.isNaN(x)?_:x},validate:[Ja,kB,iI,lI],readOnly:e,className:Rp.bredde,isEdited:Mu(r.antallBarn,n.antallBarnTermin)})]})}),Q.jsxs(Bt,{gap:"4",children:[k&&!D&&Q.jsx(nd,{title:i.formatMessage({id:"TermindatoFaktaForm.OpplysningerTPS"}),children:Q.jsxs(zt,{gap:"10",children:[Q.jsxs(Bt,{gap:"2",children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"TermindatoFaktaForm.FodselsdatoTps"})}),Q.jsx(fn,{size:"small",children:Q.jsx(IP,{dateString:k})})]}),Q.jsxs(Bt,{gap:"2",children:[Q.jsx(jn,{size:"small",children:Q.jsx(yn,{id:"TermindatoFaktaForm.AntallBarnTps"})}),Q.jsx(fn,{size:"small",children:O})]})]})}),Q.jsx(qr,{isSubmittable:t,isReadOnly:e,hasBegrunnelse:!!g}),p&&Q.jsx(_h,{variant:"warning",className:Rp.marginBottom,children:Q.jsx(yn,{id:"TermindatoFaktaForm.AdvarselForTidligUtstedtdato"})})]})]})};ms.buildInitialValues=(e,r,n)=>{const t=e.antallBarn?e.antallBarn:NaN,a=e.utstedtdato??void 0;return{utstedtdato:r.utstedtdato??a,termindato:r.termindato??e.termindato,antallBarn:r.antallBarnTermin??t,...qr.initialValues(n)}};ms.transformValues=e=>({kode:qt.TERMINBEKREFTELSE,utstedtdato:e.utstedtdato,termindato:e.termindato,antallBarn:e.antallBarn,...qr.transformValues(e)});ms.__docgenInfo={description:`TermindatoFaktaForm

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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const{TERMINBEKREFTELSE:wd,SJEKK_MANGLENDE_FODSEL:_d}=qt,dI=e=>{const r=[];return di(wd,e)&&r.push(Q.jsx(yn,{id:"FodselInfoPanel.KontrollerMotTerminbekreftelsen"},"KontrollerMotTerminbekreftelsen")),di(_d,e)&&r.push(Q.jsx(yn,{id:"FodselInfoPanel.KontrollerMotFodselsdokumentasjon"},"KontrollerMotFodselsdokumentasjon")),r},cI=(e,r,n,t)=>({...n?ms.buildInitialValues(e,r.gjeldende,n):{},...t?fs.buildInitialValues(e,r.gjeldende,t):{}}),fI=(e,r,n,t)=>{const a=[];return n&&a.push(ms.transformValues(e)),t&&a.push(fs.transformValues(e,r)),a},Ov=({submittable:e,soknad:r,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:t,familiehendelse:a})=>{var T,M,v;const{submitCallback:i,behandling:u,aksjonspunkterForPanel:d,harÅpneAksjonspunkter:c,alleMerknaderFraBeslutter:m,isReadOnly:g}=nS(),p=((T=a==null?void 0:a.register)==null?void 0:T.avklartBarn)??[],y=((M=a==null?void 0:a.gjeldende)==null?void 0:M.termindato)??void 0,k=((v=a==null?void 0:a.gjeldende)==null?void 0:v.vedtaksDatoSomSvangerskapsuke)??void 0,O=d.find(P=>P.definisjon===wd),D=d.find(P=>P.definisjon===_d),{mellomlagretFormData:_,setMellomlagretFormData:x}=tS(),R=hP({defaultValues:_??cI(r,a,O,D)});return Q.jsxs(Bt,{gap:"2",children:[c&&Q.jsx(bP,{children:dI(d)}),Q.jsx(lM,{formMethods:R,onSubmit:P=>i(fI(P,p,O,D)),setDataOnUnmount:x,children:Q.jsxs(Bt,{gap:"2",children:[di(wd,d)&&Q.jsx(ms,{readOnly:g,submittable:e,alleMerknaderFraBeslutter:m,soknad:r,gjeldendeFamiliehendelse:a.gjeldende}),di(_d,d)&&Q.jsx(fs,{behandlingType:u.type,readOnly:g,submittable:e,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:t,alleMerknaderFraBeslutter:m,soknad:r,avklartBarn:p,familiehendelse:a}),d.length!==0&&!g&&Q.jsx(Yy,{isSubmittable:e,isReadOnly:g,isSubmitting:R.formState.isSubmitting,isDirty:R.formState.isDirty}),d.length===0&&Q.jsx(ac,{behandlingsTypeKode:u.type,avklartBarn:p,termindato:y,vedtaksDatoSomSvangerskapsuke:k,soknad:r,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:t})]})})]})};Ov.__docgenInfo={description:`FodselInfoPanel

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
}>`},description:""}}};const mI={"FodselInfoPanel.KontrollerMotTerminbekreftelsen":"Kontroller terminbekreftelse","FodselInfoPanel.KontrollerMotFodselsdokumentasjon":"Kontroller mot opplysningene fra fødselsdokumentasjonen","TermindatoFaktaForm.ApplicationInformation":"Opplysninger om termin oppgitt i søknaden","TermindatoFaktaForm.UtstedtDato":"Utstedt dato","TermindatoFaktaForm.Termindato":"Termindato","TermindatoFaktaForm.AntallBarn":"Antall barn","TermindatoFaktaForm.CheckInformation":"Kontroller og godkjenn opplysningene i terminbekreftelsen","TermindatoFaktaForm.14WeeksAndThreeDays":"Utstedtdato kan ikke være før 26. svangerskapsuke","TermindatoFaktaForm.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","TermindatoFaktaForm.FodselsdatoTps":"Fødselsdato","TermindatoFaktaForm.AntallBarnTps":"Antall barn","TermindatoFaktaForm.AdvarselForTidligUtstedtdato":"Terminbekreftelsen utstedt før 22. svangerskapsuke. Kontakt søker for en nyere terminbekreftelse og sett saken på vent. Fortsett dersom ny bekreftelse ikke skal hentes inn. Behandlingen vil avslås på grunn av manglende dokumentasjon","AvklartBarnFieldArray.Title":"Fødselsdato","AvklartBarnFieldArray.Dodsdato":"Dødsdato","AvklartBarnFieldArray.LeggTilBarn":"Legg til barn","SjekkFodselDokForm.DokumentasjonForeligger":"Dokumentasjon foreligger","SjekkFodselDokForm.DokumentasjonForeliggerIkke":"Dokumentasjon foreligger ikke, bruk opplysningene i folkeregisteret","SjekkFodselDokForm.DokumentasjonAvFodsel":"Dokumentasjon av fødsel","SjekkFodselDokForm.FyllInnDokumenterteOpplysninger":"Fyll inn dokumenterte opplysninger"},gI=_t(mI),Td=e=>Q.jsx(Fi,{value:gI,children:Q.jsx(Ov,{...e})});Td.__docgenInfo={description:"",methods:[],displayName:"FodselFaktaIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const pI={register:{avklartBarn:[{fodselsdato:"2019-01-10"}]},gjeldende:{avklartBarn:[{fodselsdato:"2019-01-01"}],termindato:"2019-01-01",utstedtdato:"2019-01-01",antallBarnTermin:1,vedtaksDatoSomSvangerskapsuke:43,erOverstyrt:!1,morForSykVedFodsel:!0,dokumentasjonForeligger:!0,brukAntallBarnFraTps:!0}},Dv={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1,soknadType:Yp.FODSEL},hI={...Dv},yI={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},sc=[{definisjon:qt.TERMINBEKREFTELSE,status:Up.OPPRETTET,begrunnelse:null,kanLoses:!0}],oc={notAccepted:!1},_I={title:"fakta/fakta-fodsel",component:Td,decorators:[rS,aS],args:{submittable:!0,soknad:Dv,familiehendelse:pI,soknadOriginalBehandling:hI,familiehendelseOriginalBehandling:yI},render:e=>Q.jsx(Td,{...e})},ri={args:{aksjonspunkterForPanel:sc,alleMerknaderFraBeslutter:{[qt.TERMINBEKREFTELSE]:oc}}},ai={args:{aksjonspunkterForPanel:sc.map(e=>({...e,definisjon:qt.SJEKK_MANGLENDE_FODSEL})),alleMerknaderFraBeslutter:{[qt.SJEKK_MANGLENDE_FODSEL]:oc}}},si={args:{isReadOnly:!0,aksjonspunkterForPanel:sc.map(e=>({...e,status:Up.UTFORT,definisjon:qt.SJEKK_MANGLENDE_FODSEL,begrunnelse:"Dette er en begrunnelse"})),alleMerknaderFraBeslutter:{[qt.SJEKK_MANGLENDE_FODSEL]:oc}}},oi={args:{aksjonspunkterForPanel:[],alleMerknaderFraBeslutter:{}}};var Fp,Np,Ap;ri.parameters={...ri.parameters,docs:{...(Fp=ri.parameters)==null?void 0:Fp.docs,source:{originalSource:`{
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
}`,...($p=(Lp=oi.parameters)==null?void 0:Lp.docs)==null?void 0:$p.source}}};const TI=["AksjonspunktTerminbekreftelse","AksjonspunktSjekkManglendeFødsel","ReadonlyPanel","PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter"];export{ai as AksjonspunktSjekkManglendeFødsel,ri as AksjonspunktTerminbekreftelse,oi as PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter,si as ReadonlyPanel,TI as __namedExportsOrder,_I as default};
