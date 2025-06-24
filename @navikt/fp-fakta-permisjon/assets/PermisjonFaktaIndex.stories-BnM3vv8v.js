import{g as $s,r as f,u as Gs,_ as _r,s as jr,c as Mn,a as ie,b,d as ft,e as mt,T as ii,S as Dn,m as oi,f as gt,R as Hs,q as li,o as zs,t as di,P as ui,h as on,i as tn,j as A,k as xr,l as ci,n as fi,A as Fn,p as mi,w as gi,v as pi}from"./iframe-BCR_nI3v.js";import{r as vi}from"./index-Cq84u2Rw.js";var Ys=vi();const et=$s(Ys);function yi(e,r){var t=e.values,n=_r(e,["values"]),s=r.values,a=_r(r,["values"]);return jr(s,t)&&jr(n,a)}function Ws(e){var r=Gs(),t=r.formatMessage,n=r.textComponent,s=n===void 0?f.Fragment:n,a=e.id,i=e.description,o=e.defaultMessage,l=e.values,d=e.children,u=e.tagName,g=u===void 0?s:u,p=e.ignoreTag,c={id:a,description:i,defaultMessage:o},y=t(c,l,{ignoreTag:p});return typeof d=="function"?d(Array.isArray(y)?y:[y]):g?f.createElement(g,null,y):f.createElement(f.Fragment,null,y)}Ws.displayName="FormattedMessage";var ee=f.memo(Ws,yi);ee.displayName="MemoizedFormattedMessage";var hn=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(hn||{}),Xe=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(Xe||{});const ki=(e,r,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${r}&dokumentId=${t}`,bi=(e,r,t)=>{const n=window.open(e,r);n&&setTimeout(()=>{n.document.title=t},1e3)},En=e=>Mn({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var hi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Js=f.forwardRef((e,r)=>{var{className:t,size:n="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,g=hi(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=ie();return b.createElement(s,Object.assign({},g,{ref:r,className:p(t,"navds-body-long",`navds-body-long--${n}`,En({spacing:a,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var Ei=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ne=f.forwardRef((e,r)=>{var{className:t,size:n="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,g=Ei(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=ie();return b.createElement(s,Object.assign({},g,{ref:r,className:p(t,"navds-body-short",`navds-body-short--${n}`,En({spacing:a,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var Oi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const nt=f.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:s,uppercase:a,as:i="p",truncate:o,weight:l="regular",align:d,visuallyHidden:u,textColor:g}=e,p=Oi(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=ie();return b.createElement(i,Object.assign({},p,{ref:r,className:c(t,"navds-detail",En({spacing:s,truncate:o,weight:l,align:d,visuallyHidden:u,textColor:g,uppercase:a}),{"navds-detail--small":n==="small"})}))});var Ri=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const dr=f.forwardRef((e,r)=>{var{children:t,className:n,size:s,spacing:a,as:i="p",showIcon:o=!1}=e,l=Ri(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=ie();return b.createElement(i,Object.assign({},l,{ref:r,className:d("navds-error-message","navds-label",n,En({spacing:a}),{"navds-label--small":s==="small","navds-error-message--show-icon":o})}),o&&b.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},b.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var wi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ai=f.forwardRef((e,r)=>{var{level:t="1",size:n,className:s,as:a,spacing:i,align:o,visuallyHidden:l,textColor:d}=e,u=wi(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=ie(),p=a??`h${t}`;return b.createElement(p,Object.assign({},u,{ref:r,className:g(s,"navds-heading",`navds-heading--${n}`,En({spacing:i,align:o,visuallyHidden:l,textColor:d}))}))});var Ti=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};f.forwardRef((e,r)=>{var{className:t,spacing:n,as:s="p"}=e,a=Ti(e,["className","spacing","as"]);const{cn:i}=ie();return b.createElement(s,Object.assign({},a,{ref:r,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Ii=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const me=f.forwardRef((e,r)=>{var{className:t,size:n="medium",as:s="label",spacing:a,visuallyHidden:i,textColor:o}=e,l=Ii(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=ie();return b.createElement(s,Object.assign({},l,{ref:r,className:d(t,"navds-label",En({spacing:a,visuallyHidden:i,textColor:o}),{"navds-label--small":n==="small"})}))});function Xs(e,r=166,t=!1){let n;function s(...a){const i=()=>{n=void 0,e.apply(this,a)};!n&&t&&i(),clearTimeout(n),n=setTimeout(i,r)}return s.clear=()=>{clearTimeout(n)},s}function qe(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}const vn=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};let Pr=0;function _i(e){const[r,t]=f.useState(e),n=e||r;return f.useEffect(()=>{r==null&&(Pr+=1,t(`aksel-id-${Pr}`))},[r]),n}const Sr=b.useId;function rn(e){var r;if(Sr!==void 0){const t=Sr();return e??t.replace(/(:)/g,"")}return(r=_i(e))!==null&&r!==void 0?r:""}function Sn(e,r=[]){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useCallback((...n)=>{var s;return(s=t.current)===null||s===void 0?void 0:s.call(t,...n)},r)}function ji({value:e,defaultValue:r,onChange:t}){const n=Sn(t),[s,a]=f.useState(r),i=e!==void 0,o=i?e:s,l=Sn(d=>{const g=typeof d=="function"?d(o):d;i||a(g),n(g)},[i,n,o]);return[o,l]}let Nr=0;function xi(e){const[r,t]=f.useState(e),n=e||r;return f.useEffect(()=>{r==null&&(Nr+=1,t(`aksel-icon-${Nr}`))},[r]),n}const Mr=b.useId;function we(e){var r;return Mr!==void 0?Mr().replace(/(:)/g,""):(r=xi(e))!==null&&r!==void 0?r:""}var Pi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Si=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Pi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Ni=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Mi=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ni(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var Di=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Fi=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Di(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var qi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Li=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=qi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Vi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ci=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Vi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var Bi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Zs=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Bi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Ui=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ki=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Ui(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var $i=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Gi=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=$i(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Hi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Qs=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Hi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var zi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Yi=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=zi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Wi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ji=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Wi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var Xi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Zi=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Xi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var Qi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const eo=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=Qi(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var no=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const to=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,s=no(e,["title","titleId"]);let a=we();return a=t?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},s),t?f.createElement("title",{id:a},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function ea(e,r,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e==null||e(s),t===!1||!s.defaultPrevented)return r==null?void 0:r(s)}}const[Af,na]=ft({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function wt(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function An(e){return(r,t)=>{const n=t!=null&&t.context?String(t.context):"standalone";let s;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=t!=null&&t.width?String(t.width):i;s=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=t!=null&&t.width?String(t.width):e.defaultWidth;s=e.values[o]||e.values[i]}const a=e.argumentCallback?e.argumentCallback(r):r;return s[a]}}function Tn(e){return(r,t={})=>{const n=t.width,s=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],a=r.match(s);if(!a)return null;const i=a[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?so(o,g=>g.test(i)):ro(o,g=>g.test(i));let d;d=e.valueCallback?e.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;const u=r.slice(i.length);return{value:d,rest:u}}}function ro(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function so(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function ao(e){return(r,t={})=>{const n=r.match(e.matchPattern);if(!n)return null;const s=n[0],a=r.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;const o=r.slice(s.length);return{value:i,rest:o}}}const io={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},oo=(e,r,t)=>{let n;const s=io[e];return typeof s=="string"?n=s:r===1?n=s.one:n=s.other.replace("{{count}}",String(r)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},lo={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},uo={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},co={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},fo={date:wt({formats:lo,defaultWidth:"full"}),time:wt({formats:uo,defaultWidth:"full"}),dateTime:wt({formats:co,defaultWidth:"full"})},mo={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},go=(e,r,t,n)=>mo[e],po={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},vo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},yo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ko={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},bo={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},ho=(e,r)=>Number(e)+".",Eo={ordinalNumber:ho,era:An({values:po,defaultWidth:"wide"}),quarter:An({values:vo,defaultWidth:"wide",argumentCallback:e=>e-1}),month:An({values:yo,defaultWidth:"wide"}),day:An({values:ko,defaultWidth:"wide"}),dayPeriod:An({values:bo,defaultWidth:"wide"})},Oo=/^(\d+)\.?/i,Ro=/\d+/i,wo={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Ao={any:[/^f/i,/^e/i]},To={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Io={any:[/1/i,/2/i,/3/i,/4/i]},_o={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},jo={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},xo={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Po={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},So={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},No={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Mo={ordinalNumber:ao({matchPattern:Oo,parsePattern:Ro,valueCallback:e=>parseInt(e,10)}),era:Tn({matchPatterns:wo,defaultMatchWidth:"wide",parsePatterns:Ao,defaultParseWidth:"any"}),quarter:Tn({matchPatterns:To,defaultMatchWidth:"wide",parsePatterns:Io,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Tn({matchPatterns:_o,defaultMatchWidth:"wide",parsePatterns:jo,defaultParseWidth:"any"}),day:Tn({matchPatterns:xo,defaultMatchWidth:"wide",parsePatterns:Po,defaultParseWidth:"any"}),dayPeriod:Tn({matchPatterns:So,defaultMatchWidth:"any",parsePatterns:No,defaultParseWidth:"any"})},Do={code:"nb",formatDistance:oo,formatLong:fo,formatRelative:go,localize:Eo,match:Mo,options:{weekStartsOn:1,firstWeekContainsDate:4}},Fo={global:{dateLocale:Do,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},qo=f.createContext({locale:Fo}),ta=()=>f.useContext(qo);var Lo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Vo=f.forwardRef((e,r)=>{var t,n,s,{rootElement:a,asChild:i}=e,o=Lo(e,["rootElement","asChild"]);const l=mt(!1),d=(t=ta())===null||t===void 0?void 0:t.rootElement,u=(n=a??d)!==null&&n!==void 0?n:(s=globalThis==null?void 0:globalThis.document)===null||s===void 0?void 0:s.body,g=i?Dn:"div";return l?u?et.createPortal(b.createElement(ii,{theme:l.theme,asChild:!0,hasBackground:!1},b.createElement(g,Object.assign({ref:r,"data-aksel-portal":""},o))),u):null:u?et.createPortal(b.createElement(g,Object.assign({ref:r,"data-aksel-portal":""},o)),u):null});function Dr(e){return e.sort((r,t)=>{const n=r.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const Co=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Fr(e,r,t){let n=e+1;return t&&n>=r&&(n=0),n}function qr(e,r,t){let n=e-1;return t&&n<0&&(n=r),n}const At=e=>e;class Bo{constructor(){this.descendants=new Map,this.register=r=>{if(r!=null)return Co(r)?this.registerNode(r):t=>{this.registerNode(t,r)}},this.unregister=r=>{this.descendants.delete(r);const t=Dr(Array.from(this.descendants.keys()));this.assignIndex(t)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=r=>{this.descendants.forEach(t=>{const n=r.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index),this.enabledValues=()=>this.values().filter(r=>!r.disabled),this.item=r=>{if(this.count()!==0)return this.values()[r]},this.enabledItem=r=>{if(this.enabledCount()!==0)return this.enabledValues()[r]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const r=this.enabledValues().length-1;return this.enabledItem(r)},this.indexOf=r=>{var t,n;return r&&(n=(t=this.descendants.get(r))===null||t===void 0?void 0:t.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=r=>r==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(r)),this.next=(r,t=!0)=>{const n=Fr(r,this.count(),t);return this.item(n)},this.nextEnabled=(r,t=!0)=>{const n=this.item(r);if(!n)return;const s=this.enabledIndexOf(n.node),a=Fr(s,this.enabledCount(),t);return this.enabledItem(a)},this.prev=(r,t=!0)=>{const n=qr(r,this.count()-1,t);return this.item(n)},this.prevEnabled=(r,t=!0)=>{const n=this.item(r);if(!n)return;const s=this.enabledIndexOf(n.node),a=qr(s,this.enabledCount()-1,t);return this.enabledItem(a)},this.registerNode=(r,t)=>{if(!r)return;const n=this.descendants.get(r);if(n){this.descendants.set(r,Object.assign({index:n.index,node:r},t));return}const s=Array.from(this.descendants.keys()).concat(r),a=Dr(s);t!=null&&t.disabled&&(t.disabled=!!t.disabled);const i=Object.assign({node:r,index:-1},t);this.descendants.set(r,i),this.assignIndex(a)}}}function Uo(){const[e,r]=ft({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),t=At(a=>b.createElement(e,Object.assign({},a.value),a.children));function n(a){const i=r(),[o,l]=f.useState(-1),d=f.useRef(null);vn(()=>()=>{d.current&&i.unregister(d.current)},[]),vn(()=>{if(!d.current)return;const g=Number(d.current.dataset.index);o!==g&&!Number.isNaN(g)&&l(g)});const u=At(a?i.register(a):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(d.current),register:oi([u,d])}}function s(){return f.useRef(new Bo).current}return[t,r,s,n]}function Ko(e,r=globalThis==null?void 0:globalThis.document){const t=Sn(e);f.useEffect(()=>{const n=s=>{s.key==="Escape"&&t(s)};return r.addEventListener("keydown",n,!0),()=>r.removeEventListener("keydown",n,!0)},[t,r])}const ra={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function sa(e,r,t,{discrete:n}={discrete:!1}){if(!r)return;const s=t.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});s.addEventListener(e,r,{once:!0}),n&&s?et.flushSync(()=>s.dispatchEvent(a)):s.dispatchEvent(a)}function $o(e,r=globalThis==null?void 0:globalThis.document){const t=Sn(e),n=f.useRef(!1);return f.useEffect(()=>{const s=a=>{if(a.target&&!n.current){const i={originalEvent:a};sa(ra.FOCUS_OUTSIDE,t,i)}};return r.addEventListener("focusin",s),()=>r.removeEventListener("focusin",s)},[r,t]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function Go(e,r=globalThis==null?void 0:globalThis.document){const t=Sn(e),n=f.useRef(!1),s=f.useRef(()=>{});return f.useEffect(()=>{const a=o=>{function l(){sa(ra.POINTER_DOWN_OUTSIDE,t,{originalEvent:o},{discrete:!0})}o.target&&!n.current?o.pointerType==="touch"?(r.removeEventListener("click",s.current),s.current=l,r.addEventListener("click",s.current,{once:!0})):l():r.removeEventListener("click",s.current),n.current=!1},i=window.setTimeout(()=>{r.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),r.removeEventListener("pointerdown",a),r.removeEventListener("click",s.current)}},[r,t]),{onPointerDownCapture:()=>{n.current=!0}}}var Ho=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const[zo,Yo,Wo,Jo]=Uo();let un=0,Lr;const Xo=f.forwardRef((e,r)=>Yo(!1)?b.createElement(Vr,Object.assign({ref:r},e)):b.createElement(Zo,null,b.createElement(Vr,Object.assign({ref:r},e)))),Zo=({children:e})=>{const r=Wo();return b.createElement(zo,{value:r},e)},Vr=f.forwardRef((e,r)=>{var t,{children:n,asChild:s,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:l,onDismiss:d,safeZone:u,disableOutsidePointerEvents:g=!1,enabled:p=!0}=e,c=Ho(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,y]=f.useState({}),{register:k,index:v,descendants:w}=Jo({disableOutsidePointerEvents:g,disabled:!p,forceUpdate:()=>y({})}),[h,R]=f.useState(null),x=gt(R,k,r),_=(t=h==null?void 0:h.ownerDocument)!==null&&t!==void 0?t:globalThis==null?void 0:globalThis.document,P=f.useRef(!1),I=f.useRef(!1),S=(()=>{let E=-1;return w.enabledValues().forEach((N,L)=>{N.disableOutsidePointerEvents&&(E=L)}),{isPointerEventsEnabled:v>=E,isBodyPointerEventsDisabled:un>0,pointerStyle:v>=E&&un>0?"auto":void 0}})();function M(E){var T,N;if(!(u!=null&&u.anchor)&&!(u!=null&&u.dismissable)||!p)return;E.defaultPrevented||(P.current=!0,E.detail.originalEvent.type==="pointerdown"&&(I.current=!0));const L=E.target;E.detail.originalEvent.type==="pointerdown"?(!((T=u==null?void 0:u.anchor)===null||T===void 0)&&T.contains(L)||L===(u==null?void 0:u.anchor))&&E.preventDefault():!(L instanceof HTMLElement&&![u==null?void 0:u.anchor,u==null?void 0:u.dismissable].some(q=>q==null?void 0:q.contains(L))&&!L.contains((N=u==null?void 0:u.dismissable)!==null&&N!==void 0?N:null))&&E.preventDefault(),E.detail.originalEvent.type==="focusin"&&I.current&&E.preventDefault(),I.current=!1,P.current=!1}const K=Go(E=>{!S.isPointerEventsEnabled||!p||(i==null||i(E),l==null||l(E),u&&M(E),!E.defaultPrevented&&d&&d())},_),G=$o(E=>{p&&(o==null||o(E),l==null||l(E),u&&M(E),!E.defaultPrevented&&d&&d())},_);Ko(E=>{!p||!(v===w.enabledCount()-1)||(a==null||a(E),!E.defaultPrevented&&d&&(E.preventDefault(),d()))},_),f.useEffect(()=>{if(!(!h||!p||!g))return un===0&&(Lr=_.body.style.pointerEvents,_.body.style.pointerEvents="none"),un++,()=>{un===1&&(_.body.style.pointerEvents=Lr),un--}},[h,_,g,w,p]),f.useEffect(()=>()=>w.values().forEach(E=>E.forceUpdate()),[w,h]);const D=s?Dn:"div";return b.createElement(D,Object.assign({ref:x},c,{onFocusCapture:G.onFocusCapture,onBlurCapture:G.onBlurCapture,onPointerDownCapture:K.onPointerDownCapture,style:Object.assign({pointerEvents:S.pointerStyle},c.style)}),n)}),yn=Math.min,nn=Math.max,tt=Math.round,Gn=Math.floor,Fe=e=>({x:e,y:e}),Qo={left:"right",right:"left",bottom:"top",top:"bottom"},el={start:"end",end:"start"};function zt(e,r,t){return nn(e,yn(r,t))}function qn(e,r){return typeof e=="function"?e(r):e}function sn(e){return e.split("-")[0]}function Ln(e){return e.split("-")[1]}function aa(e){return e==="x"?"y":"x"}function ur(e){return e==="y"?"height":"width"}function kn(e){return["top","bottom"].includes(sn(e))?"y":"x"}function cr(e){return aa(kn(e))}function nl(e,r,t){t===void 0&&(t=!1);const n=Ln(e),s=cr(e),a=ur(s);let i=s==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return r.reference[a]>r.floating[a]&&(i=rt(i)),[i,rt(i)]}function tl(e){const r=rt(e);return[Yt(e),r,Yt(r)]}function Yt(e){return e.replace(/start|end/g,r=>el[r])}function rl(e,r,t){const n=["left","right"],s=["right","left"],a=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return t?r?s:n:r?n:s;case"left":case"right":return r?a:i;default:return[]}}function sl(e,r,t,n){const s=Ln(e);let a=rl(sn(e),t==="start",n);return s&&(a=a.map(i=>i+"-"+s),r&&(a=a.concat(a.map(Yt)))),a}function rt(e){return e.replace(/left|right|bottom|top/g,r=>Qo[r])}function al(e){return{top:0,right:0,bottom:0,left:0,...e}}function ia(e){return typeof e!="number"?al(e):{top:e,right:e,bottom:e,left:e}}function st(e){const{x:r,y:t,width:n,height:s}=e;return{width:n,height:s,top:t,left:r,right:r+n,bottom:t+s,x:r,y:t}}function Cr(e,r,t){let{reference:n,floating:s}=e;const a=kn(r),i=cr(r),o=ur(i),l=sn(r),d=a==="y",u=n.x+n.width/2-s.width/2,g=n.y+n.height/2-s.height/2,p=n[o]/2-s[o]/2;let c;switch(l){case"top":c={x:u,y:n.y-s.height};break;case"bottom":c={x:u,y:n.y+n.height};break;case"right":c={x:n.x+n.width,y:g};break;case"left":c={x:n.x-s.width,y:g};break;default:c={x:n.x,y:n.y}}switch(Ln(r)){case"start":c[i]-=p*(t&&d?-1:1);break;case"end":c[i]+=p*(t&&d?-1:1);break}return c}const il=async(e,r,t)=>{const{placement:n="bottom",strategy:s="absolute",middleware:a=[],platform:i}=t,o=a.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(r));let d=await i.getElementRects({reference:e,floating:r,strategy:s}),{x:u,y:g}=Cr(d,n,l),p=n,c={},y=0;for(let k=0;k<o.length;k++){const{name:v,fn:w}=o[k],{x:h,y:R,data:x,reset:_}=await w({x:u,y:g,initialPlacement:n,placement:p,strategy:s,middlewareData:c,rects:d,platform:i,elements:{reference:e,floating:r}});u=h??u,g=R??g,c={...c,[v]:{...c[v],...x}},_&&y<=50&&(y++,typeof _=="object"&&(_.placement&&(p=_.placement),_.rects&&(d=_.rects===!0?await i.getElementRects({reference:e,floating:r,strategy:s}):_.rects),{x:u,y:g}=Cr(d,p,l)),k=-1)}return{x:u,y:g,placement:p,strategy:s,middlewareData:c}};async function oa(e,r){var t;r===void 0&&(r={});const{x:n,y:s,platform:a,rects:i,elements:o,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:p=!1,padding:c=0}=qn(r,e),y=ia(c),v=o[p?g==="floating"?"reference":"floating":g],w=st(await a.getClippingRect({element:(t=await(a.isElement==null?void 0:a.isElement(v)))==null||t?v:v.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(o.floating)),boundary:d,rootBoundary:u,strategy:l})),h=g==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,R=await(a.getOffsetParent==null?void 0:a.getOffsetParent(o.floating)),x=await(a.isElement==null?void 0:a.isElement(R))?await(a.getScale==null?void 0:a.getScale(R))||{x:1,y:1}:{x:1,y:1},_=st(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:h,offsetParent:R,strategy:l}):h);return{top:(w.top-_.top+y.top)/x.y,bottom:(_.bottom-w.bottom+y.bottom)/x.y,left:(w.left-_.left+y.left)/x.x,right:(_.right-w.right+y.right)/x.x}}const ol=e=>({name:"arrow",options:e,async fn(r){const{x:t,y:n,placement:s,rects:a,platform:i,elements:o,middlewareData:l}=r,{element:d,padding:u=0}=qn(e,r)||{};if(d==null)return{};const g=ia(u),p={x:t,y:n},c=cr(s),y=ur(c),k=await i.getDimensions(d),v=c==="y",w=v?"top":"left",h=v?"bottom":"right",R=v?"clientHeight":"clientWidth",x=a.reference[y]+a.reference[c]-p[c]-a.floating[y],_=p[c]-a.reference[c],P=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let I=P?P[R]:0;(!I||!await(i.isElement==null?void 0:i.isElement(P)))&&(I=o.floating[R]||a.floating[y]);const S=x/2-_/2,M=I/2-k[y]/2-1,K=yn(g[w],M),G=yn(g[h],M),D=K,E=I-k[y]-G,T=I/2-k[y]/2+S,N=zt(D,T,E),L=!l.arrow&&Ln(s)!=null&&T!==N&&a.reference[y]/2-(T<D?K:G)-k[y]/2<0,V=L?T<D?T-D:T-E:0;return{[c]:p[c]+V,data:{[c]:N,centerOffset:T-N-V,...L&&{alignmentOffset:V}},reset:L}}}),ll=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var t,n;const{placement:s,middlewareData:a,rects:i,initialPlacement:o,platform:l,elements:d}=r,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:p,fallbackStrategy:c="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:k=!0,...v}=qn(e,r);if((t=a.arrow)!=null&&t.alignmentOffset)return{};const w=sn(s),h=kn(o),R=sn(o)===o,x=await(l.isRTL==null?void 0:l.isRTL(d.floating)),_=p||(R||!k?[rt(o)]:tl(o)),P=y!=="none";!p&&P&&_.push(...sl(o,k,y,x));const I=[o,..._],S=await oa(r,v),M=[];let K=((n=a.flip)==null?void 0:n.overflows)||[];if(u&&M.push(S[w]),g){const T=nl(s,i,x);M.push(S[T[0]],S[T[1]])}if(K=[...K,{placement:s,overflows:M}],!M.every(T=>T<=0)){var G,D;const T=(((G=a.flip)==null?void 0:G.index)||0)+1,N=I[T];if(N)return{data:{index:T,overflows:K},reset:{placement:N}};let L=(D=K.filter(V=>V.overflows[0]<=0).sort((V,q)=>V.overflows[1]-q.overflows[1])[0])==null?void 0:D.placement;if(!L)switch(c){case"bestFit":{var E;const V=(E=K.filter(q=>{if(P){const F=kn(q.placement);return F===h||F==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(F=>F>0).reduce((F,H)=>F+H,0)]).sort((q,F)=>q[1]-F[1])[0])==null?void 0:E[0];V&&(L=V);break}case"initialPlacement":L=o;break}if(s!==L)return{reset:{placement:L}}}return{}}}};async function dl(e,r){const{placement:t,platform:n,elements:s}=e,a=await(n.isRTL==null?void 0:n.isRTL(s.floating)),i=sn(t),o=Ln(t),l=kn(t)==="y",d=["left","top"].includes(i)?-1:1,u=a&&l?-1:1,g=qn(r,e);let{mainAxis:p,crossAxis:c,alignmentAxis:y}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return o&&typeof y=="number"&&(c=o==="end"?y*-1:y),l?{x:c*u,y:p*d}:{x:p*d,y:c*u}}const ul=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var t,n;const{x:s,y:a,placement:i,middlewareData:o}=r,l=await dl(r,e);return i===((t=o.offset)==null?void 0:t.placement)&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:s+l.x,y:a+l.y,data:{...l,placement:i}}}}},cl=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:t,y:n,placement:s}=r,{mainAxis:a=!0,crossAxis:i=!1,limiter:o={fn:v=>{let{x:w,y:h}=v;return{x:w,y:h}}},...l}=qn(e,r),d={x:t,y:n},u=await oa(r,l),g=kn(sn(s)),p=aa(g);let c=d[p],y=d[g];if(a){const v=p==="y"?"top":"left",w=p==="y"?"bottom":"right",h=c+u[v],R=c-u[w];c=zt(h,c,R)}if(i){const v=g==="y"?"top":"left",w=g==="y"?"bottom":"right",h=y+u[v],R=y-u[w];y=zt(h,y,R)}const k=o.fn({...r,[p]:c,[g]:y});return{...k,data:{x:k.x-t,y:k.y-n,enabled:{[p]:a,[g]:i}}}}}};function pt(){return typeof window<"u"}function On(e){return la(e)?(e.nodeName||"").toLowerCase():"#document"}function Re(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function Ve(e){var r;return(r=(la(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function la(e){return pt()?e instanceof Node||e instanceof Re(e).Node:!1}function re(e){return pt()?e instanceof Element||e instanceof Re(e).Element:!1}function Ie(e){return pt()?e instanceof HTMLElement||e instanceof Re(e).HTMLElement:!1}function at(e){return!pt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Re(e).ShadowRoot}function Vn(e){const{overflow:r,overflowX:t,overflowY:n,display:s}=Se(e);return/auto|scroll|overlay|hidden|clip/.test(r+n+t)&&!["inline","contents"].includes(s)}function fl(e){return["table","td","th"].includes(On(e))}function vt(e){return[":popover-open",":modal"].some(r=>{try{return e.matches(r)}catch{return!1}})}function fr(e){const r=yt(),t=re(e)?Se(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(t.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(t.contain||"").includes(n))}function ml(e){let r=Ge(e);for(;Ie(r)&&!$e(r);){if(fr(r))return r;if(vt(r))return null;r=Ge(r)}return null}function yt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function $e(e){return["html","body","#document"].includes(On(e))}function Se(e){return Re(e).getComputedStyle(e)}function kt(e){return re(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ge(e){if(On(e)==="html")return e;const r=e.assignedSlot||e.parentNode||at(e)&&e.host||Ve(e);return at(r)?r.host:r}function da(e){const r=Ge(e);return $e(r)?e.ownerDocument?e.ownerDocument.body:e.body:Ie(r)&&Vn(r)?r:da(r)}function We(e,r,t){var n;r===void 0&&(r=[]),t===void 0&&(t=!0);const s=da(e),a=s===((n=e.ownerDocument)==null?void 0:n.body),i=Re(s);if(a){const o=Wt(i);return r.concat(i,i.visualViewport||[],Vn(s)?s:[],o&&t?We(o):[])}return r.concat(s,We(s,[],t))}function Wt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ua(e){const r=Se(e);let t=parseFloat(r.width)||0,n=parseFloat(r.height)||0;const s=Ie(e),a=s?e.offsetWidth:t,i=s?e.offsetHeight:n,o=tt(t)!==a||tt(n)!==i;return o&&(t=a,n=i),{width:t,height:n,$:o}}function mr(e){return re(e)?e:e.contextElement}function gn(e){const r=mr(e);if(!Ie(r))return Fe(1);const t=r.getBoundingClientRect(),{width:n,height:s,$:a}=ua(r);let i=(a?tt(t.width):t.width)/n,o=(a?tt(t.height):t.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const gl=Fe(0);function ca(e){const r=Re(e);return!yt()||!r.visualViewport?gl:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function pl(e,r,t){return r===void 0&&(r=!1),!t||r&&t!==Re(e)?!1:r}function an(e,r,t,n){r===void 0&&(r=!1),t===void 0&&(t=!1);const s=e.getBoundingClientRect(),a=mr(e);let i=Fe(1);r&&(n?re(n)&&(i=gn(n)):i=gn(e));const o=pl(a,t,n)?ca(a):Fe(0);let l=(s.left+o.x)/i.x,d=(s.top+o.y)/i.y,u=s.width/i.x,g=s.height/i.y;if(a){const p=Re(a),c=n&&re(n)?Re(n):n;let y=p,k=Wt(y);for(;k&&n&&c!==y;){const v=gn(k),w=k.getBoundingClientRect(),h=Se(k),R=w.left+(k.clientLeft+parseFloat(h.paddingLeft))*v.x,x=w.top+(k.clientTop+parseFloat(h.paddingTop))*v.y;l*=v.x,d*=v.y,u*=v.x,g*=v.y,l+=R,d+=x,y=Re(k),k=Wt(y)}}return st({width:u,height:g,x:l,y:d})}function gr(e,r){const t=kt(e).scrollLeft;return r?r.left+t:an(Ve(e)).left+t}function fa(e,r,t){t===void 0&&(t=!1);const n=e.getBoundingClientRect(),s=n.left+r.scrollLeft-(t?0:gr(e,n)),a=n.top+r.scrollTop;return{x:s,y:a}}function vl(e){let{elements:r,rect:t,offsetParent:n,strategy:s}=e;const a=s==="fixed",i=Ve(n),o=r?vt(r.floating):!1;if(n===i||o&&a)return t;let l={scrollLeft:0,scrollTop:0},d=Fe(1);const u=Fe(0),g=Ie(n);if((g||!g&&!a)&&((On(n)!=="body"||Vn(i))&&(l=kt(n)),Ie(n))){const c=an(n);d=gn(n),u.x=c.x+n.clientLeft,u.y=c.y+n.clientTop}const p=i&&!g&&!a?fa(i,l,!0):Fe(0);return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-l.scrollLeft*d.x+u.x+p.x,y:t.y*d.y-l.scrollTop*d.y+u.y+p.y}}function yl(e){return Array.from(e.getClientRects())}function kl(e){const r=Ve(e),t=kt(e),n=e.ownerDocument.body,s=nn(r.scrollWidth,r.clientWidth,n.scrollWidth,n.clientWidth),a=nn(r.scrollHeight,r.clientHeight,n.scrollHeight,n.clientHeight);let i=-t.scrollLeft+gr(e);const o=-t.scrollTop;return Se(n).direction==="rtl"&&(i+=nn(r.clientWidth,n.clientWidth)-s),{width:s,height:a,x:i,y:o}}function bl(e,r){const t=Re(e),n=Ve(e),s=t.visualViewport;let a=n.clientWidth,i=n.clientHeight,o=0,l=0;if(s){a=s.width,i=s.height;const d=yt();(!d||d&&r==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:a,height:i,x:o,y:l}}function hl(e,r){const t=an(e,!0,r==="fixed"),n=t.top+e.clientTop,s=t.left+e.clientLeft,a=Ie(e)?gn(e):Fe(1),i=e.clientWidth*a.x,o=e.clientHeight*a.y,l=s*a.x,d=n*a.y;return{width:i,height:o,x:l,y:d}}function Br(e,r,t){let n;if(r==="viewport")n=bl(e,t);else if(r==="document")n=kl(Ve(e));else if(re(r))n=hl(r,t);else{const s=ca(e);n={x:r.x-s.x,y:r.y-s.y,width:r.width,height:r.height}}return st(n)}function ma(e,r){const t=Ge(e);return t===r||!re(t)||$e(t)?!1:Se(t).position==="fixed"||ma(t,r)}function El(e,r){const t=r.get(e);if(t)return t;let n=We(e,[],!1).filter(o=>re(o)&&On(o)!=="body"),s=null;const a=Se(e).position==="fixed";let i=a?Ge(e):e;for(;re(i)&&!$e(i);){const o=Se(i),l=fr(i);!l&&o.position==="fixed"&&(s=null),(a?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Vn(i)&&!l&&ma(e,i))?n=n.filter(u=>u!==i):s=o,i=Ge(i)}return r.set(e,n),n}function Ol(e){let{element:r,boundary:t,rootBoundary:n,strategy:s}=e;const i=[...t==="clippingAncestors"?vt(r)?[]:El(r,this._c):[].concat(t),n],o=i[0],l=i.reduce((d,u)=>{const g=Br(r,u,s);return d.top=nn(g.top,d.top),d.right=yn(g.right,d.right),d.bottom=yn(g.bottom,d.bottom),d.left=nn(g.left,d.left),d},Br(r,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Rl(e){const{width:r,height:t}=ua(e);return{width:r,height:t}}function wl(e,r,t){const n=Ie(r),s=Ve(r),a=t==="fixed",i=an(e,!0,a,r);let o={scrollLeft:0,scrollTop:0};const l=Fe(0);if(n||!n&&!a)if((On(r)!=="body"||Vn(s))&&(o=kt(r)),n){const p=an(r,!0,a,r);l.x=p.x+r.clientLeft,l.y=p.y+r.clientTop}else s&&(l.x=gr(s));const d=s&&!n&&!a?fa(s,o):Fe(0),u=i.left+o.scrollLeft-l.x-d.x,g=i.top+o.scrollTop-l.y-d.y;return{x:u,y:g,width:i.width,height:i.height}}function Tt(e){return Se(e).position==="static"}function Ur(e,r){if(!Ie(e)||Se(e).position==="fixed")return null;if(r)return r(e);let t=e.offsetParent;return Ve(e)===t&&(t=t.ownerDocument.body),t}function ga(e,r){const t=Re(e);if(vt(e))return t;if(!Ie(e)){let s=Ge(e);for(;s&&!$e(s);){if(re(s)&&!Tt(s))return s;s=Ge(s)}return t}let n=Ur(e,r);for(;n&&fl(n)&&Tt(n);)n=Ur(n,r);return n&&$e(n)&&Tt(n)&&!fr(n)?t:n||ml(e)||t}const Al=async function(e){const r=this.getOffsetParent||ga,t=this.getDimensions,n=await t(e.floating);return{reference:wl(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Tl(e){return Se(e).direction==="rtl"}const Il={convertOffsetParentRelativeRectToViewportRelativeRect:vl,getDocumentElement:Ve,getClippingRect:Ol,getOffsetParent:ga,getElementRects:Al,getClientRects:yl,getDimensions:Rl,getScale:gn,isElement:re,isRTL:Tl};function pa(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function _l(e,r){let t=null,n;const s=Ve(e);function a(){var o;clearTimeout(n),(o=t)==null||o.disconnect(),t=null}function i(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),a();const d=e.getBoundingClientRect(),{left:u,top:g,width:p,height:c}=d;if(o||r(),!p||!c)return;const y=Gn(g),k=Gn(s.clientWidth-(u+p)),v=Gn(s.clientHeight-(g+c)),w=Gn(u),R={rootMargin:-y+"px "+-k+"px "+-v+"px "+-w+"px",threshold:nn(0,yn(1,l))||1};let x=!0;function _(P){const I=P[0].intersectionRatio;if(I!==l){if(!x)return i();I?i(!1,I):n=setTimeout(()=>{i(!1,1e-7)},1e3)}I===1&&!pa(d,e.getBoundingClientRect())&&i(),x=!1}try{t=new IntersectionObserver(_,{...R,root:s.ownerDocument})}catch{t=new IntersectionObserver(_,R)}t.observe(e)}return i(!0),a}function Jt(e,r,t,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,d=mr(e),u=s||a?[...d?We(d):[],...We(r)]:[];u.forEach(w=>{s&&w.addEventListener("scroll",t,{passive:!0}),a&&w.addEventListener("resize",t)});const g=d&&o?_l(d,t):null;let p=-1,c=null;i&&(c=new ResizeObserver(w=>{let[h]=w;h&&h.target===d&&c&&(c.unobserve(r),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var R;(R=c)==null||R.observe(r)})),t()}),d&&!l&&c.observe(d),c.observe(r));let y,k=l?an(e):null;l&&v();function v(){const w=an(e);k&&!pa(k,w)&&t(),k=w,y=requestAnimationFrame(v)}return t(),()=>{var w;u.forEach(h=>{s&&h.removeEventListener("scroll",t),a&&h.removeEventListener("resize",t)}),g==null||g(),(w=c)==null||w.disconnect(),c=null,l&&cancelAnimationFrame(y)}}const jl=ul,xl=cl,Pl=ll,Kr=ol,Sl=(e,r,t)=>{const n=new Map,s={platform:Il,...t},a={...s.platform,_c:n};return il(e,r,{...s,platform:a})};var Zn=typeof document<"u"?f.useLayoutEffect:f.useEffect;function it(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,s;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!it(e[n],r[n]))return!1;return!0}if(s=Object.keys(e),t=s.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,s[n]))return!1;for(n=t;n--!==0;){const a=s[n];if(!(a==="_owner"&&e.$$typeof)&&!it(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}function va(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function $r(e,r){const t=va(e);return Math.round(r*t)/t}function It(e){const r=f.useRef(e);return Zn(()=>{r.current=e}),r}function Nl(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:s,elements:{reference:a,floating:i}={},transform:o=!0,whileElementsMounted:l,open:d}=e,[u,g]=f.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[p,c]=f.useState(n);it(p,n)||c(n);const[y,k]=f.useState(null),[v,w]=f.useState(null),h=f.useCallback(q=>{q!==P.current&&(P.current=q,k(q))},[]),R=f.useCallback(q=>{q!==I.current&&(I.current=q,w(q))},[]),x=a||y,_=i||v,P=f.useRef(null),I=f.useRef(null),S=f.useRef(u),M=l!=null,K=It(l),G=It(s),D=It(d),E=f.useCallback(()=>{if(!P.current||!I.current)return;const q={placement:r,strategy:t,middleware:p};G.current&&(q.platform=G.current),Sl(P.current,I.current,q).then(F=>{const H={...F,isPositioned:D.current!==!1};T.current&&!it(S.current,H)&&(S.current=H,Ys.flushSync(()=>{g(H)}))})},[p,r,t,G,D]);Zn(()=>{d===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,g(q=>({...q,isPositioned:!1})))},[d]);const T=f.useRef(!1);Zn(()=>(T.current=!0,()=>{T.current=!1}),[]),Zn(()=>{if(x&&(P.current=x),_&&(I.current=_),x&&_){if(K.current)return K.current(x,_,E);E()}},[x,_,E,K,M]);const N=f.useMemo(()=>({reference:P,floating:I,setReference:h,setFloating:R}),[h,R]),L=f.useMemo(()=>({reference:x,floating:_}),[x,_]),V=f.useMemo(()=>{const q={position:t,left:0,top:0};if(!L.floating)return q;const F=$r(L.floating,u.x),H=$r(L.floating,u.y);return o?{...q,transform:"translate("+F+"px, "+H+"px)",...va(L.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:F,top:H}},[t,o,L.floating,u.x,u.y]);return f.useMemo(()=>({...u,update:E,refs:N,elements:L,floatingStyles:V}),[u,E,N,L,V])}const Ml=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:s}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?Kr({element:n.current,padding:s}).fn(t):{}:n?Kr({element:n,padding:s}).fn(t):{}}}},ya=(e,r)=>({...jl(e),options:[e,r]}),ka=(e,r)=>({...xl(e),options:[e,r]}),ba=(e,r)=>({...Pl(e),options:[e,r]}),ha=(e,r)=>({...Ml(e),options:[e,r]}),Gr=/(\w+)/g;function Dl(e,r){const t=Array.isArray(e)?e:Fl(e);for(const n of r){if(!n)continue;let s=n;for(let a=0;a<t.length;a++){const i=s[t[a]];i!==void 0&&(s=i)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Fl(e){const r=[];let t=Gr.exec(e);for(;t;){const[,n,s]=t;r.push(n||s),t=Gr.exec(e)}return r}const ql=/{[^}]*}/g;function bt(e,...r){const t=ta(),n=t.translations||[],s=[...r,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],t.locale[e]];return(i,o)=>{const l=Dl(i,s);return o?l.replace(ql,d=>{const u=d.substring(1,d.length-1);if(o[u]===void 0){const g=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${g}'`)}return o[u]}):l}}var Ll=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Vl=f.forwardRef((e,r)=>{var{className:t,size:n="medium",title:s,transparent:a=!1,variant:i="neutral",id:o}=e,l=Ll(e,["className","size","title","transparent","variant","id"]);const{cn:d}=ie(),u=rn(),g=bt("Loader");return b.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${u}`,ref:r,className:d("navds-loader",t,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":a}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},qe(l,["children"])),b.createElement("title",{id:o??`loader-${u}`},s||g("title")),b.createElement("circle",{className:d("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),b.createElement("circle",{className:d("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var Cl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const pr=f.forwardRef((e,r)=>{var{as:t="button",variant:n="primary",className:s,children:a,size:i="medium",loading:o=!1,disabled:l,icon:d,iconPosition:u="left",onKeyUp:g}=e,p=Cl(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:c}=ie(),y=l||o?qe(p,["href"]):p,k=v=>{v.key===" "&&!l&&!o&&v.currentTarget.click()};return b.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},y,{ref:r,onKeyUp:ea(g,k),className:c(s,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!d&&!a,"navds-button--disabled":l??o}),disabled:l??o?!0:void 0}),d&&u==="left"&&b.createElement("span",{className:c("navds-button__icon")},d),o&&b.createElement(Vl,{size:i}),a&&b.createElement(me,{as:"span",size:i==="medium"?"medium":"small"},a),d&&u==="right"&&b.createElement("span",{className:c("navds-button__icon")},d))});var Bl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ul={error:to,warning:Zs,info:Gi,success:Fi},Kl=f.forwardRef((e,r)=>{var{children:t,className:n,variant:s,size:a="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:d=!1,onClose:u}=e,g=Bl(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:p}=ie(),c=bt("Alert"),y=Ul[s];return b.createElement("div",Object.assign({},g,{ref:r,className:p(n,"navds-alert",`navds-alert--${s}`,`navds-alert--${a}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":d})}),b.createElement(y,{title:c(s),className:p("navds-alert__icon")}),b.createElement(Js,{as:"div",size:a,className:p("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},t),d&&!l&&b.createElement("div",{className:p("navds-alert__button-wrapper")},b.createElement(pr,{className:p("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:b.createElement(eo,{title:["error","warning"].includes(s)?c("closeAlert"):c("closeMessage")})})))});function $l(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Gl(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(r=>{let{brand:t,version:n}=r;return t+"/"+n}).join(" "):navigator.userAgent}function Hl(){return/apple/i.test(navigator.vendor)}function zl(){return $l().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Yl(){return Gl().includes("jsdom/")}const Wl="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Hr(e){let r=e.activeElement;for(;((t=r)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;r=r.shadowRoot.activeElement}return r}function Nn(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&at(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function fn(e){return"composedPath"in e?e.composedPath()[0]:e.target}function _t(e,r){if(r==null)return!1;if("composedPath"in e)return e.composedPath().includes(r);const t=e;return t.target!=null&&r.contains(t.target)}function Jl(e){return e.matches("html,body")}function Qe(e){return(e==null?void 0:e.ownerDocument)||document}function Xl(e){return Ie(e)&&e.matches(Wl)}function Zl(e){if(!e||Yl())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function jt(e,r,t){t===void 0&&(t=!0);let n=e.filter(a=>{var i;return a.parentId===r&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=t?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var l;return a.parentId===o.id&&((l=a.context)==null?void 0:l.open)})}):e,n=n.concat(s);return n}function Ql(e){return"nativeEvent"in e}function Xt(e,r){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var bn=typeof document<"u"?f.useLayoutEffect:f.useEffect;const ed={...Hs};function Hn(e){const r=f.useRef(e);return bn(()=>{r.current=e}),r}const nd=ed.useInsertionEffect,td=nd||(e=>e());function Ke(e){const r=f.useRef(()=>{});return td(()=>{r.current=e}),f.useCallback(function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return r.current==null?void 0:r.current(...n)},[])}const rd="data-floating-ui-focusable",zr="active",Yr="selected",sd={...Hs};let Wr=!1,ad=0;const Jr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+ad++;function id(){const[e,r]=f.useState(()=>Wr?Jr():void 0);return bn(()=>{e==null&&r(Jr())},[]),f.useEffect(()=>{Wr=!0},[]),e}const od=sd.useId,ld=od||id;function dd(){const e=new Map;return{emit(r,t){var n;(n=e.get(r))==null||n.forEach(s=>s(t))},on(r,t){e.has(r)||e.set(r,new Set),e.get(r).add(t)},off(r,t){var n;(n=e.get(r))==null||n.delete(t)}}}const ud=f.createContext(null),cd=f.createContext(null),Ea=()=>{var e;return((e=f.useContext(ud))==null?void 0:e.id)||null},vr=()=>f.useContext(cd);function yr(e){return"data-floating-ui-"+e}function je(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Xr=yr("safe-polygon");function xt(e,r,t){if(t&&!Xt(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n==null?void 0:n[r]}return e==null?void 0:e[r]}function Pt(e){return typeof e=="function"?e():e}function fd(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,dataRef:s,events:a,elements:i}=e,{enabled:o=!0,delay:l=0,handleClose:d=null,mouseOnly:u=!1,restMs:g=0,move:p=!0}=r,c=vr(),y=Ea(),k=Hn(d),v=Hn(l),w=Hn(t),h=Hn(g),R=f.useRef(),x=f.useRef(-1),_=f.useRef(),P=f.useRef(-1),I=f.useRef(!0),S=f.useRef(!1),M=f.useRef(()=>{}),K=f.useRef(!1),G=f.useCallback(()=>{var V;const q=(V=s.current.openEvent)==null?void 0:V.type;return(q==null?void 0:q.includes("mouse"))&&q!=="mousedown"},[s]);f.useEffect(()=>{if(!o)return;function V(q){let{open:F}=q;F||(je(x),je(P),I.current=!0,K.current=!1)}return a.on("openchange",V),()=>{a.off("openchange",V)}},[o,a]),f.useEffect(()=>{if(!o||!k.current||!t)return;function V(F){G()&&n(!1,F,"hover")}const q=Qe(i.floating).documentElement;return q.addEventListener("mouseleave",V),()=>{q.removeEventListener("mouseleave",V)}},[i.floating,t,n,o,k,G]);const D=f.useCallback(function(V,q,F){q===void 0&&(q=!0),F===void 0&&(F="hover");const H=xt(v.current,"close",R.current);H&&!_.current?(je(x),x.current=window.setTimeout(()=>n(!1,V,F),H)):q&&(je(x),n(!1,V,F))},[v,n]),E=Ke(()=>{M.current(),_.current=void 0}),T=Ke(()=>{if(S.current){const V=Qe(i.floating).body;V.style.pointerEvents="",V.removeAttribute(Xr),S.current=!1}}),N=Ke(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);f.useEffect(()=>{if(!o)return;function V(W){if(je(x),I.current=!1,u&&!Xt(R.current)||Pt(h.current)>0&&!xt(v.current,"open"))return;const J=xt(v.current,"open",R.current);J?x.current=window.setTimeout(()=>{w.current||n(!0,W,"hover")},J):t||n(!0,W,"hover")}function q(W){if(N()){T();return}M.current();const J=Qe(i.floating);if(je(P),K.current=!1,k.current&&s.current.floatingContext){t||je(x),_.current=k.current({...s.current.floatingContext,tree:c,x:W.clientX,y:W.clientY,onClose(){T(),E(),N()||D(W,!0,"safe-polygon")}});const ve=_.current;J.addEventListener("mousemove",ve),M.current=()=>{J.removeEventListener("mousemove",ve)};return}(R.current==="touch"?!Nn(i.floating,W.relatedTarget):!0)&&D(W)}function F(W){N()||s.current.floatingContext&&(k.current==null||k.current({...s.current.floatingContext,tree:c,x:W.clientX,y:W.clientY,onClose(){T(),E(),N()||D(W)}})(W))}function H(){je(x)}function Y(W){N()||D(W,!1)}if(re(i.domReference)){const W=i.domReference,J=i.floating;return t&&W.addEventListener("mouseleave",F),p&&W.addEventListener("mousemove",V,{once:!0}),W.addEventListener("mouseenter",V),W.addEventListener("mouseleave",q),J&&(J.addEventListener("mouseleave",F),J.addEventListener("mouseenter",H),J.addEventListener("mouseleave",Y)),()=>{t&&W.removeEventListener("mouseleave",F),p&&W.removeEventListener("mousemove",V),W.removeEventListener("mouseenter",V),W.removeEventListener("mouseleave",q),J&&(J.removeEventListener("mouseleave",F),J.removeEventListener("mouseenter",H),J.removeEventListener("mouseleave",Y))}}},[i,o,e,u,p,D,E,T,n,t,w,c,v,k,s,N,h]),bn(()=>{var V;if(o&&t&&(V=k.current)!=null&&V.__options.blockPointerEvents&&G()){S.current=!0;const F=i.floating;if(re(i.domReference)&&F){var q;const H=Qe(i.floating).body;H.setAttribute(Xr,"");const Y=i.domReference,W=c==null||(q=c.nodesRef.current.find(J=>J.id===y))==null||(q=q.context)==null?void 0:q.elements.floating;return W&&(W.style.pointerEvents=""),H.style.pointerEvents="none",Y.style.pointerEvents="auto",F.style.pointerEvents="auto",()=>{H.style.pointerEvents="",Y.style.pointerEvents="",F.style.pointerEvents=""}}}},[o,t,y,i,c,k,G]),bn(()=>{t||(R.current=void 0,K.current=!1,E(),T())},[t,E,T]),f.useEffect(()=>()=>{E(),je(x),je(P),T()},[o,i.domReference,E,T]);const L=f.useMemo(()=>{function V(q){R.current=q.pointerType}return{onPointerDown:V,onPointerEnter:V,onMouseMove(q){const{nativeEvent:F}=q;function H(){!I.current&&!w.current&&n(!0,F,"hover")}u&&!Xt(R.current)||t||Pt(h.current)===0||K.current&&q.movementX**2+q.movementY**2<2||(je(P),R.current==="touch"?H():(K.current=!0,P.current=window.setTimeout(H,Pt(h.current))))}}},[u,n,t,w,h]);return f.useMemo(()=>o?{reference:L}:{},[o,L])}function St(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&at(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function md(e){return"composedPath"in e?e.composedPath()[0]:e.target}const gd={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},pd={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Zr=e=>{var r,t;return{escapeKey:typeof e=="boolean"?e:(r=e==null?void 0:e.escapeKey)!=null?r:!1,outsidePress:typeof e=="boolean"?e:(t=e==null?void 0:e.outsidePress)!=null?t:!0}};function vd(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,elements:s,dataRef:a}=e,{enabled:i=!0,escapeKey:o=!0,outsidePress:l=!0,outsidePressEvent:d="pointerdown",referencePress:u=!1,referencePressEvent:g="pointerdown",ancestorScroll:p=!1,bubbles:c,capture:y}=r,k=vr(),v=Ke(typeof l=="function"?l:()=>!1),w=typeof l=="function"?v:l,h=f.useRef(!1),R=f.useRef(!1),{escapeKey:x,outsidePress:_}=Zr(c),{escapeKey:P,outsidePress:I}=Zr(y),S=f.useRef(!1),M=Ke(N=>{var L;if(!t||!i||!o||N.key!=="Escape"||S.current)return;const V=(L=a.current.floatingContext)==null?void 0:L.nodeId,q=k?jt(k.nodesRef.current,V):[];if(!x&&(N.stopPropagation(),q.length>0)){let F=!0;if(q.forEach(H=>{var Y;if((Y=H.context)!=null&&Y.open&&!H.context.dataRef.current.__escapeKeyBubbles){F=!1;return}}),!F)return}n(!1,Ql(N)?N.nativeEvent:N,"escape-key")}),K=Ke(N=>{var L;const V=()=>{var q;M(N),(q=fn(N))==null||q.removeEventListener("keydown",V)};(L=fn(N))==null||L.addEventListener("keydown",V)}),G=Ke(N=>{var L;const V=h.current;h.current=!1;const q=R.current;if(R.current=!1,d==="click"&&q||V||typeof w=="function"&&!w(N))return;const F=fn(N),H="["+yr("inert")+"]",Y=Qe(s.floating).querySelectorAll(H);let W=re(F)?F:null;for(;W&&!$e(W);){const fe=Ge(W);if($e(fe)||!re(fe))break;W=fe}if(Y.length&&re(F)&&!Jl(F)&&!Nn(F,s.floating)&&Array.from(Y).every(fe=>!Nn(W,fe)))return;if(Ie(F)&&T){const fe=$e(F),le=Se(F),X=/auto|scroll/,se=fe||X.test(le.overflowX),ye=fe||X.test(le.overflowY),ke=se&&F.clientWidth>0&&F.scrollWidth>F.clientWidth,be=ye&&F.clientHeight>0&&F.scrollHeight>F.clientHeight,Ze=le.direction==="rtl",Ce=be&&(Ze?N.offsetX<=F.offsetWidth-F.clientWidth:N.offsetX>F.clientWidth),Be=ke&&N.offsetY>F.clientHeight;if(Ce||Be)return}const J=(L=a.current.floatingContext)==null?void 0:L.nodeId,Ne=k&&jt(k.nodesRef.current,J).some(fe=>{var le;return _t(N,(le=fe.context)==null?void 0:le.elements.floating)});if(_t(N,s.floating)||_t(N,s.domReference)||Ne)return;const ve=k?jt(k.nodesRef.current,J):[];if(ve.length>0){let fe=!0;if(ve.forEach(le=>{var X;if((X=le.context)!=null&&X.open&&!le.context.dataRef.current.__outsidePressBubbles){fe=!1;return}}),!fe)return}n(!1,N,"outside-press")}),D=Ke(N=>{var L;const V=()=>{var q;G(N),(q=fn(N))==null||q.removeEventListener(d,V)};(L=fn(N))==null||L.addEventListener(d,V)});f.useEffect(()=>{if(!t||!i)return;a.current.__escapeKeyBubbles=x,a.current.__outsidePressBubbles=_;let N=-1;function L(Y){n(!1,Y,"ancestor-scroll")}function V(){window.clearTimeout(N),S.current=!0}function q(){N=window.setTimeout(()=>{S.current=!1},yt()?5:0)}const F=Qe(s.floating);o&&(F.addEventListener("keydown",P?K:M,P),F.addEventListener("compositionstart",V),F.addEventListener("compositionend",q)),w&&F.addEventListener(d,I?D:G,I);let H=[];return p&&(re(s.domReference)&&(H=We(s.domReference)),re(s.floating)&&(H=H.concat(We(s.floating))),!re(s.reference)&&s.reference&&s.reference.contextElement&&(H=H.concat(We(s.reference.contextElement)))),H=H.filter(Y=>{var W;return Y!==((W=F.defaultView)==null?void 0:W.visualViewport)}),H.forEach(Y=>{Y.addEventListener("scroll",L,{passive:!0})}),()=>{o&&(F.removeEventListener("keydown",P?K:M,P),F.removeEventListener("compositionstart",V),F.removeEventListener("compositionend",q)),w&&F.removeEventListener(d,I?D:G,I),H.forEach(Y=>{Y.removeEventListener("scroll",L)}),window.clearTimeout(N)}},[a,s,o,w,d,t,n,p,i,x,_,M,P,K,G,I,D]),f.useEffect(()=>{h.current=!1},[w,d]);const E=f.useMemo(()=>({onKeyDown:M,...u&&{[gd[g]]:N=>{n(!1,N.nativeEvent,"reference-press")},...g!=="click"&&{onClick(N){n(!1,N.nativeEvent,"reference-press")}}}}),[M,n,u,g]),T=f.useMemo(()=>({onKeyDown:M,onMouseDown(){R.current=!0},onMouseUp(){R.current=!0},[pd[d]]:()=>{h.current=!0}}),[M,d]);return f.useMemo(()=>i?{reference:E,floating:T}:{},[i,E,T])}function yd(e){const{open:r=!1,onOpenChange:t,elements:n}=e,s=ld(),a=f.useRef({}),[i]=f.useState(()=>dd()),o=Ea()!=null,[l,d]=f.useState(n.reference),u=Ke((c,y,k)=>{a.current.openEvent=c?y:void 0,i.emit("openchange",{open:c,event:y,reason:k,nested:o}),t==null||t(c,y,k)}),g=f.useMemo(()=>({setPositionReference:d}),[]),p=f.useMemo(()=>({reference:l||n.reference||null,floating:n.floating||null,domReference:n.reference}),[l,n.reference,n.floating]);return f.useMemo(()=>({dataRef:a,open:r,onOpenChange:u,elements:p,events:i,floatingId:s,refs:g}),[r,u,p,i,s,g])}function Oa(e){e===void 0&&(e={});const{nodeId:r}=e,t=yd({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||t,s=n.elements,[a,i]=f.useState(null),[o,l]=f.useState(null),u=(s==null?void 0:s.domReference)||a,g=f.useRef(null),p=vr();bn(()=>{u&&(g.current=u)},[u]);const c=Nl({...e,elements:{...s,...o&&{reference:o}}}),y=f.useCallback(R=>{const x=re(R)?{getBoundingClientRect:()=>R.getBoundingClientRect(),getClientRects:()=>R.getClientRects(),contextElement:R}:R;l(x),c.refs.setReference(x)},[c.refs]),k=f.useCallback(R=>{(re(R)||R===null)&&(g.current=R,i(R)),(re(c.refs.reference.current)||c.refs.reference.current===null||R!==null&&!re(R))&&c.refs.setReference(R)},[c.refs]),v=f.useMemo(()=>({...c.refs,setReference:k,setPositionReference:y,domReference:g}),[c.refs,k,y]),w=f.useMemo(()=>({...c.elements,domReference:u}),[c.elements,u]),h=f.useMemo(()=>({...c,...n,refs:v,elements:w,nodeId:r}),[c,v,w,r,n]);return bn(()=>{n.dataRef.current.floatingContext=h;const R=p==null?void 0:p.nodesRef.current.find(x=>x.id===r);R&&(R.context=h)}),f.useMemo(()=>({...c,context:h,refs:v,elements:w}),[c,v,w,h])}function Nt(){return zl()&&Hl()}function kd(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,events:s,dataRef:a,elements:i}=e,{enabled:o=!0,visibleOnly:l=!0}=r,d=f.useRef(!1),u=f.useRef(-1),g=f.useRef(!0);f.useEffect(()=>{if(!o)return;const c=Re(i.domReference);function y(){!t&&Ie(i.domReference)&&i.domReference===Hr(Qe(i.domReference))&&(d.current=!0)}function k(){g.current=!0}function v(){g.current=!1}return c.addEventListener("blur",y),Nt()&&(c.addEventListener("keydown",k,!0),c.addEventListener("pointerdown",v,!0)),()=>{c.removeEventListener("blur",y),Nt()&&(c.removeEventListener("keydown",k,!0),c.removeEventListener("pointerdown",v,!0))}},[i.domReference,t,o]),f.useEffect(()=>{if(!o)return;function c(y){let{reason:k}=y;(k==="reference-press"||k==="escape-key")&&(d.current=!0)}return s.on("openchange",c),()=>{s.off("openchange",c)}},[s,o]),f.useEffect(()=>()=>{je(u)},[]);const p=f.useMemo(()=>({onMouseLeave(){d.current=!1},onFocus(c){if(d.current)return;const y=fn(c.nativeEvent);if(l&&re(y)){if(Nt()&&!c.relatedTarget){if(!g.current&&!Xl(y))return}else if(!Zl(y))return}n(!0,c.nativeEvent,"focus")},onBlur(c){d.current=!1;const y=c.relatedTarget,k=c.nativeEvent,v=re(y)&&y.hasAttribute(yr("focus-guard"))&&y.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var w;const h=Hr(i.domReference?i.domReference.ownerDocument:document);!y&&h===i.domReference||Nn((w=a.current.floatingContext)==null?void 0:w.refs.floating.current,h)||Nn(i.domReference,h)||v||n(!1,k,"focus")})}}),[a,i.domReference,n,l]);return f.useMemo(()=>o?{reference:p}:{},[o,p])}function Mt(e,r,t){const n=new Map,s=t==="item";let a=e;if(s&&e){const{[zr]:i,[Yr]:o,...l}=e;a=l}return{...t==="floating"&&{tabIndex:-1,[rd]:""},...a,...r.map(i=>{const o=i?i[t]:null;return typeof o=="function"?e?o(e):null:o}).concat(e).reduce((i,o)=>(o&&Object.entries(o).forEach(l=>{let[d,u]=l;if(!(s&&[zr,Yr].includes(d)))if(d.indexOf("on")===0){if(n.has(d)||n.set(d,[]),typeof u=="function"){var g;(g=n.get(d))==null||g.push(u),i[d]=function(){for(var p,c=arguments.length,y=new Array(c),k=0;k<c;k++)y[k]=arguments[k];return(p=n.get(d))==null?void 0:p.map(v=>v(...y)).find(v=>v!==void 0)}}}else i[d]=u}),i),{})}}function bd(e){e===void 0&&(e=[]);const r=e.map(o=>o==null?void 0:o.reference),t=e.map(o=>o==null?void 0:o.floating),n=e.map(o=>o==null?void 0:o.item),s=f.useCallback(o=>Mt(o,e,"reference"),r),a=f.useCallback(o=>Mt(o,e,"floating"),t),i=f.useCallback(o=>Mt(o,e,"item"),n);return f.useMemo(()=>({getReferenceProps:s,getFloatingProps:a,getItemProps:i}),[s,a,i])}function hd(e,r,t){t===void 0&&(t=!0);let n=e.filter(a=>{var i;return a.parentId===r&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=t?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var l;return a.parentId===o.id&&((l=a.context)==null?void 0:l.open)})}):e,n=n.concat(s);return n}function Qr(e,r){const[t,n]=e;let s=!1;const a=r.length;for(let i=0,o=a-1;i<a;o=i++){const[l,d]=r[i]||[0,0],[u,g]=r[o]||[0,0];d>=n!=g>=n&&t<=(u-l)*(n-d)/(g-d)+l&&(s=!s)}return s}function Ed(e,r){return e[0]>=r.x&&e[0]<=r.x+r.width&&e[1]>=r.y&&e[1]<=r.y+r.height}function Od(e){e===void 0&&(e={});const{buffer:r=.5,blockPointerEvents:t=!1,requireIntent:n=!0}=e;let s,a=!1,i=null,o=null,l=performance.now();function d(g,p){const c=performance.now(),y=c-l;if(i===null||o===null||y===0)return i=g,o=p,l=c,null;const k=g-i,v=p-o,h=Math.sqrt(k*k+v*v)/y;return i=g,o=p,l=c,h}const u=g=>{let{x:p,y:c,placement:y,elements:k,onClose:v,nodeId:w,tree:h}=g;return function(x){function _(){clearTimeout(s),v()}if(clearTimeout(s),!k.domReference||!k.floating||y==null||p==null||c==null)return;const{clientX:P,clientY:I}=x,S=[P,I],M=md(x),K=x.type==="mouseleave",G=St(k.floating,M),D=St(k.domReference,M),E=k.domReference.getBoundingClientRect(),T=k.floating.getBoundingClientRect(),N=y.split("-")[0],L=p>T.right-T.width/2,V=c>T.bottom-T.height/2,q=Ed(S,E),F=T.width>E.width,H=T.height>E.height,Y=(F?E:T).left,W=(F?E:T).right,J=(H?E:T).top,Ne=(H?E:T).bottom;if(G&&(a=!0,!K))return;if(D&&(a=!1),D&&!K){a=!0;return}if(K&&re(x.relatedTarget)&&St(k.floating,x.relatedTarget)||h&&hd(h.nodesRef.current,w).some(le=>{let{context:X}=le;return X==null?void 0:X.open}))return;if(N==="top"&&c>=E.bottom-1||N==="bottom"&&c<=E.top+1||N==="left"&&p>=E.right-1||N==="right"&&p<=E.left+1)return _();let ve=[];switch(N){case"top":ve=[[Y,E.top+1],[Y,T.bottom-1],[W,T.bottom-1],[W,E.top+1]];break;case"bottom":ve=[[Y,T.top+1],[Y,E.bottom-1],[W,E.bottom-1],[W,T.top+1]];break;case"left":ve=[[T.right-1,Ne],[T.right-1,J],[E.left+1,J],[E.left+1,Ne]];break;case"right":ve=[[E.right-1,Ne],[E.right-1,J],[T.left+1,J],[T.left+1,Ne]];break}function fe(le){let[X,se]=le;switch(N){case"top":{const ye=[F?X+r/2:L?X+r*4:X-r*4,se+r+1],ke=[F?X-r/2:L?X+r*4:X-r*4,se+r+1],be=[[T.left,L||F?T.bottom-r:T.top],[T.right,L?F?T.bottom-r:T.top:T.bottom-r]];return[ye,ke,...be]}case"bottom":{const ye=[F?X+r/2:L?X+r*4:X-r*4,se-r],ke=[F?X-r/2:L?X+r*4:X-r*4,se-r],be=[[T.left,L||F?T.top+r:T.bottom],[T.right,L?F?T.top+r:T.bottom:T.top+r]];return[ye,ke,...be]}case"left":{const ye=[X+r+1,H?se+r/2:V?se+r*4:se-r*4],ke=[X+r+1,H?se-r/2:V?se+r*4:se-r*4];return[...[[V||H?T.right-r:T.left,T.top],[V?H?T.right-r:T.left:T.right-r,T.bottom]],ye,ke]}case"right":{const ye=[X-r,H?se+r/2:V?se+r*4:se-r*4],ke=[X-r,H?se-r/2:V?se+r*4:se-r*4],be=[[V||H?T.left+r:T.right,T.top],[V?H?T.left+r:T.right:T.left+r,T.bottom]];return[ye,ke,...be]}}}if(!Qr([P,I],ve)){if(a&&!q)return _();if(!K&&n){const le=d(x.clientX,x.clientY);if(le!==null&&le<.1)return _()}Qr([P,I],fe([p,c]))?!a&&n&&(s=window.setTimeout(_,40)):_()}}};return u.__options={blockPointerEvents:t},u}const kr=()=>{const{cn:e}=ie();return b.createElement(Qs,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Rd=()=>{const{cn:e}=ie();return b.createElement(Qs,{title:bt("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},ot=f.createContext(null),ht=(e,r)=>{var t,n,s;const{size:a,error:i,errorId:o}=e,l=f.useContext(ot),d=rn(),u=(t=e.id)!==null&&t!==void 0?t:`${r}-${d}`,g=o??`${r}-error-${d}`,p=`${r}-description-${d}`,c=(l==null?void 0:l.disabled)||e.disabled,y=((l==null?void 0:l.readOnly)||e.readOnly)&&!c||void 0,k=!c&&!y&&!!(i||l!=null&&l.error),v=!c&&!y&&!!i&&typeof i!="boolean",w=Object.assign({},k?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:v,hasError:k,errorId:g,inputDescriptionId:p,size:(n=a??(l==null?void 0:l.size))!==null&&n!==void 0?n:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:u},w),{"aria-describedby":Mn(e["aria-describedby"],{[p]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[g]:v,[(s=l==null?void 0:l.errorId)!==null&&s!==void 0?s:""]:k&&!!(l!=null&&l.error)})||void 0,disabled:c})}},[Tf,wd]=ft();var Ad=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const[If,Ra]=ft({errorMessage:"useDateInputContext must be used with DateInputContext"}),wa=f.forwardRef((e,r)=>{const{className:t,hideLabel:n=!1,label:s,description:a,variant:i="datepicker",setAnchorRef:o}=e,l=Ad(e,["className","hideLabel","label","description","variant","setAnchorRef"]),d=f.useRef(null),u=wd().translate,{cn:g}=ie(),p=i==="datepicker",c={prefix:p?"datepicker-input":"monthpicker-input",iconTitle:{open:p?"openDatePicker":"openMonthPicker",close:p?"closeDatePicker":"closeMonthPicker"}},y=Ra(),{inputProps:k,size:v="medium",inputDescriptionId:w,errorId:h,showErrorMsg:R,hasError:x,readOnly:_}=ht(e,c.prefix);return b.createElement("div",{className:g(t,"navds-form-field",`navds-form-field--${v}`,"navds-date__field",{"navds-text-field--error":x,"navds-date__field--error":x,"navds-form-field--disabled":!!k.disabled,"navds-text-field--disabled":!!k.disabled,"navds-form-field--readonly":_,"navds-text-field--readonly":_,"navds-date__field--readonly":_})},b.createElement(me,{htmlFor:k.id,size:v,className:g("navds-form-field__label",{"navds-sr-only":n})},_&&b.createElement(kr,null),s),!!a&&b.createElement(ne,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":n}),id:w,size:v},a),b.createElement("div",{className:g("navds-date__field-wrapper")},b.createElement("input",Object.assign({ref:r},qe(l,["error","errorId","size"]),k,{autoComplete:"off","aria-controls":y!=null&&y.open?y.ariaId:void 0,readOnly:_,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${v}`),size:p?11:14})),b.createElement("button",{disabled:k.disabled||_,tabIndex:_||y!=null&&y.open?-1:0,onClick:()=>{y==null||y.onOpen(),o==null||o(d.current)},type:"button",className:g("navds-date__field-button"),ref:d},b.createElement(Si,{title:u(c.iconTitle[y!=null&&y.open?"close":"open"])}))),b.createElement("div",{className:g("navds-form-field__error"),id:h,"aria-relevant":"additions removals","aria-live":"polite"},R&&b.createElement(dr,{size:v,showIcon:!0},e.error)))});f.forwardRef((e,r)=>b.createElement(wa,Object.assign({},e,{ref:r})));f.forwardRef((e,r)=>b.createElement(wa,Object.assign({},e,{variant:"monthpicker",ref:r})));var Td=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Id=f.forwardRef((e,r)=>{var{className:t}=e,n=Td(e,["className"]);const{cn:s}=ie();return b.createElement("div",Object.assign({},n,{ref:r,className:s("navds-popover__content",t)}))});var _d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Zt=f.forwardRef((e,r)=>{var{className:t,children:n,anchorEl:s,arrow:a=!0,open:i,onClose:o,placement:l="top",offset:d,strategy:u,flip:g=!0}=e,p=_d(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:c}=ie(),y=f.useRef(null),k=na(!1)!==void 0,v=Ra(!1),w=u??(k?"fixed":"absolute"),h=v?!1:g,R=mt(!1),{update:x,refs:_,placement:P,middlewareData:{arrow:{x:I,y:S}={}},floatingStyles:M}=Oa({strategy:w,placement:l,open:i,middleware:[ya(d??(R?8:a?16:4)),h&&ba({padding:5,fallbackPlacements:["bottom","top"]}),ka({padding:12}),ha({element:y,padding:8})]});vn(()=>{_.setReference(s)},[s]);const K=gt(_.setFloating,r);vn(()=>{if(!_.reference.current||!_.floating.current||!i)return;const D=Jt(_.reference.current,_.floating.current,x);return()=>D()},[_.floating,_.reference,x,i,s]);const G={top:"bottom",right:"left",bottom:"top",left:"right"}[P.split("-")[0]];return b.createElement(Xo,{asChild:!0,safeZone:{anchor:s,dismissable:_.floating.current},onDismiss:()=>i&&(o==null?void 0:o()),enabled:i},b.createElement("div",Object.assign({ref:K},p,{className:c("navds-popover",t,{"navds-popover--hidden":!i||!s}),style:Object.assign(Object.assign({},p.style),M),"data-placement":P,"aria-hidden":!i||!s}),n,a&&!R&&b.createElement("div",{ref:D=>{y.current=D},style:Object.assign(Object.assign(Object.assign({},I!=null?{left:I}:{}),S!=null?{top:S}:{}),G?{[G]:"-0.5rem"}:{}),className:c("navds-popover__arrow")})))});Zt.Content=Id;function ge(e,r,t,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([s,a])=>[`--__${e}c-${r}-${t}-${s}`,a])):{}}const jd={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},es=(e,r,t,n,s,a)=>r.split(" ").map((i,o,l)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let u=`var(--${a}-${t}-${i})`;if(n.includes(i))u=i==="px"?"1px":i;else if(i.startsWith("space"))u=`var(--${a}-${i})`;else{const g=`--${a}-spacing-${i}`;u=`var(${(d=jd[g])!==null&&d!==void 0?d:g})`}return s?i==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function xe(e,r,t,n,s,a=!1,i=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${r}-${t}-xs`]:es(t,s,n,i,a,e)};const o={};return Object.entries(s).forEach(([l,d])=>{o[`--__${e}c-${r}-${t}-${l}`]=es(t,d,n,i,a,e)}),o}const xd=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Pd=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:s,margin:a,marginInline:i,marginBlock:o,width:l,minWidth:d,maxWidth:u,height:g,minHeight:p,maxHeight:c,position:y,inset:k,top:v,right:w,left:h,bottom:R,overflow:x,overflowX:_,overflowY:P,flexBasis:I,flexGrow:S,flexShrink:M,gridColumn:K})=>{const G=mt(!1),{cn:D}=ie(),E=G?"ax":"a",T=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},xe(E,"r","p","spacing",t)),xe(E,"r","pi","spacing",n)),xe(E,"r","pb","spacing",s)),xe(E,"r","m","spacing",a)),xe(E,"r","mi","spacing",i)),xe(E,"r","mb","spacing",o)),ge(E,"r","w",l)),ge(E,"r","minw",d)),ge(E,"r","maxw",u)),ge(E,"r","h",g)),ge(E,"r","minh",p)),ge(E,"r","maxh",c)),ge(E,"r","position",y)),xe(E,"r","inset","spacing",k)),xe(E,"r","top","spacing",v)),xe(E,"r","right","spacing",w)),xe(E,"r","bottom","spacing",R)),xe(E,"r","left","spacing",h)),ge(E,"r","overflow",x)),ge(E,"r","overflowx",_)),ge(E,"r","overflowy",P)),ge(E,"r","flex-basis",I)),ge(E,"r","flex-grow",S)),ge(E,"r","flex-shrink",M)),ge(E,"r","grid-column",K));return b.createElement(Dn,{className:D({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":s,"navds-r-m":a,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":l,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":g,"navds-r-minh":p,"navds-r-maxh":c,"navds-r-position":y,"navds-r-inset":k,"navds-r-top":v,"navds-r-right":w,"navds-r-bottom":R,"navds-r-left":h,"navds-r-overflow":x,"navds-r-overflowx":_,"navds-r-overflowy":P,"navds-r-flex-basis":I,"navds-r-flex-grow":S,"navds-r-flex-shrink":M,"navds-r-grid-column":K}),style:T},e)};var Sd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Aa=f.forwardRef((e,r)=>{var{children:t,className:n,as:s="div",align:a,justify:i,wrap:o=!0,gap:l,style:d,direction:u="row",asChild:g}=e,p=Sd(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const y=mt(!1)?"ax":"a",{cn:k}=ie(),v=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),xe(y,"stack","gap","spacing",l)),ge(y,"stack","direction",u)),ge(y,"stack","align",a)),ge(y,"stack","justify",i)),w=g?Dn:s;return b.createElement(Pd,Object.assign({},p),b.createElement(w,Object.assign({},qe(p,xd),{ref:r,style:v,className:k("navds-stack",n,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":l,"navds-stack-align":a,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":o})}),t))});var Nd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const pe=f.forwardRef((e,r)=>{var{as:t="div"}=e,n=Nd(e,["as"]);return b.createElement(Aa,Object.assign({as:t},n,{ref:r,direction:"row"}))});var Md=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Le=f.forwardRef((e,r)=>{var{as:t="div"}=e,n=Md(e,["as"]);return b.createElement(Aa,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))});var Dd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ta=f.forwardRef((e,r)=>{var{as:t="a",className:n,underline:s=!0,variant:a="action",inlineText:i=!1}=e,o=Dd(e,["as","className","underline","variant","inlineText"]);const{cn:l}=ie();return b.createElement(t,Object.assign({},o,{ref:r,className:l("navds-link",n,`navds-link--${a}`,{"navds-link--remove-underline":!s,"navds-link--inline-text":i})}))});var Fd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const qd=f.forwardRef((e,r)=>{var{children:t,className:n,variant:s,size:a="medium",icon:i}=e,o=Fd(e,["children","className","variant","size","icon"]);const{cn:l}=ie(),d=(s==null?void 0:s.endsWith("-filled"))&&"strong",u=(s==null?void 0:s.endsWith("-moderate"))&&"moderate",g=s==null?void 0:s.replace("-filled","").replace("-moderate","");return b.createElement(ne,Object.assign({},o,{ref:r,as:"span",size:a==="medium"?"medium":"small",className:l("navds-tag",n,`navds-tag--${s}`,`navds-tag--${a}`,`navds-tag--${d||u||"outline"}`,`navds-tag--${g}`)}),i&&b.createElement("span",{className:l("navds-tag__icon--left")},i),t)});var Ld=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Ia=f.forwardRef((e,r)=>{var{children:t,className:n,arrow:s=!0,placement:a="top",open:i,defaultOpen:o=!1,onOpenChange:l,offset:d,content:u,delay:g=150,id:p,keys:c,maxChar:y=80,describesChild:k=!1}=e,v=Ld(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:w}=ie(),[h,R]=ji({defaultValue:o,value:i,onChange:l}),x=f.useRef(null),_=na(!1),P=_?_.ref.current:void 0,{x:I,y:S,strategy:M,context:K,placement:G,middlewareData:{arrow:{x:D,y:E}={},hide:{referenceHidden:T}={}},refs:N}=Oa({placement:a,open:h,onOpenChange:Y=>R(Y),middleware:[ya(d??(s?8:4)),ka(),ba({padding:5,fallbackPlacements:["bottom","top"]}),ha({element:x,padding:5})],whileElementsMounted:_?(Y,W,J)=>Jt(Y,W,J,{animationFrame:!0}):Jt,strategy:_?"fixed":void 0}),{getReferenceProps:L,getFloatingProps:V}=bd([fd(K,{handleClose:Od(),restMs:g}),kd(K),vd(K)]),q=rn(p),F=gt(r,N.setFloating);if(!t||(t==null?void 0:t.type)===b.Fragment||t===b.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(u==null?void 0:u.length)>y&&h&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const H=k?h?{"aria-describedby":q}:{title:u}:{"aria-label":u};return b.createElement(b.Fragment,null,b.createElement(Dn,Object.assign({ref:N.setReference},L(),H,{"aria-keyshortcuts":c?c.join("+"):void 0}),t),b.createElement(Vo,{rootElement:P,asChild:!0},h&&b.createElement("div",Object.assign({},V(Object.assign(Object.assign({},v),{ref:F,style:{position:M,top:S??0,left:I??0,visibility:T?"hidden":"visible"},role:"tooltip",id:q,className:w("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":G,"data-state":"open"}),u,c&&b.createElement("span",{className:w("navds-tooltip__keys"),"aria-hidden":!0},c.map(Y=>b.createElement(nt,{as:"kbd",key:Y,className:w("navds-tooltip__key")},Y))),s&&b.createElement("div",{ref:Y=>{x.current=Y},className:w("navds-tooltip__arrow"),style:{left:D!=null?`${D}px`:"",top:E!=null?`${E}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[G]]:"-3.5px"}}))))}),Vd=e=>{const r=ht(e,"fieldset"),{inputProps:t}=r;return Object.assign(Object.assign({},r),{inputProps:{"aria-invalid":t["aria-invalid"],"aria-describedby":t["aria-describedby"]}})};var Cd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Bd=f.forwardRef((e,r)=>{var t,n,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:l,size:d,readOnly:u,inputDescriptionId:g}=Vd(e),{cn:p}=ie(),c=f.useContext(ot),{children:y,className:k,errorPropagation:v=!0,legend:w,description:h,hideLegend:R,nativeReadOnly:x=!0}=e,_=Cd(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return b.createElement(ot.Provider,{value:{error:v?(t=e.error)!==null&&t!==void 0?t:c==null?void 0:c.error:void 0,errorId:Mn({[i]:o,[(n=c==null?void 0:c.errorId)!==null&&n!==void 0?n:""]:!!(c!=null&&c.error)}),size:d,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:u}},b.createElement("fieldset",Object.assign({},qe(_,["errorId","error","size","readOnly"]),qe(a,["aria-describedby","aria-invalid"]),{ref:r,className:p(k,"navds-fieldset",`navds-fieldset--${d}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":u})}),b.createElement(me,{size:d,as:"legend",className:p("navds-fieldset__legend",{"navds-sr-only":!!R})},u&&(x?b.createElement(kr,null):b.createElement(Rd,null)),w),!!h&&b.createElement(ne,{className:p("navds-fieldset__description",{"navds-sr-only":!!R}),id:g,size:d??"medium",as:"div"},e.description),y,b.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:p("navds-fieldset__error")},o&&b.createElement(dr,{size:d,showIcon:!0},e.error))))});var Ud=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const _a=b.createContext(null),Kd=f.forwardRef((e,r)=>{var t,n,{children:s,className:a,name:i,defaultValue:o,value:l,onChange:d=()=>{},required:u,readOnly:g}=e,p=Ud(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:c}=ie(),y=f.useContext(ot),k=rn();return b.createElement(Bd,Object.assign({},p,{readOnly:g,ref:r,className:c(a,"navds-radio-group",`navds-radio-group--${(n=(t=p.size)!==null&&t!==void 0?t:y==null?void 0:y.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),b.createElement(_a.Provider,{value:{name:i??`radioGroupName-${k}`,defaultValue:o,value:l,onChange:d,required:u}},b.createElement("div",{className:c("navds-radio-buttons")},s)))});var $d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Gd=e=>{const r=f.useContext(_a),t=ht(qe(e,["description"]),"radio"),{inputProps:n,readOnly:s}=t,a=$d(t,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},a),{readOnly:s,inputProps:Object.assign(Object.assign({},n),{name:r==null?void 0:r.name,defaultChecked:(r==null?void 0:r.defaultValue)===void 0?void 0:(r==null?void 0:r.defaultValue)===e.value,checked:(r==null?void 0:r.value)===void 0?void 0:(r==null?void 0:r.value)===e.value,onChange:i=>{var o,l;s||((o=e.onChange)===null||o===void 0||o.call(e,i),(l=r==null?void 0:r.onChange)===null||l===void 0||l.call(r,e.value))},onClick:i=>{var o;if(s){i.preventDefault();return}(o=e==null?void 0:e.onClick)===null||o===void 0||o.call(e,i)},required:r==null?void 0:r.required,type:"radio"})})},ns=f.forwardRef((e,r)=>{const{cn:t}=ie(),{inputProps:n,size:s,hasError:a,readOnly:i}=Gd(e),o=rn(),l=rn();return b.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${s}`,{"navds-radio--error":a,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i})},b.createElement("input",Object.assign({},qe(e,["children","size","description","readOnly"]),qe(n,["aria-invalid"]),{"aria-labelledby":Mn(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[l]:e.description}),className:t("navds-radio__input"),ref:r})),b.createElement("label",{htmlFor:n.id,className:t("navds-radio__label")},b.createElement("span",{className:t("navds-radio__content")},b.createElement(ne,{as:"span",id:o,size:s,"aria-hidden":!0},e.children),e.description&&b.createElement(ne,{as:"span",id:l,size:s,className:t("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var Hd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const ts=(e,r,t)=>{const{outerHeightStyle:n,overflow:s}=r;return t.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==s)?(t.current+=1,r):e},rs=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function zn(e){return parseInt(e,10)||0}const zd=f.forwardRef((e,r)=>{var t,n,{className:s,onChange:a,maxRows:i,minRows:o=1,autoScrollbar:l,style:d,value:u}=e,g=Hd(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:p}=f.useRef(u!=null),c=f.useRef(null),y=gt(c,r),k=f.useRef(null),v=f.useRef(0),[w,h]=f.useState({outerHeightStyle:0}),R=b.useCallback(()=>{const I=c.current,M=rs(I).getComputedStyle(I);if(M.width==="0px")return{outerHeightStyle:0};const K=k.current;K.style.width=M.width,K.value=I.value||g.placeholder||"x",K.value.slice(-1)===`
`&&(K.value+=" ");const G=M.boxSizing,D=zn(M.paddingBottom)+zn(M.paddingTop),E=zn(M.borderBottomWidth)+zn(M.borderTopWidth),T=K.scrollHeight-D;K.value="x";const N=K.scrollHeight-D;let L=T;o&&(L=Math.max(Number(o)*N,L)),i&&(L=Math.min(Number(i)*N,L)),L=Math.max(L,N);const V=L+(G==="border-box"?D+E:0),q=Math.abs(L-T)<=1;return{outerHeightStyle:V,overflow:q}},[i,o,g.placeholder]),x=()=>{const I=R();ss(I)||h(S=>ts(S,I,v))};vn(()=>{const I=()=>{const D=R();ss(D)||et.flushSync(()=>{h(E=>ts(E,D,v))})},S=Xs(()=>{var D,E,T;if(v.current=0,!((D=c.current)===null||D===void 0)&&D.style.height||!((E=c.current)===null||E===void 0)&&E.style.width){((T=c.current)===null||T===void 0?void 0:T.style.overflow)==="hidden"&&h(N=>Object.assign(Object.assign({},N),{overflow:!1}));return}I()},166,!0),M=c.current,K=rs(M);K.addEventListener("resize",S);let G;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(S),G.observe(M)),()=>{S.clear(),K.removeEventListener("resize",S),G&&G.disconnect()}},[R]),vn(()=>{x()}),f.useEffect(()=>{v.current=0},[u]);const _=I=>{v.current=0,p||x(),a&&a(I)},P=Object.assign({"--__ac-textarea-height":w.outerHeightStyle+"px","--__axc-textarea-height":w.outerHeightStyle+"px",overflow:w.overflow&&!l&&!(!((t=c.current)===null||t===void 0)&&t.style.height)&&!(!((n=c.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},d);return b.createElement(b.Fragment,null,b.createElement("textarea",Object.assign({value:u,onChange:_,ref:y,rows:o,style:P},g,{className:s})),b.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:k,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function ss(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Yd=({maxLengthId:e,maxLength:r,currentLength:t,size:n,i18n:s})=>{const{cn:a}=ie(),i=bt("Textarea",{charsLeft:s!=null&&s.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s!=null&&s.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),o=r-t,[l,d]=f.useState(o);return f.useEffect(()=>{const u=Xs(()=>{d(o)},2e3);return u(),()=>{u.clear()}},[o]),b.createElement(b.Fragment,null,b.createElement("span",{id:e,className:a("navds-sr-only")},i("maxLength",{maxLength:r})),o<20&&b.createElement("span",{role:"status",className:a("navds-textarea__sr-counter navds-sr-only")},as(l,i)),b.createElement(ne,{className:a("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:n},as(o,i)))},as=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var Wd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};const Jd=f.forwardRef((e,r)=>{var t,n,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:l,size:d,inputDescriptionId:u}=ht(e,"textarea"),{label:g,className:p,description:c,maxLength:y,hideLabel:k=!1,resize:v,UNSAFE_autoScrollbar:w,i18n:h,readOnly:R}=e,x=Wd(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:_}=ie(),P=rn(),I=y!==void 0&&y>0,[S,M]=f.useState((t=e==null?void 0:e.defaultValue)!==null&&t!==void 0?t:""),K=()=>{let D=x!=null&&x.minRows?x==null?void 0:x.minRows:3;return d==="small"&&(D=x!=null&&x.minRows?x==null?void 0:x.minRows:2),D},G=Mn(a["aria-describedby"],{[P??""]:I});return b.createElement("div",{className:_(p,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!a.disabled,"navds-form-field--readonly":R,"navds-textarea--readonly":R,"navds-textarea--error":l,"navds-textarea--autoscrollbar":w,[`navds-textarea--resize-${v===!0?"both":v}`]:v})},b.createElement(me,{htmlFor:a.id,size:d,className:_("navds-form-field__label",{"navds-sr-only":k})},R&&b.createElement(kr,null),g),!!c&&b.createElement(ne,{className:_("navds-form-field__description",{"navds-sr-only":k}),id:u,size:d,as:"div"},c),b.createElement(zd,Object.assign({},qe(x,["error","errorId","size"]),a,{onChange:ea(e.onChange,e.value===void 0?D=>M(D.target.value):void 0),minRows:K(),autoScrollbar:w,ref:r,readOnly:R,className:_("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},G?{"aria-describedby":G}:{})),I&&!R&&!a.disabled&&b.createElement(Yd,{maxLengthId:P,maxLength:y,currentLength:(s=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:S.length,size:d,i18n:h}),b.createElement("div",{className:_("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&b.createElement(dr,{size:d,showIcon:!0},e.error)))});var Je=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Je||{}),Cn=e=>e.type==="checkbox",en=e=>e instanceof Date,Ee=e=>e==null;const ja=e=>typeof e=="object";var ue=e=>!Ee(e)&&!Array.isArray(e)&&ja(e)&&!en(e),xa=e=>ue(e)&&e.target?Cn(e.target)?e.target.checked:e.target.value:e,Xd=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Pa=(e,r)=>e.has(Xd(r)),Zd=e=>{const r=e.constructor&&e.constructor.prototype;return ue(r)&&r.hasOwnProperty("isPrototypeOf")},br=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function oe(e){let r;const t=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(br&&(e instanceof Blob||n))&&(t||ue(e)))if(r=t?[]:{},!t&&!Zd(e))r=e;else for(const s in e)e.hasOwnProperty(s)&&(r[s]=oe(e[s]));else return e;return r}var Bn=e=>Array.isArray(e)?e.filter(Boolean):[],ae=e=>e===void 0,B=(e,r,t)=>{if(!r||!ue(e))return t;const n=Bn(r.split(/[,[\].]+?/)).reduce((s,a)=>Ee(s)?s:s[a],e);return ae(n)||n===e?ae(e[r])?t:e[r]:n},Ae=e=>typeof e=="boolean",hr=e=>/^\w*$/.test(e),Sa=e=>Bn(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Q=(e,r,t)=>{let n=-1;const s=hr(r)?[r]:Sa(r),a=s.length,i=a-1;for(;++n<a;){const o=s[n];let l=t;if(n!==i){const d=e[o];l=ue(d)||Array.isArray(d)?d:isNaN(+s[n+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=l,e=e[o]}};const lt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Pe={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ue={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Na=b.createContext(null),ln=()=>b.useContext(Na),Qd=e=>{const{children:r,...t}=e;return b.createElement(Na.Provider,{value:t},r)};var Ma=(e,r,t,n=!0)=>{const s={defaultValues:r._defaultValues};for(const a in e)Object.defineProperty(s,a,{get:()=>{const i=a;return r._proxyFormState[i]!==Pe.all&&(r._proxyFormState[i]=!n||Pe.all),t&&(t[i]=!0),e[i]}});return s};const Er=typeof window<"u"?f.useLayoutEffect:f.useEffect;function eu(e){const r=ln(),{control:t=r.control,disabled:n,name:s,exact:a}=e||{},[i,o]=b.useState(t._formState),l=b.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Er(()=>t._subscribe({name:s,formState:l.current,exact:a,callback:d=>{!n&&o({...t._formState,...d})}}),[s,n,a]),b.useEffect(()=>{l.current.isValid&&t._setValid(!0)},[t]),b.useMemo(()=>Ma(i,t,l.current,!1),[i,t])}var De=e=>typeof e=="string",Da=(e,r,t,n,s)=>De(e)?(n&&r.watch.add(e),B(t,e,s)):Array.isArray(e)?e.map(a=>(n&&r.watch.add(a),B(t,a))):(n&&(r.watchAll=!0),t);function nu(e){const r=ln(),{control:t=r.control,name:n,defaultValue:s,disabled:a,exact:i}=e||{},o=b.useRef(s),[l,d]=b.useState(t._getWatch(n,o.current));return Er(()=>t._subscribe({name:n,formState:{values:!0},exact:i,callback:u=>!a&&d(Da(n,t._names,u.values||t._formValues,!1,o.current))}),[n,t,a,i]),b.useEffect(()=>t._removeUnmounted()),l}function Fa(e){const r=ln(),{name:t,disabled:n,control:s=r.control,shouldUnregister:a}=e,i=Pa(s._names.array,t),o=nu({control:s,name:t,defaultValue:B(s._formValues,t,B(s._defaultValues,t,e.defaultValue)),exact:!0}),l=eu({control:s,name:t,exact:!0}),d=b.useRef(e),u=b.useRef(s.register(t,{...e.rules,value:o,...Ae(e.disabled)?{disabled:e.disabled}:{}})),g=b.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!B(l.errors,t)},isDirty:{enumerable:!0,get:()=>!!B(l.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!B(l.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!B(l.validatingFields,t)},error:{enumerable:!0,get:()=>B(l.errors,t)}}),[l,t]),p=b.useCallback(v=>u.current.onChange({target:{value:xa(v),name:t},type:lt.CHANGE}),[t]),c=b.useCallback(()=>u.current.onBlur({target:{value:B(s._formValues,t),name:t},type:lt.BLUR}),[t,s._formValues]),y=b.useCallback(v=>{const w=B(s._fields,t);w&&v&&(w._f.ref={focus:()=>v.focus&&v.focus(),select:()=>v.select&&v.select(),setCustomValidity:h=>v.setCustomValidity(h),reportValidity:()=>v.reportValidity()})},[s._fields,t]),k=b.useMemo(()=>({name:t,value:o,...Ae(n)||l.disabled?{disabled:l.disabled||n}:{},onChange:p,onBlur:c,ref:y}),[t,n,l.disabled,p,c,y,o]);return b.useEffect(()=>{const v=s._options.shouldUnregister||a;s.register(t,{...d.current.rules,...Ae(d.current.disabled)?{disabled:d.current.disabled}:{}});const w=(h,R)=>{const x=B(s._fields,h);x&&x._f&&(x._f.mount=R)};if(w(t,!0),v){const h=oe(B(s._options.defaultValues,t));Q(s._defaultValues,t,h),ae(B(s._formValues,t))&&Q(s._formValues,t,h)}return!i&&s.register(t),()=>{(i?v&&!s._state.action:v)?s.unregister(t):w(t,!1)}},[t,s,i,a]),b.useEffect(()=>{s._setDisabledField({disabled:n,name:t})},[n,t,s]),b.useMemo(()=>({field:k,formState:l,fieldState:g}),[k,l,g])}var tu=(e,r,t,n,s)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:s||!0}}:{},Oe=e=>Array.isArray(e)?e:[e],is=()=>{let e=[];return{get observers(){return e},next:s=>{for(const a of e)a.next&&a.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(a=>a!==s)}}),unsubscribe:()=>{e=[]}}},Qt=e=>Ee(e)||!ja(e);function Ye(e,r){if(Qt(e)||Qt(r))return e===r;if(en(e)&&en(r))return e.getTime()===r.getTime();const t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(const s of t){const a=e[s];if(!n.includes(s))return!1;if(s!=="ref"){const i=r[s];if(en(a)&&en(i)||ue(a)&&ue(i)||Array.isArray(a)&&Array.isArray(i)?!Ye(a,i):a!==i)return!1}}return!0}var he=e=>ue(e)&&!Object.keys(e).length,Or=e=>e.type==="file",Me=e=>typeof e=="function",dt=e=>{if(!br)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},qa=e=>e.type==="select-multiple",Rr=e=>e.type==="radio",ru=e=>Rr(e)||Cn(e),Dt=e=>dt(e)&&e.isConnected;function su(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=ae(e)?n++:e[r[n++]];return e}function au(e){for(const r in e)if(e.hasOwnProperty(r)&&!ae(e[r]))return!1;return!0}function ce(e,r){const t=Array.isArray(r)?r:hr(r)?[r]:Sa(r),n=t.length===1?e:su(e,t),s=t.length-1,a=t[s];return n&&delete n[a],s!==0&&(ue(n)&&he(n)||Array.isArray(n)&&au(n))&&ce(e,t.slice(0,-1)),e}var La=e=>{for(const r in e)if(Me(e[r]))return!0;return!1};function ut(e,r={}){const t=Array.isArray(e);if(ue(e)||t)for(const n in e)Array.isArray(e[n])||ue(e[n])&&!La(e[n])?(r[n]=Array.isArray(e[n])?[]:{},ut(e[n],r[n])):Ee(e[n])||(r[n]=!0);return r}function Va(e,r,t){const n=Array.isArray(e);if(ue(e)||n)for(const s in e)Array.isArray(e[s])||ue(e[s])&&!La(e[s])?ae(r)||Qt(t[s])?t[s]=Array.isArray(e[s])?ut(e[s],[]):{...ut(e[s])}:Va(e[s],Ee(r)?{}:r[s],t[s]):t[s]=!Ye(e[s],r[s]);return t}var In=(e,r)=>Va(e,r,ut(r));const os={value:!1,isValid:!1},ls={value:!0,isValid:!0};var Ca=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ae(e[0].attributes.value)?ae(e[0].value)||e[0].value===""?ls:{value:e[0].value,isValid:!0}:ls:os}return os},Ba=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>ae(e)?e:r?e===""?NaN:e&&+e:t&&De(e)?new Date(e):n?n(e):e;const ds={isValid:!1,value:null};var Ua=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,ds):ds;function us(e){const r=e.ref;return Or(r)?r.files:Rr(r)?Ua(e.refs).value:qa(r)?[...r.selectedOptions].map(({value:t})=>t):Cn(r)?Ca(e.refs).value:Ba(ae(r.value)?e.ref.value:r.value,e)}var iu=(e,r,t,n)=>{const s={};for(const a of e){const i=B(r,a);i&&Q(s,a,i._f)}return{criteriaMode:t,names:[...e],fields:s,shouldUseNativeValidation:n}},ct=e=>e instanceof RegExp,_n=e=>ae(e)?e:ct(e)?e.source:ue(e)?ct(e.value)?e.value.source:e.value:e,mn=e=>({isOnSubmit:!e||e===Pe.onSubmit,isOnBlur:e===Pe.onBlur,isOnChange:e===Pe.onChange,isOnAll:e===Pe.all,isOnTouch:e===Pe.onTouched});const cs="AsyncFunction";var ou=e=>!!e&&!!e.validate&&!!(Me(e.validate)&&e.validate.constructor.name===cs||ue(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===cs)),lu=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),er=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const pn=(e,r,t,n)=>{for(const s of t||Object.keys(e)){const a=B(e,s);if(a){const{_f:i,...o}=a;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],s)&&!n)return!0;if(i.ref&&r(i.ref,i.name)&&!n)return!0;if(pn(o,r))break}else if(ue(o)&&pn(o,r))break}}};function fs(e,r,t){const n=B(e,t);if(n||hr(t))return{error:n,name:t};const s=t.split(".");for(;s.length;){const a=s.join("."),i=B(r,a),o=B(e,a);if(i&&!Array.isArray(i)&&t!==a)return{name:t};if(o&&o.type)return{name:a,error:o};if(o&&o.root&&o.root.type)return{name:`${a}.root`,error:o.root};s.pop()}return{name:t}}var du=(e,r,t,n)=>{t(e);const{name:s,...a}=e;return he(a)||Object.keys(a).length>=Object.keys(r).length||Object.keys(a).find(i=>r[i]===(!n||Pe.all))},uu=(e,r,t)=>!e||!r||e===r||Oe(e).some(n=>n&&(t?n===r:n.startsWith(r)||r.startsWith(n))),cu=(e,r,t,n,s)=>s.isOnAll?!1:!t&&s.isOnTouch?!(r||e):(t?n.isOnBlur:s.isOnBlur)?!e:(t?n.isOnChange:s.isOnChange)?e:!0,fu=(e,r)=>!Bn(B(e,r)).length&&ce(e,r),Ka=(e,r,t)=>{const n=Oe(B(e,t));return Q(n,"root",r[t]),Q(e,t,n),e},Qn=e=>De(e);function ms(e,r,t="validate"){if(Qn(e)||Array.isArray(e)&&e.every(Qn)||Ae(e)&&!e)return{type:t,message:Qn(e)?e:"",ref:r}}var cn=e=>ue(e)&&!ct(e)?e:{value:e,message:""},nr=async(e,r,t,n,s,a)=>{const{ref:i,refs:o,required:l,maxLength:d,minLength:u,min:g,max:p,pattern:c,validate:y,name:k,valueAsNumber:v,mount:w}=e._f,h=B(t,k);if(!w||r.has(k))return{};const R=o?o[0]:i,x=D=>{s&&R.reportValidity&&(R.setCustomValidity(Ae(D)?"":D||""),R.reportValidity())},_={},P=Rr(i),I=Cn(i),S=P||I,M=(v||Or(i))&&ae(i.value)&&ae(h)||dt(i)&&i.value===""||h===""||Array.isArray(h)&&!h.length,K=tu.bind(null,k,n,_),G=(D,E,T,N=Ue.maxLength,L=Ue.minLength)=>{const V=D?E:T;_[k]={type:D?N:L,message:V,ref:i,...K(D?N:L,V)}};if(a?!Array.isArray(h)||!h.length:l&&(!S&&(M||Ee(h))||Ae(h)&&!h||I&&!Ca(o).isValid||P&&!Ua(o).isValid)){const{value:D,message:E}=Qn(l)?{value:!!l,message:l}:cn(l);if(D&&(_[k]={type:Ue.required,message:E,ref:R,...K(Ue.required,E)},!n))return x(E),_}if(!M&&(!Ee(g)||!Ee(p))){let D,E;const T=cn(p),N=cn(g);if(!Ee(h)&&!isNaN(h)){const L=i.valueAsNumber||h&&+h;Ee(T.value)||(D=L>T.value),Ee(N.value)||(E=L<N.value)}else{const L=i.valueAsDate||new Date(h),V=H=>new Date(new Date().toDateString()+" "+H),q=i.type=="time",F=i.type=="week";De(T.value)&&h&&(D=q?V(h)>V(T.value):F?h>T.value:L>new Date(T.value)),De(N.value)&&h&&(E=q?V(h)<V(N.value):F?h<N.value:L<new Date(N.value))}if((D||E)&&(G(!!D,T.message,N.message,Ue.max,Ue.min),!n))return x(_[k].message),_}if((d||u)&&!M&&(De(h)||a&&Array.isArray(h))){const D=cn(d),E=cn(u),T=!Ee(D.value)&&h.length>+D.value,N=!Ee(E.value)&&h.length<+E.value;if((T||N)&&(G(T,D.message,E.message),!n))return x(_[k].message),_}if(c&&!M&&De(h)){const{value:D,message:E}=cn(c);if(ct(D)&&!h.match(D)&&(_[k]={type:Ue.pattern,message:E,ref:i,...K(Ue.pattern,E)},!n))return x(E),_}if(y){if(Me(y)){const D=await y(h,t),E=ms(D,R);if(E&&(_[k]={...E,...K(Ue.validate,E.message)},!n))return x(E.message),_}else if(ue(y)){let D={};for(const E in y){if(!he(D)&&!n)break;const T=ms(await y[E](h,t),R,E);T&&(D={...T,...K(E,T.message)},x(T.message),n&&(_[k]=D))}if(!he(D)&&(_[k]={ref:R,...D},!n))return _}}return x(!0),_};const mu={mode:Pe.onSubmit,reValidateMode:Pe.onChange,shouldFocusError:!0};function gu(e={}){let r={...mu,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:Me(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1};const n={};let s=ue(r.defaultValues)||ue(r.values)?oe(r.defaultValues||r.values)||{}:{},a=r.shouldUnregister?{}:oe(s),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...u};const p={array:is(),state:is()},c=r.criteriaMode===Pe.all,y=m=>O=>{clearTimeout(d),d=setTimeout(m,O)},k=async m=>{if(!r.disabled&&(u.isValid||g.isValid||m)){const O=r.resolver?he((await I()).errors):await M(n,!0);O!==t.isValid&&p.state.next({isValid:O})}},v=(m,O)=>{!r.disabled&&(u.isValidating||u.validatingFields||g.isValidating||g.validatingFields)&&((m||Array.from(o.mount)).forEach(j=>{j&&(O?Q(t.validatingFields,j,O):ce(t.validatingFields,j))}),p.state.next({validatingFields:t.validatingFields,isValidating:!he(t.validatingFields)}))},w=(m,O=[],j,$,U=!0,C=!0)=>{if($&&j&&!r.disabled){if(i.action=!0,C&&Array.isArray(B(n,m))){const z=j(B(n,m),$.argA,$.argB);U&&Q(n,m,z)}if(C&&Array.isArray(B(t.errors,m))){const z=j(B(t.errors,m),$.argA,$.argB);U&&Q(t.errors,m,z),fu(t.errors,m)}if((u.touchedFields||g.touchedFields)&&C&&Array.isArray(B(t.touchedFields,m))){const z=j(B(t.touchedFields,m),$.argA,$.argB);U&&Q(t.touchedFields,m,z)}(u.dirtyFields||g.dirtyFields)&&(t.dirtyFields=In(s,a)),p.state.next({name:m,isDirty:G(m,O),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else Q(a,m,O)},h=(m,O)=>{Q(t.errors,m,O),p.state.next({errors:t.errors})},R=m=>{t.errors=m,p.state.next({errors:t.errors,isValid:!1})},x=(m,O,j,$)=>{const U=B(n,m);if(U){const C=B(a,m,ae(j)?B(s,m):j);ae(C)||$&&$.defaultChecked||O?Q(a,m,O?C:us(U._f)):T(m,C),i.mount&&k()}},_=(m,O,j,$,U)=>{let C=!1,z=!1;const Z={name:m};if(!r.disabled){if(!j||$){(u.isDirty||g.isDirty)&&(z=t.isDirty,t.isDirty=Z.isDirty=G(),C=z!==Z.isDirty);const te=Ye(B(s,m),O);z=!!B(t.dirtyFields,m),te?ce(t.dirtyFields,m):Q(t.dirtyFields,m,!0),Z.dirtyFields=t.dirtyFields,C=C||(u.dirtyFields||g.dirtyFields)&&z!==!te}if(j){const te=B(t.touchedFields,m);te||(Q(t.touchedFields,m,j),Z.touchedFields=t.touchedFields,C=C||(u.touchedFields||g.touchedFields)&&te!==j)}C&&U&&p.state.next(Z)}return C?Z:{}},P=(m,O,j,$)=>{const U=B(t.errors,m),C=(u.isValid||g.isValid)&&Ae(O)&&t.isValid!==O;if(r.delayError&&j?(l=y(()=>h(m,j)),l(r.delayError)):(clearTimeout(d),l=null,j?Q(t.errors,m,j):ce(t.errors,m)),(j?!Ye(U,j):U)||!he($)||C){const z={...$,...C&&Ae(O)?{isValid:O}:{},errors:t.errors,name:m};t={...t,...z},p.state.next(z)}},I=async m=>{v(m,!0);const O=await r.resolver(a,r.context,iu(m||o.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return v(m),O},S=async m=>{const{errors:O}=await I(m);if(m)for(const j of m){const $=B(O,j);$?Q(t.errors,j,$):ce(t.errors,j)}else t.errors=O;return O},M=async(m,O,j={valid:!0})=>{for(const $ in m){const U=m[$];if(U){const{_f:C,...z}=U;if(C){const Z=o.array.has(C.name),te=U._f&&ou(U._f);te&&u.validatingFields&&v([$],!0);const _e=await nr(U,o.disabled,a,c,r.shouldUseNativeValidation&&!O,Z);if(te&&u.validatingFields&&v([$]),_e[C.name]&&(j.valid=!1,O))break;!O&&(B(_e,C.name)?Z?Ka(t.errors,_e,C.name):Q(t.errors,C.name,_e[C.name]):ce(t.errors,C.name))}!he(z)&&await M(z,O,j)}}return j.valid},K=()=>{for(const m of o.unMount){const O=B(n,m);O&&(O._f.refs?O._f.refs.every(j=>!Dt(j)):!Dt(O._f.ref))&&le(m)}o.unMount=new Set},G=(m,O)=>!r.disabled&&(m&&O&&Q(a,m,O),!Ye(H(),s)),D=(m,O,j)=>Da(m,o,{...i.mount?a:ae(O)?s:De(m)?{[m]:O}:O},j,O),E=m=>Bn(B(i.mount?a:s,m,r.shouldUnregister?B(s,m,[]):[])),T=(m,O,j={})=>{const $=B(n,m);let U=O;if($){const C=$._f;C&&(!C.disabled&&Q(a,m,Ba(O,C)),U=dt(C.ref)&&Ee(O)?"":O,qa(C.ref)?[...C.ref.options].forEach(z=>z.selected=U.includes(z.value)):C.refs?Cn(C.ref)?C.refs.forEach(z=>{(!z.defaultChecked||!z.disabled)&&(Array.isArray(U)?z.checked=!!U.find(Z=>Z===z.value):z.checked=U===z.value||!!U)}):C.refs.forEach(z=>z.checked=z.value===U):Or(C.ref)?C.ref.value="":(C.ref.value=U,C.ref.type||p.state.next({name:m,values:oe(a)})))}(j.shouldDirty||j.shouldTouch)&&_(m,U,j.shouldTouch,j.shouldDirty,!0),j.shouldValidate&&F(m)},N=(m,O,j)=>{for(const $ in O){if(!O.hasOwnProperty($))return;const U=O[$],C=m+"."+$,z=B(n,C);(o.array.has(m)||ue(U)||z&&!z._f)&&!en(U)?N(C,U,j):T(C,U,j)}},L=(m,O,j={})=>{const $=B(n,m),U=o.array.has(m),C=oe(O);Q(a,m,C),U?(p.array.next({name:m,values:oe(a)}),(u.isDirty||u.dirtyFields||g.isDirty||g.dirtyFields)&&j.shouldDirty&&p.state.next({name:m,dirtyFields:In(s,a),isDirty:G(m,C)})):$&&!$._f&&!Ee(C)?N(m,C,j):T(m,C,j),er(m,o)&&p.state.next({...t}),p.state.next({name:i.mount?m:void 0,values:oe(a)})},V=async m=>{i.mount=!0;const O=m.target;let j=O.name,$=!0;const U=B(n,j),C=te=>{$=Number.isNaN(te)||en(te)&&isNaN(te.getTime())||Ye(te,B(a,j,te))},z=mn(r.mode),Z=mn(r.reValidateMode);if(U){let te,_e;const $n=O.type?us(U._f):xa(m),He=m.type===lt.BLUR||m.type===lt.FOCUS_OUT,ri=!lu(U._f)&&!r.resolver&&!B(t.errors,j)&&!U._f.deps||cu(He,B(t.touchedFields,j),t.isSubmitted,Z,z),Ot=er(j,o,He);Q(a,j,$n),He?(U._f.onBlur&&U._f.onBlur(m),l&&l(0)):U._f.onChange&&U._f.onChange(m);const Rt=_(j,$n,He),si=!he(Rt)||Ot;if(!He&&p.state.next({name:j,type:m.type,values:oe(a)}),ri)return(u.isValid||g.isValid)&&(r.mode==="onBlur"?He&&k():He||k()),si&&p.state.next({name:j,...Ot?{}:Rt});if(!He&&Ot&&p.state.next({...t}),r.resolver){const{errors:Tr}=await I([j]);if(C($n),$){const ai=fs(t.errors,n,j),Ir=fs(Tr,n,ai.name||j);te=Ir.error,j=Ir.name,_e=he(Tr)}}else v([j],!0),te=(await nr(U,o.disabled,a,c,r.shouldUseNativeValidation))[j],v([j]),C($n),$&&(te?_e=!1:(u.isValid||g.isValid)&&(_e=await M(n,!0)));$&&(U._f.deps&&F(U._f.deps),P(j,_e,te,Rt))}},q=(m,O)=>{if(B(t.errors,O)&&m.focus)return m.focus(),1},F=async(m,O={})=>{let j,$;const U=Oe(m);if(r.resolver){const C=await S(ae(m)?m:U);j=he(C),$=m?!U.some(z=>B(C,z)):j}else m?($=(await Promise.all(U.map(async C=>{const z=B(n,C);return await M(z&&z._f?{[C]:z}:z)}))).every(Boolean),!(!$&&!t.isValid)&&k()):$=j=await M(n);return p.state.next({...!De(m)||(u.isValid||g.isValid)&&j!==t.isValid?{}:{name:m},...r.resolver||!m?{isValid:j}:{},errors:t.errors}),O.shouldFocus&&!$&&pn(n,q,m?U:o.mount),$},H=m=>{const O={...i.mount?a:s};return ae(m)?O:De(m)?B(O,m):m.map(j=>B(O,j))},Y=(m,O)=>({invalid:!!B((O||t).errors,m),isDirty:!!B((O||t).dirtyFields,m),error:B((O||t).errors,m),isValidating:!!B(t.validatingFields,m),isTouched:!!B((O||t).touchedFields,m)}),W=m=>{m&&Oe(m).forEach(O=>ce(t.errors,O)),p.state.next({errors:m?t.errors:{}})},J=(m,O,j)=>{const $=(B(n,m,{_f:{}})._f||{}).ref,U=B(t.errors,m)||{},{ref:C,message:z,type:Z,...te}=U;Q(t.errors,m,{...te,...O,ref:$}),p.state.next({name:m,errors:t.errors,isValid:!1}),j&&j.shouldFocus&&$&&$.focus&&$.focus()},Ne=(m,O)=>Me(m)?p.state.subscribe({next:j=>m(D(void 0,O),j)}):D(m,O,!0),ve=m=>p.state.subscribe({next:O=>{uu(m.name,O.name,m.exact)&&du(O,m.formState||u,wn,m.reRenderRoot)&&m.callback({values:{...a},...t,...O})}}).unsubscribe,fe=m=>(i.mount=!0,g={...g,...m.formState},ve({...m,formState:g})),le=(m,O={})=>{for(const j of m?Oe(m):o.mount)o.mount.delete(j),o.array.delete(j),O.keepValue||(ce(n,j),ce(a,j)),!O.keepError&&ce(t.errors,j),!O.keepDirty&&ce(t.dirtyFields,j),!O.keepTouched&&ce(t.touchedFields,j),!O.keepIsValidating&&ce(t.validatingFields,j),!r.shouldUnregister&&!O.keepDefaultValue&&ce(s,j);p.state.next({values:oe(a)}),p.state.next({...t,...O.keepDirty?{isDirty:G()}:{}}),!O.keepIsValid&&k()},X=({disabled:m,name:O})=>{(Ae(m)&&i.mount||m||o.disabled.has(O))&&(m?o.disabled.add(O):o.disabled.delete(O))},se=(m,O={})=>{let j=B(n,m);const $=Ae(O.disabled)||Ae(r.disabled);return Q(n,m,{...j||{},_f:{...j&&j._f?j._f:{ref:{name:m}},name:m,mount:!0,...O}}),o.mount.add(m),j?X({disabled:Ae(O.disabled)?O.disabled:r.disabled,name:m}):x(m,!0,O.value),{...$?{disabled:O.disabled||r.disabled}:{},...r.progressive?{required:!!O.required,min:_n(O.min),max:_n(O.max),minLength:_n(O.minLength),maxLength:_n(O.maxLength),pattern:_n(O.pattern)}:{},name:m,onChange:V,onBlur:V,ref:U=>{if(U){se(m,O),j=B(n,m);const C=ae(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,z=ru(C),Z=j._f.refs||[];if(z?Z.find(te=>te===C):C===j._f.ref)return;Q(n,m,{_f:{...j._f,...z?{refs:[...Z.filter(Dt),C,...Array.isArray(B(s,m))?[{}]:[]],ref:{type:C.type,name:m}}:{ref:C}}}),x(m,!1,void 0,C)}else j=B(n,m,{}),j._f&&(j._f.mount=!1),(r.shouldUnregister||O.shouldUnregister)&&!(Pa(o.array,m)&&i.action)&&o.unMount.add(m)}}},ye=()=>r.shouldFocusError&&pn(n,q,o.mount),ke=m=>{Ae(m)&&(p.state.next({disabled:m}),pn(n,(O,j)=>{const $=B(n,j);$&&(O.disabled=$._f.disabled||m,Array.isArray($._f.refs)&&$._f.refs.forEach(U=>{U.disabled=$._f.disabled||m}))},0,!1))},be=(m,O)=>async j=>{let $;j&&(j.preventDefault&&j.preventDefault(),j.persist&&j.persist());let U=oe(a);if(p.state.next({isSubmitting:!0}),r.resolver){const{errors:C,values:z}=await I();t.errors=C,U=z}else await M(n);if(o.disabled.size)for(const C of o.disabled)Q(U,C,void 0);if(ce(t.errors,"root"),he(t.errors)){p.state.next({errors:{}});try{await m(U,j)}catch(C){$=C}}else O&&await O({...t.errors},j),ye(),setTimeout(ye);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:he(t.errors)&&!$,submitCount:t.submitCount+1,errors:t.errors}),$)throw $},Ze=(m,O={})=>{B(n,m)&&(ae(O.defaultValue)?L(m,oe(B(s,m))):(L(m,O.defaultValue),Q(s,m,oe(O.defaultValue))),O.keepTouched||ce(t.touchedFields,m),O.keepDirty||(ce(t.dirtyFields,m),t.isDirty=O.defaultValue?G(m,oe(B(s,m))):G()),O.keepError||(ce(t.errors,m),u.isValid&&k()),p.state.next({...t}))},Ce=(m,O={})=>{const j=m?oe(m):s,$=oe(j),U=he(m),C=U?s:$;if(O.keepDefaultValues||(s=j),!O.keepValues){if(O.keepDirtyValues){const z=new Set([...o.mount,...Object.keys(In(s,a))]);for(const Z of Array.from(z))B(t.dirtyFields,Z)?Q(C,Z,B(a,Z)):L(Z,B(C,Z))}else{if(br&&ae(m))for(const z of o.mount){const Z=B(n,z);if(Z&&Z._f){const te=Array.isArray(Z._f.refs)?Z._f.refs[0]:Z._f.ref;if(dt(te)){const _e=te.closest("form");if(_e){_e.reset();break}}}}for(const z of o.mount)L(z,B(C,z))}a=oe(C),p.array.next({values:{...C}}),p.state.next({values:{...C}})}o={mount:O.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!O.keepIsValid||!!O.keepDirtyValues,i.watch=!!r.shouldUnregister,p.state.next({submitCount:O.keepSubmitCount?t.submitCount:0,isDirty:U?!1:O.keepDirty?t.isDirty:!!(O.keepDefaultValues&&!Ye(m,s)),isSubmitted:O.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:U?{}:O.keepDirtyValues?O.keepDefaultValues&&a?In(s,a):t.dirtyFields:O.keepDefaultValues&&m?In(s,m):O.keepDirty?t.dirtyFields:{},touchedFields:O.keepTouched?t.touchedFields:{},errors:O.keepErrors?t.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Be=(m,O)=>Ce(Me(m)?m(a):m,O),Rn=(m,O={})=>{const j=B(n,m),$=j&&j._f;if($){const U=$.refs?$.refs[0]:$.ref;U.focus&&(U.focus(),O.shouldSelect&&Me(U.select)&&U.select())}},wn=m=>{t={...t,...m}},dn={control:{register:se,unregister:le,getFieldState:Y,handleSubmit:be,setError:J,_subscribe:ve,_runSchema:I,_focusError:ye,_getWatch:D,_getDirty:G,_setValid:k,_setFieldArray:w,_setDisabledField:X,_setErrors:R,_getFieldArray:E,_reset:Ce,_resetDefaultValues:()=>Me(r.defaultValues)&&r.defaultValues().then(m=>{Be(m,r.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:K,_disableForm:ke,_subjects:p,_proxyFormState:u,get _fields(){return n},get _formValues(){return a},get _state(){return i},set _state(m){i=m},get _defaultValues(){return s},get _names(){return o},set _names(m){o=m},get _formState(){return t},get _options(){return r},set _options(m){r={...r,...m}}},subscribe:fe,trigger:F,register:se,handleSubmit:be,watch:Ne,setValue:L,getValues:H,reset:Be,resetField:Ze,clearErrors:W,unregister:le,setError:J,setFocus:Rn,getFieldState:Y};return{...dn,formControl:dn}}var ze=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const t=(Math.random()*16+e)%16|0;return(r=="x"?t:t&3|8).toString(16)})},Ft=(e,r,t={})=>t.shouldFocus||ae(t.shouldFocus)?t.focusName||`${e}.${ae(t.focusIndex)?r:t.focusIndex}.`:"",qt=(e,r)=>[...e,...Oe(r)],Lt=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Vt(e,r,t){return[...e.slice(0,r),...Oe(t),...e.slice(r)]}var Ct=(e,r,t)=>Array.isArray(e)?(ae(e[t])&&(e[t]=void 0),e.splice(t,0,e.splice(r,1)[0]),e):[],Bt=(e,r)=>[...Oe(r),...Oe(e)];function pu(e,r){let t=0;const n=[...e];for(const s of r)n.splice(s-t,1),t++;return Bn(n).length?n:[]}var Ut=(e,r)=>ae(r)?[]:pu(e,Oe(r).sort((t,n)=>t-n)),Kt=(e,r,t)=>{[e[r],e[t]]=[e[t],e[r]]},gs=(e,r,t)=>(e[r]=t,e);function vu(e){const r=ln(),{control:t=r.control,name:n,keyName:s="id",shouldUnregister:a,rules:i}=e,[o,l]=b.useState(t._getFieldArray(n)),d=b.useRef(t._getFieldArray(n).map(ze)),u=b.useRef(o),g=b.useRef(n),p=b.useRef(!1);g.current=n,u.current=o,t._names.array.add(n),i&&t.register(n,i),b.useEffect(()=>t._subjects.array.subscribe({next:({values:P,name:I})=>{if(I===g.current||!I){const S=B(P,g.current);Array.isArray(S)&&(l(S),d.current=S.map(ze))}}}).unsubscribe,[t]);const c=b.useCallback(P=>{p.current=!0,t._setFieldArray(n,P)},[t,n]),y=(P,I)=>{const S=Oe(oe(P)),M=qt(t._getFieldArray(n),S);t._names.focus=Ft(n,M.length-1,I),d.current=qt(d.current,S.map(ze)),c(M),l(M),t._setFieldArray(n,M,qt,{argA:Lt(P)})},k=(P,I)=>{const S=Oe(oe(P)),M=Bt(t._getFieldArray(n),S);t._names.focus=Ft(n,0,I),d.current=Bt(d.current,S.map(ze)),c(M),l(M),t._setFieldArray(n,M,Bt,{argA:Lt(P)})},v=P=>{const I=Ut(t._getFieldArray(n),P);d.current=Ut(d.current,P),c(I),l(I),!Array.isArray(B(t._fields,n))&&Q(t._fields,n,void 0),t._setFieldArray(n,I,Ut,{argA:P})},w=(P,I,S)=>{const M=Oe(oe(I)),K=Vt(t._getFieldArray(n),P,M);t._names.focus=Ft(n,P,S),d.current=Vt(d.current,P,M.map(ze)),c(K),l(K),t._setFieldArray(n,K,Vt,{argA:P,argB:Lt(I)})},h=(P,I)=>{const S=t._getFieldArray(n);Kt(S,P,I),Kt(d.current,P,I),c(S),l(S),t._setFieldArray(n,S,Kt,{argA:P,argB:I},!1)},R=(P,I)=>{const S=t._getFieldArray(n);Ct(S,P,I),Ct(d.current,P,I),c(S),l(S),t._setFieldArray(n,S,Ct,{argA:P,argB:I},!1)},x=(P,I)=>{const S=oe(I),M=gs(t._getFieldArray(n),P,S);d.current=[...M].map((K,G)=>!K||G===P?ze():d.current[G]),c(M),l([...M]),t._setFieldArray(n,M,gs,{argA:P,argB:S},!0,!1)},_=P=>{const I=Oe(oe(P));d.current=I.map(ze),c([...I]),l([...I]),t._setFieldArray(n,[...I],S=>S,{},!0,!1)};return b.useEffect(()=>{if(t._state.action=!1,er(n,t._names)&&t._subjects.state.next({...t._formState}),p.current&&(!mn(t._options.mode).isOnSubmit||t._formState.isSubmitted)&&!mn(t._options.reValidateMode).isOnSubmit)if(t._options.resolver)t._runSchema([n]).then(P=>{const I=B(P.errors,n),S=B(t._formState.errors,n);(S?!I&&S.type||I&&(S.type!==I.type||S.message!==I.message):I&&I.type)&&(I?Q(t._formState.errors,n,I):ce(t._formState.errors,n),t._subjects.state.next({errors:t._formState.errors}))});else{const P=B(t._fields,n);P&&P._f&&!(mn(t._options.reValidateMode).isOnSubmit&&mn(t._options.mode).isOnSubmit)&&nr(P,t._names.disabled,t._formValues,t._options.criteriaMode===Pe.all,t._options.shouldUseNativeValidation,!0).then(I=>!he(I)&&t._subjects.state.next({errors:Ka(t._formState.errors,I,n)}))}t._subjects.state.next({name:n,values:oe(t._formValues)}),t._names.focus&&pn(t._fields,(P,I)=>{if(t._names.focus&&I.startsWith(t._names.focus)&&P.focus)return P.focus(),1}),t._names.focus="",t._setValid(),p.current=!1},[o,n,t]),b.useEffect(()=>(!B(t._formValues,n)&&t._setFieldArray(n),()=>{const P=(I,S)=>{const M=B(t._fields,I);M&&M._f&&(M._f.mount=S)};t._options.shouldUnregister||a?t.unregister(n):P(n,!1)}),[n,t,s,a]),{swap:b.useCallback(h,[c,n,t]),move:b.useCallback(R,[c,n,t]),prepend:b.useCallback(k,[c,n,t]),append:b.useCallback(y,[c,n,t]),remove:b.useCallback(v,[c,n,t]),insert:b.useCallback(w,[c,n,t]),update:b.useCallback(x,[c,n,t]),replace:b.useCallback(_,[c,n,t]),fields:b.useMemo(()=>o.map((P,I)=>({...P,[s]:d.current[I]||ze()})),[o,s])}}function yu(e={}){const r=b.useRef(void 0),t=b.useRef(void 0),[n,s]=b.useState({isDirty:!1,isValidating:!1,isLoading:Me(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Me(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...e.formControl?e.formControl:gu(e),formState:n},e.formControl&&e.defaultValues&&!Me(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const a=r.current.control;return a._options=e,Er(()=>{const i=a._subscribe({formState:a._proxyFormState,callback:()=>s({...a._formState}),reRenderRoot:!0});return s(o=>({...o,isReady:!0})),a._formState.isReady=!0,i},[a]),b.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),b.useEffect(()=>{e.mode&&(a._options.mode=e.mode),e.reValidateMode&&(a._options.reValidateMode=e.reValidateMode)},[a,e.mode,e.reValidateMode]),b.useEffect(()=>{e.errors&&(a._setErrors(e.errors),a._focusError())},[a,e.errors]),b.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]),b.useEffect(()=>{if(a._proxyFormState.isDirty){const i=a._getDirty();i!==n.isDirty&&a._subjects.state.next({isDirty:i})}},[a,n.isDirty]),b.useEffect(()=>{e.values&&!Ye(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values,s(i=>({...i}))):a._resetDefaultValues()},[a,e.values]),b.useEffect(()=>{a._state.mount||(a._setValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),r.current.formState=Ma(n,a),r.current}function ku(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ps={exports:{}},jn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs;function bu(){if(vs)return jn;vs=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return jn.Fragment=r,jn.jsx=t,jn.jsxs=t,jn}var ys;function hu(){return ys||(ys=1,ps.exports=bu()),ps.exports}var Te=hu();const Eu=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Te.jsx(Kl,{variant:"warning",size:"small",children:Te.jsx(Le,{gap:"2",children:b.Children.map(e,r=>Te.jsx(ne,{size:"small",children:r},li(r)?r.key:r))})}),Un={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};on(Un);var ks={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var bs;function Ou(){return bs||(bs=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,n.call(this,o)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)r.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(ks)),ks.exports}var Ru=Ou();const wr=ku(Ru),wu="_borderbox_1vkvn_1",Au="_error_1vkvn_5",Tu="_warning_1vkvn_8",Iu={borderbox:wu,error:Au,warning:Tu};wr.bind(Iu);const _u="_aksjonspunkt_kn1hn_1",ju="_erAksjonspunktApent_kn1hn_4",xu="_erIkkeGodkjentAvBeslutter_kn1hn_8",Pu={aksjonspunkt:_u,erAksjonspunktApent:ju,erIkkeGodkjentAvBeslutter:xu};wr.bind(Pu);const hs=({dateString:e,year:r,month:t,day:n})=>Te.jsx(Te.Fragment,{children:zs(e,{year:r,month:t,day:n})});on(Un);const Es=({dateStringFom:e,dateStringTom:r,showTodayString:t=!1})=>Te.jsx(Te.Fragment,{children:di(e,r,{showTodayString:t})});on(Un);const Su="_divider_1t980_1",Nu="_dividerParagraf_1t980_8",Mu="_leftPanel_1t980_11",Du="_rightPanel_1t980_14",Fu={divider:Su,dividerParagraf:Nu,leftPanel:Mu,rightPanel:Du};wr.bind(Fu);const $a=()=>Te.jsx("span",{"data-testid":"editedIcon",children:Te.jsx(Yi,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});on(Un);const qu=on(Un),Lu=({tekst:e,children:r})=>{const[t,n]=f.useState(!1);if(!e)return r;const s=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return Te.jsx(Ia,{content:qu.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Te.jsx("span",{"aria-hidden":"true",onClick:s,children:r??e})})},Os={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},tr=({beløp:e,kr:r=!1,rød:t=!1})=>{const n=e==null?void 0:e.toString().replace(/\s/g,"");return Te.jsx(Lu,{tekst:n,children:Te.jsxs("span",{className:t?Os.rød:Os.default,children:[n?ui(n):"-",n&&r&&" kr"]})})};function Vu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rs={exports:{}},xn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws;function Cu(){if(ws)return xn;ws=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return xn.Fragment=r,xn.jsx=t,xn.jsxs=t,xn}var As;function Bu(){return As||(As=1,Rs.exports=Cu()),Rs.exports}var de=Bu();const Ga=e=>e.reduce((r,t,n)=>({...r,[n]:s=>t(s)||!0}),{}),Ha=(e,r)=>{const t=r.split(".").reduce((n,s)=>n!==void 0?n[s]:n,e);return t==null?void 0:t.message};var rr={exports:{}},Uu=rr.exports,Ts;function Ku(){return Ts||(Ts=1,function(e,r){(function(t,n){e.exports=n()})(Uu,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,a=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},d=function(v){return(v=+v)+(v>68?1900:2e3)},u=function(v){return function(w){this[v]=+w}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var h=w.match(/([+-]|\d\d)/g),R=60*h[1]+(+h[2]||0);return R===0?0:h[0]==="+"?-R:R}(v)}],p=function(v){var w=l[v];return w&&(w.indexOf?w:w.s.concat(w.f))},c=function(v,w){var h,R=l.meridiem;if(R){for(var x=1;x<=24;x+=1)if(v.indexOf(R(x,0,w))>-1){h=x>12;break}}else h=v===(w?"pm":"PM");return h},y={A:[o,function(v){this.afternoon=c(v,!1)}],a:[o,function(v){this.afternoon=c(v,!0)}],Q:[s,function(v){this.month=3*(v-1)+1}],S:[s,function(v){this.milliseconds=100*+v}],SS:[a,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[a,u("day")],Do:[o,function(v){var w=l.ordinal,h=v.match(/\d+/);if(this.day=h[0],w)for(var R=1;R<=31;R+=1)w(R).replace(/\[|\]/g,"")===v&&(this.day=R)}],w:[i,u("week")],ww:[a,u("week")],M:[i,u("month")],MM:[a,u("month")],MMM:[o,function(v){var w=p("months"),h=(p("monthsShort")||w.map(function(R){return R.slice(0,3)})).indexOf(v)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[o,function(v){var w=p("months").indexOf(v)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,u("year")],YY:[a,function(v){this.year=d(v)}],YYYY:[/\d{4}/,u("year")],Z:g,ZZ:g};function k(v){var w,h;w=v,h=l&&l.formats;for(var R=(v=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(K,G,D){var E=D&&D.toUpperCase();return G||h[D]||t[D]||h[E].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(T,N,L){return N||L.slice(1)})})).match(n),x=R.length,_=0;_<x;_+=1){var P=R[_],I=y[P],S=I&&I[0],M=I&&I[1];R[_]=M?{regex:S,parser:M}:P.replace(/^\[|\]$/g,"")}return function(K){for(var G={},D=0,E=0;D<x;D+=1){var T=R[D];if(typeof T=="string")E+=T.length;else{var N=T.regex,L=T.parser,V=K.slice(E),q=N.exec(V)[0];L.call(G,q),K=K.replace(q,"")}}return function(F){var H=F.afternoon;if(H!==void 0){var Y=F.hours;H?Y<12&&(F.hours+=12):Y===12&&(F.hours=0),delete F.afternoon}}(G),G}}return function(v,w,h){h.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(d=v.parseTwoDigitYear);var R=w.prototype,x=R.parse;R.parse=function(_){var P=_.date,I=_.utc,S=_.args;this.$u=I;var M=S[1];if(typeof M=="string"){var K=S[2]===!0,G=S[3]===!0,D=K||G,E=S[2];G&&(E=S[2]),l=this.$locale(),!K&&E&&(l=h.Ls[E]),this.$d=function(V,q,F,H){try{if(["x","X"].indexOf(q)>-1)return new Date((q==="X"?1e3:1)*V);var Y=k(q)(V),W=Y.year,J=Y.month,Ne=Y.day,ve=Y.hours,fe=Y.minutes,le=Y.seconds,X=Y.milliseconds,se=Y.zone,ye=Y.week,ke=new Date,be=Ne||(W||J?1:ke.getDate()),Ze=W||ke.getFullYear(),Ce=0;W&&!J||(Ce=J>0?J-1:ke.getMonth());var Be,Rn=ve||0,wn=fe||0,Kn=le||0,dn=X||0;return se?new Date(Date.UTC(Ze,Ce,be,Rn,wn,Kn,dn+60*se.offset*1e3)):F?new Date(Date.UTC(Ze,Ce,be,Rn,wn,Kn,dn)):(Be=new Date(Ze,Ce,be,Rn,wn,Kn,dn),ye&&(Be=H(Be).week(ye).toDate()),Be)}catch{return new Date("")}}(P,M,I,h),this.init(),E&&E!==!0&&(this.$L=this.locale(E).$L),D&&P!=this.format(M)&&(this.$d=new Date("")),l={}}else if(M instanceof Array)for(var T=M.length,N=1;N<=T;N+=1){S[1]=M[N-1];var L=h.apply(this,S);if(L.isValid()){this.$d=L.$d,this.$L=L.$L,this.init();break}N===T&&(this.$d=new Date(""))}else x.call(this,_)}}})}(rr)),rr.exports}var $u=Ku();const Gu=Vu($u),Hu="_textarea_1snk6_1",zu="_readOnlyField_1snk6_7",Is={textarea:Hu,readOnlyField:zu},Yu=e=>e!=null&&e!=="",Wu=({label:e,value:r,isEdited:t=!1,type:n,hideLabel:s,size:a})=>Yu(r)?de.jsxs(Le,{gap:"1",children:[e&&!s&&de.jsx(me,{size:a,children:e}),de.jsxs(pe,{gap:"2",align:"center",wrap:!1,children:[de.jsx(Js,{className:n==="textarea"?Is.textarea:Is.readOnlyField,size:a,children:r}),t&&de.jsx($a,{})]})]}):null;tn.extend(Gu);const Ju="_hideRadioLabels_1u3xf_1",Xu={hideRadioLabels:Ju},Zu=({label:e,description:r,name:t,validate:n=[],radios:s,onChange:a,disabled:i=!1,isReadOnly:o=!1,isHorizontal:l=!1,parse:d=k=>k,isTrueOrFalseSelection:u=!1,hideLegend:g=!1,hideRadioLabels:p=!1,isEdited:c=!1,size:y="small"})=>{const{formState:{errors:k}}=ln(),{field:v}=Fa({name:t,rules:{validate:f.useMemo(()=>Ga(n),[n])}}),w=u?R=>R==="true":d,h=de.jsxs(pe,{justify:"center",gap:"2",children:[e,o&&c&&de.jsx($a,{})]});return de.jsxs(Kd,{name:t,value:v.value!==void 0?v.value:null,onChange:R=>{a&&a(R),v.onChange(R)},size:y,legend:h,description:r,error:Ha(k,t),className:p?Xu.hideRadioLabels:"",hideLegend:g,children:[!l&&s.map(R=>de.jsxs(f.Fragment,{children:[de.jsx(ns,{size:y,value:w(R.value),disabled:R.disabled||i||o,children:R.label}),v.value===w(R.value)&&R.element]},R.value)),l&&de.jsxs(de.Fragment,{children:[de.jsx(pe,{gap:"4",children:s.map(R=>de.jsx(ns,{size:y,value:w(R.value),disabled:R.disabled||i||o,children:R.label},R.value))}),s.filter(R=>v.value===w(R.value)).map(R=>de.jsx(f.Fragment,{children:R.element},R.value))]})]})},Qu="_textAreaFieldWithBadges_bdz0b_1",ec="_etikettWrapper_bdz0b_4",_s={textAreaFieldWithBadges:Qu,etikettWrapper:ec},nc=({name:e,label:r,readOnly:t,maxLength:n,badges:s,validate:a=[],parse:i=p=>p,className:o,description:l,isEdited:d,size:u="small",...g})=>{const{formState:{errors:p}}=ln(),{field:c}=Fa({name:e,rules:{validate:f.useMemo(()=>Ga(a),[a])}});return t?de.jsx(Wu,{size:u,label:r,value:c.value,type:"textarea",isEdited:d,hideLabel:g.hideLabel}):de.jsxs("div",{className:s?_s.textAreaFieldWithBadges:null,children:[s&&de.jsx("div",{className:_s.etikettWrapper,children:s.map(({type:y,titleText:k})=>de.jsx(qd,{variant:y,size:"small",children:k},k))}),de.jsx(Jd,{size:u,label:r,description:l,className:o,autoComplete:"off",...c,onChange:y=>c.onChange(y.currentTarget.value!==""?i(y.currentTarget.value):null),value:c.value?c.value:"",error:Ha(p,e),maxLength:n,...g})]})},tc=({formMethods:e,onSubmit:r,children:t,className:n,setDataOnUnmount:s})=>{const{handleSubmit:a,getValues:i}=e;return f.useEffect(()=>()=>{s&&s(i())},[]),de.jsx(Qd,{...e,children:de.jsx("form",{className:n,onSubmit:r?a(o=>r(o)):void 0,children:t})})};function za(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sr={exports:{}},rc=sr.exports,js;function sc(){return js||(js=1,function(e,r){(function(t,n){e.exports=n()})(rc,function(){return function(t,n){n.prototype.isSameOrAfter=function(s,a){return this.isSame(s,a)||this.isAfter(s,a)}}})}(sr)),sr.exports}var ac=sc();const ic=za(ac);var ar={exports:{}},oc=ar.exports,xs;function lc(){return xs||(xs=1,function(e,r){(function(t,n){e.exports=n()})(oc,function(){return function(t,n){n.prototype.isSameOrBefore=function(s,a){return this.isSame(s,a)||this.isBefore(s,a)}}})}(ar)),ar.exports}var dc=lc();const uc=za(dc),cc="Dato må være før eller lik {limit}",fc="Dato må være etter eller lik {limit}",mc="Perioder kan ikke overlappe i tid",gc="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",pc="Dato må være lik {value}",vc="Dato må skrives slik: dd.mm.åååå",yc="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",kc="Tallet kan ikke inneholde mer enn to desimaler",bc="Tallet kan ikke ha desimaler",hc="Feltet kan kun inneholde tall",Ec="Ugyldig fødselsnummer",Oc="Feltet må være et fødselsnummer (11 siffer)",Rc="Ugyldig organisasjonsnummer.",wc="Ugyldig organisasjonsnummer eller fødselsnummer",Ac="Startdato må være før eller lik sluttdato",Tc="Periode er utenfor opptjeningsperioden",Ic="Ugyldig saksnummer eller fødselsnummer",_c="Feltet inneholder ugyldige tegn: {text}",jc="Feltet inneholder en ugyldig verdi: {value}",xc="Feltet kan ikke inneholde mellomrom",Pc="Feltet må fylles ut",Sc="Du kan skrive maksimalt {length} tegn",Nc="Du må skrive minst {length} tegn",Mc="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",Dc="Feltet må være mindre eller lik {length}",Fc="Feltet må være større eller lik {length}",qc="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",Lc={DateNotBeforeOrEqual:cc,DateNotAfterOrEqual:fc,DateRangesOverlapping:mc,DateRangesOverlappingPeriodTypes:gc,DatesNotEqual:pc,InvalidDate:vc,InvalidDatesInPeriod:yc,InvalidDecimal:kc,InvalidInteger:bc,InvalidNumber:hc,InvalidFodselsnr:Ec,InvalidFodselsnrFormat:Oc,InvalidOrgnr:Rc,InvalidOrgnrOrFodselsnr:wc,InvalidPeriod:Ac,InvalidPeriodRange:Tc,InvalidSaksnrOrFodselsnrFormat:Ic,InvalidText:_c,InvalidValue:jc,IllegalWhiteSpace:xc,IsRequired:Pc,MaxLength:Sc,MinLength:Nc,MaxLengthOrFodselsnr:Mc,MaxValue:Dc,MinValue:Fc,SammeFodselsnrSomSoker:qc},{formatMessage:Et}=on(Lc),Vc=e=>Et({id:"InvalidText"},{text:e}),Cc=()=>Et({id:"IsRequired"}),Bc=e=>Et({id:"MaxLength"},{length:e}),Uc=e=>Et({id:"MinLength"},{length:e}),Kc=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,$c=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Ar=e=>e==null||e.toString().trim().length===0;tn.extend(ic);tn.extend(uc);const Ya=e=>Ar(e)?Cc():void 0,Gc=e=>r=>Ar(r)||r.toString().trim().length>=e?null:Uc(e),Hc=e=>r=>Ar(r)||r.toString().trim().length<=e?null:Bc(e),zc=e=>{if(!Kc.test(e)){const r=e.replace($c,"");return Vc(r.replace(/[\t]/g,"Tabulatortegn"))}return null};var ir=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(ir||{}),$t={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ps;function Yc(){return Ps||(Ps=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,n.call(this,o)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)r.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}($t)),$t.exports}var Wc=Yc();const Jc=$s(Wc),Xc="_boks_kspkv_1",Zc="_aksjonspunkt_kspkv_9",Qc="_harBorderTop_kspkv_13",Wa={boks:Xc,aksjonspunkt:Zc,harBorderTop:Qc},ef=Jc.bind(Wa),Ja=({harÅpentAksjonspunkt:e,harBorderTop:r,children:t})=>A.jsx("div",{className:ef(Wa.boks,{aksjonspunkt:e,harBorderTop:r}),children:t});Ja.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdBoks",props:{harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},harBorderTop:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const Xa=({saksnummer:e,journalpostId:r,dokumentId:t,dokumentTittel:n,children:s})=>{const a=`${r}-${t}`,i=ki(e,r,t);return A.jsx(Ta,{href:i,target:a,rel:"noopener noreferrer",onClick:nf(n),children:s??n})},nf=e=>r=>{e&&(r.preventDefault(),bi(r.currentTarget.href,r.currentTarget.target,e))};Xa.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const tf="_inline_17flc_1",rf="_phoneIcon_17flc_5",sf="_docIcon_17flc_11",Gt={inline:tf,phoneIcon:rf,docIcon:sf},Za=({saksnummer:e,inntektsmelding:r})=>A.jsxs(Le,{gap:"4",children:[A.jsxs(pe,{gap:"4",children:[A.jsx(me,{size:"small",children:A.jsx(ee,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),A.jsx(ne,{size:"small",children:A.jsx(tr,{beløp:r.inntektPrMnd})})]}),A.jsxs(pe,{gap:"4",children:[A.jsx(me,{size:"small",children:A.jsx(ee,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),A.jsx(ne,{size:"small",children:A.jsx(ee,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd&&A.jsxs(pe,{gap:"4",children:[A.jsx(me,{size:"small",children:A.jsx(ee,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),A.jsx(ne,{size:"small",children:A.jsx(tr,{beløp:r.refusjonPrMnd})})]}),A.jsx(Xa,{saksnummer:e,journalpostId:r.journalpostId,dokumentId:r.dokumentId,children:A.jsxs(pe,{gap:"1",children:[A.jsx(ne,{size:"small",className:Gt.inline,children:A.jsx(ee,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),A.jsx(Ki,{className:Gt.docIcon})]})}),A.jsxs(pe,{gap:"4",align:"center",children:[A.jsx(Ji,{className:Gt.phoneIcon}),A.jsxs(Le,{gap:"1",children:[A.jsx(me,{size:"small",children:A.jsx(ee,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),A.jsx(nt,{children:r.kontaktpersonNavn}),A.jsx(nt,{children:A.jsx(ee,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]});Za.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const af="_inline_p7hb9_1",of="_arrow_p7hb9_5",Ht={inline:af,arrow:of},Qa=({inntektsposter:e,skjæringstidspunkt:r})=>{const[t,n]=f.useState(!1),s=lf(r,e);return A.jsxs(A.Fragment,{children:[e.length>0&&A.jsxs(Le,{gap:"2",children:[A.jsx(me,{size:"small",children:A.jsx(ee,{id:"InntektsposterPanel.Inntekter"})}),A.jsx(Le,{gap:"1",width:"150px",children:s.filter((a,i)=>t?!0:i<3).map(a=>A.jsxs(pe,{justify:"space-between",children:[A.jsxs(pe,{gap:"1",children:[A.jsx(ne,{size:"small",children:A.jsx(ee,{id:`InntektsposterPanel.${tn(a.fom).month()+1}`})}),A.jsx(ne,{size:"small",children:tn(a.fom).year()})]},a.fom),A.jsx(ne,{size:"small",children:A.jsx(tr,{beløp:a.beløp})})]},a.fom))}),A.jsxs(Ta,{onClick:a=>{a.preventDefault(),n(!t)},href:"",children:[A.jsx("span",{children:A.jsx(ne,{size:"small",className:Ht.inline,children:A.jsx(ee,{id:t?"InntektsposterPanel.FaerreManeder":"InntektsposterPanel.TidligereManeder"})})}),t?A.jsx(Ci,{className:Ht.arrow}):A.jsx(Li,{className:Ht.arrow})]})]}),e.length===0&&A.jsx(me,{size:"small",children:A.jsx(ee,{id:"InntektsposterPanel.IngenInntekt"})})]})},lf=(e,r)=>{const n=tn(e).startOf("month"),s=n.subtract(12,"month"),a=[];for(let i=n;i.isAfter(s);i=i.subtract(1,"month")){const o=i.format(xr),l=r.find(d=>tn(d.fom).startOf("month").format(xr)===o);a.push({beløp:(l==null?void 0:l.beløp)||0,fom:o})}return a};Qa.__docgenInfo={description:"",methods:[],displayName:"InntektsposterPanel",props:{inntektsposter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const df="_hjelpetekst_dvkw1_1",uf="_image_dvkw1_5",cf="_hjelpetekstInnhold_dvkw1_9",ff="_exclamationmarkIcon_dvkw1_14",mf="_checkmarkIcon_dvkw1_21",Pn={hjelpetekst:df,image:uf,hjelpetekstInnhold:cf,exclamationmarkIcon:ff,checkmarkIcon:mf},gf="arbeidsforhold",ei=({index:e,fieldId:r,saksnummer:t,sorterteArbeidsforhold:n,arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:a,isReadOnly:i,harÅpentAksjonspunkt:o,skjæringstidspunkt:l,alleKodeverk:d})=>{var P,I;const u=Gs(),{inntektsmeldinger:g,inntekter:p}=s,c=n[e],y=g.find(S=>pf(c,S)),k=(P=p.find(S=>S.arbeidsgiverIdent===c.arbeidsgiverIdent))==null?void 0:P.inntekter,v=n.filter(S=>S.arbeidsgiverIdent===c.arbeidsgiverIdent).length>1,w=a[c.arbeidsgiverIdent],h=f.useRef(null),[R,x]=f.useState(!1),_=()=>x(S=>!S);return A.jsx(Ja,{harÅpentAksjonspunkt:o,harBorderTop:e===0,children:A.jsxs(pe,{gap:"6",children:[!o&&A.jsx(Mi,{title:u.formatMessage({id:"ArbeidsforholdFieldArray.Ok"}),className:Pn.checkmarkIcon}),o&&A.jsx(Zs,{title:u.formatMessage({id:"ArbeidsforholdFieldArray.Aksjonspunkt"}),className:Pn.exclamationmarkIcon}),A.jsxs(Le,{gap:"4",width:"90%",children:[A.jsxs(pe,{justify:"space-between",children:[A.jsxs("div",{children:[A.jsx(me,{size:"small",children:w.navn}),c.arbeidsgiverIdent&&A.jsxs(nt,{children:["(",w.erPrivatPerson&&w.fødselsdato?A.jsx(hs,{dateString:w.fødselsdato}):c.arbeidsgiverIdent,")"]})]}),A.jsxs("div",{children:[A.jsx(me,{size:"small",children:A.jsx(ee,{id:"ArbeidsforholdFieldArray.Periode"})}),A.jsx(ne,{size:"small",children:c?A.jsx(Es,{dateStringFom:c.fom,dateStringTom:c.tom}):"-"})]}),A.jsxs("div",{children:[A.jsx(me,{size:"small",children:A.jsx(ee,{id:"ArbeidsforholdFieldArray.Kilde"})}),A.jsx(ne,{size:"small",children:A.jsx(ee,{id:c?"ArbeidsforholdFieldArray.AaRegisteret":"ArbeidsforholdFieldArray.Inntektsmelding"})})]}),A.jsxs("div",{children:[A.jsx(me,{size:"small",children:A.jsx(ee,{id:"ArbeidsforholdFieldArray.InntektsmeldingMottatt"})}),A.jsxs(ne,{size:"small",children:[(y==null?void 0:y.motattDato)&&A.jsx(hs,{dateString:y.motattDato}),!(y!=null&&y.motattDato)&&A.jsx(ee,{id:"ArbeidsforholdFieldArray.IkkeMottatt"})]})]})]}),v&&c.eksternArbeidsforholdId&&A.jsxs(pe,{gap:"2",children:[A.jsx(me,{size:"small",children:A.jsx(ee,{id:"ArbeidsforholdFieldArray.Id"})}),A.jsxs("div",{children:[c.eksternArbeidsforholdId.length<50&&A.jsx(ne,{size:"small",children:c.eksternArbeidsforholdId}),c.eksternArbeidsforholdId.length>=50&&A.jsx(Ia,{content:vf(c.eksternArbeidsforholdId),placement:"bottom",children:A.jsx(ne,{size:"small",children:`${c.eksternArbeidsforholdId.substring(0,50)}...`})})]})]}),c.stillingsprosent&&A.jsxs(pe,{gap:"2",children:[A.jsx(me,{size:"small",children:A.jsx(ee,{id:"ArbeidsforholdFieldArray.Stillingsprosent"})}),A.jsx(ne,{size:"small",children:`${c.stillingsprosent}%`})]}),c.permisjonOgMangel&&A.jsx(pe,{gap:"2",children:A.jsxs(A.Fragment,{children:[A.jsx(me,{size:"small",children:`${((I=d.PermisjonsbeskrivelseType.find(S=>{var M;return S.kode===((M=c.permisjonOgMangel)==null?void 0:M.type)}))==null?void 0:I.navn)??""} 100%`}),A.jsx(ne,{size:"small",children:A.jsx(Es,{dateStringFom:c.permisjonOgMangel.permisjonFom,dateStringTom:void 0})})]})}),y&&A.jsx(Za,{saksnummer:t,inntektsmelding:y}),!y&&k&&A.jsx(Qa,{inntektsposter:k,skjæringstidspunkt:l}),A.jsx(Zu,{name:`${gf}.${e}.permisjonStatus`,label:A.jsxs(pe,{gap:"2",children:[A.jsx(ee,{id:"ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed"}),A.jsxs("div",{className:Pn.image,children:[A.jsx(pr,{ref:h,type:"button",variant:"tertiary",onClick:_,icon:A.jsx(Zi,{title:u.formatMessage({id:"ArbeidsforholdFieldArray.AltHjelpetekst"})})}),A.jsx(Zt,{open:R,onClose:_,anchorEl:h.current,className:Pn.hjelpetekst,children:A.jsx(Zt.Content,{className:Pn.hjelpetekstInnhold,children:A.jsxs(Le,{gap:"2",children:[A.jsx(ne,{children:A.jsx(ee,{id:"ArbeidsforholdFieldArray.HjelpetekstDel1"})}),A.jsx(ne,{children:A.jsx(ee,{id:"ArbeidsforholdFieldArray.HjelpetekstDel2"})}),A.jsx(ne,{children:A.jsx(ee,{id:"ArbeidsforholdFieldArray.HjelpetekstDel3"})}),A.jsx(ne,{children:A.jsx(ee,{id:"ArbeidsforholdFieldArray.HjelpetekstDel4"})})]})})})]})]}),validate:[Ya],isReadOnly:i,radios:[{label:u.formatMessage({id:y?"ArbeidsforholdFieldArray.TaMedArbeidsforhold":"ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding"}),value:ir.IKKE_BRUK_PERMISJON},{label:u.formatMessage({id:"ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold"}),value:ir.BRUK_PERMISJON}]})]})]})},r)},pf=(e,r)=>r.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!r.internArbeidsforholdId||r.internArbeidsforholdId===e.internArbeidsforholdId),vf=e=>{const r=Math.ceil(e.length/25);return Array.from({length:r},(n,s)=>e.slice(s*25,s*25+25)).join("-")};ei.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdField",props:{index:{required:!0,tsType:{name:"number"},description:""},fieldId:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const yf="arbeidsforhold",ni=({saksnummer:e,sorterteArbeidsforhold:r,arbeidOgInntekt:t,arbeidsgiverOpplysningerPerId:n,isReadOnly:s,harÅpentAksjonspunkt:a,skjæringstidspunkt:i,alleKodeverk:o})=>{const{control:l}=ln(),{fields:d}=vu({control:l,name:yf});return A.jsx("div",{children:d.map((u,g)=>A.jsx(ei,{fieldId:u.id,index:g,saksnummer:e,sorterteArbeidsforhold:r,arbeidOgInntekt:t,arbeidsgiverOpplysningerPerId:n,isReadOnly:s,harÅpentAksjonspunkt:a,skjæringstidspunkt:i,alleKodeverk:o},u.id))})};ni.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const kf=Gc(3),bf=Hc(1500),hf=e=>(r,t)=>e[r.arbeidsgiverIdent].navn.localeCompare(e[t.arbeidsgiverIdent].navn),ti=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:r})=>{const{aksjonspunkterForPanel:t,fagsak:n,submitCallback:s,isReadOnly:a,alleKodeverk:i}=ci(),o={inntektsmeldinger:e.inntektsmeldinger,arbeidsforhold:e.arbeidsforhold.filter(k=>{var v;return(v=k.permisjonOgMangel)==null?void 0:v.årsak}),inntekter:e.inntekter,skjæringstidspunkt:e.skjæringstidspunkt},{arbeidsforhold:l}=o,d=[...l].sort(hf(r)),u={arbeidsforhold:d.map(k=>{var v;return{permisjonStatus:(v=k.permisjonOgMangel)==null?void 0:v.permisjonStatus}}),begrunnelse:t[0].begrunnelse??""},{mellomlagretFormData:g,setMellomlagretFormData:p}=fi(),c=yu({defaultValues:g??u});f.useEffect(()=>()=>{p(c.getValues())},[]);const y=t.some(k=>k.status===Fn.OPPRETTET);return A.jsxs(Le,{gap:"8",children:[A.jsxs(pe,{justify:"space-between",children:[A.jsx(Ai,{size:"small",children:A.jsx(ee,{id:"PermisjonFaktaPanel.Overskrift"})}),A.jsx(ne,{size:"small",children:A.jsx(ee,{id:"PermisjonFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:zs(o.skjæringstidspunkt)}})})]}),y&&A.jsx(Eu,{children:A.jsx(ee,{id:"PermisjonFaktaPanel.PermisjonUtenSluttdato"})}),A.jsx(tc,{formMethods:c,onSubmit:k=>s({kode:hn.VURDER_ARBEIDSFORHOLD_PERMISJON,arbeidsforhold:k.arbeidsforhold.map((v,w)=>({internArbeidsforholdId:d[w].internArbeidsforholdId,arbeidsgiverIdent:d[w].arbeidsgiverIdent,permisjonStatus:v.permisjonStatus})),begrunnelse:k.begrunnelse}),children:A.jsxs(Le,{gap:"6",children:[A.jsx(ni,{saksnummer:n.saksnummer,sorterteArbeidsforhold:d,arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:r,isReadOnly:a,harÅpentAksjonspunkt:y,skjæringstidspunkt:o.skjæringstidspunkt,alleKodeverk:i}),A.jsx(nc,{label:A.jsx(me,{size:"small",children:A.jsx(ee,{id:"PermisjonFaktaPanel.Begrunn"})}),name:"begrunnelse",validate:[Ya,kf,bf,zc],maxLength:1500,readOnly:a}),!a&&A.jsx("div",{children:A.jsx(pr,{size:"small",variant:"primary",disabled:!c.formState.isDirty||c.formState.isSubmitting,loading:c.formState.isSubmitting,children:A.jsx(ee,{id:"PermisjonFaktaPanel.Bekreft"})})})]})})]})};ti.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Ef={"PermisjonFaktaPanel.Overskrift":"Fakta om permisjon","PermisjonFaktaPanel.Arbeidsforhold":"Arbeidsforhold","PermisjonFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","PermisjonFaktaPanel.Bekreft":"Bekreft og fortsett","PermisjonFaktaPanel.PermisjonUtenSluttdato":"Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.","PermisjonFaktaPanel.Begrunn":"Begrunn valget","ArbeidsforholdFieldArray.Periode":"Periode","ArbeidsforholdFieldArray.Kilde":"Kilde","ArbeidsforholdFieldArray.InntektsmeldingMottatt":"Inntektsmelding","ArbeidsforholdFieldArray.Saksbehandler":"Saksbehandler","ArbeidsforholdFieldArray.AaRegisteret":"A-inntekt","ArbeidsforholdFieldArray.Inntektsmelding":"Inntektsmelding","ArbeidsforholdFieldArray.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdFieldArray.Ok":"Arbeidsforhold er OK","ArbeidsforholdFieldArray.HjelpetekstDel1":"Søker er registrert med permisjon eller permittering uten sluttdato fra arbeidsforholdet sitt i Aa-reg. Vurder om dette arbeidsforholdet skal være med i beregningen. Dersom det fjernes vil det bli borte fra beregningen og eventuell mottatt inntektsmelding vil ikke brukes. Tas det med, vil det brukes i beregningen og bli med videre i behandlingen.","ArbeidsforholdFieldArray.HjelpetekstDel2":"Dersom arbeidsforholdet tas med og det trengs inntektsmelding, må dette innhentes.","ArbeidsforholdFieldArray.HjelpetekstDel3":"Permisjoner eller permitteringer med en sluttdato tas automatisk med. Du trenger ikke etterspørre inntektsmeldinger.","ArbeidsforholdFieldArray.HjelpetekstDel4":"Mottas det inntektsmelding med refusjonskrav vil denne brukes i behandlingen.","ArbeidsforholdFieldArray.Id":"ID","ArbeidsforholdFieldArray.Stillingsprosent":"Stillingsprosent","ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed":"Skal arbeidsforholdet tas med?","ArbeidsforholdFieldArray.TaMedArbeidsforhold":"Fjern permisjonen og ta med arbeidsforholdet","ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding":"Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes","ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold":"Ikke ta med arbeidsforholdet","ArbeidsforholdFieldArray.IkkeMottatt":"Ikke mottatt","ArbeidsforholdFieldArray.AltHjelpetekst":"Hjelpetekst","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsposterPanel.Inntekter":"Inntekter (fra A-inntekt)","InntektsposterPanel.1":"Jan","InntektsposterPanel.2":"Feb","InntektsposterPanel.3":"Mars","InntektsposterPanel.4":"Apr","InntektsposterPanel.5":"Mai","InntektsposterPanel.6":"Jun","InntektsposterPanel.7":"Jul","InntektsposterPanel.8":"Aug","InntektsposterPanel.9":"Sep","InntektsposterPanel.10":"Okt","InntektsposterPanel.11":"Nov","InntektsposterPanel.12":"Des","InntektsposterPanel.TidligereManeder":"Tidligere måneder ","InntektsposterPanel.FaerreManeder":"Siste måneder ","InntektsposterPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-inntekt"},Of=on(Ef),or=e=>A.jsx(mi,{value:Of,children:A.jsx(ti,{...e})});or.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const lr={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},_f={title:"fakta/fakta-permisjon",component:or,decorators:[gi,pi],render:e=>A.jsx(or,{...e})},Yn={args:{aksjonspunkterForPanel:[{definisjon:hn.VURDER_ARBEIDSFORHOLD_PERMISJON,status:Fn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"91090909+",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5",eksternArbeidsforholdId:"ARB001-002",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Xe.PERMITTERING},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Wn={args:{aksjonspunkterForPanel:[{definisjon:hn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Fn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-02",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Je.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2021-11-07",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...lr,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Jn={args:{aksjonspunkterForPanel:[{definisjon:hn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Fn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001-asdfasdfasdf-asdfadsfertbrtynet65y454hrthfdsgfbdsfgb",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-02",type:Xe.VELFERDSPERMISJON,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",permisjonOgMangel:{permisjonFom:"2021-11-07",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...lr,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001-asdfasdfasdf-asdfadsfertbrtynet65y454hrthfdsgfbdsfgb",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...lr,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Xn={args:{aksjonspunkterForPanel:[{definisjon:hn.VURDER_ARBEIDSFORHOLD_PERMISJON,status:Fn.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Xe.PERMITTERING,årsak:Je.PERMISJON_UTEN_SLUTTDATO},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}};var Ss,Ns,Ms;Yn.parameters={...Yn.parameters,docs:{...(Ss=Yn.parameters)==null?void 0:Ss.docs,source:{originalSource:`{
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
}`,...(Ms=(Ns=Yn.parameters)==null?void 0:Ns.docs)==null?void 0:Ms.source}}};var Ds,Fs,qs;Wn.parameters={...Wn.parameters,docs:{...(Ds=Wn.parameters)==null?void 0:Ds.docs,source:{originalSource:`{
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
}`,...(qs=(Fs=Wn.parameters)==null?void 0:Fs.docs)==null?void 0:qs.source}}};var Ls,Vs,Cs;Jn.parameters={...Jn.parameters,docs:{...(Ls=Jn.parameters)==null?void 0:Ls.docs,source:{originalSource:`{
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
}`,...(Cs=(Vs=Jn.parameters)==null?void 0:Vs.docs)==null?void 0:Cs.source}}};var Bs,Us,Ks;Xn.parameters={...Xn.parameters,docs:{...(Bs=Xn.parameters)==null?void 0:Bs.docs,source:{originalSource:`{
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
}`,...(Ks=(Us=Xn.parameters)==null?void 0:Us.docs)==null?void 0:Ks.source}}};const jf=["EttArbeidsforholdUtenSluttdatoForPermisjon","FlereArbeidsforhold","FlereArbeidsforholdFraSammeArbeidsgiver","VisFødselsdatoNårPrivatperson"];export{Yn as EttArbeidsforholdUtenSluttdatoForPermisjon,Wn as FlereArbeidsforhold,Jn as FlereArbeidsforholdFraSammeArbeidsgiver,Xn as VisFødselsdatoNårPrivatperson,jf as __namedExportsOrder,_f as default};
