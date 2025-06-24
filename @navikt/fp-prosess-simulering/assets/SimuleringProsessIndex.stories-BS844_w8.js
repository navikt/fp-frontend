import{g as Fa,r as c,u as zt,_ as yr,s as br,c as Nn,a as X,b as E,d as zi,e as Wt,T as Wi,S as ut,R as Da,f as Va,q as Yi,P as qa,h as an,i as ze,j,t as Ji,w as Xi,F as Zi,W as Qi,k as el,l as nl,m as tl,n as rl,o as al,p as il,A as Yt}from"./iframe-BDmr9jpY.js";import{r as ll}from"./index-B71fu7Jg.js";var Ca=ll();const Lt=Fa(Ca);function sl(e,t){var r=e.values,n=yr(e,["values"]),a=t.values,i=yr(t,["values"]);return br(a,r)&&br(n,i)}function Ba(e){var t=zt(),r=t.formatMessage,n=t.textComponent,a=n===void 0?c.Fragment:n,i=e.id,l=e.description,s=e.defaultMessage,o=e.values,u=e.children,d=e.tagName,f=d===void 0?a:d,p=e.ignoreTag,m={id:i,description:l,defaultMessage:s},b=r(m,o,{ignoreTag:p});return typeof u=="function"?u(Array.isArray(b)?b:[b]):f?c.createElement(f,null,b):c.createElement(c.Fragment,null,b)}Ba.displayName="FormattedMessage";var ae=c.memo(Ba,sl);ae.displayName="MemoizedFormattedMessage";var oe=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(oe||{});const dn=(e,t)=>t.some(r=>r.definisjon===e);var jn=(e=>(e.ARBG="ARBG_ORG",e.ARBGP="ARBG_PRIV",e.BRUKER="BRUKER",e))(jn||{}),We=(e=>(e.TILBAKEKR_OPPRETT="TILBAKEKR_OPPRETT",e.TILBAKEKR_IGNORER="TILBAKEKR_IGNORER",e.TILBAKEKR_INNTREKK="TILBAKEKR_INNTREKK",e.TILBAKEKR_OPPDATER="TILBAKEKR_OPPDATER",e))(We||{});const gn=e=>Nn({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var ol=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Jt=c.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:i,truncate:l,weight:s="regular",align:o,visuallyHidden:u,textColor:d}=e,f=ol(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=X();return E.createElement(a,Object.assign({},f,{ref:t,className:p(r,"navds-body-long",`navds-body-long--${n}`,gn({spacing:i,truncate:l,weight:s,align:o,visuallyHidden:u,textColor:d}))}))});var ul=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ye=c.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:i,truncate:l,weight:s="regular",align:o,visuallyHidden:u,textColor:d}=e,f=ul(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=X();return E.createElement(a,Object.assign({},f,{ref:t,className:p(r,"navds-body-short",`navds-body-short--${n}`,gn({spacing:i,truncate:l,weight:s,align:o,visuallyHidden:u,textColor:d}))}))});var dl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const cl=c.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:a,uppercase:i,as:l="p",truncate:s,weight:o="regular",align:u,visuallyHidden:d,textColor:f}=e,p=dl(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=X();return E.createElement(l,Object.assign({},p,{ref:t,className:m(r,"navds-detail",gn({spacing:a,truncate:s,weight:o,align:u,visuallyHidden:d,textColor:f,uppercase:i}),{"navds-detail--small":n==="small"})}))});var fl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ka=c.forwardRef((e,t)=>{var{children:r,className:n,size:a,spacing:i,as:l="p",showIcon:s=!1}=e,o=fl(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=X();return E.createElement(l,Object.assign({},o,{ref:t,className:u("navds-error-message","navds-label",n,gn({spacing:i}),{"navds-label--small":a==="small","navds-error-message--show-icon":s})}),s&&E.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var ml=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const $a=c.forwardRef((e,t)=>{var{level:r="1",size:n,className:a,as:i,spacing:l,align:s,visuallyHidden:o,textColor:u}=e,d=ml(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:f}=X(),p=i??`h${r}`;return E.createElement(p,Object.assign({},d,{ref:t,className:f(a,"navds-heading",`navds-heading--${n}`,gn({spacing:l,align:s,visuallyHidden:o,textColor:u}))}))});var gl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};c.forwardRef((e,t)=>{var{className:r,spacing:n,as:a="p"}=e,i=gl(e,["className","spacing","as"]);const{cn:l}=X();return E.createElement(a,Object.assign({},i,{ref:t,className:l(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var pl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const pn=c.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="label",spacing:i,visuallyHidden:l,textColor:s}=e,o=pl(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=X();return E.createElement(a,Object.assign({},o,{ref:t,className:u(r,"navds-label",gn({spacing:i,visuallyHidden:l,textColor:s}),{"navds-label--small":n==="small"})}))});function Ga(e,t=166,r=!1){let n;function a(...i){const l=()=>{n=void 0,e.apply(this,i)};!n&&r&&l(),clearTimeout(n),n=setTimeout(l,t)}return a.clear=()=>{clearTimeout(n)},a}function Ke(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}const hr=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};let kr=0;function vl(e){const[t,r]=c.useState(e),n=e||t;return c.useEffect(()=>{t==null&&(kr+=1,r(`aksel-id-${kr}`))},[t]),n}const Er=E.useId;function Je(e){var t;if(Er!==void 0){const r=Er();return e??r.replace(/(:)/g,"")}return(t=vl(e))!==null&&t!==void 0?t:""}function Rr(e,t=[]){const r=c.useRef(e);return c.useEffect(()=>{r.current=e}),c.useCallback((...n)=>{var a;return(a=r.current)===null||a===void 0?void 0:a.call(r,...n)},t)}function Xt({value:e,defaultValue:t,onChange:r}){const n=Rr(r),[a,i]=c.useState(t),l=e!==void 0,s=l?e:a,o=Rr(u=>{const f=typeof u=="function"?u(s):u;l||i(f),n(f)},[l,n,s]);return[s,o]}let wr=0;function yl(e){const[t,r]=c.useState(e),n=e||t;return c.useEffect(()=>{t==null&&(wr+=1,r(`aksel-icon-${wr}`))},[t]),n}const Or=E.useId;function Se(e){var t;return Or!==void 0?Or().replace(/(:)/g,""):(t=yl(e))!==null&&t!==void 0?t:""}var bl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const hl=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=bl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var kl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const El=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=kl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Rl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Zt=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Rl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var wl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ol=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=wl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var _l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Sl=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=_l(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Tl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const xl=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Tl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Pl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ua=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Pl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var jl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Al=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=jl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Nl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Il=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Nl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var Ll=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ml=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Ll(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var Fl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Dl=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Fl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var Vl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ql=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Vl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Cl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Bl=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Cl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?c.createElement("title",{id:i},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function dt(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}const[Lf,Kl]=zi({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function ht(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function kn(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,s=r!=null&&r.width?String(r.width):l;a=e.formattingValues[s]||e.formattingValues[l]}else{const l=e.defaultWidth,s=r!=null&&r.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[l]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}function En(e){return(t,r={})=>{const n=r.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const l=i[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(s)?Gl(s,f=>f.test(l)):$l(s,f=>f.test(l));let u;u=e.valueCallback?e.valueCallback(o):o,u=r.valueCallback?r.valueCallback(u):u;const d=t.slice(l.length);return{value:u,rest:d}}}function $l(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function Gl(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Ul(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0],i=t.match(e.parsePattern);if(!i)return null;let l=e.valueCallback?e.valueCallback(i[0]):i[0];l=r.valueCallback?r.valueCallback(l):l;const s=t.slice(a.length);return{value:l,rest:s}}}const Hl={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},zl=(e,t,r)=>{let n;const a=Hl[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},Wl={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Yl={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Jl={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Xl={date:ht({formats:Wl,defaultWidth:"full"}),time:ht({formats:Yl,defaultWidth:"full"}),dateTime:ht({formats:Jl,defaultWidth:"full"})},Zl={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Ql=(e,t,r,n)=>Zl[e],es={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},ns={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},ts={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},rs={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},as={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},is=(e,t)=>Number(e)+".",ls={ordinalNumber:is,era:kn({values:es,defaultWidth:"wide"}),quarter:kn({values:ns,defaultWidth:"wide",argumentCallback:e=>e-1}),month:kn({values:ts,defaultWidth:"wide"}),day:kn({values:rs,defaultWidth:"wide"}),dayPeriod:kn({values:as,defaultWidth:"wide"})},ss=/^(\d+)\.?/i,os=/\d+/i,us={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ds={any:[/^f/i,/^e/i]},cs={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},fs={any:[/1/i,/2/i,/3/i,/4/i]},ms={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},gs={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},ps={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},vs={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},ys={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},bs={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},hs={ordinalNumber:Ul({matchPattern:ss,parsePattern:os,valueCallback:e=>parseInt(e,10)}),era:En({matchPatterns:us,defaultMatchWidth:"wide",parsePatterns:ds,defaultParseWidth:"any"}),quarter:En({matchPatterns:cs,defaultMatchWidth:"wide",parsePatterns:fs,defaultParseWidth:"any",valueCallback:e=>e+1}),month:En({matchPatterns:ms,defaultMatchWidth:"wide",parsePatterns:gs,defaultParseWidth:"any"}),day:En({matchPatterns:ps,defaultMatchWidth:"wide",parsePatterns:vs,defaultParseWidth:"any"}),dayPeriod:En({matchPatterns:ys,defaultMatchWidth:"any",parsePatterns:bs,defaultParseWidth:"any"})},ks={code:"nb",formatDistance:zl,formatLong:Xl,formatRelative:Ql,localize:ls,match:hs,options:{weekStartsOn:1,firstWeekContainsDate:4}},Es={global:{dateLocale:ks,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Rs=c.createContext({locale:Es}),Ha=()=>c.useContext(Rs);var ws=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Os=c.forwardRef((e,t)=>{var r,n,a,{rootElement:i,asChild:l}=e,s=ws(e,["rootElement","asChild"]);const o=Wt(!1),u=(r=Ha())===null||r===void 0?void 0:r.rootElement,d=(n=i??u)!==null&&n!==void 0?n:(a=globalThis==null?void 0:globalThis.document)===null||a===void 0?void 0:a.body,f=l?ut:"div";return o?d?Lt.createPortal(E.createElement(Wi,{theme:o.theme,asChild:!0,hasBackground:!1},E.createElement(f,Object.assign({ref:t,"data-aksel-portal":""},s))),d):null:d?Lt.createPortal(E.createElement(f,Object.assign({ref:t,"data-aksel-portal":""},s)),d):null}),cn=Math.min,en=Math.max,Xn=Math.round,Bn=Math.floor,Me=e=>({x:e,y:e}),_s={left:"right",right:"left",bottom:"top",top:"bottom"},Ss={start:"end",end:"start"};function Mt(e,t,r){return en(e,cn(t,r))}function In(e,t){return typeof e=="function"?e(t):e}function tn(e){return e.split("-")[0]}function Ln(e){return e.split("-")[1]}function za(e){return e==="x"?"y":"x"}function Qt(e){return e==="y"?"height":"width"}function fn(e){return["top","bottom"].includes(tn(e))?"y":"x"}function er(e){return za(fn(e))}function Ts(e,t,r){r===void 0&&(r=!1);const n=Ln(e),a=er(e),i=Qt(a);let l=a==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Zn(l)),[l,Zn(l)]}function xs(e){const t=Zn(e);return[Ft(e),t,Ft(t)]}function Ft(e){return e.replace(/start|end/g,t=>Ss[t])}function Ps(e,t,r){const n=["left","right"],a=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return r?t?a:n:t?n:a;case"left":case"right":return t?i:l;default:return[]}}function js(e,t,r,n){const a=Ln(e);let i=Ps(tn(e),r==="start",n);return a&&(i=i.map(l=>l+"-"+a),t&&(i=i.concat(i.map(Ft)))),i}function Zn(e){return e.replace(/left|right|bottom|top/g,t=>_s[t])}function As(e){return{top:0,right:0,bottom:0,left:0,...e}}function Wa(e){return typeof e!="number"?As(e):{top:e,right:e,bottom:e,left:e}}function Qn(e){const{x:t,y:r,width:n,height:a}=e;return{width:n,height:a,top:r,left:t,right:t+n,bottom:r+a,x:t,y:r}}function _r(e,t,r){let{reference:n,floating:a}=e;const i=fn(t),l=er(t),s=Qt(l),o=tn(t),u=i==="y",d=n.x+n.width/2-a.width/2,f=n.y+n.height/2-a.height/2,p=n[s]/2-a[s]/2;let m;switch(o){case"top":m={x:d,y:n.y-a.height};break;case"bottom":m={x:d,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:f};break;case"left":m={x:n.x-a.width,y:f};break;default:m={x:n.x,y:n.y}}switch(Ln(t)){case"start":m[l]-=p*(r&&u?-1:1);break;case"end":m[l]+=p*(r&&u?-1:1);break}return m}const Ns=async(e,t,r)=>{const{placement:n="bottom",strategy:a="absolute",middleware:i=[],platform:l}=r,s=i.filter(Boolean),o=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:a}),{x:d,y:f}=_r(u,n,o),p=n,m={},b=0;for(let y=0;y<s.length;y++){const{name:v,fn:w}=s[y],{x:h,y:R,data:T,reset:x}=await w({x:d,y:f,initialPlacement:n,placement:p,strategy:a,middlewareData:m,rects:u,platform:l,elements:{reference:e,floating:t}});d=h??d,f=R??f,m={...m,[v]:{...m[v],...T}},x&&b<=50&&(b++,typeof x=="object"&&(x.placement&&(p=x.placement),x.rects&&(u=x.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:a}):x.rects),{x:d,y:f}=_r(u,p,o)),y=-1)}return{x:d,y:f,placement:p,strategy:a,middlewareData:m}};async function Ya(e,t){var r;t===void 0&&(t={});const{x:n,y:a,platform:i,rects:l,elements:s,strategy:o}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=In(t,e),b=Wa(m),v=s[p?f==="floating"?"reference":"floating":f],w=Qn(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(v)))==null||r?v:v.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:d,strategy:o})),h=f==="floating"?{x:n,y:a,width:l.floating.width,height:l.floating.height}:l.reference,R=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),T=await(i.isElement==null?void 0:i.isElement(R))?await(i.getScale==null?void 0:i.getScale(R))||{x:1,y:1}:{x:1,y:1},x=Qn(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:h,offsetParent:R,strategy:o}):h);return{top:(w.top-x.top+b.top)/T.y,bottom:(x.bottom-w.bottom+b.bottom)/T.y,left:(w.left-x.left+b.left)/T.x,right:(x.right-w.right+b.right)/T.x}}const Is=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:a,rects:i,platform:l,elements:s,middlewareData:o}=t,{element:u,padding:d=0}=In(e,t)||{};if(u==null)return{};const f=Wa(d),p={x:r,y:n},m=er(a),b=Qt(m),y=await l.getDimensions(u),v=m==="y",w=v?"top":"left",h=v?"bottom":"right",R=v?"clientHeight":"clientWidth",T=i.reference[b]+i.reference[m]-p[m]-i.floating[b],x=p[m]-i.reference[m],G=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let V=G?G[R]:0;(!V||!await(l.isElement==null?void 0:l.isElement(G)))&&(V=s.floating[R]||i.floating[b]);const z=T/2-x/2,B=V/2-y[b]/2-1,K=cn(f[w],B),$=cn(f[h],B),P=K,_=V-y[b]-$,O=V/2-y[b]/2+z,A=Mt(P,O,_),F=!o.arrow&&Ln(a)!=null&&O!==A&&i.reference[b]/2-(O<P?K:$)-y[b]/2<0,M=F?O<P?O-P:O-_:0;return{[m]:p[m]+M,data:{[m]:A,centerOffset:O-A-M,...F&&{alignmentOffset:M}},reset:F}}}),Ls=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:a,middlewareData:i,rects:l,initialPlacement:s,platform:o,elements:u}=t,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...v}=In(e,t);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const w=tn(a),h=fn(s),R=tn(s)===s,T=await(o.isRTL==null?void 0:o.isRTL(u.floating)),x=p||(R||!y?[Zn(s)]:xs(s)),G=b!=="none";!p&&G&&x.push(...js(s,y,b,T));const V=[s,...x],z=await Ya(t,v),B=[];let K=((n=i.flip)==null?void 0:n.overflows)||[];if(d&&B.push(z[w]),f){const O=Ts(a,l,T);B.push(z[O[0]],z[O[1]])}if(K=[...K,{placement:a,overflows:B}],!B.every(O=>O<=0)){var $,P;const O=((($=i.flip)==null?void 0:$.index)||0)+1,A=V[O];if(A)return{data:{index:O,overflows:K},reset:{placement:A}};let F=(P=K.filter(M=>M.overflows[0]<=0).sort((M,I)=>M.overflows[1]-I.overflows[1])[0])==null?void 0:P.placement;if(!F)switch(m){case"bestFit":{var _;const M=(_=K.filter(I=>{if(G){const N=fn(I.placement);return N===h||N==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(N=>N>0).reduce((N,U)=>N+U,0)]).sort((I,N)=>I[1]-N[1])[0])==null?void 0:_[0];M&&(F=M);break}case"initialPlacement":F=s;break}if(a!==F)return{reset:{placement:F}}}return{}}}};async function Ms(e,t){const{placement:r,platform:n,elements:a}=e,i=await(n.isRTL==null?void 0:n.isRTL(a.floating)),l=tn(r),s=Ln(r),o=fn(r)==="y",u=["left","top"].includes(l)?-1:1,d=i&&o?-1:1,f=In(t,e);let{mainAxis:p,crossAxis:m,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return s&&typeof b=="number"&&(m=s==="end"?b*-1:b),o?{x:m*d,y:p*u}:{x:p*u,y:m*d}}const Fs=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:a,y:i,placement:l,middlewareData:s}=t,o=await Ms(t,e);return l===((r=s.offset)==null?void 0:r.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:a+o.x,y:i+o.y,data:{...o,placement:l}}}}},Ds=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:a}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:v=>{let{x:w,y:h}=v;return{x:w,y:h}}},...o}=In(e,t),u={x:r,y:n},d=await Ya(t,o),f=fn(tn(a)),p=za(f);let m=u[p],b=u[f];if(i){const v=p==="y"?"top":"left",w=p==="y"?"bottom":"right",h=m+d[v],R=m-d[w];m=Mt(h,m,R)}if(l){const v=f==="y"?"top":"left",w=f==="y"?"bottom":"right",h=b+d[v],R=b-d[w];b=Mt(h,b,R)}const y=s.fn({...t,[p]:m,[f]:b});return{...y,data:{x:y.x-r,y:y.y-n,enabled:{[p]:i,[f]:l}}}}}};function ct(){return typeof window<"u"}function vn(e){return Ja(e)?(e.nodeName||"").toLowerCase():"#document"}function Re(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Fe(e){var t;return(t=(Ja(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ja(e){return ct()?e instanceof Node||e instanceof Re(e).Node:!1}function te(e){return ct()?e instanceof Element||e instanceof Re(e).Element:!1}function _e(e){return ct()?e instanceof HTMLElement||e instanceof Re(e).HTMLElement:!1}function et(e){return!ct()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Re(e).ShadowRoot}function Mn(e){const{overflow:t,overflowX:r,overflowY:n,display:a}=je(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(a)}function Vs(e){return["table","td","th"].includes(vn(e))}function ft(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function nr(e){const t=mt(),r=te(e)?je(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function qs(e){let t=$e(e);for(;_e(t)&&!Be(t);){if(nr(t))return t;if(ft(t))return null;t=$e(t)}return null}function mt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Be(e){return["html","body","#document"].includes(vn(e))}function je(e){return Re(e).getComputedStyle(e)}function gt(e){return te(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $e(e){if(vn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||et(e)&&e.host||Fe(e);return et(t)?t.host:t}function Xa(e){const t=$e(e);return Be(t)?e.ownerDocument?e.ownerDocument.body:e.body:_e(t)&&Mn(t)?t:Xa(t)}function Ye(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const a=Xa(e),i=a===((n=e.ownerDocument)==null?void 0:n.body),l=Re(a);if(i){const s=Dt(l);return t.concat(l,l.visualViewport||[],Mn(a)?a:[],s&&r?Ye(s):[])}return t.concat(a,Ye(a,[],r))}function Dt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Za(e){const t=je(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const a=_e(e),i=a?e.offsetWidth:r,l=a?e.offsetHeight:n,s=Xn(r)!==i||Xn(n)!==l;return s&&(r=i,n=l),{width:r,height:n,$:s}}function tr(e){return te(e)?e:e.contextElement}function un(e){const t=tr(e);if(!_e(t))return Me(1);const r=t.getBoundingClientRect(),{width:n,height:a,$:i}=Za(t);let l=(i?Xn(r.width):r.width)/n,s=(i?Xn(r.height):r.height)/a;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const Cs=Me(0);function Qa(e){const t=Re(e);return!mt()||!t.visualViewport?Cs:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Bs(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Re(e)?!1:t}function rn(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const a=e.getBoundingClientRect(),i=tr(e);let l=Me(1);t&&(n?te(n)&&(l=un(n)):l=un(e));const s=Bs(i,r,n)?Qa(i):Me(0);let o=(a.left+s.x)/l.x,u=(a.top+s.y)/l.y,d=a.width/l.x,f=a.height/l.y;if(i){const p=Re(i),m=n&&te(n)?Re(n):n;let b=p,y=Dt(b);for(;y&&n&&m!==b;){const v=un(y),w=y.getBoundingClientRect(),h=je(y),R=w.left+(y.clientLeft+parseFloat(h.paddingLeft))*v.x,T=w.top+(y.clientTop+parseFloat(h.paddingTop))*v.y;o*=v.x,u*=v.y,d*=v.x,f*=v.y,o+=R,u+=T,b=Re(y),y=Dt(b)}}return Qn({width:d,height:f,x:o,y:u})}function rr(e,t){const r=gt(e).scrollLeft;return t?t.left+r:rn(Fe(e)).left+r}function ei(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),a=n.left+t.scrollLeft-(r?0:rr(e,n)),i=n.top+t.scrollTop;return{x:a,y:i}}function Ks(e){let{elements:t,rect:r,offsetParent:n,strategy:a}=e;const i=a==="fixed",l=Fe(n),s=t?ft(t.floating):!1;if(n===l||s&&i)return r;let o={scrollLeft:0,scrollTop:0},u=Me(1);const d=Me(0),f=_e(n);if((f||!f&&!i)&&((vn(n)!=="body"||Mn(l))&&(o=gt(n)),_e(n))){const m=rn(n);u=un(n),d.x=m.x+n.clientLeft,d.y=m.y+n.clientTop}const p=l&&!f&&!i?ei(l,o,!0):Me(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-o.scrollLeft*u.x+d.x+p.x,y:r.y*u.y-o.scrollTop*u.y+d.y+p.y}}function $s(e){return Array.from(e.getClientRects())}function Gs(e){const t=Fe(e),r=gt(e),n=e.ownerDocument.body,a=en(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=en(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-r.scrollLeft+rr(e);const s=-r.scrollTop;return je(n).direction==="rtl"&&(l+=en(t.clientWidth,n.clientWidth)-a),{width:a,height:i,x:l,y:s}}function Us(e,t){const r=Re(e),n=Fe(e),a=r.visualViewport;let i=n.clientWidth,l=n.clientHeight,s=0,o=0;if(a){i=a.width,l=a.height;const u=mt();(!u||u&&t==="fixed")&&(s=a.offsetLeft,o=a.offsetTop)}return{width:i,height:l,x:s,y:o}}function Hs(e,t){const r=rn(e,!0,t==="fixed"),n=r.top+e.clientTop,a=r.left+e.clientLeft,i=_e(e)?un(e):Me(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,o=a*i.x,u=n*i.y;return{width:l,height:s,x:o,y:u}}function Sr(e,t,r){let n;if(t==="viewport")n=Us(e,r);else if(t==="document")n=Gs(Fe(e));else if(te(t))n=Hs(t,r);else{const a=Qa(e);n={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return Qn(n)}function ni(e,t){const r=$e(e);return r===t||!te(r)||Be(r)?!1:je(r).position==="fixed"||ni(r,t)}function zs(e,t){const r=t.get(e);if(r)return r;let n=Ye(e,[],!1).filter(s=>te(s)&&vn(s)!=="body"),a=null;const i=je(e).position==="fixed";let l=i?$e(e):e;for(;te(l)&&!Be(l);){const s=je(l),o=nr(l);!o&&s.position==="fixed"&&(a=null),(i?!o&&!a:!o&&s.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Mn(l)&&!o&&ni(e,l))?n=n.filter(d=>d!==l):a=s,l=$e(l)}return t.set(e,n),n}function Ws(e){let{element:t,boundary:r,rootBoundary:n,strategy:a}=e;const l=[...r==="clippingAncestors"?ft(t)?[]:zs(t,this._c):[].concat(r),n],s=l[0],o=l.reduce((u,d)=>{const f=Sr(t,d,a);return u.top=en(f.top,u.top),u.right=cn(f.right,u.right),u.bottom=cn(f.bottom,u.bottom),u.left=en(f.left,u.left),u},Sr(t,s,a));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function Ys(e){const{width:t,height:r}=Za(e);return{width:t,height:r}}function Js(e,t,r){const n=_e(t),a=Fe(t),i=r==="fixed",l=rn(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const o=Me(0);if(n||!n&&!i)if((vn(t)!=="body"||Mn(a))&&(s=gt(t)),n){const p=rn(t,!0,i,t);o.x=p.x+t.clientLeft,o.y=p.y+t.clientTop}else a&&(o.x=rr(a));const u=a&&!n&&!i?ei(a,s):Me(0),d=l.left+s.scrollLeft-o.x-u.x,f=l.top+s.scrollTop-o.y-u.y;return{x:d,y:f,width:l.width,height:l.height}}function kt(e){return je(e).position==="static"}function Tr(e,t){if(!_e(e)||je(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Fe(e)===r&&(r=r.ownerDocument.body),r}function ti(e,t){const r=Re(e);if(ft(e))return r;if(!_e(e)){let a=$e(e);for(;a&&!Be(a);){if(te(a)&&!kt(a))return a;a=$e(a)}return r}let n=Tr(e,t);for(;n&&Vs(n)&&kt(n);)n=Tr(n,t);return n&&Be(n)&&kt(n)&&!nr(n)?r:n||qs(e)||r}const Xs=async function(e){const t=this.getOffsetParent||ti,r=this.getDimensions,n=await r(e.floating);return{reference:Js(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Zs(e){return je(e).direction==="rtl"}const Qs={convertOffsetParentRelativeRectToViewportRelativeRect:Ks,getDocumentElement:Fe,getClippingRect:Ws,getOffsetParent:ti,getElementRects:Xs,getClientRects:$s,getDimensions:Ys,getScale:un,isElement:te,isRTL:Zs};function ri(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function eo(e,t){let r=null,n;const a=Fe(e);function i(){var s;clearTimeout(n),(s=r)==null||s.disconnect(),r=null}function l(s,o){s===void 0&&(s=!1),o===void 0&&(o=1),i();const u=e.getBoundingClientRect(),{left:d,top:f,width:p,height:m}=u;if(s||t(),!p||!m)return;const b=Bn(f),y=Bn(a.clientWidth-(d+p)),v=Bn(a.clientHeight-(f+m)),w=Bn(d),R={rootMargin:-b+"px "+-y+"px "+-v+"px "+-w+"px",threshold:en(0,cn(1,o))||1};let T=!0;function x(G){const V=G[0].intersectionRatio;if(V!==o){if(!T)return l();V?l(!1,V):n=setTimeout(()=>{l(!1,1e-7)},1e3)}V===1&&!ri(u,e.getBoundingClientRect())&&l(),T=!1}try{r=new IntersectionObserver(x,{...R,root:a.ownerDocument})}catch{r=new IntersectionObserver(x,R)}r.observe(e)}return l(!0),i}function xr(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:o=!1}=n,u=tr(e),d=a||i?[...u?Ye(u):[],...Ye(t)]:[];d.forEach(w=>{a&&w.addEventListener("scroll",r,{passive:!0}),i&&w.addEventListener("resize",r)});const f=u&&s?eo(u,r):null;let p=-1,m=null;l&&(m=new ResizeObserver(w=>{let[h]=w;h&&h.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var R;(R=m)==null||R.observe(t)})),r()}),u&&!o&&m.observe(u),m.observe(t));let b,y=o?rn(e):null;o&&v();function v(){const w=rn(e);y&&!ri(y,w)&&r(),y=w,b=requestAnimationFrame(v)}return r(),()=>{var w;d.forEach(h=>{a&&h.removeEventListener("scroll",r),i&&h.removeEventListener("resize",r)}),f==null||f(),(w=m)==null||w.disconnect(),m=null,o&&cancelAnimationFrame(b)}}const no=Fs,to=Ds,ro=Ls,Pr=Is,ao=(e,t,r)=>{const n=new Map,a={platform:Qs,...r},i={...a.platform,_c:n};return Ns(e,t,{...a,platform:i})};var Wn=typeof document<"u"?c.useLayoutEffect:c.useEffect;function nt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!nt(e[n],t[n]))return!1;return!0}if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,a[n]))return!1;for(n=r;n--!==0;){const i=a[n];if(!(i==="_owner"&&e.$$typeof)&&!nt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function ai(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function jr(e,t){const r=ai(e);return Math.round(t*r)/r}function Et(e){const t=c.useRef(e);return Wn(()=>{t.current=e}),t}function io(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:a,elements:{reference:i,floating:l}={},transform:s=!0,whileElementsMounted:o,open:u}=e,[d,f]=c.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=c.useState(n);nt(p,n)||m(n);const[b,y]=c.useState(null),[v,w]=c.useState(null),h=c.useCallback(I=>{I!==G.current&&(G.current=I,y(I))},[]),R=c.useCallback(I=>{I!==V.current&&(V.current=I,w(I))},[]),T=i||b,x=l||v,G=c.useRef(null),V=c.useRef(null),z=c.useRef(d),B=o!=null,K=Et(o),$=Et(a),P=Et(u),_=c.useCallback(()=>{if(!G.current||!V.current)return;const I={placement:t,strategy:r,middleware:p};$.current&&(I.platform=$.current),ao(G.current,V.current,I).then(N=>{const U={...N,isPositioned:P.current!==!1};O.current&&!nt(z.current,U)&&(z.current=U,Ca.flushSync(()=>{f(U)}))})},[p,t,r,$,P]);Wn(()=>{u===!1&&z.current.isPositioned&&(z.current.isPositioned=!1,f(I=>({...I,isPositioned:!1})))},[u]);const O=c.useRef(!1);Wn(()=>(O.current=!0,()=>{O.current=!1}),[]),Wn(()=>{if(T&&(G.current=T),x&&(V.current=x),T&&x){if(K.current)return K.current(T,x,_);_()}},[T,x,_,K,B]);const A=c.useMemo(()=>({reference:G,floating:V,setReference:h,setFloating:R}),[h,R]),F=c.useMemo(()=>({reference:T,floating:x}),[T,x]),M=c.useMemo(()=>{const I={position:r,left:0,top:0};if(!F.floating)return I;const N=jr(F.floating,d.x),U=jr(F.floating,d.y);return s?{...I,transform:"translate("+N+"px, "+U+"px)",...ai(F.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:N,top:U}},[r,s,F.floating,d.x,d.y]);return c.useMemo(()=>({...d,update:_,refs:A,elements:F,floatingStyles:M}),[d,_,A,F,M])}const lo=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:a}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?Pr({element:n.current,padding:a}).fn(r):{}:n?Pr({element:n,padding:a}).fn(r):{}}}},so=(e,t)=>({...no(e),options:[e,t]}),oo=(e,t)=>({...to(e),options:[e,t]}),uo=(e,t)=>({...ro(e),options:[e,t]}),co=(e,t)=>({...lo(e),options:[e,t]}),Ar=/(\w+)/g;function fo(e,t){const r=Array.isArray(e)?e:mo(e);for(const n of t){if(!n)continue;let a=n;for(let i=0;i<r.length;i++){const l=a[r[i]];l!==void 0&&(a=l)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function mo(e){const t=[];let r=Ar.exec(e);for(;r;){const[,n,a]=r;t.push(n||a),r=Ar.exec(e)}return t}const go=/{[^}]*}/g;function Fn(e,...t){const r=Ha(),n=r.translations||[],a=[...t,...Array.isArray(n)?n.map(l=>l[e]):[n[e]],r.locale[e]];return(l,s)=>{const o=fo(l,a);return s?o.replace(go,u=>{const d=u.substring(1,u.length-1);if(s[d]===void 0){const f=JSON.stringify(s);throw new Error(`Error translating key '${l}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${f}'`)}return s[d]}):o}}var po=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const vo=c.forwardRef((e,t)=>{var{className:r,size:n="medium",title:a,transparent:i=!1,variant:l="neutral",id:s}=e,o=po(e,["className","size","title","transparent","variant","id"]);const{cn:u}=X(),d=Je(),f=Fn("Loader");return E.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${d}`,ref:t,className:u("navds-loader",r,`navds-loader--${n}`,`navds-loader--${l}`,{"navds-loader--transparent":i}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Ke(o,["children"])),E.createElement("title",{id:s??`loader-${d}`},a||f("title")),E.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),E.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var yo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ii=c.forwardRef((e,t)=>{var{as:r="button",variant:n="primary",className:a,children:i,size:l="medium",loading:s=!1,disabled:o,icon:u,iconPosition:d="left",onKeyUp:f}=e,p=yo(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:m}=X(),b=o||s?Ke(p,["href"]):p,y=v=>{v.key===" "&&!o&&!s&&v.currentTarget.click()};return E.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},b,{ref:t,onKeyUp:dt(f,y),className:m(a,"navds-button",`navds-button--${n}`,`navds-button--${l}`,{"navds-button--loading":s,"navds-button--icon-only":!!u&&!i,"navds-button--disabled":o??s}),disabled:o??s?!0:void 0}),u&&d==="left"&&E.createElement("span",{className:m("navds-button__icon")},u),s&&E.createElement(vo,{size:l}),i&&E.createElement(pn,{as:"span",size:l==="medium"?"medium":"small"},i),u&&d==="right"&&E.createElement("span",{className:m("navds-button__icon")},u))});var bo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ho={error:Bl,warning:Sl,info:xl,success:El},ko=c.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:i="medium",fullWidth:l=!1,contentMaxWidth:s=!0,inline:o=!1,closeButton:u=!1,onClose:d}=e,f=bo(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:p}=X(),m=Fn("Alert"),b=ho[a];return E.createElement("div",Object.assign({},f,{ref:t,className:p(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${i}`,{"navds-alert--full-width":l,"navds-alert--inline":o,"navds-alert--close-button":u})}),E.createElement(b,{title:m(a),className:p("navds-alert__icon")}),E.createElement(Jt,{as:"div",size:i,className:p("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},r),u&&!o&&E.createElement("div",{className:p("navds-alert__button-wrapper")},E.createElement(ii,{className:p("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:E.createElement(ql,{title:["error","warning"].includes(a)?m("closeAlert"):m("closeMessage")})})))});function Eo(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Ro(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:r,version:n}=t;return r+"/"+n}).join(" "):navigator.userAgent}function wo(){return/apple/i.test(navigator.vendor)}function Oo(){return Eo().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function _o(){return Ro().includes("jsdom/")}const So="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Nr(e){let t=e.activeElement;for(;((r=t)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;t=t.shadowRoot.activeElement}return t}function An(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&et(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function on(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Rt(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const r=e;return r.target!=null&&t.contains(r.target)}function To(e){return e.matches("html,body")}function Ze(e){return(e==null?void 0:e.ownerDocument)||document}function xo(e){return _e(e)&&e.matches(So)}function Po(e){if(!e||_o())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function wt(e,t,r){r===void 0&&(r=!0);let n=e.filter(i=>{var l;return i.parentId===t&&((l=i.context)==null?void 0:l.open)}),a=n;for(;a.length;)a=r?e.filter(i=>{var l;return(l=a)==null?void 0:l.some(s=>{var o;return i.parentId===s.id&&((o=i.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function jo(e){return"nativeEvent"in e}function Vt(e,t){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var mn=typeof document<"u"?c.useLayoutEffect:c.useEffect;const Ao={...Da};function Kn(e){const t=c.useRef(e);return mn(()=>{t.current=e}),t}const No=Ao.useInsertionEffect,Io=No||(e=>e());function Ce(e){const t=c.useRef(()=>{});return Io(()=>{t.current=e}),c.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current==null?void 0:t.current(...n)},[])}const Lo="data-floating-ui-focusable",Ir="active",Lr="selected",Mo={...Da};let Mr=!1,Fo=0;const Fr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Fo++;function Do(){const[e,t]=c.useState(()=>Mr?Fr():void 0);return mn(()=>{e==null&&t(Fr())},[]),c.useEffect(()=>{Mr=!0},[]),e}const Vo=Mo.useId,qo=Vo||Do;function Co(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(a=>a(r))},on(t,r){e.has(t)||e.set(t,new Set),e.get(t).add(r)},off(t,r){var n;(n=e.get(t))==null||n.delete(r)}}}const Bo=c.createContext(null),Ko=c.createContext(null),li=()=>{var e;return((e=c.useContext(Bo))==null?void 0:e.id)||null},ar=()=>c.useContext(Ko);function ir(e){return"data-floating-ui-"+e}function xe(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Dr=ir("safe-polygon");function Ot(e,t,r){if(r&&!Vt(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n==null?void 0:n[t]}return e==null?void 0:e[t]}function _t(e){return typeof e=="function"?e():e}function $o(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,dataRef:a,events:i,elements:l}=e,{enabled:s=!0,delay:o=0,handleClose:u=null,mouseOnly:d=!1,restMs:f=0,move:p=!0}=t,m=ar(),b=li(),y=Kn(u),v=Kn(o),w=Kn(r),h=Kn(f),R=c.useRef(),T=c.useRef(-1),x=c.useRef(),G=c.useRef(-1),V=c.useRef(!0),z=c.useRef(!1),B=c.useRef(()=>{}),K=c.useRef(!1),$=c.useCallback(()=>{var M;const I=(M=a.current.openEvent)==null?void 0:M.type;return(I==null?void 0:I.includes("mouse"))&&I!=="mousedown"},[a]);c.useEffect(()=>{if(!s)return;function M(I){let{open:N}=I;N||(xe(T),xe(G),V.current=!0,K.current=!1)}return i.on("openchange",M),()=>{i.off("openchange",M)}},[s,i]),c.useEffect(()=>{if(!s||!y.current||!r)return;function M(N){$()&&n(!1,N,"hover")}const I=Ze(l.floating).documentElement;return I.addEventListener("mouseleave",M),()=>{I.removeEventListener("mouseleave",M)}},[l.floating,r,n,s,y,$]);const P=c.useCallback(function(M,I,N){I===void 0&&(I=!0),N===void 0&&(N="hover");const U=Ot(v.current,"close",R.current);U&&!x.current?(xe(T),T.current=window.setTimeout(()=>n(!1,M,N),U)):I&&(xe(T),n(!1,M,N))},[v,n]),_=Ce(()=>{B.current(),x.current=void 0}),O=Ce(()=>{if(z.current){const M=Ze(l.floating).body;M.style.pointerEvents="",M.removeAttribute(Dr),z.current=!1}}),A=Ce(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);c.useEffect(()=>{if(!s)return;function M(Y){if(xe(T),V.current=!1,d&&!Vt(R.current)||_t(h.current)>0&&!Ot(v.current,"open"))return;const J=Ot(v.current,"open",R.current);J?T.current=window.setTimeout(()=>{w.current||n(!0,Y,"hover")},J):r||n(!0,Y,"hover")}function I(Y){if(A()){O();return}B.current();const J=Ze(l.floating);if(xe(G),K.current=!1,y.current&&a.current.floatingContext){r||xe(T),x.current=y.current({...a.current.floatingContext,tree:m,x:Y.clientX,y:Y.clientY,onClose(){O(),_(),A()||P(Y,!0,"safe-polygon")}});const pe=x.current;J.addEventListener("mousemove",pe),B.current=()=>{J.removeEventListener("mousemove",pe)};return}(R.current==="touch"?!An(l.floating,Y.relatedTarget):!0)&&P(Y)}function N(Y){A()||a.current.floatingContext&&(y.current==null||y.current({...a.current.floatingContext,tree:m,x:Y.clientX,y:Y.clientY,onClose(){O(),_(),A()||P(Y)}})(Y))}function U(){xe(T)}function W(Y){A()||P(Y,!1)}if(te(l.domReference)){const Y=l.domReference,J=l.floating;return r&&Y.addEventListener("mouseleave",N),p&&Y.addEventListener("mousemove",M,{once:!0}),Y.addEventListener("mouseenter",M),Y.addEventListener("mouseleave",I),J&&(J.addEventListener("mouseleave",N),J.addEventListener("mouseenter",U),J.addEventListener("mouseleave",W)),()=>{r&&Y.removeEventListener("mouseleave",N),p&&Y.removeEventListener("mousemove",M),Y.removeEventListener("mouseenter",M),Y.removeEventListener("mouseleave",I),J&&(J.removeEventListener("mouseleave",N),J.removeEventListener("mouseenter",U),J.removeEventListener("mouseleave",W))}}},[l,s,e,d,p,P,_,O,n,r,w,m,v,y,a,A,h]),mn(()=>{var M;if(s&&r&&(M=y.current)!=null&&M.__options.blockPointerEvents&&$()){z.current=!0;const N=l.floating;if(te(l.domReference)&&N){var I;const U=Ze(l.floating).body;U.setAttribute(Dr,"");const W=l.domReference,Y=m==null||(I=m.nodesRef.current.find(J=>J.id===b))==null||(I=I.context)==null?void 0:I.elements.floating;return Y&&(Y.style.pointerEvents=""),U.style.pointerEvents="none",W.style.pointerEvents="auto",N.style.pointerEvents="auto",()=>{U.style.pointerEvents="",W.style.pointerEvents="",N.style.pointerEvents=""}}}},[s,r,b,l,m,y,$]),mn(()=>{r||(R.current=void 0,K.current=!1,_(),O())},[r,_,O]),c.useEffect(()=>()=>{_(),xe(T),xe(G),O()},[s,l.domReference,_,O]);const F=c.useMemo(()=>{function M(I){R.current=I.pointerType}return{onPointerDown:M,onPointerEnter:M,onMouseMove(I){const{nativeEvent:N}=I;function U(){!V.current&&!w.current&&n(!0,N,"hover")}d&&!Vt(R.current)||r||_t(h.current)===0||K.current&&I.movementX**2+I.movementY**2<2||(xe(G),R.current==="touch"?U():(K.current=!0,G.current=window.setTimeout(U,_t(h.current))))}}},[d,n,r,w,h]);return c.useMemo(()=>s?{reference:F}:{},[s,F])}function St(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&et(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Go(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Uo={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Ho={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Vr=e=>{var t,r;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(r=e==null?void 0:e.outsidePress)!=null?r:!0}};function zo(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,elements:a,dataRef:i}=e,{enabled:l=!0,escapeKey:s=!0,outsidePress:o=!0,outsidePressEvent:u="pointerdown",referencePress:d=!1,referencePressEvent:f="pointerdown",ancestorScroll:p=!1,bubbles:m,capture:b}=t,y=ar(),v=Ce(typeof o=="function"?o:()=>!1),w=typeof o=="function"?v:o,h=c.useRef(!1),R=c.useRef(!1),{escapeKey:T,outsidePress:x}=Vr(m),{escapeKey:G,outsidePress:V}=Vr(b),z=c.useRef(!1),B=Ce(A=>{var F;if(!r||!l||!s||A.key!=="Escape"||z.current)return;const M=(F=i.current.floatingContext)==null?void 0:F.nodeId,I=y?wt(y.nodesRef.current,M):[];if(!T&&(A.stopPropagation(),I.length>0)){let N=!0;if(I.forEach(U=>{var W;if((W=U.context)!=null&&W.open&&!U.context.dataRef.current.__escapeKeyBubbles){N=!1;return}}),!N)return}n(!1,jo(A)?A.nativeEvent:A,"escape-key")}),K=Ce(A=>{var F;const M=()=>{var I;B(A),(I=on(A))==null||I.removeEventListener("keydown",M)};(F=on(A))==null||F.addEventListener("keydown",M)}),$=Ce(A=>{var F;const M=h.current;h.current=!1;const I=R.current;if(R.current=!1,u==="click"&&I||M||typeof w=="function"&&!w(A))return;const N=on(A),U="["+ir("inert")+"]",W=Ze(a.floating).querySelectorAll(U);let Y=te(N)?N:null;for(;Y&&!Be(Y);){const de=$e(Y);if(Be(de)||!te(de))break;Y=de}if(W.length&&te(N)&&!To(N)&&!An(N,a.floating)&&Array.from(W).every(de=>!An(Y,de)))return;if(_e(N)&&O){const de=Be(N),ie=je(N),Z=/auto|scroll/,re=de||Z.test(ie.overflowX),ve=de||Z.test(ie.overflowY),be=re&&N.clientWidth>0&&N.scrollWidth>N.clientWidth,he=ve&&N.clientHeight>0&&N.scrollHeight>N.clientHeight,Xe=ie.direction==="rtl",De=he&&(Xe?A.offsetX<=N.offsetWidth-N.clientWidth:A.offsetX>N.clientWidth),Ve=be&&A.offsetY>N.clientHeight;if(De||Ve)return}const J=(F=i.current.floatingContext)==null?void 0:F.nodeId,Ae=y&&wt(y.nodesRef.current,J).some(de=>{var ie;return Rt(A,(ie=de.context)==null?void 0:ie.elements.floating)});if(Rt(A,a.floating)||Rt(A,a.domReference)||Ae)return;const pe=y?wt(y.nodesRef.current,J):[];if(pe.length>0){let de=!0;if(pe.forEach(ie=>{var Z;if((Z=ie.context)!=null&&Z.open&&!ie.context.dataRef.current.__outsidePressBubbles){de=!1;return}}),!de)return}n(!1,A,"outside-press")}),P=Ce(A=>{var F;const M=()=>{var I;$(A),(I=on(A))==null||I.removeEventListener(u,M)};(F=on(A))==null||F.addEventListener(u,M)});c.useEffect(()=>{if(!r||!l)return;i.current.__escapeKeyBubbles=T,i.current.__outsidePressBubbles=x;let A=-1;function F(W){n(!1,W,"ancestor-scroll")}function M(){window.clearTimeout(A),z.current=!0}function I(){A=window.setTimeout(()=>{z.current=!1},mt()?5:0)}const N=Ze(a.floating);s&&(N.addEventListener("keydown",G?K:B,G),N.addEventListener("compositionstart",M),N.addEventListener("compositionend",I)),w&&N.addEventListener(u,V?P:$,V);let U=[];return p&&(te(a.domReference)&&(U=Ye(a.domReference)),te(a.floating)&&(U=U.concat(Ye(a.floating))),!te(a.reference)&&a.reference&&a.reference.contextElement&&(U=U.concat(Ye(a.reference.contextElement)))),U=U.filter(W=>{var Y;return W!==((Y=N.defaultView)==null?void 0:Y.visualViewport)}),U.forEach(W=>{W.addEventListener("scroll",F,{passive:!0})}),()=>{s&&(N.removeEventListener("keydown",G?K:B,G),N.removeEventListener("compositionstart",M),N.removeEventListener("compositionend",I)),w&&N.removeEventListener(u,V?P:$,V),U.forEach(W=>{W.removeEventListener("scroll",F)}),window.clearTimeout(A)}},[i,a,s,w,u,r,n,p,l,T,x,B,G,K,$,V,P]),c.useEffect(()=>{h.current=!1},[w,u]);const _=c.useMemo(()=>({onKeyDown:B,...d&&{[Uo[f]]:A=>{n(!1,A.nativeEvent,"reference-press")},...f!=="click"&&{onClick(A){n(!1,A.nativeEvent,"reference-press")}}}}),[B,n,d,f]),O=c.useMemo(()=>({onKeyDown:B,onMouseDown(){R.current=!0},onMouseUp(){R.current=!0},[Ho[u]]:()=>{h.current=!0}}),[B,u]);return c.useMemo(()=>l?{reference:_,floating:O}:{},[l,_,O])}function Wo(e){const{open:t=!1,onOpenChange:r,elements:n}=e,a=qo(),i=c.useRef({}),[l]=c.useState(()=>Co()),s=li()!=null,[o,u]=c.useState(n.reference),d=Ce((m,b,y)=>{i.current.openEvent=m?b:void 0,l.emit("openchange",{open:m,event:b,reason:y,nested:s}),r==null||r(m,b,y)}),f=c.useMemo(()=>({setPositionReference:u}),[]),p=c.useMemo(()=>({reference:o||n.reference||null,floating:n.floating||null,domReference:n.reference}),[o,n.reference,n.floating]);return c.useMemo(()=>({dataRef:i,open:t,onOpenChange:d,elements:p,events:l,floatingId:a,refs:f}),[t,d,p,l,a,f])}function Yo(e){e===void 0&&(e={});const{nodeId:t}=e,r=Wo({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,a=n.elements,[i,l]=c.useState(null),[s,o]=c.useState(null),d=(a==null?void 0:a.domReference)||i,f=c.useRef(null),p=ar();mn(()=>{d&&(f.current=d)},[d]);const m=io({...e,elements:{...a,...s&&{reference:s}}}),b=c.useCallback(R=>{const T=te(R)?{getBoundingClientRect:()=>R.getBoundingClientRect(),getClientRects:()=>R.getClientRects(),contextElement:R}:R;o(T),m.refs.setReference(T)},[m.refs]),y=c.useCallback(R=>{(te(R)||R===null)&&(f.current=R,l(R)),(te(m.refs.reference.current)||m.refs.reference.current===null||R!==null&&!te(R))&&m.refs.setReference(R)},[m.refs]),v=c.useMemo(()=>({...m.refs,setReference:y,setPositionReference:b,domReference:f}),[m.refs,y,b]),w=c.useMemo(()=>({...m.elements,domReference:d}),[m.elements,d]),h=c.useMemo(()=>({...m,...n,refs:v,elements:w,nodeId:t}),[m,v,w,t,n]);return mn(()=>{n.dataRef.current.floatingContext=h;const R=p==null?void 0:p.nodesRef.current.find(T=>T.id===t);R&&(R.context=h)}),c.useMemo(()=>({...m,context:h,refs:v,elements:w}),[m,v,w,h])}function Tt(){return Oo()&&wo()}function Jo(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,events:a,dataRef:i,elements:l}=e,{enabled:s=!0,visibleOnly:o=!0}=t,u=c.useRef(!1),d=c.useRef(-1),f=c.useRef(!0);c.useEffect(()=>{if(!s)return;const m=Re(l.domReference);function b(){!r&&_e(l.domReference)&&l.domReference===Nr(Ze(l.domReference))&&(u.current=!0)}function y(){f.current=!0}function v(){f.current=!1}return m.addEventListener("blur",b),Tt()&&(m.addEventListener("keydown",y,!0),m.addEventListener("pointerdown",v,!0)),()=>{m.removeEventListener("blur",b),Tt()&&(m.removeEventListener("keydown",y,!0),m.removeEventListener("pointerdown",v,!0))}},[l.domReference,r,s]),c.useEffect(()=>{if(!s)return;function m(b){let{reason:y}=b;(y==="reference-press"||y==="escape-key")&&(u.current=!0)}return a.on("openchange",m),()=>{a.off("openchange",m)}},[a,s]),c.useEffect(()=>()=>{xe(d)},[]);const p=c.useMemo(()=>({onMouseLeave(){u.current=!1},onFocus(m){if(u.current)return;const b=on(m.nativeEvent);if(o&&te(b)){if(Tt()&&!m.relatedTarget){if(!f.current&&!xo(b))return}else if(!Po(b))return}n(!0,m.nativeEvent,"focus")},onBlur(m){u.current=!1;const b=m.relatedTarget,y=m.nativeEvent,v=te(b)&&b.hasAttribute(ir("focus-guard"))&&b.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var w;const h=Nr(l.domReference?l.domReference.ownerDocument:document);!b&&h===l.domReference||An((w=i.current.floatingContext)==null?void 0:w.refs.floating.current,h)||An(l.domReference,h)||v||n(!1,y,"focus")})}}),[i,l.domReference,n,o]);return c.useMemo(()=>s?{reference:p}:{},[s,p])}function xt(e,t,r){const n=new Map,a=r==="item";let i=e;if(a&&e){const{[Ir]:l,[Lr]:s,...o}=e;i=o}return{...r==="floating"&&{tabIndex:-1,[Lo]:""},...i,...t.map(l=>{const s=l?l[r]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((l,s)=>(s&&Object.entries(s).forEach(o=>{let[u,d]=o;if(!(a&&[Ir,Lr].includes(u)))if(u.indexOf("on")===0){if(n.has(u)||n.set(u,[]),typeof d=="function"){var f;(f=n.get(u))==null||f.push(d),l[u]=function(){for(var p,m=arguments.length,b=new Array(m),y=0;y<m;y++)b[y]=arguments[y];return(p=n.get(u))==null?void 0:p.map(v=>v(...b)).find(v=>v!==void 0)}}}else l[u]=d}),l),{})}}function Xo(e){e===void 0&&(e=[]);const t=e.map(s=>s==null?void 0:s.reference),r=e.map(s=>s==null?void 0:s.floating),n=e.map(s=>s==null?void 0:s.item),a=c.useCallback(s=>xt(s,e,"reference"),t),i=c.useCallback(s=>xt(s,e,"floating"),r),l=c.useCallback(s=>xt(s,e,"item"),n);return c.useMemo(()=>({getReferenceProps:a,getFloatingProps:i,getItemProps:l}),[a,i,l])}function Zo(e,t,r){r===void 0&&(r=!0);let n=e.filter(i=>{var l;return i.parentId===t&&((l=i.context)==null?void 0:l.open)}),a=n;for(;a.length;)a=r?e.filter(i=>{var l;return(l=a)==null?void 0:l.some(s=>{var o;return i.parentId===s.id&&((o=i.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function qr(e,t){const[r,n]=e;let a=!1;const i=t.length;for(let l=0,s=i-1;l<i;s=l++){const[o,u]=t[l]||[0,0],[d,f]=t[s]||[0,0];u>=n!=f>=n&&r<=(d-o)*(n-u)/(f-u)+o&&(a=!a)}return a}function Qo(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function eu(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:r=!1,requireIntent:n=!0}=e;let a,i=!1,l=null,s=null,o=performance.now();function u(f,p){const m=performance.now(),b=m-o;if(l===null||s===null||b===0)return l=f,s=p,o=m,null;const y=f-l,v=p-s,h=Math.sqrt(y*y+v*v)/b;return l=f,s=p,o=m,h}const d=f=>{let{x:p,y:m,placement:b,elements:y,onClose:v,nodeId:w,tree:h}=f;return function(T){function x(){clearTimeout(a),v()}if(clearTimeout(a),!y.domReference||!y.floating||b==null||p==null||m==null)return;const{clientX:G,clientY:V}=T,z=[G,V],B=Go(T),K=T.type==="mouseleave",$=St(y.floating,B),P=St(y.domReference,B),_=y.domReference.getBoundingClientRect(),O=y.floating.getBoundingClientRect(),A=b.split("-")[0],F=p>O.right-O.width/2,M=m>O.bottom-O.height/2,I=Qo(z,_),N=O.width>_.width,U=O.height>_.height,W=(N?_:O).left,Y=(N?_:O).right,J=(U?_:O).top,Ae=(U?_:O).bottom;if($&&(i=!0,!K))return;if(P&&(i=!1),P&&!K){i=!0;return}if(K&&te(T.relatedTarget)&&St(y.floating,T.relatedTarget)||h&&Zo(h.nodesRef.current,w).some(ie=>{let{context:Z}=ie;return Z==null?void 0:Z.open}))return;if(A==="top"&&m>=_.bottom-1||A==="bottom"&&m<=_.top+1||A==="left"&&p>=_.right-1||A==="right"&&p<=_.left+1)return x();let pe=[];switch(A){case"top":pe=[[W,_.top+1],[W,O.bottom-1],[Y,O.bottom-1],[Y,_.top+1]];break;case"bottom":pe=[[W,O.top+1],[W,_.bottom-1],[Y,_.bottom-1],[Y,O.top+1]];break;case"left":pe=[[O.right-1,Ae],[O.right-1,J],[_.left+1,J],[_.left+1,Ae]];break;case"right":pe=[[_.right-1,Ae],[_.right-1,J],[O.left+1,J],[O.left+1,Ae]];break}function de(ie){let[Z,re]=ie;switch(A){case"top":{const ve=[N?Z+t/2:F?Z+t*4:Z-t*4,re+t+1],be=[N?Z-t/2:F?Z+t*4:Z-t*4,re+t+1],he=[[O.left,F||N?O.bottom-t:O.top],[O.right,F?N?O.bottom-t:O.top:O.bottom-t]];return[ve,be,...he]}case"bottom":{const ve=[N?Z+t/2:F?Z+t*4:Z-t*4,re-t],be=[N?Z-t/2:F?Z+t*4:Z-t*4,re-t],he=[[O.left,F||N?O.top+t:O.bottom],[O.right,F?N?O.top+t:O.bottom:O.top+t]];return[ve,be,...he]}case"left":{const ve=[Z+t+1,U?re+t/2:M?re+t*4:re-t*4],be=[Z+t+1,U?re-t/2:M?re+t*4:re-t*4];return[...[[M||U?O.right-t:O.left,O.top],[M?U?O.right-t:O.left:O.right-t,O.bottom]],ve,be]}case"right":{const ve=[Z-t,U?re+t/2:M?re+t*4:re-t*4],be=[Z-t,U?re-t/2:M?re+t*4:re-t*4],he=[[M||U?O.left+t:O.right,O.top],[M?U?O.left+t:O.right:O.left+t,O.bottom]];return[ve,be,...he]}}}if(!qr([G,V],pe)){if(i&&!I)return x();if(!K&&n){const ie=u(T.clientX,T.clientY);if(ie!==null&&ie<.1)return x()}qr([G,V],de([p,m]))?!i&&n&&(a=window.setTimeout(x,40)):x()}}};return d.__options={blockPointerEvents:r},d}const si=()=>{const{cn:e}=X();return E.createElement(Ua,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},nu=()=>{const{cn:e}=X();return E.createElement(Ua,{title:Fn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},tt=c.createContext(null),lr=(e,t)=>{var r,n,a;const{size:i,error:l,errorId:s}=e,o=c.useContext(tt),u=Je(),d=(r=e.id)!==null&&r!==void 0?r:`${t}-${u}`,f=s??`${t}-error-${u}`,p=`${t}-description-${u}`,m=(o==null?void 0:o.disabled)||e.disabled,b=((o==null?void 0:o.readOnly)||e.readOnly)&&!m||void 0,y=!m&&!b&&!!(l||o!=null&&o.error),v=!m&&!b&&!!l&&typeof l!="boolean",w=Object.assign({},y?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:v,hasError:y,errorId:f,inputDescriptionId:p,size:(n=i??(o==null?void 0:o.size))!==null&&n!==void 0?n:"medium",readOnly:b,inputProps:Object.assign(Object.assign({id:d},w),{"aria-describedby":Nn(e["aria-describedby"],{[p]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[f]:v,[(a=o==null?void 0:o.errorId)!==null&&a!==void 0?a:""]:y&&!!(o!=null&&o.error)})||void 0,disabled:m})}};function ge(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,i])=>[`--__${e}c-${t}-${r}-${a}`,i])):{}}const tu={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Cr=(e,t,r,n,a,i)=>t.split(" ").map((l,s,o)=>{var u;if(e==="margin-inline"&&l==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&l==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&l==="auto")return"auto";let d=`var(--${i}-${r}-${l})`;if(n.includes(l))d=l==="px"?"1px":l;else if(l.startsWith("space"))d=`var(--${i}-${l})`;else{const f=`--${i}-spacing-${l}`;d=`var(${(u=tu[f])!==null&&u!==void 0?u:f})`}return a?l==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function Pe(e,t,r,n,a,i=!1,l=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${t}-${r}-xs`]:Cr(r,a,n,l,i,e)};const s={};return Object.entries(a).forEach(([o,u])=>{s[`--__${e}c-${t}-${r}-${o}`]=Cr(r,u,n,l,i,e)}),s}const ru=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],au=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:a,margin:i,marginInline:l,marginBlock:s,width:o,minWidth:u,maxWidth:d,height:f,minHeight:p,maxHeight:m,position:b,inset:y,top:v,right:w,left:h,bottom:R,overflow:T,overflowX:x,overflowY:G,flexBasis:V,flexGrow:z,flexShrink:B,gridColumn:K})=>{const $=Wt(!1),{cn:P}=X(),_=$?"ax":"a",O=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Pe(_,"r","p","spacing",r)),Pe(_,"r","pi","spacing",n)),Pe(_,"r","pb","spacing",a)),Pe(_,"r","m","spacing",i)),Pe(_,"r","mi","spacing",l)),Pe(_,"r","mb","spacing",s)),ge(_,"r","w",o)),ge(_,"r","minw",u)),ge(_,"r","maxw",d)),ge(_,"r","h",f)),ge(_,"r","minh",p)),ge(_,"r","maxh",m)),ge(_,"r","position",b)),Pe(_,"r","inset","spacing",y)),Pe(_,"r","top","spacing",v)),Pe(_,"r","right","spacing",w)),Pe(_,"r","bottom","spacing",R)),Pe(_,"r","left","spacing",h)),ge(_,"r","overflow",T)),ge(_,"r","overflowx",x)),ge(_,"r","overflowy",G)),ge(_,"r","flex-basis",V)),ge(_,"r","flex-grow",z)),ge(_,"r","flex-shrink",B)),ge(_,"r","grid-column",K));return E.createElement(ut,{className:P({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":i,"navds-r-mi":l,"navds-r-mb":s,"navds-r-w":o,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":f,"navds-r-minh":p,"navds-r-maxh":m,"navds-r-position":b,"navds-r-inset":y,"navds-r-top":v,"navds-r-right":w,"navds-r-bottom":R,"navds-r-left":h,"navds-r-overflow":T,"navds-r-overflowx":x,"navds-r-overflowy":G,"navds-r-flex-basis":V,"navds-r-flex-grow":z,"navds-r-flex-shrink":B,"navds-r-grid-column":K}),style:O},e)};var iu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const oi=c.forwardRef((e,t)=>{var{children:r,className:n,as:a="div",align:i,justify:l,wrap:s=!0,gap:o,style:u,direction:d="row",asChild:f}=e,p=iu(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const b=Wt(!1)?"ax":"a",{cn:y}=X(),v=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),Pe(b,"stack","gap","spacing",o)),ge(b,"stack","direction",d)),ge(b,"stack","align",i)),ge(b,"stack","justify",l)),w=f?ut:a;return E.createElement(au,Object.assign({},p),E.createElement(w,Object.assign({},Ke(p,ru),{ref:t,style:v,className:y("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":o,"navds-stack-align":i,"navds-stack-justify":l,"navds-stack-direction":d,"navds-stack-wrap":s})}),r))});var lu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const nn=c.forwardRef((e,t)=>{var{as:r="div"}=e,n=lu(e,["as"]);return E.createElement(oi,Object.assign({as:r},n,{ref:t,direction:"row"}))});var su=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ge=c.forwardRef((e,t)=>{var{as:r="div"}=e,n=su(e,["as"]);return E.createElement(oi,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))});var ou=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const uu=c.forwardRef((e,t)=>{var{as:r="a",className:n,underline:a=!0,variant:i="action",inlineText:l=!1}=e,s=ou(e,["as","className","underline","variant","inlineText"]);const{cn:o}=X();return E.createElement(r,Object.assign({},s,{ref:t,className:o("navds-link",n,`navds-link--${i}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":l})}))});var du=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const cu=c.forwardRef((e,t)=>{var{className:r,header:n,children:a,open:i,defaultOpen:l=!1,onClick:s,size:o="medium",onOpenChange:u}=e,d=du(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:f}=X(),[p,m]=Xt({defaultValue:l,value:i,onChange:u}),b=o==="small"?"small":"medium";return E.createElement("div",{className:f("navds-read-more",`navds-read-more--${o}`,r,{"navds-read-more--open":p}),"data-volume":"low"},E.createElement("button",Object.assign({},d,{ref:t,type:"button",className:f("navds-read-more__button","navds-body-short",{"navds-body-short--small":o==="small"}),onClick:dt(s,()=>m(y=>!y)),"aria-expanded":p,"data-state":p?"open":"closed"}),E.createElement(Zt,{className:f("navds-read-more__expand-icon"),"aria-hidden":!0}),E.createElement("span",null,n)),E.createElement(Jt,{as:"div","aria-hidden":!p,className:f("navds-read-more__content",{"navds-read-more__content--closed":!p}),size:b,"data-state":p?"open":"closed"},a))});var fu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const mu=c.forwardRef((e,t)=>{var{className:r}=e,n=fu(e,["className"]);const{cn:a}=X();return E.createElement("tbody",Object.assign({},n,{ref:t,className:a("navds-table__body",r)}))});var gu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ui=c.forwardRef((e,t)=>{var{className:r,children:n,align:a,textSize:i}=e,l=gu(e,["className","children","align","textSize"]);const{cn:s}=X();return E.createElement("th",Object.assign({ref:t,className:s("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":i==="small"})},l),n)}),di=c.createContext(null);var pu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const vu=c.forwardRef((e,t)=>{var r,n,a,i,{className:l,children:s,sortable:o=!1,sortKey:u}=e,d=pu(e,["className","children","sortable","sortKey"]);const f=c.useContext(di),{cn:p}=X();return o&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),E.createElement(ui,Object.assign({scope:"col",ref:t,className:p(l),"aria-sort":o?((r=f==null?void 0:f.sort)===null||r===void 0?void 0:r.orderBy)===u?(n=f==null?void 0:f.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),o?E.createElement("button",{type:"button",className:p("navds-table__sort-button"),onClick:o&&u?()=>{var m;return(m=f==null?void 0:f.onSortChange)===null||m===void 0?void 0:m.call(f,u)}:void 0},s,((a=f==null?void 0:f.sort)===null||a===void 0?void 0:a.orderBy)===u?((i=f==null?void 0:f.sort)===null||i===void 0?void 0:i.direction)==="descending"?E.createElement(Ml,{"aria-hidden":!0}):E.createElement(Dl,{"aria-hidden":!0}):E.createElement(hl,{"aria-hidden":!0})):s)});var yu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ci=c.forwardRef((e,t)=>{var{className:r,children:n="",align:a,textSize:i}=e,l=yu(e,["className","children","align","textSize"]);const{cn:s}=X();return E.createElement(ye,Object.assign({as:"td",ref:t,className:s("navds-table__data-cell",r,{[`navds-table__data-cell--align-${a}`]:a}),size:i},l),n)});var bu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const hu=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function ku(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function Br(e){return typeof e=="string"&&e[e.length-1]==="%"&&ku(e.substring(0,e.length-1))}function Pt(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function Eu(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const Ru=e=>{var{children:t,className:r,innerClassName:n,duration:a=250,easing:i="ease",height:l}=e,s=bu(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=X(),u=c.useRef(l),d=c.useRef(null),f=c.useRef(),p=c.useRef(),m=c.useRef(l),b=c.useRef("visible"),y=hu?0:a;typeof m.current=="number"?(typeof l!="string"&&(m.current=l<0?0:l),b.current="hidden"):Br(m.current)&&(m.current=l==="0%"?0:l,b.current="hidden");const[v,w]=c.useState(m.current),[h,R]=c.useState(b.current),[T,x]=c.useState(!1);c.useEffect(()=>{Pt(d.current,m.current)},[]),c.useEffect(()=>{if(l!==u.current&&d.current){Eu(d.current,u.current),d.current.style.overflow="hidden";const B=d.current.offsetHeight;d.current.style.overflow="";const K=y;let $,P,_="hidden",O;const A=u.current==="auto";typeof l=="number"?($=l<0?0:l,P=$):Br(l)?($=l==="0%"?0:l,P=$):($=B,P="auto",_=void 0),A&&(P=$,$=B),w($),R("hidden"),x(!A),clearTimeout(p.current),clearTimeout(f.current),A?(O=!0,p.current=setTimeout(()=>{w(P),R(_),x(O)},50),f.current=setTimeout(()=>{x(!1),Pt(d.current,P)},K)):p.current=setTimeout(()=>{w(P),R(_),x(!1),l!=="auto"&&Pt(d.current,$)},K)}return u.current=l,()=>{clearTimeout(p.current),clearTimeout(f.current)}},[l]);const G={height:v,overflow:h};T&&(G.transition=`height ${y}ms ${i} 0ms`,G.WebkitTransition=G.transition);const z=typeof s["aria-hidden"]<"u"?s["aria-hidden"]:l===0;return E.createElement("div",Object.assign({},s,{className:o(r),style:G}),E.createElement("div",{"aria-hidden":z,className:o(n),ref:d},t))};var wu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const fi=c.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:a=!0}=e,i=wu(e,["className","selected","shadeOnHover"]);const{cn:l}=X();return E.createElement("tr",Object.assign({},i,{ref:t,className:l("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a})}))});var Ou=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const _u=c.forwardRef((e,t)=>{var{className:r,children:n,content:a,togglePlacement:i="left",defaultOpen:l=!1,open:s,onOpenChange:o,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:f=999,contentGutter:p,onClick:m}=e,b=Ou(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:y}=X(),[v,w]=Xt({defaultValue:l,value:s,onChange:o}),h=Fn("global"),R=Je(),T=G=>{w(V=>!V),G.stopPropagation()},x=G=>{d&&!u&&!mi(G.target)&&T(G)};return E.createElement(E.Fragment,null,E.createElement(fi,Object.assign({},b,{ref:t,className:y("navds-table__expandable-row",r,{"navds-table__expandable-row--open":v,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:dt(m,x)}),i==="right"&&n,E.createElement(ci,{className:y("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":v}),onClick:u?()=>null:T},!u&&E.createElement("button",{className:y("navds-table__toggle-expand-button"),type:"button","aria-controls":R,"aria-expanded":v,onClick:T},E.createElement(Zt,{className:y("navds-table__expandable-icon"),title:h(v?"showLess":"showMore")}))),i==="left"&&n),E.createElement("tr",{"data-state":v?"open":"closed",className:y("navds-table__expanded-row"),"aria-hidden":!v,id:R},E.createElement("td",{colSpan:f,className:y("navds-table__expanded-row-cell")},E.createElement(Ru,{className:y("navds-table__expanded-row-collapse"),innerClassName:y(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${p??i}`),height:v?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function mi(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:mi(e.parentElement)}var Su=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Tu=c.forwardRef((e,t)=>{var{className:r}=e,n=Su(e,["className"]);const{cn:a}=X();return E.createElement("thead",Object.assign({},n,{ref:t,className:a("navds-table__header",r)}))});var xu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const fe=c.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:a="medium",onSortChange:i,sort:l}=e,s=xu(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:o}=X();return E.createElement(di.Provider,{value:{onSortChange:i,sort:l}},E.createElement("table",Object.assign({},s,{ref:t,className:o("navds-table",`navds-table--${a}`,r,{"navds-table--zebra-stripes":n})})))});fe.Header=Tu;fe.Body=mu;fe.Row=fi;fe.ColumnHeader=vu;fe.HeaderCell=ui;fe.DataCell=ci;fe.ExpandableRow=_u;var Pu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ju=c.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:i="medium",icon:l}=e,s=Pu(e,["children","className","variant","size","icon"]);const{cn:o}=X(),u=(a==null?void 0:a.endsWith("-filled"))&&"strong",d=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",f=a==null?void 0:a.replace("-filled","").replace("-moderate","");return E.createElement(ye,Object.assign({},s,{ref:t,as:"span",size:i==="medium"?"medium":"small",className:o("navds-tag",n,`navds-tag--${a}`,`navds-tag--${i}`,`navds-tag--${u||d||"outline"}`,`navds-tag--${f}`)}),l&&E.createElement("span",{className:o("navds-tag__icon--left")},l),r)});var Au=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const gi=c.forwardRef((e,t)=>{var{children:r,className:n,arrow:a=!0,placement:i="top",open:l,defaultOpen:s=!1,onOpenChange:o,offset:u,content:d,delay:f=150,id:p,keys:m,maxChar:b=80,describesChild:y=!1}=e,v=Au(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:w}=X(),[h,R]=Xt({defaultValue:s,value:l,onChange:o}),T=c.useRef(null),x=Kl(!1),G=x?x.ref.current:void 0,{x:V,y:z,strategy:B,context:K,placement:$,middlewareData:{arrow:{x:P,y:_}={},hide:{referenceHidden:O}={}},refs:A}=Yo({placement:i,open:h,onOpenChange:W=>R(W),middleware:[so(u??(a?8:4)),oo(),uo({padding:5,fallbackPlacements:["bottom","top"]}),co({element:T,padding:5})],whileElementsMounted:x?(W,Y,J)=>xr(W,Y,J,{animationFrame:!0}):xr,strategy:x?"fixed":void 0}),{getReferenceProps:F,getFloatingProps:M}=Xo([$o(K,{handleClose:eu(),restMs:f}),Jo(K),zo(K)]),I=Je(p),N=Va(t,A.setFloating);if(!r||(r==null?void 0:r.type)===E.Fragment||r===E.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(d==null?void 0:d.length)>b&&h&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${d.length}
Tooltip-content: ${d}`);const U=y?h?{"aria-describedby":I}:{title:d}:{"aria-label":d};return E.createElement(E.Fragment,null,E.createElement(ut,Object.assign({ref:A.setReference},F(),U,{"aria-keyshortcuts":m?m.join("+"):void 0}),r),E.createElement(Os,{rootElement:G,asChild:!0},h&&E.createElement("div",Object.assign({},M(Object.assign(Object.assign({},v),{ref:N,style:{position:B,top:z??0,left:V??0,visibility:O?"hidden":"visible"},role:"tooltip",id:I,className:w("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":$,"data-state":"open"}),d,m&&E.createElement("span",{className:w("navds-tooltip__keys"),"aria-hidden":!0},m.map(W=>E.createElement(cl,{as:"kbd",key:W,className:w("navds-tooltip__key")},W))),a&&E.createElement("div",{ref:W=>{T.current=W},className:w("navds-tooltip__arrow"),style:{left:P!=null?`${P}px`:"",top:_!=null?`${_}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[$]]:"-3.5px"}}))))}),Nu=e=>{const t=lr(e,"fieldset"),{inputProps:r}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var Iu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Lu=c.forwardRef((e,t)=>{var r,n,a;const{inputProps:i,errorId:l,showErrorMsg:s,hasError:o,size:u,readOnly:d,inputDescriptionId:f}=Nu(e),{cn:p}=X(),m=c.useContext(tt),{children:b,className:y,errorPropagation:v=!0,legend:w,description:h,hideLegend:R,nativeReadOnly:T=!0}=e,x=Iu(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return E.createElement(tt.Provider,{value:{error:v?(r=e.error)!==null&&r!==void 0?r:m==null?void 0:m.error:void 0,errorId:Nn({[l]:s,[(n=m==null?void 0:m.errorId)!==null&&n!==void 0?n:""]:!!(m!=null&&m.error)}),size:u,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:d}},E.createElement("fieldset",Object.assign({},Ke(x,["errorId","error","size","readOnly"]),Ke(i,["aria-describedby","aria-invalid"]),{ref:t,className:p(y,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":o,"navds-fieldset--readonly":d})}),E.createElement(pn,{size:u,as:"legend",className:p("navds-fieldset__legend",{"navds-sr-only":!!R})},d&&(T?E.createElement(si,null):E.createElement(nu,null)),w),!!h&&E.createElement(ye,{className:p("navds-fieldset__description",{"navds-sr-only":!!R}),id:f,size:u??"medium",as:"div"},e.description),b,E.createElement("div",{id:l,"aria-relevant":"additions removals","aria-live":"polite",className:p("navds-fieldset__error")},s&&E.createElement(Ka,{size:u,showIcon:!0},e.error))))});var Mu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const pi=E.createContext(null),Fu=c.forwardRef((e,t)=>{var r,n,{children:a,className:i,name:l,defaultValue:s,value:o,onChange:u=()=>{},required:d,readOnly:f}=e,p=Mu(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:m}=X(),b=c.useContext(tt),y=Je();return E.createElement(Lu,Object.assign({},p,{readOnly:f,ref:t,className:m(i,"navds-radio-group",`navds-radio-group--${(n=(r=p.size)!==null&&r!==void 0?r:b==null?void 0:b.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),E.createElement(pi.Provider,{value:{name:l??`radioGroupName-${y}`,defaultValue:s,value:o,onChange:u,required:d}},E.createElement("div",{className:m("navds-radio-buttons")},a)))});var Du=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Vu=e=>{const t=c.useContext(pi),r=lr(Ke(e,["description"]),"radio"),{inputProps:n,readOnly:a}=r,i=Du(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},i),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:t==null?void 0:t.name,defaultChecked:(t==null?void 0:t.defaultValue)===void 0?void 0:(t==null?void 0:t.defaultValue)===e.value,checked:(t==null?void 0:t.value)===void 0?void 0:(t==null?void 0:t.value)===e.value,onChange:l=>{var s,o;a||((s=e.onChange)===null||s===void 0||s.call(e,l),(o=t==null?void 0:t.onChange)===null||o===void 0||o.call(t,e.value))},onClick:l=>{var s;if(a){l.preventDefault();return}(s=e==null?void 0:e.onClick)===null||s===void 0||s.call(e,l)},required:t==null?void 0:t.required,type:"radio"})})},Kr=c.forwardRef((e,t)=>{const{cn:r}=X(),{inputProps:n,size:a,hasError:i,readOnly:l}=Vu(e),s=Je(),o=Je();return E.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":i,"navds-radio--disabled":n.disabled,"navds-radio--readonly":l})},E.createElement("input",Object.assign({},Ke(e,["children","size","description","readOnly"]),Ke(n,["aria-invalid"]),{"aria-labelledby":Nn(s,!!e["aria-labelledby"]&&e["aria-labelledby"],{[o]:e.description}),className:r("navds-radio__input"),ref:t})),E.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},E.createElement("span",{className:r("navds-radio__content")},E.createElement(ye,{as:"span",id:s,size:a,"aria-hidden":!0},e.children),e.description&&E.createElement(ye,{as:"span",id:o,size:a,className:r("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var qu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const $r=(e,t,r)=>{const{outerHeightStyle:n,overflow:a}=t;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(r.current+=1,t):e},Gr=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function $n(e){return parseInt(e,10)||0}const Cu=c.forwardRef((e,t)=>{var r,n,{className:a,onChange:i,maxRows:l,minRows:s=1,autoScrollbar:o,style:u,value:d}=e,f=qu(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:p}=c.useRef(d!=null),m=c.useRef(null),b=Va(m,t),y=c.useRef(null),v=c.useRef(0),[w,h]=c.useState({outerHeightStyle:0}),R=E.useCallback(()=>{const V=m.current,B=Gr(V).getComputedStyle(V);if(B.width==="0px")return{outerHeightStyle:0};const K=y.current;K.style.width=B.width,K.value=V.value||f.placeholder||"x",K.value.slice(-1)===`
`&&(K.value+=" ");const $=B.boxSizing,P=$n(B.paddingBottom)+$n(B.paddingTop),_=$n(B.borderBottomWidth)+$n(B.borderTopWidth),O=K.scrollHeight-P;K.value="x";const A=K.scrollHeight-P;let F=O;s&&(F=Math.max(Number(s)*A,F)),l&&(F=Math.min(Number(l)*A,F)),F=Math.max(F,A);const M=F+($==="border-box"?P+_:0),I=Math.abs(F-O)<=1;return{outerHeightStyle:M,overflow:I}},[l,s,f.placeholder]),T=()=>{const V=R();Ur(V)||h(z=>$r(z,V,v))};hr(()=>{const V=()=>{const P=R();Ur(P)||Lt.flushSync(()=>{h(_=>$r(_,P,v))})},z=Ga(()=>{var P,_,O;if(v.current=0,!((P=m.current)===null||P===void 0)&&P.style.height||!((_=m.current)===null||_===void 0)&&_.style.width){((O=m.current)===null||O===void 0?void 0:O.style.overflow)==="hidden"&&h(A=>Object.assign(Object.assign({},A),{overflow:!1}));return}V()},166,!0),B=m.current,K=Gr(B);K.addEventListener("resize",z);let $;return typeof ResizeObserver<"u"&&($=new ResizeObserver(z),$.observe(B)),()=>{z.clear(),K.removeEventListener("resize",z),$&&$.disconnect()}},[R]),hr(()=>{T()}),c.useEffect(()=>{v.current=0},[d]);const x=V=>{v.current=0,p||T(),i&&i(V)},G=Object.assign({"--__ac-textarea-height":w.outerHeightStyle+"px","--__axc-textarea-height":w.outerHeightStyle+"px",overflow:w.overflow&&!o&&!(!((r=m.current)===null||r===void 0)&&r.style.height)&&!(!((n=m.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},u);return E.createElement(E.Fragment,null,E.createElement("textarea",Object.assign({value:d,onChange:x,ref:b,rows:s,style:G},f,{className:a})),E.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:y,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function Ur(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Bu=({maxLengthId:e,maxLength:t,currentLength:r,size:n,i18n:a})=>{const{cn:i}=X(),l=Fn("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),s=t-r,[o,u]=c.useState(s);return c.useEffect(()=>{const d=Ga(()=>{u(s)},2e3);return d(),()=>{d.clear()}},[s]),E.createElement(E.Fragment,null,E.createElement("span",{id:e,className:i("navds-sr-only")},l("maxLength",{maxLength:t})),s<20&&E.createElement("span",{role:"status",className:i("navds-textarea__sr-counter navds-sr-only")},Hr(o,l)),E.createElement(ye,{className:i("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:n},Hr(s,l)))},Hr=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Ku=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const $u=c.forwardRef((e,t)=>{var r,n,a;const{inputProps:i,errorId:l,showErrorMsg:s,hasError:o,size:u,inputDescriptionId:d}=lr(e,"textarea"),{label:f,className:p,description:m,maxLength:b,hideLabel:y=!1,resize:v,UNSAFE_autoScrollbar:w,i18n:h,readOnly:R}=e,T=Ku(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:x}=X(),G=Je(),V=b!==void 0&&b>0,[z,B]=c.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),K=()=>{let P=T!=null&&T.minRows?T==null?void 0:T.minRows:3;return u==="small"&&(P=T!=null&&T.minRows?T==null?void 0:T.minRows:2),P},$=Nn(i["aria-describedby"],{[G??""]:V});return E.createElement("div",{className:x(p,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!i.disabled,"navds-form-field--readonly":R,"navds-textarea--readonly":R,"navds-textarea--error":o,"navds-textarea--autoscrollbar":w,[`navds-textarea--resize-${v===!0?"both":v}`]:v})},E.createElement(pn,{htmlFor:i.id,size:u,className:x("navds-form-field__label",{"navds-sr-only":y})},R&&E.createElement(si,null),f),!!m&&E.createElement(ye,{className:x("navds-form-field__description",{"navds-sr-only":y}),id:d,size:u,as:"div"},m),E.createElement(Cu,Object.assign({},Ke(T,["error","errorId","size"]),i,{onChange:dt(e.onChange,e.value===void 0?P=>B(P.target.value):void 0),minRows:K(),autoScrollbar:w,ref:t,readOnly:R,className:x("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},$?{"aria-describedby":$}:{})),V&&!R&&!i.disabled&&E.createElement(Bu,{maxLengthId:G,maxLength:b,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:z.length,size:u,i18n:h}),E.createElement("div",{className:x("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},s&&E.createElement(Ka,{size:u,showIcon:!0},e.error)))});var Dn=e=>e.type==="checkbox",Qe=e=>e instanceof Date,ke=e=>e==null;const vi=e=>typeof e=="object";var ue=e=>!ke(e)&&!Array.isArray(e)&&vi(e)&&!Qe(e),yi=e=>ue(e)&&e.target?Dn(e.target)?e.target.checked:e.target.value:e,Gu=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,bi=(e,t)=>e.has(Gu(t)),Uu=e=>{const t=e.constructor&&e.constructor.prototype;return ue(t)&&t.hasOwnProperty("isPrototypeOf")},sr=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function me(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(sr&&(e instanceof Blob||n))&&(r||ue(e)))if(t=r?[]:{},!r&&!Uu(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=me(e[a]));else return e;return t}var pt=e=>Array.isArray(e)?e.filter(Boolean):[],se=e=>e===void 0,q=(e,t,r)=>{if(!t||!ue(e))return r;const n=pt(t.split(/[,[\].]+?/)).reduce((a,i)=>ke(a)?a:a[i],e);return se(n)||n===e?se(e[t])?r:e[t]:n},we=e=>typeof e=="boolean",or=e=>/^\w*$/.test(e),hi=e=>pt(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ee=(e,t,r)=>{let n=-1;const a=or(t)?[t]:hi(t),i=a.length,l=i-1;for(;++n<i;){const s=a[n];let o=r;if(n!==l){const u=e[s];o=ue(u)||Array.isArray(u)?u:isNaN(+a[n+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=o,e=e[s]}};const rt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Ne={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},qe={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ki=E.createContext(null),yn=()=>E.useContext(ki),Hu=e=>{const{children:t,...r}=e;return E.createElement(ki.Provider,{value:r},t)};var Ei=(e,t,r,n=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const l=i;return t._proxyFormState[l]!==Ne.all&&(t._proxyFormState[l]=!n||Ne.all),r&&(r[l]=!0),e[l]}});return a};const ur=typeof window<"u"?c.useLayoutEffect:c.useEffect;function zu(e){const t=yn(),{control:r=t.control,disabled:n,name:a,exact:i}=e||{},[l,s]=E.useState(r._formState),o=E.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return ur(()=>r._subscribe({name:a,formState:o.current,exact:i,callback:u=>{!n&&s({...r._formState,...u})}}),[a,n,i]),E.useEffect(()=>{o.current.isValid&&r._setValid(!0)},[r]),E.useMemo(()=>Ei(l,r,o.current,!1),[l,r])}var Le=e=>typeof e=="string",Ri=(e,t,r,n,a)=>Le(e)?(n&&t.watch.add(e),q(r,e,a)):Array.isArray(e)?e.map(i=>(n&&t.watch.add(i),q(r,i))):(n&&(t.watchAll=!0),r);function Wu(e){const t=yn(),{control:r=t.control,name:n,defaultValue:a,disabled:i,exact:l}=e||{},s=E.useRef(a),[o,u]=E.useState(r._getWatch(n,s.current));return ur(()=>r._subscribe({name:n,formState:{values:!0},exact:l,callback:d=>!i&&u(Ri(n,r._names,d.values||r._formValues,!1,s.current))}),[n,r,i,l]),E.useEffect(()=>r._removeUnmounted()),o}function wi(e){const t=yn(),{name:r,disabled:n,control:a=t.control,shouldUnregister:i}=e,l=bi(a._names.array,r),s=Wu({control:a,name:r,defaultValue:q(a._formValues,r,q(a._defaultValues,r,e.defaultValue)),exact:!0}),o=zu({control:a,name:r,exact:!0}),u=E.useRef(e),d=E.useRef(a.register(r,{...e.rules,value:s,...we(e.disabled)?{disabled:e.disabled}:{}})),f=E.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!q(o.errors,r)},isDirty:{enumerable:!0,get:()=>!!q(o.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!q(o.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!q(o.validatingFields,r)},error:{enumerable:!0,get:()=>q(o.errors,r)}}),[o,r]),p=E.useCallback(v=>d.current.onChange({target:{value:yi(v),name:r},type:rt.CHANGE}),[r]),m=E.useCallback(()=>d.current.onBlur({target:{value:q(a._formValues,r),name:r},type:rt.BLUR}),[r,a._formValues]),b=E.useCallback(v=>{const w=q(a._fields,r);w&&v&&(w._f.ref={focus:()=>v.focus&&v.focus(),select:()=>v.select&&v.select(),setCustomValidity:h=>v.setCustomValidity(h),reportValidity:()=>v.reportValidity()})},[a._fields,r]),y=E.useMemo(()=>({name:r,value:s,...we(n)||o.disabled?{disabled:o.disabled||n}:{},onChange:p,onBlur:m,ref:b}),[r,n,o.disabled,p,m,b,s]);return E.useEffect(()=>{const v=a._options.shouldUnregister||i;a.register(r,{...u.current.rules,...we(u.current.disabled)?{disabled:u.current.disabled}:{}});const w=(h,R)=>{const T=q(a._fields,h);T&&T._f&&(T._f.mount=R)};if(w(r,!0),v){const h=me(q(a._options.defaultValues,r));ee(a._defaultValues,r,h),se(q(a._formValues,r))&&ee(a._formValues,r,h)}return!l&&a.register(r),()=>{(l?v&&!a._state.action:v)?a.unregister(r):w(r,!1)}},[r,a,l,i]),E.useEffect(()=>{a._setDisabledField({disabled:n,name:r})},[n,r,a]),E.useMemo(()=>({field:y,formState:o,fieldState:f}),[y,o,f])}var Yu=(e,t,r,n,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:a||!0}}:{},Tn=e=>Array.isArray(e)?e:[e],zr=()=>{let e=[];return{get observers(){return e},next:a=>{for(const i of e)i.next&&i.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(i=>i!==a)}}),unsubscribe:()=>{e=[]}}},qt=e=>ke(e)||!vi(e);function He(e,t){if(qt(e)||qt(t))return e===t;if(Qe(e)&&Qe(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const a of r){const i=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const l=t[a];if(Qe(i)&&Qe(l)||ue(i)&&ue(l)||Array.isArray(i)&&Array.isArray(l)?!He(i,l):i!==l)return!1}}return!0}var Ee=e=>ue(e)&&!Object.keys(e).length,dr=e=>e.type==="file",Ie=e=>typeof e=="function",at=e=>{if(!sr)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Oi=e=>e.type==="select-multiple",cr=e=>e.type==="radio",Ju=e=>cr(e)||Dn(e),jt=e=>at(e)&&e.isConnected;function Xu(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=se(e)?n++:e[t[n++]];return e}function Zu(e){for(const t in e)if(e.hasOwnProperty(t)&&!se(e[t]))return!1;return!0}function ce(e,t){const r=Array.isArray(t)?t:or(t)?[t]:hi(t),n=r.length===1?e:Xu(e,r),a=r.length-1,i=r[a];return n&&delete n[i],a!==0&&(ue(n)&&Ee(n)||Array.isArray(n)&&Zu(n))&&ce(e,r.slice(0,-1)),e}var _i=e=>{for(const t in e)if(Ie(e[t]))return!0;return!1};function it(e,t={}){const r=Array.isArray(e);if(ue(e)||r)for(const n in e)Array.isArray(e[n])||ue(e[n])&&!_i(e[n])?(t[n]=Array.isArray(e[n])?[]:{},it(e[n],t[n])):ke(e[n])||(t[n]=!0);return t}function Si(e,t,r){const n=Array.isArray(e);if(ue(e)||n)for(const a in e)Array.isArray(e[a])||ue(e[a])&&!_i(e[a])?se(t)||qt(r[a])?r[a]=Array.isArray(e[a])?it(e[a],[]):{...it(e[a])}:Si(e[a],ke(t)?{}:t[a],r[a]):r[a]=!He(e[a],t[a]);return r}var Rn=(e,t)=>Si(e,t,it(t));const Wr={value:!1,isValid:!1},Yr={value:!0,isValid:!0};var Ti=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!se(e[0].attributes.value)?se(e[0].value)||e[0].value===""?Yr:{value:e[0].value,isValid:!0}:Yr:Wr}return Wr},xi=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>se(e)?e:t?e===""?NaN:e&&+e:r&&Le(e)?new Date(e):n?n(e):e;const Jr={isValid:!1,value:null};var Pi=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,Jr):Jr;function Xr(e){const t=e.ref;return dr(t)?t.files:cr(t)?Pi(e.refs).value:Oi(t)?[...t.selectedOptions].map(({value:r})=>r):Dn(t)?Ti(e.refs).value:xi(se(t.value)?e.ref.value:t.value,e)}var Qu=(e,t,r,n)=>{const a={};for(const i of e){const l=q(t,i);l&&ee(a,i,l._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:n}},lt=e=>e instanceof RegExp,wn=e=>se(e)?e:lt(e)?e.source:ue(e)?lt(e.value)?e.value.source:e.value:e,Zr=e=>({isOnSubmit:!e||e===Ne.onSubmit,isOnBlur:e===Ne.onBlur,isOnChange:e===Ne.onChange,isOnAll:e===Ne.all,isOnTouch:e===Ne.onTouched});const Qr="AsyncFunction";var ed=e=>!!e&&!!e.validate&&!!(Ie(e.validate)&&e.validate.constructor.name===Qr||ue(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Qr)),nd=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ea=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const xn=(e,t,r,n)=>{for(const a of r||Object.keys(e)){const i=q(e,a);if(i){const{_f:l,...s}=i;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],a)&&!n)return!0;if(l.ref&&t(l.ref,l.name)&&!n)return!0;if(xn(s,t))break}else if(ue(s)&&xn(s,t))break}}};function na(e,t,r){const n=q(e,r);if(n||or(r))return{error:n,name:r};const a=r.split(".");for(;a.length;){const i=a.join("."),l=q(t,i),s=q(e,i);if(l&&!Array.isArray(l)&&r!==i)return{name:r};if(s&&s.type)return{name:i,error:s};if(s&&s.root&&s.root.type)return{name:`${i}.root`,error:s.root};a.pop()}return{name:r}}var td=(e,t,r,n)=>{r(e);const{name:a,...i}=e;return Ee(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(l=>t[l]===(!n||Ne.all))},rd=(e,t,r)=>!e||!t||e===t||Tn(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),ad=(e,t,r,n,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(t||e):(r?n.isOnBlur:a.isOnBlur)?!e:(r?n.isOnChange:a.isOnChange)?e:!0,id=(e,t)=>!pt(q(e,t)).length&&ce(e,t),ld=(e,t,r)=>{const n=Tn(q(e,r));return ee(n,"root",t[r]),ee(e,r,n),e},Yn=e=>Le(e);function ta(e,t,r="validate"){if(Yn(e)||Array.isArray(e)&&e.every(Yn)||we(e)&&!e)return{type:r,message:Yn(e)?e:"",ref:t}}var sn=e=>ue(e)&&!lt(e)?e:{value:e,message:""},ra=async(e,t,r,n,a,i)=>{const{ref:l,refs:s,required:o,maxLength:u,minLength:d,min:f,max:p,pattern:m,validate:b,name:y,valueAsNumber:v,mount:w}=e._f,h=q(r,y);if(!w||t.has(y))return{};const R=s?s[0]:l,T=P=>{a&&R.reportValidity&&(R.setCustomValidity(we(P)?"":P||""),R.reportValidity())},x={},G=cr(l),V=Dn(l),z=G||V,B=(v||dr(l))&&se(l.value)&&se(h)||at(l)&&l.value===""||h===""||Array.isArray(h)&&!h.length,K=Yu.bind(null,y,n,x),$=(P,_,O,A=qe.maxLength,F=qe.minLength)=>{const M=P?_:O;x[y]={type:P?A:F,message:M,ref:l,...K(P?A:F,M)}};if(i?!Array.isArray(h)||!h.length:o&&(!z&&(B||ke(h))||we(h)&&!h||V&&!Ti(s).isValid||G&&!Pi(s).isValid)){const{value:P,message:_}=Yn(o)?{value:!!o,message:o}:sn(o);if(P&&(x[y]={type:qe.required,message:_,ref:R,...K(qe.required,_)},!n))return T(_),x}if(!B&&(!ke(f)||!ke(p))){let P,_;const O=sn(p),A=sn(f);if(!ke(h)&&!isNaN(h)){const F=l.valueAsNumber||h&&+h;ke(O.value)||(P=F>O.value),ke(A.value)||(_=F<A.value)}else{const F=l.valueAsDate||new Date(h),M=U=>new Date(new Date().toDateString()+" "+U),I=l.type=="time",N=l.type=="week";Le(O.value)&&h&&(P=I?M(h)>M(O.value):N?h>O.value:F>new Date(O.value)),Le(A.value)&&h&&(_=I?M(h)<M(A.value):N?h<A.value:F<new Date(A.value))}if((P||_)&&($(!!P,O.message,A.message,qe.max,qe.min),!n))return T(x[y].message),x}if((u||d)&&!B&&(Le(h)||i&&Array.isArray(h))){const P=sn(u),_=sn(d),O=!ke(P.value)&&h.length>+P.value,A=!ke(_.value)&&h.length<+_.value;if((O||A)&&($(O,P.message,_.message),!n))return T(x[y].message),x}if(m&&!B&&Le(h)){const{value:P,message:_}=sn(m);if(lt(P)&&!h.match(P)&&(x[y]={type:qe.pattern,message:_,ref:l,...K(qe.pattern,_)},!n))return T(_),x}if(b){if(Ie(b)){const P=await b(h,r),_=ta(P,R);if(_&&(x[y]={..._,...K(qe.validate,_.message)},!n))return T(_.message),x}else if(ue(b)){let P={};for(const _ in b){if(!Ee(P)&&!n)break;const O=ta(await b[_](h,r),R,_);O&&(P={...O,...K(_,O.message)},T(O.message),n&&(x[y]=P))}if(!Ee(P)&&(x[y]={ref:R,...P},!n))return x}}return T(!0),x};const sd={mode:Ne.onSubmit,reValidateMode:Ne.onChange,shouldFocusError:!0};function od(e={}){let t={...sd,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:Ie(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const n={};let a=ue(t.defaultValues)||ue(t.values)?me(t.defaultValues||t.values)||{}:{},i=t.shouldUnregister?{}:me(a),l={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},o,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let f={...d};const p={array:zr(),state:zr()},m=t.criteriaMode===Ne.all,b=g=>k=>{clearTimeout(u),u=setTimeout(g,k)},y=async g=>{if(!t.disabled&&(d.isValid||f.isValid||g)){const k=t.resolver?Ee((await V()).errors):await B(n,!0);k!==r.isValid&&p.state.next({isValid:k})}},v=(g,k)=>{!t.disabled&&(d.isValidating||d.validatingFields||f.isValidating||f.validatingFields)&&((g||Array.from(s.mount)).forEach(S=>{S&&(k?ee(r.validatingFields,S,k):ce(r.validatingFields,S))}),p.state.next({validatingFields:r.validatingFields,isValidating:!Ee(r.validatingFields)}))},w=(g,k=[],S,C,D=!0,L=!0)=>{if(C&&S&&!t.disabled){if(l.action=!0,L&&Array.isArray(q(n,g))){const H=S(q(n,g),C.argA,C.argB);D&&ee(n,g,H)}if(L&&Array.isArray(q(r.errors,g))){const H=S(q(r.errors,g),C.argA,C.argB);D&&ee(r.errors,g,H),id(r.errors,g)}if((d.touchedFields||f.touchedFields)&&L&&Array.isArray(q(r.touchedFields,g))){const H=S(q(r.touchedFields,g),C.argA,C.argB);D&&ee(r.touchedFields,g,H)}(d.dirtyFields||f.dirtyFields)&&(r.dirtyFields=Rn(a,i)),p.state.next({name:g,isDirty:$(g,k),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ee(i,g,k)},h=(g,k)=>{ee(r.errors,g,k),p.state.next({errors:r.errors})},R=g=>{r.errors=g,p.state.next({errors:r.errors,isValid:!1})},T=(g,k,S,C)=>{const D=q(n,g);if(D){const L=q(i,g,se(S)?q(a,g):S);se(L)||C&&C.defaultChecked||k?ee(i,g,k?L:Xr(D._f)):O(g,L),l.mount&&y()}},x=(g,k,S,C,D)=>{let L=!1,H=!1;const Q={name:g};if(!t.disabled){if(!S||C){(d.isDirty||f.isDirty)&&(H=r.isDirty,r.isDirty=Q.isDirty=$(),L=H!==Q.isDirty);const ne=He(q(a,g),k);H=!!q(r.dirtyFields,g),ne?ce(r.dirtyFields,g):ee(r.dirtyFields,g,!0),Q.dirtyFields=r.dirtyFields,L=L||(d.dirtyFields||f.dirtyFields)&&H!==!ne}if(S){const ne=q(r.touchedFields,g);ne||(ee(r.touchedFields,g,S),Q.touchedFields=r.touchedFields,L=L||(d.touchedFields||f.touchedFields)&&ne!==S)}L&&D&&p.state.next(Q)}return L?Q:{}},G=(g,k,S,C)=>{const D=q(r.errors,g),L=(d.isValid||f.isValid)&&we(k)&&r.isValid!==k;if(t.delayError&&S?(o=b(()=>h(g,S)),o(t.delayError)):(clearTimeout(u),o=null,S?ee(r.errors,g,S):ce(r.errors,g)),(S?!He(D,S):D)||!Ee(C)||L){const H={...C,...L&&we(k)?{isValid:k}:{},errors:r.errors,name:g};r={...r,...H},p.state.next(H)}},V=async g=>{v(g,!0);const k=await t.resolver(i,t.context,Qu(g||s.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return v(g),k},z=async g=>{const{errors:k}=await V(g);if(g)for(const S of g){const C=q(k,S);C?ee(r.errors,S,C):ce(r.errors,S)}else r.errors=k;return k},B=async(g,k,S={valid:!0})=>{for(const C in g){const D=g[C];if(D){const{_f:L,...H}=D;if(L){const Q=s.array.has(L.name),ne=D._f&&ed(D._f);ne&&d.validatingFields&&v([C],!0);const Te=await ra(D,s.disabled,i,m,t.shouldUseNativeValidation&&!k,Q);if(ne&&d.validatingFields&&v([C]),Te[L.name]&&(S.valid=!1,k))break;!k&&(q(Te,L.name)?Q?ld(r.errors,Te,L.name):ee(r.errors,L.name,Te[L.name]):ce(r.errors,L.name))}!Ee(H)&&await B(H,k,S)}}return S.valid},K=()=>{for(const g of s.unMount){const k=q(n,g);k&&(k._f.refs?k._f.refs.every(S=>!jt(S)):!jt(k._f.ref))&&ie(g)}s.unMount=new Set},$=(g,k)=>!t.disabled&&(g&&k&&ee(i,g,k),!He(U(),a)),P=(g,k,S)=>Ri(g,s,{...l.mount?i:se(k)?a:Le(g)?{[g]:k}:k},S,k),_=g=>pt(q(l.mount?i:a,g,t.shouldUnregister?q(a,g,[]):[])),O=(g,k,S={})=>{const C=q(n,g);let D=k;if(C){const L=C._f;L&&(!L.disabled&&ee(i,g,xi(k,L)),D=at(L.ref)&&ke(k)?"":k,Oi(L.ref)?[...L.ref.options].forEach(H=>H.selected=D.includes(H.value)):L.refs?Dn(L.ref)?L.refs.forEach(H=>{(!H.defaultChecked||!H.disabled)&&(Array.isArray(D)?H.checked=!!D.find(Q=>Q===H.value):H.checked=D===H.value||!!D)}):L.refs.forEach(H=>H.checked=H.value===D):dr(L.ref)?L.ref.value="":(L.ref.value=D,L.ref.type||p.state.next({name:g,values:me(i)})))}(S.shouldDirty||S.shouldTouch)&&x(g,D,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&N(g)},A=(g,k,S)=>{for(const C in k){if(!k.hasOwnProperty(C))return;const D=k[C],L=g+"."+C,H=q(n,L);(s.array.has(g)||ue(D)||H&&!H._f)&&!Qe(D)?A(L,D,S):O(L,D,S)}},F=(g,k,S={})=>{const C=q(n,g),D=s.array.has(g),L=me(k);ee(i,g,L),D?(p.array.next({name:g,values:me(i)}),(d.isDirty||d.dirtyFields||f.isDirty||f.dirtyFields)&&S.shouldDirty&&p.state.next({name:g,dirtyFields:Rn(a,i),isDirty:$(g,L)})):C&&!C._f&&!ke(L)?A(g,L,S):O(g,L,S),ea(g,s)&&p.state.next({...r}),p.state.next({name:l.mount?g:void 0,values:me(i)})},M=async g=>{l.mount=!0;const k=g.target;let S=k.name,C=!0;const D=q(n,S),L=ne=>{C=Number.isNaN(ne)||Qe(ne)&&isNaN(ne.getTime())||He(ne,q(i,S,ne))},H=Zr(t.mode),Q=Zr(t.reValidateMode);if(D){let ne,Te;const Cn=k.type?Xr(D._f):yi(g),Ue=g.type===rt.BLUR||g.type===rt.FOCUS_OUT,Gi=!nd(D._f)&&!t.resolver&&!q(r.errors,S)&&!D._f.deps||ad(Ue,q(r.touchedFields,S),r.isSubmitted,Q,H),yt=ea(S,s,Ue);ee(i,S,Cn),Ue?(D._f.onBlur&&D._f.onBlur(g),o&&o(0)):D._f.onChange&&D._f.onChange(g);const bt=x(S,Cn,Ue),Ui=!Ee(bt)||yt;if(!Ue&&p.state.next({name:S,type:g.type,values:me(i)}),Gi)return(d.isValid||f.isValid)&&(t.mode==="onBlur"?Ue&&y():Ue||y()),Ui&&p.state.next({name:S,...yt?{}:bt});if(!Ue&&yt&&p.state.next({...r}),t.resolver){const{errors:pr}=await V([S]);if(L(Cn),C){const Hi=na(r.errors,n,S),vr=na(pr,n,Hi.name||S);ne=vr.error,S=vr.name,Te=Ee(pr)}}else v([S],!0),ne=(await ra(D,s.disabled,i,m,t.shouldUseNativeValidation))[S],v([S]),L(Cn),C&&(ne?Te=!1:(d.isValid||f.isValid)&&(Te=await B(n,!0)));C&&(D._f.deps&&N(D._f.deps),G(S,Te,ne,bt))}},I=(g,k)=>{if(q(r.errors,k)&&g.focus)return g.focus(),1},N=async(g,k={})=>{let S,C;const D=Tn(g);if(t.resolver){const L=await z(se(g)?g:D);S=Ee(L),C=g?!D.some(H=>q(L,H)):S}else g?(C=(await Promise.all(D.map(async L=>{const H=q(n,L);return await B(H&&H._f?{[L]:H}:H)}))).every(Boolean),!(!C&&!r.isValid)&&y()):C=S=await B(n);return p.state.next({...!Le(g)||(d.isValid||f.isValid)&&S!==r.isValid?{}:{name:g},...t.resolver||!g?{isValid:S}:{},errors:r.errors}),k.shouldFocus&&!C&&xn(n,I,g?D:s.mount),C},U=g=>{const k={...l.mount?i:a};return se(g)?k:Le(g)?q(k,g):g.map(S=>q(k,S))},W=(g,k)=>({invalid:!!q((k||r).errors,g),isDirty:!!q((k||r).dirtyFields,g),error:q((k||r).errors,g),isValidating:!!q(r.validatingFields,g),isTouched:!!q((k||r).touchedFields,g)}),Y=g=>{g&&Tn(g).forEach(k=>ce(r.errors,k)),p.state.next({errors:g?r.errors:{}})},J=(g,k,S)=>{const C=(q(n,g,{_f:{}})._f||{}).ref,D=q(r.errors,g)||{},{ref:L,message:H,type:Q,...ne}=D;ee(r.errors,g,{...ne,...k,ref:C}),p.state.next({name:g,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&C&&C.focus&&C.focus()},Ae=(g,k)=>Ie(g)?p.state.subscribe({next:S=>g(P(void 0,k),S)}):P(g,k,!0),pe=g=>p.state.subscribe({next:k=>{rd(g.name,k.name,g.exact)&&td(k,g.formState||d,hn,g.reRenderRoot)&&g.callback({values:{...i},...r,...k})}}).unsubscribe,de=g=>(l.mount=!0,f={...f,...g.formState},pe({...g,formState:f})),ie=(g,k={})=>{for(const S of g?Tn(g):s.mount)s.mount.delete(S),s.array.delete(S),k.keepValue||(ce(n,S),ce(i,S)),!k.keepError&&ce(r.errors,S),!k.keepDirty&&ce(r.dirtyFields,S),!k.keepTouched&&ce(r.touchedFields,S),!k.keepIsValidating&&ce(r.validatingFields,S),!t.shouldUnregister&&!k.keepDefaultValue&&ce(a,S);p.state.next({values:me(i)}),p.state.next({...r,...k.keepDirty?{isDirty:$()}:{}}),!k.keepIsValid&&y()},Z=({disabled:g,name:k})=>{(we(g)&&l.mount||g||s.disabled.has(k))&&(g?s.disabled.add(k):s.disabled.delete(k))},re=(g,k={})=>{let S=q(n,g);const C=we(k.disabled)||we(t.disabled);return ee(n,g,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:g}},name:g,mount:!0,...k}}),s.mount.add(g),S?Z({disabled:we(k.disabled)?k.disabled:t.disabled,name:g}):T(g,!0,k.value),{...C?{disabled:k.disabled||t.disabled}:{},...t.progressive?{required:!!k.required,min:wn(k.min),max:wn(k.max),minLength:wn(k.minLength),maxLength:wn(k.maxLength),pattern:wn(k.pattern)}:{},name:g,onChange:M,onBlur:M,ref:D=>{if(D){re(g,k),S=q(n,g);const L=se(D.value)&&D.querySelectorAll&&D.querySelectorAll("input,select,textarea")[0]||D,H=Ju(L),Q=S._f.refs||[];if(H?Q.find(ne=>ne===L):L===S._f.ref)return;ee(n,g,{_f:{...S._f,...H?{refs:[...Q.filter(jt),L,...Array.isArray(q(a,g))?[{}]:[]],ref:{type:L.type,name:g}}:{ref:L}}}),T(g,!1,void 0,L)}else S=q(n,g,{}),S._f&&(S._f.mount=!1),(t.shouldUnregister||k.shouldUnregister)&&!(bi(s.array,g)&&l.action)&&s.unMount.add(g)}}},ve=()=>t.shouldFocusError&&xn(n,I,s.mount),be=g=>{we(g)&&(p.state.next({disabled:g}),xn(n,(k,S)=>{const C=q(n,S);C&&(k.disabled=C._f.disabled||g,Array.isArray(C._f.refs)&&C._f.refs.forEach(D=>{D.disabled=C._f.disabled||g}))},0,!1))},he=(g,k)=>async S=>{let C;S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let D=me(i);if(p.state.next({isSubmitting:!0}),t.resolver){const{errors:L,values:H}=await V();r.errors=L,D=H}else await B(n);if(s.disabled.size)for(const L of s.disabled)ee(D,L,void 0);if(ce(r.errors,"root"),Ee(r.errors)){p.state.next({errors:{}});try{await g(D,S)}catch(L){C=L}}else k&&await k({...r.errors},S),ve(),setTimeout(ve);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ee(r.errors)&&!C,submitCount:r.submitCount+1,errors:r.errors}),C)throw C},Xe=(g,k={})=>{q(n,g)&&(se(k.defaultValue)?F(g,me(q(a,g))):(F(g,k.defaultValue),ee(a,g,me(k.defaultValue))),k.keepTouched||ce(r.touchedFields,g),k.keepDirty||(ce(r.dirtyFields,g),r.isDirty=k.defaultValue?$(g,me(q(a,g))):$()),k.keepError||(ce(r.errors,g),d.isValid&&y()),p.state.next({...r}))},De=(g,k={})=>{const S=g?me(g):a,C=me(S),D=Ee(g),L=D?a:C;if(k.keepDefaultValues||(a=S),!k.keepValues){if(k.keepDirtyValues){const H=new Set([...s.mount,...Object.keys(Rn(a,i))]);for(const Q of Array.from(H))q(r.dirtyFields,Q)?ee(L,Q,q(i,Q)):F(Q,q(L,Q))}else{if(sr&&se(g))for(const H of s.mount){const Q=q(n,H);if(Q&&Q._f){const ne=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(at(ne)){const Te=ne.closest("form");if(Te){Te.reset();break}}}}for(const H of s.mount)F(H,q(L,H))}i=me(L),p.array.next({values:{...L}}),p.state.next({values:{...L}})}s={mount:k.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!d.isValid||!!k.keepIsValid||!!k.keepDirtyValues,l.watch=!!t.shouldUnregister,p.state.next({submitCount:k.keepSubmitCount?r.submitCount:0,isDirty:D?!1:k.keepDirty?r.isDirty:!!(k.keepDefaultValues&&!He(g,a)),isSubmitted:k.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:D?{}:k.keepDirtyValues?k.keepDefaultValues&&i?Rn(a,i):r.dirtyFields:k.keepDefaultValues&&g?Rn(a,g):k.keepDirty?r.dirtyFields:{},touchedFields:k.keepTouched?r.touchedFields:{},errors:k.keepErrors?r.errors:{},isSubmitSuccessful:k.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Ve=(g,k)=>De(Ie(g)?g(i):g,k),bn=(g,k={})=>{const S=q(n,g),C=S&&S._f;if(C){const D=C.refs?C.refs[0]:C.ref;D.focus&&(D.focus(),k.shouldSelect&&Ie(D.select)&&D.select())}},hn=g=>{r={...r,...g}},ln={control:{register:re,unregister:ie,getFieldState:W,handleSubmit:he,setError:J,_subscribe:pe,_runSchema:V,_focusError:ve,_getWatch:P,_getDirty:$,_setValid:y,_setFieldArray:w,_setDisabledField:Z,_setErrors:R,_getFieldArray:_,_reset:De,_resetDefaultValues:()=>Ie(t.defaultValues)&&t.defaultValues().then(g=>{Ve(g,t.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:K,_disableForm:be,_subjects:p,_proxyFormState:d,get _fields(){return n},get _formValues(){return i},get _state(){return l},set _state(g){l=g},get _defaultValues(){return a},get _names(){return s},set _names(g){s=g},get _formState(){return r},get _options(){return t},set _options(g){t={...t,...g}}},subscribe:de,trigger:N,register:re,handleSubmit:he,watch:Ae,setValue:F,getValues:U,reset:Ve,resetField:Xe,clearErrors:Y,unregister:ie,setError:J,setFocus:bn,getFieldState:W};return{...ln,formControl:ln}}function ud(e={}){const t=E.useRef(void 0),r=E.useRef(void 0),[n,a]=E.useState({isDirty:!1,isValidating:!1,isLoading:Ie(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Ie(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:od(e),formState:n},e.formControl&&e.defaultValues&&!Ie(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const i=t.current.control;return i._options=e,ur(()=>{const l=i._subscribe({formState:i._proxyFormState,callback:()=>a({...i._formState}),reRenderRoot:!0});return a(s=>({...s,isReady:!0})),i._formState.isReady=!0,l},[i]),E.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),E.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),E.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),E.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),E.useEffect(()=>{if(i._proxyFormState.isDirty){const l=i._getDirty();l!==n.isDirty&&i._subjects.state.next({isDirty:l})}},[i,n.isDirty]),E.useEffect(()=>{e.values&&!He(e.values,r.current)?(i._reset(e.values,i._options.resetOptions),r.current=e.values,a(l=>({...l}))):i._resetDefaultValues()},[i,e.values]),E.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=Ei(n,i),t.current}function dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var aa={exports:{}},On={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia;function cd(){if(ia)return On;ia=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,i){var l=null;if(i!==void 0&&(l=""+i),a.key!==void 0&&(l=""+a.key),"key"in a){i={};for(var s in a)s!=="key"&&(i[s]=a[s])}else i=a;return a=i.ref,{$$typeof:e,type:n,key:l,ref:a!==void 0?a:null,props:i}}return On.Fragment=t,On.jsx=r,On.jsxs=r,On}var la;function fd(){return la||(la=1,aa.exports=cd()),aa.exports}var Oe=fd();const md=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Oe.jsx(ko,{variant:"warning",size:"small",children:Oe.jsx(Ge,{gap:"2",children:E.Children.map(e,t=>Oe.jsx(ye,{size:"small",children:t},Yi(t)?t.key:t))})}),Vn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};an(Vn);const st="#B7B1A9",ji=4,gd=(e,t,r)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${st};
    border-radius: ${ji}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${st};
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
`,pd=(e,t,r)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${st};
    border-radius: ${ji}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${st};
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
`,vd=(e,t,r,n)=>t?pd(e,r,n):gd(e,r,n),yd=(e,t,r)=>r?"":t?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,bd=({children:e,alignOffset:t=0,alignLeft:r=!1,marginTop:n=0,marginLeft:a=0,hideBorder:i=!1})=>Oe.jsxs(Oe.Fragment,{children:[Oe.jsx("style",{dangerouslySetInnerHTML:{__html:vd(t,r,n,a)}}),Oe.jsx("div",{className:yd(t,r,i),children:e})]});var sa={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var oa;function hd(){return oa||(oa=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(i=a(i,n.call(this,s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var s in i)t.call(i,s)&&i[s]&&(l=a(l,this&&this[s]||s));return l}function a(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(sa)),sa.exports}var kd=hd();const fr=dd(kd),Ed="_borderbox_1vkvn_1",Rd="_error_1vkvn_5",wd="_warning_1vkvn_8",Od={borderbox:Ed,error:Rd,warning:wd};fr.bind(Od);const _d="_aksjonspunkt_kn1hn_1",Sd="_erAksjonspunktApent_kn1hn_4",Td="_erIkkeGodkjentAvBeslutter_kn1hn_8",xd={aksjonspunkt:_d,erAksjonspunktApent:Sd,erIkkeGodkjentAvBeslutter:Td};fr.bind(xd);an(Vn);an(Vn);const Pd="_divider_1t980_1",jd="_dividerParagraf_1t980_8",Ad="_leftPanel_1t980_11",Nd="_rightPanel_1t980_14",Id={divider:Pd,dividerParagraf:jd,leftPanel:Ad,rightPanel:Nd};fr.bind(Id);const Ai=()=>Oe.jsx("span",{"data-testid":"editedIcon",children:Oe.jsx(Al,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});an(Vn);const Ld=an(Vn),Md=({tekst:e,children:t})=>{const[r,n]=c.useState(!1);if(!e)return t;const a=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return Oe.jsx(gi,{content:Ld.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Oe.jsx("span",{"aria-hidden":"true",onClick:a,children:t??e})})},ua={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},At=({beløp:e,kr:t=!1,rød:r=!1})=>{const n=e==null?void 0:e.toString().replace(/\s/g,"");return Oe.jsx(Md,{tekst:n,children:Oe.jsxs("span",{className:r?ua.rød:ua.default,children:[n?qa(n):"-",n&&t&&" kr"]})})};function Fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var da={exports:{}},_n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca;function Dd(){if(ca)return _n;ca=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,i){var l=null;if(i!==void 0&&(l=""+i),a.key!==void 0&&(l=""+a.key),"key"in a){i={};for(var s in a)s!=="key"&&(i[s]=a[s])}else i=a;return a=i.ref,{$$typeof:e,type:n,key:l,ref:a!==void 0?a:null,props:i}}return _n.Fragment=t,_n.jsx=r,_n.jsxs=r,_n}var fa;function Vd(){return fa||(fa=1,da.exports=Dd()),da.exports}var le=Vd();const Ni=e=>e.reduce((t,r,n)=>({...t,[n]:a=>r(a)||!0}),{}),Ii=(e,t)=>{const r=t.split(".").reduce((n,a)=>n!==void 0?n[a]:n,e);return r==null?void 0:r.message};var Ct={exports:{}},qd=Ct.exports,ma;function Cd(){return ma||(ma=1,function(e,t){(function(r,n){e.exports=n()})(qd,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,l=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,o={},u=function(v){return(v=+v)+(v>68?1900:2e3)},d=function(v){return function(w){this[v]=+w}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var h=w.match(/([+-]|\d\d)/g),R=60*h[1]+(+h[2]||0);return R===0?0:h[0]==="+"?-R:R}(v)}],p=function(v){var w=o[v];return w&&(w.indexOf?w:w.s.concat(w.f))},m=function(v,w){var h,R=o.meridiem;if(R){for(var T=1;T<=24;T+=1)if(v.indexOf(R(T,0,w))>-1){h=T>12;break}}else h=v===(w?"pm":"PM");return h},b={A:[s,function(v){this.afternoon=m(v,!1)}],a:[s,function(v){this.afternoon=m(v,!0)}],Q:[a,function(v){this.month=3*(v-1)+1}],S:[a,function(v){this.milliseconds=100*+v}],SS:[i,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[l,d("seconds")],ss:[l,d("seconds")],m:[l,d("minutes")],mm:[l,d("minutes")],H:[l,d("hours")],h:[l,d("hours")],HH:[l,d("hours")],hh:[l,d("hours")],D:[l,d("day")],DD:[i,d("day")],Do:[s,function(v){var w=o.ordinal,h=v.match(/\d+/);if(this.day=h[0],w)for(var R=1;R<=31;R+=1)w(R).replace(/\[|\]/g,"")===v&&(this.day=R)}],w:[l,d("week")],ww:[i,d("week")],M:[l,d("month")],MM:[i,d("month")],MMM:[s,function(v){var w=p("months"),h=(p("monthsShort")||w.map(function(R){return R.slice(0,3)})).indexOf(v)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[s,function(v){var w=p("months").indexOf(v)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,d("year")],YY:[i,function(v){this.year=u(v)}],YYYY:[/\d{4}/,d("year")],Z:f,ZZ:f};function y(v){var w,h;w=v,h=o&&o.formats;for(var R=(v=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(K,$,P){var _=P&&P.toUpperCase();return $||h[P]||r[P]||h[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(O,A,F){return A||F.slice(1)})})).match(n),T=R.length,x=0;x<T;x+=1){var G=R[x],V=b[G],z=V&&V[0],B=V&&V[1];R[x]=B?{regex:z,parser:B}:G.replace(/^\[|\]$/g,"")}return function(K){for(var $={},P=0,_=0;P<T;P+=1){var O=R[P];if(typeof O=="string")_+=O.length;else{var A=O.regex,F=O.parser,M=K.slice(_),I=A.exec(M)[0];F.call($,I),K=K.replace(I,"")}}return function(N){var U=N.afternoon;if(U!==void 0){var W=N.hours;U?W<12&&(N.hours+=12):W===12&&(N.hours=0),delete N.afternoon}}($),$}}return function(v,w,h){h.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(u=v.parseTwoDigitYear);var R=w.prototype,T=R.parse;R.parse=function(x){var G=x.date,V=x.utc,z=x.args;this.$u=V;var B=z[1];if(typeof B=="string"){var K=z[2]===!0,$=z[3]===!0,P=K||$,_=z[2];$&&(_=z[2]),o=this.$locale(),!K&&_&&(o=h.Ls[_]),this.$d=function(M,I,N,U){try{if(["x","X"].indexOf(I)>-1)return new Date((I==="X"?1e3:1)*M);var W=y(I)(M),Y=W.year,J=W.month,Ae=W.day,pe=W.hours,de=W.minutes,ie=W.seconds,Z=W.milliseconds,re=W.zone,ve=W.week,be=new Date,he=Ae||(Y||J?1:be.getDate()),Xe=Y||be.getFullYear(),De=0;Y&&!J||(De=J>0?J-1:be.getMonth());var Ve,bn=pe||0,hn=de||0,qn=ie||0,ln=Z||0;return re?new Date(Date.UTC(Xe,De,he,bn,hn,qn,ln+60*re.offset*1e3)):N?new Date(Date.UTC(Xe,De,he,bn,hn,qn,ln)):(Ve=new Date(Xe,De,he,bn,hn,qn,ln),ve&&(Ve=U(Ve).week(ve).toDate()),Ve)}catch{return new Date("")}}(G,B,V,h),this.init(),_&&_!==!0&&(this.$L=this.locale(_).$L),P&&G!=this.format(B)&&(this.$d=new Date("")),o={}}else if(B instanceof Array)for(var O=B.length,A=1;A<=O;A+=1){z[1]=B[A-1];var F=h.apply(this,z);if(F.isValid()){this.$d=F.$d,this.$L=F.$L,this.init();break}A===O&&(this.$d=new Date(""))}else T.call(this,x)}}})}(Ct)),Ct.exports}var Bd=Cd();const Kd=Fd(Bd),$d="_textarea_1snk6_1",Gd="_readOnlyField_1snk6_7",ga={textarea:$d,readOnlyField:Gd},Ud=e=>e!=null&&e!=="",Hd=({label:e,value:t,isEdited:r=!1,type:n,hideLabel:a,size:i})=>Ud(t)?le.jsxs(Ge,{gap:"1",children:[e&&!a&&le.jsx(pn,{size:i,children:e}),le.jsxs(nn,{gap:"2",align:"center",wrap:!1,children:[le.jsx(Jt,{className:n==="textarea"?ga.textarea:ga.readOnlyField,size:i,children:t}),r&&le.jsx(Ai,{})]})]}):null;ze.extend(Kd);const zd="_hideRadioLabels_1u3xf_1",Wd={hideRadioLabels:zd},Yd=({label:e,description:t,name:r,validate:n=[],radios:a,onChange:i,disabled:l=!1,isReadOnly:s=!1,isHorizontal:o=!1,parse:u=y=>y,isTrueOrFalseSelection:d=!1,hideLegend:f=!1,hideRadioLabels:p=!1,isEdited:m=!1,size:b="small"})=>{const{formState:{errors:y}}=yn(),{field:v}=wi({name:r,rules:{validate:c.useMemo(()=>Ni(n),[n])}}),w=d?R=>R==="true":u,h=le.jsxs(nn,{justify:"center",gap:"2",children:[e,s&&m&&le.jsx(Ai,{})]});return le.jsxs(Fu,{name:r,value:v.value!==void 0?v.value:null,onChange:R=>{i&&i(R),v.onChange(R)},size:b,legend:h,description:t,error:Ii(y,r),className:p?Wd.hideRadioLabels:"",hideLegend:f,children:[!o&&a.map(R=>le.jsxs(c.Fragment,{children:[le.jsx(Kr,{size:b,value:w(R.value),disabled:R.disabled||l||s,children:R.label}),v.value===w(R.value)&&R.element]},R.value)),o&&le.jsxs(le.Fragment,{children:[le.jsx(nn,{gap:"4",children:a.map(R=>le.jsx(Kr,{size:b,value:w(R.value),disabled:R.disabled||l||s,children:R.label},R.value))}),a.filter(R=>v.value===w(R.value)).map(R=>le.jsx(c.Fragment,{children:R.element},R.value))]})]})},Jd="_textAreaFieldWithBadges_bdz0b_1",Xd="_etikettWrapper_bdz0b_4",pa={textAreaFieldWithBadges:Jd,etikettWrapper:Xd},Bt=({name:e,label:t,readOnly:r,maxLength:n,badges:a,validate:i=[],parse:l=p=>p,className:s,description:o,isEdited:u,size:d="small",...f})=>{const{formState:{errors:p}}=yn(),{field:m}=wi({name:e,rules:{validate:c.useMemo(()=>Ni(i),[i])}});return r?le.jsx(Hd,{size:d,label:t,value:m.value,type:"textarea",isEdited:u,hideLabel:f.hideLabel}):le.jsxs("div",{className:a?pa.textAreaFieldWithBadges:null,children:[a&&le.jsx("div",{className:pa.etikettWrapper,children:a.map(({type:b,titleText:y})=>le.jsx(ju,{variant:b,size:"small",children:y},y))}),le.jsx($u,{size:d,label:t,description:o,className:s,autoComplete:"off",...m,onChange:b=>m.onChange(b.currentTarget.value!==""?l(b.currentTarget.value):null),value:m.value?m.value:"",error:Ii(p,e),maxLength:n,...f})]})},Zd=({formMethods:e,onSubmit:t,children:r,className:n,setDataOnUnmount:a})=>{const{handleSubmit:i,getValues:l}=e;return c.useEffect(()=>()=>{a&&a(l())},[]),le.jsx(Hu,{...e,children:le.jsx("form",{className:n,onSubmit:t?i(s=>t(s)):void 0,children:r})})};function Li(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kt={exports:{}},Qd=Kt.exports,va;function ec(){return va||(va=1,function(e,t){(function(r,n){e.exports=n()})(Qd,function(){return function(r,n){n.prototype.isSameOrAfter=function(a,i){return this.isSame(a,i)||this.isAfter(a,i)}}})}(Kt)),Kt.exports}var nc=ec();const tc=Li(nc);var $t={exports:{}},rc=$t.exports,ya;function ac(){return ya||(ya=1,function(e,t){(function(r,n){e.exports=n()})(rc,function(){return function(r,n){n.prototype.isSameOrBefore=function(a,i){return this.isSame(a,i)||this.isBefore(a,i)}}})}($t)),$t.exports}var ic=ac();const lc=Li(ic),sc="Dato må være før eller lik {limit}",oc="Dato må være etter eller lik {limit}",uc="Perioder kan ikke overlappe i tid",dc="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",cc="Dato må være lik {value}",fc="Dato må skrives slik: dd.mm.åååå",mc="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",gc="Tallet kan ikke inneholde mer enn to desimaler",pc="Tallet kan ikke ha desimaler",vc="Feltet kan kun inneholde tall",yc="Ugyldig fødselsnummer",bc="Feltet må være et fødselsnummer (11 siffer)",hc="Ugyldig organisasjonsnummer.",kc="Ugyldig organisasjonsnummer eller fødselsnummer",Ec="Startdato må være før eller lik sluttdato",Rc="Periode er utenfor opptjeningsperioden",wc="Ugyldig saksnummer eller fødselsnummer",Oc="Feltet inneholder ugyldige tegn: {text}",_c="Feltet inneholder en ugyldig verdi: {value}",Sc="Feltet kan ikke inneholde mellomrom",Tc="Feltet må fylles ut",xc="Du kan skrive maksimalt {length} tegn",Pc="Du må skrive minst {length} tegn",jc="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",Ac="Feltet må være mindre eller lik {length}",Nc="Feltet må være større eller lik {length}",Ic="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",Lc={DateNotBeforeOrEqual:sc,DateNotAfterOrEqual:oc,DateRangesOverlapping:uc,DateRangesOverlappingPeriodTypes:dc,DatesNotEqual:cc,InvalidDate:fc,InvalidDatesInPeriod:mc,InvalidDecimal:gc,InvalidInteger:pc,InvalidNumber:vc,InvalidFodselsnr:yc,InvalidFodselsnrFormat:bc,InvalidOrgnr:hc,InvalidOrgnrOrFodselsnr:kc,InvalidPeriod:Ec,InvalidPeriodRange:Rc,InvalidSaksnrOrFodselsnrFormat:wc,InvalidText:Oc,InvalidValue:_c,IllegalWhiteSpace:Sc,IsRequired:Tc,MaxLength:xc,MinLength:Pc,MaxLengthOrFodselsnr:jc,MaxValue:Ac,MinValue:Nc,SammeFodselsnrSomSoker:Ic},{formatMessage:vt}=an(Lc),Mc=e=>vt({id:"InvalidText"},{text:e}),Fc=()=>vt({id:"IsRequired"}),Dc=e=>vt({id:"MaxLength"},{length:e}),Vc=e=>vt({id:"MinLength"},{length:e}),qc=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Cc=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,mr=e=>e==null||e.toString().trim().length===0;ze.extend(tc);ze.extend(lc);const Jn=e=>mr(e)?Fc():void 0,Mi=e=>t=>mr(t)||t.toString().trim().length>=e?null:Vc(e),Fi=e=>t=>mr(t)||t.toString().trim().length<=e?null:Dc(e),Gt=e=>{if(!qc.test(e)){const t=e.replace(Cc,"");return Mc(t.replace(/[\t]/g,"Tabulatortegn"))}return null},Bc="_readMore_mcbzv_1",Kc={readMore:Bc},$c=Mi(3),Gc=Fi(1500),Uc=e=>({kode:oe.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:e.begrunnelseEtterbetaling}),Hc=e=>{if(!(!e||e.definisjon!==oe.KONTROLLER_STOR_ETTERBETALING_SØKER))return{begrunnelseEtterbetaling:e.begrunnelse??""}},Di=({readOnly:e,aksjonspunkt:t})=>{const r=zt();return!t||t.definisjon!==oe.KONTROLLER_STOR_ETTERBETALING_SØKER?null:j.jsxs(Ge,{gap:"4",children:[j.jsx(cu,{header:j.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreTittel"}),className:Kc.readMore,children:j.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreInnhold"})}),j.jsx(Bt,{name:"begrunnelseEtterbetaling",label:r.formatMessage({id:"Simulering.Etterbetaling.Vurdering"}),validate:[Jn,$c,Gc,Gt],maxLength:1500,size:"medium",readOnly:e})]})};Di.__docgenInfo={description:"",methods:[],displayName:"EtterbetalingSøkerForm",props:{aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const zc="_summaryTitle_1uhqn_1",Wc="_infoSummary_1uhqn_5",Yc="_ingenPerioder_1uhqn_13",Jc="_number_1uhqn_17",Sn={summaryTitle:zc,infoSummary:Wc,ingenPerioder:Yc,number:Jc},Vi=({fom:e,tom:t,feilutbetaling:r,etterbetaling:n,inntrekk:a,ingenPerioderMedAvvik:i})=>j.jsxs(Ge,{gap:"4",children:[j.jsx(ye,{size:"small",className:Sn.summaryTitle,children:j.jsx(ae,{id:"Simulering.bruker"})}),j.jsxs("div",{className:Sn.infoSummary,children:[i&&j.jsx("div",{className:Sn.ingenPerioder,children:j.jsx(ae,{id:"Simulering.ingenPerioder"})}),!i&&j.jsxs(Ge,{gap:"4",children:[j.jsx(pn,{size:"small",children:Ji(e,t)}),j.jsxs(nn,{gap:"4",children:[j.jsxs(ye,{size:"small",children:[j.jsx(ae,{id:"Simulering.etterbetaling"}),":"]}),j.jsx(ye,{size:"small",children:j.jsx(At,{beløp:n})})]}),j.jsxs(nn,{gap:"4",children:[j.jsxs(ye,{size:"small",children:[j.jsx(ae,{id:"Simulering.tilbakekreving"}),":"]}),j.jsx(ye,{weight:"semibold",size:"small",className:Sn.number,children:j.jsx(At,{beløp:r,rød:r<0})})]}),a!=null&&j.jsxs(nn,{gap:"4",children:[j.jsxs(ye,{size:"small",children:[j.jsx(ae,{id:"Simulering.inntrekk"}),":"]}),j.jsx(ye,{weight:"semibold",size:"small",className:Sn.number,children:j.jsx(At,{beløp:a,rød:a<0})})]})]})]})]});Vi.__docgenInfo={description:"Simulering oppsummering",methods:[],displayName:"SimuleringSummary",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},etterbetaling:{required:!0,tsType:{name:"number"},description:""},inntrekk:{required:!1,tsType:{name:"number"},description:""},ingenPerioderMedAvvik:{required:!1,tsType:{name:"boolean"},description:""}}};var Nt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ba;function Xc(){return ba||(ba=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(i=a(i,n.call(this,s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var s in i)t.call(i,s)&&i[s]&&(l=a(l,this&&this[s]||s));return l}function a(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Nt)),Nt.exports}var Zc=Xc();const Qc=Fa(Zc),ef="_invisibleButton_p9vj5_1",nf={invisibleButton:ef},tf=e=>e?"Simulering.headerText.VisFærreDetaljer":"Simulering.headerText.VisFlereDetaljer",qi=({toggleDetails:e,showDetails:t,mottakerIndex:r})=>j.jsxs("button",{type:"button",className:nf.invisibleButton,onClick:()=>e(r),children:[j.jsx(ae,{id:tf(t)}),t?j.jsx(Ol,{}):j.jsx(Zt,{})]});qi.__docgenInfo={description:"",methods:[],displayName:"CollapseButton",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"boolean"},description:""},mottakerIndex:{required:!0,tsType:{name:"number"},description:""}}};const rf="_tableWrapper_19z5a_1",af="_simuleringTable_19z5a_5",lf="_rodTekst_19z5a_5",sf="_lastColumn_19z5a_9",of="_nextPeriod_19z5a_17",uf="_normalPeriod_19z5a_23",Ut={tableWrapper:rf,simuleringTable:af,rodTekst:lf,lastColumn:sf,nextPeriod:of,normalPeriod:uf},Ci=Qc.bind(Ut),Pn={DIFFERANSE:"differanse",INNTREKKNESTEMÅNED:"inntrekkNesteMåned"},ha=(e,t)=>`${e.month}${e.year}`===(t?ze(t).format("MMMMYY"):!1),df=e=>e.some(t=>t.rader.length>1),ka=(e,t)=>!!e.rader.find(n=>n.feltnavn===Pn.DIFFERANSE)&&!t,cf=(e,t)=>e&&!t,Ea=(e,t,r,n)=>{const a=`${ze(r).format("MMMMYY")}`;return t.map(l=>e.find(o=>ze(o.periode.tom).format("MMMMYY").toLowerCase()===`${l.month}${l.year}`)||{måned:`${l.month}${l.year}`,beløp:null}).map((l,s)=>j.jsx(fe.DataCell,{style:{borderBottom:n},className:Ci({rodTekst:!l.beløp||l.beløp<0,lastColumn:"måned"in l?l.måned===a:ze(l.periode.tom).format("MMMMYY")===a}),children:l.beløp?qa(l.beløp):"-"},`columnIndex${s+1}`))},ff=(e,t)=>{const r=e.mottakerIdentifikator?t[e.mottakerIdentifikator]:void 0;return r?`${r.navn} (${e.mottakerNummer})`:`${e.mottakerNummer}`},mf=(e,t)=>e.mottakerType===jn.ARBG||e.mottakerType===jn.ARBGP?j.jsx($a,{size:"xsmall",children:ff(e,t)}):null,gf=(e,t,r)=>e?t.length>1?r.filter(n=>n.feltnavn!==Pn.INNTREKKNESTEMÅNED):[]:r,pf=(e,t)=>!!(e&&t===jn.BRUKER),vf=(e,t)=>e||t,yf=(e,t,r)=>{const n=pf(e,r.mottakerType)?ze(r.nesteUtbPeriode.tom).subtract(1,"months").format():vf(t,r.nesteUtbPeriode.fom);return Xi(n,r.nesteUtbPeriode.tom)},Bi=({simuleringResultat:e,toggleDetails:t,showDetails:r,ingenPerioderMedAvvik:n,arbeidsgiverOpplysningerPerId:a})=>j.jsx(j.Fragment,{children:e.perioderPerMottaker.map((i,l)=>{const s=yf(n,e.periode.fom,i),o=i.nesteUtbPeriode.tom,u=r.find(f=>f.id===l),d=gf(n,i.resultatPerFagområde,i.resultatOgMotregningRader);return j.jsxs("div",{className:Ut.tableWrapper,children:[mf(i,a),j.jsxs(fe,{className:Ut.simuleringTable,children:[j.jsx(fe.Header,{children:j.jsxs(fe.Row,{children:[df(i.resultatPerFagområde)?j.jsx(fe.HeaderCell,{scope:"col",children:j.jsx(qi,{toggleDetails:t,mottakerIndex:l,showDetails:u?u.show:!1},`collapseButton-${s.length}`)}):j.jsx(fe.HeaderCell,{}),s.map(f=>j.jsx(fe.HeaderCell,{scope:"col",className:Ci({nextPeriod:ha(f,o),normalPeriod:!ha(f,o)}),children:j.jsx(ae,{id:`Simulering.headerText.${f.month}`})},`${f.month}-${f.year}`))]})}),j.jsxs(fe.Body,{children:[i.resultatPerFagområde.map((f,p)=>f.rader.filter(m=>{const b=m.feltnavn===Pn.DIFFERANSE,y=ka(f,b);return!cf(y,u?u.show:!1)}).map((m,b)=>{const y=m.feltnavn===Pn.DIFFERANSE,w=ka(f,y)?"dashed 1px var(--a-gray-200)":"solid 1px var(--a-gray-200)";return j.jsxs(fe.Row,{children:[j.jsx(fe.DataCell,{style:y||n?{fontWeight:"bold",borderBottom:w}:{borderBottom:w},children:j.jsx(ae,{id:`Simulering.${f.fagOmrådeKode}.${m.feltnavn}`})}),Ea(m.resultaterPerMåned,s,o,w)]},`rowIndex${p+1}${b+1}`)})),d.map((f,p)=>j.jsxs(fe.Row,{children:[j.jsx(fe.DataCell,{style:f.feltnavn!==Pn.INNTREKKNESTEMÅNED?{fontWeight:"bold"}:{},children:j.jsx(ae,{id:`Simulering.${f.feltnavn}`})}),Ea(f.resultaterPerMåned,s,o)]},`rowIndex${p+1}`))]})]},`tableIndex${l+1}`)]},`tableIndex${l+1}`)})});Bi.__docgenInfo={description:"",methods:[],displayName:"SimuleringTable",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},ingenPerioderMedAvvik:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const bf="_helpTextImage_vrhwa_1",hf="_varsel_vrhwa_17",kf="_bold_vrhwa_23",It={helpTextImage:bf,varsel:hf,bold:kf},Ra=Mi(3),wa=Fi(1500),gr="IKKE_SEND",Ef=e=>{const{videreBehandling:t,varseltekst:r,begrunnelse:n}=e;return t!=null&&t.endsWith(gr)?{kode:oe.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:We.TILBAKEKR_OPPRETT}:{kode:oe.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:t,varseltekst:r}},Rf=(e,t)=>!e||!t?void 0:{videreBehandling:!t.varseltekst&&t.videreBehandling===We.TILBAKEKR_OPPRETT?t.videreBehandling+gr:t.videreBehandling,varseltekst:t.varseltekst,begrunnelse:e.begrunnelse??""},Ki=({readOnly:e,språkkode:t,previewCallback:r,aksjonspunkt:n,fagsak:a})=>{const i=zt(),{watch:l}=yn(),s=l("varseltekst"),o=a.fagsakYtelseType===Zi.FORELDREPENGER,u=d=>{r({mottaker:"",fritekst:s??" "}),d.preventDefault()};return!n||n.definisjon!==oe.VURDER_FEILUTBETALING?null:j.jsxs(Ge,{gap:"10",align:"start",children:[j.jsx(Bt,{name:"begrunnelse",label:i.formatMessage({id:"Simulering.vurdering"}),validate:[Jn,Ra,wa,Gt],maxLength:1500,readOnly:e}),j.jsx(Yd,{name:"videreBehandling",label:j.jsx(ae,{id:"Simulering.videreBehandling"}),validate:[Jn],isReadOnly:e,radios:[{value:We.TILBAKEKR_OPPRETT,label:j.jsx(ae,{id:"Simulering.gjennomfør"}),element:j.jsx("div",{className:It.varsel,children:j.jsx(bd,{alignOffset:20,children:j.jsxs(Ge,{gap:"4",children:[j.jsxs(nn,{gap:"2",children:[j.jsx(ye,{size:"small",className:It.bold,children:j.jsx(ae,{id:"Simulering.varseltekst"})}),j.jsx(gi,{content:o?i.formatMessage({id:"Simulering.HjelpetekstForeldrepenger"}):i.formatMessage({id:"Simulering.HjelpetekstEngangsstonad"}),children:j.jsx(Il,{className:It.helpTextImage})})]}),j.jsx(Bt,{name:"varseltekst",label:i.formatMessage({id:"Simulering.fritekst"}),validate:[Jn,Ra,wa,Gt],maxLength:1500,readOnly:e,parse:el,badges:[{type:"info",titleText:Qi(t)}]}),!e&&j.jsx(uu,{href:"#",onClick:u,children:j.jsx(ae,{id:"Messages.PreviewText"})})]})})})},{value:`${We.TILBAKEKR_OPPRETT}${gr}`,label:j.jsx(ae,{id:"Simulering.OpprettMenIkkeSendVarsel"})},{value:We.TILBAKEKR_IGNORER,label:j.jsx(ae,{id:"Simulering.avvent"})}]})]})};Ki.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevSøkerForm",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"status",value:{name:"FagsakStatus",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"BehandlingType",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: RelasjonsRolleType;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"SkjermlenkeType | null",elements:[{name:"SkjermlenkeType"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},språkkode:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const ot=(e,t)=>e.find(r=>r.definisjon===t),wf=(e,t)=>r=>{const n=e.findIndex(i=>i.id===r);let a=[];if(n!==-1){const i={id:r,show:!e[n].show};a=[...e.slice(0,n),i,...e.slice(n+1,e.length-1)]}else a=e.concat({id:r,show:!0});t(a)},Of=(e,t)=>{const r=[];return dn(oe.VURDER_FEILUTBETALING,t)&&r.push(Ef(e)),dn(oe.KONTROLLER_STOR_ETTERBETALING_SØKER,t)&&r.push(Uc(e)),r},_f=(e,t)=>{if(e.length!==0)return{...Rf(ot(e,oe.VURDER_FEILUTBETALING),t),...Hc(ot(e,oe.KONTROLLER_STOR_ETTERBETALING_SØKER))}},Sf=e=>{const t=[];return dn(oe.VURDER_FEILUTBETALING,e)&&t.push(j.jsx(ae,{id:"Simulering.AksjonspunktHelpText.5084"},"vurderFeilutbetaling")),dn(oe.KONTROLLER_STOR_ETTERBETALING_SØKER,e)&&t.push(j.jsx(ae,{id:"Simulering.Etterbetaling.Tittel"},"kontrollerFeilutbetaling")),t},$i=({simuleringResultat:e,previewFptilbakeCallback:t,tilbakekrevingvalg:r,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:a,submitCallback:i,isReadOnly:l,harÅpneAksjonspunkter:s,fagsak:o,behandling:u}=nl(),{mellomlagretFormData:d,setMellomlagretFormData:f}=tl(),p=ud({defaultValues:d??_f(a,r)}),{formState:m}=p,[b,y]=c.useState([]),v=r!==void 0&&r.videreBehandling===We.TILBAKEKR_OPPDATER,w=wf(b,y),h=e==null?void 0:e.simuleringResultat,R=dn(oe.VURDER_FEILUTBETALING,a)||dn(oe.KONTROLLER_STOR_ETTERBETALING_SØKER,a),T=s?Sf(a):[];return j.jsxs(Ge,{gap:"8",children:[j.jsx($a,{size:"small",children:j.jsx(ae,{id:"Simulering.Title"})}),h&&j.jsxs(j.Fragment,{children:[T.length>0&&T.map(x=>j.jsx("div",{children:j.jsx(md,{children:[x]})},x.key)),j.jsx(Vi,{fom:h.periode.fom,tom:h.periode.tom,feilutbetaling:h.sumFeilutbetaling,etterbetaling:h.sumEtterbetaling,inntrekk:h.sumInntrekk,ingenPerioderMedAvvik:h.ingenPerioderMedAvvik}),j.jsx(Bi,{arbeidsgiverOpplysningerPerId:n,showDetails:b,toggleDetails:w,simuleringResultat:h,ingenPerioderMedAvvik:h.ingenPerioderMedAvvik}),v&&j.jsx(pn,{size:"small",children:j.jsx(ae,{id:"Simulering.ApenTilbakekrevingsbehandling"})})]}),!e&&j.jsx(ae,{id:"Simulering.ingenData"}),R&&j.jsx(Zd,{formMethods:p,onSubmit:x=>i(Of(x,a)),setDataOnUnmount:f,children:j.jsxs(Ge,{gap:"4",children:[j.jsx(Ki,{aksjonspunkt:ot(a,oe.VURDER_FEILUTBETALING),fagsak:o,previewCallback:t,readOnly:l,språkkode:u.språkkode}),j.jsx(Di,{readOnly:l,aksjonspunkt:ot(a,oe.KONTROLLER_STOR_ETTERBETALING_SØKER)}),j.jsx("div",{children:j.jsx(ii,{size:"small",variant:"primary",disabled:!m.isDirty||m.isSubmitting||l,loading:m.isSubmitting,children:j.jsx(ae,{id:"SubmitButton.ConfirmInformation"})})})]})})]})};$i.__docgenInfo={description:"",methods:[],displayName:"SimuleringPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},simuleringResultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},tilbakekrevingvalg:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}`,signature:{properties:[{key:"erTilbakekrevingVilkårOppfylt",value:{name:"boolean",required:!0}},{key:"grunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}>`},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const Tf={"Simulering.Title":"Simulering","Simulering.FP.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FP.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FP.differanse":"Foreldrepenger avvik","Simulering.FPREF.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FPREF.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FPREF.differanse":"Foreldrepenger avvik","Simulering.OM.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OM.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OM.differanse":"Omsorgspenger avvik","Simulering.OMREF.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OMREF.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OMREF.differanse":"Omsorgspenger avvik","Simulering.OOP.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOP.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOP.differanse":"Pleiepenger avvik","Simulering.OOPREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOPREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOPREF.differanse":"Pleiepenger avvik","Simulering.OPP.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPP.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPP.differanse":"Opplæringspenger avvik","Simulering.OPPREF.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPPREF.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPPREF.differanse":"Opplæringspenger avvik","Simulering.PB.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PB.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PB.differanse":"Pleiepenger avvik","Simulering.PBREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PBREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PBREF.differanse":"Pleiepenger avvik","Simulering.PN.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PN.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PN.differanse":"Pleiepenger avvik","Simulering.PNREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PNREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PNREF.differanse":"Pleiepenger avvik","Simulering.REFUTG.nyttBeløp":"Engangstønad nytt beløp","Simulering.REFUTG.tidligereUtbetalt":"Engangstønad tidligere utbetalt","Simulering.REFUTG.differanse":"Engangstønad avvik","Simulering.SP.nyttBeløp":"Sykepenger nytt beløp","Simulering.SP.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SP.differanse":"Sykepenger avvik","Simulering.SPREF.nyttBeløp":"Sykepenger nytt beløp","Simulering.SPREF.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SPREF.differanse":"Sykepenger avvik","Simulering.SVP.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVP.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVP.differanse":"Svangerskapspenger avvik","Simulering.SVPREF.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVPREF.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVPREF.differanse":"Svangerskapspenger avvik","Simulering.resultatEtterMotregning":"Resultat etter motregning mellom ytelser","Simulering.inntrekk":"Inntrekk","Simulering.inntrekkNesteMåned":"Inntrekk i neste måned","Simulering.tilbakekreving":"Feilutbetaling","Simulering.etterbetaling":"Etterbetaling","Simulering.resultat":"Resultat","Simulering.avregnetBeløp":"Avregnet beløp","Simulering.headerText.VisFærreDetaljer":"Vis færre detaljer","Simulering.headerText.VisFlereDetaljer":"Vis flere detaljer","Simulering.headerText.januar":"Jan","Simulering.headerText.februar":"Feb","Simulering.headerText.mars":"Mars","Simulering.headerText.april":"Apr","Simulering.headerText.mai":"Mai","Simulering.headerText.juni":"Jun","Simulering.headerText.juli":"Jul","Simulering.headerText.august":"Aug","Simulering.headerText.september":"Sep","Simulering.headerText.oktober":"Okt","Simulering.headerText.november":"Nov","Simulering.headerText.desember":"Des","Simulering.ingenData":"Ingen informasjon om simulering mottatt fra økonomiløsningen.","Simulering.ingenPerioder":"Ingen periode med avvik","Simulering.AksjonspunktHelpText.5084":"Vurder videre behandling av tilbakekreving","Simulering.vurdering":"Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre","Simulering.videreBehandling":"Fastsett videre behandling","Simulering.gjennomfør":"Opprett tilbakekreving, send varsel","Simulering.OpprettMenIkkeSendVarsel":"Opprett tilbakekreving, ikke send varsel","Simulering.Opprett":"Opprett tilbakekreving","Simulering.avvent":"Avvent samordning, ingen tilbakekreving","Simulering.formAlternativ.ja":"Ja","Simulering.formAlternativ.nei":"Nei","Simulering.bruker":"Bruker","Simulering.varseltekst":"Send varsel om tilbakekreving","Simulering.fritekst":"Fritekst i varselet","Simulering.HjelpetekstForeldrepenger":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav. Eksempel på tekst: «Vi mottok melding fra deg [dato]om at du hadde jobbet heltid. Du kan ikke jobbe og motta foreldrepenger samtidig. Da vi mottok meldingen fra deg, var det allerede utbetalt foreldrenger for perioden du har jobbet.","Simulering.HjelpetekstEngangsstonad":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav.","Simulering.ApenTilbakekrevingsbehandling":"Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.","Simulering.Etterbetaling.Tittel":"Ny inntektsmelding vil føre til en høy etterbetaling til bruker i en tidligere innvilget periode. Kontroller om dette er riktig","Simulering.Etterbetaling.ReadMoreTittel":"Dette bør undersøkes rundt etterbetalingen","Simulering.Etterbetaling.ReadMoreInnhold":"Saken stopper i simulering fordi arbeidsgiver har endret sitt refusjonskrav, eller har endret fra refusjon til direkte utbetaling i en periode som allerede har blitt utbetalt til bruker. I tillegg er etterbetalingen høy. Du må kontrollerer om dette er riktig. Dette kan gjøres ved å kontakte arbeidsgiver. Er det feil, må de sende inn ny inntektsmelding. Får du ikke tak i arbeidsgiver, kan du kontakte søker og høre om de kan spørre arbeidsgiveren sin.","Simulering.Etterbetaling.Vurdering":"Begrunn hvorfor du går videre med denne behandlingen.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","Messages.PreviewText":"Forhåndsvis varselbrev"},xf=an(Tf),Ht=e=>j.jsx(rl,{value:xf,children:j.jsx($i,{...e})});Ht.__docgenInfo={description:"",methods:[],displayName:"SimuleringProsessIndex",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},simuleringResultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},tilbakekrevingvalg:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}`,signature:{properties:[{key:"erTilbakekrevingVilkårOppfylt",value:{name:"boolean",required:!0}},{key:"grunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}>`},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const{action:Pf}=__STORYBOOK_MODULE_ACTIONS__,jf={123:{erPrivatPerson:!1,identifikator:"123",referanse:"123",navn:"test"}},Af={simuleringResultat:{periode:{fom:"2019-01-01",tom:"2019-03-31"},sumEtterbetaling:0,sumFeilutbetaling:-49863,sumInntrekk:-10899,ingenPerioderMedAvvik:!1,perioderPerMottaker:[{mottakerType:jn.ARBG,mottakerIdentifikator:"123",mottakerNummer:"test",resultatPerFagområde:[{fagOmrådeKode:"FP",rader:[{feltnavn:"nyttBeløp",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:52619}]},{feltnavn:"tidligereUtbetalt",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:61795}]},{feltnavn:"differanse",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-9176}]}]}],resultatOgMotregningRader:[{feltnavn:"inntrekkNesteMåned",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:0}]},{feltnavn:"resultat",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-26486}]}],nesteUtbPeriode:{fom:"2019-10-01",tom:"2019-10-31"}}]},slåttAvInntrekk:!1},Mf={title:"prosess/prosess-simulering",component:Ht,decorators:[al,il],args:{arbeidsgiverOpplysningerPerId:jf,simuleringResultat:Af,previewFptilbakeCallback:Pf("button-click")},render:e=>j.jsx(Ht,{...e})},Gn={args:{aksjonspunkterForPanel:[{definisjon:oe.VURDER_FEILUTBETALING,begrunnelse:null,status:Yt.OPPRETTET}]}},Un={args:{aksjonspunkterForPanel:[{definisjon:oe.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:null,status:Yt.OPPRETTET}]}},Hn={args:{aksjonspunkterForPanel:[{definisjon:oe.VURDER_FEILUTBETALING,begrunnelse:null,status:Yt.OPPRETTET},{definisjon:oe.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:null}]}},zn={args:{aksjonspunkterForPanel:[],tilbakekrevingvalg:{videreBehandling:We.TILBAKEKR_OPPDATER,varseltekst:"varsel-eksempel"}}};var Oa,_a,Sa;Gn.parameters={...Gn.parameters,docs:{...(Oa=Gn.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse: null,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...(Sa=(_a=Gn.parameters)==null?void 0:_a.docs)==null?void 0:Sa.source}}};var Ta,xa,Pa;Un.parameters={...Un.parameters,docs:{...(Ta=Un.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      begrunnelse: null,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...(Pa=(xa=Un.parameters)==null?void 0:xa.docs)==null?void 0:Pa.source}}};var ja,Aa,Na;Hn.parameters={...Hn.parameters,docs:{...(ja=Hn.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(Na=(Aa=Hn.parameters)==null?void 0:Aa.docs)==null?void 0:Na.source}}};var Ia,La,Ma;zn.parameters={...zn.parameters,docs:{...(Ia=zn.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    tilbakekrevingvalg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
      varseltekst: 'varsel-eksempel'
    } as TilbakekrevingValg
  }
}`,...(Ma=(La=zn.parameters)==null?void 0:La.docs)==null?void 0:Ma.source}}};const Ff=["AksjonspunktVurderFeilutbetaling","AksjonspunktKontrollerEtterbetaling","AksjonspunktVurderFeilutbetalingOgEtterbetaling","SimuleringspanelUtenAksjonspunkt"];export{Un as AksjonspunktKontrollerEtterbetaling,Gn as AksjonspunktVurderFeilutbetaling,Hn as AksjonspunktVurderFeilutbetalingOgEtterbetaling,zn as SimuleringspanelUtenAksjonspunkt,Ff as __namedExportsOrder,Mf as default};
