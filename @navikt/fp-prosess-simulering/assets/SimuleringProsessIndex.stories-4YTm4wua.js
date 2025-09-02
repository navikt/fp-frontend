import{g as Ta,r as c,u as Wt,_ as yr,s as br,c as Dn,a as X,R,b as wl,d as ct,T as Ll,S as gt,e as ka,f as Sa,A as Na,h as gn,i as ln,j as P,t as Jn,k as Oa,o as Aa,M as jt,Q as Il,Y as Fl,P as Dl,w as Kl,l as Vl,m as xl,n as jl,p as Ml,q as Bl,v as Jt}from"./iframe-CNWmwIZU.js";import{r as Gl}from"./index-BXo7TI_N.js";import"./preload-helper-D9Z9MdNV.js";var Pa=Gl();const Mt=Ta(Pa);function ql(e,r){var t=e.values,n=yr(e,["values"]),a=r.values,l=yr(r,["values"]);return br(a,t)&&br(n,l)}function wa(e){var r=Wt(),t=r.formatMessage,n=r.textComponent,a=n===void 0?c.Fragment:n,l=e.id,i=e.description,s=e.defaultMessage,u=e.values,o=e.children,d=e.tagName,m=d===void 0?a:d,f=e.ignoreTag,g={id:l,description:i,defaultMessage:s},p=t(g,u,{ignoreTag:f});return typeof o=="function"?o(Array.isArray(p)?p:[p]):m?c.createElement(m,null,p):c.createElement(c.Fragment,null,p)}wa.displayName="FormattedMessage";var ae=c.memo(wa,ql);ae.displayName="MemoizedFormattedMessage";var se=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(se||{});const on=(e,r)=>r.some(t=>t.definisjon===e);var In=(e=>(e.ARBG="ARBG_ORG",e.ARBGP="ARBG_PRIV",e.BRUKER="BRUKER",e))(In||{}),Ue=(e=>(e.TILBAKEKR_OPPRETT="TILBAKEKR_OPPRETT",e.TILBAKEKR_IGNORER="TILBAKEKR_IGNORER",e.TILBAKEKR_INNTREKK="TILBAKEKR_INNTREKK",e.TILBAKEKR_OPPDATER="TILBAKEKR_OPPDATER",e))(Ue||{});const vn=e=>Dn({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Ul=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Xt=c.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:l,truncate:i,weight:s="regular",align:u,visuallyHidden:o,textColor:d}=e,m=Ul(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=X();return R.createElement(a,Object.assign({},m,{ref:r,className:f(t,"navds-body-long",`navds-body-long--${n}`,vn({spacing:l,truncate:i,weight:s,align:u,visuallyHidden:o,textColor:d}))}))});var Cl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const _e=c.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:l,truncate:i,weight:s="regular",align:u,visuallyHidden:o,textColor:d}=e,m=Cl(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=X();return R.createElement(a,Object.assign({},m,{ref:r,className:f(t,"navds-body-short",`navds-body-short--${n}`,vn({spacing:l,truncate:i,weight:s,align:u,visuallyHidden:o,textColor:d}))}))});var Hl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const $l=c.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:a,uppercase:l,as:i="p",truncate:s,weight:u="regular",align:o,visuallyHidden:d,textColor:m}=e,f=Hl(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:g}=X();return R.createElement(i,Object.assign({},f,{ref:r,className:g(t,"navds-detail",vn({spacing:a,truncate:s,weight:u,align:o,visuallyHidden:d,textColor:m,uppercase:l}),{"navds-detail--small":n==="small"})}))});var Yl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const La=c.forwardRef((e,r)=>{var{children:t,className:n,size:a,spacing:l,as:i="p",showIcon:s=!1}=e,u=Yl(e,["children","className","size","spacing","as","showIcon"]);const{cn:o}=X();return R.createElement(i,Object.assign({},u,{ref:r,className:o("navds-error-message","navds-label",n,vn({spacing:l}),{"navds-label--small":a==="small","navds-error-message--show-icon":s})}),s&&R.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},R.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var zl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ia=c.forwardRef((e,r)=>{var{level:t="1",size:n,className:a,as:l,spacing:i,align:s,visuallyHidden:u,textColor:o}=e,d=zl(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:m}=X(),f=l??`h${t}`;return R.createElement(f,Object.assign({},d,{ref:r,className:m(a,"navds-heading",`navds-heading--${n}`,vn({spacing:i,align:s,visuallyHidden:u,textColor:o}))}))});var Wl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};c.forwardRef((e,r)=>{var{className:t,spacing:n,as:a="p"}=e,l=Wl(e,["className","spacing","as"]);const{cn:i}=X();return R.createElement(a,Object.assign({},l,{ref:r,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Jl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fn=c.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="label",spacing:l,visuallyHidden:i,textColor:s}=e,u=Jl(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:o}=X();return R.createElement(a,Object.assign({},u,{ref:r,className:o(t,"navds-label",vn({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":n==="small"})}))});function Fa(e,r=166,t=!1){let n;function a(...l){const i=()=>{n=void 0,e.apply(this,l)};!n&&t&&i(),clearTimeout(n),n=setTimeout(i,r)}return a.clear=()=>{clearTimeout(n)},a}function ze(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}const Rr=globalThis?.document?c.useLayoutEffect:()=>{};let hr=0;function Xl(e){const[r,t]=c.useState(e),n=e||r;return c.useEffect(()=>{r==null&&(hr+=1,t(`aksel-id-${hr}`))},[r]),n}const Tr=R.useId;function _n(e){var r;if(Tr!==void 0){const t=Tr();return e??t.replace(/(:)/g,"")}return(r=Xl(e))!==null&&r!==void 0?r:""}function kr(e,r=[]){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useCallback((...n)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...n)},r)}function Zt({value:e,defaultValue:r,onChange:t}){const n=kr(t),[a,l]=c.useState(r),i=e!==void 0,s=i?e:a,u=kr(o=>{const m=typeof o=="function"?o(s):o;i||l(m),n(m)},[i,n,s]);return[s,u]}let Sr=0;function Zl(e){const[r,t]=c.useState(e),n=e||r;return c.useEffect(()=>{r==null&&(Sr+=1,t(`aksel-icon-${Sr}`))},[r]),n}const Nr=R.useId;function Ne(e){var r;return Nr!==void 0?Nr().replace(/(:)/g,""):(r=Zl(e))!==null&&r!==void 0?r:""}var Ql=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ei=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ql(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var ni=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ti=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ni(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var ri=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Qt=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ri(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var ai=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const li=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ai(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var ii=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const si=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ii(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var ui=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const oi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ui(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var di=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Da=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=di(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var mi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ci=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=mi(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var gi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const vi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=gi(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var fi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const _i=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=fi(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var Ei=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const pi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ei(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var yi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const bi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=yi(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Ri=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const hi=c.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ri(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?c.createElement("title",{id:l},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function vt(e,r,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e?.(a),t===!1||!a.defaultPrevented)return r?.(a)}}const[Om,Ti]=wl({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function ht(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function hn(e){return(r,t)=>{const n=t?.context?String(t.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=t?.width?String(t.width):i;a=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=t?.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(r):r;return a[l]}}function Tn(e){return(r,t={})=>{const n=t.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=r.match(a);if(!l)return null;const i=l[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?Si(s,m=>m.test(i)):ki(s,m=>m.test(i));let o;o=e.valueCallback?e.valueCallback(u):u,o=t.valueCallback?t.valueCallback(o):o;const d=r.slice(i.length);return{value:o,rest:d}}}function ki(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function Si(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function Ni(e){return(r,t={})=>{const n=r.match(e.matchPattern);if(!n)return null;const a=n[0],l=r.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=t.valueCallback?t.valueCallback(i):i;const s=r.slice(a.length);return{value:i,rest:s}}}const Oi={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Ai=(e,r,t)=>{let n;const a=Oi[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},Pi={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},wi={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Li={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Ii={date:ht({formats:Pi,defaultWidth:"full"}),time:ht({formats:wi,defaultWidth:"full"}),dateTime:ht({formats:Li,defaultWidth:"full"})},Fi={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Di=(e,r,t,n)=>Fi[e],Ki={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Vi={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},xi={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ji={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Mi={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Bi=(e,r)=>Number(e)+".",Gi={ordinalNumber:Bi,era:hn({values:Ki,defaultWidth:"wide"}),quarter:hn({values:Vi,defaultWidth:"wide",argumentCallback:e=>e-1}),month:hn({values:xi,defaultWidth:"wide"}),day:hn({values:ji,defaultWidth:"wide"}),dayPeriod:hn({values:Mi,defaultWidth:"wide"})},qi=/^(\d+)\.?/i,Ui=/\d+/i,Ci={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Hi={any:[/^f/i,/^e/i]},$i={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Yi={any:[/1/i,/2/i,/3/i,/4/i]},zi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Wi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ji={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Xi={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Zi={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Qi={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},es={ordinalNumber:Ni({matchPattern:qi,parsePattern:Ui,valueCallback:e=>parseInt(e,10)}),era:Tn({matchPatterns:Ci,defaultMatchWidth:"wide",parsePatterns:Hi,defaultParseWidth:"any"}),quarter:Tn({matchPatterns:$i,defaultMatchWidth:"wide",parsePatterns:Yi,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Tn({matchPatterns:zi,defaultMatchWidth:"wide",parsePatterns:Wi,defaultParseWidth:"any"}),day:Tn({matchPatterns:Ji,defaultMatchWidth:"wide",parsePatterns:Xi,defaultParseWidth:"any"}),dayPeriod:Tn({matchPatterns:Zi,defaultMatchWidth:"any",parsePatterns:Qi,defaultParseWidth:"any"})},ns={code:"nb",formatDistance:Ai,formatLong:Ii,formatRelative:Di,localize:Gi,match:es,options:{weekStartsOn:1,firstWeekContainsDate:4}},ts={global:{dateLocale:ns,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},rs=c.createContext({locale:ts}),Ka=()=>c.useContext(rs);var as=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ls=c.forwardRef((e,r)=>{var t,n,a,{rootElement:l,asChild:i}=e,s=as(e,["rootElement","asChild"]);const u=ct(!1),o=(t=Ka())===null||t===void 0?void 0:t.rootElement,d=(n=l??o)!==null&&n!==void 0?n:(a=globalThis?.document)===null||a===void 0?void 0:a.body,m=i?gt:"div";return u?d?Mt.createPortal(R.createElement(Ll,{theme:u.theme,asChild:!0,hasBackground:!1,"data-color":u.color},R.createElement(m,Object.assign({ref:r,"data-aksel-portal":""},s))),d):null:d?Mt.createPortal(R.createElement(m,Object.assign({ref:r,"data-aksel-portal":""},s)),d):null}),dn=Math.min,Ze=Math.max,Qn=Math.round,Un=Math.floor,Ke=e=>({x:e,y:e}),is={left:"right",right:"left",bottom:"top",top:"bottom"},ss={start:"end",end:"start"};function Bt(e,r,t){return Ze(e,dn(r,t))}function Kn(e,r){return typeof e=="function"?e(r):e}function Qe(e){return e.split("-")[0]}function Vn(e){return e.split("-")[1]}function Va(e){return e==="x"?"y":"x"}function er(e){return e==="y"?"height":"width"}function mn(e){return["top","bottom"].includes(Qe(e))?"y":"x"}function nr(e){return Va(mn(e))}function us(e,r,t){t===void 0&&(t=!1);const n=Vn(e),a=nr(e),l=er(a);let i=a==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return r.reference[l]>r.floating[l]&&(i=et(i)),[i,et(i)]}function os(e){const r=et(e);return[Gt(e),r,Gt(r)]}function Gt(e){return e.replace(/start|end/g,r=>ss[r])}function ds(e,r,t){const n=["left","right"],a=["right","left"],l=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return t?r?a:n:r?n:a;case"left":case"right":return r?l:i;default:return[]}}function ms(e,r,t,n){const a=Vn(e);let l=ds(Qe(e),t==="start",n);return a&&(l=l.map(i=>i+"-"+a),r&&(l=l.concat(l.map(Gt)))),l}function et(e){return e.replace(/left|right|bottom|top/g,r=>is[r])}function cs(e){return{top:0,right:0,bottom:0,left:0,...e}}function xa(e){return typeof e!="number"?cs(e):{top:e,right:e,bottom:e,left:e}}function nt(e){const{x:r,y:t,width:n,height:a}=e;return{width:n,height:a,top:t,left:r,right:r+n,bottom:t+a,x:r,y:t}}function Or(e,r,t){let{reference:n,floating:a}=e;const l=mn(r),i=nr(r),s=er(i),u=Qe(r),o=l==="y",d=n.x+n.width/2-a.width/2,m=n.y+n.height/2-a.height/2,f=n[s]/2-a[s]/2;let g;switch(u){case"top":g={x:d,y:n.y-a.height};break;case"bottom":g={x:d,y:n.y+n.height};break;case"right":g={x:n.x+n.width,y:m};break;case"left":g={x:n.x-a.width,y:m};break;default:g={x:n.x,y:n.y}}switch(Vn(r)){case"start":g[i]-=f*(t&&o?-1:1);break;case"end":g[i]+=f*(t&&o?-1:1);break}return g}const gs=async(e,r,t)=>{const{placement:n="bottom",strategy:a="absolute",middleware:l=[],platform:i}=t,s=l.filter(Boolean),u=await(i.isRTL==null?void 0:i.isRTL(r));let o=await i.getElementRects({reference:e,floating:r,strategy:a}),{x:d,y:m}=Or(o,n,u),f=n,g={},p=0;for(let _=0;_<s.length;_++){const{name:E,fn:h}=s[_],{x:y,y:S,data:O,reset:A}=await h({x:d,y:m,initialPlacement:n,placement:f,strategy:a,middlewareData:g,rects:o,platform:i,elements:{reference:e,floating:r}});d=y??d,m=S??m,g={...g,[E]:{...g[E],...O}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(f=A.placement),A.rects&&(o=A.rects===!0?await i.getElementRects({reference:e,floating:r,strategy:a}):A.rects),{x:d,y:m}=Or(o,f,u)),_=-1)}return{x:d,y:m,placement:f,strategy:a,middlewareData:g}};async function ja(e,r){var t;r===void 0&&(r={});const{x:n,y:a,platform:l,rects:i,elements:s,strategy:u}=e,{boundary:o="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:f=!1,padding:g=0}=Kn(r,e),p=xa(g),E=s[f?m==="floating"?"reference":"floating":m],h=nt(await l.getClippingRect({element:(t=await(l.isElement==null?void 0:l.isElement(E)))==null||t?E:E.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(s.floating)),boundary:o,rootBoundary:d,strategy:u})),y=m==="floating"?{x:n,y:a,width:i.floating.width,height:i.floating.height}:i.reference,S=await(l.getOffsetParent==null?void 0:l.getOffsetParent(s.floating)),O=await(l.isElement==null?void 0:l.isElement(S))?await(l.getScale==null?void 0:l.getScale(S))||{x:1,y:1}:{x:1,y:1},A=nt(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:y,offsetParent:S,strategy:u}):y);return{top:(h.top-A.top+p.top)/O.y,bottom:(A.bottom-h.bottom+p.bottom)/O.y,left:(h.left-A.left+p.left)/O.x,right:(A.right-h.right+p.right)/O.x}}const vs=e=>({name:"arrow",options:e,async fn(r){const{x:t,y:n,placement:a,rects:l,platform:i,elements:s,middlewareData:u}=r,{element:o,padding:d=0}=Kn(e,r)||{};if(o==null)return{};const m=xa(d),f={x:t,y:n},g=nr(a),p=er(g),_=await i.getDimensions(o),E=g==="y",h=E?"top":"left",y=E?"bottom":"right",S=E?"clientHeight":"clientWidth",O=l.reference[p]+l.reference[g]-f[g]-l.floating[p],A=f[g]-l.reference[g],B=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o));let j=B?B[S]:0;(!j||!await(i.isElement==null?void 0:i.isElement(B)))&&(j=s.floating[S]||l.floating[p]);const Y=O/2-A/2,q=j/2-_[p]/2-1,U=dn(m[h],q),C=dn(m[y],q),w=U,k=j-_[p]-C,T=j/2-_[p]/2+Y,L=Bt(w,T,k),V=!u.arrow&&Vn(a)!=null&&T!==L&&l.reference[p]/2-(T<w?U:C)-_[p]/2<0,K=V?T<w?T-w:T-k:0;return{[g]:f[g]+K,data:{[g]:L,centerOffset:T-L-K,...V&&{alignmentOffset:K}},reset:V}}}),fs=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var t,n;const{placement:a,middlewareData:l,rects:i,initialPlacement:s,platform:u,elements:o}=r,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:_=!0,...E}=Kn(e,r);if((t=l.arrow)!=null&&t.alignmentOffset)return{};const h=Qe(a),y=mn(s),S=Qe(s)===s,O=await(u.isRTL==null?void 0:u.isRTL(o.floating)),A=f||(S||!_?[et(s)]:os(s)),B=p!=="none";!f&&B&&A.push(...ms(s,_,p,O));const j=[s,...A],Y=await ja(r,E),q=[];let U=((n=l.flip)==null?void 0:n.overflows)||[];if(d&&q.push(Y[h]),m){const T=us(a,i,O);q.push(Y[T[0]],Y[T[1]])}if(U=[...U,{placement:a,overflows:q}],!q.every(T=>T<=0)){var C,w;const T=(((C=l.flip)==null?void 0:C.index)||0)+1,L=j[T];if(L)return{data:{index:T,overflows:U},reset:{placement:L}};let V=(w=U.filter(K=>K.overflows[0]<=0).sort((K,F)=>K.overflows[1]-F.overflows[1])[0])==null?void 0:w.placement;if(!V)switch(g){case"bestFit":{var k;const K=(k=U.filter(F=>{if(B){const I=mn(F.placement);return I===y||I==="y"}return!0}).map(F=>[F.placement,F.overflows.filter(I=>I>0).reduce((I,H)=>I+H,0)]).sort((F,I)=>F[1]-I[1])[0])==null?void 0:k[0];K&&(V=K);break}case"initialPlacement":V=s;break}if(a!==V)return{reset:{placement:V}}}return{}}}};async function _s(e,r){const{placement:t,platform:n,elements:a}=e,l=await(n.isRTL==null?void 0:n.isRTL(a.floating)),i=Qe(t),s=Vn(t),u=mn(t)==="y",o=["left","top"].includes(i)?-1:1,d=l&&u?-1:1,m=Kn(r,e);let{mainAxis:f,crossAxis:g,alignmentAxis:p}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return s&&typeof p=="number"&&(g=s==="end"?p*-1:p),u?{x:g*d,y:f*o}:{x:f*o,y:g*d}}const Es=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var t,n;const{x:a,y:l,placement:i,middlewareData:s}=r,u=await _s(r,e);return i===((t=s.offset)==null?void 0:t.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:a+u.x,y:l+u.y,data:{...u,placement:i}}}}},ps=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:t,y:n,placement:a}=r,{mainAxis:l=!0,crossAxis:i=!1,limiter:s={fn:E=>{let{x:h,y}=E;return{x:h,y}}},...u}=Kn(e,r),o={x:t,y:n},d=await ja(r,u),m=mn(Qe(a)),f=Va(m);let g=o[f],p=o[m];if(l){const E=f==="y"?"top":"left",h=f==="y"?"bottom":"right",y=g+d[E],S=g-d[h];g=Bt(y,g,S)}if(i){const E=m==="y"?"top":"left",h=m==="y"?"bottom":"right",y=p+d[E],S=p-d[h];p=Bt(y,p,S)}const _=s.fn({...r,[f]:g,[m]:p});return{..._,data:{x:_.x-t,y:_.y-n,enabled:{[f]:l,[m]:i}}}}}};function ft(){return typeof window<"u"}function En(e){return Ma(e)?(e.nodeName||"").toLowerCase():"#document"}function he(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function xe(e){var r;return(r=(Ma(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function Ma(e){return ft()?e instanceof Node||e instanceof he(e).Node:!1}function te(e){return ft()?e instanceof Element||e instanceof he(e).Element:!1}function Se(e){return ft()?e instanceof HTMLElement||e instanceof he(e).HTMLElement:!1}function tt(e){return!ft()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof he(e).ShadowRoot}function xn(e){const{overflow:r,overflowX:t,overflowY:n,display:a}=we(e);return/auto|scroll|overlay|hidden|clip/.test(r+n+t)&&!["inline","contents"].includes(a)}function ys(e){return["table","td","th"].includes(En(e))}function _t(e){return[":popover-open",":modal"].some(r=>{try{return e.matches(r)}catch{return!1}})}function tr(e){const r=Et(),t=te(e)?we(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(t.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(t.contain||"").includes(n))}function bs(e){let r=He(e);for(;Se(r)&&!Ce(r);){if(tr(r))return r;if(_t(r))return null;r=He(r)}return null}function Et(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ce(e){return["html","body","#document"].includes(En(e))}function we(e){return he(e).getComputedStyle(e)}function pt(e){return te(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function He(e){if(En(e)==="html")return e;const r=e.assignedSlot||e.parentNode||tt(e)&&e.host||xe(e);return tt(r)?r.host:r}function Ba(e){const r=He(e);return Ce(r)?e.ownerDocument?e.ownerDocument.body:e.body:Se(r)&&xn(r)?r:Ba(r)}function Ye(e,r,t){var n;r===void 0&&(r=[]),t===void 0&&(t=!0);const a=Ba(e),l=a===((n=e.ownerDocument)==null?void 0:n.body),i=he(a);if(l){const s=qt(i);return r.concat(i,i.visualViewport||[],xn(a)?a:[],s&&t?Ye(s):[])}return r.concat(a,Ye(a,[],t))}function qt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ga(e){const r=we(e);let t=parseFloat(r.width)||0,n=parseFloat(r.height)||0;const a=Se(e),l=a?e.offsetWidth:t,i=a?e.offsetHeight:n,s=Qn(t)!==l||Qn(n)!==i;return s&&(t=l,n=i),{width:t,height:n,$:s}}function rr(e){return te(e)?e:e.contextElement}function sn(e){const r=rr(e);if(!Se(r))return Ke(1);const t=r.getBoundingClientRect(),{width:n,height:a,$:l}=Ga(r);let i=(l?Qn(t.width):t.width)/n,s=(l?Qn(t.height):t.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const Rs=Ke(0);function qa(e){const r=he(e);return!Et()||!r.visualViewport?Rs:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function hs(e,r,t){return r===void 0&&(r=!1),!t||r&&t!==he(e)?!1:r}function en(e,r,t,n){r===void 0&&(r=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),l=rr(e);let i=Ke(1);r&&(n?te(n)&&(i=sn(n)):i=sn(e));const s=hs(l,t,n)?qa(l):Ke(0);let u=(a.left+s.x)/i.x,o=(a.top+s.y)/i.y,d=a.width/i.x,m=a.height/i.y;if(l){const f=he(l),g=n&&te(n)?he(n):n;let p=f,_=qt(p);for(;_&&n&&g!==p;){const E=sn(_),h=_.getBoundingClientRect(),y=we(_),S=h.left+(_.clientLeft+parseFloat(y.paddingLeft))*E.x,O=h.top+(_.clientTop+parseFloat(y.paddingTop))*E.y;u*=E.x,o*=E.y,d*=E.x,m*=E.y,u+=S,o+=O,p=he(_),_=qt(p)}}return nt({width:d,height:m,x:u,y:o})}function ar(e,r){const t=pt(e).scrollLeft;return r?r.left+t:en(xe(e)).left+t}function Ua(e,r,t){t===void 0&&(t=!1);const n=e.getBoundingClientRect(),a=n.left+r.scrollLeft-(t?0:ar(e,n)),l=n.top+r.scrollTop;return{x:a,y:l}}function Ts(e){let{elements:r,rect:t,offsetParent:n,strategy:a}=e;const l=a==="fixed",i=xe(n),s=r?_t(r.floating):!1;if(n===i||s&&l)return t;let u={scrollLeft:0,scrollTop:0},o=Ke(1);const d=Ke(0),m=Se(n);if((m||!m&&!l)&&((En(n)!=="body"||xn(i))&&(u=pt(n)),Se(n))){const g=en(n);o=sn(n),d.x=g.x+n.clientLeft,d.y=g.y+n.clientTop}const f=i&&!m&&!l?Ua(i,u,!0):Ke(0);return{width:t.width*o.x,height:t.height*o.y,x:t.x*o.x-u.scrollLeft*o.x+d.x+f.x,y:t.y*o.y-u.scrollTop*o.y+d.y+f.y}}function ks(e){return Array.from(e.getClientRects())}function Ss(e){const r=xe(e),t=pt(e),n=e.ownerDocument.body,a=Ze(r.scrollWidth,r.clientWidth,n.scrollWidth,n.clientWidth),l=Ze(r.scrollHeight,r.clientHeight,n.scrollHeight,n.clientHeight);let i=-t.scrollLeft+ar(e);const s=-t.scrollTop;return we(n).direction==="rtl"&&(i+=Ze(r.clientWidth,n.clientWidth)-a),{width:a,height:l,x:i,y:s}}function Ns(e,r){const t=he(e),n=xe(e),a=t.visualViewport;let l=n.clientWidth,i=n.clientHeight,s=0,u=0;if(a){l=a.width,i=a.height;const o=Et();(!o||o&&r==="fixed")&&(s=a.offsetLeft,u=a.offsetTop)}return{width:l,height:i,x:s,y:u}}function Os(e,r){const t=en(e,!0,r==="fixed"),n=t.top+e.clientTop,a=t.left+e.clientLeft,l=Se(e)?sn(e):Ke(1),i=e.clientWidth*l.x,s=e.clientHeight*l.y,u=a*l.x,o=n*l.y;return{width:i,height:s,x:u,y:o}}function Ar(e,r,t){let n;if(r==="viewport")n=Ns(e,t);else if(r==="document")n=Ss(xe(e));else if(te(r))n=Os(r,t);else{const a=qa(e);n={x:r.x-a.x,y:r.y-a.y,width:r.width,height:r.height}}return nt(n)}function Ca(e,r){const t=He(e);return t===r||!te(t)||Ce(t)?!1:we(t).position==="fixed"||Ca(t,r)}function As(e,r){const t=r.get(e);if(t)return t;let n=Ye(e,[],!1).filter(s=>te(s)&&En(s)!=="body"),a=null;const l=we(e).position==="fixed";let i=l?He(e):e;for(;te(i)&&!Ce(i);){const s=we(i),u=tr(i);!u&&s.position==="fixed"&&(a=null),(l?!u&&!a:!u&&s.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||xn(i)&&!u&&Ca(e,i))?n=n.filter(d=>d!==i):a=s,i=He(i)}return r.set(e,n),n}function Ps(e){let{element:r,boundary:t,rootBoundary:n,strategy:a}=e;const i=[...t==="clippingAncestors"?_t(r)?[]:As(r,this._c):[].concat(t),n],s=i[0],u=i.reduce((o,d)=>{const m=Ar(r,d,a);return o.top=Ze(m.top,o.top),o.right=dn(m.right,o.right),o.bottom=dn(m.bottom,o.bottom),o.left=Ze(m.left,o.left),o},Ar(r,s,a));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function ws(e){const{width:r,height:t}=Ga(e);return{width:r,height:t}}function Ls(e,r,t){const n=Se(r),a=xe(r),l=t==="fixed",i=en(e,!0,l,r);let s={scrollLeft:0,scrollTop:0};const u=Ke(0);if(n||!n&&!l)if((En(r)!=="body"||xn(a))&&(s=pt(r)),n){const f=en(r,!0,l,r);u.x=f.x+r.clientLeft,u.y=f.y+r.clientTop}else a&&(u.x=ar(a));const o=a&&!n&&!l?Ua(a,s):Ke(0),d=i.left+s.scrollLeft-u.x-o.x,m=i.top+s.scrollTop-u.y-o.y;return{x:d,y:m,width:i.width,height:i.height}}function Tt(e){return we(e).position==="static"}function Pr(e,r){if(!Se(e)||we(e).position==="fixed")return null;if(r)return r(e);let t=e.offsetParent;return xe(e)===t&&(t=t.ownerDocument.body),t}function Ha(e,r){const t=he(e);if(_t(e))return t;if(!Se(e)){let a=He(e);for(;a&&!Ce(a);){if(te(a)&&!Tt(a))return a;a=He(a)}return t}let n=Pr(e,r);for(;n&&ys(n)&&Tt(n);)n=Pr(n,r);return n&&Ce(n)&&Tt(n)&&!tr(n)?t:n||bs(e)||t}const Is=async function(e){const r=this.getOffsetParent||Ha,t=this.getDimensions,n=await t(e.floating);return{reference:Ls(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Fs(e){return we(e).direction==="rtl"}const Ds={convertOffsetParentRelativeRectToViewportRelativeRect:Ts,getDocumentElement:xe,getClippingRect:Ps,getOffsetParent:Ha,getElementRects:Is,getClientRects:ks,getDimensions:ws,getScale:sn,isElement:te,isRTL:Fs};function $a(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function Ks(e,r){let t=null,n;const a=xe(e);function l(){var s;clearTimeout(n),(s=t)==null||s.disconnect(),t=null}function i(s,u){s===void 0&&(s=!1),u===void 0&&(u=1),l();const o=e.getBoundingClientRect(),{left:d,top:m,width:f,height:g}=o;if(s||r(),!f||!g)return;const p=Un(m),_=Un(a.clientWidth-(d+f)),E=Un(a.clientHeight-(m+g)),h=Un(d),S={rootMargin:-p+"px "+-_+"px "+-E+"px "+-h+"px",threshold:Ze(0,dn(1,u))||1};let O=!0;function A(B){const j=B[0].intersectionRatio;if(j!==u){if(!O)return i();j?i(!1,j):n=setTimeout(()=>{i(!1,1e-7)},1e3)}j===1&&!$a(o,e.getBoundingClientRect())&&i(),O=!1}try{t=new IntersectionObserver(A,{...S,root:a.ownerDocument})}catch{t=new IntersectionObserver(A,S)}t.observe(e)}return i(!0),l}function wr(e,r,t,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:u=!1}=n,o=rr(e),d=a||l?[...o?Ye(o):[],...Ye(r)]:[];d.forEach(h=>{a&&h.addEventListener("scroll",t,{passive:!0}),l&&h.addEventListener("resize",t)});const m=o&&s?Ks(o,t):null;let f=-1,g=null;i&&(g=new ResizeObserver(h=>{let[y]=h;y&&y.target===o&&g&&(g.unobserve(r),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var S;(S=g)==null||S.observe(r)})),t()}),o&&!u&&g.observe(o),g.observe(r));let p,_=u?en(e):null;u&&E();function E(){const h=en(e);_&&!$a(_,h)&&t(),_=h,p=requestAnimationFrame(E)}return t(),()=>{var h;d.forEach(y=>{a&&y.removeEventListener("scroll",t),l&&y.removeEventListener("resize",t)}),m?.(),(h=g)==null||h.disconnect(),g=null,u&&cancelAnimationFrame(p)}}const Vs=Es,xs=ps,js=fs,Lr=vs,Ms=(e,r,t)=>{const n=new Map,a={platform:Ds,...t},l={...a.platform,_c:n};return gs(e,r,{...a,platform:l})};var Xn=typeof document<"u"?c.useLayoutEffect:c.useEffect;function rt(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!rt(e[n],r[n]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,a[n]))return!1;for(n=t;n--!==0;){const l=a[n];if(!(l==="_owner"&&e.$$typeof)&&!rt(e[l],r[l]))return!1}return!0}return e!==e&&r!==r}function Ya(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ir(e,r){const t=Ya(e);return Math.round(r*t)/t}function kt(e){const r=c.useRef(e);return Xn(()=>{r.current=e}),r}function Bs(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:a,elements:{reference:l,floating:i}={},transform:s=!0,whileElementsMounted:u,open:o}=e,[d,m]=c.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[f,g]=c.useState(n);rt(f,n)||g(n);const[p,_]=c.useState(null),[E,h]=c.useState(null),y=c.useCallback(F=>{F!==B.current&&(B.current=F,_(F))},[]),S=c.useCallback(F=>{F!==j.current&&(j.current=F,h(F))},[]),O=l||p,A=i||E,B=c.useRef(null),j=c.useRef(null),Y=c.useRef(d),q=u!=null,U=kt(u),C=kt(a),w=kt(o),k=c.useCallback(()=>{if(!B.current||!j.current)return;const F={placement:r,strategy:t,middleware:f};C.current&&(F.platform=C.current),Ms(B.current,j.current,F).then(I=>{const H={...I,isPositioned:w.current!==!1};T.current&&!rt(Y.current,H)&&(Y.current=H,Pa.flushSync(()=>{m(H)}))})},[f,r,t,C,w]);Xn(()=>{o===!1&&Y.current.isPositioned&&(Y.current.isPositioned=!1,m(F=>({...F,isPositioned:!1})))},[o]);const T=c.useRef(!1);Xn(()=>(T.current=!0,()=>{T.current=!1}),[]),Xn(()=>{if(O&&(B.current=O),A&&(j.current=A),O&&A){if(U.current)return U.current(O,A,k);k()}},[O,A,k,U,q]);const L=c.useMemo(()=>({reference:B,floating:j,setReference:y,setFloating:S}),[y,S]),V=c.useMemo(()=>({reference:O,floating:A}),[O,A]),K=c.useMemo(()=>{const F={position:t,left:0,top:0};if(!V.floating)return F;const I=Ir(V.floating,d.x),H=Ir(V.floating,d.y);return s?{...F,transform:"translate("+I+"px, "+H+"px)",...Ya(V.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:I,top:H}},[t,s,V.floating,d.x,d.y]);return c.useMemo(()=>({...d,update:k,refs:L,elements:V,floatingStyles:K}),[d,k,L,V,K])}const Gs=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:a}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?Lr({element:n.current,padding:a}).fn(t):{}:n?Lr({element:n,padding:a}).fn(t):{}}}},qs=(e,r)=>({...Vs(e),options:[e,r]}),Us=(e,r)=>({...xs(e),options:[e,r]}),Cs=(e,r)=>({...js(e),options:[e,r]}),Hs=(e,r)=>({...Gs(e),options:[e,r]}),Fr=/(\w+)/g;function $s(e,r){const t=Array.isArray(e)?e:Ys(e);for(const n of r){if(!n)continue;let a=n;for(let l=0;l<t.length;l++){const i=a[t[l]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Ys(e){const r=[];let t=Fr.exec(e);for(;t;){const[,n,a]=t;r.push(n||a),t=Fr.exec(e)}return r}const zs=/{[^}]*}/g;function jn(e,...r){const t=Ka(),n=t.translations||[],a=[...r,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],t.locale[e]];return(i,s)=>{const u=$s(i,a);return s?u.replace(zs,o=>{const d=o.substring(1,o.length-1);if(s[d]===void 0){const m=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${m}'`)}return s[d]}):u}}var Ws=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Js=c.forwardRef((e,r)=>{var{className:t,size:n="medium",title:a,transparent:l=!1,variant:i="neutral",id:s,"data-color":u}=e,o=Ws(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:d}=X(),m=_n(),f=jn("Loader");return R.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${m}`,ref:r,className:d("navds-loader",t,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":u??Xs(i)},ze(o,["children"]),{"data-variant":i}),R.createElement("title",{id:s??`loader-${m}`},a||f("title")),R.createElement("circle",{className:d("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),R.createElement("circle",{className:d("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Xs(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Zs=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const za=c.forwardRef((e,r)=>{var{as:t="button",variant:n="primary",className:a,children:l,size:i="medium",loading:s=!1,disabled:u,icon:o,iconPosition:d="left",onKeyUp:m,"data-color":f}=e,g=Zs(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:p}=X(),_=u||s?ze(g,["href"]):g,E=h=>{h.key===" "&&!u&&!s&&h.currentTarget.click()};return R.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":f??Qs(n),"data-variant":eu(n)},_,{ref:r,onKeyUp:vt(m,E),className:p(a,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!o&&!l,"navds-button--disabled":u??s}),disabled:u??s?!0:void 0}),o&&d==="left"&&R.createElement("span",{className:p("navds-button__icon")},o),s&&R.createElement(Js,{size:i}),l&&R.createElement(fn,{as:"span",size:i==="medium"?"medium":"small"},l),o&&d==="right"&&R.createElement("span",{className:p("navds-button__icon")},o))});function Qs(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function eu(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var nu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const tu={error:hi,warning:si,info:oi,success:ti},ru=c.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:u=!1,closeButton:o=!1,onClose:d}=e,m=nu(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:f}=X(),g=jn("Alert"),p=tu[a];return R.createElement("div",Object.assign({},m,{"data-color":au(a),"data-variant":a,ref:r,className:f(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":u,"navds-alert--close-button":o})}),R.createElement(p,{title:g(a),className:f("navds-alert__icon")}),R.createElement(Xt,{as:"div",size:l,className:f("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},t),o&&!u&&R.createElement("div",{className:f("navds-alert__button-wrapper")},R.createElement(za,{className:f("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:R.createElement(bi,{title:["error","warning"].includes(a)?g("closeAlert"):g("closeMessage")})})))});function au(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function lu(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function iu(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(r=>{let{brand:t,version:n}=r;return t+"/"+n}).join(" "):navigator.userAgent}function su(){return/apple/i.test(navigator.vendor)}function uu(){return lu().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function ou(){return iu().includes("jsdom/")}const du="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Dr(e){let r=e.activeElement;for(;((t=r)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;r=r.shadowRoot.activeElement}return r}function Fn(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&tt(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function an(e){return"composedPath"in e?e.composedPath()[0]:e.target}function St(e,r){if(r==null)return!1;if("composedPath"in e)return e.composedPath().includes(r);const t=e;return t.target!=null&&r.contains(t.target)}function mu(e){return e.matches("html,body")}function Je(e){return e?.ownerDocument||document}function cu(e){return Se(e)&&e.matches(du)}function gu(e){if(!e||ou())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Nt(e,r,t){t===void 0&&(t=!0);let n=e.filter(l=>{var i;return l.parentId===r&&((i=l.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(l=>{var i;return(i=a)==null?void 0:i.some(s=>{var u;return l.parentId===s.id&&((u=l.context)==null?void 0:u.open)})}):e,n=n.concat(a);return n}function vu(e){return"nativeEvent"in e}function Ut(e,r){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var cn=typeof document<"u"?c.useLayoutEffect:c.useEffect;const fu={...ka};function Cn(e){const r=c.useRef(e);return cn(()=>{r.current=e}),r}const _u=fu.useInsertionEffect,Eu=_u||(e=>e());function Ge(e){const r=c.useRef(()=>{});return Eu(()=>{r.current=e}),c.useCallback(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.current==null?void 0:r.current(...n)},[])}const pu="data-floating-ui-focusable",Kr="active",Vr="selected",yu={...ka};let xr=!1,bu=0;const jr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+bu++;function Ru(){const[e,r]=c.useState(()=>xr?jr():void 0);return cn(()=>{e==null&&r(jr())},[]),c.useEffect(()=>{xr=!0},[]),e}const hu=yu.useId,Tu=hu||Ru;function ku(){const e=new Map;return{emit(r,t){var n;(n=e.get(r))==null||n.forEach(a=>a(t))},on(r,t){e.has(r)||e.set(r,new Set),e.get(r).add(t)},off(r,t){var n;(n=e.get(r))==null||n.delete(t)}}}const Su=c.createContext(null),Nu=c.createContext(null),Wa=()=>{var e;return((e=c.useContext(Su))==null?void 0:e.id)||null},lr=()=>c.useContext(Nu);function ir(e){return"data-floating-ui-"+e}function Ae(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Mr=ir("safe-polygon");function Ot(e,r,t){if(t&&!Ut(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n?.[r]}return e?.[r]}function At(e){return typeof e=="function"?e():e}function Ou(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,dataRef:a,events:l,elements:i}=e,{enabled:s=!0,delay:u=0,handleClose:o=null,mouseOnly:d=!1,restMs:m=0,move:f=!0}=r,g=lr(),p=Wa(),_=Cn(o),E=Cn(u),h=Cn(t),y=Cn(m),S=c.useRef(),O=c.useRef(-1),A=c.useRef(),B=c.useRef(-1),j=c.useRef(!0),Y=c.useRef(!1),q=c.useRef(()=>{}),U=c.useRef(!1),C=c.useCallback(()=>{var K;const F=(K=a.current.openEvent)==null?void 0:K.type;return F?.includes("mouse")&&F!=="mousedown"},[a]);c.useEffect(()=>{if(!s)return;function K(F){let{open:I}=F;I||(Ae(O),Ae(B),j.current=!0,U.current=!1)}return l.on("openchange",K),()=>{l.off("openchange",K)}},[s,l]),c.useEffect(()=>{if(!s||!_.current||!t)return;function K(I){C()&&n(!1,I,"hover")}const F=Je(i.floating).documentElement;return F.addEventListener("mouseleave",K),()=>{F.removeEventListener("mouseleave",K)}},[i.floating,t,n,s,_,C]);const w=c.useCallback(function(K,F,I){F===void 0&&(F=!0),I===void 0&&(I="hover");const H=Ot(E.current,"close",S.current);H&&!A.current?(Ae(O),O.current=window.setTimeout(()=>n(!1,K,I),H)):F&&(Ae(O),n(!1,K,I))},[E,n]),k=Ge(()=>{q.current(),A.current=void 0}),T=Ge(()=>{if(Y.current){const K=Je(i.floating).body;K.style.pointerEvents="",K.removeAttribute(Mr),Y.current=!1}}),L=Ge(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);c.useEffect(()=>{if(!s)return;function K(W){if(Ae(O),j.current=!1,d&&!Ut(S.current)||At(y.current)>0&&!Ot(E.current,"open"))return;const J=Ot(E.current,"open",S.current);J?O.current=window.setTimeout(()=>{h.current||n(!0,W,"hover")},J):t||n(!0,W,"hover")}function F(W){if(L()){T();return}q.current();const J=Je(i.floating);if(Ae(B),U.current=!1,_.current&&a.current.floatingContext){t||Ae(O),A.current=_.current({...a.current.floatingContext,tree:g,x:W.clientX,y:W.clientY,onClose(){T(),k(),L()||w(W,!0,"safe-polygon")}});const ve=A.current;J.addEventListener("mousemove",ve),q.current=()=>{J.removeEventListener("mousemove",ve)};return}(S.current==="touch"?!Fn(i.floating,W.relatedTarget):!0)&&w(W)}function I(W){L()||a.current.floatingContext&&(_.current==null||_.current({...a.current.floatingContext,tree:g,x:W.clientX,y:W.clientY,onClose(){T(),k(),L()||w(W)}})(W))}function H(){Ae(O)}function z(W){L()||w(W,!1)}if(te(i.domReference)){const W=i.domReference,J=i.floating;return t&&W.addEventListener("mouseleave",I),f&&W.addEventListener("mousemove",K,{once:!0}),W.addEventListener("mouseenter",K),W.addEventListener("mouseleave",F),J&&(J.addEventListener("mouseleave",I),J.addEventListener("mouseenter",H),J.addEventListener("mouseleave",z)),()=>{t&&W.removeEventListener("mouseleave",I),f&&W.removeEventListener("mousemove",K),W.removeEventListener("mouseenter",K),W.removeEventListener("mouseleave",F),J&&(J.removeEventListener("mouseleave",I),J.removeEventListener("mouseenter",H),J.removeEventListener("mouseleave",z))}}},[i,s,e,d,f,w,k,T,n,t,h,g,E,_,a,L,y]),cn(()=>{var K;if(s&&t&&(K=_.current)!=null&&K.__options.blockPointerEvents&&C()){Y.current=!0;const I=i.floating;if(te(i.domReference)&&I){var F;const H=Je(i.floating).body;H.setAttribute(Mr,"");const z=i.domReference,W=g==null||(F=g.nodesRef.current.find(J=>J.id===p))==null||(F=F.context)==null?void 0:F.elements.floating;return W&&(W.style.pointerEvents=""),H.style.pointerEvents="none",z.style.pointerEvents="auto",I.style.pointerEvents="auto",()=>{H.style.pointerEvents="",z.style.pointerEvents="",I.style.pointerEvents=""}}}},[s,t,p,i,g,_,C]),cn(()=>{t||(S.current=void 0,U.current=!1,k(),T())},[t,k,T]),c.useEffect(()=>()=>{k(),Ae(O),Ae(B),T()},[s,i.domReference,k,T]);const V=c.useMemo(()=>{function K(F){S.current=F.pointerType}return{onPointerDown:K,onPointerEnter:K,onMouseMove(F){const{nativeEvent:I}=F;function H(){!j.current&&!h.current&&n(!0,I,"hover")}d&&!Ut(S.current)||t||At(y.current)===0||U.current&&F.movementX**2+F.movementY**2<2||(Ae(B),S.current==="touch"?H():(U.current=!0,B.current=window.setTimeout(H,At(y.current))))}}},[d,n,t,h,y]);return c.useMemo(()=>s?{reference:V}:{},[s,V])}function Pt(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&tt(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Au(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Pu={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},wu={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Br=e=>{var r,t;return{escapeKey:typeof e=="boolean"?e:(r=e?.escapeKey)!=null?r:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function Lu(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,elements:a,dataRef:l}=e,{enabled:i=!0,escapeKey:s=!0,outsidePress:u=!0,outsidePressEvent:o="pointerdown",referencePress:d=!1,referencePressEvent:m="pointerdown",ancestorScroll:f=!1,bubbles:g,capture:p}=r,_=lr(),E=Ge(typeof u=="function"?u:()=>!1),h=typeof u=="function"?E:u,y=c.useRef(!1),S=c.useRef(!1),{escapeKey:O,outsidePress:A}=Br(g),{escapeKey:B,outsidePress:j}=Br(p),Y=c.useRef(!1),q=Ge(L=>{var V;if(!t||!i||!s||L.key!=="Escape"||Y.current)return;const K=(V=l.current.floatingContext)==null?void 0:V.nodeId,F=_?Nt(_.nodesRef.current,K):[];if(!O&&(L.stopPropagation(),F.length>0)){let I=!0;if(F.forEach(H=>{var z;if((z=H.context)!=null&&z.open&&!H.context.dataRef.current.__escapeKeyBubbles){I=!1;return}}),!I)return}n(!1,vu(L)?L.nativeEvent:L,"escape-key")}),U=Ge(L=>{var V;const K=()=>{var F;q(L),(F=an(L))==null||F.removeEventListener("keydown",K)};(V=an(L))==null||V.addEventListener("keydown",K)}),C=Ge(L=>{var V;const K=y.current;y.current=!1;const F=S.current;if(S.current=!1,o==="click"&&F||K||typeof h=="function"&&!h(L))return;const I=an(L),H="["+ir("inert")+"]",z=Je(a.floating).querySelectorAll(H);let W=te(I)?I:null;for(;W&&!Ce(W);){const de=He(W);if(Ce(de)||!te(de))break;W=de}if(z.length&&te(I)&&!mu(I)&&!Fn(I,a.floating)&&Array.from(z).every(de=>!Fn(W,de)))return;if(Se(I)&&T){const de=Ce(I),le=we(I),Z=/auto|scroll/,re=de||Z.test(le.overflowX),fe=de||Z.test(le.overflowY),Ee=re&&I.clientWidth>0&&I.scrollWidth>I.clientWidth,pe=fe&&I.clientHeight>0&&I.scrollHeight>I.clientHeight,We=le.direction==="rtl",je=pe&&(We?L.offsetX<=I.offsetWidth-I.clientWidth:L.offsetX>I.clientWidth),Me=Ee&&L.offsetY>I.clientHeight;if(je||Me)return}const J=(V=l.current.floatingContext)==null?void 0:V.nodeId,Le=_&&Nt(_.nodesRef.current,J).some(de=>{var le;return St(L,(le=de.context)==null?void 0:le.elements.floating)});if(St(L,a.floating)||St(L,a.domReference)||Le)return;const ve=_?Nt(_.nodesRef.current,J):[];if(ve.length>0){let de=!0;if(ve.forEach(le=>{var Z;if((Z=le.context)!=null&&Z.open&&!le.context.dataRef.current.__outsidePressBubbles){de=!1;return}}),!de)return}n(!1,L,"outside-press")}),w=Ge(L=>{var V;const K=()=>{var F;C(L),(F=an(L))==null||F.removeEventListener(o,K)};(V=an(L))==null||V.addEventListener(o,K)});c.useEffect(()=>{if(!t||!i)return;l.current.__escapeKeyBubbles=O,l.current.__outsidePressBubbles=A;let L=-1;function V(z){n(!1,z,"ancestor-scroll")}function K(){window.clearTimeout(L),Y.current=!0}function F(){L=window.setTimeout(()=>{Y.current=!1},Et()?5:0)}const I=Je(a.floating);s&&(I.addEventListener("keydown",B?U:q,B),I.addEventListener("compositionstart",K),I.addEventListener("compositionend",F)),h&&I.addEventListener(o,j?w:C,j);let H=[];return f&&(te(a.domReference)&&(H=Ye(a.domReference)),te(a.floating)&&(H=H.concat(Ye(a.floating))),!te(a.reference)&&a.reference&&a.reference.contextElement&&(H=H.concat(Ye(a.reference.contextElement)))),H=H.filter(z=>{var W;return z!==((W=I.defaultView)==null?void 0:W.visualViewport)}),H.forEach(z=>{z.addEventListener("scroll",V,{passive:!0})}),()=>{s&&(I.removeEventListener("keydown",B?U:q,B),I.removeEventListener("compositionstart",K),I.removeEventListener("compositionend",F)),h&&I.removeEventListener(o,j?w:C,j),H.forEach(z=>{z.removeEventListener("scroll",V)}),window.clearTimeout(L)}},[l,a,s,h,o,t,n,f,i,O,A,q,B,U,C,j,w]),c.useEffect(()=>{y.current=!1},[h,o]);const k=c.useMemo(()=>({onKeyDown:q,...d&&{[Pu[m]]:L=>{n(!1,L.nativeEvent,"reference-press")},...m!=="click"&&{onClick(L){n(!1,L.nativeEvent,"reference-press")}}}}),[q,n,d,m]),T=c.useMemo(()=>({onKeyDown:q,onMouseDown(){S.current=!0},onMouseUp(){S.current=!0},[wu[o]]:()=>{y.current=!0}}),[q,o]);return c.useMemo(()=>i?{reference:k,floating:T}:{},[i,k,T])}function Iu(e){const{open:r=!1,onOpenChange:t,elements:n}=e,a=Tu(),l=c.useRef({}),[i]=c.useState(()=>ku()),s=Wa()!=null,[u,o]=c.useState(n.reference),d=Ge((g,p,_)=>{l.current.openEvent=g?p:void 0,i.emit("openchange",{open:g,event:p,reason:_,nested:s}),t?.(g,p,_)}),m=c.useMemo(()=>({setPositionReference:o}),[]),f=c.useMemo(()=>({reference:u||n.reference||null,floating:n.floating||null,domReference:n.reference}),[u,n.reference,n.floating]);return c.useMemo(()=>({dataRef:l,open:r,onOpenChange:d,elements:f,events:i,floatingId:a,refs:m}),[r,d,f,i,a,m])}function Fu(e){e===void 0&&(e={});const{nodeId:r}=e,t=Iu({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||t,a=n.elements,[l,i]=c.useState(null),[s,u]=c.useState(null),d=a?.domReference||l,m=c.useRef(null),f=lr();cn(()=>{d&&(m.current=d)},[d]);const g=Bs({...e,elements:{...a,...s&&{reference:s}}}),p=c.useCallback(S=>{const O=te(S)?{getBoundingClientRect:()=>S.getBoundingClientRect(),getClientRects:()=>S.getClientRects(),contextElement:S}:S;u(O),g.refs.setReference(O)},[g.refs]),_=c.useCallback(S=>{(te(S)||S===null)&&(m.current=S,i(S)),(te(g.refs.reference.current)||g.refs.reference.current===null||S!==null&&!te(S))&&g.refs.setReference(S)},[g.refs]),E=c.useMemo(()=>({...g.refs,setReference:_,setPositionReference:p,domReference:m}),[g.refs,_,p]),h=c.useMemo(()=>({...g.elements,domReference:d}),[g.elements,d]),y=c.useMemo(()=>({...g,...n,refs:E,elements:h,nodeId:r}),[g,E,h,r,n]);return cn(()=>{n.dataRef.current.floatingContext=y;const S=f?.nodesRef.current.find(O=>O.id===r);S&&(S.context=y)}),c.useMemo(()=>({...g,context:y,refs:E,elements:h}),[g,E,h,y])}function wt(){return uu()&&su()}function Du(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,events:a,dataRef:l,elements:i}=e,{enabled:s=!0,visibleOnly:u=!0}=r,o=c.useRef(!1),d=c.useRef(-1),m=c.useRef(!0);c.useEffect(()=>{if(!s)return;const g=he(i.domReference);function p(){!t&&Se(i.domReference)&&i.domReference===Dr(Je(i.domReference))&&(o.current=!0)}function _(){m.current=!0}function E(){m.current=!1}return g.addEventListener("blur",p),wt()&&(g.addEventListener("keydown",_,!0),g.addEventListener("pointerdown",E,!0)),()=>{g.removeEventListener("blur",p),wt()&&(g.removeEventListener("keydown",_,!0),g.removeEventListener("pointerdown",E,!0))}},[i.domReference,t,s]),c.useEffect(()=>{if(!s)return;function g(p){let{reason:_}=p;(_==="reference-press"||_==="escape-key")&&(o.current=!0)}return a.on("openchange",g),()=>{a.off("openchange",g)}},[a,s]),c.useEffect(()=>()=>{Ae(d)},[]);const f=c.useMemo(()=>({onMouseLeave(){o.current=!1},onFocus(g){if(o.current)return;const p=an(g.nativeEvent);if(u&&te(p)){if(wt()&&!g.relatedTarget){if(!m.current&&!cu(p))return}else if(!gu(p))return}n(!0,g.nativeEvent,"focus")},onBlur(g){o.current=!1;const p=g.relatedTarget,_=g.nativeEvent,E=te(p)&&p.hasAttribute(ir("focus-guard"))&&p.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var h;const y=Dr(i.domReference?i.domReference.ownerDocument:document);!p&&y===i.domReference||Fn((h=l.current.floatingContext)==null?void 0:h.refs.floating.current,y)||Fn(i.domReference,y)||E||n(!1,_,"focus")})}}),[l,i.domReference,n,u]);return c.useMemo(()=>s?{reference:f}:{},[s,f])}function Lt(e,r,t){const n=new Map,a=t==="item";let l=e;if(a&&e){const{[Kr]:i,[Vr]:s,...u}=e;l=u}return{...t==="floating"&&{tabIndex:-1,[pu]:""},...l,...r.map(i=>{const s=i?i[t]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((i,s)=>(s&&Object.entries(s).forEach(u=>{let[o,d]=u;if(!(a&&[Kr,Vr].includes(o)))if(o.indexOf("on")===0){if(n.has(o)||n.set(o,[]),typeof d=="function"){var m;(m=n.get(o))==null||m.push(d),i[o]=function(){for(var f,g=arguments.length,p=new Array(g),_=0;_<g;_++)p[_]=arguments[_];return(f=n.get(o))==null?void 0:f.map(E=>E(...p)).find(E=>E!==void 0)}}}else i[o]=d}),i),{})}}function Ku(e){e===void 0&&(e=[]);const r=e.map(s=>s?.reference),t=e.map(s=>s?.floating),n=e.map(s=>s?.item),a=c.useCallback(s=>Lt(s,e,"reference"),r),l=c.useCallback(s=>Lt(s,e,"floating"),t),i=c.useCallback(s=>Lt(s,e,"item"),n);return c.useMemo(()=>({getReferenceProps:a,getFloatingProps:l,getItemProps:i}),[a,l,i])}function Vu(e,r,t){t===void 0&&(t=!0);let n=e.filter(l=>{var i;return l.parentId===r&&((i=l.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(l=>{var i;return(i=a)==null?void 0:i.some(s=>{var u;return l.parentId===s.id&&((u=l.context)==null?void 0:u.open)})}):e,n=n.concat(a);return n}function Gr(e,r){const[t,n]=e;let a=!1;const l=r.length;for(let i=0,s=l-1;i<l;s=i++){const[u,o]=r[i]||[0,0],[d,m]=r[s]||[0,0];o>=n!=m>=n&&t<=(d-u)*(n-o)/(m-o)+u&&(a=!a)}return a}function xu(e,r){return e[0]>=r.x&&e[0]<=r.x+r.width&&e[1]>=r.y&&e[1]<=r.y+r.height}function ju(e){e===void 0&&(e={});const{buffer:r=.5,blockPointerEvents:t=!1,requireIntent:n=!0}=e;let a,l=!1,i=null,s=null,u=performance.now();function o(m,f){const g=performance.now(),p=g-u;if(i===null||s===null||p===0)return i=m,s=f,u=g,null;const _=m-i,E=f-s,y=Math.sqrt(_*_+E*E)/p;return i=m,s=f,u=g,y}const d=m=>{let{x:f,y:g,placement:p,elements:_,onClose:E,nodeId:h,tree:y}=m;return function(O){function A(){clearTimeout(a),E()}if(clearTimeout(a),!_.domReference||!_.floating||p==null||f==null||g==null)return;const{clientX:B,clientY:j}=O,Y=[B,j],q=Au(O),U=O.type==="mouseleave",C=Pt(_.floating,q),w=Pt(_.domReference,q),k=_.domReference.getBoundingClientRect(),T=_.floating.getBoundingClientRect(),L=p.split("-")[0],V=f>T.right-T.width/2,K=g>T.bottom-T.height/2,F=xu(Y,k),I=T.width>k.width,H=T.height>k.height,z=(I?k:T).left,W=(I?k:T).right,J=(H?k:T).top,Le=(H?k:T).bottom;if(C&&(l=!0,!U))return;if(w&&(l=!1),w&&!U){l=!0;return}if(U&&te(O.relatedTarget)&&Pt(_.floating,O.relatedTarget)||y&&Vu(y.nodesRef.current,h).some(le=>{let{context:Z}=le;return Z?.open}))return;if(L==="top"&&g>=k.bottom-1||L==="bottom"&&g<=k.top+1||L==="left"&&f>=k.right-1||L==="right"&&f<=k.left+1)return A();let ve=[];switch(L){case"top":ve=[[z,k.top+1],[z,T.bottom-1],[W,T.bottom-1],[W,k.top+1]];break;case"bottom":ve=[[z,T.top+1],[z,k.bottom-1],[W,k.bottom-1],[W,T.top+1]];break;case"left":ve=[[T.right-1,Le],[T.right-1,J],[k.left+1,J],[k.left+1,Le]];break;case"right":ve=[[k.right-1,Le],[k.right-1,J],[T.left+1,J],[T.left+1,Le]];break}function de(le){let[Z,re]=le;switch(L){case"top":{const fe=[I?Z+r/2:V?Z+r*4:Z-r*4,re+r+1],Ee=[I?Z-r/2:V?Z+r*4:Z-r*4,re+r+1],pe=[[T.left,V||I?T.bottom-r:T.top],[T.right,V?I?T.bottom-r:T.top:T.bottom-r]];return[fe,Ee,...pe]}case"bottom":{const fe=[I?Z+r/2:V?Z+r*4:Z-r*4,re-r],Ee=[I?Z-r/2:V?Z+r*4:Z-r*4,re-r],pe=[[T.left,V||I?T.top+r:T.bottom],[T.right,V?I?T.top+r:T.bottom:T.top+r]];return[fe,Ee,...pe]}case"left":{const fe=[Z+r+1,H?re+r/2:K?re+r*4:re-r*4],Ee=[Z+r+1,H?re-r/2:K?re+r*4:re-r*4];return[...[[K||H?T.right-r:T.left,T.top],[K?H?T.right-r:T.left:T.right-r,T.bottom]],fe,Ee]}case"right":{const fe=[Z-r,H?re+r/2:K?re+r*4:re-r*4],Ee=[Z-r,H?re-r/2:K?re+r*4:re-r*4],pe=[[K||H?T.left+r:T.right,T.top],[K?H?T.left+r:T.right:T.left+r,T.bottom]];return[fe,Ee,...pe]}}}if(!Gr([B,j],ve)){if(l&&!F)return A();if(!U&&n){const le=o(O.clientX,O.clientY);if(le!==null&&le<.1)return A()}Gr([B,j],de([f,g]))?!l&&n&&(a=window.setTimeout(A,40)):A()}}};return d.__options={blockPointerEvents:t},d}const Ja=()=>{const{cn:e}=X();return R.createElement(Da,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Mu=()=>{const{cn:e}=X();return R.createElement(Da,{title:jn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var Bu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Xa=c.forwardRef((e,r)=>{var{className:t,header:n,children:a,open:l,defaultOpen:i=!1,onClick:s,size:u="medium",onOpenChange:o}=e,d=Bu(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:m}=X(),[f,g]=Zt({defaultValue:i,value:l,onChange:o}),p=u==="small"?"small":"medium";return R.createElement("div",{className:m("navds-read-more",`navds-read-more--${u}`,t,{"navds-read-more--open":f}),"data-volume":"low"},R.createElement("button",Object.assign({},d,{ref:r,type:"button",className:m("navds-read-more__button","navds-body-short",{"navds-body-short--small":u==="small"}),onClick:vt(s,()=>g(_=>!_)),"aria-expanded":f,"data-state":f?"open":"closed"}),R.createElement(Qt,{className:m("navds-read-more__expand-icon"),"aria-hidden":!0}),R.createElement("span",null,n)),R.createElement(Xt,{as:"div","aria-hidden":!f,className:m("navds-read-more__content",{"navds-read-more__content--closed":!f}),size:p,"data-state":f?"open":"closed"},a))}),at=c.createContext(null),sr=(e,r)=>{var t,n,a;const{size:l,error:i,errorId:s}=e,u=c.useContext(at),o=_n(),d=(t=e.id)!==null&&t!==void 0?t:`${r}-${o}`,m=s??`${r}-error-${o}`,f=`${r}-description-${o}`,g=u?.disabled||e.disabled,p=(u?.readOnly||e.readOnly)&&!g||void 0,_=!g&&!p&&!!(i||u?.error),E=!g&&!p&&!!i&&typeof i!="boolean",h=Object.assign({},_?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:E,hasError:_,errorId:m,inputDescriptionId:f,size:(n=l??u?.size)!==null&&n!==void 0?n:"medium",readOnly:p,inputProps:Object.assign(Object.assign({id:d},h),{"aria-describedby":Dn(e["aria-describedby"],{[f]:e.description&&!lt(e.description),[m]:E,[(a=u?.errorId)!==null&&a!==void 0?a:""]:_&&u?.error})||void 0,disabled:g})}};function lt(e,r=!0){if(R.isValidElement(e)){if(e.type===Xa)return!0;if(e.props.children&&r)return lt(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>lt(t,r));return!1}function ge(e,r,t,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,l])=>[`--__${e}c-${r}-${t}-${a}`,l])):{}}const Gu={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},qr=(e,r,t,n,a,l)=>r.split(" ").map((i,s,u)=>{var o;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/u.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/u.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let d=`var(--${l}-${t}-${i})`;if(n.includes(i))d=i==="px"?"1px":i;else if(i.startsWith("space"))d=`var(--${l}-${i})`;else{const m=`--${l}-spacing-${i}`;d=`var(${(o=Gu[m])!==null&&o!==void 0?o:m})`}return a?i==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function Pe(e,r,t,n,a,l=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${r}-${t}-xs`]:qr(t,a,n,i,l,e)};const s={};return Object.entries(a).forEach(([u,o])=>{s[`--__${e}c-${r}-${t}-${u}`]=qr(t,o,n,i,l,e)}),s}const qu=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Uu=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:a,margin:l,marginInline:i,marginBlock:s,width:u,minWidth:o,maxWidth:d,height:m,minHeight:f,maxHeight:g,position:p,inset:_,top:E,right:h,left:y,bottom:S,overflow:O,overflowX:A,overflowY:B,flexBasis:j,flexGrow:Y,flexShrink:q,gridColumn:U})=>{const C=ct(!1),{cn:w}=X(),k=C?"ax":"a",T=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Pe(k,"r","p","spacing",t)),Pe(k,"r","pi","spacing",n)),Pe(k,"r","pb","spacing",a)),Pe(k,"r","m","spacing",l)),Pe(k,"r","mi","spacing",i)),Pe(k,"r","mb","spacing",s)),ge(k,"r","w",u)),ge(k,"r","minw",o)),ge(k,"r","maxw",d)),ge(k,"r","h",m)),ge(k,"r","minh",f)),ge(k,"r","maxh",g)),ge(k,"r","position",p)),Pe(k,"r","inset","spacing",_)),Pe(k,"r","top","spacing",E)),Pe(k,"r","right","spacing",h)),Pe(k,"r","bottom","spacing",S)),Pe(k,"r","left","spacing",y)),ge(k,"r","overflow",O)),ge(k,"r","overflowx",A)),ge(k,"r","overflowy",B)),ge(k,"r","flex-basis",j)),ge(k,"r","flex-grow",Y)),ge(k,"r","flex-shrink",q)),ge(k,"r","grid-column",U));return R.createElement(gt,{className:w({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":u,"navds-r-minw":o,"navds-r-maxw":d,"navds-r-h":m,"navds-r-minh":f,"navds-r-maxh":g,"navds-r-position":p,"navds-r-inset":_,"navds-r-top":E,"navds-r-right":h,"navds-r-bottom":S,"navds-r-left":y,"navds-r-overflow":O,"navds-r-overflowx":A,"navds-r-overflowy":B,"navds-r-flex-basis":j,"navds-r-flex-grow":Y,"navds-r-flex-shrink":q,"navds-r-grid-column":U}),style:T},e)};var Cu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Za=c.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",align:l,justify:i,wrap:s=!0,gap:u,style:o,direction:d="row",asChild:m}=e,f=Cu(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const p=ct(!1)?"ax":"a",{cn:_}=X(),E=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},o),Pe(p,"stack","gap","spacing",u)),ge(p,"stack","direction",d)),ge(p,"stack","align",l)),ge(p,"stack","justify",i)),h=m?gt:a;return R.createElement(Uu,Object.assign({},f),R.createElement(h,Object.assign({},ze(f,qu),{ref:r,style:E,className:_("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":u,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":d,"navds-stack-wrap":s})}),t))});var Hu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const un=c.forwardRef((e,r)=>{var{as:t="div"}=e,n=Hu(e,["as"]);return R.createElement(Za,Object.assign({as:t},n,{ref:r,direction:"row"}))});var $u=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ve=c.forwardRef((e,r)=>{var{as:t="div"}=e,n=$u(e,["as"]);return R.createElement(Za,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))});var Yu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const zu=c.forwardRef((e,r)=>{var{as:t="a",className:n,underline:a=!0,variant:l,inlineText:i=!1,"data-color":s}=e,u=Yu(e,["as","className","underline","variant","inlineText","data-color"]);const o=ct(!1),{cn:d}=X();let m;return o?m=l:m=l??"action",R.createElement(t,Object.assign({"data-color":s??Wu(m),"data-variant":m},u,{ref:r,className:d("navds-link",n,{[`navds-link--${m}`]:m,"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});function Wu(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var Ju=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Xu=c.forwardRef((e,r)=>{var{className:t}=e,n=Ju(e,["className"]);const{cn:a}=X();return R.createElement("tbody",Object.assign({},n,{ref:r,className:a("navds-table__body",t)}))});var Zu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Qa=c.forwardRef((e,r)=>{var{className:t,children:n,align:a,textSize:l}=e,i=Zu(e,["className","children","align","textSize"]);const{cn:s}=X();return R.createElement("th",Object.assign({ref:r,className:s("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":l==="small"})},i),n)}),el=c.createContext(null);var Qu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const eo=c.forwardRef((e,r)=>{var t,n,a,l,{className:i,children:s,sortable:u=!1,sortKey:o}=e,d=Qu(e,["className","children","sortable","sortKey"]);const m=c.useContext(el),{cn:f}=X();return u&&!o&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),R.createElement(Qa,Object.assign({scope:"col",ref:r,className:f(i),"aria-sort":u?((t=m?.sort)===null||t===void 0?void 0:t.orderBy)===o?(n=m?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),u?R.createElement("button",{type:"button",className:f("navds-table__sort-button"),onClick:u&&o?()=>{var g;return(g=m?.onSortChange)===null||g===void 0?void 0:g.call(m,o)}:void 0},s,((a=m?.sort)===null||a===void 0?void 0:a.orderBy)===o?((l=m?.sort)===null||l===void 0?void 0:l.direction)==="descending"?R.createElement(_i,{"aria-hidden":!0}):R.createElement(pi,{"aria-hidden":!0}):R.createElement(ei,{"aria-hidden":!0})):s)});var no=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const nl=c.forwardRef((e,r)=>{var{className:t,children:n="",align:a,textSize:l}=e,i=no(e,["className","children","align","textSize"]);const{cn:s}=X();return R.createElement(_e,Object.assign({as:"td",ref:r,className:s("navds-table__data-cell",t,{[`navds-table__data-cell--align-${a}`]:a}),size:l},i),n)});var to=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ro=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function ao(e){const r=parseFloat(e);return!Number.isNaN(r)&&Number.isFinite(r)}function Ur(e){return typeof e=="string"&&e[e.length-1]==="%"&&ao(e.substring(0,e.length-1))}function It(e,r){r===0&&e?.style&&(e.style.display="none")}function lo(e,r){r===0&&e?.style&&(e.style.display="")}const io=e=>{var{children:r,className:t,innerClassName:n,duration:a=250,easing:l="ease",height:i}=e,s=to(e,["children","className","innerClassName","duration","easing","height"]);const{cn:u}=X(),o=c.useRef(i),d=c.useRef(null),m=c.useRef(),f=c.useRef(),g=c.useRef(i),p=c.useRef("visible"),_=ro?0:a;typeof g.current=="number"?(typeof i!="string"&&(g.current=i<0?0:i),p.current="hidden"):Ur(g.current)&&(g.current=i==="0%"?0:i,p.current="hidden");const[E,h]=c.useState(g.current),[y,S]=c.useState(p.current),[O,A]=c.useState(!1);c.useEffect(()=>{It(d.current,g.current)},[]),c.useEffect(()=>{if(i!==o.current&&d.current){lo(d.current,o.current),d.current.style.overflow="hidden";const q=d.current.offsetHeight;d.current.style.overflow="";const U=_;let C,w,k="hidden",T;const L=o.current==="auto";typeof i=="number"?(C=i<0?0:i,w=C):Ur(i)?(C=i==="0%"?0:i,w=C):(C=q,w="auto",k=void 0),L&&(w=C,C=q),h(C),S("hidden"),A(!L),clearTimeout(f.current),clearTimeout(m.current),L?(T=!0,f.current=setTimeout(()=>{h(w),S(k),A(T)},50),m.current=setTimeout(()=>{A(!1),It(d.current,w)},U)):f.current=setTimeout(()=>{h(w),S(k),A(!1),i!=="auto"&&It(d.current,C)},U)}return o.current=i,()=>{clearTimeout(f.current),clearTimeout(m.current)}},[i]);const B={height:E,overflow:y};O&&(B.transition=`height ${_}ms ${l} 0ms`,B.WebkitTransition=B.transition);const Y=typeof s["aria-hidden"]<"u"?s["aria-hidden"]:i===0;return R.createElement("div",Object.assign({},s,{className:u(t),style:B}),R.createElement("div",{"aria-hidden":Y,className:u(n),ref:d},r))};var so=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const tl=c.forwardRef((e,r)=>{var{className:t,selected:n=!1,shadeOnHover:a=!0}=e,l=so(e,["className","selected","shadeOnHover"]);const{cn:i}=X();return R.createElement("tr",Object.assign({},l,{ref:r,className:i("navds-table__row",t,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a})}))});var uo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const oo=c.forwardRef((e,r)=>{var{className:t,children:n,content:a,togglePlacement:l="left",defaultOpen:i=!1,open:s,onOpenChange:u,expansionDisabled:o=!1,expandOnRowClick:d=!1,colSpan:m=999,contentGutter:f,onClick:g}=e,p=uo(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:_}=X(),[E,h]=Zt({defaultValue:i,value:s,onChange:u}),y=jn("global"),S=_n(),O=B=>{h(j=>!j),B.stopPropagation()},A=B=>{d&&!o&&!rl(B.target)&&O(B)};return R.createElement(R.Fragment,null,R.createElement(tl,Object.assign({},p,{ref:r,className:_("navds-table__expandable-row",t,{"navds-table__expandable-row--open":E,"navds-table__expandable-row--expansion-disabled":o,"navds-table__expandable-row--clickable":d}),onClick:vt(g,A)}),l==="right"&&n,R.createElement(nl,{className:_("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":E}),onClick:o?()=>null:O},!o&&R.createElement("button",{className:_("navds-table__toggle-expand-button"),type:"button","aria-controls":S,"aria-expanded":E,onClick:O},R.createElement(Qt,{className:_("navds-table__expandable-icon"),title:y(E?"showLess":"showMore")}))),l==="left"&&n),R.createElement("tr",{"data-state":E?"open":"closed",className:_("navds-table__expanded-row"),"aria-hidden":!E,id:S},R.createElement("td",{colSpan:m,className:_("navds-table__expanded-row-cell")},R.createElement(io,{className:_("navds-table__expanded-row-collapse"),innerClassName:_(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${f??l}`),height:E?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function rl(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:rl(e.parentElement)}var mo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const co=c.forwardRef((e,r)=>{var{className:t}=e,n=mo(e,["className"]);const{cn:a}=X();return R.createElement("thead",Object.assign({},n,{ref:r,className:a("navds-table__header",t)}))});var go=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ce=c.forwardRef((e,r)=>{var{className:t,zebraStripes:n=!1,size:a="medium",onSortChange:l,sort:i,stickyHeader:s=!1}=e,u=go(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:o}=X();return R.createElement(el.Provider,{value:{onSortChange:l,sort:i}},R.createElement("table",Object.assign({},u,{ref:r,className:o("navds-table",`navds-table--${a}`,t,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":s})})))});ce.Header=co;ce.Body=Xu;ce.Row=tl;ce.ColumnHeader=eo;ce.HeaderCell=Qa;ce.DataCell=nl;ce.ExpandableRow=oo;var vo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fo=c.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:l="medium",icon:i,"data-color":s}=e,u=vo(e,["children","className","variant","size","icon","data-color"]);const{cn:o}=X(),d=a?.endsWith("-filled")&&"strong",m=a?.endsWith("-moderate")&&"moderate";return R.createElement(_e,Object.assign({"data-color":s??_o(a),"data-variant":d||m||"outline"},u,{ref:r,as:"span",size:l==="medium"?"medium":"small",className:o("navds-tag",n,`navds-tag--${a}`,`navds-tag--${l}`)}),i&&R.createElement("span",{className:o("navds-tag__icon--left")},i),t)});function _o(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var Eo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const al=c.forwardRef((e,r)=>{var{children:t,className:n,arrow:a=!0,placement:l="top",open:i,defaultOpen:s=!1,onOpenChange:u,offset:o,content:d,delay:m=150,id:f,keys:g,maxChar:p=80,describesChild:_=!1}=e,E=Eo(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:h}=X(),[y,S]=Zt({defaultValue:s,value:i,onChange:u}),O=c.useRef(null),A=Ti(!1),B=A?A.ref.current:void 0,{x:j,y:Y,strategy:q,context:U,placement:C,middlewareData:{arrow:{x:w,y:k}={},hide:{referenceHidden:T}={}},refs:L}=Fu({placement:l,open:y,onOpenChange:z=>S(z),middleware:[qs(o??(a?8:4)),Us(),Cs({padding:5,fallbackPlacements:["bottom","top"]}),Hs({element:O,padding:5})],whileElementsMounted:A?(z,W,J)=>wr(z,W,J,{animationFrame:!0}):wr,strategy:A?"fixed":void 0}),{getReferenceProps:V,getFloatingProps:K}=Ku([Ou(U,{handleClose:ju(),restMs:m}),Du(U),Lu(U)]),F=_n(f),I=Sa(r,L.setFloating);if(!t||t?.type===R.Fragment||t===R.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;d?.length>p&&y&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${d.length}
Tooltip-content: ${d}`);const H=_?y?{"aria-describedby":F}:{title:d}:{"aria-label":d};return R.createElement(R.Fragment,null,R.createElement(gt,Object.assign({ref:L.setReference},V(),H,{"aria-keyshortcuts":g?g.join("+"):void 0}),t),R.createElement(ls,{rootElement:B,asChild:!0},y&&R.createElement("div",Object.assign({},K(Object.assign(Object.assign({},E),{ref:I,style:{position:q,top:Y??0,left:j??0,visibility:T?"hidden":"visible"},role:"tooltip",id:F,className:h("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":C,"data-state":"open"}),d,g&&R.createElement("span",{className:h("navds-tooltip__keys"),"aria-hidden":!0},g.map(z=>R.createElement($l,{as:"kbd",key:z,className:h("navds-tooltip__key")},z))),a&&R.createElement("div",{ref:z=>{O.current=z},className:h("navds-tooltip__arrow"),style:{left:w!=null?`${w}px`:"",top:k!=null?`${k}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[C]]:"-3.5px"}}))))}),po=e=>{const r=sr(e,"fieldset");return Object.assign(Object.assign({},r),{inputProps:{"aria-describedby":Dn(e["aria-describedby"],{[r.inputDescriptionId]:e.description&&!lt(e.description)})||void 0}})};var yo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const bo=c.forwardRef((e,r)=>{var t,n,a;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:u,size:o,readOnly:d,inputDescriptionId:m}=po(e),{cn:f}=X(),g=c.useContext(at),{children:p,className:_,errorPropagation:E=!0,legend:h,description:y,hideLegend:S,nativeReadOnly:O=!0}=e,A=yo(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return R.createElement(at.Provider,{value:{error:E?(t=e.error)!==null&&t!==void 0?t:g?.error:void 0,errorId:Dn({[i]:s,[(n=g?.errorId)!==null&&n!==void 0?n:""]:!!g?.error}),size:o,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:d}},R.createElement("fieldset",Object.assign({},ze(A,["errorId","error","size","readOnly"]),l,{ref:r,className:f(_,"navds-fieldset",`navds-fieldset--${o}`,{"navds-fieldset--error":u,"navds-fieldset--readonly":d})}),R.createElement(fn,{size:o,as:"legend",className:f("navds-fieldset__legend",{"navds-sr-only":!!S})},d&&(O?R.createElement(Ja,null):R.createElement(Mu,null)),h),!!y&&R.createElement(_e,{className:f("navds-fieldset__description",{"navds-sr-only":!!S}),id:m,size:o??"medium",as:"div"},e.description),p,R.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:f("navds-fieldset__error")},s&&R.createElement(La,{size:o,showIcon:!0},e.error))))});var Ro=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ll=R.createContext(null),ho=c.forwardRef((e,r)=>{var t,n,{children:a,className:l,name:i,defaultValue:s,value:u,onChange:o=()=>{},required:d,readOnly:m}=e,f=Ro(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:g}=X(),p=c.useContext(at),_=_n();return R.createElement(bo,Object.assign({},f,{readOnly:m,ref:r,className:g(l,"navds-radio-group",`navds-radio-group--${(n=(t=f.size)!==null&&t!==void 0?t:p?.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),R.createElement(ll.Provider,{value:{name:i??`radioGroupName-${_}`,defaultValue:s,value:u,onChange:o,required:d}},R.createElement("div",{className:g("navds-radio-buttons")},a)))});var To=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ko=e=>{const r=c.useContext(ll),t=sr(ze(e,["description"]),"radio"),{inputProps:n,readOnly:a}=t,l=To(t,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:r?.name,defaultChecked:r?.defaultValue===void 0?void 0:r?.defaultValue===e.value,checked:r?.value===void 0?void 0:r?.value===e.value,onChange:i=>{var s,u;a||((s=e.onChange)===null||s===void 0||s.call(e,i),(u=r?.onChange)===null||u===void 0||u.call(r,e.value))},onClick:i=>{var s;if(a){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:r?.required,type:"radio"})})},Ft=c.forwardRef((e,r)=>{const{cn:t}=X(),{inputProps:n,size:a,hasError:l,readOnly:i}=ko(e);return R.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":l,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},R.createElement("input",Object.assign({},ze(e,["children","size","description","readOnly"]),ze(n,["aria-invalid"]),{className:t("navds-radio__input"),ref:r})),R.createElement("label",{htmlFor:n.id,className:t("navds-radio__label")},R.createElement("span",{className:t("navds-radio__content")},R.createElement(_e,{as:"span",size:a},e.children),e.description&&R.createElement(_e,{as:"span",size:a,className:t("navds-form-field__subdescription navds-radio__description")},e.description))))});var So=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Cr=(e,r,t)=>{const{outerHeightStyle:n,overflow:a}=r;return t.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(t.current+=1,r):e},Hr=e=>(e?.ownerDocument||document).defaultView||window;function Hn(e){return parseInt(e,10)||0}const No=c.forwardRef((e,r)=>{var t,n,{className:a,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:u,style:o,value:d}=e,m=So(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:f}=c.useRef(d!=null),g=c.useRef(null),p=Sa(g,r),_=c.useRef(null),E=c.useRef(0),[h,y]=c.useState({outerHeightStyle:0}),S=R.useCallback(()=>{const j=g.current,q=Hr(j).getComputedStyle(j);if(q.width==="0px")return{outerHeightStyle:0};const U=_.current;U.style.width=q.width,U.value=j.value||m.placeholder||"x",U.value.slice(-1)===`
`&&(U.value+=" ");const C=q.boxSizing,w=Hn(q.paddingBottom)+Hn(q.paddingTop),k=Hn(q.borderBottomWidth)+Hn(q.borderTopWidth),T=U.scrollHeight-w;U.value="x";const L=U.scrollHeight-w;let V=T;s&&(V=Math.max(Number(s)*L,V)),i&&(V=Math.min(Number(i)*L,V)),V=Math.max(V,L);const K=V+(C==="border-box"?w+k:0),F=Math.abs(V-T)<=1;return{outerHeightStyle:K,overflow:F}},[i,s,m.placeholder]),O=()=>{const j=S();$r(j)||y(Y=>Cr(Y,j,E))};Rr(()=>{const j=()=>{const w=S();$r(w)||Mt.flushSync(()=>{y(k=>Cr(k,w,E))})},Y=Fa(()=>{var w,k,T;if(E.current=0,!((w=g.current)===null||w===void 0)&&w.style.height||!((k=g.current)===null||k===void 0)&&k.style.width){((T=g.current)===null||T===void 0?void 0:T.style.overflow)==="hidden"&&y(L=>Object.assign(Object.assign({},L),{overflow:!1}));return}j()},166,!0),q=g.current,U=Hr(q);U.addEventListener("resize",Y);let C;return typeof ResizeObserver<"u"&&(C=new ResizeObserver(Y),C.observe(q)),()=>{Y.clear(),U.removeEventListener("resize",Y),C&&C.disconnect()}},[S]),Rr(()=>{O()}),c.useEffect(()=>{E.current=0},[d]);const A=j=>{E.current=0,f||O(),l&&l(j)},B=Object.assign({"--__ac-textarea-height":h.outerHeightStyle+"px","--__axc-textarea-height":h.outerHeightStyle+"px",overflow:h.overflow&&!u&&!(!((t=g.current)===null||t===void 0)&&t.style.height)&&!(!((n=g.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},o);return R.createElement(R.Fragment,null,R.createElement("textarea",Object.assign({value:d,onChange:A,ref:p,rows:s,style:B},m,{className:a})),R.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:_,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},o)}))});function $r(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Oo=({maxLengthId:e,maxLength:r,currentLength:t,size:n,i18n:a})=>{const{cn:l}=X(),i=jn("Textarea",{charsLeft:a?.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a?.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),s=r-t,[u,o]=c.useState(s);return c.useEffect(()=>{const d=Fa(()=>{o(s)},2e3);return d(),()=>{d.clear()}},[s]),R.createElement(R.Fragment,null,R.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:r})),s<20&&R.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},Yr(u,i)),R.createElement(_e,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:n},Yr(s,i)))},Yr=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var Ao=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Po=c.forwardRef((e,r)=>{var t,n,a;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:u,size:o,inputDescriptionId:d}=sr(e,"textarea"),{label:m,className:f,description:g,maxLength:p,hideLabel:_=!1,resize:E,UNSAFE_autoScrollbar:h,i18n:y,readOnly:S}=e,O=Ao(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:A}=X(),B=_n(),j=p!==void 0&&p>0,[Y,q]=c.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),U=()=>{let w=O?.minRows?O?.minRows:3;return o==="small"&&(w=O?.minRows?O?.minRows:2),w},C=Dn(l["aria-describedby"],{[B??""]:j});return R.createElement("div",{className:A(f,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":S,"navds-textarea--readonly":S,"navds-textarea--error":u,"navds-textarea--autoscrollbar":h,[`navds-textarea--resize-${E===!0?"both":E}`]:E})},R.createElement(fn,{htmlFor:l.id,size:o,className:A("navds-form-field__label",{"navds-sr-only":_})},S&&R.createElement(Ja,null),m),!!g&&R.createElement(_e,{className:A("navds-form-field__description",{"navds-sr-only":_}),id:d,size:o,as:"div"},g),R.createElement(No,Object.assign({},ze(O,["error","errorId","size"]),l,{onChange:vt(e.onChange,e.value===void 0?w=>q(w.target.value):void 0),minRows:U(),autoScrollbar:h,ref:r,readOnly:S,className:A("navds-textarea__input","navds-body-short",`navds-body-short--${o??"medium"}`)},C?{"aria-describedby":C}:{})),j&&!S&&!l.disabled&&R.createElement(Oo,{maxLengthId:B,maxLength:p,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:Y.length,size:o,i18n:y}),R.createElement("div",{className:A("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&R.createElement(La,{size:o,showIcon:!0},e.error)))});var Mn=e=>e.type==="checkbox",Xe=e=>e instanceof Date,ye=e=>e==null;const il=e=>typeof e=="object";var ue=e=>!ye(e)&&!Array.isArray(e)&&il(e)&&!Xe(e),sl=e=>ue(e)&&e.target?Mn(e.target)?e.target.checked:e.target.value:e,wo=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ul=(e,r)=>e.has(wo(r)),Lo=e=>{const r=e.constructor&&e.constructor.prototype;return ue(r)&&r.hasOwnProperty("isPrototypeOf")},ur=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function me(e){let r;const t=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(ur&&(e instanceof Blob||n))&&(t||ue(e)))if(r=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!Lo(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=me(e[a]));else return e;return r}var yt=e=>/^\w*$/.test(e),ie=e=>e===void 0,or=e=>Array.isArray(e)?e.filter(Boolean):[],dr=e=>or(e.replace(/["|']|\]/g,"").split(/\.|\[/)),M=(e,r,t)=>{if(!r||!ue(e))return t;const n=(yt(r)?[r]:dr(r)).reduce((a,l)=>ye(a)?a:a[l],e);return ie(n)||n===e?ie(e[r])?t:e[r]:n},Te=e=>typeof e=="boolean",ne=(e,r,t)=>{let n=-1;const a=yt(r)?[r]:dr(r),l=a.length,i=l-1;for(;++n<l;){const s=a[n];let u=t;if(n!==i){const o=e[s];u=ue(o)||Array.isArray(o)?o:isNaN(+a[n+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=u,e=e[s]}};const it={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Ie={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Be={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},mr=R.createContext(null);mr.displayName="HookFormContext";const nn=()=>R.useContext(mr),Io=e=>{const{children:r,...t}=e;return R.createElement(mr.Provider,{value:t},r)};var ol=(e,r,t,n=!0)=>{const a={defaultValues:r._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const i=l;return r._proxyFormState[i]!==Ie.all&&(r._proxyFormState[i]=!n||Ie.all),t&&(t[i]=!0),e[i]}});return a};const cr=typeof window<"u"?R.useLayoutEffect:R.useEffect;function Fo(e){const r=nn(),{control:t=r.control,disabled:n,name:a,exact:l}=e||{},[i,s]=R.useState(t._formState),u=R.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return cr(()=>t._subscribe({name:a,formState:u.current,exact:l,callback:o=>{!n&&s({...t._formState,...o})}}),[a,n,l]),R.useEffect(()=>{u.current.isValid&&t._setValid(!0)},[t]),R.useMemo(()=>ol(i,t,u.current,!1),[i,t])}var De=e=>typeof e=="string",dl=(e,r,t,n,a)=>De(e)?(n&&r.watch.add(e),M(t,e,a)):Array.isArray(e)?e.map(l=>(n&&r.watch.add(l),M(t,l))):(n&&(r.watchAll=!0),t),Ct=e=>ye(e)||!il(e);function qe(e,r,t=new WeakSet){if(Ct(e)||Ct(r))return e===r;if(Xe(e)&&Xe(r))return e.getTime()===r.getTime();const n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;if(t.has(e)||t.has(r))return!0;t.add(e),t.add(r);for(const l of n){const i=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const s=r[l];if(Xe(i)&&Xe(s)||ue(i)&&ue(s)||Array.isArray(i)&&Array.isArray(s)?!qe(i,s,t):i!==s)return!1}}return!0}function Do(e){const r=nn(),{control:t=r.control,name:n,defaultValue:a,disabled:l,exact:i,compute:s}=e||{},u=R.useRef(a),o=R.useRef(s),d=R.useRef(void 0);o.current=s;const m=R.useMemo(()=>t._getWatch(n,u.current),[t,n]),[f,g]=R.useState(o.current?o.current(m):m);return cr(()=>t._subscribe({name:n,formState:{values:!0},exact:i,callback:p=>{if(!l){const _=dl(n,t._names,p.values||t._formValues,!1,u.current);if(o.current){const E=o.current(_);qe(E,d.current)||(g(E),d.current=E)}else g(_)}}}),[t,l,n,i]),R.useEffect(()=>t._removeUnmounted()),f}function ml(e){const r=nn(),{name:t,disabled:n,control:a=r.control,shouldUnregister:l,defaultValue:i}=e,s=ul(a._names.array,t),u=R.useMemo(()=>M(a._formValues,t,M(a._defaultValues,t,i)),[a,t,i]),o=Do({control:a,name:t,defaultValue:u,exact:!0}),d=Fo({control:a,name:t,exact:!0}),m=R.useRef(e),f=R.useRef(a.register(t,{...e.rules,value:o,...Te(e.disabled)?{disabled:e.disabled}:{}}));m.current=e;const g=R.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!M(d.errors,t)},isDirty:{enumerable:!0,get:()=>!!M(d.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!M(d.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!M(d.validatingFields,t)},error:{enumerable:!0,get:()=>M(d.errors,t)}}),[d,t]),p=R.useCallback(y=>f.current.onChange({target:{value:sl(y),name:t},type:it.CHANGE}),[t]),_=R.useCallback(()=>f.current.onBlur({target:{value:M(a._formValues,t),name:t},type:it.BLUR}),[t,a._formValues]),E=R.useCallback(y=>{const S=M(a._fields,t);S&&y&&(S._f.ref={focus:()=>y.focus&&y.focus(),select:()=>y.select&&y.select(),setCustomValidity:O=>y.setCustomValidity(O),reportValidity:()=>y.reportValidity()})},[a._fields,t]),h=R.useMemo(()=>({name:t,value:o,...Te(n)||d.disabled?{disabled:d.disabled||n}:{},onChange:p,onBlur:_,ref:E}),[t,n,d.disabled,p,_,E,o]);return R.useEffect(()=>{const y=a._options.shouldUnregister||l;a.register(t,{...m.current.rules,...Te(m.current.disabled)?{disabled:m.current.disabled}:{}});const S=(O,A)=>{const B=M(a._fields,O);B&&B._f&&(B._f.mount=A)};if(S(t,!0),y){const O=me(M(a._options.defaultValues,t));ne(a._defaultValues,t,O),ie(M(a._formValues,t))&&ne(a._formValues,t,O)}return!s&&a.register(t),()=>{(s?y&&!a._state.action:y)?a.unregister(t):S(t,!1)}},[t,a,s,l]),R.useEffect(()=>{a._setDisabledField({disabled:n,name:t})},[n,t,a]),R.useMemo(()=>({field:h,formState:d,fieldState:g}),[h,d,g])}var Ko=(e,r,t,n,a)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:a||!0}}:{},Pn=e=>Array.isArray(e)?e:[e],zr=()=>{let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}},Re=e=>ue(e)&&!Object.keys(e).length,gr=e=>e.type==="file",Fe=e=>typeof e=="function",st=e=>{if(!ur)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},cl=e=>e.type==="select-multiple",vr=e=>e.type==="radio",Vo=e=>vr(e)||Mn(e),Dt=e=>st(e)&&e.isConnected;function xo(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=ie(e)?n++:e[r[n++]];return e}function jo(e){for(const r in e)if(e.hasOwnProperty(r)&&!ie(e[r]))return!1;return!0}function oe(e,r){const t=Array.isArray(r)?r:yt(r)?[r]:dr(r),n=t.length===1?e:xo(e,t),a=t.length-1,l=t[a];return n&&delete n[l],a!==0&&(ue(n)&&Re(n)||Array.isArray(n)&&jo(n))&&oe(e,t.slice(0,-1)),e}var gl=e=>{for(const r in e)if(Fe(e[r]))return!0;return!1};function ut(e,r={}){const t=Array.isArray(e);if(ue(e)||t)for(const n in e)Array.isArray(e[n])||ue(e[n])&&!gl(e[n])?(r[n]=Array.isArray(e[n])?[]:{},ut(e[n],r[n])):ye(e[n])||(r[n]=!0);return r}function vl(e,r,t){const n=Array.isArray(e);if(ue(e)||n)for(const a in e)Array.isArray(e[a])||ue(e[a])&&!gl(e[a])?ie(r)||Ct(t[a])?t[a]=Array.isArray(e[a])?ut(e[a],[]):{...ut(e[a])}:vl(e[a],ye(r)?{}:r[a],t[a]):t[a]=!qe(e[a],r[a]);return t}var kn=(e,r)=>vl(e,r,ut(r));const Wr={value:!1,isValid:!1},Jr={value:!0,isValid:!0};var fl=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ie(e[0].attributes.value)?ie(e[0].value)||e[0].value===""?Jr:{value:e[0].value,isValid:!0}:Jr:Wr}return Wr},_l=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>ie(e)?e:r?e===""?NaN:e&&+e:t&&De(e)?new Date(e):n?n(e):e;const Xr={isValid:!1,value:null};var El=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,Xr):Xr;function Zr(e){const r=e.ref;return gr(r)?r.files:vr(r)?El(e.refs).value:cl(r)?[...r.selectedOptions].map(({value:t})=>t):Mn(r)?fl(e.refs).value:_l(ie(r.value)?e.ref.value:r.value,e)}var Mo=(e,r,t,n)=>{const a={};for(const l of e){const i=M(r,l);i&&ne(a,l,i._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:n}},ot=e=>e instanceof RegExp,Sn=e=>ie(e)?e:ot(e)?e.source:ue(e)?ot(e.value)?e.value.source:e.value:e,Qr=e=>({isOnSubmit:!e||e===Ie.onSubmit,isOnBlur:e===Ie.onBlur,isOnChange:e===Ie.onChange,isOnAll:e===Ie.all,isOnTouch:e===Ie.onTouched});const ea="AsyncFunction";var Bo=e=>!!e&&!!e.validate&&!!(Fe(e.validate)&&e.validate.constructor.name===ea||ue(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===ea)),Go=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),na=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const wn=(e,r,t,n)=>{for(const a of t||Object.keys(e)){const l=M(e,a);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],a)&&!n)return!0;if(i.ref&&r(i.ref,i.name)&&!n)return!0;if(wn(s,r))break}else if(ue(s)&&wn(s,r))break}}};function ta(e,r,t){const n=M(e,t);if(n||yt(t))return{error:n,name:t};const a=t.split(".");for(;a.length;){const l=a.join("."),i=M(r,l),s=M(e,l);if(i&&!Array.isArray(i)&&t!==l)return{name:t};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};a.pop()}return{name:t}}var qo=(e,r,t,n)=>{t(e);const{name:a,...l}=e;return Re(l)||Object.keys(l).length>=Object.keys(r).length||Object.keys(l).find(i=>r[i]===(!n||Ie.all))},Uo=(e,r,t)=>!e||!r||e===r||Pn(e).some(n=>n&&(t?n===r:n.startsWith(r)||r.startsWith(n))),Co=(e,r,t,n,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(r||e):(t?n.isOnBlur:a.isOnBlur)?!e:(t?n.isOnChange:a.isOnChange)?e:!0,Ho=(e,r)=>!or(M(e,r)).length&&oe(e,r),$o=(e,r,t)=>{const n=Pn(M(e,t));return ne(n,"root",r[t]),ne(e,t,n),e},Zn=e=>De(e);function ra(e,r,t="validate"){if(Zn(e)||Array.isArray(e)&&e.every(Zn)||Te(e)&&!e)return{type:t,message:Zn(e)?e:"",ref:r}}var rn=e=>ue(e)&&!ot(e)?e:{value:e,message:""},aa=async(e,r,t,n,a,l)=>{const{ref:i,refs:s,required:u,maxLength:o,minLength:d,min:m,max:f,pattern:g,validate:p,name:_,valueAsNumber:E,mount:h}=e._f,y=M(t,_);if(!h||r.has(_))return{};const S=s?s[0]:i,O=w=>{a&&S.reportValidity&&(S.setCustomValidity(Te(w)?"":w||""),S.reportValidity())},A={},B=vr(i),j=Mn(i),Y=B||j,q=(E||gr(i))&&ie(i.value)&&ie(y)||st(i)&&i.value===""||y===""||Array.isArray(y)&&!y.length,U=Ko.bind(null,_,n,A),C=(w,k,T,L=Be.maxLength,V=Be.minLength)=>{const K=w?k:T;A[_]={type:w?L:V,message:K,ref:i,...U(w?L:V,K)}};if(l?!Array.isArray(y)||!y.length:u&&(!Y&&(q||ye(y))||Te(y)&&!y||j&&!fl(s).isValid||B&&!El(s).isValid)){const{value:w,message:k}=Zn(u)?{value:!!u,message:u}:rn(u);if(w&&(A[_]={type:Be.required,message:k,ref:S,...U(Be.required,k)},!n))return O(k),A}if(!q&&(!ye(m)||!ye(f))){let w,k;const T=rn(f),L=rn(m);if(!ye(y)&&!isNaN(y)){const V=i.valueAsNumber||y&&+y;ye(T.value)||(w=V>T.value),ye(L.value)||(k=V<L.value)}else{const V=i.valueAsDate||new Date(y),K=H=>new Date(new Date().toDateString()+" "+H),F=i.type=="time",I=i.type=="week";De(T.value)&&y&&(w=F?K(y)>K(T.value):I?y>T.value:V>new Date(T.value)),De(L.value)&&y&&(k=F?K(y)<K(L.value):I?y<L.value:V<new Date(L.value))}if((w||k)&&(C(!!w,T.message,L.message,Be.max,Be.min),!n))return O(A[_].message),A}if((o||d)&&!q&&(De(y)||l&&Array.isArray(y))){const w=rn(o),k=rn(d),T=!ye(w.value)&&y.length>+w.value,L=!ye(k.value)&&y.length<+k.value;if((T||L)&&(C(T,w.message,k.message),!n))return O(A[_].message),A}if(g&&!q&&De(y)){const{value:w,message:k}=rn(g);if(ot(w)&&!y.match(w)&&(A[_]={type:Be.pattern,message:k,ref:i,...U(Be.pattern,k)},!n))return O(k),A}if(p){if(Fe(p)){const w=await p(y,t),k=ra(w,S);if(k&&(A[_]={...k,...U(Be.validate,k.message)},!n))return O(k.message),A}else if(ue(p)){let w={};for(const k in p){if(!Re(w)&&!n)break;const T=ra(await p[k](y,t),S,k);T&&(w={...T,...U(k,T.message)},O(T.message),n&&(A[_]=w))}if(!Re(w)&&(A[_]={ref:S,...w},!n))return A}}return O(!0),A};const Yo={mode:Ie.onSubmit,reValidateMode:Ie.onChange,shouldFocusError:!0};function zo(e={}){let r={...Yo,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:Fe(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},a=ue(r.defaultValues)||ue(r.values)?me(r.defaultValues||r.values)||{}:{},l=r.shouldUnregister?{}:me(a),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},u,o=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let m={...d};const f={array:zr(),state:zr()},g=r.criteriaMode===Ie.all,p=v=>b=>{clearTimeout(o),o=setTimeout(v,b)},_=async v=>{if(!r.disabled&&(d.isValid||m.isValid||v)){const b=r.resolver?Re((await j()).errors):await q(n,!0);b!==t.isValid&&f.state.next({isValid:b})}},E=(v,b)=>{!r.disabled&&(d.isValidating||d.validatingFields||m.isValidating||m.validatingFields)&&((v||Array.from(s.mount)).forEach(N=>{N&&(b?ne(t.validatingFields,N,b):oe(t.validatingFields,N))}),f.state.next({validatingFields:t.validatingFields,isValidating:!Re(t.validatingFields)}))},h=(v,b=[],N,G,x=!0,D=!0)=>{if(G&&N&&!r.disabled){if(i.action=!0,D&&Array.isArray(M(n,v))){const $=N(M(n,v),G.argA,G.argB);x&&ne(n,v,$)}if(D&&Array.isArray(M(t.errors,v))){const $=N(M(t.errors,v),G.argA,G.argB);x&&ne(t.errors,v,$),Ho(t.errors,v)}if((d.touchedFields||m.touchedFields)&&D&&Array.isArray(M(t.touchedFields,v))){const $=N(M(t.touchedFields,v),G.argA,G.argB);x&&ne(t.touchedFields,v,$)}(d.dirtyFields||m.dirtyFields)&&(t.dirtyFields=kn(a,l)),f.state.next({name:v,isDirty:C(v,b),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else ne(l,v,b)},y=(v,b)=>{ne(t.errors,v,b),f.state.next({errors:t.errors})},S=v=>{t.errors=v,f.state.next({errors:t.errors,isValid:!1})},O=(v,b,N,G)=>{const x=M(n,v);if(x){const D=M(l,v,ie(N)?M(a,v):N);ie(D)||G&&G.defaultChecked||b?ne(l,v,b?D:Zr(x._f)):T(v,D),i.mount&&_()}},A=(v,b,N,G,x)=>{let D=!1,$=!1;const Q={name:v};if(!r.disabled){if(!N||G){(d.isDirty||m.isDirty)&&($=t.isDirty,t.isDirty=Q.isDirty=C(),D=$!==Q.isDirty);const ee=qe(M(a,v),b);$=!!M(t.dirtyFields,v),ee?oe(t.dirtyFields,v):ne(t.dirtyFields,v,!0),Q.dirtyFields=t.dirtyFields,D=D||(d.dirtyFields||m.dirtyFields)&&$!==!ee}if(N){const ee=M(t.touchedFields,v);ee||(ne(t.touchedFields,v,N),Q.touchedFields=t.touchedFields,D=D||(d.touchedFields||m.touchedFields)&&ee!==N)}D&&x&&f.state.next(Q)}return D?Q:{}},B=(v,b,N,G)=>{const x=M(t.errors,v),D=(d.isValid||m.isValid)&&Te(b)&&t.isValid!==b;if(r.delayError&&N?(u=p(()=>y(v,N)),u(r.delayError)):(clearTimeout(o),u=null,N?ne(t.errors,v,N):oe(t.errors,v)),(N?!qe(x,N):x)||!Re(G)||D){const $={...G,...D&&Te(b)?{isValid:b}:{},errors:t.errors,name:v};t={...t,...$},f.state.next($)}},j=async v=>{E(v,!0);const b=await r.resolver(l,r.context,Mo(v||s.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return E(v),b},Y=async v=>{const{errors:b}=await j(v);if(v)for(const N of v){const G=M(b,N);G?ne(t.errors,N,G):oe(t.errors,N)}else t.errors=b;return b},q=async(v,b,N={valid:!0})=>{for(const G in v){const x=v[G];if(x){const{_f:D,...$}=x;if(D){const Q=s.array.has(D.name),ee=x._f&&Bo(x._f);ee&&d.validatingFields&&E([G],!0);const Oe=await aa(x,s.disabled,l,g,r.shouldUseNativeValidation&&!b,Q);if(ee&&d.validatingFields&&E([G]),Oe[D.name]&&(N.valid=!1,b))break;!b&&(M(Oe,D.name)?Q?$o(t.errors,Oe,D.name):ne(t.errors,D.name,Oe[D.name]):oe(t.errors,D.name))}!Re($)&&await q($,b,N)}}return N.valid},U=()=>{for(const v of s.unMount){const b=M(n,v);b&&(b._f.refs?b._f.refs.every(N=>!Dt(N)):!Dt(b._f.ref))&&le(v)}s.unMount=new Set},C=(v,b)=>!r.disabled&&(v&&b&&ne(l,v,b),!qe(H(),a)),w=(v,b,N)=>dl(v,s,{...i.mount?l:ie(b)?a:De(v)?{[v]:b}:b},N,b),k=v=>or(M(i.mount?l:a,v,r.shouldUnregister?M(a,v,[]):[])),T=(v,b,N={})=>{const G=M(n,v);let x=b;if(G){const D=G._f;D&&(!D.disabled&&ne(l,v,_l(b,D)),x=st(D.ref)&&ye(b)?"":b,cl(D.ref)?[...D.ref.options].forEach($=>$.selected=x.includes($.value)):D.refs?Mn(D.ref)?D.refs.forEach($=>{(!$.defaultChecked||!$.disabled)&&(Array.isArray(x)?$.checked=!!x.find(Q=>Q===$.value):$.checked=x===$.value||!!x)}):D.refs.forEach($=>$.checked=$.value===x):gr(D.ref)?D.ref.value="":(D.ref.value=x,D.ref.type||f.state.next({name:v,values:me(l)})))}(N.shouldDirty||N.shouldTouch)&&A(v,x,N.shouldTouch,N.shouldDirty,!0),N.shouldValidate&&I(v)},L=(v,b,N)=>{for(const G in b){if(!b.hasOwnProperty(G))return;const x=b[G],D=v+"."+G,$=M(n,D);(s.array.has(v)||ue(x)||$&&!$._f)&&!Xe(x)?L(D,x,N):T(D,x,N)}},V=(v,b,N={})=>{const G=M(n,v),x=s.array.has(v),D=me(b);ne(l,v,D),x?(f.array.next({name:v,values:me(l)}),(d.isDirty||d.dirtyFields||m.isDirty||m.dirtyFields)&&N.shouldDirty&&f.state.next({name:v,dirtyFields:kn(a,l),isDirty:C(v,D)})):G&&!G._f&&!ye(D)?L(v,D,N):T(v,D,N),na(v,s)&&f.state.next({...t,name:v}),f.state.next({name:i.mount?v:void 0,values:me(l)})},K=async v=>{i.mount=!0;const b=v.target;let N=b.name,G=!0;const x=M(n,N),D=ee=>{G=Number.isNaN(ee)||Xe(ee)&&isNaN(ee.getTime())||qe(ee,M(l,N,ee))},$=Qr(r.mode),Q=Qr(r.reValidateMode);if(x){let ee,Oe;const qn=b.type?Zr(x._f):sl(v),$e=v.type===it.BLUR||v.type===it.FOCUS_OUT,Ol=!Go(x._f)&&!r.resolver&&!M(t.errors,N)&&!x._f.deps||Co($e,M(t.touchedFields,N),t.isSubmitted,Q,$),bt=na(N,s,$e);ne(l,N,qn),$e?(!b||!b.readOnly)&&(x._f.onBlur&&x._f.onBlur(v),u&&u(0)):x._f.onChange&&x._f.onChange(v);const Rt=A(N,qn,$e),Al=!Re(Rt)||bt;if(!$e&&f.state.next({name:N,type:v.type,values:me(l)}),Ol)return(d.isValid||m.isValid)&&(r.mode==="onBlur"?$e&&_():$e||_()),Al&&f.state.next({name:N,...bt?{}:Rt});if(!$e&&bt&&f.state.next({...t}),r.resolver){const{errors:Er}=await j([N]);if(D(qn),G){const Pl=ta(t.errors,n,N),pr=ta(Er,n,Pl.name||N);ee=pr.error,N=pr.name,Oe=Re(Er)}}else E([N],!0),ee=(await aa(x,s.disabled,l,g,r.shouldUseNativeValidation))[N],E([N]),D(qn),G&&(ee?Oe=!1:(d.isValid||m.isValid)&&(Oe=await q(n,!0)));G&&(x._f.deps&&I(x._f.deps),B(N,Oe,ee,Rt))}},F=(v,b)=>{if(M(t.errors,b)&&v.focus)return v.focus(),1},I=async(v,b={})=>{let N,G;const x=Pn(v);if(r.resolver){const D=await Y(ie(v)?v:x);N=Re(D),G=v?!x.some($=>M(D,$)):N}else v?(G=(await Promise.all(x.map(async D=>{const $=M(n,D);return await q($&&$._f?{[D]:$}:$)}))).every(Boolean),!(!G&&!t.isValid)&&_()):G=N=await q(n);return f.state.next({...!De(v)||(d.isValid||m.isValid)&&N!==t.isValid?{}:{name:v},...r.resolver||!v?{isValid:N}:{},errors:t.errors}),b.shouldFocus&&!G&&wn(n,F,v?x:s.mount),G},H=v=>{const b={...i.mount?l:a};return ie(v)?b:De(v)?M(b,v):v.map(N=>M(b,N))},z=(v,b)=>({invalid:!!M((b||t).errors,v),isDirty:!!M((b||t).dirtyFields,v),error:M((b||t).errors,v),isValidating:!!M(t.validatingFields,v),isTouched:!!M((b||t).touchedFields,v)}),W=v=>{v&&Pn(v).forEach(b=>oe(t.errors,b)),f.state.next({errors:v?t.errors:{}})},J=(v,b,N)=>{const G=(M(n,v,{_f:{}})._f||{}).ref,x=M(t.errors,v)||{},{ref:D,message:$,type:Q,...ee}=x;ne(t.errors,v,{...ee,...b,ref:G}),f.state.next({name:v,errors:t.errors,isValid:!1}),N&&N.shouldFocus&&G&&G.focus&&G.focus()},Le=(v,b)=>Fe(v)?f.state.subscribe({next:N=>"values"in N&&v(w(void 0,b),N)}):w(v,b,!0),ve=v=>f.state.subscribe({next:b=>{Uo(v.name,b.name,v.exact)&&qo(b,v.formState||d,Rn,v.reRenderRoot)&&v.callback({values:{...l},...t,...b,defaultValues:a})}}).unsubscribe,de=v=>(i.mount=!0,m={...m,...v.formState},ve({...v,formState:m})),le=(v,b={})=>{for(const N of v?Pn(v):s.mount)s.mount.delete(N),s.array.delete(N),b.keepValue||(oe(n,N),oe(l,N)),!b.keepError&&oe(t.errors,N),!b.keepDirty&&oe(t.dirtyFields,N),!b.keepTouched&&oe(t.touchedFields,N),!b.keepIsValidating&&oe(t.validatingFields,N),!r.shouldUnregister&&!b.keepDefaultValue&&oe(a,N);f.state.next({values:me(l)}),f.state.next({...t,...b.keepDirty?{isDirty:C()}:{}}),!b.keepIsValid&&_()},Z=({disabled:v,name:b})=>{(Te(v)&&i.mount||v||s.disabled.has(b))&&(v?s.disabled.add(b):s.disabled.delete(b))},re=(v,b={})=>{let N=M(n,v);const G=Te(b.disabled)||Te(r.disabled);return ne(n,v,{...N||{},_f:{...N&&N._f?N._f:{ref:{name:v}},name:v,mount:!0,...b}}),s.mount.add(v),N?Z({disabled:Te(b.disabled)?b.disabled:r.disabled,name:v}):O(v,!0,b.value),{...G?{disabled:b.disabled||r.disabled}:{},...r.progressive?{required:!!b.required,min:Sn(b.min),max:Sn(b.max),minLength:Sn(b.minLength),maxLength:Sn(b.maxLength),pattern:Sn(b.pattern)}:{},name:v,onChange:K,onBlur:K,ref:x=>{if(x){re(v,b),N=M(n,v);const D=ie(x.value)&&x.querySelectorAll&&x.querySelectorAll("input,select,textarea")[0]||x,$=Vo(D),Q=N._f.refs||[];if($?Q.find(ee=>ee===D):D===N._f.ref)return;ne(n,v,{_f:{...N._f,...$?{refs:[...Q.filter(Dt),D,...Array.isArray(M(a,v))?[{}]:[]],ref:{type:D.type,name:v}}:{ref:D}}}),O(v,!1,void 0,D)}else N=M(n,v,{}),N._f&&(N._f.mount=!1),(r.shouldUnregister||b.shouldUnregister)&&!(ul(s.array,v)&&i.action)&&s.unMount.add(v)}}},fe=()=>r.shouldFocusError&&wn(n,F,s.mount),Ee=v=>{Te(v)&&(f.state.next({disabled:v}),wn(n,(b,N)=>{const G=M(n,N);G&&(b.disabled=G._f.disabled||v,Array.isArray(G._f.refs)&&G._f.refs.forEach(x=>{x.disabled=G._f.disabled||v}))},0,!1))},pe=(v,b)=>async N=>{let G;N&&(N.preventDefault&&N.preventDefault(),N.persist&&N.persist());let x=me(l);if(f.state.next({isSubmitting:!0}),r.resolver){const{errors:D,values:$}=await j();t.errors=D,x=me($)}else await q(n);if(s.disabled.size)for(const D of s.disabled)oe(x,D);if(oe(t.errors,"root"),Re(t.errors)){f.state.next({errors:{}});try{await v(x,N)}catch(D){G=D}}else b&&await b({...t.errors},N),fe(),setTimeout(fe);if(f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Re(t.errors)&&!G,submitCount:t.submitCount+1,errors:t.errors}),G)throw G},We=(v,b={})=>{M(n,v)&&(ie(b.defaultValue)?V(v,me(M(a,v))):(V(v,b.defaultValue),ne(a,v,me(b.defaultValue))),b.keepTouched||oe(t.touchedFields,v),b.keepDirty||(oe(t.dirtyFields,v),t.isDirty=b.defaultValue?C(v,me(M(a,v))):C()),b.keepError||(oe(t.errors,v),d.isValid&&_()),f.state.next({...t}))},je=(v,b={})=>{const N=v?me(v):a,G=me(N),x=Re(v),D=x?a:G;if(b.keepDefaultValues||(a=N),!b.keepValues){if(b.keepDirtyValues){const $=new Set([...s.mount,...Object.keys(kn(a,l))]);for(const Q of Array.from($))M(t.dirtyFields,Q)?ne(D,Q,M(l,Q)):V(Q,M(D,Q))}else{if(ur&&ie(v))for(const $ of s.mount){const Q=M(n,$);if(Q&&Q._f){const ee=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(st(ee)){const Oe=ee.closest("form");if(Oe){Oe.reset();break}}}}if(b.keepFieldsRef)for(const $ of s.mount)V($,M(D,$));else n={}}l=r.shouldUnregister?b.keepDefaultValues?me(a):{}:me(D),f.array.next({values:{...D}}),f.state.next({values:{...D}})}s={mount:b.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!d.isValid||!!b.keepIsValid||!!b.keepDirtyValues,i.watch=!!r.shouldUnregister,f.state.next({submitCount:b.keepSubmitCount?t.submitCount:0,isDirty:x?!1:b.keepDirty?t.isDirty:!!(b.keepDefaultValues&&!qe(v,a)),isSubmitted:b.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:x?{}:b.keepDirtyValues?b.keepDefaultValues&&l?kn(a,l):t.dirtyFields:b.keepDefaultValues&&v?kn(a,v):b.keepDirty?t.dirtyFields:{},touchedFields:b.keepTouched?t.touchedFields:{},errors:b.keepErrors?t.errors:{},isSubmitSuccessful:b.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:a})},Me=(v,b)=>je(Fe(v)?v(l):v,b),bn=(v,b={})=>{const N=M(n,v),G=N&&N._f;if(G){const x=G.refs?G.refs[0]:G.ref;x.focus&&(x.focus(),b.shouldSelect&&Fe(x.select)&&x.select())}},Rn=v=>{t={...t,...v}},tn={control:{register:re,unregister:le,getFieldState:z,handleSubmit:pe,setError:J,_subscribe:ve,_runSchema:j,_focusError:fe,_getWatch:w,_getDirty:C,_setValid:_,_setFieldArray:h,_setDisabledField:Z,_setErrors:S,_getFieldArray:k,_reset:je,_resetDefaultValues:()=>Fe(r.defaultValues)&&r.defaultValues().then(v=>{Me(v,r.resetOptions),f.state.next({isLoading:!1})}),_removeUnmounted:U,_disableForm:Ee,_subjects:f,_proxyFormState:d,get _fields(){return n},get _formValues(){return l},get _state(){return i},set _state(v){i=v},get _defaultValues(){return a},get _names(){return s},set _names(v){s=v},get _formState(){return t},get _options(){return r},set _options(v){r={...r,...v}}},subscribe:de,trigger:I,register:re,handleSubmit:pe,watch:Le,setValue:V,getValues:H,reset:Me,resetField:We,clearErrors:W,unregister:le,setError:J,setFocus:bn,getFieldState:z};return{...tn,formControl:tn}}function Wo(e={}){const r=R.useRef(void 0),t=R.useRef(void 0),[n,a]=R.useState({isDirty:!1,isValidating:!1,isLoading:Fe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Fe(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:n},e.defaultValues&&!Fe(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=zo(e);r.current={...s,formState:n}}const l=r.current.control;return l._options=e,cr(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>a({...l._formState}),reRenderRoot:!0});return a(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),R.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),R.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),R.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),R.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),R.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==n.isDirty&&l._subjects.state.next({isDirty:i})}},[l,n.isDirty]),R.useEffect(()=>{e.values&&!qe(e.values,t.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),t.current=e.values,a(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),R.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),r.current.formState=ol(n,l),r.current}function Jo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var la={exports:{}},Nn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia;function Xo(){if(ia)return Nn;ia=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:l}}return Nn.Fragment=r,Nn.jsx=t,Nn.jsxs=t,Nn}var sa;function Zo(){return sa||(sa=1,la.exports=Xo()),la.exports}var ke=Zo();const Qo=({children:e})=>{const r=c.Children.toArray(e);return r.length===0?null:ke.jsx(ru,{variant:"warning",size:"small",children:ke.jsx(Ve,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:r.map(t=>ke.jsx(_e,{size:"small",children:t},ed(t)))})})},ed=e=>{if(c.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},Bn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};gn(Bn);const dt="var(--ax-bg-neutral-strong)",pl=4,nd=(e,r,t)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${dt};
    border-radius: ${pl}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${dt};
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
`,td=(e,r,t)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${dt};
    border-radius: ${pl}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${dt};
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
`,rd=(e,r,t,n)=>r?td(e,t,n):nd(e,t,n),ad=(e,r,t)=>t?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,ld=({children:e,alignOffset:r=0,alignLeft:t=!1,marginTop:n=0,marginLeft:a=0,hideBorder:l=!1})=>ke.jsxs(ke.Fragment,{children:[ke.jsx("style",{dangerouslySetInnerHTML:{__html:rd(r,t,n,a)}}),ke.jsx("div",{className:ad(r,t,l),children:e})]});var ua={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var oa;function id(){return oa||(oa=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n.call(this,s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,this&&this[s]||s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(ua)),ua.exports}var sd=id();const fr=Jo(sd),ud="_borderbox_1a0x6_1",od="_error_1a0x6_5",dd="_warning_1a0x6_8",md={borderbox:ud,error:od,warning:dd};fr.bind(md);const cd="_aksjonspunkt_11wjs_1",gd="_erAksjonspunktApent_11wjs_4",vd="_erIkkeGodkjentAvBeslutter_11wjs_8",fd={aksjonspunkt:cd,erAksjonspunktApent:gd,erIkkeGodkjentAvBeslutter:vd};fr.bind(fd);gn(Bn);gn(Bn);const _d="_divider_1jpov_1",Ed="_dividerParagraf_1jpov_8",pd="_leftPanel_1jpov_11",yd="_rightPanel_1jpov_14",bd={divider:_d,dividerParagraf:Ed,leftPanel:pd,rightPanel:yd};fr.bind(bd);const yl=()=>ke.jsx("span",{"data-testid":"editedIcon",children:ke.jsx(ci,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});gn(Bn);const Rd=gn(Bn),hd=({tekst:e,children:r})=>{const[t,n]=c.useState(!1);if(!e)return r;const a=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return ke.jsx(al,{content:Rd.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:ke.jsx("span",{"aria-hidden":"true",onClick:a,children:r??e})})},da={default:"_default_af3od_1",rød:"_rød_af3od_5"},Kt=({beløp:e,kr:r=!1,rød:t=!1})=>{const n=e?.toString().replace(/\s/g,"");return ke.jsx(hd,{tekst:n,children:ke.jsxs("span",{className:t?da.rød:da.default,children:[n?Na(n):"-",n&&r&&" kr"]})})};function Td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ma={exports:{}},On={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca;function kd(){if(ca)return On;ca=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:l}}return On.Fragment=r,On.jsx=t,On.jsxs=t,On}var ga;function Sd(){return ga||(ga=1,ma.exports=kd()),ma.exports}var be=Sd();const bl=e=>e.reduce((r,t,n)=>({...r,[n]:a=>t(a)||!0}),{}),Rl=(e,r)=>r.split(".").reduce((t,n)=>t!==void 0?t[n]:t,e)?.message;var Ht={exports:{}},Nd=Ht.exports,va;function Od(){return va||(va=1,function(e,r){(function(t,n){e.exports=n()})(Nd,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,u={},o=function(E){return(E=+E)+(E>68?1900:2e3)},d=function(E){return function(h){this[E]=+h}},m=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var y=h.match(/([+-]|\d\d)/g),S=60*y[1]+(+y[2]||0);return S===0?0:y[0]==="+"?-S:S}(E)}],f=function(E){var h=u[E];return h&&(h.indexOf?h:h.s.concat(h.f))},g=function(E,h){var y,S=u.meridiem;if(S){for(var O=1;O<=24;O+=1)if(E.indexOf(S(O,0,h))>-1){y=O>12;break}}else y=E===(h?"pm":"PM");return y},p={A:[s,function(E){this.afternoon=g(E,!1)}],a:[s,function(E){this.afternoon=g(E,!0)}],Q:[a,function(E){this.month=3*(E-1)+1}],S:[a,function(E){this.milliseconds=100*+E}],SS:[l,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[l,d("day")],Do:[s,function(E){var h=u.ordinal,y=E.match(/\d+/);if(this.day=y[0],h)for(var S=1;S<=31;S+=1)h(S).replace(/\[|\]/g,"")===E&&(this.day=S)}],w:[i,d("week")],ww:[l,d("week")],M:[i,d("month")],MM:[l,d("month")],MMM:[s,function(E){var h=f("months"),y=(f("monthsShort")||h.map(function(S){return S.slice(0,3)})).indexOf(E)+1;if(y<1)throw new Error;this.month=y%12||y}],MMMM:[s,function(E){var h=f("months").indexOf(E)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,d("year")],YY:[l,function(E){this.year=o(E)}],YYYY:[/\d{4}/,d("year")],Z:m,ZZ:m};function _(E){var h,y;h=E,y=u&&u.formats;for(var S=(E=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(U,C,w){var k=w&&w.toUpperCase();return C||y[w]||t[w]||y[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(T,L,V){return L||V.slice(1)})})).match(n),O=S.length,A=0;A<O;A+=1){var B=S[A],j=p[B],Y=j&&j[0],q=j&&j[1];S[A]=q?{regex:Y,parser:q}:B.replace(/^\[|\]$/g,"")}return function(U){for(var C={},w=0,k=0;w<O;w+=1){var T=S[w];if(typeof T=="string")k+=T.length;else{var L=T.regex,V=T.parser,K=U.slice(k),F=L.exec(K)[0];V.call(C,F),U=U.replace(F,"")}}return function(I){var H=I.afternoon;if(H!==void 0){var z=I.hours;H?z<12&&(I.hours+=12):z===12&&(I.hours=0),delete I.afternoon}}(C),C}}return function(E,h,y){y.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(o=E.parseTwoDigitYear);var S=h.prototype,O=S.parse;S.parse=function(A){var B=A.date,j=A.utc,Y=A.args;this.$u=j;var q=Y[1];if(typeof q=="string"){var U=Y[2]===!0,C=Y[3]===!0,w=U||C,k=Y[2];C&&(k=Y[2]),u=this.$locale(),!U&&k&&(u=y.Ls[k]),this.$d=function(K,F,I,H){try{if(["x","X"].indexOf(F)>-1)return new Date((F==="X"?1e3:1)*K);var z=_(F)(K),W=z.year,J=z.month,Le=z.day,ve=z.hours,de=z.minutes,le=z.seconds,Z=z.milliseconds,re=z.zone,fe=z.week,Ee=new Date,pe=Le||(W||J?1:Ee.getDate()),We=W||Ee.getFullYear(),je=0;W&&!J||(je=J>0?J-1:Ee.getMonth());var Me,bn=ve||0,Rn=de||0,Gn=le||0,tn=Z||0;return re?new Date(Date.UTC(We,je,pe,bn,Rn,Gn,tn+60*re.offset*1e3)):I?new Date(Date.UTC(We,je,pe,bn,Rn,Gn,tn)):(Me=new Date(We,je,pe,bn,Rn,Gn,tn),fe&&(Me=H(Me).week(fe).toDate()),Me)}catch{return new Date("")}}(B,q,j,y),this.init(),k&&k!==!0&&(this.$L=this.locale(k).$L),w&&B!=this.format(q)&&(this.$d=new Date("")),u={}}else if(q instanceof Array)for(var T=q.length,L=1;L<=T;L+=1){Y[1]=q[L-1];var V=y.apply(this,Y);if(V.isValid()){this.$d=V.$d,this.$L=V.$L,this.init();break}L===T&&(this.$d=new Date(""))}else O.call(this,A)}}})}(Ht)),Ht.exports}var Ad=Od();const Pd=Td(Ad),wd="_textarea_14c7r_1",Ld="_readOnlyField_14c7r_7",fa={textarea:wd,readOnlyField:Ld},Id=e=>e!=null&&e!=="",Fd=({label:e,value:r,isEdited:t=!1,type:n,hideLabel:a,size:l})=>Id(r)?be.jsxs(Ve,{gap:"space-4",children:[e&&!a&&be.jsx(fn,{size:l,children:e}),be.jsxs(un,{gap:"space-8",align:"center",wrap:!1,children:[be.jsx(Xt,{className:n==="textarea"?fa.textarea:fa.readOnlyField,size:l,children:r}),t&&be.jsx(yl,{})]})]}):null;ln.extend(Pd);const Dd=({label:e,description:r,validate:t=[],onChange:n,children:a,className:l,isReadOnly:i=!1,size:s="small",isEdited:u=!1,hideLegend:o=!1,...d})=>{const{name:m,control:f}=d,{formState:{errors:g}}=nn(),{field:p}=ml({name:m,control:f,rules:{validate:bl(t)}});return be.jsx(ho,{name:m,value:p.value!==void 0?p.value:null,legend:be.jsxs(un,{justify:"center",gap:"space-8",children:[e,i&&u&&be.jsx(yl,{})]}),hideLegend:o,disabled:i,description:r,size:s,error:Rl(g,m),onChange:_=>{n&&n(_),p.onChange(_)},className:l,children:a})},Kd="_textAreaFieldWithBadges_bdz0b_1",Vd="_etikettWrapper_bdz0b_4",_a={textAreaFieldWithBadges:Kd,etikettWrapper:Vd},$t=({name:e,control:r,label:t,readOnly:n,maxLength:a,badges:l,validate:i=[],parse:s=g=>g,className:u,description:o,isEdited:d,size:m="small",...f})=>{const{formState:{errors:g}}=nn(),{field:p}=ml({name:e,control:r,rules:{validate:c.useMemo(()=>bl(i),[i])}});return n?be.jsx(Fd,{size:m,label:t,value:p.value,type:"textarea",isEdited:d,hideLabel:f.hideLabel}):be.jsxs("div",{className:l?_a.textAreaFieldWithBadges:null,children:[l&&be.jsx("div",{className:_a.etikettWrapper,children:l.map(({type:_,titleText:E})=>be.jsx(fo,{variant:_,size:"small",children:E},E))}),be.jsx(Po,{size:m,label:t,description:o,className:u,autoComplete:"off",...p,onChange:_=>p.onChange(_.currentTarget.value!==""?s(_.currentTarget.value):null),value:p.value?p.value:"",error:Rl(g,e),maxLength:a,...f})]})},xd=({formMethods:e,onSubmit:r,children:t,className:n,setDataOnUnmount:a})=>{const{handleSubmit:l,getValues:i}=e;return c.useEffect(()=>()=>{a&&a(i())},[]),be.jsx(Io,{...e,children:be.jsx("form",{className:n,onSubmit:r?l(s=>r(s)):void 0,children:t})})},jd="_readMore_mcbzv_1",Md={readMore:jd},Bd=Oa(3),Gd=Aa(1500),pn=({readOnly:e,aksjonspunkt:r})=>{const t=Wt(),{control:n}=nn();return!r||r.definisjon!==se.KONTROLLER_STOR_ETTERBETALING_SØKER?null:P.jsxs(Ve,{gap:"space-16",children:[P.jsx(Xa,{header:P.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreTittel"}),className:Md.readMore,children:P.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreInnhold"})}),P.jsx($t,{name:"begrunnelseEtterbetaling",control:n,label:t.formatMessage({id:"Simulering.Etterbetaling.Vurdering"}),validate:[Jn,Bd,Gd,jt],maxLength:1500,size:"medium",readOnly:e})]})};pn.initialValues=e=>{if(!(!e||e.definisjon!==se.KONTROLLER_STOR_ETTERBETALING_SØKER))return{begrunnelseEtterbetaling:e.begrunnelse??""}};pn.transformValues=e=>({kode:se.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:e.begrunnelseEtterbetaling});pn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},alias:"Aksjonspunkt"}}],returns:{type:{name:"union",raw:"EtterbetalingSøkerFormValues | undefined",elements:[{name:"signature",type:"object",raw:`{
  begrunnelseEtterbetaling?: string;
}`,signature:{properties:[{key:"begrunnelseEtterbetaling",value:{name:"string",required:!1}}]}},{name:"undefined"}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelseEtterbetaling?: string;
}`,signature:{properties:[{key:"begrunnelseEtterbetaling",value:{name:"string",required:!1}}]},alias:"EtterbetalingSøkerFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}}}],displayName:"EtterbetalingSøkerForm",props:{aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const qd="_summaryTitle_1leg0_1",Ud="_infoSummary_1leg0_5",Cd="_ingenPerioder_1leg0_13",Hd="_number_1leg0_17",An={summaryTitle:qd,infoSummary:Ud,ingenPerioder:Cd,number:Hd},hl=({fom:e,tom:r,feilutbetaling:t,etterbetaling:n,inntrekk:a,ingenPerioderMedAvvik:l})=>P.jsxs(Ve,{gap:"space-16",children:[P.jsx(_e,{size:"small",className:An.summaryTitle,children:P.jsx(ae,{id:"Simulering.bruker"})}),P.jsxs("div",{className:An.infoSummary,children:[l&&P.jsx("div",{className:An.ingenPerioder,children:P.jsx(ae,{id:"Simulering.ingenPerioder"})}),!l&&P.jsxs(Ve,{gap:"space-16",children:[P.jsx(fn,{size:"small",children:Il(e,r)}),P.jsxs(un,{gap:"space-16",children:[P.jsxs(_e,{size:"small",children:[P.jsx(ae,{id:"Simulering.etterbetaling"}),":"]}),P.jsx(_e,{size:"small",children:P.jsx(Kt,{beløp:n})})]}),P.jsxs(un,{gap:"space-16",children:[P.jsxs(_e,{size:"small",children:[P.jsx(ae,{id:"Simulering.tilbakekreving"}),":"]}),P.jsx(_e,{weight:"semibold",size:"small",className:An.number,children:P.jsx(Kt,{beløp:t,rød:t<0})})]}),a!=null&&P.jsxs(un,{gap:"space-16",children:[P.jsxs(_e,{size:"small",children:[P.jsx(ae,{id:"Simulering.inntrekk"}),":"]}),P.jsx(_e,{weight:"semibold",size:"small",className:An.number,children:P.jsx(Kt,{beløp:a,rød:a<0})})]})]})]})]});hl.__docgenInfo={description:"Simulering oppsummering",methods:[],displayName:"SimuleringSummary",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},etterbetaling:{required:!0,tsType:{name:"number"},description:""},inntrekk:{required:!1,tsType:{name:"number"},description:""},ingenPerioderMedAvvik:{required:!1,tsType:{name:"boolean"},description:""}}};var Vt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ea;function $d(){return Ea||(Ea=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n.call(this,s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,this&&this[s]||s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(Vt)),Vt.exports}var Yd=$d();const zd=Ta(Yd),Wd="_invisibleButton_1u9o7_1",Jd={invisibleButton:Wd},Xd=e=>e?"Simulering.headerText.VisFærreDetaljer":"Simulering.headerText.VisFlereDetaljer",Tl=({toggleDetails:e,showDetails:r,mottakerIndex:t})=>P.jsxs("button",{type:"button",className:Jd.invisibleButton,onClick:()=>e(t),children:[P.jsx(ae,{id:Xd(r)}),r?P.jsx(li,{}):P.jsx(Qt,{})]});Tl.__docgenInfo={description:"",methods:[],displayName:"CollapseButton",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"boolean"},description:""},mottakerIndex:{required:!0,tsType:{name:"number"},description:""}}};const Zd="_tableWrapper_piqyx_1",Qd="_simuleringTable_piqyx_5",em="_rodTekst_piqyx_5",nm="_lastColumn_piqyx_9",tm="_nextPeriod_piqyx_17",rm="_normalPeriod_piqyx_23",Yt={tableWrapper:Zd,simuleringTable:Qd,rodTekst:em,lastColumn:nm,nextPeriod:tm,normalPeriod:rm},kl=zd.bind(Yt),Ln={DIFFERANSE:"differanse",INNTREKKNESTEMÅNED:"inntrekkNesteMåned"},Sl=({simuleringResultat:e,toggleDetails:r,showDetails:t,ingenPerioderMedAvvik:n,arbeidsgiverOpplysningerPerId:a})=>P.jsx(P.Fragment,{children:e.perioderPerMottaker.map((l,i)=>{const s=mm(n,e.periode.fom,l),u=l.nesteUtbPeriode.tom,o=t.find(m=>m.id===i),d=um(n,l.resultatPerFagområde,l.resultatOgMotregningRader);return P.jsxs("div",{className:Yt.tableWrapper,children:[sm(l,a),P.jsxs(ce,{className:Yt.simuleringTable,children:[P.jsx(ce.Header,{children:P.jsxs(ce.Row,{children:[am(l.resultatPerFagområde)?P.jsx(ce.HeaderCell,{scope:"col",children:P.jsx(Tl,{toggleDetails:r,mottakerIndex:i,showDetails:o?o.show:!1},`collapseButton-${s.length}`)}):P.jsx(ce.HeaderCell,{}),s.map(m=>P.jsx(ce.HeaderCell,{scope:"col",className:kl({nextPeriod:pa(m,u),normalPeriod:!pa(m,u)}),children:P.jsx(ae,{id:`Simulering.headerText.${m.month}`})},`${m.month}-${m.year}`))]})}),P.jsxs(ce.Body,{children:[l.resultatPerFagområde.map((m,f)=>m.rader.filter(g=>{const p=g.feltnavn===Ln.DIFFERANSE,_=ya(m,p);return!lm(_,o?o.show:!1)}).map((g,p)=>{const _=g.feltnavn===Ln.DIFFERANSE,h=ya(m,_)?"dashed 1px var(--ax-neutral-300)":"solid 1px var(--ax-neutral-300)";return P.jsxs(ce.Row,{children:[P.jsx(ce.DataCell,{style:_||n?{fontWeight:"bold",borderBottom:h}:{borderBottom:h},children:P.jsx(ae,{id:`Simulering.${m.fagOmrådeKode}.${g.feltnavn}`})}),ba(g.resultaterPerMåned,s,u,h)]},`rowIndex${f+1}${p+1}`)})),d.map((m,f)=>P.jsxs(ce.Row,{children:[P.jsx(ce.DataCell,{style:m.feltnavn!==Ln.INNTREKKNESTEMÅNED?{fontWeight:"bold"}:{},children:P.jsx(ae,{id:`Simulering.${m.feltnavn}`})}),ba(m.resultaterPerMåned,s,u)]},`rowIndex${f+1}`))]})]},`tableIndex${i+1}`)]},`tableIndex${i+1}`)})}),pa=(e,r)=>`${e.month}${e.year}`===(r?ln(r).format("MMMMYY"):!1),am=e=>e.some(r=>r.rader.length>1),ya=(e,r)=>!!e.rader.find(n=>n.feltnavn===Ln.DIFFERANSE)&&!r,lm=(e,r)=>e&&!r,ba=(e,r,t,n)=>{const a=`${ln(t).format("MMMMYY")}`;return r.map(i=>e.find(u=>ln(u.periode.tom).format("MMMMYY").toLowerCase()===`${i.month}${i.year}`)||{måned:`${i.month}${i.year}`,beløp:null}).map((i,s)=>P.jsx(ce.DataCell,{style:{borderBottom:n},className:kl({rodTekst:!i.beløp||i.beløp<0,lastColumn:"måned"in i?i.måned===a:ln(i.periode.tom).format("MMMMYY")===a}),children:i.beløp?Na(i.beløp):"-"},`columnIndex${s+1}`))},im=(e,r)=>{const t=e.mottakerIdentifikator?r[e.mottakerIdentifikator]:void 0;return t?`${t.navn} (${e.mottakerNummer})`:`${e.mottakerNummer}`},sm=(e,r)=>e.mottakerType===In.ARBG||e.mottakerType===In.ARBGP?P.jsx(Ia,{size:"xsmall",level:"3",children:im(e,r)}):null,um=(e,r,t)=>e?r.length>1?t.filter(n=>n.feltnavn!==Ln.INNTREKKNESTEMÅNED):[]:t,om=(e,r)=>!!(e&&r===In.BRUKER),dm=(e,r)=>e||r,mm=(e,r,t)=>{const n=om(e,t.mottakerType)?ln(t.nesteUtbPeriode.tom).subtract(1,"months").format():dm(r,t.nesteUtbPeriode.fom);return Fl(n,t.nesteUtbPeriode.tom)};Sl.__docgenInfo={description:"",methods:[],displayName:"SimuleringTable",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  show: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"show",value:{name:"boolean",required:!0}}]}}],raw:"Details[]"},description:""},simuleringResultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"sumEtterbetaling",value:{name:"number",required:!0}},{key:"sumFeilutbetaling",value:{name:"number",required:!0}},{key:"sumInntrekk",value:{name:"number",required:!0}},{key:"ingenPerioderMedAvvik",value:{name:"boolean",required:!0}},{key:"perioderPerMottaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"string",required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"resultatPerFagområde",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"fagOmrådeKode",value:{name:"string",required:!0}},{key:"rader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>`}],raw:"SimuleringResultatPerFagområde[]",required:!0}},{key:"resultatOgMotregningRader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>`}],raw:"Mottaker[]",required:!0}}]}}],raw:`Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>`},description:""},ingenPerioderMedAvvik:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const cm="_helpTextImage_151dm_1",gm="_varsel_151dm_17",vm="_bold_151dm_23",xt={helpTextImage:cm,varsel:gm,bold:vm},Ra=Oa(3),ha=Aa(1500),_r="IKKE_SEND",yn=({readOnly:e,språkkode:r,previewCallback:t,aksjonspunkt:n,fagsak:a})=>{const l=Wt(),{watch:i,control:s}=nn(),u=i("varseltekst"),o=i("videreBehandling"),d=a.fagsakYtelseType==="FP",m=f=>{t({mottaker:"",fritekst:u??" "}),f.preventDefault()};return!n||n.definisjon!==se.VURDER_FEILUTBETALING?null:P.jsxs(Ve,{gap:"space-40",align:"start",children:[P.jsx($t,{name:"begrunnelse",control:s,label:l.formatMessage({id:"Simulering.vurdering"}),validate:[Jn,Ra,ha,jt],maxLength:1500,readOnly:e}),P.jsx(Dd,{name:"videreBehandling",control:s,label:P.jsx(ae,{id:"Simulering.videreBehandling"}),validate:[Jn],isReadOnly:e,children:P.jsxs(Ve,{gap:"space-2",children:[P.jsx(Ft,{value:Ue.TILBAKEKR_OPPRETT,size:"small",children:P.jsx(ae,{id:"Simulering.gjennomfør"})}),o===Ue.TILBAKEKR_OPPRETT&&P.jsx("div",{className:xt.varsel,children:P.jsx(ld,{alignOffset:20,children:P.jsxs(Ve,{gap:"space-16",children:[P.jsxs(un,{gap:"space-8",children:[P.jsx(_e,{size:"small",className:xt.bold,children:P.jsx(ae,{id:"Simulering.varseltekst"})}),P.jsx(al,{content:d?l.formatMessage({id:"Simulering.HjelpetekstForeldrepenger"}):l.formatMessage({id:"Simulering.HjelpetekstEngangsstonad"}),children:P.jsx(vi,{className:xt.helpTextImage})})]}),P.jsx($t,{name:"varseltekst",control:s,label:l.formatMessage({id:"Simulering.fritekst"}),validate:[Jn,Ra,ha,jt],maxLength:1500,readOnly:e,parse:Kl,badges:[{type:"info",titleText:Dl(r)}]}),!e&&P.jsx(zu,{href:"#",onClick:m,children:P.jsx(ae,{id:"Messages.PreviewText"})})]})})}),P.jsx(Ft,{value:`${Ue.TILBAKEKR_OPPRETT}${_r}`,size:"small",children:P.jsx(ae,{id:"Simulering.OpprettMenIkkeSendVarsel"})}),P.jsx(Ft,{value:Ue.TILBAKEKR_IGNORER,size:"small",children:P.jsx(ae,{id:"Simulering.avvent"})})]})})]})};yn.initialValues=(e,r)=>!e||!r?void 0:{videreBehandling:!r.varseltekst&&r.videreBehandling===Ue.TILBAKEKR_OPPRETT?r.videreBehandling+_r:r.videreBehandling,varseltekst:r.varseltekst,begrunnelse:e.begrunnelse??""};yn.transformValues=e=>{const{videreBehandling:r,varseltekst:t,begrunnelse:n}=e;return r?.endsWith(_r)?{kode:se.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:Ue.TILBAKEKR_OPPRETT}:{kode:se.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:r,varseltekst:t}};yn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},alias:"Aksjonspunkt"}},{name:"tilbakekrevingvalg",optional:!0,type:{name:"signature",type:"object",raw:`{
  grunnerTilReduksjon?: boolean;
  videreBehandling: foreldrepenger_behandlingslager_behandling_tilbakekreving_TilbakekrevingVidereBehandling;
  varseltekst?: string;
}`,signature:{properties:[{key:"grunnerTilReduksjon",value:{name:"boolean",required:!1}},{key:"videreBehandling",value:{name:"union",raw:`| '-'
| 'TILBAKEKR_OPPRETT'
| 'TILBAKEKR_IGNORER'
| 'TILBAKEKR_INNTREKK'
| 'TILBAKEKR_OPPDATER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'TILBAKEKR_OPPRETT'"},{name:"literal",value:"'TILBAKEKR_IGNORER'"},{name:"literal",value:"'TILBAKEKR_INNTREKK'"},{name:"literal",value:"'TILBAKEKR_OPPDATER'"}],required:!0}},{key:"varseltekst",value:{name:"string",required:!1}}]},alias:"TilbakekrevingValg"}}],returns:{type:{name:"union",raw:"FeilutbetalingFormValues | undefined",elements:[{name:"signature",type:"object",raw:`{
  videreBehandling: string;
  varseltekst?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},{name:"undefined"}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  videreBehandling: string;
  varseltekst?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FeilutbetalingFormValues"}}],returns:{type:{name:"intersection",raw:`{
  videreBehandling: string;
  varseltekst?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FEILUTBETALING>`,elements:[{name:"signature",type:"object",raw:`{
  videreBehandling: string;
  varseltekst?: string;
}`,signature:{properties:[{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}}}],displayName:"TilbakekrevSøkerForm",props:{fagsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]},required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}}]}},description:""},språkkode:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const Nl=({simuleringResultat:e,previewFptilbakeCallback:r,tilbakekrevingvalg:t,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:a,submitCallback:l,isReadOnly:i,harÅpentAksjonspunkt:s,fagsak:u,behandling:o}=Vl(),{mellomlagretFormData:d,setMellomlagretFormData:m}=xl(),f=Wo({defaultValues:d??Em(a,t)}),{formState:g}=f,[p,_]=c.useState([]),E=t!==void 0&&t.videreBehandling===Ue.TILBAKEKR_OPPDATER,h=fm(p,_),y=e?.simuleringResultat,S=on(se.VURDER_FEILUTBETALING,a)||on(se.KONTROLLER_STOR_ETTERBETALING_SØKER,a),O=s?pm(a):[];return P.jsxs(Ve,{gap:"space-32",children:[P.jsx(Ia,{size:"small",level:"2",children:P.jsx(ae,{id:"Simulering.Title"})}),y&&P.jsxs(P.Fragment,{children:[O.length>0&&O.map(A=>P.jsx("div",{children:P.jsx(Qo,{children:A})},A.key)),P.jsx(hl,{fom:y.periode.fom,tom:y.periode.tom,feilutbetaling:y.sumFeilutbetaling,etterbetaling:y.sumEtterbetaling,inntrekk:y.sumInntrekk,ingenPerioderMedAvvik:y.ingenPerioderMedAvvik}),P.jsx(Sl,{arbeidsgiverOpplysningerPerId:n,showDetails:p,toggleDetails:h,simuleringResultat:y,ingenPerioderMedAvvik:y.ingenPerioderMedAvvik}),E&&P.jsx(fn,{size:"small",children:P.jsx(ae,{id:"Simulering.ApenTilbakekrevingsbehandling"})})]}),!e&&P.jsx(ae,{id:"Simulering.ingenData"}),S&&P.jsx(xd,{formMethods:f,onSubmit:A=>l(_m(A,a)),setDataOnUnmount:m,children:P.jsxs(Ve,{gap:"space-16",children:[P.jsx(yn,{aksjonspunkt:mt(a,se.VURDER_FEILUTBETALING),fagsak:u,previewCallback:r,readOnly:i,språkkode:o.språkkode}),P.jsx(pn,{readOnly:i,aksjonspunkt:mt(a,se.KONTROLLER_STOR_ETTERBETALING_SØKER)}),P.jsx("div",{children:P.jsx(za,{size:"small",variant:"primary",disabled:!g.isDirty||g.isSubmitting||i,loading:g.isSubmitting,children:P.jsx(ae,{id:"SubmitButton.ConfirmInformation"})})})]})})]})},mt=(e,r)=>e.find(t=>t.definisjon===r),fm=(e,r)=>t=>{const n=e.findIndex(l=>l.id===t);let a=[];if(n!==-1){const l={id:t,show:!e[n].show};a=[...e.slice(0,n),l,...e.slice(n+1,e.length-1)]}else a=e.concat({id:t,show:!0});r(a)},_m=(e,r)=>{const t=[];return on(se.VURDER_FEILUTBETALING,r)&&"videreBehandling"in e&&t.push(yn.transformValues(e)),on(se.KONTROLLER_STOR_ETTERBETALING_SØKER,r)&&"begrunnelseEtterbetaling"in e&&t.push(pn.transformValues(e)),t},Em=(e,r)=>{if(e.length!==0)return{...yn.initialValues(mt(e,se.VURDER_FEILUTBETALING),r),...pn.initialValues(mt(e,se.KONTROLLER_STOR_ETTERBETALING_SØKER))}},pm=e=>{const r=[];return on(se.VURDER_FEILUTBETALING,e)&&r.push(P.jsx(ae,{id:"Simulering.AksjonspunktHelpText.5084"},"vurderFeilutbetaling")),on(se.KONTROLLER_STOR_ETTERBETALING_SØKER,e)&&r.push(P.jsx(ae,{id:"Simulering.Etterbetaling.Tittel"},"kontrollerFeilutbetaling")),r};Nl.__docgenInfo={description:"",methods:[],displayName:"SimuleringPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},simuleringResultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  simuleringResultat: DetaljertSimuleringResultat;
  simuleringResultatUtenInntrekk: DetaljertSimuleringResultat;
  slåttAvInntrekk: boolean;
}`,signature:{properties:[{key:"simuleringResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"sumEtterbetaling",value:{name:"number",required:!0}},{key:"sumFeilutbetaling",value:{name:"number",required:!0}},{key:"sumInntrekk",value:{name:"number",required:!0}},{key:"ingenPerioderMedAvvik",value:{name:"boolean",required:!0}},{key:"perioderPerMottaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"string",required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"resultatPerFagområde",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"fagOmrådeKode",value:{name:"string",required:!0}},{key:"rader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>`}],raw:"SimuleringResultatPerFagområde[]",required:!0}},{key:"resultatOgMotregningRader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>`}],raw:"Mottaker[]",required:!0}}]}}],raw:`Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>`,required:!0}},{key:"simuleringResultatUtenInntrekk",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"sumEtterbetaling",value:{name:"number",required:!0}},{key:"sumFeilutbetaling",value:{name:"number",required:!0}},{key:"sumInntrekk",value:{name:"number",required:!0}},{key:"ingenPerioderMedAvvik",value:{name:"boolean",required:!0}},{key:"perioderPerMottaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"string",required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"resultatPerFagområde",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"fagOmrådeKode",value:{name:"string",required:!0}},{key:"rader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>`}],raw:"SimuleringResultatPerFagområde[]",required:!0}},{key:"resultatOgMotregningRader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>`}],raw:"Mottaker[]",required:!0}}]}}],raw:`Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>`,required:!0}},{key:"slåttAvInntrekk",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  simuleringResultat: DetaljertSimuleringResultat;
  simuleringResultatUtenInntrekk: DetaljertSimuleringResultat;
  slåttAvInntrekk: boolean;
}>`},description:""},tilbakekrevingvalg:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  grunnerTilReduksjon?: boolean;
  videreBehandling: foreldrepenger_behandlingslager_behandling_tilbakekreving_TilbakekrevingVidereBehandling;
  varseltekst?: string;
}`,signature:{properties:[{key:"grunnerTilReduksjon",value:{name:"boolean",required:!1}},{key:"videreBehandling",value:{name:"union",raw:`| '-'
| 'TILBAKEKR_OPPRETT'
| 'TILBAKEKR_IGNORER'
| 'TILBAKEKR_INNTREKK'
| 'TILBAKEKR_OPPDATER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'TILBAKEKR_OPPRETT'"},{name:"literal",value:"'TILBAKEKR_IGNORER'"},{name:"literal",value:"'TILBAKEKR_INNTREKK'"},{name:"literal",value:"'TILBAKEKR_OPPDATER'"}],required:!0}},{key:"varseltekst",value:{name:"string",required:!1}}]}},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const ym={"Simulering.Title":"Simulering","Simulering.FP.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FP.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FP.differanse":"Foreldrepenger avvik","Simulering.FPREF.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FPREF.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FPREF.differanse":"Foreldrepenger avvik","Simulering.OM.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OM.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OM.differanse":"Omsorgspenger avvik","Simulering.OMREF.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OMREF.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OMREF.differanse":"Omsorgspenger avvik","Simulering.OOP.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOP.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOP.differanse":"Pleiepenger avvik","Simulering.OOPREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOPREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOPREF.differanse":"Pleiepenger avvik","Simulering.OPP.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPP.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPP.differanse":"Opplæringspenger avvik","Simulering.OPPREF.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPPREF.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPPREF.differanse":"Opplæringspenger avvik","Simulering.PB.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PB.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PB.differanse":"Pleiepenger avvik","Simulering.PBREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PBREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PBREF.differanse":"Pleiepenger avvik","Simulering.PN.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PN.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PN.differanse":"Pleiepenger avvik","Simulering.PNREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PNREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PNREF.differanse":"Pleiepenger avvik","Simulering.REFUTG.nyttBeløp":"Engangstønad nytt beløp","Simulering.REFUTG.tidligereUtbetalt":"Engangstønad tidligere utbetalt","Simulering.REFUTG.differanse":"Engangstønad avvik","Simulering.SP.nyttBeløp":"Sykepenger nytt beløp","Simulering.SP.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SP.differanse":"Sykepenger avvik","Simulering.SPREF.nyttBeløp":"Sykepenger nytt beløp","Simulering.SPREF.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SPREF.differanse":"Sykepenger avvik","Simulering.SVP.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVP.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVP.differanse":"Svangerskapspenger avvik","Simulering.SVPREF.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVPREF.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVPREF.differanse":"Svangerskapspenger avvik","Simulering.resultatEtterMotregning":"Resultat etter motregning mellom ytelser","Simulering.inntrekk":"Inntrekk","Simulering.inntrekkNesteMåned":"Inntrekk i neste måned","Simulering.tilbakekreving":"Feilutbetaling","Simulering.etterbetaling":"Etterbetaling","Simulering.resultat":"Resultat","Simulering.avregnetBeløp":"Avregnet beløp","Simulering.headerText.VisFærreDetaljer":"Vis færre detaljer","Simulering.headerText.VisFlereDetaljer":"Vis flere detaljer","Simulering.headerText.januar":"Jan","Simulering.headerText.februar":"Feb","Simulering.headerText.mars":"Mars","Simulering.headerText.april":"Apr","Simulering.headerText.mai":"Mai","Simulering.headerText.juni":"Jun","Simulering.headerText.juli":"Jul","Simulering.headerText.august":"Aug","Simulering.headerText.september":"Sep","Simulering.headerText.oktober":"Okt","Simulering.headerText.november":"Nov","Simulering.headerText.desember":"Des","Simulering.ingenData":"Ingen informasjon om simulering mottatt fra økonomiløsningen.","Simulering.ingenPerioder":"Ingen periode med avvik","Simulering.AksjonspunktHelpText.5084":"Vurder videre behandling av tilbakekreving","Simulering.vurdering":"Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre","Simulering.videreBehandling":"Fastsett videre behandling","Simulering.gjennomfør":"Opprett tilbakekreving, send varsel","Simulering.OpprettMenIkkeSendVarsel":"Opprett tilbakekreving, ikke send varsel","Simulering.Opprett":"Opprett tilbakekreving","Simulering.avvent":"Avvent samordning, ingen tilbakekreving","Simulering.formAlternativ.ja":"Ja","Simulering.formAlternativ.nei":"Nei","Simulering.bruker":"Bruker","Simulering.varseltekst":"Send varsel om tilbakekreving","Simulering.fritekst":"Fritekst i varselet","Simulering.HjelpetekstForeldrepenger":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav. Eksempel på tekst: «Vi mottok melding fra deg [dato]om at du hadde jobbet heltid. Du kan ikke jobbe og motta foreldrepenger samtidig. Da vi mottok meldingen fra deg, var det allerede utbetalt foreldrenger for perioden du har jobbet.","Simulering.HjelpetekstEngangsstonad":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav.","Simulering.ApenTilbakekrevingsbehandling":"Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.","Simulering.Etterbetaling.Tittel":"Ny inntektsmelding vil føre til en høy etterbetaling til bruker i en tidligere innvilget periode. Kontroller om dette er riktig","Simulering.Etterbetaling.ReadMoreTittel":"Dette bør undersøkes rundt etterbetalingen","Simulering.Etterbetaling.ReadMoreInnhold":"Saken stopper i simulering fordi arbeidsgiver har endret sitt refusjonskrav, eller har endret fra refusjon til direkte utbetaling i en periode som allerede har blitt utbetalt til bruker. I tillegg er etterbetalingen høy. Du må kontrollerer om dette er riktig. Dette kan gjøres ved å kontakte arbeidsgiver. Er det feil, må de sende inn ny inntektsmelding. Får du ikke tak i arbeidsgiver, kan du kontakte søker og høre om de kan spørre arbeidsgiveren sin.","Simulering.Etterbetaling.Vurdering":"Begrunn hvorfor du går videre med denne behandlingen.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","Messages.PreviewText":"Forhåndsvis varselbrev"},bm=gn(ym),zt=e=>P.jsx(jl,{value:bm,children:P.jsx(Nl,{...e})});zt.__docgenInfo={description:"",methods:[],displayName:"SimuleringProsessIndex",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},simuleringResultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  simuleringResultat: DetaljertSimuleringResultat;
  simuleringResultatUtenInntrekk: DetaljertSimuleringResultat;
  slåttAvInntrekk: boolean;
}`,signature:{properties:[{key:"simuleringResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"sumEtterbetaling",value:{name:"number",required:!0}},{key:"sumFeilutbetaling",value:{name:"number",required:!0}},{key:"sumInntrekk",value:{name:"number",required:!0}},{key:"ingenPerioderMedAvvik",value:{name:"boolean",required:!0}},{key:"perioderPerMottaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"string",required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"resultatPerFagområde",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"fagOmrådeKode",value:{name:"string",required:!0}},{key:"rader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>`}],raw:"SimuleringResultatPerFagområde[]",required:!0}},{key:"resultatOgMotregningRader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>`}],raw:"Mottaker[]",required:!0}}]}}],raw:`Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>`,required:!0}},{key:"simuleringResultatUtenInntrekk",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"sumEtterbetaling",value:{name:"number",required:!0}},{key:"sumFeilutbetaling",value:{name:"number",required:!0}},{key:"sumInntrekk",value:{name:"number",required:!0}},{key:"ingenPerioderMedAvvik",value:{name:"boolean",required:!0}},{key:"perioderPerMottaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"string",required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"resultatPerFagområde",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"fagOmrådeKode",value:{name:"string",required:!0}},{key:"rader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>`}],raw:"SimuleringResultatPerFagområde[]",required:!0}},{key:"resultatOgMotregningRader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>`}],raw:"Mottaker[]",required:!0}}]}}],raw:`Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>`,required:!0}},{key:"slåttAvInntrekk",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  simuleringResultat: DetaljertSimuleringResultat;
  simuleringResultatUtenInntrekk: DetaljertSimuleringResultat;
  slåttAvInntrekk: boolean;
}>`},description:""},tilbakekrevingvalg:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  grunnerTilReduksjon?: boolean;
  videreBehandling: foreldrepenger_behandlingslager_behandling_tilbakekreving_TilbakekrevingVidereBehandling;
  varseltekst?: string;
}`,signature:{properties:[{key:"grunnerTilReduksjon",value:{name:"boolean",required:!1}},{key:"videreBehandling",value:{name:"union",raw:`| '-'
| 'TILBAKEKR_OPPRETT'
| 'TILBAKEKR_IGNORER'
| 'TILBAKEKR_INNTREKK'
| 'TILBAKEKR_OPPDATER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'TILBAKEKR_OPPRETT'"},{name:"literal",value:"'TILBAKEKR_IGNORER'"},{name:"literal",value:"'TILBAKEKR_INNTREKK'"},{name:"literal",value:"'TILBAKEKR_OPPDATER'"}],required:!0}},{key:"varseltekst",value:{name:"string",required:!1}}]}},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const{action:Rm}=__STORYBOOK_MODULE_ACTIONS__,hm={123:{erPrivatPerson:!1,identifikator:"123",referanse:"123",navn:"test"}},Tm={simuleringResultat:{periode:{fom:"2019-01-01",tom:"2019-03-31"},sumEtterbetaling:0,sumFeilutbetaling:-49863,sumInntrekk:-10899,ingenPerioderMedAvvik:!1,perioderPerMottaker:[{mottakerType:In.ARBG,mottakerIdentifikator:"123",mottakerNummer:"test",resultatPerFagområde:[{fagOmrådeKode:"FP",rader:[{feltnavn:"nyttBeløp",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:52619}]},{feltnavn:"tidligereUtbetalt",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:61795}]},{feltnavn:"differanse",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-9176}]}]}],resultatOgMotregningRader:[{feltnavn:"inntrekkNesteMåned",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:0}]},{feltnavn:"resultat",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-26486}]}],nesteUtbPeriode:{fom:"2019-10-01",tom:"2019-10-31"}}]},slåttAvInntrekk:!1},Am={title:"prosess/prosess-simulering",component:zt,decorators:[Ml,Bl],args:{arbeidsgiverOpplysningerPerId:hm,simuleringResultat:Tm,previewFptilbakeCallback:Rm("button-click")},render:e=>P.jsx(zt,{...e})},$n={args:{aksjonspunkterForPanel:[{definisjon:se.VURDER_FEILUTBETALING,begrunnelse:null,status:Jt.OPPRETTET}]}},Yn={args:{aksjonspunkterForPanel:[{definisjon:se.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:null,status:Jt.OPPRETTET}]}},zn={args:{aksjonspunkterForPanel:[{definisjon:se.VURDER_FEILUTBETALING,begrunnelse:null,status:Jt.OPPRETTET},{definisjon:se.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:null}]}},Wn={args:{aksjonspunkterForPanel:[],tilbakekrevingvalg:{videreBehandling:Ue.TILBAKEKR_OPPDATER,varseltekst:"varsel-eksempel"}}};$n.parameters={...$n.parameters,docs:{...$n.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse: null,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...$n.parameters?.docs?.source}}};Yn.parameters={...Yn.parameters,docs:{...Yn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      begrunnelse: null,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...Yn.parameters?.docs?.source}}};zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse: null,
      status: AksjonspunktStatus.OPPRETTET
    }, {
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      begrunnelse: null
    }] as Aksjonspunkt[]
  }
}`,...zn.parameters?.docs?.source}}};Wn.parameters={...Wn.parameters,docs:{...Wn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    tilbakekrevingvalg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
      varseltekst: 'varsel-eksempel'
    } as TilbakekrevingValg
  }
}`,...Wn.parameters?.docs?.source}}};const Pm=["AksjonspunktVurderFeilutbetaling","AksjonspunktKontrollerEtterbetaling","AksjonspunktVurderFeilutbetalingOgEtterbetaling","SimuleringspanelUtenAksjonspunkt"];export{Yn as AksjonspunktKontrollerEtterbetaling,$n as AksjonspunktVurderFeilutbetaling,zn as AksjonspunktVurderFeilutbetalingOgEtterbetaling,Wn as SimuleringspanelUtenAksjonspunkt,Pm as __namedExportsOrder,Am as default};
