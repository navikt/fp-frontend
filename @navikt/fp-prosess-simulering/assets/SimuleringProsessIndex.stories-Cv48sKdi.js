import{g as Ra,r as m,u as Yt,_ as br,s as kr,c as dt,a as X,b as E,d as xi,e as ct,T as Pi,S as ft,R as wa,f as Oa,W as ji,A as _a,h as mn,i as ln,j as P,t as Wn,k as Ta,o as Sa,M as Ft,Q as Ai,Y as Ni,F as Ii,P as Li,w as Mi,l as Vi,m as Fi,n as qi,p as Di,q as Bi,v as Wt}from"./iframe-CXHBs_4s.js";import{r as Ci}from"./index-DufmHzAr.js";import"./preload-helper-D9Z9MdNV.js";var xa=Ci();const qt=Ra(xa);function Ki(e,t){var r=e.values,n=br(e,["values"]),a=t.values,i=br(t,["values"]);return kr(a,r)&&kr(n,i)}function Pa(e){var t=Yt(),r=t.formatMessage,n=t.textComponent,a=n===void 0?m.Fragment:n,i=e.id,l=e.description,s=e.defaultMessage,o=e.values,u=e.children,d=e.tagName,c=d===void 0?a:d,p=e.ignoreTag,f={id:i,description:l,defaultMessage:s},b=r(f,o,{ignoreTag:p});return typeof u=="function"?u(Array.isArray(b)?b:[b]):c?m.createElement(c,null,b):m.createElement(m.Fragment,null,b)}Pa.displayName="FormattedMessage";var ae=m.memo(Pa,Ki);ae.displayName="MemoizedFormattedMessage";var se=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(se||{});const un=(e,t)=>t.some(r=>r.definisjon===e);var Nn=(e=>(e.ARBG="ARBG_ORG",e.ARBGP="ARBG_PRIV",e.BRUKER="BRUKER",e))(Nn||{}),Ge=(e=>(e.TILBAKEKR_OPPRETT="TILBAKEKR_OPPRETT",e.TILBAKEKR_IGNORER="TILBAKEKR_IGNORER",e.TILBAKEKR_INNTREKK="TILBAKEKR_INNTREKK",e.TILBAKEKR_OPPDATER="TILBAKEKR_OPPDATER",e))(Ge||{});const gn=e=>dt({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Gi=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Jt=m.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:i,truncate:l,weight:s="regular",align:o,visuallyHidden:u,textColor:d}=e,c=Gi(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=X();return E.createElement(a,Object.assign({},c,{ref:t,className:p(r,"navds-body-long",`navds-body-long--${n}`,gn({spacing:i,truncate:l,weight:s,align:o,visuallyHidden:u,textColor:d}))}))});var Ui=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ve=m.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:i,truncate:l,weight:s="regular",align:o,visuallyHidden:u,textColor:d}=e,c=Ui(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=X();return E.createElement(a,Object.assign({},c,{ref:t,className:p(r,"navds-body-short",`navds-body-short--${n}`,gn({spacing:i,truncate:l,weight:s,align:o,visuallyHidden:u,textColor:d}))}))});var $i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Hi=m.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:a,uppercase:i,as:l="p",truncate:s,weight:o="regular",align:u,visuallyHidden:d,textColor:c}=e,p=$i(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=X();return E.createElement(l,Object.assign({},p,{ref:t,className:f(r,"navds-detail",gn({spacing:a,truncate:s,weight:o,align:u,visuallyHidden:d,textColor:c,uppercase:i}),{"navds-detail--small":n==="small"})}))});var zi=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ja=m.forwardRef((e,t)=>{var{children:r,className:n,size:a,spacing:i,as:l="p",showIcon:s=!1}=e,o=zi(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=X();return E.createElement(l,Object.assign({},o,{ref:t,className:u("navds-error-message","navds-label",n,gn({spacing:i}),{"navds-label--small":a==="small","navds-error-message--show-icon":s})}),s&&E.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Yi=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Aa=m.forwardRef((e,t)=>{var{level:r="1",size:n,className:a,as:i,spacing:l,align:s,visuallyHidden:o,textColor:u}=e,d=Yi(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:c}=X(),p=i??`h${r}`;return E.createElement(p,Object.assign({},d,{ref:t,className:c(a,"navds-heading",`navds-heading--${n}`,gn({spacing:l,align:s,visuallyHidden:o,textColor:u}))}))});var Wi=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};m.forwardRef((e,t)=>{var{className:r,spacing:n,as:a="p"}=e,i=Wi(e,["className","spacing","as"]);const{cn:l}=X();return E.createElement(a,Object.assign({},i,{ref:t,className:l(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Ji=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const pn=m.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="label",spacing:i,visuallyHidden:l,textColor:s}=e,o=Ji(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=X();return E.createElement(a,Object.assign({},o,{ref:t,className:u(r,"navds-label",gn({spacing:i,visuallyHidden:l,textColor:s}),{"navds-label--small":n==="small"})}))});function Na(e,t=166,r=!1){let n;function a(...i){const l=()=>{n=void 0,e.apply(this,i)};!n&&r&&l(),clearTimeout(n),n=setTimeout(l,t)}return a.clear=()=>{clearTimeout(n)},a}function $e(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}const hr=globalThis?.document?m.useLayoutEffect:()=>{};let Er=0;function Xi(e){const[t,r]=m.useState(e),n=e||t;return m.useEffect(()=>{t==null&&(Er+=1,r(`aksel-id-${Er}`))},[t]),n}const Rr=E.useId;function vn(e){var t;if(Rr!==void 0){const r=Rr();return e??r.replace(/(:)/g,"")}return(t=Xi(e))!==null&&t!==void 0?t:""}function wr(e,t=[]){const r=m.useRef(e);return m.useEffect(()=>{r.current=e}),m.useCallback((...n)=>{var a;return(a=r.current)===null||a===void 0?void 0:a.call(r,...n)},t)}function Xt({value:e,defaultValue:t,onChange:r}){const n=wr(r),[a,i]=m.useState(t),l=e!==void 0,s=l?e:a,o=wr(u=>{const c=typeof u=="function"?u(s):u;l||i(c),n(c)},[l,n,s]);return[s,o]}let Or=0;function Zi(e){const[t,r]=m.useState(e),n=e||t;return m.useEffect(()=>{t==null&&(Or+=1,r(`aksel-icon-${Or}`))},[t]),n}const _r=E.useId;function Te(e){var t;return _r!==void 0?_r().replace(/(:)/g,""):(t=Zi(e))!==null&&t!==void 0?t:""}var Qi=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const el=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Qi(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var nl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const tl=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=nl(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var rl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Zt=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=rl(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var al=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const il=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=al(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var ll=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const sl=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=ll(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var ol=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ul=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=ol(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var dl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ia=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=dl(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var cl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const fl=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=cl(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var ml=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const gl=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=ml(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var pl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const vl=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=pl(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var yl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const bl=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=yl(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var kl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const hl=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=kl(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var El=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Rl=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=El(e,["title","titleId"]);let i=Te();return i=r?n||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?m.createElement("title",{id:i},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function mt(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e?.(a),r===!1||!a.defaultPrevented)return t?.(a)}}const[Sc,wl]=xi({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Et(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Rn(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,s=r?.width?String(r.width):l;a=e.formattingValues[s]||e.formattingValues[l]}else{const l=e.defaultWidth,s=r?.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[l]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}function wn(e){return(t,r={})=>{const n=r.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const l=i[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(s)?_l(s,c=>c.test(l)):Ol(s,c=>c.test(l));let u;u=e.valueCallback?e.valueCallback(o):o,u=r.valueCallback?r.valueCallback(u):u;const d=t.slice(l.length);return{value:u,rest:d}}}function Ol(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function _l(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Tl(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0],i=t.match(e.parsePattern);if(!i)return null;let l=e.valueCallback?e.valueCallback(i[0]):i[0];l=r.valueCallback?r.valueCallback(l):l;const s=t.slice(a.length);return{value:l,rest:s}}}const Sl={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},xl=(e,t,r)=>{let n;const a=Sl[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",String(t)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},Pl={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},jl={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Al={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Nl={date:Et({formats:Pl,defaultWidth:"full"}),time:Et({formats:jl,defaultWidth:"full"}),dateTime:Et({formats:Al,defaultWidth:"full"})},Il={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Ll=(e,t,r,n)=>Il[e],Ml={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Vl={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Fl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ql={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Dl={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Bl=(e,t)=>Number(e)+".",Cl={ordinalNumber:Bl,era:Rn({values:Ml,defaultWidth:"wide"}),quarter:Rn({values:Vl,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Rn({values:Fl,defaultWidth:"wide"}),day:Rn({values:ql,defaultWidth:"wide"}),dayPeriod:Rn({values:Dl,defaultWidth:"wide"})},Kl=/^(\d+)\.?/i,Gl=/\d+/i,Ul={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},$l={any:[/^f/i,/^e/i]},Hl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},zl={any:[/1/i,/2/i,/3/i,/4/i]},Yl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Wl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Jl={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Xl={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Zl={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Ql={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},es={ordinalNumber:Tl({matchPattern:Kl,parsePattern:Gl,valueCallback:e=>parseInt(e,10)}),era:wn({matchPatterns:Ul,defaultMatchWidth:"wide",parsePatterns:$l,defaultParseWidth:"any"}),quarter:wn({matchPatterns:Hl,defaultMatchWidth:"wide",parsePatterns:zl,defaultParseWidth:"any",valueCallback:e=>e+1}),month:wn({matchPatterns:Yl,defaultMatchWidth:"wide",parsePatterns:Wl,defaultParseWidth:"any"}),day:wn({matchPatterns:Jl,defaultMatchWidth:"wide",parsePatterns:Xl,defaultParseWidth:"any"}),dayPeriod:wn({matchPatterns:Zl,defaultMatchWidth:"any",parsePatterns:Ql,defaultParseWidth:"any"})},ns={code:"nb",formatDistance:xl,formatLong:Nl,formatRelative:Ll,localize:Cl,match:es,options:{weekStartsOn:1,firstWeekContainsDate:4}},ts={global:{dateLocale:ns,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},rs=m.createContext({locale:ts}),La=()=>m.useContext(rs);var as=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const is=m.forwardRef((e,t)=>{var r,n,a,{rootElement:i,asChild:l}=e,s=as(e,["rootElement","asChild"]);const o=ct(!1),u=(r=La())===null||r===void 0?void 0:r.rootElement,d=(n=i??u)!==null&&n!==void 0?n:(a=globalThis?.document)===null||a===void 0?void 0:a.body,c=l?ft:"div";return o?d?qt.createPortal(E.createElement(Pi,{theme:o.theme,asChild:!0,hasBackground:!1,"data-color":o.color},E.createElement(c,Object.assign({ref:t,"data-aksel-portal":""},s))),d):null:d?qt.createPortal(E.createElement(c,Object.assign({ref:t,"data-aksel-portal":""},s)),d):null}),dn=Math.min,Ze=Math.max,Zn=Math.round,Kn=Math.floor,Me=e=>({x:e,y:e}),ls={left:"right",right:"left",bottom:"top",top:"bottom"},ss={start:"end",end:"start"};function Dt(e,t,r){return Ze(e,dn(t,r))}function Ln(e,t){return typeof e=="function"?e(t):e}function Qe(e){return e.split("-")[0]}function Mn(e){return e.split("-")[1]}function Ma(e){return e==="x"?"y":"x"}function Qt(e){return e==="y"?"height":"width"}function cn(e){return["top","bottom"].includes(Qe(e))?"y":"x"}function er(e){return Ma(cn(e))}function os(e,t,r){r===void 0&&(r=!1);const n=Mn(e),a=er(e),i=Qt(a);let l=a==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Qn(l)),[l,Qn(l)]}function us(e){const t=Qn(e);return[Bt(e),t,Bt(t)]}function Bt(e){return e.replace(/start|end/g,t=>ss[t])}function ds(e,t,r){const n=["left","right"],a=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return r?t?a:n:t?n:a;case"left":case"right":return t?i:l;default:return[]}}function cs(e,t,r,n){const a=Mn(e);let i=ds(Qe(e),r==="start",n);return a&&(i=i.map(l=>l+"-"+a),t&&(i=i.concat(i.map(Bt)))),i}function Qn(e){return e.replace(/left|right|bottom|top/g,t=>ls[t])}function fs(e){return{top:0,right:0,bottom:0,left:0,...e}}function Va(e){return typeof e!="number"?fs(e):{top:e,right:e,bottom:e,left:e}}function et(e){const{x:t,y:r,width:n,height:a}=e;return{width:n,height:a,top:r,left:t,right:t+n,bottom:r+a,x:t,y:r}}function Tr(e,t,r){let{reference:n,floating:a}=e;const i=cn(t),l=er(t),s=Qt(l),o=Qe(t),u=i==="y",d=n.x+n.width/2-a.width/2,c=n.y+n.height/2-a.height/2,p=n[s]/2-a[s]/2;let f;switch(o){case"top":f={x:d,y:n.y-a.height};break;case"bottom":f={x:d,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:c};break;case"left":f={x:n.x-a.width,y:c};break;default:f={x:n.x,y:n.y}}switch(Mn(t)){case"start":f[l]-=p*(r&&u?-1:1);break;case"end":f[l]+=p*(r&&u?-1:1);break}return f}const ms=async(e,t,r)=>{const{placement:n="bottom",strategy:a="absolute",middleware:i=[],platform:l}=r,s=i.filter(Boolean),o=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:a}),{x:d,y:c}=Tr(u,n,o),p=n,f={},b=0;for(let v=0;v<s.length;v++){const{name:y,fn:R}=s[v],{x:k,y:_,data:S,reset:x}=await R({x:d,y:c,initialPlacement:n,placement:p,strategy:a,middlewareData:f,rects:u,platform:l,elements:{reference:e,floating:t}});d=k??d,c=_??c,f={...f,[y]:{...f[y],...S}},x&&b<=50&&(b++,typeof x=="object"&&(x.placement&&(p=x.placement),x.rects&&(u=x.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:a}):x.rects),{x:d,y:c}=Tr(u,p,o)),v=-1)}return{x:d,y:c,placement:p,strategy:a,middlewareData:f}};async function Fa(e,t){var r;t===void 0&&(t={});const{x:n,y:a,platform:i,rects:l,elements:s,strategy:o}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:p=!1,padding:f=0}=Ln(t,e),b=Va(f),y=s[p?c==="floating"?"reference":"floating":c],R=et(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(y)))==null||r?y:y.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:d,strategy:o})),k=c==="floating"?{x:n,y:a,width:l.floating.width,height:l.floating.height}:l.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),S=await(i.isElement==null?void 0:i.isElement(_))?await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1}:{x:1,y:1},x=et(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:k,offsetParent:_,strategy:o}):k);return{top:(R.top-x.top+b.top)/S.y,bottom:(x.bottom-R.bottom+b.bottom)/S.y,left:(R.left-x.left+b.left)/S.x,right:(x.right-R.right+b.right)/S.x}}const gs=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:a,rects:i,platform:l,elements:s,middlewareData:o}=t,{element:u,padding:d=0}=Ln(e,t)||{};if(u==null)return{};const c=Va(d),p={x:r,y:n},f=er(a),b=Qt(f),v=await l.getDimensions(u),y=f==="y",R=y?"top":"left",k=y?"bottom":"right",_=y?"clientHeight":"clientWidth",S=i.reference[b]+i.reference[f]-p[f]-i.floating[b],x=p[f]-i.reference[f],B=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let q=B?B[_]:0;(!q||!await(l.isElement==null?void 0:l.isElement(B)))&&(q=s.floating[_]||i.floating[b]);const z=S/2-x/2,K=q/2-v[b]/2-1,G=dn(c[R],K),U=dn(c[k],K),j=G,O=q-v[b]-U,w=q/2-v[b]/2+z,A=Dt(j,w,O),V=!o.arrow&&Mn(a)!=null&&w!==A&&i.reference[b]/2-(w<j?G:U)-v[b]/2<0,M=V?w<j?w-j:w-O:0;return{[f]:p[f]+M,data:{[f]:A,centerOffset:w-A-M,...V&&{alignmentOffset:M}},reset:V}}}),ps=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:a,middlewareData:i,rects:l,initialPlacement:s,platform:o,elements:u}=t,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,...y}=Ln(e,t);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const R=Qe(a),k=cn(s),_=Qe(s)===s,S=await(o.isRTL==null?void 0:o.isRTL(u.floating)),x=p||(_||!v?[Qn(s)]:us(s)),B=b!=="none";!p&&B&&x.push(...cs(s,v,b,S));const q=[s,...x],z=await Fa(t,y),K=[];let G=((n=i.flip)==null?void 0:n.overflows)||[];if(d&&K.push(z[R]),c){const w=os(a,l,S);K.push(z[w[0]],z[w[1]])}if(G=[...G,{placement:a,overflows:K}],!K.every(w=>w<=0)){var U,j;const w=(((U=i.flip)==null?void 0:U.index)||0)+1,A=q[w];if(A)return{data:{index:w,overflows:G},reset:{placement:A}};let V=(j=G.filter(M=>M.overflows[0]<=0).sort((M,I)=>M.overflows[1]-I.overflows[1])[0])==null?void 0:j.placement;if(!V)switch(f){case"bestFit":{var O;const M=(O=G.filter(I=>{if(B){const N=cn(I.placement);return N===k||N==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(N=>N>0).reduce((N,$)=>N+$,0)]).sort((I,N)=>I[1]-N[1])[0])==null?void 0:O[0];M&&(V=M);break}case"initialPlacement":V=s;break}if(a!==V)return{reset:{placement:V}}}return{}}}};async function vs(e,t){const{placement:r,platform:n,elements:a}=e,i=await(n.isRTL==null?void 0:n.isRTL(a.floating)),l=Qe(r),s=Mn(r),o=cn(r)==="y",u=["left","top"].includes(l)?-1:1,d=i&&o?-1:1,c=Ln(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:b}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return s&&typeof b=="number"&&(f=s==="end"?b*-1:b),o?{x:f*d,y:p*u}:{x:p*u,y:f*d}}const ys=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:a,y:i,placement:l,middlewareData:s}=t,o=await vs(t,e);return l===((r=s.offset)==null?void 0:r.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:a+o.x,y:i+o.y,data:{...o,placement:l}}}}},bs=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:a}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:y=>{let{x:R,y:k}=y;return{x:R,y:k}}},...o}=Ln(e,t),u={x:r,y:n},d=await Fa(t,o),c=cn(Qe(a)),p=Ma(c);let f=u[p],b=u[c];if(i){const y=p==="y"?"top":"left",R=p==="y"?"bottom":"right",k=f+d[y],_=f-d[R];f=Dt(k,f,_)}if(l){const y=c==="y"?"top":"left",R=c==="y"?"bottom":"right",k=b+d[y],_=b-d[R];b=Dt(k,b,_)}const v=s.fn({...t,[p]:f,[c]:b});return{...v,data:{x:v.x-r,y:v.y-n,enabled:{[p]:i,[c]:l}}}}}};function gt(){return typeof window<"u"}function yn(e){return qa(e)?(e.nodeName||"").toLowerCase():"#document"}function Re(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Fe(e){var t;return(t=(qa(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qa(e){return gt()?e instanceof Node||e instanceof Re(e).Node:!1}function te(e){return gt()?e instanceof Element||e instanceof Re(e).Element:!1}function _e(e){return gt()?e instanceof HTMLElement||e instanceof Re(e).HTMLElement:!1}function nt(e){return!gt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Re(e).ShadowRoot}function Vn(e){const{overflow:t,overflowX:r,overflowY:n,display:a}=je(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(a)}function ks(e){return["table","td","th"].includes(yn(e))}function pt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function nr(e){const t=vt(),r=te(e)?je(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function hs(e){let t=He(e);for(;_e(t)&&!Ue(t);){if(nr(t))return t;if(pt(t))return null;t=He(t)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ue(e){return["html","body","#document"].includes(yn(e))}function je(e){return Re(e).getComputedStyle(e)}function yt(e){return te(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function He(e){if(yn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||nt(e)&&e.host||Fe(e);return nt(t)?t.host:t}function Da(e){const t=He(e);return Ue(t)?e.ownerDocument?e.ownerDocument.body:e.body:_e(t)&&Vn(t)?t:Da(t)}function Ye(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const a=Da(e),i=a===((n=e.ownerDocument)==null?void 0:n.body),l=Re(a);if(i){const s=Ct(l);return t.concat(l,l.visualViewport||[],Vn(a)?a:[],s&&r?Ye(s):[])}return t.concat(a,Ye(a,[],r))}function Ct(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ba(e){const t=je(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const a=_e(e),i=a?e.offsetWidth:r,l=a?e.offsetHeight:n,s=Zn(r)!==i||Zn(n)!==l;return s&&(r=i,n=l),{width:r,height:n,$:s}}function tr(e){return te(e)?e:e.contextElement}function sn(e){const t=tr(e);if(!_e(t))return Me(1);const r=t.getBoundingClientRect(),{width:n,height:a,$:i}=Ba(t);let l=(i?Zn(r.width):r.width)/n,s=(i?Zn(r.height):r.height)/a;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const Es=Me(0);function Ca(e){const t=Re(e);return!vt()||!t.visualViewport?Es:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Rs(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Re(e)?!1:t}function en(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const a=e.getBoundingClientRect(),i=tr(e);let l=Me(1);t&&(n?te(n)&&(l=sn(n)):l=sn(e));const s=Rs(i,r,n)?Ca(i):Me(0);let o=(a.left+s.x)/l.x,u=(a.top+s.y)/l.y,d=a.width/l.x,c=a.height/l.y;if(i){const p=Re(i),f=n&&te(n)?Re(n):n;let b=p,v=Ct(b);for(;v&&n&&f!==b;){const y=sn(v),R=v.getBoundingClientRect(),k=je(v),_=R.left+(v.clientLeft+parseFloat(k.paddingLeft))*y.x,S=R.top+(v.clientTop+parseFloat(k.paddingTop))*y.y;o*=y.x,u*=y.y,d*=y.x,c*=y.y,o+=_,u+=S,b=Re(v),v=Ct(b)}}return et({width:d,height:c,x:o,y:u})}function rr(e,t){const r=yt(e).scrollLeft;return t?t.left+r:en(Fe(e)).left+r}function Ka(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),a=n.left+t.scrollLeft-(r?0:rr(e,n)),i=n.top+t.scrollTop;return{x:a,y:i}}function ws(e){let{elements:t,rect:r,offsetParent:n,strategy:a}=e;const i=a==="fixed",l=Fe(n),s=t?pt(t.floating):!1;if(n===l||s&&i)return r;let o={scrollLeft:0,scrollTop:0},u=Me(1);const d=Me(0),c=_e(n);if((c||!c&&!i)&&((yn(n)!=="body"||Vn(l))&&(o=yt(n)),_e(n))){const f=en(n);u=sn(n),d.x=f.x+n.clientLeft,d.y=f.y+n.clientTop}const p=l&&!c&&!i?Ka(l,o,!0):Me(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-o.scrollLeft*u.x+d.x+p.x,y:r.y*u.y-o.scrollTop*u.y+d.y+p.y}}function Os(e){return Array.from(e.getClientRects())}function _s(e){const t=Fe(e),r=yt(e),n=e.ownerDocument.body,a=Ze(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=Ze(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-r.scrollLeft+rr(e);const s=-r.scrollTop;return je(n).direction==="rtl"&&(l+=Ze(t.clientWidth,n.clientWidth)-a),{width:a,height:i,x:l,y:s}}function Ts(e,t){const r=Re(e),n=Fe(e),a=r.visualViewport;let i=n.clientWidth,l=n.clientHeight,s=0,o=0;if(a){i=a.width,l=a.height;const u=vt();(!u||u&&t==="fixed")&&(s=a.offsetLeft,o=a.offsetTop)}return{width:i,height:l,x:s,y:o}}function Ss(e,t){const r=en(e,!0,t==="fixed"),n=r.top+e.clientTop,a=r.left+e.clientLeft,i=_e(e)?sn(e):Me(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,o=a*i.x,u=n*i.y;return{width:l,height:s,x:o,y:u}}function Sr(e,t,r){let n;if(t==="viewport")n=Ts(e,r);else if(t==="document")n=_s(Fe(e));else if(te(t))n=Ss(t,r);else{const a=Ca(e);n={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return et(n)}function Ga(e,t){const r=He(e);return r===t||!te(r)||Ue(r)?!1:je(r).position==="fixed"||Ga(r,t)}function xs(e,t){const r=t.get(e);if(r)return r;let n=Ye(e,[],!1).filter(s=>te(s)&&yn(s)!=="body"),a=null;const i=je(e).position==="fixed";let l=i?He(e):e;for(;te(l)&&!Ue(l);){const s=je(l),o=nr(l);!o&&s.position==="fixed"&&(a=null),(i?!o&&!a:!o&&s.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Vn(l)&&!o&&Ga(e,l))?n=n.filter(d=>d!==l):a=s,l=He(l)}return t.set(e,n),n}function Ps(e){let{element:t,boundary:r,rootBoundary:n,strategy:a}=e;const l=[...r==="clippingAncestors"?pt(t)?[]:xs(t,this._c):[].concat(r),n],s=l[0],o=l.reduce((u,d)=>{const c=Sr(t,d,a);return u.top=Ze(c.top,u.top),u.right=dn(c.right,u.right),u.bottom=dn(c.bottom,u.bottom),u.left=Ze(c.left,u.left),u},Sr(t,s,a));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function js(e){const{width:t,height:r}=Ba(e);return{width:t,height:r}}function As(e,t,r){const n=_e(t),a=Fe(t),i=r==="fixed",l=en(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const o=Me(0);if(n||!n&&!i)if((yn(t)!=="body"||Vn(a))&&(s=yt(t)),n){const p=en(t,!0,i,t);o.x=p.x+t.clientLeft,o.y=p.y+t.clientTop}else a&&(o.x=rr(a));const u=a&&!n&&!i?Ka(a,s):Me(0),d=l.left+s.scrollLeft-o.x-u.x,c=l.top+s.scrollTop-o.y-u.y;return{x:d,y:c,width:l.width,height:l.height}}function Rt(e){return je(e).position==="static"}function xr(e,t){if(!_e(e)||je(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Fe(e)===r&&(r=r.ownerDocument.body),r}function Ua(e,t){const r=Re(e);if(pt(e))return r;if(!_e(e)){let a=He(e);for(;a&&!Ue(a);){if(te(a)&&!Rt(a))return a;a=He(a)}return r}let n=xr(e,t);for(;n&&ks(n)&&Rt(n);)n=xr(n,t);return n&&Ue(n)&&Rt(n)&&!nr(n)?r:n||hs(e)||r}const Ns=async function(e){const t=this.getOffsetParent||Ua,r=this.getDimensions,n=await r(e.floating);return{reference:As(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Is(e){return je(e).direction==="rtl"}const Ls={convertOffsetParentRelativeRectToViewportRelativeRect:ws,getDocumentElement:Fe,getClippingRect:Ps,getOffsetParent:Ua,getElementRects:Ns,getClientRects:Os,getDimensions:js,getScale:sn,isElement:te,isRTL:Is};function $a(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ms(e,t){let r=null,n;const a=Fe(e);function i(){var s;clearTimeout(n),(s=r)==null||s.disconnect(),r=null}function l(s,o){s===void 0&&(s=!1),o===void 0&&(o=1),i();const u=e.getBoundingClientRect(),{left:d,top:c,width:p,height:f}=u;if(s||t(),!p||!f)return;const b=Kn(c),v=Kn(a.clientWidth-(d+p)),y=Kn(a.clientHeight-(c+f)),R=Kn(d),_={rootMargin:-b+"px "+-v+"px "+-y+"px "+-R+"px",threshold:Ze(0,dn(1,o))||1};let S=!0;function x(B){const q=B[0].intersectionRatio;if(q!==o){if(!S)return l();q?l(!1,q):n=setTimeout(()=>{l(!1,1e-7)},1e3)}q===1&&!$a(u,e.getBoundingClientRect())&&l(),S=!1}try{r=new IntersectionObserver(x,{..._,root:a.ownerDocument})}catch{r=new IntersectionObserver(x,_)}r.observe(e)}return l(!0),i}function Pr(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:o=!1}=n,u=tr(e),d=a||i?[...u?Ye(u):[],...Ye(t)]:[];d.forEach(R=>{a&&R.addEventListener("scroll",r,{passive:!0}),i&&R.addEventListener("resize",r)});const c=u&&s?Ms(u,r):null;let p=-1,f=null;l&&(f=new ResizeObserver(R=>{let[k]=R;k&&k.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var _;(_=f)==null||_.observe(t)})),r()}),u&&!o&&f.observe(u),f.observe(t));let b,v=o?en(e):null;o&&y();function y(){const R=en(e);v&&!$a(v,R)&&r(),v=R,b=requestAnimationFrame(y)}return r(),()=>{var R;d.forEach(k=>{a&&k.removeEventListener("scroll",r),i&&k.removeEventListener("resize",r)}),c?.(),(R=f)==null||R.disconnect(),f=null,o&&cancelAnimationFrame(b)}}const Vs=ys,Fs=bs,qs=ps,jr=gs,Ds=(e,t,r)=>{const n=new Map,a={platform:Ls,...r},i={...a.platform,_c:n};return ms(e,t,{...a,platform:i})};var Jn=typeof document<"u"?m.useLayoutEffect:m.useEffect;function tt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!tt(e[n],t[n]))return!1;return!0}if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,a[n]))return!1;for(n=r;n--!==0;){const i=a[n];if(!(i==="_owner"&&e.$$typeof)&&!tt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Ha(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ar(e,t){const r=Ha(e);return Math.round(t*r)/r}function wt(e){const t=m.useRef(e);return Jn(()=>{t.current=e}),t}function Bs(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:a,elements:{reference:i,floating:l}={},transform:s=!0,whileElementsMounted:o,open:u}=e,[d,c]=m.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[p,f]=m.useState(n);tt(p,n)||f(n);const[b,v]=m.useState(null),[y,R]=m.useState(null),k=m.useCallback(I=>{I!==B.current&&(B.current=I,v(I))},[]),_=m.useCallback(I=>{I!==q.current&&(q.current=I,R(I))},[]),S=i||b,x=l||y,B=m.useRef(null),q=m.useRef(null),z=m.useRef(d),K=o!=null,G=wt(o),U=wt(a),j=wt(u),O=m.useCallback(()=>{if(!B.current||!q.current)return;const I={placement:t,strategy:r,middleware:p};U.current&&(I.platform=U.current),Ds(B.current,q.current,I).then(N=>{const $={...N,isPositioned:j.current!==!1};w.current&&!tt(z.current,$)&&(z.current=$,xa.flushSync(()=>{c($)}))})},[p,t,r,U,j]);Jn(()=>{u===!1&&z.current.isPositioned&&(z.current.isPositioned=!1,c(I=>({...I,isPositioned:!1})))},[u]);const w=m.useRef(!1);Jn(()=>(w.current=!0,()=>{w.current=!1}),[]),Jn(()=>{if(S&&(B.current=S),x&&(q.current=x),S&&x){if(G.current)return G.current(S,x,O);O()}},[S,x,O,G,K]);const A=m.useMemo(()=>({reference:B,floating:q,setReference:k,setFloating:_}),[k,_]),V=m.useMemo(()=>({reference:S,floating:x}),[S,x]),M=m.useMemo(()=>{const I={position:r,left:0,top:0};if(!V.floating)return I;const N=Ar(V.floating,d.x),$=Ar(V.floating,d.y);return s?{...I,transform:"translate("+N+"px, "+$+"px)",...Ha(V.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:N,top:$}},[r,s,V.floating,d.x,d.y]);return m.useMemo(()=>({...d,update:O,refs:A,elements:V,floatingStyles:M}),[d,O,A,V,M])}const Cs=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:a}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?jr({element:n.current,padding:a}).fn(r):{}:n?jr({element:n,padding:a}).fn(r):{}}}},Ks=(e,t)=>({...Vs(e),options:[e,t]}),Gs=(e,t)=>({...Fs(e),options:[e,t]}),Us=(e,t)=>({...qs(e),options:[e,t]}),$s=(e,t)=>({...Cs(e),options:[e,t]}),Nr=/(\w+)/g;function Hs(e,t){const r=Array.isArray(e)?e:zs(e);for(const n of t){if(!n)continue;let a=n;for(let i=0;i<r.length;i++){const l=a[r[i]];l!==void 0&&(a=l)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function zs(e){const t=[];let r=Nr.exec(e);for(;r;){const[,n,a]=r;t.push(n||a),r=Nr.exec(e)}return t}const Ys=/{[^}]*}/g;function Fn(e,...t){const r=La(),n=r.translations||[],a=[...t,...Array.isArray(n)?n.map(l=>l[e]):[n[e]],r.locale[e]];return(l,s)=>{const o=Hs(l,a);return s?o.replace(Ys,u=>{const d=u.substring(1,u.length-1);if(s[d]===void 0){const c=JSON.stringify(s);throw new Error(`Error translating key '${l}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${c}'`)}return s[d]}):o}}var Ws=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Js=m.forwardRef((e,t)=>{var{className:r,size:n="medium",title:a,transparent:i=!1,variant:l="neutral",id:s,"data-color":o}=e,u=Ws(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:d}=X(),c=vn(),p=Fn("Loader");return E.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${c}`,ref:t,className:d("navds-loader",r,`navds-loader--${n}`,`navds-loader--${l}`,{"navds-loader--transparent":i}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":o??Xs(l)},$e(u,["children"]),{"data-variant":l}),E.createElement("title",{id:s??`loader-${c}`},a||p("title")),E.createElement("circle",{className:d("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),E.createElement("circle",{className:d("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Xs(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Zs=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const za=m.forwardRef((e,t)=>{var{as:r="button",variant:n="primary",className:a,children:i,size:l="medium",loading:s=!1,disabled:o,icon:u,iconPosition:d="left",onKeyUp:c,"data-color":p}=e,f=Zs(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:b}=X(),v=o||s?$e(f,["href"]):f,y=R=>{R.key===" "&&!o&&!s&&R.currentTarget.click()};return E.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":p??Qs(n),"data-variant":eo(n)},v,{ref:t,onKeyUp:mt(c,y),className:b(a,"navds-button",`navds-button--${n}`,`navds-button--${l}`,{"navds-button--loading":s,"navds-button--icon-only":!!u&&!i,"navds-button--disabled":o??s}),disabled:o??s?!0:void 0}),u&&d==="left"&&E.createElement("span",{className:b("navds-button__icon")},u),s&&E.createElement(Js,{size:l}),i&&E.createElement(pn,{as:"span",size:l==="medium"?"medium":"small"},i),u&&d==="right"&&E.createElement("span",{className:b("navds-button__icon")},u))});function Qs(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function eo(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var no=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const to={error:Rl,warning:sl,info:ul,success:tl},ro=m.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:i="medium",fullWidth:l=!1,contentMaxWidth:s=!0,inline:o=!1,closeButton:u=!1,onClose:d}=e,c=no(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:p}=X(),f=Fn("Alert"),b=to[a];return E.createElement("div",Object.assign({},c,{"data-color":ao(a),"data-variant":a,ref:t,className:p(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${i}`,{"navds-alert--full-width":l,"navds-alert--inline":o,"navds-alert--close-button":u})}),E.createElement(b,{title:f(a),className:p("navds-alert__icon")}),E.createElement(Jt,{as:"div",size:i,className:p("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},r),u&&!o&&E.createElement("div",{className:p("navds-alert__button-wrapper")},E.createElement(za,{className:p("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:E.createElement(hl,{title:["error","warning"].includes(a)?f("closeAlert"):f("closeMessage")})})))});function ao(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function io(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function lo(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:r,version:n}=t;return r+"/"+n}).join(" "):navigator.userAgent}function so(){return/apple/i.test(navigator.vendor)}function oo(){return io().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function uo(){return lo().includes("jsdom/")}const co="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Ir(e){let t=e.activeElement;for(;((r=t)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;t=t.shadowRoot.activeElement}return t}function In(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&nt(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function an(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Ot(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const r=e;return r.target!=null&&t.contains(r.target)}function fo(e){return e.matches("html,body")}function Je(e){return e?.ownerDocument||document}function mo(e){return _e(e)&&e.matches(co)}function go(e){if(!e||uo())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function _t(e,t,r){r===void 0&&(r=!0);let n=e.filter(i=>{var l;return i.parentId===t&&((l=i.context)==null?void 0:l.open)}),a=n;for(;a.length;)a=r?e.filter(i=>{var l;return(l=a)==null?void 0:l.some(s=>{var o;return i.parentId===s.id&&((o=i.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function po(e){return"nativeEvent"in e}function Kt(e,t){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var fn=typeof document<"u"?m.useLayoutEffect:m.useEffect;const vo={...wa};function Gn(e){const t=m.useRef(e);return fn(()=>{t.current=e}),t}const yo=vo.useInsertionEffect,bo=yo||(e=>e());function Ce(e){const t=m.useRef(()=>{});return bo(()=>{t.current=e}),m.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current==null?void 0:t.current(...n)},[])}const ko="data-floating-ui-focusable",Lr="active",Mr="selected",ho={...wa};let Vr=!1,Eo=0;const Fr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Eo++;function Ro(){const[e,t]=m.useState(()=>Vr?Fr():void 0);return fn(()=>{e==null&&t(Fr())},[]),m.useEffect(()=>{Vr=!0},[]),e}const wo=ho.useId,Oo=wo||Ro;function _o(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(a=>a(r))},on(t,r){e.has(t)||e.set(t,new Set),e.get(t).add(r)},off(t,r){var n;(n=e.get(t))==null||n.delete(r)}}}const To=m.createContext(null),So=m.createContext(null),Ya=()=>{var e;return((e=m.useContext(To))==null?void 0:e.id)||null},ar=()=>m.useContext(So);function ir(e){return"data-floating-ui-"+e}function xe(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const qr=ir("safe-polygon");function Tt(e,t,r){if(r&&!Kt(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n?.[t]}return e?.[t]}function St(e){return typeof e=="function"?e():e}function xo(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,dataRef:a,events:i,elements:l}=e,{enabled:s=!0,delay:o=0,handleClose:u=null,mouseOnly:d=!1,restMs:c=0,move:p=!0}=t,f=ar(),b=Ya(),v=Gn(u),y=Gn(o),R=Gn(r),k=Gn(c),_=m.useRef(),S=m.useRef(-1),x=m.useRef(),B=m.useRef(-1),q=m.useRef(!0),z=m.useRef(!1),K=m.useRef(()=>{}),G=m.useRef(!1),U=m.useCallback(()=>{var M;const I=(M=a.current.openEvent)==null?void 0:M.type;return I?.includes("mouse")&&I!=="mousedown"},[a]);m.useEffect(()=>{if(!s)return;function M(I){let{open:N}=I;N||(xe(S),xe(B),q.current=!0,G.current=!1)}return i.on("openchange",M),()=>{i.off("openchange",M)}},[s,i]),m.useEffect(()=>{if(!s||!v.current||!r)return;function M(N){U()&&n(!1,N,"hover")}const I=Je(l.floating).documentElement;return I.addEventListener("mouseleave",M),()=>{I.removeEventListener("mouseleave",M)}},[l.floating,r,n,s,v,U]);const j=m.useCallback(function(M,I,N){I===void 0&&(I=!0),N===void 0&&(N="hover");const $=Tt(y.current,"close",_.current);$&&!x.current?(xe(S),S.current=window.setTimeout(()=>n(!1,M,N),$)):I&&(xe(S),n(!1,M,N))},[y,n]),O=Ce(()=>{K.current(),x.current=void 0}),w=Ce(()=>{if(z.current){const M=Je(l.floating).body;M.style.pointerEvents="",M.removeAttribute(qr),z.current=!1}}),A=Ce(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);m.useEffect(()=>{if(!s)return;function M(W){if(xe(S),q.current=!1,d&&!Kt(_.current)||St(k.current)>0&&!Tt(y.current,"open"))return;const J=Tt(y.current,"open",_.current);J?S.current=window.setTimeout(()=>{R.current||n(!0,W,"hover")},J):r||n(!0,W,"hover")}function I(W){if(A()){w();return}K.current();const J=Je(l.floating);if(xe(B),G.current=!1,v.current&&a.current.floatingContext){r||xe(S),x.current=v.current({...a.current.floatingContext,tree:f,x:W.clientX,y:W.clientY,onClose(){w(),O(),A()||j(W,!0,"safe-polygon")}});const ge=x.current;J.addEventListener("mousemove",ge),K.current=()=>{J.removeEventListener("mousemove",ge)};return}(_.current==="touch"?!In(l.floating,W.relatedTarget):!0)&&j(W)}function N(W){A()||a.current.floatingContext&&(v.current==null||v.current({...a.current.floatingContext,tree:f,x:W.clientX,y:W.clientY,onClose(){w(),O(),A()||j(W)}})(W))}function $(){xe(S)}function Y(W){A()||j(W,!1)}if(te(l.domReference)){const W=l.domReference,J=l.floating;return r&&W.addEventListener("mouseleave",N),p&&W.addEventListener("mousemove",M,{once:!0}),W.addEventListener("mouseenter",M),W.addEventListener("mouseleave",I),J&&(J.addEventListener("mouseleave",N),J.addEventListener("mouseenter",$),J.addEventListener("mouseleave",Y)),()=>{r&&W.removeEventListener("mouseleave",N),p&&W.removeEventListener("mousemove",M),W.removeEventListener("mouseenter",M),W.removeEventListener("mouseleave",I),J&&(J.removeEventListener("mouseleave",N),J.removeEventListener("mouseenter",$),J.removeEventListener("mouseleave",Y))}}},[l,s,e,d,p,j,O,w,n,r,R,f,y,v,a,A,k]),fn(()=>{var M;if(s&&r&&(M=v.current)!=null&&M.__options.blockPointerEvents&&U()){z.current=!0;const N=l.floating;if(te(l.domReference)&&N){var I;const $=Je(l.floating).body;$.setAttribute(qr,"");const Y=l.domReference,W=f==null||(I=f.nodesRef.current.find(J=>J.id===b))==null||(I=I.context)==null?void 0:I.elements.floating;return W&&(W.style.pointerEvents=""),$.style.pointerEvents="none",Y.style.pointerEvents="auto",N.style.pointerEvents="auto",()=>{$.style.pointerEvents="",Y.style.pointerEvents="",N.style.pointerEvents=""}}}},[s,r,b,l,f,v,U]),fn(()=>{r||(_.current=void 0,G.current=!1,O(),w())},[r,O,w]),m.useEffect(()=>()=>{O(),xe(S),xe(B),w()},[s,l.domReference,O,w]);const V=m.useMemo(()=>{function M(I){_.current=I.pointerType}return{onPointerDown:M,onPointerEnter:M,onMouseMove(I){const{nativeEvent:N}=I;function $(){!q.current&&!R.current&&n(!0,N,"hover")}d&&!Kt(_.current)||r||St(k.current)===0||G.current&&I.movementX**2+I.movementY**2<2||(xe(B),_.current==="touch"?$():(G.current=!0,B.current=window.setTimeout($,St(k.current))))}}},[d,n,r,R,k]);return m.useMemo(()=>s?{reference:V}:{},[s,V])}function xt(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&nt(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Po(e){return"composedPath"in e?e.composedPath()[0]:e.target}const jo={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Ao={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Dr=e=>{var t,r;return{escapeKey:typeof e=="boolean"?e:(t=e?.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function No(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,elements:a,dataRef:i}=e,{enabled:l=!0,escapeKey:s=!0,outsidePress:o=!0,outsidePressEvent:u="pointerdown",referencePress:d=!1,referencePressEvent:c="pointerdown",ancestorScroll:p=!1,bubbles:f,capture:b}=t,v=ar(),y=Ce(typeof o=="function"?o:()=>!1),R=typeof o=="function"?y:o,k=m.useRef(!1),_=m.useRef(!1),{escapeKey:S,outsidePress:x}=Dr(f),{escapeKey:B,outsidePress:q}=Dr(b),z=m.useRef(!1),K=Ce(A=>{var V;if(!r||!l||!s||A.key!=="Escape"||z.current)return;const M=(V=i.current.floatingContext)==null?void 0:V.nodeId,I=v?_t(v.nodesRef.current,M):[];if(!S&&(A.stopPropagation(),I.length>0)){let N=!0;if(I.forEach($=>{var Y;if((Y=$.context)!=null&&Y.open&&!$.context.dataRef.current.__escapeKeyBubbles){N=!1;return}}),!N)return}n(!1,po(A)?A.nativeEvent:A,"escape-key")}),G=Ce(A=>{var V;const M=()=>{var I;K(A),(I=an(A))==null||I.removeEventListener("keydown",M)};(V=an(A))==null||V.addEventListener("keydown",M)}),U=Ce(A=>{var V;const M=k.current;k.current=!1;const I=_.current;if(_.current=!1,u==="click"&&I||M||typeof R=="function"&&!R(A))return;const N=an(A),$="["+ir("inert")+"]",Y=Je(a.floating).querySelectorAll($);let W=te(N)?N:null;for(;W&&!Ue(W);){const de=He(W);if(Ue(de)||!te(de))break;W=de}if(Y.length&&te(N)&&!fo(N)&&!In(N,a.floating)&&Array.from(Y).every(de=>!In(W,de)))return;if(_e(N)&&w){const de=Ue(N),ie=je(N),Z=/auto|scroll/,re=de||Z.test(ie.overflowX),pe=de||Z.test(ie.overflowY),ye=re&&N.clientWidth>0&&N.scrollWidth>N.clientWidth,be=pe&&N.clientHeight>0&&N.scrollHeight>N.clientHeight,We=ie.direction==="rtl",qe=be&&(We?A.offsetX<=N.offsetWidth-N.clientWidth:A.offsetX>N.clientWidth),De=ye&&A.offsetY>N.clientHeight;if(qe||De)return}const J=(V=i.current.floatingContext)==null?void 0:V.nodeId,Ae=v&&_t(v.nodesRef.current,J).some(de=>{var ie;return Ot(A,(ie=de.context)==null?void 0:ie.elements.floating)});if(Ot(A,a.floating)||Ot(A,a.domReference)||Ae)return;const ge=v?_t(v.nodesRef.current,J):[];if(ge.length>0){let de=!0;if(ge.forEach(ie=>{var Z;if((Z=ie.context)!=null&&Z.open&&!ie.context.dataRef.current.__outsidePressBubbles){de=!1;return}}),!de)return}n(!1,A,"outside-press")}),j=Ce(A=>{var V;const M=()=>{var I;U(A),(I=an(A))==null||I.removeEventListener(u,M)};(V=an(A))==null||V.addEventListener(u,M)});m.useEffect(()=>{if(!r||!l)return;i.current.__escapeKeyBubbles=S,i.current.__outsidePressBubbles=x;let A=-1;function V(Y){n(!1,Y,"ancestor-scroll")}function M(){window.clearTimeout(A),z.current=!0}function I(){A=window.setTimeout(()=>{z.current=!1},vt()?5:0)}const N=Je(a.floating);s&&(N.addEventListener("keydown",B?G:K,B),N.addEventListener("compositionstart",M),N.addEventListener("compositionend",I)),R&&N.addEventListener(u,q?j:U,q);let $=[];return p&&(te(a.domReference)&&($=Ye(a.domReference)),te(a.floating)&&($=$.concat(Ye(a.floating))),!te(a.reference)&&a.reference&&a.reference.contextElement&&($=$.concat(Ye(a.reference.contextElement)))),$=$.filter(Y=>{var W;return Y!==((W=N.defaultView)==null?void 0:W.visualViewport)}),$.forEach(Y=>{Y.addEventListener("scroll",V,{passive:!0})}),()=>{s&&(N.removeEventListener("keydown",B?G:K,B),N.removeEventListener("compositionstart",M),N.removeEventListener("compositionend",I)),R&&N.removeEventListener(u,q?j:U,q),$.forEach(Y=>{Y.removeEventListener("scroll",V)}),window.clearTimeout(A)}},[i,a,s,R,u,r,n,p,l,S,x,K,B,G,U,q,j]),m.useEffect(()=>{k.current=!1},[R,u]);const O=m.useMemo(()=>({onKeyDown:K,...d&&{[jo[c]]:A=>{n(!1,A.nativeEvent,"reference-press")},...c!=="click"&&{onClick(A){n(!1,A.nativeEvent,"reference-press")}}}}),[K,n,d,c]),w=m.useMemo(()=>({onKeyDown:K,onMouseDown(){_.current=!0},onMouseUp(){_.current=!0},[Ao[u]]:()=>{k.current=!0}}),[K,u]);return m.useMemo(()=>l?{reference:O,floating:w}:{},[l,O,w])}function Io(e){const{open:t=!1,onOpenChange:r,elements:n}=e,a=Oo(),i=m.useRef({}),[l]=m.useState(()=>_o()),s=Ya()!=null,[o,u]=m.useState(n.reference),d=Ce((f,b,v)=>{i.current.openEvent=f?b:void 0,l.emit("openchange",{open:f,event:b,reason:v,nested:s}),r?.(f,b,v)}),c=m.useMemo(()=>({setPositionReference:u}),[]),p=m.useMemo(()=>({reference:o||n.reference||null,floating:n.floating||null,domReference:n.reference}),[o,n.reference,n.floating]);return m.useMemo(()=>({dataRef:i,open:t,onOpenChange:d,elements:p,events:l,floatingId:a,refs:c}),[t,d,p,l,a,c])}function Lo(e){e===void 0&&(e={});const{nodeId:t}=e,r=Io({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,a=n.elements,[i,l]=m.useState(null),[s,o]=m.useState(null),d=a?.domReference||i,c=m.useRef(null),p=ar();fn(()=>{d&&(c.current=d)},[d]);const f=Bs({...e,elements:{...a,...s&&{reference:s}}}),b=m.useCallback(_=>{const S=te(_)?{getBoundingClientRect:()=>_.getBoundingClientRect(),getClientRects:()=>_.getClientRects(),contextElement:_}:_;o(S),f.refs.setReference(S)},[f.refs]),v=m.useCallback(_=>{(te(_)||_===null)&&(c.current=_,l(_)),(te(f.refs.reference.current)||f.refs.reference.current===null||_!==null&&!te(_))&&f.refs.setReference(_)},[f.refs]),y=m.useMemo(()=>({...f.refs,setReference:v,setPositionReference:b,domReference:c}),[f.refs,v,b]),R=m.useMemo(()=>({...f.elements,domReference:d}),[f.elements,d]),k=m.useMemo(()=>({...f,...n,refs:y,elements:R,nodeId:t}),[f,y,R,t,n]);return fn(()=>{n.dataRef.current.floatingContext=k;const _=p?.nodesRef.current.find(S=>S.id===t);_&&(_.context=k)}),m.useMemo(()=>({...f,context:k,refs:y,elements:R}),[f,y,R,k])}function Pt(){return oo()&&so()}function Mo(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,events:a,dataRef:i,elements:l}=e,{enabled:s=!0,visibleOnly:o=!0}=t,u=m.useRef(!1),d=m.useRef(-1),c=m.useRef(!0);m.useEffect(()=>{if(!s)return;const f=Re(l.domReference);function b(){!r&&_e(l.domReference)&&l.domReference===Ir(Je(l.domReference))&&(u.current=!0)}function v(){c.current=!0}function y(){c.current=!1}return f.addEventListener("blur",b),Pt()&&(f.addEventListener("keydown",v,!0),f.addEventListener("pointerdown",y,!0)),()=>{f.removeEventListener("blur",b),Pt()&&(f.removeEventListener("keydown",v,!0),f.removeEventListener("pointerdown",y,!0))}},[l.domReference,r,s]),m.useEffect(()=>{if(!s)return;function f(b){let{reason:v}=b;(v==="reference-press"||v==="escape-key")&&(u.current=!0)}return a.on("openchange",f),()=>{a.off("openchange",f)}},[a,s]),m.useEffect(()=>()=>{xe(d)},[]);const p=m.useMemo(()=>({onMouseLeave(){u.current=!1},onFocus(f){if(u.current)return;const b=an(f.nativeEvent);if(o&&te(b)){if(Pt()&&!f.relatedTarget){if(!c.current&&!mo(b))return}else if(!go(b))return}n(!0,f.nativeEvent,"focus")},onBlur(f){u.current=!1;const b=f.relatedTarget,v=f.nativeEvent,y=te(b)&&b.hasAttribute(ir("focus-guard"))&&b.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var R;const k=Ir(l.domReference?l.domReference.ownerDocument:document);!b&&k===l.domReference||In((R=i.current.floatingContext)==null?void 0:R.refs.floating.current,k)||In(l.domReference,k)||y||n(!1,v,"focus")})}}),[i,l.domReference,n,o]);return m.useMemo(()=>s?{reference:p}:{},[s,p])}function jt(e,t,r){const n=new Map,a=r==="item";let i=e;if(a&&e){const{[Lr]:l,[Mr]:s,...o}=e;i=o}return{...r==="floating"&&{tabIndex:-1,[ko]:""},...i,...t.map(l=>{const s=l?l[r]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((l,s)=>(s&&Object.entries(s).forEach(o=>{let[u,d]=o;if(!(a&&[Lr,Mr].includes(u)))if(u.indexOf("on")===0){if(n.has(u)||n.set(u,[]),typeof d=="function"){var c;(c=n.get(u))==null||c.push(d),l[u]=function(){for(var p,f=arguments.length,b=new Array(f),v=0;v<f;v++)b[v]=arguments[v];return(p=n.get(u))==null?void 0:p.map(y=>y(...b)).find(y=>y!==void 0)}}}else l[u]=d}),l),{})}}function Vo(e){e===void 0&&(e=[]);const t=e.map(s=>s?.reference),r=e.map(s=>s?.floating),n=e.map(s=>s?.item),a=m.useCallback(s=>jt(s,e,"reference"),t),i=m.useCallback(s=>jt(s,e,"floating"),r),l=m.useCallback(s=>jt(s,e,"item"),n);return m.useMemo(()=>({getReferenceProps:a,getFloatingProps:i,getItemProps:l}),[a,i,l])}function Fo(e,t,r){r===void 0&&(r=!0);let n=e.filter(i=>{var l;return i.parentId===t&&((l=i.context)==null?void 0:l.open)}),a=n;for(;a.length;)a=r?e.filter(i=>{var l;return(l=a)==null?void 0:l.some(s=>{var o;return i.parentId===s.id&&((o=i.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function Br(e,t){const[r,n]=e;let a=!1;const i=t.length;for(let l=0,s=i-1;l<i;s=l++){const[o,u]=t[l]||[0,0],[d,c]=t[s]||[0,0];u>=n!=c>=n&&r<=(d-o)*(n-u)/(c-u)+o&&(a=!a)}return a}function qo(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function Do(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:r=!1,requireIntent:n=!0}=e;let a,i=!1,l=null,s=null,o=performance.now();function u(c,p){const f=performance.now(),b=f-o;if(l===null||s===null||b===0)return l=c,s=p,o=f,null;const v=c-l,y=p-s,k=Math.sqrt(v*v+y*y)/b;return l=c,s=p,o=f,k}const d=c=>{let{x:p,y:f,placement:b,elements:v,onClose:y,nodeId:R,tree:k}=c;return function(S){function x(){clearTimeout(a),y()}if(clearTimeout(a),!v.domReference||!v.floating||b==null||p==null||f==null)return;const{clientX:B,clientY:q}=S,z=[B,q],K=Po(S),G=S.type==="mouseleave",U=xt(v.floating,K),j=xt(v.domReference,K),O=v.domReference.getBoundingClientRect(),w=v.floating.getBoundingClientRect(),A=b.split("-")[0],V=p>w.right-w.width/2,M=f>w.bottom-w.height/2,I=qo(z,O),N=w.width>O.width,$=w.height>O.height,Y=(N?O:w).left,W=(N?O:w).right,J=($?O:w).top,Ae=($?O:w).bottom;if(U&&(i=!0,!G))return;if(j&&(i=!1),j&&!G){i=!0;return}if(G&&te(S.relatedTarget)&&xt(v.floating,S.relatedTarget)||k&&Fo(k.nodesRef.current,R).some(ie=>{let{context:Z}=ie;return Z?.open}))return;if(A==="top"&&f>=O.bottom-1||A==="bottom"&&f<=O.top+1||A==="left"&&p>=O.right-1||A==="right"&&p<=O.left+1)return x();let ge=[];switch(A){case"top":ge=[[Y,O.top+1],[Y,w.bottom-1],[W,w.bottom-1],[W,O.top+1]];break;case"bottom":ge=[[Y,w.top+1],[Y,O.bottom-1],[W,O.bottom-1],[W,w.top+1]];break;case"left":ge=[[w.right-1,Ae],[w.right-1,J],[O.left+1,J],[O.left+1,Ae]];break;case"right":ge=[[O.right-1,Ae],[O.right-1,J],[w.left+1,J],[w.left+1,Ae]];break}function de(ie){let[Z,re]=ie;switch(A){case"top":{const pe=[N?Z+t/2:V?Z+t*4:Z-t*4,re+t+1],ye=[N?Z-t/2:V?Z+t*4:Z-t*4,re+t+1],be=[[w.left,V||N?w.bottom-t:w.top],[w.right,V?N?w.bottom-t:w.top:w.bottom-t]];return[pe,ye,...be]}case"bottom":{const pe=[N?Z+t/2:V?Z+t*4:Z-t*4,re-t],ye=[N?Z-t/2:V?Z+t*4:Z-t*4,re-t],be=[[w.left,V||N?w.top+t:w.bottom],[w.right,V?N?w.top+t:w.bottom:w.top+t]];return[pe,ye,...be]}case"left":{const pe=[Z+t+1,$?re+t/2:M?re+t*4:re-t*4],ye=[Z+t+1,$?re-t/2:M?re+t*4:re-t*4];return[...[[M||$?w.right-t:w.left,w.top],[M?$?w.right-t:w.left:w.right-t,w.bottom]],pe,ye]}case"right":{const pe=[Z-t,$?re+t/2:M?re+t*4:re-t*4],ye=[Z-t,$?re-t/2:M?re+t*4:re-t*4],be=[[M||$?w.left+t:w.right,w.top],[M?$?w.left+t:w.right:w.left+t,w.bottom]];return[pe,ye,...be]}}}if(!Br([B,q],ge)){if(i&&!I)return x();if(!G&&n){const ie=u(S.clientX,S.clientY);if(ie!==null&&ie<.1)return x()}Br([B,q],de([p,f]))?!i&&n&&(a=window.setTimeout(x,40)):x()}}};return d.__options={blockPointerEvents:r},d}const Wa=()=>{const{cn:e}=X();return E.createElement(Ia,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Bo=()=>{const{cn:e}=X();return E.createElement(Ia,{title:Fn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},rt=m.createContext(null),lr=(e,t)=>{var r,n,a;const{size:i,error:l,errorId:s}=e,o=m.useContext(rt),u=vn(),d=(r=e.id)!==null&&r!==void 0?r:`${t}-${u}`,c=s??`${t}-error-${u}`,p=`${t}-description-${u}`,f=o?.disabled||e.disabled,b=(o?.readOnly||e.readOnly)&&!f||void 0,v=!f&&!b&&!!(l||o?.error),y=!f&&!b&&!!l&&typeof l!="boolean",R=Object.assign({},v?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:y,hasError:v,errorId:c,inputDescriptionId:p,size:(n=i??o?.size)!==null&&n!==void 0?n:"medium",readOnly:b,inputProps:Object.assign(Object.assign({id:d},R),{"aria-describedby":dt(e["aria-describedby"],{[p]:!!e?.description&&typeof e?.description=="string",[c]:y,[(a=o?.errorId)!==null&&a!==void 0?a:""]:v&&!!o?.error})||void 0,disabled:f})}};function me(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,i])=>[`--__${e}c-${t}-${r}-${a}`,i])):{}}const Co={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Cr=(e,t,r,n,a,i)=>t.split(" ").map((l,s,o)=>{var u;if(e==="margin-inline"&&l==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&l==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&l==="auto")return"auto";let d=`var(--${i}-${r}-${l})`;if(n.includes(l))d=l==="px"?"1px":l;else if(l.startsWith("space"))d=`var(--${i}-${l})`;else{const c=`--${i}-spacing-${l}`;d=`var(${(u=Co[c])!==null&&u!==void 0?u:c})`}return a?l==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function Pe(e,t,r,n,a,i=!1,l=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${t}-${r}-xs`]:Cr(r,a,n,l,i,e)};const s={};return Object.entries(a).forEach(([o,u])=>{s[`--__${e}c-${t}-${r}-${o}`]=Cr(r,u,n,l,i,e)}),s}const Ko=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Go=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:a,margin:i,marginInline:l,marginBlock:s,width:o,minWidth:u,maxWidth:d,height:c,minHeight:p,maxHeight:f,position:b,inset:v,top:y,right:R,left:k,bottom:_,overflow:S,overflowX:x,overflowY:B,flexBasis:q,flexGrow:z,flexShrink:K,gridColumn:G})=>{const U=ct(!1),{cn:j}=X(),O=U?"ax":"a",w=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Pe(O,"r","p","spacing",r)),Pe(O,"r","pi","spacing",n)),Pe(O,"r","pb","spacing",a)),Pe(O,"r","m","spacing",i)),Pe(O,"r","mi","spacing",l)),Pe(O,"r","mb","spacing",s)),me(O,"r","w",o)),me(O,"r","minw",u)),me(O,"r","maxw",d)),me(O,"r","h",c)),me(O,"r","minh",p)),me(O,"r","maxh",f)),me(O,"r","position",b)),Pe(O,"r","inset","spacing",v)),Pe(O,"r","top","spacing",y)),Pe(O,"r","right","spacing",R)),Pe(O,"r","bottom","spacing",_)),Pe(O,"r","left","spacing",k)),me(O,"r","overflow",S)),me(O,"r","overflowx",x)),me(O,"r","overflowy",B)),me(O,"r","flex-basis",q)),me(O,"r","flex-grow",z)),me(O,"r","flex-shrink",K)),me(O,"r","grid-column",G));return E.createElement(ft,{className:j({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":i,"navds-r-mi":l,"navds-r-mb":s,"navds-r-w":o,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":c,"navds-r-minh":p,"navds-r-maxh":f,"navds-r-position":b,"navds-r-inset":v,"navds-r-top":y,"navds-r-right":R,"navds-r-bottom":_,"navds-r-left":k,"navds-r-overflow":S,"navds-r-overflowx":x,"navds-r-overflowy":B,"navds-r-flex-basis":q,"navds-r-flex-grow":z,"navds-r-flex-shrink":K,"navds-r-grid-column":G}),style:w},e)};var Uo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ja=m.forwardRef((e,t)=>{var{children:r,className:n,as:a="div",align:i,justify:l,wrap:s=!0,gap:o,style:u,direction:d="row",asChild:c}=e,p=Uo(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const b=ct(!1)?"ax":"a",{cn:v}=X(),y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),Pe(b,"stack","gap","spacing",o)),me(b,"stack","direction",d)),me(b,"stack","align",i)),me(b,"stack","justify",l)),R=c?ft:a;return E.createElement(Go,Object.assign({},p),E.createElement(R,Object.assign({},$e(p,Ko),{ref:t,style:y,className:v("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":o,"navds-stack-align":i,"navds-stack-justify":l,"navds-stack-direction":d,"navds-stack-wrap":s})}),r))});var $o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const on=m.forwardRef((e,t)=>{var{as:r="div"}=e,n=$o(e,["as"]);return E.createElement(Ja,Object.assign({as:r},n,{ref:t,direction:"row"}))});var Ho=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ve=m.forwardRef((e,t)=>{var{as:r="div"}=e,n=Ho(e,["as"]);return E.createElement(Ja,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))});var zo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Yo=m.forwardRef((e,t)=>{var{as:r="a",className:n,underline:a=!0,variant:i,inlineText:l=!1,"data-color":s}=e,o=zo(e,["as","className","underline","variant","inlineText","data-color"]);const u=ct(!1),{cn:d}=X();let c;return u?c=i:c=i??"action",E.createElement(r,Object.assign({"data-color":s??Wo(c),"data-variant":c},o,{ref:t,className:d("navds-link",n,{[`navds-link--${c}`]:c,"navds-link--remove-underline":!a,"navds-link--inline-text":l})}))});function Wo(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var Jo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Xo=m.forwardRef((e,t)=>{var{className:r,header:n,children:a,open:i,defaultOpen:l=!1,onClick:s,size:o="medium",onOpenChange:u}=e,d=Jo(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:c}=X(),[p,f]=Xt({defaultValue:l,value:i,onChange:u}),b=o==="small"?"small":"medium";return E.createElement("div",{className:c("navds-read-more",`navds-read-more--${o}`,r,{"navds-read-more--open":p}),"data-volume":"low"},E.createElement("button",Object.assign({},d,{ref:t,type:"button",className:c("navds-read-more__button","navds-body-short",{"navds-body-short--small":o==="small"}),onClick:mt(s,()=>f(v=>!v)),"aria-expanded":p,"data-state":p?"open":"closed"}),E.createElement(Zt,{className:c("navds-read-more__expand-icon"),"aria-hidden":!0}),E.createElement("span",null,n)),E.createElement(Jt,{as:"div","aria-hidden":!p,className:c("navds-read-more__content",{"navds-read-more__content--closed":!p}),size:b,"data-state":p?"open":"closed"},a))});var Zo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Qo=m.forwardRef((e,t)=>{var{className:r}=e,n=Zo(e,["className"]);const{cn:a}=X();return E.createElement("tbody",Object.assign({},n,{ref:t,className:a("navds-table__body",r)}))});var eu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Xa=m.forwardRef((e,t)=>{var{className:r,children:n,align:a,textSize:i}=e,l=eu(e,["className","children","align","textSize"]);const{cn:s}=X();return E.createElement("th",Object.assign({ref:t,className:s("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":i==="small"})},l),n)}),Za=m.createContext(null);var nu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const tu=m.forwardRef((e,t)=>{var r,n,a,i,{className:l,children:s,sortable:o=!1,sortKey:u}=e,d=nu(e,["className","children","sortable","sortKey"]);const c=m.useContext(Za),{cn:p}=X();return o&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),E.createElement(Xa,Object.assign({scope:"col",ref:t,className:p(l),"aria-sort":o?((r=c?.sort)===null||r===void 0?void 0:r.orderBy)===u?(n=c?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),o?E.createElement("button",{type:"button",className:p("navds-table__sort-button"),onClick:o&&u?()=>{var f;return(f=c?.onSortChange)===null||f===void 0?void 0:f.call(c,u)}:void 0},s,((a=c?.sort)===null||a===void 0?void 0:a.orderBy)===u?((i=c?.sort)===null||i===void 0?void 0:i.direction)==="descending"?E.createElement(vl,{"aria-hidden":!0}):E.createElement(bl,{"aria-hidden":!0}):E.createElement(el,{"aria-hidden":!0})):s)});var ru=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Qa=m.forwardRef((e,t)=>{var{className:r,children:n="",align:a,textSize:i}=e,l=ru(e,["className","children","align","textSize"]);const{cn:s}=X();return E.createElement(ve,Object.assign({as:"td",ref:t,className:s("navds-table__data-cell",r,{[`navds-table__data-cell--align-${a}`]:a}),size:i},l),n)});var au=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const iu=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function lu(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function Kr(e){return typeof e=="string"&&e[e.length-1]==="%"&&lu(e.substring(0,e.length-1))}function At(e,t){t===0&&e?.style&&(e.style.display="none")}function su(e,t){t===0&&e?.style&&(e.style.display="")}const ou=e=>{var{children:t,className:r,innerClassName:n,duration:a=250,easing:i="ease",height:l}=e,s=au(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=X(),u=m.useRef(l),d=m.useRef(null),c=m.useRef(),p=m.useRef(),f=m.useRef(l),b=m.useRef("visible"),v=iu?0:a;typeof f.current=="number"?(typeof l!="string"&&(f.current=l<0?0:l),b.current="hidden"):Kr(f.current)&&(f.current=l==="0%"?0:l,b.current="hidden");const[y,R]=m.useState(f.current),[k,_]=m.useState(b.current),[S,x]=m.useState(!1);m.useEffect(()=>{At(d.current,f.current)},[]),m.useEffect(()=>{if(l!==u.current&&d.current){su(d.current,u.current),d.current.style.overflow="hidden";const K=d.current.offsetHeight;d.current.style.overflow="";const G=v;let U,j,O="hidden",w;const A=u.current==="auto";typeof l=="number"?(U=l<0?0:l,j=U):Kr(l)?(U=l==="0%"?0:l,j=U):(U=K,j="auto",O=void 0),A&&(j=U,U=K),R(U),_("hidden"),x(!A),clearTimeout(p.current),clearTimeout(c.current),A?(w=!0,p.current=setTimeout(()=>{R(j),_(O),x(w)},50),c.current=setTimeout(()=>{x(!1),At(d.current,j)},G)):p.current=setTimeout(()=>{R(j),_(O),x(!1),l!=="auto"&&At(d.current,U)},G)}return u.current=l,()=>{clearTimeout(p.current),clearTimeout(c.current)}},[l]);const B={height:y,overflow:k};S&&(B.transition=`height ${v}ms ${i} 0ms`,B.WebkitTransition=B.transition);const z=typeof s["aria-hidden"]<"u"?s["aria-hidden"]:l===0;return E.createElement("div",Object.assign({},s,{className:o(r),style:B}),E.createElement("div",{"aria-hidden":z,className:o(n),ref:d},t))};var uu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ei=m.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:a=!0}=e,i=uu(e,["className","selected","shadeOnHover"]);const{cn:l}=X();return E.createElement("tr",Object.assign({},i,{ref:t,className:l("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a})}))});var du=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const cu=m.forwardRef((e,t)=>{var{className:r,children:n,content:a,togglePlacement:i="left",defaultOpen:l=!1,open:s,onOpenChange:o,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:c=999,contentGutter:p,onClick:f}=e,b=du(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:v}=X(),[y,R]=Xt({defaultValue:l,value:s,onChange:o}),k=Fn("global"),_=vn(),S=B=>{R(q=>!q),B.stopPropagation()},x=B=>{d&&!u&&!ni(B.target)&&S(B)};return E.createElement(E.Fragment,null,E.createElement(ei,Object.assign({},b,{ref:t,className:v("navds-table__expandable-row",r,{"navds-table__expandable-row--open":y,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:mt(f,x)}),i==="right"&&n,E.createElement(Qa,{className:v("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":y}),onClick:u?()=>null:S},!u&&E.createElement("button",{className:v("navds-table__toggle-expand-button"),type:"button","aria-controls":_,"aria-expanded":y,onClick:S},E.createElement(Zt,{className:v("navds-table__expandable-icon"),title:k(y?"showLess":"showMore")}))),i==="left"&&n),E.createElement("tr",{"data-state":y?"open":"closed",className:v("navds-table__expanded-row"),"aria-hidden":!y,id:_},E.createElement("td",{colSpan:c,className:v("navds-table__expanded-row-cell")},E.createElement(ou,{className:v("navds-table__expanded-row-collapse"),innerClassName:v(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${p??i}`),height:y?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function ni(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:ni(e.parentElement)}var fu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const mu=m.forwardRef((e,t)=>{var{className:r}=e,n=fu(e,["className"]);const{cn:a}=X();return E.createElement("thead",Object.assign({},n,{ref:t,className:a("navds-table__header",r)}))});var gu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const fe=m.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:a="medium",onSortChange:i,sort:l,stickyHeader:s=!1}=e,o=gu(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:u}=X();return E.createElement(Za.Provider,{value:{onSortChange:i,sort:l}},E.createElement("table",Object.assign({},o,{ref:t,className:u("navds-table",`navds-table--${a}`,r,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":s})})))});fe.Header=mu;fe.Body=Qo;fe.Row=ei;fe.ColumnHeader=tu;fe.HeaderCell=Xa;fe.DataCell=Qa;fe.ExpandableRow=cu;var pu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const vu=m.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:i="medium",icon:l,"data-color":s}=e,o=pu(e,["children","className","variant","size","icon","data-color"]);const{cn:u}=X(),d=a?.endsWith("-filled")&&"strong",c=a?.endsWith("-moderate")&&"moderate";return E.createElement(ve,Object.assign({"data-color":s??yu(a),"data-variant":d||c||"outline"},o,{ref:t,as:"span",size:i==="medium"?"medium":"small",className:u("navds-tag",n,`navds-tag--${a}`,`navds-tag--${i}`)}),l&&E.createElement("span",{className:u("navds-tag__icon--left")},l),r)});function yu(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var bu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ti=m.forwardRef((e,t)=>{var{children:r,className:n,arrow:a=!0,placement:i="top",open:l,defaultOpen:s=!1,onOpenChange:o,offset:u,content:d,delay:c=150,id:p,keys:f,maxChar:b=80,describesChild:v=!1}=e,y=bu(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:R}=X(),[k,_]=Xt({defaultValue:s,value:l,onChange:o}),S=m.useRef(null),x=wl(!1),B=x?x.ref.current:void 0,{x:q,y:z,strategy:K,context:G,placement:U,middlewareData:{arrow:{x:j,y:O}={},hide:{referenceHidden:w}={}},refs:A}=Lo({placement:i,open:k,onOpenChange:Y=>_(Y),middleware:[Ks(u??(a?8:4)),Gs(),Us({padding:5,fallbackPlacements:["bottom","top"]}),$s({element:S,padding:5})],whileElementsMounted:x?(Y,W,J)=>Pr(Y,W,J,{animationFrame:!0}):Pr,strategy:x?"fixed":void 0}),{getReferenceProps:V,getFloatingProps:M}=Vo([xo(G,{handleClose:Do(),restMs:c}),Mo(G),No(G)]),I=vn(p),N=Oa(t,A.setFloating);if(!r||r?.type===E.Fragment||r===E.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;d?.length>b&&k&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${d.length}
Tooltip-content: ${d}`);const $=v?k?{"aria-describedby":I}:{title:d}:{"aria-label":d};return E.createElement(E.Fragment,null,E.createElement(ft,Object.assign({ref:A.setReference},V(),$,{"aria-keyshortcuts":f?f.join("+"):void 0}),r),E.createElement(is,{rootElement:B,asChild:!0},k&&E.createElement("div",Object.assign({},M(Object.assign(Object.assign({},y),{ref:N,style:{position:K,top:z??0,left:q??0,visibility:w?"hidden":"visible"},role:"tooltip",id:I,className:R("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":U,"data-state":"open"}),d,f&&E.createElement("span",{className:R("navds-tooltip__keys"),"aria-hidden":!0},f.map(Y=>E.createElement(Hi,{as:"kbd",key:Y,className:R("navds-tooltip__key")},Y))),a&&E.createElement("div",{ref:Y=>{S.current=Y},className:R("navds-tooltip__arrow"),style:{left:j!=null?`${j}px`:"",top:O!=null?`${O}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[U]]:"-3.5px"}}))))}),ku=e=>{const t=lr(e,"fieldset"),{inputProps:r}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var hu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Eu=m.forwardRef((e,t)=>{var r,n,a;const{inputProps:i,errorId:l,showErrorMsg:s,hasError:o,size:u,readOnly:d,inputDescriptionId:c}=ku(e),{cn:p}=X(),f=m.useContext(rt),{children:b,className:v,errorPropagation:y=!0,legend:R,description:k,hideLegend:_,nativeReadOnly:S=!0}=e,x=hu(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return E.createElement(rt.Provider,{value:{error:y?(r=e.error)!==null&&r!==void 0?r:f?.error:void 0,errorId:dt({[l]:s,[(n=f?.errorId)!==null&&n!==void 0?n:""]:!!f?.error}),size:u,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:d}},E.createElement("fieldset",Object.assign({},$e(x,["errorId","error","size","readOnly"]),$e(i,["aria-describedby","aria-invalid"]),{ref:t,className:p(v,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":o,"navds-fieldset--readonly":d})}),E.createElement(pn,{size:u,as:"legend",className:p("navds-fieldset__legend",{"navds-sr-only":!!_})},d&&(S?E.createElement(Wa,null):E.createElement(Bo,null)),R),!!k&&E.createElement(ve,{className:p("navds-fieldset__description",{"navds-sr-only":!!_}),id:c,size:u??"medium",as:"div"},e.description),b,E.createElement("div",{id:l,"aria-relevant":"additions removals","aria-live":"polite",className:p("navds-fieldset__error")},s&&E.createElement(ja,{size:u,showIcon:!0},e.error))))});var Ru=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ri=E.createContext(null),wu=m.forwardRef((e,t)=>{var r,n,{children:a,className:i,name:l,defaultValue:s,value:o,onChange:u=()=>{},required:d,readOnly:c}=e,p=Ru(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:f}=X(),b=m.useContext(rt),v=vn();return E.createElement(Eu,Object.assign({},p,{readOnly:c,ref:t,className:f(i,"navds-radio-group",`navds-radio-group--${(n=(r=p.size)!==null&&r!==void 0?r:b?.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),E.createElement(ri.Provider,{value:{name:l??`radioGroupName-${v}`,defaultValue:s,value:o,onChange:u,required:d}},E.createElement("div",{className:f("navds-radio-buttons")},a)))});var Ou=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const _u=e=>{const t=m.useContext(ri),r=lr($e(e,["description"]),"radio"),{inputProps:n,readOnly:a}=r,i=Ou(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},i),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:t?.name,defaultChecked:t?.defaultValue===void 0?void 0:t?.defaultValue===e.value,checked:t?.value===void 0?void 0:t?.value===e.value,onChange:l=>{var s,o;a||((s=e.onChange)===null||s===void 0||s.call(e,l),(o=t?.onChange)===null||o===void 0||o.call(t,e.value))},onClick:l=>{var s;if(a){l.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,l)},required:t?.required,type:"radio"})})},Nt=m.forwardRef((e,t)=>{const{cn:r}=X(),{inputProps:n,size:a,hasError:i,readOnly:l}=_u(e);return E.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":i,"navds-radio--disabled":n.disabled,"navds-radio--readonly":l}),"data-color":i?"danger":e["data-color"]},E.createElement("input",Object.assign({},$e(e,["children","size","description","readOnly"]),$e(n,["aria-invalid"]),{className:r("navds-radio__input"),ref:t})),E.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},E.createElement("span",{className:r("navds-radio__content")},E.createElement(ve,{as:"span",size:a},e.children),e.description&&E.createElement(ve,{as:"span",size:a,className:r("navds-form-field__subdescription navds-radio__description")},e.description))))});var Tu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Gr=(e,t,r)=>{const{outerHeightStyle:n,overflow:a}=t;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(r.current+=1,t):e},Ur=e=>(e?.ownerDocument||document).defaultView||window;function Un(e){return parseInt(e,10)||0}const Su=m.forwardRef((e,t)=>{var r,n,{className:a,onChange:i,maxRows:l,minRows:s=1,autoScrollbar:o,style:u,value:d}=e,c=Tu(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:p}=m.useRef(d!=null),f=m.useRef(null),b=Oa(f,t),v=m.useRef(null),y=m.useRef(0),[R,k]=m.useState({outerHeightStyle:0}),_=E.useCallback(()=>{const q=f.current,K=Ur(q).getComputedStyle(q);if(K.width==="0px")return{outerHeightStyle:0};const G=v.current;G.style.width=K.width,G.value=q.value||c.placeholder||"x",G.value.slice(-1)===`
`&&(G.value+=" ");const U=K.boxSizing,j=Un(K.paddingBottom)+Un(K.paddingTop),O=Un(K.borderBottomWidth)+Un(K.borderTopWidth),w=G.scrollHeight-j;G.value="x";const A=G.scrollHeight-j;let V=w;s&&(V=Math.max(Number(s)*A,V)),l&&(V=Math.min(Number(l)*A,V)),V=Math.max(V,A);const M=V+(U==="border-box"?j+O:0),I=Math.abs(V-w)<=1;return{outerHeightStyle:M,overflow:I}},[l,s,c.placeholder]),S=()=>{const q=_();$r(q)||k(z=>Gr(z,q,y))};hr(()=>{const q=()=>{const j=_();$r(j)||qt.flushSync(()=>{k(O=>Gr(O,j,y))})},z=Na(()=>{var j,O,w;if(y.current=0,!((j=f.current)===null||j===void 0)&&j.style.height||!((O=f.current)===null||O===void 0)&&O.style.width){((w=f.current)===null||w===void 0?void 0:w.style.overflow)==="hidden"&&k(A=>Object.assign(Object.assign({},A),{overflow:!1}));return}q()},166,!0),K=f.current,G=Ur(K);G.addEventListener("resize",z);let U;return typeof ResizeObserver<"u"&&(U=new ResizeObserver(z),U.observe(K)),()=>{z.clear(),G.removeEventListener("resize",z),U&&U.disconnect()}},[_]),hr(()=>{S()}),m.useEffect(()=>{y.current=0},[d]);const x=q=>{y.current=0,p||S(),i&&i(q)},B=Object.assign({"--__ac-textarea-height":R.outerHeightStyle+"px","--__axc-textarea-height":R.outerHeightStyle+"px",overflow:R.overflow&&!o&&!(!((r=f.current)===null||r===void 0)&&r.style.height)&&!(!((n=f.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},u);return E.createElement(E.Fragment,null,E.createElement("textarea",Object.assign({value:d,onChange:x,ref:b,rows:s,style:B},c,{className:a})),E.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:v,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function $r(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const xu=({maxLengthId:e,maxLength:t,currentLength:r,size:n,i18n:a})=>{const{cn:i}=X(),l=Fn("Textarea",{charsLeft:a?.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a?.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),s=t-r,[o,u]=m.useState(s);return m.useEffect(()=>{const d=Na(()=>{u(s)},2e3);return d(),()=>{d.clear()}},[s]),E.createElement(E.Fragment,null,E.createElement("span",{id:e,className:i("navds-sr-only")},l("maxLength",{maxLength:t})),s<20&&E.createElement("span",{role:"status",className:i("navds-textarea__sr-counter navds-sr-only")},Hr(o,l)),E.createElement(ve,{className:i("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:n},Hr(s,l)))},Hr=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Pu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ju=m.forwardRef((e,t)=>{var r,n,a;const{inputProps:i,errorId:l,showErrorMsg:s,hasError:o,size:u,inputDescriptionId:d}=lr(e,"textarea"),{label:c,className:p,description:f,maxLength:b,hideLabel:v=!1,resize:y,UNSAFE_autoScrollbar:R,i18n:k,readOnly:_}=e,S=Pu(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:x}=X(),B=vn(),q=b!==void 0&&b>0,[z,K]=m.useState((r=e?.defaultValue)!==null&&r!==void 0?r:""),G=()=>{let j=S?.minRows?S?.minRows:3;return u==="small"&&(j=S?.minRows?S?.minRows:2),j},U=dt(i["aria-describedby"],{[B??""]:q});return E.createElement("div",{className:x(p,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!i.disabled,"navds-form-field--readonly":_,"navds-textarea--readonly":_,"navds-textarea--error":o,"navds-textarea--autoscrollbar":R,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},E.createElement(pn,{htmlFor:i.id,size:u,className:x("navds-form-field__label",{"navds-sr-only":v})},_&&E.createElement(Wa,null),c),!!f&&E.createElement(ve,{className:x("navds-form-field__description",{"navds-sr-only":v}),id:d,size:u,as:"div"},f),E.createElement(Su,Object.assign({},$e(S,["error","errorId","size"]),i,{onChange:mt(e.onChange,e.value===void 0?j=>K(j.target.value):void 0),minRows:G(),autoScrollbar:R,ref:t,readOnly:_,className:x("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},U?{"aria-describedby":U}:{})),q&&!_&&!i.disabled&&E.createElement(xu,{maxLengthId:B,maxLength:b,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:z.length,size:u,i18n:k}),E.createElement("div",{className:x("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},s&&E.createElement(ja,{size:u,showIcon:!0},e.error)))});var qn=e=>e.type==="checkbox",Xe=e=>e instanceof Date,ke=e=>e==null;const ai=e=>typeof e=="object";var oe=e=>!ke(e)&&!Array.isArray(e)&&ai(e)&&!Xe(e),ii=e=>oe(e)&&e.target?qn(e.target)?e.target.checked:e.target.value:e,Au=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,li=(e,t)=>e.has(Au(t)),Nu=e=>{const t=e.constructor&&e.constructor.prototype;return oe(t)&&t.hasOwnProperty("isPrototypeOf")},sr=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ce(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(!(sr&&(e instanceof Blob||n))&&(r||oe(e)))if(t=r?[]:Object.create(Object.getPrototypeOf(e)),!r&&!Nu(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=ce(e[a]));else return e;return t}var bt=e=>/^\w*$/.test(e),le=e=>e===void 0,or=e=>Array.isArray(e)?e.filter(Boolean):[],ur=e=>or(e.replace(/["|']|\]/g,"").split(/\.|\[/)),D=(e,t,r)=>{if(!t||!oe(e))return r;const n=(bt(t)?[t]:ur(t)).reduce((a,i)=>ke(a)?a:a[i],e);return le(n)||n===e?le(e[t])?r:e[t]:n},we=e=>typeof e=="boolean",ne=(e,t,r)=>{let n=-1;const a=bt(t)?[t]:ur(t),i=a.length,l=i-1;for(;++n<i;){const s=a[n];let o=r;if(n!==l){const u=e[s];o=oe(u)||Array.isArray(u)?u:isNaN(+a[n+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=o,e=e[s]}};const at={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Ne={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Be={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},dr=E.createContext(null);dr.displayName="HookFormContext";const nn=()=>E.useContext(dr),Iu=e=>{const{children:t,...r}=e;return E.createElement(dr.Provider,{value:r},t)};var si=(e,t,r,n=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const l=i;return t._proxyFormState[l]!==Ne.all&&(t._proxyFormState[l]=!n||Ne.all),r&&(r[l]=!0),e[l]}});return a};const cr=typeof window<"u"?E.useLayoutEffect:E.useEffect;function Lu(e){const t=nn(),{control:r=t.control,disabled:n,name:a,exact:i}=e||{},[l,s]=E.useState(r._formState),o=E.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return cr(()=>r._subscribe({name:a,formState:o.current,exact:i,callback:u=>{!n&&s({...r._formState,...u})}}),[a,n,i]),E.useEffect(()=>{o.current.isValid&&r._setValid(!0)},[r]),E.useMemo(()=>si(l,r,o.current,!1),[l,r])}var Le=e=>typeof e=="string",oi=(e,t,r,n,a)=>Le(e)?(n&&t.watch.add(e),D(r,e,a)):Array.isArray(e)?e.map(i=>(n&&t.watch.add(i),D(r,i))):(n&&(t.watchAll=!0),r),Gt=e=>ke(e)||!ai(e);function Ke(e,t,r=new WeakSet){if(Gt(e)||Gt(t))return e===t;if(Xe(e)&&Xe(t))return e.getTime()===t.getTime();const n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;if(r.has(e)||r.has(t))return!0;r.add(e),r.add(t);for(const i of n){const l=e[i];if(!a.includes(i))return!1;if(i!=="ref"){const s=t[i];if(Xe(l)&&Xe(s)||oe(l)&&oe(s)||Array.isArray(l)&&Array.isArray(s)?!Ke(l,s,r):l!==s)return!1}}return!0}function Mu(e){const t=nn(),{control:r=t.control,name:n,defaultValue:a,disabled:i,exact:l,compute:s}=e||{},o=E.useRef(a),u=E.useRef(s),d=E.useRef(void 0);u.current=s;const c=E.useMemo(()=>r._getWatch(n,o.current),[r,n]),[p,f]=E.useState(u.current?u.current(c):c);return cr(()=>r._subscribe({name:n,formState:{values:!0},exact:l,callback:b=>{if(!i){const v=oi(n,r._names,b.values||r._formValues,!1,o.current);if(u.current){const y=u.current(v);Ke(y,d.current)||(f(y),d.current=y)}else f(v)}}}),[r,i,n,l]),E.useEffect(()=>r._removeUnmounted()),p}function ui(e){const t=nn(),{name:r,disabled:n,control:a=t.control,shouldUnregister:i,defaultValue:l}=e,s=li(a._names.array,r),o=E.useMemo(()=>D(a._formValues,r,D(a._defaultValues,r,l)),[a,r,l]),u=Mu({control:a,name:r,defaultValue:o,exact:!0}),d=Lu({control:a,name:r,exact:!0}),c=E.useRef(e),p=E.useRef(a.register(r,{...e.rules,value:u,...we(e.disabled)?{disabled:e.disabled}:{}}));c.current=e;const f=E.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!D(d.errors,r)},isDirty:{enumerable:!0,get:()=>!!D(d.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!D(d.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!D(d.validatingFields,r)},error:{enumerable:!0,get:()=>D(d.errors,r)}}),[d,r]),b=E.useCallback(k=>p.current.onChange({target:{value:ii(k),name:r},type:at.CHANGE}),[r]),v=E.useCallback(()=>p.current.onBlur({target:{value:D(a._formValues,r),name:r},type:at.BLUR}),[r,a._formValues]),y=E.useCallback(k=>{const _=D(a._fields,r);_&&k&&(_._f.ref={focus:()=>k.focus&&k.focus(),select:()=>k.select&&k.select(),setCustomValidity:S=>k.setCustomValidity(S),reportValidity:()=>k.reportValidity()})},[a._fields,r]),R=E.useMemo(()=>({name:r,value:u,...we(n)||d.disabled?{disabled:d.disabled||n}:{},onChange:b,onBlur:v,ref:y}),[r,n,d.disabled,b,v,y,u]);return E.useEffect(()=>{const k=a._options.shouldUnregister||i;a.register(r,{...c.current.rules,...we(c.current.disabled)?{disabled:c.current.disabled}:{}});const _=(S,x)=>{const B=D(a._fields,S);B&&B._f&&(B._f.mount=x)};if(_(r,!0),k){const S=ce(D(a._options.defaultValues,r));ne(a._defaultValues,r,S),le(D(a._formValues,r))&&ne(a._formValues,r,S)}return!s&&a.register(r),()=>{(s?k&&!a._state.action:k)?a.unregister(r):_(r,!1)}},[r,a,s,i]),E.useEffect(()=>{a._setDisabledField({disabled:n,name:r})},[n,r,a]),E.useMemo(()=>({field:R,formState:d,fieldState:f}),[R,d,f])}var Vu=(e,t,r,n,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:a||!0}}:{},Pn=e=>Array.isArray(e)?e:[e],zr=()=>{let e=[];return{get observers(){return e},next:a=>{for(const i of e)i.next&&i.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(i=>i!==a)}}),unsubscribe:()=>{e=[]}}},Ee=e=>oe(e)&&!Object.keys(e).length,fr=e=>e.type==="file",Ie=e=>typeof e=="function",it=e=>{if(!sr)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},di=e=>e.type==="select-multiple",mr=e=>e.type==="radio",Fu=e=>mr(e)||qn(e),It=e=>it(e)&&e.isConnected;function qu(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=le(e)?n++:e[t[n++]];return e}function Du(e){for(const t in e)if(e.hasOwnProperty(t)&&!le(e[t]))return!1;return!0}function ue(e,t){const r=Array.isArray(t)?t:bt(t)?[t]:ur(t),n=r.length===1?e:qu(e,r),a=r.length-1,i=r[a];return n&&delete n[i],a!==0&&(oe(n)&&Ee(n)||Array.isArray(n)&&Du(n))&&ue(e,r.slice(0,-1)),e}var ci=e=>{for(const t in e)if(Ie(e[t]))return!0;return!1};function lt(e,t={}){const r=Array.isArray(e);if(oe(e)||r)for(const n in e)Array.isArray(e[n])||oe(e[n])&&!ci(e[n])?(t[n]=Array.isArray(e[n])?[]:{},lt(e[n],t[n])):ke(e[n])||(t[n]=!0);return t}function fi(e,t,r){const n=Array.isArray(e);if(oe(e)||n)for(const a in e)Array.isArray(e[a])||oe(e[a])&&!ci(e[a])?le(t)||Gt(r[a])?r[a]=Array.isArray(e[a])?lt(e[a],[]):{...lt(e[a])}:fi(e[a],ke(t)?{}:t[a],r[a]):r[a]=!Ke(e[a],t[a]);return r}var On=(e,t)=>fi(e,t,lt(t));const Yr={value:!1,isValid:!1},Wr={value:!0,isValid:!0};var mi=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!le(e[0].attributes.value)?le(e[0].value)||e[0].value===""?Wr:{value:e[0].value,isValid:!0}:Wr:Yr}return Yr},gi=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>le(e)?e:t?e===""?NaN:e&&+e:r&&Le(e)?new Date(e):n?n(e):e;const Jr={isValid:!1,value:null};var pi=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,Jr):Jr;function Xr(e){const t=e.ref;return fr(t)?t.files:mr(t)?pi(e.refs).value:di(t)?[...t.selectedOptions].map(({value:r})=>r):qn(t)?mi(e.refs).value:gi(le(t.value)?e.ref.value:t.value,e)}var Bu=(e,t,r,n)=>{const a={};for(const i of e){const l=D(t,i);l&&ne(a,i,l._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:n}},st=e=>e instanceof RegExp,_n=e=>le(e)?e:st(e)?e.source:oe(e)?st(e.value)?e.value.source:e.value:e,Zr=e=>({isOnSubmit:!e||e===Ne.onSubmit,isOnBlur:e===Ne.onBlur,isOnChange:e===Ne.onChange,isOnAll:e===Ne.all,isOnTouch:e===Ne.onTouched});const Qr="AsyncFunction";var Cu=e=>!!e&&!!e.validate&&!!(Ie(e.validate)&&e.validate.constructor.name===Qr||oe(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Qr)),Ku=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ea=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const jn=(e,t,r,n)=>{for(const a of r||Object.keys(e)){const i=D(e,a);if(i){const{_f:l,...s}=i;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],a)&&!n)return!0;if(l.ref&&t(l.ref,l.name)&&!n)return!0;if(jn(s,t))break}else if(oe(s)&&jn(s,t))break}}};function na(e,t,r){const n=D(e,r);if(n||bt(r))return{error:n,name:r};const a=r.split(".");for(;a.length;){const i=a.join("."),l=D(t,i),s=D(e,i);if(l&&!Array.isArray(l)&&r!==i)return{name:r};if(s&&s.type)return{name:i,error:s};if(s&&s.root&&s.root.type)return{name:`${i}.root`,error:s.root};a.pop()}return{name:r}}var Gu=(e,t,r,n)=>{r(e);const{name:a,...i}=e;return Ee(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(l=>t[l]===(!n||Ne.all))},Uu=(e,t,r)=>!e||!t||e===t||Pn(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),$u=(e,t,r,n,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(t||e):(r?n.isOnBlur:a.isOnBlur)?!e:(r?n.isOnChange:a.isOnChange)?e:!0,Hu=(e,t)=>!or(D(e,t)).length&&ue(e,t),zu=(e,t,r)=>{const n=Pn(D(e,r));return ne(n,"root",t[r]),ne(e,r,n),e},Xn=e=>Le(e);function ta(e,t,r="validate"){if(Xn(e)||Array.isArray(e)&&e.every(Xn)||we(e)&&!e)return{type:r,message:Xn(e)?e:"",ref:t}}var rn=e=>oe(e)&&!st(e)?e:{value:e,message:""},ra=async(e,t,r,n,a,i)=>{const{ref:l,refs:s,required:o,maxLength:u,minLength:d,min:c,max:p,pattern:f,validate:b,name:v,valueAsNumber:y,mount:R}=e._f,k=D(r,v);if(!R||t.has(v))return{};const _=s?s[0]:l,S=j=>{a&&_.reportValidity&&(_.setCustomValidity(we(j)?"":j||""),_.reportValidity())},x={},B=mr(l),q=qn(l),z=B||q,K=(y||fr(l))&&le(l.value)&&le(k)||it(l)&&l.value===""||k===""||Array.isArray(k)&&!k.length,G=Vu.bind(null,v,n,x),U=(j,O,w,A=Be.maxLength,V=Be.minLength)=>{const M=j?O:w;x[v]={type:j?A:V,message:M,ref:l,...G(j?A:V,M)}};if(i?!Array.isArray(k)||!k.length:o&&(!z&&(K||ke(k))||we(k)&&!k||q&&!mi(s).isValid||B&&!pi(s).isValid)){const{value:j,message:O}=Xn(o)?{value:!!o,message:o}:rn(o);if(j&&(x[v]={type:Be.required,message:O,ref:_,...G(Be.required,O)},!n))return S(O),x}if(!K&&(!ke(c)||!ke(p))){let j,O;const w=rn(p),A=rn(c);if(!ke(k)&&!isNaN(k)){const V=l.valueAsNumber||k&&+k;ke(w.value)||(j=V>w.value),ke(A.value)||(O=V<A.value)}else{const V=l.valueAsDate||new Date(k),M=$=>new Date(new Date().toDateString()+" "+$),I=l.type=="time",N=l.type=="week";Le(w.value)&&k&&(j=I?M(k)>M(w.value):N?k>w.value:V>new Date(w.value)),Le(A.value)&&k&&(O=I?M(k)<M(A.value):N?k<A.value:V<new Date(A.value))}if((j||O)&&(U(!!j,w.message,A.message,Be.max,Be.min),!n))return S(x[v].message),x}if((u||d)&&!K&&(Le(k)||i&&Array.isArray(k))){const j=rn(u),O=rn(d),w=!ke(j.value)&&k.length>+j.value,A=!ke(O.value)&&k.length<+O.value;if((w||A)&&(U(w,j.message,O.message),!n))return S(x[v].message),x}if(f&&!K&&Le(k)){const{value:j,message:O}=rn(f);if(st(j)&&!k.match(j)&&(x[v]={type:Be.pattern,message:O,ref:l,...G(Be.pattern,O)},!n))return S(O),x}if(b){if(Ie(b)){const j=await b(k,r),O=ta(j,_);if(O&&(x[v]={...O,...G(Be.validate,O.message)},!n))return S(O.message),x}else if(oe(b)){let j={};for(const O in b){if(!Ee(j)&&!n)break;const w=ta(await b[O](k,r),_,O);w&&(j={...w,...G(O,w.message)},S(w.message),n&&(x[v]=j))}if(!Ee(j)&&(x[v]={ref:_,...j},!n))return x}}return S(!0),x};const Yu={mode:Ne.onSubmit,reValidateMode:Ne.onChange,shouldFocusError:!0};function Wu(e={}){let t={...Yu,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:Ie(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},n={},a=oe(t.defaultValues)||oe(t.values)?ce(t.defaultValues||t.values)||{}:{},i=t.shouldUnregister?{}:ce(a),l={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},o,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let c={...d};const p={array:zr(),state:zr()},f=t.criteriaMode===Ne.all,b=g=>h=>{clearTimeout(u),u=setTimeout(g,h)},v=async g=>{if(!t.disabled&&(d.isValid||c.isValid||g)){const h=t.resolver?Ee((await q()).errors):await K(n,!0);h!==r.isValid&&p.state.next({isValid:h})}},y=(g,h)=>{!t.disabled&&(d.isValidating||d.validatingFields||c.isValidating||c.validatingFields)&&((g||Array.from(s.mount)).forEach(T=>{T&&(h?ne(r.validatingFields,T,h):ue(r.validatingFields,T))}),p.state.next({validatingFields:r.validatingFields,isValidating:!Ee(r.validatingFields)}))},R=(g,h=[],T,C,F=!0,L=!0)=>{if(C&&T&&!t.disabled){if(l.action=!0,L&&Array.isArray(D(n,g))){const H=T(D(n,g),C.argA,C.argB);F&&ne(n,g,H)}if(L&&Array.isArray(D(r.errors,g))){const H=T(D(r.errors,g),C.argA,C.argB);F&&ne(r.errors,g,H),Hu(r.errors,g)}if((d.touchedFields||c.touchedFields)&&L&&Array.isArray(D(r.touchedFields,g))){const H=T(D(r.touchedFields,g),C.argA,C.argB);F&&ne(r.touchedFields,g,H)}(d.dirtyFields||c.dirtyFields)&&(r.dirtyFields=On(a,i)),p.state.next({name:g,isDirty:U(g,h),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ne(i,g,h)},k=(g,h)=>{ne(r.errors,g,h),p.state.next({errors:r.errors})},_=g=>{r.errors=g,p.state.next({errors:r.errors,isValid:!1})},S=(g,h,T,C)=>{const F=D(n,g);if(F){const L=D(i,g,le(T)?D(a,g):T);le(L)||C&&C.defaultChecked||h?ne(i,g,h?L:Xr(F._f)):w(g,L),l.mount&&v()}},x=(g,h,T,C,F)=>{let L=!1,H=!1;const Q={name:g};if(!t.disabled){if(!T||C){(d.isDirty||c.isDirty)&&(H=r.isDirty,r.isDirty=Q.isDirty=U(),L=H!==Q.isDirty);const ee=Ke(D(a,g),h);H=!!D(r.dirtyFields,g),ee?ue(r.dirtyFields,g):ne(r.dirtyFields,g,!0),Q.dirtyFields=r.dirtyFields,L=L||(d.dirtyFields||c.dirtyFields)&&H!==!ee}if(T){const ee=D(r.touchedFields,g);ee||(ne(r.touchedFields,g,T),Q.touchedFields=r.touchedFields,L=L||(d.touchedFields||c.touchedFields)&&ee!==T)}L&&F&&p.state.next(Q)}return L?Q:{}},B=(g,h,T,C)=>{const F=D(r.errors,g),L=(d.isValid||c.isValid)&&we(h)&&r.isValid!==h;if(t.delayError&&T?(o=b(()=>k(g,T)),o(t.delayError)):(clearTimeout(u),o=null,T?ne(r.errors,g,T):ue(r.errors,g)),(T?!Ke(F,T):F)||!Ee(C)||L){const H={...C,...L&&we(h)?{isValid:h}:{},errors:r.errors,name:g};r={...r,...H},p.state.next(H)}},q=async g=>{y(g,!0);const h=await t.resolver(i,t.context,Bu(g||s.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return y(g),h},z=async g=>{const{errors:h}=await q(g);if(g)for(const T of g){const C=D(h,T);C?ne(r.errors,T,C):ue(r.errors,T)}else r.errors=h;return h},K=async(g,h,T={valid:!0})=>{for(const C in g){const F=g[C];if(F){const{_f:L,...H}=F;if(L){const Q=s.array.has(L.name),ee=F._f&&Cu(F._f);ee&&d.validatingFields&&y([C],!0);const Se=await ra(F,s.disabled,i,f,t.shouldUseNativeValidation&&!h,Q);if(ee&&d.validatingFields&&y([C]),Se[L.name]&&(T.valid=!1,h))break;!h&&(D(Se,L.name)?Q?zu(r.errors,Se,L.name):ne(r.errors,L.name,Se[L.name]):ue(r.errors,L.name))}!Ee(H)&&await K(H,h,T)}}return T.valid},G=()=>{for(const g of s.unMount){const h=D(n,g);h&&(h._f.refs?h._f.refs.every(T=>!It(T)):!It(h._f.ref))&&ie(g)}s.unMount=new Set},U=(g,h)=>!t.disabled&&(g&&h&&ne(i,g,h),!Ke($(),a)),j=(g,h,T)=>oi(g,s,{...l.mount?i:le(h)?a:Le(g)?{[g]:h}:h},T,h),O=g=>or(D(l.mount?i:a,g,t.shouldUnregister?D(a,g,[]):[])),w=(g,h,T={})=>{const C=D(n,g);let F=h;if(C){const L=C._f;L&&(!L.disabled&&ne(i,g,gi(h,L)),F=it(L.ref)&&ke(h)?"":h,di(L.ref)?[...L.ref.options].forEach(H=>H.selected=F.includes(H.value)):L.refs?qn(L.ref)?L.refs.forEach(H=>{(!H.defaultChecked||!H.disabled)&&(Array.isArray(F)?H.checked=!!F.find(Q=>Q===H.value):H.checked=F===H.value||!!F)}):L.refs.forEach(H=>H.checked=H.value===F):fr(L.ref)?L.ref.value="":(L.ref.value=F,L.ref.type||p.state.next({name:g,values:ce(i)})))}(T.shouldDirty||T.shouldTouch)&&x(g,F,T.shouldTouch,T.shouldDirty,!0),T.shouldValidate&&N(g)},A=(g,h,T)=>{for(const C in h){if(!h.hasOwnProperty(C))return;const F=h[C],L=g+"."+C,H=D(n,L);(s.array.has(g)||oe(F)||H&&!H._f)&&!Xe(F)?A(L,F,T):w(L,F,T)}},V=(g,h,T={})=>{const C=D(n,g),F=s.array.has(g),L=ce(h);ne(i,g,L),F?(p.array.next({name:g,values:ce(i)}),(d.isDirty||d.dirtyFields||c.isDirty||c.dirtyFields)&&T.shouldDirty&&p.state.next({name:g,dirtyFields:On(a,i),isDirty:U(g,L)})):C&&!C._f&&!ke(L)?A(g,L,T):w(g,L,T),ea(g,s)&&p.state.next({...r,name:g}),p.state.next({name:l.mount?g:void 0,values:ce(i)})},M=async g=>{l.mount=!0;const h=g.target;let T=h.name,C=!0;const F=D(n,T),L=ee=>{C=Number.isNaN(ee)||Xe(ee)&&isNaN(ee.getTime())||Ke(ee,D(i,T,ee))},H=Zr(t.mode),Q=Zr(t.reValidateMode);if(F){let ee,Se;const Cn=h.type?Xr(F._f):ii(g),ze=g.type===at.BLUR||g.type===at.FOCUS_OUT,_i=!Ku(F._f)&&!t.resolver&&!D(r.errors,T)&&!F._f.deps||$u(ze,D(r.touchedFields,T),r.isSubmitted,Q,H),kt=ea(T,s,ze);ne(i,T,Cn),ze?(!h||!h.readOnly)&&(F._f.onBlur&&F._f.onBlur(g),o&&o(0)):F._f.onChange&&F._f.onChange(g);const ht=x(T,Cn,ze),Ti=!Ee(ht)||kt;if(!ze&&p.state.next({name:T,type:g.type,values:ce(i)}),_i)return(d.isValid||c.isValid)&&(t.mode==="onBlur"?ze&&v():ze||v()),Ti&&p.state.next({name:T,...kt?{}:ht});if(!ze&&kt&&p.state.next({...r}),t.resolver){const{errors:vr}=await q([T]);if(L(Cn),C){const Si=na(r.errors,n,T),yr=na(vr,n,Si.name||T);ee=yr.error,T=yr.name,Se=Ee(vr)}}else y([T],!0),ee=(await ra(F,s.disabled,i,f,t.shouldUseNativeValidation))[T],y([T]),L(Cn),C&&(ee?Se=!1:(d.isValid||c.isValid)&&(Se=await K(n,!0)));C&&(F._f.deps&&N(F._f.deps),B(T,Se,ee,ht))}},I=(g,h)=>{if(D(r.errors,h)&&g.focus)return g.focus(),1},N=async(g,h={})=>{let T,C;const F=Pn(g);if(t.resolver){const L=await z(le(g)?g:F);T=Ee(L),C=g?!F.some(H=>D(L,H)):T}else g?(C=(await Promise.all(F.map(async L=>{const H=D(n,L);return await K(H&&H._f?{[L]:H}:H)}))).every(Boolean),!(!C&&!r.isValid)&&v()):C=T=await K(n);return p.state.next({...!Le(g)||(d.isValid||c.isValid)&&T!==r.isValid?{}:{name:g},...t.resolver||!g?{isValid:T}:{},errors:r.errors}),h.shouldFocus&&!C&&jn(n,I,g?F:s.mount),C},$=g=>{const h={...l.mount?i:a};return le(g)?h:Le(g)?D(h,g):g.map(T=>D(h,T))},Y=(g,h)=>({invalid:!!D((h||r).errors,g),isDirty:!!D((h||r).dirtyFields,g),error:D((h||r).errors,g),isValidating:!!D(r.validatingFields,g),isTouched:!!D((h||r).touchedFields,g)}),W=g=>{g&&Pn(g).forEach(h=>ue(r.errors,h)),p.state.next({errors:g?r.errors:{}})},J=(g,h,T)=>{const C=(D(n,g,{_f:{}})._f||{}).ref,F=D(r.errors,g)||{},{ref:L,message:H,type:Q,...ee}=F;ne(r.errors,g,{...ee,...h,ref:C}),p.state.next({name:g,errors:r.errors,isValid:!1}),T&&T.shouldFocus&&C&&C.focus&&C.focus()},Ae=(g,h)=>Ie(g)?p.state.subscribe({next:T=>"values"in T&&g(j(void 0,h),T)}):j(g,h,!0),ge=g=>p.state.subscribe({next:h=>{Uu(g.name,h.name,g.exact)&&Gu(h,g.formState||d,En,g.reRenderRoot)&&g.callback({values:{...i},...r,...h,defaultValues:a})}}).unsubscribe,de=g=>(l.mount=!0,c={...c,...g.formState},ge({...g,formState:c})),ie=(g,h={})=>{for(const T of g?Pn(g):s.mount)s.mount.delete(T),s.array.delete(T),h.keepValue||(ue(n,T),ue(i,T)),!h.keepError&&ue(r.errors,T),!h.keepDirty&&ue(r.dirtyFields,T),!h.keepTouched&&ue(r.touchedFields,T),!h.keepIsValidating&&ue(r.validatingFields,T),!t.shouldUnregister&&!h.keepDefaultValue&&ue(a,T);p.state.next({values:ce(i)}),p.state.next({...r,...h.keepDirty?{isDirty:U()}:{}}),!h.keepIsValid&&v()},Z=({disabled:g,name:h})=>{(we(g)&&l.mount||g||s.disabled.has(h))&&(g?s.disabled.add(h):s.disabled.delete(h))},re=(g,h={})=>{let T=D(n,g);const C=we(h.disabled)||we(t.disabled);return ne(n,g,{...T||{},_f:{...T&&T._f?T._f:{ref:{name:g}},name:g,mount:!0,...h}}),s.mount.add(g),T?Z({disabled:we(h.disabled)?h.disabled:t.disabled,name:g}):S(g,!0,h.value),{...C?{disabled:h.disabled||t.disabled}:{},...t.progressive?{required:!!h.required,min:_n(h.min),max:_n(h.max),minLength:_n(h.minLength),maxLength:_n(h.maxLength),pattern:_n(h.pattern)}:{},name:g,onChange:M,onBlur:M,ref:F=>{if(F){re(g,h),T=D(n,g);const L=le(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,H=Fu(L),Q=T._f.refs||[];if(H?Q.find(ee=>ee===L):L===T._f.ref)return;ne(n,g,{_f:{...T._f,...H?{refs:[...Q.filter(It),L,...Array.isArray(D(a,g))?[{}]:[]],ref:{type:L.type,name:g}}:{ref:L}}}),S(g,!1,void 0,L)}else T=D(n,g,{}),T._f&&(T._f.mount=!1),(t.shouldUnregister||h.shouldUnregister)&&!(li(s.array,g)&&l.action)&&s.unMount.add(g)}}},pe=()=>t.shouldFocusError&&jn(n,I,s.mount),ye=g=>{we(g)&&(p.state.next({disabled:g}),jn(n,(h,T)=>{const C=D(n,T);C&&(h.disabled=C._f.disabled||g,Array.isArray(C._f.refs)&&C._f.refs.forEach(F=>{F.disabled=C._f.disabled||g}))},0,!1))},be=(g,h)=>async T=>{let C;T&&(T.preventDefault&&T.preventDefault(),T.persist&&T.persist());let F=ce(i);if(p.state.next({isSubmitting:!0}),t.resolver){const{errors:L,values:H}=await q();r.errors=L,F=ce(H)}else await K(n);if(s.disabled.size)for(const L of s.disabled)ue(F,L);if(ue(r.errors,"root"),Ee(r.errors)){p.state.next({errors:{}});try{await g(F,T)}catch(L){C=L}}else h&&await h({...r.errors},T),pe(),setTimeout(pe);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ee(r.errors)&&!C,submitCount:r.submitCount+1,errors:r.errors}),C)throw C},We=(g,h={})=>{D(n,g)&&(le(h.defaultValue)?V(g,ce(D(a,g))):(V(g,h.defaultValue),ne(a,g,ce(h.defaultValue))),h.keepTouched||ue(r.touchedFields,g),h.keepDirty||(ue(r.dirtyFields,g),r.isDirty=h.defaultValue?U(g,ce(D(a,g))):U()),h.keepError||(ue(r.errors,g),d.isValid&&v()),p.state.next({...r}))},qe=(g,h={})=>{const T=g?ce(g):a,C=ce(T),F=Ee(g),L=F?a:C;if(h.keepDefaultValues||(a=T),!h.keepValues){if(h.keepDirtyValues){const H=new Set([...s.mount,...Object.keys(On(a,i))]);for(const Q of Array.from(H))D(r.dirtyFields,Q)?ne(L,Q,D(i,Q)):V(Q,D(L,Q))}else{if(sr&&le(g))for(const H of s.mount){const Q=D(n,H);if(Q&&Q._f){const ee=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(it(ee)){const Se=ee.closest("form");if(Se){Se.reset();break}}}}if(h.keepFieldsRef)for(const H of s.mount)V(H,D(L,H));else n={}}i=t.shouldUnregister?h.keepDefaultValues?ce(a):{}:ce(L),p.array.next({values:{...L}}),p.state.next({values:{...L}})}s={mount:h.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!d.isValid||!!h.keepIsValid||!!h.keepDirtyValues,l.watch=!!t.shouldUnregister,p.state.next({submitCount:h.keepSubmitCount?r.submitCount:0,isDirty:F?!1:h.keepDirty?r.isDirty:!!(h.keepDefaultValues&&!Ke(g,a)),isSubmitted:h.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:F?{}:h.keepDirtyValues?h.keepDefaultValues&&i?On(a,i):r.dirtyFields:h.keepDefaultValues&&g?On(a,g):h.keepDirty?r.dirtyFields:{},touchedFields:h.keepTouched?r.touchedFields:{},errors:h.keepErrors?r.errors:{},isSubmitSuccessful:h.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:a})},De=(g,h)=>qe(Ie(g)?g(i):g,h),hn=(g,h={})=>{const T=D(n,g),C=T&&T._f;if(C){const F=C.refs?C.refs[0]:C.ref;F.focus&&(F.focus(),h.shouldSelect&&Ie(F.select)&&F.select())}},En=g=>{r={...r,...g}},tn={control:{register:re,unregister:ie,getFieldState:Y,handleSubmit:be,setError:J,_subscribe:ge,_runSchema:q,_focusError:pe,_getWatch:j,_getDirty:U,_setValid:v,_setFieldArray:R,_setDisabledField:Z,_setErrors:_,_getFieldArray:O,_reset:qe,_resetDefaultValues:()=>Ie(t.defaultValues)&&t.defaultValues().then(g=>{De(g,t.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:G,_disableForm:ye,_subjects:p,_proxyFormState:d,get _fields(){return n},get _formValues(){return i},get _state(){return l},set _state(g){l=g},get _defaultValues(){return a},get _names(){return s},set _names(g){s=g},get _formState(){return r},get _options(){return t},set _options(g){t={...t,...g}}},subscribe:de,trigger:N,register:re,handleSubmit:be,watch:Ae,setValue:V,getValues:$,reset:De,resetField:We,clearErrors:W,unregister:ie,setError:J,setFocus:hn,getFieldState:Y};return{...tn,formControl:tn}}function Ju(e={}){const t=E.useRef(void 0),r=E.useRef(void 0),[n,a]=E.useState({isDirty:!1,isValidating:!1,isLoading:Ie(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Ie(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:n},e.defaultValues&&!Ie(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:l,...s}=Wu(e);t.current={...s,formState:n}}const i=t.current.control;return i._options=e,cr(()=>{const l=i._subscribe({formState:i._proxyFormState,callback:()=>a({...i._formState}),reRenderRoot:!0});return a(s=>({...s,isReady:!0})),i._formState.isReady=!0,l},[i]),E.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),E.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),E.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),E.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),E.useEffect(()=>{if(i._proxyFormState.isDirty){const l=i._getDirty();l!==n.isDirty&&i._subjects.state.next({isDirty:l})}},[i,n.isDirty]),E.useEffect(()=>{e.values&&!Ke(e.values,r.current)?(i._reset(e.values,{keepFieldsRef:!0,...i._options.resetOptions}),r.current=e.values,a(l=>({...l}))):i._resetDefaultValues()},[i,e.values]),E.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=si(n,i),t.current}function Xu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var aa={exports:{}},Tn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia;function Zu(){if(ia)return Tn;ia=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,i){var l=null;if(i!==void 0&&(l=""+i),a.key!==void 0&&(l=""+a.key),"key"in a){i={};for(var s in a)s!=="key"&&(i[s]=a[s])}else i=a;return a=i.ref,{$$typeof:e,type:n,key:l,ref:a!==void 0?a:null,props:i}}return Tn.Fragment=t,Tn.jsx=r,Tn.jsxs=r,Tn}var la;function Qu(){return la||(la=1,aa.exports=Zu()),aa.exports}var Oe=Qu();const ed=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Oe.jsx(ro,{variant:"warning",size:"small",children:Oe.jsx(Ve,{gap:"space-8",children:E.Children.map(e,t=>Oe.jsx(ve,{size:"small",children:t},ji(t)?t.key:t))})}),Dn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};mn(Dn);const ot="var(--ax-bg-neutral-strong)",vi=4,nd=(e,t,r)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${ot};
    border-radius: ${vi}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${ot};
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
`,td=(e,t,r)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${ot};
    border-radius: ${vi}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${ot};
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
`,rd=(e,t,r,n)=>t?td(e,r,n):nd(e,r,n),ad=(e,t,r)=>r?"":t?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,id=({children:e,alignOffset:t=0,alignLeft:r=!1,marginTop:n=0,marginLeft:a=0,hideBorder:i=!1})=>Oe.jsxs(Oe.Fragment,{children:[Oe.jsx("style",{dangerouslySetInnerHTML:{__html:rd(t,r,n,a)}}),Oe.jsx("div",{className:ad(t,r,i),children:e})]});var sa={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var oa;function ld(){return oa||(oa=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(i=a(i,n.call(this,s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var s in i)t.call(i,s)&&i[s]&&(l=a(l,this&&this[s]||s));return l}function a(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(sa)),sa.exports}var sd=ld();const gr=Xu(sd),od="_borderbox_1a0x6_1",ud="_error_1a0x6_5",dd="_warning_1a0x6_8",cd={borderbox:od,error:ud,warning:dd};gr.bind(cd);const fd="_aksjonspunkt_11wjs_1",md="_erAksjonspunktApent_11wjs_4",gd="_erIkkeGodkjentAvBeslutter_11wjs_8",pd={aksjonspunkt:fd,erAksjonspunktApent:md,erIkkeGodkjentAvBeslutter:gd};gr.bind(pd);mn(Dn);mn(Dn);const vd="_divider_1jpov_1",yd="_dividerParagraf_1jpov_8",bd="_leftPanel_1jpov_11",kd="_rightPanel_1jpov_14",hd={divider:vd,dividerParagraf:yd,leftPanel:bd,rightPanel:kd};gr.bind(hd);const yi=()=>Oe.jsx("span",{"data-testid":"editedIcon",children:Oe.jsx(fl,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-warning-decoration)"})});mn(Dn);const Ed=mn(Dn),Rd=({tekst:e,children:t})=>{const[r,n]=m.useState(!1);if(!e)return t;const a=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return Oe.jsx(ti,{content:Ed.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Oe.jsx("span",{"aria-hidden":"true",onClick:a,children:t??e})})},ua={default:"_default_af3od_1",rød:"_rød_af3od_5"},Lt=({beløp:e,kr:t=!1,rød:r=!1})=>{const n=e?.toString().replace(/\s/g,"");return Oe.jsx(Rd,{tekst:n,children:Oe.jsxs("span",{className:r?ua.rød:ua.default,children:[n?_a(n):"-",n&&t&&" kr"]})})};function wd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var da={exports:{}},Sn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca;function Od(){if(ca)return Sn;ca=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,i){var l=null;if(i!==void 0&&(l=""+i),a.key!==void 0&&(l=""+a.key),"key"in a){i={};for(var s in a)s!=="key"&&(i[s]=a[s])}else i=a;return a=i.ref,{$$typeof:e,type:n,key:l,ref:a!==void 0?a:null,props:i}}return Sn.Fragment=t,Sn.jsx=r,Sn.jsxs=r,Sn}var fa;function _d(){return fa||(fa=1,da.exports=Od()),da.exports}var he=_d();const bi=e=>e.reduce((t,r,n)=>({...t,[n]:a=>r(a)||!0}),{}),ki=(e,t)=>t.split(".").reduce((r,n)=>r!==void 0?r[n]:r,e)?.message;var Ut={exports:{}},Td=Ut.exports,ma;function Sd(){return ma||(ma=1,function(e,t){(function(r,n){e.exports=n()})(Td,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,l=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,o={},u=function(y){return(y=+y)+(y>68?1900:2e3)},d=function(y){return function(R){this[y]=+R}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var k=R.match(/([+-]|\d\d)/g),_=60*k[1]+(+k[2]||0);return _===0?0:k[0]==="+"?-_:_}(y)}],p=function(y){var R=o[y];return R&&(R.indexOf?R:R.s.concat(R.f))},f=function(y,R){var k,_=o.meridiem;if(_){for(var S=1;S<=24;S+=1)if(y.indexOf(_(S,0,R))>-1){k=S>12;break}}else k=y===(R?"pm":"PM");return k},b={A:[s,function(y){this.afternoon=f(y,!1)}],a:[s,function(y){this.afternoon=f(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[i,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[l,d("seconds")],ss:[l,d("seconds")],m:[l,d("minutes")],mm:[l,d("minutes")],H:[l,d("hours")],h:[l,d("hours")],HH:[l,d("hours")],hh:[l,d("hours")],D:[l,d("day")],DD:[i,d("day")],Do:[s,function(y){var R=o.ordinal,k=y.match(/\d+/);if(this.day=k[0],R)for(var _=1;_<=31;_+=1)R(_).replace(/\[|\]/g,"")===y&&(this.day=_)}],w:[l,d("week")],ww:[i,d("week")],M:[l,d("month")],MM:[i,d("month")],MMM:[s,function(y){var R=p("months"),k=(p("monthsShort")||R.map(function(_){return _.slice(0,3)})).indexOf(y)+1;if(k<1)throw new Error;this.month=k%12||k}],MMMM:[s,function(y){var R=p("months").indexOf(y)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,d("year")],YY:[i,function(y){this.year=u(y)}],YYYY:[/\d{4}/,d("year")],Z:c,ZZ:c};function v(y){var R,k;R=y,k=o&&o.formats;for(var _=(y=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,U,j){var O=j&&j.toUpperCase();return U||k[j]||r[j]||k[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(w,A,V){return A||V.slice(1)})})).match(n),S=_.length,x=0;x<S;x+=1){var B=_[x],q=b[B],z=q&&q[0],K=q&&q[1];_[x]=K?{regex:z,parser:K}:B.replace(/^\[|\]$/g,"")}return function(G){for(var U={},j=0,O=0;j<S;j+=1){var w=_[j];if(typeof w=="string")O+=w.length;else{var A=w.regex,V=w.parser,M=G.slice(O),I=A.exec(M)[0];V.call(U,I),G=G.replace(I,"")}}return function(N){var $=N.afternoon;if($!==void 0){var Y=N.hours;$?Y<12&&(N.hours+=12):Y===12&&(N.hours=0),delete N.afternoon}}(U),U}}return function(y,R,k){k.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(u=y.parseTwoDigitYear);var _=R.prototype,S=_.parse;_.parse=function(x){var B=x.date,q=x.utc,z=x.args;this.$u=q;var K=z[1];if(typeof K=="string"){var G=z[2]===!0,U=z[3]===!0,j=G||U,O=z[2];U&&(O=z[2]),o=this.$locale(),!G&&O&&(o=k.Ls[O]),this.$d=function(M,I,N,$){try{if(["x","X"].indexOf(I)>-1)return new Date((I==="X"?1e3:1)*M);var Y=v(I)(M),W=Y.year,J=Y.month,Ae=Y.day,ge=Y.hours,de=Y.minutes,ie=Y.seconds,Z=Y.milliseconds,re=Y.zone,pe=Y.week,ye=new Date,be=Ae||(W||J?1:ye.getDate()),We=W||ye.getFullYear(),qe=0;W&&!J||(qe=J>0?J-1:ye.getMonth());var De,hn=ge||0,En=de||0,Bn=ie||0,tn=Z||0;return re?new Date(Date.UTC(We,qe,be,hn,En,Bn,tn+60*re.offset*1e3)):N?new Date(Date.UTC(We,qe,be,hn,En,Bn,tn)):(De=new Date(We,qe,be,hn,En,Bn,tn),pe&&(De=$(De).week(pe).toDate()),De)}catch{return new Date("")}}(B,K,q,k),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),j&&B!=this.format(K)&&(this.$d=new Date("")),o={}}else if(K instanceof Array)for(var w=K.length,A=1;A<=w;A+=1){z[1]=K[A-1];var V=k.apply(this,z);if(V.isValid()){this.$d=V.$d,this.$L=V.$L,this.init();break}A===w&&(this.$d=new Date(""))}else S.call(this,x)}}})}(Ut)),Ut.exports}var xd=Sd();const Pd=wd(xd),jd="_textarea_14c7r_1",Ad="_readOnlyField_14c7r_7",ga={textarea:jd,readOnlyField:Ad},Nd=e=>e!=null&&e!=="",Id=({label:e,value:t,isEdited:r=!1,type:n,hideLabel:a,size:i})=>Nd(t)?he.jsxs(Ve,{gap:"space-4",children:[e&&!a&&he.jsx(pn,{size:i,children:e}),he.jsxs(on,{gap:"space-8",align:"center",wrap:!1,children:[he.jsx(Jt,{className:n==="textarea"?ga.textarea:ga.readOnlyField,size:i,children:t}),r&&he.jsx(yi,{})]})]}):null;ln.extend(Pd);const Ld=({label:e,description:t,validate:r=[],onChange:n,children:a,className:i,isReadOnly:l=!1,size:s="small",isEdited:o=!1,hideLegend:u=!1,...d})=>{const{name:c,control:p}=d,{formState:{errors:f}}=nn(),{field:b}=ui({name:c,control:p,rules:{validate:bi(r)}});return he.jsx(wu,{name:c,value:b.value!==void 0?b.value:null,legend:he.jsxs(on,{justify:"center",gap:"space-8",children:[e,l&&o&&he.jsx(yi,{})]}),hideLegend:u,disabled:l,description:t,size:s,error:ki(f,c),onChange:v=>{n&&n(v),b.onChange(v)},className:i,children:a})},Md="_textAreaFieldWithBadges_bdz0b_1",Vd="_etikettWrapper_bdz0b_4",pa={textAreaFieldWithBadges:Md,etikettWrapper:Vd},$t=({name:e,control:t,label:r,readOnly:n,maxLength:a,badges:i,validate:l=[],parse:s=f=>f,className:o,description:u,isEdited:d,size:c="small",...p})=>{const{formState:{errors:f}}=nn(),{field:b}=ui({name:e,control:t,rules:{validate:m.useMemo(()=>bi(l),[l])}});return n?he.jsx(Id,{size:c,label:r,value:b.value,type:"textarea",isEdited:d,hideLabel:p.hideLabel}):he.jsxs("div",{className:i?pa.textAreaFieldWithBadges:null,children:[i&&he.jsx("div",{className:pa.etikettWrapper,children:i.map(({type:v,titleText:y})=>he.jsx(vu,{variant:v,size:"small",children:y},y))}),he.jsx(ju,{size:c,label:r,description:u,className:o,autoComplete:"off",...b,onChange:v=>b.onChange(v.currentTarget.value!==""?s(v.currentTarget.value):null),value:b.value?b.value:"",error:ki(f,e),maxLength:a,...p})]})},Fd=({formMethods:e,onSubmit:t,children:r,className:n,setDataOnUnmount:a})=>{const{handleSubmit:i,getValues:l}=e;return m.useEffect(()=>()=>{a&&a(l())},[]),he.jsx(Iu,{...e,children:he.jsx("form",{className:n,onSubmit:t?i(s=>t(s)):void 0,children:r})})},qd="_readMore_mcbzv_1",Dd={readMore:qd},Bd=Ta(3),Cd=Sa(1500),bn=({readOnly:e,aksjonspunkt:t})=>{const r=Yt(),{control:n}=nn();return!t||t.definisjon!==se.KONTROLLER_STOR_ETTERBETALING_SØKER?null:P.jsxs(Ve,{gap:"space-16",children:[P.jsx(Xo,{header:P.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreTittel"}),className:Dd.readMore,children:P.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreInnhold"})}),P.jsx($t,{name:"begrunnelseEtterbetaling",control:n,label:r.formatMessage({id:"Simulering.Etterbetaling.Vurdering"}),validate:[Wn,Bd,Cd,Ft],maxLength:1500,size:"medium",readOnly:e})]})};bn.initialValues=e=>{if(!(!e||e.definisjon!==se.KONTROLLER_STOR_ETTERBETALING_SØKER))return{begrunnelseEtterbetaling:e.begrunnelse??""}};bn.transformValues=e=>({kode:se.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:e.begrunnelseEtterbetaling});bn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,alias:"Aksjonspunkt"}}],returns:{type:{name:"union",raw:"EtterbetalingSøkerFormValues | undefined",elements:[{name:"signature",type:"object",raw:`{
  begrunnelseEtterbetaling?: string;
}`,signature:{properties:[{key:"begrunnelseEtterbetaling",value:{name:"string",required:!1}}]}},{name:"undefined"}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelseEtterbetaling?: string;
}`,signature:{properties:[{key:"begrunnelseEtterbetaling",value:{name:"string",required:!1}}]},alias:"EtterbetalingSøkerFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}}}],displayName:"EtterbetalingSøkerForm",props:{aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Kd="_summaryTitle_1leg0_1",Gd="_infoSummary_1leg0_5",Ud="_ingenPerioder_1leg0_13",$d="_number_1leg0_17",xn={summaryTitle:Kd,infoSummary:Gd,ingenPerioder:Ud,number:$d},hi=({fom:e,tom:t,feilutbetaling:r,etterbetaling:n,inntrekk:a,ingenPerioderMedAvvik:i})=>P.jsxs(Ve,{gap:"space-16",children:[P.jsx(ve,{size:"small",className:xn.summaryTitle,children:P.jsx(ae,{id:"Simulering.bruker"})}),P.jsxs("div",{className:xn.infoSummary,children:[i&&P.jsx("div",{className:xn.ingenPerioder,children:P.jsx(ae,{id:"Simulering.ingenPerioder"})}),!i&&P.jsxs(Ve,{gap:"space-16",children:[P.jsx(pn,{size:"small",children:Ai(e,t)}),P.jsxs(on,{gap:"space-16",children:[P.jsxs(ve,{size:"small",children:[P.jsx(ae,{id:"Simulering.etterbetaling"}),":"]}),P.jsx(ve,{size:"small",children:P.jsx(Lt,{beløp:n})})]}),P.jsxs(on,{gap:"space-16",children:[P.jsxs(ve,{size:"small",children:[P.jsx(ae,{id:"Simulering.tilbakekreving"}),":"]}),P.jsx(ve,{weight:"semibold",size:"small",className:xn.number,children:P.jsx(Lt,{beløp:r,rød:r<0})})]}),a!=null&&P.jsxs(on,{gap:"space-16",children:[P.jsxs(ve,{size:"small",children:[P.jsx(ae,{id:"Simulering.inntrekk"}),":"]}),P.jsx(ve,{weight:"semibold",size:"small",className:xn.number,children:P.jsx(Lt,{beløp:a,rød:a<0})})]})]})]})]});hi.__docgenInfo={description:"Simulering oppsummering",methods:[],displayName:"SimuleringSummary",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},etterbetaling:{required:!0,tsType:{name:"number"},description:""},inntrekk:{required:!1,tsType:{name:"number"},description:""},ingenPerioderMedAvvik:{required:!1,tsType:{name:"boolean"},description:""}}};var Mt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var va;function Hd(){return va||(va=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(i=a(i,n.call(this,s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var s in i)t.call(i,s)&&i[s]&&(l=a(l,this&&this[s]||s));return l}function a(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Mt)),Mt.exports}var zd=Hd();const Yd=Ra(zd),Wd="_invisibleButton_1u9o7_1",Jd={invisibleButton:Wd},Xd=e=>e?"Simulering.headerText.VisFærreDetaljer":"Simulering.headerText.VisFlereDetaljer",Ei=({toggleDetails:e,showDetails:t,mottakerIndex:r})=>P.jsxs("button",{type:"button",className:Jd.invisibleButton,onClick:()=>e(r),children:[P.jsx(ae,{id:Xd(t)}),t?P.jsx(il,{}):P.jsx(Zt,{})]});Ei.__docgenInfo={description:"",methods:[],displayName:"CollapseButton",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"boolean"},description:""},mottakerIndex:{required:!0,tsType:{name:"number"},description:""}}};const Zd="_tableWrapper_piqyx_1",Qd="_simuleringTable_piqyx_5",ec="_rodTekst_piqyx_5",nc="_lastColumn_piqyx_9",tc="_nextPeriod_piqyx_17",rc="_normalPeriod_piqyx_23",Ht={tableWrapper:Zd,simuleringTable:Qd,rodTekst:ec,lastColumn:nc,nextPeriod:tc,normalPeriod:rc},Ri=Yd.bind(Ht),An={DIFFERANSE:"differanse",INNTREKKNESTEMÅNED:"inntrekkNesteMåned"},wi=({simuleringResultat:e,toggleDetails:t,showDetails:r,ingenPerioderMedAvvik:n,arbeidsgiverOpplysningerPerId:a})=>P.jsx(P.Fragment,{children:e.perioderPerMottaker.map((i,l)=>{const s=cc(n,e.periode.fom,i),o=i.nesteUtbPeriode.tom,u=r.find(c=>c.id===l),d=oc(n,i.resultatPerFagområde,i.resultatOgMotregningRader);return P.jsxs("div",{className:Ht.tableWrapper,children:[sc(i,a),P.jsxs(fe,{className:Ht.simuleringTable,children:[P.jsx(fe.Header,{children:P.jsxs(fe.Row,{children:[ac(i.resultatPerFagområde)?P.jsx(fe.HeaderCell,{scope:"col",children:P.jsx(Ei,{toggleDetails:t,mottakerIndex:l,showDetails:u?u.show:!1},`collapseButton-${s.length}`)}):P.jsx(fe.HeaderCell,{}),s.map(c=>P.jsx(fe.HeaderCell,{scope:"col",className:Ri({nextPeriod:ya(c,o),normalPeriod:!ya(c,o)}),children:P.jsx(ae,{id:`Simulering.headerText.${c.month}`})},`${c.month}-${c.year}`))]})}),P.jsxs(fe.Body,{children:[i.resultatPerFagområde.map((c,p)=>c.rader.filter(f=>{const b=f.feltnavn===An.DIFFERANSE,v=ba(c,b);return!ic(v,u?u.show:!1)}).map((f,b)=>{const v=f.feltnavn===An.DIFFERANSE,R=ba(c,v)?"dashed 1px var(--ax-neutral-300)":"solid 1px var(--ax-neutral-300)";return P.jsxs(fe.Row,{children:[P.jsx(fe.DataCell,{style:v||n?{fontWeight:"bold",borderBottom:R}:{borderBottom:R},children:P.jsx(ae,{id:`Simulering.${c.fagOmrådeKode}.${f.feltnavn}`})}),ka(f.resultaterPerMåned,s,o,R)]},`rowIndex${p+1}${b+1}`)})),d.map((c,p)=>P.jsxs(fe.Row,{children:[P.jsx(fe.DataCell,{style:c.feltnavn!==An.INNTREKKNESTEMÅNED?{fontWeight:"bold"}:{},children:P.jsx(ae,{id:`Simulering.${c.feltnavn}`})}),ka(c.resultaterPerMåned,s,o)]},`rowIndex${p+1}`))]})]},`tableIndex${l+1}`)]},`tableIndex${l+1}`)})}),ya=(e,t)=>`${e.month}${e.year}`===(t?ln(t).format("MMMMYY"):!1),ac=e=>e.some(t=>t.rader.length>1),ba=(e,t)=>!!e.rader.find(n=>n.feltnavn===An.DIFFERANSE)&&!t,ic=(e,t)=>e&&!t,ka=(e,t,r,n)=>{const a=`${ln(r).format("MMMMYY")}`;return t.map(l=>e.find(o=>ln(o.periode.tom).format("MMMMYY").toLowerCase()===`${l.month}${l.year}`)||{måned:`${l.month}${l.year}`,beløp:null}).map((l,s)=>P.jsx(fe.DataCell,{style:{borderBottom:n},className:Ri({rodTekst:!l.beløp||l.beløp<0,lastColumn:"måned"in l?l.måned===a:ln(l.periode.tom).format("MMMMYY")===a}),children:l.beløp?_a(l.beløp):"-"},`columnIndex${s+1}`))},lc=(e,t)=>{const r=e.mottakerIdentifikator?t[e.mottakerIdentifikator]:void 0;return r?`${r.navn} (${e.mottakerNummer})`:`${e.mottakerNummer}`},sc=(e,t)=>e.mottakerType===Nn.ARBG||e.mottakerType===Nn.ARBGP?P.jsx(Aa,{size:"xsmall",level:"3",children:lc(e,t)}):null,oc=(e,t,r)=>e?t.length>1?r.filter(n=>n.feltnavn!==An.INNTREKKNESTEMÅNED):[]:r,uc=(e,t)=>!!(e&&t===Nn.BRUKER),dc=(e,t)=>e||t,cc=(e,t,r)=>{const n=uc(e,r.mottakerType)?ln(r.nesteUtbPeriode.tom).subtract(1,"months").format():dc(t,r.nesteUtbPeriode.fom);return Ni(n,r.nesteUtbPeriode.tom)};wi.__docgenInfo={description:"",methods:[],displayName:"SimuleringTable",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const fc="_helpTextImage_151dm_1",mc="_varsel_151dm_17",gc="_bold_151dm_23",Vt={helpTextImage:fc,varsel:mc,bold:gc},ha=Ta(3),Ea=Sa(1500),pr="IKKE_SEND",kn=({readOnly:e,språkkode:t,previewCallback:r,aksjonspunkt:n,fagsak:a})=>{const i=Yt(),{watch:l,control:s}=nn(),o=l("varseltekst"),u=l("videreBehandling"),d=a.fagsakYtelseType===Ii.FORELDREPENGER,c=p=>{r({mottaker:"",fritekst:o??" "}),p.preventDefault()};return!n||n.definisjon!==se.VURDER_FEILUTBETALING?null:P.jsxs(Ve,{gap:"space-40",align:"start",children:[P.jsx($t,{name:"begrunnelse",control:s,label:i.formatMessage({id:"Simulering.vurdering"}),validate:[Wn,ha,Ea,Ft],maxLength:1500,readOnly:e}),P.jsx(Ld,{name:"videreBehandling",control:s,label:P.jsx(ae,{id:"Simulering.videreBehandling"}),validate:[Wn],isReadOnly:e,children:P.jsxs(Ve,{gap:"space-2",children:[P.jsx(Nt,{value:Ge.TILBAKEKR_OPPRETT,size:"small",children:P.jsx(ae,{id:"Simulering.gjennomfør"})}),u===Ge.TILBAKEKR_OPPRETT&&P.jsx("div",{className:Vt.varsel,children:P.jsx(id,{alignOffset:20,children:P.jsxs(Ve,{gap:"space-16",children:[P.jsxs(on,{gap:"space-8",children:[P.jsx(ve,{size:"small",className:Vt.bold,children:P.jsx(ae,{id:"Simulering.varseltekst"})}),P.jsx(ti,{content:d?i.formatMessage({id:"Simulering.HjelpetekstForeldrepenger"}):i.formatMessage({id:"Simulering.HjelpetekstEngangsstonad"}),children:P.jsx(gl,{className:Vt.helpTextImage})})]}),P.jsx($t,{name:"varseltekst",control:s,label:i.formatMessage({id:"Simulering.fritekst"}),validate:[Wn,ha,Ea,Ft],maxLength:1500,readOnly:e,parse:Mi,badges:[{type:"info",titleText:Li(t)}]}),!e&&P.jsx(Yo,{href:"#",onClick:c,children:P.jsx(ae,{id:"Messages.PreviewText"})})]})})}),P.jsx(Nt,{value:`${Ge.TILBAKEKR_OPPRETT}${pr}`,size:"small",children:P.jsx(ae,{id:"Simulering.OpprettMenIkkeSendVarsel"})}),P.jsx(Nt,{value:Ge.TILBAKEKR_IGNORER,size:"small",children:P.jsx(ae,{id:"Simulering.avvent"})})]})})]})};kn.initialValues=(e,t)=>!e||!t?void 0:{videreBehandling:!t.varseltekst&&t.videreBehandling===Ge.TILBAKEKR_OPPRETT?t.videreBehandling+pr:t.videreBehandling,varseltekst:t.varseltekst,begrunnelse:e.begrunnelse??""};kn.transformValues=e=>{const{videreBehandling:t,varseltekst:r,begrunnelse:n}=e;return t?.endsWith(pr)?{kode:se.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:Ge.TILBAKEKR_OPPRETT}:{kode:se.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:t,varseltekst:r}};kn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,alias:"Aksjonspunkt"}},{name:"tilbakekrevingvalg",optional:!0,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}`,signature:{properties:[{key:"erTilbakekrevingVilkårOppfylt",value:{name:"boolean",required:!0}},{key:"grunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}>`,alias:"TilbakekrevingValg"}}],returns:{type:{name:"union",raw:"FeilutbetalingFormValues | undefined",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}}}],displayName:"TilbakekrevSøkerForm",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const Oi=({simuleringResultat:e,previewFptilbakeCallback:t,tilbakekrevingvalg:r,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:a,submitCallback:i,isReadOnly:l,harÅpneAksjonspunkter:s,fagsak:o,behandling:u}=Vi(),{mellomlagretFormData:d,setMellomlagretFormData:c}=Fi(),p=Ju({defaultValues:d??yc(a,r)}),{formState:f}=p,[b,v]=m.useState([]),y=r!==void 0&&r.videreBehandling===Ge.TILBAKEKR_OPPDATER,R=pc(b,v),k=e?.simuleringResultat,_=un(se.VURDER_FEILUTBETALING,a)||un(se.KONTROLLER_STOR_ETTERBETALING_SØKER,a),S=s?bc(a):[];return P.jsxs(Ve,{gap:"space-32",children:[P.jsx(Aa,{size:"small",level:"2",children:P.jsx(ae,{id:"Simulering.Title"})}),k&&P.jsxs(P.Fragment,{children:[S.length>0&&S.map(x=>P.jsx("div",{children:P.jsx(ed,{children:[x]})},x.key)),P.jsx(hi,{fom:k.periode.fom,tom:k.periode.tom,feilutbetaling:k.sumFeilutbetaling,etterbetaling:k.sumEtterbetaling,inntrekk:k.sumInntrekk,ingenPerioderMedAvvik:k.ingenPerioderMedAvvik}),P.jsx(wi,{arbeidsgiverOpplysningerPerId:n,showDetails:b,toggleDetails:R,simuleringResultat:k,ingenPerioderMedAvvik:k.ingenPerioderMedAvvik}),y&&P.jsx(pn,{size:"small",children:P.jsx(ae,{id:"Simulering.ApenTilbakekrevingsbehandling"})})]}),!e&&P.jsx(ae,{id:"Simulering.ingenData"}),_&&P.jsx(Fd,{formMethods:p,onSubmit:x=>i(vc(x,a)),setDataOnUnmount:c,children:P.jsxs(Ve,{gap:"space-16",children:[P.jsx(kn,{aksjonspunkt:ut(a,se.VURDER_FEILUTBETALING),fagsak:o,previewCallback:t,readOnly:l,språkkode:u.språkkode}),P.jsx(bn,{readOnly:l,aksjonspunkt:ut(a,se.KONTROLLER_STOR_ETTERBETALING_SØKER)}),P.jsx("div",{children:P.jsx(za,{size:"small",variant:"primary",disabled:!f.isDirty||f.isSubmitting||l,loading:f.isSubmitting,children:P.jsx(ae,{id:"SubmitButton.ConfirmInformation"})})})]})})]})},ut=(e,t)=>e.find(r=>r.definisjon===t),pc=(e,t)=>r=>{const n=e.findIndex(i=>i.id===r);let a=[];if(n!==-1){const i={id:r,show:!e[n].show};a=[...e.slice(0,n),i,...e.slice(n+1,e.length-1)]}else a=e.concat({id:r,show:!0});t(a)},vc=(e,t)=>{const r=[];return un(se.VURDER_FEILUTBETALING,t)&&"videreBehandling"in e&&r.push(kn.transformValues(e)),un(se.KONTROLLER_STOR_ETTERBETALING_SØKER,t)&&"begrunnelseEtterbetaling"in e&&r.push(bn.transformValues(e)),r},yc=(e,t)=>{if(e.length!==0)return{...kn.initialValues(ut(e,se.VURDER_FEILUTBETALING),t),...bn.initialValues(ut(e,se.KONTROLLER_STOR_ETTERBETALING_SØKER))}},bc=e=>{const t=[];return un(se.VURDER_FEILUTBETALING,e)&&t.push(P.jsx(ae,{id:"Simulering.AksjonspunktHelpText.5084"},"vurderFeilutbetaling")),un(se.KONTROLLER_STOR_ETTERBETALING_SØKER,e)&&t.push(P.jsx(ae,{id:"Simulering.Etterbetaling.Tittel"},"kontrollerFeilutbetaling")),t};Oi.__docgenInfo={description:"",methods:[],displayName:"SimuleringPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
}>`},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const kc={"Simulering.Title":"Simulering","Simulering.FP.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FP.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FP.differanse":"Foreldrepenger avvik","Simulering.FPREF.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FPREF.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FPREF.differanse":"Foreldrepenger avvik","Simulering.OM.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OM.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OM.differanse":"Omsorgspenger avvik","Simulering.OMREF.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OMREF.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OMREF.differanse":"Omsorgspenger avvik","Simulering.OOP.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOP.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOP.differanse":"Pleiepenger avvik","Simulering.OOPREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOPREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOPREF.differanse":"Pleiepenger avvik","Simulering.OPP.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPP.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPP.differanse":"Opplæringspenger avvik","Simulering.OPPREF.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPPREF.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPPREF.differanse":"Opplæringspenger avvik","Simulering.PB.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PB.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PB.differanse":"Pleiepenger avvik","Simulering.PBREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PBREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PBREF.differanse":"Pleiepenger avvik","Simulering.PN.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PN.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PN.differanse":"Pleiepenger avvik","Simulering.PNREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PNREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PNREF.differanse":"Pleiepenger avvik","Simulering.REFUTG.nyttBeløp":"Engangstønad nytt beløp","Simulering.REFUTG.tidligereUtbetalt":"Engangstønad tidligere utbetalt","Simulering.REFUTG.differanse":"Engangstønad avvik","Simulering.SP.nyttBeløp":"Sykepenger nytt beløp","Simulering.SP.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SP.differanse":"Sykepenger avvik","Simulering.SPREF.nyttBeløp":"Sykepenger nytt beløp","Simulering.SPREF.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SPREF.differanse":"Sykepenger avvik","Simulering.SVP.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVP.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVP.differanse":"Svangerskapspenger avvik","Simulering.SVPREF.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVPREF.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVPREF.differanse":"Svangerskapspenger avvik","Simulering.resultatEtterMotregning":"Resultat etter motregning mellom ytelser","Simulering.inntrekk":"Inntrekk","Simulering.inntrekkNesteMåned":"Inntrekk i neste måned","Simulering.tilbakekreving":"Feilutbetaling","Simulering.etterbetaling":"Etterbetaling","Simulering.resultat":"Resultat","Simulering.avregnetBeløp":"Avregnet beløp","Simulering.headerText.VisFærreDetaljer":"Vis færre detaljer","Simulering.headerText.VisFlereDetaljer":"Vis flere detaljer","Simulering.headerText.januar":"Jan","Simulering.headerText.februar":"Feb","Simulering.headerText.mars":"Mars","Simulering.headerText.april":"Apr","Simulering.headerText.mai":"Mai","Simulering.headerText.juni":"Jun","Simulering.headerText.juli":"Jul","Simulering.headerText.august":"Aug","Simulering.headerText.september":"Sep","Simulering.headerText.oktober":"Okt","Simulering.headerText.november":"Nov","Simulering.headerText.desember":"Des","Simulering.ingenData":"Ingen informasjon om simulering mottatt fra økonomiløsningen.","Simulering.ingenPerioder":"Ingen periode med avvik","Simulering.AksjonspunktHelpText.5084":"Vurder videre behandling av tilbakekreving","Simulering.vurdering":"Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre","Simulering.videreBehandling":"Fastsett videre behandling","Simulering.gjennomfør":"Opprett tilbakekreving, send varsel","Simulering.OpprettMenIkkeSendVarsel":"Opprett tilbakekreving, ikke send varsel","Simulering.Opprett":"Opprett tilbakekreving","Simulering.avvent":"Avvent samordning, ingen tilbakekreving","Simulering.formAlternativ.ja":"Ja","Simulering.formAlternativ.nei":"Nei","Simulering.bruker":"Bruker","Simulering.varseltekst":"Send varsel om tilbakekreving","Simulering.fritekst":"Fritekst i varselet","Simulering.HjelpetekstForeldrepenger":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav. Eksempel på tekst: «Vi mottok melding fra deg [dato]om at du hadde jobbet heltid. Du kan ikke jobbe og motta foreldrepenger samtidig. Da vi mottok meldingen fra deg, var det allerede utbetalt foreldrenger for perioden du har jobbet.","Simulering.HjelpetekstEngangsstonad":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav.","Simulering.ApenTilbakekrevingsbehandling":"Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.","Simulering.Etterbetaling.Tittel":"Ny inntektsmelding vil føre til en høy etterbetaling til bruker i en tidligere innvilget periode. Kontroller om dette er riktig","Simulering.Etterbetaling.ReadMoreTittel":"Dette bør undersøkes rundt etterbetalingen","Simulering.Etterbetaling.ReadMoreInnhold":"Saken stopper i simulering fordi arbeidsgiver har endret sitt refusjonskrav, eller har endret fra refusjon til direkte utbetaling i en periode som allerede har blitt utbetalt til bruker. I tillegg er etterbetalingen høy. Du må kontrollerer om dette er riktig. Dette kan gjøres ved å kontakte arbeidsgiver. Er det feil, må de sende inn ny inntektsmelding. Får du ikke tak i arbeidsgiver, kan du kontakte søker og høre om de kan spørre arbeidsgiveren sin.","Simulering.Etterbetaling.Vurdering":"Begrunn hvorfor du går videre med denne behandlingen.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","Messages.PreviewText":"Forhåndsvis varselbrev"},hc=mn(kc),zt=e=>P.jsx(qi,{value:hc,children:P.jsx(Oi,{...e})});zt.__docgenInfo={description:"",methods:[],displayName:"SimuleringProsessIndex",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
}>`},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const{action:Ec}=__STORYBOOK_MODULE_ACTIONS__,Rc={123:{erPrivatPerson:!1,identifikator:"123",referanse:"123",navn:"test"}},wc={simuleringResultat:{periode:{fom:"2019-01-01",tom:"2019-03-31"},sumEtterbetaling:0,sumFeilutbetaling:-49863,sumInntrekk:-10899,ingenPerioderMedAvvik:!1,perioderPerMottaker:[{mottakerType:Nn.ARBG,mottakerIdentifikator:"123",mottakerNummer:"test",resultatPerFagområde:[{fagOmrådeKode:"FP",rader:[{feltnavn:"nyttBeløp",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:52619}]},{feltnavn:"tidligereUtbetalt",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:61795}]},{feltnavn:"differanse",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-9176}]}]}],resultatOgMotregningRader:[{feltnavn:"inntrekkNesteMåned",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:0}]},{feltnavn:"resultat",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-26486}]}],nesteUtbPeriode:{fom:"2019-10-01",tom:"2019-10-31"}}]},slåttAvInntrekk:!1},xc={title:"prosess/prosess-simulering",component:zt,decorators:[Di,Bi],args:{arbeidsgiverOpplysningerPerId:Rc,simuleringResultat:wc,previewFptilbakeCallback:Ec("button-click")},render:e=>P.jsx(zt,{...e})},$n={args:{aksjonspunkterForPanel:[{definisjon:se.VURDER_FEILUTBETALING,begrunnelse:null,status:Wt.OPPRETTET}]}},Hn={args:{aksjonspunkterForPanel:[{definisjon:se.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:null,status:Wt.OPPRETTET}]}},zn={args:{aksjonspunkterForPanel:[{definisjon:se.VURDER_FEILUTBETALING,begrunnelse:null,status:Wt.OPPRETTET},{definisjon:se.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:null}]}},Yn={args:{aksjonspunkterForPanel:[],tilbakekrevingvalg:{videreBehandling:Ge.TILBAKEKR_OPPDATER,varseltekst:"varsel-eksempel"}}};$n.parameters={...$n.parameters,docs:{...$n.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse: null,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...$n.parameters?.docs?.source}}};Hn.parameters={...Hn.parameters,docs:{...Hn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      begrunnelse: null,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...Hn.parameters?.docs?.source}}};zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`{
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
}`,...zn.parameters?.docs?.source}}};Yn.parameters={...Yn.parameters,docs:{...Yn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    tilbakekrevingvalg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
      varseltekst: 'varsel-eksempel'
    } as TilbakekrevingValg
  }
}`,...Yn.parameters?.docs?.source}}};const Pc=["AksjonspunktVurderFeilutbetaling","AksjonspunktKontrollerEtterbetaling","AksjonspunktVurderFeilutbetalingOgEtterbetaling","SimuleringspanelUtenAksjonspunkt"];export{Hn as AksjonspunktKontrollerEtterbetaling,$n as AksjonspunktVurderFeilutbetaling,zn as AksjonspunktVurderFeilutbetalingOgEtterbetaling,Yn as SimuleringspanelUtenAksjonspunkt,Pc as __namedExportsOrder,xc as default};
