import{g as Wt,r as p,u as Jt,_ as _r,s as yr,c as gn,a as X,R as g,b as Fl,d as Dn,T as Ll,S as mt,e as Oa,f as Na,w as Aa,h as pn,i as un,j as P,t as Xn,k as Pa,o as wa,N as Kt,Q as Dl,Y as xl,P as Vl,A as Kl,l as jl,m as Ml,n as cn,p as Gl,q as Bl,v as ql}from"./iframe-CCH-M1Sp.js";import{r as Ul}from"./index-DYnMsH5f.js";import"./preload-helper-PPVm8Dsz.js";var Ia=Ul();const jt=Wt(Ia);function Cl(e,r){var t=e.values,n=_r(e,["values"]),a=r.values,l=_r(r,["values"]);return yr(a,t)&&yr(n,l)}function Fa(e){var r=Jt(),t=r.formatMessage,n=r.textComponent,a=n===void 0?p.Fragment:n,l=e.id,i=e.description,s=e.defaultMessage,o=e.values,d=e.children,u=e.tagName,m=u===void 0?a:u,v=e.ignoreTag,c={id:l,description:i,defaultMessage:s},E=t(c,o,{ignoreTag:v});return typeof d=="function"?d(Array.isArray(E)?E:[E]):m?p.createElement(m,null,E):p.createElement(p.Fragment,null,E)}Fa.displayName="FormattedMessage";var ae=p.memo(Fa,Cl);ae.displayName="MemoizedFormattedMessage";var se=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(se||{}),Ce=(e=>(e.TILBAKEKR_OPPRETT="TILBAKEKR_OPPRETT",e.TILBAKEKR_IGNORER="TILBAKEKR_IGNORER",e.TILBAKEKR_INNTREKK="TILBAKEKR_INNTREKK",e.TILBAKEKR_OPPDATER="TILBAKEKR_OPPDATER",e))(Ce||{});const En=e=>gn({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Hl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Xt=p.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:l,truncate:i,weight:s="regular",align:o,visuallyHidden:d,textColor:u}=e,m=Hl(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=X();return g.createElement(a,Object.assign({},m,{ref:r,className:v(t,"navds-body-long",`navds-body-long--${n}`,En({spacing:l,truncate:i,weight:s,align:o,visuallyHidden:d,textColor:u}))}))});var $l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fe=p.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:l,truncate:i,weight:s="regular",align:o,visuallyHidden:d,textColor:u}=e,m=$l(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=X();return g.createElement(a,Object.assign({},m,{ref:r,className:v(t,"navds-body-short",`navds-body-short--${n}`,En({spacing:l,truncate:i,weight:s,align:o,visuallyHidden:d,textColor:u}))}))});var Yl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const zl=p.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:a,uppercase:l,as:i="p",truncate:s,weight:o="regular",align:d,visuallyHidden:u,textColor:m}=e,v=Yl(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=X();return g.createElement(i,Object.assign({},v,{ref:r,className:c(t,"navds-detail",En({spacing:a,truncate:s,weight:o,align:d,visuallyHidden:u,textColor:m,uppercase:l}),{"navds-detail--small":n==="small"})}))});var Wl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const La=p.forwardRef((e,r)=>{var{children:t,className:n,size:a,spacing:l,as:i="p",showIcon:s=!1}=e,o=Wl(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=X();return g.createElement(i,Object.assign({},o,{ref:r,className:d("navds-error-message","navds-label",n,En({spacing:l}),{"navds-label--small":a==="small","navds-error-message--show-icon":s})}),s&&g.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},g.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var Jl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Da=p.forwardRef((e,r)=>{var{level:t="1",size:n,className:a,as:l,spacing:i,align:s,visuallyHidden:o,textColor:d}=e,u=Jl(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:m}=X(),v=l??`h${t}`;return g.createElement(v,Object.assign({},u,{ref:r,className:m(a,"navds-heading",`navds-heading--${n}`,En({spacing:i,align:s,visuallyHidden:o,textColor:d}))}))});var Xl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};p.forwardRef((e,r)=>{var{className:t,spacing:n,as:a="p"}=e,l=Xl(e,["className","spacing","as"]);const{cn:i}=X();return g.createElement(a,Object.assign({},l,{ref:r,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Zl=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const _n=p.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="label",spacing:l,visuallyHidden:i,textColor:s}=e,o=Zl(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=X();return g.createElement(a,Object.assign({},o,{ref:r,className:d(t,"navds-label",En({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":n==="small"})}))});function xa(e,r=166,t=!1){let n;function a(...l){const i=()=>{n=void 0,e.apply(this,l)};!n&&t&&i(),clearTimeout(n),n=setTimeout(i,r)}return a.clear=()=>{clearTimeout(n)},a}function xe(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}const br=globalThis?.document?p.useLayoutEffect:()=>{};let Rr=0;function Ql(e){const[r,t]=p.useState(e),n=e||r;return p.useEffect(()=>{r==null&&(Rr+=1,t(`aksel-id-${Rr}`))},[r]),n}const hr=g.useId;function Je(e){var r;if(hr!==void 0){const t=hr();return e??t.replace(/(:)/g,"")}return(r=Ql(e))!==null&&r!==void 0?r:""}function Tr(e,r=[]){const t=p.useRef(e);return p.useEffect(()=>{t.current=e}),p.useCallback(((...n)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...n)}),r)}function Zt({value:e,defaultValue:r,onChange:t}){const n=Tr(t),[a,l]=p.useState(r),i=e!==void 0,s=i?e:a,o=Tr(d=>{const m=typeof d=="function"?d(s):d;i||l(m),n(m)},[i,n,s]);return[s,o]}let kr=0;function ei(e){const[r,t]=p.useState(e),n=e||r;return p.useEffect(()=>{r==null&&(kr+=1,t(`aksel-icon-${kr}`))},[r]),n}const Sr=g.useId;function Ne(e){var r;return Sr!==void 0?Sr().replace(/(:)/g,""):(r=ei(e))!==null&&r!==void 0?r:""}var ni=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ti=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ni(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var ri=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ai=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ri(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var li=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Qt=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=li(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var ii=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const si=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ii(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var oi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ui=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=oi(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var di=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const mi=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=di(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var ci=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Va=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ci(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var fi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const vi=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=fi(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var gi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const pi=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=gi(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var Ei=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const _i=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ei(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var yi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const bi=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=yi(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var Ri=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const hi=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ri(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Ti=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ki=p.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ti(e,["title","titleId"]);let l=Ne();return l=t?n||"title-"+l:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?g.createElement("title",{id:l},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function xn(e,r,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e?.(a),t===!1||!a.defaultPrevented)return r?.(a)}}const[Xm,Si]=Fl({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function bt(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function kn(e){return(r,t)=>{const n=t?.context?String(t.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=t?.width?String(t.width):i;a=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=t?.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(r):r;return a[l]}}function Sn(e){return(r,t={})=>{const n=t.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=r.match(a);if(!l)return null;const i=l[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(s)?Ni(s,m=>m.test(i)):Oi(s,m=>m.test(i));let d;d=e.valueCallback?e.valueCallback(o):o,d=t.valueCallback?t.valueCallback(d):d;const u=r.slice(i.length);return{value:d,rest:u}}}function Oi(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function Ni(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function Ai(e){return(r,t={})=>{const n=r.match(e.matchPattern);if(!n)return null;const a=n[0],l=r.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=t.valueCallback?t.valueCallback(i):i;const s=r.slice(a.length);return{value:i,rest:s}}}const Pi={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},wi=(e,r,t)=>{let n;const a=Pi[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},Ii={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Fi={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Li={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Di={date:bt({formats:Ii,defaultWidth:"full"}),time:bt({formats:Fi,defaultWidth:"full"}),dateTime:bt({formats:Li,defaultWidth:"full"})},xi={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Vi=(e,r,t,n)=>xi[e],Ki={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},ji={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Mi={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Gi={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Bi={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},qi=(e,r)=>Number(e)+".",Ui={ordinalNumber:qi,era:kn({values:Ki,defaultWidth:"wide"}),quarter:kn({values:ji,defaultWidth:"wide",argumentCallback:e=>e-1}),month:kn({values:Mi,defaultWidth:"wide"}),day:kn({values:Gi,defaultWidth:"wide"}),dayPeriod:kn({values:Bi,defaultWidth:"wide"})},Ci=/^(\d+)\.?/i,Hi=/\d+/i,$i={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Yi={any:[/^f/i,/^e/i]},zi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Wi={any:[/1/i,/2/i,/3/i,/4/i]},Ji={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Xi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Zi={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Qi={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},es={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},ns={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},ts={ordinalNumber:Ai({matchPattern:Ci,parsePattern:Hi,valueCallback:e=>parseInt(e,10)}),era:Sn({matchPatterns:$i,defaultMatchWidth:"wide",parsePatterns:Yi,defaultParseWidth:"any"}),quarter:Sn({matchPatterns:zi,defaultMatchWidth:"wide",parsePatterns:Wi,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Sn({matchPatterns:Ji,defaultMatchWidth:"wide",parsePatterns:Xi,defaultParseWidth:"any"}),day:Sn({matchPatterns:Zi,defaultMatchWidth:"wide",parsePatterns:Qi,defaultParseWidth:"any"}),dayPeriod:Sn({matchPatterns:es,defaultMatchWidth:"any",parsePatterns:ns,defaultParseWidth:"any"})},rs={code:"nb",formatDistance:wi,formatLong:Di,formatRelative:Vi,localize:Ui,match:ts,options:{weekStartsOn:1,firstWeekContainsDate:4}},as={global:{dateLocale:rs,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},ls=p.createContext({locale:as}),Ka=()=>p.useContext(ls);var is=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ss=p.forwardRef((e,r)=>{var t,n,a,{rootElement:l,asChild:i}=e,s=is(e,["rootElement","asChild"]);const o=Dn(!1),d=(t=Ka())===null||t===void 0?void 0:t.rootElement,u=(n=l??d)!==null&&n!==void 0?n:(a=globalThis?.document)===null||a===void 0?void 0:a.body,m=i?mt:"div";return o?.isDarkside?u?jt.createPortal(g.createElement(Ll,{theme:o.theme,asChild:!0,hasBackground:!1,"data-color":o.color},g.createElement(m,Object.assign({ref:r,"data-aksel-portal":""},s))),u):null:u?jt.createPortal(g.createElement(m,Object.assign({ref:r,"data-aksel-portal":""},s)),u):null}),fn=Math.min,en=Math.max,Qn=Math.round,Cn=Math.floor,Ve=e=>({x:e,y:e}),os={left:"right",right:"left",bottom:"top",top:"bottom"},us={start:"end",end:"start"};function Mt(e,r,t){return en(e,fn(r,t))}function Vn(e,r){return typeof e=="function"?e(r):e}function nn(e){return e.split("-")[0]}function Kn(e){return e.split("-")[1]}function ja(e){return e==="x"?"y":"x"}function er(e){return e==="y"?"height":"width"}const ds=new Set(["top","bottom"]);function ze(e){return ds.has(nn(e))?"y":"x"}function nr(e){return ja(ze(e))}function ms(e,r,t){t===void 0&&(t=!1);const n=Kn(e),a=nr(e),l=er(a);let i=a==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return r.reference[l]>r.floating[l]&&(i=et(i)),[i,et(i)]}function cs(e){const r=et(e);return[Gt(e),r,Gt(r)]}function Gt(e){return e.replace(/start|end/g,r=>us[r])}const Or=["left","right"],Nr=["right","left"],fs=["top","bottom"],vs=["bottom","top"];function gs(e,r,t){switch(e){case"top":case"bottom":return t?r?Nr:Or:r?Or:Nr;case"left":case"right":return r?fs:vs;default:return[]}}function ps(e,r,t,n){const a=Kn(e);let l=gs(nn(e),t==="start",n);return a&&(l=l.map(i=>i+"-"+a),r&&(l=l.concat(l.map(Gt)))),l}function et(e){return e.replace(/left|right|bottom|top/g,r=>os[r])}function Es(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ma(e){return typeof e!="number"?Es(e):{top:e,right:e,bottom:e,left:e}}function nt(e){const{x:r,y:t,width:n,height:a}=e;return{width:n,height:a,top:t,left:r,right:r+n,bottom:t+a,x:r,y:t}}function Ar(e,r,t){let{reference:n,floating:a}=e;const l=ze(r),i=nr(r),s=er(i),o=nn(r),d=l==="y",u=n.x+n.width/2-a.width/2,m=n.y+n.height/2-a.height/2,v=n[s]/2-a[s]/2;let c;switch(o){case"top":c={x:u,y:n.y-a.height};break;case"bottom":c={x:u,y:n.y+n.height};break;case"right":c={x:n.x+n.width,y:m};break;case"left":c={x:n.x-a.width,y:m};break;default:c={x:n.x,y:n.y}}switch(Kn(r)){case"start":c[i]-=v*(t&&d?-1:1);break;case"end":c[i]+=v*(t&&d?-1:1);break}return c}const _s=async(e,r,t)=>{const{placement:n="bottom",strategy:a="absolute",middleware:l=[],platform:i}=t,s=l.filter(Boolean),o=await(i.isRTL==null?void 0:i.isRTL(r));let d=await i.getElementRects({reference:e,floating:r,strategy:a}),{x:u,y:m}=Ar(d,n,o),v=n,c={},E=0;for(let _=0;_<s.length;_++){const{name:y,fn:T}=s[_],{x:R,y:h,data:N,reset:A}=await T({x:u,y:m,initialPlacement:n,placement:v,strategy:a,middlewareData:c,rects:d,platform:i,elements:{reference:e,floating:r}});u=R??u,m=h??m,c={...c,[y]:{...c[y],...N}},A&&E<=50&&(E++,typeof A=="object"&&(A.placement&&(v=A.placement),A.rects&&(d=A.rects===!0?await i.getElementRects({reference:e,floating:r,strategy:a}):A.rects),{x:u,y:m}=Ar(d,v,o)),_=-1)}return{x:u,y:m,placement:v,strategy:a,middlewareData:c}};async function Ga(e,r){var t;r===void 0&&(r={});const{x:n,y:a,platform:l,rects:i,elements:s,strategy:o}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:v=!1,padding:c=0}=Vn(r,e),E=Ma(c),y=s[v?m==="floating"?"reference":"floating":m],T=nt(await l.getClippingRect({element:(t=await(l.isElement==null?void 0:l.isElement(y)))==null||t?y:y.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(s.floating)),boundary:d,rootBoundary:u,strategy:o})),R=m==="floating"?{x:n,y:a,width:i.floating.width,height:i.floating.height}:i.reference,h=await(l.getOffsetParent==null?void 0:l.getOffsetParent(s.floating)),N=await(l.isElement==null?void 0:l.isElement(h))?await(l.getScale==null?void 0:l.getScale(h))||{x:1,y:1}:{x:1,y:1},A=nt(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:R,offsetParent:h,strategy:o}):R);return{top:(T.top-A.top+E.top)/N.y,bottom:(A.bottom-T.bottom+E.bottom)/N.y,left:(T.left-A.left+E.left)/N.x,right:(A.right-T.right+E.right)/N.x}}const ys=e=>({name:"arrow",options:e,async fn(r){const{x:t,y:n,placement:a,rects:l,platform:i,elements:s,middlewareData:o}=r,{element:d,padding:u=0}=Vn(e,r)||{};if(d==null)return{};const m=Ma(u),v={x:t,y:n},c=nr(a),E=er(c),_=await i.getDimensions(d),y=c==="y",T=y?"top":"left",R=y?"bottom":"right",h=y?"clientHeight":"clientWidth",N=l.reference[E]+l.reference[c]-v[c]-l.floating[E],A=v[c]-l.reference[c],G=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let j=G?G[h]:0;(!j||!await(i.isElement==null?void 0:i.isElement(G)))&&(j=s.floating[h]||l.floating[E]);const $=N/2-A/2,q=j/2-_[E]/2-1,C=fn(m[T],q),U=fn(m[R],q),w=C,S=j-_[E]-U,k=j/2-_[E]/2+$,I=Mt(w,k,S),V=!o.arrow&&Kn(a)!=null&&k!==I&&l.reference[E]/2-(k<w?C:U)-_[E]/2<0,x=V?k<w?k-w:k-S:0;return{[c]:v[c]+x,data:{[c]:I,centerOffset:k-I-x,...V&&{alignmentOffset:x}},reset:V}}}),bs=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var t,n;const{placement:a,middlewareData:l,rects:i,initialPlacement:s,platform:o,elements:d}=r,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:v,fallbackStrategy:c="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:_=!0,...y}=Vn(e,r);if((t=l.arrow)!=null&&t.alignmentOffset)return{};const T=nn(a),R=ze(s),h=nn(s)===s,N=await(o.isRTL==null?void 0:o.isRTL(d.floating)),A=v||(h||!_?[et(s)]:cs(s)),G=E!=="none";!v&&G&&A.push(...ps(s,_,E,N));const j=[s,...A],$=await Ga(r,y),q=[];let C=((n=l.flip)==null?void 0:n.overflows)||[];if(u&&q.push($[T]),m){const k=ms(a,i,N);q.push($[k[0]],$[k[1]])}if(C=[...C,{placement:a,overflows:q}],!q.every(k=>k<=0)){var U,w;const k=(((U=l.flip)==null?void 0:U.index)||0)+1,I=j[k];if(I&&(!(m==="alignment"?R!==ze(I):!1)||C.every(L=>ze(L.placement)===R?L.overflows[0]>0:!0)))return{data:{index:k,overflows:C},reset:{placement:I}};let V=(w=C.filter(x=>x.overflows[0]<=0).sort((x,L)=>x.overflows[1]-L.overflows[1])[0])==null?void 0:w.placement;if(!V)switch(c){case"bestFit":{var S;const x=(S=C.filter(L=>{if(G){const F=ze(L.placement);return F===R||F==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(F=>F>0).reduce((F,H)=>F+H,0)]).sort((L,F)=>L[1]-F[1])[0])==null?void 0:S[0];x&&(V=x);break}case"initialPlacement":V=s;break}if(a!==V)return{reset:{placement:V}}}return{}}}},Rs=new Set(["left","top"]);async function hs(e,r){const{placement:t,platform:n,elements:a}=e,l=await(n.isRTL==null?void 0:n.isRTL(a.floating)),i=nn(t),s=Kn(t),o=ze(t)==="y",d=Rs.has(i)?-1:1,u=l&&o?-1:1,m=Vn(r,e);let{mainAxis:v,crossAxis:c,alignmentAxis:E}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return s&&typeof E=="number"&&(c=s==="end"?E*-1:E),o?{x:c*u,y:v*d}:{x:v*d,y:c*u}}const Ts=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var t,n;const{x:a,y:l,placement:i,middlewareData:s}=r,o=await hs(r,e);return i===((t=s.offset)==null?void 0:t.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:a+o.x,y:l+o.y,data:{...o,placement:i}}}}},ks=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:t,y:n,placement:a}=r,{mainAxis:l=!0,crossAxis:i=!1,limiter:s={fn:y=>{let{x:T,y:R}=y;return{x:T,y:R}}},...o}=Vn(e,r),d={x:t,y:n},u=await Ga(r,o),m=ze(nn(a)),v=ja(m);let c=d[v],E=d[m];if(l){const y=v==="y"?"top":"left",T=v==="y"?"bottom":"right",R=c+u[y],h=c-u[T];c=Mt(R,c,h)}if(i){const y=m==="y"?"top":"left",T=m==="y"?"bottom":"right",R=E+u[y],h=E-u[T];E=Mt(R,E,h)}const _=s.fn({...r,[v]:c,[m]:E});return{..._,data:{x:_.x-t,y:_.y-n,enabled:{[v]:l,[m]:i}}}}}};function ct(){return typeof window<"u"}function yn(e){return Ba(e)?(e.nodeName||"").toLowerCase():"#document"}function he(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function je(e){var r;return(r=(Ba(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function Ba(e){return ct()?e instanceof Node||e instanceof he(e).Node:!1}function te(e){return ct()?e instanceof Element||e instanceof he(e).Element:!1}function Oe(e){return ct()?e instanceof HTMLElement||e instanceof he(e).HTMLElement:!1}function tt(e){return!ct()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof he(e).ShadowRoot}const Ss=new Set(["inline","contents"]);function jn(e){const{overflow:r,overflowX:t,overflowY:n,display:a}=Ie(e);return/auto|scroll|overlay|hidden|clip/.test(r+n+t)&&!Ss.has(a)}const Os=new Set(["table","td","th"]);function Ns(e){return Os.has(yn(e))}const As=[":popover-open",":modal"];function ft(e){return As.some(r=>{try{return e.matches(r)}catch{return!1}})}const Ps=["transform","translate","scale","rotate","perspective"],ws=["transform","translate","scale","rotate","perspective","filter"],Is=["paint","layout","strict","content"];function tr(e){const r=vt(),t=te(e)?Ie(e):e;return Ps.some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||ws.some(n=>(t.willChange||"").includes(n))||Is.some(n=>(t.contain||"").includes(n))}function Fs(e){let r=$e(e);for(;Oe(r)&&!He(r);){if(tr(r))return r;if(ft(r))return null;r=$e(r)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ls=new Set(["html","body","#document"]);function He(e){return Ls.has(yn(e))}function Ie(e){return he(e).getComputedStyle(e)}function gt(e){return te(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $e(e){if(yn(e)==="html")return e;const r=e.assignedSlot||e.parentNode||tt(e)&&e.host||je(e);return tt(r)?r.host:r}function qa(e){const r=$e(e);return He(r)?e.ownerDocument?e.ownerDocument.body:e.body:Oe(r)&&jn(r)?r:qa(r)}function We(e,r,t){var n;r===void 0&&(r=[]),t===void 0&&(t=!0);const a=qa(e),l=a===((n=e.ownerDocument)==null?void 0:n.body),i=he(a);if(l){const s=Bt(i);return r.concat(i,i.visualViewport||[],jn(a)?a:[],s&&t?We(s):[])}return r.concat(a,We(a,[],t))}function Bt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ua(e){const r=Ie(e);let t=parseFloat(r.width)||0,n=parseFloat(r.height)||0;const a=Oe(e),l=a?e.offsetWidth:t,i=a?e.offsetHeight:n,s=Qn(t)!==l||Qn(n)!==i;return s&&(t=l,n=i),{width:t,height:n,$:s}}function rr(e){return te(e)?e:e.contextElement}function dn(e){const r=rr(e);if(!Oe(r))return Ve(1);const t=r.getBoundingClientRect(),{width:n,height:a,$:l}=Ua(r);let i=(l?Qn(t.width):t.width)/n,s=(l?Qn(t.height):t.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const Ds=Ve(0);function Ca(e){const r=he(e);return!vt()||!r.visualViewport?Ds:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function xs(e,r,t){return r===void 0&&(r=!1),!t||r&&t!==he(e)?!1:r}function tn(e,r,t,n){r===void 0&&(r=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),l=rr(e);let i=Ve(1);r&&(n?te(n)&&(i=dn(n)):i=dn(e));const s=xs(l,t,n)?Ca(l):Ve(0);let o=(a.left+s.x)/i.x,d=(a.top+s.y)/i.y,u=a.width/i.x,m=a.height/i.y;if(l){const v=he(l),c=n&&te(n)?he(n):n;let E=v,_=Bt(E);for(;_&&n&&c!==E;){const y=dn(_),T=_.getBoundingClientRect(),R=Ie(_),h=T.left+(_.clientLeft+parseFloat(R.paddingLeft))*y.x,N=T.top+(_.clientTop+parseFloat(R.paddingTop))*y.y;o*=y.x,d*=y.y,u*=y.x,m*=y.y,o+=h,d+=N,E=he(_),_=Bt(E)}}return nt({width:u,height:m,x:o,y:d})}function pt(e,r){const t=gt(e).scrollLeft;return r?r.left+t:tn(je(e)).left+t}function Ha(e,r){const t=e.getBoundingClientRect(),n=t.left+r.scrollLeft-pt(e,t),a=t.top+r.scrollTop;return{x:n,y:a}}function Vs(e){let{elements:r,rect:t,offsetParent:n,strategy:a}=e;const l=a==="fixed",i=je(n),s=r?ft(r.floating):!1;if(n===i||s&&l)return t;let o={scrollLeft:0,scrollTop:0},d=Ve(1);const u=Ve(0),m=Oe(n);if((m||!m&&!l)&&((yn(n)!=="body"||jn(i))&&(o=gt(n)),Oe(n))){const c=tn(n);d=dn(n),u.x=c.x+n.clientLeft,u.y=c.y+n.clientTop}const v=i&&!m&&!l?Ha(i,o):Ve(0);return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-o.scrollLeft*d.x+u.x+v.x,y:t.y*d.y-o.scrollTop*d.y+u.y+v.y}}function Ks(e){return Array.from(e.getClientRects())}function js(e){const r=je(e),t=gt(e),n=e.ownerDocument.body,a=en(r.scrollWidth,r.clientWidth,n.scrollWidth,n.clientWidth),l=en(r.scrollHeight,r.clientHeight,n.scrollHeight,n.clientHeight);let i=-t.scrollLeft+pt(e);const s=-t.scrollTop;return Ie(n).direction==="rtl"&&(i+=en(r.clientWidth,n.clientWidth)-a),{width:a,height:l,x:i,y:s}}const Pr=25;function Ms(e,r){const t=he(e),n=je(e),a=t.visualViewport;let l=n.clientWidth,i=n.clientHeight,s=0,o=0;if(a){l=a.width,i=a.height;const u=vt();(!u||u&&r==="fixed")&&(s=a.offsetLeft,o=a.offsetTop)}const d=pt(n);if(d<=0){const u=n.ownerDocument,m=u.body,v=getComputedStyle(m),c=u.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,E=Math.abs(n.clientWidth-m.clientWidth-c);E<=Pr&&(l-=E)}else d<=Pr&&(l+=d);return{width:l,height:i,x:s,y:o}}const Gs=new Set(["absolute","fixed"]);function Bs(e,r){const t=tn(e,!0,r==="fixed"),n=t.top+e.clientTop,a=t.left+e.clientLeft,l=Oe(e)?dn(e):Ve(1),i=e.clientWidth*l.x,s=e.clientHeight*l.y,o=a*l.x,d=n*l.y;return{width:i,height:s,x:o,y:d}}function wr(e,r,t){let n;if(r==="viewport")n=Ms(e,t);else if(r==="document")n=js(je(e));else if(te(r))n=Bs(r,t);else{const a=Ca(e);n={x:r.x-a.x,y:r.y-a.y,width:r.width,height:r.height}}return nt(n)}function $a(e,r){const t=$e(e);return t===r||!te(t)||He(t)?!1:Ie(t).position==="fixed"||$a(t,r)}function qs(e,r){const t=r.get(e);if(t)return t;let n=We(e,[],!1).filter(s=>te(s)&&yn(s)!=="body"),a=null;const l=Ie(e).position==="fixed";let i=l?$e(e):e;for(;te(i)&&!He(i);){const s=Ie(i),o=tr(i);!o&&s.position==="fixed"&&(a=null),(l?!o&&!a:!o&&s.position==="static"&&!!a&&Gs.has(a.position)||jn(i)&&!o&&$a(e,i))?n=n.filter(u=>u!==i):a=s,i=$e(i)}return r.set(e,n),n}function Us(e){let{element:r,boundary:t,rootBoundary:n,strategy:a}=e;const i=[...t==="clippingAncestors"?ft(r)?[]:qs(r,this._c):[].concat(t),n],s=i[0],o=i.reduce((d,u)=>{const m=wr(r,u,a);return d.top=en(m.top,d.top),d.right=fn(m.right,d.right),d.bottom=fn(m.bottom,d.bottom),d.left=en(m.left,d.left),d},wr(r,s,a));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function Cs(e){const{width:r,height:t}=Ua(e);return{width:r,height:t}}function Hs(e,r,t){const n=Oe(r),a=je(r),l=t==="fixed",i=tn(e,!0,l,r);let s={scrollLeft:0,scrollTop:0};const o=Ve(0);function d(){o.x=pt(a)}if(n||!n&&!l)if((yn(r)!=="body"||jn(a))&&(s=gt(r)),n){const c=tn(r,!0,l,r);o.x=c.x+r.clientLeft,o.y=c.y+r.clientTop}else a&&d();l&&!n&&a&&d();const u=a&&!n&&!l?Ha(a,s):Ve(0),m=i.left+s.scrollLeft-o.x-u.x,v=i.top+s.scrollTop-o.y-u.y;return{x:m,y:v,width:i.width,height:i.height}}function Rt(e){return Ie(e).position==="static"}function Ir(e,r){if(!Oe(e)||Ie(e).position==="fixed")return null;if(r)return r(e);let t=e.offsetParent;return je(e)===t&&(t=t.ownerDocument.body),t}function Ya(e,r){const t=he(e);if(ft(e))return t;if(!Oe(e)){let a=$e(e);for(;a&&!He(a);){if(te(a)&&!Rt(a))return a;a=$e(a)}return t}let n=Ir(e,r);for(;n&&Ns(n)&&Rt(n);)n=Ir(n,r);return n&&He(n)&&Rt(n)&&!tr(n)?t:n||Fs(e)||t}const $s=async function(e){const r=this.getOffsetParent||Ya,t=this.getDimensions,n=await t(e.floating);return{reference:Hs(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Ys(e){return Ie(e).direction==="rtl"}const zs={convertOffsetParentRelativeRectToViewportRelativeRect:Vs,getDocumentElement:je,getClippingRect:Us,getOffsetParent:Ya,getElementRects:$s,getClientRects:Ks,getDimensions:Cs,getScale:dn,isElement:te,isRTL:Ys};function za(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function Ws(e,r){let t=null,n;const a=je(e);function l(){var s;clearTimeout(n),(s=t)==null||s.disconnect(),t=null}function i(s,o){s===void 0&&(s=!1),o===void 0&&(o=1),l();const d=e.getBoundingClientRect(),{left:u,top:m,width:v,height:c}=d;if(s||r(),!v||!c)return;const E=Cn(m),_=Cn(a.clientWidth-(u+v)),y=Cn(a.clientHeight-(m+c)),T=Cn(u),h={rootMargin:-E+"px "+-_+"px "+-y+"px "+-T+"px",threshold:en(0,fn(1,o))||1};let N=!0;function A(G){const j=G[0].intersectionRatio;if(j!==o){if(!N)return i();j?i(!1,j):n=setTimeout(()=>{i(!1,1e-7)},1e3)}j===1&&!za(d,e.getBoundingClientRect())&&i(),N=!1}try{t=new IntersectionObserver(A,{...h,root:a.ownerDocument})}catch{t=new IntersectionObserver(A,h)}t.observe(e)}return i(!0),l}function Fr(e,r,t,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:o=!1}=n,d=rr(e),u=a||l?[...d?We(d):[],...We(r)]:[];u.forEach(T=>{a&&T.addEventListener("scroll",t,{passive:!0}),l&&T.addEventListener("resize",t)});const m=d&&s?Ws(d,t):null;let v=-1,c=null;i&&(c=new ResizeObserver(T=>{let[R]=T;R&&R.target===d&&c&&(c.unobserve(r),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var h;(h=c)==null||h.observe(r)})),t()}),d&&!o&&c.observe(d),c.observe(r));let E,_=o?tn(e):null;o&&y();function y(){const T=tn(e);_&&!za(_,T)&&t(),_=T,E=requestAnimationFrame(y)}return t(),()=>{var T;u.forEach(R=>{a&&R.removeEventListener("scroll",t),l&&R.removeEventListener("resize",t)}),m?.(),(T=c)==null||T.disconnect(),c=null,o&&cancelAnimationFrame(E)}}const Js=Ts,Xs=ks,Zs=bs,Lr=ys,Qs=(e,r,t)=>{const n=new Map,a={platform:zs,...t},l={...a.platform,_c:n};return _s(e,r,{...a,platform:l})};var eo=typeof document<"u",no=function(){},Zn=eo?p.useLayoutEffect:no;function rt(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!rt(e[n],r[n]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,a[n]))return!1;for(n=t;n--!==0;){const l=a[n];if(!(l==="_owner"&&e.$$typeof)&&!rt(e[l],r[l]))return!1}return!0}return e!==e&&r!==r}function Wa(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Dr(e,r){const t=Wa(e);return Math.round(r*t)/t}function ht(e){const r=p.useRef(e);return Zn(()=>{r.current=e}),r}function to(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:a,elements:{reference:l,floating:i}={},transform:s=!0,whileElementsMounted:o,open:d}=e,[u,m]=p.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[v,c]=p.useState(n);rt(v,n)||c(n);const[E,_]=p.useState(null),[y,T]=p.useState(null),R=p.useCallback(L=>{L!==G.current&&(G.current=L,_(L))},[]),h=p.useCallback(L=>{L!==j.current&&(j.current=L,T(L))},[]),N=l||E,A=i||y,G=p.useRef(null),j=p.useRef(null),$=p.useRef(u),q=o!=null,C=ht(o),U=ht(a),w=ht(d),S=p.useCallback(()=>{if(!G.current||!j.current)return;const L={placement:r,strategy:t,middleware:v};U.current&&(L.platform=U.current),Qs(G.current,j.current,L).then(F=>{const H={...F,isPositioned:w.current!==!1};k.current&&!rt($.current,H)&&($.current=H,Ia.flushSync(()=>{m(H)}))})},[v,r,t,U,w]);Zn(()=>{d===!1&&$.current.isPositioned&&($.current.isPositioned=!1,m(L=>({...L,isPositioned:!1})))},[d]);const k=p.useRef(!1);Zn(()=>(k.current=!0,()=>{k.current=!1}),[]),Zn(()=>{if(N&&(G.current=N),A&&(j.current=A),N&&A){if(C.current)return C.current(N,A,S);S()}},[N,A,S,C,q]);const I=p.useMemo(()=>({reference:G,floating:j,setReference:R,setFloating:h}),[R,h]),V=p.useMemo(()=>({reference:N,floating:A}),[N,A]),x=p.useMemo(()=>{const L={position:t,left:0,top:0};if(!V.floating)return L;const F=Dr(V.floating,u.x),H=Dr(V.floating,u.y);return s?{...L,transform:"translate("+F+"px, "+H+"px)",...Wa(V.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:F,top:H}},[t,s,V.floating,u.x,u.y]);return p.useMemo(()=>({...u,update:S,refs:I,elements:V,floatingStyles:x}),[u,S,I,V,x])}const ro=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:a}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?Lr({element:n.current,padding:a}).fn(t):{}:n?Lr({element:n,padding:a}).fn(t):{}}}},ao=(e,r)=>({...Js(e),options:[e,r]}),lo=(e,r)=>({...Xs(e),options:[e,r]}),io=(e,r)=>({...Zs(e),options:[e,r]}),so=(e,r)=>({...ro(e),options:[e,r]}),xr=/(\w+)/g;function oo(e,r){const t=Array.isArray(e)?e:uo(e);for(const n of r){if(!n)continue;let a=n;for(let l=0;l<t.length;l++){const i=a[t[l]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function uo(e){const r=[];let t=xr.exec(e);for(;t;){const[,n,a]=t;r.push(n||a),t=xr.exec(e)}return r}const mo=/{[^}]*}/g;function Mn(e,...r){const t=Ka(),n=t.translations||[],a=[...r,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],t.locale[e]];return(i,s)=>{const o=oo(i,a);return s?o.replace(mo,d=>{const u=d.substring(1,d.length-1);if(s[u]===void 0){const m=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${m}'`)}return s[u]}):o}}var co=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fo=p.forwardRef((e,r)=>{var{className:t,size:n="medium",title:a,transparent:l=!1,variant:i="neutral",id:s,"data-color":o}=e,d=co(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:u}=X(),m=Je(),v=Mn("Loader");return g.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${m}`,ref:r,className:u("navds-loader",t,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":o??vo(i)},xe(d,["children"]),{"data-variant":i}),g.createElement("title",{id:s??`loader-${m}`},a||v("title")),g.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),g.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function vo(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var go=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ja=p.forwardRef((e,r)=>{var{as:t="button",variant:n="primary",className:a,children:l,size:i="medium",loading:s=!1,disabled:o,icon:d,iconPosition:u="left",onKeyUp:m,"data-color":v}=e,c=go(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:E}=X(),_=o||s?xe(c,["href"]):c,y=T=>{T.key===" "&&!o&&!s&&T.currentTarget.click()};return g.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":v??po(n),"data-variant":Eo(n)},_,{ref:r,onKeyUp:xn(m,y),className:E(a,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!d&&!l,"navds-button--disabled":o??s}),disabled:o??s?!0:void 0}),d&&u==="left"&&g.createElement("span",{className:E("navds-button__icon")},d),s&&g.createElement(fo,{size:i}),l&&g.createElement(_n,{as:"span",size:i==="medium"?"medium":"small"},l),d&&u==="right"&&g.createElement("span",{className:E("navds-button__icon")},d))});function po(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Eo(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var _o=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const yo={error:ki,warning:ui,info:mi,success:ai},bo=p.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:o=!1,closeButton:d=!1,onClose:u}=e,m=_o(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:v}=X(),c=Mn("Alert"),E=yo[a];return g.createElement("div",Object.assign({},m,{"data-color":Ro(a),"data-variant":a,ref:r,className:v(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":o,"navds-alert--close-button":d})}),g.createElement(E,{title:c(a),className:v("navds-alert__icon")}),g.createElement(Xt,{as:"div",size:l,className:v("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},t),d&&!o&&g.createElement("div",{className:v("navds-alert__button-wrapper")},g.createElement(Ja,{className:v("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:g.createElement(hi,{title:["error","warning"].includes(a)?c("closeAlert"):c("closeMessage")})})))});function Ro(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function ho(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function To(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(r=>{let{brand:t,version:n}=r;return t+"/"+n}).join(" "):navigator.userAgent}function ko(){return/apple/i.test(navigator.vendor)}function So(){return ho().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Oo(){return To().includes("jsdom/")}const No="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Vr(e){let r=e.activeElement;for(;((t=r)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;r=r.shadowRoot.activeElement}return r}function Ln(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&tt(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function sn(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Tt(e,r){if(r==null)return!1;if("composedPath"in e)return e.composedPath().includes(r);const t=e;return t.target!=null&&r.contains(t.target)}function Ao(e){return e.matches("html,body")}function Ze(e){return e?.ownerDocument||document}function Po(e){return Oe(e)&&e.matches(No)}function wo(e){if(!e||Oo())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function kt(e,r,t){t===void 0&&(t=!0);let n=e.filter(l=>{var i;return l.parentId===r&&((i=l.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(l=>{var i;return(i=a)==null?void 0:i.some(s=>{var o;return l.parentId===s.id&&((o=l.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function Io(e){return"nativeEvent"in e}function qt(e,r){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var vn=typeof document<"u"?p.useLayoutEffect:p.useEffect;const Fo={...Oa};function Hn(e){const r=p.useRef(e);return vn(()=>{r.current=e}),r}const Lo=Fo.useInsertionEffect,Do=Lo||(e=>e());function qe(e){const r=p.useRef(()=>{});return Do(()=>{r.current=e}),p.useCallback(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.current==null?void 0:r.current(...n)},[])}const xo="data-floating-ui-focusable",Kr="active",jr="selected",Vo={...Oa};let Mr=!1,Ko=0;const Gr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Ko++;function jo(){const[e,r]=p.useState(()=>Mr?Gr():void 0);return vn(()=>{e==null&&r(Gr())},[]),p.useEffect(()=>{Mr=!0},[]),e}const Mo=Vo.useId,Go=Mo||jo;function Bo(){const e=new Map;return{emit(r,t){var n;(n=e.get(r))==null||n.forEach(a=>a(t))},on(r,t){e.has(r)||e.set(r,new Set),e.get(r).add(t)},off(r,t){var n;(n=e.get(r))==null||n.delete(t)}}}const qo=p.createContext(null),Uo=p.createContext(null),Xa=()=>{var e;return((e=p.useContext(qo))==null?void 0:e.id)||null},ar=()=>p.useContext(Uo);function lr(e){return"data-floating-ui-"+e}function Pe(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Br=lr("safe-polygon");function St(e,r,t){if(t&&!qt(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n?.[r]}return e?.[r]}function Ot(e){return typeof e=="function"?e():e}function Co(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,dataRef:a,events:l,elements:i}=e,{enabled:s=!0,delay:o=0,handleClose:d=null,mouseOnly:u=!1,restMs:m=0,move:v=!0}=r,c=ar(),E=Xa(),_=Hn(d),y=Hn(o),T=Hn(t),R=Hn(m),h=p.useRef(),N=p.useRef(-1),A=p.useRef(),G=p.useRef(-1),j=p.useRef(!0),$=p.useRef(!1),q=p.useRef(()=>{}),C=p.useRef(!1),U=p.useCallback(()=>{var x;const L=(x=a.current.openEvent)==null?void 0:x.type;return L?.includes("mouse")&&L!=="mousedown"},[a]);p.useEffect(()=>{if(!s)return;function x(L){let{open:F}=L;F||(Pe(N),Pe(G),j.current=!0,C.current=!1)}return l.on("openchange",x),()=>{l.off("openchange",x)}},[s,l]),p.useEffect(()=>{if(!s||!_.current||!t)return;function x(F){U()&&n(!1,F,"hover")}const L=Ze(i.floating).documentElement;return L.addEventListener("mouseleave",x),()=>{L.removeEventListener("mouseleave",x)}},[i.floating,t,n,s,_,U]);const w=p.useCallback(function(x,L,F){L===void 0&&(L=!0),F===void 0&&(F="hover");const H=St(y.current,"close",h.current);H&&!A.current?(Pe(N),N.current=window.setTimeout(()=>n(!1,x,F),H)):L&&(Pe(N),n(!1,x,F))},[y,n]),S=qe(()=>{q.current(),A.current=void 0}),k=qe(()=>{if($.current){const x=Ze(i.floating).body;x.style.pointerEvents="",x.removeAttribute(Br),$.current=!1}}),I=qe(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);p.useEffect(()=>{if(!s)return;function x(W){if(Pe(N),j.current=!1,u&&!qt(h.current)||Ot(R.current)>0&&!St(y.current,"open"))return;const J=St(y.current,"open",h.current);J?N.current=window.setTimeout(()=>{T.current||n(!0,W,"hover")},J):t||n(!0,W,"hover")}function L(W){if(I()){k();return}q.current();const J=Ze(i.floating);if(Pe(G),C.current=!1,_.current&&a.current.floatingContext){t||Pe(N),A.current=_.current({...a.current.floatingContext,tree:c,x:W.clientX,y:W.clientY,onClose(){k(),S(),I()||w(W,!0,"safe-polygon")}});const ge=A.current;J.addEventListener("mousemove",ge),q.current=()=>{J.removeEventListener("mousemove",ge)};return}(h.current==="touch"?!Ln(i.floating,W.relatedTarget):!0)&&w(W)}function F(W){I()||a.current.floatingContext&&(_.current==null||_.current({...a.current.floatingContext,tree:c,x:W.clientX,y:W.clientY,onClose(){k(),S(),I()||w(W)}})(W))}function H(){Pe(N)}function z(W){I()||w(W,!1)}if(te(i.domReference)){const W=i.domReference,J=i.floating;return t&&W.addEventListener("mouseleave",F),v&&W.addEventListener("mousemove",x,{once:!0}),W.addEventListener("mouseenter",x),W.addEventListener("mouseleave",L),J&&(J.addEventListener("mouseleave",F),J.addEventListener("mouseenter",H),J.addEventListener("mouseleave",z)),()=>{t&&W.removeEventListener("mouseleave",F),v&&W.removeEventListener("mousemove",x),W.removeEventListener("mouseenter",x),W.removeEventListener("mouseleave",L),J&&(J.removeEventListener("mouseleave",F),J.removeEventListener("mouseenter",H),J.removeEventListener("mouseleave",z))}}},[i,s,e,u,v,w,S,k,n,t,T,c,y,_,a,I,R]),vn(()=>{var x;if(s&&t&&(x=_.current)!=null&&x.__options.blockPointerEvents&&U()){$.current=!0;const F=i.floating;if(te(i.domReference)&&F){var L;const H=Ze(i.floating).body;H.setAttribute(Br,"");const z=i.domReference,W=c==null||(L=c.nodesRef.current.find(J=>J.id===E))==null||(L=L.context)==null?void 0:L.elements.floating;return W&&(W.style.pointerEvents=""),H.style.pointerEvents="none",z.style.pointerEvents="auto",F.style.pointerEvents="auto",()=>{H.style.pointerEvents="",z.style.pointerEvents="",F.style.pointerEvents=""}}}},[s,t,E,i,c,_,U]),vn(()=>{t||(h.current=void 0,C.current=!1,S(),k())},[t,S,k]),p.useEffect(()=>()=>{S(),Pe(N),Pe(G),k()},[s,i.domReference,S,k]);const V=p.useMemo(()=>{function x(L){h.current=L.pointerType}return{onPointerDown:x,onPointerEnter:x,onMouseMove(L){const{nativeEvent:F}=L;function H(){!j.current&&!T.current&&n(!0,F,"hover")}u&&!qt(h.current)||t||Ot(R.current)===0||C.current&&L.movementX**2+L.movementY**2<2||(Pe(G),h.current==="touch"?H():(C.current=!0,G.current=window.setTimeout(H,Ot(R.current))))}}},[u,n,t,T,R]);return p.useMemo(()=>s?{reference:V}:{},[s,V])}function Nt(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&tt(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Ho(e){return"composedPath"in e?e.composedPath()[0]:e.target}const $o={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Yo={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},qr=e=>{var r,t;return{escapeKey:typeof e=="boolean"?e:(r=e?.escapeKey)!=null?r:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function zo(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,elements:a,dataRef:l}=e,{enabled:i=!0,escapeKey:s=!0,outsidePress:o=!0,outsidePressEvent:d="pointerdown",referencePress:u=!1,referencePressEvent:m="pointerdown",ancestorScroll:v=!1,bubbles:c,capture:E}=r,_=ar(),y=qe(typeof o=="function"?o:()=>!1),T=typeof o=="function"?y:o,R=p.useRef(!1),h=p.useRef(!1),{escapeKey:N,outsidePress:A}=qr(c),{escapeKey:G,outsidePress:j}=qr(E),$=p.useRef(!1),q=qe(I=>{var V;if(!t||!i||!s||I.key!=="Escape"||$.current)return;const x=(V=l.current.floatingContext)==null?void 0:V.nodeId,L=_?kt(_.nodesRef.current,x):[];if(!N&&(I.stopPropagation(),L.length>0)){let F=!0;if(L.forEach(H=>{var z;if((z=H.context)!=null&&z.open&&!H.context.dataRef.current.__escapeKeyBubbles){F=!1;return}}),!F)return}n(!1,Io(I)?I.nativeEvent:I,"escape-key")}),C=qe(I=>{var V;const x=()=>{var L;q(I),(L=sn(I))==null||L.removeEventListener("keydown",x)};(V=sn(I))==null||V.addEventListener("keydown",x)}),U=qe(I=>{var V;const x=R.current;R.current=!1;const L=h.current;if(h.current=!1,d==="click"&&L||x||typeof T=="function"&&!T(I))return;const F=sn(I),H="["+lr("inert")+"]",z=Ze(a.floating).querySelectorAll(H);let W=te(F)?F:null;for(;W&&!He(W);){const de=$e(W);if(He(de)||!te(de))break;W=de}if(z.length&&te(F)&&!Ao(F)&&!Ln(F,a.floating)&&Array.from(z).every(de=>!Ln(W,de)))return;if(Oe(F)&&k){const de=He(F),le=Ie(F),Z=/auto|scroll/,re=de||Z.test(le.overflowX),pe=de||Z.test(le.overflowY),Ee=re&&F.clientWidth>0&&F.scrollWidth>F.clientWidth,_e=pe&&F.clientHeight>0&&F.scrollHeight>F.clientHeight,Xe=le.direction==="rtl",Me=_e&&(Xe?I.offsetX<=F.offsetWidth-F.clientWidth:I.offsetX>F.clientWidth),Ge=Ee&&I.offsetY>F.clientHeight;if(Me||Ge)return}const J=(V=l.current.floatingContext)==null?void 0:V.nodeId,Fe=_&&kt(_.nodesRef.current,J).some(de=>{var le;return Tt(I,(le=de.context)==null?void 0:le.elements.floating)});if(Tt(I,a.floating)||Tt(I,a.domReference)||Fe)return;const ge=_?kt(_.nodesRef.current,J):[];if(ge.length>0){let de=!0;if(ge.forEach(le=>{var Z;if((Z=le.context)!=null&&Z.open&&!le.context.dataRef.current.__outsidePressBubbles){de=!1;return}}),!de)return}n(!1,I,"outside-press")}),w=qe(I=>{var V;const x=()=>{var L;U(I),(L=sn(I))==null||L.removeEventListener(d,x)};(V=sn(I))==null||V.addEventListener(d,x)});p.useEffect(()=>{if(!t||!i)return;l.current.__escapeKeyBubbles=N,l.current.__outsidePressBubbles=A;let I=-1;function V(z){n(!1,z,"ancestor-scroll")}function x(){window.clearTimeout(I),$.current=!0}function L(){I=window.setTimeout(()=>{$.current=!1},vt()?5:0)}const F=Ze(a.floating);s&&(F.addEventListener("keydown",G?C:q,G),F.addEventListener("compositionstart",x),F.addEventListener("compositionend",L)),T&&F.addEventListener(d,j?w:U,j);let H=[];return v&&(te(a.domReference)&&(H=We(a.domReference)),te(a.floating)&&(H=H.concat(We(a.floating))),!te(a.reference)&&a.reference&&a.reference.contextElement&&(H=H.concat(We(a.reference.contextElement)))),H=H.filter(z=>{var W;return z!==((W=F.defaultView)==null?void 0:W.visualViewport)}),H.forEach(z=>{z.addEventListener("scroll",V,{passive:!0})}),()=>{s&&(F.removeEventListener("keydown",G?C:q,G),F.removeEventListener("compositionstart",x),F.removeEventListener("compositionend",L)),T&&F.removeEventListener(d,j?w:U,j),H.forEach(z=>{z.removeEventListener("scroll",V)}),window.clearTimeout(I)}},[l,a,s,T,d,t,n,v,i,N,A,q,G,C,U,j,w]),p.useEffect(()=>{R.current=!1},[T,d]);const S=p.useMemo(()=>({onKeyDown:q,...u&&{[$o[m]]:I=>{n(!1,I.nativeEvent,"reference-press")},...m!=="click"&&{onClick(I){n(!1,I.nativeEvent,"reference-press")}}}}),[q,n,u,m]),k=p.useMemo(()=>({onKeyDown:q,onMouseDown(){h.current=!0},onMouseUp(){h.current=!0},[Yo[d]]:()=>{R.current=!0}}),[q,d]);return p.useMemo(()=>i?{reference:S,floating:k}:{},[i,S,k])}function Wo(e){const{open:r=!1,onOpenChange:t,elements:n}=e,a=Go(),l=p.useRef({}),[i]=p.useState(()=>Bo()),s=Xa()!=null,[o,d]=p.useState(n.reference),u=qe((c,E,_)=>{l.current.openEvent=c?E:void 0,i.emit("openchange",{open:c,event:E,reason:_,nested:s}),t?.(c,E,_)}),m=p.useMemo(()=>({setPositionReference:d}),[]),v=p.useMemo(()=>({reference:o||n.reference||null,floating:n.floating||null,domReference:n.reference}),[o,n.reference,n.floating]);return p.useMemo(()=>({dataRef:l,open:r,onOpenChange:u,elements:v,events:i,floatingId:a,refs:m}),[r,u,v,i,a,m])}function Jo(e){e===void 0&&(e={});const{nodeId:r}=e,t=Wo({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||t,a=n.elements,[l,i]=p.useState(null),[s,o]=p.useState(null),u=a?.domReference||l,m=p.useRef(null),v=ar();vn(()=>{u&&(m.current=u)},[u]);const c=to({...e,elements:{...a,...s&&{reference:s}}}),E=p.useCallback(h=>{const N=te(h)?{getBoundingClientRect:()=>h.getBoundingClientRect(),getClientRects:()=>h.getClientRects(),contextElement:h}:h;o(N),c.refs.setReference(N)},[c.refs]),_=p.useCallback(h=>{(te(h)||h===null)&&(m.current=h,i(h)),(te(c.refs.reference.current)||c.refs.reference.current===null||h!==null&&!te(h))&&c.refs.setReference(h)},[c.refs]),y=p.useMemo(()=>({...c.refs,setReference:_,setPositionReference:E,domReference:m}),[c.refs,_,E]),T=p.useMemo(()=>({...c.elements,domReference:u}),[c.elements,u]),R=p.useMemo(()=>({...c,...n,refs:y,elements:T,nodeId:r}),[c,y,T,r,n]);return vn(()=>{n.dataRef.current.floatingContext=R;const h=v?.nodesRef.current.find(N=>N.id===r);h&&(h.context=R)}),p.useMemo(()=>({...c,context:R,refs:y,elements:T}),[c,y,T,R])}function At(){return So()&&ko()}function Xo(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,events:a,dataRef:l,elements:i}=e,{enabled:s=!0,visibleOnly:o=!0}=r,d=p.useRef(!1),u=p.useRef(-1),m=p.useRef(!0);p.useEffect(()=>{if(!s)return;const c=he(i.domReference);function E(){!t&&Oe(i.domReference)&&i.domReference===Vr(Ze(i.domReference))&&(d.current=!0)}function _(){m.current=!0}function y(){m.current=!1}return c.addEventListener("blur",E),At()&&(c.addEventListener("keydown",_,!0),c.addEventListener("pointerdown",y,!0)),()=>{c.removeEventListener("blur",E),At()&&(c.removeEventListener("keydown",_,!0),c.removeEventListener("pointerdown",y,!0))}},[i.domReference,t,s]),p.useEffect(()=>{if(!s)return;function c(E){let{reason:_}=E;(_==="reference-press"||_==="escape-key")&&(d.current=!0)}return a.on("openchange",c),()=>{a.off("openchange",c)}},[a,s]),p.useEffect(()=>()=>{Pe(u)},[]);const v=p.useMemo(()=>({onMouseLeave(){d.current=!1},onFocus(c){if(d.current)return;const E=sn(c.nativeEvent);if(o&&te(E)){if(At()&&!c.relatedTarget){if(!m.current&&!Po(E))return}else if(!wo(E))return}n(!0,c.nativeEvent,"focus")},onBlur(c){d.current=!1;const E=c.relatedTarget,_=c.nativeEvent,y=te(E)&&E.hasAttribute(lr("focus-guard"))&&E.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var T;const R=Vr(i.domReference?i.domReference.ownerDocument:document);!E&&R===i.domReference||Ln((T=l.current.floatingContext)==null?void 0:T.refs.floating.current,R)||Ln(i.domReference,R)||y||n(!1,_,"focus")})}}),[l,i.domReference,n,o]);return p.useMemo(()=>s?{reference:v}:{},[s,v])}function Pt(e,r,t){const n=new Map,a=t==="item";let l=e;if(a&&e){const{[Kr]:i,[jr]:s,...o}=e;l=o}return{...t==="floating"&&{tabIndex:-1,[xo]:""},...l,...r.map(i=>{const s=i?i[t]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((i,s)=>(s&&Object.entries(s).forEach(o=>{let[d,u]=o;if(!(a&&[Kr,jr].includes(d)))if(d.indexOf("on")===0){if(n.has(d)||n.set(d,[]),typeof u=="function"){var m;(m=n.get(d))==null||m.push(u),i[d]=function(){for(var v,c=arguments.length,E=new Array(c),_=0;_<c;_++)E[_]=arguments[_];return(v=n.get(d))==null?void 0:v.map(y=>y(...E)).find(y=>y!==void 0)}}}else i[d]=u}),i),{})}}function Zo(e){e===void 0&&(e=[]);const r=e.map(s=>s?.reference),t=e.map(s=>s?.floating),n=e.map(s=>s?.item),a=p.useCallback(s=>Pt(s,e,"reference"),r),l=p.useCallback(s=>Pt(s,e,"floating"),t),i=p.useCallback(s=>Pt(s,e,"item"),n);return p.useMemo(()=>({getReferenceProps:a,getFloatingProps:l,getItemProps:i}),[a,l,i])}function Qo(e,r,t){t===void 0&&(t=!0);let n=e.filter(l=>{var i;return l.parentId===r&&((i=l.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(l=>{var i;return(i=a)==null?void 0:i.some(s=>{var o;return l.parentId===s.id&&((o=l.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function Ur(e,r){const[t,n]=e;let a=!1;const l=r.length;for(let i=0,s=l-1;i<l;s=i++){const[o,d]=r[i]||[0,0],[u,m]=r[s]||[0,0];d>=n!=m>=n&&t<=(u-o)*(n-d)/(m-d)+o&&(a=!a)}return a}function eu(e,r){return e[0]>=r.x&&e[0]<=r.x+r.width&&e[1]>=r.y&&e[1]<=r.y+r.height}function nu(e){e===void 0&&(e={});const{buffer:r=.5,blockPointerEvents:t=!1,requireIntent:n=!0}=e;let a,l=!1,i=null,s=null,o=performance.now();function d(m,v){const c=performance.now(),E=c-o;if(i===null||s===null||E===0)return i=m,s=v,o=c,null;const _=m-i,y=v-s,R=Math.sqrt(_*_+y*y)/E;return i=m,s=v,o=c,R}const u=m=>{let{x:v,y:c,placement:E,elements:_,onClose:y,nodeId:T,tree:R}=m;return function(N){function A(){clearTimeout(a),y()}if(clearTimeout(a),!_.domReference||!_.floating||E==null||v==null||c==null)return;const{clientX:G,clientY:j}=N,$=[G,j],q=Ho(N),C=N.type==="mouseleave",U=Nt(_.floating,q),w=Nt(_.domReference,q),S=_.domReference.getBoundingClientRect(),k=_.floating.getBoundingClientRect(),I=E.split("-")[0],V=v>k.right-k.width/2,x=c>k.bottom-k.height/2,L=eu($,S),F=k.width>S.width,H=k.height>S.height,z=(F?S:k).left,W=(F?S:k).right,J=(H?S:k).top,Fe=(H?S:k).bottom;if(U&&(l=!0,!C))return;if(w&&(l=!1),w&&!C){l=!0;return}if(C&&te(N.relatedTarget)&&Nt(_.floating,N.relatedTarget)||R&&Qo(R.nodesRef.current,T).some(le=>{let{context:Z}=le;return Z?.open}))return;if(I==="top"&&c>=S.bottom-1||I==="bottom"&&c<=S.top+1||I==="left"&&v>=S.right-1||I==="right"&&v<=S.left+1)return A();let ge=[];switch(I){case"top":ge=[[z,S.top+1],[z,k.bottom-1],[W,k.bottom-1],[W,S.top+1]];break;case"bottom":ge=[[z,k.top+1],[z,S.bottom-1],[W,S.bottom-1],[W,k.top+1]];break;case"left":ge=[[k.right-1,Fe],[k.right-1,J],[S.left+1,J],[S.left+1,Fe]];break;case"right":ge=[[S.right-1,Fe],[S.right-1,J],[k.left+1,J],[k.left+1,Fe]];break}function de(le){let[Z,re]=le;switch(I){case"top":{const pe=[F?Z+r/2:V?Z+r*4:Z-r*4,re+r+1],Ee=[F?Z-r/2:V?Z+r*4:Z-r*4,re+r+1],_e=[[k.left,V||F?k.bottom-r:k.top],[k.right,V?F?k.bottom-r:k.top:k.bottom-r]];return[pe,Ee,..._e]}case"bottom":{const pe=[F?Z+r/2:V?Z+r*4:Z-r*4,re-r],Ee=[F?Z-r/2:V?Z+r*4:Z-r*4,re-r],_e=[[k.left,V||F?k.top+r:k.bottom],[k.right,V?F?k.top+r:k.bottom:k.top+r]];return[pe,Ee,..._e]}case"left":{const pe=[Z+r+1,H?re+r/2:x?re+r*4:re-r*4],Ee=[Z+r+1,H?re-r/2:x?re+r*4:re-r*4];return[...[[x||H?k.right-r:k.left,k.top],[x?H?k.right-r:k.left:k.right-r,k.bottom]],pe,Ee]}case"right":{const pe=[Z-r,H?re+r/2:x?re+r*4:re-r*4],Ee=[Z-r,H?re-r/2:x?re+r*4:re-r*4],_e=[[x||H?k.left+r:k.right,k.top],[x?H?k.left+r:k.right:k.left+r,k.bottom]];return[pe,Ee,..._e]}}}if(!Ur([G,j],ge)){if(l&&!L)return A();if(!C&&n){const le=d(N.clientX,N.clientY);if(le!==null&&le<.1)return A()}Ur([G,j],de([v,c]))?!l&&n&&(a=window.setTimeout(A,40)):A()}}};return u.__options={blockPointerEvents:t},u}const Za=()=>{const{cn:e}=X();return g.createElement(Va,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},tu=()=>{const{cn:e}=X();return g.createElement(Va,{title:Mn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var ru=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Qa=p.forwardRef((e,r)=>{var{className:t,header:n,children:a,open:l,defaultOpen:i=!1,onClick:s,size:o="medium",onOpenChange:d}=e,u=ru(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:m}=X(),[v,c]=Zt({defaultValue:i,value:l,onChange:d}),E=o==="small"?"small":"medium";return g.createElement("div",{className:m("navds-read-more",`navds-read-more--${o}`,t,{"navds-read-more--open":v}),"data-volume":"low"},g.createElement("button",Object.assign({},u,{ref:r,type:"button",className:m("navds-read-more__button","navds-body-short",{"navds-body-short--small":o==="small"}),onClick:xn(s,()=>c(_=>!_)),"aria-expanded":v,"data-state":v?"open":"closed"}),g.createElement(Qt,{className:m("navds-read-more__expand-icon"),"aria-hidden":!0}),g.createElement("span",null,n)),g.createElement(Xt,{as:"div","aria-hidden":!v,className:m("navds-read-more__content",{"navds-read-more__content--closed":!v}),size:E,"data-state":v?"open":"closed"},a))}),at=p.createContext(null),ir=(e,r)=>{var t,n,a;const{size:l,error:i,errorId:s}=e,o=p.useContext(at),d=Je(),u=(t=e.id)!==null&&t!==void 0?t:`${r}-${d}`,m=s??`${r}-error-${d}`,v=`${r}-description-${d}`,c=o?.disabled||e.disabled,E=(o?.readOnly||e.readOnly)&&!c||void 0,_=!c&&!E&&!!(i||o?.error),y=!c&&!E&&!!i&&typeof i!="boolean",T=Object.assign({},_?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:y,hasError:_,errorId:m,inputDescriptionId:v,size:(n=l??o?.size)!==null&&n!==void 0?n:"medium",readOnly:E,inputProps:Object.assign(Object.assign({id:u},T),{"aria-describedby":gn(e["aria-describedby"],{[v]:e.description&&!lt(e.description),[m]:y,[(a=o?.errorId)!==null&&a!==void 0?a:""]:_&&o?.error})||void 0,disabled:c})}};function lt(e,r=!0){if(g.isValidElement(e)){if(e.type===Qa)return!0;if(e.props.children&&r)return lt(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>lt(t,r));return!1}function ve(e,r,t,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,l])=>[`--__${e}c-${r}-${t}-${a}`,l])):{}}const au={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Cr=(e,r,t,n,a,l)=>r.split(" ").map((i,s,o)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let u=`var(--${l}-${t}-${i})`;if(n.includes(i))u=i==="px"?"1px":i;else if(i.startsWith("space"))u=`var(--${l}-${i})`;else{const m=`--${l}-spacing-${i}`;u=`var(${(d=au[m])!==null&&d!==void 0?d:m})`}return a?i==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function we(e,r,t,n,a,l=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${r}-${t}-xs`]:Cr(t,a,n,i,l,e)};const s={};return Object.entries(a).forEach(([o,d])=>{s[`--__${e}c-${r}-${t}-${o}`]=Cr(t,d,n,i,l,e)}),s}const lu=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],iu=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:a,margin:l,marginInline:i,marginBlock:s,width:o,minWidth:d,maxWidth:u,height:m,minHeight:v,maxHeight:c,position:E,inset:_,top:y,right:T,left:R,bottom:h,overflow:N,overflowX:A,overflowY:G,flexBasis:j,flexGrow:$,flexShrink:q,gridColumn:C})=>{const U=Dn(!1),{cn:w}=X(),S=U?.isDarkside?"ax":"a",k=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},we(S,"r","p","spacing",t)),we(S,"r","pi","spacing",n)),we(S,"r","pb","spacing",a)),we(S,"r","m","spacing",l)),we(S,"r","mi","spacing",i)),we(S,"r","mb","spacing",s)),ve(S,"r","w",o)),ve(S,"r","minw",d)),ve(S,"r","maxw",u)),ve(S,"r","h",m)),ve(S,"r","minh",v)),ve(S,"r","maxh",c)),ve(S,"r","position",E)),we(S,"r","inset","spacing",_)),we(S,"r","top","spacing",y)),we(S,"r","right","spacing",T)),we(S,"r","bottom","spacing",h)),we(S,"r","left","spacing",R)),ve(S,"r","overflow",N)),ve(S,"r","overflowx",A)),ve(S,"r","overflowy",G)),ve(S,"r","flex-basis",j)),ve(S,"r","flex-grow",$)),ve(S,"r","flex-shrink",q)),ve(S,"r","grid-column",C));return g.createElement(mt,{className:w({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":o,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":m,"navds-r-minh":v,"navds-r-maxh":c,"navds-r-position":E,"navds-r-inset":_,"navds-r-top":y,"navds-r-right":T,"navds-r-bottom":h,"navds-r-left":R,"navds-r-overflow":N,"navds-r-overflowx":A,"navds-r-overflowy":G,"navds-r-flex-basis":j,"navds-r-flex-grow":$,"navds-r-flex-shrink":q,"navds-r-grid-column":C}),style:k},e)};var su=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const el=p.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",align:l,justify:i,wrap:s=!0,gap:o,style:d,direction:u="row",asChild:m}=e,v=su(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const c=Dn(!1),E=c?.isDarkside?"ax":"a",{cn:_}=X(),y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),we(E,"stack","gap","spacing",o)),ve(E,"stack","direction",u)),ve(E,"stack","align",l)),ve(E,"stack","justify",i)),T=m?mt:a;return g.createElement(iu,Object.assign({},v),g.createElement(T,Object.assign({},xe(v,lu),{ref:r,style:y,className:_("navds-stack",n,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":o,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":s})}),t))});var ou=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const mn=p.forwardRef((e,r)=>{var{as:t="div"}=e,n=ou(e,["as"]);return g.createElement(el,Object.assign({as:t},n,{ref:r,direction:"row"}))});var uu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ke=p.forwardRef((e,r)=>{var{as:t="div"}=e,n=uu(e,["as"]);return g.createElement(el,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))});var du=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const mu=p.forwardRef((e,r)=>{var{as:t="a",className:n,underline:a=!0,variant:l,inlineText:i=!1,"data-color":s}=e,o=du(e,["as","className","underline","variant","inlineText","data-color"]);const d=Dn(!1),{cn:u}=X();let m;return d?.isDarkside?m=l:m=l??"action",g.createElement(t,Object.assign({"data-color":s??cu(m),"data-variant":m},o,{ref:r,className:u("navds-link",n,{[`navds-link--${m}`]:m,"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});function cu(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var fu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const vu=p.forwardRef((e,r)=>{var{className:t}=e,n=fu(e,["className"]);const{cn:a}=X();return g.createElement("tbody",Object.assign({},n,{ref:r,className:a("navds-table__body",t)}))});var gu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const nl=p.forwardRef((e,r)=>{var{className:t,children:n,align:a,textSize:l}=e,i=gu(e,["className","children","align","textSize"]);const{cn:s}=X();return g.createElement("th",Object.assign({ref:r,className:s("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":l==="small"})},i),n)}),tl=p.createContext(null);var pu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Eu=p.forwardRef((e,r)=>{var t,n,a,l,{className:i,children:s,sortable:o=!1,sortKey:d}=e,u=pu(e,["className","children","sortable","sortKey"]);const m=p.useContext(tl),{cn:v}=X();return o&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),g.createElement(nl,Object.assign({scope:"col",ref:r,className:v(i),"aria-sort":o?((t=m?.sort)===null||t===void 0?void 0:t.orderBy)===d?(n=m?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},u),o?g.createElement("button",{type:"button",className:v("navds-table__sort-button"),onClick:o&&d?()=>{var c;return(c=m?.onSortChange)===null||c===void 0?void 0:c.call(m,d)}:void 0},s,((a=m?.sort)===null||a===void 0?void 0:a.orderBy)===d?((l=m?.sort)===null||l===void 0?void 0:l.direction)==="descending"?g.createElement(_i,{"aria-hidden":!0}):g.createElement(bi,{"aria-hidden":!0}):g.createElement(ti,{"aria-hidden":!0})):s)});var _u=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const rl=p.forwardRef((e,r)=>{var{className:t,children:n="",align:a,textSize:l}=e,i=_u(e,["className","children","align","textSize"]);const{cn:s}=X();return g.createElement(fe,Object.assign({as:"td",ref:r,className:s("navds-table__data-cell",t,{[`navds-table__data-cell--align-${a}`]:a}),size:l},i),n)});var yu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const bu=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Ru(e){const r=parseFloat(e);return!Number.isNaN(r)&&Number.isFinite(r)}function Hr(e){return typeof e=="string"&&e[e.length-1]==="%"&&Ru(e.substring(0,e.length-1))}function wt(e,r){r===0&&e?.style&&(e.style.display="none")}function hu(e,r){r===0&&e?.style&&(e.style.display="")}const Tu=e=>{var{children:r,className:t,innerClassName:n,duration:a=250,easing:l="ease",height:i}=e,s=yu(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=X(),d=p.useRef(i),u=p.useRef(null),m=p.useRef(),v=p.useRef(),c=p.useRef(i),E=p.useRef("visible"),_=bu?0:a;typeof c.current=="number"?(typeof i!="string"&&(c.current=i<0?0:i),E.current="hidden"):Hr(c.current)&&(c.current=i==="0%"?0:i,E.current="hidden");const[y,T]=p.useState(c.current),[R,h]=p.useState(E.current),[N,A]=p.useState(!1);p.useEffect(()=>{wt(u.current,c.current)},[]),p.useEffect(()=>{if(i!==d.current&&u.current){hu(u.current,d.current),u.current.style.overflow="hidden";const q=u.current.offsetHeight;u.current.style.overflow="";const C=_;let U,w,S="hidden",k;const I=d.current==="auto";typeof i=="number"?(U=i<0?0:i,w=U):Hr(i)?(U=i==="0%"?0:i,w=U):(U=q,w="auto",S=void 0),I&&(w=U,U=q),T(U),h("hidden"),A(!I),clearTimeout(v.current),clearTimeout(m.current),I?(k=!0,v.current=setTimeout(()=>{T(w),h(S),A(k)},50),m.current=setTimeout(()=>{A(!1),wt(u.current,w)},C)):v.current=setTimeout(()=>{T(w),h(S),A(!1),i!=="auto"&&wt(u.current,U)},C)}return d.current=i,()=>{clearTimeout(v.current),clearTimeout(m.current)}},[i]);const G={height:y,overflow:R};N&&(G.transition=`height ${_}ms ${l} 0ms`,G.WebkitTransition=G.transition);const $=typeof s["aria-hidden"]<"u"?s["aria-hidden"]:i===0;return g.createElement("div",Object.assign({},s,{className:o(t),style:G}),g.createElement("div",{"aria-hidden":$,className:o(n),ref:u},r))},ku=new Set(["BUTTON","A","INPUT","SELECT","TEXTAREA","DETAILS","SUMMARY","LABEL"]),Su=new Set(["button","link","checkbox","radio","switch","menuitem","option","tab","textbox","combobox","spinbutton","slider"]);function al(e){for(let r=e;r&&r.nodeName!=="TR"&&r.nodeName!=="TH";r=r.parentElement){const t=r.nodeName;if(ku.has(t))return!0;const n=r.getAttribute("role");if(n&&Su.has(n)||r.hasAttribute("tabindex")&&r.getAttribute("tabindex")!=="-1")return!0}return!1}var Ou=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ll=p.forwardRef((e,r)=>{var{className:t,selected:n=!1,shadeOnHover:a=!0,onClick:l,onRowClick:i}=e,s=Ou(e,["className","selected","shadeOnHover","onClick","onRowClick"]);const{cn:o}=X(),d=u=>{i&&(al(u.target)||i(u))};return g.createElement("tr",Object.assign({},s,{ref:r,className:o("navds-table__row",t,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a}),onClick:xn(l,d),"data-interactive":!!i}))});var Nu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Au=p.forwardRef((e,r)=>{var{className:t,children:n,content:a,togglePlacement:l="left",defaultOpen:i=!1,open:s,onOpenChange:o,expansionDisabled:d=!1,expandOnRowClick:u=!1,colSpan:m=999,contentGutter:v,onClick:c}=e,E=Nu(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:_}=X(),[y,T]=Zt({defaultValue:i,value:s,onChange:o}),R=Mn("global"),h=Je(),N=G=>{T(j=>!j),G.stopPropagation()},A=G=>{u&&!d&&!al(G.target)&&N(G)};return g.createElement(g.Fragment,null,g.createElement(ll,Object.assign({},E,{ref:r,className:_("navds-table__expandable-row",t,{"navds-table__expandable-row--open":y,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":u}),onClick:xn(c,A)}),l==="right"&&n,g.createElement(rl,{className:_("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":y}),onClick:d?()=>null:N},!d&&g.createElement("button",{className:_("navds-table__toggle-expand-button"),type:"button","aria-controls":h,"aria-expanded":y,onClick:N},g.createElement(Qt,{className:_("navds-table__expandable-icon"),title:R(y?"showLess":"showMore")}))),l==="left"&&n),g.createElement("tr",{"data-state":y?"open":"closed",className:_("navds-table__expanded-row"),"aria-hidden":!y,id:h},g.createElement("td",{colSpan:m,className:_("navds-table__expanded-row-cell")},g.createElement(Tu,{className:_("navds-table__expanded-row-collapse"),innerClassName:_(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${v??l}`),height:y?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});var Pu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const wu=p.forwardRef((e,r)=>{var{className:t}=e,n=Pu(e,["className"]);const{cn:a}=X();return g.createElement("thead",Object.assign({},n,{ref:r,className:a("navds-table__header",t)}))});var Iu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ce=p.forwardRef((e,r)=>{var{className:t,zebraStripes:n=!1,size:a="medium",onSortChange:l,sort:i,stickyHeader:s=!1}=e,o=Iu(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:d}=X();return g.createElement(tl.Provider,{value:{onSortChange:l,sort:i}},g.createElement("table",Object.assign({},o,{ref:r,className:d("navds-table",`navds-table--${a}`,t,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":s})})))});ce.Header=wu;ce.Body=vu;ce.Row=ll;ce.ColumnHeader=Eu;ce.HeaderCell=nl;ce.DataCell=rl;ce.ExpandableRow=Au;var Fu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Lu=p.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:l="medium",icon:i,"data-color":s}=e,o=Fu(e,["children","className","variant","size","icon","data-color"]);const{cn:d}=X(),u=a?.endsWith("-filled")&&"strong",m=a?.endsWith("-moderate")&&"moderate";return g.createElement(fe,Object.assign({"data-color":s??Du(a),"data-variant":u||m||"outline"},o,{ref:r,as:"span",size:l==="medium"?"medium":"small",className:d("navds-tag",n,`navds-tag--${a}`,`navds-tag--${l}`)}),i&&g.createElement("span",{className:d("navds-tag__icon--left")},i),t)});function Du(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var xu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const il=p.forwardRef((e,r)=>{var{children:t,className:n,arrow:a=!0,placement:l="top",open:i,defaultOpen:s=!1,onOpenChange:o,offset:d,content:u,delay:m=150,id:v,keys:c,maxChar:E=80,describesChild:_=!1}=e,y=xu(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:T}=X(),[R,h]=Zt({defaultValue:s,value:i,onChange:o}),N=p.useRef(null),A=Si(!1),G=A?A.ref.current:void 0,{x:j,y:$,strategy:q,context:C,placement:U,middlewareData:{arrow:{x:w,y:S}={},hide:{referenceHidden:k}={}},refs:I}=Jo({placement:l,open:R,onOpenChange:z=>h(z),middleware:[ao(d??(a?8:4)),lo(),io({padding:5,fallbackPlacements:["bottom","top"]}),so({element:N,padding:5})],whileElementsMounted:A?(z,W,J)=>Fr(z,W,J,{animationFrame:!0}):Fr,strategy:A?"fixed":void 0}),{getReferenceProps:V,getFloatingProps:x}=Zo([Co(C,{handleClose:nu(),restMs:m}),Xo(C),zo(C)]),L=Je(v),F=Na(r,I.setFloating);if(!t||t?.type===g.Fragment||t===g.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;u?.length>E&&R&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const H=_?R?{"aria-describedby":L}:{title:u}:{"aria-label":u};return g.createElement(g.Fragment,null,g.createElement(mt,Object.assign({ref:I.setReference},V(),H,{"aria-keyshortcuts":c?c.join("+"):void 0}),t),g.createElement(ss,{rootElement:G,asChild:!0},R&&g.createElement("div",Object.assign({},x(Object.assign(Object.assign({},y),{ref:F,style:{position:q,top:$??0,left:j??0,visibility:k?"hidden":"visible"},role:"tooltip",id:L,className:T("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":U,"data-state":"open"}),u,c&&g.createElement("span",{className:T("navds-tooltip__keys"),"aria-hidden":!0},c.map(z=>g.createElement(zl,{as:"kbd",key:z,className:T("navds-tooltip__key")},z))),a&&g.createElement("div",{ref:z=>{N.current=z},className:T("navds-tooltip__arrow"),style:{left:w!=null?`${w}px`:"",top:S!=null?`${S}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[U]]:"-3.5px"}}))))}),Vu=(e,r)=>{const t=ir(e,"fieldset");return Object.assign(Object.assign({},t),{inputProps:{"aria-labelledby":e["aria-labelledby"]||gn(r,{[t.inputDescriptionId]:e.description&&!lt(e.description)})}})};var Ku=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ju=p.forwardRef((e,r)=>{var t,n,a;const l=Je(),{inputProps:i,errorId:s,showErrorMsg:o,hasError:d,size:u,readOnly:m,inputDescriptionId:v}=Vu(e,l),{cn:c}=X(),E=p.useContext(at),{children:_,className:y,errorPropagation:T=!0,legend:R,description:h,hideLegend:N,nativeReadOnly:A=!0}=e,G=Ku(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return g.createElement(at.Provider,{value:{error:T?(t=e.error)!==null&&t!==void 0?t:E?.error:void 0,errorId:gn({[s]:o,[(n=E?.errorId)!==null&&n!==void 0?n:""]:!!E?.error}),size:u,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:m}},g.createElement("fieldset",Object.assign({},xe(G,["errorId","error","size","readOnly"]),i,{ref:r,className:c(y,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":m})}),g.createElement(_n,{id:l,size:u,as:"legend",className:c("navds-fieldset__legend",{"navds-sr-only":!!N})},m&&(A?g.createElement(Za,null):g.createElement(tu,null)),R),!!h&&g.createElement(fe,{className:c("navds-fieldset__description",{"navds-sr-only":!!N}),id:v,size:u??"medium",as:"div"},e.description),_,g.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:c("navds-fieldset__error")},o&&g.createElement(La,{size:u,showIcon:!0},e.error))))});var Mu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const sl=g.createContext(null),Gu=p.forwardRef((e,r)=>{var t,n,{children:a,className:l,name:i,defaultValue:s,value:o,onChange:d=()=>{},required:u,readOnly:m}=e,v=Mu(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:c}=X(),E=p.useContext(at),_=Je();return g.createElement(ju,Object.assign({},v,{readOnly:m,ref:r,className:c(l,"navds-radio-group",`navds-radio-group--${(n=(t=v.size)!==null&&t!==void 0?t:E?.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),g.createElement(sl.Provider,{value:{name:i??`radioGroupName-${_}`,defaultValue:s,value:o,onChange:d,required:u}},g.createElement("div",{className:c("navds-radio-buttons")},a)))});var Bu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const qu=e=>{const r=p.useContext(sl),t=ir(xe(e,["description"]),"radio"),{inputProps:n,readOnly:a}=t,l=Bu(t,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:r?.name,defaultChecked:r?.defaultValue===void 0?void 0:r?.defaultValue===e.value,checked:r?.value===void 0?void 0:r?.value===e.value,onChange:i=>{var s,o;a||((s=e.onChange)===null||s===void 0||s.call(e,i),(o=r?.onChange)===null||o===void 0||o.call(r,e.value))},onClick:i=>{var s;if(a){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:r?.required,type:"radio"})})},It=p.forwardRef((e,r)=>{const{cn:t}=X(),{inputProps:n,size:a,hasError:l,readOnly:i}=qu(e),s=Je(),o=Dn(!1);return o?.isDarkside?g.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":l,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},g.createElement("input",Object.assign({},xe(e,["children","size","description","readOnly"]),xe(n,["aria-invalid","aria-describedby"]),{"aria-describedby":gn(n["aria-describedby"],{[s]:e.description})||void 0,className:t("navds-radio__input"),ref:r})),g.createElement(fe,{as:"label",htmlFor:n.id,className:t("navds-radio__label"),size:a},e.children),e.description&&g.createElement(fe,{id:s,size:a,className:t("navds-form-field__subdescription navds-radio__description")},e.description)):g.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":l,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},g.createElement("input",Object.assign({},xe(e,["children","size","description","readOnly"]),xe(n,["aria-invalid"]),{className:t("navds-radio__input"),ref:r})),g.createElement("label",{htmlFor:n.id,className:t("navds-radio__label")},g.createElement("span",{className:t("navds-radio__content")},g.createElement(fe,{as:"span",size:a},e.children),e.description&&g.createElement(fe,{as:"span",size:a,className:t("navds-form-field__subdescription navds-radio__description")},e.description))))});var Uu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const $r=(e,r,t)=>{const{outerHeightStyle:n,overflow:a}=r;return t.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(t.current+=1,r):e},Yr=e=>(e?.ownerDocument||document).defaultView||window;function $n(e){return parseInt(e,10)||0}const Cu=p.forwardRef((e,r)=>{var t,n,{className:a,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:o,style:d,value:u}=e,m=Uu(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:v}=p.useRef(u!=null),c=p.useRef(null),E=Na(c,r),_=p.useRef(null),y=p.useRef(0),[T,R]=p.useState({outerHeightStyle:0}),h=g.useCallback(()=>{const j=c.current,q=Yr(j).getComputedStyle(j);if(q.width==="0px")return{outerHeightStyle:0};const C=_.current;C.style.width=q.width,C.value=j.value||m.placeholder||"x",C.value.slice(-1)===`
`&&(C.value+=" ");const U=q.boxSizing,w=$n(q.paddingBottom)+$n(q.paddingTop),S=$n(q.borderBottomWidth)+$n(q.borderTopWidth),k=C.scrollHeight-w;C.value="x";const I=C.scrollHeight-w;let V=k;s&&(V=Math.max(Number(s)*I,V)),i&&(V=Math.min(Number(i)*I,V)),V=Math.max(V,I);const x=V+(U==="border-box"?w+S:0),L=Math.abs(V-k)<=1;return{outerHeightStyle:x,overflow:L}},[i,s,m.placeholder]),N=()=>{const j=h();zr(j)||R($=>$r($,j,y))};br(()=>{const j=()=>{const w=h();zr(w)||jt.flushSync(()=>{R(S=>$r(S,w,y))})},$=xa(()=>{var w,S,k;if(y.current=0,!((w=c.current)===null||w===void 0)&&w.style.height||!((S=c.current)===null||S===void 0)&&S.style.width){((k=c.current)===null||k===void 0?void 0:k.style.overflow)==="hidden"&&R(I=>Object.assign(Object.assign({},I),{overflow:!1}));return}j()},166,!0),q=c.current,C=Yr(q);C.addEventListener("resize",$);let U;return typeof ResizeObserver<"u"&&(U=new ResizeObserver($),U.observe(q)),()=>{$.clear(),C.removeEventListener("resize",$),U&&U.disconnect()}},[h]),br(()=>{N()}),p.useEffect(()=>{y.current=0},[u]);const A=j=>{y.current=0,v||N(),l&&l(j)},G=Object.assign({"--__ac-textarea-height":T.outerHeightStyle+"px","--__axc-textarea-height":T.outerHeightStyle+"px",overflow:T.overflow&&!o&&!(!((t=c.current)===null||t===void 0)&&t.style.height)&&!(!((n=c.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},d);return g.createElement(g.Fragment,null,g.createElement("textarea",Object.assign({value:u,onChange:A,ref:E,rows:s,style:G},m,{className:a})),g.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:_,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function zr(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Hu=({maxLengthId:e,maxLength:r,currentLength:t,size:n,i18n:a})=>{const{cn:l}=X(),i=Mn("Textarea",{charsLeft:a?.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a?.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),s=r-t,[o,d]=p.useState(s);return p.useEffect(()=>{const u=xa(()=>{d(s)},2e3);return u(),()=>{u.clear()}},[s]),g.createElement(g.Fragment,null,g.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:r})),s<20&&g.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},Wr(o,i)),g.createElement(fe,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:n},Wr(s,i)))},Wr=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var $u=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Yu=p.forwardRef((e,r)=>{var t,n,a;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:o,size:d,inputDescriptionId:u}=ir(e,"textarea"),{label:m,className:v,description:c,maxLength:E,hideLabel:_=!1,resize:y,UNSAFE_autoScrollbar:T,i18n:R,readOnly:h}=e,N=$u(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:A}=X(),G=Je(),j=E!==void 0&&E>0,[$,q]=p.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),C=()=>{let w=N?.minRows?N?.minRows:3;return d==="small"&&(w=N?.minRows?N?.minRows:2),w},U=gn(l["aria-describedby"],{[G??""]:j});return g.createElement("div",{className:A(v,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":h,"navds-textarea--readonly":h,"navds-textarea--error":o,"navds-textarea--autoscrollbar":T,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},g.createElement(_n,{htmlFor:l.id,size:d,className:A("navds-form-field__label",{"navds-sr-only":_})},h&&g.createElement(Za,null),m),!!c&&g.createElement(fe,{className:A("navds-form-field__description",{"navds-sr-only":_}),id:u,size:d,as:"div"},c),g.createElement(Cu,Object.assign({},xe(N,["error","errorId","size"]),l,{onChange:xn(e.onChange,e.value===void 0?w=>q(w.target.value):void 0),minRows:C(),autoScrollbar:T,ref:r,readOnly:h,className:A("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},U?{"aria-describedby":U}:{})),j&&!h&&!l.disabled&&g.createElement(Hu,{maxLengthId:G,maxLength:E,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:$.length,size:d,i18n:R}),g.createElement("div",{className:A("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&g.createElement(La,{size:d,showIcon:!0},e.error)))});var Gn=e=>e.type==="checkbox",Qe=e=>e instanceof Date,ye=e=>e==null;const ol=e=>typeof e=="object";var ue=e=>!ye(e)&&!Array.isArray(e)&&ol(e)&&!Qe(e),ul=e=>ue(e)&&e.target?Gn(e.target)?e.target.checked:e.target.value:e,zu=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,dl=(e,r)=>e.has(zu(r)),Wu=e=>{const r=e.constructor&&e.constructor.prototype;return ue(r)&&r.hasOwnProperty("isPrototypeOf")},sr=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function me(e){let r;const t=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(sr&&(e instanceof Blob||n))&&(t||ue(e)))if(r=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!Wu(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=me(e[a]));else return e;return r}var Et=e=>/^\w*$/.test(e),ie=e=>e===void 0,or=e=>Array.isArray(e)?e.filter(Boolean):[],ur=e=>or(e.replace(/["|']|\]/g,"").split(/\.|\[/)),M=(e,r,t)=>{if(!r||!ue(e))return t;const n=(Et(r)?[r]:ur(r)).reduce((a,l)=>ye(a)?a:a[l],e);return ie(n)||n===e?ie(e[r])?t:e[r]:n},Te=e=>typeof e=="boolean",ne=(e,r,t)=>{let n=-1;const a=Et(r)?[r]:ur(r),l=a.length,i=l-1;for(;++n<l;){const s=a[n];let o=t;if(n!==i){const d=e[s];o=ue(d)||Array.isArray(d)?d:isNaN(+a[n+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=o,e=e[s]}};const it={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Le={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Be={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},dr=g.createContext(null);dr.displayName="HookFormContext";const rn=()=>g.useContext(dr),Ju=e=>{const{children:r,...t}=e;return g.createElement(dr.Provider,{value:t},r)};var ml=(e,r,t,n=!0)=>{const a={defaultValues:r._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const i=l;return r._proxyFormState[i]!==Le.all&&(r._proxyFormState[i]=!n||Le.all),t&&(t[i]=!0),e[i]}});return a};const mr=typeof window<"u"?g.useLayoutEffect:g.useEffect;function Xu(e){const r=rn(),{control:t=r.control,disabled:n,name:a,exact:l}=e||{},[i,s]=g.useState(t._formState),o=g.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return mr(()=>t._subscribe({name:a,formState:o.current,exact:l,callback:d=>{!n&&s({...t._formState,...d})}}),[a,n,l]),g.useEffect(()=>{o.current.isValid&&t._setValid(!0)},[t]),g.useMemo(()=>ml(i,t,o.current,!1),[i,t])}var ke=e=>typeof e=="string",cl=(e,r,t,n,a)=>ke(e)?(n&&r.watch.add(e),M(t,e,a)):Array.isArray(e)?e.map(l=>(n&&r.watch.add(l),M(t,l))):(n&&(r.watchAll=!0),t),Ut=e=>ye(e)||!ol(e);function Ue(e,r,t=new WeakSet){if(Ut(e)||Ut(r))return e===r;if(Qe(e)&&Qe(r))return e.getTime()===r.getTime();const n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;if(t.has(e)||t.has(r))return!0;t.add(e),t.add(r);for(const l of n){const i=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const s=r[l];if(Qe(i)&&Qe(s)||ue(i)&&ue(s)||Array.isArray(i)&&Array.isArray(s)?!Ue(i,s,t):i!==s)return!1}}return!0}function Zu(e){const r=rn(),{control:t=r.control,name:n,defaultValue:a,disabled:l,exact:i,compute:s}=e||{},o=g.useRef(a),d=g.useRef(s),u=g.useRef(void 0);d.current=s;const m=g.useMemo(()=>t._getWatch(n,o.current),[t,n]),[v,c]=g.useState(d.current?d.current(m):m);return mr(()=>t._subscribe({name:n,formState:{values:!0},exact:i,callback:E=>{if(!l){const _=cl(n,t._names,E.values||t._formValues,!1,o.current);if(d.current){const y=d.current(_);Ue(y,u.current)||(c(y),u.current=y)}else c(_)}}}),[t,l,n,i]),g.useEffect(()=>t._removeUnmounted()),v}function fl(e){const r=rn(),{name:t,disabled:n,control:a=r.control,shouldUnregister:l,defaultValue:i}=e,s=dl(a._names.array,t),o=g.useMemo(()=>M(a._formValues,t,M(a._defaultValues,t,i)),[a,t,i]),d=Zu({control:a,name:t,defaultValue:o,exact:!0}),u=Xu({control:a,name:t,exact:!0}),m=g.useRef(e),v=g.useRef(void 0),c=g.useRef(a.register(t,{...e.rules,value:d,...Te(e.disabled)?{disabled:e.disabled}:{}}));m.current=e;const E=g.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!M(u.errors,t)},isDirty:{enumerable:!0,get:()=>!!M(u.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!M(u.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!M(u.validatingFields,t)},error:{enumerable:!0,get:()=>M(u.errors,t)}}),[u,t]),_=g.useCallback(h=>c.current.onChange({target:{value:ul(h),name:t},type:it.CHANGE}),[t]),y=g.useCallback(()=>c.current.onBlur({target:{value:M(a._formValues,t),name:t},type:it.BLUR}),[t,a._formValues]),T=g.useCallback(h=>{const N=M(a._fields,t);N&&h&&(N._f.ref={focus:()=>h.focus&&h.focus(),select:()=>h.select&&h.select(),setCustomValidity:A=>h.setCustomValidity(A),reportValidity:()=>h.reportValidity()})},[a._fields,t]),R=g.useMemo(()=>({name:t,value:d,...Te(n)||u.disabled?{disabled:u.disabled||n}:{},onChange:_,onBlur:y,ref:T}),[t,n,u.disabled,_,y,T,d]);return g.useEffect(()=>{const h=a._options.shouldUnregister||l,N=v.current;N&&N!==t&&!s&&a.unregister(N),a.register(t,{...m.current.rules,...Te(m.current.disabled)?{disabled:m.current.disabled}:{}});const A=(G,j)=>{const $=M(a._fields,G);$&&$._f&&($._f.mount=j)};if(A(t,!0),h){const G=me(M(a._options.defaultValues,t));ne(a._defaultValues,t,G),ie(M(a._formValues,t))&&ne(a._formValues,t,G)}return!s&&a.register(t),v.current=t,()=>{(s?h&&!a._state.action:h)?a.unregister(t):A(t,!1)}},[t,a,s,l]),g.useEffect(()=>{a._setDisabledField({disabled:n,name:t})},[n,t,a]),g.useMemo(()=>({field:R,formState:u,fieldState:E}),[R,u,E])}var Qu=(e,r,t,n,a)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:a||!0}}:{},wn=e=>Array.isArray(e)?e:[e],Jr=()=>{let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}};function vl(e,r){const t={};for(const n in e)if(e.hasOwnProperty(n)){const a=e[n],l=r[n];if(a&&ue(a)&&l){const i=vl(a,l);ue(i)&&(t[n]=i)}else e[n]&&(t[n]=l)}return t}var Re=e=>ue(e)&&!Object.keys(e).length,cr=e=>e.type==="file",De=e=>typeof e=="function",st=e=>{if(!sr)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},gl=e=>e.type==="select-multiple",fr=e=>e.type==="radio",ed=e=>fr(e)||Gn(e),Ft=e=>st(e)&&e.isConnected;function nd(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=ie(e)?n++:e[r[n++]];return e}function td(e){for(const r in e)if(e.hasOwnProperty(r)&&!ie(e[r]))return!1;return!0}function oe(e,r){const t=Array.isArray(r)?r:Et(r)?[r]:ur(r),n=t.length===1?e:nd(e,t),a=t.length-1,l=t[a];return n&&delete n[l],a!==0&&(ue(n)&&Re(n)||Array.isArray(n)&&td(n))&&oe(e,t.slice(0,-1)),e}var rd=e=>{for(const r in e)if(De(e[r]))return!0;return!1};function pl(e){return Array.isArray(e)||ue(e)&&!rd(e)}function Ct(e,r={}){for(const t in e)pl(e[t])?(r[t]=Array.isArray(e[t])?[]:{},Ct(e[t],r[t])):ye(e[t])||(r[t]=!0);return r}function on(e,r,t){t||(t=Ct(r));for(const n in e)pl(e[n])?ie(r)||Ut(t[n])?t[n]=Ct(e[n],Array.isArray(e[n])?[]:{}):on(e[n],ye(r)?{}:r[n],t[n]):t[n]=!Ue(e[n],r[n]);return t}const Xr={value:!1,isValid:!1},Zr={value:!0,isValid:!0};var El=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ie(e[0].attributes.value)?ie(e[0].value)||e[0].value===""?Zr:{value:e[0].value,isValid:!0}:Zr:Xr}return Xr},_l=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>ie(e)?e:r?e===""?NaN:e&&+e:t&&ke(e)?new Date(e):n?n(e):e;const Qr={isValid:!1,value:null};var yl=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,Qr):Qr;function ea(e){const r=e.ref;return cr(r)?r.files:fr(r)?yl(e.refs).value:gl(r)?[...r.selectedOptions].map(({value:t})=>t):Gn(r)?El(e.refs).value:_l(ie(r.value)?e.ref.value:r.value,e)}var ad=(e,r,t,n)=>{const a={};for(const l of e){const i=M(r,l);i&&ne(a,l,i._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:n}},ot=e=>e instanceof RegExp,On=e=>ie(e)?e:ot(e)?e.source:ue(e)?ot(e.value)?e.value.source:e.value:e,na=e=>({isOnSubmit:!e||e===Le.onSubmit,isOnBlur:e===Le.onBlur,isOnChange:e===Le.onChange,isOnAll:e===Le.all,isOnTouch:e===Le.onTouched});const ta="AsyncFunction";var ld=e=>!!e&&!!e.validate&&!!(De(e.validate)&&e.validate.constructor.name===ta||ue(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===ta)),id=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ra=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const In=(e,r,t,n)=>{for(const a of t||Object.keys(e)){const l=M(e,a);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],a)&&!n)return!0;if(i.ref&&r(i.ref,i.name)&&!n)return!0;if(In(s,r))break}else if(ue(s)&&In(s,r))break}}};function aa(e,r,t){const n=M(e,t);if(n||Et(t))return{error:n,name:t};const a=t.split(".");for(;a.length;){const l=a.join("."),i=M(r,l),s=M(e,l);if(i&&!Array.isArray(i)&&t!==l)return{name:t};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};a.pop()}return{name:t}}var sd=(e,r,t,n)=>{t(e);const{name:a,...l}=e;return Re(l)||Object.keys(l).length>=Object.keys(r).length||Object.keys(l).find(i=>r[i]===(!n||Le.all))},od=(e,r,t)=>!e||!r||e===r||wn(e).some(n=>n&&(t?n===r:n.startsWith(r)||r.startsWith(n))),ud=(e,r,t,n,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(r||e):(t?n.isOnBlur:a.isOnBlur)?!e:(t?n.isOnChange:a.isOnChange)?e:!0,dd=(e,r)=>!or(M(e,r)).length&&oe(e,r),md=(e,r,t)=>{const n=wn(M(e,t));return ne(n,"root",r[t]),ne(e,t,n),e};function la(e,r,t="validate"){if(ke(e)||Array.isArray(e)&&e.every(ke)||Te(e)&&!e)return{type:t,message:ke(e)?e:"",ref:r}}var ln=e=>ue(e)&&!ot(e)?e:{value:e,message:""},ia=async(e,r,t,n,a,l)=>{const{ref:i,refs:s,required:o,maxLength:d,minLength:u,min:m,max:v,pattern:c,validate:E,name:_,valueAsNumber:y,mount:T}=e._f,R=M(t,_);if(!T||r.has(_))return{};const h=s?s[0]:i,N=w=>{a&&h.reportValidity&&(h.setCustomValidity(Te(w)?"":w||""),h.reportValidity())},A={},G=fr(i),j=Gn(i),$=G||j,q=(y||cr(i))&&ie(i.value)&&ie(R)||st(i)&&i.value===""||R===""||Array.isArray(R)&&!R.length,C=Qu.bind(null,_,n,A),U=(w,S,k,I=Be.maxLength,V=Be.minLength)=>{const x=w?S:k;A[_]={type:w?I:V,message:x,ref:i,...C(w?I:V,x)}};if(l?!Array.isArray(R)||!R.length:o&&(!$&&(q||ye(R))||Te(R)&&!R||j&&!El(s).isValid||G&&!yl(s).isValid)){const{value:w,message:S}=ke(o)?{value:!!o,message:o}:ln(o);if(w&&(A[_]={type:Be.required,message:S,ref:h,...C(Be.required,S)},!n))return N(S),A}if(!q&&(!ye(m)||!ye(v))){let w,S;const k=ln(v),I=ln(m);if(!ye(R)&&!isNaN(R)){const V=i.valueAsNumber||R&&+R;ye(k.value)||(w=V>k.value),ye(I.value)||(S=V<I.value)}else{const V=i.valueAsDate||new Date(R),x=H=>new Date(new Date().toDateString()+" "+H),L=i.type=="time",F=i.type=="week";ke(k.value)&&R&&(w=L?x(R)>x(k.value):F?R>k.value:V>new Date(k.value)),ke(I.value)&&R&&(S=L?x(R)<x(I.value):F?R<I.value:V<new Date(I.value))}if((w||S)&&(U(!!w,k.message,I.message,Be.max,Be.min),!n))return N(A[_].message),A}if((d||u)&&!q&&(ke(R)||l&&Array.isArray(R))){const w=ln(d),S=ln(u),k=!ye(w.value)&&R.length>+w.value,I=!ye(S.value)&&R.length<+S.value;if((k||I)&&(U(k,w.message,S.message),!n))return N(A[_].message),A}if(c&&!q&&ke(R)){const{value:w,message:S}=ln(c);if(ot(w)&&!R.match(w)&&(A[_]={type:Be.pattern,message:S,ref:i,...C(Be.pattern,S)},!n))return N(S),A}if(E){if(De(E)){const w=await E(R,t),S=la(w,h);if(S&&(A[_]={...S,...C(Be.validate,S.message)},!n))return N(S.message),A}else if(ue(E)){let w={};for(const S in E){if(!Re(w)&&!n)break;const k=la(await E[S](R,t),h,S);k&&(w={...k,...C(S,k.message)},N(k.message),n&&(A[_]=w))}if(!Re(w)&&(A[_]={ref:h,...w},!n))return A}}return N(!0),A};const cd={mode:Le.onSubmit,reValidateMode:Le.onChange,shouldFocusError:!0};function fd(e={}){let r={...cd,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:De(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},a=ue(r.defaultValues)||ue(r.values)?me(r.defaultValues||r.values)||{}:{},l=r.shouldUnregister?{}:me(a),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},o,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let m={...u};const v={array:Jr(),state:Jr()},c=r.criteriaMode===Le.all,E=f=>b=>{clearTimeout(d),d=setTimeout(f,b)},_=async f=>{if(!r.disabled&&(u.isValid||m.isValid||f)){const b=r.resolver?Re((await j()).errors):await q(n,!0);b!==t.isValid&&v.state.next({isValid:b})}},y=(f,b)=>{!r.disabled&&(u.isValidating||u.validatingFields||m.isValidating||m.validatingFields)&&((f||Array.from(s.mount)).forEach(O=>{O&&(b?ne(t.validatingFields,O,b):oe(t.validatingFields,O))}),v.state.next({validatingFields:t.validatingFields,isValidating:!Re(t.validatingFields)}))},T=(f,b=[],O,B,K=!0,D=!0)=>{if(B&&O&&!r.disabled){if(i.action=!0,D&&Array.isArray(M(n,f))){const Y=O(M(n,f),B.argA,B.argB);K&&ne(n,f,Y)}if(D&&Array.isArray(M(t.errors,f))){const Y=O(M(t.errors,f),B.argA,B.argB);K&&ne(t.errors,f,Y),dd(t.errors,f)}if((u.touchedFields||m.touchedFields)&&D&&Array.isArray(M(t.touchedFields,f))){const Y=O(M(t.touchedFields,f),B.argA,B.argB);K&&ne(t.touchedFields,f,Y)}(u.dirtyFields||m.dirtyFields)&&(t.dirtyFields=on(a,l)),v.state.next({name:f,isDirty:U(f,b),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else ne(l,f,b)},R=(f,b)=>{ne(t.errors,f,b),v.state.next({errors:t.errors})},h=f=>{t.errors=f,v.state.next({errors:t.errors,isValid:!1})},N=(f,b,O,B)=>{const K=M(n,f);if(K){const D=M(l,f,ie(O)?M(a,f):O);ie(D)||B&&B.defaultChecked||b?ne(l,f,b?D:ea(K._f)):k(f,D),i.mount&&_()}},A=(f,b,O,B,K)=>{let D=!1,Y=!1;const Q={name:f};if(!r.disabled){if(!O||B){(u.isDirty||m.isDirty)&&(Y=t.isDirty,t.isDirty=Q.isDirty=U(),D=Y!==Q.isDirty);const ee=Ue(M(a,f),b);Y=!!M(t.dirtyFields,f),ee?oe(t.dirtyFields,f):ne(t.dirtyFields,f,!0),Q.dirtyFields=t.dirtyFields,D=D||(u.dirtyFields||m.dirtyFields)&&Y!==!ee}if(O){const ee=M(t.touchedFields,f);ee||(ne(t.touchedFields,f,O),Q.touchedFields=t.touchedFields,D=D||(u.touchedFields||m.touchedFields)&&ee!==O)}D&&K&&v.state.next(Q)}return D?Q:{}},G=(f,b,O,B)=>{const K=M(t.errors,f),D=(u.isValid||m.isValid)&&Te(b)&&t.isValid!==b;if(r.delayError&&O?(o=E(()=>R(f,O)),o(r.delayError)):(clearTimeout(d),o=null,O?ne(t.errors,f,O):oe(t.errors,f)),(O?!Ue(K,O):K)||!Re(B)||D){const Y={...B,...D&&Te(b)?{isValid:b}:{},errors:t.errors,name:f};t={...t,...Y},v.state.next(Y)}},j=async f=>{y(f,!0);const b=await r.resolver(l,r.context,ad(f||s.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return y(f),b},$=async f=>{const{errors:b}=await j(f);if(f)for(const O of f){const B=M(b,O);B?ne(t.errors,O,B):oe(t.errors,O)}else t.errors=b;return b},q=async(f,b,O={valid:!0})=>{for(const B in f){const K=f[B];if(K){const{_f:D,...Y}=K;if(D){const Q=s.array.has(D.name),ee=K._f&&ld(K._f);ee&&u.validatingFields&&y([D.name],!0);const Ae=await ia(K,s.disabled,l,c,r.shouldUseNativeValidation&&!b,Q);if(ee&&u.validatingFields&&y([D.name]),Ae[D.name]&&(O.valid=!1,b))break;!b&&(M(Ae,D.name)?Q?md(t.errors,Ae,D.name):ne(t.errors,D.name,Ae[D.name]):oe(t.errors,D.name))}!Re(Y)&&await q(Y,b,O)}}return O.valid},C=()=>{for(const f of s.unMount){const b=M(n,f);b&&(b._f.refs?b._f.refs.every(O=>!Ft(O)):!Ft(b._f.ref))&&le(f)}s.unMount=new Set},U=(f,b)=>!r.disabled&&(f&&b&&ne(l,f,b),!Ue(H(),a)),w=(f,b,O)=>cl(f,s,{...i.mount?l:ie(b)?a:ke(f)?{[f]:b}:b},O,b),S=f=>or(M(i.mount?l:a,f,r.shouldUnregister?M(a,f,[]):[])),k=(f,b,O={})=>{const B=M(n,f);let K=b;if(B){const D=B._f;D&&(!D.disabled&&ne(l,f,_l(b,D)),K=st(D.ref)&&ye(b)?"":b,gl(D.ref)?[...D.ref.options].forEach(Y=>Y.selected=K.includes(Y.value)):D.refs?Gn(D.ref)?D.refs.forEach(Y=>{(!Y.defaultChecked||!Y.disabled)&&(Array.isArray(K)?Y.checked=!!K.find(Q=>Q===Y.value):Y.checked=K===Y.value||!!K)}):D.refs.forEach(Y=>Y.checked=Y.value===K):cr(D.ref)?D.ref.value="":(D.ref.value=K,D.ref.type||v.state.next({name:f,values:me(l)})))}(O.shouldDirty||O.shouldTouch)&&A(f,K,O.shouldTouch,O.shouldDirty,!0),O.shouldValidate&&F(f)},I=(f,b,O)=>{for(const B in b){if(!b.hasOwnProperty(B))return;const K=b[B],D=f+"."+B,Y=M(n,D);(s.array.has(f)||ue(K)||Y&&!Y._f)&&!Qe(K)?I(D,K,O):k(D,K,O)}},V=(f,b,O={})=>{const B=M(n,f),K=s.array.has(f),D=me(b);ne(l,f,D),K?(v.array.next({name:f,values:me(l)}),(u.isDirty||u.dirtyFields||m.isDirty||m.dirtyFields)&&O.shouldDirty&&v.state.next({name:f,dirtyFields:on(a,l),isDirty:U(f,D)})):B&&!B._f&&!ye(D)?I(f,D,O):k(f,D,O),ra(f,s)&&v.state.next({...t,name:f}),v.state.next({name:i.mount?f:void 0,values:me(l)})},x=async f=>{i.mount=!0;const b=f.target;let O=b.name,B=!0;const K=M(n,O),D=ee=>{B=Number.isNaN(ee)||Qe(ee)&&isNaN(ee.getTime())||Ue(ee,M(l,O,ee))},Y=na(r.mode),Q=na(r.reValidateMode);if(K){let ee,Ae;const Un=b.type?ea(K._f):ul(f),Ye=f.type===it.BLUR||f.type===it.FOCUS_OUT,Pl=!id(K._f)&&!r.resolver&&!M(t.errors,O)&&!K._f.deps||ud(Ye,M(t.touchedFields,O),t.isSubmitted,Q,Y),_t=ra(O,s,Ye);ne(l,O,Un),Ye?(!b||!b.readOnly)&&(K._f.onBlur&&K._f.onBlur(f),o&&o(0)):K._f.onChange&&K._f.onChange(f);const yt=A(O,Un,Ye),wl=!Re(yt)||_t;if(!Ye&&v.state.next({name:O,type:f.type,values:me(l)}),Pl)return(u.isValid||m.isValid)&&(r.mode==="onBlur"?Ye&&_():Ye||_()),wl&&v.state.next({name:O,..._t?{}:yt});if(!Ye&&_t&&v.state.next({...t}),r.resolver){const{errors:pr}=await j([O]);if(D(Un),B){const Il=aa(t.errors,n,O),Er=aa(pr,n,Il.name||O);ee=Er.error,O=Er.name,Ae=Re(pr)}}else y([O],!0),ee=(await ia(K,s.disabled,l,c,r.shouldUseNativeValidation))[O],y([O]),D(Un),B&&(ee?Ae=!1:(u.isValid||m.isValid)&&(Ae=await q(n,!0)));B&&(K._f.deps&&(!Array.isArray(K._f.deps)||K._f.deps.length>0)&&F(K._f.deps),G(O,Ae,ee,yt))}},L=(f,b)=>{if(M(t.errors,b)&&f.focus)return f.focus(),1},F=async(f,b={})=>{let O,B;const K=wn(f);if(r.resolver){const D=await $(ie(f)?f:K);O=Re(D),B=f?!K.some(Y=>M(D,Y)):O}else f?(B=(await Promise.all(K.map(async D=>{const Y=M(n,D);return await q(Y&&Y._f?{[D]:Y}:Y)}))).every(Boolean),!(!B&&!t.isValid)&&_()):B=O=await q(n);return v.state.next({...!ke(f)||(u.isValid||m.isValid)&&O!==t.isValid?{}:{name:f},...r.resolver||!f?{isValid:O}:{},errors:t.errors}),b.shouldFocus&&!B&&In(n,L,f?K:s.mount),B},H=(f,b)=>{let O={...i.mount?l:a};return b&&(O=vl(b.dirtyFields?t.dirtyFields:t.touchedFields,O)),ie(f)?O:ke(f)?M(O,f):f.map(B=>M(O,B))},z=(f,b)=>({invalid:!!M((b||t).errors,f),isDirty:!!M((b||t).dirtyFields,f),error:M((b||t).errors,f),isValidating:!!M(t.validatingFields,f),isTouched:!!M((b||t).touchedFields,f)}),W=f=>{f&&wn(f).forEach(b=>oe(t.errors,b)),v.state.next({errors:f?t.errors:{}})},J=(f,b,O)=>{const B=(M(n,f,{_f:{}})._f||{}).ref,K=M(t.errors,f)||{},{ref:D,message:Y,type:Q,...ee}=K;ne(t.errors,f,{...ee,...b,ref:B}),v.state.next({name:f,errors:t.errors,isValid:!1}),O&&O.shouldFocus&&B&&B.focus&&B.focus()},Fe=(f,b)=>De(f)?v.state.subscribe({next:O=>"values"in O&&f(w(void 0,b),O)}):w(f,b,!0),ge=f=>v.state.subscribe({next:b=>{od(f.name,b.name,f.exact)&&sd(b,f.formState||u,Tn,f.reRenderRoot)&&f.callback({values:{...l},...t,...b,defaultValues:a})}}).unsubscribe,de=f=>(i.mount=!0,m={...m,...f.formState},ge({...f,formState:m})),le=(f,b={})=>{for(const O of f?wn(f):s.mount)s.mount.delete(O),s.array.delete(O),b.keepValue||(oe(n,O),oe(l,O)),!b.keepError&&oe(t.errors,O),!b.keepDirty&&oe(t.dirtyFields,O),!b.keepTouched&&oe(t.touchedFields,O),!b.keepIsValidating&&oe(t.validatingFields,O),!r.shouldUnregister&&!b.keepDefaultValue&&oe(a,O);v.state.next({values:me(l)}),v.state.next({...t,...b.keepDirty?{isDirty:U()}:{}}),!b.keepIsValid&&_()},Z=({disabled:f,name:b})=>{(Te(f)&&i.mount||f||s.disabled.has(b))&&(f?s.disabled.add(b):s.disabled.delete(b))},re=(f,b={})=>{let O=M(n,f);const B=Te(b.disabled)||Te(r.disabled);return ne(n,f,{...O||{},_f:{...O&&O._f?O._f:{ref:{name:f}},name:f,mount:!0,...b}}),s.mount.add(f),O?Z({disabled:Te(b.disabled)?b.disabled:r.disabled,name:f}):N(f,!0,b.value),{...B?{disabled:b.disabled||r.disabled}:{},...r.progressive?{required:!!b.required,min:On(b.min),max:On(b.max),minLength:On(b.minLength),maxLength:On(b.maxLength),pattern:On(b.pattern)}:{},name:f,onChange:x,onBlur:x,ref:K=>{if(K){re(f,b),O=M(n,f);const D=ie(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,Y=ed(D),Q=O._f.refs||[];if(Y?Q.find(ee=>ee===D):D===O._f.ref)return;ne(n,f,{_f:{...O._f,...Y?{refs:[...Q.filter(Ft),D,...Array.isArray(M(a,f))?[{}]:[]],ref:{type:D.type,name:f}}:{ref:D}}}),N(f,!1,void 0,D)}else O=M(n,f,{}),O._f&&(O._f.mount=!1),(r.shouldUnregister||b.shouldUnregister)&&!(dl(s.array,f)&&i.action)&&s.unMount.add(f)}}},pe=()=>r.shouldFocusError&&In(n,L,s.mount),Ee=f=>{Te(f)&&(v.state.next({disabled:f}),In(n,(b,O)=>{const B=M(n,O);B&&(b.disabled=B._f.disabled||f,Array.isArray(B._f.refs)&&B._f.refs.forEach(K=>{K.disabled=B._f.disabled||f}))},0,!1))},_e=(f,b)=>async O=>{let B;O&&(O.preventDefault&&O.preventDefault(),O.persist&&O.persist());let K=me(l);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:D,values:Y}=await j();t.errors=D,K=me(Y)}else await q(n);if(s.disabled.size)for(const D of s.disabled)oe(K,D);if(oe(t.errors,"root"),Re(t.errors)){v.state.next({errors:{}});try{await f(K,O)}catch(D){B=D}}else b&&await b({...t.errors},O),pe(),setTimeout(pe);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Re(t.errors)&&!B,submitCount:t.submitCount+1,errors:t.errors}),B)throw B},Xe=(f,b={})=>{M(n,f)&&(ie(b.defaultValue)?V(f,me(M(a,f))):(V(f,b.defaultValue),ne(a,f,me(b.defaultValue))),b.keepTouched||oe(t.touchedFields,f),b.keepDirty||(oe(t.dirtyFields,f),t.isDirty=b.defaultValue?U(f,me(M(a,f))):U()),b.keepError||(oe(t.errors,f),u.isValid&&_()),v.state.next({...t}))},Me=(f,b={})=>{const O=f?me(f):a,B=me(O),K=Re(f),D=K?a:B;if(b.keepDefaultValues||(a=O),!b.keepValues){if(b.keepDirtyValues){const Y=new Set([...s.mount,...Object.keys(on(a,l))]);for(const Q of Array.from(Y))M(t.dirtyFields,Q)?ne(D,Q,M(l,Q)):V(Q,M(D,Q))}else{if(sr&&ie(f))for(const Y of s.mount){const Q=M(n,Y);if(Q&&Q._f){const ee=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(st(ee)){const Ae=ee.closest("form");if(Ae){Ae.reset();break}}}}if(b.keepFieldsRef)for(const Y of s.mount)V(Y,M(D,Y));else n={}}l=r.shouldUnregister?b.keepDefaultValues?me(a):{}:me(D),v.array.next({values:{...D}}),v.state.next({values:{...D}})}s={mount:b.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!b.keepIsValid||!!b.keepDirtyValues,i.watch=!!r.shouldUnregister,v.state.next({submitCount:b.keepSubmitCount?t.submitCount:0,isDirty:K?!1:b.keepDirty?t.isDirty:!!(b.keepDefaultValues&&!Ue(f,a)),isSubmitted:b.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:K?{}:b.keepDirtyValues?b.keepDefaultValues&&l?on(a,l):t.dirtyFields:b.keepDefaultValues&&f?on(a,f):b.keepDirty?t.dirtyFields:{},touchedFields:b.keepTouched?t.touchedFields:{},errors:b.keepErrors?t.errors:{},isSubmitSuccessful:b.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:a})},Ge=(f,b)=>Me(De(f)?f(l):f,b),hn=(f,b={})=>{const O=M(n,f),B=O&&O._f;if(B){const K=B.refs?B.refs[0]:B.ref;K.focus&&(K.focus(),b.shouldSelect&&De(K.select)&&K.select())}},Tn=f=>{t={...t,...f}},an={control:{register:re,unregister:le,getFieldState:z,handleSubmit:_e,setError:J,_subscribe:ge,_runSchema:j,_focusError:pe,_getWatch:w,_getDirty:U,_setValid:_,_setFieldArray:T,_setDisabledField:Z,_setErrors:h,_getFieldArray:S,_reset:Me,_resetDefaultValues:()=>De(r.defaultValues)&&r.defaultValues().then(f=>{Ge(f,r.resetOptions),v.state.next({isLoading:!1})}),_removeUnmounted:C,_disableForm:Ee,_subjects:v,_proxyFormState:u,get _fields(){return n},get _formValues(){return l},get _state(){return i},set _state(f){i=f},get _defaultValues(){return a},get _names(){return s},set _names(f){s=f},get _formState(){return t},get _options(){return r},set _options(f){r={...r,...f}}},subscribe:de,trigger:F,register:re,handleSubmit:_e,watch:Fe,setValue:V,getValues:H,reset:Ge,resetField:Xe,clearErrors:W,unregister:le,setError:J,setFocus:hn,getFieldState:z};return{...an,formControl:an}}function vd(e={}){const r=g.useRef(void 0),t=g.useRef(void 0),[n,a]=g.useState({isDirty:!1,isValidating:!1,isLoading:De(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:De(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:n},e.defaultValues&&!De(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=fd(e);r.current={...s,formState:n}}const l=r.current.control;return l._options=e,mr(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>a({...l._formState}),reRenderRoot:!0});return a(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),g.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),g.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),g.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),g.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),g.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==n.isDirty&&l._subjects.state.next({isDirty:i})}},[l,n.isDirty]),g.useEffect(()=>{e.values&&!Ue(e.values,t.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),t.current=e.values,a(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),g.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),r.current.formState=ml(n,l),r.current}function gd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sa={exports:{}},Nn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa;function pd(){if(oa)return Nn;oa=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:l}}return Nn.Fragment=r,Nn.jsx=t,Nn.jsxs=t,Nn}var ua;function Ed(){return ua||(ua=1,sa.exports=pd()),sa.exports}var Se=Ed();const _d=({children:e})=>{const r=p.Children.toArray(e);return r.length===0?null:Se.jsx(bo,{variant:"warning",size:"small",children:Se.jsx(Ke,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:r.map(t=>Se.jsx(fe,{size:"small",children:t},yd(t)))})})},yd=e=>{if(p.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},Bn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};pn(Bn);const ut="var(--ax-bg-neutral-strong)",bl=4,bd=(e,r,t)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${ut};
    border-radius: ${bl}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${ut};
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
`,Rd=(e,r,t)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${ut};
    border-radius: ${bl}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${ut};
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
`,hd=(e,r,t,n)=>r?Rd(e,t,n):bd(e,t,n),Td=(e,r,t)=>t?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,kd=({children:e,alignOffset:r=0,alignLeft:t=!1,marginTop:n=0,marginLeft:a=0,hideBorder:l=!1})=>Se.jsxs(Se.Fragment,{children:[Se.jsx("style",{dangerouslySetInnerHTML:{__html:hd(r,t,n,a)}}),Se.jsx("div",{className:Td(r,t,l),children:e})]});var da={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ma;function Sd(){return ma||(ma=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n.call(this,s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,this&&this[s]||s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(da)),da.exports}var Od=Sd();const vr=gd(Od),Nd="_borderbox_1a0x6_1",Ad="_error_1a0x6_5",Pd="_warning_1a0x6_8",wd={borderbox:Nd,error:Ad,warning:Pd};vr.bind(wd);const Id="_aksjonspunkt_11wjs_1",Fd="_erAksjonspunktApent_11wjs_4",Ld="_erIkkeGodkjentAvBeslutter_11wjs_8",Dd={aksjonspunkt:Id,erAksjonspunktApent:Fd,erIkkeGodkjentAvBeslutter:Ld};vr.bind(Dd);pn(Bn);pn(Bn);const xd="_divider_1jpov_1",Vd="_dividerParagraf_1jpov_8",Kd="_leftPanel_1jpov_11",jd="_rightPanel_1jpov_14",Md={divider:xd,dividerParagraf:Vd,leftPanel:Kd,rightPanel:jd};vr.bind(Md);const Rl=()=>Se.jsx("span",{"data-testid":"editedIcon",children:Se.jsx(vi,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});pn(Bn);const Gd=pn(Bn),Bd=({tekst:e,children:r})=>{const[t,n]=p.useState(!1);if(!e)return r;const a=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return Se.jsx(il,{content:Gd.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Se.jsx("span",{"aria-hidden":"true",onClick:a,children:r??e})})},ca={default:"_default_af3od_1",rød:"_rød_af3od_5"},Lt=({beløp:e,kr:r=!1,rød:t=!1})=>{const n=e?.toString().replace(/\s/g,"");return Se.jsx(Bd,{tekst:n,children:Se.jsxs("span",{className:t?ca.rød:ca.default,children:[n?Aa(n):"-",n&&r&&" kr"]})})};var Dt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var fa;function qd(){return fa||(fa=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n(s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Dt)),Dt.exports}var Ud=qd();const Cd=Wt(Ud);function Hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var va={exports:{}},An={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga;function $d(){if(ga)return An;ga=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:l}}return An.Fragment=r,An.jsx=t,An.jsxs=t,An}var pa;function Yd(){return pa||(pa=1,va.exports=$d()),va.exports}var be=Yd();const hl=e=>e.reduce((r,t,n)=>({...r,[n]:a=>t(a)||!0}),{}),Tl=(e,r)=>r.split(".").reduce((t,n)=>t!==void 0?t[n]:t,e)?.message;var Ht={exports:{}},zd=Ht.exports,Ea;function Wd(){return Ea||(Ea=1,(function(e,r){(function(t,n){e.exports=n()})(zd,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,o={},d=function(y){return(y=+y)+(y>68?1900:2e3)},u=function(y){return function(T){this[y]=+T}},m=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=(function(T){if(!T||T==="Z")return 0;var R=T.match(/([+-]|\d\d)/g),h=60*R[1]+(+R[2]||0);return h===0?0:R[0]==="+"?-h:h})(y)}],v=function(y){var T=o[y];return T&&(T.indexOf?T:T.s.concat(T.f))},c=function(y,T){var R,h=o.meridiem;if(h){for(var N=1;N<=24;N+=1)if(y.indexOf(h(N,0,T))>-1){R=N>12;break}}else R=y===(T?"pm":"PM");return R},E={A:[s,function(y){this.afternoon=c(y,!1)}],a:[s,function(y){this.afternoon=c(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[l,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[l,u("day")],Do:[s,function(y){var T=o.ordinal,R=y.match(/\d+/);if(this.day=R[0],T)for(var h=1;h<=31;h+=1)T(h).replace(/\[|\]/g,"")===y&&(this.day=h)}],w:[i,u("week")],ww:[l,u("week")],M:[i,u("month")],MM:[l,u("month")],MMM:[s,function(y){var T=v("months"),R=(v("monthsShort")||T.map(function(h){return h.slice(0,3)})).indexOf(y)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[s,function(y){var T=v("months").indexOf(y)+1;if(T<1)throw new Error;this.month=T%12||T}],Y:[/[+-]?\d+/,u("year")],YY:[l,function(y){this.year=d(y)}],YYYY:[/\d{4}/,u("year")],Z:m,ZZ:m};function _(y){var T,R;T=y,R=o&&o.formats;for(var h=(y=T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(C,U,w){var S=w&&w.toUpperCase();return U||R[w]||t[w]||R[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(k,I,V){return I||V.slice(1)})})).match(n),N=h.length,A=0;A<N;A+=1){var G=h[A],j=E[G],$=j&&j[0],q=j&&j[1];h[A]=q?{regex:$,parser:q}:G.replace(/^\[|\]$/g,"")}return function(C){for(var U={},w=0,S=0;w<N;w+=1){var k=h[w];if(typeof k=="string")S+=k.length;else{var I=k.regex,V=k.parser,x=C.slice(S),L=I.exec(x)[0];V.call(U,L),C=C.replace(L,"")}}return(function(F){var H=F.afternoon;if(H!==void 0){var z=F.hours;H?z<12&&(F.hours+=12):z===12&&(F.hours=0),delete F.afternoon}})(U),U}}return function(y,T,R){R.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(d=y.parseTwoDigitYear);var h=T.prototype,N=h.parse;h.parse=function(A){var G=A.date,j=A.utc,$=A.args;this.$u=j;var q=$[1];if(typeof q=="string"){var C=$[2]===!0,U=$[3]===!0,w=C||U,S=$[2];U&&(S=$[2]),o=this.$locale(),!C&&S&&(o=R.Ls[S]),this.$d=(function(x,L,F,H){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*x);var z=_(L)(x),W=z.year,J=z.month,Fe=z.day,ge=z.hours,de=z.minutes,le=z.seconds,Z=z.milliseconds,re=z.zone,pe=z.week,Ee=new Date,_e=Fe||(W||J?1:Ee.getDate()),Xe=W||Ee.getFullYear(),Me=0;W&&!J||(Me=J>0?J-1:Ee.getMonth());var Ge,hn=ge||0,Tn=de||0,qn=le||0,an=Z||0;return re?new Date(Date.UTC(Xe,Me,_e,hn,Tn,qn,an+60*re.offset*1e3)):F?new Date(Date.UTC(Xe,Me,_e,hn,Tn,qn,an)):(Ge=new Date(Xe,Me,_e,hn,Tn,qn,an),pe&&(Ge=H(Ge).week(pe).toDate()),Ge)}catch{return new Date("")}})(G,q,j,R),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),w&&G!=this.format(q)&&(this.$d=new Date("")),o={}}else if(q instanceof Array)for(var k=q.length,I=1;I<=k;I+=1){$[1]=q[I-1];var V=R.apply(this,$);if(V.isValid()){this.$d=V.$d,this.$L=V.$L,this.init();break}I===k&&(this.$d=new Date(""))}else N.call(this,A)}}})})(Ht)),Ht.exports}var Jd=Wd();const Xd=Hd(Jd),Zd="_textarea_14c7r_1",Qd="_readOnlyField_14c7r_7",_a={textarea:Zd,readOnlyField:Qd},em=e=>e!=null&&e!=="",nm=({label:e,value:r,isEdited:t=!1,type:n,hideLabel:a,size:l})=>em(r)?be.jsxs(Ke,{gap:"space-4",children:[e&&!a&&be.jsx(_n,{size:l,children:e}),be.jsxs(mn,{gap:"space-8",align:"center",wrap:!1,children:[be.jsx(Xt,{className:n==="textarea"?_a.textarea:_a.readOnlyField,size:l,children:r}),t&&be.jsx(Rl,{})]})]}):null;un.extend(Xd);const tm="_noReadOnlyIcon_11vhl_2",rm={noReadOnlyIcon:tm},am=({label:e,description:r,validate:t=[],onChange:n,children:a,className:l,isReadOnly:i=!1,size:s="small",isEdited:o=!1,hideLegend:d=!1,...u})=>{const{name:m,control:v}=u,{formState:{errors:c}}=rn(),{field:E}=fl({name:m,control:v,rules:{validate:hl(t)}});return be.jsx(Gu,{name:m,value:E.value!==void 0?E.value:null,legend:be.jsxs(mn,{justify:"center",gap:"space-8",children:[e,i&&o&&be.jsx(Rl,{})]}),hideLegend:d,"aria-readonly":i,readOnly:i,description:r,size:s,error:Tl(c,m),onChange:_=>{n&&n(_),E.onChange(_)},className:Cd(l,rm.noReadOnlyIcon),children:a})},lm="_textAreaFieldWithBadges_bdz0b_1",im="_etikettWrapper_bdz0b_4",ya={textAreaFieldWithBadges:lm,etikettWrapper:im},$t=({name:e,control:r,label:t,readOnly:n,maxLength:a,badges:l,validate:i=[],parse:s=c=>c,className:o,description:d,isEdited:u,size:m="small",...v})=>{const{formState:{errors:c}}=rn(),{field:E}=fl({name:e,control:r,rules:{validate:p.useMemo(()=>hl(i),[i])}});return n?be.jsx(nm,{size:m,label:t,value:E.value,type:"textarea",isEdited:u,hideLabel:v.hideLabel}):be.jsxs("div",{className:l?ya.textAreaFieldWithBadges:null,children:[l&&be.jsx("div",{className:ya.etikettWrapper,children:l.map(({type:_,titleText:y})=>be.jsx(Lu,{variant:_,size:"small",children:y},y))}),be.jsx(Yu,{size:m,label:t,description:d,className:o,autoComplete:"off",...E,onChange:_=>E.onChange(_.currentTarget.value!==""?s(_.currentTarget.value):null),value:E.value?E.value:"",error:Tl(c,e),maxLength:a,...v})]})},sm=({formMethods:e,onSubmit:r,children:t,className:n,setDataOnUnmount:a})=>{const{handleSubmit:l,getValues:i}=e;return p.useEffect(()=>()=>{a&&a(i())},[]),be.jsx(Ju,{...e,children:be.jsx("form",{className:n,onSubmit:r?l(s=>r(s)):void 0,children:t})})},om="_readMore_mcbzv_1",um={readMore:om},dm=Pa(3),mm=wa(1500),bn=({readOnly:e,aksjonspunkt:r})=>{const t=Jt(),{control:n}=rn();return!r||r.definisjon!==se.KONTROLLER_STOR_ETTERBETALING_SØKER?null:P.jsxs(Ke,{gap:"space-16",children:[P.jsx(Qa,{header:P.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreTittel"}),className:um.readMore,children:P.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreInnhold"})}),P.jsx($t,{name:"begrunnelseEtterbetaling",control:n,label:t.formatMessage({id:"Simulering.Etterbetaling.Vurdering"}),validate:[Xn,dm,mm,Kt],maxLength:1500,size:"medium",readOnly:e})]})};bn.initialValues=e=>{if(!(!e||e.definisjon!==se.KONTROLLER_STOR_ETTERBETALING_SØKER))return{begrunnelseEtterbetaling:e.begrunnelse??""}};bn.transformValues=e=>({kode:se.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:e.begrunnelseEtterbetaling});bn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
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
| 'UNDEFINED'
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
| '5069'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]},alias:"Aksjonspunkt"}}],returns:{type:{name:"union",raw:"EtterbetalingSøkerFormValues | undefined",elements:[{name:"signature",type:"object",raw:`{
  begrunnelseEtterbetaling?: string;
}`,signature:{properties:[{key:"begrunnelseEtterbetaling",value:{name:"string",required:!1}}]}},{name:"undefined"}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelseEtterbetaling?: string;
}`,signature:{properties:[{key:"begrunnelseEtterbetaling",value:{name:"string",required:!1}}]},alias:"EtterbetalingSøkerFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}}}],displayName:"EtterbetalingSøkerForm",props:{aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
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
| 'UNDEFINED'
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
| '5069'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const cm="_summaryTitle_1leg0_1",fm="_infoSummary_1leg0_5",vm="_ingenPerioder_1leg0_13",gm="_number_1leg0_17",Pn={summaryTitle:cm,infoSummary:fm,ingenPerioder:vm,number:gm},kl=({fom:e,tom:r,feilutbetaling:t,etterbetaling:n,inntrekk:a,ingenPerioderMedAvvik:l})=>P.jsxs(Ke,{gap:"space-16",children:[P.jsx(fe,{size:"small",className:Pn.summaryTitle,children:P.jsx(ae,{id:"Simulering.bruker"})}),P.jsxs("div",{className:Pn.infoSummary,children:[l&&P.jsx("div",{className:Pn.ingenPerioder,children:P.jsx(ae,{id:"Simulering.ingenPerioder"})}),!l&&P.jsxs(Ke,{gap:"space-16",children:[P.jsx(_n,{size:"small",children:Dl(e,r)}),P.jsxs(mn,{gap:"space-16",children:[P.jsxs(fe,{size:"small",children:[P.jsx(ae,{id:"Simulering.etterbetaling"}),":"]}),P.jsx(fe,{size:"small",children:P.jsx(Lt,{beløp:n})})]}),P.jsxs(mn,{gap:"space-16",children:[P.jsxs(fe,{size:"small",children:[P.jsx(ae,{id:"Simulering.tilbakekreving"}),":"]}),P.jsx(fe,{weight:"semibold",size:"small",className:Pn.number,children:P.jsx(Lt,{beløp:t,rød:t<0})})]}),a!=null&&P.jsxs(mn,{gap:"space-16",children:[P.jsxs(fe,{size:"small",children:[P.jsx(ae,{id:"Simulering.inntrekk"}),":"]}),P.jsx(fe,{weight:"semibold",size:"small",className:Pn.number,children:P.jsx(Lt,{beløp:a,rød:a<0})})]})]})]})]});kl.__docgenInfo={description:"Simulering oppsummering",methods:[],displayName:"SimuleringSummary",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},etterbetaling:{required:!0,tsType:{name:"number"},description:""},inntrekk:{required:!1,tsType:{name:"number"},description:""},ingenPerioderMedAvvik:{required:!1,tsType:{name:"boolean"},description:""}}};var xt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ba;function pm(){return ba||(ba=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n.call(this,s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,this&&this[s]||s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(xt)),xt.exports}var Em=pm();const _m=Wt(Em),ym="_invisibleButton_1u9o7_1",bm={invisibleButton:ym},Rm=e=>e?"Simulering.headerText.VisFærreDetaljer":"Simulering.headerText.VisFlereDetaljer",Sl=({toggleDetails:e,showDetails:r,mottakerIndex:t})=>P.jsxs("button",{type:"button",className:bm.invisibleButton,onClick:()=>e(t),children:[P.jsx(ae,{id:Rm(r)}),r?P.jsx(si,{}):P.jsx(Qt,{})]});Sl.__docgenInfo={description:"",methods:[],displayName:"CollapseButton",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"boolean"},description:""},mottakerIndex:{required:!0,tsType:{name:"number"},description:""}}};const hm="_tableWrapper_piqyx_1",Tm="_simuleringTable_piqyx_5",km="_rodTekst_piqyx_5",Sm="_lastColumn_piqyx_9",Om="_nextPeriod_piqyx_17",Nm="_normalPeriod_piqyx_23",Yt={tableWrapper:hm,simuleringTable:Tm,rodTekst:km,lastColumn:Sm,nextPeriod:Om,normalPeriod:Nm},Ol=_m.bind(Yt),Fn={DIFFERANSE:"differanse",INNTREKKNESTEMÅNED:"inntrekkNesteMåned"},Nl=({simuleringResultat:e,toggleDetails:r,showDetails:t,ingenPerioderMedAvvik:n,arbeidsgiverOpplysningerPerId:a})=>P.jsx(P.Fragment,{children:e.perioderPerMottaker.map((l,i)=>{const s=xm(n,e.periode.fom,l),o=l.nesteUtbPeriode.tom,d=t.find(m=>m.id===i),u=Fm(n,l.resultatPerFagområde,l.resultatOgMotregningRader);return P.jsxs("div",{className:Yt.tableWrapper,children:[Im(l,a),P.jsxs(ce,{className:Yt.simuleringTable,children:[P.jsx(ce.Header,{children:P.jsxs(ce.Row,{children:[Am(l.resultatPerFagområde)?P.jsx(ce.HeaderCell,{scope:"col",children:P.jsx(Sl,{toggleDetails:r,mottakerIndex:i,showDetails:d?d.show:!1},`collapseButton-${s.length}`)}):P.jsx(ce.HeaderCell,{}),s.map(m=>P.jsx(ce.HeaderCell,{scope:"col",className:Ol({nextPeriod:Ra(m,o),normalPeriod:!Ra(m,o)}),children:P.jsx(ae,{id:`Simulering.headerText.${m.month}`})},`${m.month}-${m.year}`))]})}),P.jsxs(ce.Body,{children:[l.resultatPerFagområde.map((m,v)=>m.rader.filter(c=>{const E=c.feltnavn===Fn.DIFFERANSE,_=ha(m,E);return!Pm(_,d?d.show:!1)}).map((c,E)=>{const _=c.feltnavn===Fn.DIFFERANSE,T=ha(m,_)?"dashed 1px var(--ax-neutral-300)":"solid 1px var(--ax-neutral-300)";return P.jsxs(ce.Row,{children:[P.jsx(ce.DataCell,{style:_||n?{fontWeight:"bold",borderBottom:T}:{borderBottom:T},children:P.jsx(ae,{id:`Simulering.${m.fagOmrådeKode}.${c.feltnavn}`})}),Ta(c.resultaterPerMåned,s,o,T)]},`rowIndex${v+1}${E+1}`)})),u.map((m,v)=>P.jsxs(ce.Row,{children:[P.jsx(ce.DataCell,{style:m.feltnavn===Fn.INNTREKKNESTEMÅNED?{}:{fontWeight:"bold"},children:P.jsx(ae,{id:`Simulering.${m.feltnavn}`})}),Ta(m.resultaterPerMåned,s,o)]},`rowIndex${v+1}`))]})]},`tableIndex${i+1}`)]},`tableIndex${i+1}`)})}),Ra=(e,r)=>`${e.month}${e.year}`===(r?un(r).format("MMMMYY"):!1),Am=e=>e.some(r=>r.rader.length>1),ha=(e,r)=>!!e.rader.find(n=>n.feltnavn===Fn.DIFFERANSE)&&!r,Pm=(e,r)=>e&&!r,Ta=(e,r,t,n)=>{const a=`${un(t).format("MMMMYY")}`;return r.map(i=>e.find(o=>un(o.periode.tom).format("MMMMYY").toLowerCase()===`${i.month}${i.year}`)||{måned:`${i.month}${i.year}`,beløp:null}).map((i,s)=>P.jsx(ce.DataCell,{style:{borderBottom:n},className:Ol({rodTekst:!i.beløp||i.beløp<0,lastColumn:"måned"in i?i.måned===a:un(i.periode.tom).format("MMMMYY")===a}),children:i.beløp?Aa(i.beløp):"-"},`columnIndex${s+1}`))},wm=(e,r)=>{const t=e.mottakerIdentifikator?r[e.mottakerIdentifikator]:void 0;return t?`${t.navn} (${e.mottakerNummer})`:`${e.mottakerNummer}`},Im=(e,r)=>e.mottakerType==="ARBG_ORG"||e.mottakerType==="ARBG_PRIV"?P.jsx(Da,{size:"xsmall",level:"3",children:wm(e,r)}):null,Fm=(e,r,t)=>e?r.length>1?t.filter(n=>n.feltnavn!==Fn.INNTREKKNESTEMÅNED):[]:t,Lm=(e,r)=>!!(e&&r==="BRUKER"),Dm=(e,r)=>e||r,xm=(e,r,t)=>{const n=Lm(e,t.mottakerType)?un(t.nesteUtbPeriode.tom).subtract(1,"months").format():Dm(r,t.nesteUtbPeriode.fom);return xl(n,t.nesteUtbPeriode.tom)};Nl.__docgenInfo={description:"",methods:[],displayName:"SimuleringTable",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  mottakerType: MottakerType;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"union",raw:"'BRUKER' | 'ARBG_ORG' | 'ARBG_PRIV'",elements:[{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ARBG_ORG'"},{name:"literal",value:"'ARBG_PRIV'"}],required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  mottakerType: MottakerType;
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
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Vm="_helpTextImage_151dm_1",Km="_varsel_151dm_17",jm="_bold_151dm_23",Vt={helpTextImage:Vm,varsel:Km,bold:jm},ka=Pa(3),Sa=wa(1500),gr="IKKE_SEND",Rn=({readOnly:e,språkkode:r,previewCallback:t,aksjonspunkt:n,fagsak:a})=>{const l=Jt(),{watch:i,control:s}=rn(),o=i("varseltekst"),d=i("videreBehandling"),u=a.fagsakYtelseType==="FP",m=v=>{t({mottaker:"",fritekst:o??" "}),v.preventDefault()};return!n||n.definisjon!==se.VURDER_FEILUTBETALING?null:P.jsxs(Ke,{gap:"space-40",align:"start",children:[P.jsx($t,{name:"begrunnelse",control:s,label:l.formatMessage({id:"Simulering.vurdering"}),validate:[Xn,ka,Sa,Kt],maxLength:1500,readOnly:e}),P.jsx(am,{name:"videreBehandling",control:s,label:P.jsx(ae,{id:"Simulering.videreBehandling"}),validate:[Xn],isReadOnly:e,children:P.jsxs(Ke,{gap:"space-2",children:[P.jsx(It,{value:Ce.TILBAKEKR_OPPRETT,size:"small",children:P.jsx(ae,{id:"Simulering.gjennomfør"})}),d===Ce.TILBAKEKR_OPPRETT&&P.jsx("div",{className:Vt.varsel,children:P.jsx(kd,{alignOffset:20,children:P.jsxs(Ke,{gap:"space-16",children:[P.jsxs(mn,{gap:"space-8",children:[P.jsx(fe,{size:"small",className:Vt.bold,children:P.jsx(ae,{id:"Simulering.varseltekst"})}),P.jsx(il,{content:u?l.formatMessage({id:"Simulering.HjelpetekstForeldrepenger"}):l.formatMessage({id:"Simulering.HjelpetekstEngangsstonad"}),children:P.jsx(pi,{className:Vt.helpTextImage})})]}),P.jsx($t,{name:"varseltekst",control:s,label:l.formatMessage({id:"Simulering.fritekst"}),validate:[Xn,ka,Sa,Kt],maxLength:1500,readOnly:e,parse:Kl,badges:[{type:"info",titleText:Vl(r)}]}),!e&&P.jsx(mu,{href:"#",onClick:m,children:P.jsx(ae,{id:"Messages.PreviewText"})})]})})}),P.jsx(It,{value:`${Ce.TILBAKEKR_OPPRETT}${gr}`,size:"small",children:P.jsx(ae,{id:"Simulering.OpprettMenIkkeSendVarsel"})}),P.jsx(It,{value:Ce.TILBAKEKR_IGNORER,size:"small",children:P.jsx(ae,{id:"Simulering.avvent"})})]})})]})};Rn.initialValues=(e,r)=>!e||!r?void 0:{videreBehandling:!r.varseltekst&&r.videreBehandling===Ce.TILBAKEKR_OPPRETT?r.videreBehandling+gr:r.videreBehandling,varseltekst:r.varseltekst,begrunnelse:e.begrunnelse??""};Rn.transformValues=e=>{const{videreBehandling:r,varseltekst:t,begrunnelse:n}=e;return r.endsWith(gr)?{kode:se.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:Ce.TILBAKEKR_OPPRETT}:{kode:se.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:r,varseltekst:t}};Rn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
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
| 'UNDEFINED'
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
| '5069'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]},alias:"Aksjonspunkt"}},{name:"tilbakekrevingvalg",optional:!0,type:{name:"signature",type:"object",raw:`{
  grunnerTilReduksjon?: boolean;
  varseltekst?: string;
  videreBehandling: foreldrepenger_behandlingslager_behandling_tilbakekreving_TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"grunnerTilReduksjon",value:{name:"boolean",required:!1}},{key:"varseltekst",value:{name:"string",required:!1}},{key:"videreBehandling",value:{name:"union",raw:`| '-'
| 'TILBAKEKR_OPPRETT'
| 'TILBAKEKR_IGNORER'
| 'TILBAKEKR_INNTREKK'
| 'TILBAKEKR_OPPDATER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'TILBAKEKR_OPPRETT'"},{name:"literal",value:"'TILBAKEKR_IGNORER'"},{name:"literal",value:"'TILBAKEKR_INNTREKK'"},{name:"literal",value:"'TILBAKEKR_OPPDATER'"}],required:!0}}]},alias:"TilbakekrevingValg"}}],returns:{type:{name:"union",raw:"FeilutbetalingFormValues | undefined",elements:[{name:"signature",type:"object",raw:`{
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
  aktørId: string;
  annenPart?: tjenester_fagsak_dto_PersonDto;
  annenpartBehandling?: tjenester_behandling_dto_behandling_AnnenPartBehandlingDto;
  behandlingTypeKanOpprettes: Array<tjenester_behandling_dto_BehandlingOpprettingDto>;
  behandlinger: Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>;
  bruker: tjenester_fagsak_dto_PersonDto;
  brukerManglerAdresse: boolean;
  dekningsgrad: number;
  fagsakMarkeringer: Array<tjenester_fagsak_dto_FagsakMarkeringDto>;
  fagsakYtelseType: foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
  familiehendelse?: tjenester_fagsak_dto_SakHendelseDto;
  harVergeIÅpenBehandling: boolean;
  historikkinnslag: Array<tjenester_behandling_historikk_HistorikkinnslagDto>;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto;
  notater: Array<tjenester_fagsak_dto_FagsakNotatDto>;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  sakSkalTilInfotrygd: boolean;
  saksnummer: string;
  status: foreldrepenger_behandlingslager_fagsak_FagsakStatus;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  saksnummer: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"saksnummer",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  ansvarligSaksbehandler?: string;
  avsluttet?: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingHenlagt: boolean;
  behandlingKoet?: boolean;
  behandlingKøet: boolean;
  behandlingPaaVent?: boolean;
  behandlingPåVent: boolean;
  behandlingTillatteOperasjoner?: tjenester_behandling_dto_BehandlingOperasjonerDto;
  behandlingsfristTid?: string;
  behandlingsresultat?: tjenester_behandling_dto_behandling_BehandlingsresultatDto;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  endret?: string;
  endretAvBrukernavn?: string;
  erAktivPapirsoknad: boolean;
  erPaaVent?: boolean;
  fagsakId?: number;
  fristBehandlingPaaVent?: string;
  fristBehandlingPåVent?: string;
  førsteÅrsak?: tjenester_behandling_dto_behandling_BehandlingÅrsakDto;
  gjeldendeVedtak: boolean;
  id?: number;
  kontrollResultat?: tjenester_behandling_kontroll_dto_KontrollresultatDto;
  links: Array<rest_ResourceLink>;
  opprettet: string;
  originalVedtaksDato?: string;
  risikoAksjonspunkt?: tjenester_behandling_aksjonspunkt_AksjonspunktDto;
  sprakkode?: foreldrepenger_behandlingslager_geografisk_Språkkode;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  toTrinnsBehandling: boolean;
  totrinnskontrollReadonly?: boolean;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  ugunstAksjonspunkt?: boolean;
  uuid: string;
  venteArsakKode?: string;
  venteÅrsakKode?: string;
  versjon: number;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
}`,signature:{properties:[{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!1}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"boolean",required:!1}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingTilGodkjenning: boolean;
  uuid?: string;
  vergeBehandlingsmeny: foreldrepenger_domene_person_verge_dto_VergeBehandlingsmenyEnum;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"uuid",value:{name:"string",required:!1}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]},required:!1}},{key:"behandlingsfristTid",value:{name:"string",required:!1}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  avslagsarsak?: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak;
  avslagsarsakFritekst?: string;
  endretDekningsgrad?: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  fritekstbrev?: string;
  harRedigertVedtaksbrev: boolean;
  id: number;
  konsekvenserForYtelsen?: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>;
  opphørsdato?: string;
  overskrift?: string;
  rettenTil?: foreldrepenger_behandlingslager_behandling_RettenTil;
  skjæringstidspunkt?: tjenester_behandling_dto_behandling_SkjæringstidspunktDto;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  vedtaksbrev?: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
}`,signature:{properties:[{key:"avslagsarsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"endretDekningsgrad",value:{name:"boolean",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"id",value:{name:"number",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}],required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato?: string;
  utenMinsterett?: boolean;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!1}},{key:"utenMinsterett",value:{name:"boolean",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]},required:!1}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  erAutomatiskRevurdering: boolean;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
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
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig?: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!1}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"endretAvBrukernavn",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"boolean",required:!1}},{key:"fagsakId",value:{name:"number",required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  erAutomatiskRevurdering: boolean;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
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
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"id",value:{name:"number",required:!1}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  faresignalVurdering?: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering;
  iayFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  medlFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
}`,signature:{properties:[{key:"faresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}},{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}}]},required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"originalVedtaksDato",value:{name:"string",required:!1}},{key:"risikoAksjonspunkt",value:{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
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
| 'UNDEFINED'
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
| '5069'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]},required:!1}},{key:"sprakkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!1}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  beregningDto?: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto;
  besluttersBegrunnelse?: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  totrinnskontrollGodkjent: boolean;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  faktaOmBeregningTilfeller?: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>;
  fastsattVarigEndringNaering?: boolean;
}`,signature:{properties:[{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
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
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>",required:!1}},{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!1}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  arbeidsgiverNavn?: string;
  arbeidsgiverReferanse?: string;
  erEndring: boolean;
  godkjent: boolean;
  orgnr?: string;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"orgnr",value:{name:"string",required:!1}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erEndret?: boolean;
  erLagtTil?: boolean;
  erSlettet?: boolean;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"erEndret",value:{name:"boolean",required:!1}},{key:"erLagtTil",value:{name:"boolean",required:!1}},{key:"erSlettet",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!1}},{key:"uuid",value:{name:"string",required:!0}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"venteÅrsakKode",value:{name:"string",required:!1}},{key:"versjon",value:{name:"number",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  evaluering?: string;
  input?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: foreldrepenger_behandlingslager_fagsak_egenskaper_FagsakMarkering;
  kortNavn: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"kortNavn",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakMarkeringDto>",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"familiehendelse",value:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  dødfødsel: boolean;
  hendelseDato?: string;
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktør: tjenester_behandling_historikk_HistorikkinnslagDto_HistorikkAktørDto;
  behandlingUuid?: string;
  dokumenter?: Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>;
  linjer: Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>;
  opprettetTidspunkt: string;
  skjermlenke?: foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType;
  tittel?: string;
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  ident?: string;
  type: foreldrepenger_behandlingslager_behandling_historikk_HistorikkAktør;
}`,signature:{properties:[{key:"ident",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"behandlingUuid",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>",required:!1}},{key:"linjer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tekst?: string;
  type: tjenester_behandling_historikk_HistorikkinnslagDto_Linje_Type;
}`,signature:{properties:[{key:"tekst",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:"'TEKST' | 'LINJESKIFT'",elements:[{name:"literal",value:"'TEKST'"},{name:"literal",value:"'LINJESKIFT'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"union",raw:`| 'ANKE_MERKNADER'
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
| 'FAKTA_UTTAK_EØS'`,elements:[{name:"literal",value:"'ANKE_MERKNADER'"},{name:"literal",value:"'ANKE_VURDERING'"},{name:"literal",value:"'BEREGNING_ENGANGSSTOENAD'"},{name:"literal",value:"'BEREGNING_FORELDREPENGER'"},{name:"literal",value:"'BESTEBEREGNING'"},{name:"literal",value:"'FAKTA_FOR_OMSORG'"},{name:"literal",value:"'FAKTA_FOR_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_ADOPSJON'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'"},{name:"literal",value:"'FAKTA_OM_BEREGNING'"},{name:"literal",value:"'FAKTA_OM_FOEDSEL'"},{name:"literal",value:"'FAKTA_OM_FORDELING'"},{name:"literal",value:"'FAKTA_OM_MEDLEMSKAP'"},{name:"literal",value:"'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'"},{name:"literal",value:"'FAKTA_OM_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_SIMULERING'"},{name:"literal",value:"'FAKTA_OM_UTTAK'"},{name:"literal",value:"'FAKTA_OM_AKTIVITETSKRAV'"},{name:"literal",value:"'FAKTA_OMSORG_OG_RETT'"},{name:"literal",value:"'FAKTA_OM_VERGE'"},{name:"literal",value:"'FORMKRAV_KLAGE_KA'"},{name:"literal",value:"'FORMKRAV_KLAGE_NFP'"},{name:"literal",value:"'KLAGE_BEH_NFP'"},{name:"literal",value:"'KLAGE_BEH_NK'"},{name:"literal",value:"'KONTROLL_AV_SAKSOPPLYSNINGER'"},{name:"literal",value:"'OPPLYSNINGSPLIKT'"},{name:"literal",value:"'PUNKT_FOR_ADOPSJON'"},{name:"literal",value:"'PUNKT_FOR_FOEDSEL'"},{name:"literal",value:"'PUNKT_FOR_FORELDREANSVAR'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP_LØPENDE'"},{name:"literal",value:"'PUNKT_FOR_OMSORG'"},{name:"literal",value:"'PUNKT_FOR_OPPTJENING'"},{name:"literal",value:"'PUNKT_FOR_SVANGERSKAPSPENGER'"},{name:"literal",value:"'PUNKT_FOR_SVP_INNGANG'"},{name:"literal",value:"'SOEKNADSFRIST'"},{name:"literal",value:"'TILKJENT_YTELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'UTLAND'"},{name:"literal",value:"'UTTAK'"},{name:"literal",value:"'VEDTAK'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'FAKTA_OM_UTTAK_DOKUMENTASJON'"},{name:"literal",value:"'FAKTA_UTTAK'"},{name:"literal",value:"'FAKTA_UTTAK_EØS'"}],required:!1}},{key:"tittel",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto>",required:!0}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  faresignalVurdering?: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering;
  iayFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  medlFaresignaler?: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto;
}`,signature:{properties:[{key:"faresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}},{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]},required:!1}}]},required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  notat: string;
  opprettetAv: string;
  opprettetTidspunkt: string;
}`,signature:{properties:[{key:"notat",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakNotatDto>",required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}}]}},description:""},språkkode:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
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
| 'UNDEFINED'
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
| '5069'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const Al=({simuleringResultat:e,previewFptilbakeCallback:r,tilbakekrevingvalg:t,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:a,submitCallback:l,isReadOnly:i,harÅpentAksjonspunkt:s,fagsak:o,behandling:d}=jl(),{mellomlagretFormData:u,setMellomlagretFormData:m}=Ml(),v=vd({defaultValues:u??Bm(a,t)}),{formState:c}=v,[E,_]=p.useState([]),y=t!==void 0&&t.videreBehandling===Ce.TILBAKEKR_OPPDATER,T=Mm(E,_),R=e?.simuleringResultat,h=cn(se.VURDER_FEILUTBETALING,a)||cn(se.KONTROLLER_STOR_ETTERBETALING_SØKER,a),N=s?qm(a):[];return P.jsxs(Ke,{gap:"space-32",children:[P.jsx(Da,{size:"small",level:"2",children:P.jsx(ae,{id:"Simulering.Title"})}),R&&P.jsxs(P.Fragment,{children:[N.length>0&&N.map(A=>P.jsx("div",{children:P.jsx(_d,{children:A})},A.key)),P.jsx(kl,{fom:R.periode.fom,tom:R.periode.tom,feilutbetaling:R.sumFeilutbetaling,etterbetaling:R.sumEtterbetaling,inntrekk:R.sumInntrekk,ingenPerioderMedAvvik:R.ingenPerioderMedAvvik}),P.jsx(Nl,{arbeidsgiverOpplysningerPerId:n,showDetails:E,toggleDetails:T,simuleringResultat:R,ingenPerioderMedAvvik:R.ingenPerioderMedAvvik}),y&&P.jsx(_n,{size:"small",children:P.jsx(ae,{id:"Simulering.ApenTilbakekrevingsbehandling"})})]}),!e&&P.jsx(ae,{id:"Simulering.ingenData"}),h&&P.jsx(sm,{formMethods:v,onSubmit:A=>l(Gm(A,a)),setDataOnUnmount:m,children:P.jsxs(Ke,{gap:"space-16",children:[P.jsx(Rn,{aksjonspunkt:dt(a,se.VURDER_FEILUTBETALING),fagsak:o,previewCallback:r,readOnly:i,språkkode:d.språkkode}),P.jsx(bn,{readOnly:i,aksjonspunkt:dt(a,se.KONTROLLER_STOR_ETTERBETALING_SØKER)}),P.jsx("div",{children:P.jsx(Ja,{size:"small",variant:"primary",disabled:!c.isDirty||c.isSubmitting||i,loading:c.isSubmitting,children:P.jsx(ae,{id:"SubmitButton.ConfirmInformation"})})})]})})]})},dt=(e,r)=>e.find(t=>t.definisjon===r),Mm=(e,r)=>t=>{const n=e.findIndex(l=>l.id===t);let a=[];if(n===-1)a=e.concat({id:t,show:!0});else{const l={id:t,show:!e[n]?.show};a=[...e.slice(0,n),l,...e.slice(n+1,-1)]}r(a)},Gm=(e,r)=>{const t=[];return cn(se.VURDER_FEILUTBETALING,r)&&"videreBehandling"in e&&t.push(Rn.transformValues(e)),cn(se.KONTROLLER_STOR_ETTERBETALING_SØKER,r)&&"begrunnelseEtterbetaling"in e&&t.push(bn.transformValues(e)),t},Bm=(e,r)=>{if(e.length!==0)return{...Rn.initialValues(dt(e,se.VURDER_FEILUTBETALING),r),...bn.initialValues(dt(e,se.KONTROLLER_STOR_ETTERBETALING_SØKER))}},qm=e=>{const r=[];return cn(se.VURDER_FEILUTBETALING,e)&&r.push(P.jsx(ae,{id:"Simulering.AksjonspunktHelpText.5084"},"vurderFeilutbetaling")),cn(se.KONTROLLER_STOR_ETTERBETALING_SØKER,e)&&r.push(P.jsx(ae,{id:"Simulering.Etterbetaling.Tittel"},"kontrollerFeilutbetaling")),r};Al.__docgenInfo={description:"",methods:[],displayName:"SimuleringPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
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
  mottakerType: MottakerType;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"union",raw:"'BRUKER' | 'ARBG_ORG' | 'ARBG_PRIV'",elements:[{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ARBG_ORG'"},{name:"literal",value:"'ARBG_PRIV'"}],required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  mottakerType: MottakerType;
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
  mottakerType: MottakerType;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"union",raw:"'BRUKER' | 'ARBG_ORG' | 'ARBG_PRIV'",elements:[{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ARBG_ORG'"},{name:"literal",value:"'ARBG_PRIV'"}],required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  mottakerType: MottakerType;
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
  varseltekst?: string;
  videreBehandling: foreldrepenger_behandlingslager_behandling_tilbakekreving_TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"grunnerTilReduksjon",value:{name:"boolean",required:!1}},{key:"varseltekst",value:{name:"string",required:!1}},{key:"videreBehandling",value:{name:"union",raw:`| '-'
| 'TILBAKEKR_OPPRETT'
| 'TILBAKEKR_IGNORER'
| 'TILBAKEKR_INNTREKK'
| 'TILBAKEKR_OPPDATER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'TILBAKEKR_OPPRETT'"},{name:"literal",value:"'TILBAKEKR_IGNORER'"},{name:"literal",value:"'TILBAKEKR_INNTREKK'"},{name:"literal",value:"'TILBAKEKR_OPPDATER'"}],required:!0}}]}},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const Um={"Simulering.Title":"Simulering","Simulering.FP.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FP.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FP.differanse":"Foreldrepenger avvik","Simulering.FPREF.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FPREF.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FPREF.differanse":"Foreldrepenger avvik","Simulering.OM.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OM.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OM.differanse":"Omsorgspenger avvik","Simulering.OMREF.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OMREF.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OMREF.differanse":"Omsorgspenger avvik","Simulering.OOP.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOP.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOP.differanse":"Pleiepenger avvik","Simulering.OOPREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOPREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOPREF.differanse":"Pleiepenger avvik","Simulering.OPP.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPP.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPP.differanse":"Opplæringspenger avvik","Simulering.OPPREF.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPPREF.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPPREF.differanse":"Opplæringspenger avvik","Simulering.PB.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PB.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PB.differanse":"Pleiepenger avvik","Simulering.PBREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PBREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PBREF.differanse":"Pleiepenger avvik","Simulering.PN.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PN.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PN.differanse":"Pleiepenger avvik","Simulering.PNREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PNREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PNREF.differanse":"Pleiepenger avvik","Simulering.REFUTG.nyttBeløp":"Engangstønad nytt beløp","Simulering.REFUTG.tidligereUtbetalt":"Engangstønad tidligere utbetalt","Simulering.REFUTG.differanse":"Engangstønad avvik","Simulering.SP.nyttBeløp":"Sykepenger nytt beløp","Simulering.SP.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SP.differanse":"Sykepenger avvik","Simulering.SPREF.nyttBeløp":"Sykepenger nytt beløp","Simulering.SPREF.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SPREF.differanse":"Sykepenger avvik","Simulering.SVP.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVP.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVP.differanse":"Svangerskapspenger avvik","Simulering.SVPREF.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVPREF.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVPREF.differanse":"Svangerskapspenger avvik","Simulering.resultatEtterMotregning":"Resultat etter motregning mellom ytelser","Simulering.inntrekk":"Inntrekk","Simulering.inntrekkNesteMåned":"Inntrekk i neste måned","Simulering.tilbakekreving":"Feilutbetaling","Simulering.etterbetaling":"Etterbetaling","Simulering.resultat":"Resultat","Simulering.avregnetBeløp":"Avregnet beløp","Simulering.headerText.VisFærreDetaljer":"Vis færre detaljer","Simulering.headerText.VisFlereDetaljer":"Vis flere detaljer","Simulering.headerText.januar":"Jan","Simulering.headerText.februar":"Feb","Simulering.headerText.mars":"Mars","Simulering.headerText.april":"Apr","Simulering.headerText.mai":"Mai","Simulering.headerText.juni":"Jun","Simulering.headerText.juli":"Jul","Simulering.headerText.august":"Aug","Simulering.headerText.september":"Sep","Simulering.headerText.oktober":"Okt","Simulering.headerText.november":"Nov","Simulering.headerText.desember":"Des","Simulering.ingenData":"Ingen informasjon om simulering mottatt fra økonomiløsningen.","Simulering.ingenPerioder":"Ingen periode med avvik","Simulering.AksjonspunktHelpText.5084":"Vurder videre behandling av tilbakekreving","Simulering.vurdering":"Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre","Simulering.videreBehandling":"Fastsett videre behandling","Simulering.gjennomfør":"Opprett tilbakekreving, send varsel","Simulering.OpprettMenIkkeSendVarsel":"Opprett tilbakekreving, ikke send varsel","Simulering.Opprett":"Opprett tilbakekreving","Simulering.avvent":"Avvent samordning, ingen tilbakekreving","Simulering.formAlternativ.ja":"Ja","Simulering.formAlternativ.nei":"Nei","Simulering.bruker":"Bruker","Simulering.varseltekst":"Send varsel om tilbakekreving","Simulering.fritekst":"Fritekst i varselet","Simulering.HjelpetekstForeldrepenger":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav. Eksempel på tekst: «Vi mottok melding fra deg [dato]om at du hadde jobbet heltid. Du kan ikke jobbe og motta foreldrepenger samtidig. Da vi mottok meldingen fra deg, var det allerede utbetalt foreldrenger for perioden du har jobbet.","Simulering.HjelpetekstEngangsstonad":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav.","Simulering.ApenTilbakekrevingsbehandling":"Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.","Simulering.Etterbetaling.Tittel":"Ny inntektsmelding vil føre til en høy etterbetaling til bruker i en tidligere innvilget periode. Kontroller om dette er riktig","Simulering.Etterbetaling.ReadMoreTittel":"Dette bør undersøkes rundt etterbetalingen","Simulering.Etterbetaling.ReadMoreInnhold":"Saken stopper i simulering fordi arbeidsgiver har endret sitt refusjonskrav, eller har endret fra refusjon til direkte utbetaling i en periode som allerede har blitt utbetalt til bruker. I tillegg er etterbetalingen høy. Du må kontrollerer om dette er riktig. Dette kan gjøres ved å kontakte arbeidsgiver. Er det feil, må de sende inn ny inntektsmelding. Får du ikke tak i arbeidsgiver, kan du kontakte søker og høre om de kan spørre arbeidsgiveren sin.","Simulering.Etterbetaling.Vurdering":"Begrunn hvorfor du går videre med denne behandlingen.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","Messages.PreviewText":"Forhåndsvis varselbrev"},Cm=pn(Um),zt=e=>P.jsx(Gl,{value:Cm,children:P.jsx(Al,{...e})});zt.__docgenInfo={description:"",methods:[],displayName:"SimuleringProsessIndex",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
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
  mottakerType: MottakerType;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"union",raw:"'BRUKER' | 'ARBG_ORG' | 'ARBG_PRIV'",elements:[{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ARBG_ORG'"},{name:"literal",value:"'ARBG_PRIV'"}],required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  mottakerType: MottakerType;
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
  mottakerType: MottakerType;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"union",raw:"'BRUKER' | 'ARBG_ORG' | 'ARBG_PRIV'",elements:[{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ARBG_ORG'"},{name:"literal",value:"'ARBG_PRIV'"}],required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  mottakerType: MottakerType;
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
  varseltekst?: string;
  videreBehandling: foreldrepenger_behandlingslager_behandling_tilbakekreving_TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"grunnerTilReduksjon",value:{name:"boolean",required:!1}},{key:"varseltekst",value:{name:"string",required:!1}},{key:"videreBehandling",value:{name:"union",raw:`| '-'
| 'TILBAKEKR_OPPRETT'
| 'TILBAKEKR_IGNORER'
| 'TILBAKEKR_INNTREKK'
| 'TILBAKEKR_OPPDATER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'TILBAKEKR_OPPRETT'"},{name:"literal",value:"'TILBAKEKR_IGNORER'"},{name:"literal",value:"'TILBAKEKR_INNTREKK'"},{name:"literal",value:"'TILBAKEKR_OPPDATER'"}],required:!0}}]}},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const{action:Hm}=__STORYBOOK_MODULE_ACTIONS__,$m={123:{erPrivatPerson:!1,identifikator:"123",referanse:"123",navn:"test"}},Ym={simuleringResultat:{periode:{fom:"2019-01-01",tom:"2019-03-31"},sumEtterbetaling:0,sumFeilutbetaling:-49863,sumInntrekk:-10899,ingenPerioderMedAvvik:!1,perioderPerMottaker:[{mottakerType:"ARBG_ORG",mottakerIdentifikator:"123",mottakerNummer:"test",resultatPerFagområde:[{fagOmrådeKode:"FP",rader:[{feltnavn:"nyttBeløp",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:52619}]},{feltnavn:"tidligereUtbetalt",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:61795}]},{feltnavn:"differanse",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-9176}]}]}],resultatOgMotregningRader:[{feltnavn:"inntrekkNesteMåned",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:0}]},{feltnavn:"resultat",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-26486}]}],nesteUtbPeriode:{fom:"2019-10-01",tom:"2019-10-31"}}]},slåttAvInntrekk:!1},Zm={title:"prosess/prosess-simulering",component:zt,decorators:[Bl,ql],args:{arbeidsgiverOpplysningerPerId:$m,simuleringResultat:Ym,previewFptilbakeCallback:Hm("button-click")},render:e=>P.jsx(zt,{...e})},Yn={args:{aksjonspunkterForPanel:[{definisjon:se.VURDER_FEILUTBETALING,status:"OPPR"}]}},zn={args:{aksjonspunkterForPanel:[{definisjon:se.KONTROLLER_STOR_ETTERBETALING_SØKER,status:"OPPR"}]}},Wn={args:{aksjonspunkterForPanel:[{definisjon:se.VURDER_FEILUTBETALING,status:"OPPR"},{definisjon:se.KONTROLLER_STOR_ETTERBETALING_SØKER}]}},Jn={args:{aksjonspunkterForPanel:[],tilbakekrevingvalg:{videreBehandling:Ce.TILBAKEKR_OPPDATER,varseltekst:"varsel-eksempel"}}};Yn.parameters={...Yn.parameters,docs:{...Yn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      status: 'OPPR'
    }] as Aksjonspunkt[]
  }
}`,...Yn.parameters?.docs?.source}}};zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      status: 'OPPR'
    }] as Aksjonspunkt[]
  }
}`,...zn.parameters?.docs?.source}}};Wn.parameters={...Wn.parameters,docs:{...Wn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      status: 'OPPR'
    }, {
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER
    }] as Aksjonspunkt[]
  }
}`,...Wn.parameters?.docs?.source}}};Jn.parameters={...Jn.parameters,docs:{...Jn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    tilbakekrevingvalg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
      varseltekst: 'varsel-eksempel'
    } as TilbakekrevingValg
  }
}`,...Jn.parameters?.docs?.source}}};const Qm=["AksjonspunktVurderFeilutbetaling","AksjonspunktKontrollerEtterbetaling","AksjonspunktVurderFeilutbetalingOgEtterbetaling","SimuleringspanelUtenAksjonspunkt"];export{zn as AksjonspunktKontrollerEtterbetaling,Yn as AksjonspunktVurderFeilutbetaling,Wn as AksjonspunktVurderFeilutbetalingOgEtterbetaling,Jn as SimuleringspanelUtenAksjonspunkt,Qm as __namedExportsOrder,Zm as default};
