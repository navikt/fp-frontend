import{g as Ps,r as c,u as Ns,_ as jr,s as xr,c as Sn,a as se,b as k,d as mt,e as Mn,T as Ga,S as Dn,m as $a,f as gt,R as Ss,W as Ha,o as Ms,Q as za,A as Ya,h as yn,i as xn,j as w,P as Pr,t as Ds,k as Wa,l as Ja,n as Fn,p as Xa,q as Za,M as Qa,v as ei,w as ni,x as ti}from"./iframe-dY992IFp.js";import{r as ri}from"./index-wt-v06Mg.js";import"./preload-helper-D9Z9MdNV.js";var Fs=ri();const et=Ps(Fs);function si(e,r){var t=e.values,n=jr(e,["values"]),s=r.values,a=jr(r,["values"]);return xr(s,t)&&xr(n,a)}function qs(e){var r=Ns(),t=r.formatMessage,n=r.textComponent,s=n===void 0?c.Fragment:n,a=e.id,i=e.description,o=e.defaultMessage,d=e.values,l=e.children,u=e.tagName,f=u===void 0?s:u,m=e.ignoreTag,p={id:a,description:i,defaultMessage:o},v=t(p,d,{ignoreTag:m});return typeof l=="function"?l(Array.isArray(v)?v:[v]):f?c.createElement(f,null,v):c.createElement(c.Fragment,null,v)}qs.displayName="FormattedMessage";var Z=c.memo(qs,si);Z.displayName="MemoizedFormattedMessage";var kn=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(kn||{}),Xe=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(Xe||{});const ai=(e,r,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${r}&dokumentId=${t}`,ii=(e,r,t)=>{const n=window.open(e,r);n&&setTimeout(()=>{n.document.title=t},1e3)},bn=e=>Sn({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var oi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const dr=c.forwardRef((e,r)=>{var{className:t,size:n="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:d,visuallyHidden:l,textColor:u}=e,f=oi(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=se();return k.createElement(s,Object.assign({},f,{ref:r,className:m(t,"navds-body-long",`navds-body-long--${n}`,bn({spacing:a,truncate:i,weight:o,align:d,visuallyHidden:l,textColor:u}))}))});var li=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ne=c.forwardRef((e,r)=>{var{className:t,size:n="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:d,visuallyHidden:l,textColor:u}=e,f=li(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=se();return k.createElement(s,Object.assign({},f,{ref:r,className:m(t,"navds-body-short",`navds-body-short--${n}`,bn({spacing:a,truncate:i,weight:o,align:d,visuallyHidden:l,textColor:u}))}))});var di=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const nt=c.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:s,uppercase:a,as:i="p",truncate:o,weight:d="regular",align:l,visuallyHidden:u,textColor:f}=e,m=di(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=se();return k.createElement(i,Object.assign({},m,{ref:r,className:p(t,"navds-detail",bn({spacing:s,truncate:o,weight:d,align:l,visuallyHidden:u,textColor:f,uppercase:a}),{"navds-detail--small":n==="small"})}))});var ui=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ur=c.forwardRef((e,r)=>{var{children:t,className:n,size:s,spacing:a,as:i="p",showIcon:o=!1}=e,d=ui(e,["children","className","size","spacing","as","showIcon"]);const{cn:l}=se();return k.createElement(i,Object.assign({},d,{ref:r,className:l("navds-error-message","navds-label",n,bn({spacing:a}),{"navds-label--small":s==="small","navds-error-message--show-icon":o})}),o&&k.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var ci=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const fi=c.forwardRef((e,r)=>{var{level:t="1",size:n,className:s,as:a,spacing:i,align:o,visuallyHidden:d,textColor:l}=e,u=ci(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:f}=se(),m=a??`h${t}`;return k.createElement(m,Object.assign({},u,{ref:r,className:f(s,"navds-heading",`navds-heading--${n}`,bn({spacing:i,align:o,visuallyHidden:d,textColor:l}))}))});var mi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};c.forwardRef((e,r)=>{var{className:t,spacing:n,as:s="p"}=e,a=mi(e,["className","spacing","as"]);const{cn:i}=se();return k.createElement(s,Object.assign({},a,{ref:r,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var gi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const fe=c.forwardRef((e,r)=>{var{className:t,size:n="medium",as:s="label",spacing:a,visuallyHidden:i,textColor:o}=e,d=gi(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:l}=se();return k.createElement(s,Object.assign({},d,{ref:r,className:l(t,"navds-label",bn({spacing:a,visuallyHidden:i,textColor:o}),{"navds-label--small":n==="small"})}))});function Ls(e,r=166,t=!1){let n;function s(...a){const i=()=>{n=void 0,e.apply(this,a)};!n&&t&&i(),clearTimeout(n),n=setTimeout(i,r)}return s.clear=()=>{clearTimeout(n)},s}function $e(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}const mn=globalThis?.document?c.useLayoutEffect:()=>{};let Nr=0;function pi(e){const[r,t]=c.useState(e),n=e||r;return c.useEffect(()=>{r==null&&(Nr+=1,t(`aksel-id-${Nr}`))},[r]),n}const Sr=k.useId;function qn(e){var r;if(Sr!==void 0){const t=Sr();return e??t.replace(/(:)/g,"")}return(r=pi(e))!==null&&r!==void 0?r:""}function Pn(e,r=[]){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useCallback((...n)=>{var s;return(s=t.current)===null||s===void 0?void 0:s.call(t,...n)},r)}function Vs({value:e,defaultValue:r,onChange:t}){const n=Pn(t),[s,a]=c.useState(r),i=e!==void 0,o=i?e:s,d=Pn(l=>{const f=typeof l=="function"?l(o):l;i||a(f),n(f)},[i,n,o]);return[o,d]}let Mr=0;function vi(e){const[r,t]=c.useState(e),n=e||r;return c.useEffect(()=>{r==null&&(Mr+=1,t(`aksel-icon-${Mr}`))},[r]),n}const Dr=k.useId;function we(e){var r;return Dr!==void 0?Dr().replace(/(:)/g,""):(r=vi(e))!==null&&r!==void 0?r:""}var yi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ki=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=yi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var bi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const hi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=bi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var Ei=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Oi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ei(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Ri=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Cs=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ri(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var wi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ai=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=wi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var Ti=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Bs=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ti(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Ii=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const _i=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ii(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var ji=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const xi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=ji(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Pi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Us=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Pi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Ni=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Si=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ni(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Mi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Di=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Mi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var Fi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const qi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Fi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var Li=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Vi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Li(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Ci=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Bi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ci(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function cr(e,r,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e?.(s),t===!1||!s.defaultPrevented)return r?.(s)}}const[Ac,Ks]=mt({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Tt(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function Rn(e){return(r,t)=>{const n=t?.context?String(t.context):"standalone";let s;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=t?.width?String(t.width):i;s=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=t?.width?String(t.width):e.defaultWidth;s=e.values[o]||e.values[i]}const a=e.argumentCallback?e.argumentCallback(r):r;return s[a]}}function wn(e){return(r,t={})=>{const n=t.width,s=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],a=r.match(s);if(!a)return null;const i=a[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(o)?Ki(o,f=>f.test(i)):Ui(o,f=>f.test(i));let l;l=e.valueCallback?e.valueCallback(d):d,l=t.valueCallback?t.valueCallback(l):l;const u=r.slice(i.length);return{value:l,rest:u}}}function Ui(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function Ki(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function Gi(e){return(r,t={})=>{const n=r.match(e.matchPattern);if(!n)return null;const s=n[0],a=r.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;const o=r.slice(s.length);return{value:i,rest:o}}}const $i={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Hi=(e,r,t)=>{let n;const s=$i[e];return typeof s=="string"?n=s:r===1?n=s.one:n=s.other.replace("{{count}}",String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},zi={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Yi={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Wi={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Ji={date:Tt({formats:zi,defaultWidth:"full"}),time:Tt({formats:Yi,defaultWidth:"full"}),dateTime:Tt({formats:Wi,defaultWidth:"full"})},Xi={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Zi=(e,r,t,n)=>Xi[e],Qi={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},eo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},no={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},to={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ro={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},so=(e,r)=>Number(e)+".",ao={ordinalNumber:so,era:Rn({values:Qi,defaultWidth:"wide"}),quarter:Rn({values:eo,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Rn({values:no,defaultWidth:"wide"}),day:Rn({values:to,defaultWidth:"wide"}),dayPeriod:Rn({values:ro,defaultWidth:"wide"})},io=/^(\d+)\.?/i,oo=/\d+/i,lo={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},uo={any:[/^f/i,/^e/i]},co={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},fo={any:[/1/i,/2/i,/3/i,/4/i]},mo={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},go={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},po={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},vo={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},yo={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},ko={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},bo={ordinalNumber:Gi({matchPattern:io,parsePattern:oo,valueCallback:e=>parseInt(e,10)}),era:wn({matchPatterns:lo,defaultMatchWidth:"wide",parsePatterns:uo,defaultParseWidth:"any"}),quarter:wn({matchPatterns:co,defaultMatchWidth:"wide",parsePatterns:fo,defaultParseWidth:"any",valueCallback:e=>e+1}),month:wn({matchPatterns:mo,defaultMatchWidth:"wide",parsePatterns:go,defaultParseWidth:"any"}),day:wn({matchPatterns:po,defaultMatchWidth:"wide",parsePatterns:vo,defaultParseWidth:"any"}),dayPeriod:wn({matchPatterns:yo,defaultMatchWidth:"any",parsePatterns:ko,defaultParseWidth:"any"})},ho={code:"nb",formatDistance:Hi,formatLong:Ji,formatRelative:Zi,localize:ao,match:bo,options:{weekStartsOn:1,firstWeekContainsDate:4}},Eo={global:{dateLocale:ho,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Oo=c.createContext({locale:Eo}),Gs=()=>c.useContext(Oo);var Ro=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const wo=c.forwardRef((e,r)=>{var t,n,s,{rootElement:a,asChild:i}=e,o=Ro(e,["rootElement","asChild"]);const d=Mn(!1),l=(t=Gs())===null||t===void 0?void 0:t.rootElement,u=(n=a??l)!==null&&n!==void 0?n:(s=globalThis?.document)===null||s===void 0?void 0:s.body,f=i?Dn:"div";return d?u?et.createPortal(k.createElement(Ga,{theme:d.theme,asChild:!0,hasBackground:!1,"data-color":d.color},k.createElement(f,Object.assign({ref:r,"data-aksel-portal":""},o))),u):null:u?et.createPortal(k.createElement(f,Object.assign({ref:r,"data-aksel-portal":""},o)),u):null});function Fr(e){return e.sort((r,t)=>{const n=r.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const Ao=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function qr(e,r,t){let n=e+1;return t&&n>=r&&(n=0),n}function Lr(e,r,t){let n=e-1;return t&&n<0&&(n=r),n}const It=e=>e;class To{constructor(){this.descendants=new Map,this.register=r=>{if(r!=null)return Ao(r)?this.registerNode(r):t=>{this.registerNode(t,r)}},this.unregister=r=>{this.descendants.delete(r);const t=Fr(Array.from(this.descendants.keys()));this.assignIndex(t)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=r=>{this.descendants.forEach(t=>{const n=r.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index),this.enabledValues=()=>this.values().filter(r=>!r.disabled),this.item=r=>{if(this.count()!==0)return this.values()[r]},this.enabledItem=r=>{if(this.enabledCount()!==0)return this.enabledValues()[r]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const r=this.enabledValues().length-1;return this.enabledItem(r)},this.indexOf=r=>{var t,n;return r&&(n=(t=this.descendants.get(r))===null||t===void 0?void 0:t.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=r=>r==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(r)),this.next=(r,t=!0)=>{const n=qr(r,this.count(),t);return this.item(n)},this.nextEnabled=(r,t=!0)=>{const n=this.item(r);if(!n)return;const s=this.enabledIndexOf(n.node),a=qr(s,this.enabledCount(),t);return this.enabledItem(a)},this.prev=(r,t=!0)=>{const n=Lr(r,this.count()-1,t);return this.item(n)},this.prevEnabled=(r,t=!0)=>{const n=this.item(r);if(!n)return;const s=this.enabledIndexOf(n.node),a=Lr(s,this.enabledCount()-1,t);return this.enabledItem(a)},this.registerNode=(r,t)=>{if(!r)return;const n=this.descendants.get(r);if(n){this.descendants.set(r,Object.assign({index:n.index,node:r},t));return}const s=Array.from(this.descendants.keys()).concat(r),a=Fr(s);t?.disabled&&(t.disabled=!!t.disabled);const i=Object.assign({node:r,index:-1},t);this.descendants.set(r,i),this.assignIndex(a)}}}function Io(){const[e,r]=mt({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),t=It(a=>k.createElement(e,Object.assign({},a.value),a.children));function n(a){const i=r(),[o,d]=c.useState(-1),l=c.useRef(null);mn(()=>()=>{l.current&&i.unregister(l.current)},[]),mn(()=>{if(!l.current)return;const f=Number(l.current.dataset.index);o!==f&&!Number.isNaN(f)&&d(f)});const u=It(a?i.register(a):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(l.current),register:$a([u,l])}}function s(){return c.useRef(new To).current}return[t,r,s,n]}function _o(e,r=globalThis?.document){const t=Pn(e);c.useEffect(()=>{const n=s=>{s.key==="Escape"&&t(s)};return r.addEventListener("keydown",n,!0),()=>r.removeEventListener("keydown",n,!0)},[t,r])}const $s={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function Hs(e,r,t,{discrete:n}={discrete:!1}){if(!r)return;const s=t.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});s.addEventListener(e,r,{once:!0}),n&&s?et.flushSync(()=>s.dispatchEvent(a)):s.dispatchEvent(a)}function jo(e,r=globalThis?.document){const t=Pn(e),n=c.useRef(!1);return c.useEffect(()=>{const s=a=>{if(a.target&&!n.current){const i={originalEvent:a};Hs($s.FOCUS_OUTSIDE,t,i)}};return r.addEventListener("focusin",s),()=>r.removeEventListener("focusin",s)},[r,t]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function xo(e,r=globalThis?.document){const t=Pn(e),n=c.useRef(!1),s=c.useRef(()=>{});return c.useEffect(()=>{const a=o=>{function d(){Hs($s.POINTER_DOWN_OUTSIDE,t,{originalEvent:o},{discrete:!0})}o.target&&!n.current?o.pointerType==="touch"?(r.removeEventListener("click",s.current),s.current=d,r.addEventListener("click",s.current,{once:!0})):d():r.removeEventListener("click",s.current),n.current=!1},i=window.setTimeout(()=>{r.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),r.removeEventListener("pointerdown",a),r.removeEventListener("click",s.current)}},[r,t]),{onPointerDownCapture:()=>{n.current=!0}}}var Po=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const[No,So,Mo,Do]=Io();let on=0,Vr;const Fo=c.forwardRef((e,r)=>So(!1)?k.createElement(Cr,Object.assign({ref:r},e)):k.createElement(qo,null,k.createElement(Cr,Object.assign({ref:r},e)))),qo=({children:e})=>{const r=Mo();return k.createElement(No,{value:r},e)},Cr=c.forwardRef((e,r)=>{var t,{children:n,asChild:s,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:d,onDismiss:l,safeZone:u,disableOutsidePointerEvents:f=!1,enabled:m=!0}=e,p=Po(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,v]=c.useState({}),{register:y,index:h,descendants:A}=Do({disableOutsidePointerEvents:f,disabled:!m,forceUpdate:()=>v({})}),[E,I]=c.useState(null),x=gt(I,y,r),b=(t=E?.ownerDocument)!==null&&t!==void 0?t:globalThis?.document,P=c.useRef(!1),_=c.useRef(!1),C=(()=>{let R=-1;return A.enabledValues().forEach((N,F)=>{N.disableOutsidePointerEvents&&(R=F)}),{isPointerEventsEnabled:h>=R,isBodyPointerEventsDisabled:on>0,pointerStyle:h>=R&&on>0?"auto":void 0}})();function B(R){var T,N;if(!u?.anchor&&!u?.dismissable||!m)return;R.defaultPrevented||(P.current=!0,R.detail.originalEvent.type==="pointerdown"&&(_.current=!0));const F=R.target;R.detail.originalEvent.type==="pointerdown"?(!((T=u?.anchor)===null||T===void 0)&&T.contains(F)||F===u?.anchor)&&R.preventDefault():!(F instanceof HTMLElement&&![u?.anchor,u?.dismissable].some(D=>D?.contains(F))&&!F.contains((N=u?.dismissable)!==null&&N!==void 0?N:null))&&R.preventDefault(),R.detail.originalEvent.type==="focusin"&&_.current&&R.preventDefault(),_.current=!1,P.current=!1}const K=xo(R=>{!C.isPointerEventsEnabled||!m||(i?.(R),d?.(R),u&&B(R),!R.defaultPrevented&&l&&l())},b),$=jo(R=>{m&&(o?.(R),d?.(R),u&&B(R),!R.defaultPrevented&&l&&l())},b);_o(R=>{!m||!(h===A.enabledCount()-1)||(a?.(R),!R.defaultPrevented&&l&&(R.preventDefault(),l()))},b),c.useEffect(()=>{if(!(!E||!m||!f))return on===0&&(Vr=b.body.style.pointerEvents,b.body.style.pointerEvents="none"),on++,()=>{on===1&&(b.body.style.pointerEvents=Vr),on--}},[E,b,f,A,m]),c.useEffect(()=>()=>A.values().forEach(R=>R.forceUpdate()),[A,E]);const S=s?Dn:"div";return k.createElement(S,Object.assign({ref:x},p,{onFocusCapture:$.onFocusCapture,onBlurCapture:$.onBlurCapture,onPointerDownCapture:K.onPointerDownCapture,style:Object.assign({pointerEvents:C.pointerStyle},p.style)}),n)}),gn=Math.min,tn=Math.max,tt=Math.round,$n=Math.floor,Fe=e=>({x:e,y:e}),Lo={left:"right",right:"left",bottom:"top",top:"bottom"},Vo={start:"end",end:"start"};function Wt(e,r,t){return tn(e,gn(r,t))}function Ln(e,r){return typeof e=="function"?e(r):e}function rn(e){return e.split("-")[0]}function Vn(e){return e.split("-")[1]}function zs(e){return e==="x"?"y":"x"}function fr(e){return e==="y"?"height":"width"}function pn(e){return["top","bottom"].includes(rn(e))?"y":"x"}function mr(e){return zs(pn(e))}function Co(e,r,t){t===void 0&&(t=!1);const n=Vn(e),s=mr(e),a=fr(s);let i=s==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return r.reference[a]>r.floating[a]&&(i=rt(i)),[i,rt(i)]}function Bo(e){const r=rt(e);return[Jt(e),r,Jt(r)]}function Jt(e){return e.replace(/start|end/g,r=>Vo[r])}function Uo(e,r,t){const n=["left","right"],s=["right","left"],a=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return t?r?s:n:r?n:s;case"left":case"right":return r?a:i;default:return[]}}function Ko(e,r,t,n){const s=Vn(e);let a=Uo(rn(e),t==="start",n);return s&&(a=a.map(i=>i+"-"+s),r&&(a=a.concat(a.map(Jt)))),a}function rt(e){return e.replace(/left|right|bottom|top/g,r=>Lo[r])}function Go(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ys(e){return typeof e!="number"?Go(e):{top:e,right:e,bottom:e,left:e}}function st(e){const{x:r,y:t,width:n,height:s}=e;return{width:n,height:s,top:t,left:r,right:r+n,bottom:t+s,x:r,y:t}}function Br(e,r,t){let{reference:n,floating:s}=e;const a=pn(r),i=mr(r),o=fr(i),d=rn(r),l=a==="y",u=n.x+n.width/2-s.width/2,f=n.y+n.height/2-s.height/2,m=n[o]/2-s[o]/2;let p;switch(d){case"top":p={x:u,y:n.y-s.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:f};break;case"left":p={x:n.x-s.width,y:f};break;default:p={x:n.x,y:n.y}}switch(Vn(r)){case"start":p[i]-=m*(t&&l?-1:1);break;case"end":p[i]+=m*(t&&l?-1:1);break}return p}const $o=async(e,r,t)=>{const{placement:n="bottom",strategy:s="absolute",middleware:a=[],platform:i}=t,o=a.filter(Boolean),d=await(i.isRTL==null?void 0:i.isRTL(r));let l=await i.getElementRects({reference:e,floating:r,strategy:s}),{x:u,y:f}=Br(l,n,d),m=n,p={},v=0;for(let y=0;y<o.length;y++){const{name:h,fn:A}=o[y],{x:E,y:I,data:x,reset:b}=await A({x:u,y:f,initialPlacement:n,placement:m,strategy:s,middlewareData:p,rects:l,platform:i,elements:{reference:e,floating:r}});u=E??u,f=I??f,p={...p,[h]:{...p[h],...x}},b&&v<=50&&(v++,typeof b=="object"&&(b.placement&&(m=b.placement),b.rects&&(l=b.rects===!0?await i.getElementRects({reference:e,floating:r,strategy:s}):b.rects),{x:u,y:f}=Br(l,m,d)),y=-1)}return{x:u,y:f,placement:m,strategy:s,middlewareData:p}};async function Ws(e,r){var t;r===void 0&&(r={});const{x:n,y:s,platform:a,rects:i,elements:o,strategy:d}=e,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:m=!1,padding:p=0}=Ln(r,e),v=Ys(p),h=o[m?f==="floating"?"reference":"floating":f],A=st(await a.getClippingRect({element:(t=await(a.isElement==null?void 0:a.isElement(h)))==null||t?h:h.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(o.floating)),boundary:l,rootBoundary:u,strategy:d})),E=f==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,I=await(a.getOffsetParent==null?void 0:a.getOffsetParent(o.floating)),x=await(a.isElement==null?void 0:a.isElement(I))?await(a.getScale==null?void 0:a.getScale(I))||{x:1,y:1}:{x:1,y:1},b=st(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:E,offsetParent:I,strategy:d}):E);return{top:(A.top-b.top+v.top)/x.y,bottom:(b.bottom-A.bottom+v.bottom)/x.y,left:(A.left-b.left+v.left)/x.x,right:(b.right-A.right+v.right)/x.x}}const Ho=e=>({name:"arrow",options:e,async fn(r){const{x:t,y:n,placement:s,rects:a,platform:i,elements:o,middlewareData:d}=r,{element:l,padding:u=0}=Ln(e,r)||{};if(l==null)return{};const f=Ys(u),m={x:t,y:n},p=mr(s),v=fr(p),y=await i.getDimensions(l),h=p==="y",A=h?"top":"left",E=h?"bottom":"right",I=h?"clientHeight":"clientWidth",x=a.reference[v]+a.reference[p]-m[p]-a.floating[v],b=m[p]-a.reference[p],P=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l));let _=P?P[I]:0;(!_||!await(i.isElement==null?void 0:i.isElement(P)))&&(_=o.floating[I]||a.floating[v]);const C=x/2-b/2,B=_/2-y[v]/2-1,K=gn(f[A],B),$=gn(f[E],B),S=K,R=_-y[v]-$,T=_/2-y[v]/2+C,N=Wt(S,T,R),F=!d.arrow&&Vn(s)!=null&&T!==N&&a.reference[v]/2-(T<S?K:$)-y[v]/2<0,q=F?T<S?T-S:T-R:0;return{[p]:m[p]+q,data:{[p]:N,centerOffset:T-N-q,...F&&{alignmentOffset:q}},reset:F}}}),zo=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var t,n;const{placement:s,middlewareData:a,rects:i,initialPlacement:o,platform:d,elements:l}=r,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...h}=Ln(e,r);if((t=a.arrow)!=null&&t.alignmentOffset)return{};const A=rn(s),E=pn(o),I=rn(o)===o,x=await(d.isRTL==null?void 0:d.isRTL(l.floating)),b=m||(I||!y?[rt(o)]:Bo(o)),P=v!=="none";!m&&P&&b.push(...Ko(o,y,v,x));const _=[o,...b],C=await Ws(r,h),B=[];let K=((n=a.flip)==null?void 0:n.overflows)||[];if(u&&B.push(C[A]),f){const T=Co(s,i,x);B.push(C[T[0]],C[T[1]])}if(K=[...K,{placement:s,overflows:B}],!B.every(T=>T<=0)){var $,S;const T=((($=a.flip)==null?void 0:$.index)||0)+1,N=_[T];if(N)return{data:{index:T,overflows:K},reset:{placement:N}};let F=(S=K.filter(q=>q.overflows[0]<=0).sort((q,D)=>q.overflows[1]-D.overflows[1])[0])==null?void 0:S.placement;if(!F)switch(p){case"bestFit":{var R;const q=(R=K.filter(D=>{if(P){const M=pn(D.placement);return M===E||M==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(M=>M>0).reduce((M,H)=>M+H,0)]).sort((D,M)=>D[1]-M[1])[0])==null?void 0:R[0];q&&(F=q);break}case"initialPlacement":F=o;break}if(s!==F)return{reset:{placement:F}}}return{}}}};async function Yo(e,r){const{placement:t,platform:n,elements:s}=e,a=await(n.isRTL==null?void 0:n.isRTL(s.floating)),i=rn(t),o=Vn(t),d=pn(t)==="y",l=["left","top"].includes(i)?-1:1,u=a&&d?-1:1,f=Ln(r,e);let{mainAxis:m,crossAxis:p,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return o&&typeof v=="number"&&(p=o==="end"?v*-1:v),d?{x:p*u,y:m*l}:{x:m*l,y:p*u}}const Wo=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var t,n;const{x:s,y:a,placement:i,middlewareData:o}=r,d=await Yo(r,e);return i===((t=o.offset)==null?void 0:t.placement)&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:s+d.x,y:a+d.y,data:{...d,placement:i}}}}},Jo=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:t,y:n,placement:s}=r,{mainAxis:a=!0,crossAxis:i=!1,limiter:o={fn:h=>{let{x:A,y:E}=h;return{x:A,y:E}}},...d}=Ln(e,r),l={x:t,y:n},u=await Ws(r,d),f=pn(rn(s)),m=zs(f);let p=l[m],v=l[f];if(a){const h=m==="y"?"top":"left",A=m==="y"?"bottom":"right",E=p+u[h],I=p-u[A];p=Wt(E,p,I)}if(i){const h=f==="y"?"top":"left",A=f==="y"?"bottom":"right",E=v+u[h],I=v-u[A];v=Wt(E,v,I)}const y=o.fn({...r,[m]:p,[f]:v});return{...y,data:{x:y.x-t,y:y.y-n,enabled:{[m]:a,[f]:i}}}}}};function pt(){return typeof window<"u"}function hn(e){return Js(e)?(e.nodeName||"").toLowerCase():"#document"}function Re(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function Le(e){var r;return(r=(Js(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function Js(e){return pt()?e instanceof Node||e instanceof Re(e).Node:!1}function re(e){return pt()?e instanceof Element||e instanceof Re(e).Element:!1}function Ie(e){return pt()?e instanceof HTMLElement||e instanceof Re(e).HTMLElement:!1}function at(e){return!pt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Re(e).ShadowRoot}function Cn(e){const{overflow:r,overflowX:t,overflowY:n,display:s}=Ne(e);return/auto|scroll|overlay|hidden|clip/.test(r+n+t)&&!["inline","contents"].includes(s)}function Xo(e){return["table","td","th"].includes(hn(e))}function vt(e){return[":popover-open",":modal"].some(r=>{try{return e.matches(r)}catch{return!1}})}function gr(e){const r=yt(),t=re(e)?Ne(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(t.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(t.contain||"").includes(n))}function Zo(e){let r=He(e);for(;Ie(r)&&!Ge(r);){if(gr(r))return r;if(vt(r))return null;r=He(r)}return null}function yt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ge(e){return["html","body","#document"].includes(hn(e))}function Ne(e){return Re(e).getComputedStyle(e)}function kt(e){return re(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function He(e){if(hn(e)==="html")return e;const r=e.assignedSlot||e.parentNode||at(e)&&e.host||Le(e);return at(r)?r.host:r}function Xs(e){const r=He(e);return Ge(r)?e.ownerDocument?e.ownerDocument.body:e.body:Ie(r)&&Cn(r)?r:Xs(r)}function We(e,r,t){var n;r===void 0&&(r=[]),t===void 0&&(t=!0);const s=Xs(e),a=s===((n=e.ownerDocument)==null?void 0:n.body),i=Re(s);if(a){const o=Xt(i);return r.concat(i,i.visualViewport||[],Cn(s)?s:[],o&&t?We(o):[])}return r.concat(s,We(s,[],t))}function Xt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Zs(e){const r=Ne(e);let t=parseFloat(r.width)||0,n=parseFloat(r.height)||0;const s=Ie(e),a=s?e.offsetWidth:t,i=s?e.offsetHeight:n,o=tt(t)!==a||tt(n)!==i;return o&&(t=a,n=i),{width:t,height:n,$:o}}function pr(e){return re(e)?e:e.contextElement}function cn(e){const r=pr(e);if(!Ie(r))return Fe(1);const t=r.getBoundingClientRect(),{width:n,height:s,$:a}=Zs(r);let i=(a?tt(t.width):t.width)/n,o=(a?tt(t.height):t.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const Qo=Fe(0);function Qs(e){const r=Re(e);return!yt()||!r.visualViewport?Qo:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function el(e,r,t){return r===void 0&&(r=!1),!t||r&&t!==Re(e)?!1:r}function sn(e,r,t,n){r===void 0&&(r=!1),t===void 0&&(t=!1);const s=e.getBoundingClientRect(),a=pr(e);let i=Fe(1);r&&(n?re(n)&&(i=cn(n)):i=cn(e));const o=el(a,t,n)?Qs(a):Fe(0);let d=(s.left+o.x)/i.x,l=(s.top+o.y)/i.y,u=s.width/i.x,f=s.height/i.y;if(a){const m=Re(a),p=n&&re(n)?Re(n):n;let v=m,y=Xt(v);for(;y&&n&&p!==v;){const h=cn(y),A=y.getBoundingClientRect(),E=Ne(y),I=A.left+(y.clientLeft+parseFloat(E.paddingLeft))*h.x,x=A.top+(y.clientTop+parseFloat(E.paddingTop))*h.y;d*=h.x,l*=h.y,u*=h.x,f*=h.y,d+=I,l+=x,v=Re(y),y=Xt(v)}}return st({width:u,height:f,x:d,y:l})}function vr(e,r){const t=kt(e).scrollLeft;return r?r.left+t:sn(Le(e)).left+t}function ea(e,r,t){t===void 0&&(t=!1);const n=e.getBoundingClientRect(),s=n.left+r.scrollLeft-(t?0:vr(e,n)),a=n.top+r.scrollTop;return{x:s,y:a}}function nl(e){let{elements:r,rect:t,offsetParent:n,strategy:s}=e;const a=s==="fixed",i=Le(n),o=r?vt(r.floating):!1;if(n===i||o&&a)return t;let d={scrollLeft:0,scrollTop:0},l=Fe(1);const u=Fe(0),f=Ie(n);if((f||!f&&!a)&&((hn(n)!=="body"||Cn(i))&&(d=kt(n)),Ie(n))){const p=sn(n);l=cn(n),u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}const m=i&&!f&&!a?ea(i,d,!0):Fe(0);return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-d.scrollLeft*l.x+u.x+m.x,y:t.y*l.y-d.scrollTop*l.y+u.y+m.y}}function tl(e){return Array.from(e.getClientRects())}function rl(e){const r=Le(e),t=kt(e),n=e.ownerDocument.body,s=tn(r.scrollWidth,r.clientWidth,n.scrollWidth,n.clientWidth),a=tn(r.scrollHeight,r.clientHeight,n.scrollHeight,n.clientHeight);let i=-t.scrollLeft+vr(e);const o=-t.scrollTop;return Ne(n).direction==="rtl"&&(i+=tn(r.clientWidth,n.clientWidth)-s),{width:s,height:a,x:i,y:o}}function sl(e,r){const t=Re(e),n=Le(e),s=t.visualViewport;let a=n.clientWidth,i=n.clientHeight,o=0,d=0;if(s){a=s.width,i=s.height;const l=yt();(!l||l&&r==="fixed")&&(o=s.offsetLeft,d=s.offsetTop)}return{width:a,height:i,x:o,y:d}}function al(e,r){const t=sn(e,!0,r==="fixed"),n=t.top+e.clientTop,s=t.left+e.clientLeft,a=Ie(e)?cn(e):Fe(1),i=e.clientWidth*a.x,o=e.clientHeight*a.y,d=s*a.x,l=n*a.y;return{width:i,height:o,x:d,y:l}}function Ur(e,r,t){let n;if(r==="viewport")n=sl(e,t);else if(r==="document")n=rl(Le(e));else if(re(r))n=al(r,t);else{const s=Qs(e);n={x:r.x-s.x,y:r.y-s.y,width:r.width,height:r.height}}return st(n)}function na(e,r){const t=He(e);return t===r||!re(t)||Ge(t)?!1:Ne(t).position==="fixed"||na(t,r)}function il(e,r){const t=r.get(e);if(t)return t;let n=We(e,[],!1).filter(o=>re(o)&&hn(o)!=="body"),s=null;const a=Ne(e).position==="fixed";let i=a?He(e):e;for(;re(i)&&!Ge(i);){const o=Ne(i),d=gr(i);!d&&o.position==="fixed"&&(s=null),(a?!d&&!s:!d&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Cn(i)&&!d&&na(e,i))?n=n.filter(u=>u!==i):s=o,i=He(i)}return r.set(e,n),n}function ol(e){let{element:r,boundary:t,rootBoundary:n,strategy:s}=e;const i=[...t==="clippingAncestors"?vt(r)?[]:il(r,this._c):[].concat(t),n],o=i[0],d=i.reduce((l,u)=>{const f=Ur(r,u,s);return l.top=tn(f.top,l.top),l.right=gn(f.right,l.right),l.bottom=gn(f.bottom,l.bottom),l.left=tn(f.left,l.left),l},Ur(r,o,s));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function ll(e){const{width:r,height:t}=Zs(e);return{width:r,height:t}}function dl(e,r,t){const n=Ie(r),s=Le(r),a=t==="fixed",i=sn(e,!0,a,r);let o={scrollLeft:0,scrollTop:0};const d=Fe(0);if(n||!n&&!a)if((hn(r)!=="body"||Cn(s))&&(o=kt(r)),n){const m=sn(r,!0,a,r);d.x=m.x+r.clientLeft,d.y=m.y+r.clientTop}else s&&(d.x=vr(s));const l=s&&!n&&!a?ea(s,o):Fe(0),u=i.left+o.scrollLeft-d.x-l.x,f=i.top+o.scrollTop-d.y-l.y;return{x:u,y:f,width:i.width,height:i.height}}function _t(e){return Ne(e).position==="static"}function Kr(e,r){if(!Ie(e)||Ne(e).position==="fixed")return null;if(r)return r(e);let t=e.offsetParent;return Le(e)===t&&(t=t.ownerDocument.body),t}function ta(e,r){const t=Re(e);if(vt(e))return t;if(!Ie(e)){let s=He(e);for(;s&&!Ge(s);){if(re(s)&&!_t(s))return s;s=He(s)}return t}let n=Kr(e,r);for(;n&&Xo(n)&&_t(n);)n=Kr(n,r);return n&&Ge(n)&&_t(n)&&!gr(n)?t:n||Zo(e)||t}const ul=async function(e){const r=this.getOffsetParent||ta,t=this.getDimensions,n=await t(e.floating);return{reference:dl(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function cl(e){return Ne(e).direction==="rtl"}const fl={convertOffsetParentRelativeRectToViewportRelativeRect:nl,getDocumentElement:Le,getClippingRect:ol,getOffsetParent:ta,getElementRects:ul,getClientRects:tl,getDimensions:ll,getScale:cn,isElement:re,isRTL:cl};function ra(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function ml(e,r){let t=null,n;const s=Le(e);function a(){var o;clearTimeout(n),(o=t)==null||o.disconnect(),t=null}function i(o,d){o===void 0&&(o=!1),d===void 0&&(d=1),a();const l=e.getBoundingClientRect(),{left:u,top:f,width:m,height:p}=l;if(o||r(),!m||!p)return;const v=$n(f),y=$n(s.clientWidth-(u+m)),h=$n(s.clientHeight-(f+p)),A=$n(u),I={rootMargin:-v+"px "+-y+"px "+-h+"px "+-A+"px",threshold:tn(0,gn(1,d))||1};let x=!0;function b(P){const _=P[0].intersectionRatio;if(_!==d){if(!x)return i();_?i(!1,_):n=setTimeout(()=>{i(!1,1e-7)},1e3)}_===1&&!ra(l,e.getBoundingClientRect())&&i(),x=!1}try{t=new IntersectionObserver(b,{...I,root:s.ownerDocument})}catch{t=new IntersectionObserver(b,I)}t.observe(e)}return i(!0),a}function Zt(e,r,t,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:d=!1}=n,l=pr(e),u=s||a?[...l?We(l):[],...We(r)]:[];u.forEach(A=>{s&&A.addEventListener("scroll",t,{passive:!0}),a&&A.addEventListener("resize",t)});const f=l&&o?ml(l,t):null;let m=-1,p=null;i&&(p=new ResizeObserver(A=>{let[E]=A;E&&E.target===l&&p&&(p.unobserve(r),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var I;(I=p)==null||I.observe(r)})),t()}),l&&!d&&p.observe(l),p.observe(r));let v,y=d?sn(e):null;d&&h();function h(){const A=sn(e);y&&!ra(y,A)&&t(),y=A,v=requestAnimationFrame(h)}return t(),()=>{var A;u.forEach(E=>{s&&E.removeEventListener("scroll",t),a&&E.removeEventListener("resize",t)}),f?.(),(A=p)==null||A.disconnect(),p=null,d&&cancelAnimationFrame(v)}}const gl=Wo,pl=Jo,vl=zo,Gr=Ho,yl=(e,r,t)=>{const n=new Map,s={platform:fl,...t},a={...s.platform,_c:n};return $o(e,r,{...s,platform:a})};var Zn=typeof document<"u"?c.useLayoutEffect:c.useEffect;function it(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,s;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!it(e[n],r[n]))return!1;return!0}if(s=Object.keys(e),t=s.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,s[n]))return!1;for(n=t;n--!==0;){const a=s[n];if(!(a==="_owner"&&e.$$typeof)&&!it(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}function sa(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function $r(e,r){const t=sa(e);return Math.round(r*t)/t}function jt(e){const r=c.useRef(e);return Zn(()=>{r.current=e}),r}function kl(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:s,elements:{reference:a,floating:i}={},transform:o=!0,whileElementsMounted:d,open:l}=e,[u,f]=c.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[m,p]=c.useState(n);it(m,n)||p(n);const[v,y]=c.useState(null),[h,A]=c.useState(null),E=c.useCallback(D=>{D!==P.current&&(P.current=D,y(D))},[]),I=c.useCallback(D=>{D!==_.current&&(_.current=D,A(D))},[]),x=a||v,b=i||h,P=c.useRef(null),_=c.useRef(null),C=c.useRef(u),B=d!=null,K=jt(d),$=jt(s),S=jt(l),R=c.useCallback(()=>{if(!P.current||!_.current)return;const D={placement:r,strategy:t,middleware:m};$.current&&(D.platform=$.current),yl(P.current,_.current,D).then(M=>{const H={...M,isPositioned:S.current!==!1};T.current&&!it(C.current,H)&&(C.current=H,Fs.flushSync(()=>{f(H)}))})},[m,r,t,$,S]);Zn(()=>{l===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,f(D=>({...D,isPositioned:!1})))},[l]);const T=c.useRef(!1);Zn(()=>(T.current=!0,()=>{T.current=!1}),[]),Zn(()=>{if(x&&(P.current=x),b&&(_.current=b),x&&b){if(K.current)return K.current(x,b,R);R()}},[x,b,R,K,B]);const N=c.useMemo(()=>({reference:P,floating:_,setReference:E,setFloating:I}),[E,I]),F=c.useMemo(()=>({reference:x,floating:b}),[x,b]),q=c.useMemo(()=>{const D={position:t,left:0,top:0};if(!F.floating)return D;const M=$r(F.floating,u.x),H=$r(F.floating,u.y);return o?{...D,transform:"translate("+M+"px, "+H+"px)",...sa(F.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:M,top:H}},[t,o,F.floating,u.x,u.y]);return c.useMemo(()=>({...u,update:R,refs:N,elements:F,floatingStyles:q}),[u,R,N,F,q])}const bl=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:s}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?Gr({element:n.current,padding:s}).fn(t):{}:n?Gr({element:n,padding:s}).fn(t):{}}}},aa=(e,r)=>({...gl(e),options:[e,r]}),ia=(e,r)=>({...pl(e),options:[e,r]}),oa=(e,r)=>({...vl(e),options:[e,r]}),la=(e,r)=>({...bl(e),options:[e,r]}),Hr=/(\w+)/g;function hl(e,r){const t=Array.isArray(e)?e:El(e);for(const n of r){if(!n)continue;let s=n;for(let a=0;a<t.length;a++){const i=s[t[a]];i!==void 0&&(s=i)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function El(e){const r=[];let t=Hr.exec(e);for(;t;){const[,n,s]=t;r.push(n||s),t=Hr.exec(e)}return r}const Ol=/{[^}]*}/g;function bt(e,...r){const t=Gs(),n=t.translations||[],s=[...r,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],t.locale[e]];return(i,o)=>{const d=hl(i,s);return o?d.replace(Ol,l=>{const u=l.substring(1,l.length-1);if(o[u]===void 0){const f=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${f}'`)}return o[u]}):d}}var Rl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const wl=c.forwardRef((e,r)=>{var{className:t,size:n="medium",title:s,transparent:a=!1,variant:i="neutral",id:o,"data-color":d}=e,l=Rl(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:u}=se(),f=qn(),m=bt("Loader");return k.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${f}`,ref:r,className:u("navds-loader",t,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":a}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??Al(i)},$e(l,["children"]),{"data-variant":i}),k.createElement("title",{id:o??`loader-${f}`},s||m("title")),k.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),k.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Al(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Tl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const yr=c.forwardRef((e,r)=>{var{as:t="button",variant:n="primary",className:s,children:a,size:i="medium",loading:o=!1,disabled:d,icon:l,iconPosition:u="left",onKeyUp:f,"data-color":m}=e,p=Tl(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:v}=se(),y=d||o?$e(p,["href"]):p,h=A=>{A.key===" "&&!d&&!o&&A.currentTarget.click()};return k.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":m??Il(n),"data-variant":_l(n)},y,{ref:r,onKeyUp:cr(f,h),className:v(s,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!l&&!a,"navds-button--disabled":d??o}),disabled:d??o?!0:void 0}),l&&u==="left"&&k.createElement("span",{className:v("navds-button__icon")},l),o&&k.createElement(wl,{size:i}),a&&k.createElement(fe,{as:"span",size:i==="medium"?"medium":"small"},a),l&&u==="right"&&k.createElement("span",{className:v("navds-button__icon")},l))});function Il(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function _l(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var jl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const xl={error:Bi,warning:Bs,info:xi,success:Oi},Pl=c.forwardRef((e,r)=>{var{children:t,className:n,variant:s,size:a="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:d=!1,closeButton:l=!1,onClose:u}=e,f=jl(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:m}=se(),p=bt("Alert"),v=xl[s];return k.createElement("div",Object.assign({},f,{"data-color":Nl(s),"data-variant":s,ref:r,className:m(n,"navds-alert",`navds-alert--${s}`,`navds-alert--${a}`,{"navds-alert--full-width":i,"navds-alert--inline":d,"navds-alert--close-button":l})}),k.createElement(v,{title:p(s),className:m("navds-alert__icon")}),k.createElement(dr,{as:"div",size:a,className:m("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},t),l&&!d&&k.createElement("div",{className:m("navds-alert__button-wrapper")},k.createElement(yr,{className:m("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:k.createElement(Vi,{title:["error","warning"].includes(s)?p("closeAlert"):p("closeMessage")})})))});function Nl(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function Sl(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Ml(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(r=>{let{brand:t,version:n}=r;return t+"/"+n}).join(" "):navigator.userAgent}function Dl(){return/apple/i.test(navigator.vendor)}function Fl(){return Sl().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function ql(){return Ml().includes("jsdom/")}const Ll="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function zr(e){let r=e.activeElement;for(;((t=r)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;r=r.shadowRoot.activeElement}return r}function Nn(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&at(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function dn(e){return"composedPath"in e?e.composedPath()[0]:e.target}function xt(e,r){if(r==null)return!1;if("composedPath"in e)return e.composedPath().includes(r);const t=e;return t.target!=null&&r.contains(t.target)}function Vl(e){return e.matches("html,body")}function en(e){return e?.ownerDocument||document}function Cl(e){return Ie(e)&&e.matches(Ll)}function Bl(e){if(!e||ql())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Pt(e,r,t){t===void 0&&(t=!0);let n=e.filter(a=>{var i;return a.parentId===r&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=t?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var d;return a.parentId===o.id&&((d=a.context)==null?void 0:d.open)})}):e,n=n.concat(s);return n}function Ul(e){return"nativeEvent"in e}function Qt(e,r){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var vn=typeof document<"u"?c.useLayoutEffect:c.useEffect;const Kl={...Ss};function Hn(e){const r=c.useRef(e);return vn(()=>{r.current=e}),r}const Gl=Kl.useInsertionEffect,$l=Gl||(e=>e());function Ue(e){const r=c.useRef(()=>{});return $l(()=>{r.current=e}),c.useCallback(function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return r.current==null?void 0:r.current(...n)},[])}const Hl="data-floating-ui-focusable",Yr="active",Wr="selected",zl={...Ss};let Jr=!1,Yl=0;const Xr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Yl++;function Wl(){const[e,r]=c.useState(()=>Jr?Xr():void 0);return vn(()=>{e==null&&r(Xr())},[]),c.useEffect(()=>{Jr=!0},[]),e}const Jl=zl.useId,Xl=Jl||Wl;function Zl(){const e=new Map;return{emit(r,t){var n;(n=e.get(r))==null||n.forEach(s=>s(t))},on(r,t){e.has(r)||e.set(r,new Set),e.get(r).add(t)},off(r,t){var n;(n=e.get(r))==null||n.delete(t)}}}const Ql=c.createContext(null),ed=c.createContext(null),da=()=>{var e;return((e=c.useContext(Ql))==null?void 0:e.id)||null},kr=()=>c.useContext(ed);function br(e){return"data-floating-ui-"+e}function je(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Zr=br("safe-polygon");function Nt(e,r,t){if(t&&!Qt(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n?.[r]}return e?.[r]}function St(e){return typeof e=="function"?e():e}function nd(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,dataRef:s,events:a,elements:i}=e,{enabled:o=!0,delay:d=0,handleClose:l=null,mouseOnly:u=!1,restMs:f=0,move:m=!0}=r,p=kr(),v=da(),y=Hn(l),h=Hn(d),A=Hn(t),E=Hn(f),I=c.useRef(),x=c.useRef(-1),b=c.useRef(),P=c.useRef(-1),_=c.useRef(!0),C=c.useRef(!1),B=c.useRef(()=>{}),K=c.useRef(!1),$=c.useCallback(()=>{var q;const D=(q=s.current.openEvent)==null?void 0:q.type;return D?.includes("mouse")&&D!=="mousedown"},[s]);c.useEffect(()=>{if(!o)return;function q(D){let{open:M}=D;M||(je(x),je(P),_.current=!0,K.current=!1)}return a.on("openchange",q),()=>{a.off("openchange",q)}},[o,a]),c.useEffect(()=>{if(!o||!y.current||!t)return;function q(M){$()&&n(!1,M,"hover")}const D=en(i.floating).documentElement;return D.addEventListener("mouseleave",q),()=>{D.removeEventListener("mouseleave",q)}},[i.floating,t,n,o,y,$]);const S=c.useCallback(function(q,D,M){D===void 0&&(D=!0),M===void 0&&(M="hover");const H=Nt(h.current,"close",I.current);H&&!b.current?(je(x),x.current=window.setTimeout(()=>n(!1,q,M),H)):D&&(je(x),n(!1,q,M))},[h,n]),R=Ue(()=>{B.current(),b.current=void 0}),T=Ue(()=>{if(C.current){const q=en(i.floating).body;q.style.pointerEvents="",q.removeAttribute(Zr),C.current=!1}}),N=Ue(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);c.useEffect(()=>{if(!o)return;function q(W){if(je(x),_.current=!1,u&&!Qt(I.current)||St(E.current)>0&&!Nt(h.current,"open"))return;const J=Nt(h.current,"open",I.current);J?x.current=window.setTimeout(()=>{A.current||n(!0,W,"hover")},J):t||n(!0,W,"hover")}function D(W){if(N()){T();return}B.current();const J=en(i.floating);if(je(P),K.current=!1,y.current&&s.current.floatingContext){t||je(x),b.current=y.current({...s.current.floatingContext,tree:p,x:W.clientX,y:W.clientY,onClose(){T(),R(),N()||S(W,!0,"safe-polygon")}});const ge=b.current;J.addEventListener("mousemove",ge),B.current=()=>{J.removeEventListener("mousemove",ge)};return}(I.current==="touch"?!Nn(i.floating,W.relatedTarget):!0)&&S(W)}function M(W){N()||s.current.floatingContext&&(y.current==null||y.current({...s.current.floatingContext,tree:p,x:W.clientX,y:W.clientY,onClose(){T(),R(),N()||S(W)}})(W))}function H(){je(x)}function Y(W){N()||S(W,!1)}if(re(i.domReference)){const W=i.domReference,J=i.floating;return t&&W.addEventListener("mouseleave",M),m&&W.addEventListener("mousemove",q,{once:!0}),W.addEventListener("mouseenter",q),W.addEventListener("mouseleave",D),J&&(J.addEventListener("mouseleave",M),J.addEventListener("mouseenter",H),J.addEventListener("mouseleave",Y)),()=>{t&&W.removeEventListener("mouseleave",M),m&&W.removeEventListener("mousemove",q),W.removeEventListener("mouseenter",q),W.removeEventListener("mouseleave",D),J&&(J.removeEventListener("mouseleave",M),J.removeEventListener("mouseenter",H),J.removeEventListener("mouseleave",Y))}}},[i,o,e,u,m,S,R,T,n,t,A,p,h,y,s,N,E]),vn(()=>{var q;if(o&&t&&(q=y.current)!=null&&q.__options.blockPointerEvents&&$()){C.current=!0;const M=i.floating;if(re(i.domReference)&&M){var D;const H=en(i.floating).body;H.setAttribute(Zr,"");const Y=i.domReference,W=p==null||(D=p.nodesRef.current.find(J=>J.id===v))==null||(D=D.context)==null?void 0:D.elements.floating;return W&&(W.style.pointerEvents=""),H.style.pointerEvents="none",Y.style.pointerEvents="auto",M.style.pointerEvents="auto",()=>{H.style.pointerEvents="",Y.style.pointerEvents="",M.style.pointerEvents=""}}}},[o,t,v,i,p,y,$]),vn(()=>{t||(I.current=void 0,K.current=!1,R(),T())},[t,R,T]),c.useEffect(()=>()=>{R(),je(x),je(P),T()},[o,i.domReference,R,T]);const F=c.useMemo(()=>{function q(D){I.current=D.pointerType}return{onPointerDown:q,onPointerEnter:q,onMouseMove(D){const{nativeEvent:M}=D;function H(){!_.current&&!A.current&&n(!0,M,"hover")}u&&!Qt(I.current)||t||St(E.current)===0||K.current&&D.movementX**2+D.movementY**2<2||(je(P),I.current==="touch"?H():(K.current=!0,P.current=window.setTimeout(H,St(E.current))))}}},[u,n,t,A,E]);return c.useMemo(()=>o?{reference:F}:{},[o,F])}function Mt(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&at(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function td(e){return"composedPath"in e?e.composedPath()[0]:e.target}const rd={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},sd={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Qr=e=>{var r,t;return{escapeKey:typeof e=="boolean"?e:(r=e?.escapeKey)!=null?r:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function ad(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,elements:s,dataRef:a}=e,{enabled:i=!0,escapeKey:o=!0,outsidePress:d=!0,outsidePressEvent:l="pointerdown",referencePress:u=!1,referencePressEvent:f="pointerdown",ancestorScroll:m=!1,bubbles:p,capture:v}=r,y=kr(),h=Ue(typeof d=="function"?d:()=>!1),A=typeof d=="function"?h:d,E=c.useRef(!1),I=c.useRef(!1),{escapeKey:x,outsidePress:b}=Qr(p),{escapeKey:P,outsidePress:_}=Qr(v),C=c.useRef(!1),B=Ue(N=>{var F;if(!t||!i||!o||N.key!=="Escape"||C.current)return;const q=(F=a.current.floatingContext)==null?void 0:F.nodeId,D=y?Pt(y.nodesRef.current,q):[];if(!x&&(N.stopPropagation(),D.length>0)){let M=!0;if(D.forEach(H=>{var Y;if((Y=H.context)!=null&&Y.open&&!H.context.dataRef.current.__escapeKeyBubbles){M=!1;return}}),!M)return}n(!1,Ul(N)?N.nativeEvent:N,"escape-key")}),K=Ue(N=>{var F;const q=()=>{var D;B(N),(D=dn(N))==null||D.removeEventListener("keydown",q)};(F=dn(N))==null||F.addEventListener("keydown",q)}),$=Ue(N=>{var F;const q=E.current;E.current=!1;const D=I.current;if(I.current=!1,l==="click"&&D||q||typeof A=="function"&&!A(N))return;const M=dn(N),H="["+br("inert")+"]",Y=en(s.floating).querySelectorAll(H);let W=re(M)?M:null;for(;W&&!Ge(W);){const ce=He(W);if(Ge(ce)||!re(ce))break;W=ce}if(Y.length&&re(M)&&!Vl(M)&&!Nn(M,s.floating)&&Array.from(Y).every(ce=>!Nn(W,ce)))return;if(Ie(M)&&T){const ce=Ge(M),le=Ne(M),X=/auto|scroll/,ae=ce||X.test(le.overflowX),pe=ce||X.test(le.overflowY),ye=ae&&M.clientWidth>0&&M.scrollWidth>M.clientWidth,ke=pe&&M.clientHeight>0&&M.scrollHeight>M.clientHeight,Qe=le.direction==="rtl",Ve=ke&&(Qe?N.offsetX<=M.offsetWidth-M.clientWidth:N.offsetX>M.clientWidth),Ce=ye&&N.offsetY>M.clientHeight;if(Ve||Ce)return}const J=(F=a.current.floatingContext)==null?void 0:F.nodeId,Se=y&&Pt(y.nodesRef.current,J).some(ce=>{var le;return xt(N,(le=ce.context)==null?void 0:le.elements.floating)});if(xt(N,s.floating)||xt(N,s.domReference)||Se)return;const ge=y?Pt(y.nodesRef.current,J):[];if(ge.length>0){let ce=!0;if(ge.forEach(le=>{var X;if((X=le.context)!=null&&X.open&&!le.context.dataRef.current.__outsidePressBubbles){ce=!1;return}}),!ce)return}n(!1,N,"outside-press")}),S=Ue(N=>{var F;const q=()=>{var D;$(N),(D=dn(N))==null||D.removeEventListener(l,q)};(F=dn(N))==null||F.addEventListener(l,q)});c.useEffect(()=>{if(!t||!i)return;a.current.__escapeKeyBubbles=x,a.current.__outsidePressBubbles=b;let N=-1;function F(Y){n(!1,Y,"ancestor-scroll")}function q(){window.clearTimeout(N),C.current=!0}function D(){N=window.setTimeout(()=>{C.current=!1},yt()?5:0)}const M=en(s.floating);o&&(M.addEventListener("keydown",P?K:B,P),M.addEventListener("compositionstart",q),M.addEventListener("compositionend",D)),A&&M.addEventListener(l,_?S:$,_);let H=[];return m&&(re(s.domReference)&&(H=We(s.domReference)),re(s.floating)&&(H=H.concat(We(s.floating))),!re(s.reference)&&s.reference&&s.reference.contextElement&&(H=H.concat(We(s.reference.contextElement)))),H=H.filter(Y=>{var W;return Y!==((W=M.defaultView)==null?void 0:W.visualViewport)}),H.forEach(Y=>{Y.addEventListener("scroll",F,{passive:!0})}),()=>{o&&(M.removeEventListener("keydown",P?K:B,P),M.removeEventListener("compositionstart",q),M.removeEventListener("compositionend",D)),A&&M.removeEventListener(l,_?S:$,_),H.forEach(Y=>{Y.removeEventListener("scroll",F)}),window.clearTimeout(N)}},[a,s,o,A,l,t,n,m,i,x,b,B,P,K,$,_,S]),c.useEffect(()=>{E.current=!1},[A,l]);const R=c.useMemo(()=>({onKeyDown:B,...u&&{[rd[f]]:N=>{n(!1,N.nativeEvent,"reference-press")},...f!=="click"&&{onClick(N){n(!1,N.nativeEvent,"reference-press")}}}}),[B,n,u,f]),T=c.useMemo(()=>({onKeyDown:B,onMouseDown(){I.current=!0},onMouseUp(){I.current=!0},[sd[l]]:()=>{E.current=!0}}),[B,l]);return c.useMemo(()=>i?{reference:R,floating:T}:{},[i,R,T])}function id(e){const{open:r=!1,onOpenChange:t,elements:n}=e,s=Xl(),a=c.useRef({}),[i]=c.useState(()=>Zl()),o=da()!=null,[d,l]=c.useState(n.reference),u=Ue((p,v,y)=>{a.current.openEvent=p?v:void 0,i.emit("openchange",{open:p,event:v,reason:y,nested:o}),t?.(p,v,y)}),f=c.useMemo(()=>({setPositionReference:l}),[]),m=c.useMemo(()=>({reference:d||n.reference||null,floating:n.floating||null,domReference:n.reference}),[d,n.reference,n.floating]);return c.useMemo(()=>({dataRef:a,open:r,onOpenChange:u,elements:m,events:i,floatingId:s,refs:f}),[r,u,m,i,s,f])}function ua(e){e===void 0&&(e={});const{nodeId:r}=e,t=id({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||t,s=n.elements,[a,i]=c.useState(null),[o,d]=c.useState(null),u=s?.domReference||a,f=c.useRef(null),m=kr();vn(()=>{u&&(f.current=u)},[u]);const p=kl({...e,elements:{...s,...o&&{reference:o}}}),v=c.useCallback(I=>{const x=re(I)?{getBoundingClientRect:()=>I.getBoundingClientRect(),getClientRects:()=>I.getClientRects(),contextElement:I}:I;d(x),p.refs.setReference(x)},[p.refs]),y=c.useCallback(I=>{(re(I)||I===null)&&(f.current=I,i(I)),(re(p.refs.reference.current)||p.refs.reference.current===null||I!==null&&!re(I))&&p.refs.setReference(I)},[p.refs]),h=c.useMemo(()=>({...p.refs,setReference:y,setPositionReference:v,domReference:f}),[p.refs,y,v]),A=c.useMemo(()=>({...p.elements,domReference:u}),[p.elements,u]),E=c.useMemo(()=>({...p,...n,refs:h,elements:A,nodeId:r}),[p,h,A,r,n]);return vn(()=>{n.dataRef.current.floatingContext=E;const I=m?.nodesRef.current.find(x=>x.id===r);I&&(I.context=E)}),c.useMemo(()=>({...p,context:E,refs:h,elements:A}),[p,h,A,E])}function Dt(){return Fl()&&Dl()}function od(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,events:s,dataRef:a,elements:i}=e,{enabled:o=!0,visibleOnly:d=!0}=r,l=c.useRef(!1),u=c.useRef(-1),f=c.useRef(!0);c.useEffect(()=>{if(!o)return;const p=Re(i.domReference);function v(){!t&&Ie(i.domReference)&&i.domReference===zr(en(i.domReference))&&(l.current=!0)}function y(){f.current=!0}function h(){f.current=!1}return p.addEventListener("blur",v),Dt()&&(p.addEventListener("keydown",y,!0),p.addEventListener("pointerdown",h,!0)),()=>{p.removeEventListener("blur",v),Dt()&&(p.removeEventListener("keydown",y,!0),p.removeEventListener("pointerdown",h,!0))}},[i.domReference,t,o]),c.useEffect(()=>{if(!o)return;function p(v){let{reason:y}=v;(y==="reference-press"||y==="escape-key")&&(l.current=!0)}return s.on("openchange",p),()=>{s.off("openchange",p)}},[s,o]),c.useEffect(()=>()=>{je(u)},[]);const m=c.useMemo(()=>({onMouseLeave(){l.current=!1},onFocus(p){if(l.current)return;const v=dn(p.nativeEvent);if(d&&re(v)){if(Dt()&&!p.relatedTarget){if(!f.current&&!Cl(v))return}else if(!Bl(v))return}n(!0,p.nativeEvent,"focus")},onBlur(p){l.current=!1;const v=p.relatedTarget,y=p.nativeEvent,h=re(v)&&v.hasAttribute(br("focus-guard"))&&v.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var A;const E=zr(i.domReference?i.domReference.ownerDocument:document);!v&&E===i.domReference||Nn((A=a.current.floatingContext)==null?void 0:A.refs.floating.current,E)||Nn(i.domReference,E)||h||n(!1,y,"focus")})}}),[a,i.domReference,n,d]);return c.useMemo(()=>o?{reference:m}:{},[o,m])}function Ft(e,r,t){const n=new Map,s=t==="item";let a=e;if(s&&e){const{[Yr]:i,[Wr]:o,...d}=e;a=d}return{...t==="floating"&&{tabIndex:-1,[Hl]:""},...a,...r.map(i=>{const o=i?i[t]:null;return typeof o=="function"?e?o(e):null:o}).concat(e).reduce((i,o)=>(o&&Object.entries(o).forEach(d=>{let[l,u]=d;if(!(s&&[Yr,Wr].includes(l)))if(l.indexOf("on")===0){if(n.has(l)||n.set(l,[]),typeof u=="function"){var f;(f=n.get(l))==null||f.push(u),i[l]=function(){for(var m,p=arguments.length,v=new Array(p),y=0;y<p;y++)v[y]=arguments[y];return(m=n.get(l))==null?void 0:m.map(h=>h(...v)).find(h=>h!==void 0)}}}else i[l]=u}),i),{})}}function ld(e){e===void 0&&(e=[]);const r=e.map(o=>o?.reference),t=e.map(o=>o?.floating),n=e.map(o=>o?.item),s=c.useCallback(o=>Ft(o,e,"reference"),r),a=c.useCallback(o=>Ft(o,e,"floating"),t),i=c.useCallback(o=>Ft(o,e,"item"),n);return c.useMemo(()=>({getReferenceProps:s,getFloatingProps:a,getItemProps:i}),[s,a,i])}function dd(e,r,t){t===void 0&&(t=!0);let n=e.filter(a=>{var i;return a.parentId===r&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=t?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var d;return a.parentId===o.id&&((d=a.context)==null?void 0:d.open)})}):e,n=n.concat(s);return n}function es(e,r){const[t,n]=e;let s=!1;const a=r.length;for(let i=0,o=a-1;i<a;o=i++){const[d,l]=r[i]||[0,0],[u,f]=r[o]||[0,0];l>=n!=f>=n&&t<=(u-d)*(n-l)/(f-l)+d&&(s=!s)}return s}function ud(e,r){return e[0]>=r.x&&e[0]<=r.x+r.width&&e[1]>=r.y&&e[1]<=r.y+r.height}function cd(e){e===void 0&&(e={});const{buffer:r=.5,blockPointerEvents:t=!1,requireIntent:n=!0}=e;let s,a=!1,i=null,o=null,d=performance.now();function l(f,m){const p=performance.now(),v=p-d;if(i===null||o===null||v===0)return i=f,o=m,d=p,null;const y=f-i,h=m-o,E=Math.sqrt(y*y+h*h)/v;return i=f,o=m,d=p,E}const u=f=>{let{x:m,y:p,placement:v,elements:y,onClose:h,nodeId:A,tree:E}=f;return function(x){function b(){clearTimeout(s),h()}if(clearTimeout(s),!y.domReference||!y.floating||v==null||m==null||p==null)return;const{clientX:P,clientY:_}=x,C=[P,_],B=td(x),K=x.type==="mouseleave",$=Mt(y.floating,B),S=Mt(y.domReference,B),R=y.domReference.getBoundingClientRect(),T=y.floating.getBoundingClientRect(),N=v.split("-")[0],F=m>T.right-T.width/2,q=p>T.bottom-T.height/2,D=ud(C,R),M=T.width>R.width,H=T.height>R.height,Y=(M?R:T).left,W=(M?R:T).right,J=(H?R:T).top,Se=(H?R:T).bottom;if($&&(a=!0,!K))return;if(S&&(a=!1),S&&!K){a=!0;return}if(K&&re(x.relatedTarget)&&Mt(y.floating,x.relatedTarget)||E&&dd(E.nodesRef.current,A).some(le=>{let{context:X}=le;return X?.open}))return;if(N==="top"&&p>=R.bottom-1||N==="bottom"&&p<=R.top+1||N==="left"&&m>=R.right-1||N==="right"&&m<=R.left+1)return b();let ge=[];switch(N){case"top":ge=[[Y,R.top+1],[Y,T.bottom-1],[W,T.bottom-1],[W,R.top+1]];break;case"bottom":ge=[[Y,T.top+1],[Y,R.bottom-1],[W,R.bottom-1],[W,T.top+1]];break;case"left":ge=[[T.right-1,Se],[T.right-1,J],[R.left+1,J],[R.left+1,Se]];break;case"right":ge=[[R.right-1,Se],[R.right-1,J],[T.left+1,J],[T.left+1,Se]];break}function ce(le){let[X,ae]=le;switch(N){case"top":{const pe=[M?X+r/2:F?X+r*4:X-r*4,ae+r+1],ye=[M?X-r/2:F?X+r*4:X-r*4,ae+r+1],ke=[[T.left,F||M?T.bottom-r:T.top],[T.right,F?M?T.bottom-r:T.top:T.bottom-r]];return[pe,ye,...ke]}case"bottom":{const pe=[M?X+r/2:F?X+r*4:X-r*4,ae-r],ye=[M?X-r/2:F?X+r*4:X-r*4,ae-r],ke=[[T.left,F||M?T.top+r:T.bottom],[T.right,F?M?T.top+r:T.bottom:T.top+r]];return[pe,ye,...ke]}case"left":{const pe=[X+r+1,H?ae+r/2:q?ae+r*4:ae-r*4],ye=[X+r+1,H?ae-r/2:q?ae+r*4:ae-r*4];return[...[[q||H?T.right-r:T.left,T.top],[q?H?T.right-r:T.left:T.right-r,T.bottom]],pe,ye]}case"right":{const pe=[X-r,H?ae+r/2:q?ae+r*4:ae-r*4],ye=[X-r,H?ae-r/2:q?ae+r*4:ae-r*4],ke=[[q||H?T.left+r:T.right,T.top],[q?H?T.left+r:T.right:T.left+r,T.bottom]];return[pe,ye,...ke]}}}if(!es([P,_],ge)){if(a&&!D)return b();if(!K&&n){const le=l(x.clientX,x.clientY);if(le!==null&&le<.1)return b()}es([P,_],ce([m,p]))?!a&&n&&(s=window.setTimeout(b,40)):b()}}};return u.__options={blockPointerEvents:t},u}const hr=()=>{const{cn:e}=se();return k.createElement(Us,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},fd=()=>{const{cn:e}=se();return k.createElement(Us,{title:bt("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var md=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const gd=c.forwardRef((e,r)=>{var{className:t,header:n,children:s,open:a,defaultOpen:i=!1,onClick:o,size:d="medium",onOpenChange:l}=e,u=md(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:f}=se(),[m,p]=Vs({defaultValue:i,value:a,onChange:l}),v=d==="small"?"small":"medium";return k.createElement("div",{className:f("navds-read-more",`navds-read-more--${d}`,t,{"navds-read-more--open":m}),"data-volume":"low"},k.createElement("button",Object.assign({},u,{ref:r,type:"button",className:f("navds-read-more__button","navds-body-short",{"navds-body-short--small":d==="small"}),onClick:cr(o,()=>p(y=>!y)),"aria-expanded":m,"data-state":m?"open":"closed"}),k.createElement(Cs,{className:f("navds-read-more__expand-icon"),"aria-hidden":!0}),k.createElement("span",null,n)),k.createElement(dr,{as:"div","aria-hidden":!m,className:f("navds-read-more__content",{"navds-read-more__content--closed":!m}),size:v,"data-state":m?"open":"closed"},s))}),ot=c.createContext(null),ht=(e,r)=>{var t,n,s;const{size:a,error:i,errorId:o}=e,d=c.useContext(ot),l=qn(),u=(t=e.id)!==null&&t!==void 0?t:`${r}-${l}`,f=o??`${r}-error-${l}`,m=`${r}-description-${l}`,p=d?.disabled||e.disabled,v=(d?.readOnly||e.readOnly)&&!p||void 0,y=!p&&!v&&!!(i||d?.error),h=!p&&!v&&!!i&&typeof i!="boolean",A=Object.assign({},y?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:h,hasError:y,errorId:f,inputDescriptionId:m,size:(n=a??d?.size)!==null&&n!==void 0?n:"medium",readOnly:v,inputProps:Object.assign(Object.assign({id:u},A),{"aria-describedby":Sn(e["aria-describedby"],{[m]:e.description&&!lt(e.description),[f]:h,[(s=d?.errorId)!==null&&s!==void 0?s:""]:y&&d?.error})||void 0,disabled:p})}};function lt(e,r=!0){if(k.isValidElement(e)){if(e.type===gd)return!0;if(e.props.children&&r)return lt(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>lt(t,r));return!1}const[Tc,pd]=mt();var vd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const[Ic,ca]=mt({errorMessage:"useDateInputContext must be used with DateInputContext"}),fa=c.forwardRef((e,r)=>{const{className:t,hideLabel:n=!1,label:s,description:a,variant:i="datepicker",setAnchorRef:o}=e,d=vd(e,["className","hideLabel","label","description","variant","setAnchorRef"]),l=c.useRef(null),u=pd().translate,{cn:f}=se(),m=i==="datepicker",p={prefix:m?"datepicker-input":"monthpicker-input",iconTitle:{open:m?"openDatePicker":"openMonthPicker",close:m?"closeDatePicker":"closeMonthPicker"}},v=ca(),{inputProps:y,size:h="medium",inputDescriptionId:A,errorId:E,showErrorMsg:I,hasError:x,readOnly:b}=ht(e,p.prefix);return k.createElement("div",{className:f(t,"navds-form-field",`navds-form-field--${h}`,"navds-date__field",{"navds-text-field--error":x,"navds-date__field--error":x,"navds-form-field--disabled":!!y.disabled,"navds-text-field--disabled":!!y.disabled,"navds-form-field--readonly":b,"navds-text-field--readonly":b,"navds-date__field--readonly":b})},k.createElement(fe,{htmlFor:y.id,size:h,className:f("navds-form-field__label",{"navds-sr-only":n})},b&&k.createElement(hr,null),s),!!a&&k.createElement(ne,{as:"div",className:f("navds-form-field__description",{"navds-sr-only":n}),id:A,size:h},a),k.createElement("div",{className:f("navds-date__field-wrapper")},k.createElement("input",Object.assign({ref:r},$e(d,["error","errorId","size"]),y,{autoComplete:"off","aria-controls":v?.open?v.ariaId:void 0,readOnly:b,className:f("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${h}`),size:m?11:14})),k.createElement("button",{disabled:y.disabled||b,tabIndex:b||v?.open?-1:0,onClick:()=>{v?.onOpen(),o?.(l.current)},type:"button",className:f("navds-date__field-button"),ref:l},k.createElement(ki,{title:u(p.iconTitle[v?.open?"close":"open"])}))),k.createElement("div",{className:f("navds-form-field__error"),id:E,"aria-relevant":"additions removals","aria-live":"polite"},I&&k.createElement(ur,{size:h,showIcon:!0},e.error)))});c.forwardRef((e,r)=>k.createElement(fa,Object.assign({},e,{ref:r})));c.forwardRef((e,r)=>k.createElement(fa,Object.assign({},e,{variant:"monthpicker",ref:r})));var yd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const kd=c.forwardRef((e,r)=>{var{className:t}=e,n=yd(e,["className"]);const{cn:s}=se();return k.createElement("div",Object.assign({},n,{ref:r,className:s("navds-popover__content",t)}))});var bd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const er=c.forwardRef((e,r)=>{var{className:t,children:n,anchorEl:s,arrow:a=!0,open:i,onClose:o,placement:d="top",offset:l,strategy:u,flip:f=!0}=e,m=bd(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:p}=se(),v=c.useRef(null),y=Ks(!1)!==void 0,h=ca(!1),A=u??(y?"fixed":"absolute"),E=h?!1:f,I=Mn(!1),{update:x,refs:b,placement:P,middlewareData:{arrow:{x:_,y:C}={}},floatingStyles:B}=ua({strategy:A,placement:d,open:i,middleware:[aa(l??(I?8:a?16:4)),E&&oa({padding:5,fallbackPlacements:["bottom","top"]}),ia({padding:12}),la({element:v,padding:8})]});mn(()=>{b.setReference(s)},[s]);const K=gt(b.setFloating,r);mn(()=>{if(!b.reference.current||!b.floating.current||!i)return;const S=Zt(b.reference.current,b.floating.current,x);return()=>S()},[b.floating,b.reference,x,i,s]);const $={top:"bottom",right:"left",bottom:"top",left:"right"}[P.split("-")[0]];return k.createElement(Fo,{asChild:!0,safeZone:{anchor:s,dismissable:b.floating.current},onDismiss:()=>i&&o?.(),enabled:i},k.createElement("div",Object.assign({ref:K},m,{className:p("navds-popover",t,{"navds-popover--hidden":!i||!s}),style:Object.assign(Object.assign({},m.style),B),"data-placement":P,"aria-hidden":!i||!s}),n,a&&!I&&k.createElement("div",{ref:S=>{v.current=S},style:Object.assign(Object.assign(Object.assign({},_!=null?{left:_}:{}),C!=null?{top:C}:{}),$?{[$]:"-0.5rem"}:{}),className:p("navds-popover__arrow")})))});er.Content=kd;function me(e,r,t,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([s,a])=>[`--__${e}c-${r}-${t}-${s}`,a])):{}}const hd={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},ns=(e,r,t,n,s,a)=>r.split(" ").map((i,o,d)=>{var l;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let u=`var(--${a}-${t}-${i})`;if(n.includes(i))u=i==="px"?"1px":i;else if(i.startsWith("space"))u=`var(--${a}-${i})`;else{const f=`--${a}-spacing-${i}`;u=`var(${(l=hd[f])!==null&&l!==void 0?l:f})`}return s?i==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function xe(e,r,t,n,s,a=!1,i=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${r}-${t}-xs`]:ns(t,s,n,i,a,e)};const o={};return Object.entries(s).forEach(([d,l])=>{o[`--__${e}c-${r}-${t}-${d}`]=ns(t,l,n,i,a,e)}),o}const Ed=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Od=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:s,margin:a,marginInline:i,marginBlock:o,width:d,minWidth:l,maxWidth:u,height:f,minHeight:m,maxHeight:p,position:v,inset:y,top:h,right:A,left:E,bottom:I,overflow:x,overflowX:b,overflowY:P,flexBasis:_,flexGrow:C,flexShrink:B,gridColumn:K})=>{const $=Mn(!1),{cn:S}=se(),R=$?"ax":"a",T=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},xe(R,"r","p","spacing",t)),xe(R,"r","pi","spacing",n)),xe(R,"r","pb","spacing",s)),xe(R,"r","m","spacing",a)),xe(R,"r","mi","spacing",i)),xe(R,"r","mb","spacing",o)),me(R,"r","w",d)),me(R,"r","minw",l)),me(R,"r","maxw",u)),me(R,"r","h",f)),me(R,"r","minh",m)),me(R,"r","maxh",p)),me(R,"r","position",v)),xe(R,"r","inset","spacing",y)),xe(R,"r","top","spacing",h)),xe(R,"r","right","spacing",A)),xe(R,"r","bottom","spacing",I)),xe(R,"r","left","spacing",E)),me(R,"r","overflow",x)),me(R,"r","overflowx",b)),me(R,"r","overflowy",P)),me(R,"r","flex-basis",_)),me(R,"r","flex-grow",C)),me(R,"r","flex-shrink",B)),me(R,"r","grid-column",K));return k.createElement(Dn,{className:S({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":s,"navds-r-m":a,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":d,"navds-r-minw":l,"navds-r-maxw":u,"navds-r-h":f,"navds-r-minh":m,"navds-r-maxh":p,"navds-r-position":v,"navds-r-inset":y,"navds-r-top":h,"navds-r-right":A,"navds-r-bottom":I,"navds-r-left":E,"navds-r-overflow":x,"navds-r-overflowx":b,"navds-r-overflowy":P,"navds-r-flex-basis":_,"navds-r-flex-grow":C,"navds-r-flex-shrink":B,"navds-r-grid-column":K}),style:T},e)};var Rd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ma=c.forwardRef((e,r)=>{var{children:t,className:n,as:s="div",align:a,justify:i,wrap:o=!0,gap:d,style:l,direction:u="row",asChild:f}=e,m=Rd(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const v=Mn(!1)?"ax":"a",{cn:y}=se(),h=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},l),xe(v,"stack","gap","spacing",d)),me(v,"stack","direction",u)),me(v,"stack","align",a)),me(v,"stack","justify",i)),A=f?Dn:s;return k.createElement(Od,Object.assign({},m),k.createElement(A,Object.assign({},$e(m,Ed),{ref:r,style:h,className:y("navds-stack",n,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":d,"navds-stack-align":a,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":o})}),t))});var wd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ve=c.forwardRef((e,r)=>{var{as:t="div"}=e,n=wd(e,["as"]);return k.createElement(ma,Object.assign({as:t},n,{ref:r,direction:"row"}))});var Ad=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const qe=c.forwardRef((e,r)=>{var{as:t="div"}=e,n=Ad(e,["as"]);return k.createElement(ma,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))});var Td=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ga=c.forwardRef((e,r)=>{var{as:t="a",className:n,underline:s=!0,variant:a,inlineText:i=!1,"data-color":o}=e,d=Td(e,["as","className","underline","variant","inlineText","data-color"]);const l=Mn(!1),{cn:u}=se();let f;return l?f=a:f=a??"action",k.createElement(t,Object.assign({"data-color":o??Id(f),"data-variant":f},d,{ref:r,className:u("navds-link",n,{[`navds-link--${f}`]:f,"navds-link--remove-underline":!s,"navds-link--inline-text":i})}))});function Id(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var _d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const jd=c.forwardRef((e,r)=>{var{children:t,className:n,variant:s,size:a="medium",icon:i,"data-color":o}=e,d=_d(e,["children","className","variant","size","icon","data-color"]);const{cn:l}=se(),u=s?.endsWith("-filled")&&"strong",f=s?.endsWith("-moderate")&&"moderate";return k.createElement(ne,Object.assign({"data-color":o??xd(s),"data-variant":u||f||"outline"},d,{ref:r,as:"span",size:a==="medium"?"medium":"small",className:l("navds-tag",n,`navds-tag--${s}`,`navds-tag--${a}`)}),i&&k.createElement("span",{className:l("navds-tag__icon--left")},i),t)});function xd(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var Pd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const pa=c.forwardRef((e,r)=>{var{children:t,className:n,arrow:s=!0,placement:a="top",open:i,defaultOpen:o=!1,onOpenChange:d,offset:l,content:u,delay:f=150,id:m,keys:p,maxChar:v=80,describesChild:y=!1}=e,h=Pd(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:A}=se(),[E,I]=Vs({defaultValue:o,value:i,onChange:d}),x=c.useRef(null),b=Ks(!1),P=b?b.ref.current:void 0,{x:_,y:C,strategy:B,context:K,placement:$,middlewareData:{arrow:{x:S,y:R}={},hide:{referenceHidden:T}={}},refs:N}=ua({placement:a,open:E,onOpenChange:Y=>I(Y),middleware:[aa(l??(s?8:4)),ia(),oa({padding:5,fallbackPlacements:["bottom","top"]}),la({element:x,padding:5})],whileElementsMounted:b?(Y,W,J)=>Zt(Y,W,J,{animationFrame:!0}):Zt,strategy:b?"fixed":void 0}),{getReferenceProps:F,getFloatingProps:q}=ld([nd(K,{handleClose:cd(),restMs:f}),od(K),ad(K)]),D=qn(m),M=gt(r,N.setFloating);if(!t||t?.type===k.Fragment||t===k.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;u?.length>v&&E&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const H=y?E?{"aria-describedby":D}:{title:u}:{"aria-label":u};return k.createElement(k.Fragment,null,k.createElement(Dn,Object.assign({ref:N.setReference},F(),H,{"aria-keyshortcuts":p?p.join("+"):void 0}),t),k.createElement(wo,{rootElement:P,asChild:!0},E&&k.createElement("div",Object.assign({},q(Object.assign(Object.assign({},h),{ref:M,style:{position:B,top:C??0,left:_??0,visibility:T?"hidden":"visible"},role:"tooltip",id:D,className:A("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":$,"data-state":"open"}),u,p&&k.createElement("span",{className:A("navds-tooltip__keys"),"aria-hidden":!0},p.map(Y=>k.createElement(nt,{as:"kbd",key:Y,className:A("navds-tooltip__key")},Y))),s&&k.createElement("div",{ref:Y=>{x.current=Y},className:A("navds-tooltip__arrow"),style:{left:S!=null?`${S}px`:"",top:R!=null?`${R}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[$]]:"-3.5px"}}))))}),Nd=e=>{const r=ht(e,"fieldset");return Object.assign(Object.assign({},r),{inputProps:{"aria-describedby":Sn(e["aria-describedby"],{[r.inputDescriptionId]:e.description&&!lt(e.description)})||void 0}})};var Sd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Md=c.forwardRef((e,r)=>{var t,n,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:d,size:l,readOnly:u,inputDescriptionId:f}=Nd(e),{cn:m}=se(),p=c.useContext(ot),{children:v,className:y,errorPropagation:h=!0,legend:A,description:E,hideLegend:I,nativeReadOnly:x=!0}=e,b=Sd(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return k.createElement(ot.Provider,{value:{error:h?(t=e.error)!==null&&t!==void 0?t:p?.error:void 0,errorId:Sn({[i]:o,[(n=p?.errorId)!==null&&n!==void 0?n:""]:!!p?.error}),size:l,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:u}},k.createElement("fieldset",Object.assign({},$e(b,["errorId","error","size","readOnly"]),a,{ref:r,className:m(y,"navds-fieldset",`navds-fieldset--${l}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":u})}),k.createElement(fe,{size:l,as:"legend",className:m("navds-fieldset__legend",{"navds-sr-only":!!I})},u&&(x?k.createElement(hr,null):k.createElement(fd,null)),A),!!E&&k.createElement(ne,{className:m("navds-fieldset__description",{"navds-sr-only":!!I}),id:f,size:l??"medium",as:"div"},e.description),v,k.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:m("navds-fieldset__error")},o&&k.createElement(ur,{size:l,showIcon:!0},e.error))))});var Dd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const va=k.createContext(null),Fd=c.forwardRef((e,r)=>{var t,n,{children:s,className:a,name:i,defaultValue:o,value:d,onChange:l=()=>{},required:u,readOnly:f}=e,m=Dd(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:p}=se(),v=c.useContext(ot),y=qn();return k.createElement(Md,Object.assign({},m,{readOnly:f,ref:r,className:p(a,"navds-radio-group",`navds-radio-group--${(n=(t=m.size)!==null&&t!==void 0?t:v?.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),k.createElement(va.Provider,{value:{name:i??`radioGroupName-${y}`,defaultValue:o,value:d,onChange:l,required:u}},k.createElement("div",{className:p("navds-radio-buttons")},s)))});var qd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ld=e=>{const r=c.useContext(va),t=ht($e(e,["description"]),"radio"),{inputProps:n,readOnly:s}=t,a=qd(t,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},a),{readOnly:s,inputProps:Object.assign(Object.assign({},n),{name:r?.name,defaultChecked:r?.defaultValue===void 0?void 0:r?.defaultValue===e.value,checked:r?.value===void 0?void 0:r?.value===e.value,onChange:i=>{var o,d;s||((o=e.onChange)===null||o===void 0||o.call(e,i),(d=r?.onChange)===null||d===void 0||d.call(r,e.value))},onClick:i=>{var o;if(s){i.preventDefault();return}(o=e?.onClick)===null||o===void 0||o.call(e,i)},required:r?.required,type:"radio"})})},ts=c.forwardRef((e,r)=>{const{cn:t}=se(),{inputProps:n,size:s,hasError:a,readOnly:i}=Ld(e);return k.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${s}`,{"navds-radio--error":a,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":a?"danger":e["data-color"]},k.createElement("input",Object.assign({},$e(e,["children","size","description","readOnly"]),$e(n,["aria-invalid"]),{className:t("navds-radio__input"),ref:r})),k.createElement("label",{htmlFor:n.id,className:t("navds-radio__label")},k.createElement("span",{className:t("navds-radio__content")},k.createElement(ne,{as:"span",size:s},e.children),e.description&&k.createElement(ne,{as:"span",size:s,className:t("navds-form-field__subdescription navds-radio__description")},e.description))))});var Vd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const rs=(e,r,t)=>{const{outerHeightStyle:n,overflow:s}=r;return t.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==s)?(t.current+=1,r):e},ss=e=>(e?.ownerDocument||document).defaultView||window;function zn(e){return parseInt(e,10)||0}const Cd=c.forwardRef((e,r)=>{var t,n,{className:s,onChange:a,maxRows:i,minRows:o=1,autoScrollbar:d,style:l,value:u}=e,f=Vd(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:m}=c.useRef(u!=null),p=c.useRef(null),v=gt(p,r),y=c.useRef(null),h=c.useRef(0),[A,E]=c.useState({outerHeightStyle:0}),I=k.useCallback(()=>{const _=p.current,B=ss(_).getComputedStyle(_);if(B.width==="0px")return{outerHeightStyle:0};const K=y.current;K.style.width=B.width,K.value=_.value||f.placeholder||"x",K.value.slice(-1)===`
`&&(K.value+=" ");const $=B.boxSizing,S=zn(B.paddingBottom)+zn(B.paddingTop),R=zn(B.borderBottomWidth)+zn(B.borderTopWidth),T=K.scrollHeight-S;K.value="x";const N=K.scrollHeight-S;let F=T;o&&(F=Math.max(Number(o)*N,F)),i&&(F=Math.min(Number(i)*N,F)),F=Math.max(F,N);const q=F+($==="border-box"?S+R:0),D=Math.abs(F-T)<=1;return{outerHeightStyle:q,overflow:D}},[i,o,f.placeholder]),x=()=>{const _=I();as(_)||E(C=>rs(C,_,h))};mn(()=>{const _=()=>{const S=I();as(S)||et.flushSync(()=>{E(R=>rs(R,S,h))})},C=Ls(()=>{var S,R,T;if(h.current=0,!((S=p.current)===null||S===void 0)&&S.style.height||!((R=p.current)===null||R===void 0)&&R.style.width){((T=p.current)===null||T===void 0?void 0:T.style.overflow)==="hidden"&&E(N=>Object.assign(Object.assign({},N),{overflow:!1}));return}_()},166,!0),B=p.current,K=ss(B);K.addEventListener("resize",C);let $;return typeof ResizeObserver<"u"&&($=new ResizeObserver(C),$.observe(B)),()=>{C.clear(),K.removeEventListener("resize",C),$&&$.disconnect()}},[I]),mn(()=>{x()}),c.useEffect(()=>{h.current=0},[u]);const b=_=>{h.current=0,m||x(),a&&a(_)},P=Object.assign({"--__ac-textarea-height":A.outerHeightStyle+"px","--__axc-textarea-height":A.outerHeightStyle+"px",overflow:A.overflow&&!d&&!(!((t=p.current)===null||t===void 0)&&t.style.height)&&!(!((n=p.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},l);return k.createElement(k.Fragment,null,k.createElement("textarea",Object.assign({value:u,onChange:b,ref:v,rows:o,style:P},f,{className:s})),k.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:y,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},l)}))});function as(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Bd=({maxLengthId:e,maxLength:r,currentLength:t,size:n,i18n:s})=>{const{cn:a}=se(),i=bt("Textarea",{charsLeft:s?.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s?.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),o=r-t,[d,l]=c.useState(o);return c.useEffect(()=>{const u=Ls(()=>{l(o)},2e3);return u(),()=>{u.clear()}},[o]),k.createElement(k.Fragment,null,k.createElement("span",{id:e,className:a("navds-sr-only")},i("maxLength",{maxLength:r})),o<20&&k.createElement("span",{role:"status",className:a("navds-textarea__sr-counter navds-sr-only")},is(d,i)),k.createElement(ne,{className:a("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:n},is(o,i)))},is=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var Ud=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Kd=c.forwardRef((e,r)=>{var t,n,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:d,size:l,inputDescriptionId:u}=ht(e,"textarea"),{label:f,className:m,description:p,maxLength:v,hideLabel:y=!1,resize:h,UNSAFE_autoScrollbar:A,i18n:E,readOnly:I}=e,x=Ud(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:b}=se(),P=qn(),_=v!==void 0&&v>0,[C,B]=c.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),K=()=>{let S=x?.minRows?x?.minRows:3;return l==="small"&&(S=x?.minRows?x?.minRows:2),S},$=Sn(a["aria-describedby"],{[P??""]:_});return k.createElement("div",{className:b(m,"navds-form-field",`navds-form-field--${l}`,{"navds-form-field--disabled":!!a.disabled,"navds-form-field--readonly":I,"navds-textarea--readonly":I,"navds-textarea--error":d,"navds-textarea--autoscrollbar":A,[`navds-textarea--resize-${h===!0?"both":h}`]:h})},k.createElement(fe,{htmlFor:a.id,size:l,className:b("navds-form-field__label",{"navds-sr-only":y})},I&&k.createElement(hr,null),f),!!p&&k.createElement(ne,{className:b("navds-form-field__description",{"navds-sr-only":y}),id:u,size:l,as:"div"},p),k.createElement(Cd,Object.assign({},$e(x,["error","errorId","size"]),a,{onChange:cr(e.onChange,e.value===void 0?S=>B(S.target.value):void 0),minRows:K(),autoScrollbar:A,ref:r,readOnly:I,className:b("navds-textarea__input","navds-body-short",`navds-body-short--${l??"medium"}`)},$?{"aria-describedby":$}:{})),_&&!I&&!a.disabled&&k.createElement(Bd,{maxLengthId:P,maxLength:v,currentLength:(s=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:C.length,size:l,i18n:E}),k.createElement("div",{className:b("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&k.createElement(ur,{size:l,showIcon:!0},e.error)))});var Je=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Je||{}),Bn=e=>e.type==="checkbox",nn=e=>e instanceof Date,he=e=>e==null;const ya=e=>typeof e=="object";var ue=e=>!he(e)&&!Array.isArray(e)&&ya(e)&&!nn(e),ka=e=>ue(e)&&e.target?Bn(e.target)?e.target.checked:e.target.value:e,Gd=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ba=(e,r)=>e.has(Gd(r)),$d=e=>{const r=e.constructor&&e.constructor.prototype;return ue(r)&&r.hasOwnProperty("isPrototypeOf")},Er=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ie(e){let r;const t=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(Er&&(e instanceof Blob||n))&&(t||ue(e)))if(r=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!$d(e))r=e;else for(const s in e)e.hasOwnProperty(s)&&(r[s]=ie(e[s]));else return e;return r}var Et=e=>/^\w*$/.test(e),oe=e=>e===void 0,Ot=e=>Array.isArray(e)?e.filter(Boolean):[],Or=e=>Ot(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,r,t)=>{if(!r||!ue(e))return t;const n=(Et(r)?[r]:Or(r)).reduce((s,a)=>he(s)?s:s[a],e);return oe(n)||n===e?oe(e[r])?t:e[r]:n},Ae=e=>typeof e=="boolean",ee=(e,r,t)=>{let n=-1;const s=Et(r)?[r]:Or(r),a=s.length,i=a-1;for(;++n<a;){const o=s[n];let d=t;if(n!==i){const l=e[o];d=ue(l)||Array.isArray(l)?l:isNaN(+s[n+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=d,e=e[o]}};const dt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Pe={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Be={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Rr=k.createContext(null);Rr.displayName="HookFormContext";const Ze=()=>k.useContext(Rr),Hd=e=>{const{children:r,...t}=e;return k.createElement(Rr.Provider,{value:t},r)};var ha=(e,r,t,n=!0)=>{const s={defaultValues:r._defaultValues};for(const a in e)Object.defineProperty(s,a,{get:()=>{const i=a;return r._proxyFormState[i]!==Pe.all&&(r._proxyFormState[i]=!n||Pe.all),t&&(t[i]=!0),e[i]}});return s};const Rt=typeof window<"u"?k.useLayoutEffect:k.useEffect;function zd(e){const r=Ze(),{control:t=r.control,disabled:n,name:s,exact:a}=e||{},[i,o]=k.useState(t._formState),d=k.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Rt(()=>t._subscribe({name:s,formState:d.current,exact:a,callback:l=>{!n&&o({...t._formState,...l})}}),[s,n,a]),k.useEffect(()=>{d.current.isValid&&t._setValid(!0)},[t]),k.useMemo(()=>ha(i,t,d.current,!1),[i,t])}var De=e=>typeof e=="string",Ea=(e,r,t,n,s)=>De(e)?(n&&r.watch.add(e),V(t,e,s)):Array.isArray(e)?e.map(a=>(n&&r.watch.add(a),V(t,a))):(n&&(r.watchAll=!0),t),nr=e=>he(e)||!ya(e);function Ke(e,r,t=new WeakSet){if(nr(e)||nr(r))return e===r;if(nn(e)&&nn(r))return e.getTime()===r.getTime();const n=Object.keys(e),s=Object.keys(r);if(n.length!==s.length)return!1;if(t.has(e)||t.has(r))return!0;t.add(e),t.add(r);for(const a of n){const i=e[a];if(!s.includes(a))return!1;if(a!=="ref"){const o=r[a];if(nn(i)&&nn(o)||ue(i)&&ue(o)||Array.isArray(i)&&Array.isArray(o)?!Ke(i,o,t):i!==o)return!1}}return!0}function Yd(e){const r=Ze(),{control:t=r.control,name:n,defaultValue:s,disabled:a,exact:i,compute:o}=e||{},d=k.useRef(s),l=k.useRef(o),u=k.useRef(void 0);l.current=o;const f=k.useMemo(()=>t._getWatch(n,d.current),[t,n]),[m,p]=k.useState(l.current?l.current(f):f);return Rt(()=>t._subscribe({name:n,formState:{values:!0},exact:i,callback:v=>{if(!a){const y=Ea(n,t._names,v.values||t._formValues,!1,d.current);if(l.current){const h=l.current(y);Ke(h,u.current)||(p(h),u.current=h)}else p(y)}}}),[t,a,n,i]),k.useEffect(()=>t._removeUnmounted()),m}function Oa(e){const r=Ze(),{name:t,disabled:n,control:s=r.control,shouldUnregister:a,defaultValue:i}=e,o=ba(s._names.array,t),d=k.useMemo(()=>V(s._formValues,t,V(s._defaultValues,t,i)),[s,t,i]),l=Yd({control:s,name:t,defaultValue:d,exact:!0}),u=zd({control:s,name:t,exact:!0}),f=k.useRef(e),m=k.useRef(s.register(t,{...e.rules,value:l,...Ae(e.disabled)?{disabled:e.disabled}:{}}));f.current=e;const p=k.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!V(u.errors,t)},isDirty:{enumerable:!0,get:()=>!!V(u.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!V(u.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!V(u.validatingFields,t)},error:{enumerable:!0,get:()=>V(u.errors,t)}}),[u,t]),v=k.useCallback(E=>m.current.onChange({target:{value:ka(E),name:t},type:dt.CHANGE}),[t]),y=k.useCallback(()=>m.current.onBlur({target:{value:V(s._formValues,t),name:t},type:dt.BLUR}),[t,s._formValues]),h=k.useCallback(E=>{const I=V(s._fields,t);I&&E&&(I._f.ref={focus:()=>E.focus&&E.focus(),select:()=>E.select&&E.select(),setCustomValidity:x=>E.setCustomValidity(x),reportValidity:()=>E.reportValidity()})},[s._fields,t]),A=k.useMemo(()=>({name:t,value:l,...Ae(n)||u.disabled?{disabled:u.disabled||n}:{},onChange:v,onBlur:y,ref:h}),[t,n,u.disabled,v,y,h,l]);return k.useEffect(()=>{const E=s._options.shouldUnregister||a;s.register(t,{...f.current.rules,...Ae(f.current.disabled)?{disabled:f.current.disabled}:{}});const I=(x,b)=>{const P=V(s._fields,x);P&&P._f&&(P._f.mount=b)};if(I(t,!0),E){const x=ie(V(s._options.defaultValues,t));ee(s._defaultValues,t,x),oe(V(s._formValues,t))&&ee(s._formValues,t,x)}return!o&&s.register(t),()=>{(o?E&&!s._state.action:E)?s.unregister(t):I(t,!1)}},[t,s,o,a]),k.useEffect(()=>{s._setDisabledField({disabled:n,name:t})},[n,t,s]),k.useMemo(()=>({field:A,formState:u,fieldState:p}),[A,u,p])}var Wd=(e,r,t,n,s)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:s||!0}}:{},Oe=e=>Array.isArray(e)?e:[e],os=()=>{let e=[];return{get observers(){return e},next:s=>{for(const a of e)a.next&&a.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(a=>a!==s)}}),unsubscribe:()=>{e=[]}}},be=e=>ue(e)&&!Object.keys(e).length,wr=e=>e.type==="file",Me=e=>typeof e=="function",ut=e=>{if(!Er)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Ra=e=>e.type==="select-multiple",Ar=e=>e.type==="radio",Jd=e=>Ar(e)||Bn(e),qt=e=>ut(e)&&e.isConnected;function Xd(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=oe(e)?n++:e[r[n++]];return e}function Zd(e){for(const r in e)if(e.hasOwnProperty(r)&&!oe(e[r]))return!1;return!0}function de(e,r){const t=Array.isArray(r)?r:Et(r)?[r]:Or(r),n=t.length===1?e:Xd(e,t),s=t.length-1,a=t[s];return n&&delete n[a],s!==0&&(ue(n)&&be(n)||Array.isArray(n)&&Zd(n))&&de(e,t.slice(0,-1)),e}var wa=e=>{for(const r in e)if(Me(e[r]))return!0;return!1};function ct(e,r={}){const t=Array.isArray(e);if(ue(e)||t)for(const n in e)Array.isArray(e[n])||ue(e[n])&&!wa(e[n])?(r[n]=Array.isArray(e[n])?[]:{},ct(e[n],r[n])):he(e[n])||(r[n]=!0);return r}function Aa(e,r,t){const n=Array.isArray(e);if(ue(e)||n)for(const s in e)Array.isArray(e[s])||ue(e[s])&&!wa(e[s])?oe(r)||nr(t[s])?t[s]=Array.isArray(e[s])?ct(e[s],[]):{...ct(e[s])}:Aa(e[s],he(r)?{}:r[s],t[s]):t[s]=!Ke(e[s],r[s]);return t}var An=(e,r)=>Aa(e,r,ct(r));const ls={value:!1,isValid:!1},ds={value:!0,isValid:!0};var Ta=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!oe(e[0].attributes.value)?oe(e[0].value)||e[0].value===""?ds:{value:e[0].value,isValid:!0}:ds:ls}return ls},Ia=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>oe(e)?e:r?e===""?NaN:e&&+e:t&&De(e)?new Date(e):n?n(e):e;const us={isValid:!1,value:null};var _a=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,us):us;function cs(e){const r=e.ref;return wr(r)?r.files:Ar(r)?_a(e.refs).value:Ra(r)?[...r.selectedOptions].map(({value:t})=>t):Bn(r)?Ta(e.refs).value:Ia(oe(r.value)?e.ref.value:r.value,e)}var Qd=(e,r,t,n)=>{const s={};for(const a of e){const i=V(r,a);i&&ee(s,a,i._f)}return{criteriaMode:t,names:[...e],fields:s,shouldUseNativeValidation:n}},ft=e=>e instanceof RegExp,Tn=e=>oe(e)?e:ft(e)?e.source:ue(e)?ft(e.value)?e.value.source:e.value:e,un=e=>({isOnSubmit:!e||e===Pe.onSubmit,isOnBlur:e===Pe.onBlur,isOnChange:e===Pe.onChange,isOnAll:e===Pe.all,isOnTouch:e===Pe.onTouched});const fs="AsyncFunction";var eu=e=>!!e&&!!e.validate&&!!(Me(e.validate)&&e.validate.constructor.name===fs||ue(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===fs)),nu=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),tr=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const fn=(e,r,t,n)=>{for(const s of t||Object.keys(e)){const a=V(e,s);if(a){const{_f:i,...o}=a;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],s)&&!n)return!0;if(i.ref&&r(i.ref,i.name)&&!n)return!0;if(fn(o,r))break}else if(ue(o)&&fn(o,r))break}}};function ms(e,r,t){const n=V(e,t);if(n||Et(t))return{error:n,name:t};const s=t.split(".");for(;s.length;){const a=s.join("."),i=V(r,a),o=V(e,a);if(i&&!Array.isArray(i)&&t!==a)return{name:t};if(o&&o.type)return{name:a,error:o};if(o&&o.root&&o.root.type)return{name:`${a}.root`,error:o.root};s.pop()}return{name:t}}var tu=(e,r,t,n)=>{t(e);const{name:s,...a}=e;return be(a)||Object.keys(a).length>=Object.keys(r).length||Object.keys(a).find(i=>r[i]===(!n||Pe.all))},ru=(e,r,t)=>!e||!r||e===r||Oe(e).some(n=>n&&(t?n===r:n.startsWith(r)||r.startsWith(n))),su=(e,r,t,n,s)=>s.isOnAll?!1:!t&&s.isOnTouch?!(r||e):(t?n.isOnBlur:s.isOnBlur)?!e:(t?n.isOnChange:s.isOnChange)?e:!0,au=(e,r)=>!Ot(V(e,r)).length&&de(e,r),ja=(e,r,t)=>{const n=Oe(V(e,t));return ee(n,"root",r[t]),ee(e,t,n),e},Qn=e=>De(e);function gs(e,r,t="validate"){if(Qn(e)||Array.isArray(e)&&e.every(Qn)||Ae(e)&&!e)return{type:t,message:Qn(e)?e:"",ref:r}}var ln=e=>ue(e)&&!ft(e)?e:{value:e,message:""},rr=async(e,r,t,n,s,a)=>{const{ref:i,refs:o,required:d,maxLength:l,minLength:u,min:f,max:m,pattern:p,validate:v,name:y,valueAsNumber:h,mount:A}=e._f,E=V(t,y);if(!A||r.has(y))return{};const I=o?o[0]:i,x=S=>{s&&I.reportValidity&&(I.setCustomValidity(Ae(S)?"":S||""),I.reportValidity())},b={},P=Ar(i),_=Bn(i),C=P||_,B=(h||wr(i))&&oe(i.value)&&oe(E)||ut(i)&&i.value===""||E===""||Array.isArray(E)&&!E.length,K=Wd.bind(null,y,n,b),$=(S,R,T,N=Be.maxLength,F=Be.minLength)=>{const q=S?R:T;b[y]={type:S?N:F,message:q,ref:i,...K(S?N:F,q)}};if(a?!Array.isArray(E)||!E.length:d&&(!C&&(B||he(E))||Ae(E)&&!E||_&&!Ta(o).isValid||P&&!_a(o).isValid)){const{value:S,message:R}=Qn(d)?{value:!!d,message:d}:ln(d);if(S&&(b[y]={type:Be.required,message:R,ref:I,...K(Be.required,R)},!n))return x(R),b}if(!B&&(!he(f)||!he(m))){let S,R;const T=ln(m),N=ln(f);if(!he(E)&&!isNaN(E)){const F=i.valueAsNumber||E&&+E;he(T.value)||(S=F>T.value),he(N.value)||(R=F<N.value)}else{const F=i.valueAsDate||new Date(E),q=H=>new Date(new Date().toDateString()+" "+H),D=i.type=="time",M=i.type=="week";De(T.value)&&E&&(S=D?q(E)>q(T.value):M?E>T.value:F>new Date(T.value)),De(N.value)&&E&&(R=D?q(E)<q(N.value):M?E<N.value:F<new Date(N.value))}if((S||R)&&($(!!S,T.message,N.message,Be.max,Be.min),!n))return x(b[y].message),b}if((l||u)&&!B&&(De(E)||a&&Array.isArray(E))){const S=ln(l),R=ln(u),T=!he(S.value)&&E.length>+S.value,N=!he(R.value)&&E.length<+R.value;if((T||N)&&($(T,S.message,R.message),!n))return x(b[y].message),b}if(p&&!B&&De(E)){const{value:S,message:R}=ln(p);if(ft(S)&&!E.match(S)&&(b[y]={type:Be.pattern,message:R,ref:i,...K(Be.pattern,R)},!n))return x(R),b}if(v){if(Me(v)){const S=await v(E,t),R=gs(S,I);if(R&&(b[y]={...R,...K(Be.validate,R.message)},!n))return x(R.message),b}else if(ue(v)){let S={};for(const R in v){if(!be(S)&&!n)break;const T=gs(await v[R](E,t),I,R);T&&(S={...T,...K(R,T.message)},x(T.message),n&&(b[y]=S))}if(!be(S)&&(b[y]={ref:I,...S},!n))return b}}return x(!0),b};const iu={mode:Pe.onSubmit,reValidateMode:Pe.onChange,shouldFocusError:!0};function ou(e={}){let r={...iu,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:Me(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},s=ue(r.defaultValues)||ue(r.values)?ie(r.defaultValues||r.values)||{}:{},a=r.shouldUnregister?{}:ie(s),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,l=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let f={...u};const m={array:os(),state:os()},p=r.criteriaMode===Pe.all,v=g=>O=>{clearTimeout(l),l=setTimeout(g,O)},y=async g=>{if(!r.disabled&&(u.isValid||f.isValid||g)){const O=r.resolver?be((await _()).errors):await B(n,!0);O!==t.isValid&&m.state.next({isValid:O})}},h=(g,O)=>{!r.disabled&&(u.isValidating||u.validatingFields||f.isValidating||f.validatingFields)&&((g||Array.from(o.mount)).forEach(j=>{j&&(O?ee(t.validatingFields,j,O):de(t.validatingFields,j))}),m.state.next({validatingFields:t.validatingFields,isValidating:!be(t.validatingFields)}))},A=(g,O=[],j,G,U=!0,L=!0)=>{if(G&&j&&!r.disabled){if(i.action=!0,L&&Array.isArray(V(n,g))){const z=j(V(n,g),G.argA,G.argB);U&&ee(n,g,z)}if(L&&Array.isArray(V(t.errors,g))){const z=j(V(t.errors,g),G.argA,G.argB);U&&ee(t.errors,g,z),au(t.errors,g)}if((u.touchedFields||f.touchedFields)&&L&&Array.isArray(V(t.touchedFields,g))){const z=j(V(t.touchedFields,g),G.argA,G.argB);U&&ee(t.touchedFields,g,z)}(u.dirtyFields||f.dirtyFields)&&(t.dirtyFields=An(s,a)),m.state.next({name:g,isDirty:$(g,O),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else ee(a,g,O)},E=(g,O)=>{ee(t.errors,g,O),m.state.next({errors:t.errors})},I=g=>{t.errors=g,m.state.next({errors:t.errors,isValid:!1})},x=(g,O,j,G)=>{const U=V(n,g);if(U){const L=V(a,g,oe(j)?V(s,g):j);oe(L)||G&&G.defaultChecked||O?ee(a,g,O?L:cs(U._f)):T(g,L),i.mount&&y()}},b=(g,O,j,G,U)=>{let L=!1,z=!1;const Q={name:g};if(!r.disabled){if(!j||G){(u.isDirty||f.isDirty)&&(z=t.isDirty,t.isDirty=Q.isDirty=$(),L=z!==Q.isDirty);const te=Ke(V(s,g),O);z=!!V(t.dirtyFields,g),te?de(t.dirtyFields,g):ee(t.dirtyFields,g,!0),Q.dirtyFields=t.dirtyFields,L=L||(u.dirtyFields||f.dirtyFields)&&z!==!te}if(j){const te=V(t.touchedFields,g);te||(ee(t.touchedFields,g,j),Q.touchedFields=t.touchedFields,L=L||(u.touchedFields||f.touchedFields)&&te!==j)}L&&U&&m.state.next(Q)}return L?Q:{}},P=(g,O,j,G)=>{const U=V(t.errors,g),L=(u.isValid||f.isValid)&&Ae(O)&&t.isValid!==O;if(r.delayError&&j?(d=v(()=>E(g,j)),d(r.delayError)):(clearTimeout(l),d=null,j?ee(t.errors,g,j):de(t.errors,g)),(j?!Ke(U,j):U)||!be(G)||L){const z={...G,...L&&Ae(O)?{isValid:O}:{},errors:t.errors,name:g};t={...t,...z},m.state.next(z)}},_=async g=>{h(g,!0);const O=await r.resolver(a,r.context,Qd(g||o.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return h(g),O},C=async g=>{const{errors:O}=await _(g);if(g)for(const j of g){const G=V(O,j);G?ee(t.errors,j,G):de(t.errors,j)}else t.errors=O;return O},B=async(g,O,j={valid:!0})=>{for(const G in g){const U=g[G];if(U){const{_f:L,...z}=U;if(L){const Q=o.array.has(L.name),te=U._f&&eu(U._f);te&&u.validatingFields&&h([G],!0);const _e=await rr(U,o.disabled,a,p,r.shouldUseNativeValidation&&!O,Q);if(te&&u.validatingFields&&h([G]),_e[L.name]&&(j.valid=!1,O))break;!O&&(V(_e,L.name)?Q?ja(t.errors,_e,L.name):ee(t.errors,L.name,_e[L.name]):de(t.errors,L.name))}!be(z)&&await B(z,O,j)}}return j.valid},K=()=>{for(const g of o.unMount){const O=V(n,g);O&&(O._f.refs?O._f.refs.every(j=>!qt(j)):!qt(O._f.ref))&&le(g)}o.unMount=new Set},$=(g,O)=>!r.disabled&&(g&&O&&ee(a,g,O),!Ke(H(),s)),S=(g,O,j)=>Ea(g,o,{...i.mount?a:oe(O)?s:De(g)?{[g]:O}:O},j,O),R=g=>Ot(V(i.mount?a:s,g,r.shouldUnregister?V(s,g,[]):[])),T=(g,O,j={})=>{const G=V(n,g);let U=O;if(G){const L=G._f;L&&(!L.disabled&&ee(a,g,Ia(O,L)),U=ut(L.ref)&&he(O)?"":O,Ra(L.ref)?[...L.ref.options].forEach(z=>z.selected=U.includes(z.value)):L.refs?Bn(L.ref)?L.refs.forEach(z=>{(!z.defaultChecked||!z.disabled)&&(Array.isArray(U)?z.checked=!!U.find(Q=>Q===z.value):z.checked=U===z.value||!!U)}):L.refs.forEach(z=>z.checked=z.value===U):wr(L.ref)?L.ref.value="":(L.ref.value=U,L.ref.type||m.state.next({name:g,values:ie(a)})))}(j.shouldDirty||j.shouldTouch)&&b(g,U,j.shouldTouch,j.shouldDirty,!0),j.shouldValidate&&M(g)},N=(g,O,j)=>{for(const G in O){if(!O.hasOwnProperty(G))return;const U=O[G],L=g+"."+G,z=V(n,L);(o.array.has(g)||ue(U)||z&&!z._f)&&!nn(U)?N(L,U,j):T(L,U,j)}},F=(g,O,j={})=>{const G=V(n,g),U=o.array.has(g),L=ie(O);ee(a,g,L),U?(m.array.next({name:g,values:ie(a)}),(u.isDirty||u.dirtyFields||f.isDirty||f.dirtyFields)&&j.shouldDirty&&m.state.next({name:g,dirtyFields:An(s,a),isDirty:$(g,L)})):G&&!G._f&&!he(L)?N(g,L,j):T(g,L,j),tr(g,o)&&m.state.next({...t,name:g}),m.state.next({name:i.mount?g:void 0,values:ie(a)})},q=async g=>{i.mount=!0;const O=g.target;let j=O.name,G=!0;const U=V(n,j),L=te=>{G=Number.isNaN(te)||nn(te)&&isNaN(te.getTime())||Ke(te,V(a,j,te))},z=un(r.mode),Q=un(r.reValidateMode);if(U){let te,_e;const Gn=O.type?cs(U._f):ka(g),ze=g.type===dt.BLUR||g.type===dt.FOCUS_OUT,Ba=!nu(U._f)&&!r.resolver&&!V(t.errors,j)&&!U._f.deps||su(ze,V(t.touchedFields,j),t.isSubmitted,Q,z),wt=tr(j,o,ze);ee(a,j,Gn),ze?(!O||!O.readOnly)&&(U._f.onBlur&&U._f.onBlur(g),d&&d(0)):U._f.onChange&&U._f.onChange(g);const At=b(j,Gn,ze),Ua=!be(At)||wt;if(!ze&&m.state.next({name:j,type:g.type,values:ie(a)}),Ba)return(u.isValid||f.isValid)&&(r.mode==="onBlur"?ze&&y():ze||y()),Ua&&m.state.next({name:j,...wt?{}:At});if(!ze&&wt&&m.state.next({...t}),r.resolver){const{errors:Ir}=await _([j]);if(L(Gn),G){const Ka=ms(t.errors,n,j),_r=ms(Ir,n,Ka.name||j);te=_r.error,j=_r.name,_e=be(Ir)}}else h([j],!0),te=(await rr(U,o.disabled,a,p,r.shouldUseNativeValidation))[j],h([j]),L(Gn),G&&(te?_e=!1:(u.isValid||f.isValid)&&(_e=await B(n,!0)));G&&(U._f.deps&&M(U._f.deps),P(j,_e,te,At))}},D=(g,O)=>{if(V(t.errors,O)&&g.focus)return g.focus(),1},M=async(g,O={})=>{let j,G;const U=Oe(g);if(r.resolver){const L=await C(oe(g)?g:U);j=be(L),G=g?!U.some(z=>V(L,z)):j}else g?(G=(await Promise.all(U.map(async L=>{const z=V(n,L);return await B(z&&z._f?{[L]:z}:z)}))).every(Boolean),!(!G&&!t.isValid)&&y()):G=j=await B(n);return m.state.next({...!De(g)||(u.isValid||f.isValid)&&j!==t.isValid?{}:{name:g},...r.resolver||!g?{isValid:j}:{},errors:t.errors}),O.shouldFocus&&!G&&fn(n,D,g?U:o.mount),G},H=g=>{const O={...i.mount?a:s};return oe(g)?O:De(g)?V(O,g):g.map(j=>V(O,j))},Y=(g,O)=>({invalid:!!V((O||t).errors,g),isDirty:!!V((O||t).dirtyFields,g),error:V((O||t).errors,g),isValidating:!!V(t.validatingFields,g),isTouched:!!V((O||t).touchedFields,g)}),W=g=>{g&&Oe(g).forEach(O=>de(t.errors,O)),m.state.next({errors:g?t.errors:{}})},J=(g,O,j)=>{const G=(V(n,g,{_f:{}})._f||{}).ref,U=V(t.errors,g)||{},{ref:L,message:z,type:Q,...te}=U;ee(t.errors,g,{...te,...O,ref:G}),m.state.next({name:g,errors:t.errors,isValid:!1}),j&&j.shouldFocus&&G&&G.focus&&G.focus()},Se=(g,O)=>Me(g)?m.state.subscribe({next:j=>"values"in j&&g(S(void 0,O),j)}):S(g,O,!0),ge=g=>m.state.subscribe({next:O=>{ru(g.name,O.name,g.exact)&&tu(O,g.formState||u,On,g.reRenderRoot)&&g.callback({values:{...a},...t,...O,defaultValues:s})}}).unsubscribe,ce=g=>(i.mount=!0,f={...f,...g.formState},ge({...g,formState:f})),le=(g,O={})=>{for(const j of g?Oe(g):o.mount)o.mount.delete(j),o.array.delete(j),O.keepValue||(de(n,j),de(a,j)),!O.keepError&&de(t.errors,j),!O.keepDirty&&de(t.dirtyFields,j),!O.keepTouched&&de(t.touchedFields,j),!O.keepIsValidating&&de(t.validatingFields,j),!r.shouldUnregister&&!O.keepDefaultValue&&de(s,j);m.state.next({values:ie(a)}),m.state.next({...t,...O.keepDirty?{isDirty:$()}:{}}),!O.keepIsValid&&y()},X=({disabled:g,name:O})=>{(Ae(g)&&i.mount||g||o.disabled.has(O))&&(g?o.disabled.add(O):o.disabled.delete(O))},ae=(g,O={})=>{let j=V(n,g);const G=Ae(O.disabled)||Ae(r.disabled);return ee(n,g,{...j||{},_f:{...j&&j._f?j._f:{ref:{name:g}},name:g,mount:!0,...O}}),o.mount.add(g),j?X({disabled:Ae(O.disabled)?O.disabled:r.disabled,name:g}):x(g,!0,O.value),{...G?{disabled:O.disabled||r.disabled}:{},...r.progressive?{required:!!O.required,min:Tn(O.min),max:Tn(O.max),minLength:Tn(O.minLength),maxLength:Tn(O.maxLength),pattern:Tn(O.pattern)}:{},name:g,onChange:q,onBlur:q,ref:U=>{if(U){ae(g,O),j=V(n,g);const L=oe(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,z=Jd(L),Q=j._f.refs||[];if(z?Q.find(te=>te===L):L===j._f.ref)return;ee(n,g,{_f:{...j._f,...z?{refs:[...Q.filter(qt),L,...Array.isArray(V(s,g))?[{}]:[]],ref:{type:L.type,name:g}}:{ref:L}}}),x(g,!1,void 0,L)}else j=V(n,g,{}),j._f&&(j._f.mount=!1),(r.shouldUnregister||O.shouldUnregister)&&!(ba(o.array,g)&&i.action)&&o.unMount.add(g)}}},pe=()=>r.shouldFocusError&&fn(n,D,o.mount),ye=g=>{Ae(g)&&(m.state.next({disabled:g}),fn(n,(O,j)=>{const G=V(n,j);G&&(O.disabled=G._f.disabled||g,Array.isArray(G._f.refs)&&G._f.refs.forEach(U=>{U.disabled=G._f.disabled||g}))},0,!1))},ke=(g,O)=>async j=>{let G;j&&(j.preventDefault&&j.preventDefault(),j.persist&&j.persist());let U=ie(a);if(m.state.next({isSubmitting:!0}),r.resolver){const{errors:L,values:z}=await _();t.errors=L,U=ie(z)}else await B(n);if(o.disabled.size)for(const L of o.disabled)de(U,L);if(de(t.errors,"root"),be(t.errors)){m.state.next({errors:{}});try{await g(U,j)}catch(L){G=L}}else O&&await O({...t.errors},j),pe(),setTimeout(pe);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:be(t.errors)&&!G,submitCount:t.submitCount+1,errors:t.errors}),G)throw G},Qe=(g,O={})=>{V(n,g)&&(oe(O.defaultValue)?F(g,ie(V(s,g))):(F(g,O.defaultValue),ee(s,g,ie(O.defaultValue))),O.keepTouched||de(t.touchedFields,g),O.keepDirty||(de(t.dirtyFields,g),t.isDirty=O.defaultValue?$(g,ie(V(s,g))):$()),O.keepError||(de(t.errors,g),u.isValid&&y()),m.state.next({...t}))},Ve=(g,O={})=>{const j=g?ie(g):s,G=ie(j),U=be(g),L=U?s:G;if(O.keepDefaultValues||(s=j),!O.keepValues){if(O.keepDirtyValues){const z=new Set([...o.mount,...Object.keys(An(s,a))]);for(const Q of Array.from(z))V(t.dirtyFields,Q)?ee(L,Q,V(a,Q)):F(Q,V(L,Q))}else{if(Er&&oe(g))for(const z of o.mount){const Q=V(n,z);if(Q&&Q._f){const te=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(ut(te)){const _e=te.closest("form");if(_e){_e.reset();break}}}}if(O.keepFieldsRef)for(const z of o.mount)F(z,V(L,z));else n={}}a=r.shouldUnregister?O.keepDefaultValues?ie(s):{}:ie(L),m.array.next({values:{...L}}),m.state.next({values:{...L}})}o={mount:O.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!O.keepIsValid||!!O.keepDirtyValues,i.watch=!!r.shouldUnregister,m.state.next({submitCount:O.keepSubmitCount?t.submitCount:0,isDirty:U?!1:O.keepDirty?t.isDirty:!!(O.keepDefaultValues&&!Ke(g,s)),isSubmitted:O.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:U?{}:O.keepDirtyValues?O.keepDefaultValues&&a?An(s,a):t.dirtyFields:O.keepDefaultValues&&g?An(s,g):O.keepDirty?t.dirtyFields:{},touchedFields:O.keepTouched?t.touchedFields:{},errors:O.keepErrors?t.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:s})},Ce=(g,O)=>Ve(Me(g)?g(a):g,O),En=(g,O={})=>{const j=V(n,g),G=j&&j._f;if(G){const U=G.refs?G.refs[0]:G.ref;U.focus&&(U.focus(),O.shouldSelect&&Me(U.select)&&U.select())}},On=g=>{t={...t,...g}},an={control:{register:ae,unregister:le,getFieldState:Y,handleSubmit:ke,setError:J,_subscribe:ge,_runSchema:_,_focusError:pe,_getWatch:S,_getDirty:$,_setValid:y,_setFieldArray:A,_setDisabledField:X,_setErrors:I,_getFieldArray:R,_reset:Ve,_resetDefaultValues:()=>Me(r.defaultValues)&&r.defaultValues().then(g=>{Ce(g,r.resetOptions),m.state.next({isLoading:!1})}),_removeUnmounted:K,_disableForm:ye,_subjects:m,_proxyFormState:u,get _fields(){return n},get _formValues(){return a},get _state(){return i},set _state(g){i=g},get _defaultValues(){return s},get _names(){return o},set _names(g){o=g},get _formState(){return t},get _options(){return r},set _options(g){r={...r,...g}}},subscribe:ce,trigger:M,register:ae,handleSubmit:ke,watch:Se,setValue:F,getValues:H,reset:Ce,resetField:Qe,clearErrors:W,unregister:le,setError:J,setFocus:En,getFieldState:Y};return{...an,formControl:an}}var Ye=()=>{if(typeof crypto<"u"&&crypto.randomUUID)return crypto.randomUUID();const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const t=(Math.random()*16+e)%16|0;return(r=="x"?t:t&3|8).toString(16)})},Lt=(e,r,t={})=>t.shouldFocus||oe(t.shouldFocus)?t.focusName||`${e}.${oe(t.focusIndex)?r:t.focusIndex}.`:"",Vt=(e,r)=>[...e,...Oe(r)],Ct=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Bt(e,r,t){return[...e.slice(0,r),...Oe(t),...e.slice(r)]}var Ut=(e,r,t)=>Array.isArray(e)?(oe(e[t])&&(e[t]=void 0),e.splice(t,0,e.splice(r,1)[0]),e):[],Kt=(e,r)=>[...Oe(r),...Oe(e)];function lu(e,r){let t=0;const n=[...e];for(const s of r)n.splice(s-t,1),t++;return Ot(n).length?n:[]}var Gt=(e,r)=>oe(r)?[]:lu(e,Oe(r).sort((t,n)=>t-n)),$t=(e,r,t)=>{[e[r],e[t]]=[e[t],e[r]]},ps=(e,r,t)=>(e[r]=t,e);function du(e){const r=Ze(),{control:t=r.control,name:n,keyName:s="id",shouldUnregister:a,rules:i}=e,[o,d]=k.useState(t._getFieldArray(n)),l=k.useRef(t._getFieldArray(n).map(Ye)),u=k.useRef(o),f=k.useRef(!1);u.current=o,t._names.array.add(n),k.useMemo(()=>i&&t.register(n,i),[t,i,n]),Rt(()=>t._subjects.array.subscribe({next:({values:b,name:P})=>{if(P===n||!P){const _=V(b,n);Array.isArray(_)&&(d(_),l.current=_.map(Ye))}}}).unsubscribe,[t,n]);const m=k.useCallback(b=>{f.current=!0,t._setFieldArray(n,b)},[t,n]),p=(b,P)=>{const _=Oe(ie(b)),C=Vt(t._getFieldArray(n),_);t._names.focus=Lt(n,C.length-1,P),l.current=Vt(l.current,_.map(Ye)),m(C),d(C),t._setFieldArray(n,C,Vt,{argA:Ct(b)})},v=(b,P)=>{const _=Oe(ie(b)),C=Kt(t._getFieldArray(n),_);t._names.focus=Lt(n,0,P),l.current=Kt(l.current,_.map(Ye)),m(C),d(C),t._setFieldArray(n,C,Kt,{argA:Ct(b)})},y=b=>{const P=Gt(t._getFieldArray(n),b);l.current=Gt(l.current,b),m(P),d(P),!Array.isArray(V(t._fields,n))&&ee(t._fields,n,void 0),t._setFieldArray(n,P,Gt,{argA:b})},h=(b,P,_)=>{const C=Oe(ie(P)),B=Bt(t._getFieldArray(n),b,C);t._names.focus=Lt(n,b,_),l.current=Bt(l.current,b,C.map(Ye)),m(B),d(B),t._setFieldArray(n,B,Bt,{argA:b,argB:Ct(P)})},A=(b,P)=>{const _=t._getFieldArray(n);$t(_,b,P),$t(l.current,b,P),m(_),d(_),t._setFieldArray(n,_,$t,{argA:b,argB:P},!1)},E=(b,P)=>{const _=t._getFieldArray(n);Ut(_,b,P),Ut(l.current,b,P),m(_),d(_),t._setFieldArray(n,_,Ut,{argA:b,argB:P},!1)},I=(b,P)=>{const _=ie(P),C=ps(t._getFieldArray(n),b,_);l.current=[...C].map((B,K)=>!B||K===b?Ye():l.current[K]),m(C),d([...C]),t._setFieldArray(n,C,ps,{argA:b,argB:_},!0,!1)},x=b=>{const P=Oe(ie(b));l.current=P.map(Ye),m([...P]),d([...P]),t._setFieldArray(n,[...P],_=>_,{},!0,!1)};return k.useEffect(()=>{if(t._state.action=!1,tr(n,t._names)&&t._subjects.state.next({...t._formState}),f.current&&(!un(t._options.mode).isOnSubmit||t._formState.isSubmitted)&&!un(t._options.reValidateMode).isOnSubmit)if(t._options.resolver)t._runSchema([n]).then(b=>{const P=V(b.errors,n),_=V(t._formState.errors,n);(_?!P&&_.type||P&&(_.type!==P.type||_.message!==P.message):P&&P.type)&&(P?ee(t._formState.errors,n,P):de(t._formState.errors,n),t._subjects.state.next({errors:t._formState.errors}))});else{const b=V(t._fields,n);b&&b._f&&!(un(t._options.reValidateMode).isOnSubmit&&un(t._options.mode).isOnSubmit)&&rr(b,t._names.disabled,t._formValues,t._options.criteriaMode===Pe.all,t._options.shouldUseNativeValidation,!0).then(P=>!be(P)&&t._subjects.state.next({errors:ja(t._formState.errors,P,n)}))}t._subjects.state.next({name:n,values:ie(t._formValues)}),t._names.focus&&fn(t._fields,(b,P)=>{if(t._names.focus&&P.startsWith(t._names.focus)&&b.focus)return b.focus(),1}),t._names.focus="",t._setValid(),f.current=!1},[o,n,t]),k.useEffect(()=>(!V(t._formValues,n)&&t._setFieldArray(n),()=>{const b=(P,_)=>{const C=V(t._fields,P);C&&C._f&&(C._f.mount=_)};t._options.shouldUnregister||a?t.unregister(n):b(n,!1)}),[n,t,s,a]),{swap:k.useCallback(A,[m,n,t]),move:k.useCallback(E,[m,n,t]),prepend:k.useCallback(v,[m,n,t]),append:k.useCallback(p,[m,n,t]),remove:k.useCallback(y,[m,n,t]),insert:k.useCallback(h,[m,n,t]),update:k.useCallback(I,[m,n,t]),replace:k.useCallback(x,[m,n,t]),fields:k.useMemo(()=>o.map((b,P)=>({...b,[s]:l.current[P]||Ye()})),[o,s])}}function uu(e={}){const r=k.useRef(void 0),t=k.useRef(void 0),[n,s]=k.useState({isDirty:!1,isValidating:!1,isLoading:Me(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Me(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:n},e.defaultValues&&!Me(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...o}=ou(e);r.current={...o,formState:n}}const a=r.current.control;return a._options=e,Rt(()=>{const i=a._subscribe({formState:a._proxyFormState,callback:()=>s({...a._formState}),reRenderRoot:!0});return s(o=>({...o,isReady:!0})),a._formState.isReady=!0,i},[a]),k.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),k.useEffect(()=>{e.mode&&(a._options.mode=e.mode),e.reValidateMode&&(a._options.reValidateMode=e.reValidateMode)},[a,e.mode,e.reValidateMode]),k.useEffect(()=>{e.errors&&(a._setErrors(e.errors),a._focusError())},[a,e.errors]),k.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]),k.useEffect(()=>{if(a._proxyFormState.isDirty){const i=a._getDirty();i!==n.isDirty&&a._subjects.state.next({isDirty:i})}},[a,n.isDirty]),k.useEffect(()=>{e.values&&!Ke(e.values,t.current)?(a._reset(e.values,{keepFieldsRef:!0,...a._options.resetOptions}),t.current=e.values,s(i=>({...i}))):a._resetDefaultValues()},[a,e.values]),k.useEffect(()=>{a._state.mount||(a._setValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),r.current.formState=ha(n,a),r.current}function cu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={exports:{}},In={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys;function fu(){if(ys)return In;ys=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return In.Fragment=r,In.jsx=t,In.jsxs=t,In}var ks;function mu(){return ks||(ks=1,vs.exports=fu()),vs.exports}var Te=mu();const gu=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Te.jsx(Pl,{variant:"warning",size:"small",children:Te.jsx(qe,{gap:"space-8",children:k.Children.map(e,r=>Te.jsx(ne,{size:"small",children:r},Ha(r)?r.key:r))})}),Un={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};yn(Un);var bs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var hs;function pu(){return hs||(hs=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,n.call(this,o)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)r.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(bs)),bs.exports}var vu=pu();const Tr=cu(vu),yu="_borderbox_1a0x6_1",ku="_error_1a0x6_5",bu="_warning_1a0x6_8",hu={borderbox:yu,error:ku,warning:bu};Tr.bind(hu);const Eu="_aksjonspunkt_11wjs_1",Ou="_erAksjonspunktApent_11wjs_4",Ru="_erIkkeGodkjentAvBeslutter_11wjs_8",wu={aksjonspunkt:Eu,erAksjonspunktApent:Ou,erIkkeGodkjentAvBeslutter:Ru};Tr.bind(wu);const Es=({dateString:e,year:r,month:t,day:n})=>Te.jsx(Te.Fragment,{children:Ms(e,{year:r,month:t,day:n})});yn(Un);const Os=({dateStringFom:e,dateStringTom:r,showTodayString:t=!1})=>Te.jsx(Te.Fragment,{children:za(e,r,{showTodayString:t})});yn(Un);const Au="_divider_1jpov_1",Tu="_dividerParagraf_1jpov_8",Iu="_leftPanel_1jpov_11",_u="_rightPanel_1jpov_14",ju={divider:Au,dividerParagraf:Tu,leftPanel:Iu,rightPanel:_u};Tr.bind(ju);const xa=()=>Te.jsx("span",{"data-testid":"editedIcon",children:Te.jsx(Si,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});yn(Un);const xu=yn(Un),Pu=({tekst:e,children:r})=>{const[t,n]=c.useState(!1);if(!e)return r;const s=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return Te.jsx(pa,{content:xu.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Te.jsx("span",{"aria-hidden":"true",onClick:s,children:r??e})})},Rs={default:"_default_af3od_1",rød:"_rød_af3od_5"},sr=({beløp:e,kr:r=!1,rød:t=!1})=>{const n=e?.toString().replace(/\s/g,"");return Te.jsx(Pu,{tekst:n,children:Te.jsxs("span",{className:t?Rs.rød:Rs.default,children:[n?Ya(n):"-",n&&r&&" kr"]})})};function Nu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ws={exports:{}},_n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As;function Su(){if(As)return _n;As=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return _n.Fragment=r,_n.jsx=t,_n.jsxs=t,_n}var Ts;function Mu(){return Ts||(Ts=1,ws.exports=Su()),ws.exports}var Ee=Mu();const Pa=e=>e.reduce((r,t,n)=>({...r,[n]:s=>t(s)||!0}),{}),Na=(e,r)=>r.split(".").reduce((t,n)=>t!==void 0?t[n]:t,e)?.message;var ar={exports:{}},Du=ar.exports,Is;function Fu(){return Is||(Is=1,function(e,r){(function(t,n){e.exports=n()})(Du,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,a=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,d={},l=function(h){return(h=+h)+(h>68?1900:2e3)},u=function(h){return function(A){this[h]=+A}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(h){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var E=A.match(/([+-]|\d\d)/g),I=60*E[1]+(+E[2]||0);return I===0?0:E[0]==="+"?-I:I}(h)}],m=function(h){var A=d[h];return A&&(A.indexOf?A:A.s.concat(A.f))},p=function(h,A){var E,I=d.meridiem;if(I){for(var x=1;x<=24;x+=1)if(h.indexOf(I(x,0,A))>-1){E=x>12;break}}else E=h===(A?"pm":"PM");return E},v={A:[o,function(h){this.afternoon=p(h,!1)}],a:[o,function(h){this.afternoon=p(h,!0)}],Q:[s,function(h){this.month=3*(h-1)+1}],S:[s,function(h){this.milliseconds=100*+h}],SS:[a,function(h){this.milliseconds=10*+h}],SSS:[/\d{3}/,function(h){this.milliseconds=+h}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[a,u("day")],Do:[o,function(h){var A=d.ordinal,E=h.match(/\d+/);if(this.day=E[0],A)for(var I=1;I<=31;I+=1)A(I).replace(/\[|\]/g,"")===h&&(this.day=I)}],w:[i,u("week")],ww:[a,u("week")],M:[i,u("month")],MM:[a,u("month")],MMM:[o,function(h){var A=m("months"),E=(m("monthsShort")||A.map(function(I){return I.slice(0,3)})).indexOf(h)+1;if(E<1)throw new Error;this.month=E%12||E}],MMMM:[o,function(h){var A=m("months").indexOf(h)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,u("year")],YY:[a,function(h){this.year=l(h)}],YYYY:[/\d{4}/,u("year")],Z:f,ZZ:f};function y(h){var A,E;A=h,E=d&&d.formats;for(var I=(h=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(K,$,S){var R=S&&S.toUpperCase();return $||E[S]||t[S]||E[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(T,N,F){return N||F.slice(1)})})).match(n),x=I.length,b=0;b<x;b+=1){var P=I[b],_=v[P],C=_&&_[0],B=_&&_[1];I[b]=B?{regex:C,parser:B}:P.replace(/^\[|\]$/g,"")}return function(K){for(var $={},S=0,R=0;S<x;S+=1){var T=I[S];if(typeof T=="string")R+=T.length;else{var N=T.regex,F=T.parser,q=K.slice(R),D=N.exec(q)[0];F.call($,D),K=K.replace(D,"")}}return function(M){var H=M.afternoon;if(H!==void 0){var Y=M.hours;H?Y<12&&(M.hours+=12):Y===12&&(M.hours=0),delete M.afternoon}}($),$}}return function(h,A,E){E.p.customParseFormat=!0,h&&h.parseTwoDigitYear&&(l=h.parseTwoDigitYear);var I=A.prototype,x=I.parse;I.parse=function(b){var P=b.date,_=b.utc,C=b.args;this.$u=_;var B=C[1];if(typeof B=="string"){var K=C[2]===!0,$=C[3]===!0,S=K||$,R=C[2];$&&(R=C[2]),d=this.$locale(),!K&&R&&(d=E.Ls[R]),this.$d=function(q,D,M,H){try{if(["x","X"].indexOf(D)>-1)return new Date((D==="X"?1e3:1)*q);var Y=y(D)(q),W=Y.year,J=Y.month,Se=Y.day,ge=Y.hours,ce=Y.minutes,le=Y.seconds,X=Y.milliseconds,ae=Y.zone,pe=Y.week,ye=new Date,ke=Se||(W||J?1:ye.getDate()),Qe=W||ye.getFullYear(),Ve=0;W&&!J||(Ve=J>0?J-1:ye.getMonth());var Ce,En=ge||0,On=ce||0,Kn=le||0,an=X||0;return ae?new Date(Date.UTC(Qe,Ve,ke,En,On,Kn,an+60*ae.offset*1e3)):M?new Date(Date.UTC(Qe,Ve,ke,En,On,Kn,an)):(Ce=new Date(Qe,Ve,ke,En,On,Kn,an),pe&&(Ce=H(Ce).week(pe).toDate()),Ce)}catch{return new Date("")}}(P,B,_,E),this.init(),R&&R!==!0&&(this.$L=this.locale(R).$L),S&&P!=this.format(B)&&(this.$d=new Date("")),d={}}else if(B instanceof Array)for(var T=B.length,N=1;N<=T;N+=1){C[1]=B[N-1];var F=E.apply(this,C);if(F.isValid()){this.$d=F.$d,this.$L=F.$L,this.init();break}N===T&&(this.$d=new Date(""))}else x.call(this,b)}}})}(ar)),ar.exports}var qu=Fu();const Lu=Nu(qu),Vu="_textarea_14c7r_1",Cu="_readOnlyField_14c7r_7",_s={textarea:Vu,readOnlyField:Cu},Bu=e=>e!=null&&e!=="",Uu=({label:e,value:r,isEdited:t=!1,type:n,hideLabel:s,size:a})=>Bu(r)?Ee.jsxs(qe,{gap:"space-4",children:[e&&!s&&Ee.jsx(fe,{size:a,children:e}),Ee.jsxs(ve,{gap:"space-8",align:"center",wrap:!1,children:[Ee.jsx(dr,{className:n==="textarea"?_s.textarea:_s.readOnlyField,size:a,children:r}),t&&Ee.jsx(xa,{})]})]}):null;xn.extend(Lu);const Ku=({label:e,description:r,validate:t=[],onChange:n,children:s,className:a,isReadOnly:i=!1,size:o="small",isEdited:d=!1,hideLegend:l=!1,...u})=>{const{name:f,control:m}=u,{formState:{errors:p}}=Ze(),{field:v}=Oa({name:f,control:m,rules:{validate:Pa(t)}});return Ee.jsx(Fd,{name:f,value:v.value!==void 0?v.value:null,legend:Ee.jsxs(ve,{justify:"center",gap:"space-8",children:[e,i&&d&&Ee.jsx(xa,{})]}),hideLegend:l,disabled:i,description:r,size:o,error:Na(p,f),onChange:y=>{n&&n(y),v.onChange(y)},className:a,children:s})},Gu="_textAreaFieldWithBadges_bdz0b_1",$u="_etikettWrapper_bdz0b_4",js={textAreaFieldWithBadges:Gu,etikettWrapper:$u},Hu=({name:e,control:r,label:t,readOnly:n,maxLength:s,badges:a,validate:i=[],parse:o=p=>p,className:d,description:l,isEdited:u,size:f="small",...m})=>{const{formState:{errors:p}}=Ze(),{field:v}=Oa({name:e,control:r,rules:{validate:c.useMemo(()=>Pa(i),[i])}});return n?Ee.jsx(Uu,{size:f,label:t,value:v.value,type:"textarea",isEdited:u,hideLabel:m.hideLabel}):Ee.jsxs("div",{className:a?js.textAreaFieldWithBadges:null,children:[a&&Ee.jsx("div",{className:js.etikettWrapper,children:a.map(({type:y,titleText:h})=>Ee.jsx(jd,{variant:y,size:"small",children:h},h))}),Ee.jsx(Kd,{size:f,label:t,description:l,className:d,autoComplete:"off",...v,onChange:y=>v.onChange(y.currentTarget.value!==""?o(y.currentTarget.value):null),value:v.value?v.value:"",error:Na(p,e),maxLength:s,...m})]})},zu=({formMethods:e,onSubmit:r,children:t,className:n,setDataOnUnmount:s})=>{const{handleSubmit:a,getValues:i}=e;return c.useEffect(()=>()=>{s&&s(i())},[]),Ee.jsx(Hd,{...e,children:Ee.jsx("form",{className:n,onSubmit:r?a(o=>r(o)):void 0,children:t})})};var ir=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(ir||{}),Ht={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var xs;function Yu(){return xs||(xs=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,n.call(this,o)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)r.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(Ht)),Ht.exports}var Wu=Yu();const Ju=Ps(Wu),Xu="_boks_wdh4x_1",Zu="_aksjonspunkt_wdh4x_9",Qu="_harBorderTop_wdh4x_13",Sa={boks:Xu,aksjonspunkt:Zu,harBorderTop:Qu},ec=Ju.bind(Sa),Ma=({harÅpentAksjonspunkt:e,harBorderTop:r,children:t})=>w.jsx("div",{className:ec(Sa.boks,{aksjonspunkt:e,harBorderTop:r}),children:t});Ma.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdBoks",props:{harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},harBorderTop:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const Da=({saksnummer:e,journalpostId:r,dokumentId:t,dokumentTittel:n,children:s})=>{const a=`${r}-${t}`,i=ai(e,r,t);return w.jsx(ga,{href:i,target:a,rel:"noopener noreferrer",onClick:nc(n),children:s??n})},nc=e=>r=>{e&&(r.preventDefault(),ii(r.currentTarget.href,r.currentTarget.target,e))};Da.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""}}};const tc="_inline_17flc_1",rc="_phoneIcon_17flc_5",sc="_docIcon_17flc_11",zt={inline:tc,phoneIcon:rc,docIcon:sc},Fa=({saksnummer:e,inntektsmelding:r})=>w.jsxs(qe,{gap:"space-16",children:[w.jsxs(ve,{gap:"space-16",children:[w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),w.jsx(ne,{size:"small",children:w.jsx(sr,{beløp:r.inntektPrMnd})})]}),w.jsxs(ve,{gap:"space-16",children:[w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),w.jsx(ne,{size:"small",children:w.jsx(Z,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd&&w.jsxs(ve,{gap:"space-16",children:[w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),w.jsx(ne,{size:"small",children:w.jsx(sr,{beløp:r.refusjonPrMnd})})]}),w.jsx(Da,{saksnummer:e,journalpostId:r.journalpostId,dokumentId:r.dokumentId,children:w.jsxs(ve,{gap:"space-4",children:[w.jsx(ne,{size:"small",className:zt.inline,children:w.jsx(Z,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),w.jsx(_i,{className:zt.docIcon})]})}),w.jsxs(ve,{gap:"space-16",align:"center",children:[w.jsx(Di,{className:zt.phoneIcon}),w.jsxs(qe,{gap:"space-4",children:[w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),w.jsx(nt,{children:r.kontaktpersonNavn}),w.jsx(nt,{children:w.jsx(Z,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]});Fa.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const ac="_inline_p7hb9_1",ic="_arrow_p7hb9_5",Yt={inline:ac,arrow:ic},qa=({inntektsposter:e,skjæringstidspunkt:r})=>{const[t,n]=c.useState(!1),s=oc(r,e);return w.jsxs(w.Fragment,{children:[e.length>0&&w.jsxs(qe,{gap:"space-8",children:[w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"InntektsposterPanel.Inntekter"})}),w.jsx(qe,{gap:"space-4",width:"150px",children:s.filter((a,i)=>t?!0:i<3).map(a=>w.jsxs(ve,{justify:"space-between",children:[w.jsxs(ve,{gap:"space-4",children:[w.jsx(ne,{size:"small",children:w.jsx(Z,{id:`InntektsposterPanel.${xn(a.fom).month()+1}`})}),w.jsx(ne,{size:"small",children:xn(a.fom).year()})]},a.fom),w.jsx(ne,{size:"small",children:w.jsx(sr,{beløp:a.beløp})})]},a.fom))}),w.jsxs(ga,{onClick:a=>{a.preventDefault(),n(!t)},href:"",children:[w.jsx("span",{children:w.jsx(ne,{size:"small",className:Yt.inline,children:w.jsx(Z,{id:t?"InntektsposterPanel.FaerreManeder":"InntektsposterPanel.TidligereManeder"})})}),t?w.jsx(Ai,{className:Yt.arrow}):w.jsx(Cs,{className:Yt.arrow})]})]}),e.length===0&&w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"InntektsposterPanel.IngenInntekt"})})]})},oc=(e,r)=>{const n=xn(e).startOf("month"),s=n.subtract(12,"month"),a=[];for(let i=n;i.isAfter(s);i=i.subtract(1,"month")){const o=i.format(Pr),d=r.find(l=>xn(l.fom).startOf("month").format(Pr)===o);a.push({beløp:d?.beløp||0,fom:o})}return a};qa.__docgenInfo={description:"",methods:[],displayName:"InntektsposterPanel",props:{inntektsposter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const lc="_hjelpetekst_tiqup_1",dc="_image_tiqup_5",uc="_hjelpetekstInnhold_tiqup_9",cc="_exclamationmarkIcon_tiqup_14",fc="_checkmarkIcon_tiqup_21",jn={hjelpetekst:lc,image:dc,hjelpetekstInnhold:uc,exclamationmarkIcon:cc,checkmarkIcon:fc},mc="arbeidsforhold",La=({index:e,fieldId:r,saksnummer:t,sorterteArbeidsforhold:n,arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:a,isReadOnly:i,harÅpentAksjonspunkt:o,skjæringstidspunkt:d,alleKodeverk:l})=>{const u=Ns(),{control:f}=Ze(),{inntektsmeldinger:m,inntekter:p}=s,v=n[e],y=m.find(_=>gc(v,_)),h=p.find(_=>_.arbeidsgiverIdent===v.arbeidsgiverIdent)?.inntekter,A=n.filter(_=>_.arbeidsgiverIdent===v.arbeidsgiverIdent).length>1,E=a[v.arbeidsgiverIdent],I=c.useRef(null),[x,b]=c.useState(!1),P=()=>b(_=>!_);return w.jsx(Ma,{harÅpentAksjonspunkt:o,harBorderTop:e===0,children:w.jsxs(ve,{gap:"space-24",children:[!o&&w.jsx(hi,{title:u.formatMessage({id:"ArbeidsforholdFieldArray.Ok"}),className:jn.checkmarkIcon}),o&&w.jsx(Bs,{title:u.formatMessage({id:"ArbeidsforholdFieldArray.Aksjonspunkt"}),className:jn.exclamationmarkIcon}),w.jsxs(qe,{gap:"space-16",width:"90%",children:[w.jsxs(ve,{justify:"space-between",children:[w.jsxs("div",{children:[w.jsx(fe,{size:"small",children:E.navn}),v.arbeidsgiverIdent&&w.jsxs(nt,{children:["(",E.erPrivatPerson&&E.fødselsdato?w.jsx(Es,{dateString:E.fødselsdato}):v.arbeidsgiverIdent,")"]})]}),w.jsxs("div",{children:[w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"ArbeidsforholdFieldArray.Periode"})}),w.jsx(ne,{size:"small",children:v?w.jsx(Os,{dateStringFom:v.fom,dateStringTom:v.tom}):"-"})]}),w.jsxs("div",{children:[w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"ArbeidsforholdFieldArray.Kilde"})}),w.jsx(ne,{size:"small",children:w.jsx(Z,{id:v?"ArbeidsforholdFieldArray.AaRegisteret":"ArbeidsforholdFieldArray.Inntektsmelding"})})]}),w.jsxs("div",{children:[w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"ArbeidsforholdFieldArray.InntektsmeldingMottatt"})}),w.jsxs(ne,{size:"small",children:[y?.motattDato&&w.jsx(Es,{dateString:y.motattDato}),!y?.motattDato&&w.jsx(Z,{id:"ArbeidsforholdFieldArray.IkkeMottatt"})]})]})]}),A&&v.eksternArbeidsforholdId&&w.jsxs(ve,{gap:"space-8",children:[w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"ArbeidsforholdFieldArray.Id"})}),w.jsxs("div",{children:[v.eksternArbeidsforholdId.length<50&&w.jsx(ne,{size:"small",children:v.eksternArbeidsforholdId}),v.eksternArbeidsforholdId.length>=50&&w.jsx(pa,{content:pc(v.eksternArbeidsforholdId),placement:"bottom",children:w.jsx(ne,{size:"small",children:`${v.eksternArbeidsforholdId.substring(0,50)}...`})})]})]}),v.stillingsprosent&&w.jsxs(ve,{gap:"space-8",children:[w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"ArbeidsforholdFieldArray.Stillingsprosent"})}),w.jsx(ne,{size:"small",children:`${v.stillingsprosent}%`})]}),v.permisjonOgMangel&&w.jsx(ve,{gap:"space-8",children:w.jsxs(w.Fragment,{children:[w.jsx(fe,{size:"small",children:`${l.PermisjonsbeskrivelseType.find(_=>_.kode===v.permisjonOgMangel?.type)?.navn??""} 100%`}),w.jsx(ne,{size:"small",children:w.jsx(Os,{dateStringFom:v.permisjonOgMangel.permisjonFom,dateStringTom:void 0})})]})}),y&&w.jsx(Fa,{saksnummer:t,inntektsmelding:y}),!y&&h&&w.jsx(qa,{inntektsposter:h,skjæringstidspunkt:d}),w.jsxs(Ku,{name:`${mc}.${e}.permisjonStatus`,control:f,label:w.jsxs(ve,{gap:"space-8",children:[w.jsx(Z,{id:"ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed"}),w.jsxs("div",{className:jn.image,children:[w.jsx(yr,{ref:I,type:"button",variant:"tertiary",onClick:P,icon:w.jsx(qi,{title:u.formatMessage({id:"ArbeidsforholdFieldArray.AltHjelpetekst"})})}),w.jsx(er,{open:x,onClose:P,anchorEl:I.current,className:jn.hjelpetekst,children:w.jsx(er.Content,{className:jn.hjelpetekstInnhold,children:w.jsxs(qe,{gap:"space-8",children:[w.jsx(ne,{children:w.jsx(Z,{id:"ArbeidsforholdFieldArray.HjelpetekstDel1"})}),w.jsx(ne,{children:w.jsx(Z,{id:"ArbeidsforholdFieldArray.HjelpetekstDel2"})}),w.jsx(ne,{children:w.jsx(Z,{id:"ArbeidsforholdFieldArray.HjelpetekstDel3"})}),w.jsx(ne,{children:w.jsx(Z,{id:"ArbeidsforholdFieldArray.HjelpetekstDel4"})})]})})})]})]}),validate:[Ds],isReadOnly:i,children:[w.jsx(ts,{value:ir.IKKE_BRUK_PERMISJON,size:"small",children:w.jsx(Z,{id:y?"ArbeidsforholdFieldArray.TaMedArbeidsforhold":"ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding"})}),w.jsx(ts,{value:ir.BRUK_PERMISJON,size:"small",children:w.jsx(Z,{id:"ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold"})})]})]})]})},r)},gc=(e,r)=>r.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!r.internArbeidsforholdId||r.internArbeidsforholdId===e.internArbeidsforholdId),pc=e=>{const r=Math.ceil(e.length/25);return Array.from({length:r},(n,s)=>e.slice(s*25,s*25+25)).join("-")};La.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdField",props:{index:{required:!0,tsType:{name:"number"},description:""},fieldId:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const vc="arbeidsforhold",Va=({saksnummer:e,sorterteArbeidsforhold:r,arbeidOgInntekt:t,arbeidsgiverOpplysningerPerId:n,isReadOnly:s,harÅpentAksjonspunkt:a,skjæringstidspunkt:i,alleKodeverk:o})=>{const{control:d}=Ze(),{fields:l}=du({control:d,name:vc});return w.jsx("div",{children:l.map((u,f)=>w.jsx(La,{fieldId:u.id,index:f,saksnummer:e,sorterteArbeidsforhold:r,arbeidOgInntekt:t,arbeidsgiverOpplysningerPerId:n,isReadOnly:s,harÅpentAksjonspunkt:a,skjæringstidspunkt:i,alleKodeverk:o},u.id))})};Va.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const yc=Xa(3),kc=Za(1500),bc=e=>(r,t)=>e[r.arbeidsgiverIdent].navn.localeCompare(e[t.arbeidsgiverIdent].navn),Ca=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:r})=>{const{aksjonspunkterForPanel:t,fagsak:n,submitCallback:s,isReadOnly:a,alleKodeverk:i}=Wa(),o={inntektsmeldinger:e.inntektsmeldinger,arbeidsforhold:e.arbeidsforhold.filter(y=>y.permisjonOgMangel?.årsak),inntekter:e.inntekter,skjæringstidspunkt:e.skjæringstidspunkt},{arbeidsforhold:d}=o,l=[...d].sort(bc(r)),u={arbeidsforhold:l.map(y=>({permisjonStatus:y.permisjonOgMangel?.permisjonStatus})),begrunnelse:t[0].begrunnelse??""},{mellomlagretFormData:f,setMellomlagretFormData:m}=Ja(),p=uu({defaultValues:f??u});c.useEffect(()=>()=>{m(p.getValues())},[]);const v=t.some(y=>y.status===Fn.OPPRETTET);return w.jsxs(qe,{gap:"space-32",children:[w.jsxs(ve,{justify:"space-between",children:[w.jsx(fi,{size:"small",level:"2",children:w.jsx(Z,{id:"PermisjonFaktaPanel.Overskrift"})}),w.jsx(ne,{size:"small",children:w.jsx(Z,{id:"PermisjonFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ms(o.skjæringstidspunkt)}})})]}),v&&w.jsx(gu,{children:w.jsx(Z,{id:"PermisjonFaktaPanel.PermisjonUtenSluttdato"})}),w.jsx(zu,{formMethods:p,onSubmit:y=>s({kode:kn.VURDER_ARBEIDSFORHOLD_PERMISJON,arbeidsforhold:y.arbeidsforhold.map((h,A)=>({internArbeidsforholdId:l[A].internArbeidsforholdId,arbeidsgiverIdent:l[A].arbeidsgiverIdent,permisjonStatus:h.permisjonStatus})),begrunnelse:y.begrunnelse}),children:w.jsxs(qe,{gap:"space-24",children:[w.jsx(Va,{saksnummer:n.saksnummer,sorterteArbeidsforhold:l,arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:r,isReadOnly:a,harÅpentAksjonspunkt:v,skjæringstidspunkt:o.skjæringstidspunkt,alleKodeverk:i}),w.jsx(Hu,{name:"begrunnelse",control:p.control,label:w.jsx(fe,{size:"small",children:w.jsx(Z,{id:"PermisjonFaktaPanel.Begrunn"})}),validate:[Ds,yc,kc,Qa],maxLength:1500,readOnly:a}),!a&&w.jsx("div",{children:w.jsx(yr,{size:"small",variant:"primary",disabled:!p.formState.isDirty||p.formState.isSubmitting,loading:p.formState.isSubmitting,children:w.jsx(Z,{id:"PermisjonFaktaPanel.Bekreft"})})})]})})]})};Ca.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const hc={"PermisjonFaktaPanel.Overskrift":"Fakta om permisjon","PermisjonFaktaPanel.Arbeidsforhold":"Arbeidsforhold","PermisjonFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","PermisjonFaktaPanel.Bekreft":"Bekreft og fortsett","PermisjonFaktaPanel.PermisjonUtenSluttdato":"Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.","PermisjonFaktaPanel.Begrunn":"Begrunn valget","ArbeidsforholdFieldArray.Periode":"Periode","ArbeidsforholdFieldArray.Kilde":"Kilde","ArbeidsforholdFieldArray.InntektsmeldingMottatt":"Inntektsmelding","ArbeidsforholdFieldArray.Saksbehandler":"Saksbehandler","ArbeidsforholdFieldArray.AaRegisteret":"A-inntekt","ArbeidsforholdFieldArray.Inntektsmelding":"Inntektsmelding","ArbeidsforholdFieldArray.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdFieldArray.Ok":"Arbeidsforhold er OK","ArbeidsforholdFieldArray.HjelpetekstDel1":"Søker er registrert med permisjon eller permittering uten sluttdato fra arbeidsforholdet sitt i Aa-reg. Vurder om dette arbeidsforholdet skal være med i beregningen. Dersom det fjernes vil det bli borte fra beregningen og eventuell mottatt inntektsmelding vil ikke brukes. Tas det med, vil det brukes i beregningen og bli med videre i behandlingen.","ArbeidsforholdFieldArray.HjelpetekstDel2":"Dersom arbeidsforholdet tas med og det trengs inntektsmelding, må dette innhentes.","ArbeidsforholdFieldArray.HjelpetekstDel3":"Permisjoner eller permitteringer med en sluttdato tas automatisk med. Du trenger ikke etterspørre inntektsmeldinger.","ArbeidsforholdFieldArray.HjelpetekstDel4":"Mottas det inntektsmelding med refusjonskrav vil denne brukes i behandlingen.","ArbeidsforholdFieldArray.Id":"ID","ArbeidsforholdFieldArray.Stillingsprosent":"Stillingsprosent","ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed":"Skal arbeidsforholdet tas med?","ArbeidsforholdFieldArray.TaMedArbeidsforhold":"Fjern permisjonen og ta med arbeidsforholdet","ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding":"Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes","ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold":"Ikke ta med arbeidsforholdet","ArbeidsforholdFieldArray.IkkeMottatt":"Ikke mottatt","ArbeidsforholdFieldArray.AltHjelpetekst":"Hjelpetekst","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsposterPanel.Inntekter":"Inntekter (fra A-inntekt)","InntektsposterPanel.1":"Jan","InntektsposterPanel.2":"Feb","InntektsposterPanel.3":"Mars","InntektsposterPanel.4":"Apr","InntektsposterPanel.5":"Mai","InntektsposterPanel.6":"Jun","InntektsposterPanel.7":"Jul","InntektsposterPanel.8":"Aug","InntektsposterPanel.9":"Sep","InntektsposterPanel.10":"Okt","InntektsposterPanel.11":"Nov","InntektsposterPanel.12":"Des","InntektsposterPanel.TidligereManeder":"Tidligere måneder ","InntektsposterPanel.FaerreManeder":"Siste måneder ","InntektsposterPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-inntekt"},Ec=yn(hc),or=e=>w.jsx(ei,{value:Ec,children:w.jsx(Ca,{...e})});or.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const lr={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},_c={title:"fakta/fakta-permisjon",component:or,decorators:[ni,ti],render:e=>w.jsx(or,{...e})},Yn={args:{aksjonspunkterForPanel:[{definisjon:kn.VURDER_ARBEIDSFORHOLD_PERMISJON,status:Fn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"91090909+",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5",eksternArbeidsforholdId:"ARB001-002",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Xe.PERMITTERING},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Wn={args:{aksjonspunkterForPanel:[{definisjon:kn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Fn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-02",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Je.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2021-11-07",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...lr,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Jn={args:{aksjonspunkterForPanel:[{definisjon:kn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Fn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001-asdfasdfasdf-asdfadsfertbrtynet65y454hrthfdsgfbdsfgb",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-02",type:Xe.VELFERDSPERMISJON,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",permisjonOgMangel:{permisjonFom:"2021-11-07",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...lr,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001-asdfasdfasdf-asdfadsfertbrtynet65y454hrthfdsgfbdsfgb",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...lr,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Xn={args:{aksjonspunkterForPanel:[{definisjon:kn.VURDER_ARBEIDSFORHOLD_PERMISJON,status:Fn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}};Yn.parameters={...Yn.parameters,docs:{...Yn.parameters?.docs,source:{originalSource:`{
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
}`,...Xn.parameters?.docs?.source}}};const jc=["EttArbeidsforholdUtenSluttdatoForPermisjon","FlereArbeidsforhold","FlereArbeidsforholdFraSammeArbeidsgiver","VisFødselsdatoNårPrivatperson"];export{Yn as EttArbeidsforholdUtenSluttdatoForPermisjon,Wn as FlereArbeidsforhold,Jn as FlereArbeidsforholdFraSammeArbeidsgiver,Xn as VisFødselsdatoNårPrivatperson,jc as __namedExportsOrder,_c as default};
