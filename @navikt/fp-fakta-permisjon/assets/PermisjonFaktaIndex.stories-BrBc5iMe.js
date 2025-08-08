import{g as _s,r as c,u as js,_ as Tr,s as Ir,c as Mn,a as oe,b as E,d as ft,e as Dn,T as Ba,S as Fn,m as Ua,f as mt,R as xs,W as Ka,o as Ps,Q as Ga,A as $a,h as kn,i as Pn,j as T,P as _r,t as Ns,k as Ha,l as za,n as qn,p as Ya,q as Wa,M as Ja,v as Xa,w as Za,x as Qa}from"./iframe-DD0wCkWF.js";import{r as ei}from"./index-BBnwHEmI.js";import"./preload-helper-D9Z9MdNV.js";var Ss=ei();const et=_s(Ss);function ni(e,r){var t=e.values,n=Tr(e,["values"]),s=r.values,a=Tr(r,["values"]);return Ir(s,t)&&Ir(n,a)}function Ms(e){var r=js(),t=r.formatMessage,n=r.textComponent,s=n===void 0?c.Fragment:n,a=e.id,i=e.description,o=e.defaultMessage,d=e.values,l=e.children,u=e.tagName,f=u===void 0?s:u,p=e.ignoreTag,m={id:a,description:i,defaultMessage:o},v=t(m,d,{ignoreTag:p});return typeof l=="function"?l(Array.isArray(v)?v:[v]):f?c.createElement(f,null,v):c.createElement(c.Fragment,null,v)}Ms.displayName="FormattedMessage";var Q=c.memo(Ms,ni);Q.displayName="MemoizedFormattedMessage";var bn=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(bn||{}),Xe=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(Xe||{});const ti=(e,r,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${r}&dokumentId=${t}`,ri=(e,r,t)=>{const n=window.open(e,r);n&&setTimeout(()=>{n.document.title=t},1e3)},hn=e=>Mn({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var si=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ds=c.forwardRef((e,r)=>{var{className:t,size:n="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:d,visuallyHidden:l,textColor:u}=e,f=si(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=oe();return E.createElement(s,Object.assign({},f,{ref:r,className:p(t,"navds-body-long",`navds-body-long--${n}`,hn({spacing:a,truncate:i,weight:o,align:d,visuallyHidden:l,textColor:u}))}))});var ai=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ne=c.forwardRef((e,r)=>{var{className:t,size:n="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:d,visuallyHidden:l,textColor:u}=e,f=ai(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=oe();return E.createElement(s,Object.assign({},f,{ref:r,className:p(t,"navds-body-short",`navds-body-short--${n}`,hn({spacing:a,truncate:i,weight:o,align:d,visuallyHidden:l,textColor:u}))}))});var ii=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const nt=c.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:s,uppercase:a,as:i="p",truncate:o,weight:d="regular",align:l,visuallyHidden:u,textColor:f}=e,p=ii(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=oe();return E.createElement(i,Object.assign({},p,{ref:r,className:m(t,"navds-detail",hn({spacing:s,truncate:o,weight:d,align:l,visuallyHidden:u,textColor:f,uppercase:a}),{"navds-detail--small":n==="small"})}))});var oi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const lr=c.forwardRef((e,r)=>{var{children:t,className:n,size:s,spacing:a,as:i="p",showIcon:o=!1}=e,d=oi(e,["children","className","size","spacing","as","showIcon"]);const{cn:l}=oe();return E.createElement(i,Object.assign({},d,{ref:r,className:l("navds-error-message","navds-label",n,hn({spacing:a}),{"navds-label--small":s==="small","navds-error-message--show-icon":o})}),o&&E.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var li=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const di=c.forwardRef((e,r)=>{var{level:t="1",size:n,className:s,as:a,spacing:i,align:o,visuallyHidden:d,textColor:l}=e,u=li(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:f}=oe(),p=a??`h${t}`;return E.createElement(p,Object.assign({},u,{ref:r,className:f(s,"navds-heading",`navds-heading--${n}`,hn({spacing:i,align:o,visuallyHidden:d,textColor:l}))}))});var ui=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};c.forwardRef((e,r)=>{var{className:t,spacing:n,as:s="p"}=e,a=ui(e,["className","spacing","as"]);const{cn:i}=oe();return E.createElement(s,Object.assign({},a,{ref:r,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var ci=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const me=c.forwardRef((e,r)=>{var{className:t,size:n="medium",as:s="label",spacing:a,visuallyHidden:i,textColor:o}=e,d=ci(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:l}=oe();return E.createElement(s,Object.assign({},d,{ref:r,className:l(t,"navds-label",hn({spacing:a,visuallyHidden:i,textColor:o}),{"navds-label--small":n==="small"})}))});function Fs(e,r=166,t=!1){let n;function s(...a){const i=()=>{n=void 0,e.apply(this,a)};!n&&t&&i(),clearTimeout(n),n=setTimeout(i,r)}return s.clear=()=>{clearTimeout(n)},s}function qe(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}const gn=globalThis?.document?c.useLayoutEffect:()=>{};let jr=0;function fi(e){const[r,t]=c.useState(e),n=e||r;return c.useEffect(()=>{r==null&&(jr+=1,t(`aksel-id-${jr}`))},[r]),n}const xr=E.useId;function rn(e){var r;if(xr!==void 0){const t=xr();return e??t.replace(/(:)/g,"")}return(r=fi(e))!==null&&r!==void 0?r:""}function Nn(e,r=[]){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useCallback((...n)=>{var s;return(s=t.current)===null||s===void 0?void 0:s.call(t,...n)},r)}function mi({value:e,defaultValue:r,onChange:t}){const n=Nn(t),[s,a]=c.useState(r),i=e!==void 0,o=i?e:s,d=Nn(l=>{const f=typeof l=="function"?l(o):l;i||a(f),n(f)},[i,n,o]);return[o,d]}let Pr=0;function gi(e){const[r,t]=c.useState(e),n=e||r;return c.useEffect(()=>{r==null&&(Pr+=1,t(`aksel-icon-${Pr}`))},[r]),n}const Nr=E.useId;function we(e){var r;return Nr!==void 0?Nr().replace(/(:)/g,""):(r=gi(e))!==null&&r!==void 0?r:""}var pi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const vi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=pi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var yi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ki=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=yi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var bi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const hi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=bi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Ei=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Oi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ei(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Ri=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const wi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ri(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var Ai=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const qs=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ai(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Ti=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ii=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ti(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var _i=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ji=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=_i(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var xi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ls=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=xi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Pi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ni=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Pi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Si=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Mi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Si(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var Di=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Fi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Di(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var qi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Li=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=qi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Vi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ci=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Vi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Vs(e,r,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e?.(s),t===!1||!s.defaultPrevented)return r?.(s)}}const[Oc,Cs]=ft({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function At(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function wn(e){return(r,t)=>{const n=t?.context?String(t.context):"standalone";let s;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=t?.width?String(t.width):i;s=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=t?.width?String(t.width):e.defaultWidth;s=e.values[o]||e.values[i]}const a=e.argumentCallback?e.argumentCallback(r):r;return s[a]}}function An(e){return(r,t={})=>{const n=t.width,s=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],a=r.match(s);if(!a)return null;const i=a[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(o)?Ui(o,f=>f.test(i)):Bi(o,f=>f.test(i));let l;l=e.valueCallback?e.valueCallback(d):d,l=t.valueCallback?t.valueCallback(l):l;const u=r.slice(i.length);return{value:l,rest:u}}}function Bi(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function Ui(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function Ki(e){return(r,t={})=>{const n=r.match(e.matchPattern);if(!n)return null;const s=n[0],a=r.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;const o=r.slice(s.length);return{value:i,rest:o}}}const Gi={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},$i=(e,r,t)=>{let n;const s=Gi[e];return typeof s=="string"?n=s:r===1?n=s.one:n=s.other.replace("{{count}}",String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},Hi={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},zi={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Yi={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Wi={date:At({formats:Hi,defaultWidth:"full"}),time:At({formats:zi,defaultWidth:"full"}),dateTime:At({formats:Yi,defaultWidth:"full"})},Ji={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Xi=(e,r,t,n)=>Ji[e],Zi={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Qi={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},eo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},no={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},to={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},ro=(e,r)=>Number(e)+".",so={ordinalNumber:ro,era:wn({values:Zi,defaultWidth:"wide"}),quarter:wn({values:Qi,defaultWidth:"wide",argumentCallback:e=>e-1}),month:wn({values:eo,defaultWidth:"wide"}),day:wn({values:no,defaultWidth:"wide"}),dayPeriod:wn({values:to,defaultWidth:"wide"})},ao=/^(\d+)\.?/i,io=/\d+/i,oo={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},lo={any:[/^f/i,/^e/i]},uo={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},co={any:[/1/i,/2/i,/3/i,/4/i]},fo={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},mo={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},go={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},po={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},vo={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},yo={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},ko={ordinalNumber:Ki({matchPattern:ao,parsePattern:io,valueCallback:e=>parseInt(e,10)}),era:An({matchPatterns:oo,defaultMatchWidth:"wide",parsePatterns:lo,defaultParseWidth:"any"}),quarter:An({matchPatterns:uo,defaultMatchWidth:"wide",parsePatterns:co,defaultParseWidth:"any",valueCallback:e=>e+1}),month:An({matchPatterns:fo,defaultMatchWidth:"wide",parsePatterns:mo,defaultParseWidth:"any"}),day:An({matchPatterns:go,defaultMatchWidth:"wide",parsePatterns:po,defaultParseWidth:"any"}),dayPeriod:An({matchPatterns:vo,defaultMatchWidth:"any",parsePatterns:yo,defaultParseWidth:"any"})},bo={code:"nb",formatDistance:$i,formatLong:Wi,formatRelative:Xi,localize:so,match:ko,options:{weekStartsOn:1,firstWeekContainsDate:4}},ho={global:{dateLocale:bo,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Eo=c.createContext({locale:ho}),Bs=()=>c.useContext(Eo);var Oo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ro=c.forwardRef((e,r)=>{var t,n,s,{rootElement:a,asChild:i}=e,o=Oo(e,["rootElement","asChild"]);const d=Dn(!1),l=(t=Bs())===null||t===void 0?void 0:t.rootElement,u=(n=a??l)!==null&&n!==void 0?n:(s=globalThis?.document)===null||s===void 0?void 0:s.body,f=i?Fn:"div";return d?u?et.createPortal(E.createElement(Ba,{theme:d.theme,asChild:!0,hasBackground:!1,"data-color":d.color},E.createElement(f,Object.assign({ref:r,"data-aksel-portal":""},o))),u):null:u?et.createPortal(E.createElement(f,Object.assign({ref:r,"data-aksel-portal":""},o)),u):null});function Sr(e){return e.sort((r,t)=>{const n=r.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const wo=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Mr(e,r,t){let n=e+1;return t&&n>=r&&(n=0),n}function Dr(e,r,t){let n=e-1;return t&&n<0&&(n=r),n}const Tt=e=>e;class Ao{constructor(){this.descendants=new Map,this.register=r=>{if(r!=null)return wo(r)?this.registerNode(r):t=>{this.registerNode(t,r)}},this.unregister=r=>{this.descendants.delete(r);const t=Sr(Array.from(this.descendants.keys()));this.assignIndex(t)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=r=>{this.descendants.forEach(t=>{const n=r.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index),this.enabledValues=()=>this.values().filter(r=>!r.disabled),this.item=r=>{if(this.count()!==0)return this.values()[r]},this.enabledItem=r=>{if(this.enabledCount()!==0)return this.enabledValues()[r]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const r=this.enabledValues().length-1;return this.enabledItem(r)},this.indexOf=r=>{var t,n;return r&&(n=(t=this.descendants.get(r))===null||t===void 0?void 0:t.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=r=>r==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(r)),this.next=(r,t=!0)=>{const n=Mr(r,this.count(),t);return this.item(n)},this.nextEnabled=(r,t=!0)=>{const n=this.item(r);if(!n)return;const s=this.enabledIndexOf(n.node),a=Mr(s,this.enabledCount(),t);return this.enabledItem(a)},this.prev=(r,t=!0)=>{const n=Dr(r,this.count()-1,t);return this.item(n)},this.prevEnabled=(r,t=!0)=>{const n=this.item(r);if(!n)return;const s=this.enabledIndexOf(n.node),a=Dr(s,this.enabledCount()-1,t);return this.enabledItem(a)},this.registerNode=(r,t)=>{if(!r)return;const n=this.descendants.get(r);if(n){this.descendants.set(r,Object.assign({index:n.index,node:r},t));return}const s=Array.from(this.descendants.keys()).concat(r),a=Sr(s);t?.disabled&&(t.disabled=!!t.disabled);const i=Object.assign({node:r,index:-1},t);this.descendants.set(r,i),this.assignIndex(a)}}}function To(){const[e,r]=ft({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),t=Tt(a=>E.createElement(e,Object.assign({},a.value),a.children));function n(a){const i=r(),[o,d]=c.useState(-1),l=c.useRef(null);gn(()=>()=>{l.current&&i.unregister(l.current)},[]),gn(()=>{if(!l.current)return;const f=Number(l.current.dataset.index);o!==f&&!Number.isNaN(f)&&d(f)});const u=Tt(a?i.register(a):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(l.current),register:Ua([u,l])}}function s(){return c.useRef(new Ao).current}return[t,r,s,n]}function Io(e,r=globalThis?.document){const t=Nn(e);c.useEffect(()=>{const n=s=>{s.key==="Escape"&&t(s)};return r.addEventListener("keydown",n,!0),()=>r.removeEventListener("keydown",n,!0)},[t,r])}const Us={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function Ks(e,r,t,{discrete:n}={discrete:!1}){if(!r)return;const s=t.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});s.addEventListener(e,r,{once:!0}),n&&s?et.flushSync(()=>s.dispatchEvent(a)):s.dispatchEvent(a)}function _o(e,r=globalThis?.document){const t=Nn(e),n=c.useRef(!1);return c.useEffect(()=>{const s=a=>{if(a.target&&!n.current){const i={originalEvent:a};Ks(Us.FOCUS_OUTSIDE,t,i)}};return r.addEventListener("focusin",s),()=>r.removeEventListener("focusin",s)},[r,t]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function jo(e,r=globalThis?.document){const t=Nn(e),n=c.useRef(!1),s=c.useRef(()=>{});return c.useEffect(()=>{const a=o=>{function d(){Ks(Us.POINTER_DOWN_OUTSIDE,t,{originalEvent:o},{discrete:!0})}o.target&&!n.current?o.pointerType==="touch"?(r.removeEventListener("click",s.current),s.current=d,r.addEventListener("click",s.current,{once:!0})):d():r.removeEventListener("click",s.current),n.current=!1},i=window.setTimeout(()=>{r.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),r.removeEventListener("pointerdown",a),r.removeEventListener("click",s.current)}},[r,t]),{onPointerDownCapture:()=>{n.current=!0}}}var xo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const[Po,No,So,Mo]=To();let ln=0,Fr;const Do=c.forwardRef((e,r)=>No(!1)?E.createElement(qr,Object.assign({ref:r},e)):E.createElement(Fo,null,E.createElement(qr,Object.assign({ref:r},e)))),Fo=({children:e})=>{const r=So();return E.createElement(Po,{value:r},e)},qr=c.forwardRef((e,r)=>{var t,{children:n,asChild:s,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:d,onDismiss:l,safeZone:u,disableOutsidePointerEvents:f=!1,enabled:p=!0}=e,m=xo(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,v]=c.useState({}),{register:y,index:b,descendants:w}=Mo({disableOutsidePointerEvents:f,disabled:!p,forceUpdate:()=>v({})}),[h,_]=c.useState(null),A=mt(_,y,r),k=(t=h?.ownerDocument)!==null&&t!==void 0?t:globalThis?.document,P=c.useRef(!1),j=c.useRef(!1),C=(()=>{let R=-1;return w.enabledValues().forEach((N,F)=>{N.disableOutsidePointerEvents&&(R=F)}),{isPointerEventsEnabled:b>=R,isBodyPointerEventsDisabled:ln>0,pointerStyle:b>=R&&ln>0?"auto":void 0}})();function B(R){var I,N;if(!u?.anchor&&!u?.dismissable||!p)return;R.defaultPrevented||(P.current=!0,R.detail.originalEvent.type==="pointerdown"&&(j.current=!0));const F=R.target;R.detail.originalEvent.type==="pointerdown"?(!((I=u?.anchor)===null||I===void 0)&&I.contains(F)||F===u?.anchor)&&R.preventDefault():!(F instanceof HTMLElement&&![u?.anchor,u?.dismissable].some(D=>D?.contains(F))&&!F.contains((N=u?.dismissable)!==null&&N!==void 0?N:null))&&R.preventDefault(),R.detail.originalEvent.type==="focusin"&&j.current&&R.preventDefault(),j.current=!1,P.current=!1}const K=jo(R=>{!C.isPointerEventsEnabled||!p||(i?.(R),d?.(R),u&&B(R),!R.defaultPrevented&&l&&l())},k),$=_o(R=>{p&&(o?.(R),d?.(R),u&&B(R),!R.defaultPrevented&&l&&l())},k);Io(R=>{!p||!(b===w.enabledCount()-1)||(a?.(R),!R.defaultPrevented&&l&&(R.preventDefault(),l()))},k),c.useEffect(()=>{if(!(!h||!p||!f))return ln===0&&(Fr=k.body.style.pointerEvents,k.body.style.pointerEvents="none"),ln++,()=>{ln===1&&(k.body.style.pointerEvents=Fr),ln--}},[h,k,f,w,p]),c.useEffect(()=>()=>w.values().forEach(R=>R.forceUpdate()),[w,h]);const S=s?Fn:"div";return E.createElement(S,Object.assign({ref:A},m,{onFocusCapture:$.onFocusCapture,onBlurCapture:$.onBlurCapture,onPointerDownCapture:K.onPointerDownCapture,style:Object.assign({pointerEvents:C.pointerStyle},m.style)}),n)}),pn=Math.min,tn=Math.max,tt=Math.round,$n=Math.floor,Fe=e=>({x:e,y:e}),qo={left:"right",right:"left",bottom:"top",top:"bottom"},Lo={start:"end",end:"start"};function Yt(e,r,t){return tn(e,pn(r,t))}function Ln(e,r){return typeof e=="function"?e(r):e}function sn(e){return e.split("-")[0]}function Vn(e){return e.split("-")[1]}function Gs(e){return e==="x"?"y":"x"}function dr(e){return e==="y"?"height":"width"}function vn(e){return["top","bottom"].includes(sn(e))?"y":"x"}function ur(e){return Gs(vn(e))}function Vo(e,r,t){t===void 0&&(t=!1);const n=Vn(e),s=ur(e),a=dr(s);let i=s==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return r.reference[a]>r.floating[a]&&(i=rt(i)),[i,rt(i)]}function Co(e){const r=rt(e);return[Wt(e),r,Wt(r)]}function Wt(e){return e.replace(/start|end/g,r=>Lo[r])}function Bo(e,r,t){const n=["left","right"],s=["right","left"],a=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return t?r?s:n:r?n:s;case"left":case"right":return r?a:i;default:return[]}}function Uo(e,r,t,n){const s=Vn(e);let a=Bo(sn(e),t==="start",n);return s&&(a=a.map(i=>i+"-"+s),r&&(a=a.concat(a.map(Wt)))),a}function rt(e){return e.replace(/left|right|bottom|top/g,r=>qo[r])}function Ko(e){return{top:0,right:0,bottom:0,left:0,...e}}function $s(e){return typeof e!="number"?Ko(e):{top:e,right:e,bottom:e,left:e}}function st(e){const{x:r,y:t,width:n,height:s}=e;return{width:n,height:s,top:t,left:r,right:r+n,bottom:t+s,x:r,y:t}}function Lr(e,r,t){let{reference:n,floating:s}=e;const a=vn(r),i=ur(r),o=dr(i),d=sn(r),l=a==="y",u=n.x+n.width/2-s.width/2,f=n.y+n.height/2-s.height/2,p=n[o]/2-s[o]/2;let m;switch(d){case"top":m={x:u,y:n.y-s.height};break;case"bottom":m={x:u,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:f};break;case"left":m={x:n.x-s.width,y:f};break;default:m={x:n.x,y:n.y}}switch(Vn(r)){case"start":m[i]-=p*(t&&l?-1:1);break;case"end":m[i]+=p*(t&&l?-1:1);break}return m}const Go=async(e,r,t)=>{const{placement:n="bottom",strategy:s="absolute",middleware:a=[],platform:i}=t,o=a.filter(Boolean),d=await(i.isRTL==null?void 0:i.isRTL(r));let l=await i.getElementRects({reference:e,floating:r,strategy:s}),{x:u,y:f}=Lr(l,n,d),p=n,m={},v=0;for(let y=0;y<o.length;y++){const{name:b,fn:w}=o[y],{x:h,y:_,data:A,reset:k}=await w({x:u,y:f,initialPlacement:n,placement:p,strategy:s,middlewareData:m,rects:l,platform:i,elements:{reference:e,floating:r}});u=h??u,f=_??f,m={...m,[b]:{...m[b],...A}},k&&v<=50&&(v++,typeof k=="object"&&(k.placement&&(p=k.placement),k.rects&&(l=k.rects===!0?await i.getElementRects({reference:e,floating:r,strategy:s}):k.rects),{x:u,y:f}=Lr(l,p,d)),y=-1)}return{x:u,y:f,placement:p,strategy:s,middlewareData:m}};async function Hs(e,r){var t;r===void 0&&(r={});const{x:n,y:s,platform:a,rects:i,elements:o,strategy:d}=e,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=Ln(r,e),v=$s(m),b=o[p?f==="floating"?"reference":"floating":f],w=st(await a.getClippingRect({element:(t=await(a.isElement==null?void 0:a.isElement(b)))==null||t?b:b.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(o.floating)),boundary:l,rootBoundary:u,strategy:d})),h=f==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,_=await(a.getOffsetParent==null?void 0:a.getOffsetParent(o.floating)),A=await(a.isElement==null?void 0:a.isElement(_))?await(a.getScale==null?void 0:a.getScale(_))||{x:1,y:1}:{x:1,y:1},k=st(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:h,offsetParent:_,strategy:d}):h);return{top:(w.top-k.top+v.top)/A.y,bottom:(k.bottom-w.bottom+v.bottom)/A.y,left:(w.left-k.left+v.left)/A.x,right:(k.right-w.right+v.right)/A.x}}const $o=e=>({name:"arrow",options:e,async fn(r){const{x:t,y:n,placement:s,rects:a,platform:i,elements:o,middlewareData:d}=r,{element:l,padding:u=0}=Ln(e,r)||{};if(l==null)return{};const f=$s(u),p={x:t,y:n},m=ur(s),v=dr(m),y=await i.getDimensions(l),b=m==="y",w=b?"top":"left",h=b?"bottom":"right",_=b?"clientHeight":"clientWidth",A=a.reference[v]+a.reference[m]-p[m]-a.floating[v],k=p[m]-a.reference[m],P=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l));let j=P?P[_]:0;(!j||!await(i.isElement==null?void 0:i.isElement(P)))&&(j=o.floating[_]||a.floating[v]);const C=A/2-k/2,B=j/2-y[v]/2-1,K=pn(f[w],B),$=pn(f[h],B),S=K,R=j-y[v]-$,I=j/2-y[v]/2+C,N=Yt(S,I,R),F=!d.arrow&&Vn(s)!=null&&I!==N&&a.reference[v]/2-(I<S?K:$)-y[v]/2<0,q=F?I<S?I-S:I-R:0;return{[m]:p[m]+q,data:{[m]:N,centerOffset:I-N-q,...F&&{alignmentOffset:q}},reset:F}}}),Ho=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var t,n;const{placement:s,middlewareData:a,rects:i,initialPlacement:o,platform:d,elements:l}=r,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...b}=Ln(e,r);if((t=a.arrow)!=null&&t.alignmentOffset)return{};const w=sn(s),h=vn(o),_=sn(o)===o,A=await(d.isRTL==null?void 0:d.isRTL(l.floating)),k=p||(_||!y?[rt(o)]:Co(o)),P=v!=="none";!p&&P&&k.push(...Uo(o,y,v,A));const j=[o,...k],C=await Hs(r,b),B=[];let K=((n=a.flip)==null?void 0:n.overflows)||[];if(u&&B.push(C[w]),f){const I=Vo(s,i,A);B.push(C[I[0]],C[I[1]])}if(K=[...K,{placement:s,overflows:B}],!B.every(I=>I<=0)){var $,S;const I=((($=a.flip)==null?void 0:$.index)||0)+1,N=j[I];if(N)return{data:{index:I,overflows:K},reset:{placement:N}};let F=(S=K.filter(q=>q.overflows[0]<=0).sort((q,D)=>q.overflows[1]-D.overflows[1])[0])==null?void 0:S.placement;if(!F)switch(m){case"bestFit":{var R;const q=(R=K.filter(D=>{if(P){const M=vn(D.placement);return M===h||M==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(M=>M>0).reduce((M,H)=>M+H,0)]).sort((D,M)=>D[1]-M[1])[0])==null?void 0:R[0];q&&(F=q);break}case"initialPlacement":F=o;break}if(s!==F)return{reset:{placement:F}}}return{}}}};async function zo(e,r){const{placement:t,platform:n,elements:s}=e,a=await(n.isRTL==null?void 0:n.isRTL(s.floating)),i=sn(t),o=Vn(t),d=vn(t)==="y",l=["left","top"].includes(i)?-1:1,u=a&&d?-1:1,f=Ln(r,e);let{mainAxis:p,crossAxis:m,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return o&&typeof v=="number"&&(m=o==="end"?v*-1:v),d?{x:m*u,y:p*l}:{x:p*l,y:m*u}}const Yo=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var t,n;const{x:s,y:a,placement:i,middlewareData:o}=r,d=await zo(r,e);return i===((t=o.offset)==null?void 0:t.placement)&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:s+d.x,y:a+d.y,data:{...d,placement:i}}}}},Wo=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:t,y:n,placement:s}=r,{mainAxis:a=!0,crossAxis:i=!1,limiter:o={fn:b=>{let{x:w,y:h}=b;return{x:w,y:h}}},...d}=Ln(e,r),l={x:t,y:n},u=await Hs(r,d),f=vn(sn(s)),p=Gs(f);let m=l[p],v=l[f];if(a){const b=p==="y"?"top":"left",w=p==="y"?"bottom":"right",h=m+u[b],_=m-u[w];m=Yt(h,m,_)}if(i){const b=f==="y"?"top":"left",w=f==="y"?"bottom":"right",h=v+u[b],_=v-u[w];v=Yt(h,v,_)}const y=o.fn({...r,[p]:m,[f]:v});return{...y,data:{x:y.x-t,y:y.y-n,enabled:{[p]:a,[f]:i}}}}}};function gt(){return typeof window<"u"}function En(e){return zs(e)?(e.nodeName||"").toLowerCase():"#document"}function Re(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function Ve(e){var r;return(r=(zs(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function zs(e){return gt()?e instanceof Node||e instanceof Re(e).Node:!1}function re(e){return gt()?e instanceof Element||e instanceof Re(e).Element:!1}function Ie(e){return gt()?e instanceof HTMLElement||e instanceof Re(e).HTMLElement:!1}function at(e){return!gt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Re(e).ShadowRoot}function Cn(e){const{overflow:r,overflowX:t,overflowY:n,display:s}=Ne(e);return/auto|scroll|overlay|hidden|clip/.test(r+n+t)&&!["inline","contents"].includes(s)}function Jo(e){return["table","td","th"].includes(En(e))}function pt(e){return[":popover-open",":modal"].some(r=>{try{return e.matches(r)}catch{return!1}})}function cr(e){const r=vt(),t=re(e)?Ne(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(t.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(t.contain||"").includes(n))}function Xo(e){let r=He(e);for(;Ie(r)&&!$e(r);){if(cr(r))return r;if(pt(r))return null;r=He(r)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function $e(e){return["html","body","#document"].includes(En(e))}function Ne(e){return Re(e).getComputedStyle(e)}function yt(e){return re(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function He(e){if(En(e)==="html")return e;const r=e.assignedSlot||e.parentNode||at(e)&&e.host||Ve(e);return at(r)?r.host:r}function Ys(e){const r=He(e);return $e(r)?e.ownerDocument?e.ownerDocument.body:e.body:Ie(r)&&Cn(r)?r:Ys(r)}function We(e,r,t){var n;r===void 0&&(r=[]),t===void 0&&(t=!0);const s=Ys(e),a=s===((n=e.ownerDocument)==null?void 0:n.body),i=Re(s);if(a){const o=Jt(i);return r.concat(i,i.visualViewport||[],Cn(s)?s:[],o&&t?We(o):[])}return r.concat(s,We(s,[],t))}function Jt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ws(e){const r=Ne(e);let t=parseFloat(r.width)||0,n=parseFloat(r.height)||0;const s=Ie(e),a=s?e.offsetWidth:t,i=s?e.offsetHeight:n,o=tt(t)!==a||tt(n)!==i;return o&&(t=a,n=i),{width:t,height:n,$:o}}function fr(e){return re(e)?e:e.contextElement}function fn(e){const r=fr(e);if(!Ie(r))return Fe(1);const t=r.getBoundingClientRect(),{width:n,height:s,$:a}=Ws(r);let i=(a?tt(t.width):t.width)/n,o=(a?tt(t.height):t.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const Zo=Fe(0);function Js(e){const r=Re(e);return!vt()||!r.visualViewport?Zo:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function Qo(e,r,t){return r===void 0&&(r=!1),!t||r&&t!==Re(e)?!1:r}function an(e,r,t,n){r===void 0&&(r=!1),t===void 0&&(t=!1);const s=e.getBoundingClientRect(),a=fr(e);let i=Fe(1);r&&(n?re(n)&&(i=fn(n)):i=fn(e));const o=Qo(a,t,n)?Js(a):Fe(0);let d=(s.left+o.x)/i.x,l=(s.top+o.y)/i.y,u=s.width/i.x,f=s.height/i.y;if(a){const p=Re(a),m=n&&re(n)?Re(n):n;let v=p,y=Jt(v);for(;y&&n&&m!==v;){const b=fn(y),w=y.getBoundingClientRect(),h=Ne(y),_=w.left+(y.clientLeft+parseFloat(h.paddingLeft))*b.x,A=w.top+(y.clientTop+parseFloat(h.paddingTop))*b.y;d*=b.x,l*=b.y,u*=b.x,f*=b.y,d+=_,l+=A,v=Re(y),y=Jt(v)}}return st({width:u,height:f,x:d,y:l})}function mr(e,r){const t=yt(e).scrollLeft;return r?r.left+t:an(Ve(e)).left+t}function Xs(e,r,t){t===void 0&&(t=!1);const n=e.getBoundingClientRect(),s=n.left+r.scrollLeft-(t?0:mr(e,n)),a=n.top+r.scrollTop;return{x:s,y:a}}function el(e){let{elements:r,rect:t,offsetParent:n,strategy:s}=e;const a=s==="fixed",i=Ve(n),o=r?pt(r.floating):!1;if(n===i||o&&a)return t;let d={scrollLeft:0,scrollTop:0},l=Fe(1);const u=Fe(0),f=Ie(n);if((f||!f&&!a)&&((En(n)!=="body"||Cn(i))&&(d=yt(n)),Ie(n))){const m=an(n);l=fn(n),u.x=m.x+n.clientLeft,u.y=m.y+n.clientTop}const p=i&&!f&&!a?Xs(i,d,!0):Fe(0);return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-d.scrollLeft*l.x+u.x+p.x,y:t.y*l.y-d.scrollTop*l.y+u.y+p.y}}function nl(e){return Array.from(e.getClientRects())}function tl(e){const r=Ve(e),t=yt(e),n=e.ownerDocument.body,s=tn(r.scrollWidth,r.clientWidth,n.scrollWidth,n.clientWidth),a=tn(r.scrollHeight,r.clientHeight,n.scrollHeight,n.clientHeight);let i=-t.scrollLeft+mr(e);const o=-t.scrollTop;return Ne(n).direction==="rtl"&&(i+=tn(r.clientWidth,n.clientWidth)-s),{width:s,height:a,x:i,y:o}}function rl(e,r){const t=Re(e),n=Ve(e),s=t.visualViewport;let a=n.clientWidth,i=n.clientHeight,o=0,d=0;if(s){a=s.width,i=s.height;const l=vt();(!l||l&&r==="fixed")&&(o=s.offsetLeft,d=s.offsetTop)}return{width:a,height:i,x:o,y:d}}function sl(e,r){const t=an(e,!0,r==="fixed"),n=t.top+e.clientTop,s=t.left+e.clientLeft,a=Ie(e)?fn(e):Fe(1),i=e.clientWidth*a.x,o=e.clientHeight*a.y,d=s*a.x,l=n*a.y;return{width:i,height:o,x:d,y:l}}function Vr(e,r,t){let n;if(r==="viewport")n=rl(e,t);else if(r==="document")n=tl(Ve(e));else if(re(r))n=sl(r,t);else{const s=Js(e);n={x:r.x-s.x,y:r.y-s.y,width:r.width,height:r.height}}return st(n)}function Zs(e,r){const t=He(e);return t===r||!re(t)||$e(t)?!1:Ne(t).position==="fixed"||Zs(t,r)}function al(e,r){const t=r.get(e);if(t)return t;let n=We(e,[],!1).filter(o=>re(o)&&En(o)!=="body"),s=null;const a=Ne(e).position==="fixed";let i=a?He(e):e;for(;re(i)&&!$e(i);){const o=Ne(i),d=cr(i);!d&&o.position==="fixed"&&(s=null),(a?!d&&!s:!d&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Cn(i)&&!d&&Zs(e,i))?n=n.filter(u=>u!==i):s=o,i=He(i)}return r.set(e,n),n}function il(e){let{element:r,boundary:t,rootBoundary:n,strategy:s}=e;const i=[...t==="clippingAncestors"?pt(r)?[]:al(r,this._c):[].concat(t),n],o=i[0],d=i.reduce((l,u)=>{const f=Vr(r,u,s);return l.top=tn(f.top,l.top),l.right=pn(f.right,l.right),l.bottom=pn(f.bottom,l.bottom),l.left=tn(f.left,l.left),l},Vr(r,o,s));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function ol(e){const{width:r,height:t}=Ws(e);return{width:r,height:t}}function ll(e,r,t){const n=Ie(r),s=Ve(r),a=t==="fixed",i=an(e,!0,a,r);let o={scrollLeft:0,scrollTop:0};const d=Fe(0);if(n||!n&&!a)if((En(r)!=="body"||Cn(s))&&(o=yt(r)),n){const p=an(r,!0,a,r);d.x=p.x+r.clientLeft,d.y=p.y+r.clientTop}else s&&(d.x=mr(s));const l=s&&!n&&!a?Xs(s,o):Fe(0),u=i.left+o.scrollLeft-d.x-l.x,f=i.top+o.scrollTop-d.y-l.y;return{x:u,y:f,width:i.width,height:i.height}}function It(e){return Ne(e).position==="static"}function Cr(e,r){if(!Ie(e)||Ne(e).position==="fixed")return null;if(r)return r(e);let t=e.offsetParent;return Ve(e)===t&&(t=t.ownerDocument.body),t}function Qs(e,r){const t=Re(e);if(pt(e))return t;if(!Ie(e)){let s=He(e);for(;s&&!$e(s);){if(re(s)&&!It(s))return s;s=He(s)}return t}let n=Cr(e,r);for(;n&&Jo(n)&&It(n);)n=Cr(n,r);return n&&$e(n)&&It(n)&&!cr(n)?t:n||Xo(e)||t}const dl=async function(e){const r=this.getOffsetParent||Qs,t=this.getDimensions,n=await t(e.floating);return{reference:ll(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ul(e){return Ne(e).direction==="rtl"}const cl={convertOffsetParentRelativeRectToViewportRelativeRect:el,getDocumentElement:Ve,getClippingRect:il,getOffsetParent:Qs,getElementRects:dl,getClientRects:nl,getDimensions:ol,getScale:fn,isElement:re,isRTL:ul};function ea(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function fl(e,r){let t=null,n;const s=Ve(e);function a(){var o;clearTimeout(n),(o=t)==null||o.disconnect(),t=null}function i(o,d){o===void 0&&(o=!1),d===void 0&&(d=1),a();const l=e.getBoundingClientRect(),{left:u,top:f,width:p,height:m}=l;if(o||r(),!p||!m)return;const v=$n(f),y=$n(s.clientWidth-(u+p)),b=$n(s.clientHeight-(f+m)),w=$n(u),_={rootMargin:-v+"px "+-y+"px "+-b+"px "+-w+"px",threshold:tn(0,pn(1,d))||1};let A=!0;function k(P){const j=P[0].intersectionRatio;if(j!==d){if(!A)return i();j?i(!1,j):n=setTimeout(()=>{i(!1,1e-7)},1e3)}j===1&&!ea(l,e.getBoundingClientRect())&&i(),A=!1}try{t=new IntersectionObserver(k,{..._,root:s.ownerDocument})}catch{t=new IntersectionObserver(k,_)}t.observe(e)}return i(!0),a}function Xt(e,r,t,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:d=!1}=n,l=fr(e),u=s||a?[...l?We(l):[],...We(r)]:[];u.forEach(w=>{s&&w.addEventListener("scroll",t,{passive:!0}),a&&w.addEventListener("resize",t)});const f=l&&o?fl(l,t):null;let p=-1,m=null;i&&(m=new ResizeObserver(w=>{let[h]=w;h&&h.target===l&&m&&(m.unobserve(r),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var _;(_=m)==null||_.observe(r)})),t()}),l&&!d&&m.observe(l),m.observe(r));let v,y=d?an(e):null;d&&b();function b(){const w=an(e);y&&!ea(y,w)&&t(),y=w,v=requestAnimationFrame(b)}return t(),()=>{var w;u.forEach(h=>{s&&h.removeEventListener("scroll",t),a&&h.removeEventListener("resize",t)}),f?.(),(w=m)==null||w.disconnect(),m=null,d&&cancelAnimationFrame(v)}}const ml=Yo,gl=Wo,pl=Ho,Br=$o,vl=(e,r,t)=>{const n=new Map,s={platform:cl,...t},a={...s.platform,_c:n};return Go(e,r,{...s,platform:a})};var Zn=typeof document<"u"?c.useLayoutEffect:c.useEffect;function it(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,s;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!it(e[n],r[n]))return!1;return!0}if(s=Object.keys(e),t=s.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,s[n]))return!1;for(n=t;n--!==0;){const a=s[n];if(!(a==="_owner"&&e.$$typeof)&&!it(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}function na(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ur(e,r){const t=na(e);return Math.round(r*t)/t}function _t(e){const r=c.useRef(e);return Zn(()=>{r.current=e}),r}function yl(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:s,elements:{reference:a,floating:i}={},transform:o=!0,whileElementsMounted:d,open:l}=e,[u,f]=c.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[p,m]=c.useState(n);it(p,n)||m(n);const[v,y]=c.useState(null),[b,w]=c.useState(null),h=c.useCallback(D=>{D!==P.current&&(P.current=D,y(D))},[]),_=c.useCallback(D=>{D!==j.current&&(j.current=D,w(D))},[]),A=a||v,k=i||b,P=c.useRef(null),j=c.useRef(null),C=c.useRef(u),B=d!=null,K=_t(d),$=_t(s),S=_t(l),R=c.useCallback(()=>{if(!P.current||!j.current)return;const D={placement:r,strategy:t,middleware:p};$.current&&(D.platform=$.current),vl(P.current,j.current,D).then(M=>{const H={...M,isPositioned:S.current!==!1};I.current&&!it(C.current,H)&&(C.current=H,Ss.flushSync(()=>{f(H)}))})},[p,r,t,$,S]);Zn(()=>{l===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,f(D=>({...D,isPositioned:!1})))},[l]);const I=c.useRef(!1);Zn(()=>(I.current=!0,()=>{I.current=!1}),[]),Zn(()=>{if(A&&(P.current=A),k&&(j.current=k),A&&k){if(K.current)return K.current(A,k,R);R()}},[A,k,R,K,B]);const N=c.useMemo(()=>({reference:P,floating:j,setReference:h,setFloating:_}),[h,_]),F=c.useMemo(()=>({reference:A,floating:k}),[A,k]),q=c.useMemo(()=>{const D={position:t,left:0,top:0};if(!F.floating)return D;const M=Ur(F.floating,u.x),H=Ur(F.floating,u.y);return o?{...D,transform:"translate("+M+"px, "+H+"px)",...na(F.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:M,top:H}},[t,o,F.floating,u.x,u.y]);return c.useMemo(()=>({...u,update:R,refs:N,elements:F,floatingStyles:q}),[u,R,N,F,q])}const kl=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:s}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?Br({element:n.current,padding:s}).fn(t):{}:n?Br({element:n,padding:s}).fn(t):{}}}},ta=(e,r)=>({...ml(e),options:[e,r]}),ra=(e,r)=>({...gl(e),options:[e,r]}),sa=(e,r)=>({...pl(e),options:[e,r]}),aa=(e,r)=>({...kl(e),options:[e,r]}),Kr=/(\w+)/g;function bl(e,r){const t=Array.isArray(e)?e:hl(e);for(const n of r){if(!n)continue;let s=n;for(let a=0;a<t.length;a++){const i=s[t[a]];i!==void 0&&(s=i)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function hl(e){const r=[];let t=Kr.exec(e);for(;t;){const[,n,s]=t;r.push(n||s),t=Kr.exec(e)}return r}const El=/{[^}]*}/g;function kt(e,...r){const t=Bs(),n=t.translations||[],s=[...r,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],t.locale[e]];return(i,o)=>{const d=bl(i,s);return o?d.replace(El,l=>{const u=l.substring(1,l.length-1);if(o[u]===void 0){const f=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${f}'`)}return o[u]}):d}}var Ol=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Rl=c.forwardRef((e,r)=>{var{className:t,size:n="medium",title:s,transparent:a=!1,variant:i="neutral",id:o,"data-color":d}=e,l=Ol(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:u}=oe(),f=rn(),p=kt("Loader");return E.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${f}`,ref:r,className:u("navds-loader",t,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":a}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??wl(i)},qe(l,["children"]),{"data-variant":i}),E.createElement("title",{id:o??`loader-${f}`},s||p("title")),E.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),E.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function wl(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Al=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const gr=c.forwardRef((e,r)=>{var{as:t="button",variant:n="primary",className:s,children:a,size:i="medium",loading:o=!1,disabled:d,icon:l,iconPosition:u="left",onKeyUp:f,"data-color":p}=e,m=Al(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:v}=oe(),y=d||o?qe(m,["href"]):m,b=w=>{w.key===" "&&!d&&!o&&w.currentTarget.click()};return E.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":p??Tl(n),"data-variant":Il(n)},y,{ref:r,onKeyUp:Vs(f,b),className:v(s,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!l&&!a,"navds-button--disabled":d??o}),disabled:d??o?!0:void 0}),l&&u==="left"&&E.createElement("span",{className:v("navds-button__icon")},l),o&&E.createElement(Rl,{size:i}),a&&E.createElement(me,{as:"span",size:i==="medium"?"medium":"small"},a),l&&u==="right"&&E.createElement("span",{className:v("navds-button__icon")},l))});function Tl(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Il(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var _l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const jl={error:Ci,warning:qs,info:ji,success:hi},xl=c.forwardRef((e,r)=>{var{children:t,className:n,variant:s,size:a="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:d=!1,closeButton:l=!1,onClose:u}=e,f=_l(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:p}=oe(),m=kt("Alert"),v=jl[s];return E.createElement("div",Object.assign({},f,{"data-color":Pl(s),"data-variant":s,ref:r,className:p(n,"navds-alert",`navds-alert--${s}`,`navds-alert--${a}`,{"navds-alert--full-width":i,"navds-alert--inline":d,"navds-alert--close-button":l})}),E.createElement(v,{title:m(s),className:p("navds-alert__icon")}),E.createElement(Ds,{as:"div",size:a,className:p("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},t),l&&!d&&E.createElement("div",{className:p("navds-alert__button-wrapper")},E.createElement(gr,{className:p("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:E.createElement(Li,{title:["error","warning"].includes(s)?m("closeAlert"):m("closeMessage")})})))});function Pl(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function Nl(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Sl(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(r=>{let{brand:t,version:n}=r;return t+"/"+n}).join(" "):navigator.userAgent}function Ml(){return/apple/i.test(navigator.vendor)}function Dl(){return Nl().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Fl(){return Sl().includes("jsdom/")}const ql="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Gr(e){let r=e.activeElement;for(;((t=r)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;r=r.shadowRoot.activeElement}return r}function Sn(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&at(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function un(e){return"composedPath"in e?e.composedPath()[0]:e.target}function jt(e,r){if(r==null)return!1;if("composedPath"in e)return e.composedPath().includes(r);const t=e;return t.target!=null&&r.contains(t.target)}function Ll(e){return e.matches("html,body")}function en(e){return e?.ownerDocument||document}function Vl(e){return Ie(e)&&e.matches(ql)}function Cl(e){if(!e||Fl())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function xt(e,r,t){t===void 0&&(t=!0);let n=e.filter(a=>{var i;return a.parentId===r&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=t?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var d;return a.parentId===o.id&&((d=a.context)==null?void 0:d.open)})}):e,n=n.concat(s);return n}function Bl(e){return"nativeEvent"in e}function Zt(e,r){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var yn=typeof document<"u"?c.useLayoutEffect:c.useEffect;const Ul={...xs};function Hn(e){const r=c.useRef(e);return yn(()=>{r.current=e}),r}const Kl=Ul.useInsertionEffect,Gl=Kl||(e=>e());function Ke(e){const r=c.useRef(()=>{});return Gl(()=>{r.current=e}),c.useCallback(function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return r.current==null?void 0:r.current(...n)},[])}const $l="data-floating-ui-focusable",$r="active",Hr="selected",Hl={...xs};let zr=!1,zl=0;const Yr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+zl++;function Yl(){const[e,r]=c.useState(()=>zr?Yr():void 0);return yn(()=>{e==null&&r(Yr())},[]),c.useEffect(()=>{zr=!0},[]),e}const Wl=Hl.useId,Jl=Wl||Yl;function Xl(){const e=new Map;return{emit(r,t){var n;(n=e.get(r))==null||n.forEach(s=>s(t))},on(r,t){e.has(r)||e.set(r,new Set),e.get(r).add(t)},off(r,t){var n;(n=e.get(r))==null||n.delete(t)}}}const Zl=c.createContext(null),Ql=c.createContext(null),ia=()=>{var e;return((e=c.useContext(Zl))==null?void 0:e.id)||null},pr=()=>c.useContext(Ql);function vr(e){return"data-floating-ui-"+e}function je(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Wr=vr("safe-polygon");function Pt(e,r,t){if(t&&!Zt(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n?.[r]}return e?.[r]}function Nt(e){return typeof e=="function"?e():e}function ed(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,dataRef:s,events:a,elements:i}=e,{enabled:o=!0,delay:d=0,handleClose:l=null,mouseOnly:u=!1,restMs:f=0,move:p=!0}=r,m=pr(),v=ia(),y=Hn(l),b=Hn(d),w=Hn(t),h=Hn(f),_=c.useRef(),A=c.useRef(-1),k=c.useRef(),P=c.useRef(-1),j=c.useRef(!0),C=c.useRef(!1),B=c.useRef(()=>{}),K=c.useRef(!1),$=c.useCallback(()=>{var q;const D=(q=s.current.openEvent)==null?void 0:q.type;return D?.includes("mouse")&&D!=="mousedown"},[s]);c.useEffect(()=>{if(!o)return;function q(D){let{open:M}=D;M||(je(A),je(P),j.current=!0,K.current=!1)}return a.on("openchange",q),()=>{a.off("openchange",q)}},[o,a]),c.useEffect(()=>{if(!o||!y.current||!t)return;function q(M){$()&&n(!1,M,"hover")}const D=en(i.floating).documentElement;return D.addEventListener("mouseleave",q),()=>{D.removeEventListener("mouseleave",q)}},[i.floating,t,n,o,y,$]);const S=c.useCallback(function(q,D,M){D===void 0&&(D=!0),M===void 0&&(M="hover");const H=Pt(b.current,"close",_.current);H&&!k.current?(je(A),A.current=window.setTimeout(()=>n(!1,q,M),H)):D&&(je(A),n(!1,q,M))},[b,n]),R=Ke(()=>{B.current(),k.current=void 0}),I=Ke(()=>{if(C.current){const q=en(i.floating).body;q.style.pointerEvents="",q.removeAttribute(Wr),C.current=!1}}),N=Ke(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);c.useEffect(()=>{if(!o)return;function q(W){if(je(A),j.current=!1,u&&!Zt(_.current)||Nt(h.current)>0&&!Pt(b.current,"open"))return;const J=Pt(b.current,"open",_.current);J?A.current=window.setTimeout(()=>{w.current||n(!0,W,"hover")},J):t||n(!0,W,"hover")}function D(W){if(N()){I();return}B.current();const J=en(i.floating);if(je(P),K.current=!1,y.current&&s.current.floatingContext){t||je(A),k.current=y.current({...s.current.floatingContext,tree:m,x:W.clientX,y:W.clientY,onClose(){I(),R(),N()||S(W,!0,"safe-polygon")}});const ve=k.current;J.addEventListener("mousemove",ve),B.current=()=>{J.removeEventListener("mousemove",ve)};return}(_.current==="touch"?!Sn(i.floating,W.relatedTarget):!0)&&S(W)}function M(W){N()||s.current.floatingContext&&(y.current==null||y.current({...s.current.floatingContext,tree:m,x:W.clientX,y:W.clientY,onClose(){I(),R(),N()||S(W)}})(W))}function H(){je(A)}function Y(W){N()||S(W,!1)}if(re(i.domReference)){const W=i.domReference,J=i.floating;return t&&W.addEventListener("mouseleave",M),p&&W.addEventListener("mousemove",q,{once:!0}),W.addEventListener("mouseenter",q),W.addEventListener("mouseleave",D),J&&(J.addEventListener("mouseleave",M),J.addEventListener("mouseenter",H),J.addEventListener("mouseleave",Y)),()=>{t&&W.removeEventListener("mouseleave",M),p&&W.removeEventListener("mousemove",q),W.removeEventListener("mouseenter",q),W.removeEventListener("mouseleave",D),J&&(J.removeEventListener("mouseleave",M),J.removeEventListener("mouseenter",H),J.removeEventListener("mouseleave",Y))}}},[i,o,e,u,p,S,R,I,n,t,w,m,b,y,s,N,h]),yn(()=>{var q;if(o&&t&&(q=y.current)!=null&&q.__options.blockPointerEvents&&$()){C.current=!0;const M=i.floating;if(re(i.domReference)&&M){var D;const H=en(i.floating).body;H.setAttribute(Wr,"");const Y=i.domReference,W=m==null||(D=m.nodesRef.current.find(J=>J.id===v))==null||(D=D.context)==null?void 0:D.elements.floating;return W&&(W.style.pointerEvents=""),H.style.pointerEvents="none",Y.style.pointerEvents="auto",M.style.pointerEvents="auto",()=>{H.style.pointerEvents="",Y.style.pointerEvents="",M.style.pointerEvents=""}}}},[o,t,v,i,m,y,$]),yn(()=>{t||(_.current=void 0,K.current=!1,R(),I())},[t,R,I]),c.useEffect(()=>()=>{R(),je(A),je(P),I()},[o,i.domReference,R,I]);const F=c.useMemo(()=>{function q(D){_.current=D.pointerType}return{onPointerDown:q,onPointerEnter:q,onMouseMove(D){const{nativeEvent:M}=D;function H(){!j.current&&!w.current&&n(!0,M,"hover")}u&&!Zt(_.current)||t||Nt(h.current)===0||K.current&&D.movementX**2+D.movementY**2<2||(je(P),_.current==="touch"?H():(K.current=!0,P.current=window.setTimeout(H,Nt(h.current))))}}},[u,n,t,w,h]);return c.useMemo(()=>o?{reference:F}:{},[o,F])}function St(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&at(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function nd(e){return"composedPath"in e?e.composedPath()[0]:e.target}const td={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},rd={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Jr=e=>{var r,t;return{escapeKey:typeof e=="boolean"?e:(r=e?.escapeKey)!=null?r:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function sd(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,elements:s,dataRef:a}=e,{enabled:i=!0,escapeKey:o=!0,outsidePress:d=!0,outsidePressEvent:l="pointerdown",referencePress:u=!1,referencePressEvent:f="pointerdown",ancestorScroll:p=!1,bubbles:m,capture:v}=r,y=pr(),b=Ke(typeof d=="function"?d:()=>!1),w=typeof d=="function"?b:d,h=c.useRef(!1),_=c.useRef(!1),{escapeKey:A,outsidePress:k}=Jr(m),{escapeKey:P,outsidePress:j}=Jr(v),C=c.useRef(!1),B=Ke(N=>{var F;if(!t||!i||!o||N.key!=="Escape"||C.current)return;const q=(F=a.current.floatingContext)==null?void 0:F.nodeId,D=y?xt(y.nodesRef.current,q):[];if(!A&&(N.stopPropagation(),D.length>0)){let M=!0;if(D.forEach(H=>{var Y;if((Y=H.context)!=null&&Y.open&&!H.context.dataRef.current.__escapeKeyBubbles){M=!1;return}}),!M)return}n(!1,Bl(N)?N.nativeEvent:N,"escape-key")}),K=Ke(N=>{var F;const q=()=>{var D;B(N),(D=un(N))==null||D.removeEventListener("keydown",q)};(F=un(N))==null||F.addEventListener("keydown",q)}),$=Ke(N=>{var F;const q=h.current;h.current=!1;const D=_.current;if(_.current=!1,l==="click"&&D||q||typeof w=="function"&&!w(N))return;const M=un(N),H="["+vr("inert")+"]",Y=en(s.floating).querySelectorAll(H);let W=re(M)?M:null;for(;W&&!$e(W);){const fe=He(W);if($e(fe)||!re(fe))break;W=fe}if(Y.length&&re(M)&&!Ll(M)&&!Sn(M,s.floating)&&Array.from(Y).every(fe=>!Sn(W,fe)))return;if(Ie(M)&&I){const fe=$e(M),le=Ne(M),X=/auto|scroll/,se=fe||X.test(le.overflowX),ye=fe||X.test(le.overflowY),ke=se&&M.clientWidth>0&&M.scrollWidth>M.clientWidth,be=ye&&M.clientHeight>0&&M.scrollHeight>M.clientHeight,Qe=le.direction==="rtl",Ce=be&&(Qe?N.offsetX<=M.offsetWidth-M.clientWidth:N.offsetX>M.clientWidth),Be=ke&&N.offsetY>M.clientHeight;if(Ce||Be)return}const J=(F=a.current.floatingContext)==null?void 0:F.nodeId,Se=y&&xt(y.nodesRef.current,J).some(fe=>{var le;return jt(N,(le=fe.context)==null?void 0:le.elements.floating)});if(jt(N,s.floating)||jt(N,s.domReference)||Se)return;const ve=y?xt(y.nodesRef.current,J):[];if(ve.length>0){let fe=!0;if(ve.forEach(le=>{var X;if((X=le.context)!=null&&X.open&&!le.context.dataRef.current.__outsidePressBubbles){fe=!1;return}}),!fe)return}n(!1,N,"outside-press")}),S=Ke(N=>{var F;const q=()=>{var D;$(N),(D=un(N))==null||D.removeEventListener(l,q)};(F=un(N))==null||F.addEventListener(l,q)});c.useEffect(()=>{if(!t||!i)return;a.current.__escapeKeyBubbles=A,a.current.__outsidePressBubbles=k;let N=-1;function F(Y){n(!1,Y,"ancestor-scroll")}function q(){window.clearTimeout(N),C.current=!0}function D(){N=window.setTimeout(()=>{C.current=!1},vt()?5:0)}const M=en(s.floating);o&&(M.addEventListener("keydown",P?K:B,P),M.addEventListener("compositionstart",q),M.addEventListener("compositionend",D)),w&&M.addEventListener(l,j?S:$,j);let H=[];return p&&(re(s.domReference)&&(H=We(s.domReference)),re(s.floating)&&(H=H.concat(We(s.floating))),!re(s.reference)&&s.reference&&s.reference.contextElement&&(H=H.concat(We(s.reference.contextElement)))),H=H.filter(Y=>{var W;return Y!==((W=M.defaultView)==null?void 0:W.visualViewport)}),H.forEach(Y=>{Y.addEventListener("scroll",F,{passive:!0})}),()=>{o&&(M.removeEventListener("keydown",P?K:B,P),M.removeEventListener("compositionstart",q),M.removeEventListener("compositionend",D)),w&&M.removeEventListener(l,j?S:$,j),H.forEach(Y=>{Y.removeEventListener("scroll",F)}),window.clearTimeout(N)}},[a,s,o,w,l,t,n,p,i,A,k,B,P,K,$,j,S]),c.useEffect(()=>{h.current=!1},[w,l]);const R=c.useMemo(()=>({onKeyDown:B,...u&&{[td[f]]:N=>{n(!1,N.nativeEvent,"reference-press")},...f!=="click"&&{onClick(N){n(!1,N.nativeEvent,"reference-press")}}}}),[B,n,u,f]),I=c.useMemo(()=>({onKeyDown:B,onMouseDown(){_.current=!0},onMouseUp(){_.current=!0},[rd[l]]:()=>{h.current=!0}}),[B,l]);return c.useMemo(()=>i?{reference:R,floating:I}:{},[i,R,I])}function ad(e){const{open:r=!1,onOpenChange:t,elements:n}=e,s=Jl(),a=c.useRef({}),[i]=c.useState(()=>Xl()),o=ia()!=null,[d,l]=c.useState(n.reference),u=Ke((m,v,y)=>{a.current.openEvent=m?v:void 0,i.emit("openchange",{open:m,event:v,reason:y,nested:o}),t?.(m,v,y)}),f=c.useMemo(()=>({setPositionReference:l}),[]),p=c.useMemo(()=>({reference:d||n.reference||null,floating:n.floating||null,domReference:n.reference}),[d,n.reference,n.floating]);return c.useMemo(()=>({dataRef:a,open:r,onOpenChange:u,elements:p,events:i,floatingId:s,refs:f}),[r,u,p,i,s,f])}function oa(e){e===void 0&&(e={});const{nodeId:r}=e,t=ad({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||t,s=n.elements,[a,i]=c.useState(null),[o,d]=c.useState(null),u=s?.domReference||a,f=c.useRef(null),p=pr();yn(()=>{u&&(f.current=u)},[u]);const m=yl({...e,elements:{...s,...o&&{reference:o}}}),v=c.useCallback(_=>{const A=re(_)?{getBoundingClientRect:()=>_.getBoundingClientRect(),getClientRects:()=>_.getClientRects(),contextElement:_}:_;d(A),m.refs.setReference(A)},[m.refs]),y=c.useCallback(_=>{(re(_)||_===null)&&(f.current=_,i(_)),(re(m.refs.reference.current)||m.refs.reference.current===null||_!==null&&!re(_))&&m.refs.setReference(_)},[m.refs]),b=c.useMemo(()=>({...m.refs,setReference:y,setPositionReference:v,domReference:f}),[m.refs,y,v]),w=c.useMemo(()=>({...m.elements,domReference:u}),[m.elements,u]),h=c.useMemo(()=>({...m,...n,refs:b,elements:w,nodeId:r}),[m,b,w,r,n]);return yn(()=>{n.dataRef.current.floatingContext=h;const _=p?.nodesRef.current.find(A=>A.id===r);_&&(_.context=h)}),c.useMemo(()=>({...m,context:h,refs:b,elements:w}),[m,b,w,h])}function Mt(){return Dl()&&Ml()}function id(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,events:s,dataRef:a,elements:i}=e,{enabled:o=!0,visibleOnly:d=!0}=r,l=c.useRef(!1),u=c.useRef(-1),f=c.useRef(!0);c.useEffect(()=>{if(!o)return;const m=Re(i.domReference);function v(){!t&&Ie(i.domReference)&&i.domReference===Gr(en(i.domReference))&&(l.current=!0)}function y(){f.current=!0}function b(){f.current=!1}return m.addEventListener("blur",v),Mt()&&(m.addEventListener("keydown",y,!0),m.addEventListener("pointerdown",b,!0)),()=>{m.removeEventListener("blur",v),Mt()&&(m.removeEventListener("keydown",y,!0),m.removeEventListener("pointerdown",b,!0))}},[i.domReference,t,o]),c.useEffect(()=>{if(!o)return;function m(v){let{reason:y}=v;(y==="reference-press"||y==="escape-key")&&(l.current=!0)}return s.on("openchange",m),()=>{s.off("openchange",m)}},[s,o]),c.useEffect(()=>()=>{je(u)},[]);const p=c.useMemo(()=>({onMouseLeave(){l.current=!1},onFocus(m){if(l.current)return;const v=un(m.nativeEvent);if(d&&re(v)){if(Mt()&&!m.relatedTarget){if(!f.current&&!Vl(v))return}else if(!Cl(v))return}n(!0,m.nativeEvent,"focus")},onBlur(m){l.current=!1;const v=m.relatedTarget,y=m.nativeEvent,b=re(v)&&v.hasAttribute(vr("focus-guard"))&&v.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var w;const h=Gr(i.domReference?i.domReference.ownerDocument:document);!v&&h===i.domReference||Sn((w=a.current.floatingContext)==null?void 0:w.refs.floating.current,h)||Sn(i.domReference,h)||b||n(!1,y,"focus")})}}),[a,i.domReference,n,d]);return c.useMemo(()=>o?{reference:p}:{},[o,p])}function Dt(e,r,t){const n=new Map,s=t==="item";let a=e;if(s&&e){const{[$r]:i,[Hr]:o,...d}=e;a=d}return{...t==="floating"&&{tabIndex:-1,[$l]:""},...a,...r.map(i=>{const o=i?i[t]:null;return typeof o=="function"?e?o(e):null:o}).concat(e).reduce((i,o)=>(o&&Object.entries(o).forEach(d=>{let[l,u]=d;if(!(s&&[$r,Hr].includes(l)))if(l.indexOf("on")===0){if(n.has(l)||n.set(l,[]),typeof u=="function"){var f;(f=n.get(l))==null||f.push(u),i[l]=function(){for(var p,m=arguments.length,v=new Array(m),y=0;y<m;y++)v[y]=arguments[y];return(p=n.get(l))==null?void 0:p.map(b=>b(...v)).find(b=>b!==void 0)}}}else i[l]=u}),i),{})}}function od(e){e===void 0&&(e=[]);const r=e.map(o=>o?.reference),t=e.map(o=>o?.floating),n=e.map(o=>o?.item),s=c.useCallback(o=>Dt(o,e,"reference"),r),a=c.useCallback(o=>Dt(o,e,"floating"),t),i=c.useCallback(o=>Dt(o,e,"item"),n);return c.useMemo(()=>({getReferenceProps:s,getFloatingProps:a,getItemProps:i}),[s,a,i])}function ld(e,r,t){t===void 0&&(t=!0);let n=e.filter(a=>{var i;return a.parentId===r&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=t?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var d;return a.parentId===o.id&&((d=a.context)==null?void 0:d.open)})}):e,n=n.concat(s);return n}function Xr(e,r){const[t,n]=e;let s=!1;const a=r.length;for(let i=0,o=a-1;i<a;o=i++){const[d,l]=r[i]||[0,0],[u,f]=r[o]||[0,0];l>=n!=f>=n&&t<=(u-d)*(n-l)/(f-l)+d&&(s=!s)}return s}function dd(e,r){return e[0]>=r.x&&e[0]<=r.x+r.width&&e[1]>=r.y&&e[1]<=r.y+r.height}function ud(e){e===void 0&&(e={});const{buffer:r=.5,blockPointerEvents:t=!1,requireIntent:n=!0}=e;let s,a=!1,i=null,o=null,d=performance.now();function l(f,p){const m=performance.now(),v=m-d;if(i===null||o===null||v===0)return i=f,o=p,d=m,null;const y=f-i,b=p-o,h=Math.sqrt(y*y+b*b)/v;return i=f,o=p,d=m,h}const u=f=>{let{x:p,y:m,placement:v,elements:y,onClose:b,nodeId:w,tree:h}=f;return function(A){function k(){clearTimeout(s),b()}if(clearTimeout(s),!y.domReference||!y.floating||v==null||p==null||m==null)return;const{clientX:P,clientY:j}=A,C=[P,j],B=nd(A),K=A.type==="mouseleave",$=St(y.floating,B),S=St(y.domReference,B),R=y.domReference.getBoundingClientRect(),I=y.floating.getBoundingClientRect(),N=v.split("-")[0],F=p>I.right-I.width/2,q=m>I.bottom-I.height/2,D=dd(C,R),M=I.width>R.width,H=I.height>R.height,Y=(M?R:I).left,W=(M?R:I).right,J=(H?R:I).top,Se=(H?R:I).bottom;if($&&(a=!0,!K))return;if(S&&(a=!1),S&&!K){a=!0;return}if(K&&re(A.relatedTarget)&&St(y.floating,A.relatedTarget)||h&&ld(h.nodesRef.current,w).some(le=>{let{context:X}=le;return X?.open}))return;if(N==="top"&&m>=R.bottom-1||N==="bottom"&&m<=R.top+1||N==="left"&&p>=R.right-1||N==="right"&&p<=R.left+1)return k();let ve=[];switch(N){case"top":ve=[[Y,R.top+1],[Y,I.bottom-1],[W,I.bottom-1],[W,R.top+1]];break;case"bottom":ve=[[Y,I.top+1],[Y,R.bottom-1],[W,R.bottom-1],[W,I.top+1]];break;case"left":ve=[[I.right-1,Se],[I.right-1,J],[R.left+1,J],[R.left+1,Se]];break;case"right":ve=[[R.right-1,Se],[R.right-1,J],[I.left+1,J],[I.left+1,Se]];break}function fe(le){let[X,se]=le;switch(N){case"top":{const ye=[M?X+r/2:F?X+r*4:X-r*4,se+r+1],ke=[M?X-r/2:F?X+r*4:X-r*4,se+r+1],be=[[I.left,F||M?I.bottom-r:I.top],[I.right,F?M?I.bottom-r:I.top:I.bottom-r]];return[ye,ke,...be]}case"bottom":{const ye=[M?X+r/2:F?X+r*4:X-r*4,se-r],ke=[M?X-r/2:F?X+r*4:X-r*4,se-r],be=[[I.left,F||M?I.top+r:I.bottom],[I.right,F?M?I.top+r:I.bottom:I.top+r]];return[ye,ke,...be]}case"left":{const ye=[X+r+1,H?se+r/2:q?se+r*4:se-r*4],ke=[X+r+1,H?se-r/2:q?se+r*4:se-r*4];return[...[[q||H?I.right-r:I.left,I.top],[q?H?I.right-r:I.left:I.right-r,I.bottom]],ye,ke]}case"right":{const ye=[X-r,H?se+r/2:q?se+r*4:se-r*4],ke=[X-r,H?se-r/2:q?se+r*4:se-r*4],be=[[q||H?I.left+r:I.right,I.top],[q?H?I.left+r:I.right:I.left+r,I.bottom]];return[ye,ke,...be]}}}if(!Xr([P,j],ve)){if(a&&!D)return k();if(!K&&n){const le=l(A.clientX,A.clientY);if(le!==null&&le<.1)return k()}Xr([P,j],fe([p,m]))?!a&&n&&(s=window.setTimeout(k,40)):k()}}};return u.__options={blockPointerEvents:t},u}const yr=()=>{const{cn:e}=oe();return E.createElement(Ls,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},cd=()=>{const{cn:e}=oe();return E.createElement(Ls,{title:kt("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},ot=c.createContext(null),bt=(e,r)=>{var t,n,s;const{size:a,error:i,errorId:o}=e,d=c.useContext(ot),l=rn(),u=(t=e.id)!==null&&t!==void 0?t:`${r}-${l}`,f=o??`${r}-error-${l}`,p=`${r}-description-${l}`,m=d?.disabled||e.disabled,v=(d?.readOnly||e.readOnly)&&!m||void 0,y=!m&&!v&&!!(i||d?.error),b=!m&&!v&&!!i&&typeof i!="boolean",w=Object.assign({},y?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:b,hasError:y,errorId:f,inputDescriptionId:p,size:(n=a??d?.size)!==null&&n!==void 0?n:"medium",readOnly:v,inputProps:Object.assign(Object.assign({id:u},w),{"aria-describedby":Mn(e["aria-describedby"],{[p]:!!e?.description&&typeof e?.description=="string",[f]:b,[(s=d?.errorId)!==null&&s!==void 0?s:""]:y&&!!d?.error})||void 0,disabled:m})}},[Rc,fd]=ft();var md=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const[wc,la]=ft({errorMessage:"useDateInputContext must be used with DateInputContext"}),da=c.forwardRef((e,r)=>{const{className:t,hideLabel:n=!1,label:s,description:a,variant:i="datepicker",setAnchorRef:o}=e,d=md(e,["className","hideLabel","label","description","variant","setAnchorRef"]),l=c.useRef(null),u=fd().translate,{cn:f}=oe(),p=i==="datepicker",m={prefix:p?"datepicker-input":"monthpicker-input",iconTitle:{open:p?"openDatePicker":"openMonthPicker",close:p?"closeDatePicker":"closeMonthPicker"}},v=la(),{inputProps:y,size:b="medium",inputDescriptionId:w,errorId:h,showErrorMsg:_,hasError:A,readOnly:k}=bt(e,m.prefix);return E.createElement("div",{className:f(t,"navds-form-field",`navds-form-field--${b}`,"navds-date__field",{"navds-text-field--error":A,"navds-date__field--error":A,"navds-form-field--disabled":!!y.disabled,"navds-text-field--disabled":!!y.disabled,"navds-form-field--readonly":k,"navds-text-field--readonly":k,"navds-date__field--readonly":k})},E.createElement(me,{htmlFor:y.id,size:b,className:f("navds-form-field__label",{"navds-sr-only":n})},k&&E.createElement(yr,null),s),!!a&&E.createElement(ne,{as:"div",className:f("navds-form-field__description",{"navds-sr-only":n}),id:w,size:b},a),E.createElement("div",{className:f("navds-date__field-wrapper")},E.createElement("input",Object.assign({ref:r},qe(d,["error","errorId","size"]),y,{autoComplete:"off","aria-controls":v?.open?v.ariaId:void 0,readOnly:k,className:f("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${b}`),size:p?11:14})),E.createElement("button",{disabled:y.disabled||k,tabIndex:k||v?.open?-1:0,onClick:()=>{v?.onOpen(),o?.(l.current)},type:"button",className:f("navds-date__field-button"),ref:l},E.createElement(vi,{title:u(m.iconTitle[v?.open?"close":"open"])}))),E.createElement("div",{className:f("navds-form-field__error"),id:h,"aria-relevant":"additions removals","aria-live":"polite"},_&&E.createElement(lr,{size:b,showIcon:!0},e.error)))});c.forwardRef((e,r)=>E.createElement(da,Object.assign({},e,{ref:r})));c.forwardRef((e,r)=>E.createElement(da,Object.assign({},e,{variant:"monthpicker",ref:r})));var gd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const pd=c.forwardRef((e,r)=>{var{className:t}=e,n=gd(e,["className"]);const{cn:s}=oe();return E.createElement("div",Object.assign({},n,{ref:r,className:s("navds-popover__content",t)}))});var vd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Qt=c.forwardRef((e,r)=>{var{className:t,children:n,anchorEl:s,arrow:a=!0,open:i,onClose:o,placement:d="top",offset:l,strategy:u,flip:f=!0}=e,p=vd(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:m}=oe(),v=c.useRef(null),y=Cs(!1)!==void 0,b=la(!1),w=u??(y?"fixed":"absolute"),h=b?!1:f,_=Dn(!1),{update:A,refs:k,placement:P,middlewareData:{arrow:{x:j,y:C}={}},floatingStyles:B}=oa({strategy:w,placement:d,open:i,middleware:[ta(l??(_?8:a?16:4)),h&&sa({padding:5,fallbackPlacements:["bottom","top"]}),ra({padding:12}),aa({element:v,padding:8})]});gn(()=>{k.setReference(s)},[s]);const K=mt(k.setFloating,r);gn(()=>{if(!k.reference.current||!k.floating.current||!i)return;const S=Xt(k.reference.current,k.floating.current,A);return()=>S()},[k.floating,k.reference,A,i,s]);const $={top:"bottom",right:"left",bottom:"top",left:"right"}[P.split("-")[0]];return E.createElement(Do,{asChild:!0,safeZone:{anchor:s,dismissable:k.floating.current},onDismiss:()=>i&&o?.(),enabled:i},E.createElement("div",Object.assign({ref:K},p,{className:m("navds-popover",t,{"navds-popover--hidden":!i||!s}),style:Object.assign(Object.assign({},p.style),B),"data-placement":P,"aria-hidden":!i||!s}),n,a&&!_&&E.createElement("div",{ref:S=>{v.current=S},style:Object.assign(Object.assign(Object.assign({},j!=null?{left:j}:{}),C!=null?{top:C}:{}),$?{[$]:"-0.5rem"}:{}),className:m("navds-popover__arrow")})))});Qt.Content=pd;function ge(e,r,t,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([s,a])=>[`--__${e}c-${r}-${t}-${s}`,a])):{}}const yd={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Zr=(e,r,t,n,s,a)=>r.split(" ").map((i,o,d)=>{var l;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let u=`var(--${a}-${t}-${i})`;if(n.includes(i))u=i==="px"?"1px":i;else if(i.startsWith("space"))u=`var(--${a}-${i})`;else{const f=`--${a}-spacing-${i}`;u=`var(${(l=yd[f])!==null&&l!==void 0?l:f})`}return s?i==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function xe(e,r,t,n,s,a=!1,i=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${r}-${t}-xs`]:Zr(t,s,n,i,a,e)};const o={};return Object.entries(s).forEach(([d,l])=>{o[`--__${e}c-${r}-${t}-${d}`]=Zr(t,l,n,i,a,e)}),o}const kd=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],bd=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:s,margin:a,marginInline:i,marginBlock:o,width:d,minWidth:l,maxWidth:u,height:f,minHeight:p,maxHeight:m,position:v,inset:y,top:b,right:w,left:h,bottom:_,overflow:A,overflowX:k,overflowY:P,flexBasis:j,flexGrow:C,flexShrink:B,gridColumn:K})=>{const $=Dn(!1),{cn:S}=oe(),R=$?"ax":"a",I=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},xe(R,"r","p","spacing",t)),xe(R,"r","pi","spacing",n)),xe(R,"r","pb","spacing",s)),xe(R,"r","m","spacing",a)),xe(R,"r","mi","spacing",i)),xe(R,"r","mb","spacing",o)),ge(R,"r","w",d)),ge(R,"r","minw",l)),ge(R,"r","maxw",u)),ge(R,"r","h",f)),ge(R,"r","minh",p)),ge(R,"r","maxh",m)),ge(R,"r","position",v)),xe(R,"r","inset","spacing",y)),xe(R,"r","top","spacing",b)),xe(R,"r","right","spacing",w)),xe(R,"r","bottom","spacing",_)),xe(R,"r","left","spacing",h)),ge(R,"r","overflow",A)),ge(R,"r","overflowx",k)),ge(R,"r","overflowy",P)),ge(R,"r","flex-basis",j)),ge(R,"r","flex-grow",C)),ge(R,"r","flex-shrink",B)),ge(R,"r","grid-column",K));return E.createElement(Fn,{className:S({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":s,"navds-r-m":a,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":d,"navds-r-minw":l,"navds-r-maxw":u,"navds-r-h":f,"navds-r-minh":p,"navds-r-maxh":m,"navds-r-position":v,"navds-r-inset":y,"navds-r-top":b,"navds-r-right":w,"navds-r-bottom":_,"navds-r-left":h,"navds-r-overflow":A,"navds-r-overflowx":k,"navds-r-overflowy":P,"navds-r-flex-basis":j,"navds-r-flex-grow":C,"navds-r-flex-shrink":B,"navds-r-grid-column":K}),style:I},e)};var hd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ua=c.forwardRef((e,r)=>{var{children:t,className:n,as:s="div",align:a,justify:i,wrap:o=!0,gap:d,style:l,direction:u="row",asChild:f}=e,p=hd(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const v=Dn(!1)?"ax":"a",{cn:y}=oe(),b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},l),xe(v,"stack","gap","spacing",d)),ge(v,"stack","direction",u)),ge(v,"stack","align",a)),ge(v,"stack","justify",i)),w=f?Fn:s;return E.createElement(bd,Object.assign({},p),E.createElement(w,Object.assign({},qe(p,kd),{ref:r,style:b,className:y("navds-stack",n,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":d,"navds-stack-align":a,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":o})}),t))});var Ed=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const pe=c.forwardRef((e,r)=>{var{as:t="div"}=e,n=Ed(e,["as"]);return E.createElement(ua,Object.assign({as:t},n,{ref:r,direction:"row"}))});var Od=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Le=c.forwardRef((e,r)=>{var{as:t="div"}=e,n=Od(e,["as"]);return E.createElement(ua,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))});var Rd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ca=c.forwardRef((e,r)=>{var{as:t="a",className:n,underline:s=!0,variant:a,inlineText:i=!1,"data-color":o}=e,d=Rd(e,["as","className","underline","variant","inlineText","data-color"]);const l=Dn(!1),{cn:u}=oe();let f;return l?f=a:f=a??"action",E.createElement(t,Object.assign({"data-color":o??wd(f),"data-variant":f},d,{ref:r,className:u("navds-link",n,{[`navds-link--${f}`]:f,"navds-link--remove-underline":!s,"navds-link--inline-text":i})}))});function wd(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var Ad=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Td=c.forwardRef((e,r)=>{var{children:t,className:n,variant:s,size:a="medium",icon:i,"data-color":o}=e,d=Ad(e,["children","className","variant","size","icon","data-color"]);const{cn:l}=oe(),u=s?.endsWith("-filled")&&"strong",f=s?.endsWith("-moderate")&&"moderate";return E.createElement(ne,Object.assign({"data-color":o??Id(s),"data-variant":u||f||"outline"},d,{ref:r,as:"span",size:a==="medium"?"medium":"small",className:l("navds-tag",n,`navds-tag--${s}`,`navds-tag--${a}`)}),i&&E.createElement("span",{className:l("navds-tag__icon--left")},i),t)});function Id(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var _d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const fa=c.forwardRef((e,r)=>{var{children:t,className:n,arrow:s=!0,placement:a="top",open:i,defaultOpen:o=!1,onOpenChange:d,offset:l,content:u,delay:f=150,id:p,keys:m,maxChar:v=80,describesChild:y=!1}=e,b=_d(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:w}=oe(),[h,_]=mi({defaultValue:o,value:i,onChange:d}),A=c.useRef(null),k=Cs(!1),P=k?k.ref.current:void 0,{x:j,y:C,strategy:B,context:K,placement:$,middlewareData:{arrow:{x:S,y:R}={},hide:{referenceHidden:I}={}},refs:N}=oa({placement:a,open:h,onOpenChange:Y=>_(Y),middleware:[ta(l??(s?8:4)),ra(),sa({padding:5,fallbackPlacements:["bottom","top"]}),aa({element:A,padding:5})],whileElementsMounted:k?(Y,W,J)=>Xt(Y,W,J,{animationFrame:!0}):Xt,strategy:k?"fixed":void 0}),{getReferenceProps:F,getFloatingProps:q}=od([ed(K,{handleClose:ud(),restMs:f}),id(K),sd(K)]),D=rn(p),M=mt(r,N.setFloating);if(!t||t?.type===E.Fragment||t===E.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;u?.length>v&&h&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const H=y?h?{"aria-describedby":D}:{title:u}:{"aria-label":u};return E.createElement(E.Fragment,null,E.createElement(Fn,Object.assign({ref:N.setReference},F(),H,{"aria-keyshortcuts":m?m.join("+"):void 0}),t),E.createElement(Ro,{rootElement:P,asChild:!0},h&&E.createElement("div",Object.assign({},q(Object.assign(Object.assign({},b),{ref:M,style:{position:B,top:C??0,left:j??0,visibility:I?"hidden":"visible"},role:"tooltip",id:D,className:w("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":$,"data-state":"open"}),u,m&&E.createElement("span",{className:w("navds-tooltip__keys"),"aria-hidden":!0},m.map(Y=>E.createElement(nt,{as:"kbd",key:Y,className:w("navds-tooltip__key")},Y))),s&&E.createElement("div",{ref:Y=>{A.current=Y},className:w("navds-tooltip__arrow"),style:{left:S!=null?`${S}px`:"",top:R!=null?`${R}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[$]]:"-3.5px"}}))))}),jd=e=>{const r=bt(e,"fieldset"),{inputProps:t}=r;return Object.assign(Object.assign({},r),{inputProps:{"aria-invalid":t["aria-invalid"],"aria-describedby":t["aria-describedby"]}})};var xd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Pd=c.forwardRef((e,r)=>{var t,n,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:d,size:l,readOnly:u,inputDescriptionId:f}=jd(e),{cn:p}=oe(),m=c.useContext(ot),{children:v,className:y,errorPropagation:b=!0,legend:w,description:h,hideLegend:_,nativeReadOnly:A=!0}=e,k=xd(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return E.createElement(ot.Provider,{value:{error:b?(t=e.error)!==null&&t!==void 0?t:m?.error:void 0,errorId:Mn({[i]:o,[(n=m?.errorId)!==null&&n!==void 0?n:""]:!!m?.error}),size:l,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:u}},E.createElement("fieldset",Object.assign({},qe(k,["errorId","error","size","readOnly"]),qe(a,["aria-describedby","aria-invalid"]),{ref:r,className:p(y,"navds-fieldset",`navds-fieldset--${l}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":u})}),E.createElement(me,{size:l,as:"legend",className:p("navds-fieldset__legend",{"navds-sr-only":!!_})},u&&(A?E.createElement(yr,null):E.createElement(cd,null)),w),!!h&&E.createElement(ne,{className:p("navds-fieldset__description",{"navds-sr-only":!!_}),id:f,size:l??"medium",as:"div"},e.description),v,E.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:p("navds-fieldset__error")},o&&E.createElement(lr,{size:l,showIcon:!0},e.error))))});var Nd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ma=E.createContext(null),Sd=c.forwardRef((e,r)=>{var t,n,{children:s,className:a,name:i,defaultValue:o,value:d,onChange:l=()=>{},required:u,readOnly:f}=e,p=Nd(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:m}=oe(),v=c.useContext(ot),y=rn();return E.createElement(Pd,Object.assign({},p,{readOnly:f,ref:r,className:m(a,"navds-radio-group",`navds-radio-group--${(n=(t=p.size)!==null&&t!==void 0?t:v?.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),E.createElement(ma.Provider,{value:{name:i??`radioGroupName-${y}`,defaultValue:o,value:d,onChange:l,required:u}},E.createElement("div",{className:m("navds-radio-buttons")},s)))});var Md=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Dd=e=>{const r=c.useContext(ma),t=bt(qe(e,["description"]),"radio"),{inputProps:n,readOnly:s}=t,a=Md(t,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},a),{readOnly:s,inputProps:Object.assign(Object.assign({},n),{name:r?.name,defaultChecked:r?.defaultValue===void 0?void 0:r?.defaultValue===e.value,checked:r?.value===void 0?void 0:r?.value===e.value,onChange:i=>{var o,d;s||((o=e.onChange)===null||o===void 0||o.call(e,i),(d=r?.onChange)===null||d===void 0||d.call(r,e.value))},onClick:i=>{var o;if(s){i.preventDefault();return}(o=e?.onClick)===null||o===void 0||o.call(e,i)},required:r?.required,type:"radio"})})},Qr=c.forwardRef((e,r)=>{const{cn:t}=oe(),{inputProps:n,size:s,hasError:a,readOnly:i}=Dd(e),o=rn(),d=rn();return E.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${s}`,{"navds-radio--error":a,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":a?"danger":e["data-color"]},E.createElement("input",Object.assign({},qe(e,["children","size","description","readOnly"]),qe(n,["aria-invalid"]),{"aria-labelledby":Mn(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[d]:e.description}),className:t("navds-radio__input"),ref:r})),E.createElement("label",{htmlFor:n.id,className:t("navds-radio__label")},E.createElement("span",{className:t("navds-radio__content")},E.createElement(ne,{as:"span",id:o,size:s,"aria-hidden":!0},e.children),e.description&&E.createElement(ne,{as:"span",id:d,size:s,className:t("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var Fd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const es=(e,r,t)=>{const{outerHeightStyle:n,overflow:s}=r;return t.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==s)?(t.current+=1,r):e},ns=e=>(e?.ownerDocument||document).defaultView||window;function zn(e){return parseInt(e,10)||0}const qd=c.forwardRef((e,r)=>{var t,n,{className:s,onChange:a,maxRows:i,minRows:o=1,autoScrollbar:d,style:l,value:u}=e,f=Fd(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:p}=c.useRef(u!=null),m=c.useRef(null),v=mt(m,r),y=c.useRef(null),b=c.useRef(0),[w,h]=c.useState({outerHeightStyle:0}),_=E.useCallback(()=>{const j=m.current,B=ns(j).getComputedStyle(j);if(B.width==="0px")return{outerHeightStyle:0};const K=y.current;K.style.width=B.width,K.value=j.value||f.placeholder||"x",K.value.slice(-1)===`
`&&(K.value+=" ");const $=B.boxSizing,S=zn(B.paddingBottom)+zn(B.paddingTop),R=zn(B.borderBottomWidth)+zn(B.borderTopWidth),I=K.scrollHeight-S;K.value="x";const N=K.scrollHeight-S;let F=I;o&&(F=Math.max(Number(o)*N,F)),i&&(F=Math.min(Number(i)*N,F)),F=Math.max(F,N);const q=F+($==="border-box"?S+R:0),D=Math.abs(F-I)<=1;return{outerHeightStyle:q,overflow:D}},[i,o,f.placeholder]),A=()=>{const j=_();ts(j)||h(C=>es(C,j,b))};gn(()=>{const j=()=>{const S=_();ts(S)||et.flushSync(()=>{h(R=>es(R,S,b))})},C=Fs(()=>{var S,R,I;if(b.current=0,!((S=m.current)===null||S===void 0)&&S.style.height||!((R=m.current)===null||R===void 0)&&R.style.width){((I=m.current)===null||I===void 0?void 0:I.style.overflow)==="hidden"&&h(N=>Object.assign(Object.assign({},N),{overflow:!1}));return}j()},166,!0),B=m.current,K=ns(B);K.addEventListener("resize",C);let $;return typeof ResizeObserver<"u"&&($=new ResizeObserver(C),$.observe(B)),()=>{C.clear(),K.removeEventListener("resize",C),$&&$.disconnect()}},[_]),gn(()=>{A()}),c.useEffect(()=>{b.current=0},[u]);const k=j=>{b.current=0,p||A(),a&&a(j)},P=Object.assign({"--__ac-textarea-height":w.outerHeightStyle+"px","--__axc-textarea-height":w.outerHeightStyle+"px",overflow:w.overflow&&!d&&!(!((t=m.current)===null||t===void 0)&&t.style.height)&&!(!((n=m.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},l);return E.createElement(E.Fragment,null,E.createElement("textarea",Object.assign({value:u,onChange:k,ref:v,rows:o,style:P},f,{className:s})),E.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:y,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},l)}))});function ts(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Ld=({maxLengthId:e,maxLength:r,currentLength:t,size:n,i18n:s})=>{const{cn:a}=oe(),i=kt("Textarea",{charsLeft:s?.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s?.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),o=r-t,[d,l]=c.useState(o);return c.useEffect(()=>{const u=Fs(()=>{l(o)},2e3);return u(),()=>{u.clear()}},[o]),E.createElement(E.Fragment,null,E.createElement("span",{id:e,className:a("navds-sr-only")},i("maxLength",{maxLength:r})),o<20&&E.createElement("span",{role:"status",className:a("navds-textarea__sr-counter navds-sr-only")},rs(d,i)),E.createElement(ne,{className:a("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:n},rs(o,i)))},rs=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var Vd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Cd=c.forwardRef((e,r)=>{var t,n,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:d,size:l,inputDescriptionId:u}=bt(e,"textarea"),{label:f,className:p,description:m,maxLength:v,hideLabel:y=!1,resize:b,UNSAFE_autoScrollbar:w,i18n:h,readOnly:_}=e,A=Vd(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:k}=oe(),P=rn(),j=v!==void 0&&v>0,[C,B]=c.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),K=()=>{let S=A?.minRows?A?.minRows:3;return l==="small"&&(S=A?.minRows?A?.minRows:2),S},$=Mn(a["aria-describedby"],{[P??""]:j});return E.createElement("div",{className:k(p,"navds-form-field",`navds-form-field--${l}`,{"navds-form-field--disabled":!!a.disabled,"navds-form-field--readonly":_,"navds-textarea--readonly":_,"navds-textarea--error":d,"navds-textarea--autoscrollbar":w,[`navds-textarea--resize-${b===!0?"both":b}`]:b})},E.createElement(me,{htmlFor:a.id,size:l,className:k("navds-form-field__label",{"navds-sr-only":y})},_&&E.createElement(yr,null),f),!!m&&E.createElement(ne,{className:k("navds-form-field__description",{"navds-sr-only":y}),id:u,size:l,as:"div"},m),E.createElement(qd,Object.assign({},qe(A,["error","errorId","size"]),a,{onChange:Vs(e.onChange,e.value===void 0?S=>B(S.target.value):void 0),minRows:K(),autoScrollbar:w,ref:r,readOnly:_,className:k("navds-textarea__input","navds-body-short",`navds-body-short--${l??"medium"}`)},$?{"aria-describedby":$}:{})),j&&!_&&!a.disabled&&E.createElement(Ld,{maxLengthId:P,maxLength:v,currentLength:(s=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:C.length,size:l,i18n:h}),E.createElement("div",{className:k("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&E.createElement(lr,{size:l,showIcon:!0},e.error)))});var Je=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Je||{}),Bn=e=>e.type==="checkbox",nn=e=>e instanceof Date,Ee=e=>e==null;const ga=e=>typeof e=="object";var ce=e=>!Ee(e)&&!Array.isArray(e)&&ga(e)&&!nn(e),pa=e=>ce(e)&&e.target?Bn(e.target)?e.target.checked:e.target.value:e,Bd=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,va=(e,r)=>e.has(Bd(r)),Ud=e=>{const r=e.constructor&&e.constructor.prototype;return ce(r)&&r.hasOwnProperty("isPrototypeOf")},kr=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ae(e){let r;const t=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(kr&&(e instanceof Blob||n))&&(t||ce(e)))if(r=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!Ud(e))r=e;else for(const s in e)e.hasOwnProperty(s)&&(r[s]=ae(e[s]));else return e;return r}var ht=e=>/^\w*$/.test(e),ie=e=>e===void 0,Et=e=>Array.isArray(e)?e.filter(Boolean):[],br=e=>Et(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,r,t)=>{if(!r||!ce(e))return t;const n=(ht(r)?[r]:br(r)).reduce((s,a)=>Ee(s)?s:s[a],e);return ie(n)||n===e?ie(e[r])?t:e[r]:n},Ae=e=>typeof e=="boolean",ee=(e,r,t)=>{let n=-1;const s=ht(r)?[r]:br(r),a=s.length,i=a-1;for(;++n<a;){const o=s[n];let d=t;if(n!==i){const l=e[o];d=ce(l)||Array.isArray(l)?l:isNaN(+s[n+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=d,e=e[o]}};const lt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Pe={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ue={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},hr=E.createContext(null);hr.displayName="HookFormContext";const Ze=()=>E.useContext(hr),Kd=e=>{const{children:r,...t}=e;return E.createElement(hr.Provider,{value:t},r)};var ya=(e,r,t,n=!0)=>{const s={defaultValues:r._defaultValues};for(const a in e)Object.defineProperty(s,a,{get:()=>{const i=a;return r._proxyFormState[i]!==Pe.all&&(r._proxyFormState[i]=!n||Pe.all),t&&(t[i]=!0),e[i]}});return s};const Ot=typeof window<"u"?E.useLayoutEffect:E.useEffect;function Gd(e){const r=Ze(),{control:t=r.control,disabled:n,name:s,exact:a}=e||{},[i,o]=E.useState(t._formState),d=E.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Ot(()=>t._subscribe({name:s,formState:d.current,exact:a,callback:l=>{!n&&o({...t._formState,...l})}}),[s,n,a]),E.useEffect(()=>{d.current.isValid&&t._setValid(!0)},[t]),E.useMemo(()=>ya(i,t,d.current,!1),[i,t])}var De=e=>typeof e=="string",ka=(e,r,t,n,s)=>De(e)?(n&&r.watch.add(e),V(t,e,s)):Array.isArray(e)?e.map(a=>(n&&r.watch.add(a),V(t,a))):(n&&(r.watchAll=!0),t),er=e=>Ee(e)||!ga(e);function Ge(e,r,t=new WeakSet){if(er(e)||er(r))return e===r;if(nn(e)&&nn(r))return e.getTime()===r.getTime();const n=Object.keys(e),s=Object.keys(r);if(n.length!==s.length)return!1;if(t.has(e)||t.has(r))return!0;t.add(e),t.add(r);for(const a of n){const i=e[a];if(!s.includes(a))return!1;if(a!=="ref"){const o=r[a];if(nn(i)&&nn(o)||ce(i)&&ce(o)||Array.isArray(i)&&Array.isArray(o)?!Ge(i,o,t):i!==o)return!1}}return!0}function $d(e){const r=Ze(),{control:t=r.control,name:n,defaultValue:s,disabled:a,exact:i,compute:o}=e||{},d=E.useRef(s),l=E.useRef(o),u=E.useRef(void 0);l.current=o;const f=E.useMemo(()=>t._getWatch(n,d.current),[t,n]),[p,m]=E.useState(l.current?l.current(f):f);return Ot(()=>t._subscribe({name:n,formState:{values:!0},exact:i,callback:v=>{if(!a){const y=ka(n,t._names,v.values||t._formValues,!1,d.current);if(l.current){const b=l.current(y);Ge(b,u.current)||(m(b),u.current=b)}else m(y)}}}),[t,a,n,i]),E.useEffect(()=>t._removeUnmounted()),p}function ba(e){const r=Ze(),{name:t,disabled:n,control:s=r.control,shouldUnregister:a,defaultValue:i}=e,o=va(s._names.array,t),d=E.useMemo(()=>V(s._formValues,t,V(s._defaultValues,t,i)),[s,t,i]),l=$d({control:s,name:t,defaultValue:d,exact:!0}),u=Gd({control:s,name:t,exact:!0}),f=E.useRef(e),p=E.useRef(s.register(t,{...e.rules,value:l,...Ae(e.disabled)?{disabled:e.disabled}:{}}));f.current=e;const m=E.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!V(u.errors,t)},isDirty:{enumerable:!0,get:()=>!!V(u.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!V(u.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!V(u.validatingFields,t)},error:{enumerable:!0,get:()=>V(u.errors,t)}}),[u,t]),v=E.useCallback(h=>p.current.onChange({target:{value:pa(h),name:t},type:lt.CHANGE}),[t]),y=E.useCallback(()=>p.current.onBlur({target:{value:V(s._formValues,t),name:t},type:lt.BLUR}),[t,s._formValues]),b=E.useCallback(h=>{const _=V(s._fields,t);_&&h&&(_._f.ref={focus:()=>h.focus&&h.focus(),select:()=>h.select&&h.select(),setCustomValidity:A=>h.setCustomValidity(A),reportValidity:()=>h.reportValidity()})},[s._fields,t]),w=E.useMemo(()=>({name:t,value:l,...Ae(n)||u.disabled?{disabled:u.disabled||n}:{},onChange:v,onBlur:y,ref:b}),[t,n,u.disabled,v,y,b,l]);return E.useEffect(()=>{const h=s._options.shouldUnregister||a;s.register(t,{...f.current.rules,...Ae(f.current.disabled)?{disabled:f.current.disabled}:{}});const _=(A,k)=>{const P=V(s._fields,A);P&&P._f&&(P._f.mount=k)};if(_(t,!0),h){const A=ae(V(s._options.defaultValues,t));ee(s._defaultValues,t,A),ie(V(s._formValues,t))&&ee(s._formValues,t,A)}return!o&&s.register(t),()=>{(o?h&&!s._state.action:h)?s.unregister(t):_(t,!1)}},[t,s,o,a]),E.useEffect(()=>{s._setDisabledField({disabled:n,name:t})},[n,t,s]),E.useMemo(()=>({field:w,formState:u,fieldState:m}),[w,u,m])}var Hd=(e,r,t,n,s)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:s||!0}}:{},Oe=e=>Array.isArray(e)?e:[e],ss=()=>{let e=[];return{get observers(){return e},next:s=>{for(const a of e)a.next&&a.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(a=>a!==s)}}),unsubscribe:()=>{e=[]}}},he=e=>ce(e)&&!Object.keys(e).length,Er=e=>e.type==="file",Me=e=>typeof e=="function",dt=e=>{if(!kr)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},ha=e=>e.type==="select-multiple",Or=e=>e.type==="radio",zd=e=>Or(e)||Bn(e),Ft=e=>dt(e)&&e.isConnected;function Yd(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=ie(e)?n++:e[r[n++]];return e}function Wd(e){for(const r in e)if(e.hasOwnProperty(r)&&!ie(e[r]))return!1;return!0}function ue(e,r){const t=Array.isArray(r)?r:ht(r)?[r]:br(r),n=t.length===1?e:Yd(e,t),s=t.length-1,a=t[s];return n&&delete n[a],s!==0&&(ce(n)&&he(n)||Array.isArray(n)&&Wd(n))&&ue(e,t.slice(0,-1)),e}var Ea=e=>{for(const r in e)if(Me(e[r]))return!0;return!1};function ut(e,r={}){const t=Array.isArray(e);if(ce(e)||t)for(const n in e)Array.isArray(e[n])||ce(e[n])&&!Ea(e[n])?(r[n]=Array.isArray(e[n])?[]:{},ut(e[n],r[n])):Ee(e[n])||(r[n]=!0);return r}function Oa(e,r,t){const n=Array.isArray(e);if(ce(e)||n)for(const s in e)Array.isArray(e[s])||ce(e[s])&&!Ea(e[s])?ie(r)||er(t[s])?t[s]=Array.isArray(e[s])?ut(e[s],[]):{...ut(e[s])}:Oa(e[s],Ee(r)?{}:r[s],t[s]):t[s]=!Ge(e[s],r[s]);return t}var Tn=(e,r)=>Oa(e,r,ut(r));const as={value:!1,isValid:!1},is={value:!0,isValid:!0};var Ra=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ie(e[0].attributes.value)?ie(e[0].value)||e[0].value===""?is:{value:e[0].value,isValid:!0}:is:as}return as},wa=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>ie(e)?e:r?e===""?NaN:e&&+e:t&&De(e)?new Date(e):n?n(e):e;const os={isValid:!1,value:null};var Aa=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,os):os;function ls(e){const r=e.ref;return Er(r)?r.files:Or(r)?Aa(e.refs).value:ha(r)?[...r.selectedOptions].map(({value:t})=>t):Bn(r)?Ra(e.refs).value:wa(ie(r.value)?e.ref.value:r.value,e)}var Jd=(e,r,t,n)=>{const s={};for(const a of e){const i=V(r,a);i&&ee(s,a,i._f)}return{criteriaMode:t,names:[...e],fields:s,shouldUseNativeValidation:n}},ct=e=>e instanceof RegExp,In=e=>ie(e)?e:ct(e)?e.source:ce(e)?ct(e.value)?e.value.source:e.value:e,cn=e=>({isOnSubmit:!e||e===Pe.onSubmit,isOnBlur:e===Pe.onBlur,isOnChange:e===Pe.onChange,isOnAll:e===Pe.all,isOnTouch:e===Pe.onTouched});const ds="AsyncFunction";var Xd=e=>!!e&&!!e.validate&&!!(Me(e.validate)&&e.validate.constructor.name===ds||ce(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===ds)),Zd=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),nr=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const mn=(e,r,t,n)=>{for(const s of t||Object.keys(e)){const a=V(e,s);if(a){const{_f:i,...o}=a;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],s)&&!n)return!0;if(i.ref&&r(i.ref,i.name)&&!n)return!0;if(mn(o,r))break}else if(ce(o)&&mn(o,r))break}}};function us(e,r,t){const n=V(e,t);if(n||ht(t))return{error:n,name:t};const s=t.split(".");for(;s.length;){const a=s.join("."),i=V(r,a),o=V(e,a);if(i&&!Array.isArray(i)&&t!==a)return{name:t};if(o&&o.type)return{name:a,error:o};if(o&&o.root&&o.root.type)return{name:`${a}.root`,error:o.root};s.pop()}return{name:t}}var Qd=(e,r,t,n)=>{t(e);const{name:s,...a}=e;return he(a)||Object.keys(a).length>=Object.keys(r).length||Object.keys(a).find(i=>r[i]===(!n||Pe.all))},eu=(e,r,t)=>!e||!r||e===r||Oe(e).some(n=>n&&(t?n===r:n.startsWith(r)||r.startsWith(n))),nu=(e,r,t,n,s)=>s.isOnAll?!1:!t&&s.isOnTouch?!(r||e):(t?n.isOnBlur:s.isOnBlur)?!e:(t?n.isOnChange:s.isOnChange)?e:!0,tu=(e,r)=>!Et(V(e,r)).length&&ue(e,r),Ta=(e,r,t)=>{const n=Oe(V(e,t));return ee(n,"root",r[t]),ee(e,t,n),e},Qn=e=>De(e);function cs(e,r,t="validate"){if(Qn(e)||Array.isArray(e)&&e.every(Qn)||Ae(e)&&!e)return{type:t,message:Qn(e)?e:"",ref:r}}var dn=e=>ce(e)&&!ct(e)?e:{value:e,message:""},tr=async(e,r,t,n,s,a)=>{const{ref:i,refs:o,required:d,maxLength:l,minLength:u,min:f,max:p,pattern:m,validate:v,name:y,valueAsNumber:b,mount:w}=e._f,h=V(t,y);if(!w||r.has(y))return{};const _=o?o[0]:i,A=S=>{s&&_.reportValidity&&(_.setCustomValidity(Ae(S)?"":S||""),_.reportValidity())},k={},P=Or(i),j=Bn(i),C=P||j,B=(b||Er(i))&&ie(i.value)&&ie(h)||dt(i)&&i.value===""||h===""||Array.isArray(h)&&!h.length,K=Hd.bind(null,y,n,k),$=(S,R,I,N=Ue.maxLength,F=Ue.minLength)=>{const q=S?R:I;k[y]={type:S?N:F,message:q,ref:i,...K(S?N:F,q)}};if(a?!Array.isArray(h)||!h.length:d&&(!C&&(B||Ee(h))||Ae(h)&&!h||j&&!Ra(o).isValid||P&&!Aa(o).isValid)){const{value:S,message:R}=Qn(d)?{value:!!d,message:d}:dn(d);if(S&&(k[y]={type:Ue.required,message:R,ref:_,...K(Ue.required,R)},!n))return A(R),k}if(!B&&(!Ee(f)||!Ee(p))){let S,R;const I=dn(p),N=dn(f);if(!Ee(h)&&!isNaN(h)){const F=i.valueAsNumber||h&&+h;Ee(I.value)||(S=F>I.value),Ee(N.value)||(R=F<N.value)}else{const F=i.valueAsDate||new Date(h),q=H=>new Date(new Date().toDateString()+" "+H),D=i.type=="time",M=i.type=="week";De(I.value)&&h&&(S=D?q(h)>q(I.value):M?h>I.value:F>new Date(I.value)),De(N.value)&&h&&(R=D?q(h)<q(N.value):M?h<N.value:F<new Date(N.value))}if((S||R)&&($(!!S,I.message,N.message,Ue.max,Ue.min),!n))return A(k[y].message),k}if((l||u)&&!B&&(De(h)||a&&Array.isArray(h))){const S=dn(l),R=dn(u),I=!Ee(S.value)&&h.length>+S.value,N=!Ee(R.value)&&h.length<+R.value;if((I||N)&&($(I,S.message,R.message),!n))return A(k[y].message),k}if(m&&!B&&De(h)){const{value:S,message:R}=dn(m);if(ct(S)&&!h.match(S)&&(k[y]={type:Ue.pattern,message:R,ref:i,...K(Ue.pattern,R)},!n))return A(R),k}if(v){if(Me(v)){const S=await v(h,t),R=cs(S,_);if(R&&(k[y]={...R,...K(Ue.validate,R.message)},!n))return A(R.message),k}else if(ce(v)){let S={};for(const R in v){if(!he(S)&&!n)break;const I=cs(await v[R](h,t),_,R);I&&(S={...I,...K(R,I.message)},A(I.message),n&&(k[y]=S))}if(!he(S)&&(k[y]={ref:_,...S},!n))return k}}return A(!0),k};const ru={mode:Pe.onSubmit,reValidateMode:Pe.onChange,shouldFocusError:!0};function su(e={}){let r={...ru,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:Me(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},s=ce(r.defaultValues)||ce(r.values)?ae(r.defaultValues||r.values)||{}:{},a=r.shouldUnregister?{}:ae(s),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,l=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let f={...u};const p={array:ss(),state:ss()},m=r.criteriaMode===Pe.all,v=g=>O=>{clearTimeout(l),l=setTimeout(g,O)},y=async g=>{if(!r.disabled&&(u.isValid||f.isValid||g)){const O=r.resolver?he((await j()).errors):await B(n,!0);O!==t.isValid&&p.state.next({isValid:O})}},b=(g,O)=>{!r.disabled&&(u.isValidating||u.validatingFields||f.isValidating||f.validatingFields)&&((g||Array.from(o.mount)).forEach(x=>{x&&(O?ee(t.validatingFields,x,O):ue(t.validatingFields,x))}),p.state.next({validatingFields:t.validatingFields,isValidating:!he(t.validatingFields)}))},w=(g,O=[],x,G,U=!0,L=!0)=>{if(G&&x&&!r.disabled){if(i.action=!0,L&&Array.isArray(V(n,g))){const z=x(V(n,g),G.argA,G.argB);U&&ee(n,g,z)}if(L&&Array.isArray(V(t.errors,g))){const z=x(V(t.errors,g),G.argA,G.argB);U&&ee(t.errors,g,z),tu(t.errors,g)}if((u.touchedFields||f.touchedFields)&&L&&Array.isArray(V(t.touchedFields,g))){const z=x(V(t.touchedFields,g),G.argA,G.argB);U&&ee(t.touchedFields,g,z)}(u.dirtyFields||f.dirtyFields)&&(t.dirtyFields=Tn(s,a)),p.state.next({name:g,isDirty:$(g,O),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else ee(a,g,O)},h=(g,O)=>{ee(t.errors,g,O),p.state.next({errors:t.errors})},_=g=>{t.errors=g,p.state.next({errors:t.errors,isValid:!1})},A=(g,O,x,G)=>{const U=V(n,g);if(U){const L=V(a,g,ie(x)?V(s,g):x);ie(L)||G&&G.defaultChecked||O?ee(a,g,O?L:ls(U._f)):I(g,L),i.mount&&y()}},k=(g,O,x,G,U)=>{let L=!1,z=!1;const Z={name:g};if(!r.disabled){if(!x||G){(u.isDirty||f.isDirty)&&(z=t.isDirty,t.isDirty=Z.isDirty=$(),L=z!==Z.isDirty);const te=Ge(V(s,g),O);z=!!V(t.dirtyFields,g),te?ue(t.dirtyFields,g):ee(t.dirtyFields,g,!0),Z.dirtyFields=t.dirtyFields,L=L||(u.dirtyFields||f.dirtyFields)&&z!==!te}if(x){const te=V(t.touchedFields,g);te||(ee(t.touchedFields,g,x),Z.touchedFields=t.touchedFields,L=L||(u.touchedFields||f.touchedFields)&&te!==x)}L&&U&&p.state.next(Z)}return L?Z:{}},P=(g,O,x,G)=>{const U=V(t.errors,g),L=(u.isValid||f.isValid)&&Ae(O)&&t.isValid!==O;if(r.delayError&&x?(d=v(()=>h(g,x)),d(r.delayError)):(clearTimeout(l),d=null,x?ee(t.errors,g,x):ue(t.errors,g)),(x?!Ge(U,x):U)||!he(G)||L){const z={...G,...L&&Ae(O)?{isValid:O}:{},errors:t.errors,name:g};t={...t,...z},p.state.next(z)}},j=async g=>{b(g,!0);const O=await r.resolver(a,r.context,Jd(g||o.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return b(g),O},C=async g=>{const{errors:O}=await j(g);if(g)for(const x of g){const G=V(O,x);G?ee(t.errors,x,G):ue(t.errors,x)}else t.errors=O;return O},B=async(g,O,x={valid:!0})=>{for(const G in g){const U=g[G];if(U){const{_f:L,...z}=U;if(L){const Z=o.array.has(L.name),te=U._f&&Xd(U._f);te&&u.validatingFields&&b([G],!0);const _e=await tr(U,o.disabled,a,m,r.shouldUseNativeValidation&&!O,Z);if(te&&u.validatingFields&&b([G]),_e[L.name]&&(x.valid=!1,O))break;!O&&(V(_e,L.name)?Z?Ta(t.errors,_e,L.name):ee(t.errors,L.name,_e[L.name]):ue(t.errors,L.name))}!he(z)&&await B(z,O,x)}}return x.valid},K=()=>{for(const g of o.unMount){const O=V(n,g);O&&(O._f.refs?O._f.refs.every(x=>!Ft(x)):!Ft(O._f.ref))&&le(g)}o.unMount=new Set},$=(g,O)=>!r.disabled&&(g&&O&&ee(a,g,O),!Ge(H(),s)),S=(g,O,x)=>ka(g,o,{...i.mount?a:ie(O)?s:De(g)?{[g]:O}:O},x,O),R=g=>Et(V(i.mount?a:s,g,r.shouldUnregister?V(s,g,[]):[])),I=(g,O,x={})=>{const G=V(n,g);let U=O;if(G){const L=G._f;L&&(!L.disabled&&ee(a,g,wa(O,L)),U=dt(L.ref)&&Ee(O)?"":O,ha(L.ref)?[...L.ref.options].forEach(z=>z.selected=U.includes(z.value)):L.refs?Bn(L.ref)?L.refs.forEach(z=>{(!z.defaultChecked||!z.disabled)&&(Array.isArray(U)?z.checked=!!U.find(Z=>Z===z.value):z.checked=U===z.value||!!U)}):L.refs.forEach(z=>z.checked=z.value===U):Er(L.ref)?L.ref.value="":(L.ref.value=U,L.ref.type||p.state.next({name:g,values:ae(a)})))}(x.shouldDirty||x.shouldTouch)&&k(g,U,x.shouldTouch,x.shouldDirty,!0),x.shouldValidate&&M(g)},N=(g,O,x)=>{for(const G in O){if(!O.hasOwnProperty(G))return;const U=O[G],L=g+"."+G,z=V(n,L);(o.array.has(g)||ce(U)||z&&!z._f)&&!nn(U)?N(L,U,x):I(L,U,x)}},F=(g,O,x={})=>{const G=V(n,g),U=o.array.has(g),L=ae(O);ee(a,g,L),U?(p.array.next({name:g,values:ae(a)}),(u.isDirty||u.dirtyFields||f.isDirty||f.dirtyFields)&&x.shouldDirty&&p.state.next({name:g,dirtyFields:Tn(s,a),isDirty:$(g,L)})):G&&!G._f&&!Ee(L)?N(g,L,x):I(g,L,x),nr(g,o)&&p.state.next({...t,name:g}),p.state.next({name:i.mount?g:void 0,values:ae(a)})},q=async g=>{i.mount=!0;const O=g.target;let x=O.name,G=!0;const U=V(n,x),L=te=>{G=Number.isNaN(te)||nn(te)&&isNaN(te.getTime())||Ge(te,V(a,x,te))},z=cn(r.mode),Z=cn(r.reValidateMode);if(U){let te,_e;const Gn=O.type?ls(U._f):pa(g),ze=g.type===lt.BLUR||g.type===lt.FOCUS_OUT,La=!Zd(U._f)&&!r.resolver&&!V(t.errors,x)&&!U._f.deps||nu(ze,V(t.touchedFields,x),t.isSubmitted,Z,z),Rt=nr(x,o,ze);ee(a,x,Gn),ze?(!O||!O.readOnly)&&(U._f.onBlur&&U._f.onBlur(g),d&&d(0)):U._f.onChange&&U._f.onChange(g);const wt=k(x,Gn,ze),Va=!he(wt)||Rt;if(!ze&&p.state.next({name:x,type:g.type,values:ae(a)}),La)return(u.isValid||f.isValid)&&(r.mode==="onBlur"?ze&&y():ze||y()),Va&&p.state.next({name:x,...Rt?{}:wt});if(!ze&&Rt&&p.state.next({...t}),r.resolver){const{errors:wr}=await j([x]);if(L(Gn),G){const Ca=us(t.errors,n,x),Ar=us(wr,n,Ca.name||x);te=Ar.error,x=Ar.name,_e=he(wr)}}else b([x],!0),te=(await tr(U,o.disabled,a,m,r.shouldUseNativeValidation))[x],b([x]),L(Gn),G&&(te?_e=!1:(u.isValid||f.isValid)&&(_e=await B(n,!0)));G&&(U._f.deps&&M(U._f.deps),P(x,_e,te,wt))}},D=(g,O)=>{if(V(t.errors,O)&&g.focus)return g.focus(),1},M=async(g,O={})=>{let x,G;const U=Oe(g);if(r.resolver){const L=await C(ie(g)?g:U);x=he(L),G=g?!U.some(z=>V(L,z)):x}else g?(G=(await Promise.all(U.map(async L=>{const z=V(n,L);return await B(z&&z._f?{[L]:z}:z)}))).every(Boolean),!(!G&&!t.isValid)&&y()):G=x=await B(n);return p.state.next({...!De(g)||(u.isValid||f.isValid)&&x!==t.isValid?{}:{name:g},...r.resolver||!g?{isValid:x}:{},errors:t.errors}),O.shouldFocus&&!G&&mn(n,D,g?U:o.mount),G},H=g=>{const O={...i.mount?a:s};return ie(g)?O:De(g)?V(O,g):g.map(x=>V(O,x))},Y=(g,O)=>({invalid:!!V((O||t).errors,g),isDirty:!!V((O||t).dirtyFields,g),error:V((O||t).errors,g),isValidating:!!V(t.validatingFields,g),isTouched:!!V((O||t).touchedFields,g)}),W=g=>{g&&Oe(g).forEach(O=>ue(t.errors,O)),p.state.next({errors:g?t.errors:{}})},J=(g,O,x)=>{const G=(V(n,g,{_f:{}})._f||{}).ref,U=V(t.errors,g)||{},{ref:L,message:z,type:Z,...te}=U;ee(t.errors,g,{...te,...O,ref:G}),p.state.next({name:g,errors:t.errors,isValid:!1}),x&&x.shouldFocus&&G&&G.focus&&G.focus()},Se=(g,O)=>Me(g)?p.state.subscribe({next:x=>"values"in x&&g(S(void 0,O),x)}):S(g,O,!0),ve=g=>p.state.subscribe({next:O=>{eu(g.name,O.name,g.exact)&&Qd(O,g.formState||u,Rn,g.reRenderRoot)&&g.callback({values:{...a},...t,...O,defaultValues:s})}}).unsubscribe,fe=g=>(i.mount=!0,f={...f,...g.formState},ve({...g,formState:f})),le=(g,O={})=>{for(const x of g?Oe(g):o.mount)o.mount.delete(x),o.array.delete(x),O.keepValue||(ue(n,x),ue(a,x)),!O.keepError&&ue(t.errors,x),!O.keepDirty&&ue(t.dirtyFields,x),!O.keepTouched&&ue(t.touchedFields,x),!O.keepIsValidating&&ue(t.validatingFields,x),!r.shouldUnregister&&!O.keepDefaultValue&&ue(s,x);p.state.next({values:ae(a)}),p.state.next({...t,...O.keepDirty?{isDirty:$()}:{}}),!O.keepIsValid&&y()},X=({disabled:g,name:O})=>{(Ae(g)&&i.mount||g||o.disabled.has(O))&&(g?o.disabled.add(O):o.disabled.delete(O))},se=(g,O={})=>{let x=V(n,g);const G=Ae(O.disabled)||Ae(r.disabled);return ee(n,g,{...x||{},_f:{...x&&x._f?x._f:{ref:{name:g}},name:g,mount:!0,...O}}),o.mount.add(g),x?X({disabled:Ae(O.disabled)?O.disabled:r.disabled,name:g}):A(g,!0,O.value),{...G?{disabled:O.disabled||r.disabled}:{},...r.progressive?{required:!!O.required,min:In(O.min),max:In(O.max),minLength:In(O.minLength),maxLength:In(O.maxLength),pattern:In(O.pattern)}:{},name:g,onChange:q,onBlur:q,ref:U=>{if(U){se(g,O),x=V(n,g);const L=ie(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,z=zd(L),Z=x._f.refs||[];if(z?Z.find(te=>te===L):L===x._f.ref)return;ee(n,g,{_f:{...x._f,...z?{refs:[...Z.filter(Ft),L,...Array.isArray(V(s,g))?[{}]:[]],ref:{type:L.type,name:g}}:{ref:L}}}),A(g,!1,void 0,L)}else x=V(n,g,{}),x._f&&(x._f.mount=!1),(r.shouldUnregister||O.shouldUnregister)&&!(va(o.array,g)&&i.action)&&o.unMount.add(g)}}},ye=()=>r.shouldFocusError&&mn(n,D,o.mount),ke=g=>{Ae(g)&&(p.state.next({disabled:g}),mn(n,(O,x)=>{const G=V(n,x);G&&(O.disabled=G._f.disabled||g,Array.isArray(G._f.refs)&&G._f.refs.forEach(U=>{U.disabled=G._f.disabled||g}))},0,!1))},be=(g,O)=>async x=>{let G;x&&(x.preventDefault&&x.preventDefault(),x.persist&&x.persist());let U=ae(a);if(p.state.next({isSubmitting:!0}),r.resolver){const{errors:L,values:z}=await j();t.errors=L,U=ae(z)}else await B(n);if(o.disabled.size)for(const L of o.disabled)ue(U,L);if(ue(t.errors,"root"),he(t.errors)){p.state.next({errors:{}});try{await g(U,x)}catch(L){G=L}}else O&&await O({...t.errors},x),ye(),setTimeout(ye);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:he(t.errors)&&!G,submitCount:t.submitCount+1,errors:t.errors}),G)throw G},Qe=(g,O={})=>{V(n,g)&&(ie(O.defaultValue)?F(g,ae(V(s,g))):(F(g,O.defaultValue),ee(s,g,ae(O.defaultValue))),O.keepTouched||ue(t.touchedFields,g),O.keepDirty||(ue(t.dirtyFields,g),t.isDirty=O.defaultValue?$(g,ae(V(s,g))):$()),O.keepError||(ue(t.errors,g),u.isValid&&y()),p.state.next({...t}))},Ce=(g,O={})=>{const x=g?ae(g):s,G=ae(x),U=he(g),L=U?s:G;if(O.keepDefaultValues||(s=x),!O.keepValues){if(O.keepDirtyValues){const z=new Set([...o.mount,...Object.keys(Tn(s,a))]);for(const Z of Array.from(z))V(t.dirtyFields,Z)?ee(L,Z,V(a,Z)):F(Z,V(L,Z))}else{if(kr&&ie(g))for(const z of o.mount){const Z=V(n,z);if(Z&&Z._f){const te=Array.isArray(Z._f.refs)?Z._f.refs[0]:Z._f.ref;if(dt(te)){const _e=te.closest("form");if(_e){_e.reset();break}}}}if(O.keepFieldsRef)for(const z of o.mount)F(z,V(L,z));else n={}}a=r.shouldUnregister?O.keepDefaultValues?ae(s):{}:ae(L),p.array.next({values:{...L}}),p.state.next({values:{...L}})}o={mount:O.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!O.keepIsValid||!!O.keepDirtyValues,i.watch=!!r.shouldUnregister,p.state.next({submitCount:O.keepSubmitCount?t.submitCount:0,isDirty:U?!1:O.keepDirty?t.isDirty:!!(O.keepDefaultValues&&!Ge(g,s)),isSubmitted:O.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:U?{}:O.keepDirtyValues?O.keepDefaultValues&&a?Tn(s,a):t.dirtyFields:O.keepDefaultValues&&g?Tn(s,g):O.keepDirty?t.dirtyFields:{},touchedFields:O.keepTouched?t.touchedFields:{},errors:O.keepErrors?t.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:s})},Be=(g,O)=>Ce(Me(g)?g(a):g,O),On=(g,O={})=>{const x=V(n,g),G=x&&x._f;if(G){const U=G.refs?G.refs[0]:G.ref;U.focus&&(U.focus(),O.shouldSelect&&Me(U.select)&&U.select())}},Rn=g=>{t={...t,...g}},on={control:{register:se,unregister:le,getFieldState:Y,handleSubmit:be,setError:J,_subscribe:ve,_runSchema:j,_focusError:ye,_getWatch:S,_getDirty:$,_setValid:y,_setFieldArray:w,_setDisabledField:X,_setErrors:_,_getFieldArray:R,_reset:Ce,_resetDefaultValues:()=>Me(r.defaultValues)&&r.defaultValues().then(g=>{Be(g,r.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:K,_disableForm:ke,_subjects:p,_proxyFormState:u,get _fields(){return n},get _formValues(){return a},get _state(){return i},set _state(g){i=g},get _defaultValues(){return s},get _names(){return o},set _names(g){o=g},get _formState(){return t},get _options(){return r},set _options(g){r={...r,...g}}},subscribe:fe,trigger:M,register:se,handleSubmit:be,watch:Se,setValue:F,getValues:H,reset:Be,resetField:Qe,clearErrors:W,unregister:le,setError:J,setFocus:On,getFieldState:Y};return{...on,formControl:on}}var Ye=()=>{if(typeof crypto<"u"&&crypto.randomUUID)return crypto.randomUUID();const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const t=(Math.random()*16+e)%16|0;return(r=="x"?t:t&3|8).toString(16)})},qt=(e,r,t={})=>t.shouldFocus||ie(t.shouldFocus)?t.focusName||`${e}.${ie(t.focusIndex)?r:t.focusIndex}.`:"",Lt=(e,r)=>[...e,...Oe(r)],Vt=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Ct(e,r,t){return[...e.slice(0,r),...Oe(t),...e.slice(r)]}var Bt=(e,r,t)=>Array.isArray(e)?(ie(e[t])&&(e[t]=void 0),e.splice(t,0,e.splice(r,1)[0]),e):[],Ut=(e,r)=>[...Oe(r),...Oe(e)];function au(e,r){let t=0;const n=[...e];for(const s of r)n.splice(s-t,1),t++;return Et(n).length?n:[]}var Kt=(e,r)=>ie(r)?[]:au(e,Oe(r).sort((t,n)=>t-n)),Gt=(e,r,t)=>{[e[r],e[t]]=[e[t],e[r]]},fs=(e,r,t)=>(e[r]=t,e);function iu(e){const r=Ze(),{control:t=r.control,name:n,keyName:s="id",shouldUnregister:a,rules:i}=e,[o,d]=E.useState(t._getFieldArray(n)),l=E.useRef(t._getFieldArray(n).map(Ye)),u=E.useRef(o),f=E.useRef(!1);u.current=o,t._names.array.add(n),E.useMemo(()=>i&&t.register(n,i),[t,i,n]),Ot(()=>t._subjects.array.subscribe({next:({values:k,name:P})=>{if(P===n||!P){const j=V(k,n);Array.isArray(j)&&(d(j),l.current=j.map(Ye))}}}).unsubscribe,[t,n]);const p=E.useCallback(k=>{f.current=!0,t._setFieldArray(n,k)},[t,n]),m=(k,P)=>{const j=Oe(ae(k)),C=Lt(t._getFieldArray(n),j);t._names.focus=qt(n,C.length-1,P),l.current=Lt(l.current,j.map(Ye)),p(C),d(C),t._setFieldArray(n,C,Lt,{argA:Vt(k)})},v=(k,P)=>{const j=Oe(ae(k)),C=Ut(t._getFieldArray(n),j);t._names.focus=qt(n,0,P),l.current=Ut(l.current,j.map(Ye)),p(C),d(C),t._setFieldArray(n,C,Ut,{argA:Vt(k)})},y=k=>{const P=Kt(t._getFieldArray(n),k);l.current=Kt(l.current,k),p(P),d(P),!Array.isArray(V(t._fields,n))&&ee(t._fields,n,void 0),t._setFieldArray(n,P,Kt,{argA:k})},b=(k,P,j)=>{const C=Oe(ae(P)),B=Ct(t._getFieldArray(n),k,C);t._names.focus=qt(n,k,j),l.current=Ct(l.current,k,C.map(Ye)),p(B),d(B),t._setFieldArray(n,B,Ct,{argA:k,argB:Vt(P)})},w=(k,P)=>{const j=t._getFieldArray(n);Gt(j,k,P),Gt(l.current,k,P),p(j),d(j),t._setFieldArray(n,j,Gt,{argA:k,argB:P},!1)},h=(k,P)=>{const j=t._getFieldArray(n);Bt(j,k,P),Bt(l.current,k,P),p(j),d(j),t._setFieldArray(n,j,Bt,{argA:k,argB:P},!1)},_=(k,P)=>{const j=ae(P),C=fs(t._getFieldArray(n),k,j);l.current=[...C].map((B,K)=>!B||K===k?Ye():l.current[K]),p(C),d([...C]),t._setFieldArray(n,C,fs,{argA:k,argB:j},!0,!1)},A=k=>{const P=Oe(ae(k));l.current=P.map(Ye),p([...P]),d([...P]),t._setFieldArray(n,[...P],j=>j,{},!0,!1)};return E.useEffect(()=>{if(t._state.action=!1,nr(n,t._names)&&t._subjects.state.next({...t._formState}),f.current&&(!cn(t._options.mode).isOnSubmit||t._formState.isSubmitted)&&!cn(t._options.reValidateMode).isOnSubmit)if(t._options.resolver)t._runSchema([n]).then(k=>{const P=V(k.errors,n),j=V(t._formState.errors,n);(j?!P&&j.type||P&&(j.type!==P.type||j.message!==P.message):P&&P.type)&&(P?ee(t._formState.errors,n,P):ue(t._formState.errors,n),t._subjects.state.next({errors:t._formState.errors}))});else{const k=V(t._fields,n);k&&k._f&&!(cn(t._options.reValidateMode).isOnSubmit&&cn(t._options.mode).isOnSubmit)&&tr(k,t._names.disabled,t._formValues,t._options.criteriaMode===Pe.all,t._options.shouldUseNativeValidation,!0).then(P=>!he(P)&&t._subjects.state.next({errors:Ta(t._formState.errors,P,n)}))}t._subjects.state.next({name:n,values:ae(t._formValues)}),t._names.focus&&mn(t._fields,(k,P)=>{if(t._names.focus&&P.startsWith(t._names.focus)&&k.focus)return k.focus(),1}),t._names.focus="",t._setValid(),f.current=!1},[o,n,t]),E.useEffect(()=>(!V(t._formValues,n)&&t._setFieldArray(n),()=>{const k=(P,j)=>{const C=V(t._fields,P);C&&C._f&&(C._f.mount=j)};t._options.shouldUnregister||a?t.unregister(n):k(n,!1)}),[n,t,s,a]),{swap:E.useCallback(w,[p,n,t]),move:E.useCallback(h,[p,n,t]),prepend:E.useCallback(v,[p,n,t]),append:E.useCallback(m,[p,n,t]),remove:E.useCallback(y,[p,n,t]),insert:E.useCallback(b,[p,n,t]),update:E.useCallback(_,[p,n,t]),replace:E.useCallback(A,[p,n,t]),fields:E.useMemo(()=>o.map((k,P)=>({...k,[s]:l.current[P]||Ye()})),[o,s])}}function ou(e={}){const r=E.useRef(void 0),t=E.useRef(void 0),[n,s]=E.useState({isDirty:!1,isValidating:!1,isLoading:Me(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Me(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:n},e.defaultValues&&!Me(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...o}=su(e);r.current={...o,formState:n}}const a=r.current.control;return a._options=e,Ot(()=>{const i=a._subscribe({formState:a._proxyFormState,callback:()=>s({...a._formState}),reRenderRoot:!0});return s(o=>({...o,isReady:!0})),a._formState.isReady=!0,i},[a]),E.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),E.useEffect(()=>{e.mode&&(a._options.mode=e.mode),e.reValidateMode&&(a._options.reValidateMode=e.reValidateMode)},[a,e.mode,e.reValidateMode]),E.useEffect(()=>{e.errors&&(a._setErrors(e.errors),a._focusError())},[a,e.errors]),E.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]),E.useEffect(()=>{if(a._proxyFormState.isDirty){const i=a._getDirty();i!==n.isDirty&&a._subjects.state.next({isDirty:i})}},[a,n.isDirty]),E.useEffect(()=>{e.values&&!Ge(e.values,t.current)?(a._reset(e.values,{keepFieldsRef:!0,...a._options.resetOptions}),t.current=e.values,s(i=>({...i}))):a._resetDefaultValues()},[a,e.values]),E.useEffect(()=>{a._state.mount||(a._setValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),r.current.formState=ya(n,a),r.current}function lu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ms={exports:{}},_n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs;function du(){if(gs)return _n;gs=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return _n.Fragment=r,_n.jsx=t,_n.jsxs=t,_n}var ps;function uu(){return ps||(ps=1,ms.exports=du()),ms.exports}var Te=uu();const cu=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Te.jsx(xl,{variant:"warning",size:"small",children:Te.jsx(Le,{gap:"space-8",children:E.Children.map(e,r=>Te.jsx(ne,{size:"small",children:r},Ka(r)?r.key:r))})}),Un={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};kn(Un);var vs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ys;function fu(){return ys||(ys=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,n.call(this,o)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)r.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(vs)),vs.exports}var mu=fu();const Rr=lu(mu),gu="_borderbox_1a0x6_1",pu="_error_1a0x6_5",vu="_warning_1a0x6_8",yu={borderbox:gu,error:pu,warning:vu};Rr.bind(yu);const ku="_aksjonspunkt_11wjs_1",bu="_erAksjonspunktApent_11wjs_4",hu="_erIkkeGodkjentAvBeslutter_11wjs_8",Eu={aksjonspunkt:ku,erAksjonspunktApent:bu,erIkkeGodkjentAvBeslutter:hu};Rr.bind(Eu);const ks=({dateString:e,year:r,month:t,day:n})=>Te.jsx(Te.Fragment,{children:Ps(e,{year:r,month:t,day:n})});kn(Un);const bs=({dateStringFom:e,dateStringTom:r,showTodayString:t=!1})=>Te.jsx(Te.Fragment,{children:Ga(e,r,{showTodayString:t})});kn(Un);const Ou="_divider_1jpov_1",Ru="_dividerParagraf_1jpov_8",wu="_leftPanel_1jpov_11",Au="_rightPanel_1jpov_14",Tu={divider:Ou,dividerParagraf:Ru,leftPanel:wu,rightPanel:Au};Rr.bind(Tu);const Ia=()=>Te.jsx("span",{"data-testid":"editedIcon",children:Te.jsx(Ni,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-warning-decoration)"})});kn(Un);const Iu=kn(Un),_u=({tekst:e,children:r})=>{const[t,n]=c.useState(!1);if(!e)return r;const s=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return Te.jsx(fa,{content:Iu.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Te.jsx("span",{"aria-hidden":"true",onClick:s,children:r??e})})},hs={default:"_default_af3od_1",rød:"_rød_af3od_5"},rr=({beløp:e,kr:r=!1,rød:t=!1})=>{const n=e?.toString().replace(/\s/g,"");return Te.jsx(_u,{tekst:n,children:Te.jsxs("span",{className:t?hs.rød:hs.default,children:[n?$a(n):"-",n&&r&&" kr"]})})};function ju(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Es={exports:{}},jn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Os;function xu(){if(Os)return jn;Os=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return jn.Fragment=r,jn.jsx=t,jn.jsxs=t,jn}var Rs;function Pu(){return Rs||(Rs=1,Es.exports=xu()),Es.exports}var de=Pu();const _a=e=>e.reduce((r,t,n)=>({...r,[n]:s=>t(s)||!0}),{}),ja=(e,r)=>r.split(".").reduce((t,n)=>t!==void 0?t[n]:t,e)?.message;var sr={exports:{}},Nu=sr.exports,ws;function Su(){return ws||(ws=1,function(e,r){(function(t,n){e.exports=n()})(Nu,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,a=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,d={},l=function(b){return(b=+b)+(b>68?1900:2e3)},u=function(b){return function(w){this[b]=+w}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var h=w.match(/([+-]|\d\d)/g),_=60*h[1]+(+h[2]||0);return _===0?0:h[0]==="+"?-_:_}(b)}],p=function(b){var w=d[b];return w&&(w.indexOf?w:w.s.concat(w.f))},m=function(b,w){var h,_=d.meridiem;if(_){for(var A=1;A<=24;A+=1)if(b.indexOf(_(A,0,w))>-1){h=A>12;break}}else h=b===(w?"pm":"PM");return h},v={A:[o,function(b){this.afternoon=m(b,!1)}],a:[o,function(b){this.afternoon=m(b,!0)}],Q:[s,function(b){this.month=3*(b-1)+1}],S:[s,function(b){this.milliseconds=100*+b}],SS:[a,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[a,u("day")],Do:[o,function(b){var w=d.ordinal,h=b.match(/\d+/);if(this.day=h[0],w)for(var _=1;_<=31;_+=1)w(_).replace(/\[|\]/g,"")===b&&(this.day=_)}],w:[i,u("week")],ww:[a,u("week")],M:[i,u("month")],MM:[a,u("month")],MMM:[o,function(b){var w=p("months"),h=(p("monthsShort")||w.map(function(_){return _.slice(0,3)})).indexOf(b)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[o,function(b){var w=p("months").indexOf(b)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,u("year")],YY:[a,function(b){this.year=l(b)}],YYYY:[/\d{4}/,u("year")],Z:f,ZZ:f};function y(b){var w,h;w=b,h=d&&d.formats;for(var _=(b=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(K,$,S){var R=S&&S.toUpperCase();return $||h[S]||t[S]||h[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(I,N,F){return N||F.slice(1)})})).match(n),A=_.length,k=0;k<A;k+=1){var P=_[k],j=v[P],C=j&&j[0],B=j&&j[1];_[k]=B?{regex:C,parser:B}:P.replace(/^\[|\]$/g,"")}return function(K){for(var $={},S=0,R=0;S<A;S+=1){var I=_[S];if(typeof I=="string")R+=I.length;else{var N=I.regex,F=I.parser,q=K.slice(R),D=N.exec(q)[0];F.call($,D),K=K.replace(D,"")}}return function(M){var H=M.afternoon;if(H!==void 0){var Y=M.hours;H?Y<12&&(M.hours+=12):Y===12&&(M.hours=0),delete M.afternoon}}($),$}}return function(b,w,h){h.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(l=b.parseTwoDigitYear);var _=w.prototype,A=_.parse;_.parse=function(k){var P=k.date,j=k.utc,C=k.args;this.$u=j;var B=C[1];if(typeof B=="string"){var K=C[2]===!0,$=C[3]===!0,S=K||$,R=C[2];$&&(R=C[2]),d=this.$locale(),!K&&R&&(d=h.Ls[R]),this.$d=function(q,D,M,H){try{if(["x","X"].indexOf(D)>-1)return new Date((D==="X"?1e3:1)*q);var Y=y(D)(q),W=Y.year,J=Y.month,Se=Y.day,ve=Y.hours,fe=Y.minutes,le=Y.seconds,X=Y.milliseconds,se=Y.zone,ye=Y.week,ke=new Date,be=Se||(W||J?1:ke.getDate()),Qe=W||ke.getFullYear(),Ce=0;W&&!J||(Ce=J>0?J-1:ke.getMonth());var Be,On=ve||0,Rn=fe||0,Kn=le||0,on=X||0;return se?new Date(Date.UTC(Qe,Ce,be,On,Rn,Kn,on+60*se.offset*1e3)):M?new Date(Date.UTC(Qe,Ce,be,On,Rn,Kn,on)):(Be=new Date(Qe,Ce,be,On,Rn,Kn,on),ye&&(Be=H(Be).week(ye).toDate()),Be)}catch{return new Date("")}}(P,B,j,h),this.init(),R&&R!==!0&&(this.$L=this.locale(R).$L),S&&P!=this.format(B)&&(this.$d=new Date("")),d={}}else if(B instanceof Array)for(var I=B.length,N=1;N<=I;N+=1){C[1]=B[N-1];var F=h.apply(this,C);if(F.isValid()){this.$d=F.$d,this.$L=F.$L,this.init();break}N===I&&(this.$d=new Date(""))}else A.call(this,k)}}})}(sr)),sr.exports}var Mu=Su();const Du=ju(Mu),Fu="_textarea_14c7r_1",qu="_readOnlyField_14c7r_7",As={textarea:Fu,readOnlyField:qu},Lu=e=>e!=null&&e!=="",Vu=({label:e,value:r,isEdited:t=!1,type:n,hideLabel:s,size:a})=>Lu(r)?de.jsxs(Le,{gap:"space-4",children:[e&&!s&&de.jsx(me,{size:a,children:e}),de.jsxs(pe,{gap:"space-8",align:"center",wrap:!1,children:[de.jsx(Ds,{className:n==="textarea"?As.textarea:As.readOnlyField,size:a,children:r}),t&&de.jsx(Ia,{})]})]}):null;Pn.extend(Du);const Cu=({label:e,description:r,validate:t=[],radios:n,onChange:s,isReadOnly:a=!1,isHorizontal:i=!1,parse:o=m=>m,isTrueOrFalseSelection:d=!1,hideLegend:l=!1,isEdited:u=!1,size:f="small",...p})=>{const{name:m,control:v,disabled:y}=p,{formState:{errors:b}}=Ze(),{field:w}=ba({name:m,control:v,rules:{validate:c.useMemo(()=>_a(t),[t])}}),h=d?A=>A==="true":o,_=de.jsxs(pe,{justify:"center",gap:"space-8",children:[e,a&&u&&de.jsx(Ia,{})]});return de.jsxs(Sd,{name:m,value:w.value!==void 0?w.value:null,onChange:A=>{s&&s(A),w.onChange(A)},size:f,legend:_,description:r,error:ja(b,m),hideLegend:l,children:[!i&&n.map(A=>de.jsxs(c.Fragment,{children:[de.jsx(Qr,{size:f,value:h(A.value),disabled:A.disabled||y||a,children:A.label}),w.value===h(A.value)&&A.element]},A.value)),i&&de.jsxs(de.Fragment,{children:[de.jsx(pe,{gap:"space-16",children:n.map(A=>de.jsx(Qr,{size:f,value:h(A.value),disabled:A.disabled||y||a,children:A.label},A.value))}),n.filter(A=>w.value===h(A.value)).map(A=>de.jsx(c.Fragment,{children:A.element},A.value))]})]})},Bu="_textAreaFieldWithBadges_bdz0b_1",Uu="_etikettWrapper_bdz0b_4",Ts={textAreaFieldWithBadges:Bu,etikettWrapper:Uu},Ku=({name:e,control:r,label:t,readOnly:n,maxLength:s,badges:a,validate:i=[],parse:o=m=>m,className:d,description:l,isEdited:u,size:f="small",...p})=>{const{formState:{errors:m}}=Ze(),{field:v}=ba({name:e,control:r,rules:{validate:c.useMemo(()=>_a(i),[i])}});return n?de.jsx(Vu,{size:f,label:t,value:v.value,type:"textarea",isEdited:u,hideLabel:p.hideLabel}):de.jsxs("div",{className:a?Ts.textAreaFieldWithBadges:null,children:[a&&de.jsx("div",{className:Ts.etikettWrapper,children:a.map(({type:y,titleText:b})=>de.jsx(Td,{variant:y,size:"small",children:b},b))}),de.jsx(Cd,{size:f,label:t,description:l,className:d,autoComplete:"off",...v,onChange:y=>v.onChange(y.currentTarget.value!==""?o(y.currentTarget.value):null),value:v.value?v.value:"",error:ja(m,e),maxLength:s,...p})]})},Gu=({formMethods:e,onSubmit:r,children:t,className:n,setDataOnUnmount:s})=>{const{handleSubmit:a,getValues:i}=e;return c.useEffect(()=>()=>{s&&s(i())},[]),de.jsx(Kd,{...e,children:de.jsx("form",{className:n,onSubmit:r?a(o=>r(o)):void 0,children:t})})};var ar=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(ar||{}),$t={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Is;function $u(){return Is||(Is=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,n.call(this,o)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)r.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}($t)),$t.exports}var Hu=$u();const zu=_s(Hu),Yu="_boks_wdh4x_1",Wu="_aksjonspunkt_wdh4x_9",Ju="_harBorderTop_wdh4x_13",xa={boks:Yu,aksjonspunkt:Wu,harBorderTop:Ju},Xu=zu.bind(xa),Pa=({harÅpentAksjonspunkt:e,harBorderTop:r,children:t})=>T.jsx("div",{className:Xu(xa.boks,{aksjonspunkt:e,harBorderTop:r}),children:t});Pa.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdBoks",props:{harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},harBorderTop:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const Na=({saksnummer:e,journalpostId:r,dokumentId:t,dokumentTittel:n,children:s})=>{const a=`${r}-${t}`,i=ti(e,r,t);return T.jsx(ca,{href:i,target:a,rel:"noopener noreferrer",onClick:Zu(n),children:s??n})},Zu=e=>r=>{e&&(r.preventDefault(),ri(r.currentTarget.href,r.currentTarget.target,e))};Na.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""}}};const Qu="_inline_17flc_1",ec="_phoneIcon_17flc_5",nc="_docIcon_17flc_11",Ht={inline:Qu,phoneIcon:ec,docIcon:nc},Sa=({saksnummer:e,inntektsmelding:r})=>T.jsxs(Le,{gap:"space-16",children:[T.jsxs(pe,{gap:"space-16",children:[T.jsx(me,{size:"small",children:T.jsx(Q,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),T.jsx(ne,{size:"small",children:T.jsx(rr,{beløp:r.inntektPrMnd})})]}),T.jsxs(pe,{gap:"space-16",children:[T.jsx(me,{size:"small",children:T.jsx(Q,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),T.jsx(ne,{size:"small",children:T.jsx(Q,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd&&T.jsxs(pe,{gap:"space-16",children:[T.jsx(me,{size:"small",children:T.jsx(Q,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),T.jsx(ne,{size:"small",children:T.jsx(rr,{beløp:r.refusjonPrMnd})})]}),T.jsx(Na,{saksnummer:e,journalpostId:r.journalpostId,dokumentId:r.dokumentId,children:T.jsxs(pe,{gap:"space-4",children:[T.jsx(ne,{size:"small",className:Ht.inline,children:T.jsx(Q,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),T.jsx(Ii,{className:Ht.docIcon})]})}),T.jsxs(pe,{gap:"space-16",align:"center",children:[T.jsx(Mi,{className:Ht.phoneIcon}),T.jsxs(Le,{gap:"space-4",children:[T.jsx(me,{size:"small",children:T.jsx(Q,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),T.jsx(nt,{children:r.kontaktpersonNavn}),T.jsx(nt,{children:T.jsx(Q,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]});Sa.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const tc="_inline_p7hb9_1",rc="_arrow_p7hb9_5",zt={inline:tc,arrow:rc},Ma=({inntektsposter:e,skjæringstidspunkt:r})=>{const[t,n]=c.useState(!1),s=sc(r,e);return T.jsxs(T.Fragment,{children:[e.length>0&&T.jsxs(Le,{gap:"space-8",children:[T.jsx(me,{size:"small",children:T.jsx(Q,{id:"InntektsposterPanel.Inntekter"})}),T.jsx(Le,{gap:"space-4",width:"150px",children:s.filter((a,i)=>t?!0:i<3).map(a=>T.jsxs(pe,{justify:"space-between",children:[T.jsxs(pe,{gap:"space-4",children:[T.jsx(ne,{size:"small",children:T.jsx(Q,{id:`InntektsposterPanel.${Pn(a.fom).month()+1}`})}),T.jsx(ne,{size:"small",children:Pn(a.fom).year()})]},a.fom),T.jsx(ne,{size:"small",children:T.jsx(rr,{beløp:a.beløp})})]},a.fom))}),T.jsxs(ca,{onClick:a=>{a.preventDefault(),n(!t)},href:"",children:[T.jsx("span",{children:T.jsx(ne,{size:"small",className:zt.inline,children:T.jsx(Q,{id:t?"InntektsposterPanel.FaerreManeder":"InntektsposterPanel.TidligereManeder"})})}),t?T.jsx(wi,{className:zt.arrow}):T.jsx(Oi,{className:zt.arrow})]})]}),e.length===0&&T.jsx(me,{size:"small",children:T.jsx(Q,{id:"InntektsposterPanel.IngenInntekt"})})]})},sc=(e,r)=>{const n=Pn(e).startOf("month"),s=n.subtract(12,"month"),a=[];for(let i=n;i.isAfter(s);i=i.subtract(1,"month")){const o=i.format(_r),d=r.find(l=>Pn(l.fom).startOf("month").format(_r)===o);a.push({beløp:d?.beløp||0,fom:o})}return a};Ma.__docgenInfo={description:"",methods:[],displayName:"InntektsposterPanel",props:{inntektsposter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const ac="_hjelpetekst_tiqup_1",ic="_image_tiqup_5",oc="_hjelpetekstInnhold_tiqup_9",lc="_exclamationmarkIcon_tiqup_14",dc="_checkmarkIcon_tiqup_21",xn={hjelpetekst:ac,image:ic,hjelpetekstInnhold:oc,exclamationmarkIcon:lc,checkmarkIcon:dc},uc="arbeidsforhold",Da=({index:e,fieldId:r,saksnummer:t,sorterteArbeidsforhold:n,arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:a,isReadOnly:i,harÅpentAksjonspunkt:o,skjæringstidspunkt:d,alleKodeverk:l})=>{const u=js(),{control:f}=Ze(),{inntektsmeldinger:p,inntekter:m}=s,v=n[e],y=p.find(j=>cc(v,j)),b=m.find(j=>j.arbeidsgiverIdent===v.arbeidsgiverIdent)?.inntekter,w=n.filter(j=>j.arbeidsgiverIdent===v.arbeidsgiverIdent).length>1,h=a[v.arbeidsgiverIdent],_=c.useRef(null),[A,k]=c.useState(!1),P=()=>k(j=>!j);return T.jsx(Pa,{harÅpentAksjonspunkt:o,harBorderTop:e===0,children:T.jsxs(pe,{gap:"space-24",children:[!o&&T.jsx(ki,{title:u.formatMessage({id:"ArbeidsforholdFieldArray.Ok"}),className:xn.checkmarkIcon}),o&&T.jsx(qs,{title:u.formatMessage({id:"ArbeidsforholdFieldArray.Aksjonspunkt"}),className:xn.exclamationmarkIcon}),T.jsxs(Le,{gap:"space-16",width:"90%",children:[T.jsxs(pe,{justify:"space-between",children:[T.jsxs("div",{children:[T.jsx(me,{size:"small",children:h.navn}),v.arbeidsgiverIdent&&T.jsxs(nt,{children:["(",h.erPrivatPerson&&h.fødselsdato?T.jsx(ks,{dateString:h.fødselsdato}):v.arbeidsgiverIdent,")"]})]}),T.jsxs("div",{children:[T.jsx(me,{size:"small",children:T.jsx(Q,{id:"ArbeidsforholdFieldArray.Periode"})}),T.jsx(ne,{size:"small",children:v?T.jsx(bs,{dateStringFom:v.fom,dateStringTom:v.tom}):"-"})]}),T.jsxs("div",{children:[T.jsx(me,{size:"small",children:T.jsx(Q,{id:"ArbeidsforholdFieldArray.Kilde"})}),T.jsx(ne,{size:"small",children:T.jsx(Q,{id:v?"ArbeidsforholdFieldArray.AaRegisteret":"ArbeidsforholdFieldArray.Inntektsmelding"})})]}),T.jsxs("div",{children:[T.jsx(me,{size:"small",children:T.jsx(Q,{id:"ArbeidsforholdFieldArray.InntektsmeldingMottatt"})}),T.jsxs(ne,{size:"small",children:[y?.motattDato&&T.jsx(ks,{dateString:y.motattDato}),!y?.motattDato&&T.jsx(Q,{id:"ArbeidsforholdFieldArray.IkkeMottatt"})]})]})]}),w&&v.eksternArbeidsforholdId&&T.jsxs(pe,{gap:"space-8",children:[T.jsx(me,{size:"small",children:T.jsx(Q,{id:"ArbeidsforholdFieldArray.Id"})}),T.jsxs("div",{children:[v.eksternArbeidsforholdId.length<50&&T.jsx(ne,{size:"small",children:v.eksternArbeidsforholdId}),v.eksternArbeidsforholdId.length>=50&&T.jsx(fa,{content:fc(v.eksternArbeidsforholdId),placement:"bottom",children:T.jsx(ne,{size:"small",children:`${v.eksternArbeidsforholdId.substring(0,50)}...`})})]})]}),v.stillingsprosent&&T.jsxs(pe,{gap:"space-8",children:[T.jsx(me,{size:"small",children:T.jsx(Q,{id:"ArbeidsforholdFieldArray.Stillingsprosent"})}),T.jsx(ne,{size:"small",children:`${v.stillingsprosent}%`})]}),v.permisjonOgMangel&&T.jsx(pe,{gap:"space-8",children:T.jsxs(T.Fragment,{children:[T.jsx(me,{size:"small",children:`${l.PermisjonsbeskrivelseType.find(j=>j.kode===v.permisjonOgMangel?.type)?.navn??""} 100%`}),T.jsx(ne,{size:"small",children:T.jsx(bs,{dateStringFom:v.permisjonOgMangel.permisjonFom,dateStringTom:void 0})})]})}),y&&T.jsx(Sa,{saksnummer:t,inntektsmelding:y}),!y&&b&&T.jsx(Ma,{inntektsposter:b,skjæringstidspunkt:d}),T.jsx(Cu,{name:`${uc}.${e}.permisjonStatus`,control:f,label:T.jsxs(pe,{gap:"space-8",children:[T.jsx(Q,{id:"ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed"}),T.jsxs("div",{className:xn.image,children:[T.jsx(gr,{ref:_,type:"button",variant:"tertiary",onClick:P,icon:T.jsx(Fi,{title:u.formatMessage({id:"ArbeidsforholdFieldArray.AltHjelpetekst"})})}),T.jsx(Qt,{open:A,onClose:P,anchorEl:_.current,className:xn.hjelpetekst,children:T.jsx(Qt.Content,{className:xn.hjelpetekstInnhold,children:T.jsxs(Le,{gap:"space-8",children:[T.jsx(ne,{children:T.jsx(Q,{id:"ArbeidsforholdFieldArray.HjelpetekstDel1"})}),T.jsx(ne,{children:T.jsx(Q,{id:"ArbeidsforholdFieldArray.HjelpetekstDel2"})}),T.jsx(ne,{children:T.jsx(Q,{id:"ArbeidsforholdFieldArray.HjelpetekstDel3"})}),T.jsx(ne,{children:T.jsx(Q,{id:"ArbeidsforholdFieldArray.HjelpetekstDel4"})})]})})})]})]}),validate:[Ns],isReadOnly:i,radios:[{label:u.formatMessage({id:y?"ArbeidsforholdFieldArray.TaMedArbeidsforhold":"ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding"}),value:ar.IKKE_BRUK_PERMISJON},{label:u.formatMessage({id:"ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold"}),value:ar.BRUK_PERMISJON}]})]})]})},r)},cc=(e,r)=>r.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!r.internArbeidsforholdId||r.internArbeidsforholdId===e.internArbeidsforholdId),fc=e=>{const r=Math.ceil(e.length/25);return Array.from({length:r},(n,s)=>e.slice(s*25,s*25+25)).join("-")};Da.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdField",props:{index:{required:!0,tsType:{name:"number"},description:""},fieldId:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const mc="arbeidsforhold",Fa=({saksnummer:e,sorterteArbeidsforhold:r,arbeidOgInntekt:t,arbeidsgiverOpplysningerPerId:n,isReadOnly:s,harÅpentAksjonspunkt:a,skjæringstidspunkt:i,alleKodeverk:o})=>{const{control:d}=Ze(),{fields:l}=iu({control:d,name:mc});return T.jsx("div",{children:l.map((u,f)=>T.jsx(Da,{fieldId:u.id,index:f,saksnummer:e,sorterteArbeidsforhold:r,arbeidOgInntekt:t,arbeidsgiverOpplysningerPerId:n,isReadOnly:s,harÅpentAksjonspunkt:a,skjæringstidspunkt:i,alleKodeverk:o},u.id))})};Fa.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const gc=Ya(3),pc=Wa(1500),vc=e=>(r,t)=>e[r.arbeidsgiverIdent].navn.localeCompare(e[t.arbeidsgiverIdent].navn),qa=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:r})=>{const{aksjonspunkterForPanel:t,fagsak:n,submitCallback:s,isReadOnly:a,alleKodeverk:i}=Ha(),o={inntektsmeldinger:e.inntektsmeldinger,arbeidsforhold:e.arbeidsforhold.filter(y=>y.permisjonOgMangel?.årsak),inntekter:e.inntekter,skjæringstidspunkt:e.skjæringstidspunkt},{arbeidsforhold:d}=o,l=[...d].sort(vc(r)),u={arbeidsforhold:l.map(y=>({permisjonStatus:y.permisjonOgMangel?.permisjonStatus})),begrunnelse:t[0].begrunnelse??""},{mellomlagretFormData:f,setMellomlagretFormData:p}=za(),m=ou({defaultValues:f??u});c.useEffect(()=>()=>{p(m.getValues())},[]);const v=t.some(y=>y.status===qn.OPPRETTET);return T.jsxs(Le,{gap:"space-32",children:[T.jsxs(pe,{justify:"space-between",children:[T.jsx(di,{size:"small",level:"2",children:T.jsx(Q,{id:"PermisjonFaktaPanel.Overskrift"})}),T.jsx(ne,{size:"small",children:T.jsx(Q,{id:"PermisjonFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ps(o.skjæringstidspunkt)}})})]}),v&&T.jsx(cu,{children:T.jsx(Q,{id:"PermisjonFaktaPanel.PermisjonUtenSluttdato"})}),T.jsx(Gu,{formMethods:m,onSubmit:y=>s({kode:bn.VURDER_ARBEIDSFORHOLD_PERMISJON,arbeidsforhold:y.arbeidsforhold.map((b,w)=>({internArbeidsforholdId:l[w].internArbeidsforholdId,arbeidsgiverIdent:l[w].arbeidsgiverIdent,permisjonStatus:b.permisjonStatus})),begrunnelse:y.begrunnelse}),children:T.jsxs(Le,{gap:"space-24",children:[T.jsx(Fa,{saksnummer:n.saksnummer,sorterteArbeidsforhold:l,arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:r,isReadOnly:a,harÅpentAksjonspunkt:v,skjæringstidspunkt:o.skjæringstidspunkt,alleKodeverk:i}),T.jsx(Ku,{name:"begrunnelse",control:m.control,label:T.jsx(me,{size:"small",children:T.jsx(Q,{id:"PermisjonFaktaPanel.Begrunn"})}),validate:[Ns,gc,pc,Ja],maxLength:1500,readOnly:a}),!a&&T.jsx("div",{children:T.jsx(gr,{size:"small",variant:"primary",disabled:!m.formState.isDirty||m.formState.isSubmitting,loading:m.formState.isSubmitting,children:T.jsx(Q,{id:"PermisjonFaktaPanel.Bekreft"})})})]})})]})};qa.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const yc={"PermisjonFaktaPanel.Overskrift":"Fakta om permisjon","PermisjonFaktaPanel.Arbeidsforhold":"Arbeidsforhold","PermisjonFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","PermisjonFaktaPanel.Bekreft":"Bekreft og fortsett","PermisjonFaktaPanel.PermisjonUtenSluttdato":"Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.","PermisjonFaktaPanel.Begrunn":"Begrunn valget","ArbeidsforholdFieldArray.Periode":"Periode","ArbeidsforholdFieldArray.Kilde":"Kilde","ArbeidsforholdFieldArray.InntektsmeldingMottatt":"Inntektsmelding","ArbeidsforholdFieldArray.Saksbehandler":"Saksbehandler","ArbeidsforholdFieldArray.AaRegisteret":"A-inntekt","ArbeidsforholdFieldArray.Inntektsmelding":"Inntektsmelding","ArbeidsforholdFieldArray.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdFieldArray.Ok":"Arbeidsforhold er OK","ArbeidsforholdFieldArray.HjelpetekstDel1":"Søker er registrert med permisjon eller permittering uten sluttdato fra arbeidsforholdet sitt i Aa-reg. Vurder om dette arbeidsforholdet skal være med i beregningen. Dersom det fjernes vil det bli borte fra beregningen og eventuell mottatt inntektsmelding vil ikke brukes. Tas det med, vil det brukes i beregningen og bli med videre i behandlingen.","ArbeidsforholdFieldArray.HjelpetekstDel2":"Dersom arbeidsforholdet tas med og det trengs inntektsmelding, må dette innhentes.","ArbeidsforholdFieldArray.HjelpetekstDel3":"Permisjoner eller permitteringer med en sluttdato tas automatisk med. Du trenger ikke etterspørre inntektsmeldinger.","ArbeidsforholdFieldArray.HjelpetekstDel4":"Mottas det inntektsmelding med refusjonskrav vil denne brukes i behandlingen.","ArbeidsforholdFieldArray.Id":"ID","ArbeidsforholdFieldArray.Stillingsprosent":"Stillingsprosent","ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed":"Skal arbeidsforholdet tas med?","ArbeidsforholdFieldArray.TaMedArbeidsforhold":"Fjern permisjonen og ta med arbeidsforholdet","ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding":"Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes","ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold":"Ikke ta med arbeidsforholdet","ArbeidsforholdFieldArray.IkkeMottatt":"Ikke mottatt","ArbeidsforholdFieldArray.AltHjelpetekst":"Hjelpetekst","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsposterPanel.Inntekter":"Inntekter (fra A-inntekt)","InntektsposterPanel.1":"Jan","InntektsposterPanel.2":"Feb","InntektsposterPanel.3":"Mars","InntektsposterPanel.4":"Apr","InntektsposterPanel.5":"Mai","InntektsposterPanel.6":"Jun","InntektsposterPanel.7":"Jul","InntektsposterPanel.8":"Aug","InntektsposterPanel.9":"Sep","InntektsposterPanel.10":"Okt","InntektsposterPanel.11":"Nov","InntektsposterPanel.12":"Des","InntektsposterPanel.TidligereManeder":"Tidligere måneder ","InntektsposterPanel.FaerreManeder":"Siste måneder ","InntektsposterPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-inntekt"},kc=kn(yc),ir=e=>T.jsx(Xa,{value:kc,children:T.jsx(qa,{...e})});ir.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const or={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},Ac={title:"fakta/fakta-permisjon",component:ir,decorators:[Za,Qa],render:e=>T.jsx(ir,{...e})},Yn={args:{aksjonspunkterForPanel:[{definisjon:bn.VURDER_ARBEIDSFORHOLD_PERMISJON,status:qn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"91090909+",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5",eksternArbeidsforholdId:"ARB001-002",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Xe.PERMITTERING},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Wn={args:{aksjonspunkterForPanel:[{definisjon:bn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:qn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-02",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Je.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2021-11-07",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...or,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Jn={args:{aksjonspunkterForPanel:[{definisjon:bn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:qn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001-asdfasdfasdf-asdfadsfertbrtynet65y454hrthfdsgfbdsfgb",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-02",type:Xe.VELFERDSPERMISJON,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",permisjonOgMangel:{permisjonFom:"2021-11-07",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...or,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001-asdfasdfasdf-asdfadsfertbrtynet65y454hrthfdsgfbdsfgb",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...or,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Xn={args:{aksjonspunkterForPanel:[{definisjon:bn.VURDER_ARBEIDSFORHOLD_PERMISJON,status:qn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}};Yn.parameters={...Yn.parameters,docs:{...Yn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          type: PermisjonsbeskrivelseType.PERMITTERING,
          årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '91090909+',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5',
        eksternArbeidsforholdId: 'ARB001-002',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          permisjonTom: '2022-12-01',
          type: PermisjonsbeskrivelseType.PERMITTERING
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 41000,
          fom: '2021-07-01',
          tom: '2021-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Yn.parameters?.docs?.source}}};Wn.parameters={...Wn.parameters,docs:{...Wn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      },
      910909090: {
        erPrivatPerson: false,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090'
      },
      910909092: {
        erPrivatPerson: false,
        identifikator: '910909092',
        navn: 'DNB',
        referanse: '910909092'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31',
        permisjonOgMangel: {
          permisjonFom: '2022-10-02',
          type: PermisjonsbeskrivelseType.PERMITTERING,
          årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '910909090',
        eksternArbeidsforholdId: 'ARB001-002',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        permisjonOgMangel: {
          permisjonFom: '2021-11-07',
          type: PermisjonsbeskrivelseType.PERMITTERING,
          årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: 20000,
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }, {
        arbeidsgiverIdent: '910909090',
        inntekter: [{
          beløp: 30000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 31000,
          fom: '2021-07-01',
          tom: '2021-07-31',
          type: 'LØNN'
        }, {
          beløp: 30000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 30000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 30000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Wn.parameters?.docs?.source}}};Jn.parameters={...Jn.parameters,docs:{...Jn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001-asdfasdfasdf-asdfadsfertbrtynet65y454hrthfdsgfbdsfgb',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31',
        permisjonOgMangel: {
          permisjonFom: '2022-10-02',
          type: PermisjonsbeskrivelseType.VELFERDSPERMISJON,
          årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-002',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        permisjonOgMangel: {
          permisjonFom: '2021-11-07',
          type: PermisjonsbeskrivelseType.PERMITTERING,
          årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001-asdfasdfasdf-asdfadsfertbrtynet65y454hrthfdsgfbdsfgb',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: 20000,
        journalpostId: '1',
        dokumentId: '2'
      }, {
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-002',
        inntektPrMnd: 10000,
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }]
      }, {
        arbeidsgiverIdent: '910909090',
        inntekter: [{
          beløp: 30000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Jn.parameters?.docs?.source}}};Xn.parameters={...Xn.parameters,docs:{...Xn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: true,
        fødselsdato: '2000-01-01',
        identifikator: '910909088',
        navn: 'Bettan',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          type: PermisjonsbeskrivelseType.PERMITTERING,
          årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Xn.parameters?.docs?.source}}};const Tc=["EttArbeidsforholdUtenSluttdatoForPermisjon","FlereArbeidsforhold","FlereArbeidsforholdFraSammeArbeidsgiver","VisFødselsdatoNårPrivatperson"];export{Yn as EttArbeidsforholdUtenSluttdatoForPermisjon,Wn as FlereArbeidsforhold,Jn as FlereArbeidsforholdFraSammeArbeidsgiver,Xn as VisFødselsdatoNårPrivatperson,Tc as __namedExportsOrder,Ac as default};
