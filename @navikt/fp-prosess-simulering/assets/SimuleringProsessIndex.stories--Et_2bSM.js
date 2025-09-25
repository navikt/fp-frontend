import{g as Jt,r as p,u as Xt,_ as br,s as Rr,c as gn,a as X,R as g,b as Dl,d as xn,T as xl,S as ct,e as Aa,f as Pa,w as wa,h as pn,i as un,j as P,t as Zn,k as Ia,o as Fa,N as jt,Q as Vl,Y as Kl,P as jl,A as Ml,l as Bl,m as Gl,n as ql,p as Ul,q as Cl,v as Zt}from"./iframe-CSGN3qOb.js";import{r as Hl}from"./index-D7GxUig9.js";import"./preload-helper-PPVm8Dsz.js";var La=Hl();const Mt=Jt(La);function $l(e,r){var t=e.values,n=br(e,["values"]),a=r.values,l=br(r,["values"]);return Rr(a,t)&&Rr(n,l)}function Da(e){var r=Xt(),t=r.formatMessage,n=r.textComponent,a=n===void 0?p.Fragment:n,l=e.id,i=e.description,s=e.defaultMessage,o=e.values,d=e.children,u=e.tagName,m=u===void 0?a:u,v=e.ignoreTag,c={id:l,description:i,defaultMessage:s},E=t(c,o,{ignoreTag:v});return typeof d=="function"?d(Array.isArray(E)?E:[E]):m?p.createElement(m,null,E):p.createElement(p.Fragment,null,E)}Da.displayName="FormattedMessage";var ae=p.memo(Da,$l);ae.displayName="MemoizedFormattedMessage";var se=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(se||{});const cn=(e,r)=>r.some(t=>t.definisjon===e);var Ln=(e=>(e.ARBG="ARBG_ORG",e.ARBGP="ARBG_PRIV",e.BRUKER="BRUKER",e))(Ln||{}),Ce=(e=>(e.TILBAKEKR_OPPRETT="TILBAKEKR_OPPRETT",e.TILBAKEKR_IGNORER="TILBAKEKR_IGNORER",e.TILBAKEKR_INNTREKK="TILBAKEKR_INNTREKK",e.TILBAKEKR_OPPDATER="TILBAKEKR_OPPDATER",e))(Ce||{});const En=e=>gn({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Yl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Qt=p.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:l,truncate:i,weight:s="regular",align:o,visuallyHidden:d,textColor:u}=e,m=Yl(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=X();return g.createElement(a,Object.assign({},m,{ref:r,className:v(t,"navds-body-long",`navds-body-long--${n}`,En({spacing:l,truncate:i,weight:s,align:o,visuallyHidden:d,textColor:u}))}))});var zl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fe=p.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:l,truncate:i,weight:s="regular",align:o,visuallyHidden:d,textColor:u}=e,m=zl(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=X();return g.createElement(a,Object.assign({},m,{ref:r,className:v(t,"navds-body-short",`navds-body-short--${n}`,En({spacing:l,truncate:i,weight:s,align:o,visuallyHidden:d,textColor:u}))}))});var Wl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Jl=p.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:a,uppercase:l,as:i="p",truncate:s,weight:o="regular",align:d,visuallyHidden:u,textColor:m}=e,v=Wl(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=X();return g.createElement(i,Object.assign({},v,{ref:r,className:c(t,"navds-detail",En({spacing:a,truncate:s,weight:o,align:d,visuallyHidden:u,textColor:m,uppercase:l}),{"navds-detail--small":n==="small"})}))});var Xl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const xa=p.forwardRef((e,r)=>{var{children:t,className:n,size:a,spacing:l,as:i="p",showIcon:s=!1}=e,o=Xl(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=X();return g.createElement(i,Object.assign({},o,{ref:r,className:d("navds-error-message","navds-label",n,En({spacing:l}),{"navds-label--small":a==="small","navds-error-message--show-icon":s})}),s&&g.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},g.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var Zl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Va=p.forwardRef((e,r)=>{var{level:t="1",size:n,className:a,as:l,spacing:i,align:s,visuallyHidden:o,textColor:d}=e,u=Zl(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:m}=X(),v=l??`h${t}`;return g.createElement(v,Object.assign({},u,{ref:r,className:m(a,"navds-heading",`navds-heading--${n}`,En({spacing:i,align:s,visuallyHidden:o,textColor:d}))}))});var Ql=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};p.forwardRef((e,r)=>{var{className:t,spacing:n,as:a="p"}=e,l=Ql(e,["className","spacing","as"]);const{cn:i}=X();return g.createElement(a,Object.assign({},l,{ref:r,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var ei=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const _n=p.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="label",spacing:l,visuallyHidden:i,textColor:s}=e,o=ei(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=X();return g.createElement(a,Object.assign({},o,{ref:r,className:d(t,"navds-label",En({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":n==="small"})}))});function Ka(e,r=166,t=!1){let n;function a(...l){const i=()=>{n=void 0,e.apply(this,l)};!n&&t&&i(),clearTimeout(n),n=setTimeout(i,r)}return a.clear=()=>{clearTimeout(n)},a}function xe(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}const hr=globalThis?.document?p.useLayoutEffect:()=>{};let Tr=0;function ni(e){const[r,t]=p.useState(e),n=e||r;return p.useEffect(()=>{r==null&&(Tr+=1,t(`aksel-id-${Tr}`))},[r]),n}const kr=g.useId;function Je(e){var r;if(kr!==void 0){const t=kr();return e??t.replace(/(:)/g,"")}return(r=ni(e))!==null&&r!==void 0?r:""}function Sr(e,r=[]){const t=p.useRef(e);return p.useEffect(()=>{t.current=e}),p.useCallback(((...n)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...n)}),r)}function er({value:e,defaultValue:r,onChange:t}){const n=Sr(t),[a,l]=p.useState(r),i=e!==void 0,s=i?e:a,o=Sr(d=>{const m=typeof d=="function"?d(s):d;i||l(m),n(m)},[i,n,s]);return[s,o]}let Nr=0;function ti(e){const[r,t]=p.useState(e),n=e||r;return p.useEffect(()=>{r==null&&(Nr+=1,t(`aksel-icon-${Nr}`))},[r]),n}const Or=g.useId;function Oe(e){var r;return Or!==void 0?Or().replace(/(:)/g,""):(r=ti(e))!==null&&r!==void 0?r:""}var ri=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ai=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ri(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var li=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ii=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=li(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var si=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const nr=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=si(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var oi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ui=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=oi(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var di=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const mi=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=di(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var ci=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fi=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ci(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var vi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ja=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=vi(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var gi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const pi=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=gi(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Ei=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const _i=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ei(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var yi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const bi=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=yi(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var Ri=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const hi=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ri(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var Ti=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ki=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ti(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Si=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ni=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Si(e,["title","titleId"]);let l=Oe();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Vn(e,r,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e?.(a),t===!1||!a.defaultPrevented)return r?.(a)}}const[Qm,Oi]=Dl({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Rt(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function kn(e){return(r,t)=>{const n=t?.context?String(t.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=t?.width?String(t.width):i;a=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=t?.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(r):r;return a[l]}}function Sn(e){return(r,t={})=>{const n=t.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=r.match(a);if(!l)return null;const i=l[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(s)?Pi(s,m=>m.test(i)):Ai(s,m=>m.test(i));let d;d=e.valueCallback?e.valueCallback(o):o,d=t.valueCallback?t.valueCallback(d):d;const u=r.slice(i.length);return{value:d,rest:u}}}function Ai(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function Pi(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function wi(e){return(r,t={})=>{const n=r.match(e.matchPattern);if(!n)return null;const a=n[0],l=r.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=t.valueCallback?t.valueCallback(i):i;const s=r.slice(a.length);return{value:i,rest:s}}}const Ii={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Fi=(e,r,t)=>{let n;const a=Ii[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},Li={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Di={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},xi={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Vi={date:Rt({formats:Li,defaultWidth:"full"}),time:Rt({formats:Di,defaultWidth:"full"}),dateTime:Rt({formats:xi,defaultWidth:"full"})},Ki={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},ji=(e,r,t,n)=>Ki[e],Mi={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Bi={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Gi={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},qi={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Ui={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Ci=(e,r)=>Number(e)+".",Hi={ordinalNumber:Ci,era:kn({values:Mi,defaultWidth:"wide"}),quarter:kn({values:Bi,defaultWidth:"wide",argumentCallback:e=>e-1}),month:kn({values:Gi,defaultWidth:"wide"}),day:kn({values:qi,defaultWidth:"wide"}),dayPeriod:kn({values:Ui,defaultWidth:"wide"})},$i=/^(\d+)\.?/i,Yi=/\d+/i,zi={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Wi={any:[/^f/i,/^e/i]},Ji={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Xi={any:[/1/i,/2/i,/3/i,/4/i]},Zi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Qi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},es={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},ns={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},ts={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},rs={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},as={ordinalNumber:wi({matchPattern:$i,parsePattern:Yi,valueCallback:e=>parseInt(e,10)}),era:Sn({matchPatterns:zi,defaultMatchWidth:"wide",parsePatterns:Wi,defaultParseWidth:"any"}),quarter:Sn({matchPatterns:Ji,defaultMatchWidth:"wide",parsePatterns:Xi,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Sn({matchPatterns:Zi,defaultMatchWidth:"wide",parsePatterns:Qi,defaultParseWidth:"any"}),day:Sn({matchPatterns:es,defaultMatchWidth:"wide",parsePatterns:ns,defaultParseWidth:"any"}),dayPeriod:Sn({matchPatterns:ts,defaultMatchWidth:"any",parsePatterns:rs,defaultParseWidth:"any"})},ls={code:"nb",formatDistance:Fi,formatLong:Vi,formatRelative:ji,localize:Hi,match:as,options:{weekStartsOn:1,firstWeekContainsDate:4}},is={global:{dateLocale:ls,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},ss=p.createContext({locale:is}),Ma=()=>p.useContext(ss);var os=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const us=p.forwardRef((e,r)=>{var t,n,a,{rootElement:l,asChild:i}=e,s=os(e,["rootElement","asChild"]);const o=xn(!1),d=(t=Ma())===null||t===void 0?void 0:t.rootElement,u=(n=l??d)!==null&&n!==void 0?n:(a=globalThis?.document)===null||a===void 0?void 0:a.body,m=i?ct:"div";return o?.isDarkside?u?Mt.createPortal(g.createElement(xl,{theme:o.theme,asChild:!0,hasBackground:!1,"data-color":o.color},g.createElement(m,Object.assign({ref:r,"data-aksel-portal":""},s))),u):null:u?Mt.createPortal(g.createElement(m,Object.assign({ref:r,"data-aksel-portal":""},s)),u):null}),fn=Math.min,en=Math.max,et=Math.round,Hn=Math.floor,Ve=e=>({x:e,y:e}),ds={left:"right",right:"left",bottom:"top",top:"bottom"},ms={start:"end",end:"start"};function Bt(e,r,t){return en(e,fn(r,t))}function Kn(e,r){return typeof e=="function"?e(r):e}function nn(e){return e.split("-")[0]}function jn(e){return e.split("-")[1]}function Ba(e){return e==="x"?"y":"x"}function tr(e){return e==="y"?"height":"width"}const cs=new Set(["top","bottom"]);function ze(e){return cs.has(nn(e))?"y":"x"}function rr(e){return Ba(ze(e))}function fs(e,r,t){t===void 0&&(t=!1);const n=jn(e),a=rr(e),l=tr(a);let i=a==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return r.reference[l]>r.floating[l]&&(i=nt(i)),[i,nt(i)]}function vs(e){const r=nt(e);return[Gt(e),r,Gt(r)]}function Gt(e){return e.replace(/start|end/g,r=>ms[r])}const Ar=["left","right"],Pr=["right","left"],gs=["top","bottom"],ps=["bottom","top"];function Es(e,r,t){switch(e){case"top":case"bottom":return t?r?Pr:Ar:r?Ar:Pr;case"left":case"right":return r?gs:ps;default:return[]}}function _s(e,r,t,n){const a=jn(e);let l=Es(nn(e),t==="start",n);return a&&(l=l.map(i=>i+"-"+a),r&&(l=l.concat(l.map(Gt)))),l}function nt(e){return e.replace(/left|right|bottom|top/g,r=>ds[r])}function ys(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ga(e){return typeof e!="number"?ys(e):{top:e,right:e,bottom:e,left:e}}function tt(e){const{x:r,y:t,width:n,height:a}=e;return{width:n,height:a,top:t,left:r,right:r+n,bottom:t+a,x:r,y:t}}function wr(e,r,t){let{reference:n,floating:a}=e;const l=ze(r),i=rr(r),s=tr(i),o=nn(r),d=l==="y",u=n.x+n.width/2-a.width/2,m=n.y+n.height/2-a.height/2,v=n[s]/2-a[s]/2;let c;switch(o){case"top":c={x:u,y:n.y-a.height};break;case"bottom":c={x:u,y:n.y+n.height};break;case"right":c={x:n.x+n.width,y:m};break;case"left":c={x:n.x-a.width,y:m};break;default:c={x:n.x,y:n.y}}switch(jn(r)){case"start":c[i]-=v*(t&&d?-1:1);break;case"end":c[i]+=v*(t&&d?-1:1);break}return c}const bs=async(e,r,t)=>{const{placement:n="bottom",strategy:a="absolute",middleware:l=[],platform:i}=t,s=l.filter(Boolean),o=await(i.isRTL==null?void 0:i.isRTL(r));let d=await i.getElementRects({reference:e,floating:r,strategy:a}),{x:u,y:m}=wr(d,n,o),v=n,c={},E=0;for(let _=0;_<s.length;_++){const{name:y,fn:T}=s[_],{x:R,y:h,data:O,reset:A}=await T({x:u,y:m,initialPlacement:n,placement:v,strategy:a,middlewareData:c,rects:d,platform:i,elements:{reference:e,floating:r}});u=R??u,m=h??m,c={...c,[y]:{...c[y],...O}},A&&E<=50&&(E++,typeof A=="object"&&(A.placement&&(v=A.placement),A.rects&&(d=A.rects===!0?await i.getElementRects({reference:e,floating:r,strategy:a}):A.rects),{x:u,y:m}=wr(d,v,o)),_=-1)}return{x:u,y:m,placement:v,strategy:a,middlewareData:c}};async function qa(e,r){var t;r===void 0&&(r={});const{x:n,y:a,platform:l,rects:i,elements:s,strategy:o}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:v=!1,padding:c=0}=Kn(r,e),E=Ga(c),y=s[v?m==="floating"?"reference":"floating":m],T=tt(await l.getClippingRect({element:(t=await(l.isElement==null?void 0:l.isElement(y)))==null||t?y:y.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(s.floating)),boundary:d,rootBoundary:u,strategy:o})),R=m==="floating"?{x:n,y:a,width:i.floating.width,height:i.floating.height}:i.reference,h=await(l.getOffsetParent==null?void 0:l.getOffsetParent(s.floating)),O=await(l.isElement==null?void 0:l.isElement(h))?await(l.getScale==null?void 0:l.getScale(h))||{x:1,y:1}:{x:1,y:1},A=tt(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:R,offsetParent:h,strategy:o}):R);return{top:(T.top-A.top+E.top)/O.y,bottom:(A.bottom-T.bottom+E.bottom)/O.y,left:(T.left-A.left+E.left)/O.x,right:(A.right-T.right+E.right)/O.x}}const Rs=e=>({name:"arrow",options:e,async fn(r){const{x:t,y:n,placement:a,rects:l,platform:i,elements:s,middlewareData:o}=r,{element:d,padding:u=0}=Kn(e,r)||{};if(d==null)return{};const m=Ga(u),v={x:t,y:n},c=rr(a),E=tr(c),_=await i.getDimensions(d),y=c==="y",T=y?"top":"left",R=y?"bottom":"right",h=y?"clientHeight":"clientWidth",O=l.reference[E]+l.reference[c]-v[c]-l.floating[E],A=v[c]-l.reference[c],B=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let j=B?B[h]:0;(!j||!await(i.isElement==null?void 0:i.isElement(B)))&&(j=s.floating[h]||l.floating[E]);const $=O/2-A/2,q=j/2-_[E]/2-1,C=fn(m[T],q),U=fn(m[R],q),w=C,S=j-_[E]-U,k=j/2-_[E]/2+$,I=Bt(w,k,S),V=!o.arrow&&jn(a)!=null&&k!==I&&l.reference[E]/2-(k<w?C:U)-_[E]/2<0,x=V?k<w?k-w:k-S:0;return{[c]:v[c]+x,data:{[c]:I,centerOffset:k-I-x,...V&&{alignmentOffset:x}},reset:V}}}),hs=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var t,n;const{placement:a,middlewareData:l,rects:i,initialPlacement:s,platform:o,elements:d}=r,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:v,fallbackStrategy:c="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:_=!0,...y}=Kn(e,r);if((t=l.arrow)!=null&&t.alignmentOffset)return{};const T=nn(a),R=ze(s),h=nn(s)===s,O=await(o.isRTL==null?void 0:o.isRTL(d.floating)),A=v||(h||!_?[nt(s)]:vs(s)),B=E!=="none";!v&&B&&A.push(..._s(s,_,E,O));const j=[s,...A],$=await qa(r,y),q=[];let C=((n=l.flip)==null?void 0:n.overflows)||[];if(u&&q.push($[T]),m){const k=fs(a,i,O);q.push($[k[0]],$[k[1]])}if(C=[...C,{placement:a,overflows:q}],!q.every(k=>k<=0)){var U,w;const k=(((U=l.flip)==null?void 0:U.index)||0)+1,I=j[k];if(I&&(!(m==="alignment"?R!==ze(I):!1)||C.every(L=>ze(L.placement)===R?L.overflows[0]>0:!0)))return{data:{index:k,overflows:C},reset:{placement:I}};let V=(w=C.filter(x=>x.overflows[0]<=0).sort((x,L)=>x.overflows[1]-L.overflows[1])[0])==null?void 0:w.placement;if(!V)switch(c){case"bestFit":{var S;const x=(S=C.filter(L=>{if(B){const F=ze(L.placement);return F===R||F==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(F=>F>0).reduce((F,H)=>F+H,0)]).sort((L,F)=>L[1]-F[1])[0])==null?void 0:S[0];x&&(V=x);break}case"initialPlacement":V=s;break}if(a!==V)return{reset:{placement:V}}}return{}}}},Ts=new Set(["left","top"]);async function ks(e,r){const{placement:t,platform:n,elements:a}=e,l=await(n.isRTL==null?void 0:n.isRTL(a.floating)),i=nn(t),s=jn(t),o=ze(t)==="y",d=Ts.has(i)?-1:1,u=l&&o?-1:1,m=Kn(r,e);let{mainAxis:v,crossAxis:c,alignmentAxis:E}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return s&&typeof E=="number"&&(c=s==="end"?E*-1:E),o?{x:c*u,y:v*d}:{x:v*d,y:c*u}}const Ss=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var t,n;const{x:a,y:l,placement:i,middlewareData:s}=r,o=await ks(r,e);return i===((t=s.offset)==null?void 0:t.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:a+o.x,y:l+o.y,data:{...o,placement:i}}}}},Ns=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:t,y:n,placement:a}=r,{mainAxis:l=!0,crossAxis:i=!1,limiter:s={fn:y=>{let{x:T,y:R}=y;return{x:T,y:R}}},...o}=Kn(e,r),d={x:t,y:n},u=await qa(r,o),m=ze(nn(a)),v=Ba(m);let c=d[v],E=d[m];if(l){const y=v==="y"?"top":"left",T=v==="y"?"bottom":"right",R=c+u[y],h=c-u[T];c=Bt(R,c,h)}if(i){const y=m==="y"?"top":"left",T=m==="y"?"bottom":"right",R=E+u[y],h=E-u[T];E=Bt(R,E,h)}const _=s.fn({...r,[v]:c,[m]:E});return{..._,data:{x:_.x-t,y:_.y-n,enabled:{[v]:l,[m]:i}}}}}};function ft(){return typeof window<"u"}function yn(e){return Ua(e)?(e.nodeName||"").toLowerCase():"#document"}function he(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function je(e){var r;return(r=(Ua(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function Ua(e){return ft()?e instanceof Node||e instanceof he(e).Node:!1}function te(e){return ft()?e instanceof Element||e instanceof he(e).Element:!1}function Ne(e){return ft()?e instanceof HTMLElement||e instanceof he(e).HTMLElement:!1}function rt(e){return!ft()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof he(e).ShadowRoot}const Os=new Set(["inline","contents"]);function Mn(e){const{overflow:r,overflowX:t,overflowY:n,display:a}=Ie(e);return/auto|scroll|overlay|hidden|clip/.test(r+n+t)&&!Os.has(a)}const As=new Set(["table","td","th"]);function Ps(e){return As.has(yn(e))}const ws=[":popover-open",":modal"];function vt(e){return ws.some(r=>{try{return e.matches(r)}catch{return!1}})}const Is=["transform","translate","scale","rotate","perspective"],Fs=["transform","translate","scale","rotate","perspective","filter"],Ls=["paint","layout","strict","content"];function ar(e){const r=gt(),t=te(e)?Ie(e):e;return Is.some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||Fs.some(n=>(t.willChange||"").includes(n))||Ls.some(n=>(t.contain||"").includes(n))}function Ds(e){let r=$e(e);for(;Ne(r)&&!He(r);){if(ar(r))return r;if(vt(r))return null;r=$e(r)}return null}function gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const xs=new Set(["html","body","#document"]);function He(e){return xs.has(yn(e))}function Ie(e){return he(e).getComputedStyle(e)}function pt(e){return te(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $e(e){if(yn(e)==="html")return e;const r=e.assignedSlot||e.parentNode||rt(e)&&e.host||je(e);return rt(r)?r.host:r}function Ca(e){const r=$e(e);return He(r)?e.ownerDocument?e.ownerDocument.body:e.body:Ne(r)&&Mn(r)?r:Ca(r)}function We(e,r,t){var n;r===void 0&&(r=[]),t===void 0&&(t=!0);const a=Ca(e),l=a===((n=e.ownerDocument)==null?void 0:n.body),i=he(a);if(l){const s=qt(i);return r.concat(i,i.visualViewport||[],Mn(a)?a:[],s&&t?We(s):[])}return r.concat(a,We(a,[],t))}function qt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ha(e){const r=Ie(e);let t=parseFloat(r.width)||0,n=parseFloat(r.height)||0;const a=Ne(e),l=a?e.offsetWidth:t,i=a?e.offsetHeight:n,s=et(t)!==l||et(n)!==i;return s&&(t=l,n=i),{width:t,height:n,$:s}}function lr(e){return te(e)?e:e.contextElement}function dn(e){const r=lr(e);if(!Ne(r))return Ve(1);const t=r.getBoundingClientRect(),{width:n,height:a,$:l}=Ha(r);let i=(l?et(t.width):t.width)/n,s=(l?et(t.height):t.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const Vs=Ve(0);function $a(e){const r=he(e);return!gt()||!r.visualViewport?Vs:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function Ks(e,r,t){return r===void 0&&(r=!1),!t||r&&t!==he(e)?!1:r}function tn(e,r,t,n){r===void 0&&(r=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),l=lr(e);let i=Ve(1);r&&(n?te(n)&&(i=dn(n)):i=dn(e));const s=Ks(l,t,n)?$a(l):Ve(0);let o=(a.left+s.x)/i.x,d=(a.top+s.y)/i.y,u=a.width/i.x,m=a.height/i.y;if(l){const v=he(l),c=n&&te(n)?he(n):n;let E=v,_=qt(E);for(;_&&n&&c!==E;){const y=dn(_),T=_.getBoundingClientRect(),R=Ie(_),h=T.left+(_.clientLeft+parseFloat(R.paddingLeft))*y.x,O=T.top+(_.clientTop+parseFloat(R.paddingTop))*y.y;o*=y.x,d*=y.y,u*=y.x,m*=y.y,o+=h,d+=O,E=he(_),_=qt(E)}}return tt({width:u,height:m,x:o,y:d})}function Et(e,r){const t=pt(e).scrollLeft;return r?r.left+t:tn(je(e)).left+t}function Ya(e,r){const t=e.getBoundingClientRect(),n=t.left+r.scrollLeft-Et(e,t),a=t.top+r.scrollTop;return{x:n,y:a}}function js(e){let{elements:r,rect:t,offsetParent:n,strategy:a}=e;const l=a==="fixed",i=je(n),s=r?vt(r.floating):!1;if(n===i||s&&l)return t;let o={scrollLeft:0,scrollTop:0},d=Ve(1);const u=Ve(0),m=Ne(n);if((m||!m&&!l)&&((yn(n)!=="body"||Mn(i))&&(o=pt(n)),Ne(n))){const c=tn(n);d=dn(n),u.x=c.x+n.clientLeft,u.y=c.y+n.clientTop}const v=i&&!m&&!l?Ya(i,o):Ve(0);return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-o.scrollLeft*d.x+u.x+v.x,y:t.y*d.y-o.scrollTop*d.y+u.y+v.y}}function Ms(e){return Array.from(e.getClientRects())}function Bs(e){const r=je(e),t=pt(e),n=e.ownerDocument.body,a=en(r.scrollWidth,r.clientWidth,n.scrollWidth,n.clientWidth),l=en(r.scrollHeight,r.clientHeight,n.scrollHeight,n.clientHeight);let i=-t.scrollLeft+Et(e);const s=-t.scrollTop;return Ie(n).direction==="rtl"&&(i+=en(r.clientWidth,n.clientWidth)-a),{width:a,height:l,x:i,y:s}}const Ir=25;function Gs(e,r){const t=he(e),n=je(e),a=t.visualViewport;let l=n.clientWidth,i=n.clientHeight,s=0,o=0;if(a){l=a.width,i=a.height;const u=gt();(!u||u&&r==="fixed")&&(s=a.offsetLeft,o=a.offsetTop)}const d=Et(n);if(d<=0){const u=n.ownerDocument,m=u.body,v=getComputedStyle(m),c=u.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,E=Math.abs(n.clientWidth-m.clientWidth-c);E<=Ir&&(l-=E)}else d<=Ir&&(l+=d);return{width:l,height:i,x:s,y:o}}const qs=new Set(["absolute","fixed"]);function Us(e,r){const t=tn(e,!0,r==="fixed"),n=t.top+e.clientTop,a=t.left+e.clientLeft,l=Ne(e)?dn(e):Ve(1),i=e.clientWidth*l.x,s=e.clientHeight*l.y,o=a*l.x,d=n*l.y;return{width:i,height:s,x:o,y:d}}function Fr(e,r,t){let n;if(r==="viewport")n=Gs(e,t);else if(r==="document")n=Bs(je(e));else if(te(r))n=Us(r,t);else{const a=$a(e);n={x:r.x-a.x,y:r.y-a.y,width:r.width,height:r.height}}return tt(n)}function za(e,r){const t=$e(e);return t===r||!te(t)||He(t)?!1:Ie(t).position==="fixed"||za(t,r)}function Cs(e,r){const t=r.get(e);if(t)return t;let n=We(e,[],!1).filter(s=>te(s)&&yn(s)!=="body"),a=null;const l=Ie(e).position==="fixed";let i=l?$e(e):e;for(;te(i)&&!He(i);){const s=Ie(i),o=ar(i);!o&&s.position==="fixed"&&(a=null),(l?!o&&!a:!o&&s.position==="static"&&!!a&&qs.has(a.position)||Mn(i)&&!o&&za(e,i))?n=n.filter(u=>u!==i):a=s,i=$e(i)}return r.set(e,n),n}function Hs(e){let{element:r,boundary:t,rootBoundary:n,strategy:a}=e;const i=[...t==="clippingAncestors"?vt(r)?[]:Cs(r,this._c):[].concat(t),n],s=i[0],o=i.reduce((d,u)=>{const m=Fr(r,u,a);return d.top=en(m.top,d.top),d.right=fn(m.right,d.right),d.bottom=fn(m.bottom,d.bottom),d.left=en(m.left,d.left),d},Fr(r,s,a));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function $s(e){const{width:r,height:t}=Ha(e);return{width:r,height:t}}function Ys(e,r,t){const n=Ne(r),a=je(r),l=t==="fixed",i=tn(e,!0,l,r);let s={scrollLeft:0,scrollTop:0};const o=Ve(0);function d(){o.x=Et(a)}if(n||!n&&!l)if((yn(r)!=="body"||Mn(a))&&(s=pt(r)),n){const c=tn(r,!0,l,r);o.x=c.x+r.clientLeft,o.y=c.y+r.clientTop}else a&&d();l&&!n&&a&&d();const u=a&&!n&&!l?Ya(a,s):Ve(0),m=i.left+s.scrollLeft-o.x-u.x,v=i.top+s.scrollTop-o.y-u.y;return{x:m,y:v,width:i.width,height:i.height}}function ht(e){return Ie(e).position==="static"}function Lr(e,r){if(!Ne(e)||Ie(e).position==="fixed")return null;if(r)return r(e);let t=e.offsetParent;return je(e)===t&&(t=t.ownerDocument.body),t}function Wa(e,r){const t=he(e);if(vt(e))return t;if(!Ne(e)){let a=$e(e);for(;a&&!He(a);){if(te(a)&&!ht(a))return a;a=$e(a)}return t}let n=Lr(e,r);for(;n&&Ps(n)&&ht(n);)n=Lr(n,r);return n&&He(n)&&ht(n)&&!ar(n)?t:n||Ds(e)||t}const zs=async function(e){const r=this.getOffsetParent||Wa,t=this.getDimensions,n=await t(e.floating);return{reference:Ys(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Ws(e){return Ie(e).direction==="rtl"}const Js={convertOffsetParentRelativeRectToViewportRelativeRect:js,getDocumentElement:je,getClippingRect:Hs,getOffsetParent:Wa,getElementRects:zs,getClientRects:Ms,getDimensions:$s,getScale:dn,isElement:te,isRTL:Ws};function Ja(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function Xs(e,r){let t=null,n;const a=je(e);function l(){var s;clearTimeout(n),(s=t)==null||s.disconnect(),t=null}function i(s,o){s===void 0&&(s=!1),o===void 0&&(o=1),l();const d=e.getBoundingClientRect(),{left:u,top:m,width:v,height:c}=d;if(s||r(),!v||!c)return;const E=Hn(m),_=Hn(a.clientWidth-(u+v)),y=Hn(a.clientHeight-(m+c)),T=Hn(u),h={rootMargin:-E+"px "+-_+"px "+-y+"px "+-T+"px",threshold:en(0,fn(1,o))||1};let O=!0;function A(B){const j=B[0].intersectionRatio;if(j!==o){if(!O)return i();j?i(!1,j):n=setTimeout(()=>{i(!1,1e-7)},1e3)}j===1&&!Ja(d,e.getBoundingClientRect())&&i(),O=!1}try{t=new IntersectionObserver(A,{...h,root:a.ownerDocument})}catch{t=new IntersectionObserver(A,h)}t.observe(e)}return i(!0),l}function Dr(e,r,t,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:o=!1}=n,d=lr(e),u=a||l?[...d?We(d):[],...We(r)]:[];u.forEach(T=>{a&&T.addEventListener("scroll",t,{passive:!0}),l&&T.addEventListener("resize",t)});const m=d&&s?Xs(d,t):null;let v=-1,c=null;i&&(c=new ResizeObserver(T=>{let[R]=T;R&&R.target===d&&c&&(c.unobserve(r),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var h;(h=c)==null||h.observe(r)})),t()}),d&&!o&&c.observe(d),c.observe(r));let E,_=o?tn(e):null;o&&y();function y(){const T=tn(e);_&&!Ja(_,T)&&t(),_=T,E=requestAnimationFrame(y)}return t(),()=>{var T;u.forEach(R=>{a&&R.removeEventListener("scroll",t),l&&R.removeEventListener("resize",t)}),m?.(),(T=c)==null||T.disconnect(),c=null,o&&cancelAnimationFrame(E)}}const Zs=Ss,Qs=Ns,eo=hs,xr=Rs,no=(e,r,t)=>{const n=new Map,a={platform:Js,...t},l={...a.platform,_c:n};return bs(e,r,{...a,platform:l})};var to=typeof document<"u",ro=function(){},Qn=to?p.useLayoutEffect:ro;function at(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!at(e[n],r[n]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,a[n]))return!1;for(n=t;n--!==0;){const l=a[n];if(!(l==="_owner"&&e.$$typeof)&&!at(e[l],r[l]))return!1}return!0}return e!==e&&r!==r}function Xa(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Vr(e,r){const t=Xa(e);return Math.round(r*t)/t}function Tt(e){const r=p.useRef(e);return Qn(()=>{r.current=e}),r}function ao(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:a,elements:{reference:l,floating:i}={},transform:s=!0,whileElementsMounted:o,open:d}=e,[u,m]=p.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[v,c]=p.useState(n);at(v,n)||c(n);const[E,_]=p.useState(null),[y,T]=p.useState(null),R=p.useCallback(L=>{L!==B.current&&(B.current=L,_(L))},[]),h=p.useCallback(L=>{L!==j.current&&(j.current=L,T(L))},[]),O=l||E,A=i||y,B=p.useRef(null),j=p.useRef(null),$=p.useRef(u),q=o!=null,C=Tt(o),U=Tt(a),w=Tt(d),S=p.useCallback(()=>{if(!B.current||!j.current)return;const L={placement:r,strategy:t,middleware:v};U.current&&(L.platform=U.current),no(B.current,j.current,L).then(F=>{const H={...F,isPositioned:w.current!==!1};k.current&&!at($.current,H)&&($.current=H,La.flushSync(()=>{m(H)}))})},[v,r,t,U,w]);Qn(()=>{d===!1&&$.current.isPositioned&&($.current.isPositioned=!1,m(L=>({...L,isPositioned:!1})))},[d]);const k=p.useRef(!1);Qn(()=>(k.current=!0,()=>{k.current=!1}),[]),Qn(()=>{if(O&&(B.current=O),A&&(j.current=A),O&&A){if(C.current)return C.current(O,A,S);S()}},[O,A,S,C,q]);const I=p.useMemo(()=>({reference:B,floating:j,setReference:R,setFloating:h}),[R,h]),V=p.useMemo(()=>({reference:O,floating:A}),[O,A]),x=p.useMemo(()=>{const L={position:t,left:0,top:0};if(!V.floating)return L;const F=Vr(V.floating,u.x),H=Vr(V.floating,u.y);return s?{...L,transform:"translate("+F+"px, "+H+"px)",...Xa(V.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:F,top:H}},[t,s,V.floating,u.x,u.y]);return p.useMemo(()=>({...u,update:S,refs:I,elements:V,floatingStyles:x}),[u,S,I,V,x])}const lo=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:a}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?xr({element:n.current,padding:a}).fn(t):{}:n?xr({element:n,padding:a}).fn(t):{}}}},io=(e,r)=>({...Zs(e),options:[e,r]}),so=(e,r)=>({...Qs(e),options:[e,r]}),oo=(e,r)=>({...eo(e),options:[e,r]}),uo=(e,r)=>({...lo(e),options:[e,r]}),Kr=/(\w+)/g;function mo(e,r){const t=Array.isArray(e)?e:co(e);for(const n of r){if(!n)continue;let a=n;for(let l=0;l<t.length;l++){const i=a[t[l]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function co(e){const r=[];let t=Kr.exec(e);for(;t;){const[,n,a]=t;r.push(n||a),t=Kr.exec(e)}return r}const fo=/{[^}]*}/g;function Bn(e,...r){const t=Ma(),n=t.translations||[],a=[...r,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],t.locale[e]];return(i,s)=>{const o=mo(i,a);return s?o.replace(fo,d=>{const u=d.substring(1,d.length-1);if(s[u]===void 0){const m=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${m}'`)}return s[u]}):o}}var vo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const go=p.forwardRef((e,r)=>{var{className:t,size:n="medium",title:a,transparent:l=!1,variant:i="neutral",id:s,"data-color":o}=e,d=vo(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:u}=X(),m=Je(),v=Bn("Loader");return g.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${m}`,ref:r,className:u("navds-loader",t,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":o??po(i)},xe(d,["children"]),{"data-variant":i}),g.createElement("title",{id:s??`loader-${m}`},a||v("title")),g.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),g.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function po(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Eo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Za=p.forwardRef((e,r)=>{var{as:t="button",variant:n="primary",className:a,children:l,size:i="medium",loading:s=!1,disabled:o,icon:d,iconPosition:u="left",onKeyUp:m,"data-color":v}=e,c=Eo(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:E}=X(),_=o||s?xe(c,["href"]):c,y=T=>{T.key===" "&&!o&&!s&&T.currentTarget.click()};return g.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":v??_o(n),"data-variant":yo(n)},_,{ref:r,onKeyUp:Vn(m,y),className:E(a,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!d&&!l,"navds-button--disabled":o??s}),disabled:o??s?!0:void 0}),d&&u==="left"&&g.createElement("span",{className:E("navds-button__icon")},d),s&&g.createElement(go,{size:i}),l&&g.createElement(_n,{as:"span",size:i==="medium"?"medium":"small"},l),d&&u==="right"&&g.createElement("span",{className:E("navds-button__icon")},d))});function _o(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function yo(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var bo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ro={error:Ni,warning:mi,info:fi,success:ii},ho=p.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:o=!1,closeButton:d=!1,onClose:u}=e,m=bo(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:v}=X(),c=Bn("Alert"),E=Ro[a];return g.createElement("div",Object.assign({},m,{"data-color":To(a),"data-variant":a,ref:r,className:v(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":o,"navds-alert--close-button":d})}),g.createElement(E,{title:c(a),className:v("navds-alert__icon")}),g.createElement(Qt,{as:"div",size:l,className:v("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},t),d&&!o&&g.createElement("div",{className:v("navds-alert__button-wrapper")},g.createElement(Za,{className:v("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:g.createElement(ki,{title:["error","warning"].includes(a)?c("closeAlert"):c("closeMessage")})})))});function To(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function ko(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function So(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(r=>{let{brand:t,version:n}=r;return t+"/"+n}).join(" "):navigator.userAgent}function No(){return/apple/i.test(navigator.vendor)}function Oo(){return ko().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Ao(){return So().includes("jsdom/")}const Po="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function jr(e){let r=e.activeElement;for(;((t=r)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;r=r.shadowRoot.activeElement}return r}function Dn(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&rt(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function sn(e){return"composedPath"in e?e.composedPath()[0]:e.target}function kt(e,r){if(r==null)return!1;if("composedPath"in e)return e.composedPath().includes(r);const t=e;return t.target!=null&&r.contains(t.target)}function wo(e){return e.matches("html,body")}function Ze(e){return e?.ownerDocument||document}function Io(e){return Ne(e)&&e.matches(Po)}function Fo(e){if(!e||Ao())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function St(e,r,t){t===void 0&&(t=!0);let n=e.filter(l=>{var i;return l.parentId===r&&((i=l.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(l=>{var i;return(i=a)==null?void 0:i.some(s=>{var o;return l.parentId===s.id&&((o=l.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function Lo(e){return"nativeEvent"in e}function Ut(e,r){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var vn=typeof document<"u"?p.useLayoutEffect:p.useEffect;const Do={...Aa};function $n(e){const r=p.useRef(e);return vn(()=>{r.current=e}),r}const xo=Do.useInsertionEffect,Vo=xo||(e=>e());function qe(e){const r=p.useRef(()=>{});return Vo(()=>{r.current=e}),p.useCallback(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.current==null?void 0:r.current(...n)},[])}const Ko="data-floating-ui-focusable",Mr="active",Br="selected",jo={...Aa};let Gr=!1,Mo=0;const qr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Mo++;function Bo(){const[e,r]=p.useState(()=>Gr?qr():void 0);return vn(()=>{e==null&&r(qr())},[]),p.useEffect(()=>{Gr=!0},[]),e}const Go=jo.useId,qo=Go||Bo;function Uo(){const e=new Map;return{emit(r,t){var n;(n=e.get(r))==null||n.forEach(a=>a(t))},on(r,t){e.has(r)||e.set(r,new Set),e.get(r).add(t)},off(r,t){var n;(n=e.get(r))==null||n.delete(t)}}}const Co=p.createContext(null),Ho=p.createContext(null),Qa=()=>{var e;return((e=p.useContext(Co))==null?void 0:e.id)||null},ir=()=>p.useContext(Ho);function sr(e){return"data-floating-ui-"+e}function Pe(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Ur=sr("safe-polygon");function Nt(e,r,t){if(t&&!Ut(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n?.[r]}return e?.[r]}function Ot(e){return typeof e=="function"?e():e}function $o(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,dataRef:a,events:l,elements:i}=e,{enabled:s=!0,delay:o=0,handleClose:d=null,mouseOnly:u=!1,restMs:m=0,move:v=!0}=r,c=ir(),E=Qa(),_=$n(d),y=$n(o),T=$n(t),R=$n(m),h=p.useRef(),O=p.useRef(-1),A=p.useRef(),B=p.useRef(-1),j=p.useRef(!0),$=p.useRef(!1),q=p.useRef(()=>{}),C=p.useRef(!1),U=p.useCallback(()=>{var x;const L=(x=a.current.openEvent)==null?void 0:x.type;return L?.includes("mouse")&&L!=="mousedown"},[a]);p.useEffect(()=>{if(!s)return;function x(L){let{open:F}=L;F||(Pe(O),Pe(B),j.current=!0,C.current=!1)}return l.on("openchange",x),()=>{l.off("openchange",x)}},[s,l]),p.useEffect(()=>{if(!s||!_.current||!t)return;function x(F){U()&&n(!1,F,"hover")}const L=Ze(i.floating).documentElement;return L.addEventListener("mouseleave",x),()=>{L.removeEventListener("mouseleave",x)}},[i.floating,t,n,s,_,U]);const w=p.useCallback(function(x,L,F){L===void 0&&(L=!0),F===void 0&&(F="hover");const H=Nt(y.current,"close",h.current);H&&!A.current?(Pe(O),O.current=window.setTimeout(()=>n(!1,x,F),H)):L&&(Pe(O),n(!1,x,F))},[y,n]),S=qe(()=>{q.current(),A.current=void 0}),k=qe(()=>{if($.current){const x=Ze(i.floating).body;x.style.pointerEvents="",x.removeAttribute(Ur),$.current=!1}}),I=qe(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);p.useEffect(()=>{if(!s)return;function x(W){if(Pe(O),j.current=!1,u&&!Ut(h.current)||Ot(R.current)>0&&!Nt(y.current,"open"))return;const J=Nt(y.current,"open",h.current);J?O.current=window.setTimeout(()=>{T.current||n(!0,W,"hover")},J):t||n(!0,W,"hover")}function L(W){if(I()){k();return}q.current();const J=Ze(i.floating);if(Pe(B),C.current=!1,_.current&&a.current.floatingContext){t||Pe(O),A.current=_.current({...a.current.floatingContext,tree:c,x:W.clientX,y:W.clientY,onClose(){k(),S(),I()||w(W,!0,"safe-polygon")}});const ge=A.current;J.addEventListener("mousemove",ge),q.current=()=>{J.removeEventListener("mousemove",ge)};return}(h.current==="touch"?!Dn(i.floating,W.relatedTarget):!0)&&w(W)}function F(W){I()||a.current.floatingContext&&(_.current==null||_.current({...a.current.floatingContext,tree:c,x:W.clientX,y:W.clientY,onClose(){k(),S(),I()||w(W)}})(W))}function H(){Pe(O)}function z(W){I()||w(W,!1)}if(te(i.domReference)){const W=i.domReference,J=i.floating;return t&&W.addEventListener("mouseleave",F),v&&W.addEventListener("mousemove",x,{once:!0}),W.addEventListener("mouseenter",x),W.addEventListener("mouseleave",L),J&&(J.addEventListener("mouseleave",F),J.addEventListener("mouseenter",H),J.addEventListener("mouseleave",z)),()=>{t&&W.removeEventListener("mouseleave",F),v&&W.removeEventListener("mousemove",x),W.removeEventListener("mouseenter",x),W.removeEventListener("mouseleave",L),J&&(J.removeEventListener("mouseleave",F),J.removeEventListener("mouseenter",H),J.removeEventListener("mouseleave",z))}}},[i,s,e,u,v,w,S,k,n,t,T,c,y,_,a,I,R]),vn(()=>{var x;if(s&&t&&(x=_.current)!=null&&x.__options.blockPointerEvents&&U()){$.current=!0;const F=i.floating;if(te(i.domReference)&&F){var L;const H=Ze(i.floating).body;H.setAttribute(Ur,"");const z=i.domReference,W=c==null||(L=c.nodesRef.current.find(J=>J.id===E))==null||(L=L.context)==null?void 0:L.elements.floating;return W&&(W.style.pointerEvents=""),H.style.pointerEvents="none",z.style.pointerEvents="auto",F.style.pointerEvents="auto",()=>{H.style.pointerEvents="",z.style.pointerEvents="",F.style.pointerEvents=""}}}},[s,t,E,i,c,_,U]),vn(()=>{t||(h.current=void 0,C.current=!1,S(),k())},[t,S,k]),p.useEffect(()=>()=>{S(),Pe(O),Pe(B),k()},[s,i.domReference,S,k]);const V=p.useMemo(()=>{function x(L){h.current=L.pointerType}return{onPointerDown:x,onPointerEnter:x,onMouseMove(L){const{nativeEvent:F}=L;function H(){!j.current&&!T.current&&n(!0,F,"hover")}u&&!Ut(h.current)||t||Ot(R.current)===0||C.current&&L.movementX**2+L.movementY**2<2||(Pe(B),h.current==="touch"?H():(C.current=!0,B.current=window.setTimeout(H,Ot(R.current))))}}},[u,n,t,T,R]);return p.useMemo(()=>s?{reference:V}:{},[s,V])}function At(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&rt(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Yo(e){return"composedPath"in e?e.composedPath()[0]:e.target}const zo={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Wo={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Cr=e=>{var r,t;return{escapeKey:typeof e=="boolean"?e:(r=e?.escapeKey)!=null?r:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function Jo(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,elements:a,dataRef:l}=e,{enabled:i=!0,escapeKey:s=!0,outsidePress:o=!0,outsidePressEvent:d="pointerdown",referencePress:u=!1,referencePressEvent:m="pointerdown",ancestorScroll:v=!1,bubbles:c,capture:E}=r,_=ir(),y=qe(typeof o=="function"?o:()=>!1),T=typeof o=="function"?y:o,R=p.useRef(!1),h=p.useRef(!1),{escapeKey:O,outsidePress:A}=Cr(c),{escapeKey:B,outsidePress:j}=Cr(E),$=p.useRef(!1),q=qe(I=>{var V;if(!t||!i||!s||I.key!=="Escape"||$.current)return;const x=(V=l.current.floatingContext)==null?void 0:V.nodeId,L=_?St(_.nodesRef.current,x):[];if(!O&&(I.stopPropagation(),L.length>0)){let F=!0;if(L.forEach(H=>{var z;if((z=H.context)!=null&&z.open&&!H.context.dataRef.current.__escapeKeyBubbles){F=!1;return}}),!F)return}n(!1,Lo(I)?I.nativeEvent:I,"escape-key")}),C=qe(I=>{var V;const x=()=>{var L;q(I),(L=sn(I))==null||L.removeEventListener("keydown",x)};(V=sn(I))==null||V.addEventListener("keydown",x)}),U=qe(I=>{var V;const x=R.current;R.current=!1;const L=h.current;if(h.current=!1,d==="click"&&L||x||typeof T=="function"&&!T(I))return;const F=sn(I),H="["+sr("inert")+"]",z=Ze(a.floating).querySelectorAll(H);let W=te(F)?F:null;for(;W&&!He(W);){const de=$e(W);if(He(de)||!te(de))break;W=de}if(z.length&&te(F)&&!wo(F)&&!Dn(F,a.floating)&&Array.from(z).every(de=>!Dn(W,de)))return;if(Ne(F)&&k){const de=He(F),le=Ie(F),Z=/auto|scroll/,re=de||Z.test(le.overflowX),pe=de||Z.test(le.overflowY),Ee=re&&F.clientWidth>0&&F.scrollWidth>F.clientWidth,_e=pe&&F.clientHeight>0&&F.scrollHeight>F.clientHeight,Xe=le.direction==="rtl",Me=_e&&(Xe?I.offsetX<=F.offsetWidth-F.clientWidth:I.offsetX>F.clientWidth),Be=Ee&&I.offsetY>F.clientHeight;if(Me||Be)return}const J=(V=l.current.floatingContext)==null?void 0:V.nodeId,Fe=_&&St(_.nodesRef.current,J).some(de=>{var le;return kt(I,(le=de.context)==null?void 0:le.elements.floating)});if(kt(I,a.floating)||kt(I,a.domReference)||Fe)return;const ge=_?St(_.nodesRef.current,J):[];if(ge.length>0){let de=!0;if(ge.forEach(le=>{var Z;if((Z=le.context)!=null&&Z.open&&!le.context.dataRef.current.__outsidePressBubbles){de=!1;return}}),!de)return}n(!1,I,"outside-press")}),w=qe(I=>{var V;const x=()=>{var L;U(I),(L=sn(I))==null||L.removeEventListener(d,x)};(V=sn(I))==null||V.addEventListener(d,x)});p.useEffect(()=>{if(!t||!i)return;l.current.__escapeKeyBubbles=O,l.current.__outsidePressBubbles=A;let I=-1;function V(z){n(!1,z,"ancestor-scroll")}function x(){window.clearTimeout(I),$.current=!0}function L(){I=window.setTimeout(()=>{$.current=!1},gt()?5:0)}const F=Ze(a.floating);s&&(F.addEventListener("keydown",B?C:q,B),F.addEventListener("compositionstart",x),F.addEventListener("compositionend",L)),T&&F.addEventListener(d,j?w:U,j);let H=[];return v&&(te(a.domReference)&&(H=We(a.domReference)),te(a.floating)&&(H=H.concat(We(a.floating))),!te(a.reference)&&a.reference&&a.reference.contextElement&&(H=H.concat(We(a.reference.contextElement)))),H=H.filter(z=>{var W;return z!==((W=F.defaultView)==null?void 0:W.visualViewport)}),H.forEach(z=>{z.addEventListener("scroll",V,{passive:!0})}),()=>{s&&(F.removeEventListener("keydown",B?C:q,B),F.removeEventListener("compositionstart",x),F.removeEventListener("compositionend",L)),T&&F.removeEventListener(d,j?w:U,j),H.forEach(z=>{z.removeEventListener("scroll",V)}),window.clearTimeout(I)}},[l,a,s,T,d,t,n,v,i,O,A,q,B,C,U,j,w]),p.useEffect(()=>{R.current=!1},[T,d]);const S=p.useMemo(()=>({onKeyDown:q,...u&&{[zo[m]]:I=>{n(!1,I.nativeEvent,"reference-press")},...m!=="click"&&{onClick(I){n(!1,I.nativeEvent,"reference-press")}}}}),[q,n,u,m]),k=p.useMemo(()=>({onKeyDown:q,onMouseDown(){h.current=!0},onMouseUp(){h.current=!0},[Wo[d]]:()=>{R.current=!0}}),[q,d]);return p.useMemo(()=>i?{reference:S,floating:k}:{},[i,S,k])}function Xo(e){const{open:r=!1,onOpenChange:t,elements:n}=e,a=qo(),l=p.useRef({}),[i]=p.useState(()=>Uo()),s=Qa()!=null,[o,d]=p.useState(n.reference),u=qe((c,E,_)=>{l.current.openEvent=c?E:void 0,i.emit("openchange",{open:c,event:E,reason:_,nested:s}),t?.(c,E,_)}),m=p.useMemo(()=>({setPositionReference:d}),[]),v=p.useMemo(()=>({reference:o||n.reference||null,floating:n.floating||null,domReference:n.reference}),[o,n.reference,n.floating]);return p.useMemo(()=>({dataRef:l,open:r,onOpenChange:u,elements:v,events:i,floatingId:a,refs:m}),[r,u,v,i,a,m])}function Zo(e){e===void 0&&(e={});const{nodeId:r}=e,t=Xo({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||t,a=n.elements,[l,i]=p.useState(null),[s,o]=p.useState(null),u=a?.domReference||l,m=p.useRef(null),v=ir();vn(()=>{u&&(m.current=u)},[u]);const c=ao({...e,elements:{...a,...s&&{reference:s}}}),E=p.useCallback(h=>{const O=te(h)?{getBoundingClientRect:()=>h.getBoundingClientRect(),getClientRects:()=>h.getClientRects(),contextElement:h}:h;o(O),c.refs.setReference(O)},[c.refs]),_=p.useCallback(h=>{(te(h)||h===null)&&(m.current=h,i(h)),(te(c.refs.reference.current)||c.refs.reference.current===null||h!==null&&!te(h))&&c.refs.setReference(h)},[c.refs]),y=p.useMemo(()=>({...c.refs,setReference:_,setPositionReference:E,domReference:m}),[c.refs,_,E]),T=p.useMemo(()=>({...c.elements,domReference:u}),[c.elements,u]),R=p.useMemo(()=>({...c,...n,refs:y,elements:T,nodeId:r}),[c,y,T,r,n]);return vn(()=>{n.dataRef.current.floatingContext=R;const h=v?.nodesRef.current.find(O=>O.id===r);h&&(h.context=R)}),p.useMemo(()=>({...c,context:R,refs:y,elements:T}),[c,y,T,R])}function Pt(){return Oo()&&No()}function Qo(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,events:a,dataRef:l,elements:i}=e,{enabled:s=!0,visibleOnly:o=!0}=r,d=p.useRef(!1),u=p.useRef(-1),m=p.useRef(!0);p.useEffect(()=>{if(!s)return;const c=he(i.domReference);function E(){!t&&Ne(i.domReference)&&i.domReference===jr(Ze(i.domReference))&&(d.current=!0)}function _(){m.current=!0}function y(){m.current=!1}return c.addEventListener("blur",E),Pt()&&(c.addEventListener("keydown",_,!0),c.addEventListener("pointerdown",y,!0)),()=>{c.removeEventListener("blur",E),Pt()&&(c.removeEventListener("keydown",_,!0),c.removeEventListener("pointerdown",y,!0))}},[i.domReference,t,s]),p.useEffect(()=>{if(!s)return;function c(E){let{reason:_}=E;(_==="reference-press"||_==="escape-key")&&(d.current=!0)}return a.on("openchange",c),()=>{a.off("openchange",c)}},[a,s]),p.useEffect(()=>()=>{Pe(u)},[]);const v=p.useMemo(()=>({onMouseLeave(){d.current=!1},onFocus(c){if(d.current)return;const E=sn(c.nativeEvent);if(o&&te(E)){if(Pt()&&!c.relatedTarget){if(!m.current&&!Io(E))return}else if(!Fo(E))return}n(!0,c.nativeEvent,"focus")},onBlur(c){d.current=!1;const E=c.relatedTarget,_=c.nativeEvent,y=te(E)&&E.hasAttribute(sr("focus-guard"))&&E.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var T;const R=jr(i.domReference?i.domReference.ownerDocument:document);!E&&R===i.domReference||Dn((T=l.current.floatingContext)==null?void 0:T.refs.floating.current,R)||Dn(i.domReference,R)||y||n(!1,_,"focus")})}}),[l,i.domReference,n,o]);return p.useMemo(()=>s?{reference:v}:{},[s,v])}function wt(e,r,t){const n=new Map,a=t==="item";let l=e;if(a&&e){const{[Mr]:i,[Br]:s,...o}=e;l=o}return{...t==="floating"&&{tabIndex:-1,[Ko]:""},...l,...r.map(i=>{const s=i?i[t]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((i,s)=>(s&&Object.entries(s).forEach(o=>{let[d,u]=o;if(!(a&&[Mr,Br].includes(d)))if(d.indexOf("on")===0){if(n.has(d)||n.set(d,[]),typeof u=="function"){var m;(m=n.get(d))==null||m.push(u),i[d]=function(){for(var v,c=arguments.length,E=new Array(c),_=0;_<c;_++)E[_]=arguments[_];return(v=n.get(d))==null?void 0:v.map(y=>y(...E)).find(y=>y!==void 0)}}}else i[d]=u}),i),{})}}function eu(e){e===void 0&&(e=[]);const r=e.map(s=>s?.reference),t=e.map(s=>s?.floating),n=e.map(s=>s?.item),a=p.useCallback(s=>wt(s,e,"reference"),r),l=p.useCallback(s=>wt(s,e,"floating"),t),i=p.useCallback(s=>wt(s,e,"item"),n);return p.useMemo(()=>({getReferenceProps:a,getFloatingProps:l,getItemProps:i}),[a,l,i])}function nu(e,r,t){t===void 0&&(t=!0);let n=e.filter(l=>{var i;return l.parentId===r&&((i=l.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(l=>{var i;return(i=a)==null?void 0:i.some(s=>{var o;return l.parentId===s.id&&((o=l.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function Hr(e,r){const[t,n]=e;let a=!1;const l=r.length;for(let i=0,s=l-1;i<l;s=i++){const[o,d]=r[i]||[0,0],[u,m]=r[s]||[0,0];d>=n!=m>=n&&t<=(u-o)*(n-d)/(m-d)+o&&(a=!a)}return a}function tu(e,r){return e[0]>=r.x&&e[0]<=r.x+r.width&&e[1]>=r.y&&e[1]<=r.y+r.height}function ru(e){e===void 0&&(e={});const{buffer:r=.5,blockPointerEvents:t=!1,requireIntent:n=!0}=e;let a,l=!1,i=null,s=null,o=performance.now();function d(m,v){const c=performance.now(),E=c-o;if(i===null||s===null||E===0)return i=m,s=v,o=c,null;const _=m-i,y=v-s,R=Math.sqrt(_*_+y*y)/E;return i=m,s=v,o=c,R}const u=m=>{let{x:v,y:c,placement:E,elements:_,onClose:y,nodeId:T,tree:R}=m;return function(O){function A(){clearTimeout(a),y()}if(clearTimeout(a),!_.domReference||!_.floating||E==null||v==null||c==null)return;const{clientX:B,clientY:j}=O,$=[B,j],q=Yo(O),C=O.type==="mouseleave",U=At(_.floating,q),w=At(_.domReference,q),S=_.domReference.getBoundingClientRect(),k=_.floating.getBoundingClientRect(),I=E.split("-")[0],V=v>k.right-k.width/2,x=c>k.bottom-k.height/2,L=tu($,S),F=k.width>S.width,H=k.height>S.height,z=(F?S:k).left,W=(F?S:k).right,J=(H?S:k).top,Fe=(H?S:k).bottom;if(U&&(l=!0,!C))return;if(w&&(l=!1),w&&!C){l=!0;return}if(C&&te(O.relatedTarget)&&At(_.floating,O.relatedTarget)||R&&nu(R.nodesRef.current,T).some(le=>{let{context:Z}=le;return Z?.open}))return;if(I==="top"&&c>=S.bottom-1||I==="bottom"&&c<=S.top+1||I==="left"&&v>=S.right-1||I==="right"&&v<=S.left+1)return A();let ge=[];switch(I){case"top":ge=[[z,S.top+1],[z,k.bottom-1],[W,k.bottom-1],[W,S.top+1]];break;case"bottom":ge=[[z,k.top+1],[z,S.bottom-1],[W,S.bottom-1],[W,k.top+1]];break;case"left":ge=[[k.right-1,Fe],[k.right-1,J],[S.left+1,J],[S.left+1,Fe]];break;case"right":ge=[[S.right-1,Fe],[S.right-1,J],[k.left+1,J],[k.left+1,Fe]];break}function de(le){let[Z,re]=le;switch(I){case"top":{const pe=[F?Z+r/2:V?Z+r*4:Z-r*4,re+r+1],Ee=[F?Z-r/2:V?Z+r*4:Z-r*4,re+r+1],_e=[[k.left,V||F?k.bottom-r:k.top],[k.right,V?F?k.bottom-r:k.top:k.bottom-r]];return[pe,Ee,..._e]}case"bottom":{const pe=[F?Z+r/2:V?Z+r*4:Z-r*4,re-r],Ee=[F?Z-r/2:V?Z+r*4:Z-r*4,re-r],_e=[[k.left,V||F?k.top+r:k.bottom],[k.right,V?F?k.top+r:k.bottom:k.top+r]];return[pe,Ee,..._e]}case"left":{const pe=[Z+r+1,H?re+r/2:x?re+r*4:re-r*4],Ee=[Z+r+1,H?re-r/2:x?re+r*4:re-r*4];return[...[[x||H?k.right-r:k.left,k.top],[x?H?k.right-r:k.left:k.right-r,k.bottom]],pe,Ee]}case"right":{const pe=[Z-r,H?re+r/2:x?re+r*4:re-r*4],Ee=[Z-r,H?re-r/2:x?re+r*4:re-r*4],_e=[[x||H?k.left+r:k.right,k.top],[x?H?k.left+r:k.right:k.left+r,k.bottom]];return[pe,Ee,..._e]}}}if(!Hr([B,j],ge)){if(l&&!L)return A();if(!C&&n){const le=d(O.clientX,O.clientY);if(le!==null&&le<.1)return A()}Hr([B,j],de([v,c]))?!l&&n&&(a=window.setTimeout(A,40)):A()}}};return u.__options={blockPointerEvents:t},u}const el=()=>{const{cn:e}=X();return g.createElement(ja,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},au=()=>{const{cn:e}=X();return g.createElement(ja,{title:Bn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var lu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const nl=p.forwardRef((e,r)=>{var{className:t,header:n,children:a,open:l,defaultOpen:i=!1,onClick:s,size:o="medium",onOpenChange:d}=e,u=lu(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:m}=X(),[v,c]=er({defaultValue:i,value:l,onChange:d}),E=o==="small"?"small":"medium";return g.createElement("div",{className:m("navds-read-more",`navds-read-more--${o}`,t,{"navds-read-more--open":v}),"data-volume":"low"},g.createElement("button",Object.assign({},u,{ref:r,type:"button",className:m("navds-read-more__button","navds-body-short",{"navds-body-short--small":o==="small"}),onClick:Vn(s,()=>c(_=>!_)),"aria-expanded":v,"data-state":v?"open":"closed"}),g.createElement(nr,{className:m("navds-read-more__expand-icon"),"aria-hidden":!0}),g.createElement("span",null,n)),g.createElement(Qt,{as:"div","aria-hidden":!v,className:m("navds-read-more__content",{"navds-read-more__content--closed":!v}),size:E,"data-state":v?"open":"closed"},a))}),lt=p.createContext(null),or=(e,r)=>{var t,n,a;const{size:l,error:i,errorId:s}=e,o=p.useContext(lt),d=Je(),u=(t=e.id)!==null&&t!==void 0?t:`${r}-${d}`,m=s??`${r}-error-${d}`,v=`${r}-description-${d}`,c=o?.disabled||e.disabled,E=(o?.readOnly||e.readOnly)&&!c||void 0,_=!c&&!E&&!!(i||o?.error),y=!c&&!E&&!!i&&typeof i!="boolean",T=Object.assign({},_?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:y,hasError:_,errorId:m,inputDescriptionId:v,size:(n=l??o?.size)!==null&&n!==void 0?n:"medium",readOnly:E,inputProps:Object.assign(Object.assign({id:u},T),{"aria-describedby":gn(e["aria-describedby"],{[v]:e.description&&!it(e.description),[m]:y,[(a=o?.errorId)!==null&&a!==void 0?a:""]:_&&o?.error})||void 0,disabled:c})}};function it(e,r=!0){if(g.isValidElement(e)){if(e.type===nl)return!0;if(e.props.children&&r)return it(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>it(t,r));return!1}function ve(e,r,t,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,l])=>[`--__${e}c-${r}-${t}-${a}`,l])):{}}const iu={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},$r=(e,r,t,n,a,l)=>r.split(" ").map((i,s,o)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let u=`var(--${l}-${t}-${i})`;if(n.includes(i))u=i==="px"?"1px":i;else if(i.startsWith("space"))u=`var(--${l}-${i})`;else{const m=`--${l}-spacing-${i}`;u=`var(${(d=iu[m])!==null&&d!==void 0?d:m})`}return a?i==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function we(e,r,t,n,a,l=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${r}-${t}-xs`]:$r(t,a,n,i,l,e)};const s={};return Object.entries(a).forEach(([o,d])=>{s[`--__${e}c-${r}-${t}-${o}`]=$r(t,d,n,i,l,e)}),s}const su=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],ou=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:a,margin:l,marginInline:i,marginBlock:s,width:o,minWidth:d,maxWidth:u,height:m,minHeight:v,maxHeight:c,position:E,inset:_,top:y,right:T,left:R,bottom:h,overflow:O,overflowX:A,overflowY:B,flexBasis:j,flexGrow:$,flexShrink:q,gridColumn:C})=>{const U=xn(!1),{cn:w}=X(),S=U?.isDarkside?"ax":"a",k=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},we(S,"r","p","spacing",t)),we(S,"r","pi","spacing",n)),we(S,"r","pb","spacing",a)),we(S,"r","m","spacing",l)),we(S,"r","mi","spacing",i)),we(S,"r","mb","spacing",s)),ve(S,"r","w",o)),ve(S,"r","minw",d)),ve(S,"r","maxw",u)),ve(S,"r","h",m)),ve(S,"r","minh",v)),ve(S,"r","maxh",c)),ve(S,"r","position",E)),we(S,"r","inset","spacing",_)),we(S,"r","top","spacing",y)),we(S,"r","right","spacing",T)),we(S,"r","bottom","spacing",h)),we(S,"r","left","spacing",R)),ve(S,"r","overflow",O)),ve(S,"r","overflowx",A)),ve(S,"r","overflowy",B)),ve(S,"r","flex-basis",j)),ve(S,"r","flex-grow",$)),ve(S,"r","flex-shrink",q)),ve(S,"r","grid-column",C));return g.createElement(ct,{className:w({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":o,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":m,"navds-r-minh":v,"navds-r-maxh":c,"navds-r-position":E,"navds-r-inset":_,"navds-r-top":y,"navds-r-right":T,"navds-r-bottom":h,"navds-r-left":R,"navds-r-overflow":O,"navds-r-overflowx":A,"navds-r-overflowy":B,"navds-r-flex-basis":j,"navds-r-flex-grow":$,"navds-r-flex-shrink":q,"navds-r-grid-column":C}),style:k},e)};var uu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const tl=p.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",align:l,justify:i,wrap:s=!0,gap:o,style:d,direction:u="row",asChild:m}=e,v=uu(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const c=xn(!1),E=c?.isDarkside?"ax":"a",{cn:_}=X(),y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),we(E,"stack","gap","spacing",o)),ve(E,"stack","direction",u)),ve(E,"stack","align",l)),ve(E,"stack","justify",i)),T=m?ct:a;return g.createElement(ou,Object.assign({},v),g.createElement(T,Object.assign({},xe(v,su),{ref:r,style:y,className:_("navds-stack",n,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":o,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":s})}),t))});var du=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const mn=p.forwardRef((e,r)=>{var{as:t="div"}=e,n=du(e,["as"]);return g.createElement(tl,Object.assign({as:t},n,{ref:r,direction:"row"}))});var mu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ke=p.forwardRef((e,r)=>{var{as:t="div"}=e,n=mu(e,["as"]);return g.createElement(tl,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))});var cu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fu=p.forwardRef((e,r)=>{var{as:t="a",className:n,underline:a=!0,variant:l,inlineText:i=!1,"data-color":s}=e,o=cu(e,["as","className","underline","variant","inlineText","data-color"]);const d=xn(!1),{cn:u}=X();let m;return d?.isDarkside?m=l:m=l??"action",g.createElement(t,Object.assign({"data-color":s??vu(m),"data-variant":m},o,{ref:r,className:u("navds-link",n,{[`navds-link--${m}`]:m,"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});function vu(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var gu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const pu=p.forwardRef((e,r)=>{var{className:t}=e,n=gu(e,["className"]);const{cn:a}=X();return g.createElement("tbody",Object.assign({},n,{ref:r,className:a("navds-table__body",t)}))});var Eu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const rl=p.forwardRef((e,r)=>{var{className:t,children:n,align:a,textSize:l}=e,i=Eu(e,["className","children","align","textSize"]);const{cn:s}=X();return g.createElement("th",Object.assign({ref:r,className:s("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":l==="small"})},i),n)}),al=p.createContext(null);var _u=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const yu=p.forwardRef((e,r)=>{var t,n,a,l,{className:i,children:s,sortable:o=!1,sortKey:d}=e,u=_u(e,["className","children","sortable","sortKey"]);const m=p.useContext(al),{cn:v}=X();return o&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),g.createElement(rl,Object.assign({scope:"col",ref:r,className:v(i),"aria-sort":o?((t=m?.sort)===null||t===void 0?void 0:t.orderBy)===d?(n=m?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},u),o?g.createElement("button",{type:"button",className:v("navds-table__sort-button"),onClick:o&&d?()=>{var c;return(c=m?.onSortChange)===null||c===void 0?void 0:c.call(m,d)}:void 0},s,((a=m?.sort)===null||a===void 0?void 0:a.orderBy)===d?((l=m?.sort)===null||l===void 0?void 0:l.direction)==="descending"?g.createElement(bi,{"aria-hidden":!0}):g.createElement(hi,{"aria-hidden":!0}):g.createElement(ai,{"aria-hidden":!0})):s)});var bu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ll=p.forwardRef((e,r)=>{var{className:t,children:n="",align:a,textSize:l}=e,i=bu(e,["className","children","align","textSize"]);const{cn:s}=X();return g.createElement(fe,Object.assign({as:"td",ref:r,className:s("navds-table__data-cell",t,{[`navds-table__data-cell--align-${a}`]:a}),size:l},i),n)});var Ru=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const hu=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Tu(e){const r=parseFloat(e);return!Number.isNaN(r)&&Number.isFinite(r)}function Yr(e){return typeof e=="string"&&e[e.length-1]==="%"&&Tu(e.substring(0,e.length-1))}function It(e,r){r===0&&e?.style&&(e.style.display="none")}function ku(e,r){r===0&&e?.style&&(e.style.display="")}const Su=e=>{var{children:r,className:t,innerClassName:n,duration:a=250,easing:l="ease",height:i}=e,s=Ru(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=X(),d=p.useRef(i),u=p.useRef(null),m=p.useRef(),v=p.useRef(),c=p.useRef(i),E=p.useRef("visible"),_=hu?0:a;typeof c.current=="number"?(typeof i!="string"&&(c.current=i<0?0:i),E.current="hidden"):Yr(c.current)&&(c.current=i==="0%"?0:i,E.current="hidden");const[y,T]=p.useState(c.current),[R,h]=p.useState(E.current),[O,A]=p.useState(!1);p.useEffect(()=>{It(u.current,c.current)},[]),p.useEffect(()=>{if(i!==d.current&&u.current){ku(u.current,d.current),u.current.style.overflow="hidden";const q=u.current.offsetHeight;u.current.style.overflow="";const C=_;let U,w,S="hidden",k;const I=d.current==="auto";typeof i=="number"?(U=i<0?0:i,w=U):Yr(i)?(U=i==="0%"?0:i,w=U):(U=q,w="auto",S=void 0),I&&(w=U,U=q),T(U),h("hidden"),A(!I),clearTimeout(v.current),clearTimeout(m.current),I?(k=!0,v.current=setTimeout(()=>{T(w),h(S),A(k)},50),m.current=setTimeout(()=>{A(!1),It(u.current,w)},C)):v.current=setTimeout(()=>{T(w),h(S),A(!1),i!=="auto"&&It(u.current,U)},C)}return d.current=i,()=>{clearTimeout(v.current),clearTimeout(m.current)}},[i]);const B={height:y,overflow:R};O&&(B.transition=`height ${_}ms ${l} 0ms`,B.WebkitTransition=B.transition);const $=typeof s["aria-hidden"]<"u"?s["aria-hidden"]:i===0;return g.createElement("div",Object.assign({},s,{className:o(t),style:B}),g.createElement("div",{"aria-hidden":$,className:o(n),ref:u},r))},Nu=new Set(["BUTTON","A","INPUT","SELECT","TEXTAREA","DETAILS","SUMMARY","LABEL"]),Ou=new Set(["button","link","checkbox","radio","switch","menuitem","option","tab","textbox","combobox","spinbutton","slider"]);function il(e){for(let r=e;r&&r.nodeName!=="TR"&&r.nodeName!=="TH";r=r.parentElement){const t=r.nodeName;if(Nu.has(t))return!0;const n=r.getAttribute("role");if(n&&Ou.has(n)||r.hasAttribute("tabindex")&&r.getAttribute("tabindex")!=="-1")return!0}return!1}var Au=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const sl=p.forwardRef((e,r)=>{var{className:t,selected:n=!1,shadeOnHover:a=!0,onClick:l,onRowClick:i}=e,s=Au(e,["className","selected","shadeOnHover","onClick","onRowClick"]);const{cn:o}=X(),d=u=>{i&&(il(u.target)||i(u))};return g.createElement("tr",Object.assign({},s,{ref:r,className:o("navds-table__row",t,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a}),onClick:Vn(l,d),"data-interactive":!!i}))});var Pu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const wu=p.forwardRef((e,r)=>{var{className:t,children:n,content:a,togglePlacement:l="left",defaultOpen:i=!1,open:s,onOpenChange:o,expansionDisabled:d=!1,expandOnRowClick:u=!1,colSpan:m=999,contentGutter:v,onClick:c}=e,E=Pu(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:_}=X(),[y,T]=er({defaultValue:i,value:s,onChange:o}),R=Bn("global"),h=Je(),O=B=>{T(j=>!j),B.stopPropagation()},A=B=>{u&&!d&&!il(B.target)&&O(B)};return g.createElement(g.Fragment,null,g.createElement(sl,Object.assign({},E,{ref:r,className:_("navds-table__expandable-row",t,{"navds-table__expandable-row--open":y,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":u}),onClick:Vn(c,A)}),l==="right"&&n,g.createElement(ll,{className:_("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":y}),onClick:d?()=>null:O},!d&&g.createElement("button",{className:_("navds-table__toggle-expand-button"),type:"button","aria-controls":h,"aria-expanded":y,onClick:O},g.createElement(nr,{className:_("navds-table__expandable-icon"),title:R(y?"showLess":"showMore")}))),l==="left"&&n),g.createElement("tr",{"data-state":y?"open":"closed",className:_("navds-table__expanded-row"),"aria-hidden":!y,id:h},g.createElement("td",{colSpan:m,className:_("navds-table__expanded-row-cell")},g.createElement(Su,{className:_("navds-table__expanded-row-collapse"),innerClassName:_(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${v??l}`),height:y?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});var Iu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Fu=p.forwardRef((e,r)=>{var{className:t}=e,n=Iu(e,["className"]);const{cn:a}=X();return g.createElement("thead",Object.assign({},n,{ref:r,className:a("navds-table__header",t)}))});var Lu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ce=p.forwardRef((e,r)=>{var{className:t,zebraStripes:n=!1,size:a="medium",onSortChange:l,sort:i,stickyHeader:s=!1}=e,o=Lu(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:d}=X();return g.createElement(al.Provider,{value:{onSortChange:l,sort:i}},g.createElement("table",Object.assign({},o,{ref:r,className:d("navds-table",`navds-table--${a}`,t,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":s})})))});ce.Header=Fu;ce.Body=pu;ce.Row=sl;ce.ColumnHeader=yu;ce.HeaderCell=rl;ce.DataCell=ll;ce.ExpandableRow=wu;var Du=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const xu=p.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:l="medium",icon:i,"data-color":s}=e,o=Du(e,["children","className","variant","size","icon","data-color"]);const{cn:d}=X(),u=a?.endsWith("-filled")&&"strong",m=a?.endsWith("-moderate")&&"moderate";return g.createElement(fe,Object.assign({"data-color":s??Vu(a),"data-variant":u||m||"outline"},o,{ref:r,as:"span",size:l==="medium"?"medium":"small",className:d("navds-tag",n,`navds-tag--${a}`,`navds-tag--${l}`)}),i&&g.createElement("span",{className:d("navds-tag__icon--left")},i),t)});function Vu(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var Ku=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ol=p.forwardRef((e,r)=>{var{children:t,className:n,arrow:a=!0,placement:l="top",open:i,defaultOpen:s=!1,onOpenChange:o,offset:d,content:u,delay:m=150,id:v,keys:c,maxChar:E=80,describesChild:_=!1}=e,y=Ku(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:T}=X(),[R,h]=er({defaultValue:s,value:i,onChange:o}),O=p.useRef(null),A=Oi(!1),B=A?A.ref.current:void 0,{x:j,y:$,strategy:q,context:C,placement:U,middlewareData:{arrow:{x:w,y:S}={},hide:{referenceHidden:k}={}},refs:I}=Zo({placement:l,open:R,onOpenChange:z=>h(z),middleware:[io(d??(a?8:4)),so(),oo({padding:5,fallbackPlacements:["bottom","top"]}),uo({element:O,padding:5})],whileElementsMounted:A?(z,W,J)=>Dr(z,W,J,{animationFrame:!0}):Dr,strategy:A?"fixed":void 0}),{getReferenceProps:V,getFloatingProps:x}=eu([$o(C,{handleClose:ru(),restMs:m}),Qo(C),Jo(C)]),L=Je(v),F=Pa(r,I.setFloating);if(!t||t?.type===g.Fragment||t===g.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;u?.length>E&&R&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const H=_?R?{"aria-describedby":L}:{title:u}:{"aria-label":u};return g.createElement(g.Fragment,null,g.createElement(ct,Object.assign({ref:I.setReference},V(),H,{"aria-keyshortcuts":c?c.join("+"):void 0}),t),g.createElement(us,{rootElement:B,asChild:!0},R&&g.createElement("div",Object.assign({},x(Object.assign(Object.assign({},y),{ref:F,style:{position:q,top:$??0,left:j??0,visibility:k?"hidden":"visible"},role:"tooltip",id:L,className:T("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":U,"data-state":"open"}),u,c&&g.createElement("span",{className:T("navds-tooltip__keys"),"aria-hidden":!0},c.map(z=>g.createElement(Jl,{as:"kbd",key:z,className:T("navds-tooltip__key")},z))),a&&g.createElement("div",{ref:z=>{O.current=z},className:T("navds-tooltip__arrow"),style:{left:w!=null?`${w}px`:"",top:S!=null?`${S}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[U]]:"-3.5px"}}))))}),ju=(e,r)=>{const t=or(e,"fieldset");return Object.assign(Object.assign({},t),{inputProps:{"aria-labelledby":e["aria-labelledby"]||gn(r,{[t.inputDescriptionId]:e.description&&!it(e.description)})}})};var Mu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Bu=p.forwardRef((e,r)=>{var t,n,a;const l=Je(),{inputProps:i,errorId:s,showErrorMsg:o,hasError:d,size:u,readOnly:m,inputDescriptionId:v}=ju(e,l),{cn:c}=X(),E=p.useContext(lt),{children:_,className:y,errorPropagation:T=!0,legend:R,description:h,hideLegend:O,nativeReadOnly:A=!0}=e,B=Mu(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return g.createElement(lt.Provider,{value:{error:T?(t=e.error)!==null&&t!==void 0?t:E?.error:void 0,errorId:gn({[s]:o,[(n=E?.errorId)!==null&&n!==void 0?n:""]:!!E?.error}),size:u,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:m}},g.createElement("fieldset",Object.assign({},xe(B,["errorId","error","size","readOnly"]),i,{ref:r,className:c(y,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":m})}),g.createElement(_n,{id:l,size:u,as:"legend",className:c("navds-fieldset__legend",{"navds-sr-only":!!O})},m&&(A?g.createElement(el,null):g.createElement(au,null)),R),!!h&&g.createElement(fe,{className:c("navds-fieldset__description",{"navds-sr-only":!!O}),id:v,size:u??"medium",as:"div"},e.description),_,g.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:c("navds-fieldset__error")},o&&g.createElement(xa,{size:u,showIcon:!0},e.error))))});var Gu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ul=g.createContext(null),qu=p.forwardRef((e,r)=>{var t,n,{children:a,className:l,name:i,defaultValue:s,value:o,onChange:d=()=>{},required:u,readOnly:m}=e,v=Gu(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:c}=X(),E=p.useContext(lt),_=Je();return g.createElement(Bu,Object.assign({},v,{readOnly:m,ref:r,className:c(l,"navds-radio-group",`navds-radio-group--${(n=(t=v.size)!==null&&t!==void 0?t:E?.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),g.createElement(ul.Provider,{value:{name:i??`radioGroupName-${_}`,defaultValue:s,value:o,onChange:d,required:u}},g.createElement("div",{className:c("navds-radio-buttons")},a)))});var Uu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Cu=e=>{const r=p.useContext(ul),t=or(xe(e,["description"]),"radio"),{inputProps:n,readOnly:a}=t,l=Uu(t,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:r?.name,defaultChecked:r?.defaultValue===void 0?void 0:r?.defaultValue===e.value,checked:r?.value===void 0?void 0:r?.value===e.value,onChange:i=>{var s,o;a||((s=e.onChange)===null||s===void 0||s.call(e,i),(o=r?.onChange)===null||o===void 0||o.call(r,e.value))},onClick:i=>{var s;if(a){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:r?.required,type:"radio"})})},Ft=p.forwardRef((e,r)=>{const{cn:t}=X(),{inputProps:n,size:a,hasError:l,readOnly:i}=Cu(e),s=Je(),o=xn(!1);return o?.isDarkside?g.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":l,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},g.createElement("input",Object.assign({},xe(e,["children","size","description","readOnly"]),xe(n,["aria-invalid","aria-describedby"]),{"aria-describedby":gn(n["aria-describedby"],{[s]:e.description})||void 0,className:t("navds-radio__input"),ref:r})),g.createElement(fe,{as:"label",htmlFor:n.id,className:t("navds-radio__label"),size:a},e.children),e.description&&g.createElement(fe,{id:s,size:a,className:t("navds-form-field__subdescription navds-radio__description")},e.description)):g.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":l,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},g.createElement("input",Object.assign({},xe(e,["children","size","description","readOnly"]),xe(n,["aria-invalid"]),{className:t("navds-radio__input"),ref:r})),g.createElement("label",{htmlFor:n.id,className:t("navds-radio__label")},g.createElement("span",{className:t("navds-radio__content")},g.createElement(fe,{as:"span",size:a},e.children),e.description&&g.createElement(fe,{as:"span",size:a,className:t("navds-form-field__subdescription navds-radio__description")},e.description))))});var Hu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const zr=(e,r,t)=>{const{outerHeightStyle:n,overflow:a}=r;return t.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(t.current+=1,r):e},Wr=e=>(e?.ownerDocument||document).defaultView||window;function Yn(e){return parseInt(e,10)||0}const $u=p.forwardRef((e,r)=>{var t,n,{className:a,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:o,style:d,value:u}=e,m=Hu(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:v}=p.useRef(u!=null),c=p.useRef(null),E=Pa(c,r),_=p.useRef(null),y=p.useRef(0),[T,R]=p.useState({outerHeightStyle:0}),h=g.useCallback(()=>{const j=c.current,q=Wr(j).getComputedStyle(j);if(q.width==="0px")return{outerHeightStyle:0};const C=_.current;C.style.width=q.width,C.value=j.value||m.placeholder||"x",C.value.slice(-1)===`
`&&(C.value+=" ");const U=q.boxSizing,w=Yn(q.paddingBottom)+Yn(q.paddingTop),S=Yn(q.borderBottomWidth)+Yn(q.borderTopWidth),k=C.scrollHeight-w;C.value="x";const I=C.scrollHeight-w;let V=k;s&&(V=Math.max(Number(s)*I,V)),i&&(V=Math.min(Number(i)*I,V)),V=Math.max(V,I);const x=V+(U==="border-box"?w+S:0),L=Math.abs(V-k)<=1;return{outerHeightStyle:x,overflow:L}},[i,s,m.placeholder]),O=()=>{const j=h();Jr(j)||R($=>zr($,j,y))};hr(()=>{const j=()=>{const w=h();Jr(w)||Mt.flushSync(()=>{R(S=>zr(S,w,y))})},$=Ka(()=>{var w,S,k;if(y.current=0,!((w=c.current)===null||w===void 0)&&w.style.height||!((S=c.current)===null||S===void 0)&&S.style.width){((k=c.current)===null||k===void 0?void 0:k.style.overflow)==="hidden"&&R(I=>Object.assign(Object.assign({},I),{overflow:!1}));return}j()},166,!0),q=c.current,C=Wr(q);C.addEventListener("resize",$);let U;return typeof ResizeObserver<"u"&&(U=new ResizeObserver($),U.observe(q)),()=>{$.clear(),C.removeEventListener("resize",$),U&&U.disconnect()}},[h]),hr(()=>{O()}),p.useEffect(()=>{y.current=0},[u]);const A=j=>{y.current=0,v||O(),l&&l(j)},B=Object.assign({"--__ac-textarea-height":T.outerHeightStyle+"px","--__axc-textarea-height":T.outerHeightStyle+"px",overflow:T.overflow&&!o&&!(!((t=c.current)===null||t===void 0)&&t.style.height)&&!(!((n=c.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},d);return g.createElement(g.Fragment,null,g.createElement("textarea",Object.assign({value:u,onChange:A,ref:E,rows:s,style:B},m,{className:a})),g.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:_,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function Jr(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Yu=({maxLengthId:e,maxLength:r,currentLength:t,size:n,i18n:a})=>{const{cn:l}=X(),i=Bn("Textarea",{charsLeft:a?.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a?.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),s=r-t,[o,d]=p.useState(s);return p.useEffect(()=>{const u=Ka(()=>{d(s)},2e3);return u(),()=>{u.clear()}},[s]),g.createElement(g.Fragment,null,g.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:r})),s<20&&g.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},Xr(o,i)),g.createElement(fe,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:n},Xr(s,i)))},Xr=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var zu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Wu=p.forwardRef((e,r)=>{var t,n,a;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:o,size:d,inputDescriptionId:u}=or(e,"textarea"),{label:m,className:v,description:c,maxLength:E,hideLabel:_=!1,resize:y,UNSAFE_autoScrollbar:T,i18n:R,readOnly:h}=e,O=zu(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:A}=X(),B=Je(),j=E!==void 0&&E>0,[$,q]=p.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),C=()=>{let w=O?.minRows?O?.minRows:3;return d==="small"&&(w=O?.minRows?O?.minRows:2),w},U=gn(l["aria-describedby"],{[B??""]:j});return g.createElement("div",{className:A(v,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":h,"navds-textarea--readonly":h,"navds-textarea--error":o,"navds-textarea--autoscrollbar":T,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},g.createElement(_n,{htmlFor:l.id,size:d,className:A("navds-form-field__label",{"navds-sr-only":_})},h&&g.createElement(el,null),m),!!c&&g.createElement(fe,{className:A("navds-form-field__description",{"navds-sr-only":_}),id:u,size:d,as:"div"},c),g.createElement($u,Object.assign({},xe(O,["error","errorId","size"]),l,{onChange:Vn(e.onChange,e.value===void 0?w=>q(w.target.value):void 0),minRows:C(),autoScrollbar:T,ref:r,readOnly:h,className:A("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},U?{"aria-describedby":U}:{})),j&&!h&&!l.disabled&&g.createElement(Yu,{maxLengthId:B,maxLength:E,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:$.length,size:d,i18n:R}),g.createElement("div",{className:A("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&g.createElement(xa,{size:d,showIcon:!0},e.error)))});var Gn=e=>e.type==="checkbox",Qe=e=>e instanceof Date,ye=e=>e==null;const dl=e=>typeof e=="object";var ue=e=>!ye(e)&&!Array.isArray(e)&&dl(e)&&!Qe(e),ml=e=>ue(e)&&e.target?Gn(e.target)?e.target.checked:e.target.value:e,Ju=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,cl=(e,r)=>e.has(Ju(r)),Xu=e=>{const r=e.constructor&&e.constructor.prototype;return ue(r)&&r.hasOwnProperty("isPrototypeOf")},ur=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function me(e){let r;const t=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(ur&&(e instanceof Blob||n))&&(t||ue(e)))if(r=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!Xu(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=me(e[a]));else return e;return r}var _t=e=>/^\w*$/.test(e),ie=e=>e===void 0,dr=e=>Array.isArray(e)?e.filter(Boolean):[],mr=e=>dr(e.replace(/["|']|\]/g,"").split(/\.|\[/)),M=(e,r,t)=>{if(!r||!ue(e))return t;const n=(_t(r)?[r]:mr(r)).reduce((a,l)=>ye(a)?a:a[l],e);return ie(n)||n===e?ie(e[r])?t:e[r]:n},Te=e=>typeof e=="boolean",ne=(e,r,t)=>{let n=-1;const a=_t(r)?[r]:mr(r),l=a.length,i=l-1;for(;++n<l;){const s=a[n];let o=t;if(n!==i){const d=e[s];o=ue(d)||Array.isArray(d)?d:isNaN(+a[n+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=o,e=e[s]}};const st={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Le={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},cr=g.createContext(null);cr.displayName="HookFormContext";const rn=()=>g.useContext(cr),Zu=e=>{const{children:r,...t}=e;return g.createElement(cr.Provider,{value:t},r)};var fl=(e,r,t,n=!0)=>{const a={defaultValues:r._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const i=l;return r._proxyFormState[i]!==Le.all&&(r._proxyFormState[i]=!n||Le.all),t&&(t[i]=!0),e[i]}});return a};const fr=typeof window<"u"?g.useLayoutEffect:g.useEffect;function Qu(e){const r=rn(),{control:t=r.control,disabled:n,name:a,exact:l}=e||{},[i,s]=g.useState(t._formState),o=g.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return fr(()=>t._subscribe({name:a,formState:o.current,exact:l,callback:d=>{!n&&s({...t._formState,...d})}}),[a,n,l]),g.useEffect(()=>{o.current.isValid&&t._setValid(!0)},[t]),g.useMemo(()=>fl(i,t,o.current,!1),[i,t])}var ke=e=>typeof e=="string",vl=(e,r,t,n,a)=>ke(e)?(n&&r.watch.add(e),M(t,e,a)):Array.isArray(e)?e.map(l=>(n&&r.watch.add(l),M(t,l))):(n&&(r.watchAll=!0),t),Ct=e=>ye(e)||!dl(e);function Ue(e,r,t=new WeakSet){if(Ct(e)||Ct(r))return e===r;if(Qe(e)&&Qe(r))return e.getTime()===r.getTime();const n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;if(t.has(e)||t.has(r))return!0;t.add(e),t.add(r);for(const l of n){const i=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const s=r[l];if(Qe(i)&&Qe(s)||ue(i)&&ue(s)||Array.isArray(i)&&Array.isArray(s)?!Ue(i,s,t):i!==s)return!1}}return!0}function ed(e){const r=rn(),{control:t=r.control,name:n,defaultValue:a,disabled:l,exact:i,compute:s}=e||{},o=g.useRef(a),d=g.useRef(s),u=g.useRef(void 0);d.current=s;const m=g.useMemo(()=>t._getWatch(n,o.current),[t,n]),[v,c]=g.useState(d.current?d.current(m):m);return fr(()=>t._subscribe({name:n,formState:{values:!0},exact:i,callback:E=>{if(!l){const _=vl(n,t._names,E.values||t._formValues,!1,o.current);if(d.current){const y=d.current(_);Ue(y,u.current)||(c(y),u.current=y)}else c(_)}}}),[t,l,n,i]),g.useEffect(()=>t._removeUnmounted()),v}function gl(e){const r=rn(),{name:t,disabled:n,control:a=r.control,shouldUnregister:l,defaultValue:i}=e,s=cl(a._names.array,t),o=g.useMemo(()=>M(a._formValues,t,M(a._defaultValues,t,i)),[a,t,i]),d=ed({control:a,name:t,defaultValue:o,exact:!0}),u=Qu({control:a,name:t,exact:!0}),m=g.useRef(e),v=g.useRef(void 0),c=g.useRef(a.register(t,{...e.rules,value:d,...Te(e.disabled)?{disabled:e.disabled}:{}}));m.current=e;const E=g.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!M(u.errors,t)},isDirty:{enumerable:!0,get:()=>!!M(u.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!M(u.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!M(u.validatingFields,t)},error:{enumerable:!0,get:()=>M(u.errors,t)}}),[u,t]),_=g.useCallback(h=>c.current.onChange({target:{value:ml(h),name:t},type:st.CHANGE}),[t]),y=g.useCallback(()=>c.current.onBlur({target:{value:M(a._formValues,t),name:t},type:st.BLUR}),[t,a._formValues]),T=g.useCallback(h=>{const O=M(a._fields,t);O&&h&&(O._f.ref={focus:()=>h.focus&&h.focus(),select:()=>h.select&&h.select(),setCustomValidity:A=>h.setCustomValidity(A),reportValidity:()=>h.reportValidity()})},[a._fields,t]),R=g.useMemo(()=>({name:t,value:d,...Te(n)||u.disabled?{disabled:u.disabled||n}:{},onChange:_,onBlur:y,ref:T}),[t,n,u.disabled,_,y,T,d]);return g.useEffect(()=>{const h=a._options.shouldUnregister||l,O=v.current;O&&O!==t&&!s&&a.unregister(O),a.register(t,{...m.current.rules,...Te(m.current.disabled)?{disabled:m.current.disabled}:{}});const A=(B,j)=>{const $=M(a._fields,B);$&&$._f&&($._f.mount=j)};if(A(t,!0),h){const B=me(M(a._options.defaultValues,t));ne(a._defaultValues,t,B),ie(M(a._formValues,t))&&ne(a._formValues,t,B)}return!s&&a.register(t),v.current=t,()=>{(s?h&&!a._state.action:h)?a.unregister(t):A(t,!1)}},[t,a,s,l]),g.useEffect(()=>{a._setDisabledField({disabled:n,name:t})},[n,t,a]),g.useMemo(()=>({field:R,formState:u,fieldState:E}),[R,u,E])}var nd=(e,r,t,n,a)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:a||!0}}:{},wn=e=>Array.isArray(e)?e:[e],Zr=()=>{let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}};function pl(e,r){const t={};for(const n in e)if(e.hasOwnProperty(n)){const a=e[n],l=r[n];if(a&&ue(a)&&l){const i=pl(a,l);ue(i)&&(t[n]=i)}else e[n]&&(t[n]=l)}return t}var Re=e=>ue(e)&&!Object.keys(e).length,vr=e=>e.type==="file",De=e=>typeof e=="function",ot=e=>{if(!ur)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},El=e=>e.type==="select-multiple",gr=e=>e.type==="radio",td=e=>gr(e)||Gn(e),Lt=e=>ot(e)&&e.isConnected;function rd(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=ie(e)?n++:e[r[n++]];return e}function ad(e){for(const r in e)if(e.hasOwnProperty(r)&&!ie(e[r]))return!1;return!0}function oe(e,r){const t=Array.isArray(r)?r:_t(r)?[r]:mr(r),n=t.length===1?e:rd(e,t),a=t.length-1,l=t[a];return n&&delete n[l],a!==0&&(ue(n)&&Re(n)||Array.isArray(n)&&ad(n))&&oe(e,t.slice(0,-1)),e}var ld=e=>{for(const r in e)if(De(e[r]))return!0;return!1};function _l(e){return Array.isArray(e)||ue(e)&&!ld(e)}function Ht(e,r={}){for(const t in e)_l(e[t])?(r[t]=Array.isArray(e[t])?[]:{},Ht(e[t],r[t])):ye(e[t])||(r[t]=!0);return r}function on(e,r,t){t||(t=Ht(r));for(const n in e)_l(e[n])?ie(r)||Ct(t[n])?t[n]=Ht(e[n],Array.isArray(e[n])?[]:{}):on(e[n],ye(r)?{}:r[n],t[n]):t[n]=!Ue(e[n],r[n]);return t}const Qr={value:!1,isValid:!1},ea={value:!0,isValid:!0};var yl=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ie(e[0].attributes.value)?ie(e[0].value)||e[0].value===""?ea:{value:e[0].value,isValid:!0}:ea:Qr}return Qr},bl=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>ie(e)?e:r?e===""?NaN:e&&+e:t&&ke(e)?new Date(e):n?n(e):e;const na={isValid:!1,value:null};var Rl=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,na):na;function ta(e){const r=e.ref;return vr(r)?r.files:gr(r)?Rl(e.refs).value:El(r)?[...r.selectedOptions].map(({value:t})=>t):Gn(r)?yl(e.refs).value:bl(ie(r.value)?e.ref.value:r.value,e)}var id=(e,r,t,n)=>{const a={};for(const l of e){const i=M(r,l);i&&ne(a,l,i._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:n}},ut=e=>e instanceof RegExp,Nn=e=>ie(e)?e:ut(e)?e.source:ue(e)?ut(e.value)?e.value.source:e.value:e,ra=e=>({isOnSubmit:!e||e===Le.onSubmit,isOnBlur:e===Le.onBlur,isOnChange:e===Le.onChange,isOnAll:e===Le.all,isOnTouch:e===Le.onTouched});const aa="AsyncFunction";var sd=e=>!!e&&!!e.validate&&!!(De(e.validate)&&e.validate.constructor.name===aa||ue(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===aa)),od=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),la=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const In=(e,r,t,n)=>{for(const a of t||Object.keys(e)){const l=M(e,a);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],a)&&!n)return!0;if(i.ref&&r(i.ref,i.name)&&!n)return!0;if(In(s,r))break}else if(ue(s)&&In(s,r))break}}};function ia(e,r,t){const n=M(e,t);if(n||_t(t))return{error:n,name:t};const a=t.split(".");for(;a.length;){const l=a.join("."),i=M(r,l),s=M(e,l);if(i&&!Array.isArray(i)&&t!==l)return{name:t};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};a.pop()}return{name:t}}var ud=(e,r,t,n)=>{t(e);const{name:a,...l}=e;return Re(l)||Object.keys(l).length>=Object.keys(r).length||Object.keys(l).find(i=>r[i]===(!n||Le.all))},dd=(e,r,t)=>!e||!r||e===r||wn(e).some(n=>n&&(t?n===r:n.startsWith(r)||r.startsWith(n))),md=(e,r,t,n,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(r||e):(t?n.isOnBlur:a.isOnBlur)?!e:(t?n.isOnChange:a.isOnChange)?e:!0,cd=(e,r)=>!dr(M(e,r)).length&&oe(e,r),fd=(e,r,t)=>{const n=wn(M(e,t));return ne(n,"root",r[t]),ne(e,t,n),e};function sa(e,r,t="validate"){if(ke(e)||Array.isArray(e)&&e.every(ke)||Te(e)&&!e)return{type:t,message:ke(e)?e:"",ref:r}}var ln=e=>ue(e)&&!ut(e)?e:{value:e,message:""},oa=async(e,r,t,n,a,l)=>{const{ref:i,refs:s,required:o,maxLength:d,minLength:u,min:m,max:v,pattern:c,validate:E,name:_,valueAsNumber:y,mount:T}=e._f,R=M(t,_);if(!T||r.has(_))return{};const h=s?s[0]:i,O=w=>{a&&h.reportValidity&&(h.setCustomValidity(Te(w)?"":w||""),h.reportValidity())},A={},B=gr(i),j=Gn(i),$=B||j,q=(y||vr(i))&&ie(i.value)&&ie(R)||ot(i)&&i.value===""||R===""||Array.isArray(R)&&!R.length,C=nd.bind(null,_,n,A),U=(w,S,k,I=Ge.maxLength,V=Ge.minLength)=>{const x=w?S:k;A[_]={type:w?I:V,message:x,ref:i,...C(w?I:V,x)}};if(l?!Array.isArray(R)||!R.length:o&&(!$&&(q||ye(R))||Te(R)&&!R||j&&!yl(s).isValid||B&&!Rl(s).isValid)){const{value:w,message:S}=ke(o)?{value:!!o,message:o}:ln(o);if(w&&(A[_]={type:Ge.required,message:S,ref:h,...C(Ge.required,S)},!n))return O(S),A}if(!q&&(!ye(m)||!ye(v))){let w,S;const k=ln(v),I=ln(m);if(!ye(R)&&!isNaN(R)){const V=i.valueAsNumber||R&&+R;ye(k.value)||(w=V>k.value),ye(I.value)||(S=V<I.value)}else{const V=i.valueAsDate||new Date(R),x=H=>new Date(new Date().toDateString()+" "+H),L=i.type=="time",F=i.type=="week";ke(k.value)&&R&&(w=L?x(R)>x(k.value):F?R>k.value:V>new Date(k.value)),ke(I.value)&&R&&(S=L?x(R)<x(I.value):F?R<I.value:V<new Date(I.value))}if((w||S)&&(U(!!w,k.message,I.message,Ge.max,Ge.min),!n))return O(A[_].message),A}if((d||u)&&!q&&(ke(R)||l&&Array.isArray(R))){const w=ln(d),S=ln(u),k=!ye(w.value)&&R.length>+w.value,I=!ye(S.value)&&R.length<+S.value;if((k||I)&&(U(k,w.message,S.message),!n))return O(A[_].message),A}if(c&&!q&&ke(R)){const{value:w,message:S}=ln(c);if(ut(w)&&!R.match(w)&&(A[_]={type:Ge.pattern,message:S,ref:i,...C(Ge.pattern,S)},!n))return O(S),A}if(E){if(De(E)){const w=await E(R,t),S=sa(w,h);if(S&&(A[_]={...S,...C(Ge.validate,S.message)},!n))return O(S.message),A}else if(ue(E)){let w={};for(const S in E){if(!Re(w)&&!n)break;const k=sa(await E[S](R,t),h,S);k&&(w={...k,...C(S,k.message)},O(k.message),n&&(A[_]=w))}if(!Re(w)&&(A[_]={ref:h,...w},!n))return A}}return O(!0),A};const vd={mode:Le.onSubmit,reValidateMode:Le.onChange,shouldFocusError:!0};function gd(e={}){let r={...vd,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:De(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},a=ue(r.defaultValues)||ue(r.values)?me(r.defaultValues||r.values)||{}:{},l=r.shouldUnregister?{}:me(a),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},o,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let m={...u};const v={array:Zr(),state:Zr()},c=r.criteriaMode===Le.all,E=f=>b=>{clearTimeout(d),d=setTimeout(f,b)},_=async f=>{if(!r.disabled&&(u.isValid||m.isValid||f)){const b=r.resolver?Re((await j()).errors):await q(n,!0);b!==t.isValid&&v.state.next({isValid:b})}},y=(f,b)=>{!r.disabled&&(u.isValidating||u.validatingFields||m.isValidating||m.validatingFields)&&((f||Array.from(s.mount)).forEach(N=>{N&&(b?ne(t.validatingFields,N,b):oe(t.validatingFields,N))}),v.state.next({validatingFields:t.validatingFields,isValidating:!Re(t.validatingFields)}))},T=(f,b=[],N,G,K=!0,D=!0)=>{if(G&&N&&!r.disabled){if(i.action=!0,D&&Array.isArray(M(n,f))){const Y=N(M(n,f),G.argA,G.argB);K&&ne(n,f,Y)}if(D&&Array.isArray(M(t.errors,f))){const Y=N(M(t.errors,f),G.argA,G.argB);K&&ne(t.errors,f,Y),cd(t.errors,f)}if((u.touchedFields||m.touchedFields)&&D&&Array.isArray(M(t.touchedFields,f))){const Y=N(M(t.touchedFields,f),G.argA,G.argB);K&&ne(t.touchedFields,f,Y)}(u.dirtyFields||m.dirtyFields)&&(t.dirtyFields=on(a,l)),v.state.next({name:f,isDirty:U(f,b),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else ne(l,f,b)},R=(f,b)=>{ne(t.errors,f,b),v.state.next({errors:t.errors})},h=f=>{t.errors=f,v.state.next({errors:t.errors,isValid:!1})},O=(f,b,N,G)=>{const K=M(n,f);if(K){const D=M(l,f,ie(N)?M(a,f):N);ie(D)||G&&G.defaultChecked||b?ne(l,f,b?D:ta(K._f)):k(f,D),i.mount&&_()}},A=(f,b,N,G,K)=>{let D=!1,Y=!1;const Q={name:f};if(!r.disabled){if(!N||G){(u.isDirty||m.isDirty)&&(Y=t.isDirty,t.isDirty=Q.isDirty=U(),D=Y!==Q.isDirty);const ee=Ue(M(a,f),b);Y=!!M(t.dirtyFields,f),ee?oe(t.dirtyFields,f):ne(t.dirtyFields,f,!0),Q.dirtyFields=t.dirtyFields,D=D||(u.dirtyFields||m.dirtyFields)&&Y!==!ee}if(N){const ee=M(t.touchedFields,f);ee||(ne(t.touchedFields,f,N),Q.touchedFields=t.touchedFields,D=D||(u.touchedFields||m.touchedFields)&&ee!==N)}D&&K&&v.state.next(Q)}return D?Q:{}},B=(f,b,N,G)=>{const K=M(t.errors,f),D=(u.isValid||m.isValid)&&Te(b)&&t.isValid!==b;if(r.delayError&&N?(o=E(()=>R(f,N)),o(r.delayError)):(clearTimeout(d),o=null,N?ne(t.errors,f,N):oe(t.errors,f)),(N?!Ue(K,N):K)||!Re(G)||D){const Y={...G,...D&&Te(b)?{isValid:b}:{},errors:t.errors,name:f};t={...t,...Y},v.state.next(Y)}},j=async f=>{y(f,!0);const b=await r.resolver(l,r.context,id(f||s.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return y(f),b},$=async f=>{const{errors:b}=await j(f);if(f)for(const N of f){const G=M(b,N);G?ne(t.errors,N,G):oe(t.errors,N)}else t.errors=b;return b},q=async(f,b,N={valid:!0})=>{for(const G in f){const K=f[G];if(K){const{_f:D,...Y}=K;if(D){const Q=s.array.has(D.name),ee=K._f&&sd(K._f);ee&&u.validatingFields&&y([D.name],!0);const Ae=await oa(K,s.disabled,l,c,r.shouldUseNativeValidation&&!b,Q);if(ee&&u.validatingFields&&y([D.name]),Ae[D.name]&&(N.valid=!1,b))break;!b&&(M(Ae,D.name)?Q?fd(t.errors,Ae,D.name):ne(t.errors,D.name,Ae[D.name]):oe(t.errors,D.name))}!Re(Y)&&await q(Y,b,N)}}return N.valid},C=()=>{for(const f of s.unMount){const b=M(n,f);b&&(b._f.refs?b._f.refs.every(N=>!Lt(N)):!Lt(b._f.ref))&&le(f)}s.unMount=new Set},U=(f,b)=>!r.disabled&&(f&&b&&ne(l,f,b),!Ue(H(),a)),w=(f,b,N)=>vl(f,s,{...i.mount?l:ie(b)?a:ke(f)?{[f]:b}:b},N,b),S=f=>dr(M(i.mount?l:a,f,r.shouldUnregister?M(a,f,[]):[])),k=(f,b,N={})=>{const G=M(n,f);let K=b;if(G){const D=G._f;D&&(!D.disabled&&ne(l,f,bl(b,D)),K=ot(D.ref)&&ye(b)?"":b,El(D.ref)?[...D.ref.options].forEach(Y=>Y.selected=K.includes(Y.value)):D.refs?Gn(D.ref)?D.refs.forEach(Y=>{(!Y.defaultChecked||!Y.disabled)&&(Array.isArray(K)?Y.checked=!!K.find(Q=>Q===Y.value):Y.checked=K===Y.value||!!K)}):D.refs.forEach(Y=>Y.checked=Y.value===K):vr(D.ref)?D.ref.value="":(D.ref.value=K,D.ref.type||v.state.next({name:f,values:me(l)})))}(N.shouldDirty||N.shouldTouch)&&A(f,K,N.shouldTouch,N.shouldDirty,!0),N.shouldValidate&&F(f)},I=(f,b,N)=>{for(const G in b){if(!b.hasOwnProperty(G))return;const K=b[G],D=f+"."+G,Y=M(n,D);(s.array.has(f)||ue(K)||Y&&!Y._f)&&!Qe(K)?I(D,K,N):k(D,K,N)}},V=(f,b,N={})=>{const G=M(n,f),K=s.array.has(f),D=me(b);ne(l,f,D),K?(v.array.next({name:f,values:me(l)}),(u.isDirty||u.dirtyFields||m.isDirty||m.dirtyFields)&&N.shouldDirty&&v.state.next({name:f,dirtyFields:on(a,l),isDirty:U(f,D)})):G&&!G._f&&!ye(D)?I(f,D,N):k(f,D,N),la(f,s)&&v.state.next({...t,name:f}),v.state.next({name:i.mount?f:void 0,values:me(l)})},x=async f=>{i.mount=!0;const b=f.target;let N=b.name,G=!0;const K=M(n,N),D=ee=>{G=Number.isNaN(ee)||Qe(ee)&&isNaN(ee.getTime())||Ue(ee,M(l,N,ee))},Y=ra(r.mode),Q=ra(r.reValidateMode);if(K){let ee,Ae;const Cn=b.type?ta(K._f):ml(f),Ye=f.type===st.BLUR||f.type===st.FOCUS_OUT,Il=!od(K._f)&&!r.resolver&&!M(t.errors,N)&&!K._f.deps||md(Ye,M(t.touchedFields,N),t.isSubmitted,Q,Y),yt=la(N,s,Ye);ne(l,N,Cn),Ye?(!b||!b.readOnly)&&(K._f.onBlur&&K._f.onBlur(f),o&&o(0)):K._f.onChange&&K._f.onChange(f);const bt=A(N,Cn,Ye),Fl=!Re(bt)||yt;if(!Ye&&v.state.next({name:N,type:f.type,values:me(l)}),Il)return(u.isValid||m.isValid)&&(r.mode==="onBlur"?Ye&&_():Ye||_()),Fl&&v.state.next({name:N,...yt?{}:bt});if(!Ye&&yt&&v.state.next({...t}),r.resolver){const{errors:_r}=await j([N]);if(D(Cn),G){const Ll=ia(t.errors,n,N),yr=ia(_r,n,Ll.name||N);ee=yr.error,N=yr.name,Ae=Re(_r)}}else y([N],!0),ee=(await oa(K,s.disabled,l,c,r.shouldUseNativeValidation))[N],y([N]),D(Cn),G&&(ee?Ae=!1:(u.isValid||m.isValid)&&(Ae=await q(n,!0)));G&&(K._f.deps&&(!Array.isArray(K._f.deps)||K._f.deps.length>0)&&F(K._f.deps),B(N,Ae,ee,bt))}},L=(f,b)=>{if(M(t.errors,b)&&f.focus)return f.focus(),1},F=async(f,b={})=>{let N,G;const K=wn(f);if(r.resolver){const D=await $(ie(f)?f:K);N=Re(D),G=f?!K.some(Y=>M(D,Y)):N}else f?(G=(await Promise.all(K.map(async D=>{const Y=M(n,D);return await q(Y&&Y._f?{[D]:Y}:Y)}))).every(Boolean),!(!G&&!t.isValid)&&_()):G=N=await q(n);return v.state.next({...!ke(f)||(u.isValid||m.isValid)&&N!==t.isValid?{}:{name:f},...r.resolver||!f?{isValid:N}:{},errors:t.errors}),b.shouldFocus&&!G&&In(n,L,f?K:s.mount),G},H=(f,b)=>{let N={...i.mount?l:a};return b&&(N=pl(b.dirtyFields?t.dirtyFields:t.touchedFields,N)),ie(f)?N:ke(f)?M(N,f):f.map(G=>M(N,G))},z=(f,b)=>({invalid:!!M((b||t).errors,f),isDirty:!!M((b||t).dirtyFields,f),error:M((b||t).errors,f),isValidating:!!M(t.validatingFields,f),isTouched:!!M((b||t).touchedFields,f)}),W=f=>{f&&wn(f).forEach(b=>oe(t.errors,b)),v.state.next({errors:f?t.errors:{}})},J=(f,b,N)=>{const G=(M(n,f,{_f:{}})._f||{}).ref,K=M(t.errors,f)||{},{ref:D,message:Y,type:Q,...ee}=K;ne(t.errors,f,{...ee,...b,ref:G}),v.state.next({name:f,errors:t.errors,isValid:!1}),N&&N.shouldFocus&&G&&G.focus&&G.focus()},Fe=(f,b)=>De(f)?v.state.subscribe({next:N=>"values"in N&&f(w(void 0,b),N)}):w(f,b,!0),ge=f=>v.state.subscribe({next:b=>{dd(f.name,b.name,f.exact)&&ud(b,f.formState||u,Tn,f.reRenderRoot)&&f.callback({values:{...l},...t,...b,defaultValues:a})}}).unsubscribe,de=f=>(i.mount=!0,m={...m,...f.formState},ge({...f,formState:m})),le=(f,b={})=>{for(const N of f?wn(f):s.mount)s.mount.delete(N),s.array.delete(N),b.keepValue||(oe(n,N),oe(l,N)),!b.keepError&&oe(t.errors,N),!b.keepDirty&&oe(t.dirtyFields,N),!b.keepTouched&&oe(t.touchedFields,N),!b.keepIsValidating&&oe(t.validatingFields,N),!r.shouldUnregister&&!b.keepDefaultValue&&oe(a,N);v.state.next({values:me(l)}),v.state.next({...t,...b.keepDirty?{isDirty:U()}:{}}),!b.keepIsValid&&_()},Z=({disabled:f,name:b})=>{(Te(f)&&i.mount||f||s.disabled.has(b))&&(f?s.disabled.add(b):s.disabled.delete(b))},re=(f,b={})=>{let N=M(n,f);const G=Te(b.disabled)||Te(r.disabled);return ne(n,f,{...N||{},_f:{...N&&N._f?N._f:{ref:{name:f}},name:f,mount:!0,...b}}),s.mount.add(f),N?Z({disabled:Te(b.disabled)?b.disabled:r.disabled,name:f}):O(f,!0,b.value),{...G?{disabled:b.disabled||r.disabled}:{},...r.progressive?{required:!!b.required,min:Nn(b.min),max:Nn(b.max),minLength:Nn(b.minLength),maxLength:Nn(b.maxLength),pattern:Nn(b.pattern)}:{},name:f,onChange:x,onBlur:x,ref:K=>{if(K){re(f,b),N=M(n,f);const D=ie(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,Y=td(D),Q=N._f.refs||[];if(Y?Q.find(ee=>ee===D):D===N._f.ref)return;ne(n,f,{_f:{...N._f,...Y?{refs:[...Q.filter(Lt),D,...Array.isArray(M(a,f))?[{}]:[]],ref:{type:D.type,name:f}}:{ref:D}}}),O(f,!1,void 0,D)}else N=M(n,f,{}),N._f&&(N._f.mount=!1),(r.shouldUnregister||b.shouldUnregister)&&!(cl(s.array,f)&&i.action)&&s.unMount.add(f)}}},pe=()=>r.shouldFocusError&&In(n,L,s.mount),Ee=f=>{Te(f)&&(v.state.next({disabled:f}),In(n,(b,N)=>{const G=M(n,N);G&&(b.disabled=G._f.disabled||f,Array.isArray(G._f.refs)&&G._f.refs.forEach(K=>{K.disabled=G._f.disabled||f}))},0,!1))},_e=(f,b)=>async N=>{let G;N&&(N.preventDefault&&N.preventDefault(),N.persist&&N.persist());let K=me(l);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:D,values:Y}=await j();t.errors=D,K=me(Y)}else await q(n);if(s.disabled.size)for(const D of s.disabled)oe(K,D);if(oe(t.errors,"root"),Re(t.errors)){v.state.next({errors:{}});try{await f(K,N)}catch(D){G=D}}else b&&await b({...t.errors},N),pe(),setTimeout(pe);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Re(t.errors)&&!G,submitCount:t.submitCount+1,errors:t.errors}),G)throw G},Xe=(f,b={})=>{M(n,f)&&(ie(b.defaultValue)?V(f,me(M(a,f))):(V(f,b.defaultValue),ne(a,f,me(b.defaultValue))),b.keepTouched||oe(t.touchedFields,f),b.keepDirty||(oe(t.dirtyFields,f),t.isDirty=b.defaultValue?U(f,me(M(a,f))):U()),b.keepError||(oe(t.errors,f),u.isValid&&_()),v.state.next({...t}))},Me=(f,b={})=>{const N=f?me(f):a,G=me(N),K=Re(f),D=K?a:G;if(b.keepDefaultValues||(a=N),!b.keepValues){if(b.keepDirtyValues){const Y=new Set([...s.mount,...Object.keys(on(a,l))]);for(const Q of Array.from(Y))M(t.dirtyFields,Q)?ne(D,Q,M(l,Q)):V(Q,M(D,Q))}else{if(ur&&ie(f))for(const Y of s.mount){const Q=M(n,Y);if(Q&&Q._f){const ee=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(ot(ee)){const Ae=ee.closest("form");if(Ae){Ae.reset();break}}}}if(b.keepFieldsRef)for(const Y of s.mount)V(Y,M(D,Y));else n={}}l=r.shouldUnregister?b.keepDefaultValues?me(a):{}:me(D),v.array.next({values:{...D}}),v.state.next({values:{...D}})}s={mount:b.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!b.keepIsValid||!!b.keepDirtyValues,i.watch=!!r.shouldUnregister,v.state.next({submitCount:b.keepSubmitCount?t.submitCount:0,isDirty:K?!1:b.keepDirty?t.isDirty:!!(b.keepDefaultValues&&!Ue(f,a)),isSubmitted:b.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:K?{}:b.keepDirtyValues?b.keepDefaultValues&&l?on(a,l):t.dirtyFields:b.keepDefaultValues&&f?on(a,f):b.keepDirty?t.dirtyFields:{},touchedFields:b.keepTouched?t.touchedFields:{},errors:b.keepErrors?t.errors:{},isSubmitSuccessful:b.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:a})},Be=(f,b)=>Me(De(f)?f(l):f,b),hn=(f,b={})=>{const N=M(n,f),G=N&&N._f;if(G){const K=G.refs?G.refs[0]:G.ref;K.focus&&(K.focus(),b.shouldSelect&&De(K.select)&&K.select())}},Tn=f=>{t={...t,...f}},an={control:{register:re,unregister:le,getFieldState:z,handleSubmit:_e,setError:J,_subscribe:ge,_runSchema:j,_focusError:pe,_getWatch:w,_getDirty:U,_setValid:_,_setFieldArray:T,_setDisabledField:Z,_setErrors:h,_getFieldArray:S,_reset:Me,_resetDefaultValues:()=>De(r.defaultValues)&&r.defaultValues().then(f=>{Be(f,r.resetOptions),v.state.next({isLoading:!1})}),_removeUnmounted:C,_disableForm:Ee,_subjects:v,_proxyFormState:u,get _fields(){return n},get _formValues(){return l},get _state(){return i},set _state(f){i=f},get _defaultValues(){return a},get _names(){return s},set _names(f){s=f},get _formState(){return t},get _options(){return r},set _options(f){r={...r,...f}}},subscribe:de,trigger:F,register:re,handleSubmit:_e,watch:Fe,setValue:V,getValues:H,reset:Be,resetField:Xe,clearErrors:W,unregister:le,setError:J,setFocus:hn,getFieldState:z};return{...an,formControl:an}}function pd(e={}){const r=g.useRef(void 0),t=g.useRef(void 0),[n,a]=g.useState({isDirty:!1,isValidating:!1,isLoading:De(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:De(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:n},e.defaultValues&&!De(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=gd(e);r.current={...s,formState:n}}const l=r.current.control;return l._options=e,fr(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>a({...l._formState}),reRenderRoot:!0});return a(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),g.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),g.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),g.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),g.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),g.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==n.isDirty&&l._subjects.state.next({isDirty:i})}},[l,n.isDirty]),g.useEffect(()=>{e.values&&!Ue(e.values,t.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),t.current=e.values,a(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),g.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),r.current.formState=fl(n,l),r.current}function Ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ua={exports:{}},On={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da;function _d(){if(da)return On;da=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:l}}return On.Fragment=r,On.jsx=t,On.jsxs=t,On}var ma;function yd(){return ma||(ma=1,ua.exports=_d()),ua.exports}var Se=yd();const bd=({children:e})=>{const r=p.Children.toArray(e);return r.length===0?null:Se.jsx(ho,{variant:"warning",size:"small",children:Se.jsx(Ke,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:r.map(t=>Se.jsx(fe,{size:"small",children:t},Rd(t)))})})},Rd=e=>{if(p.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},qn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};pn(qn);const dt="var(--ax-bg-neutral-strong)",hl=4,hd=(e,r,t)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${dt};
    border-radius: ${hl}px;
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
`,Td=(e,r,t)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${dt};
    border-radius: ${hl}px;
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
`,kd=(e,r,t,n)=>r?Td(e,t,n):hd(e,t,n),Sd=(e,r,t)=>t?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,Nd=({children:e,alignOffset:r=0,alignLeft:t=!1,marginTop:n=0,marginLeft:a=0,hideBorder:l=!1})=>Se.jsxs(Se.Fragment,{children:[Se.jsx("style",{dangerouslySetInnerHTML:{__html:kd(r,t,n,a)}}),Se.jsx("div",{className:Sd(r,t,l),children:e})]});var ca={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var fa;function Od(){return fa||(fa=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n.call(this,s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,this&&this[s]||s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(ca)),ca.exports}var Ad=Od();const pr=Ed(Ad),Pd="_borderbox_1a0x6_1",wd="_error_1a0x6_5",Id="_warning_1a0x6_8",Fd={borderbox:Pd,error:wd,warning:Id};pr.bind(Fd);const Ld="_aksjonspunkt_11wjs_1",Dd="_erAksjonspunktApent_11wjs_4",xd="_erIkkeGodkjentAvBeslutter_11wjs_8",Vd={aksjonspunkt:Ld,erAksjonspunktApent:Dd,erIkkeGodkjentAvBeslutter:xd};pr.bind(Vd);pn(qn);pn(qn);const Kd="_divider_1jpov_1",jd="_dividerParagraf_1jpov_8",Md="_leftPanel_1jpov_11",Bd="_rightPanel_1jpov_14",Gd={divider:Kd,dividerParagraf:jd,leftPanel:Md,rightPanel:Bd};pr.bind(Gd);const Tl=()=>Se.jsx("span",{"data-testid":"editedIcon",children:Se.jsx(pi,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});pn(qn);const qd=pn(qn),Ud=({tekst:e,children:r})=>{const[t,n]=p.useState(!1);if(!e)return r;const a=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return Se.jsx(ol,{content:qd.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Se.jsx("span",{"aria-hidden":"true",onClick:a,children:r??e})})},va={default:"_default_af3od_1",rød:"_rød_af3od_5"},Dt=({beløp:e,kr:r=!1,rød:t=!1})=>{const n=e?.toString().replace(/\s/g,"");return Se.jsx(Ud,{tekst:n,children:Se.jsxs("span",{className:t?va.rød:va.default,children:[n?wa(n):"-",n&&r&&" kr"]})})};var xt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ga;function Cd(){return ga||(ga=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n(s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(xt)),xt.exports}var Hd=Cd();const $d=Jt(Hd);function Yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pa={exports:{}},An={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea;function zd(){if(Ea)return An;Ea=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:l}}return An.Fragment=r,An.jsx=t,An.jsxs=t,An}var _a;function Wd(){return _a||(_a=1,pa.exports=zd()),pa.exports}var be=Wd();const kl=e=>e.reduce((r,t,n)=>({...r,[n]:a=>t(a)||!0}),{}),Sl=(e,r)=>r.split(".").reduce((t,n)=>t!==void 0?t[n]:t,e)?.message;var $t={exports:{}},Jd=$t.exports,ya;function Xd(){return ya||(ya=1,(function(e,r){(function(t,n){e.exports=n()})(Jd,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,o={},d=function(y){return(y=+y)+(y>68?1900:2e3)},u=function(y){return function(T){this[y]=+T}},m=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=(function(T){if(!T||T==="Z")return 0;var R=T.match(/([+-]|\d\d)/g),h=60*R[1]+(+R[2]||0);return h===0?0:R[0]==="+"?-h:h})(y)}],v=function(y){var T=o[y];return T&&(T.indexOf?T:T.s.concat(T.f))},c=function(y,T){var R,h=o.meridiem;if(h){for(var O=1;O<=24;O+=1)if(y.indexOf(h(O,0,T))>-1){R=O>12;break}}else R=y===(T?"pm":"PM");return R},E={A:[s,function(y){this.afternoon=c(y,!1)}],a:[s,function(y){this.afternoon=c(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[l,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[l,u("day")],Do:[s,function(y){var T=o.ordinal,R=y.match(/\d+/);if(this.day=R[0],T)for(var h=1;h<=31;h+=1)T(h).replace(/\[|\]/g,"")===y&&(this.day=h)}],w:[i,u("week")],ww:[l,u("week")],M:[i,u("month")],MM:[l,u("month")],MMM:[s,function(y){var T=v("months"),R=(v("monthsShort")||T.map(function(h){return h.slice(0,3)})).indexOf(y)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[s,function(y){var T=v("months").indexOf(y)+1;if(T<1)throw new Error;this.month=T%12||T}],Y:[/[+-]?\d+/,u("year")],YY:[l,function(y){this.year=d(y)}],YYYY:[/\d{4}/,u("year")],Z:m,ZZ:m};function _(y){var T,R;T=y,R=o&&o.formats;for(var h=(y=T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(C,U,w){var S=w&&w.toUpperCase();return U||R[w]||t[w]||R[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(k,I,V){return I||V.slice(1)})})).match(n),O=h.length,A=0;A<O;A+=1){var B=h[A],j=E[B],$=j&&j[0],q=j&&j[1];h[A]=q?{regex:$,parser:q}:B.replace(/^\[|\]$/g,"")}return function(C){for(var U={},w=0,S=0;w<O;w+=1){var k=h[w];if(typeof k=="string")S+=k.length;else{var I=k.regex,V=k.parser,x=C.slice(S),L=I.exec(x)[0];V.call(U,L),C=C.replace(L,"")}}return(function(F){var H=F.afternoon;if(H!==void 0){var z=F.hours;H?z<12&&(F.hours+=12):z===12&&(F.hours=0),delete F.afternoon}})(U),U}}return function(y,T,R){R.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(d=y.parseTwoDigitYear);var h=T.prototype,O=h.parse;h.parse=function(A){var B=A.date,j=A.utc,$=A.args;this.$u=j;var q=$[1];if(typeof q=="string"){var C=$[2]===!0,U=$[3]===!0,w=C||U,S=$[2];U&&(S=$[2]),o=this.$locale(),!C&&S&&(o=R.Ls[S]),this.$d=(function(x,L,F,H){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*x);var z=_(L)(x),W=z.year,J=z.month,Fe=z.day,ge=z.hours,de=z.minutes,le=z.seconds,Z=z.milliseconds,re=z.zone,pe=z.week,Ee=new Date,_e=Fe||(W||J?1:Ee.getDate()),Xe=W||Ee.getFullYear(),Me=0;W&&!J||(Me=J>0?J-1:Ee.getMonth());var Be,hn=ge||0,Tn=de||0,Un=le||0,an=Z||0;return re?new Date(Date.UTC(Xe,Me,_e,hn,Tn,Un,an+60*re.offset*1e3)):F?new Date(Date.UTC(Xe,Me,_e,hn,Tn,Un,an)):(Be=new Date(Xe,Me,_e,hn,Tn,Un,an),pe&&(Be=H(Be).week(pe).toDate()),Be)}catch{return new Date("")}})(B,q,j,R),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),w&&B!=this.format(q)&&(this.$d=new Date("")),o={}}else if(q instanceof Array)for(var k=q.length,I=1;I<=k;I+=1){$[1]=q[I-1];var V=R.apply(this,$);if(V.isValid()){this.$d=V.$d,this.$L=V.$L,this.init();break}I===k&&(this.$d=new Date(""))}else O.call(this,A)}}})})($t)),$t.exports}var Zd=Xd();const Qd=Yd(Zd),em="_textarea_14c7r_1",nm="_readOnlyField_14c7r_7",ba={textarea:em,readOnlyField:nm},tm=e=>e!=null&&e!=="",rm=({label:e,value:r,isEdited:t=!1,type:n,hideLabel:a,size:l})=>tm(r)?be.jsxs(Ke,{gap:"space-4",children:[e&&!a&&be.jsx(_n,{size:l,children:e}),be.jsxs(mn,{gap:"space-8",align:"center",wrap:!1,children:[be.jsx(Qt,{className:n==="textarea"?ba.textarea:ba.readOnlyField,size:l,children:r}),t&&be.jsx(Tl,{})]})]}):null;un.extend(Qd);const am="_noReadOnlyIcon_11vhl_2",lm={noReadOnlyIcon:am},im=({label:e,description:r,validate:t=[],onChange:n,children:a,className:l,isReadOnly:i=!1,size:s="small",isEdited:o=!1,hideLegend:d=!1,...u})=>{const{name:m,control:v}=u,{formState:{errors:c}}=rn(),{field:E}=gl({name:m,control:v,rules:{validate:kl(t)}});return be.jsx(qu,{name:m,value:E.value!==void 0?E.value:null,legend:be.jsxs(mn,{justify:"center",gap:"space-8",children:[e,i&&o&&be.jsx(Tl,{})]}),hideLegend:d,"aria-readonly":i,readOnly:i,description:r,size:s,error:Sl(c,m),onChange:_=>{n&&n(_),E.onChange(_)},className:$d(l,lm.noReadOnlyIcon),children:a})},sm="_textAreaFieldWithBadges_bdz0b_1",om="_etikettWrapper_bdz0b_4",Ra={textAreaFieldWithBadges:sm,etikettWrapper:om},Yt=({name:e,control:r,label:t,readOnly:n,maxLength:a,badges:l,validate:i=[],parse:s=c=>c,className:o,description:d,isEdited:u,size:m="small",...v})=>{const{formState:{errors:c}}=rn(),{field:E}=gl({name:e,control:r,rules:{validate:p.useMemo(()=>kl(i),[i])}});return n?be.jsx(rm,{size:m,label:t,value:E.value,type:"textarea",isEdited:u,hideLabel:v.hideLabel}):be.jsxs("div",{className:l?Ra.textAreaFieldWithBadges:null,children:[l&&be.jsx("div",{className:Ra.etikettWrapper,children:l.map(({type:_,titleText:y})=>be.jsx(xu,{variant:_,size:"small",children:y},y))}),be.jsx(Wu,{size:m,label:t,description:d,className:o,autoComplete:"off",...E,onChange:_=>E.onChange(_.currentTarget.value!==""?s(_.currentTarget.value):null),value:E.value?E.value:"",error:Sl(c,e),maxLength:a,...v})]})},um=({formMethods:e,onSubmit:r,children:t,className:n,setDataOnUnmount:a})=>{const{handleSubmit:l,getValues:i}=e;return p.useEffect(()=>()=>{a&&a(i())},[]),be.jsx(Zu,{...e,children:be.jsx("form",{className:n,onSubmit:r?l(s=>r(s)):void 0,children:t})})},dm="_readMore_mcbzv_1",mm={readMore:dm},cm=Ia(3),fm=Fa(1500),bn=({readOnly:e,aksjonspunkt:r})=>{const t=Xt(),{control:n}=rn();return!r||r.definisjon!==se.KONTROLLER_STOR_ETTERBETALING_SØKER?null:P.jsxs(Ke,{gap:"space-16",children:[P.jsx(nl,{header:P.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreTittel"}),className:mm.readMore,children:P.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreInnhold"})}),P.jsx(Yt,{name:"begrunnelseEtterbetaling",control:n,label:t.formatMessage({id:"Simulering.Etterbetaling.Vurdering"}),validate:[Zn,cm,fm,jt],maxLength:1500,size:"medium",readOnly:e})]})};bn.initialValues=e=>{if(!(!e||e.definisjon!==se.KONTROLLER_STOR_ETTERBETALING_SØKER))return{begrunnelseEtterbetaling:e.begrunnelse??""}};bn.transformValues=e=>({kode:se.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:e.begrunnelseEtterbetaling});bn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  besluttersBegrunnelse?: string;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid?: string;
  endretTidspunkt?: string;
  endretAv?: string;
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
| '6019'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"endretAv",value:{name:"string",required:!1}}]},alias:"Aksjonspunkt"}}],returns:{type:{name:"union",raw:"EtterbetalingSøkerFormValues | undefined",elements:[{name:"signature",type:"object",raw:`{
  begrunnelseEtterbetaling?: string;
}`,signature:{properties:[{key:"begrunnelseEtterbetaling",value:{name:"string",required:!1}}]}},{name:"undefined"}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelseEtterbetaling?: string;
}`,signature:{properties:[{key:"begrunnelseEtterbetaling",value:{name:"string",required:!1}}]},alias:"EtterbetalingSøkerFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}}}],displayName:"EtterbetalingSøkerForm",props:{aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  besluttersBegrunnelse?: string;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid?: string;
  endretTidspunkt?: string;
  endretAv?: string;
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
| '6019'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"endretAv",value:{name:"string",required:!1}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const vm="_summaryTitle_1leg0_1",gm="_infoSummary_1leg0_5",pm="_ingenPerioder_1leg0_13",Em="_number_1leg0_17",Pn={summaryTitle:vm,infoSummary:gm,ingenPerioder:pm,number:Em},Nl=({fom:e,tom:r,feilutbetaling:t,etterbetaling:n,inntrekk:a,ingenPerioderMedAvvik:l})=>P.jsxs(Ke,{gap:"space-16",children:[P.jsx(fe,{size:"small",className:Pn.summaryTitle,children:P.jsx(ae,{id:"Simulering.bruker"})}),P.jsxs("div",{className:Pn.infoSummary,children:[l&&P.jsx("div",{className:Pn.ingenPerioder,children:P.jsx(ae,{id:"Simulering.ingenPerioder"})}),!l&&P.jsxs(Ke,{gap:"space-16",children:[P.jsx(_n,{size:"small",children:Vl(e,r)}),P.jsxs(mn,{gap:"space-16",children:[P.jsxs(fe,{size:"small",children:[P.jsx(ae,{id:"Simulering.etterbetaling"}),":"]}),P.jsx(fe,{size:"small",children:P.jsx(Dt,{beløp:n})})]}),P.jsxs(mn,{gap:"space-16",children:[P.jsxs(fe,{size:"small",children:[P.jsx(ae,{id:"Simulering.tilbakekreving"}),":"]}),P.jsx(fe,{weight:"semibold",size:"small",className:Pn.number,children:P.jsx(Dt,{beløp:t,rød:t<0})})]}),a!=null&&P.jsxs(mn,{gap:"space-16",children:[P.jsxs(fe,{size:"small",children:[P.jsx(ae,{id:"Simulering.inntrekk"}),":"]}),P.jsx(fe,{weight:"semibold",size:"small",className:Pn.number,children:P.jsx(Dt,{beløp:a,rød:a<0})})]})]})]})]});Nl.__docgenInfo={description:"Simulering oppsummering",methods:[],displayName:"SimuleringSummary",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},etterbetaling:{required:!0,tsType:{name:"number"},description:""},inntrekk:{required:!1,tsType:{name:"number"},description:""},ingenPerioderMedAvvik:{required:!1,tsType:{name:"boolean"},description:""}}};var Vt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ha;function _m(){return ha||(ha=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n.call(this,s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,this&&this[s]||s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Vt)),Vt.exports}var ym=_m();const bm=Jt(ym),Rm="_invisibleButton_1u9o7_1",hm={invisibleButton:Rm},Tm=e=>e?"Simulering.headerText.VisFærreDetaljer":"Simulering.headerText.VisFlereDetaljer",Ol=({toggleDetails:e,showDetails:r,mottakerIndex:t})=>P.jsxs("button",{type:"button",className:hm.invisibleButton,onClick:()=>e(t),children:[P.jsx(ae,{id:Tm(r)}),r?P.jsx(ui,{}):P.jsx(nr,{})]});Ol.__docgenInfo={description:"",methods:[],displayName:"CollapseButton",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"boolean"},description:""},mottakerIndex:{required:!0,tsType:{name:"number"},description:""}}};const km="_tableWrapper_piqyx_1",Sm="_simuleringTable_piqyx_5",Nm="_rodTekst_piqyx_5",Om="_lastColumn_piqyx_9",Am="_nextPeriod_piqyx_17",Pm="_normalPeriod_piqyx_23",zt={tableWrapper:km,simuleringTable:Sm,rodTekst:Nm,lastColumn:Om,nextPeriod:Am,normalPeriod:Pm},Al=bm.bind(zt),Fn={DIFFERANSE:"differanse",INNTREKKNESTEMÅNED:"inntrekkNesteMåned"},Pl=({simuleringResultat:e,toggleDetails:r,showDetails:t,ingenPerioderMedAvvik:n,arbeidsgiverOpplysningerPerId:a})=>P.jsx(P.Fragment,{children:e.perioderPerMottaker.map((l,i)=>{const s=Km(n,e.periode.fom,l),o=l.nesteUtbPeriode.tom,d=t.find(m=>m.id===i),u=Dm(n,l.resultatPerFagområde,l.resultatOgMotregningRader);return P.jsxs("div",{className:zt.tableWrapper,children:[Lm(l,a),P.jsxs(ce,{className:zt.simuleringTable,children:[P.jsx(ce.Header,{children:P.jsxs(ce.Row,{children:[wm(l.resultatPerFagområde)?P.jsx(ce.HeaderCell,{scope:"col",children:P.jsx(Ol,{toggleDetails:r,mottakerIndex:i,showDetails:d?d.show:!1},`collapseButton-${s.length}`)}):P.jsx(ce.HeaderCell,{}),s.map(m=>P.jsx(ce.HeaderCell,{scope:"col",className:Al({nextPeriod:Ta(m,o),normalPeriod:!Ta(m,o)}),children:P.jsx(ae,{id:`Simulering.headerText.${m.month}`})},`${m.month}-${m.year}`))]})}),P.jsxs(ce.Body,{children:[l.resultatPerFagområde.map((m,v)=>m.rader.filter(c=>{const E=c.feltnavn===Fn.DIFFERANSE,_=ka(m,E);return!Im(_,d?d.show:!1)}).map((c,E)=>{const _=c.feltnavn===Fn.DIFFERANSE,T=ka(m,_)?"dashed 1px var(--ax-neutral-300)":"solid 1px var(--ax-neutral-300)";return P.jsxs(ce.Row,{children:[P.jsx(ce.DataCell,{style:_||n?{fontWeight:"bold",borderBottom:T}:{borderBottom:T},children:P.jsx(ae,{id:`Simulering.${m.fagOmrådeKode}.${c.feltnavn}`})}),Sa(c.resultaterPerMåned,s,o,T)]},`rowIndex${v+1}${E+1}`)})),u.map((m,v)=>P.jsxs(ce.Row,{children:[P.jsx(ce.DataCell,{style:m.feltnavn===Fn.INNTREKKNESTEMÅNED?{}:{fontWeight:"bold"},children:P.jsx(ae,{id:`Simulering.${m.feltnavn}`})}),Sa(m.resultaterPerMåned,s,o)]},`rowIndex${v+1}`))]})]},`tableIndex${i+1}`)]},`tableIndex${i+1}`)})}),Ta=(e,r)=>`${e.month}${e.year}`===(r?un(r).format("MMMMYY"):!1),wm=e=>e.some(r=>r.rader.length>1),ka=(e,r)=>!!e.rader.find(n=>n.feltnavn===Fn.DIFFERANSE)&&!r,Im=(e,r)=>e&&!r,Sa=(e,r,t,n)=>{const a=`${un(t).format("MMMMYY")}`;return r.map(i=>e.find(o=>un(o.periode.tom).format("MMMMYY").toLowerCase()===`${i.month}${i.year}`)||{måned:`${i.month}${i.year}`,beløp:null}).map((i,s)=>P.jsx(ce.DataCell,{style:{borderBottom:n},className:Al({rodTekst:!i.beløp||i.beløp<0,lastColumn:"måned"in i?i.måned===a:un(i.periode.tom).format("MMMMYY")===a}),children:i.beløp?wa(i.beløp):"-"},`columnIndex${s+1}`))},Fm=(e,r)=>{const t=e.mottakerIdentifikator?r[e.mottakerIdentifikator]:void 0;return t?`${t.navn} (${e.mottakerNummer})`:`${e.mottakerNummer}`},Lm=(e,r)=>e.mottakerType===Ln.ARBG||e.mottakerType===Ln.ARBGP?P.jsx(Va,{size:"xsmall",level:"3",children:Fm(e,r)}):null,Dm=(e,r,t)=>e?r.length>1?t.filter(n=>n.feltnavn!==Fn.INNTREKKNESTEMÅNED):[]:t,xm=(e,r)=>!!(e&&r===Ln.BRUKER),Vm=(e,r)=>e||r,Km=(e,r,t)=>{const n=xm(e,t.mottakerType)?un(t.nesteUtbPeriode.tom).subtract(1,"months").format():Vm(r,t.nesteUtbPeriode.fom);return Kl(n,t.nesteUtbPeriode.tom)};Pl.__docgenInfo={description:"",methods:[],displayName:"SimuleringTable",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const jm="_helpTextImage_151dm_1",Mm="_varsel_151dm_17",Bm="_bold_151dm_23",Kt={helpTextImage:jm,varsel:Mm,bold:Bm},Na=Ia(3),Oa=Fa(1500),Er="IKKE_SEND",Rn=({readOnly:e,språkkode:r,previewCallback:t,aksjonspunkt:n,fagsak:a})=>{const l=Xt(),{watch:i,control:s}=rn(),o=i("varseltekst"),d=i("videreBehandling"),u=a.fagsakYtelseType==="FP",m=v=>{t({mottaker:"",fritekst:o??" "}),v.preventDefault()};return!n||n.definisjon!==se.VURDER_FEILUTBETALING?null:P.jsxs(Ke,{gap:"space-40",align:"start",children:[P.jsx(Yt,{name:"begrunnelse",control:s,label:l.formatMessage({id:"Simulering.vurdering"}),validate:[Zn,Na,Oa,jt],maxLength:1500,readOnly:e}),P.jsx(im,{name:"videreBehandling",control:s,label:P.jsx(ae,{id:"Simulering.videreBehandling"}),validate:[Zn],isReadOnly:e,children:P.jsxs(Ke,{gap:"space-2",children:[P.jsx(Ft,{value:Ce.TILBAKEKR_OPPRETT,size:"small",children:P.jsx(ae,{id:"Simulering.gjennomfør"})}),d===Ce.TILBAKEKR_OPPRETT&&P.jsx("div",{className:Kt.varsel,children:P.jsx(Nd,{alignOffset:20,children:P.jsxs(Ke,{gap:"space-16",children:[P.jsxs(mn,{gap:"space-8",children:[P.jsx(fe,{size:"small",className:Kt.bold,children:P.jsx(ae,{id:"Simulering.varseltekst"})}),P.jsx(ol,{content:u?l.formatMessage({id:"Simulering.HjelpetekstForeldrepenger"}):l.formatMessage({id:"Simulering.HjelpetekstEngangsstonad"}),children:P.jsx(_i,{className:Kt.helpTextImage})})]}),P.jsx(Yt,{name:"varseltekst",control:s,label:l.formatMessage({id:"Simulering.fritekst"}),validate:[Zn,Na,Oa,jt],maxLength:1500,readOnly:e,parse:Ml,badges:[{type:"info",titleText:jl(r)}]}),!e&&P.jsx(fu,{href:"#",onClick:m,children:P.jsx(ae,{id:"Messages.PreviewText"})})]})})}),P.jsx(Ft,{value:`${Ce.TILBAKEKR_OPPRETT}${Er}`,size:"small",children:P.jsx(ae,{id:"Simulering.OpprettMenIkkeSendVarsel"})}),P.jsx(Ft,{value:Ce.TILBAKEKR_IGNORER,size:"small",children:P.jsx(ae,{id:"Simulering.avvent"})})]})})]})};Rn.initialValues=(e,r)=>!e||!r?void 0:{videreBehandling:!r.varseltekst&&r.videreBehandling===Ce.TILBAKEKR_OPPRETT?r.videreBehandling+Er:r.videreBehandling,varseltekst:r.varseltekst,begrunnelse:e.begrunnelse??""};Rn.transformValues=e=>{const{videreBehandling:r,varseltekst:t,begrunnelse:n}=e;return r.endsWith(Er)?{kode:se.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:Ce.TILBAKEKR_OPPRETT}:{kode:se.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:r,varseltekst:t}};Rn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  besluttersBegrunnelse?: string;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid?: string;
  endretTidspunkt?: string;
  endretAv?: string;
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
| '6019'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"endretAv",value:{name:"string",required:!1}}]},alias:"Aksjonspunkt"}},{name:"tilbakekrevingvalg",optional:!0,type:{name:"signature",type:"object",raw:`{
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
  annenPart?: tjenester_fagsak_dto_PersonDto;
  annenpartBehandling?: tjenester_behandling_dto_behandling_AnnenPartBehandlingDto;
  familiehendelse?: tjenester_fagsak_dto_SakHendelseDto;
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
  aktørId?: string;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}}]},required:!1}},{key:"familiehendelse",value:{name:"signature",type:"object",raw:`{
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  id?: number;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId?: number;
  opprettet: string;
  avsluttet?: string;
  endret?: string;
  endretAvBrukernavn?: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak?: tjenester_behandling_dto_behandling_BehandlingÅrsakDto;
  behandlingsfristTid?: string;
  gjeldendeVedtak: boolean;
  erPaaVent?: boolean;
  originalVedtaksDato?: string;
  behandlingHenlagt: boolean;
  behandlingPaaVent?: boolean;
  behandlingPåVent: boolean;
  fristBehandlingPåVent?: string;
  fristBehandlingPaaVent?: string;
  venteArsakKode?: string;
  venteÅrsakKode?: string;
  sprakkode?: foreldrepenger_behandlingslager_geografisk_Språkkode;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler?: string;
  toTrinnsBehandling: boolean;
  behandlingsresultat?: tjenester_behandling_dto_behandling_BehandlingsresultatDto;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  behandlingTillatteOperasjoner?: tjenester_behandling_dto_BehandlingOperasjonerDto;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  totrinnskontrollReadonly?: boolean;
  risikoAksjonspunkt?: tjenester_behandling_aksjonspunkt_AksjonspunktDto;
  kontrollResultat?: tjenester_behandling_kontroll_dto_KontrollresultatDto;
  ugunstAksjonspunkt?: boolean;
  behandlingKoet?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"number",required:!1}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"endret",value:{name:"string",required:!1}},{key:"endretAvBrukernavn",value:{name:"string",required:!1}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
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
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}},{key:"behandlingsfristTid",value:{name:"string",required:!1}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"boolean",required:!1}},{key:"originalVedtaksDato",value:{name:"string",required:!1}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"boolean",required:!1}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"venteÅrsakKode",value:{name:"string",required:!1}},{key:"sprakkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak?: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak;
  avslagsarsakFritekst?: string;
  rettenTil?: foreldrepenger_behandlingslager_behandling_RettenTil;
  konsekvenserForYtelsen?: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>;
  vedtaksbrev?: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift?: string;
  fritekstbrev?: string;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: tjenester_behandling_dto_behandling_SkjæringstidspunktDto;
  endretDekningsgrad?: boolean;
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}],required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>",required:!1}},{key:"vedtaksbrev",value:{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato?: string;
  utenMinsterett?: boolean;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!1}},{key:"utenMinsterett",value:{name:"boolean",required:!1}}]},required:!1}},{key:"endretDekningsgrad",value:{name:"boolean",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]},required:!1}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
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
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  evaluering?: string;
  input?: string;
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"signature",type:"object",raw:`{
  uuid?: string;
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
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!1}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]},required:!1}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig?: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!1}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  beregningDto?: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto;
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent: boolean;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  godkjent: boolean;
  arbeidsgiverReferanse?: string;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering?: boolean;
  faktaOmBeregningTilfeller?: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>;
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
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
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>",required:!1}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
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
  erSlettet?: boolean;
  erEndret?: boolean;
  erLagtTil?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!1}},{key:"erEndret",value:{name:"boolean",required:!1}},{key:"erLagtTil",value:{name:"boolean",required:!1}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!1}},{key:"risikoAksjonspunkt",value:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  besluttersBegrunnelse?: string;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid?: string;
  endretTidspunkt?: string;
  endretAv?: string;
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
| '6019'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"endretAv",value:{name:"string",required:!1}}]},required:!1}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
  medlFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
  faresignalVurdering?: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}},{key:"faresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!1}}]},required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!1}},{key:"behandlingKoet",value:{name:"boolean",required:!1}}]}}],raw:"Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid?: string;
  aktør: tjenester_behandling_historikk_HistorikkinnslagDto_HistorikkAktørDto;
  skjermlenke?: foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType;
  opprettetTidspunkt: string;
  dokumenter?: Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>;
  tittel?: string;
  linjer: Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!1}},{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: foreldrepenger_behandlingslager_behandling_historikk_HistorikkAktør;
  ident?: string;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ident",value:{name:"string",required:!1}}]},required:!0}},{key:"skjermlenke",value:{name:"union",raw:`| 'ANKE_MERKNADER'
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
| 'FAKTA_UTTAK_EØS'`,elements:[{name:"literal",value:"'ANKE_MERKNADER'"},{name:"literal",value:"'ANKE_VURDERING'"},{name:"literal",value:"'BEREGNING_ENGANGSSTOENAD'"},{name:"literal",value:"'BEREGNING_FORELDREPENGER'"},{name:"literal",value:"'BESTEBEREGNING'"},{name:"literal",value:"'FAKTA_FOR_OMSORG'"},{name:"literal",value:"'FAKTA_FOR_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_ADOPSJON'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'"},{name:"literal",value:"'FAKTA_OM_BEREGNING'"},{name:"literal",value:"'FAKTA_OM_FOEDSEL'"},{name:"literal",value:"'FAKTA_OM_FORDELING'"},{name:"literal",value:"'FAKTA_OM_MEDLEMSKAP'"},{name:"literal",value:"'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'"},{name:"literal",value:"'FAKTA_OM_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_SIMULERING'"},{name:"literal",value:"'FAKTA_OM_UTTAK'"},{name:"literal",value:"'FAKTA_OM_AKTIVITETSKRAV'"},{name:"literal",value:"'FAKTA_OMSORG_OG_RETT'"},{name:"literal",value:"'FAKTA_OM_VERGE'"},{name:"literal",value:"'FORMKRAV_KLAGE_KA'"},{name:"literal",value:"'FORMKRAV_KLAGE_NFP'"},{name:"literal",value:"'KLAGE_BEH_NFP'"},{name:"literal",value:"'KLAGE_BEH_NK'"},{name:"literal",value:"'KONTROLL_AV_SAKSOPPLYSNINGER'"},{name:"literal",value:"'OPPLYSNINGSPLIKT'"},{name:"literal",value:"'PUNKT_FOR_ADOPSJON'"},{name:"literal",value:"'PUNKT_FOR_FOEDSEL'"},{name:"literal",value:"'PUNKT_FOR_FORELDREANSVAR'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP_LØPENDE'"},{name:"literal",value:"'PUNKT_FOR_OMSORG'"},{name:"literal",value:"'PUNKT_FOR_OPPTJENING'"},{name:"literal",value:"'PUNKT_FOR_SVANGERSKAPSPENGER'"},{name:"literal",value:"'PUNKT_FOR_SVP_INNGANG'"},{name:"literal",value:"'SOEKNADSFRIST'"},{name:"literal",value:"'TILKJENT_YTELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'UTLAND'"},{name:"literal",value:"'UTTAK'"},{name:"literal",value:"'VEDTAK'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'FAKTA_OM_UTTAK_DOKUMENTASJON'"},{name:"literal",value:"'FAKTA_UTTAK'"},{name:"literal",value:"'FAKTA_UTTAK_EØS'"}],required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"dokumenter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tag: string;
  journalpostId: string;
  dokumentId: string;
  utgått: boolean;
}`,signature:{properties:[{key:"tag",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>",required:!1}},{key:"tittel",value:{name:"string",required:!1}},{key:"linjer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: tjenester_behandling_historikk_HistorikkinnslagDto_Linje_Type;
  tekst?: string;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'TEKST' | 'LINJESKIFT'",elements:[{name:"literal",value:"'TEKST'"},{name:"literal",value:"'LINJESKIFT'"}],required:!0}},{key:"tekst",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto>",required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetAv: string;
  opprettetTidspunkt: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakNotatDto>",required:!0}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
  medlFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
  faresignalVurdering?: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}},{key:"faresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!1}}]},required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}}]}},description:""},språkkode:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  besluttersBegrunnelse?: string;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid?: string;
  endretTidspunkt?: string;
  endretAv?: string;
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
| '6019'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"endretAv",value:{name:"string",required:!1}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const wl=({simuleringResultat:e,previewFptilbakeCallback:r,tilbakekrevingvalg:t,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:a,submitCallback:l,isReadOnly:i,harÅpentAksjonspunkt:s,fagsak:o,behandling:d}=Bl(),{mellomlagretFormData:u,setMellomlagretFormData:m}=Gl(),v=pd({defaultValues:u??Um(a,t)}),{formState:c}=v,[E,_]=p.useState([]),y=t!==void 0&&t.videreBehandling===Ce.TILBAKEKR_OPPDATER,T=Gm(E,_),R=e?.simuleringResultat,h=cn(se.VURDER_FEILUTBETALING,a)||cn(se.KONTROLLER_STOR_ETTERBETALING_SØKER,a),O=s?Cm(a):[];return P.jsxs(Ke,{gap:"space-32",children:[P.jsx(Va,{size:"small",level:"2",children:P.jsx(ae,{id:"Simulering.Title"})}),R&&P.jsxs(P.Fragment,{children:[O.length>0&&O.map(A=>P.jsx("div",{children:P.jsx(bd,{children:A})},A.key)),P.jsx(Nl,{fom:R.periode.fom,tom:R.periode.tom,feilutbetaling:R.sumFeilutbetaling,etterbetaling:R.sumEtterbetaling,inntrekk:R.sumInntrekk,ingenPerioderMedAvvik:R.ingenPerioderMedAvvik}),P.jsx(Pl,{arbeidsgiverOpplysningerPerId:n,showDetails:E,toggleDetails:T,simuleringResultat:R,ingenPerioderMedAvvik:R.ingenPerioderMedAvvik}),y&&P.jsx(_n,{size:"small",children:P.jsx(ae,{id:"Simulering.ApenTilbakekrevingsbehandling"})})]}),!e&&P.jsx(ae,{id:"Simulering.ingenData"}),h&&P.jsx(um,{formMethods:v,onSubmit:A=>l(qm(A,a)),setDataOnUnmount:m,children:P.jsxs(Ke,{gap:"space-16",children:[P.jsx(Rn,{aksjonspunkt:mt(a,se.VURDER_FEILUTBETALING),fagsak:o,previewCallback:r,readOnly:i,språkkode:d.språkkode}),P.jsx(bn,{readOnly:i,aksjonspunkt:mt(a,se.KONTROLLER_STOR_ETTERBETALING_SØKER)}),P.jsx("div",{children:P.jsx(Za,{size:"small",variant:"primary",disabled:!c.isDirty||c.isSubmitting||i,loading:c.isSubmitting,children:P.jsx(ae,{id:"SubmitButton.ConfirmInformation"})})})]})})]})},mt=(e,r)=>e.find(t=>t.definisjon===r),Gm=(e,r)=>t=>{const n=e.findIndex(l=>l.id===t);let a=[];if(n===-1)a=e.concat({id:t,show:!0});else{const l={id:t,show:!e[n].show};a=[...e.slice(0,n),l,...e.slice(n+1,-1)]}r(a)},qm=(e,r)=>{const t=[];return cn(se.VURDER_FEILUTBETALING,r)&&"videreBehandling"in e&&t.push(Rn.transformValues(e)),cn(se.KONTROLLER_STOR_ETTERBETALING_SØKER,r)&&"begrunnelseEtterbetaling"in e&&t.push(bn.transformValues(e)),t},Um=(e,r)=>{if(e.length!==0)return{...Rn.initialValues(mt(e,se.VURDER_FEILUTBETALING),r),...bn.initialValues(mt(e,se.KONTROLLER_STOR_ETTERBETALING_SØKER))}},Cm=e=>{const r=[];return cn(se.VURDER_FEILUTBETALING,e)&&r.push(P.jsx(ae,{id:"Simulering.AksjonspunktHelpText.5084"},"vurderFeilutbetaling")),cn(se.KONTROLLER_STOR_ETTERBETALING_SØKER,e)&&r.push(P.jsx(ae,{id:"Simulering.Etterbetaling.Tittel"},"kontrollerFeilutbetaling")),r};wl.__docgenInfo={description:"",methods:[],displayName:"SimuleringPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
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
| 'TILBAKEKR_OPPDATER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'TILBAKEKR_OPPRETT'"},{name:"literal",value:"'TILBAKEKR_IGNORER'"},{name:"literal",value:"'TILBAKEKR_INNTREKK'"},{name:"literal",value:"'TILBAKEKR_OPPDATER'"}],required:!0}},{key:"varseltekst",value:{name:"string",required:!1}}]}},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const Hm={"Simulering.Title":"Simulering","Simulering.FP.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FP.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FP.differanse":"Foreldrepenger avvik","Simulering.FPREF.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FPREF.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FPREF.differanse":"Foreldrepenger avvik","Simulering.OM.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OM.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OM.differanse":"Omsorgspenger avvik","Simulering.OMREF.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OMREF.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OMREF.differanse":"Omsorgspenger avvik","Simulering.OOP.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOP.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOP.differanse":"Pleiepenger avvik","Simulering.OOPREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOPREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOPREF.differanse":"Pleiepenger avvik","Simulering.OPP.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPP.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPP.differanse":"Opplæringspenger avvik","Simulering.OPPREF.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPPREF.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPPREF.differanse":"Opplæringspenger avvik","Simulering.PB.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PB.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PB.differanse":"Pleiepenger avvik","Simulering.PBREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PBREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PBREF.differanse":"Pleiepenger avvik","Simulering.PN.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PN.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PN.differanse":"Pleiepenger avvik","Simulering.PNREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PNREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PNREF.differanse":"Pleiepenger avvik","Simulering.REFUTG.nyttBeløp":"Engangstønad nytt beløp","Simulering.REFUTG.tidligereUtbetalt":"Engangstønad tidligere utbetalt","Simulering.REFUTG.differanse":"Engangstønad avvik","Simulering.SP.nyttBeløp":"Sykepenger nytt beløp","Simulering.SP.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SP.differanse":"Sykepenger avvik","Simulering.SPREF.nyttBeløp":"Sykepenger nytt beløp","Simulering.SPREF.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SPREF.differanse":"Sykepenger avvik","Simulering.SVP.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVP.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVP.differanse":"Svangerskapspenger avvik","Simulering.SVPREF.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVPREF.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVPREF.differanse":"Svangerskapspenger avvik","Simulering.resultatEtterMotregning":"Resultat etter motregning mellom ytelser","Simulering.inntrekk":"Inntrekk","Simulering.inntrekkNesteMåned":"Inntrekk i neste måned","Simulering.tilbakekreving":"Feilutbetaling","Simulering.etterbetaling":"Etterbetaling","Simulering.resultat":"Resultat","Simulering.avregnetBeløp":"Avregnet beløp","Simulering.headerText.VisFærreDetaljer":"Vis færre detaljer","Simulering.headerText.VisFlereDetaljer":"Vis flere detaljer","Simulering.headerText.januar":"Jan","Simulering.headerText.februar":"Feb","Simulering.headerText.mars":"Mars","Simulering.headerText.april":"Apr","Simulering.headerText.mai":"Mai","Simulering.headerText.juni":"Jun","Simulering.headerText.juli":"Jul","Simulering.headerText.august":"Aug","Simulering.headerText.september":"Sep","Simulering.headerText.oktober":"Okt","Simulering.headerText.november":"Nov","Simulering.headerText.desember":"Des","Simulering.ingenData":"Ingen informasjon om simulering mottatt fra økonomiløsningen.","Simulering.ingenPerioder":"Ingen periode med avvik","Simulering.AksjonspunktHelpText.5084":"Vurder videre behandling av tilbakekreving","Simulering.vurdering":"Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre","Simulering.videreBehandling":"Fastsett videre behandling","Simulering.gjennomfør":"Opprett tilbakekreving, send varsel","Simulering.OpprettMenIkkeSendVarsel":"Opprett tilbakekreving, ikke send varsel","Simulering.Opprett":"Opprett tilbakekreving","Simulering.avvent":"Avvent samordning, ingen tilbakekreving","Simulering.formAlternativ.ja":"Ja","Simulering.formAlternativ.nei":"Nei","Simulering.bruker":"Bruker","Simulering.varseltekst":"Send varsel om tilbakekreving","Simulering.fritekst":"Fritekst i varselet","Simulering.HjelpetekstForeldrepenger":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav. Eksempel på tekst: «Vi mottok melding fra deg [dato]om at du hadde jobbet heltid. Du kan ikke jobbe og motta foreldrepenger samtidig. Da vi mottok meldingen fra deg, var det allerede utbetalt foreldrenger for perioden du har jobbet.","Simulering.HjelpetekstEngangsstonad":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav.","Simulering.ApenTilbakekrevingsbehandling":"Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.","Simulering.Etterbetaling.Tittel":"Ny inntektsmelding vil føre til en høy etterbetaling til bruker i en tidligere innvilget periode. Kontroller om dette er riktig","Simulering.Etterbetaling.ReadMoreTittel":"Dette bør undersøkes rundt etterbetalingen","Simulering.Etterbetaling.ReadMoreInnhold":"Saken stopper i simulering fordi arbeidsgiver har endret sitt refusjonskrav, eller har endret fra refusjon til direkte utbetaling i en periode som allerede har blitt utbetalt til bruker. I tillegg er etterbetalingen høy. Du må kontrollerer om dette er riktig. Dette kan gjøres ved å kontakte arbeidsgiver. Er det feil, må de sende inn ny inntektsmelding. Får du ikke tak i arbeidsgiver, kan du kontakte søker og høre om de kan spørre arbeidsgiveren sin.","Simulering.Etterbetaling.Vurdering":"Begrunn hvorfor du går videre med denne behandlingen.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","Messages.PreviewText":"Forhåndsvis varselbrev"},$m=pn(Hm),Wt=e=>P.jsx(ql,{value:$m,children:P.jsx(wl,{...e})});Wt.__docgenInfo={description:"",methods:[],displayName:"SimuleringProsessIndex",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
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
| 'TILBAKEKR_OPPDATER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'TILBAKEKR_OPPRETT'"},{name:"literal",value:"'TILBAKEKR_IGNORER'"},{name:"literal",value:"'TILBAKEKR_INNTREKK'"},{name:"literal",value:"'TILBAKEKR_OPPDATER'"}],required:!0}},{key:"varseltekst",value:{name:"string",required:!1}}]}},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const{action:Ym}=__STORYBOOK_MODULE_ACTIONS__,zm={123:{erPrivatPerson:!1,identifikator:"123",referanse:"123",navn:"test"}},Wm={simuleringResultat:{periode:{fom:"2019-01-01",tom:"2019-03-31"},sumEtterbetaling:0,sumFeilutbetaling:-49863,sumInntrekk:-10899,ingenPerioderMedAvvik:!1,perioderPerMottaker:[{mottakerType:Ln.ARBG,mottakerIdentifikator:"123",mottakerNummer:"test",resultatPerFagområde:[{fagOmrådeKode:"FP",rader:[{feltnavn:"nyttBeløp",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:52619}]},{feltnavn:"tidligereUtbetalt",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:61795}]},{feltnavn:"differanse",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-9176}]}]}],resultatOgMotregningRader:[{feltnavn:"inntrekkNesteMåned",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:0}]},{feltnavn:"resultat",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-26486}]}],nesteUtbPeriode:{fom:"2019-10-01",tom:"2019-10-31"}}]},slåttAvInntrekk:!1},ec={title:"prosess/prosess-simulering",component:Wt,decorators:[Ul,Cl],args:{arbeidsgiverOpplysningerPerId:zm,simuleringResultat:Wm,previewFptilbakeCallback:Ym("button-click")},render:e=>P.jsx(Wt,{...e})},zn={args:{aksjonspunkterForPanel:[{definisjon:se.VURDER_FEILUTBETALING,status:Zt.OPPRETTET}]}},Wn={args:{aksjonspunkterForPanel:[{definisjon:se.KONTROLLER_STOR_ETTERBETALING_SØKER,status:Zt.OPPRETTET}]}},Jn={args:{aksjonspunkterForPanel:[{definisjon:se.VURDER_FEILUTBETALING,status:Zt.OPPRETTET},{definisjon:se.KONTROLLER_STOR_ETTERBETALING_SØKER}]}},Xn={args:{aksjonspunkterForPanel:[],tilbakekrevingvalg:{videreBehandling:Ce.TILBAKEKR_OPPDATER,varseltekst:"varsel-eksempel"}}};zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...zn.parameters?.docs?.source}}};Wn.parameters={...Wn.parameters,docs:{...Wn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...Wn.parameters?.docs?.source}}};Jn.parameters={...Jn.parameters,docs:{...Jn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      status: AksjonspunktStatus.OPPRETTET
    }, {
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER
    }] as Aksjonspunkt[]
  }
}`,...Jn.parameters?.docs?.source}}};Xn.parameters={...Xn.parameters,docs:{...Xn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    tilbakekrevingvalg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
      varseltekst: 'varsel-eksempel'
    } as TilbakekrevingValg
  }
}`,...Xn.parameters?.docs?.source}}};const nc=["AksjonspunktVurderFeilutbetaling","AksjonspunktKontrollerEtterbetaling","AksjonspunktVurderFeilutbetalingOgEtterbetaling","SimuleringspanelUtenAksjonspunkt"];export{Wn as AksjonspunktKontrollerEtterbetaling,zn as AksjonspunktVurderFeilutbetaling,Jn as AksjonspunktVurderFeilutbetalingOgEtterbetaling,Xn as SimuleringspanelUtenAksjonspunkt,nc as __namedExportsOrder,ec as default};
