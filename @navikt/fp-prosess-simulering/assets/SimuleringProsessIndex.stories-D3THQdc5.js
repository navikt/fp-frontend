import{g as Va,r as f,u as Wt,_ as hr,s as kr,c as Nn,a as X,b as E,d as zi,e as ut,T as Wi,S as dt,R as qa,f as Ca,q as Yi,P as Ba,h as an,i as ze,j,t as Ji,w as Xi,F as Zi,W as Qi,k as el,l as nl,m as tl,n as rl,o as al,p as il,A as Yt}from"./iframe-Ddfid8oW.js";import{r as ll}from"./index-C_fwUxHv.js";var Ka=ll();const Mt=Va(Ka);function sl(e,t){var r=e.values,n=hr(e,["values"]),a=t.values,i=hr(t,["values"]);return kr(a,r)&&kr(n,i)}function $a(e){var t=Wt(),r=t.formatMessage,n=t.textComponent,a=n===void 0?f.Fragment:n,i=e.id,l=e.description,s=e.defaultMessage,o=e.values,u=e.children,d=e.tagName,c=d===void 0?a:d,v=e.ignoreTag,m={id:i,description:l,defaultMessage:s},b=r(m,o,{ignoreTag:v});return typeof u=="function"?u(Array.isArray(b)?b:[b]):c?f.createElement(c,null,b):f.createElement(f.Fragment,null,b)}$a.displayName="FormattedMessage";var ae=f.memo($a,sl);ae.displayName="MemoizedFormattedMessage";var oe=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(oe||{});const dn=(e,t)=>t.some(r=>r.definisjon===e);var jn=(e=>(e.ARBG="ARBG_ORG",e.ARBGP="ARBG_PRIV",e.BRUKER="BRUKER",e))(jn||{}),We=(e=>(e.TILBAKEKR_OPPRETT="TILBAKEKR_OPPRETT",e.TILBAKEKR_IGNORER="TILBAKEKR_IGNORER",e.TILBAKEKR_INNTREKK="TILBAKEKR_INNTREKK",e.TILBAKEKR_OPPDATER="TILBAKEKR_OPPDATER",e))(We||{});const gn=e=>Nn({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var ol=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Jt=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:i,truncate:l,weight:s="regular",align:o,visuallyHidden:u,textColor:d}=e,c=ol(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=X();return E.createElement(a,Object.assign({},c,{ref:t,className:v(r,"navds-body-long",`navds-body-long--${n}`,gn({spacing:i,truncate:l,weight:s,align:o,visuallyHidden:u,textColor:d}))}))});var ul=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ye=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:i,truncate:l,weight:s="regular",align:o,visuallyHidden:u,textColor:d}=e,c=ul(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=X();return E.createElement(a,Object.assign({},c,{ref:t,className:v(r,"navds-body-short",`navds-body-short--${n}`,gn({spacing:i,truncate:l,weight:s,align:o,visuallyHidden:u,textColor:d}))}))});var dl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const cl=f.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:a,uppercase:i,as:l="p",truncate:s,weight:o="regular",align:u,visuallyHidden:d,textColor:c}=e,v=dl(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=X();return E.createElement(l,Object.assign({},v,{ref:t,className:m(r,"navds-detail",gn({spacing:a,truncate:s,weight:o,align:u,visuallyHidden:d,textColor:c,uppercase:i}),{"navds-detail--small":n==="small"})}))});var fl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ga=f.forwardRef((e,t)=>{var{children:r,className:n,size:a,spacing:i,as:l="p",showIcon:s=!1}=e,o=fl(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=X();return E.createElement(l,Object.assign({},o,{ref:t,className:u("navds-error-message","navds-label",n,gn({spacing:i}),{"navds-label--small":a==="small","navds-error-message--show-icon":s})}),s&&E.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var ml=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ua=f.forwardRef((e,t)=>{var{level:r="1",size:n,className:a,as:i,spacing:l,align:s,visuallyHidden:o,textColor:u}=e,d=ml(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:c}=X(),v=i??`h${r}`;return E.createElement(v,Object.assign({},d,{ref:t,className:c(a,"navds-heading",`navds-heading--${n}`,gn({spacing:l,align:s,visuallyHidden:o,textColor:u}))}))});var gl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};f.forwardRef((e,t)=>{var{className:r,spacing:n,as:a="p"}=e,i=gl(e,["className","spacing","as"]);const{cn:l}=X();return E.createElement(a,Object.assign({},i,{ref:t,className:l(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var vl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const vn=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="label",spacing:i,visuallyHidden:l,textColor:s}=e,o=vl(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=X();return E.createElement(a,Object.assign({},o,{ref:t,className:u(r,"navds-label",gn({spacing:i,visuallyHidden:l,textColor:s}),{"navds-label--small":n==="small"})}))});function Ha(e,t=166,r=!1){let n;function a(...i){const l=()=>{n=void 0,e.apply(this,i)};!n&&r&&l(),clearTimeout(n),n=setTimeout(l,t)}return a.clear=()=>{clearTimeout(n)},a}function Ke(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}const Er=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};let Rr=0;function pl(e){const[t,r]=f.useState(e),n=e||t;return f.useEffect(()=>{t==null&&(Rr+=1,r(`aksel-id-${Rr}`))},[t]),n}const wr=E.useId;function Je(e){var t;if(wr!==void 0){const r=wr();return e??r.replace(/(:)/g,"")}return(t=pl(e))!==null&&t!==void 0?t:""}function Or(e,t=[]){const r=f.useRef(e);return f.useEffect(()=>{r.current=e}),f.useCallback((...n)=>{var a;return(a=r.current)===null||a===void 0?void 0:a.call(r,...n)},t)}function Xt({value:e,defaultValue:t,onChange:r}){const n=Or(r),[a,i]=f.useState(t),l=e!==void 0,s=l?e:a,o=Or(u=>{const c=typeof u=="function"?u(s):u;l||i(c),n(c)},[l,n,s]);return[s,o]}let _r=0;function yl(e){const[t,r]=f.useState(e),n=e||t;return f.useEffect(()=>{t==null&&(_r+=1,r(`aksel-icon-${_r}`))},[t]),n}const Sr=E.useId;function Se(e){var t;return Sr!==void 0?Sr().replace(/(:)/g,""):(t=yl(e))!==null&&t!==void 0?t:""}var bl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const hl=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=bl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var kl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const El=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=kl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Rl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Zt=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Rl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var wl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ol=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=wl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var _l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Sl=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=_l(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Tl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const xl=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Tl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Pl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const za=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Pl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var jl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Al=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=jl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Nl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Il=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Nl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var Ll=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ml=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Ll(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var Fl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Dl=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Fl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var Vl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ql=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Vl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Cl=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Bl=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Cl(e,["title","titleId"]);let i=Se();return i=r?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},a),r?f.createElement("title",{id:i},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function ct(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}const[Cf,Kl]=zi({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function kt(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function kn(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,s=r!=null&&r.width?String(r.width):l;a=e.formattingValues[s]||e.formattingValues[l]}else{const l=e.defaultWidth,s=r!=null&&r.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[l]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}function En(e){return(t,r={})=>{const n=r.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const l=i[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(s)?Gl(s,c=>c.test(l)):$l(s,c=>c.test(l));let u;u=e.valueCallback?e.valueCallback(o):o,u=r.valueCallback?r.valueCallback(u):u;const d=t.slice(l.length);return{value:u,rest:d}}}function $l(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function Gl(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Ul(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0],i=t.match(e.parsePattern);if(!i)return null;let l=e.valueCallback?e.valueCallback(i[0]):i[0];l=r.valueCallback?r.valueCallback(l):l;const s=t.slice(a.length);return{value:l,rest:s}}}const Hl={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},zl=(e,t,r)=>{let n;const a=Hl[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},Wl={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Yl={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Jl={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Xl={date:kt({formats:Wl,defaultWidth:"full"}),time:kt({formats:Yl,defaultWidth:"full"}),dateTime:kt({formats:Jl,defaultWidth:"full"})},Zl={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Ql=(e,t,r,n)=>Zl[e],es={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},ns={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},ts={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},rs={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},as={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},is=(e,t)=>Number(e)+".",ls={ordinalNumber:is,era:kn({values:es,defaultWidth:"wide"}),quarter:kn({values:ns,defaultWidth:"wide",argumentCallback:e=>e-1}),month:kn({values:ts,defaultWidth:"wide"}),day:kn({values:rs,defaultWidth:"wide"}),dayPeriod:kn({values:as,defaultWidth:"wide"})},ss=/^(\d+)\.?/i,os=/\d+/i,us={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ds={any:[/^f/i,/^e/i]},cs={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},fs={any:[/1/i,/2/i,/3/i,/4/i]},ms={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},gs={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},vs={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},ps={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},ys={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},bs={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},hs={ordinalNumber:Ul({matchPattern:ss,parsePattern:os,valueCallback:e=>parseInt(e,10)}),era:En({matchPatterns:us,defaultMatchWidth:"wide",parsePatterns:ds,defaultParseWidth:"any"}),quarter:En({matchPatterns:cs,defaultMatchWidth:"wide",parsePatterns:fs,defaultParseWidth:"any",valueCallback:e=>e+1}),month:En({matchPatterns:ms,defaultMatchWidth:"wide",parsePatterns:gs,defaultParseWidth:"any"}),day:En({matchPatterns:vs,defaultMatchWidth:"wide",parsePatterns:ps,defaultParseWidth:"any"}),dayPeriod:En({matchPatterns:ys,defaultMatchWidth:"any",parsePatterns:bs,defaultParseWidth:"any"})},ks={code:"nb",formatDistance:zl,formatLong:Xl,formatRelative:Ql,localize:ls,match:hs,options:{weekStartsOn:1,firstWeekContainsDate:4}},Es={global:{dateLocale:ks,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Rs=f.createContext({locale:Es}),Wa=()=>f.useContext(Rs);var ws=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Os=f.forwardRef((e,t)=>{var r,n,a,{rootElement:i,asChild:l}=e,s=ws(e,["rootElement","asChild"]);const o=ut(!1),u=(r=Wa())===null||r===void 0?void 0:r.rootElement,d=(n=i??u)!==null&&n!==void 0?n:(a=globalThis==null?void 0:globalThis.document)===null||a===void 0?void 0:a.body,c=l?dt:"div";return o?d?Mt.createPortal(E.createElement(Wi,{theme:o.theme,asChild:!0,hasBackground:!1,"data-color":o.color},E.createElement(c,Object.assign({ref:t,"data-aksel-portal":""},s))),d):null:d?Mt.createPortal(E.createElement(c,Object.assign({ref:t,"data-aksel-portal":""},s)),d):null}),cn=Math.min,en=Math.max,Xn=Math.round,Bn=Math.floor,Me=e=>({x:e,y:e}),_s={left:"right",right:"left",bottom:"top",top:"bottom"},Ss={start:"end",end:"start"};function Ft(e,t,r){return en(e,cn(t,r))}function In(e,t){return typeof e=="function"?e(t):e}function tn(e){return e.split("-")[0]}function Ln(e){return e.split("-")[1]}function Ya(e){return e==="x"?"y":"x"}function Qt(e){return e==="y"?"height":"width"}function fn(e){return["top","bottom"].includes(tn(e))?"y":"x"}function er(e){return Ya(fn(e))}function Ts(e,t,r){r===void 0&&(r=!1);const n=Ln(e),a=er(e),i=Qt(a);let l=a==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Zn(l)),[l,Zn(l)]}function xs(e){const t=Zn(e);return[Dt(e),t,Dt(t)]}function Dt(e){return e.replace(/start|end/g,t=>Ss[t])}function Ps(e,t,r){const n=["left","right"],a=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return r?t?a:n:t?n:a;case"left":case"right":return t?i:l;default:return[]}}function js(e,t,r,n){const a=Ln(e);let i=Ps(tn(e),r==="start",n);return a&&(i=i.map(l=>l+"-"+a),t&&(i=i.concat(i.map(Dt)))),i}function Zn(e){return e.replace(/left|right|bottom|top/g,t=>_s[t])}function As(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ja(e){return typeof e!="number"?As(e):{top:e,right:e,bottom:e,left:e}}function Qn(e){const{x:t,y:r,width:n,height:a}=e;return{width:n,height:a,top:r,left:t,right:t+n,bottom:r+a,x:t,y:r}}function Tr(e,t,r){let{reference:n,floating:a}=e;const i=fn(t),l=er(t),s=Qt(l),o=tn(t),u=i==="y",d=n.x+n.width/2-a.width/2,c=n.y+n.height/2-a.height/2,v=n[s]/2-a[s]/2;let m;switch(o){case"top":m={x:d,y:n.y-a.height};break;case"bottom":m={x:d,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:c};break;case"left":m={x:n.x-a.width,y:c};break;default:m={x:n.x,y:n.y}}switch(Ln(t)){case"start":m[l]-=v*(r&&u?-1:1);break;case"end":m[l]+=v*(r&&u?-1:1);break}return m}const Ns=async(e,t,r)=>{const{placement:n="bottom",strategy:a="absolute",middleware:i=[],platform:l}=r,s=i.filter(Boolean),o=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:a}),{x:d,y:c}=Tr(u,n,o),v=n,m={},b=0;for(let y=0;y<s.length;y++){const{name:p,fn:R}=s[y],{x:h,y:O,data:x,reset:_}=await R({x:d,y:c,initialPlacement:n,placement:v,strategy:a,middlewareData:m,rects:u,platform:l,elements:{reference:e,floating:t}});d=h??d,c=O??c,m={...m,[p]:{...m[p],...x}},_&&b<=50&&(b++,typeof _=="object"&&(_.placement&&(v=_.placement),_.rects&&(u=_.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:a}):_.rects),{x:d,y:c}=Tr(u,v,o)),y=-1)}return{x:d,y:c,placement:v,strategy:a,middlewareData:m}};async function Xa(e,t){var r;t===void 0&&(t={});const{x:n,y:a,platform:i,rects:l,elements:s,strategy:o}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:v=!1,padding:m=0}=In(t,e),b=Ja(m),p=s[v?c==="floating"?"reference":"floating":c],R=Qn(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(p)))==null||r?p:p.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:d,strategy:o})),h=c==="floating"?{x:n,y:a,width:l.floating.width,height:l.floating.height}:l.reference,O=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),x=await(i.isElement==null?void 0:i.isElement(O))?await(i.getScale==null?void 0:i.getScale(O))||{x:1,y:1}:{x:1,y:1},_=Qn(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:h,offsetParent:O,strategy:o}):h);return{top:(R.top-_.top+b.top)/x.y,bottom:(_.bottom-R.bottom+b.bottom)/x.y,left:(R.left-_.left+b.left)/x.x,right:(_.right-R.right+b.right)/x.x}}const Is=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:a,rects:i,platform:l,elements:s,middlewareData:o}=t,{element:u,padding:d=0}=In(e,t)||{};if(u==null)return{};const c=Ja(d),v={x:r,y:n},m=er(a),b=Qt(m),y=await l.getDimensions(u),p=m==="y",R=p?"top":"left",h=p?"bottom":"right",O=p?"clientHeight":"clientWidth",x=i.reference[b]+i.reference[m]-v[m]-i.floating[b],_=v[m]-i.reference[m],G=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let V=G?G[O]:0;(!V||!await(l.isElement==null?void 0:l.isElement(G)))&&(V=s.floating[O]||i.floating[b]);const z=x/2-_/2,B=V/2-y[b]/2-1,K=cn(c[R],B),$=cn(c[h],B),P=K,S=V-y[b]-$,w=V/2-y[b]/2+z,A=Ft(P,w,S),F=!o.arrow&&Ln(a)!=null&&w!==A&&i.reference[b]/2-(w<P?K:$)-y[b]/2<0,M=F?w<P?w-P:w-S:0;return{[m]:v[m]+M,data:{[m]:A,centerOffset:w-A-M,...F&&{alignmentOffset:M}},reset:F}}}),Ls=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:a,middlewareData:i,rects:l,initialPlacement:s,platform:o,elements:u}=t,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:v,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...p}=In(e,t);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const R=tn(a),h=fn(s),O=tn(s)===s,x=await(o.isRTL==null?void 0:o.isRTL(u.floating)),_=v||(O||!y?[Zn(s)]:xs(s)),G=b!=="none";!v&&G&&_.push(...js(s,y,b,x));const V=[s,..._],z=await Xa(t,p),B=[];let K=((n=i.flip)==null?void 0:n.overflows)||[];if(d&&B.push(z[R]),c){const w=Ts(a,l,x);B.push(z[w[0]],z[w[1]])}if(K=[...K,{placement:a,overflows:B}],!B.every(w=>w<=0)){var $,P;const w=((($=i.flip)==null?void 0:$.index)||0)+1,A=V[w];if(A)return{data:{index:w,overflows:K},reset:{placement:A}};let F=(P=K.filter(M=>M.overflows[0]<=0).sort((M,I)=>M.overflows[1]-I.overflows[1])[0])==null?void 0:P.placement;if(!F)switch(m){case"bestFit":{var S;const M=(S=K.filter(I=>{if(G){const N=fn(I.placement);return N===h||N==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(N=>N>0).reduce((N,U)=>N+U,0)]).sort((I,N)=>I[1]-N[1])[0])==null?void 0:S[0];M&&(F=M);break}case"initialPlacement":F=s;break}if(a!==F)return{reset:{placement:F}}}return{}}}};async function Ms(e,t){const{placement:r,platform:n,elements:a}=e,i=await(n.isRTL==null?void 0:n.isRTL(a.floating)),l=tn(r),s=Ln(r),o=fn(r)==="y",u=["left","top"].includes(l)?-1:1,d=i&&o?-1:1,c=In(t,e);let{mainAxis:v,crossAxis:m,alignmentAxis:b}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return s&&typeof b=="number"&&(m=s==="end"?b*-1:b),o?{x:m*d,y:v*u}:{x:v*u,y:m*d}}const Fs=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:a,y:i,placement:l,middlewareData:s}=t,o=await Ms(t,e);return l===((r=s.offset)==null?void 0:r.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:a+o.x,y:i+o.y,data:{...o,placement:l}}}}},Ds=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:a}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:p=>{let{x:R,y:h}=p;return{x:R,y:h}}},...o}=In(e,t),u={x:r,y:n},d=await Xa(t,o),c=fn(tn(a)),v=Ya(c);let m=u[v],b=u[c];if(i){const p=v==="y"?"top":"left",R=v==="y"?"bottom":"right",h=m+d[p],O=m-d[R];m=Ft(h,m,O)}if(l){const p=c==="y"?"top":"left",R=c==="y"?"bottom":"right",h=b+d[p],O=b-d[R];b=Ft(h,b,O)}const y=s.fn({...t,[v]:m,[c]:b});return{...y,data:{x:y.x-r,y:y.y-n,enabled:{[v]:i,[c]:l}}}}}};function ft(){return typeof window<"u"}function pn(e){return Za(e)?(e.nodeName||"").toLowerCase():"#document"}function Re(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Fe(e){var t;return(t=(Za(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Za(e){return ft()?e instanceof Node||e instanceof Re(e).Node:!1}function te(e){return ft()?e instanceof Element||e instanceof Re(e).Element:!1}function _e(e){return ft()?e instanceof HTMLElement||e instanceof Re(e).HTMLElement:!1}function et(e){return!ft()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Re(e).ShadowRoot}function Mn(e){const{overflow:t,overflowX:r,overflowY:n,display:a}=je(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(a)}function Vs(e){return["table","td","th"].includes(pn(e))}function mt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function nr(e){const t=gt(),r=te(e)?je(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function qs(e){let t=$e(e);for(;_e(t)&&!Be(t);){if(nr(t))return t;if(mt(t))return null;t=$e(t)}return null}function gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Be(e){return["html","body","#document"].includes(pn(e))}function je(e){return Re(e).getComputedStyle(e)}function vt(e){return te(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $e(e){if(pn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||et(e)&&e.host||Fe(e);return et(t)?t.host:t}function Qa(e){const t=$e(e);return Be(t)?e.ownerDocument?e.ownerDocument.body:e.body:_e(t)&&Mn(t)?t:Qa(t)}function Ye(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const a=Qa(e),i=a===((n=e.ownerDocument)==null?void 0:n.body),l=Re(a);if(i){const s=Vt(l);return t.concat(l,l.visualViewport||[],Mn(a)?a:[],s&&r?Ye(s):[])}return t.concat(a,Ye(a,[],r))}function Vt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ei(e){const t=je(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const a=_e(e),i=a?e.offsetWidth:r,l=a?e.offsetHeight:n,s=Xn(r)!==i||Xn(n)!==l;return s&&(r=i,n=l),{width:r,height:n,$:s}}function tr(e){return te(e)?e:e.contextElement}function un(e){const t=tr(e);if(!_e(t))return Me(1);const r=t.getBoundingClientRect(),{width:n,height:a,$:i}=ei(t);let l=(i?Xn(r.width):r.width)/n,s=(i?Xn(r.height):r.height)/a;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const Cs=Me(0);function ni(e){const t=Re(e);return!gt()||!t.visualViewport?Cs:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Bs(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Re(e)?!1:t}function rn(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const a=e.getBoundingClientRect(),i=tr(e);let l=Me(1);t&&(n?te(n)&&(l=un(n)):l=un(e));const s=Bs(i,r,n)?ni(i):Me(0);let o=(a.left+s.x)/l.x,u=(a.top+s.y)/l.y,d=a.width/l.x,c=a.height/l.y;if(i){const v=Re(i),m=n&&te(n)?Re(n):n;let b=v,y=Vt(b);for(;y&&n&&m!==b;){const p=un(y),R=y.getBoundingClientRect(),h=je(y),O=R.left+(y.clientLeft+parseFloat(h.paddingLeft))*p.x,x=R.top+(y.clientTop+parseFloat(h.paddingTop))*p.y;o*=p.x,u*=p.y,d*=p.x,c*=p.y,o+=O,u+=x,b=Re(y),y=Vt(b)}}return Qn({width:d,height:c,x:o,y:u})}function rr(e,t){const r=vt(e).scrollLeft;return t?t.left+r:rn(Fe(e)).left+r}function ti(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),a=n.left+t.scrollLeft-(r?0:rr(e,n)),i=n.top+t.scrollTop;return{x:a,y:i}}function Ks(e){let{elements:t,rect:r,offsetParent:n,strategy:a}=e;const i=a==="fixed",l=Fe(n),s=t?mt(t.floating):!1;if(n===l||s&&i)return r;let o={scrollLeft:0,scrollTop:0},u=Me(1);const d=Me(0),c=_e(n);if((c||!c&&!i)&&((pn(n)!=="body"||Mn(l))&&(o=vt(n)),_e(n))){const m=rn(n);u=un(n),d.x=m.x+n.clientLeft,d.y=m.y+n.clientTop}const v=l&&!c&&!i?ti(l,o,!0):Me(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-o.scrollLeft*u.x+d.x+v.x,y:r.y*u.y-o.scrollTop*u.y+d.y+v.y}}function $s(e){return Array.from(e.getClientRects())}function Gs(e){const t=Fe(e),r=vt(e),n=e.ownerDocument.body,a=en(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=en(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-r.scrollLeft+rr(e);const s=-r.scrollTop;return je(n).direction==="rtl"&&(l+=en(t.clientWidth,n.clientWidth)-a),{width:a,height:i,x:l,y:s}}function Us(e,t){const r=Re(e),n=Fe(e),a=r.visualViewport;let i=n.clientWidth,l=n.clientHeight,s=0,o=0;if(a){i=a.width,l=a.height;const u=gt();(!u||u&&t==="fixed")&&(s=a.offsetLeft,o=a.offsetTop)}return{width:i,height:l,x:s,y:o}}function Hs(e,t){const r=rn(e,!0,t==="fixed"),n=r.top+e.clientTop,a=r.left+e.clientLeft,i=_e(e)?un(e):Me(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,o=a*i.x,u=n*i.y;return{width:l,height:s,x:o,y:u}}function xr(e,t,r){let n;if(t==="viewport")n=Us(e,r);else if(t==="document")n=Gs(Fe(e));else if(te(t))n=Hs(t,r);else{const a=ni(e);n={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return Qn(n)}function ri(e,t){const r=$e(e);return r===t||!te(r)||Be(r)?!1:je(r).position==="fixed"||ri(r,t)}function zs(e,t){const r=t.get(e);if(r)return r;let n=Ye(e,[],!1).filter(s=>te(s)&&pn(s)!=="body"),a=null;const i=je(e).position==="fixed";let l=i?$e(e):e;for(;te(l)&&!Be(l);){const s=je(l),o=nr(l);!o&&s.position==="fixed"&&(a=null),(i?!o&&!a:!o&&s.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Mn(l)&&!o&&ri(e,l))?n=n.filter(d=>d!==l):a=s,l=$e(l)}return t.set(e,n),n}function Ws(e){let{element:t,boundary:r,rootBoundary:n,strategy:a}=e;const l=[...r==="clippingAncestors"?mt(t)?[]:zs(t,this._c):[].concat(r),n],s=l[0],o=l.reduce((u,d)=>{const c=xr(t,d,a);return u.top=en(c.top,u.top),u.right=cn(c.right,u.right),u.bottom=cn(c.bottom,u.bottom),u.left=en(c.left,u.left),u},xr(t,s,a));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function Ys(e){const{width:t,height:r}=ei(e);return{width:t,height:r}}function Js(e,t,r){const n=_e(t),a=Fe(t),i=r==="fixed",l=rn(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const o=Me(0);if(n||!n&&!i)if((pn(t)!=="body"||Mn(a))&&(s=vt(t)),n){const v=rn(t,!0,i,t);o.x=v.x+t.clientLeft,o.y=v.y+t.clientTop}else a&&(o.x=rr(a));const u=a&&!n&&!i?ti(a,s):Me(0),d=l.left+s.scrollLeft-o.x-u.x,c=l.top+s.scrollTop-o.y-u.y;return{x:d,y:c,width:l.width,height:l.height}}function Et(e){return je(e).position==="static"}function Pr(e,t){if(!_e(e)||je(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Fe(e)===r&&(r=r.ownerDocument.body),r}function ai(e,t){const r=Re(e);if(mt(e))return r;if(!_e(e)){let a=$e(e);for(;a&&!Be(a);){if(te(a)&&!Et(a))return a;a=$e(a)}return r}let n=Pr(e,t);for(;n&&Vs(n)&&Et(n);)n=Pr(n,t);return n&&Be(n)&&Et(n)&&!nr(n)?r:n||qs(e)||r}const Xs=async function(e){const t=this.getOffsetParent||ai,r=this.getDimensions,n=await r(e.floating);return{reference:Js(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Zs(e){return je(e).direction==="rtl"}const Qs={convertOffsetParentRelativeRectToViewportRelativeRect:Ks,getDocumentElement:Fe,getClippingRect:Ws,getOffsetParent:ai,getElementRects:Xs,getClientRects:$s,getDimensions:Ys,getScale:un,isElement:te,isRTL:Zs};function ii(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function eo(e,t){let r=null,n;const a=Fe(e);function i(){var s;clearTimeout(n),(s=r)==null||s.disconnect(),r=null}function l(s,o){s===void 0&&(s=!1),o===void 0&&(o=1),i();const u=e.getBoundingClientRect(),{left:d,top:c,width:v,height:m}=u;if(s||t(),!v||!m)return;const b=Bn(c),y=Bn(a.clientWidth-(d+v)),p=Bn(a.clientHeight-(c+m)),R=Bn(d),O={rootMargin:-b+"px "+-y+"px "+-p+"px "+-R+"px",threshold:en(0,cn(1,o))||1};let x=!0;function _(G){const V=G[0].intersectionRatio;if(V!==o){if(!x)return l();V?l(!1,V):n=setTimeout(()=>{l(!1,1e-7)},1e3)}V===1&&!ii(u,e.getBoundingClientRect())&&l(),x=!1}try{r=new IntersectionObserver(_,{...O,root:a.ownerDocument})}catch{r=new IntersectionObserver(_,O)}r.observe(e)}return l(!0),i}function jr(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:o=!1}=n,u=tr(e),d=a||i?[...u?Ye(u):[],...Ye(t)]:[];d.forEach(R=>{a&&R.addEventListener("scroll",r,{passive:!0}),i&&R.addEventListener("resize",r)});const c=u&&s?eo(u,r):null;let v=-1,m=null;l&&(m=new ResizeObserver(R=>{let[h]=R;h&&h.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var O;(O=m)==null||O.observe(t)})),r()}),u&&!o&&m.observe(u),m.observe(t));let b,y=o?rn(e):null;o&&p();function p(){const R=rn(e);y&&!ii(y,R)&&r(),y=R,b=requestAnimationFrame(p)}return r(),()=>{var R;d.forEach(h=>{a&&h.removeEventListener("scroll",r),i&&h.removeEventListener("resize",r)}),c==null||c(),(R=m)==null||R.disconnect(),m=null,o&&cancelAnimationFrame(b)}}const no=Fs,to=Ds,ro=Ls,Ar=Is,ao=(e,t,r)=>{const n=new Map,a={platform:Qs,...r},i={...a.platform,_c:n};return Ns(e,t,{...a,platform:i})};var Wn=typeof document<"u"?f.useLayoutEffect:f.useEffect;function nt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!nt(e[n],t[n]))return!1;return!0}if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,a[n]))return!1;for(n=r;n--!==0;){const i=a[n];if(!(i==="_owner"&&e.$$typeof)&&!nt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function li(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Nr(e,t){const r=li(e);return Math.round(t*r)/r}function Rt(e){const t=f.useRef(e);return Wn(()=>{t.current=e}),t}function io(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:a,elements:{reference:i,floating:l}={},transform:s=!0,whileElementsMounted:o,open:u}=e,[d,c]=f.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[v,m]=f.useState(n);nt(v,n)||m(n);const[b,y]=f.useState(null),[p,R]=f.useState(null),h=f.useCallback(I=>{I!==G.current&&(G.current=I,y(I))},[]),O=f.useCallback(I=>{I!==V.current&&(V.current=I,R(I))},[]),x=i||b,_=l||p,G=f.useRef(null),V=f.useRef(null),z=f.useRef(d),B=o!=null,K=Rt(o),$=Rt(a),P=Rt(u),S=f.useCallback(()=>{if(!G.current||!V.current)return;const I={placement:t,strategy:r,middleware:v};$.current&&(I.platform=$.current),ao(G.current,V.current,I).then(N=>{const U={...N,isPositioned:P.current!==!1};w.current&&!nt(z.current,U)&&(z.current=U,Ka.flushSync(()=>{c(U)}))})},[v,t,r,$,P]);Wn(()=>{u===!1&&z.current.isPositioned&&(z.current.isPositioned=!1,c(I=>({...I,isPositioned:!1})))},[u]);const w=f.useRef(!1);Wn(()=>(w.current=!0,()=>{w.current=!1}),[]),Wn(()=>{if(x&&(G.current=x),_&&(V.current=_),x&&_){if(K.current)return K.current(x,_,S);S()}},[x,_,S,K,B]);const A=f.useMemo(()=>({reference:G,floating:V,setReference:h,setFloating:O}),[h,O]),F=f.useMemo(()=>({reference:x,floating:_}),[x,_]),M=f.useMemo(()=>{const I={position:r,left:0,top:0};if(!F.floating)return I;const N=Nr(F.floating,d.x),U=Nr(F.floating,d.y);return s?{...I,transform:"translate("+N+"px, "+U+"px)",...li(F.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:N,top:U}},[r,s,F.floating,d.x,d.y]);return f.useMemo(()=>({...d,update:S,refs:A,elements:F,floatingStyles:M}),[d,S,A,F,M])}const lo=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:a}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?Ar({element:n.current,padding:a}).fn(r):{}:n?Ar({element:n,padding:a}).fn(r):{}}}},so=(e,t)=>({...no(e),options:[e,t]}),oo=(e,t)=>({...to(e),options:[e,t]}),uo=(e,t)=>({...ro(e),options:[e,t]}),co=(e,t)=>({...lo(e),options:[e,t]}),Ir=/(\w+)/g;function fo(e,t){const r=Array.isArray(e)?e:mo(e);for(const n of t){if(!n)continue;let a=n;for(let i=0;i<r.length;i++){const l=a[r[i]];l!==void 0&&(a=l)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function mo(e){const t=[];let r=Ir.exec(e);for(;r;){const[,n,a]=r;t.push(n||a),r=Ir.exec(e)}return t}const go=/{[^}]*}/g;function Fn(e,...t){const r=Wa(),n=r.translations||[],a=[...t,...Array.isArray(n)?n.map(l=>l[e]):[n[e]],r.locale[e]];return(l,s)=>{const o=fo(l,a);return s?o.replace(go,u=>{const d=u.substring(1,u.length-1);if(s[d]===void 0){const c=JSON.stringify(s);throw new Error(`Error translating key '${l}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${c}'`)}return s[d]}):o}}var vo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const po=f.forwardRef((e,t)=>{var{className:r,size:n="medium",title:a,transparent:i=!1,variant:l="neutral",id:s,"data-color":o}=e,u=vo(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:d}=X(),c=Je(),v=Fn("Loader");return E.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${c}`,ref:t,className:d("navds-loader",r,`navds-loader--${n}`,`navds-loader--${l}`,{"navds-loader--transparent":i}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":o??yo(l)},Ke(u,["children"]),{"data-variant":l}),E.createElement("title",{id:s??`loader-${c}`},a||v("title")),E.createElement("circle",{className:d("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),E.createElement("circle",{className:d("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function yo(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var bo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const si=f.forwardRef((e,t)=>{var{as:r="button",variant:n="primary",className:a,children:i,size:l="medium",loading:s=!1,disabled:o,icon:u,iconPosition:d="left",onKeyUp:c,"data-color":v}=e,m=bo(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:b}=X(),y=o||s?Ke(m,["href"]):m,p=R=>{R.key===" "&&!o&&!s&&R.currentTarget.click()};return E.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":v??ho(n),"data-variant":ko(n)},y,{ref:t,onKeyUp:ct(c,p),className:b(a,"navds-button",`navds-button--${n}`,`navds-button--${l}`,{"navds-button--loading":s,"navds-button--icon-only":!!u&&!i,"navds-button--disabled":o??s}),disabled:o??s?!0:void 0}),u&&d==="left"&&E.createElement("span",{className:b("navds-button__icon")},u),s&&E.createElement(po,{size:l}),i&&E.createElement(vn,{as:"span",size:l==="medium"?"medium":"small"},i),u&&d==="right"&&E.createElement("span",{className:b("navds-button__icon")},u))});function ho(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function ko(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var Eo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ro={error:Bl,warning:Sl,info:xl,success:El},wo=f.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:i="medium",fullWidth:l=!1,contentMaxWidth:s=!0,inline:o=!1,closeButton:u=!1,onClose:d}=e,c=Eo(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:v}=X(),m=Fn("Alert"),b=Ro[a];return E.createElement("div",Object.assign({},c,{"data-color":Oo(a),"data-variant":a,ref:t,className:v(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${i}`,{"navds-alert--full-width":l,"navds-alert--inline":o,"navds-alert--close-button":u})}),E.createElement(b,{title:m(a),className:v("navds-alert__icon")}),E.createElement(Jt,{as:"div",size:i,className:v("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},r),u&&!o&&E.createElement("div",{className:v("navds-alert__button-wrapper")},E.createElement(si,{className:v("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:E.createElement(ql,{title:["error","warning"].includes(a)?m("closeAlert"):m("closeMessage")})})))});function Oo(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function _o(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function So(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:r,version:n}=t;return r+"/"+n}).join(" "):navigator.userAgent}function To(){return/apple/i.test(navigator.vendor)}function xo(){return _o().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Po(){return So().includes("jsdom/")}const jo="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Lr(e){let t=e.activeElement;for(;((r=t)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;t=t.shadowRoot.activeElement}return t}function An(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&et(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function on(e){return"composedPath"in e?e.composedPath()[0]:e.target}function wt(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const r=e;return r.target!=null&&t.contains(r.target)}function Ao(e){return e.matches("html,body")}function Ze(e){return(e==null?void 0:e.ownerDocument)||document}function No(e){return _e(e)&&e.matches(jo)}function Io(e){if(!e||Po())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Ot(e,t,r){r===void 0&&(r=!0);let n=e.filter(i=>{var l;return i.parentId===t&&((l=i.context)==null?void 0:l.open)}),a=n;for(;a.length;)a=r?e.filter(i=>{var l;return(l=a)==null?void 0:l.some(s=>{var o;return i.parentId===s.id&&((o=i.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function Lo(e){return"nativeEvent"in e}function qt(e,t){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var mn=typeof document<"u"?f.useLayoutEffect:f.useEffect;const Mo={...qa};function Kn(e){const t=f.useRef(e);return mn(()=>{t.current=e}),t}const Fo=Mo.useInsertionEffect,Do=Fo||(e=>e());function Ce(e){const t=f.useRef(()=>{});return Do(()=>{t.current=e}),f.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current==null?void 0:t.current(...n)},[])}const Vo="data-floating-ui-focusable",Mr="active",Fr="selected",qo={...qa};let Dr=!1,Co=0;const Vr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Co++;function Bo(){const[e,t]=f.useState(()=>Dr?Vr():void 0);return mn(()=>{e==null&&t(Vr())},[]),f.useEffect(()=>{Dr=!0},[]),e}const Ko=qo.useId,$o=Ko||Bo;function Go(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(a=>a(r))},on(t,r){e.has(t)||e.set(t,new Set),e.get(t).add(r)},off(t,r){var n;(n=e.get(t))==null||n.delete(r)}}}const Uo=f.createContext(null),Ho=f.createContext(null),oi=()=>{var e;return((e=f.useContext(Uo))==null?void 0:e.id)||null},ar=()=>f.useContext(Ho);function ir(e){return"data-floating-ui-"+e}function xe(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const qr=ir("safe-polygon");function _t(e,t,r){if(r&&!qt(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n==null?void 0:n[t]}return e==null?void 0:e[t]}function St(e){return typeof e=="function"?e():e}function zo(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,dataRef:a,events:i,elements:l}=e,{enabled:s=!0,delay:o=0,handleClose:u=null,mouseOnly:d=!1,restMs:c=0,move:v=!0}=t,m=ar(),b=oi(),y=Kn(u),p=Kn(o),R=Kn(r),h=Kn(c),O=f.useRef(),x=f.useRef(-1),_=f.useRef(),G=f.useRef(-1),V=f.useRef(!0),z=f.useRef(!1),B=f.useRef(()=>{}),K=f.useRef(!1),$=f.useCallback(()=>{var M;const I=(M=a.current.openEvent)==null?void 0:M.type;return(I==null?void 0:I.includes("mouse"))&&I!=="mousedown"},[a]);f.useEffect(()=>{if(!s)return;function M(I){let{open:N}=I;N||(xe(x),xe(G),V.current=!0,K.current=!1)}return i.on("openchange",M),()=>{i.off("openchange",M)}},[s,i]),f.useEffect(()=>{if(!s||!y.current||!r)return;function M(N){$()&&n(!1,N,"hover")}const I=Ze(l.floating).documentElement;return I.addEventListener("mouseleave",M),()=>{I.removeEventListener("mouseleave",M)}},[l.floating,r,n,s,y,$]);const P=f.useCallback(function(M,I,N){I===void 0&&(I=!0),N===void 0&&(N="hover");const U=_t(p.current,"close",O.current);U&&!_.current?(xe(x),x.current=window.setTimeout(()=>n(!1,M,N),U)):I&&(xe(x),n(!1,M,N))},[p,n]),S=Ce(()=>{B.current(),_.current=void 0}),w=Ce(()=>{if(z.current){const M=Ze(l.floating).body;M.style.pointerEvents="",M.removeAttribute(qr),z.current=!1}}),A=Ce(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);f.useEffect(()=>{if(!s)return;function M(Y){if(xe(x),V.current=!1,d&&!qt(O.current)||St(h.current)>0&&!_t(p.current,"open"))return;const J=_t(p.current,"open",O.current);J?x.current=window.setTimeout(()=>{R.current||n(!0,Y,"hover")},J):r||n(!0,Y,"hover")}function I(Y){if(A()){w();return}B.current();const J=Ze(l.floating);if(xe(G),K.current=!1,y.current&&a.current.floatingContext){r||xe(x),_.current=y.current({...a.current.floatingContext,tree:m,x:Y.clientX,y:Y.clientY,onClose(){w(),S(),A()||P(Y,!0,"safe-polygon")}});const ve=_.current;J.addEventListener("mousemove",ve),B.current=()=>{J.removeEventListener("mousemove",ve)};return}(O.current==="touch"?!An(l.floating,Y.relatedTarget):!0)&&P(Y)}function N(Y){A()||a.current.floatingContext&&(y.current==null||y.current({...a.current.floatingContext,tree:m,x:Y.clientX,y:Y.clientY,onClose(){w(),S(),A()||P(Y)}})(Y))}function U(){xe(x)}function W(Y){A()||P(Y,!1)}if(te(l.domReference)){const Y=l.domReference,J=l.floating;return r&&Y.addEventListener("mouseleave",N),v&&Y.addEventListener("mousemove",M,{once:!0}),Y.addEventListener("mouseenter",M),Y.addEventListener("mouseleave",I),J&&(J.addEventListener("mouseleave",N),J.addEventListener("mouseenter",U),J.addEventListener("mouseleave",W)),()=>{r&&Y.removeEventListener("mouseleave",N),v&&Y.removeEventListener("mousemove",M),Y.removeEventListener("mouseenter",M),Y.removeEventListener("mouseleave",I),J&&(J.removeEventListener("mouseleave",N),J.removeEventListener("mouseenter",U),J.removeEventListener("mouseleave",W))}}},[l,s,e,d,v,P,S,w,n,r,R,m,p,y,a,A,h]),mn(()=>{var M;if(s&&r&&(M=y.current)!=null&&M.__options.blockPointerEvents&&$()){z.current=!0;const N=l.floating;if(te(l.domReference)&&N){var I;const U=Ze(l.floating).body;U.setAttribute(qr,"");const W=l.domReference,Y=m==null||(I=m.nodesRef.current.find(J=>J.id===b))==null||(I=I.context)==null?void 0:I.elements.floating;return Y&&(Y.style.pointerEvents=""),U.style.pointerEvents="none",W.style.pointerEvents="auto",N.style.pointerEvents="auto",()=>{U.style.pointerEvents="",W.style.pointerEvents="",N.style.pointerEvents=""}}}},[s,r,b,l,m,y,$]),mn(()=>{r||(O.current=void 0,K.current=!1,S(),w())},[r,S,w]),f.useEffect(()=>()=>{S(),xe(x),xe(G),w()},[s,l.domReference,S,w]);const F=f.useMemo(()=>{function M(I){O.current=I.pointerType}return{onPointerDown:M,onPointerEnter:M,onMouseMove(I){const{nativeEvent:N}=I;function U(){!V.current&&!R.current&&n(!0,N,"hover")}d&&!qt(O.current)||r||St(h.current)===0||K.current&&I.movementX**2+I.movementY**2<2||(xe(G),O.current==="touch"?U():(K.current=!0,G.current=window.setTimeout(U,St(h.current))))}}},[d,n,r,R,h]);return f.useMemo(()=>s?{reference:F}:{},[s,F])}function Tt(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&et(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Wo(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Yo={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Jo={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Cr=e=>{var t,r;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(r=e==null?void 0:e.outsidePress)!=null?r:!0}};function Xo(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,elements:a,dataRef:i}=e,{enabled:l=!0,escapeKey:s=!0,outsidePress:o=!0,outsidePressEvent:u="pointerdown",referencePress:d=!1,referencePressEvent:c="pointerdown",ancestorScroll:v=!1,bubbles:m,capture:b}=t,y=ar(),p=Ce(typeof o=="function"?o:()=>!1),R=typeof o=="function"?p:o,h=f.useRef(!1),O=f.useRef(!1),{escapeKey:x,outsidePress:_}=Cr(m),{escapeKey:G,outsidePress:V}=Cr(b),z=f.useRef(!1),B=Ce(A=>{var F;if(!r||!l||!s||A.key!=="Escape"||z.current)return;const M=(F=i.current.floatingContext)==null?void 0:F.nodeId,I=y?Ot(y.nodesRef.current,M):[];if(!x&&(A.stopPropagation(),I.length>0)){let N=!0;if(I.forEach(U=>{var W;if((W=U.context)!=null&&W.open&&!U.context.dataRef.current.__escapeKeyBubbles){N=!1;return}}),!N)return}n(!1,Lo(A)?A.nativeEvent:A,"escape-key")}),K=Ce(A=>{var F;const M=()=>{var I;B(A),(I=on(A))==null||I.removeEventListener("keydown",M)};(F=on(A))==null||F.addEventListener("keydown",M)}),$=Ce(A=>{var F;const M=h.current;h.current=!1;const I=O.current;if(O.current=!1,u==="click"&&I||M||typeof R=="function"&&!R(A))return;const N=on(A),U="["+ir("inert")+"]",W=Ze(a.floating).querySelectorAll(U);let Y=te(N)?N:null;for(;Y&&!Be(Y);){const de=$e(Y);if(Be(de)||!te(de))break;Y=de}if(W.length&&te(N)&&!Ao(N)&&!An(N,a.floating)&&Array.from(W).every(de=>!An(Y,de)))return;if(_e(N)&&w){const de=Be(N),ie=je(N),Z=/auto|scroll/,re=de||Z.test(ie.overflowX),pe=de||Z.test(ie.overflowY),be=re&&N.clientWidth>0&&N.scrollWidth>N.clientWidth,he=pe&&N.clientHeight>0&&N.scrollHeight>N.clientHeight,Xe=ie.direction==="rtl",De=he&&(Xe?A.offsetX<=N.offsetWidth-N.clientWidth:A.offsetX>N.clientWidth),Ve=be&&A.offsetY>N.clientHeight;if(De||Ve)return}const J=(F=i.current.floatingContext)==null?void 0:F.nodeId,Ae=y&&Ot(y.nodesRef.current,J).some(de=>{var ie;return wt(A,(ie=de.context)==null?void 0:ie.elements.floating)});if(wt(A,a.floating)||wt(A,a.domReference)||Ae)return;const ve=y?Ot(y.nodesRef.current,J):[];if(ve.length>0){let de=!0;if(ve.forEach(ie=>{var Z;if((Z=ie.context)!=null&&Z.open&&!ie.context.dataRef.current.__outsidePressBubbles){de=!1;return}}),!de)return}n(!1,A,"outside-press")}),P=Ce(A=>{var F;const M=()=>{var I;$(A),(I=on(A))==null||I.removeEventListener(u,M)};(F=on(A))==null||F.addEventListener(u,M)});f.useEffect(()=>{if(!r||!l)return;i.current.__escapeKeyBubbles=x,i.current.__outsidePressBubbles=_;let A=-1;function F(W){n(!1,W,"ancestor-scroll")}function M(){window.clearTimeout(A),z.current=!0}function I(){A=window.setTimeout(()=>{z.current=!1},gt()?5:0)}const N=Ze(a.floating);s&&(N.addEventListener("keydown",G?K:B,G),N.addEventListener("compositionstart",M),N.addEventListener("compositionend",I)),R&&N.addEventListener(u,V?P:$,V);let U=[];return v&&(te(a.domReference)&&(U=Ye(a.domReference)),te(a.floating)&&(U=U.concat(Ye(a.floating))),!te(a.reference)&&a.reference&&a.reference.contextElement&&(U=U.concat(Ye(a.reference.contextElement)))),U=U.filter(W=>{var Y;return W!==((Y=N.defaultView)==null?void 0:Y.visualViewport)}),U.forEach(W=>{W.addEventListener("scroll",F,{passive:!0})}),()=>{s&&(N.removeEventListener("keydown",G?K:B,G),N.removeEventListener("compositionstart",M),N.removeEventListener("compositionend",I)),R&&N.removeEventListener(u,V?P:$,V),U.forEach(W=>{W.removeEventListener("scroll",F)}),window.clearTimeout(A)}},[i,a,s,R,u,r,n,v,l,x,_,B,G,K,$,V,P]),f.useEffect(()=>{h.current=!1},[R,u]);const S=f.useMemo(()=>({onKeyDown:B,...d&&{[Yo[c]]:A=>{n(!1,A.nativeEvent,"reference-press")},...c!=="click"&&{onClick(A){n(!1,A.nativeEvent,"reference-press")}}}}),[B,n,d,c]),w=f.useMemo(()=>({onKeyDown:B,onMouseDown(){O.current=!0},onMouseUp(){O.current=!0},[Jo[u]]:()=>{h.current=!0}}),[B,u]);return f.useMemo(()=>l?{reference:S,floating:w}:{},[l,S,w])}function Zo(e){const{open:t=!1,onOpenChange:r,elements:n}=e,a=$o(),i=f.useRef({}),[l]=f.useState(()=>Go()),s=oi()!=null,[o,u]=f.useState(n.reference),d=Ce((m,b,y)=>{i.current.openEvent=m?b:void 0,l.emit("openchange",{open:m,event:b,reason:y,nested:s}),r==null||r(m,b,y)}),c=f.useMemo(()=>({setPositionReference:u}),[]),v=f.useMemo(()=>({reference:o||n.reference||null,floating:n.floating||null,domReference:n.reference}),[o,n.reference,n.floating]);return f.useMemo(()=>({dataRef:i,open:t,onOpenChange:d,elements:v,events:l,floatingId:a,refs:c}),[t,d,v,l,a,c])}function Qo(e){e===void 0&&(e={});const{nodeId:t}=e,r=Zo({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,a=n.elements,[i,l]=f.useState(null),[s,o]=f.useState(null),d=(a==null?void 0:a.domReference)||i,c=f.useRef(null),v=ar();mn(()=>{d&&(c.current=d)},[d]);const m=io({...e,elements:{...a,...s&&{reference:s}}}),b=f.useCallback(O=>{const x=te(O)?{getBoundingClientRect:()=>O.getBoundingClientRect(),getClientRects:()=>O.getClientRects(),contextElement:O}:O;o(x),m.refs.setReference(x)},[m.refs]),y=f.useCallback(O=>{(te(O)||O===null)&&(c.current=O,l(O)),(te(m.refs.reference.current)||m.refs.reference.current===null||O!==null&&!te(O))&&m.refs.setReference(O)},[m.refs]),p=f.useMemo(()=>({...m.refs,setReference:y,setPositionReference:b,domReference:c}),[m.refs,y,b]),R=f.useMemo(()=>({...m.elements,domReference:d}),[m.elements,d]),h=f.useMemo(()=>({...m,...n,refs:p,elements:R,nodeId:t}),[m,p,R,t,n]);return mn(()=>{n.dataRef.current.floatingContext=h;const O=v==null?void 0:v.nodesRef.current.find(x=>x.id===t);O&&(O.context=h)}),f.useMemo(()=>({...m,context:h,refs:p,elements:R}),[m,p,R,h])}function xt(){return xo()&&To()}function eu(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,events:a,dataRef:i,elements:l}=e,{enabled:s=!0,visibleOnly:o=!0}=t,u=f.useRef(!1),d=f.useRef(-1),c=f.useRef(!0);f.useEffect(()=>{if(!s)return;const m=Re(l.domReference);function b(){!r&&_e(l.domReference)&&l.domReference===Lr(Ze(l.domReference))&&(u.current=!0)}function y(){c.current=!0}function p(){c.current=!1}return m.addEventListener("blur",b),xt()&&(m.addEventListener("keydown",y,!0),m.addEventListener("pointerdown",p,!0)),()=>{m.removeEventListener("blur",b),xt()&&(m.removeEventListener("keydown",y,!0),m.removeEventListener("pointerdown",p,!0))}},[l.domReference,r,s]),f.useEffect(()=>{if(!s)return;function m(b){let{reason:y}=b;(y==="reference-press"||y==="escape-key")&&(u.current=!0)}return a.on("openchange",m),()=>{a.off("openchange",m)}},[a,s]),f.useEffect(()=>()=>{xe(d)},[]);const v=f.useMemo(()=>({onMouseLeave(){u.current=!1},onFocus(m){if(u.current)return;const b=on(m.nativeEvent);if(o&&te(b)){if(xt()&&!m.relatedTarget){if(!c.current&&!No(b))return}else if(!Io(b))return}n(!0,m.nativeEvent,"focus")},onBlur(m){u.current=!1;const b=m.relatedTarget,y=m.nativeEvent,p=te(b)&&b.hasAttribute(ir("focus-guard"))&&b.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var R;const h=Lr(l.domReference?l.domReference.ownerDocument:document);!b&&h===l.domReference||An((R=i.current.floatingContext)==null?void 0:R.refs.floating.current,h)||An(l.domReference,h)||p||n(!1,y,"focus")})}}),[i,l.domReference,n,o]);return f.useMemo(()=>s?{reference:v}:{},[s,v])}function Pt(e,t,r){const n=new Map,a=r==="item";let i=e;if(a&&e){const{[Mr]:l,[Fr]:s,...o}=e;i=o}return{...r==="floating"&&{tabIndex:-1,[Vo]:""},...i,...t.map(l=>{const s=l?l[r]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((l,s)=>(s&&Object.entries(s).forEach(o=>{let[u,d]=o;if(!(a&&[Mr,Fr].includes(u)))if(u.indexOf("on")===0){if(n.has(u)||n.set(u,[]),typeof d=="function"){var c;(c=n.get(u))==null||c.push(d),l[u]=function(){for(var v,m=arguments.length,b=new Array(m),y=0;y<m;y++)b[y]=arguments[y];return(v=n.get(u))==null?void 0:v.map(p=>p(...b)).find(p=>p!==void 0)}}}else l[u]=d}),l),{})}}function nu(e){e===void 0&&(e=[]);const t=e.map(s=>s==null?void 0:s.reference),r=e.map(s=>s==null?void 0:s.floating),n=e.map(s=>s==null?void 0:s.item),a=f.useCallback(s=>Pt(s,e,"reference"),t),i=f.useCallback(s=>Pt(s,e,"floating"),r),l=f.useCallback(s=>Pt(s,e,"item"),n);return f.useMemo(()=>({getReferenceProps:a,getFloatingProps:i,getItemProps:l}),[a,i,l])}function tu(e,t,r){r===void 0&&(r=!0);let n=e.filter(i=>{var l;return i.parentId===t&&((l=i.context)==null?void 0:l.open)}),a=n;for(;a.length;)a=r?e.filter(i=>{var l;return(l=a)==null?void 0:l.some(s=>{var o;return i.parentId===s.id&&((o=i.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function Br(e,t){const[r,n]=e;let a=!1;const i=t.length;for(let l=0,s=i-1;l<i;s=l++){const[o,u]=t[l]||[0,0],[d,c]=t[s]||[0,0];u>=n!=c>=n&&r<=(d-o)*(n-u)/(c-u)+o&&(a=!a)}return a}function ru(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function au(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:r=!1,requireIntent:n=!0}=e;let a,i=!1,l=null,s=null,o=performance.now();function u(c,v){const m=performance.now(),b=m-o;if(l===null||s===null||b===0)return l=c,s=v,o=m,null;const y=c-l,p=v-s,h=Math.sqrt(y*y+p*p)/b;return l=c,s=v,o=m,h}const d=c=>{let{x:v,y:m,placement:b,elements:y,onClose:p,nodeId:R,tree:h}=c;return function(x){function _(){clearTimeout(a),p()}if(clearTimeout(a),!y.domReference||!y.floating||b==null||v==null||m==null)return;const{clientX:G,clientY:V}=x,z=[G,V],B=Wo(x),K=x.type==="mouseleave",$=Tt(y.floating,B),P=Tt(y.domReference,B),S=y.domReference.getBoundingClientRect(),w=y.floating.getBoundingClientRect(),A=b.split("-")[0],F=v>w.right-w.width/2,M=m>w.bottom-w.height/2,I=ru(z,S),N=w.width>S.width,U=w.height>S.height,W=(N?S:w).left,Y=(N?S:w).right,J=(U?S:w).top,Ae=(U?S:w).bottom;if($&&(i=!0,!K))return;if(P&&(i=!1),P&&!K){i=!0;return}if(K&&te(x.relatedTarget)&&Tt(y.floating,x.relatedTarget)||h&&tu(h.nodesRef.current,R).some(ie=>{let{context:Z}=ie;return Z==null?void 0:Z.open}))return;if(A==="top"&&m>=S.bottom-1||A==="bottom"&&m<=S.top+1||A==="left"&&v>=S.right-1||A==="right"&&v<=S.left+1)return _();let ve=[];switch(A){case"top":ve=[[W,S.top+1],[W,w.bottom-1],[Y,w.bottom-1],[Y,S.top+1]];break;case"bottom":ve=[[W,w.top+1],[W,S.bottom-1],[Y,S.bottom-1],[Y,w.top+1]];break;case"left":ve=[[w.right-1,Ae],[w.right-1,J],[S.left+1,J],[S.left+1,Ae]];break;case"right":ve=[[S.right-1,Ae],[S.right-1,J],[w.left+1,J],[w.left+1,Ae]];break}function de(ie){let[Z,re]=ie;switch(A){case"top":{const pe=[N?Z+t/2:F?Z+t*4:Z-t*4,re+t+1],be=[N?Z-t/2:F?Z+t*4:Z-t*4,re+t+1],he=[[w.left,F||N?w.bottom-t:w.top],[w.right,F?N?w.bottom-t:w.top:w.bottom-t]];return[pe,be,...he]}case"bottom":{const pe=[N?Z+t/2:F?Z+t*4:Z-t*4,re-t],be=[N?Z-t/2:F?Z+t*4:Z-t*4,re-t],he=[[w.left,F||N?w.top+t:w.bottom],[w.right,F?N?w.top+t:w.bottom:w.top+t]];return[pe,be,...he]}case"left":{const pe=[Z+t+1,U?re+t/2:M?re+t*4:re-t*4],be=[Z+t+1,U?re-t/2:M?re+t*4:re-t*4];return[...[[M||U?w.right-t:w.left,w.top],[M?U?w.right-t:w.left:w.right-t,w.bottom]],pe,be]}case"right":{const pe=[Z-t,U?re+t/2:M?re+t*4:re-t*4],be=[Z-t,U?re-t/2:M?re+t*4:re-t*4],he=[[M||U?w.left+t:w.right,w.top],[M?U?w.left+t:w.right:w.left+t,w.bottom]];return[pe,be,...he]}}}if(!Br([G,V],ve)){if(i&&!I)return _();if(!K&&n){const ie=u(x.clientX,x.clientY);if(ie!==null&&ie<.1)return _()}Br([G,V],de([v,m]))?!i&&n&&(a=window.setTimeout(_,40)):_()}}};return d.__options={blockPointerEvents:r},d}const ui=()=>{const{cn:e}=X();return E.createElement(za,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},iu=()=>{const{cn:e}=X();return E.createElement(za,{title:Fn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},tt=f.createContext(null),lr=(e,t)=>{var r,n,a;const{size:i,error:l,errorId:s}=e,o=f.useContext(tt),u=Je(),d=(r=e.id)!==null&&r!==void 0?r:`${t}-${u}`,c=s??`${t}-error-${u}`,v=`${t}-description-${u}`,m=(o==null?void 0:o.disabled)||e.disabled,b=((o==null?void 0:o.readOnly)||e.readOnly)&&!m||void 0,y=!m&&!b&&!!(l||o!=null&&o.error),p=!m&&!b&&!!l&&typeof l!="boolean",R=Object.assign({},y?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:p,hasError:y,errorId:c,inputDescriptionId:v,size:(n=i??(o==null?void 0:o.size))!==null&&n!==void 0?n:"medium",readOnly:b,inputProps:Object.assign(Object.assign({id:d},R),{"aria-describedby":Nn(e["aria-describedby"],{[v]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[c]:p,[(a=o==null?void 0:o.errorId)!==null&&a!==void 0?a:""]:y&&!!(o!=null&&o.error)})||void 0,disabled:m})}};function ge(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,i])=>[`--__${e}c-${t}-${r}-${a}`,i])):{}}const lu={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Kr=(e,t,r,n,a,i)=>t.split(" ").map((l,s,o)=>{var u;if(e==="margin-inline"&&l==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&l==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&l==="auto")return"auto";let d=`var(--${i}-${r}-${l})`;if(n.includes(l))d=l==="px"?"1px":l;else if(l.startsWith("space"))d=`var(--${i}-${l})`;else{const c=`--${i}-spacing-${l}`;d=`var(${(u=lu[c])!==null&&u!==void 0?u:c})`}return a?l==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function Pe(e,t,r,n,a,i=!1,l=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${t}-${r}-xs`]:Kr(r,a,n,l,i,e)};const s={};return Object.entries(a).forEach(([o,u])=>{s[`--__${e}c-${t}-${r}-${o}`]=Kr(r,u,n,l,i,e)}),s}const su=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],ou=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:a,margin:i,marginInline:l,marginBlock:s,width:o,minWidth:u,maxWidth:d,height:c,minHeight:v,maxHeight:m,position:b,inset:y,top:p,right:R,left:h,bottom:O,overflow:x,overflowX:_,overflowY:G,flexBasis:V,flexGrow:z,flexShrink:B,gridColumn:K})=>{const $=ut(!1),{cn:P}=X(),S=$?"ax":"a",w=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Pe(S,"r","p","spacing",r)),Pe(S,"r","pi","spacing",n)),Pe(S,"r","pb","spacing",a)),Pe(S,"r","m","spacing",i)),Pe(S,"r","mi","spacing",l)),Pe(S,"r","mb","spacing",s)),ge(S,"r","w",o)),ge(S,"r","minw",u)),ge(S,"r","maxw",d)),ge(S,"r","h",c)),ge(S,"r","minh",v)),ge(S,"r","maxh",m)),ge(S,"r","position",b)),Pe(S,"r","inset","spacing",y)),Pe(S,"r","top","spacing",p)),Pe(S,"r","right","spacing",R)),Pe(S,"r","bottom","spacing",O)),Pe(S,"r","left","spacing",h)),ge(S,"r","overflow",x)),ge(S,"r","overflowx",_)),ge(S,"r","overflowy",G)),ge(S,"r","flex-basis",V)),ge(S,"r","flex-grow",z)),ge(S,"r","flex-shrink",B)),ge(S,"r","grid-column",K));return E.createElement(dt,{className:P({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":i,"navds-r-mi":l,"navds-r-mb":s,"navds-r-w":o,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":c,"navds-r-minh":v,"navds-r-maxh":m,"navds-r-position":b,"navds-r-inset":y,"navds-r-top":p,"navds-r-right":R,"navds-r-bottom":O,"navds-r-left":h,"navds-r-overflow":x,"navds-r-overflowx":_,"navds-r-overflowy":G,"navds-r-flex-basis":V,"navds-r-flex-grow":z,"navds-r-flex-shrink":B,"navds-r-grid-column":K}),style:w},e)};var uu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const di=f.forwardRef((e,t)=>{var{children:r,className:n,as:a="div",align:i,justify:l,wrap:s=!0,gap:o,style:u,direction:d="row",asChild:c}=e,v=uu(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const b=ut(!1)?"ax":"a",{cn:y}=X(),p=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),Pe(b,"stack","gap","spacing",o)),ge(b,"stack","direction",d)),ge(b,"stack","align",i)),ge(b,"stack","justify",l)),R=c?dt:a;return E.createElement(ou,Object.assign({},v),E.createElement(R,Object.assign({},Ke(v,su),{ref:t,style:p,className:y("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":o,"navds-stack-align":i,"navds-stack-justify":l,"navds-stack-direction":d,"navds-stack-wrap":s})}),r))});var du=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const nn=f.forwardRef((e,t)=>{var{as:r="div"}=e,n=du(e,["as"]);return E.createElement(di,Object.assign({as:r},n,{ref:t,direction:"row"}))});var cu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ge=f.forwardRef((e,t)=>{var{as:r="div"}=e,n=cu(e,["as"]);return E.createElement(di,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))});var fu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const mu=f.forwardRef((e,t)=>{var{as:r="a",className:n,underline:a=!0,variant:i,inlineText:l=!1,"data-color":s}=e,o=fu(e,["as","className","underline","variant","inlineText","data-color"]);const u=ut(!1),{cn:d}=X();let c;return u?c=i:c=i??"action",E.createElement(r,Object.assign({"data-color":s??gu(c),"data-variant":c},o,{ref:t,className:d("navds-link",n,{[`navds-link--${c}`]:c,"navds-link--remove-underline":!a,"navds-link--inline-text":l})}))});function gu(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var vu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const pu=f.forwardRef((e,t)=>{var{className:r,header:n,children:a,open:i,defaultOpen:l=!1,onClick:s,size:o="medium",onOpenChange:u}=e,d=vu(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:c}=X(),[v,m]=Xt({defaultValue:l,value:i,onChange:u}),b=o==="small"?"small":"medium";return E.createElement("div",{className:c("navds-read-more",`navds-read-more--${o}`,r,{"navds-read-more--open":v}),"data-volume":"low"},E.createElement("button",Object.assign({},d,{ref:t,type:"button",className:c("navds-read-more__button","navds-body-short",{"navds-body-short--small":o==="small"}),onClick:ct(s,()=>m(y=>!y)),"aria-expanded":v,"data-state":v?"open":"closed"}),E.createElement(Zt,{className:c("navds-read-more__expand-icon"),"aria-hidden":!0}),E.createElement("span",null,n)),E.createElement(Jt,{as:"div","aria-hidden":!v,className:c("navds-read-more__content",{"navds-read-more__content--closed":!v}),size:b,"data-state":v?"open":"closed"},a))});var yu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const bu=f.forwardRef((e,t)=>{var{className:r}=e,n=yu(e,["className"]);const{cn:a}=X();return E.createElement("tbody",Object.assign({},n,{ref:t,className:a("navds-table__body",r)}))});var hu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ci=f.forwardRef((e,t)=>{var{className:r,children:n,align:a,textSize:i}=e,l=hu(e,["className","children","align","textSize"]);const{cn:s}=X();return E.createElement("th",Object.assign({ref:t,className:s("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":i==="small"})},l),n)}),fi=f.createContext(null);var ku=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Eu=f.forwardRef((e,t)=>{var r,n,a,i,{className:l,children:s,sortable:o=!1,sortKey:u}=e,d=ku(e,["className","children","sortable","sortKey"]);const c=f.useContext(fi),{cn:v}=X();return o&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),E.createElement(ci,Object.assign({scope:"col",ref:t,className:v(l),"aria-sort":o?((r=c==null?void 0:c.sort)===null||r===void 0?void 0:r.orderBy)===u?(n=c==null?void 0:c.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),o?E.createElement("button",{type:"button",className:v("navds-table__sort-button"),onClick:o&&u?()=>{var m;return(m=c==null?void 0:c.onSortChange)===null||m===void 0?void 0:m.call(c,u)}:void 0},s,((a=c==null?void 0:c.sort)===null||a===void 0?void 0:a.orderBy)===u?((i=c==null?void 0:c.sort)===null||i===void 0?void 0:i.direction)==="descending"?E.createElement(Ml,{"aria-hidden":!0}):E.createElement(Dl,{"aria-hidden":!0}):E.createElement(hl,{"aria-hidden":!0})):s)});var Ru=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const mi=f.forwardRef((e,t)=>{var{className:r,children:n="",align:a,textSize:i}=e,l=Ru(e,["className","children","align","textSize"]);const{cn:s}=X();return E.createElement(ye,Object.assign({as:"td",ref:t,className:s("navds-table__data-cell",r,{[`navds-table__data-cell--align-${a}`]:a}),size:i},l),n)});var wu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ou=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function _u(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function $r(e){return typeof e=="string"&&e[e.length-1]==="%"&&_u(e.substring(0,e.length-1))}function jt(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function Su(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const Tu=e=>{var{children:t,className:r,innerClassName:n,duration:a=250,easing:i="ease",height:l}=e,s=wu(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=X(),u=f.useRef(l),d=f.useRef(null),c=f.useRef(),v=f.useRef(),m=f.useRef(l),b=f.useRef("visible"),y=Ou?0:a;typeof m.current=="number"?(typeof l!="string"&&(m.current=l<0?0:l),b.current="hidden"):$r(m.current)&&(m.current=l==="0%"?0:l,b.current="hidden");const[p,R]=f.useState(m.current),[h,O]=f.useState(b.current),[x,_]=f.useState(!1);f.useEffect(()=>{jt(d.current,m.current)},[]),f.useEffect(()=>{if(l!==u.current&&d.current){Su(d.current,u.current),d.current.style.overflow="hidden";const B=d.current.offsetHeight;d.current.style.overflow="";const K=y;let $,P,S="hidden",w;const A=u.current==="auto";typeof l=="number"?($=l<0?0:l,P=$):$r(l)?($=l==="0%"?0:l,P=$):($=B,P="auto",S=void 0),A&&(P=$,$=B),R($),O("hidden"),_(!A),clearTimeout(v.current),clearTimeout(c.current),A?(w=!0,v.current=setTimeout(()=>{R(P),O(S),_(w)},50),c.current=setTimeout(()=>{_(!1),jt(d.current,P)},K)):v.current=setTimeout(()=>{R(P),O(S),_(!1),l!=="auto"&&jt(d.current,$)},K)}return u.current=l,()=>{clearTimeout(v.current),clearTimeout(c.current)}},[l]);const G={height:p,overflow:h};x&&(G.transition=`height ${y}ms ${i} 0ms`,G.WebkitTransition=G.transition);const z=typeof s["aria-hidden"]<"u"?s["aria-hidden"]:l===0;return E.createElement("div",Object.assign({},s,{className:o(r),style:G}),E.createElement("div",{"aria-hidden":z,className:o(n),ref:d},t))};var xu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const gi=f.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:a=!0}=e,i=xu(e,["className","selected","shadeOnHover"]);const{cn:l}=X();return E.createElement("tr",Object.assign({},i,{ref:t,className:l("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a})}))});var Pu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ju=f.forwardRef((e,t)=>{var{className:r,children:n,content:a,togglePlacement:i="left",defaultOpen:l=!1,open:s,onOpenChange:o,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:c=999,contentGutter:v,onClick:m}=e,b=Pu(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:y}=X(),[p,R]=Xt({defaultValue:l,value:s,onChange:o}),h=Fn("global"),O=Je(),x=G=>{R(V=>!V),G.stopPropagation()},_=G=>{d&&!u&&!vi(G.target)&&x(G)};return E.createElement(E.Fragment,null,E.createElement(gi,Object.assign({},b,{ref:t,className:y("navds-table__expandable-row",r,{"navds-table__expandable-row--open":p,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:ct(m,_)}),i==="right"&&n,E.createElement(mi,{className:y("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":p}),onClick:u?()=>null:x},!u&&E.createElement("button",{className:y("navds-table__toggle-expand-button"),type:"button","aria-controls":O,"aria-expanded":p,onClick:x},E.createElement(Zt,{className:y("navds-table__expandable-icon"),title:h(p?"showLess":"showMore")}))),i==="left"&&n),E.createElement("tr",{"data-state":p?"open":"closed",className:y("navds-table__expanded-row"),"aria-hidden":!p,id:O},E.createElement("td",{colSpan:c,className:y("navds-table__expanded-row-cell")},E.createElement(Tu,{className:y("navds-table__expanded-row-collapse"),innerClassName:y(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${v??i}`),height:p?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function vi(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:vi(e.parentElement)}var Au=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Nu=f.forwardRef((e,t)=>{var{className:r}=e,n=Au(e,["className"]);const{cn:a}=X();return E.createElement("thead",Object.assign({},n,{ref:t,className:a("navds-table__header",r)}))});var Iu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const fe=f.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:a="medium",onSortChange:i,sort:l}=e,s=Iu(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:o}=X();return E.createElement(fi.Provider,{value:{onSortChange:i,sort:l}},E.createElement("table",Object.assign({},s,{ref:t,className:o("navds-table",`navds-table--${a}`,r,{"navds-table--zebra-stripes":n})})))});fe.Header=Nu;fe.Body=bu;fe.Row=gi;fe.ColumnHeader=Eu;fe.HeaderCell=ci;fe.DataCell=mi;fe.ExpandableRow=ju;var Lu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Mu=f.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:i="medium",icon:l,"data-color":s}=e,o=Lu(e,["children","className","variant","size","icon","data-color"]);const{cn:u}=X(),d=(a==null?void 0:a.endsWith("-filled"))&&"strong",c=(a==null?void 0:a.endsWith("-moderate"))&&"moderate";return E.createElement(ye,Object.assign({"data-color":s??Fu(a),"data-variant":d||c||"outline"},o,{ref:t,as:"span",size:i==="medium"?"medium":"small",className:u("navds-tag",n,`navds-tag--${a}`,`navds-tag--${i}`)}),l&&E.createElement("span",{className:u("navds-tag__icon--left")},l),r)});function Fu(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var Du=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const pi=f.forwardRef((e,t)=>{var{children:r,className:n,arrow:a=!0,placement:i="top",open:l,defaultOpen:s=!1,onOpenChange:o,offset:u,content:d,delay:c=150,id:v,keys:m,maxChar:b=80,describesChild:y=!1}=e,p=Du(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:R}=X(),[h,O]=Xt({defaultValue:s,value:l,onChange:o}),x=f.useRef(null),_=Kl(!1),G=_?_.ref.current:void 0,{x:V,y:z,strategy:B,context:K,placement:$,middlewareData:{arrow:{x:P,y:S}={},hide:{referenceHidden:w}={}},refs:A}=Qo({placement:i,open:h,onOpenChange:W=>O(W),middleware:[so(u??(a?8:4)),oo(),uo({padding:5,fallbackPlacements:["bottom","top"]}),co({element:x,padding:5})],whileElementsMounted:_?(W,Y,J)=>jr(W,Y,J,{animationFrame:!0}):jr,strategy:_?"fixed":void 0}),{getReferenceProps:F,getFloatingProps:M}=nu([zo(K,{handleClose:au(),restMs:c}),eu(K),Xo(K)]),I=Je(v),N=Ca(t,A.setFloating);if(!r||(r==null?void 0:r.type)===E.Fragment||r===E.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(d==null?void 0:d.length)>b&&h&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${d.length}
Tooltip-content: ${d}`);const U=y?h?{"aria-describedby":I}:{title:d}:{"aria-label":d};return E.createElement(E.Fragment,null,E.createElement(dt,Object.assign({ref:A.setReference},F(),U,{"aria-keyshortcuts":m?m.join("+"):void 0}),r),E.createElement(Os,{rootElement:G,asChild:!0},h&&E.createElement("div",Object.assign({},M(Object.assign(Object.assign({},p),{ref:N,style:{position:B,top:z??0,left:V??0,visibility:w?"hidden":"visible"},role:"tooltip",id:I,className:R("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":$,"data-state":"open"}),d,m&&E.createElement("span",{className:R("navds-tooltip__keys"),"aria-hidden":!0},m.map(W=>E.createElement(cl,{as:"kbd",key:W,className:R("navds-tooltip__key")},W))),a&&E.createElement("div",{ref:W=>{x.current=W},className:R("navds-tooltip__arrow"),style:{left:P!=null?`${P}px`:"",top:S!=null?`${S}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[$]]:"-3.5px"}}))))}),Vu=e=>{const t=lr(e,"fieldset"),{inputProps:r}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var qu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Cu=f.forwardRef((e,t)=>{var r,n,a;const{inputProps:i,errorId:l,showErrorMsg:s,hasError:o,size:u,readOnly:d,inputDescriptionId:c}=Vu(e),{cn:v}=X(),m=f.useContext(tt),{children:b,className:y,errorPropagation:p=!0,legend:R,description:h,hideLegend:O,nativeReadOnly:x=!0}=e,_=qu(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return E.createElement(tt.Provider,{value:{error:p?(r=e.error)!==null&&r!==void 0?r:m==null?void 0:m.error:void 0,errorId:Nn({[l]:s,[(n=m==null?void 0:m.errorId)!==null&&n!==void 0?n:""]:!!(m!=null&&m.error)}),size:u,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:d}},E.createElement("fieldset",Object.assign({},Ke(_,["errorId","error","size","readOnly"]),Ke(i,["aria-describedby","aria-invalid"]),{ref:t,className:v(y,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":o,"navds-fieldset--readonly":d})}),E.createElement(vn,{size:u,as:"legend",className:v("navds-fieldset__legend",{"navds-sr-only":!!O})},d&&(x?E.createElement(ui,null):E.createElement(iu,null)),R),!!h&&E.createElement(ye,{className:v("navds-fieldset__description",{"navds-sr-only":!!O}),id:c,size:u??"medium",as:"div"},e.description),b,E.createElement("div",{id:l,"aria-relevant":"additions removals","aria-live":"polite",className:v("navds-fieldset__error")},s&&E.createElement(Ga,{size:u,showIcon:!0},e.error))))});var Bu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const yi=E.createContext(null),Ku=f.forwardRef((e,t)=>{var r,n,{children:a,className:i,name:l,defaultValue:s,value:o,onChange:u=()=>{},required:d,readOnly:c}=e,v=Bu(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:m}=X(),b=f.useContext(tt),y=Je();return E.createElement(Cu,Object.assign({},v,{readOnly:c,ref:t,className:m(i,"navds-radio-group",`navds-radio-group--${(n=(r=v.size)!==null&&r!==void 0?r:b==null?void 0:b.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),E.createElement(yi.Provider,{value:{name:l??`radioGroupName-${y}`,defaultValue:s,value:o,onChange:u,required:d}},E.createElement("div",{className:m("navds-radio-buttons")},a)))});var $u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Gu=e=>{const t=f.useContext(yi),r=lr(Ke(e,["description"]),"radio"),{inputProps:n,readOnly:a}=r,i=$u(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},i),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:t==null?void 0:t.name,defaultChecked:(t==null?void 0:t.defaultValue)===void 0?void 0:(t==null?void 0:t.defaultValue)===e.value,checked:(t==null?void 0:t.value)===void 0?void 0:(t==null?void 0:t.value)===e.value,onChange:l=>{var s,o;a||((s=e.onChange)===null||s===void 0||s.call(e,l),(o=t==null?void 0:t.onChange)===null||o===void 0||o.call(t,e.value))},onClick:l=>{var s;if(a){l.preventDefault();return}(s=e==null?void 0:e.onClick)===null||s===void 0||s.call(e,l)},required:t==null?void 0:t.required,type:"radio"})})},Gr=f.forwardRef((e,t)=>{const{cn:r}=X(),{inputProps:n,size:a,hasError:i,readOnly:l}=Gu(e),s=Je(),o=Je();return E.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":i,"navds-radio--disabled":n.disabled,"navds-radio--readonly":l}),"data-color":i?"danger":e["data-color"]},E.createElement("input",Object.assign({},Ke(e,["children","size","description","readOnly"]),Ke(n,["aria-invalid"]),{"aria-labelledby":Nn(s,!!e["aria-labelledby"]&&e["aria-labelledby"],{[o]:e.description}),className:r("navds-radio__input"),ref:t})),E.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},E.createElement("span",{className:r("navds-radio__content")},E.createElement(ye,{as:"span",id:s,size:a,"aria-hidden":!0},e.children),e.description&&E.createElement(ye,{as:"span",id:o,size:a,className:r("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var Uu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ur=(e,t,r)=>{const{outerHeightStyle:n,overflow:a}=t;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(r.current+=1,t):e},Hr=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function $n(e){return parseInt(e,10)||0}const Hu=f.forwardRef((e,t)=>{var r,n,{className:a,onChange:i,maxRows:l,minRows:s=1,autoScrollbar:o,style:u,value:d}=e,c=Uu(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:v}=f.useRef(d!=null),m=f.useRef(null),b=Ca(m,t),y=f.useRef(null),p=f.useRef(0),[R,h]=f.useState({outerHeightStyle:0}),O=E.useCallback(()=>{const V=m.current,B=Hr(V).getComputedStyle(V);if(B.width==="0px")return{outerHeightStyle:0};const K=y.current;K.style.width=B.width,K.value=V.value||c.placeholder||"x",K.value.slice(-1)===`
`&&(K.value+=" ");const $=B.boxSizing,P=$n(B.paddingBottom)+$n(B.paddingTop),S=$n(B.borderBottomWidth)+$n(B.borderTopWidth),w=K.scrollHeight-P;K.value="x";const A=K.scrollHeight-P;let F=w;s&&(F=Math.max(Number(s)*A,F)),l&&(F=Math.min(Number(l)*A,F)),F=Math.max(F,A);const M=F+($==="border-box"?P+S:0),I=Math.abs(F-w)<=1;return{outerHeightStyle:M,overflow:I}},[l,s,c.placeholder]),x=()=>{const V=O();zr(V)||h(z=>Ur(z,V,p))};Er(()=>{const V=()=>{const P=O();zr(P)||Mt.flushSync(()=>{h(S=>Ur(S,P,p))})},z=Ha(()=>{var P,S,w;if(p.current=0,!((P=m.current)===null||P===void 0)&&P.style.height||!((S=m.current)===null||S===void 0)&&S.style.width){((w=m.current)===null||w===void 0?void 0:w.style.overflow)==="hidden"&&h(A=>Object.assign(Object.assign({},A),{overflow:!1}));return}V()},166,!0),B=m.current,K=Hr(B);K.addEventListener("resize",z);let $;return typeof ResizeObserver<"u"&&($=new ResizeObserver(z),$.observe(B)),()=>{z.clear(),K.removeEventListener("resize",z),$&&$.disconnect()}},[O]),Er(()=>{x()}),f.useEffect(()=>{p.current=0},[d]);const _=V=>{p.current=0,v||x(),i&&i(V)},G=Object.assign({"--__ac-textarea-height":R.outerHeightStyle+"px","--__axc-textarea-height":R.outerHeightStyle+"px",overflow:R.overflow&&!o&&!(!((r=m.current)===null||r===void 0)&&r.style.height)&&!(!((n=m.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},u);return E.createElement(E.Fragment,null,E.createElement("textarea",Object.assign({value:d,onChange:_,ref:b,rows:s,style:G},c,{className:a})),E.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:y,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function zr(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const zu=({maxLengthId:e,maxLength:t,currentLength:r,size:n,i18n:a})=>{const{cn:i}=X(),l=Fn("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),s=t-r,[o,u]=f.useState(s);return f.useEffect(()=>{const d=Ha(()=>{u(s)},2e3);return d(),()=>{d.clear()}},[s]),E.createElement(E.Fragment,null,E.createElement("span",{id:e,className:i("navds-sr-only")},l("maxLength",{maxLength:t})),s<20&&E.createElement("span",{role:"status",className:i("navds-textarea__sr-counter navds-sr-only")},Wr(o,l)),E.createElement(ye,{className:i("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:n},Wr(s,l)))},Wr=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Wu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Yu=f.forwardRef((e,t)=>{var r,n,a;const{inputProps:i,errorId:l,showErrorMsg:s,hasError:o,size:u,inputDescriptionId:d}=lr(e,"textarea"),{label:c,className:v,description:m,maxLength:b,hideLabel:y=!1,resize:p,UNSAFE_autoScrollbar:R,i18n:h,readOnly:O}=e,x=Wu(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:_}=X(),G=Je(),V=b!==void 0&&b>0,[z,B]=f.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),K=()=>{let P=x!=null&&x.minRows?x==null?void 0:x.minRows:3;return u==="small"&&(P=x!=null&&x.minRows?x==null?void 0:x.minRows:2),P},$=Nn(i["aria-describedby"],{[G??""]:V});return E.createElement("div",{className:_(v,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!i.disabled,"navds-form-field--readonly":O,"navds-textarea--readonly":O,"navds-textarea--error":o,"navds-textarea--autoscrollbar":R,[`navds-textarea--resize-${p===!0?"both":p}`]:p})},E.createElement(vn,{htmlFor:i.id,size:u,className:_("navds-form-field__label",{"navds-sr-only":y})},O&&E.createElement(ui,null),c),!!m&&E.createElement(ye,{className:_("navds-form-field__description",{"navds-sr-only":y}),id:d,size:u,as:"div"},m),E.createElement(Hu,Object.assign({},Ke(x,["error","errorId","size"]),i,{onChange:ct(e.onChange,e.value===void 0?P=>B(P.target.value):void 0),minRows:K(),autoScrollbar:R,ref:t,readOnly:O,className:_("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},$?{"aria-describedby":$}:{})),V&&!O&&!i.disabled&&E.createElement(zu,{maxLengthId:G,maxLength:b,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:z.length,size:u,i18n:h}),E.createElement("div",{className:_("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},s&&E.createElement(Ga,{size:u,showIcon:!0},e.error)))});var Dn=e=>e.type==="checkbox",Qe=e=>e instanceof Date,ke=e=>e==null;const bi=e=>typeof e=="object";var ue=e=>!ke(e)&&!Array.isArray(e)&&bi(e)&&!Qe(e),hi=e=>ue(e)&&e.target?Dn(e.target)?e.target.checked:e.target.value:e,Ju=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ki=(e,t)=>e.has(Ju(t)),Xu=e=>{const t=e.constructor&&e.constructor.prototype;return ue(t)&&t.hasOwnProperty("isPrototypeOf")},sr=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function me(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(sr&&(e instanceof Blob||n))&&(r||ue(e)))if(t=r?[]:{},!r&&!Xu(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=me(e[a]));else return e;return t}var pt=e=>/^\w*$/.test(e),se=e=>e===void 0,or=e=>Array.isArray(e)?e.filter(Boolean):[],ur=e=>or(e.replace(/["|']|\]/g,"").split(/\.|\[/)),q=(e,t,r)=>{if(!t||!ue(e))return r;const n=(pt(t)?[t]:ur(t)).reduce((a,i)=>ke(a)?a:a[i],e);return se(n)||n===e?se(e[t])?r:e[t]:n},we=e=>typeof e=="boolean",ee=(e,t,r)=>{let n=-1;const a=pt(t)?[t]:ur(t),i=a.length,l=i-1;for(;++n<i;){const s=a[n];let o=r;if(n!==l){const u=e[s];o=ue(u)||Array.isArray(u)?u:isNaN(+a[n+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=o,e=e[s]}};const rt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Ne={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},qe={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},dr=E.createContext(null);dr.displayName="HookFormContext";const yn=()=>E.useContext(dr),Zu=e=>{const{children:t,...r}=e;return E.createElement(dr.Provider,{value:r},t)};var Ei=(e,t,r,n=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const l=i;return t._proxyFormState[l]!==Ne.all&&(t._proxyFormState[l]=!n||Ne.all),r&&(r[l]=!0),e[l]}});return a};const cr=typeof window<"u"?f.useLayoutEffect:f.useEffect;function Qu(e){const t=yn(),{control:r=t.control,disabled:n,name:a,exact:i}=e||{},[l,s]=E.useState(r._formState),o=E.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return cr(()=>r._subscribe({name:a,formState:o.current,exact:i,callback:u=>{!n&&s({...r._formState,...u})}}),[a,n,i]),E.useEffect(()=>{o.current.isValid&&r._setValid(!0)},[r]),E.useMemo(()=>Ei(l,r,o.current,!1),[l,r])}var Le=e=>typeof e=="string",Ri=(e,t,r,n,a)=>Le(e)?(n&&t.watch.add(e),q(r,e,a)):Array.isArray(e)?e.map(i=>(n&&t.watch.add(i),q(r,i))):(n&&(t.watchAll=!0),r);function ed(e){const t=yn(),{control:r=t.control,name:n,defaultValue:a,disabled:i,exact:l}=e||{},s=E.useRef(a),[o,u]=E.useState(r._getWatch(n,s.current));return cr(()=>r._subscribe({name:n,formState:{values:!0},exact:l,callback:d=>!i&&u(Ri(n,r._names,d.values||r._formValues,!1,s.current))}),[n,r,i,l]),E.useEffect(()=>r._removeUnmounted()),o}function wi(e){const t=yn(),{name:r,disabled:n,control:a=t.control,shouldUnregister:i}=e,l=ki(a._names.array,r),s=ed({control:a,name:r,defaultValue:q(a._formValues,r,q(a._defaultValues,r,e.defaultValue)),exact:!0}),o=Qu({control:a,name:r,exact:!0}),u=E.useRef(e),d=E.useRef(a.register(r,{...e.rules,value:s,...we(e.disabled)?{disabled:e.disabled}:{}})),c=E.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!q(o.errors,r)},isDirty:{enumerable:!0,get:()=>!!q(o.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!q(o.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!q(o.validatingFields,r)},error:{enumerable:!0,get:()=>q(o.errors,r)}}),[o,r]),v=E.useCallback(p=>d.current.onChange({target:{value:hi(p),name:r},type:rt.CHANGE}),[r]),m=E.useCallback(()=>d.current.onBlur({target:{value:q(a._formValues,r),name:r},type:rt.BLUR}),[r,a._formValues]),b=E.useCallback(p=>{const R=q(a._fields,r);R&&p&&(R._f.ref={focus:()=>p.focus&&p.focus(),select:()=>p.select&&p.select(),setCustomValidity:h=>p.setCustomValidity(h),reportValidity:()=>p.reportValidity()})},[a._fields,r]),y=E.useMemo(()=>({name:r,value:s,...we(n)||o.disabled?{disabled:o.disabled||n}:{},onChange:v,onBlur:m,ref:b}),[r,n,o.disabled,v,m,b,s]);return E.useEffect(()=>{const p=a._options.shouldUnregister||i;a.register(r,{...u.current.rules,...we(u.current.disabled)?{disabled:u.current.disabled}:{}});const R=(h,O)=>{const x=q(a._fields,h);x&&x._f&&(x._f.mount=O)};if(R(r,!0),p){const h=me(q(a._options.defaultValues,r));ee(a._defaultValues,r,h),se(q(a._formValues,r))&&ee(a._formValues,r,h)}return!l&&a.register(r),()=>{(l?p&&!a._state.action:p)?a.unregister(r):R(r,!1)}},[r,a,l,i]),E.useEffect(()=>{a._setDisabledField({disabled:n,name:r})},[n,r,a]),E.useMemo(()=>({field:y,formState:o,fieldState:c}),[y,o,c])}var nd=(e,t,r,n,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:a||!0}}:{},Tn=e=>Array.isArray(e)?e:[e],Yr=()=>{let e=[];return{get observers(){return e},next:a=>{for(const i of e)i.next&&i.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(i=>i!==a)}}),unsubscribe:()=>{e=[]}}},Ct=e=>ke(e)||!bi(e);function He(e,t){if(Ct(e)||Ct(t))return e===t;if(Qe(e)&&Qe(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const a of r){const i=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const l=t[a];if(Qe(i)&&Qe(l)||ue(i)&&ue(l)||Array.isArray(i)&&Array.isArray(l)?!He(i,l):i!==l)return!1}}return!0}var Ee=e=>ue(e)&&!Object.keys(e).length,fr=e=>e.type==="file",Ie=e=>typeof e=="function",at=e=>{if(!sr)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Oi=e=>e.type==="select-multiple",mr=e=>e.type==="radio",td=e=>mr(e)||Dn(e),At=e=>at(e)&&e.isConnected;function rd(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=se(e)?n++:e[t[n++]];return e}function ad(e){for(const t in e)if(e.hasOwnProperty(t)&&!se(e[t]))return!1;return!0}function ce(e,t){const r=Array.isArray(t)?t:pt(t)?[t]:ur(t),n=r.length===1?e:rd(e,r),a=r.length-1,i=r[a];return n&&delete n[i],a!==0&&(ue(n)&&Ee(n)||Array.isArray(n)&&ad(n))&&ce(e,r.slice(0,-1)),e}var _i=e=>{for(const t in e)if(Ie(e[t]))return!0;return!1};function it(e,t={}){const r=Array.isArray(e);if(ue(e)||r)for(const n in e)Array.isArray(e[n])||ue(e[n])&&!_i(e[n])?(t[n]=Array.isArray(e[n])?[]:{},it(e[n],t[n])):ke(e[n])||(t[n]=!0);return t}function Si(e,t,r){const n=Array.isArray(e);if(ue(e)||n)for(const a in e)Array.isArray(e[a])||ue(e[a])&&!_i(e[a])?se(t)||Ct(r[a])?r[a]=Array.isArray(e[a])?it(e[a],[]):{...it(e[a])}:Si(e[a],ke(t)?{}:t[a],r[a]):r[a]=!He(e[a],t[a]);return r}var Rn=(e,t)=>Si(e,t,it(t));const Jr={value:!1,isValid:!1},Xr={value:!0,isValid:!0};var Ti=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!se(e[0].attributes.value)?se(e[0].value)||e[0].value===""?Xr:{value:e[0].value,isValid:!0}:Xr:Jr}return Jr},xi=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>se(e)?e:t?e===""?NaN:e&&+e:r&&Le(e)?new Date(e):n?n(e):e;const Zr={isValid:!1,value:null};var Pi=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,Zr):Zr;function Qr(e){const t=e.ref;return fr(t)?t.files:mr(t)?Pi(e.refs).value:Oi(t)?[...t.selectedOptions].map(({value:r})=>r):Dn(t)?Ti(e.refs).value:xi(se(t.value)?e.ref.value:t.value,e)}var id=(e,t,r,n)=>{const a={};for(const i of e){const l=q(t,i);l&&ee(a,i,l._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:n}},lt=e=>e instanceof RegExp,wn=e=>se(e)?e:lt(e)?e.source:ue(e)?lt(e.value)?e.value.source:e.value:e,ea=e=>({isOnSubmit:!e||e===Ne.onSubmit,isOnBlur:e===Ne.onBlur,isOnChange:e===Ne.onChange,isOnAll:e===Ne.all,isOnTouch:e===Ne.onTouched});const na="AsyncFunction";var ld=e=>!!e&&!!e.validate&&!!(Ie(e.validate)&&e.validate.constructor.name===na||ue(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===na)),sd=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ta=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const xn=(e,t,r,n)=>{for(const a of r||Object.keys(e)){const i=q(e,a);if(i){const{_f:l,...s}=i;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],a)&&!n)return!0;if(l.ref&&t(l.ref,l.name)&&!n)return!0;if(xn(s,t))break}else if(ue(s)&&xn(s,t))break}}};function ra(e,t,r){const n=q(e,r);if(n||pt(r))return{error:n,name:r};const a=r.split(".");for(;a.length;){const i=a.join("."),l=q(t,i),s=q(e,i);if(l&&!Array.isArray(l)&&r!==i)return{name:r};if(s&&s.type)return{name:i,error:s};if(s&&s.root&&s.root.type)return{name:`${i}.root`,error:s.root};a.pop()}return{name:r}}var od=(e,t,r,n)=>{r(e);const{name:a,...i}=e;return Ee(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(l=>t[l]===(!n||Ne.all))},ud=(e,t,r)=>!e||!t||e===t||Tn(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),dd=(e,t,r,n,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(t||e):(r?n.isOnBlur:a.isOnBlur)?!e:(r?n.isOnChange:a.isOnChange)?e:!0,cd=(e,t)=>!or(q(e,t)).length&&ce(e,t),fd=(e,t,r)=>{const n=Tn(q(e,r));return ee(n,"root",t[r]),ee(e,r,n),e},Yn=e=>Le(e);function aa(e,t,r="validate"){if(Yn(e)||Array.isArray(e)&&e.every(Yn)||we(e)&&!e)return{type:r,message:Yn(e)?e:"",ref:t}}var sn=e=>ue(e)&&!lt(e)?e:{value:e,message:""},ia=async(e,t,r,n,a,i)=>{const{ref:l,refs:s,required:o,maxLength:u,minLength:d,min:c,max:v,pattern:m,validate:b,name:y,valueAsNumber:p,mount:R}=e._f,h=q(r,y);if(!R||t.has(y))return{};const O=s?s[0]:l,x=P=>{a&&O.reportValidity&&(O.setCustomValidity(we(P)?"":P||""),O.reportValidity())},_={},G=mr(l),V=Dn(l),z=G||V,B=(p||fr(l))&&se(l.value)&&se(h)||at(l)&&l.value===""||h===""||Array.isArray(h)&&!h.length,K=nd.bind(null,y,n,_),$=(P,S,w,A=qe.maxLength,F=qe.minLength)=>{const M=P?S:w;_[y]={type:P?A:F,message:M,ref:l,...K(P?A:F,M)}};if(i?!Array.isArray(h)||!h.length:o&&(!z&&(B||ke(h))||we(h)&&!h||V&&!Ti(s).isValid||G&&!Pi(s).isValid)){const{value:P,message:S}=Yn(o)?{value:!!o,message:o}:sn(o);if(P&&(_[y]={type:qe.required,message:S,ref:O,...K(qe.required,S)},!n))return x(S),_}if(!B&&(!ke(c)||!ke(v))){let P,S;const w=sn(v),A=sn(c);if(!ke(h)&&!isNaN(h)){const F=l.valueAsNumber||h&&+h;ke(w.value)||(P=F>w.value),ke(A.value)||(S=F<A.value)}else{const F=l.valueAsDate||new Date(h),M=U=>new Date(new Date().toDateString()+" "+U),I=l.type=="time",N=l.type=="week";Le(w.value)&&h&&(P=I?M(h)>M(w.value):N?h>w.value:F>new Date(w.value)),Le(A.value)&&h&&(S=I?M(h)<M(A.value):N?h<A.value:F<new Date(A.value))}if((P||S)&&($(!!P,w.message,A.message,qe.max,qe.min),!n))return x(_[y].message),_}if((u||d)&&!B&&(Le(h)||i&&Array.isArray(h))){const P=sn(u),S=sn(d),w=!ke(P.value)&&h.length>+P.value,A=!ke(S.value)&&h.length<+S.value;if((w||A)&&($(w,P.message,S.message),!n))return x(_[y].message),_}if(m&&!B&&Le(h)){const{value:P,message:S}=sn(m);if(lt(P)&&!h.match(P)&&(_[y]={type:qe.pattern,message:S,ref:l,...K(qe.pattern,S)},!n))return x(S),_}if(b){if(Ie(b)){const P=await b(h,r),S=aa(P,O);if(S&&(_[y]={...S,...K(qe.validate,S.message)},!n))return x(S.message),_}else if(ue(b)){let P={};for(const S in b){if(!Ee(P)&&!n)break;const w=aa(await b[S](h,r),O,S);w&&(P={...w,...K(S,w.message)},x(w.message),n&&(_[y]=P))}if(!Ee(P)&&(_[y]={ref:O,...P},!n))return _}}return x(!0),_};const md={mode:Ne.onSubmit,reValidateMode:Ne.onChange,shouldFocusError:!0};function gd(e={}){let t={...md,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:Ie(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const n={};let a=ue(t.defaultValues)||ue(t.values)?me(t.defaultValues||t.values)||{}:{},i=t.shouldUnregister?{}:me(a),l={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},o,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let c={...d};const v={array:Yr(),state:Yr()},m=t.criteriaMode===Ne.all,b=g=>k=>{clearTimeout(u),u=setTimeout(g,k)},y=async g=>{if(!t.disabled&&(d.isValid||c.isValid||g)){const k=t.resolver?Ee((await V()).errors):await B(n,!0);k!==r.isValid&&v.state.next({isValid:k})}},p=(g,k)=>{!t.disabled&&(d.isValidating||d.validatingFields||c.isValidating||c.validatingFields)&&((g||Array.from(s.mount)).forEach(T=>{T&&(k?ee(r.validatingFields,T,k):ce(r.validatingFields,T))}),v.state.next({validatingFields:r.validatingFields,isValidating:!Ee(r.validatingFields)}))},R=(g,k=[],T,C,D=!0,L=!0)=>{if(C&&T&&!t.disabled){if(l.action=!0,L&&Array.isArray(q(n,g))){const H=T(q(n,g),C.argA,C.argB);D&&ee(n,g,H)}if(L&&Array.isArray(q(r.errors,g))){const H=T(q(r.errors,g),C.argA,C.argB);D&&ee(r.errors,g,H),cd(r.errors,g)}if((d.touchedFields||c.touchedFields)&&L&&Array.isArray(q(r.touchedFields,g))){const H=T(q(r.touchedFields,g),C.argA,C.argB);D&&ee(r.touchedFields,g,H)}(d.dirtyFields||c.dirtyFields)&&(r.dirtyFields=Rn(a,i)),v.state.next({name:g,isDirty:$(g,k),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ee(i,g,k)},h=(g,k)=>{ee(r.errors,g,k),v.state.next({errors:r.errors})},O=g=>{r.errors=g,v.state.next({errors:r.errors,isValid:!1})},x=(g,k,T,C)=>{const D=q(n,g);if(D){const L=q(i,g,se(T)?q(a,g):T);se(L)||C&&C.defaultChecked||k?ee(i,g,k?L:Qr(D._f)):w(g,L),l.mount&&y()}},_=(g,k,T,C,D)=>{let L=!1,H=!1;const Q={name:g};if(!t.disabled){if(!T||C){(d.isDirty||c.isDirty)&&(H=r.isDirty,r.isDirty=Q.isDirty=$(),L=H!==Q.isDirty);const ne=He(q(a,g),k);H=!!q(r.dirtyFields,g),ne?ce(r.dirtyFields,g):ee(r.dirtyFields,g,!0),Q.dirtyFields=r.dirtyFields,L=L||(d.dirtyFields||c.dirtyFields)&&H!==!ne}if(T){const ne=q(r.touchedFields,g);ne||(ee(r.touchedFields,g,T),Q.touchedFields=r.touchedFields,L=L||(d.touchedFields||c.touchedFields)&&ne!==T)}L&&D&&v.state.next(Q)}return L?Q:{}},G=(g,k,T,C)=>{const D=q(r.errors,g),L=(d.isValid||c.isValid)&&we(k)&&r.isValid!==k;if(t.delayError&&T?(o=b(()=>h(g,T)),o(t.delayError)):(clearTimeout(u),o=null,T?ee(r.errors,g,T):ce(r.errors,g)),(T?!He(D,T):D)||!Ee(C)||L){const H={...C,...L&&we(k)?{isValid:k}:{},errors:r.errors,name:g};r={...r,...H},v.state.next(H)}},V=async g=>{p(g,!0);const k=await t.resolver(i,t.context,id(g||s.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return p(g),k},z=async g=>{const{errors:k}=await V(g);if(g)for(const T of g){const C=q(k,T);C?ee(r.errors,T,C):ce(r.errors,T)}else r.errors=k;return k},B=async(g,k,T={valid:!0})=>{for(const C in g){const D=g[C];if(D){const{_f:L,...H}=D;if(L){const Q=s.array.has(L.name),ne=D._f&&ld(D._f);ne&&d.validatingFields&&p([C],!0);const Te=await ia(D,s.disabled,i,m,t.shouldUseNativeValidation&&!k,Q);if(ne&&d.validatingFields&&p([C]),Te[L.name]&&(T.valid=!1,k))break;!k&&(q(Te,L.name)?Q?fd(r.errors,Te,L.name):ee(r.errors,L.name,Te[L.name]):ce(r.errors,L.name))}!Ee(H)&&await B(H,k,T)}}return T.valid},K=()=>{for(const g of s.unMount){const k=q(n,g);k&&(k._f.refs?k._f.refs.every(T=>!At(T)):!At(k._f.ref))&&ie(g)}s.unMount=new Set},$=(g,k)=>!t.disabled&&(g&&k&&ee(i,g,k),!He(U(),a)),P=(g,k,T)=>Ri(g,s,{...l.mount?i:se(k)?a:Le(g)?{[g]:k}:k},T,k),S=g=>or(q(l.mount?i:a,g,t.shouldUnregister?q(a,g,[]):[])),w=(g,k,T={})=>{const C=q(n,g);let D=k;if(C){const L=C._f;L&&(!L.disabled&&ee(i,g,xi(k,L)),D=at(L.ref)&&ke(k)?"":k,Oi(L.ref)?[...L.ref.options].forEach(H=>H.selected=D.includes(H.value)):L.refs?Dn(L.ref)?L.refs.forEach(H=>{(!H.defaultChecked||!H.disabled)&&(Array.isArray(D)?H.checked=!!D.find(Q=>Q===H.value):H.checked=D===H.value||!!D)}):L.refs.forEach(H=>H.checked=H.value===D):fr(L.ref)?L.ref.value="":(L.ref.value=D,L.ref.type||v.state.next({name:g,values:me(i)})))}(T.shouldDirty||T.shouldTouch)&&_(g,D,T.shouldTouch,T.shouldDirty,!0),T.shouldValidate&&N(g)},A=(g,k,T)=>{for(const C in k){if(!k.hasOwnProperty(C))return;const D=k[C],L=g+"."+C,H=q(n,L);(s.array.has(g)||ue(D)||H&&!H._f)&&!Qe(D)?A(L,D,T):w(L,D,T)}},F=(g,k,T={})=>{const C=q(n,g),D=s.array.has(g),L=me(k);ee(i,g,L),D?(v.array.next({name:g,values:me(i)}),(d.isDirty||d.dirtyFields||c.isDirty||c.dirtyFields)&&T.shouldDirty&&v.state.next({name:g,dirtyFields:Rn(a,i),isDirty:$(g,L)})):C&&!C._f&&!ke(L)?A(g,L,T):w(g,L,T),ta(g,s)&&v.state.next({...r}),v.state.next({name:l.mount?g:void 0,values:me(i)})},M=async g=>{l.mount=!0;const k=g.target;let T=k.name,C=!0;const D=q(n,T),L=ne=>{C=Number.isNaN(ne)||Qe(ne)&&isNaN(ne.getTime())||He(ne,q(i,T,ne))},H=ea(t.mode),Q=ea(t.reValidateMode);if(D){let ne,Te;const Cn=k.type?Qr(D._f):hi(g),Ue=g.type===rt.BLUR||g.type===rt.FOCUS_OUT,Gi=!sd(D._f)&&!t.resolver&&!q(r.errors,T)&&!D._f.deps||dd(Ue,q(r.touchedFields,T),r.isSubmitted,Q,H),bt=ta(T,s,Ue);ee(i,T,Cn),Ue?(D._f.onBlur&&D._f.onBlur(g),o&&o(0)):D._f.onChange&&D._f.onChange(g);const ht=_(T,Cn,Ue),Ui=!Ee(ht)||bt;if(!Ue&&v.state.next({name:T,type:g.type,values:me(i)}),Gi)return(d.isValid||c.isValid)&&(t.mode==="onBlur"?Ue&&y():Ue||y()),Ui&&v.state.next({name:T,...bt?{}:ht});if(!Ue&&bt&&v.state.next({...r}),t.resolver){const{errors:yr}=await V([T]);if(L(Cn),C){const Hi=ra(r.errors,n,T),br=ra(yr,n,Hi.name||T);ne=br.error,T=br.name,Te=Ee(yr)}}else p([T],!0),ne=(await ia(D,s.disabled,i,m,t.shouldUseNativeValidation))[T],p([T]),L(Cn),C&&(ne?Te=!1:(d.isValid||c.isValid)&&(Te=await B(n,!0)));C&&(D._f.deps&&N(D._f.deps),G(T,Te,ne,ht))}},I=(g,k)=>{if(q(r.errors,k)&&g.focus)return g.focus(),1},N=async(g,k={})=>{let T,C;const D=Tn(g);if(t.resolver){const L=await z(se(g)?g:D);T=Ee(L),C=g?!D.some(H=>q(L,H)):T}else g?(C=(await Promise.all(D.map(async L=>{const H=q(n,L);return await B(H&&H._f?{[L]:H}:H)}))).every(Boolean),!(!C&&!r.isValid)&&y()):C=T=await B(n);return v.state.next({...!Le(g)||(d.isValid||c.isValid)&&T!==r.isValid?{}:{name:g},...t.resolver||!g?{isValid:T}:{},errors:r.errors}),k.shouldFocus&&!C&&xn(n,I,g?D:s.mount),C},U=g=>{const k={...l.mount?i:a};return se(g)?k:Le(g)?q(k,g):g.map(T=>q(k,T))},W=(g,k)=>({invalid:!!q((k||r).errors,g),isDirty:!!q((k||r).dirtyFields,g),error:q((k||r).errors,g),isValidating:!!q(r.validatingFields,g),isTouched:!!q((k||r).touchedFields,g)}),Y=g=>{g&&Tn(g).forEach(k=>ce(r.errors,k)),v.state.next({errors:g?r.errors:{}})},J=(g,k,T)=>{const C=(q(n,g,{_f:{}})._f||{}).ref,D=q(r.errors,g)||{},{ref:L,message:H,type:Q,...ne}=D;ee(r.errors,g,{...ne,...k,ref:C}),v.state.next({name:g,errors:r.errors,isValid:!1}),T&&T.shouldFocus&&C&&C.focus&&C.focus()},Ae=(g,k)=>Ie(g)?v.state.subscribe({next:T=>g(P(void 0,k),T)}):P(g,k,!0),ve=g=>v.state.subscribe({next:k=>{ud(g.name,k.name,g.exact)&&od(k,g.formState||d,hn,g.reRenderRoot)&&g.callback({values:{...i},...r,...k})}}).unsubscribe,de=g=>(l.mount=!0,c={...c,...g.formState},ve({...g,formState:c})),ie=(g,k={})=>{for(const T of g?Tn(g):s.mount)s.mount.delete(T),s.array.delete(T),k.keepValue||(ce(n,T),ce(i,T)),!k.keepError&&ce(r.errors,T),!k.keepDirty&&ce(r.dirtyFields,T),!k.keepTouched&&ce(r.touchedFields,T),!k.keepIsValidating&&ce(r.validatingFields,T),!t.shouldUnregister&&!k.keepDefaultValue&&ce(a,T);v.state.next({values:me(i)}),v.state.next({...r,...k.keepDirty?{isDirty:$()}:{}}),!k.keepIsValid&&y()},Z=({disabled:g,name:k})=>{(we(g)&&l.mount||g||s.disabled.has(k))&&(g?s.disabled.add(k):s.disabled.delete(k))},re=(g,k={})=>{let T=q(n,g);const C=we(k.disabled)||we(t.disabled);return ee(n,g,{...T||{},_f:{...T&&T._f?T._f:{ref:{name:g}},name:g,mount:!0,...k}}),s.mount.add(g),T?Z({disabled:we(k.disabled)?k.disabled:t.disabled,name:g}):x(g,!0,k.value),{...C?{disabled:k.disabled||t.disabled}:{},...t.progressive?{required:!!k.required,min:wn(k.min),max:wn(k.max),minLength:wn(k.minLength),maxLength:wn(k.maxLength),pattern:wn(k.pattern)}:{},name:g,onChange:M,onBlur:M,ref:D=>{if(D){re(g,k),T=q(n,g);const L=se(D.value)&&D.querySelectorAll&&D.querySelectorAll("input,select,textarea")[0]||D,H=td(L),Q=T._f.refs||[];if(H?Q.find(ne=>ne===L):L===T._f.ref)return;ee(n,g,{_f:{...T._f,...H?{refs:[...Q.filter(At),L,...Array.isArray(q(a,g))?[{}]:[]],ref:{type:L.type,name:g}}:{ref:L}}}),x(g,!1,void 0,L)}else T=q(n,g,{}),T._f&&(T._f.mount=!1),(t.shouldUnregister||k.shouldUnregister)&&!(ki(s.array,g)&&l.action)&&s.unMount.add(g)}}},pe=()=>t.shouldFocusError&&xn(n,I,s.mount),be=g=>{we(g)&&(v.state.next({disabled:g}),xn(n,(k,T)=>{const C=q(n,T);C&&(k.disabled=C._f.disabled||g,Array.isArray(C._f.refs)&&C._f.refs.forEach(D=>{D.disabled=C._f.disabled||g}))},0,!1))},he=(g,k)=>async T=>{let C;T&&(T.preventDefault&&T.preventDefault(),T.persist&&T.persist());let D=me(i);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:L,values:H}=await V();r.errors=L,D=H}else await B(n);if(s.disabled.size)for(const L of s.disabled)ee(D,L,void 0);if(ce(r.errors,"root"),Ee(r.errors)){v.state.next({errors:{}});try{await g(D,T)}catch(L){C=L}}else k&&await k({...r.errors},T),pe(),setTimeout(pe);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ee(r.errors)&&!C,submitCount:r.submitCount+1,errors:r.errors}),C)throw C},Xe=(g,k={})=>{q(n,g)&&(se(k.defaultValue)?F(g,me(q(a,g))):(F(g,k.defaultValue),ee(a,g,me(k.defaultValue))),k.keepTouched||ce(r.touchedFields,g),k.keepDirty||(ce(r.dirtyFields,g),r.isDirty=k.defaultValue?$(g,me(q(a,g))):$()),k.keepError||(ce(r.errors,g),d.isValid&&y()),v.state.next({...r}))},De=(g,k={})=>{const T=g?me(g):a,C=me(T),D=Ee(g),L=D?a:C;if(k.keepDefaultValues||(a=T),!k.keepValues){if(k.keepDirtyValues){const H=new Set([...s.mount,...Object.keys(Rn(a,i))]);for(const Q of Array.from(H))q(r.dirtyFields,Q)?ee(L,Q,q(i,Q)):F(Q,q(L,Q))}else{if(sr&&se(g))for(const H of s.mount){const Q=q(n,H);if(Q&&Q._f){const ne=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(at(ne)){const Te=ne.closest("form");if(Te){Te.reset();break}}}}for(const H of s.mount)F(H,q(L,H))}i=me(L),v.array.next({values:{...L}}),v.state.next({values:{...L}})}s={mount:k.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!d.isValid||!!k.keepIsValid||!!k.keepDirtyValues,l.watch=!!t.shouldUnregister,v.state.next({submitCount:k.keepSubmitCount?r.submitCount:0,isDirty:D?!1:k.keepDirty?r.isDirty:!!(k.keepDefaultValues&&!He(g,a)),isSubmitted:k.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:D?{}:k.keepDirtyValues?k.keepDefaultValues&&i?Rn(a,i):r.dirtyFields:k.keepDefaultValues&&g?Rn(a,g):k.keepDirty?r.dirtyFields:{},touchedFields:k.keepTouched?r.touchedFields:{},errors:k.keepErrors?r.errors:{},isSubmitSuccessful:k.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Ve=(g,k)=>De(Ie(g)?g(i):g,k),bn=(g,k={})=>{const T=q(n,g),C=T&&T._f;if(C){const D=C.refs?C.refs[0]:C.ref;D.focus&&(D.focus(),k.shouldSelect&&Ie(D.select)&&D.select())}},hn=g=>{r={...r,...g}},ln={control:{register:re,unregister:ie,getFieldState:W,handleSubmit:he,setError:J,_subscribe:ve,_runSchema:V,_focusError:pe,_getWatch:P,_getDirty:$,_setValid:y,_setFieldArray:R,_setDisabledField:Z,_setErrors:O,_getFieldArray:S,_reset:De,_resetDefaultValues:()=>Ie(t.defaultValues)&&t.defaultValues().then(g=>{Ve(g,t.resetOptions),v.state.next({isLoading:!1})}),_removeUnmounted:K,_disableForm:be,_subjects:v,_proxyFormState:d,get _fields(){return n},get _formValues(){return i},get _state(){return l},set _state(g){l=g},get _defaultValues(){return a},get _names(){return s},set _names(g){s=g},get _formState(){return r},get _options(){return t},set _options(g){t={...t,...g}}},subscribe:de,trigger:N,register:re,handleSubmit:he,watch:Ae,setValue:F,getValues:U,reset:Ve,resetField:Xe,clearErrors:Y,unregister:ie,setError:J,setFocus:bn,getFieldState:W};return{...ln,formControl:ln}}function vd(e={}){const t=E.useRef(void 0),r=E.useRef(void 0),[n,a]=E.useState({isDirty:!1,isValidating:!1,isLoading:Ie(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Ie(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:n},e.defaultValues&&!Ie(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:l,...s}=gd(e);t.current={...s,formState:n}}const i=t.current.control;return i._options=e,cr(()=>{const l=i._subscribe({formState:i._proxyFormState,callback:()=>a({...i._formState}),reRenderRoot:!0});return a(s=>({...s,isReady:!0})),i._formState.isReady=!0,l},[i]),E.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),E.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),E.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),E.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),E.useEffect(()=>{if(i._proxyFormState.isDirty){const l=i._getDirty();l!==n.isDirty&&i._subjects.state.next({isDirty:l})}},[i,n.isDirty]),E.useEffect(()=>{e.values&&!He(e.values,r.current)?(i._reset(e.values,i._options.resetOptions),r.current=e.values,a(l=>({...l}))):i._resetDefaultValues()},[i,e.values]),E.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=Ei(n,i),t.current}function pd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var la={exports:{}},On={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa;function yd(){if(sa)return On;sa=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,i){var l=null;if(i!==void 0&&(l=""+i),a.key!==void 0&&(l=""+a.key),"key"in a){i={};for(var s in a)s!=="key"&&(i[s]=a[s])}else i=a;return a=i.ref,{$$typeof:e,type:n,key:l,ref:a!==void 0?a:null,props:i}}return On.Fragment=t,On.jsx=r,On.jsxs=r,On}var oa;function bd(){return oa||(oa=1,la.exports=yd()),la.exports}var Oe=bd();const hd=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Oe.jsx(wo,{variant:"warning",size:"small",children:Oe.jsx(Ge,{gap:"2",children:E.Children.map(e,t=>Oe.jsx(ye,{size:"small",children:t},Yi(t)?t.key:t))})}),Vn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};an(Vn);const st="#B7B1A9",ji=4,kd=(e,t,r)=>`
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
`,Ed=(e,t,r)=>`
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
`,Rd=(e,t,r,n)=>t?Ed(e,r,n):kd(e,r,n),wd=(e,t,r)=>r?"":t?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,Od=({children:e,alignOffset:t=0,alignLeft:r=!1,marginTop:n=0,marginLeft:a=0,hideBorder:i=!1})=>Oe.jsxs(Oe.Fragment,{children:[Oe.jsx("style",{dangerouslySetInnerHTML:{__html:Rd(t,r,n,a)}}),Oe.jsx("div",{className:wd(t,r,i),children:e})]});var ua={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var da;function _d(){return da||(da=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(i=a(i,n.call(this,s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var s in i)t.call(i,s)&&i[s]&&(l=a(l,this&&this[s]||s));return l}function a(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ua)),ua.exports}var Sd=_d();const gr=pd(Sd),Td="_borderbox_1vkvn_1",xd="_error_1vkvn_5",Pd="_warning_1vkvn_8",jd={borderbox:Td,error:xd,warning:Pd};gr.bind(jd);const Ad="_aksjonspunkt_kn1hn_1",Nd="_erAksjonspunktApent_kn1hn_4",Id="_erIkkeGodkjentAvBeslutter_kn1hn_8",Ld={aksjonspunkt:Ad,erAksjonspunktApent:Nd,erIkkeGodkjentAvBeslutter:Id};gr.bind(Ld);an(Vn);an(Vn);const Md="_divider_1t980_1",Fd="_dividerParagraf_1t980_8",Dd="_leftPanel_1t980_11",Vd="_rightPanel_1t980_14",qd={divider:Md,dividerParagraf:Fd,leftPanel:Dd,rightPanel:Vd};gr.bind(qd);const Ai=()=>Oe.jsx("span",{"data-testid":"editedIcon",children:Oe.jsx(Al,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});an(Vn);const Cd=an(Vn),Bd=({tekst:e,children:t})=>{const[r,n]=f.useState(!1);if(!e)return t;const a=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return Oe.jsx(pi,{content:Cd.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Oe.jsx("span",{"aria-hidden":"true",onClick:a,children:t??e})})},ca={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},Nt=({beløp:e,kr:t=!1,rød:r=!1})=>{const n=e==null?void 0:e.toString().replace(/\s/g,"");return Oe.jsx(Bd,{tekst:n,children:Oe.jsxs("span",{className:r?ca.rød:ca.default,children:[n?Ba(n):"-",n&&t&&" kr"]})})};function Kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fa={exports:{}},_n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma;function $d(){if(ma)return _n;ma=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,i){var l=null;if(i!==void 0&&(l=""+i),a.key!==void 0&&(l=""+a.key),"key"in a){i={};for(var s in a)s!=="key"&&(i[s]=a[s])}else i=a;return a=i.ref,{$$typeof:e,type:n,key:l,ref:a!==void 0?a:null,props:i}}return _n.Fragment=t,_n.jsx=r,_n.jsxs=r,_n}var ga;function Gd(){return ga||(ga=1,fa.exports=$d()),fa.exports}var le=Gd();const Ni=e=>e.reduce((t,r,n)=>({...t,[n]:a=>r(a)||!0}),{}),Ii=(e,t)=>{const r=t.split(".").reduce((n,a)=>n!==void 0?n[a]:n,e);return r==null?void 0:r.message};var Bt={exports:{}},Ud=Bt.exports,va;function Hd(){return va||(va=1,function(e,t){(function(r,n){e.exports=n()})(Ud,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,l=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,o={},u=function(p){return(p=+p)+(p>68?1900:2e3)},d=function(p){return function(R){this[p]=+R}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var h=R.match(/([+-]|\d\d)/g),O=60*h[1]+(+h[2]||0);return O===0?0:h[0]==="+"?-O:O}(p)}],v=function(p){var R=o[p];return R&&(R.indexOf?R:R.s.concat(R.f))},m=function(p,R){var h,O=o.meridiem;if(O){for(var x=1;x<=24;x+=1)if(p.indexOf(O(x,0,R))>-1){h=x>12;break}}else h=p===(R?"pm":"PM");return h},b={A:[s,function(p){this.afternoon=m(p,!1)}],a:[s,function(p){this.afternoon=m(p,!0)}],Q:[a,function(p){this.month=3*(p-1)+1}],S:[a,function(p){this.milliseconds=100*+p}],SS:[i,function(p){this.milliseconds=10*+p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[l,d("seconds")],ss:[l,d("seconds")],m:[l,d("minutes")],mm:[l,d("minutes")],H:[l,d("hours")],h:[l,d("hours")],HH:[l,d("hours")],hh:[l,d("hours")],D:[l,d("day")],DD:[i,d("day")],Do:[s,function(p){var R=o.ordinal,h=p.match(/\d+/);if(this.day=h[0],R)for(var O=1;O<=31;O+=1)R(O).replace(/\[|\]/g,"")===p&&(this.day=O)}],w:[l,d("week")],ww:[i,d("week")],M:[l,d("month")],MM:[i,d("month")],MMM:[s,function(p){var R=v("months"),h=(v("monthsShort")||R.map(function(O){return O.slice(0,3)})).indexOf(p)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[s,function(p){var R=v("months").indexOf(p)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,d("year")],YY:[i,function(p){this.year=u(p)}],YYYY:[/\d{4}/,d("year")],Z:c,ZZ:c};function y(p){var R,h;R=p,h=o&&o.formats;for(var O=(p=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(K,$,P){var S=P&&P.toUpperCase();return $||h[P]||r[P]||h[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(w,A,F){return A||F.slice(1)})})).match(n),x=O.length,_=0;_<x;_+=1){var G=O[_],V=b[G],z=V&&V[0],B=V&&V[1];O[_]=B?{regex:z,parser:B}:G.replace(/^\[|\]$/g,"")}return function(K){for(var $={},P=0,S=0;P<x;P+=1){var w=O[P];if(typeof w=="string")S+=w.length;else{var A=w.regex,F=w.parser,M=K.slice(S),I=A.exec(M)[0];F.call($,I),K=K.replace(I,"")}}return function(N){var U=N.afternoon;if(U!==void 0){var W=N.hours;U?W<12&&(N.hours+=12):W===12&&(N.hours=0),delete N.afternoon}}($),$}}return function(p,R,h){h.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(u=p.parseTwoDigitYear);var O=R.prototype,x=O.parse;O.parse=function(_){var G=_.date,V=_.utc,z=_.args;this.$u=V;var B=z[1];if(typeof B=="string"){var K=z[2]===!0,$=z[3]===!0,P=K||$,S=z[2];$&&(S=z[2]),o=this.$locale(),!K&&S&&(o=h.Ls[S]),this.$d=function(M,I,N,U){try{if(["x","X"].indexOf(I)>-1)return new Date((I==="X"?1e3:1)*M);var W=y(I)(M),Y=W.year,J=W.month,Ae=W.day,ve=W.hours,de=W.minutes,ie=W.seconds,Z=W.milliseconds,re=W.zone,pe=W.week,be=new Date,he=Ae||(Y||J?1:be.getDate()),Xe=Y||be.getFullYear(),De=0;Y&&!J||(De=J>0?J-1:be.getMonth());var Ve,bn=ve||0,hn=de||0,qn=ie||0,ln=Z||0;return re?new Date(Date.UTC(Xe,De,he,bn,hn,qn,ln+60*re.offset*1e3)):N?new Date(Date.UTC(Xe,De,he,bn,hn,qn,ln)):(Ve=new Date(Xe,De,he,bn,hn,qn,ln),pe&&(Ve=U(Ve).week(pe).toDate()),Ve)}catch{return new Date("")}}(G,B,V,h),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),P&&G!=this.format(B)&&(this.$d=new Date("")),o={}}else if(B instanceof Array)for(var w=B.length,A=1;A<=w;A+=1){z[1]=B[A-1];var F=h.apply(this,z);if(F.isValid()){this.$d=F.$d,this.$L=F.$L,this.init();break}A===w&&(this.$d=new Date(""))}else x.call(this,_)}}})}(Bt)),Bt.exports}var zd=Hd();const Wd=Kd(zd),Yd="_textarea_1snk6_1",Jd="_readOnlyField_1snk6_7",pa={textarea:Yd,readOnlyField:Jd},Xd=e=>e!=null&&e!=="",Zd=({label:e,value:t,isEdited:r=!1,type:n,hideLabel:a,size:i})=>Xd(t)?le.jsxs(Ge,{gap:"1",children:[e&&!a&&le.jsx(vn,{size:i,children:e}),le.jsxs(nn,{gap:"2",align:"center",wrap:!1,children:[le.jsx(Jt,{className:n==="textarea"?pa.textarea:pa.readOnlyField,size:i,children:t}),r&&le.jsx(Ai,{})]})]}):null;ze.extend(Wd);const Qd="_hideRadioLabels_1u3xf_1",ec={hideRadioLabels:Qd},nc=({label:e,description:t,validate:r=[],radios:n,onChange:a,isReadOnly:i=!1,isHorizontal:l=!1,parse:s=b=>b,isTrueOrFalseSelection:o=!1,hideLegend:u=!1,hideRadioLabels:d=!1,isEdited:c=!1,size:v="small",...m})=>{const{name:b,control:y,disabled:p}=m,{formState:{errors:R}}=yn(),{field:h}=wi({name:b,control:y,rules:{validate:f.useMemo(()=>Ni(r),[r])}}),O=o?_=>_==="true":s,x=le.jsxs(nn,{justify:"center",gap:"2",children:[e,i&&c&&le.jsx(Ai,{})]});return le.jsxs(Ku,{name:b,value:h.value!==void 0?h.value:null,onChange:_=>{a&&a(_),h.onChange(_)},size:v,legend:x,description:t,error:Ii(R,b),className:d?ec.hideRadioLabels:"",hideLegend:u,children:[!l&&n.map(_=>le.jsxs(f.Fragment,{children:[le.jsx(Gr,{size:v,value:O(_.value),disabled:_.disabled||p||i,children:_.label}),h.value===O(_.value)&&_.element]},_.value)),l&&le.jsxs(le.Fragment,{children:[le.jsx(nn,{gap:"4",children:n.map(_=>le.jsx(Gr,{size:v,value:O(_.value),disabled:_.disabled||p||i,children:_.label},_.value))}),n.filter(_=>h.value===O(_.value)).map(_=>le.jsx(f.Fragment,{children:_.element},_.value))]})]})},tc="_textAreaFieldWithBadges_bdz0b_1",rc="_etikettWrapper_bdz0b_4",ya={textAreaFieldWithBadges:tc,etikettWrapper:rc},Kt=({name:e,control:t,label:r,readOnly:n,maxLength:a,badges:i,validate:l=[],parse:s=m=>m,className:o,description:u,isEdited:d,size:c="small",...v})=>{const{formState:{errors:m}}=yn(),{field:b}=wi({name:e,control:t,rules:{validate:f.useMemo(()=>Ni(l),[l])}});return n?le.jsx(Zd,{size:c,label:r,value:b.value,type:"textarea",isEdited:d,hideLabel:v.hideLabel}):le.jsxs("div",{className:i?ya.textAreaFieldWithBadges:null,children:[i&&le.jsx("div",{className:ya.etikettWrapper,children:i.map(({type:y,titleText:p})=>le.jsx(Mu,{variant:y,size:"small",children:p},p))}),le.jsx(Yu,{size:c,label:r,description:u,className:o,autoComplete:"off",...b,onChange:y=>b.onChange(y.currentTarget.value!==""?s(y.currentTarget.value):null),value:b.value?b.value:"",error:Ii(m,e),maxLength:a,...v})]})},ac=({formMethods:e,onSubmit:t,children:r,className:n,setDataOnUnmount:a})=>{const{handleSubmit:i,getValues:l}=e;return f.useEffect(()=>()=>{a&&a(l())},[]),le.jsx(Zu,{...e,children:le.jsx("form",{className:n,onSubmit:t?i(s=>t(s)):void 0,children:r})})};function Li(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $t={exports:{}},ic=$t.exports,ba;function lc(){return ba||(ba=1,function(e,t){(function(r,n){e.exports=n()})(ic,function(){return function(r,n){n.prototype.isSameOrAfter=function(a,i){return this.isSame(a,i)||this.isAfter(a,i)}}})}($t)),$t.exports}var sc=lc();const oc=Li(sc);var Gt={exports:{}},uc=Gt.exports,ha;function dc(){return ha||(ha=1,function(e,t){(function(r,n){e.exports=n()})(uc,function(){return function(r,n){n.prototype.isSameOrBefore=function(a,i){return this.isSame(a,i)||this.isBefore(a,i)}}})}(Gt)),Gt.exports}var cc=dc();const fc=Li(cc),mc="Dato må være før eller lik {limit}",gc="Dato må være etter eller lik {limit}",vc="Perioder kan ikke overlappe i tid",pc="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",yc="Dato må være lik {value}",bc="Dato må skrives slik: dd.mm.åååå",hc="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",kc="Tallet kan ikke inneholde mer enn to desimaler",Ec="Tallet kan ikke ha desimaler",Rc="Feltet kan kun inneholde tall",wc="Ugyldig fødselsnummer",Oc="Feltet må være et fødselsnummer (11 siffer)",_c="Ugyldig organisasjonsnummer.",Sc="Ugyldig organisasjonsnummer eller fødselsnummer",Tc="Startdato må være før eller lik sluttdato",xc="Periode er utenfor opptjeningsperioden",Pc="Ugyldig saksnummer eller fødselsnummer",jc="Feltet inneholder ugyldige tegn: {text}",Ac="Feltet inneholder en ugyldig verdi: {value}",Nc="Feltet kan ikke inneholde mellomrom",Ic="Feltet må fylles ut",Lc="Du kan skrive maksimalt {length} tegn",Mc="Du må skrive minst {length} tegn",Fc="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",Dc="Feltet må være mindre eller lik {length}",Vc="Feltet må være større eller lik {length}",qc="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",Cc={DateNotBeforeOrEqual:mc,DateNotAfterOrEqual:gc,DateRangesOverlapping:vc,DateRangesOverlappingPeriodTypes:pc,DatesNotEqual:yc,InvalidDate:bc,InvalidDatesInPeriod:hc,InvalidDecimal:kc,InvalidInteger:Ec,InvalidNumber:Rc,InvalidFodselsnr:wc,InvalidFodselsnrFormat:Oc,InvalidOrgnr:_c,InvalidOrgnrOrFodselsnr:Sc,InvalidPeriod:Tc,InvalidPeriodRange:xc,InvalidSaksnrOrFodselsnrFormat:Pc,InvalidText:jc,InvalidValue:Ac,IllegalWhiteSpace:Nc,IsRequired:Ic,MaxLength:Lc,MinLength:Mc,MaxLengthOrFodselsnr:Fc,MaxValue:Dc,MinValue:Vc,SammeFodselsnrSomSoker:qc},{formatMessage:yt}=an(Cc),Bc=e=>yt({id:"InvalidText"},{text:e}),Kc=()=>yt({id:"IsRequired"}),$c=e=>yt({id:"MaxLength"},{length:e}),Gc=e=>yt({id:"MinLength"},{length:e}),Uc=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Hc=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,vr=e=>e==null||e.toString().trim().length===0;ze.extend(oc);ze.extend(fc);const Jn=e=>vr(e)?Kc():void 0,Mi=e=>t=>vr(t)||t.toString().trim().length>=e?null:Gc(e),Fi=e=>t=>vr(t)||t.toString().trim().length<=e?null:$c(e),Ut=e=>{if(!Uc.test(e)){const t=e.replace(Hc,"");return Bc(t.replace(/[\t]/g,"Tabulatortegn"))}return null},zc="_readMore_mcbzv_1",Wc={readMore:zc},Yc=Mi(3),Jc=Fi(1500),Xc=e=>({kode:oe.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:e.begrunnelseEtterbetaling}),Zc=e=>{if(!(!e||e.definisjon!==oe.KONTROLLER_STOR_ETTERBETALING_SØKER))return{begrunnelseEtterbetaling:e.begrunnelse??""}},Di=({readOnly:e,aksjonspunkt:t})=>{const r=Wt();return!t||t.definisjon!==oe.KONTROLLER_STOR_ETTERBETALING_SØKER?null:j.jsxs(Ge,{gap:"4",children:[j.jsx(pu,{header:j.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreTittel"}),className:Wc.readMore,children:j.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreInnhold"})}),j.jsx(Kt,{name:"begrunnelseEtterbetaling",label:r.formatMessage({id:"Simulering.Etterbetaling.Vurdering"}),validate:[Jn,Yc,Jc,Ut],maxLength:1500,size:"medium",readOnly:e})]})};Di.__docgenInfo={description:"",methods:[],displayName:"EtterbetalingSøkerForm",props:{aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Qc="_summaryTitle_1uhqn_1",ef="_infoSummary_1uhqn_5",nf="_ingenPerioder_1uhqn_13",tf="_number_1uhqn_17",Sn={summaryTitle:Qc,infoSummary:ef,ingenPerioder:nf,number:tf},Vi=({fom:e,tom:t,feilutbetaling:r,etterbetaling:n,inntrekk:a,ingenPerioderMedAvvik:i})=>j.jsxs(Ge,{gap:"4",children:[j.jsx(ye,{size:"small",className:Sn.summaryTitle,children:j.jsx(ae,{id:"Simulering.bruker"})}),j.jsxs("div",{className:Sn.infoSummary,children:[i&&j.jsx("div",{className:Sn.ingenPerioder,children:j.jsx(ae,{id:"Simulering.ingenPerioder"})}),!i&&j.jsxs(Ge,{gap:"4",children:[j.jsx(vn,{size:"small",children:Ji(e,t)}),j.jsxs(nn,{gap:"4",children:[j.jsxs(ye,{size:"small",children:[j.jsx(ae,{id:"Simulering.etterbetaling"}),":"]}),j.jsx(ye,{size:"small",children:j.jsx(Nt,{beløp:n})})]}),j.jsxs(nn,{gap:"4",children:[j.jsxs(ye,{size:"small",children:[j.jsx(ae,{id:"Simulering.tilbakekreving"}),":"]}),j.jsx(ye,{weight:"semibold",size:"small",className:Sn.number,children:j.jsx(Nt,{beløp:r,rød:r<0})})]}),a!=null&&j.jsxs(nn,{gap:"4",children:[j.jsxs(ye,{size:"small",children:[j.jsx(ae,{id:"Simulering.inntrekk"}),":"]}),j.jsx(ye,{weight:"semibold",size:"small",className:Sn.number,children:j.jsx(Nt,{beløp:a,rød:a<0})})]})]})]})]});Vi.__docgenInfo={description:"Simulering oppsummering",methods:[],displayName:"SimuleringSummary",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},etterbetaling:{required:!0,tsType:{name:"number"},description:""},inntrekk:{required:!1,tsType:{name:"number"},description:""},ingenPerioderMedAvvik:{required:!1,tsType:{name:"boolean"},description:""}}};var It={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ka;function rf(){return ka||(ka=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(i=a(i,n.call(this,s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var s in i)t.call(i,s)&&i[s]&&(l=a(l,this&&this[s]||s));return l}function a(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(It)),It.exports}var af=rf();const lf=Va(af),sf="_invisibleButton_p9vj5_1",of={invisibleButton:sf},uf=e=>e?"Simulering.headerText.VisFærreDetaljer":"Simulering.headerText.VisFlereDetaljer",qi=({toggleDetails:e,showDetails:t,mottakerIndex:r})=>j.jsxs("button",{type:"button",className:of.invisibleButton,onClick:()=>e(r),children:[j.jsx(ae,{id:uf(t)}),t?j.jsx(Ol,{}):j.jsx(Zt,{})]});qi.__docgenInfo={description:"",methods:[],displayName:"CollapseButton",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"boolean"},description:""},mottakerIndex:{required:!0,tsType:{name:"number"},description:""}}};const df="_tableWrapper_19z5a_1",cf="_simuleringTable_19z5a_5",ff="_rodTekst_19z5a_5",mf="_lastColumn_19z5a_9",gf="_nextPeriod_19z5a_17",vf="_normalPeriod_19z5a_23",Ht={tableWrapper:df,simuleringTable:cf,rodTekst:ff,lastColumn:mf,nextPeriod:gf,normalPeriod:vf},Ci=lf.bind(Ht),Pn={DIFFERANSE:"differanse",INNTREKKNESTEMÅNED:"inntrekkNesteMåned"},Ea=(e,t)=>`${e.month}${e.year}`===(t?ze(t).format("MMMMYY"):!1),pf=e=>e.some(t=>t.rader.length>1),Ra=(e,t)=>!!e.rader.find(n=>n.feltnavn===Pn.DIFFERANSE)&&!t,yf=(e,t)=>e&&!t,wa=(e,t,r,n)=>{const a=`${ze(r).format("MMMMYY")}`;return t.map(l=>e.find(o=>ze(o.periode.tom).format("MMMMYY").toLowerCase()===`${l.month}${l.year}`)||{måned:`${l.month}${l.year}`,beløp:null}).map((l,s)=>j.jsx(fe.DataCell,{style:{borderBottom:n},className:Ci({rodTekst:!l.beløp||l.beløp<0,lastColumn:"måned"in l?l.måned===a:ze(l.periode.tom).format("MMMMYY")===a}),children:l.beløp?Ba(l.beløp):"-"},`columnIndex${s+1}`))},bf=(e,t)=>{const r=e.mottakerIdentifikator?t[e.mottakerIdentifikator]:void 0;return r?`${r.navn} (${e.mottakerNummer})`:`${e.mottakerNummer}`},hf=(e,t)=>e.mottakerType===jn.ARBG||e.mottakerType===jn.ARBGP?j.jsx(Ua,{size:"xsmall",children:bf(e,t)}):null,kf=(e,t,r)=>e?t.length>1?r.filter(n=>n.feltnavn!==Pn.INNTREKKNESTEMÅNED):[]:r,Ef=(e,t)=>!!(e&&t===jn.BRUKER),Rf=(e,t)=>e||t,wf=(e,t,r)=>{const n=Ef(e,r.mottakerType)?ze(r.nesteUtbPeriode.tom).subtract(1,"months").format():Rf(t,r.nesteUtbPeriode.fom);return Xi(n,r.nesteUtbPeriode.tom)},Bi=({simuleringResultat:e,toggleDetails:t,showDetails:r,ingenPerioderMedAvvik:n,arbeidsgiverOpplysningerPerId:a})=>j.jsx(j.Fragment,{children:e.perioderPerMottaker.map((i,l)=>{const s=wf(n,e.periode.fom,i),o=i.nesteUtbPeriode.tom,u=r.find(c=>c.id===l),d=kf(n,i.resultatPerFagområde,i.resultatOgMotregningRader);return j.jsxs("div",{className:Ht.tableWrapper,children:[hf(i,a),j.jsxs(fe,{className:Ht.simuleringTable,children:[j.jsx(fe.Header,{children:j.jsxs(fe.Row,{children:[pf(i.resultatPerFagområde)?j.jsx(fe.HeaderCell,{scope:"col",children:j.jsx(qi,{toggleDetails:t,mottakerIndex:l,showDetails:u?u.show:!1},`collapseButton-${s.length}`)}):j.jsx(fe.HeaderCell,{}),s.map(c=>j.jsx(fe.HeaderCell,{scope:"col",className:Ci({nextPeriod:Ea(c,o),normalPeriod:!Ea(c,o)}),children:j.jsx(ae,{id:`Simulering.headerText.${c.month}`})},`${c.month}-${c.year}`))]})}),j.jsxs(fe.Body,{children:[i.resultatPerFagområde.map((c,v)=>c.rader.filter(m=>{const b=m.feltnavn===Pn.DIFFERANSE,y=Ra(c,b);return!yf(y,u?u.show:!1)}).map((m,b)=>{const y=m.feltnavn===Pn.DIFFERANSE,R=Ra(c,y)?"dashed 1px var(--a-gray-200)":"solid 1px var(--a-gray-200)";return j.jsxs(fe.Row,{children:[j.jsx(fe.DataCell,{style:y||n?{fontWeight:"bold",borderBottom:R}:{borderBottom:R},children:j.jsx(ae,{id:`Simulering.${c.fagOmrådeKode}.${m.feltnavn}`})}),wa(m.resultaterPerMåned,s,o,R)]},`rowIndex${v+1}${b+1}`)})),d.map((c,v)=>j.jsxs(fe.Row,{children:[j.jsx(fe.DataCell,{style:c.feltnavn!==Pn.INNTREKKNESTEMÅNED?{fontWeight:"bold"}:{},children:j.jsx(ae,{id:`Simulering.${c.feltnavn}`})}),wa(c.resultaterPerMåned,s,o)]},`rowIndex${v+1}`))]})]},`tableIndex${l+1}`)]},`tableIndex${l+1}`)})});Bi.__docgenInfo={description:"",methods:[],displayName:"SimuleringTable",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Of="_helpTextImage_vrhwa_1",_f="_varsel_vrhwa_17",Sf="_bold_vrhwa_23",Lt={helpTextImage:Of,varsel:_f,bold:Sf},Oa=Mi(3),_a=Fi(1500),pr="IKKE_SEND",Tf=e=>{const{videreBehandling:t,varseltekst:r,begrunnelse:n}=e;return t!=null&&t.endsWith(pr)?{kode:oe.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:We.TILBAKEKR_OPPRETT}:{kode:oe.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:t,varseltekst:r}},xf=(e,t)=>!e||!t?void 0:{videreBehandling:!t.varseltekst&&t.videreBehandling===We.TILBAKEKR_OPPRETT?t.videreBehandling+pr:t.videreBehandling,varseltekst:t.varseltekst,begrunnelse:e.begrunnelse??""},Ki=({readOnly:e,språkkode:t,previewCallback:r,aksjonspunkt:n,fagsak:a})=>{const i=Wt(),{watch:l,control:s}=yn(),o=l("varseltekst"),u=a.fagsakYtelseType===Zi.FORELDREPENGER,d=c=>{r({mottaker:"",fritekst:o??" "}),c.preventDefault()};return!n||n.definisjon!==oe.VURDER_FEILUTBETALING?null:j.jsxs(Ge,{gap:"10",align:"start",children:[j.jsx(Kt,{name:"begrunnelse",control:s,label:i.formatMessage({id:"Simulering.vurdering"}),validate:[Jn,Oa,_a,Ut],maxLength:1500,readOnly:e}),j.jsx(nc,{name:"videreBehandling",control:s,label:j.jsx(ae,{id:"Simulering.videreBehandling"}),validate:[Jn],isReadOnly:e,radios:[{value:We.TILBAKEKR_OPPRETT,label:j.jsx(ae,{id:"Simulering.gjennomfør"}),element:j.jsx("div",{className:Lt.varsel,children:j.jsx(Od,{alignOffset:20,children:j.jsxs(Ge,{gap:"4",children:[j.jsxs(nn,{gap:"2",children:[j.jsx(ye,{size:"small",className:Lt.bold,children:j.jsx(ae,{id:"Simulering.varseltekst"})}),j.jsx(pi,{content:u?i.formatMessage({id:"Simulering.HjelpetekstForeldrepenger"}):i.formatMessage({id:"Simulering.HjelpetekstEngangsstonad"}),children:j.jsx(Il,{className:Lt.helpTextImage})})]}),j.jsx(Kt,{name:"varseltekst",control:s,label:i.formatMessage({id:"Simulering.fritekst"}),validate:[Jn,Oa,_a,Ut],maxLength:1500,readOnly:e,parse:el,badges:[{type:"info",titleText:Qi(t)}]}),!e&&j.jsx(mu,{href:"#",onClick:d,children:j.jsx(ae,{id:"Messages.PreviewText"})})]})})})},{value:`${We.TILBAKEKR_OPPRETT}${pr}`,label:j.jsx(ae,{id:"Simulering.OpprettMenIkkeSendVarsel"})},{value:We.TILBAKEKR_IGNORER,label:j.jsx(ae,{id:"Simulering.avvent"})}]})]})};Ki.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevSøkerForm",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const ot=(e,t)=>e.find(r=>r.definisjon===t),Pf=(e,t)=>r=>{const n=e.findIndex(i=>i.id===r);let a=[];if(n!==-1){const i={id:r,show:!e[n].show};a=[...e.slice(0,n),i,...e.slice(n+1,e.length-1)]}else a=e.concat({id:r,show:!0});t(a)},jf=(e,t)=>{const r=[];return dn(oe.VURDER_FEILUTBETALING,t)&&"videreBehandling"in e&&r.push(Tf(e)),dn(oe.KONTROLLER_STOR_ETTERBETALING_SØKER,t)&&"begrunnelseEtterbetaling"in e&&r.push(Xc(e)),r},Af=(e,t)=>{if(e.length!==0)return{...xf(ot(e,oe.VURDER_FEILUTBETALING),t),...Zc(ot(e,oe.KONTROLLER_STOR_ETTERBETALING_SØKER))}},Nf=e=>{const t=[];return dn(oe.VURDER_FEILUTBETALING,e)&&t.push(j.jsx(ae,{id:"Simulering.AksjonspunktHelpText.5084"},"vurderFeilutbetaling")),dn(oe.KONTROLLER_STOR_ETTERBETALING_SØKER,e)&&t.push(j.jsx(ae,{id:"Simulering.Etterbetaling.Tittel"},"kontrollerFeilutbetaling")),t},$i=({simuleringResultat:e,previewFptilbakeCallback:t,tilbakekrevingvalg:r,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:a,submitCallback:i,isReadOnly:l,harÅpneAksjonspunkter:s,fagsak:o,behandling:u}=nl(),{mellomlagretFormData:d,setMellomlagretFormData:c}=tl(),v=vd({defaultValues:d??Af(a,r)}),{formState:m}=v,[b,y]=f.useState([]),p=r!==void 0&&r.videreBehandling===We.TILBAKEKR_OPPDATER,R=Pf(b,y),h=e==null?void 0:e.simuleringResultat,O=dn(oe.VURDER_FEILUTBETALING,a)||dn(oe.KONTROLLER_STOR_ETTERBETALING_SØKER,a),x=s?Nf(a):[];return j.jsxs(Ge,{gap:"8",children:[j.jsx(Ua,{size:"small",children:j.jsx(ae,{id:"Simulering.Title"})}),h&&j.jsxs(j.Fragment,{children:[x.length>0&&x.map(_=>j.jsx("div",{children:j.jsx(hd,{children:[_]})},_.key)),j.jsx(Vi,{fom:h.periode.fom,tom:h.periode.tom,feilutbetaling:h.sumFeilutbetaling,etterbetaling:h.sumEtterbetaling,inntrekk:h.sumInntrekk,ingenPerioderMedAvvik:h.ingenPerioderMedAvvik}),j.jsx(Bi,{arbeidsgiverOpplysningerPerId:n,showDetails:b,toggleDetails:R,simuleringResultat:h,ingenPerioderMedAvvik:h.ingenPerioderMedAvvik}),p&&j.jsx(vn,{size:"small",children:j.jsx(ae,{id:"Simulering.ApenTilbakekrevingsbehandling"})})]}),!e&&j.jsx(ae,{id:"Simulering.ingenData"}),O&&j.jsx(ac,{formMethods:v,onSubmit:_=>i(jf(_,a)),setDataOnUnmount:c,children:j.jsxs(Ge,{gap:"4",children:[j.jsx(Ki,{aksjonspunkt:ot(a,oe.VURDER_FEILUTBETALING),fagsak:o,previewCallback:t,readOnly:l,språkkode:u.språkkode}),j.jsx(Di,{readOnly:l,aksjonspunkt:ot(a,oe.KONTROLLER_STOR_ETTERBETALING_SØKER)}),j.jsx("div",{children:j.jsx(si,{size:"small",variant:"primary",disabled:!m.isDirty||m.isSubmitting||l,loading:m.isSubmitting,children:j.jsx(ae,{id:"SubmitButton.ConfirmInformation"})})})]})})]})};$i.__docgenInfo={description:"",methods:[],displayName:"SimuleringPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
}>`},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const If={"Simulering.Title":"Simulering","Simulering.FP.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FP.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FP.differanse":"Foreldrepenger avvik","Simulering.FPREF.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FPREF.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FPREF.differanse":"Foreldrepenger avvik","Simulering.OM.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OM.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OM.differanse":"Omsorgspenger avvik","Simulering.OMREF.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OMREF.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OMREF.differanse":"Omsorgspenger avvik","Simulering.OOP.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOP.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOP.differanse":"Pleiepenger avvik","Simulering.OOPREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOPREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOPREF.differanse":"Pleiepenger avvik","Simulering.OPP.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPP.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPP.differanse":"Opplæringspenger avvik","Simulering.OPPREF.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPPREF.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPPREF.differanse":"Opplæringspenger avvik","Simulering.PB.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PB.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PB.differanse":"Pleiepenger avvik","Simulering.PBREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PBREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PBREF.differanse":"Pleiepenger avvik","Simulering.PN.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PN.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PN.differanse":"Pleiepenger avvik","Simulering.PNREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PNREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PNREF.differanse":"Pleiepenger avvik","Simulering.REFUTG.nyttBeløp":"Engangstønad nytt beløp","Simulering.REFUTG.tidligereUtbetalt":"Engangstønad tidligere utbetalt","Simulering.REFUTG.differanse":"Engangstønad avvik","Simulering.SP.nyttBeløp":"Sykepenger nytt beløp","Simulering.SP.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SP.differanse":"Sykepenger avvik","Simulering.SPREF.nyttBeløp":"Sykepenger nytt beløp","Simulering.SPREF.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SPREF.differanse":"Sykepenger avvik","Simulering.SVP.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVP.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVP.differanse":"Svangerskapspenger avvik","Simulering.SVPREF.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVPREF.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVPREF.differanse":"Svangerskapspenger avvik","Simulering.resultatEtterMotregning":"Resultat etter motregning mellom ytelser","Simulering.inntrekk":"Inntrekk","Simulering.inntrekkNesteMåned":"Inntrekk i neste måned","Simulering.tilbakekreving":"Feilutbetaling","Simulering.etterbetaling":"Etterbetaling","Simulering.resultat":"Resultat","Simulering.avregnetBeløp":"Avregnet beløp","Simulering.headerText.VisFærreDetaljer":"Vis færre detaljer","Simulering.headerText.VisFlereDetaljer":"Vis flere detaljer","Simulering.headerText.januar":"Jan","Simulering.headerText.februar":"Feb","Simulering.headerText.mars":"Mars","Simulering.headerText.april":"Apr","Simulering.headerText.mai":"Mai","Simulering.headerText.juni":"Jun","Simulering.headerText.juli":"Jul","Simulering.headerText.august":"Aug","Simulering.headerText.september":"Sep","Simulering.headerText.oktober":"Okt","Simulering.headerText.november":"Nov","Simulering.headerText.desember":"Des","Simulering.ingenData":"Ingen informasjon om simulering mottatt fra økonomiløsningen.","Simulering.ingenPerioder":"Ingen periode med avvik","Simulering.AksjonspunktHelpText.5084":"Vurder videre behandling av tilbakekreving","Simulering.vurdering":"Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre","Simulering.videreBehandling":"Fastsett videre behandling","Simulering.gjennomfør":"Opprett tilbakekreving, send varsel","Simulering.OpprettMenIkkeSendVarsel":"Opprett tilbakekreving, ikke send varsel","Simulering.Opprett":"Opprett tilbakekreving","Simulering.avvent":"Avvent samordning, ingen tilbakekreving","Simulering.formAlternativ.ja":"Ja","Simulering.formAlternativ.nei":"Nei","Simulering.bruker":"Bruker","Simulering.varseltekst":"Send varsel om tilbakekreving","Simulering.fritekst":"Fritekst i varselet","Simulering.HjelpetekstForeldrepenger":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav. Eksempel på tekst: «Vi mottok melding fra deg [dato]om at du hadde jobbet heltid. Du kan ikke jobbe og motta foreldrepenger samtidig. Da vi mottok meldingen fra deg, var det allerede utbetalt foreldrenger for perioden du har jobbet.","Simulering.HjelpetekstEngangsstonad":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav.","Simulering.ApenTilbakekrevingsbehandling":"Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.","Simulering.Etterbetaling.Tittel":"Ny inntektsmelding vil føre til en høy etterbetaling til bruker i en tidligere innvilget periode. Kontroller om dette er riktig","Simulering.Etterbetaling.ReadMoreTittel":"Dette bør undersøkes rundt etterbetalingen","Simulering.Etterbetaling.ReadMoreInnhold":"Saken stopper i simulering fordi arbeidsgiver har endret sitt refusjonskrav, eller har endret fra refusjon til direkte utbetaling i en periode som allerede har blitt utbetalt til bruker. I tillegg er etterbetalingen høy. Du må kontrollerer om dette er riktig. Dette kan gjøres ved å kontakte arbeidsgiver. Er det feil, må de sende inn ny inntektsmelding. Får du ikke tak i arbeidsgiver, kan du kontakte søker og høre om de kan spørre arbeidsgiveren sin.","Simulering.Etterbetaling.Vurdering":"Begrunn hvorfor du går videre med denne behandlingen.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","Messages.PreviewText":"Forhåndsvis varselbrev"},Lf=an(If),zt=e=>j.jsx(rl,{value:Lf,children:j.jsx($i,{...e})});zt.__docgenInfo={description:"",methods:[],displayName:"SimuleringProsessIndex",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
}>`},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const{action:Mf}=__STORYBOOK_MODULE_ACTIONS__,Ff={123:{erPrivatPerson:!1,identifikator:"123",referanse:"123",navn:"test"}},Df={simuleringResultat:{periode:{fom:"2019-01-01",tom:"2019-03-31"},sumEtterbetaling:0,sumFeilutbetaling:-49863,sumInntrekk:-10899,ingenPerioderMedAvvik:!1,perioderPerMottaker:[{mottakerType:jn.ARBG,mottakerIdentifikator:"123",mottakerNummer:"test",resultatPerFagområde:[{fagOmrådeKode:"FP",rader:[{feltnavn:"nyttBeløp",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:52619}]},{feltnavn:"tidligereUtbetalt",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:61795}]},{feltnavn:"differanse",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-9176}]}]}],resultatOgMotregningRader:[{feltnavn:"inntrekkNesteMåned",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:0}]},{feltnavn:"resultat",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-26486}]}],nesteUtbPeriode:{fom:"2019-10-01",tom:"2019-10-31"}}]},slåttAvInntrekk:!1},Bf={title:"prosess/prosess-simulering",component:zt,decorators:[al,il],args:{arbeidsgiverOpplysningerPerId:Ff,simuleringResultat:Df,previewFptilbakeCallback:Mf("button-click")},render:e=>j.jsx(zt,{...e})},Gn={args:{aksjonspunkterForPanel:[{definisjon:oe.VURDER_FEILUTBETALING,begrunnelse:null,status:Yt.OPPRETTET}]}},Un={args:{aksjonspunkterForPanel:[{definisjon:oe.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:null,status:Yt.OPPRETTET}]}},Hn={args:{aksjonspunkterForPanel:[{definisjon:oe.VURDER_FEILUTBETALING,begrunnelse:null,status:Yt.OPPRETTET},{definisjon:oe.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:null}]}},zn={args:{aksjonspunkterForPanel:[],tilbakekrevingvalg:{videreBehandling:We.TILBAKEKR_OPPDATER,varseltekst:"varsel-eksempel"}}};var Sa,Ta,xa;Gn.parameters={...Gn.parameters,docs:{...(Sa=Gn.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse: null,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...(xa=(Ta=Gn.parameters)==null?void 0:Ta.docs)==null?void 0:xa.source}}};var Pa,ja,Aa;Un.parameters={...Un.parameters,docs:{...(Pa=Un.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      begrunnelse: null,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...(Aa=(ja=Un.parameters)==null?void 0:ja.docs)==null?void 0:Aa.source}}};var Na,Ia,La;Hn.parameters={...Hn.parameters,docs:{...(Na=Hn.parameters)==null?void 0:Na.docs,source:{originalSource:`{
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
}`,...(La=(Ia=Hn.parameters)==null?void 0:Ia.docs)==null?void 0:La.source}}};var Ma,Fa,Da;zn.parameters={...zn.parameters,docs:{...(Ma=zn.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    tilbakekrevingvalg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
      varseltekst: 'varsel-eksempel'
    } as TilbakekrevingValg
  }
}`,...(Da=(Fa=zn.parameters)==null?void 0:Fa.docs)==null?void 0:Da.source}}};const Kf=["AksjonspunktVurderFeilutbetaling","AksjonspunktKontrollerEtterbetaling","AksjonspunktVurderFeilutbetalingOgEtterbetaling","SimuleringspanelUtenAksjonspunkt"];export{Un as AksjonspunktKontrollerEtterbetaling,Gn as AksjonspunktVurderFeilutbetaling,Hn as AksjonspunktVurderFeilutbetalingOgEtterbetaling,zn as SimuleringspanelUtenAksjonspunkt,Kf as __namedExportsOrder,Bf as default};
